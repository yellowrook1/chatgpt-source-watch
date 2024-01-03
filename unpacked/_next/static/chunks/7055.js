"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7055],
  {
    84256: function (e, t, n) {
      function r(e) {
        return e.split("-")[1];
      }
      function o(e) {
        return "y" === e ? "height" : "width";
      }
      function l(e) {
        return e.split("-")[0];
      }
      function i(e) {
        return ["top", "bottom"].includes(l(e)) ? "x" : "y";
      }
      function a(e, t, n) {
        let a,
          { reference: u, floating: s } = e,
          c = u.x + u.width / 2 - s.width / 2,
          d = u.y + u.height / 2 - s.height / 2,
          f = i(t),
          p = o(f),
          m = u[p] / 2 - s[p] / 2,
          h = "x" === f;
        switch (l(t)) {
          case "top":
            a = { x: c, y: u.y - s.height };
            break;
          case "bottom":
            a = { x: c, y: u.y + u.height };
            break;
          case "right":
            a = { x: u.x + u.width, y: d };
            break;
          case "left":
            a = { x: u.x - s.width, y: d };
            break;
          default:
            a = { x: u.x, y: u.y };
        }
        switch (r(t)) {
          case "start":
            a[f] -= m * (n && h ? -1 : 1);
            break;
          case "end":
            a[f] += m * (n && h ? -1 : 1);
        }
        return a;
      }
      n.d(t, {
        Cp: function () {
          return S;
        },
        JB: function () {
          return c;
        },
        RR: function () {
          return x;
        },
        cv: function () {
          return C;
        },
        dp: function () {
          return L;
        },
        dr: function () {
          return T;
        },
        oo: function () {
          return u;
        },
        uY: function () {
          return P;
        },
        x7: function () {
          return m;
        },
      });
      let u = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: l = [],
            platform: i,
          } = n,
          u = l.filter(Boolean),
          s = await (null == i.isRTL ? void 0 : i.isRTL(t)),
          c = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: d, y: f } = a(c, r, s),
          p = r,
          m = {},
          h = 0;
        for (let n = 0; n < u.length; n++) {
          let { name: l, fn: v } = u[n],
            {
              x: g,
              y: y,
              data: w,
              reset: x,
            } = await v({
              x: d,
              y: f,
              initialPlacement: r,
              placement: p,
              strategy: o,
              middlewareData: m,
              rects: c,
              platform: i,
              elements: { reference: e, floating: t },
            });
          (d = null != g ? g : d),
            (f = null != y ? y : f),
            (m = { ...m, [l]: { ...m[l], ...w } }),
            x &&
              h <= 50 &&
              (h++,
              "object" == typeof x &&
                (x.placement && (p = x.placement),
                x.rects &&
                  (c =
                    !0 === x.rects
                      ? await i.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : x.rects),
                ({ x: d, y: f } = a(c, p, s))),
              (n = -1));
        }
        return { x: d, y: f, placement: p, strategy: o, middlewareData: m };
      };
      function s(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function c(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height,
        };
      }
      async function d(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: l, rects: i, elements: a, strategy: u } = e,
          {
            boundary: d = "clippingAncestors",
            rootBoundary: f = "viewport",
            elementContext: p = "floating",
            altBoundary: m = !1,
            padding: h = 0,
          } = t,
          v = s(h),
          g = a[m ? ("floating" === p ? "reference" : "floating") : p],
          y = c(
            await l.getClippingRect({
              element:
                null ==
                  (n = await (null == l.isElement ? void 0 : l.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == l.getDocumentElement
                      ? void 0
                      : l.getDocumentElement(a.floating))),
              boundary: d,
              rootBoundary: f,
              strategy: u,
            })
          ),
          w = "floating" === p ? { ...i.floating, x: r, y: o } : i.reference,
          x = await (null == l.getOffsetParent
            ? void 0
            : l.getOffsetParent(a.floating)),
          b = ((await (null == l.isElement ? void 0 : l.isElement(x))) &&
            (await (null == l.getScale ? void 0 : l.getScale(x)))) || {
            x: 1,
            y: 1,
          },
          E = c(
            l.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: w,
                  offsetParent: x,
                  strategy: u,
                })
              : w
          );
        return {
          top: (y.top - E.top + v.top) / b.y,
          bottom: (E.bottom - y.bottom + v.bottom) / b.y,
          left: (y.left - E.left + v.left) / b.x,
          right: (E.right - y.right + v.right) / b.x,
        };
      }
      let f = Math.min,
        p = Math.max,
        m = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let { element: n, padding: l = 0 } = e || {},
              {
                x: a,
                y: u,
                placement: c,
                rects: d,
                platform: m,
                elements: h,
              } = t;
            if (null == n) return {};
            let v = s(l),
              g = { x: a, y: u },
              y = i(c),
              w = o(y),
              x = await m.getDimensions(n),
              b = "y" === y,
              E = b ? "top" : "left",
              S = b ? "bottom" : "right",
              C = b ? "clientHeight" : "clientWidth",
              R = d.reference[w] + d.reference[y] - g[y] - d.floating[w],
              P = g[y] - d.reference[y],
              T = await (null == m.getOffsetParent
                ? void 0
                : m.getOffsetParent(n)),
              L = T ? T[C] : 0;
            (L && (await (null == m.isElement ? void 0 : m.isElement(T)))) ||
              (L = h.floating[C] || d.floating[w]);
            let D = v[E],
              k = L - x[w] - v[S],
              A = L / 2 - x[w] / 2 + (R / 2 - P / 2),
              O = p(D, f(A, k)),
              M =
                null != r(c) &&
                A != O &&
                d.reference[w] / 2 - (A < D ? v[E] : v[S]) - x[w] / 2 < 0;
            return {
              [y]: g[y] - (M ? (A < D ? D - A : k - A) : 0),
              data: { [y]: O, centerOffset: A - O },
            };
          },
        }),
        h = ["top", "right", "bottom", "left"],
        v =
          (h.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
          { left: "right", right: "left", bottom: "top", top: "bottom" });
      function g(e) {
        return e.replace(/left|right|bottom|top/g, (e) => v[e]);
      }
      let y = { start: "end", end: "start" };
      function w(e) {
        return e.replace(/start|end/g, (e) => y[e]);
      }
      let x = function (e) {
        return (
          void 0 === e && (e = {}),
          {
            name: "flip",
            options: e,
            async fn(t) {
              var n, a, u, s;
              let {
                  placement: c,
                  middlewareData: f,
                  rects: p,
                  initialPlacement: m,
                  platform: h,
                  elements: v,
                } = t,
                {
                  mainAxis: y = !0,
                  crossAxis: x = !0,
                  fallbackPlacements: b,
                  fallbackStrategy: E = "bestFit",
                  fallbackAxisSideDirection: S = "none",
                  flipAlignment: C = !0,
                  ...R
                } = e,
                P = l(c),
                T = l(m) === m,
                L = await (null == h.isRTL ? void 0 : h.isRTL(v.floating)),
                D =
                  b ||
                  (T || !C
                    ? [g(m)]
                    : (function (e) {
                        let t = g(e);
                        return [w(e), t, w(t)];
                      })(m));
              b ||
                "none" === S ||
                D.push(
                  ...(function (e, t, n, o) {
                    let i = r(e),
                      a = (function (e, t, n) {
                        let r = ["left", "right"],
                          o = ["right", "left"];
                        switch (e) {
                          case "top":
                          case "bottom":
                            return n ? (t ? o : r) : t ? r : o;
                          case "left":
                          case "right":
                            return t ? ["top", "bottom"] : ["bottom", "top"];
                          default:
                            return [];
                        }
                      })(l(e), "start" === n, o);
                    return (
                      i &&
                        ((a = a.map((e) => e + "-" + i)),
                        t && (a = a.concat(a.map(w)))),
                      a
                    );
                  })(m, C, S, L)
                );
              let k = [m, ...D],
                A = await d(t, R),
                O = [],
                M = (null == (n = f.flip) ? void 0 : n.overflows) || [];
              if ((y && O.push(A[P]), x)) {
                let { main: e, cross: t } = (function (e, t, n) {
                  void 0 === n && (n = !1);
                  let l = r(e),
                    a = i(e),
                    u = o(a),
                    s =
                      "x" === a
                        ? l === (n ? "end" : "start")
                          ? "right"
                          : "left"
                        : "start" === l
                          ? "bottom"
                          : "top";
                  return (
                    t.reference[u] > t.floating[u] && (s = g(s)),
                    { main: s, cross: g(s) }
                  );
                })(c, p, L);
                O.push(A[e], A[t]);
              }
              if (
                ((M = [...M, { placement: c, overflows: O }]),
                !O.every((e) => e <= 0))
              ) {
                let e = ((null == (a = f.flip) ? void 0 : a.index) || 0) + 1,
                  t = k[e];
                if (t)
                  return {
                    data: { index: e, overflows: M },
                    reset: { placement: t },
                  };
                let n =
                  null ==
                  (u = M.filter((e) => e.overflows[0] <= 0).sort(
                    (e, t) => e.overflows[1] - t.overflows[1]
                  )[0])
                    ? void 0
                    : u.placement;
                if (!n)
                  switch (E) {
                    case "bestFit": {
                      let e =
                        null ==
                        (s = M.map((e) => [
                          e.placement,
                          e.overflows
                            .filter((e) => e > 0)
                            .reduce((e, t) => e + t, 0),
                        ]).sort((e, t) => e[1] - t[1])[0])
                          ? void 0
                          : s[0];
                      e && (n = e);
                      break;
                    }
                    case "initialPlacement":
                      n = m;
                  }
                if (c !== n) return { reset: { placement: n } };
              }
              return {};
            },
          }
        );
      };
      function b(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function E(e) {
        return h.some((t) => e[t] >= 0);
      }
      let S = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "hide",
              options: e,
              async fn(t) {
                let { strategy: n = "referenceHidden", ...r } = e,
                  { rects: o } = t;
                switch (n) {
                  case "referenceHidden": {
                    let e = b(
                      await d(t, { ...r, elementContext: "reference" }),
                      o.reference
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: E(e),
                      },
                    };
                  }
                  case "escaped": {
                    let e = b(
                      await d(t, { ...r, altBoundary: !0 }),
                      o.floating
                    );
                    return { data: { escapedOffsets: e, escaped: E(e) } };
                  }
                  default:
                    return {};
                }
              },
            }
          );
        },
        C = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: "offset",
              options: e,
              async fn(t) {
                let { x: n, y: o } = t,
                  a = await (async function (e, t) {
                    let { placement: n, platform: o, elements: a } = e,
                      u = await (null == o.isRTL
                        ? void 0
                        : o.isRTL(a.floating)),
                      s = l(n),
                      c = r(n),
                      d = "x" === i(n),
                      f = ["left", "top"].includes(s) ? -1 : 1,
                      p = u && d ? -1 : 1,
                      m = "function" == typeof t ? t(e) : t,
                      {
                        mainAxis: h,
                        crossAxis: v,
                        alignmentAxis: g,
                      } = "number" == typeof m
                        ? { mainAxis: m, crossAxis: 0, alignmentAxis: null }
                        : {
                            mainAxis: 0,
                            crossAxis: 0,
                            alignmentAxis: null,
                            ...m,
                          };
                    return (
                      c &&
                        "number" == typeof g &&
                        (v = "end" === c ? -1 * g : g),
                      d ? { x: v * p, y: h * f } : { x: h * f, y: v * p }
                    );
                  })(t, e);
                return { x: n + a.x, y: o + a.y, data: a };
              },
            }
          );
        };
      function R(e) {
        return "x" === e ? "y" : "x";
      }
      let P = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "shift",
              options: e,
              async fn(t) {
                let { x: n, y: r, placement: o } = t,
                  {
                    mainAxis: a = !0,
                    crossAxis: u = !1,
                    limiter: s = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...c
                  } = e,
                  m = { x: n, y: r },
                  h = await d(t, c),
                  v = i(l(o)),
                  g = R(v),
                  y = m[v],
                  w = m[g];
                a &&
                  (y = p(
                    y + h["y" === v ? "top" : "left"],
                    f(y, y - h["y" === v ? "bottom" : "right"])
                  )),
                  u &&
                    (w = p(
                      w + h["y" === g ? "top" : "left"],
                      f(w, w - h["y" === g ? "bottom" : "right"])
                    ));
                let x = s.fn({ ...t, [v]: y, [g]: w });
                return { ...x, data: { x: x.x - n, y: x.y - r } };
              },
            }
          );
        },
        T = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              options: e,
              fn(t) {
                let {
                    x: n,
                    y: r,
                    placement: o,
                    rects: a,
                    middlewareData: u,
                  } = t,
                  { offset: s = 0, mainAxis: c = !0, crossAxis: d = !0 } = e,
                  f = { x: n, y: r },
                  p = i(o),
                  m = R(p),
                  h = f[p],
                  v = f[m],
                  g = "function" == typeof s ? s(t) : s,
                  y =
                    "number" == typeof g
                      ? { mainAxis: g, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...g };
                if (c) {
                  let e = "y" === p ? "height" : "width",
                    t = a.reference[p] - a.floating[e] + y.mainAxis,
                    n = a.reference[p] + a.reference[e] - y.mainAxis;
                  h < t ? (h = t) : h > n && (h = n);
                }
                if (d) {
                  var w, x;
                  let e = "y" === p ? "width" : "height",
                    t = ["top", "left"].includes(l(o)),
                    n =
                      a.reference[m] -
                      a.floating[e] +
                      ((t && (null == (w = u.offset) ? void 0 : w[m])) || 0) +
                      (t ? 0 : y.crossAxis),
                    r =
                      a.reference[m] +
                      a.reference[e] +
                      (t ? 0 : (null == (x = u.offset) ? void 0 : x[m]) || 0) -
                      (t ? y.crossAxis : 0);
                  v < n ? (v = n) : v > r && (v = r);
                }
                return { [p]: h, [m]: v };
              },
            }
          );
        },
        L = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "size",
              options: e,
              async fn(t) {
                let n, o;
                let { placement: a, rects: u, platform: s, elements: c } = t,
                  { apply: m = () => {}, ...h } = e,
                  v = await d(t, h),
                  g = l(a),
                  y = r(a),
                  w = "x" === i(a),
                  { width: x, height: b } = u.floating;
                "top" === g || "bottom" === g
                  ? ((n = g),
                    (o =
                      y ===
                      ((await (null == s.isRTL ? void 0 : s.isRTL(c.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((o = g), (n = "end" === y ? "top" : "bottom"));
                let E = b - v[n],
                  S = x - v[o],
                  C = !t.middlewareData.shift,
                  R = E,
                  P = S;
                if (w) {
                  let e = x - v.left - v.right;
                  P = y || C ? f(S, e) : e;
                } else {
                  let e = b - v.top - v.bottom;
                  R = y || C ? f(E, e) : e;
                }
                if (C && !y) {
                  let e = p(v.left, 0),
                    t = p(v.right, 0),
                    n = p(v.top, 0),
                    r = p(v.bottom, 0);
                  w
                    ? (P =
                        x -
                        2 * (0 !== e || 0 !== t ? e + t : p(v.left, v.right)))
                    : (R =
                        b -
                        2 * (0 !== n || 0 !== r ? n + r : p(v.top, v.bottom)));
                }
                await m({ ...t, availableWidth: P, availableHeight: R });
                let T = await s.getDimensions(c.floating);
                return x !== T.width || b !== T.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        };
    },
    88905: function (e, t, n) {
      n.d(t, {
        Me: function () {
          return W;
        },
        oo: function () {
          return _;
        },
      });
      var r = n(84256);
      function o(e) {
        var t;
        return (
          (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        );
      }
      function l(e) {
        return o(e).getComputedStyle(e);
      }
      function i(e) {
        return e instanceof o(e).Node;
      }
      function a(e) {
        return i(e) ? (e.nodeName || "").toLowerCase() : "";
      }
      function u(e) {
        return e instanceof o(e).HTMLElement;
      }
      function s(e) {
        return e instanceof o(e).Element;
      }
      function c(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof o(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      function d(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = l(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function f(e) {
        let t = p(),
          n = l(e);
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function p() {
        return (
          !("undefined" == typeof CSS || !CSS.supports) &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function m(e) {
        return ["html", "body", "#document"].includes(a(e));
      }
      let h = Math.min,
        v = Math.max,
        g = Math.round;
      function y(e) {
        let t = l(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = u(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          s = g(n) !== i || g(r) !== a;
        return s && ((n = i), (r = a)), { width: n, height: r, fallback: s };
      }
      function w(e) {
        return s(e) ? e : e.contextElement;
      }
      let x = { x: 1, y: 1 };
      function b(e) {
        let t = w(e);
        if (!u(t)) return x;
        let n = t.getBoundingClientRect(),
          { width: r, height: o, fallback: l } = y(t),
          i = (l ? g(n.width) : n.width) / r,
          a = (l ? g(n.height) : n.height) / o;
        return (
          (i && Number.isFinite(i)) || (i = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: i, y: a }
        );
      }
      let E = { x: 0, y: 0 };
      function S(e, t, n) {
        var r, l;
        if ((void 0 === t && (t = !0), !p())) return E;
        let i = e ? o(e) : window;
        return !n || (t && n !== i)
          ? E
          : {
              x: (null == (r = i.visualViewport) ? void 0 : r.offsetLeft) || 0,
              y: (null == (l = i.visualViewport) ? void 0 : l.offsetTop) || 0,
            };
      }
      function C(e, t, n, l) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let i = e.getBoundingClientRect(),
          a = w(e),
          u = x;
        t && (l ? s(l) && (u = b(l)) : (u = b(e)));
        let c = S(a, n, l),
          d = (i.left + c.x) / u.x,
          f = (i.top + c.y) / u.y,
          p = i.width / u.x,
          m = i.height / u.y;
        if (a) {
          let e = o(a),
            t = l && s(l) ? o(l) : l,
            n = e.frameElement;
          for (; n && l && t !== e; ) {
            let e = b(n),
              t = n.getBoundingClientRect(),
              r = getComputedStyle(n);
            (t.x += (n.clientLeft + parseFloat(r.paddingLeft)) * e.x),
              (t.y += (n.clientTop + parseFloat(r.paddingTop)) * e.y),
              (d *= e.x),
              (f *= e.y),
              (p *= e.x),
              (m *= e.y),
              (d += t.x),
              (f += t.y),
              (n = o(n).frameElement);
          }
        }
        return (0, r.JB)({ width: p, height: m, x: d, y: f });
      }
      function R(e) {
        return ((i(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function P(e) {
        return s(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function T(e) {
        return C(R(e)).left + P(e).scrollLeft;
      }
      function L(e) {
        if ("html" === a(e)) return e;
        let t = e.assignedSlot || e.parentNode || (c(e) && e.host) || R(e);
        return c(t) ? t.host : t;
      }
      function D(e, t) {
        var n;
        void 0 === t && (t = []);
        let r = (function e(t) {
            let n = L(t);
            return m(n) ? n.ownerDocument.body : u(n) && d(n) ? n : e(n);
          })(e),
          l = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = o(r);
        return l
          ? t.concat(i, i.visualViewport || [], d(r) ? r : [])
          : t.concat(r, D(r));
      }
      function k(e, t, n) {
        let i;
        if ("viewport" === t)
          i = (function (e, t) {
            let n = o(e),
              r = R(e),
              l = n.visualViewport,
              i = r.clientWidth,
              a = r.clientHeight,
              u = 0,
              s = 0;
            if (l) {
              (i = l.width), (a = l.height);
              let e = p();
              (!e || (e && "fixed" === t)) &&
                ((u = l.offsetLeft), (s = l.offsetTop));
            }
            return { width: i, height: a, x: u, y: s };
          })(e, n);
        else if ("document" === t)
          i = (function (e) {
            let t = R(e),
              n = P(e),
              r = e.ownerDocument.body,
              o = v(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = v(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              a = -n.scrollLeft + T(e),
              u = -n.scrollTop;
            return (
              "rtl" === l(r).direction &&
                (a += v(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: a, y: u }
            );
          })(R(e));
        else if (s(t))
          i = (function (e, t) {
            let n = C(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              l = u(e) ? b(e) : { x: 1, y: 1 };
            return {
              width: e.clientWidth * l.x,
              height: e.clientHeight * l.y,
              x: o * l.x,
              y: r * l.y,
            };
          })(t, n);
        else {
          let n = S(e);
          i = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return (0, r.JB)(i);
      }
      function A(e, t) {
        return u(e) && "fixed" !== l(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function O(e, t) {
        let n = o(e);
        if (!u(e)) return n;
        let r = A(e, t);
        for (
          ;
          r &&
          ["table", "td", "th"].includes(a(r)) &&
          "static" === l(r).position;
        )
          r = A(r, t);
        return r &&
          ("html" === a(r) ||
            ("body" === a(r) && "static" === l(r).position && !f(r)))
          ? n
          : r ||
              (function (e) {
                let t = L(e);
                for (; u(t) && !m(t); ) {
                  if (f(t)) return t;
                  t = L(t);
                }
                return null;
              })(e) ||
              n;
      }
      let M = {
        getClippingRect: function (e) {
          let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
            i =
              "clippingAncestors" === n
                ? (function (e, t) {
                    let n = t.get(e);
                    if (n) return n;
                    let r = D(e).filter((e) => s(e) && "body" !== a(e)),
                      o = null,
                      i = "fixed" === l(e).position,
                      u = i ? L(e) : e;
                    for (; s(u) && !m(u); ) {
                      let t = l(u),
                        n = f(u);
                      n || "fixed" !== t.position || (o = null),
                        (
                          i
                            ? !n && !o
                            : (!n &&
                                "static" === t.position &&
                                o &&
                                ["absolute", "fixed"].includes(o.position)) ||
                              (d(u) &&
                                !n &&
                                (function e(t, n) {
                                  let r = L(t);
                                  return (
                                    !(r === n || !s(r) || m(r)) &&
                                    ("fixed" === l(r).position || e(r, n))
                                  );
                                })(e, u))
                        )
                          ? (r = r.filter((e) => e !== u))
                          : (o = t),
                        (u = L(u));
                    }
                    return t.set(e, r), r;
                  })(t, this._c)
                : [].concat(n),
            u = [...i, r],
            c = u[0],
            p = u.reduce(
              (e, n) => {
                let r = k(t, n, o);
                return (
                  (e.top = v(r.top, e.top)),
                  (e.right = h(r.right, e.right)),
                  (e.bottom = h(r.bottom, e.bottom)),
                  (e.left = v(r.left, e.left)),
                  e
                );
              },
              k(t, c, o)
            );
          return {
            width: p.right - p.left,
            height: p.bottom - p.top,
            x: p.left,
            y: p.top,
          };
        },
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { rect: t, offsetParent: n, strategy: r } = e,
            o = u(n),
            l = R(n);
          if (n === l) return t;
          let i = { scrollLeft: 0, scrollTop: 0 },
            s = { x: 1, y: 1 },
            c = { x: 0, y: 0 };
          if (
            (o || (!o && "fixed" !== r)) &&
            (("body" !== a(n) || d(l)) && (i = P(n)), u(n))
          ) {
            let e = C(n);
            (s = b(n)), (c.x = e.x + n.clientLeft), (c.y = e.y + n.clientTop);
          }
          return {
            width: t.width * s.x,
            height: t.height * s.y,
            x: t.x * s.x - i.scrollLeft * s.x + c.x,
            y: t.y * s.y - i.scrollTop * s.y + c.y,
          };
        },
        isElement: s,
        getDimensions: function (e) {
          return y(e);
        },
        getOffsetParent: O,
        getDocumentElement: R,
        getScale: b,
        async getElementRects(e) {
          let { reference: t, floating: n, strategy: r } = e,
            o = this.getOffsetParent || O,
            l = this.getDimensions;
          return {
            reference: (function (e, t, n) {
              let r = u(t),
                o = R(t),
                l = "fixed" === n,
                i = C(e, !0, l, t),
                s = { scrollLeft: 0, scrollTop: 0 },
                c = { x: 0, y: 0 };
              if (r || (!r && !l)) {
                if ((("body" !== a(t) || d(o)) && (s = P(t)), u(t))) {
                  let e = C(t, !0, l, t);
                  (c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop);
                } else o && (c.x = T(o));
              }
              return {
                x: i.left + s.scrollLeft - c.x,
                y: i.top + s.scrollTop - c.y,
                width: i.width,
                height: i.height,
              };
            })(t, await o(n), r),
            floating: { x: 0, y: 0, ...(await l(n)) },
          };
        },
        getClientRects: (e) => Array.from(e.getClientRects()),
        isRTL: (e) => "rtl" === l(e).direction,
      };
      function W(e, t, n, r) {
        void 0 === r && (r = {});
        let {
            ancestorScroll: o = !0,
            ancestorResize: l = !0,
            elementResize: i = !0,
            animationFrame: a = !1,
          } = r,
          u =
            o || l
              ? [
                  ...(s(e)
                    ? D(e)
                    : e.contextElement
                      ? D(e.contextElement)
                      : []),
                  ...D(t),
                ]
              : [];
        u.forEach((e) => {
          let t = !s(e) && e.toString().includes("V");
          o && (!a || t) && e.addEventListener("scroll", n, { passive: !0 }),
            l && e.addEventListener("resize", n);
        });
        let c,
          d = null;
        i &&
          ((d = new ResizeObserver(() => {
            n();
          })),
          s(e) && !a && d.observe(e),
          s(e) || !e.contextElement || a || d.observe(e.contextElement),
          d.observe(t));
        let f = a ? C(e) : null;
        return (
          a &&
            (function t() {
              let r = C(e);
              f &&
                (r.x !== f.x ||
                  r.y !== f.y ||
                  r.width !== f.width ||
                  r.height !== f.height) &&
                n(),
                (f = r),
                (c = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            var e;
            u.forEach((e) => {
              o && e.removeEventListener("scroll", n),
                l && e.removeEventListener("resize", n);
            }),
              null == (e = d) || e.disconnect(),
              (d = null),
              a && cancelAnimationFrame(c);
          }
        );
      }
      let _ = (e, t, n) => {
        let o = new Map(),
          l = { platform: M, ...n },
          i = { ...l.platform, _c: o };
        return (0, r.oo)(e, t, { ...l, platform: i });
      };
    },
    67055: function (e, t, n) {
      let r, o;
      n.d(t, {
        VY: function () {
          return e9;
        },
        JO: function () {
          return e6;
        },
        ck: function () {
          return e3;
        },
        eT: function () {
          return te;
        },
        h_: function () {
          return e8;
        },
        fC: function () {
          return e2;
        },
        $G: function () {
          return tn;
        },
        u_: function () {
          return tt;
        },
        xz: function () {
          return e5;
        },
        B4: function () {
          return e4;
        },
        l_: function () {
          return e7;
        },
      });
      var l = n(45675),
        i = n(70079),
        a = n(99581);
      function u(e, [t, n]) {
        return Math.min(n, Math.max(t, e));
      }
      var s = n(10132),
        c = n(89340),
        d = n(68469),
        f = n(53559),
        p = n(74400),
        m = n(3262),
        h = n(8859),
        v = n(51629);
      let g = "dismissableLayer.update",
        y = (0, i.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        w = (0, i.forwardRef)((e, t) => {
          var n;
          let {
              disableOutsidePointerEvents: o = !1,
              onEscapeKeyDown: l,
              onPointerDownOutside: a,
              onFocusOutside: u,
              onInteractOutside: c,
              onDismiss: f,
              ...p
            } = e,
            w = (0, i.useContext)(y),
            [E, S] = (0, i.useState)(null),
            C =
              null !== (n = null == E ? void 0 : E.ownerDocument) &&
              void 0 !== n
                ? n
                : null == globalThis
                  ? void 0
                  : globalThis.document,
            [, R] = (0, i.useState)({}),
            P = (0, d.e)(t, (e) => S(e)),
            T = Array.from(w.layers),
            [L] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1),
            D = T.indexOf(L),
            k = E ? T.indexOf(E) : -1,
            A = w.layersWithOutsidePointerEventsDisabled.size > 0,
            O = k >= D,
            M = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, v.W)(e),
                r = (0, i.useRef)(!1),
                o = (0, i.useRef)(() => {});
              return (
                (0, i.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = { originalEvent: e };
                        function l() {
                          b("dismissableLayer.pointerDownOutside", n, r, {
                            discrete: !0,
                          });
                        }
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", o.current),
                            (o.current = l),
                            t.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : l();
                      }
                      r.current = !1;
                    },
                    l = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(l),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", o.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...w.branches].some((e) => e.contains(t));
              !O ||
                n ||
                (null == a || a(e),
                null == c || c(e),
                e.defaultPrevented || null == f || f());
            }, C),
            W = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, v.W)(e),
                r = (0, i.useRef)(!1);
              return (
                (0, i.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      b(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target,
                n = [...w.branches].some((e) => e.contains(t));
              n ||
                (null == u || u(e),
                null == c || c(e),
                e.defaultPrevented || null == f || f());
            }, C);
          return (
            !(function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, v.W)(e);
              (0, i.useEffect)(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e),
                  () => t.removeEventListener("keydown", e)
                );
              }, [n, t]);
            })((e) => {
              let t = k === w.layers.size - 1;
              t &&
                (null == l || l(e),
                !e.defaultPrevented && f && (e.preventDefault(), f()));
            }, C),
            (0, i.useEffect)(() => {
              if (E)
                return (
                  o &&
                    (0 === w.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = C.body.style.pointerEvents),
                      (C.body.style.pointerEvents = "none")),
                    w.layersWithOutsidePointerEventsDisabled.add(E)),
                  w.layers.add(E),
                  x(),
                  () => {
                    o &&
                      1 === w.layersWithOutsidePointerEventsDisabled.size &&
                      (C.body.style.pointerEvents = r);
                  }
                );
            }, [E, C, o, w]),
            (0, i.useEffect)(
              () => () => {
                E &&
                  (w.layers.delete(E),
                  w.layersWithOutsidePointerEventsDisabled.delete(E),
                  x());
              },
              [E, w]
            ),
            (0, i.useEffect)(() => {
              let e = () => R({});
              return (
                document.addEventListener(g, e),
                () => document.removeEventListener(g, e)
              );
            }, []),
            (0, i.createElement)(
              h.WV.div,
              (0, m.Z)({}, p, {
                ref: P,
                style: {
                  pointerEvents: A ? (O ? "auto" : "none") : void 0,
                  ...e.style,
                },
                onFocusCapture: (0, s.M)(e.onFocusCapture, W.onFocusCapture),
                onBlurCapture: (0, s.M)(e.onBlurCapture, W.onBlurCapture),
                onPointerDownCapture: (0, s.M)(
                  e.onPointerDownCapture,
                  M.onPointerDownCapture
                ),
              })
            )
          );
        });
      function x() {
        let e = new CustomEvent(g);
        document.dispatchEvent(e);
      }
      function b(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && o.addEventListener(e, t, { once: !0 }),
          r ? (0, h.jH)(o, l) : o.dispatchEvent(l);
      }
      let E = 0;
      function S() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
      let C = "focusScope.autoFocusOnMount",
        R = "focusScope.autoFocusOnUnmount",
        P = { bubbles: !1, cancelable: !0 },
        T = (0, i.forwardRef)((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: l,
              ...a
            } = e,
            [u, s] = (0, i.useState)(null),
            c = (0, v.W)(o),
            f = (0, v.W)(l),
            p = (0, i.useRef)(null),
            g = (0, d.e)(t, (e) => s(e)),
            y = (0, i.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, i.useEffect)(() => {
            if (r) {
              function e(e) {
                if (y.paused || !u) return;
                let t = e.target;
                u.contains(t) ? (p.current = t) : k(p.current, { select: !0 });
              }
              function t(e) {
                if (y.paused || !u) return;
                let t = e.relatedTarget;
                null === t || u.contains(t) || k(p.current, { select: !0 });
              }
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                let t = document.activeElement;
                for (let n of e)
                  n.removedNodes.length > 0 &&
                    !(null != u && u.contains(t)) &&
                    k(u);
              });
              return (
                u && n.observe(u, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, u, y.paused]),
            (0, i.useEffect)(() => {
              if (u) {
                A.add(y);
                let e = document.activeElement,
                  t = u.contains(e);
                if (!t) {
                  let t = new CustomEvent(C, P);
                  u.addEventListener(C, c),
                    u.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if (
                            (k(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        L(u).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && k(u));
                }
                return () => {
                  u.removeEventListener(C, c),
                    setTimeout(() => {
                      let t = new CustomEvent(R, P);
                      u.addEventListener(R, f),
                        u.dispatchEvent(t),
                        t.defaultPrevented ||
                          k(null != e ? e : document.body, { select: !0 }),
                        u.removeEventListener(R, f),
                        A.remove(y);
                    }, 0);
                };
              }
            }, [u, c, f, y]);
          let w = (0, i.useCallback)(
            (e) => {
              if ((!n && !r) || y.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, l] = (function (e) {
                    let t = L(e),
                      n = D(t, e),
                      r = D(t.reverse(), e);
                    return [n, r];
                  })(t);
                r && l
                  ? e.shiftKey || o !== l
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && k(l, { select: !0 }))
                    : (e.preventDefault(), n && k(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, y.paused]
          );
          return (0, i.createElement)(
            h.WV.div,
            (0, m.Z)({ tabIndex: -1 }, a, { ref: g, onKeyDown: w })
          );
        });
      function L(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function D(e, t) {
        for (let n of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function k(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      let A =
        ((o = []),
        {
          add(e) {
            let t = o[0];
            e !== t && (null == t || t.pause()), (o = O(o, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (o = O(o, e))[0]) || void 0 === t || t.resume();
          },
        });
      function O(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      var M = n(70494),
        W = n(84256),
        _ = n(88905);
      let I = (e) => {
        let { element: t, padding: n } = e;
        return {
          name: "arrow",
          options: e,
          fn(e) {
            if (t && {}.hasOwnProperty.call(t, "current")) {
              if (null != t.current)
                return (0, W.x7)({ element: t.current, padding: n }).fn(e);
            } else if (t) return (0, W.x7)({ element: t, padding: n }).fn(e);
            return {};
          },
        };
      };
      var H = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
      function V(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) != t.length) return !1;
            for (r = n; 0 != r--; ) if (!V(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !V(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function F(e) {
        if ("undefined" == typeof window) return 1;
        let t = e.ownerDocument.defaultView || window;
        return t.devicePixelRatio || 1;
      }
      function B(e, t) {
        let n = F(e);
        return Math.round(t * n) / n;
      }
      function N(e) {
        let t = i.useRef(e);
        return (
          H(() => {
            t.current = e;
          }),
          t
        );
      }
      let z = (0, i.forwardRef)((e, t) => {
        let { children: n, width: r = 10, height: o = 5, ...l } = e;
        return (0, i.createElement)(
          h.WV.svg,
          (0, m.Z)({}, l, {
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
          }),
          e.asChild
            ? n
            : (0, i.createElement)("polygon", { points: "0,0 30,0 15,10" })
        );
      });
      var K = n(90671);
      let Z = "Popper",
        [$, j] = (0, f.b)(Z),
        [U, q] = $(Z),
        Y = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, o] = (0, i.useState)(null);
          return (0, i.createElement)(
            U,
            { scope: t, anchor: r, onAnchorChange: o },
            n
          );
        },
        X = (0, i.forwardRef)((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...o } = e,
            l = q("PopperAnchor", n),
            a = (0, i.useRef)(null),
            u = (0, d.e)(t, a);
          return (
            (0, i.useEffect)(() => {
              l.onAnchorChange((null == r ? void 0 : r.current) || a.current);
            }),
            r
              ? null
              : (0, i.createElement)(h.WV.div, (0, m.Z)({}, o, { ref: u }))
          );
        }),
        J = "PopperContent",
        [G, Q] = $(J),
        ee = (0, i.forwardRef)((e, t) => {
          var n, r, o, l, u, s, c, f;
          let {
              __scopePopper: p,
              side: g = "bottom",
              sideOffset: y = 0,
              align: w = "center",
              alignOffset: x = 0,
              arrowPadding: b = 0,
              collisionBoundary: E = [],
              collisionPadding: S = 0,
              sticky: C = "partial",
              hideWhenDetached: R = !1,
              avoidCollisions: P = !0,
              onPlaced: T,
              ...L
            } = e,
            D = q(J, p),
            [k, A] = (0, i.useState)(null),
            O = (0, d.e)(t, (e) => A(e)),
            [M, z] = (0, i.useState)(null),
            Z = (function (e) {
              let [t, n] = (0, i.useState)(void 0);
              return (
                (0, K.b)(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let r, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let l = t[0];
                      if ("borderBoxSize" in l) {
                        let e = l.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (r = t.inlineSize), (o = t.blockSize);
                      } else (r = e.offsetWidth), (o = e.offsetHeight);
                      n({ width: r, height: o });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(M),
            $ =
              null !== (n = null == Z ? void 0 : Z.width) && void 0 !== n
                ? n
                : 0,
            j =
              null !== (r = null == Z ? void 0 : Z.height) && void 0 !== r
                ? r
                : 0,
            U =
              "number" == typeof S
                ? S
                : { top: 0, right: 0, bottom: 0, left: 0, ...S },
            Y = Array.isArray(E) ? E : [E],
            X = Y.length > 0,
            Q = { padding: U, boundary: Y.filter(en), altBoundary: X },
            {
              refs: ee,
              floatingStyles: et,
              placement: el,
              isPositioned: ei,
              middlewareData: ea,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: r = [],
                  platform: o,
                  elements: { reference: l, floating: u } = {},
                  transform: s = !0,
                  whileElementsMounted: c,
                  open: d,
                } = e,
                [f, p] = i.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [m, h] = i.useState(r);
              V(m, r) || h(r);
              let [v, g] = i.useState(null),
                [y, w] = i.useState(null),
                x = i.useCallback(
                  (e) => {
                    e != C.current && ((C.current = e), g(e));
                  },
                  [g]
                ),
                b = i.useCallback(
                  (e) => {
                    e !== R.current && ((R.current = e), w(e));
                  },
                  [w]
                ),
                E = l || v,
                S = u || y,
                C = i.useRef(null),
                R = i.useRef(null),
                P = i.useRef(f),
                T = N(c),
                L = N(o),
                D = i.useCallback(() => {
                  if (!C.current || !R.current) return;
                  let e = { placement: t, strategy: n, middleware: m };
                  L.current && (e.platform = L.current),
                    (0, _.oo)(C.current, R.current, e).then((e) => {
                      let t = { ...e, isPositioned: !0 };
                      k.current &&
                        !V(P.current, t) &&
                        ((P.current = t),
                        a.flushSync(() => {
                          p(t);
                        }));
                    });
                }, [m, t, n, L]);
              H(() => {
                !1 === d &&
                  P.current.isPositioned &&
                  ((P.current.isPositioned = !1),
                  p((e) => ({ ...e, isPositioned: !1 })));
              }, [d]);
              let k = i.useRef(!1);
              H(
                () => (
                  (k.current = !0),
                  () => {
                    k.current = !1;
                  }
                ),
                []
              ),
                H(() => {
                  if ((E && (C.current = E), S && (R.current = S), E && S)) {
                    if (T.current) return T.current(E, S, D);
                    D();
                  }
                }, [E, S, D, T]);
              let A = i.useMemo(
                  () => ({
                    reference: C,
                    floating: R,
                    setReference: x,
                    setFloating: b,
                  }),
                  [x, b]
                ),
                O = i.useMemo(() => ({ reference: E, floating: S }), [E, S]),
                M = i.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!O.floating) return e;
                  let t = B(O.floating, f.x),
                    r = B(O.floating, f.y);
                  return s
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(F(O.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, s, O.floating, f.x, f.y]);
              return i.useMemo(
                () => ({
                  ...f,
                  update: D,
                  refs: A,
                  elements: O,
                  floatingStyles: M,
                }),
                [f, D, A, O, M]
              );
            })({
              strategy: "fixed",
              placement: g + ("center" !== w ? "-" + w : ""),
              whileElementsMounted: _.Me,
              elements: { reference: D.anchor },
              middleware: [
                (0, W.cv)({ mainAxis: y + j, alignmentAxis: x }),
                P &&
                  (0, W.uY)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === C ? (0, W.dr)() : void 0,
                    ...Q,
                  }),
                P && (0, W.RR)({ ...Q }),
                (0, W.dp)({
                  ...Q,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r,
                  }) => {
                    let { width: o, height: l } = t.reference,
                      i = e.floating.style;
                    i.setProperty("--radix-popper-available-width", `${n}px`),
                      i.setProperty(
                        "--radix-popper-available-height",
                        `${r}px`
                      ),
                      i.setProperty("--radix-popper-anchor-width", `${o}px`),
                      i.setProperty("--radix-popper-anchor-height", `${l}px`);
                  },
                }),
                M && I({ element: M, padding: b }),
                er({ arrowWidth: $, arrowHeight: j }),
                R && (0, W.Cp)({ strategy: "referenceHidden" }),
              ],
            }),
            [eu, es] = eo(el),
            ec = (0, v.W)(T);
          (0, K.b)(() => {
            ei && (null == ec || ec());
          }, [ei, ec]);
          let ed = null === (o = ea.arrow) || void 0 === o ? void 0 : o.x,
            ef = null === (l = ea.arrow) || void 0 === l ? void 0 : l.y,
            ep =
              (null === (u = ea.arrow) || void 0 === u
                ? void 0
                : u.centerOffset) !== 0,
            [em, eh] = (0, i.useState)();
          return (
            (0, K.b)(() => {
              k && eh(window.getComputedStyle(k).zIndex);
            }, [k]),
            (0, i.createElement)(
              "div",
              {
                ref: ee.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...et,
                  transform: ei ? et.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: em,
                  "--radix-popper-transform-origin": [
                    null === (s = ea.transformOrigin) || void 0 === s
                      ? void 0
                      : s.x,
                    null === (c = ea.transformOrigin) || void 0 === c
                      ? void 0
                      : c.y,
                  ].join(" "),
                },
                dir: e.dir,
              },
              (0, i.createElement)(
                G,
                {
                  scope: p,
                  placedSide: eu,
                  onArrowChange: z,
                  arrowX: ed,
                  arrowY: ef,
                  shouldHideArrow: ep,
                },
                (0, i.createElement)(
                  h.WV.div,
                  (0, m.Z)({ "data-side": eu, "data-align": es }, L, {
                    ref: O,
                    style: {
                      ...L.style,
                      animation: ei ? void 0 : "none",
                      opacity:
                        null !== (f = ea.hide) &&
                        void 0 !== f &&
                        f.referenceHidden
                          ? 0
                          : void 0,
                    },
                  })
                )
              )
            )
          );
        }),
        et = { top: "bottom", right: "left", bottom: "top", left: "right" };
      function en(e) {
        return null !== e;
      }
      let er = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, l, i;
          let { placement: a, rects: u, middlewareData: s } = t,
            c =
              (null === (n = s.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            d = c ? 0 : e.arrowWidth,
            f = c ? 0 : e.arrowHeight,
            [p, m] = eo(a),
            h = { start: "0%", center: "50%", end: "100%" }[m],
            v =
              (null !==
                (r = null === (o = s.arrow) || void 0 === o ? void 0 : o.x) &&
              void 0 !== r
                ? r
                : 0) +
              d / 2,
            g =
              (null !==
                (l = null === (i = s.arrow) || void 0 === i ? void 0 : i.y) &&
              void 0 !== l
                ? l
                : 0) +
              f / 2,
            y = "",
            w = "";
          return (
            "bottom" === p
              ? ((y = c ? h : `${v}px`), (w = `${-f}px`))
              : "top" === p
                ? ((y = c ? h : `${v}px`), (w = `${u.floating.height + f}px`))
                : "right" === p
                  ? ((y = `${-f}px`), (w = c ? h : `${g}px`))
                  : "left" === p &&
                    ((y = `${u.floating.width + f}px`), (w = c ? h : `${g}px`)),
            { data: { x: y, y: w } }
          );
        },
      });
      function eo(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      let el = (0, i.forwardRef)((e, t) => {
        var n;
        let {
          container: r = null == globalThis
            ? void 0
            : null === (n = globalThis.document) || void 0 === n
              ? void 0
              : n.body,
          ...o
        } = e;
        return r
          ? a.createPortal(
              (0, i.createElement)(h.WV.div, (0, m.Z)({}, o, { ref: t })),
              r
            )
          : null;
      });
      var ei = n(26739),
        ea = n(21381),
        eu = n(32148),
        es = n(66546),
        ec = n(54239);
      let ed = [" ", "Enter", "ArrowUp", "ArrowDown"],
        ef = [" ", "Enter"],
        ep = "Select",
        [em, eh, ev] = (0, c.B)(ep),
        [eg, ey] = (0, f.b)(ep, [ev, j]),
        ew = j(),
        [ex, eb] = eg(ep),
        [eE, eS] = eg(ep),
        eC = (e) => {
          let {
              __scopeSelect: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: l,
              value: a,
              defaultValue: u,
              onValueChange: s,
              dir: c,
              name: d,
              autoComplete: f,
              disabled: m,
              required: h,
            } = e,
            v = ew(t),
            [g, y] = (0, i.useState)(null),
            [w, x] = (0, i.useState)(null),
            [b, E] = (0, i.useState)(!1),
            S = (0, p.gm)(c),
            [C = !1, R] = (0, ea.T)({ prop: r, defaultProp: o, onChange: l }),
            [P, T] = (0, ea.T)({ prop: a, defaultProp: u, onChange: s }),
            L = (0, i.useRef)(null),
            D = !g || !!g.closest("form"),
            [k, A] = (0, i.useState)(new Set()),
            O = Array.from(k)
              .map((e) => e.props.value)
              .join(";");
          return (0, i.createElement)(
            Y,
            v,
            (0, i.createElement)(
              ex,
              {
                required: h,
                scope: t,
                trigger: g,
                onTriggerChange: y,
                valueNode: w,
                onValueNodeChange: x,
                valueNodeHasChildren: b,
                onValueNodeHasChildrenChange: E,
                contentId: (0, M.M)(),
                value: P,
                onValueChange: T,
                open: C,
                onOpenChange: R,
                dir: S,
                triggerPointerDownPosRef: L,
                disabled: m,
              },
              (0, i.createElement)(
                em.Provider,
                { scope: t },
                (0, i.createElement)(
                  eE,
                  {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: (0, i.useCallback)((e) => {
                      A((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: (0, i.useCallback)((e) => {
                      A((t) => {
                        let n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, []),
                  },
                  n
                )
              ),
              D
                ? (0, i.createElement)(
                    eQ,
                    {
                      key: O,
                      "aria-hidden": !0,
                      required: h,
                      tabIndex: -1,
                      name: d,
                      autoComplete: f,
                      value: P,
                      onChange: (e) => T(e.target.value),
                      disabled: m,
                    },
                    void 0 === P
                      ? (0, i.createElement)("option", { value: "" })
                      : null,
                    Array.from(k)
                  )
                : null
            )
          );
        },
        eR = (0, i.forwardRef)((e, t) => {
          let { __scopeSelect: n, disabled: r = !1, ...o } = e,
            a = ew(n),
            u = eb("SelectTrigger", n),
            c = u.disabled || r,
            f = (0, d.e)(t, u.onTriggerChange),
            p = eh(n),
            [m, v, g] = e0((e) => {
              let t = p().filter((e) => !e.disabled),
                n = t.find((e) => e.value === u.value),
                r = e1(t, e, n);
              void 0 !== r && u.onValueChange(r.value);
            }),
            y = () => {
              c || (u.onOpenChange(!0), g());
            };
          return (0, i.createElement)(
            X,
            (0, l.Z)({ asChild: !0 }, a),
            (0, i.createElement)(
              h.WV.button,
              (0, l.Z)(
                {
                  type: "button",
                  role: "combobox",
                  "aria-controls": u.contentId,
                  "aria-expanded": u.open,
                  "aria-required": u.required,
                  "aria-autocomplete": "none",
                  dir: u.dir,
                  "data-state": u.open ? "open" : "closed",
                  disabled: c,
                  "data-disabled": c ? "" : void 0,
                  "data-placeholder": void 0 === u.value ? "" : void 0,
                },
                o,
                {
                  ref: f,
                  onClick: (0, s.M)(o.onClick, (e) => {
                    e.currentTarget.focus();
                  }),
                  onPointerDown: (0, s.M)(o.onPointerDown, (e) => {
                    let t = e.target;
                    t.hasPointerCapture(e.pointerId) &&
                      t.releasePointerCapture(e.pointerId),
                      0 === e.button &&
                        !1 === e.ctrlKey &&
                        (y(),
                        (u.triggerPointerDownPosRef.current = {
                          x: Math.round(e.pageX),
                          y: Math.round(e.pageY),
                        }),
                        e.preventDefault());
                  }),
                  onKeyDown: (0, s.M)(o.onKeyDown, (e) => {
                    let t = "" !== m.current,
                      n = e.ctrlKey || e.altKey || e.metaKey;
                    n || 1 !== e.key.length || v(e.key),
                      (!t || " " !== e.key) &&
                        ed.includes(e.key) &&
                        (y(), e.preventDefault());
                  }),
                }
              )
            )
          );
        }),
        eP = (0, i.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              className: r,
              style: o,
              children: a,
              placeholder: u,
              ...s
            } = e,
            c = eb("SelectValue", n),
            { onValueNodeHasChildrenChange: f } = c,
            p = void 0 !== a,
            m = (0, d.e)(t, c.onValueNodeChange);
          return (
            (0, K.b)(() => {
              f(p);
            }, [f, p]),
            (0, i.createElement)(
              h.WV.span,
              (0, l.Z)({}, s, { ref: m, style: { pointerEvents: "none" } }),
              void 0 === c.value && void 0 !== u ? u : a
            )
          );
        }),
        eT = (0, i.forwardRef)((e, t) => {
          let { __scopeSelect: n, children: r, ...o } = e;
          return (0, i.createElement)(
            h.WV.span,
            (0, l.Z)({ "aria-hidden": !0 }, o, { ref: t }),
            r || "▼"
          );
        }),
        eL = (e) => (0, i.createElement)(el, (0, l.Z)({ asChild: !0 }, e)),
        eD = "SelectContent",
        ek = (0, i.forwardRef)((e, t) => {
          let n = eb(eD, e.__scopeSelect),
            [r, o] = (0, i.useState)();
          return ((0, K.b)(() => {
            o(new DocumentFragment());
          }, []),
          n.open)
            ? (0, i.createElement)(eM, (0, l.Z)({}, e, { ref: t }))
            : r
              ? (0, a.createPortal)(
                  (0, i.createElement)(
                    eA,
                    { scope: e.__scopeSelect },
                    (0, i.createElement)(
                      em.Slot,
                      { scope: e.__scopeSelect },
                      (0, i.createElement)("div", null, e.children)
                    )
                  ),
                  r
                )
              : null;
        }),
        [eA, eO] = eg(eD),
        eM = (0, i.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              position: r = "item-aligned",
              onCloseAutoFocus: o,
              onEscapeKeyDown: a,
              onPointerDownOutside: u,
              side: c,
              sideOffset: f,
              align: p,
              alignOffset: m,
              arrowPadding: h,
              collisionBoundary: v,
              collisionPadding: g,
              sticky: y,
              hideWhenDetached: x,
              avoidCollisions: b,
              ...C
            } = e,
            R = eb(eD, n),
            [P, L] = (0, i.useState)(null),
            [D, k] = (0, i.useState)(null),
            A = (0, d.e)(t, (e) => L(e)),
            [O, M] = (0, i.useState)(null),
            [W, _] = (0, i.useState)(null),
            I = eh(n),
            [H, V] = (0, i.useState)(!1),
            F = (0, i.useRef)(!1);
          (0, i.useEffect)(() => {
            if (P) return (0, es.Ry)(P);
          }, [P]),
            (0, i.useEffect)(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = n[0]) && void 0 !== e ? e : S()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = n[1]) && void 0 !== t ? t : S()
                ),
                E++,
                () => {
                  1 === E &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    E--;
                }
              );
            }, []);
          let B = (0, i.useCallback)(
              (e) => {
                let [t, ...n] = I().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  o = document.activeElement;
                for (let n of e)
                  if (
                    n === o ||
                    (null == n || n.scrollIntoView({ block: "nearest" }),
                    n === t && D && (D.scrollTop = 0),
                    n === r && D && (D.scrollTop = D.scrollHeight),
                    null == n || n.focus(),
                    document.activeElement !== o)
                  )
                    return;
              },
              [I, D]
            ),
            N = (0, i.useCallback)(() => B([O, P]), [B, O, P]);
          (0, i.useEffect)(() => {
            H && N();
          }, [H, N]);
          let { onOpenChange: z, triggerPointerDownPosRef: K } = R;
          (0, i.useEffect)(() => {
            if (P) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var n, r, o, l;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null !==
                          (n =
                            null === (r = K.current) || void 0 === r
                              ? void 0
                              : r.x) && void 0 !== n
                          ? n
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null !==
                          (o =
                            null === (l = K.current) || void 0 === l
                              ? void 0
                              : l.y) && void 0 !== o
                          ? o
                          : 0)
                    ),
                  };
                },
                n = (n) => {
                  e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : P.contains(n.target) || z(!1),
                    document.removeEventListener("pointermove", t),
                    (K.current = null);
                };
              return (
                null !== K.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", n, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", n, {
                      capture: !0,
                    });
                }
              );
            }
          }, [P, z, K]),
            (0, i.useEffect)(() => {
              let e = () => z(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [z]);
          let [Z, $] = e0((e) => {
              let t = I().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = e1(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            j = (0, i.useCallback)(
              (e, t, n) => {
                let r = !F.current && !n,
                  o = void 0 !== R.value && R.value === t;
                (o || r) && (M(e), r && (F.current = !0));
              },
              [R.value]
            ),
            U = (0, i.useCallback)(() => (null == P ? void 0 : P.focus()), [P]),
            q = (0, i.useCallback)(
              (e, t, n) => {
                let r = !F.current && !n,
                  o = void 0 !== R.value && R.value === t;
                (o || r) && _(e);
              },
              [R.value]
            ),
            Y = "popper" === r ? e_ : eW;
          return (0, i.createElement)(
            eA,
            {
              scope: n,
              content: P,
              viewport: D,
              onViewportChange: k,
              itemRefCallback: j,
              selectedItem: O,
              onItemLeave: U,
              itemTextRefCallback: q,
              focusSelectedItem: N,
              selectedItemText: W,
              position: r,
              isPositioned: H,
              searchRef: Z,
            },
            (0, i.createElement)(
              ec.Z,
              { as: ei.g7, allowPinchZoom: !0 },
              (0, i.createElement)(
                T,
                {
                  asChild: !0,
                  trapped: R.open,
                  onMountAutoFocus: (e) => {
                    e.preventDefault();
                  },
                  onUnmountAutoFocus: (0, s.M)(o, (e) => {
                    var t;
                    null === (t = R.trigger) ||
                      void 0 === t ||
                      t.focus({ preventScroll: !0 }),
                      e.preventDefault();
                  }),
                },
                (0, i.createElement)(
                  w,
                  {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: a,
                    onPointerDownOutside: u,
                    onFocusOutside: (e) => e.preventDefault(),
                    onDismiss: () => R.onOpenChange(!1),
                  },
                  (0, i.createElement)(
                    Y,
                    (0, l.Z)(
                      {
                        role: "listbox",
                        id: R.contentId,
                        "data-state": R.open ? "open" : "closed",
                        dir: R.dir,
                        onContextMenu: (e) => e.preventDefault(),
                      },
                      C,
                      Y === e_
                        ? {
                            side: c,
                            sideOffset: f,
                            align: p,
                            alignOffset: m,
                            arrowPadding: h,
                            collisionBoundary: v,
                            collisionPadding: g,
                            sticky: y,
                            hideWhenDetached: x,
                            avoidCollisions: b,
                          }
                        : {},
                      {
                        onPlaced: () => V(!0),
                        ref: A,
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          outline: "none",
                          ...C.style,
                        },
                        onKeyDown: (0, s.M)(C.onKeyDown, (e) => {
                          let t = e.ctrlKey || e.altKey || e.metaKey;
                          if (
                            ("Tab" === e.key && e.preventDefault(),
                            t || 1 !== e.key.length || $(e.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(
                              e.key
                            ))
                          ) {
                            let t = I().filter((e) => !e.disabled),
                              n = t.map((e) => e.ref.current);
                            if (
                              (["ArrowUp", "End"].includes(e.key) &&
                                (n = n.slice().reverse()),
                              ["ArrowUp", "ArrowDown"].includes(e.key))
                            ) {
                              let t = e.target,
                                r = n.indexOf(t);
                              n = n.slice(r + 1);
                            }
                            setTimeout(() => B(n)), e.preventDefault();
                          }
                        }),
                      }
                    )
                  )
                )
              )
            )
          );
        }),
        eW = (0, i.forwardRef)((e, t) => {
          let { __scopeSelect: n, onPlaced: r, ...o } = e,
            a = eb(eD, n),
            s = eO(eD, n),
            [c, f] = (0, i.useState)(null),
            [p, m] = (0, i.useState)(null),
            v = (0, d.e)(t, (e) => m(e)),
            g = eh(n),
            y = (0, i.useRef)(!1),
            w = (0, i.useRef)(!0),
            {
              viewport: x,
              selectedItem: b,
              selectedItemText: E,
              focusSelectedItem: S,
            } = s,
            C = (0, i.useCallback)(() => {
              if (a.trigger && a.valueNode && c && p && x && b && E) {
                let e = a.trigger.getBoundingClientRect(),
                  t = p.getBoundingClientRect(),
                  n = a.valueNode.getBoundingClientRect(),
                  o = E.getBoundingClientRect();
                if ("rtl" !== a.dir) {
                  let r = o.left - t.left,
                    l = n.left - r,
                    i = e.left - l,
                    a = e.width + i,
                    s = Math.max(a, t.width),
                    d = window.innerWidth - 10,
                    f = u(l, [10, d - s]);
                  (c.style.minWidth = a + "px"), (c.style.left = f + "px");
                } else {
                  let r = t.right - o.right,
                    l = window.innerWidth - n.right - r,
                    i = window.innerWidth - e.right - l,
                    a = e.width + i,
                    s = Math.max(a, t.width),
                    d = window.innerWidth - 10,
                    f = u(l, [10, d - s]);
                  (c.style.minWidth = a + "px"), (c.style.right = f + "px");
                }
                let l = g(),
                  i = window.innerHeight - 20,
                  s = x.scrollHeight,
                  d = window.getComputedStyle(p),
                  f = parseInt(d.borderTopWidth, 10),
                  m = parseInt(d.paddingTop, 10),
                  h = parseInt(d.borderBottomWidth, 10),
                  v = parseInt(d.paddingBottom, 10),
                  w = f + m + s + v + h,
                  S = Math.min(5 * b.offsetHeight, w),
                  C = window.getComputedStyle(x),
                  R = parseInt(C.paddingTop, 10),
                  P = parseInt(C.paddingBottom, 10),
                  T = e.top + e.height / 2 - 10,
                  L = b.offsetHeight / 2,
                  D = b.offsetTop + L,
                  k = f + m + D;
                if (k <= T) {
                  let e = b === l[l.length - 1].ref.current;
                  c.style.bottom = "0px";
                  let t = p.clientHeight - x.offsetTop - x.offsetHeight;
                  c.style.height =
                    k + Math.max(i - T, L + (e ? P : 0) + t + h) + "px";
                } else {
                  let e = b === l[0].ref.current;
                  c.style.top = "0px";
                  let t = Math.max(T, f + x.offsetTop + (e ? R : 0) + L);
                  (c.style.height = t + (w - k) + "px"),
                    (x.scrollTop = k - T + x.offsetTop);
                }
                (c.style.margin = "10px 0"),
                  (c.style.minHeight = S + "px"),
                  (c.style.maxHeight = i + "px"),
                  null == r || r(),
                  requestAnimationFrame(() => (y.current = !0));
              }
            }, [g, a.trigger, a.valueNode, c, p, x, b, E, a.dir, r]);
          (0, K.b)(() => C(), [C]);
          let [R, P] = (0, i.useState)();
          (0, K.b)(() => {
            p && P(window.getComputedStyle(p).zIndex);
          }, [p]);
          let T = (0, i.useCallback)(
            (e) => {
              e &&
                !0 === w.current &&
                (C(), null == S || S(), (w.current = !1));
            },
            [C, S]
          );
          return (0, i.createElement)(
            eI,
            {
              scope: n,
              contentWrapper: c,
              shouldExpandOnScrollRef: y,
              onScrollButtonChange: T,
            },
            (0, i.createElement)(
              "div",
              {
                ref: f,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  position: "fixed",
                  zIndex: R,
                },
              },
              (0, i.createElement)(
                h.WV.div,
                (0, l.Z)({}, o, {
                  ref: v,
                  style: {
                    boxSizing: "border-box",
                    maxHeight: "100%",
                    ...o.style,
                  },
                })
              )
            )
          );
        }),
        e_ = (0, i.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              align: r = "start",
              collisionPadding: o = 10,
              ...a
            } = e,
            u = ew(n);
          return (0, i.createElement)(
            ee,
            (0, l.Z)({}, u, a, {
              ref: t,
              align: r,
              collisionPadding: o,
              style: {
                boxSizing: "border-box",
                ...a.style,
                "--radix-select-content-transform-origin":
                  "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width":
                  "var(--radix-popper-available-width)",
                "--radix-select-content-available-height":
                  "var(--radix-popper-available-height)",
                "--radix-select-trigger-width":
                  "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height":
                  "var(--radix-popper-anchor-height)",
              },
            })
          );
        }),
        [eI, eH] = eg(eD, {}),
        eV = "SelectViewport",
        eF = (0, i.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = eO(eV, n),
            a = eH(eV, n),
            u = (0, d.e)(t, o.onViewportChange),
            c = (0, i.useRef)(0);
          return (0, i.createElement)(
            i.Fragment,
            null,
            (0, i.createElement)("style", {
              dangerouslySetInnerHTML: {
                __html:
                  "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
              },
            }),
            (0, i.createElement)(
              em.Slot,
              { scope: n },
              (0, i.createElement)(
                h.WV.div,
                (0, l.Z)(
                  { "data-radix-select-viewport": "", role: "presentation" },
                  r,
                  {
                    ref: u,
                    style: {
                      position: "relative",
                      flex: 1,
                      overflow: "auto",
                      ...r.style,
                    },
                    onScroll: (0, s.M)(r.onScroll, (e) => {
                      let t = e.currentTarget,
                        { contentWrapper: n, shouldExpandOnScrollRef: r } = a;
                      if (null != r && r.current && n) {
                        let e = Math.abs(c.current - t.scrollTop);
                        if (e > 0) {
                          let r = window.innerHeight - 20,
                            o = parseFloat(n.style.minHeight),
                            l = parseFloat(n.style.height),
                            i = Math.max(o, l);
                          if (i < r) {
                            let o = i + e,
                              l = Math.min(r, o),
                              a = o - l;
                            (n.style.height = l + "px"),
                              "0px" === n.style.bottom &&
                                ((t.scrollTop = a > 0 ? a : 0),
                                (n.style.justifyContent = "flex-end"));
                          }
                        }
                      }
                      c.current = t.scrollTop;
                    }),
                  }
                )
              )
            )
          );
        }),
        [eB, eN] = eg("SelectGroup"),
        ez = "SelectItem",
        [eK, eZ] = eg(ez),
        e$ = (0, i.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              value: r,
              disabled: o = !1,
              textValue: a,
              ...u
            } = e,
            c = eb(ez, n),
            f = eO(ez, n),
            p = c.value === r,
            [m, v] = (0, i.useState)(null != a ? a : ""),
            [g, y] = (0, i.useState)(!1),
            w = (0, d.e)(t, (e) => {
              var t;
              return null === (t = f.itemRefCallback) || void 0 === t
                ? void 0
                : t.call(f, e, r, o);
            }),
            x = (0, M.M)(),
            b = () => {
              o || (c.onValueChange(r), c.onOpenChange(!1));
            };
          return (0, i.createElement)(
            eK,
            {
              scope: n,
              value: r,
              disabled: o,
              textId: x,
              isSelected: p,
              onItemTextChange: (0, i.useCallback)((e) => {
                v((t) => {
                  var n;
                  return (
                    t ||
                    (null !== (n = null == e ? void 0 : e.textContent) &&
                    void 0 !== n
                      ? n
                      : ""
                    ).trim()
                  );
                });
              }, []),
            },
            (0, i.createElement)(
              em.ItemSlot,
              { scope: n, value: r, disabled: o, textValue: m },
              (0, i.createElement)(
                h.WV.div,
                (0, l.Z)(
                  {
                    role: "option",
                    "aria-labelledby": x,
                    "data-highlighted": g ? "" : void 0,
                    "aria-selected": p && g,
                    "data-state": p ? "checked" : "unchecked",
                    "aria-disabled": o || void 0,
                    "data-disabled": o ? "" : void 0,
                    tabIndex: o ? void 0 : -1,
                  },
                  u,
                  {
                    ref: w,
                    onFocus: (0, s.M)(u.onFocus, () => y(!0)),
                    onBlur: (0, s.M)(u.onBlur, () => y(!1)),
                    onPointerUp: (0, s.M)(u.onPointerUp, b),
                    onPointerMove: (0, s.M)(u.onPointerMove, (e) => {
                      if (o) {
                        var t;
                        null === (t = f.onItemLeave) ||
                          void 0 === t ||
                          t.call(f);
                      } else e.currentTarget.focus({ preventScroll: !0 });
                    }),
                    onPointerLeave: (0, s.M)(u.onPointerLeave, (e) => {
                      if (e.currentTarget === document.activeElement) {
                        var t;
                        null === (t = f.onItemLeave) ||
                          void 0 === t ||
                          t.call(f);
                      }
                    }),
                    onKeyDown: (0, s.M)(u.onKeyDown, (e) => {
                      var t;
                      let n =
                        (null === (t = f.searchRef) || void 0 === t
                          ? void 0
                          : t.current) !== "";
                      (n && " " === e.key) ||
                        (ef.includes(e.key) && b(),
                        " " === e.key && e.preventDefault());
                    }),
                  }
                )
              )
            )
          );
        }),
        ej = "SelectItemText",
        eU = (0, i.forwardRef)((e, t) => {
          let { __scopeSelect: n, className: r, style: o, ...u } = e,
            s = eb(ej, n),
            c = eO(ej, n),
            f = eZ(ej, n),
            p = eS(ej, n),
            [m, v] = (0, i.useState)(null),
            g = (0, d.e)(
              t,
              (e) => v(e),
              f.onItemTextChange,
              (e) => {
                var t;
                return null === (t = c.itemTextRefCallback) || void 0 === t
                  ? void 0
                  : t.call(c, e, f.value, f.disabled);
              }
            ),
            y = null == m ? void 0 : m.textContent,
            w = (0, i.useMemo)(
              () =>
                (0, i.createElement)(
                  "option",
                  { key: f.value, value: f.value, disabled: f.disabled },
                  y
                ),
              [f.disabled, f.value, y]
            ),
            { onNativeOptionAdd: x, onNativeOptionRemove: b } = p;
          return (
            (0, K.b)(() => (x(w), () => b(w)), [x, b, w]),
            (0, i.createElement)(
              i.Fragment,
              null,
              (0, i.createElement)(
                h.WV.span,
                (0, l.Z)({ id: f.textId }, u, { ref: g })
              ),
              f.isSelected && s.valueNode && !s.valueNodeHasChildren
                ? (0, a.createPortal)(u.children, s.valueNode)
                : null
            )
          );
        }),
        eq = "SelectScrollUpButton",
        eY = (0, i.forwardRef)((e, t) => {
          let n = eO(eq, e.__scopeSelect),
            r = eH(eq, e.__scopeSelect),
            [o, a] = (0, i.useState)(!1),
            u = (0, d.e)(t, r.onScrollButtonChange);
          return (
            (0, K.b)(() => {
              if (n.viewport && n.isPositioned) {
                let t = n.viewport;
                function e() {
                  let e = t.scrollTop > 0;
                  a(e);
                }
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            o
              ? (0, i.createElement)(
                  eG,
                  (0, l.Z)({}, e, {
                    ref: u,
                    onAutoScroll: () => {
                      let { viewport: e, selectedItem: t } = n;
                      e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                    },
                  })
                )
              : null
          );
        }),
        eX = "SelectScrollDownButton",
        eJ = (0, i.forwardRef)((e, t) => {
          let n = eO(eX, e.__scopeSelect),
            r = eH(eX, e.__scopeSelect),
            [o, a] = (0, i.useState)(!1),
            u = (0, d.e)(t, r.onScrollButtonChange);
          return (
            (0, K.b)(() => {
              if (n.viewport && n.isPositioned) {
                let t = n.viewport;
                function e() {
                  let e = t.scrollHeight - t.clientHeight,
                    n = Math.ceil(t.scrollTop) < e;
                  a(n);
                }
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            o
              ? (0, i.createElement)(
                  eG,
                  (0, l.Z)({}, e, {
                    ref: u,
                    onAutoScroll: () => {
                      let { viewport: e, selectedItem: t } = n;
                      e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                    },
                  })
                )
              : null
          );
        }),
        eG = (0, i.forwardRef)((e, t) => {
          let { __scopeSelect: n, onAutoScroll: r, ...o } = e,
            a = eO("SelectScrollButton", n),
            u = (0, i.useRef)(null),
            c = eh(n),
            d = (0, i.useCallback)(() => {
              null !== u.current &&
                (window.clearInterval(u.current), (u.current = null));
            }, []);
          return (
            (0, i.useEffect)(() => () => d(), [d]),
            (0, K.b)(() => {
              var e;
              let t = c().find((e) => e.ref.current === document.activeElement);
              null == t ||
                null === (e = t.ref.current) ||
                void 0 === e ||
                e.scrollIntoView({ block: "nearest" });
            }, [c]),
            (0, i.createElement)(
              h.WV.div,
              (0, l.Z)({ "aria-hidden": !0 }, o, {
                ref: t,
                style: { flexShrink: 0, ...o.style },
                onPointerDown: (0, s.M)(o.onPointerDown, () => {
                  null === u.current && (u.current = window.setInterval(r, 50));
                }),
                onPointerMove: (0, s.M)(o.onPointerMove, () => {
                  var e;
                  null === (e = a.onItemLeave) || void 0 === e || e.call(a),
                    null === u.current &&
                      (u.current = window.setInterval(r, 50));
                }),
                onPointerLeave: (0, s.M)(o.onPointerLeave, () => {
                  d();
                }),
              })
            )
          );
        }),
        eQ = (0, i.forwardRef)((e, t) => {
          let { value: n, ...r } = e,
            o = (0, i.useRef)(null),
            a = (0, d.e)(t, o),
            u = (function (e) {
              let t = (0, i.useRef)({ value: e, previous: e });
              return (0, i.useMemo)(
                () => (
                  t.current.value !== e &&
                    ((t.current.previous = t.current.value),
                    (t.current.value = e)),
                  t.current.previous
                ),
                [e]
              );
            })(n);
          return (
            (0, i.useEffect)(() => {
              let e = o.current,
                t = window.HTMLSelectElement.prototype,
                r = Object.getOwnPropertyDescriptor(t, "value"),
                l = r.set;
              if (u !== n && l) {
                let t = new Event("change", { bubbles: !0 });
                l.call(e, n), e.dispatchEvent(t);
              }
            }, [u, n]),
            (0, i.createElement)(
              eu.T,
              { asChild: !0 },
              (0, i.createElement)(
                "select",
                (0, l.Z)({}, r, { ref: a, defaultValue: n })
              )
            )
          );
        });
      function e0(e) {
        let t = (0, v.W)(e),
          n = (0, i.useRef)(""),
          r = (0, i.useRef)(0),
          o = (0, i.useCallback)(
            (e) => {
              let o = n.current + e;
              t(o),
                (function e(t) {
                  (n.current = t),
                    window.clearTimeout(r.current),
                    "" !== t &&
                      (r.current = window.setTimeout(() => e(""), 1e3));
                })(o);
            },
            [t]
          ),
          l = (0, i.useCallback)(() => {
            (n.current = ""), window.clearTimeout(r.current);
          }, []);
        return (
          (0, i.useEffect)(() => () => window.clearTimeout(r.current), []),
          [n, o, l]
        );
      }
      function e1(e, t, n) {
        var r;
        let o = t.length > 1 && Array.from(t).every((e) => e === t[0]),
          l = o ? t[0] : t,
          i = n ? e.indexOf(n) : -1,
          a = ((r = Math.max(i, 0)), e.map((t, n) => e[(r + n) % e.length])),
          u = 1 === l.length;
        u && (a = a.filter((e) => e !== n));
        let s = a.find((e) =>
          e.textValue.toLowerCase().startsWith(l.toLowerCase())
        );
        return s !== n ? s : void 0;
      }
      eQ.displayName = "BubbleSelect";
      let e2 = eC,
        e5 = eR,
        e4 = eP,
        e6 = eT,
        e8 = eL,
        e9 = ek,
        e7 = eF,
        e3 = e$,
        te = eU,
        tt = eY,
        tn = eJ;
    },
  },
]);
