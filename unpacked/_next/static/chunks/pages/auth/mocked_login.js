(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [204],
  {
    24016: function (n, u, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/mocked_login",
        function () {
          return t(82403);
        },
      ]);
    },
    82403: function (n, u, t) {
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
      var e = t(35250),
        r = t(14412),
        i = t(70079),
        c = t(32787),
        _ = !0;
      function f() {
        return (0, e.jsx)(o, {});
      }
      function o() {
        var n = (0, c.kP)().session;
        return (
          (0, i.useEffect)(
            function () {
              n || (0, r.signIn)("credentials", {});
            },
            [n]
          ),
          (0, e.jsx)(e.Fragment, {})
        );
      }
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return n((n.s = 24016));
    }),
      (_N_E = n.O());
  },
]);
