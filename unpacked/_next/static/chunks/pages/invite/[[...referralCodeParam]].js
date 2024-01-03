(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2493],
  {
    85243: function (e, r, a) {
      "use strict";
      a.r(r),
        a.d(r, {
          __N_SSP: function () {
            return Q;
          },
          default: function () {
            return ee;
          },
        });
      var t,
        l = a(90038),
        n = a(50134),
        i = a(36112),
        s = a(4399),
        o = a.n(s),
        d = a(66027),
        c = a(7144),
        u = a(73582),
        f = a(61236),
        x = a(25494),
        m = a(25349),
        h = a(99893),
        p = a(68354),
        g = a(14765),
        v = a(19841),
        j = a(97296),
        y = a(20225),
        _ = a(77997),
        b = a(73040),
        w = a.n(b),
        I = a(10721),
        N = a(70079),
        C = a(1454),
        k = a(70671),
        P = a(32004),
        M = a(94968),
        O = a(21389),
        R = a(63754),
        E = a(12457),
        D = a(91559),
        S = a(14972),
        U = a(62906),
        T = a(92804),
        Z = a(90955),
        L = a(63866),
        F = a(4748),
        A = a(35250);
      function H(e, r) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            a.push.apply(a, t);
        }
        return a;
      }
      function V(e) {
        for (var r = 1; r < arguments.length; r++) {
          var a = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? H(Object(a), !0).forEach(function (r) {
                (0, i.Z)(e, r, a[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : H(Object(a)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(a, r)
                  );
                });
        }
        return e;
      }
      function B() {
        return (0, A.jsx)("div", {
          className: "absolute inset-0 flex items-center justify-center",
          children: (0, A.jsx)(L.Z, {}),
        });
      }
      var G = function (e) {
          var r = e.examples,
            a = e.referralCodeId,
            t = e.user,
            l = e.auth0Provider,
            n = e.redirectUrl,
            i = (0, k.Z)(),
            s = "dark" === (0, _.F)().resolvedTheme,
            o = (0, N.useRef)(null);
          return (
            (0, N.useEffect)(
              function () {
                g.m9.logEvent(
                  "chatgpt_referral_invite_loaded",
                  null != t && t.id ? "has_user" : "user_logged_out",
                  {
                    user_id: null != t && t.id ? t.id : "_no_user",
                    referral_code_id: a,
                  }
                );
              },
              [a, null == t ? void 0 : t.id]
            ),
            (0, N.useEffect)(
              function () {
                return (
                  null === o.current &&
                    (o.current = document.body.style.backgroundColor),
                  (document.body.style.backgroundColor = s
                    ? "#00002E"
                    : "#FFFFDB"),
                  function () {
                    null !== o.current &&
                      (document.body.style.backgroundColor = o.current);
                  }
                );
              },
              [s]
            ),
            (0, A.jsxs)("div", {
              className:
                "flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%] ",
              children: [
                (0, A.jsx)(T.O, { examples: void 0 === r ? [] : r }),
                (0, A.jsxs)("div", {
                  className:
                    "relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",
                  children: [
                    (0, A.jsx)("nav", {
                      className:
                        "flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",
                      children: (0, A.jsx)("h1", {
                        "aria-label": i.formatMessage(J.ariaLabel),
                        children: (0, A.jsx)("div", {
                          className:
                            "flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",
                          children: (0, A.jsx)("div", { children: U.L }),
                        }),
                      }),
                    }),
                    (0, A.jsx)(z, {
                      user: t,
                      auth0Provider: l,
                      redirectUrl: n,
                      referralCodeId: a,
                    }),
                    (0, A.jsxs)("div", {
                      className: "flex flex-col items-center justify-end",
                      children: [
                        (0, A.jsx)("div", {
                          className: "flex text-gray-300",
                          children: (0, A.jsx)(S.nV, {
                            className: "h-[22px] w-auto",
                          }),
                        }),
                        (0, A.jsx)("div", {
                          className: " opacity-50",
                          children: (0, A.jsx)(E.VL, {
                            isStorageComplianceEnabled: !1,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        W = function (e) {
          var r = e.offerDollarValue,
            a = e.user,
            t = e.isLoading,
            l = e.isLoadingLogin,
            n = e.handleClaimInvite,
            i = e.handleSignupWarning,
            s = e.handleLogin,
            o = (0, u.ec)(u.F_.hasPaidSubscription);
          return null == (0, c.t)()
            ? null
            : null != a && a.id
              ? (0, A.jsx)(D.z, {
                  as: "button",
                  disabled: t || o,
                  loading: t,
                  color: o ? "disabled" : "primary",
                  size: "large",
                  onClick: n,
                  className: (0, v.default)(
                    "whitespace-nowrap text-base font-bold ",
                    { "bg-[#4046EC] hover:bg-[#6E73FC]": !o }
                  ),
                  children: o
                    ? (0, A.jsx)(P.Z, V({}, J.alreadyPaidUserCta))
                    : (0, A.jsx)(
                        P.Z,
                        V(
                          V({}, J.acceptInviteCtaLoggedIn),
                          {},
                          { values: { dollarValue: r } }
                        )
                      ),
                })
              : (0, A.jsxs)(A.Fragment, {
                  children: [
                    (0, A.jsx)("div", {
                      className: "pb-5 text-center text-sm text-gray-500",
                      children: (0, A.jsx)(
                        P.Z,
                        V({}, J.claimInviteLoginOrSignUp)
                      ),
                    }),
                    (0, A.jsx)("div", {
                      className: "flex flex-col space-y-4 px-3",
                      children: (0, A.jsxs)("div", {
                        className: "flex flex-col gap-3 sm:flex-row",
                        children: [
                          (0, A.jsx)(D.z, {
                            disabled: t,
                            loading: l,
                            className: "w-full",
                            onClick: s,
                            children: (0, A.jsx)(P.Z, V({}, R.messages.logIn)),
                          }),
                          (0, A.jsx)(D.z, {
                            onClick: i,
                            disabled: t,
                            className: "w-full",
                            children: (0, A.jsx)(P.Z, V({}, R.messages.signUp)),
                          }),
                        ],
                      }),
                    }),
                  ],
                });
        };
      function z(e) {
        var r,
          a,
          t,
          l = e.user,
          i = e.referralCodeId,
          s = e.redirectUrl,
          v = e.auth0Provider,
          _ = (0, N.useState)(!1),
          b = _[0],
          M = _[1],
          O = (0, N.useState)(!1),
          R = O[0],
          E = O[1],
          D = (0, N.useState)(!1),
          S = D[0],
          U = D[1],
          T = (0, N.useState)(!1),
          L = T[0],
          H = T[1],
          B =
            null !== (t = null == l ? void 0 : l.id) && void 0 !== t
              ? t
              : "_no_user",
          G = (0, f.a)({
            queryKey: ["referral-invite", i],
            queryFn: function () {
              return d.ZP.getPublicReferralInvite(i);
            },
          }),
          z = G.data,
          Q = G.isLoading,
          ee = G.isError,
          er = (0, k.Z)(),
          ea = null == z ? void 0 : z.result.invite_metadata.invite_data,
          et = "$".concat(null == ea ? void 0 : ea.referral_trial_dollar_value),
          el = null == ea ? void 0 : ea.referrer_public_avatar_url,
          en =
            null != ea && ea.referral_trial_duration_months
              ? (null == ea ? void 0 : ea.referral_trial_duration_months) >= 1
                ? er.formatMessage(J.monthsOfService, {
                    referralTrialDurationMonths:
                      null == ea ? void 0 : ea.referral_trial_duration_months,
                  })
                : er.formatMessage(J.daysOfService, {
                    referralTrialDurationDays:
                      null == ea ? void 0 : ea.referral_trial_duration_days,
                  })
              : null,
          ei = null == ea ? void 0 : ea.referrer_user_name,
          es =
            null != ea && ea.referral_trial_duration_months
              ? (null == ea ? void 0 : ea.referral_trial_duration_months) > 1
                ? er.formatMessage(J.monthsOfBenefit, {
                    referralTrialDurationMonths:
                      null == ea ? void 0 : ea.referral_trial_duration_months,
                  })
                : er.formatMessage(J.daysOfBenefit, {
                    referralTrialDurationDays:
                      null == ea ? void 0 : ea.referral_trial_duration_days,
                  })
              : null,
          eo =
            null != ea && ea.referral_trial_duration_months
              ? (null == ea ? void 0 : ea.referral_trial_duration_months) >= 1
                ? er.formatMessage(J.ctaHeaderMonths, {
                    referralTrialDurationMonths:
                      null == ea ? void 0 : ea.referral_trial_duration_months,
                  })
                : er.formatMessage(J.ctaHeaderDays, {
                    referralTrialDurationDays:
                      null == ea ? void 0 : ea.referral_trial_duration_days,
                  })
              : null,
          ed = er.formatMessage(J.dollarValue, { offerDollarValue: et }),
          ec = (0, c.t)(),
          eu = (0, u.ec)(u.F_.workspaceId),
          ef = (0, I.useRouter)(),
          ex = (0, x.D)({
            mutationFn: function () {
              return d.ZP.postClaimReferralInvite(i, eu || "");
            },
            onSettled: function () {
              U(!1);
            },
            onError:
              ((r = (0, n.Z)(
                o().mark(function e() {
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          F.m.danger(er.formatMessage(J.claimReferralError));
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return r.apply(this, arguments);
              }),
            onSuccess: function () {
              M(!0), ef.push("/invite/accepted?referralCodeId=".concat(i));
            },
          }).mutateAsync,
          em =
            ((a = (0, n.Z)(
              o().mark(function e() {
                return o().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          U(!0),
                          g.m9.logEvent("chatgpt_referral_invite_claim", i, {
                            referralCodeId: i,
                            userId: B,
                          }),
                          m.A.logEvent(h.M.chatgptReferralInviteClaim, {
                            content: B,
                          }),
                          (e.next = 5),
                          ex()
                        );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function () {
              return a.apply(this, arguments);
            });
        return ((0, N.useEffect)(
          function () {
            ee &&
              (ef.push("/?e=oldi"),
              p.U.addAction("fetch_error_404", {
                url: location.href,
                errorMessage: "Referral code not found",
              }));
          },
          [ee, ef]
        ),
        ee)
          ? (0, A.jsx)(Y, {})
          : Q || (null == ec && null != l && l.id) || b
            ? (0, A.jsx)(X, {})
            : (0, A.jsx)(A.Fragment, {
                children: (0, A.jsxs)("div", {
                  className:
                    "relative flex h-full w-full flex-col items-center justify-center",
                  children: [
                    R &&
                      (0, A.jsx)(j.E.div, {
                        initial: { opacity: 0, x: 10 },
                        transition: { delay: 1, duration: 0.1 },
                        animate: {
                          x: 0,
                          opacity: 1,
                          transition: { duration: 0.2, ease: "easeIn" },
                        },
                        exit: {
                          opacity: 0,
                          transition: { duration: 0.2, ease: "easeIn" },
                        },
                        children: (0, A.jsx)(q, {
                          handleSignup: function () {
                            U(!0),
                              H(!0),
                              g.m9.logEvent(
                                "chatgpt_referral_invite_signup",
                                i,
                                { referralCodeId: i }
                              ),
                              m.A.logEvent(h.M.chatgptReferralInviteSignup, {
                                content: i,
                              }),
                              (0, y.signIn)(
                                v,
                                { callbackUrl: s },
                                { prompt: "login", screen_hint: "signup" }
                              );
                          },
                          setHasRequestedSignup: E,
                        }),
                      }),
                    !R &&
                      (0, A.jsx)(j.E.div, {
                        initial: { opacity: 0 },
                        transition: { delay: 1, duration: 0.2 },
                        animate: {
                          opacity: 1,
                          transition: { duration: 0.2, ease: "easeIn" },
                        },
                        exit: {
                          opacity: 0,
                          transition: { duration: 0.2, ease: "easeIn" },
                        },
                        children: (0, A.jsx)("div", {
                          className:
                            "relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",
                          children: (0, A.jsxs)(A.Fragment, {
                            children: [
                              (0, A.jsx)("h2", {
                                className:
                                  "text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",
                                children: eo,
                              }),
                              (0, A.jsx)(K, {
                                referrerPublicAvatarUrl: el,
                                referrerName: ei,
                                benefitWithTime: es,
                                receivedPlan: "ChatGPT Plus",
                                dollarValue: ed,
                              }),
                              (0, A.jsx)("div", {
                                children: (0, A.jsx)("p", {
                                  className: "text-sm",
                                  children: (0, A.jsx)(
                                    P.Z,
                                    V({}, J.benefitPointsHeader)
                                  ),
                                }),
                              }),
                              (0, A.jsxs)("div", {
                                className: "space-y-3",
                                children: [
                                  (0, A.jsxs)($, {
                                    children: [
                                      (0, A.jsx)("span", {
                                        className:
                                          "h-5 w-5 rounded-full bg-green-500 p-0.5",
                                        children: (0, A.jsx)(C.UgA, {
                                          className: "h-4 w-4 text-white",
                                        }),
                                      }),
                                      (0, A.jsx)("span", {
                                        className: "max-w-full",
                                        children: (0, A.jsx)(
                                          P.Z,
                                          V({}, Z.S.plus.demandAccess)
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, A.jsxs)($, {
                                    children: [
                                      (0, A.jsx)("span", {
                                        className:
                                          "h-5 w-5 rounded-full bg-green-500 p-0.5",
                                        children: (0, A.jsx)(C.UgA, {
                                          className: "h-4 w-4 text-white",
                                        }),
                                      }),
                                      (0, A.jsx)("span", {
                                        className: "max-w-full",
                                        children: (0, A.jsx)(
                                          P.Z,
                                          V({}, Z.S.plus.responseSpeed)
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, A.jsxs)($, {
                                    className: "pb-2",
                                    children: [
                                      (0, A.jsx)("span", {
                                        className:
                                          "h-5 w-5 rounded-full bg-green-500 p-0.5",
                                        children: (0, A.jsx)(C.UgA, {
                                          className: "h-4 w-4 text-white",
                                        }),
                                      }),
                                      (0, A.jsx)("span", {
                                        className: "max-w-full",
                                        children: (0, A.jsx)(
                                          P.Z,
                                          V({}, Z.S.plus.modelFeatures)
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, A.jsx)("div", {
                                className: "w-full",
                                children: (0, A.jsx)(W, {
                                  handleClaimInvite: em,
                                  handleSignupWarning: function () {
                                    U(!0),
                                      E(!0),
                                      g.m9.logEvent(
                                        "chatgpt_referral_invite_explain_signup",
                                        i,
                                        { referralCodeId: i }
                                      ),
                                      m.A.logEvent(
                                        h.M.chatgptReferralInviteExplainSignup,
                                        { content: i }
                                      ),
                                      U(!1);
                                  },
                                  handleLogin: function () {
                                    U(!0),
                                      H(!0),
                                      g.m9.logEvent(
                                        "chatgpt_referral_invite_login",
                                        i,
                                        { referralCodeId: i }
                                      ),
                                      m.A.logEvent(
                                        h.M.chatgptReferralInviteLogin,
                                        { content: i }
                                      ),
                                      (0, y.signIn)(
                                        v,
                                        { callbackUrl: s },
                                        { prompt: "login" }
                                      );
                                  },
                                  user: l,
                                  offerDollarValue: et,
                                  isLoading: S,
                                  isLoadingLogin: L,
                                }),
                              }),
                              (0, A.jsxs)("div", {
                                className: "space-y-1.5 py-1 text-center",
                                children: [
                                  (0, A.jsx)("p", {
                                    className: "text-xs text-gray-500",
                                    children: (0, A.jsx)(
                                      P.Z,
                                      V(
                                        V({}, J.ctaFollowUpSummary),
                                        {},
                                        {
                                          values: {
                                            monthlyCost: "$20",
                                            monthsOfService: en,
                                          },
                                        }
                                      )
                                    ),
                                  }),
                                  (null == l ? void 0 : l.id) &&
                                    (0, A.jsx)("p", {
                                      className: "text-xs text-gray-500",
                                      children: (0, A.jsx)(
                                        P.Z,
                                        V(
                                          V({}, J.ctaNotice),
                                          {},
                                          {
                                            values: {
                                              userEmail:
                                                null == l ? void 0 : l.email,
                                              avatar: function () {
                                                var e;
                                                return (0, A.jsx)("img", {
                                                  className:
                                                    "inline-block h-4 w-4 rounded-full",
                                                  src:
                                                    null !==
                                                      (e =
                                                        null == l
                                                          ? void 0
                                                          : l.picture) &&
                                                    void 0 !== e
                                                      ? e
                                                      : void 0,
                                                  alt:
                                                    null == l ? void 0 : l.name,
                                                });
                                              },
                                              email: function (e) {
                                                return (0, A.jsx)("span", {
                                                  className: "font-medium",
                                                  children: e,
                                                });
                                              },
                                              link: function (e) {
                                                return (0, A.jsx)(w(), {
                                                  className: "underline",
                                                  href: "/auth/logout",
                                                  children: e,
                                                });
                                              },
                                            },
                                          }
                                        )
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
              });
      }
      var q = function (e) {
          var r = e.setHasRequestedSignup,
            a = e.handleSignup;
          return (0, A.jsxs)("div", {
            className:
              "relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",
            children: [
              (0, A.jsx)("h2", {
                className:
                  "text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",
                children: (0, A.jsx)(P.Z, V({}, J.signUpExplainTitle)),
              }),
              (0, A.jsx)("div", {
                children: (0, A.jsx)("p", {
                  className: "text-sm",
                  children: (0, A.jsx)(P.Z, V({}, J.signUpExplainDescription)),
                }),
              }),
              (0, A.jsxs)("div", {
                className: "flex flex-col gap-4 md:flex-row",
                children: [
                  (0, A.jsx)(D.z, {
                    className: "w-full",
                    onClick: function () {
                      r(!1);
                    },
                    color: "neutral",
                    children: (0, A.jsx)(P.Z, V({}, J.signUpCtaBack)),
                  }),
                  (0, A.jsx)(D.z, {
                    onClick: a,
                    className: "w-full",
                    color: "primary",
                    children: (0, A.jsx)(P.Z, V({}, J.signUpCtaProceed)),
                  }),
                ],
              }),
            ],
          });
        },
        Y = function () {
          return (0, A.jsxs)("div", {
            className:
              "relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",
            children: [
              (0, A.jsx)("div", {
                className:
                  "relative flex h-8 w-8 items-center justify-center opacity-70",
                children: (0, A.jsx)(B, {}),
              }),
              (0, A.jsx)(j.E.div, {
                initial: { opacity: 0 },
                transition: { delay: 1, duration: 0.2 },
                animate: {
                  opacity: 1,
                  transition: { duration: 0.2, ease: "easeIn" },
                },
                exit: {
                  opacity: 0,
                  transition: { duration: 0.2, ease: "easeIn" },
                },
                children: (0, A.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, A.jsx)("h2", {
                      className: "text-sm font-semibold",
                      children: (0, A.jsx)(P.Z, V({}, J.errorHeader)),
                    }),
                    (0, A.jsx)("p", {
                      className: "text-xs font-normal",
                      children: (0, A.jsx)(
                        P.Z,
                        V(
                          V({}, J.errorDescription),
                          {},
                          {
                            values: {
                              link: function (e) {
                                return (0, A.jsx)("a", {
                                  href: "/",
                                  className: "underline",
                                  children: e,
                                });
                              },
                            },
                          }
                        )
                      ),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        X = function () {
          return (0, A.jsx)("div", {
            className:
              "relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",
            children: (0, A.jsx)("div", {
              className:
                "relative flex h-8 w-8 items-center justify-center opacity-70",
              children: (0, A.jsx)(B, {}),
            }),
          });
        },
        $ = O.Z.div(
          t ||
            (t = (0, l.Z)([
              "gap-2 flex flex-row justify-start text-sm items-start",
            ]))
        ),
        K = function (e) {
          var r = e.referrerPublicAvatarUrl,
            a = e.referrerName,
            t = e.benefitWithTime,
            l = e.receivedPlan,
            n = e.dollarValue;
          return (0, A.jsxs)("div", {
            className: "flex w-full items-center",
            children: [
              (0, A.jsx)("div", {
                className: "flex-shrink-0 pt-0.5",
                children: (0, A.jsx)("img", {
                  className: "h-12 w-12 rounded-full bg-yellow-400",
                  src: r,
                  alt: a,
                }),
              }),
              (0, A.jsx)("div", {
                className: "ml-3 w-0 flex-1",
                children: (0, A.jsx)("p", {
                  className: "text-sm text-gray-900 dark:text-white",
                  children: (0, A.jsx)(
                    P.Z,
                    V(
                      V({}, J.socialProofText),
                      {},
                      {
                        values: {
                          referrerName: a,
                          benefitWithTime: t,
                          receivedPlan: l,
                          dollarValue: n,
                          highlight: function (e) {
                            return (0, A.jsx)("span", {
                              className:
                                "rounded-sm bg-green-200 px-0.5 dark:bg-orange-500",
                              children: e,
                            });
                          },
                        },
                      }
                    )
                  ),
                }),
              }),
            ],
          });
        },
        J = (0, M.vU)({
          claimReferralError: {
            id: "ReferralInvite.claimReferralError",
            defaultMessage: "There was an issue.",
          },
          claimInviteLoginOrSignUp: {
            id: "ReferralInvite.claimInviteLoginOrSignUp",
            defaultMessage:
              "You can claim this invite after you log in or sign up.",
          },
          ctaNotice: {
            id: "ReferralInvite.ctaNotice",
            defaultMessage:
              "Claiming referral with <avatar></avatar> <email>{userEmail}</email>. <link>Not you?</link>",
          },
          ctaHeaderMonths: {
            id: "ReferralInvite.ctaHeaderMonths",
            defaultMessage:
              "Claim your {referralTrialDurationMonths, plural, one {one month} other {# months}} of ChatGPT Plus",
          },
          ctaHeaderDays: {
            id: "ReferralInvite.ctaHeaderDays",
            defaultMessage:
              "Claim your {referralTrialDurationDays, plural, one {one day} other {# days}} of ChatGPT Plus",
          },
          dollarValue: {
            id: "ReferralInvite.dollarValue",
            defaultMessage: "(a {offerDollarValue} value)",
          },
          monthsOfService: {
            id: "ReferralInvite.monthsOfService",
            defaultMessage:
              "{referralTrialDurationMonths, plural, one {# month} other {# months}}",
          },
          daysOfService: {
            id: "ReferralInvite.daysOfService",
            defaultMessage:
              "{referralTrialDurationDays, plural, one {# day} other {# days}}",
          },
          monthsOfBenefit: {
            id: "ReferralInvite.monthsOfBenefit",
            defaultMessage:
              "{referralTrialDurationMonths, plural, one {free month} other {# free months}}",
          },
          daysOfBenefit: {
            id: "ReferralInvite.daysOfBenefit",
            defaultMessage:
              "{referralTrialDurationDays, plural, one {# free day} other {# free days}}",
          },
          ariaLabel: {
            id: "ReferralInvite.ariaLabel",
            defaultMessage: "ChatGPT by OpenAI",
          },
          socialProofText: {
            id: "ReferralInvite.socialProofText",
            defaultMessage:
              "{referrerName} sent you <highlight>{benefitWithTime}</highlight> of {receivedPlan} {dollarValue}",
          },
          welcome: {
            id: "ReferralInvite.welcome",
            defaultMessage: "Welcome to ChatGPT",
          },
          benefitPointsHeader: {
            id: "ReferralInvite.benefitPointsHeader",
            defaultMessage:
              "ChatGPT Plus offers subscribers premium access to OpenAI's conversational AI, which includes:",
          },
          acceptInviteCtaLoggedOut: {
            id: "ReferralInvite.acceptInviteCtaLoggedOut",
            defaultMessage: "Get started",
          },
          acceptInviteCtaLoggedIn: {
            id: "ReferralInvite.acceptInviteCtaLoggedIn",
            defaultMessage: "Claim invite",
          },
          alreadyPaidUserCta: {
            id: "ReferralInvite.alreadyPaidUserCta",
            defaultMessage: "ChatGPT Plus subscription found",
          },
          ctaFollowUpSummary: {
            id: "ReferralInvite.ctaFollowUpSummary",
            defaultMessage: "{monthsOfService} free, then {monthlyCost}/month",
          },
          referralCodeContent: {
            id: "ReferralInvite.referralCodeContent",
            defaultMessage: "Referral code: {codeToken}",
          },
          errorHeader: {
            id: "ReferralInvite.errorHeader",
            defaultMessage: "Invite error",
          },
          errorDescription: {
            id: "ReferralInvite.errorDescription",
            defaultMessage:
              "You will be redirected, or <link>click here.</link>",
          },
          loadingHeader: {
            id: "ReferralInvite.loadingHeader",
            defaultMessage: "Invite loading",
          },
          loadingDescription: {
            id: "ReferralInvite.loadingDescription",
            defaultMessage:
              "Your page will be loaded, or <link>go home by clicking here.</link>",
          },
          signUpExplainTitle: {
            id: "ReferralInvite.signUpExplainTitle",
            defaultMessage: "Almost done!",
          },
          signUpExplainDescription: {
            id: "ReferralInvite.signUpExplainDescription",
            defaultMessage:
              "Once you’ve finished signing up, return to this page to claim your invite.",
          },
          signUpCtaProceed: {
            id: "ReferralInvite.signUpCtaProceed",
            defaultMessage: "Proceed",
          },
          signUpCtaBack: {
            id: "ReferralInvite.signUpCtaBack",
            defaultMessage: "Go back",
          },
        }),
        Q = !0;
      function ee(e) {
        var r = e.examples,
          a = e.redirectUrl,
          t = e.user,
          l = e.auth0Provider,
          n = e.referralCodeId;
        return (0, A.jsx)(G, {
          user: t,
          redirectUrl: a,
          referralCodeId: n,
          auth0Provider: l,
          examples: void 0 === r ? [] : r,
        });
      }
    },
    94244: function (e, r, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/invite/[[...referralCodeParam]]",
        function () {
          return a(85243);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [3975, 3754, 9774, 2888, 179], function () {
      return e((e.s = 94244));
    }),
      (_N_E = e.O());
  },
]);
