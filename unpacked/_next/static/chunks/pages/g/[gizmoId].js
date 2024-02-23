(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [43],
  {
    49141: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          GizmoChatWithRedirect: function () {
            return P;
          },
          __N_SSP: function () {
            return _;
          },
          default: function () {
            return y;
          },
        });
      var n = r(39827),
        i = r(80084),
        s = r(41),
        o = r(81421),
        c = r(89691),
        u = r(22824),
        l = r(90775),
        a = r(93496),
        d = r(19892),
        f = r(24668),
        h = r(44183),
        g = r(12366),
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
      var _ = !0;
      function y(e) {
        let t = (0, g.useRouter)().query.gizmoId;
        switch (e.kind) {
          case "anon_gizmo":
            return (0, x.jsx)(o.X, { gizmo: e.gizmo }, t);
          case "chat_page":
            return (0, m.createElement)(
              P,
              b(b({}, e), {}, { key: t, gizmoId: t })
            );
          default:
            (0, h.Z)(e);
        }
      }
      function P(e) {
        let { data: t, error: r } = (0, c.b9)(e.gizmoId),
          n = (0, f.t)(),
          s = null == n ? void 0 : n.canInteractWithGizmos();
        return ((0, m.useEffect)(() => {
          null == t && null != r && j().push((0, d.M5)(d.LT.GIZMO_NOT_FOUND));
        }, [t, r]),
        null != r && s)
          ? (0, x.jsx)(w, {})
          : !1 === s
            ? (0, x.jsx)(z, { gizmo: t })
            : (0, m.createElement)(i.ZP, b(b({}, e), {}, { key: e.gizmoId }));
      }
      function w() {
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
      function z(e) {
        let { gizmo: t } = e;
        return (0, x.jsx)(l.Z, {
          children: (0, x.jsx)(u.r, {
            gizmo: t,
            isOwner: !1,
            children: (0, x.jsxs)("div", {
              className: "mt-7 flex flex-col gap-4",
              children: [
                (0, x.jsx)(s.p, {
                  onClick: () => (0, a.MG)(),
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
    90775: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(37229),
        i = r(95482),
        s = r(24605),
        o = r(12366),
        c = r(81056),
        u = r(49031),
        l = r(35250);
      function a(e) {
        let { children: t } = e,
          r = (0, o.useRouter)();
        return (0, l.jsx)(s.Z, {
          mobileHeaderRightContent: null,
          sidebar: (0, l.jsxs)(i.ZP, {
            onNewThread: () => {
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
    27088: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/g/[gizmoId]",
        function () {
          return r(49141);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2888, 9774, 179], function () {
      return e((e.s = 27088));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=[gizmoId]-092f281696c80383.js.map
