(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6529],
  {
    112: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return p;
          },
          default: function () {
            return h;
          },
        });
      var r = t(50134),
        u = t(4399),
        c = t.n(u),
        i = t(75129),
        s = t(63866),
        a = t(32062),
        f = t(88654),
        o = t(10721),
        l = t(70079),
        _ = t(35250),
        p = !0;
      function h() {
        var e = (0, o.useRouter)();
        return (
          (0, l.useEffect)(
            function () {
              if (e) {
                var n;
                ((n = (0, r.Z)(
                  c().mark(function n() {
                    var t;
                    return c().wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (n.prev = 0),
                                (n.next = 3),
                                a.ZP.getCheckoutLink()
                              );
                            case 3:
                              (t = n.sent), e.replace(t.url), (n.next = 13);
                              break;
                            case 7:
                              if (
                                ((n.prev = 7),
                                (n.t0 = n.catch(0)),
                                !(n.t0 instanceof f.Q0) ||
                                  (null === n.t0 || void 0 === n.t0
                                    ? void 0
                                    : n.t0.message) != i.D7.ALREADY_PAID)
                              ) {
                                n.next = 13;
                                break;
                              }
                              return e.push("/"), n.abrupt("return");
                            case 13:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      null,
                      [[0, 7]]
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                })();
              }
            },
            [e]
          ),
          (0, _.jsx)("div", {
            className: "flex h-full w-full items-center justify-center",
            children: (0, _.jsx)(s.Z, {}),
          })
        );
      }
    },
    97794: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/invite/accepted",
        function () {
          return t(112);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 97794));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=accepted-d7ba9a8c17e28e51.js.map
