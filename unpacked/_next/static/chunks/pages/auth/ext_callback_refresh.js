(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1905],
  {
    80633: function (n, t, u) {
      "use strict";
      u.r(t),
        u.d(t, {
          __N_SSP: function () {
            return _;
          },
          default: function () {
            return c;
          },
        });
      var e = u(10721),
        r = u(70079),
        f = u(35250),
        _ = !0;
      function c() {
        return (0, f.jsx)(i, {});
      }
      function i() {
        var n = (0, e.useRouter)(),
          t = n.query.next,
          u = "string" == typeof t && t.startsWith("/") ? t : "/";
        return (
          (0, r.useEffect)(
            function () {
              n.push(u);
            },
            [u, n]
          ),
          null
        );
      }
    },
    44e3: function (n, t, u) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/ext_callback_refresh",
        function () {
          return u(80633);
        },
      ]);
    },
  },
  function (n) {
    n.O(0, [9774, 2888, 179], function () {
      return n((n.s = 44e3));
    }),
      (_N_E = n.O());
  },
]);
//# sourceMappingURL=ext_callback_refresh-6c967c6bb3c60b1d.js.map
