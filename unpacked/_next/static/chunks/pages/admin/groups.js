(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7705],
  {
    1024: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          __N_SSP: function () {
            return z;
          },
          default: function () {
            return L;
          },
        });
      var t = r(39827),
        a = r(9112),
        n = r(13038),
        l = r(82473),
        o = r(61236),
        i = r(52134),
        c = r(25494),
        u = r(19841),
        d = r(80483),
        p = r.n(d),
        g = r(70079),
        m = r(1454),
        j = r(70671),
        x = r(32004),
        f = r(94968),
        h = r(35250);
      function w(e) {
        let { checked: s } = e;
        return (0, h.jsx)("div", {
          className: "p-2",
          children: s ? (0, h.jsx)(m.bTu, {}) : (0, h.jsx)(m.Tfp, {}),
        });
      }
      var y = r(7557),
        Z = r(70917),
        b = r(16244),
        v = r(95250),
        k = r(36607),
        S = r(52299);
      function C(e) {
        let {
          className: s,
          inputClassName: r,
          value: t,
          onChange: a,
          placeholder: n,
        } = e;
        return (0, h.jsxs)("div", {
          className: (0, u.default)("relative", s),
          children: [
            (0, h.jsx)(m.jRj, {
              className:
                "icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary",
            }),
            (0, h.jsx)("input", {
              type: "text",
              value: t,
              onChange: a,
              placeholder: n,
              className: (0, u.default)(
                "rounded-lg border border-gray-200 pl-8 placeholder:text-gray-500 dark:border-gray-600 dark:bg-gray-700",
                r
              ),
            }),
          ],
        });
      }
      var N = r(42005),
        M = r(24668),
        O = r(61888),
        P = r(4373),
        D = r(47527);
      function G(e) {
        let { group: s, isOpen: r, onClose: t } = e,
          a = (0, j.Z)().formatMessage(
            {
              id: "workspaceSettings.groups.addMember",
              defaultMessage: "Add members to the {groupName} group",
            },
            { groupName: s.name }
          ),
          n = (0, M.t)(),
          l = null == n ? void 0 : n.getWorkspaceId(),
          { 0: o, 1: c } = (0, g.useState)(""),
          { 0: u, 1: d } = (0, g.useState)(0),
          { data: p } = (0, P.Z)(l, u * P.I, o, i.Wk),
          { 0: f, 1: w } = (0, g.useState)([]),
          { 0: Z, 1: k } = (0, g.useState)([]),
          N = p ? Math.ceil(p.total / P.I) : 0;
        async function G(e) {
          k((s) => [...s, e]);
          try {
            await E(l, s.id, e), w((s) => [...s, e]);
          } catch (e) {
            console.error(e);
          } finally {
            k((s) => s.filter((s) => s !== e));
          }
        }
        return (0, h.jsx)(b.Z, {
          type: "warning",
          isOpen: r,
          onClose: null != t ? t : O.noop,
          title: a,
          size: "custom",
          className: "max-w-screen-md",
          showCloseButton: !0,
          children: (0, h.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [
              (0, h.jsx)("p", { children: a }),
              (0, h.jsx)(C, {
                value: o,
                inputClassName: "w-full",
                onChange: (e) => {
                  c(e.target.value);
                },
              }),
              (0, h.jsxs)(v.Z.Root, {
                className: "min-w-full",
                children: [
                  (0, h.jsxs)(v.Z.Header, {
                    children: [
                      (0, h.jsx)(v.Z.HeaderCell, {
                        children: (0, h.jsx)(x.Z, {
                          id: "workspaceSettings.groups.addMember.name",
                          defaultMessage: "Name",
                        }),
                      }),
                      (0, h.jsx)(v.Z.HeaderCell, {
                        children: (0, h.jsx)(x.Z, {
                          id: "workspaceSettings.groups.addMember.email",
                          defaultMessage: "Email",
                        }),
                      }),
                      (0, h.jsx)(v.Z.HeaderCell, {}),
                    ],
                  }),
                  (0, h.jsx)(v.Z.Body, {
                    children:
                      null == p
                        ? void 0
                        : p.items.map((e) =>
                            (0, h.jsxs)(
                              v.Z.Row,
                              {
                                children: [
                                  (0, h.jsx)(v.Z.Cell, { children: e.name }),
                                  (0, h.jsx)(v.Z.Cell, { children: e.email }),
                                  (0, h.jsx)(v.Z.Cell, {
                                    textAlign: "right",
                                    className: "pr-1",
                                    children: (0, h.jsx)(y.z, {
                                      size: "small",
                                      color: "neutral",
                                      disabled: Z.includes(e.id),
                                      onClick: () => {
                                        f.includes(e.id) || G(e.id);
                                      },
                                      children: f.includes(e.id)
                                        ? (0, h.jsxs)(h.Fragment, {
                                            children: [
                                              (0, h.jsx)(D.nQ, {}),
                                              (0, h.jsx)(x.Z, {
                                                id: "workspaceSettings.groups.addMember.addButton",
                                                defaultMessage: "Added",
                                              }),
                                            ],
                                          })
                                        : (0, h.jsxs)(h.Fragment, {
                                            children: [
                                              (0, h.jsx)(m.OvN, {}),
                                              (0, h.jsx)(x.Z, {
                                                id: "workspaceSettings.groups.addMember.addedButton",
                                                defaultMessage: "Add",
                                              }),
                                            ],
                                          }),
                                    }),
                                  }),
                                ],
                              },
                              e.id
                            )
                          ),
                  }),
                ],
              }),
              (0, h.jsx)("div", {
                className: "flex flex-row justify-center",
                children: (0, h.jsx)(S.t, {
                  currentPage: u,
                  onChangeIndex: (e) => {
                    d(e);
                  },
                  length: N,
                }),
              }),
            ],
          }),
        });
      }
      async function E(e, s, r) {
        await n.Z.addWorkspaceGroupUser(e, s, r);
      }
      var _ = r(68832);
      function q(e, s) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          s &&
            (t = t.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            r.push.apply(r, t);
        }
        return r;
      }
      function Q(e) {
        for (var s = 1; s < arguments.length; s++) {
          var r = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? q(Object(r), !0).forEach(function (s) {
                (0, t.Z)(e, s, r[s]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : q(Object(r)).forEach(function (s) {
                  Object.defineProperty(
                    e,
                    s,
                    Object.getOwnPropertyDescriptor(r, s)
                  );
                });
        }
        return e;
      }
      function T(e) {
        let { workspaceId: s, group: r } = e,
          t = (0, j.Z)(),
          { 0: a, 1: d } = (0, g.useState)(!1),
          { 0: p, 1: f } = (0, g.useState)(""),
          { 0: w, 1: b } = (0, g.useState)(0),
          {
            data: k,
            isLoading: C,
            isPlaceholderData: M,
          } = (0, o.a)({
            queryKey: [s, "groups", r.id, "members-page-".concat(w)],
            queryFn: () => n.Z.listWorkspaceGroupMembers(s, r.id, "", 10 * w),
            placeholderData: i.Wk,
          }),
          { 0: O, 1: P } = (0, g.useState)(!1),
          E = (0, g.useRef)(null),
          q = (0, l.NL)();
        (0, g.useEffect)(() => {
          a && E.current && E.current.focus();
        }, [a]);
        let { mutateAsync: T } = (0, c.D)({
          mutationFn: async (e) =>
            await n.Z.removeWorkspaceGroupMember(s, r.id, e),
          onMutate: (e) => (
            q.cancelQueries({ queryKey: [s, "groups", r.id] }),
            q.setQueryData(
              [s, "groups", r.id, "members-page-".concat(w)],
              (s) =>
                s
                  ? Q(
                      Q({}, s),
                      {},
                      {
                        items: s.items.filter((s) => s.id !== e),
                        total: s.total - 1,
                      }
                    )
                  : { limit: 10, offset: 0, items: [], total: 0 }
            ),
            { previousData: k }
          ),
          onError: (e, t, a) => {
            q.setQueryData(
              [s, "groups", r.id, "members-page-".concat(w)],
              null == a ? void 0 : a.previousData
            ),
              q.invalidateQueries({ queryKey: [s, "groups", r.id] });
          },
          onSettled: async () => {
            await new Promise((e) => setTimeout(e, 1e3)),
              q.invalidateQueries({ queryKey: [s, "groups"] });
          },
        });
        return (0, h.jsxs)("div", {
          className: "flex w-full flex-col",
          children: [
            (0, h.jsxs)("div", {
              className: "flex flex-row items-center ",
              children: [
                (0, h.jsx)("div", {
                  className:
                    "border-token-border-dark mt-3 inline-block h-8 grow-0 border-b-2 text-sm font-semibold",
                  children: (0, h.jsx)(x.Z, {
                    id: "workspaceSettings.groups.membersTableTitle",
                    defaultMessage: "Group members",
                  }),
                }),
                (0, h.jsx)("div", { className: "grow" }),
                (0, h.jsx)(_.u, {
                  label: t.formatMessage({
                    id: "workspaceSettings.groups.searchButtonTooltip",
                    defaultMessage: "Search members",
                  }),
                  children: (0, h.jsx)("div", {
                    className: "cursor-pointer p-2",
                    onClick: () => {
                      d(!0);
                    },
                    children: (0, h.jsx)(D.ol, {}),
                  }),
                }),
                (0, h.jsx)("input", {
                  type: "text",
                  ref: E,
                  placeholder: t.formatMessage({
                    id: "workspaceSettings.groups.searchMembers",
                    defaultMessage: "Filter by name or email...",
                  }),
                  className: (0, u.default)(
                    "bg-token-surface-primary dark:bg-token-surface-secondary border-none px-0 transition-width duration-300 ease-in-out focus:ring-0",
                    a ? "w-64" : "w-0"
                  ),
                  value: p,
                  onChange: () => {
                    var e, s;
                    b(0),
                      f(
                        null !==
                          (e =
                            null === (s = E.current) || void 0 === s
                              ? void 0
                              : s.value) && void 0 !== e
                          ? e
                          : ""
                      );
                  },
                }),
              ],
            }),
            (0, h.jsxs)(v.Z.Root, {
              className: "min-w-full",
              children: [
                (0, h.jsxs)(v.Z.Header, {
                  children: [
                    (0, h.jsx)(v.Z.HeaderCell, {
                      children: (0, h.jsx)(x.Z, {
                        id: "workspaceSettings.groups.memberName",
                        defaultMessage: "Name",
                      }),
                    }),
                    (0, h.jsx)(v.Z.HeaderCell, {
                      children: (0, h.jsx)(x.Z, {
                        id: "workspaceSettings.groups.email",
                        defaultMessage: "Email",
                      }),
                    }),
                    (0, h.jsx)(v.Z.HeaderCell, {}),
                  ],
                }),
                (0, h.jsx)(v.Z.Body, {
                  className: C || M ? "opacity-50" : void 0,
                  children:
                    null == k
                      ? (0, h.jsx)(v.Z.Row, {
                          children: (0, h.jsx)(v.Z.Cell, {
                            colSpan: 3,
                            children: (0, h.jsx)(N.Z, {}),
                          }),
                        })
                      : 0 === k.items.length
                        ? (0, h.jsx)(v.Z.Row, {
                            children: (0, h.jsx)(v.Z.Cell, {
                              colSpan: 3,
                              children: (0, h.jsx)(x.Z, {
                                id: "workspaceSettings.groups.noMembers",
                                defaultMessage: "No members",
                              }),
                            }),
                          })
                        : k.items.map((e) =>
                            (0, h.jsxs)(
                              v.Z.Row,
                              {
                                children: [
                                  (0, h.jsx)(v.Z.Cell, {
                                    children: (0, h.jsx)("span", {
                                      className: "ml-3",
                                      children: e.name,
                                    }),
                                  }),
                                  (0, h.jsx)(v.Z.Cell, { children: e.email }),
                                  (0, h.jsx)(v.Z.Cell, {
                                    textAlign: "right",
                                    children: (0, h.jsxs)(Z.Z.Root, {
                                      children: [
                                        (0, h.jsx)(Z.Z.Trigger, {
                                          className: "-my-2",
                                          children: (0, h.jsx)(m.K9M, {
                                            className: "icon-sm",
                                          }),
                                        }),
                                        (0, h.jsx)(Z.Z.Portal, {
                                          children: (0, h.jsx)(Z.Z.Content, {
                                            children: (0, h.jsx)(Z.Z.Item, {
                                              onClick: () => T(e.id),
                                              children: (0, h.jsx)(x.Z, {
                                                id: "workspaceSettings.groups.removeMember",
                                                defaultMessage: "Remove member",
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              },
                              e.id
                            )
                          ),
                }),
              ],
            }),
            (0, h.jsxs)("div", {
              className: "my-2 flex flex-row justify-center",
              children: [
                (0, h.jsx)(y.z, {
                  color: "neutral",
                  onClick: () => P(!0),
                  children: (0, h.jsx)(x.Z, {
                    id: "workspaceSettings.groups.addMemberButton",
                    defaultMessage: "Add member",
                  }),
                }),
                (0, h.jsx)("div", { className: "grow" }),
                k &&
                  k.items.length > 0 &&
                  (0, h.jsx)(S.t, {
                    currentPage: w,
                    onChangeIndex: (e) => {
                      b(e);
                    },
                    length: Math.ceil(k.total / 10),
                  }),
              ],
            }),
            O &&
              (0, h.jsx)(G, {
                isOpen: !0,
                onClose: () => {
                  q.invalidateQueries({ queryKey: [s, "groups"] }), P(!1);
                },
                group: r,
              }),
          ],
        });
      }
      function R(e, s) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          s &&
            (t = t.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            r.push.apply(r, t);
        }
        return r;
      }
      function K(e) {
        for (var s = 1; s < arguments.length; s++) {
          var r = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? R(Object(r), !0).forEach(function (s) {
                (0, t.Z)(e, s, r[s]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : R(Object(r)).forEach(function (s) {
                  Object.defineProperty(
                    e,
                    s,
                    Object.getOwnPropertyDescriptor(r, s)
                  );
                });
        }
        return e;
      }
      function A(e) {
        let { workspaceId: s } = e,
          r = (0, j.Z)(),
          t = (0, l.NL)(),
          { 0: a, 1: d } = (0, g.useState)(""),
          { 0: p, 1: m } = (0, g.useState)(0),
          {
            data: f,
            isLoading: w,
            isPlaceholderData: Z,
          } = (0, o.a)({
            queryKey:
              "" === a
                ? [s, "groups", "page-".concat(p)]
                : [s, "groups", "filtered", a, "page-".concat(p)],
            queryFn: () =>
              n.Z.getWorkspaceGroups(s, { query: a, offset: 10 * p }),
            placeholderData: i.Wk,
          }),
          { 0: b, 1: k } = (0, g.useState)(!1),
          M = (e) => {
            e && (m(0), d("")), k(e);
          },
          { mutateAsync: O } = (0, c.D)({
            mutationFn: async (e) => {
              let { workspaceId: s, name: r } = e;
              return await n.Z.createWorkspaceGroup(s, r);
            },
            onMutate: (e) => {
              let { workspaceId: s, name: r } = e;
              return (
                t.cancelQueries({ queryKey: [s, "groups"] }),
                t.setQueryData(
                  [s, "groups", "page-0"],
                  (e) => (
                    e || (e = { limit: 10, offset: 0, items: [], total: 0 }),
                    K(
                      K({}, e),
                      {},
                      {
                        items: [
                          {
                            id: "new",
                            name: r,
                            num_members: 0,
                            created_time: "",
                          },
                          ...e.items.slice(0, 9),
                        ],
                      }
                    )
                  )
                ),
                { previousGroups: f }
              );
            },
            onError: (e, r, a) => {
              t.setQueryData(
                [s, "groups", "page-0"],
                null == a ? void 0 : a.previousGroups
              ),
                t.invalidateQueries({ queryKey: [s, "groups"] });
            },
            onSettled: async () => {
              await new Promise((e) => setTimeout(e, 1500)),
                t.invalidateQueries({ queryKey: [s, "groups"] });
            },
          }),
          { mutateAsync: P } = (0, c.D)({
            mutationFn: async (e) => await n.Z.deleteWorkspaceGroup(s, e),
            onMutate: (e) => (
              t.cancelQueries({ queryKey: [s, "groups", "page-0"] }),
              t.setQueryData(
                [s, "groups", "page-0"],
                (s) => (
                  s || (s = { items: [] }),
                  K(K({}, s), {}, { items: s.items.filter((s) => s.id !== e) })
                )
              ),
              { previousGroups: f }
            ),
            onError: (e, r, a) => {
              t.setQueryData(
                [s, "groups", "page-0"],
                null == a ? void 0 : a.previousGroups
              ),
                t.invalidateQueries({ queryKey: [s, "groups"] });
            },
            onSettled: async () => {
              await new Promise((e) => setTimeout(e, 1500)),
                t.invalidateQueries({ queryKey: [s, "groups"] });
            },
          });
        return (0, h.jsxs)(h.Fragment, {
          children: [
            (0, h.jsxs)("div", {
              className: "mb-3 mt-6 flex flex-row justify-between gap-2",
              children: [
                (0, h.jsx)(C, {
                  className: "max-w-12",
                  inputClassName: "w-full",
                  value: a,
                  onChange: (e) => {
                    d(e.target.value), m(0);
                  },
                  placeholder: r.formatMessage({
                    id: "workspaceSettings.groups.search",
                    defaultMessage: "Search group name",
                  }),
                }),
                (0, h.jsx)(y.z, {
                  onClick: () => M(!0),
                  children: (0, h.jsx)(x.Z, {
                    id: "workspaceSettings.groups.create",
                    defaultMessage: "Create group",
                  }),
                }),
              ],
            }),
            (0, h.jsxs)("div", {
              children: [
                (0, h.jsxs)(v.Z.Root, {
                  className: "min-w-full",
                  children: [
                    (0, h.jsxs)(v.Z.Header, {
                      children: [
                        (0, h.jsx)(v.Z.HeaderCell, {}),
                        (0, h.jsx)(v.Z.HeaderCell, {
                          children: (0, h.jsx)(x.Z, {
                            id: "workspaceSettings.groups.groupName",
                            defaultMessage: "Group name",
                          }),
                        }),
                        (0, h.jsx)(v.Z.HeaderCell, {
                          children: (0, h.jsx)(x.Z, {
                            id: "workspaceSettings.groups.members",
                            defaultMessage: "Members",
                          }),
                        }),
                        (0, h.jsx)(v.Z.HeaderCell, {
                          children: (0, h.jsx)(x.Z, {
                            id: "workspaceSettings.groups.created",
                            defaultMessage: "Created",
                          }),
                        }),
                        (0, h.jsx)(v.Z.HeaderCell, {}),
                      ],
                    }),
                    (0, h.jsxs)(v.Z.Body, {
                      className: (0, u.default)((w || Z) && "opacity-50"),
                      children: [
                        b &&
                          (0, h.jsx)(I, {
                            group: "new",
                            workspaceId: s,
                            onChangeName: async (e) => {
                              "" !== e.trim() &&
                                (O({ workspaceId: s, name: e }), M(!1));
                            },
                            onDelete: () => null,
                          }),
                        null == f
                          ? (0, h.jsx)(v.Z.Row, {
                              children: (0, h.jsx)(v.Z.Cell, {
                                colSpan: 5,
                                textAlign: "center",
                                children: (0, h.jsx)(N.Z, {}),
                              }),
                            })
                          : 0 === f.items.length
                            ? (0, h.jsx)(v.Z.Row, {
                                children: (0, h.jsx)(v.Z.Cell, {
                                  colSpan: 5,
                                  textAlign: "center",
                                  children:
                                    "" === a
                                      ? (0, h.jsx)(x.Z, {
                                          id: "workspaceSettings.groups.noGroups",
                                          defaultMessage: "No groups found.",
                                        })
                                      : (0, h.jsx)(x.Z, {
                                          id: "workspaceSettings.groups.noGroupsWithFIlter",
                                          defaultMessage:
                                            "No groups found. Try changing the search query.",
                                        }),
                                }),
                              })
                            : f.items.map((e) =>
                                (0, h.jsx)(
                                  I,
                                  {
                                    group: e,
                                    workspaceId: s,
                                    onDelete: P,
                                    onChangeName: async (r) => {
                                      await n.Z.updateWorkspaceGroup(
                                        s,
                                        e.id,
                                        r
                                      ),
                                        await new Promise((e) =>
                                          setTimeout(e, 400)
                                        ),
                                        t.invalidateQueries({
                                          queryKey: [s, "groups"],
                                        });
                                    },
                                  },
                                  e.id
                                )
                              ),
                      ],
                    }),
                  ],
                }),
                f &&
                  (0, h.jsx)("div", {
                    className: "flex flex-row justify-center",
                    children: (0, h.jsx)(S.t, {
                      length: Math.ceil(f.total / 10),
                      currentPage: Math.min(p, Math.ceil(f.total / 10)),
                      onChangeIndex: (e) => m(e),
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      function H(e) {
        let { currentWorkspaceId: s } = e,
          r = (0, j.Z)();
        return (0, h.jsxs)(h.Fragment, {
          children: [
            (0, h.jsx)(p(), {
              children: (0, h.jsx)("title", {
                children: r.formatMessage(B.title),
              }),
            }),
            (0, h.jsx)(a.yG, {
              title: r.formatMessage(B.title),
              subtitle: (0, h.jsx)(x.Z, {
                id: "workspaceSettings.groups.subtitle",
                defaultMessage:
                  "Only workspace owners can view and change these settings",
              }),
            }),
            (0, h.jsx)(a.hb, {
              showSpinner: !1,
              children: (0, h.jsx)(A, { workspaceId: s }),
            }),
          ],
        });
      }
      function I(e) {
        let { group: s, workspaceId: r, onChangeName: t, onDelete: a } = e,
          n = (0, j.Z)(),
          { 0: l, 1: o } = (0, g.useState)(!1),
          { 0: i, 1: c } = (0, g.useState)("new" === s ? "" : s.name),
          { 0: u, 1: d } = (0, g.useState)(!1),
          { 0: p, 1: y } = (0, g.useState)("new" === s),
          { 0: b, 1: S } = (0, g.useState)(null),
          C = (0, g.useRef)(null);
        (0, g.useEffect)(() => {
          if ("new" === s || p) {
            var e;
            null === (e = C.current) || void 0 === e || e.focus();
          }
        }, [s, p]);
        let N = async () => {
          if ("" === i.trim()) {
            c("new" === s ? "" : s.name), y(!1), d(!1);
            return;
          }
          t && (d(!0), await t(i)), d(!1), y(!1);
        };
        return (0, h.jsxs)(h.Fragment, {
          children: [
            (0, h.jsxs)(v.Z.Row, {
              onClick: () => o((e) => !e),
              className: "hover:bg-token-surface-secondary cursor-pointer",
              children: [
                (0, h.jsx)(v.Z.Cell, {
                  children: (0, h.jsx)(w, { checked: l }),
                }),
                (0, h.jsx)(v.Z.Cell, {
                  children:
                    "new" === s || p
                      ? (0, h.jsx)(k.Z, {
                          ref: C,
                          name: "newGroupName",
                          value: i,
                          disabled: u,
                          placeholder: n.formatMessage({
                            id: "workspaceSettings.groups.groupNamePlaceholder",
                            defaultMessage: "New group name...",
                          }),
                          onChange: (e) => c(e.target.value),
                          onBlur: () => {
                            i !== ("new" === s ? "" : s.name) && N();
                          },
                          onPressEnter: N,
                        })
                      : s.name,
                }),
                (0, h.jsx)(v.Z.Cell, {
                  children: (0, h.jsx)(x.Z, {
                    id: "workspaceSettings.groups.memberCount",
                    defaultMessage: "{count} members",
                    values: { count: "new" === s ? "0" : s.num_members },
                  }),
                }),
                (0, h.jsx)(v.Z.Cell, {
                  children:
                    "new" !== s && s.created_time
                      ? (0, h.jsx)(f.Ji, {
                          value: s.created_time,
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "",
                }),
                (0, h.jsx)(v.Z.Cell, {
                  textAlign: "right",
                  children:
                    "new" !== s &&
                    (0, h.jsxs)(Z.Z.Root, {
                      children: [
                        (0, h.jsx)(Z.Z.Trigger, {
                          className: "-my-2",
                          children: (0, h.jsx)(m.K9M, { className: "icon-sm" }),
                        }),
                        (0, h.jsx)(Z.Z.Portal, {
                          children: (0, h.jsxs)(Z.Z.Content, {
                            children: [
                              (0, h.jsx)(Z.Z.Item, {
                                onClick: (e) => {
                                  y(!0),
                                    setTimeout(() => {
                                      var e;
                                      null === (e = C.current) ||
                                        void 0 === e ||
                                        e.focus();
                                    }, 120),
                                    e.stopPropagation();
                                },
                                children: (0, h.jsx)(x.Z, {
                                  id: "workspaceSettings.groups.changeName",
                                  defaultMessage: "Edit name",
                                }),
                              }),
                              (0, h.jsx)(Z.Z.Item, {
                                onClick: (e) => {
                                  S(s), e.stopPropagation();
                                },
                                children: (0, h.jsx)(x.Z, {
                                  id: "workspaceSettings.groups.edit",
                                  defaultMessage: "Delete group",
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
            l &&
              "new" !== s &&
              (0, h.jsx)(v.Z.Row, {
                children: (0, h.jsx)(v.Z.Cell, {
                  colSpan: 5,
                  className: "pl-8",
                  children: (0, h.jsx)(T, { group: s, workspaceId: r }),
                }),
              }),
            b &&
              (0, h.jsx)(W, { group: b, onDelete: a, onClose: () => S(null) }),
          ],
        });
      }
      function W(e) {
        let { group: s, onDelete: r, onClose: t } = e,
          a = (0, j.Z)().formatMessage(
            {
              id: "workspaceSettings.groups.deleteGroupTitle",
              defaultMessage: "Delete group {groupName}?",
            },
            { groupName: s.name }
          );
        return (0, h.jsx)(b.Z, {
          type: "warning",
          isOpen: !0,
          onClose: t,
          title: a,
          showCloseButton: !0,
          primaryButton: (0, h.jsx)(y.z, {
            color: "danger",
            onClick: async () => {
              r(s.id), t();
            },
            children: (0, h.jsx)(x.Z, {
              id: "workspaceSettings.groups.confirmDelete",
              defaultMessage: "Delete",
            }),
          }),
          secondaryButton: (0, h.jsx)(y.z, {
            onClick: t,
            color: "neutral",
            children: (0, h.jsx)(x.Z, {
              id: "workspaceSettings.groups.cancelDelete",
              defaultMessage: "Cancel",
            }),
          }),
          children: (0, h.jsx)("p", {
            children: (0, h.jsx)(x.Z, {
              id: "workspaceSettings.groups.deleteGroupWarning",
              defaultMessage:
                'Are you sure you want to delete the "{groupName}" group? This action cannot be undone.',
              values: { groupName: s.name },
            }),
          }),
        });
      }
      let B = (0, f.vU)({
        title: { id: "admin.groupsSettings.title", defaultMessage: "Groups" },
      });
      function F(e, s) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          s &&
            (t = t.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            r.push.apply(r, t);
        }
        return r;
      }
      var z = !0;
      function L(e) {
        return (0, h.jsx)(
          H,
          (function (e) {
            for (var s = 1; s < arguments.length; s++) {
              var r = null != arguments[s] ? arguments[s] : {};
              s % 2
                ? F(Object(r), !0).forEach(function (s) {
                    (0, t.Z)(e, s, r[s]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : F(Object(r)).forEach(function (s) {
                      Object.defineProperty(
                        e,
                        s,
                        Object.getOwnPropertyDescriptor(r, s)
                      );
                    });
            }
            return e;
          })({}, e)
        );
      }
      L.getLayout = function (e) {
        return (0, h.jsx)(a.ZP, {
          mobilePageTitle: "Groups",
          requireAdminPrivileges: !0,
          children: e,
        });
      };
    },
    96654: function (e, s, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/groups",
        function () {
          return r(1024);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9112, 2888, 9774, 179], function () {
      return e((e.s = 96654));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=groups-9574b97b2941ba5c.js.map
