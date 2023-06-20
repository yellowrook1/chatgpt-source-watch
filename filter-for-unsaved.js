#!/usr/bin/env node

// TODO: Save these scripts somewhere useful:
//   ./buildmanifest-to-json.js | jq -r '[.. | strings | select(startswith("static"))] | unique | map("_next/" + .) | .[]' | ./filter-for-unsaved.js | pbcopy
//   pbpaste | ./filter-for-unsaved.js | pbcopy

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const basePath = path.join(__dirname, 'orig');

// Define URL prefix
const urlPrefix = 'https://chat.openai.com/';

// Define a set to store all output URLs
let outputUrls = new Set();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(rawInputPath) {
  const filePath = rawInputPath.replace(urlPrefix, '');
  const fullPath = path.join(basePath, filePath);
  const outputUrl = `${urlPrefix}${filePath}`;

  // Check if the URL has already been output
  if (!outputUrls.has(outputUrl)) {
    // check if file does not exist
    if (!fs.existsSync(fullPath)) {
      console.log(outputUrl);

      // Add the URL to the set
      outputUrls.add(outputUrl);
    }
  }
});
