(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2223],
  {
    82854: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return p;
          },
          default: function () {
            return a;
          },
        });
      var n = r(39827),
        u = r(12366),
        c = r(70079),
        o = r(80084),
        f = r(35250);
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : i(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      var p = !0;
      function a(e) {
        let t = (0, u.useRouter)(),
          r = (0, o.wS)(t.asPath),
          n = (0, o.p9)(r);
        return ((0, c.useEffect)(() => {
          n && t.replace("/", void 0, { shallow: !0 });
        }, [n, t]),
        n)
          ? null
          : (0, f.jsx)(o.ZP, s(s({}, e), {}, { urlThreadId: r }));
      }
    },
    54378: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[[...default]]",
        function () {
          return r(82854);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2888, 9774, 179], function () {
      return e((e.s = 54378));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=[[...default]]-78a702b7caedc3df.js.map
