(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [758],
  {
    49363: function (n, u, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/aip/[pluginId]/oauth/callback",
        function () {
          return t(51261);
        },
      ]);
    },
    51261: function (n, u, t) {
      "use strict";
      t.r(u),
        t.d(u, {
          __N_SSP: function () {
            return p;
          },
          default: function () {
            return f;
          },
        });
      var c = t(21722),
        e = t(39324),
        o = t(39889),
        s = t(35250),
        i = t(68555),
        a = t(70079),
        r = t(24274),
        l = t(32787),
        p = !0;
      function f(n) {
        return (0, s.jsx)(_, (0, e._)({}, n));
      }
      function _(n) {
        var u = n.pluginId,
          t = n.code,
          e = n.state,
          p = (0, i.useRouter)(),
          f = (0, l.kP)().session;
        return (
          (0, a.useEffect)(
            function () {
              function n() {
                return (n = (0, c._)(function () {
                  var n;
                  return (0, o.Jh)(this, function (c) {
                    switch (c.label) {
                      case 0:
                        (n = ""
                          .concat(window.location.origin, "/aip/")
                          .concat(u, "/oauth/callback")),
                          (c.label = 1);
                      case 1:
                        return (
                          c.trys.push([1, 3, , 4]),
                          [
                            4,
                            r.ZP.pluginOauthCallback(
                              u,
                              t,
                              n,
                              e,
                              null == f ? void 0 : f.accessToken
                            ),
                          ]
                        );
                      case 2:
                        return (
                          c.sent(),
                          p.push(
                            "/?model=gpt-4-plugins&loginAip=".concat(
                              u,
                              "&loginSuccess=true"
                            )
                          ),
                          [3, 4]
                        );
                      case 3:
                        return (
                          console.error(c.sent()),
                          p.push(
                            "/?model=gpt-4-plugins&loginAip=".concat(
                              u,
                              "&loginSuccess=false"
                            )
                          ),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                  });
                })).apply(this, arguments);
              }
              (null == f ? void 0 : f.accessToken) &&
                (function () {
                  n.apply(this, arguments);
                })();
            },
            [u, t, e, p, null == f ? void 0 : f.accessToken]
          ),
          (0, s.jsx)("div", {})
        );
      }
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return n((n.s = 49363));
    }),
      (_N_E = n.O());
  },
]);
