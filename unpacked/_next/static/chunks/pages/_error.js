(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4820],
  {
    71802: function (e, t, r) {
      "use strict";
      var n = r(38245),
        o = r(82510),
        l = r(45163),
        i = r(94761),
        a = r(34806);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return h;
          },
        });
      var u = r(64838),
        c = u._(r(70079)),
        s = u._(r(34250)),
        f = {
          400: "Bad Request",
          404: "This page could not be found",
          405: "Method Not Allowed",
          500: "Internal Server Error",
        };
      function d(e) {
        var t = e.res,
          r = e.err;
        return {
          statusCode: t && t.statusCode ? t.statusCode : r ? r.statusCode : 404,
        };
      }
      var p = {
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
          desc: { display: "inline-block", textAlign: "left" },
          h1: {
            display: "inline-block",
            margin: "0 20px 0 0",
            paddingRight: 23,
            fontSize: 24,
            fontWeight: 500,
            verticalAlign: "top",
            lineHeight: "49px",
          },
          h2: { fontSize: 14, fontWeight: 400, lineHeight: "49px", margin: 0 },
        },
        h = (function (e) {
          l(u, e);
          var t,
            r =
              ((t = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  r = a(u);
                if (t) {
                  var n = a(this).constructor;
                  e = Reflect.construct(r, arguments, n);
                } else e = r.apply(this, arguments);
                return i(this, e);
              });
          function u() {
            return n(this, u), r.apply(this, arguments);
          }
          return (
            o(u, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.statusCode,
                    r = e.withDarkMode,
                    n =
                      this.props.title ||
                      f[t] ||
                      "An unexpected error has occurred";
                  return c.default.createElement(
                    "div",
                    { style: p.error },
                    c.default.createElement(
                      s.default,
                      null,
                      c.default.createElement(
                        "title",
                        null,
                        t
                          ? t + ": " + n
                          : "Application error: a client-side exception has occurred"
                      )
                    ),
                    c.default.createElement(
                      "div",
                      null,
                      c.default.createElement("style", {
                        dangerouslySetInnerHTML: {
                          __html:
                            "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}" +
                            (void 0 === r || r
                              ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"
                              : ""),
                        },
                      }),
                      t
                        ? c.default.createElement(
                            "h1",
                            { className: "next-error-h1", style: p.h1 },
                            t
                          )
                        : null,
                      c.default.createElement(
                        "div",
                        { style: p.desc },
                        c.default.createElement(
                          "h2",
                          { style: p.h2 },
                          this.props.title || t
                            ? n
                            : c.default.createElement(
                                c.default.Fragment,
                                null,
                                "Application error: a client-side exception has occurred (see the browser console for more information)"
                              ),
                          "."
                        )
                      )
                    )
                  );
                },
              },
            ]),
            u
          );
        })(c.default.Component);
      (h.displayName = "ErrorPage"),
        (h.getInitialProps = d),
        (h.origGetInitialProps = d),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    38678: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_error",
        function () {
          return r(71802);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 38678));
    }),
      (_N_E = e.O());
  },
]);
