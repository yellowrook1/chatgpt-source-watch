(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2758],
  {
    39636: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return O;
          },
          default: function () {
            return h;
          },
        });
      var r = n(50134),
        c = n(36112),
        u = n(4399),
        o = n.n(u),
        i = n(85958),
        s = n(45754),
        a = n(10721),
        p = n(70079),
        f = n(35250);
      function l(e, t) {
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
      var O = !0;
      function h(e) {
        return (0, f.jsx)(
          b,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? l(Object(n), !0).forEach(function (t) {
                    (0, c.Z)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : l(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
            }
            return e;
          })({}, e)
        );
      }
      function b(e) {
        var t = e.pluginId,
          n = e.code,
          c = e.state,
          u = (0, a.useRouter)(),
          l = (0, p.useRef)(!1);
        return (
          (0, p.useEffect)(
            function () {
              !0 !== l.current &&
                ((l.current = !0),
                (function () {
                  e.apply(this, arguments);
                })());
              function e() {
                return (e = (0, r.Z)(
                  o().mark(function e() {
                    var r, a, p, f;
                    return o().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = ""
                                  .concat(window.location.origin, "/aip/")
                                  .concat(t, "/oauth/callback")),
                                (e.prev = 1),
                                (e.next = 4),
                                s.ZP.pluginOauthCallback(t, n, r, c)
                              );
                            case 4:
                              (a = e.sent).success
                                ? ((p = new URL(
                                    (0, i.M5)(
                                      i.LT.OAUTH_SUCCESS,
                                      a.redirect_path
                                    )
                                  )).searchParams.set("oauth_success", "true"),
                                  u.push(p.toString()))
                                : u.push(
                                    (0, i.M5)(
                                      i.LT.CUSTOM_ERROR,
                                      a.redirect_path,
                                      null !== (f = a.error) && void 0 !== f
                                        ? f
                                        : a.message
                                    )
                                  ),
                                (e.next = 11);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                u.push(
                                  "/?model=gpt-4-plugins&loginAip=".concat(
                                    t,
                                    "&loginSuccess=false"
                                  )
                                );
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 8]]
                    );
                  })
                )).apply(this, arguments);
              }
            },
            [t, n, c, u]
          ),
          (0, f.jsx)("div", {})
        );
      }
    },
    69613: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/aip/[pluginId]/oauth/callback",
        function () {
          return n(39636);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 69613));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=callback-62c32a26d82c6ffa.js.map
