"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9112],
  {
    9112: function (e, t, a) {
      a.d(t, {
        hb: function () {
          return ej;
        },
        yG: function () {
          return eg;
        },
        ZP: function () {
          return ep;
        },
      });
      var r,
        s,
        n,
        i,
        o,
        l = a(73017),
        c = a(39827),
        d = a(25660),
        u = a(65375),
        p = a(41098),
        m = a(87106),
        f = a(47527),
        x = a(70079),
        g = a(76483),
        b = a(70671),
        j = a(94968),
        v = a(35250);
      function h(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(a), !0).forEach(function (t) {
                (0, c.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : h(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
        }
        return e;
      }
      function w(e) {
        let { onFileChange: t, className: a, message: r, mimeTypes: s } = e,
          n = (0, b.Z)(),
          i = null != r ? r : n.formatMessage(k.helpText),
          {
            open: o,
            getRootProps: l,
            getInputProps: c,
            isDragActive: d,
          } = (0, g.uI)(
            y(
              {
                disabled: !1,
                noClick: !0,
                onDropAccepted: (e) => {
                  if (e.length > 0) {
                    let a = e[0];
                    s && s.includes(a.type) && t(a);
                  }
                },
                onDropRejected: () => null,
                multiple: !1,
                maxSize: p.xC,
              },
              (0, m.Z8)(s)
            )
          );
        return (0, v.jsxs)(
          "div",
          y(
            y(
              {
                className:
                  "flex flex-col content-center justify-center gap-3 rounded border border-dashed px-6 py-16 text-center" +
                  (d
                    ? " border-green-600 bg-green-600 bg-opacity-10"
                    : "border-token-border-medium") +
                  " " +
                  (null != a ? a : ""),
              },
              l()
            ),
            {},
            {
              children: [
                (0, v.jsx)("input", y({}, c())),
                (0, v.jsx)("div", {
                  className: "text-center dark:text-white",
                  children: (0, v.jsx)("div", {
                    className: "inline-block",
                    children: (0, v.jsx)(f.tC, {}),
                  }),
                }),
                (0, v.jsx)("div", {
                  className: "text-center text-sm",
                  children: i,
                }),
                (0, v.jsx)("div", {
                  className:
                    "cursor-pointer text-center text-sm font-bold text-green-600",
                  onClick: () => {
                    o();
                  },
                  children: n.formatMessage(k.openFilePicker),
                }),
              ],
            }
          )
        );
      }
      let k = (0, j.vU)({
        helpText: {
          id: "FileUploadBox.helpText",
          defaultMessage: "Drop file here to upload",
        },
        openFilePicker: {
          id: "FileUploadBox.openFilePicker",
          defaultMessage: "Browse files",
        },
      });
      var P = a(47483),
        O = a(33925),
        N = a(16244),
        M = a(21643),
        Z = a(82429),
        E = a(36607),
        D = a(64085),
        A = a(65455),
        S = a(13038),
        F = a(18405),
        C = a(82473),
        B = a(25494),
        U = a(32004);
      function W(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? W(Object(a), !0).forEach(function (t) {
                (0, c.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : W(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
        }
        return e;
      }
      function _(e) {
        var t, a;
        let { workspace: r } = e,
          { 0: s, 1: n } = (0, x.useState)(
            null !== (t = null == r ? void 0 : r.name) && void 0 !== t ? t : ""
          ),
          { 0: i, 1: o } = (0, x.useState)(!1);
        !i &&
          r &&
          (o(!0),
          "" == s &&
            n(
              null !== (a = null == r ? void 0 : r.name) && void 0 !== a
                ? a
                : ""
            ));
        let { 0: l, 1: c } = (0, x.useState)(r.profilePictureUrl),
          { 0: p, 1: f } = (0, x.useState)(r.profilePictureId),
          g = (0, F.EV)(F.B.WorkspaceAppearance),
          j = (0, b.Z)(),
          { 0: h, 1: y } = (0, x.useState)(void 0);
        async function k(e) {
          let t = await (0, m.WI)(e, 2 * u.EF.workspaceAvatarPreview),
            a = (0, Z.W7)(t);
          y({
            tempId: a,
            file: t,
            status: M.X.Uploading,
            progress: 1,
            fileId: null,
            cdnUrl: null,
          }),
            (0, Z.lU)(a, t, j, d.Ei.ProfilePicture, {
              onFileCreated(e, t, a) {
                y((r) =>
                  "initial" !== r &&
                  (null == r ? void 0 : r.tempId) === e &&
                  r.status === M.X.Uploading
                    ? I(I({}, r), {}, { progress: 10, fileId: t, cdnUrl: a })
                    : r
                );
              },
              onFileUploadProgress(e, t) {
                y((a) =>
                  "initial" !== a &&
                  (null == a ? void 0 : a.tempId) === e &&
                  a.status === M.X.Uploading
                    ? I(I({}, a), {}, { progress: t })
                    : a
                );
              },
              onFileUploaded(e, t, a) {
                y((t) =>
                  "initial" !== t && t && t.cdnUrl && t.tempId === e
                    ? (S.Z.getFileDownloadLink(t.fileId).then((e) => {
                        e.status === d.KF.Success &&
                          (f(t.fileId), c(e.download_url));
                      }),
                      I(
                        I({}, t),
                        {},
                        {
                          status: M.X.Ready,
                          progress: 100,
                          fileSpec: I(
                            {
                              name: t.file.name,
                              id: t.fileId,
                              size: t.file.size,
                            },
                            null != a ? a : {}
                          ),
                        }
                      ))
                    : t
                );
              },
              onError(e) {
                y((t) => {
                  if (
                    "initial" !== t &&
                    (null == t ? void 0 : t.tempId) === e
                  ) {
                    f(void 0), c(void 0), K(null);
                    return;
                  }
                  return t;
                });
              },
            });
        }
        let W = (function (e) {
            let t = (0, C.NL)(),
              a = (0, b.Z)();
            return (0, B.D)({
              mutationFn: (t) => {
                let { name: r, profilePictureId: s, profilePictureUrl: n } = t;
                return S.Z.patchWorkspace({
                  workspaceId: e,
                  name: r,
                  profile_picture_id: s,
                  profile_picture_url: n,
                }).catch((e) => {
                  A.m.danger(
                    a.formatMessage(R.saveError, { error: e.message })
                  );
                });
              },
              onSuccess: () => {
                t.invalidateQueries({ queryKey: ["account-status"] });
              },
            });
          })(r.id),
          _ = (0, v.jsx)(O.ZP.Button, {
            color: "primary",
            disabled:
              ("initial" !== h && void 0 !== h && h.status !== M.X.Ready) ||
              ("initial" !== h &&
                void 0 !== h &&
                h.status === M.X.Ready &&
                !l) ||
              W.isPending ||
              0 === s.trim().length,
            onClick: async () => {
              W.mutate({ name: s, profilePictureId: p, profilePictureUrl: l }),
                F.vm.closeModal(F.B.WorkspaceAppearance);
            },
            title: j.formatMessage(R.modalSubmit),
          }),
          T = (0, v.jsx)(O.ZP.Button, {
            onClick: () => {
              y(void 0),
                f(r.profilePictureId),
                c(r.profilePictureUrl),
                F.vm.closeModal(F.B.WorkspaceAppearance);
            },
            title: j.formatMessage(R.modalCancel),
          }),
          { 0: L, 1: K } = (0, x.useState)(null);
        return (
          (0, x.useEffect)(() => {
            if ("initial" !== h && void 0 != h && null == L) {
              let e = new FileReader();
              e.addEventListener("load", () => {
                let t = e.result;
                "string" == typeof t && K(t);
              }),
                e.readAsDataURL(h.file);
            }
          }, [h, L]),
          (0, v.jsxs)(N.Z, {
            isOpen: g,
            onClose: () => F.vm.closeModal(F.B.WorkspaceAppearance),
            showCloseButton: !0,
            primaryButton: _,
            secondaryButton: T,
            type: "danger",
            title: j.formatMessage(R.modalTitle),
            children: [
              (0, v.jsxs)("div", {
                className: "mb-4 flex-wrap",
                children: [
                  (0, v.jsx)("label", {
                    htmlFor: "workspace-name",
                    className: "block pb-1 font-medium text-token-text-primary",
                    children: (0, v.jsx)(U.Z, I({}, R.workspaceName)),
                  }),
                  (0, v.jsx)("p", {
                    className: "font-base text-sm text-token-text-secondary",
                    children: (0, v.jsx)(
                      U.Z,
                      I({}, R.workspaceNameDescription)
                    ),
                  }),
                ],
              }),
              (0, v.jsx)("div", {
                className: "mb-4",
                children: (0, v.jsx)(E.Z, {
                  type: "text",
                  name: "workspace-name",
                  value: s,
                  onChange: (e) => n(e.target.value),
                  maxLength: 64,
                }),
              }),
              (0, v.jsxs)("div", {
                className: "mb-4 flex-wrap",
                children: [
                  (0, v.jsx)("label", {
                    htmlFor: "workspace-avatar",
                    className: "block pb-1 font-medium text-token-text-primary",
                    children: (0, v.jsx)(U.Z, I({}, R.workspaceAvatar)),
                  }),
                  (0, v.jsx)("p", {
                    className: "font-base text-sm text-token-text-secondary",
                    children: j.formatMessage(R.workspaceAvatarDescription, {
                      size: 2 * u.EF.workspaceAvatarPreview,
                    }),
                  }),
                ],
              }),
              (0, v.jsxs)("div", {
                className: "mb-4 flex-wrap text-center",
                children: [
                  l
                    ? (0, v.jsxs)("div", {
                        className: "relative mb-3 inline-flex",
                        children: [
                          (0, v.jsx)(u.B0, {
                            src: l,
                            size: "workspaceAvatarPreview",
                          }),
                          (0, v.jsx)("div", {
                            className: "absolute -right-1 -top-1",
                            children: (0, v.jsx)(z, {
                              onClick: () => {
                                f(null), c(null), y(void 0), K(null);
                              },
                            }),
                          }),
                        ],
                      })
                    : void 0 != h && "initial" !== h && L
                      ? (0, v.jsx)("div", {
                          className: "flex flex-col justify-center text-center",
                          children: (0, v.jsxs)("div", {
                            className: "relative mb-3 text-center",
                            children: [
                              (0, v.jsx)(u.B0, {
                                src: URL.createObjectURL(h.file),
                                size: "workspaceAvatarPreview",
                              }),
                              (0, v.jsx)("div", {
                                className:
                                  "absolute inset-0 flex items-center justify-center text-white",
                                children: (0, v.jsx)(P.Z, {
                                  percentage: h.progress,
                                  className: "h-6 w-6",
                                }),
                              }),
                            ],
                          }),
                        })
                      : (0, v.jsx)(w, {
                          onFileChange: (e) => {
                            k(e);
                          },
                          mimeTypes: m.KL,
                        }),
                  (0, v.jsx)(D.Z, {
                    children: j.formatMessage(R.propagationWarning),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function z(e) {
        let { onClick: t } = e;
        return (0, v.jsx)("div", {
          className:
            " flex h-6 w-6 cursor-pointer flex-row flex-wrap content-center justify-center rounded-full border-2 border-white bg-black text-white",
          onClick: t,
          children: (0, v.jsx)(f.Ls, { className: "h-3 w-3" }),
        });
      }
      let R = (0, j.vU)({
        modalTitle: {
          id: "workspaceAppearanceModal.title",
          defaultMessage: "Workspace appearance",
        },
        modalSubmit: {
          id: "workspaceAppearanceModal.submit",
          defaultMessage: "Save",
        },
        modalCancel: {
          id: "workspaceAppearanceModal.cancel",
          defaultMessage: "Cancel",
        },
        workspaceName: {
          id: "workspaceAppearanceModal.workspaceName",
          defaultMessage: "Workspace name",
        },
        workspaceNameDescription: {
          id: "workspaceAppearanceModal.workspaceNameDescription",
          defaultMessage: "Update the name of the workspace.",
        },
        workspaceAvatar: {
          id: "workspaceAppearanceModal.workspaceAvatar",
          defaultMessage: "Workspace image",
        },
        workspaceAvatarDescription: {
          id: "workspaceAppearanceModal.workspaceAvatarDescription",
          defaultMessage:
            "Upload a JPEG or PNG workspace image for your team. (Minimum {size}\xd7{size}px recommended.)",
        },
        propagationWarning: {
          id: "workspaceAppearanceModal.propagationWarning",
          defaultMessage:
            "Changes to the workspace name and image may take some time to take effect.",
        },
        saveError: {
          id: "workspaceAppearanceModal.saveError",
          defaultMessage: "Failed to save workspace appearance",
        },
      });
      var T = a(68832),
        L = a(22933),
        K = a(42005),
        G = a(24605),
        X = a(26623),
        q = a(24668),
        Q = a(78e3),
        J = a(27282),
        $ = a(19841),
        H = a(12366),
        V = a(1454),
        Y = a(21389),
        ee = a(48290),
        et = a(7557),
        ea = a(82734),
        er = a(32163);
      function es(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function en(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? es(Object(a), !0).forEach(function (t) {
                (0, c.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : es(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
        }
        return e;
      }
      function ei(e) {
        let { accountId: t, subscription: a } = e,
          r = (0, b.Z)(),
          s = (0, ea.wK)(t),
          { 0: n, 1: i } = (0, x.useState)(!1),
          o = (0, er.Gk)(t),
          l = async () => {
            i(!0);
            try {
              await s.mutateAsync(t);
            } catch (e) {
              A.m.warning(r.formatMessage(eo.errorRenewingSubscription), {
                hasCloseButton: !0,
              });
            } finally {
              i(!1);
            }
          };
        return (0, v.jsx)("div", {
          className: "bg-token-main-surface-secondary",
          children: (0, v.jsxs)("div", {
            className:
              "mx-auto flex w-full max-w-5xl items-center justify-between px-2 py-4 md:px-6 lg:px-10 lg:py-6",
            children: [
              (0, v.jsxs)("div", {
                className: "mx-2 flex-grow md:mx-4",
                children: [
                  (0, v.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                      (0, v.jsx)(ee.FE, {
                        className: "mr-4 hidden text-orange-500 md:block",
                      }),
                      (0, v.jsx)("p", {
                        className: "text-lg font-semibold",
                        children: (0, v.jsx)(
                          U.Z,
                          en({}, eo.workspaceWillBeDeactivated)
                        ),
                      }),
                    ],
                  }),
                  null != a.active_until &&
                    (0, v.jsx)("p", {
                      className: "md:ml-8",
                      children: (0, v.jsx)(
                        U.Z,
                        en(
                          en({}, eo.retainAccessUntil),
                          {},
                          { values: { expiryDate: new Date(a.active_until) } }
                        )
                      ),
                    }),
                ],
              }),
              o &&
                (0, v.jsx)(et.z, {
                  color: "primary",
                  onClick: l,
                  loading: n,
                  children: (0, v.jsx)(U.Z, en({}, eo.reactivateBtn)),
                }),
            ],
          }),
        });
      }
      let eo = (0, j.vU)({
        retainAccessUntil: {
          id: "adminPage.retainAccessUntil",
          defaultMessage:
            "You will retain access to the workspace until the end of your billing cycle on {expiryDate, date, long}.",
        },
        workspaceWillBeDeactivated: {
          id: "adminPage.workspaceWillBeDeactivated",
          defaultMessage: "This workspace will be deactivated.",
        },
        reactivateBtn: {
          id: "adminPage.reactivateBtn",
          defaultMessage: "Reactivate",
        },
        errorRenewingSubscription: {
          id: "adminPage.errorRenewingSubscription",
          defaultMessage: "There was an error reactivating your subscription.",
        },
      });
      function el(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function ec(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? el(Object(a), !0).forEach(function (t) {
                (0, c.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : el(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
        }
        return e;
      }
      function ed(e) {
        let { route: t, icon: a, name: r, upsellEnterprise: s = !1 } = e,
          n = (0, H.useRouter)();
        return s
          ? (0, v.jsx)(T.u, {
              label: (0, v.jsx)(U.Z, ec({}, ev.availableForEnterprise)),
              side: "right",
              children: (0, v.jsxs)(L.ZB, {
                $as: "button",
                className: (0, $.default)(
                  "w-full rounded text-left",
                  "hover:bg-token-sidebar-surface-secondary"
                ),
                children: [
                  (0, v.jsx)(V.UIZ, {
                    className: "icon-sm shrink-0 text-token-text-secondary",
                  }),
                  (0, v.jsx)("span", {
                    className: "text-token-text-secondary",
                    children: (0, v.jsx)(U.Z, ec({}, r)),
                  }),
                ],
              }),
            })
          : (0, v.jsxs)(L.ZB, {
              $as: "button",
              className: (0, $.default)(
                "w-full rounded text-left hover:bg-token-sidebar-surface-secondary",
                n.route === t && "bg-token-sidebar-surface-secondary"
              ),
              onClick: (e) => {
                n.push(t), e.stopPropagation();
              },
              children: [a, (0, v.jsx)(U.Z, ec({}, r))],
            });
      }
      function eu(e) {
        let { workspace: t, hasAdminPrivileges: a, hasOwnerPrivileges: r } = e,
          s = (0, H.useRouter)(),
          n = (0, x.useCallback)(() => {
            s.push("/");
          }, [s]),
          i = (0, Q.ec)(Q.F_.isEnterprisePlan),
          o = (0, J.sB)(J.tz.WorkspaceGroupsSettings).value;
        return (0, v.jsxs)("nav", {
          className: "p-2",
          children: [
            (0, v.jsx)("div", {
              className: "mb-1 flex flex-row gap-2",
              children: (0, v.jsxs)(X.MP, {
                onClick: n,
                children: [
                  (0, v.jsx)(V.Ao2, { className: "icon-sm" }),
                  (0, v.jsx)(U.Z, ec({}, ev.backToChat)),
                ],
              }),
            }),
            (0, v.jsxs)("div", {
              className: "flex flex-col gap-2 py-2",
              children: [
                (0, v.jsxs)("div", {
                  className: "flex flex-col gap-2 rounded px-2 py-2 ".concat(
                    r
                      ? "cursor-pointer hover:bg-token-main-surface-secondary"
                      : ""
                  ),
                  onClick: () => {
                    r && F.vm.openModal(F.B.WorkspaceAppearance);
                  },
                  children: [
                    (0, v.jsx)(u.B0, {
                      size: "large",
                      src: null == t ? void 0 : t.profilePictureUrl,
                    }),
                    (0, v.jsxs)("div", {
                      className: "align-center flex flex-row",
                      children: [
                        (0, v.jsx)("h2", {
                          className:
                            "flex-1 text-lg text-token-text-primary dark:text-white",
                          children: null == t ? void 0 : t.name,
                        }),
                        r
                          ? (0, v.jsx)("div", {
                              className:
                                "my-auto h-4 flex-initial align-middle dark:text-white",
                              children: (0, v.jsx)(f.Jo, {
                                className: "h:opacity-100 opacity-70",
                              }),
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
                (0, v.jsx)(ed, {
                  route: "/admin",
                  icon: (0, v.jsx)(f.yj, { className: "icon-sm" }),
                  name: ev.membersPageTitle,
                }),
                a &&
                  o &&
                  (0, v.jsx)(ed, {
                    route: "/admin/groups",
                    icon: (0, v.jsx)(f.ww, { className: "icon-sm" }),
                    upsellEnterprise: !i,
                    name: {
                      id: "adminPage.groupsSidebarItem",
                      defaultMessage: "Groups",
                      description: "Item for managing user groups in workspace",
                    },
                  }),
                r &&
                  (0, v.jsx)(ed, {
                    route: "/admin/billing",
                    icon: (0, v.jsx)(f.L2, { className: "icon-sm" }),
                    name: ev.billing,
                  }),
                r &&
                  (0, v.jsx)(ed, {
                    route: "/admin/gpts",
                    icon: (0, v.jsx)(f.fr, { className: "icon-sm" }),
                    name: ev.gpts,
                  }),
                r &&
                  (0, v.jsx)(ed, {
                    route: "/admin/settings",
                    icon: (0, v.jsx)(f.O4, { className: "icon-sm" }),
                    name: ev.settings,
                  }),
                !i &&
                  (0, v.jsx)("span", {
                    className: "mx-3 border-t border-y-token-border-medium",
                  }),
                a &&
                  (0, v.jsx)(ed, {
                    route: "/admin/analytics",
                    icon: (0, v.jsx)(f.Ie, { className: "icon-sm" }),
                    name: ev.analytics,
                    upsellEnterprise: !i,
                  }),
                r &&
                  (0, v.jsx)(ed, {
                    route: "/admin/identity",
                    upsellEnterprise: !i,
                    icon: (0, v.jsx)(f.Tg, { className: "icon-sm" }),
                    name: ev.identity,
                  }),
              ],
            }),
          ],
        });
      }
      function ep(e) {
        var t;
        let {
            mobilePageTitle: a,
            requireAdminPrivileges: r = !1,
            requireOwnerPrivileges: s = !1,
            children: n,
          } = e,
          i = (0, Q.ec)((e) => e.currentWorkspace),
          o = (0, H.useRouter)(),
          l =
            null != i
              ? (t = i.role) === d.r3.ADMIN || t === d.r3.OWNER
              : void 0,
          c = null != i ? i.role === d.r3.OWNER : void 0;
        return ((0, x.useEffect)(() => {
          r && !1 === l && o.push("/admin"), s && !1 === c && o.push("/admin");
        }, [r, l, o, s, c]),
        null == (0, q.t)())
          ? null
          : (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsx)(G.Z, {
                  mobileHeaderContent: a,
                  sidebar: (0, v.jsx)(eu, {
                    workspace: null != i ? i : void 0,
                    hasAdminPrivileges: l,
                    hasOwnerPrivileges: c,
                  }),
                  children: n,
                }),
                null == i ? null : (0, v.jsx)(_, { workspace: i }),
              ],
            });
      }
      let em = Y.Z.div(
          r ||
            (r = (0, l.Z)([
              "border-b border-token-main-surface-tertiary hidden md:block py-6 lg:py-10",
            ]))
        ),
        ef = Y.Z.h2(
          s ||
            (s = (0, l.Z)(["mx-auto w-full max-w-4xl px-2 md:px-6 lg:px-10"]))
        ),
        ex = (0, Y.Z)(ef)(
          n ||
            (n = (0, l.Z)(["font-normal text-base text-token-text-secondary"]))
        );
      function eg(e) {
        let { title: t, subtitle: a } = e,
          { data: r } = (0, ea.ZP)(),
          s = (0, q.t)(),
          n = s && r && r.plan_type === d.D8.TEAM && !r.will_renew;
        return (0, v.jsxs)(v.Fragment, {
          children: [
            n && (0, v.jsx)(ei, { accountId: s.id, subscription: r }),
            (0, v.jsxs)(em, {
              children: [
                (0, v.jsx)(ef, { children: t }),
                a && (0, v.jsx)(ex, { children: a }),
              ],
            }),
          ],
        });
      }
      Y.Z.p(i || (i = (0, l.Z)(["text-sm text-token-text-tertiary"])));
      let eb = Y.Z.div(
        o || (o = (0, l.Z)(["max-w-4xl mx-auto w-full px-2 md:px-6 lg:px-10"]))
      );
      function ej(e) {
        let { children: t, showSpinner: a } = e,
          r = (0, q.t)(),
          s = (0, Q.ec)((e) => e.currentWorkspace),
          n = !r || a;
        return (0, v.jsxs)(eb, {
          children: [
            n &&
              (0, v.jsx)("div", {
                className: "flex min-h-[80vh] items-center justify-center",
                children: (0, v.jsx)(K.Z, {}),
              }),
            !n &&
              !s &&
              (0, v.jsx)("div", {
                className: "flex min-h-[80vh] items-center justify-center",
                children: (0, v.jsx)(U.Z, ec({}, ev.workspaceNotFound)),
              }),
            !n && s && t,
          ],
        });
      }
      let ev = (0, j.vU)({
        workspaceNotFound: {
          id: "adminPage.workspaceNotFound",
          defaultMessage: "Workspace not found",
        },
        backToChat: {
          id: "adminPage.backToChat",
          defaultMessage: "Back to chat",
        },
        membersPageTitle: {
          id: "adminPage.membersPageTitle",
          defaultMessage: "Members",
        },
        analytics: { id: "adminPage.analytics", defaultMessage: "Analytics" },
        billing: { id: "adminPage.billing.1", defaultMessage: "Billing" },
        gpts: { id: "adminPage.gpts", defaultMessage: "GPTs" },
        settings: { id: "adminPage.Settings", defaultMessage: "Settings" },
        identity: {
          id: "adminPage.identity.0",
          defaultMessage: "Identity & provisioning",
        },
        availableForEnterprise: {
          id: "adminPage.availableForEnterprise",
          defaultMessage: "Available for Enterprise plan",
        },
      });
    },
    82734: function (e, t, a) {
      a.d(t, {
        St: function () {
          return p;
        },
        ZP: function () {
          return u;
        },
        wK: function () {
          return m;
        },
      });
      var r = a(13038),
        s = a(78e3),
        n = a(61236),
        i = a(25494),
        o = a(81622),
        l = a(70671),
        c = a(94968),
        d = a(65455);
      function u() {
        var e;
        let t = (0, s.ec)((e) => e.currentWorkspace),
          a = (0, s.ec)(s.F_.isEnterprisePlan),
          i = null == t ? void 0 : t.id,
          o =
            null !== (e = null == t ? void 0 : t.organizationId) && void 0 !== e
              ? e
              : void 0;
        return (function (e) {
          let t = (0, l.Z)();
          return (0, n.a)({
            queryKey: ["organization-subscription", e],
            queryFn: async () =>
              await r.Z.getSubscription(e).catch((e) => {
                d.m.danger(
                  t.formatMessage(f.subscriptionLoadError, { error: e.message })
                );
              }),
            enabled: null != e.account_id || null != e.organization_id,
          });
        })(a ? { organization_id: o } : { account_id: i });
      }
      function p(e) {
        return (0, i.D)({
          mutationFn: async (e) => r.Z.cancelSubscription(e),
          onSuccess: () => {
            o.E.invalidateQueries({
              queryKey: ["organization-subscription", { account_id: e }],
            });
          },
        });
      }
      function m(e) {
        return (0, i.D)({
          mutationFn: async (e) => r.Z.renewSubscription(e),
          onSuccess: () => {
            o.E.invalidateQueries({
              queryKey: ["organization-subscription", { account_id: e }],
            });
          },
        });
      }
      let f = (0, c.vU)({
        subscriptionLoadError: {
          id: "useSubscriptionData.subscriptionLoadError",
          defaultMessage:
            "Failed to load subscription: {error}. Contact support@openai.com if error persists.",
        },
      });
    },
  },
]);
//# sourceMappingURL=9112-719cb76caa947b78.js.map
