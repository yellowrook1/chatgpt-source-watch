(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6161],
  {
    30069: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return _;
          },
        });
      var s = t(50134),
        r = t(36112),
        c = t(4399),
        l = t.n(c),
        o = t(43753),
        i = t(3554),
        n = t(73700),
        d = t(66027),
        u = t(7144),
        p = t(73582),
        f = t(40318),
        h = t(61888),
        v = t(21988),
        k = t.n(v),
        m = t(70079),
        x = t(70671),
        j = t(32004),
        b = t(94968),
        w = t(90387),
        g = t(21120),
        W = t(35250);
      function N(e, a) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          a &&
            (s = s.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            t.push.apply(t, s);
        }
        return t;
      }
      function P(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? N(Object(t), !0).forEach(function (a) {
                (0, r.Z)(e, a, t[a]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : N(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(t, a)
                  );
                });
        }
        return e;
      }
      function y() {
        var e = (0, p.aF)(),
          a = (0, u.t)(),
          t = (0, u.rk)().data,
          r = (0, m.useState)(!1),
          c = r[0],
          v = r[1],
          b = null == t ? void 0 : t.accountItems,
          N = null == a ? void 0 : a.id,
          y =
            null == b
              ? void 0
              : b.find(function (e) {
                  return e.id === N;
                }),
          O =
            null == b
              ? void 0
              : b.filter(function (e) {
                  return !e.isDeactivated();
                }),
          _ = (0, x.Z)();
        return null != a && y && O
          ? (0, W.jsx)(g.Z, {
              type: "success",
              onClose: h.noop,
              isOpen: null != a || null != t,
              className: "",
              title: (0, W.jsx)("span", {
                className: "text-lg",
                children: (0, W.jsx)(j.Z, P({}, M.workspaceDeactivated)),
              }),
              children: (0, W.jsxs)("div", {
                className: "flex flex-col items-center justify-center gap-4",
                children: [
                  (0, W.jsxs)("div", {
                    className: "flex w-full items-center gap-4",
                    children: [
                      (0, W.jsx)(w.B0, {
                        src: y.data.profilePictureUrl,
                        size: "large",
                      }),
                      (0, W.jsx)("div", {
                        className: "font-medium",
                        children: y.data.name,
                      }),
                    ],
                  }),
                  (0, W.jsxs)("div", {
                    children: [
                      (0, W.jsx)("h3", {
                        className: "mb-2 text-base font-bold",
                        children: (0, W.jsx)(
                          j.Z,
                          P({}, M.workspaceDeactivated)
                        ),
                      }),
                      (0, W.jsxs)("ul", {
                        className: "list-disc pl-5",
                        children: [
                          (0, W.jsx)("li", {
                            className: "mb-1",
                            children: (0, W.jsx)(
                              j.Z,
                              P({}, M.chatHistoryUnavailable)
                            ),
                          }),
                          (0, W.jsx)("li", {
                            children: (0, W.jsx)(
                              j.Z,
                              P({}, M.otherWorkspacesAvailable)
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, W.jsx)("hr", {
                    className: "w-full border-token-border-light",
                  }),
                  (0, W.jsx)("div", {
                    className: "w-full justify-center",
                    children:
                      O.length > 0
                        ? (0, W.jsxs)(W.Fragment, {
                            children: [
                              (0, W.jsx)("h3", {
                                className: "mb-2 text-base font-bold",
                                children: (0, W.jsx)(
                                  j.Z,
                                  P({}, M.selectWorkspace)
                                ),
                              }),
                              (0, W.jsx)(o.b, { data: O }),
                            ],
                          })
                        : (0, W.jsxs)("div", {
                            className: "flex flex-col gap-6",
                            children: [
                              (0, W.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                  (0, W.jsx)("h3", {
                                    className: "text-base font-bold",
                                    children: (0, W.jsx)(
                                      j.Z,
                                      P({}, M.createPersonalWorkspace)
                                    ),
                                  }),
                                  (0, W.jsx)(
                                    j.Z,
                                    P({}, M.deactivatedWorkspaceReason)
                                  ),
                                ],
                              }),
                              (0, W.jsxs)("div", {
                                className: "flex w-full items-center gap-4",
                                children: [
                                  e &&
                                    e.picture &&
                                    (0, W.jsx)(k(), {
                                      alt: "Profile",
                                      src: e.picture,
                                      width: w.EF.medium,
                                      height: w.EF.medium,
                                      className:
                                        "flex items-center justify-center rounded-sm",
                                    }),
                                  (0, W.jsx)("span", {
                                    className: "font-medium",
                                    children:
                                      e &&
                                      (0, W.jsx)("span", { children: e.name }),
                                  }),
                                ],
                              }),
                              (0, W.jsx)("div", {
                                className: "ml-auto",
                                children: (0, W.jsx)(i.mH, {
                                  title: _.formatMessage(
                                    M.createPersonalWorkspaceButton
                                  ),
                                  loading: c,
                                  onClick: (0, s.Z)(
                                    l().mark(function e() {
                                      return l().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                v(!0),
                                                (e.next = 3),
                                                d.ZP.upsertPersonalWorkspace()
                                              );
                                            case 3:
                                              (0, u.eV)(n.b), (0, f.M)();
                                            case 5:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  ),
                                  color: "primary",
                                  className: "ml-4",
                                }),
                              }),
                            ],
                          }),
                  }),
                ],
              }),
            })
          : (0, W.jsx)(W.Fragment, {});
      }
      var M = (0, b.vU)({
          workspaceDeactivated: {
            id: "deactivatedWorkspaceModal.workspaceDeactivated",
            defaultMessage: "Your workspace has been deactivated",
          },
          workspaceDeactivatedDesc: {
            id: "deactivatedWorkspaceModal.workspaceDeactivatedDesc",
            defaultMessage: "Your workspace has been deactivated.",
          },
          chatHistoryUnavailable: {
            id: "deactivatedWorkspaceModal.chatHistoryUnavailable",
            defaultMessage:
              "Your chat history and settings will not be available.",
          },
          otherWorkspacesAvailable: {
            id: "deactivatedWorkspaceModal.otherWorkspacesAvailable",
            defaultMessage:
              "You will still be able to use ChatGPT with the other workspaces associated with this email address.",
          },
          selectWorkspace: {
            id: "deactivatedWorkspaceModal.selectWorkspace",
            defaultMessage: "Select a workspace to continue",
          },
          createPersonalWorkspace: {
            id: "deactivatedWorkspaceModal.createPersonalWorkspace",
            defaultMessage: "Create a personal workspace to continue",
          },
          deactivatedWorkspaceReason: {
            id: "deactivatedWorkspaceModal.deactivatedWorkspaceReason",
            defaultMessage:
              "Because your workspace has been deactivated, you need to create a personal workspace to continue using ChatGPT.",
          },
          profileAlt: {
            id: "deactivatedWorkspaceModal.profileAlt",
            defaultMessage: "Profile",
          },
          createPersonalWorkspaceButton: {
            id: "deactivatedWorkspaceModal.createPersonalWorkspaceButton",
            defaultMessage: "Create a personal workspace",
          },
        }),
        O = t(10721);
      function _() {
        var e = (0, p.ec)(p.F_.workspaces),
          a = (0, u.t)(),
          t = (0, p.ec)(p.F_.workspaceId),
          s = e.find(function (e) {
            return e.id === t;
          }),
          r = (0, O.useRouter)();
        return ((0, m.useEffect)(
          function () {
            null == a || !a.data || (s && s.deactivated) || r.push("/");
          },
          [a, s, r]
        ),
        null == a || !a.data || (s && s.deactivated))
          ? (0, W.jsx)(y, {})
          : (0, W.jsx)("div", {});
      }
    },
    57263: function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/workspace/deactivated",
        function () {
          return t(30069);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 57263));
    }),
      (_N_E = e.O());
  },
]);
