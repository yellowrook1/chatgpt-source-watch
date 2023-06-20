"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [97],
  {
    69403: function (e, t, n) {
      var r, a, i, s, o, l, u, c, d, f, h;
      n.d(t, {
        Jq: function () {
          return l;
        },
        Os: function () {
          return i;
        },
        PX: function () {
          return o;
        },
        uU: function () {
          return s;
        },
      }),
        ((u = r || (r = {})).Default = "default"),
        (u.Dark = "dark"),
        ((a || (a = {})).Retrieval = "retrieval"),
        ((c = i || (i = {})).Next = "next"),
        (c.Variant = "variant"),
        (c.Continue = "continue"),
        ((d = s || (s = {})).Unknown = "unknown"),
        (d.User = "user"),
        (d.Assistant = "assistant"),
        (d.System = "system"),
        (d.Critic = "critic"),
        (d.Tool = "tool"),
        ((f = o || (o = {})).Text = "text"),
        (f.MultimodalText = "multimodal_text"),
        (f.TetherBrowsingCode = "tether_browsing_code"),
        (f.Code = "code"),
        (f.ExecutionOutput = "execution_output"),
        (f.SystemError = "system_error"),
        (f.SystemMessage = "system_message"),
        ((h = l || (l = {})).Root = "root"),
        (h.System = "system"),
        (h.Prompt = "prompt"),
        (h.Completion = "completion");
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
          s = e.large,
          o = e.className;
        return (0, r.jsxs)("div", {
          className: (0, a.Z)("relative", o),
          style: { width: i, height: i },
          children: [
            (0, r.jsx)("img", {
              src: t,
              alt: "".concat(n, " logo"),
              className: (0, a.Z)(
                "h-full w-full bg-white",
                s ? "rounded-[5px]" : "rounded-sm"
              ),
            }),
            (0, r.jsx)("div", {
              className: (0, a.Z)(
                "absolute inset-0 ring-1 ring-inset ring-black/10",
                s ? "rounded-[5px]" : "rounded-sm"
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
          return M;
        },
        k$: function () {
          return w;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(19841),
        s = n(54887),
        o = n.n(s),
        l = n(1454),
        u = n(13002),
        c = n(34303),
        d = n(64135),
        f = n(88038),
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
      var b = c.Z.div(m(), function (e) {
          return e.$isMessageRedesign
            ? "rounded-full h-7 w-7"
            : "rounded-sm h-[30px] w-[30px]";
        }),
        y = c.Z.span(
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
            i = (0, d.hz)().has(f.FZ),
            s = g.nI;
          switch (t) {
            case "globe":
              s = l.RsK;
              break;
            case "terminal":
              s = l.cDN;
              break;
            case "text":
              s = l.RUS;
              break;
            case "browsing":
              s = l.jRj;
              break;
            case "code":
              s = u.oT$;
              break;
            case "plugin":
              s = l.yG;
              break;
            case "user":
              s = l.fzv;
          }
          return (0, a.jsxs)(b, {
            $isMessageRedesign: i,
            style: { backgroundColor: n },
            children: [
              (0, a.jsx)(g.ZP, {
                icon: s,
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
            r = (0, d.hz)().has(f.FZ);
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
        C = c.Z.div(v()),
        _ = c.Z.div(x()),
        k = { small: 20, redesign: 28, medium: 38 },
        M = function (e) {
          var t,
            n = e.user,
            r = e.size,
            s = e.notice,
            u = e.rounded,
            c = s && (0, a.jsx)(y, { $type: s, children: "!" }),
            h = (0, d.hz)().has(f.FZ);
          if ((null == n ? void 0 : n.picture) != null)
            return (0, a.jsxs)(_, {
              children: [
                (0, a.jsx)(o(), {
                  src: n.picture,
                  alt: "User",
                  width: k[r],
                  height: k[r],
                  className:
                    h || (void 0 !== u && u) ? "rounded-full" : "rounded-sm",
                }),
                c,
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
          return (0, a.jsxs)(C, {
            className: (0, i.Z)(
              "redesign" === r
                ? "h-7 w-7 text-xs"
                : "small" === r
                ? "h-5 w-5 text-xs"
                : "h-[30px] w-[30px] text-lg",
              h ? "rounded-full" : "rounded-sm"
            ),
            children: [
              m ||
                (0, a.jsx)(g.ZP, {
                  icon: l.fzv,
                  size: "redesign" === r ? "small" : r,
                }),
              c,
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
        s = n(34303),
        o = n(64135),
        l = n(88038),
        u = n(13282);
      function c() {
        var e = (0, r._)(["bg-black rounded-md"]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = (0, r._)([
          "flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md ",
          "",
        ]);
        return (
          (d = function () {
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
      var g = s.Z.div(c()),
        m = s.Z.div(d(), function (e) {
          return e.$isMessageRedesign && "dark:bg-gray-900";
        }),
        p = s.Z.div(f()),
        v = s.Z.code(h(), function (e) {
          return e.$shouldWrap ? "!whitespace-pre-wrap" : "!whitespace-pre";
        });
      function x(e) {
        var t = e.children,
          n = e.className,
          r = e.language,
          s = e.content,
          o = (0, i.useCallback)(
            function () {
              navigator.clipboard.writeText(s);
            },
            [s]
          );
        return (0, a.jsx)(b, {
          title: r,
          headerDecoration: (0, a.jsx)(u.Z, {
            buttonText: "Copy code",
            onCopy: o,
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
          s = e.className,
          u = e.codeClassName,
          c = (0, o.hz)().has(l.FZ);
        return (0, a.jsxs)(g, {
          className: s,
          children: [
            (0, a.jsxs)(m, {
              $isMessageRedesign: c,
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
        s = n(70079),
        o = n(1454),
        l = n(34303),
        u = n(86526),
        c = n(38317);
      function d() {
        var e = (0, a._)(["flex ml-auto gap-2"]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function f(e) {
        var t = e.buttonText,
          n = e.onCopy,
          a = e.className,
          l = (0, r._)((0, s.useState)(!1), 2),
          d = l[0],
          f = l[1],
          g = (0, u.Z)(),
          m = (0, s.useCallback)(
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
            !d &&
              (0, i.jsxs)(h, {
                onClick: m,
                className: a,
                children: [(0, i.jsx)(c.ZP, { icon: o.j4u }), t],
              }),
            d &&
              (0, i.jsxs)(h, {
                className: a,
                children: [(0, i.jsx)(c.ZP, { icon: o.UgA }), t && "Copied!"],
              }),
          ],
        });
      }
      var h = l.Z.button(d());
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
          s = e.className;
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
          className: s,
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
        s = n(19841),
        o = n(70079),
        l = n(1454),
        u = n(75908),
        c = n(3001),
        d = n(38317);
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
          c,
          m,
          v = e.onRemoveFileClick,
          x = e.file,
          b = e.loadingPercentage,
          y = e.onDownloadClick,
          w = (0, u.Z)(),
          j = null != y,
          C = g(x) ? x.name : x,
          _ = !!g(x) && x.type.startsWith("image/"),
          k =
            ((t = g(x) ? x : null),
            (c = (n = (0, r._)((0, o.useState)(void 0), 2))[0]),
            (m = n[1]),
            (0, o.useEffect)(
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
            c);
        return (0, a.jsxs)("div", {
          className: "group relative inline-block text-xs text-gray-900",
          children: [
            (0, a.jsx)(j ? "button" : "span", {
              className: "flex items-stretch justify-center",
              onClick: function () {
                return j && (null == y ? void 0 : y());
              },
              children:
                _ && null != k
                  ? (0, a.jsx)("span", {
                      className: (0, s.Z)(
                        "h-10 w-10 rounded-md bg-gray-500 bg-cover bg-center dark:bg-gray-500",
                        j && "group-hover:bg-black"
                      ),
                      style: {
                        backgroundImage:
                          void 0 !== k ? "url(".concat(k, ")") : "none",
                      },
                      children:
                        j &&
                        (0, a.jsx)(d.ZP, {
                          icon: l._hL,
                          className: (0, s.Z)(
                            "h-5 w-5",
                            "hidden group-hover:block"
                          ),
                        }),
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsxs)("span", {
                          className: (0, s.Z)(
                            "rounded-l-md bg-gray-500 px-2 py-2 text-white transition-colors dark:bg-gray-500",
                            j && "group-hover:bg-black"
                          ),
                          children: [
                            (0, a.jsx)(d.ZP, {
                              icon: i.Z,
                              className: (0, s.Z)(
                                "h-5 w-5",
                                j && "group-hover:hidden"
                              ),
                            }),
                            j &&
                              (0, a.jsx)(d.ZP, {
                                icon: l._hL,
                                className: (0, s.Z)(
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
                            children: C,
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
                  children: (0, a.jsx)(d.ZP, { icon: l.q5L }),
                }),
              }),
          ],
        });
      }
      var p = (0, c.vU)({
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
        s = n(35250),
        o = n(19841),
        l = n(70079),
        u = n(34303),
        c = n(38317);
      function d() {
        var e = (0, i._)(["absolute right-0 top-1/2 -translate-y-1/2"]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      t.Z = l.forwardRef(function (e, t) {
        var n = e.name,
          i = e.placeholder,
          u = e.type,
          d = e.displayName,
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
          C = (0, a._)((0, l.useState)(m), 2),
          _ = C[0],
          k = C[1],
          M = (0, l.useCallback)(
            function (e) {
              null == g || g(e), p && k(e.target.value);
            },
            [g, p]
          ),
          T = (0, l.useCallback)(
            function (e) {
              null == h || h(e), p && k(e.target.value);
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
            k(m);
          },
          [m]
        );
        var P = (0, r._)({}, p ? {} : { value: m }, p ? { value: _ } : {});
        return (0,
        s.jsxs)("div", { className: (0, o.Z)("rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 dark:bg-gray-700", b), children: [(0, s.jsx)("label", { htmlFor: n, className: "block text-xs font-medium text-gray-900 dark:text-gray-100", children: d }), (0, s.jsxs)("div", { className: (0, o.Z)(d && "mt-1", "relative"), children: [(0, s.jsx)("input", (0, r._)({ ref: t, type: u, name: n, id: n, className: (0, o.Z)("block w-full border-0 p-0 text-gray-900 placeholder-gray-500 outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-100 sm:text-sm", v && "pr-6"), placeholder: i, onBlur: M, onChange: T, onKeyDown: N, autoComplete: y, autoFocus: w }, P)), v && (0, s.jsx)(f, { onClick: x, children: (0, s.jsx)(c.ZP, { icon: v }) })] })] });
      });
      var f = u.Z.button(d());
    },
    37541: function (e, t, n) {
      var r = n(35250),
        a = n(70060),
        i = n.n(a);
      n(70079);
      var s = function (e) {
        var t = e.children;
        return (0, r.jsx)(r.Fragment, { children: t });
      };
      t.Z = i()(
        function () {
          return Promise.resolve(s);
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
        s = n.n(i),
        o = n(1454),
        l = n(34303),
        u = n(38317);
      function c() {
        var e = (0, r._)(["text-xs flex items-center justify-center gap-1"]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = (0, r._)([
          "dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400",
        ]);
        return (
          (d = function () {
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
            n(s()(t + e, 0, r - 1));
          };
        return (0, a.jsxs)(g, {
          className: i,
          children: [
            (0, a.jsx)(m, {
              onClick: function () {
                return l(-1);
              },
              disabled: 0 === t,
              children: (0, a.jsx)(u.ZP, { size: "xsmall", icon: o.YFh }),
            }),
            (0, a.jsx)(p, { children: "".concat(t + 1, " / ").concat(r) }),
            (0, a.jsx)(m, {
              onClick: function () {
                return l(1);
              },
              disabled: t === r - 1,
              children: (0, a.jsx)(u.ZP, { size: "xsmall", icon: o.Tfp }),
            }),
          ],
        });
      }
      var g = l.Z.div(c()),
        m = l.Z.button(d()),
        p = l.Z.span(f());
    },
    62059: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return tE;
        },
      });
      var r,
        a,
        i,
        s,
        o = n(4337),
        l = n(35250),
        u = n(70079),
        c = n(34303),
        d = n(32689),
        f = n(77442),
        h = n(39324),
        g = n(40638),
        m = n(24760),
        p = n(70575),
        v = n(68555),
        x = n(1454),
        b = n(35290),
        y = n(3001),
        w = n(82841),
        j = n(36218),
        C = n(24274),
        _ = n(64135),
        k = n(87316),
        M = n(38317),
        T = n(24148),
        N = n(36112),
        P = n(71209),
        I = n(70216),
        S = n(22830),
        Z = n(37812),
        F = n(19841),
        D = n(75908),
        E = n(88038),
        L = n(32983),
        A = n(21722),
        R = n(39889),
        B = n(44544),
        U = n(81292),
        O = n(59114),
        q = n(33733),
        z = n(25260),
        W = n(91530),
        H = n.n(W),
        V = n(19208),
        G = n.n(V),
        J = n(32787),
        $ = n(46110),
        Y = n(48727),
        Q = n(35448),
        K = n(11626),
        X = (0, U.ZP)(function () {
          return { isModalOpen: !1 };
        }),
        ee = {
          setIsModalOpen: function (e) {
            X.setState({ isModalOpen: e });
          },
        };
      function et(e) {
        var t = e.className,
          n = e.iconSize,
          r = (0, K.sN)().currentWorkspace,
          a = (0, K.sN)(K.F_.isPersonalWorkspace),
          i = (0, J.kP)().session;
        return !r || (a && (null == i ? void 0 : i.user) !== void 0)
          ? (0, l.jsx)($.Yt, {
              user: null == i ? void 0 : i.user,
              size: "redesign",
              rounded: !0,
            })
          : (0, l.jsx)("div", {
              className:
                "flex items-center justify-center rounded-full bg-blue-100 " +
                t,
              children: (0, l.jsx)(M.ZP, {
                icon: q.Z,
                size: void 0 === n ? "small" : n,
                className: "text-blue-400",
              }),
            });
      }
      function en(e) {
        var t,
          n,
          r,
          a = e.workspace,
          i = e.onResetThread,
          s = (0, J.kP)().session,
          o = (0, K.sN)().currentWorkspace,
          c = (null == o ? void 0 : o.id) === a.id,
          d =
            ((t = (0, v.useRouter)()),
            (n = (0, Q.NL)()),
            (r = (0, u.useContext)(L.QL).onEnableHistory),
            (0, u.useCallback)(
              (0, A._)(function () {
                return (0, R.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if ((n.invalidateQueries(), r(), !i)) return [3, 1];
                      return i(), [3, 3];
                    case 1:
                      if (!("/" !== t.asPath)) return [3, 3];
                      return [4, t.push("/")];
                    case 2:
                      e.sent(), (e.label = 3);
                    case 3:
                      return [2];
                  }
                });
              }),
              [r, i, n, t]
            )),
          f = (0, u.useCallback)(
            (0, A._)(function () {
              return (0, R.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      (0, B.setCookie)("_account", a.id),
                      K.w_.setCurrentWorkspace(a),
                      [4, d()]
                    );
                  case 1:
                    return e.sent(), ee.setIsModalOpen(!1), [2];
                }
              });
            }),
            [a, d]
          ),
          h = (0, K.Ix)(a),
          g = (0, K.qH)(a),
          m = (0, l.jsx)("div", {
            className:
              "flex h-10 w-10 items-center justify-center rounded-full bg-blue-100",
            children: (0, l.jsx)(M.ZP, {
              icon: q.Z,
              size: "small",
              className: "text-blue-400",
            }),
          });
        if ("personal" === a.structure) {
          if (!(null == s ? void 0 : s.user)) return null;
          m = (0, l.jsx)("div", {
            className: "flex h-10 w-10 items-center justify-center",
            children: (0, l.jsx)(G(), {
              alt: "Profile",
              src: s.user.picture,
              width: 32,
              height: 32,
              className:
                "flex h-10 w-10 items-center justify-center rounded-full",
            }),
          });
        }
        return (0, l.jsxs)(c ? "div" : "button", {
          onClick: c ? H() : f,
          className: (0, F.Z)({
            "flex w-full items-center gap-2 rounded-lg  p-4 hover:bg-gray-50 focus:bg-gray-50 dark:hover:bg-gray-800 dark:focus:bg-gray-800":
              !0,
            "bg-gray-50 dark:bg-gray-800": c,
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
                      className: "inline align-top font-medium capitalize",
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
                c &&
                (0, l.jsx)("div", {
                  className: "",
                  children: (0, l.jsx)(M.ZP, { icon: z.Z, size: "medium" }),
                }),
            }),
          ],
        });
      }
      function er(e) {
        var t = e.data,
          n = e.onResetThread,
          r = t.map(function (e) {
            return (0, l.jsx)(en, { workspace: e, onResetThread: n }, e.id);
          });
        return (0, l.jsx)("div", {
          className: "flex w-full flex-col gap-2",
          children: r,
        });
      }
      function ea(e) {
        var t = e.onResetThread,
          n = X().isModalOpen,
          r = (0, K._O)(),
          a = r.data,
          i = r.isLoading,
          s = (0, D.Z)(),
          o = (0, u.useCallback)(function () {
            ee.setIsModalOpen(!1);
          }, []);
        return i || 0 === a.length
          ? null
          : (0, l.jsx)(Y.Z, {
              onClose: o,
              closeButton: (0, l.jsx)(O.ZP.CloseButton, { onClose: o }),
              type: "success",
              isOpen: n,
              size: "normal",
              title: s.formatMessage(ei.workspaceSwitcherTitle),
              children: (0, l.jsx)("div", {
                className: "flex w-full items-center justify-between",
                children: (0, l.jsx)(er, { data: a, onResetThread: t }),
              }),
            });
      }
      var ei = (0, y.vU)({
          workspaceSwitcherTitle: {
            id: "workspaceSwitcher.title",
            defaultMessage: "Choose Account",
            description: "title for account switcher modal",
          },
        }),
        es = n(66958),
        eo = n(81949),
        el = n(56060),
        eu = n(13451),
        ec = n(56115),
        ed = n(13002),
        ef = n(32402),
        eh = n(25345),
        eg = n(19265);
      function em(e) {
        var t = e.accept,
          n = e.onFilePicked,
          r = e.loading,
          a = e.disabled,
          i = e.className,
          s = e.text,
          o = (0, u.useRef)(null),
          c = (0, u.useCallback)(function () {
            var e;
            null === (e = o.current) || void 0 === e || e.click();
          }, []),
          d = (0, u.useCallback)(
            function (e) {
              var t,
                r =
                  null === (t = e.target.files) || void 0 === t ? void 0 : t[0];
              r && (n(r), (e.target.value = ""));
            },
            [n]
          );
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(es.z, {
              onClick: c,
              disabled: a || r,
              color: "none",
              className: i,
              children: (0, l.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                  r
                    ? (0, l.jsx)(eg.Z, { className: "h-4 w-4" })
                    : (0, l.jsx)(M.ZP, { icon: x.OvN, size: "small" }),
                  s && (0, l.jsx)("span", { children: s }),
                ],
              }),
            }),
            (0, l.jsx)("input", {
              type: "file",
              accept: t,
              ref: o,
              className: "hidden",
              onChange: d,
            }),
          ],
        });
      }
      var ep = n(97688),
        ev = n(24396),
        ex = (0, y.vU)({
          errorLoadingFiles: {
            id: "filesModal.errorLoadingFiles",
            defaultMessage: "Failed to load files",
            description: "Error message when loading files fails",
          },
        }),
        eb = [
          "application/pdf",
          "text/plain",
          "text/markdown",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          "text/csv",
        ],
        ey = (0, y.vU)({
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
          fileAlreadyExists: {
            id: "filesModal.fileAlreadyExists",
            defaultMessage:
              "A file with the same name already exists. Please delete the existing file before uploading.",
            description:
              "Warning message when a file with the same name already exists",
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
        });
      function ew(e, t, n) {
        return ej.apply(this, arguments);
      }
      function ej() {
        return (ej = (0, A._)(function (e, t, n) {
          var r, a, i, s, o;
          return (0, R.Jh)(this, function (l) {
            switch (l.label) {
              case 0:
                return (
                  l.trys.push([0, 3, , 4]),
                  [4, C.ZP.getFileDownloadLink(t.id, e)]
                );
              case 1:
                if (!(r = l.sent()).download_url)
                  throw Error(
                    "File is not ready to download: " + JSON.stringify(r)
                  );
                return [
                  4,
                  fetch(r.download_url).then(function (e) {
                    return e.blob();
                  }),
                ];
              case 2:
                return (
                  (a = l.sent()),
                  (i = URL.createObjectURL(a)),
                  (s = window.open(i, "_blank"))
                    ? s.addEventListener("beforeunload", function () {
                        URL.revokeObjectURL(i);
                      })
                    : (((o = document.createElement("a")).href = i),
                      (o.download = t.name),
                      (o.style.display = "none"),
                      o.click()),
                  URL.revokeObjectURL(i),
                  [3, 4]
                );
              case 3:
                return (
                  l.sent(),
                  ep.m.danger(n.formatMessage(ey.fileDownloadFailed)),
                  [3, 4]
                );
              case 4:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function eC() {
        return (eC = (0, A._)(function (e, t, n, r) {
          var a;
          return (0, R.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                if (!n) return [2];
                (a = 0), (i.label = 1);
              case 1:
                if (!(a < e.length)) return [3, 4];
                return [
                  4,
                  Promise.all(
                    e.slice(a, a + t).map(function (e) {
                      return ew(n.accessToken, e, r);
                    })
                  ),
                ];
              case 2:
                i.sent(), (i.label = 3);
              case 3:
                return (a += t), [3, 1];
              case 4:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function e_(e) {
        var t = e.file,
          n = e.refetch,
          r = e.handleFileDelete,
          a = e.handleFileDeleteFailed,
          s = e.session,
          o = (0, u.useMemo)(
            function () {
              return (0, ec.Z)(new Date(t.ready_time), "MMM d, yyyy");
            },
            [t.ready_time]
          ),
          c = (0, u.useMemo)(
            function () {
              var e;
              return (e = t.size) < 1048576
                ? "".concat((e / 1024).toFixed(0), " KB")
                : "".concat((e / 1048576).toFixed(1), " MB");
            },
            [t.size]
          ),
          d = (0, D.Z)(),
          f = (0, u.useCallback)(
            (0, A._)(function () {
              return (0, R.Jh)(this, function (e) {
                return s && ew(s.accessToken, t, d), [2];
              });
            }),
            [s, t, d]
          ),
          h = (0, u.useCallback)(
            (0, A._)(function () {
              return (0, R.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (!s) return [2];
                    r(t), (e.label = 1);
                  case 1:
                    return (
                      e.trys.push([1, 4, , 5]),
                      [4, C.ZP.deleteFileFromFileService(t.id, s.accessToken)]
                    );
                  case 2:
                    return (
                      e.sent(),
                      ep.m.success(d.formatMessage(ey.fileDeleted)),
                      [4, n()]
                    );
                  case 3:
                    return e.sent(), [3, 5];
                  case 4:
                    return (
                      e.sent(),
                      a(t),
                      ep.m.danger(d.formatMessage(ey.fileDeleteFailed)),
                      [3, 5]
                    );
                  case 5:
                    return [2];
                }
              });
            }),
            [r, a, s, t, n, d]
          );
        return (0, l.jsxs)(eh.Z.Row, {
          children: [
            (0, l.jsx)(eh.Z.Cell, { children: t.name }),
            (0, l.jsx)(eh.Z.Cell, { children: t.state !== i.Uploading && o }),
            (0, l.jsx)(eh.Z.Cell, { children: t.state !== i.Uploading && c }),
            (0, l.jsx)(eh.Z.Cell, {
              textAlign: "right",
              children: (0, l.jsx)("div", {
                className: "flex justify-end space-x-2",
                children:
                  t.state === i.Uploading
                    ? (0, l.jsx)(eg.Z, { className: "text-gray-500" })
                    : (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)("button", {
                            className: "text-gray-500 hover:text-gray-600",
                            onClick: f,
                            children: (0, l.jsx)(M.ZP, {
                              icon: x._hL,
                              size: "xsmall",
                            }),
                          }),
                          (0, l.jsx)("button", {
                            className: "text-gray-500 hover:text-gray-600",
                            onClick: h,
                            children: (0, l.jsx)(M.ZP, {
                              icon: x.Ybf,
                              size: "xsmall",
                            }),
                          }),
                        ],
                      }),
              }),
            }),
          ],
        });
      }
      function ek() {
        var e,
          t,
          n,
          r,
          a,
          s,
          o,
          c,
          f = (0, D.Z)(),
          g =
            ((t = (e = (0, J.kP)()).session),
            (n = e.loading),
            (r = (0, _.hz)()),
            (a = (0, D.Z)()),
            (0, ev.a)(
              ["files"],
              (0, A._)(function () {
                return (0, R.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        C.ZP.listFiles(t.accessToken).catch(function () {
                          return (
                            ep.m.danger(a.formatMessage(ex.errorLoadingFiles)),
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
          m = g.data,
          p = g.isLoading,
          v = g.refetch,
          b = (0, S._)((0, u.useState)([]), 2),
          y = b[0],
          w = b[1],
          j = (0, J.kP)().session,
          k = (0, u.useMemo)(
            function () {
              return null !== (c = null == m ? void 0 : m.files) && void 0 !== c
                ? c
                : [];
            },
            [m]
          ),
          T = (0, u.useCallback)(
            function () {
              d.vm.closeFilesModal(), y.length > 0 && v();
            },
            [v, y]
          ),
          N = (0, eu.D)({
            mutationFn: function (e) {
              return C.ZP.uploadFileUsingFileService(
                e,
                ef.Ei.MyFiles,
                j.accessToken
              );
            },
            onMutate:
              ((s = (0, A._)(function (e) {
                return (0, R.Jh)(this, function (t) {
                  return [2, e];
                });
              })),
              function (e) {
                return s.apply(this, arguments);
              }),
            onSuccess: (0, A._)(function () {
              return (0, R.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, v()];
                  case 1:
                    return (
                      e.sent(),
                      ep.m.success(f.formatMessage(ey.fileUploaded)),
                      [2]
                    );
                }
              });
            }),
            onError: function (e, t) {
              w(function (e) {
                return e.filter(function (e) {
                  return e.name !== t.name;
                });
              }),
                ep.m.danger(f.formatMessage(ey.fileUploadFailed));
            },
          }),
          I = (0, u.useCallback)(
            ((o = (0, A._)(function (e) {
              var t;
              return (0, R.Jh)(this, function (n) {
                return k.find(function (t) {
                  return t.name === e.name;
                })
                  ? (ep.m.warning(f.formatMessage(ey.fileAlreadyExists)), [2])
                  : ((t = {
                      id: "",
                      name: e.name,
                      ready_time: new Date().toISOString(),
                      use_case: ef.Ei.MyFiles,
                      size: e.size,
                      state: i.Uploading,
                    }),
                    w(function (e) {
                      return (0, eo._)(e).concat([t]);
                    }),
                    N.mutate(e),
                    [2]);
              });
            })),
            function (e) {
              return o.apply(this, arguments);
            }),
            [k, f, N]
          ),
          Z = (0, u.useCallback)(
            (0, A._)(function () {
              return (0, R.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (!j) return [2];
                    e.label = 1;
                  case 1:
                    return (
                      e.trys.push([1, 3, , 4]),
                      [
                        4,
                        (function (e, t, n, r) {
                          return eC.apply(this, arguments);
                        })(k, 30, j, f),
                      ]
                    );
                  case 2:
                    return e.sent(), [3, 4];
                  case 3:
                    return (
                      e.sent(),
                      ep.m.danger(f.formatMessage(ey.fileDownloadFailed)),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            }),
            [j, k, f]
          ),
          E = (0, u.useCallback)(
            (0, A._)(function () {
              var e;
              return (0, R.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (
                      !window.confirm(f.formatMessage(ey.confirmDeleteAll)) ||
                      ((e = k.map(function (e) {
                        return (0, P._)((0, h._)({}, e), { state: i.Deleting });
                      })),
                      !j)
                    )
                      return [2];
                    w((0, eo._)(y).concat((0, eo._)(e))), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 4, , 5]),
                      [4, C.ZP.deleteAllFilesFromFileService(j.accessToken)]
                    );
                  case 2:
                    return (
                      t.sent(),
                      ep.m.success(f.formatMessage(ey.allFilesDeleted)),
                      [4, v()]
                    );
                  case 3:
                    return t.sent(), [3, 5];
                  case 4:
                    return (
                      t.sent(),
                      w([]),
                      ep.m.danger(f.formatMessage(ey.allFilesDeleteFailed)),
                      [3, 5]
                    );
                  case 5:
                    return [2];
                }
              });
            }),
            [k, y, j, f, v]
          ),
          L = (0, u.useCallback)(function (e, t) {
            return e.findIndex(function (e) {
              return e.name === t.name && e.state !== i.Uploading;
            });
          }, []),
          B = (0, u.useCallback)(function (e) {
            var t = (0, P._)((0, h._)({}, e), { state: i.Deleting });
            w(function (e) {
              return (0, eo._)(e).concat([t]);
            });
          }, []),
          U = (0, u.useCallback)(function (e) {
            w(function (t) {
              return t.filter(function (t) {
                return t.name !== e.name;
              });
            });
          }, []),
          q = (0, u.useMemo)(
            function () {
              return (0, eo._)(k)
                .concat((0, eo._)(y))
                .filter(function (e, t, n) {
                  if (e.use_case !== ef.Ei.MyFiles) return !1;
                  var r = L(n, e);
                  return e.state === i.Uploading && -1 !== r
                    ? (w(function (t) {
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
                    ? (w(function (t) {
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
            [k, L, y]
          );
        return (0, l.jsxs)(Y.Z, {
          isOpen: !0,
          onClose: T,
          size: "custom",
          className: "max-w-5xl",
          type: "success",
          title: f.formatMessage(ey.myFiles),
          closeButton: (0, l.jsx)(O.ZP.CloseButton, { onClose: T }),
          children: [
            p
              ? (0, l.jsx)("div", {
                  className: "flex h-64 items-center justify-center",
                  children: (0, l.jsx)(eg.Z, { className: "text-gray-500" }),
                })
              : q.length > 0
              ? (0, l.jsxs)(eh.Z.Root, {
                  className: "max-h-[28rem] text-xs",
                  children: [
                    (0, l.jsxs)(eh.Z.Header, {
                      children: [
                        (0, l.jsx)(eh.Z.HeaderCell, {
                          children: f.formatMessage(ey.name),
                        }),
                        (0, l.jsx)(eh.Z.HeaderCell, {
                          children: f.formatMessage(ey.date),
                        }),
                        (0, l.jsx)(eh.Z.HeaderCell, {
                          children: f.formatMessage(ey.size),
                        }),
                        (0, l.jsx)(eh.Z.HeaderCell, {
                          textAlign: "right",
                          children: (0, l.jsxs)(el.fC, {
                            children: [
                              (0, l.jsx)(el.xz, {
                                asChild: !0,
                                children: (0, l.jsx)("button", {
                                  className: "IconButton",
                                  "aria-label": "More options",
                                  children: (0, l.jsx)(M.ZP, {
                                    icon: ed.JEI,
                                    size: "xsmall",
                                    strokeWidth: 0.25,
                                  }),
                                }),
                              }),
                              (0, l.jsx)(el.h_, {
                                children: (0, l.jsx)(el.VY, {
                                  className: (0, F.Z)(
                                    "rounded-sm bg-white p-2 text-xs text-gray-600 shadow-xl dark:bg-gray-800/90"
                                  ),
                                  side: "top",
                                  align: "end",
                                  children: (0, l.jsxs)("div", {
                                    className:
                                      "flex flex-col items-start space-y-2",
                                    children: [
                                      (0, l.jsxs)("button", {
                                        onClick: Z,
                                        className:
                                          "flex w-full items-center gap-2",
                                        children: [
                                          (0, l.jsx)(M.ZP, {
                                            icon: x._hL,
                                            size: "xsmall",
                                          }),
                                          (0, l.jsx)("span", {
                                            children: f.formatMessage(
                                              ey.downloadAll
                                            ),
                                          }),
                                        ],
                                      }),
                                      (0, l.jsxs)("button", {
                                        onClick: E,
                                        className:
                                          "flex w-full items-center gap-2",
                                        children: [
                                          (0, l.jsx)(M.ZP, {
                                            icon: x.Ybf,
                                            size: "xsmall",
                                          }),
                                          (0, l.jsx)("span", {
                                            children: f.formatMessage(
                                              ey.deleteAll
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsx)(eh.Z.Body, {
                      children: q.map(function (e, t) {
                        return (0,
                        l.jsx)(e_, { file: e, refetch: v, handleFileDelete: B, handleFileDeleteFailed: U, session: j }, t);
                      }),
                    }),
                  ],
                })
              : (0, l.jsx)("p", { children: f.formatMessage(ey.noFilesFound) }),
            (0, l.jsx)(em, {
              accept: eb.join(","),
              onFilePicked: I,
              loading: N.isLoading,
              disabled: N.isLoading,
              className:
                "mt-4 flex items-center space-x-2 rounded bg-green-600 px-4 py-2 text-white",
              text: f.formatMessage(ey.uploadFile),
            }),
          ],
        });
      }
      ((r = i || (i = {})).Uploading = "uploading"), (r.Deleting = "deleting");
      var eM = n(181),
        eT = n(86546),
        eN = n(21437),
        eP = n(86433),
        eI = n(25422),
        eS = n(10604),
        eZ = n(61119),
        eF = n(44925),
        eD = n(68789),
        eE = n(57924),
        eL = ["sharedConversations"],
        eA = (0, y.vU)({
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
      function eR() {
        var e = (0, Q.NL)(),
          t = (0, D.Z)(),
          n = (0, eu.D)({
            mutationFn: function () {
              return C.ZP.deleteAllSharedConversations();
            },
            onSettled: function () {
              e.invalidateQueries(eL);
            },
            onError: function () {
              ep.m.danger(t.formatMessage(eA.deleteAllSharedLinksFailed));
            },
          }).mutate;
        return (0, l.jsxs)(eD.fC, {
          children: [
            (0, l.jsx)(eD.xz, {
              asChild: !0,
              children: (0, l.jsx)("button", {
                className:
                  "text-gray-500 hover:text-gray-600 radix-state-open:text-gray-600 dark:hover:text-gray-400 dark:radix-state-open:text-gray-400",
                children: (0, l.jsx)(M.ZP, { icon: x.K9M }),
              }),
            }),
            (0, l.jsx)(eD.Uv, {
              children: (0, l.jsx)(eD.VY, {
                className:
                  "min-w-[8rem] rounded-md bg-white py-1 shadow-lg dark:bg-gray-800",
                side: "bottom",
                sideOffset: 4,
                children: (0, l.jsx)(eD.ck, {
                  onClick: function () {
                    window.confirm(
                      t.formatMessage(eA.deleteAllSharedLinksConfirm)
                    ) && n();
                  },
                  className:
                    "cursor-pointer select-none px-2 py-1 text-red-500 radix-highlighted:bg-gray-50 dark:radix-highlighted:bg-gray-700",
                  children: (0, l.jsx)(
                    b.Z,
                    (0, h._)({}, eA.deleteAllSharedLinks)
                  ),
                }),
              }),
            }),
          ],
        });
      }
      function eB() {
        return C.ZP.getSharedConversations();
      }
      function eU(e) {
        var t,
          n = e.sharedConversation,
          r = (0, D.Z)(),
          a = (0, Q.NL)(),
          i = (0, eu.D)({
            mutationFn:
              ((t = (0, A._)(function (e) {
                var t;
                return (0, R.Jh)(this, function (n) {
                  return (
                    (t = e.sharedConversationId),
                    [2, C.ZP.deleteShareLink({ share_id: t })]
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
              ep.m.danger(r.formatMessage(eA.deleteSharedLinkFailed));
            },
          }),
          s = i.mutate,
          o = i.isLoading;
        return (0, l.jsxs)(eh.Z.Row, {
          disabled: o,
          children: [
            (0, l.jsx)(eh.Z.Cell, {
              children: (0, l.jsxs)("a", {
                href: "/share/".concat(n.id),
                target: "_blank",
                rel: "noreferrer",
                className:
                  "inline-flex items-center gap-2 align-top text-blue-500 dark:text-blue-400",
                children: [
                  (0, l.jsx)(M.ZP, { icon: x.XKb, className: "flex-shrink-0" }),
                  n.title,
                ],
              }),
            }),
            (0, l.jsx)(eh.Z.Cell, {
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
            (0, l.jsx)(eh.Z.Cell, {
              children: (0, l.jsxs)(eh.Z.Actions, {
                children: [
                  (0, l.jsx)(eE.u, {
                    label: r.formatMessage(eA.goToOriginConversation),
                    sideOffset: 4,
                    side: "top",
                    children: (0, l.jsx)("a", {
                      href: "/c/".concat(n.conversation_id),
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": r.formatMessage(eA.goToOriginConversation),
                      className:
                        "text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                      children: (0, l.jsx)(M.ZP, { icon: x.IC0 }),
                    }),
                  }),
                  (0, l.jsx)(eE.u, {
                    label: r.formatMessage(eA.deleteSharedLink),
                    sideOffset: 4,
                    side: "top",
                    children: (0, l.jsx)("button", {
                      onClick: function () {
                        s({ sharedConversationId: n.id });
                      },
                      "aria-label": r.formatMessage(eA.deleteSharedLink),
                      className:
                        "text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                      children: (0, l.jsx)(M.ZP, { icon: x.Ybf }),
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
          r = (0, ev.a)({
            queryKey: eL,
            queryFn: eB,
            refetchOnMount: "always",
          }),
          a = r.data,
          i = r.isLoading,
          s = r.isError,
          o = r.refetch,
          u = (0, D.Z)();
        return (
          (t = i
            ? (0, l.jsx)("div", {
                className: "pb-8 text-gray-400 dark:text-gray-600",
                children: (0, l.jsx)(b.Z, (0, h._)({}, eA.loading)),
              })
            : s
            ? (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("div", {
                    className: "mb-4 text-red-500",
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, eA.somethingWentWrong)
                    ),
                  }),
                  (0, l.jsx)("div", {
                    children: (0, l.jsx)(es.z, {
                      color: "neutral",
                      onClick: function () {
                        o();
                      },
                      children: (0, l.jsx)(b.Z, (0, h._)({}, eA.retry)),
                    }),
                  }),
                ],
              })
            : 0 === a.total
            ? (0, l.jsx)("div", {
                className: "pb-8 text-gray-600 dark:text-gray-400",
                children: (0, l.jsx)(
                  b.Z,
                  (0, h._)({}, eA.noSharedConversations)
                ),
              })
            : (0, l.jsxs)(eh.Z.Root, {
                className: "max-h-[28rem]",
                children: [
                  (0, l.jsxs)(eh.Z.Header, {
                    children: [
                      (0, l.jsx)(eh.Z.HeaderCell, {
                        children: (0, l.jsx)(b.Z, (0, h._)({}, eA.name)),
                      }),
                      (0, l.jsx)(eh.Z.HeaderCell, {
                        children: (0, l.jsx)(b.Z, (0, h._)({}, eA.dateShared)),
                      }),
                      (0, l.jsx)(eh.Z.HeaderCell, {
                        textAlign: "right",
                        children: (0, l.jsx)(eR, {}),
                      }),
                    ],
                  }),
                  (0, l.jsx)(eh.Z.Body, {
                    children: a.items.map(function (e) {
                      return (0, l.jsx)(eU, { sharedConversation: e }, e.id);
                    }),
                  }),
                ],
              })),
          (0, l.jsx)(Y.Z, {
            isOpen: !0,
            onClose: n,
            size: "custom",
            className: "max-w-5xl",
            type: "success",
            title: u.formatMessage(eA.title),
            closeButton: (0, l.jsx)(O.ZP.CloseButton, { onClose: n }),
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
          className: (0, F.Z)(
            a && "cursor-not-allowed opacity-30",
            "bg-gray-200 radix-state-checked:bg-green-600",
            "relative h-[25px] w-[42px] cursor-pointer rounded-full"
          ),
          children: (0, l.jsx)(eq.bU, {
            className: (0, F.Z)(
              "block h-[21px] w-[21px] rounded-full",
              "translate-x-0.5 transition-transform duration-100 will-change-transform radix-state-checked:translate-x-[19px]",
              "bg-white shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
            ),
          }),
        });
      }
      function eW() {
        var e = (0, o._)(["block text-sm font-medium mb-1"]);
        return (
          (eW = function () {
            return e;
          }),
          e
        );
      }
      function eH(e) {
        var t,
          n,
          r = e.onClose,
          a = e.onToggleHistoryDisabled,
          i = e.onDeleteHistory,
          o = (0, D.Z)(),
          c = (0, N.MO)().conversations.length > 0,
          d = (0, f.w$)(),
          g = (0, S._)((0, u.useState)(!1), 2),
          m = g[0],
          p = g[1],
          v = (0, S._)((0, u.useState)(!1), 2),
          x = v[0],
          y = v[1],
          w = (0, S._)((0, u.useState)(!1), 2),
          j = w[0],
          C = w[1],
          k = (0, S._)((0, u.useState)(!1), 2),
          M = k[0],
          T = k[1],
          I = (0, S._)((0, u.useState)(s.General), 2),
          Z = I[0],
          A = I[1],
          R = (0, u.useContext)(L.QL),
          B = R.historyDisabled,
          U = R.toggleHistoryDisabled,
          q = (0, eZ.OS)(function (e) {
            return e.isOpen;
          }),
          z = (0, _.hz)(),
          W = z.has(E.RJ),
          H = (0, J.kP)().session,
          V = (0, eN.Fl)(),
          G = V.isBetaFeaturesUiEnabled,
          $ = V.isPluginsAvailable,
          Q = V.isBrowsingAvailable,
          K = V.isCodeInterpreterAvailable,
          X = (0, u.useCallback)(function () {
            p(!1);
          }, []),
          ee = (0, u.useCallback)(function () {
            y(!1);
          }, []),
          et = (0, u.useCallback)(function () {
            C(!1);
          }, []),
          en = (0, u.useCallback)(function () {
            p(!0);
          }, []),
          er = (0, u.useCallback)(function () {
            y(!0);
          }, []),
          ea = (0, u.useCallback)(function () {
            C(!0);
          }, []),
          ei = (0, u.useCallback)(
            function () {
              null == a || a(), U();
            },
            [a, U]
          ),
          es = (0, eP.S)(),
          eo = es.setupMfa,
          el = es.isUsernamePassword,
          eu = es.removeMfa;
        return m
          ? (0, l.jsx)(eQ, { onClose: X })
          : x
          ? (0, l.jsx)(eY, { onClose: ee, onDeleteHistory: i })
          : j
          ? (0, l.jsx)(e1, { onClose: et })
          : M
          ? (0, l.jsx)(eO, {
              onClose: function () {
                T(!1);
              },
            })
          : (0, l.jsx)(Y.Z, {
              isOpen: !0,
              onClose: r,
              size: "custom",
              className: "md:max-w-[680px]",
              type: "success",
              title: o.formatMessage(e3.settings),
              closeButton: (0, l.jsx)(O.ZP.CloseButton, { onClose: r }),
              children: (0, l.jsxs)(eM.fC, {
                className: "flex flex-col gap-6 md:flex-row",
                defaultValue: Z,
                orientation: d ? "vertical" : void 0,
                onValueChange: function (e) {
                  A(e);
                },
                children: [
                  (0, l.jsxs)(eM.aV, {
                    className: (0, F.Z)(
                      "-ml-[8px] flex min-w-[180px] flex-shrink-0",
                      d
                        ? "flex-col"
                        : "flex-row rounded-lg bg-gray-100 p-1 dark:bg-gray-800/30"
                    ),
                    children: [
                      (0, l.jsx)(eK, {
                        value: s.General,
                        icon: ed.oq2,
                        label: (0, l.jsx)(b.Z, (0, h._)({}, e3.generalTab)),
                      }),
                      G &&
                        (Q || $ || K) &&
                        (0, l.jsx)(eK, {
                          value: s.BetaFeatures,
                          icon: ed.rTN,
                          label: (0, l.jsx)(b.Z, (0, h._)({}, e3.betaTab)),
                        }),
                      (0, l.jsx)(eK, {
                        value: s.DataControls,
                        icon: ed.tQn,
                        label: (0, l.jsx)(
                          b.Z,
                          (0, h._)({}, e3.dataControlsTab)
                        ),
                      }),
                    ],
                  }),
                  (0, l.jsxs)(eX, {
                    value: s.General,
                    children: [
                      (0, l.jsx)(e0, { children: (0, l.jsx)(e$, {}) }),
                      z.has("tools3_dev") &&
                        (0, l.jsx)(e0, {
                          children: (0, l.jsx)(eG, {
                            label: o.formatMessage(e3.openPluginDevtools),
                            enabled: q,
                            onChange: eZ.Ds.setIsOpen,
                          }),
                        }),
                      (0, l.jsx)(e0, {
                        children: (0, l.jsx)(eJ, {
                          color: "danger",
                          disabled: !c,
                          label: o.formatMessage(e3.clearChatLabel),
                          buttonLabel: o.formatMessage(e3.clearChatButton),
                          onClick: er,
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)(eX, {
                    value: s.BetaFeatures,
                    children: (0, l.jsx)(eV, {}),
                  }),
                  (0, l.jsxs)(eX, {
                    value: s.DataControls,
                    children: [
                      (0, l.jsx)(e0, {
                        children: (0, l.jsx)(eG, {
                          label: o.formatMessage(e3.chatHistoryToggleLabel),
                          enabled: !B,
                          onChange: ei,
                          description: (0, l.jsx)(
                            b.Z,
                            (0, P._)((0, h._)({}, e3.chatHistoryDescription), {
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
                            })
                          ),
                        }),
                      }),
                      W &&
                        (0, l.jsx)(e0, {
                          children: (0, l.jsx)(eJ, {
                            label: o.formatMessage(e3.sharedConversations),
                            buttonLabel: o.formatMessage(
                              e3.sharedConversationsButton
                            ),
                            onClick: function () {
                              T(!0);
                            },
                          }),
                        }),
                      (0, l.jsx)(e0, {
                        children: (0, l.jsx)(eJ, {
                          label: o.formatMessage(e3.exportData),
                          buttonLabel: o.formatMessage(e3.exportButton),
                          onClick: en,
                        }),
                      }),
                      (0, l.jsx)(e0, {
                        children: (0, l.jsx)(eJ, {
                          label: o.formatMessage(e3.deleteAccount),
                          buttonLabel: o.formatMessage(e3.deleteAccountButton),
                          color: "danger",
                          onClick: ea,
                        }),
                      }),
                      z.has(E.i) &&
                        !(null == H
                          ? void 0
                          : null === (t = H.user) || void 0 === t
                          ? void 0
                          : t.mfa) &&
                        el &&
                        (0, l.jsx)(e0, {
                          children: (0, l.jsx)(eJ, {
                            label: o.formatMessage(e3.enable2fa),
                            buttonLabel: o.formatMessage(e3.enable),
                            onClick: eo,
                          }),
                        }),
                      (null == H
                        ? void 0
                        : null === (n = H.user) || void 0 === n
                        ? void 0
                        : n.mfa) &&
                        el &&
                        (0, l.jsx)(e0, {
                          children: (0, l.jsx)(eJ, {
                            label: o.formatMessage(e3.disable2fa),
                            buttonLabel: o.formatMessage(e3.disable),
                            onClick: eu,
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
          t = (0, D.Z)(),
          n = (0, J.kP)().session,
          r = (0, eN.N2)(),
          a = (0, eN.Fl)(),
          i = a.isBrowsingAvailable,
          s = a.isBrowsingEnabled,
          o = a.isPluginsAvailable,
          u = a.isPluginsEnabled,
          c = a.isCodeInterpreterAvailable,
          d = a.isCodeInterpreterEnabled,
          f = (0, eu.D)({
            mutationFn: function (t) {
              var r = t.feature,
                a = t.enabled;
              return C.ZP.setUserSettingsBetaFeature(
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
          v = g && (null == m ? void 0 : m.feature) === eN.tr.BROWSING,
          x = g && (null == m ? void 0 : m.feature) === eN.tr.CODE_INTERPRETER,
          y = g && (null == m ? void 0 : m.feature) === eN.tr.PLUGINS;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(e0, {
              children: (0, l.jsx)("p", {
                children: (0, l.jsx)(b.Z, (0, h._)({}, e3.betaIntro)),
              }),
            }),
            i &&
              (0, l.jsx)(e0, {
                children: (0, l.jsx)(eG, {
                  label: t.formatMessage(e3.betaBrowsingToggleLabel),
                  disabled: v,
                  enabled: v ? (null == m ? void 0 : m.enabled) : s,
                  onChange: function (e) {
                    p({ feature: eN.tr.BROWSING, enabled: e });
                  },
                  description: (0, l.jsx)(
                    b.Z,
                    (0, h._)({}, e3.betaBrowsingToggleDescription)
                  ),
                }),
              }),
            o &&
              (0, l.jsx)(e0, {
                children: (0, l.jsx)(eG, {
                  label: t.formatMessage(e3.betaPluginToggleLabel),
                  disabled: y,
                  enabled: y ? (null == m ? void 0 : m.enabled) : u,
                  onChange: function (e) {
                    p({ feature: eN.tr.PLUGINS, enabled: e });
                  },
                  description: (0, l.jsx)(
                    b.Z,
                    (0, h._)({}, e3.betaPluginToggleDescription)
                  ),
                }),
              }),
            c &&
              (0, l.jsx)(e0, {
                children: (0, l.jsx)(eG, {
                  label: t.formatMessage(e3.betaCodeInterpreterToggleLabel),
                  disabled: x,
                  enabled: x ? (null == m ? void 0 : m.enabled) : d,
                  onChange: function (e) {
                    p({ feature: eN.tr.CODE_INTERPRETER, enabled: e });
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
      function eG(e) {
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
      function eJ(e) {
        var t = e.color,
          n = e.disabled,
          r = e.label,
          a = e.buttonLabel,
          i = e.onClick;
        return (0, l.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            (0, l.jsx)("div", { children: r }),
            (0, l.jsx)(es.z, {
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
            (0, l.jsxs)(eI.Z.Root, {
              value: t,
              onValueChange: function (e) {
                return n(e);
              },
              children: [
                (0, l.jsxs)(eI.Z.Trigger, {
                  children: [
                    (0, l.jsx)(eI.Z.Value, {}),
                    (0, l.jsx)(eI.Z.Icon, {}),
                  ],
                }),
                (0, l.jsx)(eI.Z.Portal, {
                  children: (0, l.jsxs)(eI.Z.Content, {
                    children: [
                      (0, l.jsx)(eI.Z.Item, {
                        value: "system",
                        children: (0, l.jsx)(b.Z, (0, h._)({}, e3.system)),
                      }),
                      (0, l.jsx)(eI.Z.Item, {
                        value: "dark",
                        children: (0, l.jsx)(b.Z, (0, h._)({}, e3.dark)),
                      }),
                      (0, l.jsx)(eI.Z.Item, {
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
      function eY(e) {
        var t = e.onClose,
          n = e.onDeleteHistory,
          r = (0, D.Z)();
        return (0, l.jsx)(Y.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: r.formatMessage(e3.deleteHistoryModalTitle),
          primaryButton: (0, l.jsx)(O.ZP.Button, {
            title: r.formatMessage(e3.deleteHistoryModalConfirm),
            color: "primary",
            onClick: function () {
              n(), t();
            },
          }),
          secondaryButton: (0, l.jsx)(O.ZP.Button, {
            title: r.formatMessage(e3.deleteHistoryModalCancel),
            color: "neutral",
            onClick: t,
          }),
        });
      }
      function eQ(e) {
        var t = e.onClose,
          n = (0, D.Z)(),
          r = (0, J.kP)().session,
          a = null == r ? void 0 : r.accessToken,
          i = (0, u.useCallback)(
            function () {
              try {
                C.ZP.submitDataExport(a).then(function () {
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
        return (0, l.jsx)(Y.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: n.formatMessage(e3.dataExportModalTitle),
          primaryButton: (0, l.jsx)(O.ZP.Button, {
            title: n.formatMessage(e3.dataExportModalConfirm),
            color: "primary",
            onClick: i,
          }),
          secondaryButton: (0, l.jsx)(O.ZP.Button, {
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
      function eK(e) {
        var t = e.value,
          n = e.icon,
          r = e.label,
          a = (0, f.w$)();
        return (0, l.jsxs)(eM.xz, {
          className: (0, F.Z)(
            "group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm radix-state-active:bg-gray-800 radix-state-active:text-white dark:text-gray-500 dark:radix-state-active:text-white",
            { "flex-1 items-center justify-center": !a }
          ),
          value: t,
          children: [
            (0, l.jsx)(M.ZP, {
              icon: n,
              strokeWidth: 0,
              className:
                "h-5 w-5 fill-gray-800 group-radix-state-active:fill-white dark:fill-gray-500",
            }),
            (0, l.jsx)("div", { children: r }),
          ],
        });
      }
      function eX(e) {
        var t = e.value,
          n = e.children;
        return (0, l.jsx)(eM.VY, {
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
          r = (0, D.Z)(),
          a = (0, J.kP)().session,
          i = null == a ? void 0 : a.accessToken,
          s =
            null == a
              ? void 0
              : null === (t = a.user) || void 0 === t
              ? void 0
              : t.email,
          o = (0, S._)((0, u.useState)(""), 2),
          c = o[0],
          d = o[1],
          f = (0, S._)((0, u.useState)(""), 2),
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
                  ? C.ZP.deactivateAccount(i).then(function () {
                      (0, J.w7)();
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
            (0, J.w7)();
          }, []),
          w = "DELETE" === g && (void 0 === s || c === s),
          j = (0, S._)(
            (0, u.useState)(function () {
              return p();
            }),
            1
          )[0],
          k = (0, _.e2)();
        return (0, l.jsx)(Y.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: r.formatMessage(e3.deleteAccountTitle),
          closeButton: (0, l.jsx)(O.ZP.CloseButton, { onClose: n }),
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
                  (null == k ? void 0 : k.purchase_origin_platform) ===
                    eF._4.MOBILE_IOS &&
                    (0, l.jsx)("li", {
                      children: (0, l.jsx)(
                        b.Z,
                        (0, h._)({}, e3.iapSubscriptionWarning)
                      ),
                    }),
                ],
              }),
              j
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      void 0 !== s
                        ? (0, l.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              (0, l.jsx)(e2, {
                                children: (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, e3.typeEmailLabel)
                                ),
                              }),
                              (0, l.jsx)(eS.Z, {
                                value: c,
                                placeholder: s,
                                name: "email",
                                onChange: function (e) {
                                  d(e.target.value);
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
                          (0, l.jsx)(eS.Z, {
                            value: g,
                            onChange: function (e) {
                              m(e.target.value);
                            },
                            name: "delete",
                            className: "mb-4",
                          }),
                        ],
                      }),
                      (0, l.jsx)(es.z, {
                        color: w ? "danger" : "disabled",
                        onClick: v,
                        disabled: !w,
                        className: "w-full",
                        children: w
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsx)(M.ZP, { icon: x.BJv }),
                                " ",
                                (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, e3.deleteAccountButtonLabel)
                                ),
                              ],
                            })
                          : (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsx)(M.ZP, { icon: x.UIZ }),
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
                      (0, l.jsx)(es.z, {
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
      ((a = s || (s = {})).General = "General"),
        (a.BetaFeatures = "BetaFeatures"),
        (a.DataControls = "DataControls");
      var e2 = c.Z.label(eW()),
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
        e4 = (0, y.vU)({
          textareaPlaceholder: {
            id: "userContextModal.textareaPlaceholder",
            defaultMessage: "Your response here…",
            description: "placeholder for user context textareas",
          },
          tipsHeader: {
            id: "userContextModal.tipsHeader",
            defaultMessage: "Thought Starters:",
            description: "header for user context tips",
          },
          aboutUserTips: {
            id: "userContextModal.aboutUserTip",
            defaultMessage:
              "• Where do you live?\n• What do you do for work?\n• What are your hobbies and interests?\n• What are your dietary preferences?\n• What subjects can you talk about for hours?\n• What are some goals you have?",
            description: "tips for user context about you",
          },
          modelTips: {
            id: "userContextModal.modelTip",
            defaultMessage:
              "• How formal or casual should ChatGPT be?\n• How long or short should responses generally be?\n• How do you want to be addressed?\n• Should ChatGPT have opinions on topics or remain neutral?",
            description: "tips for user context about you",
          },
          save: {
            id: "userContextModal.save",
            defaultMessage: "Save",
            description: "save button for my profile modal",
          },
          cancel: {
            id: "userContextModal.cancel",
            defaultMessage: "Cancel",
            description: "Cancel button for user context modal",
          },
          aboutYouHelpText: {
            id: "userContextModal.aboutYouHelpText",
            defaultMessage:
              "What should ChatGPT know about you to provide better responses?",
            description: "help text for about you section of user context",
          },
          modelHelpText: {
            id: "userContextModal.modelHelpText",
            defaultMessage: "How would you like ChatGPT to respond?",
            description: "help text for about you section of user context",
          },
          profileTitle: {
            id: "userContextModal.title",
            defaultMessage: "Help ChatGPT get to know you better",
            description: "title for user context modal",
          },
        }),
        e5 = (0, U.ZP)(function () {
          return { aboutUserMessage: "", aboutModelMessage: "" };
        }),
        e7 = {
          setAboutUserMessage: function (e) {
            e5.setState({ aboutUserMessage: e });
          },
          setAboutModelMessage: function (e) {
            e5.setState({ aboutModelMessage: e });
          },
        };
      function e8() {
        var e = e5(),
          t = e.aboutUserMessage,
          n = e.aboutModelMessage,
          r = (0, d.tN)(function (e) {
            return e.activeModals.has(d.B.UserContext);
          }),
          a = te(t) || te(n),
          i = function () {
            return d.vm.closeModal(d.B.UserContext);
          },
          s = (0, J.kP)(),
          o = s.session,
          c = s.loading,
          f = (0, u.useCallback)(
            function () {
              C.ZP.createOrUpdateUserSystemMessage(
                (null == o ? void 0 : o.accessToken) || "",
                { aboutUserMessage: t, aboutModelMessage: n }
              ),
                i();
            },
            [n, t, null == o ? void 0 : o.accessToken]
          ),
          g = (0, _.hz)();
        (0, ev.a)(
          [null == o ? void 0 : o.accessToken],
          function () {
            return C.ZP.getUserSystemMessage(
              (null == o ? void 0 : o.accessToken) || ""
            );
          },
          {
            enabled: !!(
              !c &&
              (null == o ? void 0 : o.accessToken) &&
              g.has("system_message2")
            ),
            onSuccess: function (e) {
              var t, n;
              e7.setAboutUserMessage(
                null !== (t = null == e ? void 0 : e.about_user_message) &&
                  void 0 !== t
                  ? t
                  : ""
              ),
                e7.setAboutModelMessage(
                  null !== (n = null == e ? void 0 : e.about_model_message) &&
                    void 0 !== n
                    ? n
                    : ""
                );
            },
            onError: function () {
              ep.m.danger("Failed to get your system instructions");
            },
          }
        );
        var m = (0, D.Z)();
        return (0, l.jsxs)(Y.Z, {
          isOpen: r,
          onClose: i,
          type: "success",
          size: "custom",
          className: "max-w-2xl",
          title: m.formatMessage(e4.profileTitle),
          closeButton: (0, l.jsx)(O.ZP.CloseButton, { onClose: i }),
          secondaryButton: (0, l.jsx)(O.ZP.Button, {
            onClick: i,
            children: (0, l.jsx)(b.Z, (0, h._)({}, e4.cancel)),
          }),
          primaryButton: (0, l.jsx)(O.ZP.Button, {
            onClick: function () {
              if (a) {
                ep.m.danger(
                  "Please limit your responses to ".concat(
                    e6,
                    " characters or less."
                  )
                );
                return;
              }
              f();
            },
            color: "primary",
            visuallyDisabled: a,
            children: (0, l.jsx)(b.Z, (0, h._)({}, e4.save)),
          }),
          children: [
            (0, l.jsx)("p", {
              className: "text-muted pb-3 pt-2 text-sm text-gray-600",
              children: (0, l.jsx)(b.Z, (0, h._)({}, e4.aboutYouHelpText)),
            }),
            (0, l.jsx)(tt, {
              className: "mb-3",
              tip: (0, l.jsx)(e9, {
                children: (0, l.jsx)(b.Z, (0, h._)({}, e4.aboutUserTips)),
              }),
              placeholder: m.formatMessage(e4.textareaPlaceholder),
              value: t,
              onChange: function (e) {
                return e7.setAboutUserMessage(e.target.value);
              },
            }),
            (0, l.jsx)("p", {
              className: "text-muted py-3 text-sm text-gray-600",
              children: (0, l.jsx)(b.Z, (0, h._)({}, e4.modelHelpText)),
            }),
            (0, l.jsx)(tt, {
              tip: (0, l.jsx)(e9, {
                children: (0, l.jsx)(b.Z, (0, h._)({}, e4.modelTips)),
              }),
              placeholder: m.formatMessage(e4.textareaPlaceholder),
              value: n,
              onChange: function (e) {
                return e7.setAboutModelMessage(e.target.value);
              },
            }),
          ],
        });
      }
      var e9 = function (e) {
          var t = e.children;
          return (0, l.jsxs)("div", {
            className: "whitespace-pre-line",
            children: [
              (0, l.jsx)("strong", {
                children: (0, l.jsx)(b.Z, (0, h._)({}, e4.tipsHeader)),
              }),
              (0, l.jsx)("br", {}),
              t,
            ],
          });
        },
        e6 = 500,
        te = function (e) {
          return e.length > e6;
        },
        tt = function (e) {
          var t = e.onChange,
            n = e.placeholder,
            r = e.value,
            a = e.tip,
            i = e.className,
            s = (0, u.useRef)(null),
            o = !(0, f.oc)(),
            c = (0, S._)((0, u.useState)(!1), 2),
            d = c[0],
            h = c[1],
            g = (0, S._)((0, u.useState)(o), 2),
            m = g[0],
            p = g[1],
            v = te(r);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(Y.Z, {
                isOpen: o && !m,
                type: "success",
                size: "custom",
                className: "max-w-lg",
                title: "",
                closeButton: (0, l.jsx)(O.ZP.CloseButton, {
                  onClose: function () {
                    p(!0);
                  },
                }),
                onClose: function () {
                  p(!0);
                },
                primaryButton: (0, l.jsx)(O.ZP.Button, {
                  color: "primary",
                  onClick: function () {
                    return p(!0);
                  },
                  children: "OK",
                }),
                children: a,
              }),
              (0, l.jsxs)(el.fC, {
                open: !o && d && !m,
                children: [
                  (0, l.jsxs)("div", {
                    className: i,
                    children: [
                      (0, l.jsx)(el.xz, {
                        asChild: !0,
                        children: (0, l.jsx)("textarea", {
                          ref: s,
                          className: (0, F.Z)(
                            "w-full	resize-none rounded p-4 placeholder:text-gray-300 dark:bg-gray-800",
                            v && "border-red-500 focus:border-red-500",
                            !v && "border-gray-100 focus:border-brand-green"
                          ),
                          placeholder: n,
                          rows: 6,
                          value: r,
                          onChange: t,
                          onBlur: function () {
                            h(!1);
                          },
                          onFocus: function () {
                            h(!0);
                          },
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: (0, F.Z)(
                          "flex items-center justify-between px-1 text-xs",
                          v ? "text-red-600" : "text-gray-400"
                        ),
                        children: [
                          (0, l.jsxs)("div", { children: [r.length, "/", e6] }),
                          (0, l.jsx)("button", {
                            className: (0, F.Z)(
                              "flex items-center gap-1",
                              d ? "text-gray-400" : "text-gray-200"
                            ),
                            onClick: function () {
                              var e;
                              null === (e = s.current) ||
                                void 0 === e ||
                                e.focus(),
                                p(!m);
                            },
                            children: m
                              ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                    "Show tips ",
                                    (0, l.jsx)(M.ZP, {
                                      size: "xsmall",
                                      icon: x.rDJ,
                                    }),
                                  ],
                                })
                              : (0, l.jsxs)(l.Fragment, {
                                  children: [
                                    "Hide tips ",
                                    (0, l.jsx)(M.ZP, {
                                      size: "xsmall",
                                      icon: x.rzC,
                                    }),
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)(el.h_, {
                    children: (0, l.jsx)(el.VY, {
                      side: "right",
                      sideOffset: 12,
                      className:
                        "relative animate-slideLeftAndFade select-none rounded-xl border-gray-100 bg-white p-4 text-sm text-gray-600 shadow-[0px_4px_14px_rgba(0,0,0,0.06)] dark:bg-gray-900 dark:text-white",
                      onOpenAutoFocus: function (e) {
                        e.preventDefault();
                      },
                      onCloseAutoFocus: function (e) {
                        e.preventDefault();
                      },
                      children: a,
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        tn = new Set(["/admin"]),
        tr = n(94860),
        ta = n(9849),
        ti = n(57101),
        ts = n(70788),
        to = n(16578),
        tl = n.n(to),
        tu = n(85023);
      function tc(e) {
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
      function td() {
        var e = (0, o._)(["my-1.5 h-px bg-white/20"]);
        return (
          (td = function () {
            return e;
          }),
          e
        );
      }
      function tf(e) {
        var t = e.showCustomerPortalMenuItem,
          n = e.onClickCustomerPortal,
          r = e.onClickSettings,
          a = e.onDeleteHistory;
        return (0, l.jsxs)(ta.v, {
          as: "div",
          className: "group relative",
          children: [
            (0, l.jsx)(ty, {}),
            (0, l.jsx)(tc, {
              children: (0, l.jsx)(ta.v.Items, {
                className:
                  "absolute bottom-full left-0 z-20 mb-2 w-full overflow-hidden rounded-md bg-gray-950 pb-1.5 pt-1 outline-none",
                children: (0, l.jsx)(tx, {
                  showCustomerPortalMenuItem: t,
                  onClickCustomerPortal: n,
                  onClickSettings: r,
                  onDeleteHistory: a,
                }),
              }),
            }),
          ],
        });
      }
      function th() {
        var e = (0, _.hz)(),
          t = (0, J.kP)().session,
          n = null == t ? void 0 : t.user,
          r = (0, K.Ix)(),
          a = (0, K._O)().data;
        return e.has("business_seats") && !(a.length <= 1) && n
          ? (0, l.jsx)(l.Fragment, {
              children: (0, l.jsx)(tg, {
                onClick: function () {
                  ee.setIsModalOpen(!0);
                },
                children: (0, l.jsxs)("div", {
                  className: "flex w-full flex-col gap-2",
                  children: [
                    (0, l.jsx)(et, { className: "h-10 w-10" }),
                    (0, l.jsxs)("div", {
                      className:
                        "flex w-full items-center justify-between gap-2",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "flex flex-col items-start gap-1",
                          children: [
                            (0, l.jsx)("div", {
                              className: "text-base capitalize text-white",
                              children: r,
                            }),
                            (0, l.jsx)("div", {
                              className: "text-sm text-gray-500",
                              children: null == n ? void 0 : n.email,
                            }),
                          ],
                        }),
                        (0, l.jsx)("div", {
                          children: (0, l.jsx)(M.ZP, {
                            icon: ts.Z,
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
      function tg(e) {
        var t = e.onClick,
          n = e.href,
          r = e.target,
          a = e.children;
        return (0, l.jsx)(ta.v.Item, {
          children: function (e) {
            var i = e.active;
            return (0, l.jsx)(tr.ZB, {
              as: void 0 !== n ? "a" : "button",
              onClick: t,
              href: n,
              target: r,
              className: (0, F.Z)(i ? "bg-gray-700" : "hover:bg-gray-700"),
              children: a,
            });
          },
        });
      }
      function tm(e) {
        var t = e.href,
          n = e.children;
        return (0, l.jsx)(ta.v.Item, {
          children: function (e) {
            var r = e.active;
            return (0, l.jsx)(tl(), {
              href: t,
              legacyBehavior: !0,
              children: (0, l.jsx)(tr.ZB, {
                className: (0, F.Z)(r ? "bg-gray-700" : "hover:bg-gray-700"),
                children: n,
              }),
            });
          },
        });
      }
      var tp = "oai/apps/hasSeenUserSurvey6_23";
      function tv() {
        var e = (0, D.Z)(),
          t = (0, f.w$)(),
          n = (0, S._)((0, u.useState)(!1), 2),
          r = n[0],
          a = n[1],
          i = tu.m.getItem(tp);
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
                              (0, h._)({}, tj.surveyTitle)
                            ),
                          }),
                          (0, l.jsx)("div", {
                            children: (0, l.jsx)(
                              b.Z,
                              (0, h._)({}, tj.surveyDescription)
                            ),
                          }),
                        ],
                      }),
                      (0, l.jsx)("button", {
                        className: "text-white/25 hover:text-white/40",
                        onClick: function () {
                          a(!0), tu.m.setItem(tp, !0);
                        },
                        "aria-label": e.formatMessage(tj.surveyDismiss),
                        children: (0, l.jsx)(M.QF, {
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
                      tu.m.setItem(tp, !0), a(!0);
                    },
                    children: [
                      (0, l.jsx)(M.ZP, { size: "small", icon: x.AlO }),
                      (0, l.jsx)(b.Z, (0, h._)({}, tj.takeSurveyButton)),
                    ],
                  }),
                ],
              }),
            });
      }
      function tx(e) {
        var t = e.showCustomerPortalMenuItem,
          n = e.onClickCustomerPortal,
          r = e.onClickSettings,
          a = e.onDeleteHistory,
          i = (0, w.WS)(),
          s = (0, S._)((0, u.useState)(!1), 2),
          o = s[0],
          c = s[1],
          f = (0, u.useCallback)(
            function () {
              c(!1), a();
            },
            [a]
          ),
          g = (0, N.MO)().conversations.length > 0,
          m = (0, K.sN)(K.F_.isBusinessWorkspace),
          p = (0, K.sN)(K.F_.workspaceId),
          v = (0, _.hz)(),
          y = v.has(E.G_),
          C = (0, eN.Fl)().isPluginsAvailable;
        return (0, l.jsxs)("nav", {
          children: [
            y && (0, l.jsx)(tv, {}),
            (0, l.jsx)(th, {}),
            (0, l.jsxs)(tg, {
              as: "a",
              href: "https://help.openai.com/en/collections/3742473-chatgpt",
              target: "_blank",
              onClick: function () {
                i(j.s6.clickFaqLink);
              },
              children: [
                (0, l.jsx)(M.ZP, { icon: x.AlO }),
                (0, l.jsx)(b.Z, (0, h._)({}, tj.helpAndFaq)),
              ],
            }),
            (0, l.jsx)(tb, {}),
            g &&
              (0, l.jsxs)(tg, {
                onClick: function (e) {
                  o ? f() : (c(!0), e.preventDefault());
                },
                children: [
                  (0, l.jsx)(M.ZP, { icon: o ? x.UgA : x.Ybf }),
                  o
                    ? (0, l.jsx)(
                        b.Z,
                        (0, h._)({}, tj.confirmClearConversations)
                      )
                    : (0, l.jsx)(b.Z, (0, h._)({}, tj.clearConversations)),
                ],
              }),
            m &&
              (0, l.jsxs)(tm, {
                href: "/admin?workspaceId=".concat(p),
                children: [
                  (0, l.jsx)(M.ZP, { icon: ti.Z }),
                  (0, l.jsx)(b.Z, (0, h._)({}, tj.myWorkspaceSettings)),
                ],
              }),
            t &&
              n &&
              (0, l.jsxs)(tg, {
                onClick: n,
                children: [
                  (0, l.jsx)(M.ZP, { icon: x.fzv }),
                  (0, l.jsx)(b.Z, (0, h._)({}, tj.myPlan)),
                ],
              }),
            v.has("system_message2") &&
              (0, l.jsxs)(tg, {
                onClick: function () {
                  return d.vm.openModal(d.B.UserContext);
                },
                children: [
                  (0, l.jsx)(M.ZP, { icon: x.yK7 }),
                  (0, l.jsx)(b.Z, (0, h._)({}, tj.myProfile)),
                ],
              }),
            v.has("files_list_ui") &&
              C &&
              (0, l.jsxs)(tg, {
                onClick: function () {
                  return d.vm.openFilesModal();
                },
                children: [
                  (0, l.jsx)(M.ZP, { icon: x.NOg }),
                  (0, l.jsx)(b.Z, (0, h._)({}, tj.myFiles)),
                ],
              }),
            (0, l.jsxs)(tg, {
              onClick: r,
              children: [
                (0, l.jsx)(M.ZP, { icon: x.nbt }),
                (0, l.jsx)(b.Z, (0, h._)({}, tj.settings)),
              ],
            }),
            (0, l.jsx)(tb, {}),
            (0, l.jsxs)(tg, {
              onClick: function () {
                i(j.s6.clickLogOut, { eventSource: "mouse" }), (0, J.w7)();
              },
              children: [
                (0, l.jsx)(M.ZP, { icon: x.xqh }),
                (0, l.jsx)(b.Z, (0, h._)({}, tj.logOut)),
              ],
            }),
          ],
        });
      }
      var tb = c.Z.div(td());
      function ty() {
        var e = (0, J.kP)().session;
        return (0, _.hz)().has("business_seats")
          ? (0, l.jsx)(tw, {})
          : (null == e ? void 0 : e.user)
          ? (0, l.jsxs)(ta.v.Button, {
              className:
                "flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800",
              children: [
                (0, l.jsx)("div", {
                  className: "-ml-0.5 w-5 flex-shrink-0",
                  children: (0, l.jsx)($.Yt, { user: e.user, size: "small" }),
                }),
                (0, l.jsx)("div", {
                  className:
                    "grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white",
                  children: e.user.name,
                }),
                (0, l.jsx)(M.ZP, {
                  icon: x.K9M,
                  size: "small",
                  className: "flex-shrink-0 text-gray-500",
                }),
              ],
            })
          : null;
      }
      function tw() {
        var e = (0, K.Ix)();
        return (0, l.jsxs)(ta.v.Button, {
          className:
            "flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800",
          children: [
            (0, l.jsx)("div", {
              className: "-ml-0.5 w-5 flex-shrink-0",
              children: (0, l.jsx)(et, {
                className: "flex h-5 w-5",
                iconSize: "xsmall",
              }),
            }),
            (0, l.jsx)("div", {
              className:
                "grow overflow-hidden text-ellipsis whitespace-nowrap text-left capitalize text-white",
              children: e,
            }),
            (0, l.jsx)(M.ZP, {
              icon: x.K9M,
              size: "small",
              className: "flex-shrink-0 text-gray-500",
            }),
          ],
        });
      }
      var tj = (0, y.vU)({
        helpAndFaq: {
          id: "navigation.helpAndFaq",
          defaultMessage: "Help & FAQ",
          description: "Help & FAQ menu item",
        },
        confirmClearConversations: {
          id: "navigation.confirmClearConversations",
          defaultMessage: "Confirm clear conversations",
          description: "Confirmation text for clearing conversations",
        },
        clearConversations: {
          id: "navigation.clearConversations",
          defaultMessage: "Clear conversations",
          description: "Clear conversations menu item",
        },
        myWorkspaceSettings: {
          id: "navigation.myWorkspaceSettings",
          defaultMessage: "Workspace settings",
          description: "Workspace settings menu item",
        },
        myPlan: {
          id: "navigation.myPlan",
          defaultMessage: "My plan",
          description: "My plan menu item",
        },
        myProfile: {
          id: "navigation.myProfile",
          defaultMessage: "My profile",
          description: "Profile menu item",
        },
        myFiles: {
          id: "navigation.myFiles",
          defaultMessage: "My files",
          description: "Files menu item",
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
      function tC() {
        var e = (0, o._)([
          "flex-col flex-1 transition-opacity duration-500\n  ",
          "\n  ",
          "",
        ]);
        return (
          (tC = function () {
            return e;
          }),
          e
        );
      }
      function t_(e) {
        var t = e.onClickAccountPayment,
          n = e.showAccountPaymentMenuItem,
          r = e.onClickCustomerPortal,
          a = e.showCustomerPortalMenuItem,
          i = e.onDeleteHistory,
          s = e.onNewThread,
          o = e.children,
          c = (0, D.Z)(),
          g = (0, _.hz)(),
          m = g.has(E.Ue),
          p = (0, f.w$)(),
          y = (0, v.useRouter)(),
          w = (0, u.useRef)(null),
          j = (0, S._)((0, u.useState)(!1), 2),
          C = j[0],
          k = j[1],
          T = (0, u.useContext)(L.QL),
          N = T.historyDisabled,
          I = T.toggleHistoryDisabled,
          A = T.getModifiedSettings,
          R = T.unsetModifiedSettings,
          B = A(),
          U = (0, S._)((0, u.useState)(B), 2),
          O = U[0],
          q = U[1],
          z = (0, u.useCallback)(function () {
            q(!0);
          }, []),
          W = (0, u.useCallback)(
            function () {
              q(!1), R();
            },
            [R]
          ),
          H = (0, u.useCallback)(
            function () {
              null == s || s(), I();
            },
            [s, I]
          ),
          V = (0, u.useMemo)(
            function () {
              return (0, l.jsxs)("div", {
                className: (0, F.Z)(
                  "absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500",
                  N ? "visible max-h-72" : "invisible max-h-0"
                ),
                children: [
                  (0, l.jsxs)("div", {
                    className: "bg-gray-900 px-4 py-3",
                    children: [
                      (0, l.jsx)("div", {
                        className: "p-1 text-sm text-gray-100",
                        children: (0, l.jsx)(
                          b.Z,
                          (0, h._)({}, tM.chatHistoryOff)
                        ),
                      }),
                      (0, l.jsx)("div", {
                        className: "p-1 text-xs text-gray-500",
                        children: (0, l.jsx)(
                          b.Z,
                          (0, P._)((0, h._)({}, tM.chatHistoryOffDescription), {
                            values: {
                              learnMore: (0, l.jsx)("a", {
                                href: "https://help.openai.com/en/articles/7730893",
                                target: "_blank",
                                className: "underline",
                                rel: "noreferrer",
                                children: (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, tM.learnMore)
                                ),
                              }),
                              b: function (e) {
                                return (0, l.jsx)("strong", { children: e });
                              },
                            },
                          })
                        ),
                      }),
                      (0, l.jsxs)(es.z, {
                        className: "mt-4 w-full",
                        onClick: H,
                        color: "primary",
                        size: "medium",
                        children: [
                          (0, l.jsx)(M.ZP, { icon: x.$IY }),
                          (0, l.jsx)(b.Z, (0, h._)({}, tM.enableChatHistory)),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "h-24 bg-gradient-to-t from-gray-900/0 to-gray-900",
                  }),
                ],
              });
            },
            [N, H]
          ),
          G = (0, u.useMemo)(
            function () {
              var e = [],
                t = null;
              return (
                u.Children.forEach(o, function (n) {
                  u.isValidElement(n) &&
                    (n.type === t_.PrimaryActionDesktop ? (t = n) : e.push(n));
                }),
                { primaryActionButton: t, navigationContent: e }
              );
            },
            [o]
          ),
          J = G.primaryActionButton,
          $ = G.navigationContent;
        (0, u.useEffect)(
          function () {
            var e;
            w.current &&
              k(
                (e = w.current).scrollHeight > e.clientHeight ||
                  e.scrollWidth > e.clientWidth
              );
          },
          [o]
        );
        var Y = !(0, _.nR)() && !g.has("disable_upgrade_ui"),
          Q = (0, _.KQ)(),
          K = (0, d.tN)(function (e) {
            return e.isFilesModalOpen;
          }),
          X = (0, u.useMemo)(
            function () {
              var e = y.route;
              return !tn.has(e);
            },
            [y.route]
          );
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className:
                "scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20",
              children: [
                (0, l.jsx)(Z.f, {
                  asChild: !0,
                  children: (0, l.jsx)("h2", {
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, tM.chatHistoryLabel)
                    ),
                  }),
                }),
                (0, l.jsxs)("nav", {
                  className: "flex h-full w-full flex-col p-2",
                  "aria-label": c.formatMessage(tM.chatHistoryLabel),
                  children: [
                    (0, l.jsxs)("div", {
                      className: "mb-1 flex flex-row gap-2",
                      children: [
                        J,
                        m &&
                          p &&
                          (0, l.jsx)(eE.u, {
                            side: "right",
                            label: c.formatMessage(tM.closeSidebar),
                            children: (0, l.jsxs)(tr.zV, {
                              onClick: d.vm.toggleDesktopNavCollapsed,
                              className:
                                "w-11 flex-shrink-0 items-center justify-center",
                              children: [
                                (0, l.jsx)(M.ZP, { icon: x.iYc }),
                                (0, l.jsx)(Z.f, {
                                  children: (0, l.jsx)(
                                    b.Z,
                                    (0, h._)({}, tM.closeSidebar)
                                  ),
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                    V,
                    (0, l.jsx)(tk, {
                      ref: w,
                      $offsetScrollbar: C,
                      $disableScroll: N,
                      children: $,
                    }),
                    (0, l.jsxs)("div", {
                      className: "border-t border-white/20 pt-2 empty:hidden",
                      children: [
                        n &&
                          (0, l.jsx)(tr.Vq, {
                            onClick: t,
                            className: "rounded-md",
                            children: (0, l.jsxs)("span", {
                              className: "flex w-full flex-row justify-between",
                              children: [
                                (0, l.jsxs)("span", {
                                  className:
                                    "gold-new-button flex items-center gap-3",
                                  children: [
                                    (0, l.jsx)(M.ZP, { icon: x.fzv }),
                                    Q
                                      ? (0, l.jsx)(
                                          b.Z,
                                          (0, h._)({}, tM.renewPlus)
                                        )
                                      : (0, l.jsx)(
                                          b.Z,
                                          (0, h._)({}, tM.upgradeToPlus)
                                        ),
                                  ],
                                }),
                                Y &&
                                  !Q &&
                                  (0, l.jsx)("span", {
                                    className:
                                      "rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800",
                                    children: (0, l.jsx)(
                                      b.Z,
                                      (0, h._)({}, tM.newLabel)
                                    ),
                                  }),
                              ],
                            }),
                          }),
                        X &&
                          (0, l.jsx)(tf, {
                            showCustomerPortalMenuItem: a,
                            onClickCustomerPortal: r,
                            onClickSettings: z,
                            onDeleteHistory: i,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            O &&
              (0, l.jsx)(eH, {
                onClose: W,
                onToggleHistoryDisabled: s,
                onDeleteHistory: i,
              }),
            g.has("files_list_ui") && K && (0, l.jsx)(ek, {}),
            g.has("system_message2") && (0, l.jsx)(e8, {}),
            g.has("business_seats") && (0, l.jsx)(ea, { onResetThread: s }),
          ],
        });
      }
      (t_.PrimaryActionDesktop = function (e) {
        var t = e.onClick,
          n = (0, I._)(e, ["onClick"]);
        return (0, l.jsx)(
          tr.zV,
          (0, h._)({ onClick: t, className: "flex-shrink-0 flex-grow" }, n)
        );
      }),
        (t_.PrimaryButtonMobile = function (e) {
          var t = e.onClick,
            n = (0, I._)(e, ["onClick"]);
          return (0, l.jsx)(
            "button",
            (0, h._)({ type: "button", className: "px-3", onClick: t }, n)
          );
        });
      var tk = c.Z.div(
          tC(),
          function (e) {
            return e.$disableScroll
              ? "overflow-y-hidden opacity-20 pointer-events-none"
              : "overflow-y-auto";
          },
          function (e) {
            return e.$offsetScrollbar && "-mr-2";
          }
        ),
        tM = (0, y.vU)({
          upgradeToPlus: {
            id: "navigation.upgradeToPlus",
            defaultMessage: "Upgrade to Plus",
            description: "Upgrade to Plus menu item",
          },
          renewPlus: {
            id: "navigation.renewPlus",
            defaultMessage: "Renew Plus",
            description: "Renew Plus menu item",
          },
          closeSidebar: {
            id: "navigation.closeSidebar",
            defaultMessage: "Hide sidebar",
            description: "Hide sidebar button label",
          },
          chatHistoryLabel: {
            id: "navigation.chatHistoryLabel",
            defaultMessage: "Chat history",
            description: "Chat history label heading",
          },
          chatHistoryOff: {
            id: "navigation.chatHistoryOff",
            defaultMessage: "Chat History is off for this browser.",
            description: "Text indicating that chat history is turned off",
          },
          chatHistoryOffDescription: {
            id: "navigation.chatHistoryOffDescription",
            defaultMessage:
              "When history is turned off, new chats on this browser won't appear in your history on any of your devices, be used to train our models, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}",
            description: "Description for chat history being off",
          },
          learnMore: {
            id: "navigation.learnMore",
            defaultMessage: "Learn more",
            description: "Learn more link text",
          },
          enableChatHistory: {
            id: "navigation.enableChatHistory",
            defaultMessage: "Enable chat history",
            description: "Enable chat history button label",
          },
          newLabel: {
            id: "navigation.newLabel",
            defaultMessage: "NEW",
            description: "Label for new features or items",
          },
        }),
        tT = function (e) {
          var t = e.onClickAccountPayment,
            n = e.showAccountPaymentMenuItem,
            r = e.onClickCustomerPortal,
            a = e.showCustomerPortalMenuItem,
            i = e.onDeleteHistory,
            s = e.onNewThread,
            o = e.children;
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("div", {
              className: "flex h-full min-h-0 flex-col ",
              children: (0, l.jsx)(t_, {
                onClickAccountPayment: t,
                showAccountPaymentMenuItem: n,
                onClickCustomerPortal: r,
                showCustomerPortalMenuItem: a,
                onDeleteHistory: i,
                onNewThread: s,
                children: o,
              }),
            }),
          });
        },
        tN = function (e) {
          var t = e.onClickAccountPayment,
            n = e.showAccountPaymentMenuItem,
            r = e.onClickCustomerPortal,
            a = e.showCustomerPortalMenuItem,
            i = e.onDeleteHistory,
            s = e.onClose,
            o = e.sidebarOpen,
            c = e.onNewThread,
            d = e.children;
          return (0, l.jsx)(g.u.Root, {
            show: o,
            as: u.Fragment,
            children: (0, l.jsxs)(m.V, {
              as: "div",
              className: "relative",
              onClose: s,
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
                                onClick: s,
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "sr-only",
                                    children: (0, l.jsx)(
                                      b.Z,
                                      (0, h._)({}, tS.closeSidebar)
                                    ),
                                  }),
                                  (0, l.jsx)(M.ZP, {
                                    icon: x.q5L,
                                    size: "medium",
                                    className: "text-white",
                                    "aria-hidden": "true",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, l.jsx)(t_, {
                            onClickAccountPayment: t,
                            showAccountPaymentMenuItem: n,
                            onClickCustomerPortal: r,
                            showCustomerPortalMenuItem: a,
                            onDeleteHistory: i,
                            onNewThread: c,
                            children: d,
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
        tP = function (e) {
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
                    children: (0, l.jsx)(b.Z, (0, h._)({}, tS.openSidebar)),
                  }),
                  (0, l.jsx)(M.ZP, {
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
      function tI(e) {
        var t = e.onResetThread,
          n = e.children,
          r = (0, v.useRouter)(),
          a = (0, u.useRef)(null),
          i = (0, f.w$)(),
          s = (0, N.iF)(),
          o = (0, d.tN)(function (e) {
            return {
              activeSidebar: e.activeSidebar,
              isDesktopNavCollapsed: e.isDesktopNavCollapsed,
            };
          }),
          c = o.isDesktopNavCollapsed,
          h = o.activeSidebar,
          g = (0, _.nR)(),
          m = !0 === g,
          x = (0, w.WS)(),
          b = (0, T.t)(function (e) {
            return { setShowAccountPaymentModal: e.setShowAccountPaymentModal };
          }).setShowAccountPaymentModal,
          y = (0, u.useCallback)(
            function () {
              b(!0, function () {
                x(j.s6.clickSidebarAccountPaymentMenuItem);
              });
            },
            [x, b]
          ),
          M = (0, u.useCallback)(
            function () {
              x(j.s6.clickSidebarAccountPortalMenuItem),
                d.vm.openModal(d.B.AccountPortal);
            },
            [x]
          ),
          P = (0, u.useCallback)(
            function () {
              C.ZP.deleteConversations().then(function () {
                s();
              }),
                null == t || t(),
                "/" !== r.asPath && r.replace({ pathname: "/" });
            },
            [t, s, r]
          ),
          I = (0, k.g)(function (e) {
            return e.flags.isUserInCanPayGroup;
          }),
          S = !1 === g && I;
        return i
          ? (0, l.jsx)(p.E.div, {
              className: "dark flex-shrink-0 overflow-x-hidden bg-gray-900",
              ref: a,
              initial: !1,
              animate: {
                width: c ? 0 : "260px",
                transition: { duration: 0.165, ease: "easeOut" },
              },
              onAnimationStart: function () {
                a.current && (a.current.style.visibility = "visible");
              },
              onAnimationComplete: function () {
                a.current && c && (a.current.style.visibility = "hidden");
              },
              children: (0, l.jsx)("div", {
                className: "h-full w-[260px]",
                children: (0, l.jsx)(tT, {
                  onClickAccountPayment: y,
                  showAccountPaymentMenuItem: S,
                  onClickCustomerPortal: M,
                  showCustomerPortalMenuItem: m,
                  onDeleteHistory: P,
                  onNewThread: t,
                  children: n,
                }),
              }),
            })
          : (0, l.jsx)(tN, {
              onClose: function () {
                return d.vm.toggleActiveSidebar("mobile-nav");
              },
              sidebarOpen: "mobile-nav" === h,
              onClickAccountPayment: y,
              showAccountPaymentMenuItem: S,
              onClickCustomerPortal: M,
              showCustomerPortalMenuItem: m,
              onDeleteHistory: P,
              onNewThread: t,
              children: n,
            });
      }
      var tS = (0, y.vU)({
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
        tZ = n(37541);
      function tF() {
        var e = (0, o._)(["overflow-hidden w-full h-full relative flex z-0"]);
        return (
          (tF = function () {
            return e;
          }),
          e
        );
      }
      function tD() {
        var e = (0, o._)([
          "relative h-full w-full transition-width flex flex-col overflow-auto items-stretch",
        ]);
        return (
          (tD = function () {
            return e;
          }),
          e
        );
      }
      function tE(e) {
        var t = e.onResetThread,
          n = e.children,
          r = e.showNavigation,
          a = e.renderTitle,
          i = (0, f.w$)(),
          s = (0, u.useMemo)(
            function () {
              var e = [],
                t = null,
                r = null,
                a = null,
                i = null;
              return (
                u.Children.forEach(n, function (n) {
                  u.isValidElement(n) &&
                    (n.type === tE.NavigationContent
                      ? (t = n)
                      : n.type === tE.Sidebars
                      ? (r = n)
                      : n.type === tE.NavigationPrimaryActionDesktop
                      ? (a = n)
                      : n.type === tE.NavigationPrimaryActionMobile
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
          o = s.pageContent,
          c = s.navigationContent,
          h = s.sidebars,
          g = s.primaryAction,
          m = s.primaryActionMobile;
        return (0, l.jsxs)(tL, {
          children: [
            r &&
              (0, l.jsx)(tZ.Z, {
                children: (0, l.jsxs)(tI, {
                  onResetThread: t,
                  children: [g, c],
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
                      (0, l.jsx)(tZ.Z, {
                        children: (0, l.jsx)(tP, {
                          onClickOpenSidebar: function () {
                            return d.vm.toggleActiveSidebar("mobile-nav");
                          },
                          renderTitle: a,
                          children: m,
                        }),
                      }),
                    (0, l.jsx)(tA, { className: "flex-1", children: o }),
                  ],
                }),
                h,
              ],
            }),
          ],
        });
      }
      var tL = c.Z.div(tF()),
        tA = c.Z.main(tD());
      (tE.NavigationContent = function (e) {
        var t = e.children;
        return (0, l.jsx)(l.Fragment, { children: t });
      }),
        (tE.Sidebars = function (e) {
          var t = e.children;
          return (0, l.jsx)(l.Fragment, { children: t });
        }),
        (tE.NavigationPrimaryActionDesktop = t_.PrimaryActionDesktop),
        (tE.NavigationPrimaryActionMobile = t_.PrimaryButtonMobile);
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
        s = n(19841);
      n(70079);
      var o = n(34303);
      function l() {
        var e = (0, r._)([
          "relative top-[-3px] h-2 w-2 rotate-45 transform border-r border-b border-black/10 bg-gray-900 shadow-xs",
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
            o = e.withArrow,
            l = e.wide,
            u = e.interactive,
            d = e.usePortal,
            f = e.className,
            h = e.children,
            g = e.delayDuration,
            m = e.closeOnOutsideClick,
            p = (0, a.jsxs)(i.VY, {
              onPointerDownOutside:
                void 0 === m || m
                  ? void 0
                  : function (e) {
                      return e.preventDefault();
                    },
              side: void 0 === n ? "bottom" : n,
              sideOffset: void 0 === r ? 14 : r,
              className: (0, s.Z)(
                "relative rounded-lg border border-black/10 bg-gray-900 p-1 shadow-xs transition-opacity",
                void 0 !== l && l ? "max-w-sm" : "max-w-xs"
              ),
              children: [
                (0, a.jsx)("span", {
                  className:
                    "flex items-center whitespace-pre-wrap px-2 py-1 text-center text-sm font-medium normal-case text-white",
                  children: t,
                }),
                (void 0 === o || o) &&
                  (0, a.jsx)(i.Eh, {
                    asChild: !0,
                    children: (0, a.jsx)(c, {}),
                  }),
              ],
            });
          return (0, a.jsxs)(i.fC, {
            delayDuration: void 0 === g ? 300 : g,
            disableHoverableContent: !(void 0 !== u && u),
            children: [
              (0, a.jsx)(i.xz, {
                asChild: !0,
                children: (0, a.jsx)("span", { className: f, children: h }),
              }),
              void 0 === d || d ? (0, a.jsx)(i.h_, { children: p }) : p,
            ],
          });
        },
        c = o.Z.div(l());
    },
    11626: function (e, t, n) {
      n.d(t, {
        IS: function () {
          return I;
        },
        w_: function () {
          return T;
        },
        F_: function () {
          return N;
        },
        Ap: function () {
          return S;
        },
        bE: function () {
          return E;
        },
        Ix: function () {
          return F;
        },
        sN: function () {
          return M;
        },
        qH: function () {
          return Z;
        },
        _O: function () {
          return D;
        },
        Hj: function () {
          return P;
        },
      });
      var r = n(21722),
        a = n(96237),
        i = n(39324),
        s = n(39889),
        o = n(35250),
        l = n(24396),
        u = n(44544),
        c = n(70079),
        d = n(35290),
        f = n(75908),
        h = n(3001),
        g = n(81292),
        m = n(32787),
        p = n(32402),
        v = n(24274),
        x = n(64135),
        b = n(4337),
        y = n(34303);
      function w() {
        var e = (0, b._)([
          "bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase",
        ]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = (0, b._)(["bg-blue-200 text-blue-700"]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      var C = y.Z.span(w()),
        _ = (0, y.Z)(C)(j()),
        k = n(97688),
        M = (0, g.ZP)(function () {
          return { currentWorkspace: null };
        }),
        T = {
          setCurrentWorkspace: function (e) {
            M.setState({ currentWorkspace: e });
          },
        },
        N = {
          isPersonalWorkspace: function (e) {
            var t = e.currentWorkspace;
            return null != t && "personal" === t.structure;
          },
          isBusinessWorkspace: function (e) {
            var t = e.currentWorkspace;
            return null != t && "workspace" === t.structure;
          },
          isAdmin: function (e) {
            var t = e.currentWorkspace;
            return null != t && t.current_user_role === p.r3.ADMIN;
          },
          workspaceId: function (e) {
            var t = e.currentWorkspace;
            return null != t ? t.id : null;
          },
        };
      function P(e) {
        var t = (0, m.kP)().session,
          n = (0, x.hz)();
        return (0, l.a)({
          queryFn: (0, r._)(function () {
            return (0, s.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    v.ZP.getAccounts(null == t ? void 0 : t.accessToken).catch(
                      function (e) {
                        return k.m.danger("Failed to get workspaces"), e;
                      }
                    ),
                  ];
                case 1:
                  return [2, e.sent()];
              }
            });
          }),
          queryKey: ["workspaces"],
          enabled: !!(
            (null == t ? void 0 : t.accessToken) && n.has("business_seats")
          ),
          select: e,
        });
      }
      var I = function () {
        var e = M().currentWorkspace,
          t = (0, x.nR)();
        return (0, x.hz)().has("business_seats")
          ? (null == e ? void 0 : e.structure) === "personal" && t
            ? (0, o.jsx)(C, { children: "Plus" })
            : (null == e ? void 0 : e.structure) === "workspace"
            ? (0, o.jsx)(_, {
                children: (0, o.jsx)(d.Z, (0, i._)({}, L.businessPlanName)),
              })
            : null
          : t
          ? (0, o.jsx)(C, { children: "Plus" })
          : null;
      };
      function S() {
        var e = (0, f.Z)(),
          t = e.formatMessage(L.adminRoleName),
          n = e.formatMessage(L.standardRoleName);
        return (0, c.useMemo)(
          function () {
            var e;
            return (
              (e = {}),
              (0, a._)(e, p.r3.ADMIN, t),
              (0, a._)(e, p.r3.STANDARD, n),
              e
            );
          },
          [t, n]
        );
      }
      function Z(e) {
        var t = (0, f.Z)();
        return e
          ? "personal" === e.structure
            ? t.formatMessage(L.personalPlanName)
            : t.formatMessage(L.businessPlanName)
          : t.formatMessage(L.personalPlanName);
      }
      function F(e) {
        var t,
          n,
          r,
          a,
          i,
          s,
          o = (0, m.kP)().session,
          l = M().currentWorkspace,
          u = M(N.isPersonalWorkspace),
          c =
            ((n = (0, f.Z)()),
            null !== (t = null == l ? void 0 : l.name) && void 0 !== t
              ? t
              : n.formatMessage(L.defaultWorkspaceTitle)),
          d = (0, x.hz)(),
          h =
            null !==
              (s =
                null !==
                  (i =
                    null == o
                      ? void 0
                      : null === (r = o.user) || void 0 === r
                      ? void 0
                      : r.name) && void 0 !== i
                  ? i
                  : null == o
                  ? void 0
                  : null === (a = o.user) || void 0 === a
                  ? void 0
                  : a.email) && void 0 !== s
              ? s
              : null;
        return d.has("business_seats")
          ? e
            ? "personal" === e.structure
              ? h
              : e.name
            : l
            ? u
              ? h
              : c
            : h
          : h;
      }
      function D() {
        var e = P(function (e) {
            return e.items;
          }),
          t = e.data,
          n = void 0 === t ? [] : t,
          r = e.isLoading;
        return (
          (0, c.useEffect)(
            function () {
              var e = (0, u.getCookie)("_account");
              if ("string" != typeof e || "" === e) {
                var t = n.find(function (e) {
                  return "personal" === e.structure;
                });
                t && T.setCurrentWorkspace(t);
                return;
              }
              var r = n.find(function (t) {
                return t.id === e;
              });
              n.length > 0 &&
                (r ? T.setCurrentWorkspace(r) : T.setCurrentWorkspace(n[0]));
            },
            [n]
          ),
          (0, c.useMemo)(
            function () {
              return { data: n, isLoading: r };
            },
            [n, r]
          )
        );
      }
      function E(e) {
        var t = P(function (t) {
            return t.items.find(function (t) {
              return t.id === e;
            });
          }),
          n = t.data,
          r = t.isLoading;
        return !!n && !r && n.current_user_role === p.r3.ADMIN;
      }
      var L = (0, h.vU)({
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
    25422: function (e, t, n) {
      var r = n(39324),
        a = n(71209),
        i = n(70216),
        s = n(35250),
        o = n(53293),
        l = n(70079),
        u = n(1454),
        c = n(38317),
        d = n(62440),
        f = {
          Root: o.fC,
          Trigger: function (e) {
            return (0, s.jsx)(d.J7, (0, r._)({ $as: o.xz }, e));
          },
          Value: o.B4,
          Icon: function () {
            return (0, s.jsx)(o.JO, {
              children: (0, s.jsx)(c.ZP, { icon: u.bTu, size: "small" }),
            });
          },
          Portal: o.h_,
          Content: function (e) {
            var t = e.children,
              n = (0, i._)(e, ["children"]);
            return (0, s.jsxs)(
              d.ay,
              (0, a._)(
                (0, r._)(
                  {
                    $as: o.VY,
                    side: "bottom",
                    sideOffset: 4,
                    position: "popper",
                  },
                  n
                ),
                {
                  children: [
                    (0, s.jsx)(o.u_, {
                      className:
                        "flex h-8 cursor-default items-center justify-center bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200",
                      children: (0, s.jsx)(c.ZP, { icon: u.rH8 }),
                    }),
                    (0, s.jsx)(o.l_, { children: t }),
                    (0, s.jsx)(o.$G, {
                      className:
                        "flex h-8 cursor-default items-center justify-center bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200",
                      children: (0, s.jsx)(c.ZP, { icon: u.bTu }),
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
            s.jsx)(d.mS, (0, a._)((0, r._)({ $as: o.ck, ref: t }, l), { children: (0, s.jsx)(o.eT, { children: n }) }));
          }),
        };
      t.Z = f;
    },
    25345: function (e, t, n) {
      var r = n(39324),
        a = n(71209),
        i = n(35250),
        s = n(19841);
      t.Z = {
        Root: function (e) {
          var t = e.children,
            n = e.className;
          return (0, i.jsx)("div", {
            className: (0, s.Z)(
              "overflow-y-auto rounded-md border border-black/10 dark:border-white/10",
              n
            ),
            children: (0, i.jsx)("table", {
              className: "w-full border-separate border-spacing-0",
              children: t,
            }),
          });
        },
        Header: function (e) {
          var t = e.children;
          return (0, i.jsx)("thead", {
            children: (0, i.jsx)("tr", { children: t }),
          });
        },
        HeaderCell: function (e) {
          var t = e.textAlign,
            n = e.children,
            r = e.className;
          return (0, i.jsx)("th", {
            className: (0, s.Z)(
              "sticky top-0 rounded-t border-b border-black/10 bg-white px-4 py-2 font-medium text-gray-700 dark:border-white/10 dark:bg-gray-900 dark:text-gray-100",
              "left" === (void 0 === t ? "left" : t)
                ? "text-left"
                : "text-right",
              r
            ),
            children: n,
          });
        },
        Body: function (e) {
          var t = e.children;
          return (0, i.jsx)("tbody", { children: t });
        },
        Row: function (e) {
          var t = e.children,
            n = e.disabled,
            o = void 0 !== n && n;
          return (0, i.jsx)(
            "tr",
            (0, a._)((0, r._)({}, o ? { "data-disabled": !0 } : {}), {
              className: (0, s.Z)(o ? "pointer-events-none" : ""),
              children: t,
            })
          );
        },
        Cell: function (e) {
          var t = e.textAlign,
            n = e.children;
          return (0, i.jsx)("td", {
            className: (0, s.Z)(
              "border-b border-black/10 text-gray-600 dark:border-white/10 dark:text-gray-300 [tr:last-child_&]:border-b-0",
              "left" === (void 0 === t ? "left" : t)
                ? "text-left"
                : "text-right"
            ),
            children: (0, i.jsx)("div", {
              className: "px-4 py-2 [tr[data-disabled=true]_&]:opacity-50",
              children: n,
            }),
          });
        },
        Actions: function (e) {
          var t = e.children;
          return (0, i.jsx)("div", {
            className: "flex items-center justify-end gap-2",
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
          return c;
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
      function s() {
        var e = (0, r._)([
          "\nrelative flex h-8 cursor-pointer select-none items-center rounded-md pl-3 pr-7 text-sm leading-none text-gray-700 hover:bg-gray-50 radix-disabled:pointer-events-none radix-highlighted:bg-gray-50 radix-disabled:text-gray-300 radix-highlighted:outline-none dark:text-gray-200 dark:hover:bg-[#2E2F33] dark:radix-highlighted:bg-[#2E2F33] dark:radix-disabled:text-gray-600 dark:radix-highlighted:hover:bg-[#2E2F33]\n",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = (0, r._)([
          "\nmin-w-[220px] rounded-lg bg-white dark:bg-gray-900 p-[5px] shadow-xs will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade\n",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      var l = a.Z.button(i()),
        u = a.Z.div(s()),
        c = a.Z.div(o());
    },
    87105: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return ei;
        },
      });
      var r = n(39324),
        a = n(71209),
        i = n(70216),
        s = n(35250),
        o = n(7718),
        l = n(19841),
        u = n(86546),
        c = n(70079),
        d = n(21811),
        f = n(64135),
        h = n(61110),
        g = n(55975),
        m = n(46050),
        p = n(29874),
        v = n(8449),
        x = n(15472);
      let b = {
          tokenize: function (e, t, n) {
            let r = this,
              a = this.events[this.events.length - 1],
              i =
                a && a[1].type === x.V.linePrefix
                  ? a[2].sliceSerialize(a[1], !0).length
                  : 0,
              s = [];
            return function (t) {
              return (
                g.q.backslash,
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function t(r) {
                  return r === g.q.backslash ||
                    (r === g.q.leftSquareBracket && s[0] === g.q.backslash)
                    ? (e.consume(r), s.push(r), t)
                    : (e.exit("mathFlowFenceSequence"),
                      s.length < 2 ? n(r) : (0, m.f)(e, o, x.V.whitespace)(r));
                })(t)
              );
            };
            function o(t) {
              return t === g.q.eof || (0, p.Ch)(t)
                ? l(t)
                : (e.enter("mathFlowFenceMeta"),
                  e.enter(x.V.chunkString, {
                    contentType: v._.contentTypeString,
                  }),
                  (function t(r) {
                    return r === g.q.eof || (0, p.Ch)(r)
                      ? (e.exit(x.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r))
                      : r === g.q.rightSquareBracket
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
                      return n === g.q.eof
                        ? u(n)
                        : (0, p.Ch)(n)
                        ? e.attempt(
                            y,
                            e.attempt(
                              { tokenize: c, partial: !0 },
                              u,
                              i ? (0, m.f)(e, t, x.V.linePrefix, i + 1) : t
                            ),
                            u
                          )(n)
                        : (e.enter("mathFlowValue"),
                          (function n(r) {
                            return r === g.q.eof || (0, p.Ch)(r)
                              ? (e.exit("mathFlowValue"), t(r))
                              : (e.consume(r), n);
                          })(n));
                    })(n)
              );
            }
            function u(n) {
              return e.exit("mathFlow"), t(n);
            }
            function c(e, t, n) {
              let r = [];
              return (0, m.f)(
                e,
                function (t) {
                  return (
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    (function t(i) {
                      return (i === g.q.backslash && 0 === r.length) ||
                        (i === g.q.rightSquareBracket && r[0] === g.q.backslash)
                        ? (e.consume(i), r.push(i), t)
                        : r < s
                        ? n(i)
                        : (e.exit("mathFlowFenceSequence"),
                          (0, m.f)(e, a, x.V.whitespace)(i));
                    })(t)
                  );
                },
                x.V.linePrefix,
                v._.tabSize
              );
              function a(r) {
                return r === g.q.eof || (0, p.Ch)(r)
                  ? (e.exit("mathFlowFence"), t(r))
                  : n(r);
              }
            }
          },
          concrete: !0,
        },
        y = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter(x.V.lineEnding), e.consume(t), e.exit(x.V.lineEnding), a
              );
            };
            function a(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        w = {
          tokenize: function (e, t, n) {
            let r = this,
              a = r.events[r.events.length - 1],
              i =
                a && a[1].type === x.V.linePrefix
                  ? a[2].sliceSerialize(a[1], !0).length
                  : 0,
              s = 0;
            return function (t) {
              return (
                g.q.dollarSign,
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function t(r) {
                  return r === g.q.dollarSign
                    ? (e.consume(r), s++, t)
                    : (e.exit("mathFlowFenceSequence"),
                      s < 2 ? n(r) : (0, m.f)(e, o, x.V.whitespace)(r));
                })(t)
              );
            };
            function o(t) {
              return t === g.q.eof || (0, p.Ch)(t)
                ? l(t)
                : (e.enter("mathFlowFenceMeta"),
                  e.enter(x.V.chunkString, {
                    contentType: v._.contentTypeString,
                  }),
                  (function t(r) {
                    return r === g.q.eof || (0, p.Ch)(r)
                      ? (e.exit(x.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r))
                      : r === g.q.dollarSign
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
                      return n === g.q.eof
                        ? u(n)
                        : (0, p.Ch)(n)
                        ? e.attempt(
                            j,
                            e.attempt(
                              { tokenize: c, partial: !0 },
                              u,
                              i ? (0, m.f)(e, t, x.V.linePrefix, i + 1) : t
                            ),
                            u
                          )(n)
                        : (e.enter("mathFlowValue"),
                          (function n(r) {
                            return r === g.q.eof || (0, p.Ch)(r)
                              ? (e.exit("mathFlowValue"), t(r))
                              : (e.consume(r), n);
                          })(n));
                    })(n)
              );
            }
            function u(n) {
              return e.exit("mathFlow"), t(n);
            }
            function c(e, t, n) {
              let r = 0;
              return (0, m.f)(
                e,
                function (t) {
                  return (
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    (function t(i) {
                      return i === g.q.dollarSign
                        ? (e.consume(i), r++, t)
                        : r < s
                        ? n(i)
                        : (e.exit("mathFlowFenceSequence"),
                          (0, m.f)(e, a, x.V.whitespace)(i));
                    })(t)
                  );
                },
                x.V.linePrefix,
                v._.tabSize
              );
              function a(r) {
                return r === g.q.eof || (0, p.Ch)(r)
                  ? (e.exit("mathFlowFence"), t(r))
                  : n(r);
              }
            }
          },
          concrete: !0,
        },
        j = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                (0, p.Ch)(t),
                e.enter(x.V.lineEnding),
                e.consume(t),
                e.exit(x.V.lineEnding),
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
          (e[3][1].type === x.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === x.V.lineEnding || "space" === e[r][1].type)
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
            ? t !== r && e[t][1].type !== x.V.lineEnding && (n = t)
            : (t === r || e[t][1].type === x.V.lineEnding) &&
              ((e[n][1].type = "mathTextData"),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (r -= t - n - 2),
                (t = n + 2)),
              (n = void 0));
        return e;
      }
      function _(e) {
        return (
          e !== g.q.backslash ||
          this.events[this.events.length - 1][1].type === x.V.characterEscape
        );
      }
      function k(e) {
        let t,
          n,
          r = e.length - 4,
          a = 3;
        if (
          (e[3][1].type === x.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === x.V.lineEnding || "space" === e[r][1].type)
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
            ? t !== r && e[t][1].type !== x.V.lineEnding && (n = t)
            : (t === r || e[t][1].type === x.V.lineEnding) &&
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
          e !== g.q.dollarSign ||
          this.events[this.events.length - 1][1].type === x.V.characterEscape
        );
      }
      function T(e) {
        let t,
          n,
          r = e.length - 4,
          a = 3;
        if (
          (e[3][1].type === x.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === x.V.lineEnding || "space" === e[r][1].type)
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
            ? t !== r && e[t][1].type !== x.V.lineEnding && (n = t)
            : (t === r || e[t][1].type === x.V.lineEnding) &&
              ((e[n][1].type = "mathTextData"),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (r -= t - n - 2),
                (t = n + 2)),
              (n = void 0));
        return e;
      }
      function N(e) {
        return (
          e !== g.q.backslash ||
          this.events[this.events.length - 1][1].type === x.V.characterEscape
        );
      }
      var P = n(67726),
        I = n(9871),
        S = n(93362),
        Z = n(45369),
        F = n(42426),
        D = n(65028),
        E = n(88366),
        L = n(36716),
        A = n(2368),
        R = n(21722),
        B = n(22830),
        U = n(39889),
        O = n(35448),
        q = n(24396),
        z = n(75908),
        W = n(3001),
        H = n(24274),
        V = n(75527),
        G = n(19265),
        J = n(97688),
        $ = n(57924),
        Y = "sandbox:";
      function Q(e) {
        var t,
          n,
          o = e.messageId,
          l = e.clientThreadId,
          u = e.href,
          d = (0, i._)(e, ["messageId", "clientThreadId", "href"]),
          f = (0, O.NL)(),
          h = (0, B._)((0, c.useState)(!1), 2),
          g = h[0],
          m = h[1],
          p = u.substring(Y.length),
          v = V.tQ.getServerThreadId(l),
          x = (0, z.Z)(),
          b = (0, c.useCallback)(function (e) {
            var t = document.createElement("a");
            (t.href = e), t.click(), m(!1);
          }, []),
          y = ((t = (0, c.useCallback)(function (e) {
            m(!1), J.m.danger(e);
          }, [])),
          (0, q.a)({
            queryKey: X(o, p),
            queryFn: function () {
              return H.ZP.downloadFromSandbox(o, v, p)
                .then(function (e) {
                  return (
                    (null == e ? void 0 : e.status) === "success" &&
                      b(e.download_url),
                    (null == e ? void 0 : e.status) === "error" &&
                      t("File download failed - chat may be expired"),
                    e
                  );
                })
                .catch(function (e) {
                  return t(e.message), e;
                });
            },
            enabled: !!(g && o && v && p),
            refetchInterval: function (e, n) {
              var r = n.state.dataUpdateCount;
              return (
                (null == e ? void 0 : e.status) !== "success" &&
                (r > K
                  ? (t("File download timed out. Please try again"), !1)
                  : 100 * Math.pow(1.5, r))
              );
            },
          })).data,
          w = (0, c.useCallback)(
            ((n = (0, R._)(function (e) {
              return (0, U.Jh)(this, function (t) {
                return (
                  void 0 !== l &&
                    (e.preventDefault(),
                    (void 0 === y ||
                      (null == y ? void 0 : y.state) === "failed") &&
                      f.invalidateQueries({ queryKey: X(o, p) }),
                    (null == y ? void 0 : y.download_url)
                      ? b(y.download_url)
                      : m(!0)),
                  [2]
                );
              });
            })),
            function (e) {
              return n.apply(this, arguments);
            }),
            [l, y, p, b, o, f]
          );
        return (0, s.jsx)($.u, {
          closeOnOutsideClick: !1,
          delayDuration: 0,
          label: (0, s.jsxs)("span", {
            className: "flex items-center gap-1",
            children: [
              g
                ? x.formatMessage(ee.startingDownload)
                : x.formatMessage(ee.downloadFile),
              g && (0, s.jsx)(G.Z, {}),
            ],
          }),
          side: "top",
          sideOffset: 4,
          children: (0, s.jsx)(
            "a",
            (0, a._)((0, r._)({}, d), {
              className: "cursor-pointer",
              onClick: function (e) {
                return !g && w(e);
              },
            })
          ),
        });
      }
      var K = Math.log(1501) / Math.log(1.5);
      function X(e, t) {
        return ["downloadSandboxLink", e, t];
      }
      var ee = (0, W.vU)({
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
        }),
        et = function (e) {
          return e.startsWith(Y) ? e : (0, I.A)(e);
        },
        en = [
          D.Z,
          [
            function () {
              let e = this.data();
              function t(t, n) {
                let r = e[t] ? e[t] : (e[t] = []);
                r.push(n);
              }
              t("micromarkExtensions", {
                flow: { [g.q.dollarSign]: w, [g.q.backslash]: b },
                text: {
                  [g.q.dollarSign]: {
                    tokenize: function (e, t, n) {
                      let r,
                        a,
                        i = 0;
                      return function (t) {
                        return (
                          e.enter("mathText"),
                          e.enter("mathTextSequence"),
                          (function t(r) {
                            return r === g.q.dollarSign
                              ? (e.consume(r), i++, t)
                              : i < 2
                              ? n(r)
                              : (e.exit("mathTextSequence"), s(r));
                          })(t)
                        );
                      };
                      function s(l) {
                        return l === g.q.eof
                          ? n(l)
                          : l === g.q.dollarSign
                          ? ((a = e.enter("mathTextSequence")),
                            (r = 0),
                            (function n(s) {
                              return s === g.q.dollarSign
                                ? (e.consume(s), r++, n)
                                : r === i
                                ? (e.exit("mathTextSequence"),
                                  e.exit("mathText"),
                                  t(s))
                                : ((a.type = "mathTextData"), o(s));
                            })(l))
                          : l === g.q.space
                          ? (e.enter("space"), e.consume(l), e.exit("space"), s)
                          : (0, p.Ch)(l)
                          ? (e.enter(x.V.lineEnding),
                            e.consume(l),
                            e.exit(x.V.lineEnding),
                            s)
                          : (e.enter("mathTextData"), o(l));
                      }
                      function o(t) {
                        return t === g.q.eof ||
                          t === g.q.space ||
                          t === g.q.dollarSign ||
                          (0, p.Ch)(t)
                          ? (e.exit("mathTextData"), s(t))
                          : (e.consume(t), o);
                      }
                    },
                    resolve: k,
                    previous: M,
                  },
                  [g.q.backslash]: [
                    {
                      tokenize: function (e, t, n) {
                        let r;
                        let a = [],
                          i = [],
                          s = this;
                        return function (t) {
                          return (
                            g.q.backslash,
                            _.call(s, s.previous) && s.previous,
                            e.enter("mathText"),
                            e.enter("mathTextSequence"),
                            (function t(r) {
                              return (a.join(","),
                              (r === g.q.backslash && 0 === a.length) ||
                                (r === g.q.leftParenthesis && 1 === a.length))
                                ? (e.consume(r), a.push(r), t)
                                : a.length < 2
                                ? n(r)
                                : (e.exit("mathTextSequence"), o(r));
                            })(t)
                          );
                        };
                        function o(s) {
                          return s === g.q.eof
                            ? n(s)
                            : s === g.q.backslash
                            ? ((r = e.enter("mathTextSequence")),
                              (i = []),
                              (function n(s) {
                                return (a.join(","),
                                (s === g.q.backslash && 0 === i.length) ||
                                  (s === g.q.rightParenthesis &&
                                    1 === i.length))
                                  ? (e.consume(s), i.push(s), n)
                                  : i.length === a.length
                                  ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    t(s))
                                  : ((r.type = "mathTextData"), l(s));
                              })(s))
                            : s === g.q.space
                            ? (e.enter("space"),
                              e.consume(s),
                              e.exit("space"),
                              o)
                            : (0, p.Ch)(s)
                            ? (e.enter(x.V.lineEnding),
                              e.consume(s),
                              e.exit(x.V.lineEnding),
                              o)
                            : (e.enter("mathTextData"), l(s));
                        }
                        function l(t) {
                          return t === g.q.eof ||
                            t === g.q.space ||
                            t === g.q.backslash ||
                            (0, p.Ch)(t)
                            ? (e.exit("mathTextData"), o(t))
                            : (e.consume(t), l);
                        }
                      },
                      resolve: C,
                      previous: _,
                    },
                    {
                      tokenize: function (e, t, n) {
                        let r;
                        let a = [],
                          i = [],
                          s = this;
                        return function (t) {
                          return (
                            g.q.backslash,
                            N.call(s, s.previous) && s.previous,
                            e.enter("mathText"),
                            e.enter("mathTextSequence"),
                            (function t(r) {
                              return (a.join(","),
                              (r === g.q.backslash && 0 === a.length) ||
                                (r === g.q.leftSquareBracket && 1 === a.length))
                                ? (e.consume(r), a.push(r), t)
                                : a.length < 2
                                ? n(r)
                                : (e.exit("mathTextSequence"), o(r));
                            })(t)
                          );
                        };
                        function o(s) {
                          return s === g.q.eof
                            ? n(s)
                            : s === g.q.backslash
                            ? ((r = e.enter("mathTextSequence")),
                              (i = []),
                              (function n(s) {
                                return (a.join(","),
                                (s === g.q.backslash && 0 === i.length) ||
                                  (s === g.q.rightSquareBracket &&
                                    1 === i.length))
                                  ? (e.consume(s), i.push(s), n)
                                  : i.length === a.length
                                  ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    t(s))
                                  : ((r.type = "mathTextData"), l(s));
                              })(s))
                            : s === g.q.space
                            ? (e.enter("space"),
                              e.consume(s),
                              e.exit("space"),
                              o)
                            : (0, p.Ch)(s)
                            ? (e.enter(x.V.lineEnding),
                              e.consume(s),
                              e.exit(x.V.lineEnding),
                              o)
                            : (e.enter("mathTextData"), l(s));
                        }
                        function l(t) {
                          return t === g.q.eof ||
                            t === g.q.space ||
                            t === g.q.backslash ||
                            (0, p.Ch)(t)
                            ? (e.exit("mathTextData"), o(t))
                            : (e.consume(t), l);
                        }
                      },
                      resolve: T,
                      previous: N,
                    },
                  ],
                },
              }),
                t("fromMarkdownExtensions", (0, h.N)()),
                t("toMarkdownExtensions", (0, h.O)());
            },
            { singleDollarTextMath: !1 },
          ],
        ],
        er = [
          [
            S.Z,
            {
              languages: { mathematica: P.Z },
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
          Z.Z,
          [F.Z, { newlines: !0 }],
        ],
        ea = {
          code: function (e) {
            var t = e.inline,
              n = e.node,
              o = e.className,
              l = e.children,
              u = (0, i._)(e, ["inline", "node", "className", "children"]);
            if (t) {
              var c = (0, E.B)(n),
                d = (0, L.T$)(c);
              return d
                ? (0, s.jsx)(L.s8, { displayInfo: d })
                : (0, s.jsx)(
                    "code",
                    (0, a._)((0, r._)({ className: o }, u), { children: l })
                  );
            }
            var f,
              h =
                null ===
                  (f =
                    null == o
                      ? void 0
                      : o.split(" ").filter(function (e) {
                          return e.startsWith("language-");
                        })) || void 0 === f
                  ? void 0
                  : f[0],
              g = h ? h.split("-")[1] : "";
            return (0, s.jsx)(A.Z, {
              language: g,
              className: o,
              content: (0, E.B)(n),
              children: l,
            });
          },
        };
      function ei(e) {
        var t = e.size,
          n = e.children,
          h = e.className,
          g = e.clientThreadId,
          m = e.messageId,
          p = (0, u.F)().theme,
          v = (0, f.hz)().has("tools2"),
          x = (0, c.useMemo)(
            function () {
              return (0, a._)((0, r._)({}, ea), {
                a: function (e) {
                  var t = e.node,
                    n = (0, i._)(e, ["node"]),
                    a = t.properties.href;
                  return v && a.startsWith(Y)
                    ? (0, s.jsx)(
                        Q,
                        (0, r._)({ clientThreadId: g, messageId: m }, n)
                      )
                    : (0, s.jsx)("a", (0, r._)({}, n));
                },
                img: function (e) {
                  var t = e.node,
                    n = (0, i._)(e, ["node"]),
                    a = t.properties.src;
                  return a.startsWith(Y) || a.startsWith("attachment:")
                    ? null
                    : (0, s.jsx)("img", (0, r._)({}, n));
                },
              });
            },
            [v, g, m]
          );
        return (0, s.jsx)(o.SV, {
          fallback: function () {
            return (0, s.jsx)(s.Fragment, { children: n });
          },
          children: (0, s.jsx)(d.D, {
            rehypePlugins: er,
            remarkPlugins: en,
            linkTarget: "_new",
            className: (0, l.Z)(
              h,
              "markdown prose w-full break-words dark:prose-invert",
              "dark" === p ? "dark" : "light",
              "small" === (void 0 === t ? "medium" : t) && "prose-xs"
            ),
            transformLinkUri: et,
            components: x,
            children: n,
          }),
        });
      }
    },
    99585: function (e, t, n) {
      n.d(t, {
        Cf: function () {
          return em;
        },
        ZP: function () {
          return eg;
        },
        xz: function () {
          return ep;
        },
      });
      var r,
        a = n(39324),
        i = n(70216),
        s = n(4337),
        o = n(35250),
        l = n(19841),
        u = n(68555),
        c = n(70079),
        d = n(34303),
        f = n(75179),
        h = n(64135),
        g = n(88038),
        m = n(75527),
        p = n(36716),
        v = n(59710),
        x = n(56244),
        b = n(66958),
        y = n(30931),
        w = n(87105),
        j = n(22830),
        C = n(2827),
        _ = n(82841),
        k = n(36218),
        M = n(69403);
      function T() {
        var e = (0, s._)(["text-center mt-2 flex justify-center"]);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = (0, s._)(["flex gap-2 flex-wrap mt-2"]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      var P = d.Z.div(T());
      function I(e) {
        var t = e.initialText,
          n = e.role,
          r = e.clientThreadId,
          a = e.currentLeaf,
          i = e.onUpdateNode,
          s = e.onChangeItemInView,
          l = e.onExitEdit,
          u = e.onDeleteNode,
          d = e.onRequestCompletion,
          f = e.onCreateEditNode,
          h = e.disabled,
          g = e.attachments,
          p = (0, _.WS)(),
          v = (0, c.useId)(),
          x = "".concat(a, "-").concat(v),
          w = (0, j._)((0, c.useState)(null != t ? t : ""), 2),
          T = w[0],
          N = w[1],
          I = (0, c.useRef)(null);
        (0, c.useEffect)(function () {
          f(a, x, null != t ? t : "", g ? { attachments: g } : void 0);
        }, []);
        var Z = (0, c.useCallback)(function (e) {
            N(e.currentTarget.value);
          }, []),
          F = (0, c.useCallback)(
            function () {
              i(x, T), s(x), d(M.Os.Next, x, { eventSource: "mouse" }, !0), l();
            },
            [i, x, T, s, d, l]
          ),
          D = (0, c.useCallback)(
            function () {
              u(x),
                s(a),
                l(),
                p(
                  n === M.uU.User
                    ? k.s6.cancelEditPrompt
                    : k.s6.cancelEditCompletion,
                  { threadId: m.tQ.getServerThreadId(r) }
                );
            },
            [x, a, p, s, u, l, n, r]
          );
        (0, c.useEffect)(
          function () {
            var e = I.current,
              t = function (e) {
                "Enter" === e.key && e.metaKey
                  ? F()
                  : "Escape" === e.key && D();
              };
            return (
              e && e.addEventListener("keydown", t),
              function () {
                e && e.removeEventListener("keydown", t);
              }
            );
          },
          [D, F]
        );
        var E = g && g.length > 0;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(C.ZP, {
              ref: I,
              value: T,
              onChange: Z,
              className:
                "m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0",
            }),
            E &&
              (0, o.jsx)(S, {
                children: g.map(function (e) {
                  return (0, o.jsx)(y.Z, { file: e.name }, e.url);
                }),
              }),
            (0, o.jsxs)(P, {
              children: [
                (0, o.jsx)(b.z, {
                  as: "button",
                  onClick: F,
                  className: "mr-2",
                  disabled: h,
                  children: "Save & Submit",
                }),
                (0, o.jsx)(b.z, {
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
      var S = d.Z.div(N()),
        Z = n(21722),
        F = n(39889),
        D = n(10642),
        E = n(47635),
        L = n(32787),
        A = n(24274),
        R = n(75515),
        B = n(180);
      function U() {
        var e = (0, s._)(["text-xs text-black\n", ""]);
        return (
          (U = function () {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = (0, s._)(["relative w-full overflow-hidden pt-[67%]"]);
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
          s = e.className,
          u = e.mini,
          d = !!a,
          f = (0, _.WS)(),
          h = (0, c.useCallback)(
            function () {
              f(k.s6.carouselCardClick, { content: r });
            },
            [f, r]
          );
        try {
          t = E.get(new URL(r).hostname);
        } catch (e) {
          return console.error("Invalid card url: ", e), null;
        }
        return (0, o.jsxs)(r ? "a" : "div", {
          className: (0, l.Z)(
            "flex h-full w-full flex-col overflow-hidden rounded-md border border-black/10 bg-gray-50 shadow-[0_2px_24px_rgba(0,0,0,0.05)]",
            s
          ),
          href: r,
          target: r ? "_blank" : "",
          onClick: h,
          children: [
            d &&
              (0, o.jsx)(W, {
                children: (0, o.jsx)("div", {
                  className: "absolute inset-0",
                  children: (0, o.jsx)("img", {
                    src: a,
                    alt: "image of ".concat(n),
                    className:
                      "h-full w-full border-b border-black/10 object-cover",
                  }),
                }),
              }),
            (0, o.jsxs)("div", {
              className: "flex flex-1 flex-col justify-between gap-1.5 p-3",
              children: [
                (0, o.jsx)(z, {
                  $clamp: (void 0 !== u && u) || d,
                  children: n,
                }),
                (0, o.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    i
                      ? (0, o.jsx)(R.Z, { url: i, name: t, size: 13 })
                      : (0, o.jsx)(B.Z, { url: r, size: 13 }),
                    (0, o.jsx)("div", {
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
      var z = d.Z.div(U(), function (e) {
          return e.$clamp && "line-clamp-2";
        }),
        W = d.Z.div(O()),
        H = n(96237),
        V = n(21260),
        G = n(52422),
        J = n(95182),
        $ = n.n(J),
        Y = n(1454),
        Q = n(77442),
        K = n(38317);
      function X(e) {
        var t = e.disabled,
          n = e.onClick,
          r = e.left,
          a = e.children;
        return (0, o.jsx)("button", {
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
          return (0, o.jsx)(ee.E.div, {
            className: (0, l.Z)(
              "mr-3 h-full w-full flex-none sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]",
              r
            ),
            style: { x: t },
            children: n,
          });
        },
        en = { type: "spring", bounce: 0 },
        er = (0, c.forwardRef)(function (e, t) {
          return (0,
          o.jsx)("div", { ref: t, className: (0, l.Z)("relative flex h-full w-full overflow-hidden", e.className), children: e.children });
        });
      er.displayName = "CarouselContainer";
      var ea =
        ((r = {}),
        (0, H._)(r, Q._G.Mobile, 1),
        (0, H._)(r, Q._G.Small, 2),
        (0, H._)(r, Q._G.Medium, 2),
        (0, H._)(r, Q._G.Large, 3),
        (0, H._)(r, Q._G.XLarge, 3),
        r);
      function ei(e) {
        var t = e.children,
          n = e.loop,
          r = void 0 === n || n,
          a = e.className,
          i = (0, V.c)(0),
          s = (0, c.useRef)(null),
          u = (0, j._)((0, c.useState)(0), 2),
          d = u[0],
          f = u[1],
          h = ea[(0, Q.dQ)()] || 1,
          g = c.Children.count(t) > h,
          m = c.Children.toArray(t),
          p = (0, c.useCallback)(
            function () {
              var e,
                t =
                  null === (e = s.current) || void 0 === e
                    ? void 0
                    : e.clientWidth;
              return t ? -Math.floor(d / h) * (t + 12) : 0;
            },
            [h, d]
          ),
          v = (0, c.useCallback)(
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
          x = (0, c.useCallback)(
            function () {
              v(1);
            },
            [v]
          ),
          b = (0, c.useCallback)(
            function () {
              v(-1);
            },
            [v]
          ),
          y = (0, j._)(
            (0, c.useMemo)(
              function () {
                if (r) return [!0, !0];
                var e = d < m.length - h;
                return [d > 0, e];
              },
              [m.length, d, r, h]
            ),
            2
          ),
          w = y[0],
          C = y[1];
        return (
          (0, c.useEffect)(
            function () {
              return (0, G.j)(i, p(), en).stop;
            },
            [p, d, i]
          ),
          (0, o.jsxs)("div", {
            className: (0, l.Z)(
              "relative h-full w-full",
              a,
              g && "mb-12 lg:mb-0"
            ),
            children: [
              (0, o.jsx)(er, {
                ref: s,
                children: m.map(function (e, t) {
                  return (0, o.jsx)(et, { x: i, children: e }, t);
                }),
              }),
              g &&
                (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(X, {
                      onClick: b,
                      left: !0,
                      disabled: !w,
                      children: (0, o.jsx)(K.ZP, { icon: Y.YFh }),
                    }),
                    (0, o.jsx)(X, {
                      onClick: x,
                      disabled: !C,
                      children: (0, o.jsx)(K.ZP, { icon: Y.Tfp }),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      var es = n(31721),
        eo = new Set([
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
        ec = c.memo(function (e) {
          var t,
            n,
            r = e.urls,
            a = (0, es.v)(),
            i =
              ((t = (0, L.kP)().session),
              (n = (0, D.h)({
                queries: r.map(function (e) {
                  return {
                    queryKey: ["opengraph", e],
                    queryFn: (0, Z._)(function () {
                      return (0, F.Jh)(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return [4, A.ZP.getPageMetadata({ url: e })];
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
              (0, c.useMemo)(
                function () {
                  return n
                    .map(function (e, t) {
                      var n = e.data,
                        a = e.isError,
                        i = e.isLoading,
                        s = r[t];
                      if (a || i) return null;
                      var o = n.tags.reduce(function (e, t) {
                        return eo.has(t.type) && (e[el[t.type]] = t.value), e;
                      }, {});
                      try {
                        var l,
                          u = s.split(/[#?]/)[0],
                          c =
                            null === (l = o.url) || void 0 === l
                              ? void 0
                              : l.endsWith("/login"),
                          d = o.url && "/" === new URL(o.url || "").pathname;
                        if (u !== o.url && (c || d)) return null;
                      } catch (e) {
                        return null;
                      }
                      return (o.url = s), o;
                    })
                    .filter(Boolean);
                },
                [n, r]
              )),
            s = (0, c.useMemo)(
              function () {
                return !i.some(function (e) {
                  return !!(null == e ? void 0 : e.imageUrl);
                });
              },
              [i]
            ),
            l = (0, c.useMemo)(
              function () {
                return a.reduce(function (e, t) {
                  return (e[E.get(t.domain)] = t.manifest.logo_url), e;
                }, {});
              },
              [a]
            ),
            u = (0, c.useMemo)(
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
                    (0, o.jsx)(
                      q,
                      {
                        title: e.title || "",
                        url: e.url,
                        imageUrl: e.imageUrl,
                        logoUrl: n,
                        mini: s,
                      },
                      e.url
                    )
                  );
                });
              },
              [i, s, l]
            );
          return 0 === i.length
            ? null
            : (0, o.jsx)(ei, { loop: !1, children: u });
        }),
        ed = n(5046);
      function ef() {
        var e = (0, s._)(["flex gap-2 flex-wrap"]);
        return (
          (ef = function () {
            return e;
          }),
          e
        );
      }
      function eh() {
        var e = (0, s._)([
          "\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n",
          "\n",
          "\n",
          "\n",
        ]);
        return (
          (eh = function () {
            return e;
          }),
          e
        );
      }
      var eg = c.memo(function (e) {
        var t,
          n,
          r,
          s = e.message,
          l = e.isEditing,
          u = e.format,
          c = e.isCompletionInProgress,
          d = e.className,
          f = e.isCompletion,
          h = e.isResponseToPluginMessage,
          g = (0, i._)(e, [
            "message",
            "isEditing",
            "format",
            "isCompletionInProgress",
            "className",
            "isCompletion",
            "isResponseToPluginMessage",
          ]);
        return l
          ? (0, o.jsx)(
              I,
              (0, a._)(
                {
                  currentLeaf: s.nodeId,
                  initialText: (0, x.RR)(s.message),
                  role: s.message.author.role,
                  attachments:
                    null === (r = s.message.metadata) || void 0 === r
                      ? void 0
                      : r.attachments,
                },
                g
              )
            )
          : (0, o.jsx)(em, {
              text: (0, x.RR)(s.message),
              errCode: s.errCode,
              err: s.err,
              flag: s.errType,
              isCompletionInProgress: c,
              format: u,
              className: d,
              citations:
                null === (t = s.message.metadata) || void 0 === t
                  ? void 0
                  : t.citations,
              attachments:
                null === (n = s.message.metadata) || void 0 === n
                  ? void 0
                  : n.attachments,
              isCompletion: f,
              id: s.nodeId,
              onRequestMoreCompletions: g.onRequestMoreCompletions,
              clientThreadId: g.clientThreadId,
              showExtractedLinkCards: h,
            });
      });
      function em(e) {
        var t,
          n,
          r,
          a = e.attachments,
          i = e.citations,
          s = e.className,
          u = e.err,
          d = e.errCode,
          m = e.flag,
          x = e.format,
          b = e.isCompletionInProgress,
          j = e.size,
          C = e.text,
          _ = e.isCompletion,
          k = e.id,
          M = e.onRequestMoreCompletions,
          T = e.clientThreadId,
          N = e.showExtractedLinkCards,
          P = d === f.Dd,
          I = (0, h.hz)(),
          S =
            ((n = (t = { text: C, isCompletionInProgress: b }).text),
            (r = t.isCompletionInProgress),
            (0, c.useMemo)(
              function () {
                if (r) return [];
                var e = n.match(eu);
                return Array.from(new Set(e));
              },
              [r, n]
            )),
          Z = (0, c.useMemo)(
            function () {
              switch (d) {
                case f.Dd:
                  return (0, o.jsx)(ey, {
                    $flag: m,
                    children: (0, o.jsx)(ex, {}),
                  });
                case ed.uU:
                  if (I.has("model_preview"))
                    return (0, o.jsx)(ev, {
                      id: k,
                      onRequestMoreCompletions: M,
                      flag: m,
                      clientThreadId: T,
                    });
                  return (0, o.jsx)(ey, { $flag: m, children: u });
                case v.wp:
                  return (0, o.jsx)(ey, {
                    $flag: m,
                    children:
                      "Sorry, conversations created when Chat History is off expire after 6 hours of inactivity. Please start a new conversation to continue using ChatGPT.",
                  });
                default:
                  return (0, o.jsx)(ey, { $flag: m, children: u });
              }
            },
            [u, d, I, m, k, M, T]
          ),
          F = (0, h.hz)().has(g.FZ),
          D = a && a.length > 0 && !_;
        return (0, o.jsxs)("div", {
          className: (0, l.Z)(
            s,
            "flex flex-col items-start gap-4 whitespace-pre-wrap break-words",
            "danger" === m && "flex flex-row gap-2 text-red-500",
            "warning" === m && "text-orange-500",
            F && "text-base"
          ),
          children: [
            (u && !C) || P || !x
              ? "danger" === m && P
                ? null
                : C
              : (0, o.jsx)(w.Z, {
                  clientThreadId: T,
                  messageId: k,
                  size: void 0 === j ? "medium" : j,
                  className: (0, l.Z)(
                    "danger" !== m && b && "result-streaming",
                    "danger" === m && "text-red-500",
                    "warning" === m && "text-orange-500"
                  ),
                  children: "" === C ? "&#8203;" : (0, p.Qd)(C, i),
                }),
            D &&
              (0, o.jsx)(eb, {
                children: a.map(function (e) {
                  return (0, o.jsx)(y.Z, { file: e.name }, e.url);
                }),
              }),
            _ && N && S.length > 0 && (0, o.jsx)(ec, { urls: S }),
            m && Z,
          ],
        });
      }
      function ep(e) {
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
      function ev(e) {
        var t = e.id,
          n = e.onRequestMoreCompletions,
          r = e.flag,
          a = e.clientThreadId,
          i = (0, u.useRouter)(),
          s = (0, ed.Y8)(function (e) {
            return e.isoDate;
          }),
          l = ep(s),
          d = (0, c.useCallback)(
            function () {
              n(t, { eventSource: "mouse" }, !0, "none", !1);
            },
            [t, n]
          ),
          f = (0, c.useCallback)(
            function () {
              var e = void 0 !== a ? m.tQ.getServerThreadId(a) : void 0;
              void 0 === e
                ? i.replace("/", void 0, { shallow: !0 })
                : (0, ed.m0)(e),
                n(t, { eventSource: "mouse" }, !0, "none", !0);
            },
            [t, n, i, a]
          ),
          h = s
            ? (0, o.jsxs)("span", {
                children: [
                  "You've reached the current usage cap for GPT-4. You can continue with the default model now, or try again ".concat(
                    l,
                    "."
                  ),
                  " ",
                  (0, o.jsx)("a", {
                    href: "https://share.hsforms.com/16d0ZZVM3QZirXnCD_q7u1Q4sk30",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "underline",
                    children: "Learn more",
                  }),
                ],
              })
            : "You previously reached your usage cap for GPT-4, but you can now try sending your message again";
        return (0, o.jsx)(ey, {
          $flag: !!s && r,
          children: (0, o.jsxs)("div", {
            className: "flex items-center gap-6",
            children: [
              h,
              !s &&
                (0, o.jsx)(b.z, {
                  color: "light",
                  className: "flex-shrink-0 bg-white",
                  onClick: d,
                  children: "Try again",
                }),
              s &&
                (0, o.jsx)(b.z, {
                  color: "light",
                  className: "flex-shrink-0 bg-white",
                  onClick: f,
                  children: "Use default model",
                }),
            ],
          }),
        });
      }
      function ex() {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            "This content may violate our",
            " ",
            (0, o.jsx)("a", {
              target: "_blank",
              href: "https://platform.openai.com/docs/usage-policies/content-policy",
              rel: "noreferrer",
              className: "bold underline",
              children: "content policy",
            }),
            ". If you believe this to be in error, please",
            " ",
            (0, o.jsx)("a", {
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
      var eb = d.Z.div(ef()),
        ey = d.Z.div(
          eh(),
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
        Vq: function () {
          return d;
        },
        ZB: function () {
          return u;
        },
        zV: function () {
          return c;
        },
      });
      var r = n(4337),
        a = n(34303);
      function i() {
        var e = (0, r._)([
          "p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer",
        ]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = (0, r._)([
          "flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = (0, r._)([
          "rounded-md border border-white/20 hover:bg-gray-500/10 h-11",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = (0, r._)(["", ""]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      a.Z.a(i());
      var u = a.Z.a(s()),
        c = (0, a.Z)(u)(o()),
        d = (0, a.Z)(u)(l(), function (e) {
          return e.$active ? "bg-gray-800" : "hover:bg-gray-800";
        });
    },
    61119: function (e, t, n) {
      n.d(t, {
        Ds: function () {
          return _;
        },
        OS: function () {
          return C;
        },
        ZP: function () {
          return k;
        },
      });
      var r = n(21722),
        a = n(22830),
        i = n(39889),
        s = n(35250),
        o = n(35448),
        l = n(70079),
        u = n(1454),
        c = n(81292),
        d = n(32787),
        f = n(64135),
        h = n(88038),
        g = n(66958),
        m = n(48101),
        p = n(19265),
        v = n(97688),
        x = n(17915),
        b = n(86573),
        y = n(38631),
        w = n(49910),
        j = n(697),
        C = (0, c.ZP)(function () {
          return { isOpen: !1 };
        }),
        _ = {
          close: function () {
            C.setState({ isOpen: !1 });
          },
          setIsOpen: function (e) {
            C.setState({ isOpen: e });
          },
        };
      function k(e) {
        var t = e.slideOver,
          n = (0, a._)((0, l.useState)(), 2),
          c = n[0],
          k = n[1],
          M = (0, a._)((0, l.useState)(!1), 2),
          T = M[0],
          N = M[1],
          P = (0, a._)((0, l.useState)(!1), 2),
          I = P[0],
          S = P[1],
          Z = (0, a._)((0, l.useState)(!1), 2),
          F = Z[0],
          D = Z[1],
          E = (0, d.kP)().session,
          L = (0, f.hz)(),
          A =
            ((null == E ? void 0 : E.user) != null && (0, d.yl)(E.user)) ||
            L.has(h.YI),
          R = (0, o.NL)(),
          B = C(function (e) {
            return e.isOpen;
          }),
          U = (0, j.p0)(),
          O = (0, x.sd)().fetchManifestAndSpec,
          q = (0, l.useMemo)(
            function () {
              return A ? U[0] : U.find(b.cf);
            },
            [U, A]
          ),
          z = (0, l.useCallback)(
            (0, r._)(function () {
              return (0, i.Jh)(this, function (e) {
                return (
                  q &&
                    (k(void 0),
                    O({
                      domain: q.domain,
                      onSuccess: function (e) {
                        k({
                          manifestValidationInfo:
                            e.scrapeManifestResponse.manifest_validation_info,
                          apiValidationInfo: e.apiValidationInfo,
                        }),
                          null != e.scrapeManifestResponse.plugin &&
                            (0, x.aU)(e.scrapeManifestResponse.plugin, R, [
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
            [q, R, O]
          );
        return ((0, l.useEffect)(
          function () {
            B && z();
          },
          [B, z]
        ),
        L.has(h.Wk))
          ? (0, s.jsx)(m.ZP, {
              icon: u.V7f,
              title: "Plugin devtools",
              isOpen: B,
              slideOver: t,
              onClose: _.close,
              children: (0, s.jsx)("div", {
                className:
                  "border-t border-gray-100 p-2 text-sm dark:border-gray-700",
                children:
                  null != q
                    ? (0, s.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          (0, s.jsx)("div", {
                            children: (0, s.jsx)(g.z, {
                              size: "small",
                              color: "neutral",
                              onClick: z,
                              children: "Refresh plugin",
                            }),
                          }),
                          c
                            ? (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)(y.Z, { plugin: q }),
                                  (0, s.jsxs)("div", {
                                    children: ["Plugin id: ", q.id],
                                  }),
                                  (0, s.jsx)(w.rC, {
                                    manifestValidationInfo:
                                      c.manifestValidationInfo,
                                    expanded: T,
                                    onChangeExpanded: N,
                                  }),
                                  null != c.apiValidationInfo &&
                                    (0, s.jsxs)(s.Fragment, {
                                      children: [
                                        (0, s.jsx)(w.q6, {
                                          apiValidationInfo:
                                            c.apiValidationInfo,
                                          expanded: I,
                                          onChangeExpanded: S,
                                        }),
                                        (0, s.jsx)(w.bf, {
                                          apiValidationInfo:
                                            c.apiValidationInfo,
                                          expanded: F,
                                          onChangeExpanded: D,
                                        }),
                                      ],
                                    }),
                                ],
                              })
                            : (0, s.jsx)("div", {
                                className: "self-center",
                                children: (0, s.jsx)(p.Z, {}),
                              }),
                        ],
                      })
                    : (0, s.jsxs)("div", {
                        className: "mt-4 text-center",
                        children: [
                          "Please enable a localhost plugin",
                          " ",
                          A && " (or any plugin if you're a plugin reviewer) ",
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
          return d;
        },
        rC: function () {
          return c;
        },
      });
      var r = n(39324),
        a = n(70216),
        i = n(22830),
        s = n(35250),
        o = n(70079),
        l = n(1454),
        u = n(38317);
      function c(e) {
        var t = e.manifestValidationInfo,
          n = (0, a._)(e, ["manifestValidationInfo"]),
          i = t.manifest_dict,
          o = t.warnings,
          l = t.errors;
        return (0, s.jsx)(
          h,
          (0, r._)({ name: "manifest", content: i, warnings: o, errors: l }, n)
        );
      }
      function d(e) {
        var t = e.apiValidationInfo,
          n = (0, a._)(e, ["apiValidationInfo"]),
          i = t.openapi_spec_dict,
          o = t.warnings,
          l = t.errors;
        return (0, s.jsx)(
          h,
          (0, r._)(
            { name: "OpenAPI spec", content: i, warnings: o, errors: l },
            n
          )
        );
      }
      function f(e) {
        var t = e.apiValidationInfo,
          n = (0, a._)(e, ["apiValidationInfo"]),
          i = t.api_typescript;
        return i
          ? (0, s.jsx)(
              g,
              (0, r._)({ text: "Prompt for ChatGPT", content: i }, n)
            )
          : null;
      }
      function h(e) {
        var t = e.name,
          n = e.content,
          i = e.warnings,
          o = e.errors,
          c = (0, a._)(e, ["name", "content", "warnings", "errors"]),
          d = i && i.length > 0,
          f = o && o.length > 0,
          h = "Validated ".concat(t),
          m = (0, s.jsx)(u.ZP, { icon: l.UgA, className: "text-green-500" });
        return (
          f
            ? ((h = "Errors in ".concat(t)),
              (m = (0, s.jsx)(u.ZP, {
                icon: l.q5L,
                className: "text-red-500",
              })))
            : d &&
              ((h = "Warnings in ".concat(t)),
              (m = (0, s.jsx)(u.ZP, {
                icon: l.bcx,
                className: "text-yellow-500",
              }))),
          (0, s.jsx)(
            g,
            (0, r._)(
              { icon: m, text: h, content: n, warnings: i, errors: o },
              c
            )
          )
        );
      }
      function g(e) {
        var t = e.icon,
          n = e.text,
          r = e.content,
          a = e.warnings,
          c = e.errors,
          d = e.expanded,
          f = e.onChangeExpanded,
          h = (0, i._)((0, o.useState)(!1), 2),
          g = h[0],
          m = h[1],
          p = null != d ? d : g,
          v = (0, o.useCallback)(
            function () {
              f
                ? f(!p)
                : m(function (e) {
                    return !e;
                  });
            },
            [p, f]
          );
        return (0, s.jsxs)("div", {
          className: "flex flex-col gap-2 text-sm",
          children: [
            (0, s.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [
                t && (0, s.jsx)("div", { children: t }),
                (0, s.jsx)("div", { children: n }),
                (0, s.jsx)("div", {
                  role: "button",
                  className: "cursor-pointer text-gray-500 hover:text-gray-700",
                  onClick: v,
                  children: (0, s.jsx)(u.ZP, { icon: p ? l.rH8 : l.bTu }),
                }),
              ],
            }),
            p &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-2 font-semibold",
                    children: [
                      c &&
                        c.map(function (e, t) {
                          return (0,
                          s.jsx)("div", { className: "text-red-500", children: e }, t);
                        }),
                      a &&
                        a.map(function (e, t) {
                          return (0,
                          s.jsx)("div", { className: "text-yellow-500", children: e }, t);
                        }),
                    ],
                  }),
                  r &&
                    (0, s.jsx)("pre", {
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
        aU: function () {
          return m;
        },
        nT: function () {
          return p;
        },
        qo: function () {
          return h;
        },
        sd: function () {
          return v;
        },
      });
      var r = n(21722),
        a = n(22830),
        i = n(81949),
        s = n(39889),
        o = n(35448),
        l = n(13451),
        u = n(70079),
        c = n(24274),
        d = n(86573);
      function f(e) {
        var t = e.onSuccess,
          n = e.onError,
          r = e.onSettled,
          a = (0, o.NL)(),
          i = (0, l.D)(c.ZP.updatePluginUserSettings.bind(c.ZP), {
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
          a = (0, o.NL)(),
          s = (0, l.D)(c.ZP.updatePluginUserSettings.bind(c.ZP), {
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
            s({ pluginId: e, isInstalled: !1 });
          },
          [s]
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
      function p(e) {
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
      function v() {
        var e,
          t = (0, a._)((0, u.useState)(!1), 2),
          n = t[0],
          i = t[1];
        return {
          fetchManifestAndSpec: (0, u.useCallback)(
            ((e = (0, r._)(function (e) {
              var t, n, r, a, o, l, u, f, h;
              return (0, s.Jh)(this, function (s) {
                switch (s.label) {
                  case 0:
                    (t = e.domain),
                      (n = e.manifestAccessToken),
                      (r = e.onSuccess),
                      (a = e.onError),
                      (o = (0, d.NB)(t)),
                      (s.label = 1);
                  case 1:
                    if ((s.trys.push([1, 10, 11, 12]), i(!0), !(null != o)))
                      return [3, 3];
                    return [4, (0, d.Zb)(o)];
                  case 2:
                    if (void 0 === (l = s.sent())) return [2];
                    return (
                      r({
                        domain: o,
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
                      c.ZP.scrapePluginManifest({
                        domain: t,
                        manifestAccessToken: n,
                      }),
                    ];
                  case 4:
                    if (!(u = s.sent()).plugin) return [3, 8];
                    s.label = 5;
                  case 5:
                    return (
                      s.trys.push([5, 7, , 8]),
                      [4, c.ZP.getPluginApi({ id: u.plugin.id })]
                    );
                  case 6:
                    return (f = s.sent().api_validation_info), [3, 8];
                  case 7:
                    return s.sent(), [3, 8];
                  case 8:
                    r({
                      domain: t,
                      scrapeManifestResponse: u,
                      apiValidationInfo: f,
                      manifestAccessToken: n,
                    }),
                      (s.label = 9);
                  case 9:
                    return [3, 12];
                  case 10:
                    return (h = s.sent()), a(null != o ? h : void 0), [3, 12];
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
          return d;
        },
      });
      var r = n(21722),
        a = n(39324),
        i = n(39889),
        s = n(8844),
        o = n(22121),
        l = n(69403),
        u = n(24274),
        c = n(97688);
      function d(e) {
        var t,
          n,
          r,
          a =
            (null === (t = e.metadata) || void 0 === t
              ? void 0
              : null === (n = t.invoked_plugin) || void 0 === n
              ? void 0
              : n.http_api_call_data) ||
            (null === (r = e.metadata) || void 0 === r
              ? void 0
              : r.http_api_call_data);
        if (void 0 !== a) {
          if (e.author.role !== l.uU.Assistant) {
            console.error(
              "Refusing to make localhost plugin HTTP call from non-assistant message",
              e
            );
            return;
          }
          if (
            "object" != typeof a ||
            "string" != typeof a.namespace ||
            0 === a.namespace.length ||
            "string" != typeof a.function_name ||
            0 === a.function_name.length ||
            "string" != typeof a.parent_message_id ||
            0 === a.parent_message_id.length ||
            "string" != typeof a.url ||
            0 === a.url.length ||
            "string" != typeof a.method ||
            !["get", "post", "put", "delete", "patch"].includes(a.method) ||
            !Array.isArray(a.qs_params) ||
            a.qs_params.some(function (e) {
              return (
                !Array.isArray(e) ||
                2 !== e.length ||
                "string" != typeof e[0] ||
                "string" != typeof e[1]
              );
            }) ||
            "object" != typeof a.headers ||
            Object.keys(a.headers).some(function (e) {
              return "string" != typeof e;
            }) ||
            Object.values(a.headers).some(function (e) {
              return "string" != typeof e;
            }) ||
            !(
              null === a.body ||
              ("object" == typeof a.body &&
                Object.keys(a.body).every(function (e) {
                  return "string" == typeof e;
                }))
            ) ||
            "string" != typeof a.api_function_type ||
            !["kwargs", "chat"].includes(a.api_function_type)
          ) {
            console.error(
              "Refusing to make localhost plugin HTTP call with invalid metadata",
              e
            );
            return;
          }
          if (!/^https?:\/\/localhost:/.test(a.url)) {
            console.error(
              "Refusing to make localhost plugin HTTP call with non-localhost URL",
              e
            );
            return;
          }
          return a;
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
                        id: (0, s.Z)(),
                        author: { role: l.uU.Tool, name: "plugin_service" },
                        content: {
                          content_type: l.PX.Text,
                          parts: [
                            "Error making localhost plugin HTTP call: ".concat(
                              t
                            ),
                          ],
                        },
                        metadata: {
                          parent_message_id: e.parent_message_id,
                          is_complete: !0,
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
          var t, n, r, o;
          function u(e) {
            return Object.keys(e).map(function (e) {
              return e.toLowerCase();
            });
          }
          return (0, i.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                var c;
                if (
                  ((t = { "content-type": "application/json" }),
                  (c = [u(e.headers), u(t)].flat()),
                  new Set(c).size !== c.length)
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
                if (((o = i.sent()), "chat" === e.api_function_type))
                  return [2, [JSON.parse(o)]];
                if ("kwargs" === e.api_function_type)
                  return [
                    2,
                    [
                      {
                        id: (0, s.Z)(),
                        author: {
                          role: l.uU.Tool,
                          name: ""
                            .concat(e.namespace, ".")
                            .concat(e.function_name),
                        },
                        content: { content_type: l.PX.Text, parts: [o] },
                        metadata: {
                          parent_message_id: e.parent_message_id,
                          is_complete: !0,
                        },
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
          var t, n, r, a, s, l;
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
                  c.m.danger(
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
                    c.m.danger(
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
                    c.m.danger(
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
                return (s = i.sent()), [3, 9];
              case 8:
                return (
                  i.sent(),
                  c.m.danger("Failed to fetch localhost OpenAPI spec."),
                  [2]
                );
              case 9:
                try {
                  l = o.ZP.parse(s);
                } catch (e) {}
                try {
                  l = JSON.parse(s);
                } catch (e) {}
                if (null == l)
                  return (
                    c.m.danger(
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
                  c.m.danger(
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
        s = n(24274),
        o = n(21437),
        l = ["approvedAip"];
      function u() {
        var e = (0, i.kP)().session,
          t = (0, o.Fl)().isPluginsAvailable,
          n = (0, r.a)(
            l,
            function () {
              return s.ZP.getPlugins({
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
          c = n.isLoading;
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
                        s,
                        o = (
                          null !== (i = t.categories) && void 0 !== i ? i : []
                        )[Symbol.iterator]();
                      !(n = (s = o.next()).done);
                      n = !0
                    ) {
                      var l = s.value;
                      null == e[l.id] &&
                        (e[l.id] = { id: l.id, title: l.title, items: [] }),
                        e[l.id].items.push(t);
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
                  return e;
                }, {})
              : {};
            return {
              approvedPlugins: u ? u.items : [],
              approvedPluginsByCategory: e,
              isLoading: c,
            };
          },
          [u, c]
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
        s = n(35448),
        o = n(24396),
        l = n(70079),
        u = n(24274),
        c = n(32983),
        d = n(76559),
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
          (e = ((t = (0, l.useContext)(c.XA)),
          (n = (0, s.NL)()),
          (0, o.a)({
            queryKey: t,
            queryFn: h,
            select: void 0,
            initialData: function () {
              var e =
                  null === (u = n.getQueryData(f.Z)) || void 0 === u
                    ? void 0
                    : u.items,
                r =
                  null === (c = n.getQueryData(d.V)) || void 0 === c
                    ? void 0
                    : c.items,
                i = [],
                s = !0,
                o = !1,
                l = void 0;
              try {
                for (
                  var u, c, h, g = t[Symbol.iterator]();
                  !(s = (h = g.next()).done);
                  s = !0
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
                (o = !0), (l = e);
              } finally {
                try {
                  s || null == g.return || g.return();
                } finally {
                  if (o) throw l;
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
        s = n(85023),
        o = n(74437),
        l = 3,
        u = [
          ["www.klarna.com", "server.shop.app"],
          ["apim.expedia.com", "kayak.com"],
          ["www.redfin.com", "plugins.zillow.com"],
          ["instacart.com", "api.tasty.co"],
        ],
        c = "oai/enabledPluginIds",
        d = (0, i.ZP)(function () {
          var e = Array.from(new Set(s.m.getItem(c)));
          return { enabledPluginIds: new Set(e.splice(0, l)) };
        });
      function f() {
        var e = (0, o.C)().installedPlugins,
          t = d().enabledPluginIds;
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
          d.setState(function () {
            return s.m.setItem(c, e), { enabledPluginIds: new Set(e) };
          });
      }
      function g(e) {
        d.setState(function (t) {
          if (t.enabledPluginIds.size >= l) return t;
          var n = (0, r._)(t.enabledPluginIds).concat([e]);
          return s.m.setItem(c, n), { enabledPluginIds: new Set(n) };
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
        s = n(24274),
        o = n(21437),
        l = ["installedAip"];
      function u() {
        var e = (0, i.kP)().session,
          t = (0, o.Fl)().isPluginsAvailable,
          n = (0, r.a)(
            l,
            function () {
              return s.ZP.getPlugins({
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
          c = n.isLoading;
        return (0, a.useMemo)(
          function () {
            return { installedPlugins: u ? u.items : [], isLoading: c };
          },
          [u, c]
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
        s = n.n(i),
        o = n(81292),
        l = { showAccountPaymentModal: !1 },
        u = (0, o.ZP)()(function (e) {
          return (0, a._)((0, r._)({}, l), {
            setShowAccountPaymentModal: function (t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : s();
              e({ showAccountPaymentModal: t }), n && n();
            },
          });
        });
    },
    48101: function (e, t, n) {
      n.d(t, {
        fv: function () {
          return C;
        },
        ZP: function () {
          return j;
        },
        Ub: function () {
          return _;
        },
      });
      var r = n(22830),
        a = n(4337),
        i = n(35250),
        s = n(70079),
        o = n(1454),
        l = n(34303),
        u = n(64135),
        c = n(75527),
        d = n(56244),
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
          as: s.Fragment,
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
                      as: s.Fragment,
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
          s = e.slideOver,
          l = e.onClose,
          u = (0, i.jsxs)(M, {
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
                          icon: o.q5L,
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
        return s
          ? (0, i.jsx)(x, { sidebarOpen: a, onClose: l, children: u })
          : a
          ? u
          : null;
      }
      function C(e) {
        var t = e.clientThreadId,
          n = e.isOpen,
          a = e.slideOver,
          l = e.onClose,
          f = c.tQ.getThreadCurrentLeafId(t),
          m = (0, c.u9)(t, f),
          p = (0, r._)((0, s.useState)(), 2),
          v = p[0],
          x = p[1],
          b = (0, u.hz)(),
          y = (0, s.useCallback)(function () {
            x(void 0);
          }, []),
          w = (0, s.useCallback)(
            function () {
              var e = c.tQ.getTree(t);
              navigator.clipboard.writeText(e.getTextFromThread(f));
            },
            [f, t]
          );
        if (!b.has("debug")) return null;
        var C = m.map(function (e, t) {
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
                    (0, d.Ej)(e),
                  ],
                }),
                (0, i.jsx)("div", { children: (0, d.RR)(e) }),
              ],
            },
            e.id
          );
        });
        return (0, i.jsxs)(j, {
          icon: o.cDN,
          title: "Debug",
          isOpen: n,
          slideOver: a,
          onClose: l,
          children: [
            (0, i.jsxs)("div", {
              className:
                "flex items-center justify-around gap-2 px-4 py-1 text-xs font-medium uppercase ",
              children: [
                (0, i.jsx)(k, { clientThreadId: t, messages: m }),
                (0, i.jsx)("div", {
                  children: (0, i.jsx)(h.Z, {
                    onCopy: w,
                    buttonText: "Copy text",
                  }),
                }),
              ],
            }),
            (0, i.jsx)(T, { children: C }),
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
      function _(e, t) {
        var n = JSON.stringify(t) + "\n",
          r = new Blob([n], { type: "application/json" }),
          a = URL.createObjectURL(r),
          i = document.createElement("a");
        (i.href = a),
          (i.download = "messages-".concat(
            c.tQ.getServerThreadId(e),
            ".jsonl"
          )),
          i.click(),
          URL.revokeObjectURL(a);
      }
      function k(e) {
        var t = e.clientThreadId,
          n = e.messages,
          r = (0, s.useCallback)(
            function () {
              _(t, n);
            },
            [t, n]
          );
        return (0, i.jsxs)(f.z, {
          onClick: r,
          color: "dark",
          size: "small",
          children: [
            (0, i.jsx)(m.ZP, { icon: o._hL }),
            "Download raw conversation",
          ],
        });
      }
      var M = l.Z.div(b()),
        T = l.Z.pre(y()),
        N = l.Z.div(w());
    },
    36112: function (e, t, n) {
      n.d(t, {
        MO: function () {
          return g;
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
        s = n(32787),
        o = n(85023),
        l = n(24274),
        u = n(64135),
        c = n(88038),
        d = n(97688),
        f = "oai/apps/hasSeenHistoryFilteredDisclosure/".concat("2023-03-21"),
        h = "conversationHistory";
      function g() {
        var e,
          t = (0, u.hz)().has(c.Ud),
          n = (0, u.Xj)().isLoading,
          a = (0, s.kP)().session,
          o = null == a ? void 0 : a.accessToken,
          d = !t && !!o && !n,
          f = (0, r.N)({
            queryKey: [h],
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
            enabled: d,
          }),
          g = f.data,
          m = f.fetchNextPage,
          p = f.hasNextPage,
          v = f.isInitialLoading,
          x = f.isFetchingNextPage,
          b = f.isError,
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
          isError: d && b,
        };
      }
      function m() {
        var e = (0, a.NL)();
        return (0, i.useCallback)(
          function () {
            e.invalidateQueries([h]);
          },
          [e]
        );
      }
      function p() {
        var e = (0, i.useRef)(!!o.m.getItem(f)),
          t = g(),
          n = t.data,
          r = t.isError;
        (0, i.useEffect)(
          function () {
            var t, a;
            r ||
              (null == n
                ? void 0
                : null === (t = n.pages) || void 0 === t
                ? void 0
                : null === (a = t[0]) || void 0 === a
                ? void 0
                : a.has_missing_conversations) !== !0 ||
              e.current ||
              d.m.warning(
                "We've restored conversation history for all ChatGPT users and resolved the underlying issue, which was caused by a significant bug in an open-source library.\n\nIn order to ensure that this issue does not reoccur, users will not be able to retrieve their chat history from the morning of March 20th. We apologize to our users for any difficulties this may cause.",
                {
                  duration: 0,
                  hasCloseButton: !0,
                  onRemove: function () {
                    o.m.setItem(f, !0), (e.current = !0);
                  },
                }
              );
          },
          [null == n ? void 0 : n.pages, r]
        );
      }
    },
    5046: function (e, t, n) {
      n.d(t, {
        BT: function () {
          return u;
        },
        Y8: function () {
          return c;
        },
        kc: function () {
          return o;
        },
        m0: function () {
          return l;
        },
        uU: function () {
          return s;
        },
      });
      var r = n(81949),
        a = n(81292),
        i = n(51132),
        s = "model_cap_exceeded",
        o = (0, a.ZP)(function () {
          return { serverThreadIds: new Set() };
        });
      function l(e) {
        o.setState(function (t) {
          return {
            serverThreadIds: new Set((0, r._)(t.serverThreadIds).concat([e])),
          };
        });
      }
      function u() {
        var e = c(function (e) {
            return e.isoDate;
          }),
          t = c(function (e) {
            return e.clearCapTimeout;
          }),
          n = Date.now(),
          r = e && new Date(e).getTime();
        return e && r && r <= n ? (t(), null) : e ? "gpt-4" : null;
      }
      var c = (0, a.ZP)()(
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
          return d;
        },
      });
      var r = n(24396),
        a = n(70079),
        i = n(32787),
        s = n(24274),
        o = n(64135),
        l = n(99585),
        u = n(5046),
        c = { textarea: "", "model-switcher": "" };
      function d() {
        var e = (0, i.kP)().session,
          t = (0, o.hz)(),
          n = (0, u.Y8)(function (e) {
            return e.isoDate;
          }),
          d = (0, l.xz)(n),
          f = (0, r.a)(
            ["modelMessageCap"],
            function () {
              return s.ZP.getModelMessageCap();
            },
            {
              enabled:
                (null == e ? void 0 : e.accessToken) != null &&
                t.has("model_preview"),
            }
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
              r = (null == f ? void 0 : f.message_disclaimer) || c;
            return n
              ? f && t && e
                ? {
                    textareaDisclaimer: r.textarea
                      .replaceAll("%FORMATTED_TIME%", d)
                      .replaceAll("%NUMERATOR%", "".concat(e))
                      .replaceAll("%DENOMINATOR%", n),
                    modelSwitcherDisclaimer: r["model-switcher"]
                      .replaceAll("%FORMATTED_TIME%", d)
                      .replaceAll("%NUMERATOR%", "".concat(e))
                      .replaceAll("%DENOMINATOR%", n),
                  }
                : {
                    textareaDisclaimer: c.textarea,
                    modelSwitcherDisclaimer: c["model-switcher"],
                  }
              : {
                  textareaDisclaimer: r.textarea,
                  modelSwitcherDisclaimer: r["model-switcher"],
                };
          },
          [f, d]
        );
      }
    },
    97732: function (e, t, n) {
      n.d(t, {
        Ri: function () {
          return j;
        },
        ZP: function () {
          return _;
        },
        dN: function () {
          return a;
        },
        i0: function () {
          return C;
        },
      });
      var r,
        a,
        i,
        s,
        o = n(96237),
        l = n(39324),
        u = n(81949),
        c = n(35250),
        d = n(41170),
        f = n(70079),
        h = n(32787),
        g = n(64135),
        m = n(21437),
        p = n(38317),
        v = n(5046),
        x = n(66523),
        b = n(90076);
      ((r = a || (a = {})).BROWSING = "browsing_model"),
        (r.CODE_INTERPRETER = "code_interpreter_model"),
        (r.PLUGINS = "plugins_model");
      var y =
          ((i = {}),
          (0, o._)(i, "gpt_3.5", {
            icon: p.jr,
            activeIcon: p.jr,
            backgroundColor: "#19c37d",
            buttonActiveClass: "text-brand-green",
            buttonHoverClass: "group-hover/button:text-brand-green",
            iconClass:
              "group-hover/option:!text-brand-green group-hover/options:text-gray-500",
            disclaimer: "Available to Free and Plus users",
            showSelectedValueBelow: !1,
          }),
          (0, o._)(i, "gpt_4", {
            icon: p.Bj,
            activeIcon: p.MP,
            backgroundColor: "#AB68FF",
            buttonActiveClass: "text-brand-purple",
            buttonHoverClass: "group-hover/button:text-brand-purple",
            iconClass:
              "group-hover/option:!text-brand-purple group-hover/options:text-gray-500",
            disclaimer: "Available exclusively to Plus users",
            showSelectedValueBelow: !1,
          }),
          (0, o._)(i, "other", {
            icon: d.Z,
            activeIcon: d.Z,
            buttonActiveClass: "text-orange-500",
            buttonHoverClass: "group-hover/button:text-orange-500",
            showSelectedValueBelow: !0,
          }),
          i),
        w =
          ((s = {}),
          (0, o._)(s, a.BROWSING, {
            icon: p.xx,
            activeIcon: p.jZ,
            name: (0, c.jsxs)("span", {
              children: [
                "Browse with",
                " ",
                (0, c.jsx)(p.ZP, {
                  icon: p.jE,
                  className: "-mt-[3px] inline-block",
                }),
                " ",
                "Bing",
              ],
            }),
          }),
          (0, o._)(s, a.CODE_INTERPRETER, {
            icon: p.dY,
            activeIcon: p.b3,
            name: "Code Interpreter",
          }),
          (0, o._)(s, a.PLUGINS, {
            icon: p.oV,
            activeIcon: p.Z8,
            name: "Plugins",
          }),
          s);
      function j(e) {
        var t = _();
        return (0, f.useMemo)(
          function () {
            return (function (e, t) {
              if (t)
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  if (r.options.length > 0) {
                    var a,
                      i,
                      s = r.options.find(function (e) {
                        return e.value === t;
                      });
                    if (s)
                      return {
                        item: s,
                        categoryId: r.categoryId,
                        backgroundColor: y[r.categoryId].backgroundColor,
                        icon:
                          null !==
                            (i =
                              null !== (a = s.icon) && void 0 !== a
                                ? a
                                : r.icon) && void 0 !== i
                            ? i
                            : y[r.categoryId].icon,
                      };
                  }
                }
            })(t, e);
          },
          [t, e]
        );
      }
      function C(e, t) {
        return (0, b.OX)().some(function (n) {
          return n[t] === e;
        });
      }
      function _() {
        var e = (0, b.OX)(),
          t = (0, b.B9)(),
          n = (0, h.kP)().session,
          r = (0, v.BT)(),
          i = (0, m.Fl)(),
          s = (0, x.Z)().modelSwitcherDisclaimer,
          o = (0, g.hz)(),
          l = (null == n ? void 0 : n.user) != null && (0, h.yl)(n.user),
          c = (0, b.B8)(),
          d = c.enabledModelsInCategoriesById,
          p = c.enabledModelsNotInCategoriesById;
        return (0, f.useMemo)(
          function () {
            var n = [],
              c = !0,
              f = !1,
              h = void 0;
            try {
              for (
                var g, m = e[Symbol.iterator]();
                !(c = (g = m.next()).done);
                c = !0
              ) {
                var v = g.value;
                if (d.has(v.default_model)) {
                  var x = y[v.category] || {},
                    b = r === v.default_model,
                    j = t.get(v.default_model),
                    C = b
                      ? []
                      : (function (e, t, n, r, i) {
                          var s = e.isBrowsingEnabled,
                            o = e.isPluginsEnabled,
                            l = e.isCodeInterpreterEnabled,
                            u = [];
                          if (
                            s &&
                            null != n[a.BROWSING] &&
                            r.has(n[a.BROWSING])
                          ) {
                            var c = w[a.BROWSING];
                            u.push(
                              k(i.get(n[a.BROWSING]), {
                                icon: c.icon,
                                name: c.name,
                                disabled: t.has("browsing_disabled"),
                                activeIcon: c.activeIcon,
                              })
                            );
                          }
                          if (
                            l &&
                            null != n[a.CODE_INTERPRETER] &&
                            r.has(n[a.CODE_INTERPRETER])
                          ) {
                            var d = w[a.CODE_INTERPRETER];
                            u.push(
                              k(i.get(n[a.CODE_INTERPRETER]), {
                                icon: d.icon,
                                name: d.name,
                                activeIcon: d.activeIcon,
                              })
                            );
                          }
                          if (
                            o &&
                            null != n[a.PLUGINS] &&
                            r.has(n[a.PLUGINS])
                          ) {
                            var f = w[a.PLUGINS];
                            u.push(
                              k(i.get(n[a.PLUGINS]), {
                                icon: f.icon,
                                name: f.name,
                                disabled: t.has("plugins_disabled"),
                                activeIcon: f.activeIcon,
                              })
                            );
                          }
                          return u;
                        })(i, o, v, d, t);
                  n.push({
                    categoryId: v.category,
                    value: j.id,
                    name: v.human_category_name,
                    description: b ? s : j.description,
                    disclaimer: x.disclaimer,
                    buttonActiveClass: x.buttonActiveClass,
                    buttonHoverClass: x.buttonHoverClass,
                    iconClass: x.iconClass,
                    icon: x.icon,
                    activeIcon: x.activeIcon,
                    options: [
                      k(j, {
                        icon: x.icon,
                        activeIcon: x.activeIcon,
                        name: "Default",
                      }),
                    ].concat((0, u._)(C)),
                    disabled: b,
                    showSelectedValueBelow: !1,
                  });
                }
              }
            } catch (e) {
              (f = !0), (h = e);
            } finally {
              try {
                c || null == m.return || m.return();
              } finally {
                if (f) throw h;
              }
            }
            var _ = Array.from(p).map(function (e) {
              return t.get(e);
            });
            if (_.length > 0 && l) {
              var M = _[0],
                T = y.other;
              n.push({
                categoryId: "other",
                value: null == M ? void 0 : M.id,
                name: "Alpha",
                buttonActiveClass: T.buttonActiveClass,
                buttonHoverClass: T.buttonHoverClass,
                options: _.map(function (e) {
                  return k(e);
                }),
                showSelectedValueBelow: !0,
                icon: T.icon,
                activeIcon: T.activeIcon,
              });
            }
            return n;
          },
          [p, l, e, d, r, t, i, o, s]
        );
      }
      function k(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, l._)({ value: e.id, name: e.title, tags: e.tags }, t);
      }
    },
    90076: function (e, t, n) {
      n.d(t, {
        B8: function () {
          return F;
        },
        B9: function () {
          return N;
        },
        Bv: function () {
          return S;
        },
        Gg: function () {
          return P;
        },
        H6: function () {
          return D;
        },
        OX: function () {
          return M;
        },
        S: function () {
          return a;
        },
        Xy: function () {
          return Z;
        },
        ZL: function () {
          return k;
        },
        fm: function () {
          return I;
        },
        iu: function () {
          return T;
        },
        n2: function () {
          return C;
        },
      });
      var r,
        a,
        i = n(21722),
        s = n(39324),
        o = n(71209),
        l = n(81949),
        u = n(39889),
        c = n(24396),
        d = n(68555),
        f = n(70079),
        h = n(32787),
        g = n(24274),
        m = n(64135),
        p = n(75527),
        v = n(21437),
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
        C = new Set(["text-davinci-002-render-paid"]);
      function _(e) {
        var t = (0, f.useContext)(x.QL).historyDisabled,
          n = (0, h.kP)(),
          r = n.session,
          a = n.loading,
          s = null == r ? void 0 : r.accessToken;
        return (0, c.a)({
          queryKey: ["models", { isHistoryDisabled: !t }],
          queryFn: (0, i._)(function () {
            return (0, u.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, g.ZP.getModels(s, t)];
                case 1:
                  return [2, e.sent()];
              }
            });
          }),
          enabled: !a && null != s,
          select: e,
        });
      }
      function k() {
        return _().isLoading;
      }
      function M() {
        var e = _(function (e) {
          return e.categories;
        }).data;
        return null != e ? e : [];
      }
      function T() {
        var e = _(function (e) {
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
        var e = _(function (e) {
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
      function P(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = function (e) {
            var t,
              n,
              r = s.get(e);
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
          r = (0, m.hz)(),
          i = (0, l._)(e),
          s = N();
        if (!t && r.has("priority_driven_models_list")) return i[0];
        var o = (0, l._)(i).find(function (e) {
          return n(e);
        });
        return null != o ? o : i[0];
      }
      function I() {
        var e = (0, d.useRouter)(),
          t = e.query;
        return (0, f.useCallback)(
          function (n) {
            e.replace(
              {
                pathname: e.basePath,
                query: (0, o._)((0, s._)({}, t), {
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
      function S(e, t) {
        var n,
          r = decodeURIComponent(
            null !== (n = (0, d.useRouter)().query.model) && void 0 !== n
              ? n
              : ""
          ),
          a = (0, p.XK)(t),
          i = F().enabledModelsById,
          s = (0, v.Fl)().isBetaFeaturesUiEnabled,
          o = (0, b.kc)().serverThreadIds,
          l = T(),
          u = s ? i : l,
          c = P(u);
        return (0, f.useMemo)(
          function () {
            if (0 !== u.size) {
              var t = void 0 !== a && o.has(a);
              return !t && null != e && l.has(e)
                ? null != e
                  ? e
                  : void 0
                : !t && r && u.has(r)
                ? null != r
                  ? r
                  : void 0
                : null != c
                ? c
                : void 0;
            }
          },
          [l, c, e, r, u, a, o]
        );
      }
      function Z(e, t) {
        var n = S(e, t),
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
      function F() {
        var e = M(),
          t = T(),
          n = N(),
          r = (0, v.Fl)();
        return (0, f.useMemo)(
          function () {
            var i,
              s = e.reduce(
                function (e, a) {
                  var i,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d = e.enabledModelsInCategoriesById,
                    f = e.availableModelsInCategoriesById,
                    h = t.has(a.default_model) ? a.default_model : null;
                  null != h && (f.add(h), d.add(h));
                  var g = t.has(
                    null !== (i = a[y.dN.BROWSING]) && void 0 !== i ? i : ""
                  )
                    ? n.get(
                        null !== (s = a[y.dN.BROWSING]) && void 0 !== s ? s : ""
                      )
                    : null;
                  g && (f.add(g.id), r.isBrowsingEnabled && d.add(g.id));
                  var m = t.has(
                    null !== (o = a[y.dN.CODE_INTERPRETER]) && void 0 !== o
                      ? o
                      : ""
                  )
                    ? n.get(
                        null !== (l = a[y.dN.CODE_INTERPRETER]) && void 0 !== l
                          ? l
                          : ""
                      )
                    : null;
                  m && (f.add(m.id), r.isCodeInterpreterEnabled && d.add(m.id));
                  var p = t.has(
                    null !== (u = a[y.dN.PLUGINS]) && void 0 !== u ? u : ""
                  )
                    ? n.get(
                        null !== (c = a[y.dN.PLUGINS]) && void 0 !== c ? c : ""
                      )
                    : null;
                  return (
                    p && (f.add(p.id), r.isPluginsEnabled && d.add(p.id)), e
                  );
                },
                {
                  enabledModelsInCategoriesById: new Set(),
                  availableModelsInCategoriesById: new Set(),
                }
              ),
              o = s.enabledModelsInCategoriesById,
              u = s.availableModelsInCategoriesById,
              c = new Set(
                Array.from(t).filter(function (e) {
                  return !u.has(e);
                })
              ),
              d = new Set(
                Array.from(c).filter(function (e) {
                  var t;
                  return !(null === (t = n.get(e)) || void 0 === t
                    ? void 0
                    : t.tags.includes(a.MOBILE));
                })
              );
            return {
              enabledModelsInCategoriesById: o,
              availableModelsInCategoriesById: u,
              enabledModelsNotInCategoriesById: d,
              enabledModelsById: new Set((0, l._)(o).concat((0, l._)(d))),
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
          properties: e.qualitative_properties,
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
        s = n(81292),
        o = {
          flags: {
            isUserInCanPayGroup: !1,
            failwhaleBypassEnabled: !1,
            sharingEnabled: !1,
            messageRedesign: !1,
          },
        },
        l = (0, s.ZP)()(function (e, t) {
          return (0, i._)((0, a._)({}, o), {
            updateFlagValue: function (n, s) {
              var o = t().flags;
              e({ flags: (0, i._)((0, a._)({}, o), (0, r._)({}, n, s)) });
            },
          });
        });
    },
    75527: function (e, t, n) {
      n.d(t, {
        tQ: function () {
          return S;
        },
        iN: function () {
          return I;
        },
        _L: function () {
          return a;
        },
        OX: function () {
          return _;
        },
        Zz: function () {
          return k;
        },
        ax: function () {
          return Z;
        },
        r7: function () {
          return Q;
        },
        XK: function () {
          return F;
        },
        je: function () {
          return V;
        },
        Uy: function () {
          return H;
        },
        GD: function () {
          return O;
        },
        JI: function () {
          return U;
        },
        U0: function () {
          return B;
        },
        oq: function () {
          return A;
        },
        Hk: function () {
          return q;
        },
        UL: function () {
          return D;
        },
        Kt: function () {
          return E;
        },
        Ro: function () {
          return R;
        },
        GR: function () {
          return L;
        },
        qA: function () {
          return z;
        },
        XL: function () {
          return W;
        },
        u9: function () {
          return Y;
        },
        nh: function () {
          return G;
        },
        lA: function () {
          return J;
        },
        dz: function () {
          return $;
        },
        qN: function () {
          return T;
        },
      });
      var r,
        a,
        i = n(39324),
        s = n(71209),
        o = n(24396),
        l = n(61888),
        u = n(68555),
        c = n(70079),
        d = n(81292),
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
        y = n(24274),
        w = n(32983),
        j = "NEW:",
        C = 0;
      function _() {
        return "".concat(j).concat(C++);
      }
      function k(e) {
        return e.startsWith(j);
      }
      ((r = a || (a = {})).NewChat = "NewChat"),
        (r.Server = "Server"),
        (r.User = "User"),
        (r.Generated = "Generated"),
        (r.Unknown = "Unknown");
      var M = {},
        T = (0, d.ZP)(
          (0, f.n)(function () {
            return {
              threads: {},
              clientNewThreadIdToServerIdMapping: {},
              threadRetainCounts: {},
            };
          })
        ),
        N = T.getState,
        P = T.setState,
        I = {
          resolveThreadId: function (e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : N();
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
                  : N(),
              a = I.resolveThreadId(e, r);
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
                  : N(),
              i = I.resolveThreadId(e, a);
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
                  : N(),
              n = I.resolveThreadId(e, t);
            return null != t.threads[n] ? t.threads[n].titleSource : a.Unknown;
          },
          getThreadCreateTime: function (e) {
            var t,
              n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : N(),
              a = I.resolveThreadId(e, r);
            return null === (t = r.threads[a]) || void 0 === t
              ? void 0
              : null === (n = t.initialThreadData) || void 0 === n
              ? void 0
              : n.createTime;
          },
        },
        S = {
          getOrInitThread: function (e) {
            var t = S.resolveThreadId(e);
            return null != N().threads[t]
              ? N().threads[t]
              : (S.resetThread(e), N().threads[e]);
          },
          getServerThreadId: function (e) {
            return k(e) ? N().clientNewThreadIdToServerIdMapping[e] : e;
          },
          setServerIdForNewThread: function (e, t) {
            void 0 === N().clientNewThreadIdToServerIdMapping[e] &&
              P(function (n) {
                (n.threads[t] = n.threads[e]),
                  delete n.threads[e],
                  (n.clientNewThreadIdToServerIdMapping[e] = t);
              });
          },
          initThreadFromServerData: function (e, t) {
            var n,
              r,
              o,
              l,
              u,
              c,
              d,
              f,
              h,
              v,
              x =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              y =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : void 0,
              w = S.resolveThreadId(e);
            if (null != N().threads[w] || x) {
              var j =
                ((r =
                  null ===
                    (n = Object.values(t.mapping).find(function (e) {
                      return null === e.parent;
                    })) || void 0 === n
                    ? void 0
                    : n.id),
                (o = new Set()),
                (l = new Set()),
                (t.moderation_results || []).forEach(function (e) {
                  e.blocked
                    ? l.add(e.message_id)
                    : e.flagged && o.add(e.message_id);
                }),
                {
                  rootId: r,
                  mapping: Object.keys(t.mapping).reduce(function (e, n) {
                    var r,
                      a = t.mapping[n],
                      u = a.parent,
                      c = a.children,
                      d = (0, g._)(a, ["parent", "children"]),
                      f = t.mapping[n].message || m.Cv.createRootMessage();
                    return (
                      l.has(f.id) ? (r = p.sK) : o.has(f.id) && (r = p.Mf),
                      (e[n] = (0, i._)(
                        (0, s._)((0, i._)({}, d), {
                          message: f,
                          children: c || [],
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
                (null === (u = N().threads[w]) || void 0 === u
                  ? void 0
                  : u.isLoading) !== !1
              ) {
                var C =
                    null !== (c = j.mapping) && void 0 !== c
                      ? c
                      : m.Cv.createTree(),
                  _ = {
                    thread: C,
                    initialCurrentLeafId:
                      null !==
                        (f =
                          null !== (d = j.initialCurrentLeafId) && void 0 !== d
                            ? d
                            : j.rootId) && void 0 !== f
                        ? f
                        : "root",
                    threadId: w,
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
                    })(j.mapping, j.initialCurrentLeafId),
                    pluginIds:
                      null !== (v = t.plugin_ids) && void 0 !== v ? v : [],
                    authorName: j.authorName,
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
                  M = _.initialCurrentLeafId;
                P(function (e) {
                  var t;
                  e.threads[w] = (0, s._)(
                    (0, i._)(
                      {},
                      null !== (t = e.threads[w]) && void 0 !== t ? t : {}
                    ),
                    {
                      initialThreadData: _,
                      title: _.title,
                      titleSource: a.Server,
                      tree: k,
                      currentLeafId: M,
                      isLoading: !1,
                      continuingFromSharedConversationId: y,
                    }
                  );
                }),
                  S.recomputeConversationTurns(
                    w,
                    N().threads[w].currentLeafId,
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
            S.deleteThread(e),
              P(function (n) {
                n.threads[e] = {
                  initialThreadData: t,
                  tree: new m.Cv(t.thread),
                  title: t.title,
                  titleSource: a.NewChat,
                  currentLeafId: t.initialCurrentLeafId,
                  conversationTurns: [],
                  isLoading: !k(e),
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
              r = S.resolveThreadId(e);
            return null !==
              (n =
                null === (t = N().threads[r]) || void 0 === t
                  ? void 0
                  : t.currentLeafId) && void 0 !== n
              ? n
              : "root";
          },
          setThreadCurrentLeafId: function (e, t) {
            var n,
              r,
              a = S.resolveThreadId(e);
            if (null != N().threads[a]) {
              P(function (e) {
                e.threads[a].currentLeafId = t;
              });
              var i = N();
              S.recomputeConversationTurns(
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
            var r = S.resolveThreadId(e);
            null != N().threads[r] &&
              P(function (e) {
                (e.threads[r].title = t), (e.threads[r].titleSource = n);
              });
          },
          getTitle: function (e) {
            var t;
            return null !== (t = I.getThreadCustomTitle(e)) && void 0 !== t
              ? t
              : I.getThreadDataTitle(e);
          },
          getTitleAndSource: function (e) {
            var t;
            return {
              title:
                null !== (t = I.getThreadCustomTitle(e)) && void 0 !== t
                  ? t
                  : I.getThreadDataTitle(e),
              titleSource: I.getThreadTitleSource(e),
            };
          },
          updateTree: function (e, t) {
            var n,
              r,
              a,
              i,
              s = S.resolveThreadId(e);
            if (!(null != N().threads[s])) {
              console.warn("Thread does not exist, cannot update tree: ", s);
              return;
            }
            t(S.getTree(e));
            var o = N(),
              l =
                null !==
                  (a =
                    null === (n = o.threads[s]) || void 0 === n
                      ? void 0
                      : n.currentLeafId) && void 0 !== a
                  ? a
                  : "root",
              u =
                null !==
                  (i =
                    null === (r = o.threads[s]) || void 0 === r
                      ? void 0
                      : r.conversationTurns) && void 0 !== i
                  ? i
                  : [];
            S.recomputeConversationTurns(s, l, u);
          },
          getTree: function (e) {
            var t,
              n,
              r = S.resolveThreadId(e);
            return null !==
              (n =
                null === (t = N().threads[r]) || void 0 === t
                  ? void 0
                  : t.tree) && void 0 !== n
              ? n
              : new m.Cv();
          },
          resolveThreadId: function (e) {
            return I.resolveThreadId(e);
          },
          recomputeConversationTurns: function (e, t, n) {
            var r = S.resolveThreadId(e);
            P(function (e) {
              e.threads[r] &&
                (e.threads[r].conversationTurns =
                  S.computeThreadConversationTurns(r, t, n));
            });
          },
          computeThreadConversationTurns: function (e, t, n) {
            var r = S.resolveThreadId(e);
            return S.getTree(r)
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
              s,
              o = S.resolveThreadId(e),
              l =
                null !==
                  (i =
                    null === (r = N().threads[o]) || void 0 === r
                      ? void 0
                      : r.currentLeafId) && void 0 !== i
                  ? i
                  : "root";
            return null != t && t !== l
              ? S.computeThreadConversationTurns(o, t, null != n ? n : [])
              : null !==
                  (s =
                    null === (a = N().threads[o]) || void 0 === a
                      ? void 0
                      : a.conversationTurns) && void 0 !== s
              ? s
              : [];
          },
          getThreadModel: function (e) {
            var t,
              n = S.resolveThreadId(e);
            return null === (t = N().threads[n]) || void 0 === t
              ? void 0
              : t.initialThreadData.model;
          },
          removeContinuingFromSharedConversationId: function (e) {
            var t = S.resolveThreadId(e);
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
              clearTimeout(M[e]);
          },
          releaseThread: function (e) {
            null != N().threads[e] &&
              (P(function (t) {
                var n;
                t.threadRetainCounts[e] = Math.max(
                  (null !== (n = t.threadRetainCounts[e]) && void 0 !== n
                    ? n
                    : 0) - 1,
                  0
                );
              }),
              N().threadRetainCounts[e] > 0 ||
                (clearTimeout(M[e]),
                (M[e] = setTimeout(function () {
                  null == N().threads[e] ||
                    N().threadRetainCounts[e] > 0 ||
                    S.deleteThread(e);
                }, 3e4))));
          },
        },
        Z = function (e, t) {
          var n = (0, u.useRouter)(),
            r = (0, h.kP)().session,
            a = (0, c.useContext)(w.QL).historyDisabled;
          (0, o.a)(
            ["conversation", e],
            function () {
              return y.ZP.getConversation(
                e,
                null == r ? void 0 : r.accessToken
              );
            },
            {
              enabled:
                !k(e) &&
                (null == r ? void 0 : r.accessToken) !== void 0 &&
                !a &&
                !t,
              onError: function () {
                n.replace("/"),
                  x.m.danger("Unable to load conversation ".concat(e));
              },
              onSuccess: function (t) {
                t && S.initThreadFromServerData(e, t);
              },
            }
          ),
            (0, c.useEffect)(
              function () {
                S.getOrInitThread(e);
              },
              [e, n]
            );
        },
        F = function (e) {
          return T(function (t) {
            return k(e) ? t.clientNewThreadIdToServerIdMapping[e] : e;
          });
        },
        D = function (e) {
          return T(function (t) {
            var n,
              r,
              a = S.resolveThreadId(e);
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
        E = function (e) {
          return T(function (t) {
            var n,
              r,
              a = S.resolveThreadId(e);
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
        L = function (e) {
          var t = T(function (t) {
            var n,
              r,
              a = S.resolveThreadId(e);
            return null === (n = t.threads[a]) || void 0 === n
              ? void 0
              : null === (r = n.initialThreadData) || void 0 === r
              ? void 0
              : r.pluginIds;
          });
          return (0, c.useMemo)(
            function () {
              return null != t ? t : [];
            },
            [t]
          );
        },
        A = function (e) {
          return T(function () {
            return S.getThreadCurrentLeafId(e);
          });
        },
        R = function (e) {
          return T(function () {
            return S.getThreadModel(e);
          });
        },
        B = function (e, t) {
          var n = (0, c.useRef)([]);
          return T(function () {
            var r,
              a = S.getThreadConversationTurns(e, t, n.current);
            return (
              (n.current = a),
              null !== (r = null == a ? void 0 : a.length) && void 0 !== r
                ? r
                : 0
            );
          });
        },
        U = function (e, t) {
          var n = (0, c.useRef)([]);
          return T(function () {
            var r = S.getThreadConversationTurns(e, t, n.current);
            return (n.current = r), r;
          });
        },
        O = function (e, t, n) {
          var r = (0, c.useRef)([]);
          return T(function () {
            var a = S.getThreadConversationTurns(e, n, r.current);
            return (r.current = a), a[t];
          });
        },
        q = function (e) {
          var t = A(e);
          return (0, c.useMemo)(
            function () {
              var n,
                r,
                a = S.getThreadConversationTurns(e, t, []),
                i =
                  null !== (n = null == a ? void 0 : a.length) && void 0 !== n
                    ? n
                    : 0,
                s =
                  null !== (r = null == a ? void 0 : a[i - 1]) && void 0 !== r
                    ? r
                    : null;
              return 0 === i ? t : m.Cv.getRequestIdFromConversationTurn(s);
            },
            [t, e]
          );
        },
        z = function (e) {
          return T(function () {
            return S.getTitle(e);
          });
        },
        W = function (e) {
          return T(function () {
            return S.getTitleAndSource(e);
          });
        },
        H = function (e) {
          return T(function () {
            var t,
              n = S.resolveThreadId(e);
            return null === (t = N().threads[n]) || void 0 === t
              ? void 0
              : t.continuingFromSharedConversationId;
          });
        },
        V = function (e) {
          return T(function () {
            var t,
              n,
              r = S.resolveThreadId(e);
            return null === (t = N().threads[r]) || void 0 === t
              ? void 0
              : null === (n = t.initialThreadData) || void 0 === n
              ? void 0
              : n.authorName;
          });
        },
        G = function (e, t) {
          return T(function () {
            return S.getTree(e).getNode(t);
          });
        },
        J = function (e, t) {
          return T(function () {
            var n, r;
            return (
              null !==
                (r =
                  null === (n = S.getTree(e)) || void 0 === n
                    ? void 0
                    : n.getHasErrorFromNode(t)) &&
              void 0 !== r &&
              r
            );
          });
        },
        $ = function (e, t) {
          return T(function () {
            var n, r;
            return (
              null !==
                (r =
                  null === (n = S.getTree(e)) || void 0 === n
                    ? void 0
                    : n.isMessageIncomplete(t)) &&
              void 0 !== r &&
              r
            );
          });
        },
        Y = function (e, t) {
          return T(function () {
            var n = S.getTree(e);
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
        Q = function (e) {
          return T(function () {
            var t,
              n = S.resolveThreadId(e);
            return (
              (null === (t = N().threads[n]) || void 0 === t
                ? void 0
                : t.continuingFromSharedConversationId) != null
            );
          });
        };
    },
    32689: function (e, t, n) {
      n.d(t, {
        B: function () {
          return a;
        },
        tN: function () {
          return d;
        },
        vm: function () {
          return f;
        },
      });
      var r,
        a,
        i,
        s = n(39324),
        o = n(81292),
        l = n(85023);
      ((r = a || (a = {})).AccountPortal = "account-portal"),
        (r.UserContext = "user-context"),
        (r.DownloadMessages = "download-messages");
      var u = "UiState.isNavigationCollapsed.1",
        c = {
          isDesktopNavCollapsed:
            null !== (i = l.m.getItem(u)) && void 0 !== i && i,
          sharingModalThreadId: void 0,
          isFilesModalOpen: !1,
          activeSidebar: !1,
          activeModals: new Set(),
        },
        d = (0, o.ZP)()(function () {
          return (0, s._)({}, c);
        }),
        f = {
          toggleDesktopNavCollapsed: function () {
            d.setState(function (e) {
              var t = !e.isDesktopNavCollapsed;
              return l.m.setItem(u, t), { isDesktopNavCollapsed: t };
            });
          },
          openSharingModal: function (e) {
            d.setState({ sharingModalThreadId: e });
          },
          closeSharingModal: function () {
            d.setState({ sharingModalThreadId: void 0 });
          },
          openFilesModal: function () {
            d.setState({ isFilesModalOpen: !0 });
          },
          closeFilesModal: function () {
            d.setState({ isFilesModalOpen: !1 });
          },
          setActiveSidebar: function (e) {
            d.setState({ activeSidebar: e });
          },
          toggleActiveSidebar: function (e) {
            d.setState(function (t) {
              return { activeSidebar: t.activeSidebar !== e && e };
            });
          },
          openModal: function (e) {
            d.setState(function (t) {
              var n = new Set(t.activeModals);
              return n.add(e), { activeModals: n };
            });
          },
          closeModal: function (e) {
            d.setState(function (t) {
              var n = new Set(t.activeModals);
              return n.delete(e), { activeModals: n };
            });
          },
        };
    },
    21437: function (e, t, n) {
      n.d(t, {
        Fl: function () {
          return C;
        },
        N2: function () {
          return j;
        },
        tr: function () {
          return a;
        },
      });
      var r,
        a,
        i,
        s = n(96237),
        o = n(39324),
        l = n(71209),
        u = n(22830),
        c = n(35448),
        d = n(24396),
        f = n(70079),
        h = n(81292),
        g = n(32787),
        m = n(24274),
        p = n(64135),
        v = {
          isBetaFeaturesUiEnabled: !1,
          isBrowsingAvailable: !1,
          isBrowsingEnabled: !1,
          isPluginsAvailable: !1,
          isPluginsEnabled: !1,
          isCodeInterpreterAvailable: !1,
          isCodeInterpreterEnabled: !1,
          isLegacyToolsUser: !1,
          isNewToolsUser: !1,
        };
      ((r = a || (a = {})).BROWSING = "browsing"),
        (r.CODE_INTERPRETER = "code_interpreter"),
        (r.PLUGINS = "plugins");
      var x =
          ((i = {}),
          (0, s._)(i, a.BROWSING, "isBrowsingEnabled"),
          (0, s._)(i, a.CODE_INTERPRETER, "isCodeInterpreterEnabled"),
          (0, s._)(i, a.PLUGINS, "isPluginsEnabled"),
          i),
        b = (0, h.ZP)()(function () {
          return v;
        }),
        y = {
          updateUserSettings: function (e) {
            b.setState(function (t) {
              return (0, o._)({}, t, e);
            });
          },
          updateUserSettingsFromFeatures: function (e) {
            b.setState(function (t) {
              return (0, o._)({}, t, y.getUserSettingsFromFeatures(e));
            });
          },
          getUserSettingsFromFeatures: function (e) {
            return Object.entries(e).reduce(function (e, t) {
              var n = (0, u._)(t, 2),
                r = n[0],
                a = n[1],
                i = x[r];
              return i ? (0, l._)((0, o._)({}, e), (0, s._)({}, i, a)) : e;
            }, {});
          },
        },
        w = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return ["userSettings", e];
        };
      function j() {
        var e = (0, g.kP)().session,
          t = (0, c.NL)();
        return function () {
          return t.invalidateQueries({
            queryKey: w(null == e ? void 0 : e.accessToken),
          });
        };
      }
      function C() {
        var e = (0, g.kP)().session,
          t = (0, p.hz)(),
          n = t.has("beta_features");
        return (
          (0, d.a)(
            w(null == e ? void 0 : e.accessToken),
            function () {
              return m.ZP.getUserSettingBetaFeatures(e.accessToken).then(
                function (e) {
                  return null != e && y.updateUserSettingsFromFeatures(e), e;
                }
              );
            },
            { enabled: n && (null == e ? void 0 : e.accessToken) != null }
          ),
          (0, f.useEffect)(
            function () {
              y.updateUserSettings({
                isBetaFeaturesUiEnabled: n,
                isBrowsingAvailable:
                  t.has("browsing_available") || t.has("tools"),
                isCodeInterpreterAvailable: t.has("tools2"),
                isPluginsAvailable:
                  t.has("plugins_available") || t.has("tools3"),
                isLegacyToolsUser:
                  (t.has("tools") && t.has("browsing_available")) ||
                  (t.has("tools3") && t.has("plugins_available")),
                isNewToolsUser:
                  (t.has("browsing_available") && !t.has("tools")) ||
                  (t.has("plugins_available") && !t.has("tools3")),
              });
            },
            [t, n]
          ),
          b(function (e) {
            return e;
          })
        );
      }
    },
    36716: function (e, t, n) {
      n.d(t, {
        Op: function () {
          return h;
        },
        Qd: function () {
          return c;
        },
        T$: function () {
          return d;
        },
        s8: function () {
          return f;
        },
      });
      var r = n(35250),
        a = n(1454),
        i = n(180),
        s = n(38317),
        o = n(57924),
        l = "&#8203;",
        u = "oaicite:";
      function c(e, t) {
        if (!t) return e;
        for (var n = [], r = 1, a = {}, i = 0; i < t.length; i++) {
          var s = t[i],
            o = s.metadata,
            c = s.invalid_reason;
          if (o) {
            var d = o.url;
            null == a[d] && ((a[d] = r), r++), n.push(a[d]);
          } else null != c && (n.push(r), r++);
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
                .concat(l, "``")
                .concat(u)
                .concat(JSON.stringify(x), "``")
                .concat(l) +
              e.slice(m));
        }
        return e;
      }
      function d(e) {
        if (!e.startsWith(u)) return null;
        try {
          return JSON.parse(e.slice(u.length));
        } catch (e) {
          return { number: -1 };
        }
      }
      function f(e) {
        var t,
          n = e.displayInfo;
        return (0, r.jsx)(o.u, {
          label: (0, r.jsx)(h, {
            pageInfo: n.metadata,
            invalidReason: n.invalid_reason,
          }),
          side: "top",
          sideOffset: 4,
          withArrow: !1,
          interactive: !0,
          wide: !0,
          children: (0, r.jsx)("a", {
            href: null === (t = n.metadata) || void 0 === t ? void 0 : t.url,
            target: "_blank",
            rel: "noreferrer",
            className: "px-0.5 text-green-600 !no-underline",
            children: (0, r.jsx)("sup", { children: n.number }),
          }),
        });
      }
      function h(e) {
        var t = e.pageInfo,
          n = e.invalidReason,
          o = e.onClick;
        return (0, r.jsx)("a", {
          href: null == t ? void 0 : t.url,
          target: "_blank",
          rel: "noreferrer",
          className: "text-xs !no-underline",
          onClick: o,
          children: t
            ? (0, r.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, r.jsx)("div", {
                    className: "flex shrink-0 items-center justify-center",
                    children: (0, r.jsx)(i.Z, {
                      url: t.url,
                      className: "my-0",
                    }),
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
              }),
        });
      }
    },
    77442: function (e, t, n) {
      n.d(t, {
        _G: function () {
          return a;
        },
        dQ: function () {
          return g;
        },
        oc: function () {
          return d;
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
        s = n(96237),
        o = n(22830),
        l = n(70079);
      ((r = a || (a = {})).Mobile = "mobile"),
        (r.Small = "small"),
        (r.Medium = "medium"),
        (r.Large = "large"),
        (r.XLarge = "xlarge");
      var u =
        ((i = {}),
        (0, s._)(i, a.Small, 640),
        (0, s._)(i, a.Medium, 768),
        (0, s._)(i, a.Large, 1024),
        (0, s._)(i, a.XLarge, 1280),
        i);
      function c(e) {
        var t = function () {
            i(n(e));
          },
          n = function (e) {
            return window.matchMedia(e).matches;
          },
          r = (0, o._)((0, l.useState)(n(e)), 2),
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
      function d() {
        return c("(min-width: ".concat(u[a.Small], "px)"));
      }
      function f() {
        return c("(min-width: ".concat(u[a.Medium], "px)"));
      }
      function h() {
        return c("(min-width: ".concat(u[a.Large], "px)"));
      }
      function g() {
        var e = d(),
          t = f(),
          n = h();
        return c("(min-width: ".concat(u[a.XLarge], "px)"))
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
          return g;
        },
        JD: function () {
          return c;
        },
        RR: function () {
          return h;
        },
        Rc: function () {
          return f;
        },
        lD: function () {
          return u;
        },
        oH: function () {
          return l;
        },
        qi: function () {
          return o;
        },
        qs: function () {
          return d;
        },
        rH: function () {
          return s;
        },
      });
      var r,
        a,
        i = n(69403);
      function s(e) {
        var t, n;
        if (e.author.role === i.uU.Assistant) {
          if ("browser" === e.recipient || "browser_one_box" === e.recipient)
            return a.Browsing;
          if ("python" === e.recipient) return a.Code;
          if (
            null === (t = e.recipient) || void 0 === t
              ? void 0
              : t.includes(".")
          )
            return a.Plugin;
        } else if (e.author.role === i.uU.Tool) {
          if (
            "browser" === e.author.name ||
            "browser_one_box" === e.author.name
          )
            return a.BrowseTool;
          if ("execution_output" === e.content.content_type)
            return a.CodeExecutionOutput;
          if (
            (null === (n = e.author.name) || void 0 === n
              ? void 0
              : n.includes(".")) ||
            "plugin_service" === e.author.name
          )
            return a.PluginTool;
        }
        return "text" === e.content.content_type ? a.Text : a.Unknown;
      }
      function o(e) {
        var t;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : t.finish_details) != null
        );
      }
      function l(e) {
        var t, n;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : null === (n = t.finish_details) || void 0 === n
            ? void 0
            : n.type) === "stop"
        );
      }
      function u(e) {
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
      function d(e) {
        var t;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : t.message_type) === "continue"
        );
      }
      function f(e) {
        var t;
        return null === (t = e.metadata) || void 0 === t
          ? void 0
          : t.model_slug;
      }
      function h(e) {
        switch (e.content.content_type) {
          case "text":
            return e.content.parts.join("");
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
                  s = Object.values(e.content.tools_section)[Symbol.iterator]();
                !(n = (i = s.next()).done);
                n = !0
              ) {
                var o = i.value;
                t += "\n\n".concat(o);
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
            return t;
          default:
            return "";
        }
      }
      function g(e) {
        var t;
        return null !== (t = e.recipient) && void 0 !== t ? t : "";
      }
      ((r = a || (a = {}))[(r.Text = 0)] = "Text"),
        (r[(r.Browsing = 1)] = "Browsing"),
        (r[(r.BrowseTool = 2)] = "BrowseTool"),
        (r[(r.Code = 3)] = "Code"),
        (r[(r.CodeExecutionOutput = 4)] = "CodeExecutionOutput"),
        (r[(r.Plugin = 5)] = "Plugin"),
        (r[(r.PluginTool = 6)] = "PluginTool"),
        (r[(r.Unknown = 7)] = "Unknown");
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
          return C;
        },
      });
      var r,
        a,
        i = n(51217),
        s = n(53596),
        o = n(66816),
        l = n(49406),
        u = n(31819),
        c = n(96237),
        d = n(39324),
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
          (0, c._)(r, b.Jq.Root, b.uU.Unknown),
          (0, c._)(r, b.Jq.Prompt, b.uU.User),
          (0, c._)(r, b.Jq.Completion, b.uU.Assistant),
          (0, c._)(r, b.Jq.System, b.uU.System),
          r),
        C =
          ((a = {}),
          (0, c._)(a, b.uU.Unknown, b.Jq.Root),
          (0, c._)(a, b.uU.System, b.Jq.System),
          (0, c._)(a, b.uU.User, b.Jq.Prompt),
          (0, c._)(a, b.uU.Assistant, b.Jq.Completion),
          (0, c._)(a, b.uU.Critic, b.Jq.Completion),
          (0, c._)(a, b.uU.Tool, b.Jq.Completion),
          a);
      function _(e) {
        var t = (0, v.Z)();
        return "".concat(e).concat(t.substring(e.length));
      }
      var k = new WeakMap(),
        M = new WeakMap(),
        T = (function () {
          function e(t) {
            (0, i._)(this, e),
              (0, o._)(this, k, { writable: !0, value: void 0 }),
              (0, o._)(this, M, { writable: !0, value: void 0 }),
              (0, l._)(this, k, null != t ? t : e.createTree());
            var n,
              r = Object.values((0, s._)(this, k)).find(function (e) {
                return e.type === b.Jq.Root;
              });
            (0, l._)(
              this,
              M,
              null !== (n = null == r ? void 0 : r.id) && void 0 !== n
                ? n
                : "root"
            );
          }
          var t = e.prototype;
          return (
            (t.getNode = function (e) {
              return (0, s._)(this, k)[e];
            }),
            (t.getMessage = function (e) {
              return (0, s._)(this, k)[e].message;
            }),
            (t.getMessageId = function (e) {
              try {
                return (0, s._)(this, k)[e].message.id;
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
              return (0, s._)(this, k)[e].metadata;
            }),
            (t.getLeafFromNode = function (e) {
              for (var t = (0, s._)(this, k)[e]; ; ) {
                if (0 === t.children.length) return t;
                t = (0, s._)(this, k)[t.children.values().next().value];
              }
            }),
            (t.getParent = function (e) {
              var t = (0, s._)(this, k)[e].parentId;
              return (0, s._)(this, k)[t];
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
                    i = Object.values((0, s._)(this, k))[Symbol.iterator]();
                  !(t = (a = i.next()).done);
                  t = !0
                ) {
                  var o = a.value;
                  if (o.message.id === e) return o;
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
                    null !== (t = (0, s._)(this, k)[e]) && void 0 !== t
                      ? t
                      : this.getNodeByMessageId(e);
                null != r;

              ) {
                if (n.includes(r)) {
                  console.error("Infinite loop detected in getBranchFromLeaf.");
                  break;
                }
                if ((n.push(r), "root" === r.type)) break;
                r = (0, s._)(this, k)[r.parentId];
              }
              return n.reverse();
            }),
            (t.getChildrenFromNode = function (e) {
              var t = this,
                n = (0, s._)(this, k)[e];
              return null == n
                ? []
                : Array.from(n.children).map(function (e) {
                    return (0, s._)(t, k)[e];
                  });
            }),
            (t.getFirstPrompt = function () {
              for (var e, t, n = this.getNode((0, s._)(this, M)); ; ) {
                if (null == n) return;
                if (
                  n.type === b.Jq.Prompt ||
                  (n.type === b.Jq.System &&
                    (null === (e = n.message.metadata) || void 0 === e
                      ? void 0
                      : e.upload_filename))
                )
                  return n;
                n = (0, s._)(this, k)[
                  null === (t = n.children) || void 0 === t ? void 0 : t[0]
                ];
              }
            }),
            (t.isMessageIncomplete = function (e) {
              var t = this.getMessage(e);
              return (0, y.lD)(t);
            }),
            (t.addNodeToEnd = function (e, t) {
              if (null == (0, s._)(this, k)[e]) return (0, c._)({}, t.id, t);
              (0, l._)(
                this,
                k,
                p()(
                  (0, s._)(this, k),
                  (0, c._)({ $merge: (0, c._)({}, t.id, t) }, e, {
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
                  o = {
                    id: e.id,
                    children: a.children,
                    parentId: a.id,
                    message: e,
                  };
                (0, l._)(
                  this,
                  k,
                  p()(
                    (0, s._)(this, k),
                    ((n = { $merge: (0, c._)({}, o.id, o) }),
                    (0, c._)(n, a.id, { children: { $set: [o.id] } }),
                    (0, c._)(n, i.id, { parentId: { $set: o.id } }),
                    n)
                  )
                );
              }
            }),
            (t.addNode = function (t, n, r, a, i, s) {
              var o =
                  "string" == typeof n
                    ? e.getTextAsMessage(n, a, s)
                    : "content_type" in n
                    ? e.getContentAsMessage(n, a, s)
                    : n,
                l = (0, d._)(
                  { id: t, children: [], parentId: r, type: a, message: o },
                  i ? { nodeMetadata: i } : {}
                );
              this.addNodeToEnd(r, l);
            }),
            (t.updateNode = function (e, t) {
              (0, l._)(this, k, p()((0, s._)(this, k), (0, c._)({}, e, t)));
            }),
            (t.updateNodeMessage = function (e, t) {
              (0, l._)(
                this,
                k,
                p()(
                  (0, s._)(this, k),
                  (0, c._)({}, e, { message: { $set: t } })
                )
              );
            }),
            (t.updateNodeMessageMetadata = function (e, t) {
              (0, l._)(
                this,
                k,
                p()(
                  (0, s._)(this, k),
                  (0, c._)({}, e, { message: { metadata: { $merge: t } } })
                )
              );
            }),
            (t.updateNodeText = function (e, t) {
              (0, l._)(
                this,
                k,
                p()(
                  (0, s._)(this, k),
                  (0, c._)({}, e, {
                    message: { content: { parts: { $set: [t] } } },
                  })
                )
              );
            }),
            (t.deleteNode = function (e) {
              var t = (0, s._)(this, k),
                n = t[e],
                r = (0, f._)(t, [e].map(g._)),
                a = n.parentId;
              (0, l._)(
                this,
                k,
                p()(
                  r,
                  (0, c._)({}, a, {
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
                    "system_error" === n
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
                    o = e.message,
                    l = e.metadata;
                  if (null == t || !t(e)) {
                    var u = r[r.length - 1];
                    (null == u ? void 0 : u.role) === o.author.role ||
                    o.author.role === b.uU.Tool
                      ? r[r.length - 1].messages.push(
                          (0, d._)({ nodeId: a, parentId: i, message: o }, l)
                        )
                      : r.push({
                          role: o.author.role,
                          messages: [
                            (0, d._)({ nodeId: a, parentId: i, message: o }, l),
                          ],
                          variantIds: i
                            ? Array.from((0, s._)(n, k)[i].children)
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
              if (null != (0, s._)(this, k)[e]) return e;
              var t = !0,
                n = !1,
                r = void 0;
              try {
                for (
                  var a,
                    i = Object.values((0, s._)(this, k))[Symbol.iterator]();
                  !(t = (a = i.next()).done);
                  t = !0
                ) {
                  var o,
                    l = a.value;
                  if (
                    (null === (o = l.message) || void 0 === o
                      ? void 0
                      : o.id) === e
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
              return (0, s._)(this, k);
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
                id: _("aaa1"),
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
                id: _("aaa2"),
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
                    var t = (0, s._)(this, k)[e.children[0]];
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
        s = n(39889),
        o = n(14412),
        l = n(68555),
        u = n(70079),
        c = n(32787),
        d = n(24274);
      function f() {
        var e,
          t,
          n = (0, l.useRouter)(),
          f = (0, c.kP)().session,
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
              return (0, s.Jh)(this, function (t) {
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
                  (0, o.signIn)(
                    f.authProvider,
                    { callbackUrl: e },
                    (0, a._)(
                      { prompt: "login" },
                      f.authProvider === c.Ho.OpenAI
                        ? {
                            login_hint: (0, c.W_)({
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
              return (0, s.Jh)(this, function (t) {
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
                    return v(!0), [4, d.ZP.deleteMfa()];
                  case 1:
                    return (
                      t.sent(),
                      [
                        4,
                        (0, o.signOut)({
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
    75179: function (e, t, n) {
      n.d(t, {
        Dd: function () {
          return s;
        },
        Mf: function () {
          return o;
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
        s = "content_policy",
        o = { errType: "warning", errCode: s },
        l = {
          err: "Contents may violate our content policy",
          errType: "danger",
          errCode: s,
        };
      function u(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          s = a()(e.length, 0, 4e3),
          o = a()(e.length - s, 0, e.length - 1),
          l = t ? e.substring(o, e.length) : e;
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
