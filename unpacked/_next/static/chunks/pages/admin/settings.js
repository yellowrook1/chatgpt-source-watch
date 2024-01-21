(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [577],
  {
    76893: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return N;
          },
          default: function () {
            return E;
          },
        });
      var r = n(36112),
        i = n(35017),
        s = n(82256),
        a = n(90166),
        o = n(67558),
        l = n(32062),
        c = n(73582),
        u = n(82473),
        d = n(25494),
        g = n(19841),
        f = n(29124),
        p = n.n(f),
        h = n(70671),
        x = n(32004),
        m = n(94968),
        b = n(33562),
        j = n(4748),
        y = n(81942),
        v = n(35250);
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : w(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function S(e) {
        var t,
          n = e.conversationTTL,
          r = (0, h.Z)();
        return (
          (t =
            null === n
              ? r.formatMessage(T.retentionInfinite)
              : 7776e3 === n
                ? r.formatMessage(T.retentionNinetyDays)
                : 31536e3 === n
                  ? r.formatMessage(T.retentionOneYear)
                  : r.formatMessage(T.retentionCustomDays, {
                      num: Math.floor(n / 86400),
                    })),
          (0, v.jsxs)(y.vi, {
            children: [
              (0, v.jsx)("p", {
                className: "inline-flex items-center text-base",
                children: (0, v.jsx)(x.Z, O({}, T.conversationRetention)),
              }),
              (0, v.jsx)(a.u, {
                label: r.formatMessage(T.retentionSettingTooltip),
                children: t,
              }),
            ],
          })
        );
      }
      function k(e) {
        var t = e.title,
          n = e.description,
          r = e.children,
          i = e.upsellEnterprise,
          s = void 0 !== i && i;
        return (0, v.jsx)(a.E, {
          label: (0, v.jsx)(x.Z, O({}, T.enterpriseRequiredMessage)),
          side: "top",
          sideOffset: 4,
          disabled: !s,
          className: "max-w-xl",
          children: (0, v.jsxs)(y.i9, {
            className: (0, g.default)(s && "text-token-text-tertiary"),
            children: [
              (0, v.jsxs)(y.A4, {
                className: "flex items-center gap-3",
                children: [
                  (0, v.jsx)(x.Z, O({}, t)),
                  s &&
                    (0, v.jsx)("span", {
                      className:
                        "rounded-xl bg-token-surface-tertiary px-2 pb-0.5 text-sm",
                      children: (0, v.jsx)(x.Z, O({}, T.enterpriseUpsellPill)),
                    }),
                ],
              }),
              n && (0, v.jsx)(y.Li, { children: (0, v.jsx)(x.Z, O({}, n)) }),
              r,
            ],
          }),
        });
      }
      function Z(e) {
        var t,
          n = e.workspaceId,
          r = e.label,
          i = e.setting,
          s = e.defaultValue,
          a = e.values,
          o = e.disabled,
          c = (0, h.Z)(),
          g = (0, u.NL)(),
          f = (0, d.D)({
            mutationFn: function (e) {
              var t = e.setting,
                r = e.value;
              return l.ZP.setWorkspaceShareSetting(n, t, r);
            },
            onSettled: function () {
              g.invalidateQueries({ queryKey: ["workspace-settings"] });
            },
            onError: function () {
              j.m.danger(c.formatMessage(T.featureSettingsUpdateFailed));
            },
          }),
          p = f.variables,
          m = f.mutate;
        return (0, v.jsxs)(y.vi, {
          children: [
            (0, v.jsx)("p", {
              className: "text-md inline-flex items-center",
              children: (0, v.jsx)(x.Z, O({}, r)),
            }),
            (0, v.jsxs)(b.Z.Root, {
              defaultValue:
                null !== (t = null == p ? void 0 : p.value) && void 0 !== t
                  ? t
                  : s,
              onValueChange: function (e) {
                m({ setting: i, value: e });
              },
              disabled: void 0 !== o && o,
              children: [
                (0, v.jsxs)(b.Z.Trigger, {
                  className: "text-md focus-visible:border-none",
                  children: [
                    (0, v.jsx)(b.Z.Value, {}),
                    (0, v.jsx)(b.Z.Icon, {}),
                  ],
                }),
                (0, v.jsx)(b.Z.Portal, {
                  children: (0, v.jsx)(b.Z.Content, {
                    children: a.map(function (e, t) {
                      return (0, v.jsx)(
                        b.Z.Item,
                        {
                          className: "text-md",
                          value: e.value,
                          children: (0, v.jsx)(x.Z, O({}, e.display)),
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
          r = (0, c.ec)(c.F_.isTeamPlan);
        return (0, v.jsxs)(y.$V, {
          children: [
            r && (0, v.jsx)(y.W8, {}),
            (0, v.jsx)(k, {
              title: T.sharingSettingsTitle,
              upsellEnterprise: r,
              children: (0, v.jsx)(y.qQ, {
                children: (0, v.jsx)(Z, {
                  workspaceId: t,
                  label: T.chatSharingTitle,
                  setting: s.bb.CHAT_SHARE_SETTINGS,
                  disabled: r,
                  defaultValue: n.share_settings.chat_share_setting,
                  values: [
                    {
                      display: T.workspaceMembersOnlySelect,
                      value: s.Gz.WORKSPACE_ONLY,
                    },
                    { display: T.noOneSelect, value: s.Gz.NO_ONE },
                  ],
                }),
              }),
            }),
            (0, v.jsx)(k, {
              title: T.retentionPolicyTitle,
              description: T.retentionChange,
              upsellEnterprise: r,
              children: (0, v.jsx)(S, { conversationTTL: n.conversation_ttl }),
            }),
          ],
        });
      }
      function M(e) {
        var t = e.currentWorkspaceId,
          n = (0, o.C)(t),
          r = n.data,
          s = n.isLoading,
          a = (0, h.Z)();
        return (0, v.jsxs)(v.Fragment, {
          children: [
            (0, v.jsx)(p(), {
              children: (0, v.jsx)("title", {
                children: a.formatMessage(T.title),
              }),
            }),
            (0, v.jsx)(i.yG, { title: a.formatMessage(T.title) }),
            (0, v.jsx)(i.hb, {
              showSpinner: s,
              children:
                void 0 === r
                  ? null
                  : (0, v.jsx)(P, { workspaceId: t, data: r }),
            }),
          ],
        });
      }
      var T = (0, m.vU)({
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
      function _(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var N = !0;
      function E(e) {
        return (0, v.jsx)(
          M,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? _(Object(n), !0).forEach(function (t) {
                    (0, r.Z)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : _(Object(n)).forEach(function (t) {
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
      E.getLayout = function (e) {
        return (0, v.jsx)(i.ZP, {
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
          return f;
        },
        A4: function () {
          return p;
        },
        Li: function () {
          return b;
        },
        W8: function () {
          return y;
        },
        i$: function () {
          return h;
        },
        i9: function () {
          return m;
        },
        qQ: function () {
          return x;
        },
        vi: function () {
          return j;
        },
      });
      var r,
        i,
        s,
        a,
        o,
        l,
        c,
        u,
        d = n(90038),
        g = n(21389),
        f = g.Z.div(
          r ||
            (r = (0, d.Z)([
              "text-base text-token-text-primary flex flex-col gap-10 my-10",
            ]))
        ),
        p = g.Z.div(i || (i = (0, d.Z)(["text-xl font-medium"]))),
        h = g.Z.div(s || (s = (0, d.Z)(["text-base font-medium"]))),
        x = g.Z.div(
          a ||
            (a = (0, d.Z)([
              "flex flex-col divide-y divide-token-border-light border-y border-token-border-light",
            ]))
        ),
        m = g.Z.div(
          o ||
            (o = (0, d.Z)([
              "max-w-xl flex flex-col gap-3 w-full m-auto md:m-0",
            ]))
        ),
        b = g.Z.div(l || (l = (0, d.Z)(["text-sm"]))),
        j = g.Z.div(c || (c = (0, d.Z)(["flex justify-between py-4 gap-4"]))),
        y = g.Z.hr(u || (u = (0, d.Z)(["max-w-xl border-token-border-light"])));
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
//# sourceMappingURL=settings-16513a05953fa44e.js.map
