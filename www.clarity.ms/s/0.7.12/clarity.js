/* clarity-js v0.7.12: https://github.com/microsoft/clarity (License: MIT) */
!(function () {
  "use strict";
  var t = Object.freeze({
      __proto__: null,
      get queue() {
        return qa;
      },
      get start() {
        return Ha;
      },
      get stop() {
        return Wa;
      },
      get track() {
        return ja;
      },
    }),
    e = Object.freeze({
      __proto__: null,
      get clone() {
        return ur;
      },
      get compute() {
        return cr;
      },
      get data() {
        return $a;
      },
      get keys() {
        return tr;
      },
      get reset() {
        return sr;
      },
      get start() {
        return ir;
      },
      get stop() {
        return dr;
      },
      get trigger() {
        return or;
      },
      get update() {
        return lr;
      },
    }),
    n = Object.freeze({
      __proto__: null,
      get check() {
        return mr;
      },
      get compute() {
        return yr;
      },
      get data() {
        return Qa;
      },
      get start() {
        return gr;
      },
      get stop() {
        return wr;
      },
      get trigger() {
        return br;
      },
    }),
    a = Object.freeze({
      __proto__: null,
      get compute() {
        return Mr;
      },
      get data() {
        return kr;
      },
      get log() {
        return xr;
      },
      get reset() {
        return Nr;
      },
      get start() {
        return Or;
      },
      get stop() {
        return Sr;
      },
      get updates() {
        return Er;
      },
    }),
    r = Object.freeze({
      __proto__: null,
      get callbacks() {
        return _r;
      },
      get clear() {
        return zr;
      },
      get consent() {
        return Lr;
      },
      get data() {
        return Tr;
      },
      get id() {
        return Ar;
      },
      get metadata() {
        return jr;
      },
      get save() {
        return Rr;
      },
      get shortid() {
        return Wr;
      },
      get start() {
        return Cr;
      },
      get stop() {
        return Dr;
      },
    }),
    i = Object.freeze({
      __proto__: null,
      get data() {
        return Vr;
      },
      get envelope() {
        return Gr;
      },
      get start() {
        return Fr;
      },
      get stop() {
        return Jr;
      },
    }),
    o = {
      projectId: null,
      delay: 1e3,
      lean: !1,
      track: !0,
      content: !0,
      drop: [],
      mask: [],
      unmask: [],
      regions: [],
      cookies: [],
      fraud: !0,
      checksum: [],
      report: null,
      upload: null,
      fallback: null,
      upgrade: null,
      action: null,
      dob: null,
    };
  function u(t) {
    return window.Zone && "__symbol__" in window.Zone
      ? window.Zone.__symbol__(t)
      : t;
  }
  var c = 0;
  function s(t) {
    void 0 === t && (t = null);
    var e = t && t.timeStamp > 0 ? t.timeStamp : performance.now();
    return Math.max(Math.round(e - c), 0);
  }
  var l = "0.7.12";
  function d(t, e) {
    void 0 === e && (e = null);
    for (var n, a = 5381, r = a, i = 0; i < t.length; i += 2) {
      if (((a = ((a << 5) + a) ^ t.charCodeAt(i)), i + 1 < t.length))
        r = ((r << 5) + r) ^ t.charCodeAt(i + 1);
    }
    return (
      (n = Math.abs(a + 11579 * r)), (e ? n % Math.pow(2, e) : n).toString(36)
    );
  }
  var f = /\S/gi,
    h = !0,
    p = null,
    v = null,
    g = null;
  function m(t, e, n, a) {
    if ((void 0 === a && (a = !1), t))
      switch (n) {
        case 0:
          return t;
        case 1:
          switch (e) {
            case "*T":
            case "value":
            case "placeholder":
            case "click":
              return (function (t) {
                var e = -1,
                  n = 0,
                  a = !1,
                  r = !1,
                  i = !1,
                  o = null;
                O();
                for (var u = 0; u < t.length; u++) {
                  var c = t.charCodeAt(u);
                  if (
                    ((a = a || (c >= 48 && c <= 57)),
                    (r = r || 64 === c),
                    (i = 9 === c || 10 === c || 13 === c || 32 === c),
                    0 === u || u === t.length - 1 || i)
                  ) {
                    if (a || r) {
                      null === o && (o = t.split(""));
                      var s = t.substring(e + 1, i ? u : u + 1);
                      (s =
                        h && null !== g
                          ? s.match(g)
                            ? s
                            : k(s, "▪", "▫")
                          : w(s)),
                        o.splice(e + 1 - n, s.length, s),
                        (n += s.length - 1);
                    }
                    i && ((a = !1), (r = !1), (e = u));
                  }
                }
                return o ? o.join("") : t;
              })(t);
            case "input":
            case "change":
              return E(t);
          }
          return t;
        case 2:
        case 3:
          switch (e) {
            case "*T":
            case "data-":
              return a ? y(t) : w(t);
            case "src":
            case "srcset":
            case "title":
            case "alt":
              return 3 === n ? "" : t;
            case "value":
            case "click":
            case "input":
            case "change":
              return E(t);
            case "placeholder":
              return w(t);
          }
          break;
        case 4:
          switch (e) {
            case "*T":
            case "data-":
              return a ? y(t) : w(t);
            case "value":
            case "input":
            case "click":
            case "change":
              return Array(5).join("•");
            case "checksum":
              return "";
          }
          break;
        case 5:
          switch (e) {
            case "*T":
            case "data-":
              return k(t, "▪", "▫");
            case "value":
            case "input":
            case "click":
            case "change":
              return Array(5).join("•");
            case "checksum":
            case "src":
            case "srcset":
            case "alt":
            case "title":
              return "";
          }
      }
    return t;
  }
  function b(t, e) {
    if ((void 0 === e && (e = !1), e))
      return "".concat("https://").concat("Electron");
    var n = o.drop;
    if (n && n.length > 0 && t && t.indexOf("?") > 0) {
      var a = t.split("?"),
        r = a[0],
        i = a[1];
      return (
        r +
        "?" +
        i
          .split("&")
          .map(function (t) {
            return n.some(function (e) {
              return 0 === t.indexOf("".concat(e, "="));
            })
              ? "".concat(t.split("=")[0], "=").concat("*na*")
              : t;
          })
          .join("&")
      );
    }
    return t;
  }
  function y(t) {
    var e = t.trim();
    if (e.length > 0) {
      var n = e[0],
        a = t.indexOf(n),
        r = t.substr(0, a),
        i = t.substr(a + e.length);
      return "".concat(r).concat(e.length.toString(36)).concat(i);
    }
    return t;
  }
  function w(t) {
    return t.replace(f, "•");
  }
  function k(t, e, n) {
    return O(), t ? t.replace(v, e).replace(p, n) : t;
  }
  function E(t) {
    for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++)
      n += a > 0 && a % 5 == 0 ? " " : "•";
    return n;
  }
  function O() {
    if (h && null === p)
      try {
        (p = new RegExp("\\p{N}", "gu")),
          (v = new RegExp("\\p{L}", "gu")),
          (g = new RegExp("\\p{Sc}", "gu"));
      } catch (t) {
        h = !1;
      }
  }
  var S = null,
    x = null,
    M = !1;
  function N() {
    M &&
      (S = {
        time: s(),
        event: 4,
        data: {
          visible: x.visible,
          docWidth: x.docWidth,
          docHeight: x.docHeight,
          screenWidth: x.screenWidth,
          screenHeight: x.screenHeight,
          scrollX: x.scrollX,
          scrollY: x.scrollY,
          pointerX: x.pointerX,
          pointerY: x.pointerY,
          activityTime: x.activityTime,
        },
      }),
      (x = x || {
        visible: 1,
        docWidth: 0,
        docHeight: 0,
        screenWidth: 0,
        screenHeight: 0,
        scrollX: 0,
        scrollY: 0,
        pointerX: 0,
        pointerY: 0,
        activityTime: 0,
      });
  }
  function T(t, e, n) {
    switch (t) {
      case 8:
        (x.docWidth = e), (x.docHeight = n);
        break;
      case 11:
        (x.screenWidth = e), (x.screenHeight = n);
        break;
      case 10:
        (x.scrollX = e), (x.scrollY = n);
        break;
      default:
        (x.pointerX = e), (x.pointerY = n);
    }
    M = !0;
  }
  function _(t) {
    x.activityTime = t;
  }
  function I(t, e) {
    (x.visible = "visible" === e ? 1 : 0), x.visible || _(t), (M = !0);
  }
  function C() {
    M && vr(4);
  }
  var D = Object.freeze({
      __proto__: null,
      activity: _,
      compute: C,
      reset: N,
      start: function () {
        (M = !1), N();
      },
      get state() {
        return S;
      },
      stop: function () {
        N();
      },
      track: T,
      visibility: I,
    }),
    j = null;
  function A(t, e) {
    hi() &&
      t &&
      e &&
      "string" == typeof t &&
      "string" == typeof e &&
      t.length < 255 &&
      e.length < 255 &&
      ((j = { key: t, value: e }), vr(24));
  }
  var L,
    z = null,
    R = null;
  function H(t) {
    t in z || (z[t] = 0), t in R || (R[t] = 0), z[t]++, R[t]++;
  }
  function q(t, e) {
    null !== e &&
      (t in z || (z[t] = 0), t in R || (R[t] = 0), (z[t] += e), (R[t] += e));
  }
  function W(t, e) {
    null !== e &&
      !1 === isNaN(e) &&
      (t in z || (z[t] = 0),
      (e > z[t] || 0 === z[t]) && ((R[t] = e), (z[t] = e)));
  }
  function Y(t, e, n) {
    return window.setTimeout(Qr(t), e, n);
  }
  function X(t) {
    return window.clearTimeout(t);
  }
  var P = 0,
    U = 0,
    B = null;
  function V() {
    B && X(B), (B = Y(F, U)), (P = s());
  }
  function F() {
    var t = s();
    (L = { gap: t - P }),
      vr(25),
      L.gap < 3e5
        ? (B = Y(F, U))
        : li &&
          (A("clarity", "suspend"),
          _i(),
          ["mousemove", "touchstart"].forEach(function (t) {
            return ti(document, t, vi);
          }),
          ["resize", "scroll", "pageshow"].forEach(function (t) {
            return ti(window, t, vi);
          }));
  }
  var J = Object.freeze({
      __proto__: null,
      get data() {
        return L;
      },
      reset: V,
      start: function () {
        (U = 6e4), (P = 0);
      },
      stop: function () {
        X(B), (P = 0), (U = 0);
      },
    }),
    G = null;
  function Z(t, e) {
    if (t in G) {
      var n = G[t],
        a = n[n.length - 1];
      e - a[0] > 100 ? G[t].push([e, 0]) : (a[1] = e - a[0]);
    } else G[t] = [[e, 0]];
  }
  function K() {
    vr(36);
  }
  function Q() {
    G = {};
  }
  var $ = Object.freeze({
      __proto__: null,
      compute: K,
      get data() {
        return G;
      },
      reset: Q,
      start: function () {
        G = {};
      },
      stop: function () {
        G = {};
      },
      track: Z,
    }),
    tt = null;
  function et(t) {
    hi() &&
      o.lean &&
      ((o.lean = !1),
      (tt = { key: t }),
      Rr(),
      o.upgrade && o.upgrade(t),
      vr(3));
  }
  var nt = Object.freeze({
    __proto__: null,
    get data() {
      return tt;
    },
    start: function () {
      !o.lean && o.upgrade && o.upgrade("Config"), (tt = null);
    },
    stop: function () {
      tt = null;
    },
    upgrade: et,
  });
  function at(t, e, n, a) {
    return new (n || (n = Promise))(function (r, i) {
      function o(t) {
        try {
          c(a.next(t));
        } catch (t) {
          i(t);
        }
      }
      function u(t) {
        try {
          c(a.throw(t));
        } catch (t) {
          i(t);
        }
      }
      function c(t) {
        var e;
        t.done
          ? r(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(o, u);
      }
      c((a = a.apply(t, e || [])).next());
    });
  }
  function rt(t, e) {
    var n,
      a,
      r,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: u(0), throw: u(1), return: u(2) }),
      "function" == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function u(u) {
      return function (c) {
        return (function (u) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; i && ((i = 0), u[0] && (o = 0)), o; )
            try {
              if (
                ((n = 1),
                a &&
                  (r =
                    2 & u[0]
                      ? a.return
                      : u[0]
                      ? a.throw || ((r = a.return) && r.call(a), 0)
                      : a.next) &&
                  !(r = r.call(a, u[1])).done)
              )
                return r;
              switch (((a = 0), r && (u = [2 & u[0], r.value]), u[0])) {
                case 0:
                case 1:
                  r = u;
                  break;
                case 4:
                  return o.label++, { value: u[1], done: !1 };
                case 5:
                  o.label++, (a = u[1]), (u = [0]);
                  continue;
                case 7:
                  (u = o.ops.pop()), o.trys.pop();
                  continue;
                default:
                  if (
                    !((r = o.trys),
                    (r = r.length > 0 && r[r.length - 1]) ||
                      (6 !== u[0] && 2 !== u[0]))
                  ) {
                    o = 0;
                    continue;
                  }
                  if (3 === u[0] && (!r || (u[1] > r[0] && u[1] < r[3]))) {
                    o.label = u[1];
                    break;
                  }
                  if (6 === u[0] && o.label < r[1]) {
                    (o.label = r[1]), (r = u);
                    break;
                  }
                  if (r && o.label < r[2]) {
                    (o.label = r[2]), o.ops.push(u);
                    break;
                  }
                  r[2] && o.ops.pop(), o.trys.pop();
                  continue;
              }
              u = e.call(t, o);
            } catch (t) {
              (u = [6, t]), (a = 0);
            } finally {
              n = r = 0;
            }
          if (5 & u[0]) throw u[1];
          return { value: u[0] ? u[1] : void 0, done: !0 };
        })([u, c]);
      };
    }
  }
  var it = null;
  function ot(t, e) {
    ct(t, "string" == typeof e ? [e] : e);
  }
  function ut(t, e, n, a) {
    return (
      void 0 === e && (e = null),
      void 0 === n && (n = null),
      void 0 === a && (a = null),
      at(this, void 0, void 0, function () {
        var r, i;
        return rt(this, function (o) {
          switch (o.label) {
            case 0:
              return (i = {}), [4, dt(t)];
            case 1:
              return (
                (i.userId = o.sent()),
                (i.userHint =
                  a ||
                  ((u = t) && u.length >= 5
                    ? ""
                        .concat(u.substring(0, 2))
                        .concat(k(u.substring(2), "*", "*"))
                    : k(u, "*", "*"))),
                ct("userId", [(r = i).userId]),
                ct("userHint", [r.userHint]),
                ct("userType", [ft(t)]),
                e && (ct("sessionId", [e]), (r.sessionId = e)),
                n && (ct("pageId", [n]), (r.pageId = n)),
                [2, r]
              );
          }
          var u;
        });
      })
    );
  }
  function ct(t, e) {
    if (hi() && t && e && "string" == typeof t && t.length < 255) {
      for (var n = (t in it) ? it[t] : [], a = 0; a < e.length; a++)
        "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
      it[t] = n;
    }
  }
  function st() {
    vr(34);
  }
  function lt() {
    it = {};
  }
  function dt(t) {
    return at(this, void 0, void 0, function () {
      var e;
      return rt(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              n.trys.push([0, 4, , 5]),
              crypto && t
                ? [
                    4,
                    crypto.subtle.digest(
                      "SHA-256",
                      new TextEncoder().encode(t)
                    ),
                  ]
                : [3, 2]
            );
          case 1:
            return (
              (e = n.sent()),
              [
                2,
                Array.prototype.map
                  .call(new Uint8Array(e), function (t) {
                    return ("00" + t.toString(16)).slice(-2);
                  })
                  .join(""),
              ]
            );
          case 2:
            return [2, ""];
          case 3:
            return [3, 5];
          case 4:
            return n.sent(), [2, ""];
          case 5:
            return [2];
        }
      });
    });
  }
  function ft(t) {
    return t && t.indexOf("@") > 0 ? "email" : "string";
  }
  var ht = "CompressionStream" in window;
  function pt(t) {
    return at(this, void 0, void 0, function () {
      var e, n;
      return rt(this, function (a) {
        switch (a.label) {
          case 0:
            return (
              a.trys.push([0, 3, , 4]),
              ht
                ? ((e = new ReadableStream({
                    start: function (e) {
                      return at(this, void 0, void 0, function () {
                        return rt(this, function (n) {
                          return e.enqueue(t), e.close(), [2];
                        });
                      });
                    },
                  })
                    .pipeThrough(new TextEncoderStream())
                    .pipeThrough(new window.CompressionStream("gzip"))),
                  (n = Uint8Array.bind),
                  [4, vt(e)])
                : [3, 2]
            );
          case 1:
            return [2, new (n.apply(Uint8Array, [void 0, a.sent()]))()];
          case 2:
            return [3, 4];
          case 3:
            return a.sent(), [3, 4];
          case 4:
            return [2, null];
        }
      });
    });
  }
  function vt(t) {
    return at(this, void 0, void 0, function () {
      var e, n, a, r, i;
      return rt(this, function (o) {
        switch (o.label) {
          case 0:
            (e = t.getReader()), (n = []), (a = !1), (r = []), (o.label = 1);
          case 1:
            return a ? [3, 3] : [4, e.read()];
          case 2:
            return (
              (i = o.sent()),
              (a = i.done),
              (r = i.value),
              a ? [2, n] : (n.push.apply(n, r), [3, 1])
            );
          case 3:
            return [2, n];
        }
      });
    });
  }
  var gt = [
    D,
    a,
    Object.freeze({
      __proto__: null,
      compute: st,
      get data() {
        return it;
      },
      identify: ut,
      reset: lt,
      set: ot,
      start: function () {
        lt();
      },
      stop: function () {
        lt();
      },
    }),
    n,
    $,
    r,
    i,
    t,
    J,
    nt,
    e,
  ];
  function mt() {
    (z = {}),
      (R = {}),
      H(5),
      gt.forEach(function (t) {
        return Qr(t.start)();
      });
  }
  function bt() {
    gt
      .slice()
      .reverse()
      .forEach(function (t) {
        return Qr(t.stop)();
      }),
      (z = {}),
      (R = {});
  }
  function yt() {
    st(), C(), Mr(), vr(0), K(), yr(), cr();
  }
  var wt,
    kt = [];
  function Et(t, e, n) {
    o.fraud &&
      null !== t &&
      n &&
      n.length >= 5 &&
      ((wt = { id: t, target: e, checksum: d(n, 24) }),
      kt.indexOf(wt.checksum) < 0 && (kt.push(wt.checksum), Ja(41)));
  }
  var Ot = "load,active,fixed,visible,focus,show,collaps,animat".split(","),
    St = {};
  function xt(t, e) {
    var n = t.attributes,
      a = t.prefix ? t.prefix[e] : null,
      r =
        0 === e
          ? "".concat("~").concat(t.position - 1)
          : ":nth-of-type(".concat(t.position, ")");
    switch (t.tag) {
      case "STYLE":
      case "TITLE":
      case "LINK":
      case "META":
      case "*T":
      case "*D":
        return "";
      case "HTML":
        return "HTML";
      default:
        if (null === a) return "";
        (a = "".concat(a).concat(">")),
          (t.tag =
            0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag);
        var i = "".concat(a).concat(t.tag).concat(r),
          o = "id" in n && n.id.length > 0 ? n.id : null,
          u =
            "BODY" !== t.tag && "class" in n && n.class.length > 0
              ? n.class
                  .trim()
                  .split(/\s+/)
                  .filter(function (t) {
                    return Mt(t);
                  })
                  .join(".")
              : null;
        if (u && u.length > 0)
          if (0 === e) {
            var c = ""
              .concat(
                (function (t) {
                  for (var e = t.split(">"), n = 0; n < e.length; n++) {
                    var a = e[n].indexOf("~"),
                      r = e[n].indexOf(".");
                    e[n] = e[n].substring(
                      0,
                      r > 0 ? r : a > 0 ? a : e[n].length
                    );
                  }
                  return e.join(">");
                })(a)
              )
              .concat(t.tag)
              .concat(".")
              .concat(u);
            c in St || (St[c] = []),
              St[c].indexOf(t.id) < 0 && St[c].push(t.id),
              (i = "".concat(c).concat("~").concat(St[c].indexOf(t.id)));
          } else i = "".concat(a).concat(t.tag, ".").concat(u).concat(r);
        return (
          (i =
            o && Mt(o)
              ? ""
                  .concat(
                    (function (t) {
                      var e = t.lastIndexOf("*S"),
                        n = t.lastIndexOf("".concat("iframe:").concat("HTML")),
                        a = Math.max(e, n);
                      if (a < 0) return "";
                      return t.substring(0, t.indexOf(">", a) + 1);
                    })(a)
                  )
                  .concat("#")
                  .concat(o)
              : i),
          i
        );
    }
  }
  function Mt(t) {
    if (!t) return !1;
    if (
      Ot.some(function (e) {
        return t.toLowerCase().indexOf(e) >= 0;
      })
    )
      return !1;
    for (var e = 0; e < t.length; e++) {
      var n = t.charCodeAt(e);
      if (n >= 48 && n <= 57) return !1;
    }
    return !0;
  }
  var Nt = 1,
    Tt = [],
    _t = [],
    It = [],
    Ct = {},
    Dt = [],
    jt = [],
    At = [],
    Lt = [],
    zt = [],
    Rt = [],
    Ht = null,
    qt = null,
    Wt = null,
    Yt = null;
  function Xt() {
    Ut(), Bt(document, !0);
  }
  function Pt() {
    Ut();
  }
  function Ut() {
    (Nt = 1),
      (Tt = []),
      (_t = []),
      (It = []),
      (Ct = {}),
      (Dt = []),
      (jt = []),
      (At = "address,password,contact".split(",")),
      (Lt = "password,secret,pass,social,ssn,code,hidden".split(",")),
      (zt = "radio,checkbox,range,button,reset,submit".split(",")),
      (Rt = "INPUT,SELECT,TEXTAREA".split(",")),
      (Ht = new WeakMap()),
      (qt = new WeakMap()),
      (Wt = new WeakMap()),
      (Yt = new WeakMap()),
      (St = {});
  }
  function Bt(t, e) {
    void 0 === e && (e = !1);
    try {
      e &&
        o.unmask.forEach(function (t) {
          return t.indexOf("!") < 0 ? jt.push(t) : Dt.push(t.substr(1));
        }),
        "querySelectorAll" in t &&
          (o.regions.forEach(function (e) {
            return t.querySelectorAll(e[1]).forEach(function (t) {
              return Ve(t, "".concat(e[0]));
            });
          }),
          o.mask.forEach(function (e) {
            return t.querySelectorAll(e).forEach(function (t) {
              return Wt.set(t, 3);
            });
          }),
          o.checksum.forEach(function (e) {
            return t.querySelectorAll(e[1]).forEach(function (t) {
              return Yt.set(t, e[0]);
            });
          }),
          jt.forEach(function (e) {
            return t.querySelectorAll(e).forEach(function (t) {
              return Wt.set(t, 0);
            });
          }));
    } catch (t) {
      Ka(5, 1, t ? t.name : null);
    }
  }
  function Vt(t, e) {
    if ((void 0 === e && (e = !1), null === t)) return null;
    var n = Ht.get(t);
    return !n && e && ((n = Nt++), Ht.set(t, n)), n || null;
  }
  function Ft(t) {
    var e = !1;
    if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
      var n = t;
      try {
        n.contentDocument && (qt.set(n.contentDocument, n), (e = !0));
      } catch (t) {}
    }
    return e;
  }
  function Jt(t) {
    var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
    return e && qt.has(e) ? qt.get(e) : null;
  }
  function Gt(t, e, n) {
    if ("object" == typeof t[n] && "object" == typeof e[n]) {
      for (var a in t[n]) if (t[n][a] !== e[n][a]) return !0;
      for (var a in e[n]) if (e[n][a] !== t[n][a]) return !0;
      return !1;
    }
    return t[n] !== e[n];
  }
  function Zt(t) {
    var e = t.parent && t.parent in _t ? _t[t.parent] : null,
      n = e ? e.selector : null,
      a = t.data,
      r = (function (t, e) {
        e.metadata.position = 1;
        for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0; ) {
          var a = _t[t.children[n]];
          if (e.data.tag === a.data.tag) {
            e.metadata.position = a.metadata.position + 1;
            break;
          }
        }
        return e.metadata.position;
      })(e, t),
      i = {
        id: t.id,
        tag: a.tag,
        prefix: n,
        position: r,
        attributes: a.attributes,
      };
    (t.selector = [xt(i, 0), xt(i, 1)]),
      (t.hash = t.selector.map(function (t) {
        return t ? d(t) : null;
      })),
      t.hash.forEach(function (e) {
        return (Ct[e] = t.id);
      });
  }
  function Kt(t) {
    var e = Qt(te(t));
    return null !== e && null !== e.textContent
      ? e.textContent.substr(0, 25)
      : "";
  }
  function Qt(t) {
    return t in Tt ? Tt[t] : null;
  }
  function $t(t) {
    var e = Vt(t);
    return e in _t ? _t[e] : null;
  }
  function te(t) {
    return t in Ct ? Ct[t] : null;
  }
  function ee(t) {
    return Vt(t) in Tt;
  }
  function ne() {
    for (var t = [], e = 0, n = It; e < n.length; e++) {
      var a = n[e];
      a in _t && t.push(_t[a]);
    }
    return (It = []), t;
  }
  function ae(t) {
    for (var e = null; null === e && t.previousSibling; )
      (e = Vt(t.previousSibling)), (t = t.previousSibling);
    return e;
  }
  function re(t, e, n, a) {
    void 0 === n && (n = !0), void 0 === a && (a = !1);
    var r = It.indexOf(t);
    r >= 0 && 1 === e && a
      ? (It.splice(r, 1), It.push(t))
      : -1 === r && n && It.push(t);
  }
  var ie = Object.freeze({
      __proto__: null,
      add: function (t, e, n, a) {
        var r,
          i = Vt(t, !0),
          u = e ? Vt(e) : null,
          c = ae(t),
          s = null,
          l = Fe(t) ? i : null,
          d = Yt.has(t) ? Yt.get(t) : null,
          f = o.content ? 1 : 3;
        u >= 0 &&
          _t[u] &&
          ((s = _t[u]).children.push(i),
          (l = null === l ? s.region : l),
          (d = null === d ? s.metadata.fraud : d),
          (f = s.metadata.privacy)),
          n.attributes &&
            "data-clarity-region" in n.attributes &&
            (Ve(t, n.attributes["data-clarity-region"]), (l = i)),
          (Tt[i] = t),
          (_t[i] = {
            id: i,
            parent: u,
            previous: c,
            children: [],
            data: n,
            selector: null,
            hash: null,
            region: l,
            metadata: {
              active: !0,
              suspend: !1,
              privacy: f,
              position: null,
              fraud: d,
              size: null,
            },
          }),
          (function (t, e, n) {
            var a = e.data,
              r = e.metadata,
              i = r.privacy,
              o = a.attributes || {},
              u = a.tag.toUpperCase();
            switch (!0) {
              case Rt.indexOf(u) >= 0:
                var c = o.type,
                  s = "";
                Object.keys(o).forEach(function (t) {
                  return (s += o[t].toLowerCase());
                });
                var l = Lt.some(function (t) {
                  return s.indexOf(t) >= 0;
                });
                r.privacy = "INPUT" === u && zt.indexOf(c) >= 0 ? i : l ? 4 : 2;
                break;
              case "data-clarity-mask" in o:
                r.privacy = 3;
                break;
              case "data-clarity-unmask" in o:
                r.privacy = 0;
                break;
              case Wt.has(t):
                r.privacy = Wt.get(t);
                break;
              case Yt.has(t):
                r.privacy = 2;
                break;
              case "*T" === u:
                var d = n && n.data ? n.data.tag : "",
                  f = n && n.selector ? n.selector[1] : "",
                  h = ["STYLE", "TITLE", "svg:style"];
                r.privacy =
                  h.includes(d) ||
                  Dt.some(function (t) {
                    return f.indexOf(t) >= 0;
                  })
                    ? 0
                    : i;
                break;
              case 1 === i:
                r.privacy = (function (t, e, n) {
                  if (
                    t &&
                    e.some(function (e) {
                      return t.indexOf(e) >= 0;
                    })
                  )
                    return 2;
                  return n.privacy;
                })(o.class, At, r);
            }
          })(t, _t[i], s),
          Zt(_t[i]),
          "IMG" === (r = _t[i]).data.tag &&
            3 === r.metadata.privacy &&
            (r.metadata.size = []),
          re(i, a);
      },
      get: $t,
      getId: Vt,
      getNode: Qt,
      getValue: function (t) {
        return t in _t ? _t[t] : null;
      },
      has: ee,
      hashText: Kt,
      iframe: Jt,
      lookup: te,
      parse: Bt,
      sameorigin: Ft,
      start: Xt,
      stop: Pt,
      update: function (t, e, n, a) {
        var r = Vt(t),
          i = e ? Vt(e) : null,
          o = ae(t),
          u = !1,
          c = !1;
        if (r in _t) {
          var s = _t[r];
          if (
            ((s.metadata.active = !0),
            s.previous !== o && ((u = !0), (s.previous = o)),
            s.parent !== i)
          ) {
            u = !0;
            var l = s.parent;
            if (((s.parent = i), null !== i && i >= 0)) {
              var d = null === o ? 0 : _t[i].children.indexOf(o) + 1;
              _t[i].children.splice(d, 0, r),
                (s.region = Fe(t) ? r : _t[i].region);
            } else
              !(function (t, e) {
                if (t in _t) {
                  var n = _t[t];
                  (n.metadata.active = !1), (n.parent = null), re(t, e);
                }
              })(r, a);
            if (null !== l && l >= 0) {
              var f = _t[l].children.indexOf(r);
              f >= 0 && _t[l].children.splice(f, 1);
            }
            c = !0;
          }
          for (var h in n) Gt(s.data, n, h) && ((u = !0), (s.data[h] = n[h]));
          Zt(s), re(r, a, u, c);
        }
      },
      updates: ne,
    }),
    oe = 5e3,
    ue = {},
    ce = [],
    se = null,
    le = null,
    de = null;
  function fe() {
    (ue = {}), (ce = []), (se = null), (le = null);
  }
  function he(t, e) {
    return (
      void 0 === e && (e = 0),
      at(this, void 0, void 0, function () {
        var n, a, r;
        return rt(this, function (i) {
          for (n = 0, a = ce; n < a.length; n++)
            if (a[n].task === t) return [2];
          return (
            (r = new Promise(function (n) {
              ce[1 === e ? "unshift" : "push"]({
                task: t,
                resolve: n,
                id: Ar(),
              });
            })),
            null === se && null === le && pe(),
            [2, r]
          );
        });
      })
    );
  }
  function pe() {
    var t = ce.shift();
    t &&
      ((se = t),
      t
        .task()
        .then(function () {
          t.id === Ar() && (t.resolve(), (se = null), pe());
        })
        .catch(function (e) {
          t.id === Ar() &&
            (e && Ka(0, 1, e.name, e.message, e.stack), (se = null), pe());
        }));
  }
  function ve(t) {
    var e = ye(t);
    return e in ue
      ? performance.now() - ue[e].start > ue[e].yield
        ? 0
        : 1
      : 2;
  }
  function ge(t) {
    ue[ye(t)] = { start: performance.now(), calls: 0, yield: 30 };
  }
  function me(t) {
    var e = performance.now(),
      n = ye(t),
      a = e - ue[n].start;
    q(t.cost, a), H(5), ue[n].calls > 0 && q(4, a);
  }
  function be(t) {
    return at(this, void 0, void 0, function () {
      var e, n;
      return rt(this, function (a) {
        switch (a.label) {
          case 0:
            return (e = ye(t)) in ue ? (me(t), (n = ue[e]), [4, we()]) : [3, 2];
          case 1:
            (n.yield = a.sent().timeRemaining()),
              (function (t) {
                var e = ye(t);
                if (ue && ue[e]) {
                  var n = ue[e].calls,
                    a = ue[e].yield;
                  ge(t), (ue[e].calls = n + 1), (ue[e].yield = a);
                }
              })(t),
              (a.label = 2);
          case 2:
            return [2, e in ue ? 1 : 2];
        }
      });
    });
  }
  function ye(t) {
    return "".concat(t.id, ".").concat(t.cost);
  }
  function we() {
    return at(this, void 0, void 0, function () {
      return rt(this, function (t) {
        switch (t.label) {
          case 0:
            return le ? [4, le] : [3, 2];
          case 1:
            t.sent(), (t.label = 2);
          case 2:
            return [
              2,
              new Promise(function (t) {
                Ee(t, { timeout: oe });
              }),
            ];
        }
      });
    });
  }
  var ke,
    Ee =
      window.requestIdleCallback ||
      function (t, e) {
        var n = performance.now(),
          a = new MessageChannel(),
          r = a.port1,
          i = a.port2;
        (r.onmessage = function (a) {
          var r = performance.now(),
            o = r - n,
            u = r - a.data;
          if (u > 30 && o < e.timeout)
            requestAnimationFrame(function () {
              i.postMessage(r);
            });
          else {
            var c = o > e.timeout;
            t({
              didTimeout: c,
              timeRemaining: function () {
                return c ? 30 : Math.max(0, 30 - u);
              },
            });
          }
        }),
          requestAnimationFrame(function () {
            i.postMessage(performance.now());
          });
      };
  function Oe() {
    ke = null;
  }
  function Se() {
    var t = document.body,
      e = document.documentElement,
      n = t ? t.clientWidth : null,
      a = t ? t.scrollWidth : null,
      r = t ? t.offsetWidth : null,
      i = e ? e.clientWidth : null,
      o = e ? e.scrollWidth : null,
      u = e ? e.offsetWidth : null,
      c = Math.max(n, a, r, i, o, u),
      s = t ? t.clientHeight : null,
      l = t ? t.scrollHeight : null,
      d = t ? t.offsetHeight : null,
      f = e ? e.clientHeight : null,
      h = e ? e.scrollHeight : null,
      p = e ? e.offsetHeight : null,
      v = Math.max(s, l, d, f, h, p);
    (null !== ke && c === ke.width && v === ke.height) ||
      null === c ||
      null === v ||
      ((ke = { width: c, height: v }), ze(8));
  }
  var xe = [],
    Me = null,
    Ne = null,
    Te = null,
    _e = null,
    Ie = "clarityAnimationId",
    Ce = "clarityOperationCount",
    De = 20;
  function je() {
    xe = [];
  }
  function Ae(t, e, n, a, r, i, o) {
    xe.push({
      time: t,
      event: 44,
      data: {
        id: e,
        operation: n,
        keyFrames: a,
        timing: r,
        targetId: i,
        timeline: o,
      },
    }),
      ze(44);
  }
  function Le(t, e) {
    null === t &&
      ((t = Animation.prototype[e]),
      (Animation.prototype[e] = function () {
        if (hi()) {
          if (!this[Ie]) {
            (this[Ie] = Wr()), (this[Ce] = 0);
            var n = this.effect.getKeyframes(),
              a = this.effect.getTiming();
            Ae(
              s(),
              this[Ie],
              0,
              JSON.stringify(n),
              JSON.stringify(a),
              Vt(this.effect.target)
            );
          }
          if (this[Ce]++ < De) {
            var r = null;
            switch (e) {
              case "play":
                r = 1;
                break;
              case "pause":
                r = 2;
                break;
              case "cancel":
                r = 3;
                break;
              case "finish":
                r = 4;
            }
            r && Ae(s(), this[Ie], r);
          }
        }
        return t.apply(this, arguments);
      }));
  }
  function ze(t, e, n) {
    return (
      void 0 === e && (e = null),
      void 0 === n && (n = null),
      at(this, void 0, void 0, function () {
        var a,
          r,
          i,
          u,
          c,
          l,
          d,
          f,
          h,
          p,
          v,
          g,
          b,
          y,
          w,
          k,
          E,
          O,
          S,
          x,
          M,
          N,
          I,
          C,
          D;
        return rt(this, function (j) {
          switch (j.label) {
            case 0:
              switch (((a = n || s()), (r = [a, t]), t)) {
                case 8:
                  return [3, 1];
                case 7:
                  return [3, 2];
                case 44:
                  return [3, 3];
                case 5:
                case 6:
                  return [3, 4];
              }
              return [3, 11];
            case 1:
              return (
                (i = ke),
                r.push(i.width),
                r.push(i.height),
                T(t, i.width, i.height),
                qa(r),
                [3, 11]
              );
            case 2:
              for (u = 0, c = We; u < c.length; u++)
                (l = c[u]),
                  (r = [l.time, 7]).push(l.data.id),
                  r.push(l.data.interaction),
                  r.push(l.data.visibility),
                  r.push(l.data.name),
                  qa(r);
              return Qe(), [3, 11];
            case 3:
              for (d = 0, f = xe; d < f.length; d++)
                (h = f[d]),
                  (r = [h.time, h.event]).push(h.data.id),
                  r.push(h.data.operation),
                  r.push(h.data.keyFrames),
                  r.push(h.data.timing),
                  r.push(h.data.timeline),
                  r.push(h.data.targetId),
                  qa(r);
              return je(), [3, 11];
            case 4:
              if (2 === ve(e)) return [3, 11];
              if (!((p = ne()).length > 0)) return [3, 10];
              (v = 0), (g = p), (j.label = 5);
            case 5:
              return v < g.length
                ? ((b = g[v]), 0 !== (y = ve(e)) ? [3, 7] : [4, be(e)])
                : [3, 9];
            case 6:
              (y = j.sent()), (j.label = 7);
            case 7:
              if (2 === y) return [3, 9];
              for (
                w = b.data,
                  k = b.metadata.active,
                  E = b.metadata.suspend,
                  O = b.metadata.privacy,
                  S = (function (t) {
                    var e = t.metadata.privacy;
                    return "*T" === t.data.tag && !(0 === e || 1 === e);
                  })(b),
                  x = 0,
                  M = k ? ["tag", "attributes", "value"] : ["tag"];
                x < M.length;
                x++
              )
                if (w[(N = M[x])])
                  switch (N) {
                    case "tag":
                      (I = Re(b)),
                        (C = S ? -1 : 1),
                        r.push(b.id * C),
                        b.parent && k && r.push(b.parent),
                        b.previous && k && r.push(b.previous),
                        r.push(E ? "*M" : w[N]),
                        I &&
                          2 === I.length &&
                          r.push(
                            ""
                              .concat("#")
                              .concat(He(I[0]), ".")
                              .concat(He(I[1]))
                          );
                      break;
                    case "attributes":
                      for (D in w[N])
                        void 0 !== w[N][D] && r.push(qe(D, w[N][D], O));
                      break;
                    case "value":
                      Et(b.metadata.fraud, b.id, w[N]),
                        r.push(m(w[N], w.tag, O, S));
                  }
              j.label = 8;
            case 8:
              return v++, [3, 5];
            case 9:
              6 === t && _(a),
                qa(
                  (function (t) {
                    for (
                      var e = [], n = {}, a = 0, r = null, i = 0;
                      i < t.length;
                      i++
                    )
                      if ("string" == typeof t[i]) {
                        var o = t[i],
                          u = n[o] || -1;
                        u >= 0
                          ? r
                            ? r.push(u)
                            : ((r = [u]), e.push(r), a++)
                          : ((r = null), e.push(o), (n[o] = a++));
                      } else (r = null), e.push(t[i]), a++;
                    return e;
                  })(r),
                  !o.lean
                ),
                (j.label = 10);
            case 10:
              return [3, 11];
            case 11:
              return [2];
          }
        });
      })
    );
  }
  function Re(t) {
    if (null !== t.metadata.size && 0 === t.metadata.size.length) {
      var e = Qt(t.id);
      if (e)
        return [
          Math.floor(100 * e.offsetWidth),
          Math.floor(100 * e.offsetHeight),
        ];
    }
    return t.metadata.size;
  }
  function He(t) {
    return t.toString(36);
  }
  function qe(t, e, n) {
    return ""
      .concat(t, "=")
      .concat(m(e, 0 === t.indexOf("data-") ? "data-" : t, n));
  }
  var We = [],
    Ye = null,
    Xe = {},
    Pe = [],
    Ue = !1,
    Be = null;
  function Ve(t, e) {
    !1 === Ye.has(t) &&
      (Ye.set(t, e),
      (Be =
        null === Be && Ue
          ? new IntersectionObserver(Ge, {
              threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
            })
          : Be) &&
        t &&
        t.nodeType === Node.ELEMENT_NODE &&
        Be.observe(t));
  }
  function Fe(t) {
    return Ye && Ye.has(t);
  }
  function Je() {
    for (var t = [], e = 0, n = Pe; e < n.length; e++) {
      var a = n[e],
        r = Vt(a.node);
      r in Xe ||
        (r
          ? ((a.data.id = r), (Xe[r] = a.data), We.push(Ke(a.data)))
          : t.push(a));
    }
    (Pe = t), We.length > 0 && ze(7);
  }
  function Ge(t) {
    for (var e = 0, n = t; e < n.length; e++) {
      var a = n[e],
        r = a.target,
        i = a.boundingClientRect,
        o = a.intersectionRect,
        u = a.rootBounds;
      if (Ye.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
        var c = r ? Vt(r) : null,
          s =
            c in Xe
              ? Xe[c]
              : { id: c, name: Ye.get(r), interaction: 16, visibility: 0 },
          l =
            (o ? (o.width * o.height * 1) / (u.width * u.height) : 0) > 0.05 ||
            a.intersectionRatio > 0.8,
          d =
            (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
        Ze(r, s, s.interaction, d ? 13 : l ? 10 : 0),
          s.visibility >= 13 && Be && Be.unobserve(r);
      }
    }
    We.length > 0 && ze(7);
  }
  function Ze(t, e, n, a) {
    var r = n > e.interaction || a > e.visibility;
    (e.interaction = n > e.interaction ? n : e.interaction),
      (e.visibility = a > e.visibility ? a : e.visibility),
      e.id
        ? ((e.id in Xe && r) || !(e.id in Xe)) &&
          ((Xe[e.id] = e), We.push(Ke(e)))
        : Pe.push({ node: t, data: e });
  }
  function Ke(t) {
    return {
      time: s(),
      data: {
        id: t.id,
        interaction: t.interaction,
        visibility: t.visibility,
        name: t.name,
      },
    };
  }
  function Qe() {
    We = [];
  }
  var $e = [];
  function tn(t) {
    var e = Ea(t);
    if (e) {
      var n = e.value,
        a =
          n &&
          n.length >= 5 &&
          o.fraud &&
          -1 === "password,secret,pass,social,ssn,code,hidden".indexOf(e.type)
            ? d(n, 24)
            : "";
      $e.push({
        time: s(t),
        event: 42,
        data: { target: Ea(t), type: e.type, value: n, checksum: a },
      }),
        he(Sa.bind(this, 42));
    }
  }
  function en() {
    $e = [];
  }
  function nn(t) {
    var e = { x: 0, y: 0 };
    if (t && t.offsetParent)
      do {
        var n = t.offsetParent,
          a = null === n ? Jt(t.ownerDocument) : null;
        (e.x += t.offsetLeft), (e.y += t.offsetTop), (t = a || n);
      } while (t);
    return e;
  }
  var an = ["input", "textarea", "radio", "button", "canvas"],
    rn = [];
  function on(t) {
    ti(t, "click", un.bind(this, 9, t), !0);
  }
  function un(t, e, n) {
    var a = Jt(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i =
        "pageX" in n
          ? Math.round(n.pageX)
          : "clientX" in n
          ? Math.round(n.clientX + r.scrollLeft)
          : null,
      o =
        "pageY" in n
          ? Math.round(n.pageY)
          : "clientY" in n
          ? Math.round(n.clientY + r.scrollTop)
          : null;
    if (a) {
      var u = nn(a);
      (i = i ? i + Math.round(u.x) : i), (o = o ? o + Math.round(u.y) : o);
    }
    var c = Ea(n),
      l = (function (t) {
        for (; t && t !== document; ) {
          if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t;
            if ("A" === e.tagName) return e;
          }
          t = t.parentNode;
        }
        return null;
      })(c),
      d = (function (t) {
        var e = null,
          n = document.documentElement;
        if ("function" == typeof t.getBoundingClientRect) {
          var a = t.getBoundingClientRect();
          a &&
            a.width > 0 &&
            a.height > 0 &&
            (e = {
              x: Math.floor(
                a.left +
                  ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)
              ),
              y: Math.floor(
                a.top +
                  ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)
              ),
              w: Math.floor(a.width),
              h: Math.floor(a.height),
            });
        }
        return e;
      })(c);
    0 === n.detail &&
      d &&
      ((i = Math.round(d.x + d.w / 2)), (o = Math.round(d.y + d.h / 2)));
    var f = d ? Math.max(Math.floor(((i - d.x) / d.w) * 32767), 0) : 0,
      h = d ? Math.max(Math.floor(((o - d.y) / d.h) * 32767), 0) : 0;
    null !== i &&
      null !== o &&
      (rn.push({
        time: s(n),
        event: t,
        data: {
          target: c,
          x: i,
          y: o,
          eX: f,
          eY: h,
          button: n.button,
          reaction: sn(c),
          context: ln(l),
          text: cn(c),
          link: l ? l.href : null,
          hash: null,
          trust: n.isTrusted ? 1 : 0,
        },
      }),
      he(Sa.bind(this, t)));
  }
  function cn(t) {
    var e = null;
    if (t) {
      var n = t.textContent || t.value || t.alt;
      n && (e = n.replace(/\s+/g, " ").trim().substr(0, 25));
    }
    return e;
  }
  function sn(t) {
    if (t.nodeType === Node.ELEMENT_NODE) {
      var e = t.tagName.toLowerCase();
      if (an.indexOf(e) >= 0) return 0;
    }
    return 1;
  }
  function ln(t) {
    if (t && t.hasAttribute("target"))
      switch (t.getAttribute("target")) {
        case "_blank":
          return 1;
        case "_parent":
          return 2;
        case "_top":
          return 3;
      }
    return 0;
  }
  function dn() {
    rn = [];
  }
  var fn = [];
  function hn(t, e) {
    fn.push({ time: s(e), event: 38, data: { target: Ea(e), action: t } }),
      he(Sa.bind(this, 38));
  }
  function pn() {
    fn = [];
  }
  var vn = null,
    gn = [];
  function mn(t) {
    var e = Ea(t),
      n = $t(e);
    if (e && e.type && n) {
      var a = e.value;
      switch (e.type) {
        case "radio":
        case "checkbox":
          a = e.checked ? "true" : "false";
      }
      var r = { target: e, value: a };
      gn.length > 0 && gn[gn.length - 1].data.target === r.target && gn.pop(),
        gn.push({ time: s(t), event: 27, data: r }),
        X(vn),
        (vn = Y(bn, 1e3, 27));
    }
  }
  function bn(t) {
    he(Sa.bind(this, t));
  }
  function yn() {
    gn = [];
  }
  var wn,
    kn = [],
    En = null;
  function On(t, e, n) {
    var a = Jt(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i =
        "pageX" in n
          ? Math.round(n.pageX)
          : "clientX" in n
          ? Math.round(n.clientX + r.scrollLeft)
          : null,
      o =
        "pageY" in n
          ? Math.round(n.pageY)
          : "clientY" in n
          ? Math.round(n.clientY + r.scrollTop)
          : null;
    if (a) {
      var u = nn(a);
      (i = i ? i + Math.round(u.x) : i), (o = o ? o + Math.round(u.y) : o);
    }
    null !== i &&
      null !== o &&
      xn({ time: s(n), event: t, data: { target: Ea(n), x: i, y: o } });
  }
  function Sn(t, e, n) {
    var a = Jt(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i = n.changedTouches,
      o = s(n);
    if (i)
      for (var u = 0; u < i.length; u++) {
        var c = i[u],
          l = "clientX" in c ? Math.round(c.clientX + r.scrollLeft) : null,
          d = "clientY" in c ? Math.round(c.clientY + r.scrollTop) : null;
        (l = l && a ? l + Math.round(a.offsetLeft) : l),
          (d = d && a ? d + Math.round(a.offsetTop) : d),
          null !== l &&
            null !== d &&
            xn({ time: o, event: t, data: { target: Ea(n), x: l, y: d } });
      }
  }
  function xn(t) {
    switch (t.event) {
      case 12:
      case 15:
      case 19:
        var e = kn.length,
          n = e > 1 ? kn[e - 2] : null;
        n &&
          (function (t, e) {
            var n = t.data.x - e.data.x,
              a = t.data.y - e.data.y,
              r = Math.sqrt(n * n + a * a),
              i = e.time - t.time,
              o = e.data.target === t.data.target;
            return e.event === t.event && o && r < 20 && i < 25;
          })(n, t) &&
          kn.pop(),
          kn.push(t),
          X(En),
          (En = Y(Mn, 500, t.event));
        break;
      default:
        kn.push(t), Mn(t.event);
    }
  }
  function Mn(t) {
    he(Sa.bind(this, t));
  }
  function Nn() {
    kn = [];
  }
  function Tn() {
    var t = document.documentElement;
    (wn = {
      width:
        t && "clientWidth" in t
          ? Math.min(t.clientWidth, window.innerWidth)
          : window.innerWidth,
      height:
        t && "clientHeight" in t
          ? Math.min(t.clientHeight, window.innerHeight)
          : window.innerHeight,
    }),
      Sa(11);
  }
  function _n() {
    wn = null;
  }
  var In = [],
    Cn = null;
  function Dn(t) {
    void 0 === t && (t = null);
    var e = window,
      n = document.documentElement,
      a = t ? Ea(t) : n;
    if (a && a.nodeType === Node.DOCUMENT_NODE) {
      var r = Jt(a);
      (e = r ? r.contentWindow : e), (a = n = a.documentElement);
    }
    var i =
        a === n && "pageXOffset" in e
          ? Math.round(e.pageXOffset)
          : Math.round(a.scrollLeft),
      o =
        a === n && "pageYOffset" in e
          ? Math.round(e.pageYOffset)
          : Math.round(a.scrollTop),
      u = { time: s(t), event: 10, data: { target: a, x: i, y: o } };
    if ((null !== t || 0 !== i || 0 !== o) && null !== i && null !== o) {
      var c = In.length,
        l = c > 1 ? In[c - 2] : null;
      l &&
        (function (t, e) {
          var n = t.data.x - e.data.x,
            a = t.data.y - e.data.y;
          return n * n + a * a < 400 && e.time - t.time < 25;
        })(l, u) &&
        In.pop(),
        In.push(u),
        X(Cn),
        (Cn = Y(jn, 500, 10));
    }
  }
  function jn(t) {
    he(Sa.bind(this, t));
  }
  var An = null,
    Ln = null,
    zn = null;
  function Rn(t) {
    var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
    if (
      null !== e &&
      !(
        (null === e.anchorNode && null === e.focusNode) ||
        (e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)
      )
    ) {
      var n = An.start ? An.start : null;
      null !== Ln && null !== An.start && n !== e.anchorNode && (X(zn), Hn(21)),
        (An = {
          start: e.anchorNode,
          startOffset: e.anchorOffset,
          end: e.focusNode,
          endOffset: e.focusOffset,
        }),
        (Ln = e),
        X(zn),
        (zn = Y(Hn, 500, 21));
    }
  }
  function Hn(t) {
    he(Sa.bind(this, t));
  }
  function qn() {
    (Ln = null), (An = { start: 0, startOffset: 0, end: 0, endOffset: 0 });
  }
  var Wn,
    Yn,
    Xn = [];
  function Pn(t) {
    Xn.push({ time: s(t), event: 39, data: { target: Ea(t) } }),
      he(Sa.bind(this, 39));
  }
  function Un() {
    Xn = [];
  }
  function Bn(t) {
    (Wn = { name: t.type }), Sa(26, s(t)), _i();
  }
  function Vn() {
    Wn = null;
  }
  function Fn(t) {
    void 0 === t && (t = null),
      (Yn = {
        visible:
          "visibilityState" in document ? document.visibilityState : "default",
      }),
      Sa(28, s(t));
  }
  function Jn() {
    Yn = null;
  }
  function Gn(t) {
    !(function (t) {
      var e = Jt(t);
      ti(e ? e.contentWindow : t === document ? window : t, "scroll", Dn, !0);
    })(t),
      t.nodeType === Node.DOCUMENT_NODE &&
        (on(t),
        (function (t) {
          ti(t, "cut", hn.bind(this, 0), !0),
            ti(t, "copy", hn.bind(this, 1), !0),
            ti(t, "paste", hn.bind(this, 2), !0);
        })(t),
        (function (t) {
          ti(t, "mousedown", On.bind(this, 13, t), !0),
            ti(t, "mouseup", On.bind(this, 14, t), !0),
            ti(t, "mousemove", On.bind(this, 12, t), !0),
            ti(t, "wheel", On.bind(this, 15, t), !0),
            ti(t, "dblclick", On.bind(this, 16, t), !0),
            ti(t, "touchstart", Sn.bind(this, 17, t), !0),
            ti(t, "touchend", Sn.bind(this, 18, t), !0),
            ti(t, "touchmove", Sn.bind(this, 19, t), !0),
            ti(t, "touchcancel", Sn.bind(this, 20, t), !0);
        })(t),
        (function (t) {
          ti(t, "input", mn, !0);
        })(t),
        (function (t) {
          ti(t, "selectstart", Rn.bind(this, t), !0),
            ti(t, "selectionchange", Rn.bind(this, t), !0);
        })(t),
        (function (t) {
          ti(t, "change", tn, !0);
        })(t),
        (function (t) {
          ti(t, "submit", Pn, !0);
        })(t));
  }
  var Zn = Object.freeze({
      __proto__: null,
      observe: Gn,
      start: function () {
        (xa = []),
          Na(),
          dn(),
          pn(),
          Nn(),
          yn(),
          ti(window, "resize", Tn),
          Tn(),
          ti(document, "visibilitychange", Fn),
          Fn(),
          (In = []),
          Dn(),
          qn(),
          en(),
          Un(),
          ti(window, "pagehide", Bn);
      },
      stop: function () {
        (xa = []),
          Na(),
          dn(),
          pn(),
          X(En),
          kn.length > 0 && Mn(kn[kn.length - 1].event),
          X(vn),
          yn(),
          _n(),
          Jn(),
          X(Cn),
          (In = []),
          qn(),
          X(zn),
          en(),
          Un(),
          Vn();
      },
    }),
    Kn = /[^0-9\.]/g;
  function Qn(t) {
    for (var e = 0, n = Object.keys(t); e < n.length; e++) {
      var a = n[e],
        r = t[a];
      if ("@type" === a && "string" == typeof r)
        switch (
          (r =
            (r = r.toLowerCase()).indexOf("article") >= 0 ||
            r.indexOf("posting") >= 0
              ? "article"
              : r)
        ) {
          case "article":
          case "recipe":
            xr(5, t[a]), xr(8, t.creator), xr(18, t.headline);
            break;
          case "product":
            xr(5, t[a]),
              xr(10, t.name),
              xr(12, t.sku),
              t.brand && xr(6, t.brand.name);
            break;
          case "aggregaterating":
            t.ratingValue &&
              (W(11, $n(t.ratingValue, 100)),
              W(18, $n(t.bestRating)),
              W(19, $n(t.worstRating))),
              W(12, $n(t.ratingCount)),
              W(17, $n(t.reviewCount));
            break;
          case "person":
            xr(8, t.name);
            break;
          case "offer":
            xr(7, t.availability),
              xr(14, t.itemCondition),
              xr(13, t.priceCurrency),
              xr(12, t.sku),
              W(13, $n(t.price));
            break;
          case "brand":
            xr(6, t.name);
        }
      null !== r && "object" == typeof r && Qn(r);
    }
  }
  function $n(t, e) {
    if ((void 0 === e && (e = 1), null !== t))
      switch (typeof t) {
        case "number":
          return Math.round(t * e);
        case "string":
          return Math.round(parseFloat(t.replace(Kn, "")) * e);
      }
    return null;
  }
  var ta = [
      "title",
      "alt",
      "onload",
      "onfocus",
      "onerror",
      "data-drupal-form-submit-last",
    ],
    ea = /[\r\n]+/g;
  function na(t, e) {
    var n,
      a = null;
    if (2 === e && !1 === ee(t)) return a;
    0 !== e &&
      t.nodeType === Node.TEXT_NODE &&
      t.parentElement &&
      "STYLE" === t.parentElement.tagName &&
      (t = t.parentNode);
    var r = !1 === ee(t) ? "add" : "update",
      i = t.parentElement ? t.parentElement : null,
      o = t.ownerDocument !== document;
    switch (t.nodeType) {
      case Node.DOCUMENT_TYPE_NODE:
        i = o && t.parentNode ? Jt(t.parentNode) : i;
        var u = t,
          c = {
            tag: (o ? "iframe:" : "") + "*D",
            attributes: {
              name: u.name,
              publicId: u.publicId,
              systemId: u.systemId,
            },
          };
        ie[r](t, i, c, e);
        break;
      case Node.DOCUMENT_NODE:
        t === document && Bt(document), aa(t);
        break;
      case Node.DOCUMENT_FRAGMENT_NODE:
        var s = t;
        if (s.host)
          if (
            (Bt(s),
            "function" === typeof s.constructor &&
              s.constructor.toString().indexOf("[native code]") >= 0)
          ) {
            aa(s);
            for (
              var l = "",
                d = 0,
                f = ("adoptedStyleSheets" in s) ? s.adoptedStyleSheets : [];
              d < f.length;
              d++
            ) {
              l += ia(f[d]);
            }
            var h = { tag: "*S", attributes: { style: l } };
            ie[r](t, s.host, h, e);
          } else ie[r](t, s.host, { tag: "*P", attributes: {} }, e);
        break;
      case Node.TEXT_NODE:
        if (
          ((i = i || t.parentNode),
          "update" === r || (i && ee(i) && "STYLE" !== i.tagName))
        ) {
          var p = { tag: "*T", value: t.nodeValue };
          ie[r](t, i, p, e);
        }
        break;
      case Node.ELEMENT_NODE:
        var v = t,
          g = v.tagName,
          m = (function (t) {
            var e = {},
              n = t.attributes;
            if (n && n.length > 0)
              for (var a = 0; a < n.length; a++) {
                var r = n[a].name;
                ta.indexOf(r) < 0 && (e[r] = n[a].value);
              }
            "INPUT" === t.tagName &&
              !("value" in e) &&
              t.value &&
              (e.value = t.value);
            return e;
          })(v);
        switch (
          ((i = t.parentElement
            ? t.parentElement
            : t.parentNode
            ? t.parentNode
            : null),
          "http://www.w3.org/2000/svg" === v.namespaceURI && (g = "svg:" + g),
          g)
        ) {
          case "HTML":
            i = o && i ? Jt(i) : null;
            var b = { tag: (o ? "iframe:" : "") + g, attributes: m };
            ie[r](t, i, b, e);
            break;
          case "SCRIPT":
            if ("type" in m && "application/ld+json" === m.type)
              try {
                Qn(JSON.parse(v.text.replace(ea, "")));
              } catch (t) {}
            break;
          case "NOSCRIPT":
            break;
          case "META":
            var y = "property" in m ? "property" : "name" in m ? "name" : null;
            if (y && "content" in m) {
              var w = m.content;
              switch (m[y]) {
                case "og:title":
                  xr(20, w);
                  break;
                case "og:type":
                  xr(19, w);
                  break;
                case "generator":
                  xr(21, w);
              }
            }
            break;
          case "HEAD":
            var k = { tag: g, attributes: m },
              E =
                o &&
                (null === (n = t.ownerDocument) || void 0 === n
                  ? void 0
                  : n.location)
                  ? t.ownerDocument.location
                  : location;
            (k.attributes["*B"] = E.protocol + "//" + E.host + E.pathname),
              ie[r](t, i, k, e);
            break;
          case "BASE":
            var O = $t(t.parentElement);
            if (O) {
              var S = document.createElement("a");
              (S.href = m.href),
                (O.data.attributes["*B"] =
                  S.protocol + "//" + S.host + S.pathname);
            }
            break;
          case "STYLE":
            var x = { tag: g, attributes: m, value: ra(v) };
            ie[r](t, i, x, e);
            break;
          case "IFRAME":
            var M = t,
              N = { tag: g, attributes: m };
            Ft(M) &&
              (!(function (t) {
                !1 === ee(t) &&
                  ti(t, "load", ka.bind(this, t, "childList"), !0);
              })(M),
              (N.attributes["*O"] = "true"),
              M.contentDocument &&
                M.contentWindow &&
                "loading" !== M.contentDocument.readyState &&
                (a = M.contentDocument)),
              ie[r](t, i, N, e);
            break;
          default:
            var T = { tag: g, attributes: m };
            v.shadowRoot && (a = v.shadowRoot), ie[r](t, i, T, e);
        }
    }
    return a;
  }
  function aa(t) {
    ee(t) ||
      (!(function (t) {
        try {
          var e = u("MutationObserver"),
            n = e in window ? new window[e](Qr(ga)) : null;
          n &&
            (n.observe(t, {
              attributes: !0,
              childList: !0,
              characterData: !0,
              subtree: !0,
            }),
            ua.push(n));
        } catch (t) {
          Ka(2, 0, t ? t.name : null);
        }
      })(t),
      Gn(t));
  }
  function ra(t) {
    var e = t.textContent ? t.textContent.trim() : "",
      n = t.dataset ? Object.keys(t.dataset).length : 0;
    return (0 === e.length || n > 0) && (e = ia(t.sheet)), e;
  }
  function ia(t) {
    var e = "",
      n = null;
    try {
      n = t ? t.cssRules : [];
    } catch (t) {
      if ((Ka(1, 1, t ? t.name : null), t && "SecurityError" !== t.name))
        throw t;
    }
    if (null !== n) for (var a = 0; a < n.length; a++) e += n[a].cssText;
    return e;
  }
  function oa(t, e, n) {
    return at(this, void 0, void 0, function () {
      var a, r, i, o, u;
      return rt(this, function (c) {
        switch (c.label) {
          case 0:
            (a = [t]), (c.label = 1);
          case 1:
            if (!(a.length > 0)) return [3, 4];
            for (r = a.shift(), i = r.firstChild; i; )
              a.push(i), (i = i.nextSibling);
            return 0 !== (o = ve(e)) ? [3, 3] : [4, be(e)];
          case 2:
            (o = c.sent()), (c.label = 3);
          case 3:
            return 2 === o ? [3, 4] : ((u = na(r, n)) && a.push(u), [3, 1]);
          case 4:
            return [2];
        }
      });
    });
  }
  var ua = [],
    ca = [],
    sa = null,
    la = null,
    da = null,
    fa = [],
    ha = null,
    pa = null,
    va = {};
  function ga(t) {
    var e = s();
    Z(6, e),
      ca.push({ time: e, mutations: t }),
      he(ma, 1).then(function () {
        Y(Se), Qr(Je)();
      });
  }
  function ma() {
    return at(this, void 0, void 0, function () {
      var t, e, n, a, r, i, o, u, c, l;
      return rt(this, function (d) {
        switch (d.label) {
          case 0:
            ge((t = { id: Ar(), cost: 3 })), (d.label = 1);
          case 1:
            if (!(ca.length > 0)) return [3, 8];
            (e = ca.shift()),
              (n = s()),
              (a = 0),
              (r = e.mutations),
              (d.label = 2);
          case 2:
            return a < r.length
              ? ((i = r[a]), 0 !== (o = ve(t)) ? [3, 4] : [4, be(t)])
              : [3, 6];
          case 3:
            (o = d.sent()), (d.label = 4);
          case 4:
            if (2 === o) return [3, 6];
            switch (
              ((u = i.target),
              (c = (function (t, e, n) {
                var a = t.target ? $t(t.target.parentNode) : null;
                if (a && "HTML" !== a.data.tag) {
                  var r = s() > pa,
                    i = $t(t.target),
                    o = i && i.selector ? i.selector.join() : t.target.nodeName,
                    u = [
                      a.selector ? a.selector.join() : "",
                      o,
                      t.attributeName,
                      ba(t.addedNodes),
                      ba(t.removedNodes),
                    ].join();
                  va[u] = u in va ? va[u] : [0, n];
                  var c = va[u];
                  if (
                    (!1 === r && c[0] >= 10 && ya(c[2], 2, e),
                    (c[0] = r ? (c[1] === n ? c[0] : c[0] + 1) : 1),
                    (c[1] = n),
                    10 === c[0])
                  )
                    return (c[2] = t.removedNodes), "suspend";
                  if (c[0] > 10) return "";
                }
                return t.type;
              })(i, t, n)),
              c && u && u.ownerDocument && Bt(u.ownerDocument),
              c &&
                u &&
                u.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
                u.host &&
                Bt(u),
              c)
            ) {
              case "attributes":
                na(u, 3);
                break;
              case "characterData":
                na(u, 4);
                break;
              case "childList":
                ya(i.addedNodes, 1, t), ya(i.removedNodes, 2, t);
                break;
              case "suspend":
                (l = $t(u)) && (l.metadata.suspend = !0);
            }
            d.label = 5;
          case 5:
            return a++, [3, 2];
          case 6:
            return [4, ze(6, t, e.time)];
          case 7:
            return d.sent(), [3, 1];
          case 8:
            return me(t), [2];
        }
      });
    });
  }
  function ba(t) {
    for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
    return e.join();
  }
  function ya(t, e, n) {
    return at(this, void 0, void 0, function () {
      var a, r, i;
      return rt(this, function (o) {
        switch (o.label) {
          case 0:
            (a = t ? t.length : 0), (r = 0), (o.label = 1);
          case 1:
            return r < a
              ? 1 !== e
                ? [3, 2]
                : (oa(t[r], n, e), [3, 5])
              : [3, 6];
          case 2:
            return 0 !== (i = ve(n)) ? [3, 4] : [4, be(n)];
          case 3:
            (i = o.sent()), (o.label = 4);
          case 4:
            if (2 === i) return [3, 6];
            na(t[r], e), (o.label = 5);
          case 5:
            return r++, [3, 1];
          case 6:
            return [2];
        }
      });
    });
  }
  function wa(t) {
    return (
      fa.indexOf(t) < 0 && fa.push(t),
      ha && X(ha),
      (ha = Y(function () {
        !(function () {
          for (var t = 0, e = fa; t < e.length; t++) {
            var n = e[t];
            if (n) {
              var a = n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
              if (a && ee(n)) continue;
              ka(n, a ? "childList" : "characterData");
            }
          }
          fa = [];
        })();
      }, 33)),
      t
    );
  }
  function ka(t, e) {
    Qr(ga)([
      {
        addedNodes: [t],
        attributeName: null,
        attributeNamespace: null,
        nextSibling: null,
        oldValue: null,
        previousSibling: null,
        removedNodes: [],
        target: t,
        type: e,
      },
    ]);
  }
  function Ea(t) {
    var e = t.composed && t.composedPath ? t.composedPath() : null,
      n = e && e.length > 0 ? e[0] : t.target;
    return (
      (pa = s() + 3e3),
      n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    );
  }
  function Oa(t, e, n) {
    void 0 === n && (n = null);
    var a = { id: 0, hash: null, privacy: 2, node: t };
    if (t) {
      var r = $t(t);
      if (null !== r) {
        var i = r.metadata;
        (a.id = r.id),
          (a.hash = r.hash),
          (a.privacy = i.privacy),
          r.region &&
            (function (t, e) {
              var n = Qt(t),
                a =
                  t in Xe
                    ? Xe[t]
                    : {
                        id: t,
                        visibility: 0,
                        interaction: 16,
                        name: Ye.get(n),
                      },
                r = 16;
              switch (e) {
                case 9:
                  r = 20;
                  break;
                case 27:
                  r = 30;
              }
              Ze(n, a, r, a.visibility);
            })(r.region, e),
          i.fraud && Et(i.fraud, r.id, n || r.data.value);
      }
    }
    return a;
  }
  function Sa(t, e) {
    return (
      void 0 === e && (e = null),
      at(this, void 0, void 0, function () {
        var n,
          a,
          r,
          i,
          o,
          u,
          c,
          l,
          d,
          f,
          h,
          p,
          v,
          g,
          y,
          w,
          k,
          E,
          O,
          S,
          x,
          M,
          N,
          _,
          C,
          D,
          j,
          A,
          L,
          z,
          R;
        return rt(this, function (H) {
          switch (((n = e || s()), (a = [n, t]), t)) {
            case 13:
            case 14:
            case 12:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
              for (r = 0, i = kn; r < i.length; r++)
                (z = i[r]),
                  (o = Oa(z.data.target, z.event)).id > 0 &&
                    ((a = [z.time, z.event]).push(o.id),
                    a.push(z.data.x),
                    a.push(z.data.y),
                    qa(a),
                    T(z.event, z.data.x, z.data.y));
              Nn();
              break;
            case 9:
              for (u = 0, c = rn; u < c.length; u++)
                (z = c[u]),
                  (l = Oa(z.data.target, z.event, z.data.text)),
                  (a = [z.time, z.event]),
                  (d = l.hash ? l.hash.join(".") : ""),
                  a.push(l.id),
                  a.push(z.data.x),
                  a.push(z.data.y),
                  a.push(z.data.eX),
                  a.push(z.data.eY),
                  a.push(z.data.button),
                  a.push(z.data.reaction),
                  a.push(z.data.context),
                  a.push(m(z.data.text, "click", l.privacy)),
                  a.push(b(z.data.link)),
                  a.push(d),
                  a.push(z.data.trust),
                  qa(a),
                  Ta(
                    z.time,
                    z.event,
                    d,
                    z.data.x,
                    z.data.y,
                    z.data.reaction,
                    z.data.context
                  );
              dn();
              break;
            case 38:
              for (f = 0, h = fn; f < h.length; f++)
                (z = h[f]),
                  (a = [z.time, z.event]),
                  (j = Oa(z.data.target, z.event)).id > 0 &&
                    (a.push(j.id), a.push(z.data.action), qa(a));
              pn();
              break;
            case 11:
              (p = wn),
                a.push(p.width),
                a.push(p.height),
                T(t, p.width, p.height),
                _n(),
                qa(a);
              break;
            case 26:
              (v = Wn), a.push(v.name), Vn(), qa(a);
              break;
            case 27:
              for (g = 0, y = gn; g < y.length; g++)
                (z = y[g]),
                  (w = Oa(z.data.target, z.event, z.data.value)),
                  (a = [z.time, z.event]).push(w.id),
                  a.push(m(z.data.value, "input", w.privacy)),
                  qa(a);
              yn();
              break;
            case 21:
              (k = An) &&
                ((E = Oa(k.start, t)),
                (O = Oa(k.end, t)),
                a.push(E.id),
                a.push(k.startOffset),
                a.push(O.id),
                a.push(k.endOffset),
                qn(),
                qa(a));
              break;
            case 10:
              for (S = 0, x = In; S < x.length; S++)
                (z = x[S]),
                  (M = Oa(z.data.target, z.event)).id > 0 &&
                    ((a = [z.time, z.event]).push(M.id),
                    a.push(z.data.x),
                    a.push(z.data.y),
                    qa(a),
                    T(z.event, z.data.x, z.data.y));
              In = [];
              break;
            case 42:
              for (N = 0, _ = $e; N < _.length; N++)
                (z = _[N]),
                  (a = [z.time, z.event]),
                  (j = Oa(z.data.target, z.event)).id > 0 &&
                    ((a = [z.time, z.event]).push(j.id),
                    a.push(z.data.type),
                    a.push(m(z.data.value, "change", j.privacy)),
                    a.push(m(z.data.checksum, "checksum", j.privacy)),
                    qa(a));
              en();
              break;
            case 39:
              for (C = 0, D = Xn; C < D.length; C++)
                (z = D[C]),
                  (a = [z.time, z.event]),
                  (j = Oa(z.data.target, z.event)).id > 0 &&
                    (a.push(j.id), qa(a));
              Un();
              break;
            case 22:
              for (A = 0, L = Ma; A < L.length; A++)
                (z = L[A]),
                  (a = [z.time, z.event]).push(z.data.type),
                  a.push(z.data.hash),
                  a.push(z.data.x),
                  a.push(z.data.y),
                  a.push(z.data.reaction),
                  a.push(z.data.context),
                  qa(a, !1);
              Na();
              break;
            case 28:
              (R = Yn), a.push(R.visible), qa(a), I(n, R.visible), Jn();
          }
          return [2];
        });
      })
    );
  }
  var xa = [],
    Ma = [];
  function Na() {
    Ma = [];
  }
  function Ta(t, e, n, a, r, i, o) {
    void 0 === i && (i = 1),
      void 0 === o && (o = 0),
      xa.push({
        time: t,
        event: 22,
        data: { type: e, hash: n, x: a, y: r, reaction: i, context: o },
      }),
      T(e, a, r);
  }
  var _a,
    Ia,
    Ca,
    Da,
    ja,
    Aa = 0,
    La = 0,
    za = null,
    Ra = 0;
  function Ha() {
    (Da = !0),
      (Aa = 0),
      (La = 0),
      (Ra = 0),
      (_a = []),
      (Ia = []),
      (Ca = {}),
      (ja = null);
  }
  function qa(t, e) {
    if ((void 0 === e && (e = !0), Da)) {
      var n = s(),
        a = t.length > 1 ? t[1] : null,
        r = JSON.stringify(t);
      switch (a) {
        case 5:
          Aa += r.length;
        case 37:
        case 6:
        case 43:
          (La += r.length), _a.push(r);
          break;
        default:
          Ia.push(r);
      }
      H(25);
      var i = (function () {
        var t = !1 === o.lean && Aa > 0 ? 100 : Vr.sequence * o.delay;
        return "string" == typeof o.upload
          ? Math.max(Math.min(t, 3e4), 100)
          : o.delay;
      })();
      n - Ra > 2 * i && (X(za), (za = null)),
        e &&
          null === za &&
          (25 !== a && V(), (za = Y(Ya, i)), (Ra = n), mr(La));
    }
  }
  function Wa() {
    X(za),
      Ya(!0),
      (Aa = 0),
      (La = 0),
      (Ra = 0),
      (_a = []),
      (Ia = []),
      (Ca = {}),
      (ja = null),
      (Da = !1);
  }
  function Ya(t) {
    return (
      void 0 === t && (t = !1),
      at(this, void 0, void 0, function () {
        var e, n, a, r, i, u, c, s;
        return rt(this, function (l) {
          switch (l.label) {
            case 0:
              return (
                (za = null),
                (e =
                  !1 === o.lean &&
                  La > 0 &&
                  (La < 1048576 || Vr.sequence > 0)) && W(1, 1),
                Je(),
                (function () {
                  var t = [];
                  Ma = [];
                  for (
                    var e = Vr.start + Vr.duration,
                      n = Math.max(e - 2e3, 0),
                      a = 0,
                      r = xa;
                    a < r.length;
                    a++
                  ) {
                    var i = r[a];
                    i.time >= n && (i.time <= e && Ma.push(i), t.push(i));
                  }
                  (xa = t), Sa(22);
                })(),
                yt(),
                (n = !0 === t),
                (a = JSON.stringify(Gr(n))),
                (r = "[".concat(Ia.join(), "]")),
                (i = e ? "[".concat(_a.join(), "]") : ""),
                (u = (function (t) {
                  return t.p.length > 0
                    ? '{"e":'
                        .concat(t.e, ',"a":')
                        .concat(t.a, ',"p":')
                        .concat(t.p, "}")
                    : '{"e":'.concat(t.e, ',"a":').concat(t.a, "}");
                })({ e: a, a: r, p: i })),
                n ? ((s = null), [3, 3]) : [3, 1]
              );
            case 1:
              return [4, pt(u)];
            case 2:
              (s = l.sent()), (l.label = 3);
            case 3:
              return (
                q(2, (c = s) ? c.length : u.length),
                Xa(u, c, Vr.sequence, n),
                (Ia = []),
                e && ((_a = []), (La = 0), (Aa = 0)),
                [2]
              );
          }
        });
      })
    );
  }
  function Xa(t, e, n, a) {
    if ((void 0 === a && (a = !1), "string" == typeof o.upload)) {
      var r = o.upload,
        i = !1;
      if (a && "sendBeacon" in navigator)
        try {
          (i = navigator.sendBeacon.bind(navigator)(r, t)) && Ua(n);
        } catch (t) {}
      if (!1 === i) {
        n in Ca ? Ca[n].attempts++ : (Ca[n] = { data: t, attempts: 1 });
        var u = new XMLHttpRequest();
        u.open("POST", r, !0),
          (u.timeout = 15e3),
          (u.ontimeout = function () {
            Kr(new Error("".concat("Timeout", " : ").concat(r)));
          }),
          null !== n &&
            (u.onreadystatechange = function () {
              Qr(Pa)(u, n);
            }),
          (u.withCredentials = !0),
          e
            ? (u.setRequestHeader("Accept", "application/x-clarity-gzip"),
              u.send(e))
            : u.send(t);
      }
    } else if (o.upload) {
      (0, o.upload)(t), Ua(n);
    }
  }
  function Pa(t, e) {
    var n = Ca[e];
    t &&
      4 === t.readyState &&
      n &&
      ((t.status < 200 || t.status > 208) && n.attempts <= 1
        ? t.status >= 400 && t.status < 500
          ? br(6)
          : (0 === t.status && (o.upload = o.fallback ? o.fallback : o.upload),
            Xa(n.data, null, e))
        : ((ja = { sequence: e, attempts: n.attempts, status: t.status }),
          n.attempts > 1 && vr(2),
          200 === t.status &&
            t.responseText &&
            (function (t) {
              for (
                var e = t && t.length > 0 ? t.split("\n") : [], n = 0, a = e;
                n < a.length;
                n++
              ) {
                var r = a[n],
                  i = r && r.length > 0 ? r.split(/ (.*)/) : [""];
                switch (i[0]) {
                  case "END":
                    br(6);
                    break;
                  case "UPGRADE":
                    et("Auto");
                    break;
                  case "ACTION":
                    o.action && i.length > 1 && o.action(i[1]);
                    break;
                  case "EXTRACT":
                    i.length > 1 && or(i[1]);
                }
              }
            })(t.responseText),
          0 === t.status && (Xa(n.data, null, e, !0), br(3)),
          t.status >= 200 && t.status <= 208 && Ua(e),
          delete Ca[e]));
  }
  function Ua(t) {
    1 === t && Rr();
  }
  var Ba,
    Va = {};
  function Fa(t) {
    var e = t.error || t;
    return (
      e.message in Va || (Va[e.message] = 0),
      Va[e.message]++ >= 5 ||
        (e &&
          e.message &&
          ((Ba = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename,
          }),
          Ja(31))),
      !0
    );
  }
  function Ja(t) {
    return at(this, void 0, void 0, function () {
      var e;
      return rt(this, function (n) {
        switch (((e = [s(), t]), t)) {
          case 31:
            e.push(Ba.message),
              e.push(Ba.line),
              e.push(Ba.column),
              e.push(Ba.stack),
              e.push(b(Ba.source)),
              qa(e);
            break;
          case 33:
            Ga &&
              (e.push(Ga.code),
              e.push(Ga.name),
              e.push(Ga.message),
              e.push(Ga.stack),
              e.push(Ga.severity),
              qa(e, !1));
            break;
          case 41:
            wt &&
              (e.push(wt.id),
              e.push(wt.target),
              e.push(wt.checksum),
              qa(e, !1));
        }
        return [2];
      });
    });
  }
  var Ga,
    Za = {};
  function Ka(t, e, n, a, r) {
    void 0 === n && (n = null),
      void 0 === a && (a = null),
      void 0 === r && (r = null);
    var i = n ? "".concat(n, "|").concat(a) : "";
    (t in Za && Za[t].indexOf(i) >= 0) ||
      ((Ga = { code: t, name: n, message: a, stack: r, severity: e }),
      t in Za ? Za[t].push(i) : (Za[t] = [i]),
      Ja(33));
  }
  var Qa,
    $a = {},
    tr = new Set(),
    er = {},
    nr = {},
    ar = {},
    rr = {};
  function ir() {
    sr();
  }
  function or(t) {
    try {
      var e = t && t.length > 0 ? t.split(/ (.*)/) : [""],
        n = e[0].split(/\|(.*)/),
        a = parseInt(n[0]),
        r = n.length > 1 ? n[1] : "",
        i = e.length > 1 ? JSON.parse(e[1]) : {};
      for (var o in ((er[a] = {}),
      (nr[a] = {}),
      (ar[a] = {}),
      (rr[a] = r),
      i)) {
        var u = parseInt(o),
          c = i[o],
          s = 2;
        switch (
          (c.startsWith("~") ? (s = 0) : c.startsWith("!") && (s = 4), s)
        ) {
          case 0:
            var l = c.substring(1, c.length);
            er[a][u] = fr(l);
            break;
          case 2:
            nr[a][u] = c;
            break;
          case 4:
            var d = c.substring(1, c.length);
            ar[a][u] = d;
        }
      }
    } catch (t) {
      Ka(8, 1, t ? t.name : null);
    }
  }
  function ur(t) {
    return JSON.parse(JSON.stringify(t));
  }
  function cr() {
    try {
      for (var t in er) {
        var e = parseInt(t);
        if ("" == rr[e] || document.querySelector(rr[e])) {
          var n = er[e];
          for (var a in n) {
            var r = parseInt(a),
              i = (h = hr(ur(n[r]))) ? JSON.stringify(h).substring(0, 1e4) : h;
            i && lr(e, r, i);
          }
          var o = nr[e];
          for (var u in o) {
            var c = parseInt(u),
              s = document.querySelectorAll(o[c]);
            if (s)
              lr(
                e,
                c,
                Array.from(s)
                  .map(function (t) {
                    return t.textContent;
                  })
                  .join("<SEP>")
                  .substring(0, 1e4)
              );
          }
          var l = ar[e];
          for (var d in l) {
            var f = parseInt(d);
            lr(e, f, Kt(l[f]).trim().substring(0, 1e4));
          }
        }
      }
      tr.size > 0 && vr(40);
    } catch (t) {
      Ka(5, 1, t ? t.name : null);
    }
    var h;
  }
  function sr() {
    tr.clear();
  }
  function lr(t, e, n) {
    var a,
      r = !1;
    t in $a || (($a[t] = {}), (r = !0)),
      (a = ar[t]),
      0 == Object.keys(a).length || (e in $a[t] && $a[t][e] == n) || (r = !0),
      ($a[t][e] = n),
      r && tr.add(t);
  }
  function dr() {
    sr();
  }
  function fr(t) {
    for (var e = [], n = t.split("."); n.length > 0; ) {
      var a = n.shift(),
        r = a.indexOf("["),
        i = a.indexOf("{"),
        o = a.indexOf("}");
      e.push({
        name: r > 0 ? a.substring(0, r) : i > 0 ? a.substring(0, i) : a,
        type: r > 0 ? 1 : i > 0 ? 2 : 3,
        condition: i > 0 ? a.substring(i + 1, o) : null,
      });
    }
    return e;
  }
  function hr(t, e) {
    if ((void 0 === e && (e = window), 0 == t.length)) return e;
    var n,
      a = t.shift();
    if (e && e[a.name]) {
      var r = e[a.name];
      if (1 !== a.type && pr(r, a.condition)) n = hr(t, r);
      else if (Array.isArray(r)) {
        for (var i = [], o = 0, u = r; o < u.length; o++) {
          var c = u[o];
          if (pr(c, a.condition)) {
            var s = hr(t, c);
            s && i.push(s);
          }
        }
        n = i;
      }
      return n;
    }
    return null;
  }
  function pr(t, e) {
    if (e) {
      var n = e.split(":");
      return n.length > 1 ? t[n[0]] == n[1] : t[n[0]];
    }
    return !0;
  }
  function vr(t) {
    var e = [s(), t];
    switch (t) {
      case 4:
        var n = S;
        n &&
          ((e = [n.time, n.event]).push(n.data.visible),
          e.push(n.data.docWidth),
          e.push(n.data.docHeight),
          e.push(n.data.screenWidth),
          e.push(n.data.screenHeight),
          e.push(n.data.scrollX),
          e.push(n.data.scrollY),
          e.push(n.data.pointerX),
          e.push(n.data.pointerY),
          e.push(n.data.activityTime),
          qa(e, !1)),
          N();
        break;
      case 25:
        e.push(L.gap), qa(e);
        break;
      case 35:
        e.push(Qa.check), qa(e, !1);
        break;
      case 3:
        e.push(tt.key), qa(e);
        break;
      case 2:
        e.push(ja.sequence), e.push(ja.attempts), e.push(ja.status), qa(e, !1);
        break;
      case 24:
        e.push(j.key), e.push(j.value), qa(e);
        break;
      case 34:
        var a = Object.keys(it);
        if (a.length > 0) {
          for (var r = 0, i = a; r < i.length; r++) {
            var o = i[r];
            e.push(o), e.push(it[o]);
          }
          lt(), qa(e, !1);
        }
        break;
      case 0:
        var u = Object.keys(R);
        if (u.length > 0) {
          for (var c = 0, l = u; c < l.length; c++) {
            var d = l[c],
              f = parseInt(d, 10);
            e.push(f), e.push(Math.round(R[d]));
          }
          (R = {}), qa(e, !1);
        }
        break;
      case 1:
        var h = Object.keys(Er);
        if (h.length > 0) {
          for (var p = 0, v = h; p < v.length; p++) {
            var g = v[p];
            f = parseInt(g, 10);
            e.push(f), e.push(Er[g]);
          }
          Nr(), qa(e, !1);
        }
        break;
      case 36:
        var m = Object.keys(G);
        if (m.length > 0) {
          for (var b = 0, y = m; b < y.length; b++) {
            var w = y[b];
            f = parseInt(w, 10);
            e.push(f), e.push([].concat.apply([], G[w]));
          }
          Q(), qa(e, !1);
        }
        break;
      case 40:
        tr.forEach(function (t) {
          e.push(t);
          var n = [];
          for (var a in $a[t]) {
            var r = parseInt(a, 10);
            n.push(r), n.push($a[t][a]);
          }
          e.push(n);
        }),
          sr(),
          qa(e, !1);
    }
  }
  function gr() {
    Qa = { check: 0 };
  }
  function mr(t) {
    if (0 === Qa.check) {
      var e = Qa.check;
      (e = Vr.sequence >= 128 ? 1 : e),
        (e = Vr.pageNum >= 128 ? 7 : e),
        (e = s() > 72e5 ? 2 : e),
        (e = t > 10485760 ? 2 : e) !== Qa.check && br(e);
    }
  }
  function br(t) {
    (Qa.check = t), zr(), _i();
  }
  function yr() {
    0 !== Qa.check && vr(35);
  }
  function wr() {
    Qa = null;
  }
  var kr = null,
    Er = null;
  function Or() {
    (kr = {}), (Er = {});
  }
  function Sr() {
    (kr = {}), (Er = {});
  }
  function xr(t, e) {
    e &&
      ((e = "".concat(e)),
      t in kr || (kr[t] = []),
      kr[t].indexOf(e) < 0 &&
        (kr[t].push(e),
        t in Er || (Er[t] = []),
        Er[t].push(e),
        kr[t].length > 128 && br(5)));
  }
  function Mr() {
    vr(1);
  }
  function Nr() {
    Er = {};
  }
  var Tr = null,
    _r = [],
    Ir = null;
  function Cr() {
    Ir = null;
    var t,
      e = navigator && "userAgent" in navigator ? navigator.userAgent : "",
      n = document && document.title ? document.title : "",
      a = e.indexOf("Electron") > 0 ? 1 : 0,
      r = (function () {
        var t = {
            session: Wr(),
            ts: Math.round(Date.now()),
            count: 1,
            upgrade: null,
            upload: "",
          },
          e = Pr("_clsk");
        if (e) {
          var n = e.split("|");
          n.length >= 5 &&
            t.ts - Yr(n[1]) < 18e5 &&
            ((t.session = n[0]),
            (t.count = Yr(n[2]) + 1),
            (t.upgrade = Yr(n[3])),
            (t.upload =
              n.length >= 6
                ? "".concat("https://").concat(n[5], "/").concat(n[4])
                : "".concat("https://").concat(n[4])));
        }
        return t;
      })(),
      i = Xr(),
      u = o.projectId || d(location.host);
    (Tr = {
      projectId: u,
      userId: i.id,
      sessionId: r.session,
      pageNum: r.count,
    }),
      (o.lean = o.track && null !== r.upgrade ? 0 === r.upgrade : o.lean),
      (o.upload =
        o.track &&
        "string" == typeof o.upload &&
        r.upload &&
        r.upload.length > "https://".length
          ? r.upload
          : o.upload),
      xr(0, e),
      xr(3, n),
      xr(1, b(location.href, !!a)),
      xr(2, document.referrer),
      xr(
        15,
        (function () {
          var t = Wr();
          if (o.track && Hr(window, "sessionStorage")) {
            var e = sessionStorage.getItem("_cltk");
            (t = e || t), sessionStorage.setItem("_cltk", t);
          }
          return t;
        })()
      ),
      xr(16, document.documentElement.lang),
      xr(17, document.dir),
      xr(26, "".concat(window.devicePixelRatio)),
      xr(28, i.dob.toString()),
      xr(29, i.version.toString()),
      W(0, r.ts),
      W(1, 0),
      W(35, a),
      navigator &&
        (xr(9, navigator.language),
        W(33, navigator.hardwareConcurrency),
        W(32, navigator.maxTouchPoints),
        W(34, Math.round(navigator.deviceMemory)),
        (t = navigator.userAgentData) && t.getHighEntropyValues
          ? t
              .getHighEntropyValues([
                "model",
                "platform",
                "platformVersion",
                "uaFullVersion",
              ])
              .then(function (t) {
                var e;
                xr(22, t.platform),
                  xr(23, t.platformVersion),
                  null === (e = t.brands) ||
                    void 0 === e ||
                    e.forEach(function (t) {
                      xr(24, t.name + "~" + t.version);
                    }),
                  xr(25, t.model),
                  W(27, t.mobile ? 1 : 0);
              })
          : xr(22, navigator.platform)),
      screen &&
        (W(14, Math.round(screen.width)),
        W(15, Math.round(screen.height)),
        W(16, Math.round(screen.colorDepth)));
    for (var c = 0, s = o.cookies; c < s.length; c++) {
      var l = s[c],
        f = Pr(l);
      f && ot(l, f);
    }
    qr(i);
  }
  function Dr() {
    (Ir = null), (Tr = null);
  }
  function jr(t, e) {
    void 0 === e && (e = !0);
    var n = o.lean ? 0 : 1;
    Tr && (n || !1 === e) ? t(Tr, !o.lean) : _r.push({ callback: t, wait: e });
  }
  function Ar() {
    return Tr ? [Tr.userId, Tr.sessionId, Tr.pageNum].join(".") : "";
  }
  function Lr() {
    hi() && ((o.track = !0), qr(Xr(), 1));
  }
  function zr() {
    Ur("_clsk", "", 0);
  }
  function Rr() {
    var t = Math.round(Date.now()),
      e =
        o.upload && "string" == typeof o.upload
          ? o.upload.replace("https://", "")
          : "",
      n = o.lean ? 0 : 1;
    !(function (t) {
      _r.length > 0 &&
        _r.forEach(function (e) {
          !e.callback || (e.wait && !t) || e.callback(Tr, !o.lean);
        });
    })(n),
      Ur("_clsk", [Tr.sessionId, t, Tr.pageNum, n, e].join("|"), 1);
  }
  function Hr(t, e) {
    try {
      return !!t[e];
    } catch (t) {
      return !1;
    }
  }
  function qr(t, e) {
    void 0 === e && (e = null), (e = null === e ? t.consent : e);
    var n = Math.ceil((Date.now() + 31536e6) / 864e5),
      a = 0 === t.dob ? (null === o.dob ? 0 : o.dob) : t.dob;
    (null === t.expiry ||
      Math.abs(n - t.expiry) >= 1 ||
      t.consent !== e ||
      t.dob !== a) &&
      Ur("_clck", [Tr.userId, 2, n.toString(36), e, a].join("|"), 365);
  }
  function Wr() {
    var t = Math.floor(Math.random() * Math.pow(2, 32));
    return (
      window &&
        window.crypto &&
        window.crypto.getRandomValues &&
        Uint32Array &&
        (t = window.crypto.getRandomValues(new Uint32Array(1))[0]),
      t.toString(36)
    );
  }
  function Yr(t, e) {
    return void 0 === e && (e = 10), parseInt(t, e);
  }
  function Xr() {
    var t = { id: Wr(), version: 0, expiry: null, consent: 0, dob: 0 },
      e = Pr("_clck");
    if (e && e.length > 0) {
      for (
        var n = e.split("|"), a = 0, r = 0, i = document.cookie.split(";");
        r < i.length;
        r++
      ) {
        a += "_clck" === i[r].split("=")[0].trim() ? 1 : 0;
      }
      if (1 === n.length || a > 1) {
        var u = ""
          .concat(";")
          .concat("expires=")
          .concat(new Date(0).toUTCString())
          .concat(";path=/");
        (document.cookie = "".concat("_clck", "=").concat(u)),
          (document.cookie = "".concat("_clsk", "=").concat(u));
      }
      n.length > 1 && (t.version = Yr(n[1])),
        n.length > 2 && (t.expiry = Yr(n[2], 36)),
        n.length > 3 && 1 === Yr(n[3]) && (t.consent = 1),
        n.length > 4 && Yr(n[1]) > 1 && (t.dob = Yr(n[4])),
        (o.track = o.track || 1 === t.consent),
        (t.id = o.track ? n[0] : t.id);
    }
    return t;
  }
  function Pr(t) {
    if (Hr(document, "cookie")) {
      var e = document.cookie.split(";");
      if (e)
        for (var n = 0; n < e.length; n++) {
          var a = e[n].split("=");
          if (a.length > 1 && a[0] && a[0].trim() === t) return a[1];
        }
    }
    return null;
  }
  function Ur(t, e, n) {
    if (
      o.track &&
      ((navigator && navigator.cookieEnabled) || Hr(document, "cookie"))
    ) {
      var a = new Date();
      a.setDate(a.getDate() + n);
      var r = a ? "expires=" + a.toUTCString() : "",
        i = "".concat(t, "=").concat(e).concat(";").concat(r).concat(";path=/");
      try {
        if (null === Ir) {
          for (
            var u = location.hostname ? location.hostname.split(".") : [],
              c = u.length - 1;
            c >= 0;
            c--
          )
            if (
              ((Ir = ".".concat(u[c]).concat(Ir || "")),
              c < u.length - 1 &&
                ((document.cookie = ""
                  .concat(i)
                  .concat(";")
                  .concat("domain=")
                  .concat(Ir)),
                Pr(t) === e))
            )
              return;
          Ir = "";
        }
      } catch (t) {
        Ir = "";
      }
      document.cookie = Ir
        ? "".concat(i).concat(";").concat("domain=").concat(Ir)
        : i;
    }
  }
  var Br,
    Vr = null;
  function Fr() {
    var t = Tr;
    Vr = {
      version: l,
      sequence: 0,
      start: 0,
      duration: 0,
      projectId: t.projectId,
      userId: t.userId,
      sessionId: t.sessionId,
      pageNum: t.pageNum,
      upload: 0,
      end: 0,
    };
  }
  function Jr() {
    Vr = null;
  }
  function Gr(t) {
    return (
      (Vr.start = Vr.start + Vr.duration),
      (Vr.duration = s() - Vr.start),
      Vr.sequence++,
      (Vr.upload = t && "sendBeacon" in navigator ? 1 : 0),
      (Vr.end = t ? 1 : 0),
      [
        Vr.version,
        Vr.sequence,
        Vr.start,
        Vr.duration,
        Vr.projectId,
        Vr.userId,
        Vr.sessionId,
        Vr.pageNum,
        Vr.upload,
        Vr.end,
      ]
    );
  }
  function Zr() {
    Br = [];
  }
  function Kr(t) {
    if (Br && -1 === Br.indexOf(t.message)) {
      var e = o.report;
      if (e && e.length > 0) {
        var n = {
          v: Vr.version,
          p: Vr.projectId,
          u: Vr.userId,
          s: Vr.sessionId,
          n: Vr.pageNum,
        };
        t.message && (n.m = t.message), t.stack && (n.e = t.stack);
        var a = new XMLHttpRequest();
        a.open("POST", e, !0), a.send(JSON.stringify(n)), Br.push(t.message);
      }
    }
    return t;
  }
  function Qr(t) {
    return function () {
      var e = performance.now();
      try {
        t.apply(this, arguments);
      } catch (t) {
        throw Kr(t);
      }
      var n = performance.now() - e;
      q(4, n), n > 30 && (H(7), W(6, n));
    };
  }
  var $r = [];
  function ti(t, e, n, a) {
    void 0 === a && (a = !1), (n = Qr(n));
    try {
      t[u("addEventListener")](e, n, a),
        $r.push({ event: e, target: t, listener: n, capture: a });
    } catch (t) {}
  }
  function ei() {
    for (var t = 0, e = $r; t < e.length; t++) {
      var n = e[t];
      try {
        n.target[u("removeEventListener")](n.event, n.listener, n.capture);
      } catch (t) {}
    }
    $r = [];
  }
  var ni = null,
    ai = null,
    ri = null,
    ii = 0;
  function oi() {
    return !(ii++ > 20) || (Ka(4, 0), !1);
  }
  function ui() {
    (ii = 0), ri !== si() && (_i(), window.setTimeout(ci, 250));
  }
  function ci() {
    Ti(), W(29, 1);
  }
  function si() {
    return location.href
      ? location.href.replace(location.hash, "")
      : location.href;
  }
  var li = !1;
  function di() {
    (li = !0),
      (c = performance.now()),
      fe(),
      ei(),
      Zr(),
      (ri = si()),
      (ii = 0),
      ti(window, "popstate", ui),
      null === ni &&
        ((ni = history.pushState),
        (history.pushState = function () {
          ni.apply(this, arguments), hi() && oi() && ui();
        })),
      null === ai &&
        ((ai = history.replaceState),
        (history.replaceState = function () {
          ai.apply(this, arguments), hi() && oi() && ui();
        }));
  }
  function fi() {
    (ri = null), (ii = 0), Zr(), ei(), fe(), (c = 0), (li = !1);
  }
  function hi() {
    return li;
  }
  function pi(t) {
    if (null === t || li) return !1;
    for (var e in t) e in o && (o[e] = t[e]);
    return !0;
  }
  function vi() {
    Ti(), A("clarity", "restart");
  }
  var gi = Object.freeze({
    __proto__: null,
    start: function () {
      !(function () {
        (kt = []), W(26, navigator.webdriver ? 1 : 0);
        try {
          W(31, window.top == window.self ? 1 : 2);
        } catch (t) {
          W(31, 0);
        }
      })(),
        ti(window, "error", Fa),
        (Va = {}),
        (Za = {});
    },
    stop: function () {
      Za = {};
    },
  });
  function mi() {
    return at(this, void 0, void 0, function () {
      var t, e;
      return rt(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              (t = s()),
              ge((e = { id: Ar(), cost: 3 })),
              [4, oa(document, e, 0)]
            );
          case 1:
            return n.sent(), [4, ze(5, e, t)];
          case 2:
            return n.sent(), me(e), [2];
        }
      });
    });
  }
  var bi = Object.freeze({
    __proto__: null,
    hashText: Kt,
    start: function () {
      Oe(),
        Se(),
        Qe(),
        (Be = null),
        (Ye = new WeakMap()),
        (Xe = {}),
        (Pe = []),
        (Ue = !!window.IntersectionObserver),
        Xt(),
        (function () {
          if (
            ((ua = []),
            (fa = []),
            (ha = null),
            (pa = 0),
            (va = {}),
            null === sa &&
              ((sa = CSSStyleSheet.prototype.insertRule),
              (CSSStyleSheet.prototype.insertRule = function () {
                return hi() && wa(this.ownerNode), sa.apply(this, arguments);
              })),
            null === la &&
              ((la = CSSStyleSheet.prototype.deleteRule),
              (CSSStyleSheet.prototype.deleteRule = function () {
                return hi() && wa(this.ownerNode), la.apply(this, arguments);
              })),
            null === da)
          ) {
            da = Element.prototype.attachShadow;
            try {
              Element.prototype.attachShadow = function () {
                return hi()
                  ? wa(da.apply(this, arguments))
                  : da.apply(this, arguments);
              };
            } catch (t) {
              da = null;
            }
          }
        })(),
        he(mi, 1).then(function () {
          Qr(Se)(), Qr(Je)();
        }),
        je(),
        Le(Me, "play"),
        Le(Ne, "pause"),
        Le(Te, "cancel"),
        Le(_e, "finish");
    },
    stop: function () {
      Qe(),
        (Ye = null),
        (Xe = {}),
        (Pe = []),
        Be && (Be.disconnect(), (Be = null)),
        (Ue = !1),
        Pt(),
        (function () {
          for (var t = 0, e = ua; t < e.length; t++) {
            var n = e[t];
            n && n.disconnect();
          }
          (ua = []), (va = {}), (ca = []), (fa = []), (pa = 0), (ha = null);
        })(),
        Oe(),
        je();
    },
  });
  var yi,
    wi = null;
  function ki() {
    wi = null;
  }
  function Ei(t) {
    (wi = {
      fetchStart: Math.round(t.fetchStart),
      connectStart: Math.round(t.connectStart),
      connectEnd: Math.round(t.connectEnd),
      requestStart: Math.round(t.requestStart),
      responseStart: Math.round(t.responseStart),
      responseEnd: Math.round(t.responseEnd),
      domInteractive: Math.round(t.domInteractive),
      domComplete: Math.round(t.domComplete),
      loadEventStart: Math.round(t.loadEventStart),
      loadEventEnd: Math.round(t.loadEventEnd),
      redirectCount: Math.round(t.redirectCount),
      size: t.transferSize ? t.transferSize : 0,
      type: t.type,
      protocol: t.nextHopProtocol,
      encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
      decodedSize: t.decodedBodySize ? t.decodedBodySize : 0,
    }),
      (function (t) {
        at(this, void 0, void 0, function () {
          var e, n;
          return rt(this, function (a) {
            return (
              (e = s()),
              (n = [e, t]),
              29 === t &&
                (n.push(wi.fetchStart),
                n.push(wi.connectStart),
                n.push(wi.connectEnd),
                n.push(wi.requestStart),
                n.push(wi.responseStart),
                n.push(wi.responseEnd),
                n.push(wi.domInteractive),
                n.push(wi.domComplete),
                n.push(wi.loadEventStart),
                n.push(wi.loadEventEnd),
                n.push(wi.redirectCount),
                n.push(wi.size),
                n.push(wi.type),
                n.push(wi.protocol),
                n.push(wi.encodedSize),
                n.push(wi.decodedSize),
                ki(),
                qa(n)),
              [2]
            );
          });
        });
      })(29);
  }
  var Oi = [
    "navigation",
    "resource",
    "longtask",
    "first-input",
    "layout-shift",
    "largest-contentful-paint",
  ];
  function Si() {
    try {
      yi && yi.disconnect(), (yi = new PerformanceObserver(Qr(xi)));
      for (var t = 0, e = Oi; t < e.length; t++) {
        var n = e[t];
        PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 &&
          ("layout-shift" === n && q(9, 0),
          yi.observe({ type: n, buffered: !0 }));
      }
    } catch (t) {
      Ka(3, 1);
    }
  }
  function xi(t) {
    !(function (t) {
      for (
        var e =
            !("visibilityState" in document) ||
            "visible" === document.visibilityState,
          n = 0;
        n < t.length;
        n++
      ) {
        var a = t[n];
        switch (a.entryType) {
          case "navigation":
            Ei(a);
            break;
          case "resource":
            var r = a.name;
            xr(4, Mi(r)),
              (r !== o.upload && r !== o.fallback) || W(28, a.duration);
            break;
          case "longtask":
            H(7);
            break;
          case "first-input":
            e && W(10, a.processingStart - a.startTime);
            break;
          case "layout-shift":
            e && !a.hadRecentInput && q(9, 1e3 * a.value);
            break;
          case "largest-contentful-paint":
            e && W(8, a.startTime);
        }
      }
    })(t.getEntries());
  }
  function Mi(t) {
    var e = document.createElement("a");
    return (e.href = t), e.host;
  }
  var Ni = [
    gi,
    bi,
    Zn,
    Object.freeze({
      __proto__: null,
      start: function () {
        ki(),
          (function () {
            navigator &&
              "connection" in navigator &&
              xr(27, navigator.connection.effectiveType),
              window.PerformanceObserver &&
              PerformanceObserver.supportedEntryTypes
                ? "complete" !== document.readyState
                  ? ti(window, "load", Y.bind(this, Si, 0))
                  : Si()
                : Ka(3, 0);
          })();
      },
      stop: function () {
        yi && yi.disconnect(), (yi = null), ki();
      },
    }),
  ];
  function Ti(t) {
    void 0 === t && (t = null),
      (function () {
        try {
          return (
            !1 === li &&
            "undefined" != typeof Promise &&
            window.MutationObserver &&
            document.createTreeWalker &&
            "now" in Date &&
            "now" in performance &&
            "undefined" != typeof WeakMap
          );
        } catch (t) {
          return !1;
        }
      })() &&
        (pi(t),
        di(),
        mt(),
        Ni.forEach(function (t) {
          return Qr(t.start)();
        }),
        null === t && ji());
  }
  function _i() {
    hi() &&
      (Ni.slice()
        .reverse()
        .forEach(function (t) {
          return Qr(t.stop)();
        }),
      bt(),
      fi(),
      void 0 !== Ci &&
        (Ci[Di] = function () {
          (Ci[Di].q = Ci[Di].q || []).push(arguments),
            "start" === arguments[0] &&
              Ci[Di].q.unshift(Ci[Di].q.pop()) &&
              ji();
        }));
  }
  var Ii = Object.freeze({
      __proto__: null,
      consent: Lr,
      event: A,
      hashText: Kt,
      identify: ut,
      metadata: jr,
      pause: function () {
        hi() &&
          (A("clarity", "pause"),
          null === le &&
            (le = new Promise(function (t) {
              de = t;
            })));
      },
      resume: function () {
        hi() &&
          (le && (de(), (le = null), null === se && pe()),
          A("clarity", "resume"));
      },
      set: ot,
      start: Ti,
      stop: _i,
      upgrade: et,
      version: l,
    }),
    Ci = window,
    Di = "clarity";
  function ji() {
    if (void 0 !== Ci) {
      if (Ci[Di] && Ci[Di].v)
        return console.warn("Error CL001: Multiple Clarity tags detected.");
      var t = (Ci[Di] && Ci[Di].q) || [];
      for (
        Ci[Di] = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          return Ii[t].apply(Ii, e);
        },
          Ci[Di].v = l;
        t.length > 0;

      )
        Ci[Di].apply(Ci, t.shift());
    }
  }
  ji();
})();
