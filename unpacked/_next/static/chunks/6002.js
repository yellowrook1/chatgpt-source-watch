"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6002],
  {
    86529: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return y;
          },
        });
      var r,
        a,
        n,
        l = s(90038),
        i = s(3125),
        o = s(21120),
        c = s(63866),
        u = s(7144),
        x = s(81643),
        d = s(14765),
        m = s(90458),
        f = s(21389),
        h = s(50537),
        p = s(35250);
      function j(e) {
        var t,
          s = e.onClose,
          r = e.isWidgetVisible,
          a = (0, u.hz)();
        return (0, h.T)()
          ? (0, p.jsx)(o.Z, {
              isOpen: r,
              onClose: s,
              size: "custom",
              className:
                "flex h-[600px] max-h-[60vh] max-w-2xl flex-col [&>div:nth-child(2)]:overflow-y-hidden",
              type: "success",
              title: "Experimentation DevTools",
              noPadding: !0,
              showCloseButton: !0,
              children: (0, p.jsxs)(x.fC, {
                defaultValue: n.FeatureGates,
                className: "flex h-full flex-row gap-6 p-4",
                orientation: "vertical",
                children: [
                  (0, p.jsx)(x.aV, {
                    className:
                      "flex min-w-[180px] max-w-[200px] flex-shrink-0 flex-col gap-2",
                    children: Object.values(n).map(function (e) {
                      return (0, p.jsx)(
                        x.xz,
                        {
                          className:
                            "flex rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-white dark:radix-state-active:bg-token-surface-tertiary md:radix-state-active:bg-token-surface-tertiary md:radix-state-active:text-token-text-primary",
                          value: e,
                          children: e,
                        },
                        e
                      );
                    }),
                  }),
                  (0, p.jsx)(x.VY, {
                    className: "w-full overflow-y-scroll scroll-smooth",
                    value: n.Features,
                    children:
                      null !==
                        (t =
                          null == a
                            ? void 0
                            : a.map(function (e) {
                                return (0, p.jsx)(
                                  N,
                                  {
                                    children: (0, p.jsx)("p", {
                                      children: String(e),
                                    }),
                                  },
                                  e
                                );
                              })) && void 0 !== t
                        ? t
                        : null,
                  }),
                  (0, p.jsx)(x.VY, {
                    className: "w-full overflow-y-scroll scroll-smooth",
                    value: n.FeatureGates,
                    children: Object.entries(d.tz).map(function (e) {
                      var t = (0, i.Z)(e, 2),
                        s = t[0],
                        r = t[1];
                      return (0, p.jsx)(v, { codeName: s, statsigName: r }, s);
                    }),
                  }),
                  (0, p.jsx)(x.VY, {
                    className: "w-full overflow-y-scroll scroll-smooth",
                    value: n.ExperimentalFeatureGates,
                    children: Object.entries(m.SP).map(function (e) {
                      var t = (0, i.Z)(e, 2),
                        s = t[0],
                        r = t[1];
                      return (0, p.jsx)(g, { codeName: s, statsigName: r }, s);
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      function v(e) {
        var t = e.codeName,
          s = e.statsigName,
          r = (0, d.sB)(s),
          a = r.isLoading,
          n = r.value;
        return (0, p.jsxs)(N, {
          children: [
            (0, p.jsx)("a", {
              href: "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/gates/".concat(
                s
              ),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, p.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                a ? (0, p.jsx)(c.Z, {}) : null,
                (0, p.jsx)("p", {
                  className: "font-mono",
                  children: String(n),
                }),
              ],
            }),
          ],
        });
      }
      function g(e) {
        var t = e.codeName,
          s = e.statsigName,
          r = (0, m.fW)(s),
          a = r.isLoading,
          n = r.value;
        return (0, p.jsxs)(N, {
          children: [
            (0, p.jsx)("a", {
              href: "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/gates/".concat(
                s
              ),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, p.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                a ? (0, p.jsx)(c.Z, {}) : null,
                (0, p.jsx)("p", {
                  className: "font-mono",
                  children: String(n),
                }),
              ],
            }),
          ],
        });
      }
      ((r = n || (n = {})).FeatureGates = "Feature Gates"),
        (r.Features = "Features"),
        (r.ExperimentalFeatureGates = "Experimental Gates");
      var N = f.Z.div(
          a ||
            (a = (0, l.Z)([
              "flex items-center justify-between border-b border-token-border-light py-3 text-sm text-token-text-primary last-of-type:border-b-0",
            ]))
        ),
        b = s(70079),
        w = s(1454);
      function y() {
        var e = (0, b.useState)(!1),
          t = e[0],
          s = e[1];
        return (0, h.T)()
          ? (0, p.jsxs)(p.Fragment, {
              children: [
                (0, p.jsx)("button", {
                  onClick: function () {
                    s(function (e) {
                      return !e;
                    });
                  },
                  className:
                    "box-content flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-xs text-token-text-secondary dark:border-white/10 dark:bg-white/10",
                  children: (0, p.jsx)(w.NNy, { className: "icon-sm" }),
                }),
                (0, p.jsx)(j, {
                  isWidgetVisible: t,
                  onClose: function () {
                    s(!1);
                  },
                }),
              ],
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=6002.32843a0cf3f8db12.js.map
