(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7825],
  {
    1072: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          __N_SSP: function () {
            return l;
          },
          default: function () {
            return a;
          },
        });
      var r = n(39827),
        o = n(4635),
        c = n(2722),
        u = n(70079),
        i = n(35250);
      function f(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      let s = async (t) => {
        await (0, c.signOut)({ callbackUrl: t }), (0, o.I)();
      };
      var l = !0;
      function a(t) {
        return (0, i.jsx)(
          O,
          (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? f(Object(n), !0).forEach(function (e) {
                    (0, r.Z)(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : f(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e)
                      );
                    });
            }
            return t;
          })({}, t)
        );
      }
      function O(t) {
        let { federatedLogoutUri: e } = t;
        return (
          (0, u.useEffect)(() => {
            s(null != e ? e : window.location.origin).catch((t) =>
              console.error("Failed to logout", { error: t })
            );
          }, [e]),
          null
        );
      }
    },
    35155: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/logout",
        function () {
          return n(1072);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [2888, 9774, 179], function () {
      return t((t.s = 35155));
    }),
      (_N_E = t.O());
  },
]);
//# sourceMappingURL=logout-880cef26c6bfe98b.js.map
