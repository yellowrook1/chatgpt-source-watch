(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [204],
  {
    25217: function (n, t, u) {
      "use strict";
      u.r(t),
        u.d(t, {
          __N_SSP: function () {
            return i;
          },
          default: function () {
            return f;
          },
        });
      var e = u(16640),
        r = u(2722),
        _ = u(70079),
        c = u(35250),
        i = !0;
      function f() {
        return (0, c.jsx)(o, {});
      }
      function o() {
        let { session: n } = (0, e.kP)();
        return (
          (0, _.useEffect)(() => {
            n || (0, r.signIn)("credentials", {});
          }, [n]),
          (0, c.jsx)(c.Fragment, {})
        );
      }
    },
    68128: function (n, t, u) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/mocked_login",
        function () {
          return u(25217);
        },
      ]);
    },
  },
  function (n) {
    n.O(0, [2888, 9774, 179], function () {
      return n((n.s = 68128));
    }),
      (_N_E = n.O());
  },
]);
//# sourceMappingURL=mocked_login-41d7182d0db9ce3d.js.map
