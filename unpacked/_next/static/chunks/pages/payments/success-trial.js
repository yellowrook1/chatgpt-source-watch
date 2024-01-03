(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2555],
  {
    59858: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PAYMENTS_SUCCESS_URL: function () {
            return l;
          },
          __N_SSP: function () {
            return u;
          },
          default: function () {
            return d;
          },
        });
      var s = n(93999),
        a = n(25349),
        i = n(99893),
        r = n(14765),
        c = n(70079),
        o = n(35250),
        u = !0,
        l = "/payments/success";
      function d() {
        return (
          (0, c.useEffect)(function () {
            r.m9.logEvent("chatgpt_referral_trial_payment_success"),
              a.A.logEvent(i.M.chatgptTeamPaymentSuccess);
          }, []),
          (0, o.jsx)(s.W, { isTrial: !0 })
        );
      }
    },
    93999: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return K;
        },
      });
      var s,
        a,
        i,
        r,
        c = n(36112),
        o = n(91559),
        u = n(90038),
        l = n(21389),
        d = n(14972),
        p = n(35250);
      function m(e) {
        var t = e.children;
        return (0, p.jsxs)("div", {
          className: "flex min-h-screen w-full flex-col",
          children: [
            (0, p.jsx)("div", {
              className: "m-4 flex gap-3",
              children: (0, p.jsx)(d.nI, { className: "icon-xl" }),
            }),
            (0, p.jsx)("div", {
              className: "m-auto max-w-sm flex-col justify-center",
              children: t,
            }),
          ],
        });
      }
      var f = l.Z.h2(a || (a = (0, u.Z)(["mb-2 text-2xl font-medium"]))),
        x = l.Z.p(i || (i = (0, u.Z)(["mb-10 text-sm"]))),
        h = n(25349),
        j = n(99893),
        g = n(29124),
        v = n.n(g),
        y = n(10721),
        T = n(70079),
        b = n(70671),
        O = n(32004),
        S = n(94968),
        P = n(70737),
        w = n(97296),
        C = {
          hidden: { opacity: 0, translateY: 50 },
          show: {
            opacity: 1,
            translateY: 0,
            transition: { staggerChildren: 0.5, delayChildren: 0.2 },
          },
        },
        N = {
          hidden: { opacity: 0, translateY: 50 },
          show: {
            opacity: 1,
            translateY: 0,
            transition: { type: "spring", damping: 14 },
          },
        };
      function k(e) {
        var t = e.isTrial;
        return (0, p.jsx)("div", {
          className: "mb-6 flex items-center justify-center gap-2",
          children: (0, p.jsx)(P.M, {
            children: (0, p.jsx)(w.E.div, {
              variants: C,
              initial: "hidden",
              animate: "show",
              className: "flex",
              children: (0, p.jsx)(w.E.div, {
                variants: N,
                children: t
                  ? (0, p.jsx)(d.r4, { className: "h-8" })
                  : (0, p.jsx)(d.An, { className: "h-8" }),
              }),
            }),
          }),
        });
      }
      var M = n(82256),
        _ = n(18222),
        E = n(7144),
        Z = n(73582),
        U = n(18399);
      function D(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                (0, c.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : D(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      ((s = r || (r = {})).Landing = "landing"),
        (s.Setup = "setup"),
        (s.Invite = "invite"),
        (s.Complete = "complete");
      var A = [r.Landing, r.Invite, r.Complete],
        R = {
          enter: function (e) {
            return { translateX: e >= 0 ? "50%" : "-50%", opacity: 0 };
          },
          center: { translateX: 0, opacity: 1 },
          exit: function (e) {
            return { translateX: e <= 0 ? "-50%" : "50%", opacity: 0 };
          },
        };
      function L() {
        var e,
          t,
          n = (0, y.useRouter)(),
          s = {
            currentStep: B((t = (e = (0, y.useRouter)().asPath.split("#"))[1]))
              ? t
              : r.Landing,
            currentPath: e[0],
          },
          a = s.currentPath,
          i = s.currentStep,
          c = (0, T.useState)(i),
          o = c[0],
          u = c[1],
          l = (0, E.t)(),
          d = (0, Z.ec)(Z.F_.workspaces).find(function (e) {
            return e.structure === M.CZ.WORKSPACE && !e.deactivated;
          }),
          m = function () {
            var e = A.indexOf(i),
              t = e + 1;
            d || n.push("/"),
              -1 !== e && t < A.length && n.push(a + "#" + A[t]);
          };
        (0, T.useEffect)(
          function () {
            var e = function () {
              u(i);
            };
            return (
              n.events.on("hashChangeStart", e),
              function () {
                n.events.off("hashChangeStart", e);
              }
            );
          },
          [i, n.events]
        );
        var f = A.indexOf(i) <= A.indexOf(o) ? -1 : 1;
        return (0, p.jsx)("div", {
          className: "max-w-sm pb-6",
          children: (0, p.jsxs)(P.M, {
            mode: "wait",
            children: [
              i === r.Landing &&
                (0, p.jsx)(
                  z,
                  {
                    initial: !1,
                    custom: f,
                    children: (0, p.jsx)(I, {
                      onNext: m,
                      isLoading: null == l,
                    }),
                  },
                  "landing"
                ),
              i === r.Invite &&
                (0, p.jsx)(
                  z,
                  {
                    custom: f,
                    children: (0, p.jsx)(W, {
                      onNext: function () {
                        m();
                      },
                    }),
                  },
                  "invite"
                ),
              i === r.Complete &&
                (0, p.jsx)(
                  z,
                  {
                    custom: f,
                    children: (0, p.jsx)(X, {
                      onNext: function () {
                        m(), d && (0, E.nq)(d.id), n.push("/");
                      },
                    }),
                  },
                  "complete"
                ),
            ],
          }),
        });
      }
      var z = function (e) {
        return (0, p.jsx)(
          w.E.div,
          Y(
            {
              initial: "enter",
              animate: "center",
              exit: "exit",
              variants: R,
              transition: {
                translateX: { type: "just" },
                opacity: { duration: 0.2 },
              },
            },
            e
          )
        );
      };
      function I(e) {
        var t = e.onNext,
          n = e.isLoading;
        return (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)(k, { isTrial: !1 }),
            (0, p.jsx)(f, { children: (0, p.jsx)(O.Z, Y({}, F.standard)) }),
            (0, p.jsx)(x, { children: (0, p.jsx)(O.Z, Y({}, F.description)) }),
            (0, p.jsx)(o.z, {
              onClick: t,
              size: "large",
              loading: void 0 !== n && n,
              children: (0, p.jsx)(O.Z, Y({}, F.continue)),
            }),
          ],
        });
      }
      function W(e) {
        var t = e.onNext,
          n = (0, E.t)(),
          s = (0, b.Z)();
        return null == n
          ? null
          : (0, p.jsxs)(p.Fragment, {
              children: [
                (0, p.jsx)(f, {
                  children: (0, p.jsx)(
                    O.Z,
                    Y(
                      Y({}, F.inviteTitle),
                      {},
                      { values: { workspaceName: n.data.name } }
                    )
                  ),
                }),
                (0, p.jsx)(x, {
                  children: (0, p.jsx)(O.Z, Y({}, F.completeDescription)),
                }),
                null != n &&
                  (0, p.jsx)("div", {
                    className: "text-sm",
                    children: (0, p.jsx)(_.Z, {
                      fullWidthButtons: !0,
                      workspace: n,
                      canResendInviteEmails: !1,
                      onCancel: t,
                      cancelButtonText: s.formatMessage(F.skipAddMembers),
                      onSuccess: t,
                    }),
                  }),
              ],
            });
      }
      function X(e) {
        var t = e.onNext;
        return (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)(f, {
              children: (0, p.jsx)(O.Z, Y({}, F.completeTitle)),
            }),
            (0, p.jsx)(x, {
              children: (0, p.jsx)(O.Z, Y({}, F.completeDescription)),
            }),
            (0, p.jsx)(o.z, {
              onClick: t,
              size: "large",
              children: (0, p.jsx)(O.Z, Y({}, F.continueToChatgpt)),
            }),
          ],
        });
      }
      var B = (0, U.b)(r),
        F = (0, S.vU)({
          standard: {
            id: "UpgradedToTeamSuccess.trial",
            defaultMessage: "Payment successful",
          },
          description: {
            id: "UpgradedToTeamSuccess.description",
            defaultMessage:
              "Your team has been created. You can invite members to join the workspace to start collaborating.",
          },
          continue: {
            id: "UpgradedToTeamSuccess.continue",
            defaultMessage: "Continue",
          },
          continueToChatgpt: {
            id: "UpgradedToTeamSuccess.continueToChatgpt",
            defaultMessage: "Continue to ChatGPT",
          },
          setupTitle: {
            id: "UpgradedToTeamSuccess.setupTitle",
            defaultMessage: "Set up a team workspace",
          },
          setupSubtitle: {
            id: "UpgradedToTeamSuccess.setupSubtitle",
            defaultMessage: "Workspace name",
          },
          inviteTitle: {
            id: "UpgradedToTeamSuccess.inviteTitle",
            defaultMessage: "Invite members to {workspaceName}",
          },
          completeTitle: {
            id: "UpgradedToTeamSuccess.completeTitle",
            defaultMessage: "Workspace setup complete",
          },
          completeDescription: {
            id: "UpgradedToTeamSuccess.completeDescription",
            defaultMessage:
              "You have now created a team workspace. You can invite members to join the workspace. You can do so at any time from the workspace settings page.",
          },
          skipAddMembers: {
            id: "UpgradedToTeamSuccess.skipAddMembers",
            defaultMessage: "Skip",
          },
        });
      function G(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? G(Object(n), !0).forEach(function (t) {
                (0, c.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : G(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function K(e) {
        var t = e.isTrial,
          n = e.isTeam,
          s = (0, b.Z)(),
          a = (0, y.useRouter)(),
          i = (0, T.useCallback)(
            function (e) {
              e.preventDefault(),
                h.A.logEvent(j.M.clickAccountPaymentSuccessContinue),
                a.push("/");
            },
            [a]
          );
        return (0, p.jsxs)(m, {
          children: [
            (0, p.jsx)(v(), {
              children: (0, p.jsx)("title", {
                children: s.formatMessage(J.pageTitle),
              }),
            }),
            (0, p.jsx)("div", {
              className: "flex flex-col",
              children: n
                ? (0, p.jsx)(L, {})
                : (0, p.jsx)(H, { isTrial: t, onContinue: i }),
            }),
          ],
        });
      }
      function H(e) {
        var t = e.isTrial,
          n = e.onContinue,
          s = t ? J.trial : J.standard;
        return (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)(k, { isTrial: !!t }),
            (0, p.jsxs)("div", {
              className: "flex flex-col items-center",
              children: [
                (0, p.jsx)(f, { children: (0, p.jsx)(O.Z, q({}, s)) }),
                (0, p.jsx)(x, {
                  children: (0, p.jsx)(O.Z, q({}, J.paymentReceived)),
                }),
                (0, p.jsx)(o.z, {
                  onClick: n,
                  size: "large",
                  children: (0, p.jsx)(O.Z, q({}, J.continueButton)),
                }),
              ],
            }),
          ],
        });
      }
      var J = (0, S.vU)({
        pageTitle: {
          id: "PaymentsSuccess.pageTitle",
          defaultMessage: "Account - Payment success",
        },
        paymentReceived: {
          id: "PaymentsSuccess.paymentSuccessful",
          defaultMessage: "You've been upgraded to ChatGPT Plus",
        },
        continueButton: {
          id: "PaymentsSuccess.continueButton",
          defaultMessage: "Continue",
        },
        standard: {
          id: "PaymentsSuccess.standard",
          defaultMessage: "Payment successful",
        },
        trial: { id: "PaymentsSuccess.trial", defaultMessage: "Trial started" },
      });
    },
    27688: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/payments/success-trial",
        function () {
          return n(59858);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 27688));
    }),
      (_N_E = e.O());
  },
]);
