(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [709],
  {
    78251: function (e, n, t) {
      "use strict";
      var r = t(39324),
        a = t(4337),
        i = t(35250),
        s = t(35290),
        o = t(3001),
        l = t(59110),
        u = t(34303);
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
      n.ZP = function () {
        var e = (0, l.ec)(function (e) {
            return e.currentWorkspace;
          }),
          n = (0, l.WY)();
        return (null == e ? void 0 : e.structure) === "workspace"
          ? (0, i.jsx)(f, {
              children: (0, i.jsx)(s.Z, (0, r._)({}, h.businessPlanName)),
            })
          : (null == e ? void 0 : e.structure) === "personal" && n
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
    80852: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return eu;
          },
        });
      var r = t(22830),
        a = t(35250),
        i = t(71389),
        s = t(70079),
        o = t(97688),
        l = t(87316),
        u = t(32983),
        c = t(85023),
        d = t(75527),
        m = t(32689),
        f = t(21437),
        h = t(59110),
        g = t(61888),
        p = t(78251),
        x = t(48727),
        v = t(39324),
        b = t(71209),
        y = t(3001),
        j = t(75908),
        k = t(35290),
        w = t(82841),
        C = t(36218),
        _ = t(32787),
        M = t(59114),
        N = (0, y.vU)({
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
        P = "2023-04-25",
        Z = "".concat("oai/apps/hasSeenAgeConfirmationModal", "/").concat(P);
      function T(e) {
        var n = e.onClose,
          t = (0, j.Z)(),
          r = (0, s.useCallback)(
            function () {
              c.m.setItem(Z, !0), n();
            },
            [n]
          ),
          i = (0, w.WS)();
        return (
          (0, s.useEffect)(function () {
            i && i(C.s6.ageConfirmationModal, { content: P });
          }, []),
          (0, a.jsx)(x.Z, {
            isOpen: !0,
            onClose: g.noop,
            type: "success",
            title: t.formatMessage(N.welcomeBack),
            primaryButton: (0, a.jsx)(M.ZP.Button, {
              title: t.formatMessage(N.ageRequirementsButton),
              color: "primary",
              onClick: r,
            }),
            secondaryButton: (0, a.jsx)(M.ZP.Button, {
              title: t.formatMessage(N.logoutButton),
              color: "light",
              onClick: function () {
                i(C.s6.clickLogOut, { eventSource: "mouse" }), (0, _.w7)();
              },
              className: "border-gray-800 hover:border-gray-700",
            }),
            children: (0, a.jsx)(I, {}),
          })
        );
      }
      var I = function () {
          var e = (0, j.Z)();
          return (0, a.jsx)("div", {
            className: "mb-6 mt-4 sm:mt-6",
            children: (0, a.jsxs)("div", {
              className: "prose prose-invert text-base text-gray-500",
              children: [
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    k.Z,
                    (0, v._)({}, N.announcementParagraph1)
                  ),
                }),
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(
                    k.Z,
                    (0, b._)((0, v._)({}, N.announcementParagraph2), {
                      values: {
                        privacyPolicyLink: (0, a.jsx)("a", {
                          href: "https://openai.com/policies/privacy-policy",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(N.privacyPolicyLink),
                        }),
                        helpCenterArticleLink: (0, a.jsx)("a", {
                          href: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-language-models-are-developed",
                          target: "_blank",
                          className: "text-gray-500 underline",
                          rel: "noreferrer",
                          children: e.formatMessage(N.helpCenterArticleLink),
                        }),
                      },
                    })
                  ),
                }),
              ],
            }),
          });
        },
        S = t(5759),
        D = t(4337),
        R = t(34303),
        A = t(66958);
      function F() {
        var e = (0, D._)(["flex gap-4 mt-6"]);
        return (
          (F = function () {
            return e;
          }),
          e
        );
      }
      function B() {
        var e = (0, D._)(["prose dark:prose-invert"]);
        return (
          (B = function () {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = (0, D._)(["mb-4"]);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      function L(e) {
        var n = e.pages,
          t = e.onSubmit,
          i = (0, r._)((0, s.useState)(0), 2),
          o = i[0],
          l = i[1];
        return (0, a.jsx)(q, {
          children: n.map(function (e, n) {
            return o === n
              ? (0, a.jsx)(e, { onChangePage: l, onSubmit: t })
              : null;
          }),
        });
      }
      function O(e) {
        var n = e.onBack,
          t = e.onNext,
          r = e.onSubmit;
        return (0, a.jsxs)(U, {
          children: [
            n &&
              (0, a.jsx)(A.z, {
                as: "button",
                color: "neutral",
                onClick: n,
                children: "Back",
              }),
            t &&
              (0, a.jsx)(A.z, {
                as: "button",
                onClick: t,
                color: "neutral",
                className: "ml-auto",
                children: "Next",
              }),
            r &&
              (0, a.jsx)(A.z, {
                as: "button",
                onClick: r,
                color: "primary",
                className: "ml-auto",
                children: "Done",
              }),
          ],
        });
      }
      var U = R.Z.div(F()),
        q = R.Z.div(B()),
        z = R.Z.h4(E()),
        Q = "oai/apps/hasSeenOnboarding",
        W = "chat",
        H = function (e) {
          var n = (0, s.useCallback)(
              function () {
                c.m.setItem(
                  "".concat(Q, "/").concat(e),
                  new Date().toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                );
              },
              [e]
            ),
            t = (0, r._)((0, s.useState)(null), 2),
            a = t[0],
            i = t[1];
          (0, s.useEffect)(
            function () {
              var n = c.m.getItem("".concat(Q, "/").concat(e));
              i(!!n && n);
            },
            [e]
          );
          var o = (0, s.useCallback)(
            function () {
              return a ? new Date(!0 === a ? "2022-12-14" : a) : a;
            },
            [a]
          );
          return (0, s.useMemo)(
            function () {
              return { setHasSeenOnboarding: n, getHasSeenOnboardingDate: o };
            },
            [o, n]
          );
        };
      function $(e) {
        var n = e.onClose,
          t = H(W).setHasSeenOnboarding,
          r = (0, s.useCallback)(
            function () {
              n(!0), t();
            },
            [n, t]
          );
        return (0, a.jsx)(L, { pages: [G, V, J], onSubmit: r });
      }
      var G = function (e) {
          var n = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(z, {
                children: (0, a.jsx)(k.Z, (0, v._)({}, Y.page0Subtitle)),
              }),
              (0, a.jsxs)(S.I, {
                children: [
                  (0, a.jsx)(S.Z, {
                    icon: "\uD83D\uDD2C",
                    children: (0, a.jsx)(k.Z, (0, v._)({}, Y.page0Disclaimer1)),
                  }),
                  (0, a.jsx)(S.Z, {
                    icon: "\uD83D\uDEA8",
                    children: (0, a.jsx)(k.Z, (0, v._)({}, Y.page0Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(O, {
                onNext: function () {
                  return n(1);
                },
              }),
            ],
          });
        },
        V = function (e) {
          var n = e.onChangePage;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(z, {
                children: (0, a.jsx)(k.Z, (0, v._)({}, Y.page1Subtitle)),
              }),
              (0, a.jsxs)(S.I, {
                children: [
                  (0, a.jsx)(S.Z, {
                    icon: "\uD83E\uDDBE",
                    children: (0, a.jsx)(k.Z, (0, v._)({}, Y.page1Disclaimer1)),
                  }),
                  (0, a.jsx)(S.Z, {
                    icon: "\uD83D\uDD10",
                    children: (0, a.jsx)(k.Z, (0, v._)({}, Y.page1Disclaimer2)),
                  }),
                ],
              }),
              (0, a.jsx)(O, {
                onBack: function () {
                  return n(0);
                },
                onNext: function () {
                  return n(2);
                },
              }),
            ],
          });
        },
        J = function (e) {
          var n = e.onChangePage,
            t = e.onSubmit,
            r = (0, s.useRef)(null);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(z, {
                children: (0, a.jsx)(k.Z, (0, v._)({}, Y.page2Subtitle)),
              }),
              (0, a.jsxs)(S.I, {
                children: [
                  (0, a.jsx)(S.Z, {
                    icon: "\uD83D\uDC4D",
                    children: (0, a.jsx)(k.Z, (0, v._)({}, Y.page2Disclaimer1)),
                  }),
                  (0, a.jsx)(S.Z, {
                    icon: "\uD83D\uDCAC",
                    children: (0, a.jsx)(
                      k.Z,
                      (0, b._)((0, v._)({}, Y.page2Disclaimer2), {
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
              (0, a.jsx)(O, {
                onBack: function () {
                  return n(1);
                },
                onSubmit: function () {
                  return null == t ? void 0 : t(r);
                },
              }),
            ],
          });
        },
        Y = (0, y.vU)({
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
        K = t(32165),
        X = "workspace";
      function ee(e) {
        var n = e.onClose,
          t = H(X).setHasSeenOnboarding,
          r = (0, s.useCallback)(
            function () {
              n(!0), t();
            },
            [n, t]
          );
        return (0, a.jsx)(L, { pages: [en, et], onSubmit: r });
      }
      var en = function (e) {
          var n = e.onChangePage,
            t = (0, K.Ix)();
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(z, {
                children: (0, a.jsx)(
                  k.Z,
                  (0, b._)((0, v._)({}, er.page0Subtitle), {
                    values: { workspaceName: t },
                  })
                ),
              }),
              (0, a.jsxs)(S.I, {
                children: [
                  (0, a.jsx)(S.Z, {
                    icon: "\uD83C\uDFE2",
                    children: (0, a.jsx)(
                      k.Z,
                      (0, v._)({}, er.page0Disclaimer1)
                    ),
                  }),
                  (0, a.jsx)(S.Z, {
                    icon: "\uD83D\uDEA8",
                    children: (0, a.jsx)(
                      k.Z,
                      (0, v._)({}, er.page0Disclaimer2)
                    ),
                  }),
                ],
              }),
              (0, a.jsx)(O, {
                onNext: function () {
                  return n(1);
                },
              }),
            ],
          });
        },
        et = function (e) {
          var n = e.onChangePage,
            t = e.onSubmit,
            r = (0, s.useRef)(null);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(z, {
                children: (0, a.jsx)(k.Z, (0, v._)({}, er.page1Subtitle)),
              }),
              (0, a.jsxs)(S.I, {
                children: [
                  (0, a.jsx)(S.Z, {
                    icon: "\uD83D\uDED1",
                    children: (0, a.jsx)(
                      k.Z,
                      (0, v._)({}, er.page1Disclaimer1)
                    ),
                  }),
                  (0, a.jsx)(S.Z, {
                    icon: "\uD83D\uDD12",
                    children: (0, a.jsx)(
                      k.Z,
                      (0, b._)((0, v._)({}, er.page1Disclaimer2), {
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
              (0, a.jsx)(O, {
                onBack: function () {
                  return n(0);
                },
                onSubmit: function () {
                  return null == t ? void 0 : t(r);
                },
              }),
            ],
          });
        },
        er = (0, y.vU)({
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
        ea = function (e) {
          var n = e.onClose;
          return (0, a.jsx)(x.Z, {
            isOpen: !0,
            onClose: g.noop,
            type: "success",
            primaryButton: void 0,
            title: "ChatGPT",
            children: (0, a.jsx)($, { onClose: n }),
          });
        },
        ei = function (e) {
          var n = e.onClose;
          return (0, a.jsx)(x.Z, {
            isOpen: !0,
            onClose: g.noop,
            type: "success",
            primaryButton: void 0,
            title: (0, a.jsxs)("span", {
              children: ["ChatGPT ", (0, a.jsx)(p.ZP, {})],
            }),
            children: (0, a.jsx)(ee, { onClose: n }),
          });
        };
      function es(e) {
        var n,
          t,
          i = e.userCountry,
          o = (0, r._)((0, s.useState)(0), 2),
          l = o[0],
          u = o[1],
          d = H(W).getHasSeenOnboardingDate,
          m = H(X).getHasSeenOnboardingDate,
          f = (0, h.ec)(h.F_.isBusinessWorkspace),
          g =
            ((n = (0, h.hz)()),
            (t = !!c.m.getItem(Z)),
            0 === n.size ? "loading" : "IT" !== i || t ? "hide" : "show"),
          p = (0, s.useMemo)(
            function () {
              return [
                {
                  Modal: T,
                  getModalState: function () {
                    return g;
                  },
                },
                {
                  Modal: ea,
                  getModalState: function () {
                    if (f) return "hide";
                    var e = d();
                    return null === e ? "loading" : !1 === e ? "show" : "hide";
                  },
                },
                {
                  Modal: ei,
                  getModalState: function () {
                    if (!f) return "hide";
                    var e = m();
                    return null === e ? "loading" : !1 === e ? "show" : "hide";
                  },
                },
              ];
            },
            [d, m, f, g]
          );
        (0, s.useEffect)(
          function () {
            p[l] &&
              "hide" === p[l].getModalState() &&
              u(
                p.findIndex(function (e) {
                  return "hide" !== e.getModalState();
                })
              );
          },
          [l, p]
        );
        var x = p[l];
        if (!x) return null;
        var v = x.getModalState();
        if ("loading" === v) return null;
        "hide" === v &&
          u(function (e) {
            return e + 1;
          });
        var b = p[l].Modal;
        return (0, a.jsx)(b, {
          onClose: function () {
            u(function (e) {
              return e + 1;
            });
          },
        });
      }
      var eo = t(37386),
        el = t(99453);
      function eu(e) {
        var n = e.urlThreadId,
          t = e.clientThreadId,
          g = e.isUserInCanPayGroup,
          p = e.serviceStatus,
          x = e.serviceAnnouncement,
          v = e.userCountry,
          b = (0, r._)(
            (0, s.useState)(function () {
              return void 0 !== n ? n : void 0 !== t ? t : (0, d.OX)();
            }),
            2
          ),
          y = b[0],
          j = b[1];
        void 0 !== n && y !== n && j(n),
          void 0 !== n || (0, d.Zz)(y) || j((0, d.OX)());
        var k = (0, h.$T)(),
          w = (0, h.WY)(),
          C = (0, h.ec)(h.F_.workspaceId),
          _ = (0, l.g)(function (e) {
            return e.updateFlagValue;
          });
        (0, s.useEffect)(
          function () {
            void 0 !== g && _("isUserInCanPayGroup", g);
          },
          [_, g]
        ),
          (0, s.useEffect)(
            function () {
              (null == p ? void 0 : p.type) &&
                !1 === w &&
                o.m.warning(p.message, { hasCloseButton: !0, duration: 5 });
            },
            [w, null == p ? void 0 : p.message, null == p ? void 0 : p.type]
          );
        var M = (0, d.GR)(y),
          N = (0, s.useRef)(!1);
        (0, s.useEffect)(
          function () {
            if (!k) {
              var e = w ? x.paid : x.public;
              if (
                (null == e ? void 0 : e.type) &&
                (null == e ? void 0 : e.message) &&
                !N.current
              ) {
                N.current = !0;
                var n = e.message,
                  t = { hasCloseButton: !0, duration: 15 };
                switch (e.type) {
                  case "danger":
                    o.m.danger(n, t);
                    break;
                  case "info":
                    o.m.info(n, t);
                    break;
                  case "warning":
                    o.m.warning(n, t);
                }
              }
            }
          },
          [x, k, w]
        );
        var P = (0, m.tN)(function (e) {
          return e.activeModals.has(m.B.TempBrowseToast);
        });
        return (0, a.jsx)(u.XA.Provider, {
          value: M,
          children: (0, a.jsxs)(u.gB.Provider, {
            value: !1,
            children: [
              (0, a.jsx)(es, { userCountry: v }, C),
              (0, a.jsx)(eo.Z, { clientThreadId: y, setClientThreadId: j }),
              (0, a.jsxs)(i.zt, {
                children: [
                  (0, a.jsxs)(i.fC, {
                    className:
                      "grid w-[390px] max-w-sm grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-lg bg-white p-[15px] shadow-xs [grid-template-areas:_'title_action'_'description_action'] radix-state-closed:animate-hide radix-state-open:animate-slideIn dark:bg-gray-950",
                    open: P,
                    children: [
                      (0, a.jsxs)(i.Dx, {
                        className:
                          "text-slate12 mb-[5px] text-[15px] font-medium [grid-area:_title]",
                        children: [
                          "We've temporarily disabled the Browse with Bing ",
                          (0, el.V)("beta"),
                          " feature",
                        ],
                      }),
                      (0, a.jsxs)(i.dk, {
                        className:
                          "text-slate11 m-0 text-[13px] leading-[1.3] [grid-area:_description]",
                        children: [
                          "Read the",
                          " ",
                          (0, a.jsx)("a", {
                            href: "https://help.openai.com/articles/8077698-how-do-i-use-chatgpt-browse-with-bing-to-search-the-web",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "cursor-pointer underline",
                            children: "Help Center article",
                          }),
                          ".",
                        ],
                      }),
                      (0, a.jsx)(i.aU, {
                        altText: "Dismiss notification",
                        asChild: !0,
                        children: (0, a.jsx)(A.z, {
                          color: "neutral",
                          size: "small",
                          onClick: function () {
                            m.vm.closeModal(m.B.TempBrowseToast),
                              c.m.setItem(f.DN, "true");
                          },
                          children: "Dismiss",
                        }),
                      }),
                      (0, a.jsx)(i.x8, {}),
                    ],
                  }),
                  (0, a.jsx)(i.l_, {
                    className:
                      "z-100 fixed bottom-0 right-0 m-0 flex  max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    37386: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return iU;
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
        g = t(39324),
        p = t(70216),
        x = t(22830),
        v = t(35250),
        b = t(35448),
        y = t(68555),
        j = t(70079),
        k = t(1454),
        w = t(35290),
        C = t(3001),
        _ = t(75527),
        M = t(81292),
        N = t(58392),
        P = (0, M.ZP)(
          (0, N.n)(function () {
            return { aborters: {} };
          })
        ),
        Z = P.setState,
        T = {
          addAborter: function (e, n) {
            Z(function (t) {
              null != t.aborters[e] &&
                console.warn(
                  "Setting aborter for id ".concat(e, " but it already exists")
                ),
                (t.aborters[e] = n);
            });
          },
          abortAndRemoveById: function (e) {
            Z(function (n) {
              var t = n.aborters[e];
              null != t && (t.abort(), delete n.aborters[e]);
            });
          },
          removeAborterById: function (e) {
            Z(function (n) {
              delete n.aborters[e];
            });
          },
          reset: function () {
            Z(function () {
              return { aborters: {} };
            });
          },
          abortAllAndReset: function () {
            Z(function (e) {
              Object.keys(e.aborters).forEach(function (n) {
                e.aborters[n].abort(), delete e.aborters[n];
              });
            });
          },
        },
        I = t(32689),
        S = t(59110),
        D = t(32983),
        R = t(77442);
      function A(e, n, t) {
        var r = (0, _.XL)(e),
          a = r.title,
          i = r.titleSource,
          s = (0, x._)((0, j.useState)(!1), 2),
          o = s[0],
          l = s[1],
          u = null != a ? a : n,
          c = (0, j.useRef)(u);
        return (
          (0, j.useEffect)(
            function () {
              return (
                t && i === _._L.Generated && u !== c.current && l(!0),
                function () {
                  c.current = u;
                }
              );
            },
            [t, u, i]
          ),
          { isTypingEffect: o, resolvedTitle: u }
        );
      }
      var F = t(51217),
        B = t(86526);
      function E(e) {
        var n = e.text,
          t = (0, B.Z)(),
          r = (0, x._)((0, j.useState)(!0), 2),
          a = r[0],
          i = r[1],
          s = (0, x._)((0, j.useState)(0), 2),
          o = s[0],
          l = s[1],
          u = (0, j.useMemo)(
            function () {
              return new L().humanTypingDelaysQuertyDistance(n);
            },
            [n]
          );
        return (
          (0, j.useEffect)(
            function () {
              n &&
                a &&
                (i(!0),
                u.forEach(function (e, n) {
                  setTimeout(function () {
                    t() && (l(n), n === u.length - 1 && i(!1));
                  }, e);
                }));
            },
            [u, t, a, n]
          ),
          (0, v.jsxs)(v.Fragment, {
            children: [n.substring(0, o + 1), a && "▋"],
          })
        );
      }
      var L = (function () {
          function e() {
            (0, F._)(this, e);
          }
          var n = e.prototype;
          return (
            (n.qwertyDistance = function (e, n) {
              var t,
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
                i = (0, x._)(
                  null !== (t = a[e.toLowerCase()]) && void 0 !== t
                    ? t
                    : [0, 0],
                  2
                ),
                s = i[0],
                o = i[1],
                l = (0, x._)(
                  null !== (r = a[n.toLowerCase()]) && void 0 !== r
                    ? r
                    : [0, 0],
                  2
                );
              return Math.abs(s - l[0]) + Math.abs(o - l[1]);
            }),
            (n.humanTypingDelaysQuertyDistance = function (e) {
              for (
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10,
                  t =
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
                      ? this.getRandomInt(n, Math.floor(t / 2))
                      : 1 === o
                      ? this.getRandomInt(n, Math.floor((2 * t) / 3))
                      : this.getRandomInt(n, t);
                } else s = this.getRandomInt(n, t);
                a.push(s + r), (r += s);
              }
              return a;
            }),
            (n.getRandomInt = function (e, n) {
              return Math.floor(Math.random() * (n - e + 1)) + e;
            }),
            e
          );
        })(),
        O = t(4337),
        U = t(19841),
        q = t(72201),
        z = t(26430),
        Q = t(84913),
        W = t(44043),
        H = t(82187),
        $ = t(69262),
        G = t(75861),
        V = t(70575),
        J = t(91530),
        Y = t.n(J),
        K = t(75908),
        X = t(34303),
        ee = t(82841),
        en = t(36218),
        et = t(24274),
        er = t(88038),
        ea = t(19051),
        ei = t(66958),
        es = t(38317),
        eo = t(56060),
        el = t(85023),
        eu = t(21722),
        ec = t(71209),
        ed = t(39889),
        em = t(63020),
        ef = t(13002),
        eh = t(32787),
        eg = t(97703),
        ep = (0, j.createContext)(),
        ex = function (e) {
          return (0, M.oR)((0, j.useContext)(ep), e);
        },
        ev = t(59710),
        eb = t(24396),
        ey = t(25094),
        ej = j.memo(function (e) {
          var n,
            t = e.message,
            r = e.isCollapsed,
            a =
              null === (n = t.message.metadata) || void 0 === n
                ? void 0
                : n.aggregate_result;
          if (!a)
            return console.error("Corrupt code execution result message"), null;
          var i = a.messages.filter(eN),
            s = r && i.length > 0,
            o = r && null != a.final_expression_output,
            l = r && null != a.in_kernel_exception,
            u = !r && a.messages.filter(e_).length > 0;
          return (0, v.jsxs)(v.Fragment, {
            children: [
              s &&
                (0, v.jsx)(ek, {
                  label: "STDOUT/STDERR",
                  output: i.map(function (e, n) {
                    return (0,
                    v.jsx)("span", { className: "stderr" === e.stream_name ? "text-red-500" : "", children: e.text }, "".concat(n));
                  }),
                }),
              o &&
                (0, v.jsx)(ek, {
                  label: "RESULT",
                  output: a.final_expression_output,
                }),
              l &&
                (0, v.jsx)("div", {
                  className:
                    "overflow-auto rounded border-t border-gray-500 bg-black text-white",
                  children: (0, v.jsx)("div", {
                    className: "border-l-4 border-red-500 p-2 text-xs",
                    children: (0, v.jsx)("div", {
                      className:
                        "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",
                      children: (0, v.jsx)("pre", {
                        className: "shrink-0",
                        children: a.in_kernel_exception.traceback.join(""),
                      }),
                    }),
                  }),
                }),
              u &&
                a.messages.filter(e_).map(function (e, n) {
                  return (0,
                  v.jsx)("div", { className: "empty:hidden", children: (0, v.jsx)(eM, { jupyterMessage: e }) }, n);
                }),
            ],
          });
        });
      function ek(e) {
        var n = e.label,
          t = e.output;
        return (0, v.jsxs)("div", {
          className: "rounded-md bg-black p-4 text-xs",
          children: [
            (0, v.jsx)("div", { className: "mb-1 text-gray-400", children: n }),
            (0, v.jsx)("div", {
              className:
                "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 prose flex max-h-64 flex-col-reverse overflow-auto text-white",
              children: (0, v.jsx)("pre", {
                className: "shrink-0",
                children: t,
              }),
            }),
          ],
        });
      }
      var ew = Math.log(151) / Math.log(1.5);
      function eC(e) {
        var n = e.fileId,
          t = (0, x._)((0, j.useState)(""), 2),
          r = t[0],
          a = t[1];
        return (
          (0, eb.a)({
            queryKey: ["getFileDownloadLink", n],
            queryFn: function () {
              return et.ZP.getFileDownloadLink(n).then(function (e) {
                return (
                  (null == e ? void 0 : e.status) === "success" &&
                    a(e.download_url),
                  e
                );
              });
            },
            refetchInterval: function (e, n) {
              var t = n.state.dataUpdateCount;
              return (
                (null == e ? void 0 : e.status) !== "success" &&
                !(t > ew) &&
                "error" !== n.state.status &&
                100 * Math.pow(1.5, t)
              );
            },
          }),
          (0, v.jsxs)(v.Fragment, {
            children: [" ", r && (0, v.jsx)("img", { src: r }), " "],
          })
        );
      }
      function e_(e) {
        return (
          "image" === e.message_type ||
          ("image_url" in e && (0, ey.$H)(e.image_url + ""))
        );
      }
      function eM(e) {
        var n = e.jupyterMessage;
        if ((0, j.useContext)(D.gB))
          return (0, v.jsxs)("div", {
            className:
              "flex h-52 w-full max-w-xs flex-col items-center justify-center gap-2 rounded-md border-black/5 bg-gray-100 p-7 text-center text-gray-500 dark:border-white/10",
            children: [
              (0, v.jsx)(es.ZP, { icon: k.LFN, size: "medium" }),
              (0, v.jsx)(w.Z, (0, g._)({}, eP.imageNotSupported)),
            ],
          });
        if (null != n.image_payload)
          return (0, v.jsx)("img", {
            src: "data:image/png;base64,".concat(n.image_payload),
          });
        if (null != n.image_url) {
          var t = (0, ey.Iy)(n.image_url);
          return (0, v.jsx)(eC, { fileId: t });
        }
        return null;
      }
      function eN(e) {
        return "stream" === e.message_type;
      }
      var eP = (0, C.vU)({
        imageNotSupported: {
          id: "CodeExecutionOutputMessage.imageNotSupported",
          defaultMessage: "Image output is not supported in a shared chat",
          description:
            "Message shown when an image is output in a shared thread",
        },
      });
      function eZ(e) {
        return e.some(function (e) {
          return e.messages.some(function (e) {
            var n, t, r, a;
            return (
              (null ==
              (r =
                null === (n = e.message.metadata) || void 0 === n
                  ? void 0
                  : n.aggregate_result)
                ? void 0
                : null === (t = r.messages) || void 0 === t
                ? void 0
                : t.some(e_)) ||
              ("parts" in (a = e.message.content)
                ? a.parts.join("")
                : ""
              ).includes("sandbox:")
            );
          });
        });
      }
      var eT = t(59114),
        eI = t(48727),
        eS = t(19265),
        eD = t(81949),
        eR = t(49218),
        eA = t(21437),
        eF = t(78251),
        eB = t(54655),
        eE = t(75955),
        eL = t(69403),
        eO = t(56244),
        eU = t(57311),
        eq = t(46110),
        ez = t(13282),
        eQ = t(47635),
        eW = t(36716);
      function eH() {
        var e = (0, O._)(["flex flex-col items-start"]);
        return (
          (eH = function () {
            return e;
          }),
          e
        );
      }
      function e$() {
        var e = (0, O._)([
          "flex items-center text-xs bg-green-100 rounded p-3 text-gray-900 ",
          "",
        ]);
        return (
          (e$ = function () {
            return e;
          }),
          e
        );
      }
      function eG() {
        var e = (0, O._)([
          "max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800",
        ]);
        return (
          (eG = function () {
            return e;
          }),
          e
        );
      }
      var eV = j.memo(function (e) {
          var n = e.children,
            t = e.isComplete,
            r = e.expanderClosedLabel,
            a = e.expanderOpenLabel,
            i = e.resultsPreview,
            s = e.results,
            o = e.initialExpanded,
            l = e.onExpand,
            u = (0, x._)((0, j.useState)(void 0 !== o && o), 2),
            c = u[0],
            d = u[1],
            m = (0, j.useCallback)(
              function () {
                d(function (e) {
                  return !e;
                }),
                  null == l || l();
              },
              [l]
            );
          return (0,
          v.jsxs)(eJ, { children: [(0, v.jsxs)(eY, { $complete: t, children: [(0, v.jsx)("div", { children: n }), !t && (0, v.jsx)(eS.Z, { className: (0, U.Z)("shrink-0", null != s ? "ml-1" : "ml-12") }), null != s && (0, v.jsxs)("div", { className: "ml-12 flex items-center gap-2", role: "button", onClick: m, children: [null != a && null != r && (0, v.jsx)("div", { className: "text-xs text-gray-600", children: c ? a : r }), !c && i, (0, v.jsx)(es.ZP, { icon: c ? k.rH8 : k.bTu })] })] }), c && s] });
        }),
        eJ = X.Z.div(eH()),
        eY = X.Z.div(e$(), function (e) {
          return e.$complete && "bg-gray-100";
        }),
        eK = X.Z.div(eG()),
        eX = (0, C.vU)({
          startingBrowsing: {
            id: "browsingMessage.startingBrowsing",
            defaultMessage: "Browsing the web...",
            description: "Status message when browsing is starting",
          },
          startingFileSearch: {
            id: "browsingMessage.startingFileSearch",
            defaultMessage: "Searching files...",
            description: "Status message when searching files is starting",
          },
          finishedBrowsing: {
            id: "browsingMessage.finishedBrowsing",
            defaultMessage: "Finished browsing",
            description: "Status message when browsing is finished",
          },
          finishedFileSearch: {
            id: "browsingMessage.finishedFileSearch",
            defaultMessage: "Finished searching files",
            description: "Status message when searching files is finished",
          },
          thinking: {
            id: "browsingMessage.thinking",
            defaultMessage: "Thinking...",
            description:
              "Status message when the next browsing command is being generated",
          },
          searchInProgressWeb: {
            id: "browsingMessage.command.search.inProgress.web",
            defaultMessage:
              "Searching Bing: <bold>“<link>{searchQuery}</link>”</bold>",
            description: "Browsing command to search Bing is in progress",
          },
          searchInProgressFiles: {
            id: "browsingMessage.command.search.inProgress.files",
            defaultMessage: "Searching files: <bold>“{searchQuery}”</bold>",
            description: "Browsing command to search files is in progress",
          },
          searchFinishedWeb: {
            id: "browsingMessage.command.search.finished.web",
            defaultMessage:
              "Searched Bing: <bold>“<link>{searchQuery}</link>”</bold>",
            description: "Browsing command to search Bing finished",
          },
          searchFinishedFiles: {
            id: "browsingMessage.command.search.finished.files",
            defaultMessage: "Searched files: <bold>“{searchQuery}”</bold>",
            description: "Browsing command to search files finished",
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
          openFileInProgress: {
            id: "browsingMessage.command.openFile.inProgress",
            defaultMessage: "Opening a file...",
            description: "Browsing command to click on a link is in progress",
          },
          clickFinished: {
            id: "browsingMessage.command.click.finished",
            defaultMessage: "Clicked on a link",
            description: "Browsing command to click on a link finished",
          },
          openFileFinished: {
            id: "browsingMessage.command.openFile.finished",
            defaultMessage: "Opened a file",
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
          openFileError: {
            id: "browsingMessage.command.openFile.error",
            defaultMessage: "Opening file failed",
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
        e0 = j.memo(function (e) {
          var n,
            t = e.messages,
            r = e.isComplete,
            a = e.isPlugin,
            i = (0, S.hz)(),
            s = t.map(function (e) {
              return e.message;
            }),
            o = s
              .map(function (e, n) {
                if (
                  e.author.role !== eL.uU.Tool ||
                  (n > 0 && nn(e) && nn(s[n - 1]))
                )
                  return null;
                if ("browser_one_box" === e.author.name)
                  return {
                    type: "search",
                    didError: "system_error" === e.content.content_type,
                    message: e,
                  };
                var t,
                  r,
                  i,
                  o,
                  l = e.metadata;
                return l
                  ? (a
                      ? (t =
                          null === (i = l.invoked_plugin) || void 0 === i
                            ? void 0
                            : null === (o = i.parsed_function_call) ||
                              void 0 === o
                            ? void 0
                            : o.name)
                      : ((t = l.command), (r = l.status)),
                    null == t)
                    ? null
                    : {
                        type: t,
                        status: r,
                        didError: "system_error" === e.content.content_type,
                        message: e,
                      }
                  : null;
              })
              .filter(Boolean),
            l = o.map(function (e, n) {
              return (0, v.jsx)(e1, { command: e, isPlugin: a }, n);
            });
          r
            ? (l.push((0, v.jsx)(e9, { isPlugin: a }, "finished")),
              (n = (0, v.jsx)(e9, { isPlugin: a, compact: !0 })))
            : 0 === l.length
            ? (l.push((0, v.jsx)(e6, { isPlugin: a }, "waiting")),
              (n = (0, v.jsx)(e6, { isPlugin: a, compact: !0 })))
            : "finished" === o[o.length - 1].status &&
              l.push(
                (0, v.jsx)(
                  ne,
                  {
                    icon: k.Wqx,
                    children: (0, v.jsx)(w.Z, (0, g._)({}, eX.thinking)),
                  },
                  "thinking"
                )
              ),
            n ||
              (n = (0, v.jsx)(e1, {
                command: o[o.length - 1],
                isPlugin: a,
                compact: !0,
              }));
          var u =
            i.has(er.UG) && !r
              ? (function (e) {
                  var n,
                    t = e.reverse().find(function (e) {
                      return e.author.role === eL.uU.Assistant;
                    });
                  if (!t) return null;
                  for (
                    var r = (0, eO.RR)(t), a = /^#\s*(.*)/gm, i = [];
                    null !== (n = a.exec(r));

                  )
                    i.push(n[1]);
                  return i.length > 0 ? i.join("\n") : null;
                })(s)
              : null;
          return (0,
          v.jsxs)(eV, { isComplete: r, results: (0, v.jsx)(eK, { className: "text-xs", children: l }), children: [null != u && (0, v.jsx)("div", { className: "mb-2 whitespace-pre-wrap font-medium", children: u }), n] });
        });
      function e1(e) {
        var n = e.command,
          t = e.isPlugin,
          r = e.compact;
        if (n.didError) return (0, v.jsx)(e8, { commandType: n.type });
        switch (n.type) {
          case "search":
            if (
              null ==
              (a = t
                ? null === (i = n.message.metadata) || void 0 === i
                  ? void 0
                  : null === (s = i.invoked_plugin) || void 0 === s
                  ? void 0
                  : null === (o = s.parsed_function_call) || void 0 === o
                  ? void 0
                  : null === (l = o.kwargs) || void 0 === l
                  ? void 0
                  : l.query
                : "browser_one_box" === n.message.author.name
                ? null === (u = n.message.metadata) || void 0 === u
                  ? void 0
                  : null === (c = u._cite_metadata) || void 0 === c
                  ? void 0
                  : c.original_query
                : null === (d = n.message.metadata) || void 0 === d
                ? void 0
                : null === (m = d.args) || void 0 === m
                ? void 0
                : m[0])
            )
              return null;
            return (0, v.jsx)(e2, {
              searchQuery: a,
              isComplete: "finished" === n.status,
              isPlugin: t,
              compact: r,
            });
          case "click":
          case "open_url":
            var a,
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
              g =
                null === (f = n.message.metadata) || void 0 === f
                  ? void 0
                  : null === (h = f._cite_metadata) || void 0 === h
                  ? void 0
                  : h.metadata_list[0];
            return (0, v.jsx)(e3, { isPlugin: t, pageInfo: g, compact: r });
          case "quote":
          case "quote_full":
            return (0, v.jsx)(e5, { compact: r });
          case "back":
            return (0, v.jsx)(e4, { compact: r });
          case "scroll":
            return (0, v.jsx)(e7, { compact: r });
          default:
            return null;
        }
      }
      function e2(e) {
        var n = e.searchQuery,
          t = e.isComplete,
          r = e.isPlugin,
          a = e.compact,
          i = function (e) {
            var t = et.ZP.getBingLink({ query: n });
            return (0, v.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noreferrer",
              className: "text-green-600",
              children: e,
            });
          },
          s = r ? eX.searchInProgressFiles : eX.searchInProgressWeb,
          o = r ? eX.searchFinishedFiles : eX.searchFinishedWeb;
        return (0, v.jsx)(ne, {
          icon: k.jRj,
          compact: a,
          children: t
            ? (0, v.jsx)(
                w.Z,
                (0, ec._)((0, g._)({}, o), {
                  values: {
                    bold: function (e) {
                      return (0, v.jsx)("span", {
                        className: "font-medium",
                        children: e,
                      });
                    },
                    link: i,
                    searchQuery: n,
                  },
                })
              )
            : (0, v.jsx)(
                w.Z,
                (0, ec._)((0, g._)({}, s), {
                  values: {
                    bold: function (e) {
                      return (0, v.jsx)("span", {
                        className: "font-medium",
                        children: e,
                      });
                    },
                    link: i,
                    searchQuery: n,
                  },
                })
              ),
        });
      }
      function e3(e) {
        var n,
          t = e.isPlugin,
          r = e.pageInfo,
          a = e.compact,
          i = t ? eX.openFileInProgress : eX.clickInProgress,
          s = t ? eX.openFileFinished : eX.clickFinished;
        return (0, v.jsx)(ne, {
          icon: k.PS6,
          compact: a,
          children: r
            ? !0 === a || t
              ? (0, v.jsx)(w.Z, (0, g._)({}, s))
              : (0, v.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, v.jsx)(w.Z, (0, g._)({}, eX.clickFinishedWithLink)),
                    (0, v.jsx)("div", {
                      className:
                        "rounded border border-black/10 bg-white px-2 py-1",
                      children: (0, v.jsx)(eW.Op, {
                        pageInfo: r,
                        onClick: function () {
                          return eE.m.logEvent(
                            "chatgpt_browsing_click_link",
                            r.url,
                            {
                              domain:
                                null !==
                                  (n = eQ.get(new URL(r.url).hostname)) &&
                                void 0 !== n
                                  ? n
                                  : "",
                            }
                          );
                        },
                      }),
                    }),
                  ],
                })
            : (0, v.jsx)(w.Z, (0, g._)({}, i)),
        });
      }
      function e5(e) {
        var n = e.compact;
        return (0, v.jsx)(ne, {
          icon: k.SnF,
          compact: n,
          children: (0, v.jsx)(w.Z, (0, g._)({}, eX.quote)),
        });
      }
      function e4(e) {
        var n = e.compact;
        return (0, v.jsx)(ne, {
          icon: k.cww,
          compact: n,
          children: (0, v.jsx)(w.Z, (0, g._)({}, eX.back)),
        });
      }
      function e7(e) {
        var n = e.compact;
        return (0, v.jsx)(ne, {
          icon: k.nlg,
          compact: n,
          children: (0, v.jsx)(w.Z, (0, g._)({}, eX.scroll)),
        });
      }
      function e8(e) {
        var n,
          t = e.commandType,
          r = e.compact;
        switch (t) {
          case "search":
            n = eX.searchError;
            break;
          case "click":
          case "open_url":
            n = eX.clickError;
            break;
          case "quote":
          case "quote_full":
            n = eX.quoteError;
            break;
          case "back":
            n = eX.backError;
            break;
          case "scroll":
            n = eX.scrollError;
            break;
          default:
            return null;
        }
        return (0, v.jsx)(ne, {
          icon: k.bcx,
          compact: r,
          children: (0, v.jsx)(w.Z, (0, g._)({}, n)),
        });
      }
      function e6(e) {
        var n = e.isPlugin,
          t = e.compact,
          r = n ? eX.startingFileSearch : eX.startingBrowsing;
        return (0, v.jsx)(ne, {
          icon: k.jRj,
          compact: t,
          children: (0, v.jsx)(w.Z, (0, g._)({}, r)),
        });
      }
      function e9(e) {
        var n = e.isPlugin,
          t = e.compact,
          r = n ? eX.finishedFileSearch : eX.finishedBrowsing;
        return (0, v.jsx)(ne, {
          icon: k._rq,
          compact: t,
          children: (0, v.jsx)(w.Z, (0, g._)({}, r)),
        });
      }
      function ne(e) {
        var n = e.children,
          t = e.icon,
          r = e.compact;
        return (0, v.jsxs)("div", {
          className: (0, U.Z)(
            "flex items-center gap-2",
            !0 !== r && "min-h-[24px]"
          ),
          children: [
            (0, v.jsx)(es.ZP, { icon: t, className: "shrink-0" }),
            (0, v.jsx)("div", { children: n }),
          ],
        });
      }
      function nn(e) {
        var n, t;
        return (
          (null === (n = e.metadata) || void 0 === n ? void 0 : n.command) ===
            "quote" ||
          (null === (t = e.metadata) || void 0 === t ? void 0 : t.command) ===
            "quote_full"
        );
      }
      var nt = t(86546),
        nr = t(87105),
        na = {},
        ni = {};
      function ns(e) {
        var n = e.message,
          t = e.outputMessage,
          r = e.clientThreadId,
          a = e.isComplete,
          i = (0, nt.F)().theme,
          s = (0, ee.WS)();
        (0, j.useEffect)(
          function () {
            na[n.message.id] ||
              (s(en.s6.renderTool2Message, {
                id: n.message.id,
                finishedExecuting: a,
              }),
              (na[n.message.id] = !0));
          },
          [s, n, a]
        );
        var o = (0, j.useCallback)(
            function () {
              ni[n.message.id] ||
                (s(en.s6.expandTool2Message, {
                  id: n.message.id,
                  finishedExecuting: a,
                }),
                (ni[n.message.id] = !0));
            },
            [s, n, a]
          ),
          l = (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsx)("div", {
                className: "mt-3 self-stretch",
                children: (0, v.jsx)(nr.Z, {
                  clientThreadId: r,
                  messageId: n.message.id,
                  className: (0, U.Z)(
                    "markdown prose w-full break-words dark:prose-invert",
                    "dark" === i ? "dark" : "light"
                  ),
                  children: (function (e) {
                    var n = function (e, n) {
                      return "```".concat(n, "\n").concat(e, "\n```");
                    };
                    if ("code" === e.message.content.content_type)
                      return n(e.message.content.text, "python");
                    if ("python" === e.message.recipient) {
                      if ("text" !== e.message.content.content_type)
                        throw Error("Unexpected content type for code message");
                      var t = e.message.content.parts;
                      if (1 !== t.length || "string" != typeof t[0])
                        throw Error("Unexpected parts for code message");
                      return n(t[0], "python");
                    }
                    throw Error("Unexpected code message format");
                  })(n),
                }),
              }),
              t &&
                (0, v.jsx)("div", {
                  className: "self-stretch",
                  children: (0, v.jsx)(ej, { message: t, isCollapsed: !0 }),
                }),
            ],
          });
        return (0, v.jsx)(eV, {
          expanderClosedLabel: "Show work",
          expanderOpenLabel: "Hide work",
          isComplete: a,
          results: l,
          onExpand: o,
          children: a ? "Finished working" : "Working...",
        });
      }
      var no = t(63390);
      function nl(e) {
        var n = e.messages,
          t = e.clientThreadId,
          r = e.isCompletionInProgress,
          a = e.isCompletion,
          i = e.onRequestMoreCompletions,
          s = (0, j.useMemo)(
            function () {
              return [
                n.reduce(function (e, n) {
                  return null == n.err ? e + (0, eO.RR)(n.message) : e;
                }, ""),
              ];
            },
            [n]
          );
        return (0, v.jsx)(no.Cf, {
          clientThreadId: t,
          parts: s,
          format: !0,
          isCompletion: a,
          isCompletionInProgress: r,
          id: "",
          onRequestMoreCompletions: i,
        });
      }
      var nu = t(2368),
        nc = t(86573);
      function nd(e) {
        return (0, eO.qi)(e) && !(0, eO.oH)(e);
      }
      function nm() {
        var e = (0, O._)(["grid gap-4\n", ""]);
        return (
          (nm = function () {
            return e;
          }),
          e
        );
      }
      var nf = (0, C.vU)({
        generatedImage: {
          id: "pluginDisplayParams.generatedImage",
          defaultMessage: "Generated by plugin",
          description:
            "Description text for an image that was generated by a plugin",
        },
      });
      function nh(e) {
        var n,
          t,
          r,
          a = e.plugin,
          i = e.pluginMessage,
          s = e.toolMessage;
        if ("plugin-bd1fbb6d-40f9-4159-8da9-7a8975c5793b" !== a.id) return null;
        var o = !1,
          l = u.WIDE;
        if ("text" === i.content.content_type)
          try {
            var c = (function (e) {
                var n = !0,
                  t = !1,
                  r = void 0;
                try {
                  for (
                    var a, i = ["", "}", '"}', "]}", '"]}'][Symbol.iterator]();
                    !(n = (a = i.next()).done);
                    n = !0
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
                  (t = !0), (r = e);
                } finally {
                  try {
                    n || null == i.return || i.return();
                  } finally {
                    if (t) throw r;
                  }
                }
                return { result: JSON.parse(e), isComplete: !1 };
              })(i.content.parts[0]),
              d = c.result,
              m = c.isComplete;
            (n = d),
              (o = m),
              (null == n ? void 0 : n.image_shape) != null &&
                (l = n.image_shape);
          } catch (e) {}
        var f = !1;
        if (null != s) {
          if ("text" === s.content.content_type) {
            try {
              t = JSON.parse(s.content.parts[0]);
            } catch (e) {}
            if ((null == t ? void 0 : t.images) != null)
              return (0, v.jsx)(np, { imageUrls: t.images, gridItemShape: l });
          }
          f = !0;
        }
        return (null == n ? void 0 : n.prompts) != null
          ? (0, v.jsx)(ng, {
              numItems:
                null !== (r = null == n ? void 0 : n.n) && void 0 !== r
                  ? r
                  : Math.max(n.prompts.length, 1),
              prompts: n.prompts,
              gridItemShape: l,
              isPromptListComplete: null != o && o,
              showErrorState: f || nd(i),
            })
          : null;
      }
      function ng(e) {
        for (
          var n = e.numItems,
            t = e.prompts,
            r = e.gridItemShape,
            a = e.isPromptListComplete,
            i = e.showErrorState,
            s = [],
            o = 0;
          o < n;
          o++
        ) {
          var l = t[o],
            u = o < t.length - 1 || a || i;
          s.push(
            (0, v.jsx)(
              nx,
              {
                className: (0, U.Z)("text-sm", i && "text-gray-500"),
                shape: r,
                bgColor: i ? "medium" : null == l ? "dark" : "light",
                children: (0, v.jsx)(eR.default, {
                  className: "hide-scrollbar h-full",
                  followButtonClassName: "hidden",
                  children: (0, v.jsxs)("div", {
                    className:
                      "flex min-h-full flex-col justify-between gap-3 px-4 pb-5",
                    children: [
                      null != l &&
                        (0, v.jsx)("div", {
                          className: (0, U.Z)("pt-4", !u && "result-streaming"),
                          children: (0, v.jsx)("span", { children: l }),
                        }),
                      u &&
                        !i &&
                        (0, v.jsx)(eS.Z, { className: "h-4 w-4 self-center" }),
                      i &&
                        (0, v.jsx)(es.ZP, {
                          icon: k.bcx,
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
        return (0, v.jsx)(nb, { $numItems: n, children: s });
      }
      function np(e) {
        var n = e.imageUrls,
          t = e.gridItemShape,
          r = n.map(function (e, n) {
            return (0, v.jsx)(nv, { imageUrl: e, shape: t }, n);
          });
        return (0, v.jsx)(nb, { $numItems: r.length, children: r });
      }
      function nx(e) {
        var n = e.children,
          t = e.shape,
          r = e.className,
          a = e.bgColor,
          i = void 0 === a ? "light" : a;
        return (0, v.jsxs)("div", {
          className: (0, U.Z)(
            "relative overflow-hidden rounded",
            r,
            t === u.WIDE && "aspect-[7/4]",
            t === u.SQUARE && "aspect-square max-w-[400px]",
            t === u.TALL && "aspect-[4/7] max-w-xs"
          ),
          children: [
            (0, v.jsx)("div", {
              className: (0, U.Z)(
                "pointer-events-none absolute inset-0 blur-xl",
                "light" === i && "bg-black/[.04]",
                "medium" === i && "bg-black/[.08]",
                "dark" === i && "bg-black/[.12]"
              ),
            }),
            n,
          ],
        });
      }
      function nv(e) {
        var n = e.imageUrl,
          t = e.shape,
          r = (0, K.Z)();
        return (0, v.jsx)(nx, {
          shape: t,
          children: (0, v.jsx)("a", {
            href: n,
            target: "_blank",
            rel: "noreferrer",
            children: (0, v.jsx)("img", {
              src: n,
              alt: r.formatMessage(nf.generatedImage),
            }),
          }),
        });
      }
      ((r = u || (u = {})).WIDE = "wide"),
        (r.SQUARE = "square"),
        (r.TALL = "tall");
      var nb = X.Z.div(nm(), function (e) {
        return 1 === e.$numItems ? "grid-cols-1" : "grid-cols-2";
      });
      function ny() {
        var e = (0, O._)([
          "flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800",
        ]);
        return (
          (ny = function () {
            return e;
          }),
          e
        );
      }
      function nj() {
        var e = (0, O._)([
          "flex items-center gap-1 rounded-[5px] bg-red-200 py-0.5 px-1.5 text-xs font-medium uppercase text-red-800",
        ]);
        return (
          (nj = function () {
            return e;
          }),
          e
        );
      }
      var nk = X.Z.div(ny());
      function nw() {
        return (0, v.jsx)(nk, {
          children: (0, v.jsx)(es.ZP, {
            icon: k.OH,
            className: "h-3 w-3",
            strokeWidth: 2.5,
          }),
        });
      }
      function nC() {
        return (0, v.jsx)(nk, {
          children: (0, v.jsx)(es.ZP, { icon: k.V7f, className: "h-3 w-3" }),
        });
      }
      var n_ = X.Z.div(nj());
      function nM() {
        return (0, v.jsxs)(n_, {
          children: [
            (0, v.jsx)(es.ZP, {
              icon: k.OH,
              className: "h-3 w-3",
              strokeWidth: 2.5,
            }),
            (0, v.jsx)("div", { children: "Unverified" }),
          ],
        });
      }
      function nN() {
        return (0, v.jsxs)(n_, {
          children: [
            (0, v.jsx)(es.ZP, { icon: k.V7f, className: "h-3 w-3" }),
            (0, v.jsx)("div", { children: "Localhost" }),
          ],
        });
      }
      var nP = t(31721),
        nZ = t(57924),
        nT = j.memo(function (e) {
          var n,
            t = e.messages,
            r = (0, x._)(t, 2),
            a = r[0],
            i = r[1],
            s = (0, nP.v)(),
            o = (0, eO.fj)(a.message.recipient),
            l = s.find(function (e) {
              return e.namespace === (null == o ? void 0 : o.pluginNamespace);
            }),
            u = null == l ? void 0 : l.manifest.name_for_human,
            c = nd(a.message),
            d = null != u ? (0, v.jsx)("b", { children: u }) : "unknown plugin",
            m =
              null != i
                ? (0, v.jsxs)("div", { children: ["Used ", d] })
                : c
                ? (0, v.jsxs)("div", { children: ["Tried to use ", d] })
                : (0, v.jsxs)("div", { children: ["Using ", d, "..."] });
          return (
            l &&
              ((0, nc.cf)(l)
                ? (n = (0, v.jsx)(nN, {}))
                : "approved" !== l.status && (n = (0, v.jsx)(nM, {}))),
            (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsx)(eV, {
                  isComplete: null != i || c,
                  results: (0, v.jsx)(nI, {
                    pluginName: null != u ? u : "unknown plugin",
                    pluginMessage: a,
                    toolMessage: i,
                  }),
                  children: (0, v.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [m, n],
                  }),
                }),
                null != l &&
                  (0, v.jsx)(nh, {
                    plugin: l,
                    pluginMessage: a.message,
                    toolMessage: null == i ? void 0 : i.message,
                  }),
              ],
            })
          );
        });
      function nI(e) {
        var n = e.pluginName,
          t = e.pluginMessage,
          r = e.toolMessage,
          a = (0, eO.RR)(t.message),
          i = r ? (0, eO.RR)(r.message) : null;
        try {
          (a = JSON.stringify(JSON.parse(a), null, 2)),
            null != i && (i = JSON.stringify(JSON.parse(i), null, 2));
        } catch (e) {}
        var s =
          (null == r ? void 0 : r.message.author.name) === "plugin_service";
        return (0, v.jsxs)("div", {
          className: "my-3 flex max-w-full flex-col gap-3",
          children: [
            (0, v.jsx)(nS, {
              title: "Request to ".concat(n),
              infoTooltip: t.message.recipient,
              children: a,
            }),
            null != i &&
              (0, v.jsx)(nS, {
                title: s ? "Error" : "Response from ".concat(n),
                infoTooltip: t.message.recipient,
                children: (0, v.jsx)("span", {
                  className: (0, U.Z)(s && "text-red-500"),
                  children: i,
                }),
              }),
          ],
        });
      }
      function nS(e) {
        var n = e.title,
          t = e.infoTooltip,
          r = e.children;
        return (0, v.jsx)(nu.$, {
          title: (0, v.jsx)("span", { className: "uppercase", children: n }),
          headerDecoration:
            void 0 !== t
              ? (0, v.jsx)(nZ.u, {
                  label: t,
                  children: (0, v.jsx)(es.ZP, {
                    icon: k.H33,
                    className: "text-white/50",
                  }),
                })
              : void 0,
          shouldWrapCode: !0,
          className: "w-full text-xs text-white/80",
          children: r,
        });
      }
      var nD = t(85449),
        nR = t(90076);
      function nA() {
        var e = (0, O._)([""]);
        return (
          (nA = function () {
            return e;
          }),
          e
        );
      }
      function nF() {
        var e = (0, O._)(["flex flex-grow flex-col gap-3"]);
        return (
          (nF = function () {
            return e;
          }),
          e
        );
      }
      function nB() {
        var e = (0, O._)(["flex p-4 gap-4 ", "\n  ", ""]);
        return (
          (nB = function () {
            return e;
          }),
          e
        );
      }
      function nE() {
        var e = (0, O._)(["flex-shrink-0 flex flex-col relative items-end"]);
        return (
          (nE = function () {
            return e;
          }),
          e
        );
      }
      function nL() {
        var e = (0, O._)([
          "p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2",
        ]);
        return (
          (nL = function () {
            return e;
          }),
          e
        );
      }
      function nO() {
        var e = (0, O._)(["p-1 ", ""]);
        return (
          (nO = function () {
            return e;
          }),
          e
        );
      }
      function nU() {
        var e = (0, O._)([
          "text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n",
          "",
        ]);
        return (
          (nU = function () {
            return e;
          }),
          e
        );
      }
      function nq() {
        var e = (0, O._)([
          "text-center p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs ",
          "",
        ]);
        return (
          (nq = function () {
            return e;
          }),
          e
        );
      }
      function nz() {
        var e = (0, O._)([
          "flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm",
        ]);
        return (
          (nz = function () {
            return e;
          }),
          e
        );
      }
      var nQ = ["#7989FF"];
      ((a = c || (c = {}))[(a.Text = 0)] = "Text"),
        (a[(a.MultiText = 1)] = "MultiText"),
        (a[(a.Browsing = 2)] = "Browsing"),
        (a[(a.Code = 3)] = "Code"),
        (a[(a.CodeExecutionOutput = 4)] = "CodeExecutionOutput"),
        (a[(a.Plugin = 5)] = "Plugin"),
        (a[(a.BrowsingPlugin = 6)] = "BrowsingPlugin");
      var nW = "#19c37d",
        nH = "openai",
        n$ = "#1a7f64",
        nG = j.memo(function (e) {
          var n,
            t,
            r,
            a,
            i = e.turnIndex,
            s = e.conversationLeafId,
            o = e.isFinalTurn,
            l = e.clientThreadId,
            u = e.onChangeItemInView,
            d = e.onChangeRating,
            m = e.onRequestMoreCompletions,
            f = e.onDeleteNode,
            h = e.onRequestCompletion,
            p = e.onUpdateNode,
            b = e.onHandleChangeVariantFeedbackInlineComparisonRating,
            y = e.activeRequests,
            w = e.showInlineEmbeddedDisplay,
            C = void 0 !== w && w,
            M = e.currentModelId,
            N = e.initiallyHighlightedMessageId,
            P = e.avatarColor,
            Z = e.includeChatPreferencesMismatchDisclaimer,
            T = (0, j.useContext)(D.gB),
            A = (0, S.ec)(S.F_.isBusinessWorkspace),
            F = (0, _.GD)(l, i, s),
            B = F.role,
            E = F.messages,
            L = F.variantIds,
            O = (0, eh.kP)().session,
            q = (0, R.x_)(),
            z = (0, ee.WS)(),
            Q = (0, x._)((0, j.useState)(!1), 2),
            W = Q[0],
            H = Q[1],
            $ = (0, j.useMemo)(
              function () {
                return L.findIndex(function (e) {
                  return e === E[0].nodeId;
                });
              },
              [L, E]
            ),
            G = B !== eL.uU.User,
            V = (0, j.useContext)(D.QL).historyDisabled,
            J = (0, S.hz)().has(er.FZ),
            Y = (0, eA.Fl)(),
            K = Y.isBrowsingAvailable,
            X = Y.isPluginsAvailable,
            et = Y.isCodeInterpreterAvailable,
            ea = (0, I.tN)(function (e) {
              return e.isDesktopNavCollapsed;
            }),
            ei = E.some(function (e) {
              return e.message.content.content_type === eL.PX.MultimodalText;
            }),
            eo = K || X || et,
            el = (0, j.useRef)(null);
          (0, j.useEffect)(
            function () {
              var e;
              null != N &&
                F.messages
                  .map(function (e) {
                    return e.message.id;
                  })
                  .includes(N) &&
                (null === (e = el.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ behavior: "auto" }));
            },
            [N]
          );
          var eu = E[E.length - 1],
            ed = (0, x._)((0, j.useState)(eu.rating), 2),
            em = ed[0],
            ef = ed[1],
            eg = (0, S.hz)(),
            ep = (0, nP.v)(),
            ex = (0, j.useMemo)(
              function () {
                return (
                  (G &&
                    (null == E ? void 0 : E[0]) != null &&
                    (0, eO.Rc)(E[0].message)) ||
                  M
                );
              },
              [G, E, M]
            ),
            ev = (0, j.useCallback)(
              function () {
                1 === E.length &&
                  (z(
                    B === eL.uU.User ? en.s6.editPrompt : en.s6.editCompletion,
                    { id: E[0].message.id, threadId: _.tQ.getServerThreadId(l) }
                  ),
                  H(!0));
              },
              [E, z, B, l]
            ),
            eb = (0, j.useCallback)(function () {
              H(!1);
            }, []),
            ey = (0, j.useCallback)(
              function () {
                var e = E.reduce(function (e, n) {
                  return n.err ||
                    n.message.author.role !== eL.uU.Assistant ||
                    "all" !== n.message.recipient
                    ? e
                    : e + (e ? "\n\n" : "") + (0, eO.RR)(n.message);
                }, "");
                navigator.clipboard.writeText(e),
                  z(en.s6.copyToClipboard, {
                    threadId: _.tQ.getServerThreadId(l),
                    id: E[0].message.id,
                    eventSource: "mouse",
                    model: ex,
                  }),
                  eE.m.logEvent("chatgpt_copy_to_clipboard");
              },
              [ex, z, E, l]
            ),
            ek = (0, j.useCallback)(
              function (e) {
                d(eu.nodeId, eu.message.id, e), ef(e);
              },
              [eu, d]
            ),
            ew = (0, x._)((0, j.useState)(eu.inlineComparisonRating), 2),
            eC = ew[0],
            e_ = ew[1];
          (0, j.useEffect)(
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
          var eM = (0, j.useMemo)(
              function () {
                return eU.Cv.getRequestIdFromConversationTurn(F);
              },
              [F]
            ),
            eN = (0, j.useMemo)(
              function () {
                return y.has(eM);
              },
              [y, eM]
            ),
            eP = (0, j.useMemo)(
              function () {
                var e = !0,
                  n = !1,
                  t = void 0;
                try {
                  for (
                    var r, a = E[Symbol.iterator]();
                    !(e = (r = a.next()).done);
                    e = !0
                  ) {
                    var i = r.value;
                    if (i.errType) return i.errType;
                  }
                } catch (e) {
                  (n = !0), (t = e);
                } finally {
                  try {
                    e || null == a.return || a.return();
                  } finally {
                    if (n) throw t;
                  }
                }
                return !1;
              },
              [E]
            ),
            eZ = (0, j.useMemo)(
              function () {
                if (G) {
                  var e,
                    n,
                    t = _.tQ.getTree(l),
                    r =
                      null === (e = t.getParentPromptNode(E[0].nodeId)) ||
                      void 0 === e
                        ? void 0
                        : e.parentId,
                    a =
                      r &&
                      (null === (n = t.getNode(r).message.metadata) ||
                      void 0 === n
                        ? void 0
                        : n.model_slug);
                  if (ex && a && ex !== a)
                    return nR.n2.has(a)
                      ? "The previous model used in this conversation has been deprecated. We've switched you to the latest default model."
                      : "The previous model used in this conversation is unavailable. We've switched you to the latest default model.";
                }
                return null;
              },
              [ex, G, E, l]
            ),
            eT = (0, j.useMemo)(
              function () {
                if (!eo) return { avatarIcon: nH, avatarColor: nW };
                if (eN && E.length > 0) {
                  var e = E[E.length - 1],
                    n = (0, eO.rH)(e.message);
                  switch (n) {
                    case eO.Cs.Text:
                      if ((0, eO.RR)(e.message).length > 0 || E.length > 1)
                        return { avatarIcon: "text", avatarColor: n$ };
                      break;
                    case eO.Cs.Browsing:
                    case eO.Cs.BrowseTool:
                      return { avatarIcon: "browsing", avatarColor: n$ };
                    case eO.Cs.Code:
                    case eO.Cs.CodeExecutionOutput:
                      return { avatarIcon: "code", avatarColor: n$ };
                    case eO.Cs.Plugin:
                    case eO.Cs.PluginTool:
                      var t = (0, eO.fj)(
                          n === eO.Cs.Plugin
                            ? e.message.recipient
                            : e.message.author.name
                        ),
                        r = ep.find(function (e) {
                          return (
                            e.namespace ===
                            (null == t ? void 0 : t.pluginNamespace)
                          );
                        });
                      if (r) return { avatarPlugin: r };
                      return { avatarIcon: "plugin", avatarColor: n$ };
                  }
                }
                return { avatarIcon: nH, avatarColor: nW };
              },
              [eo, eN, E, ep]
            ),
            eI = eT.avatarIcon,
            eS = eT.avatarColor,
            eD = eT.avatarPlugin,
            eR = (0, j.useCallback)(
              function (e, n, t, r) {
                _.tQ.updateTree(l, function (a) {
                  var i = a.getParentId(e);
                  a.addNode(n, t, i, eL.Jq.Prompt, void 0, r);
                });
              },
              [l]
            ),
            eF = (0, j.useMemo)(
              function () {
                var e = [];
                return (
                  E.forEach(function (n, t) {
                    var r = (0, eO.rH)(n.message),
                      a = null == E ? void 0 : E[t - 1],
                      i =
                        null != a &&
                        ((0, eO.lD)(a.message) || (0, eO.qs)(n.message)),
                      s = r === eO.Cs.Text && (0, eO.RR)(n.message);
                    if (r === eO.Cs.Browsing || r === eO.Cs.BrowseTool) {
                      var o = e[e.length - 1];
                      (null == o ? void 0 : o.type) === c.Browsing
                        ? o.messages.push(n)
                        : e.push({ type: c.Browsing, messages: [n] });
                    } else if (
                      r === eO.Cs.BrowsingPlugin ||
                      r === eO.Cs.BrowsingPluginTool
                    ) {
                      var l = e[e.length - 1];
                      (null == l ? void 0 : l.type) === c.BrowsingPlugin
                        ? l.messages.push(n)
                        : e.push({ type: c.BrowsingPlugin, messages: [n] });
                    } else if (r === eO.Cs.Plugin || r === eO.Cs.PluginTool) {
                      var u = e[e.length - 1];
                      r === eO.Cs.PluginTool &&
                      (null == u ? void 0 : u.type) === c.Plugin
                        ? u.messages.push(n)
                        : e.push({ type: c.Plugin, messages: [n] });
                    } else if (r === eO.Cs.Code)
                      e.push({ type: c.Code, message: n });
                    else if (r === eO.Cs.CodeExecutionOutput)
                      e.push({ type: c.CodeExecutionOutput, message: n });
                    else if (i && null != s) {
                      var d = e.pop();
                      (null == d ? void 0 : d.type) === c.MultiText
                        ? (d.messages.push(n), e.push(d))
                        : (null == d ? void 0 : d.type) === c.Text &&
                          e.push({
                            type: c.MultiText,
                            messages: [d.message, n],
                          });
                    } else e.push({ type: c.Text, message: n });
                  }),
                  e.map(function (n, t) {
                    var r,
                      a = t === e.length - 1;
                    switch (n.type) {
                      case c.Text:
                        return (0,
                        v.jsx)(no.ZP, { className: "min-h-[20px]", message: n.message, isEditing: W, format: G, isCompletionInProgress: a && eN, onCreateEditNode: eR, clientThreadId: l, onUpdateNode: p, onDeleteNode: f, onChangeItemInView: u, onRequestCompletion: h, onExitEdit: eb, disabled: 0 !== y.size, isCompletion: G, onRequestMoreCompletions: m, isResponseToPluginMessage: (null === (r = e[t - 1]) || void 0 === r ? void 0 : r.type) === c.Plugin }, n.message.nodeId);
                      case c.MultiText:
                        return (0,
                        v.jsx)(nl, { clientThreadId: l, messages: n.messages, isCompletionInProgress: a && eN, isCompletion: G, onRequestMoreCompletions: m }, t);
                      case c.Browsing:
                      case c.BrowsingPlugin:
                        var i = n.messages[n.messages.length - 1];
                        return (0,
                        v.jsx)(e0, { messages: n.messages, isComplete: !o || !a || 0 === y.size || nd(i.message), isPlugin: n.type === c.BrowsingPlugin }, n.messages[0].nodeId);
                      case c.Code:
                        var s,
                          d,
                          g = e[t + 1],
                          x =
                            g && g.type === c.CodeExecutionOutput
                              ? g.message
                              : void 0;
                        return (0,
                        v.jsx)(ns, { clientThreadId: l, message: n.message, outputMessage: x, isComplete: !o || !a || 0 === y.size || ((null == (d = null === (s = null == x ? void 0 : x.message.metadata) || void 0 === s ? void 0 : s.aggregate_result) ? void 0 : d.status) !== void 0 && (null == d ? void 0 : d.status) !== "running") || nd(n.message.message) }, n.message.nodeId);
                      case c.CodeExecutionOutput:
                        return (0,
                        v.jsx)(ej, { message: n.message, isCollapsed: !1 }, n.message.nodeId);
                      case c.Plugin:
                        return (0,
                        v.jsx)(nT, { messages: n.messages }, n.messages[0].nodeId);
                      default:
                        return null;
                    }
                  })
                );
              },
              [E, W, G, eN, eR, l, p, f, u, h, eb, y.size, m, o]
            ),
            eQ = (0, _.r7)(l),
            eW =
              eg.has(er.st) &&
              !A &&
              !T &&
              !eQ &&
              q &&
              G &&
              !eN &&
              !C &&
              !W &&
              1 === $ &&
              o &&
              !eC &&
              !em &&
              2 === L.length &&
              Date.now() -
                (null !== (r = eu.message.create_time) && void 0 !== r
                  ? r
                  : 0) *
                  1e3 <
                6e5,
            eH = (0, j.useRef)(Date.now()),
            e$ = (0, j.useRef)(
              (null !== (a = eu.message.create_time) && void 0 !== a
                ? a
                : Date.now()) * 1e3
            ),
            eG = (0, j.useRef)(Date.now());
          (0, j.useEffect)(
            function () {
              eN || (eG.current = Date.now());
            },
            [eN]
          );
          var eV = (0, j.useCallback)(
              function (e) {
                if (eW) {
                  var n,
                    t,
                    r = _.tQ.getTree(l),
                    a = L[0] || "",
                    i = (null == r ? void 0 : r.getConversationTurns(a)) || [],
                    s = i[i.length - 1],
                    o = (null == s ? void 0 : s.messages) || [],
                    u = o[o.length - 1],
                    c =
                      (null == u
                        ? void 0
                        : null === (n = u.message) || void 0 === n
                        ? void 0
                        : n.id) || "",
                    d = L[1] || "",
                    m = (null == r ? void 0 : r.getConversationTurns(d)) || [],
                    f = m[m.length - 1],
                    h = (null == f ? void 0 : f.messages) || [],
                    p = h[h.length - 1];
                  b(
                    c,
                    (null == p
                      ? void 0
                      : null === (t = p.message) || void 0 === t
                      ? void 0
                      : t.id) || "",
                    e,
                    eH.current,
                    eH.current,
                    e$.current,
                    eG.current
                  ),
                    _.tQ.updateTree(l, function (n) {
                      n.updateNode(eu.nodeId, {
                        metadata: {
                          $set: (0, ec._)(
                            (0, g._)({}, n.getMetadata(eu.nodeId)),
                            { inlineComparisonRating: e }
                          ),
                        },
                      });
                    }),
                    e_(e),
                    _.tQ.updateTree(l, function (e) {
                      e.updateNode(u.nodeId, {
                        metadata: {
                          $set: (0, ec._)(
                            (0, g._)({}, e.getMetadata(u.nodeId)),
                            { inlineComparisonRating: "baseline" }
                          ),
                        },
                      });
                    });
                }
              },
              [eW, eu.nodeId, b, l, L]
            ),
            eJ = (0, j.useCallback)(
              function () {
                _.tQ.updateTree(l, function (e) {
                  e.updateNode(eu.nodeId, {
                    metadata: {
                      $set: (0, ec._)((0, g._)({}, e.getMetadata(eu.nodeId)), {
                        inlineComparisonRating: "skip",
                      }),
                    },
                  });
                }),
                  e_("skip");
              },
              [eu.nodeId, l]
            ),
            eY = G && !C && !T && !eQ,
            eK = !T && !C && !W,
            eX = !G && !C && !T && !ei && 1 === E.length && !W;
          if (F.role === eL.uU.Unknown || F.role === eL.uU.System)
            return Z ? (0, v.jsx)(nV, { isPostMessage: !1 }) : null;
          var e1 = eX
              ? (0, v.jsx)(n1, {
                  $isMessageRedesign: J,
                  onClick: ev,
                  className: (0, U.Z)(
                    !J && q && "md:invisible md:group-hover:visible"
                  ),
                  children: (0, v.jsx)(es.ZP, { icon: k.vPQ }),
                })
              : null,
            e2 =
              G && !C
                ? (0, v.jsx)(ez.Z, {
                    onCopy: ey,
                    className: (0, U.Z)(
                      "rounded-md p-1",
                      J
                        ? "text-gray-500 hover:text-gray-700 dark:hover:text-gray-400"
                        : "hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"
                    ),
                  })
                : null,
            e3 =
              eY && !A
                ? (0, v.jsxs)("div", {
                    className: "flex gap-1",
                    children: [
                      "thumbsDown" !== em &&
                        !V &&
                        (0, v.jsx)(
                          n1,
                          {
                            $isMessageRedesign: J,
                            onClick: function () {
                              return ek("thumbsUp");
                            },
                            disabled: "thumbsUp" === em,
                            className: (0, U.Z)(
                              "thumbsUp" === em &&
                                (J
                                  ? "bg-gray-100 dark:bg-gray-700"
                                  : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")
                            ),
                            children: (0, v.jsx)(es.ZP, { icon: k.fmn }),
                          },
                          "thumbsUp:".concat(eu.nodeId)
                        ),
                      "thumbsUp" !== em &&
                        !V &&
                        (0, v.jsx)(
                          n1,
                          {
                            $isMessageRedesign: J,
                            onClick: function () {
                              return ek("thumbsDown");
                            },
                            disabled: "thumbsDown" === em,
                            className: (0, U.Z)(
                              "thumbsDown" === em &&
                                (J
                                  ? "bg-gray-100 dark:bg-gray-700"
                                  : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")
                            ),
                            children: (0, v.jsx)(es.ZP, { icon: k.oLd }),
                          },
                          "thumbsDown:".concat(eu.nodeId)
                        ),
                    ],
                  })
                : null,
            e5 =
              eW && !V
                ? (0, v.jsxs)(n5, {
                    children: [
                      (0, v.jsx)("div", {
                        className: (0, U.Z)("mr-4"),
                        children: "Was this response better or worse?",
                      }),
                      (0, v.jsxs)(n0, {
                        onClick: function () {
                          return eV("new");
                        },
                        title:
                          "This response was better than the previous response",
                        children: [
                          (0, v.jsx)(es.ZP, {
                            icon: k.fmn,
                            className: (0, U.Z)("mr-1"),
                          }),
                          "Better",
                        ],
                      }),
                      (0, v.jsxs)(n0, {
                        onClick: function () {
                          return eV("original");
                        },
                        title:
                          "This response was worse than the previous response",
                        children: [
                          (0, v.jsx)(es.ZP, {
                            icon: k.oLd,
                            className: (0, U.Z)("mr-1"),
                          }),
                          "Worse",
                        ],
                      }),
                      (0, v.jsxs)(n0, {
                        onClick: function () {
                          return eV("same");
                        },
                        title: "This response was the same in quality",
                        children: [
                          (0, v.jsx)(es.ZP, {
                            icon: eB.Ny3,
                            className: (0, U.Z)(
                              "mr-1 rounded-full border border-gray-400 dark:border-gray-300"
                            ),
                          }),
                          "Same",
                        ],
                      }),
                      (0, v.jsx)(n0, {
                        onClick: eJ,
                        title: "Skip this comparison",
                        children: (0, v.jsx)(es.ZP, {
                          icon: k.q5L,
                          size: "medium",
                        }),
                      }),
                    ],
                  })
                : null,
            e4 = eK && L.length > 1,
            e7 = function () {
              return (0, v.jsxs)("div", {
                className: "flex gap-1",
                children: [e3, e1, e2],
              });
            },
            e8 =
              null === (t = E[0].message.metadata) || void 0 === t
                ? void 0
                : t.shared_conversation_id,
            e6 = null != e8;
          return (0, v.jsxs)(nJ, {
            className: (0, U.Z)(
              "group",
              "w-full text-gray-800 dark:text-gray-100",
              J
                ? (0, U.Z)(
                    "sm:rounded-2xl",
                    G
                      ? "my-2 hover:bg-gray-50/50 dark:hover:bg-gray-700/50"
                      : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                  )
                : (0, U.Z)(
                    !C && "border-b border-black/10 dark:border-gray-900/50",
                    G ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800"
                  )
            ),
            ref: el,
            children: [
              eZ && (0, v.jsx)(n3, { children: eZ }),
              (0, v.jsxs)(nK, {
                $isStaticSharedThread: T,
                $isDesktopNavCollapsed: ea,
                $isMessageRedesign: J,
                className: (0, U.Z)(C ? "ml-5" : "m-auto"),
                children: [
                  (0, v.jsxs)(nX, {
                    children: [
                      (0, v.jsx)("div", {
                        className: J ? "" : "w-[30px]",
                        children: G
                          ? eD
                            ? (0, v.jsx)(eq.Ph, {
                                plugin: eD,
                                notice: eP || void 0,
                              })
                            : (0, v.jsx)(eq.k$, {
                                background: null != P ? P : eS,
                                iconName: eI,
                                notice: eP || void 0,
                              })
                          : e6 || C
                          ? (0, v.jsx)(eq.k$, {
                              background:
                                nQ[
                                  (null !==
                                    (n =
                                      null == e8 ? void 0 : e8.charCodeAt(0)) &&
                                  void 0 !== n
                                    ? n
                                    : 0) % nQ.length
                                ],
                              iconName: "user",
                            })
                          : (0, v.jsx)(eq.Yt, {
                              user: null == O ? void 0 : O.user,
                              notice: eP || void 0,
                              size: J ? "redesign" : "medium",
                            }),
                      }),
                      !J &&
                        eK &&
                        q &&
                        (0, v.jsx)(nD.Z, {
                          currentPage: $,
                          onChangeIndex: function (e) {
                            return u(L[e]);
                          },
                          length: L.length,
                          className: (0, U.Z)(
                            "invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible",
                            L.length > 1 ? "visible" : "!invisible"
                          ),
                        }),
                    ],
                  }),
                  (0, v.jsxs)("div", {
                    className: (0, U.Z)(
                      "relative",
                      J
                        ? "min-w-0 grow"
                        : "flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"
                    ),
                    children: [
                      J &&
                        (0, v.jsx)("div", {
                          className:
                            "mb-1 select-none text-xs font-medium tracking-wide text-gray-400",
                          children: G ? "ChatGPT" : e6 ? "User" : "You",
                        }),
                      (0, v.jsx)(nY, { children: eF }),
                      J
                        ? (!q || e4 || null != e5) &&
                          !C &&
                          (0, v.jsxs)("div", {
                            className: "mt-2 flex flex-col gap-4",
                            children: [
                              (0, v.jsxs)("div", {
                                className: "flex gap-2 text-gray-400",
                                children: [
                                  e4 &&
                                    (0, v.jsx)(nD.Z, {
                                      currentPage: $,
                                      onChangeIndex: function (e) {
                                        return u(L[e]);
                                      },
                                      length: L.length,
                                      className:
                                        "rounded-xl border border-gray-100 bg-white p-1 dark:border-gray-600 dark:bg-gray-700",
                                    }),
                                  !q && e7(),
                                ],
                              }),
                              e5,
                            ],
                          })
                        : (0, v.jsxs)(v.Fragment, {
                            children: [
                              eX &&
                                q &&
                                (0, v.jsx)(n2, {
                                  $hidden: 0 !== y.size,
                                  children: e1,
                                }),
                              (eY || eK) &&
                                (0, v.jsxs)("div", {
                                  className: "flex justify-between lg:block",
                                  children: [
                                    !q &&
                                      eK &&
                                      (0, v.jsx)(nD.Z, {
                                        currentPage: $,
                                        onChangeIndex: function (e) {
                                          return u(L[e]);
                                        },
                                        length: L.length,
                                        className: (0, U.Z)(
                                          "self-center pt-2",
                                          L.length > 1
                                            ? "visible"
                                            : "!invisible"
                                        ),
                                      }),
                                    eX &&
                                      !q &&
                                      (0, v.jsx)(n2, {
                                        $hidden: eN,
                                        children: e1,
                                      }),
                                    eY &&
                                      (0, v.jsxs)(n2, {
                                        $hidden: eN,
                                        children: [e2, e3],
                                      }),
                                    eW && !V && e5,
                                  ],
                                }),
                            ],
                          }),
                    ],
                  }),
                  J &&
                    q &&
                    !W &&
                    !C &&
                    (!T || G) &&
                    (0, v.jsx)("div", {
                      className:
                        "absolute -top-4 right-4 hidden rounded bg-white p-1 shadow-[0_0.5px_2px_rgba(0,0,0,0.15)] group-hover:block dark:bg-gray-900",
                      children: e7(),
                    }),
                ],
              }),
              Z && (0, v.jsx)(nV, { isPostMessage: !0 }),
            ],
          });
        }),
        nV = function (e) {
          var n = e.isPostMessage;
          return (0, v.jsx)(n3, {
            $isPostMessage: n,
            children:
              "Your info has changed since the start of this chat. Please start a new chat to see changes reflected",
          });
        },
        nJ = X.Z.div(nA()),
        nY = X.Z.div(nF()),
        nK = X.Z.div(
          nB(),
          function (e) {
            return e.$isMessageRedesign
              ? "relative"
              : e.$isDesktopNavCollapsed
              ? "text-base md:gap-6 md:max-w-3xl md:py-6 lg:px-0"
              : "text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0";
          },
          function (e) {
            return e.$isStaticSharedThread ? "pl-0 pr-4" : "";
          }
        ),
        nX = X.Z.div(nE()),
        n0 = X.Z.button(nL()),
        n1 = X.Z.button(nO(), function (e) {
          return e.$isMessageRedesign
            ? "text-gray-500 enabled:hover:text-gray-700 enabled:dark:hover:text-gray-400 rounded-sm"
            : "rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400";
        }),
        n2 = X.Z.div(nU(), function (e) {
          return e.$hidden ? "invisible" : "visible";
        }),
        n3 = X.Z.div(nq(), function (e) {
          return e.$isPostMessage ? "border-t" : "border-b";
        }),
        n5 = X.Z.div(nz()),
        n4 = t(75318);
      function n7() {
        var e = (0, O._)([
          "text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100",
        ]);
        return (
          (n7 = function () {
            return e;
          }),
          e
        );
      }
      function n8() {
        var e = (0, O._)([
          "text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center",
        ]);
        return (
          (n8 = function () {
            return e;
          }),
          e
        );
      }
      function n6() {
        var e = (0, O._)(["md:flex items-start text-center gap-3.5"]);
        return (
          (n6 = function () {
            return e;
          }),
          e
        );
      }
      function n9() {
        var e = (0, O._)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
        return (
          (n9 = function () {
            return e;
          }),
          e
        );
      }
      function te() {
        var e = (0, O._)([
          "flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2",
        ]);
        return (
          (te = function () {
            return e;
          }),
          e
        );
      }
      function tn() {
        var e = (0, O._)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
        return (
          (tn = function () {
            return e;
          }),
          e
        );
      }
      function tt() {
        var e = (0, O._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
        return (
          (tt = function () {
            return e;
          }),
          e
        );
      }
      function tr() {
        var e = (0, O._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']",
        ]);
        return (
          (tr = function () {
            return e;
          }),
          e
        );
      }
      function ta() {
        var e = (0, O._)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900",
        ]);
        return (
          (ta = function () {
            return e;
          }),
          e
        );
      }
      var ti = X.Z.div(n7()),
        ts = X.Z.h1(n8()),
        to = X.Z.div(n6()),
        tl = X.Z.div(n9()),
        tu = X.Z.h2(te()),
        tc = X.Z.ul(tn()),
        td = X.Z.li(tt());
      X.Z.li(tr());
      var tm = X.Z.button(ta());
      function tf(e) {
        var n = e.text,
          t = e.onChangeCurrentPrompt,
          r = (0, j.useCallback)(
            function () {
              t(n);
            },
            [n, t]
          );
        return (0, v.jsxs)(tm, { onClick: r, children: ['"', n, '" →'] });
      }
      function th(e) {
        var n = function (e) {
            var n;
            null == t ||
              null === (n = t.current) ||
              void 0 === n ||
              n.setInputValue(e);
          },
          t = e.promptTextareaRef;
        return (0, v.jsxs)(ti, {
          children: [
            (0, v.jsxs)(ts, { children: ["ChatGPT", (0, v.jsx)(eF.ZP, {})] }),
            (0, v.jsxs)(to, {
              children: [
                (0, v.jsxs)(tl, {
                  children: [
                    (0, v.jsxs)(tu, {
                      children: [
                        (0, v.jsx)(es.ZP, { icon: k.kXG, size: "medium" }),
                        "Examples",
                      ],
                    }),
                    (0, v.jsxs)(tc, {
                      children: [
                        (0, v.jsx)(tf, {
                          text: "Explain quantum computing in simple terms",
                          onChangeCurrentPrompt: n,
                        }),
                        (0, v.jsx)(tf, {
                          text: "Got any creative ideas for a 10 year old’s birthday?",
                          onChangeCurrentPrompt: n,
                        }),
                        (0, v.jsx)(tf, {
                          text: "How do I make an HTTP request in Javascript?",
                          onChangeCurrentPrompt: n,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, v.jsxs)(tl, {
                  children: [
                    (0, v.jsxs)(tu, {
                      children: [
                        (0, v.jsx)(es.ZP, { icon: n4.Z, size: "medium" }),
                        "Capabilities",
                      ],
                    }),
                    (0, v.jsxs)(tc, {
                      children: [
                        (0, v.jsx)(td, {
                          children:
                            "Remembers what user said earlier in the conversation",
                        }),
                        (0, v.jsx)(td, {
                          children:
                            "Allows user to provide follow-up corrections",
                        }),
                        (0, v.jsx)(td, {
                          children: "Trained to decline inappropriate requests",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, v.jsxs)(tl, {
                  children: [
                    (0, v.jsxs)(tu, {
                      children: [
                        (0, v.jsx)(es.ZP, { icon: k.BJv, size: "medium" }),
                        "Limitations",
                      ],
                    }),
                    (0, v.jsxs)(tc, {
                      children: [
                        (0, v.jsx)(td, {
                          children:
                            "May occasionally generate incorrect information",
                        }),
                        (0, v.jsx)(td, {
                          children:
                            "May occasionally produce harmful instructions or biased content",
                        }),
                        (0, v.jsx)(td, {
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
      var tg = t(37812),
        tp = t(75515),
        tx = t(99453),
        tv = t(5046),
        tb = t(97732);
      function ty(e) {
        var n = e.onModelChange,
          t = e.currentModel,
          r = (0, ee.WS)(),
          a = (0, tv.BT)(),
          i = (0, tb.ZP)(),
          s = (0, j.useCallback)(
            function (e) {
              a !== e && (n(e), r(en.s6.toggleModel, { model: e }));
            },
            [a, r, n]
          );
        return (0, v.jsx)(tx.Z, {
          value: null == t ? void 0 : t.id,
          onChange: s,
          items: i,
        });
      }
      var tj = t(20485),
        tk = t(12285),
        tw = t(40638),
        tC = t(57526),
        t_ = t(99581);
      function tM() {
        var e = (0, O._)([
          "rounded-lg bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20 shadow-[0_1px_7px_0_rgba(0,0,0,0.03)]",
        ]);
        return (
          (tM = function () {
            return e;
          }),
          e
        );
      }
      function tN() {
        var e = (0, O._)([
          "absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-sm md:w-[100%]",
        ]);
        return (
          (tN = function () {
            return e;
          }),
          e
        );
      }
      function tP() {
        var e = (0, O._)([
          "absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4",
        ]);
        return (
          (tP = function () {
            return e;
          }),
          e
        );
      }
      function tZ() {
        var e = (0, O._)(["flex items-center gap-2 truncate"]);
        return (
          (tZ = function () {
            return e;
          }),
          e
        );
      }
      function tT() {
        var e = (0, O._)(["h-6 w-6 shrink-0"]);
        return (
          (tT = function () {
            return e;
          }),
          e
        );
      }
      function tI() {
        var e = (0, O._)([
          "absolute inset-y-0 right-0 flex items-center pr-5 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (tI = function () {
            return e;
          }),
          e
        );
      }
      function tS() {
        var e = (0, O._)([
          "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (tS = function () {
            return e;
          }),
          e
        );
      }
      var tD = ["confidential", "alpha", "plus"];
      function tR(e) {
        var n = e.selectedOptions,
          t = e.selectedLabel,
          r = e.onChange,
          a = e.onAction,
          i = e.onOpen,
          s = e.onClose,
          o = e.dropdownRef,
          l = (0, p._)(e, [
            "selectedOptions",
            "selectedLabel",
            "onChange",
            "onAction",
            "onOpen",
            "onClose",
            "dropdownRef",
          ]),
          u = (0, j.useCallback)(
            function (e) {
              if (
                e.some(function (e) {
                  return "string" == typeof e;
                })
              ) {
                var n = e.find(function (e) {
                  return "string" == typeof e;
                });
                null == a || a(n);
              } else r(e);
            },
            [r, a]
          );
        return (0, v.jsx)(tk.R, {
          value: n.map(function (e) {
            return e.value;
          }),
          multiple: !0,
          onChange: u,
          children: function (e) {
            var r = e.open;
            return (0, v.jsx)(
              tA,
              (0, g._)(
                {
                  ref: o,
                  selectedLabel: t || "".concat(n.length, " selected"),
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
      var tA = (0, j.forwardRef)(function (e, n) {
        var t = e.name,
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
          h = (0, j.useRef)(null),
          g = (0, j.useRef)(null),
          p = (0, R.oc)();
        (0, j.useImperativeHandle)(
          n,
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
            (0, v.jsx)("div", {
              className: "flex h-[42px] items-center justify-center",
              children: (0, v.jsx)(eS.Z, {}),
            })
          : (0, v.jsxs)(v.Fragment, {
              children: [
                c,
                (0, v.jsxs)(tk.R.Options, {
                  className: "overflow-auto",
                  children: [
                    i.map(function (e, n) {
                      return (0, v.jsx)(
                        tF,
                        {
                          value: e.value,
                          disabled: e.disabled,
                          theme: f,
                          children: function (n) {
                            var t = n.selected,
                              r = n.active;
                            return (0, v.jsxs)(v.Fragment, {
                              children: [
                                (0, v.jsxs)(t$, {
                                  children: [
                                    e.imageUrl &&
                                      (0, v.jsx)(tG, {
                                        children: (0, v.jsx)(tp.Z, {
                                          url: e.imageUrl,
                                          name: e.title,
                                          size: "100%",
                                        }),
                                      }),
                                    (0, v.jsxs)("span", {
                                      className: (0, U.Z)(
                                        t && !o && "font-semibold",
                                        "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"
                                      ),
                                      children: [
                                        e.title,
                                        e.tags.map(function (e) {
                                          return tU(e);
                                        }),
                                        e.customTags,
                                      ],
                                    }),
                                  ],
                                }),
                                o && !e.disabled
                                  ? (0, v.jsx)(tE, { theme: f, selected: t })
                                  : t &&
                                    (0, v.jsx)(tB, {
                                      theme: f,
                                      icon: "mini" === f ? es.HQ : k.UgA,
                                    }),
                                e.disabled &&
                                  (0, v.jsx)(tB, {
                                    theme: f,
                                    icon: tC.Z,
                                    className: "text-red-700 dark:text-red-500",
                                  }),
                                r &&
                                  p &&
                                  (0, t_.createPortal)(
                                    (0, v.jsx)(tO, {
                                      option: e,
                                      dropdownRef: g,
                                    }),
                                    document.body
                                  ),
                              ],
                            });
                          },
                        },
                        n
                      );
                    }),
                    null == s
                      ? void 0
                      : s.map(function (e, n) {
                          return (0, v.jsx)(
                            tF,
                            {
                              value: e.id,
                              theme: f,
                              children: function () {
                                return (0, v.jsxs)(v.Fragment, {
                                  children: [
                                    (0, v.jsx)("div", {
                                      className:
                                        "text-gray-800 dark:text-gray-100",
                                      children: e.label,
                                    }),
                                    (0, v.jsx)(tB, { theme: f, icon: e.icon }),
                                  ],
                                });
                              },
                            },
                            n
                          );
                        }),
                  ],
                }),
              ],
            });
        return (0,
        v.jsxs)("div", { className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4", children: [(0, v.jsxs)(tk.R.Button, { ref: h, onClick: a ? m : d, className: (0, U.Z)("relative flex cursor-pointer flex-col bg-white py-2 pr-10 text-left dark:bg-gray-800 sm:text-sm", "mini" === f ? "mx-auto w-auto rounded-lg border border-transparent pl-4 pr-7 hover:border-black/10 dark:hover:border-white/10" : "w-full rounded-md border border-black/10 pl-3 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20"), children: ["mini" !== f && (0, v.jsx)(tk.R.Label, { className: "block text-xs text-gray-700 dark:text-gray-500", children: t }), (0, v.jsx)("span", { className: "inline-flex w-full truncate", children: (0, v.jsx)("span", { className: "flex h-6 items-center gap-1 truncate", children: r }) }), (0, v.jsx)("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: (0, v.jsx)(es.ZP, { icon: k.bTu, className: " text-gray-400", "aria-hidden": "true" }) })] }), (0, v.jsx)(tw.u, { show: a, as: j.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, v.jsx)(tz, { ref: g, children: x }) })] });
      });
      function tF(e) {
        var n = e.value,
          t = e.disabled,
          r = e.children,
          a = e.theme;
        return (0, v.jsx)(tk.R.Option, {
          className: function (e) {
            var n = e.active;
            return (0, U.Z)(
              "mini" === a ? tW : tH,
              n && !t ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900",
              t &&
                "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100"
            );
          },
          value: n,
          children: r,
        });
      }
      function tB(e) {
        var n = e.icon,
          t = e.className,
          r = e.theme;
        return (0, v.jsx)("mini" === r ? tV : tJ, {
          children: (0, v.jsx)(es.ZP, {
            icon: n,
            className: (0, U.Z)("h-5 w-5", t),
            "aria-hidden": "true",
          }),
        });
      }
      function tE(e) {
        var n = e.selected,
          t = e.disabled;
        return "mini" === e.theme
          ? (0, v.jsxs)(tV, {
              children: [
                (0, v.jsx)(es.ZP, {
                  icon: n ? es.HQ : es.i9,
                  className: "h-5 w-5 text-blue-600",
                  strokeWidth: n ? 2.5 : 2,
                }),
                !n &&
                  (0, v.jsx)(es.ZP, {
                    icon: es.nQ,
                    className: (0, U.Z)(
                      "absolute h-5 w-5 text-blue-600 opacity-0 transition-opacity",
                      !t && "group-hover:opacity-100"
                    ),
                  }),
              ],
            })
          : (0, v.jsx)(tJ, {
              children: (0, v.jsx)("div", {
                className: (0, U.Z)(
                  "flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
                  n
                    ? "border-transparent bg-green-600 text-white"
                    : "border-black/5 dark:border-white/20"
                ),
                "aria-hidden": "true",
                children: (0, v.jsx)(es.ZP, {
                  icon: k.UgA,
                  className: (0, U.Z)(
                    "h-3 w-3 transition-opacity",
                    n && "opacity-100",
                    !n && "opacity-0",
                    !n && !t && "group-hover:opacity-50"
                  ),
                  strokeWidth: n ? 2.5 : 2,
                }),
              }),
            });
      }
      function tL(e) {
        var n = e.showCheckbox,
          t = e.theme;
        return (0, v.jsxs)("div", {
          className: (0, U.Z)("mini" === t ? tW : tH, "cursor-auto"),
          children: [
            (0, v.jsxs)(t$, {
              children: [
                (0, v.jsx)(tG, {
                  children: (0, v.jsx)("div", {
                    className: "h-full w-full rounded-sm bg-gray-200",
                  }),
                }),
                (0, v.jsx)("div", {
                  className: "h-[12px] w-[88px] rounded-sm bg-gray-100",
                }),
              ],
            }),
            n && (0, v.jsx)(tE, { theme: t, selected: !1, disabled: !0 }),
          ],
        });
      }
      function tO(e) {
        var n = e.option,
          t = e.dropdownRef,
          r = (0, x._)((0, j.useState)(), 2),
          a = r[0],
          i = r[1];
        return ((0, j.useEffect)(
          function () {
            var e = function () {
              if (t.current) {
                var e = t.current.getBoundingClientRect();
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
          [t]
        ),
        a)
          ? (0, v.jsxs)(tQ, {
              style: {
                width: 260,
                minHeight: a.minHeight,
                top: a.top,
                left: a.left,
              },
              children: [
                n.disabled &&
                  (0, v.jsx)(es.ZP, {
                    icon: tC.Z,
                    size: "medium",
                    className: "text-red-700 dark:text-red-500",
                  }),
                n.imageUrl &&
                  (0, v.jsx)(tp.Z, {
                    url: n.imageUrl,
                    name: n.title,
                    size: 70,
                  }),
                (0, v.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    n.title,
                    " ",
                    n.tags.map(function (e) {
                      return tU(e);
                    }),
                    " ",
                    n.customTags,
                  ],
                }),
                (0, v.jsx)("div", {
                  className: "whitespace-pre-line text-xs",
                  children: n.description,
                }),
              ],
            })
          : null;
      }
      var tU = function (e) {
          return (
            tD.includes(e) &&
            (0, v.jsx)(
              "span",
              {
                className: (0, U.Z)(
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
        tq = X.Z.div(tM()),
        tz = (0, X.Z)(tq)(tN()),
        tQ = (0, X.Z)(tq)(tP()),
        tW =
          "group relative flex h-[50px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-5 pr-12 last:border-0 dark:border-white/20",
        tH =
          "group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20",
        t$ = X.Z.span(tZ()),
        tG = X.Z.span(tT()),
        tV = X.Z.span(tI()),
        tJ = X.Z.span(tS()),
        tY = t(97688),
        tK = t(697),
        tX = t(10604),
        t0 = t(5759),
        t1 = t(17915),
        t2 = t(38631);
      function t3() {
        var e = (0, O._)(["mt-4 flex flex-col gap-4"]);
        return (
          (t3 = function () {
            return e;
          }),
          e
        );
      }
      function t5() {
        var e = (0, O._)(["text-sm text-red-500"]);
        return (
          (t5 = function () {
            return e;
          }),
          e
        );
      }
      var t4 = X.Z.div(t3()),
        t7 = X.Z.div(t5()),
        t8 = t(49910);
      function t6(e) {
        var n = e.onClickInstall,
          t = e.onInstallLocalhost,
          r = e.onClose,
          a = (0, x._)((0, j.useState)(), 2),
          i = a[0],
          s = a[1],
          o = (0, x._)((0, j.useState)(), 2),
          l = o[0],
          u = o[1],
          c = (0, x._)((0, j.useState)(!1), 2),
          d = c[0],
          m = c[1],
          f = (0, j.useCallback)(function (e) {
            s(e);
          }, []),
          h = (0, j.useCallback)(function () {
            m(!0);
          }, []);
        return d && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, v.jsx)(rr, {
              plugin: null == i ? void 0 : i.scrapeManifestResponse.plugin,
              onClickInstall: n,
              onClose: r,
            })
          : l && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, v.jsx)(rt, {
              plugin: i.scrapeManifestResponse.plugin,
              manifestAccessToken: i.manifestAccessToken,
              verificationTokens: l,
              onReadyToInstall: h,
              onClose: r,
            })
          : i
          ? (0, v.jsx)(rn, {
              loadManifestResult: i,
              onRefetch: f,
              onSubmitAuthInfo: u,
              onReadyToInstall: h,
              onInstallLocalhost: t,
              onClose: r,
            })
          : (0, v.jsx)(t9, { onFetch: f, onClose: r });
      }
      function t9(e) {
        var n = e.onFetch,
          t = e.onClose,
          r = (0, eh.kP)().session,
          a = (0, x._)((0, j.useState)(!1), 2),
          i = a[0],
          s = a[1],
          o = (0, x._)((0, j.useState)("bearer"), 2),
          l = o[0],
          u = o[1],
          c = (0, x._)((0, j.useState)(), 2),
          d = c[0],
          m = c[1],
          f = (0, j.useRef)(null),
          h = (0, j.useRef)(null),
          g = (0, t1.sd)(),
          p = g.fetchManifestAndSpec,
          b = g.isLoading;
        (0, j.useEffect)(function () {
          var e;
          null === (e = f.current) || void 0 === e || e.focus();
        }, []);
        var y = (0, j.useCallback)(function () {
            s(function (e) {
              return !e;
            });
          }, []),
          w = (0, j.useCallback)(function (e) {
            u(e.target.value);
          }, []),
          C = (0, j.useCallback)(
            (0, eu._)(function () {
              var e, t, r;
              return (0, ed.Jh)(this, function (a) {
                return (r =
                  null === (e = f.current) || void 0 === e ? void 0 : e.value)
                  ? (p({
                      domain: r,
                      manifestAccessToken: i
                        ? {
                            authorization_type: l,
                            token:
                              (null === (t = h.current) || void 0 === t
                                ? void 0
                                : t.value) || "",
                          }
                        : void 0,
                      onSuccess: n,
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
            [p, n, l, i]
          );
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: "Enter your website domain",
          primaryButton: (0, v.jsx)(eT.ZP.Button, {
            title: "Find manifest file",
            color: "primary",
            onClick: C,
            loading: b,
          }),
          secondaryButton: (0, v.jsx)(eT.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, v.jsxs)(t4, {
            children: [
              (0, v.jsx)("a", {
                href: "https://platform.openai.com/docs/plugins/getting-started",
                target: "_blank",
                rel: "noreferrer",
                className: "text-green-600",
                children:
                  "Visit our documentation to learn how to build a plugin.",
              }),
              (0, v.jsxs)(t0.Z, {
                icon: "\uD83D\uDEA8",
                children: [
                  "If your plugin has been approved to be in the ChatGPT plugin store, and you have made changes to your ",
                  "plugin's",
                  " manifest, your plugin will be removed from the store, and you will need to",
                  " ",
                  (0, v.jsx)("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-green-600",
                    href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                    children: "resubmit it for review",
                  }),
                  ".",
                ],
              }),
              (0, v.jsx)(tX.Z, {
                ref: f,
                name: "url",
                displayName: "Domain",
                placeholder: "ex: openai.com or localhost:3000",
                onPressEnter: C,
                autoFocus: !0,
              }),
              (null == r ? void 0 : r.user) != null &&
                (0, eh.yl)(r.user) &&
                (0, v.jsxs)(v.Fragment, {
                  children: [
                    (0, v.jsxs)("div", {
                      role: "button",
                      className:
                        "flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70",
                      onClick: y,
                      children: [
                        (0, v.jsx)("div", {
                          children: "My file requires authentication",
                        }),
                        (0, v.jsx)(es.ZP, { icon: i ? k.rH8 : k.bTu }),
                      ],
                    }),
                    i &&
                      (0, v.jsxs)(v.Fragment, {
                        children: [
                          (0, v.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, v.jsx)("div", {
                                children: "Authentication type",
                              }),
                              (0, v.jsxs)("div", {
                                className: "flex gap-6",
                                children: [
                                  (0, v.jsx)(re, {
                                    label: "Bearer",
                                    value: "bearer",
                                    checked: "bearer" === l,
                                    onChange: w,
                                  }),
                                  (0, v.jsx)(re, {
                                    label: "Basic",
                                    value: "basic",
                                    checked: "basic" === l,
                                    onChange: w,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, v.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, v.jsx)("div", { children: "Access token" }),
                              (0, v.jsx)(tX.Z, {
                                ref: h,
                                name: "manifestToken",
                                onPressEnter: C,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              d && (0, v.jsx)(t7, { children: d }),
            ],
          }),
        });
      }
      function re(e) {
        var n = e.label,
          t = e.value,
          r = e.checked,
          a = e.onChange;
        return (0, v.jsxs)("label", {
          className: "flex items-center gap-2",
          children: [
            (0, v.jsx)("input", {
              name: "manifestAuthType",
              type: "radio",
              value: t,
              checked: r,
              onChange: a,
              className: "text-green-600 focus:ring-green-600",
            }),
            n,
          ],
        });
      }
      function rn(e) {
        var n = e.loadManifestResult,
          t = e.onRefetch,
          r = e.onSubmitAuthInfo,
          a = e.onReadyToInstall,
          i = e.onInstallLocalhost,
          s = e.onClose,
          o = n.domain,
          l = n.manifestAccessToken,
          u = n.scrapeManifestResponse,
          c = n.apiValidationInfo,
          d = u.plugin,
          m = u.manifest_validation_info,
          f = (0, x._)((0, j.useState)(), 2),
          h = f[0],
          g = f[1],
          p = (0, x._)((0, j.useState)(!1), 2),
          y = p[0],
          k = p[1],
          w = (0, j.useRef)(null),
          C = (0, j.useRef)(null),
          _ = (0, j.useRef)(null),
          M = (0, t1.sd)(),
          N = M.fetchManifestAndSpec,
          P = M.isLoading,
          Z = (0, b.NL)(),
          T = d && (0, nc.cf)(d),
          I = (null == d ? void 0 : d.manifest.auth.type) === "service_http",
          S = (null == d ? void 0 : d.manifest.auth.type) === "oauth",
          D =
            (m.errors && m.errors.length > 0) ||
            ((null == c ? void 0 : c.errors) &&
              (null == c ? void 0 : c.errors.length) > 0),
          R = (0, j.useCallback)(
            (0, eu._)(function () {
              var e, n, u, c, m;
              return (0, ed.Jh)(this, function (f) {
                switch (f.label) {
                  case 0:
                    if (!D) return [3, 1];
                    return (
                      N({
                        domain: o,
                        manifestAccessToken: l,
                        onSuccess: t,
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
                    return (0, t1.GI)(d, Z, ["installedAip"]), i(d), [3, 15];
                  case 2:
                    if (!I) return [3, 8];
                    if (
                      !(null === (e = w.current) || void 0 === e
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
                      k(!0),
                      [
                        4,
                        et.ZP.setPluginServiceHttpToken({
                          id: d.id,
                          serviceAccessToken: w.current.value,
                        }),
                      ]
                    );
                  case 4:
                    return r(f.sent().verification_tokens), [3, 7];
                  case 5:
                    return f.sent(), g("Error setting access token."), [3, 7];
                  case 6:
                    return k(!1), [7];
                  case 7:
                    return [3, 15];
                  case 8:
                    if (!S) return [3, 14];
                    if (
                      ((c =
                        null === (n = C.current) || void 0 === n
                          ? void 0
                          : n.value),
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
                        et.ZP.setPluginOAuthClientCredentials({
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
                    return k(!1), [7];
                  case 13:
                    return [3, 15];
                  case 14:
                    d ? a(d) : s(), (f.label = 15);
                  case 15:
                    return [2];
                }
              });
            }),
            [I, S, d, o, l, D, T, Z, N, t, r, a, i, s]
          );
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: s,
          type: "success",
          title: "Found plugin",
          primaryButton: (0, v.jsx)(eT.ZP.Button, {
            title: D
              ? "Refetch manifest"
              : T
              ? "Install localhost plugin"
              : "Next",
            color: "primary",
            onClick: R,
            loading: y || P,
          }),
          secondaryButton:
            (D || I || S) &&
            (0, v.jsx)(eT.ZP.Button, {
              title: "Cancel",
              color: "neutral",
              onClick: s,
            }),
          children: (0, v.jsxs)(t4, {
            children: [
              (0, v.jsx)(t8.rC, { manifestValidationInfo: m }),
              c && (0, v.jsx)(t8.q6, { apiValidationInfo: c }),
              d && (0, v.jsx)(t2.Z, { plugin: d }),
              I &&
                !D &&
                (0, v.jsxs)("div", {
                  children: [
                    (0, v.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your service access token:",
                    }),
                    (0, v.jsx)("div", {
                      className: "mt-2",
                      children: (0, v.jsx)(tX.Z, {
                        ref: w,
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
                (0, v.jsxs)("div", {
                  children: [
                    (0, v.jsx)("div", {
                      className: "text-sm",
                      children: "Enter your OAuth credentials:",
                    }),
                    (0, v.jsx)("div", {
                      className: "mt-2",
                      children: (0, v.jsx)(tX.Z, {
                        ref: C,
                        name: "clientId",
                        placeholder: "Client ID",
                        autoComplete: "off",
                        onPressEnter: R,
                        autoFocus: !0,
                      }),
                    }),
                    (0, v.jsx)("div", {
                      className: "mt-2",
                      children: (0, v.jsx)(tX.Z, {
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
              h && (0, v.jsx)(t7, { children: h }),
            ],
          }),
        });
      }
      function rt(e) {
        var n = e.plugin,
          t = e.manifestAccessToken,
          r = e.verificationTokens,
          a = e.onReadyToInstall,
          i = e.onClose,
          s = (0, x._)((0, j.useState)(), 2),
          o = s[0],
          l = s[1],
          u = (0, x._)((0, j.useState)(!1), 2),
          c = u[0],
          d = u[1],
          m = (0, j.useCallback)(
            (0, eu._)(function () {
              var e, i;
              return (0, ed.Jh)(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      s.trys.push([0, 2, 3, 4]),
                      d(!0),
                      [
                        4,
                        et.ZP.scrapePluginManifest({
                          domain: n.domain,
                          manifestAccessToken: t,
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
            [n, t, r, a]
          );
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: i,
          type: "success",
          title: "Add verification token",
          primaryButton: (0, v.jsx)(eT.ZP.Button, {
            title: "Verify tokens",
            color: "primary",
            onClick: m,
            loading: c,
          }),
          secondaryButton: (0, v.jsx)(eT.ZP.Button, {
            title: "I'll add the tokens later",
            color: "neutral",
            onClick: i,
          }),
          children: (0, v.jsxs)(t4, {
            children: [
              (0, v.jsx)(t2.Z, { plugin: n }),
              (0, v.jsx)("div", {
                className: "text-sm",
                children:
                  "Add the following verification tokens to your manifest file:",
              }),
              (0, v.jsx)("pre", {
                className: "text-sm",
                children: JSON.stringify(r, null),
              }),
              o && (0, v.jsx)(t7, { children: o }),
            ],
          }),
        });
      }
      function rr(e) {
        var n = e.plugin,
          t = e.onClickInstall,
          r = e.onClose,
          a = (0, j.useCallback)(
            function () {
              t(n);
            },
            [n, t]
          );
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "Ready to install",
          primaryButton: (0, v.jsx)(eT.ZP.Button, {
            title: "Install for me",
            color: "primary",
            onClick: a,
          }),
          secondaryButton: (0, v.jsx)(eT.ZP.Button, {
            title: "Install later",
            color: "neutral",
            onClick: r,
          }),
          children: (0, v.jsx)(t4, {
            children: (0, v.jsxs)("div", {
              className: "text-sm",
              children: [
                "Your unverified plugin can now be installed by",
                " ",
                (0, v.jsx)("a", {
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
                (0, v.jsx)("a", {
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
      function ra(e) {
        var n = e.onConfirm,
          t = e.onClose;
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, v.jsx)(eT.ZP.Button, {
            title: "Continue",
            color: "primary",
            onClick: n,
          }),
          secondaryButton: (0, v.jsx)(eT.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, v.jsx)(t4, {
            children: (0, v.jsx)(t0.I, {
              children: (0, v.jsx)(t0.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding.",
              }),
            }),
          }),
        });
      }
      function ri(e) {
        var n = e.plugin,
          t = e.onInstall,
          r = e.onClose,
          a = (0, x._)((0, j.useState)(!1), 2),
          i = a[0],
          s = a[1],
          o = (0, x._)((0, j.useState)(n), 2),
          l = o[0],
          u = o[1],
          c = (0, j.useCallback)(function () {
            s(!0);
          }, []);
        return l
          ? i
            ? (0, v.jsx)(ro, { plugin: l, onInstall: t, onClose: r })
            : (0, v.jsx)(ra, { onConfirm: c, onClose: r })
          : (0, v.jsx)(rs, { onLoad: u, onClose: r });
      }
      function rs(e) {
        var n = e.onLoad,
          t = e.onClose,
          r = (0, j.useRef)(null),
          a = (0, x._)((0, j.useState)(!1), 2),
          i = a[0],
          s = a[1],
          o = (0, x._)((0, j.useState)(), 2),
          l = o[0],
          u = o[1];
        (0, j.useEffect)(function () {
          setTimeout(function () {
            var e;
            null === (e = r.current) || void 0 === e || e.focus();
          }, 50);
        }, []);
        var c = (0, j.useCallback)(
          (0, eu._)(function () {
            var e, t, a;
            return (0, ed.Jh)(this, function (i) {
              switch (i.label) {
                case 0:
                  if (
                    !(t =
                      null === (e = r.current) || void 0 === e
                        ? void 0
                        : e.value)
                  )
                    return u("Please provide a URL."), [2];
                  if ((0, nc.NB)(t))
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
                    [4, et.ZP.getPluginByDomain({ domain: t })]
                  );
                case 2:
                  return (
                    (a = i.sent()) ? n(a) : u("That plugin doesn't exist."),
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
          [n, s, u]
        );
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: "Install an unverified plugin",
          primaryButton: (0, v.jsx)(eT.ZP.Button, {
            title: "Find plugin",
            color: "primary",
            onClick: c,
            loading: i,
          }),
          secondaryButton: (0, v.jsx)(eT.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: t,
          }),
          children: (0, v.jsxs)(t4, {
            children: [
              (0, v.jsx)("div", {
                children:
                  "Please provide the website domain of the unverified plugin you'd like to install.",
              }),
              (0, v.jsx)(tX.Z, {
                ref: r,
                name: "url",
                placeholder: "openai.com",
                onPressEnter: c,
              }),
              l && (0, v.jsx)(t7, { children: l }),
            ],
          }),
        });
      }
      function ro(e) {
        var n = e.plugin,
          t = e.onInstall,
          r = e.onClose,
          a = (0, x._)((0, j.useState)(), 2),
          i = a[0],
          s = a[1],
          o = (0, x._)((0, j.useState)(!1), 2),
          l = o[0],
          u = o[1],
          c = (0, j.useRef)(null),
          d = (0, t1.U$)({
            onSuccess: function (e) {
              t(e), r();
            },
            onError: function (e) {
              s("Couldn't install plugin.");
            },
          }),
          m = (0, S.hz)(),
          f = n.manifest.name_for_human,
          h = "user_http" === n.manifest.auth.type,
          g = "oauth" === n.manifest.auth.type,
          p = (0, j.useCallback)(
            (0, eu._)(function () {
              var e, t;
              return (0, ed.Jh)(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (!g) return [3, 1];
                    if (m.has("new_plugin_oauth_endpoint"))
                      return (0, t1.Up)(n), [2];
                    return (
                      (e = (0, t1.nT)(n))
                        ? (window.location.href = e)
                        : s("Missing plugin configuration for ".concat(f, ".")),
                      [3, 8]
                    );
                  case 1:
                    if (!h) return [3, 7];
                    if (
                      !(null === (t = c.current) || void 0 === t
                        ? void 0
                        : t.value)
                    )
                      return s("Please provide your credentials."), [2];
                    r.label = 2;
                  case 2:
                    return (
                      r.trys.push([2, 4, 5, 6]),
                      u(!0),
                      [
                        4,
                        et.ZP.setPluginUserHttpToken({
                          id: n.id,
                          userAccessToken: c.current.value,
                        }),
                      ]
                    );
                  case 3:
                    return r.sent(), d(n.id), [3, 6];
                  case 4:
                    return r.sent(), s("Couldn't install plugin."), [3, 6];
                  case 5:
                    return u(!1), [7];
                  case 6:
                    return [3, 8];
                  case 7:
                    try {
                      u(!0), d(n.id);
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
            [m, n, f, g, h, d]
          );
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "Unverified plugin",
          primaryButton: (0, v.jsx)(eT.ZP.Button, {
            title: g ? "Log in with ".concat(f) : "Install plugin",
            color: "primary",
            onClick: p,
            loading: l,
          }),
          secondaryButton: (0, v.jsx)(eT.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: r,
          }),
          children: (0, v.jsxs)(t4, {
            children: [
              (0, v.jsx)(t2.Z, { plugin: n }),
              h &&
                (0, v.jsxs)("div", {
                  children: [
                    (0, v.jsx)("div", {
                      className: "text-sm",
                      children:
                        n.manifest.auth.instructions ||
                        "Enter your HTTP access token below:",
                    }),
                    (0, v.jsx)("div", {
                      className: "mt-2",
                      children: (0, v.jsx)(tX.Z, {
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
                (0, v.jsxs)("div", {
                  children: [
                    "You will be redirected to",
                    " ",
                    (0, v.jsx)("span", {
                      className: "font-medium",
                      children: f,
                    }),
                    " to log in.",
                  ],
                }),
              i && (0, v.jsx)(t7, { children: i }),
            ],
          }),
        });
      }
      var rl = t(96237),
        ru = t(86433),
        rc = t(95552),
        rd = t.n(rc),
        rm = t(76559),
        rf = t(74437);
      ((i = d || (d = {}))[(i.All = 0)] = "All"),
        (i[(i.Installed = 1)] = "Installed"),
        ((s = m || (m = {})).New = "newly_added"),
        (s.Popular = "most_popular");
      var rh = [
        { id: m.Popular, title: "Popular" },
        { id: m.New, title: "New" },
        { id: d.All, title: "All" },
        { id: d.Installed, title: "Installed" },
      ];
      function rg(e, n) {
        var t = n.findIndex(function (n) {
          return n.domain === e;
        });
        if (-1 !== t) {
          var r = n.splice(t, 1)[0];
          n.unshift(r);
        }
      }
      function rp(e, n) {
        return (0, j.useMemo)(
          function () {
            return "" !== n
              ? e
                  .map(function (e) {
                    return {
                      plugin: e,
                      score: (function (e, n) {
                        var t = n.toLowerCase(),
                          r = t.trim().split(/\s+/),
                          a = e.manifest.description_for_human.toLowerCase(),
                          i = e.manifest.name_for_human.toLowerCase(),
                          s = 0;
                        if (i === t || e.domain.toLowerCase() === t) return 1e3;
                        if (i.startsWith(t)) return 500;
                        if (i.includes(t)) return 100;
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
                      })(e, n),
                    };
                  })
                  .filter(function (e) {
                    return e.score > 0;
                  })
                  .sort(function (e, n) {
                    return n.score - e.score;
                  })
                  .map(function (e) {
                    return e.plugin;
                  })
              : e.sort(function (e, n) {
                  return e.manifest.name_for_human.localeCompare(
                    n.manifest.name_for_human
                  );
                });
          },
          [e, n]
        );
      }
      function rx(e) {
        var n = e.page,
          t = e.numPages,
          r = e.goToPage,
          a = n > 0,
          i = n < t - 1,
          s = (0, j.useCallback)(
            function () {
              r(Math.max(n - 1, 0));
            },
            [n, r]
          ),
          o = (0, j.useCallback)(
            function () {
              r(Math.min(n + 1, t - 1));
            },
            [n, t, r]
          ),
          l = [],
          u = !0,
          c = !1,
          d = void 0;
        try {
          for (
            var m,
              f = (function (e, n) {
                var t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 10,
                  r = Math.max(0, n - t + 1);
                if (0 === r) return rv(0, n);
                var a = rv(0, e),
                  i = rv(e + 1, n);
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
                return (0, eD._)(a).concat([e], (0, eD._)(i));
              })(n, t)[Symbol.iterator]();
            !(u = (m = f.next()).done);
            u = !0
          )
            !(function () {
              var e = m.value;
              e < 0
                ? l.push(
                    (0, v.jsx)(
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
                    (0, v.jsx)(
                      rS,
                      {
                        role: "button",
                        className: (0, U.Z)(
                          "flex h-5 w-5 items-center justify-center",
                          e === n &&
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
        return (0, v.jsxs)("div", {
          className:
            "flex flex-wrap gap-2 text-sm text-black/60 dark:text-white/70",
          children: [
            (0, v.jsxs)(rS, {
              role: "button",
              className: (0, U.Z)("flex items-center", !a && "opacity-50"),
              onClick: s,
              $disabled: !a,
              children: [(0, v.jsx)(es.ZP, { icon: k.YFh }), "Prev"],
            }),
            l,
            (0, v.jsxs)(rS, {
              role: "button",
              className: (0, U.Z)("flex items-center", !i && "opacity-50"),
              onClick: o,
              $disabled: !i,
              children: ["Next", (0, v.jsx)(es.ZP, { icon: k.Tfp })],
            }),
          ],
        });
      }
      function rv(e, n) {
        return Array.from({ length: n - e }, function (n, t) {
          return t + e;
        });
      }
      function rb(e) {
        var n = e.onClose,
          t = (0, ru.S)().setupMfa;
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: "Enable two-factor authentication",
          primaryButton: (0, v.jsx)(eT.ZP.Button, {
            title: "Enable two-factor authentication",
            color: "primary",
            onClick: t,
          }),
          secondaryButton: (0, v.jsx)(eT.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: n,
          }),
          children: (0, v.jsx)(t4, {
            children: (0, v.jsx)(t0.I, {
              children: (0, v.jsx)(t0.Z, {
                icon: "\uD83D\uDEA8",
                children:
                  "This plugin requires you to have two-factor authentication enabled for additional security. Please set up two-factor authentication and try again.",
              }),
            }),
          }),
        });
      }
      function ry() {
        var e = (0, O._)([
          "text-sm text-black/70 dark:text-white/70 whitespace-nowrap ",
          "",
        ]);
        return (
          (ry = function () {
            return e;
          }),
          e
        );
      }
      function rj() {
        var e = (0, O._)([
          "hidden h-4 border-l border-black/30 dark:border-white/30 sm:block",
        ]);
        return (
          (rj = function () {
            return e;
          }),
          e
        );
      }
      var rk =
          ((f = {}),
          (0, rl._)(f, R._G.Mobile, 8),
          (0, rl._)(f, R._G.Small, 4),
          (0, rl._)(f, R._G.Medium, 4),
          (0, rl._)(f, R._G.Large, 6),
          (0, rl._)(f, R._G.XLarge, 8),
          f),
        rw = (0, C.vU)({
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
        rC = m.Popular;
      function r_(e) {
        var n,
          t,
          r,
          a = e.onInstallWithAuthRequired,
          i = e.onClickInstallDeveloper,
          s = e.onClickDevelop,
          o = e.onClickAbout,
          l = e.onClose,
          u = (0, K.Z)(),
          c = (0, S.hz)(),
          m = (0, x._)((0, j.useState)(rC), 2),
          f = m[0],
          h = m[1],
          p = (0, x._)((0, j.useState)(""), 2),
          b = p[0],
          y = p[1],
          C = ((t = (n = (0, rf.C)()).isLoading),
          (r = n.installedPlugins),
          {
            availableFilters: (0, j.useMemo)(
              function () {
                return rh.filter(function (e) {
                  return e.id !== d.Installed || r.length > 0;
                });
              },
              [r]
            ),
            isLoading: t,
          }).availableFilters;
        (0, j.useEffect)(
          function () {
            C.some(function (e) {
              return e.id === f;
            }) || h(rC);
          },
          [f, C]
        );
        var _ = (0, j.useCallback)(function (e) {
          y(e), h(d.All);
        }, []);
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: l,
          size: "custom",
          className:
            "w-full max-w-7xl bg-gray-50 md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px]",
          type: "success",
          title: "Plugin store",
          closeButton: (0, v.jsx)(eT.ZP.CloseButton, { onClose: l }),
          children: (0, v.jsxs)(t4, {
            children: [
              C.length > 1 &&
                (0, v.jsxs)("div", {
                  className: "flex flex-wrap gap-3",
                  children: [
                    C.map(function (e) {
                      return (0, v.jsx)(
                        rN,
                        {
                          selected: f === e.id,
                          onClick: function () {
                            h(e.id);
                          },
                          children: e.title,
                        },
                        e.id
                      );
                    }),
                    (0, v.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, v.jsx)("div", {
                          className:
                            "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                          children: (0, v.jsx)(es.ZP, {
                            icon: k.jRj,
                            className:
                              "h-5 w-5 text-gray-500 dark:text-gray-400",
                          }),
                        }),
                        (0, v.jsx)(tX.Z, {
                          className: "pl-10",
                          autoFocus: !0,
                          type: "search",
                          placeholder: u.formatMessage(rw.searchPlaceholder),
                          value: b,
                          onChange: function (e) {
                            return _(e.target.value);
                          },
                          name: "search",
                        }),
                      ],
                    }),
                  ],
                }),
              (0, v.jsx)(rM, {
                filter: f,
                query: b,
                onInstallWithAuthRequired: a,
                children: (0, v.jsxs)("div", {
                  className: "flex flex-col items-center gap-2 sm:flex-row",
                  children: [
                    c.has("tools3_dev") &&
                      (0, v.jsxs)(v.Fragment, {
                        children: [
                          (0, v.jsx)(rS, {
                            onClick: i,
                            children: (0, v.jsx)(
                              w.Z,
                              (0, g._)({}, rw.installUnverifiedPlugin)
                            ),
                          }),
                          (0, v.jsx)(rD, {}),
                          (0, v.jsx)(rS, {
                            onClick: s,
                            children: (0, v.jsx)(
                              w.Z,
                              (0, g._)({}, rw.developPlugin)
                            ),
                          }),
                          (0, v.jsx)(rD, {}),
                        ],
                      }),
                    (0, v.jsx)(rS, {
                      onClick: o,
                      children: (0, v.jsx)(w.Z, (0, g._)({}, rw.aboutPlugins)),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function rM(e) {
        var n,
          t,
          r,
          a,
          i,
          s,
          o,
          l,
          u,
          c,
          f,
          h,
          g,
          b,
          y,
          k,
          w,
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
          A = e.query,
          F = e.onInstallWithAuthRequired,
          B = e.children,
          E = rk[(0, R.dQ)()],
          L = (0, x._)((0, j.useState)(0), 2),
          O = L[0],
          U = L[1],
          q =
            ((u = (o = { pageSize: E, filter: D, query: A, page: O }).filter),
            (c = o.query),
            (f = o.page),
            (h = o.pageSize),
            (g = (0, eh.kP)().session),
            (y = (b = (0, rf.C)()).installedPlugins),
            (k = b.isLoading),
            (C = (w = (0, rm.Z)()).approvedPlugins),
            (_ = w.isLoading),
            (M = w.approvedPluginsByCategory),
            (P = (function (e, n) {
              for (
                var t = (0, eD._)(e), r = rd()(n), a = t.length - 1;
                a > 0;
                a--
              ) {
                var i,
                  s = Math.floor(r() * (a + 1));
                (i = [t[s], t[a]]), (t[a] = i[0]), (t[s] = i[1]);
              }
              return (
                rg("retrieval.apps.openai.com", t),
                rg("retrieval-browsing.apps.openai.com", t),
                rg("api.openai.com", t),
                t
              );
            })(
              (N = rp(
                (0, j.useMemo)(
                  function () {
                    if (u === d.All) return C;
                    if (u && Object.values(m).includes(u)) {
                      var e, n;
                      return null !==
                        (n =
                          null === (e = M[u]) || void 0 === e
                            ? void 0
                            : e.items) && void 0 !== n
                        ? n
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
            (Z = rp(y, c)),
            (T = []),
            (I = !1),
            u === d.Installed
              ? ((T = Z), (I = k))
              : c
              ? ((T = N), (I = _))
              : ((T = P), (I = _)),
            {
              isLoading: I,
              items: ((t = (n = { page: f, items: T, pageSize: h }).page),
              (r = n.items),
              (a = n.pageSize),
              (i = Math.ceil(r.length / a)),
              (s = t * a),
              (S = { pagesTotal: i, pageItems: r.slice(s, s + a) })).pageItems,
              pagination: (0, p._)(S, ["pageItems"]),
            }),
          z = q.isLoading,
          Q = q.items,
          W = q.pagination.pagesTotal;
        (0, j.useEffect)(
          function () {
            U(0);
          },
          [D, A]
        );
        var H = (0, x._)((0, j.useState)(!1), 2),
          $ = H[0],
          G = H[1];
        return $
          ? (0, v.jsx)(rb, {
              onClose: function () {
                G(!1);
              },
            })
          : (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsx)(rP, {
                  plugins: Q,
                  numSkeletons: E,
                  query: A,
                  isLoading: z,
                  onInstallWithAuthRequired: F,
                  onRequestMfa: function () {
                    return G(!0);
                  },
                }),
                (0, v.jsxs)("div", {
                  className:
                    "flex flex-col flex-wrap items-center justify-center gap-6 sm:flex-row md:justify-between",
                  children: [
                    (0, v.jsx)("div", {
                      className:
                        "flex flex-1 justify-start max-lg:justify-center",
                      children:
                        W > 1 &&
                        (0, v.jsx)(rx, { page: O, numPages: W, goToPage: U }),
                    }),
                    B,
                  ],
                }),
              ],
            });
      }
      function rN(e) {
        var n = e.selected,
          t = e.onClick,
          r = e.children;
        return (0, v.jsx)(ei.z, {
          color: n ? "light" : "neutral",
          className: (0, U.Z)(
            "focus:ring-0",
            n && "hover:bg-gray-200",
            !n && "text-black/50"
          ),
          onClick: t,
          children: r,
        });
      }
      function rP(e) {
        var n = e.plugins,
          t = e.numSkeletons,
          r = e.isLoading,
          a = e.onInstallWithAuthRequired,
          i = e.onRequestMfa,
          s = e.query;
        if (0 === n.length && !r && s)
          return (0, v.jsxs)("div", {
            className:
              "flex h-[404px] flex-col items-center justify-center gap-4",
            children: [
              (0, v.jsx)("div", {
                className: "text-lg font-medium",
                children: (0, v.jsx)(
                  w.Z,
                  (0, ec._)((0, g._)({}, rw.noSearchResultsTitle), {
                    values: { query: s },
                  })
                ),
              }),
              (0, v.jsx)("div", {
                className: "text-sm text-black/50",
                children: (0, v.jsx)(w.Z, (0, g._)({}, rw.noSearchResultsHint)),
              }),
            ],
          });
        var o = r
          ? Array(t)
              .fill(0)
              .map(function (e, n) {
                return (0, v.jsx)(rT, {}, n);
              })
          : n.map(function (e) {
              return (0,
              v.jsx)(rZ, { plugin: e, onInstallWithAuthRequired: a, onRequestMfa: i }, e.id);
            });
        return (0, v.jsx)("div", {
          className:
            "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4",
          children: o,
        });
      }
      function rZ(e) {
        var n,
          t,
          r = e.plugin,
          a = e.onInstallWithAuthRequired,
          i = e.onRequestMfa,
          s = (0, x._)((0, j.useState)(!1), 2),
          o = s[0],
          l = s[1],
          u = (0, x._)((0, j.useState)(!1), 2),
          c = u[0],
          d = u[1],
          m = (0, t1.U$)({
            onSuccess: function (e) {
              (0, tK.wu)(e.id);
            },
            onError: function (e) {
              console.error(e),
                tY.m.danger(
                  "Error installing ".concat(r.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              l(!1);
            },
          }),
          f = (0, t1.qo)({
            onSuccess: function () {},
            onError: function (e) {
              console.error(e),
                tY.m.danger(
                  "Error uninstalling ".concat(r.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              d(!1);
            },
          }),
          h = (0, eh.kP)().session,
          g = (0, S.hz)(),
          p = (0, ru.S)().isUsernamePassword,
          b = (0, j.useCallback)(
            function () {
              var e,
                n = r.manifest.auth.type;
              if (
                !("none" === n || "service_http" === n) &&
                !(null == h
                  ? void 0
                  : null === (e = h.user) || void 0 === e
                  ? void 0
                  : e.mfa) &&
                g.has(er.i) &&
                p
              ) {
                i();
                return;
              }
              if ("oauth" === n) {
                if (g.has("new_plugin_oauth_endpoint")) {
                  (0, t1.Up)(r);
                  return;
                }
                var t = (0, t1.nT)(r);
                t
                  ? (window.location.href = t)
                  : tY.m.danger(
                      "Missing plugin configuration for ".concat(
                        r.manifest.name_for_human,
                        "."
                      )
                    );
              } else "user_http" === n ? a(r) : (l(!0), m(r.id));
            },
            [r, m, a, i, p, h, g]
          ),
          y = (0, j.useCallback)(
            function () {
              d(!0), f(r.id);
            },
            [r, f]
          );
        return (
          (t =
            o || c
              ? (0, v.jsxs)(ei.z, {
                  color: "light",
                  className: "bg-green-100 hover:bg-green-100",
                  children: [
                    o ? "Installing" : "Uninstalling",
                    (0, v.jsx)(eS.Z, {}),
                  ],
                })
              : (
                  null === (n = r.user_settings) || void 0 === n
                    ? void 0
                    : n.is_installed
                )
              ? (0, v.jsxs)(ei.z, {
                  color: "light",
                  className: "hover:bg-gray-200",
                  onClick: y,
                  children: ["Uninstall", (0, v.jsx)(es.ZP, { icon: k.$Rx })],
                })
              : (0, v.jsxs)(ei.z, {
                  onClick: b,
                  children: ["Install", (0, v.jsx)(es.ZP, { icon: k.wzc })],
                })),
          (0, v.jsx)(rI, {
            logo: (0, v.jsx)(tp.Z, {
              url: r.manifest.logo_url,
              name: r.manifest.name_for_human,
              size: "100%",
              large: !0,
            }),
            tag: (0, nc.cf)(r)
              ? (0, v.jsx)(nC, {})
              : "approved" !== r.status
              ? (0, v.jsx)(nw, {})
              : void 0,
            title: (0, v.jsx)("div", {
              className: "max-w-full truncate text-lg leading-6",
              children: r.manifest.name_for_human,
            }),
            button: t,
            description: r.manifest.description_for_human,
          })
        );
      }
      function rT() {
        return (0, v.jsx)(rI, {
          logo: (0, v.jsx)("div", {
            className: "h-full w-full rounded-[5px] bg-gray-300",
          }),
          title: (0, v.jsx)("div", {
            className: "h-[19px] w-[103px] rounded-[5px] bg-gray-100",
          }),
          button: (0, v.jsx)("div", {
            className: "h-[36px] w-[103px] rounded-[5px] bg-gray-200",
          }),
          description: (0, v.jsxs)("div", {
            className: "flex flex-col gap-1.5",
            children: [
              (0, v.jsx)("div", {
                className: "h-[14px] w-[209px] rounded-[5px] bg-gray-100",
              }),
              (0, v.jsx)("div", {
                className: "h-[14px] w-[218px] rounded-[5px] bg-gray-100",
              }),
              (0, v.jsx)("div", {
                className: "h-[14px] w-[184px] rounded-[5px] bg-gray-100",
              }),
            ],
          }),
        });
      }
      function rI(e) {
        var n = e.logo,
          t = e.tag,
          r = e.title,
          a = e.button,
          i = e.description;
        return (0, v.jsxs)("div", {
          className:
            "flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-white/20 dark:bg-gray-900",
          children: [
            (0, v.jsxs)("div", {
              className: "flex gap-4",
              children: [
                (0, v.jsx)("div", {
                  className: "h-[70px] w-[70px] shrink-0",
                  children: n,
                }),
                (0, v.jsxs)("div", {
                  className:
                    "flex min-w-0 flex-col items-start justify-between",
                  children: [
                    t
                      ? (0, v.jsxs)("div", {
                          className: "flex items-center gap-1.5",
                          children: [t, r],
                        })
                      : r,
                    a,
                  ],
                }),
              ],
            }),
            (0, v.jsx)("div", {
              className:
                "h-[60px] text-sm text-black/70 line-clamp-3 dark:text-white/70",
              children: i,
            }),
          ],
        });
      }
      var rS = X.Z.button(ry(), function (e) {
          return e.$disabled
            ? "opacity-50 cursor-default"
            : "hover:text-black/50 dark:hover:text-white/50";
        }),
        rD = X.Z.div(rj());
      function rR(e) {
        var n = e.allowClose,
          t = e.onConfirm,
          r = e.onClose;
        return (0, v.jsx)(eI.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: "About plugins",
          primaryButton: (0, v.jsx)(eT.ZP.Button, {
            title: "OK",
            color: "primary",
            onClick: t,
          }),
          secondaryButton:
            n &&
            (0, v.jsx)(eT.ZP.Button, {
              title: "Cancel",
              color: "neutral",
              onClick: r,
            }),
          children: (0, v.jsx)(t4, {
            children: (0, v.jsxs)(t0.I, {
              children: [
                (0, v.jsx)(t0.Z, {
                  icon: "\uD83D\uDEA8",
                  children:
                    "Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation.",
                }),
                (0, v.jsx)(t0.Z, {
                  icon: "\uD83C\uDF10",
                  children:
                    "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send your conversation and the country or state you're in to the plugin.",
                }),
                (0, v.jsx)(t0.Z, {
                  icon: "\uD83E\uDDE0",
                  children:
                    "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled.",
                }),
              ],
            }),
          }),
        });
      }
      var rA = "oai/apps/hasSeenPluginsDisclaimer";
      function rF(e) {
        var n = e.onInstall,
          t = e.onClose,
          r = (0, x._)((0, j.useState)(!!el.m.getItem(rA)), 2),
          a = r[0],
          i = r[1],
          s = (0, x._)((0, j.useState)(!1), 2),
          o = s[0],
          l = s[1],
          u = (0, x._)((0, j.useState)(!1), 2),
          c = u[0],
          d = u[1],
          m = (0, x._)((0, j.useState)(), 2),
          f = m[0],
          h = m[1],
          g = (0, x._)((0, j.useState)(!1), 2),
          p = g[0],
          b = g[1],
          y = (0, j.useCallback)(function () {
            i(!0), l(!1), el.m.setItem(rA, !0);
          }, []),
          k = (0, j.useCallback)(function (e) {
            h(e), d(!0);
          }, []),
          w = (0, j.useCallback)(function () {
            d(!0);
          }, []),
          C = (0, j.useCallback)(function () {
            b(!0);
          }, []),
          _ = (0, j.useCallback)(function () {
            l(!0);
          }, []),
          M = (0, j.useCallback)(
            function (e) {
              (0, tK.wu)(e.id), t(), n(e);
            },
            [n, t]
          ),
          N = (0, j.useCallback)(
            function () {
              h(void 0), d(!1), t();
            },
            [t]
          ),
          P = (0, j.useCallback)(
            function () {
              b(!1), t();
            },
            [t]
          );
        return !a || o
          ? (0, v.jsx)(rR, { allowClose: !a, onConfirm: y, onClose: t })
          : c
          ? (0, v.jsx)(ri, { plugin: f, onInstall: M, onClose: N })
          : p
          ? (0, v.jsx)(t6, {
              onClickInstall: k,
              onInstallLocalhost: M,
              onClose: P,
            })
          : (0, v.jsx)(r_, {
              onInstallWithAuthRequired: k,
              onClickInstallDeveloper: w,
              onClickDevelop: C,
              onClickAbout: _,
              onClose: t,
            });
      }
      function rB() {
        var e = (0, O._)([
          "flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white",
        ]);
        return (
          (rB = function () {
            return e;
          }),
          e
        );
      }
      function rE(e) {
        var n,
          t = e.theme,
          r = void 0 === t ? "default" : t,
          a = (0, x._)((0, j.useState)(!1), 2),
          i = a[0],
          s = a[1],
          o = (0, x._)((0, j.useState)(!1), 2),
          l = o[0],
          u = o[1],
          c = (0, y.useRouter)(),
          d = (0, rf.C)(),
          m = d.installedPlugins,
          f = d.isLoading,
          h = (0, tK.p0)(),
          g = (0, j.useRef)(null);
        (0, j.useEffect)(
          function () {
            if (!f) {
              var e = c.query,
                n = e.loginAip,
                t = e.loginSuccess,
                r = (0, p._)(e, ["loginAip", "loginSuccess"]);
              if (n) {
                var a,
                  i,
                  s = m.find(function (e) {
                    return e.id === n;
                  });
                s && "true" === t
                  ? ((0, tK.wu)(c.query.loginAip),
                    null === (a = g.current) || void 0 === a || a.open())
                  : tY.m.warning(
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
        var b = (0, j.useCallback)(function () {
            var e;
            null === (e = g.current) || void 0 === e || e.open();
          }, []),
          w = (0, j.useCallback)(function () {
            s(!1);
          }, []),
          C = (0, x._)((0, j.useState)(h), 2),
          _ = C[0],
          M = C[1],
          N = (0, j.useCallback)(
            function (e) {
              if (e.length > tK.hZ)
                u(!0),
                  setTimeout(function () {
                    u(!1);
                  }, 600);
              else {
                var n = e.filter(function (e) {
                    return !h.find(function (n) {
                      return n.id === e.id;
                    });
                  }),
                  t = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (
                    var i, s = tK.iO[Symbol.iterator]();
                    !(t = (i = s.next()).done);
                    t = !0
                  ) {
                    var o = (function () {
                      var e = i.value,
                        t = h.find(function (n) {
                          return e.includes(n.domain);
                        });
                      if (t) {
                        var r = e.find(function (e) {
                            return e !== t.domain;
                          }),
                          a = n.find(function (e) {
                            return e.domain === r;
                          });
                        if (a)
                          return (
                            tY.m.warning(
                              "You can't enable "
                                .concat(a.manifest.name_for_human, " while ")
                                .concat(
                                  t.manifest.name_for_human,
                                  " is enabled."
                                )
                            ),
                            { v: void 0 }
                          );
                      }
                    })();
                    if ("object" === (0, tj._)(o)) return o.v;
                  }
                } catch (e) {
                  (r = !0), (a = e);
                } finally {
                  try {
                    t || null == s.return || s.return();
                  } finally {
                    if (r) throw a;
                  }
                }
                (0, tK.dT)(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              }
            },
            [h]
          ),
          P = (0, j.useCallback)(function (e) {
            var n;
            null === (n = g.current) || void 0 === n || n.close(),
              "store" === e && s(!0);
          }, []),
          Z = (0, j.useCallback)(
            function () {
              M(h),
                eE.m.logEvent("chatgpt_plugin_chooser_opened", null, {
                  num_enabled_plugins: "".concat(h.length),
                });
            },
            [h]
          ),
          T = (0, j.useCallback)(
            function () {
              var e = _.filter(function (e) {
                  return !h.find(function (n) {
                    return n.id === e.id;
                  });
                }),
                n = h.filter(function (e) {
                  return !_.find(function (n) {
                    return n.id === e.id;
                  });
                }),
                t = !0,
                r = !1,
                a = void 0;
              try {
                for (
                  var i, s = n[Symbol.iterator]();
                  !(t = (i = s.next()).done);
                  t = !0
                ) {
                  var o = i.value;
                  eE.m.logEvent("chatgpt_plugin_enabled", null, {
                    plugin_id: o.id,
                  });
                }
              } catch (e) {
                (r = !0), (a = e);
              } finally {
                try {
                  t || null == s.return || s.return();
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
                  eE.m.logEvent("chatgpt_plugin_disabled", null, {
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
              customTags: (0, nc.cf)(e)
                ? (0, v.jsx)(nC, {})
                : "approved" !== e.status
                ? (0, v.jsx)(nw, {})
                : void 0,
              imageUrl: e.manifest.logo_url,
            };
          }),
          S = I.filter(function (e) {
            return h.find(function (n) {
              return n.id === e.value.id;
            });
          }),
          D = "".concat(0 === h.length ? "No" : h.length, " plugins enabled");
        if (h.length > 0 && h.length < 6) {
          var R = h.map(function (e, n) {
            return (0,
            v.jsx)(tp.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 24 }, n);
          });
          D = (0, v.jsx)("div", { className: "flex gap-2", children: R });
        }
        var A = [{ id: "store", label: "Plugin store", icon: k.Rgz }];
        m.length > tK.hZ &&
          (n = (0, v.jsxs)(rL, {
            className: (0, U.Z)(
              "transition-colors duration-300",
              l && "bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800"
            ),
            children: [h.length, "/", tK.hZ, " Enabled"],
          }));
        var F = (0, v.jsxs)(v.Fragment, {
          children: [
            (0, v.jsx)(rL, { children: "Loading..." }),
            (0, v.jsx)(tL, { showCheckbox: !0, theme: r }),
            (0, v.jsx)(tL, { showCheckbox: !0, theme: r }),
            (0, v.jsx)(tL, { showCheckbox: !0, theme: r }),
            (0, v.jsx)(tL, { showCheckbox: !0, theme: r }),
            (0, v.jsx)(tL, { showCheckbox: !0, theme: r }),
          ],
        });
        return (0, v.jsxs)(v.Fragment, {
          children: [
            (0, v.jsx)(tR, {
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
              loadingState: F,
              header: n,
              theme: "mini" === r ? "mini" : "default",
            }),
            i && (0, v.jsx)(rF, { onInstall: b, onClose: w }),
          ],
        });
      }
      var rL = X.Z.div(rB()),
        rO = t(48101);
      function rU(e) {
        var n,
          t = e.currentModelId,
          r = (0, S.hz)(),
          a = (0, nR.fm)(),
          i = (0, nR.B9)(),
          s = void 0 !== t ? i.get(t) : void 0,
          o = (0, eA.Fl)().isPluginsAvailable,
          l = (0, nR.iu)();
        return r.has("model_switcher") && l.size > 1 && s
          ? (0, v.jsxs)("div", {
              className:
                "relative flex flex-col items-stretch justify-center gap-2 sm:items-center",
              children: [
                (0, v.jsx)(ty, { currentModel: s, onModelChange: a }),
                o &&
                  (null == s
                    ? void 0
                    : null === (n = s.enabledTools) || void 0 === n
                    ? void 0
                    : n.includes("tools3")) &&
                  (0, v.jsx)(rE, { theme: "mini" }),
              ],
            })
          : null;
      }
      var rq = function (e) {
          var n,
            t,
            r,
            a = e.currentModelConfig,
            i = e.clientThreadId,
            s = e.icon,
            o = (0, j.useContext)(D.gB),
            l = (0, _.Qi)(i),
            u = (0, S.hz)().has(er.b5),
            c = (0, _.Ro)(i);
          void 0 === c && (c = a);
          var d = c.tags
              .filter(function (e) {
                return tD.includes(e);
              })
              .map(function (e) {
                return tU(e);
              }),
            m = (0, nP.v)();
          if (m.length > 0) {
            var f = m.map(function (e, n) {
              return (0,
              v.jsx)(tp.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 16 }, n);
            });
            r = (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsx)("div", { children: "Enabled plugins:" }),
                f,
              ],
            });
          }
          var h = (0, y.useRouter)(),
            g =
              o &&
              (null === (n = h.query) || void 0 === n
                ? void 0
                : null === (t = n.shareParams) || void 0 === t
                ? void 0
                : t[1]) === "moderate",
            p = (0, I.tN)(function (e) {
              return e.activeModals.has(I.B.DownloadMessages);
            }),
            x = _.tQ.getThreadCurrentLeafId(i),
            b = (0, _.u9)(i, x),
            k = (0, j.useCallback)(
              function () {
                u && (0, rO.Ub)(i, b);
              },
              [i, u, b]
            );
          return (0, v.jsxs)(v.Fragment, {
            children: [
              u &&
                (0, v.jsx)(eI.Z, {
                  type: "success",
                  isOpen: p,
                  onClose: function () {
                    I.vm.closeModal(I.B.DownloadMessages);
                  },
                  closeButton: (0, v.jsx)(eT.ZP.CloseButton, {
                    onClose: function () {
                      I.vm.closeModal(I.B.DownloadMessages);
                    },
                  }),
                  primaryButton: (0, v.jsx)(eT.ZP.Button, {
                    onClick: k,
                    children: "Download",
                  }),
                  title: "Download chat debug info",
                  secondaryButton: (0, v.jsx)(eT.ZP.Button, {
                    onClick: function () {
                      I.vm.closeModal(I.B.DownloadMessages);
                    },
                    children: "Cancel",
                  }),
                }),
              (0, v.jsxs)("div", {
                className: (0, U.Z)(
                  "flex flex-wrap items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300",
                  o ? "sticky top-0 z-50" : ""
                ),
                onClick: function (e) {
                  u &&
                    !o &&
                    3 === e.detail &&
                    I.vm.openModal(I.B.DownloadMessages);
                },
                children: [
                  o &&
                    (0, v.jsxs)("div", {
                      className: "flex items-center justify-center gap-1",
                      children: [
                        (0, v.jsx)("span", { children: "Shared Chat" }),
                        (0, v.jsx)("span", {
                          className: "px-1",
                          children: "•",
                        }),
                      ],
                    }),
                  !o && void 0 !== s && (0, v.jsx)(es.ZP, { icon: s }),
                  "Model: ",
                  a.title,
                  d,
                  r
                    ? (0, v.jsxs)("div", {
                        className: "flex items-center justify-center gap-1",
                        children: [
                          (0, v.jsx)("span", {
                            className: "px-1",
                            children: "•",
                          }),
                          r,
                        ],
                      })
                    : null,
                  g &&
                    (0, v.jsxs)("div", {
                      className: "flex items-center justify-center gap-1",
                      children: [
                        (0, v.jsx)("span", {
                          className: "px-1",
                          children: "•",
                        }),
                        (0, v.jsx)("strong", { children: "MODERATION VIEW" }),
                      ],
                    }),
                  !o &&
                    null != l &&
                    (0, v.jsxs)("div", {
                      className: "flex items-center justify-center gap-1",
                      children: [
                        (0, v.jsx)("span", {
                          className: "px-1",
                          children: "•",
                        }),
                        (0, v.jsx)("span", { children: "Custom user info" }),
                        (0, v.jsx)(rz, { clientThreadId: i }),
                      ],
                    }),
                ],
              }),
            ],
          });
        },
        rz = function (e) {
          var n = e.clientThreadId,
            t = (0, _.Qi)(n);
          return null === t
            ? null
            : (0, v.jsxs)(eo.fC, {
                children: [
                  (0, v.jsx)(eo.xz, {
                    asChild: !0,
                    children: (0, v.jsxs)("div", {
                      className: "cursor-pointer pt-0.5",
                      children: [
                        (0, v.jsx)(es.ZP, {
                          className: "text-gray-500 dark:text-gray-300",
                          strokeWidth: 0,
                          icon: ef.frK,
                        }),
                        (0, v.jsx)(tg.T, {
                          children: "Custom user info details",
                        }),
                      ],
                    }),
                  }),
                  (0, v.jsx)(eo.h_, {
                    children: (0, v.jsx)(eo.VY, {
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
                      children: t,
                    }),
                  }),
                ],
              });
        };
      function rQ() {
        var e = (0, O._)(["flex flex-col text-sm dark:bg-gray-800"]);
        return (
          (rQ = function () {
            return e;
          }),
          e
        );
      }
      function rW() {
        var e = (0, O._)(["h-32 md:h-48 flex-shrink-0"]);
        return (
          (rW = function () {
            return e;
          }),
          e
        );
      }
      function rH() {
        var e = (0, O._)([
          "cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
        ]);
        return (
          (rH = function () {
            return e;
          }),
          e
        );
      }
      function r$() {
        var e = (0, O._)([
          "px-2 relative w-full flex flex-col h-full py-2 md:py-6",
        ]);
        return (
          (r$ = function () {
            return e;
          }),
          e
        );
      }
      function rG() {
        var e = (0, O._)([
          "text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow",
        ]);
        return (
          (rG = function () {
            return e;
          }),
          e
        );
      }
      var rV = (0, C.vU)({
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
            "This conversation may reflect the link creator’s chat preferences, which aren’t shared and can meaningfully change how the model responds.",
          description:
            "Disclaimer about our lack of support for custom profiles with shared links",
        },
        userContextCustomProfileAndCodeInterpreterSupportDisclaimer: {
          id: "sharedConversation.userContextCustomProfileAndCodeInterpreterSupportDisclaimer",
          defaultMessage:
            "This conversation may reflect the link creator’s chat preferences, which aren’t shared and can meaningfully change how the model responds. The chat contains files or images produced by Code Interpreter which are not yet visible in Shared Chats.",
          description:
            "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links and not sharing custom profile data",
        },
      });
      function rJ(e) {
        var n = e.clientThreadId,
          t = (0, _.qA)(n),
          r = (0, _.je)(n),
          a = (0, _.qN)(function (e) {
            return _.iN.getThreadCreateTime(n, e);
          }),
          i = (0, _.JI)(n),
          s = (0, j.useMemo)(
            function () {
              return eZ(i);
            },
            [i]
          ),
          o = (0, _.aS)(n);
        return (0, v.jsxs)("div", {
          className:
            "mb-1 border-b border-gray-100 pt-3 sm:mb-2 sm:pb-6 sm:pt-8",
          children: [
            (0, v.jsx)("h1", {
              className:
                "max-w-md text-3xl font-semibold leading-tight text-gray-700 dark:text-gray-100 sm:text-4xl",
              children: t,
            }),
            (null != r || null != a) &&
              (0, v.jsxs)("div", {
                className: "pt-3 text-base text-gray-400 sm:pt-4",
                children: [
                  null != r && (0, v.jsx)("span", { children: r }),
                  null != r &&
                    null != a &&
                    (0, v.jsx)("span", { className: "px-2", children: "•" }),
                  null != a &&
                    (0, v.jsx)(C.Ji, {
                      value: a,
                      month: "long",
                      year: "numeric",
                      day: "numeric",
                    }),
                ],
              }),
            (0, v.jsx)(rY, {
              shouldShowCodeInterpreterDisclaimer: s,
              shouldShowUserContextCustomProfileDisclaimer: o,
            }),
          ],
        });
      }
      var rY = function (e) {
        var n = e.shouldShowCodeInterpreterDisclaimer,
          t = e.shouldShowUserContextCustomProfileDisclaimer;
        return n && t
          ? (0, v.jsx)("div", {
              className: "mt-4",
              children: (0, v.jsx)(ao, {
                children: (0, v.jsx)(
                  w.Z,
                  (0, g._)(
                    {},
                    rV.userContextCustomProfileAndCodeInterpreterSupportDisclaimer
                  )
                ),
              }),
            })
          : (0, v.jsxs)(v.Fragment, {
              children: [
                n &&
                  (0, v.jsx)("div", {
                    className: "mt-4",
                    children: (0, v.jsx)(ao, {
                      children: (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, rV.codeInterpreterSupportDisclaimer)
                      ),
                    }),
                  }),
                t &&
                  (0, v.jsx)("div", {
                    className: "mt-4",
                    children: (0, v.jsx)(ao, {
                      children: (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, rV.userContextCustomProfileDisclaimer)
                      ),
                    }),
                  }),
              ],
            });
      };
      function rK(e) {
        var n,
          t = e.onChangeItemInView,
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
          b = (0, j.useContext)(D.gB),
          y = (0, eR.useScrollToBottom)(),
          w = (0, x._)((0, eR.useSticky)(), 1)[0],
          C = (0, S.hz)(),
          M = (0, eA.Fl)().isBetaFeaturesUiEnabled,
          N = (0, _.Kt)(u),
          P = (0, S.$T)(),
          Z = (0, nR.iu)(),
          T = (0, nR.ZL)(),
          R = (0, nR.Xy)(f, u),
          A = (0, I.tN)(function (e) {
            return e.isDesktopNavCollapsed;
          }),
          F = C.has("model_switcher") && Z.size > 1,
          B = d && !P && F,
          E = (0, x._)((0, j.useState)(!1), 2),
          L = E[0],
          O = E[1],
          q = (0, tb.Ri)(R.id),
          z = (0, _.U0)(u, c),
          Q = (0, _.UL)(u).initialConversationTurns,
          W = (0, _.hW)(u),
          H = !b && W;
        (0, j.useEffect)(
          function () {
            if (N) {
              var e = setTimeout(function () {
                O(!0);
              }, 1e3);
              return function () {
                clearTimeout(e);
              };
            }
            O(!1);
          },
          [N]
        );
        var $ = C.has(er.FZ),
          G =
            !M && R.tags.includes(nR.S.GPT_4)
              ? "black"
              : null !== (n = null == q ? void 0 : q.backgroundColor) &&
                void 0 !== n
              ? n
              : void 0,
          V = (0, eD._)(Array(z).keys()).map(function (e) {
            return (0,
            v.jsx)(nG, { isFinalTurn: e === z - 1, turnIndex: e, clientThreadId: u, conversationLeafId: c, onChangeItemInView: t, onChangeRating: i, onRequestMoreCompletions: r, onDeleteNode: s, onRequestCompletion: o, onUpdateNode: a, onHandleChangeVariantFeedbackInlineComparisonRating: l, activeRequests: m, currentModelId: R.id, showInlineEmbeddedDisplay: h, initiallyHighlightedMessageId: g, avatarColor: G, includeChatPreferencesMismatchDisclaimer: null != Q && H && e === Q.length - 1 }, e);
          });
        return (0, v.jsxs)(v.Fragment, {
          children: [
            B &&
              (0, v.jsxs)(r2, {
                children: [
                  (0, v.jsx)(rU, { currentModelId: R.id }),
                  (0, v.jsxs)(r3, {
                    children: ["ChatGPT", (0, v.jsx)(eF.ZP, {})],
                  }),
                ],
              }),
            (0, v.jsxs)(rX, {
              children: [
                d && !P && !T && !F && (0, v.jsx)(th, { promptTextareaRef: p }),
                L && (0, v.jsx)(eS.Z, { className: "mt-4 self-center" }),
                !d &&
                  (b || (!P && F)) &&
                  !h &&
                  (0, v.jsx)(rq, {
                    icon: M ? (null == q ? void 0 : q.icon) : void 0,
                    currentModelConfig: R,
                    clientThreadId: u,
                  }),
                $
                  ? V.length > 0 &&
                    (0, v.jsx)("div", {
                      className: (0, U.Z)(
                        "flex flex-col items-center",
                        A ? "sm:px-14" : "sm:px-4"
                      ),
                      children: (0, v.jsxs)("div", {
                        className: "w-full max-w-[44rem] pt-4",
                        children: [
                          b && !h && (0, v.jsx)(rJ, { clientThreadId: u }),
                          V,
                        ],
                      }),
                    })
                  : (0, v.jsxs)(v.Fragment, {
                      children: [
                        b &&
                          !h &&
                          (0, v.jsx)("div", {
                            className:
                              "mx-auto w-full p-4 md:max-w-2xl lg:max-w-xl lg:px-0 xl:max-w-3xl",
                            children: (0, v.jsx)(rJ, { clientThreadId: u }),
                          }),
                        V,
                      ],
                    }),
                !B && !h && (0, v.jsx)(r0, {}),
              ],
            }),
            !w &&
              !h &&
              (0, v.jsx)(r1, {
                onClick: y,
                children: (0, v.jsx)(es.ZP, { icon: k.tv1, className: "m-1" }),
              }),
          ],
        });
      }
      var rX = X.Z.div(rQ()),
        r0 = X.Z.div(rW()),
        r1 = X.Z.button(rH()),
        r2 = X.Z.div(r$()),
        r3 = X.Z.h1(rG());
      function r5() {
        var e = (0, O._)([
          "relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch",
        ]);
        return (
          (r5 = function () {
            return e;
          }),
          e
        );
      }
      function r4() {
        var e = (0, O._)(["grow flex-1 overflow-hidden"]);
        return (
          (r4 = function () {
            return e;
          }),
          e
        );
      }
      function r7() {
        var e = (0, O._)([
          "w-full mb-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden bg-gray-50",
        ]);
        return (
          (r7 = function () {
            return e;
          }),
          e
        );
      }
      function r8() {
        var e = (0, O._)([
          "flex p-4 bg-white dark:bg-gray-800/90 border-t border-gray-100 dark:border-gray-700 rounded-b-lg w-full h-full\n",
          "\n",
        ]);
        return (
          (r8 = function () {
            return e;
          }),
          e
        );
      }
      function r6() {
        var e = (0, O._)([
          "flex w-full items-center justify-left gap-2 min-h-[1.5rem]",
        ]);
        return (
          (r6 = function () {
            return e;
          }),
          e
        );
      }
      function r9() {
        var e = (0, O._)([
          "border-none focus:ring-gray-200 dark:focus:ring-gray-600 bg-transparent py-0.5 -my-0.5 pl-1 -ml-1 w-full",
        ]);
        return (
          (r9 = function () {
            return e;
          }),
          e
        );
      }
      function ae() {
        var e = (0, O._)(["flex-none h-full mt-auto mb-auto"]);
        return (
          (ae = function () {
            return e;
          }),
          e
        );
      }
      var an = (0, C.vU)({
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
          defaultMessage: "Your chat preferences won’t be shared with viewers.",
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
      function at(e) {
        var n = e.serverThreadId,
          t = e.activeRequests,
          r = (0, _.oq)(n),
          a = (0, x._)(
            (0, j.useState)(function () {
              return (0, eg.Z)(function (e, n) {
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
          i = 0 === t.size && "root" !== r,
          s = (0, j.useRef)(!1);
        return (
          (0, j.useEffect)(
            function () {
              if (i && !s.current) {
                s.current = !0;
                var e = _.tQ.getThreadCurrentLeafId(n),
                  t = _.tQ.getTree(n).getMessageId(e);
                et.ZP.createShareLink({
                  current_node_id: t,
                  conversation_id: n,
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
                    e instanceof ev.Q0 && "string" == typeof e.message
                      ? a.setState({ linkError: e.message })
                      : (tY.m.danger(
                          "Failed to copy link to clipboard - could not create link"
                        ),
                        I.vm.closeSharingModal());
                  });
              }
            },
            [i]
          ),
          (0, v.jsx)(ep.Provider, {
            value: a,
            children: (0, v.jsx)(ai, (0, g._)({}, e)),
          })
        );
      }
      function ar(e) {
        return (
          !0 === e.has_been_auto_blocked ||
          !0 === e.has_been_auto_moderated ||
          !0 === e.has_been_blocked
        );
      }
      var aa =
        "https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq";
      function ai(e) {
        var n,
          t,
          r,
          a,
          i,
          s = e.serverThreadId,
          o = e.activeRequests,
          l = e.currentThreadModel,
          u = function () {
            (!X ||
              window.confirm(c.formatMessage(an.confirmCloseWithChanges))) &&
              I.vm.closeSharingModal();
          },
          c = (0, K.Z)(),
          d = (0, j.useRef)(null),
          m = (0, x._)((0, j.useState)(!1), 2),
          f = m[0],
          h = m[1],
          p = (0, x._)((0, j.useState)(!1), 2),
          b = p[0],
          y = p[1],
          M = (0, x._)((0, j.useState)(!1), 2),
          N = M[0],
          P = M[1],
          Z = (0, j.useContext)(ep),
          T = ex(function (e) {
            return e.title;
          }),
          S = ex(function (e) {
            return e.shareLinkId;
          }),
          R = ex(function (e) {
            return e.shareLinkUrl;
          }),
          A = ex(function (e) {
            return e.isAnonymous;
          }),
          F = ex(function (e) {
            return e.initiallyHighlightedMessageId;
          }),
          B = ex(function (e) {
            return e.currentNodeId;
          }),
          E = ex(function (e) {
            return e.isPublic;
          }),
          L =
            ex(function (e) {
              return e.linkAlreadyExisted;
            }) && E,
          O = ex(function (e) {
            return e.linkError;
          }),
          q = ex(function (e) {
            return e.moderationState;
          }),
          z = null != q && ar(q),
          Q = (0, j.useRef)(),
          W = (0, j.useRef)();
        (0, j.useEffect)(
          function () {
            L && ((Q.current = T), (W.current = A));
          },
          [L]
        );
        var H = (0, eh.kP)().session,
          $ = (0, _.JI)(s, B),
          G = (0, j.useMemo)(
            function () {
              return eZ($);
            },
            [$]
          ),
          V = (0, _.aS)(s),
          J =
            ((n = (0, eu._)(function (e, n) {
              var t, r, a, i, s, o, l;
              return (0, ed.Jh)(this, function (u) {
                switch (u.label) {
                  case 0:
                    y(!0),
                      (r = (t = Z.getState()).highlightedMessageId),
                      (a = t.title),
                      (i = t.isDeleted),
                      (s = t.isAnonymous);
                    try {
                      navigator.clipboard.writeText(n);
                    } catch (e) {
                      return (
                        console.warn("Could not copy link to clipboard: " + e),
                        tY.m.warning("Failed to copy link to clipboard"),
                        y(!1),
                        [2]
                      );
                    }
                    u.label = 1;
                  case 1:
                    return (
                      u.trys.push([1, 3, 4, 5]),
                      [
                        4,
                        et.ZP.updateShareLink({
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
                    if (ar((o = u.sent().moderation_state)))
                      return Z.setState({ moderationState: o }), [2];
                    return (
                      Z.setState({ isPublic: !0, moderationState: o }),
                      P(!0),
                      setTimeout(function () {
                        I.vm.closeSharingModal(),
                          tY.m.success(
                            "Copied shared conversation URL to clipboard!"
                          );
                      }, 500),
                      [3, 5]
                    );
                  case 3:
                    return (
                      (l = u.sent()) instanceof ev.Q0 &&
                        "string" == typeof l.message &&
                        Z.setState({ linkError: l.message }),
                      [3, 5]
                    );
                  case 4:
                    return y(!1), [7];
                  case 5:
                    return [2];
                }
              });
            })),
            function (e, t) {
              return n.apply(this, arguments);
            }),
          X = L && (T !== Q.current || A !== W.current),
          ee = (0, v.jsxs)(eT.ZP.Button, {
            onClick: function () {
              return J(S, R);
            },
            color: "primary",
            disabled: b || N || null == S || null == R || null != O || z,
            children: [
              N
                ? (0, v.jsx)(es.ZP, { icon: k.LSm })
                : b
                ? (0, v.jsx)(eS.Z, {})
                : (0, v.jsx)(es.ZP, { icon: k.XKb }),
              N
                ? "Copied!"
                : b
                ? "Copying..."
                : X
                ? "Update and Copy Link"
                : "Copy Link",
            ],
          }),
          en = (0, j.useCallback)(
            function (e) {
              var n;
              null == e || e.preventDefault(),
                Z.setState({
                  title:
                    null === (n = d.current) || void 0 === n ? void 0 : n.value,
                }),
                h(!1);
            },
            [Z]
          ),
          er = (0, j.useCallback)(
            function (e) {
              "Enter" === e.key && en();
            },
            [en]
          ),
          ea =
            ((t = (0, eu._)(function () {
              return (0, ed.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      et.ZP.deleteShareLink({
                        share_id: Z.getState().shareLinkId,
                      })
                        .catch(function (e) {
                          tY.m.danger("Failed to delete shared link");
                        })
                        .then(function () {
                          I.vm.closeSharingModal();
                        }),
                    ];
                  case 1:
                    return e.sent(), [2];
                }
              });
            })),
            function () {
              return t.apply(this, arguments);
            }),
          el =
            ((r = (0, eu._)(function () {
              return (0, ed.Jh)(this, function (e) {
                return (
                  Z.setState({ isAnonymous: !0 }),
                  _.qN.setState(function (e) {
                    e.threads[s].initialThreadData.authorName = void 0;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return r.apply(this, arguments);
            }),
          eg =
            ((a = (0, eu._)(function () {
              return (0, ed.Jh)(this, function (e) {
                return (
                  Z.setState({ isAnonymous: !1 }),
                  _.qN.setState(function (e) {
                    var n;
                    e.threads[s].initialThreadData.authorName =
                      null == H
                        ? void 0
                        : null === (n = H.user) || void 0 === n
                        ? void 0
                        : n.name;
                  }),
                  [2]
                );
              });
            })),
            function () {
              return a.apply(this, arguments);
            }),
          eb = (0, v.jsxs)(ad, {
            $active: f,
            children: [
              (0, v.jsxs)("div", {
                className: "flex-1 pr-1",
                children: [
                  void 0 !== T
                    ? f
                      ? (0, v.jsx)(af, {
                          ref: d,
                          type: "text",
                          defaultValue: null != T ? T : "",
                          autoFocus: !0,
                          onKeyDown: er,
                          onBlur: en,
                        })
                      : (0, v.jsxs)(am, {
                          onDoubleClick: function () {
                            return h(!0);
                          },
                          children: [
                            T,
                            f || null == T || L
                              ? null
                              : (0, v.jsx)("button", {
                                  onClick: function () {
                                    return h(!0);
                                  },
                                  className: "text-gray-500",
                                  children: (0, v.jsx)(es.ZP, {
                                    icon: k.Nte,
                                    size: "small",
                                  }),
                                }),
                          ],
                        })
                    : (0, v.jsx)("div", { className: "h-6" }),
                  (0, v.jsxs)("div", {
                    className: "mt-1 text-gray-500",
                    children: [
                      !A &&
                        (0, v.jsxs)("span", {
                          children: [
                            null == H
                              ? void 0
                              : null === (i = H.user) || void 0 === i
                              ? void 0
                              : i.name,
                            " \xb7 ",
                          ],
                        }),
                      (0, v.jsx)(C.Ji, {
                        value: new Date(),
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }),
                    ],
                  }),
                ],
              }),
              (0, v.jsx)(ah, {
                children: (0, v.jsxs)(eo.fC, {
                  children: [
                    (0, v.jsx)(eo.xz, {
                      asChild: !0,
                      children: (0, v.jsx)(ei.z, {
                        color: "neutral",
                        className: "mb-auto mt-auto",
                        children: (0, v.jsx)(ef.JEI, {}),
                      }),
                    }),
                    (0, v.jsx)(eo.h_, {
                      children: (0, v.jsxs)(eo.VY, {
                        className:
                          "PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90",
                        side: "top",
                        align: "end",
                        children: [
                          A &&
                            (0, v.jsx)(ei.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: eg,
                              children: (0, v.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, v.jsx)(es.ZP, {
                                    icon: k.fzv,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, v.jsx)("div", {
                                    children: "Share your name",
                                  }),
                                ],
                              }),
                            }),
                          !A &&
                            (0, v.jsx)(ei.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: el,
                              children: (0, v.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, v.jsx)(es.ZP, {
                                    icon: k.fzv,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, v.jsx)("div", {
                                    children: "Share anonymously",
                                  }),
                                ],
                              }),
                            }),
                          L &&
                            (0, v.jsx)(ei.z, {
                              color: "neutral",
                              className: "mb-2 flex w-full border-0",
                              onClick: ea,
                              children: (0, v.jsxs)("div", {
                                className: "flex w-full items-start",
                                children: [
                                  (0, v.jsx)(es.ZP, {
                                    icon: k.Ybf,
                                    className:
                                      "float-left mb-auto mr-4 mt-auto",
                                  }),
                                  " ",
                                  (0, v.jsx)("div", {
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
          ey = O;
        return (
          null == ey &&
            ((null == q ? void 0 : q.has_been_auto_blocked) ||
              (null == q ? void 0 : q.has_been_auto_moderated) ||
              (null == q ? void 0 : q.has_been_blocked)) &&
            (ey = (0, v.jsx)(w.Z, (0, g._)({}, an.moderationBlocked))),
          (0, v.jsxs)(eI.Z, {
            isOpen: !0,
            onClose: function () {
              u();
            },
            size: "custom",
            className: "max-w-[550px]",
            type: "success",
            title: c.formatMessage(an.sharingModalTitle),
            closeButton: (0, v.jsx)(eT.ZP.CloseButton, {
              onClose: function () {
                u();
              },
            }),
            children: [
              null != ey &&
                (0, v.jsx)("div", {
                  className: "mb-4 rounded-md bg-red-500 p-4 text-white",
                  children: ey,
                }),
              (0, v.jsx)("div", {
                className: (0, U.Z)("w-full"),
                children: (0, v.jsx)("p", {
                  className: (0, U.Z)("mb-6 text-gray-500"),
                  children: L
                    ? (0, v.jsx)(
                        w.Z,
                        (0, ec._)((0, g._)({}, an.existingShareDescription), {
                          values: {
                            existingLink: function (e) {
                              return (0, v.jsx)("a", {
                                href: R,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "underline",
                                children: e,
                              });
                            },
                            deleteLink: function (e) {
                              return (0, v.jsx)("a", {
                                href: "#",
                                onClick: function (e) {
                                  e.preventDefault(),
                                    window.confirm(
                                      c.formatMessage(an.confirmDeleteLink)
                                    ) && ea();
                                },
                                className: "underline",
                                children: e,
                              });
                            },
                          },
                        })
                      )
                    : (0, v.jsx)(w.Z, (0, g._)({}, an.sharingModalDescription)),
                }),
              }),
              (0, v.jsx)(as, {
                shouldShowCodeInterpreterDisclaimer: G,
                shouldShowUserContextCustomProfileDisclaimer: V,
              }),
              (0, v.jsx)(ac, {
                children: (0, v.jsx)("div", {
                  className: "flex h-full max-w-full flex-1 flex-col",
                  children: (0, v.jsx)(al, {
                    children: (0, v.jsxs)(au, {
                      children: [
                        (0, v.jsx)(em.f, {
                          ratio: 1.9,
                          className: "overflow-auto bg-white dark:bg-gray-800",
                          children:
                            null != B
                              ? (0, v.jsx)(D.gB.Provider, {
                                  value: !0,
                                  children: (0, v.jsx)(rK, {
                                    onChangeItemInView: Y(),
                                    onRequestMoreCompletions: Y(),
                                    onUpdateNode: Y(),
                                    onChangeRating: Y(),
                                    onDeleteNode: Y(),
                                    onRequestCompletion: Y(),
                                    onHandleChangeVariantFeedbackInlineComparisonRating:
                                      Y(),
                                    clientThreadId: s,
                                    conversationLeafId: B,
                                    activeRequests: o,
                                    currentThreadModel: l,
                                    inlineEmbeddedDisplay: !0,
                                    isNewThread: !1,
                                    initiallyHighlightedMessageId: F,
                                  }),
                                })
                              : (0, v.jsx)("div", {
                                  className:
                                    "flex h-full items-center justify-center",
                                  children: (0, v.jsx)(eS.Z, {
                                    className:
                                      "text-gray-400 dark:text-gray-500",
                                  }),
                                }),
                        }),
                        eb,
                      ],
                    }),
                  }),
                }),
              }),
              (0, v.jsx)(eT.ZP.Actions, {
                isSpacedBetween: !0,
                primaryButton: ee,
                secondaryButton: (0, v.jsx)("div", {
                  children: (0, v.jsxs)("a", {
                    href: aa,
                    className:
                      "flex items-center gap-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                    target: "_blank",
                    rel: "noreferrer",
                    children: [
                      c.formatMessage(an.sharingModalMoreInfo),
                      (0, v.jsx)(es.ZP, { icon: k.AlO }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
      var as = function (e) {
          var n = e.shouldShowCodeInterpreterDisclaimer,
            t = e.shouldShowUserContextCustomProfileDisclaimer;
          return n && t
            ? (0, v.jsx)(ao, {
                children: (0, v.jsx)(
                  w.Z,
                  (0, g._)(
                    {},
                    an.userContextCustomProfileAndCodeInterpreterSupportDisclaimer
                  )
                ),
              })
            : (0, v.jsxs)(v.Fragment, {
                children: [
                  n &&
                    (0, v.jsx)(ao, {
                      children: (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, an.codeInterpreterSupportDisclaimer)
                      ),
                    }),
                  t &&
                    (0, v.jsxs)("p", {
                      className: "mb-6 flex flex-row gap-2.5 text-gray-500",
                      children: [
                        (0, v.jsx)(es.ZP, {
                          icon: k.H33,
                          size: "small",
                          className: "mt-1 flex-shrink-0",
                        }),
                        (0, v.jsx)(
                          w.Z,
                          (0, g._)({}, an.userContextCustomProfileDisclaimer)
                        ),
                      ],
                    }),
                ],
              });
        },
        ao = function (e) {
          var n = e.children;
          return (0, v.jsxs)("div", {
            className:
              "mb-4 flex items-start justify-start gap-2.5 rounded-md bg-yellow-300 p-4 text-[#756B5C] last:mb-0",
            children: [
              (0, v.jsx)(es.ZP, {
                icon: k.H33,
                size: "small",
                className: "mt-1 flex-shrink-0",
              }),
              n,
            ],
          });
        },
        al = X.Z.main(r5()),
        au = X.Z.div(r4()),
        ac = X.Z.div(r7()),
        ad = X.Z.div(r8(), function (e) {
          return e.$active, "";
        }),
        am = X.Z.div(r6()),
        af = X.Z.input(r9()),
        ah = X.Z.div(ae());
      function ag() {
        var e = (0, O._)([
          "bg-green-500 text-white py-0.5 px-1.5 text-[10px] leading-normal font-semibold rounded uppercase",
        ]);
        return (
          (ag = function () {
            return e;
          }),
          e
        );
      }
      var ap = (0, C.vU)({
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
        ax = "oai/apps/announcement/sharedConversations";
      function av(e) {
        var n = e.children,
          t = function () {
            var e = Date.now();
            el.m.setItem(ax, e), s(e);
          },
          r = (0, R.w$)(),
          a = (0, x._)(
            (0, j.useState)(function () {
              var e = el.m.getItem(ax);
              return "number" == typeof e && e;
            }),
            2
          ),
          i = a[0],
          s = a[1],
          o = (0, j.useRef)(null),
          l = (0, K.Z)();
        return (0, v.jsxs)(eo.fC, {
          open: r && !1 === i,
          onOpenChange: function (e) {
            e || t();
          },
          children: [
            (0, v.jsx)(eo.xz, { asChild: !0, ref: o, children: n }),
            (0, v.jsx)(eo.h_, {
              children: (0, v.jsxs)(eo.VY, {
                side: "right",
                sideOffset: 36,
                onOpenAutoFocus: function (e) {
                  e.preventDefault();
                },
                onCloseAutoFocus: function (e) {
                  e.preventDefault();
                },
                onInteractOutside: function (e) {
                  var n;
                  e.target instanceof Element &&
                  (null === (n = o.current) || void 0 === n
                    ? void 0
                    : n.contains(e.target))
                    ? t()
                    : e.preventDefault();
                },
                className:
                  "relative animate-slideLeftAndFade select-none rounded-xl bg-gray-900 p-4 text-sm text-white shadow-sm dark:bg-gray-50 dark:text-gray-700",
                children: [
                  (0, v.jsxs)("div", {
                    children: [
                      (0, v.jsxs)("div", {
                        className: "mb-0.5 flex items-center gap-2",
                        children: [
                          (0, v.jsx)(ab, {
                            children: (0, v.jsx)(w.Z, (0, g._)({}, ap.new)),
                          }),
                          (0, v.jsx)("div", {
                            className: "font-medium",
                            children: (0, v.jsx)(
                              w.Z,
                              (0, g._)({}, ap.shareConversations)
                            ),
                          }),
                          (0, v.jsx)(eo.x8, {
                            className:
                              "-my-1 -mr-1 ml-1 p-1 opacity-70 transition hover:opacity-100",
                            children: (0, v.jsx)(es.ZP, { icon: k.q5L }),
                          }),
                        ],
                      }),
                      (0, v.jsxs)("a", {
                        href: aa,
                        className:
                          "inline-flex items-center gap-1.5 opacity-70 transition hover:opacity-100",
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                          l.formatMessage(ap.learnMore),
                          (0, v.jsx)(es.ZP, { icon: k.AlO, size: "xsmall" }),
                        ],
                      }),
                    ],
                  }),
                  (0, v.jsx)(eo.Eh, {
                    asChild: !0,
                    children: (0, v.jsx)("div", {
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
      var ab = X.Z.span(ag()),
        ay = t(36112);
      function aj() {
        var e = (0, O._)([
          "flex flex-col gap-2 pb-2 text-gray-100 text-sm\n",
          "",
        ]);
        return (
          (aj = function () {
            return e;
          }),
          e
        );
      }
      function ak() {
        var e = (0, O._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n",
          ")}\n",
          ")}\n",
          "\n",
        ]);
        return (
          (ak = function () {
            return e;
          }),
          e
        );
      }
      function aw() {
        var e = (0, O._)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n",
          "\n",
        ]);
        return (
          (aw = function () {
            return e;
          }),
          e
        );
      }
      function aC() {
        var e = (0, O._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
        return (
          (aC = function () {
            return e;
          }),
          e
        );
      }
      function a_() {
        var e = (0, O._)([
          "flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative",
        ]);
        return (
          (a_ = function () {
            return e;
          }),
          e
        );
      }
      function aM() {
        var e = (0, O._)([
          "h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900",
        ]);
        return (
          (aM = function () {
            return e;
          }),
          e
        );
      }
      function aN() {
        var e = (0, O._)([
          "absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n",
          "",
        ]);
        return (
          (aN = function () {
            return e;
          }),
          e
        );
      }
      function aP() {
        var e = (0, O._)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
        return (
          (aP = function () {
            return e;
          }),
          e
        );
      }
      function aZ() {
        var e = (0, O._)(["p-1 hover:text-white"]);
        return (
          (aZ = function () {
            return e;
          }),
          e
        );
      }
      var aT = (0, C.vU)({
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
        aI = {
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
      function aS(e) {
        var n,
          t,
          r = e.activeId,
          a = e.onNewThread,
          i = e.setActiveRequests,
          s = (0, K.Z)(),
          o = (0, x._)((0, j.useState)(!1), 2),
          l = o[0],
          u = o[1],
          c = (0, x._)((0, j.useState)(0), 2),
          d = c[0],
          m = c[1],
          f = (0, ea.Z)(),
          h = (0, ay.MO)(),
          p = h.conversations,
          b = h.hasNextPage,
          y = h.fetchNextPage,
          k = h.isLoading,
          C = h.isFetchingNextPage,
          _ = h.isError,
          M = (0, S.hz)().has(er.DY),
          N = (0, j.useRef)(null),
          P = (0, j.useCallback)(
            function (e) {
              var n;
              M &&
                !k &&
                null != e &&
                (null === (n = N.current) || void 0 === n || n.disconnect(),
                (N.current = new IntersectionObserver(function (e) {
                  e[0].isIntersecting && b && y();
                })),
                N.current.observe(e));
            },
            [M, k, b, y]
          );
        (0, j.useEffect)(function () {
          return function () {
            var e;
            null === (e = N.current) || void 0 === e || e.disconnect();
          };
        }, []);
        var Z = (0, ay.iF)();
        (0, ay.Od)();
        var T =
          ((n = (0, j.useRef)()),
          (t = (0, j.useRef)()),
          ((0, j.useEffect)(
            function () {
              (n.current = t.current), (t.current = p);
            },
            [p]
          ),
          p === t.current)
            ? n.current
            : t.current);
        (0, j.useEffect)(
          function () {
            f(function () {
              m(d + 1);
            }, (0, z.Z)((0, Q.Z)(), Date.now()) + 1e3);
          },
          [d, f]
        );
        var I = 0 === p.length,
          D = (0, j.useMemo)(
            function () {
              return p.reduce(
                function (e, n) {
                  var t,
                    r,
                    a = new Date(
                      null !==
                        (r =
                          null !== (t = n.update_time) && void 0 !== t
                            ? t
                            : n.create_time) && void 0 !== r
                        ? r
                        : 0
                    ),
                    i = (0, q.Z)(new Date(), a);
                  if (0 === i) e.recent.today.items.push(n);
                  else if (i <= 1) e.recent.yesterday.items.push(n);
                  else if (i <= 7) e.recent.lastSeven.items.push(n);
                  else if (i <= 30) e.recent.lastThirty.items.push(n);
                  else if ((0, $.Z)(a)) {
                    var o = (0, H.Z)(a),
                      l = (0, W.Z)(a),
                      u = "".concat(o, "-").concat(l);
                    e.dynamicMonths[u]
                      ? e.dynamicMonths[u].items.push(n)
                      : (e.dynamicMonths[u] = {
                          label: s.formatDate(a, { month: "long" }),
                          items: [n],
                        });
                  } else {
                    var c = (0, H.Z)(a),
                      d = "".concat(c, "-");
                    e.dynamicYears[d]
                      ? e.dynamicYears[d].items.push(n)
                      : (e.dynamicYears[d] = {
                          label: s.formatDate(a, { year: "numeric" }),
                          items: [n],
                        });
                  }
                  return e;
                },
                {
                  recent: {
                    today: {
                      label: (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, aT.historyBucketToday)
                      ),
                      items: [],
                    },
                    yesterday: {
                      label: (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, aT.historyBucketYesterday)
                      ),
                      items: [],
                    },
                    lastSeven: {
                      label: (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, aT.historyBucketLastSeven)
                      ),
                      items: [],
                    },
                    lastThirty: {
                      label: (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, aT.historyBucketLastThirty)
                      ),
                      items: [],
                    },
                  },
                  dynamicMonths: {},
                  dynamicYears: {},
                }
              );
            },
            [d, p]
          );
        return (0, v.jsxs)(aD, {
          $centered: k || (_ && I),
          children: [
            I && k && (0, v.jsx)(eS.Z, { className: "m-auto" }),
            I &&
              _ &&
              (0, v.jsxs)("div", {
                className: "p-3 text-center italic text-gray-500",
                children: [
                  (0, v.jsx)(w.Z, (0, g._)({}, aT.unableToLoadHistory)),
                  !l &&
                    (0, v.jsx)("div", {
                      className: "mt-1",
                      children: (0, v.jsx)(ei.z, {
                        as: "button",
                        color: "dark",
                        size: "small",
                        className: "m-auto mt-2",
                        onClick: function () {
                          u(!0), Z();
                        },
                        children: (0, v.jsx)(w.Z, (0, g._)({}, aT.retryButton)),
                      }),
                    }),
                ],
              }),
            !k &&
              (0, v.jsx)("div", {
                children: (0, v.jsx)(G.M, {
                  initial: !1,
                  children: [D.recent, D.dynamicMonths, D.dynamicYears].flatMap(
                    function (e, n) {
                      return (0, v.jsx)(
                        "span",
                        {
                          children: Object.entries(e).map(function (e) {
                            var n = (0, x._)(e, 2),
                              t = n[0],
                              s = n[1],
                              o = s.items,
                              l = s.label;
                            if ("today" !== t && !o.length) return null;
                            var u = !!o.find(function (e) {
                              var n;
                              return (
                                p.length > 0 &&
                                e.id ===
                                  (null === (n = p[0]) || void 0 === n
                                    ? void 0
                                    : n.id)
                              );
                            });
                            return (0, v.jsxs)(
                              V.E.div,
                              {
                                className: "relative",
                                layoutId: "bucket-".concat(t),
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
                                    (0, v.jsx)(V.E.div, {
                                      className: (0, U.Z)(
                                        "sticky top-0",
                                        u ? "z-[16]" : "z-[14]"
                                      ),
                                      layoutId: "bucketTitle-".concat(t),
                                      layout: "position",
                                      children: (0, v.jsx)(aL, { children: l }),
                                    }),
                                  (0, v.jsx)("ol", {
                                    children: o.map(function (e, n) {
                                      var t = r === e.id,
                                        s =
                                          null == T
                                            ? void 0
                                            : T.find(function (n) {
                                                return n.id === e.id;
                                              });
                                      return (0,
                                      v.jsx)(V.E.li, { className: (0, U.Z)("relative", u && 0 === n ? "z-[15]" : ""), layoutId: "".concat(e.id), layout: "position", custom: { isNew: !s }, variants: aI, initial: "initial", animate: "animate", exit: "exit", children: (0, v.jsx)(aR, { id: e.id, title: e.title, active: t, onNewThread: a, setActiveRequests: i, forwardRef: b && p[p.length - 5 - 1].id === e.id ? P : void 0 }) }, "history-item-".concat(e.id));
                                    }),
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                        },
                        "category-".concat(n)
                      );
                    }
                  ),
                }),
              }),
            M
              ? C &&
                (0, v.jsx)("div", {
                  className: "m-4 mb-5 flex justify-center",
                  children: (0, v.jsx)(eS.Z, {}),
                })
              : (0, v.jsx)(v.Fragment, {
                  children:
                    b &&
                    (0, v.jsx)(ei.z, {
                      as: "button",
                      onClick: function () {
                        return y();
                      },
                      color: "dark",
                      className: "m-auto mb-2",
                      size: "small",
                      loading: C,
                      children: (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, aT.showMoreButton)
                      ),
                    }),
                }),
          ],
        });
      }
      var aD = X.Z.div(aj(), function (e) {
        return e.$centered && "h-full justify-center items-center";
      });
      function aR(e) {
        var n = e.id,
          t = e.title,
          r = e.active,
          a = e.onNewThread,
          i = e.forwardRef,
          s = e.setActiveRequests,
          o = (0, R.w$)(),
          l = (0, ee.WS)(),
          u = (0, y.useRouter)(),
          c = (0, x._)((0, j.useState)(!1), 2),
          d = c[0],
          m = c[1],
          f = (0, j.useRef)(null),
          h = (0, x._)((0, j.useState)(!1), 2),
          g = h[0],
          p = h[1],
          b = (0, S.hz)(),
          w = (0, S.ec)(S.F_.isBusinessWorkspace),
          C = (0, _.cj)(n),
          M = b.has(er.RJ) && r && !C && !w,
          N = (0, ay.iF)(),
          P = (0, j.useCallback)(
            function (e) {
              var r, a;
              if (
                (null == e || e.preventDefault(),
                m(!1),
                (null === (r = f.current) || void 0 === r ? void 0 : r.value) &&
                  (null === (a = f.current) || void 0 === a
                    ? void 0
                    : a.value) !== t)
              ) {
                var i = f.current.value;
                et.ZP.patchConversation(n, { title: i }),
                  _.tQ.setTitle(n, i, _._L.User),
                  l(en.s6.renameThread, { threadId: n, content: i }),
                  N();
              }
            },
            [l, n, N, t]
          ),
          Z = (0, j.useCallback)(
            function (e) {
              "Enter" === e.key && P();
            },
            [P]
          ),
          D = (0, j.useCallback)(
            function () {
              et.ZP.patchConversation(n, { is_visible: !1 }).then(function () {
                N();
              }),
                a();
            },
            [n, a, N]
          ),
          F = (0, j.useCallback)(
            function (e) {
              T.abortAllAndReset(),
                s(new Set()),
                e.preventDefault(),
                l(en.s6.loadThread, { threadId: n }),
                u.push("/c/".concat(n), void 0, { shallow: !0 });
            },
            [l, n, u, s]
          ),
          B = A(n, t, r),
          L = B.resolvedTitle,
          O = B.isTypingEffect;
        if (d)
          return (0, v.jsxs)(aF, {
            $active: r,
            children: [
              (0, v.jsx)(es.ZP, { icon: k.IC0, className: "flex-shrink-0" }),
              (0, v.jsx)(aB, {
                ref: f,
                type: "text",
                defaultValue: null != L ? L : "",
                autoFocus: !0,
                onKeyDown: Z,
                className: "mr-0",
                onBlur: P,
              }),
              (0, v.jsxs)(aU, {
                $active: !0,
                children: [
                  (0, v.jsx)(aq, {
                    onClick: P,
                    children: (0, v.jsx)(es.ZP, { icon: k.UgA }),
                  }),
                  (0, v.jsx)(aq, {
                    onClick: function (e) {
                      e.preventDefault(), m(!1);
                    },
                    children: (0, v.jsx)(es.ZP, { icon: k.q5L }),
                  }),
                ],
              }),
            ],
          });
        var q = O && r && o;
        return (0, v.jsxs)(aA, {
          onClick: r ? Y() : F,
          $active: r,
          $sharing: M,
          className: (0, U.Z)("group", q && "animate-flash"),
          ref: i,
          children: [
            (0, v.jsx)(es.ZP, { icon: g ? k.Ybf : k.IC0 }),
            (0, v.jsxs)(aE, {
              children: [
                q
                  ? (0, v.jsx)(E, { text: null != L ? L : "" })
                  : g
                  ? 'Delete "'.concat(L, '"?')
                  : L,
                (!O || !r) && (0, v.jsx)(aO, { $active: r }),
              ],
            }),
            g &&
              (0, v.jsxs)(aU, {
                $active: !0,
                children: [
                  (0, v.jsx)(aq, {
                    onClick: D,
                    children: (0, v.jsx)(es.ZP, { icon: k.UgA }),
                  }),
                  (0, v.jsx)(aq, {
                    onClick: function () {
                      p(!1);
                    },
                    children: (0, v.jsx)(es.ZP, { icon: k.q5L }),
                  }),
                ],
              }),
            r &&
              !g &&
              (0, v.jsxs)(aU, {
                $active: r,
                children: [
                  (0, v.jsx)(aq, {
                    onClick: function (e) {
                      e.preventDefault(), m(!0);
                    },
                    children: (0, v.jsx)(es.ZP, { icon: k.Nte }),
                  }),
                  M &&
                    (0, v.jsx)(av, {
                      children: (0, v.jsx)(aq, {
                        onClick: function (e) {
                          e.preventDefault(), I.vm.openSharingModal(n);
                        },
                        children: (0, v.jsx)(es.ZP, { icon: k.A8q }),
                      }),
                    }),
                  (0, v.jsx)(aq, {
                    onClick: function () {
                      return p(!0);
                    },
                    children: (0, v.jsx)(es.ZP, { icon: k.Ybf }),
                  }),
                ],
              }),
          ],
        });
      }
      var aA = X.Z.a(
          ak(),
          function (e) {
            var n = e.$active,
              t = e.$sharing;
            return n && t ? "pr-[4.5rem]" : "";
          },
          function (e) {
            var n = e.$active,
              t = e.$sharing;
            return n && !t ? "pr-14" : "";
          },
          function (e) {
            return e.$active
              ? "bg-gray-800 hover:bg-gray-800"
              : "hover:pr-4 bg-gray-900";
          }
        ),
        aF = X.Z.div(aw(), function (e) {
          return e.$active
            ? "pr-14 bg-gray-800 hover:bg-gray-800"
            : "bg-gray-900";
        }),
        aB = X.Z.input(aC()),
        aE = X.Z.div(a_()),
        aL = X.Z.h3(aM()),
        aO = X.Z.div(aN(), function (e) {
          return e.$active
            ? "from-gray-800"
            : "from-gray-900 group-hover:from-[#2A2B32]";
        }),
        aU = X.Z.div(aP(), function (e) {
          return e.$active ? "visible" : "invisible group-hover:visible";
        }),
        aq = X.Z.button(aZ()),
        az = t(61119),
        aQ = t(45036),
        aW = t(6128),
        aH = t(5437),
        a$ = t.n(aH),
        aG = t(11253),
        aV = t.n(aG),
        aJ = t(15300),
        aY = t(44675),
        aK = "https://tcr9i.chat.openai.com/v2/".concat(
          "35536E1E-65B4-4D96-9D97-6ADB7EFF8147",
          "/api.js"
        );
      ((o = h || (h = {})).Idle = "idle"),
        (o.Loading = "loading"),
        (o.ScriptLoaded = "script_loaded"),
        (o.Ready = "ready"),
        (o.Done = "done"),
        (o.Error = "error"),
        (o.Failed = "failed"),
        (o.CAPTCHA = "captcha");
      var aX = new ((function () {
          function e() {
            (0, F._)(this, e), (this.status = h.Idle);
            var n,
              t = this;
            this.getEnforcementToken =
              ((n = (0, eu._)(function (e) {
                var n;
                return (0, ed.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, t._getArkosePromise()];
                    case 1:
                      return (
                        (n = r.sent()),
                        [
                          2,
                          new Promise(function (r, a) {
                            t.setOnCompleted(function (e) {
                              r(e.token);
                            }),
                              t.setOnError(function (i) {
                                if (e) {
                                  var s, o, l, u, c;
                                  aJ.U.addAction("arkose_get_token_error", {
                                    app_release:
                                      null !== (l = aY.env.APP_RELEASE) &&
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
                                    t._showUserError();
                                } else n.reset(), t.getEnforcementToken(!0).then(r, a);
                              }),
                              t.setOnFailed(function () {
                                var e;
                                aJ.U.addAction(
                                  "arkose_failed_to_get_challenge",
                                  {
                                    app_release:
                                      null !== (e = aY.env.APP_RELEASE) &&
                                      void 0 !== e
                                        ? e
                                        : "",
                                  }
                                ),
                                  a(Error("Failed challenge too many times")),
                                  t._showUserError();
                              }),
                              n.run();
                          }),
                        ]
                      );
                  }
                });
              })),
              function (e) {
                return n.apply(this, arguments);
              });
          }
          var n = e.prototype;
          return (
            (n._getArkosePromise = function (e) {
              var n = this;
              return (
                null == this.arkoseInstancePromise &&
                  (this.arkoseInstancePromise = new Promise(function (t, r) {
                    (window.useArkoseSetupEnforcement = void 0),
                      n.setStatus(h.Loading);
                    var a = document.createElement("script");
                    (a.src = aK),
                      (a.async = !0),
                      (a.defer = !0),
                      a.setAttribute("data-status", h.Loading),
                      a.setAttribute(
                        "data-callback",
                        "useArkoseSetupEnforcement"
                      ),
                      (window.useArkoseSetupEnforcement = function (e) {
                        t(e),
                          n.setStatus(h.Ready),
                          e.setConfig({
                            onCompleted: function (e) {
                              n.onCompleted(e);
                            },
                            onError: function (e) {
                              n.onError(e);
                            },
                            onFailed: function (e) {
                              n.onFailed(e);
                            },
                            onShown: function (e) {
                              n.onShown(e);
                            },
                          });
                      }),
                      document.body.appendChild(a);
                    var i = function (s) {
                      if ("load" === s.type && n.status !== h.Ready)
                        n._startReadyTimeout(), n.setStatus(h.ScriptLoaded);
                      else if ("error" === s.type) {
                        if ((n.setStatus(h.Error), e)) {
                          var o;
                          aJ.U.addAction("arkose_script_load_error", {
                            app_release:
                              null !== (o = aY.env.APP_RELEASE) && void 0 !== o
                                ? o
                                : "",
                          }),
                            r("Arkose script failed to load"),
                            n._showUserError();
                        } else
                          a.removeEventListener("load", i),
                            a.removeEventListener("error", i),
                            a.remove(),
                            (n.arkoseInstancePromise = void 0),
                            n._getArkosePromise(!0).then(t, r);
                      }
                    };
                    a.addEventListener("load", i),
                      a.addEventListener("error", i);
                  })),
                this.arkoseInstancePromise
              );
            }),
            (n._startReadyTimeout = function () {
              var e = this;
              setTimeout(function () {
                if (e.status === h.ScriptLoaded) {
                  var n;
                  aJ.U.addAction("arkose_script_ready_timeout", {
                    app_release:
                      null !== (n = aY.env.APP_RELEASE) && void 0 !== n
                        ? n
                        : "",
                  }),
                    e._showUserError();
                }
              }, 15e3);
            }),
            (n._showUserError = function () {
              tY.m.danger(
                "There was a problem preparing your chat. Please refresh the page and try again."
              );
            }),
            (n.gatherData = function () {
              return this._getArkosePromise();
            }),
            (n.setStatus = function (e) {
              this.status = e;
            }),
            (n.onCompleted = function (e) {
              var n;
              null === (n = this._onCompleted) ||
                void 0 === n ||
                n.call(this, e);
            }),
            (n.setOnCompleted = function (e) {
              this._onCompleted = e;
            }),
            (n.onError = function (e) {
              var n;
              null === (n = this._onError) || void 0 === n || n.call(this, e);
            }),
            (n.setOnError = function (e) {
              this._onError = e;
            }),
            (n.onFailed = function (e) {
              var n;
              null === (n = this._onFailed) || void 0 === n || n.call(this, e);
            }),
            (n.setOnFailed = function (e) {
              this._onFailed = e;
            }),
            (n.onShown = function (e) {
              var n;
              null === (n = this._onShown) || void 0 === n || n.call(this, e);
            }),
            (n.setOnShown = function (e) {
              this._onShown = e;
            }),
            e
          );
        })())(),
        a0 = t(75179),
        a1 = t(87316),
        a2 = t(2827);
      function a3(e) {
        var n = e.id,
          t = e.label,
          r = e.disabled;
        return (0, v.jsxs)("div", {
          className: "form-check",
          children: [
            (0, v.jsx)("input", {
              className:
                "form-check-input float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
              type: "checkbox",
              disabled: r,
              value: "",
              id: n,
            }),
            (0, v.jsx)("label", {
              className: "form-check-label text-gray-800 dark:text-gray-100",
              htmlFor: n,
              children: t,
            }),
          ],
        });
      }
      function a5() {
        var e = (0, O._)(["mb-2 mt-auto ml-auto mr-auto"]);
        return (
          (a5 = function () {
            return e;
          }),
          e
        );
      }
      function a4() {
        var e = (0, O._)([
          "relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden",
        ]);
        return (
          (a4 = function () {
            return e;
          }),
          e
        );
      }
      function a7() {
        var e = (0, O._)(["mb-5 border dark:bg-gray-800 overflow-hidden"]);
        return (
          (a7 = function () {
            return e;
          }),
          e
        );
      }
      function a8() {
        var e = (0, O._)([""]);
        return (
          (a8 = function () {
            return e;
          }),
          e
        );
      }
      var a6 = (0, C.vU)({
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
      function a9(e) {
        var n,
          t,
          r,
          a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (null == e
            ? void 0
            : null === (n = e.messages) || void 0 === n
            ? void 0
            : n.length) === 1 &&
          !(null == e
            ? void 0
            : null === (t = e.messages) || void 0 === t
            ? void 0
            : t.some(function (e) {
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
      function ie(e) {
        var n,
          t,
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
          p = e.onRequestCompletion,
          b = e.onUpdateNode,
          y = (0, K.Z)(),
          C = _.tQ.getTree(u),
          M = (0, _.XK)(u);
        (0, j.useEffect)(
          function () {
            "report" === a && eh.pg.forceEnableSession();
          },
          [a]
        );
        var N = (0, j.useRef)(0.5 > Math.random() ? "left" : "right"),
          P = null == C ? void 0 : C.getConversationTurns(r || "root"),
          Z = P.length - 1,
          T = P[P.length - 1],
          I = (0, S.hz)().has(er.FZ),
          D = (0, x._)((0, j.useState)("critique"), 2),
          A = D[0],
          F = D[1],
          B = (0, R.w$)(),
          E = (0, S.hz)().has(er.Pt) && a9(T, !0) && B,
          L = (0, ee.WS)(),
          O = (0, j.useMemo)(
            function () {
              return {
                id: r || "root",
                threadId: _.tQ.getServerThreadId(u),
                rating: a,
                model: d,
              };
            },
            [r, u, a, d]
          ),
          q =
            null == P
              ? void 0
              : P[(null == P ? void 0 : P.length) - 1].variantIds,
          z = null == q ? void 0 : q[(null == q ? void 0 : q.length) - 1],
          Q = (t = (n = null == C ? void 0 : C.getConversationTurns(z))[
            n.length - 1
          ]).messages[t.messages.length - 1].nodeId,
          W = null == C ? void 0 : C.getConversationTurns(Q),
          H = (0, j.useMemo)(
            function () {
              var e =
                null == W ? void 0 : W[(null == W ? void 0 : W.length) - 1];
              return "thumbsDown" === a && E && a9(e) && a9(T);
            },
            [a, E, W, T]
          ),
          $ = (0, j.useRef)(Date.now()),
          G = (0, j.useRef)(-1),
          V = (0, j.useRef)(Date.now()),
          J = (0, j.useRef)(Date.now());
        (0, j.useEffect)(
          function () {
            "compare" === A
              ? ((G.current = Date.now()), L(en.s6.displayedComparisonUIV0, O))
              : "critique" === A &&
                "thumbsDown" === a &&
                L(en.s6.displayedThumbsDownFeedbackForm, O);
          },
          [A]
        );
        var X = P.length - 2,
          ea = W.length - 1,
          ei = W[W.length - 1],
          es = (0, j.useMemo)(
            function () {
              return ei && eU.Cv.getRequestIdFromConversationTurn(ei);
            },
            [ei]
          ),
          eo = (0, j.useMemo)(
            function () {
              return c.has(es);
            },
            [c, es]
          );
        (0, j.useMemo)(
          function () {
            eo || (J.current = Date.now());
          },
          [eo]
        );
        var el = T.messages,
          eu = el[el.length - 1],
          ed = eu.message.id,
          em = eu.nodeId,
          ef = C.getLeafFromNode(em),
          eg = ei.messages,
          ep = eg[eg.length - 1],
          ex = ep.message.id,
          ev = ep.nodeId,
          eb = C.getLeafFromNode(ev),
          ey =
            "critique" === A
              ? "report" === a
                ? y.formatMessage(a6.provideReportModalTitle)
                : y.formatMessage(a6.provideAdditionalFeedback)
              : y.formatMessage(a6.pickBestAnswer),
          ej = (0, j.useRef)([]),
          ek = (0, j.useRef)(""),
          ew = (0, j.useCallback)(
            function () {
              var e,
                n =
                  null === (e = l.current) || void 0 === e
                    ? void 0
                    : e.elements;
              (ej.current = (0, eD._)(n || [])
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
                  (null == n ? void 0 : n["feedback-other"].value) || "");
            },
            [l]
          ),
          eC = (0, j.useCallback)(
            function () {
              ew(),
                s(ek.current, ej.current),
                "thumbsDown" === a && L(en.s6.submitThumbsDownFeedbackForm, O),
                H ? F("compare") : i();
            },
            [ew, s, a, H, L, O, i]
          ),
          e_ = (0, j.useCallback)(
            function (e, n) {
              var t = _.tQ.getServerThreadId(u);
              if (null != t) {
                var r = _.tQ.getThreadCurrentLeafId(u);
                et.ZP.submitSharedConversationReportFeedback({
                  message_id: r,
                  shared_conversation_id: t,
                  text: e,
                  tags: n,
                })
                  .then(function () {
                    tY.m.success("Moderation logged successfully");
                  })
                  .catch(function () {
                    tY.m.danger(
                      "Moderation NOT logged successfully! Please try again"
                    );
                  }),
                  i();
              }
            },
            [u, i]
          ),
          eM = (0, j.useCallback)(
            function () {
              ew(),
                ej.current.push("moderation-reject"),
                e_(ek.current, ej.current);
            },
            [e_, ew]
          ),
          eN = (0, j.useCallback)(
            function () {
              ew(),
                ej.current.push("moderation-accept"),
                e_(ek.current, ej.current);
            },
            [e_, ew]
          ),
          eP =
            "moderate" === a
              ? (0, v.jsxs)(v.Fragment, {
                  children: [
                    (0, v.jsx)(eT.ZP.Button, {
                      title: y.formatMessage(a6.submitRejectModeration),
                      color: "danger",
                      onClick: eM,
                    }),
                    (0, v.jsx)(eT.ZP.Button, {
                      title: y.formatMessage(a6.submitAcceptModeration),
                      color: "primary",
                      onClick: eN,
                    }),
                  ],
                })
              : "critique" === A
              ? (0, v.jsx)(eT.ZP.Button, {
                  title: y.formatMessage(
                    "report" === a ? a6.submitReport : a6.submitFeedback
                  ),
                  onClick: eC,
                })
              : null,
          eZ = "left" === N.current,
          eS = eZ ? "new" : "original",
          eR = eZ ? "original" : "new",
          eA = eZ
            ? y.formatMessage(a6.newAnswer)
            : y.formatMessage(a6.originalAnswer),
          eF = eZ
            ? y.formatMessage(a6.originalAnswer)
            : y.formatMessage(a6.newAnswer),
          eB = eZ
            ? y.formatMessage(a6.newAnswerBetter)
            : y.formatMessage(a6.originalAnswerBetter),
          eE = eZ
            ? y.formatMessage(a6.originalAnswerBetter)
            : y.formatMessage(a6.newAnswerBetter),
          eL = a && "report" !== a && "moderate" !== a,
          eO = (0, j.useCallback)(
            function (e) {
              var n = "left" === e ? eS : "right" === e ? eR : "same";
              if (
                (L(
                  en.s6.submittedComparisonUIV0,
                  Object.assign({}, O, { choice: n })
                ),
                eL)
              ) {
                var t = _.tQ.getTree(u),
                  r = t.getMetadata(em);
                t.updateNode(em, {
                  metadata: {
                    $set: (0, ec._)((0, g._)({}, r), {
                      inlineComparisonRating: "baseline",
                    }),
                  },
                });
                var s = t.getMetadata(ev);
                t.updateNode(ev, {
                  metadata: {
                    $set: (0, ec._)((0, g._)({}, s), {
                      inlineComparisonRating: n,
                    }),
                  },
                }),
                  o(
                    ed,
                    ex,
                    a,
                    n,
                    N.current,
                    $.current,
                    G.current,
                    V.current,
                    J.current,
                    ek.current,
                    ej.current
                  );
              }
              _.tQ.setThreadCurrentLeafId(u, e === N.current ? eb.id : ef.id),
                i();
            },
            [eS, eR, L, O, eL, u, eb.id, ef.id, i, em, ev, o, ed, ex, a]
          ),
          eq = !eo && null != J.current && H,
          ez = (0, j.useCallback)(
            function () {
              i(),
                "critique" === A
                  ? L(en.s6.skippedThumbsDownFeedbackForm, Object.assign({}, O))
                  : "compare" === A &&
                    L(en.s6.skippedComparisonUIV0, Object.assign({}, O));
            },
            [i, L, O, A]
          ),
          eQ = (0, x._)((0, j.useState)([]), 2),
          eW = eQ[0],
          eH = eQ[1];
        return (
          (0, j.useEffect)(function () {
            "moderate" === a &&
              et.ZP.fetchShareModerationCategories().then(function (e) {
                var n = e.moderation_categories;
                eH(
                  Object.keys(n).map(function (e) {
                    return [e, n[e]];
                  })
                );
              });
          }, []),
          (0, v.jsxs)(
            eI.Z,
            {
              isOpen: !0,
              onClose: ez,
              size: "custom",
              className: "md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",
              type:
                "critique" === A
                  ? "thumbsUp" === a
                    ? "success"
                    : "danger"
                  : "success",
              icon:
                "critique" === A ? ("thumbsUp" === a ? k.fmn : k.oLd) : void 0,
              title: ey,
              closeButton: (0, v.jsx)(eT.ZP.CloseButton, { onClose: ez }),
              children: [
                "critique" === A &&
                  (0, v.jsxs)("form", {
                    ref: l,
                    children: [
                      (0, v.jsx)(a2.ZP, {
                        id: "feedback-other",
                        placeholder:
                          "thumbsUp" === a
                            ? y.formatMessage(a6.thumbsUpPlaceholder)
                            : "report" === a
                            ? y.formatMessage(
                                a6.reportContentExplanationPlaceholder
                              )
                            : y.formatMessage(a6.thumbsDownPlaceholder),
                        rows: 3,
                        className:
                          "mb-1 mt-4 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
                      }),
                      "thumbsDown" === a &&
                        (0, v.jsxs)("div", {
                          className: "mb-4",
                          children: [
                            (0, v.jsx)(a3, {
                              id: "feedback-harmful",
                              label: y.formatMessage(a6.harmfulUnsafe),
                            }),
                            (0, v.jsx)(a3, {
                              id: "feedback-false",
                              label: y.formatMessage(a6.notTrue),
                            }),
                            (0, v.jsx)(a3, {
                              id: "feedback-not-helpful",
                              label: y.formatMessage(a6.notHelpful),
                            }),
                          ],
                        }),
                      null != a &&
                        !eL &&
                        (0, v.jsx)(v.Fragment, {
                          children: (0, v.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              "report" === a &&
                                (0, v.jsxs)(v.Fragment, {
                                  children: [
                                    (0, v.jsx)(a3, {
                                      id: "feedback-dont-like-this",
                                      label: y.formatMessage(a6.dontLikeThis),
                                    }),
                                    (0, v.jsx)(a3, {
                                      id: "feedback-false",
                                      label: y.formatMessage(a6.notTrue),
                                    }),
                                    (0, v.jsx)(a3, {
                                      id: "feedback-not-helpful",
                                      label: y.formatMessage(a6.notHelpful),
                                    }),
                                    (0, v.jsx)(a3, {
                                      id: "feedback-harmful-offensive",
                                      label: y.formatMessage(
                                        a6.harmfulOffensive
                                      ),
                                    }),
                                    (0, v.jsx)(a3, {
                                      id: "feedback-sexual-abuse",
                                      label: y.formatMessage(a6.sexualAbuse),
                                    }),
                                  ],
                                }),
                              "moderate" === a &&
                                (0, v.jsxs)(v.Fragment, {
                                  children: [
                                    eW.map(function (e) {
                                      var n = (0, x._)(e, 2),
                                        t = n[0],
                                        r = n[1];
                                      return (0,
                                      v.jsx)(a3, { id: "feedback-" + t, label: r }, t);
                                    }),
                                    (0, v.jsx)(a3, {
                                      id: "feedback-copyright",
                                      label: y.formatMessage(
                                        a6.copyrightContent
                                      ),
                                    }),
                                  ],
                                }),
                              (0, v.jsx)(a3, {
                                id: "feedback-content-other",
                                label: y.formatMessage(a6.reportOtherContent),
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                "compare" === A &&
                  W &&
                  void 0 !== M &&
                  (0, v.jsxs)("div", {
                    className: (0, U.Z)("w-full"),
                    children: [
                      (0, v.jsx)("p", {
                        className: (0, U.Z)("mb-7 mt-3"),
                        children: (0, v.jsx)(
                          w.Z,
                          (0, g._)({}, a6.continueWithChosenAnswer)
                        ),
                      }),
                      (0, v.jsx)(ia, {
                        className: I ? "rounded-2xl" : "rounded-md",
                        children: (0, v.jsx)(ii, {
                          children: (0, v.jsx)(nG, {
                            currentModelId: d,
                            turnIndex: X,
                            isFinalTurn: !1,
                            clientThreadId: u,
                            onChangeItemInView: m,
                            onChangeRating: Y(),
                            onRequestMoreCompletions: f,
                            onDeleteNode: h,
                            onRequestCompletion: p,
                            onUpdateNode: b,
                            activeRequests: c,
                            showInlineEmbeddedDisplay: !0,
                            onHandleChangeVariantFeedbackInlineComparisonRating:
                              Y(),
                          }),
                        }),
                      }),
                      (0, v.jsxs)("div", {
                        className: (0, U.Z)(),
                        children: [
                          (0, v.jsxs)("div", {
                            className: (0, U.Z)(
                              "mb-2 grid w-full grid-cols-2 gap-5"
                            ),
                            children: [
                              (0, v.jsx)("div", {
                                children: (0, v.jsx)("p", {
                                  className: (0, U.Z)("font-semibold"),
                                  children: eA,
                                }),
                              }),
                              (0, v.jsx)("div", {
                                children: (0, v.jsx)("p", {
                                  className: (0, U.Z)("font-semibold"),
                                  children: eF,
                                }),
                              }),
                            ],
                          }),
                          (0, v.jsxs)("div", {
                            className: (0, U.Z)(
                              "mb-5 grid w-full grid-cols-2 gap-5"
                            ),
                            children: [
                              (0, v.jsxs)(ir, {
                                children: [
                                  (0, v.jsx)(ii, {
                                    children: (0, v.jsx)(nG, {
                                      currentModelId: d,
                                      turnIndex: eZ ? ea : Z,
                                      conversationLeafId: eZ ? ev : em,
                                      isFinalTurn: !0,
                                      clientThreadId: u,
                                      onChangeItemInView: m,
                                      onChangeRating: Y(),
                                      onDeleteNode: h,
                                      onRequestMoreCompletions: f,
                                      onRequestCompletion: p,
                                      onUpdateNode: b,
                                      activeRequests: c,
                                      showInlineEmbeddedDisplay: !0,
                                      onHandleChangeVariantFeedbackInlineComparisonRating:
                                        Y(),
                                    }),
                                  }),
                                  (0, v.jsx)(it, {
                                    children: (0, v.jsx)(eT.ZP.Button, {
                                      disabled: !eq,
                                      title: eB,
                                      onClick: function () {
                                        return eO("left");
                                      },
                                      color: "dark",
                                    }),
                                  }),
                                ],
                              }),
                              (0, v.jsxs)(ir, {
                                children: [
                                  (0, v.jsx)(ii, {
                                    children: (0, v.jsx)(nG, {
                                      currentModelId: d,
                                      turnIndex: eZ ? Z : ea,
                                      conversationLeafId: eZ ? em : ev,
                                      isFinalTurn: !0,
                                      clientThreadId: u,
                                      onChangeItemInView: m,
                                      onChangeRating: Y(),
                                      onDeleteNode: h,
                                      onRequestMoreCompletions: f,
                                      onRequestCompletion: p,
                                      onUpdateNode: b,
                                      activeRequests: c,
                                      showInlineEmbeddedDisplay: !0,
                                      onHandleChangeVariantFeedbackInlineComparisonRating:
                                        Y(),
                                    }),
                                  }),
                                  (0, v.jsx)(it, {
                                    children: (0, v.jsx)(eT.ZP.Button, {
                                      disabled: !eq,
                                      title: eE,
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
                          (0, v.jsx)("div", {
                            className: (0, U.Z)("grid w-full"),
                            children: (0, v.jsxs)("div", {
                              className: (0, U.Z)("mb-2 text-right"),
                              children: [
                                (0, v.jsx)(eT.ZP.Button, {
                                  disabled: !eq,
                                  title: y.formatMessage(
                                    a6.neitherAnswerBetter
                                  ),
                                  color: "primary",
                                  onClick: function () {
                                    return eO("same");
                                  },
                                  className: (0, U.Z)("mr-2"),
                                }),
                                (0, v.jsx)(eT.ZP.Button, {
                                  title: y.formatMessage(a6.skipStep),
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
                (0, v.jsx)(eT.ZP.Actions, { primaryButton: eP }),
              ],
            },
            "RatingModal-".concat(r)
          )
        );
      }
      var it = X.Z.div(a5()),
        ir = X.Z.div(a4()),
        ia = X.Z.div(a7()),
        ii = X.Z.div(a8()),
        is = t(37541);
      function io() {
        var e,
          n,
          t,
          r,
          a,
          i,
          s =
            ((n = (e = (0, ru.S)()).isLoggedInWithMfa),
            (t = e.isUsernamePassword),
            (r = e.setupMfa),
            (i = (a = (0, tK.p0)()).filter(function (e) {
              return !(
                "none" === e.manifest.auth.type ||
                "service_http" === e.manifest.auth.type
              );
            })),
            (n || !t) && (i = []),
            {
              disablePluginsThatWeCantUse: function () {
                var e = a.filter(function (e) {
                  return (
                    "none" === e.manifest.auth.type ||
                    "service_http" === e.manifest.auth.type
                  );
                });
                (0, tK.dT)(
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
          c = (0, j.useCallback)(
            function () {
              o();
            },
            [o]
          );
        return 0 === l.length
          ? null
          : (0, v.jsx)(eI.Z, {
              isOpen: !0,
              onClose: c,
              title: "Some of your plugins require two-factor authentication.",
              primaryButton: (0, v.jsx)(eT.ZP.Button, {
                onClick: u,
                title: "Setup two-factor authentication",
                color: "primary",
              }),
              secondaryButton: (0, v.jsx)(eT.ZP.Button, {
                onClick: o,
                title: "Turn off the plugins",
              }),
              type: "danger",
              children: (0, v.jsx)("div", {
                className: "flex flex-col gap-2 py-4",
                children: l.map(function (e) {
                  return (0,
                  v.jsx)("div", { className: "w-full", children: (0, v.jsx)(t2.Z, { plugin: e }) }, e.id);
                }),
              }),
            });
      }
      var il = t(16578),
        iu = t.n(il),
        ic = t(44925),
        id = t(74853),
        im = t(99652),
        ih = t(1220);
      function ig(e) {
        var n = e.isOpen,
          t = e.onClose,
          r = (0, ee.WS)(),
          a = (0, x._)((0, j.useState)(!1), 2),
          i = a[0],
          s = a[1],
          o = (0, y.useRouter)(),
          l = (0, j.useCallback)(
            function () {
              r(en.s6.closeAccountPaymentModal), t();
            },
            [t, r]
          ),
          u = (0, j.useCallback)(
            (0, eu._)(function () {
              var e;
              return (0, ed.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    s(!0), r(en.s6.clickAccountCustomerPortal), (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]),
                      [4, et.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = n.sent()), o.push(e.url), [3, 5];
                  case 3:
                    return (
                      n.sent(),
                      tY.m.warning(
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
          c = (0, j.useCallback)(
            function () {
              r(en.s6.clickAccountPaymentGetHelp);
            },
            [r]
          ),
          d = (0, j.useCallback)(
            function () {
              r(en.s6.clickAccountManageIos);
            },
            [r]
          ),
          m = (0, S.e2)(),
          f = (0, S.YD)();
        return (0, v.jsxs)(id.x, {
          isOpen: n,
          onClose: t,
          children: [
            (0, v.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
              children: [
                (0, v.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your plan",
                }),
                (0, v.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: l,
                  children: (0, v.jsx)(k.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, v.jsx)("div", {
              className: "grid",
              children: (0, v.jsx)("div", {
                className: "relative order-1 col-span-1 sm:order-2",
                children: (0, v.jsx)(im.Oi, {
                  rowElements: [
                    (0, v.jsx)(
                      im.Cu,
                      {
                        text: ih.S.plus.name,
                        children: (0, v.jsx)("span", {
                          className: "font-semibold text-gray-500",
                          children: ih.S.plus.costInDollars,
                        }),
                      },
                      "row-plus-plan-name"
                    ),
                    (0, v.jsx)(
                      im.hi,
                      {
                        disabled: !0,
                        variant: "primary-disabled",
                        text: ih.S.plus.callToAction.active,
                      },
                      "row-plus-plan-button"
                    ),
                    (0, v.jsx)(
                      im.G,
                      { text: ih.S.plus.demandAccess },
                      "row-plus-plan-demand"
                    ),
                    (0, v.jsx)(
                      im.G,
                      { text: ih.S.plus.responseSpeed },
                      "row-plus-plan-speed"
                    ),
                    (0, v.jsx)(
                      im.G,
                      { className: "sm:pb-1", text: ih.S.plus.modelFeatures },
                      "row-plus-plan-feathers"
                    ),
                    (null == m ? void 0 : m.purchase_origin_platform) ===
                      ic._4.MOBILE_IOS &&
                      (0, v.jsx)(
                        iu(),
                        {
                          href: ic.m1,
                          target: "_blank",
                          passHref: !0,
                          children: (0, v.jsx)(im.nR, {
                            className: "sm:pb-1",
                            isLoading: !1,
                            text: ih.S.manageSubscriptionIos.callToAction,
                            onClick: d,
                          }),
                        },
                        "row-plus-plan-manage-ios"
                      ),
                    (!m ||
                      m.purchase_origin_platform === ic._4.WEBAPP ||
                      m.purchase_origin_platform === ic._4.GRANTED) &&
                      f &&
                      (0, v.jsx)(
                        im.nR,
                        {
                          className: "sm:pb-1",
                          isLoading: i,
                          text: ih.S.manageSubscriptionWeb.callToAction,
                          onClick: u,
                        },
                        "row-plus-plan-manage"
                      ),
                    (0, v.jsx)(
                      iu(),
                      {
                        href: ic.ti,
                        target: "_blank",
                        passHref: !0,
                        children: (0, v.jsx)(
                          im.nR,
                          {
                            className: "sm:pb-1",
                            isLoading: !1,
                            text: ih.S.getHelp.callToAction,
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
      var ip = t(48432),
        ix = t(24148),
        iv = t(81372);
      function ib() {
        var e = (0, O._)([
          "flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border bg-white dark:bg-gray-800 border-black/10 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-gray-700 h-11",
        ]);
        return (
          (ib = function () {
            return e;
          }),
          e
        );
      }
      var iy = (0, C.vU)({
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
      function ij() {
        var e = (0, j.useContext)(D.gB),
          n = (0, K.Z)(),
          t = (0, I.tN)(function (e) {
            return {
              activeSidebar: e.activeSidebar,
              isDesktopNavCollapsed: e.isDesktopNavCollapsed,
            };
          }),
          r = t.isDesktopNavCollapsed,
          a = t.activeSidebar,
          i = (0, S.hz)(),
          s = i.has(er.Ue),
          o = i.has("debug") && "debug" !== a;
        return e
          ? null
          : (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsx)(G.M, {
                  initial: !1,
                  children:
                    s &&
                    r &&
                    (0, v.jsx)(V.E.div, {
                      className:
                        "absolute left-2 top-2 z-10 hidden md:inline-block",
                      initial: { opacity: 0 },
                      animate: {
                        opacity: 1,
                        transition: { duration: 0.165, ease: "easeIn" },
                      },
                      children: (0, v.jsx)(nZ.u, {
                        side: "right",
                        label: n.formatMessage(iy.openSidebar),
                        children: (0, v.jsx)(ik, {
                          onClick: I.vm.toggleDesktopNavCollapsed,
                          "aria-label": n.formatMessage(iy.openSidebar),
                          children: (0, v.jsx)(es.ZP, {
                            className: "text-black dark:text-white",
                            icon: k.iYc,
                          }),
                        }),
                      }),
                    }),
                }),
                (0, v.jsx)("div", {
                  className:
                    "absolute right-4 top-2 z-10 hidden flex-col gap-2 md:flex",
                  children:
                    o &&
                    (0, v.jsx)(nZ.u, {
                      side: "left",
                      label: n.formatMessage(iy.openDebug),
                      children: (0, v.jsx)(ik, {
                        onClick: function () {
                          return I.vm.toggleActiveSidebar("debug");
                        },
                        "aria-label": n.formatMessage(iy.openDebug),
                        children: (0, v.jsx)(es.ZP, {
                          className: "text-black dark:text-white",
                          icon: k.cDN,
                        }),
                      }),
                    }),
                }),
              ],
            });
      }
      var ik = X.Z.button(ib()),
        iw = t(89678),
        iC = t.n(iw),
        i_ = t(55989),
        iM = t(66523),
        iN = [
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
      function iP(e) {
        return iZ.apply(this, arguments);
      }
      function iZ() {
        return (iZ = (0, eu._)(function (e) {
          var n, t;
          return (0, ed.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (n = (0, x._)(e.queryKey, 2))[0],
                  (t = n[1]),
                  [
                    4,
                    et.ZP.getThreadInterpreterState(t).then(function (e) {
                      return (
                        0 === e.time_remaining_ms &&
                          e.kernel_started &&
                          tY.m.warning(
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
      var iT = t(70060),
        iI = t.n(iT)()(
          function () {
            return Promise.resolve().then(t.bind(t, 49218));
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
      function iS(e) {
        var n = e.children;
        return (0, v.jsx)(iI, {
          className: "h-full dark:bg-gray-800",
          followButtonClassName: "scroll-convo",
          initialScrollBehavior: "auto",
          children: n,
        });
      }
      function iD() {
        var e = (0, O._)(["grow flex-1 overflow-hidden"]);
        return (
          (iD = function () {
            return e;
          }),
          e
        );
      }
      function iR() {
        var e = (0, O._)([
          "absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:pl-2 md:w-[calc(100%-.5rem)]",
        ]);
        return (
          (iR = function () {
            return e;
          }),
          e
        );
      }
      var iA = (0, C.vU)({
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
      function iF(e) {
        var n = e.onClickReportSharedConversation;
        return (0, v.jsxs)("div", {
          className: "flex justify-center gap-3 text-gray-500",
          children: [
            (0, v.jsx)("button", {
              onClick: function () {
                n();
              },
              children: (0, v.jsx)(
                w.Z,
                (0, g._)({}, iA.reportSharedConversation)
              ),
            }),
            (0, v.jsx)("span", { children: "|" }),
            (0, v.jsx)("a", {
              href: "https://openai.com/policies/terms-of-use",
              target: "_blank",
              rel: "noreferrer",
              children: (0, v.jsx)(w.Z, (0, g._)({}, iA.termsOfUse)),
            }),
            (0, v.jsx)("span", { children: "|" }),
            (0, v.jsx)("a", {
              href: "https://openai.com/policies/privacy-policy",
              target: "_blank",
              rel: "noreferrer",
              children: (0, v.jsx)(w.Z, (0, g._)({}, iA.privacyPolicy)),
            }),
          ],
        });
      }
      var iB = function (e) {
          var n,
            t,
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
            p,
            b,
            C,
            M,
            N,
            Z,
            A,
            F,
            B,
            E,
            L,
            O,
            q,
            z,
            Q,
            W,
            H,
            $,
            G,
            V,
            J,
            X,
            ea,
            es,
            eo,
            em = e.initialThreadData,
            ef = e.clientThreadId,
            eg = e.activeRequests,
            ep = e.setActiveRequests,
            ex = e.handleResetThread,
            ev = e.initiallyHighlightedMessageId,
            ey = e.continueConversationUrl,
            ej = (0, j.useContext)(D.gB),
            ek = (0, K.Z)(),
            ew = (0, S.hz)(),
            eC = (0, eA.Fl)().isPluginsAvailable,
            e_ = (0, R.w$)(),
            eM = (0, ee.WS)(),
            eN = ew.has(er.Pt) && e_,
            eP = (0, j.useContext)(D.QL).historyDisabled,
            eZ = (0, y.useRouter)(),
            eS =
              ej &&
              (null === ($ = eZ.query) || void 0 === $
                ? void 0
                : null === (G = $.shareParams) || void 0 === G
                ? void 0
                : G[1]) === "moderate",
            eD = (0, _.U0)(ef),
            eR = (0, _.Kt)(ef),
            eF = (0, _.oq)(ef),
            eB = (0, x._)((0, j.useState)(!1), 2),
            eE = eB[0],
            eq = eB[1],
            ez = (0, x._)((0, j.useState)(!1), 2),
            eQ = ez[0],
            eW = ez[1],
            eH = (0, x._)((0, j.useState)(), 2),
            e$ = eH[0],
            eG = eH[1],
            eV = (0, x._)((0, j.useState)(!1), 2),
            eJ = eV[0],
            eY = eV[1],
            eK = (0, x._)((0, j.useState)(), 2),
            eX = eK[0],
            e0 = eK[1],
            e1 = (0, x._)((0, j.useState)(), 2),
            e2 = e1[0],
            e3 = e1[1],
            e5 = (0, x._)((0, j.useState)(), 2),
            e4 = e5[0],
            e7 = e5[1],
            e8 = (0, j.useRef)(null),
            e6 = (0, S.WY)(),
            e9 = (0, a1.g)(function (e) {
              return e.flags.isUserInCanPayGroup;
            }),
            ne = ew.has(er.FZ),
            nn = (0, x._)((0, j.useState)(!1), 2),
            nt = nn[0],
            nr = nn[1],
            na =
              ((s = (i = {
                exempt: !1,
                onRestrictedTermFound: (0, j.useCallback)(
                  function (e) {
                    nr(!0),
                      eM(en.s6.promptUsedRestrictedWords, {
                        threadId: _.tQ.getServerThreadId(ef),
                        content: e,
                      });
                  },
                  [eM, ef]
                ),
              }).exempt),
              (o = i.onRestrictedTermFound),
              (u = (l = (0, x._)((0, j.useState)(!1), 2))[0]),
              (c = l[1]),
              {
                hasRestrictedTerms: u,
                checkRestrictedTerms: (0, j.useCallback)(
                  function (e) {
                    var n;
                    return (iN.some(function (t) {
                      var r = t.exec(e);
                      return r && (n = r[0]), r;
                    }),
                    !s && n)
                      ? (c(!0), null == o || o(n), !0)
                      : (c(!1), !1);
                  },
                  [s, o]
                ),
              }),
            ni = na.hasRestrictedTerms,
            ns = na.checkRestrictedTerms,
            no = (0, x._)((0, j.useState)(!0), 2),
            nl = no[0],
            nu = no[1],
            nd = (0, x._)((0, j.useState)(!1), 2),
            nm = nd[0],
            nf = nd[1],
            nh = (0, nR.iu)(),
            ng = (0, tK.p0)(),
            np = (0, nR.Gg)(nh, !0),
            nx =
              null !== (eo = (0, nR.Bv)(em.lastModelUsed, ef)) && void 0 !== eo
                ? eo
                : np,
            nv = (0, nR.B9)(),
            nb = void 0 !== nx ? nv.get(nx) : void 0,
            ny = (0, ay.iF)(),
            nj = (0, j.useCallback)(
              function () {
                ny(), eM(en.s6.newThread);
              },
              [eM, ny]
            ),
            nk = _.tQ.getTitle(ef),
            nw = (0, x._)((0, j.useState)(), 2),
            nC = nw[0],
            n_ = nw[1],
            nM = (0, j.useCallback)(
              function (e, n) {
                var t = null != n ? n : "";
                eP ||
                  "" === t ||
                  et.ZP.generateTitle(t, e, nx)
                    .then(function (e) {
                      var r = e.title;
                      _.tQ.setTitle(t, r, _._L.Generated),
                        ny(),
                        eM(en.s6.renameThread, {
                          threadId: n,
                          content: r,
                          model: nx,
                        });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [eP, eM, nx, ny]
            ),
            nN = (0, j.useCallback)(
              function (e, n, t) {
                var r = ew.has(er.uj);
                eP ||
                  !r ||
                  void 0 === t ||
                  (0, eO.lD)(t) ||
                  (0, eO.JD)(t) ||
                  et.ZP.generateSuggestions(e, n, nx)
                    .then(function (e) {
                      n_({ messageId: n, suggestions: e.suggestions });
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [ew, eP, nx]
            ),
            nP = (0, _.Uy)(ef),
            nZ =
              ((d =
                eC &&
                (null == nb
                  ? void 0
                  : null === (V = nb.enabledTools) || void 0 === V
                  ? void 0
                  : V.includes("tools3"))
                  ? ng.map(function (e) {
                      return e.id;
                    })
                  : void 0),
              (f = (m = (0, S.hz)()).has(er.PL)),
              (h = (0, j.useId)()),
              (p = (0, ee.WS)()),
              (b = (0, tv.Y8)(function (e) {
                return null == e ? void 0 : e.setCapTimeout;
              })),
              (C = (0, tv.Y8)(function (e) {
                return null == e ? void 0 : e.clearCapTimeout;
              })),
              (M = (0, j.useContext)(D.QL).historyDisabled),
              (N = (0, nR.B9)()),
              (Z = (0, j.useRef)(0)),
              (A = (0, j.useRef)({})),
              (F = (0, j.useCallback)(
                function (e, n, t, r) {
                  var a,
                    i,
                    s = r.eventSource,
                    o = function () {
                      setTimeout(function () {
                        T.removeAborterById(t),
                          ep(function (e) {
                            var n = new Set(e);
                            return n.delete(t), n;
                          }),
                          delete A.current[t],
                          _.tQ.releaseThread(ef);
                      }, 0);
                    },
                    l = _.tQ.getTree(ef),
                    u = t,
                    c = l.getParentId(u),
                    d = n === eL.Os.Continue,
                    h = !0,
                    x = !1,
                    v = l.getMessage(u),
                    y = new Set(),
                    j = l.getIsBlockedFromNode(c),
                    k = !1,
                    w = !1,
                    M = iC()(
                      function () {
                        j ||
                          k ||
                          _.tQ.updateTree(ef, function (e) {
                            e.updateNodeMessage(u, v);
                          });
                      },
                      50,
                      { leading: !0, maxWait: 50 }
                    );
                  function P() {
                    return (P = (0, eu._)(function (e, n, t) {
                      var r,
                        a,
                        i,
                        s,
                        o,
                        u = arguments;
                      return (0, ed.Jh)(this, function (c) {
                        switch (c.label) {
                          case 0:
                            (r = u.length > 3 && void 0 !== u[3] && u[3]),
                              (c.label = 1);
                          case 1:
                            return (
                              c.trys.push([1, 3, , 4]),
                              [4, (0, a0._I)(t, !1, e, l.getMessageId(n))]
                            );
                          case 2:
                            return (
                              (i = (a = c.sent()).isBlocked),
                              (s = a.isFlagged),
                              (i || s) && (w = !0),
                              i
                                ? ((k = !0),
                                  r || (j = !0),
                                  _.tQ.updateTree(ef, function (e) {
                                    e.updateNode(n, {
                                      message: {
                                        content: { parts: { $set: [""] } },
                                      },
                                      metadata: {
                                        $set: (0, ec._)((0, g._)({}, a0.sK), {
                                          completionSampleFinishTime:
                                            Date.now(),
                                        }),
                                      },
                                    });
                                  }),
                                  p(
                                    r
                                      ? en.s6.completionBlockedByModeration
                                      : en.s6.promptBlockedByModeration,
                                    { threadId: e, id: n }
                                  ))
                                : s
                                ? (_.tQ.updateTree(ef, function (e) {
                                    e.updateNode(n, {
                                      metadata: { $set: a0.Mf },
                                    });
                                  }),
                                  p(
                                    r
                                      ? en.s6.completionFlaggedByModeration
                                      : en.s6.promptFlaggedByModeration,
                                    { threadId: e, id: n }
                                  ))
                                : r &&
                                  j &&
                                  _.tQ.updateTree(ef, function (e) {
                                    e.updateNodeMessage(n, v);
                                  }),
                              [3, 4]
                            );
                          case 3:
                            return (
                              (o = c.sent()),
                              (k = !0),
                              _.tQ.updateTree(ef, function (e) {
                                e.updateNode(n, {
                                  metadata: {
                                    $set: {
                                      err: "An error occured",
                                      errType: "danger",
                                      completionSampleFinishTime: Date.now(),
                                    },
                                  },
                                });
                              }),
                              p(en.s6.moderationError, {
                                threadId: e,
                                content: JSON.stringify(o || ""),
                              }),
                              aV().publish("UnrecoverableError"),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    })).apply(this, arguments);
                  }
                  return (
                    (a = (0, eu._)(function (r) {
                      var a, Z, I, S, D, R, F, B, L, O, U, q, z, Q, W, H, $, G;
                      return (0, ed.Jh)(this, function (V) {
                        switch (V.label) {
                          case 0:
                            if ("error" === r.type)
                              return (
                                console.error((a = r.error)),
                                (Z =
                                  (null == a ? void 0 : a.message) ||
                                  "Something went wrong"),
                                _.tQ.updateTree(ef, function (e) {
                                  e.updateNode(u, {
                                    message: { $set: v },
                                    metadata: {
                                      $set: {
                                        err: Z,
                                        errType: "danger",
                                        errCode: ((0, i_.T)(a) && a.code) || "",
                                        completionSampleFinishTime: Date.now(),
                                      },
                                    },
                                  });
                                }),
                                o(),
                                (0, i_.T)(a) &&
                                  (null == a ? void 0 : a.code) === tv.uU &&
                                  (null == a ? void 0 : a.clearsIn) &&
                                  (b(
                                    new Date(
                                      Date.now() + 1e3 * a.clearsIn
                                    ).toISOString()
                                  ),
                                  setTimeout(function () {
                                    C();
                                  }, 1e3 * a.clearsIn)),
                                [2]
                              );
                            if (
                              ("moderation" === r.type &&
                                ((I = r.isCompletion),
                                (S = r.messageId),
                                (D = r.conversationId),
                                (R = r.flagged),
                                ((F = r.blocked) || R) &&
                                  _.tQ.updateTree(ef, function (e) {
                                    var n = e.messageIdToNodeId(S);
                                    e.updateNode(n, {
                                      message: {
                                        content: { parts: { $set: [""] } },
                                      },
                                      metadata: {
                                        $set: (0, ec._)(
                                          (0, g._)({}, F ? a0.sK : a0.Mf),
                                          {
                                            completionSampleFinishTime:
                                              Date.now(),
                                          }
                                        ),
                                      },
                                    });
                                  }),
                                (R || F) &&
                                  p(
                                    I
                                      ? F
                                        ? en.s6.completionBlockedByModeration
                                        : en.s6.completionFlaggedByModeration
                                      : F
                                      ? en.s6.promptBlockedByModeration
                                      : en.s6.promptFlaggedByModeration,
                                    { threadId: D, id: S }
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
                                  eL.uU.System
                                )
                                  return l.appendSystemMessageToRoot(B), [2];
                                if (
                                  (null == B ? void 0 : B.author.role) ===
                                  eL.uU.User
                                )
                                  return [2];
                              }
                              h
                                ? ((U =
                                    (null ===
                                      (O = _.qN.getState().threads[ef]) ||
                                    void 0 === O
                                      ? void 0
                                      : O.continuingFromSharedConversationId) !=
                                    null),
                                  _.tQ.removeContinuingFromSharedConversationId(
                                    ef
                                  ),
                                  (h = !1),
                                  (x = l.isFirstCompletion || U),
                                  (null == B ? void 0 : B.id) && y.add(t),
                                  void 0 !== L &&
                                    ((i = L),
                                    (0, _.Zz)(ef) &&
                                      _.tQ.setServerIdForNewThread(ef, L)),
                                  _.tQ.updateTree(ef, function (e) {
                                    e.updateNodeMessage(u, B);
                                  }),
                                  x && nj(L),
                                  d ||
                                    (function (e, n, t) {
                                      P.apply(this, arguments);
                                    })(L, c, l.getTextFromLastNTurns(c, 1), !1),
                                  p(en.s6.generateCompletion, {
                                    id: t,
                                    threadId: L,
                                    completionType: n,
                                    eventSource: s,
                                    model: e,
                                  }),
                                  T.addAborter(t, A.current[t]))
                                : d ||
                                  B.id === l.getMessageId(u) ||
                                  (y.add(B.id),
                                  M.flush(),
                                  _.tQ.updateTree(ef, function (e) {
                                    e.addNode(B.id, B, u, eL.Jq.Completion);
                                  }),
                                  (u = B.id),
                                  _.tQ.setThreadCurrentLeafId(ef, u)),
                                (v = B);
                            }
                            if (
                              (M(),
                              "done" !== r.type ||
                                (j ||
                                  k ||
                                  (M.flush(),
                                  w ||
                                    ((q = l.getMessageId(u)),
                                    x && nM(q, i),
                                    nN(i, q, v))),
                                _.tQ.updateTree(ef, function (e) {
                                  e.updateNode(u, {
                                    metadata: {
                                      $set: (0, ec._)(
                                        (0, g._)({}, l.getMetadata(u)),
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
                                  null === (z = N.get(e)) || void 0 === z
                                    ? void 0
                                    : z.tags.includes(nR.S.GPT_4)),
                                f && Q && aX.gatherData(),
                                !(W = (0, nc.wR)(v))))
                            )
                              return [3, 4];
                            return [4, (0, nc.qZ)(W)];
                          case 1:
                            if (
                              ((H = V.sent()),
                              ($ = u),
                              _.tQ.updateTree(ef, function (e) {
                                var n = !0,
                                  t = !1,
                                  r = void 0;
                                try {
                                  for (
                                    var a, i = H[Symbol.iterator]();
                                    !(n = (a = i.next()).done);
                                    n = !0
                                  ) {
                                    var s = a.value;
                                    e.addNode(s.id, s, $, eL.Jq.Completion, {
                                      completionSampleFinishTime: Date.now(),
                                    }),
                                      ($ = s.id);
                                  }
                                } catch (e) {
                                  (t = !0), (r = e);
                                } finally {
                                  try {
                                    n || null == i.return || i.return();
                                  } finally {
                                    if (t) throw r;
                                  }
                                }
                              }),
                              _.tQ.setThreadCurrentLeafId(ef, $),
                              !(f && Q))
                            )
                              return [3, 3];
                            return [4, aX.getEnforcementToken()];
                          case 2:
                            (G = V.sent()), (V.label = 3);
                          case 3:
                            E({
                              model: e,
                              completionType: eL.Os.Next,
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
                [p, nj, nM, ep, ef]
              )),
              (E = (0, j.useCallback)(
                ((B = (0, eu._)(function (e) {
                  var n, t, r, a, i, s, o, l, u, c, m, f, g, p, x, v, b;
                  return (0, ed.Jh)(this, function (y) {
                    switch (y.label) {
                      case 0:
                        return (
                          (n = e.model),
                          (t = e.completionType),
                          (r = e.parentNodeId),
                          (a = e.metadata),
                          (s = void 0 === (i = e.focusOnNewCompletion) || i),
                          (o = e.completionMetadata),
                          (l = e.arkoseToken),
                          (u = _.tQ.getTree(ef)),
                          _.tQ.retainThread(ef),
                          (c = ""
                            .concat(eU.Vh)
                            .concat(h, "-")
                            .concat(Z.current++)),
                          ep(function (e) {
                            var n = new Set(e);
                            return n.add(c), n;
                          }),
                          _.tQ.updateTree(ef, function (e) {
                            e.addNode(c, "", r, eL.Jq.Completion);
                          }),
                          s && _.tQ.setThreadCurrentLeafId(ef, c),
                          (f = []),
                          (g = u.getNode(r)),
                          t === eL.Os.Next || t === eL.Os.Variant
                            ? ((m =
                                (null ===
                                  (p = (x = u.getNode(g.parentId)).message) ||
                                void 0 === p
                                  ? void 0
                                  : p.id) || x.id),
                              f.push(g.message))
                            : (m = g.message.id),
                          void 0 === (v = _.tQ.getServerThreadId(ef)) &&
                            (0, _.Zz)(ef) &&
                            _.tQ.updateInitialThreadDataForNewThread(ef, n, d),
                          [
                            4,
                            et.ZP.publicApiCompletionStream(
                              {
                                model: n,
                                completionType: t,
                                threadId: v,
                                continueFromSharedConversationId: nP,
                                historyDisabled: M,
                                parentMessageId: m,
                                messages: f,
                                arkoseToken: null != l ? l : null,
                                enabledPluginIds: d,
                                completionMetadata: o,
                              },
                              F(n, t, c, a)
                            ),
                          ]
                        );
                      case 1:
                        return (b = y.sent()), (A.current[c] = b), [2];
                    }
                  });
                })),
                function (e) {
                  return B.apply(this, arguments);
                }),
                [ef, h, ep, nP, M, d, F]
              ))),
            nT = (0, j.useCallback)(
              function () {
                if (eF) {
                  var e = _.tQ.getTree(ef).getBranchFromLeaf(eF);
                  e.forEach(function (e) {
                    T.abortAndRemoveById(e.id);
                  }),
                    ep(function (n) {
                      var t = new Set(n);
                      return (
                        e.forEach(function (e) {
                          t.delete(e.id);
                        }),
                        t
                      );
                    });
                }
              },
              [eF, ep, ef]
            ),
            nI =
              null === (J = nv.get(nx)) || void 0 === J
                ? void 0
                : J.tags.includes(nR.S.GPT_4),
            nS = ew.has(er.PL);
          (0, j.useEffect)(
            function () {
              nS && nI && aX.gatherData();
            },
            [nS, nI]
          );
          var nD = (0, j.useCallback)(
              ((L = (0, eu._)(function (e, n, t, r) {
                var a,
                  i,
                  s,
                  o,
                  l,
                  u,
                  c,
                  d,
                  m = arguments;
                return (0, ed.Jh)(this, function (f) {
                  switch (f.label) {
                    case 0:
                      if (
                        ((a = !(m.length > 4) || void 0 === m[4] || m[4]),
                        (i = m.length > 5 ? m[5] : void 0),
                        (s = m.length > 6 ? m[6] : void 0),
                        r && nT(),
                        (l = _.tQ.getTree(ef)),
                        e !== eL.Os.Continue && ns(l.getTextFromNode(n)))
                      )
                        return [2];
                      if (
                        ((u = i ? np : nx),
                        (c =
                          null === (o = nv.get(u)) || void 0 === o
                            ? void 0
                            : o.tags.includes(nR.S.GPT_4)),
                        !(nS && c))
                      )
                        return [3, 2];
                      return [4, aX.getEnforcementToken()];
                    case 1:
                      (d = f.sent()), (f.label = 2);
                    case 2:
                      return (
                        nZ({
                          model: u,
                          completionType: e,
                          parentNodeId: n,
                          metadata: t,
                          focusOnNewCompletion: a,
                          completionMetadata: s,
                          arkoseToken: null != d ? d : null,
                        }),
                        [2]
                      );
                  }
                });
              })),
              function (e, n, t, r) {
                return L.apply(this, arguments);
              }),
              [ef, ns, np, nx, nv, nS, nZ, nT]
            ),
            nA = (0, j.useCallback)(
              function (e, n, t, r) {
                _.tQ.updateTree(ef, function (a) {
                  a.addNode(e, t, n, eL.Jq.Prompt, void 0, r);
                });
              },
              [ef]
            ),
            nF = (0, j.useCallback)(
              function (e, n, t) {
                var r = n.content,
                  a = n.attachments,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                nA(e, eF, r, a.length > 0 ? { attachments: a } : {}),
                  nD(eL.Os.Next, e, t, !0, void 0, void 0, i);
              },
              [eF, nA, nD]
            ),
            nB = (0, _.nh)(ef, eF),
            nE = (0, j.useMemo)(
              function () {
                var e,
                  n,
                  t = nB.type === eL.Jq.Prompt,
                  r =
                    (null === (e = nB.metadata) || void 0 === e
                      ? void 0
                      : e.err) &&
                    (null === (n = nB.metadata) || void 0 === n
                      ? void 0
                      : n.errCode) !== a0.Dd;
                return !!(t || r) && 0 === eg.size;
              },
              [eg.size, nB]
            ),
            nL = (0, tv.Y8)(function (e) {
              return e.isoDate;
            }),
            nO = (0, j.useMemo)(
              function () {
                var e,
                  n =
                    (null === (e = nB.metadata) || void 0 === e
                      ? void 0
                      : e.errCode) === tv.uU;
                return nE && n && null != nL && "" !== nL;
              },
              [
                null === (X = nB.metadata) || void 0 === X ? void 0 : X.errCode,
                nE,
                nL,
              ]
            ),
            nU = (0, j.useCallback)(
              function (e, n) {
                var t =
                    !(arguments.length > 2) ||
                    void 0 === arguments[2] ||
                    arguments[2],
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : "none",
                  a = arguments.length > 4 ? arguments[4] : void 0,
                  i = _.tQ.getTree(ef).getParentPromptNode(e).id;
                nD(eL.Os.Variant, i, n, !1, t, a, { variantPurpose: r });
              },
              [nD, ef]
            ),
            nq = (0, j.useCallback)(
              function (e) {
                eM(en.s6.continueCompletion),
                  nD(eL.Os.Continue, e, { eventSource: "mouse" }, !1);
              },
              [eM, nD]
            ),
            nz = (0, j.useCallback)(
              function (e) {
                var n = _.tQ.getTree(ef).getLeafFromNode(e);
                _.tQ.setThreadCurrentLeafId(ef, n.id), eM(en.s6.changeNode);
              },
              [eM, ef]
            ),
            nQ = (0, j.useCallback)(
              function (e, n) {
                _.tQ.updateTree(ef, function (t) {
                  t.updateNodeText(e, n);
                });
              },
              [ef]
            ),
            nW = (0, j.useCallback)(
              function (e, n, t) {
                var r = _.tQ.getServerThreadId(ef);
                if (
                  (eM(en.s6.thumbRating, {
                    id: n,
                    threadId: r,
                    rating: t,
                    model: nx,
                  }),
                  void 0 !== r &&
                    et.ZP.submitMessageFeedback({
                      message_id: n,
                      conversation_id: r,
                      rating: t,
                    }),
                  e3(e),
                  e7(n),
                  e0(t),
                  _.tQ.updateTree(ef, function (n) {
                    var r = n.getMetadata(e);
                    n.updateNode(e, {
                      metadata: {
                        $set: (0, ec._)((0, g._)({}, r), { rating: t }),
                      },
                    });
                  }),
                  "thumbsDown" === t && eN)
                ) {
                  var a = _.tQ.getTree(ef).getConversationTurns(e || "root");
                  a9(a[a.length - 1]) &&
                    nU(
                      e,
                      { eventSource: "mouse", intent: "comparison" },
                      !1,
                      "comparison"
                    );
                }
              },
              [eM, ef, nx, eN, nU]
            ),
            nH = (0, j.useCallback)(
              function (e, n) {
                if (eX && null != e2 && "" !== e2 && (e || n.length > 0)) {
                  var t = _.tQ.getServerThreadId(ef);
                  eM(en.s6.reportResult, {
                    id: e4,
                    threadId: t,
                    content: e,
                    model: nx,
                    rating: eX,
                    tags: n,
                  }),
                    ef &&
                      e4 &&
                      et.ZP.submitMessageFeedback({
                        message_id: e4,
                        conversation_id: t,
                        rating: eX,
                        text: e,
                        tags: n,
                      });
                }
              },
              [eX, e2, ef, eM, e4, nx]
            ),
            n$ = (0, j.useCallback)(
              function (e, n) {
                if (eE && null != e$ && "" !== e$) {
                  var t = _.tQ.getServerThreadId(ef);
                  eM(en.s6.reportResult, {
                    id: e4,
                    threadId: t,
                    content: e,
                    model: nx,
                    rating: eX,
                    tags: n,
                  }),
                    et.ZP.submitSharedConversationReportFeedback({
                      message_id: e$,
                      shared_conversation_id: t,
                      text: e,
                      tags: n,
                    }),
                    eW(!0);
                }
              },
              [eX, eE, e$, ef, eM, e4, nx]
            ),
            nG = (0, j.useCallback)(
              ((O = (0, eu._)(function (e, n, t, r, a, i, s, o, l, u, c) {
                return (0, ed.Jh)(this, function (d) {
                  switch (d.label) {
                    case 0:
                      return [
                        4,
                        et.ZP.submitMessageComparisonFeedback({
                          feedback_version: "comparison_feedback_modal:a:1.0",
                          original_message_id: e,
                          new_message_id: n,
                          rating: t,
                          conversation_id: _.tQ.getServerThreadId(ef),
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
              function (e, n, t, r, a, i, s, o, l, u, c) {
                return O.apply(this, arguments);
              }),
              [ef]
            ),
            nV = (0, j.useCallback)(
              ((q = (0, eu._)(function (e, n, t, r, a, i, s) {
                return (0, ed.Jh)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [
                        4,
                        et.ZP.submitMessageComparisonFeedback({
                          feedback_version: "inline_regen_feedback:a:1.0",
                          original_message_id: e,
                          new_message_id: n,
                          rating: "none",
                          conversation_id: _.tQ.getServerThreadId(ef),
                          text: "",
                          tags: [],
                          completion_comparison_rating: t,
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
              function (e, n, t, r, a, i, s) {
                return q.apply(this, arguments);
              }),
              [ef]
            ),
            nJ = (0, j.useCallback)(
              function (e, n) {
                var t = _.tQ.getTree(ef).getConversationTurns(e),
                  r =
                    null == t
                      ? void 0
                      : t[(null == t ? void 0 : t.length) - 1].variantIds,
                  a = (null == r ? void 0 : r.length) === 1;
                nU(
                  e,
                  a
                    ? (0, ec._)((0, g._)({}, n), {
                        intent: "comparison_implicit",
                      })
                    : n,
                  !0,
                  a ? "comparison_implicit" : "none"
                );
              },
              [nU, ef]
            ),
            nY = (0, j.useCallback)(
              function (e) {
                _.tQ.updateTree(ef, function (n) {
                  n.deleteNode(e);
                });
              },
              [ef]
            ),
            nK = (0, j.useCallback)(function () {
              I.vm.closeModal(I.B.AccountPortal);
            }, []),
            nX = (0, ix.t)(function (e) {
              return {
                setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                showAccountPaymentModal: e.showAccountPaymentModal,
              };
            }),
            n0 = nX.showAccountPaymentModal,
            n1 = nX.setShowAccountPaymentModal,
            n2 = (0, j.useCallback)(
              function () {
                n1(!1);
              },
              [n1]
            ),
            n3 = (0, j.useCallback)(
              function (e, n) {
                var t = _.tQ.getTree(ef);
                if (t.isFirstCompletion && !eP) {
                  var r,
                    a = t.getParent(n);
                  (null === (r = a.metadata) || void 0 === r
                    ? void 0
                    : r.errCode) !== a0.Dd &&
                    setTimeout(function () {
                      nM(a.message.id);
                    }, 500);
                }
                T.abortAndRemoveById(n),
                  eg.has(n) &&
                    (_.tQ.updateTree(ef, function (e) {
                      e.updateNodeMessageMetadata(n, {
                        finish_details: { type: "interrupted" },
                      });
                    }),
                    ep(function (e) {
                      var t = new Set(e);
                      return t.delete(n), t;
                    }));
              },
              [nM, eP, eg, ep, ef]
            ),
            n5 = (0, j.useCallback)(function () {
              nf(!0);
            }, []);
          (0, j.useEffect)(
            function () {
              var e = aV().subscribe("AbortCompletion", n3),
                n = aV().subscribe("UnrecoverableError", n5);
              return function () {
                aV().unsubscribe(e), aV().unsubscribe(n);
              };
            },
            [n3, n5]
          );
          var n4 = (0, _.Hk)(ef),
            n7 = eD >= 2,
            n8 = (0, _.Zz)(ef) && !n7,
            n6 = (0, j.useCallback)(function () {
              nu(!0), el.m.setItem("oai/librarian/hasSeenWarning", "true");
            }, []),
            n9 = (0, j.useCallback)(function () {
              nr(!1);
            }, []),
            te = (0, _.lA)(ef, eF),
            tn = (0, _.dz)(ef, eF),
            tt = P(function (e) {
              return null != e.aborters[n4];
            }),
            tr = (0, j.useRef)(null),
            ta = (0, j.useMemo)(
              function () {
                return !tt && !te && tn;
              },
              [te, tn, tt]
            ),
            ti = (0, I.tN)(function (e) {
              return e.activeModals.has(I.B.AccountPortal);
            }),
            ts = (0, iM.Z)(),
            to = (0, _.XK)(ef),
            tl = (0, I.tN)(function (e) {
              return e.sharingModalThreadId === to;
            });
          (Q = (z = { clientThreadId: ef, currentModelId: nx }).clientThreadId),
            (W = z.currentModelId),
            (n = (0, tb.i0)(W, tb.dN.CODE_INTERPRETER)),
            (t = (0, j.useContext)(D.gB)),
            (r = (0, eh.kP)().session),
            (a = _.tQ.getServerThreadId(Q)),
            (0, eb.a)({
              queryKey: ["interpreterState", a],
              queryFn: iP,
              enabled: !!(n && a && !t && (null == r ? void 0 : r.accessToken)),
              cacheTime: 0,
            });
          var tu = (0, _.r7)(ef);
          return (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsxs)(a$(), {
                children: [
                  null != nk && (0, v.jsx)("title", { children: nk }),
                  ej &&
                    (0, v.jsxs)(v.Fragment, {
                      children: [
                        (0, v.jsx)("meta", {
                          property: "og:site_name",
                          content: "ChatGPT",
                        }),
                        (0, v.jsx)(
                          "meta",
                          { name: "robots", content: "noindex,nofollow" },
                          "robots"
                        ),
                        (0, v.jsx)(
                          "meta",
                          {
                            property: "og:title",
                            content: null != nk ? nk : "Shared Chat on ChatGPT",
                          },
                          "og:title"
                        ),
                        (0, v.jsx)(
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
              ew.has(er.i) ? (0, v.jsx)(io, {}) : null,
              !nl &&
                (0, v.jsx)(
                  eI.Z,
                  {
                    isOpen: !0,
                    onClose: n6,
                    icon: aW.Z,
                    title: ek.formatMessage(iA.doNotShareSensitive),
                    primaryButton: (0, v.jsx)(eT.ZP.Button, {
                      onClick: n6,
                      title: ek.formatMessage(iA.acknowledge),
                    }),
                    type: "danger",
                  },
                  "OnboardingModal"
                ),
              ni &&
                nt &&
                (0, v.jsx)(
                  eI.Z,
                  {
                    isOpen: !0,
                    onClose: n9,
                    icon: k.U0j,
                    title: ek.formatMessage(iA.contentPolicyViolation),
                    primaryButton: (0, v.jsx)(eT.ZP.Button, {
                      onClick: n9,
                      title: ek.formatMessage(iA.acknowledge),
                    }),
                    type: "danger",
                  },
                  "RestrictedTerms"
                ),
              tl &&
                null != to &&
                (0, v.jsx)(at, {
                  serverThreadId: to,
                  activeRequests: eg,
                  currentThreadModel: em.lastModelUsed,
                }),
              null != eX &&
                (0, v.jsx)(ie, {
                  ratingModalNodeId: e2,
                  ratingModalOpen: eX,
                  onCloseRatingModal: function () {
                    return e0(void 0);
                  },
                  handleSubmitFeedback: nH,
                  onHandleChangeFeedbackComparisonRating: nG,
                  currentModelId: nx,
                  feedbackTextareaRef: e8,
                  clientThreadId: ef,
                  activeRequests: eg,
                  onChangeItemInView: nz,
                  onRequestMoreCompletions: nU,
                  onUpdateNode: nQ,
                  onChangeRating: nW,
                  onDeleteNode: nY,
                  onRequestCompletion: nD,
                }),
              eE &&
                (0, v.jsx)(ie, {
                  ratingModalNodeId: e$,
                  ratingModalOpen: "report",
                  onCloseRatingModal: function () {
                    return eq(!1);
                  },
                  handleSubmitFeedback: n$,
                  onHandleChangeFeedbackComparisonRating: function () {},
                  currentModelId: nx,
                  feedbackTextareaRef: e8,
                  clientThreadId: ef,
                  activeRequests: eg,
                  onChangeItemInView: nz,
                  onRequestMoreCompletions: nU,
                  onUpdateNode: nQ,
                  onChangeRating: nW,
                  onDeleteNode: nY,
                  onRequestCompletion: nD,
                }),
              eQ &&
                (0, v.jsx)(eI.Z, {
                  onClose: function () {
                    return eW(!1);
                  },
                  isOpen: !0,
                  icon: aW.Z,
                  title: ek.formatMessage(iA.reportModalThankYouTitle),
                  description: ek.formatMessage(
                    iA.reportModalThankYouDescription
                  ),
                  primaryButton: (0, v.jsx)(eT.ZP.Button, {
                    onClick: function () {
                      return eW(!1);
                    },
                    title: ek.formatMessage(iA.reportModalThankYouDismiss),
                  }),
                  type: "danger",
                }),
              eJ &&
                (0, v.jsx)(ie, {
                  ratingModalNodeId: eF,
                  ratingModalOpen: "moderate",
                  onCloseRatingModal: function () {
                    return eY(!1);
                  },
                  handleSubmitFeedback: Y(),
                  onHandleChangeFeedbackComparisonRating: function () {},
                  currentModelId: nx,
                  feedbackTextareaRef: e8,
                  clientThreadId: ef,
                  activeRequests: eg,
                  onChangeItemInView: nz,
                  onRequestMoreCompletions: nU,
                  onUpdateNode: nQ,
                  onChangeRating: nW,
                  onDeleteNode: nY,
                  onRequestCompletion: nD,
                }),
              (0, v.jsx)(ij, {}),
              (0, v.jsx)(iE, {
                children:
                  !eR &&
                  (n8 || n7) &&
                  ((H = (0, v.jsx)(
                    rK,
                    {
                      onChangeItemInView: nz,
                      onRequestMoreCompletions: nU,
                      onUpdateNode: nQ,
                      onChangeRating: nW,
                      onDeleteNode: nY,
                      onRequestCompletion: nD,
                      onHandleChangeVariantFeedbackInlineComparisonRating: nV,
                      isNewThread: n8,
                      clientThreadId: ef,
                      activeRequests: eg,
                      currentThreadModel: em.lastModelUsed,
                      initiallyHighlightedMessageId: ev,
                      inlineEmbeddedDisplay: !1,
                      promptTextareaRef: tr,
                    },
                    ef
                  )),
                  ej
                    ? (0, v.jsx)("div", {
                        className: "h-full overflow-auto dark:bg-gray-800",
                        children: H,
                      })
                    : (0, v.jsx)(iS, { children: H })),
              }),
              (0, v.jsxs)(iL, {
                children: [
                  ew.has("model_preview") &&
                    n8 &&
                    (null == nb ? void 0 : nb.tags.includes(nR.S.GPT_4)) &&
                    (0, v.jsx)("div", {
                      className:
                        "stretch mx-2 mb-2 text-center text-xs text-gray-600 dark:text-gray-200 md:mx-4 md:text-sm lg:mx-auto lg:max-w-3xl",
                      children: ts.textareaDisclaimer,
                    }),
                  !nO &&
                    !ej &&
                    (0, v.jsx)(is.Z, {
                      children: (0, v.jsx)(
                        iv.ZP,
                        {
                          clientThreadId: ef,
                          onRequestMoreCompletions: nJ,
                          onCreateNewCompletion: nF,
                          onAbortCompletion: n3,
                          onContinueGenerating: nq,
                          currentModelId: nx,
                          isCompletionInProgress: eg.has(n4),
                          className: (0, U.Z)(
                            "stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto",
                            ne
                              ? "mx-auto max-w-[44rem] px-2 sm:px-0"
                              : "lg:max-w-2xl xl:max-w-3xl"
                          ),
                          shouldRetry: nE,
                          canContinue: ta,
                          suggestions:
                            void 0 !== nC &&
                            (null == nC ? void 0 : nC.messageId) ===
                              (null ===
                                (ea = _.tQ.getTree(ef).getLastValidNode(eF)) ||
                              void 0 === ea
                                ? void 0
                                : null === (es = ea.message) || void 0 === es
                                ? void 0
                                : es.id)
                              ? null == nC
                                ? void 0
                                : nC.suggestions
                              : void 0,
                          disabled: !nh.size,
                          canPause: tt,
                          isInteractableSharedThread: tu,
                          ref: tr,
                        },
                        ef
                      ),
                    }),
                  ej &&
                    (0, v.jsx)(v.Fragment, {
                      children: (0, v.jsxs)("div", {
                        className:
                          "relative flex h-full w-full flex-1 items-center justify-center gap-2",
                        children: [
                          (0, v.jsx)(ei.z, {
                            as: "link",
                            to: ey,
                            children: ek.formatMessage(
                              iA.sharedConversationContinueConversation
                            ),
                          }),
                          eS &&
                            (0, v.jsx)(ei.z, {
                              onClick: function () {
                                eY(!0);
                              },
                              children: ek.formatMessage(
                                iA.sharedConversationModerateConversation
                              ),
                            }),
                        ],
                      }),
                    }),
                  (0, v.jsx)("div", {
                    className:
                      "px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3",
                    children: ej
                      ? (0, v.jsx)(iF, {
                          onClickReportSharedConversation: function () {
                            eG(eF), eq(!0);
                          },
                        })
                      : e6
                      ? (0, v.jsx)("span", {
                          children: (0, v.jsx)(
                            w.Z,
                            (0, ec._)(
                              (0, g._)({}, iA.mayProduceInaccurateInformation),
                              {
                                values: {
                                  link: function (e) {
                                    return (0, v.jsx)("a", {
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
                      : (0, v.jsx)("span", {
                          children: (0, v.jsx)(
                            w.Z,
                            (0, ec._)((0, g._)({}, iA.freeResearchPreview), {
                              values: {
                                link: function (e) {
                                  return (0, v.jsx)("a", {
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
              e9 && (0, v.jsx)(ip.Z, { isOpen: n0, onClose: n2 }),
              void 0 !== e6 &&
                e6 &&
                (0, v.jsx)(ig, { isOpen: ti, onClose: nK }),
              nm &&
                (0, v.jsx)(
                  eI.Z,
                  {
                    onClose: Y(),
                    isOpen: !0,
                    icon: aW.Z,
                    title: ek.formatMessage(iA.somethingWentWrong),
                    description: ek.formatMessage(iA.tryAgainLater),
                    primaryButton: (0, v.jsx)(eT.ZP.Button, {
                      onClick: function () {
                        ex(), nf(!1);
                      },
                      title: ek.formatMessage(iA.resetThread),
                    }),
                    type: "danger",
                  },
                  "UnrecoverableErrorModal"
                ),
            ],
          });
        },
        iE = X.Z.div(iD()),
        iL = X.Z.div(iR());
      function iO(e) {
        var n,
          t = e.clientThreadId,
          r = null !== (n = _.tQ.getTitle(t)) && void 0 !== n ? n : "New chat",
          a = A(t, r, !0),
          i = a.resolvedTitle,
          s = a.isTypingEffect,
          o = (0, j.useContext)(D.QL),
          l = o.historyDisabled,
          u = o.toggleHistoryDisabled;
        return (0, v.jsx)(v.Fragment, {
          children: l
            ? (0, v.jsxs)("button", {
                className:
                  "flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",
                onClick: function () {
                  return u();
                },
                children: [
                  (0, v.jsx)(es.ZP, { icon: k.$IY }),
                  (0, v.jsx)(w.Z, (0, g._)({}, iq.enableChatHistory)),
                ],
              })
            : s && null != i
            ? (0, v.jsx)(E, { text: i })
            : null != i
            ? i
            : (0, v.jsx)(w.Z, (0, g._)({}, iq.newChat)),
        });
      }
      var iU =
          ((l = function (e) {
            var n = e.clientThreadId,
              t = e.setClientThreadId,
              r = (0, p._)(e, ["clientThreadId", "setClientThreadId"]),
              a = (0, j.useContext)(D.gB),
              i = (0, _.UL)(n),
              s = r.setActiveRequests,
              o = (0, _.XK)(n),
              l = (0, y.useRouter)(),
              u = (0, S.hz)(),
              c = (0, j.useContext)(D.QL).historyDisabled,
              d = (0, nR.Xy)(i.lastModelUsed, n),
              m = (0, b.NL)();
            (0, j.useEffect)(
              function () {
                return (
                  _.tQ.retainThread(n),
                  function () {
                    setTimeout(function () {
                      m.invalidateQueries(["conversation", n]);
                    }, 0),
                      _.tQ.releaseThread(n);
                  }
                );
              },
              [n, m]
            ),
              (0, j.useEffect)(
                function () {
                  I.vm.closeSharingModal();
                },
                [n, o]
              );
            var f = (0, j.useCallback)(
                function () {
                  t((0, _.OX)()),
                    d.tags.includes(nR.S.GPT_4)
                      ? l.replace("/", void 0, { shallow: !0 })
                      : l.replace("/?model=".concat(d.id));
                },
                [t, d.tags, d.id, l]
              ),
              h = (0, I.tN)(function (e) {
                return e.activeSidebar;
              }),
              x = (0, R.w$)();
            return (
              (0, j.useEffect)(
                function () {
                  return function () {
                    T.abortAllAndReset(), s(new Set());
                  };
                },
                [s, n]
              ),
              (0, v.jsxs)(aQ.Z, {
                onResetThread: f,
                showNavigation: !a,
                renderTitle: (0, v.jsx)(iO, { clientThreadId: n }),
                children: [
                  (0, v.jsxs)(aQ.Z.NavigationPrimaryActionDesktop, {
                    onClick: f,
                    children: [
                      (0, v.jsx)(es.ZP, { icon: c ? k.Bw1 : k.OvN }),
                      (0, v.jsx)(
                        w.Z,
                        (0, g._)({}, c ? iq.clearChat : iq.newChat)
                      ),
                    ],
                  }),
                  (0, v.jsx)(aQ.Z.NavigationPrimaryActionMobile, {
                    onClick: f,
                    children: (0, v.jsx)(es.ZP, {
                      icon: c ? k.Bw1 : k.OvN,
                      size: "medium",
                    }),
                  }),
                  (0, v.jsx)(aQ.Z.NavigationContent, {
                    children: (0, v.jsx)(aS, {
                      activeId: c ? void 0 : o,
                      onNewThread: f,
                      setActiveRequests: s,
                    }),
                  }),
                  (0, v.jsx)(
                    iB,
                    (0, g._)(
                      {
                        initialThreadData: i,
                        clientThreadId: n,
                        handleResetThread: f,
                      },
                      r
                    ),
                    n
                  ),
                  (0, v.jsxs)(aQ.Z.Sidebars, {
                    children: [
                      u.has("debug") &&
                        "debug" === h &&
                        (0, v.jsx)(rO.fv, {
                          clientThreadId: n,
                          slideOver: !x,
                          onClose: function () {
                            return I.vm.toggleActiveSidebar("debug");
                          },
                          isOpen: !0,
                        }),
                      u.has("tools3_dev") &&
                        (0, v.jsx)(az.ZP, { slideOver: !x }),
                    ],
                  }),
                ],
              })
            );
          }),
          function (e) {
            var n = e.clientThreadId;
            (0, _.ax)(n);
            var t = (0, _.UL)(n),
              r = (0, x._)((0, j.useState)(new Set()), 2),
              a = r[0],
              i = r[1];
            return (
              (0, j.useEffect)(
                function () {
                  I.vm.setActiveSidebar(!1), T.reset(), i(new Set());
                },
                [t.threadId]
              ),
              (0, v.jsx)(
                l,
                (0, g._)({}, e, { activeRequests: a, setActiveRequests: i })
              )
            );
          }),
        iq = (0, C.vU)({
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
    81372: function (e, n, t) {
      "use strict";
      t.d(n, {
        ZP: function () {
          return ey;
        },
        go: function () {
          return eC;
        },
      });
      var r,
        a,
        i = t(39324),
        s = t(71209),
        o = t(22830),
        l = t(4337),
        u = t(35250),
        c = t(19841),
        d = t(70079),
        m = t(76483),
        f = t(97739),
        h = t(2827),
        g = t(1454),
        p = t(75908),
        x = t(35290),
        v = t(3001),
        b = t(34303),
        y = t(82841),
        j = t(36218),
        k = t(75955),
        w = t(32402),
        C = t(69403),
        _ = t(88038),
        M = t(75527),
        N = t(21437),
        P = t(59110),
        Z = t(32983),
        T = t(77442),
        I = t(66958),
        S = t(27009),
        D = t(38317),
        R = t(57924);
      function A(e) {
        var n = e.disabled,
          t = e.getInputProps,
          r = e.onClick,
          a = (0, p.Z)();
        return (0, u.jsxs)(R.u, {
          label: a.formatMessage(F.uploadFile),
          side: "top",
          sideOffset: 4,
          children: [
            (0, u.jsx)(I.z, {
              onClick: function (e) {
                e.preventDefault(), r();
              },
              disabled: n,
              color: "none",
              className:
                "rounded-full bg-gray-500 p-0 text-white hover:bg-black",
              "aria-label": a.formatMessage(F.uploadFile),
              children: (0, u.jsx)(D.ZP, { icon: g.OvN, size: "small" }),
            }),
            (0, u.jsx)("input", (0, i._)({}, t({ className: "hidden" }))),
          ],
        });
      }
      var F = (0, v.vU)({
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
        B = t(21722),
        E = t(39889),
        L = t(24396),
        O = t(24274),
        U = t(59710),
        q = t(97688),
        z = t(25094),
        Q = { duration: 20, hasCloseButton: !0 },
        W = t(56115),
        H = Math.floor(Math.log(1201) / Math.log(2)),
        $ = { duration: 20, hasCloseButton: !0 },
        G = t(30931),
        V = t(90076),
        J = t(97732),
        Y = t(56060),
        K = t(37812),
        X = t(54655);
      function ee() {
        return (0, L.a)(
          ["visionContent"],
          (0, B._)(function () {
            return (0, E.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    O.ZP.getContent("vision").catch(function () {
                      return (
                        q.m.danger("Failed to load content"),
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
      function en(e) {
        var n = e.onPick,
          t = (0, o._)((0, d.useState)(!1), 2),
          r = t[0],
          a = t[1],
          s = (0, d.useCallback)(
            function (e, t) {
              a(!1), n(e, t);
            },
            [n]
          ),
          l = (0, p.Z)(),
          c = ee().data,
          m = (null == c ? void 0 : c.examples) || [];
        return 0 === m.length
          ? null
          : (0, u.jsxs)(Y.fC, {
              onOpenChange: a,
              open: r,
              children: [
                (0, u.jsx)(Y.xz, {
                  asChild: !0,
                  children: (0, u.jsx)("div", {
                    className: "cursor-pointer",
                    children: (0, u.jsx)(R.u, {
                      label: l.formatMessage(er.tryAnExample),
                      side: "top",
                      sideOffset: 4,
                      open: !0 !== r && void 0,
                      children: (0, u.jsxs)("div", {
                        children: [
                          (0, u.jsx)(D.ZP, {
                            className: "text-gray-500 dark:text-gray-300",
                            icon: X.DcN,
                          }),
                          (0, u.jsx)(K.T, {
                            children: l.formatMessage(er.tryAnExample),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, u.jsx)(Y.h_, {
                  children: (0, u.jsxs)(Y.VY, {
                    side: "top",
                    sideOffset: 8,
                    className:
                      "relative max-w-md animate-slideUpAndFade select-none rounded-xl border-gray-100 bg-white p-3 text-sm text-gray-600 shadow-xs dark:bg-gray-900 dark:text-white",
                    children: [
                      (0, u.jsxs)("div", {
                        className:
                          "mb-3 flex items-center justify-center gap-2 text-center text-sm font-medium",
                        children: [
                          (0, u.jsx)(D.ZP, {
                            className: "text-gray-500 dark:text-gray-300",
                            icon: X.DcN,
                          }),
                          (0, u.jsx)(x.Z, (0, i._)({}, er.tryAnExample)),
                        ],
                      }),
                      (0, u.jsx)("div", {
                        className: "flex flex-col gap-2",
                        children: m.map(function (e) {
                          return (0,
                          u.jsx)(et, { imageUrl: e.imageUrl, thumbnailUrl: e.thumbnailUrl, label: e.label, prompt: e.prompt, onPick: s }, e.imageUrl);
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            });
      }
      function et(e) {
        var n = e.imageUrl,
          t = e.thumbnailUrl,
          r = e.label,
          a = e.prompt,
          i = e.onPick,
          s = (0, d.useCallback)(
            (0, B._)(function () {
              var e, t, r, s, o;
              return (0, E.Jh)(this, function (l) {
                switch (l.label) {
                  case 0:
                    return l.trys.push([0, 3, , 4]), [4, fetch(n)];
                  case 1:
                    if (!(e = l.sent()).ok)
                      throw Error("Failed to load example image");
                    return [4, e.blob()];
                  case 2:
                    return (
                      (t = l.sent()),
                      (s = (r = n.split("/"))[r.length - 1]),
                      i(
                        new File([t], s, {
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
                      q.m.danger("Failed to load example image"),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            }),
            [n, i, a]
          );
        return (0, u.jsxs)("button", {
          className:
            "group flex h-14 w-64 flex-row items-stretch overflow-hidden rounded text-left",
          onClick: s,
          children: [
            (0, u.jsx)("div", {
              className: "w-14 flex-none bg-cover bg-center",
              style: { backgroundImage: "url(".concat(t, ")") },
            }),
            (0, u.jsxs)("div", {
              className:
                "items-left flex min-w-0 flex-auto flex-col justify-center bg-gray-50 px-3 transition group-hover:bg-gray-100 dark:bg-gray-800 dark:group-hover:bg-gray-700",
              children: [
                (0, u.jsx)("div", {
                  className: "font-medium leading-none",
                  children: r,
                }),
                (0, u.jsx)("div", {
                  className:
                    "mt-2 truncate text-xs leading-none text-gray-600 dark:text-gray-300",
                  children: a,
                }),
              ],
            }),
          ],
        });
      }
      var er = (0, v.vU)({
          tryAnExample: {
            id: "VisionExamplePicker.tryAnExample",
            defaultMessage: "Try an example",
            description: "Label for examples popover",
          },
        }),
        ea = t(13002),
        ei = t(85023),
        es = t(59114),
        eo = t(48727),
        el = "oai/apps/hasSeenVisionOnboarding";
      function eu(e) {
        var n,
          t = e.currentModelConfig,
          r = e.disabled,
          a = (0, o._)(
            (0, d.useState)(function () {
              var e = ei.m.getItem(el);
              return "number" == typeof e && e;
            }),
            2
          ),
          i = a[0],
          s = a[1];
        return (null == t
          ? void 0
          : null === (n = t.capabilities) || void 0 === n
          ? void 0
          : n.multimodal) === void 0 ||
          r ||
          !1 !== i
          ? null
          : (0, u.jsx)(ed, {
              onDismiss: function () {
                var e = Date.now();
                ei.m.setItem(el, e), s(e);
              },
            });
      }
      var ec = { lock: ea.Zp7, use_cases: ea.dvR };
      function ed(e) {
        var n = e.onDismiss,
          t = ee().data,
          r = null == t ? void 0 : t.onboarding;
        return r
          ? (0, u.jsx)(eo.Z, {
              isOpen: !0,
              onClose: n,
              type: "success",
              primaryButton: (0, u.jsx)(es.ZP.Button, {
                title: "Continue",
                color: "primary",
                onClick: n,
              }),
              title: r.title,
              size: "custom",
              className:
                "max-w-[510px] text-gray-800 outline-none dark:text-gray-300",
              children: r.content.map(function (e, n) {
                if ("paragraph" === e.type)
                  return (0, u.jsx)("p", { children: e.text }, n);
                if ("callout" === e.type) {
                  var t;
                  return (0, u.jsx)(
                    em,
                    {
                      icon:
                        null !== (t = ec[e.icon]) && void 0 !== t
                          ? t
                          : ec.beaker,
                      title: e.title,
                      text: e.text,
                      color: e.color || 0,
                    },
                    n
                  );
                }
                return null;
              }),
            })
          : null;
      }
      function em(e) {
        var n = e.icon,
          t = e.title,
          r = e.text,
          a = e.color;
        return (0, u.jsxs)("div", {
          className: "my-4 flex flex-row",
          children: [
            (0, u.jsx)("div", {
              className: (0, c.Z)(
                "w-14 flex-none pl-2 pt-2",
                0 === a ? "text-brand-green" : "text-brand-purple"
              ),
              children: (0, u.jsx)(n, { size: 32 }),
            }),
            (0, u.jsxs)("div", {
              className: "max-w-60 flex-auto",
              children: [
                (0, u.jsx)("div", {
                  className: "font-bold text-black dark:text-white",
                  children: t,
                }),
                (0, u.jsx)("div", { children: r }),
              ],
            }),
          ],
        });
      }
      function ef() {
        var e = (0, l._)([
          "absolute inset-0 bg-gray-100 opacity-80 flex gap-2 justify-center items-center rounded-xl dark:bg-gray-800 dark:text-gray-100",
        ]);
        return (
          (ef = function () {
            return e;
          }),
          e
        );
      }
      function eh() {
        var e = (0, l._)(["mb-3 mx-[10px] md:mx-0"]);
        return (
          (eh = function () {
            return e;
          }),
          e
        );
      }
      function eg() {
        var e = (0, l._)([
          "absolute p-1 rounded-md bottom-[10px] md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white",
        ]);
        return (
          (eg = function () {
            return e;
          }),
          e
        );
      }
      function ep() {
        var e = (0, l._)(["absolute left-4 bottom-2 md:left-4 md:bottom-3.5"]);
        return (
          (ep = function () {
            return e;
          }),
          e
        );
      }
      function ex() {
        var e = (0, l._)([
          "absolute p-1 bottom-[10px] md:bottom-3 md:p-2 right-12 transition-opacity ",
          "",
        ]);
        return (
          (ex = function () {
            return e;
          }),
          e
        );
      }
      function ev() {
        var e = (0, l._)([
          "\nflex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs\n",
          "\n",
          "\n",
        ]);
        return (
          (ev = function () {
            return e;
          }),
          e
        );
      }
      function eb() {
        var e = (0, l._)([
          "",
          " flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center",
        ]);
        return (
          (eb = function () {
            return e;
          }),
          e
        );
      }
      ((r = a || (a = {}))[(r.None = 0)] = "None"),
        (r[(r.Multimodal = 1)] = "Multimodal"),
        (r[(r.Interpreter = 2)] = "Interpreter");
      var ey = (0, d.forwardRef)(function (e, n) {
        var t,
          r,
          a,
          l,
          f,
          v,
          b,
          Y,
          K,
          X,
          ee,
          et,
          er,
          ea,
          ei,
          es,
          eo,
          el,
          ec,
          ed,
          em,
          ef,
          eh,
          eg,
          ep,
          ex,
          ev,
          eb,
          ey,
          eC,
          eD,
          eR,
          eA,
          eF,
          eB,
          eE,
          eL,
          eO,
          eU,
          eq,
          ez,
          eQ,
          eW,
          eH,
          e$,
          eG,
          eV,
          eJ,
          eY,
          eK,
          eX,
          e0,
          e1,
          e2 = e.onAbortCompletion,
          e3 = e.onCreateNewCompletion,
          e5 = e.onRequestMoreCompletions,
          e4 = e.onContinueGenerating,
          e7 = e.currentModelId,
          e8 = e.clientThreadId,
          e6 = e.isCompletionInProgress,
          e9 = e.className,
          ne = e.disabled,
          nn = void 0 !== ne && ne,
          nt = e.shouldRetry,
          nr = e.canPause,
          na = void 0 !== nr && nr,
          ni = e.canContinue,
          ns = void 0 !== ni && ni,
          no = e.suggestions,
          nl = e.isInteractableSharedThread,
          nu = (0, p.Z)(),
          nc = (0, M.oq)(e8),
          nd = (0, M.Hk)(e8),
          nm = (0, J.Ri)(e7),
          nf = (0, T.w$)(),
          nh = (0, y.WS)(),
          ng = (0, d.useContext)(Z.gt).serviceStatus,
          np = (0, d.useContext)(Z.QL).historyDisabled,
          nx = (0, d.useRef)(null),
          nv = (0, o._)((0, d.useState)(""), 2),
          nb = nv[0],
          ny = nv[1],
          nj = (0, o._)((0, d.useState)(null), 2),
          nk = nj[0],
          nw = nj[1],
          nC = (0, V.B9)(),
          n_ = null !== e7 ? nC.get(e7) : void 0,
          nM =
            (0, N.Fl)().isCodeInterpreterAvailable &&
            (null == n_
              ? void 0
              : null === (eK = n_.enabledTools) || void 0 === eK
              ? void 0
              : eK.includes("tools2"))
              ? 2
              : (null == n_
                  ? void 0
                  : null === (eX = n_.capabilities) || void 0 === eX
                  ? void 0
                  : eX.multimodal) !== void 0 ||
                (null == n_
                  ? void 0
                  : null === (e0 = n_.enabledTools) || void 0 === e0
                  ? void 0
                  : e0.includes(
                      "Hi Jane, come visit us for lunch at OpenAI? \uD83D\uDC9C"
                    ))
              ? 1
              : 0,
          nN = 0 !== nM,
          nP = (0, d.useCallback)(
            function (e, n) {
              null === n
                ? nh(j.s6.uploadFile, { eventSource: "mouse" })
                : nh(j.s6.uploadFile, { eventSource: "drag" }),
                e.length > 0 && nw(e[0]);
            },
            [nh]
          ),
          nZ = (0, d.useCallback)(
            function (e) {
              e[0].errors.forEach(function (e) {
                var n = (function (e) {
                  var n = e.code,
                    t = e.message;
                  switch (n) {
                    case S.jK.FileTooLarge:
                      return F.errorFileTooLarge;
                    case S.jK.TooManyFiles:
                      return F.errorTooManyFiles;
                    default:
                      return t;
                  }
                })(e);
                "string" == typeof n
                  ? q.m.danger(n)
                  : q.m.danger(nu.formatMessage(n, { size: 512 }));
              });
            },
            [nu]
          ),
          nT = (0, d.useCallback)(function () {
            nw(null), nE(new Date().toString());
          }, []),
          nI = (0, m.uI)(
            (0, i._)(
              {
                maxFiles: 1,
                disabled: nn || !nN,
                noClick: !0,
                onDropAccepted: nP,
                onDropRejected: nZ,
                multiple: !1,
                maxSize: 536870912,
              },
              (0, d.useMemo)(
                function () {
                  var e,
                    n,
                    t,
                    r =
                      null !==
                        (t =
                          null == n_
                            ? void 0
                            : null === (e = n_.capabilities) || void 0 === e
                            ? void 0
                            : null === (n = e.multimodal) || void 0 === n
                            ? void 0
                            : n.accepted_mime_types) && void 0 !== t
                        ? t
                        : [];
                  if (void 0 === r) return {};
                  var a = {
                    "image/jpeg": [".jpg", ".jpeg"],
                    "image/svg+xml": [".svg"],
                  };
                  return {
                    accept: r.reduce(function (e, n) {
                      return (
                        n in a
                          ? (e[n] = a[n])
                          : n.includes("/") &&
                            (e[n] = [".".concat(n.split("/")[1])]),
                        e
                      );
                    }, {}),
                  };
                },
                [n_]
              )
            )
          ),
          nS = nI.getRootProps,
          nD = nI.getInputProps,
          nR = nI.isDragActive,
          nA = nI.open,
          nF = (0, o._)((0, d.useState)(new Date().toString()), 2),
          nB = nF[0],
          nE = nF[1],
          nL =
            null !== nk
              ? JSON.stringify({
                  file: nk.name,
                  modified: nk.lastModified,
                  size: nk.size,
                  queryHash: nB,
                })
              : null,
          nO =
            ((l = 2 === nM ? nk : null),
            (b = ((f = (0, z.VF)()),
            (v = (0, L.a)({
              queryKey: ["interpreterUploadLink", nL],
              queryFn: (0, B._)(function () {
                return (0, E.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        O.ZP.createFile(l.name, l.size, w.Ei.AceUpload).catch(
                          function (e) {
                            var n = f("default_create_entry_error", {
                              fileName: null == l ? void 0 : l.name,
                            });
                            throw (
                              (void 0 !== e.code && (n = f(e.code)),
                              q.m.danger(n, Q),
                              e)
                            );
                          }
                        ),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!l,
            }))).data),
            (Y = v.isLoading),
            (K = v.isError),
            (X =
              (null == b ? void 0 : b.status) === "success"
                ? b.upload_url
                : void 0),
            (et = (ee = (0, L.a)({
              queryKey: ["startFileUpload", nL],
              queryFn: (0, B._)(function () {
                return (0, E.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        O.ZP.uploadFileToAzureStorage(l, X).then(function (e) {
                          if (e.ok) return X;
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(l && X),
            })).data),
            (er = ee.isLoading),
            (ea = ee.isError),
            (ei =
              (null == b ? void 0 : b.status) === "success" ? b.file_id : null),
            (ec = ((es = M.tQ.getServerThreadId(e8)),
            (eo = (0, z.VF)()),
            (el = (0, L.a)({
              queryKey: ["processCodeInterpeterUpload", nL],
              queryFn: (0, B._)(function () {
                return (0, E.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        O.ZP.processCodeInterpeterUpload(
                          null != es ? es : null,
                          ei,
                          l.name
                        ).catch(function (e) {
                          var n = eo("default_download_link_error", {
                            fileName: null == l ? void 0 : l.name,
                          });
                          throw (
                            (void 0 !== e.code && (n = eo(e.code)),
                            q.m.danger(n, Q),
                            null == nT || nT(null == l ? void 0 : l.name),
                            new U.gK(n, void 0, e.code))
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(null !== ei && null !== l && void 0 !== et),
            }))).data),
            (ed = el.isLoading),
            (em = el.isError),
            (ef = (0, d.useMemo)(
              function () {
                return ec ? 50 : void 0 !== et ? 30 : b ? 10 : void 0;
              },
              [et, ec, b]
            )),
            (eh = K || ea || em),
            (eg =
              Y || er || ed || (null == ec ? void 0 : ec.status) !== "success"),
            (0, d.useEffect)(
              function () {
                if (eh) {
                  var e;
                  nT(
                    null !== (e = null == l ? void 0 : l.name) && void 0 !== e
                      ? e
                      : ""
                  );
                }
              },
              [null == l ? void 0 : l.name, eh, nT]
            ),
            (0, d.useMemo)(
              function () {
                var e =
                    null !== l &&
                    !!(null == l ? void 0 : l.name) &&
                    (null == ec ? void 0 : ec.status) === "success" &&
                    void 0 !== et,
                  n = e ? { name: l.name, url: et } : null;
                return {
                  isLoading: eg,
                  loadingPercentage: eh || e ? void 0 : ef,
                  isError: eh,
                  uploadedFile: n,
                };
              },
              [l, null == ec ? void 0 : ec.status, et, eh, eg, ef]
            )),
          nU =
            ((ep = 1 === nM ? nk : null),
            (ex = w.Ei.Multimodal),
            (eb = (ev = (0, L.a)({
              queryKey: ["createFile", nL],
              queryFn: (0, B._)(function () {
                var e, n, t;
                return (0, E.Jh)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (e = (0, W.Z)(new Date(), "yyyy-MM-dd_HH-mm-ss")),
                        (n = ep.name.split(".").pop()),
                        (t = "chatgpt-file-".concat(e, ".").concat(n)),
                        [
                          4,
                          O.ZP.createFile(t, ep.size, ex).catch(function (e) {
                            throw (
                              (console.error(
                                "Failed to create file for ".concat(
                                  null == ep ? void 0 : ep.name
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
              enabled: !!ep,
            })).data),
            (ey = ev.isLoading),
            (eC = ev.isError),
            (eD = null == eb ? void 0 : eb.file_id),
            (eR = null == eb ? void 0 : eb.upload_url),
            (eF = (eA = (0, L.a)({
              queryKey: ["uploadFile", nL],
              queryFn: (0, B._)(function () {
                var e, n, t, r;
                return (0, E.Jh)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        a.trys.push([0, 7, , 8]),
                        [4, O.ZP.uploadFileToAzureStorage(ep, eR)]
                      );
                    case 1:
                      if ((e = a.sent()).ok) return [3, 6];
                      (n = "Unknown error"), (a.label = 2);
                    case 2:
                      return a.trys.push([2, 4, , 5]), [4, e.text()];
                    case 3:
                      return (n = a.sent()), [3, 5];
                    case 4:
                      return a.sent(), [3, 5];
                    case 5:
                      return (
                        console.error(
                          "File upload failed at blobstore upload step",
                          e.status,
                          n
                        ),
                        O.ZP.markFileUploadFailed(eD, n),
                        [2, { success: !1 }]
                      );
                    case 6:
                      return [3, 8];
                    case 7:
                      throw (
                        (console.error(
                          "File upload failed due to a network error",
                          (t = a.sent())
                        ),
                        (r = "Unknown error"),
                        t instanceof Error && (r = t.message),
                        O.ZP.markFileUploadFailed(eD, r),
                        t)
                      );
                    case 8:
                      return [4, O.ZP.markFileUploadComplete(eD)];
                    case 9:
                      return a.sent(), [2, { success: !0 }];
                  }
                });
              }),
              enabled: !!(ep && eD && eR),
            })).data),
            (eB = eA.isLoading),
            (eE = eA.isError),
            (eU = ((eL = (0, z.VF)()),
            (eO = (0, L.a)({
              queryKey: ["pollForFileReady", nL],
              queryFn: (0, B._)(function () {
                return (0, E.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        O.ZP.getFileDownloadLink(eD).catch(function (e) {
                          var n = eL("default_download_link_error", {
                            fileName: null == ep ? void 0 : ep.name,
                          });
                          throw (
                            (void 0 !== e.code && (n = eL(e.code)),
                            q.m.danger(n, $),
                            e)
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              enabled: !!(eF && ep && eD),
              refetchInterval: function (e, n) {
                if ((null == e ? void 0 : e.status) === w.KF.Retry) {
                  var t = n.state.dataUpdateCount;
                  return t > H
                    ? (null == nT || nT(null == ep ? void 0 : ep.name), !1)
                    : 500 * Math.pow(2, t);
                }
                return !1;
              },
            }))).data),
            (eq = eO.isLoading),
            (ez = eO.isError),
            (eQ = null == eU ? void 0 : eU.download_url),
            (eW = null !== ep && "string" == typeof eQ && !!eD),
            (eH = eC || eE || ez),
            (e$ =
              ey ||
              eB ||
              eq ||
              (null == eU ? void 0 : eU.status) === w.KF.Retry),
            (eG = (0, d.useMemo)(
              function () {
                return eW ? 100 : eF ? 50 : eb ? 10 : 0;
              },
              [eW, eF, eb]
            )),
            (0, d.useEffect)(
              function () {
                if (eH) {
                  var e;
                  q.m.danger("File upload failed", $),
                    nT(
                      null !== (e = null == ep ? void 0 : ep.name) &&
                        void 0 !== e
                        ? e
                        : ""
                    );
                }
              },
              [null == ep ? void 0 : ep.name, eH, nT]
            ),
            (eJ = (eV = (0, o._)(
              ((r = (t = (0, o._)((0, d.useState)([null, null]), 2))[0]),
              (a = t[1]),
              (0, d.useEffect)(
                function () {
                  if (!ep) {
                    a([null, null]);
                    return;
                  }
                  var e = new FileReader();
                  (e.onload = function () {
                    var n = new Image();
                    (n.onload = function () {
                      a([n.width, n.height]);
                    }),
                      (n.src = e.result);
                  }),
                    e.readAsDataURL(ep);
                },
                [ep]
              ),
              r),
              2
            ))[0]),
            (eY = eV[1]),
            (0, d.useMemo)(
              function () {
                var e = eW
                  ? null !== eJ && null !== eY
                    ? {
                        id: eD,
                        name: ep.name,
                        size: ep.size,
                        url: eQ,
                        width: eJ,
                        height: eY,
                      }
                    : { id: eD, name: ep.name, size: ep.size, url: eQ }
                  : null;
                return {
                  isLoading: e$,
                  loadingPercentage: eH || eW ? void 0 : eG,
                  isError: eH,
                  uploadedFile: e,
                };
              },
              [eW, ep, eD, eQ, eH, e$, eG, eJ, eY]
            )),
          nq = (0, d.useMemo)(
            function () {
              return 2 === nM ? nO : nU;
            },
            [nM, nO, nU]
          ),
          nz = nq.isLoading,
          nQ = nq.isError,
          nW = nq.loadingPercentage,
          nH = nq.uploadedFile,
          n$ = (0, d.useCallback)(function () {
            ny(""), nw(null), (0, h.SI)(1, nx.current);
          }, []),
          nG = "root" !== nc && !e6 && !(null == ng ? void 0 : ng.oof),
          nV = !!(null === (e1 = nx.current) || void 0 === e1
            ? void 0
            : e1.value),
          nJ = null === nk ? nV : !nz && !nQ,
          nY = nJ && !nn && !e6,
          nK = (0, d.useCallback)(
            function (e, n) {
              if ((null == e || e.preventDefault(), !nn)) {
                var t,
                  r,
                  a =
                    null === (t = nx.current) || void 0 === t
                      ? void 0
                      : t.value,
                  i = "".concat(
                    null === (r = nx.current) || void 0 === r
                      ? void 0
                      : r.dataset.id,
                    "-nextPrompt"
                  );
                if (nJ) {
                  var s = null != a ? a : "",
                    o = [];
                  nH &&
                    (2 === nM
                      ? o.push(nH)
                      : 1 === nM &&
                        "width" in nH &&
                        (s = {
                          content_type: C.PX.MultimodalText,
                          parts: [
                            {
                              asset_pointer: (0, z.L8)(nH.id),
                              size_bytes: nH.size,
                              width: nH.width,
                              height: nH.height,
                            },
                            null != a ? a : "",
                          ],
                        })),
                    e3(
                      i,
                      { content: s, attachments: o },
                      { eventSource: e ? "mouse" : "keyboard" },
                      { suggestions: no }
                    ),
                    n$(),
                    void 0 !== no &&
                      (void 0 !== n
                        ? k.m.logEvent("chatgpt_prompt_use_suggestion", a, {
                            index: "".concat(n),
                          })
                        : k.m.logEvent("chatgpt_prompt_ignore_suggestions"));
                }
              }
            },
            [nn, n$, nJ, e3, no, nH, nM]
          ),
          nX = (0, d.useCallback)(
            function () {
              e2("", nd), e5(nc, { eventSource: "mouse" });
            },
            [nc, nd, e2, e5]
          ),
          n0 = (0, d.useCallback)(
            function () {
              e2("", nd),
                nh(j.s6.pauseCompletion, {
                  threadId: M.tQ.getServerThreadId(e8),
                  eventSource: "mouse",
                });
            },
            [nd, e8, nh, e2]
          ),
          n1 = (0, d.useCallback)(
            function () {
              e4(nc);
            },
            [nc, e4]
          ),
          n2 = (0, d.useMemo)(
            function () {
              return {
                Enter: {
                  validator: function () {
                    return nY;
                  },
                  handler: function (e) {
                    (e.metaKey ||
                      (nf && !e.shiftKey && !e.nativeEvent.isComposing)) &&
                      (e.preventDefault(), nK());
                  },
                },
                Escape: {
                  validator: function () {
                    return na && e6;
                  },
                  handler: function () {
                    e2("", nd),
                      nh(j.s6.pauseCompletion, {
                        threadId: M.tQ.getServerThreadId(e8),
                        eventSource: "keyboard",
                      });
                  },
                },
              };
            },
            [nY, nf, e6, nK, na, e2, nd, nh, e8]
          ),
          n3 = (0, d.useCallback)(
            function (e) {
              var n;
              (null === (n = n2[e.key]) || void 0 === n
                ? void 0
                : n.validator(e)) && n2[e.key].handler(e);
            },
            [n2]
          ),
          n5 = (0, d.useCallback)(
            function (e) {
              if (e.clipboardData.files.length > 0 && 1 === nM) {
                var n,
                  t,
                  r,
                  a = e.clipboardData.files[0];
                if (
                  !(
                    null !==
                      (r =
                        null == n_
                          ? void 0
                          : null === (n = n_.capabilities) || void 0 === n
                          ? void 0
                          : null === (t = n.multimodal) || void 0 === t
                          ? void 0
                          : t.accepted_mime_types) && void 0 !== r
                      ? r
                      : []
                  ).includes(a.type)
                ) {
                  q.m.danger(
                    nu.formatMessage(eS.unsupportedFileType, {
                      file_type: a.type,
                    })
                  ),
                    e.preventDefault();
                  return;
                }
                nw(a);
              }
            },
            [n_, nw, nM, nu]
          ),
          n4 = (0, d.useCallback)(function (e, n) {
            nw(e), ny(n);
          }, []);
        (0, d.useEffect)(function () {
          var e;
          null === (e = nx.current) || void 0 === e || e.focus();
        }, []),
          (0, d.useEffect)(
            function () {
              nw(null);
            },
            [e7]
          );
        var n7 = (0, P.hz)().has(_.uj),
          n8 = nt || nG || ns || na,
          n6 = nf ? "neutral" : "none",
          n9 = (0, d.useMemo)(
            function () {
              return (0, u.jsxs)("div", {
                className: nt ? "w-full" : "",
                children: [
                  nt &&
                    (0, u.jsx)("div", {
                      className: "mb-3 text-center text-xs",
                      children: (0, u.jsx)(
                        x.Z,
                        (0, i._)({}, eS.errorGeneratingResponse)
                      ),
                    }),
                  (0, u.jsxs)(eI, {
                    $shouldRetry: nt,
                    children: [
                      !nt &&
                        n7 &&
                        no &&
                        (0, u.jsx)(ek, {
                          suggestions: no,
                          shouldRetry: nt,
                          currentInputRef: nx,
                          onSelectSuggestion: ny,
                          handleCreateNewCompletion: nK,
                        }),
                      nG &&
                        (0, u.jsxs)(I.z, {
                          as: "button",
                          color: nt ? "primary" : n6,
                          onClick: nX,
                          className: (0, c.Z)(
                            nt ? "m-auto" : "-z-0 border-0 md:border"
                          ),
                          children: [
                            (0, u.jsx)(D.ZP, {
                              icon: g.Qxo,
                              size: nf ? "xsmall" : "small",
                              className: "flex-shrink-0",
                            }),
                            (nf || nt) &&
                              (0, u.jsx)(
                                x.Z,
                                (0, i._)({}, eS.regenerateResponse)
                              ),
                          ],
                        }),
                      ns &&
                        (0, u.jsxs)(I.z, {
                          as: "button",
                          color: "neutral",
                          onClick: n1,
                          className: "border-0 md:border",
                          children: [
                            (0, u.jsx)(D.ZP, {
                              icon: g.lV_,
                              className: "-rotate-180",
                              size: nf ? "xsmall" : "small",
                            }),
                            nf &&
                              (0, u.jsx)(
                                x.Z,
                                (0, i._)({}, eS.continueGenerating)
                              ),
                          ],
                        }),
                      na &&
                        e6 &&
                        (0, u.jsxs)(I.z, {
                          as: "button",
                          color: "neutral",
                          onClick: n0,
                          className: "border-0 md:border",
                          children: [
                            (0, u.jsx)(D.ZP, {
                              icon: g.jxP,
                              size: nf ? "xsmall" : "small",
                            }),
                            nf &&
                              (0, u.jsx)(x.Z, (0, i._)({}, eS.stopGenerating)),
                          ],
                        }),
                    ],
                  }),
                ],
              });
            },
            [nt, n7, no, nK, nG, n6, nX, nf, ns, n1, na, e6, n0]
          );
        (0, d.useImperativeHandle)(n, function () {
          return { setInputValue: ny };
        });
        var te = nY
          ? { backgroundColor: null == nm ? void 0 : nm.backgroundColor }
          : {};
        return (0, u.jsxs)(u.Fragment, {
          children: [
            (0, u.jsx)("form", {
              className: e9,
              onSubmit: nK,
              children: (0, u.jsxs)(
                "div",
                (0, s._)(
                  (0, i._)(
                    {
                      className:
                        "relative flex h-full flex-1 items-stretch md:flex-col",
                    },
                    nS()
                  ),
                  {
                    children: [
                      nf && n8 && n9,
                      !nt &&
                        (0, u.jsxs)(eT, {
                          $disabled: nt,
                          $historyDisabled: np,
                          children: [
                            nk &&
                              (0, u.jsx)(eM, {
                                children: (0, u.jsx)(G.Z, {
                                  onRemoveFileClick: function () {
                                    return nw(null);
                                  },
                                  file: nk,
                                  loadingPercentage: nW,
                                }),
                              }),
                            (0, u.jsx)(h.ZP, {
                              id: ew,
                              tabIndex: 0,
                              value: nb,
                              "data-id": nc,
                              ref: nx,
                              style: { maxHeight: "200px" },
                              rows: 1,
                              onKeyDown: n3,
                              onChange: function (e) {
                                ny(e.target.value);
                              },
                              onPaste: n5,
                              placeholder: nl
                                ? nu.formatMessage(
                                    eS.continueSharedConversationPlaceholder
                                  )
                                : nu.formatMessage(eS.placeholder),
                              className: (0, c.Z)(
                                "m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12",
                                !nk && nN
                                  ? "pl-12 md:pl-[30px]"
                                  : "pl-3 md:pl-0"
                              ),
                              disabled: nt,
                            }),
                            !nk &&
                              nN &&
                              (0, u.jsx)(eP, {
                                children: (0, u.jsx)(A, {
                                  onClick: nA,
                                  disabled: nt,
                                  getInputProps: nD,
                                }),
                              }),
                            1 === nM &&
                              (0, u.jsx)(eZ, {
                                $visible: !nJ && !nk && !e6,
                                children: (0, u.jsx)(en, { onPick: n4 }),
                              }),
                            (0, u.jsx)(eN, {
                              disabled: !nY || nt,
                              style: te,
                              className: (0, c.Z)(
                                "bottom-1.5",
                                e6
                                  ? "disabled:bottom-0.5 md:disabled:bottom-0"
                                  : "transition-colors disabled:opacity-40"
                              ),
                              children: e6
                                ? (0, u.jsx)("div", {
                                    className: "text-2xl",
                                    children: (0, u.jsx)(ej, {}),
                                  })
                                : (0, u.jsx)(R.u, {
                                    label: nu.formatMessage(
                                      eS.sendMessageTooltip
                                    ),
                                    children: (0, u.jsx)(D.ZP, {
                                      icon: D.IX,
                                      size: "small",
                                      className: "m-1 md:m-0",
                                    }),
                                  }),
                            }),
                            nR &&
                              (0, u.jsxs)(e_, {
                                children: [
                                  (0, u.jsx)(D.ZP, { icon: g.tHe }),
                                  nu.formatMessage(eS.dragInstructions),
                                ],
                              }),
                          ],
                        }),
                      !nf && n8 && n9,
                    ],
                  }
                )
              ),
            }),
            (0, u.jsx)(eu, { currentModelConfig: n_, disabled: nl }),
          ],
        });
      });
      function ej() {
        var e = (0, o._)((0, d.useState)(0), 2),
          n = e[0],
          t = e[1];
        (0, d.useEffect)(function () {
          var e = setInterval(function () {
            t(function (e) {
              return (e + 1) % 3;
            });
          }, 350);
          return function () {
            return clearInterval(e);
          };
        }, []);
        for (var r = [], a = 0; a < 3; a++)
          r.push(
            (0, u.jsx)(
              "span",
              { className: a <= n ? "" : "invisible", children: "\xb7" },
              a
            )
          );
        return (0, u.jsx)(u.Fragment, { children: r });
      }
      function ek(e) {
        var n = e.suggestions,
          t = e.shouldRetry,
          r = e.currentInputRef,
          a = e.onSelectSuggestion,
          i = e.handleCreateNewCompletion,
          s = (0, p.Z)(),
          o = (0, d.useCallback)(
            function (e, n) {
              null !== r.current && (a(e), (r.current.value = e), i(void 0, n));
            },
            [r, i, a]
          );
        return (
          (0, d.useEffect)(
            function () {
              void 0 !== n && k.m.logEvent("chatgpt_prompt_show_suggestions");
            },
            [n]
          ),
          (0, u.jsx)("div", {
            className:
              "absolute -left-2 bottom-full mb-4 flex max-w-[100vw] grow gap-2 overflow-auto px-2 md:static md:mb-0 md:max-w-none md:overflow-visible md:px-0",
            children:
              t || void 0 === n
                ? null
                : n.slice(0, 2).map(function (e, n) {
                    return (0, u.jsxs)(
                      I.z,
                      {
                        as: "button",
                        color: "neutral",
                        onClick: function () {
                          return o(e, n);
                        },
                        className:
                          "group whitespace-nowrap text-left md:whitespace-normal",
                        children: [
                          e,
                          (0, u.jsx)("div", {
                            className:
                              "absolute bottom-0 right-0 top-0 flex items-center bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-2 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200",
                            children: (0, u.jsx)(R.u, {
                              label: s.formatMessage(eS.suggestionTooltip),
                              side: "top",
                              children: (0, u.jsx)(D.ZP, {
                                icon: f.Z,
                                size: "small",
                              }),
                            }),
                          }),
                        ],
                      },
                      n
                    );
                  }),
          })
        );
      }
      var ew = "prompt-textarea";
      function eC() {
        var e;
        null === (e = document.getElementById(ew)) || void 0 === e || e.focus();
      }
      var e_ = b.Z.div(ef()),
        eM = b.Z.div(eh()),
        eN = b.Z.button(eg()),
        eP = b.Z.div(ep()),
        eZ = b.Z.div(ex(), function (e) {
          return e.$visible ? "opacity-100" : "opacity-0 pointer-events-none";
        }),
        eT = b.Z.div(
          ev(),
          function (e) {
            return e.$historyDisabled
              ? "bg-gray-900 text-white shadow-xs dark:bg-gray-900 dark:text-white dark:shadow-xs"
              : "";
          },
          function (e) {
            return e.$disabled && "bg-gray-100";
          }
        ),
        eI = b.Z.div(eb(), function (e) {
          return e.$shouldRetry ? "" : "h-full";
        }),
        eS = (0, v.vU)({
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
    },
    99453: function (e, n, t) {
      "use strict";
      t.d(n, {
        V: function () {
          return S;
        },
        Z: function () {
          return C;
        },
      });
      var r = t(96237),
        a = t(39324),
        i = t(71209),
        s = t(22830),
        o = t(4337),
        l = t(35250),
        u = t(90209),
        c = t(68789),
        d = t(19841),
        m = t(70079),
        f = t(7137),
        h = t(1454),
        g = t(34303),
        p = t(77442),
        x = t(38317),
        v = t(81372);
      function b() {
        var e = (0, o._)([
          "absolute w-[2.5px] h-5 -rotate-45 -top-0.5 left-1.5 bg-gray-500 border-[0.5px] border-gray-100 group-hover/toggle:bg-red-500 dark:border-[#4E4F60]",
        ]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = (0, o._)([
          "group/options flex flex-col rounded-xl border border-gray-100 bg-white text-left shadow-xxs dark:text-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-xs mx-2 sm:mx-1 overflow-hidden",
        ]);
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = (0, o._)([
          "px-5 flex gap-2.5 flex-col py-4 whitespace-pre-line",
        ]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = (0, o._)(["block dark:text-white text-gray-900"]);
        return (
          (k = function () {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = (0, o._)(["block text-xs text-gray-500"]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      function C(e) {
        var n = e.items,
          t = e.value,
          o = e.onChange,
          u = T(),
          c = (0, s._)(
            (0, m.useState)(function () {
              return n.reduce(function (e, n) {
                if (n.options.length > 0) {
                  var r = n.options.find(function (e) {
                    return e.value === t;
                  });
                  if (r) return (e[n.value] = r.value), e;
                  e[n.value] = n.options[0].value;
                }
                return e;
              }, {});
            }),
            2
          ),
          d = c[0],
          f = c[1],
          h = (0, m.useCallback)(
            function (e, s) {
              var l,
                c = t,
                m = n.find(function (n) {
                  return n.value === e;
                }),
                h = (null == d ? void 0 : d[e]) !== void 0,
                g =
                  h &&
                  n.some(function (n) {
                    return (
                      n.value === e &&
                      n.options.some(function (n) {
                        return n.value === d[e];
                      })
                    );
                  }),
                p = s;
              u &&
                void 0 === s &&
                (p = h
                  ? d[e]
                  : null !== (l = null == m ? void 0 : m.options[0].value) &&
                    void 0 !== l
                  ? l
                  : void 0),
                (c = void 0 !== p ? p : g ? d[e] : e) !== t &&
                  (o(c),
                  f(function (n) {
                    return (0, i._)((0, a._)({}, n), (0, r._)({}, e, c));
                  }));
            },
            [u, n, d, o, t]
          ),
          g = (0, s._)((0, m.useState)(new Set()), 2),
          p = g[0],
          x = g[1],
          v = (0, m.useCallback)(function (e, n) {
            n
              ? x(function (n) {
                  var t = new Set(n);
                  return t.add(e), t;
                })
              : x(function (n) {
                  var t = new Set(n);
                  return t.delete(e), t;
                });
          }, []);
        return (0, l.jsx)("div", {
          className:
            "relative flex rounded-xl bg-gray-100 p-1 text-gray-900 dark:bg-gray-900",
          children: (0, l.jsx)("ul", {
            className: "flex w-full list-none gap-1 sm:w-auto",
            children: n.map(function (e, r) {
              var a,
                i,
                s,
                o,
                u,
                c,
                m =
                  t === e.value ||
                  e.options.some(function (e) {
                    return e.value === t;
                  }),
                f = m ? t : null == d ? void 0 : d[e.value],
                g =
                  null != f
                    ? f
                    : null === (i = e.options) || void 0 === i
                    ? void 0
                    : null === (s = i[0]) || void 0 === s
                    ? void 0
                    : s.value,
                x =
                  null !==
                    (o = e.options.find(function (e) {
                      return e.value === g;
                    })) && void 0 !== o
                    ? o
                    : e.options[0],
                b =
                  null !== (u = null == x ? void 0 : x.icon) && void 0 !== u
                    ? u
                    : null;
              return (0,
              l.jsx)(M, { onToggleItemOpenChanged: v, item: e, isSelected: m, isOtherToggleDropdownOpen: p.size > 0 && !p.has(e.categoryId), currentValue: t, defaultOption: null == x ? void 0 : x.value, onChange: h, currentIcon: b, displayCurrentValue: m && e.showSelectedValueBelow && null !== (c = null == x ? void 0 : x.name) && void 0 !== c ? c : "", contentAlign: ((a = n.length), 0 === r ? "start" : r === a - 1 ? "end" : "center") }, r);
            }),
          }),
        });
      }
      function _(e) {
        var n = e.item,
          t = e.isSelected,
          r = e.isOtherToggleDropdownOpen,
          a = e.isOpen,
          i = e.currentIcon,
          s = e.displayCurrentValue,
          o = null != i ? i : n.icon,
          u = n.options.length > 1 || n.alwaysShowOptions,
          c = T();
        return (0, l.jsxs)("div", {
          className: (0, d.Z)(
            "group/button",
            "relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5",
            t
              ? "border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100"
              : "border-transparent text-gray-500 hover:text-gray-800 hover:dark:text-gray-100",
            void 0 !== a && a && "text-gray-800 dark:text-gray-100",
            r && t && "opacity-50"
          ),
          children: [
            (0, l.jsxs)("span", {
              className: (0, d.Z)(
                "relative max-[370px]:hidden",
                n.disabled && "group-hover/button:text-red-500"
              ),
              children: [
                null != o &&
                  (0, l.jsx)(x.ZP, {
                    icon: o,
                    className: (0, d.Z)(
                      "transition-colors",
                      t ? n.buttonActiveClass : n.buttonHoverClass
                    ),
                  }),
                n.disabled && (0, l.jsx)(D, {}),
              ],
            }),
            (0, l.jsx)("span", {
              className: (0, d.Z)(
                "truncate text-sm font-medium md:pr-1.5",
                !c && "pr-1.5"
              ),
              children: n.name,
            }),
            c &&
              (t || u) &&
              (0, l.jsx)(x.ZP, {
                icon: u ? h.bTu : f.DAO,
                className: "toggle-item-button-open ml-0.5 text-gray-500",
              }),
            c &&
              (0, l.jsx)(x.ZP, {
                icon: h.rH8,
                className: "toggle-item-button-closed ml-0.5 text-gray-500",
              }),
            null != s &&
              "" !== s &&
              (0, l.jsx)("span", {
                className:
                  "absolute left-0 top-full mt-4 w-full truncate overflow-ellipsis text-sm text-gray-500",
                children: s,
              }),
          ],
        });
      }
      function M(e) {
        var n = e.item,
          t = e.isSelected,
          r = e.defaultOption,
          a = e.onChange,
          i = e.currentIcon,
          o = e.currentValue,
          u = e.displayCurrentValue,
          f = e.contentAlign,
          h = e.onToggleItemOpenChanged,
          g = e.isOtherToggleDropdownOpen,
          p = (0, s._)((0, m.useState)(void 0), 2),
          x = p[0],
          b = p[1],
          y = (0, m.useRef)(null),
          j = n.options.length > 1 || n.alwaysShowOptions,
          k = !(void 0 === n.description && void 0 === n.disclaimer),
          w = T(),
          C = (0, m.useCallback)(
            function (e) {
              b(e), h(n.categoryId, !!e);
            },
            [n.categoryId, h]
          );
        return (0, l.jsx)(c.fC, {
          open: x,
          modal: !1,
          onOpenChange: function (e) {
            w && e && !t && j && a(n.value);
          },
          children: (0, l.jsxs)("li", {
            className: "group/toggle w-full",
            onMouseEnter: function () {
              return !w && C(!0);
            },
            onMouseLeave: function () {
              return !w && C(void 0);
            },
            children: [
              (0, l.jsx)(c.xz, {
                ref: y,
                className: "w-full cursor-pointer",
                onClick: function () {
                  n.disabled || a(n.value);
                },
                children: (0, l.jsx)(_, {
                  isOpen: !!x,
                  isOtherToggleDropdownOpen: g,
                  item: n,
                  isSelected: t,
                  currentIcon: i,
                  displayCurrentValue: u,
                }),
              }),
              (0, l.jsx)(
                c.Uv,
                {
                  children: (0, l.jsx)(c.VY, {
                    className: (0, d.Z)(
                      "w-full min-w-[100vw] max-w-[100vw] select-none pt-3 font-medium sm:w-[312px] sm:min-w-[312px] md:max-w-none",
                      "will-change-[opacity,transform] radix-side-bottom:animate-slideDownAndFade radix-side-left:animate-slideLeftAndFade radix-side-right:animate-slideRightAndFade radix-side-top:animate-slideUpAndFade",
                      { "sm:min-w-[420px]": "Alpha" === n.name }
                    ),
                    align: f,
                    onCloseAutoFocus: function (e) {
                      x || e.preventDefault();
                    },
                    onEscapeKeyDown: function (e) {
                      var n;
                      e.preventDefault(),
                        null === (n = y.current) || void 0 === n || n.focus();
                    },
                    children: (0, l.jsxs)(R, {
                      children: [
                        k && (0, l.jsx)(N, { item: n }),
                        (j || (!x && !w)) &&
                          (0, l.jsx)(P, {
                            defaultOption: t ? o : r,
                            item: n,
                            currentValue: o,
                            onChange: function (e, n) {
                              a(e, n), C(void 0), (0, v.go)();
                            },
                            className: (0, d.Z)(
                              "text-sm",
                              k &&
                                "mb-1 border-t border-gray-100 dark:border-gray-800"
                            ),
                          }),
                      ],
                    }),
                  }),
                },
                n.categoryId
              ),
            ],
          }),
        });
      }
      function N(e) {
        var n = e.item;
        return (0, l.jsxs)(A, {
          className: "text-sm sm:text-base",
          children: [
            void 0 !== n.description &&
              (0, l.jsx)(F, { children: n.description }),
            void 0 !== n.disclaimer &&
              (0, l.jsx)(B, { children: n.disclaimer }),
          ],
        });
      }
      function P(e) {
        var n = e.item,
          t = e.className,
          r = e.onChange,
          a = e.currentValue,
          i = e.defaultOption;
        return (0, l.jsx)(c.Ee, {
          defaultValue: i,
          value: a,
          className: t,
          children: n.options.map(function (e, t) {
            return (0, l.jsx)(
              Z,
              {
                option: e,
                selected: a === e.value,
                active: i === e.value,
                iconClass: n.iconClass,
                iconActiveClass: n.buttonActiveClass,
                showBorder: t !== n.options.length - 1,
                isDisabled: e.disabled,
                onChange: function () {
                  e.disabled || r(n.value, e.value);
                },
              },
              e.value
            );
          }),
        });
      }
      function Z(e) {
        var n,
          t = e.option,
          r = e.selected,
          a = e.active,
          i = e.iconClass,
          s = e.iconActiveClass,
          o = e.isDisabled,
          m = e.onChange,
          f = e.showBorder,
          h = null !== (n = t.activeIcon) && void 0 !== n ? n : t.icon;
        return (0, l.jsx)(c.Rk, {
          disabled: o,
          asChild: !0,
          value: t.value,
          onClick: m,
          className: "select-none outline-none",
          children: (0, l.jsxs)("div", {
            className: (0, d.Z)(
              "group/option relative flex w-full items-center gap-2 px-5 py-3 pr-11 font-medium focus:bg-gray-50 focus:dark:bg-gray-700",
              o ? "text-gray-500" : "text-gray-900 dark:text-gray-100",
              {
                "cursor-pointer hover:!bg-gray-50 dark:hover:!bg-gray-700": !o,
                "bg-gray-50 group-hover/options:bg-transparent dark:bg-gray-700":
                  a && !r,
                "text-gray-800 dark:text-gray-100": r || a,
                "border-b border-gray-100 dark:border-gray-800": f,
              }
            ),
            children: [
              null != t.icon && null != h
                ? (0, l.jsx)(x.ZP, {
                    icon: r ? t.icon : h,
                    className: (0, d.Z)(
                      "max-[370px]:hidden",
                      !o && !r && i,
                      r || a ? s : "text-gray-500"
                    ),
                  })
                : null,
              (0, l.jsx)("span", {
                title: "string" == typeof t.name && t.name ? t.name : "",
                className: (0, d.Z)("truncate", {
                  "group-hover/option:text-gray-800 dark:group-hover/option:text-gray-100":
                    !o,
                  "text-gray-800 dark:text-gray-100": a && !o,
                }),
                children: t.name,
              }),
              t.tags.map(function (e) {
                return S(e);
              }),
              (0, l.jsx)("span", {
                className: (0, d.Z)({
                  "absolute right-3 rounded-full p-1 text-blue-400": !0,
                  "opacity-0 group-hover/options:opacity-0": !r && !o,
                  "text-red-500": o,
                }),
                children: (0, l.jsx)(x.ZP, {
                  icon: o ? u.Z : x.nQ,
                  className: "h-5 w-5",
                }),
              }),
            ],
          }),
        });
      }
      var T = function () {
          return !(0, p.w$)();
        },
        I = new Set(["beta", "confidential", "alpha"]),
        S = function (e) {
          return (
            I.has(e) &&
            (0, l.jsx)(
              "span",
              {
                className: (0, d.Z)(
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
        D = g.Z.span(b()),
        R = g.Z.div(y()),
        A = g.Z.div(j()),
        F = g.Z.span(k()),
        B = g.Z.span(w());
    },
    5759: function (e, n, t) {
      "use strict";
      t.d(n, {
        I: function () {
          return h;
        },
        Z: function () {
          return c;
        },
      });
      var r = t(4337),
        a = t(35250),
        i = t(34303);
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
        var n = e.icon,
          t = e.children;
        return (0, a.jsxs)(d, {
          children: [
            (0, a.jsx)(m, { children: n }),
            (0, a.jsx)(f, { children: t }),
          ],
        });
      }
      var d = i.Z.div(s()),
        m = i.Z.div(o()),
        f = i.Z.div(l()),
        h = i.Z.div(u());
    },
    48432: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return j;
        },
      });
      var r = t(21722),
        a = t(22830),
        i = t(39889),
        s = t(35250),
        o = t(16578),
        l = t.n(o),
        u = t(68555),
        c = t(70079),
        d = t(1454),
        m = t(82841),
        f = t(36218),
        h = t(24274),
        g = t(59110),
        p = t(97688),
        x = t(44925),
        v = t(74853),
        b = t(99652),
        y = t(1220);
      function j(e) {
        var n = e.isOpen,
          t = e.onClose,
          o = (0, g.hz)(),
          j = (0, m.WS)(),
          k = (0, a._)((0, c.useState)(!1), 2),
          w = k[0],
          C = k[1],
          _ = (0, u.useRouter)(),
          M = (0, c.useCallback)(
            function () {
              j(f.s6.closeAccountPaymentModal), t();
            },
            [t, j]
          ),
          N = (0, c.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, i.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    C(!0), j(f.s6.clickAccountPaymentCheckout), (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]), [4, h.ZP.getCheckoutLink()]
                    );
                  case 2:
                    return (e = n.sent()), _.push(e.url), [3, 5];
                  case 3:
                    return (
                      n.sent(),
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
              return (0, i.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    C(!0), j(f.s6.clickAccountCustomerPortal), (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]),
                      [4, h.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = n.sent()), _.push(e.url), [3, 5];
                  case 3:
                    return (
                      n.sent(),
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
          isOpen: n,
          onClose: t,
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
    74853: function (e, n, t) {
      "use strict";
      t.d(n, {
        x: function () {
          return l;
        },
      });
      var r = t(4337),
        a = t(35250),
        i = t(34303),
        s = t(48727);
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
          var n = e.children,
            t = e.isOpen,
            r = e.onClose;
          return (0, a.jsx)(s.Z, {
            size: "fullscreen",
            isOpen: t,
            onClose: r,
            type: "success",
            className:
              "!bg-transparent !shadow-none md:w-[672px] lg:w-[896px] xl:w-[1024px]",
            children: (0, a.jsx)("div", {
              className: "flex h-full flex-col items-center justify-start",
              children: (0, a.jsx)("div", {
                className: "relative",
                children: (0, a.jsx)(u, { children: n }),
              }),
            }),
          });
        },
        u = i.Z.div(o());
    },
    99652: function (e, n, t) {
      "use strict";
      t.d(n, {
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
      var r = t(4337),
        a = t(35250),
        i = t(19841),
        s = t(70079),
        o = t(1454),
        l = t(34303),
        u = t(66958),
        c = t(38317),
        d = t(57924);
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
          var n = e.rowElements;
          return (0, a.jsx)(j, {
            children: n.map(function (e) {
              return e;
            }),
          });
        },
        p = function (e) {
          var n = e.className,
            t = e.text,
            r = e.children;
          return (0, a.jsxs)(w, {
            className: n,
            children: [(0, a.jsx)("span", { children: t }), r],
          });
        },
        x = {
          "primary-disabled":
            "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
          primary: "border-none py-3 font-semibold",
          disabled:
            "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100",
        },
        v = (0, s.forwardRef)(function (e, n) {
          var t = e.isLoading,
            r = void 0 !== t && t,
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
                    ref: n,
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
                ref: n,
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
          var n = e.variant,
            t = void 0 === n ? "primary" : n,
            r = e.className,
            s = e.text;
          return (0, a.jsxs)(k, {
            className: r,
            children: [
              (0, a.jsx)(c.ZP, {
                icon: o._rq,
                className: (0, i.Z)("h-5 w-5", {
                  "text-green-700": "primary" == t,
                  "text-gray-400": "secondary" == t,
                }),
              }),
              (0, a.jsx)("span", { children: s }),
            ],
          });
        },
        y = function (e) {
          var n = e.className,
            t = e.text,
            r = e.isLoading,
            i = e.onClick;
          return (0, a.jsx)(k, {
            className: n,
            children: (0, a.jsxs)("button", {
              onClick: i,
              className: "flex flex-row items-center space-x-1 underline",
              children: [
                (0, a.jsx)("span", { children: t }),
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
    1220: function (e, n, t) {
      "use strict";
      t.d(n, {
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
