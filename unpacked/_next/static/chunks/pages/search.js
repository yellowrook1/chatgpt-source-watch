(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9603],
  {
    37979: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return s;
          },
          default: function () {
            return p;
          },
        });
      var n = r(39827),
        c = r(84261),
        o = r.n(c),
        u = r(35250);
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      let f = o()(
        () =>
          Promise.all([r.e(8682), r.e(560), r.e(1393), r.e(9679)]).then(
            r.bind(r, 87953)
          ),
        { ssr: !1, loadableGenerated: { webpack: () => [87953] } }
      );
      var s = !0;
      function p(e) {
        return (0, u.jsx)(
          f,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? i(Object(r), !0).forEach(function (t) {
                    (0, n.Z)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : i(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      );
                    });
            }
            return e;
          })({}, e)
        );
      }
    },
    99740: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/search",
        function () {
          return r(37979);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2888, 9774, 179], function () {
      return e((e.s = 99740));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=search-237695cb9d35c567.js.map
