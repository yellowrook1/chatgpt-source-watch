(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1530],
  {
    1705: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return I;
          },
          default: function () {
            return z;
          },
        });
      var n = r(39827),
        i = r(24668),
        s = r(9417),
        c = r(84126),
        l = r(12366),
        u = r(70079),
        o = r(32004),
        a = r(94968),
        d = r(7557),
        f = r(42005),
        m = r(81595),
        j = r(89691),
        x = r(67192),
        h = r(35250);
      function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function v() {
        var e;
        let t = (0, i.t)(),
          r = (0, l.useRouter)(),
          { data: n, isLoading: u } = (0, j.Yp)();
        if (
          ((0, c.yx)({
            resetThreadAction: () => {
              r.push("/");
            },
          }),
          null == t)
        )
          return null;
        let o =
          null !==
            (e =
              null == n
                ? void 0
                : n.cuts.map((e) => ({
                    cutId: e.info.id,
                    title: e.info.title,
                    items: e.list.items,
                    cursor: e.list.cursor,
                  }))) && void 0 !== e
            ? e
            : [];
        return (
          t.features.includes(s.L0.GizmoStore) &&
            (o = o.filter((e) => "mine" === e.cutId)),
          o.some((e) => "mine" === e.cutId) ||
            o.unshift({
              cutId: "mine",
              title: "My GPTs",
              items: [],
              cursor: null,
            }),
          (0, h.jsx)("div", {
            className: "mx-auto max-w-3xl px-4 py-12",
            children: u
              ? (0, h.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, h.jsx)(f.Z, {}),
                })
              : o.map((e) =>
                  (0, h.jsx)(
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
                  )
                ),
          })
        );
      }
      function g(e) {
        let {
          cutId: t,
          title: r,
          items: n,
          cursor: i,
          canRemoveRecent: s,
          createRowType: c,
        } = e;
        return (0, h.jsxs)(x.b1, {
          title: r,
          children: [
            null != c && (0, h.jsx)(m.at, { type: c }),
            n.map((e) =>
              (0, h.jsx)(
                m.r1,
                { gizmoResource: e.resource, canRemoveRecent: s },
                e.resource.gizmo.id
              )
            ),
            null != i &&
              (0, h.jsx)(b, {
                cutId: t,
                cursor: i,
                fetchOnMount: 0 === n.length,
              }),
          ],
        });
      }
      function b(e) {
        let { cutId: t, cursor: r, fetchOnMount: i } = e,
          { 0: s, 1: c } = (0, u.useState)(i),
          {
            data: l,
            hasNextPage: a,
            fetchNextPage: f,
            isLoading: x,
          } = (0, j.Fi)({ cutId: t, limit: 8, cursor: r, enabled: s });
        return (0, h.jsxs)("div", {
          children: [
            (0, h.jsx)("div", {
              children:
                null == l
                  ? void 0
                  : l.pages.flatMap((e) =>
                      e.list.items.map((e) => {
                        let { resource: t } = e;
                        return (0, h.jsx)(
                          m.r1,
                          { gizmoResource: t },
                          t.gizmo.id
                        );
                      })
                    ),
            }),
            !s || a || x
              ? (0, h.jsx)(d.z, {
                  color: "neutral",
                  onClick: () => {
                    s ? f() : c(!0);
                  },
                  loading: x,
                  className: "w-full",
                  children: (0, h.jsx)(
                    o.Z,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? p(Object(r), !0).forEach(function (t) {
                              (0, n.Z)(e, t, r[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(r)
                              )
                            : p(Object(r)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
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
      let y = (0, a.vU)({
        discoveryLoadMore: {
          id: "gizmo.mygpts.loadMore",
          defaultMessage: "Load more",
        },
      });
      var O = r(55289),
        w = r(93496);
      function P(e) {
        let { children: t } = e,
          r = (0, i.t)();
        return null == r
          ? null
          : r.canInteractWithGizmos()
            ? (0, h.jsxs)("div", {
                children: [
                  t,
                  (0, h.jsx)("div", {
                    className: "fixed bottom-3 right-3",
                    children: (0, h.jsx)(O.Z, {}),
                  }),
                ],
              })
            : r.hasPaidSubscription()
              ? null
              : (0, h.jsx)(_, {
                  button: (0, h.jsx)(d.z, {
                    onClick: () => (0, w.MG)(),
                    children: "Upgrade to ChatGPT Plus",
                  }),
                  children: "GPTs are gradually rolling out to Plus users",
                });
      }
      function _(e) {
        let { children: t, button: r } = e;
        return (0, h.jsx)("div", {
          className: "flex h-full w-full items-center justify-center",
          children: (0, h.jsxs)("div", {
            className: "flex max-w-sm flex-col gap-4 p-6 text-center",
            children: [
              (0, h.jsx)("h2", { children: t }),
              (0, h.jsx)("div", { className: "m-auto", children: r }),
            ],
          }),
        });
      }
      var N = r(90775),
        I = !0;
      function z() {
        return (0, h.jsx)(N.Z, {
          children: (0, h.jsx)(P, { children: (0, h.jsx)(v, {}) }),
        });
      }
    },
    90775: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(37229),
        i = r(95482),
        s = r(24605),
        c = r(12366),
        l = r(81056),
        u = r(49031),
        o = r(35250);
      function a(e) {
        let { children: t } = e,
          r = (0, c.useRouter)();
        return (0, o.jsx)(s.Z, {
          mobileHeaderRightContent: null,
          sidebar: (0, o.jsxs)(i.ZP, {
            onNewThread: () => {
              r.push("/");
            },
            children: [
              (0, o.jsx)(u.Dy, {}),
              (0, o.jsx)(n.Z, { activeId: void 0 }),
            ],
          }),
          children: (0, o.jsx)(l.Z, { children: t }),
        });
      }
    },
    16189: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/gpts/mine",
        function () {
          return r(1705);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2888, 9774, 179], function () {
      return e((e.s = 16189));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=mine-dd903b77bccf5018.js.map
