(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [106],
  {
    82488: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return j;
          },
          default: function () {
            return g;
          },
        });
      var r = n(67192),
        i = n(80483),
        o = n.n(i),
        s = n(35250);
      function c() {
        let e = "Explore GPTs",
          t =
            "Discover and create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills.";
        return (0, s.jsxs)(o(), {
          children: [
            (0, s.jsx)("title", { children: e }),
            (0, s.jsx)("meta", { name: "title", content: e }, "title"),
            (0, s.jsx)(
              "meta",
              { property: "og:site_name", content: "ChatGPT" },
              "og:site_name"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:type", content: "website" },
              "og:type"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:title", content: e },
              "og:title"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:url", content: "/gpts" },
              "og:url"
            ),
            (0, s.jsx)(
              "meta",
              { name: "description", content: t },
              "description"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:description", content: t },
              "og:description"
            ),
            (0, s.jsx)(
              "meta",
              {
                property: "og:image",
                content:
                  "https://cdn.oaistatic.com/_next/static/media/gpts-og.772bef1f.jpg",
              },
              "og:image"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:image:width", content: "1200" },
              "og:image:width"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:image:height", content: "630" },
              "og:image:height"
            ),
          ],
        });
      }
      var l = n(90775),
        u = n(19111),
        a = n(24668),
        d = n(9417),
        m = n(91128),
        f = n(53197),
        p = n(70079),
        x = n(1705),
        j = !0;
      function g(e) {
        var t;
        let n = "store_anon" === e.kind,
          i = null === (t = (0, a.t)()) || void 0 === t ? void 0 : t.planType;
        return ((0, p.useEffect)(() => {
          (i || n) &&
            m.A.logEvent(f.M.pageView, {
              page: "gpts/discovery",
              isAnon: n,
              referrer: e.referrer,
              plan_type: i,
            });
        }, [n, e.referrer, i]),
        n)
          ? (0, s.jsxs)("div", {
              className: "relative h-full w-full flex-1 flex-col overflow-auto",
              children: [(0, s.jsx)(c, {}), (0, s.jsx)(r.fN, { anon: !0 })],
            })
          : (0, s.jsx)(h, {});
      }
      function h() {
        let e = (0, a.hz)();
        return null == e
          ? null
          : null != e && e.includes(d.L0.GizmoStore)
            ? (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(u.r, {}),
                  (0, s.jsx)(l.Z, { children: (0, s.jsx)(r.fN, {}) }),
                ],
              })
            : (0, s.jsx)(x.default, {});
      }
    },
    1705: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return I;
          },
          default: function () {
            return z;
          },
        });
      var r = n(39827),
        i = n(24668),
        o = n(9417),
        s = n(84126),
        c = n(12366),
        l = n(70079),
        u = n(32004),
        a = n(94968),
        d = n(7557),
        m = n(42005),
        f = n(81595),
        p = n(89691),
        x = n(67192),
        j = n(35250);
      function g(e, t) {
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
      function h() {
        var e;
        let t = (0, i.t)(),
          n = (0, c.useRouter)(),
          { data: r, isLoading: l } = (0, p.Yp)();
        if (
          ((0, s.yx)({
            resetThreadAction: () => {
              n.push("/");
            },
          }),
          null == t)
        )
          return null;
        let u =
          null !==
            (e =
              null == r
                ? void 0
                : r.cuts.map((e) => ({
                    cutId: e.info.id,
                    title: e.info.title,
                    items: e.list.items,
                    cursor: e.list.cursor,
                  }))) && void 0 !== e
            ? e
            : [];
        return (
          t.features.includes(o.L0.GizmoStore) &&
            (u = u.filter((e) => "mine" === e.cutId)),
          u.some((e) => "mine" === e.cutId) ||
            u.unshift({
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
                  children: (0, j.jsx)(m.Z, {}),
                })
              : u.map((e) =>
                  (0, j.jsx)(
                    v,
                    {
                      cutId: e.cutId,
                      title: e.title,
                      items: e.items,
                      cursor: e.cursor,
                      createRowType:
                        "mine" == e.cutId
                          ? t.canCreateGizmos()
                            ? f.a7.Enabled
                            : f.a7.ComingSoon
                          : void 0,
                      canRemoveRecent: "recent" === e.cutId,
                    },
                    e.cutId
                  )
                ),
          })
        );
      }
      function v(e) {
        let {
          cutId: t,
          title: n,
          items: r,
          cursor: i,
          canRemoveRecent: o,
          createRowType: s,
        } = e;
        return (0, j.jsxs)(x.b1, {
          title: n,
          children: [
            null != s && (0, j.jsx)(f.at, { type: s }),
            r.map((e) =>
              (0, j.jsx)(
                f.r1,
                { gizmoResource: e.resource, canRemoveRecent: o },
                e.resource.gizmo.id
              )
            ),
            null != i &&
              (0, j.jsx)(y, {
                cutId: t,
                cursor: i,
                fetchOnMount: 0 === r.length,
              }),
          ],
        });
      }
      function y(e) {
        let { cutId: t, cursor: n, fetchOnMount: i } = e,
          { 0: o, 1: s } = (0, l.useState)(i),
          {
            data: c,
            hasNextPage: a,
            fetchNextPage: m,
            isLoading: x,
          } = (0, p.Fi)({ cutId: t, limit: 8, cursor: n, enabled: o });
        return (0, j.jsxs)("div", {
          children: [
            (0, j.jsx)("div", {
              children:
                null == c
                  ? void 0
                  : c.pages.flatMap((e) =>
                      e.list.items.map((e) => {
                        let { resource: t } = e;
                        return (0, j.jsx)(
                          f.r1,
                          { gizmoResource: t },
                          t.gizmo.id
                        );
                      })
                    ),
            }),
            !o || a || x
              ? (0, j.jsx)(d.z, {
                  color: "neutral",
                  onClick: () => {
                    o ? m() : s(!0);
                  },
                  loading: x,
                  className: "w-full",
                  children: (0, j.jsx)(
                    u.Z,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? g(Object(n), !0).forEach(function (t) {
                              (0, r.Z)(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : g(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                      }
                      return e;
                    })({}, b.discoveryLoadMore)
                  ),
                })
              : null,
          ],
        });
      }
      let b = (0, a.vU)({
        discoveryLoadMore: {
          id: "gizmo.mygpts.loadMore",
          defaultMessage: "Load more",
        },
      });
      var w = n(55289),
        _ = n(93496);
      function P(e) {
        let { children: t } = e,
          n = (0, i.t)();
        return null == n
          ? null
          : n.canInteractWithGizmos()
            ? (0, j.jsxs)("div", {
                children: [
                  t,
                  (0, j.jsx)("div", {
                    className: "fixed bottom-3 right-3",
                    children: (0, j.jsx)(w.Z, {}),
                  }),
                ],
              })
            : n.hasPaidSubscription()
              ? null
              : (0, j.jsx)(O, {
                  button: (0, j.jsx)(d.z, {
                    onClick: () => (0, _.MG)(),
                    children: "Upgrade to ChatGPT Plus",
                  }),
                  children: "GPTs are gradually rolling out to Plus users",
                });
      }
      function O(e) {
        let { children: t, button: n } = e;
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
      var N = n(90775),
        I = !0;
      function z() {
        return (0, j.jsx)(N.Z, {
          children: (0, j.jsx)(P, { children: (0, j.jsx)(h, {}) }),
        });
      }
    },
    90775: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(37229),
        i = n(95482),
        o = n(24605),
        s = n(12366),
        c = n(81056),
        l = n(49031),
        u = n(35250);
      function a(e) {
        let { children: t } = e,
          n = (0, s.useRouter)();
        return (0, u.jsx)(o.Z, {
          mobileHeaderRightContent: null,
          sidebar: (0, u.jsxs)(i.ZP, {
            onNewThread: () => {
              n.push("/");
            },
            children: [
              (0, u.jsx)(l.Dy, {}),
              (0, u.jsx)(r.Z, { activeId: void 0 }),
            ],
          }),
          children: (0, u.jsx)(c.Z, { children: t }),
        });
      }
    },
    44732: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/gpts",
        function () {
          return n(82488);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2888, 9774, 179], function () {
      return e((e.s = 44732));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=gpts-f8199af5da23ff36.js.map
