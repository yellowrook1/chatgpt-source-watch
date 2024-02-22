(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [43],
  {
    78801: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          GizmoChatWithRedirect: function () {
            return y;
          },
          __N_SSP: function () {
            return v;
          },
          default: function () {
            return _;
          },
        });
      var n = r(36112),
        i = r(55842),
        o = r(2454),
        s = r(85528),
        c = r(37097),
        u = r(12556),
        l = r(61305),
        a = r(31564),
        d = r(85958),
        f = r(7144),
        h = r(67311),
        g = r(10721),
        j = r.n(g),
        m = r(70079),
        p = r(32004),
        x = r(35250);
      function O(e, t) {
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : O(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      var v = !0;
      function _(e) {
        var t = (0, g.useRouter)().query.gizmoId;
        switch (e.kind) {
          case "anon_gizmo":
            return (0, x.jsx)(s.X, { gizmo: e.gizmo }, t);
          case "chat_page":
            return (0, m.createElement)(
              y,
              b(b({}, e), {}, { key: t, gizmoId: t })
            );
          default:
            (0, h.Z)(e);
        }
      }
      function y(e) {
        var t = (0, c.b9)(e.gizmoId),
          r = t.data,
          n = t.error,
          o = (0, f.t)(),
          s = null == o ? void 0 : o.canInteractWithGizmos();
        return ((0, m.useEffect)(
          function () {
            null == r && null != n && j().push((0, d.M5)(d.LT.GIZMO_NOT_FOUND));
          },
          [r, n]
        ),
        null != n && s)
          ? (0, x.jsx)(z, {})
          : !1 === s
            ? (0, x.jsx)(P, { gizmo: r })
            : (0, m.createElement)(i.ZP, b(b({}, e), {}, { key: e.gizmoId }));
      }
      function z() {
        return (0, x.jsx)(l.Z, {
          children: (0, x.jsxs)("div", {
            className:
              "flex h-full w-full flex-col items-center justify-center",
            children: [
              (0, x.jsx)("div", {
                className: "font-bold",
                children: (0, x.jsx)(p.Z, {
                  id: "gizmo.loadError",
                  defaultMessage: "We're having trouble loading this GPT.",
                }),
              }),
              (0, x.jsx)(p.Z, {
                id: "gizmo.loadErrorRefresh",
                defaultMessage: "Please refresh the page, or try again later",
              }),
            ],
          }),
        });
      }
      function P(e) {
        var t = e.gizmo;
        return (0, x.jsx)(l.Z, {
          children: (0, x.jsx)(u.r, {
            gizmo: t,
            isOwner: !1,
            children: (0, x.jsxs)("div", {
              className: "mt-7 flex flex-col gap-4",
              children: [
                (0, x.jsx)(o.p, {
                  onClick: function () {
                    return (0, a.MG)();
                  },
                  children: (0, x.jsx)(p.Z, {
                    id: "gizmo.upsell",
                    defaultMessage: "Sign up to chat",
                  }),
                }),
                (0, x.jsx)("div", {
                  className: "text-sm text-token-text-tertiary",
                  children: (0, x.jsx)(p.Z, {
                    id: "gizmo.upsellSubtext",
                    defaultMessage: "Requires ChatGPT Plus",
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
    61305: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(49516),
        i = r(70521),
        o = r(35212),
        s = r(10721),
        c = r(8024),
        u = r(10318),
        l = r(35250);
      function a(e) {
        var t = e.children,
          r = (0, s.useRouter)();
        return (0, l.jsx)(o.Z, {
          mobileHeaderRightContent: null,
          sidebar: (0, l.jsxs)(i.ZP, {
            onNewThread: function () {
              r.push("/");
            },
            children: [
              (0, l.jsx)(u.Dy, {}),
              (0, l.jsx)(n.Z, { activeId: void 0 }),
            ],
          }),
          children: (0, l.jsx)(c.Z, { children: t }),
        });
      }
    },
    80052: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/g/[gizmoId]",
        function () {
          return r(78801);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 80052));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=[gizmoId]-3c5fcdca1d8c4f90.js.map
