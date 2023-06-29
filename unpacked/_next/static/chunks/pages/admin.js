(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [964],
  {
    17149: function (e, a, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin",
        function () {
          return n(50280);
        },
      ]);
    },
    50280: function (e, a, n) {
      "use strict";
      n.r(a),
        n.d(a, {
          __N_SSP: function () {
            return eC;
          },
          default: function () {
            return eN;
          },
        });
      var t = n(39324),
        r = n(35250),
        i = n(71209),
        s = n(22830),
        o = n(4337),
        l = n(16266),
        d = n(13451),
        c = n(91530),
        m = n.n(c),
        u = n(5437),
        f = n.n(u),
        v = n(68555),
        p = n(70079),
        g = n(1454),
        h = n(75908),
        x = n(35290),
        b = n(3001),
        M = n(34303),
        j = n(32787),
        k = n(24274),
        Z = n(32689),
        C = n(59110),
        N = n(32165),
        T = n(66958),
        P = n(59114),
        w = n(48727),
        I = n(81949),
        U = n(19841),
        y = n(30016),
        _ = n(32075),
        D = n(38317),
        B = n(57924),
        A =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      function R(e) {
        return e.split(/[\s,]+/);
      }
      function E(e) {
        var a = e.value,
          n = e.onChange,
          t = e.className,
          i = (0, h.Z)(),
          o = (0, s._)((0, p.useState)(""), 2),
          l = o[0],
          d = o[1],
          c = (0, p.useCallback)(
            function (e) {
              if (l)
                switch (e.key) {
                  case "Enter":
                  case ",":
                  case " ":
                    var t = R(l);
                    n((0, I._)(a).concat((0, I._)(t.map(S)))),
                      d(""),
                      e.preventDefault();
                }
            },
            [l, n, a]
          );
        return (0, r.jsx)(y.ZP, {
          className: (0, U.Z)("react-select-container", t),
          isMulti: !0,
          onBlur: function (e) {
            if (l) {
              var t = R(l);
              n((0, I._)(a).concat((0, I._)(t.map(S)))),
                d(l),
                e.preventDefault();
            }
          },
          classNamePrefix: "react-select",
          components: W,
          inputValue: l,
          isClearable: !0,
          menuIsOpen: !1,
          onChange: n,
          onInputChange: d,
          onKeyDown: c,
          placeholder: i.formatMessage(F.placeholder),
          value: a,
          "aria-labelledby": "add-emails-label",
          name: "add-member-emails",
        });
      }
      var S = function (e) {
          return { label: e, value: e, isValid: A.test(e) };
        },
        W = {
          DropdownIndicator: function () {
            return null;
          },
          IndicatorsContainer: function () {
            return null;
          },
          ClearIndicator: function () {
            return null;
          },
          MultiValueRemove: function () {
            return null;
          },
          MultiValue: function (e) {
            var a = (0, h.Z)(),
              n = (0, r.jsxs)("span", {
                className: "flex items-center gap-1",
                children: [
                  (0, r.jsx)("span", { children: e.children }),
                  (0, r.jsx)(D.ZP, { icon: g.q5L, size: "small" }),
                ],
              }),
              s = e.data.isValid
                ? n
                : (0, r.jsx)(B.u, {
                    label: a.formatMessage(F.tooltipInvalidEmail, {
                      email: e.data.value,
                    }),
                    side: "top",
                    children: n,
                  });
            return (0, r.jsx)(
              _.c.MultiValue,
              (0, i._)((0, t._)({}, e), {
                children: (0, r.jsx)("button", {
                  className: (0, U.Z)(
                    "m-1 cursor-pointer rounded-full border border-transparent py-1 pl-3 pr-2 text-sm dark:text-gray-300",
                    e.data.isValid
                      ? "bg-gray-50 hover:border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-700"
                      : "bg-red-200 text-red-500 dark:text-red-500"
                  ),
                  onClick: function (a) {
                    var n, t;
                    null === (t = (n = e.removeProps).onClick) ||
                      void 0 === t ||
                      t.call(n, a),
                      a.preventDefault();
                  },
                  "aria-label": a.formatMessage(F.removeMember, {
                    member: e.data.value,
                  }),
                  children: s,
                }),
              })
            );
          },
        },
        F = (0, b.vU)({
          membersAdded: {
            id: "emailsTextarea.membersAdded",
            defaultMessage:
              "+{count} {count, plural, one {member} other {members}}",
            description:
              "Current number of members that will be added to the workspace",
          },
          removeMember: {
            id: "emailsTextarea.removeMember",
            defaultMessage: "Remove {member}",
            description: "Remove a member from the list of members to be added",
          },
          tooltipInvalidEmail: {
            id: "emailsTextarea.tooltipInvalidEmail",
            defaultMessage: '"{email}" may not be a valid email',
            description: "Tooltip for invalid email addresses",
          },
          clearAllEntries: {
            id: "emailsTextarea.clearAllEntries",
            defaultMessage: "Clear all",
            description: "Clear all entries in the list of members to be added",
          },
          placeholder: {
            id: "emailsTextarea.placeholder",
            defaultMessage: "Type an email and press enter...",
            description: "Placeholder for the insert emails textarea",
          },
        }),
        z = n(94860),
        V = n(19265),
        O = n(45036),
        H = n(97688),
        q = n(21722),
        J = n(39889),
        K = n(24396),
        $ = n(35448),
        L = n(76150),
        X = n(81292),
        G = n(32402),
        Q = n(870),
        Y = n(25422),
        ee = n(25345),
        ea = n(85449),
        en = (0, X.ZP)(function () {
          return { confirmModalUserData: null };
        }),
        et = {
          openModalForUser: function (e) {
            en.setState({ confirmModalUserData: e });
          },
          closeModal: function () {
            en.setState({ confirmModalUserData: null });
          },
        };
      function er(e) {
        var a,
          n,
          i,
          o,
          l = e.workspaceId,
          c = (0, s._)((0, p.useState)(0), 2),
          m = c[0],
          u = c[1],
          f = ec(l, m).data,
          v = (0, j.kP)().session,
          h =
            null == v
              ? void 0
              : null === (o = v.user) || void 0 === o
              ? void 0
              : o.id,
          b = Math.ceil(em(l) / ed),
          M = (0, N.bE)(l),
          C =
            ((a = (0, j.kP)().session),
            (0, d.D)({
              mutationFn: function (e) {
                var n = e.userId,
                  t = e.workspaceId,
                  r = e.value;
                return k.ZP.updateWorkspaceUserRole(
                  a.accessToken,
                  t,
                  n,
                  r
                ).catch(function (e) {
                  H.m.danger(
                    "Unable to update user ("
                      .concat(n, ") role: ")
                      .concat(e.message)
                  );
                });
              },
            })),
          P =
            ((n = (0, j.kP)().session),
            (i = (0, $.NL)()),
            (0, d.D)({
              mutationFn: function (e) {
                var a = e.userId,
                  t = e.workspaceId;
                return k.ZP.removeWorkspaceUser(n.accessToken, t, a).catch(
                  function (e) {
                    H.m.danger(
                      "Unable to remove user ("
                        .concat(a, ") from workspace: ")
                        .concat(e.message)
                    );
                  }
                );
              },
              onSuccess: function () {
                i.invalidateQueries({ queryKey: ["workspace", l] });
              },
            })),
          w = (0, p.useCallback)(function (e) {
            et.openModalForUser(e);
          }, []),
          I = (0, p.useCallback)(
            function () {
              var e,
                a =
                  null === (e = en.getState().confirmModalUserData) ||
                  void 0 === e
                    ? void 0
                    : e.id;
              void 0 !== a && P.mutate({ userId: a, workspaceId: l }),
                et.closeModal();
            },
            [P, l]
          ),
          U = (0, p.useCallback)(
            function (e, a) {
              C.mutate({ userId: e, value: a, workspaceId: l });
            },
            [C, l]
          );
        return void 0 === f || (null == f ? void 0 : f.items.length) === 0
          ? null
          : (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)(ee.Z.Root, {
                  fixed: !0,
                  size: "normal",
                  children: [
                    (0, r.jsxs)(ee.Z.Header, {
                      children: [
                        (0, r.jsx)(ee.Z.HeaderCell, {
                          className: "dark:bg-gray-800",
                          children: (0, r.jsx)(x.Z, (0, t._)({}, eu.name)),
                        }),
                        (0, r.jsx)(ee.Z.HeaderCell, {
                          className: "dark:bg-gray-800",
                          children: (0, r.jsx)(x.Z, (0, t._)({}, eu.email)),
                        }),
                        (0, r.jsx)(ee.Z.HeaderCell, {
                          className: "w-28 dark:bg-gray-800",
                          children: (0, r.jsx)("span", {
                            className: M ? "pl-3" : "",
                            children: (0, r.jsx)(x.Z, (0, t._)({}, eu.role)),
                          }),
                        }),
                        M &&
                          (0, r.jsx)(ee.Z.HeaderCell, {
                            className: "w-16 dark:bg-gray-800",
                          }),
                      ],
                    }),
                    (0, r.jsx)(ee.Z.Body, {
                      children: f.items.map(function (e) {
                        return (0, r.jsx)(
                          es,
                          {
                            isCurrentUser: void 0 !== h && e.id === h,
                            userId: e.id,
                            name: e.name,
                            role: e.role,
                            canEdit: M,
                            email: e.email,
                            onRemoveUserClick: function () {
                              return w({
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
                (0, r.jsxs)("div", {
                  className: "relative mb-9 mt-2 min-h-[20px]",
                  children: [
                    M &&
                      (0, r.jsxs)(T.z, {
                        color: "none",
                        onClick: function () {
                          return Z.vm.openModal(Z.B.InviteUsersToWorkspace);
                        },
                        children: [
                          (0, r.jsx)(D.ZP, { icon: g.OvN }),
                          (0, r.jsx)(x.Z, (0, t._)({}, eu.inviteMemberButton)),
                        ],
                      }),
                    b > 1 &&
                      (0, r.jsx)("div", {
                        className:
                          "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center",
                        children: (0, r.jsx)(ea.Z, {
                          currentPage: m,
                          onChangeIndex: u,
                          length: b,
                        }),
                      }),
                  ],
                }),
                (0, r.jsx)(ei, { onDeleteConfirm: I }),
              ],
            });
      }
      function ei(e) {
        var a,
          n = e.onDeleteConfirm,
          s = (0, h.Z)(),
          o = en(function (e) {
            return null !== e.confirmModalUserData;
          }),
          l = en(function (e) {
            return null === e.confirmModalUserData
              ? {}
              : {
                  userId: e.confirmModalUserData.id,
                  email: e.confirmModalUserData.email,
                  name: e.confirmModalUserData.name,
                  dateAdded: (0, L.Z)(e.confirmModalUserData.created_time),
                };
          });
        return (0, r.jsx)(w.Z, {
          isOpen: o,
          title: s.formatMessage(eu.removeMemberModalTitle),
          onClose: function () {
            return et.closeModal();
          },
          type: "success",
          primaryButton: (0, r.jsx)(P.ZP.Button, {
            title: s.formatMessage(eu.removeMemberModalConfirm),
            color: "danger",
            onClick: n,
          }),
          secondaryButton: (0, r.jsx)(P.ZP.Button, {
            title: s.formatMessage(eu.removeMemberModalCancel),
            color: "neutral",
            onClick: function () {
              return et.closeModal();
            },
          }),
          children: (0, r.jsxs)("div", {
            className: "flex flex-col items-center gap-2",
            children: [
              null !== (a = l.name) && void 0 !== a ? a : l.email,
              (0, r.jsx)("div", {
                className: "text-gray-500",
                children: (0, r.jsx)(
                  x.Z,
                  (0, i._)((0, t._)({}, eu.dateJoined), {
                    values: {
                      dateAdded: s.formatDate(l.dateAdded, {
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
      function es(e) {
        var a = e.userId,
          n = e.name,
          i = e.email,
          s = e.role,
          o = e.canEdit,
          l = e.isCurrentUser,
          d = e.onRemoveUserClick,
          c = e.onUpdateUserRole,
          m = (0, N.Ap)(),
          u = s === G.r3.ADMIN ? m[G.r3.ADMIN] : m[G.r3.STANDARD];
        return (0, r.jsxs)(ee.Z.Row, {
          children: [
            (0, r.jsx)(ee.Z.Cell, {
              children: (0, r.jsxs)("span", {
                className: (0, U.Z)(
                  "flex items-center gap-2",
                  null === n || "" === n ? "text-gray-500" : ""
                ),
                children: [
                  (0, r.jsx)("span", {
                    children:
                      null != n
                        ? n
                        : (0, r.jsx)(x.Z, (0, t._)({}, eu.missingName)),
                  }),
                  (0, r.jsx)("span", {
                    children:
                      l && (0, r.jsx)(x.Z, (0, t._)({}, eu.youSpecifier)),
                  }),
                ],
              }),
            }),
            (0, r.jsx)(ee.Z.Cell, { children: i }),
            (0, r.jsx)(ee.Z.Cell, {
              children: o
                ? (0, r.jsx)(eo, {
                    currentRole: s,
                    userId: a,
                    onUpdateUserRole: c,
                    disabled: l,
                  })
                : u,
            }),
            o &&
              (0, r.jsx)(ee.Z.Cell, {
                children: (0, r.jsx)(el, {
                  userId: a,
                  onRemoveUserClick: d,
                  disabled: l,
                }),
              }),
          ],
        });
      }
      function eo(e) {
        var a = e.currentRole,
          n = e.userId,
          t = e.onUpdateUserRole,
          i = e.disabled,
          s = (0, N.Ap)();
        return (0, r.jsxs)(Y.Z.Root, {
          disabled: i,
          defaultValue: a,
          onValueChange: function (e) {
            t(n, e);
          },
          children: [
            (0, r.jsxs)(Y.Z.Trigger, {
              children: [(0, r.jsx)(Y.Z.Value, {}), (0, r.jsx)(Y.Z.Icon, {})],
            }),
            (0, r.jsx)(Y.Z.Portal, {
              children: (0, r.jsxs)(Y.Z.Content, {
                children: [
                  (0, r.jsx)(Y.Z.Item, {
                    value: G.r3.STANDARD,
                    children: s[G.r3.STANDARD],
                  }),
                  (0, r.jsx)(Y.Z.Item, {
                    value: G.r3.ADMIN,
                    children: s[G.r3.ADMIN],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function el(e) {
        var a = e.disabled,
          n = e.onRemoveUserClick,
          i = e.userId;
        return a
          ? null
          : (0, r.jsxs)(Q.Z.Root, {
              children: [
                (0, r.jsx)(Q.Z.Trigger, {
                  children: (0, r.jsx)(D.ZP, { icon: g.K9M }),
                }),
                (0, r.jsx)(Q.Z.Portal, {
                  children: (0, r.jsx)(Q.Z.Content, {
                    children: (0, r.jsx)(Q.Z.Item, {
                      onClick: function () {
                        n(i);
                      },
                      children: (0, r.jsx)(
                        x.Z,
                        (0, t._)({}, eu.removeMemberModalTitle)
                      ),
                    }),
                  }),
                }),
              ],
            });
      }
      var ed = 50;
      function ec(e) {
        var a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (0, j.kP)().session;
        return (0, K.a)({
          queryKey: ["workspace", e, a],
          queryFn: (0, q._)(function () {
            return (0, J.Jh)(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    k.ZP.getWorkspaceUsers(n.accessToken, e, a * ed, ed),
                  ];
                case 1:
                  return [2, t.sent()];
              }
            });
          }),
          getNextPageParam: function (e) {
            var a = e.offset + ed;
            return { offset: a < e.total ? a : void 0, total: e.total };
          },
          enabled: !!(null == n ? void 0 : n.accessToken),
        });
      }
      function em(e) {
        var a,
          n = ec(e).data;
        return null !== (a = null == n ? void 0 : n.total) && void 0 !== a
          ? a
          : 0;
      }
      var eu = (0, b.vU)({
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
        inviteMemberButton: {
          id: "UserManager.inviteMemberButton",
          defaultMessage: "Invite member",
          description: "The title of the invite member button",
        },
      });
      function ef() {
        var e = (0, o._)(["max-w-5xl mx-auto w-full"]);
        return (
          (ef = function () {
            return e;
          }),
          e
        );
      }
      function ev() {
        var e = (0, o._)(["mb-8 px-4 py-7 flex justify-between items-center"]);
        return (
          (ev = function () {
            return e;
          }),
          e
        );
      }
      function ep() {
        var e = (0, o._)(["font-medium text-xl"]);
        return (
          (ep = function () {
            return e;
          }),
          e
        );
      }
      function eg() {
        var e = (0, o._)(["text-gray-500 text-sm font-normal"]);
        return (
          (eg = function () {
            return e;
          }),
          e
        );
      }
      function eh(e) {
        var a,
          n = e.currentWorkspaceId,
          i = (0, h.Z)(),
          s = (0, v.useRouter)(),
          o = (0, C.ec)(function (e) {
            return e.currentWorkspace;
          }),
          d = (0, C.$T)(),
          c = (0, N.bE)(n),
          m = null !== (a = em(n)) && void 0 !== a ? a : "?",
          u = (0, N.Ix)(o),
          b = (0, N.qH)(o),
          M = (0, p.useCallback)(
            function () {
              s.push("/");
            },
            [s]
          );
        return (0, r.jsxs)(O.Z, {
          showNavigation: !0,
          renderTitle: (0, r.jsx)(x.Z, (0, t._)({}, eZ.adminPageTitle)),
          children: [
            (0, r.jsx)(f(), {
              children: (0, r.jsx)("title", {
                children: i.formatMessage(eZ.adminBrowserPageTitle),
              }),
            }),
            (0, r.jsxs)(O.Z.NavigationPrimaryActionDesktop, {
              onClick: M,
              children: [
                (0, r.jsx)(D.ZP, { icon: g.Ao2 }),
                (0, r.jsx)(x.Z, (0, t._)({}, eZ.backToChat)),
              ],
            }),
            (0, r.jsx)(O.Z.NavigationContent, {
              children: (0, r.jsxs)("div", {
                className: "flex flex-col gap-2 py-4",
                children: [
                  (0, r.jsx)("h2", {
                    className: "mb-3 px-2 text-lg text-gray-100",
                    children: u,
                  }),
                  (0, r.jsxs)(z.ZB, {
                    className: "cursor-auto rounded-md bg-gray-700",
                    children: [
                      (0, r.jsx)(D.ZP, { icon: l.Z }),
                      (0, r.jsx)(x.Z, (0, t._)({}, eZ.membersPageTitle)),
                    ],
                  }),
                ],
              }),
            }),
            (0, r.jsxs)(eb, {
              children: [
                d &&
                  (0, r.jsx)("div", {
                    className: "flex min-h-screen items-center justify-center",
                    children: (0, r.jsx)(V.Z, {}),
                  }),
                !d &&
                  !o &&
                  (0, r.jsx)("div", {
                    className: "flex min-h-screen items-center justify-center",
                    children: (0, r.jsx)(
                      x.Z,
                      (0, t._)({}, eZ.workspaceNotFound)
                    ),
                  }),
                !d &&
                  o &&
                  (0, r.jsxs)("div", {
                    className: "p-4",
                    children: [
                      (0, r.jsxs)(eM, {
                        children: [
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)(ej, { children: u }),
                              (0, r.jsx)(ek, {
                                children: (0, r.jsx)(
                                  x.Z,
                                  (0, t._)(
                                    {
                                      values: { totalMembers: m, planName: b },
                                    },
                                    eZ.totalMembers
                                  )
                                ),
                              }),
                            ],
                          }),
                          c &&
                            (0, r.jsxs)(T.z, {
                              onClick: function () {
                                return Z.vm.openModal(
                                  Z.B.InviteUsersToWorkspace
                                );
                              },
                              children: [
                                (0, r.jsx)(D.ZP, { icon: g.OvN }),
                                (0, r.jsx)(
                                  x.Z,
                                  (0, t._)({}, eZ.inviteMemberButton)
                                ),
                              ],
                            }),
                        ],
                      }),
                      (0, r.jsx)(er, { workspaceId: n }),
                      (0, r.jsx)(ex, { workspaceName: u, workspace: o }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function ex(e) {
        var a,
          n,
          o = e.workspace,
          l = e.workspaceName,
          c = (0, h.Z)(),
          u = (0, Z.tN)(function (e) {
            return e.activeModals.has(Z.B.InviteUsersToWorkspace);
          }),
          f = (0, s._)((0, p.useState)([]), 2),
          v = f[0],
          g = f[1],
          b = ((a = (0, p.useCallback)(function () {
            g([]);
          }, [])),
          (n = (0, j.kP)().session),
          (0, d.D)({
            mutationFn: function (e) {
              var t = e.workspaceId,
                r = e.emails;
              return k.ZP.addWorkspaceUsers(n.accessToken, t, r)
                .then(function (e) {
                  return (
                    H.m.success(
                      "Invited ".concat(e.length, " user(s) to ").concat(l)
                    ),
                    a(),
                    e
                  );
                })
                .catch(function (e) {
                  throw (H.m.danger(e.message), e);
                });
            },
          })).mutate,
          M = v.length > 30,
          C = (0, p.useCallback)(
            function () {
              var e = v.map(function (e) {
                return e.value;
              });
              b({ workspaceId: o.id, emails: e });
            },
            [b, v, o.id]
          );
        return (0, r.jsx)(w.Z, {
          closeButton: (0, r.jsx)(P.ZP.CloseButton, {
            onClose: function () {
              Z.vm.closeModal(Z.B.InviteUsersToWorkspace);
            },
          }),
          isOpen: u,
          onClose: m(),
          type: "success",
          title:
            (null == o ? void 0 : o.name) != null
              ? c.formatMessage(eZ.inviteMemberModalTitle, { workspaceName: l })
              : c.formatMessage(eZ.inviteMemberModalTitleUntitledWorkspace),
          primaryButton: (0, r.jsx)(P.ZP.Button, {
            title: c.formatMessage(eZ.inviteMemberInviteSubmitButton),
            color: "primary",
            disabled: M || 0 === v.length,
            onClick: C,
          }),
          secondaryButton: (0, r.jsx)(P.ZP.Button, {
            title: c.formatMessage(eZ.inviteMemberInviteCancelButton),
            color: "neutral",
            onClick: function () {
              return Z.vm.closeModal(Z.B.InviteUsersToWorkspace);
            },
          }),
          children: (0, r.jsxs)("div", {
            className: "flex flex-col text-sm",
            children: [
              (0, r.jsx)("div", {
                className: "mb-3 text-gray-500 dark:text-gray-400",
                children: (0, r.jsx)(
                  x.Z,
                  (0, t._)({}, eZ.inviteMemberModalDescription)
                ),
              }),
              (0, r.jsx)("label", {
                className: "mb-2",
                htmlFor: "add-member-emails",
                id: "add-emails-label",
                children: (0, r.jsx)(x.Z, (0, t._)({}, eZ.addEmailsFieldName)),
              }),
              (0, r.jsx)(E, {
                value: v,
                onChange: g,
                className: M ? "react-select--invalid" : "",
              }),
              (0, r.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, r.jsx)("span", {
                    className: M
                      ? "text-red-500"
                      : "text-gray-500 dark:text-gray-200",
                    children: (0, r.jsx)(
                      x.Z,
                      (0, i._)((0, t._)({}, eZ.maxInvitesCounter), {
                        values: { num: v.length, max: 30 },
                      })
                    ),
                  }),
                  (0, r.jsx)(T.z, {
                    color: "none",
                    children: (0, r.jsx)(x.Z, (0, t._)({}, eZ.clearAllEntries)),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var eb = M.Z.div(ef()),
        eM = M.Z.div(ev()),
        ej = M.Z.h1(ep()),
        ek = M.Z.span(eg()),
        eZ = (0, b.vU)({
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
          inviteMemberButton: {
            id: "adminPage.inviteMemberButton",
            defaultMessage: "Invite member",
            description: "The title of the invite member button",
          },
          inviteMemberModalTitle: {
            id: "adminPage.inviteMemberModalTitle",
            defaultMessage: "Invite members to the {workspaceName} workspace",
            description: "The title of the invite member modal",
          },
          inviteMemberModalTitleUntitledWorkspace: {
            id: "adminPage.inviteMemberModalTitleUntitledWorkspace",
            defaultMessage: "Invite members to this workspace",
            description:
              "The title of the invite member modal when a workspace has no name",
          },
          inviteMemberInviteSubmitButton: {
            id: "adminPage.inviteMemberInviteSubmitButton",
            defaultMessage: "Send invites",
            description: "The title of the invite member modal submit button",
          },
          inviteMemberInviteCancelButton: {
            id: "adminPage.inviteMemberInviteCancelButton",
            defaultMessage: "Cancel",
            description: "The title of the invite member modal cancel button",
          },
          inviteMemberModalDescription: {
            id: "adminPage.inviteMemberModalDescription",
            defaultMessage:
              "This workspace is private, only select members and roles can use this workspace. This workspace is opted out of training.",
            description: "The description of the invite member modal",
          },
          maxInvitesCounter: {
            id: "adminPage.maxInvitesCounter",
            defaultMessage: "{num}/{max} invites at a time",
            description: "The description of the invite member modal",
          },
          clearAllEntries: {
            id: "adminPage.clearAllEntries",
            defaultMessage: "Clear all",
            description: "Clear all entries in the list of members to be added",
          },
          addEmailsFieldName: {
            id: "adminPage.addEmailsFieldName",
            defaultMessage: "Emails",
            description: "Name of input for adding emails to workspace",
          },
        }),
        eC = !0;
      function eN(e) {
        return (0, r.jsx)(eh, (0, t._)({}, e));
      }
    },
  },
  function (e) {
    e.O(0, [960, 246, 798, 386, 778, 496, 774, 888, 179], function () {
      return e((e.s = 17149));
    }),
      (_N_E = e.O());
  },
]);
