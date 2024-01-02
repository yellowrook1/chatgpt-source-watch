(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [165],
  {
    34537: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/share/[[...shareParams]]",
        function () {
          return n(74387);
        },
      ]);
    },
    74387: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return P;
          },
          config: function () {
            return w;
          },
          default: function () {
            return C;
          },
        });
      var r = n(39324),
        a = n(71209),
        i = n(22830),
        o = n(35250),
        u = n(35448),
        l = n(16578),
        s = n.n(l),
        d = n(70079),
        c = n(1454),
        f = n(3001),
        _ = n(35290),
        h = n(80852),
        v = n(38317),
        p = n(37541),
        m = n(32983),
        y = n(82841),
        g = n(36218),
        b = n(75527),
        x = n(6410);
      function j(e) {
        var t = e.sharedConversationId,
          n = e.initiallyHighlightedMessageId,
          r = e.continueConversationUrl,
          a = (0, d.useMemo)(function () {
            return { app: g.VY, origin: "chat" };
          }, []),
          i = (0, b.GR)(t);
        return (0, o.jsx)(y.Af.Provider, {
          value: a,
          children: (0, o.jsx)(m.gB.Provider, {
            value: !0,
            children: (0, o.jsx)(m.XA.Provider, {
              value: i,
              children: (0, o.jsx)(x.Z, {
                clientThreadId: t,
                setClientThreadId: function () {},
                initiallyHighlightedMessageId: n,
                continueConversationUrl: r,
              }),
            }),
          }),
        });
      }
      var P = !0,
        w = { runtime: "nodejs" },
        k = (0, f.vU)({
          home: {
            id: "sharedConversation.home",
            defaultMessage: "Home",
            description: "Home link text in error message",
          },
        });
      function C(e) {
        if ("error" === e.serverResponse.type)
          return (0, o.jsx)(T, { error: e.serverResponse.error });
        var t = (0, a._)((0, r._)({}, e), {
          conversationData: e.serverResponse.data,
        });
        return e.continueMode
          ? (0, o.jsx)(O, (0, r._)({}, t))
          : e.moderationMode
            ? (0, o.jsx)(p.Z, { children: (0, o.jsx)(D, (0, r._)({}, t)) })
            : (0, o.jsx)(D, (0, r._)({}, t));
      }
      function O(e) {
        var t = (0, i._)(
          (0, d.useState)(function () {
            return (0, b.OX)();
          }),
          1
        )[0];
        b.tQ.initThreadFromServerData(
          t,
          e.conversationData,
          !0,
          e.sharedConversationId
        );
        var n = (0, u.NL)();
        return (null != e.plugins &&
          n.setQueryData(
            e.plugins.map(function (e) {
              return e.id;
            }),
            e.plugins
          ),
        null != e.chatPageProps)
          ? (0, o.jsx)(
              h.default,
              (0, a._)((0, r._)({}, e.chatPageProps), { clientThreadId: t })
            )
          : null;
      }
      function D(e) {
        b.tQ.initThreadFromServerData(
          e.sharedConversationId,
          e.conversationData,
          !0
        );
        var t = (0, u.NL)();
        return (
          null != e.plugins &&
            t.setQueryData(
              e.plugins.map(function (e) {
                return e.id;
              }),
              e.plugins
            ),
          (0, o.jsx)(
            j,
            (0, a._)((0, r._)({}, e), {
              initiallyHighlightedMessageId:
                e.conversationData.highlighted_message_id,
              continueConversationUrl:
                e.conversationData.continue_conversation_url,
            })
          )
        );
      }
      function T(e) {
        var t = e.error;
        return (0, o.jsx)("div", {
          className: "mx-8 mt-8 flex flex-col items-center sm:mt-16",
          children: (0, o.jsxs)("div", {
            className: "max-w-xl rounded-lg bg-red-500 px-8 py-4 text-white",
            role: "alert",
            children: [
              (0, o.jsx)("div", { children: t }),
              (0, o.jsx)("div", {
                className: "mt-4",
                children: (0, o.jsxs)(s(), {
                  href: "/",
                  className: "flex items-center gap-2",
                  children: [
                    (0, o.jsx)(v.ZP, { icon: c.m6D }),
                    (0, o.jsx)(_.Z, (0, r._)({}, k.home)),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    21654: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(39324),
        a = n(71209);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          noSSR: function () {
            return l;
          },
          default: function () {
            return s;
          },
        });
      var i = n(64838),
        o = (n(70079), i._(n(1905)));
      function u(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function l(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
      function s(e, t) {
        var n = o.default,
          i = {
            loading: function (e) {
              return e.error, e.isLoading, e.pastDelay, null;
            },
          };
        e instanceof Promise
          ? (i.loader = function () {
              return e;
            })
          : "function" == typeof e
            ? (i.loader = e)
            : "object" == typeof e && (i = r._({}, i, e));
        var s = (i = r._({}, i, t)).loader;
        return (i.loadableGenerated &&
          ((i = r._({}, i, i.loadableGenerated)), delete i.loadableGenerated),
        "boolean" != typeof i.ssr || i.ssr)
          ? n(
              a._(r._({}, i), {
                loader: function () {
                  return null != s
                    ? s().then(u)
                    : Promise.resolve(
                        u(function () {
                          return null;
                        })
                      );
                },
              })
            )
          : (delete i.webpack, delete i.modules, l(n, i));
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    48326: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "LoadableContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      var r = n(64838)._(n(70079)).default.createContext(null);
    },
    1905: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(51217),
        a = n(31819),
        i = n(39324),
        o = n(71209);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return p;
          },
        });
      var u = n(64838)._(n(70079)),
        l = n(48326),
        s = [],
        d = [],
        c = !1;
      function f(e) {
        var t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then(function (e) {
              return (n.loading = !1), (n.loaded = e), e;
            })
            .catch(function (e) {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      var _ = (function () {
        function e(t, n) {
          r._(this, e),
            (this._loadFn = t),
            (this._opts = n),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          a._(e, [
            {
              key: "promise",
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: "retry",
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var t = this._res,
                  n = this._opts;
                t.loading &&
                  ("number" == typeof n.delay &&
                    (0 === n.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 });
                        }, n.delay))),
                  "number" == typeof n.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 });
                    }, n.timeout))),
                  this._res.promise
                    .then(function () {
                      e._update({}), e._clearTimeouts();
                    })
                    .catch(function (t) {
                      e._update({}), e._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: "_update",
              value: function (e) {
                (this._state = i._(
                  o._(i._({}, this._state), {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  }),
                  e
                )),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: "_clearTimeouts",
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: "getCurrentValue",
              value: function () {
                return this._state;
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]),
          e
        );
      })();
      function h(e) {
        return (function (e, t) {
          var n = function () {
              if (!o) {
                var t = new _(e, i);
                o = {
                  getCurrentValue: t.getCurrentValue.bind(t),
                  subscribe: t.subscribe.bind(t),
                  retry: t.retry.bind(t),
                  promise: t.promise.bind(t),
                };
              }
              return o.promise();
            },
            r = function () {
              n();
              var e = u.default.useContext(l.LoadableContext);
              e &&
                Array.isArray(i.modules) &&
                i.modules.forEach(function (t) {
                  e(t);
                });
            },
            a = function (e, t) {
              r();
              var n = u.default.useSyncExternalStore(
                o.subscribe,
                o.getCurrentValue,
                o.getCurrentValue
              );
              return (
                u.default.useImperativeHandle(
                  t,
                  function () {
                    return { retry: o.retry };
                  },
                  []
                ),
                u.default.useMemo(
                  function () {
                    var t;
                    return n.loading || n.error
                      ? u.default.createElement(i.loading, {
                          isLoading: n.loading,
                          pastDelay: n.pastDelay,
                          timedOut: n.timedOut,
                          error: n.error,
                          retry: o.retry,
                        })
                      : n.loaded
                        ? u.default.createElement(
                            (t = n.loaded) && t.default ? t.default : t,
                            e
                          )
                        : null;
                  },
                  [e, n]
                )
              );
            },
            i = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              t
            ),
            o = null;
          if (!c) {
            var s = i.webpack ? i.webpack() : i.modules;
            s &&
              d.push(function (e) {
                var t = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (
                    var i, o = s[Symbol.iterator]();
                    !(t = (i = o.next()).done);
                    t = !0
                  ) {
                    var u = i.value;
                    if (-1 !== e.indexOf(u)) return n();
                  }
                } catch (e) {
                  (r = !0), (a = e);
                } finally {
                  try {
                    t || null == o.return || o.return();
                  } finally {
                    if (r) throw a;
                  }
                }
              });
          }
          return (
            (a.preload = function () {
              return n();
            }),
            (a.displayName = "LoadableComponent"),
            u.default.forwardRef(a)
          );
        })(f, e);
      }
      function v(e, t) {
        for (var n = []; e.length; ) {
          var r = e.pop();
          n.push(r(t));
        }
        return Promise.all(n).then(function () {
          if (e.length) return v(e, t);
        });
      }
      (h.preloadAll = function () {
        return new Promise(function (e, t) {
          v(s).then(e, t);
        });
      }),
        (h.preloadReady = function (e) {
          return (
            void 0 === e && (e = []),
            new Promise(function (t) {
              var n = function () {
                return (c = !0), t();
              };
              v(d, e).then(n, n);
            })
          );
        }),
        (window.__NEXT_PRELOADREADY = h.preloadReady);
      var p = h;
    },
    70060: function (e, t, n) {
      e.exports = n(21654);
    },
  },
  function (e) {
    e.O(
      0,
      [960, 246, 798, 741, 786, 984, 653, 597, 496, 709, 774, 888, 179],
      function () {
        return e((e.s = 34537));
      }
    ),
      (_N_E = e.O());
  },
]);
