(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4191],
  {
    39116: function (n, t, u) {
      "use strict";
      u.r(t),
        u.d(t, {
          default: function () {
            return o;
          },
        });
      var e = u(2722),
        r = u(12366),
        c = u(70079),
        f = u(35250);
      function o() {
        return (0, f.jsx)(s, {});
      }
      function s() {
        let { next: n } = (0, r.useRouter)().query,
          t =
            "/auth/ext_callback_refresh?next=" +
            encodeURIComponent(
              "string" == typeof n && n.startsWith("/") ? n : "/"
            );
        return (
          (0, c.useEffect)(() => {
            (0, e.signIn)("auth0", { callbackUrl: t || "/" });
          }, []),
          null
        );
      }
    },
    13396: function (n, t, u) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/ext_callback",
        function () {
          return u(39116);
        },
      ]);
    },
  },
  function (n) {
    n.O(0, [2888, 9774, 179], function () {
      return n((n.s = 13396));
    }),
      (_N_E = n.O());
  },
]);
//# sourceMappingURL=ext_callback-a406d05e15ca33f3.js.map
