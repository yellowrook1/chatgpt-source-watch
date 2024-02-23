"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [101],
  {
    90101: function (e, t, n) {
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return N;
          },
          default: function () {
            return _;
          },
          messages: function () {
            return W;
          },
        });
      var r = n(39827),
        i = n(48756),
        l = n(61084),
        a = n(2722);
      n(69483);
      var o = n(12366),
        s = n(70079),
        c = n(949),
        u = n(66873),
        d = n(47527),
        p = n(16640),
        g = n(91128),
        f = n(53197),
        h = n(27282),
        x = n(19841),
        m = n(70671),
        b = n(32004),
        v = n(94968),
        j = n(66520),
        y = n(35250);
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : w(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function k(e) {
        let {
            auth0Provider: t,
            enableNewAuthFlow: n,
            nextUrl: r,
            isStorageComplianceEnabled: i,
          } = e,
          l = (0, m.Z)();
        return (0, y.jsx)(y.Fragment, {
          children: (0, y.jsxs)("div", {
            className:
              "relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",
            children: [
              (0, y.jsx)("nav", {
                className:
                  "flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",
                children: (0, y.jsx)("h1", {
                  "aria-label": l.formatMessage(C.ariaLabel),
                  children: (0, y.jsx)("div", {
                    className:
                      "flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",
                    children: (0, y.jsx)("div", { children: j.L }),
                  }),
                }),
              }),
              (0, y.jsxs)("div", {
                className:
                  "relative flex w-full grow flex-col items-center justify-center",
                children: [
                  (0, y.jsx)("h2", {
                    className:
                      "text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",
                    children: (0, y.jsx)(b.Z, O({}, C.pageTitle)),
                  }),
                  (0, y.jsx)("div", {
                    className: "mt-5 w-full max-w-[440px]",
                    children: n
                      ? (0, y.jsx)(y.Fragment, {
                          children: (0, y.jsxs)("div", {
                            className: "flex w-full flex-col gap-3",
                            children: [
                              (0, y.jsx)(M, {
                                icon: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 48 48'%3E%3Cdefs%3E%3Cpath id='a' d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'/%3E%3C/defs%3E%3CclipPath id='b'%3E%3Cuse xlink:href='%23a' overflow='visible'/%3E%3C/clipPath%3E%3Cpath clip-path='url(%23b)' fill='%23FBBC05' d='M0 37V11l17 13z'/%3E%3Cpath clip-path='url(%23b)' fill='%23EA4335' d='M0 11l17 13 7-6.1L48 14V0H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%2334A853' d='M0 37l30-23 7.9 1L48 0v48H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%234285F4' d='M48 48L17 24l-4-3 35-10z'/%3E%3C/svg%3E\")",
                                onClick: () => {
                                  h.m9.logEvent("chatgpt_auth_log_in", null, {
                                    provider: "google",
                                  }),
                                    g.A.logEvent(f.M.authLogin, {
                                      provider: "google",
                                    }),
                                    (0, a.signIn)(
                                      "openai",
                                      { callbackUrl: r },
                                      {
                                        prompt: "login",
                                        login_hint: (0, p.W_)({
                                          idp: "google",
                                        }),
                                      }
                                    );
                                },
                                children: (0, y.jsx)(
                                  b.Z,
                                  O({}, C.continueWithGoogle)
                                ),
                              }),
                              (0, y.jsx)(M, {
                                icon: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21'%3E%3Cpath fill='%23f25022' d='M1 1h9v9H1z'/%3E%3Cpath fill='%2300a4ef' d='M1 11h9v9H1z'/%3E%3Cpath fill='%237fba00' d='M11 1h9v9h-9z'/%3E%3Cpath fill='%23ffb900' d='M11 11h9v9h-9z'/%3E%3C/svg%3E\")",
                                onClick: () => {
                                  h.m9.logEvent("chatgpt_auth_log_in", null, {
                                    provider: "microsoft",
                                  }),
                                    g.A.logEvent(f.M.authLogin, {
                                      provider: "microsoft",
                                    }),
                                    (0, a.signIn)(
                                      "openai",
                                      { callbackUrl: r },
                                      {
                                        prompt: "login",
                                        login_hint: (0, p.W_)({
                                          idp: "microsoft",
                                        }),
                                      }
                                    );
                                },
                                children: (0, y.jsx)(
                                  b.Z,
                                  O({}, C.continueWithMicrosoft)
                                ),
                              }),
                              (0, y.jsx)("div", {
                                className:
                                  "my-2 w-full border-t border-black/5",
                              }),
                              (0, y.jsxs)("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                  (0, y.jsx)(M, {
                                    primary: !0,
                                    className: "justify-center",
                                    onClick: () => {
                                      h.m9.logEvent(
                                        "chatgpt_auth_log_in",
                                        null,
                                        { provider: "openai" }
                                      ),
                                        g.A.logEvent(f.M.authLogin, {
                                          provider: "openai",
                                        }),
                                        (0, a.signIn)(
                                          "openai",
                                          { callbackUrl: r },
                                          {
                                            prompt: "login",
                                            login_hint: (0, p.W_)({
                                              idp: "openai",
                                            }),
                                          }
                                        );
                                    },
                                    children: (0, y.jsx)(b.Z, O({}, C.logIn)),
                                  }),
                                  (0, y.jsx)(M, {
                                    primary: !0,
                                    className: "justify-center",
                                    onClick: () => {
                                      h.m9.logEvent(
                                        "chatgpt_auth_sign_up",
                                        null,
                                        { provider: "openai" }
                                      ),
                                        g.A.logEvent(f.M.authSignup, {
                                          provider: "openai",
                                        }),
                                        (0, a.signIn)(
                                          "openai",
                                          { callbackUrl: r },
                                          {
                                            prompt: "login",
                                            login_hint: (0, p.W_)({
                                              idp: "openai",
                                              screen: "signup",
                                            }),
                                          }
                                        );
                                    },
                                    children: (0, y.jsx)(b.Z, O({}, C.signUp)),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        })
                      : (0, y.jsx)(y.Fragment, {
                          children: (0, y.jsxs)("div", {
                            className:
                              "grid gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-0",
                            children: [
                              (0, y.jsx)(M, {
                                primary: !0,
                                testid: "login-button",
                                onClick: () => {
                                  h.m9.logEvent("chatgpt_auth_log_in", null, {
                                    provider: "auth0",
                                  }),
                                    g.A.logEvent(f.M.authLogin, {
                                      provider: "auth0",
                                    }),
                                    (0, a.signIn)(
                                      t,
                                      { callbackUrl: r },
                                      { prompt: "login" }
                                    );
                                },
                                children: (0, y.jsx)(b.Z, O({}, C.logIn)),
                              }),
                              (0, y.jsx)(M, {
                                primary: !0,
                                as: "button",
                                onClick: () => {
                                  h.m9.logEvent("chatgpt_auth_sign_up", null, {
                                    provider: "auth0",
                                  }),
                                    g.A.logEvent(f.M.authSignup, {
                                      provider: "auth0",
                                    }),
                                    (0, a.signIn)(
                                      t,
                                      { callbackUrl: r },
                                      { prompt: "login", screen_hint: "signup" }
                                    );
                                },
                                children: (0, y.jsx)(b.Z, O({}, C.signUp)),
                              }),
                            ],
                          }),
                        }),
                  }),
                ],
              }),
              (0, y.jsxs)("div", {
                className: "mt-10 flex flex-col justify-center ",
                children: [
                  (0, y.jsx)("div", {
                    className: "flex justify-center text-gray-300 md:mb-3",
                    children: (0, y.jsx)(d.nV, {
                      className: "h-[22px] w-auto",
                    }),
                  }),
                  (0, y.jsx)(u.VL, { isStorageComplianceEnabled: i }),
                ],
              }),
            ],
          }),
        });
      }
      function M(e) {
        let {
          icon: t,
          children: n,
          className: r,
          onClick: i,
          testid: l,
          style: a = "new",
          primary: o = !1,
        } = e;
        return (0, y.jsxs)("button", {
          className: (0, x.default)("relative", r, {
            "btn-neutral flex items-center justify-center gap-3 rounded p-3 text-center text-base":
              "legacy" === a,
            "flex h-12 items-center justify-center rounded-md text-center text-base font-medium":
              "new" === a,
            "bg-black/5 hover:bg-black/10 dark:bg-[rgba(255,255,255,0.15)] dark:hover:bg-white/20":
              "new" === a && !o,
            "bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]": "new" === a && o,
          }),
          "data-testid": l,
          onClick: i,
          children: [
            t
              ? (0, y.jsx)("div", {
                  className: (0, x.default)("h-5 w-5 justify-self-start", {
                    "absolute left-5 top-1/2 -translate-y-1/2": "new" === a,
                  }),
                  style: { backgroundImage: t },
                })
              : null,
            (0, y.jsx)("div", {
              className: (0, x.default)({ "relative -top-[1px]": "new" === a }),
              children: n,
            }),
          ],
        });
      }
      let C = (0, v.vU)({
        pageTitle: { id: "Login.pageTitle", defaultMessage: "Get started" },
        ariaLabel: {
          id: "Login.ariaLabel",
          defaultMessage: "ChatGPT by OpenAI",
        },
        welcome: { id: "Login.welcome", defaultMessage: "Welcome to ChatGPT" },
        logIn: { id: "Login.logIn", defaultMessage: "Log in" },
        signUp: { id: "Login.signUp", defaultMessage: "Sign up" },
        continueWithGoogle: {
          id: "Login.continueWithGoogle",
          defaultMessage: "Continue with Google",
        },
        continueWithMicrosoft: {
          id: "Login.continueWithMicrosoft",
          defaultMessage: "Continue with Microsoft",
        },
        useDevAuth: { id: "Login.useDevAuth", defaultMessage: "Use dev auth" },
        useProdAuth: {
          id: "Login.useProdAuth",
          defaultMessage: "Use prod auth",
        },
        orTryAnotherWay: {
          id: "Login.orTryAnotherWay",
          defaultMessage: "Or try another way",
        },
        logInWithOpenAI: {
          id: "Login.logInWithOpenAI",
          defaultMessage: "Log in with your OpenAI account to continue",
        },
      });
      var E = n(65455),
        I = n(88565),
        P = n(21243);
      function L(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : L(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var N = !0;
      function _(e) {
        var t;
        let {
            serviceStatus: n,
            examples: r = [],
            auth0Provider: c,
            enableNewAuthFlow: u,
            cfConnectingIp: d,
            isStorageComplianceEnabled: p,
            statsigShowCapacityGate: h,
          } = e,
          x = (0, o.useRouter)(),
          { next: b } = x.query,
          v = "string" == typeof b && b.startsWith("/") ? b : "/";
        x.asPath.includes("#") && (v += "#" + x.asPath.split("#")[1]);
        let j = (0, m.Z)(),
          w = !!(null == n ? void 0 : n.oof) || !0 === h,
          O = (0, s.useRef)(!1),
          k =
            "sso" in x.query &&
            (null === (t = x.query.sso) || void 0 === t || t),
          M = k ? x.query.connection : void 0;
        return ((0, s.useEffect)(() => {
          if (k && !w) {
            var e;
            let t =
              null === (e = I.bX.getCookie(I.cn.DeviceId)) || void 0 === e
                ? void 0
                : e.toString();
            (0, a.signIn)(
              "openai" === k ? "openai" : "auth0",
              { callbackUrl: v },
              A(A({}, t ? { device_id: t } : {}), M ? { connection: M } : {})
            );
          }
        }, [v, k, M, w]),
        (0, s.useEffect)(() => {
          g.A.logEvent(f.M.loggedOutOpenedAuthLogin, { cfConnectingIp: d });
        }, [d]),
        (0, s.useEffect)(() => {
          "#pricing" === window.location.hash &&
            I.bX.setCookie(I.cn.ShowPaymentModal, !0, { maxAge: 21600 });
        }, []),
        (0, s.useEffect)(() => {
          if (O.current) return;
          O.current = !0;
          let { inv_ws_name: e, inv_email: t } = x.query;
          (e = Array.isArray(e) ? e[0] : e),
            (t = Array.isArray(t) ? t[0] : t),
            e &&
              t &&
              E.m.success(
                j.formatMessage(W.invitedToastMessage, {
                  workspace_name: e,
                  email: t,
                }),
                { hasCloseButton: !0, duration: 600 }
              );
        }, [x.query, j]),
        w)
          ? (0, y.jsx)(i.Z, {})
          : k
            ? null
            : (0, y.jsxs)(y.Fragment, {
                children: [
                  (0, y.jsx)(l.Z, {}),
                  (0, y.jsx)(S, {
                    auth0Provider: c,
                    enableNewAuthFlow: u,
                    examples: r,
                    nextUrl: v,
                    isStorageComplianceEnabled: p,
                  }),
                ],
              });
      }
      let S = (e) => {
        let {
          auth0Provider: t,
          enableNewAuthFlow: n,
          examples: r = [],
          nextUrl: i,
          isStorageComplianceEnabled: l,
        } = e;
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)(T, {
              auth0Provider: t,
              enableNewAuthFlow: n,
              nextUrl: i,
              examples: r,
              isStorageComplianceEnabled: l,
            }),
            !1,
          ],
        });
      };
      function T(e) {
        let {
            auth0Provider: t,
            enableNewAuthFlow: n,
            nextUrl: r,
            examples: i = [],
            isStorageComplianceEnabled: l,
          } = e,
          { resolvedTheme: a } = (0, P.F)(),
          o = "dark" === a,
          u = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            null === u.current &&
              (u.current = document.body.style.backgroundColor);
            let e = o ? "#00002E" : "#FFFFDB";
            return (
              (document.body.style.backgroundColor = e),
              () => {
                null !== u.current &&
                  (document.body.style.backgroundColor = u.current);
              }
            );
          }, [o]),
          (0, y.jsxs)("div", {
            className:
              "flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]",
            children: [
              (0, y.jsx)(c.O, { examples: i }),
              (0, y.jsx)(k, {
                auth0Provider: t,
                enableNewAuthFlow: n,
                nextUrl: r,
                isStorageComplianceEnabled: l,
              }),
            ],
          })
        );
      }
      let W = (0, v.vU)({
        pageTitle: { id: "Login.pageTitle", defaultMessage: "Get started" },
        ariaLabel: {
          id: "Login.ariaLabel",
          defaultMessage: "ChatGPT by OpenAI",
        },
        welcome: { id: "Login.welcome", defaultMessage: "Welcome to ChatGPT" },
        logIn: { id: "Login.logIn", defaultMessage: "Log in" },
        signUp: { id: "Login.signUp", defaultMessage: "Sign up" },
        continueWithGoogle: {
          id: "Login.continueWithGoogle",
          defaultMessage: "Continue with Google",
        },
        continueWithMicrosoft: {
          id: "Login.continueWithMicrosoft",
          defaultMessage: "Continue with Microsoft",
        },
        useDevAuth: { id: "Login.useDevAuth", defaultMessage: "Use dev auth" },
        useProdAuth: {
          id: "Login.useProdAuth",
          defaultMessage: "Use prod auth",
        },
        orTryAnotherWay: {
          id: "Login.orTryAnotherWay",
          defaultMessage: "Or try another way",
        },
        logInWithOpenAI: {
          id: "Login.logInWithOpenAI",
          defaultMessage: "Log in with your OpenAI account to continue",
        },
        invitedToastMessage: {
          id: "Login.invitedToastMessage",
          defaultMessage:
            "You have been invited to the {workspace_name} workspace! Login or sign up with {email} to accept the invitation.",
        },
      });
    },
    66873: function (e, t, n) {
      n.d(t, {
        VL: function () {
          return m;
        },
        Wk: function () {
          return x;
        },
        jI: function () {
          return v;
        },
        xh: function () {
          return h;
        },
      });
      var r,
        i = n(39827),
        l = n(73017),
        a = n(18405),
        o = n(32004),
        s = n(94968),
        c = n(21389),
        u = n(47527),
        d = n(59674),
        p = n(35250);
      function g(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : g(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let h = c.Z.div(
        r ||
          (r = (0, l.Z)([
            "w-96 flex flex-col flex-auto justify-center items-center",
          ]))
      );
      function x(e) {
        let {
          children: t,
          showTerms: n = !0,
          isStorageComplianceEnabled: r,
        } = e;
        return (0, p.jsxs)("div", {
          className:
            "flex h-full w-full flex-col items-center justify-center bg-token-main-surface-primary",
          children: [t, n && (0, p.jsx)(m, { isStorageComplianceEnabled: r })],
        });
      }
      function m(e) {
        let { isStorageComplianceEnabled: t } = e;
        return (0, p.jsxs)("div", {
          className: "flex gap-3 py-3 text-xs text-token-text-tertiary",
          children: [
            (0, p.jsx)(d.Z, {
              href: "https://openai.com/policies/terms-of-use",
              type: "neutral",
              openNewTab: !0,
              children: (0, p.jsx)(o.Z, f({}, j.terms)),
            }),
            (0, p.jsx)(b, {}),
            (0, p.jsx)(d.Z, {
              href: "https://openai.com/policies/privacy-policy",
              openNewTab: !0,
              type: "neutral",
              children: (0, p.jsx)(o.Z, f({}, j.privacy)),
            }),
            t &&
              (0, p.jsxs)(p.Fragment, {
                children: [
                  (0, p.jsx)(b, {}),
                  (0, p.jsx)("button", {
                    className: "underline",
                    onClick: () => a.vm.openModal(a.B.CookieManagement),
                    children: (0, p.jsx)(o.Z, f({}, j.cookies)),
                  }),
                ],
              }),
          ],
        });
      }
      let b = () =>
        (0, p.jsx)("span", {
          className: "text-token-text-tertiary",
          children: "|",
        });
      function v() {
        return (0, p.jsx)("div", {
          className: "mb-5",
          children: (0, p.jsx)(u.nI, {}),
        });
      }
      let j = (0, s.vU)({
        terms: { id: "AuthPage.terms", defaultMessage: "Terms of use" },
        privacy: { id: "AuthPage.privacy", defaultMessage: "Privacy policy" },
        cookies: { id: "AuthPage.cookies", defaultMessage: "Manage cookies" },
      });
    },
    949: function (e, t, n) {
      n.d(t, {
        O: function () {
          return g;
        },
      });
      var r = n(70671),
        i = n(94968),
        l = n(66520),
        a = n(39827),
        o = n(19841),
        s = n(70079),
        c = n(35250);
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function p(e) {
        let { examples: t } = e,
          { 0: n, 1: r } = (0, s.useState)({
            promptIndex: 0,
            answerIndex: 0,
            tokenStreamIndexes: Array(t.length).fill(0),
          }),
          i = (0, s.useRef)(null),
          l = (0, s.useRef)(n),
          a = () => {
            if (document.hidden) {
              i.current = setTimeout(a, 1e3);
              return;
            }
            let {
                promptIndex: e,
                answerIndex: n,
                tokenStreamIndexes: o,
              } = l.current,
              s = t[e].answerTokens[n],
              c = o[e] + 1,
              u = 90;
            if (c === s.length)
              (l.current = d(
                d({}, l.current),
                {},
                { tokenStreamIndexes: d(d({}, o), {}, { [e]: c }) }
              )),
                (u = 2500);
            else if (c > s.length) {
              let r = n + 1;
              if (r >= t[e].answerTokens.length) {
                let n = (e + 1) % t.length;
                (l.current = {
                  promptIndex: n,
                  answerIndex: 0,
                  tokenStreamIndexes: d(d({}, o), {}, { [n]: 0 }),
                }),
                  (u = 900);
              } else
                (l.current = d(
                  d({}, l.current),
                  {},
                  {
                    answerIndex: r,
                    tokenStreamIndexes: d(d({}, o), {}, { [e]: 0 }),
                  }
                )),
                  (u = 500);
            } else
              l.current = d(
                d({}, l.current),
                {},
                { tokenStreamIndexes: d(d({}, o), {}, { [e]: c }) }
              );
            r(l.current), (i.current = setTimeout(a, u));
          };
        return (
          (0, s.useEffect)(
            () => (
              a(),
              () => {
                i.current && clearTimeout(i.current);
              }
            ),
            []
          ),
          (0, c.jsx)(c.Fragment, {
            children: t.map((e, r) => {
              let i = (n.promptIndex + 1) % t.length,
                l = (r + 1) % t.length === n.promptIndex;
              return (0, c.jsxs)(
                "div",
                {
                  className: (0, o.default)(
                    "absolute left-0 top-1/2 flex w-full flex-col px-5 transition-[transform,opacity] duration-500 md:pl-6 md:pr-8 lg:pl-8 lg:pr-10",
                    {
                      "opacity-100": n.promptIndex === r,
                      "opacity-0": n.promptIndex !== r,
                      "translate-y-[calc(-50%-1em+16px)]": l,
                      "translate-y-[calc(-50%-1em)] delay-[500ms]":
                        n.promptIndex === r,
                      "translate-y-[calc(-50%-1em-16px)]": i === r,
                    }
                  ),
                  children: [
                    (0, c.jsx)("div", {
                      className: "relative font-bold",
                      children: e.prompt,
                    }),
                    (0, c.jsx)("div", {
                      className: "relative",
                      children: e.answerTokens.map((e, t) =>
                        (0, c.jsxs)(
                          "div",
                          {
                            className:
                              "absolute left-0 top-0 max-w-[650px] transition-opacity duration-300",
                            children: [
                              e.map((e, r) =>
                                (0, c.jsx)(
                                  "span",
                                  {
                                    className: (0, o.default)(
                                      "inline transition-opacity duration-300",
                                      {
                                        hidden:
                                          t === n.answerIndex &&
                                          r >=
                                            n.tokenStreamIndexes[n.promptIndex],
                                        "opacity-0": t !== n.answerIndex,
                                      }
                                    ),
                                    children: e,
                                  },
                                  r
                                )
                              ),
                              (0, c.jsxs)("span", {
                                className: (0, o.default)(
                                  "inline-block font-circle delay-[300ms]",
                                  {
                                    "scale-0 transition-transform duration-300":
                                      l ||
                                      t !== n.answerIndex ||
                                      n.tokenStreamIndexes[n.promptIndex] ===
                                        e.length,
                                  }
                                ),
                                children: [
                                  n.tokenStreamIndexes[n.promptIndex] > 0
                                    ? (0, c.jsx)("span", { children: " " })
                                    : null,
                                  "●",
                                ],
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  ],
                },
                r
              );
            }),
          })
        );
      }
      function g(e) {
        let { examples: t } = e,
          n = (0, r.Z)();
        return (0, c.jsxs)("div", {
          className:
            "relative hidden flex-1 flex-col justify-center px-5 pt-8 text-[#FE7600] dark:text-[#D292FF] md:flex md:px-6 md:py-[22px] lg:px-8",
          children: [
            (0, c.jsx)("nav", {
              className:
                "left-0 top-8 flex w-full px-6 sm:absolute md:top-[22px] md:px-6 lg:px-8",
              children: (0, c.jsx)("h1", {
                "aria-label": n.formatMessage(f.ariaLabel),
                children: (0, c.jsx)("div", {
                  className:
                    "flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",
                  children: (0, c.jsx)("div", { children: l.L }),
                }),
              }),
            }),
            (0, c.jsx)("div", {
              className:
                "flex flex-col text-[32px] leading-[1.2] md:text-[40px]",
              "aria-hidden": "true",
              children: t.length > 0 && (0, c.jsx)(p, { examples: t }),
            }),
          ],
        });
      }
      let f = (0, i.vU)({
        ariaLabel: {
          id: "Login.ariaLabel",
          defaultMessage: "ChatGPT by OpenAI",
        },
      });
    },
    66520: function (e, t, n) {
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(35250);
      let i = (0, r.jsxs)(r.Fragment, {
        children: [
          "ChatGPT ",
          (0, r.jsx)("span", { className: "font-circle", children: "●" }),
        ],
      });
    },
  },
]);
//# sourceMappingURL=101-7a366fc24a0fb662.js.map
