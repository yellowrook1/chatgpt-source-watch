(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9603],
  {
    57587: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          __N_SSP: function () {
            return s;
          },
          default: function () {
            return p;
          },
        });
      var n = t(36112),
        c = t(5397),
        o = t.n(c),
        u = t(35250);
      function i(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      var f = o()(
          function () {
            return Promise.all([t.e(8682), t.e(2922), t.e(9118)]).then(
              t.bind(t, 37705)
            );
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [37705];
              },
            },
          }
        ),
        s = !0;
      function p(e) {
        return (0, u.jsx)(
          f,
          (function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = null != arguments[r] ? arguments[r] : {};
              r % 2
                ? i(Object(t), !0).forEach(function (r) {
                    (0, n.Z)(e, r, t[r]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(t)
                    )
                  : i(Object(t)).forEach(function (r) {
                      Object.defineProperty(
                        e,
                        r,
                        Object.getOwnPropertyDescriptor(t, r)
                      );
                    });
            }
            return e;
          })({}, e)
        );
      }
    },
    10622: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/search",
        function () {
          return t(57587);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 10622));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=search-f969bf847681b2ce.js.map
