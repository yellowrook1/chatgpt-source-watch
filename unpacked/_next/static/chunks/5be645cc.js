"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8862],
  {
    69289: function (t, e, i) {
      i.d(e, {
        $p: function () {
          return f;
        },
        Pl: function () {
          return N;
        },
        RJ: function () {
          return m;
        },
        SM: function () {
          return R;
        },
        U7: function () {
          return E;
        },
        _0: function () {
          return T;
        },
        _1: function () {
          return D;
        },
        ki: function () {
          return S;
        },
        lx: function () {
          return z;
        },
        nd: function () {
          return A;
        },
        s9: function () {
          return b;
        },
        xR: function () {
          return k;
        },
      });
      var r = i(99444),
        s = i(99975),
        n = i(12776),
        l = i(99549),
        a = i(89448),
        u = i(61475),
        o = i(71544),
        h = i(76203),
        c = i(32473),
        p = i(78690),
        g = i(72541),
        d = i(9914),
        I = i(48030),
        C = i(38045); /**
       * @license
       * Copyright 2018 Google LLC
       *
       * Use of this source code is governed by an MIT-style
       * license that can be found in the LICENSE file or at
       * https://opensource.org/licenses/MIT.
       * =============================================================================
       */
      function z(t, e, i, r) {
        if (Array.isArray(t)) {
          if (null != e || null != i)
            throw new o.nu(
              "When inputs is an array, neither initialState or constants should be provided"
            );
          null != r &&
            ((i = t.slice(t.length - r, t.length)),
            (t = t.slice(0, t.length - r))),
            t.length > 1 && (e = t.slice(1, t.length)),
            (t = t[0]);
        }
        function s(t) {
          return null == t || Array.isArray(t) ? t : [t];
        }
        return { inputs: t, initialState: (e = s(e)), constants: (i = s(i)) };
      }
      function A(t, e, i, s = !1, n, l, a = !1, u = !1) {
        return r.lub(() => {
          let h, c, p;
          let d = e.shape.length;
          if (d < 3)
            throw new o.nu(`Input should be at least 3D, but is ${d}D.`);
          let I = [1, 0].concat(g.w6(2, d));
          if (((e = r.p4s(e, I)), null != l))
            throw new o.nj(
              "The rnn() functoin of the deeplearn.js backend does not support constants yet."
            );
          a &&
            console.warn(
              "Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."
            ),
            null != n &&
              ((n = r.pju(r.pju(n, "bool"), "float32")).rank === d - 1 &&
                (n = r.dt4(n, -1)),
              (n = r.p4s(n, I))),
            s && ((e = r.GYS(e, 0)), null != n && (n = r.GYS(n, 0)));
          let C = [],
            z = i,
            A = e.shape[0],
            f = r.HHK(e);
          null != n && (c = r.HHK(n));
          for (let e = 0; e < A; ++e) {
            let i = f[e],
              s = r.lub(() => t(i, z));
            if (null == n) (h = s[0]), (z = s[1]);
            else {
              let t = r.lub(() => {
                let t = c[e],
                  i = r.luU(r.JpU(t), t);
                return {
                  output: r.IHx(r.dC7(s[0], t), r.dC7(z[0], i)),
                  newStates: z.map((e, n) =>
                    r.IHx(r.dC7(s[1][n], t), r.dC7(e, i))
                  ),
                };
              });
              (h = t.output), (z = t.newStates);
            }
            u && C.push(h);
          }
          return u && (p = r.knu(C, 1)), [h, p, z];
        });
      }
      class f extends u.mh {
        constructor(t) {
          let e;
          if ((super(t), null == t.cell))
            throw new o.nu(
              "cell property is missing for the constructor of RNN."
            );
          if (
            null ==
            (e = Array.isArray(t.cell) ? new D({ cells: t.cell }) : t.cell)
              .stateSize
          )
            throw new o.nu(
              "The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state)."
            );
          (this.cell = e),
            (this.returnSequences =
              null != t.returnSequences && t.returnSequences),
            (this.returnState = null != t.returnState && t.returnState),
            (this.goBackwards = null != t.goBackwards && t.goBackwards),
            (this._stateful = null != t.stateful && t.stateful),
            (this.unroll = null != t.unroll && t.unroll),
            (this.supportsMasking = !0),
            (this.inputSpec = [new u.Zg({ ndim: 3 })]),
            (this.stateSpec = null),
            (this.states_ = null),
            (this.numConstants = null),
            (this.keptStates = []);
        }
        getStates() {
          if (null != this.states_) return this.states_;
          {
            let t = Array.isArray(this.cell.stateSize)
              ? this.cell.stateSize.length
              : 1;
            return g.w6(0, t).map((t) => null);
          }
        }
        setStates(t) {
          this.states_ = t;
        }
        computeOutputShape(t) {
          let e;
          (0, d.XO)(t) && (t = t[0]);
          let i = this.cell.stateSize;
          Array.isArray(i) || (i = [i]);
          let r = i[0];
          if (
            ((e = this.returnSequences ? [t[0], t[1], r] : [t[0], r]),
            !this.returnState)
          )
            return e;
          {
            let r = [];
            for (let e of i) r.push([t[0], e]);
            return [e].concat(r);
          }
        }
        computeMask(t, e) {
          return r.lub(() => {
            Array.isArray(e) && (e = e[0]);
            let t = this.returnSequences ? e : null;
            return this.returnState
              ? [t].concat(this.states.map((t) => null))
              : t;
          });
        }
        get states() {
          if (null != this.states_) return this.states_;
          {
            let t = Array.isArray(this.cell.stateSize)
                ? this.cell.stateSize.length
                : 1,
              e = [];
            for (let i = 0; i < t; ++i) e.push(null);
            return e;
          }
        }
        set states(t) {
          this.states_ = t;
        }
        build(t) {
          let e;
          if (null != this.numConstants)
            throw new o.nj("Constants support is not implemented in RNN yet.");
          (0, d.XO)(t) && (t = t[0]);
          let i = this.stateful ? t[0] : null,
            s = t.slice(2);
          this.inputSpec[0] = new u.Zg({ shape: [i, null, ...s] });
          let n = [t[0]].concat(t.slice(2));
          if (
            (this.cell.build(n),
            (e = Array.isArray(this.cell.stateSize)
              ? this.cell.stateSize
              : [this.cell.stateSize]),
            null != this.stateSpec)
          ) {
            if (
              !r.D5U.arraysEqual(
                this.stateSpec.map((t) => t.shape[t.shape.length - 1]),
                e
              )
            )
              throw new o.nu(
                `An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`
              );
          } else this.stateSpec = e.map((t) => new u.Zg({ shape: [null, t] }));
          this.stateful && this.resetStates();
        }
        resetStates(t, e = !1) {
          (0, r.lub)(() => {
            if (!this.stateful)
              throw new o.j1(
                "Cannot call resetStates() on an RNN Layer that is not stateful."
              );
            let i = this.inputSpec[0].shape[0];
            if (null == i)
              throw new o.nu(
                "If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer."
              );
            if (null == this.states_)
              Array.isArray(this.cell.stateSize)
                ? (this.states_ = this.cell.stateSize.map((t) => r.lls([i, t])))
                : (this.states_ = [r.lls([i, this.cell.stateSize])]);
            else if (null == t)
              r.B90(this.states_),
                null != this.keptStates &&
                  (r.B90(this.keptStates), (this.keptStates = [])),
                Array.isArray(this.cell.stateSize)
                  ? (this.states_ = this.cell.stateSize.map((t) =>
                      r.lls([i, t])
                    ))
                  : (this.states_[0] = r.lls([i, this.cell.stateSize]));
            else {
              if (
                (Array.isArray(t) || (t = [t]),
                t.length !== this.states_.length)
              )
                throw new o.nu(
                  `Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`
                );
              !0 === e
                ? this.keptStates.push(this.states_.slice())
                : r.B90(this.states_);
              for (let e = 0; e < this.states_.length; ++e) {
                let s = t[e],
                  n = [
                    i,
                    Array.isArray(this.cell.stateSize)
                      ? this.cell.stateSize[e]
                      : this.cell.stateSize,
                  ];
                if (!r.D5U.arraysEqual(s.shape, n))
                  throw new o.nu(
                    `State ${e} is incompatible with layer ${this.name}: expected shape=${n}, received shape=${s.shape}`
                  );
                this.states_[e] = s;
              }
            }
            this.states_ = this.states_.map((t) => r.CnY(t.clone()));
          });
        }
        apply(t, e) {
          let i = null == e ? null : e.initialState,
            r = null == e ? null : e.constants;
          null == e && (e = {});
          let s = z(t, i, r, this.numConstants);
          (t = s.inputs), (i = s.initialState), (r = s.constants);
          let n = [],
            l = [];
          if (null != i) {
            for (let t of ((e.initialState = i),
            (n = n.concat(i)),
            (this.stateSpec = []),
            i))
              this.stateSpec.push(new u.Zg({ shape: t.shape }));
            l = l.concat(this.stateSpec);
          }
          if (
            (null != r &&
              ((e.constants = r),
              (n = n.concat(r)),
              (this.numConstants = r.length)),
            !(n[0] instanceof u.Iy))
          )
            return super.apply(t, e);
          {
            let i = [t].concat(n),
              r = this.inputSpec.concat(l),
              s = this.inputSpec;
            this.inputSpec = r;
            let a = super.apply(i, e);
            return (this.inputSpec = s), a;
          }
        }
        call(t, e) {
          return (0, r.lub)(() => {
            let i = null == e ? null : e.mask,
              r = null == e ? null : e.training,
              s = null == e ? null : e.initialState;
            (t = (0, d.nQ)(t)),
              null == s &&
                (s = this.stateful ? this.states_ : this.getInitialState(t));
            let n = Array.isArray(this.cell.stateSize)
              ? this.cell.stateSize.length
              : 1;
            if (s.length !== n)
              throw new o.nu(
                `RNN Layer has ${n} state(s) but was passed ${s.length} initial state(s).`
              );
            this.unroll &&
              console.warn(
                "Ignoring unroll = true for RNN layer, due to imperative backend."
              );
            let l = { training: r },
              a = A(
                (t, e) => {
                  let i = this.cell.call([t].concat(e), l);
                  return [i[0], i.slice(1)];
                },
                t,
                s,
                this.goBackwards,
                i,
                null,
                this.unroll,
                this.returnSequences
              ),
              u = a[0],
              h = a[1],
              c = a[2];
            this.stateful && this.resetStates(c, r);
            let p = this.returnSequences ? h : u;
            return this.returnState ? [p].concat(c) : p;
          });
        }
        getInitialState(t) {
          return (0, r.lub)(() => {
            let e = r.lls(t.shape);
            return ((e = r.Smz(e, [1, 2])),
            (e = n.dt(e)),
            Array.isArray(this.cell.stateSize))
              ? this.cell.stateSize.map((t) => (t > 1 ? n.Gg(e, [1, t]) : e))
              : this.cell.stateSize > 1
                ? [n.Gg(e, [1, this.cell.stateSize])]
                : [e];
          });
        }
        get trainableWeights() {
          return this.trainable ? this.cell.trainableWeights : [];
        }
        get nonTrainableWeights() {
          return this.trainable
            ? this.cell.nonTrainableWeights
            : this.cell.weights;
        }
        setFastWeightInitDuringBuild(t) {
          super.setFastWeightInitDuringBuild(t),
            null != this.cell && this.cell.setFastWeightInitDuringBuild(t);
        }
        getConfig() {
          let t = super.getConfig(),
            e = {
              returnSequences: this.returnSequences,
              returnState: this.returnState,
              goBackwards: this.goBackwards,
              stateful: this.stateful,
              unroll: this.unroll,
            };
          null != this.numConstants && (e.numConstants = this.numConstants);
          let i = this.cell.getConfig();
          return (
            this.getClassName() === f.className &&
              (e.cell = { className: this.cell.getClassName(), config: i }),
            Object.assign({}, i, t, e)
          );
        }
        static fromConfig(t, e, i = {}) {
          let r = e.cell;
          return new t(Object.assign(e, { cell: (0, C.v)(r, i) }));
        }
      }
      (f.className = "RNN"), r.m7h.registerClass(f);
      class S extends u.mh {}
      class k extends S {
        constructor(t) {
          super(t),
            (this.DEFAULT_ACTIVATION = "tanh"),
            (this.DEFAULT_KERNEL_INITIALIZER = "glorotNormal"),
            (this.DEFAULT_RECURRENT_INITIALIZER = "orthogonal"),
            (this.DEFAULT_BIAS_INITIALIZER = "zeros"),
            (this.units = t.units),
            (0, p.iQ)(this.units, "units"),
            (this.activation = (0, s.aI)(
              null == t.activation ? this.DEFAULT_ACTIVATION : t.activation
            )),
            (this.useBias = null == t.useBias || t.useBias),
            (this.kernelInitializer = (0, h.L5)(
              t.kernelInitializer || this.DEFAULT_KERNEL_INITIALIZER
            )),
            (this.recurrentInitializer = (0, h.L5)(
              t.recurrentInitializer || this.DEFAULT_RECURRENT_INITIALIZER
            )),
            (this.biasInitializer = (0, h.L5)(
              t.biasInitializer || this.DEFAULT_BIAS_INITIALIZER
            )),
            (this.kernelRegularizer = (0, c.EC)(t.kernelRegularizer)),
            (this.recurrentRegularizer = (0, c.EC)(t.recurrentRegularizer)),
            (this.biasRegularizer = (0, c.EC)(t.biasRegularizer)),
            (this.kernelConstraint = (0, a.Ad)(t.kernelConstraint)),
            (this.recurrentConstraint = (0, a.Ad)(t.recurrentConstraint)),
            (this.biasConstraint = (0, a.Ad)(t.biasConstraint)),
            (this.dropout = g.VV([
              1,
              g.Fp([0, null == t.dropout ? 0 : t.dropout]),
            ])),
            (this.recurrentDropout = g.VV([
              1,
              g.Fp([0, null == t.recurrentDropout ? 0 : t.recurrentDropout]),
            ])),
            (this.dropoutFunc = t.dropoutFunc),
            (this.stateSize = this.units),
            (this.dropoutMask = null),
            (this.recurrentDropoutMask = null);
        }
        build(t) {
          (t = (0, d.Wf)(t)),
            (this.kernel = this.addWeight(
              "kernel",
              [t[t.length - 1], this.units],
              null,
              this.kernelInitializer,
              this.kernelRegularizer,
              !0,
              this.kernelConstraint
            )),
            (this.recurrentKernel = this.addWeight(
              "recurrent_kernel",
              [this.units, this.units],
              null,
              this.recurrentInitializer,
              this.recurrentRegularizer,
              !0,
              this.recurrentConstraint
            )),
            this.useBias
              ? (this.bias = this.addWeight(
                  "bias",
                  [this.units],
                  null,
                  this.biasInitializer,
                  this.biasRegularizer,
                  !0,
                  this.biasConstraint
                ))
              : (this.bias = null),
            (this.built = !0);
        }
        call(t, e) {
          return (0, r.lub)(() => {
            let i;
            if (2 !== t.length)
              throw new o.nu(
                `SimpleRNNCell expects 2 input Tensors, got ${t.length}.`
              );
            let s = t[1];
            t = t[0];
            let l = null != e.training && e.training;
            0 < this.dropout &&
              this.dropout < 1 &&
              null == this.dropoutMask &&
              (this.dropoutMask = T({
                ones: () => r.JpU(t),
                rate: this.dropout,
                training: l,
                dropoutFunc: this.dropoutFunc,
              })),
              0 < this.recurrentDropout &&
                this.recurrentDropout < 1 &&
                null == this.recurrentDropoutMask &&
                (this.recurrentDropoutMask = T({
                  ones: () => r.JpU(s),
                  rate: this.recurrentDropout,
                  training: l,
                  dropoutFunc: this.dropoutFunc,
                }));
            let a = this.dropoutMask,
              u = this.recurrentDropoutMask;
            (i =
              null != a
                ? n.AK(r.dC7(t, a), this.kernel.read())
                : n.AK(t, this.kernel.read())),
              null != this.bias && (i = n.a2(i, this.bias.read())),
              null != u && (s = r.dC7(s, u));
            let h = r.IHx(i, n.AK(s, this.recurrentKernel.read()));
            return (
              null != this.activation && (h = this.activation.apply(h)), [h, h]
            );
          });
        }
        getConfig() {
          return Object.assign({}, super.getConfig(), {
            units: this.units,
            activation: (0, s.GD)(this.activation),
            useBias: this.useBias,
            kernelInitializer: (0, h.Cx)(this.kernelInitializer),
            recurrentInitializer: (0, h.Cx)(this.recurrentInitializer),
            biasInitializer: (0, h.Cx)(this.biasInitializer),
            kernelRegularizer: (0, c.SG)(this.kernelRegularizer),
            recurrentRegularizer: (0, c.SG)(this.recurrentRegularizer),
            biasRegularizer: (0, c.SG)(this.biasRegularizer),
            activityRegularizer: (0, c.SG)(this.activityRegularizer),
            kernelConstraint: (0, a.xF)(this.kernelConstraint),
            recurrentConstraint: (0, a.xF)(this.recurrentConstraint),
            biasConstraint: (0, a.xF)(this.biasConstraint),
            dropout: this.dropout,
            recurrentDropout: this.recurrentDropout,
          });
        }
      }
      (k.className = "SimpleRNNCell"), r.m7h.registerClass(k);
      class b extends f {
        constructor(t) {
          (t.cell = new k(t)), super(t);
        }
        call(t, e) {
          return (0, r.lub)(() => {
            null != this.cell.dropoutMask &&
              (r.B90(this.cell.dropoutMask), (this.cell.dropoutMask = null)),
              null != this.cell.recurrentDropoutMask &&
                (r.B90(this.cell.recurrentDropoutMask),
                (this.cell.recurrentDropoutMask = null));
            let i = null == e ? null : e.mask,
              s = null == e ? null : e.training,
              n = null == e ? null : e.initialState;
            return super.call(t, { mask: i, training: s, initialState: n });
          });
        }
        static fromConfig(t, e) {
          return new t(e);
        }
      }
      (b.className = "SimpleRNN"), r.m7h.registerClass(b);
      class R extends S {
        constructor(t) {
          if (
            (super(t),
            (this.DEFAULT_ACTIVATION = "tanh"),
            (this.DEFAULT_RECURRENT_ACTIVATION = "hardSigmoid"),
            (this.DEFAULT_KERNEL_INITIALIZER = "glorotNormal"),
            (this.DEFAULT_RECURRENT_INITIALIZER = "orthogonal"),
            (this.DEFAULT_BIAS_INITIALIZER = "zeros"),
            t.resetAfter)
          )
            throw new o.nu(
              "GRUCell does not support reset_after parameter set to true."
            );
          (this.units = t.units),
            (0, p.iQ)(this.units, "units"),
            (this.activation = (0, s.aI)(
              void 0 === t.activation ? this.DEFAULT_ACTIVATION : t.activation
            )),
            (this.recurrentActivation = (0, s.aI)(
              void 0 === t.recurrentActivation
                ? this.DEFAULT_RECURRENT_ACTIVATION
                : t.recurrentActivation
            )),
            (this.useBias = null == t.useBias || t.useBias),
            (this.kernelInitializer = (0, h.L5)(
              t.kernelInitializer || this.DEFAULT_KERNEL_INITIALIZER
            )),
            (this.recurrentInitializer = (0, h.L5)(
              t.recurrentInitializer || this.DEFAULT_RECURRENT_INITIALIZER
            )),
            (this.biasInitializer = (0, h.L5)(
              t.biasInitializer || this.DEFAULT_BIAS_INITIALIZER
            )),
            (this.kernelRegularizer = (0, c.EC)(t.kernelRegularizer)),
            (this.recurrentRegularizer = (0, c.EC)(t.recurrentRegularizer)),
            (this.biasRegularizer = (0, c.EC)(t.biasRegularizer)),
            (this.kernelConstraint = (0, a.Ad)(t.kernelConstraint)),
            (this.recurrentConstraint = (0, a.Ad)(t.recurrentConstraint)),
            (this.biasConstraint = (0, a.Ad)(t.biasConstraint)),
            (this.dropout = g.VV([
              1,
              g.Fp([0, null == t.dropout ? 0 : t.dropout]),
            ])),
            (this.recurrentDropout = g.VV([
              1,
              g.Fp([0, null == t.recurrentDropout ? 0 : t.recurrentDropout]),
            ])),
            (this.dropoutFunc = t.dropoutFunc),
            (this.implementation = t.implementation),
            (this.stateSize = this.units),
            (this.dropoutMask = null),
            (this.recurrentDropoutMask = null);
        }
        build(t) {
          let e = (t = (0, d.Wf)(t))[t.length - 1];
          (this.kernel = this.addWeight(
            "kernel",
            [e, 3 * this.units],
            null,
            this.kernelInitializer,
            this.kernelRegularizer,
            !0,
            this.kernelConstraint
          )),
            (this.recurrentKernel = this.addWeight(
              "recurrent_kernel",
              [this.units, 3 * this.units],
              null,
              this.recurrentInitializer,
              this.recurrentRegularizer,
              !0,
              this.recurrentConstraint
            )),
            this.useBias
              ? (this.bias = this.addWeight(
                  "bias",
                  [3 * this.units],
                  null,
                  this.biasInitializer,
                  this.biasRegularizer,
                  !0,
                  this.biasConstraint
                ))
              : (this.bias = null),
            (this.built = !0);
        }
        call(t, e) {
          return (0, r.lub)(() => {
            let i, s, l;
            if (2 !== t.length)
              throw new o.nu(
                `GRUCell expects 2 input Tensors (inputs, h, c), got ${t.length}.`
              );
            let a = null != e.training && e.training,
              u = t[1];
            (t = t[0]),
              0 < this.dropout &&
                this.dropout < 1 &&
                null == this.dropoutMask &&
                (this.dropoutMask = T({
                  ones: () => r.JpU(t),
                  rate: this.dropout,
                  training: a,
                  count: 3,
                  dropoutFunc: this.dropoutFunc,
                })),
              0 < this.recurrentDropout &&
                this.recurrentDropout < 1 &&
                null == this.recurrentDropoutMask &&
                (this.recurrentDropoutMask = T({
                  ones: () => r.JpU(u),
                  rate: this.recurrentDropout,
                  training: a,
                  count: 3,
                  dropoutFunc: this.dropoutFunc,
                }));
            let h = this.dropoutMask,
              c = this.recurrentDropoutMask;
            0 < this.dropout && this.dropout < 1 && (t = r.dC7(t, h[0]));
            let p = n.AK(t, this.kernel.read());
            this.useBias && (p = n.a2(p, this.bias.read())),
              0 < this.recurrentDropout &&
                this.recurrentDropout < 1 &&
                (u = r.dC7(u, c[0]));
            let g = this.recurrentKernel.read(),
              [d, I] = r.Vl2(g, [2 * this.units, this.units], g.rank - 1),
              C = n.AK(u, d),
              [z, A, f] = r.Vl2(p, 3, p.rank - 1),
              [S, k] = r.Vl2(C, 2, C.rank - 1);
            (i = this.recurrentActivation.apply(r.IHx(z, S))),
              (s = this.recurrentActivation.apply(r.IHx(A, k)));
            let b = n.AK(r.dC7(s, u), I);
            l = this.activation.apply(r.IHx(f, b));
            let R = r.IHx(r.dC7(i, u), r.dC7(r.IHx(1, r.W76(i)), l));
            return [R, R];
          });
        }
        getConfig() {
          return Object.assign({}, super.getConfig(), {
            units: this.units,
            activation: (0, s.GD)(this.activation),
            recurrentActivation: (0, s.GD)(this.recurrentActivation),
            useBias: this.useBias,
            kernelInitializer: (0, h.Cx)(this.kernelInitializer),
            recurrentInitializer: (0, h.Cx)(this.recurrentInitializer),
            biasInitializer: (0, h.Cx)(this.biasInitializer),
            kernelRegularizer: (0, c.SG)(this.kernelRegularizer),
            recurrentRegularizer: (0, c.SG)(this.recurrentRegularizer),
            biasRegularizer: (0, c.SG)(this.biasRegularizer),
            activityRegularizer: (0, c.SG)(this.activityRegularizer),
            kernelConstraint: (0, a.xF)(this.kernelConstraint),
            recurrentConstraint: (0, a.xF)(this.recurrentConstraint),
            biasConstraint: (0, a.xF)(this.biasConstraint),
            dropout: this.dropout,
            recurrentDropout: this.recurrentDropout,
            implementation: this.implementation,
            resetAfter: !1,
          });
        }
      }
      (R.className = "GRUCell"), r.m7h.registerClass(R);
      class m extends f {
        constructor(t) {
          0 === t.implementation &&
            console.warn(
              "`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."
            ),
            (t.cell = new R(t)),
            super(t);
        }
        call(t, e) {
          return (0, r.lub)(() => {
            null != this.cell.dropoutMask &&
              (r.B90(this.cell.dropoutMask), (this.cell.dropoutMask = null)),
              null != this.cell.recurrentDropoutMask &&
                (r.B90(this.cell.recurrentDropoutMask),
                (this.cell.recurrentDropoutMask = null));
            let i = null == e ? null : e.mask,
              s = null == e ? null : e.training,
              n = null == e ? null : e.initialState;
            return super.call(t, { mask: i, training: s, initialState: n });
          });
        }
        static fromConfig(t, e) {
          return 0 === e.implmentation && (e.implementation = 1), new t(e);
        }
      }
      (m.className = "GRU"), r.m7h.registerClass(m);
      class E extends S {
        constructor(t) {
          super(t),
            (this.DEFAULT_ACTIVATION = "tanh"),
            (this.DEFAULT_RECURRENT_ACTIVATION = "hardSigmoid"),
            (this.DEFAULT_KERNEL_INITIALIZER = "glorotNormal"),
            (this.DEFAULT_RECURRENT_INITIALIZER = "orthogonal"),
            (this.DEFAULT_BIAS_INITIALIZER = "zeros"),
            (this.units = t.units),
            (0, p.iQ)(this.units, "units"),
            (this.activation = (0, s.aI)(
              void 0 === t.activation ? this.DEFAULT_ACTIVATION : t.activation
            )),
            (this.recurrentActivation = (0, s.aI)(
              void 0 === t.recurrentActivation
                ? this.DEFAULT_RECURRENT_ACTIVATION
                : t.recurrentActivation
            )),
            (this.useBias = null == t.useBias || t.useBias),
            (this.kernelInitializer = (0, h.L5)(
              t.kernelInitializer || this.DEFAULT_KERNEL_INITIALIZER
            )),
            (this.recurrentInitializer = (0, h.L5)(
              t.recurrentInitializer || this.DEFAULT_RECURRENT_INITIALIZER
            )),
            (this.biasInitializer = (0, h.L5)(
              t.biasInitializer || this.DEFAULT_BIAS_INITIALIZER
            )),
            (this.unitForgetBias = t.unitForgetBias),
            (this.kernelRegularizer = (0, c.EC)(t.kernelRegularizer)),
            (this.recurrentRegularizer = (0, c.EC)(t.recurrentRegularizer)),
            (this.biasRegularizer = (0, c.EC)(t.biasRegularizer)),
            (this.kernelConstraint = (0, a.Ad)(t.kernelConstraint)),
            (this.recurrentConstraint = (0, a.Ad)(t.recurrentConstraint)),
            (this.biasConstraint = (0, a.Ad)(t.biasConstraint)),
            (this.dropout = g.VV([
              1,
              g.Fp([0, null == t.dropout ? 0 : t.dropout]),
            ])),
            (this.recurrentDropout = g.VV([
              1,
              g.Fp([0, null == t.recurrentDropout ? 0 : t.recurrentDropout]),
            ])),
            (this.dropoutFunc = t.dropoutFunc),
            (this.implementation = t.implementation),
            (this.stateSize = [this.units, this.units]),
            (this.dropoutMask = null),
            (this.recurrentDropoutMask = null);
        }
        build(t) {
          var e;
          let i;
          let r = (t = (0, d.Wf)(t))[t.length - 1];
          if (
            ((this.kernel = this.addWeight(
              "kernel",
              [r, 4 * this.units],
              null,
              this.kernelInitializer,
              this.kernelRegularizer,
              !0,
              this.kernelConstraint
            )),
            (this.recurrentKernel = this.addWeight(
              "recurrent_kernel",
              [this.units, 4 * this.units],
              null,
              this.recurrentInitializer,
              this.recurrentRegularizer,
              !0,
              this.recurrentConstraint
            )),
            this.useBias)
          ) {
            if (this.unitForgetBias) {
              let t = this.biasInitializer,
                r = this.units;
              i = new (((e = class extends h.m7 {
                apply(e, i) {
                  let s = t.apply([r]),
                    l = new h.M6().apply([r]),
                    a = t.apply([2 * r]);
                  return n.GZ(n.GZ(s, l), a);
                }
              }).className = "CustomInit"),
              e)();
            } else i = this.biasInitializer;
            this.bias = this.addWeight(
              "bias",
              [4 * this.units],
              null,
              i,
              this.biasRegularizer,
              !0,
              this.biasConstraint
            );
          } else this.bias = null;
          this.built = !0;
        }
        call(t, e) {
          return (0, r.lub)(() => {
            let i, s, l, a;
            let u = null != e.training && e.training;
            if (3 !== t.length)
              throw new o.nu(
                `LSTMCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`
              );
            let h = t[1],
              c = t[2];
            (t = t[0]),
              0 < this.dropout &&
                this.dropout < 1 &&
                null == this.dropoutMask &&
                (this.dropoutMask = T({
                  ones: () => r.JpU(t),
                  rate: this.dropout,
                  training: u,
                  count: 4,
                  dropoutFunc: this.dropoutFunc,
                })),
              0 < this.recurrentDropout &&
                this.recurrentDropout < 1 &&
                null == this.recurrentDropoutMask &&
                (this.recurrentDropoutMask = T({
                  ones: () => r.JpU(h),
                  rate: this.recurrentDropout,
                  training: u,
                  count: 4,
                  dropoutFunc: this.dropoutFunc,
                }));
            let p = this.dropoutMask,
              g = this.recurrentDropoutMask;
            0 < this.dropout && this.dropout < 1 && (t = r.dC7(t, p[0]));
            let d = n.AK(t, this.kernel.read());
            0 < this.recurrentDropout &&
              this.recurrentDropout < 1 &&
              (h = r.dC7(h, g[0])),
              (d = r.IHx(d, n.AK(h, this.recurrentKernel.read()))),
              this.useBias && (d = n.a2(d, this.bias.read()));
            let [I, C, z, A] = r.Vl2(d, 4, d.rank - 1);
            (i = this.recurrentActivation.apply(I)),
              (s = this.recurrentActivation.apply(C)),
              (l = r.IHx(r.dC7(s, c), r.dC7(i, this.activation.apply(z)))),
              (a = this.recurrentActivation.apply(A));
            let f = r.dC7(a, this.activation.apply(l));
            return [f, f, l];
          });
        }
        getConfig() {
          return Object.assign({}, super.getConfig(), {
            units: this.units,
            activation: (0, s.GD)(this.activation),
            recurrentActivation: (0, s.GD)(this.recurrentActivation),
            useBias: this.useBias,
            kernelInitializer: (0, h.Cx)(this.kernelInitializer),
            recurrentInitializer: (0, h.Cx)(this.recurrentInitializer),
            biasInitializer: (0, h.Cx)(this.biasInitializer),
            unitForgetBias: this.unitForgetBias,
            kernelRegularizer: (0, c.SG)(this.kernelRegularizer),
            recurrentRegularizer: (0, c.SG)(this.recurrentRegularizer),
            biasRegularizer: (0, c.SG)(this.biasRegularizer),
            activityRegularizer: (0, c.SG)(this.activityRegularizer),
            kernelConstraint: (0, a.xF)(this.kernelConstraint),
            recurrentConstraint: (0, a.xF)(this.recurrentConstraint),
            biasConstraint: (0, a.xF)(this.biasConstraint),
            dropout: this.dropout,
            recurrentDropout: this.recurrentDropout,
            implementation: this.implementation,
          });
        }
      }
      (E.className = "LSTMCell"), r.m7h.registerClass(E);
      class N extends f {
        constructor(t) {
          0 === t.implementation &&
            console.warn(
              "`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."
            ),
            (t.cell = new E(t)),
            super(t);
        }
        call(t, e) {
          return (0, r.lub)(() => {
            null != this.cell.dropoutMask &&
              (r.B90(this.cell.dropoutMask), (this.cell.dropoutMask = null)),
              null != this.cell.recurrentDropoutMask &&
                (r.B90(this.cell.recurrentDropoutMask),
                (this.cell.recurrentDropoutMask = null));
            let i = null == e ? null : e.mask,
              s = null == e ? null : e.training,
              n = null == e ? null : e.initialState;
            return super.call(t, { mask: i, training: s, initialState: n });
          });
        }
        static fromConfig(t, e) {
          return 0 === e.implmentation && (e.implementation = 1), new t(e);
        }
      }
      (N.className = "LSTM"), r.m7h.registerClass(N);
      class D extends S {
        constructor(t) {
          super(t), (this.cells = t.cells);
        }
        get stateSize() {
          let t = [];
          for (let e of this.cells.slice().reverse())
            Array.isArray(e.stateSize)
              ? t.push(...e.stateSize)
              : t.push(e.stateSize);
          return t;
        }
        call(t, e) {
          return (0, r.lub)(() => {
            let i;
            let r = t.slice(1),
              s = [];
            for (let t of this.cells.slice().reverse())
              Array.isArray(t.stateSize)
                ? s.push(r.splice(0, t.stateSize.length))
                : s.push(r.splice(0, 1));
            s.reverse();
            let n = [];
            for (let l = 0; l < this.cells.length; ++l) {
              let a = this.cells[l];
              (r = s[l]),
                (i = 0 === l ? [t[0]].concat(r) : [i[0]].concat(r)),
                (i = a.call(i, e)),
                n.push(i.slice(1));
            }
            for (let t of ((r = []), n.slice().reverse())) r.push(...t);
            return [i[0]].concat(r);
          });
        }
        build(t) {
          let e;
          (0, d.XO)(t) && (t = t[0]),
            this.cells.forEach((i, r) => {
              (0, l.f4)(`RNNCell_${r}`, () => {
                i.build(t),
                  (e = Array.isArray(i.stateSize)
                    ? i.stateSize[0]
                    : i.stateSize),
                  (t = [t[0], e]);
              });
            }),
            (this.built = !0);
        }
        getConfig() {
          return Object.assign({}, super.getConfig(), {
            cells: this.cells.map((t) => ({
              className: t.getClassName(),
              config: t.getConfig(),
            })),
          });
        }
        static fromConfig(t, e, i = {}) {
          let r = [];
          for (let t of e.cells) r.push((0, C.v)(t, i));
          return new t({ cells: r });
        }
        get trainableWeights() {
          if (!this.trainable) return [];
          let t = [];
          for (let e of this.cells) t.push(...e.trainableWeights);
          return t;
        }
        get nonTrainableWeights() {
          let t = [];
          for (let e of this.cells) t.push(...e.nonTrainableWeights);
          if (!this.trainable) {
            let e = [];
            for (let t of this.cells) e.push(...t.trainableWeights);
            return e.concat(t);
          }
          return t;
        }
        getWeights() {
          let t = [];
          for (let e of this.cells) t.push(...e.weights);
          return (0, I.FQ)(t);
        }
        setWeights(t) {
          let e = [];
          for (let i of this.cells) {
            let r = i.weights.length,
              s = t.splice(r);
            for (let t = 0; t < i.weights.length; ++t)
              e.push([i.weights[t], s[t]]);
          }
          (0, I.zb)(e);
        }
      }
      function T(t) {
        let {
            ones: e,
            rate: i,
            training: s = !1,
            count: l = 1,
            dropoutFunc: a,
          } = t,
          u = () => (null != a ? a(e(), i) : n.rv(e(), i)),
          o = () => n.KC(u, e, s);
        return !l || l <= 1
          ? r.CnY(o().clone())
          : Array(l)
              .fill(void 0)
              .map(o)
              .map((t) => r.CnY(t.clone()));
      }
      (D.className = "StackedRNNCells"), r.m7h.registerClass(D);
    },
  },
]);
//# sourceMappingURL=5be645cc.d018f6e9a9ebea16.js.map
