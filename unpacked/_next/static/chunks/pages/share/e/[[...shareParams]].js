(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6737],
  {
    49503: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          __N_SSP: function () {
            return S;
          },
          default: function () {
            return E;
          },
        });
      var r = n(36112),
        a = n(50134),
        i = n(4399),
        o = n.n(i),
        c = n(91928),
        u = n(40670),
        s = n(63866),
        f = n(85958),
        l = n(45754),
        d = n(19954),
        p = n(73929),
        h = n(61236),
        y = n(82473),
        v = n(92347);
      n(88654);
      var b = n(44675);
      function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var m = "".concat(b.env.INTERNAL_API_URL, "/api"),
        O = v.ZF ? m : "https://chat.openai.com/backend-api";
      function _() {
        return (_ = (0, a.Z)(
          o().mark(function t(e) {
            var n, r, a, i, c, u, s;
            return o().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (n = e.ids),
                      (r = []),
                      (a = (function (t, e) {
                        var n =
                          ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                        if (!n) {
                          if (
                            Array.isArray(t) ||
                            (n = (function (t, e) {
                              if (t) {
                                if ("string" == typeof t) return g(t, e);
                                var n = Object.prototype.toString
                                  .call(t)
                                  .slice(8, -1);
                                if (
                                  ("Object" === n &&
                                    t.constructor &&
                                    (n = t.constructor.name),
                                  "Map" === n || "Set" === n)
                                )
                                  return Array.from(t);
                                if (
                                  "Arguments" === n ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    n
                                  )
                                )
                                  return g(t, e);
                              }
                            })(t))
                          ) {
                            n && (t = n);
                            var r = 0,
                              a = function () {};
                            return {
                              s: a,
                              n: function () {
                                return r >= t.length
                                  ? { done: !0 }
                                  : { done: !1, value: t[r++] };
                              },
                              e: function (t) {
                                throw t;
                              },
                              f: a,
                            };
                          }
                          throw TypeError(
                            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        }
                        var i,
                          o = !0,
                          c = !1;
                        return {
                          s: function () {
                            n = n.call(t);
                          },
                          n: function () {
                            var t = n.next();
                            return (o = t.done), t;
                          },
                          e: function (t) {
                            (c = !0), (i = t);
                          },
                          f: function () {
                            try {
                              o || null == n.return || n.return();
                            } finally {
                              if (c) throw i;
                            }
                          },
                        };
                      })(n));
                    try {
                      for (a.s(); !(i = a.n()).done; )
                        (c = i.value), r.push(["ids", c]);
                    } catch (t) {
                      a.e(t);
                    } finally {
                      a.f();
                    }
                    return (
                      (u = new URLSearchParams(r)),
                      (t.next = 7),
                      fetch("".concat(O, "/public/plugins/by-id?").concat(u), {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                      })
                    );
                  case 7:
                    if (200 !== (s = t.sent).status) {
                      t.next = 10;
                      break;
                    }
                    return t.abrupt("return", s.json());
                  case 10:
                    throw Error("Failed to get plugins by id: " + s.status);
                  case 11:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var w = n(70079),
        j = n(35250);
      function P(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function x(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? P(Object(n), !0).forEach(function (e) {
                (0, r.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : P(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
        }
        return t;
      }
      var S = !0;
      function E(t) {
        var e = t.sharedConversationId,
          n = (0, h.a)({
            queryKey: ["shared-conversation/".concat(e)],
            queryFn: function () {
              return l.ZP.getAuthedSharedConversation(e);
            },
          }),
          r = n.data,
          i = n.isError,
          v = (0, w.useState)(function () {
            return (0, d.OX)();
          })[0],
          b = (0, w.useState)(!1),
          g = b[0],
          m = b[1],
          O = (0, y.NL)();
        return (
          (0, w.useEffect)(
            function () {
              i && (window.location.href = (0, f.M5)(f.LT.SHARE_NOT_FOUND));
            },
            [i]
          ),
          (0, w.useEffect)(
            function () {
              function t() {
                return (t = (0, a.Z)(
                  o().mark(function t() {
                    var n, a, i;
                    return o().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!(r && v)) {
                              t.next = 9;
                              break;
                            }
                            if (
                              !(
                                (a =
                                  null !== (n = r.plugin_ids) && void 0 !== n
                                    ? n
                                    : []).length > 0
                              )
                            ) {
                              t.next = 7;
                              break;
                            }
                            return (
                              (t.next = 5),
                              (function (t) {
                                return _.apply(this, arguments);
                              })({ ids: a })
                            );
                          case 5:
                            (i = t.sent),
                              O.setQueryData(
                                i.items.map(function (t) {
                                  return t.id;
                                }),
                                i
                              );
                          case 7:
                            d.tQ.initThreadFromServerData(v, r, !0, e), m(!0);
                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )).apply(this, arguments);
              }
              !(function () {
                t.apply(this, arguments);
              })();
            },
            [r, e, v, O]
          ),
          g
            ? t.continueMode
              ? (0, j.jsx)(
                  c.ZP,
                  x(x({}, t.chatPageProps), {}, { clientThreadId: v })
                )
              : (0, j.jsx)(p.gB.Provider, {
                  value: { serverSharedThreadId: e },
                  children: (0, j.jsx)(u.Z, {
                    clientThreadId: v,
                    setClientThreadId: function () {},
                    initiallyHighlightedMessageId:
                      null == r ? void 0 : r.highlighted_message_id,
                    continueConversationUrl:
                      null == r ? void 0 : r.continue_conversation_url,
                  }),
                })
            : (0, j.jsx)("div", {
                className: "flex h-full items-center justify-center",
                children: (0, j.jsx)(s.Z, {
                  className: "text-token-text-tertiary",
                }),
              })
        );
      }
    },
    80027: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/share/e/[[...shareParams]]",
        function () {
          return n(49503);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [9774, 2888, 179], function () {
      return t((t.s = 80027));
    }),
      (_N_E = t.O());
  },
]);
//# sourceMappingURL=[[...shareParams]]-c66100d1dcf1180c.js.map
