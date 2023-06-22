# ChatGPT Source Watch

Analyzing the evolution of ChatGPT's codebase through time with curated archives and scripts.

Or, to put it more poetically, in the eloquent words of ChatGPT itself:

> ChatGPT Source Watch is a meticulously curated repository that serves as a treasure trove for those interested in observing the evolution of ChatGPT's webpack chunks. It gracefully preserves the historical webpack chunks in their original splendor, while also offering a breath of fresh air with unpacked and beautifully formatted versions of the chunk files. This thoughtful touch empowers you to effortlessly analyze the nuances between different builds.
>
> But there's more - it's not just about the chunks. The repository is adorned with a detailed changelog that tracks the symphony of changes over time, and is equipped with a suite of automation scripts that act as your personal concierge.
>
> ChatGPT Source Watch stands as a beacon of transparency and a portal to discovery.

## Repository Structure

- [`CHANGELOG.md`](./CHANGELOG.md): A record of changes made in each build version.
- [`scripts/`](./scripts/): Helper scripts to streamline various tasks in the repository.
- [`orig/`](./orig/): This directory contains the raw unmodified webpack chunks from each build, saved for historical reference.
- [`unpacked/`](./unpacked/): This directory contains the unpacked and [`prettier`](https://prettier.io/) formatted version of the chunk files, for easier diffing and analysis.

## Helper Scripts

The [`scripts/`](./scripts/) directory is home to a collection of helper scripts designed to streamline various tasks in the repository

- [`filter-for-unsaved.js`](./scripts/filter-for-unsaved.js): A Node.js script that takes input URLs from stdin and outputs URLs of webpack chunks that are not already saved in the local orig directory. Ensures no duplicates in the output. Useful for fetching new chunks.
- [`buildmanifest-to-json.js`](./scripts/buildmanifest-to-json.js): A Node.js script that converts a build manifest file to JSON. When piped with the second `jq` command, it extracts and prefixes static asset URLs with `https://chat.openai.com/_next/`, ready for fetching.
- [`unpack-files-from-orig.js`](./scripts/unpack-files-from-orig.js): A Node.js script that processes input file paths from stdin, copies the corresponding files from the [`orig/`](./orig/) directory to an [`unpacked/`](./unpacked/) directory, and normalizes directory names and file names by removing hashes. It then runs [`prettier`](https://prettier.io/) on all the files in the [`unpacked/`](./unpacked/) directory for formatting. Useful for preparing files for easier diffing between builds.
- [`filter-urls-not-in-changelog.js`](./scripts/filter-urls-not-in-changelog.js): A Node.js script that filters input URLs from stdin and outputs only those URLs that are not already present in the [`CHANGELOG.md`](./CHANGELOG.md). Useful for identifying new URLs that have not been logged.

Please carefully read and comprehend the contents of each script, as detailed documentation is not provided. Understanding how the scripts operate is essential before executing them.

## Getting Started

Clone this repository:

```shell
git clone https://github.com/0xdevalias/chatgpt-source-watch.git
cd chatgpt-source-watch
```

Start by obtaining a list of webpack chunks including the `_buildManifest.js` of a new build. For example, you can extract webpack chunk files and the build manifest from a webpage using Chrome DevTools and a CSS selector:

1. Open Chrome and navigate to the target webpage.
2. Press `Ctrl` + `Shift` + `I` to open Chrome DevTools.
3. Go to the Console tab in DevTools.
4. Run the following JavaScript snippet to extract URLs from `script` tags inside the `head` element:

```js
const scriptTags = document.querySelectorAll('html > head > script');
const urls = Array.from(scriptTags).map(tag => tag.src).filter(Boolean);
console.log(urls);
```

Use the [`filter-for-unsaved.js`](./scripts/filter-for-unsaved.js) script to filter this list of chunk URLs to output only the URLs of webpack chunks not already saved in the local [`orig/`](./orig/) directory:

```shell
echo "<input_urls>" | ./scripts/filter-for-unsaved.js
```

Manually download the chunk files from the URLs output by the [`filter-for-unsaved.js`](./scripts/filter-for-unsaved.js) script. Save them in the [`orig/`](./orig/) directory ensuring to match the original file structure and filenames (including hashes). As a sanity check, you can re-run `filter-for-unsaved.js` and check that none of the chunks you just saved are listed anymore.

Use the [`buildmanifest-to-json.js`](./scripts/buildmanifest-to-json.js) script to turn the build manifest into JSON and fetch build URLs. The script accepts the build hash or a full URL to a `_buildManifest.js` file as an argument:

```shell
# Run the script with a build hash
./scripts/buildmanifest-to-json.js <build-hash> | jq -r '[.. | strings | select(startswith("static"))] | unique | map("https://chat.openai.com/_next/" + .) | .[]'

# Or run the script with a full URL to a _buildManifest.js file
./scripts/buildmanifest-to-json.js <url-to-buildmanifest> | jq -r '[.. | strings | select(startswith("static"))] | unique | map("https://chat.openai.com/_next/" + .) | .[]'
```

Use the [`unpack-files-from-orig.js`](./scripts/unpack-files-from-orig.js) script to unpack, normalize, and format files from the `orig/` directory. Pass the list of URLs (or URL file paths) that need to be unpacked as input:

```shell
echo "<list_of_urls_or_file_paths>" | ./scripts/unpack-files-from-orig.js
```

It's recommended to run [`prettier`](https://prettier.io/) multiple times to ensure complete formatting, as one pass may not address all complexities. Keep executing the following command until files stay unchanged:

```shell
prettier --write unpacked/**/*
```

Manually update the [`CHANGELOG.md`](./CHANGELOG.md) file with the information about the new build and changes observed. Ensure that you follow the existing format and include relevant details such as the build version, date, and a summary of the changes.

Finally, we can use the [`filter-urls-not-in-changelog.js`](./scripts/filter-urls-not-in-changelog.js) script as a sanity check to ensure that all the URLs in our list are properly captured in the [`CHANGELOG.md`](./CHANGELOG.md) file:

```shell
echo "<input_urls>" | ./scripts/filter-urls-not-in-changelog.js
```

After using the helper scripts, you can compare different builds by navigating to the [`unpacked/`](./unpacked) directory and using tools like [`git diff`](https://git-scm.com/docs/git-diff):

```shell
cd unpacked
git diff <build_hash_1>..<build_hash_2> -- <filename>
```

## License

This project is subject to multiple licenses with specific exceptions. For details, please refer to the [`LICENSE`](./LICENSE) file.

## Responsible Usage

This repository is provided for educational and research purposes. Ensure that you use the content, especially from the `orig/` and `unpacked/` directories, in a lawful and ethical manner. We are not responsible for any unauthorized or unlawful use of the materials contained in this repository.

OpenAI operates a Bug Bounty Program through Bugcrowd, aimed at enhancing the security of its services via responsible vulnerability disclosures. For detailed information and participation, please visit the official program page on [Bugcrowd](https://bugcrowd.com/openai). You can also read the [announcement blog post](https://openai.com/blog/bug-bounty-program) for an overview of the program.
