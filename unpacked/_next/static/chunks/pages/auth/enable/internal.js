(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8492],
  {
    58802: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        });
      var r = n(36112),
        a = n(12457),
        i = n(66027),
        c = n(70079),
        s = n(94968),
        o = n(32004),
        l = n(35250);
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var p = (0, s.vU)({
        title: {
          id: "EnableInternal.title",
          defaultMessage: "Enable internal features",
        },
        loading: {
          id: "EnableInternal.loading",
          defaultMessage: "Please wait...",
        },
        enabled: { id: "EnableInternal.enabled", defaultMessage: "Enabled!" },
      });
      function d() {
        var e = (0, c.useState)(!1),
          t = e[0],
          n = e[1];
        (0, c.useEffect)(function () {
          i.ZP.getInternalEnableURL().then(function () {
            return n(!0);
          });
        }, []);
        var r = t ? p.enabled : p.loading;
        return (0, l.jsx)(a.Wk, {
          isStorageComplianceEnabled: !1,
          children: (0, l.jsxs)(a.xh, {
            children: [
              (0, l.jsx)(a.jI, {}),
              (0, l.jsx)("div", {
                className: "mb-2 text-center text-lg",
                children: (0, l.jsx)(o.Z, f({}, p.title)),
              }),
              (0, l.jsx)("div", {
                className: "mb-5 text-center",
                children: (0, l.jsx)(o.Z, f({}, r)),
              }),
            ],
          }),
        });
      }
      function b() {
        return (0, l.jsx)(d, {});
      }
    },
    12457: function (e, t, n) {
      "use strict";
      n.d(t, {
        VL: function () {
          return h;
        },
        Wk: function () {
          return g;
        },
        jI: function () {
          return y;
        },
        xh: function () {
          return j;
        },
      });
      var r,
        a = n(36112),
        i = n(90038),
        c = n(18008),
        s = n(32004),
        o = n(94968),
        l = n(21389),
        u = n(14972),
        f = n(60493),
        p = n(35250);
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : d(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var j = l.Z.div(
        r ||
          (r = (0, i.Z)([
            "w-96 flex flex-col flex-auto justify-center items-center",
          ]))
      );
      function g(e) {
        var t = e.children,
          n = e.showTerms,
          r = e.isStorageComplianceEnabled;
        return (0, p.jsxs)("div", {
          className:
            "flex h-full w-full flex-col items-center justify-center bg-gray-50 dark:bg-gray-800",
          children: [
            t,
            (void 0 === n || n) &&
              (0, p.jsx)(h, { isStorageComplianceEnabled: r }),
          ],
        });
      }
      function h(e) {
        var t = e.isStorageComplianceEnabled;
        return (0, p.jsxs)("div", {
          className: "flex gap-3 py-3 text-xs text-gray-500",
          children: [
            (0, p.jsx)(f.Z, {
              href: "https://openai.com/policies/terms-of-use",
              type: "neutral",
              openNewTab: !0,
              children: (0, p.jsx)(s.Z, b({}, O.terms)),
            }),
            (0, p.jsx)(x, {}),
            (0, p.jsx)(f.Z, {
              href: "https://openai.com/policies/privacy-policy",
              openNewTab: !0,
              type: "neutral",
              children: (0, p.jsx)(s.Z, b({}, O.privacy)),
            }),
            t &&
              (0, p.jsxs)(p.Fragment, {
                children: [
                  (0, p.jsx)(x, {}),
                  (0, p.jsx)("button", {
                    className: "underline",
                    onClick: function () {
                      return c.vm.openModal(c.B.CookieManagement);
                    },
                    children: (0, p.jsx)(s.Z, b({}, O.cookies)),
                  }),
                ],
              }),
          ],
        });
      }
      var x = function () {
        return (0, p.jsx)("span", {
          className: "text-gray-600",
          children: "|",
        });
      };
      function y() {
        return (0, p.jsx)("div", {
          className: "mb-5",
          children: (0, p.jsx)(u.nI, {}),
        });
      }
      var O = (0, o.vU)({
        terms: { id: "AuthPage.terms", defaultMessage: "Terms of use" },
        privacy: { id: "AuthPage.privacy", defaultMessage: "Privacy policy" },
        cookies: { id: "AuthPage.cookies", defaultMessage: "Manage cookies" },
      });
    },
    69863: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/enable/internal",
        function () {
          return n(58802);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 69863));
    }),
      (_N_E = e.O());
  },
]);
