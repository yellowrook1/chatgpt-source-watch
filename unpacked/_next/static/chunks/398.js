"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [398],
  {
    398: function (e, a, r) {
      r.d(a, {
        ZP: function () {
          return ab;
        },
      });
      var t = r(30204);
      function l(e, a) {
        if (null == e) return {};
        var r,
          t,
          l = {},
          n = Object.keys(e);
        for (t = 0; t < n.length; t++)
          (r = n[t]), a.indexOf(r) >= 0 || (l[r] = e[r]);
        return l;
      }
      var n = r(70079),
        s = r(35250),
        i = {},
        o = (0, n.createContext)(i),
        u = (e, a) => (0, t.Z)({}, e, a),
        v = () => (0, n.useContext)(o),
        c = (0, n.createContext)(() => {});
      function y() {
        return (0, n.useContext)(c);
      }
      c.displayName = "JVR.DispatchShowTools";
      var p = (e) => {
        var { initial: a, dispatch: r, children: t } = e;
        return (0, s.jsx)(o.Provider, {
          value: a,
          children: (0, s.jsx)(c.Provider, { value: r, children: t }),
        });
      };
      p.displayName = "JVR.ShowTools";
      var d = {},
        m = (0, n.createContext)(d),
        j = (e, a) => (0, t.Z)({}, e, a),
        f = () => (0, n.useContext)(m),
        N = (0, n.createContext)(() => {});
      N.displayName = "JVR.DispatchExpands";
      var x = (e) => {
        var { initial: a, dispatch: r, children: t } = e;
        return (0, s.jsx)(m.Provider, {
          value: a,
          children: (0, s.jsx)(N.Provider, { value: r, children: t }),
        });
      };
      x.displayName = "JVR.Expands";
      var h = {
          Str: {
            as: "span",
            "data-type": "string",
            style: { color: "var(--w-rjv-type-string-color, #cb4b16)" },
            className: "w-rjv-type",
            children: "string",
          },
          Url: {
            as: "a",
            style: { color: "var(--w-rjv-type-url-color, #0969da)" },
            "data-type": "url",
            className: "w-rjv-type",
            children: "url",
          },
          Undefined: {
            style: { color: "var(--w-rjv-type-undefined-color, #586e75)" },
            as: "span",
            "data-type": "undefined",
            className: "w-rjv-type",
            children: "undefined",
          },
          Null: {
            style: { color: "var(--w-rjv-type-null-color, #d33682)" },
            as: "span",
            "data-type": "null",
            className: "w-rjv-type",
            children: "null",
          },
          Map: {
            style: {
              color: "var(--w-rjv-type-map-color, #268bd2)",
              marginRight: 3,
            },
            as: "span",
            "data-type": "map",
            className: "w-rjv-type",
            children: "Map",
          },
          Nan: {
            style: { color: "var(--w-rjv-type-nan-color, #859900)" },
            as: "span",
            "data-type": "nan",
            className: "w-rjv-type",
            children: "NaN",
          },
          Bigint: {
            style: { color: "var(--w-rjv-type-bigint-color, #268bd2)" },
            as: "span",
            "data-type": "bigint",
            className: "w-rjv-type",
            children: "bigint",
          },
          Int: {
            style: { color: "var(--w-rjv-type-int-color, #268bd2)" },
            as: "span",
            "data-type": "int",
            className: "w-rjv-type",
            children: "int",
          },
          Set: {
            style: {
              color: "var(--w-rjv-type-set-color, #268bd2)",
              marginRight: 3,
            },
            as: "span",
            "data-type": "set",
            className: "w-rjv-type",
            children: "Set",
          },
          Float: {
            style: { color: "var(--w-rjv-type-float-color, #859900)" },
            as: "span",
            "data-type": "float",
            className: "w-rjv-type",
            children: "float",
          },
          True: {
            style: { color: "var(--w-rjv-type-boolean-color, #2aa198)" },
            as: "span",
            "data-type": "bool",
            className: "w-rjv-type",
            children: "bool",
          },
          False: {
            style: { color: "var(--w-rjv-type-boolean-color, #2aa198)" },
            as: "span",
            "data-type": "bool",
            className: "w-rjv-type",
            children: "bool",
          },
          Date: {
            style: { color: "var(--w-rjv-type-date-color, #268bd2)" },
            as: "span",
            "data-type": "date",
            className: "w-rjv-type",
            children: "date",
          },
        },
        Z = (0, n.createContext)(h),
        w = (e, a) => (0, t.Z)({}, e, a),
        R = () => (0, n.useContext)(Z),
        g = (0, n.createContext)(() => {});
      function C(e) {
        var { initial: a, dispatch: r, children: t } = e;
        return (0, s.jsx)(Z.Provider, {
          value: a,
          children: (0, s.jsx)(g.Provider, { value: r, children: t }),
        });
      }
      (g.displayName = "JVR.DispatchTypes"), (C.displayName = "JVR.Types");
      var V = ["style"];
      function b(e) {
        var { style: a } = e,
          r = l(e, V),
          n = (0, t.Z)(
            {
              cursor: "pointer",
              height: "1em",
              width: "1em",
              userSelect: "none",
              display: "flex",
            },
            a
          );
        return (0, s.jsx)(
          "svg",
          (0, t.Z)(
            {
              viewBox: "0 0 24 24",
              fill: "var(--w-rjv-arrow-color, currentColor)",
              style: n,
            },
            r,
            {
              children: (0, s.jsx)("path", {
                d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z",
              }),
            }
          )
        );
      }
      b.displayName = "JVR.TriangleArrow";
      var L = {
          Arrow: {
            as: "span",
            className: "w-rjv-arrow",
            style: { transform: "rotate(0deg)", transition: "all 0.3s" },
            children: (0, s.jsx)(b, {}),
          },
          Colon: {
            as: "span",
            style: {
              color: "var(--w-rjv-colon-color, var(--w-rjv-color))",
              marginLeft: 0,
              marginRight: 2,
            },
            className: "w-rjv-colon",
            children: ":",
          },
          Quote: {
            as: "span",
            style: { color: "var(--w-rjv-quotes-color, #236a7c)" },
            className: "w-rjv-quotes",
            children: '"',
          },
          ValueQuote: {
            as: "span",
            style: { color: "var(--w-rjv-quotes-string-color, #cb4b16)" },
            className: "w-rjv-quotes",
            children: '"',
          },
          BracketsLeft: {
            as: "span",
            style: { color: "var(--w-rjv-brackets-color, #236a7c)" },
            className: "w-rjv-brackets-start",
            children: "[",
          },
          BracketsRight: {
            as: "span",
            style: { color: "var(--w-rjv-brackets-color, #236a7c)" },
            className: "w-rjv-brackets-end",
            children: "]",
          },
          BraceLeft: {
            as: "span",
            style: { color: "var(--w-rjv-curlybraces-color, #236a7c)" },
            className: "w-rjv-curlybraces-start",
            children: "{",
          },
          BraceRight: {
            as: "span",
            style: { color: "var(--w-rjv-curlybraces-color, #236a7c)" },
            className: "w-rjv-curlybraces-end",
            children: "}",
          },
        },
        J = (0, n.createContext)(L),
        k = (e, a) => (0, t.Z)({}, e, a),
        S = () => (0, n.useContext)(J),
        B = (0, n.createContext)(() => {});
      B.displayName = "JVR.DispatchSymbols";
      var E = (e) => {
        var { initial: a, dispatch: r, children: t } = e;
        return (0, s.jsx)(J.Provider, {
          value: a,
          children: (0, s.jsx)(B.Provider, { value: r, children: t }),
        });
      };
      E.displayName = "JVR.Symbols";
      var T = {
          Copied: {
            className: "w-rjv-copied",
            style: {
              height: "1em",
              width: "1em",
              cursor: "pointer",
              verticalAlign: "middle",
              marginLeft: 5,
            },
          },
          CountInfo: {
            as: "span",
            className: "w-rjv-object-size",
            style: {
              color: "var(--w-rjv-info-color, #0000004d)",
              paddingLeft: 8,
              fontStyle: "italic",
            },
          },
          CountInfoExtra: {
            as: "span",
            className: "w-rjv-object-extra",
            style: { paddingLeft: 8 },
          },
          Ellipsis: {
            as: "span",
            style: {
              cursor: "pointer",
              color: "var(--w-rjv-ellipsis-color, #cb4b16)",
              userSelect: "none",
            },
            className: "w-rjv-ellipsis",
            children: "...",
          },
          Row: { as: "div", className: "w-rjv-line" },
          KeyName: { as: "span", className: "w-rjv-object-key" },
        },
        K = (0, n.createContext)(T),
        M = (e, a) => (0, t.Z)({}, e, a),
        F = () => (0, n.useContext)(K),
        I = (0, n.createContext)(() => {});
      I.displayName = "JVR.DispatchSection";
      var A = (e) => {
        var { initial: a, dispatch: r, children: t } = e;
        return (0, s.jsx)(K.Provider, {
          value: a,
          children: (0, s.jsx)(I.Provider, { value: r, children: t }),
        });
      };
      A.displayName = "JVR.Section";
      var D = { objectSortKeys: !1, indentWidth: 15 },
        P = (0, n.createContext)(D);
      P.displayName = "JVR.Context";
      var U = (0, n.createContext)(() => {});
      function Q(e, a) {
        return (0, t.Z)({}, e, a);
      }
      U.displayName = "JVR.DispatchContext";
      var O = () => (0, n.useContext)(P),
        _ = (e) => {
          var { children: a, initialState: r, initialTypes: l } = e,
            [o, v] = (0, n.useReducer)(Q, Object.assign({}, D, r)),
            [c, y] = (0, n.useReducer)(u, i),
            [m, f] = (0, n.useReducer)(j, d),
            [N, Z] = (0, n.useReducer)(w, h),
            [R, g] = (0, n.useReducer)(k, L),
            [V, b] = (0, n.useReducer)(M, T);
          return (
            (0, n.useEffect)(() => v((0, t.Z)({}, r)), [r]),
            (0, s.jsx)(P.Provider, {
              value: o,
              children: (0, s.jsx)(U.Provider, {
                value: v,
                children: (0, s.jsx)(p, {
                  initial: c,
                  dispatch: y,
                  children: (0, s.jsx)(x, {
                    initial: m,
                    dispatch: f,
                    children: (0, s.jsx)(C, {
                      initial: (0, t.Z)({}, N, l),
                      dispatch: Z,
                      children: (0, s.jsx)(E, {
                        initial: R,
                        dispatch: g,
                        children: (0, s.jsx)(A, {
                          initial: V,
                          dispatch: b,
                          children: a,
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            })
          );
        };
      _.displayName = "JVR.Provider";
      var q = ["isNumber"],
        z = ["as", "render"],
        W = ["as", "render"],
        H = ["as", "render"],
        G = ["as", "style", "render"],
        X = ["as", "render"],
        Y = ["as", "render"],
        $ = ["as", "render"],
        ee = ["as", "render"],
        ea = (e) => {
          var { Quote: a = {} } = S(),
            { isNumber: r } = e,
            n = l(e, q);
          if (r) return null;
          var { as: i, render: o } = a,
            u = l(a, z),
            v = (0, t.Z)({}, n, u);
          return (
            (o && "function" == typeof o && o(v)) ||
            (0, s.jsx)(i || "span", (0, t.Z)({}, v))
          );
        };
      ea.displayName = "JVR.Quote";
      var er = (e) => {
        var { ValueQuote: a = {} } = S(),
          r = (0, t.Z)(
            {},
            ((function (e) {
              if (null == e) throw TypeError("Cannot destructure " + e);
            })(e),
            e)
          ),
          { as: n, render: i } = a,
          o = l(a, W),
          u = (0, t.Z)({}, r, o);
        return (
          (i && "function" == typeof i && i(u)) ||
          (0, s.jsx)(n || "span", (0, t.Z)({}, u))
        );
      };
      er.displayName = "JVR.ValueQuote";
      var et = () => {
        var { Colon: e = {} } = S(),
          { as: a, render: r } = e,
          n = l(e, H);
        return (
          (r && "function" == typeof r && r(n)) ||
          (0, s.jsx)(a || "span", (0, t.Z)({}, n))
        );
      };
      et.displayName = "JVR.Colon";
      var el = (e) => {
        var { Arrow: a = {} } = S(),
          r = f(),
          { expandKey: n } = e,
          i = !!r[n],
          { as: o, style: u, render: v } = a,
          c = l(a, G);
        return (
          (v &&
            "function" == typeof v &&
            v(
              (0, t.Z)({}, c, {
                "data-expanded": i,
                style: (0, t.Z)({}, u, e.style),
              })
            )) ||
          (0, s.jsx)(
            o || "span",
            (0, t.Z)({}, c, { style: (0, t.Z)({}, u, e.style) })
          )
        );
      };
      el.displayName = "JVR.Arrow";
      var en = (e) => {
        var { isBrackets: a } = e,
          { BracketsLeft: r = {}, BraceLeft: n = {} } = S();
        if (a) {
          var { as: i, render: o } = r,
            u = l(r, X);
          return (
            (o && "function" == typeof o && o(u)) ||
            (0, s.jsx)(i || "span", (0, t.Z)({}, u))
          );
        }
        var { as: v, render: c } = n,
          y = l(n, Y);
        return (
          (c && "function" == typeof c && c(y)) ||
          (0, s.jsx)(v || "span", (0, t.Z)({}, y))
        );
      };
      en.displayName = "JVR.BracketsOpen";
      var es = (e) => {
        var { isBrackets: a, isVisiable: r } = e;
        if (!r) return null;
        var { BracketsRight: n = {}, BraceRight: i = {} } = S();
        if (a) {
          var { as: o, render: u } = n,
            v = l(n, $);
          return (
            (u && "function" == typeof u && u(v)) ||
            (0, s.jsx)(o || "span", (0, t.Z)({}, v))
          );
        }
        var { as: c, render: y } = i,
          p = l(i, ee);
        return (
          (y && "function" == typeof y && y(p)) ||
          (0, s.jsx)(c || "span", (0, t.Z)({}, p))
        );
      };
      es.displayName = "JVR.BracketsClose";
      var ei = (e) => {
        var a,
          { value: r, expandKey: t, level: l } = e,
          n = f(),
          i = Array.isArray(r),
          { collapsed: o } = O(),
          u = r instanceof Set,
          v =
            null != (a = n[t])
              ? a
              : "boolean" == typeof o
                ? o
                : "number" == typeof o && l > o,
          c = Object.keys(r).length;
        return v || 0 === c
          ? null
          : (0, s.jsx)("div", {
              style: { paddingLeft: 4 },
              children: (0, s.jsx)(es, { isBrackets: i || u, isVisiable: !0 }),
            });
      };
      ei.displayName = "JVR.NestedClose";
      var eo = ["keyName", "value", "expandKey"],
        eu = ["as", "render"],
        ev = (e) => {
          var { keyName: a, value: r, expandKey: i } = e,
            o = l(e, eo),
            { onCopied: u, enableClipboard: c } = O(),
            y = v()[i],
            [p, d] = (0, n.useState)(!1),
            { Copied: m = {} } = F();
          if (!1 === c || !y) return null;
          var j = (e) => {
              e.stopPropagation();
              var a = "";
              (a =
                "number" == typeof r && r === 1 / 0
                  ? "Infinity"
                  : "number" == typeof r && isNaN(r)
                    ? "NaN"
                    : "bigint" == typeof r
                      ? r + "n"
                      : r instanceof Date
                        ? r.toLocaleString()
                        : JSON.stringify(r, null, 2)),
                u && u(a, r),
                d(!0),
                navigator.clipboard
                  .writeText(a)
                  .then(() => {
                    var e = setTimeout(() => {
                      d(!1), clearTimeout(e);
                    }, 3e3);
                  })
                  .catch((e) => {});
            },
            { render: f } = m,
            N = l(m, eu),
            x = (0, t.Z)({}, N, o, {
              fill: p
                ? "var(--w-rjv-copied-success-color, #28a745)"
                : "var(--w-rjv-copied-color, currentColor)",
              onClick: j,
            });
          return (
            (f &&
              "function" == typeof f &&
              f((0, t.Z)({}, x, { "data-copied": p }), {
                value: r,
                keyName: a,
              })) ||
            (p
              ? (0, s.jsx)(
                  "svg",
                  (0, t.Z)({ viewBox: "0 0 32 36" }, x, {
                    children: (0, s.jsx)("path", {
                      d: "M27.5,33 L2.5,33 L2.5,12.5 L27.5,12.5 L27.5,15.2249049 C29.1403264,13.8627542 29.9736597,13.1778155 30,13.1700887 C30,11.9705278 30,10.0804982 30,7.5 C30,6.1 28.9,5 27.5,5 L20,5 C20,2.2 17.8,0 15,0 C12.2,0 10,2.2 10,5 L2.5,5 C1.1,5 0,6.1 0,7.5 L0,33 C0,34.4 1.1,36 2.5,36 L27.5,36 C28.9,36 30,34.4 30,33 L30,26.1114493 L27.5,28.4926435 L27.5,33 Z M7.5,7.5 L10,7.5 C10,7.5 12.5,6.4 12.5,5 C12.5,3.6 13.6,2.5 15,2.5 C16.4,2.5 17.5,3.6 17.5,5 C17.5,6.4 18.8,7.5 20,7.5 L22.5,7.5 C22.5,7.5 25,8.6 25,10 L5,10 C5,8.5 6.1,7.5 7.5,7.5 Z M5,27.5 L10,27.5 L10,25 L5,25 L5,27.5 Z M28.5589286,16 L32,19.6 L21.0160714,30.5382252 L13.5303571,24.2571429 L17.1303571,20.6571429 L21.0160714,24.5428571 L28.5589286,16 Z M17.5,15 L5,15 L5,17.5 L17.5,17.5 L17.5,15 Z M10,20 L5,20 L5,22.5 L10,22.5 L10,20 Z",
                    }),
                  })
                )
              : (0, s.jsx)(
                  "svg",
                  (0, t.Z)({ viewBox: "0 0 32 36" }, x, {
                    children: (0, s.jsx)("path", {
                      d: "M27.5,33 L2.5,33 L2.5,12.5 L27.5,12.5 L27.5,20 L30,20 L30,7.5 C30,6.1 28.9,5 27.5,5 L20,5 C20,2.2 17.8,0 15,0 C12.2,0 10,2.2 10,5 L2.5,5 C1.1,5 0,6.1 0,7.5 L0,33 C0,34.4 1.1,36 2.5,36 L27.5,36 C28.9,36 30,34.4 30,33 L30,29 L27.5,29 L27.5,33 Z M7.5,7.5 L10,7.5 C10,7.5 12.5,6.4 12.5,5 C12.5,3.6 13.6,2.5 15,2.5 C16.4,2.5 17.5,3.6 17.5,5 C17.5,6.4 18.8,7.5 20,7.5 L22.5,7.5 C22.5,7.5 25,8.6 25,10 L5,10 C5,8.5 6.1,7.5 7.5,7.5 Z M5,27.5 L10,27.5 L10,25 L5,25 L5,27.5 Z M22.5,21.5 L22.5,16.5 L12.5,24 L22.5,31.5 L22.5,26.5 L32,26.5 L32,21.5 L22.5,21.5 Z M17.5,15 L5,15 L5,17.5 L17.5,17.5 L17.5,15 Z M10,20 L5,20 L5,22.5 L10,22.5 L10,20 Z",
                    }),
                  })
                ))
          );
        };
      ev.displayName = "JVR.Copied";
      var ec = ["as", "render"],
        ey = ["as", "render"],
        ep = ["as", "render"],
        ed = ["as", "render"],
        em = ["as", "render"],
        ej = ["as", "render"],
        ef = ["as", "render"],
        eN = ["as", "render"],
        ex = ["as", "render"],
        eh = ["as", "render"],
        eZ = ["as", "render"],
        ew = ["as", "render"],
        eR = ["as", "render"],
        eg = (e) => {
          var { value: a, keyName: r } = e,
            { Set: n = {}, displayDataTypes: i } = R();
          if (!(a instanceof Set) || !i) return null;
          var { as: o, render: u } = n,
            v = l(n, ec);
          return (
            (u &&
              "function" == typeof u &&
              u(v, { type: "type", value: a, keyName: r })) ||
            (0, s.jsx)(o || "span", (0, t.Z)({}, v))
          );
        };
      eg.displayName = "JVR.SetComp";
      var eC = (e) => {
        var { value: a, keyName: r } = e,
          { Map: n = {}, displayDataTypes: i } = R();
        if (!(a instanceof Map) || !i) return null;
        var { as: o, render: u } = n,
          v = l(n, ey);
        return (
          (u &&
            "function" == typeof u &&
            u(v, { type: "type", value: a, keyName: r })) ||
          (0, s.jsx)(o || "span", (0, t.Z)({}, v))
        );
      };
      eC.displayName = "JVR.MapComp";
      var eV = { opacity: 0.75, paddingRight: 4 },
        eb = (e) => {
          var { children: a = "", expandKey: r, keyName: i } = e,
            { Str: o = {}, displayDataTypes: u } = R(),
            { shortenTextAfterLength: v = 30 } = O(),
            { as: c, render: y } = o,
            p = l(o, ep),
            [d, m] = (0, n.useState)(v && a.length >= v);
          (0, n.useEffect)(() => m(v && a.length >= v), [v]);
          var j = c || "span",
            f = (0, t.Z)({}, eV, o.style || {});
          v > 0 &&
            ((p.style = (0, t.Z)({}, p.style, {
              cursor: a.length <= v ? "initial" : "pointer",
            })),
            a.length > v &&
              (p.onClick = () => {
                m(!d);
              }));
          var N = d ? a.slice(0, v) + "..." : a,
            x = y && "function" == typeof y,
            h =
              x &&
              y((0, t.Z)({}, p, { style: f }), {
                type: "type",
                value: a,
                keyName: i,
              }),
            Z =
              x &&
              y((0, t.Z)({}, p, { children: N, className: "w-rjv-value" }), {
                type: "value",
                value: a,
                keyName: i,
              });
          return (0, s.jsxs)(n.Fragment, {
            children: [
              u && (h || (0, s.jsx)(j, (0, t.Z)({}, p, { style: f }))),
              Z ||
                (0, s.jsxs)(n.Fragment, {
                  children: [
                    (0, s.jsx)(er, {}),
                    (0, s.jsx)(
                      j,
                      (0, t.Z)({}, p, { className: "w-rjv-value", children: N })
                    ),
                    (0, s.jsx)(er, {}),
                  ],
                }),
              (0, s.jsx)(ev, { keyName: i, value: a, expandKey: r }),
            ],
          });
        };
      eb.displayName = "JVR.TypeString";
      var eL = (e) => {
        var { children: a, expandKey: r, keyName: i } = e,
          { True: o = {}, displayDataTypes: u } = R(),
          { as: v, render: c } = o,
          y = l(o, ed),
          p = v || "span",
          d = (0, t.Z)({}, eV, o.style || {}),
          m = c && "function" == typeof c,
          j =
            m &&
            c((0, t.Z)({}, y, { style: d }), {
              type: "type",
              value: a,
              keyName: i,
            }),
          f =
            m &&
            c((0, t.Z)({}, y, { children: a, className: "w-rjv-value" }), {
              type: "value",
              value: a,
              keyName: i,
            });
        return (0, s.jsxs)(n.Fragment, {
          children: [
            u && (j || (0, s.jsx)(p, (0, t.Z)({}, y, { style: d }))),
            f ||
              (0, s.jsx)(
                p,
                (0, t.Z)({}, y, {
                  className: "w-rjv-value",
                  children: null == a ? void 0 : a.toString(),
                })
              ),
            (0, s.jsx)(ev, { keyName: i, value: a, expandKey: r }),
          ],
        });
      };
      eL.displayName = "JVR.TypeTrue";
      var eJ = (e) => {
        var { children: a, expandKey: r, keyName: i } = e,
          { False: o = {}, displayDataTypes: u } = R(),
          { as: v, render: c } = o,
          y = l(o, em),
          p = v || "span",
          d = (0, t.Z)({}, eV, o.style || {}),
          m = c && "function" == typeof c,
          j =
            m &&
            c((0, t.Z)({}, y, { style: d }), {
              type: "type",
              value: a,
              keyName: i,
            }),
          f =
            m &&
            c((0, t.Z)({}, y, { children: a, className: "w-rjv-value" }), {
              type: "value",
              value: a,
              keyName: i,
            });
        return (0, s.jsxs)(n.Fragment, {
          children: [
            u && (j || (0, s.jsx)(p, (0, t.Z)({}, y, { style: d }))),
            f ||
              (0, s.jsx)(
                p,
                (0, t.Z)({}, y, {
                  className: "w-rjv-value",
                  children: null == a ? void 0 : a.toString(),
                })
              ),
            (0, s.jsx)(ev, { keyName: i, value: a, expandKey: r }),
          ],
        });
      };
      eJ.displayName = "JVR.TypeFalse";
      var ek = (e) => {
        var { children: a, expandKey: r, keyName: i } = e,
          { Float: o = {}, displayDataTypes: u } = R(),
          { as: v, render: c } = o,
          y = l(o, ej),
          p = v || "span",
          d = (0, t.Z)({}, eV, o.style || {}),
          m = c && "function" == typeof c,
          j =
            m &&
            c((0, t.Z)({}, y, { style: d }), {
              type: "type",
              value: a,
              keyName: i,
            }),
          f =
            m &&
            c((0, t.Z)({}, y, { children: a, className: "w-rjv-value" }), {
              type: "value",
              value: a,
              keyName: i,
            });
        return (0, s.jsxs)(n.Fragment, {
          children: [
            u && (j || (0, s.jsx)(p, (0, t.Z)({}, y, { style: d }))),
            f ||
              (0, s.jsx)(
                p,
                (0, t.Z)({}, y, {
                  className: "w-rjv-value",
                  children: null == a ? void 0 : a.toString(),
                })
              ),
            (0, s.jsx)(ev, { keyName: i, value: a, expandKey: r }),
          ],
        });
      };
      ek.displayName = "JVR.TypeFloat";
      var eS = (e) => {
        var { children: a, expandKey: r, keyName: i } = e,
          { Int: o = {}, displayDataTypes: u } = R(),
          { as: v, render: c } = o,
          y = l(o, ef),
          p = v || "span",
          d = (0, t.Z)({}, eV, o.style || {}),
          m = c && "function" == typeof c,
          j =
            m &&
            c((0, t.Z)({}, y, { style: d }), {
              type: "type",
              value: a,
              keyName: i,
            }),
          f =
            m &&
            c((0, t.Z)({}, y, { children: a, className: "w-rjv-value" }), {
              type: "value",
              value: a,
              keyName: i,
            });
        return (0, s.jsxs)(n.Fragment, {
          children: [
            u && (j || (0, s.jsx)(p, (0, t.Z)({}, y, { style: d }))),
            f ||
              (0, s.jsx)(
                p,
                (0, t.Z)({}, y, {
                  className: "w-rjv-value",
                  children: null == a ? void 0 : a.toString(),
                })
              ),
            (0, s.jsx)(ev, { keyName: i, value: a, expandKey: r }),
          ],
        });
      };
      eS.displayName = "JVR.TypeInt";
      var eB = (e) => {
        var { children: a, expandKey: r, keyName: i } = e,
          { Bigint: o = {}, displayDataTypes: u } = R(),
          { as: v, render: c } = o,
          y = l(o, eN),
          p = v || "span",
          d = (0, t.Z)({}, eV, o.style || {}),
          m = c && "function" == typeof c,
          j =
            m &&
            c((0, t.Z)({}, y, { style: d }), {
              type: "type",
              value: a,
              keyName: i,
            }),
          f =
            m &&
            c((0, t.Z)({}, y, { children: a, className: "w-rjv-value" }), {
              type: "value",
              value: a,
              keyName: i,
            });
        return (0, s.jsxs)(n.Fragment, {
          children: [
            u && (j || (0, s.jsx)(p, (0, t.Z)({}, y, { style: d }))),
            f ||
              (0, s.jsx)(
                p,
                (0, t.Z)({}, y, {
                  className: "w-rjv-value",
                  children: (null == a ? void 0 : a.toString()) + "n",
                })
              ),
            (0, s.jsx)(ev, { keyName: i, value: a, expandKey: r }),
          ],
        });
      };
      eB.displayName = "JVR.TypeFloat";
      var eE = (e) => {
        var { children: a, expandKey: r, keyName: i } = e,
          { Url: o = {}, displayDataTypes: u } = R(),
          { as: v, render: c } = o,
          y = l(o, ex),
          p = (0, t.Z)({}, eV, o.style),
          d = c && "function" == typeof c,
          m =
            d &&
            c((0, t.Z)({}, y, { style: p }), {
              type: "type",
              value: a,
              keyName: i,
            }),
          j =
            d &&
            c(
              (0, t.Z)({}, y, {
                children: null == a ? void 0 : a.href,
                className: "w-rjv-value",
              }),
              { type: "value", value: a, keyName: i }
            );
        return (0, s.jsxs)(n.Fragment, {
          children: [
            u && (m || (0, s.jsx)(v || "span", (0, t.Z)({}, y, { style: p }))),
            j ||
              (0, s.jsxs)(
                "a",
                (0, t.Z)(
                  { href: null == a ? void 0 : a.href, target: "_blank" },
                  y,
                  {
                    className: "w-rjv-value",
                    children: [
                      (0, s.jsx)(er, {}),
                      null == a ? void 0 : a.href,
                      (0, s.jsx)(er, {}),
                    ],
                  }
                )
              ),
            (0, s.jsx)(ev, { keyName: i, value: a, expandKey: r }),
          ],
        });
      };
      eE.displayName = "JVR.TypeUrl";
      var eT = (e) => {
        var { children: a, expandKey: r, keyName: i } = e,
          { Date: o = {}, displayDataTypes: u } = R(),
          { as: v, render: c } = o,
          y = l(o, eh),
          p = v || "span",
          d = (0, t.Z)({}, eV, o.style || {}),
          m = c && "function" == typeof c,
          j =
            m &&
            c((0, t.Z)({}, y, { style: d }), {
              type: "type",
              value: a,
              keyName: i,
            }),
          f = a instanceof Date ? a.toLocaleString() : a,
          N =
            m &&
            c((0, t.Z)({}, y, { children: f, className: "w-rjv-value" }), {
              type: "value",
              value: a,
              keyName: i,
            });
        return (0, s.jsxs)(n.Fragment, {
          children: [
            u && (j || (0, s.jsx)(p, (0, t.Z)({}, y, { style: d }))),
            N ||
              (0, s.jsx)(
                p,
                (0, t.Z)({}, y, { className: "w-rjv-value", children: f })
              ),
            (0, s.jsx)(ev, { keyName: i, value: a, expandKey: r }),
          ],
        });
      };
      eT.displayName = "JVR.TypeDate";
      var eK = (e) => {
        var { children: a, expandKey: r, keyName: i } = e,
          { Undefined: o = {}, displayDataTypes: u } = R(),
          { as: v, render: c } = o,
          y = l(o, eZ),
          p = (0, t.Z)({}, eV, o.style || {}),
          d = c && "function" == typeof c,
          m =
            d &&
            c((0, t.Z)({}, y, { style: p }), {
              type: "type",
              value: a,
              keyName: i,
            }),
          j =
            d &&
            c((0, t.Z)({}, y, { children: a, className: "w-rjv-value" }), {
              type: "value",
              value: a,
              keyName: i,
            });
        return (0, s.jsxs)(n.Fragment, {
          children: [
            u && (m || (0, s.jsx)(v || "span", (0, t.Z)({}, y, { style: p }))),
            j,
            (0, s.jsx)(ev, { keyName: i, value: a, expandKey: r }),
          ],
        });
      };
      eK.displayName = "JVR.TypeUndefined";
      var eM = (e) => {
        var { children: a, expandKey: r, keyName: i } = e,
          { Null: o = {}, displayDataTypes: u } = R(),
          { as: v, render: c } = o,
          y = l(o, ew),
          p = (0, t.Z)({}, eV, o.style || {}),
          d = c && "function" == typeof c,
          m =
            d &&
            c((0, t.Z)({}, y, { style: p }), {
              type: "type",
              value: a,
              keyName: i,
            }),
          j =
            d &&
            c((0, t.Z)({}, y, { children: a, className: "w-rjv-value" }), {
              type: "value",
              value: a,
              keyName: i,
            });
        return (0, s.jsxs)(n.Fragment, {
          children: [
            u && (m || (0, s.jsx)(v || "span", (0, t.Z)({}, y, { style: p }))),
            j,
            (0, s.jsx)(ev, { keyName: i, value: a, expandKey: r }),
          ],
        });
      };
      eM.displayName = "JVR.TypeNull";
      var eF = (e) => {
        var { children: a, expandKey: r, keyName: i } = e,
          { Nan: o = {}, displayDataTypes: u } = R(),
          { as: v, render: c } = o,
          y = l(o, eR),
          p = (0, t.Z)({}, eV, o.style || {}),
          d = c && "function" == typeof c,
          m =
            d &&
            c((0, t.Z)({}, y, { style: p }), {
              type: "type",
              value: a,
              keyName: i,
            }),
          j =
            d &&
            c(
              (0, t.Z)({}, y, {
                children: null == a ? void 0 : a.toString(),
                className: "w-rjv-value",
              }),
              { type: "value", value: a, keyName: i }
            );
        return (0, s.jsxs)(n.Fragment, {
          children: [
            u && (m || (0, s.jsx)(v || "span", (0, t.Z)({}, y, { style: p }))),
            j,
            (0, s.jsx)(ev, { keyName: i, value: a, expandKey: r }),
          ],
        });
      };
      eF.displayName = "JVR.TypeNan";
      var eI = (e) => (Number(e) === e && e % 1 != 0) || isNaN(e),
        eA = (e) => {
          var { value: a, keyName: r, expandKey: l } = e,
            n = { keyName: r, expandKey: l };
          return a instanceof URL
            ? (0, s.jsx)(eE, (0, t.Z)({}, n, { children: a }))
            : "string" == typeof a
              ? (0, s.jsx)(eb, (0, t.Z)({}, n, { children: a }))
              : !0 === a
                ? (0, s.jsx)(eL, (0, t.Z)({}, n, { children: a }))
                : !1 === a
                  ? (0, s.jsx)(eJ, (0, t.Z)({}, n, { children: a }))
                  : null === a
                    ? (0, s.jsx)(eM, (0, t.Z)({}, n, { children: a }))
                    : void 0 === a
                      ? (0, s.jsx)(eK, (0, t.Z)({}, n, { children: a }))
                      : a instanceof Date
                        ? (0, s.jsx)(eT, (0, t.Z)({}, n, { children: a }))
                        : "number" == typeof a && isNaN(a)
                          ? (0, s.jsx)(eF, (0, t.Z)({}, n, { children: a }))
                          : "number" == typeof a && eI(a)
                            ? (0, s.jsx)(ek, (0, t.Z)({}, n, { children: a }))
                            : "bigint" == typeof a
                              ? (0, s.jsx)(eB, (0, t.Z)({}, n, { children: a }))
                              : "number" == typeof a
                                ? (0, s.jsx)(
                                    eS,
                                    (0, t.Z)({}, n, { children: a })
                                  )
                                : null;
        };
      function eD(e, a, r) {
        var l = (0, n.useContext)(B),
          s = [e.className, a.className].filter(Boolean).join(" "),
          i = (0, t.Z)({}, e, a, {
            className: s,
            style: (0, t.Z)({}, e.style, a.style),
            children: a.children || e.children,
          });
        (0, n.useEffect)(() => l({ [r]: i }), [a]);
      }
      function eP(e, a, r) {
        var l = (0, n.useContext)(g),
          s = [e.className, a.className].filter(Boolean).join(" "),
          i = (0, t.Z)({}, e, a, {
            className: s,
            style: (0, t.Z)({}, e.style, a.style),
            children: a.children || e.children,
          });
        (0, n.useEffect)(() => l({ [r]: i }), [a]);
      }
      function eU(e, a, r) {
        var l = (0, n.useContext)(I),
          s = [e.className, a.className].filter(Boolean).join(" "),
          i = (0, t.Z)({}, e, a, {
            className: s,
            style: (0, t.Z)({}, e.style, a.style),
            children: a.children || e.children,
          });
        (0, n.useEffect)(() => l({ [r]: i }), [a]);
      }
      eA.displayName = "JVR.Value";
      var eQ = ["as", "render"],
        eO = (e) => {
          var { KeyName: a = {} } = F();
          return eU(a, e, "KeyName"), null;
        };
      eO.displayName = "JVR.KeyName";
      var e_ = (e) => {
        var { children: a, value: r, parentValue: n, keyName: i } = e,
          { KeyName: o = {} } = F(),
          { as: u, render: v } = o,
          c = l(o, eQ);
        return (
          (c.style = (0, t.Z)({}, c.style, {
            color:
              "number" == typeof a
                ? "var(--w-rjv-key-number, #268bd2)"
                : "var(--w-rjv-key-string, #002b36)",
          })),
          (v &&
            "function" == typeof v &&
            v((0, t.Z)({}, c, { children: a }), {
              value: r,
              parentValue: n,
              keyName: i,
            })) ||
            (0, s.jsx)(u || "span", (0, t.Z)({}, c, { children: a }))
        );
      };
      e_.displayName = "JVR.KeyNameComp";
      var eq = ["children", "value", "keyName", "parentValue"],
        ez = ["as", "render", "children"],
        eW = (e) => {
          var { Row: a = {} } = F();
          return eU(a, e, "Row"), null;
        };
      eW.displayName = "JVR.Row";
      var eH = (e) => {
        var { children: a, value: r, keyName: n = "", parentValue: i } = e,
          o = l(e, eq),
          { Row: u = {} } = F(),
          { as: v, render: c } = u,
          y = l(u, ez);
        return (
          (c &&
            "function" == typeof c &&
            c((0, t.Z)({}, o, y, { children: a }), {
              value: r,
              keyName: n,
              parentValue: i,
            })) ||
          (0, s.jsx)(v || "div", (0, t.Z)({}, o, y, { children: a }))
        );
      };
      eH.displayName = "JVR.RowComp";
      var eG = (e) => {
        var a,
          { value: r, expandKey: t = "", level: l } = e,
          n = f(),
          { objectSortKeys: i, indentWidth: o, collapsed: u } = O(),
          v = Array.isArray(r);
        if (
          null != (a = n[t])
            ? a
            : "boolean" == typeof u
              ? u
              : "number" == typeof u && l > u
        )
          return null;
        var c = v
          ? Object.entries(r).map((e) => [Number(e[0]), e[1]])
          : Object.entries(r);
        return (
          i &&
            (c =
              !0 === i
                ? c.sort((e, a) => {
                    var [r] = e,
                      [t] = a;
                    return "string" == typeof r && "string" == typeof t
                      ? r.localeCompare(t)
                      : 0;
                  })
                : c.sort((e, a) => {
                    var [r, t] = e,
                      [l, n] = a;
                    return "string" == typeof r && "string" == typeof l
                      ? i(r, l, t, n)
                      : 0;
                  })),
          (0, s.jsx)("div", {
            className: "w-rjv-wrap",
            style: {
              borderLeft:
                "var(--w-rjv-border-left-width, 1px) var(--w-rjv-line-style, solid) var(--w-rjv-line-color, #ebebeb)",
              paddingLeft: o,
              marginLeft: 6,
            },
            children: c.map((e, a) => {
              var [t, n] = e;
              return (0, s.jsx)(
                eY,
                { parentValue: r, keyName: t, value: n, level: l },
                a
              );
            }),
          })
        );
      };
      eG.displayName = "JVR.KeyValues";
      var eX = (e) => {
        var { keyName: a, parentValue: r, value: t } = e,
          { highlightUpdates: l } = O(),
          i = "number" == typeof a,
          o = (0, n.useRef)(null);
        return (
          !(function (e) {
            var a,
              { value: r, highlightUpdates: t, highlightContainer: l } = e,
              s =
                ((a = (0, n.useRef)()),
                (0, n.useEffect)(() => {
                  a.current = r;
                }),
                a.current),
              i = (0, n.useMemo)(
                () =>
                  !!t &&
                  void 0 !== s &&
                  (typeof r != typeof s ||
                    ("number" == typeof r
                      ? !(isNaN(r) && isNaN(s)) && r !== s
                      : Array.isArray(r) !== Array.isArray(s) ||
                        ("object" != typeof r &&
                          "function" != typeof r &&
                          (r !== s || void 0)))),
                [t, r]
              );
            (0, n.useEffect)(() => {
              l &&
                l.current &&
                i &&
                "animate" in l.current &&
                l.current.animate(
                  [
                    { backgroundColor: "var(--w-rjv-update-color, #ebcb8b)" },
                    { backgroundColor: "" },
                  ],
                  { duration: 1e3, easing: "ease-in" }
                );
            }, [i, r, l]);
          })({ value: t, highlightUpdates: l, highlightContainer: o }),
          (0, s.jsxs)(n.Fragment, {
            children: [
              (0, s.jsxs)("span", {
                ref: o,
                children: [
                  (0, s.jsx)(ea, { isNumber: i, "data-placement": "left" }),
                  (0, s.jsx)(e_, {
                    keyName: a,
                    value: t,
                    parentValue: r,
                    children: a,
                  }),
                  (0, s.jsx)(ea, { isNumber: i, "data-placement": "right" }),
                ],
              }),
              (0, s.jsx)(et, {}),
            ],
          })
        );
      };
      eX.displayName = "JVR.KayName";
      var eY = (e) => {
        var { keyName: a, value: r, parentValue: l, level: i = 0 } = e,
          o = y(),
          u = (0, n.useId)(),
          v = Array.isArray(r),
          c = r instanceof Set,
          p = r instanceof Map,
          d = r instanceof URL;
        if (
          (r &&
            "object" == typeof r &&
            !v &&
            !c &&
            !p &&
            !(r instanceof Date) &&
            !d) ||
          v ||
          c ||
          p
        ) {
          var m = c ? Array.from(r) : p ? Object.fromEntries(r) : r;
          return (0, s.jsx)(ar, {
            keyName: a,
            value: m,
            parentValue: l,
            initialValue: r,
            level: i + 1,
          });
        }
        return (0, s.jsxs)(
          eH,
          (0, t.Z)(
            { className: "w-rjv-line", value: r, keyName: a, parentValue: l },
            {
              onMouseEnter: () => o({ [u]: !0 }),
              onMouseLeave: () => o({ [u]: !1 }),
            },
            {
              children: [
                (0, s.jsx)(eX, { keyName: a, value: r, parentValue: l }),
                (0, s.jsx)(eA, { keyName: a, value: r, expandKey: u }),
              ],
            }
          )
        );
      };
      eY.displayName = "JVR.KeyValuesItem";
      var e$ = ["value", "keyName"],
        e0 = ["as", "render"],
        e5 = (e) => {
          var { CountInfoExtra: a = {} } = F();
          return eU(a, e, "CountInfoExtra"), null;
        };
      e5.displayName = "JVR.CountInfoExtra";
      var e2 = (e) => {
        var { value: a = {}, keyName: r } = e,
          n = l(e, e$),
          { CountInfoExtra: i = {} } = F(),
          { as: o, render: u } = i,
          v = l(i, e0);
        if (!u && !v.children) return null;
        var c = (0, t.Z)({}, v, n);
        return (
          (u && "function" == typeof u && u(c, { value: a, keyName: r })) ||
          (0, s.jsx)(o || "span", (0, t.Z)({}, c))
        );
      };
      e2.displayName = "JVR.CountInfoExtraComps";
      var e1 = ["value", "keyName"],
        e3 = ["as", "render"],
        e7 = (e) => {
          var { CountInfo: a = {} } = F();
          return eU(a, e, "CountInfo"), null;
        };
      e7.displayName = "JVR.CountInfo";
      var e6 = (e) => {
        var { value: a = {}, keyName: r } = e,
          n = l(e, e1),
          { displayObjectSize: i } = O(),
          { CountInfo: o = {} } = F();
        if (!i) return null;
        var { as: u, render: v } = o,
          c = l(o, e3);
        c.style = (0, t.Z)({}, c.style, e.style);
        var y = Object.keys(a).length;
        c.children || (c.children = y + " items");
        var p = (0, t.Z)({}, c, n);
        return (
          (v &&
            "function" == typeof v &&
            v((0, t.Z)({}, p, { "data-length": y }), {
              value: a,
              keyName: r,
            })) ||
          (0, s.jsx)(u || "span", (0, t.Z)({}, p))
        );
      };
      e6.displayName = "JVR.CountInfoComp";
      var e8 = ["as", "render"],
        e4 = (e) => {
          var { Ellipsis: a = {} } = F();
          return eU(a, e, "Ellipsis"), null;
        };
      e4.displayName = "JVR.Ellipsis";
      var e9 = (e) => {
        var { isExpanded: a, value: r, keyName: n } = e,
          { Ellipsis: i = {} } = F(),
          { as: o, render: u } = i,
          v = l(i, e8);
        return (
          (u &&
            "function" == typeof u &&
            u((0, t.Z)({}, v, { "data-expanded": a }), {
              value: r,
              keyName: n,
            })) ||
          (a ? (0, s.jsx)(o || "span", (0, t.Z)({}, v)) : null)
        );
      };
      e9.displayName = "JVR.EllipsisComp";
      var ae = (e) => {
        var a,
          { keyName: r, expandKey: l, initialValue: i, value: o, level: u } = e,
          v = f(),
          c = (0, n.useContext)(N),
          { onExpand: y, collapsed: p } = O(),
          d = Array.isArray(o),
          m = o instanceof Set,
          j =
            null != (a = v[l])
              ? a
              : "boolean" == typeof p
                ? p
                : "number" == typeof p && u > p,
          x = () => {
            var e = { expand: !j, value: o, keyid: l, keyName: r };
            y && y(e), c({ [l]: e.expand });
          },
          h = 0 !== Object.keys(o).length && (d || m || "object" == typeof o),
          Z = { style: { display: "inline-flex", alignItems: "center" } };
        return (
          h && (Z.onClick = x),
          (0, s.jsxs)(
            "span",
            (0, t.Z)({}, Z, {
              children: [
                h &&
                  (0, s.jsx)(el, {
                    style: {
                      transform: "rotate(" + (j ? "-90" : "0") + "deg)",
                      transition: "all 0.3s",
                    },
                    expandKey: l,
                  }),
                (r || "number" == typeof r) && (0, s.jsx)(eX, { keyName: r }),
                (0, s.jsx)(eg, { value: i, keyName: r }),
                (0, s.jsx)(eC, { value: i, keyName: r }),
                (0, s.jsx)(en, { isBrackets: d || m }),
                (0, s.jsx)(e9, { keyName: r, value: o, isExpanded: j }),
                (0, s.jsx)(es, { isVisiable: j || !h, isBrackets: d || m }),
                (0, s.jsx)(e6, { value: o, keyName: r }),
                (0, s.jsx)(e2, { value: o, keyName: r }),
                (0, s.jsx)(ev, { keyName: r, value: o, expandKey: l }),
              ],
            })
          )
        );
      };
      ae.displayName = "JVR.NestedOpen";
      var aa = [
          "className",
          "children",
          "parentValue",
          "keyid",
          "level",
          "value",
          "initialValue",
          "keyName",
        ],
        ar = (0, n.forwardRef)((e, a) => {
          var {
              className: r = "",
              level: i = 1,
              value: o,
              initialValue: u,
              keyName: v,
            } = e,
            c = l(e, aa),
            p = y(),
            d = (0, n.useId)(),
            m = [r, "w-rjv-inner"].filter(Boolean).join(" ");
          return (0, s.jsxs)(
            "div",
            (0, t.Z)(
              { className: m, ref: a },
              c,
              {
                onMouseEnter: () => p({ [d]: !0 }),
                onMouseLeave: () => p({ [d]: !1 }),
              },
              {
                children: [
                  (0, s.jsx)(ae, {
                    expandKey: d,
                    value: o,
                    level: i,
                    keyName: v,
                    initialValue: u,
                  }),
                  (0, s.jsx)(eG, { expandKey: d, value: o, level: i }),
                  (0, s.jsx)(ei, { expandKey: d, value: o, level: i }),
                ],
              }
            )
          );
        });
      ar.displayName = "JVR.Container";
      var at = (e) => {
        var { BraceLeft: a = {} } = S();
        return eD(a, e, "BraceLeft"), null;
      };
      at.displayName = "JVR.BraceLeft";
      var al = (e) => {
        var { BraceRight: a = {} } = S();
        return eD(a, e, "BraceRight"), null;
      };
      al.displayName = "JVR.BraceRight";
      var an = (e) => {
        var { BracketsLeft: a = {} } = S();
        return eD(a, e, "BracketsLeft"), null;
      };
      an.displayName = "JVR.BracketsLeft";
      var as = (e) => {
        var { BracketsRight: a = {} } = S();
        return eD(a, e, "BracketsRight"), null;
      };
      as.displayName = "JVR.BracketsRight";
      var ai = (e) => {
        var { Arrow: a = {} } = S();
        return eD(a, e, "Arrow"), null;
      };
      ai.displayName = "JVR.Arrow";
      var ao = (e) => {
        var { Colon: a = {} } = S();
        return eD(a, e, "Colon"), null;
      };
      ao.displayName = "JVR.Colon";
      var au = (e) => {
        var { Quote: a = {} } = S();
        return eD(a, e, "Quote"), null;
      };
      au.displayName = "JVR.Quote";
      var av = (e) => {
        var { ValueQuote: a = {} } = S();
        return eD(a, e, "ValueQuote"), null;
      };
      av.displayName = "JVR.ValueQuote";
      var ac = (e) => {
        var { Bigint: a = {} } = R();
        return eP(a, e, "Bigint"), null;
      };
      ac.displayName = "JVR.Bigint";
      var ay = (e) => {
        var { Date: a = {} } = R();
        return eP(a, e, "Date"), null;
      };
      ay.displayName = "JVR.Date";
      var ap = (e) => {
        var { False: a = {} } = R();
        return eP(a, e, "False"), null;
      };
      ap.displayName = "JVR.False";
      var ad = (e) => {
        var { Float: a = {} } = R();
        return eP(a, e, "Float"), null;
      };
      ad.displayName = "JVR.Float";
      var am = (e) => {
        var { Int: a = {} } = R();
        return eP(a, e, "Int"), null;
      };
      am.displayName = "JVR.Int";
      var aj = (e) => {
        var { Map: a = {} } = R();
        return eP(a, e, "Map"), null;
      };
      aj.displayName = "JVR.Map";
      var af = (e) => {
        var { Nan: a = {} } = R();
        return eP(a, e, "Nan"), null;
      };
      af.displayName = "JVR.Nan";
      var aN = (e) => {
        var { Null: a = {} } = R();
        return eP(a, e, "Null"), null;
      };
      aN.displayName = "JVR.Null";
      var ax = (e) => {
        var { Set: a = {} } = R();
        return eP(a, e, "Set"), null;
      };
      ax.displayName = "JVR.Set";
      var ah = (e) => {
        var { Str: a = {} } = R();
        return eP(a, e, "Str"), null;
      };
      ah.displayName = "JVR.StringText";
      var aZ = (e) => {
        var { True: a = {} } = R();
        return eP(a, e, "True"), null;
      };
      aZ.displayName = "JVR.True";
      var aw = (e) => {
        var { Undefined: a = {} } = R();
        return eP(a, e, "Undefined"), null;
      };
      aw.displayName = "JVR.Undefined";
      var aR = (e) => {
        var { Url: a = {} } = R();
        return eP(a, e, "Url"), null;
      };
      aR.displayName = "JVR.Url";
      var ag = (e) => {
        var { Copied: a = {} } = F();
        return eU(a, e, "Copied"), null;
      };
      ag.displayName = "JVR.Copied";
      var aC = [
          "className",
          "style",
          "value",
          "children",
          "collapsed",
          "indentWidth",
          "displayObjectSize",
          "shortenTextAfterLength",
          "highlightUpdates",
          "enableClipboard",
          "displayDataTypes",
          "objectSortKeys",
          "onExpand",
        ],
        aV = (0, n.forwardRef)((e, a) => {
          var {
              className: r = "",
              style: n,
              value: i,
              children: o,
              collapsed: u,
              indentWidth: v = 15,
              displayObjectSize: c = !0,
              shortenTextAfterLength: y = 30,
              highlightUpdates: p = !0,
              enableClipboard: d = !0,
              displayDataTypes: m = !0,
              objectSortKeys: j = !1,
              onExpand: f,
            } = e,
            N = l(e, aC),
            x = (0, t.Z)(
              {
                lineHeight: 1.4,
                fontFamily: "var(--w-rjv-font-family, Menlo, monospace)",
                color: "var(--w-rjv-color, #002b36)",
                backgroundColor: "var(--w-rjv-background-color, #00000000)",
                fontSize: 13,
              },
              n
            ),
            h = ["w-json-view-container", "w-rjv", r].filter(Boolean).join(" ");
          return (0, s.jsxs)(_, {
            initialState: {
              value: i,
              objectSortKeys: j,
              indentWidth: v,
              displayObjectSize: c,
              collapsed: u,
              enableClipboard: d,
              shortenTextAfterLength: y,
              highlightUpdates: p,
              onExpand: f,
            },
            initialTypes: { displayDataTypes: m },
            children: [
              (0, s.jsx)(
                ar,
                (0, t.Z)({ value: i }, N, { ref: a, className: h, style: x })
              ),
              o,
            ],
          });
        });
      (aV.Bigint = ac),
        (aV.Date = ay),
        (aV.False = ap),
        (aV.Float = ad),
        (aV.Int = am),
        (aV.Map = aj),
        (aV.Nan = af),
        (aV.Null = aN),
        (aV.Set = ax),
        (aV.String = ah),
        (aV.True = aZ),
        (aV.Undefined = aw),
        (aV.Url = aR),
        (aV.ValueQuote = av),
        (aV.Arrow = ai),
        (aV.Colon = ao),
        (aV.Quote = au),
        (aV.Ellipsis = e4),
        (aV.BraceLeft = at),
        (aV.BraceRight = al),
        (aV.BracketsLeft = an),
        (aV.BracketsRight = as),
        (aV.Copied = ag),
        (aV.CountInfo = e7),
        (aV.CountInfoExtra = e5),
        (aV.KeyName = eO),
        (aV.Row = eW),
        (aV.displayName = "JVR.JsonView");
      var ab = aV;
    },
  },
]);
//# sourceMappingURL=398.1ef137792edb771e.js.map
