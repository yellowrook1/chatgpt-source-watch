(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1165],
  {
    72406: function (e, r, n) {
      "use strict";
      n.r(r),
        n.d(r, {
          __N_SSP: function () {
            return O;
          },
          config: function () {
            return _;
          },
          default: function () {
            return P;
          },
        });
      var t = n(36112),
        i = n(55842),
        s = n(8024),
        o = n(73929),
        a = n(40670),
        c = n(35250);
      function u(e) {
        var r = e.sharedConversationId,
          n = e.initiallyHighlightedMessageId,
          t = e.continueConversationUrl;
        return (0, c.jsx)(o.gB.Provider, {
          value: { serverSharedThreadId: r },
          children: (0, c.jsx)(a.Z, {
            clientThreadId: r,
            setClientThreadId: function () {},
            initiallyHighlightedMessageId: n,
            continueConversationUrl: t,
          }),
        });
      }
      var l = n(22004),
        d = n(82473),
        h = n(73040),
        v = n.n(h),
        f = n(70079),
        p = n(1454),
        g = n(94968),
        m = n(32004);
      function j(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function x(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? j(Object(n), !0).forEach(function (r) {
                (0, t.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : j(Object(n)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(n, r)
                  );
                });
        }
        return e;
      }
      var O = !0,
        _ = { runtime: "nodejs" },
        y = (0, g.vU)({
          home: { id: "sharedConversation.home", defaultMessage: "Home" },
        });
      function P(e) {
        if ("error" === e.serverResponse.type)
          return (0, c.jsx)(D, { error: e.serverResponse.error });
        var r = x(
          x({}, e),
          {},
          {
            conversationData: e.serverResponse.data,
            isGizmoLive: e.isGizmoLive,
          }
        );
        return e.continueMode
          ? (0, c.jsx)(b, x({}, r))
          : e.moderationMode
            ? (0, c.jsx)(s.Z, { children: (0, c.jsx)(w, x({}, r)) })
            : (0, c.jsx)(w, x({}, r));
      }
      function b(e) {
        var r = (0, f.useState)(function () {
          return (0, l.OX)();
        })[0];
        l.tQ.initThreadFromServerData(
          r,
          e.conversationData,
          !0,
          e.sharedConversationId
        );
        var n = (0, d.NL)();
        return (null != e.plugins &&
          n.setQueryData(
            e.plugins.map(function (e) {
              return e.id;
            }),
            e.plugins
          ),
        null != e.chatPageProps)
          ? (0, c.jsx)(
              i.ZP,
              x(x({}, e.chatPageProps), {}, { clientThreadId: r })
            )
          : null;
      }
      function w(e) {
        l.tQ.initThreadFromServerData(
          e.sharedConversationId,
          e.conversationData,
          !0
        );
        var r = (0, d.NL)();
        return (
          null != e.plugins &&
            r.setQueryData(
              e.plugins.map(function (e) {
                return e.id;
              }),
              e.plugins
            ),
          (0, c.jsx)(
            u,
            x(
              x({}, e),
              {},
              {
                initiallyHighlightedMessageId:
                  e.conversationData.highlighted_message_id,
                continueConversationUrl:
                  e.conversationData.continue_conversation_url,
              }
            )
          )
        );
      }
      function D(e) {
        var r = e.error;
        return (0, c.jsx)("div", {
          className: "mx-8 mt-8 flex flex-col items-center sm:mt-16",
          children: (0, c.jsxs)("div", {
            className: "max-w-xl rounded-lg bg-red-500 px-8 py-4 text-white",
            role: "alert",
            children: [
              (0, c.jsx)("div", { children: r }),
              (0, c.jsx)("div", {
                className: "mt-4",
                children: (0, c.jsxs)(v(), {
                  href: "/",
                  className: "flex items-center gap-2",
                  children: [
                    (0, c.jsx)(p.m6D, { className: "icon-sm" }),
                    (0, c.jsx)(m.Z, x({}, y.home)),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    60388: function (e, r, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/share/[[...shareParams]]",
        function () {
          return n(72406);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 60388));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=[[...shareParams]]-dad93816b4b19cb7.js.map
