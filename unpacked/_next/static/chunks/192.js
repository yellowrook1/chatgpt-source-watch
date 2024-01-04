"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [192],
  {
    192: function (e, t, n) {
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return ny;
          },
          default: function () {
            return nj;
          },
        });
      var r,
        i,
        o,
        a,
        s,
        l,
        c,
        u,
        d,
        p,
        f,
        m,
        h,
        g = n(37097),
        v = n(50134),
        x = n(6939),
        b = n(36112),
        y = n(4399),
        j = n.n(y),
        w = n(82256),
        P = n(61302),
        k = n(3554),
        N = n(21120),
        T = n(14711),
        O = n(35250);
      function z(e) {
        var t,
          n = e.gizmoId,
          r = (0, g.b9)(n, !0).data,
          i =
            ((t = (0, v.Z)(
              j().mark(function e() {
                return j().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), T.U.postGizmoCancelAppeal(n);
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function () {
              return t.apply(this, arguments);
            });
        return (0, O.jsx)(N.Z, {
          isOpen: !0,
          onClose: function () {},
          primaryButton: (0, O.jsx)(k.ZP.Button, {
            title: "Cancel appeal",
            color: "primary",
            onClick: i,
          }),
          type: "warning",
          children: (0, O.jsxs)("div", {
            className: "flex flex-col gap-2 text-sm",
            children: [
              (0, O.jsx)("h2", {
                className: "text-lg font-semibold",
                children: "Reviewing your appeal",
              }),
              (0, O.jsxs)("p", {
                children: [
                  "During the review you can continue using “",
                  null == r ? void 0 : r.gizmo.display.name,
                  "” as your private GPT, but won’t be able to update it or share it with others.",
                ],
              }),
            ],
          }),
        });
      }
      var C = n(90038),
        I = n(21389),
        _ = I.Z.a(a || (a = (0, C.Z)(["bold underline"])));
      function S(e) {
        var t = e.isFlaggedBrandName,
          n = e.onClose;
        return (0, O.jsx)(N.Z, {
          title: "Your changes couldn’t be published",
          isOpen: !0,
          onClose: n,
          closeButton: (0, O.jsx)(k.ZP.CloseButton, { onClose: n }),
          primaryButton: (0, O.jsx)(k.ZP.Button, {
            title: "Continue",
            color: "primary",
            onClick: n,
          }),
          type: "warning",
          children: (0, O.jsx)("div", {
            className: "flex flex-col gap-2 text-sm",
            children: t
              ? (0, O.jsxs)("p", {
                  children: [
                    "Your GPT’s name is restricted for public sharing. If this is your organization’s name, please verify your website via the",
                    " ",
                    (0, O.jsx)(_, {
                      href: "/#settings/BuilderProfile",
                      children: "Builder profile in Settings",
                    }),
                    ".",
                  ],
                })
              : (0, O.jsxs)(O.Fragment, {
                  children: [
                    (0, O.jsx)("p", {
                      children:
                        "Your GPT isn’t ready for public sharing yet. Usually, it’s a quick fix.",
                    }),
                    (0, O.jsx)("p", { children: "Here’s what you can do" }),
                    (0, O.jsxs)("ul", {
                      className: "list-disc pl-5",
                      children: [
                        (0, O.jsxs)("li", {
                          children: [
                            (0, O.jsx)("b", { children: "Review your info:" }),
                            " Check that your description, name, and profile picture meet our",
                            " ",
                            (0, O.jsx)(_, {
                              target: "_blank",
                              href: "https://openai.com/brand",
                              rel: "noreferrer",
                              children: "brand",
                            }),
                            " ",
                            "and",
                            " ",
                            (0, O.jsx)(_, {
                              target: "_blank",
                              href: "https://openai.com/policies/usage-policies",
                              rel: "noreferrer",
                              children: "usage",
                            }),
                            " ",
                            "guidelines.",
                          ],
                        }),
                        (0, O.jsxs)("li", {
                          children: [
                            (0, O.jsx)("b", { children: "Share again:" }),
                            " Once updated, go ahead and share your GPT.",
                          ],
                        }),
                      ],
                    }),
                    (0, O.jsxs)("p", {
                      children: [
                        "Concerns? Your feedback is welcome",
                        " ",
                        (0, O.jsx)(_, {
                          target: "_blank",
                          href: "https://forms.gle/qXd1PjZmuJYhvxow5",
                          rel: "noreferrer",
                          children: "here",
                        }),
                        " ",
                        "and helps us improve.",
                      ],
                    }),
                    (0, O.jsx)("p", {
                      children:
                        "Feel free to use your GPT privately for now by publishing to “only me”.",
                    }),
                  ],
                }),
          }),
        });
      }
      var G = n(52336),
        M = n(63866),
        E = n(4748),
        D = n(7144),
        Z = n(1890),
        A = n(19954),
        L = n(73582),
        U = n(88654),
        R = n(83380),
        V = n(28818),
        q = n(70079),
        F = n(35427),
        B = n(69101),
        W = n(13135),
        H = n(19841),
        K = n(61888),
        J = n(10721),
        Y = n.n(J),
        X = n(70671),
        Q = n(80459),
        $ = n(11591),
        ee = n(91559),
        et = n(5063),
        en = n(32004),
        er = n(1703),
        ei = n(998),
        eo = ["className", "children"],
        ea = ["value", "className", "label"],
        es = ["className"];
      function el(e, t) {
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
      function ec(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? el(Object(n), !0).forEach(function (t) {
                (0, b.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : el(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var eu = {
        Root: function (e) {
          var t = e.className,
            n = e.children,
            r = (0, Q.Z)(e, eo);
          return (0, O.jsx)(
            F.fC,
            ec(ec({ className: t }, r), {}, { children: n })
          );
        },
        Item: function (e) {
          var t = e.value,
            n = e.className,
            r = e.label,
            i = (0, Q.Z)(e, ea);
          return (0, O.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              (0, O.jsx)(
                F.ck,
                ec(
                  {
                    id: t,
                    value: t,
                    className: (0, H.default)(
                      "h-4 w-4 flex-shrink-0 gap-2 rounded-full border border-token-text-tertiary bg-transparent shadow-sm outline-none hover:bg-token-surface-tertiary",
                      n
                    ),
                  },
                  i
                )
              ),
              (0, O.jsx)("label", {
                htmlFor: t,
                className: "w-full cursor-pointer",
                children: r,
              }),
            ],
          });
        },
        Indicator: function (e) {
          var t = e.className,
            n = (0, Q.Z)(e, es);
          return (0, O.jsx)(
            F.z$,
            ec(
              {
                className: (0, H.default)(
                  "relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-[50%] after:bg-token-text-primary after:content-['']",
                  t
                ),
              },
              n
            )
          );
        },
      };
      function ed(e) {
        var t = e.content,
          n = e.button,
          r = e.onClick;
        return (0, O.jsxs)("div", {
          className:
            "flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",
          onClick: r,
          children: [
            (0, O.jsx)("div", { className: "h-9 grow px-3 py-2", children: t }),
            (0, O.jsx)("div", { className: "w-px bg-token-border-medium" }),
            n,
          ],
        });
      }
      var ep = n(94968);
      function ef(e) {
        var t = e.onSelectExample,
          n = (0, X.Z)(),
          r = (0, q.useRef)(null);
        return (0, O.jsxs)("select", {
          onChange: function (e) {
            "label" !== e.target.value &&
              (t(eh[parseInt(e.target.value)].spec),
              (r.current.value = "label"));
          },
          className:
            "h-8 rounded-lg border border-token-border-medium bg-transparent px-2 py-0 text-sm",
          ref: r,
          children: [
            (0, O.jsx)("option", {
              value: "label",
              children: n.formatMessage(em.examples),
            }),
            eh.map(function (e, t) {
              return (0, O.jsx)(
                "option",
                { value: t, children: n.formatMessage(e.displayName) },
                t
              );
            }),
          ],
        });
      }
      var em = (0, ep.vU)({
          examples: {
            id: "gizmo.actions.examples",
            defaultMessage: "Examples",
          },
          weatherExampleTitle: {
            id: "gizmo.actions.weatherExampleTitle",
            defaultMessage: "Weather (JSON)",
          },
          petStoreExampleTitle: {
            id: "gizmo.actions.petStoreExampleTitle",
            defaultMessage: "Pet Store (YAML)",
          },
          blankExampleTitle: {
            id: "gizmo.actions.blankExampleTitle",
            defaultMessage: "Blank Template",
          },
        }),
        eh = [
          {
            displayName: em.weatherExampleTitle,
            spec: JSON.stringify(
              {
                openapi: "3.1.0",
                info: {
                  title: "Get weather data",
                  description: "Retrieves current weather data for a location.",
                  version: "v1.0.0",
                },
                servers: [{ url: "https://weather.example.com" }],
                paths: {
                  "/location": {
                    get: {
                      description: "Get temperature for a specific location",
                      operationId: "GetCurrentWeather",
                      parameters: [
                        {
                          name: "location",
                          in: "query",
                          description:
                            "The city and state to retrieve the weather for",
                          required: !0,
                          schema: { type: "string" },
                        },
                      ],
                      deprecated: !1,
                    },
                  },
                },
                components: { schemas: {} },
              },
              null,
              2
            ),
          },
          {
            displayName: em.petStoreExampleTitle,
            spec: '# Taken from https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore.yaml\n\nopenapi: "3.0.0"\ninfo:\n  version: 1.0.0\n  title: Swagger Petstore\n  license:\n    name: MIT\nservers:\n  - url: https://petstore.swagger.io/v1\npaths:\n  /pets:\n    get:\n      summary: List all pets\n      operationId: listPets\n      tags:\n        - pets\n      parameters:\n        - name: limit\n          in: query\n          description: How many items to return at one time (max 100)\n          required: false\n          schema:\n            type: integer\n            maximum: 100\n            format: int32\n      responses:\n        \'200\':\n          description: A paged array of pets\n          headers:\n            x-next:\n              description: A link to the next page of responses\n              schema:\n                type: string\n          content:\n            application/json:    \n              schema:\n                $ref: "#/components/schemas/Pets"\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\n    post:\n      summary: Create a pet\n      operationId: createPets\n      tags:\n        - pets\n      responses:\n        \'201\':\n          description: Null response\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\n  /pets/{petId}:\n    get:\n      summary: Info for a specific pet\n      operationId: showPetById\n      tags:\n        - pets\n      parameters:\n        - name: petId\n          in: path\n          required: true\n          description: The id of the pet to retrieve\n          schema:\n            type: string\n      responses:\n        \'200\':\n          description: Expected response to a valid request\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Pet"\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\ncomponents:\n  schemas:\n    Pet:\n      type: object\n      required:\n        - id\n        - name\n      properties:\n        id:\n          type: integer\n          format: int64\n        name:\n          type: string\n        tag:\n          type: string\n    Pets:\n      type: array\n      maxItems: 100\n      items:\n        $ref: "#/components/schemas/Pet"\n    Error:\n      type: object\n      required:\n        - code\n        - message\n      properties:\n        code:\n          type: integer\n          format: int32\n        message:\n          type: string',
          },
          {
            displayName: em.blankExampleTitle,
            spec: JSON.stringify(
              {
                openapi: "3.1.0",
                info: {
                  title: "Untitled",
                  description: "Your OpenAPI specification",
                  version: "v1.0.0",
                },
                servers: [{ url: "" }],
                paths: {},
                components: { schemas: {} },
              },
              null,
              2
            ),
          },
        ],
        eg = n(73558),
        ev = n(90166),
        ex = n(25736),
        eb = n(47428),
        ey = n(76483),
        ej = n(1454),
        ew = n(68919),
        eP = n(41845),
        ek = n(60624),
        eN = n(49685),
        eT = n(7525),
        eO = n(31609),
        ez = n(55161),
        eC = n(79505),
        eI = n(49668);
      function e_(e, t) {
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
      function eS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e_(Object(n), !0).forEach(function (t) {
                (0, b.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : e_(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function eG() {
        return (0, O.jsx)("div", {
          className:
            "relative flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-black border-token-border-medium",
          children: (0, O.jsx)(M.Z, { className: "h-1/4 w-1/4" }),
        });
      }
      function eM(e) {
        var t = e.gizmoEditorData,
          n = e.onFileChange,
          r = e.generateProfilePic,
          i = e.isGeneratingProfilePic,
          o = e.setIsGeneratingProfilePic,
          a = (0, X.Z)(),
          s = (0, q.useState)(void 0),
          l = s[0],
          c = s[1],
          u = (0, q.useRef)(n);
        function d() {
          return (d = (0, v.Z)(
            j().mark(function e(t) {
              var n, r;
              return j().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(t.length > 0)) {
                        e.next = 9;
                        break;
                      }
                      return o(!1), (e.next = 4), (0, ez.WI)(t[0], 512);
                    case 4:
                      (n = e.sent),
                        c({
                          tempId: (r = (0, eO.W7)(n)),
                          file: n,
                          status: eT.X.Uploading,
                          progress: 1,
                          fileId: null,
                          cdnUrl: null,
                        }),
                        u.current("uploading"),
                        (0, eO.lU)(r, n, a, w.Ei.ProfilePicture, {
                          onFileCreated: function (e, t, n) {
                            c(function (r) {
                              return "initial" !== r &&
                                (null == r ? void 0 : r.tempId) === e &&
                                r.status === eT.X.Uploading
                                ? eS(
                                    eS({}, r),
                                    {},
                                    { progress: 10, fileId: t, cdnUrl: n }
                                  )
                                : r;
                            });
                          },
                          onFileUploadProgress: function (e, t) {
                            c(function (n) {
                              return "initial" !== n &&
                                (null == n ? void 0 : n.tempId) === e &&
                                n.status === eT.X.Uploading
                                ? eS(eS({}, n), {}, { progress: t })
                                : n;
                            });
                          },
                          onFileUploaded: function (e, t) {
                            c(function (n) {
                              return "initial" !== n &&
                                (null == n ? void 0 : n.tempId) === e
                                ? (u.current(n),
                                  eS(
                                    eS({}, n),
                                    {},
                                    {
                                      status: eT.X.Ready,
                                      progress: 100,
                                      fileSpec: eS(
                                        {
                                          name: n.file.name,
                                          id: n.fileId,
                                          size: n.file.size,
                                        },
                                        null != t ? t : {}
                                      ),
                                    }
                                  ))
                                : n;
                            });
                          },
                          onError: function (e) {
                            c(function (t) {
                              if (
                                "initial" !== t &&
                                (null == t ? void 0 : t.tempId) === e
                              ) {
                                u.current(void 0);
                                return;
                              }
                              return t;
                            });
                          },
                        });
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        (0, q.useEffect)(function () {
          u.current = n;
        });
        var p = (0, ey.uI)(
            eS(
              {
                disabled: !1,
                noClick: !0,
                onDropAccepted: function (e) {
                  return d.apply(this, arguments);
                },
                onDropRejected: function (e) {
                  return (0, ek.UJ)(e, a, eT.A.ProfilePicture);
                },
                multiple: !0,
                maxSize: eP.xC,
              },
              (0, ez.Z8)(ez.KL)
            )
          ),
          f = p.open,
          m = p.getInputProps;
        return (0, O.jsx)("div", {
          className: "flex w-full items-center justify-center gap-4",
          children: (0, O.jsxs)(eb.fC, {
            children: [
              (0, O.jsx)(eb.xz, {
                className: "h-20 w-20",
                children: i
                  ? (0, O.jsx)(eG, {})
                  : null != l && "initial" != l && l.status != eT.X.Ready
                    ? (0, O.jsxs)("div", {
                        className:
                          "relative h-full w-full overflow-hidden rounded-full",
                        children: [
                          (0, O.jsx)(eN.l, { file: l.file }),
                          l.status === eT.X.Uploading && l.progress < 90
                            ? (0, O.jsx)("div", {
                                className:
                                  "absolute inset-0 flex items-center justify-center bg-black/5 text-white",
                                children: (0, O.jsx)(ew.Z, {
                                  percentage: l.progress,
                                  className: "h-6 w-6",
                                }),
                              })
                            : null,
                        ],
                      })
                    : (null == t ? void 0 : t.profilePictureUrl) != null &&
                        (null == t ? void 0 : t.profilePictureUrl) !== ""
                      ? (0, O.jsx)(eC.Z, {
                          isFirstParty: !1,
                          src: t.profilePictureUrl,
                        })
                      : (0, O.jsx)("div", {
                          className:
                            "flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-black border-token-border-medium",
                          children: (0, O.jsx)(ej.OvN, {
                            className: "text-4xl",
                          }),
                        }),
              }),
              (0, O.jsx)(eb.Uv, {
                children: (0, O.jsxs)(eb.VY, {
                  className:
                    "flex min-w-[100px] max-w-xs flex-col rounded-xl border border-gray-400 bg-token-surface-primary shadow-lg dark:border-gray-700",
                  sideOffset: 7,
                  children: [
                    (0, O.jsxs)(eI.UA, {
                      onClick: f,
                      children: [
                        (0, O.jsx)("input", eS({}, m())),
                        "Upload Photo",
                      ],
                    }),
                    (0, O.jsx)(eI.UA, {
                      onClick: r,
                      children: "Use DALL\xb7E",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var eE = n(46514),
        eD = n(66027),
        eZ = n(70737),
        eA = n(97296),
        eL = n(7137),
        eU = n(3125),
        eR = n(25349),
        eV = n(99893);
      function eq(e, t) {
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
      function eF(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eq(Object(n), !0).forEach(function (t) {
                (0, b.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eq(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function eB(e) {
        var t,
          n,
          r = e.gizmoEditorData,
          i = e.requireGizmoId,
          o = e.currentModelConfig,
          a = e.updateGizmo,
          s = (0, X.Z)(),
          l = (0, q.useState)(0),
          c = (l[0], l[1]),
          u = (0, q.useRef)(new Map()),
          d = (0, ez.Zp)(o, void 0),
          p =
            ((t = (0, v.Z)(
              j().mark(function e(t) {
                var n;
                return j().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          eR.A.logEvent(eV.M.uploadFile, {
                            eventSource: "mouse",
                            intent: "gizmo",
                          }),
                          (e.next = 3),
                          i()
                        );
                      case 3:
                        if (((n = e.sent), !(t.length > 0))) {
                          e.next = 7;
                          break;
                        }
                        return (
                          (e.next = 7),
                          Promise.all(
                            t.map(function (e) {
                              var t = (0, eO.W7)(e);
                              u.current.set(t, {
                                tempId: t,
                                gizmoId: n,
                                file: e,
                                status: eT.X.Uploading,
                                progress: 1,
                                fileId: null,
                                cdnUrl: null,
                              }),
                                (0, eO.cT)(
                                  (0, eO.W7)(e),
                                  e,
                                  s,
                                  { kind: w.Ei.Gizmo, gizmoId: n },
                                  {
                                    onFileUploaded: function (e, t, n) {
                                      var r = u.current.get(e);
                                      null != r &&
                                        null != r.fileId &&
                                        (a(function (e) {
                                          var t;
                                          return eF(
                                            eF({}, e),
                                            {},
                                            {
                                              files: [].concat(
                                                (0, x.Z)(
                                                  null !== (t = e.files) &&
                                                  void 0 !== t
                                                    ? t
                                                    : []
                                                ),
                                                [
                                                  {
                                                    file_id: r.fileId,
                                                    name: r.file.name,
                                                    size: r.file.size,
                                                    type: r.file.type,
                                                    last_modified:
                                                      r.file.lastModified,
                                                    file_size_tokens:
                                                      null == n
                                                        ? void 0
                                                        : n.fileTokenSize,
                                                  },
                                                ]
                                              ),
                                            }
                                          );
                                        }),
                                        u.current.delete(e),
                                        c(function (e) {
                                          return e + 1;
                                        }));
                                    },
                                    onFileCreated: function (t, r, i) {
                                      u.current.set(
                                        t,
                                        eF(
                                          eF(
                                            {
                                              tempId: t,
                                              gizmoId: n,
                                              file: e,
                                              status: eT.X.Uploading,
                                              progress: 1,
                                            },
                                            u.current.get(t)
                                          ),
                                          {},
                                          { fileId: r, cdnUrl: i }
                                        )
                                      ),
                                        c(function (e) {
                                          return e + 1;
                                        });
                                    },
                                    onFileUploadProgress: function (e, t) {
                                      var n = u.current.get(e);
                                      (null == n ? void 0 : n.status) ===
                                        eT.X.Uploading &&
                                        u.current.set(
                                          e,
                                          eF(eF({}, n), {}, { progress: t })
                                        ),
                                        c(function (e) {
                                          return e + 1;
                                        });
                                    },
                                    onError: function (e) {
                                      u.current.delete(e);
                                    },
                                  },
                                  {
                                    usesRetrievalIndex:
                                      null != o &&
                                      (0, ez._0)(o, e.type, e.name) ===
                                        w.Cd.Retrieval,
                                  }
                                );
                            })
                          )
                        );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return t.apply(this, arguments);
            }),
          f = (0, ey.uI)(
            eF(
              {
                disabled: !1,
                noClick: !0,
                onDropAccepted: p,
                multiple: !0,
                maxSize: eP.xC,
                maxFiles: 10,
              },
              (0, ez.Z8)(d)
            )
          ),
          m = f.getInputProps,
          h = f.open,
          g =
            null !== (n = null == r ? void 0 : r.files) && void 0 !== n
              ? n
              : [];
        function b(e) {
          return (0, O.jsx)(
            eN.Z,
            {
              onRemoveFileClick: function () {
                u.current.delete(e.tempId),
                  c(function (e) {
                    return e + 1;
                  });
              },
              file: e.file,
              loadingPercentage:
                e.status === eT.X.Uploading ? e.progress : void 0,
            },
            e.tempId
          );
        }
        function y(e) {
          return (0, O.jsx)(
            eN.Z,
            {
              file: e.name,
              fileId: e.file_id,
              onRemoveFileClick: function () {
                return a(function (t) {
                  var n;
                  return eF(
                    eF({}, t),
                    {},
                    {
                      files:
                        null == t
                          ? void 0
                          : null === (n = t.files) || void 0 === n
                            ? void 0
                            : n.filter(function (t) {
                                return t.file_id !== e.file_id;
                              }),
                    }
                  );
                });
              },
              gizmoId: null == r ? void 0 : r.id,
            },
            e.file_id
          );
        }
        var P = Array.from(u.current.values()).filter(function (e) {
            return g.every(function (t) {
              return t.file_id !== e.fileId;
            });
          }),
          k = (0, K.partition)(P, function (e) {
            return (
              null != o &&
              (0, ez._0)(o, e.file.type, e.file.name) === w.Cd.CodeInterpreter
            );
          }),
          N = (0, eU.Z)(k, 2),
          T = N[0],
          z = N[1],
          C = (0, K.partition)(g, function (e) {
            return (
              null != o &&
              null != e.type &&
              (0, ez._0)(o, e.type, e.name) === w.Cd.CodeInterpreter
            );
          }),
          I = (0, eU.Z)(C, 2),
          _ = I[0],
          S = I[1],
          G = (0, q.useRef)(_.length);
        return (
          (0, q.useEffect)(
            function () {
              _.length > G.current &&
                a(function (e) {
                  var t, n;
                  return null !== (t = e.tools) &&
                    void 0 !== t &&
                    t.some(function (e) {
                      return e.type === w.qK.PYTHON;
                    })
                    ? e
                    : eF(
                        eF({}, e),
                        {},
                        {
                          tools: [].concat(
                            (0, x.Z)(
                              null !== (n = e.tools) && void 0 !== n ? n : []
                            ),
                            [{ type: w.qK.PYTHON }]
                          ),
                        }
                      );
                }),
                (G.current = _.length);
            },
            [_.length]
          ),
          (0, O.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [
              (0, O.jsx)("div", {
                className: "rounded-lg text-gray-500",
                children: (0, O.jsx)(en.Z, eF({}, eW.knowledgeWarning)),
              }),
              z.length > 0 || S.length > 0
                ? (0, O.jsxs)("div", {
                    className: "flex flex-wrap gap-2",
                    children: [z.map(b), S.map(y)],
                  })
                : null,
              T.length > 0 || _.length > 0
                ? (0, O.jsxs)("div", {
                    children: [
                      (0, O.jsx)("div", {
                        className: "mb-2 text-xs text-gray-500",
                        children:
                          "The following files are only available for Code Interpreter:",
                      }),
                      (0, O.jsxs)("div", {
                        className: "flex flex-wrap gap-2",
                        children: [T.map(b), _.map(y)],
                      }),
                    ],
                  })
                : null,
              (0, O.jsx)("div", {
                children: (0, O.jsxs)(eI.cY, {
                  onClick: h,
                  children: [(0, O.jsx)("input", eF({}, m())), "Upload files"],
                }),
              }),
            ],
          })
        );
      }
      var eW = (0, ep.vU)({
        knowledgeWarning: {
          id: "gizmo.knowledgeWarning",
          defaultMessage:
            "If you upload files under Knowledge, conversations with your GPT may include file contents. Files can be downloaded when Code Interpreter is enabled",
        },
      });
      function eH(e) {
        var t = e.placeholder,
          n = e.text,
          r = e.onChange,
          i = e.onClose;
        return (0, O.jsx)(N.Z, {
          className: "!max-h-[100vh] !max-w-[80vw]",
          type: "success",
          isOpen: !0,
          onClose: i,
          primaryButton: (0, O.jsx)(eI.cY, { onClick: i, children: "Close" }),
          children: (0, O.jsx)("textarea", {
            className:
              "h-[70vh] w-full resize-none rounded-lg dark:border-gray-700 dark:bg-gray-800",
            value: n,
            onChange: function (e) {
              r(e.target.value);
            },
            placeholder: t,
          }),
        });
      }
      function eK(e, t) {
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
      function eJ(e) {
        var t = e.label,
          n = e.toolType,
          r = e.enabledTools,
          i = e.onEnabledToolsChange,
          o = e.disabled,
          a = e.disabledTooltip,
          s = function (e) {
            return r.some(function (t) {
              return t.type === e;
            });
          },
          l = (0, O.jsx)(eI.f8, {
            labelClassName: "w-full cursor-pointer",
            id: n,
            label: t,
            checked: !o && s(n),
            disabled: o,
            onChange: function () {
              s(n)
                ? i(
                    r.filter(function (e) {
                      return e.type !== n;
                    })
                  )
                : i([].concat((0, x.Z)(r), [{ type: n }]));
            },
          });
        return null != a
          ? (0, O.jsx)("div", {
              className: "opacity-70",
              children: (0, O.jsx)(ev.u, {
                side: "top",
                label: a,
                children: l,
              }),
            })
          : l;
      }
      function eY(e) {
        var t = e.enabledTools,
          n = e.onEnabledToolsChange,
          r = (0, P.C)(Z.L0.BrowseAvailable);
        return (0, O.jsxs)("div", {
          className: "flex flex-col items-start gap-2",
          children: [
            (0, O.jsx)(eJ, {
              label: "Web Browsing",
              toolType: w.qK.BROWSER,
              enabledTools: t,
              onEnabledToolsChange: n,
              disabled: !r,
              disabledTooltip: r
                ? void 0
                : (0, O.jsx)(
                    en.Z,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? eK(Object(n), !0).forEach(function (t) {
                              (0, b.Z)(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : eK(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                      }
                      return e;
                    })({}, eX.disabledBrowsingToolTip)
                  ),
            }),
            (0, O.jsx)(eJ, {
              label: "DALL\xb7E Image Generation",
              toolType: w.qK.DALLE,
              enabledTools: t,
              onEnabledToolsChange: n,
            }),
            (0, O.jsx)(eJ, {
              label: (0, O.jsxs)("div", {
                className: "flex items-center",
                children: [
                  "Code Interpreter",
                  (0, O.jsx)(tt, {
                    description:
                      "Code Interpreter lets your GPT run code. When enabled, your GPT can analyze data, work with files you've uploaded, do math and more",
                  }),
                ],
              }),
              toolType: w.qK.PYTHON,
              enabledTools: t,
              onEnabledToolsChange: n,
            }),
          ],
        });
      }
      var eX = (0, ep.vU)({
          disabledBrowsingToolTip: {
            defaultMessage:
              "Web browsing is disabled for your workspace. Contact your admin to enable it.",
            id: "GizmoEditorModelPicker.disabledBrowsingToolTip",
          },
        }),
        eQ = n(67311);
      function e$(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function e0(e, t) {
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
      function e1(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e0(Object(n), !0).forEach(function (t) {
                (0, b.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : e0(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function e2(e) {
        switch (e) {
          case s.Loading:
            return "Loading";
          case s.UploadingProfilePic:
            return "Uploading profile picture";
          case s.GeneratingProfilePic:
            return "Generating profile picture";
          case s.GizmoNameTooLong:
            return "GPT name too long";
          case s.GizmoDescriptionTooLong:
            return "GPT description too long";
          case s.GizmoWelcomeMessageTooLong:
            return "GPT welcome message too long";
          case s.GizmoInstructionsTooLong:
            return "GPT instructions too long";
          case s.NameEmpty:
            return "GPT name cannot be empty";
          case s.MissingPublicActionPrivacyPolicyURL:
            return "Public actions require valid privacy policy URLs";
          case s.MissingCategory:
            return "Public GPTs must have a category";
          default:
            return (0, eQ.Z)(e), "";
        }
      }
      function e4(e, t, n) {
        var r = e.name.length > ex.aI,
          i =
            (null !==
              (c =
                null === (u = e.description) || void 0 === u
                  ? void 0
                  : u.length) && void 0 !== c
              ? c
              : 0) > ex.P_,
          o =
            (null !==
              (d =
                null === (p = e.welcomeMessage) || void 0 === p
                  ? void 0
                  : p.length) && void 0 !== d
              ? d
              : 0) > ex.Lu,
          a =
            (null !==
              (f =
                null === (m = e.instructions) || void 0 === m
                  ? void 0
                  : m.length) && void 0 !== f
              ? f
              : 0) > ex.vi,
          l = [];
        if (
          ((null == e ? void 0 : e.name) === "" && l.push(s.NameEmpty),
          r && l.push(s.GizmoNameTooLong),
          i && l.push(s.GizmoDescriptionTooLong),
          a && l.push(s.GizmoInstructionsTooLong),
          o && l.push(s.GizmoWelcomeMessageTooLong),
          null != t && [G.Zz.Link, G.Zz.Marketplace].includes(t))
        ) {
          var c,
            u,
            d,
            p,
            f,
            m,
            h,
            g,
            v = (function (e, t) {
              var n =
                ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
              if (!n) {
                if (
                  Array.isArray(e) ||
                  (n = (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return e$(e, t);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      if (
                        ("Object" === n &&
                          e.constructor &&
                          (n = e.constructor.name),
                        "Map" === n || "Set" === n)
                      )
                        return Array.from(e);
                      if (
                        "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      )
                        return e$(e, t);
                    }
                  })(e))
                ) {
                  n && (e = n);
                  var r = 0,
                    i = function () {};
                  return {
                    s: i,
                    n: function () {
                      return r >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[r++] };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: i,
                  };
                }
                throw TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              }
              var o,
                a = !0,
                s = !1;
              return {
                s: function () {
                  n = n.call(e);
                },
                n: function () {
                  var e = n.next();
                  return (a = e.done), e;
                },
                e: function (e) {
                  (s = !0), (o = e);
                },
                f: function () {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (s) throw o;
                  }
                },
              };
            })(
              null === (h = e.tools) || void 0 === h
                ? void 0
                : h.filter(function (e) {
                    return e.type === w.qK.JIT_PLUGIN;
                  })
            );
          try {
            for (v.s(); !(g = v.n()).done; ) {
              var x,
                b = g.value,
                y =
                  null === (x = b.metadata) || void 0 === x
                    ? void 0
                    : x.privacy_policy_url;
              if (
                null == y ||
                !(function (e) {
                  try {
                    return new URL(e), !0;
                  } catch (e) {
                    return !1;
                  }
                })(y)
              ) {
                l.push(s.MissingPublicActionPrivacyPolicyURL);
                break;
              }
            }
          } catch (e) {
            v.e(e);
          } finally {
            v.f();
          }
        }
        return (
          t === G.Zz.Marketplace && null == n && l.push(s.MissingCategory), l
        );
      }
      function e3(e, t) {
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
      function e5(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e3(Object(n), !0).forEach(function (t) {
                (0, b.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : e3(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      ((r = s || (s = {}))[(r.Loading = 0)] = "Loading"),
        (r[(r.UploadingProfilePic = 1)] = "UploadingProfilePic"),
        (r[(r.GeneratingProfilePic = 2)] = "GeneratingProfilePic"),
        (r[(r.GizmoNameTooLong = 3)] = "GizmoNameTooLong"),
        (r[(r.GizmoDescriptionTooLong = 4)] = "GizmoDescriptionTooLong"),
        (r[(r.GizmoWelcomeMessageTooLong = 5)] = "GizmoWelcomeMessageTooLong"),
        (r[(r.GizmoInstructionsTooLong = 6)] = "GizmoInstructionsTooLong"),
        (r[(r.NameEmpty = 7)] = "NameEmpty"),
        (r[(r.MissingPublicActionPrivacyPolicyURL = 8)] =
          "MissingPublicActionPrivacyPolicyURL"),
        (r[(r.MissingCategory = 9)] = "MissingCategory");
      var e8 = I.Z.input(
          l ||
            (l = (0, C.Z)([
              "w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 border focus:ring-blue-400 border-token-border-medium dark:bg-gray-700 h-9 dark:bg-gray-800",
            ]))
        ),
        e9 = I.Z.div(c || (c = (0, C.Z)(["text-sm text-red-500"]))),
        e6 = I.Z.div(u || (u = (0, C.Z)(["mb-6"]))),
        e7 = I.Z.textarea(
          d ||
            (d = (0, C.Z)([
              "w-full text-sm overflow-y-auto rounded-lg border bg-transparent px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium dark:bg-gray-800 bg-white h-32",
            ]))
        );
      function te() {
        return (0, O.jsx)("div", {
          className:
            "ml-2 flex h-3.5 w-3.5 cursor-default items-center justify-center rounded-full border border-token-border-medium text-[0.5rem] font-medium leading-none text-gray-500 ",
          children: "?",
        });
      }
      function tt(e) {
        var t = e.description;
        return (0, O.jsx)(ev.u, {
          label: t,
          delayDuration: 0,
          children: (0, O.jsx)(te, {}),
        });
      }
      function tn(e) {
        var t = e.label,
          n = e.description,
          r = e.collapsed,
          i = e.onClick,
          o = (0, O.jsx)("label", {
            className: "block font-medium text-token-text-primary",
            children: t,
          });
        return (0, O.jsxs)("div", {
          className: "mb-1.5 flex items-center",
          onClick: i,
          children: [
            void 0 !== r &&
              (r ? (0, O.jsx)(eL.H_v, {}) : (0, O.jsx)(eL.iUH, {})),
            n
              ? (0, O.jsx)(ev.u, {
                  label: n,
                  sideOffset: 4,
                  side: "top",
                  delayDuration: 0,
                  children: o,
                })
              : (0, O.jsx)(O.Fragment, { children: o }),
          ],
        });
      }
      function tr(e) {
        var t = e.children,
          n = e.collapsed,
          r = e.initial;
        return (0, O.jsx)(eZ.M, {
          initial: r,
          children:
            !n &&
            (0, O.jsx)(eA.E.div, {
              initial: "collapsed",
              animate: "open",
              exit: "collapsed",
              variants: {
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              },
              children: t,
            }),
        });
      }
      function ti(e) {
        var t,
          n = e.actionTool,
          r = e.onShowActionsEditor,
          i = e.isDisabled,
          o =
            "metadata" in n
              ? null === (t = n.metadata) || void 0 === t
                ? void 0
                : t.domain
              : void 0;
        return (0, O.jsxs)("div", {
          className:
            "flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",
          onClick: r,
          children: [
            (0, O.jsx)("div", {
              className: "h-9 grow px-3 py-2",
              children:
                null != o
                  ? o
                  : (0, O.jsx)("span", {
                      className: "text-red-500",
                      children: "Invalid action",
                    }),
            }),
            (0, O.jsx)("div", { className: "w-px bg-token-border-medium" }),
            (0, O.jsx)("button", {
              disabled: i,
              className:
                "flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none",
              children: (0, O.jsx)(et.RR, { className: "icon-sm" }),
            }),
          ],
        });
      }
      function to(e) {
        var t,
          n,
          r,
          i = e.gizmo,
          o = e.onShowActionsEditor,
          a = e.isDisabled,
          s = (0, X.Z)(),
          l = (0, O.jsxs)("div", {
            className: "space-y-1",
            children: [
              null == i
                ? void 0
                : null === (t = i.tools) || void 0 === t
                  ? void 0
                  : t.map(function (e, t) {
                      var n;
                      return e.type !== w.qK.JIT_PLUGIN
                        ? null
                        : (0, O.jsxs)(
                            "div",
                            {
                              children: [
                                (0, O.jsx)(ti, {
                                  isDisabled: a,
                                  actionTool: e,
                                  onShowActionsEditor: function () {
                                    return o(e.metadata.domain);
                                  },
                                }),
                                (null === (n = e.metadata.auth) || void 0 === n
                                  ? void 0
                                  : n.type) === "oauth" &&
                                  (0, O.jsx)(eg.Z, {
                                    label: "Callback URL",
                                    value: ""
                                      .concat(
                                        "https://chat.openai.com",
                                        "/aip/"
                                      )
                                      .concat(
                                        e.metadata.action_id,
                                        "/oauth/callback"
                                      ),
                                    onCopied: function () {
                                      E.m.success("Copied to clipboard", {
                                        duration: 3,
                                      });
                                    },
                                  }),
                              ],
                            },
                            t
                          );
                    }),
              (null !==
                (n =
                  null == i
                    ? void 0
                    : null === (r = i.tools) || void 0 === r
                      ? void 0
                      : r.filter(function (e) {
                          return e.type === w.qK.JIT_PLUGIN;
                        })) && void 0 !== n
                ? n
                : []
              ).length >= ex.L5
                ? (0, O.jsx)("div", {
                    children: s.formatMessage(ts.maxActionsReached, {
                      number: ex.L5,
                    }),
                  })
                : (0, O.jsx)(eI.cY, {
                    disabled: a,
                    onClick: function () {
                      o("Unknown domain");
                    },
                    className: "mt-2",
                    children: (0, O.jsx)(en.Z, e5({}, ts.createActionLabel)),
                  }),
            ],
          });
        return a
          ? (0, O.jsx)(ev.u, {
              side: "top",
              label: s.formatMessage(ts.disabledCustomActionsTooltip),
              children: l,
            })
          : l;
      }
      function ta(e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          l,
          c,
          u,
          d,
          p = e.gizmoEditorData,
          f = e.updateGizmo,
          m = e.generateProfilePic,
          h = e.setIsUploadingProfilePic,
          g = e.isGeneratingProfilePic,
          b = e.setIsGeneratingProfilePic,
          y = e.requireGizmoId,
          k = e.onShowActionsEditor,
          N = (0, eE.B9)(),
          T = eE.mx,
          z =
            null !== (o = null == p ? void 0 : p.tools) && void 0 !== o
              ? o
              : [],
          C = T ? N[T] : void 0,
          I = (0, q.useState)(!1),
          _ = I[0],
          S = I[1],
          G = (0, q.useState)(!1),
          M = G[0],
          E = G[1],
          D = (0, q.useState)(!0),
          A = D[0],
          U = D[1],
          R =
            null !== (a = null == p ? void 0 : p.promptStarters) && void 0 !== a
              ? a
              : [],
          V = [].concat((0, x.Z)(R), (0, x.Z)(R.length < 12 ? [""] : [])),
          F = e4(p),
          B = (0, L.ec)(L.F_.isBusinessWorkspace),
          W = (0, P.C)(Z.L0.WorkspaceGPTCustomActions),
          J = (0, X.Z)();
        return (0, O.jsxs)("div", {
          className:
            "flex h-full grow flex-col overflow-y-auto px-2 pt-6 text-sm",
          children: [
            (0, O.jsxs)("div", {
              className: "grow",
              children: [
                (0, O.jsxs)(e6, {
                  children: [
                    (0, O.jsx)(eM, {
                      gizmoEditorData: p,
                      generateProfilePic: m,
                      isGeneratingProfilePic: g,
                      setIsGeneratingProfilePic: b,
                      onFileChange:
                        ((t = (0, v.Z)(
                          j().mark(function e(t) {
                            var n;
                            return j().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      !(
                                        null != t &&
                                        "uploading" !== t &&
                                        null != t.fileId
                                      )
                                    ) {
                                      e.next = 7;
                                      break;
                                    }
                                    return (
                                      (e.next = 3),
                                      eD.ZP.getFileDownloadLink(t.fileId)
                                    );
                                  case 3:
                                    (n = e.sent).status === w.KF.Success &&
                                      f({
                                        profilePictureId:
                                          null != t.fileId ? t.fileId : void 0,
                                        profilePictureUrl: n.download_url,
                                      }),
                                      (e.next = 8);
                                    break;
                                  case 7:
                                    f({
                                      profilePictureId: void 0,
                                      profilePictureUrl: void 0,
                                    });
                                  case 8:
                                    h("uploading" === t);
                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )),
                        function (e) {
                          return t.apply(this, arguments);
                        }),
                    }),
                    (0, O.jsx)(tn, {
                      label: "Name",
                      description: "The name of your GPT",
                    }),
                    (0, O.jsx)(e8, {
                      type: "text",
                      placeholder: "Name your GPT",
                      value:
                        null !== (l = null == p ? void 0 : p.name) &&
                        void 0 !== l
                          ? l
                          : "",
                      onChange: function (e) {
                        f({ name: e.target.value });
                      },
                      onBlurCapture: function () {
                        return f(function (e) {
                          return e5(e5({}, e), {}, { name: e.name.trim() });
                        });
                      },
                    }),
                    F.includes(s.GizmoNameTooLong)
                      ? (0, O.jsx)(e9, {
                          className: "mt-1",
                          children: (0, O.jsx)(
                            en.Z,
                            e5(
                              e5({}, ts.nameTooLong),
                              {},
                              { values: { length: ex.aI } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, O.jsxs)(e6, {
                  className: "mt-4",
                  children: [
                    (0, O.jsx)(tn, {
                      label: "Description",
                      description: "Short description of what this GPT does",
                    }),
                    (0, O.jsx)(e8, {
                      type: "text",
                      placeholder:
                        "Add a short description about what this GPT does",
                      value:
                        null !== (c = null == p ? void 0 : p.description) &&
                        void 0 !== c
                          ? c
                          : "",
                      onChange: function (e) {
                        return f({ description: e.target.value });
                      },
                      onBlurCapture: function () {
                        return f(function (e) {
                          var t, n;
                          return e5(
                            e5({}, e),
                            {},
                            {
                              description:
                                null !==
                                  (t =
                                    null === (n = e.description) || void 0 === n
                                      ? void 0
                                      : n.trim()) && void 0 !== t
                                  ? t
                                  : "",
                            }
                          );
                        });
                      },
                    }),
                    F.includes(s.GizmoDescriptionTooLong)
                      ? (0, O.jsx)(e9, {
                          className: "mt-1",
                          children: (0, O.jsx)(
                            en.Z,
                            e5(
                              e5({}, ts.descriptionTooLong),
                              {},
                              { values: { length: ex.P_ } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, O.jsxs)(e6, {
                  children: [
                    (0, O.jsx)(tn, {
                      label: "Instructions",
                      description:
                        "What does this GPT do? How does it behave? What should it avoid doing?",
                    }),
                    (0, O.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, O.jsx)(e7, {
                          className: "resize-none",
                          rows: 8,
                          value: null == p ? void 0 : p.instructions,
                          onChange: function (e) {
                            return f({ instructions: e.target.value });
                          },
                          onBlurCapture: function () {
                            return f(function (e) {
                              return e5(
                                e5({}, e),
                                {},
                                { instructions: e.instructions.trim() }
                              );
                            });
                          },
                          placeholder:
                            "What does this GPT do? How does it behave? What should it avoid doing?",
                        }),
                        (0, O.jsx)("button", {
                          className:
                            "absolute bottom-3 right-2 text-token-text-tertiary",
                          onClick: function () {
                            return S(!0);
                          },
                          children: (0, O.jsx)(et.j5, { className: "icon-sm" }),
                        }),
                      ],
                    }),
                    F.includes(s.GizmoInstructionsTooLong)
                      ? (0, O.jsx)(e9, {
                          className: "mt-1",
                          children: (0, O.jsx)(
                            en.Z,
                            e5(
                              e5({}, ts.instructionsTooLong),
                              {},
                              { values: { length: ex.vi } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, O.jsxs)(e6, {
                  className: "hidden",
                  children: [
                    (0, O.jsx)(tn, {
                      label: "Welcome Message",
                      description: "How this GPT starts conversations.",
                    }),
                    (0, O.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, O.jsx)(e7, {
                          className: (0, H.default)("h-16 resize-none"),
                          value: null == p ? void 0 : p.welcomeMessage,
                          onChange: function (e) {
                            return f({ welcomeMessage: e.target.value });
                          },
                          placeholder: "How this GPT starts conversations.",
                        }),
                        (0, O.jsx)("button", {
                          className:
                            "absolute bottom-3 right-2 text-token-text-tertiary",
                          onClick: function () {
                            return E(!0);
                          },
                          children: (0, O.jsx)(et.j5, { className: "icon-sm" }),
                        }),
                      ],
                    }),
                    F.includes(s.GizmoWelcomeMessageTooLong)
                      ? (0, O.jsx)(e9, {
                          className: "mt-1",
                          children: (0, O.jsx)(
                            en.Z,
                            e5(
                              e5({}, ts.welcomeMessageTooLong),
                              {},
                              { values: { length: ex.Lu } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, O.jsxs)(e6, {
                  children: [
                    (0, O.jsx)(tn, {
                      label: "Conversation starters",
                      description:
                        "Examples for the user to start the conversation",
                    }),
                    (0, O.jsx)("div", {
                      className: "flex flex-col gap-1",
                      children: V.map(function (e, t) {
                        return (0, O.jsxs)(
                          "div",
                          {
                            className: "flex items-center",
                            children: [
                              (0, O.jsx)(e8, {
                                className: "rounded-r-none",
                                value: e,
                                type: "text",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  f(function (e) {
                                    var r;
                                    return e5(
                                      e5({}, e),
                                      {},
                                      {
                                        promptStarters: (0, K.compact)(
                                          t >=
                                          (null !== (r = R.length) &&
                                          void 0 !== r
                                            ? r
                                            : 0)
                                            ? [].concat(
                                                (0, x.Z)(null != R ? R : []),
                                                [n]
                                              )
                                            : R.map(function (e, r) {
                                                if (r === t) {
                                                  if ("" === n) return;
                                                  return n;
                                                }
                                                return e;
                                              })
                                        ),
                                      }
                                    );
                                  });
                                },
                              }),
                              (0, O.jsx)("button", {
                                className:
                                  "flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none border border-l-0 border-token-border-medium",
                                onClick: function () {
                                  return f(function (e) {
                                    return e5(
                                      e5({}, e),
                                      {},
                                      {
                                        promptStarters: R.filter(function (
                                          e,
                                          n
                                        ) {
                                          return n !== t;
                                        }),
                                      }
                                    );
                                  });
                                },
                                children: (0, O.jsx)(et.v7, {
                                  className: "icon-sm",
                                }),
                              }),
                            ],
                          },
                          t
                        );
                      }),
                    }),
                  ],
                }),
                (0, O.jsxs)(e6, {
                  children: [
                    (0, O.jsx)(tn, {
                      label: "Knowledge",
                      description: J.formatMessage(ts.knowledgeExplanation),
                    }),
                    (0, O.jsx)(eB, {
                      gizmoEditorData: p,
                      requireGizmoId: y,
                      currentModelConfig: C,
                      updateGizmo: f,
                    }),
                  ],
                }),
                (0, O.jsxs)(e6, {
                  children: [
                    (0, O.jsx)(tn, {
                      label: "Capabilities",
                      description: "Functionality this GPT can use",
                    }),
                    (0, O.jsx)(eY, {
                      enabledTools: z,
                      onEnabledToolsChange: function (e) {
                        return f({ tools: e });
                      },
                    }),
                  ],
                }),
                (0, O.jsxs)(e6, {
                  children: [
                    (0, O.jsx)(tn, {
                      label: "Actions",
                      description: "APIs this GPT can use",
                    }),
                    (0, O.jsx)(to, {
                      isDisabled: !!(B && !W),
                      gizmo: p,
                      onShowActionsEditor: k,
                    }),
                  ],
                }),
                !B &&
                  ((null !==
                    (n =
                      null === (r = p.files) || void 0 === r
                        ? void 0
                        : r.length) && void 0 !== n
                    ? n
                    : 0) > 0 ||
                    (null == p
                      ? void 0
                      : null === (i = p.tools) || void 0 === i
                        ? void 0
                        : i.some(function (e) {
                            return e.type === w.qK.JIT_PLUGIN;
                          }))) &&
                  (0, O.jsxs)(e6, {
                    children: [
                      (0, O.jsx)(tn, {
                        label: "Additional Settings",
                        collapsed: !!A,
                        onClick: function () {
                          U(function (e) {
                            return !e;
                          });
                        },
                      }),
                      (0, O.jsx)(tr, {
                        collapsed: A,
                        initial: !1,
                        children: (0, O.jsx)(eI.f8, {
                          className: "mx-3 my-1",
                          labelClassName: "w-full cursor-pointer",
                          label:
                            "Use conversation data in your GPT to improve our models",
                          id: "improve-chatgpt",
                          checked: !p.trainingDisabled,
                          onChange: function () {
                            f({ trainingDisabled: !p.trainingDisabled });
                          },
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            M &&
              (0, O.jsx)(eH, {
                text: null !== (u = p.welcomeMessage) && void 0 !== u ? u : "",
                onChange: function (e) {
                  f({ welcomeMessage: e });
                },
                onClose: function () {
                  return E(!1);
                },
                placeholder: "How this GPT starts conversations.",
              }),
            _ &&
              (0, O.jsx)(eH, {
                text: null !== (d = p.instructions) && void 0 !== d ? d : "",
                onChange: function (e) {
                  f({ instructions: e });
                },
                onClose: function () {
                  return S(!1);
                },
                placeholder:
                  "What does this GPT do? How does it behave? What should it avoid doing?",
              }),
          ],
        });
      }
      var ts = (0, ep.vU)({
          nameTooLong: {
            id: "gizmo.nameTooLong",
            defaultMessage:
              "GPT names cannot be longer than {length} characters.",
          },
          knowledgeExplanation: {
            id: "gizmo.knowledgeExplanation",
            defaultMessage: "Additional files for this GPT to reference.",
          },
          descriptionTooLong: {
            id: "gizmo.descriptionTooLong",
            defaultMessage:
              "GPT descriptions cannot be longer than {length} characters.",
          },
          instructionsTooLong: {
            id: "gizmo.instructionsTooLong",
            defaultMessage:
              "GPT instructions cannot be longer than {length} characters.",
          },
          welcomeMessageTooLong: {
            id: "gizmo.welcomeMessageTooLong",
            defaultMessage:
              "GPT welcome messages cannot be longer than {length} characters.",
          },
          disabledCustomActionsTooltip: {
            id: "gizmo.disabledCustomActionsTooltip",
            defaultMessage:
              "Custom actions are disabled for your workspace. Contact your admin to enable them.",
          },
          createActionLabel: {
            id: "gizmo.createActionLabel",
            defaultMessage: "Create new action",
          },
          maxActionsReached: {
            id: "gizmo.maxActionsReached",
            defaultMessage: "GPTs can have a maximum of {number} actions",
          },
        }),
        tl = n(9559),
        tc = n(85695);
      function tu(e) {
        var t = e.clientThreadId,
          n = (0, A.oq)(t),
          r = (0, A.U0)(t, n),
          i = (0, A.Ro)(t),
          o = (0, x.Z)(Array(r).keys()).map(function (e) {
            var o;
            return (0, O.jsx)(
              tc.Z,
              {
                isFinalTurn: e === r - 1,
                turnIndex: e,
                clientThreadId: t,
                conversationLeafId: n,
                onChangeItemInView: K.noop,
                onChangeRating: K.noop,
                onRequestMoreCompletions: K.noop,
                onRequestCompletion: K.noop,
                currentModelId:
                  null !== (o = null == i ? void 0 : i.id) && void 0 !== o
                    ? o
                    : "",
              },
              e
            );
          });
        return (0, O.jsx)(O.Fragment, { children: o });
      }
      function td(e) {
        var t = e.clientThreadIds;
        return (0, O.jsx)(O.Fragment, {
          children: t.map(function (e) {
            return (0, O.jsx)(tu, { clientThreadId: e }, e);
          }),
        });
      }
      var tp = n(75499),
        tf = n(82282),
        tm = n(13366),
        th = n(18008),
        tg = n(58272),
        tv = n(99304),
        tx = n(84623),
        tb = n(8844),
        ty = n(24047),
        tj = n(90439),
        tw = n(67404);
      function tP() {
        return (0, O.jsxs)("div", {
          className: "flex items-center",
          children: [
            (0, O.jsx)("div", {
              className: "border-token-border-secondary flex-grow border-b",
            }),
            (0, O.jsxs)("div", {
              className:
                "flex flex-shrink-0 items-center gap-2 px-2 py-6 text-sm text-token-text-tertiary",
              children: [(0, O.jsx)(ej.V7f, {}), "GPT updated"],
            }),
            (0, O.jsx)("div", {
              className: "border-token-border-secondary flex-grow border-b",
            }),
          ],
        });
      }
      ((i = p || (p = {}))[(i.MAGIC = 1)] = "MAGIC"),
        (i[(i.SANDBOX = 2)] = "SANDBOX"),
        ((f || (f = {})).TestGizmoAction = "test_gizmo_action");
      var tk = new tv.V(),
        tN = q.memo(function (e) {
          var t,
            n,
            r,
            i = e.gizmoEditorData,
            o = e.isSavingDraft,
            a = e.showTitle,
            s = (0, q.useState)(function () {
              return (0, A.OX)();
            }),
            l = s[0],
            c = s[1],
            u = (0, q.useState)([]),
            d = u[0],
            p = u[1];
          (0, q.useEffect)(
            function () {
              p(function (e) {
                return e[e.length - 1] === l ? e : [].concat((0, x.Z)(e), [l]);
              });
            },
            [l]
          );
          var f = d.slice(0, -1);
          (0, A.ax)(l);
          var m = (0, A.UL)(l);
          (0, q.useEffect)(
            function () {
              null != i.id &&
                A.tQ.setNewThreadConversationModeMetadata(l, {
                  kind: $.OL.GizmoTest,
                  gizmo_id: i.id,
                });
            },
            [l, i.id]
          );
          var h =
            null === (r = i.files) || void 0 === r
              ? void 0
              : r
                  .map(function (e) {
                    return e.file_id;
                  })
                  .join();
          (0, q.useEffect)(
            function () {
              null != A.tQ.getServerThreadId(l) && c((0, A.OX)());
            },
            [i.id, i.instructions, i.welcomeMessage, i.tools, h, l]
          ),
            (0, q.useEffect)(
              function () {
                (0, A.Zz)(l) &&
                  A.iN.hasThread(l) &&
                  m.lastModelUsed !== eE.mx &&
                  (A.tQ.getOrInitThread(l),
                  A.tQ.updateInitialThreadDataForNewThread(l, eE.mx, []));
              },
              [l, m, i]
            );
          var g = (0, th.tN)(function (e) {
              return e.activeSidebar;
            }),
            b = (0, q.useMemo)(
              function () {
                return { gizmoEditorData: i, mode: "test" };
              },
              [i]
            ),
            y = (0, q.useState)(0),
            w = y[0],
            P = y[1],
            k = function () {
              P(function (e) {
                return e - 360;
              });
            },
            N = i.id,
            T =
              ((n = (0, ty.Z)(l, void 0, K.noop, K.noop, K.noop, [])),
              (0, q.useCallback)(
                ((t = (0, v.Z)(
                  j().mark(function e(t, r, i) {
                    var o, a, s, c, u, d;
                    return j().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((o = A.tQ.getThreadCurrentLeafId(l)),
                              (a = (0, tb.Z)()),
                              A.tQ.updateTree(l, function (e) {
                                e.addNodeToEnd(o, {
                                  id: a,
                                  children: [],
                                  parentId: o,
                                  message: {
                                    id: a,
                                    author: { role: $.uU.User },
                                    content: {
                                      content_type: $.PX.Text,
                                      parts: [
                                        "Call the "
                                          .concat(r, " API with the ")
                                          .concat(i, " operation"),
                                      ],
                                    },
                                    recipient: "all",
                                    metadata: {
                                      jit_plugin_data: {
                                        from_client: {
                                          user_action: {
                                            data: {
                                              type: "test",
                                              operation: i,
                                              tool_name: (0, tl.VN)(r),
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                });
                              }),
                              (s = {
                                conversationMode: {
                                  kind: $.OL.GizmoTest,
                                  gizmo_id: t,
                                },
                              }),
                              (c = [eE.S.GPT_4]),
                              (u = (0, tx.Rr)((0, D.N$)(), c, $.OL.GizmoTest)),
                              (d = null),
                              !u)
                            ) {
                              e.next = 11;
                              break;
                            }
                            return (e.next = 10), tx.ZP.getEnforcementToken(c);
                          case 10:
                            d = e.sent;
                          case 11:
                            n({
                              model: eE.mx,
                              completionType: $.Os.Next,
                              parentNodeId: a,
                              metadata: {},
                              focusOnNewCompletion: !0,
                              arkoseToken: d,
                              preflightTime: 0,
                              completionMetadata: s,
                              extraStreamParams: {},
                            });
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                function (e, n, r) {
                  return t.apply(this, arguments);
                }),
                [l, n]
              ));
          return (
            (0, q.useEffect)(
              function () {
                return (0, tg.LW)(tk, {
                  test_gizmo_action: function (e) {
                    var t = e.rootDomain,
                      n = e.operationName;
                    N && T(N, t, n);
                  },
                });
              },
              [T, N]
            ),
            (0, O.jsx)(tj.D.Provider, {
              value: b,
              children: (0, O.jsxs)("div", {
                className: (0, H.default)(
                  "flex h-full w-full",
                  o && "cursor-wait opacity-80 transition"
                ),
                children: [
                  (0, O.jsxs)("div", {
                    className: "flex grow flex-col",
                    children: [
                      (0, O.jsx)("div", {
                        className: "relative mb-2 flex-shrink-0",
                        children: (0, O.jsx)("div", {
                          className: "flex justify-center py-1",
                          children:
                            (void 0 === a || a) &&
                            (0, O.jsxs)("div", {
                              className:
                                "group flex items-center gap-2 text-lg font-medium",
                              children: [
                                (0, O.jsx)("div", { className: "icon-md" }),
                                (0, O.jsxs)("button", {
                                  onClick: function () {
                                    k(), p([]), c((0, A.OX)());
                                  },
                                  className: "flex items-center gap-2",
                                  children: [
                                    "Preview",
                                    (0, O.jsx)(eA.E.div, {
                                      className: "text-token-text-primary",
                                      animate: { rotate: w },
                                      transition: { duration: 0.3 },
                                      children: (0, O.jsx)(et.u8, {
                                        className:
                                          "icon-md invisible group-hover:visible",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        }),
                      }),
                      (0, O.jsx)("div", {
                        className: (0, H.default)(
                          "relative grow overflow-auto px-2",
                          o && "pointer-events-none"
                        ),
                        children: (0, O.jsx)(tf.Z, {
                          initialThreadData: m,
                          clientThreadId: l,
                          hideHeader: !0,
                          renderEmptyState: (0, O.jsxs)("div", {
                            className: "relative h-full w-full",
                            children: [
                              null != f &&
                                f.length > 0 &&
                                (0, O.jsx)("div", {
                                  className: "h-full w-full opacity-20",
                                  children: (0, O.jsxs)(tm.I, {
                                    children: [
                                      (0, O.jsx)(td, { clientThreadIds: f }),
                                      (0, O.jsx)(tP, {}),
                                    ],
                                  }),
                                }),
                              (0, O.jsx)("div", {
                                className:
                                  "absolute left-0 top-0 h-full w-full",
                                children: (0, O.jsx)(tw.r, {
                                  gizmo: i,
                                  isOwner: !0,
                                  hideOwner: !0,
                                }),
                              }),
                            ],
                          }),
                          prependThreadChildren:
                            f.length > 0 &&
                            (0, O.jsxs)(O.Fragment, {
                              children: [
                                (0, O.jsx)("div", {
                                  className: "opacity-50",
                                  children: (0, O.jsx)(td, {
                                    clientThreadIds: f,
                                  }),
                                }),
                                (0, O.jsx)(tP, {}),
                              ],
                            }),
                        }),
                      }),
                    ],
                  }),
                  "debug" === g &&
                    (0, O.jsx)(tp.fv, {
                      clientThreadId: l,
                      slideOver: !1,
                      onClose: function () {
                        return th.vm.toggleActiveSidebar("debug");
                      },
                      isOpen: !0,
                    }),
                ],
              }),
            })
          );
        }),
        tT = ["oauth_client_id", "oauth_client_secret"],
        tO = ["api_key"];
      function tz(e, t) {
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
      function tC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tz(Object(n), !0).forEach(function (t) {
                (0, b.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tz(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var tI = "".concat(
        "https://chat.openai.com",
        "/g/g-TYEliDU6A-actionsgpt"
      );
      function t_(e) {
        var t = e.children;
        return (0, O.jsx)("label", {
          className: "mb-1 block text-sm font-medium",
          children: t,
        });
      }
      function tS(e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          l,
          c,
          u,
          d,
          p,
          f,
          m,
          h,
          g,
          v,
          x,
          b,
          y,
          j,
          w = e.jitPluginTool,
          P = e.onUpdateTool,
          k = e.onClose,
          T = (0, q.useState)({
            apiKeyValue: "",
            oauthClientIdValue: "",
            oauthClientSecretValue: "",
            oauthAuthUrlValue:
              null !==
                (t =
                  null == w
                    ? void 0
                    : null === (n = w.metadata) || void 0 === n
                      ? void 0
                      : null === (r = n.auth) || void 0 === r
                        ? void 0
                        : r.client_url) && void 0 !== t
                ? t
                : "",
            oauthTokenUrlValue:
              null !==
                (i =
                  null == w
                    ? void 0
                    : null === (o = w.metadata) || void 0 === o
                      ? void 0
                      : null === (a = o.auth) || void 0 === a
                        ? void 0
                        : a.authorization_url) && void 0 !== i
                ? i
                : "",
            oauthScopeValue:
              null !==
                (s =
                  null == w
                    ? void 0
                    : null === (l = w.metadata) || void 0 === l
                      ? void 0
                      : null === (c = l.auth) || void 0 === c
                        ? void 0
                        : c.scope) && void 0 !== s
                ? s
                : "",
            authTypeValue:
              null !==
                (u =
                  null == w
                    ? void 0
                    : null === (d = w.metadata) || void 0 === d
                      ? void 0
                      : null === (p = d.auth) || void 0 === p
                        ? void 0
                        : p.type) && void 0 !== u
                ? u
                : $.Jv.None,
            httpAuthTypeValue:
              null !==
                (f =
                  null == w
                    ? void 0
                    : null === (m = w.metadata) || void 0 === m
                      ? void 0
                      : null === (h = m.auth) || void 0 === h
                        ? void 0
                        : h.authorization_type) && void 0 !== f
                ? f
                : "basic",
            customHeaderValue:
              null !==
                (g =
                  null == w
                    ? void 0
                    : null === (v = w.metadata) || void 0 === v
                      ? void 0
                      : null === (x = v.auth) || void 0 === x
                        ? void 0
                        : x.custom_auth_header) && void 0 !== g
                ? g
                : "",
            tokenExchangeMethodValue:
              null !==
                (b =
                  null == w
                    ? void 0
                    : null === (y = w.metadata) || void 0 === y
                      ? void 0
                      : null === (j = y.auth) || void 0 === j
                        ? void 0
                        : j.token_exchange_method) && void 0 !== b
                ? b
                : "default_post",
          }),
          z = T[0],
          C = T[1];
        function I(e) {
          C(function (t) {
            return tC(tC({}, t), e);
          });
        }
        return (0, O.jsxs)(N.Z, {
          type: "success",
          isOpen: !0,
          title: "Authentication",
          primaryButton: (0, O.jsx)(ee.z, {
            color: "dark",
            onClick: function () {
              P(
                z.authTypeValue === $.Jv.None
                  ? { type: $.Jv.None }
                  : z.authTypeValue === $.Jv.OAuth
                    ? {
                        type: $.Jv.OAuth,
                        client_url: z.oauthAuthUrlValue,
                        authorization_url: z.oauthTokenUrlValue,
                        authorization_content_type:
                          "application/x-www-form-urlencoded",
                        scope: z.oauthScopeValue,
                        token_exchange_method: z.tokenExchangeMethodValue,
                        oauth_client_id: z.oauthClientIdValue,
                        oauth_client_secret: z.oauthClientSecretValue,
                      }
                    : {
                        type: $.Jv.ServiceHTTP,
                        authorization_type: z.httpAuthTypeValue,
                        custom_auth_header: z.customHeaderValue,
                        api_key: z.apiKeyValue,
                      }
              ),
                k();
            },
            children: "Save",
          }),
          secondaryButton: (0, O.jsx)(ee.z, {
            color: "neutral",
            onClick: k,
            children: "Cancel",
          }),
          onClose: k,
          children: [
            (0, O.jsxs)("div", {
              className: "mb-4",
              children: [
                (0, O.jsx)(t_, { children: "Authentication Type" }),
                (0, O.jsxs)(eu.Root, {
                  onValueChange: function (e) {
                    I({ authTypeValue: e });
                  },
                  value: z.authTypeValue,
                  className: "flex gap-4",
                  children: [
                    (0, O.jsx)(eI.Xb, { label: "None", value: $.Jv.None }),
                    (0, O.jsx)(eI.Xb, {
                      label: "API Key",
                      value: $.Jv.ServiceHTTP,
                    }),
                    (0, O.jsx)(eI.Xb, { label: "OAuth", value: $.Jv.OAuth }),
                  ],
                }),
              ],
            }),
            "service_http" === z.authTypeValue
              ? (0, O.jsxs)(O.Fragment, {
                  children: [
                    (0, O.jsx)(t_, { children: "API Key" }),
                    (0, O.jsx)(e8, {
                      placeholder: "<HIDDEN>",
                      type: "password",
                      value: z.apiKeyValue,
                      onChange: function (e) {
                        I({ apiKeyValue: e.target.value });
                      },
                      className: "mb-2",
                    }),
                    (0, O.jsx)(t_, { children: "Auth Type" }),
                    (0, O.jsxs)(eu.Root, {
                      className: "mb-2 flex gap-6 overflow-hidden rounded-lg",
                      value: z.httpAuthTypeValue,
                      required: !0,
                      onValueChange: function (e) {
                        I({ httpAuthTypeValue: e });
                      },
                      children: [
                        (0, O.jsx)(eI.Xb, { value: "basic", label: "Basic" }),
                        (0, O.jsx)(eI.Xb, { value: "bearer", label: "Bearer" }),
                        (0, O.jsx)(eI.Xb, { value: "custom", label: "Custom" }),
                      ],
                    }),
                    "custom" === z.httpAuthTypeValue &&
                      (0, O.jsxs)("div", {
                        className: "mt-2",
                        children: [
                          (0, O.jsx)(t_, { children: "Custom Header Name" }),
                          (0, O.jsx)(e8, {
                            value: z.customHeaderValue,
                            onChange: function (e) {
                              I({ customHeaderValue: e.target.value });
                            },
                            className: "mb-2",
                            placeholder: "X-Api-Key",
                          }),
                        ],
                      }),
                  ],
                })
              : "oauth" === z.authTypeValue
                ? (0, O.jsxs)(O.Fragment, {
                    children: [
                      (0, O.jsx)(t_, { children: "Client ID" }),
                      (0, O.jsx)(e8, {
                        placeholder: "<HIDDEN>",
                        type: "password",
                        value: z.oauthClientIdValue,
                        onChange: function (e) {
                          I({ oauthClientIdValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, O.jsx)(t_, { children: "Client Secret" }),
                      (0, O.jsx)(e8, {
                        placeholder: "<HIDDEN>",
                        type: "password",
                        value: z.oauthClientSecretValue,
                        onChange: function (e) {
                          I({ oauthClientSecretValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, O.jsx)(t_, { children: "Authorization URL" }),
                      (0, O.jsx)(e8, {
                        value: z.oauthAuthUrlValue,
                        onChange: function (e) {
                          I({ oauthAuthUrlValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, O.jsx)(t_, { children: "Token URL" }),
                      (0, O.jsx)(e8, {
                        value: z.oauthTokenUrlValue,
                        onChange: function (e) {
                          I({ oauthTokenUrlValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, O.jsx)(t_, { children: "Scope" }),
                      (0, O.jsx)(e8, {
                        value: z.oauthScopeValue,
                        onChange: function (e) {
                          I({ oauthScopeValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, O.jsx)(t_, { children: "Token Exchange Method" }),
                      (0, O.jsxs)(eu.Root, {
                        value: z.tokenExchangeMethodValue,
                        required: !0,
                        onValueChange: function (e) {
                          I({ tokenExchangeMethodValue: e });
                        },
                        children: [
                          (0, O.jsx)(eI.Xb, {
                            value: "default_post",
                            label: "Default (POST request)",
                          }),
                          (0, O.jsx)(eI.Xb, {
                            value: "basic_auth_header",
                            label: "Basic authorization header",
                          }),
                        ],
                      }),
                    ],
                  })
                : null,
          ],
        });
      }
      function tG(e) {
        var t = e.onImport,
          n = e.onClose,
          r = (0, q.useState)(""),
          i = r[0],
          o = r[1],
          a = (0, q.useState)(!1),
          s = a[0],
          l = a[1];
        function c() {
          return (c = (0, v.Z)(
            j().mark(function e() {
              var r, o;
              return j().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (e.prev = 0), (o = new URL(i)), (e.next = 7);
                        break;
                      case 4:
                        return (
                          (e.prev = 4), (e.t0 = e.catch(0)), e.abrupt("return")
                        );
                      case 7:
                        if (!(null !== (r = o) && void 0 !== r && r.hostname)) {
                          e.next = 18;
                          break;
                        }
                        return (
                          l(!0),
                          (e.prev = 9),
                          (e.next = 12),
                          T.U.fetchOpenAPISpec(i)
                        );
                      case 12:
                        t(e.sent.content), n();
                      case 15:
                        return (e.prev = 15), l(!1), e.finish(15);
                      case 18:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [0, 4],
                  [9, , 15, 18],
                ]
              );
            })
          )).apply(this, arguments);
        }
        return (0, O.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [
            (0, O.jsx)("input", {
              name: "url",
              value: i,
              onChange: function (e) {
                o(e.target.value);
              },
              placeholder: "https://...",
              className:
                "h-8 rounded border border-token-border-light px-2 text-sm",
              autoFocus: !0,
            }),
            (0, O.jsx)(eI.cY, {
              color: "dark",
              loading: s,
              onClick: function () {
                return c.apply(this, arguments);
              },
              children: "Import",
            }),
            (0, O.jsx)(eI.cY, {
              color: "neutral",
              onClick: n,
              children: "Cancel",
            }),
          ],
        });
      }
      function tM(e) {
        var t = e.rootDomain,
          n = e.operations;
        return null == n || 0 === n.length
          ? (0, O.jsx)("div", {
              className: "text-sm text-token-text-tertiary",
              children: "Operations in your schema will show here.",
            })
          : (0, O.jsx)("table", {
              className: "w-full text-sm",
              children: (0, O.jsxs)("tbody", {
                children: [
                  (0, O.jsxs)("tr", {
                    className:
                      "border-b border-token-border-light text-left text-xs text-token-text-tertiary",
                    children: [
                      (0, O.jsx)("th", {
                        className: "py-1 font-normal",
                        children: "Name",
                      }),
                      (0, O.jsx)("th", {
                        className: "py-1 font-normal",
                        children: "Method",
                      }),
                      (0, O.jsx)("th", {
                        className: "py-1 font-normal",
                        children: "Path",
                      }),
                      (0, O.jsx)("th", { className: "py-1 font-normal" }),
                    ],
                  }),
                  n.map(function (e) {
                    return (0, O.jsxs)(
                      "tr",
                      {
                        className: "border-b border-token-border-light",
                        children: [
                          (0, O.jsx)("td", {
                            className: "py-2",
                            children: e.operationName,
                          }),
                          (0, O.jsx)("td", {
                            className: "py-2 uppercase",
                            children: e.method,
                          }),
                          (0, O.jsx)("td", {
                            className: "py-2",
                            children: e.path,
                          }),
                          (0, O.jsx)("td", {
                            className: "py-2",
                            children: (0, O.jsx)(eI.cY, {
                              color: "neutral",
                              onClick: function () {
                                t &&
                                  tk.publish({
                                    kind: f.TestGizmoAction,
                                    rootDomain: t,
                                    operationName: e.operationName,
                                  });
                              },
                              children: "Test",
                            }),
                          }),
                        ],
                      },
                      e.operationName
                    );
                  }),
                ],
              }),
            });
      }
      function tE(e) {
        var t = e.validationResponse;
        return (0, O.jsxs)("div", {
          children: [
            (0, O.jsx)(tn, { label: "Available actions" }),
            (0, O.jsx)(tM, {
              rootDomain: t.success ? t.spec.root_domain : void 0,
              operations: t.success ? t.spec.operations : void 0,
            }),
          ],
        });
      }
      function tD(e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          l,
          c = e.currentlyEditingActionDomain,
          u = e.gizmoEditorData,
          d = e.updateGizmo,
          p = e.onClose,
          f = (0, q.useState)(c),
          m = f[0],
          h = f[1],
          g = (0, q.useRef)(m);
        (0, q.useEffect)(
          function () {
            g.current = m;
          },
          [m]
        );
        var b =
            null == u
              ? void 0
              : null === (t = u.tools) || void 0 === t
                ? void 0
                : t.find(function (e) {
                    return (
                      e.type === w.qK.JIT_PLUGIN && e.metadata.domain === m
                    );
                  }),
          y = (0, q.useState)(function () {
            return null == b;
          })[0],
          P =
            null !==
              (n =
                null == b
                  ? void 0
                  : null === (r = b.metadata) || void 0 === r
                    ? void 0
                    : r.raw_spec) && void 0 !== n
              ? n
              : "",
          k = (0, q.useState)(!1),
          N = k[0],
          z = k[1],
          C = (0, q.useState)(!1),
          I = C[0],
          _ = C[1];
        function S(e) {
          d(function (t) {
            return tC(
              tC({}, t),
              {},
              {
                tools: b
                  ? t.tools.map(function (t) {
                      return t.type === w.qK.JIT_PLUGIN &&
                        t.metadata.domain === m
                        ? tC(
                            tC({}, t),
                            {},
                            { metadata: tC(tC({}, t.metadata), e) }
                          )
                        : t;
                    })
                  : [].concat((0, x.Z)(t.tools), [
                      {
                        type: w.qK.JIT_PLUGIN,
                        metadata: tC(
                          {
                            raw_spec: "",
                            domain: null != m ? m : "Unknown domain",
                            action_id: "",
                          },
                          e
                        ),
                      },
                    ]),
              }
            );
          });
        }
        var G = (0, q.useState)(),
          M = G[0],
          E = G[1],
          D = (0, q.useState)(function () {
            var e;
            return (0, K.debounce)(
              ((e = (0, v.Z)(
                j().mark(function e(t) {
                  var n, r, i, o;
                  return j().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), T.U.validateOpenAPISpec(t);
                        case 2:
                          if (
                            (E((n = e.sent)),
                            !(r = n.success ? n.spec.root_domain : void 0))
                          ) {
                            e.next = 13;
                            break;
                          }
                          if (
                            !(r !== g.current) ||
                            !(null == u
                              ? void 0
                              : null === (i = u.tools) || void 0 === i
                                ? void 0
                                : i.find(function (e) {
                                    return (
                                      e.type === w.qK.JIT_PLUGIN &&
                                      e.metadata.domain === r
                                    );
                                  }))
                          ) {
                            e.next = 11;
                            break;
                          }
                          return (
                            E({
                              success: !1,
                              errors: [
                                "Action sets cannot have duplicate domains - ".concat(
                                  r,
                                  " already exists on another action"
                                ),
                              ],
                            }),
                            e.abrupt("return")
                          );
                        case 11:
                          d(function (e) {
                            return tC(
                              tC({}, e),
                              {},
                              {
                                tools: e.tools.map(function (e) {
                                  return e.type === w.qK.JIT_PLUGIN &&
                                    e.metadata.domain === g.current
                                    ? tC(
                                        tC({}, e),
                                        {},
                                        {
                                          metadata: tC(
                                            tC({}, e.metadata),
                                            {},
                                            { domain: r }
                                          ),
                                        }
                                      )
                                    : e;
                                }),
                              }
                            );
                          }),
                            h(r);
                        case 13:
                          n.success &&
                            n.known_auth &&
                            n.known_privacy_policy &&
                            ((o = tC({ type: $.Jv.OAuth }, n.known_auth)),
                            (0, K.isEqual)(b.metadata.auth, o) ||
                              S({
                                auth: tC({ type: $.Jv.OAuth }, n.known_auth),
                              }),
                            b.metadata.privacy_policy_url !==
                              n.known_privacy_policy &&
                              S({
                                privacy_policy_url: n.known_privacy_policy,
                              }));
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function (t) {
                return e.apply(this, arguments);
              }),
              1e3
            );
          })[0],
          Z = null != M ? (M.success ? M.warnings : M.errors) : void 0;
        (0, q.useEffect)(
          function () {
            "" === P ? (E(void 0), D.cancel()) : D(P);
          },
          [D, P]
        );
        var A = function (e) {
          try {
            S({ raw_spec: JSON.stringify(JSON.parse(e), null, 2) });
          } catch (t) {
            try {
              S({
                raw_spec: er.ZP.stringify(er.ZP.parse(e), {
                  lineWidth: 120,
                  indent: 2,
                }),
              });
            } catch (e) {}
          }
        };
        return (0, O.jsxs)("div", {
          className: "h-full overflow-auto px-4 pb-12 text-sm",
          children: [
            (0, O.jsxs)("div", {
              className:
                "relative flex flex-col items-center px-16 py-6 text-center",
              children: [
                (0, O.jsx)("div", {
                  className: "absolute left-0 top-6",
                  children: (0, O.jsx)(ee.z, {
                    color: "neutral",
                    onClick: p,
                    children: (0, O.jsx)(et.L7, { className: "icon-md" }),
                  }),
                }),
                null != b &&
                  (0, O.jsx)("div", {
                    className: "absolute right-0 top-6",
                    children: (0, O.jsx)(ee.z, {
                      color: "neutral",
                      onClick: function () {
                        window.confirm(
                          "Are you sure you want to delete this action?"
                        ) &&
                          (d(function (e) {
                            return tC(
                              tC({}, e),
                              {},
                              {
                                tools: e.tools.filter(function (e) {
                                  return (
                                    e.type !== w.qK.JIT_PLUGIN ||
                                    e.metadata.domain !== m
                                  );
                                }),
                              }
                            );
                          }),
                          p());
                      },
                      className: "text-red-500",
                      children: (0, O.jsx)(et.a_, { className: "icon-md" }),
                    }),
                  }),
                (0, O.jsx)("div", {
                  className: "text-xl font-medium",
                  children: y ? "Add actions" : "Edit actions",
                }),
                (0, O.jsx)("div", {
                  className: "text-sm text-token-text-tertiary",
                  children:
                    "Let your GPT retrieve information or take actions outside of ChatGPT.",
                }),
                (0, O.jsx)("div", {
                  className: "text-sm text-token-text-tertiary",
                  children: (0, O.jsx)("a", {
                    href: "https://help.openai.com/en/articles/8554397-creating-a-gpt",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "font-medium",
                    children: "Learn more.",
                  }),
                }),
              ],
            }),
            (0, O.jsxs)(e6, {
              className: "relative",
              children: [
                (0, O.jsx)(tn, { label: "Authentication" }),
                (0, O.jsx)(ed, {
                  onClick: function () {
                    z(!0);
                  },
                  content: (function (e) {
                    switch (e) {
                      case $.Jv.None:
                        return "None";
                      case $.Jv.OAuth:
                        return "OAuth";
                      case $.Jv.ServiceHTTP:
                        return "API Key";
                    }
                  })(
                    null !==
                      (i =
                        null == b
                          ? void 0
                          : null === (o = b.metadata) || void 0 === o
                            ? void 0
                            : null === (a = o.auth) || void 0 === a
                              ? void 0
                              : a.type) && void 0 !== i
                      ? i
                      : $.Jv.None
                  ),
                  button: (0, O.jsx)("button", {
                    color: "neutral",
                    className: "flex items-center gap-2 px-3",
                    children: (0, O.jsx)(et.RR, { className: "icon-sm" }),
                  }),
                }),
                N &&
                  (0, O.jsx)(tS, {
                    jitPluginTool: b,
                    onUpdateTool: function (e) {
                      switch (e.type) {
                        case $.Jv.None:
                          S({ auth: { type: $.Jv.None } });
                          break;
                        case $.Jv.OAuth:
                          var t = e.oauth_client_id,
                            n = e.oauth_client_secret;
                          S({
                            auth: (0, Q.Z)(e, tT),
                            oauth_client_id: t,
                            oauth_client_secret: n,
                          });
                          break;
                        case $.Jv.ServiceHTTP:
                          var r = e.api_key;
                          S({ auth: (0, Q.Z)(e, tO), api_key: r });
                      }
                    },
                    onClose: function () {
                      z(!1);
                    },
                  }),
              ],
            }),
            (0, O.jsxs)("div", {
              children: [
                (0, O.jsxs)("div", {
                  className: "mb-1 flex h-8 items-center justify-between",
                  children: [
                    (0, O.jsx)("label", {
                      className: "font-medium text-token-text-primary",
                      children: "Schema",
                    }),
                    (0, O.jsx)("div", {
                      className: "flex items-center",
                      children: I
                        ? (0, O.jsx)(tG, {
                            onImport: function (e) {
                              A(e);
                            },
                            onClose: function () {
                              _(!1);
                            },
                          })
                        : (0, O.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, O.jsx)(eI.cY, {
                                color: "neutral",
                                onClick: function () {
                                  _(!0);
                                },
                                children: "Import from URL",
                              }),
                              (0, O.jsx)(ef, {
                                onSelectExample: function (e) {
                                  S({ raw_spec: e });
                                },
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
                (0, O.jsxs)("div", {
                  className:
                    "mb-8 overflow-hidden rounded-lg border border-token-border-light",
                  children: [
                    (0, O.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, O.jsx)("textarea", {
                          value: P,
                          onChange: function (e) {
                            S({ raw_spec: e.target.value });
                          },
                          spellCheck: !1,
                          placeholder: "Enter your OpenAPI schema here",
                          className:
                            "block h-96 w-full border-none bg-transparent p-2 font-mono text-xs text-token-text-primary",
                        }),
                        (0, O.jsx)("div", {
                          className: "absolute bottom-2 right-2 flex gap-2",
                          children:
                            "" !== P
                              ? (0, O.jsx)(eI.cY, {
                                  onClick: function () {
                                    A(P);
                                  },
                                  children: "Format",
                                })
                              : (0, O.jsxs)(eI.cY, {
                                  as: "a",
                                  to: tI,
                                  openNewTab: !0,
                                  children: [
                                    (0, O.jsx)(en.Z, {
                                      id: "gizmo.actions.actionsGptHelp",
                                      defaultMessage:
                                        "Get help from ActionsGPT",
                                    }),
                                    (0, O.jsx)(et.fe, { className: "icon-md" }),
                                  ],
                                }),
                        }),
                      ],
                    }),
                    null != Z &&
                      (null == Z ? void 0 : Z.length) > 0 &&
                      (0, O.jsx)("div", {
                        className:
                          "border-t border-token-border-light p-2 text-red-500",
                        children: Z.map(function (e, t) {
                          return (0, O.jsx)("div", { children: e }, t);
                        }),
                      }),
                  ],
                }),
              ],
            }),
            null != M && (0, O.jsx)(tE, { validationResponse: M }),
            (0, O.jsxs)("div", {
              className: "mt-4",
              children: [
                (0, O.jsx)(tn, {
                  label: "Privacy policy",
                  description:
                    "Privacy policy is required for all public GPTs.",
                }),
                (0, O.jsx)(ei.Z, {
                  name: "privacyPolicyUrl",
                  value:
                    null !==
                      (s =
                        null == b
                          ? void 0
                          : null === (l = b.metadata) || void 0 === l
                            ? void 0
                            : l.privacy_policy_url) && void 0 !== s
                      ? s
                      : "",
                  placeholder: "https://api.example-weather-app.com/privacy",
                  onChange: function (e) {
                    S({ privacy_policy_url: e.target.value });
                  },
                }),
              ],
            }),
          ],
        });
      }
      var tZ = n(87942),
        tA = n(6013),
        tL = n(20491),
        tU = n(37178),
        tR = n(34490);
      function tV(e, t) {
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
      function tq(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tV(Object(n), !0).forEach(function (t) {
                (0, b.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tV(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function tF(e) {
        var t,
          n,
          r,
          i = e.gizmo,
          o = e.publishedGizmo,
          a = e.promoteGizmo,
          l = e.setStep,
          c = e.showActionsModal,
          u = (0, q.useState)(!1),
          d = u[0],
          p = u[1],
          f = (0, L.ec)(L.F_.isBusinessWorkspace),
          m = (0, X.Z)(),
          h = (0, q.useState)(
            (0, g.Sg)(i)
              ? f
                ? G.Zz.Workspace
                : G.Zz.Marketplace
              : i.sharingRecipient
          ),
          x = h[0],
          b = h[1],
          y = (0, g.WL)().data,
          P = (0, q.useState)(
            null != o && o.gizmo.display.categories.length > 0
              ? o.gizmo.display.categories[0]
              : void 0
          ),
          k = P[0],
          N = P[1];
        (0, q.useEffect)(
          function () {
            N(null == o ? void 0 : o.gizmo.display.categories[0]);
          },
          [null == o ? void 0 : o.gizmo.display.categories]
        );
        var z = (0, q.useState)(void 0),
          C = z[0],
          I = z[1],
          _ = (0, q.useRef)(
            (0, K.throttle)(function (e, t) {
              return T.U.generateCategory(e, t);
            }, 1e3)
          ),
          S =
            null != y && y.is_verified
              ? void 0
              : m.formatMessage(t1.displayNameRequiredHint);
        x === G.Zz.Marketplace && null != S && b(G.Zz.Link);
        var M =
            f &&
            !(
              null !== (t = i.allowedSharingRecipients) &&
              void 0 !== t &&
              t.some(function (e) {
                return e === G.Zz.Link;
              })
            ),
          E = e4(i, x, k),
          A = E.includes(s.MissingPublicActionPrivacyPolicyURL),
          U = i.tools.find(function (e) {
            return e.type === w.qK.JIT_PLUGIN && !e.metadata.privacy_policy_url;
          }),
          R = (0, L.ec)(function (e) {
            return e.currentWorkspace;
          }),
          V = (0, D.hz)(),
          B = (0, g.Z1)();
        return (
          (0, q.useEffect)(
            function () {
              if (!(null != V && V.includes(Z.L0.GizmoStore))) {
                N("other");
                return;
              }
              var e = !0;
              return (
                (0, v.Z)(
                  j().mark(function t() {
                    var n;
                    return j().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (((t.prev = 0), !(null != k))) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt("return");
                            case 3:
                              return (
                                (t.next = 5), _.current(i.name, i.instructions)
                              );
                            case 5:
                              (n = t.sent),
                                e && null == k && (n ? N(n.id) : I(!0)),
                                (t.next = 12);
                              break;
                            case 9:
                              (t.prev = 9),
                                (t.t0 = t.catch(0)),
                                e && null == k && I(!0);
                            case 12:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 9]]
                    );
                  })
                )(),
                function () {
                  e = !1;
                }
              );
            },
            [i.instructions, i.name, V, k]
          ),
          (0, O.jsxs)("div", {
            children: [
              (0, O.jsx)("div", {
                className: "mb-2 text-sm font-medium text-token-text-tertiary",
                children: (0, O.jsx)(en.Z, tq({}, t1.publishTo)),
              }),
              (0, O.jsxs)("div", {
                className: "flex flex-col gap-3 text-sm",
                children: [
                  (0, O.jsxs)(F.fC, {
                    value: x,
                    onValueChange: function (e) {
                      return b(e);
                    },
                    className: "space-y-2",
                    children: [
                      i.allowedSharingRecipients &&
                        i.allowedSharingRecipients.map(function (e, t) {
                          return (0, O.jsx)(
                            eI.Xb,
                            {
                              value: e,
                              disabled: e === G.Zz.Marketplace && null != S,
                              tooltipText:
                                e === G.Zz.Marketplace
                                  ? null != S
                                    ? S
                                    : m.formatMessage(t1.publicSharingHint)
                                  : void 0,
                              label: (0, tl.MI)(e, R, m),
                            },
                            t
                          );
                        }),
                      M &&
                        (0, O.jsxs)(O.Fragment, {
                          children: [
                            (0, O.jsx)(eI.Xb, {
                              value: G.Zz.Link,
                              disabled: !0,
                              tooltipText: m.formatMessage(
                                t1.workspaceDisabledHint
                              ),
                              label: (0, tl.MI)(G.Zz.Link, R, m),
                            }),
                            (0, O.jsx)(eI.Xb, {
                              value: G.Zz.Marketplace,
                              disabled: !0,
                              tooltipText: m.formatMessage(
                                t1.workspaceDisabledHint
                              ),
                              label: (0, tl.MI)(G.Zz.Marketplace, R, m),
                            }),
                          ],
                        }),
                    ],
                  }),
                  A &&
                    (0, O.jsx)("div", {
                      className: "text-xs text-red-500",
                      children: (0, O.jsx)(
                        en.Z,
                        tq(
                          tq({}, t1.actionNeedsPrivacyPolicyURL),
                          {},
                          {
                            values: {
                              fixlink: function (e) {
                                return (0, O.jsx)("button", {
                                  onClick: function () {
                                    c(
                                      null == U ? void 0 : U.metadata.action_id
                                    );
                                  },
                                  className: "underline",
                                  children: e,
                                });
                              },
                            },
                          }
                        )
                      ),
                    }),
                  x !== G.Zz.Private &&
                    (0, O.jsx)(tR.QT, {
                      gizmoAvatar: i.profilePictureUrl,
                      gizmoName: i.name,
                      canEdit: !0,
                    }),
                  x === G.Zz.Marketplace &&
                    (null == V ? void 0 : V.includes(Z.L0.GizmoStore)) &&
                    (C
                      ? (0, O.jsx)("div", {
                          className: "text-xs text-red-500",
                          children: (0, O.jsx)(en.Z, tq({}, t1.categoryError)),
                        })
                      : (0, O.jsxs)(O.Fragment, {
                          children: [
                            (0, O.jsxs)("div", {
                              className:
                                "flex items-center justify-between text-sm font-medium text-token-text-tertiary",
                              children: [
                                (0, O.jsx)(en.Z, tq({}, t1.categoryLabel)),
                                (0, O.jsx)(ev.u, {
                                  label: (0, O.jsx)("span", {
                                    className: "w-36 text-xs",
                                    children: (0, O.jsx)(
                                      en.Z,
                                      tq({}, t1.categoryLabelTooltip)
                                    ),
                                  }),
                                  side: "top",
                                  children: (0, O.jsx)(et.VX, {
                                    className: "icon-sm",
                                  }),
                                }),
                              ],
                            }),
                            (0, O.jsx)(t$, {
                              category: null != k ? k : "",
                              categories:
                                null !==
                                  (n =
                                    null === (r = B.data) || void 0 === r
                                      ? void 0
                                      : r.categories) && void 0 !== n
                                  ? n
                                  : [],
                              setCategory: N,
                            }),
                          ],
                        })),
                  (0, O.jsx)(eI.cY, {
                    color: "primary",
                    disabled: E.length > 0,
                    loading: d,
                    onClick: (0, v.Z)(
                      j().mark(function e() {
                        var t;
                        return j().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0), p(!0), (e.next = 4), a(x, k)
                                  );
                                case 4:
                                  if (null != (t = e.sent)) {
                                    e.next = 7;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 7:
                                  1 === t.gizmo.live_version
                                    ? Y().push((0, g.m_)(t))
                                    : l({
                                        type: "published",
                                        publishedGizmo: t,
                                      });
                                case 8:
                                  return (e.prev = 8), p(!1), e.finish(8);
                                case 11:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, , 8, 11]]
                        );
                      })
                    ),
                    className: "w-full",
                    children: (0, O.jsx)(en.Z, tq({}, t1.privacyConfirm)),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function tB(e) {
        return "".concat("https://chat.openai.com").concat((0, g.m_)(e));
      }
      function tW(e) {
        var t = e.publishedGizmo,
          n = tB(t);
        return (0, O.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [
            (0, O.jsx)("div", {
              className: "font-medium",
              children: (0, O.jsx)(en.Z, tq({}, t1.publishedTitle)),
            }),
            (0, O.jsxs)("div", {
              className:
                "flex gap-1 rounded bg-token-surface-secondary px-2 py-1",
              children: [
                (0, O.jsx)("div", {
                  className: "text-ellipsis break-all line-clamp-1",
                  children: n,
                }),
                (0, O.jsx)("button", {
                  onClick: function () {
                    (0, tU.S)(tB(t));
                  },
                  className:
                    "text-token-text-secondary transition hover:text-token-text-primary",
                  children: (0, O.jsx)(et.dS, { className: "icon-sm" }),
                }),
              ],
            }),
            (0, O.jsx)(eI.cY, {
              color: "primary",
              as: "link",
              to: n,
              className: "w-full",
              children: (0, O.jsx)(en.Z, tq({}, t1.viewGPT)),
            }),
          ],
        });
      }
      function tH(e) {
        var t = e.gizmo,
          n = e.publishedGizmo,
          r = e.promoteGizmo,
          i = e.showActionsModal,
          o = (0, q.useState)({ type: "privacy" }),
          a = o[0],
          s = o[1];
        return (0, O.jsx)("div", {
          className:
            "w-60 rounded-lg border border-token-border-medium bg-token-surface-primary p-4 text-sm",
          children:
            "privacy" === a.type
              ? (0, O.jsx)(tF, {
                  gizmo: t,
                  publishedGizmo: n,
                  promoteGizmo: r,
                  setStep: s,
                  showActionsModal: i,
                })
              : (0, O.jsx)(tW, { publishedGizmo: a.publishedGizmo }),
        });
      }
      function tK(e) {
        var t,
          n = e.gizmo,
          r = e.publishedGizmo,
          i = e.isLoading,
          o = e.isUploadingProfilePic,
          a = e.isGeneratingProfilePic,
          l = e.promoteGizmo,
          c = e.hasUnpublishedChanges,
          u = e.showActionsModal,
          d = null != n ? e4(n) : [],
          p = (0, X.Z)();
        (null == n || i) && d.push(s.Loading),
          o && d.push(s.UploadingProfilePic),
          a && d.push(s.GeneratingProfilePic);
        var f = (0, g.Sg)(n);
        return (0, O.jsxs)(tA.fC, {
          modal: !0,
          children: [
            (0, O.jsx)(tA.xz, {
              asChild: !0,
              children: (0, O.jsx)(eI.cY, {
                color: "primary",
                className: "cursor-pointer whitespace-nowrap",
                disabled: void 0 === n.id,
                tooltip: d.length > 0 ? d.map(e2).join("\n") : void 0,
                children: (0, O.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    c && !f
                      ? p.formatMessage(t1.publishChanges)
                      : p.formatMessage(t1.save),
                    (0, O.jsx)(et.ud, {}),
                  ],
                }),
              }),
            }),
            (0, O.jsx)(tA.h_, {
              children: (0, O.jsx)(tA.VY, {
                side: "bottom",
                align: "end",
                sideOffset: 8,
                children: (0, O.jsx)(tH, {
                  gizmo: n,
                  publishedGizmo: r,
                  promoteGizmo: l,
                  showActionsModal: u,
                }),
              }),
            }),
          ],
        });
      }
      function tJ(e) {
        var t = e.gizmoEditorData,
          n = e.publishedGizmo,
          r = e.revertDraft,
          i = (0, X.Z)(),
          o = (0, q.useState)(!1),
          a = o[0],
          s = o[1],
          l = (0, D.hz)();
        return (null != l && l.includes("debug")) ||
          (null == t ? void 0 : t.id) != null
          ? (0, O.jsxs)(O.Fragment, {
              children: [
                (0, O.jsxs)(eb.fC, {
                  children: [
                    (0, O.jsx)(eb.xz, {
                      asChild: !0,
                      children: (0, O.jsx)(eI.cY, {
                        children: (0, O.jsx)(et.Yr, { className: "icon-md" }),
                      }),
                    }),
                    (0, O.jsx)(eb.Uv, {
                      children: (0, O.jsxs)(eb.VY, {
                        className:
                          "min-w-[180px] max-w-xs rounded-lg border border-gray-100 bg-token-surface-primary shadow-lg dark:border-gray-700",
                        side: "top",
                        align: "end",
                        sideOffset: 6,
                        children: [
                          null != n &&
                            (0, O.jsxs)(eI.UA, {
                              onClick: function () {
                                (0, tU.S)(tB(n));
                              },
                              children: [
                                (0, O.jsx)(et.HN, { className: "icon-md" }),
                                (0, O.jsx)(en.Z, tq({}, t1.copyLink)),
                              ],
                            }),
                          null != r &&
                            (0, O.jsxs)(eI.UA, {
                              onClick: function () {
                                window.confirm(
                                  i.formatMessage(t1.revertConfirm)
                                ) && r();
                              },
                              children: [
                                (0, O.jsx)(et.Nt, { className: "icon-md" }),
                                (0, O.jsx)(en.Z, tq({}, t1.revertMenuItem)),
                              ],
                            }),
                          (null == l ? void 0 : l.includes("debug")) &&
                            (0, O.jsxs)(eI.UA, {
                              onClick: function () {
                                th.vm.toggleActiveSidebar("debug");
                              },
                              children: [
                                (0, O.jsx)(et.WP, { className: "icon-md" }),
                                "Debug (Internal only)",
                              ],
                            }),
                          (null == t ? void 0 : t.id) != null &&
                            (0, O.jsxs)(eI.UA, {
                              color: "danger",
                              onClick: function () {
                                s(!0);
                              },
                              children: [
                                (0, O.jsx)(et.a_, { className: "icon-md" }),
                                (0, O.jsx)(en.Z, tq({}, t1.deleteGPT)),
                              ],
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                a &&
                  (0, O.jsx)(tZ.b, {
                    gizmoId: t.id,
                    onSuccess: function () {
                      Y().back();
                    },
                    onClose: function () {
                      s(!1);
                    },
                  }),
              ],
            })
          : null;
      }
      var tY = I.Z.div(m || (m = (0, C.Z)(["flex items-center gap-1"])));
      function tX(e) {
        var t = e.gizmoEditorData,
          n = (0, L.ec)(function (e) {
            var t;
            return null === (t = e.currentWorkspace) || void 0 === t
              ? void 0
              : t.name;
          });
        switch (t.sharingRecipient) {
          case G.Zz.Private:
            return (0, O.jsxs)(tY, {
              children: [
                (0, O.jsx)(et.LX, { className: "icon-xs" }),
                (0, O.jsx)(en.Z, tq({}, t1.onlyMe)),
              ],
            });
          case G.Zz.Link:
            return (0, O.jsxs)(tY, {
              children: [
                (0, O.jsx)(et.HN, { className: "icon-xs" }),
                (0, O.jsx)(en.Z, tq({}, t1.anyoneWithLink)),
              ],
            });
          case G.Zz.Workspace:
            return (0, O.jsxs)(tY, {
              children: [(0, O.jsx)(et.oq, { className: "icon-xs" }), n],
            });
          case G.Zz.Marketplace:
            return (0, O.jsxs)(tY, {
              children: [
                (0, O.jsx)(et.hk, { className: "icon-xs" }),
                (0, O.jsx)(en.Z, tq({}, t1.public)),
              ],
            });
        }
        return (0, O.jsx)("div", {});
      }
      function tQ(e) {
        var t = e.gizmoEditorData;
        return (0, O.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [
            null != t.profilePictureUrl
              ? (0, O.jsx)(eC.Z, {
                  isFirstParty: !1,
                  src: t.profilePictureUrl,
                  className: "h-8 w-8",
                })
              : (0, O.jsx)("div", {
                  className:
                    "h-8 w-8 rounded-full border-2 border-dashed border-token-border-medium",
                }),
            (0, O.jsxs)("div", {
              children: [
                (0, O.jsx)("div", {
                  className: "text-sm font-medium",
                  children: t.name || (0, O.jsx)(en.Z, tq({}, t1.newGPT)),
                }),
                (0, O.jsx)("div", {
                  className: "text-xs text-token-text-secondary",
                  children: (0, g.Sg)(t)
                    ? (0, O.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, O.jsx)("div", {
                            className:
                              "h-1.5 w-1.5 rounded-full bg-token-text-tertiary",
                          }),
                          (0, O.jsx)(en.Z, tq({}, t1.draft)),
                        ],
                      })
                    : (0, O.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, O.jsx)("div", {
                            className:
                              "h-1.5 w-1.5 rounded-full bg-brand-green",
                          }),
                          (0, O.jsx)(en.Z, tq({}, t1.published)),
                          " \xb7 ",
                          (0, O.jsx)(tX, { gizmoEditorData: t }),
                        ],
                      }),
                }),
              ],
            }),
          ],
        });
      }
      function t$(e) {
        var t = e.category,
          n = e.categories,
          r = e.setCategory;
        return (0, O.jsxs)(tL.fC, {
          value: t,
          onValueChange: function (e) {
            return r(e);
          },
          children: [
            (0, O.jsx)(tL.xz, {
              className:
                "flex justify-between rounded-xl bg-gray-50 p-3 font-medium dark:bg-gray-900",
              children: t
                ? (0, O.jsxs)(O.Fragment, {
                    children: [
                      (0, O.jsx)(tL.B4, {}),
                      (0, O.jsx)(tL.JO, { children: (0, O.jsx)(et.ud, {}) }),
                    ],
                  })
                : (0, O.jsx)("div", {
                    className: "flex w-full justify-center",
                    children: (0, O.jsx)(M.Z, {}),
                  }),
            }),
            (0, O.jsx)(tL.h_, {
              children: (0, O.jsx)(tL.VY, {
                className:
                  "h-64 w-[var(--radix-select-trigger-width)] rounded-xl border bg-white p-1 py-2 dark:border-gray-600 dark:bg-gray-800",
                position: "popper",
                sideOffset: 2,
                children: (0, O.jsx)("div", {
                  className: "overflow-y-auto",
                  children: n.map(function (e) {
                    return (0, O.jsxs)(
                      tL.ck,
                      {
                        className:
                          "flex w-full cursor-pointer justify-between rounded-lg p-2 pl-4 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700",
                        value: e.id,
                        children: [
                          (0, O.jsx)(tL.eT, { children: e.title }),
                          (0, O.jsx)(tL.wU, {
                            className: "text-green-600",
                            children: (0, O.jsx)(et.oS, {}),
                          }),
                        ],
                      },
                      e.id
                    );
                  }),
                }),
              }),
            }),
          ],
        });
      }
      function t0(e) {
        var t = e.gizmoEditorData,
          n = e.isLoading,
          r = e.isUploadingProfilePic,
          i = e.isGeneratingProfilePic,
          o = e.publishedGizmo,
          a = e.promoteGizmo,
          s = e.revertDraft,
          l = e.draftMessage,
          c = e.className,
          u = e.hasUnpublishedChanges,
          d = e.showActionsModal;
        return (0, O.jsxs)("div", {
          className: (0, H.default)(
            "relative flex h-14 w-full items-center justify-between gap-2 border-b border-token-border-medium px-3",
            c
          ),
          children: [
            (0, O.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, O.jsx)("a", {
                  className: "cursor-pointer text-token-text-primary",
                  onClick: function () {
                    return Y().back();
                  },
                  children: (0, O.jsx)(et.L7, { className: "icon-lg" }),
                }),
                (0, O.jsx)(tQ, { gizmoEditorData: t }),
              ],
            }),
            (0, O.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                l,
                (0, O.jsx)(tJ, {
                  gizmoEditorData: t,
                  publishedGizmo: o,
                  revertDraft: s,
                }),
                (0, O.jsx)(tK, {
                  gizmo: t,
                  publishedGizmo: o,
                  isLoading: n,
                  isUploadingProfilePic: r,
                  isGeneratingProfilePic: i,
                  promoteGizmo: a,
                  hasUnpublishedChanges: u,
                  showActionsModal: d,
                }),
              ],
            }),
          ],
        });
      }
      var t1 = (0, ep.vU)({
        privacyConfirm: {
          id: "gizmo.confirmPublish",
          defaultMessage: "Confirm",
        },
        workspaceDisabledHint: {
          id: "gizmo.workspaceDisabledHint",
          defaultMessage:
            "Your workspace administrator has disabled this setting",
        },
        publicSharingHint: {
          id: "gizmo.publicSharingHint",
          defaultMessage: "This GPT may appear in the GPT Store (coming soon)",
        },
        displayNameRequiredHint: {
          id: "gizmo.displayNameRequiredHint",
          defaultMessage:
            "To make your GPT public, set up your builder profile.",
        },
        save: { id: "gizmo.save", defaultMessage: "Save" },
        publishChanges: {
          id: "gizmo.publishChanges",
          defaultMessage: "Update",
        },
        deleteGPT: { id: "gizmo.delete", defaultMessage: "Delete GPT" },
        actionNeedsPrivacyPolicyURL: {
          id: "gizmo.actionNeedsPrivacyPolicyURL",
          defaultMessage:
            "Public actions require valid privacy policy URLs. Click <fixlink>here</fixlink> to update.",
        },
        publishTo: { id: "gizmo.publishTo", defaultMessage: "Publish to" },
        publishedTitle: {
          id: "gizmo.publishedTitle",
          defaultMessage: "Published!",
        },
        viewGPT: { id: "gizmo.viewGPT", defaultMessage: "View GPT" },
        revertMenuItem: {
          id: "gizmo.revertMenuItem",
          defaultMessage: "Revert...",
        },
        onlyMe: { id: "gizmo.onlyMe", defaultMessage: "Only me" },
        anyoneWithLink: {
          id: "gizmo.anyoneWithLink",
          defaultMessage: "Anyone with a link",
        },
        public: { id: "gizmo.public", defaultMessage: "Public" },
        newGPT: { id: "gizmo.newGPT", defaultMessage: "New GPT" },
        draft: { id: "gizmo.draft", defaultMessage: "Draft" },
        published: { id: "gizmo.published", defaultMessage: "Published" },
        revertConfirm: {
          id: "gizmo.revertConfirm",
          defaultMessage:
            "Are you sure you want to revert to the last saved version?",
        },
        copyLink: { id: "gizmo.copyLink", defaultMessage: "Copy link" },
        categoryLabel: {
          id: "gizmo.categoryLabel",
          defaultMessage: "Category",
        },
        categoryLabelTooltip: {
          id: "gizmo.categoryLabelTooltip",
          defaultMessage: "Your GPT may appear in this category on Explore",
        },
        categoryError: {
          id: "gizmo.categoryError",
          defaultMessage: "Error generating category",
        },
      });
      function t2(e, t) {
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
      function t4(e) {
        var t = (function (e, t) {
          var n = e.response,
            r = (0, U.Ot)(e);
          if (!Array.isArray(n)) return r;
          var i = (0, K.compact)(
            n.map(function (e) {
              if ("value_error.any_str.max_length" === e.type)
                switch (e.loc[1]) {
                  case "display":
                    switch (e.loc[2]) {
                      case "name":
                        return t.formatMessage(ts.nameTooLong, {
                          length: e.ctx.limit_value,
                        });
                      case "description":
                        return t.formatMessage(ts.descriptionTooLong, {
                          length: e.ctx.limit_value,
                        });
                      case "welcome_message":
                        return t.formatMessage(ts.welcomeMessageTooLong, {
                          length: e.ctx.limit_value,
                        });
                    }
                    break;
                  case "instructions":
                    return t.formatMessage(ts.instructionsTooLong, {
                      length: e.ctx.limit_value,
                    });
                }
              if ("string" == typeof e.msg) return e.msg;
            })
          );
          return i.length > 0 ? i.join("\n") : r;
        })(e.upsertDraftError, (0, X.Z)());
        return (0, O.jsxs)("div", {
          className: "flex items-center gap-2 text-red-500",
          children: [
            (0, O.jsx)("div", {
              children: (0, O.jsx)(
                en.Z,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? t2(Object(n), !0).forEach(function (t) {
                          (0, b.Z)(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : t2(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                })({}, t5.errorSavingDraft)
              ),
            }),
            null != t &&
              (0, O.jsx)(ev.u, {
                label: t,
                children: (0, O.jsx)(ej.H33, { className: "icon-sm" }),
              }),
          ],
        });
      }
      function t3(e) {
        var t = e.isSavingDraft,
          n = e.hasUnpublishedChanges,
          r = e.upsertDraftError,
          i = e.className;
        return r instanceof U.Q0
          ? (0, O.jsx)(t4, { upsertDraftError: r })
          : n
            ? (0, O.jsxs)("div", {
                className: (0, H.default)("flex items-center gap-2", i),
                children: [
                  (0, O.jsx)("span", {
                    className: "text-token-text-secondary",
                    children: "Unpublished changes",
                  }),
                  (0, O.jsx)("div", {
                    className: "w-4 text-token-text-tertiary",
                    children: t && (0, O.jsx)(M.Z, {}),
                  }),
                ],
              })
            : null;
      }
      var t5 = (0, ep.vU)({
          errorSavingDraft: {
            id: "gizmo.errorSavingDraft",
            defaultMessage: "Error saving draft",
          },
        }),
        t8 = n(86178);
      function t9(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return t6(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n)
                )
                  return Array.from(e);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return t6(e, t);
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          a = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (s = !0), (o = e);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function t6(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function t7(e, t) {
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
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? t7(Object(n), !0).forEach(function (t) {
                (0, b.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : t7(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function nt() {
        return (nt = (0, v.Z)(
          j().mark(function e(t) {
            var n, r, i, o, a, s, l, c, u;
            return j().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    r = t9(t);
                    try {
                      for (r.s(); !(i = r.n()).done; )
                        if (
                          ((o = i.value),
                          "gizmo_editor.generate_profile_pic" ===
                            o.author.name &&
                            "multimodal_text" === o.content.content_type)
                        ) {
                          a = t9(o.content.parts);
                          try {
                            for (a.s(); !(s = a.n()).done; )
                              (l = s.value),
                                "object" == typeof l &&
                                  "asset_pointer" in l &&
                                  (n = l);
                          } catch (e) {
                            a.e(e);
                          } finally {
                            a.f();
                          }
                        }
                    } catch (e) {
                      r.e(e);
                    } finally {
                      r.f();
                    }
                    if (!(null != n)) {
                      e.next = 9;
                      break;
                    }
                    return (
                      (c = (0, ez.Iy)(n.asset_pointer)),
                      (e.next = 6),
                      eD.ZP.getFileDownloadLink(c)
                    );
                  case 6:
                    if ((u = e.sent).status !== w.KF.Success) {
                      e.next = 9;
                      break;
                    }
                    return e.abrupt("return", {
                      id: c,
                      permalink: u.download_url,
                    });
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function nn() {
        return (nn = (0, v.Z)(
          j().mark(function e(t, n, r) {
            var i, o, a, s, l, c, u, d, p, f, m, h, g;
            return j().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (s = (a = (function (e, t) {
                          for (
                            var n = A.tQ.getThreadCurrentLeafId(e),
                              r = A.tQ.getTree(e),
                              i = [],
                              o = r.getNodeByIdOrMessageId(n);
                            null != o && (null == t || o.id !== t);
                          )
                            i.unshift(o.message),
                              (o =
                                "" !== o.parentId
                                  ? r.getNodeByIdOrMessageId(o.parentId)
                                  : void 0);
                          return i;
                        })(n, r))
                          .filter(function (e) {
                            return (
                              "gizmo_editor.update_behavior" === e.recipient
                            );
                          })
                          .flatMap(function (e) {
                            return "text" === e.content.content_type
                              ? e.content.parts
                              : "code" === e.content.content_type
                                ? [e.content.text]
                                : [];
                          })
                          .map(function (e) {
                            return JSON.parse(e);
                          })
                          .reduce(function (e, t) {
                            return ne(ne({}, e), t);
                          }, {})),
                        (e.next = 4),
                        (function (e) {
                          return nt.apply(this, arguments);
                        })(a)
                      );
                    case 4:
                      if (((l = e.sent), !((0, K.isEmpty)(s) && null == l))) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return");
                    case 7:
                      if (
                        ((c = s.name),
                        (u = s.context),
                        (d = s.description),
                        (p = s.welcome_message),
                        (f = s.profile_pic_file_id),
                        (m = s.prompt_starters),
                        !(null != f))
                      ) {
                        e.next = 20;
                        break;
                      }
                      return (
                        (e.prev = 9),
                        (e.next = 12),
                        eD.ZP.getFileDownloadLink(f, t.id)
                      );
                    case 12:
                      (h = e.sent).status === w.KF.Success &&
                        (l = { id: f, permalink: h.download_url }),
                        (e.next = 20);
                      break;
                    case 16:
                      (e.prev = 16),
                        (e.t0 = e.catch(9)),
                        console.error(
                          "Error while retrieving profile pic in update: ".concat(
                            e.t0
                          )
                        ),
                        E.m.warning(
                          "Something went wrong updating your GPT's profile picture.",
                          { duration: 3 }
                        );
                    case 20:
                      return (
                        (g = {
                          name: "string" == typeof c ? c : void 0,
                          description: "string" == typeof d ? d : void 0,
                          instructions: "string" == typeof u ? u : void 0,
                          welcomeMessage: "string" == typeof p ? p : void 0,
                          promptStarters: Array.isArray(m) ? m : void 0,
                          profilePictureId:
                            null === (i = l) || void 0 === i ? void 0 : i.id,
                          profilePictureUrl:
                            null === (o = l) || void 0 === o
                              ? void 0
                              : o.permalink,
                        }),
                        e.abrupt(
                          "return",
                          (0, K.pickBy)(g, function (e) {
                            return null != e;
                          })
                        )
                      );
                    case 22:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[9, 16]]
            );
          })
        )).apply(this, arguments);
      }
      function nr(e, t, n, r) {
        var i,
          o,
          a,
          s,
          l,
          c,
          u,
          d,
          p,
          f,
          m,
          h,
          g,
          v,
          x = n.current,
          b = r.current;
        if (!(0, K.isEqual)(x, b)) {
          var y = {};
          x.name !== (null == b ? void 0 : b.name) && (y.name = x.name),
            (null !== (i = x.description) && void 0 !== i ? i : "") !==
              (null !== (o = null == b ? void 0 : b.description) && void 0 !== o
                ? o
                : "") &&
              (y.description =
                null !== (h = x.description) && void 0 !== h ? h : ""),
            x.instructions !==
              (null !== (a = null == b ? void 0 : b.instructions) &&
              void 0 !== a
                ? a
                : "") &&
              (y.context =
                null !== (g = x.instructions) && void 0 !== g ? g : ""),
            (null !== (s = x.welcomeMessage) && void 0 !== s ? s : "") !==
              (null !== (l = null == b ? void 0 : b.welcomeMessage) &&
              void 0 !== l
                ? l
                : "") &&
              (y.welcome_message =
                null !== (v = x.welcomeMessage) && void 0 !== v ? v : "");
          var j = new Set(
              null !==
                (c =
                  null == b
                    ? void 0
                    : null === (u = b.files) || void 0 === u
                      ? void 0
                      : u.map(function (e) {
                          return e.file_id;
                        })) && void 0 !== c
                ? c
                : []
            ),
            w = new Set(
              null !==
                (d =
                  null === (p = x.files) || void 0 === p
                    ? void 0
                    : p.map(function (e) {
                        return e.file_id;
                      })) && void 0 !== d
                ? d
                : []
            ),
            P = (null !== (f = x.files) && void 0 !== f ? f : []).filter(
              function (e) {
                return !j.has(e.file_id);
              }
            ),
            k = (
              null !== (m = null == b ? void 0 : b.files) && void 0 !== m
                ? m
                : []
            ).filter(function (e) {
              return !w.has(e.file_id);
            });
          if (!(0, K.isEmpty)(y) || 0 !== P.length || 0 !== k.length) {
            var N = [];
            if (!(0, K.isEmpty)(y)) {
              var T =
                "Explicitly update the GPT's behavior to the following exact fields:\n\n    ".concat(
                  JSON.stringify(y, null, 2),
                  '\n\n    "Do not call update_behavior yet. Instead, use these updated fields as the GPT\'s current behavior, and in the next call to update_behavior, incorporate these changes."\n    '
                );
              N.push(t8.Cv.getTextAsMessage(T, $.uU.System));
            }
            k.length > 0 &&
              N.push(
                t8.Cv.getTextAsMessage(
                  "The user has removed the following files from the GPT. You can no longer reference these files: ".concat(
                    k
                      .map(function (e) {
                        return e.file_id;
                      })
                      .join(", ")
                  ),
                  $.uU.System
                )
              ),
              P.length > 0 &&
                N.push(
                  t8.Cv.getTextAsMessage(
                    "The user is adding these files to the GPT. The GPT may reference these files. The file IDs are: ".concat(
                      P.map(function (e) {
                        return e.file_id;
                      }).join(", ")
                    ),
                    $.uU.System,
                    {
                      attachments: P.map(function (e) {
                        return { id: e.file_id, name: e.name, size: e.size };
                      }),
                    }
                  )
                ),
              N.length > 0 &&
                A.tQ.updateTree(e, function (e) {
                  var n,
                    r = e.getNodeByIdOrMessageId(t).parentId,
                    i = t9(N);
                  try {
                    for (i.s(); !(n = i.n()).done; ) {
                      var o = n.value,
                        a = (0, tb.Z)();
                      e.insertNodeBefore(t, {
                        id: a,
                        children: [],
                        parentId: r,
                        message: o,
                        metadata: { isClientCreatedSystemMessage: !0 },
                      }),
                        (r = a);
                    }
                  } catch (e) {
                    i.e(e);
                  } finally {
                    i.f();
                  }
                });
          }
        }
      }
      var ni = n(14402);
      function no(e, t) {
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
      function na(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? no(Object(n), !0).forEach(function (t) {
                (0, b.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : no(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var ns = q.memo(function (e) {
        var t = e.gizmoEditorData,
          n = e.updateGizmo,
          r = e.clientThreadId,
          i = e.completionCallbackResponse,
          o = e.gizmoEditorDataRef,
          a = e.magicMakerBehaviorOverrides,
          s = e.magicMakerConversationGizmoEditorDataRef,
          l = e.requireGizmoId;
        (0, A.ax)(r);
        var c = (0, A.UL)(r),
          u = null == t.id,
          d =
            null != t.id &&
            "" !== t.name &&
            null != t.description &&
            "" !== t.instructions &&
            null != t.profilePictureUrl,
          p = (0, q.useState)(
            u
              ? 'Hi! I\'ll help you build a new GPT. You can say something like, "make a creative who helps generate visuals for new products" or "make a software engineer who helps format my code."\n\nWhat would you like to make?'
              : d
                ? "Welcome back! Is there anything ".concat(
                    t.name,
                    " should be doing better? Anything you'd like to change?"
                  )
                : "You're back! Let's continue where we left off..."
          )[0];
        (0, q.useEffect)(
          function () {
            A.tQ.getOrInitThread(r);
            var e = A.tQ.getTree(r);
            if (
              !e.findNode(function (e) {
                var t;
                return (
                  e.message.author.role === $.uU.User ||
                  (null === (t = e.metadata) || void 0 === t
                    ? void 0
                    : t.isClientCreatedSystemMessage) === !0
                );
              }) &&
              (A.tQ.deleteNodesByFilter(r, function (e) {
                var t;
                return (
                  (null === (t = e.metadata) || void 0 === t
                    ? void 0
                    : t.isPlaceholderTemplateAssistantWelcomeMessage) === !0
                );
              }),
              null != p && 0 !== p.length)
            ) {
              var t = A.tQ.getThreadCurrentLeafId(r);
              if (e.hasNodeOrMessageId(t)) {
                var n = (0, tb.Z)();
                A.tQ.updateTree(r, function (e) {
                  e.addNode(n, p, t, $.uU.Assistant, {
                    isPlaceholderTemplateAssistantWelcomeMessage: !0,
                  });
                }),
                  A.tQ.setThreadCurrentLeafId(r, n);
              }
            }
          },
          [r, p]
        ),
          (0, q.useEffect)(
            function () {
              (0, A.Zz)(r) &&
                A.iN.hasThread(r) &&
                c.lastModelUsed !== eE.Mw &&
                (A.tQ.getOrInitThread(r),
                A.tQ.updateInitialThreadDataForNewThread(r, eE.Mw, []));
            },
            [r, c, c.lastModelUsed]
          );
        var f = (0, q.useMemo)(
            function () {
              return {
                gizmoEditorData: t,
                gizmoId: t.id,
                mode: "magic",
                behaviorOverrides: a,
                getGizmoId: l,
              };
            },
            [l, t, a]
          ),
          m = (0, ni.gF)(function (e) {
            return e.files.filter(function (e) {
              return e.status === eT.X.Ready && null != e.gizmoId;
            });
          }),
          h = (0, q.useCallback)(
            function (e, t) {
              !(function (e, t, n) {
                if (0 !== n.length) {
                  var r = (0, tb.Z)(),
                    i =
                      "The user is uploading files in their next message. If you need to reference these in calls to update_behavior, you will use the following File ID(s), in order: ".concat(
                        n
                          .map(function (e) {
                            return '"'.concat(e.fileId, '"');
                          })
                          .join(", ")
                      );
                  A.tQ.updateTree(e, function (e) {
                    var n = e.getNodeByIdOrMessageId(t).parentId;
                    e.insertNodeBefore(t, {
                      id: r,
                      children: [],
                      parentId: n,
                      message: t8.Cv.getTextAsMessage(i, $.uU.System),
                      metadata: { isClientCreatedSystemMessage: !0 },
                    });
                  });
                }
              })(e, t, m),
                nr(e, t, o, s),
                (function (e, t) {
                  for (
                    var n =
                        "Remember, you should be calling either update_behavior or generate_profile_pic after most messages from the user. Your personality should be neutral and separate from the GPT you are creating.",
                      r = A.tQ.getThreadCurrentLeafId(e),
                      i = A.tQ.getTree(e),
                      o = i.getNodeByIdOrMessageId(r);
                    null != o && o.message.author.role !== $.uU.User;
                  ) {
                    if (
                      "text" === o.message.content.content_type &&
                      o.message.content.parts[0] === n
                    )
                      return;
                    o =
                      "" !== o.parentId
                        ? i.getNodeByIdOrMessageId(o.parentId)
                        : void 0;
                  }
                  A.tQ.updateTree(e, function (e) {
                    var r = e.getNodeByIdOrMessageId(t).parentId;
                    e.insertNodeBefore(t, {
                      id: (0, tb.Z)(),
                      children: [],
                      parentId: r,
                      message: t8.Cv.getTextAsMessage(n, $.uU.System, {
                        exclude_after_next_user_message: !0,
                      }),
                      metadata: { isClientCreatedSystemMessage: !0 },
                    });
                  });
                })(e, t),
                n(function (e) {
                  var t;
                  return na(
                    na({}, e),
                    {},
                    {
                      files: [].concat(
                        (0, x.Z)(
                          null !== (t = e.files) && void 0 !== t ? t : []
                        ),
                        (0, x.Z)(
                          (0, K.compact)(
                            m.map(function (e) {
                              var t;
                              return (
                                null != e.fileId && {
                                  file_id: e.fileId,
                                  name: e.file.name,
                                  size: e.file.size,
                                  type: e.file.type,
                                  last_modified: e.file.lastModified,
                                  file_size_tokens:
                                    null === (t = e.fileSpec) || void 0 === t
                                      ? void 0
                                      : t.fileTokenSize,
                                }
                              );
                            })
                          )
                        )
                      ),
                    }
                  );
                }),
                (s.current = (0, K.cloneDeep)(o.current));
            },
            [o, s, m, n]
          ),
          g = (0, th.tN)(function (e) {
            return e.activeSidebar;
          });
        return (0, O.jsx)(tj.D.Provider, {
          value: f,
          children: (0, O.jsxs)("div", {
            className: "relative flex h-full grow overflow-auto",
            children: [
              (0, O.jsx)("div", {
                className: "grow",
                children: (0, O.jsx)(tf.Z, {
                  initialThreadData: c,
                  clientThreadId: r,
                  onCompletionFinished: i,
                  preRequestCompletion: h,
                  hideHeader: !0,
                  prependThreadChildren: (0, O.jsx)("div", {
                    className: "h-8",
                  }),
                }),
              }),
              "debug" === g &&
                (0, O.jsx)(tp.fv, {
                  clientThreadId: r,
                  slideOver: !1,
                  onClose: function () {
                    return th.vm.toggleActiveSidebar("debug");
                  },
                  isOpen: !0,
                }),
            ],
          }),
        });
      });
      function nl(e, t) {
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
      function nc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? nl(Object(n), !0).forEach(function (t) {
                (0, b.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : nl(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function nu(e) {
        var t = e.value,
          n = e.label;
        return (0, O.jsx)(F.ck, {
          value: t,
          className:
            "text-md w-1/3 flex-grow rounded-lg border-token-border-light p-1.5 font-medium text-token-text-tertiary transition hover:text-token-text-primary radix-state-checked:border radix-state-checked:bg-token-surface-primary radix-state-checked:text-token-text-primary radix-state-checked:shadow-[0_0_2px_rgba(0,0,0,.03)] radix-state-checked:dark:bg-token-surface-secondary md:w-1/2",
          children: n,
        });
      }
      function nd(e) {
        var t = e.className,
          n = e.editorTab,
          r = e.setEditorTab;
        return (0, O.jsxs)(F.fC, {
          className: (0, H.default)(
            "flex w-full overflow-hidden rounded-xl bg-token-surface-secondary p-1.5 dark:bg-token-surface-tertiary md:w-1/2",
            t
          ),
          value: n,
          onValueChange: function (e) {
            r(e);
          },
          children: [
            (0, O.jsx)(nu, { value: h.MAGIC_MAKER, label: "Create" }),
            (0, O.jsx)(nu, { value: h.ADVANCED, label: "Configure" }),
            (0, O.jsx)("div", {
              className: "flex w-1/3 md:hidden",
              children: (0, O.jsx)(nu, { value: h.PREVIEW, label: "Preview" }),
            }),
          ],
        });
      }
      ((o = h || (h = {})).MAGIC_MAKER = "magic"),
        (o.ADVANCED = "advanced"),
        (o.PREVIEW = "preview");
      var np = {
          id: void 0,
          instructions: "",
          name: "",
          description: "",
          profilePictureId: void 0,
          profilePictureUrl: void 0,
          welcomeMessage: "",
          promptStarters: [],
          tools: [{ type: w.qK.DALLE }],
          files: [],
          trainingDisabled: !1,
          liveVersion: 0,
        },
        nf = nc(
          nc({}, np),
          {},
          { tools: [].concat((0, x.Z)(np.tools), [{ type: w.qK.BROWSER }]) }
        );
      function nm(e) {
        var t, n, r, i, o, a;
        return {
          id: e.gizmo.id,
          instructions: e.gizmo.instructions,
          name: e.gizmo.display.name,
          description:
            null !== (t = e.gizmo.display.description) && void 0 !== t ? t : "",
          profilePictureId: void 0,
          profilePictureUrl:
            null !== (n = e.gizmo.display.profile_picture_url) && void 0 !== n
              ? n
              : void 0,
          welcomeMessage:
            null !== (r = e.gizmo.display.welcome_message) && void 0 !== r
              ? r
              : "",
          promptStarters:
            null !== (i = e.gizmo.display.prompt_starters) && void 0 !== i
              ? i
              : [],
          tools: e.tools,
          files: e.files,
          trainingDisabled:
            null !== (o = e.gizmo.training_disabled) && void 0 !== o && o,
          sharingRecipient: e.gizmo.share_recipient,
          allowedSharingRecipients: e.gizmo.allowed_sharing_recipients,
          liveVersion:
            null !== (a = e.gizmo.live_version) && void 0 !== a ? a : 0,
        };
      }
      var nh = function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          l,
          c,
          u,
          d,
          p,
          f = e.gizmo,
          m = e.onNewGizmoId,
          x = (0, P.C)(Z.L0.BrowseAvailable),
          b = (0, X.Z)(),
          y = (0, q.useRef)(null != f ? nm(f) : x ? nf : np),
          w = (0, q.useRef)(f),
          k = (0, q.useRef)(y.current),
          N = (0, q.useState)(function () {
            return y.current;
          }),
          T = N[0],
          C = N[1],
          I = (0, q.useState)(function () {
            return (0, A.OX)();
          }),
          _ = I[0];
        I[1];
        var M = (0, g.kg)(y.current.id).data,
          L = (0, g.N_)(),
          R = L.isPending,
          V = L.error,
          F = (0, g.ZJ)(),
          J = (0, q.useMemo)(
            function () {
              var e, t, n, r, i, o;
              return (
                null != M &&
                (!(
                  T.name === M.gizmo.display.name &&
                  T.description === M.gizmo.display.description &&
                  T.welcomeMessage === M.gizmo.display.welcome_message &&
                  T.instructions === M.gizmo.instructions &&
                  ((i = T.tools),
                  (o = M.tools),
                  i.length === o.length &&
                    i.every(function (e) {
                      return o.some(function (t) {
                        return t.type === e.type;
                      });
                    })) &&
                  (0, K.isEqual)(
                    null !==
                      (e =
                        null === (t = T.files) || void 0 === t
                          ? void 0
                          : t.map(function (e) {
                              return e.file_id;
                            })) && void 0 !== e
                      ? e
                      : [],
                    null !==
                      (n =
                        null === (r = M.files) || void 0 === r
                          ? void 0
                          : r.map(function (e) {
                              return e.file_id;
                            })) && void 0 !== n
                      ? n
                      : []
                  )
                ) ||
                  T.profilePictureUrl != M.gizmo.display.profile_picture_url)
              );
            },
            [T, M]
          ),
          Y =
            (null == f
              ? void 0
              : null === (p = f.gizmo.appeal_info) || void 0 === p
                ? void 0
                : p.state.kind) === "appeal_sent",
          Q =
            ((t = (0, v.Z)(
              j().mark(function e() {
                var t, n, r, i, o;
                return j().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = y.current),
                            (e.prev = 1),
                            (e.next = 4),
                            L.mutateAsync({ editorData: t, gizmoId: t.id })
                          );
                        case 4:
                          return (
                            (n = e.sent),
                            (w.current = n),
                            null == y.current.id &&
                              ((r = n.gizmo.id),
                              (y.current = nc(
                                nc({}, y.current),
                                {},
                                {
                                  id: r,
                                  allowedSharingRecipients:
                                    n.gizmo.allowed_sharing_recipients,
                                }
                              )),
                              C(y.current),
                              null == m || m(r)),
                            e.abrupt("return", n)
                          );
                        case 10:
                          throw (
                            ((e.prev = 10),
                            (e.t0 = e.catch(1)),
                            (o =
                              null !== (i = (0, U.Ot)(e.t0)) && void 0 !== i
                                ? i
                                : b.formatMessage(t5.errorSavingDraft)),
                            E.m.warning(o, { duration: 2 }),
                            e.t0)
                          );
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 10]]
                );
              })
            )),
            function () {
              return t.apply(this, arguments);
            }),
          ee = (0, q.useRef)(),
          et =
            ((n = (0, v.Z)(
              j().mark(function e() {
                return j().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!(null != y.current.id)) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return", y.current.id);
                      case 2:
                        return (
                          null == ee.current &&
                            (ee.current = Q()
                              .then(function (e) {
                                return e.gizmo.id;
                              })
                              .catch(function (e) {
                                throw ((ee.current = void 0), e);
                              })),
                          e.abrupt("return", ee.current)
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function () {
              return n.apply(this, arguments);
            }),
          en = (0, q.useState)(function () {
            return (0, K.debounce)(
              function () {
                return Q();
              },
              2e3,
              { trailing: !0 }
            );
          })[0];
        function er(e) {
          var t,
            n,
            r =
              "function" == typeof e
                ? e(y.current)
                : ((t = y.current),
                  null == (n = e)
                    ? t
                    : ((n = (function e(t) {
                        return "object" == typeof t && null != t
                          ? Array.isArray(t)
                            ? t.map(e)
                            : Object.fromEntries(
                                Object.entries(t).map(function (t) {
                                  var n = (0, eU.Z)(t, 2);
                                  return [n[0], e(n[1])];
                                })
                              )
                          : null === t
                            ? void 0
                            : t;
                      })(n)),
                      e1(e1({}, t), n)));
          (0, K.isEqual)(r, y.current) || ((y.current = r), C(y.current), en());
        }
        var ei = (0, q.useState)(function () {
            return {
              context_message: (function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a = new Set(),
                  s = t9(e.tools);
                try {
                  for (s.s(); !(o = s.n()).done; ) {
                    var l = o.value;
                    a.add(l.type);
                  }
                } catch (e) {
                  s.e(e);
                } finally {
                  s.f();
                }
                var c = null !== (t = e.name) && void 0 !== t ? t : "",
                  u = null !== (n = e.description) && void 0 !== n ? n : "",
                  d = null !== (r = e.instructions) && void 0 !== r ? r : "",
                  p = Array.from(a).join(","),
                  f = null !== (i = e.welcomeMessage) && void 0 !== i ? i : "",
                  m = null != e.profilePictureUrl;
                return "" === c && "" === u && "" === d && "" === f
                  ? "The GPT you are about to has the following abilities: ".concat(
                      p,
                      "."
                    )
                  : "This is the GPT's current set of fields:\n\nname: "
                      .concat(c, "\n\ndescription: ")
                      .concat(u, "\n\ncontext: ")
                      .concat(d, "\n\nabilities: ")
                      .concat(p, "\n\nwelcome_message: ")
                      .concat(f, "\n\n")
                      .concat(
                        m
                          ? "The GPT has a profile picture."
                          : "This GPT does not have a profile picture. You must generate a profile picture when you next update your behavior.",
                        "\n"
                      );
              })(y.current),
              model_slug: "unused",
              enabled_tools: [
                { tool_id: null != f ? "gizmo_editor" : "gizmo_creator" },
              ],
            };
          })[0],
          eo = (0, q.useRef)(),
          ea =
            ((r = (0, v.Z)(
              j().mark(function e(t) {
                var n;
                return j().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (null != t) {
                            e.next = 3;
                            break;
                          }
                          return ez(!1), e.abrupt("return");
                        case 3:
                          return (
                            (e.prev = 3),
                            (e.next = 6),
                            (function (e, t, n) {
                              return nn.apply(this, arguments);
                            })(y.current, t, eo.current)
                          );
                        case 6:
                          null != (n = e.sent) &&
                            (er(n), (k.current = (0, K.cloneDeep)(y.current))),
                            (e.next = 14);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(3)),
                            console.error(e.t0),
                            E.m.warning(
                              "Something went wrong generating your GPT",
                              { duration: 3 }
                            );
                        case 14:
                          return (
                            (e.prev = 14),
                            (eo.current = A.tQ.getThreadCurrentLeafId(t)),
                            ez(!1),
                            e.finish(14)
                          );
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 10, 14, 18]]
                );
              })
            )),
            function (e) {
              return r.apply(this, arguments);
            }),
          es =
            ((i = (0, ty.Z)(_, void 0, K.noop, K.noop, ea, [])),
            (o = (0, D.hz)()),
            (a = (0, v.Z)(
              j().mark(function e(t, n, r) {
                var a, s, l, c, u, d, p, f, m;
                return j().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (0 !== r.length) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        (a = A.tQ.getThreadCurrentLeafId(_)), (s = t9(r));
                        try {
                          for (
                            c = function () {
                              var e = l.value,
                                t = (0, tb.Z)();
                              A.tQ.updateTree(_, function (n) {
                                n.addNodeToEnd(a, {
                                  id: t,
                                  children: [],
                                  parentId: a,
                                  message: t8.Cv.getTextAsMessage(
                                    e,
                                    $.uU.System
                                  ),
                                  metadata: {
                                    isClientCreatedSystemMessage: !0,
                                  },
                                });
                              }),
                                A.tQ.setThreadCurrentLeafId(_, t),
                                (a = t);
                            },
                              s.s();
                            !(l = s.n()).done;
                          )
                            c();
                        } catch (e) {
                          s.e(e);
                        } finally {
                          s.f();
                        }
                        if (
                          ((u = a),
                          nr(_, u, t, n),
                          (d = {
                            conversationMode: {
                              kind: $.OL.GizmoMagicCreate,
                              gizmo_id: t.current.id,
                              behavior_overrides: ei,
                            },
                          }),
                          (p = [eE.S.GPT_4]),
                          (f = (0, tx.Rr)(o, p, $.OL.GizmoMagicCreate)),
                          (m = null),
                          !f)
                        ) {
                          e.next = 15;
                          break;
                        }
                        return (e.next = 14), tx.ZP.getEnforcementToken(p);
                      case 14:
                        m = e.sent;
                      case 15:
                        i({
                          model: eE.Mw,
                          completionType: $.Os.Next,
                          parentNodeId: u,
                          metadata: {},
                          focusOnNewCompletion: !0,
                          arkoseToken: m,
                          preflightTime: 0,
                          completionMetadata: d,
                          extraStreamParams: {},
                        });
                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e, t, n) {
              return a.apply(this, arguments);
            }),
          el = (0, q.useState)(!1),
          ec = el[0],
          eu = el[1],
          ed = (0, q.useState)(!1),
          ep = ed[0],
          ef = ed[1],
          em = (0, q.useState)(void 0),
          eh = em[0],
          eg = em[1],
          ev =
            ((s = (0, v.Z)(
              j().mark(function e(t, n) {
                var r, i, o, a;
                return j().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!((r = e4(y.current, t, n)).length > 0)) {
                            e.next = 4;
                            break;
                          }
                          return (
                            E.m.warning(
                              "Could not save GPT:\n\n".concat(
                                r
                                  .map(function (e) {
                                    return "- ".concat(e2(e));
                                  })
                                  .join("\n")
                              ),
                              { duration: 3 }
                            ),
                            e.abrupt("return")
                          );
                        case 4:
                          return (e.next = 6), Q();
                        case 6:
                          return (
                            (o = (i = e.sent).gizmo.id),
                            (e.prev = 8),
                            eg({ gizmoId: o, sharingRecipient: t }),
                            (e.next = 12),
                            F.mutateAsync(
                              {
                                gizmoId: i.gizmo.id,
                                data: {
                                  sharingRecipient: t,
                                  categories: null == n ? void 0 : [n],
                                },
                              },
                              {
                                onSuccess: function (e) {
                                  W.E.setQueryData((0, g.Vw)(o).queryKey, e),
                                    W.E.invalidateQueries({
                                      queryKey: ["gizmos"],
                                    }),
                                    W.E.invalidateQueries({
                                      queryKey: ["gizmo", { gizmoId: o }],
                                    }),
                                    W.E.invalidateQueries({
                                      queryKey: [
                                        "gizmo",
                                        "userActionSettings",
                                        { gizmoId: o },
                                      ],
                                    });
                                },
                              }
                            )
                          );
                        case 12:
                          return (a = e.sent), e.abrupt("return", a);
                        case 16:
                          (e.prev = 16),
                            (e.t0 = e.catch(8)),
                            e.t0 instanceof G.DC
                              ? (eu(!!e.t0.response.is_flagged_brand_name),
                                ef(!0))
                              : (console.error(e.t0),
                                E.m.warning("Error saving GPT", {
                                  duration: 2,
                                }));
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[8, 16]]
                );
              })
            )),
            function (e, t) {
              return s.apply(this, arguments);
            }),
          ex = L.isPending || F.isPending,
          eb = (0, q.useState)(function () {
            var e = B.m.getItem(B.F.GizmoEditorTab);
            return e in h ? e : h.MAGIC_MAKER;
          }),
          ey = eb[0],
          ej = eb[1],
          ew = ((c = (l = (0, q.useState)({ width: null, height: null }))[0]),
          (u = l[1]),
          (0, q.useLayoutEffect)(function () {
            var e = function () {
              u({ width: window.innerWidth, height: window.innerHeight });
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          c).width;
        (0, q.useEffect)(
          function () {
            null != ew && ew >= 768 && ey === h.PREVIEW && ej(h.MAGIC_MAKER);
          },
          [ew, ey]
        );
        var eP = (0, q.useState)(!1),
          ek = eP[0],
          eN = eP[1],
          eT = (0, q.useState)(!1),
          eO = eT[0],
          ez = eT[1],
          eC = (0, q.useState)(void 0),
          eI = eC[0],
          e_ = eC[1];
        return (0, O.jsxs)("div", {
          className: "flex h-screen w-full flex-col items-center",
          children: [
            (0, O.jsx)(t0, {
              gizmoEditorData: T,
              isLoading: ex,
              hasUnpublishedChanges: J,
              isUploadingProfilePic: ek,
              isGeneratingProfilePic: eO,
              publishedGizmo: M,
              promoteGizmo:
                ((d = (0, v.Z)(
                  j().mark(function e(t, n) {
                    var r;
                    return j().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), ev(t, n);
                          case 2:
                            return (
                              (r = e.sent),
                              (y.current = nc(
                                nc({}, y.current),
                                {},
                                { sharingRecipient: t }
                              )),
                              C(y.current),
                              B.m.setItem(B.F.GizmoEditorTab, ey),
                              e.abrupt("return", r)
                            );
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                function (e, t) {
                  return d.apply(this, arguments);
                }),
              revertDraft:
                null != M && J
                  ? function () {
                      var e = W.E.getQueryData(
                        (0, g.Vw)(y.current.id).queryKey
                      );
                      if (null != e) {
                        var t = nm(e);
                        (y.current = t), C(t), Q();
                      }
                    }
                  : void 0,
              draftMessage: (0, O.jsx)(t3, {
                hasUnpublishedChanges: J,
                isSavingDraft: R,
                upsertDraftError: V,
                className: "text-sm",
              }),
              showActionsModal: function (e) {
                e_(e);
              },
              className: "flex-shrink-0",
            }),
            Y && f && (0, O.jsx)(z, { gizmoId: f.gizmo.id }),
            ep &&
              eh &&
              (0, O.jsx)(S, {
                isFlaggedBrandName: ec,
                onClose: function () {
                  return ef(!1);
                },
              }),
            (0, O.jsxs)("div", {
              className: "relative flex w-full grow overflow-hidden",
              children: [
                (0, O.jsx)("div", {
                  className: "flex w-full justify-center md:w-1/2",
                  children: (0, O.jsx)("div", {
                    className: "h-full grow overflow-hidden",
                    children:
                      void 0 !== eI
                        ? (0, O.jsx)(tD, {
                            currentlyEditingActionDomain: eI,
                            gizmoEditorData: T,
                            updateGizmo: er,
                            onClose: function () {
                              e_(void 0);
                            },
                          })
                        : (0, O.jsxs)("div", {
                            className: "flex h-full flex-col px-2 pt-2",
                            children: [
                              (0, O.jsx)(nd, {
                                editorTab: ey,
                                setEditorTab: ej,
                                className: "mb-2 flex-shrink-0 self-center",
                              }),
                              (0, O.jsx)("div", {
                                className: "grow overflow-hidden",
                                children:
                                  ey === h.MAGIC_MAKER
                                    ? (0, O.jsx)("div", {
                                        className: "h-full w-full pb-5",
                                        children: (0, O.jsx)(
                                          ns,
                                          {
                                            gizmoEditorData: T,
                                            updateGizmo: er,
                                            completionCallbackResponse: ea,
                                            clientThreadId: _,
                                            gizmoEditorDataRef: y,
                                            magicMakerBehaviorOverrides: ei,
                                            magicMakerConversationGizmoEditorDataRef:
                                              k,
                                            requireGizmoId: et,
                                          },
                                          _
                                        ),
                                      })
                                    : ey === h.ADVANCED
                                      ? (0, O.jsx)(ta, {
                                          gizmoEditorData: T,
                                          updateGizmo: er,
                                          generateProfilePic: function () {
                                            ez(!0),
                                              es(y, k, [
                                                "Generate a new profile picture for this GPT using gizmo_editor generate_profile_pic. Do not prompt the user for any clarification. Do not send extra text outside of the tool function call. Do not call update_behavior in your next message.",
                                              ]);
                                          },
                                          setIsUploadingProfilePic: eN,
                                          isGeneratingProfilePic: eO,
                                          setIsGeneratingProfilePic: ez,
                                          requireGizmoId: et,
                                          onShowActionsEditor: function (e) {
                                            e_(e);
                                          },
                                        })
                                      : (0, O.jsx)(tN, {
                                          gizmoEditorData: T,
                                          isSavingDraft: R,
                                          showTitle: !1,
                                        }),
                              }),
                            ],
                          }),
                  }),
                }),
                (0, O.jsx)("div", {
                  className: (0, H.default)(
                    "hidden w-1/2 justify-center border-l border-token-border-medium bg-token-surface-secondary pt-4",
                    ey !== h.PREVIEW && "md:flex"
                  ),
                  children: (0, O.jsx)("div", {
                    className: "flex-grow pb-5",
                    children: (0, O.jsx)("div", {
                      className: "h-full",
                      children: (0, O.jsx)(tN, {
                        gizmoEditorData: T,
                        isSavingDraft: R,
                      }),
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      function ng(e) {
        var t = e.businessWorkspaceId,
          n = e.gizmoId,
          r = (0, g.b9)(n, !0).data,
          i = (0, L.ec)(L.F_.accountUserId),
          o = (0, L.aF)(),
          a = null == o ? void 0 : o.id,
          s = null != r && null != i && null != a && (0, tl.k1)(r, i, a, t);
        return null != r && s ? (0, O.jsx)(nh, { gizmo: r }) : null;
      }
      function nv(e) {
        var t = e.onNewGizmoId;
        return (0, O.jsx)(nh, { gizmo: void 0, onNewGizmoId: t });
      }
      function nx(e) {
        var t = e.gizmoId,
          n = e.remixSourceId,
          r = (0, J.useRouter)(),
          i = (0, D.t)(),
          o = (0, L.ec)(L.F_.businessWorkspaceId),
          a = (0, q.useRef)(void 0),
          s = t;
        return (
          null != t && a.current === t && (s = void 0),
          (0, R.yx)({
            resetThreadAction: function () {
              r.push("/");
            },
          }),
          (0, O.jsx)("div", {
            children:
              null != i && i.data
                ? (0, O.jsx)("div", {
                    children:
                      void 0 != s
                        ? (0, O.jsx)(
                            ng,
                            { businessWorkspaceId: o, gizmoId: s },
                            s
                          )
                        : (0, O.jsx)(nv, {
                            remixSourceId: n,
                            onNewGizmoId: function (e) {
                              (a.current = e),
                                window.history.replaceState(
                                  window.history.state,
                                  "",
                                  (0, V.AA)(e)
                                );
                            },
                          }),
                  })
                : (0, O.jsx)("div", {
                    className: "flex min-h-screen items-center justify-center",
                    children: (0, O.jsx)(M.Z, {}),
                  }),
          })
        );
      }
      var nb = n(85958),
        ny = !0;
      function nj() {
        var e,
          t = (0, D.t)();
        (e = null == t || t.canCreateGizmos()),
          (0, q.useEffect)(
            function () {
              e ||
                Y().replace((0, nb.M5)(nb.LT.NO_ACCESS), void 0, {
                  shallow: !0,
                });
            },
            [e]
          );
        var n = (0, J.useRouter)(),
          r = n.query.slug,
          i = r ? (0, g.CR)(r) : void 0,
          o = n.query.remixFrom,
          a = null == t ? void 0 : t.features.includes(Z.PL);
        return ((0, q.useEffect)(
          function () {
            a && tx.ZP.initializeAndGatherData();
          },
          [a]
        ),
        (0, q.useEffect)(
          function () {
            null == t || t.canCreateGizmos() || n.push("/");
          },
          [t, n]
        ),
        null != t && t.canCreateGizmos())
          ? (0, O.jsx)(nx, { gizmoId: i, remixSourceId: o })
          : null;
      }
    },
    87942: function (e, t, n) {
      n.d(t, {
        b: function () {
          return d;
        },
      });
      var r = n(50134),
        i = n(4399),
        o = n.n(i),
        a = n(3554),
        s = n(21120),
        l = n(37097),
        c = n(4748),
        u = n(35250);
      function d(e) {
        var t,
          n = e.gizmoId,
          i = e.onSuccess,
          d = e.onClose,
          p = (0, l.kb)(),
          f =
            ((t = (0, r.Z)(
              o().mark(function e() {
                return o().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            p.mutateAsync({ gizmoId: n })
                          );
                        case 3:
                          i(), (e.next = 9);
                          break;
                        case 6:
                          (e.prev = 6),
                            (e.t0 = e.catch(0)),
                            c.m.danger(
                              "Failed to delete gizmo. Please try again."
                            );
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 6]]
                );
              })
            )),
            function () {
              return t.apply(this, arguments);
            });
        return (0, u.jsx)(s.Z, {
          isOpen: !0,
          onClose: d,
          type: "danger",
          title: "Delete GPT",
          primaryButton: (0, u.jsx)(a.ZP.Button, {
            title: "Delete GPT",
            color: "danger",
            loading: p.isPending,
            onClick: function () {
              f();
            },
          }),
          secondaryButton: (0, u.jsx)(a.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: d,
          }),
          children: (0, u.jsx)("div", {
            className: "text-sm",
            children:
              "Are you sure you want to delete this GPT? This cannot be undone.",
          }),
        });
      }
    },
  },
]);
