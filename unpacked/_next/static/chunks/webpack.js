!(function () {
  "use strict";
  var e,
    t,
    n,
    r,
    a,
    c,
    f,
    o,
    d,
    i,
    u,
    b,
    s = {},
    l = {};
  function p(e) {
    var t = l[e];
    if (void 0 !== t) return t.exports;
    var n = (l[e] = { id: e, loaded: !1, exports: {} }),
      r = !0;
    try {
      s[e].call(n.exports, n, n.exports, p), (r = !1);
    } finally {
      r && delete l[e];
    }
    return (n.loaded = !0), n.exports;
  }
  (p.m = s),
    (p.amdD = function () {
      throw Error("define cannot be used indirect");
    }),
    (p.amdO = {}),
    (e = []),
    (p.O = function (t, n, r, a) {
      if (n) {
        a = a || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
        e[c] = [n, r, a];
        return;
      }
      for (var f = 1 / 0, c = 0; c < e.length; c++) {
        for (
          var n = e[c][0], r = e[c][1], a = e[c][2], o = !0, d = 0;
          d < n.length;
          d++
        )
          f >= a &&
          Object.keys(p.O).every(function (e) {
            return p.O[e](n[d]);
          })
            ? n.splice(d--, 1)
            : ((o = !1), a < f && (f = a));
        if (o) {
          e.splice(c--, 1);
          var i = r();
          void 0 !== i && (t = i);
        }
      }
      return t;
    }),
    (p.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return p.d(t, { a: t }), t;
    }),
    (n = Object.getPrototypeOf
      ? function (e) {
          return Object.getPrototypeOf(e);
        }
      : function (e) {
          return e.__proto__;
        }),
    (p.t = function (e, r) {
      if (
        (1 & r && (e = this(e)),
        8 & r ||
          ("object" == typeof e &&
            e &&
            ((4 & r && e.__esModule) ||
              (16 & r && "function" == typeof e.then))))
      )
        return e;
      var a = Object.create(null);
      p.r(a);
      var c = {};
      t = t || [null, n({}), n([]), n(n)];
      for (var f = 2 & r && e; "object" == typeof f && !~t.indexOf(f); f = n(f))
        Object.getOwnPropertyNames(f).forEach(function (t) {
          c[t] = function () {
            return e[t];
          };
        });
      return (
        (c.default = function () {
          return e;
        }),
        p.d(a, c),
        a
      );
    }),
    (p.d = function (e, t) {
      for (var n in t)
        p.o(t, n) &&
          !p.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (p.f = {}),
    (p.e = function (e) {
      return Promise.all(
        Object.keys(p.f).reduce(function (t, n) {
          return p.f[n](e, t), t;
        }, [])
      );
    }),
    (p.u = function (e) {
      return (
        "static/chunks/" +
        ({
          1122: "9784a43c",
          2922: "d7aec224",
          3096: "queryString",
          3796: "c029043f",
          4604: "tsub-middleware",
          5823: "30750f44",
          5984: "303a24d8",
          7414: "420d684a",
          7493: "schemaFilter",
          8119: "auto-track",
          8150: "legacyVideos",
          8671: "65fd0ec4",
          8682: "sso",
          8862: "5be645cc",
          9214: "remoteMiddleware",
          9464: "ajs-destination",
          9473: "0d9e9cd9",
          9649: "b9f778a8",
          9896: "adb5c70d",
        }[e] || e) +
        "." +
        {
          119: "0844e4df93c5188c",
          132: "bbd125dd91e9ade9",
          660: "3ff460de12e80a25",
          676: "66025595ccbf326d",
          718: "34be31bb56f58206",
          987: "5c2a82eae95a6c79",
          1122: "b948fcbcc6b375c3",
          1141: "29fa5072e9fdec3e",
          1597: "452b273c1662f842",
          1776: "769455772bc1c816",
          1777: "741a94e106280c78",
          1802: "c8bf7a6f2417514c",
          1948: "6e3b2a3b62c6f174",
          1966: "63f2f6562c459b3e",
          1994: "9ac177279866526d",
          2143: "2b1ee99152016983",
          2161: "f8016a3576d3f05a",
          2178: "20a6faa453f0b2ce",
          2186: "cabe8d2968afacb8",
          2212: "a8c0c0dc39535aac",
          2292: "eac43528b3707f7a",
          2922: "68e70012d9ba3ab1",
          3060: "fb83d49572672105",
          3096: "df174924c6968fe4",
          3332: "b48f92bc1c9c40f2",
          3432: "37715d54737d439a",
          3466: "8ef30440c1e3b0be",
          3705: "df770067bb99d1a1",
          3796: "81bb4e02184847d4",
          4042: "2464a20b06bb9fd5",
          4113: "0c0ee75dab4b3a1d",
          4114: "a1302f6d61ae32c1",
          4347: "cd589e4354d87303",
          4505: "94bda2cc8da8052f",
          4604: "50753041151f9c21",
          4615: "9306d3f376af2e5a",
          4616: "a4189908f66dfacc",
          4663: "925bf83197940c00",
          4685: "140d3e7e712ccf43",
          4700: "0ac76035e4e53eb9",
          4806: "48a1608ca4a35b94",
          5104: "e1eba200073340ab",
          5187: "ec6879a291f3a83c",
          5288: "7548221d48c11f70",
          5632: "53270a01a6661a1c",
          5719: "7c6ed6ab3bf446f4",
          5823: "7367fc2b279f784a",
          5883: "26e006e4ebd5dd52",
          5952: "4b84004e2d6c36e4",
          5984: "7ddbe87cd23d1af6",
          6002: "169d3d308b202677",
          6008: "9baa91ec1764b34d",
          6291: "2c192226514b0e32",
          6522: "25737706ec155d3d",
          6550: "b0eb71c1fc6253b5",
          6867: "4b3fe5232d753e7c",
          6875: "8923908aaf5818b7",
          6951: "fb6f1546c437acb4",
          6952: "a1e920c69465305d",
          7198: "76979709cbba9540",
          7414: "77ed574b6550c57e",
          7493: "3a60974229840ffd",
          7659: "925252ac7a24dcd9",
          7745: "6d3d8ed11b0e9709",
          7791: "478386fd39213df8",
          7795: "7da983f633da24a6",
          7942: "8b4794c249b2310f",
          7947: "f7a4654e4b09da88",
          7994: "01c9e3f110f368ae",
          8009: "c6c0f36a9a82d8dd",
          8119: "fa6fc1112abad268",
          8150: "87e726622393959c",
          8226: "bffbfdbe5bed6e91",
          8400: "f9bef3b525327fad",
          8671: "f0a4fd236d1d0804",
          8682: "9135d26257e2dd71",
          8862: "57928d286d288f9f",
          9087: "3e1336fc6f035098",
          9118: "f8d764b6cd157f81",
          9120: "f83ec8d72c783750",
          9214: "32ab39c72c4d4509",
          9271: "07bf829940a3f8f5",
          9387: "4d07776b2bcf19aa",
          9464: "d9cd2d046a23b656",
          9473: "d91605606adc34f6",
          9610: "2a98c01f0e084702",
          9649: "971795eb8f086f09",
          9826: "6a21117ec9940b7f",
          9896: "ab7964744f7828e4",
        }[e] +
        ".js"
      );
    }),
    (p.miniCssF = function (e) {
      return (
        "static/css/" +
        {
          2888: "71ac0dd915183b32",
          4663: "a3516913ef4144ef",
          7942: "944a9aa5c00c7d0e",
        }[e] +
        ".css"
      );
    }),
    (p.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (p.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r = {}),
    (a = "_N_E:"),
    (p.l = function (e, t, n, c) {
      if (r[e]) {
        r[e].push(t);
        return;
      }
      if (void 0 !== n)
        for (
          var f, o, d = document.getElementsByTagName("script"), i = 0;
          i < d.length;
          i++
        ) {
          var u = d[i];
          if (
            u.getAttribute("src") == e ||
            u.getAttribute("data-webpack") == a + n
          ) {
            f = u;
            break;
          }
        }
      f ||
        ((o = !0),
        ((f = document.createElement("script")).charset = "utf-8"),
        (f.timeout = 120),
        p.nc && f.setAttribute("nonce", p.nc),
        f.setAttribute("data-webpack", a + n),
        (f.src = p.tu(e)),
        0 === f.src.indexOf(window.location.origin + "/") ||
          (f.crossOrigin = "anonymous")),
        (r[e] = [t]);
      var b = function (t, n) {
          (f.onerror = f.onload = null), clearTimeout(s);
          var a = r[e];
          if (
            (delete r[e],
            f.parentNode && f.parentNode.removeChild(f),
            a &&
              a.forEach(function (e) {
                return e(n);
              }),
            t)
          )
            return t(n);
        },
        s = setTimeout(
          b.bind(null, void 0, { type: "timeout", target: f }),
          12e4
        );
      (f.onerror = b.bind(null, f.onerror)),
        (f.onload = b.bind(null, f.onload)),
        o && document.head.appendChild(f);
    }),
    (p.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (p.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e;
    }),
    (p.tt = function () {
      return (
        void 0 === c &&
          ((c = {
            createScriptURL: function (e) {
              return e;
            },
          }),
          "undefined" != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (c = trustedTypes.createPolicy("nextjs#bundler", c))),
        c
      );
    }),
    (p.tu = function (e) {
      return p.tt().createScriptURL(e);
    }),
    (p.p = "https://cdn.oaistatic.com/_next/"),
    (f = function (e, t, n, r) {
      var a = document.createElement("link");
      return (
        (a.rel = "stylesheet"),
        (a.type = "text/css"),
        (a.onerror = a.onload =
          function (c) {
            if (((a.onerror = a.onload = null), "load" === c.type)) n();
            else {
              var f = c && ("load" === c.type ? "missing" : c.type),
                o = (c && c.target && c.target.href) || t,
                d = Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
              (d.code = "CSS_CHUNK_LOAD_FAILED"),
                (d.type = f),
                (d.request = o),
                a.parentNode.removeChild(a),
                r(d);
            }
          }),
        (a.href = t),
        0 !== a.href.indexOf(window.location.origin + "/") &&
          (a.crossOrigin = "anonymous"),
        document.head.appendChild(a),
        a
      );
    }),
    (o = function (e, t) {
      for (
        var n = document.getElementsByTagName("link"), r = 0;
        r < n.length;
        r++
      ) {
        var a = n[r],
          c = a.getAttribute("data-href") || a.getAttribute("href");
        if ("stylesheet" === a.rel && (c === e || c === t)) return a;
      }
      for (
        var f = document.getElementsByTagName("style"), r = 0;
        r < f.length;
        r++
      ) {
        var a = f[r],
          c = a.getAttribute("data-href");
        if (c === e || c === t) return a;
      }
    }),
    (d = { 2272: 0 }),
    (p.f.miniCss = function (e, t) {
      d[e]
        ? t.push(d[e])
        : 0 !== d[e] &&
          { 4663: 1, 7942: 1 }[e] &&
          t.push(
            (d[e] = new Promise(function (t, n) {
              var r = p.miniCssF(e),
                a = p.p + r;
              if (o(r, a)) return t();
              f(e, a, t, n);
            }).then(
              function () {
                d[e] = 0;
              },
              function (t) {
                throw (delete d[e], t);
              }
            ))
          );
    }),
    (i = { 2272: 0 }),
    (p.f.j = function (e, t) {
      var n = p.o(i, e) ? i[e] : void 0;
      if (0 !== n) {
        if (n) t.push(n[2]);
        else if (2272 != e) {
          var r = new Promise(function (t, r) {
            n = i[e] = [t, r];
          });
          t.push((n[2] = r));
          var a = p.p + p.u(e),
            c = Error();
          p.l(
            a,
            function (t) {
              if (p.o(i, e) && (0 !== (n = i[e]) && (i[e] = void 0), n)) {
                var r = t && ("load" === t.type ? "missing" : t.type),
                  a = t && t.target && t.target.src;
                (c.message =
                  "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")"),
                  (c.name = "ChunkLoadError"),
                  (c.type = r),
                  (c.request = a),
                  n[1](c);
              }
            },
            "chunk-" + e,
            e
          );
        } else i[e] = 0;
      }
    }),
    (p.O.j = function (e) {
      return 0 === i[e];
    }),
    (u = function (e, t) {
      var n,
        r,
        a = t[0],
        c = t[1],
        f = t[2],
        o = 0;
      if (
        a.some(function (e) {
          return 0 !== i[e];
        })
      ) {
        for (n in c) p.o(c, n) && (p.m[n] = c[n]);
        if (f) var d = f(p);
      }
      for (e && e(t); o < a.length; o++)
        (r = a[o]), p.o(i, r) && i[r] && i[r][0](), (i[r] = 0);
      return p.O(d);
    }),
    (b = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(
      u.bind(null, 0)
    ),
    (b.push = u.bind(null, b.push.bind(b))),
    (p.nc = void 0);
})();
//# sourceMappingURL=webpack-93b600f4f8934c4f.js.map
