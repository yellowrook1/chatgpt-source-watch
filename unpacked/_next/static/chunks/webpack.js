!(function () {
  "use strict";
  var e,
    t,
    n,
    c,
    r,
    a,
    f,
    d,
    o,
    i,
    u,
    b,
    s = {},
    l = {};
  function p(e) {
    var t = l[e];
    if (void 0 !== t) return t.exports;
    var n = (l[e] = { id: e, loaded: !1, exports: {} }),
      c = !0;
    try {
      s[e].call(n.exports, n, n.exports, p), (c = !1);
    } finally {
      c && delete l[e];
    }
    return (n.loaded = !0), n.exports;
  }
  (p.m = s),
    (p.amdD = function () {
      throw Error("define cannot be used indirect");
    }),
    (p.amdO = {}),
    (e = []),
    (p.O = function (t, n, c, r) {
      if (n) {
        r = r || 0;
        for (var a = e.length; a > 0 && e[a - 1][2] > r; a--) e[a] = e[a - 1];
        e[a] = [n, c, r];
        return;
      }
      for (var f = 1 / 0, a = 0; a < e.length; a++) {
        for (
          var n = e[a][0], c = e[a][1], r = e[a][2], d = !0, o = 0;
          o < n.length;
          o++
        )
          f >= r &&
          Object.keys(p.O).every(function (e) {
            return p.O[e](n[o]);
          })
            ? n.splice(o--, 1)
            : ((d = !1), r < f && (f = r));
        if (d) {
          e.splice(a--, 1);
          var i = c();
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
    (p.t = function (e, c) {
      if (
        (1 & c && (e = this(e)),
        8 & c ||
          ("object" == typeof e &&
            e &&
            ((4 & c && e.__esModule) ||
              (16 & c && "function" == typeof e.then))))
      )
        return e;
      var r = Object.create(null);
      p.r(r);
      var a = {};
      t = t || [null, n({}), n([]), n(n)];
      for (var f = 2 & c && e; "object" == typeof f && !~t.indexOf(f); f = n(f))
        Object.getOwnPropertyNames(f).forEach(function (t) {
          a[t] = function () {
            return e[t];
          };
        });
      return (
        (a.default = function () {
          return e;
        }),
        p.d(r, a),
        r
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
          560: "1092ac6e",
          1122: "9784a43c",
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
          132: "660fa56f7d9f8841",
          276: "f366c884f1a0069d",
          469: "5c208462c867bb6d",
          560: "11bb38d51776e36c",
          660: "3ff460de12e80a25",
          676: "1695899797a18685",
          718: "c39541320838d2e1",
          987: "7f0de228a3562cc0",
          1122: "35c9d0cb5854cadd",
          1141: "1aac68555afd4d6b",
          1393: "035f577202ad7345",
          1597: "fd18bd86faeaa7b0",
          1776: "e9a991b898301078",
          1777: "361ecd58fa0ac9f5",
          1948: "797361ea99a892a2",
          1966: "8596a5c250b2c4f7",
          2143: "b4746c7a1f512b5a",
          2161: "36f791c3f2dbf0ec",
          2178: "29104c892767faf2",
          2186: "415799798aaeeffc",
          2212: "04ab16a240f4ce97",
          2292: "32ab3d24800a1a80",
          3032: "3421eea06995d5df",
          3060: "0f0eee9f9d7a9a3a",
          3096: "df174924c6968fe4",
          3332: "c865be216348dd51",
          3432: "2f6ad9ce262d966a",
          3466: "4c4cb925af3442d0",
          3472: "c63200a5c100c707",
          3705: "46b523e60584f44f",
          3796: "739643ec58c60aab",
          3842: "2fad09c9cd727ecc",
          4042: "a08151d3efed095c",
          4113: "0c0ee75dab4b3a1d",
          4114: "f0c19e9fbc4a2762",
          4347: "1ce750acd0106d6e",
          4505: "b80d67713515dff2",
          4604: "d028af8c55d386c9",
          4615: "b41a5c7bc5017269",
          4616: "94b9b8a3298ce71f",
          4685: "352bbad25795ea42",
          4700: "60463b33da33b8b8",
          4806: "6ef5e476dad7ed16",
          5187: "2ae7c3fec20da7cb",
          5200: "73ef26c15091fb86",
          5288: "eecba8f575f628a2",
          5632: "0445a5d12846771b",
          5710: "9dc2787a40cce737",
          5719: "1a42259f0c3d91c1",
          5823: "6c7d9ca4e6244388",
          5883: "70979731ae1a472e",
          5952: "c3edeef63a58e362",
          5984: "270e8342cc6087e0",
          6291: "a671d3e99d9a3215",
          6522: "ee7e1452e33739e6",
          6550: "b0eb71c1fc6253b5",
          6867: "4b3fe5232d753e7c",
          6875: "2177f28b937c71b0",
          6951: "583ec3a0c8764140",
          6952: "018b8b2946dc8b20",
          7198: "10400e67574b5a9a",
          7414: "abf37f1db8be5c89",
          7493: "3a60974229840ffd",
          7659: "c682389becf401d9",
          7665: "f235c81abfebf195",
          7745: "6d3d8ed11b0e9709",
          7791: "367b294ff3d2e4a0",
          7795: "5fa4b187af7d697f",
          7947: "42809fbb8b2f331e",
          7994: "01c9e3f110f368ae",
          8009: "c6c0f36a9a82d8dd",
          8119: "fa6fc1112abad268",
          8150: "87e726622393959c",
          8226: "84cbf69a0bf382da",
          8400: "edae42c864b47324",
          8671: "bc4f77e47caaeac6",
          8682: "cbbca09eae978a72",
          8799: "79c8284e0121e7e4",
          8862: "d018f6e9a9ebea16",
          9087: "16a1a63dd7d6adcb",
          9111: "207481a6c8e707c7",
          9120: "5b368a3b1f211414",
          9214: "32ab39c72c4d4509",
          9271: "3b0e463179d66d5e",
          9464: "6abd0ae9c08306a9",
          9473: "36bb6cb6e7d3b8e4",
          9578: "4ed8f6b71d8bfe92",
          9610: "aead845693cd969c",
          9649: "1f34ff95cbccd78d",
          9679: "d9cd8bc88bf780e8",
          9826: "92961eb1ec331066",
          9896: "550cbb4354158933",
        }[e] +
        ".js"
      );
    }),
    (p.miniCssF = function (e) {
      return (
        "static/css/" +
        {
          2888: "f3d0bad461ffb80b",
          3842: "944a9aa5c00c7d0e",
          9111: "d92eaad6fd257c73",
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
    (c = {}),
    (r = "_N_E:"),
    (p.l = function (e, t, n, a) {
      if (c[e]) {
        c[e].push(t);
        return;
      }
      if (void 0 !== n)
        for (
          var f, d, o = document.getElementsByTagName("script"), i = 0;
          i < o.length;
          i++
        ) {
          var u = o[i];
          if (
            u.getAttribute("src") == e ||
            u.getAttribute("data-webpack") == r + n
          ) {
            f = u;
            break;
          }
        }
      f ||
        ((d = !0),
        ((f = document.createElement("script")).charset = "utf-8"),
        (f.timeout = 120),
        p.nc && f.setAttribute("nonce", p.nc),
        f.setAttribute("data-webpack", r + n),
        (f.src = p.tu(e)),
        0 === f.src.indexOf(window.location.origin + "/") ||
          (f.crossOrigin = "anonymous")),
        (c[e] = [t]);
      var b = function (t, n) {
          (f.onerror = f.onload = null), clearTimeout(s);
          var r = c[e];
          if (
            (delete c[e],
            f.parentNode && f.parentNode.removeChild(f),
            r &&
              r.forEach(function (e) {
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
        d && document.head.appendChild(f);
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
        void 0 === a &&
          ((a = {
            createScriptURL: function (e) {
              return e;
            },
          }),
          "undefined" != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (a = trustedTypes.createPolicy("nextjs#bundler", a))),
        a
      );
    }),
    (p.tu = function (e) {
      return p.tt().createScriptURL(e);
    }),
    (p.p = "https://cdn.oaistatic.com/_next/"),
    (f = function (e, t, n, c) {
      var r = document.createElement("link");
      return (
        (r.rel = "stylesheet"),
        (r.type = "text/css"),
        (r.onerror = r.onload =
          function (a) {
            if (((r.onerror = r.onload = null), "load" === a.type)) n();
            else {
              var f = a && ("load" === a.type ? "missing" : a.type),
                d = (a && a.target && a.target.href) || t,
                o = Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
              (o.code = "CSS_CHUNK_LOAD_FAILED"),
                (o.type = f),
                (o.request = d),
                r.parentNode.removeChild(r),
                c(o);
            }
          }),
        (r.href = t),
        0 !== r.href.indexOf(window.location.origin + "/") &&
          (r.crossOrigin = "anonymous"),
        document.head.appendChild(r),
        r
      );
    }),
    (d = function (e, t) {
      for (
        var n = document.getElementsByTagName("link"), c = 0;
        c < n.length;
        c++
      ) {
        var r = n[c],
          a = r.getAttribute("data-href") || r.getAttribute("href");
        if ("stylesheet" === r.rel && (a === e || a === t)) return r;
      }
      for (
        var f = document.getElementsByTagName("style"), c = 0;
        c < f.length;
        c++
      ) {
        var r = f[c],
          a = r.getAttribute("data-href");
        if (a === e || a === t) return r;
      }
    }),
    (o = { 2272: 0 }),
    (p.f.miniCss = function (e, t) {
      o[e]
        ? t.push(o[e])
        : 0 !== o[e] &&
          { 3842: 1, 9111: 1 }[e] &&
          t.push(
            (o[e] = new Promise(function (t, n) {
              var c = p.miniCssF(e),
                r = p.p + c;
              if (d(c, r)) return t();
              f(e, r, t, n);
            }).then(
              function () {
                o[e] = 0;
              },
              function (t) {
                throw (delete o[e], t);
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
          var c = new Promise(function (t, c) {
            n = i[e] = [t, c];
          });
          t.push((n[2] = c));
          var r = p.p + p.u(e),
            a = Error();
          p.l(
            r,
            function (t) {
              if (p.o(i, e) && (0 !== (n = i[e]) && (i[e] = void 0), n)) {
                var c = t && ("load" === t.type ? "missing" : t.type),
                  r = t && t.target && t.target.src;
                (a.message =
                  "Loading chunk " + e + " failed.\n(" + c + ": " + r + ")"),
                  (a.name = "ChunkLoadError"),
                  (a.type = c),
                  (a.request = r),
                  n[1](a);
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
        c,
        r = t[0],
        a = t[1],
        f = t[2],
        d = 0;
      if (
        r.some(function (e) {
          return 0 !== i[e];
        })
      ) {
        for (n in a) p.o(a, n) && (p.m[n] = a[n]);
        if (f) var o = f(p);
      }
      for (e && e(t); d < r.length; d++)
        (c = r[d]), p.o(i, c) && i[c] && i[c][0](), (i[c] = 0);
      return p.O(o);
    }),
    (b = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(
      u.bind(null, 0)
    ),
    (b.push = u.bind(null, b.push.bind(b))),
    (p.nc = void 0);
})();
//# sourceMappingURL=webpack-d7f558da1f631198.js.map
