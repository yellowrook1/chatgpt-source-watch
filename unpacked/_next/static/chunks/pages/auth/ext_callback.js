(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4191],
  {
    77897: function (n, t, u) {
      "use strict";
      u.r(t),
        u.d(t, {
          default: function () {
            return o;
          },
        });
      var e = u(20225),
        r = u(10721),
        c = u(70079),
        f = u(35250);
      function o() {
        return (0, f.jsx)(a, {});
      }
      function a() {
        var n = (0, r.useRouter)().query.next,
          t =
            "/auth/ext_callback_refresh?next=" +
            encodeURIComponent(
              "string" == typeof n && n.startsWith("/") ? n : "/"
            );
        return (
          (0, c.useEffect)(function () {
            (0, e.signIn)("auth0", { callbackUrl: t || "/" });
          }, []),
          null
        );
      }
    },
    85169: function (n, t, u) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/ext_callback",
        function () {
          return u(77897);
        },
      ]);
    },
  },
  function (n) {
    n.O(0, [9774, 2888, 179], function () {
      return n((n.s = 85169));
    }),
      (_N_E = n.O());
  },
]);
