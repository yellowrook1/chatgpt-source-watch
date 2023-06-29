(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [709],
  {
    78251: function (e, t, n) {
      "use strict";
      var r = n(39324),
        a = n(4337),
        i = n(35250),
        s = n(35290),
        o = n(3001),
        l = n(59110),
        u = n(34303);
      function c() {
        var e = (0, a._)([
          "bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase",
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = (0, a._)(["bg-blue-200 text-blue-700"]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      var m = u.Z.span(c()),
        f = (0, u.Z)(m)(d());
      t.ZP = function () {
        var e = (0, l.ec)(function (e) {
            return e.currentWorkspace;
          }),
          t = (0, l.WY)();
        return (null == e ? void 0 : e.structure) === "workspace"
          ? (0, i.jsx)(f, {
              children: (0, i.jsx)(s.Z, (0, r._)({}, h.businessPlanName)),
            })
          : (null == e ? void 0 : e.structure) === "personal" && t
          ? (0, i.jsx)(m, { children: "Plus" })
          : null;
      };
      var h = (0, o.vU)({
        businessPlanName: {
          id: "badge.businessPlanName",
          defaultMessage: "Business",
          description: "label for business tier account",
        },
      });
    },
    80852: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return es;
          },
        });
      var r = n(22830),
        a = n(35250),
        i = n(70079),
        s = n(97688),
        o = n(87316),
        l = n(32983),
        u = n(75527),
        c = n(59110),
        d = n(61888),
        m = n(78251),
        f = n(48727),
        h = n(39324),
        g = n(71209),
        p = n(3001),
        x = n(75908),
        v = n(35290),
        b = n(82841),
        y = n(36218),
        j = n(32787),
        k = n(85023),
        w = n(88038),
        C = n(59114),
        _ = (0, p.vU)({
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
        M = "2023-04-25",
        N = "".concat("oai/apps/hasSeenAgeConfirmationModal", "/").concat(M);
      function P(e) {
        var t = e.onClose,
          n = (0, x.Z)(),
          r = (0, i.useCallback)(
            function () {
              k.m.setItem(N, !0), t();
            },
            [t]
          ),
          s = (0, b.WS)();
        return (
          (0, i.useEffect)(function () {
            s && s(y.s6.ageConfirmationModal, { content: M });
          }, []),
          (0, a.jsx)(f.Z, {
            isOpen: !0,
            onClose: d.noop,
            type: "success",
            title: n.formatMessage(_.welcomeBack),
            primaryButton: (0, a.jsx)(C.ZP.Button, {
              title: n.formatMessage(_.ageRequirementsButton),
              color: "primary",
              onClick: r,
            }),
            secondaryButton: (0, a.jsx)(C.ZP.Button, {
              title: n.formatMessage(_.logoutButton),
              color: "light",
              onClick: function () {
                s(y.s6.clickLogOut, { eventSource: "mouse" }), (0, j.w7)();
              },
              className: "border-gray-800 hover:border-gray-700",
            }),
            children: (0, a.jsx)(Z, {}),
          })
        );
      }
      var Z = function () {
          var e = (0, x.Z)();
          return (0, a.jsx)("div", {
            className: "mb-6 mt-4 sm:mt-6",
            children: (0, a.jsxs)("div", {
              className: "prose prose-invert text-base text-gray-500",
              children: [
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    v.Z,
                    (0, h._)({}, _.announcementParagraph1)
                  ),
                }),
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    v.Z,
                    (0, g._)((0, h._)({}, _.announcementParagraph2), {
                      values: {
                        privacyPolicyLink: (0, a.jsx)("a", {
                          href: "https://openai.com/policies/privacy-policy",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(_.privacyPolicyLink),
                        }),
                        helpCenterArticleLink: (0, a.jsx)("a", {
                          href: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-language-models-are-developed",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(_.helpCenterArticleLink),
                        }),
                      },
                    })
                  ),
                }),
              ],
            }),
          });
        },
        T = n(5759),
        I = n(4337),
        S = n(34303),
        D = n(66958);
      function R() {
        var e = (0, I._)(["flex gap-4 mt-6"]);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      function A() {
        var e = (0, I._)(["prose dark:prose-invert"]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = (0, I._)(["mb-4"]);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      function B(e) {
        var t = e.pages,
          n = e.onSubmit,
          s = (0, r._)((0, i.useState)(0), 2),
          o = s[0],
          l = s[1];
        return (0, a.jsx)(O, {
          children: t.map(function (e, t) {
            return o === t
              ? (0, a.jsx)(e, { onChangePage: l, onSubmit: n })
              : null;
          }),
        });
      }
      function F(e) {
        var t = e.onBack,
          n = e.onNext,
          r = e.onSubmit;
        return (0, a.jsxs)(L, {
          children: [
            t &&
              (0, a.jsx)(D.z, {
                as: "button",
                color: "neutral",
                onClick: t,
                children: "Back",
              }),
            n &&
              (0, a.jsx)(D.z, {
                as: "button",
                onClick: n,
                color: "neutral",
                className: "ml-auto",
                children: "Next",
              }),
            r &&
              (0, a.jsx)(D.z, {
                as: "button",
                onClick: r,
                color: "primary",
                className: "ml-auto",
                children: "Done",
              }),
          ],
        });
      }
      var L = S.Z.div(R()),
        O = S.Z.div(A()),
        U = S.Z.h4(E()),
        q = "oai/apps/hasSeenOnboarding",
        z = "chat",
        Q = function (e) {
          var t = (0, i.useCallback)(
              function () {
                k.m.setItem(
                  "".concat(q, "/").concat(e),
                  new Date().toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                );
              },
              [e]
            ),
            n = (0, r._)((0, i.useState)(null), 2),
            a = n[0],
            s = n[1];
          (0, i.useEffect)(
            function () {
              var t = k.m.getItem("".concat(q, "/").concat(e));
              s(!!t && t);
            },
            [e]
          );
          var o = (0, i.useCallback)(
            function () {
              return a ? new Date(!0 === a ? "2022-12-14" : a) : a;
            },
            [a]
          );
          return (0, i.useMemo)(
            function () {
              return { setHasSeenOnboarding: t, getHasSeenOnboardingDate: o };
            },
            [o, t]
          );
        };
      function W(e) {
        var t = e.onClose,
          n = Q(z).setHasSeenOnboarding,
          r = (0, i.useCallback)(
            function () {
              t(!0), n();
            },
            [t, n]
          );
        return (0, a.jsx)(B, { pages: [H, $, G], onSubmit: r });
      }
      var H = function (e) {
          var t = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(U, {
                children: (0, a.jsx)(v.Z, (0, h._)({}, V.page0Subtitle)),
              }),
              (0, a.jsxs)(T.I, {
                children: [
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDD2C",
                    children: (0, a.jsx)(v.Z, (0, h._)({}, V.page0Disclaimer1)),
                  }),
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDEA8",
                    children: (0, a.jsx)(v.Z, (0, h._)({}, V.page0Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(F, {
                onNext: function () {
                  return t(1);
                },
              }),
            ],
          });
        },
        $ = function (e) {
          var t = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(U, {
                children: (0, a.jsx)(v.Z, (0, h._)({}, V.page1Subtitle)),
              }),
              (0, a.jsxs)(T.I, {
                children: [
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83E\uDDBE",
                    children: (0, a.jsx)(v.Z, (0, h._)({}, V.page1Disclaimer1)),
                  }),
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDD10",
                    children: (0, a.jsx)(v.Z, (0, h._)({}, V.page1Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(F, {
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
        G = function (e) {
          var t = e.onChangePage,
            n = e.onSubmit,
            r = (0, i.useRef)(null);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(U, {
                children: (0, a.jsx)(v.Z, (0, h._)({}, V.page2Subtitle)),
              }),
              (0, a.jsxs)(T.I, {
                children: [
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDC4D",
                    children: (0, a.jsx)(v.Z, (0, h._)({}, V.page2Disclaimer1)),
                  }),
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDCAC",
                    children: (0, a.jsx)(
                      v.Z,
                      (0, g._)((0, h._)({}, V.page2Disclaimer2), {
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
              (0, a.jsx)(F, {
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
        V = (0, p.vU)({
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
        J = n(32165),
        Y = "workspace";
      function K(e) {
        var t = e.onClose,
          n = Q(Y).setHasSeenOnboarding,
          r = (0, i.useCallback)(
            function () {
              t(!0), n();
            },
            [t, n]
          );
        return (0, a.jsx)(B, { pages: [X, ee], onSubmit: r });
      }
      var X = function (e) {
          var t = e.onChangePage,
            n = (0, J.Ix)();
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(U, {
                children: (0, a.jsx)(
                  v.Z,
                  (0, g._)((0, h._)({}, et.page0Subtitle), {
                    values: { workspaceName: n },
                  })
                ),
              }),
              (0, a.jsxs)(T.I, {
                children: [
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83C\uDFE2",
                    children: (0, a.jsx)(
                      v.Z,
                      (0, h._)({}, et.page0Disclaimer1)
                    ),
                  }),
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDEA8",
                    children: (0, a.jsx)(
                      v.Z,
                      (0, h._)({}, et.page0Disclaimer2)
                    ),
                  }),
                ],
              }),
              (0, a.jsx)(F, {
                onNext: function () {
                  return t(1);
                },
              }),
            ],
          });
        },
        ee = function (e) {
          var t = e.onChangePage,
            n = e.onSubmit,
            r = (0, i.useRef)(null);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(U, {
                children: (0, a.jsx)(v.Z, (0, h._)({}, et.page1Subtitle)),
              }),
              (0, a.jsxs)(T.I, {
                children: [
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDED1",
                    children: (0, a.jsx)(
                      v.Z,
                      (0, h._)({}, et.page1Disclaimer1)
                    ),
                  }),
                  (0, a.jsx)(T.Z, {
                    icon: "\uD83D\uDD12",
                    children: (0, a.jsx)(
                      v.Z,
                      (0, g._)((0, h._)({}, et.page1Disclaimer2), {
                        values: {
                          link: function (e) {
                            return (0, a.jsx)("a", {
                              href: "https://openai.com/policies/api-data-usage-policies",
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
              (0, a.jsx)(F, {
                onBack: function () {
                  return t(0);
                },
                onSubmit: function () {
                  return null == n ? void 0 : n(r);
                },
              }),
            ],
          });
        },
        et = (0, p.vU)({
          page0Subtitle: {
            id: "WorkspaceOnboarding.page0Subtitle",
            defaultMessage: "Welcome to the {workspaceName} workspace",
            description:
              "Subtitle for the first page of the business onboarding flow",
          },
          page0Disclaimer1: {
            id: "WorkspaceOnboarding.page0Disclaimer1",
            defaultMessage:
              "This workspace is private, only select members and roles can use it.",
            description:
              "First disclaimer for the first page of the business onboarding flow",
          },
          page0Disclaimer2: {
            id: "WorkspaceOnboarding.page0Disclaimer2",
            defaultMessage:
              "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
            description:
              "Second disclaimer for the first page of the business onboarding flow",
          },
          page1Subtitle: {
            id: "WorkspaceOnboarding.page1Subtitle",
            defaultMessage: "Data management",
            description:
              "Subtitle for the second page of the business onboarding flow",
          },
          page1Disclaimer1: {
            id: "WorkspaceOnboarding.page1Disclaimer1",
            defaultMessage:
              "Conversations in this workspace are opted out of training and not available to other users.",
            description:
              "First disclaimer for the second page of the business onboarding flow",
          },
          page1Disclaimer2: {
            id: "WorkspaceOnboarding.page1Disclaimer2",
            defaultMessage:
              "Chats are securely stored for 30 days for <link>Trust and Safety Protocols</link>.",
            description:
              "Second disclaimer for the second page of the business onboarding flow",
          },
        }),
        en = function (e) {
          var t = e.onClose;
          return (0, a.jsx)(f.Z, {
            isOpen: !0,
            onClose: d.noop,
            type: "success",
            primaryButton: void 0,
            title: "ChatGPT",
            children: (0, a.jsx)(W, { onClose: t }),
          });
        },
        er = function (e) {
          var t = e.onClose;
          return (0, a.jsx)(f.Z, {
            isOpen: !0,
            onClose: d.noop,
            type: "success",
            primaryButton: void 0,
            title: (0, a.jsxs)("span", {
              children: ["ChatGPT ", (0, a.jsx)(m.ZP, {})],
            }),
            children: (0, a.jsx)(K, { onClose: t }),
          });
        };
      function ea(e) {
        var t,
          n,
          s,
          o = e.userCountry,
          l = (0, r._)((0, i.useState)(0), 2),
          u = l[0],
          d = l[1],
          m = Q(z).getHasSeenOnboardingDate,
          f = Q(Y).getHasSeenOnboardingDate,
          h = (0, c.ec)(c.F_.isBusinessWorkspace),
          g =
            ((n = (t = (0, c.hz)()).has(w.Vn)),
            (s = !!k.m.getItem(N)),
            0 === t.size
              ? "loading"
              : "IT" !== o || s
              ? "hide"
              : n
              ? "show"
              : "hide"),
          p = (0, i.useMemo)(
            function () {
              return [
                {
                  Modal: P,
                  getModalState: function () {
                    return g;
                  },
                },
                {
                  Modal: en,
                  getModalState: function () {
                    if (h) return "hide";
                    var e = m();
                    return null === e ? "loading" : !1 === e ? "show" : "hide";
                  },
                },
                {
                  Modal: er,
                  getModalState: function () {
                    if (!h) return "hide";
                    var e = f();
                    return null === e ? "loading" : !1 === e ? "show" : "hide";
                  },
                },
              ];
            },
            [m, f, h, g]
          );
        (0, i.useEffect)(
          function () {
            p[u] &&
              "hide" === p[u].getModalState() &&
              d(
                p.findIndex(function (e) {
                  return "hide" !== e.getModalState();
                })
              );
          },
          [u, p]
        );
        var x = p[u];
        if (!x) return null;
        var v = x.getModalState();
        if ("loading" === v) return null;
        "hide" === v &&
          d(function (e) {
            return e + 1;
          });
        var b = p[u].Modal;
        return (0, a.jsx)(b, {
          onClose: function () {
            d(function (e) {
              return e + 1;
            });
          },
        });
      }
      var ei = n(97895);
      function es(e) {
        var t = e.urlThreadId,
          n = e.clientThreadId,
          d = e.isUserInCanPayGroup,
          m = e.serviceStatus,
          f = e.serviceAnnouncement,
          h = e.userCountry,
          g = (0, r._)(
            (0, i.useState)(function () {
              return void 0 !== t ? t : void 0 !== n ? n : (0, u.OX)();
            }),
            2
          ),
          p = g[0],
          x = g[1];
        void 0 !== t && p !== t && x(t),
          void 0 !== t || (0, u.Zz)(p) || x((0, u.OX)());
        var v = (0, c.$T)(),
          b = (0, c.WY)(),
          y = (0, c.ec)(c.F_.workspaceId),
          j = (0, o.g)(function (e) {
            return e.updateFlagValue;
          });
        (0, i.useEffect)(
          function () {
            void 0 !== d && j("isUserInCanPayGroup", d);
          },
          [j, d]
        ),
          (0, i.useEffect)(
            function () {
              (null == m ? void 0 : m.type) &&
                !1 === b &&
                s.m.warning(m.message, { hasCloseButton: !0, duration: 5 });
            },
            [b, null == m ? void 0 : m.message, null == m ? void 0 : m.type]
          );
        var k = (0, u.GR)(p),
          w = (0, i.useRef)(!1);
        return (
          (0, i.useEffect)(
            function () {
              if (!v) {
                var e = b ? f.paid : f.public;
                if (
                  (null == e ? void 0 : e.type) &&
                  (null == e ? void 0 : e.message) &&
                  !w.current
                ) {
                  w.current = !0;
                  var t = e.message,
                    n = { hasCloseButton: !0, duration: 15 };
                  switch (e.type) {
                    case "danger":
                      s.m.danger(t, n);
                      break;
                    case "info":
                      s.m.info(t, n);
                      break;
                    case "warning":
                      s.m.warning(t, n);
                  }
                }
              }
            },
            [f, v, b]
          ),
          (0, a.jsx)(l.XA.Provider, {
            value: k,
            children: (0, a.jsxs)(l.gB.Provider, {
              value: !1,
              children: [
                (0, a.jsx)(ea, { userCountry: h }, y),
                (0, a.jsx)(ei.Z, { clientThreadId: p, setClientThreadId: x }),
              ],
            }),
          })
        );
      }
    },
    97895: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return sL;
        },
      });
      var r,
        a,
        i,
        s,
        o,
        l,
        u,
        c,
        d,
        m,
        f,
        h,
        g,
        p,
        x = n(39324),
        v = n(70216),
        b = n(22830),
        y = n(35250),
        j = n(35448),
        k = n(68555),
        w = n(70079),
        C = n(1454),
        _ = n(35290),
        M = n(3001),
        N = n(75527),
        P = n(81292),
        Z = n(58392),
        T = (0, P.ZP)(
          (0, Z.n)(function () {
            return { aborters: {} };
          })
        ),
        I = T.setState,
        S = {
          addAborter: function (e, t) {
            I(function (n) {
              null != n.aborters[e] &&
                console.warn(
                  "Setting aborter for id ".concat(e, " but it already exists")
                ),
                (n.aborters[e] = t);
            });
          },
          abortAndRemoveById: function (e) {
            I(function (t) {
              var n = t.aborters[e];
              null != n && (n.abort(), delete t.aborters[e]);
            });
          },
          removeAborterById: function (e) {
            I(function (t) {
              delete t.aborters[e];
            });
          },
          reset: function () {
            I(function () {
              return { aborters: {} };
            });
          },
          abortAllAndReset: function () {
            I(function (e) {
              Object.keys(e.aborters).forEach(function (t) {
                e.aborters[t].abort(), delete e.aborters[t];
              });
            });
          },
        },
        D = n(32689),
        R = n(59110),
        A = n(32983),
        E = n(77442);
      function B(e, t, n) {
        var r = (0, N.XL)(e),
          a = r.title,
          i = r.titleSource,
          s = (0, b._)((0, w.useState)(!1), 2),
          o = s[0],
          l = s[1],
          u = null != a ? a : t,
          c = (0, w.useRef)(u);
        return (
          (0, w.useEffect)(
            function () {
              return (
                n && i === N._L.Generated && u !== c.current && l(!0),
                function () {
                  c.current = u;
                }
              );
            },
            [n, u, i]
          ),
          { isTypingEffect: o, resolvedTitle: u }
        );
      }
      var F = n(51217),
        L = n(86526);
      function O(e) {
        var t = e.text,
          n = (0, L.Z)(),
          r = (0, b._)((0, w.useState)(!0), 2),
          a = r[0],
          i = r[1],
          s = (0, b._)((0, w.useState)(0), 2),
          o = s[0],
          l = s[1],
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
            children: [t.substring(0, o + 1), a && "▋"],
          })
        );
      }
      var U = (function () {
          function e() {
            (0, F._)(this, e);
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
                s = i[0],
                o = i[1],
                l = (0, b._)(
                  null !== (r = a[t.toLowerCase()]) && void 0 !== r
                    ? r
                    : [0, 0],
                  2
                );
              return Math.abs(s - l[0]) + Math.abs(o - l[1]);
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
                var s = void 0;
                if (i > 0) {
                  var o = this.qwertyDistance(e[i - 1], e[i]);
                  s =
                    0 === o
                      ? this.getRandomInt(t, Math.floor(n / 2))
                      : 1 === o
                      ? this.getRandomInt(t, Math.floor((2 * n) / 3))
                      : this.getRandomInt(t, n);
                } else s = this.getRandomInt(t, n);
                a.push(s + r), (r += s);
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
        W = n(26430),
        H = n(84913),
        $ = n(44043),
        G = n(82187),
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
        es = n(19051),
        eo = n(66958),
        el = n(38317),
        eu = n(56060),
        ec = n(85023),
        ed = n(21722),
        em = n(71209),
        ef = n(39889),
        eh = n(63020),
        eg = n(13002),
        ep = n(32787),
        ex = n(97703),
        ev = (0, w.createContext)(),
        eb = function (e) {
          return (0, P.oR)((0, w.useContext)(ev), e);
        },
        ey = n(59710),
        ej = n(24396),
        ek = n(25094),
        ew = w.memo(function (e) {
          var t,
            n = e.message,
            r = e.isCollapsed,
            a =
              null === (t = n.message.metadata) || void 0 === t
                ? void 0
                : t.aggregate_result;
          if (!a)
            return console.error("Corrupt code execution result message"), null;
          var i = a.messages.filter(eZ),
            s = r && i.length > 0,
            o = r && null != a.final_expression_output,
            l = r && null != a.in_kernel_exception,
            u = !r && a.messages.filter(eN).length > 0;
          return (0, y.jsxs)(y.Fragment, {
            children: [
              s &&
                (0, y.jsx)(eC, {
                  label: "STDOUT/STDERR",
                  output: i.map(function (e, t) {
                    return (0,
                    y.jsx)("span", { className: "stderr" === e.stream_name ? "text-red-500" : "", children: e.text }, "".concat(t));
                  }),
                }),
              o &&
                (0, y.jsx)(eC, {
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
                a.messages.filter(eN).map(function (e, t) {
                  return (0,
                  y.jsx)("div", { className: "empty:hidden", children: (0, y.jsx)(eP, { jupyterMessage: e }) }, t);
                }),
            ],
          });
        });
      function eC(e) {
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
      var e_ = Math.log(151) / Math.log(1.5);
      function eM(e) {
        var t = e.fileId,
          n = (0, b._)((0, w.useState)(""), 2),
          r = n[0],
          a = n[1];
        return (
          (0, ej.a)({
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
                !(n > e_) &&
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
      function eN(e) {
        return (
          "image" === e.message_type ||
          ("image_url" in e && (0, ek.$H)(e.image_url + ""))
        );
      }
      function eP(e) {
        var t = e.jupyterMessage;
        if ((0, w.useContext)(A.gB))
          return (0, y.jsxs)("div", {
            className:
              "flex h-52 w-full max-w-xs flex-col items-center justify-center gap-2 rounded-md border-black/5 bg-gray-100 p-7 text-center text-gray-500 dark:border-white/10",
            children: [
              (0, y.jsx)(el.ZP, { icon: C.LFN, size: "medium" }),
              (0, y.jsx)(_.Z, (0, x._)({}, eT.imageNotSupported)),
            ],
          });
        if (null != t.image_payload)
          return (0, y.jsx)("img", {
            src: "data:image/png;base64,".concat(t.image_payload),
          });
        if (null != t.image_url) {
          var n = (0, ek.Iy)(t.image_url);
          return (0, y.jsx)(eM, { fileId: n });
        }
        return null;
      }
      function eZ(e) {
        return "stream" === e.message_type;
      }
      var eT = (0, M.vU)({
        imageNotSupported: {
          id: "CodeExecutionOutputMessage.imageNotSupported",
          defaultMessage: "Image output is not supported in a shared chat",
          description:
            "Message shown when an image is output in a shared thread",
        },
      });
      function eI(e) {
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
                : n.some(eN)) ||
              ("parts" in (a = e.message.content)
                ? a.parts.join("")
                : ""
              ).includes("sandbox:")
            );
          });
        });
      }
      var eS = n(59114),
        eD = n(48727),
        eR = n(19265),
        eA = n(81949),
        eE = n(49218),
        eB = n(21437),
        eF = n(78251),
        eL = n(54655),
        eO = n(75955),
        eU = n(69403),
        eq = n(56244),
        ez = n(57311),
        eQ = n(46110),
        eW = n(13282),
        eH = n(47635),
        e$ = n(36716);
      function eG() {
        var e = (0, q._)(["flex flex-col items-start"]);
        return (
          (eG = function () {
            return e;
          }),
          e
        );
      }
      function eV() {
        var e = (0, q._)([
          "flex items-center text-xs bg-green-100 rounded p-3 text-gray-900 ",
          "",
        ]);
        return (
          (eV = function () {
            return e;
          }),
          e
        );
      }
      function eJ() {
        var e = (0, q._)([
          "max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800",
        ]);
        return (
          (eJ = function () {
            return e;
          }),
          e
        );
      }
      var eY = w.memo(function (e) {
          var t = e.children,
            n = e.isComplete,
            r = e.expanderClosedLabel,
            a = e.expanderOpenLabel,
            i = e.resultsPreview,
            s = e.results,
            o = e.initialExpanded,
            l = e.onExpand,
            u = (0, b._)((0, w.useState)(void 0 !== o && o), 2),
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
          y.jsxs)(eK, { children: [(0, y.jsxs)(eX, { $complete: n, children: [(0, y.jsx)("div", { children: t }), !n && (0, y.jsx)(eR.Z, { className: (0, z.Z)("shrink-0", null != s ? "ml-1" : "ml-12") }), null != s && (0, y.jsxs)("div", { className: "ml-12 flex items-center gap-2", role: "button", onClick: m, children: [null != a && null != r && (0, y.jsx)("div", { className: "text-xs text-gray-600", children: c ? a : r }), !c && i, (0, y.jsx)(el.ZP, { icon: c ? C.rH8 : C.bTu })] })] }), c && s] });
        }),
        eK = et.Z.div(eG()),
        eX = et.Z.div(eV(), function (e) {
          return e.$complete && "bg-gray-100";
        }),
        e0 = et.Z.div(eJ()),
        e1 = (0, M.vU)({
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
        e2 = w.memo(function (e) {
          var t,
            n = e.messages,
            r = e.isComplete,
            a = (0, R.hz)(),
            i = n.map(function (e) {
              return e.message;
            }),
            s = i
              .map(function (e, t) {
                if (
                  e.author.role !== eU.uU.Tool ||
                  (t > 0 && tr(e) && tr(i[t - 1]))
                )
                  return null;
                if ("browser_one_box" === e.author.name)
                  return {
                    type: "search",
                    status: "finished",
                    didError: "system_error" === e.content.content_type,
                    message: e,
                  };
                var n = e.metadata;
                if (!n) return null;
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
            o = s.map(function (e, t) {
              return (0, y.jsx)(e5, { command: e }, t);
            });
          r
            ? (o.push((0, y.jsx)(tt, {}, "finished")),
              (t = (0, y.jsx)(tt, { compact: !0 })))
            : 0 === o.length
            ? (o.push((0, y.jsx)(te, {}, "waiting")),
              (t = (0, y.jsx)(te, { compact: !0 })))
            : "finished" === s[s.length - 1].status &&
              o.push(
                (0, y.jsx)(
                  tn,
                  {
                    icon: C.Wqx,
                    children: (0, y.jsx)(_.Z, (0, x._)({}, e1.thinking)),
                  },
                  "thinking"
                )
              ),
            t ||
              (t = (0, y.jsx)(e5, { command: s[s.length - 1], compact: !0 }));
          var l =
            a.has(ei.UG) && !r
              ? (function (e) {
                  var t,
                    n = e.reverse().find(function (e) {
                      return e.author.role === eU.uU.Assistant;
                    });
                  if (!n) return null;
                  for (
                    var r = (0, eq.RR)(n), a = /^#\s*(.*)/gm, i = [];
                    null !== (t = a.exec(r));

                  )
                    i.push(t[1]);
                  return i.length > 0 ? i.join("\n") : null;
                })(i)
              : null;
          return (0,
          y.jsxs)(eY, { isComplete: r, results: (0, y.jsx)(e0, { className: "text-xs", children: o }), children: [null != l && (0, y.jsx)("div", { className: "mb-2 whitespace-pre-wrap font-medium", children: l }), t] });
        });
      function e5(e) {
        var t = e.command,
          n = e.compact;
        if (t.didError) return (0, y.jsx)(e9, { commandType: t.type });
        switch (t.type) {
          case "search":
            var r,
              a,
              i,
              s,
              o =
                "browser_one_box" === t.message.author.name
                  ? null === (r = t.message.metadata) || void 0 === r
                    ? void 0
                    : null === (a = r._cite_metadata) || void 0 === a
                    ? void 0
                    : a.original_query
                  : null === (i = t.message.metadata) || void 0 === i
                  ? void 0
                  : null === (s = i.args) || void 0 === s
                  ? void 0
                  : s[0];
            if (null == o) return null;
            return (0, y.jsx)(e3, {
              searchQuery: o,
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
            return (0, y.jsx)(e4, { pageInfo: c, compact: n });
          case "quote":
          case "quote_full":
            return (0, y.jsx)(e6, { compact: n });
          case "back":
            return (0, y.jsx)(e8, { compact: n });
          case "scroll":
            return (0, y.jsx)(e7, { compact: n });
          default:
            return null;
        }
      }
      function e3(e) {
        var t = e.searchQuery,
          n = e.isComplete,
          r = e.compact,
          a = function (e) {
            var n = ea.ZP.getBingLink({ query: t });
            return (0, y.jsx)("a", {
              href: n,
              target: "_blank",
              rel: "noreferrer",
              className: "text-green-600",
              children: e,
            });
          };
        return (0, y.jsx)(tn, {
          icon: C.jRj,
          compact: r,
          children: n
            ? (0, y.jsx)(
                _.Z,
                (0, em._)((0, x._)({}, e1.searchFinished), {
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
                (0, em._)((0, x._)({}, e1.searchInProgress), {
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
      function e4(e) {
        var t,
          n = e.pageInfo,
          r = e.compact;
        return (0, y.jsx)(tn, {
          icon: C.PS6,
          compact: r,
          children: n
            ? !0 === r
              ? (0, y.jsx)(_.Z, (0, x._)({}, e1.clickFinished))
              : (0, y.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, y.jsx)(_.Z, (0, x._)({}, e1.clickFinishedWithLink)),
                    (0, y.jsx)("div", {
                      className:
                        "rounded border border-black/10 bg-white px-2 py-1",
                      children: (0, y.jsx)(e$.Op, {
                        pageInfo: n,
                        onClick: function () {
                          return eO.m.logEvent(
                            "chatgpt_browsing_click_link",
                            n.url,
                            {
                              domain:
                                null !==
                                  (t = eH.get(new URL(n.url).hostname)) &&
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
            : (0, y.jsx)(_.Z, (0, x._)({}, e1.clickInProgress)),
        });
      }
      function e6(e) {
        var t = e.compact;
        return (0, y.jsx)(tn, {
          icon: C.SnF,
          compact: t,
          children: (0, y.jsx)(_.Z, (0, x._)({}, e1.quote)),
        });
      }
      function e8(e) {
        var t = e.compact;
        return (0, y.jsx)(tn, {
          icon: C.cww,
          compact: t,
          children: (0, y.jsx)(_.Z, (0, x._)({}, e1.back)),
        });
      }
      function e7(e) {
        var t = e.compact;
        return (0, y.jsx)(tn, {
          icon: C.nlg,
          compact: t,
          children: (0, y.jsx)(_.Z, (0, x._)({}, e1.scroll)),
        });
      }
      function e9(e) {
        var t,
          n = e.commandType,
          r = e.compact;
        switch (n) {
          case "search":
            t = e1.searchError;
            break;
          case "click":
          case "open_url":
            t = e1.clickError;
            break;
          case "quote":
          case "quote_full":
            t = e1.quoteError;
            break;
          case "back":
            t = e1.backError;
            break;
          case "scroll":
            t = e1.scrollError;
            break;
          default:
            return null;
        }
        return (0, y.jsx)(tn, {
          icon: C.bcx,
          compact: r,
          children: (0, y.jsx)(_.Z, (0, x._)({}, t)),
        });
      }
      function te(e) {
        var t = e.compact;
        return (0, y.jsx)(tn, {
          icon: C.jRj,
          compact: t,
          children: (0, y.jsx)(_.Z, (0, x._)({}, e1.startingBrowsing)),
        });
      }
      function tt(e) {
        var t = e.compact;
        return (0, y.jsx)(tn, {
          icon: C._rq,
          compact: t,
          children: (0, y.jsx)(_.Z, (0, x._)({}, e1.finishedBrowsing)),
        });
      }
      function tn(e) {
        var t = e.children,
          n = e.icon,
          r = e.compact;
        return (0, y.jsxs)("div", {
          className: (0, z.Z)(
            "flex items-center gap-2",
            !0 !== r && "min-h-[24px]"
          ),
          children: [
            (0, y.jsx)(el.ZP, { icon: n, className: "shrink-0" }),
            (0, y.jsx)("div", { children: t }),
          ],
        });
      }
      function tr(e) {
        var t, n;
        return (
          (null === (t = e.metadata) || void 0 === t ? void 0 : t.command) ===
            "quote" ||
          (null === (n = e.metadata) || void 0 === n ? void 0 : n.command) ===
            "quote_full"
        );
      }
      var ta = n(86546),
        ti = n(87105),
        ts = {},
        to = {};
      function tl(e) {
        var t = e.message,
          n = e.outputMessage,
          r = e.clientThreadId,
          a = e.isComplete,
          i = (0, ta.F)().theme,
          s = (0, en.WS)();
        (0, w.useEffect)(
          function () {
            ts[t.message.id] ||
              (s(er.s6.renderTool2Message, {
                id: t.message.id,
                finishedExecuting: a,
              }),
              (ts[t.message.id] = !0));
          },
          [s, t, a]
        );
        var o = (0, w.useCallback)(
            function () {
              to[t.message.id] ||
                (s(er.s6.expandTool2Message, {
                  id: t.message.id,
                  finishedExecuting: a,
                }),
                (to[t.message.id] = !0));
            },
            [s, t, a]
          ),
          l = (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsx)("div", {
                className: "mt-3 self-stretch",
                children: (0, y.jsx)(ti.Z, {
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
                  children: (0, y.jsx)(ew, { message: n, isCollapsed: !0 }),
                }),
            ],
          });
        return (0, y.jsx)(eY, {
          expanderClosedLabel: "Show work",
          expanderOpenLabel: "Hide work",
          isComplete: a,
          results: l,
          onExpand: o,
          children: a ? "Finished working" : "Working...",
        });
      }
      var tu = n(63390);
      function tc(e) {
        var t = e.messages,
          n = e.clientThreadId,
          r = e.isCompletionInProgress,
          a = e.isCompletion,
          i = e.onRequestMoreCompletions,
          s = (0, w.useMemo)(
            function () {
              return [
                t.reduce(function (e, t) {
                  return null == t.err ? e + (0, eq.RR)(t.message) : e;
                }, ""),
              ];
            },
            [t]
          );
        return (0, y.jsx)(tu.Cf, {
          clientThreadId: n,
          parts: s,
          format: !0,
          isCompletion: a,
          isCompletionInProgress: r,
          id: "",
          onRequestMoreCompletions: i,
        });
      }
      var td = n(2368),
        tm = n(86573);
      function tf(e) {
        return (0, eq.qi)(e) && !(0, eq.oH)(e);
      }
      function th() {
        var e = (0, q._)(["grid gap-4\n", ""]);
        return (
          (th = function () {
            return e;
          }),
          e
        );
      }
      var tg = (0, M.vU)({
        generatedImage: {
          id: "pluginDisplayParams.generatedImage",
          defaultMessage: "Generated by plugin",
          description:
            "Description text for an image that was generated by a plugin",
        },
      });
      function tp(e) {
        var t,
          n,
          r,
          a = e.plugin,
          i = e.pluginMessage,
          s = e.toolMessage;
        if ("plugin-bd1fbb6d-40f9-4159-8da9-7a8975c5793b" !== a.id) return null;
        var o = !1,
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
                    var s = a.value,
                      o = e.trimEnd().endsWith(",")
                        ? e.trimEnd().slice(0, -1)
                        : e;
                    try {
                      return {
                        result: JSON.parse(o + s),
                        isComplete: "" === s,
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
              (o = m),
              (null == t ? void 0 : t.image_shape) != null &&
                (l = t.image_shape);
          } catch (e) {}
        var f = !1;
        if (null != s) {
          if ("text" === s.content.content_type) {
            try {
              n = JSON.parse(s.content.parts[0]);
            } catch (e) {}
            if ((null == n ? void 0 : n.images) != null)
              return (0, y.jsx)(tv, { imageUrls: n.images, gridItemShape: l });
          }
          f = !0;
        }
        return (null == t ? void 0 : t.prompts) != null
          ? (0, y.jsx)(tx, {
              numItems:
                null !== (r = null == t ? void 0 : t.n) && void 0 !== r
                  ? r
                  : Math.max(t.prompts.length, 1),
              prompts: t.prompts,
              gridItemShape: l,
              isPromptListComplete: null != o && o,
              showErrorState: f || tf(i),
            })
          : null;
      }
      function tx(e) {
        for (
          var t = e.numItems,
            n = e.prompts,
            r = e.gridItemShape,
            a = e.isPromptListComplete,
            i = e.showErrorState,
            s = [],
            o = 0;
          o < t;
          o++
        ) {
          var l = n[o],
            u = o < n.length - 1 || a || i;
          s.push(
            (0, y.jsx)(
              tb,
              {
                className: (0, z.Z)("text-sm", i && "text-gray-500"),
                shape: r,
                bgColor: i ? "medium" : null == l ? "dark" : "light",
                children: (0, y.jsx)(eE.default, {
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
                        (0, y.jsx)(el.ZP, {
                          icon: C.bcx,
                          className: "self-center text-gray-400",
                        }),
                    ],
                  }),
                }),
              },
              o
            )
          );
        }
        return (0, y.jsx)(tj, { $numItems: t, children: s });
      }
      function tv(e) {
        var t = e.imageUrls,
          n = e.gridItemShape,
          r = t.map(function (e, t) {
            return (0, y.jsx)(ty, { imageUrl: e, shape: n }, t);
          });
        return (0, y.jsx)(tj, { $numItems: r.length, children: r });
      }
      function tb(e) {
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
      function ty(e) {
        var t = e.imageUrl,
          n = e.shape,
          r = (0, ee.Z)();
        return (0, y.jsx)(tb, {
          shape: n,
          children: (0, y.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            children: (0, y.jsx)("img", {
              src: t,
              alt: r.formatMessage(tg.generatedImage),
            }),
          }),
        });
      }
      ((r = c || (c = {})).WIDE = "wide"),
        (r.SQUARE = "square"),
        (r.TALL = "tall");
      var tj = et.Z.div(th(), function (e) {
        return 1 === e.$numItems ? "grid-cols-1" : "grid-cols-2";
      });
      function tk() {
        var e = (0, q._)([
          "flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800",
        ]);
        return (
          (tk = function () {
            return e;
          }),
          e
        );
      }
      function tw() {
        var e = (0, q._)([
          "flex items-center gap-1 rounded-[5px] bg-red-200 py-0.5 px-1.5 text-xs font-medium uppercase text-red-800",
        ]);
        return (
          (tw = function () {
            return e;
          }),
          e
        );
      }
      var tC = et.Z.div(tk());
      function t_() {
        return (0, y.jsx)(tC, {
          children: (0, y.jsx)(el.ZP, {
            icon: C.OH,
            className: "h-3 w-3",
            strokeWidth: 2.5,
          }),
        });
      }
      function tM() {
        return (0, y.jsx)(tC, {
          children: (0, y.jsx)(el.ZP, { icon: C.V7f, className: "h-3 w-3" }),
        });
      }
      var tN = et.Z.div(tw());
      function tP() {
        return (0, y.jsxs)(tN, {
          children: [
            (0, y.jsx)(el.ZP, {
              icon: C.OH,
              className: "h-3 w-3",
              strokeWidth: 2.5,
            }),
            (0, y.jsx)("div", { children: "Unverified" }),
          ],
        });
      }
      function tZ() {
        return (0, y.jsxs)(tN, {
          children: [
            (0, y.jsx)(el.ZP, { icon: C.V7f, className: "h-3 w-3" }),
            (0, y.jsx)("div", { children: "Localhost" }),
          ],
        });
      }
      var tT = n(31721),
        tI = n(57924),
        tS = w.memo(function (e) {
          var t,
            n = e.messages,
            r = (0, b._)(n, 2),
            a = r[0],
            i = r[1],
            s = (0, tT.v)(),
            o = (0, eq.fj)(a.message.recipient),
            l = s.find(function (e) {
              return e.namespace === (null == o ? void 0 : o.pluginNamespace);
            }),
            u = null == l ? void 0 : l.manifest.name_for_human,
            c = tf(a.message),
            d = null != u ? (0, y.jsx)("b", { children: u }) : "unknown plugin",
            m =
              null != i
                ? (0, y.jsxs)("div", { children: ["Used ", d] })
                : c
                ? (0, y.jsxs)("div", { children: ["Tried to use ", d] })
                : (0, y.jsxs)("div", { children: ["Using ", d, "..."] });
          return (
            l &&
              ((0, tm.cf)(l)
                ? (t = (0, y.jsx)(tZ, {}))
                : "approved" !== l.status && (t = (0, y.jsx)(tP, {}))),
            (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(eY, {
                  isComplete: null != i || c,
                  results: (0, y.jsx)(tD, {
                    pluginName: null != u ? u : "unknown plugin",
                    pluginMessage: a,
                    toolMessage: i,
                  }),
                  children: (0, y.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [m, t],
                  }),
                }),
                null != l &&
                  (0, y.jsx)(tp, {
                    plugin: l,
                    pluginMessage: a.message,
                    toolMessage: null == i ? void 0 : i.message,
                  }),
              ],
            })
          );
        });
      function tD(e) {
        var t = e.pluginName,
          n = e.pluginMessage,
          r = e.toolMessage,
          a = (0, eq.RR)(n.message),
          i = r ? (0, eq.RR)(r.message) : null;
        try {
          (a = JSON.stringify(JSON.parse(a), null, 2)),
            null != i && (i = JSON.stringify(JSON.parse(i), null, 2));
        } catch (e) {}
        var s =
          (null == r ? void 0 : r.message.author.name) === "plugin_service";
        return (0, y.jsxs)("div", {
          className: "my-3 flex max-w-full flex-col gap-3",
          children: [
            (0, y.jsx)(tR, {
              title: "Request to ".concat(t),
              infoTooltip: n.message.recipient,
              children: a,
            }),
            null != i &&
              (0, y.jsx)(tR, {
                title: s ? "Error" : "Response from ".concat(t),
                infoTooltip: n.message.recipient,
                children: (0, y.jsx)("span", {
                  className: (0, z.Z)(s && "text-red-500"),
                  children: i,
                }),
              }),
          ],
        });
      }
      function tR(e) {
        var t = e.title,
          n = e.infoTooltip,
          r = e.children;
        return (0, y.jsx)(td.$, {
          title: (0, y.jsx)("span", { className: "uppercase", children: t }),
          headerDecoration:
            void 0 !== n
              ? (0, y.jsx)(tI.u, {
                  label: n,
                  children: (0, y.jsx)(el.ZP, {
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
      var tA = n(85449),
        tE = n(90076);
      function tB() {
        var e = (0, q._)([""]);
        return (
          (tB = function () {
            return e;
          }),
          e
        );
      }
      function tF() {
        var e = (0, q._)(["flex flex-grow flex-col gap-3"]);
        return (
          (tF = function () {
            return e;
          }),
          e
        );
      }
      function tL() {
        var e = (0, q._)(["flex p-4 gap-4 ", ""]);
        return (
          (tL = function () {
            return e;
          }),
          e
        );
      }
      function tO() {
        var e = (0, q._)(["flex-shrink-0 flex flex-col relative items-end"]);
        return (
          (tO = function () {
            return e;
          }),
          e
        );
      }
      function tU() {
        var e = (0, q._)([
          "p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2",
        ]);
        return (
          (tU = function () {
            return e;
          }),
          e
        );
      }
      function tq() {
        var e = (0, q._)(["p-1 ", ""]);
        return (
          (tq = function () {
            return e;
          }),
          e
        );
      }
      function tz() {
        var e = (0, q._)([
          "text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n",
          "",
        ]);
        return (
          (tz = function () {
            return e;
          }),
          e
        );
      }
      function tQ() {
        var e = (0, q._)([
          "text-center p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs ",
          "",
        ]);
        return (
          (tQ = function () {
            return e;
          }),
          e
        );
      }
      function tW() {
        var e = (0, q._)([
          "flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm",
        ]);
        return (
          (tW = function () {
            return e;
          }),
          e
        );
      }
      var tH = ["#ab68ff"];
      ((a = d || (d = {}))[(a.Text = 0)] = "Text"),
        (a[(a.MultiText = 1)] = "MultiText"),
        (a[(a.Browsing = 2)] = "Browsing"),
        (a[(a.Code = 3)] = "Code"),
        (a[(a.CodeExecutionOutput = 4)] = "CodeExecutionOutput"),
        (a[(a.Plugin = 5)] = "Plugin");
      var t$ = "#19c37d",
        tG = "openai",
        tV = "#1a7f64",
        tJ = w.memo(function (e) {
          var t,
            n,
            r,
            a,
            i = e.turnIndex,
            s = e.conversationLeafId,
            o = e.isFinalTurn,
            l = e.clientThreadId,
            u = e.onChangeItemInView,
            c = e.onChangeRating,
            m = e.onRequestMoreCompletions,
            f = e.onDeleteNode,
            h = e.onRequestCompletion,
            g = e.onUpdateNode,
            p = e.onHandleChangeVariantFeedbackInlineComparisonRating,
            v = e.activeRequests,
            j = e.showInlineEmbeddedDisplay,
            k = void 0 !== j && j,
            _ = e.currentModelId,
            M = e.initiallyHighlightedMessageId,
            P = e.avatarColor,
            Z = e.includeChatPreferencesMismatchDisclaimer,
            T = (0, w.useContext)(A.gB),
            I = (0, R.ec)(R.F_.isBusinessWorkspace),
            S = (0, N.GD)(l, i, s),
            B = S.role,
            F = S.messages,
            L = S.variantIds,
            O = (0, ep.kP)().session,
            U = (0, E.x_)(),
            q = (0, en.WS)(),
            Q = (0, b._)((0, w.useState)(!1), 2),
            W = Q[0],
            H = Q[1],
            $ = (0, w.useMemo)(
              function () {
                return L.findIndex(function (e) {
                  return e === F[0].nodeId;
                });
              },
              [L, F]
            ),
            G = B !== eU.uU.User,
            V = (0, w.useContext)(A.QL).historyDisabled,
            J = (0, R.hz)().has(ei.FZ),
            Y = (0, eB.Fl)(),
            K = Y.isBrowsingAvailable,
            X = Y.isPluginsAvailable,
            ee = Y.isCodeInterpreterAvailable,
            et = (0, D.tN)(function (e) {
              return e.isDesktopNavCollapsed;
            }),
            ea = F.some(function (e) {
              return e.message.content.content_type === eU.PX.MultimodalText;
            }),
            es = K || X || ee,
            eo = (0, w.useRef)(null);
          (0, w.useEffect)(
            function () {
              var e;
              null != M &&
                S.messages
                  .map(function (e) {
                    return e.message.id;
                  })
                  .includes(M) &&
                (null === (e = eo.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ behavior: "auto" }));
            },
            [M]
          );
          var eu = F[F.length - 1],
            ec = (0, b._)((0, w.useState)(eu.rating), 2),
            ed = ec[0],
            ef = ec[1],
            eh = (0, R.hz)(),
            eg = (0, tT.v)(),
            ex = (0, w.useMemo)(
              function () {
                return (
                  (G &&
                    (null == F ? void 0 : F[0]) != null &&
                    (0, eq.Rc)(F[0].message)) ||
                  _
                );
              },
              [G, F, _]
            ),
            ev = (0, w.useCallback)(
              function () {
                1 === F.length &&
                  (q(
                    B === eU.uU.User ? er.s6.editPrompt : er.s6.editCompletion,
                    { id: F[0].message.id, threadId: N.tQ.getServerThreadId(l) }
                  ),
                  H(!0));
              },
              [F, q, B, l]
            ),
            eb = (0, w.useCallback)(function () {
              H(!1);
            }, []),
            ey = (0, w.useCallback)(
              function () {
                var e = F.reduce(function (e, t) {
                  return t.err ||
                    t.message.author.role !== eU.uU.Assistant ||
                    "all" !== t.message.recipient
                    ? e
                    : e + (e ? "\n\n" : "") + (0, eq.RR)(t.message);
                }, "");
                navigator.clipboard.writeText(e),
                  q(er.s6.copyToClipboard, {
                    threadId: N.tQ.getServerThreadId(l),
                    id: F[0].message.id,
                    eventSource: "mouse",
                    model: ex,
                  }),
                  eO.m.logEvent("chatgpt_copy_to_clipboard");
              },
              [ex, q, F, l]
            ),
            ej = (0, w.useCallback)(
              function (e) {
                c(eu.nodeId, eu.message.id, e), ef(e);
              },
              [eu, c]
            ),
            ek = (0, b._)((0, w.useState)(eu.inlineComparisonRating), 2),
            eC = ek[0],
            e_ = ek[1];
          (0, w.useEffect)(
            function () {
              ef(function (e) {
                return null != e ? e : eu.rating;
              }),
                e_(function (e) {
                  return null != e ? e : eu.inlineComparisonRating;
                });
            },
            [eu]
          );
          var eM = (0, w.useMemo)(
              function () {
                return ez.Cv.getRequestIdFromConversationTurn(S);
              },
              [S]
            ),
            eN = (0, w.useMemo)(
              function () {
                return v.has(eM);
              },
              [v, eM]
            ),
            eP = (0, w.useMemo)(
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
            eZ = (0, w.useMemo)(
              function () {
                if (G) {
                  var e,
                    t,
                    n = N.tQ.getTree(l),
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
                  if (ex && a && ex !== a)
                    return tE.n2.has(a)
                      ? "The previous model used in this conversation has been deprecated. We've switched you to the latest default model."
                      : "The previous model used in this conversation is unavailable. We've switched you to the latest default model.";
                }
                return null;
              },
              [ex, G, F, l]
            ),
            eT = (0, w.useMemo)(
              function () {
                if (!es) return { avatarIcon: tG, avatarColor: t$ };
                if (eN && F.length > 0) {
                  var e = F[F.length - 1],
                    t = (0, eq.rH)(e.message);
                  switch (t) {
                    case eq.Cs.Text:
                      if ((0, eq.RR)(e.message).length > 0 || F.length > 1)
                        return { avatarIcon: "text", avatarColor: tV };
                      break;
                    case eq.Cs.Browsing:
                    case eq.Cs.BrowseTool:
                      return { avatarIcon: "browsing", avatarColor: tV };
                    case eq.Cs.Code:
                    case eq.Cs.CodeExecutionOutput:
                      return { avatarIcon: "code", avatarColor: tV };
                    case eq.Cs.Plugin:
                    case eq.Cs.PluginTool:
                      var n = (0, eq.fj)(
                          t === eq.Cs.Plugin
                            ? e.message.recipient
                            : e.message.author.name
                        ),
                        r = eg.find(function (e) {
                          return (
                            e.namespace ===
                            (null == n ? void 0 : n.pluginNamespace)
                          );
                        });
                      if (r) return { avatarPlugin: r };
                      return { avatarIcon: "plugin", avatarColor: tV };
                  }
                }
                return { avatarIcon: tG, avatarColor: t$ };
              },
              [es, eN, F, eg]
            ),
            eI = eT.avatarIcon,
            eS = eT.avatarColor,
            eD = eT.avatarPlugin,
            eR = (0, w.useCallback)(
              function (e, t, n, r) {
                N.tQ.updateTree(l, function (a) {
                  var i = a.getParentId(e);
                  a.addNode(t, n, i, eU.Jq.Prompt, void 0, r);
                });
              },
              [l]
            ),
            eA = (0, w.useMemo)(
              function () {
                var e = [];
                return (
                  F.forEach(function (t, n) {
                    var r = (0, eq.rH)(t.message),
                      a = null == F ? void 0 : F[n - 1],
                      i =
                        null != a &&
                        ((0, eq.lD)(a.message) || (0, eq.qs)(t.message)),
                      s = r === eq.Cs.Text && (0, eq.RR)(t.message);
                    if (r === eq.Cs.Browsing || r === eq.Cs.BrowseTool) {
                      var o = e[e.length - 1];
                      (null == o ? void 0 : o.type) === d.Browsing
                        ? o.messages.push(t)
                        : e.push({ type: d.Browsing, messages: [t] });
                    } else if (r === eq.Cs.Plugin || r === eq.Cs.PluginTool) {
                      var l = e[e.length - 1];
                      r === eq.Cs.PluginTool &&
                      (null == l ? void 0 : l.type) === d.Plugin
                        ? l.messages.push(t)
                        : e.push({ type: d.Plugin, messages: [t] });
                    } else if (r === eq.Cs.Code)
                      e.push({ type: d.Code, message: t });
                    else if (r === eq.Cs.CodeExecutionOutput)
                      e.push({ type: d.CodeExecutionOutput, message: t });
                    else if (i && null != s) {
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
                        y.jsx)(tu.ZP, { className: "min-h-[20px]", message: t.message, isEditing: W, format: G, isCompletionInProgress: a && eN, onCreateEditNode: eR, clientThreadId: l, onUpdateNode: g, onDeleteNode: f, onChangeItemInView: u, onRequestCompletion: h, onExitEdit: eb, disabled: 0 !== v.size, isCompletion: G, onRequestMoreCompletions: m, isResponseToPluginMessage: (null === (r = e[n - 1]) || void 0 === r ? void 0 : r.type) === d.Plugin }, t.message.nodeId);
                      case d.MultiText:
                        return (0,
                        y.jsx)(tc, { clientThreadId: l, messages: t.messages, isCompletionInProgress: a && eN, isCompletion: G, onRequestMoreCompletions: m }, n);
                      case d.Browsing:
                        var i = t.messages[t.messages.length - 1];
                        return (0,
                        y.jsx)(e2, { messages: t.messages, isComplete: !o || !a || 0 === v.size || tf(i.message) }, t.messages[0].nodeId);
                      case d.Code:
                        var s,
                          c,
                          p = e[n + 1],
                          x =
                            p && p.type === d.CodeExecutionOutput
                              ? p.message
                              : void 0;
                        return (0,
                        y.jsx)(tl, { clientThreadId: l, message: t.message, outputMessage: x, isComplete: !o || !a || 0 === v.size || ((null == (c = null === (s = null == x ? void 0 : x.message.metadata) || void 0 === s ? void 0 : s.aggregate_result) ? void 0 : c.status) !== void 0 && (null == c ? void 0 : c.status) !== "running") || tf(t.message.message) }, t.message.nodeId);
                      case d.CodeExecutionOutput:
                        return (0,
                        y.jsx)(ew, { message: t.message, isCollapsed: !1 }, t.message.nodeId);
                      case d.Plugin:
                        return (0,
                        y.jsx)(tS, { messages: t.messages }, t.messages[0].nodeId);
                      default:
                        return null;
                    }
                  })
                );
              },
              [F, W, G, eN, eR, l, g, f, u, h, eb, v.size, m, o]
            ),
            eE = (0, N.r7)(l),
            eF =
              eh.has(ei.st) &&
              !I &&
              !T &&
              !eE &&
              U &&
              G &&
              !eN &&
              !k &&
              !W &&
              1 === $ &&
              o &&
              !eC &&
              !ed &&
              2 === L.length &&
              Date.now() -
                (null !== (r = eu.message.create_time) && void 0 !== r
                  ? r
                  : 0) *
                  1e3 <
                6e5,
            eH = (0, w.useRef)(Date.now()),
            e$ = (0, w.useRef)(
              (null !== (a = eu.message.create_time) && void 0 !== a
                ? a
                : Date.now()) * 1e3
            ),
            eG = (0, w.useRef)(Date.now());
          (0, w.useEffect)(
            function () {
              eN || (eG.current = Date.now());
            },
            [eN]
          );
          var eV = (0, w.useCallback)(
              function (e) {
                if (eF) {
                  var t,
                    n,
                    r = N.tQ.getTree(l),
                    a = L[0] || "",
                    i = (null == r ? void 0 : r.getConversationTurns(a)) || [],
                    s = i[i.length - 1],
                    o = (null == s ? void 0 : s.messages) || [],
                    u = o[o.length - 1],
                    c =
                      (null == u
                        ? void 0
                        : null === (t = u.message) || void 0 === t
                        ? void 0
                        : t.id) || "",
                    d = L[1] || "",
                    m = (null == r ? void 0 : r.getConversationTurns(d)) || [],
                    f = m[m.length - 1],
                    h = (null == f ? void 0 : f.messages) || [],
                    g = h[h.length - 1];
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
                    N.tQ.updateTree(l, function (t) {
                      t.updateNode(eu.nodeId, {
                        metadata: {
                          $set: (0, em._)(
                            (0, x._)({}, t.getMetadata(eu.nodeId)),
                            { inlineComparisonRating: e }
                          ),
                        },
                      });
                    }),
                    e_(e),
                    N.tQ.updateTree(l, function (e) {
                      e.updateNode(u.nodeId, {
                        metadata: {
                          $set: (0, em._)(
                            (0, x._)({}, e.getMetadata(u.nodeId)),
                            { inlineComparisonRating: "baseline" }
                          ),
                        },
                      });
                    });
                }
              },
              [eF, eu.nodeId, p, l, L]
            ),
            eJ = (0, w.useCallback)(
              function () {
                N.tQ.updateTree(l, function (e) {
                  e.updateNode(eu.nodeId, {
                    metadata: {
                      $set: (0, em._)((0, x._)({}, e.getMetadata(eu.nodeId)), {
                        inlineComparisonRating: "skip",
                      }),
                    },
                  });
                }),
                  e_("skip");
              },
              [eu.nodeId, l]
            ),
            eY = G && !k && !T && !eE,
            eK = !T && !k && !W,
            eX = !G && !k && !T && !ea && 1 === F.length && !W;
          if (S.role === eU.uU.Unknown || S.role === eU.uU.System)
            return Z ? (0, y.jsx)(tY, { isPostMessage: !1 }) : null;
          var e0 = eX
              ? (0, y.jsx)(t5, {
                  $isMessageRedesign: J,
                  onClick: ev,
                  className: (0, z.Z)(
                    !J && U && "md:invisible md:group-hover:visible"
                  ),
                  children: (0, y.jsx)(el.ZP, { icon: C.vPQ }),
                })
              : null,
            e1 =
              G && !k
                ? (0, y.jsx)(eW.Z, {
                    onCopy: ey,
                    className: (0, z.Z)(
                      "rounded-md p-1",
                      J
                        ? "text-gray-500 hover:text-gray-700 dark:hover:text-gray-400"
                        : "hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"
                    ),
                  })
                : null,
            e5 =
              eY && !I
                ? (0, y.jsxs)("div", {
                    className: "flex gap-1",
                    children: [
                      "thumbsDown" !== ed &&
                        !V &&
                        (0, y.jsx)(
                          t5,
                          {
                            $isMessageRedesign: J,
                            onClick: function () {
                              return ej("thumbsUp");
                            },
                            disabled: "thumbsUp" === ed,
                            className: (0, z.Z)(
                              "thumbsUp" === ed &&
                                (J
                                  ? "bg-gray-100 dark:bg-gray-700"
                                  : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")
                            ),
                            children: (0, y.jsx)(el.ZP, { icon: C.fmn }),
                          },
                          "thumbsUp:".concat(eu.nodeId)
                        ),
                      "thumbsUp" !== ed &&
                        !V &&
                        (0, y.jsx)(
                          t5,
                          {
                            $isMessageRedesign: J,
                            onClick: function () {
                              return ej("thumbsDown");
                            },
                            disabled: "thumbsDown" === ed,
                            className: (0, z.Z)(
                              "thumbsDown" === ed &&
                                (J
                                  ? "bg-gray-100 dark:bg-gray-700"
                                  : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")
                            ),
                            children: (0, y.jsx)(el.ZP, { icon: C.oLd }),
                          },
                          "thumbsDown:".concat(eu.nodeId)
                        ),
                    ],
                  })
                : null,
            e3 =
              eF && !V
                ? (0, y.jsxs)(t6, {
                    children: [
                      (0, y.jsx)("div", {
                        className: (0, z.Z)("mr-4"),
                        children: "Was this response better or worse?",
                      }),
                      (0, y.jsxs)(t2, {
                        onClick: function () {
                          return eV("new");
                        },
                        title:
                          "This response was better than the previous response",
                        children: [
                          (0, y.jsx)(el.ZP, {
                            icon: C.fmn,
                            className: (0, z.Z)("mr-1"),
                          }),
                          "Better",
                        ],
                      }),
                      (0, y.jsxs)(t2, {
                        onClick: function () {
                          return eV("original");
                        },
                        title:
                          "This response was worse than the previous response",
                        children: [
                          (0, y.jsx)(el.ZP, {
                            icon: C.oLd,
                            className: (0, z.Z)("mr-1"),
                          }),
                          "Worse",
                        ],
                      }),
                      (0, y.jsxs)(t2, {
                        onClick: function () {
                          return eV("same");
                        },
                        title: "This response was the same in quality",
                        children: [
                          (0, y.jsx)(el.ZP, {
                            icon: eL.Ny3,
                            className: (0, z.Z)(
                              "mr-1 rounded-full border border-gray-400 dark:border-gray-300"
                            ),
                          }),
                          "Same",
                        ],
                      }),
                      (0, y.jsx)(t2, {
                        onClick: eJ,
                        title: "Skip this comparison",
                        children: (0, y.jsx)(el.ZP, {
                          icon: C.q5L,
                          size: "medium",
                        }),
                      }),
                    ],
                  })
                : null,
            e4 = eK && L.length > 1,
            e6 = function () {
              return (0, y.jsxs)("div", {
                className: "flex gap-1",
                children: [e5, e0, e1],
              });
            },
            e8 =
              null === (n = F[0].message.metadata) || void 0 === n
                ? void 0
                : n.shared_conversation_id,
            e7 = null != e8;
          return (0, y.jsxs)(tK, {
            className: (0, z.Z)(
              "group",
              "w-full text-gray-800 dark:text-gray-100",
              J
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
              eZ && (0, y.jsx)(t4, { children: eZ }),
              (0, y.jsxs)(t0, {
                $isDesktopNavCollapsed: et,
                $isMessageRedesign: J,
                className: (0, z.Z)(k ? "ml-5" : "m-auto"),
                children: [
                  (0, y.jsxs)(t1, {
                    children: [
                      (0, y.jsx)("div", {
                        className: J ? "" : "w-[30px]",
                        children: G
                          ? eD
                            ? (0, y.jsx)(eQ.Ph, {
                                plugin: eD,
                                notice: eP || void 0,
                              })
                            : (0, y.jsx)(eQ.k$, {
                                background: null != P ? P : eS,
                                iconName: eI,
                                notice: eP || void 0,
                              })
                          : e7 || k
                          ? (0, y.jsx)(eQ.k$, {
                              background:
                                tH[
                                  (null !==
                                    (t =
                                      null == e8 ? void 0 : e8.charCodeAt(0)) &&
                                  void 0 !== t
                                    ? t
                                    : 0) % tH.length
                                ],
                              iconName: "user",
                            })
                          : (0, y.jsx)(eQ.Yt, {
                              user: null == O ? void 0 : O.user,
                              notice: eP || void 0,
                              size: J ? "redesign" : "medium",
                            }),
                      }),
                      !J &&
                        eK &&
                        U &&
                        (0, y.jsx)(tA.Z, {
                          currentPage: $,
                          onChangeIndex: function (e) {
                            return u(L[e]);
                          },
                          length: L.length,
                          className: (0, z.Z)(
                            "invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible",
                            L.length > 1 ? "visible" : "!invisible"
                          ),
                        }),
                    ],
                  }),
                  (0, y.jsxs)("div", {
                    className: (0, z.Z)(
                      "relative",
                      J
                        ? "min-w-0 grow"
                        : "flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"
                    ),
                    children: [
                      J &&
                        (0, y.jsx)("div", {
                          className:
                            "mb-1 select-none text-xs font-medium tracking-wide text-gray-400",
                          children: G ? "ChatGPT" : e7 ? "User" : "You",
                        }),
                      (0, y.jsx)(tX, { children: eA }),
                      J
                        ? (!U || e4 || null != e3) &&
                          !k &&
                          (0, y.jsxs)("div", {
                            className: "mt-2 flex flex-col gap-4",
                            children: [
                              (0, y.jsxs)("div", {
                                className: "flex gap-2 text-gray-400",
                                children: [
                                  e4 &&
                                    (0, y.jsx)(tA.Z, {
                                      currentPage: $,
                                      onChangeIndex: function (e) {
                                        return u(L[e]);
                                      },
                                      length: L.length,
                                      className:
                                        "rounded-xl border border-gray-100 bg-white p-1 dark:border-gray-600 dark:bg-gray-700",
                                    }),
                                  !U && e6(),
                                ],
                              }),
                              e3,
                            ],
                          })
                        : (0, y.jsxs)(y.Fragment, {
                            children: [
                              eX &&
                                U &&
                                (0, y.jsx)(t3, {
                                  $hidden: 0 !== v.size,
                                  children: e0,
                                }),
                              (eY || eK) &&
                                (0, y.jsxs)("div", {
                                  className: "flex justify-between lg:block",
                                  children: [
                                    !U &&
                                      eK &&
                                      (0, y.jsx)(tA.Z, {
                                        currentPage: $,
                                        onChangeIndex: function (e) {
                                          return u(L[e]);
                                        },
                                        length: L.length,
                                        className: (0, z.Z)(
                                          "self-center pt-2",
                                          L.length > 1
                                            ? "visible"
                                            : "!invisible"
                                        ),
                                      }),
                                    eX &&
                                      !U &&
                                      (0, y.jsx)(t3, {
                                        $hidden: eN,
                                        children: e0,
                                      }),
                                    eY &&
                                      (0, y.jsxs)(t3, {
                                        $hidden: eN,
                                        children: [e1, e5],
                                      }),
                                    eF && !V && e3,
                                  ],
                                }),
                            ],
                          }),
                    ],
                  }),
                  J &&
                    U &&
                    !W &&
                    !k &&
                    (!T || G) &&
                    (0, y.jsx)("div", {
                      className:
                        "absolute -top-4 right-4 hidden rounded bg-white p-1 shadow-[0_0.5px_2px_rgba(0,0,0,0.15)] group-hover:block dark:bg-gray-900",
                      children: e6(),
                    }),
                ],
              }),
              Z && (0, y.jsx)(tY, { isPostMessage: !0 }),
            ],
          });
        }),
        tY = function (e) {
          var t = e.isPostMessage;
          return (0, y.jsx)(t4, {
            $isPostMessage: t,
            children:
              "Your info has changed since the start of this chat. Please start a new chat to see changes reflected",
          });
        },
        tK = et.Z.div(tB()),
        tX = et.Z.div(tF()),
        t0 = et.Z.div(tL(), function (e) {
          return e.$isMessageRedesign
            ? "relative"
            : e.$isDesktopNavCollapsed
            ? "text-base md:gap-6 md:max-w-3xl md:py-6 lg:px-0"
            : "text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0";
        }),
        t1 = et.Z.div(tO()),
        t2 = et.Z.button(tU()),
        t5 = et.Z.button(tq(), function (e) {
          return e.$isMessageRedesign
            ? "text-gray-500 enabled:hover:text-gray-700 enabled:dark:hover:text-gray-400 rounded-sm"
            : "rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400";
        }),
        t3 = et.Z.div(tz(), function (e) {
          return e.$hidden ? "invisible" : "visible";
        }),
        t4 = et.Z.div(tQ(), function (e) {
          return e.$isPostMessage ? "border-t" : "border-b";
        }),
        t6 = et.Z.div(tW()),
        t8 = n(75318);
      function t7() {
        var e = (0, q._)([
          "text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100",
        ]);
        return (
          (t7 = function () {
            return e;
          }),
          e
        );
      }
      function t9() {
        var e = (0, q._)([
          "text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center",
        ]);
        return (
          (t9 = function () {
            return e;
          }),
          e
        );
      }
      function ne() {
        var e = (0, q._)(["md:flex items-start text-center gap-3.5"]);
        return (
          (ne = function () {
            return e;
          }),
          e
        );
      }
      function nt() {
        var e = (0, q._)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
        return (
          (nt = function () {
            return e;
          }),
          e
        );
      }
      function nn() {
        var e = (0, q._)([
          "flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2",
        ]);
        return (
          (nn = function () {
            return e;
          }),
          e
        );
      }
      function nr() {
        var e = (0, q._)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
        return (
          (nr = function () {
            return e;
          }),
          e
        );
      }
      function na() {
        var e = (0, q._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
        return (
          (na = function () {
            return e;
          }),
          e
        );
      }
      function ni() {
        var e = (0, q._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']",
        ]);
        return (
          (ni = function () {
            return e;
          }),
          e
        );
      }
      function ns() {
        var e = (0, q._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900",
        ]);
        return (
          (ns = function () {
            return e;
          }),
          e
        );
      }
      var no = et.Z.div(t7()),
        nl = et.Z.h1(t9()),
        nu = et.Z.div(ne()),
        nc = et.Z.div(nt()),
        nd = et.Z.h2(nn()),
        nm = et.Z.ul(nr()),
        nf = et.Z.li(na());
      et.Z.li(ni());
      var nh = et.Z.button(ns());
      function ng(e) {
        var t = e.text,
          n = e.onChangeCurrentPrompt,
          r = (0, w.useCallback)(
            function () {
              n(t);
            },
            [t, n]
          );
        return (0, y.jsxs)(nh, { onClick: r, children: ['"', t, '" →'] });
      }
      function np(e) {
        var t = function (e) {
            var t;
            null == n ||
              null === (t = n.current) ||
              void 0 === t ||
              t.setInputValue(e);
          },
          n = e.promptTextareaRef;
        return (0, y.jsxs)(no, {
          children: [
            (0, y.jsxs)(nl, { children: ["ChatGPT", (0, y.jsx)(eF.ZP, {})] }),
            (0, y.jsxs)(nu, {
              children: [
                (0, y.jsxs)(nc, {
                  children: [
                    (0, y.jsxs)(nd, {
                      children: [
                        (0, y.jsx)(el.ZP, { icon: C.kXG, size: "medium" }),
                        "Examples",
                      ],
                    }),
                    (0, y.jsxs)(nm, {
                      children: [
                        (0, y.jsx)(ng, {
                          text: "Explain quantum computing in simple terms",
                          onChangeCurrentPrompt: t,
                        }),
                        (0, y.jsx)(ng, {
                          text: "Got any creative ideas for a 10 year old’s birthday?",
                          onChangeCurrentPrompt: t,
                        }),
                        (0, y.jsx)(ng, {
                          text: "How do I make an HTTP request in Javascript?",
                          onChangeCurrentPrompt: t,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, y.jsxs)(nc, {
                  children: [
                    (0, y.jsxs)(nd, {
                      children: [
                        (0, y.jsx)(el.ZP, { icon: t8.Z, size: "medium" }),
                        "Capabilities",
                      ],
                    }),
                    (0, y.jsxs)(nm, {
                      children: [
                        (0, y.jsx)(nf, {
                          children:
                            "Remembers what user said earlier in the conversation",
                        }),
                        (0, y.jsx)(nf, {
                          children:
                            "Allows user to provide follow-up corrections",
                        }),
                        (0, y.jsx)(nf, {
                          children: "Trained to decline inappropriate requests",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, y.jsxs)(nc, {
                  children: [
                    (0, y.jsxs)(nd, {
                      children: [
                        (0, y.jsx)(el.ZP, { icon: C.BJv, size: "medium" }),
                        "Limitations",
                      ],
                    }),
                    (0, y.jsxs)(nm, {
                      children: [
                        (0, y.jsx)(nf, {
                          children:
                            "May occasionally generate incorrect information",
                        }),
                        (0, y.jsx)(nf, {
                          children:
                            "May occasionally produce harmful instructions or biased content",
                        }),
                        (0, y.jsx)(nf, {
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
      var nx = n(37812),
        nv = n(75515),
        nb = n(96237),
        ny = n(90209),
        nj = n(68789),
        nk = n(7137),
        nw = n(76483),
        nC = n(97739),
        n_ = n(2827),
        nM = n(32402),
        nN = n(27009);
      function nP(e) {
        var t = e.disabled,
          n = e.getInputProps,
          r = e.onClick,
          a = (0, ee.Z)();
        return (0, y.jsxs)(tI.u, {
          label: a.formatMessage(nZ.uploadFile),
          side: "top",
          sideOffset: 4,
          children: [
            (0, y.jsx)(eo.z, {
              onClick: function (e) {
                e.preventDefault(), r();
              },
              disabled: t,
              color: "none",
              className:
                "rounded-full bg-gray-500 p-0 text-white hover:bg-black",
              "aria-label": a.formatMessage(nZ.uploadFile),
              children: (0, y.jsx)(el.ZP, { icon: C.OvN, size: "small" }),
            }),
            (0, y.jsx)("input", (0, x._)({}, n({ className: "hidden" }))),
          ],
        });
      }
      var nZ = (0, M.vU)({
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
        nT = n(97688),
        nI = { duration: 20, hasCloseButton: !0 },
        nS = n(56115),
        nD = Math.floor(Math.log(1201) / Math.log(2)),
        nR = { duration: 20, hasCloseButton: !0 },
        nA = n(30931),
        nE = n(97732);
      function nB() {
        return (0, ej.a)(
          ["visionContent"],
          (0, ed._)(function () {
            return (0, ef.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    ea.ZP.getContent("vision").catch(function () {
                      return (
                        nT.m.danger("Failed to load content"),
                        { onboarding: { title: "", content: [] } }
                      );
                    }),
                  ];
                case 1:
                  return [2, e.sent()];
              }
            });
          })
        );
      }
      function nF(e) {
        var t = e.onPick,
          n = (0, b._)((0, w.useState)(!1), 2),
          r = n[0],
          a = n[1],
          i = (0, w.useCallback)(
            function (e, n) {
              a(!1), t(e, n);
            },
            [t]
          ),
          s = (0, ee.Z)(),
          o = nB().data,
          l = (null == o ? void 0 : o.examples) || [];
        return 0 === l.length
          ? null
          : (0, y.jsxs)(eu.fC, {
              onOpenChange: a,
              open: r,
              children: [
                (0, y.jsx)(eu.xz, {
                  asChild: !0,
                  children: (0, y.jsx)("div", {
                    className: "cursor-pointer",
                    children: (0, y.jsx)(tI.u, {
                      label: s.formatMessage(nO.tryAnExample),
                      side: "top",
                      sideOffset: 4,
                      open: !0 !== r && void 0,
                      children: (0, y.jsxs)("div", {
                        children: [
                          (0, y.jsx)(el.ZP, {
                            className: "text-gray-500 dark:text-gray-300",
                            icon: eL.DcN,
                          }),
                          (0, y.jsx)(nx.T, {
                            children: s.formatMessage(nO.tryAnExample),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, y.jsx)(eu.h_, {
                  children: (0, y.jsxs)(eu.VY, {
                    side: "top",
                    sideOffset: 8,
                    className:
                      "relative max-w-md animate-slideUpAndFade select-none rounded-xl border-gray-100 bg-white p-3 text-sm text-gray-600 shadow-xs dark:bg-gray-900 dark:text-white",
                    children: [
                      (0, y.jsxs)("div", {
                        className:
                          "mb-3 flex items-center justify-center gap-2 text-center text-sm font-medium",
                        children: [
                          (0, y.jsx)(el.ZP, {
                            className: "text-gray-500 dark:text-gray-300",
                            icon: eL.DcN,
                          }),
                          (0, y.jsx)(_.Z, (0, x._)({}, nO.tryAnExample)),
                        ],
                      }),
                      (0, y.jsx)("div", {
                        className: "flex flex-col gap-2",
                        children: l.map(function (e) {
                          return (0,
                          y.jsx)(nL, { imageUrl: e.imageUrl, thumbnailUrl: e.thumbnailUrl, label: e.label, prompt: e.prompt, onPick: i }, e.imageUrl);
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            });
      }
      function nL(e) {
        var t = e.imageUrl,
          n = e.thumbnailUrl,
          r = e.label,
          a = e.prompt,
          i = e.onPick,
          s = (0, w.useCallback)(
            (0, ed._)(function () {
              var e, n, r, s, o;
              return (0, ef.Jh)(this, function (l) {
                switch (l.label) {
                  case 0:
                    return l.trys.push([0, 3, , 4]), [4, fetch(t)];
                  case 1:
                    if (!(e = l.sent()).ok)
                      throw Error("Failed to load example image");
                    return [4, e.blob()];
                  case 2:
                    return (
                      (n = l.sent()),
                      (s = (r = t.split("/"))[r.length - 1]),
                      i(
                        new File([n], s, {
                          type:
                            null !== (o = e.headers.get("Content-Type")) &&
                            void 0 !== o
                              ? o
                              : void 0,
                        }),
                        a
                      ),
                      [3, 4]
                    );
                  case 3:
                    return (
                      l.sent(),
                      nT.m.danger("Failed to load example image"),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            }),
            [t, i, a]
          );
        return (0, y.jsxs)("button", {
          className:
            "group flex h-14 w-64 flex-row items-stretch overflow-hidden rounded text-left",
          onClick: s,
          children: [
            (0, y.jsx)("div", {
              className: "w-14 flex-none bg-cover bg-center",
              style: { backgroundImage: "url(".concat(n, ")") },
            }),
            (0, y.jsxs)("div", {
              className:
                "items-left flex min-w-0 flex-auto flex-col justify-center bg-gray-50 px-3 transition group-hover:bg-gray-100 dark:bg-gray-800 dark:group-hover:bg-gray-700",
              children: [
                (0, y.jsx)("div", {
                  className: "font-medium leading-none",
                  children: r,
                }),
                (0, y.jsx)("div", {
                  className:
                    "mt-2 truncate text-xs leading-none text-gray-600 dark:text-gray-300",
                  children: a,
                }),
              ],
            }),
          ],
        });
      }
      var nO = (0, M.vU)({
          tryAnExample: {
            id: "VisionExamplePicker.tryAnExample",
            defaultMessage: "Try an example",
            description: "Label for examples popover",
          },
        }),
        nU = n(12063),
        nq = "oai/apps/hasSeenVisionOnboarding";
      function nz(e) {
        var t,
          n = e.currentModelConfig,
          r = e.disabled,
          a = (0, b._)(
            (0, w.useState)(function () {
              var e = ec.m.getItem(nq);
              return "number" == typeof e && e;
            }),
            2
          ),
          i = a[0],
          s = a[1];
        return (null == n
          ? void 0
          : null === (t = n.capabilities) || void 0 === t
          ? void 0
          : t.multimodal) === void 0 ||
          r ||
          !1 !== i
          ? null
          : (0, y.jsx)(nW, {
              onDismiss: function () {
                var e = Date.now();
                ec.m.setItem(nq, e), s(e);
              },
            });
      }
      var nQ = { beaker: eg.uv5, face: nU.vm9 };
      function nW(e) {
        var t = e.onDismiss,
          n = nB().data,
          r = null == n ? void 0 : n.onboarding;
        return r
          ? (0, y.jsx)(eD.Z, {
              isOpen: !0,
              onClose: t,
              type: "success",
              primaryButton: (0, y.jsx)(eS.ZP.Button, {
                title: "Continue",
                color: "primary",
                onClick: t,
              }),
              title: r.title,
              size: "custom",
              className:
                "max-w-[550px] text-gray-800 outline-none dark:text-gray-300",
              children: r.content.map(function (e, t) {
                if ("paragraph" === e.type)
                  return (0, y.jsx)("p", { children: e.text }, t);
                if ("callout" === e.type) {
                  var n;
                  return (0, y.jsx)(
                    nH,
                    {
                      icon:
                        null !== (n = nQ[e.icon]) && void 0 !== n
                          ? n
                          : nQ.beaker,
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
      function nH(e) {
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
                  className: "font-bold text-black dark:text-white",
                  children: n,
                }),
                (0, y.jsx)("div", { children: r }),
              ],
            }),
          ],
        });
      }
      function n$() {
        var e = (0, q._)([
          "absolute inset-0 bg-gray-100 opacity-80 flex gap-2 justify-center items-center rounded-xl dark:bg-gray-800 dark:text-gray-100",
        ]);
        return (
          (n$ = function () {
            return e;
          }),
          e
        );
      }
      function nG() {
        var e = (0, q._)(["mb-3 mx-[10px] md:mx-0"]);
        return (
          (nG = function () {
            return e;
          }),
          e
        );
      }
      function nV() {
        var e = (0, q._)([
          "absolute p-1 rounded-md bottom-[10px] md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white",
        ]);
        return (
          (nV = function () {
            return e;
          }),
          e
        );
      }
      function nJ() {
        var e = (0, q._)(["absolute left-4 bottom-2 md:left-4 md:bottom-3.5"]);
        return (
          (nJ = function () {
            return e;
          }),
          e
        );
      }
      function nY() {
        var e = (0, q._)([
          "absolute p-1 bottom-[10px] md:bottom-3 md:p-2 right-12 transition-opacity ",
          "",
        ]);
        return (
          (nY = function () {
            return e;
          }),
          e
        );
      }
      function nK() {
        var e = (0, q._)([
          "\nflex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs\n",
          "\n",
          "\n",
        ]);
        return (
          (nK = function () {
            return e;
          }),
          e
        );
      }
      function nX() {
        var e = (0, q._)([
          "",
          " flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center",
        ]);
        return (
          (nX = function () {
            return e;
          }),
          e
        );
      }
      ((i = m || (m = {}))[(i.None = 0)] = "None"),
        (i[(i.Multimodal = 1)] = "Multimodal"),
        (i[(i.Interpreter = 2)] = "Interpreter");
      var n0 = (0, w.forwardRef)(function (e, t) {
        var n,
          r,
          a,
          i,
          s,
          o,
          l,
          u,
          c,
          d,
          m,
          f,
          h,
          g,
          p,
          v,
          j,
          k,
          M,
          P,
          Z,
          T,
          I,
          S,
          D,
          B,
          F,
          L,
          O,
          U,
          q,
          Q,
          W,
          H,
          $,
          G,
          V,
          J,
          Y,
          K,
          X,
          et,
          es,
          eu,
          ec,
          eh,
          eg,
          ep,
          ex,
          ev,
          eb,
          ew,
          eC,
          e_ = e.onAbortCompletion,
          eM = e.onCreateNewCompletion,
          eN = e.onRequestMoreCompletions,
          eP = e.onContinueGenerating,
          eZ = e.currentModelId,
          eT = e.clientThreadId,
          eI = e.isCompletionInProgress,
          eS = e.className,
          eD = e.disabled,
          eR = void 0 !== eD && eD,
          eA = e.shouldRetry,
          eE = e.canPause,
          eF = void 0 !== eE && eE,
          eL = e.canContinue,
          eq = void 0 !== eL && eL,
          ez = e.suggestions,
          eQ = e.isInteractableSharedThread,
          eW = (0, ee.Z)(),
          eH = (0, N.oq)(eT),
          e$ = (0, N.Hk)(eT),
          eG = (0, nE.Ri)(eZ),
          eV = (0, E.w$)(),
          eJ = (0, en.WS)(),
          eY = (0, w.useContext)(A.gt).serviceStatus,
          eK = (0, w.useContext)(A.QL).historyDisabled,
          eX = (0, w.useRef)(null),
          e0 = (0, b._)((0, w.useState)(""), 2),
          e1 = e0[0],
          e2 = e0[1],
          e5 = (0, b._)((0, w.useState)(null), 2),
          e3 = e5[0],
          e4 = e5[1],
          e6 = (0, tE.B9)(),
          e8 = null !== eZ ? e6.get(eZ) : void 0,
          e7 =
            (0, eB.Fl)().isCodeInterpreterAvailable &&
            (null == e8
              ? void 0
              : null === (ev = e8.enabledTools) || void 0 === ev
              ? void 0
              : ev.includes("tools2"))
              ? 2
              : (null == e8
                  ? void 0
                  : null === (eb = e8.capabilities) || void 0 === eb
                  ? void 0
                  : eb.multimodal) !== void 0 ||
                (null == e8
                  ? void 0
                  : null === (ew = e8.enabledTools) || void 0 === ew
                  ? void 0
                  : ew.includes(
                      "Hi Jane, come visit us for lunch at OpenAI? \uD83D\uDC9C"
                    ))
              ? 1
              : 0,
          e9 = 0 !== e7,
          te = (0, w.useCallback)(
            function (e, t) {
              null === t
                ? eJ(er.s6.uploadFile, { eventSource: "mouse" })
                : eJ(er.s6.uploadFile, { eventSource: "drag" }),
                e.length > 0 && e4(e[0]);
            },
            [eJ]
          ),
          tt = (0, w.useCallback)(
            function (e) {
              e[0].errors.forEach(function (e) {
                var t = (function (e) {
                  var t = e.code,
                    n = e.message;
                  switch (t) {
                    case nN.jK.FileTooLarge:
                      return nZ.errorFileTooLarge;
                    case nN.jK.TooManyFiles:
                      return nZ.errorTooManyFiles;
                    default:
                      return n;
                  }
                })(e);
                "string" == typeof t
                  ? nT.m.danger(t)
                  : nT.m.danger(eW.formatMessage(t, { size: 512 }));
              });
            },
            [eW]
          ),
          tn = (0, w.useCallback)(function () {
            e4(null), tc(new Date().toString());
          }, []),
          tr = (0, nw.uI)(
            (0, x._)(
              {
                maxFiles: 1,
                disabled: eR || !e9,
                noClick: !0,
                onDropAccepted: te,
                onDropRejected: tt,
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
                          null == e8
                            ? void 0
                            : null === (e = e8.capabilities) || void 0 === e
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
                [e8]
              )
            )
          ),
          ta = tr.getRootProps,
          ti = tr.getInputProps,
          ts = tr.isDragActive,
          to = tr.open,
          tl = (0, b._)((0, w.useState)(new Date().toString()), 2),
          tu = tl[0],
          tc = tl[1],
          td =
            null !== e3
              ? JSON.stringify({
                  file: e3.name,
                  modified: e3.lastModified,
                  size: e3.size,
                  queryHash: tu,
                })
              : null,
          tm =
            ((i = 2 === e7 ? e3 : null),
            (l = ((s = (0, ek.VF)()),
            (o = (0, ej.a)({
              queryKey: ["interpreterUploadLink", td],
              queryFn: (0, ed._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.createFile(i.name, i.size, nM.Ei.AceUpload).catch(
                          function (e) {
                            var t = s("default_create_entry_error", {
                              fileName: null == i ? void 0 : i.name,
                            });
                            return (
                              void 0 !== e.code && (t = s(e.code)),
                              nT.m.danger(t, nI),
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
            (u = o.isLoading),
            (c = o.isError),
            (d =
              (null == l ? void 0 : l.status) === "success"
                ? l.upload_url
                : void 0),
            (f = (m = (0, ej.a)({
              queryKey: ["startFileUpload", td],
              queryFn: (0, ed._)(function () {
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
            (h = m.isLoading),
            (g = m.isError),
            (p =
              (null == l ? void 0 : l.status) === "success" ? l.file_id : null),
            (M = ((v = N.tQ.getServerThreadId(eT)),
            (j = (0, ek.VF)()),
            (k = (0, ej.a)({
              queryKey: ["processCodeInterpeterUpload", td],
              queryFn: (0, ed._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.processCodeInterpeterUpload(
                          null != v ? v : null,
                          p,
                          i.name
                        ).catch(function (e) {
                          var t = j("default_download_link_error", {
                            fileName: null == i ? void 0 : i.name,
                          });
                          throw (
                            (void 0 !== e.code && (t = j(e.code)),
                            nT.m.danger(t, nI),
                            null == tn || tn(null == i ? void 0 : i.name),
                            new ey.gK(t, void 0, e.code))
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(null !== p && null !== i && void 0 !== f),
            }))).data),
            (P = k.isLoading),
            (Z = k.isError),
            (T = (0, w.useMemo)(
              function () {
                return M ? 50 : void 0 !== f ? 30 : l ? 10 : void 0;
              },
              [f, M, l]
            )),
            (I = c || g || Z),
            (S = u || h || P || (null == M ? void 0 : M.status) !== "success"),
            (0, w.useEffect)(
              function () {
                if (I) {
                  var e;
                  tn(
                    null !== (e = null == i ? void 0 : i.name) && void 0 !== e
                      ? e
                      : ""
                  );
                }
              },
              [null == i ? void 0 : i.name, I, tn]
            ),
            (0, w.useMemo)(
              function () {
                var e =
                    null !== i &&
                    !!(null == i ? void 0 : i.name) &&
                    (null == M ? void 0 : M.status) === "success" &&
                    void 0 !== f,
                  t = e ? { name: i.name, url: f } : null;
                return {
                  isLoading: S,
                  loadingPercentage: I || e ? void 0 : T,
                  isError: I,
                  uploadedFile: t,
                };
              },
              [i, null == M ? void 0 : M.status, f, I, S, T]
            )),
          tf =
            ((D = 1 === e7 ? e3 : null),
            (B = nM.Ei.Multimodal),
            (L = (F = (0, ej.a)({
              queryKey: ["createFile", td],
              queryFn: (0, ed._)(function () {
                var e, t, n;
                return (0, ef.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (e = (0, nS.Z)(new Date(), "yyyy-MM-dd_HH-mm-ss")),
                        (t = D.name.split(".").pop()),
                        (n = "chatgpt-file-".concat(e, ".").concat(t)),
                        [
                          4,
                          ea.ZP.createFile(n, D.size, B).catch(function (e) {
                            throw (
                              (console.error(
                                "Failed to create file for ".concat(
                                  null == D ? void 0 : D.name
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
              enabled: !!D,
            })).data),
            (O = F.isLoading),
            (U = F.isError),
            (q = null == L ? void 0 : L.file_id),
            (Q = null == L ? void 0 : L.upload_url),
            (H = (W = (0, ej.a)({
              queryKey: ["uploadFile", td],
              queryFn: (0, ed._)(function () {
                var e, t, n, r;
                return (0, ef.Jh)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        a.trys.push([0, 7, , 8]),
                        [4, ea.ZP.uploadFileToAzureStorage(D, Q)]
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
                        ea.ZP.markFileUploadFailed(q, t),
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
                        ea.ZP.markFileUploadFailed(q, r),
                        n)
                      );
                    case 8:
                      return [4, ea.ZP.markFileUploadComplete(q)];
                    case 9:
                      return a.sent(), [2, { success: !0 }];
                  }
                });
              }),
              enabled: !!(D && q && Q),
            })).data),
            ($ = W.isLoading),
            (G = W.isError),
            (Y = ((V = (0, ek.VF)()),
            (J = (0, ej.a)({
              queryKey: ["pollForFileReady", td],
              queryFn: (0, ed._)(function () {
                return (0, ef.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.getFileDownloadLink(q).catch(function (e) {
                          var t = V("default_download_link_error", {
                            fileName: null == D ? void 0 : D.name,
                          });
                          throw (
                            (void 0 !== e.code && (t = V(e.code)),
                            nT.m.danger(t, nR),
                            e)
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(H && D && q),
              refetchInterval: function (e, t) {
                if ((null == e ? void 0 : e.status) === nM.KF.Retry) {
                  var n = t.state.dataUpdateCount;
                  return n > nD
                    ? (null == tn || tn(null == D ? void 0 : D.name), !1)
                    : 500 * Math.pow(2, n);
                }
                return !1;
              },
            }))).data),
            (K = J.isLoading),
            (X = J.isError),
            (et = null == Y ? void 0 : Y.download_url),
            (es = null !== D && "string" == typeof et && !!q),
            (eu = U || G || X),
            (ec =
              O || $ || K || (null == Y ? void 0 : Y.status) === nM.KF.Retry),
            (eh = (0, w.useMemo)(
              function () {
                return es ? 100 : H ? 50 : L ? 10 : 0;
              },
              [es, H, L]
            )),
            (0, w.useEffect)(
              function () {
                if (eu) {
                  var e;
                  nT.m.danger("File upload failed", nR),
                    tn(
                      null !== (e = null == D ? void 0 : D.name) && void 0 !== e
                        ? e
                        : ""
                    );
                }
              },
              [null == D ? void 0 : D.name, eu, tn]
            ),
            (ep = (eg = (0, b._)(
              ((r = (n = (0, b._)((0, w.useState)([null, null]), 2))[0]),
              (a = n[1]),
              (0, w.useEffect)(
                function () {
                  if (!D) {
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
                    e.readAsDataURL(D);
                },
                [D]
              ),
              r),
              2
            ))[0]),
            (ex = eg[1]),
            (0, w.useMemo)(
              function () {
                var e = es
                  ? null !== ep && null !== ex
                    ? {
                        id: q,
                        name: D.name,
                        size: D.size,
                        url: et,
                        width: ep,
                        height: ex,
                      }
                    : { id: q, name: D.name, size: D.size, url: et }
                  : null;
                return {
                  isLoading: ec,
                  loadingPercentage: eu || es ? void 0 : eh,
                  isError: eu,
                  uploadedFile: e,
                };
              },
              [es, D, q, et, eu, ec, eh, ep, ex]
            )),
          th = (0, w.useMemo)(
            function () {
              return 2 === e7 ? tm : tf;
            },
            [e7, tm, tf]
          ),
          tg = th.isLoading,
          tp = th.isError,
          tx = th.loadingPercentage,
          tv = th.uploadedFile,
          tb = (0, w.useCallback)(function () {
            e2(""), e4(null), (0, n_.SI)(1, eX.current);
          }, []),
          ty = "root" !== eH && !eI && !(null == eY ? void 0 : eY.oof),
          tj = !!(null === (eC = eX.current) || void 0 === eC
            ? void 0
            : eC.value),
          tk = null === e3 ? tj : !tg && !tp,
          tw = tk && !eR && !eI,
          tC = (0, w.useCallback)(
            function (e, t) {
              if ((null == e || e.preventDefault(), !eR)) {
                var n,
                  r,
                  a =
                    null === (n = eX.current) || void 0 === n
                      ? void 0
                      : n.value,
                  i = "".concat(
                    null === (r = eX.current) || void 0 === r
                      ? void 0
                      : r.dataset.id,
                    "-nextPrompt"
                  );
                if (tk) {
                  var s = null != a ? a : "",
                    o = [];
                  tv &&
                    (2 === e7
                      ? o.push(tv)
                      : 1 === e7 &&
                        "width" in tv &&
                        (s = {
                          content_type: eU.PX.MultimodalText,
                          parts: [
                            {
                              asset_pointer: (0, ek.L8)(tv.id),
                              size_bytes: tv.size,
                              width: tv.width,
                              height: tv.height,
                            },
                            null != a ? a : "",
                          ],
                        })),
                    eM(
                      i,
                      { content: s, attachments: o },
                      { eventSource: e ? "mouse" : "keyboard" },
                      { suggestions: ez }
                    ),
                    tb(),
                    void 0 !== ez &&
                      (void 0 !== t
                        ? eO.m.logEvent("chatgpt_prompt_use_suggestion", a, {
                            index: "".concat(t),
                          })
                        : eO.m.logEvent("chatgpt_prompt_ignore_suggestions"));
                }
              }
            },
            [eR, tb, tk, eM, ez, tv, e7]
          ),
          t_ = (0, w.useCallback)(
            function () {
              e_("", e$), eN(eH, { eventSource: "mouse" });
            },
            [eH, e$, e_, eN]
          ),
          tM = (0, w.useCallback)(
            function () {
              e_("", e$),
                eJ(er.s6.pauseCompletion, {
                  threadId: N.tQ.getServerThreadId(eT),
                  eventSource: "mouse",
                });
            },
            [e$, eT, eJ, e_]
          ),
          tN = (0, w.useCallback)(
            function () {
              eP(eH);
            },
            [eH, eP]
          ),
          tP = (0, w.useMemo)(
            function () {
              return {
                Enter: {
                  validator: function () {
                    return tw;
                  },
                  handler: function (e) {
                    (e.metaKey ||
                      (eV && !e.shiftKey && !e.nativeEvent.isComposing)) &&
                      (e.preventDefault(), tC());
                  },
                },
                Escape: {
                  validator: function () {
                    return eF && eI;
                  },
                  handler: function () {
                    e_("", e$),
                      eJ(er.s6.pauseCompletion, {
                        threadId: N.tQ.getServerThreadId(eT),
                        eventSource: "keyboard",
                      });
                  },
                },
              };
            },
            [tw, eV, eI, tC, eF, e_, e$, eJ, eT]
          ),
          tZ = (0, w.useCallback)(
            function (e) {
              var t;
              (null === (t = tP[e.key]) || void 0 === t
                ? void 0
                : t.validator(e)) && tP[e.key].handler(e);
            },
            [tP]
          ),
          tT = (0, w.useCallback)(
            function (e) {
              if (e.clipboardData.files.length > 0 && 1 === e7) {
                var t,
                  n,
                  r,
                  a = e.clipboardData.files[0];
                if (
                  !(
                    null !==
                      (r =
                        null == e8
                          ? void 0
                          : null === (t = e8.capabilities) || void 0 === t
                          ? void 0
                          : null === (n = t.multimodal) || void 0 === n
                          ? void 0
                          : n.accepted_mime_types) && void 0 !== r
                      ? r
                      : []
                  ).includes(a.type)
                ) {
                  nT.m.danger(
                    eW.formatMessage(rt.unsupportedFileType, {
                      file_type: a.type,
                    })
                  ),
                    e.preventDefault();
                  return;
                }
                e4(a);
              }
            },
            [e8, e4, e7, eW]
          ),
          tS = (0, w.useCallback)(function (e, t) {
            e4(e), e2(t);
          }, []);
        (0, w.useEffect)(function () {
          var e;
          null === (e = eX.current) || void 0 === e || e.focus();
        }, []),
          (0, w.useEffect)(
            function () {
              e4(null);
            },
            [eZ]
          );
        var tD = (0, R.hz)().has(ei.uj),
          tR = eA || ty || eq || eF,
          tA = eV ? "neutral" : "none",
          tB = (0, w.useMemo)(
            function () {
              return (0, y.jsxs)("div", {
                className: eA ? "w-full" : "",
                children: [
                  eA &&
                    (0, y.jsx)("div", {
                      className: "mb-3 text-center text-xs",
                      children: (0, y.jsx)(
                        _.Z,
                        (0, x._)({}, rt.errorGeneratingResponse)
                      ),
                    }),
                  (0, y.jsxs)(re, {
                    $shouldRetry: eA,
                    children: [
                      !eA &&
                        tD &&
                        ez &&
                        (0, y.jsx)(n2, {
                          suggestions: ez,
                          shouldRetry: eA,
                          currentInputRef: eX,
                          onSelectSuggestion: e2,
                          handleCreateNewCompletion: tC,
                        }),
                      ty &&
                        (0, y.jsxs)(eo.z, {
                          as: "button",
                          color: eA ? "primary" : tA,
                          onClick: t_,
                          className: (0, z.Z)(
                            eA ? "m-auto" : "-z-0 border-0 md:border"
                          ),
                          children: [
                            (0, y.jsx)(el.ZP, {
                              icon: C.Qxo,
                              size: eV ? "xsmall" : "small",
                              className: "flex-shrink-0",
                            }),
                            (eV || eA) &&
                              (0, y.jsx)(
                                _.Z,
                                (0, x._)({}, rt.regenerateResponse)
                              ),
                          ],
                        }),
                      eq &&
                        (0, y.jsxs)(eo.z, {
                          as: "button",
                          color: "neutral",
                          onClick: tN,
                          className: "border-0 md:border",
                          children: [
                            (0, y.jsx)(el.ZP, {
                              icon: C.lV_,
                              className: "-rotate-180",
                              size: eV ? "xsmall" : "small",
                            }),
                            eV &&
                              (0, y.jsx)(
                                _.Z,
                                (0, x._)({}, rt.continueGenerating)
                              ),
                          ],
                        }),
                      eF &&
                        eI &&
                        (0, y.jsxs)(eo.z, {
                          as: "button",
                          color: "neutral",
                          onClick: tM,
                          className: "border-0 md:border",
                          children: [
                            (0, y.jsx)(el.ZP, {
                              icon: C.jxP,
                              size: eV ? "xsmall" : "small",
                            }),
                            eV &&
                              (0, y.jsx)(_.Z, (0, x._)({}, rt.stopGenerating)),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            },
            [eA, tD, ez, tC, ty, tA, t_, eV, eq, tN, eF, eI, tM]
          );
        (0, w.useImperativeHandle)(t, function () {
          return { setInputValue: e2 };
        });
        var tF = tw
          ? { backgroundColor: null == eG ? void 0 : eG.backgroundColor }
          : {};
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)("form", {
              className: eS,
              onSubmit: tC,
              children: (0, y.jsxs)(
                "div",
                (0, em._)(
                  (0, x._)(
                    {
                      className:
                        "relative flex h-full flex-1 items-stretch md:flex-col",
                    },
                    ta()
                  ),
                  {
                    children: [
                      eV && tR && tB,
                      !eA &&
                        (0, y.jsxs)(n9, {
                          $disabled: eA,
                          $historyDisabled: eK,
                          children: [
                            e3 &&
                              (0, y.jsx)(n4, {
                                children: (0, y.jsx)(nA.Z, {
                                  onRemoveFileClick: function () {
                                    return e4(null);
                                  },
                                  file: e3,
                                  loadingPercentage: tx,
                                }),
                              }),
                            (0, y.jsx)(n_.ZP, {
                              id: n5,
                              tabIndex: 0,
                              value: e1,
                              "data-id": eH,
                              ref: eX,
                              style: { maxHeight: "200px" },
                              rows: 1,
                              onKeyDown: tZ,
                              onChange: function (e) {
                                e2(e.target.value);
                              },
                              onPaste: tT,
                              placeholder: eQ
                                ? eW.formatMessage(
                                    rt.continueSharedConversationPlaceholder
                                  )
                                : eW.formatMessage(rt.placeholder),
                              className: (0, z.Z)(
                                "m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12",
                                !e3 && e9
                                  ? "pl-12 md:pl-[30px]"
                                  : "pl-3 md:pl-0"
                              ),
                              disabled: eA,
                            }),
                            !e3 &&
                              e9 &&
                              (0, y.jsx)(n8, {
                                children: (0, y.jsx)(nP, {
                                  onClick: to,
                                  disabled: eA,
                                  getInputProps: ti,
                                }),
                              }),
                            1 === e7 &&
                              (0, y.jsx)(n7, {
                                $visible: !tk && !e3 && !eI,
                                children: (0, y.jsx)(nF, { onPick: tS }),
                              }),
                            (0, y.jsx)(n6, {
                              disabled: !tw || eA,
                              style: tF,
                              className: (0, z.Z)(
                                "bottom-1.5",
                                eI
                                  ? "disabled:bottom-0.5 md:disabled:bottom-0"
                                  : "transition-colors disabled:opacity-40"
                              ),
                              children: eI
                                ? (0, y.jsx)("div", {
                                    className: "text-2xl",
                                    children: (0, y.jsx)(n1, {}),
                                  })
                                : (0, y.jsx)(tI.u, {
                                    label: eW.formatMessage(
                                      rt.sendMessageTooltip
                                    ),
                                    children: (0, y.jsx)(el.ZP, {
                                      icon: el.IX,
                                      size: "small",
                                      className: "m-1 md:m-0",
                                    }),
                                  }),
                            }),
                            ts &&
                              (0, y.jsxs)(n3, {
                                children: [
                                  (0, y.jsx)(el.ZP, { icon: C.tHe }),
                                  eW.formatMessage(rt.dragInstructions),
                                ],
                              }),
                          ],
                        }),
                      !eV && tR && tB,
                    ],
                  }
                )
              ),
            }),
            (0, y.jsx)(nz, { currentModelConfig: e8, disabled: eQ }),
          ],
        });
      });
      function n1() {
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
      function n2(e) {
        var t = e.suggestions,
          n = e.shouldRetry,
          r = e.currentInputRef,
          a = e.onSelectSuggestion,
          i = e.handleCreateNewCompletion,
          s = (0, ee.Z)(),
          o = (0, w.useCallback)(
            function (e, t) {
              null !== r.current && (a(e), (r.current.value = e), i(void 0, t));
            },
            [r, i, a]
          );
        return (
          (0, w.useEffect)(
            function () {
              void 0 !== t && eO.m.logEvent("chatgpt_prompt_show_suggestions");
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
                      eo.z,
                      {
                        as: "button",
                        color: "neutral",
                        onClick: function () {
                          return o(e, t);
                        },
                        className:
                          "group whitespace-nowrap text-left md:whitespace-normal",
                        children: [
                          e,
                          (0, y.jsx)("div", {
                            className:
                              "absolute bottom-0 right-0 top-0 flex items-center bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-2 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200",
                            children: (0, y.jsx)(tI.u, {
                              label: s.formatMessage(rt.suggestionTooltip),
                              side: "top",
                              children: (0, y.jsx)(el.ZP, {
                                icon: nC.Z,
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
      var n5 = "prompt-textarea",
        n3 = et.Z.div(n$()),
        n4 = et.Z.div(nG()),
        n6 = et.Z.button(nV()),
        n8 = et.Z.div(nJ()),
        n7 = et.Z.div(nY(), function (e) {
          return e.$visible ? "opacity-100" : "opacity-0 pointer-events-none";
        }),
        n9 = et.Z.div(
          nK(),
          function (e) {
            return e.$historyDisabled
              ? "bg-gray-900 text-white shadow-xs dark:bg-gray-900 dark:text-white dark:shadow-xs"
              : "";
          },
          function (e) {
            return e.$disabled && "bg-gray-100";
          }
        ),
        re = et.Z.div(nX(), function (e) {
          return e.$shouldRetry ? "" : "h-full";
        }),
        rt = (0, M.vU)({
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
      function rn() {
        var e = (0, q._)([
          "absolute w-[2.5px] h-5 -rotate-45 -top-0.5 left-1.5 bg-gray-500 border-[0.5px] border-gray-100 group-hover/toggle:bg-red-500 dark:border-[#4E4F60]",
        ]);
        return (
          (rn = function () {
            return e;
          }),
          e
        );
      }
      function rr() {
        var e = (0, q._)([
          "group/options flex flex-col rounded-xl border border-gray-100 bg-white text-left shadow-xxs dark:text-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-xs mx-2 sm:mx-1 overflow-hidden",
        ]);
        return (
          (rr = function () {
            return e;
          }),
          e
        );
      }
      function ra() {
        var e = (0, q._)([
          "px-5 flex gap-2.5 flex-col py-4 whitespace-pre-line",
        ]);
        return (
          (ra = function () {
            return e;
          }),
          e
        );
      }
      function ri() {
        var e = (0, q._)(["block dark:text-white text-gray-900"]);
        return (
          (ri = function () {
            return e;
          }),
          e
        );
      }
      function rs() {
        var e = (0, q._)(["block text-xs text-gray-500"]);
        return (
          (rs = function () {
            return e;
          }),
          e
        );
      }
      function ro(e) {
        var t = e.items,
          n = e.value,
          r = e.onChange,
          a = rf(),
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
          s = i[0],
          o = i[1],
          l = (0, w.useCallback)(
            function (e, i) {
              var l,
                u = n,
                c = t.find(function (t) {
                  return t.value === e;
                }),
                d = (null == s ? void 0 : s[e]) !== void 0,
                m =
                  d &&
                  t.some(function (t) {
                    return (
                      t.value === e &&
                      t.options.some(function (t) {
                        return t.value === s[e];
                      })
                    );
                  }),
                f = i;
              a &&
                void 0 === i &&
                (f = d
                  ? s[e]
                  : null !== (l = null == c ? void 0 : c.options[0].value) &&
                    void 0 !== l
                  ? l
                  : void 0),
                (u = void 0 !== f ? f : m ? s[e] : e) !== n &&
                  (r(u),
                  o(function (t) {
                    return (0, em._)((0, x._)({}, t), (0, nb._)({}, e, u));
                  }));
            },
            [a, t, s, r, n]
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
                o,
                u,
                d,
                f,
                h =
                  n === e.value ||
                  e.options.some(function (e) {
                    return e.value === n;
                  }),
                g = h ? n : null == s ? void 0 : s[e.value],
                p =
                  null != g
                    ? g
                    : null === (i = e.options) || void 0 === i
                    ? void 0
                    : null === (o = i[0]) || void 0 === o
                    ? void 0
                    : o.value,
                x =
                  null !==
                    (u = e.options.find(function (e) {
                      return e.value === p;
                    })) && void 0 !== u
                    ? u
                    : e.options[0],
                v =
                  null !== (d = null == x ? void 0 : x.icon) && void 0 !== d
                    ? d
                    : null;
              return (0,
              y.jsx)(ru, { onToggleItemOpenChanged: m, item: e, isSelected: h, isOtherToggleDropdownOpen: c.size > 0 && !c.has(e.categoryId), currentValue: n, defaultOption: null == x ? void 0 : x.value, onChange: l, currentIcon: v, displayCurrentValue: h && e.showSelectedValueBelow && null !== (f = null == x ? void 0 : x.name) && void 0 !== f ? f : "", contentAlign: ((a = t.length), 0 === r ? "start" : r === a - 1 ? "end" : "center") }, r);
            }),
          }),
        });
      }
      function rl(e) {
        var t = e.item,
          n = e.isSelected,
          r = e.isOtherToggleDropdownOpen,
          a = e.isOpen,
          i = e.currentIcon,
          s = e.displayCurrentValue,
          o = null != i ? i : t.icon,
          l = t.options.length > 1 || t.alwaysShowOptions,
          u = rf();
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
          children: [
            (0, y.jsxs)("span", {
              className: (0, z.Z)(
                "relative max-[370px]:hidden",
                t.disabled && "group-hover/button:text-red-500"
              ),
              children: [
                null != o &&
                  (0, y.jsx)(el.ZP, {
                    icon: o,
                    className: (0, z.Z)(
                      "transition-colors",
                      n ? t.buttonActiveClass : t.buttonHoverClass
                    ),
                  }),
                t.disabled && (0, y.jsx)(rp, {}),
              ],
            }),
            (0, y.jsx)("span", {
              className: (0, z.Z)(
                "truncate text-sm font-medium md:pr-1.5",
                !u && "pr-1.5"
              ),
              children: t.name,
            }),
            u &&
              (n || l) &&
              (0, y.jsx)(el.ZP, {
                icon: l ? C.bTu : nk.DAO,
                className: "toggle-item-button-open ml-0.5 text-gray-500",
              }),
            u &&
              (0, y.jsx)(el.ZP, {
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
      function ru(e) {
        var t = e.item,
          n = e.isSelected,
          r = e.defaultOption,
          a = e.onChange,
          i = e.currentIcon,
          s = e.currentValue,
          o = e.displayCurrentValue,
          l = e.contentAlign,
          u = e.onToggleItemOpenChanged,
          c = e.isOtherToggleDropdownOpen,
          d = (0, b._)((0, w.useState)(void 0), 2),
          m = d[0],
          f = d[1],
          h = (0, w.useRef)(null),
          g = t.options.length > 1 || t.alwaysShowOptions,
          p = !(void 0 === t.description && void 0 === t.disclaimer),
          x = rf(),
          v = (0, w.useCallback)(
            function (e) {
              f(e), u(t.categoryId, !!e);
            },
            [t.categoryId, u]
          );
        return (0, y.jsx)(nj.fC, {
          open: m,
          modal: !1,
          onOpenChange: function (e) {
            x && e && !n && g && a(t.value);
          },
          children: (0, y.jsxs)("li", {
            className: "group/toggle w-full",
            onMouseEnter: function () {
              return !x && v(!0);
            },
            onMouseLeave: function () {
              return !x && v(void 0);
            },
            children: [
              (0, y.jsx)(nj.xz, {
                ref: h,
                className: "w-full cursor-pointer",
                onClick: function () {
                  t.disabled || a(t.value);
                },
                children: (0, y.jsx)(rl, {
                  isOpen: !!m,
                  isOtherToggleDropdownOpen: c,
                  item: t,
                  isSelected: n,
                  currentIcon: i,
                  displayCurrentValue: o,
                }),
              }),
              (0, y.jsx)(
                nj.Uv,
                {
                  children: (0, y.jsx)(nj.VY, {
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
                        null === (t = h.current) || void 0 === t || t.focus();
                    },
                    children: (0, y.jsxs)(rx, {
                      children: [
                        p && (0, y.jsx)(rc, { item: t }),
                        (g || (!m && !x)) &&
                          (0, y.jsx)(rd, {
                            defaultOption: n ? s : r,
                            item: t,
                            currentValue: s,
                            onChange: function (e, t) {
                              var n;
                              a(e, t),
                                v(void 0),
                                null === (n = document.getElementById(n5)) ||
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
      function rc(e) {
        var t = e.item;
        return (0, y.jsxs)(rv, {
          className: "text-sm sm:text-base",
          children: [
            void 0 !== t.description &&
              (0, y.jsx)(rb, { children: t.description }),
            void 0 !== t.disclaimer &&
              (0, y.jsx)(ry, { children: t.disclaimer }),
          ],
        });
      }
      function rd(e) {
        var t = e.item,
          n = e.className,
          r = e.onChange,
          a = e.currentValue,
          i = e.defaultOption;
        return (0, y.jsx)(nj.Ee, {
          defaultValue: i,
          value: a,
          className: n,
          children: t.options.map(function (e, n) {
            return (0, y.jsx)(
              rm,
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
      function rm(e) {
        var t,
          n = e.option,
          r = e.selected,
          a = e.active,
          i = e.iconClass,
          s = e.iconActiveClass,
          o = e.isDisabled,
          l = e.onChange,
          u = e.showBorder,
          c = null !== (t = n.activeIcon) && void 0 !== t ? t : n.icon;
        return (0, y.jsx)(nj.Rk, {
          disabled: o,
          asChild: !0,
          value: n.value,
          onClick: l,
          className: "select-none outline-none",
          children: (0, y.jsxs)("div", {
            className: (0, z.Z)(
              "group/option relative flex w-full items-center gap-2 px-5 py-3 pr-11 font-medium focus:bg-gray-50 focus:dark:bg-gray-700",
              o ? "text-gray-500" : "text-gray-900 dark:text-gray-100",
              {
                "cursor-pointer hover:!bg-gray-50 dark:hover:!bg-gray-700": !o,
                "bg-gray-50 group-hover/options:bg-transparent dark:bg-gray-700":
                  a && !r,
                "text-gray-800 dark:text-gray-100": r || a,
                "border-b border-gray-100 dark:border-gray-800": u,
              }
            ),
            children: [
              null != n.icon && null != c
                ? (0, y.jsx)(el.ZP, {
                    icon: r ? n.icon : c,
                    className: (0, z.Z)(
                      "max-[370px]:hidden",
                      !o && !r && i,
                      r || a ? s : "text-gray-500"
                    ),
                  })
                : null,
              (0, y.jsx)("span", {
                title: "string" == typeof n.name && n.name ? n.name : "",
                className: (0, z.Z)("truncate", {
                  "group-hover/option:text-gray-800 dark:group-hover/option:text-gray-100":
                    !o,
                  "text-gray-800 dark:text-gray-100": a && !o,
                }),
                children: n.name,
              }),
              n.tags.map(function (e) {
                return rg(e);
              }),
              (0, y.jsx)("span", {
                className: (0, z.Z)({
                  "absolute right-3 rounded-full p-1 text-blue-400": !0,
                  "opacity-0 group-hover/options:opacity-0": !r && !o,
                  "text-red-500": o,
                }),
                children: (0, y.jsx)(el.ZP, {
                  icon: o ? ny.Z : el.nQ,
                  className: "h-5 w-5",
                }),
              }),
            ],
          }),
        });
      }
      var rf = function () {
          return !(0, E.w$)();
        },
        rh = new Set(["beta", "confidential", "alpha"]),
        rg = function (e) {
          return (
            rh.has(e) &&
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
        rp = et.Z.span(rn()),
        rx = et.Z.div(rr()),
        rv = et.Z.div(ra()),
        rb = et.Z.span(ri()),
        ry = et.Z.span(rs()),
        rj = n(5046);
      function rk(e) {
        var t = e.onModelChange,
          n = e.currentModel,
          r = (0, en.WS)(),
          a = (0, rj.BT)(),
          i = (0, nE.ZP)(),
          s = (0, w.useCallback)(
            function (e) {
              a !== e && (t(e), r(er.s6.toggleModel, { model: e }));
            },
            [a, r, t]
          );
        return (0, y.jsx)(ro, {
          value: null == n ? void 0 : n.id,
          onChange: s,
          items: i,
        });
      }
      var rw = n(20485),
        rC = n(12285),
        r_ = n(40638),
        rM = n(57526),
        rN = n(99581);
      function rP() {
        var e = (0, q._)([
          "rounded-lg bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20 shadow-[0_1px_7px_0_rgba(0,0,0,0.03)]",
        ]);
        return (
          (rP = function () {
            return e;
          }),
          e
        );
      }
      function rZ() {
        var e = (0, q._)([
          "absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-sm md:w-[100%]",
        ]);
        return (
          (rZ = function () {
            return e;
          }),
          e
        );
      }
      function rT() {
        var e = (0, q._)([
          "absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4",
        ]);
        return (
          (rT = function () {
            return e;
          }),
          e
        );
      }
      function rI() {
        var e = (0, q._)(["flex items-center gap-2 truncate"]);
        return (
          (rI = function () {
            return e;
          }),
          e
        );
      }
      function rS() {
        var e = (0, q._)(["h-6 w-6 shrink-0"]);
        return (
          (rS = function () {
            return e;
          }),
          e
        );
      }
      function rD() {
        var e = (0, q._)([
          "absolute inset-y-0 right-0 flex items-center pr-5 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (rD = function () {
            return e;
          }),
          e
        );
      }
      function rR() {
        var e = (0, q._)([
          "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (rR = function () {
            return e;
          }),
          e
        );
      }
      var rA = ["confidential", "alpha", "plus"];
      function rE(e) {
        var t = e.selectedOptions,
          n = e.selectedLabel,
          r = e.onChange,
          a = e.onAction,
          i = e.onOpen,
          s = e.onClose,
          o = e.dropdownRef,
          l = (0, v._)(e, [
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
        return (0, y.jsx)(rC.R, {
          value: t.map(function (e) {
            return e.value;
          }),
          multiple: !0,
          onChange: u,
          children: function (e) {
            var r = e.open;
            return (0, y.jsx)(
              rB,
              (0, x._)(
                {
                  ref: o,
                  selectedLabel: n || "".concat(t.length, " selected"),
                  open: r,
                  onOpen: i,
                  onClose: s,
                  multiple: !0,
                },
                l
              )
            );
          },
        });
      }
      var rB = (0, w.forwardRef)(function (e, t) {
        var n = e.name,
          r = e.selectedLabel,
          a = e.open,
          i = e.options,
          s = e.actions,
          o = e.multiple,
          l = e.isLoading,
          u = e.loadingState,
          c = e.header,
          d = e.onOpen,
          m = e.onClose,
          f = e.theme,
          h = (0, w.useRef)(null),
          g = (0, w.useRef)(null),
          p = (0, E.oc)();
        (0, w.useImperativeHandle)(
          t,
          function () {
            return {
              open: function () {
                if (!a) {
                  var e;
                  null === (e = h.current) || void 0 === e || e.click();
                }
              },
              close: function () {
                if (a) {
                  var e;
                  null === (e = h.current) || void 0 === e || e.click();
                }
              },
            };
          },
          [a]
        );
        var x = l
          ? u ||
            (0, y.jsx)("div", {
              className: "flex h-[42px] items-center justify-center",
              children: (0, y.jsx)(eR.Z, {}),
            })
          : (0, y.jsxs)(y.Fragment, {
              children: [
                c,
                (0, y.jsxs)(rC.R.Options, {
                  className: "overflow-auto",
                  children: [
                    i.map(function (e, t) {
                      return (0, y.jsx)(
                        rF,
                        {
                          value: e.value,
                          disabled: e.disabled,
                          theme: f,
                          children: function (t) {
                            var n = t.selected,
                              r = t.active;
                            return (0, y.jsxs)(y.Fragment, {
                              children: [
                                (0, y.jsxs)(rV, {
                                  children: [
                                    e.imageUrl &&
                                      (0, y.jsx)(rJ, {
                                        children: (0, y.jsx)(nv.Z, {
                                          url: e.imageUrl,
                                          name: e.title,
                                          size: "100%",
                                        }),
                                      }),
                                    (0, y.jsxs)("span", {
                                      className: (0, z.Z)(
                                        n && !o && "font-semibold",
                                        "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"
                                      ),
                                      children: [
                                        e.title,
                                        e.tags.map(function (e) {
                                          return rz(e);
                                        }),
                                        e.customTags,
                                      ],
                                    }),
                                  ],
                                }),
                                o && !e.disabled
                                  ? (0, y.jsx)(rO, { theme: f, selected: n })
                                  : n &&
                                    (0, y.jsx)(rL, {
                                      theme: f,
                                      icon: "mini" === f ? el.HQ : C.UgA,
                                    }),
                                e.disabled &&
                                  (0, y.jsx)(rL, {
                                    theme: f,
                                    icon: rM.Z,
                                    className: "text-red-700 dark:text-red-500",
                                  }),
                                r &&
                                  p &&
                                  (0, rN.createPortal)(
                                    (0, y.jsx)(rq, {
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
                    null == s
                      ? void 0
                      : s.map(function (e, t) {
                          return (0, y.jsx)(
                            rF,
                            {
                              value: e.id,
                              theme: f,
                              children: function () {
                                return (0, y.jsxs)(y.Fragment, {
                                  children: [
                                    (0, y.jsx)("div", {
                                      className:
                                        "text-gray-800 dark:text-gray-100",
                                      children: e.label,
                                    }),
                                    (0, y.jsx)(rL, { theme: f, icon: e.icon }),
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
        y.jsxs)("div", { className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4", children: [(0, y.jsxs)(rC.R.Button, { ref: h, onClick: a ? m : d, className: (0, z.Z)("relative flex cursor-pointer flex-col bg-white py-2 pr-10 text-left dark:bg-gray-800 sm:text-sm", "mini" === f ? "mx-auto w-auto rounded-lg border border-transparent pl-4 pr-7 hover:border-black/10 dark:hover:border-white/10" : "w-full rounded-md border border-black/10 pl-3 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20"), children: ["mini" !== f && (0, y.jsx)(rC.R.Label, { className: "block text-xs text-gray-700 dark:text-gray-500", children: n }), (0, y.jsx)("span", { className: "inline-flex w-full truncate", children: (0, y.jsx)("span", { className: "flex h-6 items-center gap-1 truncate", children: r }) }), (0, y.jsx)("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: (0, y.jsx)(el.ZP, { icon: C.bTu, className: " text-gray-400", "aria-hidden": "true" }) })] }), (0, y.jsx)(r_.u, { show: a, as: w.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, y.jsx)(rW, { ref: g, children: x }) })] });
      });
      function rF(e) {
        var t = e.value,
          n = e.disabled,
          r = e.children,
          a = e.theme;
        return (0, y.jsx)(rC.R.Option, {
          className: function (e) {
            var t = e.active;
            return (0, z.Z)(
              "mini" === a ? r$ : rG,
              t && !n ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900",
              n &&
                "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100"
            );
          },
          value: t,
          children: r,
        });
      }
      function rL(e) {
        var t = e.icon,
          n = e.className,
          r = e.theme;
        return (0, y.jsx)("mini" === r ? rY : rK, {
          children: (0, y.jsx)(el.ZP, {
            icon: t,
            className: (0, z.Z)("h-5 w-5", n),
            "aria-hidden": "true",
          }),
        });
      }
      function rO(e) {
        var t = e.selected,
          n = e.disabled;
        return "mini" === e.theme
          ? (0, y.jsxs)(rY, {
              children: [
                (0, y.jsx)(el.ZP, {
                  icon: t ? el.HQ : el.i9,
                  className: "h-5 w-5 text-blue-600",
                  strokeWidth: t ? 2.5 : 2,
                }),
                !t &&
                  (0, y.jsx)(el.ZP, {
                    icon: el.nQ,
                    className: (0, z.Z)(
                      "absolute h-5 w-5 text-blue-600 opacity-0 transition-opacity",
                      !n && "group-hover:opacity-100"
                    ),
                  }),
              ],
            })
          : (0, y.jsx)(rK, {
              children: (0, y.jsx)("div", {
                className: (0, z.Z)(
                  "flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
                  t
                    ? "border-transparent bg-green-600 text-white"
                    : "border-black/5 dark:border-white/20"
                ),
                "aria-hidden": "true",
                children: (0, y.jsx)(el.ZP, {
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
      function rU(e) {
        var t = e.showCheckbox,
          n = e.theme;
        return (0, y.jsxs)("div", {
          className: (0, z.Z)("mini" === n ? r$ : rG, "cursor-auto"),
          children: [
            (0, y.jsxs)(rV, {
              children: [
                (0, y.jsx)(rJ, {
                  children: (0, y.jsx)("div", {
                    className: "h-full w-full rounded-sm bg-gray-200",
                  }),
                }),
                (0, y.jsx)("div", {
                  className: "h-[12px] w-[88px] rounded-sm bg-gray-100",
                }),
              ],
            }),
            t && (0, y.jsx)(rO, { theme: n, selected: !1, disabled: !0 }),
          ],
        });
      }
      function rq(e) {
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
          ? (0, y.jsxs)(rH, {
              style: {
                width: 260,
                minHeight: a.minHeight,
                top: a.top,
                left: a.left,
              },
              children: [
                t.disabled &&
                  (0, y.jsx)(el.ZP, {
                    icon: rM.Z,
                    size: "medium",
                    className: "text-red-700 dark:text-red-500",
                  }),
                t.imageUrl &&
                  (0, y.jsx)(nv.Z, {
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
                      return rz(e);
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
      var rz = function (e) {
          return (
            rA.includes(e) &&
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
        rQ = et.Z.div(rP()),
        rW = (0, et.Z)(rQ)(rZ()),
        rH = (0, et.Z)(rQ)(rT()),
        r$ =
          "group relative flex h-[50px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-5 pr-12 last:border-0 dark:border-white/20",
        rG =
          "group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20",
        rV = et.Z.span(rI()),
        rJ = et.Z.span(rS()),
        rY = et.Z.span(rD()),
        rK = et.Z.span(rR()),
        rX = n(697),
        r0 = n(10604),
        r1 = n(5759),
        r2 = n(17915),
        r5 = n(38631);
      function r3() {
        var e = (0, q._)(["mt-4 flex flex-col gap-4"]);
        return (
          (r3 = function () {
            return e;
          }),
          e
        );
      }
      function r4() {
        var e = (0, q._)(["text-sm text-red-500"]);
        return (
          (r4 = function () {
            return e;
          }),
          e
        );
      }
      var r6 = et.Z.div(r3()),
        r8 = et.Z.div(r4()),
        r7 = n(49910);
      function r9(e) {
        var t = e.onClickInstall,
          n = e.onInstallLocalhost,
          r = e.onClose,
          a = (0, b._)((0, w.useState)(), 2),
          i = a[0],
          s = a[1],
          o = (0, b._)((0, w.useState)(), 2),
          l = o[0],
          u = o[1],
          c = (0, b._)((0, w.useState)(!1), 2),
          d = c[0],
          m = c[1],
          f = (0, w.useCallback)(function (e) {
            s(e);
          }, []),
          h = (0, w.useCallback)(function () {
            m(!0);
          }, []);
        return d && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, y.jsx)(aa, {
              plugin: null == i ? void 0 : i.scrapeManifestResponse.plugin,
              onClickInstall: t,
              onClose: r,
            })
          : l && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, y.jsx)(ar, {
              plugin: i.scrapeManifestResponse.plugin,
              manifestAccessToken: i.manifestAccessToken,
              verificationTokens: l,
              onReadyToInstall: h,
              onClose: r,
            })
          : i
          ? (0, y.jsx)(an, {
              loadManifestResult: i,
              onRefetch: f,
              onSubmitAuthInfo: u,
              onReadyToInstall: h,
              onInstallLocalhost: n,
              onClose: r,
            })
          : (0, y.jsx)(ae, { onFetch: f, onClose: r });
      }
      function ae(e) {
        var t = e.onFetch,
          n = e.onClose,
          r = (0, ep.kP)().session,
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          s = a[1],
          o = (0, b._)((0, w.useState)("bearer"), 2),
          l = o[0],
          u = o[1],
          c = (0, b._)((0, w.useState)(), 2),
          d = c[0],
          m = c[1],
          f = (0, w.useRef)(null),
          h = (0, w.useRef)(null),
          g = (0, r2.sd)(),
          p = g.fetchManifestAndSpec,
          x = g.isLoading;
        (0, w.useEffect)(function () {
          var e;
          null === (e = f.current) || void 0 === e || e.focus();
        }, []);
        var v = (0, w.useCallback)(function () {
            s(function (e) {
              return !e;
            });
          }, []),
          j = (0, w.useCallback)(function (e) {
            u(e.target.value);
          }, []),
          k = (0, w.useCallback)(
            (0, ed._)(function () {
              var e, n, r;
              return (0, ef.Jh)(this, function (a) {
                return (r =
                  null === (e = f.current) || void 0 === e ? void 0 : e.value)
                  ? (p({
                      domain: r,
                      manifestAccessToken: i
                        ? {
                            authorization_type: l,
                            token:
                              (null === (n = h.current) || void 0 === n
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
        return (0, y.jsx)(eD.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: "Enter your website domain",
          primaryButton: (0, y.jsx)(eS.ZP.Button, {
            title: "Find manifest file",
            color: "primary",
            onClick: k,
            loading: x,
          }),
          secondaryButton: (0, y.jsx)(eS.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, y.jsxs)(r6, {
            children: [
              (0, y.jsx)("a", {
                href: "https://platform.openai.com/docs/plugins/getting-started",
                target: "_blank",
                rel: "noreferrer",
                className: "text-green-600",
                children:
                  "Visit our documentation to learn how to build a plugin.",
              }),
              (0, y.jsxs)(r1.Z, {
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
              (0, y.jsx)(r0.Z, {
                ref: f,
                name: "url",
                displayName: "Domain",
                placeholder: "ex: openai.com or localhost:3000",
                onPressEnter: k,
                autoFocus: !0,
              }),
              (null == r ? void 0 : r.user) != null &&
                (0, ep.yl)(r.user) &&
                (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsxs)("div", {
                      role: "button",
                      className:
                        "flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70",
                      onClick: v,
                      children: [
                        (0, y.jsx)("div", {
                          children: "My file requires authentication",
                        }),
                        (0, y.jsx)(el.ZP, { icon: i ? C.rH8 : C.bTu }),
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
                                  (0, y.jsx)(at, {
                                    label: "Bearer",
                                    value: "bearer",
                                    checked: "bearer" === l,
                                    onChange: j,
                                  }),
                                  (0, y.jsx)(at, {
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
                              (0, y.jsx)(r0.Z, {
                                ref: h,
                                name: "manifestToken",
                                onPressEnter: k,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              d && (0, y.jsx)(r8, { children: d }),
            ],
          }),
        });
      }
      function at(e) {
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
      function an(e) {
        var t = e.loadManifestResult,
          n = e.onRefetch,
          r = e.onSubmitAuthInfo,
          a = e.onReadyToInstall,
          i = e.onInstallLocalhost,
          s = e.onClose,
          o = t.domain,
          l = t.manifestAccessToken,
          u = t.scrapeManifestResponse,
          c = t.apiValidationInfo,
          d = u.plugin,
          m = u.manifest_validation_info,
          f = (0, b._)((0, w.useState)(), 2),
          h = f[0],
          g = f[1],
          p = (0, b._)((0, w.useState)(!1), 2),
          x = p[0],
          v = p[1],
          k = (0, w.useRef)(null),
          C = (0, w.useRef)(null),
          _ = (0, w.useRef)(null),
          M = (0, r2.sd)(),
          N = M.fetchManifestAndSpec,
          P = M.isLoading,
          Z = (0, j.NL)(),
          T = d && (0, tm.cf)(d),
          I = (null == d ? void 0 : d.manifest.auth.type) === "service_http",
          S = (null == d ? void 0 : d.manifest.auth.type) === "oauth",
          D =
            (m.errors && m.errors.length > 0) ||
            ((null == c ? void 0 : c.errors) &&
              (null == c ? void 0 : c.errors.length) > 0),
          R = (0, w.useCallback)(
            (0, ed._)(function () {
              var e, t, u, c, m;
              return (0, ef.Jh)(this, function (f) {
                switch (f.label) {
                  case 0:
                    if (!D) return [3, 1];
                    return (
                      N({
                        domain: o,
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
                    if (!T) return [3, 2];
                    return (0, r2.GI)(d, Z, ["installedAip"]), i(d), [3, 15];
                  case 2:
                    if (!I) return [3, 8];
                    if (
                      !(null === (e = k.current) || void 0 === e
                        ? void 0
                        : e.value)
                    )
                      return (
                        g("Please provide your service access token."), [2]
                      );
                    f.label = 3;
                  case 3:
                    return (
                      f.trys.push([3, 5, 6, 7]),
                      v(!0),
                      [
                        4,
                        ea.ZP.setPluginServiceHttpToken({
                          id: d.id,
                          serviceAccessToken: k.current.value,
                        }),
                      ]
                    );
                  case 4:
                    return r(f.sent().verification_tokens), [3, 7];
                  case 5:
                    return f.sent(), g("Error setting access token."), [3, 7];
                  case 6:
                    return v(!1), [7];
                  case 7:
                    return [3, 15];
                  case 8:
                    if (!S) return [3, 14];
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
                    f.label = 9;
                  case 9:
                    return (
                      f.trys.push([9, 11, 12, 13]),
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
                    return r(f.sent().verification_tokens), [3, 13];
                  case 11:
                    return (
                      f.sent(), g("Error setting OAuth credentials."), [3, 13]
                    );
                  case 12:
                    return v(!1), [7];
                  case 13:
                    return [3, 15];
                  case 14:
                    d ? a(d) : s(), (f.label = 15);
                  case 15:
                    return [2];
                }
              });
            }),
            [I, S, d, o, l, D, T, Z, N, n, r, a, i, s]
          );
        return (0, y.jsx)(eD.Z, {
          isOpen: !0,
          onClose: s,
          type: "success",
          title: "Found plugin",
          primaryButton: (0, y.jsx)(eS.ZP.Button, {
            title: D
              ? "Refetch manifest"
              : T
              ? "Install localhost plugin"
              : "Next",
            color: "primary",
            onClick: R,
            loading: x || P,
          }),
          secondaryButton:
            (D || I || S) &&
            (0, y.jsx)(eS.ZP.Button, {
              title: "Cancel",
              color: "neutral",
              onClick: s,
            }),
          children: (0, y.jsxs)(r6, {
            children: [
              (0, y.jsx)(r7.rC, { manifestValidationInfo: m }),
              c && (0, y.jsx)(r7.q6, { apiValidationInfo: c }),
              d && (0, y.jsx)(r5.Z, { plugin: d }),
              I &&
                !D &&
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your service access token:",
                    }),
                    (0, y.jsx)("div", {
                      className: "mt-2",
                      children: (0, y.jsx)(r0.Z, {
                        ref: k,
                        name: "serviceToken",
                        placeholder: "Service access token",
                        autoComplete: "off",
                        onPressEnter: R,
                        autoFocus: !0,
                      }),
                    }),
                  ],
                }),
              S &&
                !D &&
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your OAuth credentials:",
                    }),
                    (0, y.jsx)("div", {
                      className: "mt-2",
                      children: (0, y.jsx)(r0.Z, {
                        ref: C,
                        name: "clientId",
                        placeholder: "Client ID",
                        autoComplete: "off",
                        onPressEnter: R,
                        autoFocus: !0,
                      }),
                    }),
                    (0, y.jsx)("div", {
                      className: "mt-2",
                      children: (0, y.jsx)(r0.Z, {
                        ref: _,
                        type: "password",
                        name: "clientSecret",
                        placeholder: "Client secret",
                        autoComplete: "off",
                        onPressEnter: R,
                      }),
                    }),
                  ],
                }),
              h && (0, y.jsx)(r8, { children: h }),
            ],
          }),
        });
      }
      function ar(e) {
        var t = e.plugin,
          n = e.manifestAccessToken,
          r = e.verificationTokens,
          a = e.onReadyToInstall,
          i = e.onClose,
          s = (0, b._)((0, w.useState)(), 2),
          o = s[0],
          l = s[1],
          u = (0, b._)((0, w.useState)(!1), 2),
          c = u[0],
          d = u[1],
          m = (0, w.useCallback)(
            (0, ed._)(function () {
              var e, i;
              return (0, ef.Jh)(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      s.trys.push([0, 2, 3, 4]),
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
                    if ((e = s.sent().plugin)) {
                      for (var o in ((i =
                        "service_http" === e.manifest.auth.type ||
                        "oauth" === e.manifest.auth.type
                          ? e.manifest.auth.verification_tokens
                          : {}),
                      r))
                        if (r[o] !== i[o])
                          return (
                            l(
                              'Please add the "'.concat(
                                o,
                                '" token to your manifest file.'
                              )
                            ),
                            [2]
                          );
                      a(e);
                    } else l("Error creating plugin.");
                    return [3, 4];
                  case 2:
                    return s.sent(), l("Error creating plugin."), [3, 4];
                  case 3:
                    return d(!1), [7];
                  case 4:
                    return [2];
                }
              });
            }),
            [t, n, r, a]
          );
        return (0, y.jsx)(eD.Z, {
          isOpen: !0,
          onClose: i,
          type: "success",
          title: "Add verification token",
          primaryButton: (0, y.jsx)(eS.ZP.Button, {
            title: "Verify tokens",
            color: "primary",
            onClick: m,
            loading: c,
          }),
          secondaryButton: (0, y.jsx)(eS.ZP.Button, {
            title: "I'll add the tokens later",
            color: "neutral",
            onClick: i,
          }),
          children: (0, y.jsxs)(r6, {
            children: [
              (0, y.jsx)(r5.Z, { plugin: t }),
              (0, y.jsx)("div", {
                className: "text-sm",
                children:
                  "Add the following verification tokens to your manifest file:",
              }),
              (0, y.jsx)("pre", {
                className: "text-sm",
                children: JSON.stringify(r, null),
              }),
              o && (0, y.jsx)(r8, { children: o }),
            ],
          }),
        });
      }
      function aa(e) {
        var t = e.plugin,
          n = e.onClickInstall,
          r = e.onClose,
          a = (0, w.useCallback)(
            function () {
              n(t);
            },
            [t, n]
          );
        return (0, y.jsx)(eD.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "Ready to install",
          primaryButton: (0, y.jsx)(eS.ZP.Button, {
            title: "Install for me",
            color: "primary",
            onClick: a,
          }),
          secondaryButton: (0, y.jsx)(eS.ZP.Button, {
            title: "Install later",
            color: "neutral",
            onClick: r,
          }),
          children: (0, y.jsx)(r6, {
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
      function ai(e) {
        var t = e.onConfirm,
          n = e.onClose;
        return (0, y.jsx)(eD.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, y.jsx)(eS.ZP.Button, {
            title: "Continue",
            color: "primary",
            onClick: t,
          }),
          secondaryButton: (0, y.jsx)(eS.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, y.jsx)(r6, {
            children: (0, y.jsx)(r1.I, {
              children: (0, y.jsx)(r1.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding.",
              }),
            }),
          }),
        });
      }
      function as(e) {
        var t = e.plugin,
          n = e.onInstall,
          r = e.onClose,
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          s = a[1],
          o = (0, b._)((0, w.useState)(t), 2),
          l = o[0],
          u = o[1],
          c = (0, w.useCallback)(function () {
            s(!0);
          }, []);
        return l
          ? i
            ? (0, y.jsx)(al, { plugin: l, onInstall: n, onClose: r })
            : (0, y.jsx)(ai, { onConfirm: c, onClose: r })
          : (0, y.jsx)(ao, { onLoad: u, onClose: r });
      }
      function ao(e) {
        var t = e.onLoad,
          n = e.onClose,
          r = (0, w.useRef)(null),
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          s = a[1],
          o = (0, b._)((0, w.useState)(), 2),
          l = o[0],
          u = o[1];
        (0, w.useEffect)(function () {
          setTimeout(function () {
            var e;
            null === (e = r.current) || void 0 === e || e.focus();
          }, 50);
        }, []);
        var c = (0, w.useCallback)(
          (0, ed._)(function () {
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
                  if ((0, tm.NB)(n))
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
                    s(!0),
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
                  return s(!1), [7];
                case 5:
                  return [2];
              }
            });
          }),
          [t, s, u]
        );
        return (0, y.jsx)(eD.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: "Install an unverified plugin",
          primaryButton: (0, y.jsx)(eS.ZP.Button, {
            title: "Find plugin",
            color: "primary",
            onClick: c,
            loading: i,
          }),
          secondaryButton: (0, y.jsx)(eS.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, y.jsxs)(r6, {
            children: [
              (0, y.jsx)("div", {
                children:
                  "Please provide the website domain of the unverified plugin you'd like to install.",
              }),
              (0, y.jsx)(r0.Z, {
                ref: r,
                name: "url",
                placeholder: "openai.com",
                onPressEnter: c,
              }),
              l && (0, y.jsx)(r8, { children: l }),
            ],
          }),
        });
      }
      function al(e) {
        var t = e.plugin,
          n = e.onInstall,
          r = e.onClose,
          a = (0, b._)((0, w.useState)(), 2),
          i = a[0],
          s = a[1],
          o = (0, b._)((0, w.useState)(!1), 2),
          l = o[0],
          u = o[1],
          c = (0, w.useRef)(null),
          d = (0, r2.U$)({
            onSuccess: function (e) {
              n(e), r();
            },
            onError: function (e) {
              s("Couldn't install plugin.");
            },
          }),
          m = (0, R.hz)(),
          f = t.manifest.name_for_human,
          h = "user_http" === t.manifest.auth.type,
          g = "oauth" === t.manifest.auth.type,
          p = (0, w.useCallback)(
            (0, ed._)(function () {
              var e, n;
              return (0, ef.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (!g) return [3, 1];
                    if (m.has("new_plugin_oauth_endpoint"))
                      return (0, r2.Up)(t), [2];
                    return (
                      (e = (0, r2.nT)(t))
                        ? (window.location.href = e)
                        : s("Missing plugin configuration for ".concat(f, ".")),
                      [3, 8]
                    );
                  case 1:
                    if (!h) return [3, 7];
                    if (
                      !(null === (n = c.current) || void 0 === n
                        ? void 0
                        : n.value)
                    )
                      return s("Please provide your credentials."), [2];
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
                    return r.sent(), s("Couldn't install plugin."), [3, 6];
                  case 5:
                    return u(!1), [7];
                  case 6:
                    return [3, 8];
                  case 7:
                    try {
                      u(!0), d(t.id);
                    } catch (e) {
                      s("Couldn't install plugin.");
                    } finally {
                      u(!1);
                    }
                    r.label = 8;
                  case 8:
                    return [2];
                }
              });
            }),
            [m, t, f, g, h, d]
          );
        return (0, y.jsx)(eD.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, y.jsx)(eS.ZP.Button, {
            title: g ? "Log in with ".concat(f) : "Install plugin",
            color: "primary",
            onClick: p,
            loading: l,
          }),
          secondaryButton: (0, y.jsx)(eS.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: r,
          }),
          children: (0, y.jsxs)(r6, {
            children: [
              (0, y.jsx)(r5.Z, { plugin: t }),
              h &&
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
                      children: (0, y.jsx)(r0.Z, {
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
                      children: f,
                    }),
                    " to log in.",
                  ],
                }),
              i && (0, y.jsx)(r8, { children: i }),
            ],
          }),
        });
      }
      var au = n(86433),
        ac = n(95552),
        ad = n.n(ac),
        am = n(76559),
        af = n(74437);
      ((s = f || (f = {}))[(s.All = 0)] = "All"),
        (s[(s.Installed = 1)] = "Installed"),
        ((o = h || (h = {})).New = "newly_added"),
        (o.Popular = "most_popular");
      var ah = [
        { id: h.Popular, title: "Popular" },
        { id: h.New, title: "New" },
        { id: f.All, title: "All" },
        { id: f.Installed, title: "Installed" },
      ];
      function ag(e, t) {
        var n = t.findIndex(function (t) {
          return t.domain === e;
        });
        if (-1 !== n) {
          var r = t.splice(n, 1)[0];
          t.unshift(r);
        }
      }
      function ap(e, t) {
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
                          s = 0;
                        if (i === n || e.domain.toLowerCase() === n) return 1e3;
                        if (i.startsWith(n)) return 500;
                        if (i.includes(n)) return 100;
                        var o = !0,
                          l = !1,
                          u = void 0;
                        try {
                          for (
                            var c, d = r[Symbol.iterator]();
                            !(o = (c = d.next()).done);
                            o = !0
                          ) {
                            var m = c.value;
                            if (i.startsWith(m)) s += 50;
                            else if (i.includes(m)) s += 10;
                            else {
                              if (!a.includes(m)) return 0;
                              s += 1;
                            }
                          }
                        } catch (e) {
                          (l = !0), (u = e);
                        } finally {
                          try {
                            o || null == d.return || d.return();
                          } finally {
                            if (l) throw u;
                          }
                        }
                        return s;
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
      function ax(e) {
        var t = e.page,
          n = e.numPages,
          r = e.goToPage,
          a = t > 0,
          i = t < n - 1,
          s = (0, w.useCallback)(
            function () {
              r(Math.max(t - 1, 0));
            },
            [t, r]
          ),
          o = (0, w.useCallback)(
            function () {
              r(Math.min(t + 1, n - 1));
            },
            [t, n, r]
          ),
          l = [],
          u = !0,
          c = !1,
          d = void 0;
        try {
          for (
            var m,
              f = (function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 10,
                  r = Math.max(0, t - n + 1);
                if (0 === r) return av(0, t);
                var a = av(0, e),
                  i = av(e + 1, t);
                if (r < i.length - 1)
                  i.splice(Math.floor((i.length - r) / 2), r, -1);
                else if (r < a.length - 1)
                  a.splice(Math.floor((a.length - r) / 2), r, -1);
                else {
                  var s = Math.min(i.length - 3, r),
                    o = r - s + 1;
                  i.splice(Math.floor((i.length - s) / 2), s, -1),
                    a.splice(Math.floor((a.length - o) / 2), o, -2);
                }
                return (0, eA._)(a).concat([e], (0, eA._)(i));
              })(t, n)[Symbol.iterator]();
            !(u = (m = f.next()).done);
            u = !0
          )
            !(function () {
              var e = m.value;
              e < 0
                ? l.push(
                    (0, y.jsx)(
                      "div",
                      {
                        role: "button",
                        className: "flex h-5 w-5 items-center justify-center",
                        children: "…",
                      },
                      "ellipsis-".concat(e)
                    )
                  )
                : l.push(
                    (0, y.jsx)(
                      aS,
                      {
                        role: "button",
                        className: (0, z.Z)(
                          "flex h-5 w-5 items-center justify-center",
                          e === t &&
                            "text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600"
                        ),
                        onClick: function () {
                          return r(e);
                        },
                        children: e + 1,
                      },
                      e
                    )
                  );
            })();
        } catch (e) {
          (c = !0), (d = e);
        } finally {
          try {
            u || null == f.return || f.return();
          } finally {
            if (c) throw d;
          }
        }
        return (0, y.jsxs)("div", {
          className:
            "flex flex-wrap gap-2 text-sm text-black/60 dark:text-white/70",
          children: [
            (0, y.jsxs)(aS, {
              role: "button",
              className: (0, z.Z)("flex items-center", !a && "opacity-50"),
              onClick: s,
              $disabled: !a,
              children: [(0, y.jsx)(el.ZP, { icon: C.YFh }), "Prev"],
            }),
            l,
            (0, y.jsxs)(aS, {
              role: "button",
              className: (0, z.Z)("flex items-center", !i && "opacity-50"),
              onClick: o,
              $disabled: !i,
              children: ["Next", (0, y.jsx)(el.ZP, { icon: C.Tfp })],
            }),
          ],
        });
      }
      function av(e, t) {
        return Array.from({ length: t - e }, function (t, n) {
          return n + e;
        });
      }
      function ab(e) {
        var t = e.onClose,
          n = (0, au.S)().setupMfa;
        return (0, y.jsx)(eD.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: "Enable two-factor authentication",
          primaryButton: (0, y.jsx)(eS.ZP.Button, {
            title: "Enable two-factor authentication",
            color: "primary",
            onClick: n,
          }),
          secondaryButton: (0, y.jsx)(eS.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, y.jsx)(r6, {
            children: (0, y.jsx)(r1.I, {
              children: (0, y.jsx)(r1.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "This plugin requires you to have two-factor authentication enabled for additional security. Please set up two-factor authentication and try again.",
              }),
            }),
          }),
        });
      }
      function ay() {
        var e = (0, q._)([
          "text-sm text-black/70 dark:text-white/70 whitespace-nowrap ",
          "",
        ]);
        return (
          (ay = function () {
            return e;
          }),
          e
        );
      }
      function aj() {
        var e = (0, q._)([
          "hidden h-4 border-l border-black/30 dark:border-white/30 sm:block",
        ]);
        return (
          (aj = function () {
            return e;
          }),
          e
        );
      }
      var ak =
          ((g = {}),
          (0, nb._)(g, E._G.Mobile, 8),
          (0, nb._)(g, E._G.Small, 4),
          (0, nb._)(g, E._G.Medium, 4),
          (0, nb._)(g, E._G.Large, 6),
          (0, nb._)(g, E._G.XLarge, 8),
          g),
        aw = (0, M.vU)({
          searchPlaceholder: {
            id: "PluginStoreModal.searchPlaceholder",
            defaultMessage: "Search plugins",
            description: "Placeholder text for the plugin store search bar",
          },
          noSearchResultsTitle: {
            id: "PluginStoreModal.noSearchResults",
            defaultMessage: 'No plugins found for "{query}"',
            description:
              "Message shown when no plugins are found for a search query",
          },
          noSearchResultsHint: {
            id: "PluginStoreModal.noSearchResultsHint",
            defaultMessage: "Try a different query or category",
            description:
              "Hint shown when no plugins are found for a search query",
          },
          installUnverifiedPlugin: {
            id: "PluginStoreModal.installUnverifiedPlugin",
            defaultMessage: "Install an unverified plugin",
            description: "Link to dialog to install an unverified plugin",
          },
          developPlugin: {
            id: "PluginStoreModal.developPlugin",
            defaultMessage: "Develop your own plugin",
            description: "Link to dialog to develop your own plugin",
          },
          aboutPlugins: {
            id: "PluginStoreModal.aboutPlugins",
            defaultMessage: "About plugins",
            description: "Link to learn more about plugins",
          },
        }),
        aC = h.Popular;
      function a_(e) {
        var t,
          n,
          r,
          a = e.onInstallWithAuthRequired,
          i = e.onClickInstallDeveloper,
          s = e.onClickDevelop,
          o = e.onClickAbout,
          l = e.onClose,
          u = (0, ee.Z)(),
          c = (0, R.hz)(),
          d = (0, b._)((0, w.useState)(aC), 2),
          m = d[0],
          h = d[1],
          g = (0, b._)((0, w.useState)(""), 2),
          p = g[0],
          v = g[1],
          j = ((n = (t = (0, af.C)()).isLoading),
          (r = t.installedPlugins),
          {
            availableFilters: (0, w.useMemo)(
              function () {
                return ah.filter(function (e) {
                  return e.id !== f.Installed || r.length > 0;
                });
              },
              [r]
            ),
            isLoading: n,
          }).availableFilters;
        (0, w.useEffect)(
          function () {
            j.some(function (e) {
              return e.id === m;
            }) || h(aC);
          },
          [m, j]
        );
        var k = (0, w.useCallback)(function (e) {
          v(e), h(f.All);
        }, []);
        return (0, y.jsx)(eD.Z, {
          isOpen: !0,
          onClose: l,
          size: "custom",
          className:
            "w-full max-w-7xl bg-gray-50 md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px]",
          type: "success",
          title: "Plugin store",
          closeButton: (0, y.jsx)(eS.ZP.CloseButton, { onClose: l }),
          children: (0, y.jsxs)(r6, {
            children: [
              j.length > 1 &&
                (0, y.jsxs)("div", {
                  className: "flex flex-wrap gap-3",
                  children: [
                    j.map(function (e) {
                      return (0, y.jsx)(
                        aN,
                        {
                          selected: m === e.id,
                          onClick: function () {
                            h(e.id);
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
                          children: (0, y.jsx)(el.ZP, {
                            icon: C.jRj,
                            className:
                              "h-5 w-5 text-gray-500 dark:text-gray-400",
                          }),
                        }),
                        (0, y.jsx)(r0.Z, {
                          className: "pl-10",
                          autoFocus: !0,
                          type: "search",
                          placeholder: u.formatMessage(aw.searchPlaceholder),
                          value: p,
                          onChange: function (e) {
                            return k(e.target.value);
                          },
                          name: "search",
                        }),
                      ],
                    }),
                  ],
                }),
              (0, y.jsx)(aM, {
                filter: m,
                query: p,
                onInstallWithAuthRequired: a,
                children: (0, y.jsxs)("div", {
                  className: "flex flex-col items-center gap-2 sm:flex-row",
                  children: [
                    c.has("tools3_dev") &&
                      (0, y.jsxs)(y.Fragment, {
                        children: [
                          (0, y.jsx)(aS, {
                            onClick: i,
                            children: (0, y.jsx)(
                              _.Z,
                              (0, x._)({}, aw.installUnverifiedPlugin)
                            ),
                          }),
                          (0, y.jsx)(aD, {}),
                          (0, y.jsx)(aS, {
                            onClick: s,
                            children: (0, y.jsx)(
                              _.Z,
                              (0, x._)({}, aw.developPlugin)
                            ),
                          }),
                          (0, y.jsx)(aD, {}),
                        ],
                      }),
                    (0, y.jsx)(aS, {
                      onClick: o,
                      children: (0, y.jsx)(_.Z, (0, x._)({}, aw.aboutPlugins)),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function aM(e) {
        var t,
          n,
          r,
          a,
          i,
          s,
          o,
          l,
          u,
          c,
          d,
          m,
          g,
          p,
          x,
          j,
          k,
          C,
          _,
          M,
          N,
          P,
          Z,
          T,
          I,
          S,
          D = e.filter,
          R = e.query,
          A = e.onInstallWithAuthRequired,
          B = e.children,
          F = ak[(0, E.dQ)()],
          L = (0, b._)((0, w.useState)(0), 2),
          O = L[0],
          U = L[1],
          q =
            ((u = (o = { pageSize: F, filter: D, query: R, page: O }).filter),
            (c = o.query),
            (d = o.page),
            (m = o.pageSize),
            (g = (0, ep.kP)().session),
            (x = (p = (0, af.C)()).installedPlugins),
            (j = p.isLoading),
            (C = (k = (0, am.Z)()).approvedPlugins),
            (_ = k.isLoading),
            (M = k.approvedPluginsByCategory),
            (P = (function (e, t) {
              for (
                var n = (0, eA._)(e), r = ad()(t), a = n.length - 1;
                a > 0;
                a--
              ) {
                var i,
                  s = Math.floor(r() * (a + 1));
                (i = [n[s], n[a]]), (n[a] = i[0]), (n[s] = i[1]);
              }
              return (
                ag("retrieval.apps.openai.com", n),
                ag("retrieval-browsing.apps.openai.com", n),
                ag("api.openai.com", n),
                n
              );
            })(
              (N = ap(
                (0, w.useMemo)(
                  function () {
                    if (u === f.All) return C;
                    if (u && Object.values(h).includes(u)) {
                      var e, t;
                      return null !==
                        (t =
                          null === (e = M[u]) || void 0 === e
                            ? void 0
                            : e.items) && void 0 !== t
                        ? t
                        : [];
                    }
                    return [];
                  },
                  [C, u, M]
                ),
                c
              )),
              (null == g
                ? void 0
                : null === (l = g.user) || void 0 === l
                ? void 0
                : l.id) || ""
            )),
            (Z = ap(x, c)),
            (T = []),
            (I = !1),
            u === f.Installed
              ? ((T = Z), (I = j))
              : c
              ? ((T = N), (I = _))
              : ((T = P), (I = _)),
            {
              isLoading: I,
              items: ((n = (t = { page: d, items: T, pageSize: m }).page),
              (r = t.items),
              (a = t.pageSize),
              (i = Math.ceil(r.length / a)),
              (s = n * a),
              (S = { pagesTotal: i, pageItems: r.slice(s, s + a) })).pageItems,
              pagination: (0, v._)(S, ["pageItems"]),
            }),
          z = q.isLoading,
          Q = q.items,
          W = q.pagination.pagesTotal;
        (0, w.useEffect)(
          function () {
            U(0);
          },
          [D, R]
        );
        var H = (0, b._)((0, w.useState)(!1), 2),
          $ = H[0],
          G = H[1];
        return $
          ? (0, y.jsx)(ab, {
              onClose: function () {
                G(!1);
              },
            })
          : (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(aP, {
                  plugins: Q,
                  numSkeletons: F,
                  query: R,
                  isLoading: z,
                  onInstallWithAuthRequired: A,
                  onRequestMfa: function () {
                    return G(!0);
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
                        W > 1 &&
                        (0, y.jsx)(ax, { page: O, numPages: W, goToPage: U }),
                    }),
                    B,
                  ],
                }),
              ],
            });
      }
      function aN(e) {
        var t = e.selected,
          n = e.onClick,
          r = e.children;
        return (0, y.jsx)(eo.z, {
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
      function aP(e) {
        var t = e.plugins,
          n = e.numSkeletons,
          r = e.isLoading,
          a = e.onInstallWithAuthRequired,
          i = e.onRequestMfa,
          s = e.query;
        if (0 === t.length && !r && s)
          return (0, y.jsxs)("div", {
            className:
              "flex h-[404px] flex-col items-center justify-center gap-4",
            children: [
              (0, y.jsx)("div", {
                className: "text-lg font-medium",
                children: (0, y.jsx)(
                  _.Z,
                  (0, em._)((0, x._)({}, aw.noSearchResultsTitle), {
                    values: { query: s },
                  })
                ),
              }),
              (0, y.jsx)("div", {
                className: "text-sm text-black/50",
                children: (0, y.jsx)(_.Z, (0, x._)({}, aw.noSearchResultsHint)),
              }),
            ],
          });
        var o = r
          ? Array(n)
              .fill(0)
              .map(function (e, t) {
                return (0, y.jsx)(aT, {}, t);
              })
          : t.map(function (e) {
              return (0,
              y.jsx)(aZ, { plugin: e, onInstallWithAuthRequired: a, onRequestMfa: i }, e.id);
            });
        return (0, y.jsx)("div", {
          className:
            "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4",
          children: o,
        });
      }
      function aZ(e) {
        var t,
          n,
          r = e.plugin,
          a = e.onInstallWithAuthRequired,
          i = e.onRequestMfa,
          s = (0, b._)((0, w.useState)(!1), 2),
          o = s[0],
          l = s[1],
          u = (0, b._)((0, w.useState)(!1), 2),
          c = u[0],
          d = u[1],
          m = (0, r2.U$)({
            onSuccess: function (e) {
              (0, rX.wu)(e.id);
            },
            onError: function (e) {
              console.error(e),
                nT.m.danger(
                  "Error installing ".concat(r.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              l(!1);
            },
          }),
          f = (0, r2.qo)({
            onSuccess: function () {},
            onError: function (e) {
              console.error(e),
                nT.m.danger(
                  "Error uninstalling ".concat(r.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              d(!1);
            },
          }),
          h = (0, ep.kP)().session,
          g = (0, R.hz)(),
          p = (0, au.S)().isUsernamePassword,
          x = (0, w.useCallback)(
            function () {
              var e,
                t = r.manifest.auth.type;
              if (
                !("none" === t || "service_http" === t) &&
                !(null == h
                  ? void 0
                  : null === (e = h.user) || void 0 === e
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
                  (0, r2.Up)(r);
                  return;
                }
                var n = (0, r2.nT)(r);
                n
                  ? (window.location.href = n)
                  : nT.m.danger(
                      "Missing plugin configuration for ".concat(
                        r.manifest.name_for_human,
                        "."
                      )
                    );
              } else "user_http" === t ? a(r) : (l(!0), m(r.id));
            },
            [r, m, a, i, p, h, g]
          ),
          v = (0, w.useCallback)(
            function () {
              d(!0), f(r.id);
            },
            [r, f]
          );
        return (
          (n =
            o || c
              ? (0, y.jsxs)(eo.z, {
                  color: "light",
                  className: "bg-green-100 hover:bg-green-100",
                  children: [
                    o ? "Installing" : "Uninstalling",
                    (0, y.jsx)(eR.Z, {}),
                  ],
                })
              : (
                  null === (t = r.user_settings) || void 0 === t
                    ? void 0
                    : t.is_installed
                )
              ? (0, y.jsxs)(eo.z, {
                  color: "light",
                  className: "hover:bg-gray-200",
                  onClick: v,
                  children: ["Uninstall", (0, y.jsx)(el.ZP, { icon: C.$Rx })],
                })
              : (0, y.jsxs)(eo.z, {
                  onClick: x,
                  children: ["Install", (0, y.jsx)(el.ZP, { icon: C.wzc })],
                })),
          (0, y.jsx)(aI, {
            logo: (0, y.jsx)(nv.Z, {
              url: r.manifest.logo_url,
              name: r.manifest.name_for_human,
              size: "100%",
              large: !0,
            }),
            tag: (0, tm.cf)(r)
              ? (0, y.jsx)(tM, {})
              : "approved" !== r.status
              ? (0, y.jsx)(t_, {})
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
      function aT() {
        return (0, y.jsx)(aI, {
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
      function aI(e) {
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
      var aS = et.Z.button(ay(), function (e) {
          return e.$disabled
            ? "opacity-50 cursor-default"
            : "hover:text-black/50 dark:hover:text-white/50";
        }),
        aD = et.Z.div(aj());
      function aR(e) {
        var t = e.allowClose,
          n = e.onConfirm,
          r = e.onClose;
        return (0, y.jsx)(eD.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "About plugins",
          primaryButton: (0, y.jsx)(eS.ZP.Button, {
            title: "OK",
            color: "primary",
            onClick: n,
          }),
          secondaryButton:
            t &&
            (0, y.jsx)(eS.ZP.Button, {
              title: "Cancel",
              color: "neutral",
              onClick: r,
            }),
          children: (0, y.jsx)(r6, {
            children: (0, y.jsxs)(r1.I, {
              children: [
                (0, y.jsx)(r1.Z, {
                  icon: "\uD83D\uDEA8",
                  children:
                    "Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation.",
                }),
                (0, y.jsx)(r1.Z, {
                  icon: "\uD83C\uDF10",
                  children:
                    "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send your conversation and the country or state you're in to the plugin.",
                }),
                (0, y.jsx)(r1.Z, {
                  icon: "\uD83E\uDDE0",
                  children:
                    "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled.",
                }),
              ],
            }),
          }),
        });
      }
      var aA = "oai/apps/hasSeenPluginsDisclaimer";
      function aE(e) {
        var t = e.onInstall,
          n = e.onClose,
          r = (0, b._)((0, w.useState)(!!ec.m.getItem(aA)), 2),
          a = r[0],
          i = r[1],
          s = (0, b._)((0, w.useState)(!1), 2),
          o = s[0],
          l = s[1],
          u = (0, b._)((0, w.useState)(!1), 2),
          c = u[0],
          d = u[1],
          m = (0, b._)((0, w.useState)(), 2),
          f = m[0],
          h = m[1],
          g = (0, b._)((0, w.useState)(!1), 2),
          p = g[0],
          x = g[1],
          v = (0, w.useCallback)(function () {
            i(!0), l(!1), ec.m.setItem(aA, !0);
          }, []),
          j = (0, w.useCallback)(function (e) {
            h(e), d(!0);
          }, []),
          k = (0, w.useCallback)(function () {
            d(!0);
          }, []),
          C = (0, w.useCallback)(function () {
            x(!0);
          }, []),
          _ = (0, w.useCallback)(function () {
            l(!0);
          }, []),
          M = (0, w.useCallback)(
            function (e) {
              (0, rX.wu)(e.id), n(), t(e);
            },
            [t, n]
          ),
          N = (0, w.useCallback)(
            function () {
              h(void 0), d(!1), n();
            },
            [n]
          ),
          P = (0, w.useCallback)(
            function () {
              x(!1), n();
            },
            [n]
          );
        return !a || o
          ? (0, y.jsx)(aR, { allowClose: !a, onConfirm: v, onClose: n })
          : c
          ? (0, y.jsx)(as, { plugin: f, onInstall: M, onClose: N })
          : p
          ? (0, y.jsx)(r9, {
              onClickInstall: j,
              onInstallLocalhost: M,
              onClose: P,
            })
          : (0, y.jsx)(a_, {
              onInstallWithAuthRequired: j,
              onClickInstallDeveloper: k,
              onClickDevelop: C,
              onClickAbout: _,
              onClose: n,
            });
      }
      function aB() {
        var e = (0, q._)([
          "flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white",
        ]);
        return (
          (aB = function () {
            return e;
          }),
          e
        );
      }
      function aF(e) {
        var t,
          n = e.theme,
          r = void 0 === n ? "default" : n,
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          s = a[1],
          o = (0, b._)((0, w.useState)(!1), 2),
          l = o[0],
          u = o[1],
          c = (0, k.useRouter)(),
          d = (0, af.C)(),
          m = d.installedPlugins,
          f = d.isLoading,
          h = (0, rX.p0)(),
          g = (0, w.useRef)(null);
        (0, w.useEffect)(
          function () {
            if (!f) {
              var e = c.query,
                t = e.loginAip,
                n = e.loginSuccess,
                r = (0, v._)(e, ["loginAip", "loginSuccess"]);
              if (t) {
                var a,
                  i,
                  s = m.find(function (e) {
                    return e.id === t;
                  });
                s && "true" === n
                  ? ((0, rX.wu)(c.query.loginAip),
                    null === (a = g.current) || void 0 === a || a.open())
                  : nT.m.warning(
                      "Couldn't log in with ".concat(
                        null !==
                          (i =
                            null == s ? void 0 : s.manifest.name_for_human) &&
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
          [c, m, f]
        );
        var p = (0, w.useCallback)(function () {
            var e;
            null === (e = g.current) || void 0 === e || e.open();
          }, []),
          x = (0, w.useCallback)(function () {
            s(!1);
          }, []),
          j = (0, b._)((0, w.useState)(h), 2),
          _ = j[0],
          M = j[1],
          N = (0, w.useCallback)(
            function (e) {
              if (e.length > rX.hZ)
                u(!0),
                  setTimeout(function () {
                    u(!1);
                  }, 600);
              else {
                var t = e.filter(function (e) {
                    return !h.find(function (t) {
                      return t.id === e.id;
                    });
                  }),
                  n = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (
                    var i, s = rX.iO[Symbol.iterator]();
                    !(n = (i = s.next()).done);
                    n = !0
                  ) {
                    var o = (function () {
                      var e = i.value,
                        n = h.find(function (t) {
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
                            nT.m.warning(
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
                    if ("object" === (0, rw._)(o)) return o.v;
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
                (0, rX.dT)(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              }
            },
            [h]
          ),
          P = (0, w.useCallback)(function (e) {
            var t;
            null === (t = g.current) || void 0 === t || t.close(),
              "store" === e && s(!0);
          }, []),
          Z = (0, w.useCallback)(
            function () {
              M(h),
                eO.m.logEvent("chatgpt_plugin_chooser_opened", null, {
                  num_enabled_plugins: "".concat(h.length),
                });
            },
            [h]
          ),
          T = (0, w.useCallback)(
            function () {
              var e = _.filter(function (e) {
                  return !h.find(function (t) {
                    return t.id === e.id;
                  });
                }),
                t = h.filter(function (e) {
                  return !_.find(function (t) {
                    return t.id === e.id;
                  });
                }),
                n = !0,
                r = !1,
                a = void 0;
              try {
                for (
                  var i, s = t[Symbol.iterator]();
                  !(n = (i = s.next()).done);
                  n = !0
                ) {
                  var o = i.value;
                  eO.m.logEvent("chatgpt_plugin_enabled", null, {
                    plugin_id: o.id,
                  });
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
              var l = !0,
                u = !1,
                c = void 0;
              try {
                for (
                  var d, m = e[Symbol.iterator]();
                  !(l = (d = m.next()).done);
                  l = !0
                ) {
                  var f = d.value;
                  eO.m.logEvent("chatgpt_plugin_disabled", null, {
                    plugin_id: f.id,
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
            [h, _]
          ),
          I = m.map(function (e) {
            return {
              value: e,
              title: e.manifest.name_for_human,
              description: e.manifest.description_for_human,
              tags: [],
              customTags: (0, tm.cf)(e)
                ? (0, y.jsx)(tM, {})
                : "approved" !== e.status
                ? (0, y.jsx)(t_, {})
                : void 0,
              imageUrl: e.manifest.logo_url,
            };
          }),
          S = I.filter(function (e) {
            return h.find(function (t) {
              return t.id === e.value.id;
            });
          }),
          D = "".concat(0 === h.length ? "No" : h.length, " plugins enabled");
        if (h.length > 0 && h.length < 6) {
          var R = h.map(function (e, t) {
            return (0,
            y.jsx)(nv.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 24 }, t);
          });
          D = (0, y.jsx)("div", { className: "flex gap-2", children: R });
        }
        var A = [{ id: "store", label: "Plugin store", icon: C.Rgz }];
        m.length > rX.hZ &&
          (t = (0, y.jsxs)(aL, {
            className: (0, z.Z)(
              "transition-colors duration-300",
              l && "bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800"
            ),
            children: [h.length, "/", rX.hZ, " Enabled"],
          }));
        var E = (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)(aL, { children: "Loading..." }),
            (0, y.jsx)(rU, { showCheckbox: !0, theme: r }),
            (0, y.jsx)(rU, { showCheckbox: !0, theme: r }),
            (0, y.jsx)(rU, { showCheckbox: !0, theme: r }),
            (0, y.jsx)(rU, { showCheckbox: !0, theme: r }),
            (0, y.jsx)(rU, { showCheckbox: !0, theme: r }),
          ],
        });
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)(rE, {
              name: "Plugins",
              selectedOptions: S,
              selectedLabel: D,
              options: I,
              actions: A,
              onChange: N,
              onAction: P,
              onOpen: Z,
              onClose: T,
              dropdownRef: g,
              isLoading: f,
              loadingState: E,
              header: t,
              theme: "mini" === r ? "mini" : "default",
            }),
            i && (0, y.jsx)(aE, { onInstall: p, onClose: x }),
          ],
        });
      }
      var aL = et.Z.div(aB()),
        aO = n(48101);
      function aU(e) {
        var t,
          n = e.currentModelId,
          r = (0, R.hz)(),
          a = (0, tE.fm)(),
          i = (0, tE.B9)(),
          s = void 0 !== n ? i.get(n) : void 0,
          o = (0, eB.Fl)().isPluginsAvailable,
          l = (0, tE.iu)();
        return r.has("model_switcher") && l.size > 1 && s
          ? (0, y.jsxs)("div", {
              className:
                "relative flex flex-col items-stretch justify-center gap-2 sm:items-center",
              children: [
                (0, y.jsx)(rk, { currentModel: s, onModelChange: a }),
                o &&
                  (null == s
                    ? void 0
                    : null === (t = s.enabledTools) || void 0 === t
                    ? void 0
                    : t.includes("tools3")) &&
                  (0, y.jsx)(aF, { theme: "mini" }),
              ],
            })
          : null;
      }
      var aq = function (e) {
          var t,
            n,
            r,
            a = e.currentModelConfig,
            i = e.clientThreadId,
            s = e.icon,
            o = (0, w.useContext)(A.gB),
            l = (0, N.aS)(i),
            u = (0, R.hz)().has(ei.b5),
            c = (0, N.Ro)(i);
          void 0 === c && (c = a);
          var d = c.tags
              .filter(function (e) {
                return rA.includes(e);
              })
              .map(function (e) {
                return rz(e);
              }),
            m = (0, tT.v)();
          if (m.length > 0) {
            var f = m.map(function (e, t) {
              return (0,
              y.jsx)(nv.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 16 }, t);
            });
            r = (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)("div", { children: "Enabled plugins:" }),
                f,
              ],
            });
          }
          var h = (0, k.useRouter)(),
            g =
              o &&
              (null === (t = h.query) || void 0 === t
                ? void 0
                : null === (n = t.shareParams) || void 0 === n
                ? void 0
                : n[1]) === "moderate",
            p = (0, D.tN)(function (e) {
              return e.activeModals.has(D.B.DownloadMessages);
            }),
            x = N.tQ.getThreadCurrentLeafId(i),
            v = (0, N.u9)(i, x),
            b = (0, w.useCallback)(
              function () {
                u && (0, aO.Ub)(i, v);
              },
              [i, u, v]
            );
          return (0, y.jsxs)(y.Fragment, {
            children: [
              u &&
                (0, y.jsx)(eD.Z, {
                  type: "success",
                  isOpen: p,
                  onClose: function () {
                    D.vm.closeModal(D.B.DownloadMessages);
                  },
                  closeButton: (0, y.jsx)(eS.ZP.CloseButton, {
                    onClose: function () {
                      D.vm.closeModal(D.B.DownloadMessages);
                    },
                  }),
                  primaryButton: (0, y.jsx)(eS.ZP.Button, {
                    onClick: b,
                    children: "Download",
                  }),
                  title: "Download chat debug info",
                  secondaryButton: (0, y.jsx)(eS.ZP.Button, {
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
                  !o && void 0 !== s && (0, y.jsx)(el.ZP, { icon: s }),
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
                        (0, y.jsx)(az, { clientThreadId: i }),
                      ],
                    }),
                ],
              }),
            ],
          });
        },
        az = function (e) {
          var t = e.clientThreadId,
            n = (0, N.Qi)(t);
          return (0, y.jsxs)(eu.fC, {
            children: [
              (0, y.jsx)(eu.xz, {
                asChild: !0,
                children: (0, y.jsxs)("div", {
                  className: "cursor-pointer pt-0.5",
                  children: [
                    (0, y.jsx)(el.ZP, {
                      className: "text-gray-500 dark:text-gray-300",
                      strokeWidth: 0,
                      icon: eg.frK,
                    }),
                    (0, y.jsx)(nx.T, { children: "Custom user info details" }),
                  ],
                }),
              }),
              (0, y.jsx)(eu.h_, {
                children: (0, y.jsx)(eu.VY, {
                  side: "bottom",
                  sideOffset: 8,
                  collisionPadding: 16,
                  className:
                    "relative max-h-96 min-w-[300px] max-w-xs animate-slideDownAndFade select-none overflow-y-auto whitespace-pre-line rounded-xl border-gray-100 bg-white p-4 text-sm text-gray-600 shadow-xs dark:bg-gray-900 dark:text-white sm:max-w-md",
                  onOpenAutoFocus: function (e) {
                    e.preventDefault();
                  },
                  onCloseAutoFocus: function (e) {
                    e.preventDefault();
                  },
                  children: n,
                }),
              }),
            ],
          });
        };
      function aQ() {
        var e = (0, q._)(["flex flex-col text-sm dark:bg-gray-800"]);
        return (
          (aQ = function () {
            return e;
          }),
          e
        );
      }
      function aW() {
        var e = (0, q._)(["h-32 md:h-48 flex-shrink-0"]);
        return (
          (aW = function () {
            return e;
          }),
          e
        );
      }
      function aH() {
        var e = (0, q._)([
          "cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
        ]);
        return (
          (aH = function () {
            return e;
          }),
          e
        );
      }
      function a$() {
        var e = (0, q._)([
          "px-2 relative w-full flex flex-col h-full py-2 md:py-6",
        ]);
        return (
          (a$ = function () {
            return e;
          }),
          e
        );
      }
      function aG() {
        var e = (0, q._)([
          "text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow",
        ]);
        return (
          (aG = function () {
            return e;
          }),
          e
        );
      }
      var aV = (0, M.vU)({
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
      function aJ(e) {
        var t = e.clientThreadId,
          n = (0, N.qA)(t),
          r = (0, N.je)(t),
          a = (0, N.qN)(function (e) {
            return N.iN.getThreadCreateTime(t, e);
          }),
          i = (0, N.JI)(t),
          s = (0, w.useMemo)(
            function () {
              return eI(i);
            },
            [i]
          ),
          o = (0, N.aS)(t);
        return (0, y.jsxs)("div", {
          className:
            "mb-1 border-b border-gray-100 pt-3 sm:mb-2 sm:pb-6 sm:pt-8",
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
            (0, y.jsx)(aY, {
              shouldShowCodeInterpreterDisclaimer: s,
              shouldShowUserContextCustomProfileDisclaimer: o,
            }),
          ],
        });
      }
      var aY = function (e) {
        var t = e.shouldShowCodeInterpreterDisclaimer,
          n = e.shouldShowUserContextCustomProfileDisclaimer;
        return t && n
          ? (0, y.jsx)("div", {
              className: "mt-4",
              children: (0, y.jsx)(il, {
                children: (0, y.jsx)(
                  _.Z,
                  (0, x._)(
                    {},
                    aV.userContextCustomProfileAndCodeInterpreterSupportDisclaimer
                  )
                ),
              }),
            })
          : (0, y.jsxs)(y.Fragment, {
              children: [
                t &&
                  (0, y.jsx)("div", {
                    className: "mt-4",
                    children: (0, y.jsx)(il, {
                      children: (0, y.jsx)(
                        _.Z,
                        (0, x._)({}, aV.codeInterpreterSupportDisclaimer)
                      ),
                    }),
                  }),
                n &&
                  (0, y.jsx)("div", {
                    className: "mt-4",
                    children: (0, y.jsx)(il, {
                      children: (0, y.jsx)(
                        _.Z,
                        (0, x._)({}, aV.userContextCustomProfileDisclaimer)
                      ),
                    }),
                  }),
              ],
            });
      };
      function aK(e) {
        var t,
          n = e.onChangeItemInView,
          r = e.onRequestMoreCompletions,
          a = e.onUpdateNode,
          i = e.onChangeRating,
          s = e.onDeleteNode,
          o = e.onRequestCompletion,
          l = e.onHandleChangeVariantFeedbackInlineComparisonRating,
          u = e.clientThreadId,
          c = e.conversationLeafId,
          d = e.isNewThread,
          m = e.activeRequests,
          f = e.currentThreadModel,
          h = e.inlineEmbeddedDisplay,
          g = e.initiallyHighlightedMessageId,
          p = e.promptTextareaRef,
          x = (0, w.useContext)(A.gB),
          v = (0, eE.useScrollToBottom)(),
          j = (0, b._)((0, eE.useSticky)(), 1)[0],
          k = (0, R.hz)(),
          _ = (0, eB.Fl)().isBetaFeaturesUiEnabled,
          M = (0, N.Kt)(u),
          P = (0, R.$T)(),
          Z = (0, tE.iu)(),
          T = (0, tE.ZL)(),
          I = (0, tE.Xy)(f, u),
          S = (0, D.tN)(function (e) {
            return e.isDesktopNavCollapsed;
          }),
          E = k.has("model_switcher") && Z.size > 1,
          B = d && !P && E,
          F = (0, b._)((0, w.useState)(!1), 2),
          L = F[0],
          O = F[1],
          U = (0, nE.Ri)(I.id),
          q = (0, N.U0)(u, c),
          Q = (0, N.UL)(u).initialConversationTurns,
          W = (0, N.hW)(u),
          H = !x && W;
        (0, w.useEffect)(
          function () {
            if (M) {
              var e = setTimeout(function () {
                O(!0);
              }, 1e3);
              return function () {
                clearTimeout(e);
              };
            }
            O(!1);
          },
          [M]
        );
        var $ = k.has(ei.FZ),
          G =
            !_ && I.tags.includes(tE.S.GPT_4)
              ? "black"
              : null !== (t = null == U ? void 0 : U.backgroundColor) &&
                void 0 !== t
              ? t
              : void 0,
          V = (0, eA._)(Array(q).keys()).map(function (e) {
            return (0,
            y.jsx)(tJ, { isFinalTurn: e === q - 1, turnIndex: e, clientThreadId: u, conversationLeafId: c, onChangeItemInView: n, onChangeRating: i, onRequestMoreCompletions: r, onDeleteNode: s, onRequestCompletion: o, onUpdateNode: a, onHandleChangeVariantFeedbackInlineComparisonRating: l, activeRequests: m, currentModelId: I.id, showInlineEmbeddedDisplay: h, initiallyHighlightedMessageId: g, avatarColor: G, includeChatPreferencesMismatchDisclaimer: null != Q && H && e === Q.length - 1 }, e);
          });
        return (0, y.jsxs)(y.Fragment, {
          children: [
            B &&
              (0, y.jsxs)(a2, {
                children: [
                  (0, y.jsx)(aU, { currentModelId: I.id }),
                  (0, y.jsxs)(a5, {
                    children: ["ChatGPT", (0, y.jsx)(eF.ZP, {})],
                  }),
                ],
              }),
            (0, y.jsxs)(aX, {
              children: [
                d && !P && !T && !E && (0, y.jsx)(np, { promptTextareaRef: p }),
                L && (0, y.jsx)(eR.Z, { className: "mt-4 self-center" }),
                !d &&
                  (x || (!P && E)) &&
                  !h &&
                  (0, y.jsx)(aq, {
                    icon: _ ? (null == U ? void 0 : U.icon) : void 0,
                    currentModelConfig: I,
                    clientThreadId: u,
                  }),
                $
                  ? V.length > 0 &&
                    (0, y.jsx)("div", {
                      className: (0, z.Z)(
                        "flex flex-col items-center",
                        S ? "sm:px-14" : "sm:px-4"
                      ),
                      children: (0, y.jsxs)("div", {
                        className: "w-full max-w-[44rem] pt-4",
                        children: [
                          x && !h && (0, y.jsx)(aJ, { clientThreadId: u }),
                          V,
                        ],
                      }),
                    })
                  : (0, y.jsxs)(y.Fragment, {
                      children: [
                        x &&
                          !h &&
                          (0, y.jsx)("div", {
                            className:
                              "mx-auto w-full p-4 md:max-w-2xl lg:max-w-xl lg:px-0 xl:max-w-3xl",
                            children: (0, y.jsx)(aJ, { clientThreadId: u }),
                          }),
                        V,
                      ],
                    }),
                !B && !h && (0, y.jsx)(a0, {}),
              ],
            }),
            !j &&
              !h &&
              (0, y.jsx)(a1, {
                onClick: v,
                children: (0, y.jsx)(el.ZP, { icon: C.tv1, className: "m-1" }),
              }),
          ],
        });
      }
      var aX = et.Z.div(aQ()),
        a0 = et.Z.div(aW()),
        a1 = et.Z.button(aH()),
        a2 = et.Z.div(a$()),
        a5 = et.Z.h1(aG());
      function a3() {
        var e = (0, q._)([
          "relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch",
        ]);
        return (
          (a3 = function () {
            return e;
          }),
          e
        );
      }
      function a4() {
        var e = (0, q._)(["grow flex-1 overflow-hidden"]);
        return (
          (a4 = function () {
            return e;
          }),
          e
        );
      }
      function a6() {
        var e = (0, q._)([
          "w-full mb-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden bg-gray-50",
        ]);
        return (
          (a6 = function () {
            return e;
          }),
          e
        );
      }
      function a8() {
        var e = (0, q._)([
          "flex p-4 bg-white dark:bg-gray-800/90 border-t border-gray-100 dark:border-gray-700 rounded-b-lg w-full h-full\n",
          "\n",
        ]);
        return (
          (a8 = function () {
            return e;
          }),
          e
        );
      }
      function a7() {
        var e = (0, q._)([
          "flex w-full items-center justify-left gap-2 min-h-[1.5rem]",
        ]);
        return (
          (a7 = function () {
            return e;
          }),
          e
        );
      }
      function a9() {
        var e = (0, q._)([
          "border-none focus:ring-gray-200 dark:focus:ring-gray-600 bg-transparent py-0.5 -my-0.5 pl-1 -ml-1 w-full",
        ]);
        return (
          (a9 = function () {
            return e;
          }),
          e
        );
      }
      function ie() {
        var e = (0, q._)(["flex-none h-full mt-auto mb-auto"]);
        return (
          (ie = function () {
            return e;
          }),
          e
        );
      }
      var it = (0, M.vU)({
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
      function ir(e) {
        var t = e.serverThreadId,
          n = e.activeRequests,
          r = (0, N.oq)(t),
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
          s = (0, w.useRef)(!1);
        return (
          (0, w.useEffect)(
            function () {
              if (i && !s.current) {
                s.current = !0;
                var e = N.tQ.getThreadCurrentLeafId(t),
                  n = N.tQ.getTree(t).getMessageId(e);
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
                    e instanceof ey.Q0 && "string" == typeof e.message
                      ? a.setState({ linkError: e.message })
                      : (nT.m.danger(
                          "Failed to copy link to clipboard - could not create link"
                        ),
                        D.vm.closeSharingModal());
                  });
              }
            },
            [i]
          ),
          (0, y.jsx)(ev.Provider, {
            value: a,
            children: (0, y.jsx)(is, (0, x._)({}, e)),
          })
        );
      }
      function ia(e) {
        return (
          !0 === e.has_been_auto_blocked ||
          !0 === e.has_been_auto_moderated ||
          !0 === e.has_been_blocked
        );
      }
      var ii =
        "https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq";
      function is(e) {
        var t,
          n,
          r,
          a,
          i,
          s = e.serverThreadId,
          o = e.activeRequests,
          l = e.currentThreadModel,
          u = function () {
            (!Y ||
              window.confirm(c.formatMessage(it.confirmCloseWithChanges))) &&
              D.vm.closeSharingModal();
          },
          c = (0, ee.Z)(),
          d = (0, w.useRef)(null),
          m = (0, b._)((0, w.useState)(!1), 2),
          f = m[0],
          h = m[1],
          g = (0, b._)((0, w.useState)(!1), 2),
          p = g[0],
          v = g[1],
          j = (0, b._)((0, w.useState)(!1), 2),
          k = j[0],
          P = j[1],
          Z = (0, w.useContext)(ev),
          T = eb(function (e) {
            return e.title;
          }),
          I = eb(function (e) {
            return e.shareLinkId;
          }),
          S = eb(function (e) {
            return e.shareLinkUrl;
          }),
          R = eb(function (e) {
            return e.isAnonymous;
          }),
          E = eb(function (e) {
            return e.initiallyHighlightedMessageId;
          }),
          B = eb(function (e) {
            return e.currentNodeId;
          }),
          F = eb(function (e) {
            return e.isPublic;
          }),
          L =
            eb(function (e) {
              return e.linkAlreadyExisted;
            }) && F,
          O = eb(function (e) {
            return e.linkError;
          }),
          U = eb(function (e) {
            return e.moderationState;
          }),
          q = null != U && ia(U),
          Q = (0, w.useRef)(),
          W = (0, w.useRef)();
        (0, w.useEffect)(
          function () {
            L && ((Q.current = T), (W.current = R));
          },
          [L]
        );
        var H = (0, ep.kP)().session,
          $ = (0, N.JI)(s, B),
          G = (0, w.useMemo)(
            function () {
              return eI($);
            },
            [$]
          ),
          V = (0, N.aS)(s),
          J =
            ((t = (0, ed._)(function (e, t) {
              var n, r, a, i, s, o, l;
              return (0, ef.Jh)(this, function (u) {
                switch (u.label) {
                  case 0:
                    v(!0),
                      (r = (n = Z.getState()).highlightedMessageId),
                      (a = n.title),
                      (i = n.isDeleted),
                      (s = n.isAnonymous);
                    try {
                      navigator.clipboard.writeText(t);
                    } catch (e) {
                      return (
                        console.warn("Could not copy link to clipboard: " + e),
                        nT.m.warning("Failed to copy link to clipboard"),
                        v(!1),
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
                          is_anonymous: s,
                        }),
                      ]
                    );
                  case 2:
                    if (ia((o = u.sent().moderation_state)))
                      return Z.setState({ moderationState: o }), [2];
                    return (
                      Z.setState({ isPublic: !0, moderationState: o }),
                      P(!0),
                      setTimeout(function () {
                        D.vm.closeSharingModal(),
                          nT.m.success(
                            "Copied shared conversation URL to clipboard!"
                          );
                      }, 500),
                      [3, 5]
                    );
                  case 3:
                    return (
                      (l = u.sent()) instanceof ey.Q0 &&
                        "string" == typeof l.message &&
                        Z.setState({ linkError: l.message }),
                      [3, 5]
                    );
                  case 4:
                    return v(!1), [7];
                  case 5:
                    return [2];
                }
              });
            })),
            function (e, n) {
              return t.apply(this, arguments);
            }),
          Y = L && (T !== Q.current || R !== W.current),
          K = (0, y.jsxs)(eS.ZP.Button, {
            onClick: function () {
              return J(I, S);
            },
            color: "primary",
            disabled: p || k || null == I || null == S || null != O || q,
            children: [
              k
                ? (0, y.jsx)(el.ZP, { icon: C.LSm })
                : p
                ? (0, y.jsx)(eR.Z, {})
                : (0, y.jsx)(el.ZP, { icon: C.XKb }),
              k
                ? "Copied!"
                : p
                ? "Copying..."
                : Y
                ? "Update and Copy Link"
                : "Copy Link",
            ],
          }),
          et = (0, w.useCallback)(
            function (e) {
              var t;
              null == e || e.preventDefault(),
                Z.setState({
                  title:
                    null === (t = d.current) || void 0 === t ? void 0 : t.value,
                }),
                h(!1);
            },
            [Z]
          ),
          en = (0, w.useCallback)(
            function (e) {
              "Enter" === e.key && et();
            },
            [et]
          ),
          er =
            ((n = (0, ed._)(function () {
              return (0, ef.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      ea.ZP.deleteShareLink({
                        share_id: Z.getState().shareLinkId,
                      })
                        .catch(function (e) {
                          nT.m.danger("Failed to delete shared link");
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
          ei =
            ((r = (0, ed._)(function () {
              return (0, ef.Jh)(this, function (e) {
                return (
                  Z.setState({ isAnonymous: !0 }),
                  N.qN.setState(function (e) {
                    e.threads[s].initialThreadData.authorName = void 0;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return r.apply(this, arguments);
            }),
          es =
            ((a = (0, ed._)(function () {
              return (0, ef.Jh)(this, function (e) {
                return (
                  Z.setState({ isAnonymous: !1 }),
                  N.qN.setState(function (e) {
                    var t;
                    e.threads[s].initialThreadData.authorName =
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
          ec = (0, y.jsxs)(im, {
            $active: f,
            children: [
              (0, y.jsxs)("div", {
                className: "flex-1 pr-1",
                children: [
                  void 0 !== T
                    ? f
                      ? (0, y.jsx)(ig, {
                          ref: d,
                          type: "text",
                          defaultValue: null != T ? T : "",
                          autoFocus: !0,
                          onKeyDown: en,
                          onBlur: et,
                        })
                      : (0, y.jsxs)(ih, {
                          onDoubleClick: function () {
                            return h(!0);
                          },
                          children: [
                            T,
                            f || null == T || L
                              ? null
                              : (0, y.jsx)("button", {
                                  onClick: function () {
                                    return h(!0);
                                  },
                                  className: "text-gray-500",
                                  children: (0, y.jsx)(el.ZP, {
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
              (0, y.jsx)(ip, {
                children: (0, y.jsxs)(eu.fC, {
                  children: [
                    (0, y.jsx)(eu.xz, {
                      asChild: !0,
                      children: (0, y.jsx)(eo.z, {
                        color: "neutral",
                        className: "mb-auto mt-auto",
                        children: (0, y.jsx)(eg.JEI, {}),
                      }),
                    }),
                    (0, y.jsx)(eu.h_, {
                      children: (0, y.jsxs)(eu.VY, {
                        className:
                          "PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90",
                        side: "top",
                        align: "end",
                        children: [
                          R &&
                            (0, y.jsx)(eo.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: es,
                              children: (0, y.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, y.jsx)(el.ZP, {
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
                            (0, y.jsx)(eo.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: ei,
                              children: (0, y.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, y.jsx)(el.ZP, {
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
                          L &&
                            (0, y.jsx)(eo.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: er,
                              children: (0, y.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, y.jsx)(el.ZP, {
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
          ex = O;
        return (
          null == ex &&
            ((null == U ? void 0 : U.has_been_auto_blocked) ||
              (null == U ? void 0 : U.has_been_auto_moderated) ||
              (null == U ? void 0 : U.has_been_blocked)) &&
            (ex = (0, y.jsx)(_.Z, (0, x._)({}, it.moderationBlocked))),
          (0, y.jsxs)(eD.Z, {
            isOpen: !0,
            onClose: function () {
              u();
            },
            size: "custom",
            className: "max-w-[550px]",
            type: "success",
            title: c.formatMessage(it.sharingModalTitle),
            closeButton: (0, y.jsx)(eS.ZP.CloseButton, {
              onClose: function () {
                u();
              },
            }),
            children: [
              null != ex &&
                (0, y.jsx)("div", {
                  className: "mb-4 rounded-md bg-red-500 p-4 text-white",
                  children: ex,
                }),
              (0, y.jsx)("div", {
                className: (0, z.Z)("w-full"),
                children: (0, y.jsx)("p", {
                  className: (0, z.Z)("mb-6 text-gray-500"),
                  children: L
                    ? (0, y.jsx)(
                        _.Z,
                        (0, em._)((0, x._)({}, it.existingShareDescription), {
                          values: {
                            existingLink: function (e) {
                              return (0, y.jsx)("a", {
                                href: S,
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
                                      c.formatMessage(it.confirmDeleteLink)
                                    ) && er();
                                },
                                className: "underline",
                                children: e,
                              });
                            },
                          },
                        })
                      )
                    : (0, y.jsx)(_.Z, (0, x._)({}, it.sharingModalDescription)),
                }),
              }),
              (0, y.jsx)(io, {
                shouldShowCodeInterpreterDisclaimer: G,
                shouldShowUserContextCustomProfileDisclaimer: V,
              }),
              (0, y.jsx)(id, {
                children: (0, y.jsx)("div", {
                  className: "flex h-full max-w-full flex-1 flex-col",
                  children: (0, y.jsx)(iu, {
                    children: (0, y.jsxs)(ic, {
                      children: [
                        (0, y.jsx)(eh.f, {
                          ratio: 1.9,
                          className: "overflow-auto bg-white dark:bg-gray-800",
                          children:
                            null != B
                              ? (0, y.jsx)(A.gB.Provider, {
                                  value: !0,
                                  children: (0, y.jsx)(aK, {
                                    onChangeItemInView: X(),
                                    onRequestMoreCompletions: X(),
                                    onUpdateNode: X(),
                                    onChangeRating: X(),
                                    onDeleteNode: X(),
                                    onRequestCompletion: X(),
                                    onHandleChangeVariantFeedbackInlineComparisonRating:
                                      X(),
                                    clientThreadId: s,
                                    conversationLeafId: B,
                                    activeRequests: o,
                                    currentThreadModel: l,
                                    inlineEmbeddedDisplay: !0,
                                    isNewThread: !1,
                                    initiallyHighlightedMessageId: E,
                                  }),
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
                        ec,
                      ],
                    }),
                  }),
                }),
              }),
              (0, y.jsx)(eS.ZP.Actions, {
                isSpacedBetween: !0,
                primaryButton: K,
                secondaryButton: (0, y.jsx)("div", {
                  children: (0, y.jsxs)("a", {
                    href: ii,
                    className:
                      "flex items-center gap-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                    target: "_blank",
                    rel: "noreferrer",
                    children: [
                      c.formatMessage(it.sharingModalMoreInfo),
                      (0, y.jsx)(el.ZP, { icon: C.AlO }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
      var io = function (e) {
          var t = e.shouldShowCodeInterpreterDisclaimer,
            n = e.shouldShowUserContextCustomProfileDisclaimer;
          return t && n
            ? (0, y.jsx)(il, {
                children: (0, y.jsx)(
                  _.Z,
                  (0, x._)(
                    {},
                    it.userContextCustomProfileAndCodeInterpreterSupportDisclaimer
                  )
                ),
              })
            : (0, y.jsxs)(y.Fragment, {
                children: [
                  t &&
                    (0, y.jsx)(il, {
                      children: (0, y.jsx)(
                        _.Z,
                        (0, x._)({}, it.codeInterpreterSupportDisclaimer)
                      ),
                    }),
                  n &&
                    (0, y.jsx)(il, {
                      children: (0, y.jsx)(
                        _.Z,
                        (0, x._)({}, it.userContextCustomProfileDisclaimer)
                      ),
                    }),
                ],
              });
        },
        il = function (e) {
          var t = e.children;
          return (0, y.jsxs)("div", {
            className:
              "mb-4 flex items-start justify-start gap-2.5 rounded-md bg-yellow-300 p-4 text-[#756B5C] last:mb-0",
            children: [
              (0, y.jsx)(el.ZP, {
                icon: C.H33,
                size: "small",
                className: "mt-1 flex-shrink-0",
              }),
              t,
            ],
          });
        },
        iu = et.Z.main(a3()),
        ic = et.Z.div(a4()),
        id = et.Z.div(a6()),
        im = et.Z.div(a8(), function (e) {
          return e.$active, "";
        }),
        ih = et.Z.div(a7()),
        ig = et.Z.input(a9()),
        ip = et.Z.div(ie());
      function ix() {
        var e = (0, q._)([
          "bg-green-500 text-white py-0.5 px-1.5 text-[10px] leading-normal font-semibold rounded uppercase",
        ]);
        return (
          (ix = function () {
            return e;
          }),
          e
        );
      }
      var iv = (0, M.vU)({
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
        ib = "oai/apps/announcement/sharedConversations";
      function iy(e) {
        var t = e.children,
          n = function () {
            var e = Date.now();
            ec.m.setItem(ib, e), s(e);
          },
          r = (0, E.w$)(),
          a = (0, b._)(
            (0, w.useState)(function () {
              var e = ec.m.getItem(ib);
              return "number" == typeof e && e;
            }),
            2
          ),
          i = a[0],
          s = a[1],
          o = (0, w.useRef)(null),
          l = (0, ee.Z)();
        return (0, y.jsxs)(eu.fC, {
          open: r && !1 === i,
          onOpenChange: function (e) {
            e || n();
          },
          children: [
            (0, y.jsx)(eu.xz, { asChild: !0, ref: o, children: t }),
            (0, y.jsx)(eu.h_, {
              children: (0, y.jsxs)(eu.VY, {
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
                  (null === (t = o.current) || void 0 === t
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
                          (0, y.jsx)(ij, {
                            children: (0, y.jsx)(_.Z, (0, x._)({}, iv.new)),
                          }),
                          (0, y.jsx)("div", {
                            className: "font-medium",
                            children: (0, y.jsx)(
                              _.Z,
                              (0, x._)({}, iv.shareConversations)
                            ),
                          }),
                          (0, y.jsx)(eu.x8, {
                            className:
                              "-my-1 -mr-1 ml-1 p-1 opacity-70 transition hover:opacity-100",
                            children: (0, y.jsx)(el.ZP, { icon: C.q5L }),
                          }),
                        ],
                      }),
                      (0, y.jsxs)("a", {
                        href: ii,
                        className:
                          "inline-flex items-center gap-1.5 opacity-70 transition hover:opacity-100",
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                          l.formatMessage(iv.learnMore),
                          (0, y.jsx)(el.ZP, { icon: C.AlO, size: "xsmall" }),
                        ],
                      }),
                    ],
                  }),
                  (0, y.jsx)(eu.Eh, {
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
      var ij = et.Z.span(ix()),
        ik = n(36112);
      function iw() {
        var e = (0, q._)([
          "flex flex-col gap-2 pb-2 text-gray-100 text-sm\n",
          "",
        ]);
        return (
          (iw = function () {
            return e;
          }),
          e
        );
      }
      function iC() {
        var e = (0, q._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n",
          ")}\n",
          ")}\n",
          "\n",
        ]);
        return (
          (iC = function () {
            return e;
          }),
          e
        );
      }
      function i_() {
        var e = (0, q._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n",
          "\n",
        ]);
        return (
          (i_ = function () {
            return e;
          }),
          e
        );
      }
      function iM() {
        var e = (0, q._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
        return (
          (iM = function () {
            return e;
          }),
          e
        );
      }
      function iN() {
        var e = (0, q._)([
          "flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative",
        ]);
        return (
          (iN = function () {
            return e;
          }),
          e
        );
      }
      function iP() {
        var e = (0, q._)([
          "h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900",
        ]);
        return (
          (iP = function () {
            return e;
          }),
          e
        );
      }
      function iZ() {
        var e = (0, q._)([
          "absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n",
          "",
        ]);
        return (
          (iZ = function () {
            return e;
          }),
          e
        );
      }
      function iT() {
        var e = (0, q._)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
        return (
          (iT = function () {
            return e;
          }),
          e
        );
      }
      function iI() {
        var e = (0, q._)(["p-1 hover:text-white"]);
        return (
          (iI = function () {
            return e;
          }),
          e
        );
      }
      var iS = (0, M.vU)({
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
        iD = {
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
      function iR(e) {
        var t,
          n,
          r = e.activeId,
          a = e.onNewThread,
          i = e.setActiveRequests,
          s = (0, ee.Z)(),
          o = (0, b._)((0, w.useState)(!1), 2),
          l = o[0],
          u = o[1],
          c = (0, b._)((0, w.useState)(0), 2),
          d = c[0],
          m = c[1],
          f = (0, es.Z)(),
          h = (0, ik.MO)(),
          g = h.conversations,
          p = h.hasNextPage,
          v = h.fetchNextPage,
          j = h.isLoading,
          k = h.isFetchingNextPage,
          C = h.isError,
          M = (0, R.hz)().has(ei.DY),
          N = (0, w.useRef)(null),
          P = (0, w.useCallback)(
            function (e) {
              var t;
              M &&
                !j &&
                null != e &&
                (null === (t = N.current) || void 0 === t || t.disconnect(),
                (N.current = new IntersectionObserver(function (e) {
                  e[0].isIntersecting && p && v();
                })),
                N.current.observe(e));
            },
            [M, j, p, v]
          );
        (0, w.useEffect)(function () {
          return function () {
            var e;
            null === (e = N.current) || void 0 === e || e.disconnect();
          };
        }, []);
        var Z = (0, ik.iF)();
        (0, ik.Od)();
        var T =
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
            f(function () {
              m(d + 1);
            }, (0, W.Z)((0, H.Z)(), Date.now()) + 1e3);
          },
          [d, f]
        );
        var I = 0 === g.length,
          S = (0, w.useMemo)(
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
                    var o = (0, G.Z)(a),
                      l = (0, $.Z)(a),
                      u = "".concat(o, "-").concat(l);
                    e.dynamicMonths[u]
                      ? e.dynamicMonths[u].items.push(t)
                      : (e.dynamicMonths[u] = {
                          label: s.formatDate(a, { month: "long" }),
                          items: [t],
                        });
                  } else {
                    var c = (0, G.Z)(a),
                      d = "".concat(c, "-");
                    e.dynamicYears[d]
                      ? e.dynamicYears[d].items.push(t)
                      : (e.dynamicYears[d] = {
                          label: s.formatDate(a, { year: "numeric" }),
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
                        (0, x._)({}, iS.historyBucketToday)
                      ),
                      items: [],
                    },
                    yesterday: {
                      label: (0, y.jsx)(
                        _.Z,
                        (0, x._)({}, iS.historyBucketYesterday)
                      ),
                      items: [],
                    },
                    lastSeven: {
                      label: (0, y.jsx)(
                        _.Z,
                        (0, x._)({}, iS.historyBucketLastSeven)
                      ),
                      items: [],
                    },
                    lastThirty: {
                      label: (0, y.jsx)(
                        _.Z,
                        (0, x._)({}, iS.historyBucketLastThirty)
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
        return (0, y.jsxs)(iA, {
          $centered: j || (C && I),
          children: [
            I && j && (0, y.jsx)(eR.Z, { className: "m-auto" }),
            I &&
              C &&
              (0, y.jsxs)("div", {
                className: "p-3 text-center italic text-gray-500",
                children: [
                  (0, y.jsx)(_.Z, (0, x._)({}, iS.unableToLoadHistory)),
                  !l &&
                    (0, y.jsx)("div", {
                      className: "mt-1",
                      children: (0, y.jsx)(eo.z, {
                        as: "button",
                        color: "dark",
                        size: "small",
                        className: "m-auto mt-2",
                        onClick: function () {
                          u(!0), Z();
                        },
                        children: (0, y.jsx)(_.Z, (0, x._)({}, iS.retryButton)),
                      }),
                    }),
                ],
              }),
            !j &&
              (0, y.jsx)("div", {
                children: (0, y.jsx)(J.M, {
                  initial: !1,
                  children: [S.recent, S.dynamicMonths, S.dynamicYears].flatMap(
                    function (e, t) {
                      return (0, y.jsx)(
                        "span",
                        {
                          children: Object.entries(e).map(function (e) {
                            var t = (0, b._)(e, 2),
                              n = t[0],
                              s = t[1],
                              o = s.items,
                              l = s.label;
                            if ("today" !== n && !o.length) return null;
                            var u = !!o.find(function (e) {
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
                                  o.length > 0 &&
                                    (0, y.jsx)(Y.E.div, {
                                      className: (0, z.Z)(
                                        "sticky top-0",
                                        u ? "z-[16]" : "z-[14]"
                                      ),
                                      layoutId: "bucketTitle-".concat(n),
                                      layout: "position",
                                      children: (0, y.jsx)(iU, { children: l }),
                                    }),
                                  (0, y.jsx)("ol", {
                                    children: o.map(function (e, t) {
                                      var n = r === e.id,
                                        s =
                                          null == T
                                            ? void 0
                                            : T.find(function (t) {
                                                return t.id === e.id;
                                              });
                                      return (0,
                                      y.jsx)(Y.E.li, { className: (0, z.Z)("relative", u && 0 === t ? "z-[15]" : ""), layoutId: "".concat(e.id), layout: "position", custom: { isNew: !s }, variants: iD, initial: "initial", animate: "animate", exit: "exit", children: (0, y.jsx)(iE, { id: e.id, title: e.title, active: n, onNewThread: a, setActiveRequests: i, forwardRef: p && g[g.length - 5 - 1].id === e.id ? P : void 0 }) }, "history-item-".concat(e.id));
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
                    (0, y.jsx)(eo.z, {
                      as: "button",
                      onClick: function () {
                        return v();
                      },
                      color: "dark",
                      className: "m-auto mb-2",
                      size: "small",
                      loading: k,
                      children: (0, y.jsx)(
                        _.Z,
                        (0, x._)({}, iS.showMoreButton)
                      ),
                    }),
                }),
          ],
        });
      }
      var iA = et.Z.div(iw(), function (e) {
        return e.$centered && "h-full justify-center items-center";
      });
      function iE(e) {
        var t = e.id,
          n = e.title,
          r = e.active,
          a = e.onNewThread,
          i = e.forwardRef,
          s = e.setActiveRequests,
          o = (0, E.w$)(),
          l = (0, en.WS)(),
          u = (0, k.useRouter)(),
          c = (0, b._)((0, w.useState)(!1), 2),
          d = c[0],
          m = c[1],
          f = (0, w.useRef)(null),
          h = (0, b._)((0, w.useState)(!1), 2),
          g = h[0],
          p = h[1],
          x = (0, R.hz)(),
          v = (0, R.ec)(R.F_.isBusinessWorkspace),
          j = (0, N.cj)(t),
          _ = x.has(ei.RJ) && r && !j && !v,
          M = (0, ik.iF)(),
          P = (0, w.useCallback)(
            function (e) {
              var r, a;
              if (
                (null == e || e.preventDefault(),
                m(!1),
                (null === (r = f.current) || void 0 === r ? void 0 : r.value) &&
                  (null === (a = f.current) || void 0 === a
                    ? void 0
                    : a.value) !== n)
              ) {
                var i = f.current.value;
                ea.ZP.patchConversation(t, { title: i }),
                  N.tQ.setTitle(t, i, N._L.User),
                  l(er.s6.renameThread, { threadId: t, content: i }),
                  M();
              }
            },
            [l, t, M, n]
          ),
          Z = (0, w.useCallback)(
            function (e) {
              "Enter" === e.key && P();
            },
            [P]
          ),
          T = (0, w.useCallback)(
            function () {
              ea.ZP.patchConversation(t, { is_visible: !1 }).then(function () {
                M();
              }),
                a();
            },
            [t, a, M]
          ),
          I = (0, w.useCallback)(
            function (e) {
              S.abortAllAndReset(),
                s(new Set()),
                e.preventDefault(),
                l(er.s6.loadThread, { threadId: t }),
                u.push("/c/".concat(t), void 0, { shallow: !0 });
            },
            [l, t, u, s]
          ),
          A = B(t, n, r),
          F = A.resolvedTitle,
          L = A.isTypingEffect;
        if (d)
          return (0, y.jsxs)(iF, {
            $active: r,
            children: [
              (0, y.jsx)(el.ZP, { icon: C.IC0, className: "flex-shrink-0" }),
              (0, y.jsx)(iL, {
                ref: f,
                type: "text",
                defaultValue: null != F ? F : "",
                autoFocus: !0,
                onKeyDown: Z,
                className: "mr-0",
                onBlur: P,
              }),
              (0, y.jsxs)(iz, {
                $active: !0,
                children: [
                  (0, y.jsx)(iQ, {
                    onClick: P,
                    children: (0, y.jsx)(el.ZP, { icon: C.UgA }),
                  }),
                  (0, y.jsx)(iQ, {
                    onClick: function (e) {
                      e.preventDefault(), m(!1);
                    },
                    children: (0, y.jsx)(el.ZP, { icon: C.q5L }),
                  }),
                ],
              }),
            ],
          });
        var U = L && r && o;
        return (0, y.jsxs)(iB, {
          onClick: r ? X() : I,
          $active: r,
          $sharing: _,
          className: (0, z.Z)("group", U && "animate-flash"),
          ref: i,
          children: [
            (0, y.jsx)(el.ZP, { icon: g ? C.Ybf : C.IC0 }),
            (0, y.jsxs)(iO, {
              children: [
                U
                  ? (0, y.jsx)(O, { text: null != F ? F : "" })
                  : g
                  ? 'Delete "'.concat(F, '"?')
                  : F,
                (!L || !r) && (0, y.jsx)(iq, { $active: r }),
              ],
            }),
            g &&
              (0, y.jsxs)(iz, {
                $active: !0,
                children: [
                  (0, y.jsx)(iQ, {
                    onClick: T,
                    children: (0, y.jsx)(el.ZP, { icon: C.UgA }),
                  }),
                  (0, y.jsx)(iQ, {
                    onClick: function () {
                      p(!1);
                    },
                    children: (0, y.jsx)(el.ZP, { icon: C.q5L }),
                  }),
                ],
              }),
            r &&
              !g &&
              (0, y.jsxs)(iz, {
                $active: r,
                children: [
                  (0, y.jsx)(iQ, {
                    onClick: function (e) {
                      e.preventDefault(), m(!0);
                    },
                    children: (0, y.jsx)(el.ZP, { icon: C.Nte }),
                  }),
                  _ &&
                    (0, y.jsx)(iy, {
                      children: (0, y.jsx)(iQ, {
                        onClick: function (e) {
                          e.preventDefault(), D.vm.openSharingModal(t);
                        },
                        children: (0, y.jsx)(el.ZP, { icon: C.A8q }),
                      }),
                    }),
                  (0, y.jsx)(iQ, {
                    onClick: function () {
                      return p(!0);
                    },
                    children: (0, y.jsx)(el.ZP, { icon: C.Ybf }),
                  }),
                ],
              }),
          ],
        });
      }
      var iB = et.Z.a(
          iC(),
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
        iF = et.Z.div(i_(), function (e) {
          return e.$active
            ? "pr-14 bg-gray-800 hover:bg-gray-800"
            : "bg-gray-900";
        }),
        iL = et.Z.input(iM()),
        iO = et.Z.div(iN()),
        iU = et.Z.h3(iP()),
        iq = et.Z.div(iZ(), function (e) {
          return e.$active
            ? "from-gray-800"
            : "from-gray-900 group-hover:from-[#2A2B32]";
        }),
        iz = et.Z.div(iT(), function (e) {
          return e.$active ? "visible" : "invisible group-hover:visible";
        }),
        iQ = et.Z.button(iI()),
        iW = n(61119),
        iH = n(45036),
        i$ = n(6128),
        iG = n(5437),
        iV = n.n(iG),
        iJ = n(11253),
        iY = n.n(iJ),
        iK = n(15300),
        iX = n(44675),
        i0 = "https://tcr9i.chat.openai.com/v2/".concat(
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
      var i1 = new ((function () {
          function e() {
            (0, F._)(this, e), (this.status = p.Idle);
            var t,
              n = this;
            this.getEnforcementToken =
              ((t = (0, ed._)(function (e) {
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
                                  var s, o, l, u, c;
                                  iK.U.addAction("arkose_get_token_error", {
                                    app_release:
                                      null !== (l = iX.env.APP_RELEASE) &&
                                      void 0 !== l
                                        ? l
                                        : "",
                                    error:
                                      null !==
                                        (u =
                                          null === (s = i.error) || void 0 === s
                                            ? void 0
                                            : s.error) && void 0 !== u
                                        ? u
                                        : "",
                                  }),
                                    a(
                                      null !==
                                        (c =
                                          null === (o = i.error) || void 0 === o
                                            ? void 0
                                            : o.error) && void 0 !== c
                                        ? c
                                        : "Unknown Arkose error"
                                    ),
                                    n._showUserError();
                                } else t.reset(), n.getEnforcementToken(!0).then(r, a);
                              }),
                              n.setOnFailed(function () {
                                var e;
                                iK.U.addAction(
                                  "arkose_failed_to_get_challenge",
                                  {
                                    app_release:
                                      null !== (e = iX.env.APP_RELEASE) &&
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
                    (a.src = i0),
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
                    var i = function (s) {
                      if ("load" === s.type && t.status !== p.Ready)
                        t._startReadyTimeout(), t.setStatus(p.ScriptLoaded);
                      else if ("error" === s.type) {
                        if ((t.setStatus(p.Error), e)) {
                          var o;
                          iK.U.addAction("arkose_script_load_error", {
                            app_release:
                              null !== (o = iX.env.APP_RELEASE) && void 0 !== o
                                ? o
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
                  iK.U.addAction("arkose_script_ready_timeout", {
                    app_release:
                      null !== (t = iX.env.APP_RELEASE) && void 0 !== t
                        ? t
                        : "",
                  }),
                    e._showUserError();
                }
              }, 15e3);
            }),
            (t._showUserError = function () {
              nT.m.danger(
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
        i2 = n(75179),
        i5 = n(87316);
      function i3(e) {
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
      function i4() {
        var e = (0, q._)(["mb-2 mt-auto ml-auto mr-auto"]);
        return (
          (i4 = function () {
            return e;
          }),
          e
        );
      }
      function i6() {
        var e = (0, q._)([
          "relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden",
        ]);
        return (
          (i6 = function () {
            return e;
          }),
          e
        );
      }
      function i8() {
        var e = (0, q._)(["mb-5 border dark:bg-gray-800 overflow-hidden"]);
        return (
          (i8 = function () {
            return e;
          }),
          e
        );
      }
      function i7() {
        var e = (0, q._)([""]);
        return (
          (i7 = function () {
            return e;
          }),
          e
        );
      }
      var i9 = (0, M.vU)({
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
      function se(e) {
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
              (0, eq.RR)(null == e ? void 0 : e.messages[0].message).length < 20
            ))
        );
      }
      function st(e) {
        var t,
          n,
          r = e.ratingModalNodeId,
          a = e.ratingModalOpen,
          i = e.onCloseRatingModal,
          s = e.handleSubmitFeedback,
          o = e.onHandleChangeFeedbackComparisonRating,
          l = e.feedbackTextareaRef,
          u = e.clientThreadId,
          c = e.activeRequests,
          d = e.currentModelId,
          m = e.onChangeItemInView,
          f = e.onRequestMoreCompletions,
          h = e.onDeleteNode,
          g = e.onRequestCompletion,
          p = e.onUpdateNode,
          v = (0, ee.Z)(),
          j = N.tQ.getTree(u),
          k = (0, N.XK)(u);
        (0, w.useEffect)(
          function () {
            "report" === a && ep.pg.forceEnableSession();
          },
          [a]
        );
        var M = (0, w.useRef)(0.5 > Math.random() ? "left" : "right"),
          P = null == j ? void 0 : j.getConversationTurns(r || "root"),
          Z = P.length - 1,
          T = P[P.length - 1],
          I = (0, R.hz)().has(ei.FZ),
          S = (0, b._)((0, w.useState)("critique"), 2),
          D = S[0],
          A = S[1],
          B = (0, E.w$)(),
          F = (0, R.hz)().has(ei.Pt) && se(T, !0) && B,
          L = (0, en.WS)(),
          O = (0, w.useMemo)(
            function () {
              return {
                id: r || "root",
                threadId: N.tQ.getServerThreadId(u),
                rating: a,
                model: d,
              };
            },
            [r, u, a, d]
          ),
          U =
            null == P
              ? void 0
              : P[(null == P ? void 0 : P.length) - 1].variantIds,
          q = null == U ? void 0 : U[(null == U ? void 0 : U.length) - 1],
          Q = (n = (t = null == j ? void 0 : j.getConversationTurns(q))[
            t.length - 1
          ]).messages[n.messages.length - 1].nodeId,
          W = null == j ? void 0 : j.getConversationTurns(Q),
          H = (0, w.useMemo)(
            function () {
              var e =
                null == W ? void 0 : W[(null == W ? void 0 : W.length) - 1];
              return "thumbsDown" === a && F && se(e) && se(T);
            },
            [a, F, W, T]
          ),
          $ = (0, w.useRef)(Date.now()),
          G = (0, w.useRef)(-1),
          V = (0, w.useRef)(Date.now()),
          J = (0, w.useRef)(Date.now());
        (0, w.useEffect)(
          function () {
            "compare" === D
              ? ((G.current = Date.now()), L(er.s6.displayedComparisonUIV0, O))
              : "critique" === D &&
                "thumbsDown" === a &&
                L(er.s6.displayedThumbsDownFeedbackForm, O);
          },
          [D]
        );
        var Y = P.length - 2,
          K = W.length - 1,
          et = W[W.length - 1],
          es = (0, w.useMemo)(
            function () {
              return et && ez.Cv.getRequestIdFromConversationTurn(et);
            },
            [et]
          ),
          eo = (0, w.useMemo)(
            function () {
              return c.has(es);
            },
            [c, es]
          );
        (0, w.useMemo)(
          function () {
            eo || (J.current = Date.now());
          },
          [eo]
        );
        var el = T.messages,
          eu = el[el.length - 1],
          ec = eu.message.id,
          ed = eu.nodeId,
          ef = j.getLeafFromNode(ed),
          eh = et.messages,
          eg = eh[eh.length - 1],
          ex = eg.message.id,
          ev = eg.nodeId,
          eb = j.getLeafFromNode(ev),
          ey =
            "critique" === D
              ? "report" === a
                ? v.formatMessage(i9.provideReportModalTitle)
                : v.formatMessage(i9.provideAdditionalFeedback)
              : v.formatMessage(i9.pickBestAnswer),
          ej = (0, w.useRef)([]),
          ek = (0, w.useRef)(""),
          ew = (0, w.useCallback)(
            function () {
              var e,
                t =
                  null === (e = l.current) || void 0 === e
                    ? void 0
                    : e.elements;
              (ej.current = (0, eA._)(t || [])
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
                s(ek.current, ej.current),
                "thumbsDown" === a && L(er.s6.submitThumbsDownFeedbackForm, O),
                H ? A("compare") : i();
            },
            [ew, s, a, H, L, O, i]
          ),
          e_ = (0, w.useCallback)(
            function (e, t) {
              var n = N.tQ.getServerThreadId(u);
              if (null != n) {
                var r = N.tQ.getThreadCurrentLeafId(u);
                ea.ZP.submitSharedConversationReportFeedback({
                  message_id: r,
                  shared_conversation_id: n,
                  text: e,
                  tags: t,
                })
                  .then(function () {
                    nT.m.success("Moderation logged successfully");
                  })
                  .catch(function () {
                    nT.m.danger(
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
          eP =
            "moderate" === a
              ? (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsx)(eS.ZP.Button, {
                      title: v.formatMessage(i9.submitRejectModeration),
                      color: "danger",
                      onClick: eM,
                    }),
                    (0, y.jsx)(eS.ZP.Button, {
                      title: v.formatMessage(i9.submitAcceptModeration),
                      color: "primary",
                      onClick: eN,
                    }),
                  ],
                })
              : "critique" === D
              ? (0, y.jsx)(eS.ZP.Button, {
                  title: v.formatMessage(
                    "report" === a ? i9.submitReport : i9.submitFeedback
                  ),
                  onClick: eC,
                })
              : null,
          eZ = "left" === M.current,
          eT = eZ ? "new" : "original",
          eI = eZ ? "original" : "new",
          eR = eZ
            ? v.formatMessage(i9.newAnswer)
            : v.formatMessage(i9.originalAnswer),
          eE = eZ
            ? v.formatMessage(i9.originalAnswer)
            : v.formatMessage(i9.newAnswer),
          eB = eZ
            ? v.formatMessage(i9.newAnswerBetter)
            : v.formatMessage(i9.originalAnswerBetter),
          eF = eZ
            ? v.formatMessage(i9.originalAnswerBetter)
            : v.formatMessage(i9.newAnswerBetter),
          eL = a && "report" !== a && "moderate" !== a,
          eO = (0, w.useCallback)(
            function (e) {
              var t = "left" === e ? eT : "right" === e ? eI : "same";
              if (
                (L(
                  er.s6.submittedComparisonUIV0,
                  Object.assign({}, O, { choice: t })
                ),
                eL)
              ) {
                var n = N.tQ.getTree(u),
                  r = n.getMetadata(ed);
                n.updateNode(ed, {
                  metadata: {
                    $set: (0, em._)((0, x._)({}, r), {
                      inlineComparisonRating: "baseline",
                    }),
                  },
                });
                var s = n.getMetadata(ev);
                n.updateNode(ev, {
                  metadata: {
                    $set: (0, em._)((0, x._)({}, s), {
                      inlineComparisonRating: t,
                    }),
                  },
                }),
                  o(
                    ec,
                    ex,
                    a,
                    t,
                    M.current,
                    $.current,
                    G.current,
                    V.current,
                    J.current,
                    ek.current,
                    ej.current
                  );
              }
              N.tQ.setThreadCurrentLeafId(u, e === M.current ? eb.id : ef.id),
                i();
            },
            [eT, eI, L, O, eL, u, eb.id, ef.id, i, ed, ev, o, ec, ex, a]
          ),
          eU = !eo && null != J.current && H,
          eq = (0, w.useCallback)(
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
          eW = eQ[0],
          eH = eQ[1];
        return (
          (0, w.useEffect)(function () {
            "moderate" === a &&
              ea.ZP.fetchShareModerationCategories().then(function (e) {
                var t = e.moderation_categories;
                eH(
                  Object.keys(t).map(function (e) {
                    return [e, t[e]];
                  })
                );
              });
          }, []),
          (0, y.jsxs)(
            eD.Z,
            {
              isOpen: !0,
              onClose: eq,
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
              closeButton: (0, y.jsx)(eS.ZP.CloseButton, { onClose: eq }),
              children: [
                "critique" === D &&
                  (0, y.jsxs)("form", {
                    ref: l,
                    children: [
                      (0, y.jsx)(n_.ZP, {
                        id: "feedback-other",
                        placeholder:
                          "thumbsUp" === a
                            ? v.formatMessage(i9.thumbsUpPlaceholder)
                            : "report" === a
                            ? v.formatMessage(
                                i9.reportContentExplanationPlaceholder
                              )
                            : v.formatMessage(i9.thumbsDownPlaceholder),
                        rows: 3,
                        className:
                          "mb-1 mt-4 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
                      }),
                      "thumbsDown" === a &&
                        (0, y.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, y.jsx)(i3, {
                              id: "feedback-harmful",
                              label: v.formatMessage(i9.harmfulUnsafe),
                            }),
                            (0, y.jsx)(i3, {
                              id: "feedback-false",
                              label: v.formatMessage(i9.notTrue),
                            }),
                            (0, y.jsx)(i3, {
                              id: "feedback-not-helpful",
                              label: v.formatMessage(i9.notHelpful),
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
                                    (0, y.jsx)(i3, {
                                      id: "feedback-dont-like-this",
                                      label: v.formatMessage(i9.dontLikeThis),
                                    }),
                                    (0, y.jsx)(i3, {
                                      id: "feedback-false",
                                      label: v.formatMessage(i9.notTrue),
                                    }),
                                    (0, y.jsx)(i3, {
                                      id: "feedback-not-helpful",
                                      label: v.formatMessage(i9.notHelpful),
                                    }),
                                    (0, y.jsx)(i3, {
                                      id: "feedback-harmful-offensive",
                                      label: v.formatMessage(
                                        i9.harmfulOffensive
                                      ),
                                    }),
                                    (0, y.jsx)(i3, {
                                      id: "feedback-sexual-abuse",
                                      label: v.formatMessage(i9.sexualAbuse),
                                    }),
                                  ],
                                }),
                              "moderate" === a &&
                                (0, y.jsxs)(y.Fragment, {
                                  children: [
                                    eW.map(function (e) {
                                      var t = (0, b._)(e, 2),
                                        n = t[0],
                                        r = t[1];
                                      return (0,
                                      y.jsx)(i3, { id: "feedback-" + n, label: r }, n);
                                    }),
                                    (0, y.jsx)(i3, {
                                      id: "feedback-copyright",
                                      label: v.formatMessage(
                                        i9.copyrightContent
                                      ),
                                    }),
                                  ],
                                }),
                              (0, y.jsx)(i3, {
                                id: "feedback-content-other",
                                label: v.formatMessage(i9.reportOtherContent),
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                "compare" === D &&
                  W &&
                  void 0 !== k &&
                  (0, y.jsxs)("div", {
                    className: (0, z.Z)("w-full"),
                    children: [
                      (0, y.jsx)("p", {
                        className: (0, z.Z)("mb-7 mt-3"),
                        children: (0, y.jsx)(
                          _.Z,
                          (0, x._)({}, i9.continueWithChosenAnswer)
                        ),
                      }),
                      (0, y.jsx)(sa, {
                        className: I ? "rounded-2xl" : "rounded-md",
                        children: (0, y.jsx)(si, {
                          children: (0, y.jsx)(tJ, {
                            currentModelId: d,
                            turnIndex: Y,
                            isFinalTurn: !1,
                            clientThreadId: u,
                            onChangeItemInView: m,
                            onChangeRating: X(),
                            onRequestMoreCompletions: f,
                            onDeleteNode: h,
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
                                  children: eR,
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
                              (0, y.jsxs)(sr, {
                                children: [
                                  (0, y.jsx)(si, {
                                    children: (0, y.jsx)(tJ, {
                                      currentModelId: d,
                                      turnIndex: eZ ? K : Z,
                                      conversationLeafId: eZ ? ev : ed,
                                      isFinalTurn: !0,
                                      clientThreadId: u,
                                      onChangeItemInView: m,
                                      onChangeRating: X(),
                                      onDeleteNode: h,
                                      onRequestMoreCompletions: f,
                                      onRequestCompletion: g,
                                      onUpdateNode: p,
                                      activeRequests: c,
                                      showInlineEmbeddedDisplay: !0,
                                      onHandleChangeVariantFeedbackInlineComparisonRating:
                                        X(),
                                    }),
                                  }),
                                  (0, y.jsx)(sn, {
                                    children: (0, y.jsx)(eS.ZP.Button, {
                                      disabled: !eU,
                                      title: eB,
                                      onClick: function () {
                                        return eO("left");
                                      },
                                      color: "dark",
                                    }),
                                  }),
                                ],
                              }),
                              (0, y.jsxs)(sr, {
                                children: [
                                  (0, y.jsx)(si, {
                                    children: (0, y.jsx)(tJ, {
                                      currentModelId: d,
                                      turnIndex: eZ ? Z : K,
                                      conversationLeafId: eZ ? ed : ev,
                                      isFinalTurn: !0,
                                      clientThreadId: u,
                                      onChangeItemInView: m,
                                      onChangeRating: X(),
                                      onDeleteNode: h,
                                      onRequestMoreCompletions: f,
                                      onRequestCompletion: g,
                                      onUpdateNode: p,
                                      activeRequests: c,
                                      showInlineEmbeddedDisplay: !0,
                                      onHandleChangeVariantFeedbackInlineComparisonRating:
                                        X(),
                                    }),
                                  }),
                                  (0, y.jsx)(sn, {
                                    children: (0, y.jsx)(eS.ZP.Button, {
                                      disabled: !eU,
                                      title: eF,
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
                                (0, y.jsx)(eS.ZP.Button, {
                                  disabled: !eU,
                                  title: v.formatMessage(
                                    i9.neitherAnswerBetter
                                  ),
                                  color: "primary",
                                  onClick: function () {
                                    return eO("same");
                                  },
                                  className: (0, z.Z)("mr-2"),
                                }),
                                (0, y.jsx)(eS.ZP.Button, {
                                  title: v.formatMessage(i9.skipStep),
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
                (0, y.jsx)(eS.ZP.Actions, { primaryButton: eP }),
              ],
            },
            "RatingModal-".concat(r)
          )
        );
      }
      var sn = et.Z.div(i4()),
        sr = et.Z.div(i6()),
        sa = et.Z.div(i8()),
        si = et.Z.div(i7()),
        ss = n(37541);
      function so() {
        var e,
          t,
          n,
          r,
          a,
          i,
          s =
            ((t = (e = (0, au.S)()).isLoggedInWithMfa),
            (n = e.isUsernamePassword),
            (r = e.setupMfa),
            (i = (a = (0, rX.p0)()).filter(function (e) {
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
                (0, rX.dT)(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              },
              pluginsWeCantUse: i,
              setupMfa: r,
            }),
          o = s.disablePluginsThatWeCantUse,
          l = s.pluginsWeCantUse,
          u = s.setupMfa,
          c = (0, w.useCallback)(
            function () {
              o();
            },
            [o]
          );
        return 0 === l.length
          ? null
          : (0, y.jsx)(eD.Z, {
              isOpen: !0,
              onClose: c,
              title: "Some of your plugins require two-factor authentication.",
              primaryButton: (0, y.jsx)(eS.ZP.Button, {
                onClick: u,
                title: "Setup two-factor authentication",
                color: "primary",
              }),
              secondaryButton: (0, y.jsx)(eS.ZP.Button, {
                onClick: o,
                title: "Turn off the plugins",
              }),
              type: "danger",
              children: (0, y.jsx)("div", {
                className: "flex flex-col gap-2 py-4",
                children: l.map(function (e) {
                  return (0,
                  y.jsx)("div", { className: "w-full", children: (0, y.jsx)(r5.Z, { plugin: e }) }, e.id);
                }),
              }),
            });
      }
      var sl = n(16578),
        su = n.n(sl),
        sc = n(44925),
        sd = n(74853),
        sm = n(99652),
        sf = n(1220);
      function sh(e) {
        var t = e.isOpen,
          n = e.onClose,
          r = (0, en.WS)(),
          a = (0, b._)((0, w.useState)(!1), 2),
          i = a[0],
          s = a[1],
          o = (0, k.useRouter)(),
          l = (0, w.useCallback)(
            function () {
              r(er.s6.closeAccountPaymentModal), n();
            },
            [n, r]
          ),
          u = (0, w.useCallback)(
            (0, ed._)(function () {
              var e;
              return (0, ef.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    s(!0), r(er.s6.clickAccountCustomerPortal), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 3, 4, 5]),
                      [4, ea.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = t.sent()), o.push(e.url), [3, 5];
                  case 3:
                    return (
                      t.sent(),
                      nT.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return s(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [o, r, s]
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
          m = (0, R.e2)(),
          f = (0, R.YD)();
        return (0, y.jsxs)(sd.x, {
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
                children: (0, y.jsx)(sm.Oi, {
                  rowElements: [
                    (0, y.jsx)(
                      sm.Cu,
                      {
                        text: sf.S.plus.name,
                        children: (0, y.jsx)("span", {
                          className: "font-semibold text-gray-500",
                          children: sf.S.plus.costInDollars,
                        }),
                      },
                      "row-plus-plan-name"
                    ),
                    (0, y.jsx)(
                      sm.hi,
                      {
                        disabled: !0,
                        variant: "primary-disabled",
                        text: sf.S.plus.callToAction.active,
                      },
                      "row-plus-plan-button"
                    ),
                    (0, y.jsx)(
                      sm.G,
                      { text: sf.S.plus.demandAccess },
                      "row-plus-plan-demand"
                    ),
                    (0, y.jsx)(
                      sm.G,
                      { text: sf.S.plus.responseSpeed },
                      "row-plus-plan-speed"
                    ),
                    (0, y.jsx)(
                      sm.G,
                      { className: "sm:pb-1", text: sf.S.plus.modelFeatures },
                      "row-plus-plan-feathers"
                    ),
                    (null == m ? void 0 : m.purchase_origin_platform) ===
                      sc._4.MOBILE_IOS &&
                      (0, y.jsx)(
                        su(),
                        {
                          href: sc.m1,
                          target: "_blank",
                          passHref: !0,
                          children: (0, y.jsx)(sm.nR, {
                            className: "sm:pb-1",
                            isLoading: !1,
                            text: sf.S.manageSubscriptionIos.callToAction,
                            onClick: d,
                          }),
                        },
                        "row-plus-plan-manage-ios"
                      ),
                    (!m ||
                      m.purchase_origin_platform === sc._4.WEBAPP ||
                      m.purchase_origin_platform === sc._4.GRANTED) &&
                      f &&
                      (0, y.jsx)(
                        sm.nR,
                        {
                          className: "sm:pb-1",
                          isLoading: i,
                          text: sf.S.manageSubscriptionWeb.callToAction,
                          onClick: u,
                        },
                        "row-plus-plan-manage"
                      ),
                    (0, y.jsx)(
                      su(),
                      {
                        href: sc.ti,
                        target: "_blank",
                        passHref: !0,
                        children: (0, y.jsx)(
                          sm.nR,
                          {
                            className: "sm:pb-1",
                            isLoading: !1,
                            text: sf.S.getHelp.callToAction,
                            onClick: c,
                          },
                          "row-plus-plan-help"
                        ),
                      },
                      "row-plus-plan-help-link"
                    ),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var sg = n(48432),
        sp = n(24148);
      function sx() {
        var e = (0, q._)([
          "flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border bg-white dark:bg-gray-800 border-black/10 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-gray-700 h-11",
        ]);
        return (
          (sx = function () {
            return e;
          }),
          e
        );
      }
      var sv = (0, M.vU)({
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
      function sb() {
        var e = (0, w.useContext)(A.gB),
          t = (0, ee.Z)(),
          n = (0, D.tN)(function (e) {
            return {
              activeSidebar: e.activeSidebar,
              isDesktopNavCollapsed: e.isDesktopNavCollapsed,
            };
          }),
          r = n.isDesktopNavCollapsed,
          a = n.activeSidebar,
          i = (0, R.hz)(),
          s = i.has(ei.Ue),
          o = i.has("debug") && "debug" !== a;
        return e
          ? null
          : (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(J.M, {
                  initial: !1,
                  children:
                    s &&
                    r &&
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
                        label: t.formatMessage(sv.openSidebar),
                        children: (0, y.jsx)(sy, {
                          onClick: D.vm.toggleDesktopNavCollapsed,
                          "aria-label": t.formatMessage(sv.openSidebar),
                          children: (0, y.jsx)(el.ZP, {
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
                    o &&
                    (0, y.jsx)(tI.u, {
                      side: "left",
                      label: t.formatMessage(sv.openDebug),
                      children: (0, y.jsx)(sy, {
                        onClick: function () {
                          return D.vm.toggleActiveSidebar("debug");
                        },
                        "aria-label": t.formatMessage(sv.openDebug),
                        children: (0, y.jsx)(el.ZP, {
                          className: "text-black dark:text-white",
                          icon: C.cDN,
                        }),
                      }),
                    }),
                }),
              ],
            });
      }
      var sy = et.Z.button(sx()),
        sj = n(89678),
        sk = n.n(sj),
        sw = n(55989),
        sC = n(66523),
        s_ = [
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
      function sM(e) {
        return sN.apply(this, arguments);
      }
      function sN() {
        return (sN = (0, ed._)(function (e) {
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
                          nT.m.warning(
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
      var sP = n(70060),
        sZ = n.n(sP)()(
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
      function sT(e) {
        var t = e.children;
        return (0, y.jsx)(sZ, {
          className: "h-full dark:bg-gray-800",
          followButtonClassName: "scroll-convo",
          initialScrollBehavior: "auto",
          children: t,
        });
      }
      function sI() {
        var e = (0, q._)(["grow flex-1 overflow-hidden"]);
        return (
          (sI = function () {
            return e;
          }),
          e
        );
      }
      function sS() {
        var e = (0, q._)([
          "absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:pl-2 md:w-[calc(100%-.5rem)]",
        ]);
        return (
          (sS = function () {
            return e;
          }),
          e
        );
      }
      var sD = (0, M.vU)({
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
      function sR(e) {
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
                (0, x._)({}, sD.reportSharedConversation)
              ),
            }),
            (0, y.jsx)("span", { children: "|" }),
            (0, y.jsx)("a", {
              href: "https://openai.com/policies/terms-of-use",
              target: "_blank",
              rel: "noreferrer",
              children: (0, y.jsx)(_.Z, (0, x._)({}, sD.termsOfUse)),
            }),
            (0, y.jsx)("span", { children: "|" }),
            (0, y.jsx)("a", {
              href: "https://openai.com/policies/privacy-policy",
              target: "_blank",
              rel: "noreferrer",
              children: (0, y.jsx)(_.Z, (0, x._)({}, sD.privacyPolicy)),
            }),
          ],
        });
      }
      var sA = function (e) {
          var t,
            n,
            r,
            a,
            i,
            s,
            o,
            l,
            u,
            c,
            d,
            m,
            f,
            h,
            g,
            p,
            v,
            j,
            M,
            P,
            Z,
            I,
            B,
            F,
            L,
            O,
            U,
            q,
            Q,
            W,
            H,
            $,
            G,
            V,
            J,
            Y,
            K,
            et,
            es,
            el = e.initialThreadData,
            eu = e.clientThreadId,
            eh = e.activeRequests,
            eg = e.setActiveRequests,
            ex = e.handleResetThread,
            ev = e.initiallyHighlightedMessageId,
            eb = e.continueConversationUrl,
            ey = (0, w.useContext)(A.gB),
            ek = (0, ee.Z)(),
            ew = (0, R.hz)(),
            eC = (0, eB.Fl)().isPluginsAvailable,
            e_ = (0, E.w$)(),
            eM = (0, en.WS)(),
            eN = ew.has(ei.Pt) && e_,
            eP = (0, w.useContext)(A.QL).historyDisabled,
            eZ = (0, k.useRouter)(),
            eT =
              ey &&
              (null === ($ = eZ.query) || void 0 === $
                ? void 0
                : null === (G = $.shareParams) || void 0 === G
                ? void 0
                : G[1]) === "moderate",
            eI = (0, N.U0)(eu),
            eR = (0, N.Kt)(eu),
            eA = (0, N.oq)(eu),
            eE = (0, b._)((0, w.useState)(!1), 2),
            eF = eE[0],
            eL = eE[1],
            eO = (0, b._)((0, w.useState)(!1), 2),
            eQ = eO[0],
            eW = eO[1],
            eH = (0, b._)((0, w.useState)(), 2),
            e$ = eH[0],
            eG = eH[1],
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
            e8 = (0, w.useRef)(null),
            e7 = (0, R.WY)(),
            e9 = (0, i5.g)(function (e) {
              return e.flags.isUserInCanPayGroup;
            }),
            te = ew.has(ei.FZ),
            tt = (0, b._)((0, w.useState)(!1), 2),
            tn = tt[0],
            tr = tt[1],
            ta =
              ((s = (i = {
                exempt: !1,
                onRestrictedTermFound: (0, w.useCallback)(
                  function (e) {
                    tr(!0),
                      eM(er.s6.promptUsedRestrictedWords, {
                        threadId: N.tQ.getServerThreadId(eu),
                        content: e,
                      });
                  },
                  [eM, eu]
                ),
              }).exempt),
              (o = i.onRestrictedTermFound),
              (u = (l = (0, b._)((0, w.useState)(!1), 2))[0]),
              (c = l[1]),
              {
                hasRestrictedTerms: u,
                checkRestrictedTerms: (0, w.useCallback)(
                  function (e) {
                    var t;
                    return (s_.some(function (n) {
                      var r = n.exec(e);
                      return r && (t = r[0]), r;
                    }),
                    !s && t)
                      ? (c(!0), null == o || o(t), !0)
                      : (c(!1), !1);
                  },
                  [s, o]
                ),
              }),
            ti = ta.hasRestrictedTerms,
            ts = ta.checkRestrictedTerms,
            to = (0, b._)((0, w.useState)(!0), 2),
            tl = to[0],
            tu = to[1],
            tc = (0, b._)((0, w.useState)(!1), 2),
            td = tc[0],
            tf = tc[1],
            th = (0, tE.iu)(),
            tg = (0, rX.p0)(),
            tp = (0, tE.Gg)(th, !0),
            tx =
              null !== (es = (0, tE.Bv)(el.lastModelUsed, eu)) && void 0 !== es
                ? es
                : tp,
            tv = (0, tE.B9)(),
            tb = void 0 !== tx ? tv.get(tx) : void 0,
            ty = (0, ik.iF)(),
            tj = (0, w.useCallback)(
              function () {
                ty(), eM(er.s6.newThread);
              },
              [eM, ty]
            ),
            tk = N.tQ.getTitle(eu),
            tw = (0, b._)((0, w.useState)(), 2),
            tC = tw[0],
            t_ = tw[1],
            tM = (0, w.useCallback)(
              function (e, t) {
                var n = null != t ? t : "";
                eP ||
                  "" === n ||
                  ea.ZP.generateTitle(n, e, tx)
                    .then(function (e) {
                      var r = e.title;
                      N.tQ.setTitle(n, r, N._L.Generated),
                        ty(),
                        eM(er.s6.renameThread, {
                          threadId: t,
                          content: r,
                          model: tx,
                        });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [eP, eM, tx, ty]
            ),
            tN = (0, w.useCallback)(
              function (e, t, n) {
                var r = ew.has(ei.uj);
                eP ||
                  !r ||
                  void 0 === n ||
                  (0, eq.lD)(n) ||
                  (0, eq.JD)(n) ||
                  ea.ZP.generateSuggestions(e, t, tx)
                    .then(function (e) {
                      t_({ messageId: t, suggestions: e.suggestions });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [ew, eP, tx]
            ),
            tP = (0, N.Uy)(eu),
            tZ =
              ((d =
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
              (f = (m = (0, R.hz)()).has(ei.PL)),
              (h = (0, w.useId)()),
              (g = (0, en.WS)()),
              (p = (0, rj.Y8)(function (e) {
                return null == e ? void 0 : e.setCapTimeout;
              })),
              (v = (0, rj.Y8)(function (e) {
                return null == e ? void 0 : e.clearCapTimeout;
              })),
              (j = (0, w.useContext)(A.QL).historyDisabled),
              (M = (0, tE.B9)()),
              (P = (0, w.useRef)(0)),
              (Z = (0, w.useRef)({})),
              (I = (0, w.useCallback)(
                function (e, t, n, r) {
                  var a,
                    i,
                    s = r.eventSource,
                    o = function () {
                      setTimeout(function () {
                        S.removeAborterById(n),
                          eg(function (e) {
                            var t = new Set(e);
                            return t.delete(n), t;
                          }),
                          delete Z.current[n],
                          N.tQ.releaseThread(eu);
                      }, 0);
                    },
                    l = N.tQ.getTree(eu),
                    u = n,
                    c = l.getParentId(u),
                    d = t === eU.Os.Continue,
                    h = !0,
                    b = !1,
                    y = l.getMessage(u),
                    j = new Set(),
                    k = l.getIsBlockedFromNode(c),
                    w = !1,
                    C = !1,
                    _ = sk()(
                      function () {
                        k ||
                          w ||
                          N.tQ.updateTree(eu, function (e) {
                            e.updateNodeMessage(u, y);
                          });
                      },
                      50,
                      { leading: !0, maxWait: 50 }
                    );
                  function P() {
                    return (P = (0, ed._)(function (e, t, n) {
                      var r,
                        a,
                        i,
                        s,
                        o,
                        u = arguments;
                      return (0, ef.Jh)(this, function (c) {
                        switch (c.label) {
                          case 0:
                            (r = u.length > 3 && void 0 !== u[3] && u[3]),
                              (c.label = 1);
                          case 1:
                            return (
                              c.trys.push([1, 3, , 4]),
                              [4, (0, i2._I)(n, !1, e, l.getMessageId(t))]
                            );
                          case 2:
                            return (
                              (i = (a = c.sent()).isBlocked),
                              (s = a.isFlagged),
                              (i || s) && (C = !0),
                              i
                                ? ((w = !0),
                                  r || (k = !0),
                                  N.tQ.updateTree(eu, function (e) {
                                    e.updateNode(t, {
                                      message: {
                                        content: { parts: { $set: [""] } },
                                      },
                                      metadata: {
                                        $set: (0, em._)((0, x._)({}, i2.sK), {
                                          completionSampleFinishTime:
                                            Date.now(),
                                        }),
                                      },
                                    });
                                  }),
                                  g(
                                    r
                                      ? er.s6.completionBlockedByModeration
                                      : er.s6.promptBlockedByModeration,
                                    { threadId: e, id: t }
                                  ))
                                : s
                                ? (N.tQ.updateTree(eu, function (e) {
                                    e.updateNode(t, {
                                      metadata: { $set: i2.Mf },
                                    });
                                  }),
                                  g(
                                    r
                                      ? er.s6.completionFlaggedByModeration
                                      : er.s6.promptFlaggedByModeration,
                                    { threadId: e, id: t }
                                  ))
                                : r &&
                                  k &&
                                  N.tQ.updateTree(eu, function (e) {
                                    e.updateNodeMessage(t, y);
                                  }),
                              [3, 4]
                            );
                          case 3:
                            return (
                              (o = c.sent()),
                              (w = !0),
                              N.tQ.updateTree(eu, function (e) {
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
                              g(er.s6.moderationError, {
                                threadId: e,
                                content: JSON.stringify(o || ""),
                              }),
                              iY().publish("UnrecoverableError"),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    })).apply(this, arguments);
                  }
                  return (
                    (a = (0, ed._)(function (r) {
                      var a, T, I, D, R, A, E, B, L, O, U, q, z, Q, W, H, $, G;
                      return (0, ef.Jh)(this, function (V) {
                        switch (V.label) {
                          case 0:
                            if ("error" === r.type)
                              return (
                                console.error((a = r.error)),
                                (T =
                                  (null == a ? void 0 : a.message) ||
                                  "Something went wrong"),
                                N.tQ.updateTree(eu, function (e) {
                                  e.updateNode(u, {
                                    message: { $set: y },
                                    metadata: {
                                      $set: {
                                        err: T,
                                        errType: "danger",
                                        errCode: ((0, sw.T)(a) && a.code) || "",
                                        completionSampleFinishTime: Date.now(),
                                      },
                                    },
                                  });
                                }),
                                o(),
                                (0, sw.T)(a) &&
                                  (null == a ? void 0 : a.code) === rj.uU &&
                                  (null == a ? void 0 : a.clearsIn) &&
                                  (p(
                                    new Date(
                                      Date.now() + 1e3 * a.clearsIn
                                    ).toISOString()
                                  ),
                                  setTimeout(function () {
                                    v();
                                  }, 1e3 * a.clearsIn)),
                                [2]
                              );
                            if (
                              ("moderation" === r.type &&
                                ((I = r.isCompletion),
                                (D = r.messageId),
                                (R = r.conversationId),
                                (A = r.flagged),
                                ((E = r.blocked) || A) &&
                                  N.tQ.updateTree(eu, function (e) {
                                    var t = e.messageIdToNodeId(D);
                                    e.updateNode(t, {
                                      message: {
                                        content: { parts: { $set: [""] } },
                                      },
                                      metadata: {
                                        $set: (0, em._)(
                                          (0, x._)({}, E ? i2.sK : i2.Mf),
                                          {
                                            completionSampleFinishTime:
                                              Date.now(),
                                          }
                                        ),
                                      },
                                    });
                                  }),
                                (A || E) &&
                                  g(
                                    I
                                      ? E
                                        ? er.s6.completionBlockedByModeration
                                        : er.s6.completionFlaggedByModeration
                                      : E
                                      ? er.s6.promptBlockedByModeration
                                      : er.s6.promptFlaggedByModeration,
                                    { threadId: R, id: D }
                                  )),
                              "message" === r.type)
                            ) {
                              if (
                                ((B = r.message),
                                (L = r.conversationId),
                                h && l.isFirstCompletion)
                              ) {
                                if (
                                  (null == B ? void 0 : B.author.role) ===
                                  eU.uU.System
                                )
                                  return l.appendSystemMessageToRoot(B), [2];
                                if (
                                  (null == B ? void 0 : B.author.role) ===
                                  eU.uU.User
                                )
                                  return [2];
                              }
                              h
                                ? ((U =
                                    (null ===
                                      (O = N.qN.getState().threads[eu]) ||
                                    void 0 === O
                                      ? void 0
                                      : O.continuingFromSharedConversationId) !=
                                    null),
                                  N.tQ.removeContinuingFromSharedConversationId(
                                    eu
                                  ),
                                  (h = !1),
                                  (b = l.isFirstCompletion || U),
                                  (null == B ? void 0 : B.id) && j.add(n),
                                  void 0 !== L &&
                                    ((i = L),
                                    (0, N.Zz)(eu) &&
                                      N.tQ.setServerIdForNewThread(eu, L)),
                                  N.tQ.updateTree(eu, function (e) {
                                    e.updateNodeMessage(u, B);
                                  }),
                                  b && tj(L),
                                  d ||
                                    (function (e, t, n) {
                                      P.apply(this, arguments);
                                    })(L, c, l.getTextFromLastNTurns(c, 1), !1),
                                  g(er.s6.generateCompletion, {
                                    id: n,
                                    threadId: L,
                                    completionType: t,
                                    eventSource: s,
                                    model: e,
                                  }),
                                  S.addAborter(n, Z.current[n]))
                                : d ||
                                  B.id === l.getMessageId(u) ||
                                  (j.add(B.id),
                                  _.flush(),
                                  N.tQ.updateTree(eu, function (e) {
                                    e.addNode(B.id, B, u, eU.Jq.Completion);
                                  }),
                                  (u = B.id),
                                  N.tQ.setThreadCurrentLeafId(eu, u)),
                                (y = B);
                            }
                            if (
                              (_(),
                              "done" !== r.type ||
                                (k ||
                                  w ||
                                  (_.flush(),
                                  C ||
                                    ((q = l.getMessageId(u)),
                                    b && tM(q, i),
                                    tN(i, q, y))),
                                N.tQ.updateTree(eu, function (e) {
                                  e.updateNode(u, {
                                    metadata: {
                                      $set: (0, em._)(
                                        (0, x._)({}, l.getMetadata(u)),
                                        {
                                          completionSampleFinishTime:
                                            Date.now(),
                                        }
                                      ),
                                    },
                                  });
                                }),
                                o(),
                                !m.has("tools3_dev")) ||
                                ((Q =
                                  null === (z = M.get(e)) || void 0 === z
                                    ? void 0
                                    : z.tags.includes(tE.S.GPT_4)),
                                f && Q && i1.gatherData(),
                                !(W = (0, tm.wR)(y))))
                            )
                              return [3, 4];
                            return [4, (0, tm.qZ)(W)];
                          case 1:
                            if (
                              ((H = V.sent()),
                              ($ = u),
                              N.tQ.updateTree(eu, function (e) {
                                var t = !0,
                                  n = !1,
                                  r = void 0;
                                try {
                                  for (
                                    var a, i = H[Symbol.iterator]();
                                    !(t = (a = i.next()).done);
                                    t = !0
                                  ) {
                                    var s = a.value;
                                    e.addNode(s.id, s, $, eU.Jq.Completion, {
                                      completionSampleFinishTime: Date.now(),
                                    }),
                                      ($ = s.id);
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
                              N.tQ.setThreadCurrentLeafId(eu, $),
                              !(f && Q))
                            )
                              return [3, 3];
                            return [4, i1.getEnforcementToken()];
                          case 2:
                            (G = V.sent()), (V.label = 3);
                          case 3:
                            F({
                              model: e,
                              completionType: eU.Os.Next,
                              parentNodeId: $,
                              metadata: {},
                              arkoseToken: null != G ? G : null,
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
                [g, tj, tM, eg, eu]
              )),
              (F = (0, w.useCallback)(
                ((B = (0, ed._)(function (e) {
                  var t, n, r, a, i, s, o, l, u, c, m, f, g, p, x, v, b;
                  return (0, ef.Jh)(this, function (y) {
                    switch (y.label) {
                      case 0:
                        return (
                          (t = e.model),
                          (n = e.completionType),
                          (r = e.parentNodeId),
                          (a = e.metadata),
                          (s = void 0 === (i = e.focusOnNewCompletion) || i),
                          (o = e.completionMetadata),
                          (l = e.arkoseToken),
                          (u = N.tQ.getTree(eu)),
                          N.tQ.retainThread(eu),
                          (c = ""
                            .concat(ez.Vh)
                            .concat(h, "-")
                            .concat(P.current++)),
                          eg(function (e) {
                            var t = new Set(e);
                            return t.add(c), t;
                          }),
                          N.tQ.updateTree(eu, function (e) {
                            e.addNode(c, "", r, eU.Jq.Completion);
                          }),
                          s && N.tQ.setThreadCurrentLeafId(eu, c),
                          (f = []),
                          (g = u.getNode(r)),
                          n === eU.Os.Next || n === eU.Os.Variant
                            ? ((m =
                                (null ===
                                  (p = (x = u.getNode(g.parentId)).message) ||
                                void 0 === p
                                  ? void 0
                                  : p.id) || x.id),
                              f.push(g.message))
                            : (m = g.message.id),
                          void 0 === (v = N.tQ.getServerThreadId(eu)) &&
                            (0, N.Zz)(eu) &&
                            N.tQ.updateInitialThreadDataForNewThread(eu, t, d),
                          [
                            4,
                            ea.ZP.publicApiCompletionStream(
                              {
                                model: t,
                                completionType: n,
                                threadId: v,
                                continueFromSharedConversationId: tP,
                                historyDisabled: j,
                                parentMessageId: m,
                                messages: f,
                                arkoseToken: null != l ? l : null,
                                enabledPluginIds: d,
                                completionMetadata: o,
                              },
                              I(t, n, c, a)
                            ),
                          ]
                        );
                      case 1:
                        return (b = y.sent()), (Z.current[c] = b), [2];
                    }
                  });
                })),
                function (e) {
                  return B.apply(this, arguments);
                }),
                [eu, h, eg, tP, j, d, I]
              ))),
            tT = (0, w.useCallback)(
              function () {
                if (eA) {
                  var e = N.tQ.getTree(eu).getBranchFromLeaf(eA);
                  e.forEach(function (e) {
                    S.abortAndRemoveById(e.id);
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
            tI =
              null === (J = tv.get(tx)) || void 0 === J
                ? void 0
                : J.tags.includes(tE.S.GPT_4),
            tS = ew.has(ei.PL);
          (0, w.useEffect)(
            function () {
              tS && tI && i1.gatherData();
            },
            [tS, tI]
          );
          var tD = (0, w.useCallback)(
              ((L = (0, ed._)(function (e, t, n, r) {
                var a,
                  i,
                  s,
                  o,
                  l,
                  u,
                  c,
                  d,
                  m = arguments;
                return (0, ef.Jh)(this, function (f) {
                  switch (f.label) {
                    case 0:
                      if (
                        ((a = !(m.length > 4) || void 0 === m[4] || m[4]),
                        (i = m.length > 5 ? m[5] : void 0),
                        (s = m.length > 6 ? m[6] : void 0),
                        r && tT(),
                        (l = N.tQ.getTree(eu)),
                        e !== eU.Os.Continue && ts(l.getTextFromNode(t)))
                      )
                        return [2];
                      if (
                        ((u = i ? tp : tx),
                        (c =
                          null === (o = tv.get(u)) || void 0 === o
                            ? void 0
                            : o.tags.includes(tE.S.GPT_4)),
                        !(tS && c))
                      )
                        return [3, 2];
                      return [4, i1.getEnforcementToken()];
                    case 1:
                      (d = f.sent()), (f.label = 2);
                    case 2:
                      return (
                        tZ({
                          model: u,
                          completionType: e,
                          parentNodeId: t,
                          metadata: n,
                          focusOnNewCompletion: a,
                          completionMetadata: s,
                          arkoseToken: null != d ? d : null,
                        }),
                        [2]
                      );
                  }
                });
              })),
              function (e, t, n, r) {
                return L.apply(this, arguments);
              }),
              [eu, ts, tp, tx, tv, tS, tZ, tT]
            ),
            tR = (0, w.useCallback)(
              function (e, t, n, r) {
                N.tQ.updateTree(eu, function (a) {
                  a.addNode(e, n, t, eU.Jq.Prompt, void 0, r);
                });
              },
              [eu]
            ),
            tA = (0, w.useCallback)(
              function (e, t, n) {
                var r = t.content,
                  a = t.attachments,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                tR(e, eA, r, a.length > 0 ? { attachments: a } : {}),
                  tD(eU.Os.Next, e, n, !0, void 0, void 0, i);
              },
              [eA, tR, tD]
            ),
            tB = (0, N.nh)(eu, eA),
            tF = (0, w.useMemo)(
              function () {
                var e,
                  t,
                  n = tB.type === eU.Jq.Prompt,
                  r =
                    (null === (e = tB.metadata) || void 0 === e
                      ? void 0
                      : e.err) &&
                    (null === (t = tB.metadata) || void 0 === t
                      ? void 0
                      : t.errCode) !== i2.Dd;
                return !!(n || r) && 0 === eh.size;
              },
              [eh.size, tB]
            ),
            tL = (0, rj.Y8)(function (e) {
              return e.isoDate;
            }),
            tO = (0, w.useMemo)(
              function () {
                var e,
                  t =
                    (null === (e = tB.metadata) || void 0 === e
                      ? void 0
                      : e.errCode) === rj.uU;
                return tF && t && null != tL && "" !== tL;
              },
              [
                null === (Y = tB.metadata) || void 0 === Y ? void 0 : Y.errCode,
                tF,
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
                  i = N.tQ.getTree(eu).getParentPromptNode(e).id;
                tD(eU.Os.Variant, i, t, !1, n, a, { variantPurpose: r });
              },
              [tD, eu]
            ),
            tq = (0, w.useCallback)(
              function (e) {
                eM(er.s6.continueCompletion),
                  tD(eU.Os.Continue, e, { eventSource: "mouse" }, !1);
              },
              [eM, tD]
            ),
            tz = (0, w.useCallback)(
              function (e) {
                var t = N.tQ.getTree(eu).getLeafFromNode(e);
                N.tQ.setThreadCurrentLeafId(eu, t.id), eM(er.s6.changeNode);
              },
              [eM, eu]
            ),
            tQ = (0, w.useCallback)(
              function (e, t) {
                N.tQ.updateTree(eu, function (n) {
                  n.updateNodeText(e, t);
                });
              },
              [eu]
            ),
            tW = (0, w.useCallback)(
              function (e, t, n) {
                var r = N.tQ.getServerThreadId(eu);
                if (
                  (eM(er.s6.thumbRating, {
                    id: t,
                    threadId: r,
                    rating: n,
                    model: tx,
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
                  N.tQ.updateTree(eu, function (t) {
                    var r = t.getMetadata(e);
                    t.updateNode(e, {
                      metadata: {
                        $set: (0, em._)((0, x._)({}, r), { rating: n }),
                      },
                    });
                  }),
                  "thumbsDown" === n && eN)
                ) {
                  var a = N.tQ.getTree(eu).getConversationTurns(e || "root");
                  se(a[a.length - 1]) &&
                    tU(
                      e,
                      { eventSource: "mouse", intent: "comparison" },
                      !1,
                      "comparison"
                    );
                }
              },
              [eM, eu, tx, eN, tU]
            ),
            tH = (0, w.useCallback)(
              function (e, t) {
                if (eX && null != e2 && "" !== e2 && (e || t.length > 0)) {
                  var n = N.tQ.getServerThreadId(eu);
                  eM(er.s6.reportResult, {
                    id: e4,
                    threadId: n,
                    content: e,
                    model: tx,
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
              [eX, e2, eu, eM, e4, tx]
            ),
            t$ = (0, w.useCallback)(
              function (e, t) {
                if (eF && null != e$ && "" !== e$) {
                  var n = N.tQ.getServerThreadId(eu);
                  eM(er.s6.reportResult, {
                    id: e4,
                    threadId: n,
                    content: e,
                    model: tx,
                    rating: eX,
                    tags: t,
                  }),
                    ea.ZP.submitSharedConversationReportFeedback({
                      message_id: e$,
                      shared_conversation_id: n,
                      text: e,
                      tags: t,
                    }),
                    eW(!0);
                }
              },
              [eX, eF, e$, eu, eM, e4, tx]
            ),
            tG = (0, w.useCallback)(
              ((O = (0, ed._)(function (e, t, n, r, a, i, s, o, l, u, c) {
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
                          conversation_id: N.tQ.getServerThreadId(eu),
                          text: u,
                          tags: c.map(function (e) {
                            return e.replace("feedback-", "");
                          }),
                          completion_comparison_rating: r,
                          new_completion_placement: a,
                          feedback_start_time: i,
                          compare_step_start_time: s,
                          new_completion_load_start_time: o,
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
              function (e, t, n, r, a, i, s, o, l, u, c) {
                return O.apply(this, arguments);
              }),
              [eu]
            ),
            tV = (0, w.useCallback)(
              ((U = (0, ed._)(function (e, t, n, r, a, i, s) {
                return (0, ef.Jh)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [
                        4,
                        ea.ZP.submitMessageComparisonFeedback({
                          feedback_version: "inline_regen_feedback:a:1.0",
                          original_message_id: e,
                          new_message_id: t,
                          rating: "none",
                          conversation_id: N.tQ.getServerThreadId(eu),
                          text: "",
                          tags: [],
                          completion_comparison_rating: n,
                          new_completion_placement: "not-applicable",
                          feedback_start_time: r,
                          compare_step_start_time: a,
                          new_completion_load_start_time: i,
                          new_completion_load_end_time: s,
                          frontend_submission_time: Date.now(),
                          timezone_offset_min: new Date().getTimezoneOffset(),
                        }),
                      ];
                    case 1:
                      return o.sent(), [2];
                  }
                });
              })),
              function (e, t, n, r, a, i, s) {
                return U.apply(this, arguments);
              }),
              [eu]
            ),
            tJ = (0, w.useCallback)(
              function (e, t) {
                var n = N.tQ.getTree(eu).getConversationTurns(e),
                  r =
                    null == n
                      ? void 0
                      : n[(null == n ? void 0 : n.length) - 1].variantIds,
                  a = (null == r ? void 0 : r.length) === 1;
                tU(
                  e,
                  a
                    ? (0, em._)((0, x._)({}, t), {
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
                N.tQ.updateTree(eu, function (t) {
                  t.deleteNode(e);
                });
              },
              [eu]
            ),
            tK = (0, w.useCallback)(function () {
              D.vm.closeModal(D.B.AccountPortal);
            }, []),
            tX = (0, sp.t)(function (e) {
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
                var n = N.tQ.getTree(eu);
                if (n.isFirstCompletion && !eP) {
                  var r,
                    a = n.getParent(t);
                  (null === (r = a.metadata) || void 0 === r
                    ? void 0
                    : r.errCode) !== i2.Dd &&
                    setTimeout(function () {
                      tM(a.message.id);
                    }, 500);
                }
                S.abortAndRemoveById(t),
                  eh.has(t) &&
                    (N.tQ.updateTree(eu, function (e) {
                      e.updateNodeMessageMetadata(t, {
                        finish_details: { type: "interrupted" },
                      });
                    }),
                    eg(function (e) {
                      var n = new Set(e);
                      return n.delete(t), n;
                    }));
              },
              [tM, eP, eh, eg, eu]
            ),
            t3 = (0, w.useCallback)(function () {
              tf(!0);
            }, []);
          (0, w.useEffect)(
            function () {
              var e = iY().subscribe("AbortCompletion", t5),
                t = iY().subscribe("UnrecoverableError", t3);
              return function () {
                iY().unsubscribe(e), iY().unsubscribe(t);
              };
            },
            [t5, t3]
          );
          var t4 = (0, N.Hk)(eu),
            t6 = eI >= 2,
            t8 = (0, N.Zz)(eu) && !t6,
            t7 = (0, w.useCallback)(function () {
              tu(!0), ec.m.setItem("oai/librarian/hasSeenWarning", "true");
            }, []),
            t9 = (0, w.useCallback)(function () {
              tr(!1);
            }, []),
            ne = (0, N.lA)(eu, eA),
            nt = (0, N.dz)(eu, eA),
            nn = T(function (e) {
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
            ns = (0, sC.Z)(),
            no = (0, N.XK)(eu),
            nl = (0, D.tN)(function (e) {
              return e.sharingModalThreadId === no;
            });
          (Q = (q = { clientThreadId: eu, currentModelId: tx }).clientThreadId),
            (W = q.currentModelId),
            (t = (0, nE.i0)(W, nE.dN.CODE_INTERPRETER)),
            (n = (0, w.useContext)(A.gB)),
            (r = (0, ep.kP)().session),
            (a = N.tQ.getServerThreadId(Q)),
            (0, ej.a)({
              queryKey: ["interpreterState", a],
              queryFn: sM,
              enabled: !!(t && a && !n && (null == r ? void 0 : r.accessToken)),
              cacheTime: 0,
            });
          var nu = (0, N.r7)(eu);
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsxs)(iV(), {
                children: [
                  null != tk && (0, y.jsx)("title", { children: tk }),
                  ey &&
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
              ew.has(ei.i) ? (0, y.jsx)(so, {}) : null,
              !tl &&
                (0, y.jsx)(
                  eD.Z,
                  {
                    isOpen: !0,
                    onClose: t7,
                    icon: i$.Z,
                    title: ek.formatMessage(sD.doNotShareSensitive),
                    primaryButton: (0, y.jsx)(eS.ZP.Button, {
                      onClick: t7,
                      title: ek.formatMessage(sD.acknowledge),
                    }),
                    type: "danger",
                  },
                  "OnboardingModal"
                ),
              ti &&
                tn &&
                (0, y.jsx)(
                  eD.Z,
                  {
                    isOpen: !0,
                    onClose: t9,
                    icon: C.U0j,
                    title: ek.formatMessage(sD.contentPolicyViolation),
                    primaryButton: (0, y.jsx)(eS.ZP.Button, {
                      onClick: t9,
                      title: ek.formatMessage(sD.acknowledge),
                    }),
                    type: "danger",
                  },
                  "RestrictedTerms"
                ),
              nl &&
                null != no &&
                (0, y.jsx)(ir, {
                  serverThreadId: no,
                  activeRequests: eh,
                  currentThreadModel: el.lastModelUsed,
                }),
              null != eX &&
                (0, y.jsx)(st, {
                  ratingModalNodeId: e2,
                  ratingModalOpen: eX,
                  onCloseRatingModal: function () {
                    return e0(void 0);
                  },
                  handleSubmitFeedback: tH,
                  onHandleChangeFeedbackComparisonRating: tG,
                  currentModelId: tx,
                  feedbackTextareaRef: e8,
                  clientThreadId: eu,
                  activeRequests: eh,
                  onChangeItemInView: tz,
                  onRequestMoreCompletions: tU,
                  onUpdateNode: tQ,
                  onChangeRating: tW,
                  onDeleteNode: tY,
                  onRequestCompletion: tD,
                }),
              eF &&
                (0, y.jsx)(st, {
                  ratingModalNodeId: e$,
                  ratingModalOpen: "report",
                  onCloseRatingModal: function () {
                    return eL(!1);
                  },
                  handleSubmitFeedback: t$,
                  onHandleChangeFeedbackComparisonRating: function () {},
                  currentModelId: tx,
                  feedbackTextareaRef: e8,
                  clientThreadId: eu,
                  activeRequests: eh,
                  onChangeItemInView: tz,
                  onRequestMoreCompletions: tU,
                  onUpdateNode: tQ,
                  onChangeRating: tW,
                  onDeleteNode: tY,
                  onRequestCompletion: tD,
                }),
              eQ &&
                (0, y.jsx)(eD.Z, {
                  onClose: function () {
                    return eW(!1);
                  },
                  isOpen: !0,
                  icon: i$.Z,
                  title: ek.formatMessage(sD.reportModalThankYouTitle),
                  description: ek.formatMessage(
                    sD.reportModalThankYouDescription
                  ),
                  primaryButton: (0, y.jsx)(eS.ZP.Button, {
                    onClick: function () {
                      return eW(!1);
                    },
                    title: ek.formatMessage(sD.reportModalThankYouDismiss),
                  }),
                  type: "danger",
                }),
              eJ &&
                (0, y.jsx)(st, {
                  ratingModalNodeId: eA,
                  ratingModalOpen: "moderate",
                  onCloseRatingModal: function () {
                    return eY(!1);
                  },
                  handleSubmitFeedback: X(),
                  onHandleChangeFeedbackComparisonRating: function () {},
                  currentModelId: tx,
                  feedbackTextareaRef: e8,
                  clientThreadId: eu,
                  activeRequests: eh,
                  onChangeItemInView: tz,
                  onRequestMoreCompletions: tU,
                  onUpdateNode: tQ,
                  onChangeRating: tW,
                  onDeleteNode: tY,
                  onRequestCompletion: tD,
                }),
              (0, y.jsx)(sb, {}),
              (0, y.jsx)(sE, {
                children:
                  !eR &&
                  (t8 || t6) &&
                  ((H = (0, y.jsx)(
                    aK,
                    {
                      onChangeItemInView: tz,
                      onRequestMoreCompletions: tU,
                      onUpdateNode: tQ,
                      onChangeRating: tW,
                      onDeleteNode: tY,
                      onRequestCompletion: tD,
                      onHandleChangeVariantFeedbackInlineComparisonRating: tV,
                      isNewThread: t8,
                      clientThreadId: eu,
                      activeRequests: eh,
                      currentThreadModel: el.lastModelUsed,
                      initiallyHighlightedMessageId: ev,
                      inlineEmbeddedDisplay: !1,
                      promptTextareaRef: nr,
                    },
                    eu
                  )),
                  ey
                    ? (0, y.jsx)("div", {
                        className: "h-full overflow-auto dark:bg-gray-800",
                        children: H,
                      })
                    : (0, y.jsx)(sT, { children: H })),
              }),
              (0, y.jsxs)(sB, {
                children: [
                  ew.has("model_preview") &&
                    t8 &&
                    (null == tb ? void 0 : tb.tags.includes(tE.S.GPT_4)) &&
                    (0, y.jsx)("div", {
                      className:
                        "stretch mx-2 mb-2 text-center text-xs text-gray-600 dark:text-gray-200 md:mx-4 md:text-sm lg:mx-auto lg:max-w-3xl",
                      children: ns.textareaDisclaimer,
                    }),
                  !tO &&
                    !ey &&
                    (0, y.jsx)(ss.Z, {
                      children: (0, y.jsx)(
                        n0,
                        {
                          clientThreadId: eu,
                          onRequestMoreCompletions: tJ,
                          onCreateNewCompletion: tA,
                          onAbortCompletion: t5,
                          onContinueGenerating: tq,
                          currentModelId: tx,
                          isCompletionInProgress: eh.has(t4),
                          className: (0, z.Z)(
                            "stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto",
                            te
                              ? "mx-auto max-w-[44rem] px-2 sm:px-0"
                              : "lg:max-w-2xl xl:max-w-3xl"
                          ),
                          shouldRetry: tF,
                          canContinue: na,
                          suggestions:
                            void 0 !== tC &&
                            (null == tC ? void 0 : tC.messageId) ===
                              (null ===
                                (K = N.tQ.getTree(eu).getLastValidNode(eA)) ||
                              void 0 === K
                                ? void 0
                                : null === (et = K.message) || void 0 === et
                                ? void 0
                                : et.id)
                              ? null == tC
                                ? void 0
                                : tC.suggestions
                              : void 0,
                          disabled: !th.size,
                          canPause: nn,
                          isInteractableSharedThread: nu,
                          ref: nr,
                        },
                        eu
                      ),
                    }),
                  ey &&
                    (0, y.jsx)(y.Fragment, {
                      children: (0, y.jsxs)("div", {
                        className:
                          "relative flex h-full w-full flex-1 items-center justify-center gap-2",
                        children: [
                          (0, y.jsx)(eo.z, {
                            as: "link",
                            to: eb,
                            children: ek.formatMessage(
                              sD.sharedConversationContinueConversation
                            ),
                          }),
                          eT &&
                            (0, y.jsx)(eo.z, {
                              onClick: function () {
                                eY(!0);
                              },
                              children: ek.formatMessage(
                                sD.sharedConversationModerateConversation
                              ),
                            }),
                        ],
                      }),
                    }),
                  (0, y.jsx)("div", {
                    className:
                      "px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3",
                    children: ey
                      ? (0, y.jsx)(sR, {
                          onClickReportSharedConversation: function () {
                            eG(eA), eL(!0);
                          },
                        })
                      : e7
                      ? (0, y.jsx)("span", {
                          children: (0, y.jsx)(
                            _.Z,
                            (0, em._)(
                              (0, x._)({}, sD.mayProduceInaccurateInformation),
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
                            (0, em._)((0, x._)({}, sD.freeResearchPreview), {
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
              e9 && (0, y.jsx)(sg.Z, { isOpen: t0, onClose: t2 }),
              void 0 !== e7 &&
                e7 &&
                (0, y.jsx)(sh, { isOpen: ni, onClose: tK }),
              td &&
                (0, y.jsx)(
                  eD.Z,
                  {
                    onClose: X(),
                    isOpen: !0,
                    icon: i$.Z,
                    title: ek.formatMessage(sD.somethingWentWrong),
                    description: ek.formatMessage(sD.tryAgainLater),
                    primaryButton: (0, y.jsx)(eS.ZP.Button, {
                      onClick: function () {
                        ex(), tf(!1);
                      },
                      title: ek.formatMessage(sD.resetThread),
                    }),
                    type: "danger",
                  },
                  "UnrecoverableErrorModal"
                ),
            ],
          });
        },
        sE = et.Z.div(sI()),
        sB = et.Z.div(sS());
      function sF(e) {
        var t,
          n = e.clientThreadId,
          r = null !== (t = N.tQ.getTitle(n)) && void 0 !== t ? t : "New chat",
          a = B(n, r, !0),
          i = a.resolvedTitle,
          s = a.isTypingEffect,
          o = (0, w.useContext)(A.QL),
          l = o.historyDisabled,
          u = o.toggleHistoryDisabled;
        return (0, y.jsx)(y.Fragment, {
          children: l
            ? (0, y.jsxs)("button", {
                className:
                  "flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",
                onClick: function () {
                  return u();
                },
                children: [
                  (0, y.jsx)(el.ZP, { icon: C.$IY }),
                  (0, y.jsx)(_.Z, (0, x._)({}, sO.enableChatHistory)),
                ],
              })
            : s && null != i
            ? (0, y.jsx)(O, { text: i })
            : null != i
            ? i
            : (0, y.jsx)(_.Z, (0, x._)({}, sO.newChat)),
        });
      }
      var sL =
          ((u = function (e) {
            var t = e.clientThreadId,
              n = e.setClientThreadId,
              r = (0, v._)(e, ["clientThreadId", "setClientThreadId"]),
              a = (0, w.useContext)(A.gB),
              i = (0, N.UL)(t),
              s = r.setActiveRequests,
              o = (0, N.XK)(t),
              l = (0, k.useRouter)(),
              u = (0, R.hz)(),
              c = (0, w.useContext)(A.QL).historyDisabled,
              d = (0, tE.Xy)(i.lastModelUsed, t),
              m = (0, j.NL)();
            (0, w.useEffect)(
              function () {
                return (
                  N.tQ.retainThread(t),
                  function () {
                    setTimeout(function () {
                      m.invalidateQueries(["conversation", t]);
                    }, 0),
                      N.tQ.releaseThread(t);
                  }
                );
              },
              [t, m]
            ),
              (0, w.useEffect)(
                function () {
                  D.vm.closeSharingModal();
                },
                [t, o]
              );
            var f = (0, w.useCallback)(
                function () {
                  n((0, N.OX)()),
                    d.tags.includes(tE.S.GPT_4)
                      ? l.replace("/", void 0, { shallow: !0 })
                      : l.replace("/?model=".concat(d.id));
                },
                [n, d.tags, d.id, l]
              ),
              h = (0, D.tN)(function (e) {
                return e.activeSidebar;
              }),
              g = (0, E.w$)();
            return (
              (0, w.useEffect)(
                function () {
                  return function () {
                    S.abortAllAndReset(), s(new Set());
                  };
                },
                [s, t]
              ),
              (0, y.jsxs)(iH.Z, {
                onResetThread: f,
                showNavigation: !a,
                renderTitle: (0, y.jsx)(sF, { clientThreadId: t }),
                children: [
                  (0, y.jsxs)(iH.Z.NavigationPrimaryActionDesktop, {
                    onClick: f,
                    children: [
                      (0, y.jsx)(el.ZP, { icon: c ? C.Bw1 : C.OvN }),
                      (0, y.jsx)(
                        _.Z,
                        (0, x._)({}, c ? sO.clearChat : sO.newChat)
                      ),
                    ],
                  }),
                  (0, y.jsx)(iH.Z.NavigationPrimaryActionMobile, {
                    onClick: f,
                    children: (0, y.jsx)(el.ZP, {
                      icon: c ? C.Bw1 : C.OvN,
                      size: "medium",
                    }),
                  }),
                  (0, y.jsx)(iH.Z.NavigationContent, {
                    children: (0, y.jsx)(iR, {
                      activeId: c ? void 0 : o,
                      onNewThread: f,
                      setActiveRequests: s,
                    }),
                  }),
                  (0, y.jsx)(
                    sA,
                    (0, x._)(
                      {
                        initialThreadData: i,
                        clientThreadId: t,
                        handleResetThread: f,
                      },
                      r
                    ),
                    t
                  ),
                  (0, y.jsxs)(iH.Z.Sidebars, {
                    children: [
                      u.has("debug") &&
                        "debug" === h &&
                        (0, y.jsx)(aO.fv, {
                          clientThreadId: t,
                          slideOver: !g,
                          onClose: function () {
                            return D.vm.toggleActiveSidebar("debug");
                          },
                          isOpen: !0,
                        }),
                      u.has("tools3_dev") &&
                        (0, y.jsx)(iW.ZP, { slideOver: !g }),
                    ],
                  }),
                ],
              })
            );
          }),
          function (e) {
            var t = e.clientThreadId;
            (0, N.ax)(t);
            var n = (0, N.UL)(t),
              r = (0, b._)((0, w.useState)(new Set()), 2),
              a = r[0],
              i = r[1];
            return (
              (0, w.useEffect)(
                function () {
                  D.vm.setActiveSidebar(!1), S.reset(), i(new Set());
                },
                [n.threadId]
              ),
              (0, y.jsx)(
                u,
                (0, x._)({}, e, { activeRequests: a, setActiveRequests: i })
              )
            );
          }),
        sO = (0, M.vU)({
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
          return h;
        },
        Z: function () {
          return c;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(34303);
      function s() {
        var e = (0, r._)([
          "flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = (0, r._)(["w-10 text-2xl text-center"]);
        return (
          (o = function () {
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
            (0, a.jsx)(f, { children: n }),
          ],
        });
      }
      var d = i.Z.div(s()),
        m = i.Z.div(o()),
        f = i.Z.div(l()),
        h = i.Z.div(u());
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
        s = n(35250),
        o = n(16578),
        l = n.n(o),
        u = n(68555),
        c = n(70079),
        d = n(1454),
        m = n(82841),
        f = n(36218),
        h = n(24274),
        g = n(59110),
        p = n(97688),
        x = n(44925),
        v = n(74853),
        b = n(99652),
        y = n(1220);
      function j(e) {
        var t = e.isOpen,
          n = e.onClose,
          o = (0, g.hz)(),
          j = (0, m.WS)(),
          k = (0, a._)((0, c.useState)(!1), 2),
          w = k[0],
          C = k[1],
          _ = (0, u.useRouter)(),
          M = (0, c.useCallback)(
            function () {
              j(f.s6.closeAccountPaymentModal), n();
            },
            [n, j]
          ),
          N = (0, c.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, i.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    C(!0), j(f.s6.clickAccountPaymentCheckout), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 3, 4, 5]), [4, h.ZP.getCheckoutLink()]
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
          P = (0, c.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, i.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    C(!0), j(f.s6.clickAccountCustomerPortal), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 3, 4, 5]),
                      [4, h.ZP.fetchCustomerPortalUrl()]
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
          Z = (0, c.useCallback)(
            function () {
              j(f.s6.clickAccountPaymentGetHelp);
            },
            [j]
          ),
          T = (0, g.YD)(),
          I = o.has("disable_upgrade_ui");
        return (0, s.jsxs)(v.x, {
          isOpen: t,
          onClose: n,
          children: [
            (0, s.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
              children: [
                (0, s.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your plan",
                }),
                (0, s.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: M,
                  children: (0, s.jsx)(d.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "grid sm:grid-cols-2",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "relative order-2 col-span-1 border-r-0 border-t dark:border-gray-700 sm:order-1 sm:border-r sm:border-t-0",
                  children: (0, s.jsx)(b.Oi, {
                    rowElements: [
                      (0, s.jsx)(
                        b.Cu,
                        { text: "Free plan" },
                        "row-free-plan-name"
                      ),
                      (0, s.jsx)(
                        b.hi,
                        {
                          variant: "disabled",
                          disabled: !0,
                          text: y.S.free.callToAction.active,
                        },
                        "row-free-plan-button"
                      ),
                      (0, s.jsx)(
                        b.G,
                        { variant: "secondary", text: y.S.free.demandAccess },
                        "row-free-plan-demand"
                      ),
                      (0, s.jsx)(
                        b.G,
                        { variant: "secondary", text: y.S.free.responseSpeed },
                        "row-free-plan-speed"
                      ),
                      (0, s.jsx)(
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
                (0, s.jsx)("div", {
                  className: "relative order-1 col-span-1 sm:order-2",
                  children: (0, s.jsx)(b.Oi, {
                    rowElements: [
                      (0, s.jsx)(
                        b.Cu,
                        {
                          text: y.S.plus.name,
                          children: (0, s.jsx)("span", {
                            className: "font-semibold text-gray-500",
                            children: y.S.plus.costInDollars,
                          }),
                        },
                        "row-plus-plan-title"
                      ),
                      (0, s.jsx)(
                        b.hi,
                        {
                          variant: "primary",
                          disabledText: I
                            ? "Due to high demand, we've temporarily paused upgrades."
                            : "",
                          disabled: w,
                          isLoading: w,
                          onClick: N,
                          text: y.S.plus.callToAction.inactivePayment,
                        },
                        "row-plus-plan-button"
                      ),
                      (0, s.jsx)(
                        b.G,
                        { variant: "primary", text: y.S.plus.demandAccess },
                        "row-plus-plan-demand"
                      ),
                      (0, s.jsx)(
                        b.G,
                        { variant: "primary", text: y.S.plus.responseSpeed },
                        "row-plus-plan-speed"
                      ),
                      (0, s.jsx)(
                        b.G,
                        {
                          className: "sm:pb-2",
                          variant: "primary",
                          text: y.S.plus.modelFeatures,
                        },
                        "row-plus-plan-updates"
                      ),
                      T &&
                        (0, s.jsx)(
                          b.nR,
                          {
                            className: "sm:pb-1",
                            isLoading: w,
                            text: y.S.manageSubscriptionWeb.callToAction,
                            onClick: P,
                          },
                          "row-plus-plan-manage"
                        ),
                      (0, s.jsx)(
                        l(),
                        {
                          target: "_blank",
                          href: x.ti,
                          passHref: !0,
                          children: (0, s.jsx)(
                            b.nR,
                            {
                              className: "sm:pb-1",
                              isLoading: !1,
                              text: y.S.getHelp.callToAction,
                              onClick: Z,
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
        s = n(48727);
      function o() {
        var e = (0, r._)([
          "flex grow justify-center bg-white dark:bg-gray-900 rounded-md flex-col items-start overflow-hidden border shadow-md dark:border-gray-700",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      var l = function (e) {
          var t = e.children,
            n = e.isOpen,
            r = e.onClose;
          return (0, a.jsx)(s.Z, {
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
        u = i.Z.div(o());
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
          return v;
        },
        nR: function () {
          return y;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(19841),
        s = n(70079),
        o = n(1454),
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
      function f() {
        var e = (0, r._)([
          "gap-2 flex flex-row justify-start items-center text-sm",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = (0, r._)([
          "text-xl font-semibold justify-between items-center flex",
        ]);
        return (
          (h = function () {
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
        x = {
          "primary-disabled":
            "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
          primary: "border-none py-3 font-semibold",
          disabled:
            "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100",
        },
        v = (0, s.forwardRef)(function (e, t) {
          var n = e.isLoading,
            r = void 0 !== n && n,
            s = e.disabled,
            l = e.onClick,
            m = e.variant,
            f = void 0 === m ? "primary" : m,
            h = e.text,
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
                    className: (0, i.Z)("w-full", x[f]),
                    children: [
                      h,
                      r &&
                        (0, a.jsx)(c.ZP, {
                          className: "animate-spin",
                          icon: o.dAq,
                        }),
                    ],
                  }),
                }),
              })
            : (0, a.jsxs)(u.z, {
                disabled: void 0 !== s && s,
                onClick: l,
                ref: t,
                as: "button",
                className: (0, i.Z)(x[f]),
                children: [
                  (0, a.jsx)("span", {
                    className: (0, i.Z)("inline-block", {
                      "text-gray-700": "primary-disabled" === f,
                      "text-white": "primary" === f,
                    }),
                    children: h,
                  }),
                  r &&
                    (0, a.jsx)(c.ZP, {
                      className: "animate-spin",
                      icon: o.dAq,
                    }),
                ],
              });
        });
      v.displayName = "PricingPlanButton";
      var b = function (e) {
          var t = e.variant,
            n = void 0 === t ? "primary" : t,
            r = e.className,
            s = e.text;
          return (0, a.jsxs)(k, {
            className: r,
            children: [
              (0, a.jsx)(c.ZP, {
                icon: o._rq,
                className: (0, i.Z)("h-5 w-5", {
                  "text-green-700": "primary" == n,
                  "text-gray-400": "secondary" == n,
                }),
              }),
              (0, a.jsx)("span", { children: s }),
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
                  (0, a.jsx)(c.ZP, { className: "animate-spin", icon: o.dAq }),
              ],
            }),
          });
        },
        j = l.Z.div(m()),
        k = l.Z.div(f()),
        w = l.Z.div(h());
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
    41402: function () {},
  },
]);
