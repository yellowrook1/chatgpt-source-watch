(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [577],
  {
    76893: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return E;
          },
          default: function () {
            return D;
          },
        });
      var i = n(36112),
        r = n(35017),
        s = n(82256),
        a = n(90166),
        o = n(67558),
        l = n(45754),
        c = n(7144),
        d = n(73582),
        u = n(82473),
        g = n(25494),
        p = n(19841),
        f = n(29124),
        h = n.n(f),
        x = n(70671),
        b = n(32004),
        j = n(94968),
        m = n(33562),
        y = n(4748),
        v = n(81942),
        w = n(35250);
      function S(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : S(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function k(e) {
        var t,
          n = e.conversationTTL,
          i = (0, x.Z)();
        return (
          (t =
            null === n
              ? i.formatMessage(_.retentionInfinite)
              : 7776e3 === n
                ? i.formatMessage(_.retentionNinetyDays)
                : 31536e3 === n
                  ? i.formatMessage(_.retentionOneYear)
                  : i.formatMessage(_.retentionCustomDays, {
                      num: Math.floor(n / 86400),
                    })),
          (0, w.jsxs)(v.vi, {
            children: [
              (0, w.jsx)("p", {
                className: "inline-flex items-center text-base",
                children: (0, w.jsx)(b.Z, O({}, _.conversationRetention)),
              }),
              (0, w.jsx)(a.u, {
                label: i.formatMessage(_.retentionSettingTooltip),
                children: t,
              }),
            ],
          })
        );
      }
      function Z(e) {
        var t = e.title,
          n = e.description,
          i = e.children,
          r = e.upsellEnterprise,
          s = void 0 !== r && r;
        return (0, w.jsx)(a.E, {
          label: (0, w.jsx)(b.Z, O({}, _.enterpriseRequiredMessage)),
          side: "top",
          sideOffset: 4,
          disabled: !s,
          className: "max-w-xl",
          children: (0, w.jsxs)(v.i9, {
            className: (0, p.default)(s && "text-token-text-tertiary"),
            children: [
              (0, w.jsxs)(v.A4, {
                className: "flex items-center gap-3",
                children: [
                  (0, w.jsx)(b.Z, O({}, t)),
                  s &&
                    (0, w.jsx)("span", {
                      className:
                        "rounded-xl bg-token-surface-tertiary px-2 pb-0.5 text-sm",
                      children: (0, w.jsx)(b.Z, O({}, _.enterpriseUpsellPill)),
                    }),
                ],
              }),
              n && (0, w.jsx)(v.Li, { children: (0, w.jsx)(b.Z, O({}, n)) }),
              i,
            ],
          }),
        });
      }
      function M(e) {
        var t,
          n = e.workspaceId,
          i = e.label,
          r = e.setting,
          s = e.defaultValue,
          a = e.values,
          o = e.disabled,
          c = (0, x.Z)(),
          d = (0, u.NL)(),
          p = (0, g.D)({
            mutationFn: function (e) {
              var t = e.setting,
                i = e.value;
              return l.ZP.setWorkspaceShareSetting(n, t, i);
            },
            onSettled: function () {
              d.invalidateQueries({ queryKey: ["workspace-settings"] });
            },
            onError: function () {
              y.m.danger(c.formatMessage(_.featureSettingsUpdateFailed));
            },
          }),
          f = p.variables,
          h = p.mutate;
        return (0, w.jsxs)(v.vi, {
          children: [
            (0, w.jsx)("p", {
              className: "text-md inline-flex items-center",
              children: (0, w.jsx)(b.Z, O({}, i)),
            }),
            (0, w.jsxs)(m.Z.Root, {
              defaultValue:
                null !== (t = null == f ? void 0 : f.value) && void 0 !== t
                  ? t
                  : s,
              onValueChange: function (e) {
                h({ setting: r, value: e });
              },
              disabled: void 0 !== o && o,
              children: [
                (0, w.jsxs)(m.Z.Trigger, {
                  className: "text-md focus-visible:border-none",
                  children: [
                    (0, w.jsx)(m.Z.Value, {}),
                    (0, w.jsx)(m.Z.Icon, {}),
                  ],
                }),
                (0, w.jsx)(m.Z.Portal, {
                  children: (0, w.jsx)(m.Z.Content, {
                    children: a.map(function (e, t) {
                      return (0, w.jsx)(
                        m.Z.Item,
                        {
                          className: "text-md",
                          value: e.value,
                          children: (0, w.jsx)(b.Z, O({}, e.display)),
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
      function P(e) {
        var t = e.workspaceId,
          n = e.data,
          i = (0, d.ec)(d.F_.isTeamPlan),
          r = (0, c.t)();
        return (0, w.jsxs)(v.$V, {
          children: [
            i && (0, w.jsx)(v.W8, {}),
            (0, w.jsx)(Z, {
              title: _.workspaceDetails,
              children: (0, w.jsx)(
                b.Z,
                O(
                  O({}, _.organizationIdLabel),
                  {},
                  {
                    values: {
                      organizationId:
                        null == r ? void 0 : r.data.organizationId,
                    },
                  }
                )
              ),
            }),
            (0, w.jsx)(Z, {
              title: _.sharingSettingsTitle,
              upsellEnterprise: i,
              children: (0, w.jsx)(v.qQ, {
                children: (0, w.jsx)(M, {
                  workspaceId: t,
                  label: _.chatSharingTitle,
                  setting: s.bb.CHAT_SHARE_SETTINGS,
                  disabled: i,
                  defaultValue: n.share_settings.chat_share_setting,
                  values: [
                    {
                      display: _.workspaceMembersOnlySelect,
                      value: s.Gz.WORKSPACE_ONLY,
                    },
                    { display: _.noOneSelect, value: s.Gz.NO_ONE },
                  ],
                }),
              }),
            }),
            (0, w.jsx)(Z, {
              title: _.retentionPolicyTitle,
              description: _.retentionChange,
              upsellEnterprise: i,
              children: (0, w.jsx)(k, { conversationTTL: n.conversation_ttl }),
            }),
          ],
        });
      }
      function T(e) {
        var t = e.currentWorkspaceId,
          n = (0, o.C)(t),
          i = n.data,
          s = n.isLoading,
          a = (0, x.Z)();
        return (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsx)(h(), {
              children: (0, w.jsx)("title", {
                children: a.formatMessage(_.title),
              }),
            }),
            (0, w.jsx)(r.yG, { title: a.formatMessage(_.title) }),
            (0, w.jsx)(r.hb, {
              showSpinner: s,
              children:
                void 0 === i
                  ? null
                  : (0, w.jsx)(P, { workspaceId: t, data: i }),
            }),
          ],
        });
      }
      var _ = (0, j.vU)({
        title: { id: "workspaceSettings.title", defaultMessage: "Settings" },
        retentionPolicyTitle: {
          id: "workspaceSettings.retentionPolicyTitle",
          defaultMessage: "Retention policy",
        },
        sharingSettingsTitle: {
          id: "workspaceSettings.sharingSettingsTitle",
          defaultMessage: "Sharing",
        },
        chatSharingTitle: {
          id: "workspaceSettings.chatSharingTitle",
          defaultMessage: "Chats can be shared with...",
        },
        workspaceDetails: {
          id: "workspaceSettings.workspaceDetails",
          defaultMessage: "Workspace details",
        },
        organizationIdLabel: {
          id: "workspaceSettings.organizationIdLabel",
          defaultMessage: "Organization ID: {organizationId}",
        },
        workspaceMembersOnlySelect: {
          id: "workspaceSettings.workspaceMembersOnlySelect",
          defaultMessage: "Workspace members only",
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
      });
      function N(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      var E = !0;
      function D(e) {
        return (0, w.jsx)(
          T,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? N(Object(n), !0).forEach(function (t) {
                    (0, i.Z)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : N(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
            }
            return e;
          })({}, e)
        );
      }
      D.getLayout = function (e) {
        return (0, w.jsx)(r.ZP, {
          mobilePageTitle: "Settings",
          requireAdminPrivileges: !0,
          children: e,
        });
      };
    },
    81942: function (e, t, n) {
      "use strict";
      n.d(t, {
        $V: function () {
          return p;
        },
        A4: function () {
          return f;
        },
        Li: function () {
          return j;
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
          return x;
        },
        vi: function () {
          return m;
        },
      });
      var i,
        r,
        s,
        a,
        o,
        l,
        c,
        d,
        u = n(90038),
        g = n(21389),
        p = g.Z.div(
          i ||
            (i = (0, u.Z)([
              "text-base text-token-text-primary flex flex-col gap-10 my-10",
            ]))
        ),
        f = g.Z.div(r || (r = (0, u.Z)(["text-xl font-medium"]))),
        h = g.Z.div(s || (s = (0, u.Z)(["text-base font-medium"]))),
        x = g.Z.div(
          a ||
            (a = (0, u.Z)([
              "flex flex-col divide-y divide-token-border-light border-y border-token-border-light",
            ]))
        ),
        b = g.Z.div(
          o ||
            (o = (0, u.Z)([
              "max-w-xl flex flex-col gap-3 w-full m-auto md:m-0",
            ]))
        ),
        j = g.Z.div(l || (l = (0, u.Z)(["text-sm"]))),
        m = g.Z.div(c || (c = (0, u.Z)(["flex justify-between py-4 gap-4"]))),
        y = g.Z.hr(d || (d = (0, u.Z)(["max-w-xl border-token-border-light"])));
    },
    16118: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/settings",
        function () {
          return n(76893);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [5017, 9774, 2888, 179], function () {
      return e((e.s = 16118));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=settings-65cfc8af93b61cd0.js.map
