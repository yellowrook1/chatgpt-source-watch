"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7665],
  {
    87665: function (r, e, n) {
      n.d(e, {
        Z: function () {
          return f;
        },
      });
      var t = n(33605),
        o = n(24421),
        a = n(28734),
        i = n(51516);
      function u(r, e) {
        if (null == r)
          throw TypeError(
            "assign requires that input parameter not be null or undefined"
          );
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
        return r;
      }
      var l = n(99977);
      function f(r, e) {
        return (
          (0, i.Z)(1, arguments),
          (function (r, e, n) {
            (0, i.Z)(2, arguments);
            var f,
              s,
              c,
              d,
              m,
              v,
              h,
              g = (0, t.j)(),
              Z =
                null !==
                  (f =
                    null !== (s = null == n ? void 0 : n.locale) && void 0 !== s
                      ? s
                      : g.locale) && void 0 !== f
                  ? f
                  : l.Z;
            if (!Z.formatDistance)
              throw RangeError(
                "locale must contain localize.formatDistance property"
              );
            var p = (function (r, e) {
              (0, i.Z)(2, arguments);
              var n = (0, a.Z)(r),
                t = (0, a.Z)(e),
                o = n.getTime() - t.getTime();
              return o < 0 ? -1 : o > 0 ? 1 : o;
            })(r, e);
            if (isNaN(p)) throw RangeError("Invalid time value");
            var y = u(u({}, n), {
              addSuffix: !!(null == n ? void 0 : n.addSuffix),
              comparison: p,
            });
            p > 0
              ? ((d = (0, a.Z)(e)), (m = (0, a.Z)(r)))
              : ((d = (0, a.Z)(r)), (m = (0, a.Z)(e)));
            var D = String(
              null !== (c = null == n ? void 0 : n.roundingMethod) &&
              void 0 !== c
                ? c
                : "round"
            );
            if ("floor" === D) v = Math.floor;
            else if ("ceil" === D) v = Math.ceil;
            else if ("round" === D) v = Math.round;
            else
              throw RangeError(
                "roundingMethod must be 'floor', 'ceil' or 'round'"
              );
            var w = m.getTime() - d.getTime(),
              x = w / 6e4,
              E = (w - ((0, o.Z)(m) - (0, o.Z)(d))) / 6e4,
              M = null == n ? void 0 : n.unit;
            if (
              "second" ===
              (h = M
                ? String(M)
                : x < 1
                  ? "second"
                  : x < 60
                    ? "minute"
                    : x < 1440
                      ? "hour"
                      : E < 43200
                        ? "day"
                        : E < 525600
                          ? "month"
                          : "year")
            ) {
              var b = v(w / 1e3);
              return Z.formatDistance("xSeconds", b, y);
            }
            if ("minute" === h) {
              var S = v(x);
              return Z.formatDistance("xMinutes", S, y);
            }
            if ("hour" === h) {
              var T = v(x / 60);
              return Z.formatDistance("xHours", T, y);
            }
            if ("day" === h) {
              var k = v(E / 1440);
              return Z.formatDistance("xDays", k, y);
            }
            if ("month" === h) {
              var N = v(E / 43200);
              return 12 === N && "month" !== M
                ? Z.formatDistance("xYears", 1, y)
                : Z.formatDistance("xMonths", N, y);
            }
            if ("year" === h) {
              var R = v(E / 525600);
              return Z.formatDistance("xYears", R, y);
            }
            throw RangeError(
              "unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'"
            );
          })(r, Date.now(), e)
        );
      }
    },
  },
]);
//# sourceMappingURL=7665.f235c81abfebf195.js.map