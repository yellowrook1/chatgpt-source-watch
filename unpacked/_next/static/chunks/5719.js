"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5719],
  {
    25719: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return M;
          },
        });
      var a,
        n,
        u,
        o,
        i,
        l = r(70079),
        s = r(78228);
      let c = (0, s.z)("div")({
        name: "NumberOverlayEditorStyle",
        class: "gdg-n15fjm3e",
        propsAsIs: !1,
      });
      function f(e, t) {
        var r = {};
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) &&
            0 > t.indexOf(a) &&
            (r[a] = e[a]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var n = 0, a = Object.getOwnPropertySymbols(e);
            n < a.length;
            n++
          )
            0 > t.indexOf(a[n]) &&
              Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
              (r[a[n]] = e[a[n]]);
        return r;
      }
      function d() {}
      function v(e) {
        return !!(e || "").match(/\d/);
      }
      function g(e) {
        return null == e;
      }
      function m(e) {
        return (
          g(e) ||
          ("number" == typeof e && isNaN(e)) ||
          ("number" == typeof e && !isFinite(e))
        );
      }
      function p(e) {
        return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
      }
      function h(e, t) {
        void 0 === t && (t = !0);
        var r = "-" === e[0],
          a = r && t,
          n = (e = e.replace("-", "")).split(".");
        return {
          beforeDecimal: n[0],
          afterDecimal: n[1] || "",
          hasNegation: r,
          addNegation: a,
        };
      }
      function S(e, t, r) {
        for (var a = "", n = r ? "0" : "", u = 0; u <= t - 1; u++)
          a += e[u] || n;
        return a;
      }
      function b(e, t) {
        return Array(t + 1).join(e);
      }
      function y(e) {
        var t = e + "",
          r = "-" === t[0] ? "-" : "";
        r && (t = t.substring(1));
        var a = t.split(/[eE]/g),
          n = a[0],
          u = a[1];
        if (!(u = Number(u))) return r + n;
        n = n.replace(".", "");
        var o = 1 + u,
          i = n.length;
        return (
          o < 0
            ? (n = "0." + b("0", Math.abs(o)) + n)
            : o >= i
              ? (n += b("0", o - i))
              : (n = (n.substring(0, o) || "0") + "." + n.substring(o)),
          r + n
        );
      }
      function V(e, t, r) {
        if (-1 !== ["", "-"].indexOf(e)) return e;
        var a = (-1 !== e.indexOf(".") || r) && t,
          n = h(e),
          u = n.beforeDecimal,
          o = n.afterDecimal,
          i = n.hasNegation,
          l = parseFloat("0." + (o || "0")),
          s = (o.length <= t ? "0." + o : l.toFixed(t)).split(".");
        return (
          (i ? "-" : "") +
          u
            .split("")
            .reverse()
            .reduce(
              function (e, t, r) {
                return e.length > r
                  ? (Number(e[0]) + Number(t)).toString() +
                      e.substring(1, e.length)
                  : t + e;
              },
              s[0]
            ) +
          (a ? "." : "") +
          S(s[1] || "", t, r)
        );
      }
      function x(e, t) {
        if (((e.value = e.value), null !== e)) {
          if (e.createTextRange) {
            var r = e.createTextRange();
            return r.move("character", t), r.select(), !0;
          }
          return e.selectionStart || 0 === e.selectionStart
            ? (e.focus(), e.setSelectionRange(t, t), !0)
            : (e.focus(), !1);
        }
      }
      ((a = i || (i = {})).event = "event"), (a.props = "prop");
      var w =
        ((n = function (e, t) {
          for (
            var r = 0, a = 0, n = e.length, u = t.length;
            e[r] === t[r] && r < n;
          )
            r++;
          for (; e[n - 1 - a] === t[u - 1 - a] && u - a > r && n - a > r; ) a++;
          return {
            from: { start: r, end: n - a },
            to: { start: r, end: u - a },
          };
        }),
        (o = void 0),
        function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return u &&
            e.length === u.length &&
            e.every(function (e, t) {
              return e === u[t];
            })
            ? o
            : ((u = e), (o = n.apply(void 0, e)));
        });
      function N(e) {
        return Math.max(e.selectionStart, e.selectionEnd);
      }
      function D(e) {
        var t = e.currentValue,
          r = e.formattedValue,
          a = e.currentValueIndex,
          n = e.formattedValueIndex;
        return t[a] === r[n];
      }
      function O(e, t, r, a) {
        var n = e.length;
        if (((t = Math.min(Math.max(t, 0), n)), "left" === a)) {
          for (; t >= 0 && !r[t]; ) t--;
          -1 === t && (t = r.indexOf(!0));
        } else {
          for (; t <= n && !r[t]; ) t++;
          t > n && (t = r.lastIndexOf(!0));
        }
        return -1 === t && (t = n), t;
      }
      function E(e) {
        for (
          var t = Array.from({ length: e.length + 1 }).map(function () {
              return !0;
            }),
            r = 0,
            a = t.length;
          r < a;
          r++
        )
          t[r] = !!(v(e[r]) || v(e[r - 1]));
        return t;
      }
      function C(e, t, r, a, n, u) {
        void 0 === u && (u = d);
        var o,
          i,
          s =
            ((o = function (e, t) {
              var r, u;
              return (
                m(e)
                  ? ((u = ""), (r = ""))
                  : (r =
                      "number" == typeof e || t
                        ? a((u = "number" == typeof e ? y(e) : e))
                        : a((u = n(e, void 0)))),
                { formattedValue: r, numAsString: u }
              );
            }),
            ((i = (0, l.useRef)(o)).current = o),
            (0, l.useRef)(function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return i.current.apply(i, e);
            }).current),
          c = (0, l.useState)(function () {
            return s(g(e) ? t : e, r);
          }),
          f = c[0],
          v = c[1],
          p = e,
          h = r;
        g(e) && ((p = f.numAsString), (h = !0));
        var S = s(p, h);
        return (
          (0, l.useMemo)(
            function () {
              v(S);
            },
            [S.formattedValue]
          ),
          [
            f,
            function (e, t) {
              e.formattedValue !== f.formattedValue &&
                v({ formattedValue: e.formattedValue, numAsString: e.value }),
                u(e, t);
            },
          ]
        );
      }
      function I(e) {
        return e.replace(/[^0-9]/g, "");
      }
      function A(e) {
        return e;
      }
      function T(e) {
        var t = e.type;
        void 0 === t && (t = "text");
        var r = e.displayType;
        void 0 === r && (r = "input");
        var a = e.customInput,
          n = e.renderText,
          u = e.getInputRef,
          o = e.format;
        void 0 === o && (o = A);
        var s = e.removeFormatting;
        void 0 === s && (s = I);
        var c = e.defaultValue,
          g = e.valueIsNumericString,
          m = e.onValueChange,
          p = e.isAllowed,
          h = e.onChange;
        void 0 === h && (h = d);
        var S = e.onKeyDown;
        void 0 === S && (S = d);
        var b = e.onMouseUp;
        void 0 === b && (b = d);
        var y = e.onFocus;
        void 0 === y && (y = d);
        var V = e.onBlur;
        void 0 === V && (V = d);
        var T = e.value,
          R = e.getCaretBoundary;
        void 0 === R && (R = E);
        var j = e.isValidInputCharacter;
        void 0 === j && (j = v);
        var F = e.isCharacterSame,
          B = f(e, [
            "type",
            "displayType",
            "customInput",
            "renderText",
            "getInputRef",
            "format",
            "removeFormatting",
            "defaultValue",
            "valueIsNumericString",
            "onValueChange",
            "isAllowed",
            "onChange",
            "onKeyDown",
            "onMouseUp",
            "onFocus",
            "onBlur",
            "value",
            "getCaretBoundary",
            "isValidInputCharacter",
            "isCharacterSame",
          ]),
          k = C(T, c, !!g, o, s, m),
          M = k[0],
          P = M.formattedValue,
          W = M.numAsString,
          L = k[1],
          K = (0, l.useRef)({ formattedValue: P, numAsString: W }),
          U = function (e, t) {
            (K.current = {
              formattedValue: e.formattedValue,
              numAsString: e.value,
            }),
              L(e, t);
          },
          _ = (0, l.useState)(!1),
          G = _[0],
          $ = _[1],
          Z = (0, l.useRef)(null),
          z = (0, l.useRef)({ setCaretTimeout: null, focusTimeout: null });
        (0, l.useEffect)(function () {
          return (
            $(!0),
            function () {
              clearTimeout(z.current.setCaretTimeout),
                clearTimeout(z.current.focusTimeout);
            }
          );
        }, []);
        var q = o,
          H = function (e, t) {
            var r = parseFloat(t);
            return {
              formattedValue: e,
              value: t,
              floatValue: isNaN(r) ? void 0 : r,
            };
          },
          J = function (e, t, r) {
            (0 !== e.selectionStart || e.selectionEnd !== e.value.length) &&
              (x(e, t),
              (z.current.setCaretTimeout = setTimeout(function () {
                e.value === r && e.selectionStart !== e.selectionEnd && x(e, t);
              }, 0)));
          },
          Q = function (e, t, r) {
            return O(e, t, R(e), r);
          },
          X = function (e, t, r) {
            var a = R(t),
              n = (function (e, t, r, a, n, u, o) {
                void 0 === o && (o = D);
                var i = n.findIndex(function (e) {
                    return e;
                  }),
                  l = e.slice(0, i);
                t || r.startsWith(l) || ((t = l), (r = l + r), (a += l.length));
                for (
                  var s = r.length, c = e.length, f = {}, d = Array(s), v = 0;
                  v < s;
                  v++
                ) {
                  d[v] = -1;
                  for (var g = 0; g < c; g++)
                    if (
                      o({
                        currentValue: r,
                        lastValue: t,
                        formattedValue: e,
                        currentValueIndex: v,
                        formattedValueIndex: g,
                      }) &&
                      !0 !== f[g]
                    ) {
                      (d[v] = g), (f[g] = !0);
                      break;
                    }
                }
                for (var m = a; m < s && (-1 === d[m] || !u(r[m])); ) m++;
                var p = m === s || -1 === d[m] ? c : d[m];
                for (m = a - 1; m > 0 && -1 === d[m]; ) m--;
                var h = -1 === m || -1 === d[m] ? 0 : d[m] + 1;
                return h > p ? p : a - h < p - a ? h : p;
              })(t, P, e, r, a, j, F);
            return O(t, n, a);
          },
          Y = function (e) {
            var t = e.formattedValue;
            void 0 === t && (t = "");
            var r = e.input,
              a = e.setCaretPosition;
            void 0 === a && (a = !0);
            var n = e.source,
              u = e.event,
              o = e.numAsString,
              i = e.caretPos;
            if (r) {
              if (void 0 === i && a) {
                var l = e.inputValue || r.value,
                  s = N(r);
                (r.value = t), (i = X(l, t, s));
              }
              (r.value = t), a && void 0 !== i && J(r, i, t);
            }
            t !== P && U(H(t, o), { event: u, source: n });
          };
        (0, l.useEffect)(
          function () {
            var e = K.current,
              t = e.formattedValue,
              r = e.numAsString;
            P !== t &&
              (P !== W || t !== r) &&
              U(H(P, W), { event: void 0, source: i.props });
          },
          [P, W]
        );
        var ee = Z.current ? N(Z.current) : void 0;
        ("undefined" != typeof window ? l.useLayoutEffect : l.useEffect)(
          function () {
            var e = Z.current;
            if (P !== K.current.formattedValue && e) {
              var t = X(K.current.formattedValue, P, ee);
              (e.value = P), J(e, t, P);
            }
          },
          [P]
        );
        var et = function (e, t, r) {
            var a = Object.assign(Object.assign({}, w(P, e)), { lastValue: P }),
              n = s(e, a),
              u = q(n);
            if (((n = s(u, void 0)), p && !p(H(u, n)))) {
              var o = t.target,
                i = N(o),
                l = X(e, P, i);
              return (o.value = P), J(o, l, P), !1;
            }
            return (
              Y({
                formattedValue: u,
                numAsString: n,
                inputValue: e,
                event: t,
                source: r,
                setCaretPosition: !0,
                input: t.target,
              }),
              !0
            );
          },
          er = Object.assign(
            {
              inputMode:
                G &&
                "undefined" != typeof navigator &&
                !(navigator.platform && /iPhone|iPod/.test(navigator.platform))
                  ? "numeric"
                  : void 0,
            },
            B,
            {
              type: t,
              value: P,
              onChange: function (e) {
                et(e.target.value, e, i.event) && h(e);
              },
              onKeyDown: function (e) {
                var t,
                  r = e.target,
                  a = e.key,
                  n = r.selectionStart,
                  u = r.selectionEnd,
                  o = r.value;
                if (
                  (void 0 === o && (o = ""),
                  "ArrowLeft" === a || "Backspace" === a
                    ? (t = Math.max(n - 1, 0))
                    : "ArrowRight" === a
                      ? (t = Math.min(n + 1, o.length))
                      : "Delete" === a && (t = n),
                  void 0 === t || n !== u)
                ) {
                  S(e);
                  return;
                }
                var i = t;
                "ArrowLeft" === a || "ArrowRight" === a
                  ? (i = Q(o, t, "ArrowLeft" === a ? "left" : "right")) !== t &&
                    e.preventDefault()
                  : "Delete" !== a || j(o[t])
                    ? "Backspace" !== a || j(o[t]) || (i = Q(o, t, "left"))
                    : (i = Q(o, t, "right")),
                  i !== t && J(r, i, o),
                  e.isUnitTestRun && J(r, i, o),
                  S(e);
              },
              onMouseUp: function (e) {
                var t = e.target,
                  r = t.selectionStart,
                  a = t.selectionEnd,
                  n = t.value;
                if ((void 0 === n && (n = ""), r === a)) {
                  var u = Q(n, r);
                  u !== r && J(t, u, n);
                }
                b(e);
              },
              onFocus: function (e) {
                e.persist && e.persist();
                var t = e.target;
                (Z.current = t),
                  (z.current.focusTimeout = setTimeout(function () {
                    var r = t.selectionStart,
                      a = t.selectionEnd,
                      n = t.value;
                    void 0 === n && (n = "");
                    var u = Q(n, r);
                    u === r || (0 === r && a === n.length) || J(t, u, n), y(e);
                  }, 0));
              },
              onBlur: function (e) {
                (Z.current = null),
                  clearTimeout(z.current.focusTimeout),
                  clearTimeout(z.current.setCaretTimeout),
                  V(e);
              },
            }
          );
        return "text" === r
          ? n
            ? l.createElement(l.Fragment, null, n(P, B) || null)
            : l.createElement("span", Object.assign({}, B, { ref: u }), P)
          : a
            ? l.createElement(a, Object.assign({}, er, { ref: u }))
            : l.createElement("input", Object.assign({}, er, { ref: u }));
      }
      function R(e, t) {
        var r,
          a,
          n,
          u = t.decimalScale,
          o = t.fixedDecimalScale,
          i = t.prefix;
        void 0 === i && (i = "");
        var l = t.suffix;
        void 0 === l && (l = "");
        var s = t.allowNegative,
          c = t.thousandsGroupStyle;
        if ((void 0 === c && (c = "thousand"), "" === e || "-" === e)) return e;
        var f = j(t),
          d = f.thousandSeparator,
          v = f.decimalSeparator,
          g = (0 !== u && -1 !== e.indexOf(".")) || (u && o),
          m = h(e, s),
          p = m.beforeDecimal,
          b = m.afterDecimal,
          y = m.addNegation;
        return (
          void 0 !== u && (b = S(b, u, !!o)),
          d &&
            ((r = p),
            (a = (function (e) {
              switch (e) {
                case "lakh":
                  return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
                case "wan":
                  return /(\d)(?=(\d{4})+(?!\d))/g;
                default:
                  return /(\d)(?=(\d{3})+(?!\d))/g;
              }
            })(c)),
            (n = -1 === (n = r.search(/[1-9]/)) ? r.length : n),
            (p =
              r.substring(0, n) +
              r.substring(n, r.length).replace(a, "$1" + d))),
          i && (p = i + p),
          l && (b += l),
          y && (p = "-" + p),
          (e = p + ((g && v) || "") + b)
        );
      }
      function j(e) {
        var t = e.decimalSeparator;
        void 0 === t && (t = ".");
        var r = e.thousandSeparator,
          a = e.allowedDecimalSeparators;
        return (
          !0 === r && (r = ","),
          a || (a = [t, "."]),
          {
            decimalSeparator: t,
            thousandSeparator: r,
            allowedDecimalSeparators: a,
          }
        );
      }
      function F(e) {
        var t,
          r,
          a,
          n,
          u,
          o,
          s,
          c,
          S,
          b,
          N,
          D,
          O,
          E,
          I,
          A,
          F,
          B,
          k,
          M,
          P,
          W,
          L,
          K,
          U,
          _,
          G,
          $,
          Z,
          z =
            ((t = (function (e) {
              var t = j(e),
                r = t.thousandSeparator,
                a = t.decimalSeparator,
                n = e.prefix;
              void 0 === n && (n = "");
              var u = e.allowNegative;
              if ((void 0 === u && (u = !0), r === a))
                throw Error(
                  "\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " +
                    r +
                    ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: ' +
                    a +
                    " (default value for decimalSeparator is .)\n     "
                );
              return (
                n.startsWith("-") &&
                  u &&
                  (console.error(
                    "\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: " +
                      n +
                      "\n      allowNegative: " +
                      u +
                      "\n    "
                  ),
                  (u = !1)),
                Object.assign(Object.assign({}, e), { allowNegative: u })
              );
            })((t = e))).decimalSeparator,
            t.allowedDecimalSeparators,
            t.thousandsGroupStyle,
            (r = t.suffix),
            (a = t.allowNegative),
            (n = t.allowLeadingZeros),
            void 0 === (u = t.onKeyDown) && (u = d),
            void 0 === (o = t.onBlur) && (o = d),
            (s = t.thousandSeparator),
            (c = t.decimalScale),
            (S = t.fixedDecimalScale),
            void 0 === (b = t.prefix) && (b = ""),
            (N = t.defaultValue),
            (D = t.value),
            (O = t.valueIsNumericString),
            (E = t.onValueChange),
            (I = f(t, [
              "decimalSeparator",
              "allowedDecimalSeparators",
              "thousandsGroupStyle",
              "suffix",
              "allowNegative",
              "allowLeadingZeros",
              "onKeyDown",
              "onBlur",
              "thousandSeparator",
              "decimalScale",
              "fixedDecimalScale",
              "prefix",
              "defaultValue",
              "value",
              "valueIsNumericString",
              "onValueChange",
            ])),
            (F = (A = j(t)).decimalSeparator),
            (B = A.allowedDecimalSeparators),
            (k = function (e) {
              return R(e, t);
            }),
            (M = function (e, r) {
              return (function (e, t, r) {
                void 0 === t &&
                  (t = {
                    from: { start: 0, end: 0 },
                    to: { start: 0, end: e.length },
                    lastValue: "",
                  });
                var a,
                  n,
                  u,
                  o,
                  i = r.allowNegative,
                  l = r.prefix;
                void 0 === l && (l = "");
                var s = r.suffix;
                void 0 === s && (s = "");
                var c = r.decimalScale,
                  f = t.from,
                  d = t.to,
                  g = d.start,
                  m = d.end,
                  S = j(r),
                  b = S.allowedDecimalSeparators,
                  y = S.decimalSeparator,
                  V = e[m] === y;
                if (v(e) && (e === l || e === s) && "" === t.lastValue)
                  return e;
                m - g == 1 &&
                  -1 !== b.indexOf(e[g]) &&
                  (e =
                    e.substring(0, g) +
                    (0 === c ? "" : y) +
                    e.substring(g + 1, e.length));
                var x = function (e, t, r) {
                    var a = !1,
                      n = !1;
                    l.startsWith("-")
                      ? (a = !1)
                      : e.startsWith("--")
                        ? ((a = !1), (n = !0))
                        : s.startsWith("-") && e.length === s.length
                          ? (a = !1)
                          : "-" === e[0] && (a = !0);
                    var u = a ? 1 : 0;
                    return (
                      n && (u = 2),
                      u && ((e = e.substring(u)), (t -= u), (r -= u)),
                      { value: e, start: t, end: r, hasNegation: a }
                    );
                  },
                  w = x(e, g, m),
                  N = w.hasNegation;
                (e = w.value), (g = w.start), (m = w.end);
                var D = x(t.lastValue, f.start, f.end),
                  O = D.start,
                  E = D.end,
                  C = D.value,
                  I = e.substring(g, m);
                e.length &&
                  C.length &&
                  (O > C.length - s.length || E < l.length) &&
                  !(I && s.startsWith(I)) &&
                  (e = C);
                var A = 0;
                e.startsWith(l) ? (A += l.length) : g < l.length && (A = g),
                  (e = e.substring(A)),
                  (m -= A);
                var T = e.length,
                  R = e.length - s.length;
                e.endsWith(s)
                  ? (T = R)
                  : m > R
                    ? (T = m)
                    : m > e.length - s.length && (T = m),
                  (e = e.substring(0, T)),
                  void 0 === (a = N ? "-" + e : e) && (a = ""),
                  (n = RegExp("(-)(.)*(-)")),
                  (u = /(-)/.test(a)),
                  (o = n.test(a)),
                  (a = a.replace(/-/g, "")),
                  u && !o && i && (a = "-" + a);
                var F = (e = (
                    (e = a).match(RegExp("(^-)|[0-9]|" + p(y), "g")) || []
                  ).join("")).indexOf(y),
                  B = h(
                    (e = e.replace(RegExp(p(y), "g"), function (e, t) {
                      return t === F ? "." : "";
                    })),
                    i
                  ),
                  k = B.beforeDecimal,
                  M = B.afterDecimal,
                  P = B.addNegation;
                return (
                  d.end - d.start < f.end - f.start &&
                    "" === k &&
                    V &&
                    !parseFloat(M) &&
                    (e = P ? "-" : ""),
                  e
                );
              })(e, r, t);
            }),
            (P = g(D) ? N : D),
            (L =
              null != O
                ? O
                : ((W = b),
                  "" === P ||
                    (!(null == W ? void 0 : W.match(/\d/)) &&
                      !(null == r ? void 0 : r.match(/\d/)) &&
                      "string" == typeof P &&
                      !isNaN(Number(P))))),
            g(D)
              ? g(N) || (L = L || "number" == typeof N)
              : (L = L || "number" == typeof D),
            (G = (_ = (U = C(
              (K = function (e) {
                return m(e)
                  ? e
                  : ("number" == typeof e && (e = y(e)),
                      L && "number" == typeof c)
                    ? V(e, c, !!S)
                    : e;
              })(D),
              K(N),
              !!L,
              k,
              M,
              E
            ))[0]).numAsString),
            ($ = _.formattedValue),
            (Z = U[1]),
            Object.assign(Object.assign({}, I), {
              value: $,
              valueIsNumericString: !1,
              isValidInputCharacter: function (e) {
                return e === F || v(e);
              },
              isCharacterSame: function (e) {
                var t = e.currentValue,
                  r = e.lastValue,
                  a = e.formattedValue,
                  n = e.currentValueIndex,
                  u = e.formattedValueIndex,
                  o = t[n],
                  i = a[u],
                  l = w(r, t).to;
                return (
                  (!!(n >= l.start && n < l.end && B && B.includes(o)) &&
                    i === F) ||
                  o === i
                );
              },
              onValueChange: Z,
              format: k,
              removeFormatting: M,
              getCaretBoundary: function (e) {
                var r, a, n, u, o, i;
                return (
                  void 0 === (a = (r = t).prefix) && (a = ""),
                  void 0 === (n = r.suffix) && (n = ""),
                  (u = Array.from({ length: e.length + 1 }).map(function () {
                    return !0;
                  })),
                  (o = "-" === e[0]),
                  u.fill(!1, 0, a.length + (o ? 1 : 0)),
                  (i = e.length),
                  u.fill(!1, i - n.length + 1, i + 1),
                  u
                );
              },
              onKeyDown: function (e) {
                var t = e.target,
                  r = e.key,
                  n = t.selectionStart,
                  o = t.selectionEnd,
                  i = t.value;
                if ((void 0 === i && (i = ""), n !== o)) {
                  u(e);
                  return;
                }
                "Backspace" === r &&
                  "-" === i[0] &&
                  n === b.length + 1 &&
                  a &&
                  x(t, 1),
                  c &&
                    S &&
                    ("Backspace" === r && i[n - 1] === F
                      ? (x(t, n - 1), e.preventDefault())
                      : "Delete" === r && i[n] === F && e.preventDefault()),
                  (null == B ? void 0 : B.includes(r)) &&
                    i[n] === F &&
                    x(t, n + 1);
                var l = !0 === s ? "," : s;
                "Backspace" === r && i[n - 1] === l && x(t, n - 1),
                  "Delete" === r && i[n] === l && x(t, n + 1),
                  u(e);
              },
              onBlur: function (e) {
                var r = G;
                r.match(/\d/g) || (r = ""),
                  n ||
                    (r = (function (e) {
                      if (!e) return e;
                      var t = "-" === e[0];
                      t && (e = e.substring(1, e.length));
                      var r = e.split("."),
                        a = r[0].replace(/^0+/, "") || "0",
                        n = r[1] || "";
                      return (t ? "-" : "") + a + (n ? "." + n : "");
                    })(r)),
                  S && c && (r = V(r, c, S)),
                  r !== G &&
                    Z(
                      {
                        formattedValue: R(r, t),
                        value: r,
                        floatValue: parseFloat(r),
                      },
                      { event: e, source: i.event }
                    ),
                  o(e);
              },
            }));
        return l.createElement(T, Object.assign({}, z));
      }
      function B() {
        let e = Intl.NumberFormat()
          ?.formatToParts(1.1)
          ?.find((e) => "decimal" === e.type)?.value;
        return e ?? ".";
      }
      let k = (e) => {
        let {
            value: t,
            onChange: r,
            disabled: a,
            highlight: n,
            validatedSelection: u,
            fixedDecimals: o,
            allowNegative: i,
            thousandSeparator: s,
            decimalSeparator: f,
          } = e,
          d = l.useRef();
        return (
          l.useLayoutEffect(() => {
            if (void 0 !== u) {
              let e = "number" == typeof u ? [u, null] : u;
              d.current?.setSelectionRange(e[0], e[1]);
            }
          }, [u]),
          l.createElement(
            c,
            null,
            l.createElement(F, {
              autoFocus: !0,
              getInputRef: d,
              className: "gdg-input",
              onFocus: (e) =>
                e.target.setSelectionRange(
                  n ? 0 : e.target.value.length,
                  e.target.value.length
                ),
              disabled: !0 === a,
              decimalScale: o,
              allowNegative: i,
              thousandSeparator: s ?? ("." === B() ? "," : "."),
              decimalSeparator: f ?? B(),
              value: Object.is(t, -0) ? "-" : t ?? "",
              onValueChange: r,
            })
          )
        );
      };
      var M = k;
    },
  },
]);
//# sourceMappingURL=5719.7c6ed6ab3bf446f4.js.map