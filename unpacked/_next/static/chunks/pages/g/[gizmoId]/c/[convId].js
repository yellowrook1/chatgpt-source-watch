(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [401],
  {
    72189: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          __N_SSP: function () {
            return a;
          },
          default: function () {
            return p;
          },
        });
      var n = r(36112),
        u = r(10721),
        c = r(70079),
        o = r(65689),
        i = r(35250);
      function f(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(r), !0).forEach(function (e) {
                (0, n.Z)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : f(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
        }
        return t;
      }
      var a = !0;
      function p(t) {
        var e = (0, u.useRouter)(),
          r = (0, o.wS)(e.asPath),
          n = (0, o.p9)(r);
        return ((0, c.useEffect)(
          function () {
            n && e.replace("/", void 0, { shallow: !0 });
          },
          [n, e]
        ),
        n)
          ? null
          : (0, i.jsx)(o.ZP, s(s({}, t), {}, { urlThreadId: r }));
      }
    },
    25649: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          __N_SSP: function () {
            return u;
          },
        });
      var n = r(72189).default,
        u = !0;
      e.default = n;
    },
    9436: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/g/[gizmoId]/c/[convId]",
        function () {
          return r(25649);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [9774, 2888, 179], function () {
      return t((t.s = 9436));
    }),
      (_N_E = t.O());
  },
]);
//# sourceMappingURL=[convId]-58d3c2567a3a90e4.js.map
