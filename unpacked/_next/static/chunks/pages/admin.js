(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6964],
  {
    78753: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          __N_SSP: function () {
            return em;
          },
          default: function () {
            return ef;
          },
        });
      var n,
        s,
        a,
        i = t(36112),
        c = t(35017),
        o = t(90038),
        l = t(73797),
        u = t(7144),
        d = t(18008),
        m = t(99715),
        f = t(18399),
        p = t(82920),
        g = t(19841),
        v = t(61888),
        j = t(29124),
        b = t.n(j),
        h = t(10721),
        x = t(70079),
        y = t(1454),
        k = t(32004),
        w = t(70671),
        O = t(94968),
        I = t(21389),
        M = t(91559),
        P = t(73659),
        Z = t(45634),
        R = t(34408),
        q = t(52467),
        C = t(50134),
        N = t(4399),
        E = t.n(N),
        S = t(45754),
        U = t(61236),
        D = t(82473),
        _ = t(25494),
        W = t(4748);
      function T(e) {
        var r = (0, w.Z)(),
          t = (0, D.NL)();
        return (0, _.D)({
          mutationFn: function (t) {
            var n = t.inviteId,
              s = t.role,
              a = t.acceptRequest;
            return S.ZP.patchWorkspaceInvite(e, n, {
              role: s,
              acceptRequest: a,
            }).catch(function (e) {
              W.m.danger(
                r.formatMessage(H.updateInviteError, { error: e.message })
              );
            });
          },
          onSuccess: function () {
            t.invalidateQueries({ queryKey: ["workspace", e, "invites"] }),
              t.invalidateQueries({
                queryKey: ["workspace", e, "invites", "requests"],
              }),
              t.invalidateQueries({ queryKey: ["workspace", e] });
          },
        });
      }
      function A(e) {
        var r = (0, w.Z)(),
          t = (0, D.NL)();
        return (0, _.D)({
          mutationFn: function (t) {
            var n = t.email;
            return S.ZP.deleteWorkspaceInvite(e, n).catch(function (e) {
              W.m.danger(
                r.formatMessage(H.deleteInviteError, {
                  email: n,
                  error: e.message,
                })
              );
            });
          },
          onSuccess: function () {
            t.invalidateQueries({ queryKey: ["workspace", e, "invites"] }),
              t.invalidateQueries({
                queryKey: ["workspace", e, "invites", "requests"],
              });
          },
        });
      }
      var H = (0, O.vU)({
          updateInviteError: {
            id: "WorkspaceInvites.updateInviteError",
            defaultMessage: "Unable to update invite from workspace: {error}",
          },
          deleteInviteError: {
            id: "WorkspaceInvites.deleteInviteError",
            defaultMessage:
              "Unable to remove user ({email}) from workspace: {error}",
          },
          resendInviteSuccess: {
            id: "WorkspaceInvites.resendInviteSuccess",
            defaultMessage: "Sent a new invite to {email}",
          },
          resendInviteError: {
            id: "WorkspaceInvites.resendInviteError",
            defaultMessage:
              "Unable to resend invite to ({email}) from workspace: {error}",
          },
        }),
        K = t(24020),
        B = t(218),
        F = t(35250);
      function z(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function Q(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? z(Object(t), !0).forEach(function (r) {
                (0, i.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : z(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r)
                  );
                });
        }
        return e;
      }
      function V(e) {
        var r,
          t,
          n = e.workspaceId,
          s = e.filterInputValue,
          a = (0, x.useState)(0),
          i = a[0],
          c = a[1],
          o = (0, B.Gk)(n),
          l = (0, B.bE)(n),
          u = o || l,
          d = ((r = 25 * i),
          (0, U.a)({
            queryKey: ["workspace", n, "invites", r, s],
            queryFn:
              ((t = (0, C.Z)(
                E().mark(function e() {
                  return E().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), S.ZP.getWorkspaceInvites(n, r, 25, s)
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
                return t.apply(this, arguments);
              }),
          })).data;
        if (void 0 === d) return (0, F.jsx)(K.bq, {});
        var m = d.items,
          f = Math.ceil(d.total / 25);
        return (
          i >= f && 0 !== f && c(Math.max(f - 1, 0)),
          (0, F.jsxs)("div", {
            children: [
              (0, F.jsxs)(R.Z.Root, {
                fixed: !0,
                size: "normal",
                children: [
                  (0, F.jsxs)(R.Z.Header, {
                    children: [
                      (0, F.jsx)(R.Z.HeaderCell, {
                        className: "dark:bg-gray-800",
                        children: (0, F.jsx)(k.Z, Q({}, J.email)),
                      }),
                      (0, F.jsx)(R.Z.HeaderCell, {
                        className: "w-28 dark:bg-gray-800",
                        children: (0, F.jsx)("span", {
                          className: u ? "pl-3" : "",
                          children: (0, F.jsx)(k.Z, Q({}, J.role)),
                        }),
                      }),
                      u &&
                        (0, F.jsx)(R.Z.HeaderCell, {
                          className: "w-16 dark:bg-gray-800",
                        }),
                    ],
                  }),
                  (0, F.jsxs)(R.Z.Body, {
                    children: [
                      m.map(function (e) {
                        return (0, F.jsx)(
                          L,
                          {
                            workspaceId: n,
                            invite: e,
                            isCurrentUserOwner: o,
                            currentUserHasAdminRights: u,
                          },
                          e.id
                        );
                      }),
                      0 === m.length &&
                        (0, F.jsx)(R.Z.Row, {
                          children: (0, F.jsx)(R.Z.Cell, {
                            children: (0, F.jsx)("div", {
                              className: "text-token-text-tertiary",
                              children: (0, F.jsx)(k.Z, Q({}, J.noResults)),
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              f > 1 &&
                (0, F.jsx)("div", {
                  className: "mt-2 flex justify-center",
                  children: (0, F.jsx)(q.t, {
                    currentPage: i,
                    onChangeIndex: c,
                    length: f,
                  }),
                }),
            ],
          })
        );
      }
      function L(e) {
        var r,
          t,
          n = e.workspaceId,
          s = e.invite,
          a = e.isCurrentUserOwner,
          i = e.currentUserHasAdminRights,
          c = (0, B.Ap)(),
          o = T(n),
          l = A(n),
          u =
            ((r = (0, w.Z)()),
            (t = (0, D.NL)()),
            (0, _.D)({
              mutationFn: function (e) {
                var t = e.role,
                  s = e.email;
                return S.ZP.addWorkspaceUsers(n, [s], t, !0)
                  .then(function (e) {
                    var t = e.account_invites,
                      n = e.errored_emails;
                    if (n.length > 0) throw Error(n[0].error);
                    t.length > 0 &&
                      W.m.success(
                        r.formatMessage(H.resendInviteSuccess, { email: s })
                      );
                  })
                  .catch(function (e) {
                    W.m.danger(
                      r.formatMessage(H.resendInviteError, {
                        email: s,
                        error: e.message,
                      })
                    );
                  });
              },
              onSuccess: function () {
                t.invalidateQueries({ queryKey: ["workspace", n, "invites"] }),
                  t.invalidateQueries({
                    queryKey: ["workspace", n, "invites", "requests"],
                  });
              },
            }));
        return (0, F.jsxs)(R.Z.Row, {
          disabled: o.isPending || l.isPending || l.isSuccess || u.isPending,
          children: [
            (0, F.jsx)(R.Z.Cell, { children: s.email_address }),
            (0, F.jsx)(R.Z.Cell, {
              children: a
                ? (0, F.jsx)(K.mJ, {
                    currentRole: s.role,
                    onUpdateUserRole: function (e) {
                      o.mutate({ inviteId: s.id, role: e });
                    },
                  })
                : c[s.role],
            }),
            i &&
              (0, F.jsx)(F.Fragment, {
                children: (0, F.jsx)(R.Z.Cell, {
                  children: (0, F.jsx)(G, {
                    onDeleteUser: function () {
                      l.mutate({ email: s.email_address });
                    },
                    onResendInvite: function () {
                      u.mutate({ email: s.email_address, role: s.role });
                    },
                  }),
                }),
              }),
          ],
        });
      }
      function G(e) {
        var r = e.onDeleteUser,
          t = e.onResendInvite;
        return (0, F.jsxs)(l.Z.Root, {
          children: [
            (0, F.jsx)(l.Z.Trigger, {
              children: (0, F.jsx)(y.K9M, { className: "icon-sm" }),
            }),
            (0, F.jsx)(l.Z.Portal, {
              children: (0, F.jsxs)(l.Z.Content, {
                children: [
                  (0, F.jsx)(l.Z.Item, {
                    onClick: t,
                    children: (0, F.jsx)(k.Z, Q({}, J.resendInvite)),
                  }),
                  (0, F.jsx)(l.Z.Item, {
                    onClick: r,
                    children: (0, F.jsx)(k.Z, Q({}, J.revokeInvite)),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var J = (0, O.vU)({
        email: { id: "InviteManager.email", defaultMessage: "Email" },
        role: { id: "InviteManager.role", defaultMessage: "Role" },
        resendInvite: {
          id: "InviteManager.resendInvite",
          defaultMessage: "Resend invite",
        },
        revokeInvite: {
          id: "InviteManager.revokeInvite",
          defaultMessage: "Revoke invite",
        },
        noResults: {
          id: "InviteManager.noResults",
          defaultMessage: "No results",
        },
      });
      function X(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function Y(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? X(Object(t), !0).forEach(function (r) {
                (0, i.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : X(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r)
                  );
                });
        }
        return e;
      }
      function $(e) {
        var r,
          t,
          n = e.workspaceId,
          s = e.filterInputValue,
          a = (0, x.useState)(0),
          i = a[0],
          c = a[1],
          o = ((r = 25 * i),
          (0, U.a)({
            queryKey: ["workspace", n, "invites", "requests", r, s],
            queryFn:
              ((t = (0, C.Z)(
                E().mark(function e() {
                  return E().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            S.ZP.getWorkspaceInviteRequests(n, r, 25, s)
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
                return t.apply(this, arguments);
              }),
          })).data,
          l = (0, B.Gk)(n),
          u = (0, B.bE)(n),
          d = (0, w.Z)(),
          m = l || u;
        if (void 0 === o) return (0, F.jsx)(K.bq, {});
        var f = o.items,
          p = Math.ceil(o.total / 25);
        return (
          i >= p && 0 !== p && c(Math.max(p - 1, 0)),
          (0, F.jsxs)("div", {
            children: [
              (0, F.jsxs)(R.Z.Root, {
                fixed: !0,
                size: "normal",
                children: [
                  (0, F.jsxs)(R.Z.Header, {
                    children: [
                      (0, F.jsx)(R.Z.HeaderCell, {
                        className: "dark:bg-gray-800",
                        children: (0, F.jsx)(k.Z, Y({}, er.email)),
                      }),
                      (0, F.jsx)(R.Z.HeaderCell, {
                        className: "w-28 dark:bg-gray-800",
                        children: (0, F.jsx)("span", {
                          className: m ? "pl-3" : "",
                          children: (0, F.jsx)(k.Z, Y({}, er.role)),
                        }),
                      }),
                      m &&
                        (0, F.jsx)(R.Z.HeaderCell, {
                          className: "w-40 dark:bg-gray-800",
                          children: d.formatMessage(er.actions),
                        }),
                    ],
                  }),
                  (0, F.jsxs)(R.Z.Body, {
                    children: [
                      f.map(function (e) {
                        return (0, F.jsx)(
                          ee,
                          {
                            workspaceId: n,
                            invite: e,
                            isCurrentUserOwner: l,
                            currentUserHasAdminRights: m,
                          },
                          e.id
                        );
                      }),
                      0 === f.length &&
                        (0, F.jsx)(R.Z.Row, {
                          children: (0, F.jsx)(R.Z.Cell, {
                            children: (0, F.jsx)("div", {
                              className: "text-token-text-tertiary",
                              children: (0, F.jsx)(k.Z, Y({}, er.noResults)),
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              p > 1 &&
                (0, F.jsx)("div", {
                  className: "mt-2 flex justify-center",
                  children: (0, F.jsx)(q.t, {
                    currentPage: i,
                    onChangeIndex: c,
                    length: p,
                  }),
                }),
            ],
          })
        );
      }
      function ee(e) {
        var r = e.workspaceId,
          t = e.invite,
          n = e.isCurrentUserOwner,
          s = e.currentUserHasAdminRights,
          a = (0, B.Ap)(),
          i = T(r),
          c = A(r),
          o = (0, w.Z)();
        return (0, F.jsxs)(R.Z.Row, {
          disabled: i.isPending || c.isPending || c.isPending,
          children: [
            (0, F.jsx)(R.Z.Cell, { children: t.email_address }),
            (0, F.jsx)(R.Z.Cell, {
              children: n
                ? (0, F.jsx)(K.mJ, {
                    currentRole: t.role,
                    onUpdateUserRole: function (e) {
                      i.mutate({ inviteId: t.id, role: e });
                    },
                  })
                : a[t.role],
            }),
            s &&
              (0, F.jsx)(F.Fragment, {
                children: (0, F.jsx)(R.Z.Cell, {
                  children: (0, F.jsxs)("div", {
                    className: "flex gap-2",
                    children: [
                      (0, F.jsx)(M.z, {
                        onClick: function () {
                          return i.mutate({
                            inviteId: t.id,
                            acceptRequest: !0,
                          });
                        },
                        children: o.formatMessage(er.accept),
                      }),
                      (0, F.jsx)(M.z, {
                        color: "neutral",
                        onClick: function () {
                          return c.mutate({ email: t.email_address });
                        },
                        children: o.formatMessage(er.reject),
                      }),
                    ],
                  }),
                }),
              }),
          ],
        });
      }
      var er = (0, O.vU)({
        email: { id: "RequestInviteManager.email", defaultMessage: "Email" },
        role: { id: "RequestInviteManager.role", defaultMessage: "Role" },
        actions: {
          id: "RequestInviteManager.actions",
          defaultMessage: "Actions",
        },
        accept: { id: "RequestInviteManager.accept", defaultMessage: "Accept" },
        reject: { id: "RequestInviteManager.reject", defaultMessage: "Reject" },
        noResults: {
          id: "RequestInviteManager.noResults",
          defaultMessage: "No results",
        },
      });
      function et(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function en(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? et(Object(t), !0).forEach(function (r) {
                (0, i.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : et(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r)
                  );
                });
        }
        return e;
      }
      function es(e) {
        var r = e.tab;
        switch (r) {
          case a.Members:
            return (0, F.jsx)(k.Z, en({}, eu.allMembers));
          case a.Invites:
            return (0, F.jsx)(k.Z, en({}, eu.pendingInvites));
          case a.Requests:
            return (0, F.jsx)(k.Z, en({}, eu.pendingRequests));
          default:
            (0, p.vE)(r);
        }
      }
      function ea(e) {
        var r = e.tab,
          t = e.filterInputValue,
          n = e.workspaceId;
        switch (r) {
          case a.Members:
            return (0, F.jsx)(K.ZP, { workspaceId: n, filterInputValue: t });
          case a.Invites:
            return (0, F.jsx)(V, { workspaceId: n, filterInputValue: t });
          case a.Requests:
            return (0, F.jsx)($, { workspaceId: n, filterInputValue: t });
          default:
            (0, p.vE)(r);
        }
      }
      ((n = a || (a = {})).Members = "members"),
        (n.Invites = "invites"),
        (n.Requests = "requests");
      var ei = (0, f.b)(a);
      function ec(e) {
        var r,
          t = e.currentWorkspaceId,
          n = (0, w.Z)(),
          s = (0, u.t)(),
          i = null !== (r = (0, K.p5)(t)) && void 0 !== r ? r : "?",
          o = (0, B.qH)(s),
          f = null == s ? void 0 : s.isTeam(),
          p = (0, h.useRouter)(),
          g =
            "string" == typeof p.query.tab && ei(p.query.tab)
              ? p.query.tab
              : a.Members,
          j = (0, x.useState)(""),
          O = j[0],
          I = j[1],
          R = (0, x.useState)(""),
          q = R[0],
          C = R[1];
        (0, x.useEffect)(
          function () {
            C("");
          },
          [g]
        );
        var N = (0, x.useCallback)(
            (0, v.debounce)(function (e) {
              C(e);
            }, 250),
            []
          ),
          E = (0, Z.Wv)();
        if (!s) return null;
        var S = s.isAdminOfAccount(),
          U = s.isOwnerOfAccount(),
          D =
            f || !E
              ? [a.Members, a.Invites]
              : [a.Members, a.Invites, a.Requests];
        return (0, F.jsxs)(F.Fragment, {
          children: [
            (0, F.jsx)(b(), {
              children: (0, F.jsx)("title", {
                children: n.formatMessage(eu.adminBrowserPageTitle),
              }),
            }),
            (0, F.jsx)(c.yG, {
              title: n.formatMessage(eu.adminPageTitle),
              subtitle: (0, F.jsx)(
                k.Z,
                en(
                  { values: { totalMembers: i, planName: o } },
                  eu.totalMembers
                )
              ),
            }),
            (0, F.jsxs)(c.hb, {
              children: [
                (0, F.jsxs)(el, {
                  children: [
                    (0, F.jsx)("div", {
                      className: "mb-6 flex gap-2",
                      children: D.map(function (e) {
                        return (0, F.jsx)(
                          eo,
                          {
                            onClick: function () {
                              p.push(
                                null != e ? "/admin?tab=".concat(e) : "/admin"
                              );
                            },
                            isSelected: g === e,
                            children: (0, F.jsx)(es, { tab: e }),
                          },
                          e
                        );
                      }),
                    }),
                    (0, F.jsxs)("div", {
                      className: "flex gap-2",
                      children: [
                        (0, F.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, F.jsx)(y.jRj, {
                              className:
                                "icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary",
                            }),
                            (0, F.jsx)("input", {
                              type: "text",
                              value: O,
                              onChange: function (e) {
                                I(e.target.value), N(e.target.value);
                              },
                              placeholder: n.formatMessage(eu.search),
                              className:
                                "w-48 rounded-lg border border-gray-200 pl-8 placeholder:text-token-text-tertiary dark:border-gray-600 dark:bg-gray-700",
                            }),
                          ],
                        }),
                        (S || U || f) &&
                          (0, F.jsxs)(M.z, {
                            onClick: function () {
                              d.vm.openModal(d.B.InviteUsersToWorkspace);
                            },
                            children: [
                              (0, F.jsx)(y.OvN, { className: "icon-sm" }),
                              (0, F.jsx)(k.Z, en({}, eu.inviteMemberButton)),
                            ],
                          }),
                        f
                          ? (0, F.jsxs)(l.Z.Root, {
                              children: [
                                (0, F.jsx)(m.xz, {
                                  asChild: !0,
                                  children: (0, F.jsx)(M.z, {
                                    color: "neutral",
                                    children: (0, F.jsx)(y.K9M, {
                                      className: "icon-sm",
                                    }),
                                  }),
                                }),
                                (0, F.jsx)(l.Z.Portal, {
                                  children: (0, F.jsx)(l.Z.Content, {
                                    children: (0, F.jsx)(l.Z.Item, {
                                      onClick: function () {
                                        s && d.vm.setLeaveWorkspaceData(s);
                                      },
                                      children: (0, F.jsx)(
                                        k.Z,
                                        en({}, eu.leaveWorkspace)
                                      ),
                                    }),
                                  }),
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
                (0, F.jsx)(ea, { workspaceId: t, tab: g, filterInputValue: q }),
              ],
            }),
            null != s ? (0, F.jsx)(P.Z, { workspace: s }) : null,
          ],
        });
      }
      function eo(e) {
        var r = e.children,
          t = e.isSelected,
          n = e.onClick;
        return (0, F.jsx)(M.z, {
          color: "none",
          className: (0, g.default)(
            t
              ? "bg-gray-100 dark:bg-gray-600"
              : "hover:bg-gray-50 hover:dark:bg-gray-700"
          ),
          onClick: n,
          children: r,
        });
      }
      var el = I.Z.div(
          s ||
            (s = (0, o.Z)([
              "mb-4 py-6 flex flex-col gap-4 lg:flex-row md:items-start lg:justify-between",
            ]))
        ),
        eu = (0, O.vU)({
          adminBrowserPageTitle: {
            id: "adminPage.adminBrowserPageTitle",
            defaultMessage: "ChatGPT - Member admin",
          },
          adminPageTitle: {
            id: "adminPage.adminPageTitle.0",
            defaultMessage: "Members",
          },
          workspaceNotFound: {
            id: "adminPage.workspaceNotFound",
            defaultMessage: "Workspace not found",
          },
          totalMembers: {
            id: "adminPage.totalMembers",
            defaultMessage:
              "{planName} \xb7 {totalMembers} {totalMembers, plural, one {member} other {members}}",
          },
          backToChat: {
            id: "adminPage.backToChat",
            defaultMessage: "Back to chat",
          },
          allMembers: {
            id: "adminPage.allMembers",
            defaultMessage: "All members",
          },
          pendingInvites: {
            id: "adminPage.pendingInvites",
            defaultMessage: "Pending invites",
          },
          pendingRequests: {
            id: "adminPage.pendingRequests",
            defaultMessage: "Pending requests",
          },
          analytics: { id: "adminPage.analytics", defaultMessage: "Analytics" },
          inviteMemberButton: {
            id: "adminPage.inviteMemberButton",
            defaultMessage: "Invite member",
          },
          leaveWorkspace: {
            id: "adminPage.leaveWorkspace",
            defaultMessage: "Leave workspace",
          },
          search: { id: "adminPage.search", defaultMessage: "Search" },
        });
      function ed(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      var em = !0;
      function ef(e) {
        return (0, F.jsx)(
          ec,
          (function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = null != arguments[r] ? arguments[r] : {};
              r % 2
                ? ed(Object(t), !0).forEach(function (r) {
                    (0, i.Z)(e, r, t[r]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(t)
                    )
                  : ed(Object(t)).forEach(function (r) {
                      Object.defineProperty(
                        e,
                        r,
                        Object.getOwnPropertyDescriptor(t, r)
                      );
                    });
            }
            return e;
          })({}, e)
        );
      }
      ef.getLayout = function (e) {
        return (0, F.jsx)(c.ZP, { mobilePageTitle: "Members", children: e });
      };
    },
    12102: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin",
        function () {
          return t(78753);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [5017, 9774, 2888, 179], function () {
      return e((e.s = 12102));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=admin-e19ac01dadc476e1.js.map
