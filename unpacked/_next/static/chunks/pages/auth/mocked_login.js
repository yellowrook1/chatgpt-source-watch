(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [204],
  {
    53199: function (n, u, t) {
      "use strict";
      t.r(u),
        t.d(u, {
          __N_SSP: function () {
            return _;
          },
          default: function () {
            return f;
          },
        });
      var e = t(15136),
        r = t(20225),
        i = t(70079),
        c = t(35250),
        _ = !0;
      function f() {
        return (0, c.jsx)(o, {});
      }
      function o() {
        var n = (0, e.kP)().session;
        return (
          (0, i.useEffect)(
            function () {
              n || (0, r.signIn)("credentials", {});
            },
            [n]
          ),
          (0, c.jsx)(c.Fragment, {})
        );
      }
    },
    39691: function (n, u, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/mocked_login",
        function () {
          return t(53199);
        },
      ]);
    },
  },
  function (n) {
    n.O(0, [9774, 2888, 179], function () {
      return n((n.s = 39691));
    }),
      (_N_E = n.O());
  },
]);
//# sourceMappingURL=mocked_login-93f5191aa551662a.js.map
