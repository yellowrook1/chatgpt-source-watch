(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [401],
  {
    82854: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return a;
          },
          default: function () {
            return l;
          },
        });
      var n = r(39827),
        u = r(12366),
        c = r(70079),
        o = r(80084),
        i = r(35250);
      function f(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : f(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      var a = !0;
      function l(e) {
        let t = (0, u.useRouter)(),
          r = (0, o.wS)(t.asPath),
          n = (0, o.p9)(r);
        return ((0, c.useEffect)(() => {
          n && t.replace("/", void 0, { shallow: !0 });
        }, [n, t]),
        n)
          ? null
          : (0, i.jsx)(o.ZP, s(s({}, e), {}, { urlThreadId: r }));
      }
    },
    42342: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return u;
          },
        });
      let n = r(82854).default;
      var u = !0;
      t.default = n;
    },
    28868: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/g/[gizmoId]/c/[convId]",
        function () {
          return r(42342);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2888, 9774, 179], function () {
      return e((e.s = 28868));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=[convId]-41d37262f6639759.js.map
