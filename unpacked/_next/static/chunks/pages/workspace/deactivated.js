(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6161],
  {
    31493: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return M;
          },
        });
      var t = s(39827),
        c = s(10388),
        r = s(33925),
        l = s(28138),
        i = s(13038),
        o = s(24668),
        n = s(78e3),
        d = s(4635),
        u = s(61888),
        p = s(38540),
        f = s.n(p),
        h = s(70079),
        v = s(70671),
        j = s(32004),
        k = s(94968),
        m = s(65375),
        x = s(16244),
        b = s(60645),
        w = s(35250);
      function g(e, a) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          a &&
            (t = t.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            s.push.apply(s, t);
        }
        return s;
      }
      function W(e) {
        for (var a = 1; a < arguments.length; a++) {
          var s = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? g(Object(s), !0).forEach(function (a) {
                (0, t.Z)(e, a, s[a]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
              : g(Object(s)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(s, a)
                  );
                });
        }
        return e;
      }
      function y() {
        let e = (0, n.aF)(),
          a = (0, o.t)(),
          { data: s } = (0, o.rk)(),
          { 0: t, 1: p } = (0, h.useState)(!1),
          k = null == s ? void 0 : s.accountItems,
          g = null == a ? void 0 : a.id,
          y = null == k ? void 0 : k.find((e) => e.id === g),
          P = null == k ? void 0 : k.filter((e) => !e.isDeactivated()),
          M = (0, v.Z)();
        return null != a && y && P
          ? (0, w.jsx)(x.Z, {
              type: "success",
              onClose: u.noop,
              isOpen: null != a || null != s,
              className: "",
              title: (0, w.jsx)("span", {
                className: "text-lg",
                children: (0, w.jsx)(j.Z, W({}, N.workspaceDeactivated)),
              }),
              children: (0, w.jsxs)("div", {
                className: "flex flex-col items-center justify-center gap-4",
                children: [
                  (0, w.jsxs)("div", {
                    className: "flex w-full items-center gap-4",
                    children: [
                      (0, w.jsx)(m.B0, {
                        src: y.data.profilePictureUrl,
                        size: "large",
                      }),
                      (0, w.jsx)("div", {
                        className: "font-medium",
                        children: y.data.name,
                      }),
                    ],
                  }),
                  (0, w.jsxs)("div", {
                    children: [
                      (0, w.jsx)("h3", {
                        className: "mb-2 text-base font-bold",
                        children: (0, w.jsx)(
                          j.Z,
                          W({}, N.workspaceDeactivated)
                        ),
                      }),
                      (0, w.jsxs)("ul", {
                        className: "list-disc pl-5",
                        children: [
                          (0, w.jsx)("li", {
                            className: "mb-1",
                            children: (0, w.jsx)(
                              j.Z,
                              W({}, N.chatHistoryUnavailable)
                            ),
                          }),
                          (0, w.jsx)("li", {
                            children: (0, w.jsx)(
                              j.Z,
                              W({}, N.otherWorkspacesAvailable)
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, w.jsx)(b.b, {}),
                  (0, w.jsx)("div", {
                    className: "w-full justify-center",
                    children:
                      P.length > 0
                        ? (0, w.jsxs)(w.Fragment, {
                            children: [
                              (0, w.jsx)("h3", {
                                className: "mb-2 text-base font-bold",
                                children: (0, w.jsx)(
                                  j.Z,
                                  W({}, N.selectWorkspace)
                                ),
                              }),
                              (0, w.jsx)(c.b, { data: P }),
                            ],
                          })
                        : (0, w.jsxs)("div", {
                            className: "flex flex-col gap-6",
                            children: [
                              (0, w.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                  (0, w.jsx)("h3", {
                                    className: "text-base font-bold",
                                    children: (0, w.jsx)(
                                      j.Z,
                                      W({}, N.createPersonalWorkspace)
                                    ),
                                  }),
                                  (0, w.jsx)(
                                    j.Z,
                                    W({}, N.deactivatedWorkspaceReason)
                                  ),
                                ],
                              }),
                              (0, w.jsxs)("div", {
                                className: "flex w-full items-center gap-4",
                                children: [
                                  e &&
                                    e.picture &&
                                    (0, w.jsx)(f(), {
                                      alt: "Profile",
                                      src: e.picture,
                                      width: m.EF.medium,
                                      height: m.EF.medium,
                                      className:
                                        "flex items-center justify-center rounded-sm",
                                    }),
                                  (0, w.jsx)("span", {
                                    className: "font-medium",
                                    children:
                                      e &&
                                      (0, w.jsx)("span", { children: e.name }),
                                  }),
                                ],
                              }),
                              (0, w.jsx)("div", {
                                className: "ml-auto",
                                children: (0, w.jsx)(r.mH, {
                                  title: M.formatMessage(
                                    N.createPersonalWorkspaceButton
                                  ),
                                  loading: t,
                                  onClick: async () => {
                                    p(!0),
                                      await i.Z.upsertPersonalWorkspace(),
                                      (0, o.eV)(l.b),
                                      (0, d.M)();
                                  },
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
          : (0, w.jsx)(w.Fragment, {});
      }
      let N = (0, k.vU)({
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
      });
      var P = s(12366);
      function M() {
        let e = (0, n.ec)(n.F_.workspaces),
          a = (0, o.t)(),
          s = (0, n.ec)(n.F_.workspaceId),
          t = e.find((e) => e.id === s),
          c = (0, P.useRouter)();
        return ((0, h.useEffect)(() => {
          null == a || !a.data || (t && t.deactivated) || c.push("/");
        }, [a, t, c]),
        null == a || !a.data || (t && t.deactivated))
          ? (0, w.jsx)(y, {})
          : (0, w.jsx)("div", {});
      }
    },
    64788: function (e, a, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/workspace/deactivated",
        function () {
          return s(31493);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2888, 9774, 179], function () {
      return e((e.s = 64788));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=deactivated-fdc88467664bc4ad.js.map
