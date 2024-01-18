(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8298],
  {
    47119: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSP: function () {
            return I;
          },
          default: function () {
            return D;
          },
        });
      var i = s(36112),
        n = s(35017),
        r = s(82256),
        a = s(90166),
        l = s(14972),
        o = s(67558),
        c = s(32062),
        d = s(7144),
        u = s(82473),
        p = s(25494),
        g = s(19841),
        f = s(29124),
        h = s.n(f),
        w = s(32004),
        b = s(70671),
        x = s(94968),
        m = s(33562),
        y = s(46001),
        v = s(4748),
        k = s(81942),
        O = s(91676),
        j = s(35250);
      function T(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            s.push.apply(s, i);
        }
        return s;
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? T(Object(s), !0).forEach(function (t) {
                (0, i.Z)(e, t, s[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
              : T(Object(s)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(s, t)
                  );
                });
        }
        return e;
      }
      function P() {
        return (0, j.jsx)(l.aU, {
          className: "icon-sm ml-1 text-token-text-tertiary",
        });
      }
      function Z(e) {
        var t = e.title,
          s = e.description,
          i = e.children,
          n = e.upsellEnterprise,
          r = void 0 !== n && n,
          l = e.className;
        return (0, j.jsx)(a.E, {
          label: (0, j.jsx)(w.Z, S({}, C.enterpriseRequiredMessage)),
          side: "top",
          sideOffset: 4,
          disabled: !r,
          className: "max-w-5xl",
          children: (0, j.jsxs)(k.i9, {
            className: (0, g.default)(
              r && "text-token-text-tertiary",
              "max-w-4xl",
              void 0 === l ? "" : l
            ),
            children: [
              (0, j.jsxs)(k.A4, {
                className: "flex items-center gap-3",
                children: [
                  (0, j.jsx)(w.Z, S({}, t)),
                  r &&
                    (0, j.jsx)("span", {
                      className:
                        "rounded-xl bg-token-surface-tertiary px-2 pb-0.5 text-sm",
                      children: (0, j.jsx)(w.Z, S({}, C.enterpriseUpsellPill)),
                    }),
                ],
              }),
              s &&
                (0, j.jsx)(k.Li, {
                  className: "py-2 text-token-text-secondary",
                  children: (0, j.jsx)(w.Z, S({}, s)),
                }),
              i,
            ],
          }),
        });
      }
      function N(e) {
        var t,
          s = e.workspaceId,
          i = e.label,
          n = e.setting,
          r = e.defaultValue,
          a = e.values,
          l = e.disabled,
          o = (0, b.Z)(),
          d = (0, u.NL)(),
          g = (0, p.D)({
            mutationFn: function (e) {
              var t = e.setting,
                i = e.value;
              return c.ZP.setWorkspaceShareSetting(s, t, i);
            },
            onSettled: function () {
              d.invalidateQueries({ queryKey: ["workspace-settings"] });
            },
            onError: function () {
              v.m.danger(o.formatMessage(C.featureSettingsUpdateFailed));
            },
          }),
          f = g.variables,
          h = g.mutate;
        return (0, j.jsxs)(k.vi, {
          children: [
            (0, j.jsx)("p", {
              className: "text-md inline-flex items-center",
              children: (0, j.jsx)(w.Z, S({}, i)),
            }),
            (0, j.jsxs)(m.Z.Root, {
              defaultValue:
                null !== (t = null == f ? void 0 : f.value) && void 0 !== t
                  ? t
                  : r,
              onValueChange: function (e) {
                h({ setting: n, value: e });
              },
              disabled: void 0 !== l && l,
              children: [
                (0, j.jsxs)(m.Z.Trigger, {
                  className: "text-md focus-visible:border-none",
                  children: [
                    (0, j.jsx)(m.Z.Value, {}),
                    (0, j.jsx)(m.Z.Icon, {}),
                  ],
                }),
                (0, j.jsx)(m.Z.Portal, {
                  children: (0, j.jsx)(m.Z.Content, {
                    children: a.map(function (e, t) {
                      return (0, j.jsx)(
                        m.Z.Item,
                        {
                          className: "text-md",
                          value: e.value,
                          children: (0, j.jsx)(w.Z, S({}, e.display)),
                        },
                        t
                      );
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function M(e) {
        var t,
          s = e.workspaceId,
          i = e.value,
          n = e.upsellEnterprise,
          a = (0, b.Z)(),
          l = (0, u.NL)(),
          o = (0, p.D)({
            mutationFn: function (e) {
              var t = e.value;
              return c.ZP.setWorkspaceThirdPartyGPTSetting(s, t);
            },
            onSettled: function () {
              l.invalidateQueries({ queryKey: ["workspace-settings"] });
            },
            onError: function () {
              v.m.danger(a.formatMessage(C.featureSettingsUpdateFailed));
            },
          }),
          d = o.variables,
          g = o.mutate;
        return (0, j.jsxs)(m.Z.Root, {
          defaultValue:
            null !== (t = null == d ? void 0 : d.value) && void 0 !== t ? t : i,
          onValueChange: function (e) {
            g({ value: e });
          },
          children: [
            (0, j.jsxs)(m.Z.Trigger, {
              className:
                "border border-token-border-light text-base focus-visible:border-token-border-light",
              children: [(0, j.jsx)(m.Z.Value, {}), (0, j.jsx)(m.Z.Icon, {})],
            }),
            (0, j.jsx)(m.Z.Portal, {
              children: (0, j.jsxs)(m.Z.Content, {
                children: [
                  (0, j.jsx)(m.Z.Item, {
                    className: "text-base",
                    value: r.NN.ALLOW_ALL,
                    children: (0, j.jsx)(w.Z, S({}, C.allowAllOption)),
                  }),
                  !(void 0 !== n && n) &&
                    (0, j.jsx)(m.Z.Item, {
                      className: "text-base",
                      value: r.NN.ALLOW_SPECIFIC,
                      children: (0, j.jsx)(
                        w.Z,
                        S({}, C.ownerApprovedOnlyOption)
                      ),
                    }),
                  (0, j.jsx)(m.Z.Item, {
                    className: "text-base",
                    value: r.NN.ALLOW_NONE,
                    children: (0, j.jsx)(w.Z, S({}, C.dontAllowOption)),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function _(e) {
        var t,
          s = e.workspaceId,
          i = e.label,
          n = e.feature,
          r = e.value,
          l = e.tooltip,
          o = e.disabled,
          d = (0, b.Z)(),
          g = (0, u.NL)(),
          f = (0, p.D)({
            mutationFn: function (e) {
              var t = e.feature,
                i = e.enabled;
              return c.ZP.setWorkspaceBetaFeature(s, t, i);
            },
            onSettled: function () {
              g.invalidateQueries({ queryKey: ["workspace-settings"] });
            },
            onError: function () {
              v.m.danger(d.formatMessage(C.featureSettingsUpdateFailed));
            },
          }),
          h = f.variables,
          x = f.mutate;
        return (0, j.jsxs)(k.vi, {
          className: "justify-start py-6",
          children: [
            (0, j.jsx)(y.oC, {
              label: "",
              disabled: void 0 !== o && o,
              enabled:
                null !== (t = null == h ? void 0 : h.enabled) && void 0 !== t
                  ? t
                  : r,
              onChange: function (e) {
                x({ feature: n, enabled: e });
              },
            }),
            (0, j.jsxs)("p", {
              className: "text-md inline-flex items-center",
              children: [
                (0, j.jsx)(w.Z, S({}, i)),
                l &&
                  (0, j.jsx)(a.u, {
                    sideOffset: 4,
                    interactive: !0,
                    delayDuration: 0,
                    label: (0, j.jsx)(w.Z, S({}, l)),
                    side: "top",
                    children: (0, j.jsx)(P, {}),
                  }),
              ],
            }),
          ],
        });
      }
      function A(e) {
        var t = e.workspaceId,
          s = e.data,
          i = (0, d.t)();
        if (null == i) return null;
        var n = i.isTeam(),
          a = (0, j.jsx)(Z, {
            title: C.thirdPartyGPTsTitle,
            description: C.thirdPartyGPTsDescription,
            className: "border-b border-token-border-light pb-4",
            children: (0, j.jsx)("div", {
              children: (0, j.jsx)(M, {
                workspaceId: t,
                value: s.allow_third_party_gpts,
                upsellEnterprise: n,
              }),
            }),
          }),
          l = (0, j.jsx)(Z, {
            title: C.title,
            children: (0, j.jsx)(O.Z, {
              account: i,
              showThirdParty:
                !n && s.allow_third_party_gpts == r.NN.ALLOW_SPECIFIC,
            }),
          });
        return (0, j.jsxs)(k.$V, {
          className: "max-w-5xl",
          children: [
            n && a,
            n && i.isOwnerOfAccount() && l,
            n && (0, j.jsx)(k.W8, {}),
            (0, j.jsx)(Z, {
              title: C.sharingSettingsTitle,
              upsellEnterprise: n,
              children: (0, j.jsx)(k.qQ, {
                children: (0, j.jsx)(N, {
                  workspaceId: t,
                  label: C.gptSharingTitle,
                  disabled: n,
                  setting: r.bb.GPT_SHARE_SETTINGS,
                  defaultValue: s.share_settings.gpt_share_setting,
                  values: [
                    { display: C.anyOneSelect, value: r.Gz.ANYONE },
                    {
                      display: C.workspaceMembersOnlySelect,
                      value: r.Gz.WORKSPACE_ONLY,
                    },
                    { display: C.noOneSelect, value: r.Gz.NO_ONE },
                  ],
                }),
              }),
            }),
            (0, j.jsx)(Z, {
              title: C.workspaceGPTsTitle,
              description: C.workspaceGPTsDescription,
              upsellEnterprise: n,
              children: (0, j.jsxs)(k.qQ, {
                children: [
                  (0, j.jsx)(_, {
                    label: C.browseOptionTitle,
                    feature: r.Nh.BROWSING,
                    value: s.beta_settings.browsing,
                    workspaceId: t,
                    tooltip: C.browseTooltip,
                    disabled: n,
                  }),
                  (0, j.jsx)(_, {
                    label: C.customActionsOptionTitle,
                    feature: r.Nh.WORKSPACE_GPT_CUSTOM_ACTIONS,
                    value: s.beta_settings.workspace_gpt_custom_actions,
                    workspaceId: t,
                    tooltip: C.customActionsTooltip,
                    disabled: n,
                  }),
                  (0, j.jsx)(_, {
                    label: C.pluginsOptionTitle,
                    feature: r.Nh.PLUGINS,
                    value: s.beta_settings.plugins,
                    workspaceId: t,
                    tooltip: C.pluginsTooltip,
                    disabled: n,
                  }),
                ],
              }),
            }),
            !n && a,
            !n && i.isOwnerOfAccount() && l,
          ],
        });
      }
      function G(e) {
        var t = e.currentWorkspaceId,
          s = (0, o.C)(t),
          i = s.data,
          r = s.isLoading,
          a = (0, b.Z)();
        return (0, j.jsxs)(j.Fragment, {
          children: [
            (0, j.jsx)(h(), {
              children: (0, j.jsx)("title", {
                children: a.formatMessage(C.title),
              }),
            }),
            (0, j.jsx)(n.yG, { title: a.formatMessage(C.title) }),
            (0, j.jsx)(n.hb, {
              showSpinner: r,
              children:
                void 0 === i
                  ? null
                  : (0, j.jsx)(A, { workspaceId: t, data: i }),
            }),
          ],
        });
      }
      var C = (0, x.vU)({
        title: { id: "workspaceSettings.title", defaultMessage: "GPTs" },
        allowAllOption: {
          id: "workspaceSettings.allowAllOption",
          defaultMessage: "Allow all",
        },
        ownerApprovedOnlyOption: {
          id: "workspaceSettings.allowAllOption",
          defaultMessage: "Owner-approved only",
        },
        dontAllowOption: {
          id: "workspaceSettings.dontAllowOption",
          defaultMessage: "Don't allow",
        },
        retentionPolicyTitle: {
          id: "workspaceSettings.retentionPolicyTitle",
          defaultMessage: "Retention policy",
        },
        thirdPartyGPTsTitle: {
          id: "workspaceSettings.thirdPartyGPTsTitle",
          defaultMessage: "Third-party",
        },
        thirdPartyGPTsDescription: {
          id: "workspaceSettings.thirdPartyGPTsDescription",
          defaultMessage:
            "Manage whether members can use GPTs created outside your workspace.",
        },
        customActionsTooltip: {
          id: "workspaceSettings.customActionsTooltip",
          defaultMessage:
            "Allow GPTs to use third-party services for tasks such as finding flights. Actions are defined by GPT builders.",
        },
        browseTooltip: {
          id: "workspaceSettings.browseTooltip",
          defaultMessage:
            "Allow ChatGPT and GPTs to browse the internet to answer questions about recent topics and events.",
        },
        pluginsTooltip: {
          id: "workspaceSettings.pluginsTooltip",
          defaultMessage:
            "Allow members to install plugins so ChatGPT can use third-party services for tasks such as finding flights.",
        },
        pluginsOptionTitle: {
          id: "workspaceSettings.pluginsOptionTitle",
          defaultMessage: "Plugins",
        },
        customActionsOptionTitle: {
          id: "workspaceSettings.pluginsOptionTitle.0",
          defaultMessage: "Custom actions",
        },
        browseOptionTitle: {
          id: "workspaceSettings.browseOptionTitle",
          defaultMessage: "Browsing with Bing",
        },
        workspaceGPTsTitle: {
          id: "workspaceSettings.workspaceGPTsTitle",
          defaultMessage: "Workspace",
        },
        appearanceTitle: {
          id: "workspaceSettings.appearanceTitle",
          defaultMessage: "Appearance",
        },
        sharingSettingsTitle: {
          id: "workspaceSettings.sharingSettingsTitle",
          defaultMessage: "Sharing",
        },
        gptSharingTitle: {
          id: "workspaceSettings.gptSharingTitle",
          defaultMessage: "GPTs can be shared with...",
        },
        chatSharingTitle: {
          id: "workspaceSettings.chatSharingTitle",
          defaultMessage: "Chats can be shared with...",
        },
        workspaceMembersOnlySelect: {
          id: "workspaceSettings.workspaceMembersOnlySelect",
          defaultMessage: "Workspace members only",
        },
        anyOneSelect: {
          id: "workspaceSettings.anyOneSelect",
          defaultMessage: "Anyone",
        },
        noOneSelect: {
          id: "workspaceSettings.noOneSelect",
          defaultMessage: "No one",
        },
        featureSettingsUpdateFailed: {
          id: "workspaceSettings.featureSettingsUpdateFailed",
          defaultMessage: "Failed to update feature setting",
        },
        conversationRetention: {
          id: "workspaceSettings.conversationRetention",
          defaultMessage: "Chat retention",
        },
        retentionInfinite: {
          id: "workspaceSettings.retentionInfinite",
          defaultMessage: "Infinite",
        },
        retentionNinetyDays: {
          id: "workspaceSettings.retentionNinetyDays",
          defaultMessage: "90 days",
        },
        retentionOneYear: {
          id: "workspaceSettings.retentionOneYear",
          defaultMessage: "1 year",
        },
        retentionCustomDays: {
          id: "workspaceSettings.retentionCustomDays",
          defaultMessage: "{num} days",
        },
        retentionChange: {
          id: "workspaceSettings.retentionChange",
          defaultMessage:
            "Contact your account manager to change this setting.",
        },
        workspaceGPTsDescription: {
          id: "workspaceSettings.workspaceGPTsDescription",
          defaultMessage:
            "Manage which capabilities are available for GPTs built in your workspace or by ChatGPT. This does not apply to third-party GPTs.",
        },
        enterpriseUpsellPill: {
          id: "workspaceSettings.enterpriseUpsellPill",
          defaultMessage: "Enterprise",
        },
        retentionSettingTooltip: {
          id: "workspaceSettings.retentionSettingTooltip",
          defaultMessage: "Contact your account manager to change this setting",
        },
        enterpriseRequiredMessage: {
          id: "workspaceSettings.enterpriseRequiredMessage",
          defaultMessage:
            "Only workspaces with the Enterprise plan can change these settings",
        },
        shareRecipientTitlePrivate: {
          id: "workspaceSettings.shareRecipientTitlePrivate",
          defaultMessage: "Private",
        },
        shareRecipientTitleLink: {
          id: "workspaceSettings.shareRecipientTitleLink",
          defaultMessage: "Link",
        },
        shareRecipientTitlePublic: {
          id: "workspaceSettings.shareRecipientTitlePublic",
          defaultMessage: "Public",
        },
      });
      function E(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            s.push.apply(s, i);
        }
        return s;
      }
      var I = !0;
      function D(e) {
        return (0, j.jsx)(
          G,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var s = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? E(Object(s), !0).forEach(function (t) {
                    (0, i.Z)(e, t, s[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(s)
                    )
                  : E(Object(s)).forEach(function (t) {
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
      D.getLayout = function (e) {
        return (0, j.jsx)(n.ZP, {
          mobilePageTitle: "GPTs",
          requireAdminPrivileges: !0,
          children: e,
        });
      };
    },
    81942: function (e, t, s) {
      "use strict";
      s.d(t, {
        $V: function () {
          return g;
        },
        A4: function () {
          return f;
        },
        Li: function () {
          return x;
        },
        W8: function () {
          return y;
        },
        i$: function () {
          return h;
        },
        i9: function () {
          return b;
        },
        qQ: function () {
          return w;
        },
        vi: function () {
          return m;
        },
      });
      var i,
        n,
        r,
        a,
        l,
        o,
        c,
        d,
        u = s(90038),
        p = s(21389),
        g = p.Z.div(
          i ||
            (i = (0, u.Z)([
              "text-base text-token-text-primary flex flex-col gap-10 my-10",
            ]))
        ),
        f = p.Z.div(n || (n = (0, u.Z)(["text-xl font-medium"]))),
        h = p.Z.div(r || (r = (0, u.Z)(["text-base font-medium"]))),
        w = p.Z.div(
          a ||
            (a = (0, u.Z)([
              "flex flex-col divide-y divide-token-border-light border-y border-token-border-light",
            ]))
        ),
        b = p.Z.div(
          l ||
            (l = (0, u.Z)([
              "max-w-xl flex flex-col gap-3 w-full m-auto md:m-0",
            ]))
        ),
        x = p.Z.div(o || (o = (0, u.Z)(["text-sm"]))),
        m = p.Z.div(c || (c = (0, u.Z)(["flex justify-between py-4 gap-4"]))),
        y = p.Z.hr(d || (d = (0, u.Z)(["max-w-xl border-token-border-light"])));
    },
    92074: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/gpts",
        function () {
          return s(47119);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [5017, 9774, 2888, 179], function () {
      return e((e.s = 92074));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=gpts-5a7a4ad9c0ffad2e.js.map
