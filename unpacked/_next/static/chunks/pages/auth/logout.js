(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [825],
  {
    61304: function (n, u, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/logout",
        function () {
          return t(72864);
        },
      ]);
    },
    72864: function (n, u, t) {
      "use strict";
      t.r(u),
        t.d(u, {
          __N_SSP: function () {
            return e;
          },
          default: function () {
            return f;
          },
        });
      var o = t(39324),
        r = t(35250),
        i = t(14412),
        c = t(70079),
        e = !0;
      function f(n) {
        return (0, r.jsx)(_, (0, o._)({}, n));
      }
      function _(n) {
        var u = n.federatedLogoutUri;
        return (
          (0, c.useEffect)(
            function () {
              (0, i.signOut)({ callbackUrl: u || window.location.origin });
            },
            [u]
          ),
          null
        );
      }
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return n((n.s = 61304));
    }),
      (_N_E = n.O());
  },
]);
