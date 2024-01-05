(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3224],
  {
    73643: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return ef;
          },
          default: function () {
            return em;
          },
        });
      var i,
        a,
        s,
        r,
        l,
        o = t(35017),
        c = t(36112),
        u = t(50134),
        d = t(4399),
        f = t.n(d),
        m = t(4748),
        g = t(66027),
        x = t(73582),
        p = t(19841),
        v = t(10721),
        j = t(70079),
        h = t(1454),
        b = t(70671),
        y = t(32004),
        w = t(94968),
        Z = t(91559),
        O = t(44247),
        P = t(63866),
        M = t(3554),
        N = t(7144),
        _ = t(90387),
        k = t(21120),
        B = t(998),
        I = t(23232),
        D = t(35250);
      function T(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i);
        }
        return t;
      }
      function E(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? T(Object(t), !0).forEach(function (n) {
                (0, c.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
        }
        return e;
      }
      function S(e) {
        var n,
          t = e.isOpen,
          i = e.onClose,
          a = (0, b.Z)(),
          s = (0, I.ZP)(),
          r = s.data,
          l = s.isLoading,
          o = (0, N.t)(),
          c = (0, I.St)(o.id),
          d = (0, x.aF)(),
          g = (0, j.useState)(""),
          p = g[0],
          v = g[1],
          h = (0, j.useState)(!1),
          w = h[0],
          Z = h[1],
          O =
            (null == d ? void 0 : d.email) &&
            p.toLowerCase() == d.email.toLowerCase(),
          P = (0, j.useState)(r && !r.will_renew),
          T = P[0],
          S = P[1];
        if (l || !o || !r) return null;
        var z =
          ((n = (0, u.Z)(
            f().mark(function e() {
              return f().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          Z(!0), (e.prev = 1), (e.next = 4), c.mutateAsync(o.id)
                        );
                      case 4:
                        S(!0), (e.next = 10);
                        break;
                      case 7:
                        (e.prev = 7),
                          (e.t0 = e.catch(1)),
                          m.m.warning(
                            a.formatMessage(C.errorCancellingSubscription),
                            { hasCloseButton: !0 }
                          );
                      case 10:
                        return (e.prev = 10), Z(!1), e.finish(10);
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 7, 10, 13]]
              );
            })
          )),
          function () {
            return n.apply(this, arguments);
          });
        return (0, D.jsx)(k.Z, {
          type: "success",
          onClose: i,
          isOpen: t,
          className: "",
          title: (0, D.jsx)("span", {
            className: "text-lg",
            children: (0, D.jsx)(y.Z, E({}, C.cancelPlan)),
          }),
          closeButton: (0, D.jsx)(M.ZP.CloseButton, { onClose: i }),
          children: T
            ? (0, D.jsxs)("div", {
                children: [
                  (0, D.jsx)("h3", {
                    className:
                      "mb-2 text-base font-medium text-token-text-primary",
                    children: (0, D.jsx)(y.Z, E({}, C.successfullyCanceled)),
                  }),
                  null != r.active_until &&
                    (0, D.jsx)("p", {
                      className: "text-sm text-token-text-primary",
                      children: (0, D.jsx)(
                        y.Z,
                        E(
                          E({}, C.retainUntil),
                          {},
                          { values: { expiryDate: new Date(r.active_until) } }
                        )
                      ),
                    }),
                  (0, D.jsx)("div", {
                    className: "mt-6 flex w-full flex-row justify-end",
                    children: (0, D.jsx)(M.mH, {
                      title: a.formatMessage(C.doneButton),
                      color: "primary",
                      onClick: i,
                      disabled: w,
                    }),
                  }),
                ],
              })
            : (0, D.jsxs)("div", {
                children: [
                  (0, D.jsxs)("div", {
                    className:
                      "flex flex-col items-center justify-center gap-4",
                    children: [
                      (0, D.jsxs)("div", {
                        className: "flex w-full items-center gap-4",
                        children: [
                          (0, D.jsx)(_.B0, {
                            src: o.data.profilePictureUrl,
                            size: "large",
                          }),
                          (0, D.jsxs)("div", {
                            className: "flex-col",
                            children: [
                              (0, D.jsx)("p", {
                                className: "font-medium",
                                children: o.data.name,
                              }),
                              (0, D.jsx)("p", {
                                className: "text-sm text-token-text-secondary",
                                children: (0, D.jsx)(
                                  y.Z,
                                  E(
                                    E({}, C.membersCount),
                                    {},
                                    { values: { count: r.seats_entitled } }
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, D.jsxs)("div", {
                        className: "w-full",
                        children: [
                          (0, D.jsx)("h3", {
                            className:
                              "mb-2 text-base font-medium text-token-text-primary",
                            children: (0, D.jsx)(y.Z, E({}, C.areYouSure)),
                          }),
                          (0, D.jsxs)("ul", {
                            className:
                              "list-disc pl-5 text-sm text-token-text-secondary",
                            children: [
                              (0, D.jsx)("li", {
                                className: "my-2",
                                children: (0, D.jsx)(
                                  y.Z,
                                  E({}, C.dataUnavailable)
                                ),
                              }),
                              null != r.active_until &&
                                (0, D.jsx)("li", {
                                  className: "my-2",
                                  children: (0, D.jsx)(
                                    y.Z,
                                    E(
                                      E({}, C.retainUntil),
                                      {},
                                      {
                                        values: {
                                          expiryDate: new Date(r.active_until),
                                        },
                                      }
                                    )
                                  ),
                                }),
                              (0, D.jsx)("li", {
                                className: "my-2",
                                children: (0, D.jsx)(
                                  y.Z,
                                  E({}, C.retainEmailAccess)
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, D.jsxs)("div", {
                        className: "w-full",
                        children: [
                          (0, D.jsx)("h3", {
                            className:
                              "mb-2 text-base font-medium text-token-text-primary",
                            children: (0, D.jsx)(
                              y.Z,
                              E({}, C.enterEmailToConfirm)
                            ),
                          }),
                          (0, D.jsx)(B.Z, {
                            type: "text",
                            name: "user-email",
                            placeholder: "abcd@acme.com",
                            onChange: function (e) {
                              v(e.target.value);
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, D.jsxs)("div", {
                    className: "mt-6 flex w-full flex-row justify-end",
                    children: [
                      (0, D.jsx)(M.mH, {
                        title: a.formatMessage(C.keepSubscriptionButton),
                        onClick: i,
                        disabled: w,
                      }),
                      (0, D.jsx)(M.mH, {
                        title: a.formatMessage(C.cancelSubscriptionButton),
                        onClick: z,
                        disabled: !O,
                        loading: w,
                        color: "danger",
                        className: "ml-2",
                      }),
                    ],
                  }),
                ],
              }),
        });
      }
      var C = (0, w.vU)({
          dataUnavailable: {
            id: "cancelTeamPlanModal.dataUnavailable",
            defaultMessage:
              "All workspace data including chat history and settings will not be available.",
          },
          cancelPlan: {
            id: "cancelTeamPlanModal.cancelPlan",
            defaultMessage: "Cancel subscription",
          },
          retainUntil: {
            id: "cancelTeamPlanModal.retainUntil",
            defaultMessage:
              "You will retain access to the workspace until the end of your billing cycle on {expiryDate, date, long}.",
          },
          retainEmailAccess: {
            id: "cancelTeamPlanModal.retainEmailAccess",
            defaultMessage:
              "You will still be able to use ChatGPT with the other workspaces associated with this email address.",
          },
          errorCancellingSubscription: {
            id: "cancelTeamPlanModal.errorCancellingSubscription",
            defaultMessage: "There was a problem cancelling your subscription.",
          },
          areYouSure: {
            id: "cancelTeamPlanModal.areYouSure",
            defaultMessage: "Are you sure?",
          },
          enterEmailToConfirm: {
            id: "cancelTeamPlanModal.enterEmailToConfirm",
            defaultMessage: "Enter your Email address to confirm",
          },
          emailPlaceholder: {
            id: "cancelTeamPlanModal.emailPlaceholder",
            defaultMessage: "abcd@acme.com",
          },
          doneButton: {
            id: "cancelTeamPlanModal.doneButton",
            defaultMessage: "Done",
          },
          keepSubscriptionButton: {
            id: "cancelTeamPlanModal.keepSubscriptionButton",
            defaultMessage: "Keep subscription",
          },
          cancelSubscriptionButton: {
            id: "cancelTeamPlanModal.cancelSubscriptionButton",
            defaultMessage: "Cancel subscription",
          },
          successfullyCanceled: {
            id: "cancelTeamPlanModal.successfullyCanceled",
            defaultMessage: "You have successfully canceled your subscription.",
          },
          membersCount: {
            id: "yourComponent.membersCount",
            defaultMessage: "{count, plural, one {# member} other {# members}}",
          },
        }),
        z = t(90038),
        A = t(21389),
        L = t(90166);
      function U(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i);
        }
        return t;
      }
      function F(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? U(Object(t), !0).forEach(function (n) {
                (0, c.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
        }
        return e;
      }
      function Y(e) {
        var n = e.numInUse,
          t = e.numAllocated;
        return (0, D.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [
            (0, D.jsx)(Math.max(t, n) > 10 ? W : R, {
              numInUse: n,
              numAllocated: t,
            }),
            (0, D.jsx)("span", {
              className: "text-sm",
              children: (0, D.jsx)(
                y.Z,
                F(
                  F({}, V.description),
                  {},
                  { values: { num: "".concat(n, "/").concat(t) } }
                )
              ),
            }),
          ],
        });
      }
      function W(e) {
        var n = e.numAllocated,
          t = e.numInUse,
          i = (0, b.Z)(),
          a = t > n;
        return (0, D.jsx)("div", {
          className: (0, p.default)(
            "relative w-full rounded-full",
            a ? "bg-orange-500" : "bg-gray-200 dark:bg-gray-500"
          ),
          children: (0, D.jsxs)("div", {
            className: "relative h-4",
            style: { width: "".concat(a ? (n / t) * 100 : 100, "%") },
            children: [
              (0, D.jsx)("div", {
                className: (0, p.default)(
                  "h-4 overflow-hidden rounded-l-full bg-green-600",
                  t === n && "rounded-r-full"
                ),
                style: { width: "".concat(a ? 100 : (t / n) * 100, "%") },
              }),
              t !== n &&
                a &&
                (0, D.jsx)("div", {
                  className:
                    "absolute right-0 top-[-3px] bg-token-surface-primary dark:bg-token-surface-secondary",
                  children: (0, D.jsx)(L.u, {
                    label: i.formatMessage(V.dividerTooltip, { count: n }),
                    children: (0, D.jsx)(q, { className: "px-1 py-0.5" }),
                  }),
                }),
            ],
          }),
        });
      }
      var q = function (e) {
          var n = e.className;
          return (0, D.jsxs)("div", {
            className: (0, p.default)("flex flex-col gap-0.5", n),
            children: [
              (0, D.jsx)(Q, {}),
              (0, D.jsx)(Q, {}),
              (0, D.jsx)(Q, {}),
              (0, D.jsx)(Q, {}),
            ],
          });
        },
        $ = A.Z.div(i || (i = (0, z.Z)(["h-4 w-4 rounded-full"]))),
        H = (0, A.Z)($)(a || (a = (0, z.Z)(["bg-green-600"]))),
        G = (0, A.Z)($)(s || (s = (0, z.Z)(["bg-gray-200 dark:bg-gray-500"]))),
        K = (0, A.Z)($)(r || (r = (0, z.Z)(["bg-orange-500"]))),
        Q = A.Z.span(
          l ||
            (l = (0, z.Z)([
              "w-[3px] h-[3px] bg-gray-400 dark:bg-gray-500 rounded-full",
            ]))
        );
      function R(e) {
        var n = e.numAllocated,
          t = e.numInUse,
          i = (0, b.Z)(),
          a = t > n,
          s = (0, j.useMemo)(
            function () {
              return Array.from(Array(a ? t : n).keys());
            },
            [a, n, t]
          );
        return (0, D.jsx)("div", {
          className: "flex items-center gap-2",
          children: s.map(function (e) {
            var s = K,
              r = null;
            return (
              e < t && !a ? (s = H) : e < n && !a && (s = G),
              e === n - 1 &&
                (r = (0, D.jsx)(L.u, {
                  label: i.formatMessage(V.dividerTooltip, { count: n }),
                  children: (0, D.jsx)(q, {}),
                })),
              (0, D.jsxs)(D.Fragment, { children: [(0, D.jsx)(s, {}, e), r] })
            );
          }),
        });
      }
      var V = (0, w.vU)({
          dividerTooltip: {
            defaultMessage:
              "Your team has {count, plural, =0 {no seats} one {# seat} other {# seats}} purchased",
            id: "components.business.NumSeats.dividerTooltip",
          },
          description: {
            defaultMessage: "{num} seats in use",
            id: "components.business.NumSeats.description",
          },
        }),
        X = t(81942),
        J = t(61236);
      function ee(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i);
        }
        return t;
      }
      function en(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? ee(Object(t), !0).forEach(function (n) {
                (0, c.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ee(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
        }
        return e;
      }
      var et = (0, w.vU)({
        invoicesLoadError: {
          id: "organizationBillingInfo.invoicesLoadError.0",
          defaultMessage:
            "Failed to load invoices. Contact support@openai.com if error persists.",
        },
      });
      function ei(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i);
        }
        return t;
      }
      function ea(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? ei(Object(t), !0).forEach(function (n) {
                (0, c.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ei(Object(t)).forEach(function (n) {
                  Object.defineProperty(
                    e,
                    n,
                    Object.getOwnPropertyDescriptor(t, n)
                  );
                });
        }
        return e;
      }
      function es() {
        var e,
          n = (0, v.useRouter)(),
          t = (0, I.ZP)(),
          i = t.data,
          a = t.isLoading,
          s = t.isError,
          r = (0, x.ec)(x.F_.isEnterprisePlan),
          l = (0, b.Z)(),
          o = (0, j.useState)(!1),
          c = o[0],
          d = o[1],
          p = (0, x.ec)(x.F_.workspaceId),
          h = (0, x.ec)(x.F_.isTeamPlan),
          w =
            ((e = (0, u.Z)(
              f().mark(function e() {
                var t;
                return f().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            d(!0),
                            (e.prev = 1),
                            (e.next = 4),
                            g.ZP.fetchCustomerPortalUrl(p)
                          );
                        case 4:
                          (t = e.sent), n.push(t.url), (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(1)),
                            m.m.warning(
                              l.formatMessage(ed.stripeErrorWarning),
                              { hasCloseButton: !0 }
                            );
                        case 11:
                          return (e.prev = 11), d(!1), e.finish(11);
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 8, 11, 14]]
                );
              })
            )),
            function () {
              return e.apply(this, arguments);
            });
        if (a)
          return (0, D.jsx)("div", {
            className: "flex min-h-screen items-center justify-center",
            children: (0, D.jsx)(P.Z, {}),
          });
        if (s || !i) return null;
        var O = null != i.active_until,
          M =
            (null == i ? void 0 : i.seats_in_use) >
            (null == i ? void 0 : i.seats_entitled);
        return (0, D.jsxs)(D.Fragment, {
          children: [
            (0, D.jsxs)(X.i9, {
              children: [
                (0, D.jsx)(X.A4, {
                  children: (0, D.jsx)(y.Z, ea({}, ed.planTitle)),
                }),
                (0, D.jsxs)("div", {
                  children: [
                    (0, D.jsx)(X.i$, {
                      children: O
                        ? r
                          ? (0, D.jsx)(y.Z, ea({}, ed.activeEnterpriseLicense))
                          : (0, D.jsx)(y.Z, ea({}, ed.activeTeamLicense))
                        : (0, D.jsx)(y.Z, ea({}, ed.inactiveLicense)),
                    }),
                    null != i.active_until &&
                      (0, D.jsx)(X.Li, {
                        children: r
                          ? (0, D.jsx)(
                              y.Z,
                              ea(
                                ea({}, ed.licenseExpiry),
                                {},
                                {
                                  values: {
                                    expiryDate: new Date(i.active_until),
                                  },
                                }
                              )
                            )
                          : i.will_renew
                            ? (0, D.jsx)(
                                y.Z,
                                ea(
                                  ea({}, ed.renewalDate),
                                  {},
                                  {
                                    values: {
                                      expiryDate: new Date(i.active_until),
                                    },
                                  }
                                )
                              )
                            : (0, D.jsx)(
                                y.Z,
                                ea(
                                  ea({}, ed.deactivateDate),
                                  {},
                                  {
                                    values: {
                                      expiryDate: new Date(i.active_until),
                                    },
                                  }
                                )
                              ),
                      }),
                    h &&
                      (0, D.jsx)(Z.z, {
                        color: "neutral",
                        className: "mt-4",
                        onClick: w,
                        loading: c,
                        children: (0, D.jsx)(
                          y.Z,
                          ea({}, ed.managePaymentMethodBtn)
                        ),
                      }),
                  ],
                }),
              ],
            }),
            O &&
              (0, D.jsxs)(X.i9, {
                children: [
                  (0, D.jsx)(X.A4, {
                    children: (0, D.jsx)(y.Z, ea({}, ed.seatsTitle)),
                  }),
                  (0, D.jsx)(ec, {}),
                  h &&
                    M &&
                    (0, D.jsx)("span", {
                      className: "text-sm text-token-text-secondary",
                      children: (0, D.jsx)(
                        y.Z,
                        ea({}, ed.teamsAutochargeMessage)
                      ),
                    }),
                ],
              }),
          ],
        });
      }
      function er() {
        var e = (0, I.ZP)().data,
          n = (0, x.ec)(x.F_.isTeamPlan),
          t = (0, j.useState)(!1),
          i = t[0],
          a = t[1];
        if (!n || (!(null != e && e.will_renew) && !i))
          return (0, D.jsx)(D.Fragment, {});
        var s = function () {
          a(!i);
        };
        return (0, D.jsxs)(X.i9, {
          children: [
            (0, D.jsx)(X.A4, {
              children: (0, D.jsx)(y.Z, ea({}, ed.manageSubscription)),
            }),
            (0, D.jsxs)("div", {
              children: [
                (0, D.jsx)(Z.z, {
                  color: "neutral",
                  className: "mt-4",
                  onClick: function () {
                    s();
                  },
                  children: (0, D.jsx)(y.Z, ea({}, ed.cancelSubscriptionBtn)),
                }),
                (0, D.jsx)(S, { isOpen: i, onClose: s }),
              ],
            }),
          ],
        });
      }
      function el(e) {
        var n = e.invoice,
          t =
            (null == n ? void 0 : n.status_transitions.paid_at) != null &&
            new Date(1e3 * n.status_transitions.paid_at),
          i = n && new Date(1e3 * n.due_date),
          a = n && new Date(1e3 * n.created);
        return (0, D.jsxs)(X.vi, {
          className: "items-center",
          children: [
            (0, D.jsxs)("div", {
              className: "flex grow flex-col gap-1",
              children: [
                (0, D.jsx)("span", {
                  children: a
                    ? (0, D.jsx)(
                        y.Z,
                        ea(
                          ea({}, ed.invoiceName),
                          {},
                          { values: { createdDate: a } }
                        )
                      )
                    : (0, D.jsx)(y.Z, ea({}, ed.defaultInvoiceName)),
                }),
                null != n && n.paid && null != t
                  ? (0, D.jsx)("div", {
                      className: "text-xs text-token-text-secondary",
                      children: (0, D.jsx)(
                        y.Z,
                        ea(
                          ea({}, ed.paidInvoice),
                          {},
                          { values: { invoiceDate: t } }
                        )
                      ),
                    })
                  : n &&
                    (0, D.jsx)("div", {
                      className: "text-xs text-green-600",
                      children: (0, D.jsx)(
                        y.Z,
                        ea(
                          ea({}, ed.upcomingInvoice),
                          {},
                          { values: { invoiceDate: i } }
                        )
                      ),
                    }),
              ],
            }),
            (0, D.jsx)("a", {
              href: null == n ? void 0 : n.hosted_invoice_url,
              className: (0, p.default)(
                "mx-auto",
                (null == n ? void 0 : n.hosted_invoice_url) == void 0 &&
                  "cursor-not-allowed opacity-20"
              ),
              target: "_blank",
              rel: "noreferrer",
              children: (0, D.jsx)(h.AlO, {
                className: "icon-sm text-green-600",
              }),
            }),
          ],
        });
      }
      function eo() {
        var e,
          n,
          t,
          i,
          a,
          s,
          r,
          l,
          o = (0, j.useState)({ limit: 5 }),
          c = o[0],
          d = o[1],
          p =
            ((n = (0, x.ec)(function (e) {
              return e.currentWorkspace;
            })),
            (t = (0, x.ec)(x.F_.isEnterprisePlan)),
            (i = null == n ? void 0 : n.id),
            (a =
              null !== (e = null == n ? void 0 : n.organizationId) &&
              void 0 !== e
                ? e
                : void 0),
            (s = t ? { organization_id: a } : { account_id: i }),
            (r = (0, b.Z)()),
            (0, J.a)({
              queryKey: [
                "organization-invoices",
                en(en({}, s), {}, { options: c }),
              ],
              queryFn:
                ((l = (0, u.Z)(
                  f().mark(function e() {
                    return f().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g.ZP.getInvoices(s, c).catch(function (e) {
                                throw (
                                  (m.m.danger(
                                    r.formatMessage(et.invoicesLoadError, {
                                      error: e.message,
                                    })
                                  ),
                                  e)
                                );
                              })
                            );
                          case 2:
                            return e.abrupt("return", e.sent);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                function () {
                  return l.apply(this, arguments);
                }),
              enabled: "account_id" in s || "organization_id" in s,
            })),
          v = p.data,
          w = p.isError,
          Z =
            null != c.startingAfter ||
            (null != c.endingBefore && (null == v ? void 0 : v.has_more)),
          P =
            null != c.endingBefore ||
            ((null == v ? void 0 : v.has_more) && null == c.endingBefore);
        return w || null == v
          ? (0, D.jsxs)(X.i9, {
              children: [
                (0, D.jsx)(X.A4, {
                  children: (0, D.jsx)(y.Z, ea({}, ed.invoicesTitle)),
                }),
                (0, D.jsx)(O.Z, {
                  children: (0, D.jsx)(y.Z, ea({}, ed.noInvoices)),
                }),
              ],
            })
          : (0, D.jsxs)(X.i9, {
              children: [
                (0, D.jsx)(X.A4, {
                  children: (0, D.jsx)(y.Z, ea({}, ed.invoicesTitle)),
                }),
                (0, D.jsx)(X.qQ, {
                  children: v.data.map(function (e) {
                    return (0, D.jsx)(el, { invoice: e }, e.id);
                  }),
                }),
                (0, D.jsxs)("div", {
                  className: "flex",
                  children: [
                    Z &&
                      (0, D.jsx)("button", {
                        onClick: function () {
                          v &&
                            d(function (e) {
                              return ea(
                                ea({}, e),
                                {},
                                {
                                  endingBefore: v.data[0].id,
                                  startingAfter: void 0,
                                }
                              );
                            });
                        },
                        children: (0, D.jsx)(h.YFh, { className: "icon-sm" }),
                      }),
                    (0, D.jsx)("div", { className: "flex-grow" }),
                    P &&
                      (0, D.jsx)("button", {
                        onClick: function () {
                          v &&
                            d(function (e) {
                              return ea(
                                ea({}, e),
                                {},
                                {
                                  startingAfter: v.data[v.data.length - 1].id,
                                  endingBefore: void 0,
                                }
                              );
                            });
                        },
                        children: (0, D.jsx)(h.Tfp, { className: "icon-sm" }),
                      }),
                  ],
                }),
              ],
            });
      }
      function ec() {
        var e = (0, I.ZP)(),
          n = e.data,
          t = e.isLoading;
        return e.isError || !n || t
          ? null
          : (0, D.jsx)(Y, {
              numInUse: n.seats_in_use,
              numAllocated: n.seats_entitled,
            });
      }
      function eu() {
        var e = (0, x.ec)(function (e) {
            return e.currentWorkspace;
          }),
          n = null == e ? void 0 : e.organizationId,
          t = (0, b.Z)();
        return void 0 === n
          ? null
          : (0, D.jsxs)(D.Fragment, {
              children: [
                (0, D.jsx)(o.yG, {
                  title: t.formatMessage(ed.title),
                  subtitle: t.formatMessage(ed.subtitle),
                }),
                (0, D.jsx)(o.hb, {
                  children: (0, D.jsxs)(X.$V, {
                    children: [
                      (0, D.jsx)(es, {}),
                      (0, D.jsx)(eo, {}),
                      (0, D.jsx)(er, {}),
                    ],
                  }),
                }),
              ],
            });
      }
      var ed = (0, w.vU)({
          title: {
            id: "organizationBillingInfo.title.1",
            defaultMessage: "Billing",
          },
          subtitle: {
            id: "organizationBillingInfo.subtitle",
            defaultMessage:
              "Only workspace owners can view and change these settings",
          },
          planTitle: {
            id: "organizationBillingInfo.planTitle",
            defaultMessage: "Plan",
          },
          activeEnterpriseLicense: {
            id: "organizationBillingInfo.activeEnterpriseLicense",
            defaultMessage: "Enterprise License",
          },
          activeTeamLicense: {
            id: "organizationBillingInfo.activeTeamLicense",
            defaultMessage: "Team License",
          },
          inactiveLicense: {
            id: "organizationBillingInfo.inactiveLicense",
            defaultMessage: "Inactive License",
          },
          licenseExpiry: {
            id: "organizationBillingInfo.licenseExpiry",
            defaultMessage: "Active until {expiryDate, date, long}",
          },
          renewalDate: {
            id: "organizationBillingInfo.renewalDate",
            defaultMessage: "Renews on {expiryDate, date, long}",
          },
          deactivateDate: {
            id: "organizationBillingInfo.deactivateDate",
            defaultMessage: "Deactivates on {expiryDate, date, long}",
          },
          seatsTitle: {
            id: "organizationBillingInfo.seatsTitle",
            defaultMessage: "Seats",
          },
          seatsInUse: {
            id: "organizationBillingInfo.seatsInUse",
            defaultMessage: "{numSeats} in use ({numSeatsPct})",
          },
          invoicesTitle: {
            id: "organizationBillingInfo.invoicesTitle",
            defaultMessage: "Invoices",
          },
          invoiceName: {
            id: "organizationBillingInfo.invoiceName",
            defaultMessage: "Invoice: {createdDate, date, long}",
          },
          defaultInvoiceName: {
            id: "organizationBillingInfo.defaultInvoiceName",
            defaultMessage: "Invoice",
          },
          paidInvoice: {
            id: "organizationBillingInfo.paidInvoice",
            defaultMessage: "Paid: {invoiceDate, date, long}",
          },
          upcomingInvoice: {
            id: "organizationBillingInfo.upcomingInvoice",
            defaultMessage: "Due: {invoiceDate, date, long}",
          },
          noInvoices: {
            id: "organizationBillingInfo.noInvoices",
            defaultMessage: "No invoices found",
          },
          manageSubscription: {
            id: "organizationBillingInfo.manageSubscription",
            defaultMessage: "Manage subscription",
          },
          cancelSubscriptionBtn: {
            id: "organizationBillingInfo.cancelSubscriptionBtn",
            defaultMessage: "Cancel subscription",
          },
          managePaymentMethodBtn: {
            id: "organizationBillingInfo.managePaymentMethodBtn",
            defaultMessage: "Manage payment method",
          },
          stripeErrorWarning: {
            id: "organizationBillingInfo.stripeErrorWarning",
            defaultMessage: "Error loading account information",
          },
          teamsAutochargeMessage: {
            id: "organizationBillingInfo.teamsAutochargeMessage",
            defaultMessage:
              "Your additional seats will be included on your next invoice.",
          },
        }),
        ef = !0;
      function em() {
        return (0, D.jsx)(eu, {});
      }
      em.getLayout = function (e) {
        return (0, D.jsx)(o.ZP, {
          mobilePageTitle: "Billing",
          requireAdminPrivileges: !0,
          children: e,
        });
      };
    },
    81942: function (e, n, t) {
      "use strict";
      t.d(n, {
        $V: function () {
          return m;
        },
        A4: function () {
          return g;
        },
        Li: function () {
          return j;
        },
        W8: function () {
          return b;
        },
        i$: function () {
          return x;
        },
        i9: function () {
          return v;
        },
        qQ: function () {
          return p;
        },
        vi: function () {
          return h;
        },
      });
      var i,
        a,
        s,
        r,
        l,
        o,
        c,
        u,
        d = t(90038),
        f = t(21389),
        m = f.Z.div(
          i ||
            (i = (0, d.Z)([
              "text-base text-token-text-primary flex flex-col gap-10 my-10",
            ]))
        ),
        g = f.Z.div(a || (a = (0, d.Z)(["text-xl font-medium"]))),
        x = f.Z.div(s || (s = (0, d.Z)(["text-base font-medium"]))),
        p = f.Z.div(
          r ||
            (r = (0, d.Z)([
              "flex flex-col divide-y divide-token-border-light border-y border-token-border-light",
            ]))
        ),
        v = f.Z.div(
          l ||
            (l = (0, d.Z)([
              "max-w-xl flex flex-col gap-3 w-full m-auto md:m-0",
            ]))
        ),
        j = f.Z.div(o || (o = (0, d.Z)(["text-sm"]))),
        h = f.Z.div(c || (c = (0, d.Z)(["flex justify-between py-4 gap-4"]))),
        b = f.Z.hr(u || (u = (0, d.Z)(["max-w-xl border-token-border-light"])));
    },
    6406: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/billing",
        function () {
          return t(73643);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [5017, 9774, 2888, 179], function () {
      return e((e.s = 6406));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=billing-3460394477b79220.js.map
