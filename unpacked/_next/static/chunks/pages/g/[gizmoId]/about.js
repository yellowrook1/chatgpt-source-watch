(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [290],
  {
    44199: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return j;
          },
          default: function () {
            return m;
          },
        });
      var n = r(39827),
        i = r(37573),
        o = r(89691),
        c = r(91128),
        s = r(53197),
        u = r(12366),
        l = r(70079),
        a = r(49141),
        d = r(35250);
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
      function g(e) {
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
      function h(e) {
        let { data: t } = (0, o.b9)(e.gizmoId),
          { 0: r, 1: n } = (0, l.useState)(!0);
        return (0, d.jsxs)(d.Fragment, {
          children: [
            t &&
              r &&
              (0, d.jsx)(i.Eu, {
                onClose: () => n(!1),
                gizmoId: e.gizmoId,
                children: (0, d.jsx)(i.Bo, {
                  onClick: () => {
                    c.A.logEvent(s.M.detailClickChat, { gizmo_id: e.gizmoId }),
                      n(!1),
                      window.history.pushState({}, "", (0, o.m_)(t));
                  },
                }),
              }),
            (0, l.createElement)(
              a.GizmoChatWithRedirect,
              g(g({}, e), {}, { key: e.gizmoId })
            ),
          ],
        });
      }
      var j = !0;
      function m(e) {
        let t = (0, u.useRouter)().query.gizmoId;
        return "chat_page" === e.kind
          ? (0, l.createElement)(h, g(g({}, e), {}, { key: t, gizmoId: t }))
          : (0, a.default)(e);
      }
    },
    49141: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          GizmoChatWithRedirect: function () {
            return z;
          },
          __N_SSP: function () {
            return x;
          },
          default: function () {
            return P;
          },
        });
      var n = r(39827),
        i = r(80084),
        o = r(41),
        c = r(81421),
        s = r(89691),
        u = r(22824),
        l = r(90775),
        a = r(93496),
        d = r(19892),
        f = r(24668),
        g = r(44183),
        h = r(12366),
        j = r.n(h),
        m = r(70079),
        p = r(32004),
        O = r(35250);
      function b(e, t) {
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : b(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      var x = !0;
      function P(e) {
        let t = (0, h.useRouter)().query.gizmoId;
        switch (e.kind) {
          case "anon_gizmo":
            return (0, O.jsx)(c.X, { gizmo: e.gizmo }, t);
          case "chat_page":
            return (0, m.createElement)(
              z,
              y(y({}, e), {}, { key: t, gizmoId: t })
            );
          default:
            (0, g.Z)(e);
        }
      }
      function z(e) {
        let { data: t, error: r } = (0, s.b9)(e.gizmoId),
          n = (0, f.t)(),
          o = null == n ? void 0 : n.canInteractWithGizmos();
        return ((0, m.useEffect)(() => {
          null == t && null != r && j().push((0, d.M5)(d.LT.GIZMO_NOT_FOUND));
        }, [t, r]),
        null != r && o)
          ? (0, O.jsx)(_, {})
          : !1 === o
            ? (0, O.jsx)(w, { gizmo: t })
            : (0, m.createElement)(i.ZP, y(y({}, e), {}, { key: e.gizmoId }));
      }
      function _() {
        return (0, O.jsx)(l.Z, {
          children: (0, O.jsxs)("div", {
            className:
              "flex h-full w-full flex-col items-center justify-center",
            children: [
              (0, O.jsx)("div", {
                className: "font-bold",
                children: (0, O.jsx)(p.Z, {
                  id: "gizmo.loadError",
                  defaultMessage: "We're having trouble loading this GPT.",
                }),
              }),
              (0, O.jsx)(p.Z, {
                id: "gizmo.loadErrorRefresh",
                defaultMessage: "Please refresh the page, or try again later",
              }),
            ],
          }),
        });
      }
      function w(e) {
        let { gizmo: t } = e;
        return (0, O.jsx)(l.Z, {
          children: (0, O.jsx)(u.r, {
            gizmo: t,
            isOwner: !1,
            children: (0, O.jsxs)("div", {
              className: "mt-7 flex flex-col gap-4",
              children: [
                (0, O.jsx)(o.p, {
                  onClick: () => (0, a.MG)(),
                  children: (0, O.jsx)(p.Z, {
                    id: "gizmo.upsell",
                    defaultMessage: "Sign up to chat",
                  }),
                }),
                (0, O.jsx)("div", {
                  className: "text-sm text-token-text-tertiary",
                  children: (0, O.jsx)(p.Z, {
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
        o = r(24605),
        c = r(12366),
        s = r(81056),
        u = r(49031),
        l = r(35250);
      function a(e) {
        let { children: t } = e,
          r = (0, c.useRouter)();
        return (0, l.jsx)(o.Z, {
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
          children: (0, l.jsx)(s.Z, { children: t }),
        });
      }
    },
    22738: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/g/[gizmoId]/about",
        function () {
          return r(44199);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2888, 9774, 179], function () {
      return e((e.s = 22738));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=about-1115a60e9730cc3f.js.map
