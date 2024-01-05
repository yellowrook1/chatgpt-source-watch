"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4113],
  {
    54113: function (r, e, n) {
      n.r(e),
        n.d(e, {
          loadStripe: function () {
            return p;
          },
        });
      var t = "https://js.stripe.com/v3",
        o = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        i = function () {
          for (
            var r = document.querySelectorAll('script[src^="'.concat(t, '"]')),
              e = 0;
            e < r.length;
            e++
          ) {
            var n = r[e];
            if (o.test(n.src)) return n;
          }
          return null;
        },
        u = function (r) {
          var e =
              r && !r.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
            n = document.createElement("script");
          n.src = "".concat(t).concat(e);
          var o = document.head || document.body;
          if (!o)
            throw Error(
              "Expected document.body not to be null. Stripe.js requires a <body> element."
            );
          return o.appendChild(n), n;
        },
        a = function (r, e) {
          r &&
            r._registerWrapper &&
            r._registerWrapper({
              name: "stripe-js",
              version: "2.1.2",
              startTime: e,
            });
        },
        c = null,
        d = function (r, e, n) {
          if (null === r) return null;
          var t = r.apply(void 0, e);
          return a(t, n), t;
        },
        l = Promise.resolve().then(function () {
          return null !== c
            ? c
            : (c = new Promise(function (r, e) {
                if (
                  "undefined" == typeof window ||
                  "undefined" == typeof document
                ) {
                  r(null);
                  return;
                }
                if ((window.Stripe, window.Stripe)) {
                  r(window.Stripe);
                  return;
                }
                try {
                  var n = i();
                  n || (n = u(null)),
                    n.addEventListener("load", function () {
                      window.Stripe
                        ? r(window.Stripe)
                        : e(Error("Stripe.js not available"));
                    }),
                    n.addEventListener("error", function () {
                      e(Error("Failed to load Stripe.js"));
                    });
                } catch (r) {
                  e(r);
                  return;
                }
              }));
        }),
        s = !1;
      l.catch(function (r) {
        s || console.warn(r);
      });
      var p = function () {
        for (var r = arguments.length, e = Array(r), n = 0; n < r; n++)
          e[n] = arguments[n];
        s = !0;
        var t = Date.now();
        return l.then(function (r) {
          return d(r, e, t);
        });
      };
    },
  },
]);
//# sourceMappingURL=4113.0c0ee75dab4b3a1d.js.map
