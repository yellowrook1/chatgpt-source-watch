(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [106],
  {
    42199: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return x;
          },
          default: function () {
            return h;
          },
        });
      var r = n(94734),
        i = n(29124),
        o = n.n(i),
        s = {
          src: "https://cdn.oaistatic.com/_next/static/media/gpts-og.772bef1f.jpg",
          height: 315,
          width: 600,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAnQF//8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIDEQQSQQD/2gAIAQEAAT8AxiZMNmai+wk3ItuCrPPf/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Ar//EABkRAAEFAAAAAAAAAAAAAAAAAAEAAxEhUf/aAAgBAwEBPwBqwZ1f/9k=",
          blurWidth: 8,
          blurHeight: 4,
        },
        c = n(35250);
      function u() {
        var e = "Explore GPTs",
          t =
            "Discover and create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills.",
          n = s.src;
        return (0, c.jsxs)(o(), {
          children: [
            (0, c.jsx)("title", { children: e }),
            (0, c.jsx)("meta", { name: "title", content: e }, "title"),
            (0, c.jsx)(
              "meta",
              { property: "og:site_name", content: "ChatGPT" },
              "og:site_name"
            ),
            (0, c.jsx)(
              "meta",
              { property: "og:type", content: "website" },
              "og:type"
            ),
            (0, c.jsx)(
              "meta",
              { property: "og:title", content: e },
              "og:title"
            ),
            (0, c.jsx)(
              "meta",
              { property: "og:url", content: "/gpts" },
              "og:url"
            ),
            (0, c.jsx)(
              "meta",
              { name: "description", content: t },
              "description"
            ),
            (0, c.jsx)(
              "meta",
              { property: "og:description", content: t },
              "og:description"
            ),
            (0, c.jsx)(
              "meta",
              { property: "og:image", content: n },
              "og:image"
            ),
            (0, c.jsx)(
              "meta",
              { property: "og:image:width", content: "1200" },
              "og:image:width"
            ),
            (0, c.jsx)(
              "meta",
              { property: "og:image:height", content: "630" },
              "og:image:height"
            ),
          ],
        });
      }
      var a = n(61305),
        A = n(7144),
        l = n(12374),
        d = n(25349),
        f = n(99893),
        g = n(70079),
        m = n(56276),
        x = !0;
      function h(e) {
        var t,
          n = "store_anon" === e.kind,
          i = null === (t = (0, A.t)()) || void 0 === t ? void 0 : t.planType;
        return ((0, g.useEffect)(
          function () {
            (i || n) &&
              d.A.publicEvent(f.M.pageView, {
                page: "gpts/discovery",
                isAnon: n,
                referrer: e.referrer,
                plan_type: i,
              });
          },
          [n, e.referrer, i]
        ),
        n)
          ? (0, c.jsxs)("div", {
              className: "relative h-full w-full flex-1 flex-col overflow-auto",
              children: [(0, c.jsx)(u, {}), (0, c.jsx)(r.fN, { anon: !0 })],
            })
          : (0, c.jsx)(p, {});
      }
      function p() {
        var e = (0, A.hz)();
        return null == e
          ? null
          : null != e && e.includes(l.L0.GizmoStore)
            ? (0, c.jsxs)(c.Fragment, {
                children: [
                  (0, c.jsx)(o(), {
                    children: (0, c.jsx)("meta", {
                      name: "viewport",
                      content:
                        "width=device-width, initial-scale=1, maximum-scale=1",
                    }),
                  }),
                  (0, c.jsx)(a.Z, { children: (0, c.jsx)(r.fN, {}) }),
                ],
              })
            : (0, c.jsx)(m.default, {});
      }
    },
    56276: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return C;
          },
          default: function () {
            return Q;
          },
        });
      var r = n(36112),
        i = n(7144),
        o = n(12374),
        s = n(83380),
        c = n(10721),
        u = n(70079),
        a = n(32004),
        A = n(94968),
        l = n(91559),
        d = n(63866),
        f = n(56685),
        g = n(37097),
        m = n(94734),
        x = n(35250);
      function h(e, t) {
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
      function p() {
        var e,
          t = (0, i.t)(),
          n = (0, c.useRouter)(),
          r = (0, g.Yp)(),
          u = r.data,
          a = r.isLoading;
        if (
          ((0, s.yx)({
            resetThreadAction: function () {
              n.push("/");
            },
          }),
          null == t)
        )
          return null;
        var A =
          null !==
            (e =
              null == u
                ? void 0
                : u.cuts.map(function (e) {
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
          t.features.includes(o.L0.GizmoStore) &&
            (A = A.filter(function (e) {
              return "mine" === e.cutId;
            })),
          A.some(function (e) {
            return "mine" === e.cutId;
          }) ||
            A.unshift({
              cutId: "mine",
              title: "My GPTs",
              items: [],
              cursor: null,
            }),
          (0, x.jsx)("div", {
            className: "mx-auto max-w-3xl px-4 py-12",
            children: a
              ? (0, x.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, x.jsx)(d.Z, {}),
                })
              : A.map(function (e) {
                  return (0, x.jsx)(
                    j,
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
                  );
                }),
          })
        );
      }
      function j(e) {
        var t = e.cutId,
          n = e.title,
          r = e.items,
          i = e.cursor,
          o = e.canRemoveRecent,
          s = e.createRowType;
        return (0, x.jsxs)(m.b1, {
          title: n,
          children: [
            null != s && (0, x.jsx)(f.at, { type: s }),
            r.map(function (e) {
              return (0, x.jsx)(
                f.r1,
                { gizmoResource: e.resource, canRemoveRecent: o },
                e.resource.gizmo.id
              );
            }),
            null != i &&
              (0, x.jsx)(v, {
                cutId: t,
                cursor: i,
                fetchOnMount: 0 === r.length,
              }),
          ],
        });
      }
      function v(e) {
        var t = e.cutId,
          n = e.cursor,
          i = e.fetchOnMount,
          o = (0, u.useState)(i),
          s = o[0],
          c = o[1],
          A = (0, g.Fi)({ cutId: t, limit: 8, cursor: n, enabled: s }),
          d = A.data,
          m = A.hasNextPage,
          p = A.fetchNextPage,
          j = A.isLoading;
        return (0, x.jsxs)("div", {
          children: [
            (0, x.jsx)("div", {
              children:
                null == d
                  ? void 0
                  : d.pages.flatMap(function (e) {
                      return e.list.items.map(function (e) {
                        var t = e.resource;
                        return (0, x.jsx)(
                          f.r1,
                          { gizmoResource: t },
                          t.gizmo.id
                        );
                      });
                    }),
            }),
            !s || m || j
              ? (0, x.jsx)(l.z, {
                  color: "neutral",
                  onClick: function () {
                    s ? p() : c(!0);
                  },
                  loading: j,
                  className: "w-full",
                  children: (0, x.jsx)(
                    a.Z,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? h(Object(n), !0).forEach(function (t) {
                              (0, r.Z)(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : h(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                      }
                      return e;
                    })({}, w.discoveryLoadMore)
                  ),
                })
              : null,
          ],
        });
      }
      var w = (0, A.vU)({
          discoveryLoadMore: {
            id: "gizmo.mygpts.loadMore",
            defaultMessage: "Load more",
          },
        }),
        y = n(3359),
        b = n(81853);
      function P(e) {
        var t = e.children,
          n = (0, i.t)();
        return null == n
          ? null
          : n.canInteractWithGizmos()
            ? (0, x.jsxs)("div", {
                children: [
                  t,
                  (0, x.jsx)("div", {
                    className: "fixed bottom-3 right-3",
                    children: (0, x.jsx)(y.Z, {}),
                  }),
                ],
              })
            : n.hasPaidSubscription()
              ? null
              : (0, x.jsx)(I, {
                  button: (0, x.jsx)(l.z, {
                    onClick: function () {
                      return (0, b.MG)();
                    },
                    children: "Upgrade to ChatGPT Plus",
                  }),
                  children: "GPTs are gradually rolling out to Plus users",
                });
      }
      function I(e) {
        var t = e.children,
          n = e.button;
        return (0, x.jsx)("div", {
          className: "flex h-full w-full items-center justify-center",
          children: (0, x.jsxs)("div", {
            className: "flex max-w-sm flex-col gap-4 p-6 text-center",
            children: [
              (0, x.jsx)("h2", { children: t }),
              (0, x.jsx)("div", { className: "m-auto", children: n }),
            ],
          }),
        });
      }
      var E = n(61305),
        C = !0;
      function Q() {
        return (0, x.jsx)(E.Z, {
          children: (0, x.jsx)(P, { children: (0, x.jsx)(p, {}) }),
        });
      }
    },
    61305: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return A;
        },
      });
      var r = n(49516),
        i = n(83562),
        o = n(35212),
        s = n(10721),
        c = n(8024),
        u = n(5813),
        a = n(35250);
      function A(e) {
        var t = e.children,
          n = (0, s.useRouter)();
        return (0, a.jsx)(o.Z, {
          mobileHeaderRightContent: null,
          sidebar: (0, a.jsxs)(i.ZP, {
            onNewThread: function () {
              n.push("/");
            },
            children: [
              (0, a.jsx)(u.Dy, {}),
              (0, a.jsx)(r.Z, { activeId: void 0 }),
            ],
          }),
          children: (0, a.jsx)(c.Z, { children: t }),
        });
      }
    },
    5599: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/gpts",
        function () {
          return n(42199);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 5599));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=gpts-e18de67bc28b9f7f.js.map
