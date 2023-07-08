"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [496],
  {
    69403: function (e, t, n) {
      var r, a, i, o, s, l, u, d, c, f, h, g, m, p, v;
      n.d(t, {
        Jq: function () {
          return d;
        },
        Os: function () {
          return i;
        },
        PX: function () {
          return s;
        },
        uU: function () {
          return o;
        },
      }),
        ((c = r || (r = {})).Default = "default"),
        (c.Dark = "dark"),
        ((a || (a = {})).Retrieval = "retrieval"),
        ((f = i || (i = {})).Next = "next"),
        (f.Variant = "variant"),
        (f.Continue = "continue"),
        ((h = o || (o = {})).Unknown = "unknown"),
        (h.User = "user"),
        (h.Assistant = "assistant"),
        (h.System = "system"),
        (h.Critic = "critic"),
        (h.Tool = "tool"),
        ((g = s || (s = {})).Text = "text"),
        (g.MultimodalText = "multimodal_text"),
        (g.TetherBrowsingCode = "tether_browsing_code"),
        (g.Code = "code"),
        (g.ExecutionOutput = "execution_output"),
        (g.SystemError = "system_error"),
        (g.SystemMessage = "system_message"),
        (g.TetherBrowsingDisplay = "tether_browsing_display"),
        (g.TetherQuote = "tether_quote"),
        ((m = l || (l = {})).Search = "search"),
        (m.Click = "click"),
        (m.OpenUrl = "open_url"),
        (m.Quote = "quote"),
        (m.QuoteFull = "quote_full"),
        (m.Back = "back"),
        (m.Scroll = "scroll"),
        ((p = u || (u = {})).Running = "running"),
        (p.Finished = "finished"),
        ((v = d || (d = {})).Root = "root"),
        (v.System = "system"),
        (v.Prompt = "prompt"),
        (v.Completion = "completion");
    },
    75515: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(35250),
        a = n(19841);
      function i(e) {
        var t = e.url,
          n = e.name,
          i = e.size,
          o = e.large,
          s = e.className;
        return (0, r.jsxs)("div", {
          className: (0, a.Z)("relative", s),
          style: { width: i, height: i },
          children: [
            (0, r.jsx)("img", {
              src: t,
              alt: "".concat(n, " logo"),
              className: (0, a.Z)(
                "h-full w-full bg-white",
                o ? "rounded-[5px]" : "rounded-sm"
              ),
            }),
            (0, r.jsx)("div", {
              className: (0, a.Z)(
                "absolute inset-0 ring-1 ring-inset ring-black/10",
                o ? "rounded-[5px]" : "rounded-sm"
              ),
            }),
          ],
        });
      }
    },
    46110: function (e, t, n) {
      n.d(t, {
        Ph: function () {
          return j;
        },
        Yt: function () {
          return k;
        },
        k$: function () {
          return w;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(19841),
        o = n(54887),
        s = n.n(o),
        l = n(1454),
        u = n(13002),
        d = n(34303),
        c = n(88038),
        f = n(59110),
        h = n(75515),
        g = n(38317);
      function m() {
        var e = (0, r._)([
          "relative p-1 ",
          " text-white flex items-center justify-center",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = (0, r._)([
          "\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = (0, r._)([
          "text-white flex justify-center items-center relative tracking-widest",
        ]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = (0, r._)(["relative flex"]);
        return (
          (x = function () {
            return e;
          }),
          e
        );
      }
      var b = d.Z.div(m(), function (e) {
          return e.$isMessageRedesign
            ? "rounded-full h-7 w-7"
            : "rounded-sm h-[30px] w-[30px]";
        }),
        y = d.Z.span(
          p(),
          function (e) {
            return "warning" === e.$type && "bg-orange-500 text-white";
          },
          function (e) {
            return "danger" === e.$type && "bg-red-500 text-white";
          }
        ),
        w = function (e) {
          var t = e.iconName,
            n = e.background,
            r = e.notice,
            i = (0, f.hz)().has(c.FZ),
            o = g.nI;
          switch (t) {
            case "globe":
              o = l.RsK;
              break;
            case "terminal":
              o = l.cDN;
              break;
            case "text":
              o = l.RUS;
              break;
            case "browsing":
              o = l.jRj;
              break;
            case "code":
              o = u.oT$;
              break;
            case "plugin":
              o = l.yG;
              break;
            case "user":
              o = l.fzv;
          }
          return (0, a.jsxs)(b, {
            $isMessageRedesign: i,
            style: { backgroundColor: n },
            children: [
              (0, a.jsx)(g.ZP, {
                icon: o,
                size: "medium",
                className: i ? "!h-5 !w-5" : "",
              }),
              r && (0, a.jsx)(y, { $type: r, children: "!" }),
            ],
          });
        },
        j = function (e) {
          var t = e.plugin,
            n = e.notice,
            r = (0, f.hz)().has(c.FZ);
          return (0, a.jsxs)(b, {
            $isMessageRedesign: r,
            className: "p-0",
            children: [
              (0, a.jsx)(h.Z, {
                url: t.manifest.logo_url,
                name: t.manifest.name_for_human,
                size: "100%",
              }),
              n && (0, a.jsx)(y, { $type: n, children: "!" }),
            ],
          });
        },
        _ = d.Z.div(v()),
        C = d.Z.div(x()),
        M = { small: 20, redesign: 28, medium: 38 },
        k = function (e) {
          var t,
            n = e.user,
            r = e.size,
            o = e.notice,
            u = e.rounded,
            d = o && (0, a.jsx)(y, { $type: o, children: "!" }),
            h = (0, f.hz)().has(c.FZ);
          if ((null == n ? void 0 : n.picture) != null)
            return (0, a.jsxs)(C, {
              children: [
                (0, a.jsx)(s(), {
                  src: n.picture,
                  alt: "User",
                  width: M[r],
                  height: M[r],
                  className:
                    h || (void 0 !== u && u) ? "rounded-full" : "rounded-sm",
                }),
                d,
              ],
            });
          var m = (
            null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ""
          )
            .split(" ")
            .map(function (e) {
              return e[0];
            })
            .join("");
          return (0, a.jsxs)(_, {
            className: (0, i.Z)(
              "bg-blue-300",
              "redesign" === r
                ? "h-7 w-7 text-xs"
                : "small" === r
                ? "h-5 w-5 text-xs"
                : "h-[30px] w-[30px] text-sm",
              h ? "rounded-full" : "rounded-sm"
            ),
            children: [
              m ||
                (0, a.jsx)(g.ZP, {
                  icon: l.fzv,
                  size: "redesign" === r ? "small" : r,
                }),
              d,
            ],
          });
        };
    },
    2368: function (e, t, n) {
      n.d(t, {
        $: function () {
          return b;
        },
        Z: function () {
          return x;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(70079),
        o = n(34303),
        s = n(88038),
        l = n(59110),
        u = n(13282);
      function d() {
        var e = (0, r._)(["bg-black rounded-md"]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = (0, r._)([
          "flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md ",
          "",
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = (0, r._)(["p-4 overflow-y-auto"]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = (0, r._)(["", ""]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      var g = o.Z.div(d()),
        m = o.Z.div(c(), function (e) {
          return e.$isMessageRedesign && "dark:bg-gray-900";
        }),
        p = o.Z.div(f()),
        v = o.Z.code(h(), function (e) {
          return e.$shouldWrap ? "!whitespace-pre-wrap" : "!whitespace-pre";
        });
      function x(e) {
        var t = e.children,
          n = e.className,
          r = e.language,
          o = e.content,
          s = (0, i.useCallback)(
            function () {
              navigator.clipboard.writeText(o);
            },
            [o]
          );
        return (0, a.jsx)(b, {
          title: r,
          headerDecoration: (0, a.jsx)(u.Z, {
            buttonText: "Copy code",
            onCopy: s,
          }),
          className: "mb-4",
          codeClassName: n,
          children: t,
        });
      }
      function b(e) {
        var t = e.children,
          n = e.title,
          r = e.headerDecoration,
          i = e.shouldWrapCode,
          o = e.className,
          u = e.codeClassName,
          d = (0, l.hz)().has(s.FZ);
        return (0, a.jsxs)(g, {
          className: o,
          children: [
            (0, a.jsxs)(m, {
              $isMessageRedesign: d,
              children: [n && (0, a.jsx)("span", { children: n }), r],
            }),
            (0, a.jsx)(p, {
              children: (0, a.jsx)(v, {
                $shouldWrap: void 0 !== i && i,
                className: u,
                children: t,
              }),
            }),
          ],
        });
      }
    },
    13282: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var r = n(22830),
        a = n(4337),
        i = n(35250),
        o = n(70079),
        s = n(1454),
        l = n(34303),
        u = n(86526),
        d = n(38317);
      function c() {
        var e = (0, a._)(["flex ml-auto gap-2"]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function f(e) {
        var t = e.buttonText,
          n = e.onCopy,
          a = e.className,
          l = (0, r._)((0, o.useState)(!1), 2),
          c = l[0],
          f = l[1],
          g = (0, u.Z)(),
          m = (0, o.useCallback)(
            function () {
              n(),
                f(!0),
                setTimeout(function () {
                  g() && f(!1);
                }, 2e3);
            },
            [g, n]
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            !c &&
              (0, i.jsxs)(h, {
                onClick: m,
                className: a,
                children: [(0, i.jsx)(d.ZP, { icon: s.j4u }), t],
              }),
            c &&
              (0, i.jsxs)(h, {
                className: a,
                children: [(0, i.jsx)(d.ZP, { icon: s.UgA }), t && "Copied!"],
              }),
          ],
        });
      }
      var h = l.Z.button(c());
    },
    180: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(35250);
      function a(e) {
        var t,
          n = e.url,
          a = e.size,
          i = void 0 === a ? 16 : a,
          o = e.className;
        try {
          t = new URL(n);
        } catch (e) {
          return console.error(e), null;
        }
        return (0, r.jsx)("img", {
          src: "https://icons.duckduckgo.com/ip3/".concat(t.hostname, ".ico"),
          alt: "Favicon",
          width: i,
          height: i,
          className: o,
        });
      }
    },
    30931: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var r = n(22830),
        a = n(35250),
        i = n(39217),
        o = n(19841),
        s = n(70079),
        l = n(1454),
        u = n(75908),
        d = n(3001),
        c = n(38317);
      function f(e) {
        var t = e.percentage,
          n = e.className,
          r = 2 * Math.PI * 45;
        return (0, a.jsxs)("svg", {
          width: "120",
          height: "120",
          viewBox: "0 0 120 120",
          className: n,
          children: [
            (0, a.jsx)("circle", {
              className:
                "origin-[50%_50%] -rotate-90 stroke-gray-200 transition-[stroke-dashoffset] duration-1000 ease-in-out",
              strokeWidth: "20",
              fill: "transparent",
              r: 45,
              cx: "60",
              cy: "60",
            }),
            (0, a.jsx)("circle", {
              className:
                "origin-[50%_50%] -rotate-90 transition-[stroke-dashoffset]",
              stroke: "currentColor",
              strokeWidth: "20",
              strokeDashoffset: r - (t / 100) * r,
              strokeDasharray: "".concat(r, " ").concat(r),
              fill: "transparent",
              r: 45,
              cx: "60",
              cy: "60",
            }),
          ],
        });
      }
      var h = n(57924);
      function g(e) {
        return e instanceof File;
      }
      function m(e) {
        var t,
          n,
          d,
          m,
          v = e.onRemoveFileClick,
          x = e.file,
          b = e.loadingPercentage,
          y = e.onDownloadClick,
          w = (0, u.Z)(),
          j = null != y,
          _ = g(x) ? x.name : x,
          C = !!g(x) && x.type.startsWith("image/"),
          M =
            ((t = g(x) ? x : null),
            (d = (n = (0, r._)((0, s.useState)(void 0), 2))[0]),
            (m = n[1]),
            (0, s.useEffect)(
              function () {
                if (t && t.type.startsWith("image/")) {
                  var e = new FileReader();
                  e.addEventListener("load", function () {
                    var t = e.result;
                    m("string" == typeof t ? t : void 0);
                  }),
                    e.readAsDataURL(t);
                } else m(void 0);
              },
              [t]
            ),
            d);
        return (0, a.jsxs)("div", {
          className: "group relative inline-block text-xs text-gray-900",
          children: [
            (0, a.jsx)(j ? "button" : "span", {
              className: "flex items-stretch justify-center",
              onClick: function () {
                return j && (null == y ? void 0 : y());
              },
              children:
                C && null != M
                  ? (0, a.jsx)("span", {
                      className: (0, o.Z)(
                        "box-border h-10 w-10 rounded-md border border-black/5 bg-cover bg-center dark:border-white/20",
                        j && "group-hover:bg-black"
                      ),
                      style: {
                        backgroundImage:
                          void 0 !== M ? "url(".concat(M, ")") : "none",
                      },
                      children:
                        j &&
                        (0, a.jsx)(c.ZP, {
                          icon: l._hL,
                          className: (0, o.Z)(
                            "h-5 w-5",
                            "hidden group-hover:block"
                          ),
                        }),
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsxs)("span", {
                          className: (0, o.Z)(
                            "rounded-l-md bg-gray-500 px-2 py-2 text-white transition-colors dark:bg-gray-500",
                            j && "group-hover:bg-black"
                          ),
                          children: [
                            (0, a.jsx)(c.ZP, {
                              icon: i.Z,
                              className: (0, o.Z)(
                                "h-5 w-5",
                                j && "group-hover:hidden"
                              ),
                            }),
                            j &&
                              (0, a.jsx)(c.ZP, {
                                icon: l._hL,
                                className: (0, o.Z)(
                                  "h-5 w-5",
                                  "hidden group-hover:block"
                                ),
                              }),
                          ],
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "flex max-w-xs items-center truncate rounded-r-md bg-gray-50 px-3 py-2 font-medium",
                          children: (0, a.jsx)("span", {
                            className: "truncate",
                            children: _,
                          }),
                        }),
                      ],
                    }),
            }),
            void 0 !== b &&
              b < 100 &&
              (0, a.jsx)("div", {
                className:
                  "absolute right-1 top-1 -translate-y-1/2 translate-x-1/2 rounded-full border border-white bg-white p-0.5 text-blue-700 dark:border-gray-700",
                children: (0, a.jsx)(f, {
                  percentage: b,
                  className: "h-4 w-4",
                }),
              }),
            null != v &&
              (0, a.jsx)("button", {
                onClick: v,
                className:
                  "absolute right-1 top-1 -translate-y-1/2 translate-x-1/2 rounded-full border border-white bg-gray-500 p-0.5 text-white transition-colors hover:bg-black hover:opacity-100 group-hover:opacity-100 md:opacity-0",
                children: (0, a.jsx)(h.u, {
                  label: w.formatMessage(p.removeFile),
                  side: "top",
                  sideOffset: 4,
                  children: (0, a.jsx)(c.ZP, { icon: l.q5L }),
                }),
              }),
          ],
        });
      }
      var p = (0, d.vU)({
        removeFile: {
          id: "FileTile.removeFile",
          defaultMessage: "Remove file",
          description: "Tooltip label for removing a file from the textarea",
        },
      });
    },
    10604: function (e, t, n) {
      var r = n(39324),
        a = n(22830),
        i = n(4337),
        o = n(35250),
        s = n(19841),
        l = n(70079),
        u = n(34303),
        d = n(38317);
      function c() {
        var e = (0, i._)(["absolute right-0 top-1/2 -translate-y-1/2"]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      t.Z = l.forwardRef(function (e, t) {
        var n = e.name,
          i = e.placeholder,
          u = e.type,
          c = e.displayName,
          h = e.onChange,
          g = e.onBlur,
          m = e.value,
          p = e.saveOnBlur,
          v = e.icon,
          x = e.onInputIconClick,
          b = e.className,
          y = e.autoComplete,
          w = e.autoFocus,
          j = e.onPressEnter,
          _ = (0, a._)((0, l.useState)(m), 2),
          C = _[0],
          M = _[1],
          k = (0, l.useCallback)(
            function (e) {
              null == g || g(e), p && M(e.target.value);
            },
            [g, p]
          ),
          T = (0, l.useCallback)(
            function (e) {
              null == h || h(e), p && M(e.target.value);
            },
            [h, p]
          ),
          N = (0, l.useCallback)(
            function (e) {
              "Enter" === e.key && j && (e.preventDefault(), j());
            },
            [j]
          );
        (0, l.useEffect)(
          function () {
            M(m);
          },
          [m]
        );
        var S = (0, r._)({}, p ? {} : { value: m }, p ? { value: C } : {});
        return (0,
        o.jsxs)("div", { className: (0, s.Z)("rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 dark:bg-gray-700", b), children: [(0, o.jsx)("label", { htmlFor: n, className: "block text-xs font-medium text-gray-900 dark:text-gray-100", children: c }), (0, o.jsxs)("div", { className: (0, s.Z)(c && "mt-1", "relative"), children: [(0, o.jsx)("input", (0, r._)({ ref: t, type: u, name: n, id: n, className: (0, s.Z)("block w-full border-0 p-0 text-gray-900 placeholder-gray-500 outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-100 sm:text-sm", v && "pr-6"), placeholder: i, onBlur: k, onChange: T, onKeyDown: N, autoComplete: y, autoFocus: w }, S)), v && (0, o.jsx)(f, { onClick: x, children: (0, o.jsx)(d.ZP, { icon: v }) })] })] });
      });
      var f = u.Z.button(c());
    },
    37541: function (e, t, n) {
      var r = n(35250),
        a = n(70060),
        i = n.n(a);
      n(70079);
      var o = function (e) {
        var t = e.children;
        return (0, r.jsx)(r.Fragment, { children: t });
      };
      t.Z = i()(
        function () {
          return Promise.resolve(o);
        },
        { ssr: !1 }
      );
    },
    85449: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(95182),
        o = n.n(i),
        s = n(1454),
        l = n(34303),
        u = n(38317);
      function d() {
        var e = (0, r._)(["text-xs flex items-center justify-center gap-1"]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = (0, r._)([
          "dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400",
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = (0, r._)(["flex-grow flex-shrink-0"]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function h(e) {
        var t = e.currentPage,
          n = e.onChangeIndex,
          r = e.length,
          i = e.className,
          l = function (e) {
            n(o()(t + e, 0, r - 1));
          };
        return (0, a.jsxs)(g, {
          className: i,
          children: [
            (0, a.jsx)(m, {
              onClick: function () {
                return l(-1);
              },
              disabled: 0 === t,
              children: (0, a.jsx)(u.ZP, { size: "xsmall", icon: s.YFh }),
            }),
            (0, a.jsx)(p, { children: "".concat(t + 1, " / ").concat(r) }),
            (0, a.jsx)(m, {
              onClick: function () {
                return l(1);
              },
              disabled: t === r - 1,
              children: (0, a.jsx)(u.ZP, { size: "xsmall", icon: s.Tfp }),
            }),
          ],
        });
      }
      var g = l.Z.div(d()),
        m = l.Z.button(c()),
        p = l.Z.span(f());
    },
    45036: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return tZ;
        },
      });
      var r,
        a,
        i,
        o,
        s = n(4337),
        l = n(35250),
        u = n(70079),
        d = n(34303),
        c = n(32689),
        f = n(77442),
        h = n(39324),
        g = n(40638),
        m = n(24760),
        p = n(70575),
        v = n(68555),
        x = n(1454),
        b = n(35290),
        y = n(3001),
        w = n(24274),
        j = n(38317),
        _ = n(36112),
        C = n(71209),
        M = n(70216),
        k = n(22830),
        T = n(37812),
        N = n(19841),
        S = n(75908),
        Z = n(82841),
        P = n(36218),
        F = n(88038),
        I = n(87316),
        D = n(59110),
        E = n(32983),
        L = n(21722),
        U = n(39889),
        A = n(33733),
        R = n(25260),
        B = n(44544),
        O = n(91530),
        q = n.n(O),
        z = n(19208),
        H = n.n(z),
        W = n(81292),
        V = n(32787),
        J = n(46110),
        G = n(59114),
        $ = n(48727),
        Q = n(35448),
        Y = n(32165),
        X = (0, W.ZP)(function () {
          return { isModalOpen: !1 };
        }),
        K = {
          setIsModalOpen: function (e) {
            X.setState({ isModalOpen: e });
          },
        };
      function ee(e) {
        var t = e.className,
          n = e.iconSize,
          r = (0, D.ec)(function (e) {
            return e.currentWorkspace;
          }),
          a = (0, D.ec)(D.F_.isPersonalWorkspace),
          i = (0, V.kP)().session;
        return !r || (a && (null == i ? void 0 : i.user) !== void 0)
          ? (0, l.jsx)(J.Yt, {
              user: null == i ? void 0 : i.user,
              size: "redesign",
            })
          : (0, l.jsx)("div", {
              className:
                "flex items-center justify-center rounded-md bg-blue-100 " + t,
              children: (0, l.jsx)(j.ZP, {
                icon: A.Z,
                size: void 0 === n ? "small" : n,
                className: "text-blue-400",
              }),
            });
      }
      function et(e) {
        var t,
          n,
          r = e.workspace,
          a = e.onResetThread,
          i = (0, V.kP)().session,
          o = (0, D.ec)(function (e) {
            return e.currentWorkspace;
          }),
          s = (null == o ? void 0 : o.id) === r.id,
          d =
            ((t = (0, Q.NL)()),
            (n = (0, u.useContext)(E.QL).onEnableHistory),
            (0, u.useCallback)(
              (0, L._)(function () {
                return (0, U.Jh)(this, function (e) {
                  return t.invalidateQueries(), n(), a && a(), [2];
                });
              }),
              [n, a, t]
            )),
          c = (0, v.useRouter)(),
          f = (0, u.useCallback)(
            (0, L._)(function () {
              return (0, U.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (
                      ("workspace" === r.structure
                        ? (0, B.setCookie)(D.Yl, r.id)
                        : (0, B.setCookie)(D.Yl, ""),
                      D.w_.setCurrentWorkspace(r),
                      !("/" !== c.asPath))
                    )
                      return [3, 2];
                    return [4, c.push("/")];
                  case 1:
                    e.sent(), (e.label = 2);
                  case 2:
                    return [4, d()];
                  case 3:
                    return e.sent(), K.setIsModalOpen(!1), [2];
                }
              });
            }),
            [r, c, d]
          ),
          h = (0, Y.Ix)(r),
          g = (0, Y.qH)(r),
          m = (0, l.jsx)("div", {
            className:
              "flex h-10 w-10 items-center justify-center rounded-md bg-blue-100",
            children: (0, l.jsx)(j.ZP, {
              icon: A.Z,
              size: "small",
              className: "text-blue-400",
            }),
          });
        if ("personal" === r.structure) {
          if (!(null == i ? void 0 : i.user)) return null;
          m = (0, l.jsx)("div", {
            className: "flex h-10 w-10 items-center justify-center",
            children: (0, l.jsx)(H(), {
              alt: "Profile",
              src: i.user.picture,
              width: 32,
              height: 32,
              className:
                "flex h-10 w-10 items-center justify-center rounded-md",
            }),
          });
        }
        return (0, l.jsxs)(s ? "div" : "button", {
          onClick: s ? q() : f,
          className: (0, N.Z)({
            "flex w-full items-center gap-2 rounded-lg  p-4 hover:bg-gray-50 focus:bg-gray-50 dark:hover:bg-gray-800 dark:focus:bg-gray-800":
              !0,
            "bg-gray-50 dark:bg-gray-800": s,
          }),
          children: [
            (0, l.jsxs)("div", {
              className: "flex w-full gap-4",
              children: [
                m,
                (0, l.jsxs)("div", {
                  className:
                    "flex w-full flex-1 flex-col items-start justify-start gap-2",
                  children: [
                    (0, l.jsx)("div", {
                      className: "inline align-top font-medium",
                      children: h,
                    }),
                    (0, l.jsx)("div", {
                      className: "text-sm text-gray-500",
                      children: g,
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: "flex h-full items-center p-1",
              children:
                s &&
                (0, l.jsx)("div", {
                  className: "",
                  children: (0, l.jsx)(j.ZP, { icon: R.Z, size: "medium" }),
                }),
            }),
          ],
        });
      }
      function en(e) {
        var t = e.data,
          n = e.onResetThread,
          r = t.map(function (e) {
            return (0, l.jsx)(et, { workspace: e, onResetThread: n }, e.id);
          });
        return (0, l.jsx)("div", {
          className: "flex w-full flex-col gap-2",
          children: r,
        });
      }
      function er(e) {
        var t = e.onResetThread,
          n = X().isModalOpen,
          r = (0, Y._O)(),
          a = (0, S.Z)(),
          i = (0, u.useCallback)(function () {
            K.setIsModalOpen(!1);
          }, []);
        return 0 === r.length
          ? null
          : (0, l.jsx)($.Z, {
              onClose: i,
              closeButton: (0, l.jsx)(G.ZP.CloseButton, { onClose: i }),
              type: "success",
              isOpen: n,
              size: "normal",
              title: a.formatMessage(ea.workspaceSwitcherTitle),
              children: (0, l.jsx)("div", {
                className: "flex w-full items-center justify-between",
                children: (0, l.jsx)(en, { data: r, onResetThread: t }),
              }),
            });
      }
      var ea = (0, y.vU)({
          workspaceSwitcherTitle: {
            id: "workspaceSwitcher.title",
            defaultMessage: "Choose Account",
            description: "title for account switcher modal",
          },
        }),
        ei = n(66958),
        eo = n(81949),
        es = n(13451),
        el = n(56115),
        eu = n(32402),
        ed = n(19051),
        ec = n(870),
        ef = n(25345),
        eh = n(19265);
      function eg(e) {
        var t = e.accept,
          n = e.onFilePicked,
          r = e.loading,
          a = e.disabled,
          i = e.className,
          o = e.text,
          s = e.multiple,
          d = (0, u.useRef)(null),
          c = (0, u.useCallback)(function () {
            var e;
            null === (e = d.current) || void 0 === e || e.click();
          }, []),
          f = (0, u.useCallback)(
            function (e) {
              var t = e.target.files;
              t && t.length > 0 && (n(Array.from(t)), (e.target.value = ""));
            },
            [n]
          );
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(ei.z, {
              onClick: c,
              disabled: a || r,
              color: "none",
              className: i,
              children: (0, l.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                  r
                    ? (0, l.jsx)(eh.Z, { className: "h-4 w-4" })
                    : (0, l.jsx)(j.ZP, { icon: x.OvN, size: "small" }),
                  o && (0, l.jsx)("span", { children: o }),
                ],
              }),
            }),
            (0, l.jsx)("input", {
              type: "file",
              accept: t,
              ref: d,
              className: "hidden",
              onChange: f,
              multiple: void 0 !== s && s,
            }),
          ],
        });
      }
      var em = n(25094),
        ep = n(97688),
        ev = n(57924),
        ex = n(24396),
        eb = (0, y.vU)({
          errorLoadingFiles: {
            id: "filesModal.errorLoadingFiles",
            defaultMessage: "Failed to load files",
            description: "Error message when loading files fails",
          },
        }),
        ey = [
          "application/pdf",
          "text/plain",
          "text/markdown",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          "text/csv",
        ],
        ew = (0, y.vU)({
          myFiles: {
            id: "filesModal.myFiles",
            defaultMessage: "My Files",
            description: "Title for the files modal",
          },
          noFilesFound: {
            id: "filesModal.noFilesFound",
            defaultMessage: "No files found.",
            description: "Message displayed when no files are found",
          },
          uploadFile: {
            id: "filesModal.uploadFile",
            defaultMessage: "Upload File",
            description: "Label for the upload file button",
          },
          fileDownloadFailed: {
            id: "filesModal.fileDownloadFailed",
            defaultMessage: "File download failed. Please try again.",
            description: "Error message when file download fails",
          },
          fileDeleteFailed: {
            id: "filesModal.fileDeleteFailed",
            defaultMessage: "File delete failed. Please try again.",
            description: "Error message when file delete fails",
          },
          fileUploadFailed: {
            id: "filesModal.fileUploadFailed",
            defaultMessage: "File upload failed. Please try again.",
            description: "Error message when file upload fails",
          },
          fileUploaded: {
            id: "filesModal.fileUploaded",
            defaultMessage: "Uploaded file",
            description: "Success message when file is uploaded",
          },
          fileDeleted: {
            id: "filesModal.fileDeleted",
            defaultMessage: "File deleted",
            description: "Success message when file is deleted",
          },
          allFilesDeleted: {
            id: "filesModal.allFilesDeleted",
            defaultMessage: "All files deleted",
            description: "Success message when all files are deleted",
          },
          allFilesDeleteFailed: {
            id: "filesModal.allFilesDeletedFailed",
            defaultMessage: "All files delete failed. Please try again.",
            description: "Error message when all files delete fails",
          },
          confirmDeleteAll: {
            id: "filesModal.confirmDeleteAll",
            defaultMessage: "Are you sure you want to delete all files?",
            description: "Confirmation message for deleting all files",
          },
          downloadAll: {
            id: "filesModal.downloadAll",
            defaultMessage: "Download All",
            description: "Label for the download all button",
          },
          deleteAll: {
            id: "filesModal.deleteAll",
            defaultMessage: "Delete All",
            description: "Label for the delete all button",
          },
          name: {
            id: "filesModal.name",
            defaultMessage: "Name",
            description: "Label for the name column",
          },
          date: {
            id: "filesModal.date",
            defaultMessage: "Date",
            description: "Label for the date column",
          },
          size: {
            id: "filesModal.size",
            defaultMessage: "Size",
            description: "Label for the size column",
          },
          successfullyEmbeddedFileTooltip: {
            id: "filesModal.successfullyEmbeddedFileTooltip",
            defaultMessage: "Successfully processed file for searching",
            description: "Tooltip for the successfully embedded file icon",
          },
          failedToEmbedFileTooltip: {
            id: "filesModal.failedToEmbedFileTooltip",
            defaultMessage:
              "Failed to process file for searching,\nplease try deleting and re-uploading",
            description: "Tooltip for the failed to embed file icon",
          },
          embeddingFileTooltip: {
            id: "filesModal.embeddingFileTooltip",
            defaultMessage: "Processing file for searching...",
            description: "Tooltip for the embedding file icon",
          },
          deleteHistoryModalCancel: {
            id: "filesModal.deleteHistoryModalCancel",
            defaultMessage: "Cancel",
            description: "Label for the cancel button",
          },
          confirmDownloadAll: {
            id: "filesModal.confirmDownloadAll",
            defaultMessage: "Are you sure you want to download all files?",
            description: "Confirmation message for downloading all files",
          },
          confirmCancelDownloadAll: {
            id: "filesModal.confirmCancelDownloadAll",
            defaultMessage: "Cancel Download All",
            description:
              "Label for the cancel download all button in the confirmation modal",
          },
          tooManyFilesWithSameName: {
            id: "filesModal.tooManyFilesWithSameName",
            defaultMessage:
              "Too many files with the same name. Please rename your file.",
            description: "Error message when too many files have the same name",
          },
          tooManyFilesUploadedAtOnce: {
            id: "filesModal.tooManyFilesUploadedAtOnce",
            defaultMessage:
              "You can only upload up to {maxFiles} files at a time.",
            description:
              "Error message when too many files are uploaded at once",
          },
          totalFileSizeExceedsLimit: {
            id: "filesModal.totalFileSizeExceedsLimit",
            defaultMessage:
              "The total size of the files exceeds the limit of {maxSize}.",
            description:
              "Error message when the total file size exceeds the limit",
          },
          filesModalDescription: {
            id: "filesModal.filesModalDescription",
            defaultMessage:
              "Files can be used with the My Files Browsing model. {totalUploadedSize} / {maxFileSize} of storage used.",
            description: "Description for the files modal",
          },
        });
      ((r = i || (i = {})).Uploading = "uploading"), (r.Deleting = "deleting");
      var ej = function (e, t) {
        for (
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1e3,
            r = 1,
            a = e,
            i = e.lastIndexOf("."),
            o = i >= 0 ? e.slice(0, i) : e,
            s = i >= 0 ? e.slice(i) : "";
          t.find(function (e) {
            return e.name === a;
          }) && r <= n;

        )
          (a = "".concat(o, " (").concat(r, ")").concat(s)), r++;
        if (r > n) throw Error();
        return a;
      };
      function e_(e) {
        var t = e.label,
          n = e.children;
        return (0, l.jsx)(ev.u, {
          side: "top",
          size: "xsmall",
          sideOffset: 4,
          label: t,
          children: n,
        });
      }
      function eC(e) {
        var t = e.file,
          n = e.refetch,
          r = e.handleFileDelete,
          a = e.handleFileDeleteFailed,
          o = e.session,
          s = e.downloadedFiles,
          d = e.setDownloadedFiles,
          c = (0, u.useMemo)(
            function () {
              return (0, el.Z)(new Date(t.ready_time), "MMM d, yyyy");
            },
            [t.ready_time]
          ),
          f = (0, u.useMemo)(
            function () {
              var e;
              return (e = t.size) < 1048576
                ? "".concat((e / 1024).toFixed(0), " KB")
                : "".concat((e / 1048576).toFixed(1), " MB");
            },
            [t.size]
          ),
          h = (0, S.Z)(),
          g = (0, em.O6)(),
          m = (0, u.useCallback)(
            (0, L._)(function () {
              return (0, U.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, g(t.id, t.name)];
                  case 1:
                    return e.sent() && d((0, eo._)(s).concat([t.id])), [2];
                }
              });
            }),
            [t, s, d, g]
          ),
          p = (0, u.useCallback)(
            (0, L._)(function () {
              return (0, U.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (!o) return [2];
                    r(t), (e.label = 1);
                  case 1:
                    return (
                      e.trys.push([1, 4, , 5]),
                      [4, w.ZP.deleteFileFromFileService(t.id, o.accessToken)]
                    );
                  case 2:
                    return (
                      e.sent(),
                      ep.m.success(h.formatMessage(ew.fileDeleted)),
                      [4, n()]
                    );
                  case 3:
                    return e.sent(), [3, 5];
                  case 4:
                    return (
                      e.sent(),
                      a(t),
                      ep.m.danger(h.formatMessage(ew.fileDeleteFailed)),
                      [3, 5]
                    );
                  case 5:
                    return [2];
                }
              });
            }),
            [r, a, o, t, n, h]
          );
        return (0, l.jsxs)(ef.Z.Row, {
          disabled: t.state === i.Uploading,
          children: [
            (0, l.jsx)(ef.Z.Cell, {
              children: (0, l.jsxs)("div", {
                className: "inline-flex max-w-full gap-2 align-top",
                children: [
                  t.retrieval_index_status === eu.Xf.Success
                    ? (0, l.jsx)(e_, {
                        label: h.formatMessage(
                          ew.successfullyEmbeddedFileTooltip
                        ),
                        children: (0, l.jsx)(j.ZP, {
                          icon: x._rq,
                          size: "xsmall",
                          className: "mt-1.5 flex-shrink-0 text-green-600",
                        }),
                      })
                    : t.retrieval_index_status === eu.Xf.Failed
                    ? (0, l.jsx)(e_, {
                        label: h.formatMessage(ew.failedToEmbedFileTooltip),
                        children: (0, l.jsx)(j.ZP, {
                          icon: x.$Rx,
                          size: "xsmall",
                          className: "mt-1.5 flex-shrink-0 text-red-500",
                        }),
                      })
                    : (0, l.jsx)(e_, {
                        label: h.formatMessage(ew.embeddingFileTooltip),
                        children: (0, l.jsx)(eh.Z, {
                          className:
                            "mt-1 flex-shrink-0 text-gray-500 dark:text-gray-100",
                        }),
                      }),
                  (0, l.jsx)("button", {
                    className: (0, N.Z)(
                      s.includes(t.id)
                        ? "text-[#800080]"
                        : "hover:text-gray-900 dark:hover:text-gray-100",
                      "truncate whitespace-normal break-words text-left focus:outline-none"
                    ),
                    onClick: m,
                    children: (0, l.jsx)("span", { children: t.name }),
                  }),
                ],
              }),
            }),
            (0, l.jsx)(ef.Z.Cell, {
              className: "align-top",
              children: t.state !== i.Uploading && c,
            }),
            (0, l.jsx)(ef.Z.Cell, {
              className: "align-top",
              children: t.state !== i.Uploading && f,
            }),
            (0, l.jsx)(ef.Z.Cell, {
              textAlign: "right",
              className: "align-top",
              children: (0, l.jsx)("div", {
                className: "flex justify-end space-x-2",
                children:
                  t.state !== i.Uploading &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("button", {
                        className: "text-gray-500 hover:text-gray-600",
                        onClick: m,
                        children: (0, l.jsx)(j.ZP, {
                          icon: x._hL,
                          size: "small",
                        }),
                      }),
                      (0, l.jsx)("button", {
                        className: "text-gray-500 hover:text-gray-600",
                        onClick: p,
                        children: (0, l.jsx)(j.ZP, {
                          icon: x.Ybf,
                          size: "small",
                        }),
                      }),
                    ],
                  }),
              }),
            }),
          ],
        });
      }
      function eM() {
        var e,
          t,
          n,
          r,
          a,
          o,
          s,
          d,
          f,
          g,
          m = (0, S.Z)(),
          p =
            ((t = (e = (0, V.kP)()).session),
            (n = e.loading),
            (r = (0, D.hz)()),
            (a = (0, S.Z)()),
            (0, ex.a)(
              ["files"],
              (0, L._)(function () {
                return (0, U.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        w.ZP.listFiles(t.accessToken).catch(function () {
                          return (
                            ep.m.danger(a.formatMessage(eb.errorLoadingFiles)),
                            { files: [] }
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              {
                enabled:
                  !n &&
                  (null == t ? void 0 : t.accessToken) != null &&
                  r.has("files_list_ui"),
              }
            )),
          v = p.data,
          y = p.isLoading,
          _ = p.refetch,
          M = (0, k._)((0, u.useState)([]), 2),
          T = M[0],
          N = M[1],
          Z = (0, u.useRef)([]),
          P = (0, k._)((0, u.useState)([]), 2),
          F = P[0],
          I = P[1],
          E = (0, ed.Z)(),
          A = (0, V.kP)().session,
          R = (0, u.useMemo)(
            function () {
              return null !== (g = null == v ? void 0 : v.files) && void 0 !== g
                ? g
                : [];
            },
            [v]
          ),
          B = (0, k._)((0, u.useState)([]), 2),
          O = B[0],
          q = B[1],
          z = (0, k._)((0, u.useState)(!1), 2),
          H = z[0],
          W = z[1],
          J = (0, k._)((0, u.useState)(!1), 2),
          Q = J[0],
          Y = J[1],
          X = (0, em.qS)(),
          K = (0, u.useCallback)(
            function () {
              c.vm.closeFilesModal(), T.length > 0 && _();
            },
            [_, T]
          ),
          ee = (0, es.D)({
            mutationFn: function (e) {
              return w.ZP.uploadFileUsingFileService(
                e,
                eu.Ei.MyFiles,
                A.accessToken
              );
            },
            onMutate:
              ((o = (0, L._)(function (e) {
                return (0, U.Jh)(this, function (t) {
                  return [2, e];
                });
              })),
              function (e) {
                return o.apply(this, arguments);
              }),
            onSuccess:
              ((s = (0, L._)(function (e) {
                return (0, U.Jh)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, _()];
                    case 1:
                      return (
                        t.sent(),
                        ep.m.success(m.formatMessage(ew.fileUploaded)),
                        Z.current.push(e.file_id),
                        I((0, eo._)(Z.current)),
                        [2]
                      );
                  }
                });
              })),
              function (e) {
                return s.apply(this, arguments);
              }),
            onError: function (e, t) {
              N(function (e) {
                return e.filter(function (e) {
                  return e.name !== t.name;
                });
              }),
                ep.m.danger(m.formatMessage(ew.fileUploadFailed));
            },
          }),
          et = (0, u.useCallback)(
            ((d = (0, L._)(function (e) {
              var t;
              return (0, U.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (!A) return [2];
                    n.label = 1;
                  case 1:
                    return (
                      n.trys.push([1, 6, , 7]),
                      [4, w.ZP.getFileInfo(e, A.accessToken)]
                    );
                  case 2:
                    if (
                      !(
                        (t = n.sent()).retrieval_index_status ===
                          eu.Xf.Success ||
                        t.retrieval_index_status === eu.Xf.Failed
                      )
                    )
                      return [3, 4];
                    return (
                      (Z.current = Z.current.filter(function (t) {
                        return t !== e;
                      })),
                      [4, _()]
                    );
                  case 3:
                    return n.sent(), [3, 5];
                  case 4:
                    E(function () {
                      return et(e);
                    }, 500),
                      (n.label = 5);
                  case 5:
                    return [3, 7];
                  case 6:
                    return (
                      n.sent(),
                      (Z.current = Z.current.filter(function (t) {
                        return t !== e;
                      })),
                      [3, 7]
                    );
                  case 7:
                    return [2];
                }
              });
            })),
            function (e) {
              return d.apply(this, arguments);
            }),
            [_, A, E]
          );
        (0, u.useEffect)(
          function () {
            Z.current.length > 0 && et(Z.current[Z.current.length - 1]);
          },
          [F, et]
        );
        var en = (0, u.useCallback)(
            (0, L._)(function () {
              var e;
              return (0, U.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (!A) return [2];
                    t.label = 1;
                  case 1:
                    return (
                      t.trys.push([1, 3, , 4]),
                      [
                        4,
                        X(
                          (e = R.filter(function (e) {
                            return e.use_case === eu.Ei.MyFiles;
                          })),
                          30
                        ),
                      ]
                    );
                  case 2:
                    return (
                      t.sent(),
                      q(
                        (0, eo._)(O).concat(
                          (0, eo._)(
                            e.map(function (e) {
                              return e.id;
                            })
                          )
                        )
                      ),
                      [3, 4]
                    );
                  case 3:
                    return (
                      t.sent(),
                      ep.m.danger(m.formatMessage(ew.fileDownloadFailed)),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            }),
            [A, R, m, O, q, X]
          ),
          er = (0, u.useCallback)(
            (0, L._)(function () {
              var e;
              return (0, U.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (
                      ((e = R.map(function (e) {
                        return (0, C._)((0, h._)({}, e), { state: i.Deleting });
                      })),
                      !A)
                    )
                      return [2];
                    N((0, eo._)(T).concat((0, eo._)(e))), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 4, , 5]),
                      [
                        4,
                        Promise.all(
                          e
                            .filter(function (e) {
                              return e.use_case === eu.Ei.MyFiles;
                            })
                            .map(function (e) {
                              return w.ZP.deleteFileFromFileService(
                                e.id,
                                A.accessToken
                              );
                            })
                        ),
                      ]
                    );
                  case 2:
                    return (
                      t.sent(),
                      ep.m.success(m.formatMessage(ew.allFilesDeleted)),
                      [4, _()]
                    );
                  case 3:
                    return t.sent(), [3, 5];
                  case 4:
                    return (
                      t.sent(),
                      N([]),
                      ep.m.danger(m.formatMessage(ew.allFilesDeleteFailed)),
                      [3, 5]
                    );
                  case 5:
                    return [2];
                }
              });
            }),
            [R, T, A, m, _]
          ),
          ea = (0, u.useCallback)(function () {
            W(!0);
          }, []),
          ei = (0, u.useCallback)(function () {
            Y(!0);
          }, []),
          el = (0, u.useCallback)(
            (0, L._)(function () {
              return (0, U.Jh)(this, function (e) {
                return W(!1), er(), [2];
              });
            }),
            [er]
          ),
          ev = (0, u.useCallback)(function () {
            W(!1);
          }, []),
          e_ = (0, u.useCallback)(
            (0, L._)(function () {
              return (0, U.Jh)(this, function (e) {
                return Y(!1), en(), [2];
              });
            }),
            [en]
          ),
          eM = (0, u.useCallback)(function () {
            Y(!1);
          }, []),
          ek = (0, u.useCallback)(function (e, t) {
            return e.findIndex(function (e) {
              return e.name === t.name && e.state !== i.Uploading;
            });
          }, []),
          eT = (0, u.useCallback)(function (e) {
            var t = (0, C._)((0, h._)({}, e), { state: i.Deleting });
            N(function (e) {
              return (0, eo._)(e).concat([t]);
            });
          }, []),
          eN = (0, u.useCallback)(function (e) {
            N(function (t) {
              return t.filter(function (t) {
                return t.name !== e.name;
              });
            });
          }, []),
          eS = (0, u.useMemo)(
            function () {
              return (0, eo._)(R)
                .concat((0, eo._)(T))
                .filter(function (e, t, n) {
                  if (e.use_case !== eu.Ei.MyFiles) return !1;
                  e.retrieval_index_status === eu.Xf.Success ||
                    e.retrieval_index_status === eu.Xf.Failed ||
                    Z.current.includes(e.id) ||
                    (Z.current.push(e.id), I((0, eo._)(Z.current)));
                  var r = ek(n, e);
                  return e.state === i.Uploading && -1 !== r
                    ? (N(function (t) {
                        return t.filter(function (t) {
                          return t.name !== e.name || t.state !== i.Uploading;
                        });
                      }),
                      !1)
                    : e.state === i.Deleting &&
                      -1 ===
                        n.findIndex(function (t) {
                          return t.name === e.name && t.state !== i.Deleting;
                        })
                    ? (N(function (t) {
                        return t.filter(function (t) {
                          return t.name !== e.name;
                        });
                      }),
                      !1)
                    : -1 ===
                      n.findIndex(function (t) {
                        return t.name === e.name && t.state === i.Deleting;
                      });
                })
                .sort(function (e, t) {
                  return (
                    new Date(t.ready_time).getTime() -
                    new Date(e.ready_time).getTime()
                  );
                });
            },
            [R, ek, T]
          ),
          eZ = (0, u.useMemo)(
            function () {
              return eS.reduce(function (e, t) {
                return e + (t.size || 0);
              }, 0);
            },
            [eS]
          ),
          eP = (0, u.useMemo)(
            function () {
              return eZ / 1073741824;
            },
            [eZ]
          ),
          eF = (0, u.useCallback)(
            ((f = (0, L._)(function (e) {
              var t, n, r, a, o, s, l, u, d, c;
              return (0, U.Jh)(this, function (f) {
                if (e.length > 10)
                  return (
                    ep.m.warning(
                      m.formatMessage(ew.tooManyFilesUploadedAtOnce, {
                        maxFiles: 10,
                      })
                    ),
                    [2]
                  );
                (t = eZ), (n = !0), (r = !1), (a = void 0);
                try {
                  for (
                    o = e[Symbol.iterator]();
                    !(n = (s = o.next()).done);
                    n = !0
                  ) {
                    if (((l = s.value), (t += l.size) > 2147483648)) {
                      ep.m.warning(
                        m.formatMessage(ew.totalFileSizeExceedsLimit, {
                          maxSize: "".concat(2, "GB"),
                        })
                      );
                      break;
                    }
                    if (
                      ((u = l.name),
                      R.filter(function (e) {
                        return e.use_case === eu.Ei.MyFiles;
                      }).find(function (e) {
                        return e.name === u;
                      }))
                    )
                      try {
                        u = ej(u, R);
                      } catch (e) {
                        ep.m.warning(
                          m.formatMessage(ew.tooManyFilesWithSameName)
                        );
                        break;
                      }
                    (d = {
                      id: "",
                      name: u,
                      ready_time: new Date().toISOString(),
                      use_case: eu.Ei.MyFiles,
                      size: l.size,
                      state: i.Uploading,
                    }),
                      N(function (e) {
                        return (0, eo._)(e).concat([d]);
                      }),
                      (c = new File([l], u, { type: l.type })),
                      ee.mutate(c);
                  }
                } catch (e) {
                  (r = !0), (a = e);
                } finally {
                  try {
                    n || null == o.return || o.return();
                  } finally {
                    if (r) throw a;
                  }
                }
                return [2];
              });
            })),
            function (e) {
              return f.apply(this, arguments);
            }),
            [R, m, ee, eZ]
          );
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)($.Z, {
              isOpen: !0,
              onClose: K,
              size: "custom",
              className: "max-w-5xl",
              type: "success",
              title: m.formatMessage(ew.myFiles),
              closeButton: (0, l.jsx)(G.ZP.CloseButton, { onClose: K }),
              children: [
                y
                  ? (0, l.jsx)("div", {
                      className: "flex h-64 items-center justify-center",
                      children: (0, l.jsx)(eh.Z, {
                        className: "text-gray-500",
                      }),
                    })
                  : eS.length > 0
                  ? (0, l.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "mb-2 text-xs text-gray-600 dark:text-gray-300",
                          children: (0, l.jsx)(
                            b.Z,
                            (0, C._)((0, h._)({}, ew.filesModalDescription), {
                              values: {
                                totalUploadedSize: (0, l.jsx)("span", {
                                  className: "font-bold",
                                  children: "".concat(
                                    Number(eP).toPrecision(2),
                                    "GB"
                                  ),
                                }),
                                maxFileSize: "".concat(2, "GB"),
                              },
                            })
                          ),
                        }),
                        (0, l.jsxs)(ef.Z.Root, {
                          className: "max-h-[28rem]",
                          fixed: !0,
                          size: "compact",
                          children: [
                            (0, l.jsxs)(ef.Z.Header, {
                              children: [
                                (0, l.jsx)(ef.Z.HeaderCell, {
                                  className:
                                    "max-w-8/12 w-8/12 dark:bg-gray-900",
                                  children: m.formatMessage(ew.name),
                                }),
                                (0, l.jsx)(ef.Z.HeaderCell, {
                                  children: m.formatMessage(ew.date),
                                }),
                                (0, l.jsx)(ef.Z.HeaderCell, {
                                  children: m.formatMessage(ew.size),
                                }),
                                (0, l.jsx)(ef.Z.HeaderCell, {
                                  textAlign: "right",
                                  children: (0, l.jsxs)(ec.Z.Root, {
                                    children: [
                                      (0, l.jsx)(ec.Z.Trigger, {
                                        children: (0, l.jsx)(j.ZP, {
                                          icon: x.K9M,
                                        }),
                                      }),
                                      (0, l.jsx)(ec.Z.Portal, {
                                        children: (0, l.jsxs)(ec.Z.Content, {
                                          children: [
                                            (0, l.jsxs)(ec.Z.Item, {
                                              onClick: ei,
                                              className: "flex gap-2",
                                              children: [
                                                (0, l.jsx)(j.ZP, {
                                                  icon: x._hL,
                                                  size: "small",
                                                }),
                                                (0, l.jsx)("span", {
                                                  children: m.formatMessage(
                                                    ew.downloadAll
                                                  ),
                                                }),
                                              ],
                                            }),
                                            (0, l.jsxs)(ec.Z.Item, {
                                              onClick: ea,
                                              className: "flex gap-2",
                                              children: [
                                                (0, l.jsx)(j.ZP, {
                                                  icon: x.Ybf,
                                                  size: "small",
                                                }),
                                                (0, l.jsx)("span", {
                                                  children: m.formatMessage(
                                                    ew.deleteAll
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, l.jsx)(ef.Z.Body, {
                              children: eS.map(function (e, t) {
                                return (0,
                                l.jsx)(eC, { file: e, refetch: _, handleFileDelete: eT, handleFileDeleteFailed: eN, session: A, downloadedFiles: O, setDownloadedFiles: q }, t);
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, l.jsx)(b.Z, (0, h._)({}, ew.noFilesFound)),
                (0, l.jsx)(eg, {
                  accept: ey.join(","),
                  onFilePicked: eF,
                  loading: ee.isLoading,
                  disabled: ee.isLoading,
                  className:
                    "mt-4 flex items-center space-x-2 rounded bg-green-600 px-4 py-2 text-white",
                  text: m.formatMessage(ew.uploadFile),
                  multiple: !0,
                }),
              ],
            }),
            (0, l.jsx)($.Z, {
              isOpen: H,
              onClose: function () {
                return W(!1);
              },
              type: "danger",
              title: m.formatMessage(ew.confirmDeleteAll),
              primaryButton: (0, l.jsx)(G.ZP.Button, {
                title: m.formatMessage(ew.deleteAll),
                color: "danger",
                onClick: el,
              }),
              secondaryButton: (0, l.jsx)(G.ZP.Button, {
                title: m.formatMessage(ew.deleteHistoryModalCancel),
                color: "neutral",
                onClick: ev,
              }),
            }),
            (0, l.jsx)($.Z, {
              isOpen: Q,
              onClose: function () {
                return Y(!1);
              },
              type: "success",
              title: m.formatMessage(ew.confirmDownloadAll),
              primaryButton: (0, l.jsx)(G.ZP.Button, {
                title: m.formatMessage(ew.downloadAll),
                color: "primary",
                onClick: e_,
              }),
              secondaryButton: (0, l.jsx)(G.ZP.Button, {
                title: m.formatMessage(ew.confirmCancelDownloadAll),
                color: "neutral",
                onClick: eM,
              }),
            }),
          ],
        });
      }
      var ek = n(181),
        eT = n(86546),
        eN = n(13002),
        eS = n(21437),
        eZ = n(86433),
        eP = n(25422),
        eF = n(10604),
        eI = n(61119),
        eD = n(44925),
        eE = n(68789),
        eL = ["sharedConversations"],
        eU = (0, y.vU)({
          name: {
            id: "sharedConversationModal.name",
            defaultMessage: "Name",
            description: "Table column header",
          },
          dateShared: {
            id: "sharedConversationModal.dateShared",
            defaultMessage: "Date shared",
            description: "Table column header",
          },
          loading: {
            id: "sharedConversationModal.loading",
            defaultMessage: "Loading...",
            description: "Loading message",
          },
          somethingWentWrong: {
            id: "sharedConversationModal.somethingWentWrong",
            defaultMessage: "Something went wrong...",
            description: "Error message",
          },
          retry: {
            id: "sharedConversationModal.retry",
            defaultMessage: "Retry",
            description: "Retry button text",
          },
          noSharedConversations: {
            id: "sharedConversationModal.noSharedConversations",
            defaultMessage: "You have no shared links.",
            description: "No shared links message",
          },
          title: {
            id: "sharedConversationModal.title",
            defaultMessage: "Shared Links",
            description: "Shared links modal title",
          },
          goToOriginConversation: {
            id: "sharedConversationModal.goToOriginConversation",
            defaultMessage: "View source chat",
            description: "Label for conversation icon",
          },
          deleteSharedLink: {
            id: "sharedConversationModal.deleteSharedLink",
            defaultMessage: "Delete shared link",
            description: "Label for delete shared link icon",
          },
          deleteSharedLinkFailed: {
            id: "sharedConversationModal.deleteSharedLinkFailed",
            defaultMessage: "Deleting shared link failed",
            description: "Toaster message when deleting share link fails",
          },
          deleteAllSharedLinks: {
            id: "sharedConversationModal.deleteSharedAllConversations",
            defaultMessage: "Delete all shared links",
            description: "Menu item for deleting all shared links",
          },
          deleteAllSharedLinksConfirm: {
            id: "sharedConversationModal.deleteSharedAllConversationsConfirm",
            defaultMessage:
              "Are you sure you want to delete all your shared links?",
            description: "Confirmation message for deleting share links",
          },
          deleteAllSharedLinksFailed: {
            id: "sharedConversationModal.deleteSharedAllConversationsFailed",
            defaultMessage: "Deleting shared links failed",
            description: "Toaster message when deleting all share links fails",
          },
        });
      function eA() {
        var e = (0, Q.NL)(),
          t = (0, S.Z)(),
          n = (0, es.D)({
            mutationFn: function () {
              return w.ZP.deleteAllSharedConversations();
            },
            onSettled: function () {
              e.invalidateQueries(eL);
            },
            onError: function () {
              ep.m.danger(t.formatMessage(eU.deleteAllSharedLinksFailed));
            },
          }).mutate;
        return (0, l.jsxs)(eE.fC, {
          children: [
            (0, l.jsx)(eE.xz, {
              asChild: !0,
              children: (0, l.jsx)("button", {
                className:
                  "text-gray-500 hover:text-gray-600 radix-state-open:text-gray-600 dark:hover:text-gray-400 dark:radix-state-open:text-gray-400",
                children: (0, l.jsx)(j.ZP, { icon: x.K9M }),
              }),
            }),
            (0, l.jsx)(eE.Uv, {
              children: (0, l.jsx)(eE.VY, {
                className:
                  "min-w-[8rem] rounded-md bg-white py-1 shadow-lg dark:bg-gray-800",
                side: "bottom",
                sideOffset: 4,
                children: (0, l.jsx)(eE.ck, {
                  onClick: function () {
                    window.confirm(
                      t.formatMessage(eU.deleteAllSharedLinksConfirm)
                    ) && n();
                  },
                  className:
                    "cursor-pointer select-none px-2 py-1 text-red-500 radix-highlighted:bg-gray-50 dark:radix-highlighted:bg-gray-700",
                  children: (0, l.jsx)(
                    b.Z,
                    (0, h._)({}, eU.deleteAllSharedLinks)
                  ),
                }),
              }),
            }),
          ],
        });
      }
      function eR() {
        return w.ZP.getSharedConversations();
      }
      function eB(e) {
        var t,
          n = e.sharedConversation,
          r = (0, S.Z)(),
          a = (0, Q.NL)(),
          i = (0, es.D)({
            mutationFn:
              ((t = (0, L._)(function (e) {
                var t;
                return (0, U.Jh)(this, function (n) {
                  return (
                    (t = e.sharedConversationId),
                    [2, w.ZP.deleteShareLink({ share_id: t })]
                  );
                });
              })),
              function (e) {
                return t.apply(this, arguments);
              }),
            onSettled: function () {
              a.invalidateQueries(eL);
            },
            onError: function () {
              ep.m.danger(r.formatMessage(eU.deleteSharedLinkFailed));
            },
          }),
          o = i.mutate,
          s = i.isLoading;
        return (0, l.jsxs)(ef.Z.Row, {
          disabled: s,
          children: [
            (0, l.jsx)(ef.Z.Cell, {
              children: (0, l.jsxs)("a", {
                href: "/share/".concat(n.id),
                target: "_blank",
                rel: "noreferrer",
                className:
                  "inline-flex items-center gap-2 align-top text-blue-500 dark:text-blue-400",
                children: [
                  (0, l.jsx)(j.ZP, { icon: x.XKb, className: "flex-shrink-0" }),
                  n.title,
                ],
              }),
            }),
            (0, l.jsx)(ef.Z.Cell, {
              children:
                null != n.create_time
                  ? (0, l.jsx)(y.Ji, {
                      value: n.create_time,
                      month: "long",
                      year: "numeric",
                      day: "numeric",
                    })
                  : null,
            }),
            (0, l.jsx)(ef.Z.Cell, {
              children: (0, l.jsxs)(ef.Z.Actions, {
                children: [
                  (0, l.jsx)(ev.u, {
                    label: r.formatMessage(eU.goToOriginConversation),
                    sideOffset: 4,
                    side: "top",
                    children: (0, l.jsx)("a", {
                      href: "/c/".concat(n.conversation_id),
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": r.formatMessage(eU.goToOriginConversation),
                      className:
                        "cursor-pointer text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                      children: (0, l.jsx)(j.ZP, { icon: x.IC0 }),
                    }),
                  }),
                  (0, l.jsx)(ev.u, {
                    label: r.formatMessage(eU.deleteSharedLink),
                    sideOffset: 4,
                    side: "top",
                    children: (0, l.jsx)("button", {
                      onClick: function () {
                        o({ sharedConversationId: n.id });
                      },
                      "aria-label": r.formatMessage(eU.deleteSharedLink),
                      className:
                        "text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                      children: (0, l.jsx)(j.ZP, { icon: x.Ybf }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function eO(e) {
        var t,
          n = e.onClose,
          r = (0, ex.a)({
            queryKey: eL,
            queryFn: eR,
            refetchOnMount: "always",
          }),
          a = r.data,
          i = r.isLoading,
          o = r.isError,
          s = r.refetch,
          u = (0, S.Z)();
        return (
          (t = i
            ? (0, l.jsx)("div", {
                className: "pb-8 text-gray-400 dark:text-gray-600",
                children: (0, l.jsx)(b.Z, (0, h._)({}, eU.loading)),
              })
            : o
            ? (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("div", {
                    className: "mb-4 text-red-500",
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, eU.somethingWentWrong)
                    ),
                  }),
                  (0, l.jsx)("div", {
                    children: (0, l.jsx)(ei.z, {
                      color: "neutral",
                      onClick: function () {
                        s();
                      },
                      children: (0, l.jsx)(b.Z, (0, h._)({}, eU.retry)),
                    }),
                  }),
                ],
              })
            : 0 === a.total
            ? (0, l.jsx)("div", {
                className: "pb-8 text-gray-600 dark:text-gray-400",
                children: (0, l.jsx)(
                  b.Z,
                  (0, h._)({}, eU.noSharedConversations)
                ),
              })
            : (0, l.jsxs)(ef.Z.Root, {
                className: "max-h-[28rem]",
                size: "compact",
                children: [
                  (0, l.jsxs)(ef.Z.Header, {
                    children: [
                      (0, l.jsx)(ef.Z.HeaderCell, {
                        children: (0, l.jsx)(b.Z, (0, h._)({}, eU.name)),
                      }),
                      (0, l.jsx)(ef.Z.HeaderCell, {
                        children: (0, l.jsx)(b.Z, (0, h._)({}, eU.dateShared)),
                      }),
                      (0, l.jsx)(ef.Z.HeaderCell, {
                        textAlign: "right",
                        children: (0, l.jsx)(eA, {}),
                      }),
                    ],
                  }),
                  (0, l.jsx)(ef.Z.Body, {
                    children: a.items.map(function (e) {
                      return (0, l.jsx)(eB, { sharedConversation: e }, e.id);
                    }),
                  }),
                ],
              })),
          (0, l.jsx)($.Z, {
            isOpen: !0,
            onClose: n,
            size: "custom",
            className: "max-w-5xl",
            type: "success",
            title: u.formatMessage(eU.title),
            closeButton: (0, l.jsx)(G.ZP.CloseButton, { onClose: n }),
            children: t,
          })
        );
      }
      var eq = n(16681);
      function ez(e) {
        var t = e.onChange,
          n = e.enabled,
          r = e.label,
          a = e.disabled,
          i = (0, u.useCallback)(
            function () {
              t(!n);
            },
            [n, t]
          );
        return (0, l.jsx)(eq.fC, {
          checked: n,
          disabled: a,
          onCheckedChange: i,
          "aria-label": r,
          className: (0, N.Z)(
            a && "cursor-not-allowed opacity-30",
            "bg-gray-200 radix-state-checked:bg-green-600",
            "relative h-[25px] w-[42px] cursor-pointer rounded-full"
          ),
          children: (0, l.jsx)(eq.bU, {
            className: (0, N.Z)(
              "block h-[21px] w-[21px] rounded-full",
              "translate-x-0.5 transition-transform duration-100 will-change-transform radix-state-checked:translate-x-[19px]",
              "bg-white shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
            ),
          }),
        });
      }
      function eH() {
        var e = (0, s._)(["block text-sm font-medium mb-1"]);
        return (
          (eH = function () {
            return e;
          }),
          e
        );
      }
      function eW(e) {
        var t,
          n,
          r = e.onClose,
          a = e.onToggleHistoryDisabled,
          i = e.onDeleteHistory,
          s = (0, S.Z)(),
          d = (0, _.LC)(),
          c = (0, f.w$)(),
          g = (0, k._)((0, u.useState)(!1), 2),
          m = g[0],
          p = g[1],
          v = (0, k._)((0, u.useState)(!1), 2),
          x = v[0],
          y = v[1],
          w = (0, k._)((0, u.useState)(!1), 2),
          j = w[0],
          M = w[1],
          T = (0, k._)((0, u.useState)(!1), 2),
          Z = T[0],
          P = T[1],
          I = (0, k._)((0, u.useState)(o.General), 2),
          L = I[0],
          U = I[1],
          A = (0, u.useContext)(E.QL),
          R = A.historyDisabled,
          B = A.toggleHistoryDisabled,
          O = (0, eI.OS)(function (e) {
            return e.isOpen;
          }),
          q = (0, D.hz)(),
          z = (0, D.ec)(D.F_.isBusinessWorkspace),
          H = !z && q.has(F.RJ),
          W = (0, V.kP)().session,
          J = (0, eS.Fl)(),
          Q = J.isBetaFeaturesUiEnabled,
          Y = J.isPluginsAvailable,
          X = J.isBrowsingAvailable,
          K = J.isCodeInterpreterAvailable,
          ee = (0, u.useCallback)(function () {
            p(!1);
          }, []),
          et = (0, u.useCallback)(function () {
            y(!1);
          }, []),
          en = (0, u.useCallback)(function () {
            M(!1);
          }, []),
          er = (0, u.useCallback)(function () {
            p(!0);
          }, []),
          ea = (0, u.useCallback)(function () {
            y(!0);
          }, []),
          ei = (0, u.useCallback)(function () {
            M(!0);
          }, []),
          eo = (0, u.useCallback)(
            function () {
              null == a || a(), B();
            },
            [a, B]
          ),
          es = (0, eZ.S)(),
          el = es.setupMfa,
          eu = es.isUsernamePassword,
          ed = es.removeMfa;
        return m
          ? (0, l.jsx)(eY, { onClose: ee })
          : x
          ? (0, l.jsx)(eQ, { onClose: et, onDeleteHistory: i })
          : j
          ? (0, l.jsx)(e1, { onClose: en })
          : Z
          ? (0, l.jsx)(eO, {
              onClose: function () {
                P(!1);
              },
            })
          : (0, l.jsx)($.Z, {
              isOpen: !0,
              onClose: r,
              size: "custom",
              className: "md:max-w-[680px]",
              type: "success",
              title: s.formatMessage(e3.settings),
              closeButton: (0, l.jsx)(G.ZP.CloseButton, { onClose: r }),
              children: (0, l.jsxs)(ek.fC, {
                className: "flex flex-col gap-6 md:flex-row",
                defaultValue: L,
                orientation: c ? "vertical" : void 0,
                onValueChange: function (e) {
                  U(e);
                },
                children: [
                  (0, l.jsxs)(ek.aV, {
                    className: (0, N.Z)(
                      "-ml-[8px] flex min-w-[180px] flex-shrink-0",
                      c
                        ? "flex-col"
                        : "flex-row rounded-lg bg-gray-100 p-1 dark:bg-gray-800/30"
                    ),
                    children: [
                      (0, l.jsx)(eX, {
                        value: o.General,
                        icon: eN.oq2,
                        label: (0, l.jsx)(b.Z, (0, h._)({}, e3.generalTab)),
                      }),
                      Q &&
                        (X || Y || K) &&
                        (0, l.jsx)(eX, {
                          value: o.BetaFeatures,
                          icon: eN.rTN,
                          label: (0, l.jsx)(b.Z, (0, h._)({}, e3.betaTab)),
                        }),
                      (0, l.jsx)(eX, {
                        value: o.DataControls,
                        icon: eN.tQn,
                        label: (0, l.jsx)(
                          b.Z,
                          (0, h._)({}, e3.dataControlsTab)
                        ),
                      }),
                    ],
                  }),
                  (0, l.jsxs)(eK, {
                    value: o.General,
                    children: [
                      (0, l.jsx)(e0, { children: (0, l.jsx)(e$, {}) }),
                      !z &&
                        q.has("tools3_dev") &&
                        (0, l.jsx)(e0, {
                          children: (0, l.jsx)(eJ, {
                            label: s.formatMessage(e3.openPluginDevtools),
                            enabled: O,
                            onChange: eI.Ds.setIsOpen,
                          }),
                        }),
                      (0, l.jsx)(e0, {
                        children: (0, l.jsx)(eG, {
                          color: "danger",
                          disabled: !d,
                          label: s.formatMessage(e3.clearChatLabel),
                          buttonLabel: s.formatMessage(e3.clearChatButton),
                          onClick: ea,
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)(eK, {
                    value: o.BetaFeatures,
                    children: (0, l.jsx)(eV, {}),
                  }),
                  (0, l.jsxs)(eK, {
                    value: o.DataControls,
                    children: [
                      !z &&
                        (0, l.jsx)(e0, {
                          children: (0, l.jsx)(eJ, {
                            label: s.formatMessage(e3.chatHistoryToggleLabel),
                            enabled: !R,
                            onChange: eo,
                            description: (0, l.jsx)(
                              b.Z,
                              (0, C._)(
                                (0, h._)({}, e3.chatHistoryDescription),
                                {
                                  values: {
                                    link: function (e) {
                                      return (0, l.jsx)("a", {
                                        href: "https://help.openai.com/en/articles/7730893 ",
                                        target: "_blank",
                                        className: "underline",
                                        rel: "noreferrer",
                                        children: e,
                                      });
                                    },
                                  },
                                }
                              )
                            ),
                          }),
                        }),
                      H &&
                        (0, l.jsx)(e0, {
                          children: (0, l.jsx)(eG, {
                            label: s.formatMessage(e3.sharedConversations),
                            buttonLabel: s.formatMessage(
                              e3.sharedConversationsButton
                            ),
                            onClick: function () {
                              P(!0);
                            },
                          }),
                        }),
                      (0, l.jsx)(e0, {
                        children: (0, l.jsx)(eG, {
                          label: s.formatMessage(e3.exportData),
                          buttonLabel: s.formatMessage(e3.exportButton),
                          onClick: er,
                        }),
                      }),
                      (0, l.jsx)(e0, {
                        children: (0, l.jsx)(eG, {
                          label: s.formatMessage(e3.deleteAccount),
                          buttonLabel: s.formatMessage(e3.deleteAccountButton),
                          color: "danger",
                          onClick: ei,
                        }),
                      }),
                      q.has(F.i) &&
                        !(null == W
                          ? void 0
                          : null === (t = W.user) || void 0 === t
                          ? void 0
                          : t.mfa) &&
                        eu &&
                        (0, l.jsx)(e0, {
                          children: (0, l.jsx)(eG, {
                            label: s.formatMessage(e3.enable2fa),
                            buttonLabel: s.formatMessage(e3.enable),
                            onClick: el,
                          }),
                        }),
                      (null == W
                        ? void 0
                        : null === (n = W.user) || void 0 === n
                        ? void 0
                        : n.mfa) &&
                        eu &&
                        (0, l.jsx)(e0, {
                          children: (0, l.jsx)(eG, {
                            label: s.formatMessage(e3.disable2fa),
                            buttonLabel: s.formatMessage(e3.disable),
                            onClick: ed,
                            color: "danger",
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            });
      }
      function eV() {
        var e,
          t = (0, S.Z)(),
          n = (0, V.kP)().session,
          r = (0, eS.N2)(),
          a = (0, eS.Fl)(),
          i = a.isBrowsingAvailable,
          o = a.isBrowsingEnabled,
          s = a.isPluginsAvailable,
          u = a.isPluginsEnabled,
          d = a.isCodeInterpreterAvailable,
          c = a.isCodeInterpreterEnabled,
          f = (0, es.D)({
            mutationFn: function (t) {
              var r = t.feature,
                a = t.enabled;
              return w.ZP.setUserSettingsBetaFeature(
                null !== (e = null == n ? void 0 : n.accessToken) &&
                  void 0 !== e
                  ? e
                  : "",
                r,
                a
              );
            },
            onSettled: r,
            onError: function () {
              ep.m.danger(t.formatMessage(e3.betaSettingsUpdateFailed));
            },
          }),
          g = f.isLoading,
          m = f.variables,
          p = f.mutate,
          v = g && (null == m ? void 0 : m.feature) === eS.tr.BROWSING,
          x = g && (null == m ? void 0 : m.feature) === eS.tr.CODE_INTERPRETER,
          y = g && (null == m ? void 0 : m.feature) === eS.tr.PLUGINS;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(e0, {
              children: (0, l.jsx)("p", {
                children: (0, l.jsx)(b.Z, (0, h._)({}, e3.betaIntro)),
              }),
            }),
            i &&
              (0, l.jsx)(e0, {
                children: (0, l.jsx)(eJ, {
                  label: t.formatMessage(e3.betaBrowsingToggleLabel),
                  disabled: v,
                  enabled: v ? (null == m ? void 0 : m.enabled) : o,
                  onChange: function (e) {
                    p({ feature: eS.tr.BROWSING, enabled: e });
                  },
                  description: (0, l.jsx)(
                    b.Z,
                    (0, h._)({}, e3.betaBrowsingToggleDescription)
                  ),
                }),
              }),
            s &&
              (0, l.jsx)(e0, {
                children: (0, l.jsx)(eJ, {
                  label: t.formatMessage(e3.betaPluginToggleLabel),
                  disabled: y,
                  enabled: y ? (null == m ? void 0 : m.enabled) : u,
                  onChange: function (e) {
                    p({ feature: eS.tr.PLUGINS, enabled: e });
                  },
                  description: (0, l.jsx)(
                    b.Z,
                    (0, h._)({}, e3.betaPluginToggleDescription)
                  ),
                }),
              }),
            d &&
              (0, l.jsx)(e0, {
                children: (0, l.jsx)(eJ, {
                  label: t.formatMessage(e3.betaCodeInterpreterToggleLabel),
                  disabled: x,
                  enabled: x ? (null == m ? void 0 : m.enabled) : c,
                  onChange: function (e) {
                    p({ feature: eS.tr.CODE_INTERPRETER, enabled: e });
                  },
                  description: (0, l.jsx)(
                    b.Z,
                    (0, h._)({}, e3.betaCodeInterpreterToggleDescription)
                  ),
                }),
              }),
          ],
        });
      }
      function eJ(e) {
        var t = e.label,
          n = e.disabled,
          r = e.enabled,
          a = e.onChange,
          i = e.description;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, l.jsx)("div", { children: t }),
                (0, l.jsx)(ez, {
                  disabled: n,
                  enabled: r,
                  onChange: a,
                  label: t,
                }),
              ],
            }),
            null != i &&
              (0, l.jsx)("div", {
                className: "mt-2 text-xs text-gray-500 dark:text-gray-600",
                children: i,
              }),
          ],
        });
      }
      function eG(e) {
        var t = e.color,
          n = e.disabled,
          r = e.label,
          a = e.buttonLabel,
          i = e.onClick;
        return (0, l.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            (0, l.jsx)("div", { children: r }),
            (0, l.jsx)(ei.z, {
              color: void 0 === t ? "neutral" : t,
              disabled: !!n,
              onClick: i,
              children: a,
            }),
          ],
        });
      }
      function e$() {
        var e = (0, eT.F)(),
          t = e.theme,
          n = e.setTheme;
        return (0, l.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            (0, l.jsx)("div", {
              children: (0, l.jsx)(b.Z, (0, h._)({}, e3.theme)),
            }),
            (0, l.jsxs)(eP.Z.Root, {
              value: t,
              onValueChange: function (e) {
                return n(e);
              },
              children: [
                (0, l.jsxs)(eP.Z.Trigger, {
                  children: [
                    (0, l.jsx)(eP.Z.Value, {}),
                    (0, l.jsx)(eP.Z.Icon, {}),
                  ],
                }),
                (0, l.jsx)(eP.Z.Portal, {
                  children: (0, l.jsxs)(eP.Z.Content, {
                    children: [
                      (0, l.jsx)(eP.Z.Item, {
                        value: "system",
                        children: (0, l.jsx)(b.Z, (0, h._)({}, e3.system)),
                      }),
                      (0, l.jsx)(eP.Z.Item, {
                        value: "dark",
                        children: (0, l.jsx)(b.Z, (0, h._)({}, e3.dark)),
                      }),
                      (0, l.jsx)(eP.Z.Item, {
                        value: "light",
                        children: (0, l.jsx)(b.Z, (0, h._)({}, e3.light)),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function eQ(e) {
        var t = e.onClose,
          n = e.onDeleteHistory,
          r = (0, S.Z)();
        return (0, l.jsx)($.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: r.formatMessage(e3.deleteHistoryModalTitle),
          primaryButton: (0, l.jsx)(G.ZP.Button, {
            title: r.formatMessage(e3.deleteHistoryModalConfirm),
            color: "primary",
            onClick: function () {
              n(), t();
            },
          }),
          secondaryButton: (0, l.jsx)(G.ZP.Button, {
            title: r.formatMessage(e3.deleteHistoryModalCancel),
            color: "neutral",
            onClick: t,
          }),
        });
      }
      function eY(e) {
        var t = e.onClose,
          n = (0, S.Z)(),
          r = (0, V.kP)().session,
          a = null == r ? void 0 : r.accessToken,
          i = (0, u.useCallback)(
            function () {
              try {
                w.ZP.submitDataExport(a).then(function () {
                  ep.m.success(n.formatMessage(e3.dataExportRequested)), t();
                });
              } catch (e) {
                ep.m.warning(n.formatMessage(e3.dataExportFailed), {
                  hasCloseButton: !0,
                });
              }
            },
            [a, n, t]
          );
        return (0, l.jsx)($.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: n.formatMessage(e3.dataExportModalTitle),
          primaryButton: (0, l.jsx)(G.ZP.Button, {
            title: n.formatMessage(e3.dataExportModalConfirm),
            color: "primary",
            onClick: i,
          }),
          secondaryButton: (0, l.jsx)(G.ZP.Button, {
            title: n.formatMessage(e3.dataExportModalCancel),
            color: "neutral",
            onClick: t,
          }),
          children: (0, l.jsxs)("div", {
            className: "text-sm",
            children: [
              (0, l.jsxs)("ul", {
                className: "my-3 flex list-disc flex-col gap-1 pl-3",
                children: [
                  (0, l.jsx)("li", {
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, e3.dataExportModalDescription1)
                    ),
                  }),
                  (0, l.jsx)("li", {
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, e3.dataExportModalDescription2)
                    ),
                  }),
                  (0, l.jsx)("li", {
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, e3.dataExportModalDescription3)
                    ),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                children: (0, l.jsx)(
                  b.Z,
                  (0, h._)({}, e3.dataExportModalDescription4)
                ),
              }),
            ],
          }),
        });
      }
      function eX(e) {
        var t = e.value,
          n = e.icon,
          r = e.label,
          a = (0, f.w$)();
        return (0, l.jsxs)(ek.xz, {
          className: (0, N.Z)(
            "group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm radix-state-active:bg-gray-800 radix-state-active:text-white dark:text-gray-500 dark:radix-state-active:text-white",
            { "flex-1 items-center justify-center": !a }
          ),
          value: t,
          children: [
            (0, l.jsx)(j.ZP, {
              icon: n,
              strokeWidth: 0,
              className:
                "h-5 w-5 fill-gray-800 group-radix-state-active:fill-white dark:fill-gray-500",
            }),
            (0, l.jsx)("div", { children: r }),
          ],
        });
      }
      function eK(e) {
        var t = e.value,
          n = e.children;
        return (0, l.jsx)(ek.VY, {
          className: "w-full md:min-h-[300px]",
          value: t,
          children: (0, l.jsx)("div", {
            className:
              "flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300",
            children: n,
          }),
        });
      }
      function e0(e) {
        var t = e.children;
        return (0, l.jsx)("div", {
          className:
            "border-b pb-3 last-of-type:border-b-0 dark:border-gray-700",
          children: t,
        });
      }
      function e1(e) {
        var t,
          n = e.onClose,
          r = (0, S.Z)(),
          a = (0, V.kP)().session,
          i = null == a ? void 0 : a.accessToken,
          o =
            null == a
              ? void 0
              : null === (t = a.user) || void 0 === t
              ? void 0
              : t.email,
          s = (0, k._)((0, u.useState)(""), 2),
          d = s[0],
          c = s[1],
          f = (0, k._)((0, u.useState)(""), 2),
          g = f[0],
          m = f[1],
          p = (0, u.useCallback)(
            function () {
              var e,
                t =
                  null == a
                    ? void 0
                    : null === (e = a.user) || void 0 === e
                    ? void 0
                    : e.iat;
              return void 0 === t || Date.now() / 1e3 - t < 600;
            },
            [a]
          ),
          v = (0, u.useCallback)(
            function () {
              try {
                p()
                  ? w.ZP.deactivateAccount(i).then(function () {
                      (0, V.w7)();
                    })
                  : ep.m.warning(
                      r.formatMessage(e3.deleteAccountSessionTooOld),
                      { hasCloseButton: !0 }
                    );
              } catch (e) {
                ep.m.warning(r.formatMessage(e3.deleteAccountFailed), {
                  hasCloseButton: !0,
                });
              }
            },
            [i, r, p]
          ),
          y = (0, u.useCallback)(function () {
            (0, V.w7)();
          }, []),
          _ = "DELETE" === g && (void 0 === o || d === o),
          C = (0, k._)(
            (0, u.useState)(function () {
              return p();
            }),
            1
          )[0],
          M = (0, D.e2)();
        return (0, l.jsx)($.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: r.formatMessage(e3.deleteAccountTitle),
          closeButton: (0, l.jsx)(G.ZP.CloseButton, { onClose: n }),
          children: (0, l.jsxs)("div", {
            className: "text-sm",
            children: [
              (0, l.jsxs)("ul", {
                className: "mb-6 mt-4 flex list-disc flex-col gap-1 pl-3",
                children: [
                  (0, l.jsx)("li", {
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, e3.deleteAccountWarning)
                    ),
                  }),
                  (0, l.jsx)("li", {
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, e3.reuseEmailPhoneWarning)
                    ),
                  }),
                  (0, l.jsx)("li", {
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, e3.dataRemovalWarning)
                    ),
                  }),
                  (0, l.jsx)("li", {
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, e3.apiAccessDeletionWarning)
                    ),
                  }),
                  (null == M ? void 0 : M.purchase_origin_platform) ===
                    eD._4.MOBILE_IOS &&
                    (0, l.jsx)("li", {
                      children: (0, l.jsx)(
                        b.Z,
                        (0, h._)({}, e3.iapSubscriptionWarning)
                      ),
                    }),
                ],
              }),
              C
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      void 0 !== o
                        ? (0, l.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              (0, l.jsx)(e2, {
                                children: (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, e3.typeEmailLabel)
                                ),
                              }),
                              (0, l.jsx)(eF.Z, {
                                value: d,
                                placeholder: o,
                                name: "email",
                                onChange: function (e) {
                                  c(e.target.value);
                                },
                              }),
                            ],
                          })
                        : null,
                      (0, l.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          (0, l.jsx)(e2, {
                            children: (0, l.jsx)(
                              b.Z,
                              (0, h._)({}, e3.typeDeleteInputLabel)
                            ),
                          }),
                          (0, l.jsx)(eF.Z, {
                            value: g,
                            onChange: function (e) {
                              m(e.target.value);
                            },
                            name: "delete",
                            className: "mb-4",
                          }),
                        ],
                      }),
                      (0, l.jsx)(ei.z, {
                        color: _ ? "danger" : "disabled",
                        onClick: v,
                        disabled: !_,
                        className: "w-full",
                        children: _
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsx)(j.ZP, { icon: x.BJv }),
                                " ",
                                (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, e3.deleteAccountButtonLabel)
                                ),
                              ],
                            })
                          : (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsx)(j.ZP, { icon: x.UIZ }),
                                " ",
                                (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, e3.lockedButtonLabel)
                                ),
                              ],
                            }),
                      }),
                    ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("p", {
                        className: "pb-4 text-xs text-gray-500",
                        children: (0, l.jsx)(
                          b.Z,
                          (0, h._)({}, e3.recentLoginMessage)
                        ),
                      }),
                      (0, l.jsx)(ei.z, {
                        color: "primary",
                        onClick: y,
                        className: "w-full",
                        children: (0, l.jsx)(
                          b.Z,
                          (0, h._)({}, e3.refreshLoginButtonLabel)
                        ),
                      }),
                    ],
                  }),
            ],
          }),
        });
      }
      ((a = o || (o = {})).General = "General"),
        (a.BetaFeatures = "BetaFeatures"),
        (a.DataControls = "DataControls");
      var e2 = d.Z.label(eH()),
        e3 = (0, y.vU)({
          settings: {
            id: "settingsModal.settings",
            defaultMessage: "Settings",
            description: "Title for the settings modal",
          },
          theme: {
            id: "settingsModal.theme",
            defaultMessage: "Theme",
            description: "Label for the theme setting",
          },
          system: {
            id: "settingsModal.system",
            defaultMessage: "System",
            description: "Option for the system theme",
          },
          dark: {
            id: "settingsModal.dark",
            defaultMessage: "Dark",
            description: "Option for the dark theme",
          },
          light: {
            id: "settingsModal.light",
            defaultMessage: "Light",
            description: "Option for the light theme",
          },
          sharedConversations: {
            id: "settingsModal.sharedConversations",
            defaultMessage: "Shared links",
            description: "Label for the shared chat/link button",
          },
          sharedConversationsButton: {
            id: "settingsModal.sharedConversationsButton",
            defaultMessage: "Manage",
            description: "Manage shared links/conversations button",
          },
          exportData: {
            id: "settingsModal.exportData",
            defaultMessage: "Export data",
            description: "Label for the export data button",
          },
          exportButton: {
            id: "settingsModal.exportButton",
            defaultMessage: "Export",
            description: "Export data button",
          },
          deleteAccount: {
            id: "settingsModal.deleteAccount",
            defaultMessage: "Delete account",
            description: "Label for the delete account button",
          },
          deleteAccountButton: {
            id: "settingsModal.deleteButton",
            defaultMessage: "Delete",
            description: "Delete account button",
          },
          openPluginDevtools: {
            id: "settingsModal.openPluginDevtools",
            defaultMessage: "Open plugin devtools",
            description: "Label for the open plugin devtools setting",
          },
          enable2fa: {
            id: "settingsModal.enable2fa",
            defaultMessage: "Enable two-factor authentication",
            description: "Label for the enable 2FA button",
          },
          enable: {
            id: "settingsModal.enable",
            defaultMessage: "Enable",
            description: "Enable 2FA button",
          },
          disable: {
            id: "settingsModal.disable",
            defaultMessage: "Disable",
            description: "Disable 2FA button",
          },
          disable2fa: {
            id: "settingsModal.disable2fa",
            defaultMessage: "Disable two factor authentication",
            description: "Label for the mfa remove button.",
          },
          chatHistoryDescription: {
            id: "settingsModal.chatHistoryDescription",
            defaultMessage:
              "Save new chats on this browser to your history and allow them to be used to improve our models. Unsaved chats will be deleted from our systems within 30 days. This setting does not sync across browsers or devices. <link>Learn more</link>",
            description: "Description for the chat history setting",
          },
          deleteHistoryModalTitle: {
            id: "settingsModal.deleteHistoryModalTitle",
            defaultMessage: "Clear your conversation history - are you sure?",
            description: "Title for the delete history modal",
          },
          deleteHistoryModalConfirm: {
            id: "settingsModal.deleteHistoryModalConfirm",
            defaultMessage: "Confirm deletion",
            description: "Confirm button for the delete history modal",
          },
          deleteHistoryModalCancel: {
            id: "settingsModal.deleteHistoryModalCancel",
            defaultMessage: "Cancel",
            description: "Cancel button for the delete history modal",
          },
          dataExportRequested: {
            id: "settingsModal.dataExportRequested",
            defaultMessage:
              "Successfully exported data. You should receive an email shortly with your data.",
            description: "Message shown when a data export request is received",
          },
          dataExportFailed: {
            id: "settingsModal.dataExportFailed",
            defaultMessage:
              "We were unable to process your export at this time. Please try again later.",
            description: "Message shown when a data export request fails",
          },
          dataExportModalTitle: {
            id: "settingsModal.dataExportModalTitle",
            defaultMessage: "Request data export - are you sure?",
            description: "Title for the data export modal",
          },
          dataExportModalConfirm: {
            id: "settingsModal.dataExportModalConfirm",
            defaultMessage: "Confirm export",
            description: "Confirm button for the data export modal",
          },
          dataExportModalCancel: {
            id: "settingsModal.dataExportModalCancel",
            defaultMessage: "Cancel",
            description: "Cancel button for the data export modal",
          },
          dataExportModalDescription1: {
            id: "settingsModal.dataExportModalDescription1",
            defaultMessage:
              "Your account details and conversations will be included in the export.",
            description: "Description for the data export modal",
          },
          dataExportModalDescription2: {
            id: "settingsModal.dataExportModalDescription2",
            defaultMessage:
              "The data will be sent to your registered email in a downloadable file.",
            description: "Description for the data export modal",
          },
          dataExportModalDescription3: {
            id: "settingsModal.dataExportModalDescription3",
            defaultMessage:
              "Processing may take some time. You'll be notified when it's ready.",
            description: "Description for the data export modal",
          },
          dataExportModalDescription4: {
            id: "settingsModal.dataExportModalDescription4",
            defaultMessage: 'To proceed, click "Confirm export" below.',
            description: "Description for the data export modal",
          },
          deleteAccountSessionTooOld: {
            id: "settingsModal.deleteAccountSessionTooOld",
            defaultMessage:
              "Your login session is too old. Please log in again before deleting your account.",
            description:
              "Message shown when the user's login session is too old to delete their account.",
          },
          deleteAccountFailed: {
            id: "settingsModal.deleteAccountFailed",
            defaultMessage: "Failed to delete account. Please try again later.",
            description:
              "Message shown when there's an error deleting the user's account.",
          },
          deleteAccountTitle: {
            id: "settingsModal.deleteAccountTitle",
            defaultMessage: "Delete account - are you sure?",
            description: "Title for the delete account confirmation modal.",
          },
          deleteAccountWarning: {
            id: "settingsModal.deleteAccountWarning",
            defaultMessage:
              "Deleting your account is permanent and cannot be undone.",
            description:
              "Warning message about account deletion being permanent.",
          },
          reuseEmailPhoneWarning: {
            id: "settingsModal.reuseEmailPhoneWarning",
            defaultMessage:
              "For security reasons, you cannot reuse the same email or phone number for a new account.",
            description:
              "Warning message about not being able to reuse email or phone number for a new account.",
          },
          dataRemovalWarning: {
            id: "settingsModal.dataRemovalWarning",
            defaultMessage:
              "All your data, including profile, conversations, and API usage, will be removed.",
            description:
              "Warning message about data removal after account deletion.",
          },
          apiAccessDeletionWarning: {
            id: "settingsModal.apiAccessDeletionWarning",
            defaultMessage:
              "If you've been using ChatGPT with the API, this access will also be deleted.",
            description: "Warning message about API access being deleted.",
          },
          iapSubscriptionWarning: {
            id: "settingsModal.iapSubscriptionWarning",
            defaultMessage:
              "You will need to cancel your in-app purchase subscription in the Apple App Store. We cannot cancel your subscription for you.",
            description:
              "Warning message about cancelling in-app subscriptions.",
          },
          typeEmailLabel: {
            id: "settingsModal.typeEmailLabel",
            defaultMessage: "Please type your account email.",
            description:
              "Label for email input field when deleting an account.",
          },
          typeDeleteInputLabel: {
            id: "settingsModal.typeDeleteInputLabel",
            defaultMessage:
              'To proceed, type "DELETE" in the input field below.',
            description:
              "Label for DELETE input field when deleting an account.",
          },
          lockedButtonLabel: {
            id: "settingsModal.lockedButtonLabel",
            defaultMessage: "Locked",
            description:
              "Label for the locked button when deleting an account.",
          },
          deleteAccountButtonLabel: {
            id: "settingsModal.deleteAccountButtonLabel",
            defaultMessage: "Permanently delete my account",
            description: "Label for the button to confirm account deletion.",
          },
          recentLoginMessage: {
            id: "settingsModal.recentLoginMessage",
            defaultMessage:
              "You may only delete your account if you have logged in within the last 10 minutes. Please log in again, then return here to continue.",
            description:
              "Message shown when the user needs to log in again to delete their account.",
          },
          refreshLoginButtonLabel: {
            id: "settingsModal.refreshLoginButtonLabel",
            defaultMessage: "Refresh login",
            description: "Label for the button to refresh login.",
          },
          chatHistoryToggleLabel: {
            id: "settingsModal.chatHistoryToggleLabel",
            defaultMessage: "Chat history & training",
            description: "Label for the chat history toggle.",
          },
          dataControlsTab: {
            id: "settingsModal.dataControls",
            defaultMessage: "Data controls",
            description: "Label for the data controls tab",
          },
          betaIntro: {
            id: "settingsModal.betaIntro",
            defaultMessage:
              "As a Plus user, enjoy early access to experimental new features, which may change during development.",
            description: "Introduction for the beta features tab",
          },
          betaSettingsUpdateFailed: {
            id: "settingsModal.betaSettingsUpdateFailed",
            defaultMessage: "Failed to update your beta setting",
            description:
              "Message shown when there's an error updating beta settings",
          },
          betaPluginToggleLabel: {
            id: "settingsModal.betaPluginToggleLabel",
            defaultMessage: "Plugins",
            description: "Label for the Plugins beta toggle.",
          },
          betaPluginToggleDescription: {
            id: "settingsModal.betaPluginToggleDescription",
            defaultMessage:
              "Try a version of ChatGPT that knows when and how to use third-party plugins that you enable.",
            description: "Description for the Plugins beta toggle.",
          },
          betaBrowsingToggleLabel: {
            id: "settingsModal.betaBrowsingToggleLabel",
            defaultMessage: "Browse with Bing",
            description: "Label for the Browse with Bing beta toggle.",
          },
          betaBrowsingToggleDescription: {
            id: "settingsModal.betaBrowsingToggleDescription",
            defaultMessage:
              "Try a version of ChatGPT that knows when and how to browse the internet to answer questions about recent topics and events.",
            description: "Description for the Browsing beta toggle.",
          },
          betaCodeInterpreterToggleLabel: {
            id: "settingsModal.betaCodeInterpreterToggleLabel",
            defaultMessage: "Code interpreter",
            description: "Label for the Code interpreter beta toggle.",
          },
          betaCodeInterpreterToggleDescription: {
            id: "settingsModal.betaCodeInterpreterToggleDescription",
            defaultMessage:
              "Try a version of ChatGPT that knows how to write and execute python code, and can work with file uploads. Try asking for help with data analysis, image conversions, or editing a code file. Note: files will not persist beyond a single session.",
            description: "Description for the Code interpreter beta toggle.",
          },
          generalTab: {
            id: "settingsModal.generalTab",
            defaultMessage: "General",
            description: "Label for the general tab",
          },
          betaTab: {
            id: "settingsModal.betaTab",
            defaultMessage: "Beta features",
            description: "Label for the Beta Features tab",
          },
          clearChatLabel: {
            id: "settingsModal.clearChatLabel",
            defaultMessage: "Clear all chats",
            description: "Label for the clear chat button",
          },
          clearChatButton: {
            id: "settingsModal.clearChatButton",
            defaultMessage: "Clear",
            description: "Clear chat button",
          },
        }),
        e4 = n(24148),
        e5 = n(63727),
        e7 = new Set(["/admin"]),
        e8 = n(94860),
        e9 = n(9849),
        e6 = n(70788),
        te = n(85023);
      function tt(e) {
        var t = e.children;
        return (0, l.jsx)(g.u, {
          as: u.Fragment,
          enter: "transition ease-out duration-200",
          enterFrom: "opacity-0 translate-y-1",
          enterTo: "opacity-100 translate-y-0",
          leave: "transition ease-in duration-150",
          leaveFrom: "opacity-100 translate-y-0",
          leaveTo: "opacity-0 translate-y-1",
          children: t,
        });
      }
      function tn(e) {
        var t = e.onDeleteHistory,
          n = e.isConfirmingDeleteHistory,
          r = (0, Z.WS)(),
          a = (0, D.WY)(),
          i = (0, D.hz)(),
          o = (0, D.ec)(D.F_.hasMultipleWorkspaces),
          s = (0, u.useCallback)(
            function () {
              r(P.s6.clickSidebarAccountPortalMenuItem),
                c.vm.openModal(c.B.AccountPortal);
            },
            [r]
          ),
          d = (0, eS.Fl)().isPluginsAvailable;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            o && (0, l.jsx)(e8.R, {}),
            (0, l.jsx)(e8.DM, {
              onDeleteHistory: t,
              isConfirmingDeleteHistory: n,
            }),
            !0 === a &&
              (0, l.jsxs)(e8.ZP, {
                onClick: s,
                children: [
                  (0, l.jsx)(j.ZP, { icon: x.fzv }),
                  (0, l.jsx)(b.Z, (0, h._)({}, tr.myPlan)),
                ],
              }),
            i.has("system_message2") &&
              (0, l.jsxs)(e8.ZP, {
                onClick: function () {
                  return c.vm.openModal(c.B.UserContext);
                },
                children: [
                  (0, l.jsx)(j.ZP, { icon: x.yK7 }),
                  (0, l.jsx)(b.Z, (0, h._)({}, tr.chatPreferences)),
                ],
              }),
            i.has("files_list_ui") &&
              d &&
              (0, l.jsxs)(e8.ZP, {
                onClick: function () {
                  return c.vm.openFilesModal();
                },
                children: [
                  (0, l.jsx)(j.ZP, { icon: x.NOg }),
                  (0, l.jsx)(b.Z, (0, h._)({}, tr.myFiles)),
                ],
              }),
          ],
        });
      }
      var tr = (0, y.vU)({
          myPlan: {
            id: "popoverNavigation.myPlan",
            defaultMessage: "My plan",
            description: "My plan menu item",
          },
          chatPreferences: {
            id: "popoverNavigation.chatPreferences",
            defaultMessage: "Chat preferences",
            description: "Chat preferences menu item",
          },
          myFiles: {
            id: "popoverNavigation.myFiles",
            defaultMessage: "My files",
            description: "Files menu item",
          },
        }),
        ta = n(57101),
        ti = n(16578),
        to = n.n(ti);
      function ts(e) {
        var t = e.onDeleteHistory,
          n = e.isConfirmingDeleteHistory,
          r = (0, D.ec)(D.F_.hasMultipleWorkspaces),
          a = (0, D.ec)(D.F_.workspaceId);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(tl, {
              href: "/admin?workspaceId=".concat(a),
              children: [
                (0, l.jsx)(j.ZP, { icon: ta.Z }),
                (0, l.jsx)(b.Z, (0, h._)({}, tu.myWorkspaceSettings)),
              ],
            }),
            r && (0, l.jsx)(e8.R, {}),
            (0, l.jsx)(e8.DM, {
              onDeleteHistory: t,
              isConfirmingDeleteHistory: n,
            }),
          ],
        });
      }
      function tl(e) {
        var t = e.href,
          n = e.children;
        return (0, l.jsx)(e9.v.Item, {
          children: function (e) {
            var r = e.active;
            return (0, l.jsx)(to(), {
              href: t,
              legacyBehavior: !0,
              children: (0, l.jsx)(e8.ZB, {
                className: (0, N.Z)(r ? "bg-gray-700" : "hover:bg-gray-700"),
                children: n,
              }),
            });
          },
        });
      }
      var tu = (0, y.vU)({
        myWorkspaceSettings: {
          id: "workspacePopoverNavigation.myWorkspaceSettings",
          defaultMessage: "Workspace settings",
          description: "Workspace settings menu item",
        },
      });
      function td(e) {
        var t = e.onClickSettings,
          n = e.onDeleteHistory;
        return (0, l.jsxs)(e9.v, {
          as: "div",
          className: "group relative",
          children: [
            (0, l.jsx)(tm, {}),
            (0, l.jsx)(tt, {
              children: (0, l.jsx)(e9.v.Items, {
                className:
                  "absolute bottom-full left-0 z-20 mb-2 w-full overflow-hidden rounded-md bg-gray-950 pb-1.5 pt-1 outline-none",
                children: (0, l.jsx)(tg, {
                  onClickSettings: t,
                  onDeleteHistory: n,
                }),
              }),
            }),
          ],
        });
      }
      function tc() {
        var e = (0, V.kP)().session,
          t = null == e ? void 0 : e.user,
          n = (0, Y.Ix)();
        return t
          ? (0, l.jsx)(l.Fragment, {
              children: (0, l.jsx)(e8.ZP, {
                onClick: function () {
                  K.setIsModalOpen(!0);
                },
                children: (0, l.jsxs)("div", {
                  className: "flex w-full flex-col gap-2",
                  children: [
                    (0, l.jsx)(ee, { className: "h-10 w-10" }),
                    (0, l.jsxs)("div", {
                      className:
                        "flex w-full items-center justify-between gap-2",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "flex flex-col items-start gap-1",
                          children: [
                            (0, l.jsx)("div", {
                              className: "text-base text-white",
                              children: n,
                            }),
                            (0, l.jsx)("div", {
                              className: "text-sm text-gray-500",
                              children: null == t ? void 0 : t.email,
                            }),
                          ],
                        }),
                        (0, l.jsx)("div", {
                          children: (0, l.jsx)(j.ZP, {
                            icon: e6.Z,
                            size: "small",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          : null;
      }
      var tf = "oai/apps/hasSeenUserSurvey6_23";
      function th() {
        var e = (0, S.Z)(),
          t = (0, f.w$)(),
          n = (0, k._)((0, u.useState)(!1), 2),
          r = n[0],
          a = n[1],
          i = te.m.getItem(tf);
        return r || i
          ? null
          : (0, l.jsx)("div", {
              className: "mx-1 mb-1 rounded-sm bg-[#0077FF]",
              children: (0, l.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-stretch gap-3 p-3 text-sm text-white",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex w-full items-start",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex-grow",
                        children: [
                          (0, l.jsx)("div", {
                            className: "font-bold",
                            children: (0, l.jsx)(
                              b.Z,
                              (0, h._)({}, tv.surveyTitle)
                            ),
                          }),
                          (0, l.jsx)("div", {
                            children: (0, l.jsx)(
                              b.Z,
                              (0, h._)({}, tv.surveyDescription)
                            ),
                          }),
                        ],
                      }),
                      (0, l.jsx)("button", {
                        className: "text-white/25 hover:text-white/40",
                        onClick: function () {
                          a(!0), te.m.setItem(tf, !0);
                        },
                        "aria-label": e.formatMessage(tv.surveyDismiss),
                        children: (0, l.jsx)(j.QF, {
                          width: t ? "20px" : "24px",
                          height: t ? "20px" : "24px",
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)("a", {
                    href: "https://openai.qualtrics.com/jfe/form/SV_7QmSGWHymCCmIxE",
                    target: "_blank",
                    className:
                      "flex w-full flex-row items-center justify-center gap-2 rounded-[4px] bg-white/25 p-2 hover:bg-white/40",
                    rel: "noreferrer",
                    onClick: function () {
                      te.m.setItem(tf, !0), a(!0);
                    },
                    children: [
                      (0, l.jsx)(j.ZP, { size: "small", icon: x.AlO }),
                      (0, l.jsx)(b.Z, (0, h._)({}, tv.takeSurveyButton)),
                    ],
                  }),
                ],
              }),
            });
      }
      function tg(e) {
        var t = e.onClickSettings,
          n = e.onDeleteHistory,
          r = (0, Z.WS)(),
          a = (0, k._)((0, u.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, u.useCallback)(
            function (e) {
              i ? (n(), o(!1)) : (o(!0), e.preventDefault());
            },
            [i, n]
          ),
          d = (0, D.ec)(D.F_.isBusinessWorkspace),
          c = (0, D.hz)().has(F.G_),
          f = (0, D.ec)(D.F_.hasMultipleWorkspaces);
        return (0, l.jsxs)("nav", {
          children: [
            c && (0, l.jsx)(th, {}),
            f && (0, l.jsx)(tc, {}),
            d
              ? (0, l.jsx)(ts, {
                  onDeleteHistory: s,
                  isConfirmingDeleteHistory: i,
                })
              : (0, l.jsx)(tn, {
                  onDeleteHistory: s,
                  isConfirmingDeleteHistory: i,
                }),
            (0, l.jsxs)(e8.ZP, {
              as: "a",
              href: "https://help.openai.com/en/collections/3742473-chatgpt",
              target: "_blank",
              onClick: function () {
                r(P.s6.clickFaqLink);
              },
              children: [
                (0, l.jsx)(j.ZP, { icon: x.AlO }),
                (0, l.jsx)(b.Z, (0, h._)({}, tv.helpAndFaq)),
              ],
            }),
            (0, l.jsxs)(e8.ZP, {
              onClick: t,
              children: [
                (0, l.jsx)(j.ZP, { icon: x.nbt }),
                (0, l.jsx)(b.Z, (0, h._)({}, tv.settings)),
              ],
            }),
            (0, l.jsx)(e8.R, {}),
            (0, l.jsxs)(e8.ZP, {
              onClick: function () {
                r(P.s6.clickLogOut, { eventSource: "mouse" }), (0, V.w7)();
              },
              children: [
                (0, l.jsx)(j.ZP, { icon: x.xqh }),
                (0, l.jsx)(b.Z, (0, h._)({}, tv.logOut)),
              ],
            }),
          ],
        });
      }
      function tm() {
        var e = (0, V.kP)().session;
        return (null == e ? void 0 : e.user) ? (0, l.jsx)(tp, {}) : null;
      }
      function tp() {
        var e = (0, Y.Ix)();
        return (0, l.jsxs)(e9.v.Button, {
          className:
            "flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800",
          children: [
            (0, l.jsx)("div", {
              className: "flex-shrink-0",
              children: (0, l.jsx)(ee, {
                className: "flex h-5 w-5",
                iconSize: "xsmall",
              }),
            }),
            (0, l.jsx)("div", {
              className:
                "grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white",
              children: e,
            }),
            (0, l.jsx)(j.ZP, {
              icon: x.K9M,
              size: "small",
              className: "flex-shrink-0 text-gray-500",
            }),
          ],
        });
      }
      var tv = (0, y.vU)({
        helpAndFaq: {
          id: "navigation.helpAndFaq",
          defaultMessage: "Help & FAQ",
          description: "Help & FAQ menu item",
        },
        settings: {
          id: "navigation.settings",
          defaultMessage: "Settings",
          description: "Settings menu item",
        },
        logOut: {
          id: "navigation.logOut",
          defaultMessage: "Log out",
          description: "Log out menu item",
        },
        takeSurveyButton: {
          id: "navigation.survey.takeSurveyButton",
          defaultMessage: "Take survey",
          description: "Survey offer call to action",
        },
        surveyDismiss: {
          id: "navigation.surveyDismiss",
          defaultMessage: "Dismiss survey",
          description: "Survey offer dismiss button",
        },
        surveyDescription: {
          id: "navigation.surveyDescription",
          defaultMessage: "Shape the future of ChatGPT.",
          description: "Survey offer description",
        },
        surveyTitle: {
          id: "navigation.surveyTitle",
          defaultMessage: "We’d love to hear from you!",
          description: "Survey offer title",
        },
      });
      function tx() {
        var e = (0, s._)([
          "flex-col flex-1 transition-opacity duration-500\n  ",
          "\n  ",
          "",
        ]);
        return (
          (tx = function () {
            return e;
          }),
          e
        );
      }
      function tb(e) {
        var t = e.onDeleteHistory,
          n = e.onNewThread,
          r = e.children,
          a = (0, S.Z)(),
          i = (0, D.hz)(),
          o = (0, Z.WS)(),
          s = i.has(F.Ue),
          d = (0, f.w$)(),
          g = (0, v.useRouter)(),
          m = (0, D.WY)(),
          p = (0, D.$T)(),
          y = (0, D.ec)(D.F_.isBusinessWorkspace),
          w = (0, I.g)(function (e) {
            return e.flags.isUserInCanPayGroup;
          }),
          _ = (0, e4.t)(function (e) {
            return { setShowAccountPaymentModal: e.setShowAccountPaymentModal };
          }).setShowAccountPaymentModal,
          M = (0, u.useCallback)(
            function () {
              _(!0, function () {
                o(P.s6.clickSidebarAccountPaymentMenuItem);
              });
            },
            [o, _]
          ),
          L = (0, u.useRef)(null),
          U = (0, k._)((0, u.useState)(!1), 2),
          A = U[0],
          R = U[1],
          B = (0, u.useContext)(E.QL),
          O = B.historyDisabled,
          q = B.toggleHistoryDisabled,
          z = B.getModifiedSettings,
          H = B.unsetModifiedSettings,
          W = z(),
          V = (0, k._)((0, u.useState)(W), 2),
          J = V[0],
          G = V[1],
          $ = (0, u.useCallback)(function () {
            G(!0);
          }, []),
          Q = (0, u.useCallback)(
            function () {
              G(!1), H();
            },
            [H]
          ),
          Y = (0, u.useCallback)(
            function () {
              null == n || n(), q();
            },
            [n, q]
          ),
          X = (0, e5.Xu)(O).data,
          K = (0, u.useMemo)(
            function () {
              var e = !1;
              return (
                null != X &&
                  ("" !== X.aboutModelMessage || "" !== X.aboutUserMessage) &&
                  (e = !0),
                (0, l.jsxs)("div", {
                  className: (0, N.Z)(
                    "absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500",
                    O ? "visible max-h-72" : "invisible max-h-0"
                  ),
                  children: [
                    (0, l.jsxs)("div", {
                      className: "bg-gray-900 px-4 py-3",
                      children: [
                        (0, l.jsx)("div", {
                          className: "p-1 text-sm text-gray-100",
                          children: (0, l.jsx)(
                            b.Z,
                            (0, h._)({}, tw.chatHistoryOff)
                          ),
                        }),
                        (0, l.jsx)("div", {
                          className: "p-1 text-xs text-gray-500",
                          children: (0, l.jsx)(
                            b.Z,
                            (0, C._)(
                              (0, h._)(
                                {},
                                e
                                  ? tw.chatHistoryOffWithChatPrefsDescription
                                  : tw.chatHistoryOffDescription
                              ),
                              {
                                values: {
                                  learnMore: (0, l.jsx)("a", {
                                    href: "https://help.openai.com/en/articles/7730893",
                                    target: "_blank",
                                    className: "underline",
                                    rel: "noreferrer",
                                    children: (0, l.jsx)(
                                      b.Z,
                                      (0, h._)({}, tw.learnMore)
                                    ),
                                  }),
                                  b: function (e) {
                                    return (0, l.jsx)("strong", {
                                      children: e,
                                    });
                                  },
                                },
                              }
                            )
                          ),
                        }),
                        (0, l.jsxs)(ei.z, {
                          className: "mt-4 w-full",
                          onClick: Y,
                          color: "primary",
                          size: "medium",
                          children: [
                            (0, l.jsx)(j.ZP, { icon: x.$IY }),
                            (0, l.jsx)(b.Z, (0, h._)({}, tw.enableChatHistory)),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "h-24 bg-gradient-to-t from-gray-900/0 to-gray-900",
                    }),
                  ],
                })
              );
            },
            [X, O, Y]
          ),
          ee = (0, u.useMemo)(
            function () {
              var e = [],
                t = null;
              return (
                u.Children.forEach(r, function (n) {
                  u.isValidElement(n) &&
                    (n.type === tb.PrimaryActionDesktop ? (t = n) : e.push(n));
                }),
                { primaryActionButton: t, navigationContent: e }
              );
            },
            [r]
          ),
          et = ee.primaryActionButton,
          en = ee.navigationContent;
        (0, u.useEffect)(
          function () {
            var e;
            L.current &&
              R(
                (e = L.current).scrollHeight > e.clientHeight ||
                  e.scrollWidth > e.clientWidth
              );
          },
          [r]
        );
        var ea = !(0, D.WY)() && !i.has("disable_upgrade_ui"),
          eo = (0, D.KQ)(),
          es = (0, c.tN)(function (e) {
            return e.isFilesModalOpen;
          }),
          el = (0, u.useMemo)(
            function () {
              var e = g.route;
              return !e7.has(e);
            },
            [g.route]
          );
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className:
                "scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20",
              children: [
                (0, l.jsx)(T.f, {
                  asChild: !0,
                  children: (0, l.jsx)("h2", {
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, tw.chatHistoryLabel)
                    ),
                  }),
                }),
                (0, l.jsxs)("nav", {
                  className: "flex h-full w-full flex-col p-2",
                  "aria-label": a.formatMessage(tw.chatHistoryLabel),
                  children: [
                    (0, l.jsxs)("div", {
                      className: "mb-1 flex flex-row gap-2",
                      children: [
                        et,
                        s &&
                          d &&
                          (0, l.jsx)(ev.u, {
                            side: "right",
                            label: a.formatMessage(tw.closeSidebar),
                            children: (0, l.jsxs)(e8.zV, {
                              onClick: c.vm.toggleDesktopNavCollapsed,
                              className:
                                "w-11 flex-shrink-0 items-center justify-center",
                              children: [
                                (0, l.jsx)(j.ZP, { icon: x.iYc }),
                                (0, l.jsx)(T.f, {
                                  children: (0, l.jsx)(
                                    b.Z,
                                    (0, h._)({}, tw.closeSidebar)
                                  ),
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                    K,
                    (0, l.jsx)(ty, {
                      ref: L,
                      $offsetScrollbar: A,
                      $disableScroll: O,
                      children: en,
                    }),
                    (0, l.jsxs)("div", {
                      className: "border-t border-white/20 pt-2 empty:hidden",
                      children: [
                        !p &&
                          !1 === m &&
                          w &&
                          !y &&
                          (0, l.jsx)(e8.Vq, {
                            onClick: M,
                            className: "rounded-md",
                            children: (0, l.jsxs)("span", {
                              className: "flex w-full flex-row justify-between",
                              children: [
                                (0, l.jsxs)("span", {
                                  className:
                                    "gold-new-button flex items-center gap-3",
                                  children: [
                                    (0, l.jsx)(j.ZP, { icon: x.fzv }),
                                    eo
                                      ? (0, l.jsx)(
                                          b.Z,
                                          (0, h._)({}, tw.renewPlus)
                                        )
                                      : (0, l.jsx)(
                                          b.Z,
                                          (0, h._)({}, tw.upgradeToPlus)
                                        ),
                                  ],
                                }),
                                ea &&
                                  !eo &&
                                  (0, l.jsx)("span", {
                                    className:
                                      "rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800",
                                    children: (0, l.jsx)(
                                      b.Z,
                                      (0, h._)({}, tw.newLabel)
                                    ),
                                  }),
                              ],
                            }),
                          }),
                        el &&
                          (0, l.jsx)(td, {
                            onClickSettings: $,
                            onDeleteHistory: t,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            J &&
              (0, l.jsx)(eW, {
                onClose: Q,
                onToggleHistoryDisabled: n,
                onDeleteHistory: t,
              }),
            i.has("files_list_ui") && es && (0, l.jsx)(eM, {}),
            i.has("system_message2") && (0, l.jsx)(e5.wm, {}),
            (0, l.jsx)(er, { onResetThread: n }),
          ],
        });
      }
      (tb.PrimaryActionDesktop = function (e) {
        var t = e.onClick,
          n = (0, M._)(e, ["onClick"]);
        return (0, l.jsx)(
          e8.zV,
          (0, h._)({ onClick: t, className: "flex-shrink-0 flex-grow" }, n)
        );
      }),
        (tb.PrimaryButtonMobile = function (e) {
          var t = e.onClick,
            n = (0, M._)(e, ["onClick"]);
          return (0, l.jsx)(
            "button",
            (0, h._)({ type: "button", className: "px-3", onClick: t }, n)
          );
        });
      var ty = d.Z.div(
          tx(),
          function (e) {
            return e.$disableScroll
              ? "overflow-y-hidden opacity-20 pointer-events-none"
              : "overflow-y-auto";
          },
          function (e) {
            return e.$offsetScrollbar && "-mr-2";
          }
        ),
        tw = (0, y.vU)({
          upgradeToPlus: {
            id: "NavigationContent.upgradeToPlus",
            defaultMessage: "Upgrade to Plus",
            description: "Upgrade to Plus menu item",
          },
          renewPlus: {
            id: "NavigationContent.renewPlus",
            defaultMessage: "Renew Plus",
            description: "Renew Plus menu item",
          },
          closeSidebar: {
            id: "NavigationContent.closeSidebar",
            defaultMessage: "Hide sidebar",
            description: "Hide sidebar button label",
          },
          chatHistoryLabel: {
            id: "NavigationContent.chatHistoryLabel",
            defaultMessage: "Chat history",
            description: "Chat history label heading",
          },
          chatHistoryOff: {
            id: "NavigationContent.chatHistoryOff",
            defaultMessage: "Chat History is off for this browser.",
            description: "Text indicating that chat history is turned off",
          },
          chatHistoryOffDescription: {
            id: "NavigationContent.chatHistoryOffDescription",
            defaultMessage:
              "When history is turned off, new chats on this browser won't appear in your history on any of your devices, be used to train our models, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}",
            description: "Description for chat history being off",
          },
          chatHistoryOffWithChatPrefsDescription: {
            id: "navigation.chatHistoryOffWithChatPrefsDescription",
            defaultMessage:
              "When history is turned off, new chats on this browser won't appear in your history on any of your devices, be used to train our models, or stored for longer than 30 days. Your chat preferences will also be disabled. <b>This setting does not sync across browsers or devices.</b> {learnMore}",
            description: "Description for chat history being off",
          },
          learnMore: {
            id: "NavigationContent.learnMore",
            defaultMessage: "Learn more",
            description: "Learn more link text",
          },
          enableChatHistory: {
            id: "NavigationContent.enableChatHistory",
            defaultMessage: "Enable chat history",
            description: "Enable chat history button label",
          },
          newLabel: {
            id: "NavigationContent.newLabel",
            defaultMessage: "NEW",
            description: "Label for new features or items",
          },
        }),
        tj = function (e) {
          var t = e.onDeleteHistory,
            n = e.onNewThread,
            r = e.children;
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("div", {
              className: "flex h-full min-h-0 flex-col ",
              children: (0, l.jsx)(tb, {
                onDeleteHistory: t,
                onNewThread: n,
                children: r,
              }),
            }),
          });
        },
        t_ = function (e) {
          var t = e.onDeleteHistory,
            n = e.onClose,
            r = e.sidebarOpen,
            a = e.onNewThread,
            i = e.children;
          return (0, l.jsx)(g.u.Root, {
            show: r,
            as: u.Fragment,
            children: (0, l.jsxs)(m.V, {
              as: "div",
              className: "relative",
              onClose: n,
              children: [
                (0, l.jsx)(g.u.Child, {
                  as: u.Fragment,
                  enter: "transition-opacity ease-linear duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-100",
                  leave: "transition-opacity ease-linear duration-300",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: (0, l.jsx)("div", {
                    className: "fixed inset-0 bg-gray-600 bg-opacity-75",
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: "fixed inset-0 flex",
                  children: [
                    (0, l.jsx)(g.u.Child, {
                      as: u.Fragment,
                      enter: "transition ease-in-out duration-300 transform",
                      enterFrom: "-translate-x-full",
                      enterTo: "translate-x-0",
                      leave: "transition ease-in-out duration-300 transform",
                      leaveFrom: "translate-x-0",
                      leaveTo: "-translate-x-full",
                      children: (0, l.jsxs)(m.V.Panel, {
                        className:
                          "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",
                        children: [
                          (0, l.jsx)(g.u.Child, {
                            as: u.Fragment,
                            enter: "ease-in-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in-out duration-300",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, l.jsx)("div", {
                              className: "absolute right-0 top-0 -mr-12 pt-2",
                              children: (0, l.jsxs)("button", {
                                type: "button",
                                className:
                                  "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                onClick: n,
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "sr-only",
                                    children: (0, l.jsx)(
                                      b.Z,
                                      (0, h._)({}, tk.closeSidebar)
                                    ),
                                  }),
                                  (0, l.jsx)(j.ZP, {
                                    icon: x.q5L,
                                    size: "medium",
                                    className: "text-white",
                                    "aria-hidden": "true",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, l.jsx)(tb, {
                            onDeleteHistory: t,
                            onNewThread: a,
                            children: i,
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)("div", { className: "w-14 flex-shrink-0" }),
                  ],
                }),
              ],
            }),
          });
        },
        tC = function (e) {
          var t = e.onClickOpenSidebar,
            n = e.renderTitle,
            r = e.children;
          return (0, l.jsxs)("div", {
            className:
              "sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",
            children: [
              (0, l.jsxs)("button", {
                type: "button",
                className:
                  "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
                onClick: t,
                children: [
                  (0, l.jsx)("span", {
                    className: "sr-only",
                    children: (0, l.jsx)(b.Z, (0, h._)({}, tk.openSidebar)),
                  }),
                  (0, l.jsx)(j.ZP, {
                    icon: x.cur,
                    "aria-hidden": "true",
                    size: "medium",
                  }),
                ],
              }),
              (0, l.jsx)("h1", {
                className: "flex-1 text-center text-base font-normal",
                children: n,
              }),
              r,
            ],
          });
        };
      function tM(e) {
        var t = e.onResetThread,
          n = e.children,
          r = (0, v.useRouter)(),
          a = (0, u.useRef)(null),
          i = (0, f.w$)(),
          o = (0, _.iF)(),
          s = (0, c.tN)(function (e) {
            return {
              activeSidebar: e.activeSidebar,
              isDesktopNavCollapsed: e.isDesktopNavCollapsed,
            };
          }),
          d = s.isDesktopNavCollapsed,
          h = s.activeSidebar,
          g = (0, u.useCallback)(
            function () {
              w.ZP.deleteConversations().then(function () {
                o();
              }),
                null == t || t(),
                "/" !== r.asPath && r.replace({ pathname: "/" });
            },
            [t, o, r]
          );
        return i
          ? (0, l.jsx)(p.E.div, {
              className: "dark flex-shrink-0 overflow-x-hidden bg-gray-900",
              ref: a,
              initial: !1,
              animate: {
                width: d ? 0 : "260px",
                transition: { duration: 0.165, ease: "easeOut" },
              },
              onAnimationStart: function () {
                a.current && (a.current.style.visibility = "visible");
              },
              onAnimationComplete: function () {
                a.current && d && (a.current.style.visibility = "hidden");
              },
              children: (0, l.jsx)("div", {
                className: "h-full w-[260px]",
                children: (0, l.jsx)(tj, {
                  onDeleteHistory: g,
                  onNewThread: t,
                  children: n,
                }),
              }),
            })
          : (0, l.jsx)(t_, {
              onClose: function () {
                return c.vm.toggleActiveSidebar("mobile-nav");
              },
              sidebarOpen: "mobile-nav" === h,
              onDeleteHistory: g,
              onNewThread: t,
              children: n,
            });
      }
      var tk = (0, y.vU)({
          closeSidebar: {
            id: "navigation.closeSidebar",
            defaultMessage: "Close sidebar",
            description: "Close sidebar button label",
          },
          openSidebar: {
            id: "navigation.openSidebar",
            defaultMessage: "Open sidebar",
            description: "Open sidebar button label",
          },
        }),
        tT = n(37541);
      function tN() {
        var e = (0, s._)(["overflow-hidden w-full h-full relative flex z-0"]);
        return (
          (tN = function () {
            return e;
          }),
          e
        );
      }
      function tS() {
        var e = (0, s._)([
          "relative h-full w-full transition-width flex flex-col overflow-auto items-stretch",
        ]);
        return (
          (tS = function () {
            return e;
          }),
          e
        );
      }
      function tZ(e) {
        var t = e.onResetThread,
          n = e.children,
          r = e.showNavigation,
          a = e.renderTitle,
          i = (0, f.w$)(),
          o = (0, u.useMemo)(
            function () {
              var e = [],
                t = null,
                r = null,
                a = null,
                i = null;
              return (
                u.Children.forEach(n, function (n) {
                  u.isValidElement(n) &&
                    (n.type === tZ.NavigationContent
                      ? (t = n)
                      : n.type === tZ.Sidebars
                      ? (r = n)
                      : n.type === tZ.NavigationPrimaryActionDesktop
                      ? (a = n)
                      : n.type === tZ.NavigationPrimaryActionMobile
                      ? (i = n)
                      : e.push(n));
                }),
                {
                  pageContent: e,
                  navigationContent: t,
                  sidebars: r,
                  primaryAction: a,
                  primaryActionMobile: i,
                }
              );
            },
            [n]
          ),
          s = o.pageContent,
          d = o.navigationContent,
          h = o.sidebars,
          g = o.primaryAction,
          m = o.primaryActionMobile;
        return (0, l.jsxs)(tP, {
          children: [
            r &&
              (0, l.jsx)(tT.Z, {
                children: (0, l.jsxs)(tM, {
                  onResetThread: t,
                  children: [g, d],
                }),
              }),
            (0, l.jsxs)("div", {
              className:
                "relative flex h-full max-w-full flex-1 overflow-hidden",
              children: [
                (0, l.jsxs)("div", {
                  className: "flex h-full max-w-full flex-1 flex-col",
                  children: [
                    !i &&
                      r &&
                      (0, l.jsx)(tT.Z, {
                        children: (0, l.jsx)(tC, {
                          onClickOpenSidebar: function () {
                            return c.vm.toggleActiveSidebar("mobile-nav");
                          },
                          renderTitle: a,
                          children: m,
                        }),
                      }),
                    (0, l.jsx)(tF, { className: "flex-1", children: s }),
                  ],
                }),
                h,
              ],
            }),
          ],
        });
      }
      var tP = d.Z.div(tN()),
        tF = d.Z.main(tS());
      (tZ.NavigationContent = function (e) {
        var t = e.children;
        return (0, l.jsx)(l.Fragment, { children: t });
      }),
        (tZ.Sidebars = function (e) {
          var t = e.children;
          return (0, l.jsx)(l.Fragment, { children: t });
        }),
        (tZ.NavigationPrimaryActionDesktop = tb.PrimaryActionDesktop),
        (tZ.NavigationPrimaryActionMobile = tb.PrimaryButtonMobile);
    },
    57924: function (e, t, n) {
      n.d(t, {
        u: function () {
          return u;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(15838),
        o = n(19841);
      n(70079);
      var s = n(34303);
      function l() {
        var e = (0, r._)([
          "relative top-[-3px] h-2 w-2 rotate-45 transform border-r border-b border-black/10 bg-black shadow-xs",
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      var u = function (e) {
          var t = e.label,
            n = e.side,
            r = e.sideOffset,
            s = e.withArrow,
            l = e.wide,
            u = e.size,
            c = void 0 === u ? "small" : u,
            f = e.interactive,
            h = e.usePortal,
            g = e.className,
            m = e.children,
            p = e.delayDuration,
            v = e.closeOnOutsideClick,
            x = e.open,
            b = (0, a.jsxs)(i.VY, {
              onPointerDownOutside:
                void 0 === v || v
                  ? void 0
                  : function (e) {
                      return e.preventDefault();
                    },
              side: void 0 === n ? "bottom" : n,
              sideOffset: void 0 === r ? 14 : r,
              className: (0, o.Z)(
                "relative rounded-lg border border-black/10 bg-black p-1 shadow-xs transition-opacity",
                void 0 !== l && l ? "max-w-sm" : "max-w-xs",
                g
              ),
              children: [
                (0, a.jsx)("span", {
                  className: (0, o.Z)(
                    "flex items-center whitespace-pre-wrap px-2 py-1 text-center font-medium normal-case text-white",
                    { "text-xs": "xsmall" === c, "text-sm": "small" === c }
                  ),
                  children: t,
                }),
                (void 0 === s || s) &&
                  (0, a.jsx)(i.Eh, {
                    asChild: !0,
                    children: (0, a.jsx)(d, {}),
                  }),
              ],
            });
          return (0, a.jsxs)(i.fC, {
            delayDuration: void 0 === p ? 300 : p,
            disableHoverableContent: !(void 0 !== f && f),
            open: x,
            children: [
              (0, a.jsx)(i.xz, {
                asChild: !0,
                children: (0, a.jsx)("span", { className: g, children: m }),
              }),
              void 0 === h || h ? (0, a.jsx)(i.h_, { children: b }) : b,
            ],
          });
        },
        d = s.Z.div(l());
    },
    63727: function (e, t, n) {
      n.d(t, {
        iW: function () {
          return R;
        },
        wm: function () {
          return z;
        },
        sY: function () {
          return A;
        },
        Xu: function () {
          return O;
        },
      });
      var r = n(21722),
        a = n(39324),
        i = n(71209),
        o = n(22830),
        s = n(39889),
        l = n(35250),
        u = n(56060),
        d = n(35448),
        c = n(13451),
        f = n(24396),
        h = n(19841),
        g = n(75861),
        m = n(70575),
        p = n(70079),
        v = n(1454),
        x = n(3001),
        b = n(75908),
        y = n(35290),
        w = n(32787),
        j = n(75955),
        _ = n(24274),
        C = n(32689),
        M = n(59110),
        k = n(77442),
        T = n(59114),
        N = n(48727),
        S = n(38317),
        Z = n(19265),
        P = n(97688),
        F = n(57924),
        I = n(61888),
        D = n(85023),
        E = ""
          .concat("oai/apps/hasUserContextFirstTime", "/")
          .concat("2023-06-29"),
        L = function (e) {
          var t = e.onClose,
            n = (0, b.Z)(),
            r = (0, p.useCallback)(
              function () {
                D.m.setItem(E, !0), t();
              },
              [t]
            );
          return (0, l.jsxs)(N.Z, {
            isOpen: !0,
            onClose: I.noop,
            size: "custom",
            className: "max-w-xl",
            type: "success",
            title: n.formatMessage(U.title),
            primaryButton: (0, l.jsx)(T.ZP.Button, {
              onClick: r,
              title: n.formatMessage(U.ok),
              color: "primary",
            }),
            children: [
              (0, l.jsxs)("div", {
                className: "mb-6 flex flex-col gap-3",
                children: [
                  (0, l.jsx)("p", {
                    children: (0, l.jsx)(y.Z, (0, a._)({}, U.body1)),
                  }),
                  (0, l.jsx)("p", {
                    children: (0, l.jsx)(y.Z, (0, a._)({}, U.body2)),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "flex flex-col gap-3 text-sm text-gray-500",
                children: (0, l.jsx)("p", {
                  children: (0, l.jsx)(
                    y.Z,
                    (0, i._)((0, a._)({}, U.legal1), {
                      values: {
                        strong: function (e) {
                          return (0, l.jsx)("strong", { children: e });
                        },
                        article: function (e) {
                          return (0, l.jsx)("a", {
                            href: R,
                            target: "_blank",
                            className: "underline",
                            rel: "noopener noreferrer",
                            children: e,
                          });
                        },
                      },
                    })
                  ),
                }),
              }),
            ],
          });
        },
        U = (0, x.vU)({
          title: {
            id: "UserContextFirstTimeModal.title",
            defaultMessage: "Introducing Chat preferences",
            description: "Title of the UserContextFirstTimeModal",
          },
          body1: {
            id: "UserContextFirstTimeModal.body1",
            defaultMessage:
              "Chat preferences let you share anything you'd like ChatGPT to consider in its response.",
            description:
              "Body of the first paragraph UserContextFirstTimeModal",
          },
          body2: {
            id: "UserContextFirstTimeModal.body2",
            defaultMessage:
              "Your instructions will be added to new conversations going forward, and you can edit or delete them at any time.",
            description:
              "Body of the second paragraph UserContextFirstTimeModal",
          },
          legal1: {
            id: "UserContextFirstTimeModal.legal1",
            defaultMessage:
              "<strong>Important:</strong> This information will also be used to improve model performance and shared with plugin developers – visit our <article>Help Center</article> to learn more.",
            description:
              "Legal text of the first paragraph UserContextFirstTimeModal",
          },
          ok: {
            id: "UserContextFirstTimeModal.ok",
            defaultMessage: "OK",
            description: "Button to close the UserContextFirstTimeModal",
          },
        }),
        A = (0, x.vU)({
          tipsHeader: {
            id: "userContextModal.tipsHeader",
            defaultMessage: "Thought starters",
            description: "header for chat preferences tips",
          },
          aboutUserTip1: {
            id: "userContextModal.aboutUserTip1",
            defaultMessage: "Where are you based?",
            description: "tips for chat preferences about you",
          },
          aboutUserTip2: {
            id: "userContextModal.aboutUserTip2",
            defaultMessage: "What do you do for work?",
            description: "tips for chat preferences about you",
          },
          aboutUserTip3: {
            id: "userContextModal.aboutUserTip3",
            defaultMessage: "What are your hobbies and interests?",
            description: "tips for chat preferences about you",
          },
          aboutUserTip4: {
            id: "userContextModal.aboutUserTip4",
            defaultMessage: "What subjects can you talk about for hours?",
            description: "tips for chat preferences about you",
          },
          aboutUserTip5: {
            id: "userContextModal.aboutUserTip5",
            defaultMessage: "What are some goals you have?",
            description: "tips for chat preferences about you",
          },
          modelTip1: {
            id: "userContextModal.modelTip1",
            defaultMessage: "How formal or casual should ChatGPT be?",
            description: "tips for chat preferences about model",
          },
          modelTip2: {
            id: "userContextModal.modelTip2",
            defaultMessage: "How long or short should responses generally be?",
            description: "tips for chat preferences about model",
          },
          modelTip3: {
            id: "userContextModal.modelTip3",
            defaultMessage: "How do you want to be addressed?",
            description: "tips for chat preferences about model",
          },
          modelTip4: {
            id: "userContextModal.modelTip4",
            defaultMessage:
              "Should ChatGPT have opinions on topics or remain neutral?",
            description: "tips for chat preferences about model",
          },
          save: {
            id: "userContextModal.save",
            defaultMessage: "Save",
            description: "save button for my profile modal",
          },
          cancel: {
            id: "userContextModal.cancel",
            defaultMessage: "Cancel",
            description: "Cancel button for chat preferences modal",
          },
          aboutYouHelpText: {
            id: "userContextModal.aboutYouHelpText",
            defaultMessage:
              "What would you like ChatGPT to know about you to provide better responses?",
            description: "help text for about you section of chat preferences",
          },
          modelHelpText: {
            id: "userContextModal.modelHelpText",
            defaultMessage: "How would you like ChatGPT to respond?",
            description: "help text for about you section of chat preferences",
          },
          profileTitle: {
            id: "userContextModal.title",
            defaultMessage: "Chat preferences",
            description: "title for chat preferences modal",
          },
          profileSubhead: {
            id: "userContextModal.subhead",
            defaultMessage:
              "<article>Learn more</article> about chat preferences and how they’re used to help ChatGPT provide better responses.",
            description: "subhead for chat preferences modal",
          },
          messageLimitError: {
            id: "userContextModal.messageLimitError",
            defaultMessage:
              "Please limit your responses to {limit} characters or less.",
            description: "error message for chat preferences modal",
          },
          showTips: {
            id: "userContextModal.showTips",
            defaultMessage: "Show tips",
            description: "show tips button for chat preferences modal",
          },
          hideTips: {
            id: "userContextModal.hideTips",
            defaultMessage: "Hide tips",
            description: "hide tips button for chat preferences modal",
          },
          confirmCloseTitle: {
            id: "userContextModal.confirmCloseTitle",
            defaultMessage: "You have unsaved changes.",
            description: "title for confirm close modal",
          },
          confirmCloseBody: {
            id: "userContextModal.confirmCloseBody",
            defaultMessage:
              "Are you sure you want to exit? Any changes you made will be permanently lost.",
            description: "confirm close modal",
          },
          confirmCloseCancel: {
            id: "userContextModal.confirmCloseCancel",
            defaultMessage: "Back",
            description: "cancel button for confirm close modal",
          },
          confirmCloseOk: {
            id: "userContextModal.confirmCloseOk",
            defaultMessage: "Exit",
            description: "ok button for confirm close modal",
          },
          modApiVoilation: {
            id: "userContextModal.modApiVoilation",
            defaultMessage:
              "This content may violate our <policyLink>content policy</policyLink>. If you believe this to be in error, please <feedbackLink>submit your feedback</feedbackLink> — your input will aid our research in this area.",
            description: "error message for mod api voilation",
          },
        }),
        R =
          "https://help.openai.com/en/articles/8096356-chat-preference-for-chatgpt",
        B = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return ["userContext", e];
        };
      function O(e) {
        var t = (0, M.hz)(),
          n = (0, w.kP)().session;
        return (0, f.a)(
          B(null == n ? void 0 : n.accessToken),
          function () {
            return _.ZP.getUserSystemMessage(
              (null == n ? void 0 : n.accessToken) || ""
            ).catch(function () {
              P.m.danger("Failed to get your chat preferences");
            });
          },
          {
            enabled: !!(
              e &&
              (null == n ? void 0 : n.accessToken) &&
              t.has("system_message2")
            ),
            select: function (e) {
              var t, n;
              return {
                aboutUserMessage:
                  null !== (t = null == e ? void 0 : e.about_user_message) &&
                  void 0 !== t
                    ? t
                    : "",
                aboutModelMessage:
                  null !== (n = null == e ? void 0 : e.about_model_message) &&
                  void 0 !== n
                    ? n
                    : "",
              };
            },
          }
        );
      }
      var q = { aboutUserMessage: void 0, aboutModelMessage: void 0 };
      function z() {
        var e,
          t,
          n,
          u,
          f,
          h,
          g,
          m,
          v = (0, b.Z)(),
          x = !1 == !!D.m.getItem(E),
          M = (0, o._)((0, p.useState)(!1), 2),
          k = M[0],
          I = M[1],
          U = (0, w.kP)().loading,
          z = (0, C.tN)(function (e) {
            return e.activeModals.has(C.B.UserContext);
          }),
          G = O(z && !U),
          $ = G.isLoading,
          Q = G.data,
          Y = null != Q ? Q : {},
          X = Y.aboutUserMessage,
          K = void 0 === X ? "" : X,
          ee = Y.aboutModelMessage,
          et = void 0 === ee ? "" : ee,
          en = (0, o._)((0, p.useState)(q), 2),
          er = en[0],
          ea = en[1],
          ei = er.aboutUserMessage,
          eo = er.aboutModelMessage,
          es = (0, o._)((0, p.useState)(null), 2),
          el = es[0],
          eu = es[1],
          ed = (0, p.useCallback)(function () {
            C.vm.closeModal(C.B.UserContext), ea(q), eu(null);
          }, []),
          ec =
            ((t = (e = {
              onSuccess: function () {
                ed();
              },
              onError: function (e) {
                var t, n, r, a;
                return (
                  (null === (t = e.response) || void 0 === t
                    ? void 0
                    : t.reason) === "content_policy" &&
                  (null === (n = e.response) || void 0 === n ? void 0 : n.field)
                    ? eu(
                        null === (r = e.response) || void 0 === r
                          ? void 0
                          : r.field
                      )
                    : P.m.danger(
                        null !== (a = e.message) && void 0 !== a
                          ? a
                          : "Failed to update chat preferences."
                      ),
                  e
                );
              },
            }).onSuccess),
            (n = e.onError),
            (u = (0, w.kP)().session),
            (f = (0, w.kP)().session),
            (h = (0, d.NL)()),
            (0, c.D)({
              mutationFn: function (e) {
                var t = e.userContext;
                return _.ZP.createOrUpdateUserSystemMessage(
                  (null == u ? void 0 : u.accessToken) || "",
                  t
                );
              },
              onSettled: function () {
                h.invalidateQueries({
                  queryKey: B(null == f ? void 0 : f.accessToken),
                });
              },
              onSuccess: t,
              onError: n,
            })),
          ef = ec.isLoading,
          eh = ec.mutate,
          eg = (0, o._)((0, p.useState)(!1), 2),
          em = eg[0],
          ep = eg[1],
          ev = V(null != ei ? ei : "") || V(null != eo ? eo : ""),
          ex = (void 0 !== eo && eo !== et) || (void 0 !== ei && ei !== K),
          eb = (0, p.useCallback)(
            function () {
              ex ? ep(!0) : ed();
            },
            [ed, ex]
          ),
          ey = (0, p.useCallback)(
            (0, r._)(function () {
              return (0, s.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (ef) return [3, 2];
                    return (
                      eu(null),
                      [
                        4,
                        eh({
                          userContext: {
                            aboutUserMessage: null != ei ? ei : "",
                            aboutModelMessage: null != eo ? eo : "",
                          },
                        }),
                      ]
                    );
                  case 1:
                    e.sent(), (e.label = 2);
                  case 2:
                    return [2];
                }
              });
            }),
            [ef, eo, ei, eh]
          ),
          ew = (0, p.useCallback)(
            function () {
              if (ev) {
                var e,
                  t,
                  n = V(null != ei ? ei : ""),
                  r = V(null != eo ? eo : "");
                n &&
                  j.m.logEvent(
                    "chatgpt_user_context_modal__message_past_limit",
                    void 0,
                    {
                      type: "about_user_message",
                      limit: W.toString(),
                      character_length:
                        null !==
                          (e = null == ei ? void 0 : ei.length.toString()) &&
                        void 0 !== e
                          ? e
                          : "",
                    }
                  ),
                  r &&
                    j.m.logEvent(
                      "chatgpt_user_context_modal__message_past_limit",
                      void 0,
                      {
                        type: "about_model_message",
                        limit: W.toString(),
                        character_length:
                          null !==
                            (t = null == eo ? void 0 : eo.length.toString()) &&
                          void 0 !== t
                            ? t
                            : "",
                      }
                    ),
                  P.m.danger(
                    v.formatMessage(A.messageLimitError, { limit: W }),
                    { duration: 4, hasCloseButton: !0 }
                  );
                return;
              }
              ey();
            },
            [v, ev, eo, ei, ey]
          );
        if (z && x && !k)
          return (0, l.jsx)(L, {
            onClose: function () {
              I(!0);
            },
          });
        if (z && em) {
          var ej = function () {
            ep(!1);
          };
          return (0, l.jsx)(
            N.Z,
            {
              isOpen: !0,
              onClose: ej,
              type: "success",
              title: v.formatMessage(A.confirmCloseTitle),
              primaryButton: (0, l.jsx)(T.ZP.Button, {
                title: v.formatMessage(A.confirmCloseOk),
                color: "danger",
                onClick: function () {
                  ed(), ej();
                },
              }),
              secondaryButton: (0, l.jsx)(T.ZP.Button, {
                title: v.formatMessage(A.confirmCloseCancel),
                color: "neutral",
                onClick: ej,
              }),
              children: (0, l.jsx)("div", {
                className: "text-sm",
                children: (0, l.jsx)(y.Z, (0, a._)({}, A.confirmCloseBody)),
              }),
            },
            "confirm-close"
          );
        }
        return (0, l.jsxs)(
          N.Z,
          {
            isOpen: z,
            onClose: eb,
            type: "success",
            size: "custom",
            className: "max-w-lg xl:max-w-xl",
            title: v.formatMessage(A.profileTitle),
            closeButton: (0, l.jsx)(F.u, {
              sideOffset: 4,
              interactive: !0,
              delayDuration: 0,
              label: (0, l.jsx)("div", {
                children: (0, l.jsx)(
                  y.Z,
                  (0, i._)((0, a._)({}, A.profileSubhead), {
                    values: {
                      article: function (e) {
                        return (0, l.jsx)("a", {
                          href: R,
                          target: "_blank",
                          className: "underline",
                          rel: "noreferrer",
                          children: e,
                        });
                      },
                    },
                  })
                ),
              }),
              side: "bottom",
              children: (0, l.jsx)(S.HV, {
                className: "h-6 w-6 flex-shrink-0 text-gray-500",
              }),
            }),
            children: [
              U || $
                ? (0, l.jsx)("div", {
                    className: "flex h-14 items-center justify-center",
                    children: (0, l.jsx)(Z.Z, {}),
                  })
                : (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("p", {
                        className: "text-muted pb-3 pt-2 text-sm text-gray-600",
                        children: (0, l.jsx)(
                          y.Z,
                          (0, a._)({}, A.aboutYouHelpText)
                        ),
                      }),
                      (0, l.jsx)(J, {
                        className: "mb-3",
                        onSubmit: ew,
                        tip: (0, l.jsx)(H, {
                          children: (0, l.jsxs)("ul", {
                            className: "list-disc pl-5",
                            children: [
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, A.aboutUserTip1)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, A.aboutUserTip2)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, A.aboutUserTip3)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, A.aboutUserTip4)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, A.aboutUserTip5)
                                ),
                              }),
                            ],
                          }),
                        }),
                        hasError: "about_user_message" === el,
                        value: null != ei ? ei : K,
                        onChange: function (e) {
                          return ea(function (t) {
                            return {
                              aboutModelMessage:
                                null !== (g = t.aboutModelMessage) &&
                                void 0 !== g
                                  ? g
                                  : et,
                              aboutUserMessage: e.target.value,
                            };
                          });
                        },
                      }),
                      (0, l.jsx)("p", {
                        className: "text-muted py-3 text-sm text-gray-600",
                        children: (0, l.jsx)(
                          y.Z,
                          (0, a._)({}, A.modelHelpText)
                        ),
                      }),
                      (0, l.jsx)(J, {
                        onSubmit: ew,
                        tip: (0, l.jsx)(H, {
                          children: (0, l.jsxs)("ul", {
                            className: "list-disc pl-5",
                            children: [
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, A.modelTip1)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, A.modelTip2)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, A.modelTip3)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  y.Z,
                                  (0, a._)({}, A.modelTip4)
                                ),
                              }),
                            ],
                          }),
                        }),
                        hasError: "about_model_message" === el,
                        value: null != eo ? eo : et,
                        onChange: function (e) {
                          return ea(function (t) {
                            return {
                              aboutUserMessage:
                                null !== (m = t.aboutUserMessage) &&
                                void 0 !== m
                                  ? m
                                  : K,
                              aboutModelMessage: e.target.value,
                            };
                          });
                        },
                      }),
                    ],
                  }),
              (0, l.jsx)("div", {
                className: "mt-5 sm:mt-4",
                children: (0, l.jsxs)("div", {
                  className:
                    "flex flex-grow flex-col items-stretch justify-between gap-0 sm:flex-row sm:items-center sm:gap-3",
                  children: [
                    (0, l.jsx)("div", {
                      className:
                        "visible mt-5 text-center text-xs text-orange-400 empty:mt-0 sm:mt-4 sm:text-left ",
                      children:
                        el &&
                        (0, l.jsx)(
                          y.Z,
                          (0, i._)((0, a._)({}, A.modApiVoilation), {
                            values: {
                              policyLink: function (e) {
                                return (0, l.jsx)("a", {
                                  href: "https://platform.openai.com/docs/usage-policies/content-policy",
                                  className: "underline",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: e,
                                });
                              },
                              feedbackLink: function (e) {
                                return (0, l.jsx)("a", {
                                  href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
                                  className: "underline",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: e,
                                });
                              },
                            },
                          })
                        ),
                    }),
                    (0, l.jsx)(T.ZP.Actions, {
                      secondaryButton: (0, l.jsx)(T.ZP.Button, {
                        onClick: eb,
                        children: (0, l.jsx)(y.Z, (0, a._)({}, A.cancel)),
                      }),
                      primaryButton: (0, l.jsx)(T.ZP.Button, {
                        loading: ef,
                        onClick: ew,
                        color: "primary",
                        visuallyDisabled: ev,
                        disabled: !ex,
                        children: (0, l.jsx)(y.Z, (0, a._)({}, A.save)),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          },
          "user-context"
        );
      }
      var H = function (e) {
          var t = e.children;
          return (0, l.jsx)("div", {
            className: "whitespace-pre-line",
            children: t,
          });
        },
        W = 1500,
        V = function (e) {
          return e.length > W;
        },
        J = function (e) {
          var t = e.onChange,
            n = e.onSubmit,
            r = e.placeholder,
            i = e.value,
            s = e.tip,
            d = e.hasError,
            c = e.className,
            f = (0, b.Z)(),
            x = (0, p.useRef)(null),
            w = (0, k.x_)(),
            j = (0, k.aj)(),
            _ = !w,
            C = (0, o._)((0, p.useState)(!1), 2),
            M = C[0],
            Z = C[1],
            P = (0, o._)((0, p.useState)(_), 2),
            F = P[0],
            I = P[1],
            D = V(i);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(N.Z, {
                isOpen: _ && !F,
                type: "success",
                size: "custom",
                className: "max-w-lg",
                title: f.formatMessage(A.tipsHeader),
                closeButton: (0, l.jsx)(T.ZP.CloseButton, {
                  onClose: function () {
                    I(!0);
                  },
                }),
                onClose: function () {
                  I(!0);
                },
                children: s,
              }),
              (0, l.jsxs)(u.fC, {
                open: !_ && M && !F,
                children: [
                  (0, l.jsxs)("div", {
                    className: c,
                    children: [
                      (0, l.jsx)(u.xz, {
                        asChild: !0,
                        children: (0, l.jsx)("textarea", {
                          ref: x,
                          className: (0, h.Z)(
                            "w-full	resize-none rounded p-4 placeholder:text-gray-300 dark:bg-gray-800",
                            {
                              "border-orange-400 focus:border-orange-400": d,
                              "border-red-500 focus:border-red-500": D && !d,
                              "border-gray-100 focus:border-brand-green":
                                !D && !d,
                            }
                          ),
                          placeholder: r,
                          onKeyDown: function (e) {
                            "Enter" !== e.key ||
                              !e.metaKey ||
                              e.shiftKey ||
                              e.nativeEvent.isComposing ||
                              (e.preventDefault(), n());
                          },
                          rows: w && !j ? 8 : 7,
                          value: i,
                          onChange: t,
                          onBlur: function () {
                            Z(!1);
                          },
                          onFocus: function () {
                            Z(!0);
                          },
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: (0, h.Z)(
                          "flex items-center justify-between px-1 text-xs",
                          D ? "text-red-600" : "text-gray-400"
                        ),
                        children: [
                          (0, l.jsxs)("div", { children: [i.length, "/", W] }),
                          (0, l.jsx)("button", {
                            className: (0, h.Z)(
                              "flex items-center gap-1",
                              M ? "text-gray-400" : "text-gray-200"
                            ),
                            onClick: function () {
                              var e;
                              null === (e = x.current) ||
                                void 0 === e ||
                                e.focus(),
                                I(!F);
                            },
                            tabIndex: -1,
                            children: (0, l.jsx)(g.M, {
                              initial: !1,
                              children:
                                M &&
                                (0, l.jsx)(
                                  m.E.div,
                                  {
                                    className: "flex items-center gap-1",
                                    initial: { opacity: 0 },
                                    animate: {
                                      opacity: 1,
                                      transition: {
                                        duration: 0.2,
                                        ease: "easeIn",
                                      },
                                    },
                                    exit: {
                                      opacity: 0,
                                      transition: {
                                        duration: 0.2,
                                        ease: "easeIn",
                                      },
                                    },
                                    children: F
                                      ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                            (0, l.jsx)(
                                              y.Z,
                                              (0, a._)({}, A.showTips)
                                            ),
                                            (0, l.jsx)(S.ZP, {
                                              size: "xsmall",
                                              icon: v.rDJ,
                                            }),
                                          ],
                                        })
                                      : (0, l.jsxs)(l.Fragment, {
                                          children: [
                                            (0, l.jsx)(
                                              y.Z,
                                              (0, a._)({}, A.hideTips)
                                            ),
                                            (0, l.jsx)(S.ZP, {
                                              size: "xsmall",
                                              icon: v.rzC,
                                            }),
                                          ],
                                        }),
                                  },
                                  "show-hide"
                                ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)(u.h_, {
                    children: (0, l.jsx)(u.VY, {
                      side: "right",
                      align: "start",
                      sideOffset: 12,
                      className:
                        "relative max-w-[220px] animate-slideLeftAndFade select-none rounded-xl border-gray-100 bg-white p-4 text-sm text-gray-600 shadow-[0px_4px_14px_rgba(0,0,0,0.06)] dark:bg-gray-900 dark:text-white xl:max-w-xs",
                      onOpenAutoFocus: function (e) {
                        e.preventDefault();
                      },
                      onCloseAutoFocus: function (e) {
                        e.preventDefault();
                      },
                      children: (0, l.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [
                          (0, l.jsx)("strong", {
                            children: (0, l.jsx)(
                              y.Z,
                              (0, a._)({}, A.tipsHeader)
                            ),
                          }),
                          s,
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    32165: function (e, t, n) {
      n.d(t, {
        Ap: function () {
          return d;
        },
        Ix: function () {
          return f;
        },
        _O: function () {
          return h;
        },
        bE: function () {
          return g;
        },
        qH: function () {
          return c;
        },
      });
      var r = n(96237),
        a = n(70079),
        i = n(75908),
        o = n(3001),
        s = n(32787),
        l = n(32402),
        u = n(59110);
      function d() {
        var e = (0, i.Z)(),
          t = e.formatMessage(m.adminRoleName),
          n = e.formatMessage(m.standardRoleName);
        return (0, a.useMemo)(
          function () {
            var e;
            return (
              (e = {}),
              (0, r._)(e, l.r3.ADMIN, t),
              (0, r._)(e, l.r3.STANDARD, n),
              e
            );
          },
          [t, n]
        );
      }
      function c(e) {
        var t = (0, i.Z)();
        return e
          ? "personal" === e.structure
            ? t.formatMessage(m.personalPlanName)
            : t.formatMessage(m.businessPlanName)
          : t.formatMessage(m.personalPlanName);
      }
      function f(e) {
        var t,
          n,
          r,
          a,
          o,
          l,
          d = (0, s.kP)().session,
          c = (0, u.ec)(function (e) {
            return e.currentWorkspace;
          }),
          f = (0, u.ec)(u.F_.isPersonalWorkspace),
          h = (0, u.$T)(),
          g =
            ((n = (0, i.Z)()),
            null !== (t = null == c ? void 0 : c.name) && void 0 !== t
              ? t
              : n.formatMessage(m.defaultWorkspaceTitle)),
          p =
            null !==
              (l =
                null !==
                  (o =
                    null == d
                      ? void 0
                      : null === (r = d.user) || void 0 === r
                      ? void 0
                      : r.name) && void 0 !== o
                  ? o
                  : null == d
                  ? void 0
                  : null === (a = d.user) || void 0 === a
                  ? void 0
                  : a.email) && void 0 !== l
              ? l
              : null;
        return e && !h
          ? "personal" === e.structure
            ? p
            : e.name
          : c
          ? f
            ? p
            : g
          : p;
      }
      function h() {
        return (0, u.ec)(function (e) {
          return e.workspaces;
        });
      }
      function g(e) {
        var t = h().find(function (t) {
          return t.id === e;
        });
        return !!t && t.role === l.r3.ADMIN;
      }
      var m = (0, o.vU)({
        defaultWorkspaceTitle: {
          id: "useWorkspaces.defaultWorkspaceTitle",
          defaultMessage: "Untitled Workspace",
          description: "title for workspace without a name",
        },
        personalPlanName: {
          id: "useWorkspaces.personalPlanName",
          defaultMessage: "Personal",
          description: "label for personal tier account",
        },
        businessPlanName: {
          id: "useWorkspaces.businessPlanName",
          defaultMessage: "Business",
          description: "label for business tier account",
        },
        adminRoleName: {
          id: "useWorkspaces.adminRoleName",
          defaultMessage: "Admin",
          description: "Role name for an admin user",
        },
        standardRoleName: {
          id: "useWorkspacews.standardRoleName",
          defaultMessage: "Member",
          description: "Role name for a standard user",
        },
      });
    },
    870: function (e, t, n) {
      var r = n(39324),
        a = n(71209),
        i = n(70216),
        o = n(35250),
        s = n(68789),
        l = n(70079),
        u = n(62440),
        d = {
          Root: s.fC,
          Trigger: function (e) {
            return (0, o.jsx)(u.J7, (0, r._)({ $as: s.xz }, e));
          },
          Portal: s.Uv,
          Content: function (e) {
            return (0, o.jsx)(
              u.ay,
              (0, r._)({ $as: s.VY, sideOffset: 4, align: "start" }, e)
            );
          },
          Item: l.forwardRef(function (e, t) {
            var n = e.children,
              l = e.onSelect,
              d = (0, i._)(e, ["children", "onSelect"]);
            return (0,
            o.jsx)(u.mS, (0, a._)((0, r._)({ $as: s.ck, ref: t, onSelect: l }, d), { children: n }));
          }),
        };
      t.Z = d;
    },
    25422: function (e, t, n) {
      var r = n(39324),
        a = n(71209),
        i = n(70216),
        o = n(35250),
        s = n(15228),
        l = n(70079),
        u = n(1454),
        d = n(38317),
        c = n(62440),
        f = {
          Root: s.fC,
          Trigger: function (e) {
            return (0, o.jsx)(c.J7, (0, r._)({ $as: s.xz }, e));
          },
          Value: s.B4,
          Icon: function () {
            return (0, o.jsx)(s.JO, {
              children: (0, o.jsx)(d.ZP, { icon: u.bTu, size: "small" }),
            });
          },
          Portal: s.h_,
          Content: function (e) {
            var t = e.children,
              n = (0, i._)(e, ["children"]);
            return (0, o.jsxs)(
              c.ay,
              (0, a._)(
                (0, r._)(
                  {
                    $as: s.VY,
                    side: "bottom",
                    sideOffset: 4,
                    position: "popper",
                  },
                  n
                ),
                {
                  children: [
                    (0, o.jsx)(s.u_, {
                      className:
                        "flex h-8 cursor-default items-center justify-center bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200",
                      children: (0, o.jsx)(d.ZP, { icon: u.rH8 }),
                    }),
                    (0, o.jsx)(s.l_, { children: t }),
                    (0, o.jsx)(s.$G, {
                      className:
                        "flex h-8 cursor-default items-center justify-center bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200",
                      children: (0, o.jsx)(d.ZP, { icon: u.bTu }),
                    }),
                  ],
                }
              )
            );
          },
          Item: l.forwardRef(function (e, t) {
            var n = e.children,
              l = (0, i._)(e, ["children"]);
            return (0,
            o.jsx)(c.mS, (0, a._)((0, r._)({ $as: s.ck, ref: t }, l), { children: (0, o.jsx)(s.eT, { children: n }) }));
          }),
        };
      t.Z = f;
    },
    25345: function (e, t, n) {
      var r = n(39324),
        a = n(71209),
        i = n(22830),
        o = n(35250),
        s = n(19841),
        l = n(70079);
      t.Z = {
        Root: function (e) {
          var t = e.children,
            n = e.fixed,
            r = e.className,
            a = e.size,
            u = (0, l.useRef)(null),
            d = (0, l.useRef)(null),
            c = (0, i._)((0, l.useState)(!1), 2),
            f = c[0],
            h = c[1];
          return (
            (0, l.useEffect)(function () {
              var e = u.current,
                t = d.current;
              if (e && t) {
                var n = new ResizeObserver(function () {
                  h(t.scrollHeight > e.clientHeight);
                });
                return (
                  n.observe(e),
                  function () {
                    return n.disconnect();
                  }
                );
              }
            }, []),
            (0, o.jsx)("div", {
              className: (0, s.Z)(
                "overflow-y-auto text-gray-600 dark:text-gray-300",
                "normal" === (void 0 === a ? "normal" : a)
                  ? "text-base"
                  : "text-sm",
                f && "pr-1",
                r
              ),
              ref: u,
              children: (0, o.jsx)("table", {
                className: (0, s.Z)(
                  "w-full border-separate border-spacing-0",
                  void 0 !== n && n && "table-fixed"
                ),
                ref: d,
                children: t,
              }),
            })
          );
        },
        Header: function (e) {
          var t = e.children;
          return (0, o.jsx)("thead", {
            children: (0, o.jsx)("tr", { children: t }),
          });
        },
        HeaderCell: function (e) {
          var t = e.textAlign,
            n = e.children,
            r = e.className;
          return (0, o.jsx)("th", {
            className: (0, s.Z)(
              "sticky top-0 z-10 border-b border-black/10 bg-white py-2 pr-4 font-medium last:pr-0 dark:border-white/10",
              "left" === (void 0 === t ? "left" : t)
                ? "text-left"
                : "text-right",
              void 0 === r ? "dark:bg-gray-900" : r
            ),
            children: n,
          });
        },
        Body: function (e) {
          var t = e.children;
          return (0, o.jsx)("tbody", { children: t });
        },
        Row: function (e) {
          var t = e.children,
            n = e.disabled,
            i = void 0 !== n && n;
          return (0, o.jsx)(
            "tr",
            (0, a._)((0, r._)({}, i ? { "data-disabled": !0 } : {}), {
              className: (0, s.Z)(i ? "pointer-events-none" : ""),
              children: t,
            })
          );
        },
        Cell: function (e) {
          var t = e.textAlign,
            n = e.children,
            r = e.className;
          return (0, o.jsx)("td", {
            className: (0, s.Z)(
              "border-b border-black/10  pr-4 last:pr-0 dark:border-white/10 [tr:last-child_&]:border-b-0",
              "left" === (void 0 === t ? "left" : t)
                ? "text-left"
                : "text-right",
              r
            ),
            children: (0, o.jsx)("div", {
              className: "py-2 [tr[data-disabled=true]_&]:opacity-50",
              children: n,
            }),
          });
        },
        Actions: function (e) {
          var t = e.children;
          return (0, o.jsx)("div", {
            className: "text-md flex items-center justify-end gap-2",
            children: t,
          });
        },
      };
    },
    62440: function (e, t, n) {
      n.d(t, {
        J7: function () {
          return l;
        },
        ay: function () {
          return d;
        },
        mS: function () {
          return u;
        },
      });
      var r = n(4337),
        a = n(34303);
      function i() {
        var e = (0, r._)([
          "\ntext-gray-700 border border-transparent inline-flex h-9 items-center justify-center gap-4 rounded-md bg-white px-3 text-sm\ndark:text-gray-200 dark:transparent dark:bg-transparent\nleading-none outline-none cursor-pointer\nhover:bg-gray-50 dark:hover:bg-[#494A54]\nfocus-visible:border-blue-500 dark:focus-visible:border-blue-500\nradix-state-active:text-gray-600 dark:radix-state-active::text-gray-400\nradix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-gray-500 dark:radix-disabled:bg-transparent dark:radix-disabled:text-gray-500\n",
        ]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = (0, r._)([
          "\nrelative flex h-8 cursor-pointer select-none items-center rounded-md pl-3 pr-7 text-sm leading-none text-gray-700 hover:bg-gray-50 radix-disabled:pointer-events-none radix-highlighted:bg-gray-50 radix-disabled:text-gray-300 radix-highlighted:outline-none dark:text-gray-200 dark:hover:bg-[#2E2F33] dark:radix-highlighted:bg-[#2E2F33] dark:radix-disabled:text-gray-600 dark:radix-highlighted:hover:bg-[#2E2F33]\n",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = (0, r._)([
          "\nmin-w-[220px] rounded-lg bg-white dark:bg-gray-900 p-[5px] shadow-xs will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade\n",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      var l = a.Z.button(i()),
        u = a.Z.div(o()),
        d = a.Z.div(s());
    },
    25094: function (e, t, n) {
      n.d(t, {
        $H: function () {
          return h;
        },
        Iy: function () {
          return c;
        },
        L8: function () {
          return f;
        },
        O6: function () {
          return m;
        },
        VF: function () {
          return g;
        },
        qS: function () {
          return p;
        },
      });
      var r = n(21722),
        a = n(39889),
        i = n(70079),
        o = n(75908),
        s = n(3001),
        l = n(32787),
        u = n(24274),
        d = n(97688);
      function c(e) {
        return e.replace("file-service://", "");
      }
      function f(e) {
        return "file-service://" + e;
      }
      function h(e) {
        return e.startsWith("file-service://");
      }
      function g() {
        var e = (0, o.Z)();
        return (0, i.useCallback)(
          function (t, n) {
            switch (t) {
              case "file_too_large":
                return e.formatMessage(v.fileTooLarge, n);
              case "over_user_quota":
                return e.formatMessage(v.overUserQuota, n);
              case "file_not_found":
                return e.formatMessage(v.fileNotFound, n);
              case "file_timed_out":
                return e.formatMessage(v.fileTimedOut, n);
              case "ace_pod_expired":
                return e.formatMessage(v.codeInterpreterSessionTimeout, n);
              case "default_create_entry_error":
                return e.formatMessage(v.defaultCreateEntryError, n);
              case "default_download_link_error":
                return e.formatMessage(v.defaultDownloadLinkError, n);
              default:
                return e.formatMessage(v.unknownError);
            }
          },
          [e]
        );
      }
      function m() {
        var e,
          t = (0, l.kP)().session,
          n = (0, o.Z)();
        return (
          (e = (0, r._)(function (e, r) {
            var i, o, s, l, c;
            return (0, a.Jh)(this, function (a) {
              switch (a.label) {
                case 0:
                  if (null == t)
                    return (
                      d.m.danger(n.formatMessage(v.fileDownloadFailed)), [2, !1]
                    );
                  a.label = 1;
                case 1:
                  return (
                    a.trys.push([1, 4, , 5]),
                    [4, u.ZP.getFileDownloadLink(e, t.accessToken)]
                  );
                case 2:
                  if (!(i = a.sent()).download_url)
                    throw Error(
                      "File is not ready to download: " + JSON.stringify(i)
                    );
                  return [
                    4,
                    fetch(i.download_url).then(function (e) {
                      return e.blob();
                    }),
                  ];
                case 3:
                  return (
                    (o = a.sent()),
                    (s = URL.createObjectURL(o)),
                    (l = window.open(s, "_blank")) &&
                      l.addEventListener("beforeunload", function () {
                        URL.revokeObjectURL(s);
                      }),
                    ((c = document.createElement("a")).href = s),
                    (c.download = r),
                    (c.style.display = "none"),
                    c.click(),
                    URL.revokeObjectURL(s),
                    [3, 5]
                  );
                case 4:
                  return (
                    a.sent(),
                    d.m.danger(n.formatMessage(v.fileDownloadFailed)),
                    [2, !1]
                  );
                case 5:
                  return [2, !0];
              }
            });
          })),
          function (t, n) {
            return e.apply(this, arguments);
          }
        );
      }
      function p() {
        var e,
          t = (0, l.kP)().session,
          n = m();
        return (
          (e = (0, r._)(function (e, r) {
            var i;
            return (0, a.Jh)(this, function (a) {
              switch (a.label) {
                case 0:
                  if (null == t) return [2];
                  (i = 0), (a.label = 1);
                case 1:
                  if (!(i < e.length)) return [3, 4];
                  return [
                    4,
                    Promise.all(
                      e.slice(i, i + r).map(function (e) {
                        return n(e.id, e.name);
                      })
                    ),
                  ];
                case 2:
                  a.sent(), (a.label = 3);
                case 3:
                  return (i += r), [3, 1];
                case 4:
                  return [2];
              }
            });
          })),
          function (t, n) {
            return e.apply(this, arguments);
          }
        );
      }
      var v = (0, s.vU)({
        defaultCreateEntryError: {
          id: "fileUpload.defaultCreateEntryError",
          defaultMessage: "Unable to upload file",
          description: "Error message when file upload fails",
        },
        defaultDownloadLinkError: {
          id: "fileUpload.defaultDownloadLinkError",
          defaultMessage: "Failed to get upload status for {fileName}",
          description: "Error message when file download link fails",
        },
        unknownError: {
          id: "fileUpload.unknownError",
          defaultMessage: "Unknown error occurred",
          description: "Error message when file upload fails",
        },
        fileTooLarge: {
          id: "fileUpload.fileTooLarge",
          defaultMessage: "File is too large",
          description: "Error message when file is too large to upload",
        },
        overUserQuota: {
          id: "fileUpload.overUserQuota",
          defaultMessage: "User quota exceeded",
          description:
            "Error message when user storage space (quote) has been exceeded",
        },
        fileNotFound: {
          id: "fileUpload.fileNotFound",
          defaultMessage: "File not found",
          description: "Error message when file was not found",
        },
        fileTimedOut: {
          id: "fileUpload.fileTimedOut",
          defaultMessage: "File upload timed out. Please try again.",
          description: "Error message when file upload timed out",
        },
        codeInterpreterSessionTimeout: {
          id: "fileUpload.codeInterpreterSessionTimeout",
          defaultMessage: "Code interpreter session expired",
          description: "Error message when code interpreter session expired",
        },
        fileDownloadFailed: {
          id: "filesModal.fileDownloadFailed",
          defaultMessage: "File download failed. Please try again.",
          description: "Error message when file download fails",
        },
      });
    },
    87105: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return el;
        },
      });
      var r = n(39324),
        a = n(71209),
        i = n(70216),
        o = n(35250),
        s = n(7718),
        l = n(19841),
        u = n(86546),
        d = n(70079),
        c = n(21811),
        f = n(21437),
        h = n(32983),
        g = n(61110),
        m = n(55975),
        p = n(46050),
        v = n(29874),
        x = n(8449),
        b = n(15472);
      let y = {
          tokenize: function (e, t, n) {
            let r = this,
              a = this.events[this.events.length - 1],
              i =
                a && a[1].type === b.V.linePrefix
                  ? a[2].sliceSerialize(a[1], !0).length
                  : 0,
              o = [];
            return function (t) {
              return (
                m.q.backslash,
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function t(r) {
                  return r === m.q.backslash ||
                    (r === m.q.leftSquareBracket && o[0] === m.q.backslash)
                    ? (e.consume(r), o.push(r), t)
                    : (e.exit("mathFlowFenceSequence"),
                      o.length < 2 ? n(r) : (0, p.f)(e, s, b.V.whitespace)(r));
                })(t)
              );
            };
            function s(t) {
              return t === m.q.eof || (0, v.Ch)(t)
                ? l(t)
                : (e.enter("mathFlowFenceMeta"),
                  e.enter(b.V.chunkString, {
                    contentType: x._.contentTypeString,
                  }),
                  (function t(r) {
                    return r === m.q.eof || (0, v.Ch)(r)
                      ? (e.exit(b.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r))
                      : r === m.q.rightSquareBracket
                      ? n(r)
                      : (e.consume(r), t);
                  })(t));
            }
            function l(n) {
              return (
                e.exit("mathFlowFence"),
                r.interrupt
                  ? t(n)
                  : (function t(n) {
                      return n === m.q.eof
                        ? u(n)
                        : (0, v.Ch)(n)
                        ? e.attempt(
                            w,
                            e.attempt(
                              { tokenize: d, partial: !0 },
                              u,
                              i ? (0, p.f)(e, t, b.V.linePrefix, i + 1) : t
                            ),
                            u
                          )(n)
                        : (e.enter("mathFlowValue"),
                          (function n(r) {
                            return r === m.q.eof || (0, v.Ch)(r)
                              ? (e.exit("mathFlowValue"), t(r))
                              : (e.consume(r), n);
                          })(n));
                    })(n)
              );
            }
            function u(n) {
              return e.exit("mathFlow"), t(n);
            }
            function d(e, t, n) {
              let r = [];
              return (0, p.f)(
                e,
                function (t) {
                  return (
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    (function t(i) {
                      return (i === m.q.backslash && 0 === r.length) ||
                        (i === m.q.rightSquareBracket && r[0] === m.q.backslash)
                        ? (e.consume(i), r.push(i), t)
                        : r < o
                        ? n(i)
                        : (e.exit("mathFlowFenceSequence"),
                          (0, p.f)(e, a, b.V.whitespace)(i));
                    })(t)
                  );
                },
                b.V.linePrefix,
                x._.tabSize
              );
              function a(r) {
                return r === m.q.eof || (0, v.Ch)(r)
                  ? (e.exit("mathFlowFence"), t(r))
                  : n(r);
              }
            }
          },
          concrete: !0,
        },
        w = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter(b.V.lineEnding), e.consume(t), e.exit(b.V.lineEnding), a
              );
            };
            function a(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        j = {
          tokenize: function (e, t, n) {
            let r = this,
              a = r.events[r.events.length - 1],
              i =
                a && a[1].type === b.V.linePrefix
                  ? a[2].sliceSerialize(a[1], !0).length
                  : 0,
              o = 0;
            return function (t) {
              return (
                m.q.dollarSign,
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function t(r) {
                  return r === m.q.dollarSign
                    ? (e.consume(r), o++, t)
                    : (e.exit("mathFlowFenceSequence"),
                      o < 2 ? n(r) : (0, p.f)(e, s, b.V.whitespace)(r));
                })(t)
              );
            };
            function s(t) {
              return t === m.q.eof || (0, v.Ch)(t)
                ? l(t)
                : (e.enter("mathFlowFenceMeta"),
                  e.enter(b.V.chunkString, {
                    contentType: x._.contentTypeString,
                  }),
                  (function t(r) {
                    return r === m.q.eof || (0, v.Ch)(r)
                      ? (e.exit(b.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r))
                      : r === m.q.dollarSign
                      ? n(r)
                      : (e.consume(r), t);
                  })(t));
            }
            function l(n) {
              return (
                e.exit("mathFlowFence"),
                r.interrupt
                  ? t(n)
                  : (function t(n) {
                      return n === m.q.eof
                        ? u(n)
                        : (0, v.Ch)(n)
                        ? e.attempt(
                            _,
                            e.attempt(
                              { tokenize: d, partial: !0 },
                              u,
                              i ? (0, p.f)(e, t, b.V.linePrefix, i + 1) : t
                            ),
                            u
                          )(n)
                        : (e.enter("mathFlowValue"),
                          (function n(r) {
                            return r === m.q.eof || (0, v.Ch)(r)
                              ? (e.exit("mathFlowValue"), t(r))
                              : (e.consume(r), n);
                          })(n));
                    })(n)
              );
            }
            function u(n) {
              return e.exit("mathFlow"), t(n);
            }
            function d(e, t, n) {
              let r = 0;
              return (0, p.f)(
                e,
                function (t) {
                  return (
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    (function t(i) {
                      return i === m.q.dollarSign
                        ? (e.consume(i), r++, t)
                        : r < o
                        ? n(i)
                        : (e.exit("mathFlowFenceSequence"),
                          (0, p.f)(e, a, b.V.whitespace)(i));
                    })(t)
                  );
                },
                b.V.linePrefix,
                x._.tabSize
              );
              function a(r) {
                return r === m.q.eof || (0, v.Ch)(r)
                  ? (e.exit("mathFlowFence"), t(r))
                  : n(r);
              }
            }
          },
          concrete: !0,
        },
        _ = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                (0, v.Ch)(t),
                e.enter(b.V.lineEnding),
                e.consume(t),
                e.exit(b.V.lineEnding),
                a
              );
            };
            function a(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        };
      function C(e) {
        let t,
          n,
          r = e.length - 4,
          a = 3;
        if (
          (e[3][1].type === b.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === b.V.lineEnding || "space" === e[r][1].type)
        ) {
          for (t = a; ++t < r; )
            if ("mathTextData" === e[t][1].type) {
              (e[r][1].type = "mathTextPadding"),
                (e[a][1].type = "mathTextPadding"),
                (a += 2),
                (r -= 2);
              break;
            }
        }
        for (t = a - 1, r++; ++t <= r; )
          void 0 === n
            ? t !== r && e[t][1].type !== b.V.lineEnding && (n = t)
            : (t === r || e[t][1].type === b.V.lineEnding) &&
              ((e[n][1].type = "mathTextData"),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (r -= t - n - 2),
                (t = n + 2)),
              (n = void 0));
        return e;
      }
      function M(e) {
        return (
          e !== m.q.backslash ||
          this.events[this.events.length - 1][1].type === b.V.characterEscape
        );
      }
      function k(e) {
        let t,
          n,
          r = e.length - 4,
          a = 3;
        if (
          (e[3][1].type === b.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === b.V.lineEnding || "space" === e[r][1].type)
        ) {
          for (t = a; ++t < r; )
            if ("mathTextData" === e[t][1].type) {
              (e[r][1].type = "mathTextPadding"),
                (e[a][1].type = "mathTextPadding"),
                (a += 2),
                (r -= 2);
              break;
            }
        }
        for (t = a - 1, r++; ++t <= r; )
          void 0 === n
            ? t !== r && e[t][1].type !== b.V.lineEnding && (n = t)
            : (t === r || e[t][1].type === b.V.lineEnding) &&
              ((e[n][1].type = "mathTextData"),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (r -= t - n - 2),
                (t = n + 2)),
              (n = void 0));
        return e;
      }
      function T(e) {
        return (
          e !== m.q.dollarSign ||
          this.events[this.events.length - 1][1].type === b.V.characterEscape
        );
      }
      function N(e) {
        let t,
          n,
          r = e.length - 4,
          a = 3;
        if (
          (e[3][1].type === b.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === b.V.lineEnding || "space" === e[r][1].type)
        ) {
          for (t = a; ++t < r; )
            if ("mathTextData" === e[t][1].type) {
              (e[r][1].type = "mathTextPadding"),
                (e[a][1].type = "mathTextPadding"),
                (a += 2),
                (r -= 2);
              break;
            }
        }
        for (t = a - 1, r++; ++t <= r; )
          void 0 === n
            ? t !== r && e[t][1].type !== b.V.lineEnding && (n = t)
            : (t === r || e[t][1].type === b.V.lineEnding) &&
              ((e[n][1].type = "mathTextData"),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (r -= t - n - 2),
                (t = n + 2)),
              (n = void 0));
        return e;
      }
      function S(e) {
        return (
          e !== m.q.backslash ||
          this.events[this.events.length - 1][1].type === b.V.characterEscape
        );
      }
      var Z = n(67726),
        P = n(9871),
        F = n(93362),
        I = n(45369),
        D = n(42426),
        E = n(65028),
        L = n(88366),
        U = n(36716),
        A = n(2368),
        R = n(21722),
        B = n(22830),
        O = n(39889),
        q = n(35448),
        z = n(24396),
        H = n(75908),
        W = n(35290),
        V = n(3001),
        J = n(24274),
        G = n(75527),
        $ = n(25094),
        Q = n(19265),
        Y = n(97688),
        X = n(57924),
        K = "sandbox:";
      function ee(e) {
        var t,
          n,
          s,
          l = e.messageId,
          u = e.clientThreadId,
          c = e.href,
          f = (0, i._)(e, ["messageId", "clientThreadId", "href"]),
          g = (0, d.useContext)(h.gB),
          m = (0, q.NL)(),
          p = (0, B._)((0, d.useState)(!1), 2),
          v = p[0],
          x = p[1],
          b = c.substring(K.length),
          y = G.tQ.getServerThreadId(u),
          w = (0, H.Z)(),
          j = (0, d.useCallback)(function (e) {
            var t = document.createElement("a");
            (t.href = e), t.click(), x(!1);
          }, []),
          _ = ((t = (0, d.useCallback)(function (e) {
            x(!1), Y.m.danger(e);
          }, [])),
          (n = (0, $.VF)()),
          (0, z.a)({
            queryKey: en(l, b),
            queryFn: function () {
              return J.ZP.downloadFromInterpreter(l, y, b)
                .then(function (e) {
                  return (
                    (null == e ? void 0 : e.status) === "success" &&
                      j(e.download_url),
                    e
                  );
                })
                .catch(function (e) {
                  var r = n("default_download_link_error", { fileName: b });
                  throw (
                    (void 0 !== e.code && (r = n(e.code)), null == t || t(r), e)
                  );
                });
            },
            enabled: !!(v && !g && l && y && b),
          })).data,
          C = (0, d.useCallback)(
            ((s = (0, R._)(function (e) {
              return (0, O.Jh)(this, function (t) {
                return (
                  void 0 !== u &&
                    (e.preventDefault(),
                    (void 0 === _ ||
                      (null == _ ? void 0 : _.status) === "error") &&
                      m.invalidateQueries({ queryKey: en(l, b) }),
                    (null == _ ? void 0 : _.status) == "success" &&
                    (null == _ ? void 0 : _.download_url)
                      ? j(_.download_url)
                      : x(!0)),
                  [2]
                );
              });
            })),
            function (e) {
              return s.apply(this, arguments);
            }),
            [u, _, b, j, l, m]
          );
        return (0, o.jsx)(X.u, {
          closeOnOutsideClick: !1,
          delayDuration: 0,
          label: (0, o.jsxs)("span", {
            className: "flex items-center gap-1",
            children: [
              v
                ? w.formatMessage(er.startingDownload)
                : w.formatMessage(er.downloadFile),
              v && (0, o.jsx)(Q.Z, {}),
            ],
          }),
          side: "top",
          sideOffset: 4,
          children: (0, o.jsx)(
            "a",
            (0, a._)((0, r._)({}, f), {
              className: "cursor-pointer",
              onClick: function (e) {
                return !v && C(e);
              },
            })
          ),
        });
      }
      function et(e) {
        return (0, o.jsx)(X.u, {
          closeOnOutsideClick: !1,
          delayDuration: 0,
          label: (0, o.jsx)("span", {
            className: "flex items-center gap-1",
            children: (0, o.jsx)(W.Z, (0, r._)({}, er.downloadUnavailable)),
          }),
          side: "top",
          sideOffset: 4,
          children: (0, o.jsx)(
            "span",
            (0, a._)((0, r._)({}, e), {
              className:
                "font-semibold text-gray-500 underline dark:text-gray-300",
            })
          ),
        });
      }
      function en(e, t) {
        return ["downloadSandboxLink", e, t];
      }
      var er = (0, V.vU)({
          downloadFile: {
            id: "SandboxDownload.downloadFile",
            defaultMessage: "Download file",
            description: "Tooltip label for downloading a file button",
          },
          startingDownload: {
            id: "SandboxDownload.startingDownload",
            defaultMessage: "Starting download",
            description:
              "Tooltip label for downloading started for file button",
          },
          downloadUnavailable: {
            id: "SandboxDownload.downloadUnavailable",
            defaultMessage: "File download not supported in a shared chat",
            description:
              "Tooltip label indicating file is unavailable to download for shared conversations",
          },
        }),
        ea = function (e) {
          return e.startsWith(K) ? e : (0, P.A)(e);
        },
        ei = [
          E.Z,
          [
            function () {
              let e = this.data();
              function t(t, n) {
                let r = e[t] ? e[t] : (e[t] = []);
                r.push(n);
              }
              t("micromarkExtensions", {
                flow: { [m.q.dollarSign]: j, [m.q.backslash]: y },
                text: {
                  [m.q.dollarSign]: {
                    tokenize: function (e, t, n) {
                      let r,
                        a,
                        i = 0;
                      return function (t) {
                        return (
                          e.enter("mathText"),
                          e.enter("mathTextSequence"),
                          (function t(r) {
                            return r === m.q.dollarSign
                              ? (e.consume(r), i++, t)
                              : i < 2
                              ? n(r)
                              : (e.exit("mathTextSequence"), o(r));
                          })(t)
                        );
                      };
                      function o(l) {
                        return l === m.q.eof
                          ? n(l)
                          : l === m.q.dollarSign
                          ? ((a = e.enter("mathTextSequence")),
                            (r = 0),
                            (function n(o) {
                              return o === m.q.dollarSign
                                ? (e.consume(o), r++, n)
                                : r === i
                                ? (e.exit("mathTextSequence"),
                                  e.exit("mathText"),
                                  t(o))
                                : ((a.type = "mathTextData"), s(o));
                            })(l))
                          : l === m.q.space
                          ? (e.enter("space"), e.consume(l), e.exit("space"), o)
                          : (0, v.Ch)(l)
                          ? (e.enter(b.V.lineEnding),
                            e.consume(l),
                            e.exit(b.V.lineEnding),
                            o)
                          : (e.enter("mathTextData"), s(l));
                      }
                      function s(t) {
                        return t === m.q.eof ||
                          t === m.q.space ||
                          t === m.q.dollarSign ||
                          (0, v.Ch)(t)
                          ? (e.exit("mathTextData"), o(t))
                          : (e.consume(t), s);
                      }
                    },
                    resolve: k,
                    previous: T,
                  },
                  [m.q.backslash]: [
                    {
                      tokenize: function (e, t, n) {
                        let r;
                        let a = [],
                          i = [],
                          o = this;
                        return function (t) {
                          return (
                            m.q.backslash,
                            M.call(o, o.previous) && o.previous,
                            e.enter("mathText"),
                            e.enter("mathTextSequence"),
                            (function t(r) {
                              return (a.join(","),
                              (r === m.q.backslash && 0 === a.length) ||
                                (r === m.q.leftParenthesis && 1 === a.length))
                                ? (e.consume(r), a.push(r), t)
                                : a.length < 2
                                ? n(r)
                                : (e.exit("mathTextSequence"), s(r));
                            })(t)
                          );
                        };
                        function s(o) {
                          return o === m.q.eof
                            ? n(o)
                            : o === m.q.backslash
                            ? ((r = e.enter("mathTextSequence")),
                              (i = []),
                              (function n(o) {
                                return (a.join(","),
                                (o === m.q.backslash && 0 === i.length) ||
                                  (o === m.q.rightParenthesis &&
                                    1 === i.length))
                                  ? (e.consume(o), i.push(o), n)
                                  : i.length === a.length
                                  ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    t(o))
                                  : ((r.type = "mathTextData"), l(o));
                              })(o))
                            : o === m.q.space
                            ? (e.enter("space"),
                              e.consume(o),
                              e.exit("space"),
                              s)
                            : (0, v.Ch)(o)
                            ? (e.enter(b.V.lineEnding),
                              e.consume(o),
                              e.exit(b.V.lineEnding),
                              s)
                            : (e.enter("mathTextData"), l(o));
                        }
                        function l(t) {
                          return t === m.q.eof ||
                            t === m.q.space ||
                            t === m.q.backslash ||
                            (0, v.Ch)(t)
                            ? (e.exit("mathTextData"), s(t))
                            : (e.consume(t), l);
                        }
                      },
                      resolve: C,
                      previous: M,
                    },
                    {
                      tokenize: function (e, t, n) {
                        let r;
                        let a = [],
                          i = [],
                          o = this;
                        return function (t) {
                          return (
                            m.q.backslash,
                            S.call(o, o.previous) && o.previous,
                            e.enter("mathText"),
                            e.enter("mathTextSequence"),
                            (function t(r) {
                              return (a.join(","),
                              (r === m.q.backslash && 0 === a.length) ||
                                (r === m.q.leftSquareBracket && 1 === a.length))
                                ? (e.consume(r), a.push(r), t)
                                : a.length < 2
                                ? n(r)
                                : (e.exit("mathTextSequence"), s(r));
                            })(t)
                          );
                        };
                        function s(o) {
                          return o === m.q.eof
                            ? n(o)
                            : o === m.q.backslash
                            ? ((r = e.enter("mathTextSequence")),
                              (i = []),
                              (function n(o) {
                                return (a.join(","),
                                (o === m.q.backslash && 0 === i.length) ||
                                  (o === m.q.rightSquareBracket &&
                                    1 === i.length))
                                  ? (e.consume(o), i.push(o), n)
                                  : i.length === a.length
                                  ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    t(o))
                                  : ((r.type = "mathTextData"), l(o));
                              })(o))
                            : o === m.q.space
                            ? (e.enter("space"),
                              e.consume(o),
                              e.exit("space"),
                              s)
                            : (0, v.Ch)(o)
                            ? (e.enter(b.V.lineEnding),
                              e.consume(o),
                              e.exit(b.V.lineEnding),
                              s)
                            : (e.enter("mathTextData"), l(o));
                        }
                        function l(t) {
                          return t === m.q.eof ||
                            t === m.q.space ||
                            t === m.q.backslash ||
                            (0, v.Ch)(t)
                            ? (e.exit("mathTextData"), s(t))
                            : (e.consume(t), l);
                        }
                      },
                      resolve: N,
                      previous: S,
                    },
                  ],
                },
              }),
                t("fromMarkdownExtensions", (0, g.N)()),
                t("toMarkdownExtensions", (0, g.O)());
            },
            { singleDollarTextMath: !1 },
          ],
        ],
        eo = [
          [
            F.Z,
            {
              languages: { mathematica: Z.Z },
              detect: !0,
              subset: [
                "arduino",
                "bash",
                "c",
                "cpp",
                "csharp",
                "css",
                "diff",
                "go",
                "graphql",
                "java",
                "javascript",
                "json",
                "kotlin",
                "latex",
                "less",
                "lua",
                "makefile",
                "makefile",
                "markdown",
                "matlab",
                "mathematica",
                "nginx",
                "objectivec",
                "perl",
                "pgsql",
                "php-template",
                "php",
                "plaintext",
                "python-repl",
                "python",
                "r",
                "ruby",
                "rust",
                "scss",
                "shell",
                "sql",
                "swift",
                "typescript",
                "vbnet",
                "wasm",
                "xml",
                "yaml",
              ],
              ignoreMissing: !0,
              aliases: { mathematica: "wolfram" },
            },
          ],
          I.Z,
          [D.Z, { newlines: !0 }],
        ],
        es = {
          code: function (e) {
            var t = e.inline,
              n = e.node,
              s = e.className,
              l = e.children,
              u = (0, i._)(e, ["inline", "node", "className", "children"]);
            if (t) {
              var d = (0, L.B)(n),
                c = (0, U.T$)(d);
              return c
                ? (0, o.jsx)(U.s8, { displayInfo: c })
                : (0, o.jsx)(
                    "code",
                    (0, a._)((0, r._)({ className: s }, u), { children: l })
                  );
            }
            var f,
              h =
                null ===
                  (f =
                    null == s
                      ? void 0
                      : s.split(" ").filter(function (e) {
                          return e.startsWith("language-");
                        })) || void 0 === f
                  ? void 0
                  : f[0],
              g = h ? h.split("-")[1] : "";
            return (0, o.jsx)(A.Z, {
              language: g,
              className: s,
              content: (0, L.B)(n),
              children: l,
            });
          },
        };
      function el(e) {
        var t = e.size,
          n = e.children,
          g = e.className,
          m = e.clientThreadId,
          p = e.messageId,
          v = (0, u.F)().theme,
          x = (0, f.Fl)().isCodeInterpreterAvailable,
          b = (0, d.useContext)(h.gB),
          y = (0, d.useMemo)(
            function () {
              return (0, a._)((0, r._)({}, es), {
                a: function (e) {
                  var t = e.node,
                    n = (0, i._)(e, ["node"]);
                  return t.properties.href.startsWith(K)
                    ? b
                      ? (0, o.jsx)(et, (0, r._)({}, n))
                      : x
                      ? (0, o.jsx)(
                          ee,
                          (0, r._)({ clientThreadId: m, messageId: p }, n)
                        )
                      : null
                    : (0, o.jsx)("a", (0, r._)({}, n));
                },
                img: function (e) {
                  var t = e.node,
                    n = (0, i._)(e, ["node"]),
                    a = t.properties.src;
                  return a.startsWith(K) || a.startsWith("attachment:")
                    ? null
                    : (0, o.jsx)("img", (0, r._)({}, n));
                },
              });
            },
            [m, x, b, p]
          );
        return (0, o.jsx)(s.SV, {
          fallback: function () {
            return (0, o.jsx)(o.Fragment, { children: n });
          },
          children: (0, o.jsx)(c.D, {
            rehypePlugins: eo,
            remarkPlugins: ei,
            linkTarget: "_new",
            className: (0, l.Z)(
              g,
              "markdown prose w-full break-words dark:prose-invert",
              "dark" === v ? "dark" : "light",
              "small" === (void 0 === t ? "medium" : t) && "prose-xs"
            ),
            transformLinkUri: ea,
            components: y,
            children: n,
          }),
        });
      }
    },
    63390: function (e, t, n) {
      n.d(t, {
        Cf: function () {
          return ek;
        },
        ZP: function () {
          return eM;
        },
        xz: function () {
          return eT;
        },
      });
      var r,
        a = n(39324),
        i = n(70216),
        o = n(4337),
        s = n(35250),
        l = n(19841),
        u = n(68555),
        d = n(70079),
        c = n(34303),
        f = n(75179),
        h = n(88038),
        g = n(75527),
        m = n(59110),
        p = n(36716),
        v = n(59710),
        x = n(56244),
        b = n(66958),
        y = n(30931),
        w = n(87105),
        j = n(22830),
        _ = n(2827),
        C = n(82841),
        M = n(36218),
        k = n(69403);
      function T() {
        var e = (0, o._)(["text-center mt-2 flex justify-center"]);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = (0, o._)(["flex gap-2 flex-wrap mt-2"]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      var S = c.Z.div(T());
      function Z(e) {
        var t = e.initialText,
          n = e.role,
          r = e.clientThreadId,
          a = e.currentLeaf,
          i = e.onUpdateNode,
          o = e.onChangeItemInView,
          l = e.onExitEdit,
          u = e.onDeleteNode,
          c = e.onRequestCompletion,
          f = e.onCreateEditNode,
          h = e.disabled,
          m = e.attachments,
          p = (0, C.WS)(),
          v = (0, d.useId)(),
          x = "".concat(a, "-").concat(v),
          w = (0, j._)((0, d.useState)(null != t ? t : ""), 2),
          T = w[0],
          N = w[1],
          Z = (0, d.useRef)(null);
        (0, d.useEffect)(function () {
          f(a, x, null != t ? t : "", m ? { attachments: m } : void 0);
        }, []);
        var F = (0, d.useCallback)(function (e) {
            N(e.currentTarget.value);
          }, []),
          I = (0, d.useCallback)(
            function () {
              i(x, T), o(x), c(k.Os.Next, x, { eventSource: "mouse" }, !0), l();
            },
            [i, x, T, o, c, l]
          ),
          D = (0, d.useCallback)(
            function () {
              u(x),
                o(a),
                l(),
                p(
                  n === k.uU.User
                    ? M.s6.cancelEditPrompt
                    : M.s6.cancelEditCompletion,
                  { threadId: g.tQ.getServerThreadId(r) }
                );
            },
            [x, a, p, o, u, l, n, r]
          );
        (0, d.useEffect)(
          function () {
            var e = Z.current,
              t = function (e) {
                "Enter" === e.key && e.metaKey
                  ? I()
                  : "Escape" === e.key && D();
              };
            return (
              e && e.addEventListener("keydown", t),
              function () {
                e && e.removeEventListener("keydown", t);
              }
            );
          },
          [D, I]
        );
        var E = m && m.length > 0;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(_.ZP, {
              ref: Z,
              value: T,
              onChange: F,
              className:
                "m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0",
            }),
            E &&
              (0, s.jsx)(P, {
                children: m.map(function (e) {
                  return (0, s.jsx)(y.Z, { file: e.name }, e.url);
                }),
              }),
            (0, s.jsxs)(S, {
              children: [
                (0, s.jsx)(b.z, {
                  as: "button",
                  onClick: I,
                  className: "mr-2",
                  disabled: h,
                  children: "Save & Submit",
                }),
                (0, s.jsx)(b.z, {
                  as: "button",
                  color: "neutral",
                  onClick: D,
                  children: "Cancel",
                }),
              ],
            }),
          ],
        });
      }
      var P = c.Z.div(N()),
        F = n(21722),
        I = n(39889),
        D = n(10642),
        E = n(47635),
        L = n(32787),
        U = n(24274),
        A = n(75515),
        R = n(180);
      function B() {
        var e = (0, o._)(["text-xs text-black\n", ""]);
        return (
          (B = function () {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = (0, o._)(["relative w-full overflow-hidden pt-[67%]"]);
        return (
          (O = function () {
            return e;
          }),
          e
        );
      }
      function q(e) {
        var t,
          n = e.title,
          r = e.url,
          a = e.imageUrl,
          i = e.logoUrl,
          o = e.className,
          u = e.mini,
          c = !!a,
          f = (0, C.WS)(),
          h = (0, d.useCallback)(
            function () {
              f(M.s6.carouselCardClick, { content: r });
            },
            [f, r]
          );
        try {
          t = E.get(new URL(r).hostname);
        } catch (e) {
          return console.error("Invalid card url: ", e), null;
        }
        return (0, s.jsxs)(r ? "a" : "div", {
          className: (0, l.Z)(
            "flex h-full w-full flex-col overflow-hidden rounded-md border border-black/10 bg-gray-50 shadow-[0_2px_24px_rgba(0,0,0,0.05)]",
            o
          ),
          href: r,
          target: r ? "_blank" : "",
          onClick: h,
          children: [
            c &&
              (0, s.jsx)(H, {
                children: (0, s.jsx)("div", {
                  className: "absolute inset-0",
                  children: (0, s.jsx)("img", {
                    src: a,
                    alt: "image of ".concat(n),
                    className:
                      "h-full w-full border-b border-black/10 object-cover",
                  }),
                }),
              }),
            (0, s.jsxs)("div", {
              className: "flex flex-1 flex-col justify-between gap-1.5 p-3",
              children: [
                (0, s.jsx)(z, {
                  $clamp: (void 0 !== u && u) || c,
                  children: n,
                }),
                (0, s.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    i
                      ? (0, s.jsx)(A.Z, { url: i, name: t, size: 13 })
                      : (0, s.jsx)(R.Z, { url: r, size: 13 }),
                    (0, s.jsx)("div", {
                      className:
                        "text-[10px] leading-3 text-gray-500 line-clamp-1",
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var z = c.Z.div(B(), function (e) {
          return e.$clamp && "line-clamp-2";
        }),
        H = c.Z.div(O()),
        W = n(96237),
        V = n(21260),
        J = n(52422),
        G = n(95182),
        $ = n.n(G),
        Q = n(1454),
        Y = n(77442),
        X = n(38317);
      function K(e) {
        var t = e.disabled,
          n = e.onClick,
          r = e.left,
          a = e.children;
        return (0, s.jsx)("button", {
          disabled: t,
          onClick: n,
          "aria-disabled": t,
          className: (0, l.Z)(
            "flex h-6 w-[30px] items-center justify-center rounded-full",
            "bg-gray-900 text-white shadow-sm hover:bg-gray-700 disabled:hover:bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:disabled:hover:bg-white",
            "transition-opacity disabled:opacity-20",
            "cursor-pointer disabled:cursor-auto",
            "absolute top-full translate-y-3 lg:top-1/2 lg:-translate-y-1/2",
            void 0 !== r && r
              ? "left-1/2 -translate-x-[calc(100%+4px)] lg:-left-3 lg:-translate-x-full"
              : "left-1/2 translate-x-1 lg:-right-3 lg:left-auto lg:translate-x-full",
            t && "lg:hidden"
          ),
          children: a,
        });
      }
      var ee = n(70575),
        et = function (e) {
          var t = e.x,
            n = e.children,
            r = e.className;
          return (0, s.jsx)(ee.E.div, {
            className: (0, l.Z)(
              "mr-3 h-full w-full flex-none sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]",
              r
            ),
            style: { x: t },
            children: n,
          });
        },
        en = { type: "spring", bounce: 0 },
        er = (0, d.forwardRef)(function (e, t) {
          return (0,
          s.jsx)("div", { ref: t, className: (0, l.Z)("relative flex h-full w-full overflow-hidden", e.className), children: e.children });
        });
      er.displayName = "CarouselContainer";
      var ea =
        ((r = {}),
        (0, W._)(r, Y._G.Mobile, 1),
        (0, W._)(r, Y._G.Small, 2),
        (0, W._)(r, Y._G.Medium, 2),
        (0, W._)(r, Y._G.Large, 3),
        (0, W._)(r, Y._G.XLarge, 3),
        r);
      function ei(e) {
        var t = e.children,
          n = e.loop,
          r = void 0 === n || n,
          a = e.className,
          i = (0, V.c)(0),
          o = (0, d.useRef)(null),
          u = (0, j._)((0, d.useState)(0), 2),
          c = u[0],
          f = u[1],
          h = ea[(0, Y.dQ)()] || 1,
          g = d.Children.count(t) > h,
          m = d.Children.toArray(t),
          p = (0, d.useCallback)(
            function () {
              var e,
                t =
                  null === (e = o.current) || void 0 === e
                    ? void 0
                    : e.clientWidth;
              return t ? -Math.floor(c / h) * (t + 12) : 0;
            },
            [h, c]
          ),
          v = (0, d.useCallback)(
            function (e) {
              var t = h * e;
              r
                ? f(function (e) {
                    return ((e + t) % m.length) - 1;
                  })
                : f(function (e) {
                    return $()(e + t, 0, m.length - 1);
                  });
            },
            [m.length, r, h]
          ),
          x = (0, d.useCallback)(
            function () {
              v(1);
            },
            [v]
          ),
          b = (0, d.useCallback)(
            function () {
              v(-1);
            },
            [v]
          ),
          y = (0, j._)(
            (0, d.useMemo)(
              function () {
                if (r) return [!0, !0];
                var e = c < m.length - h;
                return [c > 0, e];
              },
              [m.length, c, r, h]
            ),
            2
          ),
          w = y[0],
          _ = y[1];
        return (
          (0, d.useEffect)(
            function () {
              return (0, J.j)(i, p(), en).stop;
            },
            [p, c, i]
          ),
          (0, s.jsxs)("div", {
            className: (0, l.Z)(
              "relative h-full w-full",
              a,
              g && "mb-12 lg:mb-0"
            ),
            children: [
              (0, s.jsx)(er, {
                ref: o,
                children: m.map(function (e, t) {
                  return (0, s.jsx)(et, { x: i, children: e }, t);
                }),
              }),
              g &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(K, {
                      onClick: b,
                      left: !0,
                      disabled: !w,
                      children: (0, s.jsx)(X.ZP, { icon: Q.YFh }),
                    }),
                    (0, s.jsx)(K, {
                      onClick: x,
                      disabled: !_,
                      children: (0, s.jsx)(X.ZP, { icon: Q.Tfp }),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      var eo = n(31721),
        es = new Set([
          "og:site_name",
          "og:title",
          "og:description",
          "og:image",
          "og:url",
        ]),
        el = {
          "og:site_name": "metadataTitle",
          "og:title": "title",
          "og:description": "description",
          "og:image": "imageUrl",
          "og:url": "url",
        },
        eu =
          /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        ed = d.memo(function (e) {
          var t,
            n,
            r = e.urls,
            a = (0, eo.v)(),
            i =
              ((t = (0, L.kP)().session),
              (n = (0, D.h)({
                queries: r.map(function (e) {
                  return {
                    queryKey: ["opengraph", e],
                    queryFn: (0, F._)(function () {
                      return (0, I.Jh)(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return [4, U.ZP.getPageMetadata({ url: e })];
                          case 1:
                            return [2, t.sent()];
                        }
                      });
                    }),
                    enabled: !!(e && (null == t ? void 0 : t.accessToken)),
                    retry: !1,
                  };
                }),
              })),
              (0, d.useMemo)(
                function () {
                  return n
                    .map(function (e, t) {
                      var n = e.data,
                        a = e.isError,
                        i = e.isLoading,
                        o = r[t];
                      if (a || i) return null;
                      var s = n.tags.reduce(function (e, t) {
                        return es.has(t.type) && (e[el[t.type]] = t.value), e;
                      }, {});
                      try {
                        var l,
                          u = o.split(/[#?]/)[0],
                          d =
                            null === (l = s.url) || void 0 === l
                              ? void 0
                              : l.endsWith("/login"),
                          c = s.url && "/" === new URL(s.url || "").pathname;
                        if (u !== s.url && (d || c)) return null;
                      } catch (e) {
                        return null;
                      }
                      return (s.url = o), s;
                    })
                    .filter(Boolean);
                },
                [n, r]
              )),
            o = (0, d.useMemo)(
              function () {
                return !i.some(function (e) {
                  return !!(null == e ? void 0 : e.imageUrl);
                });
              },
              [i]
            ),
            l = (0, d.useMemo)(
              function () {
                return a.reduce(function (e, t) {
                  return (e[E.get(t.domain)] = t.manifest.logo_url), e;
                }, {});
              },
              [a]
            ),
            u = (0, d.useMemo)(
              function () {
                return i.map(function (e) {
                  var t, n;
                  if (!e) return null;
                  try {
                    t = E.get(new URL(e.url).hostname);
                  } catch (e) {
                    return console.error("Invalid card url: ", e), null;
                  }
                  return (
                    t in l && (n = l[t]),
                    (0, s.jsx)(
                      q,
                      {
                        title: e.title || "",
                        url: e.url,
                        imageUrl: e.imageUrl,
                        logoUrl: n,
                        mini: o,
                      },
                      e.url
                    )
                  );
                });
              },
              [i, o, l]
            );
          return 0 === i.length
            ? null
            : (0, s.jsx)(ei, { loop: !1, children: u });
        }),
        ec = n(5046),
        ef = n(24396),
        eh = n(19208),
        eg = n.n(eh),
        em = n(75908),
        ep = n(3001),
        ev = n(25094),
        ex = n(19265);
      function eb() {
        var e = (0, o._)([
          "w-full max-w-lg dark:bg-gray-700 dark:text-gray-400 bg-gray-100 text-gray-500 h-auto rounded-md overflow-hidden flex items-center justify-center",
        ]);
        return (
          (eb = function () {
            return e;
          }),
          e
        );
      }
      function ey(e) {
        var t,
          n = e.asset,
          r = n.asset_pointer,
          a = n.width,
          i = n.height,
          o = (0, em.Z)(),
          u =
            ((t = (0, ev.Iy)(r)),
            (0, ef.a)({
              queryKey: ["getFileDownloadLink", t],
              queryFn: (0, F._)(function () {
                return (0, I.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        U.ZP.getFileDownloadLink(t).catch(function (e) {
                          throw (
                            (console.error(
                              "Could not fetch file with ID ".concat(
                                t,
                                " from file service"
                              ),
                              e.message
                            ),
                            e)
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
            })),
          c = u.data,
          f = u.isLoading,
          h = null == c ? void 0 : c.download_url,
          g = (0, d.useRef)(null),
          m = (0, j._)((0, d.useState)(!1), 2),
          p = m[0],
          v = m[1];
        (0, d.useEffect)(
          function () {
            var e;
            (null === (e = g.current) || void 0 === e ? void 0 : e.complete) ||
              v(!1);
          },
          [r]
        );
        var x = f || !p;
        return "string" == typeof h
          ? (0, s.jsx)(ew, {
              children: (0, s.jsx)(eg(), {
                alt: o.formatMessage(ej.alt),
                src: h,
                width: a,
                height: i,
                unoptimized: !0,
                ref: g,
                onLoadingComplete: function () {
                  return v(!0);
                },
                className: (0, l.Z)(
                  "max-w-full rounded-md transition-opacity duration-300",
                  p ? "opacity-100" : "opacity-0"
                ),
              }),
            })
          : (0, s.jsx)(ew, {
              style: { aspectRatio: "".concat(a, " / ").concat(i), width: a },
              title: x
                ? o.formatMessage(ej.loading)
                : o.formatMessage(ej.error),
              children: x ? (0, s.jsx)(ex.Z, {}) : (0, s.jsx)(Q.BJv, {}),
            });
      }
      var ew = c.Z.div(eb()),
        ej = (0, ep.vU)({
          loading: {
            id: "imageAsset.loading",
            defaultMessage: "Loading...",
            description: "Text that describes a loading image",
          },
          error: {
            id: "imageAsset.error",
            defaultMessage: "Could not load image",
            description: "Text that describes an image that failed to load",
          },
          alt: {
            id: "imageAsset.alt",
            defaultMessage: "Uploaded image",
            description: "Alt text for image asset",
          },
        });
      function e_() {
        var e = (0, o._)(["flex gap-2 flex-wrap"]);
        return (
          (e_ = function () {
            return e;
          }),
          e
        );
      }
      function eC() {
        var e = (0, o._)([
          "\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n",
          "\n",
          "\n",
          "\n",
        ]);
        return (
          (eC = function () {
            return e;
          }),
          e
        );
      }
      var eM = d.memo(function (e) {
        var t,
          n,
          r,
          o = e.message,
          l = e.isEditing,
          u = e.format,
          c = e.isCompletionInProgress,
          f = e.className,
          h = e.isCompletion,
          g = e.isResponseToPluginMessage,
          m = (0, i._)(e, [
            "message",
            "isEditing",
            "format",
            "isCompletionInProgress",
            "className",
            "isCompletion",
            "isResponseToPluginMessage",
          ]),
          p = (0, d.useMemo)(
            function () {
              return "parts" in o.message.content
                ? o.message.content.parts
                : [(0, x.RR)(o.message)];
            },
            [o]
          );
        return l
          ? (0, s.jsx)(
              Z,
              (0, a._)(
                {
                  currentLeaf: o.nodeId,
                  initialText: (0, x.RR)(o.message),
                  role: o.message.author.role,
                  attachments:
                    null === (r = o.message.metadata) || void 0 === r
                      ? void 0
                      : r.attachments,
                },
                m
              )
            )
          : (0, s.jsx)(ek, {
              parts: p,
              errCode: o.errCode,
              err: o.err,
              flag: o.errType,
              isCompletionInProgress: c,
              format: u,
              className: f,
              citations:
                null === (t = o.message.metadata) || void 0 === t
                  ? void 0
                  : t.citations,
              attachments:
                null === (n = o.message.metadata) || void 0 === n
                  ? void 0
                  : n.attachments,
              isCompletion: h,
              id: o.nodeId,
              onRequestMoreCompletions: m.onRequestMoreCompletions,
              clientThreadId: m.clientThreadId,
              showExtractedLinkCards: g,
            });
      });
      function ek(e) {
        var t,
          n,
          r,
          a = e.attachments,
          i = e.citations,
          o = e.className,
          u = e.err,
          c = e.errCode,
          g = e.flag,
          x = e.format,
          b = e.isCompletionInProgress,
          j = e.size,
          _ = void 0 === j ? "medium" : j,
          C = e.parts,
          M = e.isCompletion,
          k = e.id,
          T = e.onRequestMoreCompletions,
          N = e.clientThreadId,
          S = e.showExtractedLinkCards,
          Z = !C.some(function (e) {
            return "" !== e;
          }),
          P = u && Z,
          F = c === f.Dd,
          I =
            ((n = (t = {
              text: C.map(function (e) {
                return "string" == typeof e ? e : "";
              }).join(""),
              isCompletionInProgress: b,
            }).text),
            (r = t.isCompletionInProgress),
            (0, d.useMemo)(
              function () {
                if (r) return [];
                var e = n.match(eu);
                return Array.from(new Set(e));
              },
              [r, n]
            )),
          D = (0, d.useMemo)(
            function () {
              switch (c) {
                case f.Dd:
                  return (0, s.jsx)(eP, {
                    $flag: g,
                    children: (0, s.jsx)(eS, {}),
                  });
                case ec.uU:
                  return (0, s.jsx)(eN, {
                    id: k,
                    onRequestMoreCompletions: T,
                    flag: g,
                    clientThreadId: N,
                  });
                case v.wp:
                  return (0, s.jsx)(eP, {
                    $flag: g,
                    children:
                      "Sorry, conversations created when Chat History is off expire after 6 hours of inactivity. Please start a new conversation to continue using ChatGPT.",
                  });
                default:
                  return (0, s.jsx)(eP, { $flag: g, children: u });
              }
            },
            [u, c, g, k, T, N]
          ),
          E = (0, m.hz)().has(h.FZ),
          L = a && a.length > 0 && !M;
        return (0, s.jsxs)("div", {
          className: (0, l.Z)(
            o,
            "flex items-start overflow-x-auto whitespace-pre-wrap break-words",
            "danger" === g ? "flex-row gap-2 text-red-500" : "flex-col gap-4",
            "warning" === g && "text-orange-500",
            E && "text-base"
          ),
          children: [
            C.map(function (e, t) {
              return "string" == typeof e
                ? P || F || !x
                  ? (0, s.jsx)(
                      "div",
                      {
                        className: "empty:hidden",
                        children: "danger" === g && F ? null : e,
                      },
                      t
                    )
                  : (0, s.jsx)(
                      w.Z,
                      {
                        clientThreadId: N,
                        messageId: k,
                        size: _,
                        className: (0, l.Z)(
                          "danger" !== g && b && "result-streaming",
                          "danger" === g && "text-red-500",
                          "warning" === g && "text-orange-500"
                        ),
                        children: "" === e ? "&#8203;" : (0, p.Qd)(e, i),
                      },
                      t
                    )
                : (0, s.jsx)(ey, { asset: e }, t);
            }),
            L &&
              (0, s.jsx)(eZ, {
                children: a.map(function (e) {
                  return (0, s.jsx)(y.Z, { file: e.name }, e.url);
                }),
              }),
            M && S && I.length > 0 && (0, s.jsx)(ed, { urls: I }),
            g && D,
          ],
        });
      }
      function eT(e) {
        var t = e && new Date(e),
          n = t && new Date(t);
        return n
          ? "after "
              .concat(n.getHours() % 12 || 12, ":")
              .concat(10 > n.getMinutes() ? "0" : "")
              .concat(n.getMinutes(), " ")
              .concat(n.getHours() >= 12 ? "PM" : "AM")
          : "later";
      }
      function eN(e) {
        var t = e.id,
          n = e.onRequestMoreCompletions,
          r = e.flag,
          a = e.clientThreadId,
          i = (0, u.useRouter)(),
          o = (0, ec.Y8)(function (e) {
            return e.isoDate;
          }),
          l = eT(o),
          c = (0, d.useCallback)(
            function () {
              n(t, { eventSource: "mouse" }, !0, "none", !1);
            },
            [t, n]
          ),
          f = (0, d.useCallback)(
            function () {
              var e = void 0 !== a ? g.tQ.getServerThreadId(a) : void 0;
              void 0 === e
                ? i.replace("/", void 0, { shallow: !0 })
                : (0, ec.m0)(e),
                n(t, { eventSource: "mouse" }, !0, "none", !0);
            },
            [t, n, i, a]
          ),
          h = o
            ? (0, s.jsxs)("span", {
                children: [
                  "You've reached the current usage cap for GPT-4. You can continue with the default model now, or try again ".concat(
                    l,
                    "."
                  ),
                  " ",
                  (0, s.jsx)("a", {
                    href: "https://share.hsforms.com/16d0ZZVM3QZirXnCD_q7u1Q4sk30",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "underline",
                    children: "Learn more",
                  }),
                ],
              })
            : "You previously reached your usage cap for GPT-4, but you can now try sending your message again";
        return (0, s.jsx)(eP, {
          $flag: !!o && r,
          children: (0, s.jsxs)("div", {
            className: "flex items-center gap-6",
            children: [
              h,
              !o &&
                (0, s.jsx)(b.z, {
                  color: "light",
                  className: "flex-shrink-0 bg-white",
                  onClick: c,
                  children: "Try again",
                }),
              o &&
                (0, s.jsx)(b.z, {
                  color: "light",
                  className: "flex-shrink-0 bg-white",
                  onClick: f,
                  children: "Use default model",
                }),
            ],
          }),
        });
      }
      function eS() {
        return (0, s.jsxs)(s.Fragment, {
          children: [
            "This content may violate our",
            " ",
            (0, s.jsx)("a", {
              target: "_blank",
              href: "https://platform.openai.com/docs/usage-policies/content-policy",
              rel: "noreferrer",
              className: "bold underline",
              children: "content policy",
            }),
            ". If you believe this to be in error, please",
            " ",
            (0, s.jsx)("a", {
              target: "_blank",
              href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
              rel: "noreferrer",
              className: "bold underline",
              children: "submit your feedback",
            }),
            " ",
            "— your input will aid our research in this area.",
          ],
        });
      }
      var eZ = c.Z.div(e_()),
        eP = c.Z.div(
          eC(),
          function (e) {
            return (
              "warning" === e.$flag && "border-orange-500 bg-orange-500/10"
            );
          },
          function (e) {
            return "danger" === e.$flag && "border-red-500 bg-red-500/10";
          },
          function (e) {
            return !e.$flag && "border-green-500 bg-green-500/10";
          }
        );
    },
    94860: function (e, t, n) {
      n.d(t, {
        DM: function () {
          return y;
        },
        R: function () {
          return _;
        },
        Vq: function () {
          return C;
        },
        ZB: function () {
          return w;
        },
        ZP: function () {
          return b;
        },
        zV: function () {
          return j;
        },
      });
      var r = n(39324),
        a = n(4337),
        i = n(35250),
        o = n(9849),
        s = n(19841),
        l = n(1454),
        u = n(35290),
        d = n(3001),
        c = n(34303),
        f = n(38317),
        h = n(36112);
      function g() {
        var e = (0, a._)([
          "p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer",
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = (0, a._)([
          "flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = (0, a._)([
          "rounded-md border border-white/20 hover:bg-gray-500/10 h-11",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = (0, a._)(["my-1.5 h-px bg-white/20"]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = (0, a._)(["", ""]);
        return (
          (x = function () {
            return e;
          }),
          e
        );
      }
      function b(e) {
        var t = e.onClick,
          n = e.href,
          r = e.target,
          a = e.children;
        return (0, i.jsx)(o.v.Item, {
          children: function (e) {
            var o = e.active;
            return (0, i.jsx)(w, {
              as: void 0 !== n ? "a" : "button",
              onClick: t,
              href: n,
              target: r,
              className: (0, s.Z)(o ? "bg-gray-700" : "hover:bg-gray-700"),
              children: a,
            });
          },
        });
      }
      function y(e) {
        var t = e.onDeleteHistory,
          n = e.isConfirmingDeleteHistory,
          a = (0, h.LC)();
        return (0, i.jsx)(i.Fragment, {
          children:
            a &&
            (0, i.jsxs)(b, {
              onClick: t,
              children: [
                (0, i.jsx)(f.ZP, { icon: n ? l.UgA : l.Ybf }),
                n
                  ? (0, i.jsx)(u.Z, (0, r._)({}, M.confirmClearConversations))
                  : (0, i.jsx)(u.Z, (0, r._)({}, M.clearConversations)),
              ],
            }),
        });
      }
      c.Z.a(g());
      var w = c.Z.a(m()),
        j = (0, c.Z)(w)(p()),
        _ = c.Z.div(v()),
        C = (0, c.Z)(w)(x(), function (e) {
          return e.$active ? "bg-gray-800" : "hover:bg-gray-800";
        }),
        M = (0, d.vU)({
          confirmClearConversations: {
            id: "workspacePopoverNavigation.confirmClearConversations",
            defaultMessage: "Confirm clear conversations",
            description: "Confirmation text for clearing conversations",
          },
          clearConversations: {
            id: "workspacePopoverNavigation.clearConversations",
            defaultMessage: "Clear conversations",
            description: "Clear conversations menu item",
          },
        });
    },
    61119: function (e, t, n) {
      n.d(t, {
        Ds: function () {
          return C;
        },
        OS: function () {
          return _;
        },
        ZP: function () {
          return M;
        },
      });
      var r = n(21722),
        a = n(22830),
        i = n(39889),
        o = n(35250),
        s = n(35448),
        l = n(70079),
        u = n(1454),
        d = n(81292),
        c = n(32787),
        f = n(88038),
        h = n(59110),
        g = n(66958),
        m = n(48101),
        p = n(19265),
        v = n(97688),
        x = n(17915),
        b = n(86573),
        y = n(38631),
        w = n(49910),
        j = n(697),
        _ = (0, d.ZP)(function () {
          return { isOpen: !1 };
        }),
        C = {
          close: function () {
            _.setState({ isOpen: !1 });
          },
          setIsOpen: function (e) {
            _.setState({ isOpen: e });
          },
        };
      function M(e) {
        var t = e.slideOver,
          n = (0, a._)((0, l.useState)(), 2),
          d = n[0],
          M = n[1],
          k = (0, a._)((0, l.useState)(!1), 2),
          T = k[0],
          N = k[1],
          S = (0, a._)((0, l.useState)(!1), 2),
          Z = S[0],
          P = S[1],
          F = (0, a._)((0, l.useState)(!1), 2),
          I = F[0],
          D = F[1],
          E = (0, c.kP)().session,
          L = (0, h.hz)(),
          U =
            ((null == E ? void 0 : E.user) != null && (0, c.yl)(E.user)) ||
            L.has(f.YI),
          A = (0, s.NL)(),
          R = _(function (e) {
            return e.isOpen;
          }),
          B = (0, j.p0)(),
          O = (0, x.sd)().fetchManifestAndSpec,
          q = (0, l.useMemo)(
            function () {
              return U ? B[0] : B.find(b.cf);
            },
            [B, U]
          ),
          z = (0, l.useCallback)(
            (0, r._)(function () {
              return (0, i.Jh)(this, function (e) {
                return (
                  q &&
                    (M(void 0),
                    O({
                      domain: q.domain,
                      onSuccess: function (e) {
                        M({
                          manifestValidationInfo:
                            e.scrapeManifestResponse.manifest_validation_info,
                          apiValidationInfo: e.apiValidationInfo,
                        }),
                          null != e.scrapeManifestResponse.plugin &&
                            (0, x.aU)(e.scrapeManifestResponse.plugin, A, [
                              "installedAip",
                            ]);
                      },
                      onError: function (e) {
                        v.m.danger(
                          (null == e ? void 0 : e.message) ||
                            "Error refreshing plugin."
                        );
                      },
                    })),
                  [2]
                );
              });
            }),
            [q, A, O]
          );
        return ((0, l.useEffect)(
          function () {
            R && z();
          },
          [R, z]
        ),
        L.has(f.Wk))
          ? (0, o.jsx)(m.ZP, {
              icon: u.V7f,
              title: "Plugin devtools",
              isOpen: R,
              slideOver: t,
              onClose: C.close,
              children: (0, o.jsx)("div", {
                className:
                  "border-t border-gray-100 p-2 text-sm dark:border-gray-700",
                children:
                  null != q
                    ? (0, o.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          (0, o.jsx)("div", {
                            children: (0, o.jsx)(g.z, {
                              size: "small",
                              color: "neutral",
                              onClick: z,
                              children: "Refresh plugin",
                            }),
                          }),
                          d
                            ? (0, o.jsxs)(o.Fragment, {
                                children: [
                                  (0, o.jsx)(y.Z, { plugin: q }),
                                  (0, o.jsxs)("div", {
                                    children: ["Plugin id: ", q.id],
                                  }),
                                  (0, o.jsx)(w.rC, {
                                    manifestValidationInfo:
                                      d.manifestValidationInfo,
                                    expanded: T,
                                    onChangeExpanded: N,
                                  }),
                                  null != d.apiValidationInfo &&
                                    (0, o.jsxs)(o.Fragment, {
                                      children: [
                                        (0, o.jsx)(w.q6, {
                                          apiValidationInfo:
                                            d.apiValidationInfo,
                                          expanded: Z,
                                          onChangeExpanded: P,
                                        }),
                                        (0, o.jsx)(w.bf, {
                                          apiValidationInfo:
                                            d.apiValidationInfo,
                                          expanded: I,
                                          onChangeExpanded: D,
                                        }),
                                      ],
                                    }),
                                ],
                              })
                            : (0, o.jsx)("div", {
                                className: "self-center",
                                children: (0, o.jsx)(p.Z, {}),
                              }),
                        ],
                      })
                    : (0, o.jsxs)("div", {
                        className: "mt-4 text-center",
                        children: [
                          "Please enable a localhost plugin",
                          " ",
                          U && " (or any plugin if you're a plugin reviewer) ",
                          "to use devtools.",
                        ],
                      }),
              }),
            })
          : null;
      }
    },
    38631: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(35250),
        a = n(75515);
      function i(e) {
        var t = e.plugin,
          n = t.manifest.name_for_human;
        return (0, r.jsxs)("div", {
          className: "flex gap-4 rounded bg-gray-50 px-4 py-2 dark:bg-gray-800",
          children: [
            (0, r.jsx)(a.Z, {
              url: t.manifest.logo_url,
              name: n,
              size: 32,
              className: "flex-shrink-0",
            }),
            (0, r.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                (0, r.jsx)("h2", {
                  className: "align-top text-base font-medium",
                  children: n,
                }),
                (0, r.jsx)("div", {
                  className: "text-sm",
                  children: t.manifest.description_for_human,
                }),
              ],
            }),
          ],
        });
      }
    },
    49910: function (e, t, n) {
      n.d(t, {
        bf: function () {
          return f;
        },
        q6: function () {
          return c;
        },
        rC: function () {
          return d;
        },
      });
      var r = n(39324),
        a = n(70216),
        i = n(22830),
        o = n(35250),
        s = n(70079),
        l = n(1454),
        u = n(38317);
      function d(e) {
        var t = e.manifestValidationInfo,
          n = (0, a._)(e, ["manifestValidationInfo"]),
          i = t.manifest_dict,
          s = t.warnings,
          l = t.errors;
        return (0, o.jsx)(
          h,
          (0, r._)({ name: "manifest", content: i, warnings: s, errors: l }, n)
        );
      }
      function c(e) {
        var t = e.apiValidationInfo,
          n = (0, a._)(e, ["apiValidationInfo"]),
          i = t.openapi_spec_dict,
          s = t.warnings,
          l = t.errors;
        return (0, o.jsx)(
          h,
          (0, r._)(
            { name: "OpenAPI spec", content: i, warnings: s, errors: l },
            n
          )
        );
      }
      function f(e) {
        var t = e.apiValidationInfo,
          n = (0, a._)(e, ["apiValidationInfo"]),
          i = t.api_typescript;
        return i
          ? (0, o.jsx)(
              g,
              (0, r._)({ text: "Prompt for ChatGPT", content: i }, n)
            )
          : null;
      }
      function h(e) {
        var t = e.name,
          n = e.content,
          i = e.warnings,
          s = e.errors,
          d = (0, a._)(e, ["name", "content", "warnings", "errors"]),
          c = i && i.length > 0,
          f = s && s.length > 0,
          h = "Validated ".concat(t),
          m = (0, o.jsx)(u.ZP, { icon: l.UgA, className: "text-green-500" });
        return (
          f
            ? ((h = "Errors in ".concat(t)),
              (m = (0, o.jsx)(u.ZP, {
                icon: l.q5L,
                className: "text-red-500",
              })))
            : c &&
              ((h = "Warnings in ".concat(t)),
              (m = (0, o.jsx)(u.ZP, {
                icon: l.bcx,
                className: "text-yellow-500",
              }))),
          (0, o.jsx)(
            g,
            (0, r._)(
              { icon: m, text: h, content: n, warnings: i, errors: s },
              d
            )
          )
        );
      }
      function g(e) {
        var t = e.icon,
          n = e.text,
          r = e.content,
          a = e.warnings,
          d = e.errors,
          c = e.expanded,
          f = e.onChangeExpanded,
          h = (0, i._)((0, s.useState)(!1), 2),
          g = h[0],
          m = h[1],
          p = null != c ? c : g,
          v = (0, s.useCallback)(
            function () {
              f
                ? f(!p)
                : m(function (e) {
                    return !e;
                  });
            },
            [p, f]
          );
        return (0, o.jsxs)("div", {
          className: "flex flex-col gap-2 text-sm",
          children: [
            (0, o.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [
                t && (0, o.jsx)("div", { children: t }),
                (0, o.jsx)("div", { children: n }),
                (0, o.jsx)("div", {
                  role: "button",
                  className: "cursor-pointer text-gray-500 hover:text-gray-700",
                  onClick: v,
                  children: (0, o.jsx)(u.ZP, { icon: p ? l.rH8 : l.bTu }),
                }),
              ],
            }),
            p &&
              (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsxs)("div", {
                    className: "flex flex-col gap-2 font-semibold",
                    children: [
                      d &&
                        d.map(function (e, t) {
                          return (0,
                          o.jsx)("div", { className: "text-red-500", children: e }, t);
                        }),
                      a &&
                        a.map(function (e, t) {
                          return (0,
                          o.jsx)("div", { className: "text-yellow-500", children: e }, t);
                        }),
                    ],
                  }),
                  r &&
                    (0, o.jsx)("pre", {
                      className: "overflow-auto whitespace-pre-wrap text-xs",
                      children:
                        "string" == typeof r ? r : JSON.stringify(r, null, 2),
                    }),
                ],
              }),
          ],
        });
      }
    },
    17915: function (e, t, n) {
      n.d(t, {
        GI: function () {
          return g;
        },
        U$: function () {
          return f;
        },
        Up: function () {
          return p;
        },
        aU: function () {
          return m;
        },
        nT: function () {
          return x;
        },
        qo: function () {
          return h;
        },
        sd: function () {
          return b;
        },
      });
      var r = n(21722),
        a = n(22830),
        i = n(81949),
        o = n(39889),
        s = n(35448),
        l = n(13451),
        u = n(70079),
        d = n(24274),
        c = n(86573);
      function f(e) {
        var t = e.onSuccess,
          n = e.onError,
          r = e.onSettled,
          a = (0, s.NL)(),
          i = (0, l.D)(d.ZP.updatePluginUserSettings.bind(d.ZP), {
            onSuccess: function (e) {
              g(e, a, ["installedAip"]), m(e, a, ["approvedAip"]), t(e);
            },
            onError: n,
            onSettled: r,
          }).mutate;
        return (0, u.useCallback)(
          function (e) {
            i({ pluginId: e, isInstalled: !0 });
          },
          [i]
        );
      }
      function h(e) {
        var t = e.onSuccess,
          n = e.onError,
          r = e.onSettled,
          a = (0, s.NL)(),
          o = (0, l.D)(d.ZP.updatePluginUserSettings.bind(d.ZP), {
            onSuccess: function (e) {
              (function (e, t, n) {
                t.setQueryData(n, function (t) {
                  var n = (0, i._)((null == t ? void 0 : t.items) || []),
                    r = n.findIndex(function (t) {
                      return t.id === e.id;
                    });
                  return (
                    -1 !== r && n.splice(r, 1), { count: n.length, items: n }
                  );
                });
              })(e, a, ["installedAip"]),
                m(e, a, ["approvedAip"]),
                t(e);
            },
            onError: n,
            onSettled: r,
          }).mutate;
        return (0, u.useCallback)(
          function (e) {
            o({ pluginId: e, isInstalled: !1 });
          },
          [o]
        );
      }
      function g(e, t, n) {
        t.setQueryData(n, function (t) {
          var n = (0, i._)((null == t ? void 0 : t.items) || []),
            r = n.findIndex(function (t) {
              return t.id === e.id;
            });
          return (
            -1 !== r ? (n[r] = e) : n.push(e), { count: n.length, items: n }
          );
        });
      }
      function m(e, t, n) {
        t.setQueryData(n, function (t) {
          var n = (0, i._)((null == t ? void 0 : t.items) || []),
            r = n.findIndex(function (t) {
              return t.id === e.id;
            });
          return -1 !== r && (n[r] = e), { count: n.length, items: n };
        });
      }
      function p(e, t) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = (0, r._)(function (e, t) {
          var n, r;
          return (0, o.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (n = ""
                    .concat(window.location.origin, "/aip/")
                    .concat(e.id, "/oauth/callback")),
                  [4, d.ZP.pluginOauthRedirect(e.id, n, t)]
                );
              case 1:
                return (
                  (r = a.sent()), (window.location.href = r.redirect_uri), [2]
                );
            }
          });
        })).apply(this, arguments);
      }
      function x(e) {
        var t = e.manifest.auth;
        if ("oauth" !== t.type || !e.oauth_client_id) return null;
        var n = new URLSearchParams({
          response_type: "code",
          client_id: e.oauth_client_id,
          redirect_uri: ""
            .concat(window.location.origin, "/aip/")
            .concat(e.id, "/oauth/callback"),
          scope: t.scope,
        });
        return (
          t.client_url.includes("slack.com") &&
            (n.delete("scope"), n.append("user_scope", t.scope)),
          "".concat(t.client_url, "?").concat(n)
        );
      }
      function b() {
        var e,
          t = (0, a._)((0, u.useState)(!1), 2),
          n = t[0],
          i = t[1];
        return {
          fetchManifestAndSpec: (0, u.useCallback)(
            ((e = (0, r._)(function (e) {
              var t, n, r, a, s, l, u, f, h;
              return (0, o.Jh)(this, function (o) {
                switch (o.label) {
                  case 0:
                    (t = e.domain),
                      (n = e.manifestAccessToken),
                      (r = e.onSuccess),
                      (a = e.onError),
                      (s = (0, c.NB)(t)),
                      (o.label = 1);
                  case 1:
                    if ((o.trys.push([1, 10, 11, 12]), i(!0), !(null != s)))
                      return [3, 3];
                    return [4, (0, c.Zb)(s)];
                  case 2:
                    if (void 0 === (l = o.sent())) return [2];
                    return (
                      r({
                        domain: s,
                        scrapeManifestResponse: {
                          plugin: l.plugin,
                          manifest_validation_info: l.manifest_validation_info,
                        },
                        apiValidationInfo: l.api_validation_info,
                      }),
                      [3, 9]
                    );
                  case 3:
                    return [
                      4,
                      d.ZP.scrapePluginManifest({
                        domain: t,
                        manifestAccessToken: n,
                      }),
                    ];
                  case 4:
                    if (!(u = o.sent()).plugin) return [3, 8];
                    o.label = 5;
                  case 5:
                    return (
                      o.trys.push([5, 7, , 8]),
                      [4, d.ZP.getPluginApi({ id: u.plugin.id })]
                    );
                  case 6:
                    return (f = o.sent().api_validation_info), [3, 8];
                  case 7:
                    return o.sent(), [3, 8];
                  case 8:
                    r({
                      domain: t,
                      scrapeManifestResponse: u,
                      apiValidationInfo: f,
                      manifestAccessToken: n,
                    }),
                      (o.label = 9);
                  case 9:
                    return [3, 12];
                  case 10:
                    return (h = o.sent()), a(null != s ? h : void 0), [3, 12];
                  case 11:
                    return i(!1), [7];
                  case 12:
                    return [2];
                }
              });
            })),
            function (t) {
              return e.apply(this, arguments);
            }),
            []
          ),
          isLoading: n,
        };
      }
    },
    86573: function (e, t, n) {
      n.d(t, {
        NB: function () {
          return p;
        },
        Zb: function () {
          return v;
        },
        cf: function () {
          return m;
        },
        qZ: function () {
          return f;
        },
        wR: function () {
          return c;
        },
      });
      var r = n(21722),
        a = n(39324),
        i = n(39889),
        o = n(8844),
        s = n(22121),
        l = n(69403),
        u = n(24274),
        d = n(97688);
      function c(e) {
        var t,
          n,
          r,
          a,
          i =
            null !==
              (a =
                null === (t = e.metadata) || void 0 === t
                  ? void 0
                  : null === (n = t.invoked_plugin) || void 0 === n
                  ? void 0
                  : n.http_api_call_data) && void 0 !== a
              ? a
              : null === (r = e.metadata) || void 0 === r
              ? void 0
              : r.http_api_call_data;
        if (void 0 !== i) {
          if (e.author.role !== l.uU.Assistant) {
            console.error(
              "Refusing to make localhost plugin HTTP call from non-assistant message",
              e
            );
            return;
          }
          if (
            "object" != typeof i ||
            "string" != typeof i.namespace ||
            0 === i.namespace.length ||
            "string" != typeof i.function_name ||
            0 === i.function_name.length ||
            "string" != typeof i.parent_message_id ||
            0 === i.parent_message_id.length ||
            "string" != typeof i.url ||
            0 === i.url.length ||
            "string" != typeof i.method ||
            !["get", "post", "put", "delete", "patch"].includes(i.method) ||
            !Array.isArray(i.qs_params) ||
            i.qs_params.some(function (e) {
              return (
                !Array.isArray(e) ||
                2 !== e.length ||
                "string" != typeof e[0] ||
                "string" != typeof e[1]
              );
            }) ||
            "object" != typeof i.headers ||
            Object.keys(i.headers).some(function (e) {
              return "string" != typeof e;
            }) ||
            Object.values(i.headers).some(function (e) {
              return "string" != typeof e;
            }) ||
            !(
              null === i.body ||
              ("object" == typeof i.body &&
                Object.keys(i.body).every(function (e) {
                  return "string" == typeof e;
                }))
            ) ||
            "string" != typeof i.api_function_type ||
            !["kwargs", "chat"].includes(i.api_function_type)
          ) {
            console.error(
              "Refusing to make localhost plugin HTTP call with invalid metadata",
              e
            );
            return;
          }
          if (!/^https?:\/\/localhost:/.test(i.url)) {
            console.error(
              "Refusing to make localhost plugin HTTP call with non-localhost URL",
              e
            );
            return;
          }
          return i;
        }
      }
      function f(e) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = (0, r._)(function (e) {
          var t;
          return (0, i.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  n.trys.push([0, 2, , 3]),
                  [
                    4,
                    (function (e) {
                      return g.apply(this, arguments);
                    })(e),
                  ]
                );
              case 1:
                return [2, n.sent()];
              case 2:
                return (
                  console.error(
                    "Error making localhost plugin HTTP call",
                    (t = n.sent())
                  ),
                  [
                    2,
                    [
                      {
                        id: (0, o.Z)(),
                        author: { role: l.uU.Tool, name: "plugin_service" },
                        content: {
                          content_type: l.PX.Text,
                          parts: [
                            "Error making localhost plugin HTTP call: ".concat(
                              t
                            ),
                          ],
                        },
                        recipient: "all",
                      },
                    ],
                  ]
                );
              case 3:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function g() {
        return (g = (0, r._)(function (e) {
          var t, n, r, s;
          function u(e) {
            return Object.keys(e).map(function (e) {
              return e.toLowerCase();
            });
          }
          return (0, i.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                var d;
                if (
                  ((t = { "content-type": "application/json" }),
                  (d = [u(e.headers), u(t)].flat()),
                  new Set(d).size !== d.length)
                )
                  throw Error(
                    "Refusing to make localhost plugin HTTP call with duplicate header keys"
                  );
                return (
                  (n = e.url),
                  e.qs_params.length > 0 &&
                    (n = n + "?" + new URLSearchParams(e.qs_params)),
                  (r = void 0),
                  null !== e.body && (r = JSON.stringify(e.body)),
                  [
                    4,
                    fetch(n, {
                      method: e.method,
                      headers: (0, a._)({}, t, e.headers),
                      body: r,
                    }),
                  ]
                );
              case 1:
                return [4, i.sent().text()];
              case 2:
                if (((s = i.sent()), "chat" === e.api_function_type))
                  return [2, [JSON.parse(s)]];
                if ("kwargs" === e.api_function_type)
                  return [
                    2,
                    [
                      {
                        id: (0, o.Z)(),
                        author: {
                          role: l.uU.Tool,
                          name: ""
                            .concat(e.namespace, ".")
                            .concat(e.function_name),
                        },
                        content: { content_type: l.PX.Text, parts: [s] },
                        recipient: "all",
                      },
                    ],
                  ];
                throw Error("Not implemented");
            }
          });
        })).apply(this, arguments);
      }
      function m(e) {
        return !!p(e.domain);
      }
      function p(e) {
        return /^localhost:\d+$/.test(e)
          ? "http://".concat(e)
          : /^https?:\/\/localhost:\d+$/.test(e)
          ? e
          : null;
      }
      function v(e) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = (0, r._)(function (e) {
          var t, n, r, a, o, l;
          return (0, i.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  i.trys.push([0, 3, , 4]),
                  [4, fetch(e + "/.well-known/ai-plugin.json")]
                );
              case 1:
                return [4, i.sent().json()];
              case 2:
                return (n = i.sent()), [3, 4];
              case 3:
                return (
                  i.sent(),
                  d.m.danger(
                    "Failed to fetch localhost manifest. Check to ensure your localhost is running and your localhost server has CORS enabled."
                  ),
                  [2]
                );
              case 4:
                if (
                  null ==
                  (r =
                    null == n
                      ? void 0
                      : null === (t = n.api) || void 0 === t
                      ? void 0
                      : t.url)
                )
                  return (
                    d.m.danger(
                      "Localhost manifest is missing OpenAPI spec URL."
                    ),
                    [2]
                  );
                if (
                  "pathname" ===
                  (a = (function (e) {
                    try {
                      return new URL(e), "full url";
                    } catch (t) {
                      if (e.startsWith("/")) return "pathname";
                      return "neither";
                    }
                  })(r))
                )
                  r = e + r;
                else if ("neither" === a)
                  return (
                    d.m.danger(
                      "Localhost manifest OpenAPI spec URL is not a valid URL or path."
                    ),
                    [2]
                  );
                i.label = 5;
              case 5:
                return i.trys.push([5, 8, , 9]), [4, fetch(r)];
              case 6:
                return [4, i.sent().text()];
              case 7:
                return (o = i.sent()), [3, 9];
              case 8:
                return (
                  i.sent(),
                  d.m.danger("Failed to fetch localhost OpenAPI spec."),
                  [2]
                );
              case 9:
                try {
                  l = s.ZP.parse(o);
                } catch (e) {}
                try {
                  l = JSON.parse(o);
                } catch (e) {}
                if (null == l)
                  return (
                    d.m.danger(
                      "Failed to parse localhost OpenAPI spec as JSON or YAML."
                    ),
                    [2]
                  );
                i.label = 10;
              case 10:
                return (
                  i.trys.push([10, 12, , 13]),
                  [
                    4,
                    u.ZP.createOrUpdateLocalhostPlugin({
                      localhost: e,
                      manifest: n,
                      openapiSpec: l,
                    }),
                  ]
                );
              case 11:
                return [2, i.sent()];
              case 12:
                return (
                  i.sent(),
                  d.m.danger(
                    "Failed to create or update localhost plugin at ".concat(e)
                  ),
                  [3, 13]
                );
              case 13:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
    },
    76559: function (e, t, n) {
      n.d(t, {
        V: function () {
          return l;
        },
        Z: function () {
          return u;
        },
      });
      var r = n(24396),
        a = n(70079),
        i = n(32787),
        o = n(24274),
        s = n(21437),
        l = ["approvedAip"];
      function u() {
        var e = (0, i.kP)().session,
          t = (0, s.Fl)().isPluginsAvailable,
          n = (0, r.a)(
            l,
            function () {
              return o.ZP.getPlugins({
                offset: 0,
                limit: 250,
                statuses: ["approved"],
                accessToken: null == e ? void 0 : e.accessToken,
              });
            },
            {
              enabled: t && (null == e ? void 0 : e.accessToken) != null,
              onError: function (e) {
                console.error(e);
              },
            }
          ),
          u = n.data,
          d = n.isLoading;
        return (0, a.useMemo)(
          function () {
            var e = u
              ? u.items.reduce(function (e, t) {
                  var n = !0,
                    r = !1,
                    a = void 0;
                  try {
                    for (
                      var i,
                        o,
                        s = (
                          null !== (i = t.categories) && void 0 !== i ? i : []
                        )[Symbol.iterator]();
                      !(n = (o = s.next()).done);
                      n = !0
                    ) {
                      var l = o.value;
                      null == e[l.id] &&
                        (e[l.id] = { id: l.id, title: l.title, items: [] }),
                        e[l.id].items.push(t);
                    }
                  } catch (e) {
                    (r = !0), (a = e);
                  } finally {
                    try {
                      n || null == s.return || s.return();
                    } finally {
                      if (r) throw a;
                    }
                  }
                  return e;
                }, {})
              : {};
            return {
              approvedPlugins: u ? u.items : [],
              approvedPluginsByCategory: e,
              isLoading: d,
            };
          },
          [u, d]
        );
      }
    },
    31721: function (e, t, n) {
      n.d(t, {
        v: function () {
          return m;
        },
      });
      var r = n(21722),
        a = n(20485),
        i = n(39889),
        o = n(35448),
        s = n(24396),
        l = n(70079),
        u = n(24274),
        d = n(32983),
        c = n(76559),
        f = n(74437);
      function h(e) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = (0, r._)(function (e) {
          var t;
          return (0, i.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (t = e.queryKey), [4, u.ZP.publicGetPluginsById({ ids: t })]
                );
              case 1:
                return [2, n.sent().items];
            }
          });
        })).apply(this, arguments);
      }
      function m() {
        var e, t, n;
        return null !==
          (e = ((t = (0, l.useContext)(d.XA)),
          (n = (0, o.NL)()),
          (0, s.a)({
            queryKey: t,
            queryFn: h,
            select: void 0,
            initialData: function () {
              var e =
                  null === (u = n.getQueryData(f.Z)) || void 0 === u
                    ? void 0
                    : u.items,
                r =
                  null === (d = n.getQueryData(c.V)) || void 0 === d
                    ? void 0
                    : d.items,
                i = [],
                o = !0,
                s = !1,
                l = void 0;
              try {
                for (
                  var u, d, h, g = t[Symbol.iterator]();
                  !(o = (h = g.next()).done);
                  o = !0
                ) {
                  var m = (function () {
                    var t,
                      n = h.value,
                      a =
                        null !==
                          (t =
                            null == e
                              ? void 0
                              : e.find(function (e) {
                                  return e.id === n;
                                })) && void 0 !== t
                          ? t
                          : null == r
                          ? void 0
                          : r.find(function (e) {
                              return e.id === n;
                            });
                    if (null == a) return { v: void 0 };
                    i.push(a);
                  })();
                  if ("object" === (0, a._)(m)) return m.v;
                }
              } catch (e) {
                (s = !0), (l = e);
              } finally {
                try {
                  o || null == g.return || g.return();
                } finally {
                  if (s) throw l;
                }
              }
              return i;
            },
          })).data) && void 0 !== e
          ? e
          : [];
      }
    },
    697: function (e, t, n) {
      n.d(t, {
        dT: function () {
          return h;
        },
        hZ: function () {
          return l;
        },
        iO: function () {
          return u;
        },
        p0: function () {
          return f;
        },
        wu: function () {
          return g;
        },
      });
      var r = n(81949),
        a = n(70079),
        i = n(81292),
        o = n(85023),
        s = n(74437),
        l = 3,
        u = [
          ["www.klarna.com", "server.shop.app"],
          ["apim.expedia.com", "kayak.com"],
          ["www.redfin.com", "plugins.zillow.com"],
          ["instacart.com", "api.tasty.co"],
        ],
        d = "oai/enabledPluginIds",
        c = (0, i.ZP)(function () {
          var e = Array.from(new Set(o.m.getItem(d)));
          return { enabledPluginIds: new Set(e.splice(0, l)) };
        });
      function f() {
        var e = (0, s.C)().installedPlugins,
          t = c().enabledPluginIds;
        return (0, a.useMemo)(
          function () {
            return e.filter(function (e) {
              return t.has(e.id);
            });
          },
          [t, e]
        );
      }
      function h(e) {
        e.length > l ||
          c.setState(function () {
            return o.m.setItem(d, e), { enabledPluginIds: new Set(e) };
          });
      }
      function g(e) {
        c.setState(function (t) {
          if (t.enabledPluginIds.size >= l) return t;
          var n = (0, r._)(t.enabledPluginIds).concat([e]);
          return o.m.setItem(d, n), { enabledPluginIds: new Set(n) };
        });
      }
    },
    74437: function (e, t, n) {
      n.d(t, {
        C: function () {
          return u;
        },
        Z: function () {
          return l;
        },
      });
      var r = n(24396),
        a = n(70079),
        i = n(32787),
        o = n(24274),
        s = n(21437),
        l = ["installedAip"];
      function u() {
        var e = (0, i.kP)().session,
          t = (0, s.Fl)().isPluginsAvailable,
          n = (0, r.a)(
            l,
            function () {
              return o.ZP.getPlugins({
                offset: 0,
                limit: 250,
                isInstalled: !0,
                accessToken: null == e ? void 0 : e.accessToken,
              });
            },
            {
              enabled: t && !!(null == e ? void 0 : e.accessToken),
              onError: function (e) {
                console.error(e);
              },
            }
          ),
          u = n.data,
          d = n.isLoading;
        return (0, a.useMemo)(
          function () {
            return { installedPlugins: u ? u.items : [], isLoading: d };
          },
          [u, d]
        );
      }
    },
    44925: function (e, t, n) {
      n.d(t, {
        _4: function () {
          return i;
        },
        m1: function () {
          return a;
        },
        ti: function () {
          return r;
        },
      });
      var r = "https://help.openai.com/en/collections/3943089-billing",
        a =
          "https://help.openai.com/en/articles/7905690-how-do-i-cancel-my-apple-subscription-for-chatgpt-plus-in-the-chatgpt-ios-app",
        i = {
          WEBAPP: "chatgpt_web",
          MOBILE_IOS: "chatgpt_mobile_ios",
          GRANTED: "chatgpt_gratis_recepient",
          NOT_PURCHASED: "chatgpt_not_purchased",
        };
    },
    24148: function (e, t, n) {
      n.d(t, {
        t: function () {
          return u;
        },
      });
      var r = n(39324),
        a = n(71209),
        i = n(91530),
        o = n.n(i),
        s = n(81292),
        l = { showAccountPaymentModal: !1 },
        u = (0, s.ZP)()(function (e) {
          return (0, a._)((0, r._)({}, l), {
            setShowAccountPaymentModal: function (t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : o();
              e({ showAccountPaymentModal: t }), n && n();
            },
          });
        });
    },
    48101: function (e, t, n) {
      n.d(t, {
        fv: function () {
          return _;
        },
        ZP: function () {
          return j;
        },
        Ub: function () {
          return C;
        },
      });
      var r = n(22830),
        a = n(4337),
        i = n(35250),
        o = n(70079),
        s = n(1454),
        l = n(34303),
        u = n(75527),
        d = n(59110),
        c = n(56244),
        f = n(66958),
        h = n(13282),
        g = n(48727),
        m = n(38317),
        p = n(40638),
        v = n(24760);
      function x(e) {
        var t = e.children,
          n = e.sidebarOpen,
          r = e.onClose;
        return (0, i.jsx)(p.u.Root, {
          show: n,
          as: o.Fragment,
          children: (0, i.jsxs)(v.V, {
            as: "div",
            className: "relative z-10",
            onClose: r,
            children: [
              (0, i.jsx)("div", { className: "fixed inset-0" }),
              (0, i.jsx)("div", {
                className: "fixed inset-0 overflow-hidden",
                children: (0, i.jsx)("div", {
                  className: "absolute inset-0 overflow-hidden",
                  children: (0, i.jsx)("div", {
                    className:
                      "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                    children: (0, i.jsx)(p.u.Child, {
                      as: o.Fragment,
                      enter:
                        "transform transition ease-in-out duration-100 sm:duration-300",
                      enterFrom: "translate-x-full",
                      enterTo: "translate-x-0",
                      leave:
                        "transform transition ease-in-out duration-300 sm:duration-500",
                      leaveFrom: "translate-x-0",
                      leaveTo: "translate-x-full",
                      children: (0, i.jsx)(v.V.Panel, {
                        className:
                          "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
                        children: (0, i.jsx)("div", {
                          className:
                            "h-full overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
                          children: t,
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function b() {
        var e = (0, a._)([
          "overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 bg-white dark:bg-gray-900",
        ]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = (0, a._)(["whitespace-pre-wrap text-sm"]);
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = (0, a._)([
          "px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-white/10 border-gray-200",
        ]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      function j(e) {
        var t = e.children,
          n = e.title,
          r = e.icon,
          a = e.isOpen,
          o = e.slideOver,
          l = e.onClose,
          u = (0, i.jsxs)(k, {
            children: [
              (0, i.jsxs)("div", {
                className: "flex items-start justify-between",
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
                    children: [(0, i.jsx)(m.ZP, { icon: r }), n],
                  }),
                  (0, i.jsx)("div", {
                    className: "mr-2 mt-2 flex h-7 items-center",
                    children: (0, i.jsxs)("button", {
                      type: "button",
                      className:
                        "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                      onClick: l,
                      children: [
                        (0, i.jsx)("span", {
                          className: "sr-only",
                          children: "Close sidebar",
                        }),
                        (0, i.jsx)(m.ZP, {
                          icon: s.q5L,
                          size: "medium",
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              t,
            ],
          });
        return o
          ? (0, i.jsx)(x, { sidebarOpen: a, onClose: l, children: u })
          : a
          ? u
          : null;
      }
      function _(e) {
        var t = e.clientThreadId,
          n = e.isOpen,
          a = e.slideOver,
          l = e.onClose,
          f = u.tQ.getThreadCurrentLeafId(t),
          m = (0, u.u9)(t, f),
          p = (0, r._)((0, o.useState)(), 2),
          v = p[0],
          x = p[1],
          b = (0, d.hz)(),
          y = (0, o.useCallback)(function () {
            x(void 0);
          }, []),
          w = (0, o.useCallback)(
            function () {
              var e = u.tQ.getTree(t);
              navigator.clipboard.writeText(e.getTextFromThread(f));
            },
            [f, t]
          );
        if (!b.has("debug")) return null;
        var _ = m.map(function (e, t) {
          var n = e.author,
            r = n.role,
            a = n.name;
          return (0, i.jsxs)(
            N,
            {
              role: "button",
              onClick: function () {
                return x(t);
              },
              children: [
                (0, i.jsxs)("div", {
                  className: "text-xs font-medium uppercase text-gray-400",
                  children: [
                    r,
                    a && a !== r && " (".concat(a, ")"),
                    " -> ",
                    (0, c.Ej)(e),
                  ],
                }),
                (0, i.jsx)("div", { children: (0, c.RR)(e) }),
              ],
            },
            e.id
          );
        });
        return (0, i.jsxs)(j, {
          icon: s.cDN,
          title: "Debug",
          isOpen: n,
          slideOver: a,
          onClose: l,
          children: [
            (0, i.jsxs)("div", {
              className:
                "flex items-center justify-around gap-2 px-4 py-1 text-xs font-medium uppercase ",
              children: [
                (0, i.jsx)(M, { clientThreadId: t, messages: m }),
                (0, i.jsx)("div", {
                  children: (0, i.jsx)(h.Z, {
                    onCopy: w,
                    buttonText: "Copy text",
                  }),
                }),
              ],
            }),
            (0, i.jsx)(T, { children: _ }),
            void 0 !== v &&
              (0, i.jsx)(
                g.Z,
                {
                  isOpen: !0,
                  onClose: y,
                  type: "success",
                  children: (0, i.jsx)("pre", {
                    className:
                      "max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",
                    children: JSON.stringify(m[v], null, 2),
                  }),
                },
                "DebugMessageModal-".concat(v)
              ),
          ],
        });
      }
      function C(e, t) {
        var n = JSON.stringify(t) + "\n",
          r = new Blob([n], { type: "application/json" }),
          a = URL.createObjectURL(r),
          i = document.createElement("a");
        (i.href = a),
          (i.download = "messages-".concat(
            u.tQ.getServerThreadId(e),
            ".jsonl"
          )),
          i.click(),
          URL.revokeObjectURL(a);
      }
      function M(e) {
        var t = e.clientThreadId,
          n = e.messages,
          r = (0, o.useCallback)(
            function () {
              C(t, n);
            },
            [t, n]
          );
        return (0, i.jsxs)(f.z, {
          onClick: r,
          color: "dark",
          size: "small",
          children: [
            (0, i.jsx)(m.ZP, { icon: s._hL }),
            "Download raw conversation",
          ],
        });
      }
      var k = l.Z.div(b()),
        T = l.Z.pre(y()),
        N = l.Z.div(w());
    },
    36112: function (e, t, n) {
      n.d(t, {
        LC: function () {
          return g;
        },
        MO: function () {
          return h;
        },
        Od: function () {
          return p;
        },
        iF: function () {
          return m;
        },
      });
      var r = n(38675),
        a = n(35448),
        i = n(70079),
        o = n(32787),
        s = n(85023),
        l = n(24274),
        u = n(88038),
        d = n(59110),
        c = "oai/apps/hasSeenHistoryFilteredDisclosure/".concat("2023-03-21"),
        f = "conversationHistory";
      function h() {
        var e,
          t = (0, d.hz)().has(u.Ud),
          n = (0, d.$T)(),
          a = (0, o.kP)().session,
          s = null == a ? void 0 : a.accessToken,
          c = !t && !!s && !n,
          h = (0, r.N)({
            queryKey: [f],
            queryFn: function (e) {
              var t = e.pageParam;
              return l.ZP.getConversations(
                t || 0,
                28,
                null == a ? void 0 : a.accessToken
              );
            },
            getNextPageParam: function (e) {
              var t = e.offset + e.limit;
              return t < e.total ? t : void 0;
            },
            enabled: c,
          }),
          g = h.data,
          m = h.fetchNextPage,
          p = h.hasNextPage,
          v = h.isInitialLoading,
          x = h.isFetchingNextPage,
          b = h.isError,
          y = (0, i.useMemo)(
            function () {
              return null !==
                (e =
                  null == g
                    ? void 0
                    : g.pages.flatMap(function (e) {
                        return e.items;
                      })) && void 0 !== e
                ? e
                : [];
            },
            [g]
          );
        return {
          data: g,
          conversations: y,
          fetchNextPage: m,
          hasNextPage: p,
          isLoading: v,
          isFetchingNextPage: x,
          isError: c && b,
        };
      }
      function g() {
        var e = h().conversations;
        return (0, i.useMemo)(
          function () {
            return e.length > 0;
          },
          [e]
        );
      }
      function m() {
        var e = (0, a.NL)();
        return (0, i.useCallback)(
          function () {
            e.invalidateQueries([f]);
          },
          [e]
        );
      }
      function p() {
        (0, i.useEffect)(function () {
          s.m.removeItem(c);
        }, []);
      }
    },
    5046: function (e, t, n) {
      n.d(t, {
        BT: function () {
          return u;
        },
        Y8: function () {
          return d;
        },
        kc: function () {
          return s;
        },
        m0: function () {
          return l;
        },
        uU: function () {
          return o;
        },
      });
      var r = n(81949),
        a = n(81292),
        i = n(51132),
        o = "model_cap_exceeded",
        s = (0, a.ZP)(function () {
          return { serverThreadIds: new Set() };
        });
      function l(e) {
        s.setState(function (t) {
          return {
            serverThreadIds: new Set((0, r._)(t.serverThreadIds).concat([e])),
          };
        });
      }
      function u() {
        var e = d(function (e) {
            return e.isoDate;
          }),
          t = d(function (e) {
            return e.clearCapTimeout;
          }),
          n = Date.now(),
          r = e && new Date(e).getTime();
        return e && r && r <= n ? (t(), null) : e ? "gpt-4" : null;
      }
      var d = (0, a.ZP)()(
        (0, i.tJ)(
          function (e) {
            return {
              isoDate: "",
              setCapTimeout: function (t) {
                e(function () {
                  return { isoDate: t };
                });
              },
              clearCapTimeout: function () {
                e(function () {
                  return { isoDate: "" };
                });
              },
            };
          },
          { name: "oai/apps/capExpiresAt" }
        )
      );
    },
    66523: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(24396),
        a = n(70079),
        i = n(32787),
        o = n(24274),
        s = n(59110),
        l = n(63390),
        u = n(5046),
        d = { textarea: "", "model-switcher": "" };
      function c() {
        var e = (0, i.kP)().session,
          t = (0, s.WY)(),
          n = (0, u.Y8)(function (e) {
            return e.isoDate;
          }),
          c = (0, l.xz)(n),
          f = (0, r.a)(
            ["modelMessageCap"],
            function () {
              return o.ZP.getModelMessageCap();
            },
            { enabled: (null == e ? void 0 : e.accessToken) != null && t }
          ).data;
        return (0, a.useMemo)(
          function () {
            var e = (null == f ? void 0 : f.message_cap) || 0,
              t = (null == f ? void 0 : f.message_cap_window) || 1,
              n = (function (e) {
                if (e < 60) return e < 2 ? "minute" : "".concat(e, " minutes");
                var t = Math.floor(e / 60);
                if (t < 24) return t < 2 ? "hour" : "".concat(t, " hours");
                var n = Math.floor(t / 24);
                if (n < 7) return n < 2 ? "day" : "".concat(n, " days");
              })(t),
              r = (null == f ? void 0 : f.message_disclaimer) || d;
            return n
              ? f && t && e
                ? {
                    textareaDisclaimer: r.textarea
                      .replaceAll("%FORMATTED_TIME%", c)
                      .replaceAll("%NUMERATOR%", "".concat(e))
                      .replaceAll("%DENOMINATOR%", n),
                    modelSwitcherDisclaimer: r["model-switcher"]
                      .replaceAll("%FORMATTED_TIME%", c)
                      .replaceAll("%NUMERATOR%", "".concat(e))
                      .replaceAll("%DENOMINATOR%", n),
                  }
                : {
                    textareaDisclaimer: d.textarea,
                    modelSwitcherDisclaimer: d["model-switcher"],
                  }
              : {
                  textareaDisclaimer: r.textarea,
                  modelSwitcherDisclaimer: r["model-switcher"],
                };
          },
          [f, c]
        );
      }
    },
    97732: function (e, t, n) {
      n.d(t, {
        Ri: function () {
          return T;
        },
        ZP: function () {
          return S;
        },
        dN: function () {
          return a;
        },
        i0: function () {
          return N;
        },
      });
      var r,
        a,
        i,
        o,
        s,
        l,
        u,
        d,
        c,
        f,
        h = n(96237),
        g = n(39324),
        m = n(81949),
        p = n(35250),
        v = n(41170),
        x = n(70079),
        b = n(21437),
        y = n(59110),
        w = n(38317),
        j = n(5046),
        _ = n(66523),
        C = n(90076);
      ((r = a || (a = {})).BROWSING = "browsing_model"),
        (r.CODE_INTERPRETER = "code_interpreter_model"),
        (r.PLUGINS = "plugins_model");
      var M =
          ((i = {}),
          (0, h._)(i, "gpt_3.5", {
            icon: w.jr,
            activeIcon: w.jr,
            backgroundColor: "#19c37d",
            buttonActiveClass: "text-brand-green",
            buttonHoverClass: "group-hover/button:text-brand-green",
            iconClass:
              "group-hover/option:!text-brand-green group-hover/options:text-gray-500",
            disclaimer: "Available to Free and Plus users",
            showSelectedValueBelow: !1,
          }),
          (0, h._)(i, "gpt_4", {
            icon: w.Bj,
            activeIcon: w.MP,
            backgroundColor: "#AB68FF",
            buttonActiveClass: "text-brand-purple",
            buttonHoverClass: "group-hover/button:text-brand-purple",
            iconClass:
              "group-hover/option:!text-brand-purple group-hover/options:text-gray-500",
            disclaimer: "Available exclusively to Plus users",
            showSelectedValueBelow: !1,
          }),
          (0, h._)(i, "other", {
            icon: v.Z,
            activeIcon: v.Z,
            backgroundColor: "#E06C2B",
            buttonActiveClass: "text-orange-500",
            buttonHoverClass: "group-hover/button:text-orange-500",
            showSelectedValueBelow: !0,
          }),
          i),
        k =
          ((f = {}),
          (0, h._)(f, a.BROWSING, {
            iconByCategory:
              ((o = {}),
              (0, h._)(o, "gpt_3.5", w.O1),
              (0, h._)(o, "gpt_4", w.Fz),
              o),
            activeIconByCategory:
              ((s = {}),
              (0, h._)(s, "gpt_3.5", w.X7),
              (0, h._)(s, "gpt_4", w.Ae),
              s),
            name: (0, p.jsxs)("span", {
              children: [
                "Browse with",
                " ",
                (0, p.jsx)(w.ZP, {
                  icon: w.jE,
                  className: "-mt-[3px] inline-block",
                }),
                " ",
                "Bing",
              ],
            }),
          }),
          (0, h._)(f, a.CODE_INTERPRETER, {
            iconByCategory:
              ((l = {}),
              (0, h._)(l, "gpt_3.5", w.lv),
              (0, h._)(l, "gpt_4", w.Q$),
              l),
            activeIconByCategory:
              ((u = {}),
              (0, h._)(u, "gpt_3.5", w.vy),
              (0, h._)(u, "gpt_4", w.$V),
              u),
            name: "Code Interpreter",
          }),
          (0, h._)(f, a.PLUGINS, {
            iconByCategory:
              ((d = {}),
              (0, h._)(d, "gpt_3.5", w.AQ),
              (0, h._)(d, "gpt_4", w.IT),
              d),
            activeIconByCategory:
              ((c = {}),
              (0, h._)(c, "gpt_3.5", w.Np),
              (0, h._)(c, "gpt_4", w.j3),
              c),
            name: "Plugins",
          }),
          f);
      function T(e) {
        var t = S();
        return (0, x.useMemo)(
          function () {
            return (function (e, t) {
              if (t)
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  if (r.options.length > 0) {
                    var a,
                      i,
                      o = r.options.find(function (e) {
                        return e.value === t;
                      });
                    if (o)
                      return {
                        item: o,
                        categoryId: r.categoryId,
                        backgroundColor: M[r.categoryId].backgroundColor,
                        icon:
                          null !==
                            (i =
                              null !== (a = o.icon) && void 0 !== a
                                ? a
                                : r.icon) && void 0 !== i
                            ? i
                            : M[r.categoryId].icon,
                      };
                  }
                }
            })(t, e);
          },
          [t, e]
        );
      }
      function N(e, t) {
        return (0, C.OX)().some(function (n) {
          return n[t] === e;
        });
      }
      function S() {
        var e = (0, C.OX)(),
          t = (0, C.B9)(),
          n = (0, j.BT)(),
          r = (0, b.Fl)(),
          i = (0, _.Z)().modelSwitcherDisclaimer,
          o = (0, y.hz)(),
          s = (0, C.B8)(),
          l = s.enabledModelsInCategoriesById,
          u = s.enabledModelsNotInCategoriesById;
        return (0, x.useMemo)(
          function () {
            var s = [],
              d = !0,
              c = !1,
              f = void 0;
            try {
              for (
                var h, g = e[Symbol.iterator]();
                !(d = (h = g.next()).done);
                d = !0
              ) {
                var p = h.value;
                if (l.has(p.default_model)) {
                  var v = M[p.category] || {},
                    x = n === p.default_model,
                    b = t.get(p.default_model),
                    y = x
                      ? []
                      : (function (e, t, n, r, i) {
                          var o = e.isBrowsingEnabled,
                            s = e.isPluginsEnabled,
                            l = e.isCodeInterpreterEnabled,
                            u = [];
                          if (
                            o &&
                            null != n[a.BROWSING] &&
                            r.has(n[a.BROWSING])
                          ) {
                            var d = k[a.BROWSING];
                            u.push(
                              Z(i.get(n[a.BROWSING]), {
                                icon: d.iconByCategory[n.category],
                                name: d.name,
                                activeIcon: d.activeIconByCategory[n.category],
                                disabled: t.has("browsing_disabled"),
                              })
                            );
                          }
                          if (
                            l &&
                            null != n[a.CODE_INTERPRETER] &&
                            r.has(n[a.CODE_INTERPRETER])
                          ) {
                            var c = k[a.CODE_INTERPRETER];
                            u.push(
                              Z(i.get(n[a.CODE_INTERPRETER]), {
                                icon: c.iconByCategory[n.category],
                                name: c.name,
                                activeIcon: c.activeIconByCategory[n.category],
                                disabled: t.has("code_interpreter_disabled"),
                              })
                            );
                          }
                          if (
                            s &&
                            null != n[a.PLUGINS] &&
                            r.has(n[a.PLUGINS])
                          ) {
                            var f = k[a.PLUGINS];
                            u.push(
                              Z(i.get(n[a.PLUGINS]), {
                                icon: f.iconByCategory[n.category],
                                name: f.name,
                                activeIcon: f.activeIconByCategory[n.category],
                                disabled: t.has("plugins_disabled"),
                              })
                            );
                          }
                          return u;
                        })(r, o, p, l, t);
                  s.push({
                    categoryId: p.category,
                    value: b.id,
                    name: p.human_category_name,
                    description: x ? i : b.description,
                    disclaimer: v.disclaimer,
                    buttonActiveClass: v.buttonActiveClass,
                    buttonHoverClass: v.buttonHoverClass,
                    iconClass: v.iconClass,
                    icon: v.icon,
                    activeIcon: v.activeIcon,
                    options: [
                      Z(b, {
                        icon: v.icon,
                        activeIcon: v.activeIcon,
                        name: "Default",
                      }),
                    ].concat((0, m._)(y)),
                    disabled: x,
                    showSelectedValueBelow: !1,
                  });
                }
              }
            } catch (e) {
              (c = !0), (f = e);
            } finally {
              try {
                d || null == g.return || g.return();
              } finally {
                if (c) throw f;
              }
            }
            var w = Array.from(u).map(function (e) {
              return t.get(e);
            });
            if (w.length > 0) {
              var j = w[0],
                _ = M.other;
              s.push({
                categoryId: "other",
                value: null == j ? void 0 : j.id,
                name: "Alpha",
                buttonActiveClass: _.buttonActiveClass,
                buttonHoverClass: _.buttonHoverClass,
                options: w.map(function (e) {
                  return Z(e);
                }),
                showSelectedValueBelow: !0,
                icon: _.icon,
                activeIcon: _.activeIcon,
                alwaysShowOptions: !0,
              });
            }
            return s;
          },
          [u, e, l, n, t, r, o, i]
        );
      }
      function Z(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, g._)({ value: e.id, name: e.title, tags: e.tags }, t);
      }
    },
    90076: function (e, t, n) {
      n.d(t, {
        B8: function () {
          return I;
        },
        B9: function () {
          return N;
        },
        Bv: function () {
          return P;
        },
        Gg: function () {
          return S;
        },
        H6: function () {
          return D;
        },
        OX: function () {
          return k;
        },
        S: function () {
          return a;
        },
        Xy: function () {
          return F;
        },
        ZL: function () {
          return M;
        },
        fm: function () {
          return Z;
        },
        iu: function () {
          return T;
        },
        n2: function () {
          return _;
        },
      });
      var r,
        a,
        i = n(21722),
        o = n(39324),
        s = n(71209),
        l = n(81949),
        u = n(39889),
        d = n(24396),
        c = n(68555),
        f = n(70079),
        h = n(32787),
        g = n(24274),
        m = n(75527),
        p = n(21437),
        v = n(59110),
        x = n(32983),
        b = n(5046),
        y = n(97732),
        w = "text-davinci-002-render-sha";
      ((r = a || (a = {})).GPT_3_5 = "gpt3.5"),
        (r.GPT_4 = "gpt4"),
        (r.MOBILE = "mobile");
      var j = D({
          slug: w,
          max_tokens: 4097,
          title: "Default",
          description: "",
          tags: [a.GPT_3_5],
          capabilities: {},
        }),
        _ = new Set(["text-davinci-002-render-paid"]);
      function C(e) {
        var t = (0, f.useContext)(x.QL).historyDisabled,
          n = (0, h.kP)(),
          r = n.session,
          a = n.loading,
          o = null == r ? void 0 : r.accessToken;
        return (0, d.a)({
          queryKey: ["models", { isHistoryDisabled: !t }],
          queryFn: (0, i._)(function () {
            return (0, u.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, g.ZP.getModels(o, t)];
                case 1:
                  return [2, e.sent()];
              }
            });
          }),
          enabled: !a && null != o,
          select: e,
        });
      }
      function M() {
        return C().isLoading;
      }
      function k() {
        var e = C(function (e) {
          return e.categories;
        }).data;
        return null != e ? e : [];
      }
      function T() {
        var e = C(function (e) {
          return e.models;
        }).data;
        return (0, f.useMemo)(
          function () {
            return new Set(
              e
                ? e.map(function (e) {
                    return e.slug;
                  })
                : [w]
            );
          },
          [e]
        );
      }
      function N() {
        var e = C(function (e) {
          return e.models;
        }).data;
        return (0, f.useMemo)(
          function () {
            return new Map(
              e
                ? e.map(function (e) {
                    return [e.slug, D(e)];
                  })
                : [[w, j]]
            );
          },
          [e]
        );
      }
      function S(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = function (e) {
            var t,
              n,
              r = o.get(e);
            return (
              null !==
                (n =
                  null == r
                    ? void 0
                    : null === (t = r.tags) || void 0 === t
                    ? void 0
                    : t.includes(a.GPT_3_5)) &&
              void 0 !== n &&
              n
            );
          },
          r = (0, v.hz)(),
          i = (0, l._)(e),
          o = N();
        if (!t && r.has("priority_driven_models_list")) return i[0];
        var s = (0, l._)(i).find(function (e) {
          return n(e);
        });
        return null != s ? s : i[0];
      }
      function Z() {
        var e = (0, c.useRouter)(),
          t = e.query;
        return (0, f.useCallback)(
          function (n) {
            e.replace(
              {
                pathname: e.basePath,
                query: (0, s._)((0, o._)({}, t), {
                  model: encodeURIComponent(n),
                }),
              },
              void 0,
              { shallow: !0 }
            );
          },
          [t, e]
        );
      }
      function P(e, t) {
        var n,
          r = decodeURIComponent(
            null !== (n = (0, c.useRouter)().query.model) && void 0 !== n
              ? n
              : ""
          ),
          a = (0, m.XK)(t),
          i = I().enabledModelsById,
          o = (0, p.Fl)().isBetaFeaturesUiEnabled,
          s = (0, b.kc)().serverThreadIds,
          l = T(),
          u = o ? i : l,
          d = S(u);
        return (0, f.useMemo)(
          function () {
            if (0 !== u.size) {
              var t = void 0 !== a && s.has(a);
              return !t && null != e && l.has(e)
                ? null != e
                  ? e
                  : void 0
                : !t && r && u.has(r)
                ? null != r
                  ? r
                  : void 0
                : null != d
                ? d
                : void 0;
            }
          },
          [l, d, e, r, u, a, s]
        );
      }
      function F(e, t) {
        var n = P(e, t),
          r = N();
        return (0, f.useMemo)(
          function () {
            var e;
            return null == n
              ? j
              : null !== (e = r.get(n)) && void 0 !== e
              ? e
              : j;
          },
          [n, r]
        );
      }
      function I() {
        var e = k(),
          t = T(),
          n = N(),
          r = (0, p.Fl)();
        return (0, f.useMemo)(
          function () {
            var i,
              o = e.reduce(
                function (e, a) {
                  var i,
                    o,
                    s,
                    l,
                    u,
                    d,
                    c = e.enabledModelsInCategoriesById,
                    f = e.availableModelsInCategoriesById,
                    h = t.has(a.default_model) ? a.default_model : null;
                  null != h && (f.add(h), c.add(h));
                  var g = t.has(
                    null !== (i = a[y.dN.BROWSING]) && void 0 !== i ? i : ""
                  )
                    ? n.get(
                        null !== (o = a[y.dN.BROWSING]) && void 0 !== o ? o : ""
                      )
                    : null;
                  g && (f.add(g.id), r.isBrowsingEnabled && c.add(g.id));
                  var m = t.has(
                    null !== (s = a[y.dN.CODE_INTERPRETER]) && void 0 !== s
                      ? s
                      : ""
                  )
                    ? n.get(
                        null !== (l = a[y.dN.CODE_INTERPRETER]) && void 0 !== l
                          ? l
                          : ""
                      )
                    : null;
                  m && (f.add(m.id), r.isCodeInterpreterEnabled && c.add(m.id));
                  var p = t.has(
                    null !== (u = a[y.dN.PLUGINS]) && void 0 !== u ? u : ""
                  )
                    ? n.get(
                        null !== (d = a[y.dN.PLUGINS]) && void 0 !== d ? d : ""
                      )
                    : null;
                  return (
                    p && (f.add(p.id), r.isPluginsEnabled && c.add(p.id)), e
                  );
                },
                {
                  enabledModelsInCategoriesById: new Set(),
                  availableModelsInCategoriesById: new Set(),
                }
              ),
              s = o.enabledModelsInCategoriesById,
              u = o.availableModelsInCategoriesById,
              d = new Set(
                Array.from(t).filter(function (e) {
                  return !u.has(e);
                })
              ),
              c = new Set(
                Array.from(d).filter(function (e) {
                  var t;
                  return !(null === (t = n.get(e)) || void 0 === t
                    ? void 0
                    : t.tags.includes(a.MOBILE));
                })
              );
            return {
              enabledModelsInCategoriesById: s,
              availableModelsInCategoriesById: u,
              enabledModelsNotInCategoriesById: c,
              enabledModelsById: new Set((0, l._)(s).concat((0, l._)(c))),
            };
          },
          [e, t, r, n]
        );
      }
      function D(e) {
        return {
          id: e.slug,
          maxTokens: e.max_tokens,
          title: e.title,
          description: e.description,
          tags: e.tags,
          enabledTools: e.enabled_tools,
          capabilities: e.capabilities,
        };
      }
    },
    87316: function (e, t, n) {
      n.d(t, {
        g: function () {
          return l;
        },
      });
      var r = n(96237),
        a = n(39324),
        i = n(71209),
        o = n(81292),
        s = {
          flags: {
            isUserInCanPayGroup: !1,
            failwhaleBypassEnabled: !1,
            sharingEnabled: !1,
            messageRedesign: !1,
          },
        },
        l = (0, o.ZP)()(function (e, t) {
          return (0, i._)((0, a._)({}, s), {
            updateFlagValue: function (n, o) {
              var s = t().flags;
              e({ flags: (0, i._)((0, a._)({}, s), (0, r._)({}, n, o)) });
            },
          });
        });
    },
    75527: function (e, t, n) {
      n.d(t, {
        tQ: function () {
          return I;
        },
        iN: function () {
          return F;
        },
        _L: function () {
          return a;
        },
        OX: function () {
          return k;
        },
        Zz: function () {
          return T;
        },
        aS: function () {
          return en;
        },
        ax: function () {
          return D;
        },
        r7: function () {
          return er;
        },
        hW: function () {
          return K;
        },
        XK: function () {
          return E;
        },
        je: function () {
          return G;
        },
        Uy: function () {
          return J;
        },
        GD: function () {
          return z;
        },
        JI: function () {
          return q;
        },
        U0: function () {
          return O;
        },
        oq: function () {
          return R;
        },
        Hk: function () {
          return H;
        },
        UL: function () {
          return L;
        },
        Kt: function () {
          return U;
        },
        cj: function () {
          return ea;
        },
        Ro: function () {
          return B;
        },
        GR: function () {
          return A;
        },
        qA: function () {
          return W;
        },
        XL: function () {
          return V;
        },
        u9: function () {
          return X;
        },
        nh: function () {
          return $;
        },
        lA: function () {
          return Q;
        },
        dz: function () {
          return Y;
        },
        Qi: function () {
          return et;
        },
        qN: function () {
          return S;
        },
      });
      var r,
        a,
        i = n(39324),
        o = n(71209),
        s = n(24396),
        l = n(61888),
        u = n(68555),
        d = n(70079),
        c = n(81292),
        f = n(58392),
        h = n(32787),
        g = n(70216);
      n(59710);
      var m = n(57311),
        p = n(75179);
      n(44675).env.INTERNAL_API_URL;
      var v = n(69403),
        x = n(97688),
        b = n(90076),
        y = n(63727),
        w = n(24274),
        j = n(32983),
        _ = n(56244),
        C = "NEW:",
        M = 0;
      function k() {
        return "".concat(C).concat(M++);
      }
      function T(e) {
        return e.startsWith(C);
      }
      ((r = a || (a = {})).NewChat = "NewChat"),
        (r.Server = "Server"),
        (r.User = "User"),
        (r.Generated = "Generated"),
        (r.Unknown = "Unknown");
      var N = {},
        S = (0, c.ZP)(
          (0, f.n)(function () {
            return {
              threads: {},
              clientNewThreadIdToServerIdMapping: {},
              threadRetainCounts: {},
            };
          })
        ),
        Z = S.getState,
        P = S.setState,
        F = {
          resolveThreadId: function (e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Z();
            return null !== (t = n.clientNewThreadIdToServerIdMapping[e]) &&
              void 0 !== t
              ? t
              : e;
          },
          getThreadCustomTitle: function (e) {
            var t,
              n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Z(),
              a = F.resolveThreadId(e, r);
            return null !==
              (n =
                null === (t = r.threads[a]) || void 0 === t
                  ? void 0
                  : t.title) && void 0 !== n
              ? n
              : void 0;
          },
          getThreadDataTitle: function (e) {
            var t,
              n,
              r,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Z(),
              i = F.resolveThreadId(e, a);
            return null !==
              (r =
                null === (t = a.threads[i]) || void 0 === t
                  ? void 0
                  : null === (n = t.initialThreadData) || void 0 === n
                  ? void 0
                  : n.title) && void 0 !== r
              ? r
              : void 0;
          },
          getThreadTitleSource: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Z(),
              n = F.resolveThreadId(e, t);
            return null != t.threads[n] ? t.threads[n].titleSource : a.Unknown;
          },
          getThreadCreateTime: function (e) {
            var t,
              n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Z(),
              a = F.resolveThreadId(e, r);
            return null === (t = r.threads[a]) || void 0 === t
              ? void 0
              : null === (n = t.initialThreadData) || void 0 === n
              ? void 0
              : n.createTime;
          },
        },
        I = {
          getOrInitThread: function (e) {
            var t = I.resolveThreadId(e);
            return null != Z().threads[t]
              ? Z().threads[t]
              : (I.resetThread(e), Z().threads[e]);
          },
          getServerThreadId: function (e) {
            return T(e) ? Z().clientNewThreadIdToServerIdMapping[e] : e;
          },
          setServerIdForNewThread: function (e, t) {
            void 0 === Z().clientNewThreadIdToServerIdMapping[e] &&
              P(function (n) {
                (n.threads[t] = n.threads[e]),
                  delete n.threads[e],
                  (n.clientNewThreadIdToServerIdMapping[e] = t);
              });
          },
          initThreadFromServerData: function (e, t) {
            var n,
              r,
              s,
              l,
              u,
              d,
              c,
              f,
              h,
              v,
              x,
              y =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              w =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : void 0,
              j = I.resolveThreadId(e);
            if (null != Z().threads[j] || y) {
              var _ =
                ((r =
                  null ===
                    (n = Object.values(t.mapping).find(function (e) {
                      return null === e.parent;
                    })) || void 0 === n
                    ? void 0
                    : n.id),
                (s = new Set()),
                (l = new Set()),
                (t.moderation_results || []).forEach(function (e) {
                  e.blocked
                    ? l.add(e.message_id)
                    : e.flagged && s.add(e.message_id);
                }),
                {
                  rootId: r,
                  mapping: Object.keys(t.mapping).reduce(function (e, n) {
                    var r,
                      a = t.mapping[n],
                      u = a.parent,
                      d = a.children,
                      c = (0, g._)(a, ["parent", "children"]),
                      f = t.mapping[n].message || m.Cv.createRootMessage();
                    return (
                      l.has(f.id) ? (r = p.sK) : s.has(f.id) && (r = p.Mf),
                      (e[n] = (0, i._)(
                        (0, o._)((0, i._)({}, c), {
                          message: f,
                          children: d || [],
                          parentId: u || "",
                          type: m.uV[f.author.role],
                        }),
                        r && { metadata: r }
                      )),
                      e
                    );
                  }, {}),
                  initialCurrentLeafId: t.current_node,
                  authorName: t.author_name,
                });
              if (
                (null === (u = Z().threads[j]) || void 0 === u
                  ? void 0
                  : u.isLoading) !== !1
              ) {
                var C =
                    null !== (d = _.mapping) && void 0 !== d
                      ? d
                      : m.Cv.createTree(),
                  M = {
                    thread: C,
                    initialCurrentLeafId:
                      null !==
                        (f =
                          null !== (c = _.initialCurrentLeafId) && void 0 !== c
                            ? c
                            : _.rootId) && void 0 !== f
                        ? f
                        : "root",
                    threadId: j,
                    title: null !== (h = t.title) && void 0 !== h ? h : null,
                    lastModelUsed: (function e(t, n) {
                      var r,
                        a,
                        i = t[n];
                      return (
                        null == i
                          ? void 0
                          : null === (r = i.message) || void 0 === r
                          ? void 0
                          : null === (a = r.metadata) || void 0 === a
                          ? void 0
                          : a.model_slug
                      )
                        ? i.message.metadata.model_slug
                        : (null == i ? void 0 : i.parentId)
                        ? e(t, i.parentId)
                        : null;
                    })(_.mapping, _.initialCurrentLeafId),
                    hasUserEditableContextFlag:
                      null !== (v = t.has_user_editable_context) &&
                      void 0 !== v &&
                      v,
                    pluginIds:
                      null !== (x = t.plugin_ids) && void 0 !== x ? x : [],
                    authorName: _.authorName,
                    model:
                      "model" in t && null != t.model
                        ? (0, b.H6)(t.model)
                        : void 0,
                    createTime:
                      "create_time" in t
                        ? new Date(1e3 * t.create_time)
                        : void 0,
                  },
                  k = new m.Cv(C),
                  T = M.initialCurrentLeafId;
                P(function (e) {
                  var t;
                  e.threads[j] = (0, o._)(
                    (0, i._)(
                      {},
                      null !== (t = e.threads[j]) && void 0 !== t ? t : {}
                    ),
                    {
                      initialThreadData: M,
                      title: M.title,
                      titleSource: a.Server,
                      tree: k,
                      currentLeafId: T,
                      isLoading: !1,
                      continuingFromSharedConversationId: w,
                    }
                  );
                }),
                  I.recomputeConversationTurns(
                    j,
                    Z().threads[j].currentLeafId,
                    []
                  );
              }
            }
          },
          resetThread: function (e) {
            var t = {
              thread: m.Cv.createTree(),
              initialCurrentLeafId: "root",
              threadId: null,
              title: null,
              lastModelUsed: null,
              pluginIds: [],
              authorName: void 0,
            };
            I.deleteThread(e),
              P(function (n) {
                n.threads[e] = {
                  initialThreadData: t,
                  tree: new m.Cv(t.thread),
                  title: t.title,
                  titleSource: a.NewChat,
                  currentLeafId: t.initialCurrentLeafId,
                  conversationTurns: [],
                  isLoading: !T(e),
                };
              });
          },
          updateInitialThreadDataForNewThread: function (e, t, n) {
            P(function (r) {
              (r.threads[e].initialThreadData.lastModelUsed = t),
                (r.threads[e].initialThreadData.pluginIds = n);
            });
          },
          getThreadCurrentLeafId: function (e) {
            var t,
              n,
              r = I.resolveThreadId(e);
            return null !==
              (n =
                null === (t = Z().threads[r]) || void 0 === t
                  ? void 0
                  : t.currentLeafId) && void 0 !== n
              ? n
              : "root";
          },
          setThreadCurrentLeafId: function (e, t) {
            var n,
              r,
              a = I.resolveThreadId(e);
            if (null != Z().threads[a]) {
              P(function (e) {
                e.threads[a].currentLeafId = t;
              });
              var i = Z();
              I.recomputeConversationTurns(
                a,
                t,
                null !==
                  (r =
                    null === (n = i.threads[a]) || void 0 === n
                      ? void 0
                      : n.conversationTurns) && void 0 !== r
                  ? r
                  : []
              );
            }
          },
          setTitle: function (e, t, n) {
            var r = I.resolveThreadId(e);
            null != Z().threads[r] &&
              P(function (e) {
                (e.threads[r].title = t), (e.threads[r].titleSource = n);
              });
          },
          getTitle: function (e) {
            var t;
            return null !== (t = F.getThreadCustomTitle(e)) && void 0 !== t
              ? t
              : F.getThreadDataTitle(e);
          },
          getTitleAndSource: function (e) {
            var t;
            return {
              title:
                null !== (t = F.getThreadCustomTitle(e)) && void 0 !== t
                  ? t
                  : F.getThreadDataTitle(e),
              titleSource: F.getThreadTitleSource(e),
            };
          },
          updateTree: function (e, t) {
            var n,
              r,
              a,
              i,
              o = I.resolveThreadId(e);
            if (!(null != Z().threads[o])) {
              console.warn("Thread does not exist, cannot update tree: ", o);
              return;
            }
            t(I.getTree(e));
            var s = Z(),
              l =
                null !==
                  (a =
                    null === (n = s.threads[o]) || void 0 === n
                      ? void 0
                      : n.currentLeafId) && void 0 !== a
                  ? a
                  : "root",
              u =
                null !==
                  (i =
                    null === (r = s.threads[o]) || void 0 === r
                      ? void 0
                      : r.conversationTurns) && void 0 !== i
                  ? i
                  : [];
            I.recomputeConversationTurns(o, l, u);
          },
          getTree: function (e) {
            var t,
              n,
              r = I.resolveThreadId(e);
            return null !==
              (n =
                null === (t = Z().threads[r]) || void 0 === t
                  ? void 0
                  : t.tree) && void 0 !== n
              ? n
              : new m.Cv();
          },
          resolveThreadId: function (e) {
            return F.resolveThreadId(e);
          },
          recomputeConversationTurns: function (e, t, n) {
            var r = I.resolveThreadId(e);
            P(function (e) {
              if (e.threads[r]) {
                var a = I.computeThreadConversationTurns(r, t, n);
                e.threads[r].conversationTurns = a;
              }
            });
          },
          computeThreadConversationTurns: function (e, t, n) {
            var r = I.resolveThreadId(e);
            return I.getTree(r)
              .getConversationTurns(t)
              .map(function (e, t) {
                var r = null == n ? void 0 : n[t];
                return (0, l.isEqual)(r, e) ? r : e;
              });
          },
          getThreadConversationTurns: function (e, t, n) {
            var r,
              a,
              i,
              o,
              s = I.resolveThreadId(e),
              l =
                null !==
                  (i =
                    null === (r = Z().threads[s]) || void 0 === r
                      ? void 0
                      : r.currentLeafId) && void 0 !== i
                  ? i
                  : "root";
            return null != t && t !== l
              ? I.computeThreadConversationTurns(s, t, null != n ? n : [])
              : null !==
                  (o =
                    null === (a = Z().threads[s]) || void 0 === a
                      ? void 0
                      : a.conversationTurns) && void 0 !== o
              ? o
              : [];
          },
          getThreadModel: function (e) {
            var t,
              n = I.resolveThreadId(e);
            return null === (t = Z().threads[n]) || void 0 === t
              ? void 0
              : t.initialThreadData.model;
          },
          removeContinuingFromSharedConversationId: function (e) {
            var t = I.resolveThreadId(e);
            P(function (e) {
              var n;
              (null === (n = e.threads[t]) || void 0 === n
                ? void 0
                : n.continuingFromSharedConversationId) != null &&
                delete e.threads[t].continuingFromSharedConversationId;
            });
          },
          deleteThread: function (e) {
            P(function (t) {
              delete t.threads[e],
                delete t.clientNewThreadIdToServerIdMapping[e];
            });
          },
          retainThread: function (e) {
            P(function (t) {
              var n;
              t.threadRetainCounts[e] =
                (null !== (n = t.threadRetainCounts[e]) && void 0 !== n
                  ? n
                  : 0) + 1;
            }),
              clearTimeout(N[e]);
          },
          releaseThread: function (e) {
            null != Z().threads[e] &&
              (P(function (t) {
                var n;
                t.threadRetainCounts[e] = Math.max(
                  (null !== (n = t.threadRetainCounts[e]) && void 0 !== n
                    ? n
                    : 0) - 1,
                  0
                );
              }),
              Z().threadRetainCounts[e] > 0 ||
                (clearTimeout(N[e]),
                (N[e] = setTimeout(function () {
                  null == Z().threads[e] ||
                    Z().threadRetainCounts[e] > 0 ||
                    I.deleteThread(e);
                }, 3e4))));
          },
        },
        D = function (e) {
          var t = (0, u.useRouter)(),
            n = (0, h.kP)().session,
            r = (0, d.useContext)(j.QL).historyDisabled,
            a = (0, d.useContext)(j.gB);
          (0, s.a)(
            ["conversation", e],
            function () {
              return w.ZP.getConversation(
                e,
                null == n ? void 0 : n.accessToken
              );
            },
            {
              enabled:
                !T(e) &&
                (null == n ? void 0 : n.accessToken) !== void 0 &&
                !r &&
                !a,
              onError: function () {
                t.replace("/"),
                  x.m.danger("Unable to load conversation ".concat(e));
              },
              onSuccess: function (t) {
                t && I.initThreadFromServerData(e, t);
              },
            }
          ),
            (0, d.useEffect)(
              function () {
                I.getOrInitThread(e);
              },
              [e, t]
            );
        },
        E = function (e) {
          return S(function (t) {
            return T(e) ? t.clientNewThreadIdToServerIdMapping[e] : e;
          });
        },
        L = function (e) {
          return S(function (t) {
            var n,
              r,
              a = I.resolveThreadId(e);
            return null !==
              (r =
                null === (n = t.threads[a]) || void 0 === n
                  ? void 0
                  : n.initialThreadData) && void 0 !== r
              ? r
              : Object.freeze({
                  thread: m.Cv.createTree(),
                  threadId: null,
                  initialCurrentLeafId: "root",
                  title: null,
                  lastModelUsed: null,
                });
          });
        },
        U = function (e) {
          return S(function (t) {
            var n,
              r,
              a = I.resolveThreadId(e);
            return (
              null !==
                (r =
                  null === (n = t.threads[a]) || void 0 === n
                    ? void 0
                    : n.isLoading) &&
              void 0 !== r &&
              r
            );
          });
        },
        A = function (e) {
          var t = S(function (t) {
            var n,
              r,
              a = I.resolveThreadId(e);
            return null === (n = t.threads[a]) || void 0 === n
              ? void 0
              : null === (r = n.initialThreadData) || void 0 === r
              ? void 0
              : r.pluginIds;
          });
          return (0, d.useMemo)(
            function () {
              return null != t ? t : [];
            },
            [t]
          );
        },
        R = function (e) {
          return S(function () {
            return I.getThreadCurrentLeafId(e);
          });
        },
        B = function (e) {
          return S(function () {
            return I.getThreadModel(e);
          });
        },
        O = function (e, t) {
          var n = (0, d.useRef)([]);
          return S(function () {
            var r,
              a = I.getThreadConversationTurns(e, t, n.current);
            return (
              (n.current = a),
              null !== (r = null == a ? void 0 : a.length) && void 0 !== r
                ? r
                : 0
            );
          });
        },
        q = function (e, t) {
          var n = (0, d.useRef)([]);
          return S(function () {
            var r = I.getThreadConversationTurns(e, t, n.current);
            return (n.current = r), r;
          });
        },
        z = function (e, t, n) {
          var r = (0, d.useRef)([]);
          return S(function () {
            var a = I.getThreadConversationTurns(e, n, r.current);
            return (r.current = a), a[t];
          });
        },
        H = function (e) {
          var t = R(e);
          return (0, d.useMemo)(
            function () {
              var n,
                r,
                a = I.getThreadConversationTurns(e, t, []),
                i =
                  null !== (n = null == a ? void 0 : a.length) && void 0 !== n
                    ? n
                    : 0,
                o =
                  null !== (r = null == a ? void 0 : a[i - 1]) && void 0 !== r
                    ? r
                    : null;
              return 0 === i ? t : m.Cv.getRequestIdFromConversationTurn(o);
            },
            [t, e]
          );
        },
        W = function (e) {
          return S(function () {
            return I.getTitle(e);
          });
        },
        V = function (e) {
          return S(function () {
            return I.getTitleAndSource(e);
          });
        },
        J = function (e) {
          return S(function () {
            var t,
              n = I.resolveThreadId(e);
            return null === (t = Z().threads[n]) || void 0 === t
              ? void 0
              : t.continuingFromSharedConversationId;
          });
        },
        G = function (e) {
          return S(function () {
            var t,
              n,
              r = I.resolveThreadId(e);
            return null === (t = Z().threads[r]) || void 0 === t
              ? void 0
              : null === (n = t.initialThreadData) || void 0 === n
              ? void 0
              : n.authorName;
          });
        },
        $ = function (e, t) {
          return S(function () {
            return I.getTree(e).getNode(t);
          });
        },
        Q = function (e, t) {
          return S(function () {
            var n, r;
            return (
              null !==
                (r =
                  null === (n = I.getTree(e)) || void 0 === n
                    ? void 0
                    : n.getHasErrorFromNode(t)) &&
              void 0 !== r &&
              r
            );
          });
        },
        Y = function (e, t) {
          return S(function () {
            var n, r;
            return (
              null !==
                (r =
                  null === (n = I.getTree(e)) || void 0 === n
                    ? void 0
                    : n.isMessageIncomplete(t)) &&
              void 0 !== r &&
              r
            );
          });
        },
        X = function (e, t) {
          return S(function () {
            var n = I.getTree(e);
            return null == n
              ? []
              : n
                  .getBranchFromLeaf(t)
                  .filter(function (e) {
                    return e.type !== v.Jq.Root;
                  })
                  .map(function (e) {
                    return e.message;
                  });
          });
        },
        K = function (e) {
          var t = en(e),
            n = ee(e),
            r = (0, y.Xu)(t),
            a = r.data,
            i = r.isLoading;
          return (
            !(t && "" === n.aboutModelMessage && "" === n.aboutUserMessage) &&
            t &&
            !i &&
            null != a &&
            (n.aboutUserMessage !== a.aboutUserMessage ||
              n.aboutModelMessage !== a.aboutModelMessage)
          );
        },
        ee = function (e) {
          var t = I.getTree(e).getUserContext(),
            n = { aboutUserMessage: "", aboutModelMessage: "" };
          if (null == t) return n;
          var r = t.message;
          if (
            (null === (a = r.metadata) || void 0 === a
              ? void 0
              : a.user_context_message_data) != null
          ) {
            var a,
              i,
              o,
              s = r.metadata.user_context_message_data,
              l = s.about_user_message,
              u = s.about_model_message;
            return {
              aboutUserMessage:
                null !== (i = null == l ? void 0 : l.trim()) && void 0 !== i
                  ? i
                  : "",
              aboutModelMessage:
                null !== (o = null == u ? void 0 : u.trim()) && void 0 !== o
                  ? o
                  : "",
            };
          }
          return n;
        },
        et = function (e) {
          var t = I.getTree(e).getUserContext();
          if (null == t) return null;
          var n = t.message;
          if (
            (null === (r = n.metadata) || void 0 === r
              ? void 0
              : r.user_context_message_data) != null
          ) {
            var r,
              a,
              i,
              o = n.metadata.user_context_message_data,
              s = o.about_user_message,
              l = o.about_model_message;
            return {
              aboutUserMessage:
                null !== (a = null == s ? void 0 : s.trim()) && void 0 !== a
                  ? a
                  : "",
              aboutModelMessage:
                null !== (i = null == l ? void 0 : l.trim()) && void 0 !== i
                  ? i
                  : "",
              fallback: null,
            };
          }
          return {
            aboutUserMessage: null,
            aboutModelMessage: null,
            fallback: (0, _.RR)(n),
          };
        },
        en = function (e) {
          var t = S(function (t) {
            var n,
              r,
              a = I.resolveThreadId(e);
            return null === (n = t.threads[a]) || void 0 === n
              ? void 0
              : null === (r = n.initialThreadData) || void 0 === r
              ? void 0
              : r.hasUserEditableContextFlag;
          });
          return null != et(e) || !!t;
        },
        er = function (e) {
          return S(function () {
            var t,
              n = I.resolveThreadId(e);
            return (
              (null === (t = Z().threads[n]) || void 0 === t
                ? void 0
                : t.continuingFromSharedConversationId) != null
            );
          });
        },
        ea = function (e) {
          var t,
            n,
            r,
            a = L(e),
            i =
              null !==
                (r =
                  null == a
                    ? void 0
                    : null === (t = a.model) || void 0 === t
                    ? void 0
                    : t.id) && void 0 !== r
                ? r
                : null == a
                ? void 0
                : a.lastModelUsed,
            o = (0, b.B9)(),
            s = void 0 != i ? o.get(i) : void 0;
          return (
            (null == s
              ? void 0
              : null === (n = s.capabilities) || void 0 === n
              ? void 0
              : n.multimodal) !== void 0
          );
        };
    },
    32689: function (e, t, n) {
      n.d(t, {
        B: function () {
          return a;
        },
        bM: function () {
          return f;
        },
        tN: function () {
          return c;
        },
        vm: function () {
          return h;
        },
      });
      var r,
        a,
        i,
        o = n(39324),
        s = n(81292),
        l = n(85023);
      ((r = a || (a = {})).AccountPortal = "account-portal"),
        (r.UserContext = "user-context"),
        (r.DownloadMessages = "download-messages"),
        (r.InviteUsersToWorkspace = "invite-users-to-workspace"),
        (r.TempBrowseToast = "temp-browse-toast");
      var u = "UiState.isNavigationCollapsed.1",
        d = {
          isThreadHeaderVisible: !0,
          isDesktopNavCollapsed:
            null !== (i = l.m.getItem(u)) && void 0 !== i && i,
          sharingModalThreadId: void 0,
          isFilesModalOpen: !1,
          activeSidebar: !1,
          activeModals: new Set(),
        },
        c = (0, s.ZP)()(function () {
          return (0, o._)({}, d);
        }),
        f = {
          isDesktopNavCollapsed: function (e) {
            return e.isDesktopNavCollapsed;
          },
          isThreadHeaderVisible: function (e) {
            return e.isThreadHeaderVisible;
          },
        },
        h = {
          toggleDesktopNavCollapsed: function () {
            c.setState(function (e) {
              var t = !e.isDesktopNavCollapsed;
              return l.m.setItem(u, t), { isDesktopNavCollapsed: t };
            });
          },
          hideThreadHeader: function () {
            c.setState({ isThreadHeaderVisible: !1 });
          },
          showThreadHeader: function () {
            c.setState({ isThreadHeaderVisible: !0 });
          },
          openSharingModal: function (e) {
            c.setState({ sharingModalThreadId: e });
          },
          closeSharingModal: function () {
            c.setState({ sharingModalThreadId: void 0 });
          },
          openFilesModal: function () {
            c.setState({ isFilesModalOpen: !0 });
          },
          closeFilesModal: function () {
            c.setState({ isFilesModalOpen: !1 });
          },
          setActiveSidebar: function (e) {
            c.setState({ activeSidebar: e });
          },
          toggleActiveSidebar: function (e) {
            c.setState(function (t) {
              return { activeSidebar: t.activeSidebar !== e && e };
            });
          },
          openModal: function (e) {
            c.setState(function (t) {
              var n = new Set(t.activeModals);
              return n.add(e), { activeModals: n };
            });
          },
          closeModal: function (e) {
            c.setState(function (t) {
              var n = new Set(t.activeModals);
              return n.delete(e), { activeModals: n };
            });
          },
        };
    },
    21437: function (e, t, n) {
      n.d(t, {
        DN: function () {
          return M;
        },
        Fl: function () {
          return k;
        },
        N2: function () {
          return C;
        },
        tr: function () {
          return a;
        },
      });
      var r,
        a,
        i,
        o = n(96237),
        s = n(39324),
        l = n(71209),
        u = n(22830),
        d = n(35448),
        c = n(24396),
        f = n(70079),
        h = n(81292),
        g = n(32787),
        m = n(85023),
        p = n(24274),
        v = n(32689),
        x = n(59110),
        b = {
          isBetaFeaturesUiEnabled: !1,
          isBrowsingAvailable: !1,
          isBrowsingEnabled: !1,
          isPluginsAvailable: !1,
          isPluginsEnabled: !1,
          isCodeInterpreterAvailable: !1,
          isCodeInterpreterEnabled: !1,
        };
      ((r = a || (a = {})).BROWSING = "browsing"),
        (r.CODE_INTERPRETER = "code_interpreter"),
        (r.PLUGINS = "plugins");
      var y =
          ((i = {}),
          (0, o._)(i, a.BROWSING, "isBrowsingEnabled"),
          (0, o._)(i, a.CODE_INTERPRETER, "isCodeInterpreterEnabled"),
          (0, o._)(i, a.PLUGINS, "isPluginsEnabled"),
          i),
        w = (0, h.ZP)()(function () {
          return b;
        }),
        j = {
          updateUserSettings: function (e) {
            w.setState(function (t) {
              return (0, s._)({}, t, e);
            });
          },
          updateUserSettingsFromFeatures: function (e) {
            w.setState(function (t) {
              var n = j.getUserSettingsFromFeatures(e, t);
              return (0, s._)({}, t, n);
            });
          },
          getUserSettingsFromFeatures: function (e, t) {
            return Object.entries(e).reduce(function (e, n) {
              var r = (0, u._)(n, 2),
                a = r[0],
                i = r[1],
                d = y[a],
                c = !1;
              return ((("isBrowsingEnabled" === d && t.isBrowsingAvailable) ||
                ("isCodeInterpreterEnabled" === d &&
                  t.isCodeInterpreterAvailable) ||
                ("isPluginsEnabled" === d && t.isPluginsAvailable)) &&
                (c = i),
              d)
                ? (0, l._)((0, s._)({}, e), (0, o._)({}, d, c))
                : e;
            }, {});
          },
        },
        _ = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return ["userSettings", e];
        };
      function C() {
        var e = (0, g.kP)().session,
          t = (0, d.NL)();
        return function () {
          return t.invalidateQueries({
            queryKey: _(null == e ? void 0 : e.accessToken),
          });
        };
      }
      var M = "oai/apps/hasSeenBrowsingDisabledJuly2023";
      function k() {
        var e = (0, g.kP)().session,
          t = (0, x.hz)(),
          n = t.has("beta_features"),
          r = (0, x.ec)(x.F_.isBusinessWorkspace);
        return (
          (0, c.a)(
            _(null == e ? void 0 : e.accessToken),
            function () {
              return p.ZP.getUserSettingBetaFeatures(e.accessToken).then(
                function (e) {
                  null != e && j.updateUserSettingsFromFeatures(e);
                  var t = !!m.m.getItem(M);
                  return (
                    e.browsing && !t && v.vm.openModal(v.B.TempBrowseToast), e
                  );
                }
              );
            },
            { enabled: n && (null == e ? void 0 : e.accessToken) != null }
          ),
          (0, f.useEffect)(
            function () {
              j.updateUserSettings({
                isBetaFeaturesUiEnabled: n,
                isBrowsingAvailable: !r && !1,
                isCodeInterpreterAvailable:
                  !r &&
                  (t.has("code_interpreter_available") || t.has("tools2")),
                isPluginsAvailable:
                  !r && (t.has("plugins_available") || t.has("tools3")),
              });
            },
            [t, n, r]
          ),
          w(function (e) {
            return e;
          })
        );
      }
    },
    36716: function (e, t, n) {
      n.d(t, {
        Op: function () {
          return g;
        },
        Qd: function () {
          return c;
        },
        T$: function () {
          return f;
        },
        s8: function () {
          return h;
        },
      });
      var r = n(35250),
        a = n(1454),
        i = n(180),
        o = n(25094),
        s = n(38317),
        l = n(57924),
        u = "&#8203;",
        d = "oaicite:";
      function c(e, t) {
        if (!t) return e;
        for (var n = [], r = 1, a = {}, i = 0; i < t.length; i++) {
          var o = t[i],
            s = o.metadata,
            l = o.invalid_reason;
          if (s) {
            var c = s.url;
            null == a[c] && ((a[c] = r), r++), n.push(a[c]);
          } else null != l && (n.push(r), r++);
        }
        for (var f = t.length - 1; f >= 0; f--) {
          var h = t[f],
            g = h.start_ix,
            m = h.end_ix,
            p = h.metadata,
            v = h.invalid_reason,
            x = { number: n[f] };
          p ? (x.metadata = p) : null != v && (x.invalid_reason = v);
          var b = !1;
          if (f > 0) {
            var y,
              w,
              j = t[f - 1];
            (null === (y = j.metadata) || void 0 === y ? void 0 : y.url) ===
              (null === (w = h.metadata) || void 0 === w ? void 0 : w.url) &&
              0 === e.slice(j.end_ix, h.start_ix).trim().length &&
              ((e = e.slice(0, j.end_ix) + e.slice(h.end_ix)), (b = !0));
          }
          b ||
            (e =
              e.slice(0, g) +
              ""
                .concat(u, "``")
                .concat(d)
                .concat(JSON.stringify(x), "``")
                .concat(u) +
              e.slice(m));
        }
        return e;
      }
      function f(e) {
        if (!e.startsWith(d)) return null;
        try {
          return JSON.parse(e.slice(d.length));
        } catch (e) {
          return { number: -1 };
        }
      }
      function h(e) {
        var t,
          n,
          a,
          i = e.displayInfo,
          s = (0, o.O6)(),
          u = m(i.metadata);
        return (0, r.jsx)(l.u, {
          label: (0, r.jsx)(g, {
            citationMetadata: i.metadata,
            invalidReason: i.invalid_reason,
          }),
          side: "top",
          sideOffset: 4,
          withArrow: !1,
          interactive: !0,
          wide: !0,
          children: u
            ? (0, r.jsx)("button", {
                onClick: function () {
                  var e, t;
                  return s(
                    null !==
                      (n =
                        null === (e = i.metadata) || void 0 === e
                          ? void 0
                          : e.url) && void 0 !== n
                      ? n
                      : "",
                    null !==
                      (a =
                        null === (t = i.metadata) || void 0 === t
                          ? void 0
                          : t.title) && void 0 !== a
                      ? a
                      : ""
                  );
                },
                className: "px-0.5 text-green-600",
                children: (0, r.jsx)("sup", { children: i.number }),
              })
            : (0, r.jsx)("a", {
                href:
                  null === (t = i.metadata) || void 0 === t ? void 0 : t.url,
                target: "_blank",
                rel: "noreferrer",
                className: "px-0.5 text-green-600 !no-underline",
                children: (0, r.jsx)("sup", { children: i.number }),
              }),
        });
      }
      function g(e) {
        var t = e.citationMetadata,
          n = e.invalidReason,
          l = e.onClick,
          u = (0, o.O6)(),
          d = m(t),
          c = t
            ? (0, r.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, r.jsx)("div", {
                    className: "flex shrink-0 items-center justify-center",
                    children: d
                      ? (0, r.jsx)(a.NOg, {})
                      : (0, r.jsx)(i.Z, { url: t.url, className: "my-0" }),
                  }),
                  (0, r.jsx)("div", {
                    className: "max-w-xs truncate",
                    children: t.title,
                  }),
                  (0, r.jsx)("div", {
                    className: "shrink-0",
                    children: (0, r.jsx)(s.ZP, { icon: a.AlO, size: "xsmall" }),
                  }),
                ],
              })
            : (0, r.jsx)("div", {
                className: "text-red-500",
                children: null != n ? n : "Invalid citation",
              });
        return d
          ? (0, r.jsx)("button", {
              onClick: function () {
                var e, n;
                u(
                  null !== (e = null == t ? void 0 : t.url) && void 0 !== e
                    ? e
                    : "",
                  null !== (n = null == t ? void 0 : t.title) && void 0 !== n
                    ? n
                    : ""
                ),
                  null == l || l();
              },
              className: "text-xs",
              children: c,
            })
          : (0, r.jsx)("a", {
              href: null == t ? void 0 : t.url,
              target: "_blank",
              rel: "noreferrer",
              className: "text-xs !no-underline",
              onClick: l,
              children: c,
            });
      }
      function m(e) {
        var t;
        return !(function (e) {
          try {
            new URL(e);
          } catch (e) {
            return !1;
          }
          return !0;
        })(null !== (t = null == e ? void 0 : e.url) && void 0 !== t ? t : "");
      }
    },
    77442: function (e, t, n) {
      n.d(t, {
        _G: function () {
          return a;
        },
        aj: function () {
          return g;
        },
        dQ: function () {
          return m;
        },
        oc: function () {
          return c;
        },
        w$: function () {
          return f;
        },
        x_: function () {
          return h;
        },
      });
      var r,
        a,
        i,
        o = n(96237),
        s = n(22830),
        l = n(70079);
      ((r = a || (a = {})).Mobile = "mobile"),
        (r.Small = "small"),
        (r.Medium = "medium"),
        (r.Large = "large"),
        (r.XLarge = "xlarge");
      var u =
        ((i = {}),
        (0, o._)(i, a.Small, 640),
        (0, o._)(i, a.Medium, 768),
        (0, o._)(i, a.Large, 1024),
        (0, o._)(i, a.XLarge, 1280),
        i);
      function d(e) {
        var t = function () {
            i(n(e));
          },
          n = function (e) {
            return window.matchMedia(e).matches;
          },
          r = (0, s._)((0, l.useState)(n(e)), 2),
          a = r[0],
          i = r[1];
        return (
          (0, l.useEffect)(
            function () {
              var n = window.matchMedia(e);
              return (
                t(),
                n.addListener
                  ? n.addListener(t)
                  : n.addEventListener("change", t),
                function () {
                  n.removeListener
                    ? n.removeListener(t)
                    : n.removeEventListener("change", t);
                }
              );
            },
            [e]
          ),
          a
        );
      }
      function c() {
        return d("(min-width: ".concat(u[a.Small], "px)"));
      }
      function f() {
        return d("(min-width: ".concat(u[a.Medium], "px)"));
      }
      function h() {
        return d("(min-width: ".concat(u[a.Large], "px)"));
      }
      function g() {
        return d("(min-width: ".concat(u[a.XLarge], "px)"));
      }
      function m() {
        var e = c(),
          t = f(),
          n = h();
        return g()
          ? a.XLarge
          : n
          ? a.Large
          : t
          ? a.Medium
          : e
          ? a.Small
          : a.Mobile;
      }
    },
    56244: function (e, t, n) {
      n.d(t, {
        Cs: function () {
          return a;
        },
        Ej: function () {
          return m;
        },
        JD: function () {
          return c;
        },
        RR: function () {
          return g;
        },
        Rc: function () {
          return h;
        },
        fj: function () {
          return p;
        },
        lD: function () {
          return d;
        },
        oH: function () {
          return u;
        },
        qi: function () {
          return l;
        },
        qs: function () {
          return f;
        },
        rH: function () {
          return s;
        },
      });
      var r,
        a,
        i = n(22830),
        o = n(69403);
      function s(e) {
        if (e.author.role === o.uU.Assistant) {
          if ("browser" === e.recipient || "browser_one_box" === e.recipient)
            return a.Browsing;
          if ("myfiles_browser" === e.recipient) return a.RetrievalBrowsing;
          if ("python" === e.recipient) return a.Code;
          if (null != p(e.recipient)) return a.Plugin;
          else if ("browsing_team" === e.recipient) return a.Text;
        } else if (e.author.role === o.uU.Tool) {
          if (
            "browser" === e.author.name ||
            "browser_one_box" === e.author.name ||
            "browsing_team" === e.author.name
          )
            return a.BrowseTool;
          if ("myfiles_browser" === e.author.name)
            return a.RetrievalBrowsingTool;
          if (e.content.content_type === o.PX.ExecutionOutput)
            return a.CodeExecutionOutput;
          if (null != p(e.author.name) || "plugin_service" === e.author.name)
            return a.PluginTool;
        }
        return e.content.content_type === o.PX.Text ||
          e.content.content_type === o.PX.MultimodalText
          ? a.Text
          : a.Unknown;
      }
      function l(e) {
        var t;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : t.finish_details) != null
        );
      }
      function u(e) {
        var t, n;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : null === (n = t.finish_details) || void 0 === n
            ? void 0
            : n.type) === "stop"
        );
      }
      function d(e) {
        var t, n;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : null === (n = t.finish_details) || void 0 === n
            ? void 0
            : n.type) === "max_tokens"
        );
      }
      function c(e) {
        var t, n;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : null === (n = t.finish_details) || void 0 === n
            ? void 0
            : n.type) === "interrupted"
        );
      }
      function f(e) {
        var t;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : t.message_type) === "continue"
        );
      }
      function h(e) {
        var t;
        return null === (t = e.metadata) || void 0 === t
          ? void 0
          : t.model_slug;
      }
      function g(e) {
        switch (e.content.content_type) {
          case "text":
            return e.content.parts.join("");
          case "multimodal_text":
            return e.content.parts
              .map(function (e) {
                return "string" == typeof e
                  ? e
                  : '[media pointer="'.concat(e.asset_pointer, '"]');
              })
              .join("\n");
          case "tether_browsing_display":
            return e.content.result;
          case "tether_quote":
          case "tether_browsing_code":
          case "code":
          case "execution_output":
          case "system_error":
            return e.content.text;
          case "system_message":
            var t = e.content.text,
              n = !0,
              r = !1,
              a = void 0;
            try {
              for (
                var i,
                  o = Object.values(e.content.tools_section)[Symbol.iterator]();
                !(n = (i = o.next()).done);
                n = !0
              ) {
                var s = i.value;
                t += "\n\n".concat(s);
              }
            } catch (e) {
              (r = !0), (a = e);
            } finally {
              try {
                n || null == o.return || o.return();
              } finally {
                if (r) throw a;
              }
            }
            return t;
          default:
            return "";
        }
      }
      function m(e) {
        var t;
        return null !== (t = e.recipient) && void 0 !== t ? t : "";
      }
      function p(e) {
        if (null == e || !e.includes(".")) return null;
        var t = (0, i._)(e.split("."), 2);
        return { pluginNamespace: t[0], pluginFunctionName: t[1] };
      }
      ((r = a || (a = {}))[(r.Text = 0)] = "Text"),
        (r[(r.Browsing = 1)] = "Browsing"),
        (r[(r.BrowseTool = 2)] = "BrowseTool"),
        (r[(r.Code = 3)] = "Code"),
        (r[(r.CodeExecutionOutput = 4)] = "CodeExecutionOutput"),
        (r[(r.MultimodalText = 5)] = "MultimodalText"),
        (r[(r.Plugin = 6)] = "Plugin"),
        (r[(r.PluginTool = 7)] = "PluginTool"),
        (r[(r.RetrievalBrowsing = 8)] = "RetrievalBrowsing"),
        (r[(r.RetrievalBrowsingTool = 9)] = "RetrievalBrowsingTool"),
        (r[(r.Unknown = 10)] = "Unknown");
    },
    57311: function (e, t, n) {
      n.d(t, {
        Cv: function () {
          return T;
        },
        Vh: function () {
          return w;
        },
        uV: function () {
          return _;
        },
      });
      var r,
        a,
        i = n(51217),
        o = n(53596),
        s = n(66816),
        l = n(49406),
        u = n(31819),
        d = n(96237),
        c = n(39324),
        f = n(70216),
        h = n(81949),
        g = n(74050),
        m = n(84251),
        p = n.n(m),
        v = n(8844),
        x = n(75179),
        b = n(69403),
        y = n(56244),
        w = "request-",
        j =
          ((r = {}),
          (0, d._)(r, b.Jq.Root, b.uU.Unknown),
          (0, d._)(r, b.Jq.Prompt, b.uU.User),
          (0, d._)(r, b.Jq.Completion, b.uU.Assistant),
          (0, d._)(r, b.Jq.System, b.uU.System),
          r),
        _ =
          ((a = {}),
          (0, d._)(a, b.uU.Unknown, b.Jq.Root),
          (0, d._)(a, b.uU.System, b.Jq.System),
          (0, d._)(a, b.uU.User, b.Jq.Prompt),
          (0, d._)(a, b.uU.Assistant, b.Jq.Completion),
          (0, d._)(a, b.uU.Critic, b.Jq.Completion),
          (0, d._)(a, b.uU.Tool, b.Jq.Completion),
          a);
      function C(e) {
        var t = (0, v.Z)();
        return "".concat(e).concat(t.substring(e.length));
      }
      var M = new WeakMap(),
        k = new WeakMap(),
        T = (function () {
          function e(t) {
            (0, i._)(this, e),
              (0, s._)(this, M, { writable: !0, value: void 0 }),
              (0, s._)(this, k, { writable: !0, value: void 0 }),
              (0, l._)(this, M, null != t ? t : e.createTree());
            var n,
              r = Object.values((0, o._)(this, M)).find(function (e) {
                return e.type === b.Jq.Root;
              });
            (0, l._)(
              this,
              k,
              null !== (n = null == r ? void 0 : r.id) && void 0 !== n
                ? n
                : "root"
            );
          }
          var t = e.prototype;
          return (
            (t.getNode = function (e) {
              return (0, o._)(this, M)[e];
            }),
            (t.getMessage = function (e) {
              return (0, o._)(this, M)[e].message;
            }),
            (t.getMessageId = function (e) {
              try {
                return (0, o._)(this, M)[e].message.id;
              } catch (t) {
                throw (
                  (console.error(
                    "Tree: Unable to getMessageId for node ".concat(e)
                  ),
                  t)
                );
              }
            }),
            (t.getMetadata = function (e) {
              return (0, o._)(this, M)[e].metadata;
            }),
            (t.getLeafFromNode = function (e) {
              for (var t = (0, o._)(this, M)[e]; ; ) {
                if (0 === t.children.length) return t;
                t = (0, o._)(this, M)[t.children.values().next().value];
              }
            }),
            (t.getParent = function (e) {
              var t = (0, o._)(this, M)[e].parentId;
              return (0, o._)(this, M)[t];
            }),
            (t.getParentId = function (e) {
              var t;
              return (
                (null === (t = this.getParent(e)) || void 0 === t
                  ? void 0
                  : t.id) || "root"
              );
            }),
            (t.getNodeByMessageId = function (e) {
              var t = !0,
                n = !1,
                r = void 0;
              try {
                for (
                  var a,
                    i = Object.values((0, o._)(this, M))[Symbol.iterator]();
                  !(t = (a = i.next()).done);
                  t = !0
                ) {
                  var s = a.value;
                  if (s.message.id === e) return s;
                }
              } catch (e) {
                (n = !0), (r = e);
              } finally {
                try {
                  t || null == i.return || i.return();
                } finally {
                  if (n) throw r;
                }
              }
            }),
            (t.getBranchFromLeaf = function (e) {
              for (
                var t,
                  n = [],
                  r =
                    null !== (t = (0, o._)(this, M)[e]) && void 0 !== t
                      ? t
                      : this.getNodeByMessageId(e);
                null != r;

              ) {
                if (n.includes(r)) {
                  console.error("Infinite loop detected in getBranchFromLeaf.");
                  break;
                }
                if ((n.push(r), "root" === r.type)) break;
                r = (0, o._)(this, M)[r.parentId];
              }
              return n.reverse();
            }),
            (t.getChildrenFromNode = function (e) {
              var t = this,
                n = (0, o._)(this, M)[e];
              return null == n
                ? []
                : Array.from(n.children).map(function (e) {
                    return (0, o._)(t, M)[e];
                  });
            }),
            (t.getFirstPrompt = function () {
              for (var e, t, n = this.getNode((0, o._)(this, k)); ; ) {
                if (null == n) return;
                if (
                  n.type === b.Jq.Prompt ||
                  (n.type === b.Jq.System &&
                    (null === (e = n.message.metadata) || void 0 === e
                      ? void 0
                      : e.upload_filename))
                )
                  return n;
                n = (0, o._)(this, M)[
                  null === (t = n.children) || void 0 === t ? void 0 : t[0]
                ];
              }
            }),
            (t.getUserContext = function () {
              for (var e, t, n = this.getNode((0, o._)(this, k)); ; ) {
                if (null == n) return;
                if (
                  (n.type === b.Jq.System ||
                    n.message.author.role === b.uU.System) &&
                  (null === (e = n.message.metadata) || void 0 === e
                    ? void 0
                    : e.is_user_system_message)
                )
                  return n;
                if (n.type === b.Jq.Prompt) return null;
                n = (0, o._)(this, M)[
                  null === (t = n.children) || void 0 === t ? void 0 : t[0]
                ];
              }
            }),
            (t.isMessageIncomplete = function (e) {
              var t = this.getMessage(e);
              return (0, y.lD)(t);
            }),
            (t.addNodeToEnd = function (e, t) {
              if (null == (0, o._)(this, M)[e]) return (0, d._)({}, t.id, t);
              (0, l._)(
                this,
                M,
                p()(
                  (0, o._)(this, M),
                  (0, d._)({ $merge: (0, d._)({}, t.id, t) }, e, {
                    children: {
                      $apply: function (e) {
                        return Array.from(new Set((0, h._)(e).concat([t.id])));
                      },
                    },
                  })
                )
              );
            }),
            (t.appendSystemMessageToRoot = function (e) {
              var t,
                n,
                r =
                  null === (t = this.getFirstPrompt()) || void 0 === t
                    ? void 0
                    : t.parentId;
              if (null != r) {
                var a = this.getNode(r),
                  i = this.getNode(a.children[0]),
                  s = {
                    id: e.id,
                    children: a.children,
                    parentId: a.id,
                    message: e,
                  };
                (0, l._)(
                  this,
                  M,
                  p()(
                    (0, o._)(this, M),
                    ((n = { $merge: (0, d._)({}, s.id, s) }),
                    (0, d._)(n, a.id, { children: { $set: [s.id] } }),
                    (0, d._)(n, i.id, { parentId: { $set: s.id } }),
                    n)
                  )
                );
              }
            }),
            (t.addNode = function (t, n, r, a, i, o) {
              var s =
                  "string" == typeof n
                    ? e.getTextAsMessage(n, a, o)
                    : "content_type" in n
                    ? e.getContentAsMessage(n, a, o)
                    : n,
                l = (0, c._)(
                  { id: t, children: [], parentId: r, type: a, message: s },
                  i ? { nodeMetadata: i } : {}
                );
              this.addNodeToEnd(r, l);
            }),
            (t.updateNode = function (e, t) {
              (0, l._)(this, M, p()((0, o._)(this, M), (0, d._)({}, e, t)));
            }),
            (t.updateNodeMessage = function (e, t) {
              (0, l._)(
                this,
                M,
                p()(
                  (0, o._)(this, M),
                  (0, d._)({}, e, { message: { $set: t } })
                )
              );
            }),
            (t.updateNodeMessageMetadata = function (e, t) {
              (0, l._)(
                this,
                M,
                p()(
                  (0, o._)(this, M),
                  (0, d._)({}, e, { message: { metadata: { $merge: t } } })
                )
              );
            }),
            (t.updateNodeText = function (e, t) {
              (0, l._)(
                this,
                M,
                p()(
                  (0, o._)(this, M),
                  (0, d._)({}, e, {
                    message: { content: { parts: { $set: [t] } } },
                  })
                )
              );
            }),
            (t.deleteNode = function (e) {
              var t = (0, o._)(this, M),
                n = t[e],
                r = (0, f._)(t, [e].map(g._)),
                a = n.parentId;
              (0, l._)(
                this,
                M,
                p()(
                  r,
                  (0, d._)({}, a, {
                    children: {
                      $apply: function (t) {
                        return t.filter(function (t) {
                          return t !== e;
                        });
                      },
                    },
                  })
                )
              );
            }),
            (t.getTextFromNode = function (e) {
              return (0, y.RR)(this.getMessage(e));
            }),
            (t.getHasErrorFromNode = function (e) {
              var t,
                n,
                r = this.getNode(e);
              return (
                (null == r
                  ? void 0
                  : null === (t = r.metadata) || void 0 === t
                  ? void 0
                  : t.errType) === "danger" ||
                (null == r
                  ? void 0
                  : null === (n = r.metadata) || void 0 === n
                  ? void 0
                  : n.errType) === "warning"
              );
            }),
            (t.getIsBlockedFromNode = function (e) {
              var t,
                n,
                r = this.getNode(e);
              return (
                (null == r
                  ? void 0
                  : null === (t = r.metadata) || void 0 === t
                  ? void 0
                  : t.errCode) === x.Dd &&
                (null == r
                  ? void 0
                  : null === (n = r.metadata) || void 0 === n
                  ? void 0
                  : n.errType) === "danger"
              );
            }),
            (t.getTextFromThread = function (e) {
              return this.getBranchFromLeaf(e)
                .filter(function (e) {
                  return e.type !== b.Jq.Root && e.type !== b.Jq.System;
                })
                .map(function (e) {
                  return (0, y.RR)(e.message);
                })
                .join("\n\n");
            }),
            (t.shouldFilterNode = function (e) {
              var t = e.message,
                n = t.content.content_type,
                r = e.message.author.role === b.uU.System,
                a = e.message.author.role === b.uU.Tool,
                i = void 0 !== t.recipient && "all" !== t.recipient;
              return (
                r ||
                i ||
                (a &&
                  !(
                    "code" === n ||
                    "execution_output" === n ||
                    "system_error" === n ||
                    "tether_browsing_display" === n ||
                    "tether_quote" === n
                  ))
              );
            }),
            (t.getTextFromTurnsById = function (e) {
              var t = this;
              return e
                .map(function (e) {
                  return t.getNode(e);
                })
                .filter(function (e) {
                  return !t.shouldFilterNode(e);
                })
                .map(function (e) {
                  return t.getTextFromNode(e.id);
                })
                .join("\n\n");
            }),
            (t.getTextFromLastNTurns = function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return this.getConversationTurns(e, this.shouldFilterNode)
                .slice(-t)
                .map(function (e) {
                  var t = e.messages
                    .map(function (e) {
                      return (0, y.RR)(e.message);
                    })
                    .filter(function (e) {
                      return "" !== e;
                    })
                    .join("\n");
                  return n ? "[".concat(e.role, "]\n").concat(t) : t;
                })
                .join("\n");
            }),
            (t.getConversationTurns = function (e, t) {
              var n = this,
                r = [];
              return (
                this.getBranchFromLeaf(e).forEach(function (e) {
                  var a = e.id,
                    i = e.parentId,
                    s = e.message,
                    l = e.metadata;
                  if (null == t || !t(e)) {
                    var u = r[r.length - 1];
                    (null == u ? void 0 : u.role) === s.author.role ||
                    s.author.role === b.uU.Tool
                      ? r[r.length - 1].messages.push(
                          (0, c._)({ nodeId: a, parentId: i, message: s }, l)
                        )
                      : r.push({
                          role: s.author.role,
                          messages: [
                            (0, c._)({ nodeId: a, parentId: i, message: s }, l),
                          ],
                          variantIds: i
                            ? Array.from((0, o._)(n, M)[i].children)
                            : [a],
                        });
                  }
                }),
                r
              );
            }),
            (t.getLastValidNode = function (e) {
              for (
                var t, n = this.getNode(e);
                null != n &&
                null != n &&
                (null === (t = n.metadata) || void 0 === t ? void 0 : t.err) !=
                  null;

              )
                n = this.getNode(n.parentId);
              return n;
            }),
            (t.getParentPromptNode = function (e) {
              for (
                var t, n = this.getNode(e);
                null != n &&
                null != n &&
                (null === (t = n.message) || void 0 === t
                  ? void 0
                  : t.author.role) !== b.uU.User;

              )
                n = this.getNode(n.parentId);
              return n;
            }),
            (t.messageIdToNodeId = function (e) {
              if (null != (0, o._)(this, M)[e]) return e;
              var t = !0,
                n = !1,
                r = void 0;
              try {
                for (
                  var a,
                    i = Object.values((0, o._)(this, M))[Symbol.iterator]();
                  !(t = (a = i.next()).done);
                  t = !0
                ) {
                  var s,
                    l = a.value;
                  if (
                    (null === (s = l.message) || void 0 === s
                      ? void 0
                      : s.id) === e
                  )
                    return l.id;
                }
              } catch (e) {
                (n = !0), (r = e);
              } finally {
                try {
                  t || null == i.return || i.return();
                } finally {
                  if (n) throw r;
                }
              }
              return e;
            }),
            (t.unstable_getMapping = function () {
              return (0, o._)(this, M);
            }),
            (e.createTree = function () {
              return {
                root: {
                  id: "root",
                  children: [],
                  parentId: "",
                  type: b.Jq.Root,
                  message: e.createRootMessage(),
                },
              };
            }),
            (e.createRootMessage = function () {
              return {
                id: C("aaa1"),
                author: { role: j[b.Jq.Root] },
                content: { content_type: b.PX.Text, parts: [] },
              };
            }),
            (e.getRequestIdFromConversationTurn = function (e) {
              for (var t = e.messages.length - 1; t >= 0; t--) {
                var n = e.messages[t];
                if (n.nodeId.startsWith(w)) return n.nodeId;
              }
              return e.messages[0].nodeId;
            }),
            (e.getTextAsMessage = function (e, t, n) {
              var r = { content_type: b.PX.Text, parts: [e] };
              return this.getContentAsMessage(r, t, n);
            }),
            (e.getContentAsMessage = function (e, t, n) {
              return {
                id: C("aaa2"),
                author: { role: j[t] },
                content: e,
                metadata: n,
              };
            }),
            (0, u._)(e, [
              {
                key: "isFirstCompletion",
                get: function () {
                  var e = this.getFirstPrompt();
                  if (e) {
                    var t = (0, o._)(this, M)[e.children[0]];
                    if ((null == t ? void 0 : t.children.length) === 0)
                      return !0;
                  }
                  return !1;
                },
              },
            ]),
            e
          );
        })();
    },
    86526: function (e, t, n) {
      var r = n(70079);
      t.Z = function () {
        var e = (0, r.useRef)(!1);
        return (
          (0, r.useEffect)(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          (0, r.useCallback)(function () {
            return e.current;
          }, [])
        );
      };
    },
    86433: function (e, t, n) {
      n.d(t, {
        S: function () {
          return f;
        },
      });
      var r = n(21722),
        a = n(39324),
        i = n(22830),
        o = n(39889),
        s = n(14412),
        l = n(68555),
        u = n(70079),
        d = n(32787),
        c = n(24274);
      function f() {
        var e,
          t,
          n = (0, l.useRouter)(),
          f = (0, d.kP)().session,
          h =
            (null == f
              ? void 0
              : null === (e = f.user) || void 0 === e
              ? void 0
              : e.idp) === "auth0",
          g = !!(null == f
            ? void 0
            : null === (t = f.user) || void 0 === t
            ? void 0
            : t.mfa),
          m = (0, i._)((0, u.useState)(!1), 2),
          p = m[0],
          v = m[1],
          x = (0, u.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, o.Jh)(this, function (t) {
                if (
                  ((e = new URL(n.asPath, window.location.origin).toString()),
                  !h)
                )
                  throw Error("Only username/password users can enable MFA");
                if (!f) throw Error("No session found, cannot enable MFA");
                if ("mocked" === f.authProvider)
                  throw Error(
                    "Mock users can't enable MFA! Please setup Auth0 following the instructions in the README"
                  );
                return (
                  (0, s.signIn)(
                    f.authProvider,
                    { callbackUrl: e },
                    (0, a._)(
                      { prompt: "login" },
                      f.authProvider === d.Ho.OpenAI
                        ? {
                            login_hint: (0, d.W_)({
                              oai_enforce_mfa: !0,
                              idp: "openai",
                            }),
                          }
                        : { oai_enforce_mfa: "true" }
                    )
                  ),
                  [2]
                );
              });
            }),
            [n.asPath, f, h]
          ),
          b = (0, u.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, o.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (!h)
                      throw Error(
                        "Only username/password users can disable MFA"
                      );
                    if (!f) throw Error("No session found, cannot enable MFA");
                    if ("mocked" === f.authProvider)
                      throw Error(
                        "Mock users can't enable MFA! Please setup Auth0 following the instructions in the README"
                      );
                    return v(!0), [4, c.ZP.deleteMfa()];
                  case 1:
                    return (
                      t.sent(),
                      [
                        4,
                        (0, s.signOut)({
                          redirect: !1,
                          callbackUrl: "/auth/login?next=".concat(
                            encodeURIComponent(n.asPath)
                          ),
                        }),
                      ]
                    );
                  case 2:
                    return (e = t.sent()), v(!1), n.push(e.url), [2];
                }
              });
            }),
            [h, n, f]
          );
        return {
          setupMfa: x,
          isUsernamePassword: h,
          isLoggedInWithMfa: g,
          removeMfa: b,
          isLoading: p,
        };
      }
    },
    19051: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(70079);
      function a() {
        var e = (0, r.useRef)([]),
          t = (0, r.useRef)(function (t, n) {
            var r = setTimeout(t, n);
            return e.current.push(r), r;
          });
        return (
          (0, r.useEffect)(function () {
            var t = e.current;
            return function () {
              t.forEach(function (e) {
                clearTimeout(e);
              });
            };
          }, []),
          t.current
        );
      }
    },
    75179: function (e, t, n) {
      n.d(t, {
        Dd: function () {
          return o;
        },
        Mf: function () {
          return s;
        },
        _I: function () {
          return u;
        },
        sK: function () {
          return l;
        },
      });
      var r = n(95182),
        a = n.n(r),
        i = n(24274),
        o = "content_policy",
        s = { errType: "warning", errCode: o },
        l = {
          err: "Contents may violate our content policy",
          errType: "danger",
          errCode: o,
        };
      function u(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          o = a()(e.length, 0, 4e3),
          s = a()(e.length - o, 0, e.length - 1),
          l = t ? e.substring(s, e.length) : e;
        return l
          ? i.ZP.runModerationApi(l, n, r)
              .then(function (e) {
                return { isBlocked: !!e.blocked, isFlagged: !!e.flagged };
              })
              .catch(function (e) {
                return (
                  console.error(e), { isBlocked: !1, isFlagged: !1, error: e }
                );
              })
          : Promise.resolve({ isBlocked: !1, isFlagged: !1 });
      }
    },
  },
]);
