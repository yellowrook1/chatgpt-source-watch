(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [905],
  {
    37441: function (n, t, u) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/ext_callback_refresh",
        function () {
          return u(22026);
        },
      ]);
    },
    22026: function (n, t, u) {
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
      var e = u(35250),
        r = u(68555),
        f = u(70079),
        _ = !0;
      function c() {
        return (0, e.jsx)(i, {});
      }
      function i() {
        var n = (0, r.useRouter)(),
          t = n.query.next,
          u = "string" == typeof t && t.startsWith("/") ? t : "/";
        return (
          (0, f.useEffect)(
            function () {
              n.push(u);
            },
            [u, n]
          ),
          null
        );
      }
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return n((n.s = 37441));
    }),
      (_N_E = n.O());
  },
]);
