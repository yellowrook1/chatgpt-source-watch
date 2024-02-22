(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8931],
  {
    20803: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return U;
          },
        });
      var a = n(50134),
        r = n(4399),
        s = n.n(r),
        o = n(82256),
        i = n(11591),
        l = n(26272),
        c = n(90166),
        d = n(36462),
        u = n(36112),
        m = n(6939),
        f = n(3125),
        x = n(14972),
        h = n(13733),
        p = n(15777),
        g = n(72003);
      n(27025);
      var v = n(74099),
        b = n(1755),
        j = n(99893),
        w = n(70079),
        y = n(47249),
        N = n(35250);
      function k(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : k(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function T(e) {
        var t = e.columnNames,
          n = e.columnTypes,
          a = e.rows,
          r = e.className,
          s = e.tableMetadata,
          o = void 0 === s ? {} : s,
          i = (0, h.Bs)(),
          l = i.targetedReply,
          d = i.setTargetedReply,
          u = (0, w.useState)({
            bgCell: "#DFD7FF",
            bgHeader: "#DFD7FF",
            bgHeaderHovered: "#DFD7FF",
            borderColor: "#5700E5",
          }),
          k = u[0],
          T = u[1],
          M = (0, w.useRef)(null),
          F = (0, w.useState)(void 0),
          O = F[0],
          E = F[1],
          S = (0, w.useState)([]),
          D = S[0],
          P = S[1];
        (0, w.useEffect)(
          function () {
            t.length > 0 &&
              P(
                t.map(function (e, t) {
                  var n = o && o.columns && o.columns[e];
                  return {
                    id: "id:".concat(t),
                    title: e,
                    maxWidth: 500,
                    themeOverride: n ? k : {},
                  };
                })
              );
          },
          [t, o, k]
        ),
          (0, w.useEffect)(
            function () {
              var e = setTimeout(function () {
                T({});
              }, 5e3);
              return function () {
                return clearTimeout(e);
              };
            },
            [T]
          );
        var R = t.reduce(function (e, t, n) {
            return o && o.columns && o.columns[t] && (e[n] = o.columns[t]), e;
          }, {}),
          I = (0, w.useState)({ columns: p.EV.empty(), rows: p.EV.empty() }),
          L = I[0],
          Z = I[1];
        (0, w.useEffect)(
          function () {
            if (
              null != M &&
              o &&
              o.columns &&
              Object.keys(o.columns).length > 0
            ) {
              var e = Object.keys(o.columns)[0],
                n = t.indexOf(e);
              setTimeout(function () {
                var e;
                null === (e = M.current) || void 0 === e || e.scrollTo(n, 0);
              }, 500);
            }
          },
          [M, o, t]
        );
        var A = (0, w.useCallback)(
            function (e) {
              var r = (0, f.Z)(e, 2),
                s = r[0],
                i = r[1],
                l = a[i],
                c = o && o.rows && o.rows[i],
                d = o && o.columns && o.columns[t[s]];
              return {
                kind: (function (e) {
                  switch (e) {
                    case "number":
                      return p.p6.Number;
                    case "imageUrl":
                      return p.p6.Image;
                    default:
                      return p.p6.Text;
                  }
                })(n[s]),
                data: l[s],
                allowOverlay: !1,
                displayData: String(l[s]),
                themeOverride: d || c ? k : {},
              };
            },
            [t, n, a, o, k]
          ),
          _ = (0, w.useCallback)(
            function (e) {
              if (e.columns.length > 0) {
                var n = e.columns.items.flatMap(function (e) {
                  return t.slice(e[0], e[1]);
                });
                b.A.logEvent(j.M.adaColumnTargeted),
                  d({
                    message: "The user has selected the columns:  ".concat(
                      n
                        .map(function (e) {
                          return '"'.concat(e, '"');
                        })
                        .join(", ")
                    ),
                    label: (0, N.jsx)("div", {
                      children: (0, N.jsxs)("div", {
                        className: "text-token-text-tertiary",
                        children: [
                          (0, N.jsxs)("div", {
                            className: "flex items-center gap-2 text-sm",
                            children: [
                              (0, N.jsx)(y.Mie, { size: 20 }),
                              " ",
                              n.length,
                              " ",
                              1 === n.length ? "Column" : "Columns",
                            ],
                          }),
                          (0, N.jsx)("div", {
                            className: "mt-3 flex gap-3",
                            children: n.map(function (e) {
                              return (0, N.jsx)(
                                "div",
                                {
                                  className:
                                    "rounded-md bg-token-main-surface-secondary px-2 py-1 text-token-text-primary line-clamp-2",
                                  title: e,
                                  children: e,
                                },
                                e
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
                  });
              } else if (e.rows.length > 0) {
                var a = e.rows.items.flatMap(function (e) {
                  for (
                    var t = (0, f.Z)(e, 2), n = t[0], a = t[1], r = [], s = n;
                    s < a;
                    s++
                  )
                    r.push(s);
                  return r;
                });
                b.A.logEvent(j.M.adaRowTargeted),
                  d({
                    message:
                      "The user has selected rows at the following indices: ".concat(
                        a
                          .map(function (e) {
                            return '"'.concat(e, '"');
                          })
                          .join(", ")
                      ),
                    label: (0, N.jsx)("div", {
                      children: (0, N.jsx)("div", {
                        className: "text-token-text-tertiary",
                        children: (0, N.jsxs)("div", {
                          className: "flex items-center gap-2 text-sm",
                          children: [
                            (0, N.jsx)(y.Mie, { size: 20 }),
                            " ",
                            a.length,
                            " ",
                            1 === a.length ? "Row" : "Rows",
                            " (",
                            a
                              .map(function (e) {
                                return "".concat(e + 1);
                              })
                              .join(", "),
                            ")",
                          ],
                        }),
                      }),
                    }),
                  });
              } else if (e.current) {
                var r = e.current.range.x,
                  s = e.current.range.y,
                  o = e.current.range.x + e.current.range.width,
                  i = e.current.range.y + e.current.range.height,
                  l = (o - r) * (i - s);
                b.A.logEvent(j.M.adaRangeTargeted),
                  d({
                    message: "The user has selected a range at the iloc: "
                      .concat(s, ":")
                      .concat(i, ", ")
                      .concat(r, ":")
                      .concat(o, " in the current data"),
                    label: (0, N.jsx)("div", {
                      children: (0, N.jsx)("div", {
                        className: "text-token-text-tertiary",
                        children: (0, N.jsxs)("div", {
                          className: "flex items-center gap-2 text-sm",
                          children: [
                            (0, N.jsx)(y.Mie, { size: 20 }),
                            " ",
                            l,
                            " ",
                            1 === l ? "Cell" : "Cells",
                          ],
                        }),
                      }),
                    }),
                  });
              }
              Z(e);
            },
            [t, d]
          ),
          z = (0, w.useCallback)(
            function (e) {
              "header" === e.kind
                ? R[e.location[0]] &&
                  (b.A.logEvent(j.M.adaColumnAnnotationViewed),
                  E({
                    bounds: {
                      top: e.bounds.y,
                      left: e.bounds.x,
                      width: e.bounds.width,
                      height: e.bounds.height,
                    },
                    text: R[e.location[0]],
                  }))
                : "cell" === e.kind &&
                  o &&
                  o.rows &&
                  o.rows[e.location[1]] &&
                  (b.A.logEvent(j.M.adaRowAnnotationViewed),
                  E({
                    bounds: {
                      top: e.bounds.y,
                      left: e.bounds.x,
                      width: e.bounds.width,
                      height: e.bounds.height,
                    },
                    text: o.rows[e.location[1]],
                  }));
            },
            [o, R]
          );
        return (
          (0, w.useEffect)(
            function () {
              void 0 === l && Z({ columns: p.EV.empty(), rows: p.EV.empty() });
            },
            [l]
          ),
          (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsx)(g.F, {
                getCellContent: A,
                columns: D,
                rows: a.length,
                gridSelection: L,
                onGridSelectionChange: _,
                smoothScrollX: !0,
                smoothScrollY: !0,
                className: void 0 === r ? "" : r,
                onItemHovered: z,
                ref: M,
                rowMarkers: "clickable-number",
                rowMarkerTheme: { bgCell: "#F7F7F8", textLight: "#0D0D0D" },
                theme: { textHeader: "#0D0D0D", textDark: "#676767" },
                rowMarkerWidth: 30,
                rowHeight: 48,
                verticalBorder: !0,
                minColumnWidth: 10,
                maxColumnWidth: 500,
                onColumnResize: function (e, t, n) {
                  P(function (a) {
                    var r = (0, m.Z)(a);
                    return (r[n] = C(C({}, e), {}, { width: t })), r;
                  });
                },
              }),
              O &&
                (0, N.jsx)(v.f, {
                  children: (0, N.jsx)("div", {
                    className: "absolute z-20",
                    style: {
                      top: O.bounds.top,
                      left: O.bounds.left,
                      width: O.bounds.width,
                      height: O.bounds.height,
                    },
                    children: (0, N.jsx)(c.u, {
                      label: (0, N.jsxs)("div", {
                        className:
                          "max-w-36 flex flex-col justify-start gap-2 p-0",
                        children: [
                          (0, N.jsxs)("div", {
                            className: "flex items-center justify-start gap-2",
                            children: [
                              (0, N.jsx)(x.Zo, {}),
                              (0, N.jsx)("p", {
                                className: "font-bold",
                                children: "Created by ChatGPT",
                              }),
                            ],
                          }),
                          (0, N.jsxs)("p", {
                            className: "text-left font-light",
                            children: [O.text.trim(), " "],
                          }),
                        ],
                      }),
                      className: "z-20",
                      side: "top",
                      align: "start",
                      onOpenChange: function (e) {
                        e || E(void 0);
                      },
                      children: (0, N.jsx)("div", {
                        className: "h-full w-full",
                      }),
                    }),
                  }),
                }),
            ],
          })
        );
      }
      var M = n(86561),
        F = n(48099),
        O = n(63866),
        E = n(66241),
        S = n(46514),
        D = n(95412),
        P = n(7144),
        R = n(22004),
        I = n(73582),
        L = n(50828),
        Z = n(80058),
        A = n(19841),
        _ = n(90896),
        z = n(61888),
        V = n(8844),
        W = n(1833);
      function U(e) {
        var t,
          n,
          r,
          u,
          m,
          f,
          h,
          p,
          g,
          v,
          y,
          k,
          C,
          U,
          B = e.file,
          q = e.clientThreadId,
          G = e.expanded,
          K = void 0 !== G && G,
          X =
            ((n = (t = (0, w.useState)(!1))[0]),
            (r = t[1]),
            (m = (u = (0, w.useState)(void 0))[0]),
            (f = u[1]),
            (p = (h = (0, w.useState)(!1))[0]),
            (g = h[1]),
            (0, w.useEffect)(
              function () {
                function e() {
                  return (e = (0, a.Z)(
                    s().mark(function e(t) {
                      var n, a, i, l, c, d, u, m, x, h;
                      return s().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if ("fetching" !== (n = H[Q(t)])) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return");
                              case 5:
                                void 0 != n ? f(n) : (H[Q(t)] = "fetching");
                              case 6:
                                if (
                                  (f(void 0),
                                  r(!0),
                                  (e.prev = 8),
                                  "interpreter" !== t.type)
                                ) {
                                  e.next = 15;
                                  break;
                                }
                                return (
                                  (e.next = 12),
                                  D.Z.downloadFromInterpreter(
                                    t.messageId,
                                    t.serverThreadId,
                                    t.fileName
                                  )
                                );
                              case 12:
                                (e.t0 = e.sent), (e.next = 18);
                                break;
                              case 15:
                                return (
                                  (e.next = 17),
                                  D.Z.getFileDownloadLink(t.fileId)
                                );
                              case 17:
                                e.t0 = e.sent;
                              case 18:
                                if ((a = e.t0).status !== o.KF.Success) {
                                  e.next = 51;
                                  break;
                                }
                                if (!t.fileName.endsWith(".json")) {
                                  e.next = 34;
                                  break;
                                }
                                return (e.next = 23), fetch(a.download_url);
                              case 23:
                                return (d = e.sent), (e.next = 26), d.text();
                              case 26:
                                (u = JSON.parse(e.sent)),
                                  f(
                                    (m = {
                                      data: new _.DataFrame(u.data),
                                      metadata: {
                                        columns:
                                          null !== (i = u.metadata.columns) &&
                                          void 0 !== i
                                            ? i
                                            : [],
                                        rows:
                                          null !== (l = u.metadata.rows) &&
                                          void 0 !== l
                                            ? l
                                            : [],
                                      },
                                      suggestions:
                                        null !== (c = u.suggestions) &&
                                        void 0 !== c
                                          ? c
                                          : [],
                                    })
                                  ),
                                  (H[Q(t)] = m),
                                  (e.next = 49);
                                break;
                              case 34:
                                if (
                                  !(
                                    t.fileName.endsWith("xlsx") ||
                                    t.fileName.endsWith("xls")
                                  )
                                ) {
                                  e.next = 43;
                                  break;
                                }
                                return (
                                  (e.next = 37),
                                  (0, _.readExcel)(a.download_url, {
                                    parsingOptions: { dense: !1 },
                                    frameConfig: { type: 4 },
                                  })
                                );
                              case 37:
                                f((x = { data: e.sent })),
                                  (H[Q(t)] = x),
                                  (e.next = 49);
                                break;
                              case 43:
                                return (
                                  (e.next = 45), (0, _.readCSV)(a.download_url)
                                );
                              case 45:
                                f((h = { data: e.sent })), (H[Q(t)] = h);
                              case 49:
                                e.next = 53;
                                break;
                              case 51:
                                g(!0),
                                  console.error(
                                    "Error fetching URL for file "
                                      .concat(t.fileName, ": ")
                                      .concat(a.status)
                                  );
                              case 53:
                                e.next = 59;
                                break;
                              case 55:
                                (e.prev = 55),
                                  (e.t1 = e.catch(8)),
                                  g(!0),
                                  console.error(
                                    "Error fetching URL for file "
                                      .concat(t.fileName, ": ")
                                      .concat(e.t1)
                                  );
                              case 59:
                                return (e.prev = 59), r(!1), e.finish(59);
                              case 62:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[8, 55, 59, 62]]
                      );
                    })
                  )).apply(this, arguments);
                }
                !(function (t) {
                  e.apply(this, arguments);
                })(B);
              },
              [B]
            ),
            { adaFrame: m, isLoading: n, hasFailed: p }),
          Y = X.adaFrame,
          J = X.isLoading,
          $ = X.hasFailed,
          ee = (0, P.hz)(),
          et = (0, I.m0)(),
          en = (0, d.Ex)(),
          ea = (0, W.ER)(function (e) {
            return e.spreadsheetFile;
          }),
          er = ea && ea.fileName == B.fileName,
          es = en && !K,
          eo = (0, w.useState)(!1),
          ei = eo[0],
          el = eo[1],
          ec = (0, S.Y7)().data,
          ed = (0, P.t)(),
          eu = (0, F.N)(),
          em = null === (y = (0, S.BC)(ec, ed)) || void 0 === y ? void 0 : y.id,
          ef = null !== (k = (0, S.Bv)(q)) && void 0 !== k ? k : em,
          ex = (0, E.Z)(q, void 0, z.noop, void 0),
          eh = (0, w.useCallback)(
            function () {
              var e = R.tQ.getThreadCurrentLeafId(q);
              if (null != e) {
                var t = R.tQ.getTree(q).getBranchFromLeaf(e);
                l.hx.abortRequests(
                  t.map(function (e) {
                    return e.id;
                  })
                );
              }
            },
            [q]
          ),
          ep = (0, w.useCallback)(
            ((v = (0, a.Z)(
              s().mark(function e(t) {
                var n, a, r, o, i, l, c, d, u, m, f, x, h, p, g, v, b, j, w;
                return s().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (o = t.type),
                          (i = t.promptId),
                          (l = t.eventMetadata),
                          (c = t.cancelActiveRequests),
                          (u = void 0 === (d = t.focusOnNewCompletion) || d),
                          (m = t.useDefaultModel),
                          (f = t.completionMetadata),
                          (x = t.appendMessages),
                          c && eh(),
                          (h = performance.now()),
                          (p = m ? em : ef),
                          (g =
                            null === (n = (0, S.P6)(p)) || void 0 === n
                              ? void 0
                              : n.tags),
                          (v = f.conversationMode),
                          (e.next = 8),
                          (0, L.Ob)(et)
                        );
                      case 8:
                        return (
                          (b = e.sent), (e.next = 11), (0, L.Rr)(ee, b, v.kind)
                        );
                      case 11:
                        if (!e.sent) {
                          e.next = 16;
                          break;
                        }
                        return (e.next = 15), L.ZP.getEnforcementToken(b);
                      case 15:
                        j = e.sent;
                      case 16:
                        if (!(0, Z.u7)(ee, null != g ? g : [])) {
                          e.next = 21;
                          break;
                        }
                        return (
                          (e.next = 20),
                          Z.ZP.getEnforcementToken(null != g ? g : [])
                        );
                      case 20:
                        w = e.sent;
                      case 21:
                        ex({
                          model: p,
                          completionType: o,
                          parentNodeId: i,
                          metadata: l,
                          focusOnNewCompletion: u,
                          completionMetadata: f,
                          arkoseToken:
                            null !== (a = j) && void 0 !== a ? a : null,
                          turnstileToken:
                            null !== (r = w) && void 0 !== r ? r : null,
                          preflightTime: performance.now() - h,
                          extraStreamParams: {
                            forceParagen: eu.forceParagen,
                            forceRateLimit: eu.forceRateLimit,
                            disableSystemContentToggling:
                              !!eu.rebaseSystemMessageContent || void 0,
                          },
                          appendMessages: x,
                        });
                      case 22:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return v.apply(this, arguments);
            }),
            [
              em,
              ef,
              ee,
              ex,
              eu.forceParagen,
              eu.forceRateLimit,
              eu.rebaseSystemMessageContent,
              eh,
              et,
            ]
          ),
          eg = B.fileName.split("/"),
          ev = "interpreter" === B.type ? eg[eg.length - 1] : B.fileName;
        ev = ev.replace(/[-_]/g, " ").substring(0, ev.indexOf("."));
        var eb = (0, w.useCallback)(
            function () {
              Y &&
                ((0, _.toCSV)(Y.data, { download: !0, fileName: ev }),
                b.A.logEvent(j.M.adaSheetDownloaded));
            },
            [Y, ev]
          ),
          ej = function (e) {
            var t = {
                id: (0, V.Z)(),
                author: { role: i.uU.User },
                content: { content_type: i.PX.Text, parts: [e.justification] },
                recipient: "all",
              },
              n = R.iN.getConversationMode(q),
              a = R.tQ.getThreadCurrentLeafId(q);
            R.tQ.updateTree(q, function (e) {
              e.addNode(t.id, t, a, i.uU.Tool, {
                completionSampleFinishTime: Date.now(),
              });
            }),
              R.tQ.setThreadCurrentLeafId(q, t.id),
              ep({
                type: i.Os.Next,
                promptId: t.id,
                eventMetadata: { eventSource: "mouse" },
                cancelActiveRequests: !1,
                completionMetadata: { conversationMode: n },
              });
          },
          ew = [],
          ey = [],
          eN = [],
          ek = {},
          eC = [];
        if (!J && Y)
          try {
            (ew = Y.data.columns),
              (ey = Y.data.dtypes),
              (eN = Y.data.values),
              (ek = null !== (C = Y.metadata) && void 0 !== C ? C : {}),
              (eC = null !== (U = Y.suggestions) && void 0 !== U ? U : []);
          } catch (e) {}
        var eT = (0, w.useCallback)(
          function () {
            b.A.logEvent(j.M.adaFocusModeToggled),
              W.hm.setSpreadsheetFile(er ? null : B);
          },
          [B, er]
        );
        return $
          ? (0, N.jsx)("div", {
              className: "max-w-full rounded-lg border border-red-600 p-3",
              children: (0, N.jsxs)("div", {
                className: "my-0 flex items-center justify-between font-light",
                children: [
                  (0, N.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, N.jsx)(x.oP, { className: "text-[#10A37F]" }),
                      (0, N.jsx)("p", {
                        className: "m-0 p-0 text-lg font-medium capitalize",
                        children: ev,
                      }),
                    ],
                  }),
                  (0, N.jsx)("span", {
                    className: "text-sm text-red-600",
                    children: "Unable to load sheet",
                  }),
                ],
              }),
            })
          : (0, N.jsxs)("div", {
              className: "max-w-full",
              children: [
                (0, N.jsxs)("div", {
                  className:
                    "relative overflow-hidden rounded-lg border border-token-border-medium",
                  onMouseEnter: function () {
                    el(!0);
                  },
                  onMouseLeave: function () {
                    el(!1);
                  },
                  children: [
                    (0, N.jsx)("div", {
                      className: "flex flex-col",
                      children: (0, N.jsxs)("div", {
                        className: (0, A.default)(
                          "flex justify-between p-3",
                          er && !K
                            ? "bg-token-main-surface-secondary"
                            : "bg-token-main-surface-primary"
                        ),
                        children: [
                          (0, N.jsxs)("div", {
                            className:
                              "my-0 flex items-center gap-2 font-light",
                            children: [
                              (0, N.jsx)(x.oP, { className: "text-[#10A37F]" }),
                              (0, N.jsx)("p", {
                                className:
                                  "m-0 p-0 text-lg font-medium capitalize",
                                children: ev,
                              }),
                            ],
                          }),
                          (0, N.jsxs)("div", {
                            className: (0, A.default)(
                              "flex items-center gap-3",
                              ei ? "" : "hidden"
                            ),
                            children: [
                              (0, N.jsx)("button", {
                                onClick: eb,
                                className:
                                  "flex items-center text-xs text-token-text-primary",
                                children: (0, N.jsx)(x._8, {}),
                              }),
                              (0, N.jsx)("button", {
                                onClick: eT,
                                className:
                                  "flex items-center text-sm text-token-main-surface-primary",
                                children: er
                                  ? (0, N.jsx)(N.Fragment, {
                                      children: (0, N.jsx)(x.W5, {}),
                                    })
                                  : (0, N.jsx)(N.Fragment, {
                                      children: (0, N.jsx)(x.Qq, {}),
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    !es &&
                      (0, N.jsx)("div", {
                        className: (0, A.default)(
                          "flex items-center overflow-x-auto border-t border-token-border-light align-middle",
                          K ? "h-[80vh]" : "h-[400px]",
                          J ? "justify-center" : "justify-start"
                        ),
                        children: J
                          ? (0, N.jsx)(O.Z, {})
                          : (0, N.jsx)(T, {
                              columnNames: ew,
                              columnTypes: ey,
                              rows: eN,
                              tableMetadata: ek,
                            }),
                      }),
                  ],
                }),
                !es &&
                  eC &&
                  eC.length > 0 &&
                  (0, N.jsxs)("div", {
                    className: "flex items-center justify-center gap-2 p-2",
                    children: [
                      (0, N.jsx)("div", {
                        className: "text-xs font-bold",
                        children: "Suggestions",
                      }),
                      eC.map(function (e, t) {
                        return (0, N.jsx)(
                          c.u,
                          {
                            label: e.justification,
                            children: (0, N.jsxs)("button", {
                              onClick: function () {
                                return ej(e);
                              },
                              className:
                                "bg-token-background-light flex items-center gap-1.5 rounded-2xl border border-token-border-heavy bg-token-main-surface-primary px-3 py-0.5 text-sm hover:bg-token-main-surface-secondary",
                              children: [
                                (0, N.jsx)(M.Kd, { className: "icon-xs" }),
                                e.title,
                              ],
                            }),
                          },
                          t
                        );
                      }),
                    ],
                  }),
              ],
            });
      }
      var H = {};
      function Q(e) {
        return ""
          .concat(e.fileName, "-")
          .concat("interpreter" === e.type ? e.messageId : e.fileId);
      }
    },
    57553: function () {},
    66486: function () {},
    92418: function () {},
    93577: function () {},
    43480: function () {},
    52725: function () {},
    58642: function () {},
    32713: function () {},
    99851: function () {},
    63934: function () {},
    65240: function () {},
  },
]);
//# sourceMappingURL=8931.92dd97264847e42a.js.map
