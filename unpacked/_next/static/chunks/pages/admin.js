(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [964],
  {
    17149: function (e, n, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin",
        function () {
          return r(88574);
        },
      ]);
    },
    88574: function (e, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          __N_SSP: function () {
            return ec;
          },
          default: function () {
            return eu;
          },
        });
      var a = r(39324),
        t = r(35250),
        s = r(4337),
        o = r(16266),
        i = r(5437),
        l = r.n(i),
        d = r(68555),
        c = r(70079),
        u = r(1454),
        m = r(75908),
        f = r(35290),
        x = r(3001),
        g = r(34303),
        h = r(11626),
        p = r(38317),
        v = r(94860),
        M = r(19265),
        j = r(62059),
        b = r(21722),
        Z = r(71209),
        k = r(22830),
        U = r(39889),
        C = r(24396),
        _ = r(13451),
        N = r(35448),
        P = r(19841),
        T = r(76150),
        w = r(81292),
        R = r(32787),
        D = r(32402),
        I = r(24274),
        y = r(70216),
        A = r(68789),
        S = r(62440),
        B = {
          Root: A.fC,
          Trigger: function (e) {
            return (0, t.jsx)(S.J7, (0, a._)({ $as: A.xz }, e));
          },
          Portal: A.Uv,
          Content: function (e) {
            return (0, t.jsx)(
              S.ay,
              (0, a._)({ $as: A.VY, sideOffset: 4, align: "start" }, e)
            );
          },
          Item: c.forwardRef(function (e, n) {
            var r = e.children,
              s = e.onSelect,
              o = (0, y._)(e, ["children", "onSelect"]);
            return (0,
            t.jsx)(S.mS, (0, Z._)((0, a._)({ $as: A.ck, ref: n, onSelect: s }, o), { children: r }));
          }),
        },
        E = r(59114),
        F = r(48727),
        H = r(25422),
        J = r(25345),
        W = r(85449),
        q = r(97688),
        O = (0, w.ZP)(function () {
          return { confirmModalUserData: null };
        }),
        V = {
          openModalForUser: function (e) {
            O.setState({ confirmModalUserData: e });
          },
          closeModal: function () {
            O.setState({ confirmModalUserData: null });
          },
        };
      function K(e) {
        var n,
          r,
          s,
          o,
          i = e.workspaceId,
          l = (0, k._)((0, c.useState)(0), 2),
          d = l[0],
          u = l[1],
          m = z(i, d).data,
          x = (0, R.kP)().session,
          g =
            null == x
              ? void 0
              : null === (o = x.user) || void 0 === o
              ? void 0
              : o.id,
          p = Math.ceil(G(i) / Y),
          v = (0, h.bE)(i),
          M =
            ((n = (0, R.kP)().session),
            (0, _.D)({
              mutationFn: function (e) {
                var r = e.userId,
                  a = e.workspaceId,
                  t = e.value;
                return I.ZP.updateWorkspaceUserRole(
                  n.accessToken,
                  a,
                  r,
                  t
                ).catch(function (e) {
                  q.m.danger(
                    "Unable to update user ("
                      .concat(r, ") role: ")
                      .concat(e.message)
                  );
                });
              },
            })),
          j =
            ((r = (0, R.kP)().session),
            (s = (0, N.NL)()),
            (0, _.D)({
              mutationFn: function (e) {
                var n = e.userId,
                  a = e.workspaceId;
                return I.ZP.removeWorkspaceUser(r.accessToken, a, n).catch(
                  function (e) {
                    q.m.danger(
                      "Unable to remove user ("
                        .concat(n, ") from workspace: ")
                        .concat(e.message)
                    );
                  }
                );
              },
              onSuccess: function () {
                s.invalidateQueries({ queryKey: ["workspace", i] });
              },
            })),
          b = (0, c.useCallback)(function (e) {
            V.openModalForUser(e);
          }, []),
          Z = (0, c.useCallback)(
            function () {
              var e,
                n =
                  null === (e = O.getState().confirmModalUserData) ||
                  void 0 === e
                    ? void 0
                    : e.id;
              void 0 !== n && j.mutate({ userId: n, workspaceId: i }),
                V.closeModal();
            },
            [j, i]
          ),
          U = (0, c.useCallback)(
            function (e, n) {
              M.mutate({ userId: e, value: n, workspaceId: i });
            },
            [M, i]
          );
        return void 0 === m || (null == m ? void 0 : m.items.length) === 0
          ? null
          : (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)(J.Z.Root, {
                  className: "text-sm",
                  children: [
                    (0, t.jsxs)(J.Z.Header, {
                      children: [
                        (0, t.jsx)(J.Z.HeaderCell, {
                          children: (0, t.jsx)(f.Z, (0, a._)({}, Q.name)),
                        }),
                        (0, t.jsx)(J.Z.HeaderCell, {
                          children: (0, t.jsx)(f.Z, (0, a._)({}, Q.email)),
                        }),
                        (0, t.jsx)(J.Z.HeaderCell, {
                          children: (0, t.jsx)(f.Z, (0, a._)({}, Q.role)),
                        }),
                      ],
                    }),
                    (0, t.jsx)(J.Z.Body, {
                      children: m.items.map(function (e) {
                        return (0, t.jsx)(
                          L,
                          {
                            isCurrentUser: void 0 !== g && e.id === g,
                            userId: e.id,
                            name: e.name,
                            role: e.role,
                            canEdit: v,
                            email: e.email,
                            onRemoveUserClick: function () {
                              return b({
                                id: e.id,
                                name: e.name,
                                email: e.email,
                                created_time: e.created_time,
                              });
                            },
                            onUpdateUserRole: U,
                          },
                          e.id
                        );
                      }),
                    }),
                  ],
                }),
                p > 1 &&
                  (0, t.jsx)("div", {
                    className: "mb-9 mt-4 flex justify-center",
                    children: (0, t.jsx)(W.Z, {
                      currentPage: d,
                      onChangeIndex: u,
                      length: p,
                    }),
                  }),
                (0, t.jsx)($, { onDeleteConfirm: Z }),
              ],
            });
      }
      function $(e) {
        var n,
          r = e.onDeleteConfirm,
          s = (0, m.Z)(),
          o = O(function (e) {
            return null !== e.confirmModalUserData;
          }),
          i = O(function (e) {
            return null === e.confirmModalUserData
              ? {}
              : {
                  userId: e.confirmModalUserData.id,
                  email: e.confirmModalUserData.email,
                  name: e.confirmModalUserData.name,
                  dateAdded: (0, T.Z)(e.confirmModalUserData.created_time),
                };
          });
        return (0, t.jsx)(F.Z, {
          isOpen: o,
          title: s.formatMessage(Q.removeMemberModalTitle),
          onClose: function () {
            return V.closeModal();
          },
          type: "success",
          primaryButton: (0, t.jsx)(E.ZP.Button, {
            title: s.formatMessage(Q.removeMemberModalConfirm),
            color: "danger",
            onClick: r,
          }),
          secondaryButton: (0, t.jsx)(E.ZP.Button, {
            title: s.formatMessage(Q.removeMemberModalCancel),
            color: "neutral",
            onClick: function () {
              return V.closeModal();
            },
          }),
          children: (0, t.jsxs)("div", {
            className: "flex flex-col items-center gap-2",
            children: [
              null !== (n = i.name) && void 0 !== n ? n : i.email,
              (0, t.jsx)("div", {
                className: "text-sm text-gray-500",
                children: (0, t.jsx)(
                  f.Z,
                  (0, Z._)((0, a._)({}, Q.dateJoined), {
                    values: {
                      dateAdded: s.formatDate(i.dateAdded, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }),
                    },
                  })
                ),
              }),
            ],
          }),
        });
      }
      function L(e) {
        var n = e.userId,
          r = e.name,
          s = e.email,
          o = e.role,
          i = e.canEdit,
          l = e.isCurrentUser,
          d = e.onRemoveUserClick,
          c = e.onUpdateUserRole,
          u = (0, h.Ap)(),
          m = o === D.r3.ADMIN ? u[D.r3.ADMIN] : u[D.r3.STANDARD];
        return (0, t.jsxs)(J.Z.Row, {
          children: [
            (0, t.jsx)(J.Z.Cell, {
              children: (0, t.jsxs)("span", {
                className: (0, P.Z)(
                  "flex items-center gap-2",
                  null === r || "" === r ? "text-gray-500" : ""
                ),
                children: [
                  (0, t.jsx)("span", {
                    children:
                      null != r
                        ? r
                        : (0, t.jsx)(f.Z, (0, a._)({}, Q.missingName)),
                  }),
                  (0, t.jsx)("span", {
                    children:
                      l && (0, t.jsx)(f.Z, (0, a._)({}, Q.youSpecifier)),
                  }),
                ],
              }),
            }),
            (0, t.jsx)(J.Z.Cell, { children: s }),
            (0, t.jsx)(J.Z.Cell, {
              children: i
                ? (0, t.jsx)(X, {
                    currentRole: o,
                    userId: n,
                    onRemoveUserClick: d,
                    onUpdateUserRole: c,
                    disabled: l,
                  })
                : m,
            }),
          ],
        });
      }
      function X(e) {
        var n = e.currentRole,
          r = e.userId,
          s = e.onRemoveUserClick,
          o = e.onUpdateUserRole,
          i = e.disabled,
          l = (0, h.Ap)();
        return (0, t.jsxs)("div", {
          className: "flex gap-2",
          children: [
            (0, t.jsxs)(H.Z.Root, {
              disabled: i,
              defaultValue: n,
              onValueChange: function (e) {
                o(r, e);
              },
              children: [
                (0, t.jsxs)(H.Z.Trigger, {
                  children: [
                    (0, t.jsx)(H.Z.Value, {}),
                    (0, t.jsx)(H.Z.Icon, {}),
                  ],
                }),
                (0, t.jsx)(H.Z.Portal, {
                  children: (0, t.jsxs)(H.Z.Content, {
                    children: [
                      (0, t.jsx)(H.Z.Item, {
                        value: D.r3.STANDARD,
                        children: l[D.r3.STANDARD],
                      }),
                      (0, t.jsx)(H.Z.Item, {
                        value: D.r3.ADMIN,
                        children: l[D.r3.ADMIN],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            !i &&
              (0, t.jsxs)(B.Root, {
                children: [
                  (0, t.jsx)(B.Trigger, {
                    children: (0, t.jsx)(p.ZP, { icon: u.K9M }),
                  }),
                  (0, t.jsx)(B.Portal, {
                    children: (0, t.jsx)(B.Content, {
                      children: (0, t.jsx)(B.Item, {
                        onClick: function () {
                          s(r);
                        },
                        children: (0, t.jsx)(
                          f.Z,
                          (0, a._)({}, Q.removeMemberModalTitle)
                        ),
                      }),
                    }),
                  }),
                ],
              }),
          ],
        });
      }
      var Y = 50;
      function z(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = (0, R.kP)().session;
        return (0, C.a)({
          queryKey: ["workspace", e, n],
          queryFn: (0, b._)(function () {
            return (0, U.Jh)(this, function (a) {
              switch (a.label) {
                case 0:
                  return [
                    4,
                    I.ZP.getWorkspaceUsers(r.accessToken, e, n * Y, Y),
                  ];
                case 1:
                  return [2, a.sent()];
              }
            });
          }),
          getNextPageParam: function (e) {
            var n = e.offset + Y;
            return { offset: n < e.total ? n : void 0, total: e.total };
          },
          enabled: !!(null == r ? void 0 : r.accessToken),
        });
      }
      function G(e) {
        var n,
          r = z(e).data;
        return null !== (n = null == r ? void 0 : r.total) && void 0 !== n
          ? n
          : 0;
      }
      var Q = (0, x.vU)({
        name: {
          id: "UserManager.name",
          defaultMessage: "Name",
          description: "Name column in the user management table",
        },
        email: {
          id: "UserManager.email",
          defaultMessage: "Email",
          description: "Email column in the user management table",
        },
        role: {
          id: "UserManager.role",
          defaultMessage: "Role",
          description: "Role column in the user management table",
        },
        missingName: {
          id: "UserManager.missingName",
          defaultMessage: "No name provided",
          description: "Placeholder for missing user name",
        },
        youSpecifier: {
          id: "UserManager.youSpecifier",
          defaultMessage: "(You)",
          description: "Specifier for the current user in the user manager",
        },
        removeUser: {
          id: "UserManager.removeUser",
          defaultMessage: "Remove user from workspace",
          description: "Remove user from workspace button in the user manager",
        },
        removeMemberModalTitle: {
          id: "UserManager.removeMemberModalTitle",
          defaultMessage: "Remove member",
          description: "Remove member title of confirmation modal",
        },
        removeMemberModalConfirm: {
          id: "UserManager.removeMemberModalConfirm",
          defaultMessage: "Delete",
          description: "Remove member confirm button of confirmation modal",
        },
        removeMemberModalCancel: {
          id: "UserManager.removeMemberModalCancel",
          defaultMessage: "Cancel",
          description: "Remove member cancel button of confirmation modal",
        },
        dateJoined: {
          id: "UserManager.dateJoined",
          defaultMessage: "Joined workspace on {dateAdded}",
          description: "Date user joined the current workspace",
        },
      });
      function ee() {
        var e = (0, s._)(["p-4 max-w-5xl mx-auto w-full"]);
        return (
          (ee = function () {
            return e;
          }),
          e
        );
      }
      function en() {
        var e = (0, s._)(["mb-8 px-4 py-7"]);
        return (
          (en = function () {
            return e;
          }),
          e
        );
      }
      function er() {
        var e = (0, s._)(["font-medium text-xl"]);
        return (
          (er = function () {
            return e;
          }),
          e
        );
      }
      function ea() {
        var e = (0, s._)(["text-gray-500 text-sm font-normal"]);
        return (
          (ea = function () {
            return e;
          }),
          e
        );
      }
      function et(e) {
        var n,
          r = e.currentWorkspaceId,
          s = (0, m.Z)(),
          i = (0, d.useRouter)(),
          x = (0, h.Hj)(function (e) {
            return e.items.find(function (e) {
              return e.id === r;
            });
          }),
          g = x.data,
          b = x.isLoading,
          Z = null !== (n = G(r)) && void 0 !== n ? n : "?",
          k = (0, h.Ix)(null != g ? g : null),
          U = (0, h.qH)(null != g ? g : null),
          C = (0, c.useCallback)(
            function () {
              i.push("/");
            },
            [i]
          );
        return (0, t.jsxs)(j.Z, {
          showNavigation: !0,
          renderTitle: (0, t.jsx)(f.Z, (0, a._)({}, ed.adminPageTitle)),
          children: [
            (0, t.jsx)(l(), {
              children: (0, t.jsx)("title", {
                children: s.formatMessage(ed.adminBrowserPageTitle),
              }),
            }),
            (0, t.jsxs)(j.Z.NavigationPrimaryActionDesktop, {
              onClick: C,
              children: [
                (0, t.jsx)(p.ZP, { icon: u.Ao2 }),
                (0, t.jsx)(f.Z, (0, a._)({}, ed.backToChat)),
              ],
            }),
            (0, t.jsx)(j.Z.NavigationContent, {
              children: (0, t.jsxs)("div", {
                className: "flex flex-col gap-2 py-4",
                children: [
                  (0, t.jsx)("h2", {
                    className: "mb-3 px-2 text-lg text-gray-100",
                    children: k,
                  }),
                  (0, t.jsxs)(v.ZB, {
                    className: "cursor-auto rounded-md bg-gray-700",
                    children: [
                      (0, t.jsx)(p.ZP, { icon: o.Z }),
                      (0, t.jsx)(f.Z, (0, a._)({}, ed.membersPageTitle)),
                    ],
                  }),
                ],
              }),
            }),
            (0, t.jsxs)(es, {
              children: [
                b &&
                  (0, t.jsx)("div", {
                    className: "flex min-h-screen items-center justify-center",
                    children: (0, t.jsx)(M.Z, {}),
                  }),
                !b &&
                  !g &&
                  (0, t.jsx)("div", {
                    className: "flex min-h-screen items-center justify-center",
                    children: (0, t.jsx)(
                      f.Z,
                      (0, a._)({}, ed.workspaceNotFound)
                    ),
                  }),
                !b &&
                  g &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsxs)(eo, {
                        children: [
                          (0, t.jsx)(ei, { children: k }),
                          (0, t.jsx)(el, {
                            children: (0, t.jsx)(
                              f.Z,
                              (0, a._)(
                                { values: { totalMembers: Z, planName: U } },
                                ed.totalMembers
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, t.jsx)(K, { workspaceId: r }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      var es = g.Z.div(ee()),
        eo = g.Z.div(en()),
        ei = g.Z.h1(er()),
        el = g.Z.span(ea()),
        ed = (0, x.vU)({
          adminBrowserPageTitle: {
            id: "adminPage.adminBrowserPageTitle",
            defaultMessage: "ChatGPT - Member admin",
            description: "The title of the admin page.",
          },
          adminPageTitle: {
            id: "adminPage.adminPageTitle",
            defaultMessage: "Member admin",
            description: "The title of the admin page.",
          },
          workspaceNotFound: {
            id: "adminPage.workspaceNotFound",
            defaultMessage: "Workspace not found",
            description: "The title of the admin page.",
          },
          totalMembers: {
            id: "adminPage.totalMembers",
            defaultMessage:
              "{planName} \xb7 {totalMembers} {totalMembers, plural, one {member} other {members}}",
            description: "The number of users in a workspace",
          },
          backToChat: {
            id: "adminPage.backToChat",
            defaultMessage: "Back to chat",
            description: "Navigation button to return to main chat page",
          },
          membersPageTitle: {
            id: "adminPage.membersPageTitle",
            defaultMessage: "Members",
            description: "The title of the members page",
          },
        }),
        ec = !0;
      function eu(e) {
        return (0, t.jsx)(et, (0, a._)({}, e));
      }
    },
  },
  function (e) {
    e.O(0, [960, 246, 798, 692, 361, 97, 774, 888, 179], function () {
      return e((e.s = 17149));
    }),
      (_N_E = e.O());
  },
]);
