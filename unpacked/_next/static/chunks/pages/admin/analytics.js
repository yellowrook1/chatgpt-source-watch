(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [867],
  {
    55687: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSP: function () {
            return F;
          },
          default: function () {
            return I;
          },
        });
      var r,
        a,
        n,
        i,
        l = s(36112),
        o = s(35017),
        c = s(3125),
        u = s(90038),
        d = s(50134),
        g = s(4399),
        p = s.n(g),
        y = s(45754),
        f = s(61236),
        m = s(65998),
        b = s(77997),
        x = s(29124),
        h = s.n(x),
        j = s(70079),
        v = s(25771),
        k = s(70671),
        w = s(32004),
        O = s(94968),
        P = s(21389),
        L = s(35250);
      function _(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            s.push.apply(s, r);
        }
        return s;
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(s), !0).forEach(function (t) {
                (0, l.Z)(e, t, s[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
              : _(Object(s)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(s, t)
                  );
                });
        }
        return e;
      }
      function Z(e) {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = (0, d.Z)(
          p().mark(function e(t) {
            var s, r;
            return p().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (s = (0, c.Z)(t.queryKey, 2))[0],
                      (r = s[1].workspaceId),
                      e.abrupt("return", y.ZP.getWorkspaceAnalytics(r))
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function C(e) {
        var t = e.data,
          s = e.label,
          r = e.getWeekValue,
          a = (0, k.Z)(),
          n = (0, b.F)().theme,
          i = (0, j.useMemo)(
            function () {
              var e;
              return {
                animation: !1,
                scales: {
                  y: {
                    position: "right",
                    beginAtZero: !0,
                    ticks: {
                      stepSize: 3,
                      color: (e = getComputedStyle(
                        document.body
                      )).getPropertyValue("--text-tertiary"),
                      padding: 12,
                    },
                    grid: {
                      tickLength: 0,
                      color: e.getPropertyValue("--border-medium"),
                    },
                    border: { display: !1 },
                  },
                  x: {
                    grid: { display: !1 },
                    ticks: {
                      color: e.getPropertyValue("--text-tertiary"),
                      padding: 20,
                    },
                  },
                },
                plugins: {
                  legend: !1,
                  tooltip: {
                    backgroundColor: e.getPropertyValue("--surface-primary"),
                    titleColor: e.getPropertyValue("--text-primary"),
                    bodyColor: e.getPropertyValue("--text-secondary"),
                    displayColors: !1,
                    padding: { top: 8, left: 8, right: 8, bottom: 8 },
                  },
                },
              };
            },
            [n]
          ),
          l = (0, j.useMemo)(
            function () {
              return getComputedStyle(document.body).getPropertyValue(
                "--text-secondary"
              );
            },
            [n]
          ),
          o = {
            labels: t.weekly_data.map(function (e) {
              return a.formatDate(e.week, { month: "numeric", day: "numeric" });
            }),
            datasets: [
              {
                label: s,
                data: t.weekly_data.map(r),
                borderWidth: 0,
                backgroundColor: l,
                barThickness: 20,
              },
            ],
          };
        return (0, L.jsx)("div", {
          className:
            "flex h-full w-full items-center justify-center bg-token-surface-secondary p-4",
          children: (0, L.jsx)(v.$Q, { options: i, data: o, height: 192 }),
        });
      }
      function D(e) {
        var t = e.label,
          s = e.value;
        return (0, L.jsxs)("div", {
          className: "w-1/3 rounded bg-token-main-surface-secondary px-4 py-2",
          children: [
            (0, L.jsx)("label", {
              className: "text-sm text-token-text-secondary",
              children: t,
            }),
            (0, L.jsx)("div", {
              className: "text-xl font-medium text-token-text-primary",
              children: s,
            }),
          ],
        });
      }
      function N(e) {
        var t = e.data,
          s = (0, k.Z)(),
          r = t.weekly_data[t.weekly_data.length - 2];
        return (0, L.jsxs)("div", {
          className: "mt-10",
          children: [
            (0, L.jsx)("div", {
              className: "mb-2 font-medium text-token-text-primary",
              children: (0, L.jsx)(w.Z, M({}, E.totals)),
            }),
            (0, L.jsxs)("div", {
              className: "mb-16 flex gap-4",
              children: [
                (0, L.jsx)(D, {
                  label: s.formatMessage(E.usersLabel),
                  value: t.total_users,
                }),
                (0, L.jsx)(D, {
                  label: s.formatMessage(E.conversationsLabel),
                  value: t.total_conversations,
                }),
                (0, L.jsx)(D, {
                  label: s.formatMessage(E.messagesLabel),
                  value: t.total_messages,
                }),
              ],
            }),
            (0, L.jsxs)(W, {
              children: [
                (0, L.jsx)("div", {
                  className: "flex flex-col justify-between p-4",
                  children: (0, L.jsxs)("div", {
                    children: [
                      (0, L.jsx)(U, {
                        children: (0, L.jsx)(w.Z, M({}, E.usageTitle)),
                      }),
                      null != r &&
                        (0, L.jsxs)("div", {
                          children: [
                            (0, L.jsx)(T, { children: r.message_count }),
                            (0, L.jsx)(S, {
                              children: (0, L.jsx)(
                                w.Z,
                                M({}, E.messagesLastWeek)
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
                (0, L.jsx)("div", {
                  children: (0, L.jsx)(C, {
                    data: t,
                    label: s.formatMessage(E.messagesChartLabel),
                    getWeekValue: function (e) {
                      return e.message_count;
                    },
                  }),
                }),
              ],
            }),
            (0, L.jsxs)(W, {
              children: [
                (0, L.jsx)("div", {
                  children: (0, L.jsx)(C, {
                    data: t,
                    label: s.formatMessage(E.activeUsersChartLabel),
                    getWeekValue: function (e) {
                      return e.active_users_count;
                    },
                  }),
                }),
                (0, L.jsx)("div", {
                  className: "flex grow flex-col justify-between p-4",
                  children: (0, L.jsxs)("div", {
                    children: [
                      (0, L.jsx)(U, {
                        children: (0, L.jsx)(w.Z, M({}, E.weeklyUsersTitle)),
                      }),
                      null != r &&
                        (0, L.jsxs)("div", {
                          children: [
                            (0, L.jsx)(T, { children: r.active_users_count }),
                            (0, L.jsx)(S, {
                              children: (0, L.jsx)(
                                w.Z,
                                M({}, E.activeUsersLastWeek)
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      m.kL.register(m.uw, m.f$, m.od, m.ZL, m.Dx, m.u, m.De);
      var W = P.Z.div(
          r ||
            (r = (0, u.Z)([
              "mb-12 grid grid-cols-1 rounded-lg overflow-hidden border border-token-border-light sm:grid-cols-2",
            ]))
        ),
        U = P.Z.div(a || (a = (0, u.Z)(["font-medium"]))),
        T = P.Z.div(n || (n = (0, u.Z)(["font-medium text-3xl"]))),
        S = P.Z.div(i || (i = (0, u.Z)(["text-sm text-token-text-tertiary"])));
      function V(e) {
        var t = e.currentWorkspaceId,
          s = (0, k.Z)(),
          r = (0, f.a)({
            queryKey: ["workspace-analytics", { workspaceId: t }],
            queryFn: Z,
          }),
          a = r.data,
          n = r.isLoading;
        return (0, L.jsxs)(L.Fragment, {
          children: [
            (0, L.jsx)(h(), {
              children: (0, L.jsx)("title", {
                children: s.formatMessage(E.title),
              }),
            }),
            (0, L.jsx)(o.yG, {
              title: s.formatMessage(E.title),
              subtitle: s.formatMessage(E.pageDescription),
            }),
            (0, L.jsx)(o.hb, {
              showSpinner: n,
              children: void 0 !== a ? (0, L.jsx)(N, { data: a }) : null,
            }),
          ],
        });
      }
      var E = (0, O.vU)({
        title: {
          id: "workspaceAnalytics.title",
          defaultMessage: "Workspace Analytics",
        },
        pageDescription: {
          id: "workspaceAnalytics.understand",
          defaultMessage: "Understand how your workspace is using ChatGPT",
        },
        totals: {
          id: "workspaceAnalytics.totals",
          defaultMessage: "Totals over last 30 days",
        },
        usersLabel: {
          id: "workspaceAnalytics.usersLabel",
          defaultMessage: "Users",
        },
        conversationsLabel: {
          id: "workspaceAnalytics.conversationsLabel",
          defaultMessage: "Conversations",
        },
        messagesLabel: {
          id: "workspaceAnalytics.messagesLabel",
          defaultMessage: "Messages",
        },
        usageTitle: {
          id: "workspaceAnalytics.usageTitle",
          defaultMessage: "Usage",
        },
        messagesLastWeek: {
          id: "workspaceAnalytics.messagesLastWeek",
          defaultMessage: "Messages processed last week",
        },
        messagesLast30Days: {
          id: "workspaceAnalytics.messagesLast30Days",
          defaultMessage:
            "{count, plural, =0 {No messages} one {# message} other {# messages}} processed over last 30 days",
        },
        messagesChartLabel: {
          id: "workspaceAnalytics.messagesChartLabel",
          defaultMessage: "Messages",
        },
        weeklyUsersTitle: {
          id: "workspaceAnalytics.weeklyUsersTitle",
          defaultMessage: "Weekly users",
        },
        activeUsersChartLabel: {
          id: "workspaceAnalytics.activeUsersChartLabel",
          defaultMessage: "Active users",
        },
        activeUsersLastWeek: {
          id: "workspaceAnalytics.activeUsersLastWeek",
          defaultMessage: "Active users last week",
        },
        usersLast30Days: {
          id: "workspaceAnalytics.usersLast30Days",
          defaultMessage:
            "{count, plural, =0 {No active users} one {# active user} other {# active user}} over last 30 days",
        },
      });
      function q(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            s.push.apply(s, r);
        }
        return s;
      }
      var F = !0;
      function I(e) {
        return (0, L.jsx)(
          V,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var s = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? q(Object(s), !0).forEach(function (t) {
                    (0, l.Z)(e, t, s[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(s)
                    )
                  : q(Object(s)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(s, t)
                      );
                    });
            }
            return e;
          })({}, e)
        );
      }
      I.getLayout = function (e) {
        return (0, L.jsx)(o.ZP, {
          mobilePageTitle: "Analytics",
          requireAdminPrivileges: !0,
          children: e,
        });
      };
    },
    35697: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/analytics",
        function () {
          return s(55687);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [6835, 7549, 5017, 9774, 2888, 179], function () {
      return e((e.s = 35697));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=analytics-9b1758696d2460a5.js.map
