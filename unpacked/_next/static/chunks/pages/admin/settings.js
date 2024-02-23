(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [577],
  {
    8956: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return D;
          },
          default: function () {
            return E;
          },
        });
      var i = n(39827),
        r = n(9112),
        s = n(25660),
        a = n(68832),
        o = n(37379),
        l = n(13038),
        c = n(24668),
        d = n(78e3),
        u = n(82473),
        g = n(25494),
        p = n(19841),
        f = n(80483),
        h = n.n(f),
        x = n(70671),
        j = n(32004),
        m = n(94968),
        b = n(60734),
        y = n(65455),
        w = n(41594),
        S = n(35250);
      function O(e, t) {
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : O(Object(n)).forEach(function (t) {
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
        let t,
          { conversationTTL: n } = e,
          i = (0, x.Z)();
        return (
          (t =
            null === n
              ? i.formatMessage(N.retentionInfinite)
              : 7776e3 === n
                ? i.formatMessage(N.retentionNinetyDays)
                : 31536e3 === n
                  ? i.formatMessage(N.retentionOneYear)
                  : i.formatMessage(N.retentionCustomDays, {
                      num: Math.floor(n / 86400),
                    })),
          (0, S.jsxs)(w.vi, {
            children: [
              (0, S.jsx)("p", {
                className: "inline-flex items-center text-base",
                children: (0, S.jsx)(j.Z, v({}, N.conversationRetention)),
              }),
              (0, S.jsx)(a.u, {
                label: i.formatMessage(N.retentionSettingTooltip),
                children: t,
              }),
            ],
          })
        );
      }
      function Z(e) {
        let {
          title: t,
          description: n,
          children: i,
          upsellEnterprise: r = !1,
        } = e;
        return (0, S.jsx)(a.E, {
          label: (0, S.jsx)(j.Z, v({}, N.enterpriseRequiredMessage)),
          side: "top",
          sideOffset: 4,
          disabled: !r,
          className: "max-w-xl",
          children: (0, S.jsxs)(w.i9, {
            className: (0, p.default)(r && "text-token-text-tertiary"),
            children: [
              (0, S.jsxs)(w.A4, {
                className: "flex items-center gap-3",
                children: [
                  (0, S.jsx)(j.Z, v({}, t)),
                  r &&
                    (0, S.jsx)("span", {
                      className:
                        "rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",
                      children: (0, S.jsx)(j.Z, v({}, N.enterpriseUpsellPill)),
                    }),
                ],
              }),
              n && (0, S.jsx)(w.Li, { children: (0, S.jsx)(j.Z, v({}, n)) }),
              i,
            ],
          }),
        });
      }
      function M(e) {
        var t;
        let {
            workspaceId: n,
            label: i,
            setting: r,
            defaultValue: s,
            values: a,
            disabled: o = !1,
          } = e,
          c = (0, x.Z)(),
          d = (0, u.NL)(),
          { variables: p, mutate: f } = (0, g.D)({
            mutationFn: (e) => {
              let { setting: t, value: i } = e;
              return l.Z.setWorkspaceShareSetting(n, t, i);
            },
            onSettled: () => {
              d.invalidateQueries({ queryKey: ["workspace-settings"] });
            },
            onError: () => {
              y.m.danger(c.formatMessage(N.featureSettingsUpdateFailed));
            },
          });
        return (0, S.jsxs)(w.vi, {
          children: [
            (0, S.jsx)("p", {
              className: "text-md inline-flex items-center",
              children: (0, S.jsx)(j.Z, v({}, i)),
            }),
            (0, S.jsxs)(b.Z.Root, {
              defaultValue:
                null !== (t = null == p ? void 0 : p.value) && void 0 !== t
                  ? t
                  : s,
              onValueChange: (e) => {
                f({ setting: r, value: e });
              },
              disabled: o,
              children: [
                (0, S.jsxs)(b.Z.Trigger, {
                  className: "text-md focus-visible:border-none",
                  children: [
                    (0, S.jsx)(b.Z.Value, {}),
                    (0, S.jsx)(b.Z.Icon, {}),
                  ],
                }),
                (0, S.jsx)(b.Z.Portal, {
                  children: (0, S.jsx)(b.Z.Content, {
                    children: a.map((e, t) =>
                      (0, S.jsx)(
                        b.Z.Item,
                        {
                          className: "text-md",
                          value: e.value,
                          children: (0, S.jsx)(j.Z, v({}, e.display)),
                        },
                        t
                      )
                    ),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function P(e) {
        let { workspaceId: t, data: n } = e,
          i = (0, d.ec)(d.F_.isTeamPlan),
          r = (0, c.t)();
        return (0, S.jsxs)(w.$V, {
          children: [
            i && (0, S.jsx)(w.W8, {}),
            (0, S.jsx)(Z, {
              title: N.workspaceDetails,
              children: (0, S.jsx)(
                j.Z,
                v(
                  v({}, N.organizationIdLabel),
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
            (0, S.jsx)(Z, {
              title: N.sharingSettingsTitle,
              upsellEnterprise: i,
              children: (0, S.jsx)(w.qQ, {
                children: (0, S.jsx)(M, {
                  workspaceId: t,
                  label: N.chatSharingTitle,
                  setting: s.bb.CHAT_SHARE_SETTINGS,
                  disabled: i,
                  defaultValue: n.share_settings.chat_share_setting,
                  values: [
                    {
                      display: N.workspaceMembersOnlySelect,
                      value: s.Gz.WORKSPACE_ONLY,
                    },
                    { display: N.noOneSelect, value: s.Gz.NO_ONE },
                  ],
                }),
              }),
            }),
            (0, S.jsx)(Z, {
              title: N.retentionPolicyTitle,
              description: N.retentionChange,
              upsellEnterprise: i,
              children: (0, S.jsx)(k, { conversationTTL: n.conversation_ttl }),
            }),
          ],
        });
      }
      function _(e) {
        let { currentWorkspaceId: t } = e,
          { data: n, isLoading: i } = (0, o.C)(t),
          s = (0, x.Z)();
        return (0, S.jsxs)(S.Fragment, {
          children: [
            (0, S.jsx)(h(), {
              children: (0, S.jsx)("title", {
                children: s.formatMessage(N.title),
              }),
            }),
            (0, S.jsx)(r.yG, { title: s.formatMessage(N.title) }),
            (0, S.jsx)(r.hb, {
              showSpinner: i,
              children:
                void 0 === n
                  ? null
                  : (0, S.jsx)(P, { workspaceId: t, data: n }),
            }),
          ],
        });
      }
      let N = (0, m.vU)({
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
      function T(e, t) {
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
      var D = !0;
      function E(e) {
        return (0, S.jsx)(
          _,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? T(Object(n), !0).forEach(function (t) {
                    (0, i.Z)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : T(Object(n)).forEach(function (t) {
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
        return (0, S.jsx)(r.ZP, {
          mobilePageTitle: "Settings",
          requireAdminPrivileges: !0,
          children: e,
        });
      };
    },
    41594: function (e, t, n) {
      "use strict";
      n.d(t, {
        $V: function () {
          return p;
        },
        A4: function () {
          return f;
        },
        Li: function () {
          return m;
        },
        W8: function () {
          return y;
        },
        i$: function () {
          return h;
        },
        i9: function () {
          return j;
        },
        qQ: function () {
          return x;
        },
        vi: function () {
          return b;
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
        u = n(73017),
        g = n(21389);
      let p = g.Z.div(
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
        j = g.Z.div(
          o || (o = (0, u.Z)(["flex flex-col gap-3 w-full m-auto md:m-0"]))
        ),
        m = g.Z.div(l || (l = (0, u.Z)(["text-sm"]))),
        b = g.Z.div(c || (c = (0, u.Z)(["flex justify-between py-4 gap-4"]))),
        y = g.Z.hr(d || (d = (0, u.Z)(["max-w-xl border-token-border-light"])));
    },
    4449: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/settings",
        function () {
          return n(8956);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9112, 2888, 9774, 179], function () {
      return e((e.s = 4449));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=settings-9784e5fd778c176d.js.map
