(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2758],
  {
    60999: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          __N_SSP: function () {
            return l;
          },
          default: function () {
            return p;
          },
        });
      var n = r(39827),
        c = r(19892),
        u = r(13038),
        o = r(12366),
        i = r(70079),
        s = r(35250);
      function a(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var l = !0;
      function p(t) {
        return (0, s.jsx)(
          f,
          (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? a(Object(r), !0).forEach(function (e) {
                    (0, n.Z)(t, e, r[e]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : a(Object(r)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(r, e)
                      );
                    });
            }
            return t;
          })({}, t)
        );
      }
      function f(t) {
        let { pluginId: e, code: r, state: n } = t,
          a = (0, o.useRouter)(),
          l = (0, i.useRef)(!1);
        return (
          (0, i.useEffect)(() => {
            !0 !== l.current &&
              ((l.current = !0),
              (async function () {
                let t = ""
                  .concat(window.location.origin, "/aip/")
                  .concat(e, "/oauth/callback");
                try {
                  let i = await u.Z.pluginOauthCallback(e, r, t, n);
                  if (i.success) {
                    let t = new URL(
                      (0, c.M5)(c.LT.OAUTH_SUCCESS, i.redirect_path)
                    );
                    t.searchParams.set("oauth_success", "true"),
                      a.push(t.toString());
                  } else {
                    var o;
                    a.push(
                      (0, c.M5)(
                        c.LT.CUSTOM_ERROR,
                        i.redirect_path,
                        null !== (o = i.error) && void 0 !== o ? o : i.message
                      )
                    );
                  }
                } catch (t) {
                  a.push(
                    "/?model=gpt-4-plugins&loginAip=".concat(
                      e,
                      "&loginSuccess=false"
                    )
                  );
                }
              })());
          }, [e, r, n, a]),
          (0, s.jsx)("div", {})
        );
      }
    },
    19654: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/aip/[pluginId]/oauth/callback",
        function () {
          return r(60999);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [2888, 9774, 179], function () {
      return t((t.s = 19654));
    }),
      (_N_E = t.O());
  },
]);
//# sourceMappingURL=callback-d767522b53f0239b.js.map
