"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3096],
  {
    89983: function (r, a, e) {
      function s(r, a) {
        return Object.keys(a).reduce(function (e, s) {
          return s.startsWith(r) && (e[s.substr(r.length)] = a[s]), e;
        }, {});
      }
      e.r(a),
        e.d(a, {
          queryString: function () {
            return n;
          },
        });
      var t = e(90476),
        i = e(62462);
      function n(r, a) {
        var e = document.createElement("a");
        e.href = a;
        var n = e.search
            .slice(1)
            .split("&")
            .reduce(function (r, a) {
              var e = a.split("="),
                s = e[0],
                i = e[1];
              return (r[s] = (0, t.a)(i)), r;
            }, {}),
          u = [],
          _ = n.ajs_uid,
          d = n.ajs_event,
          c = n.ajs_aid,
          o = (0, i.PO)(r.options.useQueryString)
            ? r.options.useQueryString
            : {},
          j = o.aid,
          f = o.uid;
        if (c) {
          var v = Array.isArray(n.ajs_aid) ? n.ajs_aid[0] : n.ajs_aid;
          (void 0 === j ? /.+/ : j).test(v) && r.setAnonymousId(v);
        }
        if (_) {
          var y = Array.isArray(n.ajs_uid) ? n.ajs_uid[0] : n.ajs_uid;
          if ((void 0 === f ? /.+/ : f).test(y)) {
            var p = s("ajs_trait_", n);
            u.push(r.identify(y, p));
          }
        }
        if (d) {
          var h = Array.isArray(n.ajs_event) ? n.ajs_event[0] : n.ajs_event,
            l = s("ajs_prop_", n);
          u.push(r.track(h, l));
        }
        return Promise.all(u);
      }
    },
  },
]);
//# sourceMappingURL=queryString.df174924c6968fe4.js.map
