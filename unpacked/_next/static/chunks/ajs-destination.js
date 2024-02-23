"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9464],
  {
    98643: function (t, n, i) {
      i.d(n, {
        n: function () {
          return e;
        },
      });
      function e(t, n) {
        var i, e;
        return "boolean" == typeof (null == n ? void 0 : n.enabled)
          ? n.enabled
          : null ===
              (e =
                null === (i = null == t ? void 0 : t.__default) || void 0 === i
                  ? void 0
                  : i.enabled) ||
              void 0 === e ||
              e;
      }
    },
    67749: function (t, n, i) {
      i.r(n),
        i.d(n, {
          LegacyDestination: function () {
            return z;
          },
          ajsDestinations: function () {
            return G;
          },
        });
      var e = i(38104),
        r = i(69639),
        o = i(26915),
        s = i(78985),
        a = i(61120),
        u = i(89034),
        c = i(57389),
        l = i(98643),
        d = i(30318),
        h = i(83070),
        v = i(56769),
        f = i(15595),
        p = i(44126),
        g = i(71265),
        m = i(47019);
      function y(t) {
        return t.toLowerCase().replace(".", "").replace(/\s+/g, "-");
      }
      function w(t, n) {
        return void 0 === n && (n = !1), n ? btoa(t).replace(/=/g, "") : void 0;
      }
      var b = i(62462),
        _ = function (t, n) {
          var i,
            e = n.type,
            r = n.bundlingStatus,
            o = n.versionSettings,
            s =
              "unbundled" !== r &&
              ("browser" === e ||
                (null === (i = null == o ? void 0 : o.componentTypes) ||
                void 0 === i
                  ? void 0
                  : i.includes("browser")));
          return !t.startsWith("Segment") && "Iterable" !== t && s;
        },
        k = function (t, n) {
          var i = !1 === n.All && void 0 === n[t];
          return !1 === n[t] || i;
        },
        z = (function () {
          function t(t, n, i, r, o, s) {
            void 0 === r && (r = {}),
              (this.options = {}),
              (this.type = "destination"),
              (this.middleware = []),
              (this._ready = !1),
              (this._initialized = !1),
              (this.flushing = !1),
              (this.name = t),
              (this.version = n),
              (this.settings = (0, e.pi)({}, r)),
              (this.disableAutoISOConversion =
                o.disableAutoISOConversion || !1),
              (this.integrationSource = s),
              this.settings.type &&
                "browser" === this.settings.type &&
                delete this.settings.type,
              (this.options = o),
              (this.buffer = o.disableClientPersistence
                ? new v.Z(4, [])
                : new f.$(4, "".concat(i, ":dest-").concat(t))),
              this.scheduleFlush();
          }
          return (
            (t.prototype.isLoaded = function () {
              return this._ready;
            }),
            (t.prototype.ready = function () {
              var t;
              return null !== (t = this.onReady) && void 0 !== t
                ? t
                : Promise.resolve();
            }),
            (t.prototype.load = function (t, n) {
              var i;
              return (0, e.mG)(this, void 0, void 0, function () {
                var r,
                  o,
                  s = this;
                return (0, e.Jh)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (this._ready || void 0 !== this.onReady) return [2];
                      if (
                        !(null !== (i = this.integrationSource) && void 0 !== i)
                      )
                        return [3, 1];
                      return (o = i), [3, 3];
                    case 1:
                      return [
                        4,
                        (function (t, n, i, r) {
                          return (0, e.mG)(this, void 0, void 0, function () {
                            var o, s, a, u, c;
                            return (0, e.Jh)(this, function (l) {
                              switch (l.label) {
                                case 0:
                                  (s = w((o = y(n)), r)),
                                    (a = (0, g.Kg)()),
                                    (u = ""
                                      .concat(a, "/integrations/")
                                      .concat(null != s ? s : o, "/")
                                      .concat(i, "/")
                                      .concat(
                                        null != s ? s : o,
                                        ".dynamic.js.gz"
                                      )),
                                    (l.label = 1);
                                case 1:
                                  return (
                                    l.trys.push([1, 3, , 4]), [4, (0, m.v)(u)]
                                  );
                                case 2:
                                  return (
                                    l.sent(),
                                    (function (t, n, i) {
                                      var r, o;
                                      try {
                                        var s = (
                                          null !==
                                            (o =
                                              null ===
                                                (r =
                                                  null == window
                                                    ? void 0
                                                    : window.performance) ||
                                              void 0 === r
                                                ? void 0
                                                : r.getEntriesByName(
                                                    t,
                                                    "resource"
                                                  )) && void 0 !== o
                                            ? o
                                            : []
                                        )[0];
                                        s &&
                                          n.stats.gauge(
                                            "legacy_destination_time",
                                            Math.round(s.duration),
                                            (0, e.ev)(
                                              [i],
                                              s.duration < 100
                                                ? ["cached"]
                                                : [],
                                              !0
                                            )
                                          );
                                      } catch (t) {}
                                    })(u, t, n),
                                    [3, 4]
                                  );
                                case 3:
                                  throw (
                                    ((c = l.sent()),
                                    t.stats.gauge(
                                      "legacy_destination_time",
                                      -1,
                                      ["plugin:".concat(n), "failed"]
                                    ),
                                    c)
                                  );
                                case 4:
                                  return [
                                    4,
                                    Promise.all(
                                      window["".concat(o, "Deps")].map(
                                        function (t) {
                                          return (0, m.v)(a + t + ".gz");
                                        }
                                      )
                                    ),
                                  ];
                                case 5:
                                  return (
                                    l.sent(),
                                    window["".concat(o, "Loader")](),
                                    [2, window["".concat(o, "Integration")]]
                                  );
                              }
                            });
                          });
                        })(t, this.name, this.version, this.options.obfuscate),
                      ];
                    case 2:
                      (o = a.sent()), (a.label = 3);
                    case 3:
                      (r = o),
                        (this.integration = (function (t, n, i) {
                          if ("Integration" in t) {
                            var e;
                            t({
                              user: function () {
                                return i.user();
                              },
                              addIntegration: function () {},
                            }),
                              (e = t.Integration);
                          } else e = t;
                          var r = new e(n);
                          return (r.analytics = i), r;
                        })(r, this.settings, n)),
                        (this.onReady = new Promise(function (t) {
                          s.integration.once("ready", function () {
                            (s._ready = !0), t(!0);
                          });
                        })),
                        (this.onInitialize = new Promise(function (t) {
                          s.integration.on("initialize", function () {
                            (s._initialized = !0), t(!0);
                          });
                        }));
                      try {
                        t.stats.increment(
                          "analytics_js.integration.invoke",
                          1,
                          [
                            "method:initialize",
                            "integration_name:".concat(this.name),
                          ]
                        ),
                          this.integration.initialize();
                      } catch (n) {
                        throw (
                          (t.stats.increment(
                            "analytics_js.integration.invoke.error",
                            1,
                            [
                              "method:initialize",
                              "integration_name:".concat(this.name),
                            ]
                          ),
                          n)
                        );
                      }
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.unload = function (t, n) {
              return (function (t, n, i) {
                return (0, e.mG)(this, void 0, void 0, function () {
                  var r, o, s, a;
                  return (0, e.Jh)(this, function (e) {
                    return (
                      (r = (0, g.Kg)()),
                      (o = y(t)),
                      (s = w(t, i)),
                      (a = ""
                        .concat(r, "/integrations/")
                        .concat(null != s ? s : o, "/")
                        .concat(n, "/")
                        .concat(null != s ? s : o, ".dynamic.js.gz")),
                      [2, (0, m.t)(a)]
                    );
                  });
                });
              })(this.name, this.version, this.options.obfuscate);
            }),
            (t.prototype.addMiddleware = function () {
              for (var t, n = [], i = 0; i < arguments.length; i++)
                n[i] = arguments[i];
              this.middleware = (t = this.middleware).concat.apply(t, n);
            }),
            (t.prototype.shouldBuffer = function (t) {
              return (
                "page" !== t.event.type &&
                ((0, o.s)() || !1 === this._ready || !1 === this._initialized)
              );
            }),
            (t.prototype.send = function (t, n, i) {
              var r, o;
              return (0, e.mG)(this, void 0, void 0, function () {
                var s, u, c, d, h, v;
                return (0, e.Jh)(this, function (f) {
                  switch (f.label) {
                    case 0:
                      if (this.shouldBuffer(t))
                        return (
                          this.buffer.push(t), this.scheduleFlush(), [2, t]
                        );
                      if (
                        ((s =
                          null ===
                            (o =
                              null === (r = this.options) || void 0 === r
                                ? void 0
                                : r.plan) || void 0 === o
                            ? void 0
                            : o.track),
                        (u = t.event.event),
                        s && u && "Segment.io" !== this.name)
                      ) {
                        if (((c = s[u]), !(0, l.n)(s, c)))
                          return (
                            t.updateEvent(
                              "integrations",
                              (0, e.pi)((0, e.pi)({}, t.event.integrations), {
                                All: !1,
                                "Segment.io": !0,
                              })
                            ),
                            t.cancel(
                              new a.Y({
                                retry: !1,
                                reason: "Event "
                                  .concat(u, " disabled for integration ")
                                  .concat(this.name, " in tracking plan"),
                                type: "Dropped by plan",
                              })
                            ),
                            [2, t]
                          );
                        if (
                          (t.updateEvent(
                            "integrations",
                            (0, e.pi)(
                              (0, e.pi)({}, t.event.integrations),
                              null == c ? void 0 : c.integrations
                            )
                          ),
                          (null == c ? void 0 : c.enabled) &&
                            (null == c ? void 0 : c.integrations[this.name]) ===
                              !1)
                        )
                          return (
                            t.cancel(
                              new a.Y({
                                retry: !1,
                                reason: "Event "
                                  .concat(u, " disabled for integration ")
                                  .concat(this.name, " in tracking plan"),
                                type: "Dropped by plan",
                              })
                            ),
                            [2, t]
                          );
                      }
                      return [
                        4,
                        (0, p.applyDestinationMiddleware)(
                          this.name,
                          t.event,
                          this.middleware
                        ),
                      ];
                    case 1:
                      if (null === (d = f.sent())) return [2, t];
                      (h = new n(d, {
                        traverse: !this.disableAutoISOConversion,
                      })),
                        t.stats.increment(
                          "analytics_js.integration.invoke",
                          1,
                          [
                            "method:".concat(i),
                            "integration_name:".concat(this.name),
                          ]
                        ),
                        (f.label = 2);
                    case 2:
                      if ((f.trys.push([2, 5, , 6]), !this.integration))
                        return [3, 4];
                      return [
                        4,
                        this.integration.invoke.call(this.integration, i, h),
                      ];
                    case 3:
                      f.sent(), (f.label = 4);
                    case 4:
                      return [3, 6];
                    case 5:
                      throw (
                        ((v = f.sent()),
                        t.stats.increment(
                          "analytics_js.integration.invoke.error",
                          1,
                          [
                            "method:".concat(i),
                            "integration_name:".concat(this.name),
                          ]
                        ),
                        v)
                      );
                    case 6:
                      return [2, t];
                  }
                });
              });
            }),
            (t.prototype.track = function (t) {
              return (0, e.mG)(this, void 0, void 0, function () {
                return (0, e.Jh)(this, function (n) {
                  return [2, this.send(t, r.Track, "track")];
                });
              });
            }),
            (t.prototype.page = function (t) {
              var n;
              return (0, e.mG)(this, void 0, void 0, function () {
                var i = this;
                return (0, e.Jh)(this, function (e) {
                  return (
                    (null === (n = this.integration) || void 0 === n
                      ? void 0
                      : n._assumesPageview) &&
                      !this._initialized &&
                      this.integration.initialize(),
                    [
                      2,
                      this.onInitialize.then(function () {
                        return i.send(t, r.Page, "page");
                      }),
                    ]
                  );
                });
              });
            }),
            (t.prototype.identify = function (t) {
              return (0, e.mG)(this, void 0, void 0, function () {
                return (0, e.Jh)(this, function (n) {
                  return [2, this.send(t, r.Identify, "identify")];
                });
              });
            }),
            (t.prototype.alias = function (t) {
              return (0, e.mG)(this, void 0, void 0, function () {
                return (0, e.Jh)(this, function (n) {
                  return [2, this.send(t, r.Alias, "alias")];
                });
              });
            }),
            (t.prototype.group = function (t) {
              return (0, e.mG)(this, void 0, void 0, function () {
                return (0, e.Jh)(this, function (n) {
                  return [2, this.send(t, r.Group, "group")];
                });
              });
            }),
            (t.prototype.scheduleFlush = function () {
              var t = this;
              this.flushing ||
                setTimeout(function () {
                  return (0, e.mG)(t, void 0, void 0, function () {
                    var t;
                    return (0, e.Jh)(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return (
                            (this.flushing = !0),
                            (t = this),
                            [
                              4,
                              (function (t, n) {
                                return (0, e.mG)(
                                  this,
                                  void 0,
                                  void 0,
                                  function () {
                                    var i,
                                      r = this;
                                    return (0, e.Jh)(this, function (a) {
                                      switch (a.label) {
                                        case 0:
                                          if (((i = []), (0, o.s)()))
                                            return [2, n];
                                          return [
                                            4,
                                            (0, h.x)(
                                              function () {
                                                return (
                                                  n.length > 0 && (0, o.G)()
                                                );
                                              },
                                              function () {
                                                return (0, e.mG)(
                                                  r,
                                                  void 0,
                                                  void 0,
                                                  function () {
                                                    var r;
                                                    return (0, e.Jh)(
                                                      this,
                                                      function (e) {
                                                        switch (e.label) {
                                                          case 0:
                                                            if (!(r = n.pop()))
                                                              return [2];
                                                            return [
                                                              4,
                                                              (0, c.a)(r, t),
                                                            ];
                                                          case 1:
                                                            return (
                                                              e.sent() instanceof
                                                                s._ ||
                                                                i.push(r),
                                                              [2]
                                                            );
                                                        }
                                                      }
                                                    );
                                                  }
                                                );
                                              }
                                            ),
                                          ];
                                        case 1:
                                          return (
                                            a.sent(),
                                            i.map(function (t) {
                                              return n.pushWithBackoff(t);
                                            }),
                                            [2, n]
                                          );
                                      }
                                    });
                                  }
                                );
                              })(this, this.buffer),
                            ]
                          );
                        case 1:
                          return (
                            (t.buffer = n.sent()),
                            (this.flushing = !1),
                            this.buffer.todo > 0 && this.scheduleFlush(),
                            [2]
                          );
                      }
                    });
                  });
                }, 5e3 * Math.random());
            }),
            t
          );
        })();
      function G(t, n, i, r, o, s) {
        if ((void 0 === i && (i = {}), void 0 === r && (r = {}), (0, u.s)()))
          return [];
        n.plan && ((r = null != r ? r : {}).plan = n.plan);
        var a,
          c,
          l =
            null !==
              (c =
                null === (a = n.middlewareSettings) || void 0 === a
                  ? void 0
                  : a.routingRules) && void 0 !== c
              ? c
              : [],
          h = n.integrations,
          v = r.integrations,
          f = (0, d.o)(n, null != r ? r : {}),
          p =
            null == s
              ? void 0
              : s.reduce(function (t, n) {
                  var i;
                  return (0, e.pi)(
                    (0, e.pi)({}, t),
                    (((i = {})[
                      ("Integration" in n ? n.Integration : n).prototype.name
                    ] = n),
                    i)
                  );
                }, {});
        return Array.from(
          new Set(
            (0, e.ev)(
              (0, e.ev)(
                [],
                Object.keys(h).filter(function (t) {
                  return _(t, h[t]);
                }),
                !0
              ),
              Object.keys(p || {}).filter(function (t) {
                return (0, b.PO)(h[t]) || (0, b.PO)(null == v ? void 0 : v[t]);
              }),
              !0
            )
          )
        )
          .filter(function (t) {
            return !k(t, i);
          })
          .map(function (n) {
            var i,
              e,
              s,
              a,
              u,
              c =
                null !==
                  (u =
                    null !==
                      (s =
                        null ===
                          (e =
                            null == (i = h[n]) ? void 0 : i.versionSettings) ||
                        void 0 === e
                          ? void 0
                          : e.override) && void 0 !== s
                      ? s
                      : null === (a = null == i ? void 0 : i.versionSettings) ||
                          void 0 === a
                        ? void 0
                        : a.version) && void 0 !== u
                  ? u
                  : "latest",
              d = new z(n, c, t, f[n], r, null == p ? void 0 : p[n]);
            return (
              l.filter(function (t) {
                return t.destinationName === n;
              }).length > 0 &&
                o &&
                d.addMiddleware(o),
              d
            );
          });
      }
    },
  },
]);
//# sourceMappingURL=ajs-destination.6abd0ae9c08306a9.js.map
