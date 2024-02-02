(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1530],
  {
    56276: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return _;
          },
          default: function () {
            return R;
          },
        });
      var r = n(36112),
        i = n(7144),
        c = n(12374),
        u = n(83380),
        s = n(10721),
        o = n(70079),
        l = n(32004),
        a = n(94968),
        d = n(91559),
        f = n(63866),
        m = n(56685),
        h = n(37097),
        x = n(94734),
        j = n(35250);
      function p(e, t) {
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
      function v() {
        var e,
          t = (0, i.t)(),
          n = (0, s.useRouter)(),
          r = (0, h.Yp)(),
          o = r.data,
          l = r.isLoading;
        if (
          ((0, u.yx)({
            resetThreadAction: function () {
              n.push("/");
            },
          }),
          null == t)
        )
          return null;
        var a =
          null !==
            (e =
              null == o
                ? void 0
                : o.cuts.map(function (e) {
                    return {
                      cutId: e.info.id,
                      title: e.info.title,
                      items: e.list.items,
                      cursor: e.list.cursor,
                    };
                  })) && void 0 !== e
            ? e
            : [];
        return (
          t.features.includes(c.L0.GizmoStore) &&
            (a = a.filter(function (e) {
              return "mine" === e.cutId;
            })),
          a.some(function (e) {
            return "mine" === e.cutId;
          }) ||
            a.unshift({
              cutId: "mine",
              title: "My GPTs",
              items: [],
              cursor: null,
            }),
          (0, j.jsx)("div", {
            className: "mx-auto max-w-3xl px-4 py-12",
            children: l
              ? (0, j.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, j.jsx)(f.Z, {}),
                })
              : a.map(function (e) {
                  return (0, j.jsx)(
                    g,
                    {
                      cutId: e.cutId,
                      title: e.title,
                      items: e.items,
                      cursor: e.cursor,
                      createRowType:
                        "mine" == e.cutId
                          ? t.canCreateGizmos()
                            ? m.a7.Enabled
                            : m.a7.ComingSoon
                          : void 0,
                      canRemoveRecent: "recent" === e.cutId,
                    },
                    e.cutId
                  );
                }),
          })
        );
      }
      function g(e) {
        var t = e.cutId,
          n = e.title,
          r = e.items,
          i = e.cursor,
          c = e.canRemoveRecent,
          u = e.createRowType;
        return (0, j.jsxs)(x.b1, {
          title: n,
          children: [
            null != u && (0, j.jsx)(m.at, { type: u }),
            r.map(function (e) {
              return (0, j.jsx)(
                m.r1,
                { gizmoResource: e.resource, canRemoveRecent: c },
                e.resource.gizmo.id
              );
            }),
            null != i &&
              (0, j.jsx)(b, {
                cutId: t,
                cursor: i,
                fetchOnMount: 0 === r.length,
              }),
          ],
        });
      }
      function b(e) {
        var t = e.cutId,
          n = e.cursor,
          i = e.fetchOnMount,
          c = (0, o.useState)(i),
          u = c[0],
          s = c[1],
          a = (0, h.Fi)({ cutId: t, limit: 8, cursor: n, enabled: u }),
          f = a.data,
          x = a.hasNextPage,
          v = a.fetchNextPage,
          g = a.isLoading;
        return (0, j.jsxs)("div", {
          children: [
            (0, j.jsx)("div", {
              children:
                null == f
                  ? void 0
                  : f.pages.flatMap(function (e) {
                      return e.list.items.map(function (e) {
                        var t = e.resource;
                        return (0, j.jsx)(
                          m.r1,
                          { gizmoResource: t },
                          t.gizmo.id
                        );
                      });
                    }),
            }),
            !u || x || g
              ? (0, j.jsx)(d.z, {
                  color: "neutral",
                  onClick: function () {
                    u ? v() : s(!0);
                  },
                  loading: g,
                  className: "w-full",
                  children: (0, j.jsx)(
                    l.Z,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? p(Object(n), !0).forEach(function (t) {
                              (0, r.Z)(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : p(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                      }
                      return e;
                    })({}, y.discoveryLoadMore)
                  ),
                })
              : null,
          ],
        });
      }
      var y = (0, a.vU)({
          discoveryLoadMore: {
            id: "gizmo.mygpts.loadMore",
            defaultMessage: "Load more",
          },
        }),
        O = n(3359),
        P = n(12275);
      function w(e) {
        var t = e.children,
          n = (0, i.t)();
        return null == n
          ? null
          : n.canInteractWithGizmos()
            ? (0, j.jsxs)("div", {
                children: [
                  t,
                  (0, j.jsx)("div", {
                    className: "fixed bottom-3 right-3",
                    children: (0, j.jsx)(O.Z, {}),
                  }),
                ],
              })
            : n.hasPaidSubscription()
              ? null
              : (0, j.jsx)(N, {
                  button: (0, j.jsx)(d.z, {
                    onClick: function () {
                      return (0, P.MG)();
                    },
                    children: "Upgrade to ChatGPT Plus",
                  }),
                  children: "GPTs are gradually rolling out to Plus users",
                });
      }
      function N(e) {
        var t = e.children,
          n = e.button;
        return (0, j.jsx)("div", {
          className: "flex h-full w-full items-center justify-center",
          children: (0, j.jsxs)("div", {
            className: "flex max-w-sm flex-col gap-4 p-6 text-center",
            children: [
              (0, j.jsx)("h2", { children: t }),
              (0, j.jsx)("div", { className: "m-auto", children: n }),
            ],
          }),
        });
      }
      var I = n(61305),
        _ = !0;
      function R() {
        return (0, j.jsx)(I.Z, {
          children: (0, j.jsx)(w, { children: (0, j.jsx)(v, {}) }),
        });
      }
    },
    61305: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(49516),
        i = n(70521),
        c = n(35212),
        u = n(10721),
        s = n(8024),
        o = n(10318),
        l = n(35250);
      function a(e) {
        var t = e.children,
          n = (0, u.useRouter)();
        return (0, l.jsx)(c.Z, {
          mobileHeaderRightContent: null,
          sidebar: (0, l.jsxs)(i.ZP, {
            onNewThread: function () {
              n.push("/");
            },
            children: [
              (0, l.jsx)(o.Dy, {}),
              (0, l.jsx)(r.Z, { activeId: void 0 }),
            ],
          }),
          children: (0, l.jsx)(s.Z, { children: t }),
        });
      }
    },
    45578: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/gpts/mine",
        function () {
          return n(56276);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 45578));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=mine-c2d7bc1da5dc7f60.js.map
