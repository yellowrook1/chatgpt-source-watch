"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6002],
  {
    86529: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return V;
          },
        });
      var r,
        s,
        a,
        l = n(90038),
        i = n(3125),
        o = n(21120),
        c = n(998),
        u = n(63866),
        x = n(7144),
        m = n(81643),
        d = n(14765),
        f = n(90458),
        p = n(70079),
        h = n(1454),
        v = n(6020),
        N = n(21389),
        j = n(50537),
        g = n(35250);
      function w(e) {
        var t,
          n = e.onClose,
          r = e.isWidgetVisible,
          s = (0, x.hz)();
        return (0, j.T)()
          ? (0, g.jsx)(o.Z, {
              isOpen: r,
              onClose: n,
              size: "custom",
              className:
                "flex h-[600px] max-h-[60vh] max-w-2xl flex-col [&>div:nth-child(2)]:overflow-y-hidden",
              type: "success",
              title: "Experimentation DevTools",
              noPadding: !0,
              showCloseButton: !0,
              children: (0, g.jsxs)(m.fC, {
                defaultValue: a.FeatureGates,
                className: "flex h-full flex-row gap-6 p-4",
                orientation: "vertical",
                children: [
                  (0, g.jsx)(m.aV, {
                    className:
                      "flex min-w-[180px] max-w-[200px] flex-shrink-0 flex-col gap-2",
                    children: Object.values(a).map(function (e) {
                      return (0, g.jsx)(
                        m.xz,
                        {
                          className:
                            "flex rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-white dark:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:text-token-text-primary",
                          value: e,
                          children: e,
                        },
                        e
                      );
                    }),
                  }),
                  (0, g.jsx)(m.VY, {
                    className: "w-full overflow-y-scroll scroll-smooth",
                    value: a.Features,
                    children:
                      null !==
                        (t =
                          null == s
                            ? void 0
                            : s.map(function (e) {
                                return (0, g.jsx)(
                                  E,
                                  {
                                    children: (0, g.jsx)("p", {
                                      children: String(e),
                                    }),
                                  },
                                  e
                                );
                              })) && void 0 !== t
                        ? t
                        : null,
                  }),
                  (0, g.jsx)(m.VY, {
                    className: "w-full overflow-y-scroll scroll-smooth",
                    value: a.FeatureGates,
                    children: Object.entries(d.tz).map(function (e) {
                      var t = (0, i.Z)(e, 2),
                        n = t[0],
                        r = t[1];
                      return (0, g.jsx)(b, { codeName: n, statsigName: r }, n);
                    }),
                  }),
                  (0, g.jsx)(m.VY, {
                    className: "w-full overflow-y-scroll scroll-smooth",
                    value: a.ExperimentalFeatureGates,
                    children: Object.entries(f.SP).map(function (e) {
                      var t = (0, i.Z)(e, 2),
                        n = t[0],
                        r = t[1];
                      return (0, g.jsx)(y, { codeName: n, statsigName: r }, n);
                    }),
                  }),
                  (0, g.jsx)(m.VY, {
                    className: "w-full overflow-y-scroll scroll-smooth",
                    value: a.ExperimentalExperiments,
                    children: Object.entries(f.LA).map(function (e) {
                      var t = (0, i.Z)(e, 2),
                        n = t[0],
                        r = t[1];
                      return (0, g.jsx)(k, { codeName: n, statsigName: r }, n);
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      function b(e) {
        var t = e.codeName,
          n = e.statsigName,
          r = (0, d.sB)(n),
          s = r.isLoading,
          a = r.value;
        return (0, g.jsxs)(E, {
          children: [
            (0, g.jsx)("a", {
              href: "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/gates/".concat(
                n
              ),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, g.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                s ? (0, g.jsx)(u.Z, {}) : null,
                (0, g.jsx)("p", {
                  className: "font-mono",
                  children: String(a),
                }),
              ],
            }),
          ],
        });
      }
      function y(e) {
        var t = e.codeName,
          n = e.statsigName,
          r = (0, f.fW)(n),
          s = r.isLoading,
          a = r.value,
          l = (0, p.useState)(""),
          i = l[0],
          o = l[1],
          x = null != v.Statsig.getAllOverrides().gates[n];
        return (0, g.jsxs)(E, {
          children: [
            (0, g.jsx)("a", {
              href: "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/gates/".concat(
                n
              ),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, g.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                s ? (0, g.jsx)(u.Z, {}) : null,
                x
                  ? (0, g.jsx)(h.Hov, {
                      className: "text-red-500",
                      title: "Local override",
                    })
                  : null,
                (0, g.jsx)("p", {
                  className: "font-mono",
                  children: String(a),
                }),
                (0, g.jsx)(c.Z, {
                  name: "override",
                  type: "text",
                  color: "neutral",
                  placeholder: "Override",
                  value: i,
                  onChange: function (e) {
                    o(e.currentTarget.value);
                  },
                  className: "mr-px w-20",
                  onPressEnter: function (e) {
                    (0, f.Gh)(n, "true" === e || ("false" !== e && null));
                  },
                }),
              ],
            }),
          ],
        });
      }
      function k(e) {
        var t = e.codeName,
          n = e.statsigName,
          r = (0, f.mK)(n),
          s = r.isLoading,
          a = r.config;
        return (0, g.jsxs)(E, {
          children: [
            (0, g.jsx)("a", {
              href: "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/experiments/".concat(
                n
              ),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, g.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                s ? (0, g.jsx)(u.Z, {}) : null,
                (0, g.jsx)("p", {
                  className: "font-mono",
                  children: String(a.get(d.Hy.TREATMENT, "control")),
                }),
              ],
            }),
          ],
        });
      }
      ((r = a || (a = {})).FeatureGates = "Feature Gates"),
        (r.Features = "Features"),
        (r.ExperimentalFeatureGates = "Experimental Gates"),
        (r.ExperimentalExperiments = "Experimental Experiments");
      var E = N.Z.div(
        s ||
          (s = (0, l.Z)([
            "flex items-center justify-between border-b border-token-border-light py-3 text-sm text-token-text-primary last-of-type:border-b-0",
          ]))
      );
      function V() {
        var e = (0, p.useState)(!1),
          t = e[0],
          n = e[1];
        return (0, j.T)()
          ? (0, g.jsxs)(g.Fragment, {
              children: [
                (0, g.jsx)("button", {
                  onClick: function () {
                    n(function (e) {
                      return !e;
                    });
                  },
                  className:
                    "btn-neutral box-content flex h-6 w-6 items-center justify-center rounded-full text-xs text-token-text-secondary",
                  children: (0, g.jsx)(h.NNy, { className: "icon-sm" }),
                }),
                (0, g.jsx)(w, {
                  isWidgetVisible: t,
                  onClose: function () {
                    n(!1);
                  },
                }),
                (0, g.jsx)(C, {}),
              ],
            })
          : null;
      }
      function C() {
        var e = (0, f.fW)(f.SP.NewComposerV0).value;
        return (
          (0, p.useEffect)(
            function () {
              var t = function (t) {
                t.ctrlKey && "2" === t.key && (0, f.Gh)(f.SP.NewComposerV0, !e);
              };
              return (
                window.addEventListener("keydown", t),
                function () {
                  window.removeEventListener("keydown", t);
                }
              );
            },
            [e]
          ),
          null
        );
      }
    },
  },
]);
//# sourceMappingURL=6002.169d3d308b202677.js.map
