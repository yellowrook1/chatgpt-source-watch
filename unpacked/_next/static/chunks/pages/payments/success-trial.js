(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2555],
  {
    33938: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          PAYMENTS_SUCCESS_URL: function () {
            return d;
          },
          __N_SSP: function () {
            return u;
          },
          default: function () {
            return p;
          },
        });
      var s = n(23198),
        a = n(45342),
        i = n(91128),
        r = n(53197),
        c = n(27282),
        l = n(70079),
        o = n(35250),
        u = !0;
      let d = "/payments/success";
      function p() {
        let e = (0, a.J)();
        return (
          (0, l.useEffect)(() => {
            e &&
              (c.m9.logEvent("chatgpt_referral_trial_payment_success"),
              i.A.logEvent(r.M.chatgptReferralTrialPaymentSuccess));
          }, [e]),
          (0, o.jsx)(s.W, { isTrial: !0 })
        );
      }
    },
    23198: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return J;
        },
      });
      var s,
        a,
        i,
        r = n(39827),
        c = n(7557),
        l = n(73017),
        o = n(21389),
        u = n(47527),
        d = n(35250);
      function p(e) {
        let { children: t } = e;
        return (0, d.jsxs)("div", {
          className: "flex min-h-screen w-full flex-col",
          children: [
            (0, d.jsx)("div", {
              className: "m-4 flex gap-3",
              children: (0, d.jsx)(u.nI, { className: "icon-xl" }),
            }),
            (0, d.jsx)("div", {
              className: "m-auto max-w-sm flex-col justify-center",
              children: t,
            }),
          ],
        });
      }
      let m = o.Z.h2(a || (a = (0, l.Z)(["mb-2 text-2xl font-medium"]))),
        f = o.Z.p(i || (i = (0, l.Z)(["mb-10 text-sm"])));
      var j = n(91128),
        x = n(53197),
        h = n(80483),
        g = n.n(h),
        v = n(12366),
        y = n(70079),
        b = n(70671),
        T = n(32004),
        O = n(94968),
        S = n(24343),
        P = n(83737);
      let w = {
          hidden: { opacity: 0, translateY: 50 },
          show: {
            opacity: 1,
            translateY: 0,
            transition: { staggerChildren: 0.5, delayChildren: 0.2 },
          },
        },
        C = {
          hidden: { opacity: 0, translateY: 50 },
          show: {
            opacity: 1,
            translateY: 0,
            transition: { type: "spring", damping: 14 },
          },
        };
      function k(e) {
        let { isTrial: t } = e;
        return (0, d.jsx)("div", {
          className: "mb-6 flex items-center justify-center gap-2",
          children: (0, d.jsx)(S.M, {
            children: (0, d.jsx)(P.E.div, {
              variants: w,
              initial: "hidden",
              animate: "show",
              className: "flex",
              children: (0, d.jsx)(P.E.div, {
                variants: C,
                children: t
                  ? (0, d.jsx)(u.r4, { className: "h-8" })
                  : (0, d.jsx)(u.An, { className: "h-8" }),
              }),
            }),
          }),
        });
      }
      var M = n(25660),
        N = n(79849),
        _ = n(24668),
        E = n(78e3),
        Z = n(19816);
      function U(e, t) {
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
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? U(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : U(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var Y =
        (((s = Y || {}).Landing = "landing"),
        (s.Setup = "setup"),
        (s.Invite = "invite"),
        (s.Complete = "complete"),
        s);
      let A = [Y.Landing, Y.Invite, Y.Complete],
        R = {
          enter: (e) => ({ translateX: e >= 0 ? "50%" : "-50%", opacity: 0 }),
          center: { translateX: 0, opacity: 1 },
          exit: (e) => ({ translateX: e <= 0 ? "-50%" : "50%", opacity: 0 }),
        };
      function z() {
        let e = (0, v.useRouter)(),
          { currentPath: t, currentStep: n } = (function () {
            let e = (0, v.useRouter)().asPath.split("#"),
              t = e[1];
            return { currentStep: B(t) ? t : Y.Landing, currentPath: e[0] };
          })(),
          { 0: s, 1: a } = (0, y.useState)(n),
          i = (0, _.t)(),
          r = (0, E.ec)(E.F_.workspaces).find(
            (e) => e.structure === M.CZ.WORKSPACE && !e.deactivated
          ),
          c = () => {
            let s = A.indexOf(n),
              a = s + 1;
            r || e.push("/"),
              -1 !== s && a < A.length && e.push(t + "#" + A[a]);
          };
        (0, y.useEffect)(() => {
          let t = () => {
            a(n);
          };
          return (
            e.events.on("hashChangeStart", t),
            () => {
              e.events.off("hashChangeStart", t);
            }
          );
        }, [n, e.events]);
        let l = A.indexOf(n) <= A.indexOf(s) ? -1 : 1;
        return (0, d.jsx)("div", {
          className: "max-w-sm pb-6",
          children: (0, d.jsxs)(S.M, {
            mode: "wait",
            children: [
              n === Y.Landing &&
                (0, d.jsx)(
                  I,
                  {
                    initial: !1,
                    custom: l,
                    children: (0, d.jsx)(L, {
                      onNext: c,
                      isLoading: null == i,
                    }),
                  },
                  "landing"
                ),
              n === Y.Invite &&
                (0, d.jsx)(
                  I,
                  {
                    custom: l,
                    children: (0, d.jsx)(W, {
                      onNext: () => {
                        c();
                      },
                    }),
                  },
                  "invite"
                ),
              n === Y.Complete &&
                (0, d.jsx)(
                  I,
                  {
                    custom: l,
                    children: (0, d.jsx)(X, {
                      onNext: () => {
                        c(), r && (0, _.nq)(r.id), e.push("/");
                      },
                    }),
                  },
                  "complete"
                ),
            ],
          }),
        });
      }
      let I = (e) =>
        (0, d.jsx)(
          P.E.div,
          D(
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
      function L(e) {
        let { onNext: t, isLoading: n = !1 } = e;
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(k, { isTrial: !1 }),
            (0, d.jsx)(m, { children: (0, d.jsx)(T.Z, D({}, F.standard)) }),
            (0, d.jsx)(f, { children: (0, d.jsx)(T.Z, D({}, F.description)) }),
            (0, d.jsx)(c.z, {
              onClick: t,
              size: "large",
              loading: n,
              children: (0, d.jsx)(T.Z, D({}, F.continue)),
            }),
          ],
        });
      }
      function W(e) {
        let { onNext: t } = e,
          n = (0, _.t)(),
          s = (0, b.Z)();
        return null == n
          ? null
          : (0, d.jsxs)(d.Fragment, {
              children: [
                (0, d.jsx)(m, {
                  children: (0, d.jsx)(
                    T.Z,
                    D(
                      D({}, F.inviteTitle),
                      {},
                      { values: { workspaceName: n.data.name } }
                    )
                  ),
                }),
                (0, d.jsx)(f, {
                  children: (0, d.jsx)(T.Z, D({}, F.completeDescription)),
                }),
                null != n &&
                  (0, d.jsx)("div", {
                    className: "text-sm",
                    children: (0, d.jsx)(N.Z, {
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
        let { onNext: t } = e;
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(m, {
              children: (0, d.jsx)(T.Z, D({}, F.completeTitle)),
            }),
            (0, d.jsx)(f, {
              children: (0, d.jsx)(T.Z, D({}, F.completeDescription)),
            }),
            (0, d.jsx)(c.z, {
              onClick: t,
              size: "large",
              children: (0, d.jsx)(T.Z, D({}, F.continueToChatgpt)),
            }),
          ],
        });
      }
      let B = (0, Z.b)(Y),
        F = (0, O.vU)({
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
                (0, r.Z)(e, t, n[t]);
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
      function J(e) {
        let { isTrial: t, isTeam: n } = e,
          s = (0, b.Z)(),
          a = (0, v.useRouter)(),
          i = (0, y.useCallback)(
            (e) => {
              e.preventDefault(),
                j.A.logEvent(x.M.clickAccountPaymentSuccessContinue),
                a.push("/");
            },
            [a]
          );
        return (0, d.jsxs)(p, {
          children: [
            (0, d.jsx)(g(), {
              children: (0, d.jsx)("title", {
                children: s.formatMessage(H.pageTitle),
              }),
            }),
            (0, d.jsx)("div", {
              className: "flex flex-col",
              children: n
                ? (0, d.jsx)(z, {})
                : (0, d.jsx)(K, { isTrial: t, onContinue: i }),
            }),
          ],
        });
      }
      function K(e) {
        let { isTrial: t, onContinue: n } = e,
          s = t ? H.trial : H.standard;
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(k, { isTrial: !!t }),
            (0, d.jsxs)("div", {
              className: "flex flex-col items-center",
              children: [
                (0, d.jsx)(m, { children: (0, d.jsx)(T.Z, q({}, s)) }),
                (0, d.jsx)(f, {
                  children: (0, d.jsx)(T.Z, q({}, H.paymentReceived)),
                }),
                (0, d.jsx)(c.z, {
                  onClick: n,
                  size: "large",
                  children: (0, d.jsx)(T.Z, q({}, H.continueButton)),
                }),
              ],
            }),
          ],
        });
      }
      let H = (0, O.vU)({
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
    97068: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/payments/success-trial",
        function () {
          return n(33938);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2888, 9774, 179], function () {
      return e((e.s = 97068));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=success-trial-b5e0d4fd579cf5dd.js.map
