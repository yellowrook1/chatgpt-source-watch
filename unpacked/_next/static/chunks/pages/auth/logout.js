(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7825],
  {
    8995: function (t, r, n) {
      "use strict";
      n.r(r),
        n.d(r, {
          __N_SSP: function () {
            return b;
          },
          default: function () {
            return w;
          },
        });
      var e,
        o = n(36112),
        c = n(50134),
        u = n(4399),
        i = n.n(u),
        f = n(40318),
        s = n(26565),
        a = n(70079),
        l = n(35250);
      function p(t, r) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(t);
          r &&
            (e = e.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            n.push.apply(n, e);
        }
        return n;
      }
      var O =
          ((e = (0, c.Z)(
            i().mark(function t(r) {
              return i().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), (0, s.signOut)({ callbackUrl: r });
                    case 2:
                      (0, f.I)();
                    case 3:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          function (t) {
            return e.apply(this, arguments);
          }),
        b = !0;
      function w(t) {
        return (0, l.jsx)(
          _,
          (function (t) {
            for (var r = 1; r < arguments.length; r++) {
              var n = null != arguments[r] ? arguments[r] : {};
              r % 2
                ? p(Object(n), !0).forEach(function (r) {
                    (0, o.Z)(t, r, n[r]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : p(Object(n)).forEach(function (r) {
                      Object.defineProperty(
                        t,
                        r,
                        Object.getOwnPropertyDescriptor(n, r)
                      );
                    });
            }
            return t;
          })({}, t)
        );
      }
      function _(t) {
        var r = t.federatedLogoutUri;
        return (
          (0, a.useEffect)(
            function () {
              O(null != r ? r : window.location.origin).catch(function (t) {
                return console.error("Failed to logout", { error: t });
              });
            },
            [r]
          ),
          null
        );
      }
    },
    3499: function (t, r, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/logout",
        function () {
          return n(8995);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [9774, 2888, 179], function () {
      return t((t.s = 3499));
    }),
      (_N_E = t.O());
  },
]);
//# sourceMappingURL=logout-68394f2869368842.js.map
