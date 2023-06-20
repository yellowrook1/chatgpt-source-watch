(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [933],
  {
    15277: function (e, n, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/error",
        function () {
          return r(10194);
        },
      ]);
    },
    10194: function (e, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          default: function () {
            return u;
          },
        });
      var t = r(35250),
        a = r(68555),
        i = r(72524),
        s = r(66958),
        o = (0, t.jsxs)(t.Fragment, {
          children: [
            "Our systems are a bit busy at the moment,",
            (0, t.jsx)("br", {}),
            "please take a break and try again soon.",
          ],
        }),
        c = {
          RequestTimeout: o,
          AuthRateLimit: o,
          identity_provider_mismatch: (0, t.jsx)(t.Fragment, {
            children:
              "You tried signing in with a different authentication method than the one you used during signup. Please try again using your original authentication method.",
          }),
          account_deactivated: (0, t.jsx)(t.Fragment, {
            children:
              "You do not have an account because it has been deleted or deactivated. If you believe this was an error, please contact us through our help center at help.openai.com.",
          }),
          unsupported_country: (0, t.jsx)(t.Fragment, {
            children: "OpenAI's services are not available in your country.",
          }),
          unsupported_region: (0, t.jsx)(t.Fragment, {
            children: "OpenAI's services are not available in your region.",
          }),
          unknown_country: (0, t.jsx)(t.Fragment, {
            children:
              "We were unable to determine your country of origin to enforce geographical restrictions. Please use a different network, or contact us at help.openai.com if the issue persists.",
          }),
          sso_required: (0, t.jsx)(t.Fragment, {
            children:
              "Please use your organization's SSO to access your account.",
          }),
          default: (0, t.jsxs)(t.Fragment, {
            children: [
              "We ran into an issue while signing you in,",
              (0, t.jsx)("br", {}),
              "please take a break and try again soon.",
            ],
          }),
        };
      function u() {
        return (0, t.jsx)(l, {});
      }
      function l() {
        var e = (0, a.useRouter)(),
          n = c[String(e.query.error)] || c.default;
        return (0, t.jsx)(i.Wk, {
          children: (0, t.jsxs)(i.xh, {
            children: [
              (0, t.jsx)(i.jI, {}),
              (0, t.jsx)("div", {
                className: "mb-2 text-center text-lg",
                children: "Oops!",
              }),
              (0, t.jsx)("div", { className: "mb-5 text-center", children: n }),
              (0, t.jsx)(s.z, {
                as: "button",
                color: "neutral",
                onClick: function () {
                  return e.replace("/auth/login");
                },
                children: "Go back",
              }),
            ],
          }),
        });
      }
    },
    72524: function (e, n, r) {
      "use strict";
      r.d(n, {
        Wk: function () {
          return u;
        },
        jI: function () {
          return d;
        },
        xh: function () {
          return c;
        },
      });
      var t = r(4337),
        a = r(35250),
        i = r(34303),
        s = r(38317);
      function o() {
        var e = (0, t._)([
          "w-96 flex flex-col flex-auto justify-center items-center",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      var c = i.Z.div(o());
      function u(e) {
        var n = e.children,
          r = e.showTerms;
        return (0, a.jsxs)("div", {
          className:
            "flex h-full w-full flex-col items-center justify-center bg-gray-50 dark:bg-gray-800",
          children: [n, (void 0 === r || r) && (0, a.jsx)(l, {})],
        });
      }
      function l() {
        return (0, a.jsxs)("div", {
          className: "py-3 text-xs",
          children: [
            (0, a.jsx)("a", {
              href: "https://openai.com/policies/terms-of-use",
              target: "_blank",
              className: "mx-3 text-gray-500",
              rel: "noreferrer",
              children: "Terms of use",
            }),
            (0, a.jsx)("span", { className: "text-gray-600", children: "|" }),
            (0, a.jsx)("a", {
              href: "https://openai.com/policies/privacy-policy",
              target: "_blank",
              className: "mx-3 text-gray-500",
              rel: "noreferrer",
              children: "Privacy policy",
            }),
          ],
        });
      }
      function d() {
        return (0, a.jsx)("div", {
          className: "mb-5",
          children: (0, a.jsx)(s.nI, {}),
        });
      }
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 15277));
    }),
      (_N_E = e.O());
  },
]);
