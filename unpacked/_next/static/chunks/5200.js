(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5200],
  {
    25200: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let r = n(27597),
        o = n(35250),
        i = r._(n(70079)),
        l = r._(n(95975)),
        a = {
          400: "Bad Request",
          404: "This page could not be found",
          405: "Method Not Allowed",
          500: "Internal Server Error",
        };
      function s(e) {
        let { res: t, err: n } = e;
        return {
          statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404,
        };
      }
      let u = {
        error: {
          fontFamily:
            'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        desc: { lineHeight: "48px" },
        h1: {
          display: "inline-block",
          margin: "0 20px 0 0",
          paddingRight: 23,
          fontSize: 24,
          fontWeight: 500,
          verticalAlign: "top",
        },
        h2: { fontSize: 14, fontWeight: 400, lineHeight: "28px" },
        wrap: { display: "inline-block" },
      };
      class d extends i.default.Component {
        render() {
          let { statusCode: e, withDarkMode: t = !0 } = this.props,
            n = this.props.title || a[e] || "An unexpected error has occurred";
          return (0, o.jsxs)("div", {
            style: u.error,
            children: [
              (0, o.jsx)(l.default, {
                children: (0, o.jsx)("title", {
                  children: e
                    ? e + ": " + n
                    : "Application error: a client-side exception has occurred",
                }),
              }),
              (0, o.jsxs)("div", {
                style: u.desc,
                children: [
                  (0, o.jsx)("style", {
                    dangerouslySetInnerHTML: {
                      __html:
                        "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}" +
                        (t
                          ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"
                          : ""),
                    },
                  }),
                  e
                    ? (0, o.jsx)("h1", {
                        className: "next-error-h1",
                        style: u.h1,
                        children: e,
                      })
                    : null,
                  (0, o.jsx)("div", {
                    style: u.wrap,
                    children: (0, o.jsxs)("h2", {
                      style: u.h2,
                      children: [
                        this.props.title || e
                          ? n
                          : (0, o.jsx)(o.Fragment, {
                              children:
                                "Application error: a client-side exception has occurred (see the browser console for more information)",
                            }),
                        ".",
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
      }
      (d.displayName = "ErrorPage"),
        (d.getInitialProps = s),
        (d.origGetInitialProps = s),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    2179: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(27597)._(n(70079)).default.createContext({});
    },
    66284: function (e, t) {
      "use strict";
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    95975: function (e, t, n) {
      "use strict";
      var r = n(79910);
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          defaultHead: function () {
            return p;
          },
          default: function () {
            return g;
          },
        });
      let i = n(27597),
        l = n(89161),
        a = n(35250),
        s = l._(n(70079)),
        u = i._(n(91804)),
        d = n(2179),
        c = n(57815),
        f = n(66284);
      function p(e) {
        void 0 === e && (e = !1);
        let t = [(0, a.jsx)("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              (0, a.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function h(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === s.default.Fragment
            ? e.concat(
                s.default.Children.toArray(t.props.children).reduce(
                  (e, t) =>
                    "string" == typeof t || "number" == typeof t
                      ? e
                      : e.concat(t),
                  []
                )
              )
            : e.concat(t);
      }
      n(89148);
      let y = ["name", "httpEquiv", "charSet", "itemProp"];
      function b(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(h, [])
          .reverse()
          .concat(p(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (o) => {
                let i = !0,
                  l = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  l = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (i = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (i = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = y.length; e < t; e++) {
                      let t = y[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (i = !1) : n.add(t);
                        else {
                          let e = o.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !l) && n.has(e)
                            ? (i = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let i = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? o(Object(n), !0).forEach(function (t) {
                        r(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : o(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                }
                return e;
              })({}, e.props || {});
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                s.default.cloneElement(e, t)
              );
            }
            return s.default.cloneElement(e, { key: i });
          });
      }
      let g = function (e) {
        let { children: t } = e,
          n = (0, s.useContext)(d.AmpStateContext),
          r = (0, s.useContext)(c.HeadManagerContext);
        return (0, a.jsx)(u.default, {
          reduceComponentsToState: b,
          headManager: r,
          inAmpMode: (0, f.isInAmpMode)(n),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    91804: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(70079),
        o = r.useLayoutEffect,
        i = r.useEffect;
      function l(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function l() {
          if (t && t.mountedInstances) {
            let o = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(o, e));
          }
        }
        return (
          o(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = l),
              () => {
                t && (t._pendingUpdate = l);
              }
            )
          ),
          i(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    89148: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "warnOnce", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (e) => {};
    },
  },
]);
//# sourceMappingURL=5200.73ef26c15091fb86.js.map
