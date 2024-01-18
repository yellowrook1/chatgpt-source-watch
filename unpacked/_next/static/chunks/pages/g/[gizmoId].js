(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [43],
  {
    78801: function (e, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          __N_SSP: function () {
            return v;
          },
          default: function () {
            return _;
          },
        });
      var t = r(36112),
        i = r(91559),
        o = r(74318),
        c = r(85528),
        u = r(37097),
        s = r(67404),
        l = r(61305),
        a = r(36638),
        f = r(85958),
        d = r(7144),
        h = r(67311),
        g = r(10721),
        j = r.n(g),
        m = r(70079),
        p = r(35250);
      function O(e, n) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          n &&
            (t = t.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, t);
        }
        return r;
      }
      function b(e) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? O(Object(r), !0).forEach(function (n) {
                (0, t.Z)(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : O(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(r, n)
                  );
                });
        }
        return e;
      }
      var v = !0;
      function _(e) {
        var n = (0, g.useRouter)().query.gizmoId;
        switch (e.kind) {
          case "anon_gizmo":
            return (0, p.jsx)(c.X, { gizmo: e.gizmo }, n);
          case "chat_page":
            return (0, m.createElement)(
              y,
              b(b({}, e), {}, { key: n, gizmoId: n })
            );
          default:
            (0, h.Z)(e);
        }
      }
      function y(e) {
        var n = (0, u.b9)(e.gizmoId),
          r = n.data,
          t = n.error,
          i = (0, d.t)(),
          c = null == i ? void 0 : i.canInteractWithGizmos();
        return ((0, m.useEffect)(
          function () {
            null == r && null != t && j().push((0, f.M5)(f.LT.GIZMO_NOT_FOUND));
          },
          [r, t]
        ),
        null != t && c)
          ? (0, p.jsx)(w, {})
          : !1 === c
            ? (0, p.jsx)(x, { gizmo: r })
            : (0, m.createElement)(o.ZP, b(b({}, e), {}, { key: e.gizmoId }));
      }
      function w() {
        return (0, p.jsx)(l.Z, {
          children: (0, p.jsxs)("div", {
            className:
              "flex h-full w-full flex-col items-center justify-center",
            children: [
              (0, p.jsx)("div", {
                className: "font-bold",
                children: "We're having trouble loading this GPT.",
              }),
              (0, p.jsx)("div", {
                children: "Please refresh the page, or try again later",
              }),
            ],
          }),
        });
      }
      function x(e) {
        var n = e.gizmo;
        return (0, p.jsx)(l.Z, {
          children: (0, p.jsx)(s.r, {
            gizmo: n,
            isOwner: !1,
            children: (0, p.jsxs)(i.z, {
              className: "mt-6",
              onClick: function () {
                return (0, a.MG)();
              },
              children: [
                "Sign up for ChatGPT Plus to chat with ",
                null == n ? void 0 : n.gizmo.display.name,
              ],
            }),
          }),
        });
      }
    },
    61305: function (e, n, r) {
      "use strict";
      r.d(n, {
        Z: function () {
          return a;
        },
      });
      var t = r(49516),
        i = r(83562),
        o = r(35212),
        c = r(10721),
        u = r(8024),
        s = r(5813),
        l = r(35250);
      function a(e) {
        var n = e.children,
          r = (0, c.useRouter)();
        return (0, l.jsx)(o.Z, {
          mobileHeaderRightContent: null,
          sidebar: (0, l.jsxs)(i.ZP, {
            onNewThread: function () {
              r.push("/");
            },
            children: [
              (0, l.jsx)(s.Dy, {}),
              (0, l.jsx)(t.Z, { activeId: void 0 }),
            ],
          }),
          children: (0, l.jsx)(u.Z, { children: n }),
        });
      }
    },
    80052: function (e, n, r) {
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
//# sourceMappingURL=[gizmoId]-f12e078a06a4386b.js.map
