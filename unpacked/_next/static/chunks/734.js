(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [734],
  {
    71047: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Q;
        },
      });
      var r = n(22830),
        a = n(35250),
        i = n(61888),
        o = n(70079),
        s = n(48727),
        l = n(39324),
        u = n(71209),
        c = n(3001),
        d = n(75908),
        m = n(35290),
        h = n(82841),
        f = n(36218),
        g = n(32787),
        p = n(85023),
        v = n(64135),
        x = n(88038),
        b = n(59114),
        y = (0, c.vU)({
          welcomeBack: {
            id: "existingUserAgeConfirmationModal.welcomeBack",
            defaultMessage: "Welcome back, Italy!",
            description:
              "Title for the age confirmation modal for Italian users",
          },
          ageRequirementsButton: {
            id: "existingUserAgeConfirmationModal.ageRequirementsButton",
            defaultMessage: "I meet OpenAI's age requirements",
            description:
              "Primary button to confirm the user meets the age requirements",
          },
          logoutButton: {
            id: "existingUserAgeConfirmationModal.logoutButton",
            defaultMessage: "Log out",
            description: "Secondary button to log out of the platform",
          },
          announcementParagraph1: {
            id: "existingUserAgeConfirmationModal.announcementParagraph1",
            defaultMessage:
              "We’re pleased to resume offering ChatGPT in Italy. To continue on ChatGPT, please confirm that you are 18+ or are 13+ and have consent from your parent or guardian to use ChatGPT.",
            description:
              "First paragraph of the announcement, explaining the age requirements",
          },
          privacyPolicyLink: {
            id: "existingUserAgeConfirmationModal.privacyPolicyLink",
            defaultMessage: "Privacy policy",
            description: "Link to the privacy policy",
          },
          helpCenterArticleLink: {
            id: "existingUserAgeConfirmationModal.helpCenterArticleLink",
            defaultMessage: "this help center article",
            description:
              "Link to the help center article about ChatGPT development",
          },
          announcementParagraph2: {
            id: "existingUserAgeConfirmationModal.announcementParagraph2",
            defaultMessage:
              "For information about how we collect and use personal data, please see our {privacyPolicyLink}. For information about how we develop and train ChatGPT, please see {helpCenterArticleLink}.",
            description:
              "Second paragraph of the announcement, providing links to more information",
          },
        }),
        j = "2023-04-25",
        k = "".concat("oai/apps/hasSeenAgeConfirmationModal", "/").concat(j);
      function w(e) {
        var t = e.onClose,
          n = (0, d.Z)(),
          r = (0, o.useCallback)(
            function () {
              p.m.setItem(k, !0), t();
            },
            [t]
          ),
          l = (0, h.WS)();
        return (
          (0, o.useEffect)(function () {
            l && l(f.s6.ageConfirmationModal, { content: j });
          }, []),
          (0, a.jsx)(s.Z, {
            isOpen: !0,
            onClose: i.noop,
            type: "success",
            title: n.formatMessage(y.welcomeBack),
            primaryButton: (0, a.jsx)(b.ZP.Button, {
              title: n.formatMessage(y.ageRequirementsButton),
              color: "primary",
              onClick: r,
            }),
            secondaryButton: (0, a.jsx)(b.ZP.Button, {
              title: n.formatMessage(y.logoutButton),
              color: "light",
              onClick: function () {
                l(f.s6.clickLogOut, { eventSource: "mouse" }), (0, g.w7)();
              },
              className: "border-gray-800 hover:border-gray-700",
            }),
            children: (0, a.jsx)(C, {}),
          })
        );
      }
      var C = function () {
          var e = (0, d.Z)();
          return (0, a.jsx)("div", {
            className: "mb-6 mt-4 sm:mt-6",
            children: (0, a.jsxs)("div", {
              className: "prose prose-invert text-base text-gray-500",
              children: [
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    m.Z,
                    (0, l._)({}, y.announcementParagraph1)
                  ),
                }),
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    m.Z,
                    (0, u._)((0, l._)({}, y.announcementParagraph2), {
                      values: {
                        privacyPolicyLink: (0, a.jsx)("a", {
                          href: "https://openai.com/policies/privacy-policy",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(y.privacyPolicyLink),
                        }),
                        helpCenterArticleLink: (0, a.jsx)("a", {
                          href: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-language-models-are-developed",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(y.helpCenterArticleLink),
                        }),
                      },
                    })
                  ),
                }),
              ],
            }),
          });
        },
        _ = n(4337),
        M = n(34303),
        N = n(5759),
        T = n(66958);
      function I() {
        var e = (0, _._)(["flex gap-4 mt-6"]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      function S(e) {
        var t = e.onBack,
          n = e.onNext,
          r = e.onSubmit;
        return (0, a.jsxs)(P, {
          children: [
            t &&
              (0, a.jsx)(T.z, {
                as: "button",
                color: "neutral",
                onClick: t,
                children: "Back",
              }),
            n &&
              (0, a.jsx)(T.z, {
                as: "button",
                onClick: n,
                color: "neutral",
                className: "ml-auto",
                children: "Next",
              }),
            r &&
              (0, a.jsx)(T.z, {
                as: "button",
                onClick: r,
                color: "primary",
                className: "ml-auto",
                children: "Done",
              }),
          ],
        });
      }
      var P = M.Z.div(I());
      function Z() {
        var e = (0, _._)(["prose dark:prose-invert"]);
        return (
          (Z = function () {
            return e;
          }),
          e
        );
      }
      function R() {
        var e = (0, _._)(["mb-4"]);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      var D = (0, c.vU)({
          keepInMind: {
            id: "onboarding.keepInMind",
            defaultMessage:
              "Here are a few things to keep in mind before we get started:",
            description: "Introduction text for the onboarding process",
          },
          page0Subtitle: {
            id: "onboarding.page0Subtitle",
            defaultMessage: "This is a free research preview.",
            description: "Subtitle for Page 0",
          },
          page0Disclaimer1: {
            id: "onboarding.page0Disclaimer1",
            defaultMessage:
              "Our goal is to get external feedback in order to improve our systems and make them safer.",
            description: "Disclaimer 1 for Page 0",
          },
          page0Disclaimer2: {
            id: "onboarding.page0Disclaimer2",
            defaultMessage:
              "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
            description: "Disclaimer 2 for Page 0",
          },
          page1Subtitle: {
            id: "onboarding.page1Subtitle",
            defaultMessage: "How we collect data",
            description: "Subtitle for Page 1",
          },
          page1Disclaimer1: {
            id: "onboarding.page1Disclaimer1",
            defaultMessage:
              "Conversations may be reviewed by our AI trainers to improve our systems.",
            description: "Disclaimer 1 for Page 1",
          },
          page1Disclaimer2: {
            id: "onboarding.page1Disclaimer2",
            defaultMessage:
              "Please don't share any sensitive information in your conversations.",
            description: "Disclaimer 2 for Page 1",
          },
          page2Subtitle: {
            id: "onboarding.page2Subtitle",
            defaultMessage: "We'd love your feedback!",
            description: "Subtitle for Page 2",
          },
          page2Disclaimer1: {
            id: "onboarding.page2Disclaimer1",
            defaultMessage:
              "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful.",
            description: "Disclaimer 1 for Page 2",
          },
          page2Disclaimer2: {
            id: "onboarding.page2Disclaimer2",
            defaultMessage:
              "Share your feedback in our <link>Discord server</link>.",
            description: "Disclaimer 2 for Page 2, with link to Discord",
          },
        }),
        A = "oai/apps/hasSeenOnboarding",
        E = function () {
          var e = (0, o.useCallback)(function () {
              p.m.setItem(
                "".concat(A, "/chat"),
                new Date().toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              );
            }, []),
            t = (0, r._)((0, o.useState)(null), 2),
            n = t[0],
            a = t[1];
          (0, o.useEffect)(
            function () {
              var e = p.m.getItem("".concat(A, "/chat"));
              a(!!e && e);
            },
            [a]
          );
          var i = (0, o.useCallback)(
            function () {
              return n ? new Date(!0 === n ? "2022-12-14" : n) : n;
            },
            [n]
          );
          return (0, o.useMemo)(
            function () {
              return { setHasSeenOnboarding: e, getHasSeenOnboardingDate: i };
            },
            [i, e]
          );
        };
      function F(e) {
        var t = e.onClose,
          n = E().setHasSeenOnboarding,
          i = (0, r._)((0, o.useState)(0), 2),
          s = i[0],
          l = i[1],
          u = (0, o.useCallback)(
            function () {
              t(!0), n();
            },
            [t, n]
          );
        return (0, a.jsxs)(U, {
          children: [
            0 === s && (0, a.jsx)(B, { onChangePage: l }),
            1 === s && (0, a.jsx)(L, { onChangePage: l }),
            2 === s && (0, a.jsx)(O, { onChangePage: l, onSubmit: u }),
          ],
        });
      }
      var B = function (e) {
          var t = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(q, {
                children: (0, a.jsx)(m.Z, (0, l._)({}, D.page0Subtitle)),
              }),
              (0, a.jsxs)(N.I, {
                children: [
                  (0, a.jsx)(N.Z, {
                    icon: "\uD83D\uDD2C",
                    children: (0, a.jsx)(m.Z, (0, l._)({}, D.page0Disclaimer1)),
                  }),
                  (0, a.jsx)(N.Z, {
                    icon: "\uD83D\uDEA8",
                    children: (0, a.jsx)(m.Z, (0, l._)({}, D.page0Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(S, {
                onNext: function () {
                  return t(1);
                },
              }),
            ],
          });
        },
        L = function (e) {
          var t = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(q, {
                children: (0, a.jsx)(m.Z, (0, l._)({}, D.page1Subtitle)),
              }),
              (0, a.jsxs)(N.I, {
                children: [
                  (0, a.jsx)(N.Z, {
                    icon: "\uD83E\uDDBE",
                    children: (0, a.jsx)(m.Z, (0, l._)({}, D.page1Disclaimer1)),
                  }),
                  (0, a.jsx)(N.Z, {
                    icon: "\uD83D\uDD10",
                    children: (0, a.jsx)(m.Z, (0, l._)({}, D.page1Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(S, {
                onBack: function () {
                  return t(0);
                },
                onNext: function () {
                  return t(2);
                },
              }),
            ],
          });
        },
        O = function (e) {
          var t = e.onChangePage,
            n = e.onSubmit,
            r = (0, o.useRef)(null);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(q, {
                children: (0, a.jsx)(m.Z, (0, l._)({}, D.page2Subtitle)),
              }),
              (0, a.jsxs)(N.I, {
                children: [
                  (0, a.jsx)(N.Z, {
                    icon: "\uD83D\uDC4D",
                    children: (0, a.jsx)(m.Z, (0, l._)({}, D.page2Disclaimer1)),
                  }),
                  (0, a.jsx)(N.Z, {
                    icon: "\uD83D\uDCAC",
                    children: (0, a.jsx)(
                      m.Z,
                      (0, u._)((0, l._)({}, D.page2Disclaimer2), {
                        values: {
                          link: function (e) {
                            return (0, a.jsx)("a", {
                              href: "https://discord.gg/openai",
                              target: "_blank",
                              rel: "noreferrer",
                              children: e,
                            });
                          },
                        },
                      })
                    ),
                  }),
                ],
              }),
              (0, a.jsx)(S, {
                onBack: function () {
                  return t(1);
                },
                onSubmit: function () {
                  return null == n ? void 0 : n(r);
                },
              }),
            ],
          });
        },
        U = M.Z.div(Z()),
        q = M.Z.h4(R()),
        z = function (e) {
          var t = e.onClose;
          return (0, a.jsx)(s.Z, {
            isOpen: !0,
            onClose: i.noop,
            type: "success",
            primaryButton: void 0,
            title: "ChatGPT",
            children: (0, a.jsx)(F, { onClose: t }),
          });
        };
      function Q(e) {
        var t,
          n,
          i,
          s = e.userCountry,
          l = (0, r._)((0, o.useState)(0), 2),
          u = l[0],
          c = l[1],
          d = E().getHasSeenOnboardingDate,
          m =
            ((n = (t = (0, v.hz)()).has(x.Vn)),
            (i = !!p.m.getItem(k)),
            0 === t.size
              ? "loading"
              : "IT" !== s || i
              ? "hide"
              : n
              ? "show"
              : "hide"),
          h = (0, o.useMemo)(
            function () {
              return [
                {
                  Modal: w,
                  getModalState: function () {
                    return m;
                  },
                },
                {
                  Modal: z,
                  getModalState: function () {
                    var e = d();
                    return null === e ? "loading" : !1 === e ? "show" : "hide";
                  },
                },
              ];
            },
            [d, m]
          );
        (0, o.useEffect)(
          function () {
            h[u] &&
              "hide" === h[u].getModalState() &&
              c(
                h.findIndex(function (e) {
                  return "hide" !== e.getModalState();
                })
              );
          },
          [u, h]
        );
        var f = h[u];
        if (!f) return null;
        var g = f.getModalState();
        if ("loading" === g) return null;
        "hide" === g &&
          c(function (e) {
            return e + 1;
          });
        var b = h[u].Modal;
        return (0, a.jsx)(b, {
          onClose: function () {
            c(function (e) {
              return e + 1;
            });
          },
        });
      }
    },
    21172: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var r = n(22830),
        a = n(35250),
        i = n(70079),
        o = n(97688),
        s = n(87316),
        l = n(32983),
        u = n(64135),
        c = n(75527),
        d = n(71047),
        m = n(12376);
      function h(e) {
        var t = e.urlThreadId,
          n = e.clientThreadId,
          h = e.isUserInCanPayGroup,
          f = e.serviceStatus,
          g = e.serviceAnnouncement,
          p = e.userCountry,
          v = (0, r._)(
            (0, i.useState)(function () {
              return void 0 !== t ? t : void 0 !== n ? n : (0, c.OX)();
            }),
            2
          ),
          x = v[0],
          b = v[1];
        void 0 !== t && x !== t && b(t),
          void 0 !== t || (0, c.Zz)(x) || b((0, c.OX)());
        var y = (0, u.Xj)().data,
          j = null == y ? void 0 : y.accountPlan.hasPaidSubscription,
          k = (0, s.g)(function (e) {
            return e.updateFlagValue;
          });
        (0, i.useEffect)(
          function () {
            void 0 !== h && k("isUserInCanPayGroup", h);
          },
          [k, h]
        ),
          (0, i.useEffect)(
            function () {
              (null == f ? void 0 : f.type) &&
                !1 === j &&
                o.m.warning(f.message, { hasCloseButton: !0, duration: 5 });
            },
            [j, null == f ? void 0 : f.message, null == f ? void 0 : f.type]
          );
        var w = (0, c.GR)(x),
          C = (0, i.useRef)(!1);
        return (
          (0, i.useEffect)(
            function () {
              if (null != y) {
                var e = y.accountPlan.hasPaidSubscription ? g.paid : g.public;
                if (
                  (null == e ? void 0 : e.type) &&
                  (null == e ? void 0 : e.message) &&
                  !C.current
                ) {
                  C.current = !0;
                  var t = e.message,
                    n = { hasCloseButton: !0, duration: 15 };
                  switch (e.type) {
                    case "danger":
                      o.m.danger(t, n);
                      break;
                    case "info":
                      o.m.info(t, n);
                      break;
                    case "warning":
                      o.m.warning(t, n);
                  }
                }
              }
            },
            [g, y]
          ),
          (0, a.jsxs)(l.XA.Provider, {
            value: w,
            children: [
              (0, a.jsx)(d.Z, { userCountry: p }),
              (0, a.jsx)(m.Z, {
                clientThreadId: x,
                setClientThreadId: b,
                isStaticSharedThread: !1,
              }),
            ],
          })
        );
      }
    },
    12376: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return oT;
        },
      });
      var r,
        a,
        i,
        o,
        s,
        l,
        u,
        c,
        d,
        m,
        h,
        f,
        g,
        p,
        v = n(39324),
        x = n(70216),
        b = n(22830),
        y = n(35250),
        j = n(35448),
        k = n(68555),
        w = n(70079),
        C = n(1454),
        _ = n(35290),
        M = n(3001),
        N = n(64135),
        T = n(75527),
        I = n(81292),
        S = n(58392),
        P = (0, I.ZP)(
          (0, S.n)(function () {
            return { aborters: {} };
          })
        ),
        Z = P.setState,
        R = {
          addAborter: function (e, t) {
            Z(function (n) {
              null != n.aborters[e] &&
                console.warn(
                  "Setting aborter for id ".concat(e, " but it already exists")
                ),
                (n.aborters[e] = t);
            });
          },
          abortAndRemoveById: function (e) {
            Z(function (t) {
              var n = t.aborters[e];
              null != n && (n.abort(), delete t.aborters[e]);
            });
          },
          removeAborterById: function (e) {
            Z(function (t) {
              delete t.aborters[e];
            });
          },
          reset: function () {
            Z(function () {
              return { aborters: {} };
            });
          },
          abortAllAndReset: function () {
            Z(function (e) {
              Object.keys(e.aborters).forEach(function (t) {
                e.aborters[t].abort(), delete e.aborters[t];
              });
            });
          },
        },
        D = n(32689),
        A = n(32983),
        E = n(77442);
      function F(e, t, n) {
        var r = (0, T.XL)(e),
          a = r.title,
          i = r.titleSource,
          o = (0, b._)((0, w.useState)(!1), 2),
          s = o[0],
          l = o[1],
          u = null != a ? a : t,
          c = (0, w.useRef)(u);
        return (
          (0, w.useEffect)(
            function () {
              return (
                n && i === T._L.Generated && u !== c.current && l(!0),
                function () {
                  c.current = u;
                }
              );
            },
            [n, u, i]
          ),
          { isTypingEffect: s, resolvedTitle: u }
        );
      }
      var B = n(51217),
        L = n(86526);
      function O(e) {
        var t = e.text,
          n = (0, L.Z)(),
          r = (0, b._)((0, w.useState)(!0), 2),
          a = r[0],
          i = r[1],
          o = (0, b._)((0, w.useState)(0), 2),
          s = o[0],
          l = o[1],
          u = (0, w.useMemo)(
            function () {
              return new U().humanTypingDelaysQuertyDistance(t);
            },
            [t]
          );
        return (
          (0, w.useEffect)(
            function () {
              t &&
                a &&
                (i(!0),
                u.forEach(function (e, t) {
                  setTimeout(function () {
                    n() && (l(t), t === u.length - 1 && i(!1));
                  }, e);
                }));
            },
            [u, n, a, t]
          ),
          (0, y.jsxs)(y.Fragment, {
            children: [t.substring(0, s + 1), a && "▋"],
          })
        );
      }
      var U = (function () {
          function e() {
            (0, B._)(this, e);
          }
          var t = e.prototype;
          return (
            (t.qwertyDistance = function (e, t) {
              var n,
                r,
                a = {
                  q: [0, 0],
                  w: [1, 0],
                  e: [2, 0],
                  r: [3, 0],
                  t: [4, 0],
                  y: [5, 0],
                  u: [6, 0],
                  i: [7, 0],
                  o: [8, 0],
                  p: [9, 0],
                  a: [0, 1],
                  s: [1, 1],
                  d: [2, 1],
                  f: [3, 1],
                  g: [4, 1],
                  h: [5, 1],
                  j: [6, 1],
                  k: [7, 1],
                  l: [8, 1],
                  z: [0, 2],
                  x: [1, 2],
                  c: [2, 2],
                  v: [3, 2],
                  b: [4, 2],
                  n: [5, 2],
                  m: [6, 2],
                },
                i = (0, b._)(
                  null !== (n = a[e.toLowerCase()]) && void 0 !== n
                    ? n
                    : [0, 0],
                  2
                ),
                o = i[0],
                s = i[1],
                l = (0, b._)(
                  null !== (r = a[t.toLowerCase()]) && void 0 !== r
                    ? r
                    : [0, 0],
                  2
                );
              return Math.abs(o - l[0]) + Math.abs(s - l[1]);
            }),
            (t.humanTypingDelaysQuertyDistance = function (e) {
              for (
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 100,
                  r = 0,
                  a = [],
                  i = 0;
                i < e.length;
                ++i
              ) {
                var o = void 0;
                if (i > 0) {
                  var s = this.qwertyDistance(e[i - 1], e[i]);
                  o =
                    0 === s
                      ? this.getRandomInt(t, Math.floor(n / 2))
                      : 1 === s
                      ? this.getRandomInt(t, Math.floor((2 * n) / 3))
                      : this.getRandomInt(t, n);
                } else o = this.getRandomInt(t, n);
                a.push(o + r), (r += o);
              }
              return a;
            }),
            (t.getRandomInt = function (e, t) {
              return Math.floor(Math.random() * (t - e + 1)) + e;
            }),
            e
          );
        })(),
        q = n(4337),
        z = n(19841),
        Q = n(72201),
        H = n(26430),
        $ = n(84913),
        G = n(44043),
        W = n(82187),
        V = n(69262),
        J = n(75861),
        Y = n(70575),
        K = n(91530),
        X = n.n(K),
        ee = n(75908),
        et = n(34303),
        en = n(82841),
        er = n(36218),
        ea = n(24274),
        ei = n(88038),
        eo = n(19051),
        es = n(11626),
        el = n(66958),
        eu = n(38317),
        ec = n(56060),
        ed = n(85023),
        em = n(21722),
        eh = n(71209),
        ef = n(39889),
        eg = n(63020),
        ep = n(13002),
        ev = n(32787),
        ex = n(97703),
        eb = (0, w.createContext)(),
        ey = function (e) {
          return (0, I.oR)((0, w.useContext)(eb), e);
        },
        ej = n(59710),
        ek = n(24396),
        ew = n(25094),
        eC = w.memo(function (e) {
          var t,
            n = e.message,
            r = e.isCollapsed,
            a =
              null === (t = n.message.metadata) || void 0 === t
                ? void 0
                : t.aggregate_result;
          if (!a)
            return console.error("Corrupt code execution result message"), null;
          var i = a.messages.filter(eI),
            o = r && i.length > 0,
            s = r && null != a.final_expression_output,
            l = r && null != a.in_kernel_exception,
            u = !r && a.messages.filter(eT).length > 0;
          return (0, y.jsxs)(y.Fragment, {
            children: [
              o &&
                (0, y.jsx)(e_, {
                  label: "STDOUT/STDERR",
                  output: i.map(function (e, t) {
                    return (0,
                    y.jsx)("span", { className: "stderr" === e.stream_name ? "text-red-500" : "", children: e.text }, "".concat(t));
                  }),
                }),
              s &&
                (0, y.jsx)(e_, {
                  label: "RESULT",
                  output: a.final_expression_output,
                }),
              l &&
                (0, y.jsx)("div", {
                  className:
                    "overflow-auto rounded border-t border-gray-500 bg-black text-white",
                  children: (0, y.jsx)("div", {
                    className: "border-l-4 border-red-500 p-2 text-xs",
                    children: (0, y.jsx)("div", {
                      className:
                        "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",
                      children: (0, y.jsx)("pre", {
                        className: "shrink-0",
                        children: a.in_kernel_exception.traceback.join(""),
                      }),
                    }),
                  }),
                }),
              u &&
                a.messages.filter(eT).map(function (e, t) {
                  var n = (function (e) {
                    if (null != e.image_payload)
                      return (0, y.jsx)("img", {
                        src: "data:image/png;base64,".concat(e.image_payload),
                      });
                    if (null != e.image_url) {
                      var t = (0, ew.Iy)(e.image_url);
                      return (0, y.jsx)(eN, { fileId: t });
                    }
                    return null;
                  })(e);
                  return n ? (0, y.jsx)("div", { children: n }, t) : null;
                }),
            ],
          });
        });
      function e_(e) {
        var t = e.label,
          n = e.output;
        return (0, y.jsxs)("div", {
          className: "rounded-md bg-black p-4 text-xs",
          children: [
            (0, y.jsx)("div", { className: "mb-1 text-gray-400", children: t }),
            (0, y.jsx)("div", {
              className:
                "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 prose flex max-h-64 flex-col-reverse overflow-auto text-white",
              children: (0, y.jsx)("pre", {
                className: "shrink-0",
                children: n,
              }),
            }),
          ],
        });
      }
      var eM = Math.log(151) / Math.log(1.5);
      function eN(e) {
        var t = e.fileId,
          n = (0, b._)((0, w.useState)(""), 2),
          r = n[0],
          a = n[1];
        return (
          (0, ek.a)({
            queryKey: ["getFileDownloadLink", t],
            queryFn: function () {
              return ea.ZP.getFileDownloadLink(t).then(function (e) {
                return (
                  (null == e ? void 0 : e.status) === "success" &&
                    a(e.download_url),
                  e
                );
              });
            },
            refetchInterval: function (e, t) {
              var n = t.state.dataUpdateCount;
              return (
                (null == e ? void 0 : e.status) !== "success" &&
                !(n > eM) &&
                "error" !== t.state.status &&
                100 * Math.pow(1.5, n)
              );
            },
          }),
          (0, y.jsxs)(y.Fragment, {
            children: [" ", r && (0, y.jsx)("img", { src: r }), " "],
          })
        );
      }
      function eT(e) {
        return (
          "image" === e.message_type ||
          ("image_url" in e && (0, ew.$H)(e.image_url + ""))
        );
      }
      function eI(e) {
        return "stream" === e.message_type;
      }
      function eS(e) {
        return e.some(function (e) {
          return e.messages.some(function (e) {
            var t, n, r, a;
            return (
              (null ==
              (r =
                null === (t = e.message.metadata) || void 0 === t
                  ? void 0
                  : t.aggregate_result)
                ? void 0
                : null === (n = r.messages) || void 0 === n
                ? void 0
                : n.some(eT)) ||
              ("parts" in (a = e.message.content)
                ? a.parts.join("")
                : ""
              ).includes("sandbox:")
            );
          });
        });
      }
      var eP = n(59114),
        eZ = n(48727),
        eR = n(19265),
        eD = n(81949),
        eA = n(49218),
        eE = n(21437),
        eF = n(54655),
        eB = n(75955),
        eL = n(69403),
        eO = n(56244),
        eU = n(57311),
        eq = n(46110),
        ez = n(13282),
        eQ = n(47635),
        eH = n(36716);
      function e$() {
        var e = (0, q._)(["flex flex-col items-start"]);
        return (
          (e$ = function () {
            return e;
          }),
          e
        );
      }
      function eG() {
        var e = (0, q._)([
          "flex items-center text-xs bg-green-100 rounded p-3 text-gray-900 ",
          "",
        ]);
        return (
          (eG = function () {
            return e;
          }),
          e
        );
      }
      function eW() {
        var e = (0, q._)([
          "max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800",
        ]);
        return (
          (eW = function () {
            return e;
          }),
          e
        );
      }
      var eV = w.memo(function (e) {
          var t = e.children,
            n = e.isComplete,
            r = e.expanderClosedLabel,
            a = e.expanderOpenLabel,
            i = e.resultsPreview,
            o = e.results,
            s = e.initialExpanded,
            l = e.onExpand,
            u = (0, b._)((0, w.useState)(void 0 !== s && s), 2),
            c = u[0],
            d = u[1],
            m = (0, w.useCallback)(
              function () {
                d(function (e) {
                  return !e;
                }),
                  null == l || l();
              },
              [l]
            );
          return (0,
          y.jsxs)(eJ, { children: [(0, y.jsxs)(eY, { $complete: n, children: [(0, y.jsx)("div", { children: t }), !n && (0, y.jsx)(eR.Z, { className: (0, z.Z)("shrink-0", null != o ? "ml-1" : "ml-12") }), null != o && (0, y.jsxs)("div", { className: "ml-12 flex items-center gap-2", role: "button", onClick: m, children: [null != a && null != r && (0, y.jsx)("div", { className: "text-xs text-gray-600", children: c ? a : r }), !c && i, (0, y.jsx)(eu.ZP, { icon: c ? C.rH8 : C.bTu })] })] }), c && o] });
        }),
        eJ = et.Z.div(e$()),
        eY = et.Z.div(eG(), function (e) {
          return e.$complete && "bg-gray-100";
        }),
        eK = et.Z.div(eW()),
        eX = (0, M.vU)({
          startingBrowsing: {
            id: "browsingMessage.startingBrowsing",
            defaultMessage: "Browsing the web...",
            description: "Status message when browsing is starting",
          },
          finishedBrowsing: {
            id: "browsingMessage.finishedBrowsing",
            defaultMessage: "Finished browsing",
            description: "Status message when browsing is finished",
          },
          thinking: {
            id: "browsingMessage.thinking",
            defaultMessage: "Thinking...",
            description:
              "Status message when the next browsing command is being generated",
          },
          searchInProgress: {
            id: "browsingMessage.command.search.inProgress",
            defaultMessage:
              "Searching Bing: <bold>“<link>{searchQuery}</link>”</bold>",
            description: "Browsing command to search Bing is in progress",
          },
          searchFinished: {
            id: "browsingMessage.command.search.finished",
            defaultMessage:
              "Searched Bing: <bold>“<link>{searchQuery}</link>”</bold>",
            description: "Browsing command to search Bing finished",
          },
          searchError: {
            id: "browsingMessage.command.search.error",
            defaultMessage: "Search failed",
            description: "Browsing command to search the web failed",
          },
          clickInProgress: {
            id: "browsingMessage.command.click.inProgress",
            defaultMessage: "Clicking on a link...",
            description: "Browsing command to click on a link is in progress",
          },
          clickFinished: {
            id: "browsingMessage.command.click.finished",
            defaultMessage: "Clicked on a link",
            description: "Browsing command to click on a link finished",
          },
          clickFinishedWithLink: {
            id: "browsingMessage.command.click.finishedWithLink",
            defaultMessage: "Clicked on:",
            description:
              "Browsing command to click on a link finished. The link that was clicked will be displayed after the :",
          },
          clickError: {
            id: "browsingMessage.command.click.error",
            defaultMessage: "Click failed",
            description: "Browsing command to click on a link failed",
          },
          quote: {
            id: "browsingMessage.command.quote",
            defaultMessage: "Reading content",
            description:
              "Browsing command to read a specific quote from a page",
          },
          quoteError: {
            id: "browsingMessage.command.quote.error",
            defaultMessage: "Reading content failed",
            description:
              "Browsing command to read a specific quote from a page failed",
          },
          back: {
            id: "browsingMessage.command.back",
            defaultMessage: "Going back to last page",
            description: "Browsing command to go back to the last page",
          },
          backError: {
            id: "browsingMessage.command.back.error",
            defaultMessage: "Going back failed",
            description: "Browsing command to go back to the last page failed",
          },
          scroll: {
            id: "browsingMessage.command.scroll",
            defaultMessage: "Scrolling down",
            description: "Browsing command to scroll down on a page",
          },
          scrollError: {
            id: "browsingMessage.command.scroll.error",
            defaultMessage: "Scroll failed",
            description: "Browsing command to scroll down on a page failed",
          },
        }),
        e0 = w.memo(function (e) {
          var t,
            n = e.messages,
            r = e.isComplete,
            a = (0, N.hz)(),
            i = n.map(function (e) {
              return e.message;
            }),
            o = i
              .map(function (e, t) {
                if (
                  e.author.role !== eL.uU.Tool ||
                  (t > 0 && tt(e) && tt(i[t - 1]))
                )
                  return null;
                var n = e.metadata;
                if (!n) return null;
                if ("browser_one_box" === e.author.name)
                  return {
                    type: "search",
                    status: "finished",
                    didError: "system_error" === e.content.content_type,
                    message: e,
                  };
                var r = n.command,
                  a = n.status;
                return r
                  ? {
                      type: r,
                      status: a,
                      didError: "system_error" === e.content.content_type,
                      message: e,
                    }
                  : null;
              })
              .filter(Boolean),
            s = o.map(function (e, t) {
              return (0, y.jsx)(e1, { command: e }, t);
            });
          r
            ? (s.push((0, y.jsx)(e9, {}, "finished")),
              (t = (0, y.jsx)(e9, { compact: !0 })))
            : 0 === s.length
            ? (s.push((0, y.jsx)(e8, {}, "waiting")),
              (t = (0, y.jsx)(e8, { compact: !0 })))
            : "finished" === o[o.length - 1].status &&
              s.push(
                (0, y.jsx)(
                  te,
                  {
                    icon: C.Wqx,
                    children: (0, y.jsx)(_.Z, (0, v._)({}, eX.thinking)),
                  },
                  "thinking"
                )
              ),
            t ||
              (t = (0, y.jsx)(e1, { command: o[o.length - 1], compact: !0 }));
          var l =
            a.has(ei.UG) && !r
              ? (function (e) {
                  var t,
                    n = e.reverse().find(function (e) {
                      return e.author.role === eL.uU.Assistant;
                    });
                  if (!n) return null;
                  for (
                    var r = (0, eO.RR)(n), a = /^#\s*(.*)/gm, i = [];
                    null !== (t = a.exec(r));

                  )
                    i.push(t[1]);
                  return i.length > 0 ? i.join("\n") : null;
                })(i)
              : null;
          return (0,
          y.jsxs)(eV, { isComplete: r, results: (0, y.jsx)(eK, { className: "text-xs", children: s }), children: [null != l && (0, y.jsx)("div", { className: "mb-2 whitespace-pre-wrap font-medium", children: l }), t] });
        });
      function e1(e) {
        var t = e.command,
          n = e.compact;
        if (t.didError) return (0, y.jsx)(e7, { commandType: t.type });
        switch (t.type) {
          case "search":
            var r,
              a,
              i,
              o,
              s =
                "browser_one_box" === t.message.author.name
                  ? null === (r = t.message.metadata) || void 0 === r
                    ? void 0
                    : null === (a = r._cite_metadata) || void 0 === a
                    ? void 0
                    : a.original_query
                  : null === (i = t.message.metadata) || void 0 === i
                  ? void 0
                  : null === (o = i.args) || void 0 === o
                  ? void 0
                  : o[0];
            if (!s) return null;
            return (0, y.jsx)(e2, {
              searchQuery: s,
              isComplete: "finished" === t.status,
              compact: n,
            });
          case "click":
          case "open_url":
            var l,
              u,
              c =
                null === (l = t.message.metadata) || void 0 === l
                  ? void 0
                  : null === (u = l._cite_metadata) || void 0 === u
                  ? void 0
                  : u.metadata_list[0];
            return (0, y.jsx)(e5, { pageInfo: c, compact: n });
          case "quote":
          case "quote_full":
            return (0, y.jsx)(e3, { compact: n });
          case "back":
            return (0, y.jsx)(e4, { compact: n });
          case "scroll":
            return (0, y.jsx)(e6, { compact: n });
          default:
            return null;
        }
      }
      function e2(e) {
        var t = e.searchQuery,
          n = e.isComplete,
          r = e.compact,
          a = function (e) {
            var n = "https://www.bing.com/search?q=".concat(
              encodeURIComponent(t)
            );
            return (0, y.jsx)("a", {
              href: n,
              target: "_blank",
              rel: "noreferrer",
              className: "text-green-600",
              children: e,
            });
          };
        return (0, y.jsx)(te, {
          icon: C.jRj,
          compact: r,
          children: n
            ? (0, y.jsx)(
                _.Z,
                (0, eh._)((0, v._)({}, eX.searchFinished), {
                  values: {
                    bold: function (e) {
                      return (0, y.jsx)("span", {
                        className: "font-medium",
                        children: e,
                      });
                    },
                    link: a,
                    searchQuery: t,
                  },
                })
              )
            : (0, y.jsx)(
                _.Z,
                (0, eh._)((0, v._)({}, eX.searchInProgress), {
                  values: {
                    bold: function (e) {
                      return (0, y.jsx)("span", {
                        className: "font-medium",
                        children: e,
                      });
                    },
                    link: a,
                    searchQuery: t,
                  },
                })
              ),
        });
      }
      function e5(e) {
        var t,
          n = e.pageInfo,
          r = e.compact;
        return (0, y.jsx)(te, {
          icon: C.PS6,
          compact: r,
          children: n
            ? !0 === r
              ? (0, y.jsx)(_.Z, (0, v._)({}, eX.clickFinished))
              : (0, y.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, y.jsx)(_.Z, (0, v._)({}, eX.clickFinishedWithLink)),
                    (0, y.jsx)("div", {
                      className:
                        "rounded border border-black/10 bg-white px-2 py-1",
                      children: (0, y.jsx)(eH.Op, {
                        pageInfo: n,
                        onClick: function () {
                          return eB.m.logEvent(
                            "chatgpt_browsing_click_link",
                            n.url,
                            {
                              domain:
                                null !==
                                  (t = eQ.get(new URL(n.url).hostname)) &&
                                void 0 !== t
                                  ? t
                                  : "",
                            }
                          );
                        },
                      }),
                    }),
                  ],
                })
            : (0, y.jsx)(_.Z, (0, v._)({}, eX.clickInProgress)),
        });
      }
      function e3(e) {
        var t = e.compact;
        return (0, y.jsx)(te, {
          icon: C.SnF,
          compact: t,
          children: (0, y.jsx)(_.Z, (0, v._)({}, eX.quote)),
        });
      }
      function e4(e) {
        var t = e.compact;
        return (0, y.jsx)(te, {
          icon: C.cww,
          compact: t,
          children: (0, y.jsx)(_.Z, (0, v._)({}, eX.back)),
        });
      }
      function e6(e) {
        var t = e.compact;
        return (0, y.jsx)(te, {
          icon: C.nlg,
          compact: t,
          children: (0, y.jsx)(_.Z, (0, v._)({}, eX.scroll)),
        });
      }
      function e7(e) {
        var t,
          n = e.commandType,
          r = e.compact;
        switch (n) {
          case "search":
            t = eX.searchError;
            break;
          case "click":
          case "open_url":
            t = eX.clickError;
            break;
          case "quote":
          case "quote_full":
            t = eX.quoteError;
            break;
          case "back":
            t = eX.backError;
            break;
          case "scroll":
            t = eX.scrollError;
            break;
          default:
            return null;
        }
        return (0, y.jsx)(te, {
          icon: C.bcx,
          compact: r,
          children: (0, y.jsx)(_.Z, (0, v._)({}, t)),
        });
      }
      function e8(e) {
        var t = e.compact;
        return (0, y.jsx)(te, {
          icon: C.jRj,
          compact: t,
          children: (0, y.jsx)(_.Z, (0, v._)({}, eX.startingBrowsing)),
        });
      }
      function e9(e) {
        var t = e.compact;
        return (0, y.jsx)(te, {
          icon: C._rq,
          compact: t,
          children: (0, y.jsx)(_.Z, (0, v._)({}, eX.finishedBrowsing)),
        });
      }
      function te(e) {
        var t = e.children,
          n = e.icon,
          r = e.compact;
        return (0, y.jsxs)("div", {
          className: (0, z.Z)(
            "flex items-center gap-2",
            !0 !== r && "min-h-[24px]"
          ),
          children: [
            (0, y.jsx)(eu.ZP, { icon: n, className: "shrink-0" }),
            (0, y.jsx)("div", { children: t }),
          ],
        });
      }
      function tt(e) {
        var t, n;
        return (
          (null === (t = e.metadata) || void 0 === t ? void 0 : t.command) ===
            "quote" ||
          (null === (n = e.metadata) || void 0 === n ? void 0 : n.command) ===
            "quote_full"
        );
      }
      var tn = n(86546),
        tr = n(87105),
        ta = {},
        ti = {};
      function to(e) {
        var t = e.message,
          n = e.outputMessage,
          r = e.clientThreadId,
          a = e.isComplete,
          i = (0, tn.F)().theme,
          o = (0, en.WS)();
        (0, w.useEffect)(
          function () {
            ta[t.message.id] ||
              (o(er.s6.renderTool2Message, {
                id: t.message.id,
                finishedExecuting: a,
              }),
              (ta[t.message.id] = !0));
          },
          [o, t, a]
        );
        var s = (0, w.useCallback)(
            function () {
              ti[t.message.id] ||
                (o(er.s6.expandTool2Message, {
                  id: t.message.id,
                  finishedExecuting: a,
                }),
                (ti[t.message.id] = !0));
            },
            [o, t, a]
          ),
          l = (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsx)("div", {
                className: "mt-3 self-stretch",
                children: (0, y.jsx)(tr.Z, {
                  clientThreadId: r,
                  messageId: t.message.id,
                  className: (0, z.Z)(
                    "markdown prose w-full break-words dark:prose-invert",
                    "dark" === i ? "dark" : "light"
                  ),
                  children: (function (e) {
                    var t = function (e, t) {
                      return "```".concat(t, "\n").concat(e, "\n```");
                    };
                    if ("code" === e.message.content.content_type)
                      return t(e.message.content.text, "python");
                    if ("python" === e.message.recipient) {
                      if ("text" !== e.message.content.content_type)
                        throw Error("Unexpected content type for code message");
                      var n = e.message.content.parts;
                      if (1 !== n.length || "string" != typeof n[0])
                        throw Error("Unexpected parts for code message");
                      return t(n[0], "python");
                    }
                    throw Error("Unexpected code message format");
                  })(t),
                }),
              }),
              n &&
                (0, y.jsx)("div", {
                  className: "self-stretch",
                  children: (0, y.jsx)(eC, { message: n, isCollapsed: !0 }),
                }),
            ],
          });
        return (0, y.jsx)(eV, {
          expanderClosedLabel: "Show work",
          expanderOpenLabel: "Hide work",
          isComplete: a,
          results: l,
          onExpand: s,
          children: a ? "Finished working" : "Working...",
        });
      }
      var ts = n(63390);
      function tl(e) {
        var t = e.messages,
          n = e.clientThreadId,
          r = e.isCompletionInProgress,
          a = e.isCompletion,
          i = e.onRequestMoreCompletions,
          o = (0, w.useMemo)(
            function () {
              return [
                t.reduce(function (e, t) {
                  return null == t.err ? e + (0, eO.RR)(t.message) : e;
                }, ""),
              ];
            },
            [t]
          );
        return (0, y.jsx)(ts.Cf, {
          clientThreadId: n,
          parts: o,
          format: !0,
          isCompletion: a,
          isCompletionInProgress: r,
          id: "",
          onRequestMoreCompletions: i,
        });
      }
      var tu = n(2368),
        tc = n(86573);
      function td(e) {
        return (0, eO.qi)(e) && !(0, eO.oH)(e);
      }
      function tm() {
        var e = (0, q._)(["grid gap-4\n", ""]);
        return (
          (tm = function () {
            return e;
          }),
          e
        );
      }
      var th = (0, M.vU)({
        generatedImage: {
          id: "pluginDisplayParams.generatedImage",
          defaultMessage: "Generated by plugin",
          description:
            "Description text for an image that was generated by a plugin",
        },
      });
      function tf(e) {
        var t,
          n,
          r,
          a = e.plugin,
          i = e.pluginMessage,
          o = e.toolMessage;
        if ("plugin-bd1fbb6d-40f9-4159-8da9-7a8975c5793b" !== a.id) return null;
        var s = !1,
          l = c.WIDE;
        if ("text" === i.content.content_type)
          try {
            var u = (function (e) {
                var t = !0,
                  n = !1,
                  r = void 0;
                try {
                  for (
                    var a, i = ["", "}", '"}', "]}", '"]}'][Symbol.iterator]();
                    !(t = (a = i.next()).done);
                    t = !0
                  ) {
                    var o = a.value,
                      s = e.trimEnd().endsWith(",")
                        ? e.trimEnd().slice(0, -1)
                        : e;
                    try {
                      return {
                        result: JSON.parse(s + o),
                        isComplete: "" === o,
                      };
                    } catch (e) {}
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
                return { result: JSON.parse(e), isComplete: !1 };
              })(i.content.parts[0]),
              d = u.result,
              m = u.isComplete;
            (t = d),
              (s = m),
              (null == t ? void 0 : t.image_shape) != null &&
                (l = t.image_shape);
          } catch (e) {}
        var h = !1;
        if (null != o) {
          if ("text" === o.content.content_type) {
            try {
              n = JSON.parse(o.content.parts[0]);
            } catch (e) {}
            if ((null == n ? void 0 : n.images) != null)
              return (0, y.jsx)(tp, { imageUrls: n.images, gridItemShape: l });
          }
          h = !0;
        }
        return (null == t ? void 0 : t.prompts) != null
          ? (0, y.jsx)(tg, {
              numItems:
                null !== (r = null == t ? void 0 : t.n) && void 0 !== r
                  ? r
                  : Math.max(t.prompts.length, 1),
              prompts: t.prompts,
              gridItemShape: l,
              isPromptListComplete: null != s && s,
              showErrorState: h || td(i),
            })
          : null;
      }
      function tg(e) {
        for (
          var t = e.numItems,
            n = e.prompts,
            r = e.gridItemShape,
            a = e.isPromptListComplete,
            i = e.showErrorState,
            o = [],
            s = 0;
          s < t;
          s++
        ) {
          var l = n[s],
            u = s < n.length - 1 || a || i;
          o.push(
            (0, y.jsx)(
              tv,
              {
                className: (0, z.Z)("text-sm", i && "text-gray-500"),
                shape: r,
                bgColor: i ? "medium" : null == l ? "dark" : "light",
                children: (0, y.jsx)(eA.default, {
                  className: "hide-scrollbar h-full",
                  followButtonClassName: "hidden",
                  children: (0, y.jsxs)("div", {
                    className:
                      "flex min-h-full flex-col justify-between gap-3 px-4 pb-5",
                    children: [
                      null != l &&
                        (0, y.jsx)("div", {
                          className: (0, z.Z)("pt-4", !u && "result-streaming"),
                          children: (0, y.jsx)("span", { children: l }),
                        }),
                      u &&
                        !i &&
                        (0, y.jsx)(eR.Z, { className: "h-4 w-4 self-center" }),
                      i &&
                        (0, y.jsx)(eu.ZP, {
                          icon: C.bcx,
                          className: "self-center text-gray-400",
                        }),
                    ],
                  }),
                }),
              },
              s
            )
          );
        }
        return (0, y.jsx)(tb, { $numItems: t, children: o });
      }
      function tp(e) {
        var t = e.imageUrls,
          n = e.gridItemShape,
          r = t.map(function (e, t) {
            return (0, y.jsx)(tx, { imageUrl: e, shape: n }, t);
          });
        return (0, y.jsx)(tb, { $numItems: r.length, children: r });
      }
      function tv(e) {
        var t = e.children,
          n = e.shape,
          r = e.className,
          a = e.bgColor,
          i = void 0 === a ? "light" : a;
        return (0, y.jsxs)("div", {
          className: (0, z.Z)(
            "relative overflow-hidden rounded",
            r,
            n === c.WIDE && "aspect-[7/4]",
            n === c.SQUARE && "aspect-square max-w-[400px]",
            n === c.TALL && "aspect-[4/7] max-w-xs"
          ),
          children: [
            (0, y.jsx)("div", {
              className: (0, z.Z)(
                "pointer-events-none absolute inset-0 blur-xl",
                "light" === i && "bg-black/[.04]",
                "medium" === i && "bg-black/[.08]",
                "dark" === i && "bg-black/[.12]"
              ),
            }),
            t,
          ],
        });
      }
      function tx(e) {
        var t = e.imageUrl,
          n = e.shape,
          r = (0, ee.Z)();
        return (0, y.jsx)(tv, {
          shape: n,
          children: (0, y.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            children: (0, y.jsx)("img", {
              src: t,
              alt: r.formatMessage(th.generatedImage),
            }),
          }),
        });
      }
      ((r = c || (c = {})).WIDE = "wide"),
        (r.SQUARE = "square"),
        (r.TALL = "tall");
      var tb = et.Z.div(tm(), function (e) {
        return 1 === e.$numItems ? "grid-cols-1" : "grid-cols-2";
      });
      function ty() {
        var e = (0, q._)([
          "flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800",
        ]);
        return (
          (ty = function () {
            return e;
          }),
          e
        );
      }
      function tj() {
        var e = (0, q._)([
          "flex items-center gap-1 rounded-[5px] bg-red-200 py-0.5 px-1.5 text-xs font-medium uppercase text-red-800",
        ]);
        return (
          (tj = function () {
            return e;
          }),
          e
        );
      }
      var tk = et.Z.div(ty());
      function tw() {
        return (0, y.jsx)(tk, {
          children: (0, y.jsx)(eu.ZP, {
            icon: C.OH,
            className: "h-3 w-3",
            strokeWidth: 2.5,
          }),
        });
      }
      function tC() {
        return (0, y.jsx)(tk, {
          children: (0, y.jsx)(eu.ZP, { icon: C.V7f, className: "h-3 w-3" }),
        });
      }
      var t_ = et.Z.div(tj());
      function tM() {
        return (0, y.jsxs)(t_, {
          children: [
            (0, y.jsx)(eu.ZP, {
              icon: C.OH,
              className: "h-3 w-3",
              strokeWidth: 2.5,
            }),
            (0, y.jsx)("div", { children: "Unverified" }),
          ],
        });
      }
      function tN() {
        return (0, y.jsxs)(t_, {
          children: [
            (0, y.jsx)(eu.ZP, { icon: C.V7f, className: "h-3 w-3" }),
            (0, y.jsx)("div", { children: "Localhost" }),
          ],
        });
      }
      var tT = n(31721),
        tI = n(57924),
        tS = w.memo(function (e) {
          var t,
            n,
            r = e.messages,
            a = (0, b._)(r, 2),
            i = a[0],
            o = a[1],
            s = (0, tT.v)(),
            l =
              null === (t = i.message.recipient) || void 0 === t
                ? void 0
                : t.split(".")[0],
            u = s.find(function (e) {
              return e.namespace === l;
            }),
            c = null == u ? void 0 : u.manifest.name_for_human,
            d = td(i.message),
            m = null != c ? (0, y.jsx)("b", { children: c }) : "unknown plugin",
            h =
              null != o
                ? (0, y.jsxs)("div", { children: ["Used ", m] })
                : d
                ? (0, y.jsxs)("div", { children: ["Tried to use ", m] })
                : (0, y.jsxs)("div", { children: ["Using ", m, "..."] });
          return (
            u &&
              ((0, tc.cf)(u)
                ? (n = (0, y.jsx)(tN, {}))
                : "approved" !== u.status && (n = (0, y.jsx)(tM, {}))),
            (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(eV, {
                  isComplete: null != o || d,
                  results: (0, y.jsx)(tP, {
                    pluginName: null != c ? c : "unknown plugin",
                    pluginMessage: i,
                    toolMessage: o,
                  }),
                  children: (0, y.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [h, n],
                  }),
                }),
                null != u &&
                  (0, y.jsx)(tf, {
                    plugin: u,
                    pluginMessage: i.message,
                    toolMessage: null == o ? void 0 : o.message,
                  }),
              ],
            })
          );
        });
      function tP(e) {
        var t = e.pluginName,
          n = e.pluginMessage,
          r = e.toolMessage,
          a = (0, eO.RR)(n.message),
          i = r ? (0, eO.RR)(r.message) : null;
        try {
          (a = JSON.stringify(JSON.parse(a), null, 2)),
            null != i && (i = JSON.stringify(JSON.parse(i), null, 2));
        } catch (e) {}
        var o =
          (null == r ? void 0 : r.message.author.name) === "plugin_service";
        return (0, y.jsxs)("div", {
          className: "my-3 flex max-w-full flex-col gap-3",
          children: [
            (0, y.jsx)(tZ, {
              title: "Request to ".concat(t),
              infoTooltip: n.message.recipient,
              children: a,
            }),
            null != i &&
              (0, y.jsx)(tZ, {
                title: o ? "Error" : "Response from ".concat(t),
                infoTooltip: n.message.recipient,
                children: (0, y.jsx)("span", {
                  className: (0, z.Z)(o && "text-red-500"),
                  children: i,
                }),
              }),
          ],
        });
      }
      function tZ(e) {
        var t = e.title,
          n = e.infoTooltip,
          r = e.children;
        return (0, y.jsx)(tu.$, {
          title: (0, y.jsx)("span", { className: "uppercase", children: t }),
          headerDecoration:
            void 0 !== n
              ? (0, y.jsx)(tI.u, {
                  label: n,
                  children: (0, y.jsx)(eu.ZP, {
                    icon: C.H33,
                    className: "text-white/50",
                  }),
                })
              : void 0,
          shouldWrapCode: !0,
          className: "w-full text-xs text-white/80",
          children: r,
        });
      }
      var tR = n(85449),
        tD = n(90076);
      function tA() {
        var e = (0, q._)([""]);
        return (
          (tA = function () {
            return e;
          }),
          e
        );
      }
      function tE() {
        var e = (0, q._)(["flex flex-grow flex-col gap-3"]);
        return (
          (tE = function () {
            return e;
          }),
          e
        );
      }
      function tF() {
        var e = (0, q._)(["flex p-4 gap-4 ", ""]);
        return (
          (tF = function () {
            return e;
          }),
          e
        );
      }
      function tB() {
        var e = (0, q._)(["flex-shrink-0 flex flex-col relative items-end"]);
        return (
          (tB = function () {
            return e;
          }),
          e
        );
      }
      function tL() {
        var e = (0, q._)([
          "p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2",
        ]);
        return (
          (tL = function () {
            return e;
          }),
          e
        );
      }
      function tO() {
        var e = (0, q._)(["p-1 ", ""]);
        return (
          (tO = function () {
            return e;
          }),
          e
        );
      }
      function tU() {
        var e = (0, q._)([
          "text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n",
          "",
        ]);
        return (
          (tU = function () {
            return e;
          }),
          e
        );
      }
      function tq() {
        var e = (0, q._)([
          "text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs",
        ]);
        return (
          (tq = function () {
            return e;
          }),
          e
        );
      }
      function tz() {
        var e = (0, q._)([
          "flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm",
        ]);
        return (
          (tz = function () {
            return e;
          }),
          e
        );
      }
      var tQ = ["#ab68ff"];
      ((a = d || (d = {}))[(a.Text = 0)] = "Text"),
        (a[(a.MultiText = 1)] = "MultiText"),
        (a[(a.Browsing = 2)] = "Browsing"),
        (a[(a.Code = 3)] = "Code"),
        (a[(a.CodeExecutionOutput = 4)] = "CodeExecutionOutput"),
        (a[(a.Plugin = 5)] = "Plugin");
      var tH = "#19c37d",
        t$ = "openai",
        tG = "#1a7f64",
        tW = w.memo(function (e) {
          var t,
            n,
            r,
            a,
            i = e.turnIndex,
            o = e.conversationLeafId,
            s = e.isFinalTurn,
            l = e.clientThreadId,
            u = e.onChangeItemInView,
            c = e.onChangeRating,
            m = e.onRequestMoreCompletions,
            h = e.onDeleteNode,
            f = e.onRequestCompletion,
            g = e.onUpdateNode,
            p = e.onHandleChangeVariantFeedbackInlineComparisonRating,
            x = e.activeRequests,
            j = e.showInlineEmbeddedDisplay,
            k = void 0 !== j && j,
            _ = e.currentModelId,
            M = e.isStaticSharedThread,
            I = void 0 !== M && M,
            S = e.initiallyHighlightedMessageId,
            P = e.avatarColor,
            Z = (0, T.GD)(l, i, o),
            R = Z.role,
            F = Z.messages,
            B = Z.variantIds,
            L = (0, ev.kP)().session,
            O = (0, E.x_)(),
            U = (0, en.WS)(),
            q = (0, b._)((0, w.useState)(!1), 2),
            Q = q[0],
            H = q[1],
            $ = (0, w.useMemo)(
              function () {
                return B.findIndex(function (e) {
                  return e === F[0].nodeId;
                });
              },
              [B, F]
            ),
            G = R !== eL.uU.User,
            W = (0, w.useContext)(A.QL).historyDisabled,
            V = (0, N.hz)().has(ei.FZ),
            J = (0, eE.Fl)(),
            Y = J.isBrowsingAvailable,
            K = J.isPluginsAvailable,
            X = J.isCodeInterpreterAvailable,
            ee = (0, D.tN)(function (e) {
              return e.isDesktopNavCollapsed;
            }),
            et = F.some(function (e) {
              return e.message.content.content_type === eL.PX.MultimodalText;
            }),
            ea = Y || K || X,
            eo = (0, w.useRef)(null);
          (0, w.useEffect)(
            function () {
              var e;
              null != S &&
                Z.messages
                  .map(function (e) {
                    return e.message.id;
                  })
                  .includes(S) &&
                (null === (e = eo.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ behavior: "auto" }));
            },
            [S]
          );
          var es = F[F.length - 1],
            el = (0, b._)((0, w.useState)(es.rating), 2),
            ec = el[0],
            ed = el[1],
            em = (0, N.hz)(),
            ef = (0, tT.v)(),
            eg = (0, w.useMemo)(
              function () {
                return (
                  (G &&
                    (null == F ? void 0 : F[0]) != null &&
                    (0, eO.Rc)(F[0].message)) ||
                  _
                );
              },
              [G, F, _]
            ),
            ep = (0, w.useCallback)(
              function () {
                1 === F.length &&
                  (U(
                    R === eL.uU.User ? er.s6.editPrompt : er.s6.editCompletion,
                    { id: F[0].message.id, threadId: T.tQ.getServerThreadId(l) }
                  ),
                  H(!0));
              },
              [F, U, R, l]
            ),
            ex = (0, w.useCallback)(function () {
              H(!1);
            }, []),
            eb = (0, w.useCallback)(
              function () {
                var e = F.reduce(function (e, t) {
                  return t.err ||
                    t.message.author.role !== eL.uU.Assistant ||
                    "all" !== t.message.recipient
                    ? e
                    : e + (e ? "\n\n" : "") + (0, eO.RR)(t.message);
                }, "");
                navigator.clipboard.writeText(e),
                  U(er.s6.copyToClipboard, {
                    threadId: T.tQ.getServerThreadId(l),
                    id: F[0].message.id,
                    eventSource: "mouse",
                    model: eg,
                  }),
                  eB.m.logEvent("chatgpt_copy_to_clipboard");
              },
              [eg, U, F, l]
            ),
            ey = (0, w.useCallback)(
              function (e) {
                c(es.nodeId, es.message.id, e), ed(e);
              },
              [es, c]
            ),
            ej = (0, b._)((0, w.useState)(es.inlineComparisonRating), 2),
            ek = ej[0],
            ew = ej[1];
          (0, w.useEffect)(
            function () {
              ed(function (e) {
                return null != e ? e : es.rating;
              }),
                ew(function (e) {
                  return null != e ? e : es.inlineComparisonRating;
                });
            },
            [es]
          );
          var e_ = (0, w.useMemo)(
              function () {
                return eU.Cv.getRequestIdFromConversationTurn(Z);
              },
              [Z]
            ),
            eM = (0, w.useMemo)(
              function () {
                return x.has(e_);
              },
              [x, e_]
            ),
            eN = (0, w.useMemo)(
              function () {
                var e = !0,
                  t = !1,
                  n = void 0;
                try {
                  for (
                    var r, a = F[Symbol.iterator]();
                    !(e = (r = a.next()).done);
                    e = !0
                  ) {
                    var i = r.value;
                    if (i.errType) return i.errType;
                  }
                } catch (e) {
                  (t = !0), (n = e);
                } finally {
                  try {
                    e || null == a.return || a.return();
                  } finally {
                    if (t) throw n;
                  }
                }
                return !1;
              },
              [F]
            ),
            eT = (0, w.useMemo)(
              function () {
                if (G) {
                  var e,
                    t,
                    n = T.tQ.getTree(l),
                    r =
                      null === (e = n.getParentPromptNode(F[0].nodeId)) ||
                      void 0 === e
                        ? void 0
                        : e.parentId,
                    a =
                      r &&
                      (null === (t = n.getNode(r).message.metadata) ||
                      void 0 === t
                        ? void 0
                        : t.model_slug);
                  if (eg && a && eg !== a)
                    return tD.n2.has(a)
                      ? "The previous model used in this conversation has been deprecated. We've switched you to the latest default model."
                      : "The previous model used in this conversation is unavailable. We've switched you to the latest default model.";
                }
                return null;
              },
              [eg, G, F, l]
            ),
            eI = (0, w.useMemo)(
              function () {
                if (!ea) return { avatarIcon: t$, avatarColor: tH };
                if (eM && F.length > 0) {
                  var e = F[F.length - 1],
                    t = (0, eO.rH)(e.message);
                  switch (t) {
                    case eO.Cs.Text:
                      if ((0, eO.RR)(e.message).length > 0 || F.length > 1)
                        return { avatarIcon: "text", avatarColor: tG };
                      break;
                    case eO.Cs.Browsing:
                    case eO.Cs.BrowseTool:
                      return { avatarIcon: "browsing", avatarColor: tG };
                    case eO.Cs.Code:
                    case eO.Cs.CodeExecutionOutput:
                      return { avatarIcon: "code", avatarColor: tG };
                    case eO.Cs.Plugin:
                    case eO.Cs.PluginTool:
                      var n =
                          t === eO.Cs.Plugin
                            ? e.message.recipient
                            : e.message.author.name,
                        r = null == n ? void 0 : n.split(".")[0],
                        a = ef.find(function (e) {
                          return e.namespace === r;
                        });
                      if (a) return { avatarPlugin: a };
                      return { avatarIcon: "plugin", avatarColor: tG };
                  }
                }
                return { avatarIcon: t$, avatarColor: tH };
              },
              [ea, eM, F, ef]
            ),
            eS = eI.avatarIcon,
            eP = eI.avatarColor,
            eZ = eI.avatarPlugin,
            eR = (0, w.useCallback)(
              function (e, t, n, r) {
                T.tQ.updateTree(l, function (a) {
                  var i = a.getParentId(e);
                  a.addNode(t, n, i, eL.Jq.Prompt, void 0, r);
                });
              },
              [l]
            ),
            eD = (0, w.useMemo)(
              function () {
                var e = [];
                return (
                  F.forEach(function (t, n) {
                    var r = (0, eO.rH)(t.message),
                      a = null == F ? void 0 : F[n - 1],
                      i =
                        null != a &&
                        ((0, eO.lD)(a.message) || (0, eO.qs)(t.message)),
                      o = r === eO.Cs.Text && (0, eO.RR)(t.message);
                    if (r === eO.Cs.Browsing || r === eO.Cs.BrowseTool) {
                      var s = e[e.length - 1];
                      (null == s ? void 0 : s.type) === d.Browsing
                        ? s.messages.push(t)
                        : e.push({ type: d.Browsing, messages: [t] });
                    } else if (r === eO.Cs.Plugin || r === eO.Cs.PluginTool) {
                      var l = e[e.length - 1];
                      r === eO.Cs.PluginTool &&
                      (null == l ? void 0 : l.type) === d.Plugin
                        ? l.messages.push(t)
                        : e.push({ type: d.Plugin, messages: [t] });
                    } else if (r === eO.Cs.Code)
                      e.push({ type: d.Code, message: t });
                    else if (r === eO.Cs.CodeExecutionOutput)
                      e.push({ type: d.CodeExecutionOutput, message: t });
                    else if (i && null != o) {
                      var u = e.pop();
                      (null == u ? void 0 : u.type) === d.MultiText
                        ? (u.messages.push(t), e.push(u))
                        : (null == u ? void 0 : u.type) === d.Text &&
                          e.push({
                            type: d.MultiText,
                            messages: [u.message, t],
                          });
                    } else e.push({ type: d.Text, message: t });
                  }),
                  e.map(function (t, n) {
                    var r,
                      a = n === e.length - 1;
                    switch (t.type) {
                      case d.Text:
                        return (0,
                        y.jsx)(ts.ZP, { className: "min-h-[20px]", message: t.message, isEditing: Q, format: G, isCompletionInProgress: a && eM, onCreateEditNode: eR, clientThreadId: l, onUpdateNode: g, onDeleteNode: h, onChangeItemInView: u, onRequestCompletion: f, onExitEdit: ex, disabled: 0 !== x.size, isCompletion: G, onRequestMoreCompletions: m, isResponseToPluginMessage: (null === (r = e[n - 1]) || void 0 === r ? void 0 : r.type) === d.Plugin }, t.message.nodeId);
                      case d.MultiText:
                        return (0,
                        y.jsx)(tl, { clientThreadId: l, messages: t.messages, isCompletionInProgress: a && eM, isCompletion: G, onRequestMoreCompletions: m }, n);
                      case d.Browsing:
                        var i = t.messages[t.messages.length - 1];
                        return (0,
                        y.jsx)(e0, { messages: t.messages, isComplete: !s || !a || 0 === x.size || td(i.message) }, t.messages[0].nodeId);
                      case d.Code:
                        var o,
                          c,
                          p = e[n + 1],
                          v =
                            p && p.type === d.CodeExecutionOutput
                              ? p.message
                              : void 0;
                        return (0,
                        y.jsx)(to, { clientThreadId: l, message: t.message, outputMessage: v, isComplete: !s || !a || 0 === x.size || ((null == (c = null === (o = null == v ? void 0 : v.message.metadata) || void 0 === o ? void 0 : o.aggregate_result) ? void 0 : c.status) !== void 0 && (null == c ? void 0 : c.status) !== "running") || td(t.message.message) }, t.message.nodeId);
                      case d.CodeExecutionOutput:
                        return (0,
                        y.jsx)(eC, { message: t.message, isCollapsed: !1 }, t.message.nodeId);
                      case d.Plugin:
                        return (0,
                        y.jsx)(tS, { messages: t.messages }, t.messages[0].nodeId);
                      default:
                        return null;
                    }
                  })
                );
              },
              [F, Q, G, eM, eR, l, g, h, u, f, ex, x.size, m, s]
            ),
            eA = (0, T.r7)(l),
            eQ =
              !I &&
              !eA &&
              O &&
              G &&
              !k &&
              !Q &&
              1 === $ &&
              s &&
              !ek &&
              !ec &&
              2 === B.length &&
              Date.now() -
                (null !== (r = es.message.create_time) && void 0 !== r
                  ? r
                  : 0) *
                  1e3 <
                6e5 &&
              !eM &&
              em.has(ei.st),
            eH = (0, w.useRef)(Date.now()),
            e$ = (0, w.useRef)(
              (null !== (a = es.message.create_time) && void 0 !== a
                ? a
                : Date.now()) * 1e3
            ),
            eG = (0, w.useRef)(Date.now());
          (0, w.useEffect)(
            function () {
              eM || (eG.current = Date.now());
            },
            [eM]
          );
          var eW = (0, w.useCallback)(
              function (e) {
                if (eQ) {
                  var t,
                    n,
                    r = T.tQ.getTree(l),
                    a = B[0] || "",
                    i = (null == r ? void 0 : r.getConversationTurns(a)) || [],
                    o = i[i.length - 1],
                    s = (null == o ? void 0 : o.messages) || [],
                    u = s[s.length - 1],
                    c =
                      (null == u
                        ? void 0
                        : null === (t = u.message) || void 0 === t
                        ? void 0
                        : t.id) || "",
                    d = B[1] || "",
                    m = (null == r ? void 0 : r.getConversationTurns(d)) || [],
                    h = m[m.length - 1],
                    f = (null == h ? void 0 : h.messages) || [],
                    g = f[f.length - 1];
                  p(
                    c,
                    (null == g
                      ? void 0
                      : null === (n = g.message) || void 0 === n
                      ? void 0
                      : n.id) || "",
                    e,
                    eH.current,
                    eH.current,
                    e$.current,
                    eG.current
                  ),
                    T.tQ.updateTree(l, function (t) {
                      t.updateNode(es.nodeId, {
                        metadata: {
                          $set: (0, eh._)(
                            (0, v._)({}, t.getMetadata(es.nodeId)),
                            { inlineComparisonRating: e }
                          ),
                        },
                      });
                    }),
                    ew(e),
                    T.tQ.updateTree(l, function (e) {
                      e.updateNode(u.nodeId, {
                        metadata: {
                          $set: (0, eh._)(
                            (0, v._)({}, e.getMetadata(u.nodeId)),
                            { inlineComparisonRating: "baseline" }
                          ),
                        },
                      });
                    });
                }
              },
              [eQ, es.nodeId, p, l, B]
            ),
            eV = (0, w.useCallback)(
              function () {
                T.tQ.updateTree(l, function (e) {
                  e.updateNode(es.nodeId, {
                    metadata: {
                      $set: (0, eh._)((0, v._)({}, e.getMetadata(es.nodeId)), {
                        inlineComparisonRating: "skip",
                      }),
                    },
                  });
                }),
                  ew("skip");
              },
              [es.nodeId, l]
            ),
            eJ = G && !k && !I && !eA,
            eY = !I && !k && !Q,
            eK = !G && !k && !I && !et && 1 === F.length && !Q;
          if (Z.role === eL.uU.Unknown || Z.role === eL.uU.System) return null;
          var eX = eK
              ? (0, y.jsx)(t0, {
                  $isMessageRedesign: V,
                  onClick: ep,
                  className: (0, z.Z)(
                    !V && O && "md:invisible md:group-hover:visible"
                  ),
                  children: (0, y.jsx)(eu.ZP, { icon: C.vPQ }),
                })
              : null,
            e1 =
              G && !k
                ? (0, y.jsx)(ez.Z, {
                    onCopy: eb,
                    className: (0, z.Z)(
                      "rounded-md p-1",
                      V
                        ? "text-gray-500 hover:text-gray-700 dark:hover:text-gray-400"
                        : "hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"
                    ),
                  })
                : null,
            e2 = eJ
              ? (0, y.jsxs)("div", {
                  className: "flex gap-1",
                  children: [
                    "thumbsDown" !== ec &&
                      !W &&
                      (0, y.jsx)(
                        t0,
                        {
                          $isMessageRedesign: V,
                          onClick: function () {
                            return ey("thumbsUp");
                          },
                          disabled: "thumbsUp" === ec,
                          className: (0, z.Z)(
                            "thumbsUp" === ec &&
                              (V
                                ? "bg-gray-100 dark:bg-gray-700"
                                : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")
                          ),
                          children: (0, y.jsx)(eu.ZP, { icon: C.fmn }),
                        },
                        "thumbsUp:".concat(es.nodeId)
                      ),
                    "thumbsUp" !== ec &&
                      !W &&
                      (0, y.jsx)(
                        t0,
                        {
                          $isMessageRedesign: V,
                          onClick: function () {
                            return ey("thumbsDown");
                          },
                          disabled: "thumbsDown" === ec,
                          className: (0, z.Z)(
                            "thumbsDown" === ec &&
                              (V
                                ? "bg-gray-100 dark:bg-gray-700"
                                : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")
                          ),
                          children: (0, y.jsx)(eu.ZP, { icon: C.oLd }),
                        },
                        "thumbsDown:".concat(es.nodeId)
                      ),
                  ],
                })
              : null,
            e5 =
              eQ && !W
                ? (0, y.jsxs)(t5, {
                    children: [
                      (0, y.jsx)("div", {
                        className: (0, z.Z)("mr-4"),
                        children: "Was this response better or worse?",
                      }),
                      (0, y.jsxs)(tX, {
                        onClick: function () {
                          return eW("new");
                        },
                        title:
                          "This response was better than the previous response",
                        children: [
                          (0, y.jsx)(eu.ZP, {
                            icon: C.fmn,
                            className: (0, z.Z)("mr-1"),
                          }),
                          "Better",
                        ],
                      }),
                      (0, y.jsxs)(tX, {
                        onClick: function () {
                          return eW("original");
                        },
                        title:
                          "This response was worse than the previous response",
                        children: [
                          (0, y.jsx)(eu.ZP, {
                            icon: C.oLd,
                            className: (0, z.Z)("mr-1"),
                          }),
                          "Worse",
                        ],
                      }),
                      (0, y.jsxs)(tX, {
                        onClick: function () {
                          return eW("same");
                        },
                        title: "This response was the same in quality",
                        children: [
                          (0, y.jsx)(eu.ZP, {
                            icon: eF.Ny3,
                            className: (0, z.Z)(
                              "mr-1 rounded-full border border-gray-400 dark:border-gray-300"
                            ),
                          }),
                          "Same",
                        ],
                      }),
                      (0, y.jsx)(tX, {
                        onClick: eV,
                        title: "Skip this comparison",
                        children: (0, y.jsx)(eu.ZP, {
                          icon: C.q5L,
                          size: "medium",
                        }),
                      }),
                    ],
                  })
                : null,
            e3 = eY && B.length > 1,
            e4 = function () {
              return (0, y.jsxs)("div", {
                className: "flex gap-1",
                children: [e2, eX, e1],
              });
            },
            e6 =
              null === (n = F[0].message.metadata) || void 0 === n
                ? void 0
                : n.shared_conversation_id,
            e7 = null != e6;
          return (0, y.jsxs)(tV, {
            className: (0, z.Z)(
              "group",
              "w-full text-gray-800 dark:text-gray-100",
              V
                ? (0, z.Z)(
                    "sm:rounded-2xl",
                    G
                      ? "my-2 hover:bg-gray-50/50 dark:hover:bg-gray-700/50"
                      : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                  )
                : (0, z.Z)(
                    !k && "border-b border-black/10 dark:border-gray-900/50",
                    G ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800"
                  )
            ),
            ref: eo,
            children: [
              eT && (0, y.jsx)(t2, { children: eT }),
              (0, y.jsxs)(tY, {
                $isDesktopNavCollapsed: ee,
                $isMessageRedesign: V,
                className: (0, z.Z)(k ? "ml-5" : "m-auto"),
                children: [
                  (0, y.jsxs)(tK, {
                    children: [
                      (0, y.jsx)("div", {
                        className: V ? "" : "w-[30px]",
                        children: G
                          ? eZ
                            ? (0, y.jsx)(eq.Ph, {
                                plugin: eZ,
                                notice: eN || void 0,
                              })
                            : (0, y.jsx)(eq.k$, {
                                background: null != P ? P : eP,
                                iconName: eS,
                                notice: eN || void 0,
                              })
                          : e7 || k
                          ? (0, y.jsx)(eq.k$, {
                              background:
                                tQ[
                                  (null !==
                                    (t =
                                      null == e6 ? void 0 : e6.charCodeAt(0)) &&
                                  void 0 !== t
                                    ? t
                                    : 0) % tQ.length
                                ],
                              iconName: "user",
                            })
                          : (0, y.jsx)(eq.Yt, {
                              user: null == L ? void 0 : L.user,
                              notice: eN || void 0,
                              size: V ? "redesign" : "medium",
                            }),
                      }),
                      !V &&
                        eY &&
                        O &&
                        (0, y.jsx)(tR.Z, {
                          currentPage: $,
                          onChangeIndex: function (e) {
                            return u(B[e]);
                          },
                          length: B.length,
                          className: (0, z.Z)(
                            "invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible",
                            B.length > 1 ? "visible" : "!invisible"
                          ),
                        }),
                    ],
                  }),
                  (0, y.jsxs)("div", {
                    className: (0, z.Z)(
                      "relative",
                      V
                        ? "min-w-0 grow"
                        : "flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"
                    ),
                    children: [
                      V &&
                        (0, y.jsx)("div", {
                          className:
                            "mb-1 select-none text-xs font-medium tracking-wide text-gray-400",
                          children: G ? "ChatGPT" : e7 ? "User" : "You",
                        }),
                      (0, y.jsx)(tJ, { children: eD }),
                      V
                        ? (!O || e3 || null != e5) &&
                          !k &&
                          (0, y.jsxs)("div", {
                            className: "mt-2 flex flex-col gap-4",
                            children: [
                              (0, y.jsxs)("div", {
                                className: "flex gap-2 text-gray-400",
                                children: [
                                  e3 &&
                                    (0, y.jsx)(tR.Z, {
                                      currentPage: $,
                                      onChangeIndex: function (e) {
                                        return u(B[e]);
                                      },
                                      length: B.length,
                                      className:
                                        "rounded-xl border border-gray-100 bg-white p-1 dark:border-gray-600 dark:bg-gray-700",
                                    }),
                                  !O && e4(),
                                ],
                              }),
                              e5,
                            ],
                          })
                        : (0, y.jsxs)(y.Fragment, {
                            children: [
                              eK &&
                                O &&
                                (0, y.jsx)(t1, {
                                  $hidden: 0 !== x.size,
                                  children: eX,
                                }),
                              (eJ || eY) &&
                                (0, y.jsxs)("div", {
                                  className: "flex justify-between lg:block",
                                  children: [
                                    !O &&
                                      eY &&
                                      (0, y.jsx)(tR.Z, {
                                        currentPage: $,
                                        onChangeIndex: function (e) {
                                          return u(B[e]);
                                        },
                                        length: B.length,
                                        className: (0, z.Z)(
                                          "self-center pt-2",
                                          B.length > 1
                                            ? "visible"
                                            : "!invisible"
                                        ),
                                      }),
                                    eK &&
                                      !O &&
                                      (0, y.jsx)(t1, {
                                        $hidden: eM,
                                        children: eX,
                                      }),
                                    eJ &&
                                      (0, y.jsxs)(t1, {
                                        $hidden: eM,
                                        children: [e1, e2],
                                      }),
                                    eQ && !W && e5,
                                  ],
                                }),
                            ],
                          }),
                    ],
                  }),
                  V &&
                    O &&
                    !Q &&
                    !k &&
                    (!I || G) &&
                    (0, y.jsx)("div", {
                      className:
                        "absolute -top-4 right-4 hidden rounded bg-white p-1 shadow-[0_0.5px_2px_rgba(0,0,0,0.15)] group-hover:block dark:bg-gray-900",
                      children: e4(),
                    }),
                ],
              }),
            ],
          });
        }),
        tV = et.Z.div(tA()),
        tJ = et.Z.div(tE()),
        tY = et.Z.div(tF(), function (e) {
          return e.$isMessageRedesign
            ? "relative"
            : e.$isDesktopNavCollapsed
            ? "text-base md:gap-6 md:max-w-3xl md:py-6 lg:px-0"
            : "text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0";
        }),
        tK = et.Z.div(tB()),
        tX = et.Z.button(tL()),
        t0 = et.Z.button(tO(), function (e) {
          return e.$isMessageRedesign
            ? "text-gray-500 enabled:hover:text-gray-700 enabled:dark:hover:text-gray-400 rounded-sm"
            : "rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400";
        }),
        t1 = et.Z.div(tU(), function (e) {
          return e.$hidden ? "invisible" : "visible";
        }),
        t2 = et.Z.div(tq()),
        t5 = et.Z.div(tz()),
        t3 = n(75318);
      function t4() {
        var e = (0, q._)([
          "text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100",
        ]);
        return (
          (t4 = function () {
            return e;
          }),
          e
        );
      }
      function t6() {
        var e = (0, q._)([
          "text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center",
        ]);
        return (
          (t6 = function () {
            return e;
          }),
          e
        );
      }
      function t7() {
        var e = (0, q._)(["md:flex items-start text-center gap-3.5"]);
        return (
          (t7 = function () {
            return e;
          }),
          e
        );
      }
      function t8() {
        var e = (0, q._)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
        return (
          (t8 = function () {
            return e;
          }),
          e
        );
      }
      function t9() {
        var e = (0, q._)([
          "flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2",
        ]);
        return (
          (t9 = function () {
            return e;
          }),
          e
        );
      }
      function ne() {
        var e = (0, q._)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
        return (
          (ne = function () {
            return e;
          }),
          e
        );
      }
      function nt() {
        var e = (0, q._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
        return (
          (nt = function () {
            return e;
          }),
          e
        );
      }
      function nn() {
        var e = (0, q._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']",
        ]);
        return (
          (nn = function () {
            return e;
          }),
          e
        );
      }
      function nr() {
        var e = (0, q._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900",
        ]);
        return (
          (nr = function () {
            return e;
          }),
          e
        );
      }
      var na = et.Z.div(t4()),
        ni = et.Z.h1(t6()),
        no = et.Z.div(t7()),
        ns = et.Z.div(t8()),
        nl = et.Z.h2(t9()),
        nu = et.Z.ul(ne()),
        nc = et.Z.li(nt());
      et.Z.li(nn());
      var nd = et.Z.button(nr());
      function nm(e) {
        var t = e.text,
          n = e.onChangeCurrentPrompt,
          r = (0, w.useCallback)(
            function () {
              n(t);
            },
            [t, n]
          );
        return (0, y.jsxs)(nd, { onClick: r, children: ['"', t, '" →'] });
      }
      function nh(e) {
        var t = function (e) {
            var t;
            null == n ||
              null === (t = n.current) ||
              void 0 === t ||
              t.setInputValue(e);
          },
          n = e.promptTextareaRef;
        return (0, y.jsxs)(na, {
          children: [
            (0, y.jsxs)(ni, { children: ["ChatGPT", (0, y.jsx)(es.IS, {})] }),
            (0, y.jsxs)(no, {
              children: [
                (0, y.jsxs)(ns, {
                  children: [
                    (0, y.jsxs)(nl, {
                      children: [
                        (0, y.jsx)(eu.ZP, { icon: C.kXG, size: "medium" }),
                        "Examples",
                      ],
                    }),
                    (0, y.jsxs)(nu, {
                      children: [
                        (0, y.jsx)(nm, {
                          text: "Explain quantum computing in simple terms",
                          onChangeCurrentPrompt: t,
                        }),
                        (0, y.jsx)(nm, {
                          text: "Got any creative ideas for a 10 year old’s birthday?",
                          onChangeCurrentPrompt: t,
                        }),
                        (0, y.jsx)(nm, {
                          text: "How do I make an HTTP request in Javascript?",
                          onChangeCurrentPrompt: t,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, y.jsxs)(ns, {
                  children: [
                    (0, y.jsxs)(nl, {
                      children: [
                        (0, y.jsx)(eu.ZP, { icon: t3.Z, size: "medium" }),
                        "Capabilities",
                      ],
                    }),
                    (0, y.jsxs)(nu, {
                      children: [
                        (0, y.jsx)(nc, {
                          children:
                            "Remembers what user said earlier in the conversation",
                        }),
                        (0, y.jsx)(nc, {
                          children:
                            "Allows user to provide follow-up corrections",
                        }),
                        (0, y.jsx)(nc, {
                          children: "Trained to decline inappropriate requests",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, y.jsxs)(ns, {
                  children: [
                    (0, y.jsxs)(nl, {
                      children: [
                        (0, y.jsx)(eu.ZP, { icon: C.BJv, size: "medium" }),
                        "Limitations",
                      ],
                    }),
                    (0, y.jsxs)(nu, {
                      children: [
                        (0, y.jsx)(nc, {
                          children:
                            "May occasionally generate incorrect information",
                        }),
                        (0, y.jsx)(nc, {
                          children:
                            "May occasionally produce harmful instructions or biased content",
                        }),
                        (0, y.jsx)(nc, {
                          children:
                            "Limited knowledge of world and events after 2021",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var nf = n(37812),
        ng = n(75515),
        np = n(96237),
        nv = n(90209),
        nx = n(68789),
        nb = n(7137),
        ny = n(76483),
        nj = n(97739),
        nk = n(2827),
        nw = n(32402),
        nC = n(27009);
      function n_(e) {
        var t = e.disabled,
          n = e.getInputProps,
          r = e.onClick,
          a = (0, ee.Z)();
        return (0, y.jsxs)(tI.u, {
          label: a.formatMessage(nM.uploadFile),
          side: "top",
          sideOffset: 4,
          children: [
            (0, y.jsx)(el.z, {
              onClick: function (e) {
                e.preventDefault(), r();
              },
              disabled: t,
              color: "none",
              className:
                "rounded-full bg-gray-500 p-0 text-white hover:bg-black",
              "aria-label": a.formatMessage(nM.uploadFile),
              children: (0, y.jsx)(eu.ZP, { icon: C.OvN, size: "small" }),
            }),
            (0, y.jsx)("input", (0, v._)({}, n({ className: "hidden" }))),
          ],
        });
      }
      var nM = (0, M.vU)({
          uploadFile: {
            id: "PromptFilePicker.uploadFile",
            defaultMessage: "Upload file",
            description: "Tooltip label for uploading a file button",
          },
          errorFileTooLarge: {
            id: "PromptFilePicker.errorFileTooLarge",
            defaultMessage: "File is too large. Maximum file size is {size}MB",
            description: "Error message when file is too large",
          },
          errorTooManyFiles: {
            id: "PromptFilePicker.errorTooManyFiles",
            defaultMessage: "Only one file upload at a time is supported",
            description: "Error message when too many files are uploaded",
          },
        }),
        nN = n(97688),
        nT = Math.floor(Math.log(1501) / Math.log(1.5)),
        nI = { duration: 20, hasCloseButton: !0 },
        nS = n(56115),
        nP = Math.floor(Math.log(1201) / Math.log(2)),
        nZ = { duration: 20, hasCloseButton: !0 },
        nR = n(30931),
        nD = n(97732),
        nA = n(12063),
        nE = "oai/apps/hasSeenVisionOnboarding";
      function nF(e) {
        var t,
          n = e.currentModelConfig,
          r = e.disabled,
          a = (0, b._)(
            (0, w.useState)(function () {
              var e = ed.m.getItem(nE);
              return "number" == typeof e && e;
            }),
            2
          ),
          i = a[0],
          o = a[1];
        return (null == n
          ? void 0
          : null === (t = n.capabilities) || void 0 === t
          ? void 0
          : t.multimodal) === void 0 ||
          r ||
          !1 !== i
          ? null
          : (0, y.jsx)(nL, {
              onDismiss: function () {
                var e = Date.now();
                ed.m.setItem(nE, e), o(e);
              },
            });
      }
      var nB = { beaker: ep.uv5, face: nA.vm9 };
      function nL(e) {
        var t = e.onDismiss,
          n = (0, ek.a)(
            ["visionContent"],
            (0, em._)(function () {
              return (0, ef.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      ea.ZP.getContent("vision").catch(function () {
                        return (
                          nN.m.danger("Failed to load content"),
                          { onboarding: { title: "", content: [] } }
                        );
                      }),
                    ];
                  case 1:
                    return [2, e.sent()];
                }
              });
            })
          ).data,
          r = null == n ? void 0 : n.onboarding;
        return r
          ? (0, y.jsx)(eZ.Z, {
              isOpen: !0,
              onClose: t,
              type: "success",
              primaryButton: (0, y.jsx)(eP.ZP.Button, {
                title: "Continue",
                color: "primary",
                onClick: t,
              }),
              title: r.title,
              size: "custom",
              className: "max-w-[550px] text-gray-300 outline-none",
              children: r.content.map(function (e, t) {
                if ("paragraph" === e.type)
                  return (0, y.jsx)("p", { children: e.text }, t);
                if ("callout" === e.type) {
                  var n;
                  return (0, y.jsx)(
                    nO,
                    {
                      icon:
                        null !== (n = nB[e.icon]) && void 0 !== n
                          ? n
                          : nB.beaker,
                      title: e.title,
                      text: e.text,
                      color: e.color || 0,
                    },
                    t
                  );
                }
                return null;
              }),
            })
          : null;
      }
      function nO(e) {
        var t = e.icon,
          n = e.title,
          r = e.text,
          a = e.color;
        return (0, y.jsxs)("div", {
          className: "my-4 flex flex-row",
          children: [
            (0, y.jsx)("div", {
              className: (0, z.Z)(
                "w-14 flex-none pl-2 pt-2",
                0 === a ? "text-brand-green" : "text-brand-purple"
              ),
              children: (0, y.jsx)(t, { size: 32 }),
            }),
            (0, y.jsxs)("div", {
              className: "max-w-60 flex-auto",
              children: [
                (0, y.jsx)("div", {
                  className: "font-bold text-white",
                  children: n,
                }),
                (0, y.jsx)("div", { children: r }),
              ],
            }),
          ],
        });
      }
      function nU() {
        var e = (0, q._)([
          "absolute inset-0 bg-gray-100 opacity-80 flex gap-2 justify-center items-center rounded-xl dark:bg-gray-800 dark:text-gray-100",
        ]);
        return (
          (nU = function () {
            return e;
          }),
          e
        );
      }
      function nq() {
        var e = (0, q._)(["mb-3 mx-[10px] md:mx-0"]);
        return (
          (nq = function () {
            return e;
          }),
          e
        );
      }
      function nz() {
        var e = (0, q._)([
          "absolute p-1 rounded-md bottom-[10px] md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white",
        ]);
        return (
          (nz = function () {
            return e;
          }),
          e
        );
      }
      function nQ() {
        var e = (0, q._)(["absolute left-4 bottom-2 md:left-4 md:bottom-3.5"]);
        return (
          (nQ = function () {
            return e;
          }),
          e
        );
      }
      function nH() {
        var e = (0, q._)([
          "\nflex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs\n",
          "\n",
          "\n",
        ]);
        return (
          (nH = function () {
            return e;
          }),
          e
        );
      }
      function n$() {
        var e = (0, q._)([
          "",
          " flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center",
        ]);
        return (
          (n$ = function () {
            return e;
          }),
          e
        );
      }
      ((i = m || (m = {}))[(i.None = 0)] = "None"),
        (i[(i.Multimodal = 1)] = "Multimodal"),
        (i[(i.Interpreter = 2)] = "Interpreter");
      var nG = (0, w.forwardRef)(function (e, t) {
        var n,
          r,
          a,
          i,
          o,
          s,
          l,
          u,
          c,
          d,
          m,
          h,
          f,
          g,
          p,
          x,
          j,
          k,
          M,
          I,
          S,
          P,
          Z,
          R,
          D,
          F,
          B,
          L,
          O,
          U,
          q,
          Q,
          H,
          $,
          G,
          W,
          V,
          J,
          Y,
          K,
          X,
          et,
          eo,
          es,
          ec,
          ed,
          eg,
          ep,
          ev,
          ex,
          eb,
          ey,
          eC,
          e_,
          eM,
          eN,
          eT,
          eI = e.onAbortCompletion,
          eS = e.onCreateNewCompletion,
          eP = e.onRequestMoreCompletions,
          eZ = e.onContinueGenerating,
          eR = e.currentModelId,
          eD = e.clientThreadId,
          eA = e.isCompletionInProgress,
          eF = e.className,
          eO = e.disabled,
          eU = void 0 !== eO && eO,
          eq = e.shouldRetry,
          ez = e.canPause,
          eQ = void 0 !== ez && ez,
          eH = e.canContinue,
          e$ = void 0 !== eH && eH,
          eG = e.suggestions,
          eW = e.isInteractableSharedThread,
          eV = (0, ee.Z)(),
          eJ = (0, T.oq)(eD),
          eY = (0, T.Hk)(eD),
          eK = (0, nD.Ri)(eR),
          eX = (0, E.w$)(),
          e0 = (0, en.WS)(),
          e1 = (0, w.useContext)(A.gt).serviceStatus,
          e2 = (0, w.useContext)(A.QL).historyDisabled,
          e5 = (0, w.useRef)(null),
          e3 = (0, b._)((0, w.useState)(""), 2),
          e4 = e3[0],
          e6 = e3[1],
          e7 = (0, b._)((0, w.useState)(null), 2),
          e8 = e7[0],
          e9 = e7[1],
          te = (0, tD.B9)(),
          tt = null !== eR ? te.get(eR) : void 0,
          tn =
            (0, eE.Fl)().isCodeInterpreterAvailable &&
            (null == tt
              ? void 0
              : null === (e_ = tt.enabledTools) || void 0 === e_
              ? void 0
              : e_.includes("tools2"))
              ? 2
              : (null == tt
                  ? void 0
                  : null === (eM = tt.capabilities) || void 0 === eM
                  ? void 0
                  : eM.multimodal) !== void 0 ||
                (null == tt
                  ? void 0
                  : null === (eN = tt.enabledTools) || void 0 === eN
                  ? void 0
                  : eN.includes(
                      "Hi Jane, come visit us for lunch at OpenAI? \uD83D\uDC9C"
                    ))
              ? 1
              : 0,
          tr = 0 !== tn,
          ta = (0, w.useCallback)(
            function (e, t) {
              null === t
                ? e0(er.s6.uploadFile, { eventSource: "mouse" })
                : e0(er.s6.uploadFile, { eventSource: "drag" }),
                e.length > 0 && e9(e[0]);
            },
            [e0]
          ),
          ti = (0, w.useCallback)(
            function (e) {
              e[0].errors.forEach(function (e) {
                var t = (function (e) {
                  var t = e.code,
                    n = e.message;
                  switch (t) {
                    case nC.jK.FileTooLarge:
                      return nM.errorFileTooLarge;
                    case nC.jK.TooManyFiles:
                      return nM.errorTooManyFiles;
                    default:
                      return n;
                  }
                })(e);
                "string" == typeof t
                  ? nN.m.danger(t)
                  : nN.m.danger(eV.formatMessage(t, { size: 512 }));
              });
            },
            [eV]
          ),
          to = (0, w.useCallback)(function () {
            e9(null), tf(new Date().toString());
          }, []),
          ts = (0, ny.uI)(
            (0, v._)(
              {
                maxFiles: 1,
                disabled: eU || !tr,
                noClick: !0,
                onDropAccepted: ta,
                onDropRejected: ti,
                multiple: !1,
                maxSize: 536870912,
              },
              (0, w.useMemo)(
                function () {
                  var e,
                    t,
                    n,
                    r =
                      null !==
                        (n =
                          null == tt
                            ? void 0
                            : null === (e = tt.capabilities) || void 0 === e
                            ? void 0
                            : null === (t = e.multimodal) || void 0 === t
                            ? void 0
                            : t.accepted_mime_types) && void 0 !== n
                        ? n
                        : [];
                  if (void 0 === r) return {};
                  var a = {
                    "image/jpeg": [".jpg", ".jpeg"],
                    "image/svg+xml": [".svg"],
                  };
                  return {
                    accept: r.reduce(function (e, t) {
                      return (
                        t in a
                          ? (e[t] = a[t])
                          : t.includes("/") &&
                            (e[t] = [".".concat(t.split("/")[1])]),
                        e
                      );
                    }, {}),
                  };
                },
                [tt]
              )
            )
          ),
          tl = ts.getRootProps,
          tu = ts.getInputProps,
          tc = ts.isDragActive,
          td = ts.open,
          tm = (0, b._)((0, w.useState)(new Date().toString()), 2),
          th = tm[0],
          tf = tm[1],
          tg =
            null !== e8
              ? JSON.stringify({
                  file: e8.name,
                  modified: e8.lastModified,
                  size: e8.size,
                  queryHash: th,
                })
              : null,
          tp =
            ((i = 2 === tn ? e8 : null),
            (l = ((o = (0, ew.VF)()),
            (s = (0, ek.a)({
              queryKey: ["interpreterUploadLink", tg],
              queryFn: (0, em._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.createFile(i.name, i.size, nw.Ei.AceUpload).catch(
                          function (e) {
                            var t = o("default_create_entry_error", {
                              fileName: null == i ? void 0 : i.name,
                            });
                            return (
                              void 0 !== e.code && (t = o(e.code)),
                              nN.m.danger(t, nI),
                              e
                            );
                          }
                        ),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!i,
            }))).data),
            (u = s.isLoading),
            (c = s.isError),
            (d =
              (null == l ? void 0 : l.status) === "success"
                ? l.upload_url
                : void 0),
            (h = (m = (0, ek.a)({
              queryKey: ["startFileUpload", tg],
              queryFn: (0, em._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.uploadFileToAzureStorage(i, d).then(function (e) {
                          if (e.ok) return d;
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(i && d),
            })).data),
            (f = m.isLoading),
            (g = m.isError),
            (p =
              (null == l ? void 0 : l.status) === "success" ? l.file_id : null),
            (k = ((x = T.tQ.getServerThreadId(eD)),
            (j = (0, ek.a)({
              queryKey: ["startInterpreterUpload", tg],
              queryFn: (0, em._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.startInterpreterUpload(
                          null != x ? x : null,
                          p,
                          eR
                        ).catch(function (e) {
                          return (
                            nN.m.danger(
                              "Failed to start interpreter upload for file ".concat(
                                null == i ? void 0 : i.name
                              ),
                              nI
                            ),
                            e
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(
                null !== p &&
                null !== i &&
                void 0 !== h &&
                null !== eR
              ),
            }))).data),
            (M = j.isLoading),
            (I = j.isError),
            (Z = ((S = (0, ew.VF)()),
            (P = (0, ek.a)({
              queryKey: ["interpreterFileStatus", tg],
              queryFn: (0, em._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.getFileDownloadLink(p).catch(function (e) {
                          var t = S("default_download_link_error", {
                            fileName: null == i ? void 0 : i.name,
                          });
                          throw (
                            (void 0 !== e.code && (t = S(e.code)),
                            nN.m.danger(t, nI),
                            null == to || to(null == i ? void 0 : i.name),
                            new ej.gK(t, void 0, e.code))
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(void 0 !== k && i && p),
              refetchInterval: function (e, t) {
                var n = t.state.dataUpdateCount;
                return n > nT
                  ? (nN.m.danger("File upload timed out. Please try again", nI),
                    null == to || to(null == i ? void 0 : i.name),
                    !1)
                  : (null == e ? void 0 : e.status) === "retry" &&
                      "error" !== t.state.status &&
                      100 * Math.pow(1.5, n);
              },
            }))).data),
            (R = P.isLoading),
            (D = P.isError),
            (F = (0, w.useMemo)(
              function () {
                return k ? 50 : void 0 !== h ? 30 : l ? 10 : void 0;
              },
              [h, k, l]
            )),
            (B = c || g || I || D),
            (L =
              u ||
              f ||
              M ||
              R ||
              (null == Z ? void 0 : Z.status) !== "success"),
            (0, w.useEffect)(
              function () {
                if (B) {
                  var e;
                  to(
                    null !== (e = null == i ? void 0 : i.name) && void 0 !== e
                      ? e
                      : ""
                  );
                }
              },
              [null == i ? void 0 : i.name, B, to]
            ),
            (0, w.useMemo)(
              function () {
                var e =
                    null !== i &&
                    (null == i ? void 0 : i.name) &&
                    (null == Z ? void 0 : Z.status) === "success" &&
                    void 0 !== h,
                  t = e ? { name: i.name, url: h } : null;
                return {
                  isLoading: L,
                  loadingPercentage: B || e ? void 0 : F,
                  isError: B,
                  uploadedFile: t,
                };
              },
              [i, null == Z ? void 0 : Z.status, h, B, L, F]
            )),
          tv =
            ((O = 1 === tn ? e8 : null),
            (U = nw.Ei.Multimodal),
            (Q = (q = (0, ek.a)({
              queryKey: ["createFile", tg],
              queryFn: (0, em._)(function () {
                var e, t, n;
                return (0, ef.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (e = (0, nS.Z)(new Date(), "yyyy-MM-dd_HH-mm-ss")),
                        (t = O.name.split(".").pop()),
                        (n = "chatgpt-file-".concat(e, ".").concat(t)),
                        [
                          4,
                          ea.ZP.createFile(n, O.size, U).catch(function (e) {
                            throw (
                              (console.error(
                                "Failed to create file for ".concat(
                                  null == O ? void 0 : O.name
                                ),
                                e.message
                              ),
                              e)
                            );
                          }),
                        ]
                      );
                    case 1:
                      return [2, r.sent()];
                  }
                });
              }),
              enabled: !!O,
            })).data),
            (H = q.isLoading),
            ($ = q.isError),
            (G = null == Q ? void 0 : Q.file_id),
            (W = null == Q ? void 0 : Q.upload_url),
            (J = (V = (0, ek.a)({
              queryKey: ["uploadFile", tg],
              queryFn: (0, em._)(function () {
                var e, t, n, r;
                return (0, ef.Jh)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        a.trys.push([0, 7, , 8]),
                        [4, ea.ZP.uploadFileToAzureStorage(O, W)]
                      );
                    case 1:
                      if ((e = a.sent()).ok) return [3, 6];
                      (t = "Unknown error"), (a.label = 2);
                    case 2:
                      return a.trys.push([2, 4, , 5]), [4, e.text()];
                    case 3:
                      return (t = a.sent()), [3, 5];
                    case 4:
                      return a.sent(), [3, 5];
                    case 5:
                      return (
                        console.error(
                          "File upload failed at blobstore upload step",
                          e.status,
                          t
                        ),
                        ea.ZP.markFileUploadFailed(G, t),
                        [2, { success: !1 }]
                      );
                    case 6:
                      return [3, 8];
                    case 7:
                      throw (
                        (console.error(
                          "File upload failed due to a network error",
                          (n = a.sent())
                        ),
                        (r = "Unknown error"),
                        n instanceof Error && (r = n.message),
                        ea.ZP.markFileUploadFailed(G, r),
                        n)
                      );
                    case 8:
                      return [4, ea.ZP.markFileUploadComplete(G)];
                    case 9:
                      return a.sent(), [2, { success: !0 }];
                  }
                });
              }),
              enabled: !!(O && G && W),
            })).data),
            (Y = V.isLoading),
            (K = V.isError),
            (eo = ((X = (0, ew.VF)()),
            (et = (0, ek.a)({
              queryKey: ["pollForFileReady", tg],
              queryFn: (0, em._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.getFileDownloadLink(G).catch(function (e) {
                          var t = X("default_download_link_error", {
                            fileName: null == O ? void 0 : O.name,
                          });
                          throw (
                            (void 0 !== e.code && (t = X(e.code)),
                            nN.m.danger(t, nZ),
                            e)
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(J && O && G),
              refetchInterval: function (e, t) {
                if ((null == e ? void 0 : e.status) === nw.KF.Retry) {
                  var n = t.state.dataUpdateCount;
                  return n > nP
                    ? (null == to || to(null == O ? void 0 : O.name), !1)
                    : 500 * Math.pow(2, n);
                }
                return !1;
              },
            }))).data),
            (es = et.isLoading),
            (ec = et.isError),
            (ed = null == eo ? void 0 : eo.download_url),
            (eg = null !== O && "string" == typeof ed && !!G),
            (ep = $ || K || ec),
            (ev =
              H ||
              Y ||
              es ||
              (null == eo ? void 0 : eo.status) === nw.KF.Retry),
            (ex = (0, w.useMemo)(
              function () {
                return eg ? 100 : J ? 50 : Q ? 10 : 0;
              },
              [eg, J, Q]
            )),
            (0, w.useEffect)(
              function () {
                if (ep) {
                  var e;
                  nN.m.danger("File upload failed", nZ),
                    to(
                      null !== (e = null == O ? void 0 : O.name) && void 0 !== e
                        ? e
                        : ""
                    );
                }
              },
              [null == O ? void 0 : O.name, ep, to]
            ),
            (ey = (eb = (0, b._)(
              ((r = (n = (0, b._)((0, w.useState)([null, null]), 2))[0]),
              (a = n[1]),
              (0, w.useEffect)(
                function () {
                  if (!O) {
                    a([null, null]);
                    return;
                  }
                  var e = new FileReader();
                  (e.onload = function () {
                    var t = new Image();
                    (t.onload = function () {
                      a([t.width, t.height]);
                    }),
                      (t.src = e.result);
                  }),
                    e.readAsDataURL(O);
                },
                [O]
              ),
              r),
              2
            ))[0]),
            (eC = eb[1]),
            (0, w.useMemo)(
              function () {
                var e = eg
                  ? null !== ey && null !== eC
                    ? {
                        id: G,
                        name: O.name,
                        size: O.size,
                        url: ed,
                        width: ey,
                        height: eC,
                      }
                    : { id: G, name: O.name, size: O.size, url: ed }
                  : null;
                return {
                  isLoading: ev,
                  loadingPercentage: ep || eg ? void 0 : ex,
                  isError: ep,
                  uploadedFile: e,
                };
              },
              [eg, O, G, ed, ep, ev, ex, ey, eC]
            )),
          tx = (0, w.useMemo)(
            function () {
              return 2 === tn ? tp : tv;
            },
            [tn, tp, tv]
          ),
          tb = tx.isLoading,
          ty = tx.isError,
          tj = tx.loadingPercentage,
          tk = tx.uploadedFile,
          tw = (0, w.useCallback)(function () {
            e6(""), e9(null), (0, nk.SI)(1, e5.current);
          }, []),
          tC = "root" !== eJ && !eA && !(null == e1 ? void 0 : e1.oof),
          t_ = !!(null === (eT = e5.current) || void 0 === eT
            ? void 0
            : eT.value),
          tM = null === e8 ? t_ : !tb && !ty,
          tN = tM && !eU && !eA,
          tT = (0, w.useCallback)(
            function (e, t) {
              if ((null == e || e.preventDefault(), !eU)) {
                var n,
                  r,
                  a =
                    null === (n = e5.current) || void 0 === n
                      ? void 0
                      : n.value,
                  i = "".concat(
                    null === (r = e5.current) || void 0 === r
                      ? void 0
                      : r.dataset.id,
                    "-nextPrompt"
                  );
                if (tM) {
                  var o = null != a ? a : "",
                    s = [];
                  tk &&
                    (2 === tn
                      ? s.push(tk)
                      : 1 === tn &&
                        "width" in tk &&
                        (o = {
                          content_type: eL.PX.MultimodalText,
                          parts: [
                            {
                              asset_pointer: (0, ew.L8)(tk.id),
                              size_bytes: tk.size,
                              width: tk.width,
                              height: tk.height,
                            },
                            null != a ? a : "",
                          ],
                        })),
                    eS(
                      i,
                      { content: o, attachments: s },
                      { eventSource: e ? "mouse" : "keyboard" },
                      { suggestions: eG }
                    ),
                    tw(),
                    void 0 !== eG &&
                      (void 0 !== t
                        ? eB.m.logEvent("chatgpt_prompt_use_suggestion", a, {
                            index: "".concat(t),
                          })
                        : eB.m.logEvent("chatgpt_prompt_ignore_suggestions"));
                }
              }
            },
            [eU, tw, tM, eS, eG, tk, tn]
          ),
          tS = (0, w.useCallback)(
            function () {
              eI("", eY), eP(eJ, { eventSource: "mouse" });
            },
            [eJ, eY, eI, eP]
          ),
          tP = (0, w.useCallback)(
            function () {
              eI("", eY),
                e0(er.s6.pauseCompletion, {
                  threadId: T.tQ.getServerThreadId(eD),
                  eventSource: "mouse",
                });
            },
            [eY, eD, e0, eI]
          ),
          tZ = (0, w.useCallback)(
            function () {
              eZ(eJ);
            },
            [eJ, eZ]
          ),
          tR = (0, w.useMemo)(
            function () {
              return {
                Enter: {
                  validator: function () {
                    return tN;
                  },
                  handler: function (e) {
                    (e.metaKey ||
                      (eX && !e.shiftKey && !e.nativeEvent.isComposing)) &&
                      (e.preventDefault(), tT());
                  },
                },
                Escape: {
                  validator: function () {
                    return eQ && eA;
                  },
                  handler: function () {
                    eI("", eY),
                      e0(er.s6.pauseCompletion, {
                        threadId: T.tQ.getServerThreadId(eD),
                        eventSource: "keyboard",
                      });
                  },
                },
              };
            },
            [tN, eX, eA, tT, eQ, eI, eY, e0, eD]
          ),
          tA = (0, w.useCallback)(
            function (e) {
              var t;
              (null === (t = tR[e.key]) || void 0 === t
                ? void 0
                : t.validator(e)) && tR[e.key].handler(e);
            },
            [tR]
          ),
          tE = (0, w.useCallback)(
            function (e) {
              if (e.clipboardData.files.length > 0 && 1 === tn) {
                var t,
                  n,
                  r,
                  a = e.clipboardData.files[0];
                if (
                  !(
                    null !==
                      (r =
                        null == tt
                          ? void 0
                          : null === (t = tt.capabilities) || void 0 === t
                          ? void 0
                          : null === (n = t.multimodal) || void 0 === n
                          ? void 0
                          : n.accepted_mime_types) && void 0 !== r
                      ? r
                      : []
                  ).includes(a.type)
                ) {
                  nN.m.danger(
                    eV.formatMessage(n5.unsupportedFileType, {
                      file_type: a.type,
                    })
                  ),
                    e.preventDefault();
                  return;
                }
                e9(a);
              }
            },
            [tt, e9, tn, eV]
          );
        (0, w.useEffect)(function () {
          var e;
          null === (e = e5.current) || void 0 === e || e.focus();
        }, []),
          (0, w.useEffect)(
            function () {
              e9(null);
            },
            [eR]
          );
        var tF = (0, N.hz)().has(ei.uj),
          tB = eq || tC || e$ || eQ,
          tL = eX ? "neutral" : "none",
          tO = (0, w.useMemo)(
            function () {
              return (0, y.jsxs)("div", {
                className: eq ? "w-full" : "",
                children: [
                  eq &&
                    (0, y.jsx)("div", {
                      className: "mb-3 text-center text-xs",
                      children: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, n5.errorGeneratingResponse)
                      ),
                    }),
                  (0, y.jsxs)(n2, {
                    $shouldRetry: eq,
                    children: [
                      !eq &&
                        tF &&
                        eG &&
                        (0, y.jsx)(nV, {
                          suggestions: eG,
                          shouldRetry: eq,
                          currentInputRef: e5,
                          onSelectSuggestion: e6,
                          handleCreateNewCompletion: tT,
                        }),
                      tC &&
                        (0, y.jsxs)(el.z, {
                          as: "button",
                          color: eq ? "primary" : tL,
                          onClick: tS,
                          className: (0, z.Z)(
                            eq ? "m-auto" : "-z-0 border-0 md:border"
                          ),
                          children: [
                            (0, y.jsx)(eu.ZP, {
                              icon: C.Qxo,
                              size: eX ? "xsmall" : "small",
                              className: "flex-shrink-0",
                            }),
                            (eX || eq) &&
                              (0, y.jsx)(
                                _.Z,
                                (0, v._)({}, n5.regenerateResponse)
                              ),
                          ],
                        }),
                      e$ &&
                        (0, y.jsxs)(el.z, {
                          as: "button",
                          color: "neutral",
                          onClick: tZ,
                          className: "border-0 md:border",
                          children: [
                            (0, y.jsx)(eu.ZP, {
                              icon: C.lV_,
                              className: "-rotate-180",
                              size: eX ? "xsmall" : "small",
                            }),
                            eX &&
                              (0, y.jsx)(
                                _.Z,
                                (0, v._)({}, n5.continueGenerating)
                              ),
                          ],
                        }),
                      eQ &&
                        eA &&
                        (0, y.jsxs)(el.z, {
                          as: "button",
                          color: "neutral",
                          onClick: tP,
                          className: "border-0 md:border",
                          children: [
                            (0, y.jsx)(eu.ZP, {
                              icon: C.jxP,
                              size: eX ? "xsmall" : "small",
                            }),
                            eX &&
                              (0, y.jsx)(_.Z, (0, v._)({}, n5.stopGenerating)),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            },
            [eq, tF, eG, tT, tC, tL, tS, eX, e$, tZ, eQ, eA, tP]
          );
        (0, w.useImperativeHandle)(t, function () {
          return { setInputValue: e6 };
        });
        var tU = tN
          ? { backgroundColor: null == eK ? void 0 : eK.backgroundColor }
          : {};
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)("form", {
              className: eF,
              onSubmit: tT,
              children: (0, y.jsxs)(
                "div",
                (0, eh._)(
                  (0, v._)(
                    {
                      className:
                        "relative flex h-full flex-1 items-stretch md:flex-col",
                    },
                    tl()
                  ),
                  {
                    children: [
                      eX && tB && tO,
                      !eq &&
                        (0, y.jsxs)(n1, {
                          $disabled: eq,
                          $historyDisabled: e2,
                          children: [
                            e8 &&
                              (0, y.jsx)(nK, {
                                children: (0, y.jsx)(nR.Z, {
                                  onRemoveFileClick: function () {
                                    return e9(null);
                                  },
                                  file: e8,
                                  loadingPercentage: tj,
                                }),
                              }),
                            (0, y.jsx)(nk.ZP, {
                              id: nJ,
                              tabIndex: 0,
                              value: e4,
                              "data-id": eJ,
                              ref: e5,
                              style: { maxHeight: "200px" },
                              rows: 1,
                              onKeyDown: tA,
                              onChange: function (e) {
                                e6(e.target.value);
                              },
                              onPaste: tE,
                              placeholder: eW
                                ? eV.formatMessage(
                                    n5.continueSharedConversationPlaceholder
                                  )
                                : eV.formatMessage(n5.placeholder),
                              className: (0, z.Z)(
                                "m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12",
                                !e8 && tr
                                  ? "pl-12 md:pl-[30px]"
                                  : "pl-3 md:pl-0"
                              ),
                              disabled: eq,
                            }),
                            !e8 &&
                              tr &&
                              (0, y.jsx)(n0, {
                                children: (0, y.jsx)(n_, {
                                  onClick: td,
                                  disabled: eq,
                                  getInputProps: tu,
                                }),
                              }),
                            (0, y.jsx)(nX, {
                              disabled: !tN || eq,
                              style: tU,
                              className: (0, z.Z)(
                                "bottom-1.5",
                                eA
                                  ? "disabled:bottom-0.5 md:disabled:bottom-0"
                                  : "transition-colors disabled:opacity-40"
                              ),
                              children: eA
                                ? (0, y.jsx)("div", {
                                    className: "text-2xl",
                                    children: (0, y.jsx)(nW, {}),
                                  })
                                : (0, y.jsx)(tI.u, {
                                    label: eV.formatMessage(
                                      n5.sendMessageTooltip
                                    ),
                                    children: (0, y.jsx)(eu.ZP, {
                                      icon: eu.IX,
                                      size: "small",
                                      className: "m-1 md:m-0",
                                    }),
                                  }),
                            }),
                            tc &&
                              (0, y.jsxs)(nY, {
                                children: [
                                  (0, y.jsx)(eu.ZP, { icon: C.tHe }),
                                  eV.formatMessage(n5.dragInstructions),
                                ],
                              }),
                          ],
                        }),
                      !eX && tB && tO,
                    ],
                  }
                )
              ),
            }),
            (0, y.jsx)(nF, { currentModelConfig: tt, disabled: eW }),
          ],
        });
      });
      function nW() {
        var e = (0, b._)((0, w.useState)(0), 2),
          t = e[0],
          n = e[1];
        (0, w.useEffect)(function () {
          var e = setInterval(function () {
            n(function (e) {
              return (e + 1) % 3;
            });
          }, 350);
          return function () {
            return clearInterval(e);
          };
        }, []);
        for (var r = [], a = 0; a < 3; a++)
          r.push(
            (0, y.jsx)(
              "span",
              { className: a <= t ? "" : "invisible", children: "\xb7" },
              a
            )
          );
        return (0, y.jsx)(y.Fragment, { children: r });
      }
      function nV(e) {
        var t = e.suggestions,
          n = e.shouldRetry,
          r = e.currentInputRef,
          a = e.onSelectSuggestion,
          i = e.handleCreateNewCompletion,
          o = (0, ee.Z)(),
          s = (0, w.useCallback)(
            function (e, t) {
              null !== r.current && (a(e), (r.current.value = e), i(void 0, t));
            },
            [r, i, a]
          );
        return (
          (0, w.useEffect)(
            function () {
              void 0 !== t && eB.m.logEvent("chatgpt_prompt_show_suggestions");
            },
            [t]
          ),
          (0, y.jsx)("div", {
            className:
              "absolute -left-2 bottom-full mb-4 flex max-w-[100vw] grow gap-2 overflow-auto px-2 md:static md:mb-0 md:max-w-none md:overflow-visible md:px-0",
            children:
              n || void 0 === t
                ? null
                : t.slice(0, 2).map(function (e, t) {
                    return (0, y.jsxs)(
                      el.z,
                      {
                        as: "button",
                        color: "neutral",
                        onClick: function () {
                          return s(e, t);
                        },
                        className:
                          "group whitespace-nowrap text-left md:whitespace-normal",
                        children: [
                          e,
                          (0, y.jsx)("div", {
                            className:
                              "absolute bottom-0 right-0 top-0 flex items-center bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-2 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200",
                            children: (0, y.jsx)(tI.u, {
                              label: o.formatMessage(n5.suggestionTooltip),
                              side: "top",
                              children: (0, y.jsx)(eu.ZP, {
                                icon: nj.Z,
                                size: "small",
                              }),
                            }),
                          }),
                        ],
                      },
                      t
                    );
                  }),
          })
        );
      }
      var nJ = "prompt-textarea",
        nY = et.Z.div(nU()),
        nK = et.Z.div(nq()),
        nX = et.Z.button(nz()),
        n0 = et.Z.div(nQ()),
        n1 = et.Z.div(
          nH(),
          function (e) {
            return e.$historyDisabled
              ? "bg-gray-900 text-white shadow-xs dark:bg-gray-900 dark:text-white dark:shadow-xs"
              : "";
          },
          function (e) {
            return e.$disabled && "bg-gray-100";
          }
        ),
        n2 = et.Z.div(n$(), function (e) {
          return e.$shouldRetry ? "" : "h-full";
        }),
        n5 = (0, M.vU)({
          errorGeneratingResponse: {
            id: "PromptTextarea.errorGeneratingResponse",
            defaultMessage: "There was an error generating a response",
            description:
              "Error message shown when the response generation fails",
          },
          regenerateResponse: {
            id: "PromptTextarea.regenerateResponse",
            defaultMessage: "Regenerate response",
            description: "Button label for regenerating response",
          },
          continueGenerating: {
            id: "PromptTextarea.continueGenerating",
            defaultMessage: "Continue generating",
            description: "Button label for continuing response generation",
          },
          stopGenerating: {
            id: "PromptTextarea.stopGenerating",
            defaultMessage: "Stop generating",
            description: "Button label for stopping response generation",
          },
          placeholder: {
            id: "PromptTextarea.placeholder",
            defaultMessage: "Send a message",
            description: "Placeholder text for the input field",
          },
          continueSharedConversationPlaceholder: {
            id: "PromptTextarea.continueSharedConversationPlaceholder",
            defaultMessage: "Send a message to continue the conversation.",
            description:
              "Placeholder text for the input field when viewing a shared chat",
          },
          suggestionTooltip: {
            id: "PromptTextarea.suggestionTooltip",
            defaultMessage: "Click to send",
            description: "Tooltip for the suggestion button",
          },
          sendMessageTooltip: {
            id: "PromptTextarea.sendMessageTooltip",
            defaultMessage: "Send message",
            description: "Tooltip for the send message button",
          },
          pauseTooltip: {
            id: "PromptTextarea.pauseTooltip",
            defaultMessage: "Pause",
            description: "Tooltip for the pause button",
          },
          dragInstructions: {
            id: "PromptTextarea.dragInstructions",
            defaultMessage: "Upload file",
            description:
              "Instructions for dragging and dropping a file to upload",
          },
          unsupportedFileType: {
            id: "PromptTextarea.unsupportedFileType",
            defaultMessage:
              'Uploads with file type "{file_type}" are not supported, please try another file.',
            description: "Error shown when an invalid file type is uploaded",
          },
        });
      function n3() {
        var e = (0, q._)([
          "absolute w-[2.5px] h-5 -rotate-45 -top-0.5 left-1.5 bg-gray-500 border-[0.5px] border-gray-100 group-hover/toggle:bg-red-500 dark:border-[#4E4F60]",
        ]);
        return (
          (n3 = function () {
            return e;
          }),
          e
        );
      }
      function n4() {
        var e = (0, q._)([
          "group/options flex flex-col rounded-xl border border-gray-100 bg-white text-left shadow-xxs dark:text-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-xs mx-2 sm:mx-1 overflow-hidden",
        ]);
        return (
          (n4 = function () {
            return e;
          }),
          e
        );
      }
      function n6() {
        var e = (0, q._)([
          "px-5 flex gap-2.5 flex-col py-4 whitespace-pre-line",
        ]);
        return (
          (n6 = function () {
            return e;
          }),
          e
        );
      }
      function n7() {
        var e = (0, q._)(["block dark:text-white text-gray-900"]);
        return (
          (n7 = function () {
            return e;
          }),
          e
        );
      }
      function n8() {
        var e = (0, q._)(["block text-xs text-gray-500"]);
        return (
          (n8 = function () {
            return e;
          }),
          e
        );
      }
      function n9(e) {
        var t = e.items,
          n = e.value,
          r = e.onChange,
          a = ri(),
          i = (0, b._)(
            (0, w.useState)(function () {
              return t.reduce(function (e, t) {
                if (t.options.length > 0) {
                  var r = t.options.find(function (e) {
                    return e.value === n;
                  });
                  if (r) return (e[t.value] = r.value), e;
                  e[t.value] = t.options[0].value;
                }
                return e;
              }, {});
            }),
            2
          ),
          o = i[0],
          s = i[1],
          l = (0, w.useCallback)(
            function (e, i) {
              var l,
                u = n,
                c = t.find(function (t) {
                  return t.value === e;
                }),
                d = (null == o ? void 0 : o[e]) !== void 0,
                m =
                  d &&
                  t.some(function (t) {
                    return (
                      t.value === e &&
                      t.options.some(function (t) {
                        return t.value === o[e];
                      })
                    );
                  }),
                h = i;
              a &&
                void 0 === i &&
                (h = d
                  ? o[e]
                  : null !== (l = null == c ? void 0 : c.options[0].value) &&
                    void 0 !== l
                  ? l
                  : void 0),
                (u = void 0 !== h ? h : m ? o[e] : e) !== n &&
                  (r(u),
                  s(function (t) {
                    return (0, eh._)((0, v._)({}, t), (0, np._)({}, e, u));
                  }));
            },
            [a, t, o, r, n]
          ),
          u = (0, b._)((0, w.useState)(new Set()), 2),
          c = u[0],
          d = u[1],
          m = (0, w.useCallback)(function (e, t) {
            t
              ? d(function (t) {
                  var n = new Set(t);
                  return n.add(e), n;
                })
              : d(function (t) {
                  var n = new Set(t);
                  return n.delete(e), n;
                });
          }, []);
        return (0, y.jsx)("div", {
          className:
            "relative flex rounded-xl bg-gray-100 p-1 text-gray-900 dark:bg-gray-900",
          children: (0, y.jsx)("ul", {
            className: "flex w-full list-none gap-1 sm:w-auto",
            children: t.map(function (e, r) {
              var a,
                i,
                s,
                u,
                d,
                h,
                f =
                  n === e.value ||
                  e.options.some(function (e) {
                    return e.value === n;
                  }),
                g = f ? n : null == o ? void 0 : o[e.value],
                p =
                  null != g
                    ? g
                    : null === (i = e.options) || void 0 === i
                    ? void 0
                    : null === (s = i[0]) || void 0 === s
                    ? void 0
                    : s.value,
                v =
                  null !==
                    (u = e.options.find(function (e) {
                      return e.value === p;
                    })) && void 0 !== u
                    ? u
                    : e.options[0],
                x =
                  null !== (d = null == v ? void 0 : v.icon) && void 0 !== d
                    ? d
                    : null;
              return (0,
              y.jsx)(rt, { onToggleItemOpenChanged: m, item: e, isSelected: f, isOtherToggleDropdownOpen: c.size > 0 && !c.has(e.categoryId), currentValue: n, defaultOption: null == v ? void 0 : v.value, onChange: l, currentIcon: x, displayCurrentValue: f && e.showSelectedValueBelow && null !== (h = null == v ? void 0 : v.name) && void 0 !== h ? h : "", contentAlign: ((a = t.length), 0 === r ? "start" : r === a - 1 ? "end" : "center") }, r);
            }),
          }),
        });
      }
      function re(e) {
        var t = e.item,
          n = e.isSelected,
          r = e.isOtherToggleDropdownOpen,
          a = e.isOpen,
          i = e.onChange,
          o = e.currentIcon,
          s = e.displayCurrentValue,
          l = null != o ? o : t.icon,
          u = t.options.length > 1 || t.alwaysShowOptions,
          c = ri();
        return (0, y.jsxs)("div", {
          className: (0, z.Z)(
            "group/button",
            "relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5",
            n
              ? "border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100"
              : "border-transparent text-gray-500 hover:text-gray-800 hover:dark:text-gray-100",
            void 0 !== a && a && "text-gray-800 dark:text-gray-100",
            r && n && "opacity-50"
          ),
          onClick: function () {
            t.disabled || i(t.value);
          },
          children: [
            (0, y.jsxs)("span", {
              className: (0, z.Z)(
                "relative max-[370px]:hidden",
                t.disabled && "group-hover/button:text-red-500"
              ),
              children: [
                null != l &&
                  (0, y.jsx)(eu.ZP, {
                    icon: l,
                    className: (0, z.Z)(
                      "transition-colors",
                      n ? t.buttonActiveClass : t.buttonHoverClass
                    ),
                  }),
                t.disabled && (0, y.jsx)(rl, {}),
              ],
            }),
            (0, y.jsx)("span", {
              className: (0, z.Z)(
                "truncate text-sm font-medium md:pr-1.5",
                !c && "pr-1.5"
              ),
              children: t.name,
            }),
            c &&
              n &&
              (0, y.jsx)(eu.ZP, {
                icon: u ? C.bTu : nb.DAO,
                className: "toggle-item-button-open ml-0.5 text-gray-500",
              }),
            c &&
              (0, y.jsx)(eu.ZP, {
                icon: C.rH8,
                className: "toggle-item-button-closed ml-0.5 text-gray-500",
              }),
            null != s &&
              "" !== s &&
              (0, y.jsx)("span", {
                className:
                  "absolute left-0 top-full mt-4 w-full truncate overflow-ellipsis text-sm text-gray-500",
                children: s,
              }),
          ],
        });
      }
      function rt(e) {
        var t = e.item,
          n = e.isSelected,
          r = e.defaultOption,
          a = e.onChange,
          i = e.currentIcon,
          o = e.currentValue,
          s = e.displayCurrentValue,
          l = e.contentAlign,
          u = e.onToggleItemOpenChanged,
          c = e.isOtherToggleDropdownOpen,
          d = (0, b._)((0, w.useState)(void 0), 2),
          m = d[0],
          h = d[1],
          f = (0, w.useRef)(null),
          g = t.options.length > 1 || t.alwaysShowOptions,
          p = !(void 0 === t.description && void 0 === t.disclaimer),
          v = ri(),
          x = (0, w.useCallback)(
            function (e) {
              h(e), u(t.categoryId, !!e);
            },
            [t.categoryId, u]
          );
        return (0, y.jsx)(nx.fC, {
          open: m,
          modal: !1,
          children: (0, y.jsxs)("li", {
            className: "group/toggle w-full",
            onMouseEnter: function () {
              return !v && x(!0);
            },
            onMouseLeave: function () {
              return !v && x(void 0);
            },
            children: [
              (0, y.jsx)(nx.xz, {
                ref: f,
                className: "w-full cursor-pointer",
                disabled: v && !n,
                onClick: function (e) {
                  v && (e.stopPropagation(), e.preventDefault());
                },
                children: (0, y.jsx)(re, {
                  isOpen: !!m,
                  isOtherToggleDropdownOpen: c,
                  item: t,
                  isSelected: n,
                  onChange: a,
                  currentIcon: i,
                  displayCurrentValue: s,
                }),
              }),
              (0, y.jsx)(
                nx.Uv,
                {
                  children: (0, y.jsx)(nx.VY, {
                    className: (0, z.Z)(
                      "w-full min-w-[100vw] max-w-[100vw] select-none pt-3 font-medium sm:w-[312px] sm:min-w-[312px] md:max-w-none",
                      "will-change-[opacity,transform] radix-side-bottom:animate-slideDownAndFade radix-side-left:animate-slideLeftAndFade radix-side-right:animate-slideRightAndFade radix-side-top:animate-slideUpAndFade",
                      { "sm:min-w-[420px]": "Alpha" === t.name }
                    ),
                    align: l,
                    onCloseAutoFocus: function (e) {
                      m || e.preventDefault();
                    },
                    onEscapeKeyDown: function (e) {
                      var t;
                      e.preventDefault(),
                        null === (t = f.current) || void 0 === t || t.focus();
                    },
                    children: (0, y.jsxs)(ru, {
                      children: [
                        p && (0, y.jsx)(rn, { item: t }),
                        (g || (!m && !v)) &&
                          (0, y.jsx)(rr, {
                            defaultOption: n ? o : r,
                            item: t,
                            currentValue: o,
                            onChange: function (e, t) {
                              var n;
                              a(e, t),
                                x(void 0),
                                null === (n = document.getElementById(nJ)) ||
                                  void 0 === n ||
                                  n.focus();
                            },
                            className: (0, z.Z)(
                              "text-sm",
                              p &&
                                "mb-1 border-t border-gray-100 dark:border-gray-800"
                            ),
                          }),
                      ],
                    }),
                  }),
                },
                t.categoryId
              ),
            ],
          }),
        });
      }
      function rn(e) {
        var t = e.item;
        return (0, y.jsxs)(rc, {
          className: "text-sm sm:text-base",
          children: [
            void 0 !== t.description &&
              (0, y.jsx)(rd, { children: t.description }),
            void 0 !== t.disclaimer &&
              (0, y.jsx)(rm, { children: t.disclaimer }),
          ],
        });
      }
      function rr(e) {
        var t = e.item,
          n = e.className,
          r = e.onChange,
          a = e.currentValue,
          i = e.defaultOption;
        return (0, y.jsx)(nx.Ee, {
          defaultValue: i,
          value: a,
          className: n,
          children: t.options.map(function (e, n) {
            return (0, y.jsx)(
              ra,
              {
                option: e,
                selected: a === e.value,
                active: i === e.value,
                iconClass: t.iconClass,
                iconActiveClass: t.buttonActiveClass,
                showBorder: n !== t.options.length - 1,
                isDisabled: e.disabled,
                onChange: function () {
                  e.disabled || r(t.value, e.value);
                },
              },
              e.value
            );
          }),
        });
      }
      function ra(e) {
        var t,
          n = e.option,
          r = e.selected,
          a = e.active,
          i = e.iconClass,
          o = e.iconActiveClass,
          s = e.isDisabled,
          l = e.onChange,
          u = e.showBorder,
          c = null !== (t = n.activeIcon) && void 0 !== t ? t : n.icon;
        return (0, y.jsx)(nx.Rk, {
          asChild: !0,
          value: n.value,
          onClick: l,
          className: "select-none outline-none",
          children: (0, y.jsxs)("div", {
            className: (0, z.Z)(
              "group/option relative flex w-full items-center gap-2 px-5 py-3 pr-11 font-medium text-gray-900 focus:bg-gray-50 dark:text-gray-100",
              {
                "cursor-pointer hover:!bg-gray-50 dark:hover:!bg-gray-700": !s,
                "bg-gray-50 group-hover/options:bg-transparent dark:bg-gray-700":
                  a && !r,
                "text-gray-800 dark:text-gray-100": r || a,
                "border-b border-gray-100 dark:border-gray-800": u,
              }
            ),
            children: [
              null != n.icon && null != c
                ? (0, y.jsx)(eu.ZP, {
                    icon: r ? n.icon : c,
                    className: (0, z.Z)(
                      "max-[370px]:hidden",
                      !s && !r && i,
                      r || a ? o : "text-gray-500"
                    ),
                  })
                : null,
              (0, y.jsx)("span", {
                title: "string" == typeof n.name && n.name ? n.name : "",
                className: (0, z.Z)("truncate", {
                  "group-hover/option:text-gray-800 dark:group-hover/option:text-gray-100":
                    !s,
                  "text-gray-800 dark:text-gray-100": a && !s,
                }),
                children: n.name,
              }),
              n.tags.map(function (e) {
                return rs(e);
              }),
              (0, y.jsx)("span", {
                className: (0, z.Z)({
                  "absolute right-3 rounded-full p-1 text-blue-400": !0,
                  "opacity-0": !r && !s,
                  "group-hover/options:opacity-0": !r,
                  "text-red-500": s,
                }),
                children: (0, y.jsx)(eu.ZP, {
                  icon: s ? nv.Z : eu.nQ,
                  className: "h-5 w-5",
                }),
              }),
            ],
          }),
        });
      }
      var ri = function () {
          return !(0, E.w$)();
        },
        ro = new Set(["beta", "confidential", "alpha"]),
        rs = function (e) {
          return (
            ro.has(e) &&
            (0, y.jsx)(
              "span",
              {
                className: (0, z.Z)(
                  "py-0.25 rounded px-1 text-sm capitalize",
                  "beta" === e && "bg-blue-200 text-blue-500",
                  "alpha" === e && "bg-blue-200 text-blue-500",
                  "confidential" === e && "bg-red-200 text-red-800"
                ),
                children: e,
              },
              e
            )
          );
        },
        rl = et.Z.span(n3()),
        ru = et.Z.div(n4()),
        rc = et.Z.div(n6()),
        rd = et.Z.span(n7()),
        rm = et.Z.span(n8()),
        rh = n(5046);
      function rf(e) {
        var t = e.onModelChange,
          n = e.currentModel,
          r = (0, en.WS)(),
          a = (0, rh.BT)(),
          i = (0, nD.ZP)(),
          o = (0, w.useCallback)(
            function (e) {
              a !== e && (t(e), r(er.s6.toggleModel, { model: e }));
            },
            [a, r, t]
          );
        return (0, y.jsx)(n9, {
          value: null == n ? void 0 : n.id,
          onChange: o,
          items: i,
        });
      }
      var rg = n(20485),
        rp = n(12285),
        rv = n(40638),
        rx = n(57526),
        rb = n(99581);
      function ry() {
        var e = (0, q._)([
          "rounded-lg bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20 shadow-[0_1px_7px_0_rgba(0,0,0,0.03)]",
        ]);
        return (
          (ry = function () {
            return e;
          }),
          e
        );
      }
      function rj() {
        var e = (0, q._)([
          "absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-sm md:w-[100%]",
        ]);
        return (
          (rj = function () {
            return e;
          }),
          e
        );
      }
      function rk() {
        var e = (0, q._)([
          "absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4",
        ]);
        return (
          (rk = function () {
            return e;
          }),
          e
        );
      }
      function rw() {
        var e = (0, q._)(["flex items-center gap-2 truncate"]);
        return (
          (rw = function () {
            return e;
          }),
          e
        );
      }
      function rC() {
        var e = (0, q._)(["h-6 w-6 shrink-0"]);
        return (
          (rC = function () {
            return e;
          }),
          e
        );
      }
      function r_() {
        var e = (0, q._)([
          "absolute inset-y-0 right-0 flex items-center pr-5 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (r_ = function () {
            return e;
          }),
          e
        );
      }
      function rM() {
        var e = (0, q._)([
          "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (rM = function () {
            return e;
          }),
          e
        );
      }
      var rN = ["confidential", "alpha", "plus"];
      function rT(e) {
        var t = e.selectedOptions,
          n = e.selectedLabel,
          r = e.onChange,
          a = e.onAction,
          i = e.onOpen,
          o = e.onClose,
          s = e.dropdownRef,
          l = (0, x._)(e, [
            "selectedOptions",
            "selectedLabel",
            "onChange",
            "onAction",
            "onOpen",
            "onClose",
            "dropdownRef",
          ]),
          u = (0, w.useCallback)(
            function (e) {
              if (
                e.some(function (e) {
                  return "string" == typeof e;
                })
              ) {
                var t = e.find(function (e) {
                  return "string" == typeof e;
                });
                null == a || a(t);
              } else r(e);
            },
            [r, a]
          );
        return (0, y.jsx)(rp.R, {
          value: t.map(function (e) {
            return e.value;
          }),
          multiple: !0,
          onChange: u,
          children: function (e) {
            var r = e.open;
            return (0, y.jsx)(
              rI,
              (0, v._)(
                {
                  ref: s,
                  selectedLabel: n || "".concat(t.length, " selected"),
                  open: r,
                  onOpen: i,
                  onClose: o,
                  multiple: !0,
                },
                l
              )
            );
          },
        });
      }
      var rI = (0, w.forwardRef)(function (e, t) {
        var n = e.name,
          r = e.selectedLabel,
          a = e.open,
          i = e.options,
          o = e.actions,
          s = e.multiple,
          l = e.isLoading,
          u = e.loadingState,
          c = e.header,
          d = e.onOpen,
          m = e.onClose,
          h = e.theme,
          f = (0, w.useRef)(null),
          g = (0, w.useRef)(null),
          p = (0, E.oc)();
        (0, w.useImperativeHandle)(
          t,
          function () {
            return {
              open: function () {
                if (!a) {
                  var e;
                  null === (e = f.current) || void 0 === e || e.click();
                }
              },
              close: function () {
                if (a) {
                  var e;
                  null === (e = f.current) || void 0 === e || e.click();
                }
              },
            };
          },
          [a]
        );
        var v = l
          ? u ||
            (0, y.jsx)("div", {
              className: "flex h-[42px] items-center justify-center",
              children: (0, y.jsx)(eR.Z, {}),
            })
          : (0, y.jsxs)(y.Fragment, {
              children: [
                c,
                (0, y.jsxs)(rp.R.Options, {
                  className: "overflow-auto",
                  children: [
                    i.map(function (e, t) {
                      return (0, y.jsx)(
                        rS,
                        {
                          value: e.value,
                          disabled: e.disabled,
                          theme: h,
                          children: function (t) {
                            var n = t.selected,
                              r = t.active;
                            return (0, y.jsxs)(y.Fragment, {
                              children: [
                                (0, y.jsxs)(rU, {
                                  children: [
                                    e.imageUrl &&
                                      (0, y.jsx)(rq, {
                                        children: (0, y.jsx)(ng.Z, {
                                          url: e.imageUrl,
                                          name: e.title,
                                          size: "100%",
                                        }),
                                      }),
                                    (0, y.jsxs)("span", {
                                      className: (0, z.Z)(
                                        n && !s && "font-semibold",
                                        "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"
                                      ),
                                      children: [
                                        e.title,
                                        e.tags.map(function (e) {
                                          return rA(e);
                                        }),
                                        e.customTags,
                                      ],
                                    }),
                                  ],
                                }),
                                s && !e.disabled
                                  ? (0, y.jsx)(rZ, { theme: h, selected: n })
                                  : n &&
                                    (0, y.jsx)(rP, {
                                      theme: h,
                                      icon: "mini" === h ? eu.HQ : C.UgA,
                                    }),
                                e.disabled &&
                                  (0, y.jsx)(rP, {
                                    theme: h,
                                    icon: rx.Z,
                                    className: "text-red-700 dark:text-red-500",
                                  }),
                                r &&
                                  p &&
                                  (0, rb.createPortal)(
                                    (0, y.jsx)(rD, {
                                      option: e,
                                      dropdownRef: g,
                                    }),
                                    document.body
                                  ),
                              ],
                            });
                          },
                        },
                        t
                      );
                    }),
                    null == o
                      ? void 0
                      : o.map(function (e, t) {
                          return (0, y.jsx)(
                            rS,
                            {
                              value: e.id,
                              theme: h,
                              children: function () {
                                return (0, y.jsxs)(y.Fragment, {
                                  children: [
                                    (0, y.jsx)("div", {
                                      className:
                                        "text-gray-800 dark:text-gray-100",
                                      children: e.label,
                                    }),
                                    (0, y.jsx)(rP, { theme: h, icon: e.icon }),
                                  ],
                                });
                              },
                            },
                            t
                          );
                        }),
                  ],
                }),
              ],
            });
        return (0,
        y.jsxs)("div", { className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4", children: [(0, y.jsxs)(rp.R.Button, { ref: f, onClick: a ? m : d, className: (0, z.Z)("relative flex cursor-pointer flex-col bg-white py-2 pr-10 text-left dark:bg-gray-800 sm:text-sm", "mini" === h ? "mx-auto w-auto rounded-lg border border-transparent pl-4 pr-7 hover:border-black/10 dark:hover:border-white/10" : "w-full rounded-md border border-black/10 pl-3 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20"), children: ["mini" !== h && (0, y.jsx)(rp.R.Label, { className: "block text-xs text-gray-700 dark:text-gray-500", children: n }), (0, y.jsx)("span", { className: "inline-flex w-full truncate", children: (0, y.jsx)("span", { className: "flex h-6 items-center gap-1 truncate", children: r }) }), (0, y.jsx)("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: (0, y.jsx)(eu.ZP, { icon: C.bTu, className: " text-gray-400", "aria-hidden": "true" }) })] }), (0, y.jsx)(rv.u, { show: a, as: w.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, y.jsx)(rF, { ref: g, children: v }) })] });
      });
      function rS(e) {
        var t = e.value,
          n = e.disabled,
          r = e.children,
          a = e.theme;
        return (0, y.jsx)(rp.R.Option, {
          className: function (e) {
            var t = e.active;
            return (0, z.Z)(
              "mini" === a ? rL : rO,
              t && !n ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900",
              n &&
                "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100"
            );
          },
          value: t,
          children: r,
        });
      }
      function rP(e) {
        var t = e.icon,
          n = e.className,
          r = e.theme;
        return (0, y.jsx)("mini" === r ? rz : rQ, {
          children: (0, y.jsx)(eu.ZP, {
            icon: t,
            className: (0, z.Z)("h-5 w-5", n),
            "aria-hidden": "true",
          }),
        });
      }
      function rZ(e) {
        var t = e.selected,
          n = e.disabled;
        return "mini" === e.theme
          ? (0, y.jsxs)(rz, {
              children: [
                (0, y.jsx)(eu.ZP, {
                  icon: t ? eu.HQ : eu.i9,
                  className: "h-5 w-5 text-blue-600",
                  strokeWidth: t ? 2.5 : 2,
                }),
                !t &&
                  (0, y.jsx)(eu.ZP, {
                    icon: eu.nQ,
                    className: (0, z.Z)(
                      "absolute h-5 w-5 text-blue-600 opacity-0 transition-opacity",
                      !n && "group-hover:opacity-100"
                    ),
                  }),
              ],
            })
          : (0, y.jsx)(rQ, {
              children: (0, y.jsx)("div", {
                className: (0, z.Z)(
                  "flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
                  t
                    ? "border-transparent bg-green-600 text-white"
                    : "border-black/5 dark:border-white/20"
                ),
                "aria-hidden": "true",
                children: (0, y.jsx)(eu.ZP, {
                  icon: C.UgA,
                  className: (0, z.Z)(
                    "h-3 w-3 transition-opacity",
                    t && "opacity-100",
                    !t && "opacity-0",
                    !t && !n && "group-hover:opacity-50"
                  ),
                  strokeWidth: t ? 2.5 : 2,
                }),
              }),
            });
      }
      function rR(e) {
        var t = e.showCheckbox,
          n = e.theme;
        return (0, y.jsxs)("div", {
          className: (0, z.Z)("mini" === n ? rL : rO, "cursor-auto"),
          children: [
            (0, y.jsxs)(rU, {
              children: [
                (0, y.jsx)(rq, {
                  children: (0, y.jsx)("div", {
                    className: "h-full w-full rounded-sm bg-gray-200",
                  }),
                }),
                (0, y.jsx)("div", {
                  className: "h-[12px] w-[88px] rounded-sm bg-gray-100",
                }),
              ],
            }),
            t && (0, y.jsx)(rZ, { theme: n, selected: !1, disabled: !0 }),
          ],
        });
      }
      function rD(e) {
        var t = e.option,
          n = e.dropdownRef,
          r = (0, b._)((0, w.useState)(), 2),
          a = r[0],
          i = r[1];
        return ((0, w.useEffect)(
          function () {
            var e = function () {
              if (n.current) {
                var e = n.current.getBoundingClientRect();
                i({ top: e.top, left: e.left - 260, minHeight: e.height });
              }
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          },
          [n]
        ),
        a)
          ? (0, y.jsxs)(rB, {
              style: {
                width: 260,
                minHeight: a.minHeight,
                top: a.top,
                left: a.left,
              },
              children: [
                t.disabled &&
                  (0, y.jsx)(eu.ZP, {
                    icon: rx.Z,
                    size: "medium",
                    className: "text-red-700 dark:text-red-500",
                  }),
                t.imageUrl &&
                  (0, y.jsx)(ng.Z, {
                    url: t.imageUrl,
                    name: t.title,
                    size: 70,
                  }),
                (0, y.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    t.title,
                    " ",
                    t.tags.map(function (e) {
                      return rA(e);
                    }),
                    " ",
                    t.customTags,
                  ],
                }),
                (0, y.jsx)("div", {
                  className: "whitespace-pre-line text-xs",
                  children: t.description,
                }),
              ],
            })
          : null;
      }
      var rA = function (e) {
          return (
            rN.includes(e) &&
            (0, y.jsx)(
              "span",
              {
                className: (0, z.Z)(
                  "py-0.25 rounded px-1 text-[10px] font-semibold uppercase",
                  "confidential" === e && "bg-red-200 text-red-800",
                  "alpha" === e && "bg-blue-200 text-blue-500",
                  "plus" === e && "bg-yellow-200 text-yellow-900"
                ),
                children: e,
              },
              e
            )
          );
        },
        rE = et.Z.div(ry()),
        rF = (0, et.Z)(rE)(rj()),
        rB = (0, et.Z)(rE)(rk()),
        rL =
          "group relative flex h-[50px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-5 pr-12 last:border-0 dark:border-white/20",
        rO =
          "group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20",
        rU = et.Z.span(rw()),
        rq = et.Z.span(rC()),
        rz = et.Z.span(r_()),
        rQ = et.Z.span(rM()),
        rH = n(697),
        r$ = n(10604),
        rG = n(5759),
        rW = n(17915),
        rV = n(38631);
      function rJ() {
        var e = (0, q._)(["mt-4 flex flex-col gap-4"]);
        return (
          (rJ = function () {
            return e;
          }),
          e
        );
      }
      function rY() {
        var e = (0, q._)(["text-sm text-red-500"]);
        return (
          (rY = function () {
            return e;
          }),
          e
        );
      }
      var rK = et.Z.div(rJ()),
        rX = et.Z.div(rY()),
        r0 = n(49910);
      function r1(e) {
        var t = e.onClickInstall,
          n = e.onInstallLocalhost,
          r = e.onClose,
          a = (0, b._)((0, w.useState)(), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)(), 2),
          l = s[0],
          u = s[1],
          c = (0, b._)((0, w.useState)(!1), 2),
          d = c[0],
          m = c[1],
          h = (0, w.useCallback)(function (e) {
            o(e);
          }, []),
          f = (0, w.useCallback)(function () {
            m(!0);
          }, []);
        return d && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, y.jsx)(r6, {
              plugin: null == i ? void 0 : i.scrapeManifestResponse.plugin,
              onClickInstall: t,
              onClose: r,
            })
          : l && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, y.jsx)(r4, {
              plugin: i.scrapeManifestResponse.plugin,
              manifestAccessToken: i.manifestAccessToken,
              verificationTokens: l,
              onReadyToInstall: f,
              onClose: r,
            })
          : i
          ? (0, y.jsx)(r3, {
              loadManifestResult: i,
              onRefetch: h,
              onSubmitAuthInfo: u,
              onReadyToInstall: f,
              onInstallLocalhost: n,
              onClose: r,
            })
          : (0, y.jsx)(r2, { onFetch: h, onClose: r });
      }
      function r2(e) {
        var t = e.onFetch,
          n = e.onClose,
          r = (0, ev.kP)().session,
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)("bearer"), 2),
          l = s[0],
          u = s[1],
          c = (0, b._)((0, w.useState)(), 2),
          d = c[0],
          m = c[1],
          h = (0, w.useRef)(null),
          f = (0, w.useRef)(null),
          g = (0, rW.sd)(),
          p = g.fetchManifestAndSpec,
          v = g.isLoading;
        (0, w.useEffect)(function () {
          var e;
          null === (e = h.current) || void 0 === e || e.focus();
        }, []);
        var x = (0, w.useCallback)(function () {
            o(function (e) {
              return !e;
            });
          }, []),
          j = (0, w.useCallback)(function (e) {
            u(e.target.value);
          }, []),
          k = (0, w.useCallback)(
            (0, em._)(function () {
              var e, n, r;
              return (0, ef.Jh)(this, function (a) {
                return (r =
                  null === (e = h.current) || void 0 === e ? void 0 : e.value)
                  ? (p({
                      domain: r,
                      manifestAccessToken: i
                        ? {
                            authorization_type: l,
                            token:
                              (null === (n = f.current) || void 0 === n
                                ? void 0
                                : n.value) || "",
                          }
                        : void 0,
                      onSuccess: t,
                      onError: function (e) {
                        return m(
                          (null == e ? void 0 : e.message) ||
                            "Couldn't find manifest."
                        );
                      },
                    }),
                    [2])
                  : (m("Please provide a domain."), [2]);
              });
            }),
            [p, t, l, i]
          );
        return (0, y.jsx)(eZ.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: "Enter your website domain",
          primaryButton: (0, y.jsx)(eP.ZP.Button, {
            title: "Find manifest file",
            color: "primary",
            onClick: k,
            loading: v,
          }),
          secondaryButton: (0, y.jsx)(eP.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, y.jsxs)(rK, {
            children: [
              (0, y.jsx)("a", {
                href: "https://platform.openai.com/docs/plugins/getting-started",
                target: "_blank",
                rel: "noreferrer",
                className: "text-green-600",
                children:
                  "Visit our documentation to learn how to build a plugin.",
              }),
              (0, y.jsxs)(rG.Z, {
                icon: "\uD83D\uDEA8",
                children: [
                  "If your plugin has been approved to be in the ChatGPT plugin store, and you have made changes to your ",
                  "plugin's",
                  " manifest, your plugin will be removed from the store, and you will need to",
                  " ",
                  (0, y.jsx)("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-green-600",
                    href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                    children: "resubmit it for review",
                  }),
                  ".",
                ],
              }),
              (0, y.jsx)(r$.Z, {
                ref: h,
                name: "url",
                displayName: "Domain",
                placeholder: "ex: openai.com or localhost:3000",
                onPressEnter: k,
                autoFocus: !0,
              }),
              (null == r ? void 0 : r.user) != null &&
                (0, ev.yl)(r.user) &&
                (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsxs)("div", {
                      role: "button",
                      className:
                        "flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70",
                      onClick: x,
                      children: [
                        (0, y.jsx)("div", {
                          children: "My file requires authentication",
                        }),
                        (0, y.jsx)(eu.ZP, { icon: i ? C.rH8 : C.bTu }),
                      ],
                    }),
                    i &&
                      (0, y.jsxs)(y.Fragment, {
                        children: [
                          (0, y.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, y.jsx)("div", {
                                children: "Authentication type",
                              }),
                              (0, y.jsxs)("div", {
                                className: "flex gap-6",
                                children: [
                                  (0, y.jsx)(r5, {
                                    label: "Bearer",
                                    value: "bearer",
                                    checked: "bearer" === l,
                                    onChange: j,
                                  }),
                                  (0, y.jsx)(r5, {
                                    label: "Basic",
                                    value: "basic",
                                    checked: "basic" === l,
                                    onChange: j,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, y.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, y.jsx)("div", { children: "Access token" }),
                              (0, y.jsx)(r$.Z, {
                                ref: f,
                                name: "manifestToken",
                                onPressEnter: k,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              d && (0, y.jsx)(rX, { children: d }),
            ],
          }),
        });
      }
      function r5(e) {
        var t = e.label,
          n = e.value,
          r = e.checked,
          a = e.onChange;
        return (0, y.jsxs)("label", {
          className: "flex items-center gap-2",
          children: [
            (0, y.jsx)("input", {
              name: "manifestAuthType",
              type: "radio",
              value: n,
              checked: r,
              onChange: a,
              className: "text-green-600 focus:ring-green-600",
            }),
            t,
          ],
        });
      }
      function r3(e) {
        var t = e.loadManifestResult,
          n = e.onRefetch,
          r = e.onSubmitAuthInfo,
          a = e.onReadyToInstall,
          i = e.onInstallLocalhost,
          o = e.onClose,
          s = t.domain,
          l = t.manifestAccessToken,
          u = t.scrapeManifestResponse,
          c = t.apiValidationInfo,
          d = u.plugin,
          m = u.manifest_validation_info,
          h = (0, b._)((0, w.useState)(), 2),
          f = h[0],
          g = h[1],
          p = (0, b._)((0, w.useState)(!1), 2),
          v = p[0],
          x = p[1],
          k = (0, w.useRef)(null),
          C = (0, w.useRef)(null),
          _ = (0, w.useRef)(null),
          M = (0, rW.sd)(),
          N = M.fetchManifestAndSpec,
          T = M.isLoading,
          I = (0, j.NL)(),
          S = d && (0, tc.cf)(d),
          P = (null == d ? void 0 : d.manifest.auth.type) === "service_http",
          Z = (null == d ? void 0 : d.manifest.auth.type) === "oauth",
          R =
            (m.errors && m.errors.length > 0) ||
            ((null == c ? void 0 : c.errors) &&
              (null == c ? void 0 : c.errors.length) > 0),
          D = (0, w.useCallback)(
            (0, em._)(function () {
              var e, t, u, c, m;
              return (0, ef.Jh)(this, function (h) {
                switch (h.label) {
                  case 0:
                    if (!R) return [3, 1];
                    return (
                      N({
                        domain: s,
                        manifestAccessToken: l,
                        onSuccess: n,
                        onError: function (e) {
                          return g(
                            (null == e ? void 0 : e.message) ||
                              "Couldn't find manifest."
                          );
                        },
                      }),
                      [3, 15]
                    );
                  case 1:
                    if (!S) return [3, 2];
                    return (0, rW.GI)(d, I, ["installedAip"]), i(d), [3, 15];
                  case 2:
                    if (!P) return [3, 8];
                    if (
                      !(null === (e = k.current) || void 0 === e
                        ? void 0
                        : e.value)
                    )
                      return (
                        g("Please provide your service access token."), [2]
                      );
                    h.label = 3;
                  case 3:
                    return (
                      h.trys.push([3, 5, 6, 7]),
                      x(!0),
                      [
                        4,
                        ea.ZP.setPluginServiceHttpToken({
                          id: d.id,
                          serviceAccessToken: k.current.value,
                        }),
                      ]
                    );
                  case 4:
                    return r(h.sent().verification_tokens), [3, 7];
                  case 5:
                    return h.sent(), g("Error setting access token."), [3, 7];
                  case 6:
                    return x(!1), [7];
                  case 7:
                    return [3, 15];
                  case 8:
                    if (!Z) return [3, 14];
                    if (
                      ((c =
                        null === (t = C.current) || void 0 === t
                          ? void 0
                          : t.value),
                      (m =
                        null === (u = _.current) || void 0 === u
                          ? void 0
                          : u.value),
                      !c || !m)
                    )
                      return g("Please provide your OAuth credentials."), [2];
                    h.label = 9;
                  case 9:
                    return (
                      h.trys.push([9, 11, 12, 13]),
                      [
                        4,
                        ea.ZP.setPluginOAuthClientCredentials({
                          id: d.id,
                          clientId: C.current.value,
                          clientSecret: _.current.value,
                        }),
                      ]
                    );
                  case 10:
                    return r(h.sent().verification_tokens), [3, 13];
                  case 11:
                    return (
                      h.sent(), g("Error setting OAuth credentials."), [3, 13]
                    );
                  case 12:
                    return x(!1), [7];
                  case 13:
                    return [3, 15];
                  case 14:
                    d ? a(d) : o(), (h.label = 15);
                  case 15:
                    return [2];
                }
              });
            }),
            [P, Z, d, s, l, R, S, I, N, n, r, a, i, o]
          );
        return (0, y.jsx)(eZ.Z, {
          isOpen: !0,
          onClose: o,
          type: "success",
          title: "Found plugin",
          primaryButton: (0, y.jsx)(eP.ZP.Button, {
            title: R
              ? "Refetch manifest"
              : S
              ? "Install localhost plugin"
              : "Next",
            color: "primary",
            onClick: D,
            loading: v || T,
          }),
          secondaryButton:
            (R || P || Z) &&
            (0, y.jsx)(eP.ZP.Button, {
              title: "Cancel",
              color: "neutral",
              onClick: o,
            }),
          children: (0, y.jsxs)(rK, {
            children: [
              (0, y.jsx)(r0.rC, { manifestValidationInfo: m }),
              c && (0, y.jsx)(r0.q6, { apiValidationInfo: c }),
              d && (0, y.jsx)(rV.Z, { plugin: d }),
              P &&
                !R &&
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your service access token:",
                    }),
                    (0, y.jsx)("div", {
                      className: "mt-2",
                      children: (0, y.jsx)(r$.Z, {
                        ref: k,
                        name: "serviceToken",
                        placeholder: "Service access token",
                        autoComplete: "off",
                        onPressEnter: D,
                        autoFocus: !0,
                      }),
                    }),
                  ],
                }),
              Z &&
                !R &&
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your OAuth credentials:",
                    }),
                    (0, y.jsx)("div", {
                      className: "mt-2",
                      children: (0, y.jsx)(r$.Z, {
                        ref: C,
                        name: "clientId",
                        placeholder: "Client ID",
                        autoComplete: "off",
                        onPressEnter: D,
                        autoFocus: !0,
                      }),
                    }),
                    (0, y.jsx)("div", {
                      className: "mt-2",
                      children: (0, y.jsx)(r$.Z, {
                        ref: _,
                        type: "password",
                        name: "clientSecret",
                        placeholder: "Client secret",
                        autoComplete: "off",
                        onPressEnter: D,
                      }),
                    }),
                  ],
                }),
              f && (0, y.jsx)(rX, { children: f }),
            ],
          }),
        });
      }
      function r4(e) {
        var t = e.plugin,
          n = e.manifestAccessToken,
          r = e.verificationTokens,
          a = e.onReadyToInstall,
          i = e.onClose,
          o = (0, b._)((0, w.useState)(), 2),
          s = o[0],
          l = o[1],
          u = (0, b._)((0, w.useState)(!1), 2),
          c = u[0],
          d = u[1],
          m = (0, w.useCallback)(
            (0, em._)(function () {
              var e, i;
              return (0, ef.Jh)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      o.trys.push([0, 2, 3, 4]),
                      d(!0),
                      [
                        4,
                        ea.ZP.scrapePluginManifest({
                          domain: t.domain,
                          manifestAccessToken: n,
                        }),
                      ]
                    );
                  case 1:
                    if ((e = o.sent().plugin)) {
                      for (var s in ((i =
                        "service_http" === e.manifest.auth.type ||
                        "oauth" === e.manifest.auth.type
                          ? e.manifest.auth.verification_tokens
                          : {}),
                      r))
                        if (r[s] !== i[s])
                          return (
                            l(
                              'Please add the "'.concat(
                                s,
                                '" token to your manifest file.'
                              )
                            ),
                            [2]
                          );
                      a(e);
                    } else l("Error creating plugin.");
                    return [3, 4];
                  case 2:
                    return o.sent(), l("Error creating plugin."), [3, 4];
                  case 3:
                    return d(!1), [7];
                  case 4:
                    return [2];
                }
              });
            }),
            [t, n, r, a]
          );
        return (0, y.jsx)(eZ.Z, {
          isOpen: !0,
          onClose: i,
          type: "success",
          title: "Add verification token",
          primaryButton: (0, y.jsx)(eP.ZP.Button, {
            title: "Verify tokens",
            color: "primary",
            onClick: m,
            loading: c,
          }),
          secondaryButton: (0, y.jsx)(eP.ZP.Button, {
            title: "I'll add the tokens later",
            color: "neutral",
            onClick: i,
          }),
          children: (0, y.jsxs)(rK, {
            children: [
              (0, y.jsx)(rV.Z, { plugin: t }),
              (0, y.jsx)("div", {
                className: "text-sm",
                children:
                  "Add the following verification tokens to your manifest file:",
              }),
              (0, y.jsx)("pre", {
                className: "text-sm",
                children: JSON.stringify(r, null),
              }),
              s && (0, y.jsx)(rX, { children: s }),
            ],
          }),
        });
      }
      function r6(e) {
        var t = e.plugin,
          n = e.onClickInstall,
          r = e.onClose,
          a = (0, w.useCallback)(
            function () {
              n(t);
            },
            [t, n]
          );
        return (0, y.jsx)(eZ.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "Ready to install",
          primaryButton: (0, y.jsx)(eP.ZP.Button, {
            title: "Install for me",
            color: "primary",
            onClick: a,
          }),
          secondaryButton: (0, y.jsx)(eP.ZP.Button, {
            title: "Install later",
            color: "neutral",
            onClick: r,
          }),
          children: (0, y.jsx)(rK, {
            children: (0, y.jsxs)("div", {
              className: "text-sm",
              children: [
                "Your unverified plugin can now be installed by",
                " ",
                (0, y.jsx)("a", {
                  href: "https://platform.openai.com/docs/plugins/production/can-i-invite-people-to-try-my-plugin",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "text-green-600",
                  children: "up to 15 developers",
                }),
                ". Once ",
                "you're",
                " ready to make your plugin available to everyone, you can",
                " ",
                (0, y.jsx)("a", {
                  href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "text-green-600",
                  children: "submit your plugin for review",
                }),
                ".",
              ],
            }),
          }),
        });
      }
      function r7(e) {
        var t = e.onConfirm,
          n = e.onClose;
        return (0, y.jsx)(eZ.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, y.jsx)(eP.ZP.Button, {
            title: "Continue",
            color: "primary",
            onClick: t,
          }),
          secondaryButton: (0, y.jsx)(eP.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, y.jsx)(rK, {
            children: (0, y.jsx)(rG.I, {
              children: (0, y.jsx)(rG.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding.",
              }),
            }),
          }),
        });
      }
      function r8(e) {
        var t = e.plugin,
          n = e.onInstall,
          r = e.onClose,
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)(t), 2),
          l = s[0],
          u = s[1],
          c = (0, w.useCallback)(function () {
            o(!0);
          }, []);
        return l
          ? i
            ? (0, y.jsx)(ae, { plugin: l, onInstall: n, onClose: r })
            : (0, y.jsx)(r7, { onConfirm: c, onClose: r })
          : (0, y.jsx)(r9, { onLoad: u, onClose: r });
      }
      function r9(e) {
        var t = e.onLoad,
          n = e.onClose,
          r = (0, w.useRef)(null),
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)(), 2),
          l = s[0],
          u = s[1];
        (0, w.useEffect)(function () {
          setTimeout(function () {
            var e;
            null === (e = r.current) || void 0 === e || e.focus();
          }, 50);
        }, []);
        var c = (0, w.useCallback)(
          (0, em._)(function () {
            var e, n, a;
            return (0, ef.Jh)(this, function (i) {
              switch (i.label) {
                case 0:
                  if (
                    !(n =
                      null === (e = r.current) || void 0 === e
                        ? void 0
                        : e.value)
                  )
                    return u("Please provide a URL."), [2];
                  if ((0, tc.NB)(n))
                    return (
                      u(
                        'To add a localhost plugin, please go to "Develop your own plugin."'
                      ),
                      [2]
                    );
                  i.label = 1;
                case 1:
                  return (
                    i.trys.push([1, 3, 4, 5]),
                    o(!0),
                    [4, ea.ZP.getPluginByDomain({ domain: n })]
                  );
                case 2:
                  return (
                    (a = i.sent()) ? t(a) : u("That plugin doesn't exist."),
                    [3, 5]
                  );
                case 3:
                  return i.sent(), u("Couldn't find plugin."), [3, 5];
                case 4:
                  return o(!1), [7];
                case 5:
                  return [2];
              }
            });
          }),
          [t, o, u]
        );
        return (0, y.jsx)(eZ.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: "Install an unverified plugin",
          primaryButton: (0, y.jsx)(eP.ZP.Button, {
            title: "Find plugin",
            color: "primary",
            onClick: c,
            loading: i,
          }),
          secondaryButton: (0, y.jsx)(eP.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, y.jsxs)(rK, {
            children: [
              (0, y.jsx)("div", {
                children:
                  "Please provide the website domain of the unverified plugin you'd like to install.",
              }),
              (0, y.jsx)(r$.Z, {
                ref: r,
                name: "url",
                placeholder: "openai.com",
                onPressEnter: c,
              }),
              l && (0, y.jsx)(rX, { children: l }),
            ],
          }),
        });
      }
      function ae(e) {
        var t = e.plugin,
          n = e.onInstall,
          r = e.onClose,
          a = (0, b._)((0, w.useState)(), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)(!1), 2),
          l = s[0],
          u = s[1],
          c = (0, w.useRef)(null),
          d = (0, rW.U$)({
            onSuccess: function (e) {
              n(e), r();
            },
            onError: function (e) {
              o("Couldn't install plugin.");
            },
          }),
          m = (0, N.hz)(),
          h = t.manifest.name_for_human,
          f = "user_http" === t.manifest.auth.type,
          g = "oauth" === t.manifest.auth.type,
          p = (0, w.useCallback)(
            (0, em._)(function () {
              var e, n;
              return (0, ef.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (!g) return [3, 1];
                    if (m.has("new_plugin_oauth_endpoint"))
                      return (0, rW.Up)(t), [2];
                    return (
                      (e = (0, rW.nT)(t))
                        ? (window.location.href = e)
                        : o("Missing plugin configuration for ".concat(h, ".")),
                      [3, 8]
                    );
                  case 1:
                    if (!f) return [3, 7];
                    if (
                      !(null === (n = c.current) || void 0 === n
                        ? void 0
                        : n.value)
                    )
                      return o("Please provide your credentials."), [2];
                    r.label = 2;
                  case 2:
                    return (
                      r.trys.push([2, 4, 5, 6]),
                      u(!0),
                      [
                        4,
                        ea.ZP.setPluginUserHttpToken({
                          id: t.id,
                          userAccessToken: c.current.value,
                        }),
                      ]
                    );
                  case 3:
                    return r.sent(), d(t.id), [3, 6];
                  case 4:
                    return r.sent(), o("Couldn't install plugin."), [3, 6];
                  case 5:
                    return u(!1), [7];
                  case 6:
                    return [3, 8];
                  case 7:
                    try {
                      u(!0), d(t.id);
                    } catch (e) {
                      o("Couldn't install plugin.");
                    } finally {
                      u(!1);
                    }
                    r.label = 8;
                  case 8:
                    return [2];
                }
              });
            }),
            [m, t, h, g, f, d]
          );
        return (0, y.jsx)(eZ.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, y.jsx)(eP.ZP.Button, {
            title: g ? "Log in with ".concat(h) : "Install plugin",
            color: "primary",
            onClick: p,
            loading: l,
          }),
          secondaryButton: (0, y.jsx)(eP.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: r,
          }),
          children: (0, y.jsxs)(rK, {
            children: [
              (0, y.jsx)(rV.Z, { plugin: t }),
              f &&
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsx)("div", {
                      className: "text-sm",
                      children:
                        t.manifest.auth.instructions ||
                        "Enter your HTTP access token below:",
                    }),
                    (0, y.jsx)("div", {
                      className: "mt-2",
                      children: (0, y.jsx)(r$.Z, {
                        ref: c,
                        type: "password",
                        name: "token",
                        placeholder: "Enter your credentials",
                        autoComplete: "off",
                        onPressEnter: p,
                      }),
                    }),
                  ],
                }),
              g &&
                (0, y.jsxs)("div", {
                  children: [
                    "You will be redirected to",
                    " ",
                    (0, y.jsx)("span", {
                      className: "font-medium",
                      children: h,
                    }),
                    " to log in.",
                  ],
                }),
              i && (0, y.jsx)(rX, { children: i }),
            ],
          }),
        });
      }
      var at = n(95552),
        an = n.n(at),
        ar = n(86433),
        aa = n(76559),
        ai = n(74437);
      function ao(e) {
        var t = e.onClose,
          n = (0, ar.S)().setupMfa;
        return (0, y.jsx)(eZ.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: "Enable two-factor authentication",
          primaryButton: (0, y.jsx)(eP.ZP.Button, {
            title: "Enable two-factor authentication",
            color: "primary",
            onClick: n,
          }),
          secondaryButton: (0, y.jsx)(eP.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, y.jsx)(rK, {
            children: (0, y.jsx)(rG.I, {
              children: (0, y.jsx)(rG.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "This plugin requires you to have two-factor authentication enabled for additional security. Please set up two-factor authentication and try again.",
              }),
            }),
          }),
        });
      }
      function as() {
        var e = (0, q._)([
          "text-sm text-black/70 dark:text-white/70 whitespace-nowrap ",
          "",
        ]);
        return (
          (as = function () {
            return e;
          }),
          e
        );
      }
      function al() {
        var e = (0, q._)([
          "hidden h-4 border-l border-black/30 dark:border-white/30 sm:block",
        ]);
        return (
          (al = function () {
            return e;
          }),
          e
        );
      }
      var au =
        ((h = {}),
        (0, np._)(h, E._G.Mobile, 8),
        (0, np._)(h, E._G.Small, 4),
        (0, np._)(h, E._G.Medium, 4),
        (0, np._)(h, E._G.Large, 6),
        (0, np._)(h, E._G.XLarge, 8),
        h);
      ((o = f || (f = {}))[(o.All = 0)] = "All"),
        (o[(o.Installed = 1)] = "Installed"),
        ((s = g || (g = {})).New = "newly_added"),
        (s.Popular = "most_popular");
      var ac = (0, M.vU)({
          searchPlaceholder: {
            id: "PluginStoreModal.search_placeholder",
            defaultMessage: "Search plugins",
            description: "Placeholder text for the plugin store search bar",
          },
          noSearchResultsTitle: {
            id: "PluginStoreModal.no_search_results",
            defaultMessage: 'No plugins found for "{query}"',
            description:
              "Message shown when no plugins are found for a search query",
          },
          noSearchResultsHint: {
            id: "PluginStoreModal.no_search_results_hint",
            defaultMessage: "Try a different query or category",
            description:
              "Hint shown when no plugins are found for a search query",
          },
        }),
        ad = [
          { id: g.Popular, title: "Popular" },
          { id: g.New, title: "New" },
          { id: f.All, title: "All" },
          { id: f.Installed, title: "Installed" },
        ];
      function am(e) {
        var t,
          n,
          r,
          a,
          i,
          o,
          s,
          l,
          u,
          c,
          d,
          m,
          h,
          p,
          v,
          j,
          k,
          _,
          M,
          T,
          I,
          S,
          P,
          Z,
          R,
          D,
          A,
          F,
          B = e.onInstallWithAuthRequired,
          L = e.onClickInstallDeveloper,
          O = e.onClickDevelop,
          U = e.onClickAbout,
          q = e.onClose,
          z = (0, ee.Z)(),
          Q = (0, N.hz)(),
          H = (0, b._)((0, w.useState)(), 2),
          $ = H[0],
          G = H[1],
          W = (0, b._)((0, w.useState)(""), 2),
          V = W[0],
          J = W[1],
          Y = au[(0, E.dQ)()],
          K =
            ((r = (t = { numItemsPerPage: Y, filter: $, query: V })
              .numItemsPerPage),
            (a = t.filter),
            (i = t.query),
            (o = (0, ev.kP)().session),
            (l = (s = (0, ai.C)()).installedPlugins),
            (u = s.isLoading),
            (d = (c = (0, aa.Z)()).approvedPlugins),
            (m = c.isLoading),
            (h = c.approvedPluginsByCategory),
            (p = (0, w.useMemo)(
              function () {
                var e = [],
                  t = !0,
                  n = !1,
                  r = void 0;
                try {
                  for (
                    var a, i = ad[Symbol.iterator]();
                    !(t = (a = i.next()).done);
                    t = !0
                  ) {
                    var o,
                      s = a.value;
                    Object.values(g).includes(s.id)
                      ? (null === (o = h[s.id]) || void 0 === o
                          ? void 0
                          : o.items.length) > 0 && e.push(s)
                      : s.id === f.Installed
                      ? l.length > 0 && e.push(s)
                      : e.push(s);
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
              },
              [l.length, h]
            )),
            (j = (function (e, t) {
              for (
                var n = (0, eD._)(e), r = an()(t), a = n.length - 1;
                a > 0;
                a--
              ) {
                var i,
                  o = Math.floor(r() * (a + 1));
                (i = [n[o], n[a]]), (n[a] = i[0]), (n[o] = i[1]);
              }
              return (
                ay("retrieval.apps.openai.com", n),
                ay("retrieval-browsing.apps.openai.com", n),
                ay("api.openai.com", n),
                n
              );
            })(
              (v = ah(
                (0, w.useMemo)(
                  function () {
                    if (a === f.All) return d;
                    if (a && Object.values(g).includes(a)) {
                      var e, t;
                      return null !==
                        (t =
                          null === (e = h[a]) || void 0 === e
                            ? void 0
                            : e.items) && void 0 !== t
                        ? t
                        : [];
                    }
                    return [];
                  },
                  [d, a, h]
                ),
                i
              )),
              (null == o
                ? void 0
                : null === (n = o.user) || void 0 === n
                ? void 0
                : n.id) || ""
            )),
            (k = ah(l, i)),
            (_ = []),
            (M = !1),
            a === f.Installed
              ? ((_ = k), (M = u))
              : i
              ? ((_ = v), (M = m))
              : ((_ = j), (M = m)),
            {
              isLoading: M,
              availableFilters: p,
              items: ((I = (T = { items: _, numItemsPerPage: r }).items),
              (S = T.numItemsPerPage),
              (Z = (P = (0, b._)((0, w.useState)(0), 2))[0]),
              (R = P[1]),
              (D = Math.ceil(I.length / S)),
              (A = Z * S),
              (F = {
                page: Z,
                numPages: D,
                pageItems: I.slice(A, A + S),
                goToPage: (0, w.useCallback)(function (e) {
                  R(e);
                }, []),
              })).pageItems,
              pagination: (0, x._)(F, ["pageItems"]),
            }),
          X = K.availableFilters,
          et = K.isLoading,
          en = K.items,
          er = K.pagination,
          ea = er.page,
          ei = er.numPages,
          eo = er.goToPage,
          es = (0, ai.C)().installedPlugins;
        (0, w.useEffect)(
          function () {
            $ === f.Installed && 0 === es.length && (G(X[0].id), eo(0));
          },
          [$, es, eo, X]
        ),
          (0, w.useEffect)(
            function () {
              et || void 0 !== $ || G(X[0].id);
            },
            [et, $]
          );
        var el = (0, b._)((0, w.useState)(!1), 2),
          ec = el[0],
          ed = el[1],
          em = (0, w.useCallback)(
            function (e) {
              J(e), eo(0), G(f.All);
            },
            [eo]
          );
        return ec
          ? (0, y.jsx)(ao, {
              onClose: function () {
                ed(!1);
              },
            })
          : (0, y.jsx)(eZ.Z, {
              isOpen: !0,
              onClose: q,
              size: "custom",
              className:
                "w-full max-w-7xl bg-gray-50 md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px]",
              type: "success",
              title: "Plugin store",
              closeButton: (0, y.jsx)(eP.ZP.CloseButton, { onClose: q }),
              children: (0, y.jsxs)(rK, {
                children: [
                  !et &&
                    X.length > 1 &&
                    (0, y.jsxs)("div", {
                      className: "flex flex-wrap gap-3",
                      children: [
                        X.map(function (e) {
                          return (0, y.jsx)(
                            af,
                            {
                              selected: $ === e.id,
                              onClick: function () {
                                G(e.id), eo(0);
                              },
                              children: e.title,
                            },
                            e.id
                          );
                        }),
                        (0, y.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, y.jsx)("div", {
                              className:
                                "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                              children: (0, y.jsx)(eu.ZP, {
                                icon: C.jRj,
                                className:
                                  "h-5 w-5 text-gray-500 dark:text-gray-400",
                              }),
                            }),
                            (0, y.jsx)(r$.Z, {
                              className: "pl-10",
                              autoFocus: !0,
                              type: "search",
                              placeholder: z.formatMessage(
                                ac.searchPlaceholder
                              ),
                              value: V,
                              onChange: function (e) {
                                return em(e.target.value);
                              },
                              name: "search",
                            }),
                          ],
                        }),
                      ],
                    }),
                  (0, y.jsx)(ag, {
                    plugins: en,
                    numSkeletons: Y,
                    query: V,
                    isLoading: et,
                    onInstallWithAuthRequired: B,
                    onRequestMfa: function () {
                      return ed(!0);
                    },
                  }),
                  (0, y.jsxs)("div", {
                    className:
                      "flex flex-col flex-wrap items-center justify-center gap-6 sm:flex-row md:justify-between",
                    children: [
                      (0, y.jsx)("div", {
                        className:
                          "flex flex-1 justify-start max-lg:justify-center",
                        children:
                          ei > 1 &&
                          (0, y.jsx)(ab, {
                            page: ea,
                            numPages: ei,
                            goToPage: eo,
                          }),
                      }),
                      (0, y.jsxs)("div", {
                        className:
                          "flex flex-col items-center gap-2 sm:flex-row",
                        children: [
                          Q.has("tools3_dev") &&
                            (0, y.jsxs)(y.Fragment, {
                              children: [
                                (0, y.jsx)(aj, {
                                  onClick: L,
                                  children: "Install an unverified plugin",
                                }),
                                (0, y.jsx)(ak, {}),
                                (0, y.jsx)(aj, {
                                  onClick: O,
                                  children: "Develop your own plugin",
                                }),
                                (0, y.jsx)(ak, {}),
                              ],
                            }),
                          (0, y.jsx)(aj, {
                            onClick: U,
                            children: "About plugins",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
      }
      function ah(e, t) {
        return (0, w.useMemo)(
          function () {
            return "" !== t
              ? e
                  .map(function (e) {
                    return {
                      plugin: e,
                      score: (function (e, t) {
                        var n = t.toLowerCase(),
                          r = n.trim().split(/\s+/),
                          a = e.manifest.description_for_human.toLowerCase(),
                          i = e.manifest.name_for_human.toLowerCase(),
                          o = 0;
                        if (i === n || e.domain.toLowerCase() === n) return 1e3;
                        if (i.startsWith(n)) return 500;
                        if (i.includes(n)) return 100;
                        var s = !0,
                          l = !1,
                          u = void 0;
                        try {
                          for (
                            var c, d = r[Symbol.iterator]();
                            !(s = (c = d.next()).done);
                            s = !0
                          ) {
                            var m = c.value;
                            if (i.startsWith(m)) o += 50;
                            else if (i.includes(m)) o += 10;
                            else {
                              if (!a.includes(m)) return 0;
                              o += 1;
                            }
                          }
                        } catch (e) {
                          (l = !0), (u = e);
                        } finally {
                          try {
                            s || null == d.return || d.return();
                          } finally {
                            if (l) throw u;
                          }
                        }
                        return o;
                      })(e, t),
                    };
                  })
                  .filter(function (e) {
                    return e.score > 0;
                  })
                  .sort(function (e, t) {
                    return t.score - e.score;
                  })
                  .map(function (e) {
                    return e.plugin;
                  })
              : e.sort(function (e, t) {
                  return e.manifest.name_for_human.localeCompare(
                    t.manifest.name_for_human
                  );
                });
          },
          [e, t]
        );
      }
      function af(e) {
        var t = e.selected,
          n = e.onClick,
          r = e.children;
        return (0, y.jsx)(el.z, {
          color: t ? "light" : "neutral",
          className: (0, z.Z)(
            "focus:ring-0",
            t && "hover:bg-gray-200",
            !t && "text-black/50"
          ),
          onClick: n,
          children: r,
        });
      }
      function ag(e) {
        var t = e.plugins,
          n = e.numSkeletons,
          r = e.isLoading,
          a = e.onInstallWithAuthRequired,
          i = e.onRequestMfa,
          o = e.query;
        if (0 === t.length && !r && o)
          return (0, y.jsxs)("div", {
            className:
              "flex h-[404px] flex-col items-center justify-center gap-4",
            children: [
              (0, y.jsx)("div", {
                className: "text-lg font-medium",
                children: (0, y.jsx)(
                  _.Z,
                  (0, eh._)((0, v._)({}, ac.noSearchResultsTitle), {
                    values: { query: o },
                  })
                ),
              }),
              (0, y.jsx)("div", {
                className: "text-sm text-black/50",
                children: (0, y.jsx)(_.Z, (0, v._)({}, ac.noSearchResultsHint)),
              }),
            ],
          });
        var s = r
          ? Array(n)
              .fill(0)
              .map(function (e, t) {
                return (0, y.jsx)(av, {}, t);
              })
          : t.map(function (e) {
              return (0,
              y.jsx)(ap, { plugin: e, onInstallWithAuthRequired: a, onRequestMfa: i }, e.id);
            });
        return (0, y.jsx)("div", {
          className:
            "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4",
          children: s,
        });
      }
      function ap(e) {
        var t,
          n,
          r = e.plugin,
          a = e.onInstallWithAuthRequired,
          i = e.onRequestMfa,
          o = (0, b._)((0, w.useState)(!1), 2),
          s = o[0],
          l = o[1],
          u = (0, b._)((0, w.useState)(!1), 2),
          c = u[0],
          d = u[1],
          m = (0, rW.U$)({
            onSuccess: function (e) {
              (0, rH.wu)(e.id);
            },
            onError: function (e) {
              console.error(e),
                nN.m.danger(
                  "Error installing ".concat(r.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              l(!1);
            },
          }),
          h = (0, rW.qo)({
            onSuccess: function () {},
            onError: function (e) {
              console.error(e),
                nN.m.danger(
                  "Error uninstalling ".concat(r.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              d(!1);
            },
          }),
          f = (0, ev.kP)().session,
          g = (0, N.hz)(),
          p = (0, ar.S)().isUsernamePassword,
          v = (0, w.useCallback)(
            function () {
              var e,
                t = r.manifest.auth.type;
              if (
                !("none" === t || "service_http" === t) &&
                !(null == f
                  ? void 0
                  : null === (e = f.user) || void 0 === e
                  ? void 0
                  : e.mfa) &&
                g.has(ei.i) &&
                p
              ) {
                i();
                return;
              }
              if ("oauth" === t) {
                if (g.has("new_plugin_oauth_endpoint")) {
                  (0, rW.Up)(r);
                  return;
                }
                var n = (0, rW.nT)(r);
                n
                  ? (window.location.href = n)
                  : nN.m.danger(
                      "Missing plugin configuration for ".concat(
                        r.manifest.name_for_human,
                        "."
                      )
                    );
              } else "user_http" === t ? a(r) : (l(!0), m(r.id));
            },
            [r, m, a, i, p, f, g]
          ),
          x = (0, w.useCallback)(
            function () {
              d(!0), h(r.id);
            },
            [r, h]
          );
        return (
          (n =
            s || c
              ? (0, y.jsxs)(el.z, {
                  color: "light",
                  className: "bg-green-100 hover:bg-green-100",
                  children: [
                    s ? "Installing" : "Uninstalling",
                    (0, y.jsx)(eR.Z, {}),
                  ],
                })
              : (
                  null === (t = r.user_settings) || void 0 === t
                    ? void 0
                    : t.is_installed
                )
              ? (0, y.jsxs)(el.z, {
                  color: "light",
                  className: "hover:bg-gray-200",
                  onClick: x,
                  children: ["Uninstall", (0, y.jsx)(eu.ZP, { icon: C.$Rx })],
                })
              : (0, y.jsxs)(el.z, {
                  onClick: v,
                  children: ["Install", (0, y.jsx)(eu.ZP, { icon: C.wzc })],
                })),
          (0, y.jsx)(ax, {
            logo: (0, y.jsx)(ng.Z, {
              url: r.manifest.logo_url,
              name: r.manifest.name_for_human,
              size: "100%",
              large: !0,
            }),
            tag: (0, tc.cf)(r)
              ? (0, y.jsx)(tC, {})
              : "approved" !== r.status
              ? (0, y.jsx)(tw, {})
              : void 0,
            title: (0, y.jsx)("div", {
              className: "max-w-full truncate text-lg leading-6",
              children: r.manifest.name_for_human,
            }),
            button: n,
            description: r.manifest.description_for_human,
          })
        );
      }
      function av() {
        return (0, y.jsx)(ax, {
          logo: (0, y.jsx)("div", {
            className: "h-full w-full rounded-[5px] bg-gray-300",
          }),
          title: (0, y.jsx)("div", {
            className: "h-[19px] w-[103px] rounded-[5px] bg-gray-100",
          }),
          button: (0, y.jsx)("div", {
            className: "h-[36px] w-[103px] rounded-[5px] bg-gray-200",
          }),
          description: (0, y.jsxs)("div", {
            className: "flex flex-col gap-1.5",
            children: [
              (0, y.jsx)("div", {
                className: "h-[14px] w-[209px] rounded-[5px] bg-gray-100",
              }),
              (0, y.jsx)("div", {
                className: "h-[14px] w-[218px] rounded-[5px] bg-gray-100",
              }),
              (0, y.jsx)("div", {
                className: "h-[14px] w-[184px] rounded-[5px] bg-gray-100",
              }),
            ],
          }),
        });
      }
      function ax(e) {
        var t = e.logo,
          n = e.tag,
          r = e.title,
          a = e.button,
          i = e.description;
        return (0, y.jsxs)("div", {
          className:
            "flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-white/20 dark:bg-gray-900",
          children: [
            (0, y.jsxs)("div", {
              className: "flex gap-4",
              children: [
                (0, y.jsx)("div", {
                  className: "h-[70px] w-[70px] shrink-0",
                  children: t,
                }),
                (0, y.jsxs)("div", {
                  className:
                    "flex min-w-0 flex-col items-start justify-between",
                  children: [
                    n
                      ? (0, y.jsxs)("div", {
                          className: "flex items-center gap-1.5",
                          children: [n, r],
                        })
                      : r,
                    a,
                  ],
                }),
              ],
            }),
            (0, y.jsx)("div", {
              className:
                "h-[60px] text-sm text-black/70 line-clamp-3 dark:text-white/70",
              children: i,
            }),
          ],
        });
      }
      function ab(e) {
        for (
          var t = function (e) {
              u.push(
                (0, y.jsx)(
                  aj,
                  {
                    role: "button",
                    className: (0, z.Z)(
                      "flex h-5 w-5 items-center justify-center",
                      e === n &&
                        "text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600"
                    ),
                    onClick: function () {
                      return a(e);
                    },
                    children: e + 1,
                  },
                  e
                )
              );
            },
            n = e.page,
            r = e.numPages,
            a = e.goToPage,
            i = n > 0,
            o = n < r - 1,
            s = (0, w.useCallback)(
              function () {
                a(Math.max(n - 1, 0));
              },
              [n, a]
            ),
            l = (0, w.useCallback)(
              function () {
                a(Math.min(n + 1, r - 1));
              },
              [n, r, a]
            ),
            u = [],
            c = 0;
          c < r;
          c++
        )
          t(c);
        return (0, y.jsxs)("div", {
          className:
            "flex flex-wrap gap-2 text-sm text-black/60 dark:text-white/70",
          children: [
            (0, y.jsxs)(aj, {
              role: "button",
              className: (0, z.Z)("flex items-center", !i && "opacity-50"),
              onClick: s,
              $disabled: !i,
              children: [(0, y.jsx)(eu.ZP, { icon: C.YFh }), "Prev"],
            }),
            u,
            (0, y.jsxs)(aj, {
              role: "button",
              className: (0, z.Z)("flex items-center", !o && "opacity-50"),
              onClick: l,
              $disabled: !o,
              children: ["Next", (0, y.jsx)(eu.ZP, { icon: C.Tfp })],
            }),
          ],
        });
      }
      function ay(e, t) {
        var n = t.findIndex(function (t) {
          return t.domain === e;
        });
        if (-1 !== n) {
          var r = t.splice(n, 1)[0];
          t.unshift(r);
        }
      }
      var aj = et.Z.button(as(), function (e) {
          return e.$disabled
            ? "opacity-50 cursor-default"
            : "hover:text-black/50 dark:hover:text-white/50";
        }),
        ak = et.Z.div(al());
      function aw(e) {
        var t = e.allowClose,
          n = e.onConfirm,
          r = e.onClose;
        return (0, y.jsx)(eZ.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "About plugins",
          primaryButton: (0, y.jsx)(eP.ZP.Button, {
            title: "OK",
            color: "primary",
            onClick: n,
          }),
          secondaryButton:
            t &&
            (0, y.jsx)(eP.ZP.Button, {
              title: "Cancel",
              color: "neutral",
              onClick: r,
            }),
          children: (0, y.jsx)(rK, {
            children: (0, y.jsxs)(rG.I, {
              children: [
                (0, y.jsx)(rG.Z, {
                  icon: "\uD83D\uDEA8",
                  children:
                    "Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation.",
                }),
                (0, y.jsx)(rG.Z, {
                  icon: "\uD83C\uDF10",
                  children:
                    "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send your conversation and the country or state you're in to the plugin.",
                }),
                (0, y.jsx)(rG.Z, {
                  icon: "\uD83E\uDDE0",
                  children:
                    "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled.",
                }),
              ],
            }),
          }),
        });
      }
      var aC = "oai/apps/hasSeenPluginsDisclaimer";
      function a_(e) {
        var t = e.onInstall,
          n = e.onClose,
          r = (0, b._)((0, w.useState)(!!ed.m.getItem(aC)), 2),
          a = r[0],
          i = r[1],
          o = (0, b._)((0, w.useState)(!1), 2),
          s = o[0],
          l = o[1],
          u = (0, b._)((0, w.useState)(!1), 2),
          c = u[0],
          d = u[1],
          m = (0, b._)((0, w.useState)(), 2),
          h = m[0],
          f = m[1],
          g = (0, b._)((0, w.useState)(!1), 2),
          p = g[0],
          v = g[1],
          x = (0, w.useCallback)(function () {
            i(!0), l(!1), ed.m.setItem(aC, !0);
          }, []),
          j = (0, w.useCallback)(function (e) {
            f(e), d(!0);
          }, []),
          k = (0, w.useCallback)(function () {
            d(!0);
          }, []),
          C = (0, w.useCallback)(function () {
            v(!0);
          }, []),
          _ = (0, w.useCallback)(function () {
            l(!0);
          }, []),
          M = (0, w.useCallback)(
            function (e) {
              (0, rH.wu)(e.id), n(), t(e);
            },
            [t, n]
          ),
          N = (0, w.useCallback)(
            function () {
              f(void 0), d(!1), n();
            },
            [n]
          ),
          T = (0, w.useCallback)(
            function () {
              v(!1), n();
            },
            [n]
          );
        return !a || s
          ? (0, y.jsx)(aw, { allowClose: !a, onConfirm: x, onClose: n })
          : c
          ? (0, y.jsx)(r8, { plugin: h, onInstall: M, onClose: N })
          : p
          ? (0, y.jsx)(r1, {
              onClickInstall: j,
              onInstallLocalhost: M,
              onClose: T,
            })
          : (0, y.jsx)(am, {
              onInstallWithAuthRequired: j,
              onClickInstallDeveloper: k,
              onClickDevelop: C,
              onClickAbout: _,
              onClose: n,
            });
      }
      function aM() {
        var e = (0, q._)([
          "flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white",
        ]);
        return (
          (aM = function () {
            return e;
          }),
          e
        );
      }
      function aN(e) {
        var t,
          n = e.theme,
          r = void 0 === n ? "default" : n,
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, b._)((0, w.useState)(!1), 2),
          l = s[0],
          u = s[1],
          c = (0, k.useRouter)(),
          d = (0, ai.C)(),
          m = d.installedPlugins,
          h = d.isLoading,
          f = (0, rH.p0)(),
          g = (0, w.useRef)(null);
        (0, w.useEffect)(
          function () {
            if (!h) {
              var e = c.query,
                t = e.loginAip,
                n = e.loginSuccess,
                r = (0, x._)(e, ["loginAip", "loginSuccess"]);
              if (t) {
                var a,
                  i,
                  o = m.find(function (e) {
                    return e.id === t;
                  });
                o && "true" === n
                  ? ((0, rH.wu)(c.query.loginAip),
                    null === (a = g.current) || void 0 === a || a.open())
                  : nN.m.warning(
                      "Couldn't log in with ".concat(
                        null !==
                          (i =
                            null == o ? void 0 : o.manifest.name_for_human) &&
                          void 0 !== i
                          ? i
                          : "plugin",
                        "."
                      )
                    ),
                  c.replace({ pathname: c.pathname, query: r });
              }
            }
          },
          [c, m, h]
        );
        var p = (0, w.useCallback)(function () {
            var e;
            null === (e = g.current) || void 0 === e || e.open();
          }, []),
          v = (0, w.useCallback)(function () {
            o(!1);
          }, []),
          j = (0, b._)((0, w.useState)(f), 2),
          _ = j[0],
          M = j[1],
          N = (0, w.useCallback)(
            function (e) {
              if (e.length > rH.hZ)
                u(!0),
                  setTimeout(function () {
                    u(!1);
                  }, 600);
              else {
                var t = e.filter(function (e) {
                    return !f.find(function (t) {
                      return t.id === e.id;
                    });
                  }),
                  n = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (
                    var i, o = rH.iO[Symbol.iterator]();
                    !(n = (i = o.next()).done);
                    n = !0
                  ) {
                    var s = (function () {
                      var e = i.value,
                        n = f.find(function (t) {
                          return e.includes(t.domain);
                        });
                      if (n) {
                        var r = e.find(function (e) {
                            return e !== n.domain;
                          }),
                          a = t.find(function (e) {
                            return e.domain === r;
                          });
                        if (a)
                          return (
                            nN.m.warning(
                              "You can't enable "
                                .concat(a.manifest.name_for_human, " while ")
                                .concat(
                                  n.manifest.name_for_human,
                                  " is enabled."
                                )
                            ),
                            { v: void 0 }
                          );
                      }
                    })();
                    if ("object" === (0, rg._)(s)) return s.v;
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
                (0, rH.dT)(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              }
            },
            [f]
          ),
          T = (0, w.useCallback)(function (e) {
            var t;
            null === (t = g.current) || void 0 === t || t.close(),
              "store" === e && o(!0);
          }, []),
          I = (0, w.useCallback)(
            function () {
              M(f),
                eB.m.logEvent("chatgpt_plugin_chooser_opened", null, {
                  num_enabled_plugins: "".concat(f.length),
                });
            },
            [f]
          ),
          S = (0, w.useCallback)(
            function () {
              var e = _.filter(function (e) {
                  return !f.find(function (t) {
                    return t.id === e.id;
                  });
                }),
                t = f.filter(function (e) {
                  return !_.find(function (t) {
                    return t.id === e.id;
                  });
                }),
                n = !0,
                r = !1,
                a = void 0;
              try {
                for (
                  var i, o = t[Symbol.iterator]();
                  !(n = (i = o.next()).done);
                  n = !0
                ) {
                  var s = i.value;
                  eB.m.logEvent("chatgpt_plugin_enabled", null, {
                    plugin_id: s.id,
                  });
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
              var l = !0,
                u = !1,
                c = void 0;
              try {
                for (
                  var d, m = e[Symbol.iterator]();
                  !(l = (d = m.next()).done);
                  l = !0
                ) {
                  var h = d.value;
                  eB.m.logEvent("chatgpt_plugin_disabled", null, {
                    plugin_id: h.id,
                  });
                }
              } catch (e) {
                (u = !0), (c = e);
              } finally {
                try {
                  l || null == m.return || m.return();
                } finally {
                  if (u) throw c;
                }
              }
            },
            [f, _]
          ),
          P = m.map(function (e) {
            return {
              value: e,
              title: e.manifest.name_for_human,
              description: e.manifest.description_for_human,
              tags: [],
              customTags: (0, tc.cf)(e)
                ? (0, y.jsx)(tC, {})
                : "approved" !== e.status
                ? (0, y.jsx)(tw, {})
                : void 0,
              imageUrl: e.manifest.logo_url,
            };
          }),
          Z = P.filter(function (e) {
            return f.find(function (t) {
              return t.id === e.value.id;
            });
          }),
          R = "".concat(0 === f.length ? "No" : f.length, " plugins enabled");
        if (f.length > 0 && f.length < 6) {
          var D = f.map(function (e, t) {
            return (0,
            y.jsx)(ng.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 24 }, t);
          });
          R = (0, y.jsx)("div", { className: "flex gap-2", children: D });
        }
        var A = [{ id: "store", label: "Plugin store", icon: C.Rgz }];
        m.length > rH.hZ &&
          (t = (0, y.jsxs)(aT, {
            className: (0, z.Z)(
              "transition-colors duration-300",
              l && "bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800"
            ),
            children: [f.length, "/", rH.hZ, " Enabled"],
          }));
        var E = (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)(aT, { children: "Loading..." }),
            (0, y.jsx)(rR, { showCheckbox: !0, theme: r }),
            (0, y.jsx)(rR, { showCheckbox: !0, theme: r }),
            (0, y.jsx)(rR, { showCheckbox: !0, theme: r }),
            (0, y.jsx)(rR, { showCheckbox: !0, theme: r }),
            (0, y.jsx)(rR, { showCheckbox: !0, theme: r }),
          ],
        });
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)(rT, {
              name: "Plugins",
              selectedOptions: Z,
              selectedLabel: R,
              options: P,
              actions: A,
              onChange: N,
              onAction: T,
              onOpen: I,
              onClose: S,
              dropdownRef: g,
              isLoading: h,
              loadingState: E,
              header: t,
              theme: "mini" === r ? "mini" : "default",
            }),
            i && (0, y.jsx)(a_, { onInstall: p, onClose: v }),
          ],
        });
      }
      var aT = et.Z.div(aM()),
        aI = n(48101);
      function aS(e) {
        var t,
          n = e.currentModelId,
          r = (0, N.hz)(),
          a = (0, tD.fm)(),
          i = (0, tD.B9)(),
          o = void 0 !== n ? i.get(n) : void 0,
          s = (0, eE.Fl)().isPluginsAvailable,
          l = (0, tD.iu)();
        return r.has("model_switcher") && l.size > 1 && o
          ? (0, y.jsxs)("div", {
              className:
                "relative flex flex-col items-stretch justify-center gap-2 sm:items-center",
              children: [
                (0, y.jsx)(rf, { currentModel: o, onModelChange: a }),
                s &&
                  (null == o
                    ? void 0
                    : null === (t = o.enabledTools) || void 0 === t
                    ? void 0
                    : t.includes("tools3")) &&
                  (0, y.jsx)(aN, { theme: "mini" }),
              ],
            })
          : null;
      }
      var aP = function (e) {
          var t,
            n,
            r,
            a = e.currentModelConfig,
            i = e.clientThreadId,
            o = e.isStaticSharedThread,
            s = e.icon,
            l = (0, T.aS)(i),
            u = (0, N.hz)().has(ei.b5),
            c = (0, T.Ro)(i);
          void 0 === c && (c = a);
          var d = c.tags
              .filter(function (e) {
                return rN.includes(e);
              })
              .map(function (e) {
                return rA(e);
              }),
            m = (0, tT.v)();
          if (m.length > 0) {
            var h = m.map(function (e, t) {
              return (0,
              y.jsx)(ng.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 16 }, t);
            });
            r = (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)("div", { children: "Enabled plugins:" }),
                h,
              ],
            });
          }
          var f = (0, k.useRouter)(),
            g =
              o &&
              (null === (t = f.query) || void 0 === t
                ? void 0
                : null === (n = t.shareParams) || void 0 === n
                ? void 0
                : n[1]) === "moderate",
            p = (0, D.tN)(function (e) {
              return e.activeModals.has(D.B.DownloadMessages);
            }),
            v = T.tQ.getThreadCurrentLeafId(i),
            x = (0, T.u9)(i, v),
            b = (0, w.useCallback)(
              function () {
                u && (0, aI.Ub)(i, x);
              },
              [i, u, x]
            );
          return (0, y.jsxs)(y.Fragment, {
            children: [
              u &&
                (0, y.jsx)(eZ.Z, {
                  type: "success",
                  isOpen: p,
                  onClose: function () {
                    D.vm.closeModal(D.B.DownloadMessages);
                  },
                  closeButton: (0, y.jsx)(eP.ZP.CloseButton, {
                    onClose: function () {
                      D.vm.closeModal(D.B.DownloadMessages);
                    },
                  }),
                  primaryButton: (0, y.jsx)(eP.ZP.Button, {
                    onClick: b,
                    children: "Download",
                  }),
                  title: "Download chat debug info",
                  secondaryButton: (0, y.jsx)(eP.ZP.Button, {
                    onClick: function () {
                      D.vm.closeModal(D.B.DownloadMessages);
                    },
                    children: "Cancel",
                  }),
                }),
              (0, y.jsxs)("div", {
                className: (0, z.Z)(
                  "flex flex-wrap items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300",
                  o ? "sticky top-0 z-50" : ""
                ),
                onClick: function (e) {
                  u &&
                    !o &&
                    3 === e.detail &&
                    D.vm.openModal(D.B.DownloadMessages);
                },
                children: [
                  o &&
                    (0, y.jsxs)("div", {
                      className: "flex items-center justify-center gap-1",
                      children: [
                        (0, y.jsx)("span", { children: "Shared Chat" }),
                        (0, y.jsx)("span", {
                          className: "px-1",
                          children: "•",
                        }),
                      ],
                    }),
                  !o && void 0 !== s && (0, y.jsx)(eu.ZP, { icon: s }),
                  "Model: ",
                  a.title,
                  d,
                  r
                    ? (0, y.jsxs)("div", {
                        className: "flex items-center justify-center gap-1",
                        children: [
                          (0, y.jsx)("span", {
                            className: "px-1",
                            children: "•",
                          }),
                          r,
                        ],
                      })
                    : null,
                  g &&
                    (0, y.jsxs)("div", {
                      className: "flex items-center justify-center gap-1",
                      children: [
                        (0, y.jsx)("span", {
                          className: "px-1",
                          children: "•",
                        }),
                        (0, y.jsx)("strong", { children: "MODERATION VIEW" }),
                      ],
                    }),
                  !o &&
                    l &&
                    (0, y.jsxs)("div", {
                      className: "flex items-center justify-center gap-1",
                      children: [
                        (0, y.jsx)("span", {
                          className: "px-1",
                          children: "•",
                        }),
                        (0, y.jsx)("span", { children: "Custom user info" }),
                        (0, y.jsx)(aZ, { clientThreadId: i }),
                      ],
                    }),
                ],
              }),
            ],
          });
        },
        aZ = function (e) {
          var t = e.clientThreadId,
            n = (0, T.Qi)(t),
            r = null != n ? (0, eO.RR)(n) : "";
          return (0, y.jsxs)(ec.fC, {
            children: [
              (0, y.jsx)(ec.xz, {
                asChild: !0,
                children: (0, y.jsxs)("div", {
                  className: "cursor-pointer pt-0.5",
                  children: [
                    (0, y.jsx)(eu.ZP, {
                      className: "text-gray-500 dark:text-gray-300",
                      strokeWidth: 0,
                      icon: ep.frK,
                    }),
                    (0, y.jsx)(nf.T, { children: "Custom user info details" }),
                  ],
                }),
              }),
              (0, y.jsx)(ec.h_, {
                children: (0, y.jsx)(ec.VY, {
                  side: "bottom",
                  sideOffset: 8,
                  className:
                    "relative max-w-md animate-slideDownAndFade select-none rounded-xl border-gray-100 bg-white p-4 text-sm text-gray-600 shadow-xs dark:bg-gray-900 dark:text-white",
                  onOpenAutoFocus: function (e) {
                    e.preventDefault();
                  },
                  onCloseAutoFocus: function (e) {
                    e.preventDefault();
                  },
                  children: r,
                }),
              }),
            ],
          });
        };
      function aR() {
        var e = (0, q._)(["flex flex-col text-sm dark:bg-gray-800"]);
        return (
          (aR = function () {
            return e;
          }),
          e
        );
      }
      function aD() {
        var e = (0, q._)(["h-32 md:h-48 flex-shrink-0"]);
        return (
          (aD = function () {
            return e;
          }),
          e
        );
      }
      function aA() {
        var e = (0, q._)([
          "cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
        ]);
        return (
          (aA = function () {
            return e;
          }),
          e
        );
      }
      function aE() {
        var e = (0, q._)([
          "px-2 relative w-full flex flex-col h-full py-2 md:py-6",
        ]);
        return (
          (aE = function () {
            return e;
          }),
          e
        );
      }
      function aF() {
        var e = (0, q._)([
          "text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow",
        ]);
        return (
          (aF = function () {
            return e;
          }),
          e
        );
      }
      var aB = (0, M.vU)({
        codeInterpreterSupportDisclaimer: {
          id: "sharedConversation.codeInterpreterSupportDisclaimer",
          defaultMessage:
            "This chat contains files or images produced by Code Interpreter which are not yet visible in Shared Chats.",
          description:
            "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links",
        },
        userContextCustomProfileDisclaimer: {
          id: "sharedConversation.userContextCustomProfileDisclaimer",
          defaultMessage:
            "The creator of this chat is using a custom profile, which can meaningfully change how the model responds.",
          description:
            "Disclaimer about our lack of support for custom profiles with shared links",
        },
        userContextCustomProfileAndCodeInterpreterSupportDisclaimer: {
          id: "sharedConversation.userContextCustomProfileAndCodeInterpreterSupportDisclaimer",
          defaultMessage:
            "The creator of this chat is using a custom profile, which can meaningfully change how the model responds. The chat contains files or images produced by Code Interpreter which are not yet visible in Shared Chats.",
          description:
            "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links and not sharing custom profile data",
        },
      });
      function aL(e) {
        var t = e.clientThreadId,
          n = (0, T.qA)(t),
          r = (0, T.je)(t),
          a = (0, T.qN)(function (e) {
            return T.iN.getThreadCreateTime(t, e);
          }),
          i = (0, T.JI)(t),
          o = (0, w.useMemo)(
            function () {
              return eS(i);
            },
            [i]
          ),
          s = (0, T.aS)(t);
        return (0, y.jsxs)("div", {
          className:
            "mb-1 border-b border-gray-100 pt-3 sm:mb-2 sm:pb-10 sm:pt-8",
          children: [
            (0, y.jsx)("h1", {
              className:
                "max-w-md text-3xl font-semibold leading-tight text-gray-700 dark:text-gray-100 sm:text-4xl",
              children: n,
            }),
            (null != r || null != a) &&
              (0, y.jsxs)("div", {
                className: "pt-3 text-base text-gray-400 sm:pt-4",
                children: [
                  null != r && (0, y.jsx)("span", { children: r }),
                  null != r &&
                    null != a &&
                    (0, y.jsx)("span", { className: "px-2", children: "•" }),
                  null != a &&
                    (0, y.jsx)(M.Ji, {
                      value: a,
                      month: "long",
                      year: "numeric",
                      day: "numeric",
                    }),
                ],
              }),
            (0, y.jsx)(aO, {
              shouldShowCodeInterpreterDisclaimer: o,
              shouldShowUserContextCustomProfileDisclaimer: s,
            }),
          ],
        });
      }
      var aO = function (e) {
        var t = e.shouldShowCodeInterpreterDisclaimer,
          n = e.shouldShowUserContextCustomProfileDisclaimer;
        return t && n
          ? (0, y.jsx)(a6, {
              children: (0, y.jsx)(
                _.Z,
                (0, v._)(
                  {},
                  aB.userContextCustomProfileAndCodeInterpreterSupportDisclaimer
                )
              ),
            })
          : (0, y.jsxs)(y.Fragment, {
              children: [
                t &&
                  (0, y.jsx)(a6, {
                    children: (0, y.jsx)(
                      _.Z,
                      (0, v._)({}, aB.codeInterpreterSupportDisclaimer)
                    ),
                  }),
                n &&
                  (0, y.jsx)(a6, {
                    children: (0, y.jsx)(
                      _.Z,
                      (0, v._)({}, aB.userContextCustomProfileDisclaimer)
                    ),
                  }),
              ],
            });
      };
      function aU(e) {
        var t,
          n = e.onChangeItemInView,
          r = e.onRequestMoreCompletions,
          a = e.onUpdateNode,
          i = e.onChangeRating,
          o = e.onDeleteNode,
          s = e.onRequestCompletion,
          l = e.onHandleChangeVariantFeedbackInlineComparisonRating,
          u = e.clientThreadId,
          c = e.conversationLeafId,
          d = e.isNewThread,
          m = e.activeRequests,
          h = e.currentThreadModel,
          f = e.isStaticSharedThread,
          g = e.inlineEmbeddedDisplay,
          p = e.initiallyHighlightedMessageId,
          v = e.promptTextareaRef,
          x = (0, eA.useScrollToBottom)(),
          j = (0, b._)((0, eA.useSticky)(), 1)[0],
          k = (0, N.hz)(),
          _ = (0, eE.Fl)().isBetaFeaturesUiEnabled,
          M = (0, T.Kt)(u),
          I = (0, N.Xj)().isLoading,
          S = (0, tD.iu)(),
          P = (0, tD.ZL)(),
          Z = (0, tD.Xy)(h, u),
          R = (0, D.tN)(function (e) {
            return e.isDesktopNavCollapsed;
          }),
          A = k.has("model_switcher") && S.size > 1,
          E = d && !I && A,
          F = (0, b._)((0, w.useState)(!1), 2),
          B = F[0],
          L = F[1],
          O = (0, nD.Ri)(Z.id),
          U = (0, T.U0)(u, c);
        (0, w.useEffect)(
          function () {
            if (M) {
              var e = setTimeout(function () {
                L(!0);
              }, 1e3);
              return function () {
                clearTimeout(e);
              };
            }
            L(!1);
          },
          [M]
        );
        var q = k.has(ei.FZ),
          Q =
            !_ && Z.tags.includes(tD.S.GPT_4)
              ? "black"
              : null !== (t = null == O ? void 0 : O.backgroundColor) &&
                void 0 !== t
              ? t
              : void 0,
          H = (0, eD._)(Array(U).keys()).map(function (e) {
            return (0,
            y.jsx)(tW, { isFinalTurn: e === U - 1, turnIndex: e, clientThreadId: u, conversationLeafId: c, onChangeItemInView: n, onChangeRating: i, onRequestMoreCompletions: r, onDeleteNode: o, onRequestCompletion: s, onUpdateNode: a, onHandleChangeVariantFeedbackInlineComparisonRating: l, activeRequests: m, currentModelId: Z.id, isStaticSharedThread: f, showInlineEmbeddedDisplay: g, initiallyHighlightedMessageId: p, avatarColor: Q }, e);
          });
        return (0, y.jsxs)(y.Fragment, {
          children: [
            E &&
              (0, y.jsxs)(aH, {
                children: [
                  (0, y.jsx)(aS, { currentModelId: Z.id }),
                  (0, y.jsxs)(a$, {
                    children: ["ChatGPT", (0, y.jsx)(es.IS, {})],
                  }),
                ],
              }),
            (0, y.jsxs)(aq, {
              children: [
                d && !I && !P && !A && (0, y.jsx)(nh, { promptTextareaRef: v }),
                B && (0, y.jsx)(eR.Z, { className: "mt-4 self-center" }),
                !d &&
                  (f || (!I && A)) &&
                  !g &&
                  (0, y.jsx)(aP, {
                    icon: _ ? (null == O ? void 0 : O.icon) : void 0,
                    currentModelConfig: Z,
                    clientThreadId: u,
                    isStaticSharedThread: f,
                  }),
                q
                  ? H.length > 0 &&
                    (0, y.jsx)("div", {
                      className: (0, z.Z)(
                        "flex flex-col items-center",
                        R ? "sm:px-14" : "sm:px-4"
                      ),
                      children: (0, y.jsxs)("div", {
                        className: "w-full max-w-[44rem] pt-4",
                        children: [
                          f && !g && (0, y.jsx)(aL, { clientThreadId: u }),
                          H,
                        ],
                      }),
                    })
                  : (0, y.jsxs)(y.Fragment, {
                      children: [
                        f &&
                          !g &&
                          (0, y.jsx)("div", {
                            className:
                              "mx-auto w-full p-4 md:max-w-2xl lg:max-w-xl lg:px-0 xl:max-w-3xl",
                            children: (0, y.jsx)(aL, { clientThreadId: u }),
                          }),
                        H,
                      ],
                    }),
                !E && !g && (0, y.jsx)(az, {}),
              ],
            }),
            !j &&
              !g &&
              (0, y.jsx)(aQ, {
                onClick: x,
                children: (0, y.jsx)(eu.ZP, { icon: C.tv1, className: "m-1" }),
              }),
          ],
        });
      }
      var aq = et.Z.div(aR()),
        az = et.Z.div(aD()),
        aQ = et.Z.button(aA()),
        aH = et.Z.div(aE()),
        a$ = et.Z.h1(aF());
      function aG() {
        var e = (0, q._)([
          "relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch",
        ]);
        return (
          (aG = function () {
            return e;
          }),
          e
        );
      }
      function aW() {
        var e = (0, q._)(["grow flex-1 overflow-hidden"]);
        return (
          (aW = function () {
            return e;
          }),
          e
        );
      }
      function aV() {
        var e = (0, q._)([
          "w-full mb-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden bg-gray-50",
        ]);
        return (
          (aV = function () {
            return e;
          }),
          e
        );
      }
      function aJ() {
        var e = (0, q._)([
          "flex p-4 bg-white dark:bg-gray-800/90 border-t border-gray-100 dark:border-gray-700 rounded-b-lg w-full h-full\n",
          "\n",
        ]);
        return (
          (aJ = function () {
            return e;
          }),
          e
        );
      }
      function aY() {
        var e = (0, q._)([
          "flex w-full items-center justify-left gap-2 min-h-[1.5rem]",
        ]);
        return (
          (aY = function () {
            return e;
          }),
          e
        );
      }
      function aK() {
        var e = (0, q._)([
          "border-none focus:ring-gray-200 dark:focus:ring-gray-600 bg-transparent py-0.5 -my-0.5 pl-1 -ml-1 w-full",
        ]);
        return (
          (aK = function () {
            return e;
          }),
          e
        );
      }
      function aX() {
        var e = (0, q._)(["flex-none h-full mt-auto mb-auto"]);
        return (
          (aX = function () {
            return e;
          }),
          e
        );
      }
      var a0 = (0, M.vU)({
        sharingModalTitle: {
          id: "thread.sharingModal.title",
          defaultMessage: "Share Link to Chat",
          description:
            "Title of sharing feature in the title of the sharing modal",
        },
        sharingModalDescription: {
          id: "sharingModal.description",
          defaultMessage:
            "Messages you send after creating your link won't be shared. Anyone with the URL will be able to view the shared chat.",
          description:
            "Description of sharing feature in the first paragraph of the sharing modal",
        },
        existingShareDescription: {
          id: "sharingModal.exisitingDescription",
          defaultMessage:
            "You have shared this chat <existingLink>before</existingLink>. If you want to update the shared chat content, <deleteLink>delete this link</deleteLink> and create a new shared link.",
          description:
            "Description in sharing modal when viewing an existing link",
        },
        sharingModalMoreInfo: {
          id: "thread.sharingModal.moreInfo",
          defaultMessage: "More Info",
          description:
            "Link to a helpdesk article with more information about the sharing modal",
        },
        moderationBlocked: {
          id: "sharingModal.moderationBlocked",
          defaultMessage: "This shared link has been disabled by moderation.",
          description:
            "Error message in sharing modal when shared link has been moderated.",
        },
        confirmCloseWithChanges: {
          id: "thread.sharingModal.confirmCloseWithChanges",
          defaultMessage: "You have unsaved changes. Do you want to continue?",
          description:
            "Confirmation message when closing share modal with changes",
        },
        confirmDeleteLink: {
          id: "sharingModal.confirmDeleteLink",
          defaultMessage: "Are you sure you want to delete the share link?",
          description: "Confirmation message when deleting share link",
        },
        codeInterpreterSupportDisclaimer: {
          id: "sharingModal.codeInterpreterSupportDisclaimer",
          defaultMessage:
            "Recipients won’t be able to view Code Interpreter images or download files.",
          description:
            "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links",
        },
        userContextCustomProfileDisclaimer: {
          id: "sharingModal.userContextCustomProfileDisclaimer",
          defaultMessage:
            "Your custom profile data won’t be shared with recipients.",
          description:
            "Disclaimer about our policy to not copy over custom profile data which could have PII",
        },
        userContextCustomProfileAndCodeInterpreterSupportDisclaimer: {
          id: "sharingModal.userContextCustomProfileAndCodeInterpreterSupportDisclaimer",
          defaultMessage:
            "Recipients won’t be able to view images, download files, or custom profiles.",
          description:
            "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links and not sharing custom profile data",
        },
      });
      function a1(e) {
        var t = e.serverThreadId,
          n = e.activeRequests,
          r = (0, T.oq)(t),
          a = (0, b._)(
            (0, w.useState)(function () {
              return (0, ex.Z)(function (e, t) {
                return {
                  title: void 0,
                  highlightedMessageId: void 0,
                  initiallyHighlightedMessageId: void 0,
                  currentNodeId: void 0,
                  shareLinkId: void 0,
                  shareLinkUrl: void 0,
                  isPublic: !1,
                  isDeleted: !1,
                  isAnonymous: !0,
                  linkAlreadyExisted: !1,
                  linkError: void 0,
                  moderationState: void 0,
                };
              });
            }),
            1
          )[0],
          i = 0 === n.size && "root" !== r,
          o = (0, w.useRef)(!1);
        return (
          (0, w.useEffect)(
            function () {
              if (i && !o.current) {
                o.current = !0;
                var e = T.tQ.getThreadCurrentLeafId(t),
                  n = T.tQ.getTree(t).getMessageId(e);
                ea.ZP.createShareLink({
                  current_node_id: n,
                  conversation_id: t,
                  is_anonymous: !0,
                })
                  .then(function (e) {
                    a.setState({
                      shareLinkId: e.share_id,
                      shareLinkUrl: e.share_url,
                      isPublic: e.is_public,
                      isDeleted: !e.is_visible,
                      title: e.title,
                      highlightedMessageId: e.highlighted_message_id,
                      initiallyHighlightedMessageId: e.highlighted_message_id,
                      currentNodeId: e.current_node_id,
                      linkAlreadyExisted: e.already_exists,
                      isAnonymous: e.is_anonymous,
                      moderationState: e.moderation_state,
                    });
                  })
                  .catch(function (e) {
                    e instanceof ej.Q0 && "string" == typeof e.message
                      ? a.setState({ linkError: e.message })
                      : (nN.m.danger(
                          "Failed to copy link to clipboard - could not create link"
                        ),
                        D.vm.closeSharingModal());
                  });
              }
            },
            [i]
          ),
          (0, y.jsx)(eb.Provider, {
            value: a,
            children: (0, y.jsx)(a3, (0, v._)({}, e)),
          })
        );
      }
      function a2(e) {
        return (
          !0 === e.has_been_auto_blocked ||
          !0 === e.has_been_auto_moderated ||
          !0 === e.has_been_blocked
        );
      }
      var a5 =
        "https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq";
      function a3(e) {
        var t,
          n,
          r,
          a,
          i,
          o = e.serverThreadId,
          s = e.activeRequests,
          l = e.currentThreadModel,
          u = function () {
            (!J ||
              window.confirm(c.formatMessage(a0.confirmCloseWithChanges))) &&
              D.vm.closeSharingModal();
          },
          c = (0, ee.Z)(),
          d = (0, w.useRef)(null),
          m = (0, b._)((0, w.useState)(!1), 2),
          h = m[0],
          f = m[1],
          g = (0, b._)((0, w.useState)(!1), 2),
          p = g[0],
          x = g[1],
          j = (0, b._)((0, w.useState)(!1), 2),
          k = j[0],
          N = j[1],
          I = (0, w.useContext)(eb),
          S = ey(function (e) {
            return e.title;
          }),
          P = ey(function (e) {
            return e.shareLinkId;
          }),
          Z = ey(function (e) {
            return e.shareLinkUrl;
          }),
          R = ey(function (e) {
            return e.isAnonymous;
          }),
          A = ey(function (e) {
            return e.initiallyHighlightedMessageId;
          }),
          E = ey(function (e) {
            return e.currentNodeId;
          }),
          F = ey(function (e) {
            return e.isPublic;
          }),
          B =
            ey(function (e) {
              return e.linkAlreadyExisted;
            }) && F,
          L = ey(function (e) {
            return e.linkError;
          }),
          O = ey(function (e) {
            return e.moderationState;
          }),
          U = null != O && a2(O),
          q = (0, w.useRef)(),
          Q = (0, w.useRef)();
        (0, w.useEffect)(
          function () {
            B && ((q.current = S), (Q.current = R));
          },
          [B]
        );
        var H = (0, ev.kP)().session,
          $ = (0, T.JI)(o, E),
          G = (0, w.useMemo)(
            function () {
              return eS($);
            },
            [$]
          ),
          W = (0, T.aS)(o),
          V =
            ((t = (0, em._)(function (e, t) {
              var n, r, a, i, o, s, l;
              return (0, ef.Jh)(this, function (u) {
                switch (u.label) {
                  case 0:
                    x(!0),
                      (r = (n = I.getState()).highlightedMessageId),
                      (a = n.title),
                      (i = n.isDeleted),
                      (o = n.isAnonymous);
                    try {
                      navigator.clipboard.writeText(t);
                    } catch (e) {
                      return (
                        console.warn("Could not copy link to clipboard: " + e),
                        nN.m.warning("Failed to copy link to clipboard"),
                        x(!1),
                        [2]
                      );
                    }
                    u.label = 1;
                  case 1:
                    return (
                      u.trys.push([1, 3, 4, 5]),
                      [
                        4,
                        ea.ZP.updateShareLink({
                          share_id: e,
                          highlighted_message_id: r,
                          title: null != a ? a : void 0,
                          is_public: !i,
                          is_visible: !i,
                          is_anonymous: o,
                        }),
                      ]
                    );
                  case 2:
                    if (a2((s = u.sent().moderation_state)))
                      return I.setState({ moderationState: s }), [2];
                    return (
                      I.setState({ isPublic: !0, moderationState: s }),
                      N(!0),
                      setTimeout(function () {
                        D.vm.closeSharingModal(),
                          nN.m.success(
                            "Copied shared conversation URL to clipboard!"
                          );
                      }, 500),
                      [3, 5]
                    );
                  case 3:
                    return (
                      (l = u.sent()) instanceof ej.Q0 &&
                        "string" == typeof l.message &&
                        I.setState({ linkError: l.message }),
                      [3, 5]
                    );
                  case 4:
                    return x(!1), [7];
                  case 5:
                    return [2];
                }
              });
            })),
            function (e, n) {
              return t.apply(this, arguments);
            }),
          J = B && (S !== q.current || R !== Q.current),
          Y = (0, y.jsxs)(eP.ZP.Button, {
            onClick: function () {
              return V(P, Z);
            },
            color: "primary",
            disabled: p || k || null == P || null == Z || null != L || U,
            children: [
              k
                ? (0, y.jsx)(eu.ZP, { icon: C.LSm })
                : p
                ? (0, y.jsx)(eR.Z, {})
                : (0, y.jsx)(eu.ZP, { icon: C.XKb }),
              k
                ? "Copied!"
                : p
                ? "Copying..."
                : J
                ? "Update and Copy Link"
                : "Copy Link",
            ],
          }),
          K = (0, w.useCallback)(
            function (e) {
              var t;
              null == e || e.preventDefault(),
                I.setState({
                  title:
                    null === (t = d.current) || void 0 === t ? void 0 : t.value,
                }),
                f(!1);
            },
            [I]
          ),
          et = (0, w.useCallback)(
            function (e) {
              "Enter" === e.key && K();
            },
            [K]
          ),
          en =
            ((n = (0, em._)(function () {
              return (0, ef.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      ea.ZP.deleteShareLink({
                        share_id: I.getState().shareLinkId,
                      })
                        .catch(function (e) {
                          nN.m.danger("Failed to delete shared link");
                        })
                        .then(function () {
                          D.vm.closeSharingModal();
                        }),
                    ];
                  case 1:
                    return e.sent(), [2];
                }
              });
            })),
            function () {
              return n.apply(this, arguments);
            }),
          er =
            ((r = (0, em._)(function () {
              return (0, ef.Jh)(this, function (e) {
                return (
                  I.setState({ isAnonymous: !0 }),
                  T.qN.setState(function (e) {
                    e.threads[o].initialThreadData.authorName = void 0;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return r.apply(this, arguments);
            }),
          ei =
            ((a = (0, em._)(function () {
              return (0, ef.Jh)(this, function (e) {
                return (
                  I.setState({ isAnonymous: !1 }),
                  T.qN.setState(function (e) {
                    var t;
                    e.threads[o].initialThreadData.authorName =
                      null == H
                        ? void 0
                        : null === (t = H.user) || void 0 === t
                        ? void 0
                        : t.name;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return a.apply(this, arguments);
            }),
          eo = (0, y.jsxs)(ie, {
            $active: h,
            children: [
              (0, y.jsxs)("div", {
                className: "flex-1 pr-1",
                children: [
                  void 0 !== S
                    ? h
                      ? (0, y.jsx)(ir, {
                          ref: d,
                          type: "text",
                          defaultValue: null != S ? S : "",
                          autoFocus: !0,
                          onKeyDown: et,
                          onBlur: K,
                        })
                      : (0, y.jsxs)(it, {
                          onDoubleClick: function () {
                            return f(!0);
                          },
                          children: [
                            S,
                            h || null == S || B
                              ? null
                              : (0, y.jsx)("button", {
                                  onClick: function () {
                                    return f(!0);
                                  },
                                  className: "text-gray-500",
                                  children: (0, y.jsx)(eu.ZP, {
                                    icon: C.Nte,
                                    size: "small",
                                  }),
                                }),
                          ],
                        })
                    : (0, y.jsx)("div", { className: "h-6" }),
                  (0, y.jsxs)("div", {
                    className: "mt-1 text-gray-500",
                    children: [
                      !R &&
                        (0, y.jsxs)("span", {
                          children: [
                            null == H
                              ? void 0
                              : null === (i = H.user) || void 0 === i
                              ? void 0
                              : i.name,
                            " \xb7 ",
                          ],
                        }),
                      (0, y.jsx)(M.Ji, {
                        value: new Date(),
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }),
                    ],
                  }),
                ],
              }),
              (0, y.jsx)(ia, {
                children: (0, y.jsxs)(ec.fC, {
                  children: [
                    (0, y.jsx)(ec.xz, {
                      asChild: !0,
                      children: (0, y.jsx)(el.z, {
                        color: "neutral",
                        className: "mb-auto mt-auto",
                        children: (0, y.jsx)(ep.JEI, {}),
                      }),
                    }),
                    (0, y.jsx)(ec.h_, {
                      children: (0, y.jsxs)(ec.VY, {
                        className:
                          "PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90",
                        side: "top",
                        align: "end",
                        children: [
                          R &&
                            (0, y.jsx)(el.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: ei,
                              children: (0, y.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, y.jsx)(eu.ZP, {
                                    icon: C.fzv,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, y.jsx)("div", {
                                    children: "Share your name",
                                  }),
                                ],
                              }),
                            }),
                          !R &&
                            (0, y.jsx)(el.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: er,
                              children: (0, y.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, y.jsx)(eu.ZP, {
                                    icon: C.fzv,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, y.jsx)("div", {
                                    children: "Share anonymously",
                                  }),
                                ],
                              }),
                            }),
                          B &&
                            (0, y.jsx)(el.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: en,
                              children: (0, y.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, y.jsx)(eu.ZP, {
                                    icon: C.Ybf,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, y.jsx)("div", {
                                    children: "Delete Link",
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          es = L;
        return (
          null == es &&
            ((null == O ? void 0 : O.has_been_auto_blocked) ||
              (null == O ? void 0 : O.has_been_auto_moderated) ||
              (null == O ? void 0 : O.has_been_blocked)) &&
            (es = (0, y.jsx)(_.Z, (0, v._)({}, a0.moderationBlocked))),
          (0, y.jsxs)(eZ.Z, {
            isOpen: !0,
            onClose: function () {
              u();
            },
            size: "custom",
            className: "max-w-[550px]",
            type: "success",
            title: c.formatMessage(a0.sharingModalTitle),
            closeButton: (0, y.jsx)(eP.ZP.CloseButton, {
              onClose: function () {
                u();
              },
            }),
            children: [
              null != es &&
                (0, y.jsx)("div", {
                  className: "mb-4 rounded-md bg-red-500 p-4 text-white",
                  children: es,
                }),
              (0, y.jsx)("div", {
                className: (0, z.Z)("w-full"),
                children: (0, y.jsx)("p", {
                  className: (0, z.Z)("mb-6 text-gray-500"),
                  children: B
                    ? (0, y.jsx)(
                        _.Z,
                        (0, eh._)((0, v._)({}, a0.existingShareDescription), {
                          values: {
                            existingLink: function (e) {
                              return (0, y.jsx)("a", {
                                href: Z,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "underline",
                                children: e,
                              });
                            },
                            deleteLink: function (e) {
                              return (0, y.jsx)("a", {
                                href: "#",
                                onClick: function (e) {
                                  e.preventDefault(),
                                    window.confirm(
                                      c.formatMessage(a0.confirmDeleteLink)
                                    ) && en();
                                },
                                className: "underline",
                                children: e,
                              });
                            },
                          },
                        })
                      )
                    : (0, y.jsx)(_.Z, (0, v._)({}, a0.sharingModalDescription)),
                }),
              }),
              (0, y.jsx)(a4, {
                shouldShowCodeInterpreterDisclaimer: G,
                shouldShowUserContextCustomProfileDisclaimer: W,
              }),
              (0, y.jsx)(a9, {
                children: (0, y.jsx)("div", {
                  className: "flex h-full max-w-full flex-1 flex-col",
                  children: (0, y.jsx)(a7, {
                    children: (0, y.jsxs)(a8, {
                      children: [
                        (0, y.jsx)(eg.f, {
                          ratio: 1.9,
                          className: "overflow-auto bg-white dark:bg-gray-800",
                          children:
                            null != E
                              ? (0, y.jsx)(aU, {
                                  onChangeItemInView: X(),
                                  onRequestMoreCompletions: X(),
                                  onUpdateNode: X(),
                                  onChangeRating: X(),
                                  onDeleteNode: X(),
                                  onRequestCompletion: X(),
                                  onHandleChangeVariantFeedbackInlineComparisonRating:
                                    X(),
                                  clientThreadId: o,
                                  conversationLeafId: E,
                                  activeRequests: s,
                                  currentThreadModel: l,
                                  inlineEmbeddedDisplay: !0,
                                  isStaticSharedThread: !0,
                                  isNewThread: !1,
                                  initiallyHighlightedMessageId: A,
                                })
                              : (0, y.jsx)("div", {
                                  className:
                                    "flex h-full items-center justify-center",
                                  children: (0, y.jsx)(eR.Z, {
                                    className:
                                      "text-gray-400 dark:text-gray-500",
                                  }),
                                }),
                        }),
                        eo,
                      ],
                    }),
                  }),
                }),
              }),
              (0, y.jsx)(eP.ZP.Actions, {
                isSpacedBetween: !0,
                primaryButton: Y,
                secondaryButton: (0, y.jsx)("div", {
                  children: (0, y.jsxs)("a", {
                    href: a5,
                    className:
                      "flex items-center gap-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                    target: "_blank",
                    rel: "noreferrer",
                    children: [
                      c.formatMessage(a0.sharingModalMoreInfo),
                      (0, y.jsx)(eu.ZP, { icon: C.AlO }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
      var a4 = function (e) {
          var t = e.shouldShowCodeInterpreterDisclaimer,
            n = e.shouldShowUserContextCustomProfileDisclaimer;
          return t && n
            ? (0, y.jsx)(a6, {
                children: (0, y.jsx)(
                  _.Z,
                  (0, v._)(
                    {},
                    a0.userContextCustomProfileAndCodeInterpreterSupportDisclaimer
                  )
                ),
              })
            : (0, y.jsxs)(y.Fragment, {
                children: [
                  t &&
                    (0, y.jsx)(a6, {
                      children: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, a0.codeInterpreterSupportDisclaimer)
                      ),
                    }),
                  n &&
                    (0, y.jsx)(a6, {
                      children: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, a0.userContextCustomProfileDisclaimer)
                      ),
                    }),
                ],
              });
        },
        a6 = function (e) {
          var t = e.children;
          return (0, y.jsxs)("div", {
            className:
              "mb-4 flex items-start justify-start gap-2.5 rounded-md bg-yellow-300 p-4 text-[#756B5C]",
            children: [
              (0, y.jsx)(eu.ZP, {
                icon: C.H33,
                size: "small",
                className: "mt-1 flex-shrink-0",
              }),
              t,
            ],
          });
        },
        a7 = et.Z.main(aG()),
        a8 = et.Z.div(aW()),
        a9 = et.Z.div(aV()),
        ie = et.Z.div(aJ(), function (e) {
          return e.$active, "";
        }),
        it = et.Z.div(aY()),
        ir = et.Z.input(aK()),
        ia = et.Z.div(aX());
      function ii() {
        var e = (0, q._)([
          "bg-green-500 text-white py-0.5 px-1.5 text-[10px] leading-normal font-semibold rounded uppercase",
        ]);
        return (
          (ii = function () {
            return e;
          }),
          e
        );
      }
      var io = (0, M.vU)({
          learnMore: {
            id: "sharedConversationAnnouncement.learnMore",
            defaultMessage: "Learn more",
            description: "Link text to shared links help page",
          },
          shareConversations: {
            id: "sharedConversationAnnouncement.shareConversations",
            defaultMessage: "Share a link to this chat",
            description:
              "Text displayed in tooltip announcing shared conversations",
          },
          new: {
            id: "sharedConversationAnnouncement.new",
            defaultMessage: "New",
            description: "New badge text",
          },
        }),
        is = "oai/apps/announcement/sharedConversations";
      function il(e) {
        var t = e.children,
          n = function () {
            var e = Date.now();
            ed.m.setItem(is, e), o(e);
          },
          r = (0, E.w$)(),
          a = (0, b._)(
            (0, w.useState)(function () {
              var e = ed.m.getItem(is);
              return "number" == typeof e && e;
            }),
            2
          ),
          i = a[0],
          o = a[1],
          s = (0, w.useRef)(null),
          l = (0, ee.Z)();
        return (0, y.jsxs)(ec.fC, {
          open: r && !1 === i,
          onOpenChange: function (e) {
            e || n();
          },
          children: [
            (0, y.jsx)(ec.xz, { asChild: !0, ref: s, children: t }),
            (0, y.jsx)(ec.h_, {
              children: (0, y.jsxs)(ec.VY, {
                side: "right",
                sideOffset: 36,
                onOpenAutoFocus: function (e) {
                  e.preventDefault();
                },
                onCloseAutoFocus: function (e) {
                  e.preventDefault();
                },
                onInteractOutside: function (e) {
                  var t;
                  e.target instanceof Element &&
                  (null === (t = s.current) || void 0 === t
                    ? void 0
                    : t.contains(e.target))
                    ? n()
                    : e.preventDefault();
                },
                className:
                  "relative animate-slideLeftAndFade select-none rounded-xl bg-gray-900 p-4 text-sm text-white shadow-sm dark:bg-gray-50 dark:text-gray-700",
                children: [
                  (0, y.jsxs)("div", {
                    children: [
                      (0, y.jsxs)("div", {
                        className: "mb-0.5 flex items-center gap-2",
                        children: [
                          (0, y.jsx)(iu, {
                            children: (0, y.jsx)(_.Z, (0, v._)({}, io.new)),
                          }),
                          (0, y.jsx)("div", {
                            className: "font-medium",
                            children: (0, y.jsx)(
                              _.Z,
                              (0, v._)({}, io.shareConversations)
                            ),
                          }),
                          (0, y.jsx)(ec.x8, {
                            className:
                              "-my-1 -mr-1 ml-1 p-1 opacity-70 transition hover:opacity-100",
                            children: (0, y.jsx)(eu.ZP, { icon: C.q5L }),
                          }),
                        ],
                      }),
                      (0, y.jsxs)("a", {
                        href: a5,
                        className:
                          "inline-flex items-center gap-1.5 opacity-70 transition hover:opacity-100",
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                          l.formatMessage(io.learnMore),
                          (0, y.jsx)(eu.ZP, { icon: C.AlO, size: "xsmall" }),
                        ],
                      }),
                    ],
                  }),
                  (0, y.jsx)(ec.Eh, {
                    asChild: !0,
                    children: (0, y.jsx)("div", {
                      className:
                        "relative top-[-6px] h-3 w-3 rotate-45 transform rounded-br-sm bg-gray-900 dark:bg-gray-50",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var iu = et.Z.span(ii()),
        ic = n(36112);
      function id() {
        var e = (0, q._)([
          "flex flex-col gap-2 pb-2 text-gray-100 text-sm\n",
          "",
        ]);
        return (
          (id = function () {
            return e;
          }),
          e
        );
      }
      function im() {
        var e = (0, q._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n",
          ")}\n",
          ")}\n",
          "\n",
        ]);
        return (
          (im = function () {
            return e;
          }),
          e
        );
      }
      function ih() {
        var e = (0, q._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n",
          "\n",
        ]);
        return (
          (ih = function () {
            return e;
          }),
          e
        );
      }
      function ig() {
        var e = (0, q._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
        return (
          (ig = function () {
            return e;
          }),
          e
        );
      }
      function ip() {
        var e = (0, q._)([
          "flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative",
        ]);
        return (
          (ip = function () {
            return e;
          }),
          e
        );
      }
      function iv() {
        var e = (0, q._)([
          "h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900",
        ]);
        return (
          (iv = function () {
            return e;
          }),
          e
        );
      }
      function ix() {
        var e = (0, q._)([
          "absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n",
          "",
        ]);
        return (
          (ix = function () {
            return e;
          }),
          e
        );
      }
      function ib() {
        var e = (0, q._)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
        return (
          (ib = function () {
            return e;
          }),
          e
        );
      }
      function iy() {
        var e = (0, q._)(["p-1 hover:text-white"]);
        return (
          (iy = function () {
            return e;
          }),
          e
        );
      }
      var ij = (0, M.vU)({
          historyBucketToday: {
            id: "history.bucket.today",
            defaultMessage: "Today",
            description: "Label for today's history bucket",
          },
          historyBucketYesterday: {
            id: "history.bucket.yesterday",
            defaultMessage: "Yesterday",
            description: "Label for yesterday's history bucket",
          },
          historyBucketLastSeven: {
            id: "history.bucket.lastSeven",
            defaultMessage: "Previous 7 Days",
            description: "Label for the history bucket of the previous 7 days",
          },
          historyBucketLastThirty: {
            id: "history.bucket.lastThirty",
            defaultMessage: "Previous 30 Days",
            description: "Label for the history bucket of the previous 30 days",
          },
          unableToLoadHistory: {
            id: "history.unableToLoad",
            defaultMessage: "Unable to load history",
            description: "Error message when history fails to load",
          },
          retryButton: {
            id: "history.retryButton",
            defaultMessage: "Retry",
            description: "Button to retry loading history",
          },
          showMoreButton: {
            id: "history.showMoreButton",
            defaultMessage: "Show more",
            description: "Button to show more history items",
          },
        }),
        ik = {
          initial: function (e) {
            return e.isNew ? { opacity: 0, height: 0, overflow: "hidden" } : {};
          },
          animate: function () {
            return { opacity: 1, height: "auto" };
          },
          exit: function () {
            return { opacity: 0, height: 0 };
          },
        };
      function iw(e) {
        var t,
          n,
          r = e.activeId,
          a = e.onNewThread,
          i = e.setActiveRequests,
          o = (0, ee.Z)(),
          s = (0, b._)((0, w.useState)(!1), 2),
          l = s[0],
          u = s[1],
          c = (0, b._)((0, w.useState)(0), 2),
          d = c[0],
          m = c[1],
          h = (0, eo.Z)(),
          f = (0, ic.MO)(),
          g = f.conversations,
          p = f.hasNextPage,
          x = f.fetchNextPage,
          j = f.isLoading,
          k = f.isFetchingNextPage,
          C = f.isError,
          M = (0, N.hz)().has(ei.DY),
          T = (0, w.useRef)(null),
          I = (0, w.useCallback)(
            function (e) {
              var t;
              M &&
                !j &&
                null != e &&
                (null === (t = T.current) || void 0 === t || t.disconnect(),
                (T.current = new IntersectionObserver(function (e) {
                  e[0].isIntersecting && p && x();
                })),
                T.current.observe(e));
            },
            [M, j, p, x]
          );
        (0, w.useEffect)(function () {
          return function () {
            var e;
            null === (e = T.current) || void 0 === e || e.disconnect();
          };
        }, []);
        var S = (0, ic.iF)();
        (0, ic.Od)();
        var P =
          ((t = (0, w.useRef)()),
          (n = (0, w.useRef)()),
          ((0, w.useEffect)(
            function () {
              (t.current = n.current), (n.current = g);
            },
            [g]
          ),
          g === n.current)
            ? t.current
            : n.current);
        (0, w.useEffect)(
          function () {
            h(function () {
              m(d + 1);
            }, (0, H.Z)((0, $.Z)(), Date.now()) + 1e3);
          },
          [d, h]
        );
        var Z = 0 === g.length,
          R = (0, w.useMemo)(
            function () {
              return g.reduce(
                function (e, t) {
                  var n,
                    r,
                    a = new Date(
                      null !==
                        (r =
                          null !== (n = t.update_time) && void 0 !== n
                            ? n
                            : t.create_time) && void 0 !== r
                        ? r
                        : 0
                    ),
                    i = (0, Q.Z)(new Date(), a);
                  if (0 === i) e.recent.today.items.push(t);
                  else if (i <= 1) e.recent.yesterday.items.push(t);
                  else if (i <= 7) e.recent.lastSeven.items.push(t);
                  else if (i <= 30) e.recent.lastThirty.items.push(t);
                  else if ((0, V.Z)(a)) {
                    var s = (0, W.Z)(a),
                      l = (0, G.Z)(a),
                      u = "".concat(s, "-").concat(l);
                    e.dynamicMonths[u]
                      ? e.dynamicMonths[u].items.push(t)
                      : (e.dynamicMonths[u] = {
                          label: o.formatDate(a, { month: "long" }),
                          items: [t],
                        });
                  } else {
                    var c = (0, W.Z)(a),
                      d = "".concat(c, "-");
                    e.dynamicYears[d]
                      ? e.dynamicYears[d].items.push(t)
                      : (e.dynamicYears[d] = {
                          label: o.formatDate(a, { year: "numeric" }),
                          items: [t],
                        });
                  }
                  return e;
                },
                {
                  recent: {
                    today: {
                      label: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, ij.historyBucketToday)
                      ),
                      items: [],
                    },
                    yesterday: {
                      label: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, ij.historyBucketYesterday)
                      ),
                      items: [],
                    },
                    lastSeven: {
                      label: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, ij.historyBucketLastSeven)
                      ),
                      items: [],
                    },
                    lastThirty: {
                      label: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, ij.historyBucketLastThirty)
                      ),
                      items: [],
                    },
                  },
                  dynamicMonths: {},
                  dynamicYears: {},
                }
              );
            },
            [d, g]
          );
        return (0, y.jsxs)(iC, {
          $centered: j || (C && Z),
          children: [
            Z && j && (0, y.jsx)(eR.Z, { className: "m-auto" }),
            Z &&
              C &&
              (0, y.jsxs)("div", {
                className: "p-3 text-center italic text-gray-500",
                children: [
                  (0, y.jsx)(_.Z, (0, v._)({}, ij.unableToLoadHistory)),
                  !l &&
                    (0, y.jsx)("div", {
                      className: "mt-1",
                      children: (0, y.jsx)(el.z, {
                        as: "button",
                        color: "dark",
                        size: "small",
                        className: "m-auto mt-2",
                        onClick: function () {
                          u(!0), S();
                        },
                        children: (0, y.jsx)(_.Z, (0, v._)({}, ij.retryButton)),
                      }),
                    }),
                ],
              }),
            !j &&
              (0, y.jsx)("div", {
                children: (0, y.jsx)(J.M, {
                  initial: !1,
                  children: [R.recent, R.dynamicMonths, R.dynamicYears].flatMap(
                    function (e, t) {
                      return (0, y.jsx)(
                        "span",
                        {
                          children: Object.entries(e).map(function (e) {
                            var t = (0, b._)(e, 2),
                              n = t[0],
                              o = t[1],
                              s = o.items,
                              l = o.label;
                            if ("today" !== n && !s.length) return null;
                            var u = !!s.find(function (e) {
                              var t;
                              return (
                                g.length > 0 &&
                                e.id ===
                                  (null === (t = g[0]) || void 0 === t
                                    ? void 0
                                    : t.id)
                              );
                            });
                            return (0, y.jsxs)(
                              Y.E.div,
                              {
                                className: "relative",
                                layoutId: "bucket-".concat(n),
                                layout: "position",
                                initial: {
                                  height: 0,
                                  opacity: 1,
                                  position: "relative",
                                },
                                animate: {
                                  height: "auto",
                                  opacity: 1,
                                  transition: { duration: 0.2, ease: "easeIn" },
                                },
                                children: [
                                  s.length > 0 &&
                                    (0, y.jsx)(Y.E.div, {
                                      className: (0, z.Z)(
                                        "sticky top-0",
                                        u ? "z-[16]" : "z-[14]"
                                      ),
                                      layoutId: "bucketTitle-".concat(n),
                                      layout: "position",
                                      children: (0, y.jsx)(iS, { children: l }),
                                    }),
                                  (0, y.jsx)("ol", {
                                    children: s.map(function (e, t) {
                                      var n = r === e.id,
                                        o =
                                          null == P
                                            ? void 0
                                            : P.find(function (t) {
                                                return t.id === e.id;
                                              });
                                      return (0,
                                      y.jsx)(Y.E.li, { className: (0, z.Z)("relative", u && 0 === t ? "z-[15]" : ""), layoutId: "".concat(e.id), layout: "position", custom: { isNew: !o }, variants: ik, initial: "initial", animate: "animate", exit: "exit", children: (0, y.jsx)(i_, { id: e.id, title: e.title, active: n, onNewThread: a, setActiveRequests: i, forwardRef: p && g[g.length - 5 - 1].id === e.id ? I : void 0 }) }, "history-item-".concat(e.id));
                                    }),
                                  }),
                                ],
                              },
                              n
                            );
                          }),
                        },
                        "category-".concat(t)
                      );
                    }
                  ),
                }),
              }),
            M
              ? k &&
                (0, y.jsx)("div", {
                  className: "m-4 mb-5 flex justify-center",
                  children: (0, y.jsx)(eR.Z, {}),
                })
              : (0, y.jsx)(y.Fragment, {
                  children:
                    p &&
                    (0, y.jsx)(el.z, {
                      as: "button",
                      onClick: function () {
                        return x();
                      },
                      color: "dark",
                      className: "m-auto mb-2",
                      size: "small",
                      loading: k,
                      children: (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, ij.showMoreButton)
                      ),
                    }),
                }),
          ],
        });
      }
      var iC = et.Z.div(id(), function (e) {
        return e.$centered && "h-full justify-center items-center";
      });
      function i_(e) {
        var t = e.id,
          n = e.title,
          r = e.active,
          a = e.onNewThread,
          i = e.forwardRef,
          o = e.setActiveRequests,
          s = (0, E.w$)(),
          l = (0, en.WS)(),
          u = (0, k.useRouter)(),
          c = (0, b._)((0, w.useState)(!1), 2),
          d = c[0],
          m = c[1],
          h = (0, w.useRef)(null),
          f = (0, b._)((0, w.useState)(!1), 2),
          g = f[0],
          p = f[1],
          v = (0, N.hz)(),
          x = (0, es.sN)(es.F_.isBusinessWorkspace),
          j = (0, T.cj)(t),
          _ = v.has(ei.RJ) && r && !j && !x,
          M = (0, ic.iF)(),
          I = (0, w.useCallback)(
            function (e) {
              var r, a;
              if (
                (null == e || e.preventDefault(),
                m(!1),
                (null === (r = h.current) || void 0 === r ? void 0 : r.value) &&
                  (null === (a = h.current) || void 0 === a
                    ? void 0
                    : a.value) !== n)
              ) {
                var i = h.current.value;
                ea.ZP.patchConversation(t, { title: i }),
                  T.tQ.setTitle(t, i, T._L.User),
                  l(er.s6.renameThread, { threadId: t, content: i }),
                  M();
              }
            },
            [l, t, M, n]
          ),
          S = (0, w.useCallback)(
            function (e) {
              "Enter" === e.key && I();
            },
            [I]
          ),
          P = (0, w.useCallback)(
            function () {
              ea.ZP.patchConversation(t, { is_visible: !1 }).then(function () {
                M();
              }),
                a();
            },
            [t, a, M]
          ),
          Z = (0, w.useCallback)(
            function (e) {
              R.abortAllAndReset(),
                o(new Set()),
                e.preventDefault(),
                l(er.s6.loadThread, { threadId: t }),
                u.push("/c/".concat(t), void 0, { shallow: !0 });
            },
            [l, t, u, o]
          ),
          A = F(t, n, r),
          B = A.resolvedTitle,
          L = A.isTypingEffect;
        if (d)
          return (0, y.jsxs)(iN, {
            $active: r,
            children: [
              (0, y.jsx)(eu.ZP, { icon: C.IC0, className: "flex-shrink-0" }),
              (0, y.jsx)(iT, {
                ref: h,
                type: "text",
                defaultValue: null != B ? B : "",
                autoFocus: !0,
                onKeyDown: S,
                className: "mr-0",
                onBlur: I,
              }),
              (0, y.jsxs)(iZ, {
                $active: !0,
                children: [
                  (0, y.jsx)(iR, {
                    onClick: I,
                    children: (0, y.jsx)(eu.ZP, { icon: C.UgA }),
                  }),
                  (0, y.jsx)(iR, {
                    onClick: function (e) {
                      e.preventDefault(), m(!1);
                    },
                    children: (0, y.jsx)(eu.ZP, { icon: C.q5L }),
                  }),
                ],
              }),
            ],
          });
        var U = L && r && s;
        return (0, y.jsxs)(iM, {
          onClick: r ? X() : Z,
          $active: r,
          $sharing: _,
          className: (0, z.Z)("group", U && "animate-flash"),
          ref: i,
          children: [
            (0, y.jsx)(eu.ZP, { icon: g ? C.Ybf : C.IC0 }),
            (0, y.jsxs)(iI, {
              children: [
                U
                  ? (0, y.jsx)(O, { text: null != B ? B : "" })
                  : g
                  ? 'Delete "'.concat(B, '"?')
                  : B,
                (!L || !r) && (0, y.jsx)(iP, { $active: r }),
              ],
            }),
            g &&
              (0, y.jsxs)(iZ, {
                $active: !0,
                children: [
                  (0, y.jsx)(iR, {
                    onClick: P,
                    children: (0, y.jsx)(eu.ZP, { icon: C.UgA }),
                  }),
                  (0, y.jsx)(iR, {
                    onClick: function () {
                      p(!1);
                    },
                    children: (0, y.jsx)(eu.ZP, { icon: C.q5L }),
                  }),
                ],
              }),
            r &&
              !g &&
              (0, y.jsxs)(iZ, {
                $active: r,
                children: [
                  (0, y.jsx)(iR, {
                    onClick: function (e) {
                      e.preventDefault(), m(!0);
                    },
                    children: (0, y.jsx)(eu.ZP, { icon: C.Nte }),
                  }),
                  _ &&
                    (0, y.jsx)(il, {
                      children: (0, y.jsx)(iR, {
                        onClick: function (e) {
                          e.preventDefault(), D.vm.openSharingModal(t);
                        },
                        children: (0, y.jsx)(eu.ZP, { icon: C.A8q }),
                      }),
                    }),
                  (0, y.jsx)(iR, {
                    onClick: function () {
                      return p(!0);
                    },
                    children: (0, y.jsx)(eu.ZP, { icon: C.Ybf }),
                  }),
                ],
              }),
          ],
        });
      }
      var iM = et.Z.a(
          im(),
          function (e) {
            var t = e.$active,
              n = e.$sharing;
            return t && n ? "pr-[4.5rem]" : "";
          },
          function (e) {
            var t = e.$active,
              n = e.$sharing;
            return t && !n ? "pr-14" : "";
          },
          function (e) {
            return e.$active
              ? "bg-gray-800 hover:bg-gray-800"
              : "hover:pr-4 bg-gray-900";
          }
        ),
        iN = et.Z.div(ih(), function (e) {
          return e.$active
            ? "pr-14 bg-gray-800 hover:bg-gray-800"
            : "bg-gray-900";
        }),
        iT = et.Z.input(ig()),
        iI = et.Z.div(ip()),
        iS = et.Z.h3(iv()),
        iP = et.Z.div(ix(), function (e) {
          return e.$active
            ? "from-gray-800"
            : "from-gray-900 group-hover:from-[#2A2B32]";
        }),
        iZ = et.Z.div(ib(), function (e) {
          return e.$active ? "visible" : "invisible group-hover:visible";
        }),
        iR = et.Z.button(iy()),
        iD = n(61119),
        iA = n(62059),
        iE = n(6128),
        iF = n(5437),
        iB = n.n(iF),
        iL = n(11253),
        iO = n.n(iL),
        iU = n(15300),
        iq = n(44675),
        iz = "https://tcr9i.chat.openai.com/v2/".concat(
          "35536E1E-65B4-4D96-9D97-6ADB7EFF8147",
          "/api.js"
        );
      ((l = p || (p = {})).Idle = "idle"),
        (l.Loading = "loading"),
        (l.ScriptLoaded = "script_loaded"),
        (l.Ready = "ready"),
        (l.Done = "done"),
        (l.Error = "error"),
        (l.Failed = "failed"),
        (l.CAPTCHA = "captcha");
      var iQ = new ((function () {
          function e() {
            (0, B._)(this, e), (this.status = p.Idle);
            var t,
              n = this;
            this.getEnforcementToken =
              ((t = (0, em._)(function (e) {
                var t;
                return (0, ef.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, n._getArkosePromise()];
                    case 1:
                      return (
                        (t = r.sent()),
                        [
                          2,
                          new Promise(function (r, a) {
                            n.setOnCompleted(function (e) {
                              r(e.token);
                            }),
                              n.setOnError(function (i) {
                                if (e) {
                                  var o, s, l, u, c;
                                  iU.U.addAction("arkose_get_token_error", {
                                    app_release:
                                      null !== (l = iq.env.APP_RELEASE) &&
                                      void 0 !== l
                                        ? l
                                        : "",
                                    error:
                                      null !==
                                        (u =
                                          null === (o = i.error) || void 0 === o
                                            ? void 0
                                            : o.error) && void 0 !== u
                                        ? u
                                        : "",
                                  }),
                                    a(
                                      null !==
                                        (c =
                                          null === (s = i.error) || void 0 === s
                                            ? void 0
                                            : s.error) && void 0 !== c
                                        ? c
                                        : "Unknown Arkose error"
                                    ),
                                    n._showUserError();
                                } else t.reset(), n.getEnforcementToken(!0).then(r, a);
                              }),
                              n.setOnFailed(function () {
                                var e;
                                iU.U.addAction(
                                  "arkose_failed_to_get_challenge",
                                  {
                                    app_release:
                                      null !== (e = iq.env.APP_RELEASE) &&
                                      void 0 !== e
                                        ? e
                                        : "",
                                  }
                                ),
                                  a(Error("Failed challenge too many times")),
                                  n._showUserError();
                              }),
                              t.run();
                          }),
                        ]
                      );
                  }
                });
              })),
              function (e) {
                return t.apply(this, arguments);
              });
          }
          var t = e.prototype;
          return (
            (t._getArkosePromise = function (e) {
              var t = this;
              return (
                null == this.arkoseInstancePromise &&
                  (this.arkoseInstancePromise = new Promise(function (n, r) {
                    (window.useArkoseSetupEnforcement = void 0),
                      t.setStatus(p.Loading);
                    var a = document.createElement("script");
                    (a.src = iz),
                      (a.async = !0),
                      (a.defer = !0),
                      a.setAttribute("data-status", p.Loading),
                      a.setAttribute(
                        "data-callback",
                        "useArkoseSetupEnforcement"
                      ),
                      (window.useArkoseSetupEnforcement = function (e) {
                        n(e),
                          t.setStatus(p.Ready),
                          e.setConfig({
                            onCompleted: function (e) {
                              t.onCompleted(e);
                            },
                            onError: function (e) {
                              t.onError(e);
                            },
                            onFailed: function (e) {
                              t.onFailed(e);
                            },
                            onShown: function (e) {
                              t.onShown(e);
                            },
                          });
                      }),
                      document.body.appendChild(a);
                    var i = function (o) {
                      if ("load" === o.type && t.status !== p.Ready)
                        t._startReadyTimeout(), t.setStatus(p.ScriptLoaded);
                      else if ("error" === o.type) {
                        if ((t.setStatus(p.Error), e)) {
                          var s;
                          iU.U.addAction("arkose_script_load_error", {
                            app_release:
                              null !== (s = iq.env.APP_RELEASE) && void 0 !== s
                                ? s
                                : "",
                          }),
                            r("Arkose script failed to load"),
                            t._showUserError();
                        } else
                          a.removeEventListener("load", i),
                            a.removeEventListener("error", i),
                            a.remove(),
                            (t.arkoseInstancePromise = void 0),
                            t._getArkosePromise(!0).then(n, r);
                      }
                    };
                    a.addEventListener("load", i),
                      a.addEventListener("error", i);
                  })),
                this.arkoseInstancePromise
              );
            }),
            (t._startReadyTimeout = function () {
              var e = this;
              setTimeout(function () {
                if (e.status === p.ScriptLoaded) {
                  var t;
                  iU.U.addAction("arkose_script_ready_timeout", {
                    app_release:
                      null !== (t = iq.env.APP_RELEASE) && void 0 !== t
                        ? t
                        : "",
                  }),
                    e._showUserError();
                }
              }, 15e3);
            }),
            (t._showUserError = function () {
              nN.m.danger(
                "There was a problem preparing your chat. Please refresh the page and try again."
              );
            }),
            (t.gatherData = function () {
              return this._getArkosePromise();
            }),
            (t.setStatus = function (e) {
              this.status = e;
            }),
            (t.onCompleted = function (e) {
              var t;
              null === (t = this._onCompleted) ||
                void 0 === t ||
                t.call(this, e);
            }),
            (t.setOnCompleted = function (e) {
              this._onCompleted = e;
            }),
            (t.onError = function (e) {
              var t;
              null === (t = this._onError) || void 0 === t || t.call(this, e);
            }),
            (t.setOnError = function (e) {
              this._onError = e;
            }),
            (t.onFailed = function (e) {
              var t;
              null === (t = this._onFailed) || void 0 === t || t.call(this, e);
            }),
            (t.setOnFailed = function (e) {
              this._onFailed = e;
            }),
            (t.onShown = function (e) {
              var t;
              null === (t = this._onShown) || void 0 === t || t.call(this, e);
            }),
            (t.setOnShown = function (e) {
              this._onShown = e;
            }),
            e
          );
        })())(),
        iH = n(75179),
        i$ = n(87316);
      function iG(e) {
        var t = e.id,
          n = e.label,
          r = e.disabled;
        return (0, y.jsxs)("div", {
          className: "form-check",
          children: [
            (0, y.jsx)("input", {
              className:
                "form-check-input float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
              type: "checkbox",
              disabled: r,
              value: "",
              id: t,
            }),
            (0, y.jsx)("label", {
              className: "form-check-label text-gray-800 dark:text-gray-100",
              htmlFor: t,
              children: n,
            }),
          ],
        });
      }
      function iW() {
        var e = (0, q._)(["mb-2 mt-auto ml-auto mr-auto"]);
        return (
          (iW = function () {
            return e;
          }),
          e
        );
      }
      function iV() {
        var e = (0, q._)([
          "relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden",
        ]);
        return (
          (iV = function () {
            return e;
          }),
          e
        );
      }
      function iJ() {
        var e = (0, q._)(["mb-5 border dark:bg-gray-800 overflow-hidden"]);
        return (
          (iJ = function () {
            return e;
          }),
          e
        );
      }
      function iY() {
        var e = (0, q._)([""]);
        return (
          (iY = function () {
            return e;
          }),
          e
        );
      }
      var iK = (0, M.vU)({
        submitFeedback: {
          id: "feedbackModal.submitFeedback",
          defaultMessage: "Submit feedback",
          description: "Button text for submitting the feedback",
        },
        submitReport: {
          id: "feedbackModal.submitReport",
          defaultMessage: "Submit report",
          description: "Button text for submitting a content-moderation report",
        },
        submitRejectModeration: {
          id: "feedbackModal.moderationReject",
          defaultMessage: "Block Content",
          description:
            "Button text for rejecting the share link and blocking it from being viewed",
        },
        submitAcceptModeration: {
          id: "feedbackModal.moderationAccept",
          defaultMessage: "Allow Content",
          description:
            "Button text for accepting the share link and allowing it to be viewed",
        },
        thumbsUpPlaceholder: {
          id: "feedbackModal.thumbsUpPlaceholder",
          defaultMessage: "What do you like about the response?",
          description:
            "Placeholder for textarea input when user chooses thumbs up",
        },
        thumbsDownPlaceholder: {
          id: "feedbackModal.thumbsDownPlaceholder",
          defaultMessage:
            "What was the issue with the response? How could it be improved?",
          description:
            "Placeholder for textarea input when user chooses thumbs down",
        },
        reportContentExplanationPlaceholder: {
          id: "feedbackModal.reportContentExplanationPlaceholder",
          defaultMessage:
            "What is wrong with the response? What about this response is harmful? Please be as specific as possible, and add any details that are not present in the checkboxes below.",
          description:
            "Placeholder for textarea input when user chooses to report a shared chat",
        },
        harmfulUnsafe: {
          id: "feedbackModal.harmfulUnsafe",
          defaultMessage: "This is harmful / unsafe",
          description: "Label for harmful/unsafe checkbox",
        },
        harmfulOffensive: {
          id: "feedbackModal.harmfulOffensive",
          defaultMessage: "This content is harmful or offensive",
          description: "Label for harmful/offensive checkbox",
        },
        copyrightContent: {
          id: "feedbackModal.copyrightContent",
          defaultMessage: "This content violates copyright law",
          description: "Label for Copyrighted Content checkbox",
        },
        reportOtherContent: {
          id: "feedbackModal.reportOtherContent",
          defaultMessage:
            "I don't like this for some other reason (please describe)",
          description: "Label for Report Other Content checkbox",
        },
        notTrue: {
          id: "feedbackModal.notTrue",
          defaultMessage: "This isn't true",
          description: "Label for not true checkbox",
        },
        notHelpful: {
          id: "feedbackModal.notHelpful",
          defaultMessage: "This isn't helpful",
          description: "Label for not helpful checkbox",
        },
        dontLikeThis: {
          id: "feedbackModal.dontLikeThis",
          defaultMessage: "I don't like this",
          description: "Label for I Don't Like This checkbox",
        },
        sexualAbuse: {
          id: "feedbackModal.sexualAbuse",
          defaultMessage: "This content contains sexual abuse",
          description: "Label for Sexual Abuse checkbox",
        },
        provideAdditionalFeedback: {
          id: "feedbackModal.provideAdditionalFeedback",
          defaultMessage: "Provide additional feedback",
          description: "Title for the critique feedback modal",
        },
        provideReportModalTitle: {
          id: "feedbackModal.provideReportModalTitle",
          defaultMessage: "Report This Content",
          description: "Title for the 'report' feedback modal",
        },
        pickBestAnswer: {
          id: "feedbackModal.pickBestAnswer",
          defaultMessage: "Pick the best answer to improve the model",
          description: "Title for the compare feedback modal",
        },
        newAnswer: {
          id: "feedbackModal.newAnswer",
          defaultMessage: "New Answer",
          description: "Title for the new answer during comparison",
        },
        originalAnswer: {
          id: "feedbackModal.originalAnswer",
          defaultMessage: "Original Answer",
          description: "Title for the original answer during comparison",
        },
        newAnswerBetter: {
          id: "feedbackModal.newAnswerBetter",
          defaultMessage: "New answer is better",
          description: "Button text for choosing new answer during comparison",
        },
        originalAnswerBetter: {
          id: "feedbackModal.originalAnswerBetter",
          defaultMessage: "Original answer is better",
          description:
            "Button text for choosing original answer during comparison",
        },
        neitherAnswerBetter: {
          id: "feedbackModal.neitherAnswerBetter",
          defaultMessage: "Neither answer is better",
          description:
            "Button text for choosing neither answer during comparison",
        },
        skipStep: {
          id: "feedbackModal.skipStep",
          defaultMessage: "Skip this step",
          description: "Button text for skipping comparison step",
        },
        continueWithChosenAnswer: {
          id: "feedbackModal.continueWithChosenAnswer",
          defaultMessage:
            "The conversation will continue with the answer you choose.",
          description: "Information text for user during comparison",
        },
      });
      function iX(e) {
        var t,
          n,
          r,
          a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (null == e
            ? void 0
            : null === (t = e.messages) || void 0 === t
            ? void 0
            : t.length) === 1 &&
          !(null == e
            ? void 0
            : null === (n = e.messages) || void 0 === n
            ? void 0
            : n.some(function (e) {
                return "error" in e;
              })) &&
          (!a ||
            !(
              (null == e
                ? void 0
                : null === (r = e.messages) || void 0 === r
                ? void 0
                : r.length) === 1 &&
              (0, eO.RR)(null == e ? void 0 : e.messages[0].message).length < 20
            ))
        );
      }
      function i0(e) {
        var t,
          n,
          r = e.ratingModalNodeId,
          a = e.ratingModalOpen,
          i = e.onCloseRatingModal,
          o = e.handleSubmitFeedback,
          s = e.onHandleChangeFeedbackComparisonRating,
          l = e.feedbackTextareaRef,
          u = e.clientThreadId,
          c = e.activeRequests,
          d = e.currentModelId,
          m = e.onChangeItemInView,
          h = e.onRequestMoreCompletions,
          f = e.onDeleteNode,
          g = e.onRequestCompletion,
          p = e.onUpdateNode,
          x = (0, ee.Z)(),
          j = T.tQ.getTree(u),
          k = (0, T.XK)(u);
        (0, w.useEffect)(
          function () {
            "report" === a && ev.pg.forceEnableSession();
          },
          [a]
        );
        var M = (0, w.useRef)(0.5 > Math.random() ? "left" : "right"),
          I = null == j ? void 0 : j.getConversationTurns(r || "root"),
          S = I.length - 1,
          P = I[I.length - 1],
          Z = (0, N.hz)().has(ei.FZ),
          R = (0, b._)((0, w.useState)("critique"), 2),
          D = R[0],
          A = R[1],
          F = (0, E.w$)(),
          B = (0, N.hz)().has(ei.Pt) && iX(P, !0) && F,
          L = (0, en.WS)(),
          O = (0, w.useMemo)(
            function () {
              return {
                id: r || "root",
                threadId: T.tQ.getServerThreadId(u),
                rating: a,
                model: d,
              };
            },
            [r, u, a, d]
          ),
          U =
            null == I
              ? void 0
              : I[(null == I ? void 0 : I.length) - 1].variantIds,
          q = null == U ? void 0 : U[(null == U ? void 0 : U.length) - 1],
          Q = (n = (t = null == j ? void 0 : j.getConversationTurns(q))[
            t.length - 1
          ]).messages[n.messages.length - 1].nodeId,
          H = null == j ? void 0 : j.getConversationTurns(Q),
          $ = (0, w.useMemo)(
            function () {
              var e =
                null == H ? void 0 : H[(null == H ? void 0 : H.length) - 1];
              return "thumbsDown" === a && B && iX(e) && iX(P);
            },
            [a, B, H, P]
          ),
          G = (0, w.useRef)(Date.now()),
          W = (0, w.useRef)(-1),
          V = (0, w.useRef)(Date.now()),
          J = (0, w.useRef)(Date.now());
        (0, w.useEffect)(
          function () {
            "compare" === D
              ? ((W.current = Date.now()), L(er.s6.displayedComparisonUIV0, O))
              : "critique" === D &&
                "thumbsDown" === a &&
                L(er.s6.displayedThumbsDownFeedbackForm, O);
          },
          [D]
        );
        var Y = I.length - 2,
          K = H.length - 1,
          et = H[H.length - 1],
          eo = (0, w.useMemo)(
            function () {
              return et && eU.Cv.getRequestIdFromConversationTurn(et);
            },
            [et]
          ),
          es = (0, w.useMemo)(
            function () {
              return c.has(eo);
            },
            [c, eo]
          );
        (0, w.useMemo)(
          function () {
            es || (J.current = Date.now());
          },
          [es]
        );
        var el = P.messages,
          eu = el[el.length - 1],
          ec = eu.message.id,
          ed = eu.nodeId,
          em = j.getLeafFromNode(ed),
          ef = et.messages,
          eg = ef[ef.length - 1],
          ep = eg.message.id,
          ex = eg.nodeId,
          eb = j.getLeafFromNode(ex),
          ey =
            "critique" === D
              ? "report" === a
                ? x.formatMessage(iK.provideReportModalTitle)
                : x.formatMessage(iK.provideAdditionalFeedback)
              : x.formatMessage(iK.pickBestAnswer),
          ej = (0, w.useRef)([]),
          ek = (0, w.useRef)(""),
          ew = (0, w.useCallback)(
            function () {
              var e,
                t =
                  null === (e = l.current) || void 0 === e
                    ? void 0
                    : e.elements;
              (ej.current = (0, eD._)(t || [])
                .filter(function (e) {
                  return e.checked;
                })
                .map(function (e) {
                  return e.id;
                })
                .map(function (e) {
                  return e.replace("feedback-", "");
                })),
                (ek.current =
                  (null == t ? void 0 : t["feedback-other"].value) || "");
            },
            [l]
          ),
          eC = (0, w.useCallback)(
            function () {
              ew(),
                o(ek.current, ej.current),
                "thumbsDown" === a && L(er.s6.submitThumbsDownFeedbackForm, O),
                $ ? A("compare") : i();
            },
            [ew, o, a, $, L, O, i]
          ),
          e_ = (0, w.useCallback)(
            function (e, t) {
              var n = T.tQ.getServerThreadId(u);
              if (null != n) {
                var r = T.tQ.getThreadCurrentLeafId(u);
                ea.ZP.submitSharedConversationReportFeedback({
                  message_id: r,
                  shared_conversation_id: n,
                  text: e,
                  tags: t,
                })
                  .then(function () {
                    nN.m.success("Moderation logged successfully");
                  })
                  .catch(function () {
                    nN.m.danger(
                      "Moderation NOT logged successfully! Please try again"
                    );
                  }),
                  i();
              }
            },
            [u, i]
          ),
          eM = (0, w.useCallback)(
            function () {
              ew(),
                ej.current.push("moderation-reject"),
                e_(ek.current, ej.current);
            },
            [e_, ew]
          ),
          eN = (0, w.useCallback)(
            function () {
              ew(),
                ej.current.push("moderation-accept"),
                e_(ek.current, ej.current);
            },
            [e_, ew]
          ),
          eT =
            "moderate" === a
              ? (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsx)(eP.ZP.Button, {
                      title: x.formatMessage(iK.submitRejectModeration),
                      color: "danger",
                      onClick: eM,
                    }),
                    (0, y.jsx)(eP.ZP.Button, {
                      title: x.formatMessage(iK.submitAcceptModeration),
                      color: "primary",
                      onClick: eN,
                    }),
                  ],
                })
              : "critique" === D
              ? (0, y.jsx)(eP.ZP.Button, {
                  title: x.formatMessage(
                    "report" === a ? iK.submitReport : iK.submitFeedback
                  ),
                  onClick: eC,
                })
              : null,
          eI = "left" === M.current,
          eS = eI ? "new" : "original",
          eR = eI ? "original" : "new",
          eA = eI
            ? x.formatMessage(iK.newAnswer)
            : x.formatMessage(iK.originalAnswer),
          eE = eI
            ? x.formatMessage(iK.originalAnswer)
            : x.formatMessage(iK.newAnswer),
          eF = eI
            ? x.formatMessage(iK.newAnswerBetter)
            : x.formatMessage(iK.originalAnswerBetter),
          eB = eI
            ? x.formatMessage(iK.originalAnswerBetter)
            : x.formatMessage(iK.newAnswerBetter),
          eL = a && "report" !== a && "moderate" !== a,
          eO = (0, w.useCallback)(
            function (e) {
              var t = "left" === e ? eS : "right" === e ? eR : "same";
              if (
                (L(
                  er.s6.submittedComparisonUIV0,
                  Object.assign({}, O, { choice: t })
                ),
                eL)
              ) {
                var n = T.tQ.getTree(u),
                  r = n.getMetadata(ed);
                n.updateNode(ed, {
                  metadata: {
                    $set: (0, eh._)((0, v._)({}, r), {
                      inlineComparisonRating: "baseline",
                    }),
                  },
                });
                var o = n.getMetadata(ex);
                n.updateNode(ex, {
                  metadata: {
                    $set: (0, eh._)((0, v._)({}, o), {
                      inlineComparisonRating: t,
                    }),
                  },
                }),
                  s(
                    ec,
                    ep,
                    a,
                    t,
                    M.current,
                    G.current,
                    W.current,
                    V.current,
                    J.current,
                    ek.current,
                    ej.current
                  );
              }
              T.tQ.setThreadCurrentLeafId(u, e === M.current ? eb.id : em.id),
                i();
            },
            [eS, eR, L, O, eL, u, eb.id, em.id, i, ed, ex, s, ec, ep, a]
          ),
          eq = !es && null != J.current && $,
          ez = (0, w.useCallback)(
            function () {
              i(),
                "critique" === D
                  ? L(er.s6.skippedThumbsDownFeedbackForm, Object.assign({}, O))
                  : "compare" === D &&
                    L(er.s6.skippedComparisonUIV0, Object.assign({}, O));
            },
            [i, L, O, D]
          ),
          eQ = (0, b._)((0, w.useState)([]), 2),
          eH = eQ[0],
          e$ = eQ[1];
        return (
          (0, w.useEffect)(function () {
            "moderate" === a &&
              ea.ZP.fetchShareModerationCategories().then(function (e) {
                var t = e.moderation_categories;
                e$(
                  Object.keys(t).map(function (e) {
                    return [e, t[e]];
                  })
                );
              });
          }, []),
          (0, y.jsxs)(
            eZ.Z,
            {
              isOpen: !0,
              onClose: ez,
              size: "custom",
              className: "md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",
              type:
                "critique" === D
                  ? "thumbsUp" === a
                    ? "success"
                    : "danger"
                  : "success",
              icon:
                "critique" === D ? ("thumbsUp" === a ? C.fmn : C.oLd) : void 0,
              title: ey,
              closeButton: (0, y.jsx)(eP.ZP.CloseButton, { onClose: ez }),
              children: [
                "critique" === D &&
                  (0, y.jsxs)("form", {
                    ref: l,
                    children: [
                      (0, y.jsx)(nk.ZP, {
                        id: "feedback-other",
                        placeholder:
                          "thumbsUp" === a
                            ? x.formatMessage(iK.thumbsUpPlaceholder)
                            : "report" === a
                            ? x.formatMessage(
                                iK.reportContentExplanationPlaceholder
                              )
                            : x.formatMessage(iK.thumbsDownPlaceholder),
                        rows: 3,
                        className:
                          "mb-1 mt-4 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
                      }),
                      "thumbsDown" === a &&
                        (0, y.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, y.jsx)(iG, {
                              id: "feedback-harmful",
                              label: x.formatMessage(iK.harmfulUnsafe),
                            }),
                            (0, y.jsx)(iG, {
                              id: "feedback-false",
                              label: x.formatMessage(iK.notTrue),
                            }),
                            (0, y.jsx)(iG, {
                              id: "feedback-not-helpful",
                              label: x.formatMessage(iK.notHelpful),
                            }),
                          ],
                        }),
                      null != a &&
                        !eL &&
                        (0, y.jsx)(y.Fragment, {
                          children: (0, y.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              "report" === a &&
                                (0, y.jsxs)(y.Fragment, {
                                  children: [
                                    (0, y.jsx)(iG, {
                                      id: "feedback-dont-like-this",
                                      label: x.formatMessage(iK.dontLikeThis),
                                    }),
                                    (0, y.jsx)(iG, {
                                      id: "feedback-false",
                                      label: x.formatMessage(iK.notTrue),
                                    }),
                                    (0, y.jsx)(iG, {
                                      id: "feedback-not-helpful",
                                      label: x.formatMessage(iK.notHelpful),
                                    }),
                                    (0, y.jsx)(iG, {
                                      id: "feedback-harmful-offensive",
                                      label: x.formatMessage(
                                        iK.harmfulOffensive
                                      ),
                                    }),
                                    (0, y.jsx)(iG, {
                                      id: "feedback-sexual-abuse",
                                      label: x.formatMessage(iK.sexualAbuse),
                                    }),
                                  ],
                                }),
                              "moderate" === a &&
                                (0, y.jsxs)(y.Fragment, {
                                  children: [
                                    eH.map(function (e) {
                                      var t = (0, b._)(e, 2),
                                        n = t[0],
                                        r = t[1];
                                      return (0,
                                      y.jsx)(iG, { id: "feedback-" + n, label: r }, n);
                                    }),
                                    (0, y.jsx)(iG, {
                                      id: "feedback-copyright",
                                      label: x.formatMessage(
                                        iK.copyrightContent
                                      ),
                                    }),
                                  ],
                                }),
                              (0, y.jsx)(iG, {
                                id: "feedback-content-other",
                                label: x.formatMessage(iK.reportOtherContent),
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                "compare" === D &&
                  H &&
                  void 0 !== k &&
                  (0, y.jsxs)("div", {
                    className: (0, z.Z)("w-full"),
                    children: [
                      (0, y.jsx)("p", {
                        className: (0, z.Z)("mb-7 mt-3"),
                        children: (0, y.jsx)(
                          _.Z,
                          (0, v._)({}, iK.continueWithChosenAnswer)
                        ),
                      }),
                      (0, y.jsx)(i5, {
                        className: Z ? "rounded-2xl" : "rounded-md",
                        children: (0, y.jsx)(i3, {
                          children: (0, y.jsx)(tW, {
                            currentModelId: d,
                            turnIndex: Y,
                            isFinalTurn: !1,
                            clientThreadId: u,
                            onChangeItemInView: m,
                            onChangeRating: X(),
                            onRequestMoreCompletions: h,
                            onDeleteNode: f,
                            onRequestCompletion: g,
                            onUpdateNode: p,
                            activeRequests: c,
                            showInlineEmbeddedDisplay: !0,
                            onHandleChangeVariantFeedbackInlineComparisonRating:
                              X(),
                          }),
                        }),
                      }),
                      (0, y.jsxs)("div", {
                        className: (0, z.Z)(),
                        children: [
                          (0, y.jsxs)("div", {
                            className: (0, z.Z)(
                              "mb-2 grid w-full grid-cols-2 gap-5"
                            ),
                            children: [
                              (0, y.jsx)("div", {
                                children: (0, y.jsx)("p", {
                                  className: (0, z.Z)("font-semibold"),
                                  children: eA,
                                }),
                              }),
                              (0, y.jsx)("div", {
                                children: (0, y.jsx)("p", {
                                  className: (0, z.Z)("font-semibold"),
                                  children: eE,
                                }),
                              }),
                            ],
                          }),
                          (0, y.jsxs)("div", {
                            className: (0, z.Z)(
                              "mb-5 grid w-full grid-cols-2 gap-5"
                            ),
                            children: [
                              (0, y.jsxs)(i2, {
                                children: [
                                  (0, y.jsx)(i3, {
                                    children: (0, y.jsx)(tW, {
                                      currentModelId: d,
                                      turnIndex: eI ? K : S,
                                      conversationLeafId: eI ? ex : ed,
                                      isFinalTurn: !0,
                                      clientThreadId: u,
                                      onChangeItemInView: m,
                                      onChangeRating: X(),
                                      onDeleteNode: f,
                                      onRequestMoreCompletions: h,
                                      onRequestCompletion: g,
                                      onUpdateNode: p,
                                      activeRequests: c,
                                      showInlineEmbeddedDisplay: !0,
                                      onHandleChangeVariantFeedbackInlineComparisonRating:
                                        X(),
                                    }),
                                  }),
                                  (0, y.jsx)(i1, {
                                    children: (0, y.jsx)(eP.ZP.Button, {
                                      disabled: !eq,
                                      title: eF,
                                      onClick: function () {
                                        return eO("left");
                                      },
                                      color: "dark",
                                    }),
                                  }),
                                ],
                              }),
                              (0, y.jsxs)(i2, {
                                children: [
                                  (0, y.jsx)(i3, {
                                    children: (0, y.jsx)(tW, {
                                      currentModelId: d,
                                      turnIndex: eI ? S : K,
                                      conversationLeafId: eI ? ed : ex,
                                      isFinalTurn: !0,
                                      clientThreadId: u,
                                      onChangeItemInView: m,
                                      onChangeRating: X(),
                                      onDeleteNode: f,
                                      onRequestMoreCompletions: h,
                                      onRequestCompletion: g,
                                      onUpdateNode: p,
                                      activeRequests: c,
                                      showInlineEmbeddedDisplay: !0,
                                      onHandleChangeVariantFeedbackInlineComparisonRating:
                                        X(),
                                    }),
                                  }),
                                  (0, y.jsx)(i1, {
                                    children: (0, y.jsx)(eP.ZP.Button, {
                                      disabled: !eq,
                                      title: eB,
                                      onClick: function () {
                                        return eO("right");
                                      },
                                      color: "dark",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, y.jsx)("div", {
                            className: (0, z.Z)("grid w-full"),
                            children: (0, y.jsxs)("div", {
                              className: (0, z.Z)("mb-2 text-right"),
                              children: [
                                (0, y.jsx)(eP.ZP.Button, {
                                  disabled: !eq,
                                  title: x.formatMessage(
                                    iK.neitherAnswerBetter
                                  ),
                                  color: "primary",
                                  onClick: function () {
                                    return eO("same");
                                  },
                                  className: (0, z.Z)("mr-2"),
                                }),
                                (0, y.jsx)(eP.ZP.Button, {
                                  title: x.formatMessage(iK.skipStep),
                                  onClick: function () {
                                    return i();
                                  },
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, y.jsx)(eP.ZP.Actions, { primaryButton: eT }),
              ],
            },
            "RatingModal-".concat(r)
          )
        );
      }
      var i1 = et.Z.div(iW()),
        i2 = et.Z.div(iV()),
        i5 = et.Z.div(iJ()),
        i3 = et.Z.div(iY()),
        i4 = n(37541);
      function i6() {
        var e,
          t,
          n,
          r,
          a,
          i,
          o =
            ((t = (e = (0, ar.S)()).isLoggedInWithMfa),
            (n = e.isUsernamePassword),
            (r = e.setupMfa),
            (i = (a = (0, rH.p0)()).filter(function (e) {
              return !(
                "none" === e.manifest.auth.type ||
                "service_http" === e.manifest.auth.type
              );
            })),
            (t || !n) && (i = []),
            {
              disablePluginsThatWeCantUse: function () {
                var e = a.filter(function (e) {
                  return (
                    "none" === e.manifest.auth.type ||
                    "service_http" === e.manifest.auth.type
                  );
                });
                (0, rH.dT)(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              },
              pluginsWeCantUse: i,
              setupMfa: r,
            }),
          s = o.disablePluginsThatWeCantUse,
          l = o.pluginsWeCantUse,
          u = o.setupMfa,
          c = (0, w.useCallback)(
            function () {
              s();
            },
            [s]
          );
        return 0 === l.length
          ? null
          : (0, y.jsx)(eZ.Z, {
              isOpen: !0,
              onClose: c,
              title: "Some of your plugins require two-factor authentication.",
              primaryButton: (0, y.jsx)(eP.ZP.Button, {
                onClick: u,
                title: "Setup two-factor authentication",
                color: "primary",
              }),
              secondaryButton: (0, y.jsx)(eP.ZP.Button, {
                onClick: s,
                title: "Turn off the plugins",
              }),
              type: "danger",
              children: (0, y.jsx)("div", {
                className: "flex flex-col gap-2 py-4",
                children: l.map(function (e) {
                  return (0,
                  y.jsx)("div", { className: "w-full", children: (0, y.jsx)(rV.Z, { plugin: e }) }, e.id);
                }),
              }),
            });
      }
      var i7 = n(16578),
        i8 = n.n(i7),
        i9 = n(44925),
        oe = n(74853),
        ot = n(99652),
        on = n(1220);
      function or(e) {
        var t = e.isOpen,
          n = e.onClose,
          r = (0, en.WS)(),
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          o = a[1],
          s = (0, k.useRouter)(),
          l = (0, w.useCallback)(
            function () {
              r(er.s6.closeAccountPaymentModal), n();
            },
            [n, r]
          ),
          u = (0, w.useCallback)(
            (0, em._)(function () {
              var e;
              return (0, ef.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    o(!0), r(er.s6.clickAccountCustomerPortal), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 3, 4, 5]),
                      [4, ea.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = t.sent()), s.push(e.url), [3, 5];
                  case 3:
                    return (
                      t.sent(),
                      nN.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return o(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [s, r, o]
          ),
          c = (0, w.useCallback)(
            function () {
              r(er.s6.clickAccountPaymentGetHelp);
            },
            [r]
          ),
          d = (0, w.useCallback)(
            function () {
              r(er.s6.clickAccountManageIos);
            },
            [r]
          ),
          m = (0, N.hz)(),
          h = (0, N.e2)(),
          f = (0, N.YD)();
        return (0, y.jsxs)(oe.x, {
          isOpen: t,
          onClose: n,
          children: [
            (0, y.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
              children: [
                (0, y.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your plan",
                }),
                (0, y.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: l,
                  children: (0, y.jsx)(C.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, y.jsx)("div", {
              className: "grid",
              children: (0, y.jsx)("div", {
                className: "relative order-1 col-span-1 sm:order-2",
                children: (0, y.jsx)(ot.Oi, {
                  rowElements: [
                    (0, y.jsx)(
                      ot.Cu,
                      {
                        text: on.S.plus.name,
                        children: (0, y.jsx)("span", {
                          className: "font-semibold text-gray-500",
                          children: on.S.plus.costInDollars,
                        }),
                      },
                      "row-plus-plan-name"
                    ),
                    (0, y.jsx)(
                      ot.hi,
                      {
                        disabled: !0,
                        variant: "primary-disabled",
                        text: on.S.plus.callToAction.active,
                      },
                      "row-plus-plan-button"
                    ),
                    (0, y.jsx)(
                      ot.G,
                      { text: on.S.plus.demandAccess },
                      "row-plus-plan-demand"
                    ),
                    (0, y.jsx)(
                      ot.G,
                      { text: on.S.plus.responseSpeed },
                      "row-plus-plan-speed"
                    ),
                    (0, y.jsx)(
                      ot.G,
                      { className: "sm:pb-1", text: on.S.plus.modelFeatures },
                      "row-plus-plan-feathers"
                    ),
                    (null == h ? void 0 : h.purchase_origin_platform) ===
                      i9._4.MOBILE_IOS &&
                      (0, y.jsx)(
                        i8(),
                        {
                          href: i9.m1,
                          target: "_blank",
                          passHref: !0,
                          children: (0, y.jsx)(ot.nR, {
                            className: "sm:pb-1",
                            isLoading: !1,
                            text: on.S.manageSubscriptionIos.callToAction,
                            onClick: d,
                          }),
                        },
                        "row-plus-plan-manage-ios"
                      ),
                    (!h ||
                      h.purchase_origin_platform === i9._4.WEBAPP ||
                      h.purchase_origin_platform === i9._4.GRANTED) &&
                      f &&
                      (0, y.jsx)(
                        ot.nR,
                        {
                          className: "sm:pb-1",
                          isLoading: i,
                          text: on.S.manageSubscriptionWeb.callToAction,
                          onClick: u,
                        },
                        "row-plus-plan-manage"
                      ),
                    (0, y.jsx)(
                      i8(),
                      {
                        href: i9.ti,
                        target: "_blank",
                        passHref: !0,
                        children: (0, y.jsx)(
                          ot.nR,
                          {
                            className: "sm:pb-1",
                            isLoading: !1,
                            text: on.S.getHelp.callToAction,
                            onClick: c,
                          },
                          "row-plus-plan-help"
                        ),
                      },
                      "row-plus-plan-help-link"
                    ),
                    m.has("business_seats")
                      ? (0, y.jsx)(
                          i8(),
                          {
                            href: "/payments/business",
                            target: "_blank",
                            passHref: !0,
                            children: (0, y.jsx)(
                              ot.nR,
                              {
                                className: "sm:pb-1",
                                isLoading: !1,
                                text: on.S.business.callToAction,
                                onClick: c,
                              },
                              "row-plus-plan-help"
                            ),
                          },
                          "row-plus-plan-create-business-team"
                        )
                      : null,
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var oa = n(48432),
        oi = n(24148);
      function oo() {
        var e = (0, q._)([
          "flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border bg-white dark:bg-gray-800 border-black/10 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-gray-700 h-11",
        ]);
        return (
          (oo = function () {
            return e;
          }),
          e
        );
      }
      var os = (0, M.vU)({
        newChat: {
          defaultMessage: "New chat",
          id: "Stage.newChat",
          description: "New chat button tooltip",
        },
        openSidebar: {
          defaultMessage: "Show sidebar",
          id: "Stage.openSidebar",
          description: "Open sidebar button tooltip",
        },
        openDebug: {
          defaultMessage: "Open debug sidebar",
          id: "Stage.openDebug",
          description: "Open debug sidebar button tooltip",
        },
      });
      function ol(e) {
        var t = e.isStaticSharedThread,
          n = (0, ee.Z)(),
          r = (0, D.tN)(function (e) {
            return {
              activeSidebar: e.activeSidebar,
              isDesktopNavCollapsed: e.isDesktopNavCollapsed,
            };
          }),
          a = r.isDesktopNavCollapsed,
          i = r.activeSidebar,
          o = (0, N.hz)(),
          s = o.has(ei.Ue),
          l = o.has("debug") && "debug" !== i;
        return t
          ? null
          : (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(J.M, {
                  initial: !1,
                  children:
                    s &&
                    a &&
                    (0, y.jsx)(Y.E.div, {
                      className:
                        "absolute left-2 top-2 z-10 hidden md:inline-block",
                      initial: { opacity: 0 },
                      animate: {
                        opacity: 1,
                        transition: { duration: 0.165, ease: "easeIn" },
                      },
                      children: (0, y.jsx)(tI.u, {
                        side: "right",
                        label: n.formatMessage(os.openSidebar),
                        children: (0, y.jsx)(ou, {
                          onClick: D.vm.toggleDesktopNavCollapsed,
                          "aria-label": n.formatMessage(os.openSidebar),
                          children: (0, y.jsx)(eu.ZP, {
                            className: "text-black dark:text-white",
                            icon: C.iYc,
                          }),
                        }),
                      }),
                    }),
                }),
                (0, y.jsx)("div", {
                  className:
                    "absolute right-4 top-2 z-10 hidden flex-col gap-2 md:flex",
                  children:
                    l &&
                    (0, y.jsx)(tI.u, {
                      side: "left",
                      label: n.formatMessage(os.openDebug),
                      children: (0, y.jsx)(ou, {
                        onClick: function () {
                          return D.vm.toggleActiveSidebar("debug");
                        },
                        "aria-label": n.formatMessage(os.openDebug),
                        children: (0, y.jsx)(eu.ZP, {
                          className: "text-black dark:text-white",
                          icon: C.cDN,
                        }),
                      }),
                    }),
                }),
              ],
            });
      }
      var ou = et.Z.button(oo()),
        oc = n(89678),
        od = n.n(oc),
        om = n(55989),
        oh = n(66523),
        of = [
          /\bnigger\w*/i,
          /\bfaggot\w*/i,
          /\bkike\w*/i,
          /\bdykes?\b/i,
          /\bwetbacks?\b/i,
          /\bchinks?\b/i,
          /\bgooks?\b/i,
          /\bpakis?\b/i,
          /\binjuns?\b/i,
          /\btrannys?\b/i,
          /\btrannies\b/i,
          /\bspicks?\b/i,
          /\bshemales?\b/i,
        ];
      function og(e) {
        return op.apply(this, arguments);
      }
      function op() {
        return (op = (0, em._)(function (e) {
          var t, n;
          return (0, ef.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (t = (0, b._)(e.queryKey, 2))[0],
                  (n = t[1]),
                  [
                    4,
                    ea.ZP.getThreadInterpreterState(n).then(function (e) {
                      return (
                        0 === e.time_remaining_ms &&
                          e.kernel_started &&
                          nN.m.warning(
                            "This code interpreter (beta) chat has timed out. You may continue the conversation, but previous files, links, and code blocks below may not work as expected.",
                            { hasCloseButton: !0, duration: 0 }
                          ),
                        e
                      );
                    }),
                  ]
                );
              case 1:
                return [2, r.sent()];
            }
          });
        })).apply(this, arguments);
      }
      var ov = n(70060),
        ox = n.n(ov)()(
          function () {
            return Promise.resolve().then(n.bind(n, 49218));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [49218];
              },
            },
            ssr: !1,
          }
        );
      function ob(e) {
        var t = e.children;
        return (0, y.jsx)(ox, {
          className: "h-full dark:bg-gray-800",
          followButtonClassName: "scroll-convo",
          initialScrollBehavior: "auto",
          children: t,
        });
      }
      function oy() {
        var e = (0, q._)(["grow flex-1 overflow-hidden"]);
        return (
          (oy = function () {
            return e;
          }),
          e
        );
      }
      function oj() {
        var e = (0, q._)([
          "absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:pl-2 md:w-[calc(100%-.5rem)]",
        ]);
        return (
          (oj = function () {
            return e;
          }),
          e
        );
      }
      var ok = (0, M.vU)({
        contentPolicyViolation: {
          id: "thread.modal.restrictedTerms.title",
          defaultMessage: "This prompt may violate our content policy.",
          description: "Title for the restricted terms modal",
        },
        acknowledge: {
          id: "thread.modal.common.acknowledge",
          defaultMessage: "Acknowledge",
          description: "Acknowledge button text",
        },
        doNotShareSensitive: {
          id: "thread.modal.onboarding.title",
          defaultMessage:
            "Do not share sensitive materials with this application",
          description: "Title for the onboarding warning modal",
        },
        freeResearchPreview: {
          id: "thread.chatgptFreeResearchPreview",
          defaultMessage:
            "Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT May 24 Version</link>",
          description: "Free Research Preview disclaimer",
        },
        mayProduceInaccurateInformation: {
          id: "thread.chatgptMayProduceInaccurateInformation",
          defaultMessage:
            "ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT May 24 Version</link>",
          description:
            "ChatGPT disclaimer for producing inaccurate information",
        },
        somethingWentWrong: {
          id: "thread.modal.unrecoverableError.title",
          defaultMessage: "Something went wrong",
          description: "Title for the UnrecoverableErrorModal",
        },
        tryAgainLater: {
          id: "thread.modal.unrecoverableError.description",
          defaultMessage:
            "We're sorry, but something went wrong. Please try again later.",
          description: "Description for the UnrecoverableErrorModal",
        },
        resetThread: {
          id: "thread.modal.unrecoverableError.resetThread",
          defaultMessage: "Reset thread",
          description: "Reset thread button text",
        },
        reportModalThankYouTitle: {
          id: "thread.modal.reportModalThankYou.title",
          defaultMessage: "Thank you for your report!",
          description: "Title for the post-report thank-you modal",
        },
        reportModalThankYouDescription: {
          id: "thread.modal.reportModalThankYou.description",
          defaultMessage: "Thank you for your report.",
          description: "Description for the post-report thank-you modal",
        },
        reportModalThankYouDismiss: {
          id: "thread.modal.reportModalThankYou.dismissButton",
          defaultMessage: "Close",
          description: "Close button for the post-report thank-you modal",
        },
        sharedConversationContinueConversation: {
          id: "thread.sharedConversation.continue",
          defaultMessage: "Continue this conversation",
          description:
            "Button for shared links to allow user to continue conversation in their own history",
        },
        sharedConversationReportConversation: {
          id: "thread.sharedConversation.report",
          defaultMessage: "Report conversation",
          description:
            "Button for shared links to report chat for legal, safety, or other reasons",
        },
        sharedConversationModerateConversation: {
          id: "thread.sharedConversation.moderate",
          defaultMessage: "Moderate conversation",
          description:
            "Button for shared links to moderate a chat for legal, safety, or other reasons",
        },
        reportSharedConversation: {
          id: "thread.reportSharedConversation",
          defaultMessage: "Report content",
          description: "Report shared chat footer link text",
        },
        termsOfUse: {
          id: "thread.termsOfUse",
          defaultMessage: "Terms of use",
          description: "Terms of use footer link text",
        },
        privacyPolicy: {
          id: "thread.privacyPolicy",
          defaultMessage: "Privacy policy",
          description: "Privacy policy footer link text",
        },
      });
      function ow(e) {
        var t = e.onClickReportSharedConversation;
        return (0, y.jsxs)("div", {
          className: "flex justify-center gap-3 text-gray-500",
          children: [
            (0, y.jsx)("button", {
              onClick: function () {
                t();
              },
              children: (0, y.jsx)(
                _.Z,
                (0, v._)({}, ok.reportSharedConversation)
              ),
            }),
            (0, y.jsx)("span", { children: "|" }),
            (0, y.jsx)("a", {
              href: "https://openai.com/policies/terms-of-use",
              target: "_blank",
              rel: "noreferrer",
              children: (0, y.jsx)(_.Z, (0, v._)({}, ok.termsOfUse)),
            }),
            (0, y.jsx)("span", { children: "|" }),
            (0, y.jsx)("a", {
              href: "https://openai.com/policies/privacy-policy",
              target: "_blank",
              rel: "noreferrer",
              children: (0, y.jsx)(_.Z, (0, v._)({}, ok.privacyPolicy)),
            }),
          ],
        });
      }
      var oC = function (e) {
          var t,
            n,
            r,
            a,
            i,
            o,
            s,
            l,
            u,
            c,
            d,
            m,
            h,
            f,
            g,
            p,
            x,
            j,
            M,
            I,
            S,
            Z,
            F,
            B,
            L,
            O,
            U,
            q,
            Q,
            H,
            $,
            G,
            W,
            V,
            J,
            Y,
            K,
            et,
            eo,
            es = e.initialThreadData,
            eu = e.clientThreadId,
            ec = e.activeRequests,
            eg = e.setActiveRequests,
            ep = e.handleResetThread,
            ex = e.isStaticSharedThread,
            eb = e.initiallyHighlightedMessageId,
            ey = e.continueConversationUrl,
            ej = (0, ee.Z)(),
            ew = (0, N.hz)(),
            eC = (0, eE.Fl)().isPluginsAvailable,
            e_ = (0, E.w$)(),
            eM = (0, en.WS)(),
            eN = ew.has(ei.Pt) && e_,
            eT = (0, w.useContext)(A.QL).historyDisabled,
            eI = (0, k.useRouter)(),
            eS =
              ex &&
              (null === (G = eI.query) || void 0 === G
                ? void 0
                : null === (W = G.shareParams) || void 0 === W
                ? void 0
                : W[1]) === "moderate",
            eR = (0, T.U0)(eu),
            eD = (0, T.Kt)(eu),
            eA = (0, T.oq)(eu),
            eF = (0, b._)((0, w.useState)(!1), 2),
            eB = eF[0],
            eq = eF[1],
            ez = (0, b._)((0, w.useState)(!1), 2),
            eQ = ez[0],
            eH = ez[1],
            e$ = (0, b._)((0, w.useState)(), 2),
            eG = e$[0],
            eW = e$[1],
            eV = (0, b._)((0, w.useState)(!1), 2),
            eJ = eV[0],
            eY = eV[1],
            eK = (0, b._)((0, w.useState)(), 2),
            eX = eK[0],
            e0 = eK[1],
            e1 = (0, b._)((0, w.useState)(), 2),
            e2 = e1[0],
            e5 = e1[1],
            e3 = (0, b._)((0, w.useState)(), 2),
            e4 = e3[0],
            e6 = e3[1],
            e7 = (0, w.useRef)(null),
            e8 = (0, N.nR)(),
            e9 = (0, i$.g)(function (e) {
              return e.flags.isUserInCanPayGroup;
            }),
            te = ew.has(ei.FZ),
            tt = (0, b._)((0, w.useState)(!1), 2),
            tn = tt[0],
            tr = tt[1],
            ta =
              ((i = (a = {
                exempt: !1,
                onRestrictedTermFound: (0, w.useCallback)(
                  function (e) {
                    tr(!0),
                      eM(er.s6.promptUsedRestrictedWords, {
                        threadId: T.tQ.getServerThreadId(eu),
                        content: e,
                      });
                  },
                  [eM, eu]
                ),
              }).exempt),
              (o = a.onRestrictedTermFound),
              (l = (s = (0, b._)((0, w.useState)(!1), 2))[0]),
              (u = s[1]),
              {
                hasRestrictedTerms: l,
                checkRestrictedTerms: (0, w.useCallback)(
                  function (e) {
                    var t;
                    return (of.some(function (n) {
                      var r = n.exec(e);
                      return r && (t = r[0]), r;
                    }),
                    !i && t)
                      ? (u(!0), null == o || o(t), !0)
                      : (u(!1), !1);
                  },
                  [i, o]
                ),
              }),
            ti = ta.hasRestrictedTerms,
            to = ta.checkRestrictedTerms,
            ts = (0, b._)((0, w.useState)(!0), 2),
            tl = ts[0],
            tu = ts[1],
            td = (0, b._)((0, w.useState)(!1), 2),
            tm = td[0],
            th = td[1],
            tf = (0, tD.iu)(),
            tg = (0, rH.p0)(),
            tp = (0, tD.Gg)(tf, !0),
            tv =
              null !== (eo = (0, tD.Bv)(es.lastModelUsed, eu)) && void 0 !== eo
                ? eo
                : tp,
            tx = (0, tD.B9)(),
            tb = void 0 !== tv ? tx.get(tv) : void 0,
            ty = (0, ic.iF)(),
            tj = (0, w.useCallback)(
              function () {
                ty(), eM(er.s6.newThread);
              },
              [eM, ty]
            ),
            tk = T.tQ.getTitle(eu),
            tw = (0, b._)((0, w.useState)(), 2),
            tC = tw[0],
            t_ = tw[1],
            tM = (0, w.useCallback)(
              function (e, t) {
                var n = null != t ? t : "";
                eT ||
                  "" === n ||
                  ea.ZP.generateTitle(n, e, tv)
                    .then(function (e) {
                      var r = e.title;
                      T.tQ.setTitle(n, r, T._L.Generated),
                        ty(),
                        eM(er.s6.renameThread, {
                          threadId: t,
                          content: r,
                          model: tv,
                        });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [eT, eM, tv, ty]
            ),
            tN = (0, w.useCallback)(
              function (e, t, n) {
                var r = ew.has(ei.uj);
                eT ||
                  !r ||
                  void 0 === n ||
                  (0, eO.lD)(n) ||
                  (0, eO.JD)(n) ||
                  ea.ZP.generateSuggestions(e, t, tv)
                    .then(function (e) {
                      t_({ messageId: t, suggestions: e.suggestions });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [ew, eT, tv]
            ),
            tT = (0, T.Uy)(eu),
            tI =
              ((c =
                eC &&
                (null == tb
                  ? void 0
                  : null === (V = tb.enabledTools) || void 0 === V
                  ? void 0
                  : V.includes("tools3"))
                  ? tg.map(function (e) {
                      return e.id;
                    })
                  : void 0),
              (m = (d = (0, N.hz)()).has(ei.PL)),
              (h = (0, w.useId)()),
              (f = (0, en.WS)()),
              (g = (0, rh.Y8)(function (e) {
                return null == e ? void 0 : e.setCapTimeout;
              })),
              (p = (0, rh.Y8)(function (e) {
                return null == e ? void 0 : e.clearCapTimeout;
              })),
              (x = (0, w.useContext)(A.QL).historyDisabled),
              (j = (0, tD.B9)()),
              (M = (0, w.useRef)(0)),
              (I = (0, w.useRef)({})),
              (S = (0, w.useCallback)(
                function (e, t, n, r) {
                  var a,
                    i,
                    o = r.eventSource,
                    s = function () {
                      setTimeout(function () {
                        R.removeAborterById(n),
                          eg(function (e) {
                            var t = new Set(e);
                            return t.delete(n), t;
                          }),
                          delete I.current[n],
                          T.tQ.releaseThread(eu);
                      }, 0);
                    },
                    l = T.tQ.getTree(eu),
                    u = n,
                    c = l.getParentId(u),
                    h = t === eL.Os.Continue,
                    x = !0,
                    b = !1,
                    y = l.getMessage(u),
                    k = new Set(),
                    w = l.getIsBlockedFromNode(c),
                    C = !1,
                    _ = !1,
                    M = od()(
                      function () {
                        w ||
                          C ||
                          T.tQ.updateTree(eu, function (e) {
                            e.updateNodeMessage(u, y);
                          });
                      },
                      50,
                      { leading: !0, maxWait: 50 }
                    );
                  function N() {
                    return (N = (0, em._)(function (e, t, n) {
                      var r,
                        a,
                        i,
                        o,
                        s,
                        u = arguments;
                      return (0, ef.Jh)(this, function (c) {
                        switch (c.label) {
                          case 0:
                            (r = u.length > 3 && void 0 !== u[3] && u[3]),
                              (c.label = 1);
                          case 1:
                            return (
                              c.trys.push([1, 3, , 4]),
                              [4, (0, iH._I)(n, !1, e, l.getMessageId(t))]
                            );
                          case 2:
                            return (
                              (i = (a = c.sent()).isBlocked),
                              (o = a.isFlagged),
                              (i || o) && (_ = !0),
                              i
                                ? ((C = !0),
                                  r || (w = !0),
                                  T.tQ.updateTree(eu, function (e) {
                                    e.updateNode(t, {
                                      message: {
                                        content: { parts: { $set: [""] } },
                                      },
                                      metadata: {
                                        $set: (0, eh._)((0, v._)({}, iH.sK), {
                                          completionSampleFinishTime:
                                            Date.now(),
                                        }),
                                      },
                                    });
                                  }),
                                  f(
                                    r
                                      ? er.s6.completionBlockedByModeration
                                      : er.s6.promptBlockedByModeration,
                                    { threadId: e, id: t }
                                  ))
                                : o
                                ? (T.tQ.updateTree(eu, function (e) {
                                    e.updateNode(t, {
                                      metadata: { $set: iH.Mf },
                                    });
                                  }),
                                  f(
                                    r
                                      ? er.s6.completionFlaggedByModeration
                                      : er.s6.promptFlaggedByModeration,
                                    { threadId: e, id: t }
                                  ))
                                : r &&
                                  w &&
                                  T.tQ.updateTree(eu, function (e) {
                                    e.updateNodeMessage(t, y);
                                  }),
                              [3, 4]
                            );
                          case 3:
                            return (
                              (s = c.sent()),
                              (C = !0),
                              T.tQ.updateTree(eu, function (e) {
                                e.updateNode(t, {
                                  metadata: {
                                    $set: {
                                      err: "An error occured",
                                      errType: "danger",
                                      completionSampleFinishTime: Date.now(),
                                    },
                                  },
                                });
                              }),
                              f(er.s6.moderationError, {
                                threadId: e,
                                content: JSON.stringify(s || ""),
                              }),
                              iO().publish("UnrecoverableError"),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    })).apply(this, arguments);
                  }
                  return (
                    (a = (0, em._)(function (r) {
                      var a, S, P, Z, D, A, E, B, L, O, U, q, z, Q, H, $, G, W;
                      return (0, ef.Jh)(this, function (V) {
                        switch (V.label) {
                          case 0:
                            if ("error" === r.type)
                              return (
                                console.error((a = r.error)),
                                (S =
                                  (null == a ? void 0 : a.message) ||
                                  "Something went wrong"),
                                T.tQ.updateTree(eu, function (e) {
                                  e.updateNode(u, {
                                    message: { $set: y },
                                    metadata: {
                                      $set: {
                                        err: S,
                                        errType: "danger",
                                        errCode: ((0, om.T)(a) && a.code) || "",
                                        completionSampleFinishTime: Date.now(),
                                      },
                                    },
                                  });
                                }),
                                s(),
                                (0, om.T)(a) &&
                                  (null == a ? void 0 : a.code) === rh.uU &&
                                  (null == a ? void 0 : a.clearsIn) &&
                                  (g(
                                    new Date(
                                      Date.now() + 1e3 * a.clearsIn
                                    ).toISOString()
                                  ),
                                  setTimeout(function () {
                                    p();
                                  }, 1e3 * a.clearsIn)),
                                [2]
                              );
                            if (
                              ("moderation" === r.type &&
                                ((P = r.isCompletion),
                                (Z = r.messageId),
                                (D = r.conversationId),
                                (A = r.flagged),
                                ((E = r.blocked) || A) &&
                                  T.tQ.updateTree(eu, function (e) {
                                    var t = e.messageIdToNodeId(Z);
                                    e.updateNode(t, {
                                      message: {
                                        content: { parts: { $set: [""] } },
                                      },
                                      metadata: {
                                        $set: (0, eh._)(
                                          (0, v._)({}, E ? iH.sK : iH.Mf),
                                          {
                                            completionSampleFinishTime:
                                              Date.now(),
                                          }
                                        ),
                                      },
                                    });
                                  }),
                                (A || E) &&
                                  f(
                                    P
                                      ? E
                                        ? er.s6.completionBlockedByModeration
                                        : er.s6.completionFlaggedByModeration
                                      : E
                                      ? er.s6.promptBlockedByModeration
                                      : er.s6.promptFlaggedByModeration,
                                    { threadId: D, id: Z }
                                  )),
                              "message" === r.type)
                            ) {
                              if (
                                ((B = r.message),
                                (L = r.conversationId),
                                x && l.isFirstCompletion)
                              ) {
                                if (
                                  (null == B ? void 0 : B.author.role) ===
                                  eL.uU.System
                                )
                                  return l.appendSystemMessageToRoot(B), [2];
                                if (
                                  (null == B ? void 0 : B.author.role) ===
                                  eL.uU.User
                                )
                                  return [2];
                              }
                              x
                                ? ((U =
                                    (null ===
                                      (O = T.qN.getState().threads[eu]) ||
                                    void 0 === O
                                      ? void 0
                                      : O.continuingFromSharedConversationId) !=
                                    null),
                                  T.tQ.removeContinuingFromSharedConversationId(
                                    eu
                                  ),
                                  (x = !1),
                                  (b = l.isFirstCompletion || U),
                                  (null == B ? void 0 : B.id) && k.add(n),
                                  void 0 !== L &&
                                    ((i = L),
                                    (0, T.Zz)(eu) &&
                                      T.tQ.setServerIdForNewThread(eu, L)),
                                  T.tQ.updateTree(eu, function (e) {
                                    e.updateNodeMessage(u, B);
                                  }),
                                  b && tj(L),
                                  h ||
                                    (function (e, t, n) {
                                      N.apply(this, arguments);
                                    })(L, c, l.getTextFromLastNTurns(c, 1), !1),
                                  f(er.s6.generateCompletion, {
                                    id: n,
                                    threadId: L,
                                    completionType: t,
                                    eventSource: o,
                                    model: e,
                                  }),
                                  R.addAborter(n, I.current[n]))
                                : h ||
                                  B.id === l.getMessageId(u) ||
                                  (k.add(B.id),
                                  M.flush(),
                                  T.tQ.updateTree(eu, function (e) {
                                    e.addNode(B.id, B, u, eL.Jq.Completion);
                                  }),
                                  (u = B.id),
                                  T.tQ.setThreadCurrentLeafId(eu, u)),
                                (y = B);
                            }
                            if (
                              (M(),
                              "done" !== r.type ||
                                (w ||
                                  C ||
                                  (M.flush(),
                                  _ ||
                                    ((q = l.getMessageId(u)),
                                    b && tM(q, i),
                                    tN(i, q, y))),
                                T.tQ.updateTree(eu, function (e) {
                                  e.updateNode(u, {
                                    metadata: {
                                      $set: (0, eh._)(
                                        (0, v._)({}, l.getMetadata(u)),
                                        {
                                          completionSampleFinishTime:
                                            Date.now(),
                                        }
                                      ),
                                    },
                                  });
                                }),
                                s(),
                                !d.has("tools3_dev")) ||
                                ((Q =
                                  null === (z = j.get(e)) || void 0 === z
                                    ? void 0
                                    : z.tags.includes(tD.S.GPT_4)),
                                m && Q && iQ.gatherData(),
                                !(H = (0, tc.wR)(y))))
                            )
                              return [3, 4];
                            return [4, (0, tc.qZ)(H)];
                          case 1:
                            if (
                              (($ = V.sent()),
                              (G = u),
                              T.tQ.updateTree(eu, function (e) {
                                var t = !0,
                                  n = !1,
                                  r = void 0;
                                try {
                                  for (
                                    var a, i = $[Symbol.iterator]();
                                    !(t = (a = i.next()).done);
                                    t = !0
                                  ) {
                                    var o = a.value;
                                    e.addNode(o.id, o, G, eL.Jq.Completion, {
                                      completionSampleFinishTime: Date.now(),
                                    }),
                                      (G = o.id);
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
                              T.tQ.setThreadCurrentLeafId(eu, G),
                              !(m && Q))
                            )
                              return [3, 3];
                            return [4, iQ.getEnforcementToken()];
                          case 2:
                            (W = V.sent()), (V.label = 3);
                          case 3:
                            F({
                              model: e,
                              completionType: eL.Os.Next,
                              parentNodeId: G,
                              metadata: {},
                              arkoseToken: null != W ? W : null,
                            }),
                              (V.label = 4);
                          case 4:
                            return [2];
                        }
                      });
                    })),
                    function (e) {
                      return a.apply(this, arguments);
                    }
                  );
                },
                [f, tj, tM, eg, eu]
              )),
              (F = (0, w.useCallback)(
                ((Z = (0, em._)(function (e) {
                  var t, n, r, a, i, o, s, l, u, d, m, f, g, p, v, b, y;
                  return (0, ef.Jh)(this, function (j) {
                    switch (j.label) {
                      case 0:
                        return (
                          (t = e.model),
                          (n = e.completionType),
                          (r = e.parentNodeId),
                          (a = e.metadata),
                          (o = void 0 === (i = e.focusOnNewCompletion) || i),
                          (s = e.completionMetadata),
                          (l = e.arkoseToken),
                          (u = T.tQ.getTree(eu)),
                          T.tQ.retainThread(eu),
                          (d = ""
                            .concat(eU.Vh)
                            .concat(h, "-")
                            .concat(M.current++)),
                          eg(function (e) {
                            var t = new Set(e);
                            return t.add(d), t;
                          }),
                          T.tQ.updateTree(eu, function (e) {
                            e.addNode(d, "", r, eL.Jq.Completion);
                          }),
                          o && T.tQ.setThreadCurrentLeafId(eu, d),
                          (f = []),
                          (g = u.getNode(r)),
                          n === eL.Os.Next || n === eL.Os.Variant
                            ? ((m =
                                (null ===
                                  (p = (v = u.getNode(g.parentId)).message) ||
                                void 0 === p
                                  ? void 0
                                  : p.id) || v.id),
                              f.push(g.message))
                            : (m = g.message.id),
                          void 0 === (b = T.tQ.getServerThreadId(eu)) &&
                            (0, T.Zz)(eu) &&
                            T.tQ.updateInitialThreadDataForNewThread(eu, t, c),
                          [
                            4,
                            ea.ZP.publicApiCompletionStream(
                              {
                                model: t,
                                completionType: n,
                                threadId: b,
                                continueFromSharedConversationId: tT,
                                historyDisabled: x,
                                parentMessageId: m,
                                messages: f,
                                arkoseToken: null != l ? l : null,
                                enabledPluginIds: c,
                                completionMetadata: s,
                              },
                              S(t, n, d, a)
                            ),
                          ]
                        );
                      case 1:
                        return (y = j.sent()), (I.current[d] = y), [2];
                    }
                  });
                })),
                function (e) {
                  return Z.apply(this, arguments);
                }),
                [eu, h, eg, tT, x, c, S]
              ))),
            tS = (0, w.useCallback)(
              function () {
                if (eA) {
                  var e = T.tQ.getTree(eu).getBranchFromLeaf(eA);
                  e.forEach(function (e) {
                    R.abortAndRemoveById(e.id);
                  }),
                    eg(function (t) {
                      var n = new Set(t);
                      return (
                        e.forEach(function (e) {
                          n.delete(e.id);
                        }),
                        n
                      );
                    });
                }
              },
              [eA, eg, eu]
            ),
            tP =
              null === (J = tx.get(tv)) || void 0 === J
                ? void 0
                : J.tags.includes(tD.S.GPT_4),
            tZ = ew.has(ei.PL);
          (0, w.useEffect)(
            function () {
              tZ && tP && iQ.gatherData();
            },
            [tZ, tP]
          );
          var tR = (0, w.useCallback)(
              ((B = (0, em._)(function (e, t, n, r) {
                var a,
                  i,
                  o,
                  s,
                  l,
                  u,
                  c,
                  d,
                  m = arguments;
                return (0, ef.Jh)(this, function (h) {
                  switch (h.label) {
                    case 0:
                      if (
                        ((a = !(m.length > 4) || void 0 === m[4] || m[4]),
                        (i = m.length > 5 ? m[5] : void 0),
                        (o = m.length > 6 ? m[6] : void 0),
                        r && tS(),
                        (l = T.tQ.getTree(eu)),
                        e !== eL.Os.Continue && to(l.getTextFromNode(t)))
                      )
                        return [2];
                      if (
                        ((u = i ? tp : tv),
                        (c =
                          null === (s = tx.get(u)) || void 0 === s
                            ? void 0
                            : s.tags.includes(tD.S.GPT_4)),
                        !(tZ && c))
                      )
                        return [3, 2];
                      return [4, iQ.getEnforcementToken()];
                    case 1:
                      (d = h.sent()), (h.label = 2);
                    case 2:
                      return (
                        tI({
                          model: u,
                          completionType: e,
                          parentNodeId: t,
                          metadata: n,
                          focusOnNewCompletion: a,
                          completionMetadata: o,
                          arkoseToken: null != d ? d : null,
                        }),
                        [2]
                      );
                  }
                });
              })),
              function (e, t, n, r) {
                return B.apply(this, arguments);
              }),
              [eu, to, tp, tv, tx, tZ, tI, tS]
            ),
            tA = (0, w.useCallback)(
              function (e, t, n, r) {
                T.tQ.updateTree(eu, function (a) {
                  a.addNode(e, n, t, eL.Jq.Prompt, void 0, r);
                });
              },
              [eu]
            ),
            tE = (0, w.useCallback)(
              function (e, t, n) {
                var r = t.content,
                  a = t.attachments,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                tA(e, eA, r, a.length > 0 ? { attachments: a } : {}),
                  tR(eL.Os.Next, e, n, !0, void 0, void 0, i);
              },
              [eA, tA, tR]
            ),
            tF = (0, T.nh)(eu, eA),
            tB = (0, w.useMemo)(
              function () {
                var e,
                  t,
                  n = tF.type === eL.Jq.Prompt,
                  r =
                    (null === (e = tF.metadata) || void 0 === e
                      ? void 0
                      : e.err) &&
                    (null === (t = tF.metadata) || void 0 === t
                      ? void 0
                      : t.errCode) !== iH.Dd;
                return !!(n || r) && 0 === ec.size;
              },
              [ec.size, tF]
            ),
            tL = (0, rh.Y8)(function (e) {
              return e.isoDate;
            }),
            tO = (0, w.useMemo)(
              function () {
                var e,
                  t =
                    (null === (e = tF.metadata) || void 0 === e
                      ? void 0
                      : e.errCode) === rh.uU;
                return tB && t && null != tL && "" !== tL;
              },
              [
                null === (Y = tF.metadata) || void 0 === Y ? void 0 : Y.errCode,
                tB,
                tL,
              ]
            ),
            tU = (0, w.useCallback)(
              function (e, t) {
                var n =
                    !(arguments.length > 2) ||
                    void 0 === arguments[2] ||
                    arguments[2],
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : "none",
                  a = arguments.length > 4 ? arguments[4] : void 0,
                  i = T.tQ.getTree(eu).getParentPromptNode(e).id;
                tR(eL.Os.Variant, i, t, !1, n, a, { variantPurpose: r });
              },
              [tR, eu]
            ),
            tq = (0, w.useCallback)(
              function (e) {
                eM(er.s6.continueCompletion),
                  tR(eL.Os.Continue, e, { eventSource: "mouse" }, !1);
              },
              [eM, tR]
            ),
            tz = (0, w.useCallback)(
              function (e) {
                var t = T.tQ.getTree(eu).getLeafFromNode(e);
                T.tQ.setThreadCurrentLeafId(eu, t.id), eM(er.s6.changeNode);
              },
              [eM, eu]
            ),
            tQ = (0, w.useCallback)(
              function (e, t) {
                T.tQ.updateTree(eu, function (n) {
                  n.updateNodeText(e, t);
                });
              },
              [eu]
            ),
            tH = (0, w.useCallback)(
              function (e, t, n) {
                var r = T.tQ.getServerThreadId(eu);
                if (
                  (eM(er.s6.thumbRating, {
                    id: t,
                    threadId: r,
                    rating: n,
                    model: tv,
                  }),
                  void 0 !== r &&
                    ea.ZP.submitMessageFeedback({
                      message_id: t,
                      conversation_id: r,
                      rating: n,
                    }),
                  e5(e),
                  e6(t),
                  e0(n),
                  T.tQ.updateTree(eu, function (t) {
                    var r = t.getMetadata(e);
                    t.updateNode(e, {
                      metadata: {
                        $set: (0, eh._)((0, v._)({}, r), { rating: n }),
                      },
                    });
                  }),
                  "thumbsDown" === n && eN)
                ) {
                  var a = T.tQ.getTree(eu).getConversationTurns(e || "root");
                  iX(a[a.length - 1]) &&
                    tU(
                      e,
                      { eventSource: "mouse", intent: "comparison" },
                      !1,
                      "comparison"
                    );
                }
              },
              [eM, eu, tv, eN, tU]
            ),
            t$ = (0, w.useCallback)(
              function (e, t) {
                if (eX && null != e2 && "" !== e2 && (e || t.length > 0)) {
                  var n = T.tQ.getServerThreadId(eu);
                  eM(er.s6.reportResult, {
                    id: e4,
                    threadId: n,
                    content: e,
                    model: tv,
                    rating: eX,
                    tags: t,
                  }),
                    eu &&
                      e4 &&
                      ea.ZP.submitMessageFeedback({
                        message_id: e4,
                        conversation_id: n,
                        rating: eX,
                        text: e,
                        tags: t,
                      });
                }
              },
              [eX, e2, eu, eM, e4, tv]
            ),
            tG = (0, w.useCallback)(
              function (e, t) {
                if (eB && null != eG && "" !== eG) {
                  var n = T.tQ.getServerThreadId(eu);
                  eM(er.s6.reportResult, {
                    id: e4,
                    threadId: n,
                    content: e,
                    model: tv,
                    rating: eX,
                    tags: t,
                  }),
                    ea.ZP.submitSharedConversationReportFeedback({
                      message_id: eG,
                      shared_conversation_id: n,
                      text: e,
                      tags: t,
                    }),
                    eH(!0);
                }
              },
              [eX, eB, eG, eu, eM, e4, tv]
            ),
            tW = (0, w.useCallback)(
              ((L = (0, em._)(function (e, t, n, r, a, i, o, s, l, u, c) {
                return (0, ef.Jh)(this, function (d) {
                  switch (d.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.submitMessageComparisonFeedback({
                          feedback_version: "comparison_feedback_modal:a:1.0",
                          original_message_id: e,
                          new_message_id: t,
                          rating: n,
                          conversation_id: T.tQ.getServerThreadId(eu),
                          text: u,
                          tags: c.map(function (e) {
                            return e.replace("feedback-", "");
                          }),
                          completion_comparison_rating: r,
                          new_completion_placement: a,
                          feedback_start_time: i,
                          compare_step_start_time: o,
                          new_completion_load_start_time: s,
                          new_completion_load_end_time: l,
                          frontend_submission_time: Date.now(),
                          timezone_offset_min: new Date().getTimezoneOffset(),
                        }),
                      ];
                    case 1:
                      return d.sent(), [2];
                  }
                });
              })),
              function (e, t, n, r, a, i, o, s, l, u, c) {
                return L.apply(this, arguments);
              }),
              [eu]
            ),
            tV = (0, w.useCallback)(
              ((O = (0, em._)(function (e, t, n, r, a, i, o) {
                return (0, ef.Jh)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.submitMessageComparisonFeedback({
                          feedback_version: "inline_regen_feedback:a:1.0",
                          original_message_id: e,
                          new_message_id: t,
                          rating: "none",
                          conversation_id: T.tQ.getServerThreadId(eu),
                          text: "",
                          tags: [],
                          completion_comparison_rating: n,
                          new_completion_placement: "not-applicable",
                          feedback_start_time: r,
                          compare_step_start_time: a,
                          new_completion_load_start_time: i,
                          new_completion_load_end_time: o,
                          frontend_submission_time: Date.now(),
                          timezone_offset_min: new Date().getTimezoneOffset(),
                        }),
                      ];
                    case 1:
                      return s.sent(), [2];
                  }
                });
              })),
              function (e, t, n, r, a, i, o) {
                return O.apply(this, arguments);
              }),
              [eu]
            ),
            tJ = (0, w.useCallback)(
              function (e, t) {
                var n = T.tQ.getTree(eu).getConversationTurns(e),
                  r =
                    null == n
                      ? void 0
                      : n[(null == n ? void 0 : n.length) - 1].variantIds,
                  a = (null == r ? void 0 : r.length) === 1;
                tU(
                  e,
                  a
                    ? (0, eh._)((0, v._)({}, t), {
                        intent: "comparison_implicit",
                      })
                    : t,
                  !0,
                  a ? "comparison_implicit" : "none"
                );
              },
              [tU, eu]
            ),
            tY = (0, w.useCallback)(
              function (e) {
                T.tQ.updateTree(eu, function (t) {
                  t.deleteNode(e);
                });
              },
              [eu]
            ),
            tK = (0, w.useCallback)(function () {
              D.vm.closeModal(D.B.AccountPortal);
            }, []),
            tX = (0, oi.t)(function (e) {
              return {
                setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                showAccountPaymentModal: e.showAccountPaymentModal,
              };
            }),
            t0 = tX.showAccountPaymentModal,
            t1 = tX.setShowAccountPaymentModal,
            t2 = (0, w.useCallback)(
              function () {
                t1(!1);
              },
              [t1]
            ),
            t5 = (0, w.useCallback)(
              function (e, t) {
                var n = T.tQ.getTree(eu);
                if (n.isFirstCompletion && !eT) {
                  var r,
                    a = n.getParent(t);
                  (null === (r = a.metadata) || void 0 === r
                    ? void 0
                    : r.errCode) !== iH.Dd &&
                    setTimeout(function () {
                      tM(a.message.id);
                    }, 500);
                }
                R.abortAndRemoveById(t),
                  ec.has(t) &&
                    (T.tQ.updateTree(eu, function (e) {
                      e.updateNodeMessageMetadata(t, {
                        finish_details: { type: "interrupted" },
                      });
                    }),
                    eg(function (e) {
                      var n = new Set(e);
                      return n.delete(t), n;
                    }));
              },
              [tM, eT, ec, eg, eu]
            ),
            t3 = (0, w.useCallback)(function () {
              th(!0);
            }, []);
          (0, w.useEffect)(
            function () {
              var e = iO().subscribe("AbortCompletion", t5),
                t = iO().subscribe("UnrecoverableError", t3);
              return function () {
                iO().unsubscribe(e), iO().unsubscribe(t);
              };
            },
            [t5, t3]
          );
          var t4 = (0, T.Hk)(eu),
            t6 = eR >= 2,
            t7 = (0, T.Zz)(eu) && !t6,
            t8 = (0, w.useCallback)(function () {
              tu(!0), ed.m.setItem("oai/librarian/hasSeenWarning", "true");
            }, []),
            t9 = (0, w.useCallback)(function () {
              tr(!1);
            }, []),
            ne = (0, T.lA)(eu, eA),
            nt = (0, T.dz)(eu, eA),
            nn = P(function (e) {
              return null != e.aborters[t4];
            }),
            nr = (0, w.useRef)(null),
            na = (0, w.useMemo)(
              function () {
                return !nn && !ne && nt;
              },
              [ne, nt, nn]
            ),
            ni = (0, D.tN)(function (e) {
              return e.activeModals.has(D.B.AccountPortal);
            }),
            no = (0, oh.Z)(),
            ns = (0, T.XK)(eu),
            nl = (0, D.tN)(function (e) {
              return e.sharingModalThreadId === ns;
            });
          (q = (U = {
            clientThreadId: eu,
            currentModelId: tv,
            isStaticSharedThread: ex,
          }).clientThreadId),
            (Q = U.currentModelId),
            (H = U.isStaticSharedThread),
            (t = (0, nD.i0)(Q, nD.dN.CODE_INTERPRETER)),
            (n = (0, ev.kP)().session),
            (r = T.tQ.getServerThreadId(q)),
            (0, ek.a)({
              queryKey: ["interpreterState", r],
              queryFn: og,
              enabled: !!(t && r && !H && (null == n ? void 0 : n.accessToken)),
              cacheTime: 0,
            });
          var nu = (0, T.r7)(eu);
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsxs)(iB(), {
                children: [
                  null != tk && (0, y.jsx)("title", { children: tk }),
                  ex &&
                    (0, y.jsxs)(y.Fragment, {
                      children: [
                        (0, y.jsx)("meta", {
                          property: "og:site_name",
                          content: "ChatGPT",
                        }),
                        (0, y.jsx)(
                          "meta",
                          { name: "robots", content: "noindex,nofollow" },
                          "robots"
                        ),
                        (0, y.jsx)(
                          "meta",
                          {
                            property: "og:title",
                            content: null != tk ? tk : "Shared Chat on ChatGPT",
                          },
                          "og:title"
                        ),
                        (0, y.jsx)(
                          "meta",
                          {
                            property: "og:image",
                            content: "/images/chatgpt-share-og.png",
                          },
                          "og:image"
                        ),
                      ],
                    }),
                ],
              }),
              ew.has(ei.i) ? (0, y.jsx)(i6, {}) : null,
              !tl &&
                (0, y.jsx)(
                  eZ.Z,
                  {
                    isOpen: !0,
                    onClose: t8,
                    icon: iE.Z,
                    title: ej.formatMessage(ok.doNotShareSensitive),
                    primaryButton: (0, y.jsx)(eP.ZP.Button, {
                      onClick: t8,
                      title: ej.formatMessage(ok.acknowledge),
                    }),
                    type: "danger",
                  },
                  "OnboardingModal"
                ),
              ti &&
                tn &&
                (0, y.jsx)(
                  eZ.Z,
                  {
                    isOpen: !0,
                    onClose: t9,
                    icon: C.U0j,
                    title: ej.formatMessage(ok.contentPolicyViolation),
                    primaryButton: (0, y.jsx)(eP.ZP.Button, {
                      onClick: t9,
                      title: ej.formatMessage(ok.acknowledge),
                    }),
                    type: "danger",
                  },
                  "RestrictedTerms"
                ),
              nl &&
                null != ns &&
                (0, y.jsx)(a1, {
                  serverThreadId: ns,
                  activeRequests: ec,
                  currentThreadModel: es.lastModelUsed,
                }),
              null != eX &&
                (0, y.jsx)(i0, {
                  ratingModalNodeId: e2,
                  ratingModalOpen: eX,
                  onCloseRatingModal: function () {
                    return e0(void 0);
                  },
                  handleSubmitFeedback: t$,
                  onHandleChangeFeedbackComparisonRating: tW,
                  currentModelId: tv,
                  feedbackTextareaRef: e7,
                  clientThreadId: eu,
                  activeRequests: ec,
                  onChangeItemInView: tz,
                  onRequestMoreCompletions: tU,
                  onUpdateNode: tQ,
                  onChangeRating: tH,
                  onDeleteNode: tY,
                  onRequestCompletion: tR,
                }),
              eB &&
                (0, y.jsx)(i0, {
                  ratingModalNodeId: eG,
                  ratingModalOpen: "report",
                  onCloseRatingModal: function () {
                    return eq(!1);
                  },
                  handleSubmitFeedback: tG,
                  onHandleChangeFeedbackComparisonRating: function () {},
                  currentModelId: tv,
                  feedbackTextareaRef: e7,
                  clientThreadId: eu,
                  activeRequests: ec,
                  onChangeItemInView: tz,
                  onRequestMoreCompletions: tU,
                  onUpdateNode: tQ,
                  onChangeRating: tH,
                  onDeleteNode: tY,
                  onRequestCompletion: tR,
                }),
              eQ &&
                (0, y.jsx)(eZ.Z, {
                  onClose: function () {
                    return eH(!1);
                  },
                  isOpen: !0,
                  icon: iE.Z,
                  title: ej.formatMessage(ok.reportModalThankYouTitle),
                  description: ej.formatMessage(
                    ok.reportModalThankYouDescription
                  ),
                  primaryButton: (0, y.jsx)(eP.ZP.Button, {
                    onClick: function () {
                      return eH(!1);
                    },
                    title: ej.formatMessage(ok.reportModalThankYouDismiss),
                  }),
                  type: "danger",
                }),
              eJ &&
                (0, y.jsx)(i0, {
                  ratingModalNodeId: eA,
                  ratingModalOpen: "moderate",
                  onCloseRatingModal: function () {
                    return eY(!1);
                  },
                  handleSubmitFeedback: X(),
                  onHandleChangeFeedbackComparisonRating: function () {},
                  currentModelId: tv,
                  feedbackTextareaRef: e7,
                  clientThreadId: eu,
                  activeRequests: ec,
                  onChangeItemInView: tz,
                  onRequestMoreCompletions: tU,
                  onUpdateNode: tQ,
                  onChangeRating: tH,
                  onDeleteNode: tY,
                  onRequestCompletion: tR,
                }),
              (0, y.jsx)(ol, { isStaticSharedThread: ex }),
              (0, y.jsx)(o_, {
                children:
                  !eD &&
                  (t7 || t6) &&
                  (($ = (0, y.jsx)(
                    aU,
                    {
                      onChangeItemInView: tz,
                      onRequestMoreCompletions: tU,
                      onUpdateNode: tQ,
                      onChangeRating: tH,
                      onDeleteNode: tY,
                      onRequestCompletion: tR,
                      onHandleChangeVariantFeedbackInlineComparisonRating: tV,
                      isNewThread: t7,
                      clientThreadId: eu,
                      isStaticSharedThread: ex,
                      activeRequests: ec,
                      currentThreadModel: es.lastModelUsed,
                      initiallyHighlightedMessageId: eb,
                      inlineEmbeddedDisplay: !1,
                      promptTextareaRef: nr,
                    },
                    eu
                  )),
                  ex
                    ? (0, y.jsx)("div", {
                        className: "h-full overflow-auto dark:bg-gray-800",
                        children: $,
                      })
                    : (0, y.jsx)(ob, { children: $ })),
              }),
              (0, y.jsxs)(oM, {
                children: [
                  ew.has("model_preview") &&
                    t7 &&
                    (null == tb ? void 0 : tb.tags.includes(tD.S.GPT_4)) &&
                    (0, y.jsx)("div", {
                      className:
                        "stretch mx-2 mb-2 text-center text-xs text-gray-600 dark:text-gray-200 md:mx-4 md:text-sm lg:mx-auto lg:max-w-3xl",
                      children: no.textareaDisclaimer,
                    }),
                  !tO &&
                    !ex &&
                    (0, y.jsx)(i4.Z, {
                      children: (0, y.jsx)(
                        nG,
                        {
                          clientThreadId: eu,
                          onRequestMoreCompletions: tJ,
                          onCreateNewCompletion: tE,
                          onAbortCompletion: t5,
                          onContinueGenerating: tq,
                          currentModelId: tv,
                          isCompletionInProgress: ec.has(t4),
                          className: (0, z.Z)(
                            "stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto",
                            te
                              ? "mx-auto max-w-[44rem] px-2 sm:px-0"
                              : "lg:max-w-2xl xl:max-w-3xl"
                          ),
                          shouldRetry: tB,
                          canContinue: na,
                          suggestions:
                            void 0 !== tC &&
                            (null == tC ? void 0 : tC.messageId) ===
                              (null ===
                                (K = T.tQ.getTree(eu).getLastValidNode(eA)) ||
                              void 0 === K
                                ? void 0
                                : null === (et = K.message) || void 0 === et
                                ? void 0
                                : et.id)
                              ? null == tC
                                ? void 0
                                : tC.suggestions
                              : void 0,
                          disabled: !tf.size,
                          canPause: nn,
                          isInteractableSharedThread: nu,
                          ref: nr,
                        },
                        eu
                      ),
                    }),
                  ex &&
                    (0, y.jsx)(y.Fragment, {
                      children: (0, y.jsxs)("div", {
                        className:
                          "relative flex h-full w-full flex-1 items-center justify-center gap-2",
                        children: [
                          (0, y.jsx)(el.z, {
                            as: "link",
                            to: ey,
                            children: ej.formatMessage(
                              ok.sharedConversationContinueConversation
                            ),
                          }),
                          eS &&
                            (0, y.jsx)(el.z, {
                              onClick: function () {
                                eY(!0);
                              },
                              children: ej.formatMessage(
                                ok.sharedConversationModerateConversation
                              ),
                            }),
                        ],
                      }),
                    }),
                  (0, y.jsx)("div", {
                    className:
                      "px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3",
                    children: ex
                      ? (0, y.jsx)(ow, {
                          onClickReportSharedConversation: function () {
                            eW(eA), eq(!0);
                          },
                        })
                      : e8
                      ? (0, y.jsx)("span", {
                          children: (0, y.jsx)(
                            _.Z,
                            (0, eh._)(
                              (0, v._)({}, ok.mayProduceInaccurateInformation),
                              {
                                values: {
                                  link: function (e) {
                                    return (0, y.jsx)("a", {
                                      href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                      target: "_blank",
                                      rel: "noreferrer",
                                      className: "underline",
                                      children: e,
                                    });
                                  },
                                },
                              }
                            )
                          ),
                        })
                      : (0, y.jsx)("span", {
                          children: (0, y.jsx)(
                            _.Z,
                            (0, eh._)((0, v._)({}, ok.freeResearchPreview), {
                              values: {
                                link: function (e) {
                                  return (0, y.jsx)("a", {
                                    href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "underline",
                                    children: e,
                                  });
                                },
                              },
                            })
                          ),
                        }),
                  }),
                ],
              }),
              e9 && (0, y.jsx)(oa.Z, { isOpen: t0, onClose: t2 }),
              void 0 !== e8 &&
                e8 &&
                (0, y.jsx)(or, { isOpen: ni, onClose: tK }),
              tm &&
                (0, y.jsx)(
                  eZ.Z,
                  {
                    onClose: X(),
                    isOpen: !0,
                    icon: iE.Z,
                    title: ej.formatMessage(ok.somethingWentWrong),
                    description: ej.formatMessage(ok.tryAgainLater),
                    primaryButton: (0, y.jsx)(eP.ZP.Button, {
                      onClick: function () {
                        ep(), th(!1);
                      },
                      title: ej.formatMessage(ok.resetThread),
                    }),
                    type: "danger",
                  },
                  "UnrecoverableErrorModal"
                ),
            ],
          });
        },
        o_ = et.Z.div(oy()),
        oM = et.Z.div(oj());
      function oN(e) {
        var t,
          n = e.clientThreadId,
          r = null !== (t = T.tQ.getTitle(n)) && void 0 !== t ? t : "New chat",
          a = F(n, r, !0),
          i = a.resolvedTitle,
          o = a.isTypingEffect,
          s = (0, w.useContext)(A.QL),
          l = s.historyDisabled,
          u = s.toggleHistoryDisabled;
        return (0, y.jsx)(y.Fragment, {
          children: l
            ? (0, y.jsxs)("button", {
                className:
                  "flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",
                onClick: function () {
                  return u();
                },
                children: [
                  (0, y.jsx)(eu.ZP, { icon: C.$IY }),
                  (0, y.jsx)(_.Z, (0, v._)({}, oI.enableChatHistory)),
                ],
              })
            : o && null != i
            ? (0, y.jsx)(O, { text: i })
            : null != i
            ? i
            : (0, y.jsx)(_.Z, (0, v._)({}, oI.newChat)),
        });
      }
      var oT =
          ((u = function (e) {
            var t = e.clientThreadId,
              n = e.setClientThreadId,
              r = e.isStaticSharedThread,
              a = (0, x._)(e, [
                "clientThreadId",
                "setClientThreadId",
                "isStaticSharedThread",
              ]),
              i = (0, T.UL)(t),
              o = a.setActiveRequests,
              s = (0, T.XK)(t),
              l = (0, k.useRouter)(),
              u = (0, N.hz)(),
              c = (0, w.useContext)(A.QL).historyDisabled,
              d = (0, tD.Xy)(i.lastModelUsed, t),
              m = (0, j.NL)();
            (0, w.useEffect)(
              function () {
                return (
                  T.tQ.retainThread(t),
                  function () {
                    setTimeout(function () {
                      m.invalidateQueries(["conversation", t]);
                    }, 0),
                      T.tQ.releaseThread(t);
                  }
                );
              },
              [t, m]
            ),
              (0, w.useEffect)(
                function () {
                  D.vm.closeSharingModal();
                },
                [t, s]
              );
            var h = (0, w.useCallback)(
                function () {
                  n((0, T.OX)()),
                    d.tags.includes(tD.S.GPT_4)
                      ? l.replace("/", void 0, { shallow: !0 })
                      : l.replace("/?model=".concat(d.id));
                },
                [n, d.tags, d.id, l]
              ),
              f = (0, D.tN)(function (e) {
                return e.activeSidebar;
              }),
              g = (0, E.w$)();
            return (
              (0, w.useEffect)(
                function () {
                  return function () {
                    R.abortAllAndReset(), o(new Set());
                  };
                },
                [o, t]
              ),
              (0, y.jsxs)(iA.Z, {
                onResetThread: h,
                showNavigation: !r,
                renderTitle: (0, y.jsx)(oN, { clientThreadId: t }),
                children: [
                  (0, y.jsxs)(iA.Z.NavigationPrimaryActionDesktop, {
                    onClick: h,
                    children: [
                      (0, y.jsx)(eu.ZP, { icon: c ? C.Bw1 : C.OvN }),
                      (0, y.jsx)(
                        _.Z,
                        (0, v._)({}, c ? oI.clearChat : oI.newChat)
                      ),
                    ],
                  }),
                  (0, y.jsx)(iA.Z.NavigationPrimaryActionMobile, {
                    onClick: h,
                    children: (0, y.jsx)(eu.ZP, {
                      icon: c ? C.Bw1 : C.OvN,
                      size: "medium",
                    }),
                  }),
                  (0, y.jsx)(iA.Z.NavigationContent, {
                    children: (0, y.jsx)(iw, {
                      activeId: c ? void 0 : s,
                      onNewThread: h,
                      setActiveRequests: o,
                    }),
                  }),
                  (0, y.jsx)(
                    oC,
                    (0, v._)(
                      {
                        initialThreadData: i,
                        clientThreadId: t,
                        handleResetThread: h,
                        isStaticSharedThread: r,
                      },
                      a
                    ),
                    t
                  ),
                  (0, y.jsxs)(iA.Z.Sidebars, {
                    children: [
                      u.has("debug") &&
                        "debug" === f &&
                        (0, y.jsx)(aI.fv, {
                          clientThreadId: t,
                          slideOver: !g,
                          onClose: function () {
                            return D.vm.toggleActiveSidebar("debug");
                          },
                          isOpen: !0,
                        }),
                      u.has("tools3_dev") &&
                        (0, y.jsx)(iD.ZP, { slideOver: !g }),
                    ],
                  }),
                ],
              })
            );
          }),
          function (e) {
            var t = e.clientThreadId,
              n = e.isStaticSharedThread;
            (0, T.ax)(t, n);
            var r = (0, T.UL)(t),
              a = (0, b._)((0, w.useState)(new Set()), 2),
              i = a[0],
              o = a[1];
            return (
              (0, w.useEffect)(
                function () {
                  D.vm.setActiveSidebar(!1), R.reset(), o(new Set());
                },
                [r.threadId]
              ),
              (0, y.jsx)(
                u,
                (0, v._)({}, e, { activeRequests: i, setActiveRequests: o })
              )
            );
          }),
        oI = (0, M.vU)({
          enableChatHistory: {
            id: "navigation.enableChatHistory",
            defaultMessage: "Enable chat history",
            description: "Enable chat history button label",
          },
          newChat: {
            id: "navigation.newChat",
            defaultMessage: "New chat",
            description: "New chat button label",
          },
          clearChat: {
            id: "navigation.clearChat",
            defaultMessage: "Clear chat",
            description: "Clear chat button label",
          },
        });
    },
    5759: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return f;
        },
        Z: function () {
          return c;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(34303);
      function o() {
        var e = (0, r._)([
          "flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = (0, r._)(["w-10 text-2xl text-center"]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = (0, r._)(["flex-1 leading-5"]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = (0, r._)(["flex gap-4 flex-col text-sm"]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function c(e) {
        var t = e.icon,
          n = e.children;
        return (0, a.jsxs)(d, {
          children: [
            (0, a.jsx)(m, { children: t }),
            (0, a.jsx)(h, { children: n }),
          ],
        });
      }
      var d = i.Z.div(o()),
        m = i.Z.div(s()),
        h = i.Z.div(l()),
        f = i.Z.div(u());
    },
    48432: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return j;
        },
      });
      var r = n(21722),
        a = n(22830),
        i = n(39889),
        o = n(35250),
        s = n(16578),
        l = n.n(s),
        u = n(68555),
        c = n(70079),
        d = n(1454),
        m = n(82841),
        h = n(36218),
        f = n(24274),
        g = n(64135),
        p = n(97688),
        v = n(44925),
        x = n(74853),
        b = n(99652),
        y = n(1220);
      function j(e) {
        var t = e.isOpen,
          n = e.onClose,
          s = (0, g.hz)(),
          j = (0, m.WS)(),
          k = (0, a._)((0, c.useState)(!1), 2),
          w = k[0],
          C = k[1],
          _ = (0, u.useRouter)(),
          M = (0, c.useCallback)(
            function () {
              j(h.s6.closeAccountPaymentModal), n();
            },
            [n, j]
          ),
          N = (0, c.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, i.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    C(!0), j(h.s6.clickAccountPaymentCheckout), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 3, 4, 5]), [4, f.ZP.getCheckoutLink()]
                    );
                  case 2:
                    return (e = t.sent()), _.push(e.url), [3, 5];
                  case 3:
                    return (
                      t.sent(),
                      p.m.warning(
                        "The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return C(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [_, j, C]
          ),
          T = (0, c.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, i.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    C(!0), j(h.s6.clickAccountCustomerPortal), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 3, 4, 5]),
                      [4, f.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = t.sent()), _.push(e.url), [3, 5];
                  case 3:
                    return (
                      t.sent(),
                      p.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return C(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [_, j, C]
          ),
          I = (0, c.useCallback)(
            function () {
              j(h.s6.clickAccountPaymentGetHelp);
            },
            [j]
          ),
          S = (0, g.YD)(),
          P = s.has("disable_upgrade_ui");
        return (0, o.jsxs)(x.x, {
          isOpen: t,
          onClose: n,
          children: [
            (0, o.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
              children: [
                (0, o.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your plan",
                }),
                (0, o.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: M,
                  children: (0, o.jsx)(d.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className: "grid sm:grid-cols-2",
              children: [
                (0, o.jsx)("div", {
                  className:
                    "relative order-2 col-span-1 border-r-0 border-t dark:border-gray-700 sm:order-1 sm:border-r sm:border-t-0",
                  children: (0, o.jsx)(b.Oi, {
                    rowElements: [
                      (0, o.jsx)(
                        b.Cu,
                        { text: "Free plan" },
                        "row-free-plan-name"
                      ),
                      (0, o.jsx)(
                        b.hi,
                        {
                          variant: "disabled",
                          disabled: !0,
                          text: y.S.free.callToAction.active,
                        },
                        "row-free-plan-button"
                      ),
                      (0, o.jsx)(
                        b.G,
                        { variant: "secondary", text: y.S.free.demandAccess },
                        "row-free-plan-demand"
                      ),
                      (0, o.jsx)(
                        b.G,
                        { variant: "secondary", text: y.S.free.responseSpeed },
                        "row-free-plan-speed"
                      ),
                      (0, o.jsx)(
                        b.G,
                        {
                          className: "sm:pb-2",
                          variant: "secondary",
                          text: y.S.free.modelFeatures,
                        },
                        "row-free-plan-updates"
                      ),
                    ],
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "relative order-1 col-span-1 sm:order-2",
                  children: (0, o.jsx)(b.Oi, {
                    rowElements: [
                      (0, o.jsx)(
                        b.Cu,
                        {
                          text: y.S.plus.name,
                          children: (0, o.jsx)("span", {
                            className: "font-semibold text-gray-500",
                            children: y.S.plus.costInDollars,
                          }),
                        },
                        "row-plus-plan-title"
                      ),
                      (0, o.jsx)(
                        b.hi,
                        {
                          variant: "primary",
                          disabledText: P
                            ? "Due to high demand, we've temporarily paused upgrades."
                            : "",
                          disabled: w,
                          isLoading: w,
                          onClick: N,
                          text: y.S.plus.callToAction.inactivePayment,
                        },
                        "row-plus-plan-button"
                      ),
                      (0, o.jsx)(
                        b.G,
                        { variant: "primary", text: y.S.plus.demandAccess },
                        "row-plus-plan-demand"
                      ),
                      (0, o.jsx)(
                        b.G,
                        { variant: "primary", text: y.S.plus.responseSpeed },
                        "row-plus-plan-speed"
                      ),
                      (0, o.jsx)(
                        b.G,
                        {
                          className: "sm:pb-2",
                          variant: "primary",
                          text: y.S.plus.modelFeatures,
                        },
                        "row-plus-plan-updates"
                      ),
                      S &&
                        (0, o.jsx)(
                          b.nR,
                          {
                            className: "sm:pb-1",
                            isLoading: w,
                            text: y.S.manageSubscriptionWeb.callToAction,
                            onClick: T,
                          },
                          "row-plus-plan-manage"
                        ),
                      (0, o.jsx)(
                        l(),
                        {
                          target: "_blank",
                          href: v.ti,
                          passHref: !0,
                          children: (0, o.jsx)(
                            b.nR,
                            {
                              className: "sm:pb-1",
                              isLoading: !1,
                              text: y.S.getHelp.callToAction,
                              onClick: I,
                            },
                            "row-plus-plan-help"
                          ),
                        },
                        "row-plus-plan-help-link"
                      ),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    74853: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return l;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(34303),
        o = n(48727);
      function s() {
        var e = (0, r._)([
          "flex grow justify-center bg-white dark:bg-gray-900 rounded-md flex-col items-start overflow-hidden border shadow-md dark:border-gray-700",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      var l = function (e) {
          var t = e.children,
            n = e.isOpen,
            r = e.onClose;
          return (0, a.jsx)(o.Z, {
            size: "fullscreen",
            isOpen: n,
            onClose: r,
            type: "success",
            className:
              "!bg-transparent !shadow-none md:w-[672px] lg:w-[896px] xl:w-[1024px]",
            children: (0, a.jsx)("div", {
              className: "flex h-full flex-col items-center justify-start",
              children: (0, a.jsx)("div", {
                className: "relative",
                children: (0, a.jsx)(u, { children: t }),
              }),
            }),
          });
        },
        u = i.Z.div(s());
    },
    99652: function (e, t, n) {
      "use strict";
      n.d(t, {
        Cu: function () {
          return p;
        },
        G: function () {
          return b;
        },
        Oi: function () {
          return g;
        },
        hi: function () {
          return x;
        },
        nR: function () {
          return y;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(19841),
        o = n(70079),
        s = n(1454),
        l = n(34303),
        u = n(66958),
        c = n(38317),
        d = n(57924);
      function m() {
        var e = (0, r._)([
          "p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = (0, r._)([
          "gap-2 flex flex-row justify-start items-center text-sm",
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = (0, r._)([
          "text-xl font-semibold justify-between items-center flex",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      var g = function (e) {
          var t = e.rowElements;
          return (0, a.jsx)(j, {
            children: t.map(function (e) {
              return e;
            }),
          });
        },
        p = function (e) {
          var t = e.className,
            n = e.text,
            r = e.children;
          return (0, a.jsxs)(w, {
            className: t,
            children: [(0, a.jsx)("span", { children: n }), r],
          });
        },
        v = {
          "primary-disabled":
            "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
          primary: "border-none py-3 font-semibold",
          disabled:
            "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100",
        },
        x = (0, o.forwardRef)(function (e, t) {
          var n = e.isLoading,
            r = void 0 !== n && n,
            o = e.disabled,
            l = e.onClick,
            m = e.variant,
            h = void 0 === m ? "primary" : m,
            f = e.text,
            g = e.disabledText;
          return g
            ? (0, a.jsx)("div", {
                className: "relative",
                children: (0, a.jsx)(d.u, {
                  side: "bottom",
                  sideOffset: 20,
                  label: g,
                  usePortal: !1,
                  children: (0, a.jsxs)(u.z, {
                    ref: t,
                    as: "button",
                    color: "disabled",
                    className: (0, i.Z)("w-full", v[h]),
                    children: [
                      f,
                      r &&
                        (0, a.jsx)(c.ZP, {
                          className: "animate-spin",
                          icon: s.dAq,
                        }),
                    ],
                  }),
                }),
              })
            : (0, a.jsxs)(u.z, {
                disabled: void 0 !== o && o,
                onClick: l,
                ref: t,
                as: "button",
                className: (0, i.Z)(v[h]),
                children: [
                  (0, a.jsx)("span", {
                    className: (0, i.Z)("inline-block", {
                      "text-gray-700": "primary-disabled" === h,
                      "text-white": "primary" === h,
                    }),
                    children: f,
                  }),
                  r &&
                    (0, a.jsx)(c.ZP, {
                      className: "animate-spin",
                      icon: s.dAq,
                    }),
                ],
              });
        });
      x.displayName = "PricingPlanButton";
      var b = function (e) {
          var t = e.variant,
            n = void 0 === t ? "primary" : t,
            r = e.className,
            o = e.text;
          return (0, a.jsxs)(k, {
            className: r,
            children: [
              (0, a.jsx)(c.ZP, {
                icon: s._rq,
                className: (0, i.Z)("h-5 w-5", {
                  "text-green-700": "primary" == n,
                  "text-gray-400": "secondary" == n,
                }),
              }),
              (0, a.jsx)("span", { children: o }),
            ],
          });
        },
        y = function (e) {
          var t = e.className,
            n = e.text,
            r = e.isLoading,
            i = e.onClick;
          return (0, a.jsx)(k, {
            className: t,
            children: (0, a.jsxs)("button", {
              onClick: i,
              className: "flex flex-row items-center space-x-1 underline",
              children: [
                (0, a.jsx)("span", { children: n }),
                r &&
                  (0, a.jsx)(c.ZP, { className: "animate-spin", icon: s.dAq }),
              ],
            }),
          });
        },
        j = l.Z.div(m()),
        k = l.Z.div(h()),
        w = l.Z.div(f());
    },
    1220: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return r;
        },
      });
      var r = {
        free: {
          name: "Free plan",
          callToAction: {
            active: "Your current plan",
            inactive: "Your current plan",
          },
          costInDollars: "",
          demandAccess: "Available when demand is low",
          responseSpeed: "Standard response speed",
          modelFeatures: "Regular model updates",
        },
        plus: {
          name: "ChatGPT Plus",
          callToAction: {
            active: "Your current plan",
            inactive: "I'm interested",
            inactivePayment: "Upgrade plan",
          },
          costInDollars: "USD $20/mo",
          demandAccess: "Available even when demand is high",
          responseSpeed: "Faster response speed",
          modelFeatures: "Priority access to new features",
        },
        manageSubscriptionWeb: { callToAction: "Manage my subscription" },
        manageSubscriptionIos: {
          callToAction: "Manage my subscription in the ChatGPT iOS app",
        },
        getHelp: { callToAction: "I need help with a billing issue" },
        business: { callToAction: "Buy for my team" },
      };
    },
    19051: function (e, t, n) {
      "use strict";
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
    41402: function () {},
  },
]);
