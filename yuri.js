var og = Object.defineProperty;
var ag = (e, t, n) =>
  t in e
    ? og(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var kt = (e, t, n) => ag(e, typeof t != "symbol" ? t + "" : t, n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function lg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var nf = { exports: {} },
  As = {},
  rf = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qr = Symbol.for("react.element"),
  ug = Symbol.for("react.portal"),
  cg = Symbol.for("react.fragment"),
  dg = Symbol.for("react.strict_mode"),
  fg = Symbol.for("react.profiler"),
  hg = Symbol.for("react.provider"),
  pg = Symbol.for("react.context"),
  mg = Symbol.for("react.forward_ref"),
  gg = Symbol.for("react.suspense"),
  yg = Symbol.for("react.memo"),
  vg = Symbol.for("react.lazy"),
  ju = Symbol.iterator;
function xg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ju && e[ju]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var sf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  of = Object.assign,
  af = {};
function Yn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = af),
    (this.updater = n || sf));
}
Yn.prototype.isReactComponent = {};
Yn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Yn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lf() {}
lf.prototype = Yn.prototype;
function rl(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = af),
    (this.updater = n || sf));
}
var il = (rl.prototype = new lf());
il.constructor = rl;
of(il, Yn.prototype);
il.isPureReactComponent = !0;
var Nu = Array.isArray,
  uf = Object.prototype.hasOwnProperty,
  sl = { current: null },
  cf = { key: !0, ref: !0, __self: !0, __source: !0 };
function df(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      uf.call(t, r) && !cf.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Qr,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: sl.current,
  };
}
function wg(e, t) {
  return {
    $$typeof: Qr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ol(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qr;
}
function kg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Mu = /\/+/g;
function Ys(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? kg("" + e.key)
    : t.toString(36);
}
function Di(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Qr:
          case ug:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Ys(o, 0) : r),
      Nu(i)
        ? ((n = ""),
          e != null && (n = e.replace(Mu, "$&/") + "/"),
          Di(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (ol(i) &&
            (i = wg(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Mu, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Nu(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + Ys(s, a);
      o += Di(s, t, n, l, i);
    }
  else if (((l = xg(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      ((s = s.value), (l = r + Ys(s, a++)), (o += Di(s, t, n, l, i)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function ci(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Di(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Sg(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ke = { current: null },
  Ri = { transition: null },
  Tg = {
    ReactCurrentDispatcher: ke,
    ReactCurrentBatchConfig: Ri,
    ReactCurrentOwner: sl,
  };
function ff() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = {
  map: ci,
  forEach: function (e, t, n) {
    ci(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ci(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ci(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ol(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
I.Component = Yn;
I.Fragment = cg;
I.Profiler = fg;
I.PureComponent = rl;
I.StrictMode = dg;
I.Suspense = gg;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tg;
I.act = ff;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = of({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = sl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      uf.call(t, l) &&
        !cf.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Qr, type: e.type, key: i, ref: s, props: r, _owner: o };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: pg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: hg, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = df;
I.createFactory = function (e) {
  var t = df.bind(null, e);
  return ((t.type = e), t);
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: mg, render: e };
};
I.isValidElement = ol;
I.lazy = function (e) {
  return { $$typeof: vg, _payload: { _status: -1, _result: e }, _init: Sg };
};
I.memo = function (e, t) {
  return { $$typeof: yg, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Ri.transition;
  Ri.transition = {};
  try {
    e();
  } finally {
    Ri.transition = t;
  }
};
I.unstable_act = ff;
I.useCallback = function (e, t) {
  return ke.current.useCallback(e, t);
};
I.useContext = function (e) {
  return ke.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return ke.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return ke.current.useEffect(e, t);
};
I.useId = function () {
  return ke.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return ke.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return ke.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return ke.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return ke.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return ke.current.useRef(e);
};
I.useState = function (e) {
  return ke.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return ke.current.useTransition();
};
I.version = "18.3.1";
rf.exports = I;
var P = rf.exports;
const hf = lg(P);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cg = P,
  Pg = Symbol.for("react.element"),
  Eg = Symbol.for("react.fragment"),
  bg = Object.prototype.hasOwnProperty,
  Ag = Cg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jg = { key: !0, ref: !0, __self: !0, __source: !0 };
function pf(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) bg.call(t, r) && !jg.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Pg,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Ag.current,
  };
}
As.Fragment = Eg;
As.jsx = pf;
As.jsxs = pf;
nf.exports = As;
var h = nf.exports,
  Oo = {},
  mf = { exports: {} },
  De = {},
  gf = { exports: {} },
  yf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, R) {
    var L = A.length;
    A.push(R);
    e: for (; 0 < L; ) {
      var H = (L - 1) >>> 1,
        se = A[H];
      if (0 < i(se, R)) ((A[H] = R), (A[L] = se), (L = H));
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var R = A[0],
      L = A.pop();
    if (L !== R) {
      A[0] = L;
      e: for (var H = 0, se = A.length, li = se >>> 1; H < li; ) {
        var Gt = 2 * (H + 1) - 1,
          Ks = A[Gt],
          Kt = Gt + 1,
          ui = A[Kt];
        if (0 > i(Ks, L))
          Kt < se && 0 > i(ui, Ks)
            ? ((A[H] = ui), (A[Kt] = L), (H = Kt))
            : ((A[H] = Ks), (A[Gt] = L), (H = Gt));
        else if (Kt < se && 0 > i(ui, L)) ((A[H] = ui), (A[Kt] = L), (H = Kt));
        else break e;
      }
    }
    return R;
  }
  function i(A, R) {
    var L = A.sortIndex - R.sortIndex;
    return L !== 0 ? L : A.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    y = !1,
    v = !1,
    x = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(A) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= A)
        (r(u), (R.sortIndex = R.expirationTime), t(l, R));
      else break;
      R = n(u);
    }
  }
  function w(A) {
    if (((x = !1), g(A), !v))
      if (n(l) !== null) ((v = !0), ai(k));
      else {
        var R = n(u);
        R !== null && q(w, R.startTime - A);
      }
  }
  function k(A, R) {
    ((v = !1), x && ((x = !1), p(T), (T = -1)), (y = !0));
    var L = d;
    try {
      for (
        g(R), f = n(l);
        f !== null && (!(f.expirationTime > R) || (A && !z()));
      ) {
        var H = f.callback;
        if (typeof H == "function") {
          ((f.callback = null), (d = f.priorityLevel));
          var se = H(f.expirationTime <= R);
          ((R = e.unstable_now()),
            typeof se == "function" ? (f.callback = se) : f === n(l) && r(l),
            g(R));
        } else r(l);
        f = n(l);
      }
      if (f !== null) var li = !0;
      else {
        var Gt = n(u);
        (Gt !== null && q(w, Gt.startTime - R), (li = !1));
      }
      return li;
    } finally {
      ((f = null), (d = L), (y = !1));
    }
  }
  var C = !1,
    E = null,
    T = -1,
    N = 5,
    M = -1;
  function z() {
    return !(e.unstable_now() - M < N);
  }
  function We() {
    if (E !== null) {
      var A = e.unstable_now();
      M = A;
      var R = !0;
      try {
        R = E(!0, A);
      } finally {
        R ? ut() : ((C = !1), (E = null));
      }
    } else C = !1;
  }
  var ut;
  if (typeof m == "function")
    ut = function () {
      m(We);
    };
  else if (typeof MessageChannel < "u") {
    var tr = new MessageChannel(),
      oi = tr.port2;
    ((tr.port1.onmessage = We),
      (ut = function () {
        oi.postMessage(null);
      }));
  } else
    ut = function () {
      S(We, 0);
    };
  function ai(A) {
    ((E = A), C || ((C = !0), ut()));
  }
  function q(A, R) {
    T = S(function () {
      A(e.unstable_now());
    }, R);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), ai(k));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (N = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (A) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = d;
      }
      var L = d;
      d = R;
      try {
        return A();
      } finally {
        d = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, R) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var L = d;
      d = A;
      try {
        return R();
      } finally {
        d = L;
      }
    }),
    (e.unstable_scheduleCallback = function (A, R, L) {
      var H = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? H + L : H))
          : (L = H),
        A)
      ) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return (
        (se = L + se),
        (A = {
          id: c++,
          callback: R,
          priorityLevel: A,
          startTime: L,
          expirationTime: se,
          sortIndex: -1,
        }),
        L > H
          ? ((A.sortIndex = L),
            t(u, A),
            n(l) === null &&
              A === n(u) &&
              (x ? (p(T), (T = -1)) : (x = !0), q(w, L - H)))
          : ((A.sortIndex = se), t(l, A), v || y || ((v = !0), ai(k))),
        A
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (A) {
      var R = d;
      return function () {
        var L = d;
        d = R;
        try {
          return A.apply(this, arguments);
        } finally {
          d = L;
        }
      };
    }));
})(yf);
gf.exports = yf;
var Ng = gf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mg = P,
  Me = Ng;
function b(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var vf = new Set(),
  jr = {};
function hn(e, t) {
  (Bn(e, t), Bn(e + "Capture", t));
}
function Bn(e, t) {
  for (jr[e] = t, e = 0; e < t.length; e++) vf.add(t[e]);
}
var mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Fo = Object.prototype.hasOwnProperty,
  Dg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Du = {},
  Ru = {};
function Rg(e) {
  return Fo.call(Ru, e)
    ? !0
    : Fo.call(Du, e)
      ? !1
      : Dg.test(e)
        ? (Ru[e] = !0)
        : ((Du[e] = !0), !1);
}
function Lg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ig(e, t, n, r) {
  if (t === null || typeof t > "u" || Lg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Se(e, t, n, r, i, s, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o));
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  de[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  de[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  de[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  de[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  de[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  de[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  de[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var al = /[\-:]([a-z])/g;
function ll(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(al, ll);
    de[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(al, ll);
    de[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(al, ll);
  de[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  de[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new Se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  de[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ul(e, t, n, r) {
  var i = de.hasOwnProperty(t) ? de[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ig(t, n, i, r) && (n = null),
    r || i === null
      ? Rg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wt = Mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  di = Symbol.for("react.element"),
  yn = Symbol.for("react.portal"),
  vn = Symbol.for("react.fragment"),
  cl = Symbol.for("react.strict_mode"),
  Bo = Symbol.for("react.profiler"),
  xf = Symbol.for("react.provider"),
  wf = Symbol.for("react.context"),
  dl = Symbol.for("react.forward_ref"),
  Uo = Symbol.for("react.suspense"),
  Wo = Symbol.for("react.suspense_list"),
  fl = Symbol.for("react.memo"),
  Pt = Symbol.for("react.lazy"),
  kf = Symbol.for("react.offscreen"),
  Lu = Symbol.iterator;
function nr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Lu && e[Lu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  Xs;
function dr(e) {
  if (Xs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Xs = (t && t[1]) || "";
    }
  return (
    `
` +
    Xs +
    e
  );
}
var Qs = !1;
function qs(e, t) {
  if (!e || Qs) return "";
  Qs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((Qs = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? dr(e) : "";
}
function Vg(e) {
  switch (e.tag) {
    case 5:
      return dr(e.type);
    case 16:
      return dr("Lazy");
    case 13:
      return dr("Suspense");
    case 19:
      return dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = qs(e.type, !1)), e);
    case 11:
      return ((e = qs(e.type.render, !1)), e);
    case 1:
      return ((e = qs(e.type, !0)), e);
    default:
      return "";
  }
}
function Zo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case vn:
      return "Fragment";
    case yn:
      return "Portal";
    case Bo:
      return "Profiler";
    case cl:
      return "StrictMode";
    case Uo:
      return "Suspense";
    case Wo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case wf:
        return (e.displayName || "Context") + ".Consumer";
      case xf:
        return (e._context.displayName || "Context") + ".Provider";
      case dl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case fl:
        return (
          (t = e.displayName || null),
          t !== null ? t : Zo(e.type) || "Memo"
        );
      case Pt:
        ((t = e._payload), (e = e._init));
        try {
          return Zo(e(t));
        } catch {}
    }
  return null;
}
function _g(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Zo(t);
    case 8:
      return t === cl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ft(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Sf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function zg(e) {
  var t = Sf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          ((r = "" + o), s.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function fi(e) {
  e._valueTracker || (e._valueTracker = zg(e));
}
function Tf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Sf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ho(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Iu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Cf(e, t) {
  ((t = t.checked), t != null && ul(e, "checked", t, !1));
}
function $o(e, t) {
  Cf(e, t);
  var n = Ft(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Go(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Go(e, t.type, Ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Vu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Go(e, t, n) {
  (t !== "number" || Xi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fr = Array.isArray;
function Ln(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Ft(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ko(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function _u(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(b(92));
      if (fr(n)) {
        if (1 < n.length) throw Error(b(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Ft(n) };
}
function Pf(e, t) {
  var n = Ft(t.value),
    r = Ft(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function zu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ef(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Yo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ef(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var hi,
  bf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        hi = hi || document.createElement("div"),
          hi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = hi.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Nr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var gr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Og = ["Webkit", "ms", "Moz", "O"];
Object.keys(gr).forEach(function (e) {
  Og.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (gr[t] = gr[e]));
  });
});
function Af(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (gr.hasOwnProperty(e) && gr[e])
      ? ("" + t).trim()
      : t + "px";
}
function jf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Af(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var Fg = Y(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Xo(e, t) {
  if (t) {
    if (Fg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(b(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(b(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(b(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(b(62));
  }
}
function Qo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var qo = null;
function hl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Jo = null,
  In = null,
  Vn = null;
function Ou(e) {
  if ((e = ei(e))) {
    if (typeof Jo != "function") throw Error(b(280));
    var t = e.stateNode;
    t && ((t = Rs(t)), Jo(e.stateNode, e.type, t));
  }
}
function Nf(e) {
  In ? (Vn ? Vn.push(e) : (Vn = [e])) : (In = e);
}
function Mf() {
  if (In) {
    var e = In,
      t = Vn;
    if (((Vn = In = null), Ou(e), t)) for (e = 0; e < t.length; e++) Ou(t[e]);
  }
}
function Df(e, t) {
  return e(t);
}
function Rf() {}
var Js = !1;
function Lf(e, t, n) {
  if (Js) return e(t, n);
  Js = !0;
  try {
    return Df(e, t, n);
  } finally {
    ((Js = !1), (In !== null || Vn !== null) && (Rf(), Mf()));
  }
}
function Mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Rs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(b(231, t, typeof n));
  return n;
}
var ea = !1;
if (mt)
  try {
    var rr = {};
    (Object.defineProperty(rr, "passive", {
      get: function () {
        ea = !0;
      },
    }),
      window.addEventListener("test", rr, rr),
      window.removeEventListener("test", rr, rr));
  } catch {
    ea = !1;
  }
function Bg(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var yr = !1,
  Qi = null,
  qi = !1,
  ta = null,
  Ug = {
    onError: function (e) {
      ((yr = !0), (Qi = e));
    },
  };
function Wg(e, t, n, r, i, s, o, a, l) {
  ((yr = !1), (Qi = null), Bg.apply(Ug, arguments));
}
function Zg(e, t, n, r, i, s, o, a, l) {
  if ((Wg.apply(this, arguments), yr)) {
    if (yr) {
      var u = Qi;
      ((yr = !1), (Qi = null));
    } else throw Error(b(198));
    qi || ((qi = !0), (ta = u));
  }
}
function pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function If(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Fu(e) {
  if (pn(e) !== e) throw Error(b(188));
}
function Hg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = pn(e)), t === null)) throw Error(b(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return (Fu(i), e);
        if (s === r) return (Fu(i), t);
        s = s.sibling;
      }
      throw Error(b(188));
    }
    if (n.return !== r.return) ((n = i), (r = s));
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          ((o = !0), (n = i), (r = s));
          break;
        }
        if (a === r) {
          ((o = !0), (r = i), (n = s));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            ((o = !0), (n = s), (r = i));
            break;
          }
          if (a === r) {
            ((o = !0), (r = s), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(b(189));
      }
    }
    if (n.alternate !== r) throw Error(b(190));
  }
  if (n.tag !== 3) throw Error(b(188));
  return n.stateNode.current === n ? e : t;
}
function Vf(e) {
  return ((e = Hg(e)), e !== null ? _f(e) : null);
}
function _f(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = _f(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zf = Me.unstable_scheduleCallback,
  Bu = Me.unstable_cancelCallback,
  $g = Me.unstable_shouldYield,
  Gg = Me.unstable_requestPaint,
  J = Me.unstable_now,
  Kg = Me.unstable_getCurrentPriorityLevel,
  pl = Me.unstable_ImmediatePriority,
  Of = Me.unstable_UserBlockingPriority,
  Ji = Me.unstable_NormalPriority,
  Yg = Me.unstable_LowPriority,
  Ff = Me.unstable_IdlePriority,
  js = null,
  st = null;
function Xg(e) {
  if (st && typeof st.onCommitFiberRoot == "function")
    try {
      st.onCommitFiberRoot(js, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : Jg,
  Qg = Math.log,
  qg = Math.LN2;
function Jg(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Qg(e) / qg) | 0)) | 0);
}
var pi = 64,
  mi = 4194304;
function hr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function es(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = hr(a)) : ((s &= o), s !== 0 && (r = hr(s)));
  } else ((o = n & ~i), o !== 0 ? (r = hr(o)) : s !== 0 && (r = hr(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Xe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function e0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function t0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var o = 31 - Xe(s),
      a = 1 << o,
      l = i[o];
    (l === -1
      ? (!(a & n) || a & r) && (i[o] = e0(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a));
  }
}
function na(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Bf() {
  var e = pi;
  return ((pi <<= 1), !(pi & 4194240) && (pi = 64), e);
}
function eo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Xe(t)),
    (e[t] = n));
}
function n0(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Xe(n),
      s = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s));
  }
}
function ml(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var _ = 0;
function Uf(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Wf,
  gl,
  Zf,
  Hf,
  $f,
  ra = !1,
  gi = [],
  Dt = null,
  Rt = null,
  Lt = null,
  Dr = new Map(),
  Rr = new Map(),
  bt = [],
  r0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Uu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Dt = null;
      break;
    case "dragenter":
    case "dragleave":
      Rt = null;
      break;
    case "mouseover":
    case "mouseout":
      Lt = null;
      break;
    case "pointerover":
    case "pointerout":
      Dr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Rr.delete(t.pointerId);
  }
}
function ir(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = ei(t)), t !== null && gl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function i0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((Dt = ir(Dt, e, t, n, r, i)), !0);
    case "dragenter":
      return ((Rt = ir(Rt, e, t, n, r, i)), !0);
    case "mouseover":
      return ((Lt = ir(Lt, e, t, n, r, i)), !0);
    case "pointerover":
      var s = i.pointerId;
      return (Dr.set(s, ir(Dr.get(s) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (s = i.pointerId),
        Rr.set(s, ir(Rr.get(s) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function Gf(e) {
  var t = Jt(e.target);
  if (t !== null) {
    var n = pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = If(n)), t !== null)) {
          ((e.blockedOn = t),
            $f(e.priority, function () {
              Zf(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Li(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ia(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((qo = r), n.target.dispatchEvent(r), (qo = null));
    } else return ((t = ei(n)), t !== null && gl(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Wu(e, t, n) {
  Li(e) && n.delete(t);
}
function s0() {
  ((ra = !1),
    Dt !== null && Li(Dt) && (Dt = null),
    Rt !== null && Li(Rt) && (Rt = null),
    Lt !== null && Li(Lt) && (Lt = null),
    Dr.forEach(Wu),
    Rr.forEach(Wu));
}
function sr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ra ||
      ((ra = !0),
      Me.unstable_scheduleCallback(Me.unstable_NormalPriority, s0)));
}
function Lr(e) {
  function t(i) {
    return sr(i, e);
  }
  if (0 < gi.length) {
    sr(gi[0], e);
    for (var n = 1; n < gi.length; n++) {
      var r = gi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Dt !== null && sr(Dt, e),
      Rt !== null && sr(Rt, e),
      Lt !== null && sr(Lt, e),
      Dr.forEach(t),
      Rr.forEach(t),
      n = 0;
    n < bt.length;
    n++
  )
    ((r = bt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < bt.length && ((n = bt[0]), n.blockedOn === null); )
    (Gf(n), n.blockedOn === null && bt.shift());
}
var _n = wt.ReactCurrentBatchConfig,
  ts = !0;
function o0(e, t, n, r) {
  var i = _,
    s = _n.transition;
  _n.transition = null;
  try {
    ((_ = 1), yl(e, t, n, r));
  } finally {
    ((_ = i), (_n.transition = s));
  }
}
function a0(e, t, n, r) {
  var i = _,
    s = _n.transition;
  _n.transition = null;
  try {
    ((_ = 4), yl(e, t, n, r));
  } finally {
    ((_ = i), (_n.transition = s));
  }
}
function yl(e, t, n, r) {
  if (ts) {
    var i = ia(e, t, n, r);
    if (i === null) (co(e, t, r, ns, n), Uu(e, r));
    else if (i0(i, e, t, n, r)) r.stopPropagation();
    else if ((Uu(e, r), t & 4 && -1 < r0.indexOf(e))) {
      for (; i !== null; ) {
        var s = ei(i);
        if (
          (s !== null && Wf(s),
          (s = ia(e, t, n, r)),
          s === null && co(e, t, r, ns, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else co(e, t, r, null, n);
  }
}
var ns = null;
function ia(e, t, n, r) {
  if (((ns = null), (e = hl(r)), (e = Jt(e)), e !== null))
    if (((t = pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = If(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ns = e), null);
}
function Kf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Kg()) {
        case pl:
          return 1;
        case Of:
          return 4;
        case Ji:
        case Yg:
          return 16;
        case Ff:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jt = null,
  vl = null,
  Ii = null;
function Yf() {
  if (Ii) return Ii;
  var e,
    t = vl,
    n = t.length,
    r,
    i = "value" in jt ? jt.value : jt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Ii = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Vi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function yi() {
  return !0;
}
function Zu() {
  return !1;
}
function Re(e) {
  function t(n, r, i, s, o) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? yi
        : Zu),
      (this.isPropagationStopped = Zu),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = yi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = yi));
      },
      persist: function () {},
      isPersistent: yi,
    }),
    t
  );
}
var Xn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xl = Re(Xn),
  Jr = Y({}, Xn, { view: 0, detail: 0 }),
  l0 = Re(Jr),
  to,
  no,
  or,
  Ns = Y({}, Jr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: wl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== or &&
            (or && e.type === "mousemove"
              ? ((to = e.screenX - or.screenX), (no = e.screenY - or.screenY))
              : (no = to = 0),
            (or = e)),
          to);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : no;
    },
  }),
  Hu = Re(Ns),
  u0 = Y({}, Ns, { dataTransfer: 0 }),
  c0 = Re(u0),
  d0 = Y({}, Jr, { relatedTarget: 0 }),
  ro = Re(d0),
  f0 = Y({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  h0 = Re(f0),
  p0 = Y({}, Xn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  m0 = Re(p0),
  g0 = Y({}, Xn, { data: 0 }),
  $u = Re(g0),
  y0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  v0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  x0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function w0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = x0[e]) ? !!t[e] : !1;
}
function wl() {
  return w0;
}
var k0 = Y({}, Jr, {
    key: function (e) {
      if (e.key) {
        var t = y0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Vi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? v0[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: wl,
    charCode: function (e) {
      return e.type === "keypress" ? Vi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Vi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  S0 = Re(k0),
  T0 = Y({}, Ns, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Gu = Re(T0),
  C0 = Y({}, Jr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wl,
  }),
  P0 = Re(C0),
  E0 = Y({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  b0 = Re(E0),
  A0 = Y({}, Ns, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  j0 = Re(A0),
  N0 = [9, 13, 27, 32],
  kl = mt && "CompositionEvent" in window,
  vr = null;
mt && "documentMode" in document && (vr = document.documentMode);
var M0 = mt && "TextEvent" in window && !vr,
  Xf = mt && (!kl || (vr && 8 < vr && 11 >= vr)),
  Ku = " ",
  Yu = !1;
function Qf(e, t) {
  switch (e) {
    case "keyup":
      return N0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function qf(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var xn = !1;
function D0(e, t) {
  switch (e) {
    case "compositionend":
      return qf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Yu = !0), Ku);
    case "textInput":
      return ((e = t.data), e === Ku && Yu ? null : e);
    default:
      return null;
  }
}
function R0(e, t) {
  if (xn)
    return e === "compositionend" || (!kl && Qf(e, t))
      ? ((e = Yf()), (Ii = vl = jt = null), (xn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Xf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var L0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Xu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!L0[e.type] : t === "textarea";
}
function Jf(e, t, n, r) {
  (Nf(r),
    (t = rs(t, "onChange")),
    0 < t.length &&
      ((n = new xl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var xr = null,
  Ir = null;
function I0(e) {
  ch(e, 0);
}
function Ms(e) {
  var t = Sn(e);
  if (Tf(t)) return e;
}
function V0(e, t) {
  if (e === "change") return t;
}
var eh = !1;
if (mt) {
  var io;
  if (mt) {
    var so = "oninput" in document;
    if (!so) {
      var Qu = document.createElement("div");
      (Qu.setAttribute("oninput", "return;"),
        (so = typeof Qu.oninput == "function"));
    }
    io = so;
  } else io = !1;
  eh = io && (!document.documentMode || 9 < document.documentMode);
}
function qu() {
  xr && (xr.detachEvent("onpropertychange", th), (Ir = xr = null));
}
function th(e) {
  if (e.propertyName === "value" && Ms(Ir)) {
    var t = [];
    (Jf(t, Ir, e, hl(e)), Lf(I0, t));
  }
}
function _0(e, t, n) {
  e === "focusin"
    ? (qu(), (xr = t), (Ir = n), xr.attachEvent("onpropertychange", th))
    : e === "focusout" && qu();
}
function z0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ms(Ir);
}
function O0(e, t) {
  if (e === "click") return Ms(t);
}
function F0(e, t) {
  if (e === "input" || e === "change") return Ms(t);
}
function B0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var et = typeof Object.is == "function" ? Object.is : B0;
function Vr(e, t) {
  if (et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Fo.call(t, i) || !et(e[i], t[i])) return !1;
  }
  return !0;
}
function Ju(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ec(e, t) {
  var n = Ju(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ju(n);
  }
}
function nh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? nh(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function rh() {
  for (var e = window, t = Xi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xi(e.document);
  }
  return t;
}
function Sl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function U0(e) {
  var t = rh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    nh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Sl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        ((r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = ec(n, s)));
        var o = ec(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var W0 = mt && "documentMode" in document && 11 >= document.documentMode,
  wn = null,
  sa = null,
  wr = null,
  oa = !1;
function tc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  oa ||
    wn == null ||
    wn !== Xi(r) ||
    ((r = wn),
    "selectionStart" in r && Sl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (wr && Vr(wr, r)) ||
      ((wr = r),
      (r = rs(sa, "onSelect")),
      0 < r.length &&
        ((t = new xl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = wn))));
}
function vi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var kn = {
    animationend: vi("Animation", "AnimationEnd"),
    animationiteration: vi("Animation", "AnimationIteration"),
    animationstart: vi("Animation", "AnimationStart"),
    transitionend: vi("Transition", "TransitionEnd"),
  },
  oo = {},
  ih = {};
mt &&
  ((ih = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete kn.animationend.animation,
    delete kn.animationiteration.animation,
    delete kn.animationstart.animation),
  "TransitionEvent" in window || delete kn.transitionend.transition);
function Ds(e) {
  if (oo[e]) return oo[e];
  if (!kn[e]) return e;
  var t = kn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ih) return (oo[e] = t[n]);
  return e;
}
var sh = Ds("animationend"),
  oh = Ds("animationiteration"),
  ah = Ds("animationstart"),
  lh = Ds("transitionend"),
  uh = new Map(),
  nc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Wt(e, t) {
  (uh.set(e, t), hn(t, [e]));
}
for (var ao = 0; ao < nc.length; ao++) {
  var lo = nc[ao],
    Z0 = lo.toLowerCase(),
    H0 = lo[0].toUpperCase() + lo.slice(1);
  Wt(Z0, "on" + H0);
}
Wt(sh, "onAnimationEnd");
Wt(oh, "onAnimationIteration");
Wt(ah, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(lh, "onTransitionEnd");
Bn("onMouseEnter", ["mouseout", "mouseover"]);
Bn("onMouseLeave", ["mouseout", "mouseover"]);
Bn("onPointerEnter", ["pointerout", "pointerover"]);
Bn("onPointerLeave", ["pointerout", "pointerover"]);
hn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
hn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
hn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
hn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var pr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  $0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));
function rc(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Zg(r, t, void 0, e), (e.currentTarget = null));
}
function ch(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          (rc(i, a, u), (s = l));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          (rc(i, a, u), (s = l));
        }
    }
  }
  if (qi) throw ((e = ta), (qi = !1), (ta = null), e);
}
function B(e, t) {
  var n = t[da];
  n === void 0 && (n = t[da] = new Set());
  var r = e + "__bubble";
  n.has(r) || (dh(t, e, 2, !1), n.add(r));
}
function uo(e, t, n) {
  var r = 0;
  (t && (r |= 4), dh(n, e, r, t));
}
var xi = "_reactListening" + Math.random().toString(36).slice(2);
function _r(e) {
  if (!e[xi]) {
    ((e[xi] = !0),
      vf.forEach(function (n) {
        n !== "selectionchange" && ($0.has(n) || uo(n, !1, e), uo(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xi] || ((t[xi] = !0), uo("selectionchange", !1, t));
  }
}
function dh(e, t, n, r) {
  switch (Kf(t)) {
    case 1:
      var i = o0;
      break;
    case 4:
      i = a0;
      break;
    default:
      i = yl;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !ea ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function co(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Jt(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Lf(function () {
    var u = s,
      c = hl(n),
      f = [];
    e: {
      var d = uh.get(e);
      if (d !== void 0) {
        var y = xl,
          v = e;
        switch (e) {
          case "keypress":
            if (Vi(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = S0;
            break;
          case "focusin":
            ((v = "focus"), (y = ro));
            break;
          case "focusout":
            ((v = "blur"), (y = ro));
            break;
          case "beforeblur":
          case "afterblur":
            y = ro;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Hu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = c0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = P0;
            break;
          case sh:
          case oh:
          case ah:
            y = h0;
            break;
          case lh:
            y = b0;
            break;
          case "scroll":
            y = l0;
            break;
          case "wheel":
            y = j0;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = m0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Gu;
        }
        var x = (t & 4) !== 0,
          S = !x && e === "scroll",
          p = x ? (d !== null ? d + "Capture" : null) : d;
        x = [];
        for (var m = u, g; m !== null; ) {
          g = m;
          var w = g.stateNode;
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w),
              p !== null && ((w = Mr(m, p)), w != null && x.push(zr(m, w, g)))),
            S)
          )
            break;
          m = m.return;
        }
        0 < x.length &&
          ((d = new y(d, v, null, n, c)), f.push({ event: d, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          d &&
            n !== qo &&
            (v = n.relatedTarget || n.fromElement) &&
            (Jt(v) || v[gt]))
        )
          break e;
        if (
          (y || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? Jt(v) : null),
              v !== null &&
                ((S = pn(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((x = Hu),
            (w = "onMouseLeave"),
            (p = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Gu),
              (w = "onPointerLeave"),
              (p = "onPointerEnter"),
              (m = "pointer")),
            (S = y == null ? d : Sn(y)),
            (g = v == null ? d : Sn(v)),
            (d = new x(w, m + "leave", y, n, c)),
            (d.target = S),
            (d.relatedTarget = g),
            (w = null),
            Jt(c) === u &&
              ((x = new x(p, m + "enter", v, n, c)),
              (x.target = g),
              (x.relatedTarget = S),
              (w = x)),
            (S = w),
            y && v)
          )
            t: {
              for (x = y, p = v, m = 0, g = x; g; g = mn(g)) m++;
              for (g = 0, w = p; w; w = mn(w)) g++;
              for (; 0 < m - g; ) ((x = mn(x)), m--);
              for (; 0 < g - m; ) ((p = mn(p)), g--);
              for (; m--; ) {
                if (x === p || (p !== null && x === p.alternate)) break t;
                ((x = mn(x)), (p = mn(p)));
              }
              x = null;
            }
          else x = null;
          (y !== null && ic(f, d, y, x, !1),
            v !== null && S !== null && ic(f, S, v, x, !0));
        }
      }
      e: {
        if (
          ((d = u ? Sn(u) : window),
          (y = d.nodeName && d.nodeName.toLowerCase()),
          y === "select" || (y === "input" && d.type === "file"))
        )
          var k = V0;
        else if (Xu(d))
          if (eh) k = F0;
          else {
            k = z0;
            var C = _0;
          }
        else
          (y = d.nodeName) &&
            y.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (k = O0);
        if (k && (k = k(e, u))) {
          Jf(f, k, n, c);
          break e;
        }
        (C && C(e, d, u),
          e === "focusout" &&
            (C = d._wrapperState) &&
            C.controlled &&
            d.type === "number" &&
            Go(d, "number", d.value));
      }
      switch (((C = u ? Sn(u) : window), e)) {
        case "focusin":
          (Xu(C) || C.contentEditable === "true") &&
            ((wn = C), (sa = u), (wr = null));
          break;
        case "focusout":
          wr = sa = wn = null;
          break;
        case "mousedown":
          oa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((oa = !1), tc(f, n, c));
          break;
        case "selectionchange":
          if (W0) break;
        case "keydown":
        case "keyup":
          tc(f, n, c);
      }
      var E;
      if (kl)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        xn
          ? Qf(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      (T &&
        (Xf &&
          n.locale !== "ko" &&
          (xn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && xn && (E = Yf())
            : ((jt = c),
              (vl = "value" in jt ? jt.value : jt.textContent),
              (xn = !0))),
        (C = rs(u, T)),
        0 < C.length &&
          ((T = new $u(T, e, null, n, c)),
          f.push({ event: T, listeners: C }),
          E ? (T.data = E) : ((E = qf(n)), E !== null && (T.data = E)))),
        (E = M0 ? D0(e, n) : R0(e, n)) &&
          ((u = rs(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new $u("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = E))));
    }
    ch(f, t);
  });
}
function zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function rs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    (i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Mr(e, n)),
      s != null && r.unshift(zr(e, s, i)),
      (s = Mr(e, t)),
      s != null && r.push(zr(e, s, i))),
      (e = e.return));
  }
  return r;
}
function mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ic(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Mr(n, s)), l != null && o.unshift(zr(n, l, a)))
        : i || ((l = Mr(n, s)), l != null && o.push(zr(n, l, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var G0 = /\r\n?/g,
  K0 = /\u0000|\uFFFD/g;
function sc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      G0,
      `
`,
    )
    .replace(K0, "");
}
function wi(e, t, n) {
  if (((t = sc(t)), sc(e) !== t && n)) throw Error(b(425));
}
function is() {}
var aa = null,
  la = null;
function ua(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ca = typeof setTimeout == "function" ? setTimeout : void 0,
  Y0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  oc = typeof Promise == "function" ? Promise : void 0,
  X0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof oc < "u"
        ? function (e) {
            return oc.resolve(null).then(e).catch(Q0);
          }
        : ca;
function Q0(e) {
  setTimeout(function () {
    throw e;
  });
}
function fo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), Lr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Lr(t);
}
function It(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ac(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Qn = Math.random().toString(36).slice(2),
  it = "__reactFiber$" + Qn,
  Or = "__reactProps$" + Qn,
  gt = "__reactContainer$" + Qn,
  da = "__reactEvents$" + Qn,
  q0 = "__reactListeners$" + Qn,
  J0 = "__reactHandles$" + Qn;
function Jt(e) {
  var t = e[it];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[gt] || n[it])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ac(e); e !== null; ) {
          if ((n = e[it])) return n;
          e = ac(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function ei(e) {
  return (
    (e = e[it] || e[gt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Sn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(b(33));
}
function Rs(e) {
  return e[Or] || null;
}
var fa = [],
  Tn = -1;
function Zt(e) {
  return { current: e };
}
function W(e) {
  0 > Tn || ((e.current = fa[Tn]), (fa[Tn] = null), Tn--);
}
function O(e, t) {
  (Tn++, (fa[Tn] = e.current), (e.current = t));
}
var Bt = {},
  ge = Zt(Bt),
  Pe = Zt(!1),
  ln = Bt;
function Un(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ee(e) {
  return ((e = e.childContextTypes), e != null);
}
function ss() {
  (W(Pe), W(ge));
}
function lc(e, t, n) {
  if (ge.current !== Bt) throw Error(b(168));
  (O(ge, t), O(Pe, n));
}
function fh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(b(108, _g(e) || "Unknown", i));
  return Y({}, n, r);
}
function os(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bt),
    (ln = ge.current),
    O(ge, e),
    O(Pe, Pe.current),
    !0
  );
}
function uc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(b(169));
  (n
    ? ((e = fh(e, t, ln)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(Pe),
      W(ge),
      O(ge, e))
    : W(Pe),
    O(Pe, n));
}
var dt = null,
  Ls = !1,
  ho = !1;
function hh(e) {
  dt === null ? (dt = [e]) : dt.push(e);
}
function ey(e) {
  ((Ls = !0), hh(e));
}
function Ht() {
  if (!ho && dt !== null) {
    ho = !0;
    var e = 0,
      t = _;
    try {
      var n = dt;
      for (_ = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((dt = null), (Ls = !1));
    } catch (i) {
      throw (dt !== null && (dt = dt.slice(e + 1)), zf(pl, Ht), i);
    } finally {
      ((_ = t), (ho = !1));
    }
  }
  return null;
}
var Cn = [],
  Pn = 0,
  as = null,
  ls = 0,
  Le = [],
  Ie = 0,
  un = null,
  ft = 1,
  ht = "";
function Xt(e, t) {
  ((Cn[Pn++] = ls), (Cn[Pn++] = as), (as = e), (ls = t));
}
function ph(e, t, n) {
  ((Le[Ie++] = ft), (Le[Ie++] = ht), (Le[Ie++] = un), (un = e));
  var r = ft;
  e = ht;
  var i = 32 - Xe(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var s = 32 - Xe(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    ((s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (ft = (1 << (32 - Xe(t) + i)) | (n << i) | r),
      (ht = s + e));
  } else ((ft = (1 << s) | (n << i) | r), (ht = e));
}
function Tl(e) {
  e.return !== null && (Xt(e, 1), ph(e, 1, 0));
}
function Cl(e) {
  for (; e === as; )
    ((as = Cn[--Pn]), (Cn[Pn] = null), (ls = Cn[--Pn]), (Cn[Pn] = null));
  for (; e === un; )
    ((un = Le[--Ie]),
      (Le[Ie] = null),
      (ht = Le[--Ie]),
      (Le[Ie] = null),
      (ft = Le[--Ie]),
      (Le[Ie] = null));
}
var Ne = null,
  je = null,
  Z = !1,
  Ye = null;
function mh(e, t) {
  var n = Ve(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function cc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ne = e), (je = It(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ne = e), (je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = un !== null ? { id: ft, overflow: ht } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ve(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ne = e),
            (je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ha(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function pa(e) {
  if (Z) {
    var t = je;
    if (t) {
      var n = t;
      if (!cc(e, t)) {
        if (ha(e)) throw Error(b(418));
        t = It(n.nextSibling);
        var r = Ne;
        t && cc(e, t)
          ? mh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Ne = e));
      }
    } else {
      if (ha(e)) throw Error(b(418));
      ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Ne = e));
    }
  }
}
function dc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ne = e;
}
function ki(e) {
  if (e !== Ne) return !1;
  if (!Z) return (dc(e), (Z = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ua(e.type, e.memoizedProps))),
    t && (t = je))
  ) {
    if (ha(e)) throw (gh(), Error(b(418)));
    for (; t; ) (mh(e, t), (t = It(t.nextSibling)));
  }
  if ((dc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(b(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              je = It(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      je = null;
    }
  } else je = Ne ? It(e.stateNode.nextSibling) : null;
  return !0;
}
function gh() {
  for (var e = je; e; ) e = It(e.nextSibling);
}
function Wn() {
  ((je = Ne = null), (Z = !1));
}
function Pl(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
var ty = wt.ReactCurrentBatchConfig;
function ar(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(b(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(b(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(b(284));
    if (!n._owner) throw Error(b(290, e));
  }
  return e;
}
function Si(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      b(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function fc(e) {
  var t = e._init;
  return t(e._payload);
}
function yh(e) {
  function t(p, m) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [m]), (p.flags |= 16)) : g.push(m);
    }
  }
  function n(p, m) {
    if (!e) return null;
    for (; m !== null; ) (t(p, m), (m = m.sibling));
    return null;
  }
  function r(p, m) {
    for (p = new Map(); m !== null; )
      (m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling));
    return p;
  }
  function i(p, m) {
    return ((p = Ot(p, m)), (p.index = 0), (p.sibling = null), p);
  }
  function s(p, m, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null
            ? ((g = g.index), g < m ? ((p.flags |= 2), m) : g)
            : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function o(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function a(p, m, g, w) {
    return m === null || m.tag !== 6
      ? ((m = wo(g, p.mode, w)), (m.return = p), m)
      : ((m = i(m, g)), (m.return = p), m);
  }
  function l(p, m, g, w) {
    var k = g.type;
    return k === vn
      ? c(p, m, g.props.children, w, g.key)
      : m !== null &&
          (m.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === Pt &&
              fc(k) === m.type))
        ? ((w = i(m, g.props)), (w.ref = ar(p, m, g)), (w.return = p), w)
        : ((w = Wi(g.type, g.key, g.props, null, p.mode, w)),
          (w.ref = ar(p, m, g)),
          (w.return = p),
          w);
  }
  function u(p, m, g, w) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== g.containerInfo ||
      m.stateNode.implementation !== g.implementation
      ? ((m = ko(g, p.mode, w)), (m.return = p), m)
      : ((m = i(m, g.children || [])), (m.return = p), m);
  }
  function c(p, m, g, w, k) {
    return m === null || m.tag !== 7
      ? ((m = on(g, p.mode, w, k)), (m.return = p), m)
      : ((m = i(m, g)), (m.return = p), m);
  }
  function f(p, m, g) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return ((m = wo("" + m, p.mode, g)), (m.return = p), m);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case di:
          return (
            (g = Wi(m.type, m.key, m.props, null, p.mode, g)),
            (g.ref = ar(p, null, m)),
            (g.return = p),
            g
          );
        case yn:
          return ((m = ko(m, p.mode, g)), (m.return = p), m);
        case Pt:
          var w = m._init;
          return f(p, w(m._payload), g);
      }
      if (fr(m) || nr(m))
        return ((m = on(m, p.mode, g, null)), (m.return = p), m);
      Si(p, m);
    }
    return null;
  }
  function d(p, m, g, w) {
    var k = m !== null ? m.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return k !== null ? null : a(p, m, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case di:
          return g.key === k ? l(p, m, g, w) : null;
        case yn:
          return g.key === k ? u(p, m, g, w) : null;
        case Pt:
          return ((k = g._init), d(p, m, k(g._payload), w));
      }
      if (fr(g) || nr(g)) return k !== null ? null : c(p, m, g, w, null);
      Si(p, g);
    }
    return null;
  }
  function y(p, m, g, w, k) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return ((p = p.get(g) || null), a(m, p, "" + w, k));
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case di:
          return (
            (p = p.get(w.key === null ? g : w.key) || null),
            l(m, p, w, k)
          );
        case yn:
          return (
            (p = p.get(w.key === null ? g : w.key) || null),
            u(m, p, w, k)
          );
        case Pt:
          var C = w._init;
          return y(p, m, g, C(w._payload), k);
      }
      if (fr(w) || nr(w)) return ((p = p.get(g) || null), c(m, p, w, k, null));
      Si(m, w);
    }
    return null;
  }
  function v(p, m, g, w) {
    for (
      var k = null, C = null, E = m, T = (m = 0), N = null;
      E !== null && T < g.length;
      T++
    ) {
      E.index > T ? ((N = E), (E = null)) : (N = E.sibling);
      var M = d(p, E, g[T], w);
      if (M === null) {
        E === null && (E = N);
        break;
      }
      (e && E && M.alternate === null && t(p, E),
        (m = s(M, m, T)),
        C === null ? (k = M) : (C.sibling = M),
        (C = M),
        (E = N));
    }
    if (T === g.length) return (n(p, E), Z && Xt(p, T), k);
    if (E === null) {
      for (; T < g.length; T++)
        ((E = f(p, g[T], w)),
          E !== null &&
            ((m = s(E, m, T)),
            C === null ? (k = E) : (C.sibling = E),
            (C = E)));
      return (Z && Xt(p, T), k);
    }
    for (E = r(p, E); T < g.length; T++)
      ((N = y(E, p, T, g[T], w)),
        N !== null &&
          (e && N.alternate !== null && E.delete(N.key === null ? T : N.key),
          (m = s(N, m, T)),
          C === null ? (k = N) : (C.sibling = N),
          (C = N)));
    return (
      e &&
        E.forEach(function (z) {
          return t(p, z);
        }),
      Z && Xt(p, T),
      k
    );
  }
  function x(p, m, g, w) {
    var k = nr(g);
    if (typeof k != "function") throw Error(b(150));
    if (((g = k.call(g)), g == null)) throw Error(b(151));
    for (
      var C = (k = null), E = m, T = (m = 0), N = null, M = g.next();
      E !== null && !M.done;
      T++, M = g.next()
    ) {
      E.index > T ? ((N = E), (E = null)) : (N = E.sibling);
      var z = d(p, E, M.value, w);
      if (z === null) {
        E === null && (E = N);
        break;
      }
      (e && E && z.alternate === null && t(p, E),
        (m = s(z, m, T)),
        C === null ? (k = z) : (C.sibling = z),
        (C = z),
        (E = N));
    }
    if (M.done) return (n(p, E), Z && Xt(p, T), k);
    if (E === null) {
      for (; !M.done; T++, M = g.next())
        ((M = f(p, M.value, w)),
          M !== null &&
            ((m = s(M, m, T)),
            C === null ? (k = M) : (C.sibling = M),
            (C = M)));
      return (Z && Xt(p, T), k);
    }
    for (E = r(p, E); !M.done; T++, M = g.next())
      ((M = y(E, p, T, M.value, w)),
        M !== null &&
          (e && M.alternate !== null && E.delete(M.key === null ? T : M.key),
          (m = s(M, m, T)),
          C === null ? (k = M) : (C.sibling = M),
          (C = M)));
    return (
      e &&
        E.forEach(function (We) {
          return t(p, We);
        }),
      Z && Xt(p, T),
      k
    );
  }
  function S(p, m, g, w) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === vn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case di:
          e: {
            for (var k = g.key, C = m; C !== null; ) {
              if (C.key === k) {
                if (((k = g.type), k === vn)) {
                  if (C.tag === 7) {
                    (n(p, C.sibling),
                      (m = i(C, g.props.children)),
                      (m.return = p),
                      (p = m));
                    break e;
                  }
                } else if (
                  C.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Pt &&
                    fc(k) === C.type)
                ) {
                  (n(p, C.sibling),
                    (m = i(C, g.props)),
                    (m.ref = ar(p, C, g)),
                    (m.return = p),
                    (p = m));
                  break e;
                }
                n(p, C);
                break;
              } else t(p, C);
              C = C.sibling;
            }
            g.type === vn
              ? ((m = on(g.props.children, p.mode, w, g.key)),
                (m.return = p),
                (p = m))
              : ((w = Wi(g.type, g.key, g.props, null, p.mode, w)),
                (w.ref = ar(p, m, g)),
                (w.return = p),
                (p = w));
          }
          return o(p);
        case yn:
          e: {
            for (C = g.key; m !== null; ) {
              if (m.key === C)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === g.containerInfo &&
                  m.stateNode.implementation === g.implementation
                ) {
                  (n(p, m.sibling),
                    (m = i(m, g.children || [])),
                    (m.return = p),
                    (p = m));
                  break e;
                } else {
                  n(p, m);
                  break;
                }
              else t(p, m);
              m = m.sibling;
            }
            ((m = ko(g, p.mode, w)), (m.return = p), (p = m));
          }
          return o(p);
        case Pt:
          return ((C = g._init), S(p, m, C(g._payload), w));
      }
      if (fr(g)) return v(p, m, g, w);
      if (nr(g)) return x(p, m, g, w);
      Si(p, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        m !== null && m.tag === 6
          ? (n(p, m.sibling), (m = i(m, g)), (m.return = p), (p = m))
          : (n(p, m), (m = wo(g, p.mode, w)), (m.return = p), (p = m)),
        o(p))
      : n(p, m);
  }
  return S;
}
var Zn = yh(!0),
  vh = yh(!1),
  us = Zt(null),
  cs = null,
  En = null,
  El = null;
function bl() {
  El = En = cs = null;
}
function Al(e) {
  var t = us.current;
  (W(us), (e._currentValue = t));
}
function ma(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function zn(e, t) {
  ((cs = e),
    (El = En = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null)));
}
function Fe(e) {
  var t = e._currentValue;
  if (El !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), En === null)) {
      if (cs === null) throw Error(b(308));
      ((En = e), (cs.dependencies = { lanes: 0, firstContext: e }));
    } else En = En.next = e;
  return t;
}
var en = null;
function jl(e) {
  en === null ? (en = [e]) : en.push(e);
}
function xh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), jl(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    yt(e, r)
  );
}
function yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Et = !1;
function Nl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function wh(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function pt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), V & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      yt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), jl(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    yt(e, n)
  );
}
function _i(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ml(e, n));
  }
}
function hc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (i = s = o) : (s = s.next = o), (n = n.next));
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function ds(e, t, n, r) {
  var i = e.updateQueue;
  Et = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), o === null ? (s = u) : (o.next = u), (o = l));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var f = i.baseState;
    ((o = 0), (c = u = l = null), (a = s));
    do {
      var d = a.lane,
        y = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            x = a;
          switch (((d = t), (y = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                f = v.call(y, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (d = typeof v == "function" ? v.call(y, f, d) : v),
                d == null)
              )
                break e;
              f = Y({}, f, d);
              break e;
            case 2:
              Et = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        ((y = {
          eventTime: y,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (l = f)) : (c = c.next = y),
          (o |= d));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((o |= i.lane), (i = i.next));
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    ((dn |= o), (e.lanes = o), (e.memoizedState = f));
  }
}
function pc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(b(191, i));
        i.call(r);
      }
    }
}
var ti = {},
  ot = Zt(ti),
  Fr = Zt(ti),
  Br = Zt(ti);
function tn(e) {
  if (e === ti) throw Error(b(174));
  return e;
}
function Ml(e, t) {
  switch ((O(Br, t), O(Fr, e), O(ot, ti), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yo(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Yo(t, e)));
  }
  (W(ot), O(ot, t));
}
function Hn() {
  (W(ot), W(Fr), W(Br));
}
function kh(e) {
  tn(Br.current);
  var t = tn(ot.current),
    n = Yo(t, e.type);
  t !== n && (O(Fr, e), O(ot, n));
}
function Dl(e) {
  Fr.current === e && (W(ot), W(Fr));
}
var $ = Zt(0);
function fs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var po = [];
function Rl() {
  for (var e = 0; e < po.length; e++)
    po[e]._workInProgressVersionPrimary = null;
  po.length = 0;
}
var zi = wt.ReactCurrentDispatcher,
  mo = wt.ReactCurrentBatchConfig,
  cn = 0,
  K = null,
  re = null,
  oe = null,
  hs = !1,
  kr = !1,
  Ur = 0,
  ny = 0;
function fe() {
  throw Error(b(321));
}
function Ll(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!et(e[n], t[n])) return !1;
  return !0;
}
function Il(e, t, n, r, i, s) {
  if (
    ((cn = s),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zi.current = e === null || e.memoizedState === null ? oy : ay),
    (e = n(r, i)),
    kr)
  ) {
    s = 0;
    do {
      if (((kr = !1), (Ur = 0), 25 <= s)) throw Error(b(301));
      ((s += 1),
        (oe = re = null),
        (t.updateQueue = null),
        (zi.current = ly),
        (e = n(r, i)));
    } while (kr);
  }
  if (
    ((zi.current = ps),
    (t = re !== null && re.next !== null),
    (cn = 0),
    (oe = re = K = null),
    (hs = !1),
    t)
  )
    throw Error(b(300));
  return e;
}
function Vl() {
  var e = Ur !== 0;
  return ((Ur = 0), e);
}
function nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (oe === null ? (K.memoizedState = oe = e) : (oe = oe.next = e), oe);
}
function Be() {
  if (re === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = oe === null ? K.memoizedState : oe.next;
  if (t !== null) ((oe = t), (re = e));
  else {
    if (e === null) throw Error(b(310));
    ((re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      oe === null ? (K.memoizedState = oe = e) : (oe = oe.next = e));
  }
  return oe;
}
function Wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function go(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var r = re,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      ((i.next = s.next), (s.next = o));
    }
    ((r.baseQueue = i = s), (n.pending = null));
  }
  if (i !== null) {
    ((s = i.next), (r = r.baseState));
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((cn & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
          (K.lanes |= c),
          (dn |= c));
      }
      u = u.next;
    } while (u !== null && u !== s);
    (l === null ? (o = r) : (l.next = a),
      et(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((s = i.lane), (K.lanes |= s), (dn |= s), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function yo(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do ((s = e(s, o.action)), (o = o.next));
    while (o !== i);
    (et(s, t.memoizedState) || (Ce = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function Sh() {}
function Th(e, t) {
  var n = K,
    r = Be(),
    i = t(),
    s = !et(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ce = !0)),
    (r = r.queue),
    _l(Eh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Zr(9, Ph.bind(null, n, r, i, t), void 0, null),
      ae === null)
    )
      throw Error(b(349));
    cn & 30 || Ch(n, t, i);
  }
  return i;
}
function Ch(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Ph(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), bh(t) && Ah(e));
}
function Eh(e, t, n) {
  return n(function () {
    bh(t) && Ah(e);
  });
}
function bh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}
function Ah(e) {
  var t = yt(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function mc(e) {
  var t = nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = sy.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Zr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function jh() {
  return Be().memoizedState;
}
function Oi(e, t, n, r) {
  var i = nt();
  ((K.flags |= e),
    (i.memoizedState = Zr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Is(e, t, n, r) {
  var i = Be();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (re !== null) {
    var o = re.memoizedState;
    if (((s = o.destroy), r !== null && Ll(r, o.deps))) {
      i.memoizedState = Zr(t, n, s, r);
      return;
    }
  }
  ((K.flags |= e), (i.memoizedState = Zr(1 | t, n, s, r)));
}
function gc(e, t) {
  return Oi(8390656, 8, e, t);
}
function _l(e, t) {
  return Is(2048, 8, e, t);
}
function Nh(e, t) {
  return Is(4, 2, e, t);
}
function Mh(e, t) {
  return Is(4, 4, e, t);
}
function Dh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Rh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Is(4, 4, Dh.bind(null, t, e), n)
  );
}
function zl() {}
function Lh(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ll(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ih(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ll(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Vh(e, t, n) {
  return cn & 21
    ? (et(n, t) || ((n = Bf()), (K.lanes |= n), (dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function ry(e, t) {
  var n = _;
  ((_ = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = mo.transition;
  mo.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((_ = n), (mo.transition = r));
  }
}
function _h() {
  return Be().memoizedState;
}
function iy(e, t, n) {
  var r = zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    zh(e))
  )
    Oh(t, n);
  else if (((n = xh(e, t, n, r)), n !== null)) {
    var i = we();
    (Qe(n, e, r, i), Fh(n, t, r));
  }
}
function sy(e, t, n) {
  var r = zt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zh(e)) Oh(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), et(a, o))) {
          var l = t.interleaved;
          (l === null
            ? ((i.next = i), jl(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = xh(e, t, i, r)),
      n !== null && ((i = we()), Qe(n, e, r, i), Fh(n, t, r)));
  }
}
function zh(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function Oh(e, t) {
  kr = hs = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Fh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ml(e, n));
  }
}
var ps = {
    readContext: Fe,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  oy = {
    readContext: Fe,
    useCallback: function (e, t) {
      return ((nt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Fe,
    useEffect: gc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Oi(4194308, 4, Dh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Oi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Oi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = nt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = nt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = iy.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = nt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: mc,
    useDebugValue: zl,
    useDeferredValue: function (e) {
      return (nt().memoizedState = e);
    },
    useTransition: function () {
      var e = mc(!1),
        t = e[0];
      return ((e = ry.bind(null, e[1])), (nt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        i = nt();
      if (Z) {
        if (n === void 0) throw Error(b(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(b(349));
        cn & 30 || Ch(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        gc(Eh.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Zr(9, Ph.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = nt(),
        t = ae.identifierPrefix;
      if (Z) {
        var n = ht,
          r = ft;
        ((n = (r & ~(1 << (32 - Xe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ur++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = ny++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ay = {
    readContext: Fe,
    useCallback: Lh,
    useContext: Fe,
    useEffect: _l,
    useImperativeHandle: Rh,
    useInsertionEffect: Nh,
    useLayoutEffect: Mh,
    useMemo: Ih,
    useReducer: go,
    useRef: jh,
    useState: function () {
      return go(Wr);
    },
    useDebugValue: zl,
    useDeferredValue: function (e) {
      var t = Be();
      return Vh(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = go(Wr)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Sh,
    useSyncExternalStore: Th,
    useId: _h,
    unstable_isNewReconciler: !1,
  },
  ly = {
    readContext: Fe,
    useCallback: Lh,
    useContext: Fe,
    useEffect: _l,
    useImperativeHandle: Rh,
    useInsertionEffect: Nh,
    useLayoutEffect: Mh,
    useMemo: Ih,
    useReducer: yo,
    useRef: jh,
    useState: function () {
      return yo(Wr);
    },
    useDebugValue: zl,
    useDeferredValue: function (e) {
      var t = Be();
      return re === null ? (t.memoizedState = e) : Vh(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = yo(Wr)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Sh,
    useSyncExternalStore: Th,
    useId: _h,
    unstable_isNewReconciler: !1,
  };
function Ge(e, t) {
  if (e && e.defaultProps) {
    ((t = Y({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ga(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Vs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      i = zt(e),
      s = pt(r, i);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = Vt(e, s, i)),
      t !== null && (Qe(t, e, i, r), _i(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      i = zt(e),
      s = pt(r, i);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Vt(e, s, i)),
      t !== null && (Qe(t, e, i, r), _i(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = we(),
      r = zt(e),
      i = pt(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = Vt(e, i, r)),
      t !== null && (Qe(t, e, r, n), _i(t, e, r)));
  },
};
function yc(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Vr(n, r) || !Vr(i, s)
        : !0
  );
}
function Bh(e, t, n) {
  var r = !1,
    i = Bt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Fe(s))
      : ((i = Ee(t) ? ln : ge.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Un(e, i) : Bt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function vc(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vs.enqueueReplaceState(t, t.state, null));
}
function ya(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), Nl(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (i.context = Fe(s))
    : ((s = Ee(t) ? ln : ge.current), (i.context = Un(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (ga(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Vs.enqueueReplaceState(i, i.state, null),
      ds(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function $n(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Vg(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function vo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function va(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var uy = typeof WeakMap == "function" ? WeakMap : Map;
function Uh(e, t, n) {
  ((n = pt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (gs || ((gs = !0), (Aa = r)), va(e, t));
    }),
    n
  );
}
function Wh(e, t, n) {
  ((n = pt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        va(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (va(e, t),
          typeof r != "function" &&
            (_t === null ? (_t = new Set([this])) : _t.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function xc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new uy();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = Ty.bind(null, e, t, n)), t.then(e, e));
}
function wc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function kc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = pt(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var cy = wt.ReactCurrentOwner,
  Ce = !1;
function ye(e, t, n, r) {
  t.child = e === null ? vh(t, null, n, r) : Zn(t, e.child, n, r);
}
function Sc(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    zn(t, i),
    (r = Il(e, t, n, r, s, i)),
    (n = Vl()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : (Z && n && Tl(t), (t.flags |= 1), ye(e, t, r, i), t.child)
  );
}
function Tc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !$l(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Zh(e, t, s, r, i))
      : ((e = Wi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Vr), n(o, r) && e.ref === t.ref)
    )
      return vt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ot(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Zh(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Vr(s, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return ((t.lanes = e.lanes), vt(e, t, i));
  }
  return xa(e, t, n, r, i);
}
function Hh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        O(An, Ae),
        (Ae |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          O(An, Ae),
          (Ae |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        O(An, Ae),
        (Ae |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      O(An, Ae),
      (Ae |= r));
  return (ye(e, t, i, n), t.child);
}
function $h(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function xa(e, t, n, r, i) {
  var s = Ee(n) ? ln : ge.current;
  return (
    (s = Un(t, s)),
    zn(t, i),
    (n = Il(e, t, n, r, s, i)),
    (r = Vl()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : (Z && r && Tl(t), (t.flags |= 1), ye(e, t, n, i), t.child)
  );
}
function Cc(e, t, n, r, i) {
  if (Ee(n)) {
    var s = !0;
    os(t);
  } else s = !1;
  if ((zn(t, i), t.stateNode === null))
    (Fi(e, t), Bh(t, n, r), ya(t, n, r, i), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Fe(u))
      : ((u = Ee(n) ? ln : ge.current), (u = Un(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && vc(t, o, r, u)),
      (Et = !1));
    var d = t.memoizedState;
    ((o.state = d),
      ds(t, r, o, i),
      (l = t.memoizedState),
      a !== r || d !== l || Pe.current || Et
        ? (typeof c == "function" && (ga(t, n, c, r), (l = t.memoizedState)),
          (a = Et || yc(t, n, a, r, d, l, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      wh(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Ge(t.type, a)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Fe(l))
        : ((l = Ee(n) ? ln : ge.current), (l = Un(t, l))));
    var y = n.getDerivedStateFromProps;
    ((c =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && vc(t, o, r, l)),
      (Et = !1),
      (d = t.memoizedState),
      (o.state = d),
      ds(t, r, o, i));
    var v = t.memoizedState;
    a !== f || d !== v || Pe.current || Et
      ? (typeof y == "function" && (ga(t, n, y, r), (v = t.memoizedState)),
        (u = Et || yc(t, n, u, r, d, v, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return wa(e, t, n, r, s, i);
}
function wa(e, t, n, r, i, s) {
  $h(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (i && uc(t, n, !1), vt(e, t, s));
  ((r = t.stateNode), (cy.current = t));
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Zn(t, e.child, null, s)), (t.child = Zn(t, null, a, s)))
      : ye(e, t, a, s),
    (t.memoizedState = r.state),
    i && uc(t, n, !0),
    t.child
  );
}
function Gh(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? lc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && lc(e, t.context, !1),
    Ml(e, t.containerInfo));
}
function Pc(e, t, n, r, i) {
  return (Wn(), Pl(i), (t.flags |= 256), ye(e, t, n, r), t.child);
}
var ka = { dehydrated: null, treeContext: null, retryLane: 0 };
function Sa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Kh(e, t, n) {
  var r = t.pendingProps,
    i = $.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    O($, i & 1),
    e === null)
  )
    return (
      pa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Os(o, r, 0, null)),
              (e = on(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Sa(n)),
              (t.memoizedState = ka),
              e)
            : Ol(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return dy(e, t, o, r, a, i, n);
  if (s) {
    ((s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Ot(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Ot(a, s)) : ((s = on(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Sa(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = ka),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Ot(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ol(e, t) {
  return (
    (t = Os({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ti(e, t, n, r) {
  return (
    r !== null && Pl(r),
    Zn(t, e.child, null, n),
    (e = Ol(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function dy(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = vo(Error(b(422)))), Ti(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = Os({ mode: "visible", children: r.children }, i, 0, null)),
          (s = on(s, i, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Zn(t, e.child, null, o),
          (t.child.memoizedState = Sa(o)),
          (t.memoizedState = ka),
          s);
  if (!(t.mode & 1)) return Ti(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (s = Error(b(419))),
      (r = vo(s, r, void 0)),
      Ti(e, t, o, r)
    );
  }
  if (((a = (o & e.childLanes) !== 0), Ce || a)) {
    if (((r = ae), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), yt(e, i), Qe(r, e, i, -1)));
    }
    return (Hl(), (r = vo(Error(b(421)))), Ti(e, t, o, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Cy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (je = It(i.nextSibling)),
      (Ne = t),
      (Z = !0),
      (Ye = null),
      e !== null &&
        ((Le[Ie++] = ft),
        (Le[Ie++] = ht),
        (Le[Ie++] = un),
        (ft = e.id),
        (ht = e.overflow),
        (un = t)),
      (t = Ol(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ec(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), ma(e.return, t, n));
}
function xo(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Yh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((ye(e, t, r.children, n), (r = $.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ec(e, n, t);
        else if (e.tag === 19) Ec(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((O($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && fs(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          xo(t, !1, i, n, s));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && fs(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        xo(t, !0, n, null, s);
        break;
      case "together":
        xo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Fi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(b(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ot(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Ot(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function fy(e, t, n) {
  switch (t.tag) {
    case 3:
      (Gh(t), Wn());
      break;
    case 5:
      kh(t);
      break;
    case 1:
      Ee(t.type) && os(t);
      break;
    case 4:
      Ml(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (O(us, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (O($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Kh(e, t, n)
            : (O($, $.current & 1),
              (e = vt(e, t, n)),
              e !== null ? e.sibling : null);
      O($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Yh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        O($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Hh(e, t, n));
  }
  return vt(e, t, n);
}
var Xh, Ta, Qh, qh;
Xh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Ta = function () {};
Qh = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), tn(ot.current));
    var s = null;
    switch (n) {
      case "input":
        ((i = Ho(e, i)), (r = Ho(e, r)), (s = []));
        break;
      case "select":
        ((i = Y({}, i, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((i = Ko(e, i)), (r = Ko(e, r)), (s = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = is);
    }
    Xo(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (jr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else (n || (s || (s = []), s.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (s = s || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (jr.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && B("scroll", e),
                    s || a === l || (s = []))
                  : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
qh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function lr(e, t) {
  if (!Z)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function hy(e, t, n) {
  var r = t.pendingProps;
  switch ((Cl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (he(t), null);
    case 1:
      return (Ee(t.type) && ss(), he(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Hn(),
        W(Pe),
        W(ge),
        Rl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ki(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (Ma(Ye), (Ye = null)))),
        Ta(e, t),
        he(t),
        null
      );
    case 5:
      Dl(t);
      var i = tn(Br.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Qh(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(b(166));
          return (he(t), null);
        }
        if (((e = tn(ot.current)), ki(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[it] = t), (r[Or] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (B("cancel", r), B("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < pr.length; i++) B(pr[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (B("error", r), B("load", r));
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              (Iu(r, s), B("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                B("invalid", r));
              break;
            case "textarea":
              (_u(r, s), B("invalid", r));
          }
          (Xo(n, s), (i = null));
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      wi(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      wi(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : jr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              (fi(r), Vu(r, s, !0));
              break;
            case "textarea":
              (fi(r), zu(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = is);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ef(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[it] = t),
            (e[Or] = r),
            Xh(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = Qo(n, r)), n)) {
              case "dialog":
                (B("cancel", e), B("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (B("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < pr.length; i++) B(pr[i], e);
                i = r;
                break;
              case "source":
                (B("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (B("error", e), B("load", e), (i = r));
                break;
              case "details":
                (B("toggle", e), (i = r));
                break;
              case "input":
                (Iu(e, r), (i = Ho(e, r)), B("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Y({}, r, { value: void 0 })),
                  B("invalid", e));
                break;
              case "textarea":
                (_u(e, r), (i = Ko(e, r)), B("invalid", e));
                break;
              default:
                i = r;
            }
            (Xo(n, i), (a = i));
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? jf(e, l)
                  : s === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && bf(e, l))
                    : s === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Nr(e, l)
                        : typeof l == "number" && Nr(e, "" + l)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (jr.hasOwnProperty(s)
                          ? l != null && s === "onScroll" && B("scroll", e)
                          : l != null && ul(e, s, l, o));
              }
            switch (n) {
              case "input":
                (fi(e), Vu(e, r, !1));
                break;
              case "textarea":
                (fi(e), zu(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ft(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Ln(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Ln(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = is);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (he(t), null);
    case 6:
      if (e && t.stateNode != null) qh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(b(166));
        if (((n = tn(Br.current)), tn(ot.current), ki(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[it] = t),
            (s = r.nodeValue !== n) && ((e = Ne), e !== null))
          )
            switch (e.tag) {
              case 3:
                wi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  wi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[it] = t),
            (t.stateNode = r));
      }
      return (he(t), null);
    case 13:
      if (
        (W($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && je !== null && t.mode & 1 && !(t.flags & 128))
          (gh(), Wn(), (t.flags |= 98560), (s = !1));
        else if (((s = ki(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(b(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(b(317));
            s[it] = t;
          } else
            (Wn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (he(t), (s = !1));
        } else (Ye !== null && (Ma(Ye), (Ye = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? ie === 0 && (ie = 3) : Hl())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        Hn(),
        Ta(e, t),
        e === null && _r(t.stateNode.containerInfo),
        he(t),
        null
      );
    case 10:
      return (Al(t.type._context), he(t), null);
    case 17:
      return (Ee(t.type) && ss(), he(t), null);
    case 19:
      if ((W($), (s = t.memoizedState), s === null)) return (he(t), null);
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) lr(s, !1);
        else {
          if (ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = fs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    lr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (O($, ($.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            J() > Gn &&
            ((t.flags |= 128), (r = !0), lr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              lr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !Z)
            )
              return (he(t), null);
          } else
            2 * J() - s.renderingStartTime > Gn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), lr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = J()),
          (t.sibling = null),
          (n = $.current),
          O($, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        Zl(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ae & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(b(156, t.tag));
}
function py(e, t) {
  switch ((Cl(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && ss(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Hn(),
        W(Pe),
        W(ge),
        Rl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Dl(t), null);
    case 13:
      if ((W($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(b(340));
        Wn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (W($), null);
    case 4:
      return (Hn(), null);
    case 10:
      return (Al(t.type._context), null);
    case 22:
    case 23:
      return (Zl(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ci = !1,
  pe = !1,
  my = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function bn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function Ca(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var bc = !1;
function gy(e, t) {
  if (((aa = ts), (e = rh()), Sl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (y = f.firstChild) !== null;
            )
              ((d = f), (f = y));
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = o),
                d === s && ++c === r && (l = o),
                (y = f.nextSibling) !== null)
              )
                break;
              ((f = d), (d = f.parentNode));
            }
            f = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (la = { focusedElem: e, selectionRange: n }, ts = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (j = e));
    else
      for (; j !== null; ) {
        t = j;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    S = v.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Ge(t.type, x),
                      S,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(b(163));
            }
        } catch (w) {
          Q(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (j = e));
          break;
        }
        j = t.return;
      }
  return ((v = bc), (bc = !1), v);
}
function Sr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        ((i.destroy = void 0), s !== void 0 && Ca(t, n, s));
      }
      i = i.next;
    } while (i !== r);
  }
}
function _s(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Pa(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Jh(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Jh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[it], delete t[Or], delete t[da], delete t[q0], delete t[J0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function ep(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ac(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ep(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ea(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = is)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ea(e, t, n), e = e.sibling; e !== null; )
      (Ea(e, t, n), (e = e.sibling));
}
function ba(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ba(e, t, n), e = e.sibling; e !== null; )
      (ba(e, t, n), (e = e.sibling));
}
var le = null,
  Ke = !1;
function St(e, t, n) {
  for (n = n.child; n !== null; ) (tp(e, t, n), (n = n.sibling));
}
function tp(e, t, n) {
  if (st && typeof st.onCommitFiberUnmount == "function")
    try {
      st.onCommitFiberUnmount(js, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pe || bn(n, t);
    case 6:
      var r = le,
        i = Ke;
      ((le = null),
        St(e, t, n),
        (le = r),
        (Ke = i),
        le !== null &&
          (Ke
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode)));
      break;
    case 18:
      le !== null &&
        (Ke
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? fo(e.parentNode, n)
              : e.nodeType === 1 && fo(e, n),
            Lr(e))
          : fo(le, n.stateNode));
      break;
    case 4:
      ((r = le),
        (i = Ke),
        (le = n.stateNode.containerInfo),
        (Ke = !0),
        St(e, t, n),
        (le = r),
        (Ke = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          ((s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Ca(n, t, o),
            (i = i.next));
        } while (i !== r);
      }
      St(e, t, n);
      break;
    case 1:
      if (
        !pe &&
        (bn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          Q(n, t, a);
        }
      St(e, t, n);
      break;
    case 21:
      St(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((pe = (r = pe) || n.memoizedState !== null), St(e, t, n), (pe = r))
        : St(e, t, n);
      break;
    default:
      St(e, t, n);
  }
}
function jc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new my()),
      t.forEach(function (r) {
        var i = Py.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function Ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((le = a.stateNode), (Ke = !1));
              break e;
            case 3:
              ((le = a.stateNode.containerInfo), (Ke = !0));
              break e;
            case 4:
              ((le = a.stateNode.containerInfo), (Ke = !0));
              break e;
          }
          a = a.return;
        }
        if (le === null) throw Error(b(160));
        (tp(s, o, i), (le = null), (Ke = !1));
        var l = i.alternate;
        (l !== null && (l.return = null), (i.return = null));
      } catch (u) {
        Q(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (np(t, e), (t = t.sibling));
}
function np(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ze(t, e), tt(e), r & 4)) {
        try {
          (Sr(3, e, e.return), _s(3, e));
        } catch (x) {
          Q(e, e.return, x);
        }
        try {
          Sr(5, e, e.return);
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      break;
    case 1:
      (Ze(t, e), tt(e), r & 512 && n !== null && bn(n, n.return));
      break;
    case 5:
      if (
        (Ze(t, e),
        tt(e),
        r & 512 && n !== null && bn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Nr(i, "");
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && s.type === "radio" && s.name != null && Cf(i, s),
              Qo(a, o));
            var u = Qo(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                f = l[o + 1];
              c === "style"
                ? jf(i, f)
                : c === "dangerouslySetInnerHTML"
                  ? bf(i, f)
                  : c === "children"
                    ? Nr(i, f)
                    : ul(i, c, f, u);
            }
            switch (a) {
              case "input":
                $o(i, s);
                break;
              case "textarea":
                Pf(i, s);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var y = s.value;
                y != null
                  ? Ln(i, !!s.multiple, y, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Ln(i, !!s.multiple, s.defaultValue, !0)
                      : Ln(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Or] = s;
          } catch (x) {
            Q(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Ze(t, e), tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(b(162));
        ((i = e.stateNode), (s = e.memoizedProps));
        try {
          i.nodeValue = s;
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Ze(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Lr(t.containerInfo);
        } catch (x) {
          Q(e, e.return, x);
        }
      break;
    case 4:
      (Ze(t, e), tt(e));
      break;
    case 13:
      (Ze(t, e),
        tt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ul = J())),
        r & 4 && jc(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pe = (u = pe) || c), Ze(t, e), (pe = u)) : Ze(t, e),
        tt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (j = e, c = e.child; c !== null; ) {
            for (f = j = c; j !== null; ) {
              switch (((d = j), (y = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Sr(4, d, d.return);
                  break;
                case 1:
                  bn(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    ((r = d), (n = d.return));
                    try {
                      ((t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount());
                    } catch (x) {
                      Q(r, n, x);
                    }
                  }
                  break;
                case 5:
                  bn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Mc(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = d), (j = y)) : Mc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                ((i = f.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Af("display", o))));
              } catch (x) {
                Q(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (x) {
                Q(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (c === f && (c = null), (f = f.return));
          }
          (c === f && (c = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (Ze(t, e), tt(e), r & 4 && jc(e));
      break;
    case 21:
      break;
    default:
      (Ze(t, e), tt(e));
  }
}
function tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ep(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(b(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Nr(i, ""), (r.flags &= -33));
          var s = Ac(e);
          ba(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Ac(e);
          Ea(e, a, o);
          break;
        default:
          throw Error(b(161));
      }
    } catch (l) {
      Q(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yy(e, t, n) {
  ((j = e), rp(e));
}
function rp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var i = j,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ci;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || pe;
        a = Ci;
        var u = pe;
        if (((Ci = o), (pe = l) && !u))
          for (j = i; j !== null; )
            ((o = j),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Dc(i)
                : l !== null
                  ? ((l.return = o), (j = l))
                  : Dc(i));
        for (; s !== null; ) ((j = s), rp(s), (s = s.sibling));
        ((j = i), (Ci = a), (pe = u));
      }
      Nc(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (j = s)) : Nc(e);
  }
}
function Nc(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || _s(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ge(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && pc(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                pc(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Lr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(b(163));
          }
        pe || (t.flags & 512 && Pa(t));
      } catch (d) {
        Q(t, t.return, d);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (j = n));
      break;
    }
    j = t.return;
  }
}
function Mc(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (j = n));
      break;
    }
    j = t.return;
  }
}
function Dc(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _s(4, t);
          } catch (l) {
            Q(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Q(t, i, l);
            }
          }
          var s = t.return;
          try {
            Pa(t);
          } catch (l) {
            Q(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Pa(t);
          } catch (l) {
            Q(t, o, l);
          }
      }
    } catch (l) {
      Q(t, t.return, l);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (j = a));
      break;
    }
    j = t.return;
  }
}
var vy = Math.ceil,
  ms = wt.ReactCurrentDispatcher,
  Fl = wt.ReactCurrentOwner,
  ze = wt.ReactCurrentBatchConfig,
  V = 0,
  ae = null,
  te = null,
  ce = 0,
  Ae = 0,
  An = Zt(0),
  ie = 0,
  Hr = null,
  dn = 0,
  zs = 0,
  Bl = 0,
  Tr = null,
  Te = null,
  Ul = 0,
  Gn = 1 / 0,
  ct = null,
  gs = !1,
  Aa = null,
  _t = null,
  Pi = !1,
  Nt = null,
  ys = 0,
  Cr = 0,
  ja = null,
  Bi = -1,
  Ui = 0;
function we() {
  return V & 6 ? J() : Bi !== -1 ? Bi : (Bi = J());
}
function zt(e) {
  return e.mode & 1
    ? V & 2 && ce !== 0
      ? ce & -ce
      : ty.transition !== null
        ? (Ui === 0 && (Ui = Bf()), Ui)
        : ((e = _),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Kf(e.type))),
          e)
    : 1;
}
function Qe(e, t, n, r) {
  if (50 < Cr) throw ((Cr = 0), (ja = null), Error(b(185)));
  (qr(e, n, r),
    (!(V & 2) || e !== ae) &&
      (e === ae && (!(V & 2) && (zs |= n), ie === 4 && At(e, ce)),
      be(e, r),
      n === 1 && V === 0 && !(t.mode & 1) && ((Gn = J() + 500), Ls && Ht())));
}
function be(e, t) {
  var n = e.callbackNode;
  t0(e, t);
  var r = es(e, e === ae ? ce : 0);
  if (r === 0)
    (n !== null && Bu(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Bu(n), t === 1))
      (e.tag === 0 ? ey(Rc.bind(null, e)) : hh(Rc.bind(null, e)),
        X0(function () {
          !(V & 6) && Ht();
        }),
        (n = null));
    else {
      switch (Uf(r)) {
        case 1:
          n = pl;
          break;
        case 4:
          n = Of;
          break;
        case 16:
          n = Ji;
          break;
        case 536870912:
          n = Ff;
          break;
        default:
          n = Ji;
      }
      n = dp(n, ip.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function ip(e, t) {
  if (((Bi = -1), (Ui = 0), V & 6)) throw Error(b(327));
  var n = e.callbackNode;
  if (On() && e.callbackNode !== n) return null;
  var r = es(e, e === ae ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vs(e, r);
  else {
    t = r;
    var i = V;
    V |= 2;
    var s = op();
    (ae !== e || ce !== t) && ((ct = null), (Gn = J() + 500), sn(e, t));
    do
      try {
        ky();
        break;
      } catch (a) {
        sp(e, a);
      }
    while (!0);
    (bl(),
      (ms.current = s),
      (V = i),
      te !== null ? (t = 0) : ((ae = null), (ce = 0), (t = ie)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = na(e)), i !== 0 && ((r = i), (t = Na(e, i)))), t === 1)
    )
      throw ((n = Hr), sn(e, 0), At(e, r), be(e, J()), n);
    if (t === 6) At(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !xy(i) &&
          ((t = vs(e, r)),
          t === 2 && ((s = na(e)), s !== 0 && ((r = s), (t = Na(e, s)))),
          t === 1))
      )
        throw ((n = Hr), sn(e, 0), At(e, r), be(e, J()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(b(345));
        case 2:
          Qt(e, Te, ct);
          break;
        case 3:
          if (
            (At(e, r), (r & 130023424) === r && ((t = Ul + 500 - J()), 10 < t))
          ) {
            if (es(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (we(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = ca(Qt.bind(null, e, Te, ct), t);
            break;
          }
          Qt(e, Te, ct);
          break;
        case 4:
          if ((At(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Xe(r);
            ((s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s));
          }
          if (
            ((r = i),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * vy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ca(Qt.bind(null, e, Te, ct), r);
            break;
          }
          Qt(e, Te, ct);
          break;
        case 5:
          Qt(e, Te, ct);
          break;
        default:
          throw Error(b(329));
      }
    }
  }
  return (be(e, J()), e.callbackNode === n ? ip.bind(null, e) : null);
}
function Na(e, t) {
  var n = Tr;
  return (
    e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
    (e = vs(e, t)),
    e !== 2 && ((t = Te), (Te = n), t !== null && Ma(t)),
    e
  );
}
function Ma(e) {
  Te === null ? (Te = e) : Te.push.apply(Te, e);
}
function xy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!et(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function At(e, t) {
  for (
    t &= ~Bl,
      t &= ~zs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Xe(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Rc(e) {
  if (V & 6) throw Error(b(327));
  On();
  var t = es(e, 0);
  if (!(t & 1)) return (be(e, J()), null);
  var n = vs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = na(e);
    r !== 0 && ((t = r), (n = Na(e, r)));
  }
  if (n === 1) throw ((n = Hr), sn(e, 0), At(e, t), be(e, J()), n);
  if (n === 6) throw Error(b(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qt(e, Te, ct),
    be(e, J()),
    null
  );
}
function Wl(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    ((V = n), V === 0 && ((Gn = J() + 500), Ls && Ht()));
  }
}
function fn(e) {
  Nt !== null && Nt.tag === 0 && !(V & 6) && On();
  var t = V;
  V |= 1;
  var n = ze.transition,
    r = _;
  try {
    if (((ze.transition = null), (_ = 1), e)) return e();
  } finally {
    ((_ = r), (ze.transition = n), (V = t), !(V & 6) && Ht());
  }
}
function Zl() {
  ((Ae = An.current), W(An));
}
function sn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Y0(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((Cl(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ss());
          break;
        case 3:
          (Hn(), W(Pe), W(ge), Rl());
          break;
        case 5:
          Dl(r);
          break;
        case 4:
          Hn();
          break;
        case 13:
          W($);
          break;
        case 19:
          W($);
          break;
        case 10:
          Al(r.type._context);
          break;
        case 22:
        case 23:
          Zl();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (te = e = Ot(e.current, null)),
    (ce = Ae = t),
    (ie = 0),
    (Hr = null),
    (Bl = zs = dn = 0),
    (Te = Tr = null),
    en !== null)
  ) {
    for (t = 0; t < en.length; t++)
      if (((n = en[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          ((s.next = i), (r.next = o));
        }
        n.pending = r;
      }
    en = null;
  }
  return e;
}
function sp(e, t) {
  do {
    var n = te;
    try {
      if ((bl(), (zi.current = ps), hs)) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        hs = !1;
      }
      if (
        ((cn = 0),
        (oe = re = K = null),
        (kr = !1),
        (Ur = 0),
        (Fl.current = null),
        n === null || n.return === null)
      ) {
        ((ie = 1), (Hr = t), (te = null));
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = ce),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = wc(o);
          if (y !== null) {
            ((y.flags &= -257),
              kc(y, o, a, s, t),
              y.mode & 1 && xc(s, u, t),
              (t = y),
              (l = u));
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              (x.add(l), (t.updateQueue = x));
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (xc(s, u, t), Hl());
              break e;
            }
            l = Error(b(426));
          }
        } else if (Z && a.mode & 1) {
          var S = wc(o);
          if (S !== null) {
            (!(S.flags & 65536) && (S.flags |= 256),
              kc(S, o, a, s, t),
              Pl($n(l, a)));
            break e;
          }
        }
        ((s = l = $n(l, a)),
          ie !== 4 && (ie = 2),
          Tr === null ? (Tr = [s]) : Tr.push(s),
          (s = o));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var p = Uh(s, l, t);
              hc(s, p);
              break e;
            case 1:
              a = l;
              var m = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (_t === null || !_t.has(g))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var w = Wh(s, a, t);
                hc(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      lp(n);
    } catch (k) {
      ((t = k), te === n && n !== null && (te = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function op() {
  var e = ms.current;
  return ((ms.current = ps), e === null ? ps : e);
}
function Hl() {
  ((ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    ae === null || (!(dn & 268435455) && !(zs & 268435455)) || At(ae, ce));
}
function vs(e, t) {
  var n = V;
  V |= 2;
  var r = op();
  (ae !== e || ce !== t) && ((ct = null), sn(e, t));
  do
    try {
      wy();
      break;
    } catch (i) {
      sp(e, i);
    }
  while (!0);
  if ((bl(), (V = n), (ms.current = r), te !== null)) throw Error(b(261));
  return ((ae = null), (ce = 0), ie);
}
function wy() {
  for (; te !== null; ) ap(te);
}
function ky() {
  for (; te !== null && !$g(); ) ap(te);
}
function ap(e) {
  var t = cp(e.alternate, e, Ae);
  ((e.memoizedProps = e.pendingProps),
    t === null ? lp(e) : (te = t),
    (Fl.current = null));
}
function lp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = py(n, t)), n !== null)) {
        ((n.flags &= 32767), (te = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ie = 6), (te = null));
        return;
      }
    } else if (((n = hy(n, t, Ae)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function Qt(e, t, n) {
  var r = _,
    i = ze.transition;
  try {
    ((ze.transition = null), (_ = 1), Sy(e, t, n, r));
  } finally {
    ((ze.transition = i), (_ = r));
  }
  return null;
}
function Sy(e, t, n, r) {
  do On();
  while (Nt !== null);
  if (V & 6) throw Error(b(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(b(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (n0(e, s),
    e === ae && ((te = ae = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Pi ||
      ((Pi = !0),
      dp(Ji, function () {
        return (On(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = ze.transition), (ze.transition = null));
    var o = _;
    _ = 1;
    var a = V;
    ((V |= 4),
      (Fl.current = null),
      gy(e, n),
      np(n, e),
      U0(la),
      (ts = !!aa),
      (la = aa = null),
      (e.current = n),
      yy(n),
      Gg(),
      (V = a),
      (_ = o),
      (ze.transition = s));
  } else e.current = n;
  if (
    (Pi && ((Pi = !1), (Nt = e), (ys = i)),
    (s = e.pendingLanes),
    s === 0 && (_t = null),
    Xg(n.stateNode),
    be(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (gs) throw ((gs = !1), (e = Aa), (Aa = null), e);
  return (
    ys & 1 && e.tag !== 0 && On(),
    (s = e.pendingLanes),
    s & 1 ? (e === ja ? Cr++ : ((Cr = 0), (ja = e))) : (Cr = 0),
    Ht(),
    null
  );
}
function On() {
  if (Nt !== null) {
    var e = Uf(ys),
      t = ze.transition,
      n = _;
    try {
      if (((ze.transition = null), (_ = 16 > e ? 16 : e), Nt === null))
        var r = !1;
      else {
        if (((e = Nt), (Nt = null), (ys = 0), V & 6)) throw Error(b(331));
        var i = V;
        for (V |= 4, j = e.current; j !== null; ) {
          var s = j,
            o = s.child;
          if (j.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Sr(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) ((f.return = c), (j = f));
                  else
                    for (; j !== null; ) {
                      c = j;
                      var d = c.sibling,
                        y = c.return;
                      if ((Jh(c), c === u)) {
                        j = null;
                        break;
                      }
                      if (d !== null) {
                        ((d.return = y), (j = d));
                        break;
                      }
                      j = y;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var S = x.sibling;
                    ((x.sibling = null), (x = S));
                  } while (x !== null);
                }
              }
              j = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) ((o.return = s), (j = o));
          else
            e: for (; j !== null; ) {
              if (((s = j), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Sr(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                ((p.return = s.return), (j = p));
                break e;
              }
              j = s.return;
            }
        }
        var m = e.current;
        for (j = m; j !== null; ) {
          o = j;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) ((g.return = o), (j = g));
          else
            e: for (o = m; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _s(9, a);
                  }
                } catch (k) {
                  Q(a, a.return, k);
                }
              if (a === o) {
                j = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                ((w.return = a.return), (j = w));
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((V = i), Ht(), st && typeof st.onPostCommitFiberRoot == "function")
        )
          try {
            st.onPostCommitFiberRoot(js, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((_ = n), (ze.transition = t));
    }
  }
  return !1;
}
function Lc(e, t, n) {
  ((t = $n(n, t)),
    (t = Uh(e, t, 1)),
    (e = Vt(e, t, 1)),
    (t = we()),
    e !== null && (qr(e, 1, t), be(e, t)));
}
function Q(e, t, n) {
  if (e.tag === 3) Lc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Lc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (_t === null || !_t.has(r)))
        ) {
          ((e = $n(n, e)),
            (e = Wh(t, e, 1)),
            (t = Vt(t, e, 1)),
            (e = we()),
            t !== null && (qr(t, 1, e), be(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Ty(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (ce & n) === n &&
      (ie === 4 || (ie === 3 && (ce & 130023424) === ce && 500 > J() - Ul)
        ? sn(e, 0)
        : (Bl |= n)),
    be(e, t));
}
function up(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = mi), (mi <<= 1), !(mi & 130023424) && (mi = 4194304))
      : (t = 1));
  var n = we();
  ((e = yt(e, t)), e !== null && (qr(e, t, n), be(e, n)));
}
function Cy(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), up(e, n));
}
function Py(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(b(314));
  }
  (r !== null && r.delete(t), up(e, n));
}
var cp;
cp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ce = !1), fy(e, t, n));
      Ce = !!(e.flags & 131072);
    }
  else ((Ce = !1), Z && t.flags & 1048576 && ph(t, ls, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Fi(e, t), (e = t.pendingProps));
      var i = Un(t, ge.current);
      (zn(t, n), (i = Il(null, t, r, e, i, n)));
      var s = Vl();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((s = !0), os(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Nl(t),
            (i.updater = Vs),
            (t.stateNode = i),
            (i._reactInternals = t),
            ya(t, r, e, n),
            (t = wa(null, t, r, !0, s, n)))
          : ((t.tag = 0), Z && s && Tl(t), ye(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Fi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = by(r)),
          (e = Ge(r, e)),
          i)
        ) {
          case 0:
            t = xa(null, t, r, e, n);
            break e;
          case 1:
            t = Cc(null, t, r, e, n);
            break e;
          case 11:
            t = Sc(null, t, r, e, n);
            break e;
          case 14:
            t = Tc(null, t, r, Ge(r.type, e), n);
            break e;
        }
        throw Error(b(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        xa(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        Cc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Gh(t), e === null)) throw Error(b(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          wh(e, t),
          ds(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((i = $n(Error(b(423)), t)), (t = Pc(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = $n(Error(b(424)), t)), (t = Pc(e, t, r, n, i)));
            break e;
          } else
            for (
              je = It(t.stateNode.containerInfo.firstChild),
                Ne = t,
                Z = !0,
                Ye = null,
                n = vh(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Wn(), r === i)) {
            t = vt(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        kh(t),
        e === null && pa(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        ua(r, i) ? (o = null) : s !== null && ua(r, s) && (t.flags |= 32),
        $h(e, t),
        ye(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && pa(t), null);
    case 13:
      return Kh(e, t, n);
    case 4:
      return (
        Ml(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Zn(t, null, r, n)) : ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        Sc(e, t, r, i, n)
      );
    case 7:
      return (ye(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ye(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ye(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          O(us, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (et(s.value, o)) {
            if (s.children === i.children && !Pe.current) {
              t = vt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      ((l = pt(-1, n & -n)), (l.tag = 2));
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      ma(s.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(b(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  ma(o, n, t),
                  (o = s.sibling));
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    ((s.return = o.return), (o = s));
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        (ye(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        zn(t, n),
        (i = Fe(i)),
        (r = r(i)),
        (t.flags |= 1),
        ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ge(r, t.pendingProps)),
        (i = Ge(r.type, i)),
        Tc(e, t, r, i, n)
      );
    case 15:
      return Zh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        Fi(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), os(t)) : (e = !1),
        zn(t, n),
        Bh(t, r, i),
        ya(t, r, i, n),
        wa(null, t, r, !0, e, n)
      );
    case 19:
      return Yh(e, t, n);
    case 22:
      return Hh(e, t, n);
  }
  throw Error(b(156, t.tag));
};
function dp(e, t) {
  return zf(e, t);
}
function Ey(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Ve(e, t, n, r) {
  return new Ey(e, t, n, r);
}
function $l(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function by(e) {
  if (typeof e == "function") return $l(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === dl)) return 11;
    if (e === fl) return 14;
  }
  return 2;
}
function Ot(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ve(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Wi(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) $l(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case vn:
        return on(n.children, i, s, t);
      case cl:
        ((o = 8), (i |= 8));
        break;
      case Bo:
        return (
          (e = Ve(12, n, t, i | 2)),
          (e.elementType = Bo),
          (e.lanes = s),
          e
        );
      case Uo:
        return ((e = Ve(13, n, t, i)), (e.elementType = Uo), (e.lanes = s), e);
      case Wo:
        return ((e = Ve(19, n, t, i)), (e.elementType = Wo), (e.lanes = s), e);
      case kf:
        return Os(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case xf:
              o = 10;
              break e;
            case wf:
              o = 9;
              break e;
            case dl:
              o = 11;
              break e;
            case fl:
              o = 14;
              break e;
            case Pt:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(b(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ve(o, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function on(e, t, n, r) {
  return ((e = Ve(7, e, r, t)), (e.lanes = n), e);
}
function Os(e, t, n, r) {
  return (
    (e = Ve(22, e, r, t)),
    (e.elementType = kf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function wo(e, t, n) {
  return ((e = Ve(6, e, null, t)), (e.lanes = n), e);
}
function ko(e, t, n) {
  return (
    (t = Ve(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ay(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = eo(0)),
    (this.expirationTimes = eo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = eo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function Gl(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new Ay(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ve(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Nl(s),
    e
  );
}
function jy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: yn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function fp(e) {
  if (!e) return Bt;
  e = e._reactInternals;
  e: {
    if (pn(e) !== e || e.tag !== 1) throw Error(b(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(b(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return fh(e, n, t);
  }
  return t;
}
function hp(e, t, n, r, i, s, o, a, l) {
  return (
    (e = Gl(n, r, !0, e, i, s, o, a, l)),
    (e.context = fp(null)),
    (n = e.current),
    (r = we()),
    (i = zt(n)),
    (s = pt(r, i)),
    (s.callback = t ?? null),
    Vt(n, s, i),
    (e.current.lanes = i),
    qr(e, i, r),
    be(e, r),
    e
  );
}
function Fs(e, t, n, r) {
  var i = t.current,
    s = we(),
    o = zt(i);
  return (
    (n = fp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = pt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Vt(i, t, o)),
    e !== null && (Qe(e, i, o, s), _i(e, i, o)),
    o
  );
}
function xs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ic(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Kl(e, t) {
  (Ic(e, t), (e = e.alternate) && Ic(e, t));
}
function Ny() {
  return null;
}
var pp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Yl(e) {
  this._internalRoot = e;
}
Bs.prototype.render = Yl.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(b(409));
  Fs(e, t, null, null);
};
Bs.prototype.unmount = Yl.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (fn(function () {
      Fs(null, e, null, null);
    }),
      (t[gt] = null));
  }
};
function Bs(e) {
  this._internalRoot = e;
}
Bs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Hf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < bt.length && t !== 0 && t < bt[n].priority; n++);
    (bt.splice(n, 0, e), n === 0 && Gf(e));
  }
};
function Xl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Us(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Vc() {}
function My(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = xs(o);
        s.call(u);
      };
    }
    var o = hp(t, r, e, 0, null, !1, !1, "", Vc);
    return (
      (e._reactRootContainer = o),
      (e[gt] = o.current),
      _r(e.nodeType === 8 ? e.parentNode : e),
      fn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = xs(l);
      a.call(u);
    };
  }
  var l = Gl(e, 0, !1, null, null, !1, !1, "", Vc);
  return (
    (e._reactRootContainer = l),
    (e[gt] = l.current),
    _r(e.nodeType === 8 ? e.parentNode : e),
    fn(function () {
      Fs(t, l, n, r);
    }),
    l
  );
}
function Ws(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = xs(o);
        a.call(l);
      };
    }
    Fs(t, o, e, i);
  } else o = My(n, t, e, i, r);
  return xs(o);
}
Wf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = hr(t.pendingLanes);
        n !== 0 &&
          (ml(t, n | 1), be(t, J()), !(V & 6) && ((Gn = J() + 500), Ht()));
      }
      break;
    case 13:
      (fn(function () {
        var r = yt(e, 1);
        if (r !== null) {
          var i = we();
          Qe(r, e, 1, i);
        }
      }),
        Kl(e, 1));
  }
};
gl = function (e) {
  if (e.tag === 13) {
    var t = yt(e, 134217728);
    if (t !== null) {
      var n = we();
      Qe(t, e, 134217728, n);
    }
    Kl(e, 134217728);
  }
};
Zf = function (e) {
  if (e.tag === 13) {
    var t = zt(e),
      n = yt(e, t);
    if (n !== null) {
      var r = we();
      Qe(n, e, t, r);
    }
    Kl(e, t);
  }
};
Hf = function () {
  return _;
};
$f = function (e, t) {
  var n = _;
  try {
    return ((_ = e), t());
  } finally {
    _ = n;
  }
};
Jo = function (e, t, n) {
  switch (t) {
    case "input":
      if (($o(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Rs(r);
            if (!i) throw Error(b(90));
            (Tf(r), $o(r, i));
          }
        }
      }
      break;
    case "textarea":
      Pf(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Ln(e, !!n.multiple, t, !1));
  }
};
Df = Wl;
Rf = fn;
var Dy = { usingClientEntryPoint: !1, Events: [ei, Sn, Rs, Nf, Mf, Wl] },
  ur = {
    findFiberByHostInstance: Jt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ry = {
    bundleType: ur.bundleType,
    version: ur.version,
    rendererPackageName: ur.rendererPackageName,
    rendererConfig: ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Vf(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: ur.findFiberByHostInstance || Ny,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ei.isDisabled && Ei.supportsFiber)
    try {
      ((js = Ei.inject(Ry)), (st = Ei));
    } catch {}
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dy;
De.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xl(t)) throw Error(b(200));
  return jy(e, t, null, n);
};
De.createRoot = function (e, t) {
  if (!Xl(e)) throw Error(b(299));
  var n = !1,
    r = "",
    i = pp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Gl(e, 1, !1, null, null, n, !1, r, i)),
    (e[gt] = t.current),
    _r(e.nodeType === 8 ? e.parentNode : e),
    new Yl(t)
  );
};
De.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(b(188))
      : ((e = Object.keys(e).join(",")), Error(b(268, e)));
  return ((e = Vf(t)), (e = e === null ? null : e.stateNode), e);
};
De.flushSync = function (e) {
  return fn(e);
};
De.hydrate = function (e, t, n) {
  if (!Us(t)) throw Error(b(200));
  return Ws(null, e, t, !0, n);
};
De.hydrateRoot = function (e, t, n) {
  if (!Xl(e)) throw Error(b(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = pp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = hp(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[gt] = t.current),
    _r(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new Bs(t);
};
De.render = function (e, t, n) {
  if (!Us(t)) throw Error(b(200));
  return Ws(null, e, t, !1, n);
};
De.unmountComponentAtNode = function (e) {
  if (!Us(e)) throw Error(b(40));
  return e._reactRootContainer
    ? (fn(function () {
        Ws(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[gt] = null));
        });
      }),
      !0)
    : !1;
};
De.unstable_batchedUpdates = Wl;
De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Us(n)) throw Error(b(200));
  if (e == null || e._reactInternals === void 0) throw Error(b(38));
  return Ws(e, t, n, !1, r);
};
De.version = "18.3.1-next-f1338f8080-20240426";
function mp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mp);
    } catch (e) {
      console.error(e);
    }
}
(mp(), (mf.exports = De));
var Ly = mf.exports,
  _c = Ly;
((Oo.createRoot = _c.createRoot), (Oo.hydrateRoot = _c.hydrateRoot));
const Ql = P.createContext({});
function ql(e) {
  const t = P.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const gp = typeof window < "u",
  yp = gp ? P.useLayoutEffect : P.useEffect,
  Zs = P.createContext(null);
function Jl(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ws(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const lt = (e, t, n) => (n > t ? t : n < e ? e : n);
let eu = () => {};
const xt = {},
  vp = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function xp(e) {
  return typeof e == "object" && e !== null;
}
const wp = (e) => /^0[^.\s]+$/u.test(e);
function kp(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Oe = (e) => e,
  Iy = (e, t) => (n) => t(e(n)),
  ni = (...e) => e.reduce(Iy),
  $r = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class tu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (Jl(this.subscriptions, t), () => ws(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const qe = (e) => e * 1e3,
  _e = (e) => e / 1e3;
function Sp(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Tp = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Vy = 1e-7,
  _y = 12;
function zy(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do ((o = t + (n - t) / 2), (s = Tp(o, r, i) - e), s > 0 ? (n = o) : (t = o));
  while (Math.abs(s) > Vy && ++a < _y);
  return o;
}
function ri(e, t, n, r) {
  if (e === t && n === r) return Oe;
  const i = (s) => zy(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : Tp(i(s), t, r));
}
const Cp = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Pp = (e) => (t) => 1 - e(1 - t),
  Ep = ri(0.33, 1.53, 0.69, 0.99),
  nu = Pp(Ep),
  bp = Cp(nu),
  Ap = (e) =>
    (e *= 2) < 1 ? 0.5 * nu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  ru = (e) => 1 - Math.sin(Math.acos(e)),
  jp = Pp(ru),
  Np = Cp(ru),
  Oy = ri(0.42, 0, 1, 1),
  Fy = ri(0, 0, 0.58, 1),
  Mp = ri(0.42, 0, 0.58, 1),
  By = (e) => Array.isArray(e) && typeof e[0] != "number",
  Dp = (e) => Array.isArray(e) && typeof e[0] == "number",
  Uy = {
    linear: Oe,
    easeIn: Oy,
    easeInOut: Mp,
    easeOut: Fy,
    circIn: ru,
    circInOut: Np,
    circOut: jp,
    backIn: nu,
    backInOut: bp,
    backOut: Ep,
    anticipate: Ap,
  },
  Wy = (e) => typeof e == "string",
  zc = (e) => {
    if (Dp(e)) {
      eu(e.length === 4);
      const [t, n, r, i] = e;
      return ri(t, n, r, i);
    } else if (Wy(e)) return Uy[e];
    return e;
  },
  bi = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function Zy(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    s = !1;
  const o = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(c) {
    (o.has(c) && (u.schedule(c), e()), c(a));
  }
  const u = {
    schedule: (c, f = !1, d = !1) => {
      const v = d && i ? n : r;
      return (f && o.add(c), v.has(c) || v.add(c), c);
    },
    cancel: (c) => {
      (r.delete(c), o.delete(c));
    },
    process: (c) => {
      if (((a = c), i)) {
        s = !0;
        return;
      }
      ((i = !0),
        ([n, r] = [r, n]),
        n.forEach(l),
        n.clear(),
        (i = !1),
        s && ((s = !1), u.process(c)));
    },
  };
  return u;
}
const Hy = 40;
function Rp(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = bi.reduce((g, w) => ((g[w] = Zy(s)), g), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: f,
      preRender: d,
      render: y,
      postRender: v,
    } = o,
    x = () => {
      const g = xt.useManualTiming ? i.timestamp : performance.now();
      ((n = !1),
        xt.useManualTiming ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(g - i.timestamp, Hy), 1)),
        (i.timestamp = g),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        y.process(i),
        v.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(x)));
    },
    S = () => {
      ((n = !0), (r = !0), i.isProcessing || e(x));
    };
  return {
    schedule: bi.reduce((g, w) => {
      const k = o[w];
      return (
        (g[w] = (C, E = !1, T = !1) => (n || S(), k.schedule(C, E, T))),
        g
      );
    }, {}),
    cancel: (g) => {
      for (let w = 0; w < bi.length; w++) o[bi[w]].cancel(g);
    },
    state: i,
    steps: o,
  };
}
const {
  schedule: F,
  cancel: Ut,
  state: ue,
  steps: So,
} = Rp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Oe, !0);
let Zi;
function $y() {
  Zi = void 0;
}
const ve = {
    now: () => (
      Zi === void 0 &&
        ve.set(
          ue.isProcessing || xt.useManualTiming
            ? ue.timestamp
            : performance.now(),
        ),
      Zi
    ),
    set: (e) => {
      ((Zi = e), queueMicrotask($y));
    },
  },
  Lp = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Ip = Lp("--"),
  Gy = Lp("var(--"),
  iu = (e) => (Gy(e) ? Ky.test(e.split("/*")[0].trim()) : !1),
  Ky =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Oc(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const qn = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Gr = { ...qn, transform: (e) => lt(0, 1, e) },
  Ai = { ...qn, default: 1 },
  Pr = (e) => Math.round(e * 1e5) / 1e5,
  su = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Yy(e) {
  return e == null;
}
const Xy =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ou = (e, t) => (n) =>
    !!(
      (typeof n == "string" && Xy.test(n) && n.startsWith(e)) ||
      (t && !Yy(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Vp = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, a] = r.match(su);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Qy = (e) => lt(0, 255, e),
  To = { ...qn, transform: (e) => Math.round(Qy(e)) },
  nn = {
    test: ou("rgb", "red"),
    parse: Vp("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      To.transform(e) +
      ", " +
      To.transform(t) +
      ", " +
      To.transform(n) +
      ", " +
      Pr(Gr.transform(r)) +
      ")",
  };
function qy(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Da = { test: ou("#"), parse: qy, transform: nn.transform },
  ii = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Tt = ii("deg"),
  at = ii("%"),
  D = ii("px"),
  Jy = ii("vh"),
  ev = ii("vw"),
  Fc = {
    ...at,
    parse: (e) => at.parse(e) / 100,
    transform: (e) => at.transform(e * 100),
  },
  jn = {
    test: ou("hsl", "hue"),
    parse: Vp("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      at.transform(Pr(t)) +
      ", " +
      at.transform(Pr(n)) +
      ", " +
      Pr(Gr.transform(r)) +
      ")",
  },
  ee = {
    test: (e) => nn.test(e) || Da.test(e) || jn.test(e),
    parse: (e) =>
      nn.test(e) ? nn.parse(e) : jn.test(e) ? jn.parse(e) : Da.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? nn.transform(e)
          : jn.transform(e),
    getAnimatableNone: (e) => {
      const t = ee.parse(e);
      return ((t.alpha = 0), ee.transform(t));
    },
  },
  tv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function nv(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(su)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(tv)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const _p = "number",
  zp = "color",
  rv = "var",
  iv = "var(",
  Bc = "${}",
  sv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Kr(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      sv,
      (l) => (
        ee.test(l)
          ? (r.color.push(s), i.push(zp), n.push(ee.parse(l)))
          : l.startsWith(iv)
            ? (r.var.push(s), i.push(rv), n.push(l))
            : (r.number.push(s), i.push(_p), n.push(parseFloat(l))),
        ++s,
        Bc
      ),
    )
    .split(Bc);
  return { values: n, split: a, indexes: r, types: i };
}
function Op(e) {
  return Kr(e).values;
}
function Fp(e) {
  const { split: t, types: n } = Kr(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === _p
          ? (s += Pr(i[o]))
          : a === zp
            ? (s += ee.transform(i[o]))
            : (s += i[o]);
      }
    return s;
  };
}
const ov = (e) =>
  typeof e == "number" ? 0 : ee.test(e) ? ee.getAnimatableNone(e) : e;
function av(e) {
  const t = Op(e);
  return Fp(e)(t.map(ov));
}
const Je = {
  test: nv,
  parse: Op,
  createTransformer: Fp,
  getAnimatableNone: av,
};
function Co(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function lv({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((i = Co(l, a, e + 1 / 3)), (s = Co(l, a, e)), (o = Co(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function ks(e, t) {
  return (n) => (n > 0 ? t : e);
}
const G = (e, t, n) => e + (t - e) * n,
  Po = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  uv = [Da, nn, jn],
  cv = (e) => uv.find((t) => t.test(e));
function Uc(e) {
  const t = cv(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === jn && (n = lv(n)), n);
}
const Wc = (e, t) => {
    const n = Uc(e),
      r = Uc(t);
    if (!n || !r) return ks(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = Po(n.red, r.red, s)),
      (i.green = Po(n.green, r.green, s)),
      (i.blue = Po(n.blue, r.blue, s)),
      (i.alpha = G(n.alpha, r.alpha, s)),
      nn.transform(i)
    );
  },
  Ra = new Set(["none", "hidden"]);
function dv(e, t) {
  return Ra.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function fv(e, t) {
  return (n) => G(e, t, n);
}
function au(e) {
  return typeof e == "number"
    ? fv
    : typeof e == "string"
      ? iu(e)
        ? ks
        : ee.test(e)
          ? Wc
          : mv
      : Array.isArray(e)
        ? Bp
        : typeof e == "object"
          ? ee.test(e)
            ? Wc
            : hv
          : ks;
}
function Bp(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => au(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function hv(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = au(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function pv(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      o = e.indexes[s][r[s]],
      a = e.values[o] ?? 0;
    ((n[i] = a), r[s]++);
  }
  return n;
}
const mv = (e, t) => {
  const n = Je.createTransformer(t),
    r = Kr(e),
    i = Kr(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Ra.has(e) && !i.values.length) || (Ra.has(t) && !r.values.length)
      ? dv(e, t)
      : ni(Bp(pv(r, i), i.values), n)
    : ks(e, t);
};
function Up(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? G(e, t, n)
    : au(e)(e, t);
}
const gv = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => F.update(t, n),
      stop: () => Ut(t),
      now: () => (ue.isProcessing ? ue.timestamp : ve.now()),
    };
  },
  Wp = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++)
      r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Ss = 2e4;
function lu(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ss; ) ((t += n), (r = e.next(t)));
  return t >= Ss ? 1 / 0 : t;
}
function yv(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(lu(r), Ss);
  return {
    type: "keyframes",
    ease: (s) => r.next(i * s).value / t,
    duration: _e(i),
  };
}
const vv = 5;
function Zp(e, t, n) {
  const r = Math.max(t - vv, 0);
  return Sp(n - e(r), t - r);
}
const X = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Eo = 0.001;
function xv({
  duration: e = X.duration,
  bounce: t = X.bounce,
  velocity: n = X.velocity,
  mass: r = X.mass,
}) {
  let i,
    s,
    o = 1 - t;
  ((o = lt(X.minDamping, X.maxDamping, o)),
    (e = lt(X.minDuration, X.maxDuration, _e(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            f = c * e,
            d = c - n,
            y = La(u, o),
            v = Math.exp(-f);
          return Eo - (d / y) * v;
        }),
        (s = (u) => {
          const f = u * o * e,
            d = f * n + n,
            y = Math.pow(o, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            x = La(Math.pow(u, 2), o);
          return ((-i(u) + Eo > 0 ? -1 : 1) * ((d - y) * v)) / x;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Eo + c * f;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        })));
  const a = 5 / e,
    l = kv(i, s, a);
  if (((e = qe(e)), isNaN(l)))
    return { stiffness: X.stiffness, damping: X.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const wv = 12;
function kv(e, t, n) {
  let r = n;
  for (let i = 1; i < wv; i++) r = r - e(r) / t(r);
  return r;
}
function La(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Sv = ["duration", "bounce"],
  Tv = ["stiffness", "damping", "mass"];
function Zc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Cv(e) {
  let t = {
    velocity: X.velocity,
    stiffness: X.stiffness,
    damping: X.damping,
    mass: X.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Zc(e, Tv) && Zc(e, Sv))
    if (((t.velocity = 0), e.visualDuration)) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * lt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: X.mass, stiffness: i, damping: s };
    } else {
      const n = xv({ ...e, velocity: 0 });
      ((t = { ...t, ...n, mass: X.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Ts(e = X.visualDuration, t = X.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: f,
      velocity: d,
      isResolvedFromDuration: y,
    } = Cv({ ...n, velocity: -_e(n.velocity || 0) }),
    v = d || 0,
    x = u / (2 * Math.sqrt(l * c)),
    S = o - s,
    p = _e(Math.sqrt(l / c)),
    m = Math.abs(S) < 5;
  (r || (r = m ? X.restSpeed.granular : X.restSpeed.default),
    i || (i = m ? X.restDelta.granular : X.restDelta.default));
  let g;
  if (x < 1) {
    const k = La(p, x);
    g = (C) => {
      const E = Math.exp(-x * p * C);
      return (
        o - E * (((v + x * p * S) / k) * Math.sin(k * C) + S * Math.cos(k * C))
      );
    };
  } else if (x === 1) g = (k) => o - Math.exp(-p * k) * (S + (v + p * S) * k);
  else {
    const k = p * Math.sqrt(x * x - 1);
    g = (C) => {
      const E = Math.exp(-x * p * C),
        T = Math.min(k * C, 300);
      return (
        o - (E * ((v + x * p * S) * Math.sinh(T) + k * S * Math.cosh(T))) / k
      );
    };
  }
  const w = {
    calculatedDuration: (y && f) || null,
    next: (k) => {
      const C = g(k);
      if (y) a.done = k >= f;
      else {
        let E = k === 0 ? v : 0;
        x < 1 && (E = k === 0 ? qe(v) : Zp(g, k, C));
        const T = Math.abs(E) <= r,
          N = Math.abs(o - C) <= i;
        a.done = T && N;
      }
      return ((a.value = a.done ? o : C), a);
    },
    toString: () => {
      const k = Math.min(lu(w), Ss),
        C = Wp((E) => w.next(k * E).value, k, 30);
      return k + "ms " + C;
    },
    toTransition: () => {},
  };
  return w;
}
Ts.applyToOptions = (e) => {
  const t = yv(e, 100, Ts);
  return (
    (e.ease = t.ease),
    (e.duration = qe(t.duration)),
    (e.type = "keyframes"),
    e
  );
};
function Ia({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    y = (T) => (a !== void 0 && T < a) || (l !== void 0 && T > l),
    v = (T) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - T) < Math.abs(l - T)
          ? a
          : l;
  let x = n * t;
  const S = f + x,
    p = o === void 0 ? S : o(S);
  p !== S && (x = p - f);
  const m = (T) => -x * Math.exp(-T / r),
    g = (T) => p + m(T),
    w = (T) => {
      const N = m(T),
        M = g(T);
      ((d.done = Math.abs(N) <= u), (d.value = d.done ? p : M));
    };
  let k, C;
  const E = (T) => {
    y(d.value) &&
      ((k = T),
      (C = Ts({
        keyframes: [d.value, v(d.value)],
        velocity: Zp(g, T, d.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let N = !1;
        return (
          !C && k === void 0 && ((N = !0), w(T), E(T)),
          k !== void 0 && T >= k ? C.next(T - k) : (!N && w(T), d)
        );
      },
    }
  );
}
function Pv(e, t, n) {
  const r = [],
    i = n || xt.mix || Up,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Oe : t;
      a = ni(l, a);
    }
    r.push(a);
  }
  return r;
}
function Ev(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((eu(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = Pv(t, r, i),
    l = a.length,
    u = (c) => {
      if (o && c < e[0]) return t[0];
      let f = 0;
      if (l > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
      const d = $r(e[f], e[f + 1], c);
      return a[f](d);
    };
  return n ? (c) => u(lt(e[0], e[s - 1], c)) : u;
}
function bv(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = $r(0, t, r);
    e.push(G(n, 1, i));
  }
}
function Av(e) {
  const t = [0];
  return (bv(t, e.length - 1), t);
}
function jv(e, t) {
  return e.map((n) => n * t);
}
function Nv(e, t) {
  return e.map(() => t || Mp).splice(0, e.length - 1);
}
function Er({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = By(r) ? r.map(zc) : zc(r),
    s = { done: !1, value: t[0] },
    o = jv(n && n.length === t.length ? n : Av(t), e),
    a = Ev(o, t, { ease: Array.isArray(i) ? i : Nv(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const Mv = (e) => e !== null;
function uu(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const s = e.filter(Mv),
    a = i < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : s.length - 1;
  return !a || r === void 0 ? s[a] : r;
}
const Dv = { decay: Ia, inertia: Ia, tween: Er, keyframes: Er, spring: Ts };
function Hp(e) {
  typeof e.type == "string" && (e.type = Dv[e.type]);
}
class cu {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const Rv = (e) => e / 100;
class du extends cu {
  constructor(t) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== ve.now() && this.tick(ve.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r)));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: t } = this;
    Hp(t);
    const {
      type: n = Er,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: s,
      velocity: o = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || Er;
    l !== Er &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = ni(Rv, Up(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...t, keyframes: a });
    (s === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -o,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = lu(u)));
    const { calculatedDuration: c } = u;
    ((this.calculatedDuration = c),
      (this.resolvedDuration = c + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = u));
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: s,
      mirroredGenerator: o,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: f,
      repeatType: d,
      repeatDelay: y,
      type: v,
      onUpdate: x,
      finalKeyframe: S,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t));
    const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      m = this.playbackSpeed >= 0 ? p < 0 : p > i;
    ((this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = i));
    let g = this.currentTime,
      w = r;
    if (f) {
      const T = Math.min(this.currentTime, i) / a;
      let N = Math.floor(T),
        M = T % 1;
      (!M && T >= 1 && (M = 1),
        M === 1 && N--,
        (N = Math.min(N, f + 1)),
        !!(N % 2) &&
          (d === "reverse"
            ? ((M = 1 - M), y && (M -= y / a))
            : d === "mirror" && (w = o)),
        (g = lt(0, 1, M) * a));
    }
    const k = m ? { done: !1, value: c[0] } : w.next(g);
    s && (k.value = s(k.value));
    let { done: C } = k;
    !m &&
      l !== null &&
      (C =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const E =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && C));
    return (
      E && v !== Ia && (k.value = uu(c, this.options, S, this.speed)),
      x && x(k.value),
      E && this.finish(),
      k
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return _e(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + _e(t);
  }
  get time() {
    return _e(this.currentTime);
  }
  set time(t) {
    var n;
    ((t = qe(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(ve.now());
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = _e(this.currentTime)));
  }
  play() {
    var i, s;
    if (this.isStopped) return;
    const { driver: t = gv, startTime: n } = this.options;
    (this.driver || (this.driver = t((o) => this.tick(o))),
      (s = (i = this.options).onPlay) == null || s.call(i));
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(ve.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var t, n;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t));
  }
  cancel() {
    var t, n;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function Lv(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const rn = (e) => (e * 180) / Math.PI,
  Va = (e) => {
    const t = rn(Math.atan2(e[1], e[0]));
    return _a(t);
  },
  Iv = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Va,
    rotateZ: Va,
    skewX: (e) => rn(Math.atan(e[1])),
    skewY: (e) => rn(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  _a = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  Hc = Va,
  $c = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Gc = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  Vv = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: $c,
    scaleY: Gc,
    scale: (e) => ($c(e) + Gc(e)) / 2,
    rotateX: (e) => _a(rn(Math.atan2(e[6], e[5]))),
    rotateY: (e) => _a(rn(Math.atan2(-e[2], e[0]))),
    rotateZ: Hc,
    rotate: Hc,
    skewX: (e) => rn(Math.atan(e[4])),
    skewY: (e) => rn(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function za(e) {
  return e.includes("scale") ? 1 : 0;
}
function Oa(e, t) {
  if (!e || e === "none") return za(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) ((r = Vv), (i = n));
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = Iv), (i = a));
  }
  if (!i) return za(t);
  const s = r[t],
    o = i[1].split(",").map(zv);
  return typeof s == "function" ? s(o) : o[s];
}
const _v = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Oa(n, t);
};
function zv(e) {
  return parseFloat(e.trim());
}
const Jn = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  er = new Set(Jn),
  Kc = (e) => e === qn || e === D,
  Ov = new Set(["x", "y", "z"]),
  Fv = Jn.filter((e) => !Ov.has(e));
function Bv(e) {
  const t = [];
  return (
    Fv.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Mt = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Oa(t, "x"),
  y: (e, { transform: t }) => Oa(t, "y"),
};
Mt.translateX = Mt.x;
Mt.translateY = Mt.y;
const an = new Set();
let Fa = !1,
  Ba = !1,
  Ua = !1;
function $p() {
  if (Ba) {
    const e = Array.from(an).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const i = Bv(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) == null || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((Ba = !1), (Fa = !1), an.forEach((e) => e.complete(Ua)), an.clear());
}
function Gp() {
  an.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Ba = !0));
  });
}
function Uv() {
  ((Ua = !0), Gp(), $p(), (Ua = !1));
}
class fu {
  constructor(t, n, r, i, s, o = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (an.add(this), Fa || ((Fa = !0), F.read(Gp), F.resolveKeyframes($p)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    if (t[0] === null) {
      const s = i == null ? void 0 : i.get(),
        o = t[t.length - 1];
      if (s !== void 0) t[0] = s;
      else if (r && n) {
        const a = r.readValue(n, o);
        a != null && (t[0] = a);
      }
      (t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0]));
    }
    Lv(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      an.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (an.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Wv = (e) => e.startsWith("--");
function Zv(e, t, n) {
  Wv(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const Hv = {};
function Kp(e, t) {
  const n = kp(e);
  return () => Hv[t] ?? n();
}
const $v = Kp(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  Yp = Kp(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  mr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Yc = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: mr([0, 0.65, 0.55, 1]),
    circOut: mr([0.55, 0, 1, 0.45]),
    backIn: mr([0.31, 0.01, 0.66, -0.59]),
    backOut: mr([0.33, 1.53, 0.69, 0.99]),
  };
function Xp(e, t) {
  if (e)
    return typeof e == "function"
      ? Yp()
        ? Wp(e, t)
        : "ease-out"
      : Dp(e)
        ? mr(e)
        : Array.isArray(e)
          ? e.map((n) => Xp(n, t) || Yc.easeOut)
          : Yc[e];
}
function Gv(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  u = void 0,
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const f = Xp(a, i);
  Array.isArray(f) && (c.easing = f);
  const d = {
    delay: r,
    duration: i,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal",
  };
  return (u && (d.pseudoElement = u), e.animate(c, d));
}
function Qp(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function Kv({ type: e, ...t }) {
  return Qp(e) && Yp()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class qp extends cu {
  constructor(t) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !t)
    )
      return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: s,
      allowFlatten: o = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    ((this.isPseudoElement = !!s),
      (this.allowFlatten = o),
      (this.options = t),
      eu(typeof t.type != "string"));
    const u = Kv(t);
    ((this.animation = Gv(n, r, i, u, s)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !s)) {
          const c = uu(i, this.options, a, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(c) : Zv(n, r, c),
            this.animation.cancel());
        }
        (l == null || l(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var n, r, i;
    const t = (n = this.options) == null ? void 0 : n.element;
    !this.isPseudoElement &&
      t != null &&
      t.isConnected &&
      ((i = (r = this.animation).commitStyles) == null || i.call(r));
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return _e(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + _e(t);
  }
  get time() {
    return _e(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = qe(t)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return (
      this.allowFlatten &&
        ((r = this.animation.effect) == null ||
          r.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && $v() ? ((this.animation.timeline = t), Oe) : n(this)
    );
  }
}
const Jp = { anticipate: Ap, backInOut: bp, circInOut: Np };
function Yv(e) {
  return e in Jp;
}
function Xv(e) {
  typeof e.ease == "string" && Yv(e.ease) && (e.ease = Jp[e.ease]);
}
const bo = 10;
class Qv extends qp {
  constructor(t) {
    (Xv(t),
      Hp(t),
      super(t),
      t.startTime !== void 0 && (this.startTime = t.startTime),
      (this.options = t));
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: s,
      ...o
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new du({ ...o, autoplay: !1 }),
      l = Math.max(bo, ve.now() - this.startTime),
      u = lt(0, bo, l - bo);
    (n.setWithVelocity(
      a.sample(Math.max(0, l - u)).value,
      a.sample(l).value,
      u,
    ),
      a.stop());
  }
}
const Xc = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Je.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function qv(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Jv(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = Xc(i, t),
    a = Xc(s, t);
  return !o || !a ? !1 : qv(e) || ((n === "spring" || Qp(n)) && r);
}
function Wa(e) {
  ((e.duration = 0), (e.type = "keyframes"));
}
const ex = new Set(["opacity", "clipPath", "filter", "transform"]),
  tx = kp(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function nx(e) {
  var c;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: s,
    type: o,
  } = e;
  if (
    !(
      ((c = t == null ? void 0 : t.owner) == null
        ? void 0
        : c.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return (
    tx() &&
    n &&
    ex.has(n) &&
    (n !== "transform" || !u) &&
    !l &&
    !r &&
    i !== "mirror" &&
    s !== 0 &&
    o !== "inertia"
  );
}
const rx = 40;
class ix extends cu {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...f
  }) {
    var v;
    (super(),
      (this.stop = () => {
        var x, S;
        (this._animation &&
          (this._animation.stop(),
          (x = this.stopTimeline) == null || x.call(this)),
          (S = this.keyframeResolver) == null || S.cancel());
      }),
      (this.createdAt = ve.now()));
    const d = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        name: l,
        motionValue: u,
        element: c,
        ...f,
      },
      y = (c == null ? void 0 : c.KeyframeResolver) || fu;
    ((this.keyframeResolver = new y(
      a,
      (x, S, p) => this.onKeyframesResolved(x, S, d, !p),
      l,
      u,
      c,
    )),
      (v = this.keyframeResolver) == null || v.scheduleResolve());
  }
  onKeyframesResolved(t, n, r, i) {
    var S, p;
    this.keyframeResolver = void 0;
    const {
      name: s,
      type: o,
      velocity: a,
      delay: l,
      isHandoff: u,
      onUpdate: c,
    } = r;
    ((this.resolvedAt = ve.now()),
      Jv(t, s, o, a) ||
        ((xt.instantAnimations || !l) && (c == null || c(uu(t, r, n))),
        (t[0] = t[t.length - 1]),
        Wa(r),
        (r.repeat = 0)));
    const d = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > rx
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      y = !u && nx(d),
      v =
        (p = (S = d.motionValue) == null ? void 0 : S.owner) == null
          ? void 0
          : p.current,
      x = y ? new Qv({ ...d, element: v }) : new du(d);
    (x.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Oe),
      this.pendingTimeline &&
        ((this.stopTimeline = x.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = x));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), Uv()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    (this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel());
  }
}
function em(e, t, n, r = 0, i = 1) {
  const s = Array.from(e)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(t),
    o = e.size,
    a = (o - 1) * r;
  return typeof n == "function" ? n(s, o) : i === 1 ? s * r : a - s * r;
}
const sx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function ox(e) {
  const t = sx.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function tm(e, t, n = 1) {
  const [r, i] = ox(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return vp(o) ? parseFloat(o) : o;
  }
  return iu(i) ? tm(i, t, n + 1) : i;
}
const ax = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  lx = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  ux = { type: "keyframes", duration: 0.8 },
  cx = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  dx = (e, { keyframes: t }) =>
    t.length > 2
      ? ux
      : er.has(e)
        ? e.startsWith("scale")
          ? lx(t[1])
          : ax
        : cx,
  fx = (e) => e !== null;
function hx(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(fx),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return i[s];
}
function nm(e, t) {
  if (e != null && e.inherit && t) {
    const { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function hu(e, t) {
  const n =
    (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
  return n !== e ? nm(n, e) : n;
}
function px({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const pu =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const a = hu(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - qe(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (d) => {
        (t.set(d), a.onUpdate && a.onUpdate(d));
      },
      onComplete: () => {
        (o(), a.onComplete && a.onComplete());
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    (px(a) || Object.assign(c, dx(e, c)),
      c.duration && (c.duration = qe(c.duration)),
      c.repeatDelay && (c.repeatDelay = qe(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from));
    let f = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        (Wa(c), c.delay === 0 && (f = !0)),
      (xt.instantAnimations ||
        xt.skipAnimations ||
        (i != null && i.shouldSkipAnimations)) &&
        ((f = !0), Wa(c), (c.delay = 0)),
      (c.allowFlatten = !a.type && !a.ease),
      f && !s && t.get() !== void 0)
    ) {
      const d = hx(c.keyframes, a);
      if (d !== void 0) {
        F.update(() => {
          (c.onUpdate(d), c.onComplete());
        });
        return;
      }
    }
    return a.isSync ? new du(c) : new ix(c);
  };
function Qc(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function mu(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Qc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = Qc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function Fn(e, t, n) {
  const r = e.getProps();
  return mu(r, t, n !== void 0 ? n : r.custom, e);
}
const rm = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Jn,
  ]),
  qc = 30,
  mx = (e) => !isNaN(parseFloat(e));
class gx {
  constructor(t, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var s;
        const i = ve.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((s = this.events.change) == null || s.notify(this.current),
            this.dependents))
        )
          for (const o of this.dependents) o.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = ve.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = mx(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new tu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            F.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = ve.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > qc
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, qc);
    return Sp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    ((t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Kn(e, t) {
  return new gx(e, t);
}
const Za = (e) => Array.isArray(e);
function yx(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Kn(n));
}
function vx(e) {
  return Za(e) ? e[e.length - 1] || 0 : e;
}
function xx(e, t) {
  const n = Fn(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = vx(s[o]);
    yx(e, o, a);
  }
}
const me = (e) => !!(e && e.getVelocity);
function wx(e) {
  return !!(me(e) && e.add);
}
function Ha(e, t) {
  const n = e.getValue("willChange");
  if (wx(n)) return n.add(t);
  if (!n && xt.WillChange) {
    const r = new xt.WillChange("auto");
    (e.addValue("willChange", r), r.add(t));
  }
}
function gu(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const kx = "framerAppearId",
  im = "data-" + gu(kx);
function sm(e) {
  return e.props[im];
}
function Sx({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function om(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: s, transitionEnd: o, ...a } = t;
  const l = e.getDefaultTransition();
  s = s ? nm(s, l) : l;
  const u = s == null ? void 0 : s.reduceMotion;
  r && (s = r);
  const c = [],
    f = i && e.animationState && e.animationState.getState()[i];
  for (const d in a) {
    const y = e.getValue(d, e.latestValues[d] ?? null),
      v = a[d];
    if (v === void 0 || (f && Sx(f, d))) continue;
    const x = { delay: n, ...hu(s || {}, d) },
      S = y.get();
    if (
      S !== void 0 &&
      !y.isAnimating &&
      !Array.isArray(v) &&
      v === S &&
      !x.velocity
    )
      continue;
    let p = !1;
    if (window.MotionHandoffAnimation) {
      const w = sm(e);
      if (w) {
        const k = window.MotionHandoffAnimation(w, d, F);
        k !== null && ((x.startTime = k), (p = !0));
      }
    }
    Ha(e, d);
    const m = u ?? e.shouldReduceMotion;
    y.start(pu(d, y, v, m && rm.has(d) ? { type: !1 } : x, e, p));
    const g = y.animation;
    g && c.push(g);
  }
  if (o) {
    const d = () =>
      F.update(() => {
        o && xx(e, o);
      });
    c.length ? Promise.all(c).then(d) : d();
  }
  return c;
}
function $a(e, t, n = {}) {
  var l;
  const r = Fn(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0,
  );
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = r ? () => Promise.all(om(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = i;
            return Tx(e, t, u, c, f, d, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [s, o] : [o, s];
    return u().then(() => c());
  } else return Promise.all([s(), o(n.delay)]);
}
function Tx(e, t, n = 0, r = 0, i = 0, s = 1, o) {
  const a = [];
  for (const l of e.variantChildren)
    (l.notify("AnimationStart", t),
      a.push(
        $a(l, t, {
          ...o,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            em(e.variantChildren, l, r, i, s),
        }).then(() => l.notify("AnimationComplete", t)),
      ));
  return Promise.all(a);
}
function Cx(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => $a(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = $a(e, t, n);
  else {
    const i = typeof t == "function" ? Fn(e, t, n.custom) : t;
    r = Promise.all(om(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Px = { test: (e) => e === "auto", parse: (e) => e },
  am = (e) => (t) => t.test(e),
  lm = [qn, D, at, Tt, ev, Jy, Px],
  Jc = (e) => lm.find(am(e));
function Ex(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || wp(e)
      : !0;
}
const bx = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ax(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(su) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = bx.has(t) ? 1 : 0;
  return (r !== n && (s *= 100), t + "(" + s + i + ")");
}
const jx = /\b([a-z-]*)\(.*?\)/gu,
  Ga = {
    ...Je,
    getAnimatableNone: (e) => {
      const t = e.match(jx);
      return t ? t.map(Ax).join(" ") : e;
    },
  },
  Ka = {
    ...Je,
    getAnimatableNone: (e) => {
      const t = Je.parse(e);
      return Je.createTransformer(e)(
        t.map((r) =>
          typeof r == "number"
            ? 0
            : typeof r == "object"
              ? { ...r, alpha: 1 }
              : r,
        ),
      );
    },
  },
  ed = { ...qn, transform: Math.round },
  Nx = {
    rotate: Tt,
    rotateX: Tt,
    rotateY: Tt,
    rotateZ: Tt,
    scale: Ai,
    scaleX: Ai,
    scaleY: Ai,
    scaleZ: Ai,
    skew: Tt,
    skewX: Tt,
    skewY: Tt,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: Gr,
    originX: Fc,
    originY: Fc,
    originZ: D,
  },
  yu = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    inset: D,
    insetBlock: D,
    insetBlockStart: D,
    insetBlockEnd: D,
    insetInline: D,
    insetInlineStart: D,
    insetInlineEnd: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    paddingBlock: D,
    paddingBlockStart: D,
    paddingBlockEnd: D,
    paddingInline: D,
    paddingInlineStart: D,
    paddingInlineEnd: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    marginBlock: D,
    marginBlockStart: D,
    marginBlockEnd: D,
    marginInline: D,
    marginInlineStart: D,
    marginInlineEnd: D,
    fontSize: D,
    backgroundPositionX: D,
    backgroundPositionY: D,
    ...Nx,
    zIndex: ed,
    fillOpacity: Gr,
    strokeOpacity: Gr,
    numOctaves: ed,
  },
  Mx = {
    ...yu,
    color: ee,
    backgroundColor: ee,
    outlineColor: ee,
    fill: ee,
    stroke: ee,
    borderColor: ee,
    borderTopColor: ee,
    borderRightColor: ee,
    borderBottomColor: ee,
    borderLeftColor: ee,
    filter: Ga,
    WebkitFilter: Ga,
    mask: Ka,
    WebkitMask: Ka,
  },
  um = (e) => Mx[e],
  Dx = new Set([Ga, Ka]);
function cm(e, t) {
  let n = um(e);
  return (
    Dx.has(n) || (n = Je),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Rx = new Set(["auto", "none", "0"]);
function Lx(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    (typeof s == "string" && !Rx.has(s) && Kr(s).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (const s of t) e[s] = cm(n, i);
}
class Ix extends fu {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let f = t[c];
      if (typeof f == "string" && ((f = f.trim()), iu(f))) {
        const d = tm(f, n.current);
        (d !== void 0 && (t[c] = d),
          c === t.length - 1 && (this.finalKeyframe = f));
      }
    }
    if ((this.resolveNoneKeyframes(), !rm.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = Jc(i),
      a = Jc(s),
      l = Oc(i),
      u = Oc(s);
    if (l !== u && Mt[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (o !== a)
      if (Kc(o) && Kc(a))
        for (let c = 0; c < t.length; c++) {
          const f = t[c];
          typeof f == "string" && (t[c] = parseFloat(f));
        }
      else Mt[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || Ex(t[i])) && r.push(i);
    r.length && Lx(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Mt[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const s = r.length - 1,
      o = r[s];
    ((r[s] = Mt[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, u]) => {
          t.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
const Vx = new Set(["opacity", "clipPath", "filter", "transform"]);
function dm(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    let r = document;
    const i = (n == null ? void 0 : n[e]) ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((r) => r != null);
}
const fm = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function Ya(e) {
  return xp(e) && "offsetHeight" in e;
}
const { schedule: vu } = Rp(queueMicrotask, !1),
  $e = { x: !1, y: !1 };
function hm() {
  return $e.x || $e.y;
}
function _x(e) {
  return e === "x" || e === "y"
    ? $e[e]
      ? null
      : (($e[e] = !0),
        () => {
          $e[e] = !1;
        })
    : $e.x || $e.y
      ? null
      : (($e.x = $e.y = !0),
        () => {
          $e.x = $e.y = !1;
        });
}
function pm(e, t) {
  const n = dm(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function zx(e) {
  return !(e.pointerType === "touch" || hm());
}
function Ox(e, t, n = {}) {
  const [r, i, s] = pm(e, n);
  return (
    r.forEach((o) => {
      let a = !1,
        l = !1,
        u;
      const c = () => {
          o.removeEventListener("pointerleave", v);
        },
        f = (S) => {
          (u && (u(S), (u = void 0)), c());
        },
        d = (S) => {
          ((a = !1),
            window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", d),
            l && ((l = !1), f(S)));
        },
        y = () => {
          ((a = !0),
            window.addEventListener("pointerup", d, i),
            window.addEventListener("pointercancel", d, i));
        },
        v = (S) => {
          if (S.pointerType !== "touch") {
            if (a) {
              l = !0;
              return;
            }
            f(S);
          }
        },
        x = (S) => {
          if (!zx(S)) return;
          l = !1;
          const p = t(o, S);
          typeof p == "function" &&
            ((u = p), o.addEventListener("pointerleave", v, i));
        };
      (o.addEventListener("pointerenter", x, i),
        o.addEventListener("pointerdown", y, i));
    }),
    s
  );
}
const mm = (e, t) => (t ? (e === t ? !0 : mm(e, t.parentElement)) : !1),
  xu = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  Fx = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Bx(e) {
  return Fx.has(e.tagName) || e.isContentEditable === !0;
}
const Ux = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function Wx(e) {
  return Ux.has(e.tagName) || e.isContentEditable === !0;
}
const Hi = new WeakSet();
function td(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Ao(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const Zx = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = td(() => {
    if (Hi.has(n)) return;
    Ao(n, "down");
    const i = td(() => {
        Ao(n, "up");
      }),
      s = () => Ao(n, "cancel");
    (n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function nd(e) {
  return xu(e) && !hm();
}
const rd = new WeakSet();
function Hx(e, t, n = {}) {
  const [r, i, s] = pm(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!nd(a) || rd.has(a)) return;
      (Hi.add(l), n.stopPropagation && rd.add(a));
      const u = t(l, a),
        c = (y, v) => {
          (window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", d),
            Hi.has(l) && Hi.delete(l),
            nd(y) && typeof u == "function" && u(y, { success: v }));
        },
        f = (y) => {
          c(
            y,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              mm(l, y.target),
          );
        },
        d = (y) => {
          c(y, !1);
        };
      (window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", d, i));
    };
  return (
    r.forEach((a) => {
      ((n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        Ya(a) &&
          (a.addEventListener("focus", (u) => Zx(u, i)),
          !Bx(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)));
    }),
    s
  );
}
function wu(e) {
  return xp(e) && "ownerSVGElement" in e;
}
const $i = new WeakMap();
let Ct;
const gm = (e, t, n) => (r, i) =>
    i && i[0]
      ? i[0][e + "Size"]
      : wu(r) && "getBBox" in r
        ? r.getBBox()[t]
        : r[n],
  $x = gm("inline", "width", "offsetWidth"),
  Gx = gm("block", "height", "offsetHeight");
function Kx({ target: e, borderBoxSize: t }) {
  var n;
  (n = $i.get(e)) == null ||
    n.forEach((r) => {
      r(e, {
        get width() {
          return $x(e, t);
        },
        get height() {
          return Gx(e, t);
        },
      });
    });
}
function Yx(e) {
  e.forEach(Kx);
}
function Xx() {
  typeof ResizeObserver > "u" || (Ct = new ResizeObserver(Yx));
}
function Qx(e, t) {
  Ct || Xx();
  const n = dm(e);
  return (
    n.forEach((r) => {
      let i = $i.get(r);
      (i || ((i = new Set()), $i.set(r, i)),
        i.add(t),
        Ct == null || Ct.observe(r));
    }),
    () => {
      n.forEach((r) => {
        const i = $i.get(r);
        (i == null || i.delete(t),
          (i != null && i.size) || Ct == null || Ct.unobserve(r));
      });
    }
  );
}
const Gi = new Set();
let Nn;
function qx() {
  ((Nn = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Gi.forEach((t) => t(e));
  }),
    window.addEventListener("resize", Nn));
}
function Jx(e) {
  return (
    Gi.add(e),
    Nn || qx(),
    () => {
      (Gi.delete(e),
        !Gi.size &&
          typeof Nn == "function" &&
          (window.removeEventListener("resize", Nn), (Nn = void 0)));
    }
  );
}
function id(e, t) {
  return typeof e == "function" ? Jx(e) : Qx(e, t);
}
function ew(e) {
  return wu(e) && e.tagName === "svg";
}
const tw = [...lm, ee, Je],
  nw = (e) => tw.find(am(e)),
  sd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Mn = () => ({ x: sd(), y: sd() }),
  od = () => ({ min: 0, max: 0 }),
  ne = () => ({ x: od(), y: od() }),
  rw = new WeakMap();
function Hs(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Yr(e) {
  return typeof e == "string" || Array.isArray(e);
}
const ku = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Su = ["initial", ...ku];
function $s(e) {
  return Hs(e.animate) || Su.some((t) => Yr(e[t]));
}
function ym(e) {
  return !!($s(e) || e.variants);
}
function iw(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (me(i)) e.addValue(r, i);
    else if (me(s)) e.addValue(r, Kn(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Kn(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Xa = { current: null },
  vm = { current: !1 },
  sw = typeof window < "u";
function ow() {
  if (((vm.current = !0), !!sw))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Xa.current = e.matches);
      (e.addEventListener("change", t), t());
    } else Xa.current = !1;
}
const ad = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Cs = {};
function xm(e) {
  Cs = e;
}
function aw() {
  return Cs;
}
class lw {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      skipAnimations: s,
      blockInitialAnimation: o,
      visualState: a,
    },
    l = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = fu),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const y = ve.now();
        this.renderScheduledAt < y &&
          ((this.renderScheduledAt = y), F.render(this.render, !1, !0));
      }));
    const { latestValues: u, renderState: c } = a;
    ((this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.skipAnimationsConfig = s),
      (this.options = l),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = $s(n)),
      (this.isVariantNode = ym(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const y in d) {
      const v = d[y];
      u[y] !== void 0 && me(v) && v.set(u[y]);
    }
  }
  mount(t) {
    var n, r;
    if (this.hasBeenMounted)
      for (const i in this.initialValues)
        ((n = this.values.get(i)) == null || n.jump(this.initialValues[i]),
          (this.latestValues[i] = this.initialValues[i]));
    ((this.current = t),
      rw.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((i, s) => this.bindToMotionValue(s, i)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (vm.current || ow(), (this.shouldReduceMotion = Xa.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var t;
    (this.projection && this.projection.unmount(),
      Ut(this.notifyUpdate),
      Ut(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this));
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    (this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t));
  }
  removeChild(t) {
    (this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t));
  }
  bindToMotionValue(t, n) {
    if (
      (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
      n.accelerate && Vx.has(t) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: o,
          keyframes: a,
          times: l,
          ease: u,
          duration: c,
        } = n.accelerate,
        f = new qp({
          element: this.current,
          name: t,
          keyframes: a,
          times: l,
          ease: u,
          duration: qe(c),
        }),
        d = o(f);
      this.valueSubscriptions.set(t, () => {
        (d(), f.cancel());
      });
      return;
    }
    const r = er.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (o) => {
      ((this.latestValues[t] = o),
        this.props.onUpdate && F.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let s;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (i(), s && s(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Cs) {
      const n = Cs[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ne();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < ad.length; r++) {
      const i = ad[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    ((this.prevMotionValues = iw(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Kn(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options));
    return (
      r != null &&
        (typeof r == "string" && (vp(r) || wp(r))
          ? (r = parseFloat(r))
          : !nw(r) && Je.test(n) && (r = cm(t, n)),
        this.setBaseTarget(t, me(r) ? r.get() : r)),
      me(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var s;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = mu(
        this.props,
        n,
        (s = this.presenceContext) == null ? void 0 : s.custom,
      );
      o && (r = o[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !me(i)
      ? i
      : this.initialValues[t] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new tu()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    vu.render(this.render);
  }
}
class wm extends lw {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = Ix));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const r = t.style;
    return r ? r[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    me(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class $t {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
function km({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function uw({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function cw(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function jo(e) {
  return e === void 0 || e === 1;
}
function Qa({ scale: e, scaleX: t, scaleY: n }) {
  return !jo(e) || !jo(t) || !jo(n);
}
function qt(e) {
  return (
    Qa(e) ||
    Sm(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Sm(e) {
  return ld(e.x) || ld(e.y);
}
function ld(e) {
  return e && e !== "0%";
}
function Ps(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function ud(e, t, n, r, i) {
  return (i !== void 0 && (e = Ps(e, i, r)), Ps(e, n, r) + t);
}
function qa(e, t = 0, n = 1, r, i) {
  ((e.min = ud(e.min, t, n, r, i)), (e.max = ud(e.max, t, n, r, i)));
}
function Tm(e, { x: t, y: n }) {
  (qa(e.x, t.translate, t.scale, t.originPoint),
    qa(e.y, n.translate, n.scale, n.originPoint));
}
const cd = 0.999999999999,
  dd = 1.0000000000001;
function dw(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    ((s = n[a]), (o = s.projectionDelta));
    const { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Rn(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Tm(e, o)),
      r && qt(s.latestValues) && Rn(e, s.latestValues));
  }
  (t.x < dd && t.x > cd && (t.x = 1), t.y < dd && t.y > cd && (t.y = 1));
}
function Dn(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function fd(e, t, n, r, i = 0.5) {
  const s = G(e.min, e.max, i);
  qa(e, t, n, s, r);
}
function Rn(e, t) {
  (fd(e.x, t.x, t.scaleX, t.scale, t.originX),
    fd(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function Cm(e, t) {
  return km(cw(e.getBoundingClientRect(), t));
}
function fw(e, t, n) {
  const r = Cm(e, n),
    { scroll: i } = t;
  return (i && (Dn(r.x, i.offset.x), Dn(r.y, i.offset.y)), r);
}
const hw = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  pw = Jn.length;
function mw(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < pw; s++) {
    const o = Jn[s],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (typeof a == "number") l = a === (o.startsWith("scale") ? 1 : 0);
    else {
      const u = parseFloat(a);
      l = o.startsWith("scale") ? u === 1 : u === 0;
    }
    if (!l || n) {
      const u = fm(a, yu[o]);
      if (!l) {
        i = !1;
        const c = hw[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r);
}
function Tu(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (er.has(l)) {
      o = !0;
      continue;
    } else if (Ip(l)) {
      i[l] = u;
      continue;
    } else {
      const c = fm(u, yu[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = mw(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function Pm(e, { style: t, vars: n }, r, i) {
  const s = e.style;
  let o;
  for (o in t) s[o] = t[o];
  i == null || i.applyProjectionStyles(s, r);
  for (o in n) s.setProperty(o, n[o]);
}
function hd(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const cr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (D.test(e)) e = parseFloat(e);
        else return e;
      const n = hd(e, t.target.x),
        r = hd(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  gw = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Je.parse(e);
      if (i.length > 5) return r;
      const s = Je.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((i[0 + o] /= a), (i[1 + o] /= l));
      const u = G(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  },
  Ja = {
    borderRadius: {
      ...cr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: cr,
    borderTopRightRadius: cr,
    borderBottomLeftRadius: cr,
    borderBottomRightRadius: cr,
    boxShadow: gw,
  };
function Em(e, { layout: t, layoutId: n }) {
  return (
    er.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Ja[e] || e === "opacity"))
  );
}
function Cu(e, t, n) {
  var o;
  const r = e.style,
    i = t == null ? void 0 : t.style,
    s = {};
  if (!r) return s;
  for (const a in r)
    (me(r[a]) ||
      (i && me(i[a])) ||
      Em(a, e) ||
      ((o = n == null ? void 0 : n.getValue(a)) == null
        ? void 0
        : o.liveStyle) !== void 0) &&
      (s[a] = r[a]);
  return s;
}
function yw(e) {
  return window.getComputedStyle(e);
}
class vw extends wm {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Pm));
  }
  readValueFromInstance(t, n) {
    var r;
    if (er.has(n))
      return (r = this.projection) != null && r.isProjecting ? za(n) : _v(t, n);
    {
      const i = yw(t),
        s = (Ip(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Cm(t, n);
  }
  build(t, n, r) {
    Tu(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Cu(t, n, r);
  }
}
const xw = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  ww = { offset: "strokeDashoffset", array: "strokeDasharray" };
function kw(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? xw : ww;
  ((e[s.offset] = `${-r}`), (e[s.array] = `${t} ${n}`));
}
const Sw = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function bm(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: s = 1,
    pathOffset: o = 0,
    ...a
  },
  l,
  u,
  c,
) {
  if ((Tu(e, a, u), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: f, style: d } = e;
  (f.transform && ((d.transform = f.transform), delete f.transform),
    (d.transform || f.transformOrigin) &&
      ((d.transformOrigin = f.transformOrigin ?? "50% 50%"),
      delete f.transformOrigin),
    d.transform &&
      ((d.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"),
      delete f.transformBox));
  for (const y of Sw) f[y] !== void 0 && ((d[y] = f[y]), delete f[y]);
  (t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    i !== void 0 && kw(f, i, s, o, !1));
}
const Am = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  jm = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Tw(e, t, n, r) {
  Pm(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Am.has(i) ? i : gu(i), t.attrs[i]);
}
function Nm(e, t, n) {
  const r = Cu(e, t, n);
  for (const i in e)
    if (me(e[i]) || me(t[i])) {
      const s =
        Jn.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
class Cw extends wm {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = ne));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (er.has(n)) {
      const r = um(n);
      return (r && r.default) || 0;
    }
    return ((n = Am.has(n) ? n : gu(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Nm(t, n, r);
  }
  build(t, n, r) {
    bm(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    Tw(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = jm(t.tagName)), super.mount(t));
  }
}
const Pw = Su.length;
function Mm(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Mm(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < Pw; n++) {
    const r = Su[n],
      i = e.props[r];
    (Yr(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function Dm(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const Ew = [...ku].reverse(),
  bw = ku.length;
function Aw(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Cx(e, n, r)));
}
function jw(e) {
  let t = Aw(e),
    n = pd(),
    r = !0;
  const i = (l) => (u, c) => {
    var d;
    const f = Fn(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) == null
          ? void 0
          : d.custom
        : void 0,
    );
    if (f) {
      const { transition: y, transitionEnd: v, ...x } = f;
      u = { ...u, ...x, ...v };
    }
    return u;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const { props: u } = e,
      c = Mm(e.parent) || {},
      f = [],
      d = new Set();
    let y = {},
      v = 1 / 0;
    for (let S = 0; S < bw; S++) {
      const p = Ew[S],
        m = n[p],
        g = u[p] !== void 0 ? u[p] : c[p],
        w = Yr(g),
        k = p === l ? m.isActive : null;
      k === !1 && (v = S);
      let C = g === c[p] && g !== u[p] && w;
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (m.protectedKeys = { ...y }),
        (!m.isActive && k === null) ||
          (!g && !m.prevProp) ||
          Hs(g) ||
          typeof g == "boolean")
      )
        continue;
      if (p === "exit" && m.isActive && k !== !0) {
        m.prevResolvedValues && (y = { ...y, ...m.prevResolvedValues });
        continue;
      }
      const E = Nw(m.prevProp, g);
      let T = E || (p === l && m.isActive && !C && w) || (S > v && w),
        N = !1;
      const M = Array.isArray(g) ? g : [g];
      let z = M.reduce(i(p), {});
      k === !1 && (z = {});
      const { prevResolvedValues: We = {} } = m,
        ut = { ...We, ...z },
        tr = (q) => {
          ((T = !0),
            d.has(q) && ((N = !0), d.delete(q)),
            (m.needsAnimating[q] = !0));
          const A = e.getValue(q);
          A && (A.liveStyle = !1);
        };
      for (const q in ut) {
        const A = z[q],
          R = We[q];
        if (y.hasOwnProperty(q)) continue;
        let L = !1;
        (Za(A) && Za(R) ? (L = !Dm(A, R)) : (L = A !== R),
          L
            ? A != null
              ? tr(q)
              : d.add(q)
            : A !== void 0 && d.has(q)
              ? tr(q)
              : (m.protectedKeys[q] = !0));
      }
      ((m.prevProp = g),
        (m.prevResolvedValues = z),
        m.isActive && (y = { ...y, ...z }),
        r && e.blockInitialAnimation && (T = !1));
      const oi = C && E;
      T &&
        (!oi || N) &&
        f.push(
          ...M.map((q) => {
            const A = { type: p };
            if (
              typeof q == "string" &&
              r &&
              !oi &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: R } = e,
                L = Fn(R, q);
              if (R.enteringChildren && L) {
                const { delayChildren: H } = L.transition || {};
                A.delay = em(R.enteringChildren, e, H);
              }
            }
            return { animation: q, options: A };
          }),
        );
    }
    if (d.size) {
      const S = {};
      if (typeof u.initial != "boolean") {
        const p = Fn(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        p && p.transition && (S.transition = p.transition);
      }
      (d.forEach((p) => {
        const m = e.getBaseTarget(p),
          g = e.getValue(p);
        (g && (g.liveStyle = !0), (S[p] = m ?? null));
      }),
        f.push({ animation: S }));
    }
    let x = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(f) : Promise.resolve()
    );
  }
  function a(l, u) {
    var f;
    if (n[l].isActive === u) return Promise.resolve();
    ((f = e.variantChildren) == null ||
      f.forEach((d) => {
        var y;
        return (y = d.animationState) == null ? void 0 : y.setActive(l, u);
      }),
      (n[l].isActive = u));
    const c = o(l);
    for (const d in n) n[d].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = pd();
    },
  };
}
function Nw(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Dm(t, e) : !1;
}
function Yt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function pd() {
  return {
    animate: Yt(!0),
    whileInView: Yt(),
    whileHover: Yt(),
    whileTap: Yt(),
    whileDrag: Yt(),
    whileFocus: Yt(),
    exit: Yt(),
  };
}
function md(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function He(e, t) {
  (md(e.x, t.x), md(e.y, t.y));
}
function gd(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
const Rm = 1e-4,
  Mw = 1 - Rm,
  Dw = 1 + Rm,
  Lm = 0.01,
  Rw = 0 - Lm,
  Lw = 0 + Lm;
function xe(e) {
  return e.max - e.min;
}
function Iw(e, t, n) {
  return Math.abs(e - t) <= n;
}
function yd(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = G(t.min, t.max, e.origin)),
    (e.scale = xe(n) / xe(t)),
    (e.translate = G(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Mw && e.scale <= Dw) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Rw && e.translate <= Lw) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function br(e, t, n, r) {
  (yd(e.x, t.x, n.x, r ? r.originX : void 0),
    yd(e.y, t.y, n.y, r ? r.originY : void 0));
}
function vd(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + xe(t)));
}
function Vw(e, t, n) {
  (vd(e.x, t.x, n.x), vd(e.y, t.y, n.y));
}
function xd(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + xe(t)));
}
function Es(e, t, n) {
  (xd(e.x, t.x, n.x), xd(e.y, t.y, n.y));
}
function wd(e, t, n, r, i) {
  return (
    (e -= t),
    (e = Ps(e, 1 / n, r)),
    i !== void 0 && (e = Ps(e, 1 / i, r)),
    e
  );
}
function _w(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (at.test(t) &&
      ((t = parseFloat(t)), (t = G(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = G(s.min, s.max, r);
  (e === s && (a -= t),
    (e.min = wd(e.min, t, n, a, i)),
    (e.max = wd(e.max, t, n, a, i)));
}
function kd(e, t, [n, r, i], s, o) {
  _w(e, t[n], t[r], t[i], t.scale, s, o);
}
const zw = ["x", "scaleX", "originX"],
  Ow = ["y", "scaleY", "originY"];
function Sd(e, t, n, r) {
  (kd(e.x, t, zw, n ? n.x : void 0, r ? r.x : void 0),
    kd(e.y, t, Ow, n ? n.y : void 0, r ? r.y : void 0));
}
function Td(e) {
  return e.translate === 0 && e.scale === 1;
}
function Im(e) {
  return Td(e.x) && Td(e.y);
}
function Cd(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Fw(e, t) {
  return Cd(e.x, t.x) && Cd(e.y, t.y);
}
function Pd(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Vm(e, t) {
  return Pd(e.x, t.x) && Pd(e.y, t.y);
}
function Ed(e) {
  return xe(e.x) / xe(e.y);
}
function bd(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function rt(e) {
  return [e("x"), e("y")];
}
function Bw(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: y,
      skewY: v,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      y && (r += `skewX(${y}deg) `),
      v && (r += `skewY(${v}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const _m = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Uw = _m.length,
  Ad = (e) => (typeof e == "string" ? parseFloat(e) : e),
  jd = (e) => typeof e == "number" || D.test(e);
function Ww(e, t, n, r, i, s) {
  i
    ? ((e.opacity = G(0, n.opacity ?? 1, Zw(r))),
      (e.opacityExit = G(t.opacity ?? 1, 0, Hw(r))))
    : s && (e.opacity = G(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let o = 0; o < Uw; o++) {
    const a = `border${_m[o]}Radius`;
    let l = Nd(t, a),
      u = Nd(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || jd(l) === jd(u)
        ? ((e[a] = Math.max(G(Ad(l), Ad(u), r), 0)),
          (at.test(u) || at.test(l)) && (e[a] += "%"))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = G(t.rotate || 0, n.rotate || 0, r));
}
function Nd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Zw = zm(0, 0.5, jp),
  Hw = zm(0.5, 0.95, Oe);
function zm(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n($r(e, t, r)));
}
function $w(e, t, n) {
  const r = me(e) ? e : Kn(e);
  return (r.start(pu("", r, t, n)), r.animation);
}
function Xr(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
const Gw = (e, t) => e.depth - t.depth;
class Kw {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (Jl(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (ws(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(Gw),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function Yw(e, t) {
  const n = ve.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (Ut(r), e(s - t));
    };
  return (F.setup(r, !0), () => Ut(r));
}
function Ki(e) {
  return me(e) ? e.get() : e;
}
class Xw {
  constructor() {
    this.members = [];
  }
  add(t) {
    Jl(this.members, t);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const r = this.members[n];
      if (r === t || r === this.lead || r === this.prevLead) continue;
      const i = r.instance;
      i &&
        i.isConnected === !1 &&
        r.isPresent !== !1 &&
        !r.snapshot &&
        ws(this.members, r);
    }
    t.scheduleRender();
  }
  remove(t) {
    if (
      (ws(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i],
        o = s.instance;
      if (s.isPresent !== !1 && (!o || o.isConnected !== !1)) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(), t.scheduleRender());
      const i = r.options.layoutDependency,
        s = t.options.layoutDependency;
      if (!(i !== void 0 && s !== void 0 && i === s)) {
        const l = r.instance;
        (l && l.isConnected === !1 && !r.snapshot) ||
          ((t.resumeFrom = r),
          n && (t.resumeFrom.preserveOpacity = !0),
          r.snapshot &&
            ((t.snapshot = r.snapshot),
            (t.snapshot.latestValues = r.animationValues || r.latestValues)),
          t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      }
      const { crossfade: a } = t.options;
      a === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
const Yi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  No = ["", "X", "Y", "Z"],
  Qw = 1e3;
let qw = 0;
function Mo(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Om(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = sm(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", F, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Om(r);
}
function Fm({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      ((this.id = qw++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(t1),
            this.nodes.forEach(s1),
            this.nodes.forEach(o1),
            this.nodes.forEach(n1));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Kw());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new tu()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o) {
      if (this.instance) return;
      ((this.isSVG = wu(o) && !ew(o)), (this.instance = o));
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          f = 0;
        const d = () => (this.root.updateBlockedByResize = !1);
        (F.read(() => {
          f = window.innerWidth;
        }),
          e(o, () => {
            const y = window.innerWidth;
            y !== f &&
              ((f = y),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = Yw(d, 250)),
              Yi.hasAnimatedSinceResize &&
                ((Yi.hasAnimatedSinceResize = !1), this.nodes.forEach(Rd)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: f,
              hasRelativeLayoutChanged: d,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const v =
                  this.options.transition || u.getDefaultTransition() || d1,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: S } =
                  u.getProps(),
                p = !this.targetLayout || !Vm(this.targetLayout, y),
                m = !f && d;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                m ||
                (f && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const g = { ...hu(v, "layout"), onPlay: x, onComplete: S };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((g.delay = 0), (g.type = !1)),
                  this.startAnimation(g),
                  this.setAnimationOrigin(c, m));
              } else
                (f || Rd(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = y;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Ut(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(a1),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Om(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        ((f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Md));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Dd);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(i1),
            this.nodes.forEach(Jw),
            this.nodes.forEach(e1))
          : this.nodes.forEach(Dd),
        this.clearAllSnapshots());
      const a = ve.now();
      ((ue.delta = lt(0, 1e3 / 60, a - ue.timestamp)),
        (ue.timestamp = a),
        (ue.isProcessing = !0),
        So.update.process(ue),
        So.preRender.process(ue),
        So.render.process(ue),
        (ue.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), vu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(r1), this.sharedNodes.forEach(l1));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        F.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      F.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !xe(this.snapshot.measuredBox.x) &&
          !xe(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = ne()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Im(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        this.instance &&
        (a || qt(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        f1(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: o } = this.options;
      if (!o) return ne();
      const a = o.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(h1)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Dn(a.x, c.offset.x), Dn(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = ne();
      if ((He(a, o), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && He(a, o), Dn(a.x, f.offset.x), Dn(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = ne();
      He(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        (!a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Rn(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          qt(c.latestValues) && Rn(l, c.latestValues));
      }
      return (qt(this.latestValues) && Rn(l, this.latestValues), l);
    }
    removeTransform(o) {
      const a = ne();
      He(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !qt(u.latestValues)) continue;
        Qa(u.latestValues) && u.updateSnapshot();
        const c = ne(),
          f = u.measurePageBox();
        (He(c, f),
          Sd(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c));
      }
      return (qt(this.latestValues) && Sd(a, this.latestValues), a);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ue.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var y;
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((y = this.parent) != null && y.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (!this.layout || !(c || f)) return;
      this.resolvedRelativeTargetAt = ue.timestamp;
      const d = this.getClosestProjectingParent();
      (d &&
        this.linkedParentVersion !== d.layoutVersion &&
        !d.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (d && d.layout
            ? this.createRelativeTarget(
                d,
                this.layout.layoutBox,
                d.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = ne()), (this.targetWithTransforms = ne())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Vw(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : He(this.target, this.layout.layoutBox),
                Tm(this.target, this.targetDelta))
              : He(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            d &&
            !!d.resumingFrom == !!this.resumingFrom &&
            !d.options.layoutScroll &&
            d.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(d, this.target, d.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Qa(this.parent.latestValues) ||
          Sm(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(o, a, l) {
      ((this.relativeParent = o),
        (this.linkedParentVersion = o.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = ne()),
        (this.relativeTargetOrigin = ne()),
        Es(this.relativeTargetOrigin, a, l),
        He(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var v;
      const o = this.getLead(),
        a = !!this.resumingFrom || this !== o;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((v = this.parent) != null && v.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === ue.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      He(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        d = this.treeScale.y;
      (dw(this.layoutCorrected, this.treeScale, this.path, a),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((o.target = o.layout.layoutBox), (o.targetWithTransforms = ne())));
      const { target: y } = o;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (gd(this.prevProjectionDelta.x, this.projectionDelta.x),
          gd(this.prevProjectionDelta.y, this.projectionDelta.y)),
        br(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== d ||
          !bd(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !bd(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), o)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Mn()),
        (this.projectionDelta = Mn()),
        (this.projectionDeltaWithTransform = Mn()));
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = Mn();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const d = ne(),
        y = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        x = y !== v,
        S = this.getStack(),
        p = !S || S.members.length <= 1,
        m = !!(x && !p && this.options.crossfade === !0 && !this.path.some(c1));
      this.animationProgress = 0;
      let g;
      ((this.mixTargetDelta = (w) => {
        const k = w / 1e3;
        (Ld(f.x, o.x, k),
          Ld(f.y, o.y, k),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Es(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            u1(this.relativeTarget, this.relativeTargetOrigin, d, k),
            g && Fw(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = ne()),
            He(g, this.relativeTarget)),
          x &&
            ((this.animationValues = c), Ww(c, u, this.latestValues, k, m, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      var a, l, u;
      (this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || u.stop(),
        this.pendingAnimation &&
          (Ut(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = F.update(() => {
          ((Yi.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Kn(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = $w(this.motionValue, [0, 1e3], {
              ...o,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                (this.mixTargetDelta(c), o.onUpdate && o.onUpdate(c));
              },
              onStop: () => {},
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Qw),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          Bm(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ne();
          const f = xe(this.layout.layoutBox.x);
          ((l.x.min = o.target.x.min), (l.x.max = l.x.min + f));
          const d = xe(this.layout.layoutBox.y);
          ((l.y.min = o.target.y.min), (l.y.max = l.y.min + d));
        }
        (He(a, l),
          Rn(a, c),
          br(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
      }
    }
    registerSharedNode(o, a) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new Xw()),
        this.sharedNodes.get(o).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: o } = this.options;
      return o ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Mo("z", o, u, this.animationValues);
      for (let c = 0; c < No.length; c++)
        (Mo(`rotate${No[c]}`, o, u, this.animationValues),
          Mo(`skew${No[c]}`, o, u, this.animationValues));
      o.render();
      for (const c in u)
        (o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]));
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (o.visibility = ""),
          (o.opacity = ""),
          (o.pointerEvents = Ki(a == null ? void 0 : a.pointerEvents) || ""),
          (o.transform = l ? l(this.latestValues, "") : "none"));
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        (this.options.layoutId &&
          ((o.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (o.pointerEvents = Ki(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !qt(this.latestValues) &&
            ((o.transform = l ? l({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      o.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let f = Bw(this.projectionDeltaWithTransform, this.treeScale, c);
      (l && (f = l(c, f)), (o.transform = f));
      const { x: d, y } = this.projectionDelta;
      ((o.transformOrigin = `${d.origin * 100}% ${y.origin * 100}% 0`),
        u.animationValues
          ? (o.opacity =
              u === this
                ? (c.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : c.opacityExit)
          : (o.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ""
                : c.opacityExit !== void 0
                  ? c.opacityExit
                  : 0));
      for (const v in Ja) {
        if (c[v] === void 0) continue;
        const { correct: x, applyTo: S, isCSSVariable: p } = Ja[v],
          m = f === "none" ? c[v] : x(c[v], u);
        if (S) {
          const g = S.length;
          for (let w = 0; w < g; w++) o[S[w]] = m;
        } else
          p ? (this.options.visualElement.renderState.vars[v] = m) : (o[v] = m);
      }
      this.options.layoutId &&
        (o.pointerEvents =
          u === this ? Ki(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(Md),
        this.root.sharedNodes.clear());
    }
  };
}
function Jw(e) {
  e.updateLayout();
}
function e1(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = t.source !== e.layout.source;
    s === "size"
      ? rt((f) => {
          const d = o ? t.measuredBox[f] : t.layoutBox[f],
            y = xe(d);
          ((d.min = r[f].min), (d.max = d.min + y));
        })
      : Bm(s, t.layoutBox, r) &&
        rt((f) => {
          const d = o ? t.measuredBox[f] : t.layoutBox[f],
            y = xe(r[f]);
          ((d.max = d.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + y)));
        });
    const a = Mn();
    br(a, r, t.layoutBox);
    const l = Mn();
    o ? br(l, e.applyTransform(i, !0), t.measuredBox) : br(l, r, t.layoutBox);
    const u = !Im(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: y } = f;
        if (d && y) {
          const v = ne();
          Es(v, t.layoutBox, d.layoutBox);
          const x = ne();
          (Es(x, r, y.layoutBox),
            Vm(v, x) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function t1(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function n1(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function r1(e) {
  e.clearSnapshot();
}
function Md(e) {
  e.clearMeasurements();
}
function Dd(e) {
  e.isLayoutDirty = !1;
}
function i1(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function Rd(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function s1(e) {
  e.resolveTargetDelta();
}
function o1(e) {
  e.calcProjection();
}
function a1(e) {
  e.resetSkewAndRotation();
}
function l1(e) {
  e.removeLeadSnapshot();
}
function Ld(e, t, n) {
  ((e.translate = G(t.translate, 0, n)),
    (e.scale = G(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Id(e, t, n, r) {
  ((e.min = G(t.min, n.min, r)), (e.max = G(t.max, n.max, r)));
}
function u1(e, t, n, r) {
  (Id(e.x, t.x, n.x, r), Id(e.y, t.y, n.y, r));
}
function c1(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const d1 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Vd = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  _d = Vd("applewebkit/") && !Vd("chrome/") ? Math.round : Oe;
function zd(e) {
  ((e.min = _d(e.min)), (e.max = _d(e.max)));
}
function f1(e) {
  (zd(e.x), zd(e.y));
}
function Bm(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Iw(Ed(t), Ed(n), 0.2))
  );
}
function h1(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const p1 = Fm({
    attachResizeListener: (e, t) => Xr(e, "resize", t),
    measureScroll: () => {
      var e, t;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((e = document.body) == null ? void 0 : e.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((t = document.body) == null ? void 0 : t.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  Do = { current: void 0 },
  Um = Fm({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Do.current) {
        const e = new p1({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Do.current = e));
      }
      return Do.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Pu = P.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function Od(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function m1(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const s = Od(i, t);
      return (!n && typeof s == "function" && (n = !0), s);
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const s = r[i];
          typeof s == "function" ? s() : Od(e[i], null);
        }
      };
  };
}
function g1(...e) {
  return P.useCallback(m1(...e), e);
}
class y1 extends P.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const r = n.offsetParent,
        i = (Ya(r) && r.offsetWidth) || 0,
        s = (Ya(r) && r.offsetHeight) || 0,
        o = this.props.sizeRef.current;
      ((o.height = n.offsetHeight || 0),
        (o.width = n.offsetWidth || 0),
        (o.top = n.offsetTop),
        (o.left = n.offsetLeft),
        (o.right = i - o.width - o.left),
        (o.bottom = s - o.height - o.top));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function v1({
  children: e,
  isPresent: t,
  anchorX: n,
  anchorY: r,
  root: i,
  pop: s,
}) {
  var d;
  const o = P.useId(),
    a = P.useRef(null),
    l = P.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: u } = P.useContext(Pu),
    c =
      ((d = e.props) == null ? void 0 : d.ref) ?? (e == null ? void 0 : e.ref),
    f = g1(a, c);
  return (
    P.useInsertionEffect(() => {
      const {
        width: y,
        height: v,
        top: x,
        left: S,
        right: p,
        bottom: m,
      } = l.current;
      if (t || s === !1 || !a.current || !y || !v) return;
      const g = n === "left" ? `left: ${S}` : `right: ${p}`,
        w = r === "bottom" ? `bottom: ${m}` : `top: ${x}`;
      a.current.dataset.motionPopId = o;
      const k = document.createElement("style");
      u && (k.nonce = u);
      const C = i ?? document.head;
      return (
        C.appendChild(k),
        k.sheet &&
          k.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${v}px !important;
            ${g}px !important;
            ${w}px !important;
          }
        `),
        () => {
          C.contains(k) && C.removeChild(k);
        }
      );
    }, [t]),
    h.jsx(y1, {
      isPresent: t,
      childRef: a,
      sizeRef: l,
      pop: s,
      children: s === !1 ? e : P.cloneElement(e, { ref: f }),
    })
  );
}
const x1 = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
  anchorX: a,
  anchorY: l,
  root: u,
}) => {
  const c = ql(w1),
    f = P.useId();
  let d = !0,
    y = P.useMemo(
      () => (
        (d = !1),
        {
          id: f,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (v) => {
            c.set(v, !0);
            for (const x of c.values()) if (!x) return;
            r && r();
          },
          register: (v) => (c.set(v, !1), () => c.delete(v)),
        }
      ),
      [n, c, r],
    );
  return (
    s && d && (y = { ...y }),
    P.useMemo(() => {
      c.forEach((v, x) => c.set(x, !1));
    }, [n]),
    P.useEffect(() => {
      !n && !c.size && r && r();
    }, [n]),
    (e = h.jsx(v1, {
      pop: o === "popLayout",
      isPresent: n,
      anchorX: a,
      anchorY: l,
      root: u,
      children: e,
    })),
    h.jsx(Zs.Provider, { value: y, children: e })
  );
};
function w1() {
  return new Map();
}
function Wm(e = !0) {
  const t = P.useContext(Zs);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = P.useId();
  P.useEffect(() => {
    if (e) return i(s);
  }, [e]);
  const o = P.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const ji = (e) => e.key || "";
function Fd(e) {
  const t = [];
  return (
    P.Children.forEach(e, (n) => {
      P.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Eu = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: s = "sync",
    propagate: o = !1,
    anchorX: a = "left",
    anchorY: l = "top",
    root: u,
  }) => {
    const [c, f] = Wm(o),
      d = P.useMemo(() => Fd(e), [e]),
      y = o && !c ? [] : d.map(ji),
      v = P.useRef(!0),
      x = P.useRef(d),
      S = ql(() => new Map()),
      p = P.useRef(new Set()),
      [m, g] = P.useState(d),
      [w, k] = P.useState(d);
    yp(() => {
      ((v.current = !1), (x.current = d));
      for (let T = 0; T < w.length; T++) {
        const N = ji(w[T]);
        y.includes(N)
          ? (S.delete(N), p.current.delete(N))
          : S.get(N) !== !0 && S.set(N, !1);
      }
    }, [w, y.length, y.join("-")]);
    const C = [];
    if (d !== m) {
      let T = [...d];
      for (let N = 0; N < w.length; N++) {
        const M = w[N],
          z = ji(M);
        y.includes(z) || (T.splice(N, 0, M), C.push(M));
      }
      return (s === "wait" && C.length && (T = C), k(Fd(T)), g(d), null);
    }
    const { forceRender: E } = P.useContext(Ql);
    return h.jsx(h.Fragment, {
      children: w.map((T) => {
        const N = ji(T),
          M = o && !c ? !1 : d === w || y.includes(N),
          z = () => {
            if (p.current.has(N)) return;
            if ((p.current.add(N), S.has(N))) S.set(N, !0);
            else return;
            let We = !0;
            (S.forEach((ut) => {
              ut || (We = !1);
            }),
              We &&
                (E == null || E(),
                k(x.current),
                o && (f == null || f()),
                r && r()));
          };
        return h.jsx(
          x1,
          {
            isPresent: M,
            initial: !v.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: i,
            mode: s,
            root: u,
            onExitComplete: M ? void 0 : z,
            anchorX: a,
            anchorY: l,
            children: T,
          },
          N,
        );
      }),
    });
  },
  Zm = P.createContext({ strict: !1 }),
  Bd = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let Ud = !1;
function k1() {
  if (Ud) return;
  const e = {};
  for (const t in Bd) e[t] = { isEnabled: (n) => Bd[t].some((r) => !!n[r]) };
  (xm(e), (Ud = !0));
}
function Hm() {
  return (k1(), aw());
}
function S1(e) {
  const t = Hm();
  for (const n in e) t[n] = { ...t[n], ...e[n] };
  xm(t);
}
const T1 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function bs(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    T1.has(e)
  );
}
let $m = (e) => !bs(e);
function C1(e) {
  typeof e == "function" && ($m = (t) => (t.startsWith("on") ? !bs(t) : e(t)));
}
try {
  C1(require("@emotion/is-prop-valid").default);
} catch {}
function P1(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      (($m(i) ||
        (n === !0 && bs(i)) ||
        (!t && !bs(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
const Gs = P.createContext({});
function E1(e, t) {
  if ($s(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Yr(n) ? n : void 0,
      animate: Yr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function b1(e) {
  const { initial: t, animate: n } = E1(e, P.useContext(Gs));
  return P.useMemo(() => ({ initial: t, animate: n }), [Wd(t), Wd(n)]);
}
function Wd(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const bu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Gm(e, t, n) {
  for (const r in t) !me(t[r]) && !Em(r, n) && (e[r] = t[r]);
}
function A1({ transformTemplate: e }, t) {
  return P.useMemo(() => {
    const n = bu();
    return (Tu(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function j1(e, t) {
  const n = e.style || {},
    r = {};
  return (Gm(r, n, e), Object.assign(r, A1(e, t)), r);
}
function N1(e, t) {
  const n = {},
    r = j1(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const Km = () => ({ ...bu(), attrs: {} });
function M1(e, t, n, r) {
  const i = P.useMemo(() => {
    const s = Km();
    return (
      bm(s, t, jm(r), e.transformTemplate, e.style),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    (Gm(s, e.style, e), (i.style = { ...s, ...i.style }));
  }
  return i;
}
const D1 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Au(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(D1.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function R1(e, t, n, { latestValues: r }, i, s = !1, o) {
  const l = ((o ?? Au(e)) ? M1 : N1)(t, r, i, e),
    u = P1(t, typeof e == "string", s),
    c = e !== P.Fragment ? { ...u, ...l, ref: n } : {},
    { children: f } = t,
    d = P.useMemo(() => (me(f) ? f.get() : f), [f]);
  return P.createElement(e, { ...c, children: d });
}
function L1({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: I1(n, r, i, e), renderState: t() };
}
function I1(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const d in s) i[d] = Ki(s[d]);
  let { initial: o, animate: a } = e;
  const l = $s(e),
    u = ym(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const f = c ? a : o;
  if (f && typeof f != "boolean" && !Hs(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let y = 0; y < d.length; y++) {
      const v = mu(e, d[y]);
      if (v) {
        const { transitionEnd: x, transition: S, ...p } = v;
        for (const m in p) {
          let g = p[m];
          if (Array.isArray(g)) {
            const w = c ? g.length - 1 : 0;
            g = g[w];
          }
          g !== null && (i[m] = g);
        }
        for (const m in x) i[m] = x[m];
      }
    }
  }
  return i;
}
const Ym = (e) => (t, n) => {
    const r = P.useContext(Gs),
      i = P.useContext(Zs),
      s = () => L1(e, t, r, i);
    return n ? s() : ql(s);
  },
  V1 = Ym({ scrapeMotionValuesFromProps: Cu, createRenderState: bu }),
  _1 = Ym({ scrapeMotionValuesFromProps: Nm, createRenderState: Km }),
  z1 = Symbol.for("motionComponentSymbol");
function O1(e, t, n) {
  const r = P.useRef(n);
  P.useInsertionEffect(() => {
    r.current = n;
  });
  const i = P.useRef(null);
  return P.useCallback(
    (s) => {
      var a;
      (s && ((a = e.onMount) == null || a.call(e, s)),
        t && (s ? t.mount(s) : t.unmount()));
      const o = r.current;
      if (typeof o == "function")
        if (s) {
          const l = o(s);
          typeof l == "function" && (i.current = l);
        } else i.current ? (i.current(), (i.current = null)) : o(s);
      else o && (o.current = s);
    },
    [t],
  );
}
const Xm = P.createContext({});
function gn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function F1(e, t, n, r, i, s) {
  var g, w;
  const { visualElement: o } = P.useContext(Gs),
    a = P.useContext(Zm),
    l = P.useContext(Zs),
    u = P.useContext(Pu),
    c = u.reducedMotion,
    f = u.skipAnimations,
    d = P.useRef(null),
    y = P.useRef(!1);
  ((r = r || a.renderer),
    !d.current &&
      r &&
      ((d.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: f,
        isSVG: s,
      })),
      y.current && d.current && (d.current.manuallyAnimateOnMount = !0)));
  const v = d.current,
    x = P.useContext(Xm);
  v &&
    !v.projection &&
    i &&
    (v.type === "html" || v.type === "svg") &&
    B1(d.current, n, i, x);
  const S = P.useRef(!1);
  P.useInsertionEffect(() => {
    v && S.current && v.update(n, l);
  });
  const p = n[im],
    m = P.useRef(
      !!p &&
        !((g = window.MotionHandoffIsComplete) != null && g.call(window, p)) &&
        ((w = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : w.call(window, p)),
    );
  return (
    yp(() => {
      ((y.current = !0),
        v &&
          ((S.current = !0),
          (window.MotionIsMounted = !0),
          v.updateFeatures(),
          v.scheduleRenderMicrotask(),
          m.current && v.animationState && v.animationState.animateChanges()));
    }),
    P.useEffect(() => {
      v &&
        (!m.current && v.animationState && v.animationState.animateChanges(),
        m.current &&
          (queueMicrotask(() => {
            var k;
            (k = window.MotionHandoffMarkAsComplete) == null ||
              k.call(window, p);
          }),
          (m.current = !1)),
        (v.enteringChildren = void 0));
    }),
    v
  );
}
function B1(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutCrossfade: c,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Qm(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && gn(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      crossfade: c,
      layoutScroll: l,
      layoutRoot: u,
    }));
}
function Qm(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Qm(e.parent);
}
function Ro(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && S1(r);
  const s = n ? n === "svg" : Au(e),
    o = s ? _1 : V1;
  function a(u, c) {
    let f;
    const d = { ...P.useContext(Pu), ...u, layoutId: U1(u) },
      { isStatic: y } = d,
      v = b1(u),
      x = o(u, y);
    if (!y && gp) {
      W1();
      const S = Z1(d);
      ((f = S.MeasureLayout),
        (v.visualElement = F1(e, x, d, i, S.ProjectionNode, s)));
    }
    return h.jsxs(Gs.Provider, {
      value: v,
      children: [
        f && v.visualElement
          ? h.jsx(f, { visualElement: v.visualElement, ...d })
          : null,
        R1(e, u, O1(x, v.visualElement, c), x, y, t, s),
      ],
    });
  }
  a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const l = P.forwardRef(a);
  return ((l[z1] = e), l);
}
function U1({ layoutId: e }) {
  const t = P.useContext(Ql).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function W1(e, t) {
  P.useContext(Zm).strict;
}
function Z1(e) {
  const t = Hm(),
    { drag: n, layout: r } = t;
  if (!n && !r) return {};
  const i = { ...n, ...r };
  return {
    MeasureLayout:
      (n != null && n.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? i.MeasureLayout
        : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
function H1(e, t) {
  if (typeof Proxy > "u") return Ro;
  const n = new Map(),
    r = (s, o) => Ro(s, o, e, t),
    i = (s, o) => r(s, o);
  return new Proxy(i, {
    get: (s, o) =>
      o === "create"
        ? r
        : (n.has(o) || n.set(o, Ro(o, void 0, e, t)), n.get(o)),
  });
}
const $1 = (e, t) =>
  (t.isSVG ?? Au(e))
    ? new Cw(t)
    : new vw(t, { allowProjection: e !== P.Fragment });
class G1 extends $t {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = jw(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Hs(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this));
  }
}
let K1 = 0;
class Y1 extends $t {
  constructor() {
    (super(...arguments), (this.id = K1++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      i.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), t && (this.unmount = t(this.id)));
  }
  unmount() {}
}
const X1 = { animation: { Feature: G1 }, exit: { Feature: Y1 } };
function si(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const Q1 = (e) => (t) => xu(t) && e(t, si(t));
function Ar(e, t, n, r) {
  return Xr(e, t, Q1(n), r);
}
const qm = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Zd = (e, t) => Math.abs(e - t);
function q1(e, t) {
  const n = Zd(e.x, t.x),
    r = Zd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const Hd = new Set(["auto", "scroll"]);
class Jm {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: i = window,
      dragSnapToOrigin: s = !1,
      distanceThreshold: o = 3,
      element: a,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (y) => {
        this.handleScroll(y.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const y = Io(this.lastMoveEventInfo, this.history),
          v = this.startEvent !== null,
          x = q1(y.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!v && !x) return;
        const { point: S } = y,
          { timestamp: p } = ue;
        this.history.push({ ...S, timestamp: p });
        const { onStart: m, onMove: g } = this.handlers;
        (v ||
          (m && m(this.lastMoveEvent, y),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, y));
      }),
      (this.handlePointerMove = (y, v) => {
        ((this.lastMoveEvent = y),
          (this.lastMoveEventInfo = Lo(v, this.transformPagePoint)),
          F.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (y, v) => {
        this.end();
        const { onEnd: x, onSessionEnd: S, resumeAnimation: p } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && p && p(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const m = Io(
          y.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Lo(v, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && x && x(y, m), S && S(y, m));
      }),
      !xu(t))
    )
      return;
    ((this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = o),
      (this.contextWindow = i || window));
    const l = si(t),
      u = Lo(l, this.transformPagePoint),
      { point: c } = u,
      { timestamp: f } = ue;
    this.history = [{ ...c, timestamp: f }];
    const { onSessionStart: d } = n;
    (d && d(t, Io(u, this.history)),
      (this.removeListeners = ni(
        Ar(this.contextWindow, "pointermove", this.handlePointerMove),
        Ar(this.contextWindow, "pointerup", this.handlePointerUp),
        Ar(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      a && this.startScrollTracking(a));
  }
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n; ) {
      const r = getComputedStyle(n);
      ((Hd.has(r.overflowX) || Hd.has(r.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(t) {
    const n = this.scrollPositions.get(t);
    if (!n) return;
    const r = t === window,
      i = r
        ? { x: window.scrollX, y: window.scrollY }
        : { x: t.scrollLeft, y: t.scrollTop },
      s = { x: i.x - n.x, y: i.y - n.y };
    (s.x === 0 && s.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += s.x),
          (this.lastMoveEventInfo.point.y += s.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= s.x), (this.history[0].y -= s.y)),
      this.scrollPositions.set(t, i),
      F.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Ut(this.updatePoint));
  }
}
function Lo(e, t) {
  return t ? { point: t(e.point) } : e;
}
function $d(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Io({ point: e }, t) {
  return {
    point: e,
    delta: $d(e, eg(t)),
    offset: $d(e, J1(t)),
    velocity: ek(t, 0.1),
  };
}
function J1(e) {
  return e[0];
}
function eg(e) {
  return e[e.length - 1];
}
function ek(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = eg(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > qe(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    i.timestamp - r.timestamp > qe(t) * 2 &&
    (r = e[1]);
  const s = _e(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function tk(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? G(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? G(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Gd(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function nk(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Gd(e.x, n, i), y: Gd(e.y, t, r) };
}
function Kd(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function rk(e, t) {
  return { x: Kd(e.x, t.x), y: Kd(e.y, t.y) };
}
function ik(e, t) {
  let n = 0.5;
  const r = xe(e),
    i = xe(t);
  return (
    i > r
      ? (n = $r(t.min, t.max - r, e.min))
      : r > i && (n = $r(e.min, e.max - i, t.min)),
    lt(0, 1, n)
  );
}
function sk(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const el = 0.35;
function ok(e = el) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = el),
    { x: Yd(e, "left", "right"), y: Yd(e, "top", "bottom") }
  );
}
function Yd(e, t, n) {
  return { min: Xd(e, t), max: Xd(e, n) };
}
function Xd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const ak = new WeakMap();
class lk {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ne()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const s = (f) => {
        (n && this.snapToCursor(si(f).point), this.stopAnimation());
      },
      o = (f, d) => {
        const { drag: y, dragPropagation: v, onDragStart: x } = this.getProps();
        if (
          y &&
          !v &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = _x(y)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = d),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          rt((p) => {
            let m = this.getAxisMotionValue(p).get() || 0;
            if (at.test(m)) {
              const { projection: g } = this.visualElement;
              if (g && g.layout) {
                const w = g.layout.layoutBox[p];
                w && (m = xe(w) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[p] = m;
          }),
          x && F.update(() => x(f, d), !1, !0),
          Ha(this.visualElement, "transform"));
        const { animationState: S } = this.visualElement;
        S && S.setActive("whileDrag", !0);
      },
      a = (f, d) => {
        ((this.latestPointerEvent = f), (this.latestPanInfo = d));
        const {
          dragPropagation: y,
          dragDirectionLock: v,
          onDirectionLock: x,
          onDrag: S,
        } = this.getProps();
        if (!y && !this.openDragLock) return;
        const { offset: p } = d;
        if (v && this.currentDirection === null) {
          ((this.currentDirection = ck(p)),
            this.currentDirection !== null && x && x(this.currentDirection));
          return;
        }
        (this.updateAxis("x", d.point, p),
          this.updateAxis("y", d.point, p),
          this.visualElement.render(),
          S && F.update(() => S(f, d), !1, !0));
      },
      l = (f, d) => {
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = d),
          this.stop(f, d),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      u = () => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Jm(
      t,
      {
        onSessionStart: s,
        onStart: o,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: qm(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      s = this.isDragging;
    if ((this.cancel(), !s || !i || !r)) return;
    const { velocity: o } = i;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && F.postRender(() => a(r, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ni(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (o = tk(o, this.constraints[t], this.elastic[t])),
      s.set(o));
  }
  resolveConstraints() {
    var s;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (s = this.visualElement.projection) == null
            ? void 0
            : s.layout,
      i = this.constraints;
    (t && gn(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
        ? (this.constraints = nk(r.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = ok(n)),
      i !== this.constraints &&
        !gn(t) &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        rt((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = sk(r.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !gn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = fw(r, i.root, this.visualElement.getTransformPagePoint());
    let o = rk(i.layout.layoutBox, s);
    if (n) {
      const a = n(uw(o));
      ((this.hasMutatedConstraints = !!a), a && (o = km(a)));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = rt((c) => {
        if (!Ni(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        o && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          y = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Ha(this.visualElement, t),
      r.start(pu(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    rt((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    rt((n) => {
      const { drag: r } = this.getProps();
      if (!Ni(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n],
          l = s.get() || 0;
        s.set(t[n] - G(o, a, 0.5) + l);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!gn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    rt((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = ik({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      rt((o) => {
        if (!Ni(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(G(l, u, i[o]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    ak.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Ar(t, "pointerdown", (u) => {
        const { drag: c, dragListener: f = !0 } = this.getProps(),
          d = u.target,
          y = d !== t && Wx(d);
        c && f && !y && this.start(u);
      });
    let r;
    const i = () => {
        const { dragConstraints: u } = this.getProps();
        gn(u) &&
          u.current &&
          ((this.constraints = this.resolveRefConstraints()),
          r ||
            (r = uk(t, u.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: s } = this.visualElement,
      o = s.addEventListener("measure", i);
    (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      F.read(i));
    const a = Xr(window, "resize", () => this.scalePositionWithinConstraints()),
      l = s.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (rt((f) => {
              const d = this.getAxisMotionValue(f);
              d &&
                ((this.originPoint[f] += u[f].translate),
                d.set(d.get() + u[f].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (a(), n(), o(), l && l(), r && r());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = el,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function Qd(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function uk(e, t, n) {
  const r = id(e, Qd(n)),
    i = id(t, Qd(n));
  return () => {
    (r(), i());
  };
}
function Ni(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function ck(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class dk extends $t {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = Oe),
      (this.removeListeners = Oe),
      (this.controls = new lk(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Oe));
  }
  update() {
    const { dragControls: t } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    t !== n &&
      (this.removeGroupControls(),
      t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const Vo = (e) => (t, n) => {
  e && F.update(() => e(t, n), !1, !0);
};
class fk extends $t {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Oe));
  }
  onPointerDown(t) {
    this.session = new Jm(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: qm(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Vo(t),
      onStart: Vo(n),
      onMove: Vo(r),
      onEnd: (s, o) => {
        (delete this.session, i && F.postRender(() => i(s, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ar(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let _o = !1;
class hk extends P.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    (s &&
      (n.group && n.group.add(s),
      r && r.register && i && r.register(s),
      _o && s.root.didUpdate(),
      s.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      s.setOptions({
        ...s.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (Yi.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      { projection: o } = r;
    return (
      o &&
        ((o.isPresent = s),
        t.layoutDependency !== n &&
          o.setOptions({ ...o.options, layoutDependency: n }),
        (_o = !0),
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              F.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      vu.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    ((_o = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i)));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function tg(e) {
  const [t, n] = Wm(),
    r = P.useContext(Ql);
  return h.jsx(hk, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: P.useContext(Xm),
    isPresent: t,
    safeToRemove: n,
  });
}
const pk = {
  pan: { Feature: fk },
  drag: { Feature: dk, ProjectionNode: Um, MeasureLayout: tg },
};
function qd(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && F.postRender(() => s(t, si(t)));
}
class mk extends $t {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Ox(
        t,
        (n, r) => (qd(this.node, r, "Start"), (i) => qd(this.node, i, "End")),
      ));
  }
  unmount() {}
}
class gk extends $t {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = ni(
      Xr(this.node.current, "focus", () => this.onFocus()),
      Xr(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Jd(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && F.postRender(() => s(t, si(t)));
}
class yk extends $t {
  mount() {
    const { current: t } = this.node;
    if (!t) return;
    const { globalTapTarget: n, propagate: r } = this.node.props;
    this.unmount = Hx(
      t,
      (i, s) => (
        Jd(this.node, s, "Start"),
        (o, { success: a }) => Jd(this.node, o, a ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: n,
        stopPropagation: (r == null ? void 0 : r.tap) === !1,
      },
    );
  }
  unmount() {}
}
const tl = new WeakMap(),
  zo = new WeakMap(),
  vk = (e) => {
    const t = tl.get(e.target);
    t && t(e);
  },
  xk = (e) => {
    e.forEach(vk);
  };
function wk({ root: e, ...t }) {
  const n = e || document;
  zo.has(n) || zo.set(n, {});
  const r = zo.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(xk, { root: e, ...t })),
    r[i]
  );
}
function kk(e, t, n) {
  const r = wk(t);
  return (
    tl.set(e, n),
    r.observe(e),
    () => {
      (tl.delete(e), r.unobserve(e));
    }
  );
}
const Sk = { some: 0, all: 1 };
class Tk extends $t {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Sk[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u));
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return kk(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Ck(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Ck({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Pk = {
    inView: { Feature: Tk },
    tap: { Feature: yk },
    focus: { Feature: gk },
    hover: { Feature: mk },
  },
  Ek = { layout: { ProjectionNode: Um, MeasureLayout: tg } },
  bk = { ...X1, ...Pk, ...pk, ...Ek },
  U = H1(bk, $1),
  Ak = ({ activeTab: e, setActiveTab: t, lang: n }) => {
    const r = [
      { id: "home", label: "Home", labelZh: "首页" },
      { id: "ai-library", label: "AI Library", labelZh: "AI 学习库" },
      { id: "knowledge-base", label: "Knowledge Base", labelZh: "知识库" },
      { id: "data-viz", label: "Data Viz", labelZh: "数据可视化" },
    ];
    return h.jsx("nav", {
      className:
        "fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800",
      children: h.jsxs("div", {
        className:
          "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between",
        children: [
          h.jsx("div", {
            className: "font-mono text-lg font-bold tracking-tighter",
            children: "Yuri.WG",
          }),
          h.jsx("div", {
            className: "flex space-x-8",
            children: r.map((i) =>
              h.jsxs(
                "button",
                {
                  onClick: () => t(i.id),
                  className: `relative text-sm font-medium transition-colors duration-200 ${e === i.id ? "text-black dark:text-white" : "text-gray-500 hover:text-black dark:hover:text-white"}`,
                  children: [
                    n === "en" ? i.label : i.labelZh,
                    e === i.id &&
                      h.jsx(U.div, {
                        layoutId: "activeTab",
                        className:
                          "absolute -bottom-6 left-0 right-0 h-0.5 bg-black dark:bg-white",
                        transition: {
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        },
                      }),
                  ],
                },
                i.id,
              ),
            ),
          }),
          h.jsx("div", { className: "w-20" }),
          " ",
        ],
      }),
    });
  };
var jk = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const Nk = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Mk = (e, t) => {
    const n = P.forwardRef(
      (
        {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: o,
          children: a,
          ...l
        },
        u,
      ) =>
        P.createElement(
          "svg",
          {
            ref: u,
            ...jk,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: o ? (Number(s) * 24) / Number(i) : s,
            className: `lucide lucide-${Nk(e)}`,
            ...l,
          },
          [
            ...t.map(([c, f]) => P.createElement(c, f)),
            ...((Array.isArray(a) ? a : [a]) || []),
          ],
        ),
    );
    return ((n.displayName = `${e}`), n);
  };
var Ue = Mk;
const Dk = Ue("ArrowDown", [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
  ]),
  Rk = Ue("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ]),
  ng = Ue("ArrowUpRight", [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ]),
  Lk = Ue("BookOpen", [
    ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
    [
      "path",
      { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" },
    ],
  ]),
  Ik = Ue("Check", [["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]]),
  Vk = Ue("Copy", [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ]),
  _k = Ue("Github", [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef",
      },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
  ]),
  rg = Ue("ImageOff", [
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
    ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
    ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }],
    ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
    [
      "path",
      {
        d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
        key: "mmje98",
      },
    ],
    ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }],
  ]),
  zk = Ue("Mail", [
    [
      "rect",
      { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
    ],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ]),
  Ok = Ue("Terminal", [
    ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
    ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
  ]),
  Fk = Ue("Twitter", [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ]),
  ig = Ue("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Bk = () =>
    h.jsxs("div", {
      className:
        "absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0",
      children: [
        h.jsx(U.div, {
          animate: { scale: [1, 1.02, 1], opacity: [0.05, 0.08, 0.05] },
          transition: { duration: 10, repeat: 1 / 0, ease: "easeInOut" },
          className: "absolute inset-0 dark:opacity-[0.1]",
          children: h.jsx("div", {
            className:
              "absolute inset-0 bg-[linear-gradient(to_right,#0033FF_1px,transparent_1px),linear-gradient(to_bottom,#0033FF_1px,transparent_1px)] bg-[size:60px_60px]",
          }),
        }),
        h.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-t from-white/80 dark:from-black/80 via-transparent to-transparent",
        }),
        h.jsx(U.div, {
          animate: { y: ["-100%", "200%"], opacity: [0, 0.05, 0] },
          transition: { duration: 20, repeat: 1 / 0, ease: "linear" },
          className:
            "absolute inset-0 w-full h-20 bg-gradient-to-b from-transparent via-accent/10 to-transparent",
        }),
      ],
    }),
  Uk = ({ text: e }) => {
    const t = P.useRef(null);
    return (
      P.useEffect(() => {
        const n = t.current;
        if (!n) return;
        const r = n.parentElement;
        if (!r) return;
        const i = n.getContext("2d", { willReadFrequently: !0 });
        if (!i) return;
        let s = [],
          o,
          a = { x: -1e3, y: -1e3, radius: 60 };
        class l {
          constructor(p, m, g) {
            kt(this, "x");
            kt(this, "y");
            kt(this, "baseX");
            kt(this, "baseY");
            kt(this, "size");
            kt(this, "density");
            kt(this, "color");
            ((this.x = p + (Math.random() - 0.5) * 20),
              (this.y = m + (Math.random() - 0.5) * 20),
              (this.baseX = p),
              (this.baseY = m),
              (this.size = Math.random() * 1.5 + 0.5),
              (this.density = Math.random() * 30 + 1),
              Math.random() > 0.85
                ? (this.color = "#3b82f6")
                : (this.color = g
                    ? "rgba(255, 255, 255, 0.8)"
                    : "rgba(0, 0, 0, 0.8)"));
          }
          draw() {
            ((i.fillStyle = this.color),
              i.beginPath(),
              i.arc(this.x, this.y, this.size, 0, Math.PI * 2),
              i.closePath(),
              i.fill());
          }
          update() {
            let p = a.x - this.x,
              m = a.y - this.y,
              g = p * p + m * m,
              w = a.radius * a.radius;
            if (g < w) {
              let k = Math.sqrt(g),
                C = (a.radius - k) / a.radius,
                E = (p / k) * C * this.density,
                T = (m / k) * C * this.density;
              ((this.x -= E), (this.y -= T));
            } else
              (Math.abs(this.x - this.baseX) > 0.1 &&
                (this.x -= (this.x - this.baseX) / 10),
                Math.abs(this.y - this.baseY) > 0.1 &&
                  (this.y -= (this.y - this.baseY) / 10));
            this.draw();
          }
        }
        const u = () => {
            const S = r.getBoundingClientRect(),
              p = window.devicePixelRatio || 1;
            ((n.style.width = `${S.width}px`),
              (n.style.height = `${S.height}px`),
              (n.width = S.width * p),
              (n.height = S.height * p),
              i.scale(p, p));
            const m = document.documentElement.classList.contains("dark");
            i.fillStyle = "white";
            let g = Math.min(S.width / 4.2, 220);
            i.font = `800 ${g}px 'Inter','Futura', monospace`;
            let w = i.measureText(e).width;
            (w > S.width * 0.9 &&
              ((g = g * ((S.width * 0.9) / w)),
              (i.font = `800 ${g}px 'Inter','Futura', monospace`)),
              (i.textAlign = "center"),
              (i.textBaseline = "alphabetic"));
            const k = i.measureText(e);
            k.actualBoundingBoxAscent + k.actualBoundingBoxDescent;
            const C =
              (k.actualBoundingBoxAscent - k.actualBoundingBoxDescent) / 2;
            i.fillText(e, S.width / 2, S.height / 2 + C);
            const E = i.getImageData(0, 0, n.width, n.height);
            ((s = []), i.clearRect(0, 0, S.width, S.height));
            const T = Math.max(Math.floor(n.width / 300), 5);
            for (let N = 0; N < E.height; N += T)
              for (let M = 0; M < E.width; M += T)
                E.data[N * 4 * E.width + M * 4 + 3] > 128 &&
                  s.push(new l(M / p, N / p, m));
          },
          c = () => {
            const S = n.getBoundingClientRect();
            i.clearRect(0, 0, S.width, S.height);
            for (let p = 0; p < s.length; p++) s[p].update();
            o = requestAnimationFrame(c);
          },
          f = new ResizeObserver(() => {
            u();
          });
        (f.observe(n.parentElement), u(), c());
        const d = (S) => {
            const p = n.getBoundingClientRect();
            ((a.x = S.clientX - p.left), (a.y = S.clientY - p.top));
          },
          y = (S) => {
            if (S.touches.length > 0) {
              const p = n.getBoundingClientRect();
              ((a.x = S.touches[0].clientX - p.left),
                (a.y = S.touches[0].clientY - p.top));
            }
          },
          v = () => {
            ((a.x = -1e3), (a.y = -1e3));
          };
        (r.addEventListener("mousemove", d),
          r.addEventListener("touchmove", y),
          r.addEventListener("mouseleave", v),
          r.addEventListener("touchend", v));
        const x = new MutationObserver(() => {
          u();
        });
        return (
          x.observe(document.documentElement, {
            attributes: !0,
            attributeFilter: ["class"],
          }),
          () => {
            (cancelAnimationFrame(o),
              r.removeEventListener("mousemove", d),
              r.removeEventListener("touchmove", y),
              r.removeEventListener("mouseleave", v),
              r.removeEventListener("touchend", v),
              f.disconnect(),
              x.disconnect());
          }
        );
      }, [e]),
      h.jsx("canvas", {
        ref: t,
        className: "w-full h-full block",
        style: { touchAction: "none" },
      })
    );
  },
  ef = ({
    text: e,
    duration: t = 800,
    delay: n = 0,
    className: r = "",
    characters:
      i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:"<>?',
    trigger: s,
  }) => {
    const [o, a] = P.useState(s === void 0 ? "" : e),
      l = P.useRef(s);
    return (
      P.useEffect(() => {
        let u, c;
        const f = () => {
          const d = Date.now(),
            y = e.length;
          c = window.setInterval(() => {
            const x = Date.now() - d,
              S = Math.min(x / t, 1),
              p = Math.floor(S * y);
            let m = "";
            for (let g = 0; g < y; g++)
              g < p
                ? (m += e[g])
                : e[g] === " "
                  ? (m += " ")
                  : (m += i[Math.floor(Math.random() * i.length)]);
            (a(m), S === 1 && (window.clearInterval(c), a(e)));
          }, 30);
        };
        return (
          s === void 0 ? (u = window.setTimeout(f, n)) : s && !l.current && f(),
          (l.current = s),
          () => {
            (window.clearTimeout(u), window.clearInterval(c));
          }
        );
      }, [e, t, n, i, s]),
      h.jsx("span", { className: r, children: o || " " })
    );
  },
  tf = ["✿", "❀", "❁", "✾", "✽", "❋", "✺", "✵", "✧", "✦", "*"],
  Wk = ({ flower: e }) => {
    const t = P.useRef(null),
      [n, r] = P.useState(!1);
    return (
      P.useEffect(() => {
        const i = (s) => {
          if (!t.current) return;
          const o = t.current.getBoundingClientRect(),
            a = o.left + o.width / 2,
            l = o.top + o.height / 2,
            u = Math.hypot(s.clientX - a, s.clientY - l);
          r(u < 120);
        };
        return (
          window.addEventListener("mousemove", i),
          () => window.removeEventListener("mousemove", i)
        );
      }, []),
      h.jsx("div", {
        className: "absolute z-0",
        style: { left: `${e.x}%`, top: `${e.y}%` },
        children: h.jsx(U.div, {
          animate: { rotate: [e.rotation, e.rotation + 360] },
          transition: {
            duration: e.duration * 2,
            repeat: 1 / 0,
            ease: "linear",
          },
          children: h.jsx(U.div, {
            animate: { scale: [0.8, 1.2, 0.8], opacity: [0.6, 1, 0.6] },
            transition: {
              duration: e.duration,
              repeat: 1 / 0,
              delay: e.delay,
              ease: "easeInOut",
            },
            children: h.jsx(U.div, {
              ref: t,
              className: `font-mono text-lg md:text-2xl select-none mix-blend-multiply dark:mix-blend-screen transition-all duration-1000 ease-out ${n ? "text-accent dark:text-accent drop-shadow-[0_0_15px_rgba(0,51,255,0.8)] z-50" : "text-neutral-400/40 dark:text-neutral-500/40 drop-shadow-none z-0"}`,
              animate: {
                scale: n ? e.scale * 2.5 : e.scale,
                opacity: n ? e.hoverOpacity : 0.4,
              },
              transition: {
                scale: {
                  type: "spring",
                  stiffness: n ? 150 : 30,
                  damping: n ? 12 : 15,
                  mass: n ? 1 : 1.5,
                },
                opacity: { duration: n ? 0.3 : 1.5, ease: "easeInOut" },
              },
              children: e.type,
            }),
          }),
        }),
      })
    );
  },
  Zk = () => {
    const [e, t] = P.useState([]);
    return (
      P.useEffect(() => {
        t(
          (() => {
            const r = [];
            let s = 0;
            const o = 500;
            for (; r.length < 25 && s < o; ) {
              s++;
              let a = Math.random() * 90 + 5,
                l = Math.random() * 90 + 5;
              a > 20 &&
                a < 80 &&
                l > 30 &&
                l < 70 &&
                (Math.random() > 0.5
                  ? (a =
                      a < 50 ? Math.random() * 15 + 5 : 80 + Math.random() * 15)
                  : (l =
                      l < 50
                        ? Math.random() * 25 + 5
                        : 70 + Math.random() * 25));
              let u = !1;
              for (const c of r) {
                const f = c.x - a,
                  d = c.y - l;
                if (Math.sqrt(f * f + d * d) < 10) {
                  u = !0;
                  break;
                }
              }
              u ||
                r.push({
                  id: r.length,
                  x: a,
                  y: l,
                  type: tf[Math.floor(Math.random() * tf.length)],
                  delay: Math.random() * 10,
                  duration: Math.random() * 6 + 6,
                  scale: Math.random() * 0.8 + 0.5,
                  rotation: Math.random() * 360,
                  hoverOpacity: Math.random() * 0.5 + 0.5,
                });
            }
            return r;
          })(),
        );
      }, []),
      h.jsx("div", {
        className: "absolute inset-0 overflow-hidden pointer-events-none z-0",
        children: e.map((n) => h.jsx(Wk, { flower: n }, n.id)),
      })
    );
  },
  Hk = [
    { text: "50%的诗意 + 50%的秩序", type: "core", weight: 1 },
    { text: "Albert Camus 的西西弗斯信徒", type: "spirit", weight: 0.8 },
    { text: "试图在 180 步频中寻找内啡肽平衡", type: "status", weight: 0.8 },
    { text: "2026年初签下了半马协议", type: "status", weight: 0.7 },
    { text: "社交容量极低，仅限小流量通信", type: "defense", weight: 0.9 },
    {
      text: "电话恐惧症：比起震动，更喜欢异步文字",
      type: "habit",
      weight: 0.9,
    },
    { text: "一个坚信代码也有‘情绪’的 Vibe Coder", type: "coder", weight: 0.8 },
    {
      text: "在 0 和 1 之间寻找灰色地带的巨蟹座",
      type: "identity",
      weight: 0.7,
    },
    {
      text: "比起 Tea Ritual，更倾向于 Coffee Break",
      type: "taste",
      weight: 0.7,
    },
    { text: "喜欢的音乐单曲循环 100 遍", type: "habit", weight: 0.8 },
    { text: "买书如山倒，读书如抽丝", type: "glitch", weight: 0.4 },
    { text: "清晨里的‘起不来床’特困户", type: "glitch", weight: 0.3 },
    {
      text: "对笔尖划过纸张的阻尼感有种病态的执着",
      type: "quirk",
      weight: 0.4,
    },
    {
      text: "专注时会下意识屏住呼吸，直到身体缺氧警告",
      type: "quirk",
      weight: 0.2,
    },
    {
      text: "#INFJ，一个在热闹中保持离线的观察者",
      type: "identity",
      weight: 0.7,
    },
  ],
  $k = [
    { text: "50% Poetry + 50% Order", type: "core", weight: 1 },
    { text: "Disciple of Camus' Sisyphus", type: "spirit", weight: 0.8 },
    {
      text: "Seeking endorphin balance at 180 cadence",
      type: "status",
      weight: 0.8,
    },
    {
      text: "Signed a half-marathon pact in early 2026",
      type: "status",
      weight: 0.7,
    },
    {
      text: "Low social capacity, low-bandwidth comms only",
      type: "defense",
      weight: 0.9,
    },
    {
      text: "Telephobia: Prefer async text over ringing phones",
      type: "habit",
      weight: 0.9,
    },
    {
      text: "A Vibe Coder who believes code has 'emotions'",
      type: "coder",
      weight: 0.8,
    },
    {
      text: "A Cancer seeking the gray area between 0 and 1",
      type: "identity",
      weight: 0.7,
    },
    {
      text: "Prefer Coffee Breaks over Tea Rituals",
      type: "taste",
      weight: 0.7,
    },
    { text: "Looping favorite songs 100+ times", type: "habit", weight: 0.8 },
    {
      text: "Tsundoku master: buying books faster than reading them",
      type: "glitch",
      weight: 0.4,
    },
    {
      text: "Chronically unable to get out of bed in the morning",
      type: "glitch",
      weight: 0.3,
    },
    {
      text: "Morbidly obsessed with the friction of pen on paper",
      type: "quirk",
      weight: 0.4,
    },
    {
      text: "Subconsciously holding breath when focused until hypoxia warns",
      type: "quirk",
      weight: 0.2,
    },
    {
      text: "#INFJ: A silent observer in the frequency of noise.",
      type: "identity",
      weight: 0.8,
    },
  ],
  Gk = { zh: Hk, en: $k },
  Mi = [
    { x: 15, y: 10 },
    { x: 35, y: 5 },
    { x: 50, y: 12 },
    { x: 65, y: 5 },
    { x: 85, y: 10 },
    { x: 25, y: 22 },
    { x: 75, y: 22 },
    { x: 15, y: 90 },
    { x: 35, y: 95 },
    { x: 50, y: 88 },
    { x: 65, y: 95 },
    { x: 85, y: 90 },
    { x: 25, y: 78 },
    { x: 75, y: 78 },
    { x: 50, y: 75 },
  ],
  Kk = ({ isVisible: e, lang: t }) => {
    const r = Gk[t].map((i, s) => ({
      id: s + 1,
      x: Mi[s % Mi.length].x,
      y: Mi[s % Mi.length].y,
      text: i.text,
      weight: i.weight,
    }));
    return h.jsx("div", {
      className: "absolute inset-0 z-20 pointer-events-none",
      children: h.jsx(Eu, {
        children:
          e &&
          r.map((i) =>
            h.jsxs(
              U.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 1.2, delay: Math.random() * 0.5 },
                className:
                  "absolute flex items-center justify-center pointer-events-auto group cursor-default",
                style: {
                  left: `${i.x}%`,
                  top: `${i.y}%`,
                  transform: "translate(-50%, -50%)",
                },
                children: [
                  h.jsx("div", {
                    className:
                      "absolute w-[250%] h-[350%] min-w-[180px] min-h-[100px] z-10",
                  }),
                  h.jsxs("div", {
                    className:
                      "relative z-0 flex items-start gap-2 opacity-0 blur-md group-hover:opacity-100 group-hover:blur-none transition-all duration-700 ease-out max-w-[200px] md:max-w-[280px]",
                    children: [
                      h.jsx("div", {
                        className:
                          "absolute inset-0 -m-6 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0)_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0)_70%)] -z-10 pointer-events-none",
                      }),
                      h.jsx("span", {
                        className:
                          "text-accent/80 font-mono text-[8px] md:text-[9px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 mt-[3px] shrink-0",
                        children: ">",
                      }),
                      h.jsx("span", {
                        className:
                          "text-[8px] md:text-[9px] font-mono tracking-widest text-neutral-900 dark:text-neutral-100 transition-colors duration-500 uppercase leading-relaxed text-left drop-shadow-sm",
                        children: i.text,
                      }),
                    ],
                  }),
                ],
              },
              i.id,
            ),
          ),
      }),
    });
  },
  Yk = ({ lang: e, onNavigate: t }) => {
    const [n, r] = P.useState(null),
      [i, s] = P.useState(!1),
      o = P.useRef(null),
      a = P.useRef(0),
      l = P.useRef(0),
      u = P.useRef(0);
    P.useEffect(() => {
      const d = () => {
        var y;
        if (!o.current) {
          const v = window.AudioContext || window.webkitAudioContext;
          v && (o.current = new v());
        }
        (((y = o.current) == null ? void 0 : y.state) === "suspended" &&
          o.current.resume().catch(() => {}),
          window.removeEventListener("click", d),
          window.removeEventListener("touchstart", d));
      };
      return (
        window.addEventListener("click", d),
        window.addEventListener("touchstart", d),
        () => {
          (window.removeEventListener("click", d),
            window.removeEventListener("touchstart", d));
        }
      );
    }, []);
    const c = (d) => {
        const y = Date.now();
        if (y - a.current > u.current) {
          a.current = y;
          try {
            if (!o.current) {
              const z = window.AudioContext || window.webkitAudioContext;
              if (!z) return;
              o.current = new z();
            }
            const v = o.current;
            if (
              (v.state === "suspended" && v.resume().catch(() => {}),
              v.state === "suspended")
            )
              return;
            const x = d.currentTarget.getBoundingClientRect(),
              p = (d.clientX - x.left) / x.width,
              m = [
                { freq: 698.46, duration: 600 },
                { freq: 622.25, duration: 300 },
                { freq: 698.46, duration: 600 },
                { freq: 554.37, duration: 300 },
                { freq: 523.25, duration: 600 },
                { freq: 554.37, duration: 300 },
                { freq: 415.3, duration: 1200 },
                { freq: 349.23, duration: 600 },
                { freq: 415.3, duration: 300 },
                { freq: 554.37, duration: 600 },
                { freq: 698.46, duration: 300 },
                { freq: 830.61, duration: 1200 },
                { freq: 698.46, duration: 300 },
                { freq: 554.37, duration: 300 },
                { freq: 698.46, duration: 300 },
                { freq: 830.61, duration: 1200 },
              ],
              g = m[l.current];
            ((u.current = g.duration),
              (l.current = (l.current + 1) % m.length));
            const w = v.createGain(),
              k = v.createStereoPanner();
            ((k.pan.value = (p - 0.5) * 0.6),
              w.connect(k),
              k.connect(v.destination));
            const C = 0.06;
            (w.gain.setValueAtTime(0, v.currentTime),
              w.gain.linearRampToValueAtTime(C, v.currentTime + 0.02),
              w.gain.exponentialRampToValueAtTime(C * 0.1, v.currentTime + 0.5),
              w.gain.exponentialRampToValueAtTime(1e-4, v.currentTime + 4));
            const E = v.createBiquadFilter();
            ((E.type = "lowpass"),
              E.frequency.setValueAtTime(2e3, v.currentTime),
              E.frequency.exponentialRampToValueAtTime(400, v.currentTime + 2),
              E.connect(w));
            const T = v.createOscillator();
            ((T.type = "sine"),
              T.frequency.setValueAtTime(g.freq, v.currentTime));
            const N = v.createOscillator(),
              M = v.createGain();
            ((N.type = "sine"),
              N.frequency.setValueAtTime(g.freq * 2, v.currentTime),
              M.gain.setValueAtTime(0.01, v.currentTime),
              T.connect(E),
              N.connect(M),
              M.connect(E),
              T.start(v.currentTime),
              N.start(v.currentTime),
              T.stop(v.currentTime + 4),
              N.stop(v.currentTime + 4));
          } catch {}
        }
      },
      f = [
        {
          id: "ai-library",
          number: "01",
          titleEn: "AI Learning Library",
          titleZh: "AI 学习库",
          descEn: "Curated resources & Vibecoding experiments",
          descZh: "精选资源与 Vibecoding 实验",
        },
        {
          id: "knowledge-base",
          number: "02",
          titleEn: "Knowledge Base",
          titleZh: "个人知识库",
          descEn: "Templates, workflows & insights",
          descZh: "模版、工作流与思考",
        },
        {
          id: "data-viz",
          number: "03",
          titleEn: "Data Visualization",
          titleZh: "数据可视化",
          descEn: "Tableau portfolio & inspirations",
          descZh: "Tableau 作品与灵感",
        },
      ];
    return h.jsxs("div", {
      className:
        "min-h-screen pt-24 pb-24 px-6 max-w-7xl mx-auto flex flex-col",
      children: [
        h.jsxs("div", {
          className:
            "relative flex-1 flex flex-col items-center mb-0 min-h-[calc(100vh-96px)] overflow-hidden",
          children: [
            h.jsx(U.div, {
              animate: {
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                rotate: [0, 90, 0],
              },
              transition: { duration: 20, repeat: 1 / 0, ease: "linear" },
              className:
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-accent/20 rounded-full blur-[100px] pointer-events-none z-0",
            }),
            h.jsx(U.div, {
              animate: { rotate: 360 },
              transition: { duration: 40, repeat: 1 / 0, ease: "linear" },
              className:
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] max-w-[450px] max-h-[450px] rounded-full border border-dashed border-neutral-300/50 dark:border-neutral-700/50 pointer-events-none z-0",
            }),
            h.jsx("div", {
              className:
                "absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-neutral-300 dark:border-neutral-700 opacity-50 pointer-events-none z-10",
            }),
            h.jsx("div", {
              className:
                "absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-neutral-300 dark:border-neutral-700 opacity-50 pointer-events-none z-10",
            }),
            h.jsx("div", {
              className:
                "absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-neutral-300 dark:border-neutral-700 opacity-50 pointer-events-none z-10",
            }),
            h.jsx("div", {
              className:
                "absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-neutral-300 dark:border-neutral-700 opacity-50 pointer-events-none z-10",
            }),
            h.jsxs(U.div, {
              animate: { y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] },
              transition: { duration: 6, repeat: 1 / 0, ease: "easeInOut" },
              className:
                "absolute top-[20%] left-[10%] hidden md:flex items-center gap-2 font-mono text-[10px] text-neutral-500 border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-sm z-10",
              children: [
                h.jsx("span", {
                  className: "w-1.5 h-1.5 rounded-full bg-accent animate-pulse",
                }),
                "SYS.READY",
              ],
            }),
            h.jsx(U.div, {
              animate: { y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] },
              transition: {
                duration: 8,
                repeat: 1 / 0,
                ease: "easeInOut",
                delay: 1,
              },
              className:
                "absolute top-[30%] right-[15%] hidden md:flex items-center gap-2 font-mono text-[10px] text-neutral-500 border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-sm z-10",
              children: "[DATA.STREAM]",
            }),
            h.jsx(U.div, {
              animate: { y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] },
              transition: {
                duration: 7,
                repeat: 1 / 0,
                ease: "easeInOut",
                delay: 2,
              },
              className:
                "absolute bottom-[30%] left-[15%] hidden md:flex items-center gap-2 font-mono text-[10px] text-neutral-500 border border-neutral-200 dark:border-neutral-800 px-3 py-1 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-sm z-10",
              children: "VIBE_CODING_",
            }),
            h.jsx(Zk, {}),
            h.jsxs("div", {
              className:
                "relative z-10 flex flex-col items-center justify-center w-full my-auto shrink-0",
              children: [
                h.jsxs("div", {
                  className:
                    "relative mb-6 flex justify-center w-full h-[40vh] min-h-[250px] max-h-[450px]",
                  onMouseMove: c,
                  onMouseEnter: () => s(!0),
                  onMouseLeave: () => s(!1),
                  children: [
                    h.jsx(Uk, { text: "YURI.WG" }),
                    h.jsx(Kk, { isVisible: i, lang: e }),
                  ],
                }),
                h.jsx(U.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.6, duration: 0.8 },
                  className:
                    "text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 max-w-3xl font-light text-center px-4",
                  children: h.jsxs("div", {
                    className: "inline-block relative",
                    children: [
                      h.jsx(ef, {
                        text:
                          e === "en"
                            ? "Exploring the intersection of AI, Data, and Design. A curated hub for digital insights, creative tools, and data-driven stories."
                            : "探索 AI、数据与设计的交汇点。一个集深度见解、创意工具与数据叙事于一体的数字空间。",
                        delay: 800,
                        duration: 1200,
                        characters: "01",
                      }),
                      h.jsx(U.span, {
                        animate: { opacity: [1, 0, 1] },
                        transition: {
                          duration: 1,
                          repeat: 1 / 0,
                          ease: "linear",
                        },
                        className:
                          "inline-block w-[2px] h-[1em] bg-accent ml-1 align-middle",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            h.jsx(Bk, {}),
            h.jsxs(U.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 2, duration: 1 },
              className:
                "relative mb-8 mt-12 flex flex-col items-center gap-3 z-20 cursor-pointer shrink-0",
              onClick: () =>
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                }),
              children: [
                h.jsxs("div", {
                  className:
                    "font-mono text-[10px] md:text-[11px] text-neutral-500 dark:text-neutral-400 flex items-center gap-2 bg-white/30 dark:bg-black/30 px-4 py-1.5 rounded-full border border-neutral-200/50 dark:border-neutral-800/50 backdrop-blur-md hover:border-accent/50 transition-colors",
                  children: [
                    h.jsx("span", {
                      className: "text-accent font-bold",
                      children: ">",
                    }),
                    h.jsx("span", {
                      children:
                        e === "en" ? "initiate_scroll()" : "执行_向下滚动()",
                    }),
                    h.jsx(U.span, {
                      animate: { opacity: [1, 0, 1] },
                      transition: {
                        duration: 0.8,
                        repeat: 1 / 0,
                        ease: "linear",
                      },
                      className: "w-1.5 h-3 bg-accent inline-block",
                    }),
                  ],
                }),
                h.jsx(U.div, {
                  animate: { y: [0, 6, 0], opacity: [0.5, 1, 0.5] },
                  transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
                  className: "text-accent",
                  children: h.jsx(Dk, { size: 16, strokeWidth: 1.5 }),
                }),
              ],
            }),
          ],
        }),
        h.jsx("div", {
          className:
            "grid grid-cols-1 gap-0 border-t border-neutral-200 dark:border-neutral-800",
          children: f.map((d, y) =>
            h.jsxs(
              U.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.2 + y * 0.1, duration: 0.5 },
                onClick: () => t(d.id),
                onMouseEnter: () => {
                  (r(d.id), (document.body.style.cursor = "help"));
                },
                onMouseLeave: () => {
                  (r(null), (document.body.style.cursor = "default"));
                },
                className:
                  "group relative border-b border-neutral-200 dark:border-neutral-800 py-10 md:py-12 cursor-pointer overflow-hidden",
                children: [
                  h.jsxs("div", {
                    className:
                      "flex flex-col md:flex-row md:items-baseline justify-between relative z-10 gap-6 md:gap-0",
                    children: [
                      h.jsxs("div", {
                        className:
                          "flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 w-full",
                        children: [
                          h.jsx("span", {
                            className:
                              "font-mono text-xs md:text-sm text-neutral-400 group-hover:text-accent transition-colors duration-300",
                            children: d.number,
                          }),
                          h.jsxs("div", {
                            className: "flex-1",
                            children: [
                              h.jsx("h2", {
                                className:
                                  "text-3xl md:text-5xl font-bold text-black dark:text-white group-hover:text-accent transition-colors duration-300 mb-2 tracking-tighter",
                                children: h.jsx(ef, {
                                  text: e === "en" ? d.titleEn : d.titleZh,
                                  trigger: n === d.id,
                                  duration: 400,
                                  characters: "!<>-_\\\\/[]{}—=+*^?#________",
                                }),
                              }),
                              h.jsx("p", {
                                className:
                                  "text-neutral-500 dark:text-neutral-400 text-xs md:text-base max-w-md group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors duration-300 font-light",
                                children: e === "en" ? d.descEn : d.descZh,
                              }),
                            ],
                          }),
                        ],
                      }),
                      h.jsx("div", {
                        className:
                          "opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-accent self-end md:self-center",
                        children: h.jsx(Rk, { size: 40, strokeWidth: 1.5 }),
                      }),
                    ],
                  }),
                  h.jsx("div", {
                    className:
                      "absolute inset-0 bg-neutral-50 dark:bg-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0",
                    children: h.jsx("div", {
                      className:
                        "absolute inset-0 bg-[linear-gradient(to_right,#0033FF_1px,transparent_1px),linear-gradient(to_bottom,#0033FF_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.03] dark:opacity-[0.05]",
                    }),
                  }),
                ],
              },
              d.id,
            ),
          ),
        }),
      ],
    });
  },
  nl = ({ project: e, lang: t, onViewPrompt: n }) => {
    const [r, i] = P.useState(!1),
      s = t === "zh" && e.titleZh ? e.titleZh : e.title,
      o = t === "zh" && e.descriptionZh ? e.descriptionZh : e.description,
      a = (f) =>
        `https://api.microlink.io/?url=${encodeURIComponent(f)}&screenshot=true&meta=false&embed=screenshot.url&viewport.isMobile=false&viewport.width=1280&viewport.height=800`,
      l = e.thumbnail || a(e.url),
      u = (f) => {
        (f.preventDefault(), f.stopPropagation(), e.prompt && n && n(e.prompt));
      },
      c = () => {
        window.open(e.url, "_blank", "noopener,noreferrer");
      };
    return h.jsxs("div", {
      onClick: c,
      role: "button",
      tabIndex: 0,
      onKeyDown: (f) => {
        (f.key === "Enter" || f.key === " ") && c();
      },
      className:
        "group flex flex-col h-full bg-white dark:bg-black border border-black dark:border-white hover:border-accent dark:hover:border-accent transition-all duration-300 overflow-hidden cursor-pointer",
      children: [
        h.jsxs("div", {
          className:
            "relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900 shrink-0 border-b border-black dark:border-white group-hover:border-accent transition-colors",
          children: [
            r
              ? h.jsxs("div", {
                  className:
                    "w-full aspect-[3/2] flex flex-col items-center justify-center text-neutral-400 bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-600",
                  children: [
                    h.jsx(rg, { size: 32, className: "mb-2 opacity-50" }),
                    h.jsx("span", {
                      className: "text-xs font-mono",
                      children: "Preview Unavailable",
                    }),
                  ],
                })
              : h.jsx("img", {
                  src: l,
                  alt: s,
                  onError: () => i(!0),
                  className:
                    "w-full h-full object-cover block transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-110",
                  loading: "lazy",
                }),
            h.jsx("div", {
              className:
                "absolute top-4 right-4 bg-accent p-2 text-white opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300",
              children: h.jsx(ng, { size: 18 }),
            }),
          ],
        }),
        h.jsxs("div", {
          className: "p-6 flex flex-col flex-1",
          children: [
            h.jsx("h3", {
              className:
                "text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-accent transition-colors tracking-tighter leading-tight",
              children: s,
            }),
            h.jsx("p", {
              className:
                "text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3 font-normal",
              children: o,
            }),
            h.jsxs("div", {
              className:
                "mt-auto flex items-end justify-between gap-4 border-t border-neutral-100 dark:border-neutral-800 pt-4",
              children: [
                h.jsx("div", {
                  className: "flex flex-wrap gap-2",
                  children: e.tags.map((f) =>
                    h.jsx(
                      "span",
                      {
                        className:
                          "text-[10px] uppercase tracking-widest font-mono text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 px-2 py-1 group-hover:text-accent group-hover:border-accent/30 transition-colors",
                        children: f,
                      },
                      f,
                    ),
                  ),
                }),
                h.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.articleUrl &&
                      h.jsx("a", {
                        href: e.articleUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "p-1.5 text-neutral-400 dark:text-neutral-500 hover:text-white hover:bg-accent dark:hover:text-white dark:hover:bg-accent transition-colors",
                        title: t === "zh" ? "阅读创作思路" : "Read Article",
                        onClick: (f) => f.stopPropagation(),
                        children: h.jsx(Lk, { size: 14 }),
                      }),
                    e.prompt &&
                      h.jsx("button", {
                        onClick: u,
                        className:
                          "p-1.5 text-neutral-400 dark:text-neutral-500 hover:text-white hover:bg-accent dark:hover:text-white dark:hover:bg-accent transition-colors",
                        title: t === "zh" ? "查看提示词" : "View Prompt",
                        children: h.jsx(Ok, { size: 14 }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Xk = ({ lang: e, vibecodingProjects: t, resources: n, onViewPrompt: r }) => {
    const [i, s] = P.useState(1),
      o = 6,
      a = Math.ceil(t.length / o),
      l = t.slice((i - 1) * o, i * o),
      u = (f) => {
        s(f);
        const d = document.getElementById("vibecoding-experiments");
        if (d) {
          const v = d.getBoundingClientRect().top + window.scrollY + -80;
          window.scrollTo({ top: v, behavior: "smooth" });
        }
      },
      c = n.reduce((f, d) => {
        const y = d.category || "Other";
        return (f[y] || (f[y] = []), f[y].push(d), f);
      }, {});
    return h.jsxs("div", {
      className: "pt-24 pb-16 px-6 max-w-7xl mx-auto",
      children: [
        h.jsxs(U.div, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "mb-16",
          children: [
            h.jsx("h1", {
              className:
                "text-4xl md:text-6xl font-black tracking-tighter mb-4",
              children: e === "en" ? "AI Learning Library" : "AI 学习库",
            }),
            h.jsx("p", {
              className: "text-xl text-gray-500 max-w-2xl",
              children:
                e === "en"
                  ? "A curated collection of AI resources, tutorials, and my personal vibecoding experiments."
                  : "精选的 AI 资源、教程以及我的 Vibecoding 实验项目。",
            }),
          ],
        }),
        h.jsxs("section", {
          id: "vibecoding-experiments",
          className: "mb-20",
          children: [
            h.jsx("h2", {
              className:
                "text-2xl font-bold mb-8 border-b border-gray-200 pb-4",
              children:
                e === "en" ? "Vibecoding Experiments" : "Vibecoding 实验",
            }),
            h.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              children: l.map((f) =>
                h.jsx(nl, { project: f, lang: e, onViewPrompt: r }, f.id),
              ),
            }),
            a > 1 &&
              h.jsx("div", {
                className: "flex justify-center items-center gap-3 mt-16",
                children: Array.from({ length: a }).map((f, d) => {
                  const y = d + 1,
                    v = y === i;
                  return h.jsx(
                    "button",
                    {
                      onClick: () => u(y),
                      className: `h-2 transition-all duration-300 ${v ? "w-12 bg-accent" : "w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-500"}`,
                      "aria-label": `Go to page ${y}`,
                    },
                    y,
                  );
                }),
              }),
          ],
        }),
        h.jsxs("section", {
          children: [
            h.jsx("h2", {
              className:
                "text-2xl font-bold mb-8 border-b border-gray-200 pb-4",
              children: e === "en" ? "Curated Resources" : "精选资源",
            }),
            h.jsx("div", {
              className: "flex flex-col gap-12",
              children: Object.entries(c).map(([f, d]) =>
                h.jsxs(
                  "div",
                  {
                    children: [
                      h.jsxs("h3", {
                        className:
                          "text-sm font-mono uppercase tracking-widest text-neutral-500 mb-6 flex items-center gap-4",
                        children: [
                          f,
                          h.jsx("div", {
                            className:
                              "h-px bg-neutral-200 dark:bg-neutral-800 flex-1",
                          }),
                        ],
                      }),
                      h.jsx("div", {
                        className:
                          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: d.map((y) =>
                          h.jsxs(
                            "div",
                            {
                              className:
                                "group p-5 border border-gray-100 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors duration-300 relative",
                              children: [
                                h.jsx("a", {
                                  href: y.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity",
                                  children: "↗",
                                }),
                                h.jsx("h3", {
                                  className:
                                    "text-lg font-bold mb-2 group-hover:underline decoration-1 underline-offset-4 pr-6",
                                  children: h.jsx("a", {
                                    href: y.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children:
                                      e === "en"
                                        ? y.title
                                        : y.titleZh || y.title,
                                  }),
                                }),
                                h.jsx("p", {
                                  className:
                                    "text-sm text-gray-500 line-clamp-2",
                                  children:
                                    e === "en"
                                      ? y.description
                                      : y.descriptionZh || y.description,
                                }),
                              ],
                            },
                            y.id,
                          ),
                        ),
                      }),
                    ],
                  },
                  f,
                ),
              ),
            }),
          ],
        }),
      ],
    });
  },
  Qk = ({ template: e, lang: t, onClick: n }) => {
    const [r, i] = P.useState(!1),
      [s, o] = P.useState(0),
      a = (d) =>
        d === "#" || d.includes("pan.baidu.com")
          ? ""
          : `https://api.microlink.io/?url=${encodeURIComponent(d)}&screenshot=true&meta=false&embed=screenshot.url&viewport.isMobile=false&viewport.width=1280&viewport.height=800`,
      l =
        e.thumbnails && e.thumbnails.length > 0
          ? e.thumbnails
          : [a(e.url)].filter(Boolean),
      u = l[s] || "",
      c = (d) => {
        (d.preventDefault(), d.stopPropagation(), o((y) => (y + 1) % l.length));
      },
      f = (d) => {
        (d.preventDefault(),
          d.stopPropagation(),
          o((y) => (y - 1 + l.length) % l.length));
      };
    return h.jsxs("div", {
      className:
        "group flex flex-col h-full bg-white dark:bg-black border border-black dark:border-white hover:border-accent dark:hover:border-accent transition-all duration-300 overflow-hidden cursor-pointer rounded-xl",
      children: [
        h.jsxs("div", {
          className:
            "relative aspect-[3/4] overflow-hidden bg-neutral-100 dark:bg-neutral-900 shrink-0 border-b border-black dark:border-white group-hover:border-accent transition-colors",
          children: [
            h.jsx("div", {
              className:
                "absolute top-4 right-4 z-10 text-xs font-mono bg-black text-white px-2 py-1 rounded-full",
              children: e.platform,
            }),
            u && !r
              ? h.jsxs(h.Fragment, {
                  children: [
                    h.jsx("img", {
                      src: u,
                      alt: e.title,
                      onError: () => i(!0),
                      className:
                        "w-full h-full object-cover block transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-110",
                      loading: "lazy",
                      referrerPolicy: "no-referrer",
                    }),
                    l.length > 1 &&
                      h.jsxs(h.Fragment, {
                        children: [
                          h.jsx("button", {
                            onClick: f,
                            className:
                              "absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10",
                            children: h.jsx("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              children: h.jsx("path", { d: "m15 18-6-6 6-6" }),
                            }),
                          }),
                          h.jsx("button", {
                            onClick: c,
                            className:
                              "absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10",
                            children: h.jsx("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              children: h.jsx("path", { d: "m9 18 6-6-6-6" }),
                            }),
                          }),
                          h.jsx("div", {
                            className:
                              "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10",
                            children: l.map((d, y) =>
                              h.jsx(
                                "div",
                                {
                                  className: `h-1.5 rounded-full transition-all ${y === s ? "w-4 bg-blue-500" : "w-1.5 bg-blue-500/30"}`,
                                },
                                y,
                              ),
                            ),
                          }),
                        ],
                      }),
                  ],
                })
              : h.jsxs("div", {
                  className:
                    "w-full h-full flex flex-col items-center justify-center text-neutral-400 bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-600",
                  children: [
                    h.jsx(rg, { size: 32, className: "mb-2 opacity-50" }),
                    h.jsx("span", {
                      className: "text-xs font-mono",
                      children: "Preview Unavailable",
                    }),
                  ],
                }),
          ],
        }),
        h.jsxs("div", {
          className: "p-6 flex flex-col flex-grow",
          children: [
            h.jsx("h3", {
              className: "text-xl font-bold mb-2",
              children: h.jsx("a", {
                href: e.url,
                target: e.isPaid ? void 0 : "_blank",
                rel: e.isPaid ? void 0 : "noopener noreferrer",
                onClick: (d) => n(d, e),
                className:
                  "hover:underline decoration-2 underline-offset-4 cursor-pointer",
                children: t === "en" ? e.title : e.titleZh || e.title,
              }),
            }),
            h.jsx("p", {
              className: "text-sm text-gray-500 mb-6 flex-grow",
              children:
                t === "en" ? e.description : e.descriptionZh || e.description,
            }),
            h.jsxs("div", {
              className:
                "flex items-center justify-between text-sm font-medium mt-auto",
              children: [
                h.jsx("span", {
                  className: "text-gray-400",
                  children: e.price || "Free",
                }),
                h.jsxs("a", {
                  href: e.url,
                  target: e.isPaid ? void 0 : "_blank",
                  rel: e.isPaid ? void 0 : "noopener noreferrer",
                  onClick: (d) => n(d, e),
                  className:
                    "flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer",
                  children: [t === "en" ? "Get Template" : "获取模版", " →"],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  qk = ({ lang: e, blogPosts: t, templates: n }) => {
    const [r, i] = P.useState(null),
      s = (o, a) => {
        a.isPaid && (o.preventDefault(), i(a));
      };
    return h.jsxs("div", {
      className: "pt-24 pb-16 px-6 max-w-7xl mx-auto",
      children: [
        h.jsxs(U.div, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "mb-16",
          children: [
            h.jsx("h1", {
              className:
                "text-4xl md:text-6xl font-black tracking-tighter mb-4",
              children: e === "en" ? "Knowledge Base" : "个人知识库",
            }),
            h.jsx("p", {
              className: "text-xl text-gray-500 max-w-2xl",
              children:
                e === "en"
                  ? "A collection of templates, workflows, and articles on personal knowledge management."
                  : "关于个人知识管理的模版、工作流以及文章分享。",
            }),
          ],
        }),
        h.jsxs("section", {
          className: "mb-20",
          children: [
            h.jsx("h2", {
              className:
                "text-2xl font-bold mb-8 border-b border-gray-200 pb-4",
              children: e === "en" ? "Templates & Tools" : "模版与工具",
            }),
            h.jsx("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
              children: n.map((o) =>
                h.jsx(Qk, { template: o, lang: e, onClick: s }, o.id),
              ),
            }),
          ],
        }),
        h.jsxs("section", {
          children: [
            h.jsx("h2", {
              className:
                "text-2xl font-bold mb-8 border-b border-gray-200 pb-4",
              children: e === "en" ? "Articles & Thoughts" : "文章与思考",
            }),
            h.jsx("div", {
              className: "space-y-8",
              children: t.map((o) =>
                h.jsxs(
                  "article",
                  {
                    className:
                      "group flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 border-b border-gray-100 dark:border-gray-800 pb-8 last:border-0",
                    children: [
                      h.jsx("div", {
                        className:
                          "md:w-32 flex-shrink-0 text-sm font-mono text-gray-400",
                        children: e === "en" ? o.date : o.dateZh,
                      }),
                      h.jsxs("div", {
                        className: "flex-grow",
                        children: [
                          h.jsx("h3", {
                            className:
                              "text-xl md:text-2xl font-bold mb-2 group-hover:text-accent transition-colors",
                            children: h.jsx("a", {
                              href: o.url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: e === "en" ? o.title : o.titleZh,
                            }),
                          }),
                          h.jsx("p", {
                            className:
                              "text-gray-500 leading-relaxed max-w-3xl",
                            children:
                              e === "en" ? o.description : o.descriptionZh,
                          }),
                        ],
                      }),
                      h.jsx("div", {
                        className:
                          "md:w-24 flex-shrink-0 text-right opacity-0 group-hover:opacity-100 transition-opacity",
                        children: h.jsx("a", {
                          href: o.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "text-sm font-medium hover:underline",
                          children: "Read →",
                        }),
                      }),
                    ],
                  },
                  o.id,
                ),
              ),
            }),
          ],
        }),
        h.jsx(Eu, {
          children:
            r &&
            h.jsxs("div", {
              className:
                "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6",
              children: [
                h.jsx(U.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  onClick: () => i(null),
                  className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
                }),
                h.jsxs(U.div, {
                  initial: { opacity: 0, scale: 0.95, y: 20 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.95, y: 20 },
                  className:
                    "relative w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800",
                  children: [
                    h.jsxs("div", {
                      className:
                        "flex justify-between items-center p-6 border-b border-neutral-100 dark:border-neutral-800",
                      children: [
                        h.jsx("h3", {
                          className: "text-xl font-bold",
                          children:
                            e === "en" ? "Purchase Template" : "获取模版",
                        }),
                        h.jsx("button", {
                          onClick: () => i(null),
                          className:
                            "p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors",
                          children: h.jsx(ig, { size: 20 }),
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "p-6",
                      children: [
                        h.jsx("p", {
                          className:
                            "text-neutral-600 dark:text-neutral-400 mb-6 text-center text-sm",
                          children:
                            e === "en"
                              ? "Please scan the QR code below via Alipay or WeChat to purchase. After payment, please contact me to get the template link."
                              : "请使用支付宝或微信扫描下方二维码进行支付。支付完成后，请通过底部联系方式联系我获取模版链接。",
                        }),
                        h.jsxs("div", {
                          className:
                            "flex flex-col sm:flex-row gap-6 justify-center items-center",
                          children: [
                            h.jsxs("div", {
                              className: "flex flex-col items-center gap-2",
                              children: [
                                h.jsx("div", {
                                  className:
                                    "w-40 h-40 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                                  children: h.jsx("img", {
                                    src: "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/支付宝19&w=800",
                                    alt: "Alipay QR Code",
                                    className: "w-full h-full object-cover",
                                    referrerPolicy: "no-referrer",
                                  }),
                                }),
                                h.jsx("span", {
                                  className:
                                    "text-sm font-medium text-blue-500",
                                  children: "支付宝",
                                }),
                              ],
                            }),
                            h.jsxs("div", {
                              className: "flex flex-col items-center gap-2",
                              children: [
                                h.jsx("div", {
                                  className:
                                    "w-40 h-40 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                                  children: h.jsx("img", {
                                    src: "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/微信19&w=800",
                                    alt: "WeChat QR Code",
                                    className: "w-full h-full object-cover",
                                    referrerPolicy: "no-referrer",
                                  }),
                                }),
                                h.jsx("span", {
                                  className:
                                    "text-sm font-medium text-green-500",
                                  children: "微信",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        }),
      ],
    });
  },
  Jk = ({ lang: e, tableauProjects: t, webProjects: n }) =>
    h.jsxs("div", {
      className: "pt-24 pb-16 px-6 max-w-7xl mx-auto",
      children: [
        h.jsxs(U.div, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "mb-16",
          children: [
            h.jsx("h1", {
              className:
                "text-4xl md:text-6xl font-black tracking-tighter mb-4",
              children: e === "en" ? "Data Visualization" : "数据可视化",
            }),
            h.jsx("p", {
              className: "text-xl text-gray-500 max-w-2xl",
              children:
                e === "en"
                  ? "Exploring the intersection of data, design, and storytelling through interactive visualizations."
                  : "通过交互式可视化探索数据、设计与叙事的交汇点。",
            }),
          ],
        }),
        h.jsxs("section", {
          className: "mb-20",
          children: [
            h.jsx("h2", {
              className:
                "text-2xl font-bold mb-8 border-b border-gray-200 pb-4",
              children: e === "en" ? "Tableau Portfolio" : "Tableau 作品集",
            }),
            h.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              children: t.map((r) => h.jsx(nl, { project: r, lang: e }, r.id)),
            }),
            h.jsx("div", {
              className: "mt-12",
              children: h.jsxs("a", {
                href: "https://public.tableau.com/app/profile/yuri.wg/vizzes",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group inline-flex flex-col gap-2",
                children: [
                  h.jsx("span", {
                    className:
                      "text-xs font-mono text-neutral-400 uppercase tracking-widest",
                    children: e === "en" ? "More Projects" : "更多作品",
                  }),
                  h.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      h.jsx("span", {
                        className:
                          "text-lg md:text-2xl font-bold text-black dark:text-white border-b-2 border-black dark:border-white group-hover:border-accent group-hover:text-accent transition-all duration-300 pb-1",
                        children:
                          e === "en"
                            ? "View Full Portfolio on Tableau Public"
                            : "访问 Tableau Public 查看完整作品集",
                      }),
                      h.jsx(ng, {
                        size: 24,
                        className:
                          "text-black dark:text-white group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        h.jsxs("section", {
          children: [
            h.jsx("h2", {
              className:
                "text-2xl font-bold mb-8 border-b border-gray-200 pb-4",
              children: e === "en" ? "Inspirations" : "灵感网站",
            }),
            h.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              children: n.map((r) => h.jsx(nl, { project: r, lang: e }, r.id)),
            }),
          ],
        }),
      ],
    }),
  eS = ({ prompt: e, onClose: t, lang: n }) => {
    const [r, i] = hf.useState(!1),
      s = () => {
        e &&
          (navigator.clipboard.writeText(e),
          i(!0),
          setTimeout(() => i(!1), 2e3));
      };
    return h.jsx(Eu, {
      children:
        e &&
        h.jsxs("div", {
          className:
            "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6",
          children: [
            h.jsx(U.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: t,
              className:
                "absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm",
            }),
            h.jsxs(U.div, {
              initial: { opacity: 0, scale: 0.95, y: 20 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.95, y: 20 },
              className:
                "relative w-full max-w-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]",
              children: [
                h.jsxs("div", {
                  className:
                    "flex items-center justify-between p-4 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50",
                  children: [
                    h.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        h.jsx("div", {
                          className: "w-3 h-3 rounded-full bg-red-500",
                        }),
                        h.jsx("div", {
                          className: "w-3 h-3 rounded-full bg-yellow-500",
                        }),
                        h.jsx("div", {
                          className: "w-3 h-3 rounded-full bg-green-500",
                        }),
                        h.jsx("span", {
                          className:
                            "ml-3 text-xs font-mono text-neutral-400 uppercase tracking-wider",
                          children:
                            n === "zh" ? "提示词查看器" : "Prompt Viewer",
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        h.jsxs("button", {
                          onClick: s,
                          className:
                            "p-2 text-neutral-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 text-xs font-mono uppercase",
                          children: [
                            r
                              ? h.jsx(Ik, { size: 14 })
                              : h.jsx(Vk, { size: 14 }),
                            r
                              ? n === "zh"
                                ? "已复制"
                                : "COPIED"
                              : n === "zh"
                                ? "复制"
                                : "COPY",
                          ],
                        }),
                        h.jsx("div", {
                          className:
                            "w-px h-4 bg-neutral-200 dark:bg-neutral-800 mx-1",
                        }),
                        h.jsx("button", {
                          onClick: t,
                          className:
                            "p-2 text-neutral-400 hover:text-red-500 transition-colors",
                          children: h.jsx(ig, { size: 18 }),
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsx("div", {
                  className:
                    "p-6 overflow-y-auto font-mono text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 whitespace-pre-wrap selection:bg-accent selection:text-white",
                  children: e,
                }),
              ],
            }),
          ],
        }),
    });
  },
  tS = [
    {
      id: "t1",
      title: "IronViz 2021: Chinese Calligraphy",
      titleZh: "IronViz 2021: 中国书法",
      url: "https://public.tableau.com/app/profile/yuri.wg/viz/IronViz2021ChineseCalligraphy/ChineseCalligraphy",
      description:
        "A deep dive into the strokes, history, and beauty of Chinese Calligraphy, visualized entirely within Tableau. ",
      descriptionZh:
        "深入探索中国书法的笔触、历史与美学，完全在 Tableau 中实现的视觉化作品。",
      tags: ["Tableau", "IronViz", "Culture"],
      thumbnail:
        "https://public.tableau.com/static/images/Ir/IronViz2021ChineseCalligraphy/ChineseCalligraphy/1.png",
    },
    {
      id: "t2",
      title: "Carbon Neutrality",
      titleZh: "碳中和路径可视化",
      url: "https://public.tableau.com/app/profile/yuri.wg/viz/_16205984439490/CarbonNeutralization",
      description:
        "A comprehensive long-form visualization illustrating the global journey towards carbon neutrality and environmental impact analysis.",
      descriptionZh: "展示全球碳中和进程与环境影响分析的长图可视化作品。",
      tags: ["Environment", "Sustainability", "Long Form"],
      thumbnail:
        "https://public.tableau.com/static/images/_1/_16205984439490/CarbonNeutralization/1.png",
    },
    {
      id: "t3",
      title: "Makeover Monday 2019 W16",
      titleZh: "Makeover Monday 2019 第16周",
      url: "https://public.tableau.com/app/profile/yuri.wg/viz/infowetrustmakeovermonday2019week16/1",
      description:
        "A contribution to the global Makeover Monday community project, reimagining data storytelling standards.",
      descriptionZh:
        "Makeover Monday 全球社区项目投稿作品，重构数据叙事设计标准。",
      tags: ["Community", "Redesign", "MakeoverMonday"],
      thumbnail:
        "https://public.tableau.com/static/images/in/infowetrustmakeovermonday2019week16/1/1.png",
    },
    {
      id: "t4",
      title: "Consumer Spending by Generation",
      titleZh: "各代际消费者支出分析",
      url: "https://public.tableau.com/app/profile/yuri.wg/viz/ConsumerSpendingbyGeneration_15603291075470/13",
      description:
        "Analyzing spending habits across different generations to identify key economic trends and behavioral shifts.",
      descriptionZh:
        "分析不同代际人群的消费习惯，识别关键的经济趋势与行为转变。",
      tags: ["Economy", "Analysis", "Demographics"],
      thumbnail:
        "https://public.tableau.com/static/images/Co/ConsumerSpendingbyGeneration_15603291075470/13/1.png",
    },
    {
      id: "t5",
      title: "The Exchange Rate Challenge",
      titleZh: "第六届 Viz Challenge: 汇率",
      url: "https://public.tableau.com/app/profile/yuri.wg/viz/The6thVizChallengeTheExchangeRate/sheet0",
      description:
        "Historical tracking of exchange rate fluctuations presented in an intricate vertical dashboard layout.",
      descriptionZh:
        "追踪历史汇率波动的长图数据可视化作品，通过复杂的时间序列展示经济变化。",
      tags: ["Finance", "Economy", "Challenge"],
      thumbnail:
        "https://public.tableau.com/static/images/Th/The6thVizChallengeTheExchangeRate/sheet0/1.png",
    },
    {
      id: "t6",
      title: "Rhino Poaching in South Africa",
      titleZh: "南非犀牛偷猎趋势",
      url: "https://public.tableau.com/app/profile/yuri.wg/viz/RhinoPoachinginSouthAfrica2006-2016_15609410746400/Page1",
      description:
        "Visualizing the tragic rise of rhino poaching in South Africa (2006-2016) through data storytelling.",
      descriptionZh:
        "通过数据叙事可视化 2006-2016 年间南非犀牛偷猎事件的悲剧性增长趋势。",
      tags: ["Wildlife", "Conservation", "Tableau"],
      thumbnail:
        "https://public.tableau.com/static/images/Rh/RhinoPoachinginSouthAfrica2006-2016_15609410746400/Page1/1.png",
    },
  ],
  nS = [
    {
      id: "p_voyageur",
      title: "Voyageur",
      titleZh: "Voyageur 数字手帐",
      url: "https://voyageur-31i.pages.dev/",
      description:
        "A digital scrapbook platform to upload GPX tracks, document journeys, and create beautiful poster-style collages with built-in stickers. Supports high-res image and PDF exports.",
      descriptionZh:
        "一个数字手帐网站，支持上传 GPX 轨迹、记录行程与故事。内置大量贴纸素材，可进行趣味拼贴并生成精美海报，支持导出高清图片及 PDF。",
      tags: ["Scrapbook", "Travel", "Collage"],
      thumbnail:
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/voyageur预览图.png&w=800",
    },
    {
      id: "p_lumina",
      title: "Lumina Read",
      titleZh: "Lumina 阅读",
      url: "https://lumina-read.pages.dev/",
      description:
        "A minimalist and immersive reading environment designed to enhance focus and reading experience.",
      descriptionZh: "一个极简且沉浸式的阅读环境，旨在提升专注力与阅读体验。",
      tags: ["Reading", "Minimalist", "Tool"],
      thumbnail:
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/luminaread&w=800",
      prompt:
        "Create a minimalist reading environment. Focus on typography, whitespace, and a distraction-free layout.",
    },
    {
      id: "p_calengen",
      title: "Calengen",
      titleZh: "Calengen 日历生成器",
      url: "https://calengen.pages.dev/",
      description:
        "A creative tool for generating customized and beautifully designed calendars.",
      descriptionZh: "一个用于生成定制化、设计精美的日历的创意工具。",
      tags: ["Calendar", "Tool", "Generator"],
      thumbnail:
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/CalenGen&w=800",
      prompt:
        "Build a calendar generation tool with customizable themes, layouts, and export options.",
    },
    {
      id: "p1",
      title: "Kalsarik Nnit",
      titleZh: "Kalsarik Nnit",
      url: "https://kalsarik-nnit.pages.dev",
      description:
        'An immersive digital sanctuary designed for solitary reflection, facilitating deep dialogue with oneself, favorite authors, and the "consciousness" of books.',
      descriptionZh:
        "一个实现独处时与自己、与喜欢的作者、与书籍的“意识”进行沉浸式深度交流的网站。",
      tags: ["Reading", "Consciousness", "Immersion"],
      thumbnail:
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/k.png&w=800",
      prompt:
        "Create a digital sanctuary for solitary reading. The vibe should be 'nordic introspection'. Use deep blacks and greys. Include a library feature where clicking a book opens a chat interface with the book's 'consciousness' (AI). The layout should be responsive and typography-focused.",
      articleUrl: "https://mp.weixin.qq.com/s/ZE92PymTM8MtC8Aibs_slA",
    },
    {
      id: "p2",
      title: "Chaos Harmonics",
      titleZh: "混沌谐波",
      url: "https://chaos-harmonics.pages.dev/",
      description:
        "An interactive particle physics simulation where mathematical harmonics drive the movement of thousands of particles to create organic, flowing structures.",
      descriptionZh:
        "一个交互式粒子物理模拟，利用数学谐波驱动成千上万个粒子的运动，创造出有机流动的视觉结构。",
      tags: ["Vibecoding", "Particles", "Math"],
      thumbnail:
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/hc.png&w=800",
      prompt:
        "Generate a particle system using Canvas API. The particles should move based on harmonic sine waves. Add a control panel to tweak frequency and amplitude. The visual style should look like stardust or bioluminescence in deep space. Ensure performance with 5000+ particles.",
    },
    {
      id: "p_canvas_recorder",
      title: "Canvas Recorder",
      titleZh: "Canvas Recorder 白板录屏",
      url: "https://canvas-recorder.pages.dev/",
      description:
        "A browser-based hand-drawn style whiteboard recording tool, combining Excalidraw's whiteboard experience with OBS's recording/broadcasting features. Supports infinite canvas, PiP camera, local Chinese fonts, and video export with complete audio tracks, designed for lightweight teaching and presentations.",
      descriptionZh:
        "一款基于浏览器的手绘风格白板录屏工具，结合了 Excalidraw 的手绘白板体验与 OBS 的录屏/导播功能，支持无限画布、摄像头画中画、本地中文字体以及带完善音轨的视频导出，专为轻量级教学与演示打造。",
      tags: ["Tool", "Canvas", "Recording"],
      prompt:
        "Create a browser-based whiteboard recording tool. Integrate Excalidraw for the whiteboard. Add OBS-like features: screen recording, camera picture-in-picture. Support infinite canvas, local Chinese fonts, and export video with audio. Focus on lightweight teaching/presentation use cases.",
      thumbnail:
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/canvasrecorder.png&w=800",
    },
    {
      id: "p3",
      title: "Christmas Magic",
      titleZh: "圣诞魔法粒子",
      url: "https://christmas-magic-particles.pages.dev/",
      description:
        "A playful seasonal experience where your cursor conjures magical, glittering particle trails, turning interaction into a festive visual display.",
      descriptionZh:
        "一个充满趣味的节日互动体验，鼠标光标化作魔法棒，召唤出闪烁的粒子轨迹，营造出浓厚的节日氛围。",
      tags: ["AI Agent", "Interaction", "Fluid"],
      thumbnail:
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/christmas.png&w=800",
      prompt:
        "Code a festive interaction. When I move my mouse, it should trail magic dust (particles) that have gravity and fade out. Add a mode to 'draw' with these particles. The theme is 'Cyberpunk Christmas' - neon reds and greens. Add a slight glow effect.",
    },
    {
      id: "p_aetheris",
      title: "Aetheris",
      titleZh: "以太之境",
      url: "https://aetheris-9r7.pages.dev/",
      description:
        "A mesmerizing interactive fluid simulation where light and color behave like digital smoke. It explores the chaotic beauty of fluid dynamics in a browser environment.",
      descriptionZh:
        "一个迷人的交互式流体模拟，光与色如同数字烟雾般流动。它在浏览器环境中探索了流体动力学的混沌之美。",
      tags: ["WebGL", "Fluid", "Interactive"],
      thumbnail:
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/%E4%BB%A5%E5%A4%AA&w=800",
      prompt:
        "Create a high-performance WebGL fluid simulation. The aesthetic should be dark and neon, resembling bioluminescent smoke. Implement mouse interaction to stir the fluid. The simulation must be smooth and responsive.",
    },
    {
      id: "p4",
      title: "Yuri.WG Portfolio",
      titleZh: "Yuri.WG 个人网站",
      url: "https://yuri-wg-portfolio.pages.dev/",
      description:
        "This very website. A minimalist, grid-based portfolio system built to showcase data visualization and creative coding experiments.",
      descriptionZh:
        "即你现在所看到的网站。一个极简主义的、基于网格的作品集系统，专为展示数据可视化与创意编程实验而构建。",
      tags: ["React", "Tailwind", "System"],
      prompt:
        "Create a portfolio website that references the style of zara.faces.site/ai. Minimalist, monochrome with electric blue accent. High contrast, visible grid lines, large typography. The layout should be strict and informative.",
    },
    {
      id: "p5",
      title: "WYL Portfolio",
      titleZh: "WYL 作品集",
      url: "https://wyl-portfolio.pages.dev/",
      description:
        "A playful, sticker-style personal portfolio that combines retro aesthetics with modern interactivity, creating a unique digital scrapbook experience.",
      descriptionZh:
        "一个充满趣味的贴纸风格个人网站，将复古美学与现代交互相结合，打造出独特的数字剪贴簿体验。",
      tags: ["Sticker Art", "Creative", "Retro"],
      thumbnail:
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/wyl%20protofile.png&w=800",
      prompt:
        "Design a personal portfolio that looks like a collection of stickers on a laptop lid. Each project is a die-cut sticker. Add physics or 3D tilt effect on hover. The background should be a subtle grid. Font: Space Grotesk. Make it feel playful but professional.",
      articleUrl: "https://mp.weixin.qq.com/s/HK1Vg8n7jp_uKso6cCfCGQ",
    },
    {
      id: "p6",
      title: "Running Tracker",
      titleZh: "跑步数据追踪",
      url: "https://yuriwg.github.io/running-tracker-react/",
      description:
        "A personal fitness dashboard that visualizes running metrics and consistency over time, turning raw Strava data into actionable insights.",
      descriptionZh:
        "一个个人跑步数据仪表盘，可视化跑步指标与长期运动习惯，将 Strava 原始数据转化为直观的运动洞察。",
      tags: ["React", "Data Viz", "Fitness"],
      prompt:
        "Build a React component to visualize running data. I need a heatmap calendar like GitHub contributions, but for kilometers run. Also add a line chart for pace analysis and a summary card for total distance. Color palette: Midnight Blue and Neon Yellow.",
    },
    {
      id: "p7",
      title: "Minimalism Challenge",
      titleZh: "极简生活挑战",
      url: "https://yuriwg.github.io/minimalism-challenge/",
      description:
        "An interactive checklist and guide for a 30-day minimalism challenge, designed to help users declutter their physical and mental space.",
      descriptionZh:
        "30天极简生活挑战的交互式清单与指南，旨在帮助用户通过每日任务清理物理与心理空间。",
      tags: ["Lifestyle", "Tool", "Minimalism"],
      prompt:
        "Create a 30-day challenge app. Each day reveals a card with a minimalism task. The design must be brutally minimalist - black and white only, lots of whitespace, Helvetica font. Store progress in localStorage so users can return.",
      articleUrl:
        "https://www.xiaohongshu.com/discovery/item/67da4c98000000000d015868?source=webshare&xhsshare=pc_web&xsec_token=ABrfEn-jf375Ebt2UKkJ1fer7imJOZRP_yZk4VrtTFcH8=&xsec_source=pc_share",
    },
    {
      id: "p8",
      title: "Mood Garden",
      titleZh: "情绪花园",
      url: "https://yuriwg.github.io/mood-garden-viz/",
      description:
        "A generative visualization where daily moods bloom into flowers, creating a unique digital garden that reflects emotional wellbeing over time.",
      descriptionZh:
        "一个将每日情绪生成为花朵的可视化实验，随着时间推移构建出反映情感状态的独特数字花园。",
      tags: ["Generative Art", "Emotion", "D3.js"],
      prompt:
        "Create a generative art piece where data points (moods) determine the shape and color of flowers. Happy = blooming/bright, Sad = drooping/blue. Use D3.js or Canvas. The flowers should be arranged in a grid representing days of the month.",
      articleUrl: "https://mp.weixin.qq.com/s/fLbaCahMKiNAOFy2xLv1Eg",
    },
  ],
  rS = [
    {
      id: "b1",
      title: "From Flash to Insight: Building a Thinking Engine Like Luhmann",
      titleZh: "从闪念到洞见：像卢曼一样建立思考引擎",
      url: "https://mp.weixin.qq.com/s/uB5WCamds2H9GJ5mtETWwQ",
      date: "PKM",
      dateZh: "知识管理",
      description:
        'Sharing how to build a pipeline to make notes truly "move", turning them from a "graveyard" into a self-growing "garden of thought".',
      descriptionZh:
        "分享关于如何建立一条流水线，让笔记真正地“动”起来，从“坟场”变为一座能够自我生长的“思想花园”。",
    },
    {
      id: "b2",
      title: 'Escaping "Fake Effort": Building Your Personal Action Engine',
      titleZh: "摆脱“假性努力”：构建你的个人行动引擎",
      url: "https://mp.weixin.qq.com/s/DEPlZHA7IC3JYPTajnS57g",
      date: "Action",
      dateZh: "行动系统",
      description:
        'How to decode vague "wishes" layer by layer until they become immediately executable physical actions.',
      descriptionZh:
        "讲的是如何将模糊的“愿望”层层解码，直至其成为可以立即执行的物理动作。",
    },
    {
      id: "b3",
      title: "Checklist Thinking: Injecting Whimsy & Humanity into Knowledge",
      titleZh: "清单式思考：给你的知识库注入奇思妙想&人间烟火",
      url: "https://mp.weixin.qq.com/s/FXGtUZ9wFvQYk5DHKpNntg",
      date: "Lifestyle",
      dateZh: "生活方式",
      description:
        "Exploring how to use tools not to be trapped by methods, but to re-inject warmth and meaning into life.",
      descriptionZh:
        "这篇文章并非要介绍另一款效率工具，而是希望探讨一种不同的实践：我们该如何使用工具，才能不被方法所困，反而能借助它们，重新为生活注入温度与意义。",
    },
    {
      id: "b4",
      title: "Don't Be a Digital Icarus: Agency in AI Collaboration",
      titleZh: "别做数字时代的伊卡洛斯：在 AI 协作中保持主体性",
      url: "https://mp.weixin.qq.com/s/HLbE-83OWn222xiuub1yEw",
      date: "AI Philosophy",
      dateZh: "AI 思考",
      description:
        "How to harness the wings of AI while maintaining the boundaries to fly higher without getting burned.",
      descriptionZh:
        "探讨的是作为“飞行者”的我们，该如何学会驾驭AI这双翅膀，既能享受飞行的自由，又能守住那条不被太阳融化的边界，从而飞得更高、也更远？",
    },
    {
      id: "b5",
      title: "Deep Research + Obsidian + MCP = Revitalizing Your Second Brain",
      titleZh: "Deep Research + Obsidian + MCP = 盘活你的“第二大脑”",
      url: "https://mp.weixin.qq.com/s/vahLPMxiDMGx_MHAPU2xLA",
      date: "AI Workflow",
      dateZh: "AI 工作流",
      description:
        "A workflow combining Gemini, Obsidian, and MCP to efficiently research and build a dynamic knowledge network.",
      descriptionZh:
        "揭示一套结合 Gemini、Obsidian和MCP 协议的工作流，不仅能高效研究、构建知识网络，更能让你在一个统一的操作界面中，沉浸式地完成这一切。",
    },
    {
      id: "b6",
      title:
        'Escaping Information Anxiety and Action Maze: You Need a "Second Brain"',
      titleZh: "摆脱信息焦虑与行动迷航：你需要一个“第二大脑”",
      url: "https://mp.weixin.qq.com/s/CKJ7gGhjyTCh1_yYgzp1UQ",
      date: "PKM",
      dateZh: "知识管理",
      description:
        "A guide to building a second brain to overcome information overload and take actionable steps.",
      descriptionZh:
        "探讨如何通过构建“第二大脑”来应对信息过载，并将其转化为实际的行动力。",
    },
    {
      id: "b7",
      title: "This Diary Truly Changed My Daily Life",
      titleZh: "📔这个日记真的改变了我每天的生活状态",
      url: "http://xhslink.com/o/3yVPXMXFjGO",
      date: "Lifestyle",
      dateZh: "生活方式",
      description:
        "Sharing a daily journaling method that significantly improved my daily routine and mindset.",
      descriptionZh:
        "分享一种极大地改善了我的日常生活状态和心态的日记记录方法。",
    },
    {
      id: "b8",
      title: "I Only Do These Three Things for Weekly Reviews",
      titleZh: "📝每周复盘我只做这三件事",
      url: "http://xhslink.com/o/59z2zdEEbwP",
      date: "Review",
      dateZh: "复盘方法",
      description:
        "A minimalist approach to weekly reviews focusing on three core actions.",
      descriptionZh: "一种极简的每周复盘方法，只专注于三件最核心的事情。",
    },
    {
      id: "b9",
      title: 'The More Chaotic Life Gets, the More You Need a "Monthly Review"',
      titleZh: "📝生活越无序，越要「月复盘」",
      url: "http://xhslink.com/o/5EfKdrHnUaM",
      date: "Review",
      dateZh: "复盘方法",
      description:
        "Why monthly reviews are essential for regaining control when life feels chaotic.",
      descriptionZh:
        "探讨为什么在生活感到混乱无序时，每月的定期复盘是重新找回掌控感的关键。",
    },
    {
      id: "b10",
      title: "My New Year's Resolution Finally Survived February",
      titleZh: "✌🏻我的新年计划，终于熬过了二月",
      url: "http://xhslink.com/o/AEA0SynzWA2",
      date: "Planning",
      dateZh: "计划与执行",
      description:
        "Reflections on keeping New Year's resolutions alive past the difficult second month.",
      descriptionZh:
        "关于如何让新年计划度过最艰难的二月并持续执行下去的经验分享。",
    },
  ],
  iS = [
    {
      id: "w1",
      title: "Visual Cinnamon",
      titleZh: "Visual Cinnamon",
      url: "https://www.visualcinnamon.com/about/",
      description:
        "Blending data visualization with generative art to tell unique stories.",
      descriptionZh: "将数据可视化与生成艺术相融合，讲述独特的故事。",
      tags: ["Inspiration", "Data Art"],
    },
    {
      id: "w2",
      title: "The Pudding",
      titleZh: "The Pudding",
      url: "https://pudding.cool/",
      description:
        "Visual essays that explain complex cultural debates with data.",
      descriptionZh: "用数据解释复杂文化议题的视觉散文。",
      tags: ["Inspiration", "Data Journalism"],
    },
    {
      id: "w3",
      title: "Information is Beautiful",
      titleZh: "Information is Beautiful",
      url: "https://informationisbeautiful.net/",
      description:
        "Distilling the world's data into beautiful, digestible diagrams.",
      descriptionZh: "将世界的数据提炼成优美易懂的图表。",
      tags: ["Inspiration", "Infographics"],
    },
    {
      id: "w4",
      title: "Viz for Social Good",
      titleZh: "Viz for Social Good",
      url: "https://www.vizforsocialgood.com/",
      description:
        "A community using data visualization to help non-profit organizations.",
      descriptionZh: "利用数据可视化帮助非营利组织的全球社区。",
      tags: ["Community", "Social Good"],
    },
    {
      id: "w5",
      title: "Info We Trust",
      titleZh: "Info We Trust",
      url: "https://infowetrust.com/",
      description: "Exploring the history and craft of data storytelling.",
      descriptionZh: "探索数据叙事的历史与技艺。",
      tags: ["Inspiration", "History"],
    },
    {
      id: "w6",
      title: "Dear Data",
      titleZh: "Dear Data",
      url: "https://www.dear-data.com/by-week/",
      description:
        "A year-long analog data drawing project about personal lives.",
      descriptionZh: "关于个人生活的为期一年的手绘数据明信片项目。",
      tags: ["Inspiration", "Analog"],
    },
    {
      id: "w7",
      title: "Giorgia Lupi",
      titleZh: "Giorgia Lupi",
      url: "https://giorgialupi.com/",
      description:
        "Advocating for Data Humanism and the imperfect side of data.",
      descriptionZh: "倡导数据人文主义，关注数据中不完美且充满人性的一面。",
      tags: ["Inspiration", "Humanism"],
    },
    {
      id: "w8",
      title: "Gapingvoid",
      titleZh: "Gapingvoid",
      url: "https://gapingvoid.com/",
      description:
        "Insightful cartoons about business, marketing, and meaning.",
      descriptionZh: "关于商业、营销与意义的深刻漫画。",
      tags: ["Inspiration", "Art"],
    },
    {
      id: "w9",
      title: "Our World in Data",
      titleZh: "Our World in Data",
      url: "https://ourworldindata.org/",
      description:
        "Research and data to make progress against the world’s largest problems.",
      descriptionZh: "通过研究与数据推动解决全球重大问题。",
      tags: ["Inspiration", "Research"],
    },
  ],
  sS = [
    {
      id: "r1",
      title: "Andrej Karpathy",
      titleZh: "Andrej Karpathy",
      url: "https://karpathy.ai/",
      description:
        "Deep learning insights from one of the leading minds in AI.",
      descriptionZh: "来自 AI 领域领军人物的深度学习见解。",
      category: "KOL",
      tags: ["AI", "Deep Learning"],
    },
    {
      id: "r2",
      title: "Hugging Face",
      titleZh: "Hugging Face",
      url: "https://huggingface.co/",
      description:
        "The community and platform for open-source machine learning.",
      descriptionZh: "开源机器学习的社区与平台。",
      category: "Products & Tools",
      tags: ["Open Source", "Models"],
    },
    {
      id: "r4",
      title: "Lex Fridman Podcast",
      titleZh: "Lex Fridman 播客",
      url: "https://lexfridman.com/podcast/",
      description:
        "Conversations about the nature of intelligence, consciousness, love, and power.",
      descriptionZh: "关于智能、意识、爱与权力的本质对话。",
      category: "Podcast",
      tags: ["Interview", "Science"],
    },
    {
      id: "r5",
      title: "Greg Isenberg",
      titleZh: "Greg Isenberg",
      url: "https://www.gregisenberg.com/",
      description: "Insights on community building, design, and startups.",
      descriptionZh: "关于社区建设、设计与创业的见解。",
      category: "KOL",
      tags: ["Community", "Startups"],
    },
    {
      id: "r6",
      title: "swyx",
      titleZh: "swyx",
      url: "https://www.swyx.io/",
      description:
        "Writing about developer experience, AI engineering, and learning in public.",
      descriptionZh: "关于开发者体验、AI 工程与公开学习的写作。",
      category: "KOL",
      tags: ["AI Engineering", "DevEx"],
    },
    {
      id: "r7",
      title: "Lenny Rachitsky",
      titleZh: "Lenny Rachitsky",
      url: "https://x.com/lennysan",
      description: "Product management, growth, and career advice.",
      descriptionZh: "产品管理、增长与职业建议。",
      category: "KOL",
      tags: ["Product", "Growth"],
    },
    {
      id: "r8",
      title: "Steven Johnson",
      titleZh: "Steven Johnson",
      url: "https://x.com/stevenbjohnson",
      description:
        "Author writing about the intersection of science, technology, and personal experience.",
      descriptionZh: "探索科学、技术与个人体验交汇点的作家。",
      category: "KOL",
      tags: ["Science", "Technology"],
    },
    {
      id: "r9",
      title: "Google Labs",
      titleZh: "Google Labs",
      url: "https://x.com/GoogleLabs",
      description: "The latest experiments and prototypes from Google.",
      descriptionZh: "Google 最新的实验与原型项目。",
      category: "Products & Tools",
      tags: ["Innovation", "Experiments"],
    },
    {
      id: "r10",
      title: "Zara Zhang",
      titleZh: "Zara Zhang",
      url: "https://x.com/zarazhangrui",
      description: "Insights on tech, AI, and cross-border innovation.",
      descriptionZh: "关于科技、AI 与跨境创新的见解。",
      category: "KOL",
      tags: ["Tech", "AI"],
    },
    {
      id: "r11",
      title: "google/langextract",
      titleZh: "google/langextract",
      url: "https://github.com/google/langextract",
      description:
        "An open-source utility for extracting language and text processing by Google.",
      descriptionZh: "Google 开源的语言提取与文本处理工具。",
      category: "Open Source",
      tags: ["NLP", "Tool"],
    },
    {
      id: "r12",
      title: "zarazhangrui/frontend-slides",
      titleZh: "zarazhangrui/frontend-slides",
      url: "https://github.com/zarazhangrui/frontend-slides",
      description:
        "A collection of frontend development slides and learning materials.",
      descriptionZh: "前端开发幻灯片与学习资料合集。",
      category: "Open Source",
      tags: ["Frontend", "Learning"],
    },
    {
      id: "r13",
      title: "huggingface/agents-course",
      titleZh: "huggingface/agents-course",
      url: "https://github.com/huggingface/agents-course",
      description:
        "An open-source course on building AI agents by Hugging Face.",
      descriptionZh: "Hugging Face 出品的构建 AI Agent 开源课程。",
      category: "Learning",
      tags: ["AI Agents", "Course"],
    },
    {
      id: "r14",
      title: "Silicon Valley 101",
      titleZh: "硅谷101",
      url: "https://www.xiaoyuzhoufm.com/podcast/5e5c52c9418a84a04625e6cc",
      description:
        "A tech podcast sharing the freshest technology, knowledge, and ideas, featuring in-depth interviews initiated by media professional Hong Jun.",
      descriptionZh:
        "一档分享当下最新鲜的技术、知识与思想的科技播客，由媒体人泓君发起的深度访谈节目。",
      category: "Podcast",
      tags: ["Tech", "Interview"],
    },
    {
      id: "r15",
      title: "Latent Space",
      titleZh: "Latent Space",
      url: "https://www.latent.space/",
      description:
        "The AI Engineer podcast by swyx and Alessio, featuring deep dives into the AI engineering ecosystem.",
      descriptionZh:
        "由 swyx 和 Alessio 主持的 AI 工程师播客，深度探索 AI 工程生态系统。",
      category: "Podcast",
      tags: ["AI Engineering", "Interview"],
    },
    {
      id: "r16",
      title: "No Priors",
      titleZh: "No Priors",
      url: "https://www.youtube.com/@NoPriorsPodcast",
      description:
        "Conversations with the world's leading AI researchers and founders by Sarah Guo and Elad Gil.",
      descriptionZh:
        "Sarah Guo 和 Elad Gil 与全球顶尖 AI 研究人员及创始人的对话。",
      category: "Podcast",
      tags: ["AI", "Startups"],
    },
    {
      id: "r18",
      title: "Skill Development Skill (Claude Code)",
      titleZh: "Skill Development Skill (Claude Code)",
      url: "https://skillsmp.com/skills/anthropics-claude-code-plugins-plugin-dev-skills-skill-development-skill-md",
      description:
        "A meta-skill for developing new skills and plugins for Claude Code.",
      descriptionZh: "一个用于为 Claude Code 开发新技能和插件的元技能。",
      category: "Open Source",
      tags: ["AI", "Claude", "Plugin Development"],
    },
    {
      id: "r19",
      title: "Skills Marketplace",
      titleZh: "Skills Marketplace",
      url: "https://skillsmp.com/",
      description:
        "A marketplace and directory for discovering and sharing Claude Code skills.",
      descriptionZh: "一个用于发现和分享 Claude Code 技能的市场与目录。",
      category: "Products & Tools",
      tags: ["AI", "Claude", "Marketplace"],
    },
    {
      id: "r20",
      title: "Smithery",
      titleZh: "Smithery",
      url: "https://smithery.ai/",
      description:
        "A platform to discover and manage MCP servers for Claude Desktop.",
      descriptionZh: "一个用于发现和管理 Claude Desktop MCP 服务器的平台。",
      category: "Products & Tools",
      tags: ["AI", "MCP", "Claude"],
    },
    {
      id: "r21",
      title: "Awesome LLM Apps",
      titleZh: "Awesome LLM Apps",
      url: "https://www.zdoc.app/zh/Shubhamsaboo/awesome-llm-apps",
      description:
        "A collection of awesome LLM apps and resources for developers.",
      descriptionZh: "开发者构建 LLM 应用的精选资源与案例合集。",
      category: "Open Source",
      tags: ["LLM", "Development", "Resources"],
    },
    {
      id: "r22",
      title: "Excalidraw Diagram Generator",
      titleZh: "Excalidraw Diagram Generator",
      url: "https://smithery.ai/skills/github/excalidraw-diagram-generator",
      description:
        "A Claude skill to generate Excalidraw diagrams from text descriptions.",
      descriptionZh: "一个用于根据文本描述生成 Excalidraw 图表的 Claude 技能。",
      category: "Open Source",
      tags: ["AI", "Claude", "Diagrams"],
    },
    {
      id: "r23",
      title: "Frontend Design",
      titleZh: "Frontend Design",
      url: "https://smithery.ai/skills/anthropics/frontend-design",
      description:
        "A Claude skill to assist with frontend design and implementation.",
      descriptionZh: "一个用于辅助前端设计与实现的 Claude 技能。",
      category: "Open Source",
      tags: ["AI", "Claude", "Frontend"],
    },
  ],
  oS = [
    {
      id: "tm1",
      title: "Second Brain Template",
      titleZh: "第二大脑模版",
      url: "https://pan.baidu.com/s/1KWgsZZr-NKkyaKA9iM7-6A?pwd=yshz",
      description:
        "A comprehensive Obsidian bullet journal structure for personal knowledge management.",
      descriptionZh: "一个用于个人知识管理的全面 Obsidian 子弹笔记系统。",
      platform: "Obsidian",
      price: "Paid  ¥19.90",
      isPaid: !0,
      thumbnails: [
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/bujo2026.JPG&w=800",
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/future.PNG&w=800",
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/monthly.PNG&w=800",
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/weekly.JPG&w=800",
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/daily.PNG&w=800",
      ],
    },
    {
      id: "tm3",
      title: "Literature & Art Calendar",
      titleZh: "文学作家与艺术日历",
      url: "https://pan.baidu.com/s/1Z87JMf6Jc0yB9n9b02WNQQ?pwd=yuri",
      description:
        "Includes 2 sets of exquisite calendars: Literary Writers Calendar, Art Calendar (from andrejs_ko_art).",
      descriptionZh:
        "内含2套精美日历：文学作家日历、艺术日历 (from andrejs_ko_art)。",
      platform: "Other",
      price: "Free",
      thumbnails: [
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/艺术日历.jpg&w=800",
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/文学日历.jpg&w=800",
      ],
    },
    {
      id: "tm4",
      title: "Obsidian Bullet Journal (B&W)",
      titleZh: "Obsidian 子弹笔记模版 (黑白版)",
      url: "https://pan.baidu.com/s/1sb_U7BDQobsiqU4YR0myrQ?pwd=ftd9",
      description:
        "Minimalist B&W bullet journal template including daily, weekly, monthly, and yearly logs.",
      descriptionZh: "极简黑白子弹笔记模版，包含日、周、月、年计划。",
      platform: "Obsidian",
      price: "Free",
      isPaid: !1,
      thumbnails: [
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/light vs dark黑白效果对比.png&w=800",
      ],
    },
    {
      id: "tm5",
      title: "Obsidian Habit Tracker",
      titleZh: "Obsidian 习惯打卡追踪",
      url: "https://pan.baidu.com/s/1WQwUP3C2XoGNNZ9F4DikUQ?pwd=f4aq",
      description:
        "Visual habit tracking system for Obsidian with multiple color themes.",
      descriptionZh: "Obsidian 视觉化习惯追踪系统，包含多种配色主题。",
      platform: "Obsidian",
      price: "Free",
      isPaid: !1,
      thumbnails: [
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/视图green_lignt_v1.0.png&w=800",
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/视图green_dark_v1.0.png&w=800",
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/视图blue_light_v1.0.png&w=800",
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/视图blue_dark_v1.0.png&w=800",
      ],
    },
    {
      id: "tm6",
      title: "Obsidian Running Tracker",
      titleZh: "Obsidian 跑步跟踪可视化",
      url: "https://pan.baidu.com/s/1gFfvMYtqPeLYuw4TX3boBw?pwd=vvcc",
      description:
        "Interactive running data visualization dashboard within Obsidian.",
      descriptionZh: "Obsidian 内置的交互式跑步数据可视化仪表盘。",
      platform: "Obsidian",
      price: "Free",
      isPaid: !1,
      thumbnails: [
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/跑步追踪_2025-09-12.png&w=800",
      ],
    },
    {
      id: "tm7",
      title: "Minimalism Challenge Calendar",
      titleZh: "断舍离挑战日历",
      url: "https://pan.baidu.com/s/14US42qm3oKa9aKVMLe7gqA?pwd=799a",
      description:
        "A 30-day minimalism challenge calendar to help you declutter your life.",
      descriptionZh: "30天断舍离挑战日历，帮助你简化生活。",
      platform: "Other",
      price: "Free",
      isPaid: !1,
      thumbnails: [
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/30天断舍离挑战&w=800",
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/断舍离挑战规则&w=800",
      ],
    },
    {
      id: "tm8",
      title: "Mood Garden",
      titleZh: "心情花园",
      url: "https://pan.baidu.com/s/1zwBpXLCEPcbn5vq1gpTylQ?pwd=886f",
      description:
        "A beautiful visual mood tracking system for your digital garden.",
      descriptionZh: "为你的数字花园设计的精美视觉化心情追踪系统。",
      platform: "Other",
      price: "Free",
      isPaid: !1,
      thumbnails: [
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/心情花园4&w=800",
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/心情花园2&w=800",
        "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/心情花园3&w=800",
      ],
    },
  ],
  aS = {
    en: {
      footer: {
        connectTitle: "Connect",
        connectDesc:
          "Interested in collaboration, AI workflows, or data visualization? Reach out through social channels.",
        scanFollow: "Scan to follow",
        rights: "Yuri.WG. All rights reserved.",
        inspired: "Inspired by minimalist aesthetics.",
      },
    },
    zh: {
      footer: {
        connectTitle: "保持联系",
        connectDesc:
          "对 AI 工作流、数据可视化合作感兴趣？欢迎通过以下方式联系我。",
        scanFollow: "扫码关注",
        rights: "Yuri.WG. 保留所有权利。",
        inspired: "灵感源于极简主义美学。",
      },
    },
  },
  lS = () => {
    const [e, t] = P.useState("home"),
      [n, r] = P.useState(null),
      [i, s] = P.useState("en"),
      [o, a] = P.useState(() => {
        if (typeof window < "u") {
          const f = localStorage.getItem("theme");
          return f === "dark"
            ? "dark"
            : f === "light"
              ? "light"
              : window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
        }
        return "light";
      }),
      l = aS[i];
    P.useEffect(() => {
      o === "dark"
        ? (document.documentElement.classList.add("dark"),
          localStorage.setItem("theme", "dark"))
        : (document.documentElement.classList.remove("dark"),
          localStorage.setItem("theme", "light"));
    }, [o]);
    const u = () => {
        s((f) => (f === "en" ? "zh" : "en"));
      },
      c = () => {
        a((f) => (f === "light" ? "dark" : "light"));
      };
    return h.jsxs("div", {
      className:
        "min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans selection:bg-accent selection:text-white transition-colors duration-0 flex flex-col",
      children: [
        n && h.jsx(eS, { prompt: n, onClose: () => r(null), lang: i }),
        h.jsx(Ak, { activeTab: e, setActiveTab: (f) => t(f), lang: i }),
        h.jsxs("div", {
          className: "fixed top-4 right-6 z-[60] flex items-center gap-3",
          children: [
            h.jsx("button", {
              onClick: c,
              className:
                "text-xs font-mono border border-gray-200 dark:border-gray-800 px-2 py-1 hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black transition-colors uppercase bg-white/50 dark:bg-black/50 backdrop-blur-sm",
              children: o === "light" ? "LIGHT" : "DARK",
            }),
            h.jsx("button", {
              onClick: u,
              className:
                "text-xs font-mono border border-gray-200 dark:border-gray-800 px-2 py-1 hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black transition-colors uppercase bg-white/50 dark:bg-black/50 backdrop-blur-sm",
              children: i === "en" ? "EN" : "中",
            }),
          ],
        }),
        h.jsxs("main", {
          className: "flex-grow min-h-screen",
          children: [
            e === "home" && h.jsx(Yk, { lang: i, onNavigate: (f) => t(f) }),
            e === "ai-library" &&
              h.jsx(Xk, {
                lang: i,
                vibecodingProjects: nS,
                resources: sS,
                onViewPrompt: r,
              }),
            e === "knowledge-base" &&
              h.jsx(qk, { lang: i, blogPosts: rS, templates: oS }),
            e === "data-viz" &&
              h.jsx(Jk, { lang: i, tableauProjects: tS, webProjects: iS }),
          ],
        }),
        h.jsxs("footer", {
          className:
            "relative border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black overflow-hidden",
          children: [
            h.jsx("div", {
              className:
                "absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none",
              children: h.jsx("div", {
                className:
                  "absolute inset-0 bg-[linear-gradient(to_right,#0033FF_1px,transparent_1px),linear-gradient(to_bottom,#0033FF_1px,transparent_1px)] bg-[size:60px_60px]",
              }),
            }),
            h.jsx("div", {
              className: "max-w-7xl mx-auto px-6 py-20 relative z-10",
              children: h.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8",
                children: [
                  h.jsx("div", {
                    className: "lg:col-span-5 flex flex-col justify-between",
                    children: h.jsxs("div", {
                      children: [
                        h.jsxs("h3", {
                          className:
                            "text-6xl md:text-8xl font-black tracking-tighter mb-8 text-black dark:text-white",
                          children: [
                            "CONNECT",
                            h.jsx("span", {
                              className: "text-accent",
                              children: ".",
                            }),
                          ],
                        }),
                        h.jsx("p", {
                          className:
                            "text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-md",
                          children: l.footer.connectDesc,
                        }),
                      ],
                    }),
                  }),
                  h.jsxs("div", {
                    className:
                      "lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12",
                    children: [
                      h.jsxs("div", {
                        className: "flex flex-col",
                        children: [
                          h.jsxs("div", {
                            className:
                              "text-[10px] font-mono uppercase tracking-widest text-accent mb-8 flex items-center gap-2",
                            children: [
                              h.jsx("span", {
                                className:
                                  "w-2 h-2 rounded-full bg-accent animate-pulse",
                              }),
                              "Channels",
                            ],
                          }),
                          h.jsxs("div", {
                            className: "flex flex-col gap-6",
                            children: [
                              h.jsxs("a", {
                                href: "mailto:wangyuli1991@hotmail.com",
                                className:
                                  "group flex items-center gap-4 text-black dark:text-white hover:text-accent transition-all",
                                children: [
                                  h.jsx("div", {
                                    className:
                                      "w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all",
                                    children: h.jsx(zk, { size: 18 }),
                                  }),
                                  h.jsx("span", {
                                    className:
                                      "font-bold text-lg tracking-tight",
                                    children: "Email",
                                  }),
                                ],
                              }),
                              h.jsxs("a", {
                                href: "https://github.com/YuriWg",
                                target: "_blank",
                                rel: "noreferrer",
                                className:
                                  "group flex items-center gap-4 text-black dark:text-white hover:text-accent transition-all",
                                children: [
                                  h.jsx("div", {
                                    className:
                                      "w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all",
                                    children: h.jsx(_k, { size: 18 }),
                                  }),
                                  h.jsx("span", {
                                    className:
                                      "font-bold text-lg tracking-tight",
                                    children: "Github",
                                  }),
                                ],
                              }),
                              h.jsxs("a", {
                                href: "https://x.com/yuli_wg?s=21",
                                target: "_blank",
                                rel: "noreferrer",
                                className:
                                  "group flex items-center gap-4 text-black dark:text-white hover:text-accent transition-all",
                                children: [
                                  h.jsx("div", {
                                    className:
                                      "w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all",
                                    children: h.jsx(Fk, { size: 18 }),
                                  }),
                                  h.jsx("span", {
                                    className:
                                      "font-bold text-lg tracking-tight",
                                    children: "Twitter",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      h.jsxs("div", {
                        className: "flex flex-col",
                        children: [
                          h.jsx("div", {
                            className:
                              "text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-8",
                            children: "WeChat / ID",
                          }),
                          h.jsxs("div", {
                            className: "relative group",
                            children: [
                              h.jsxs("div", {
                                className:
                                  "w-full aspect-square bg-white border border-neutral-200 dark:border-neutral-800 p-4 overflow-hidden relative",
                                children: [
                                  h.jsx("div", {
                                    className:
                                      "absolute top-0 left-0 w-2 h-2 border-t border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity",
                                  }),
                                  h.jsx("div", {
                                    className:
                                      "absolute top-0 right-0 w-2 h-2 border-t border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity",
                                  }),
                                  h.jsx("div", {
                                    className:
                                      "absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity",
                                  }),
                                  h.jsx("div", {
                                    className:
                                      "absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity",
                                  }),
                                  h.jsx("img", {
                                    src: "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/%E5%BE%AE%E4%BF%A1.png&w=800",
                                    alt: "WeChat QR",
                                    className:
                                      "w-full h-full object-cover transition-all duration-700 opacity-90 group-hover:opacity-100",
                                  }),
                                ],
                              }),
                              h.jsxs("div", {
                                className:
                                  "mt-4 flex items-center justify-between",
                                children: [
                                  h.jsx("span", {
                                    className:
                                      "text-[10px] font-mono text-neutral-400 uppercase tracking-wider",
                                    children: l.footer.scanFollow,
                                  }),
                                  h.jsx("div", {
                                    className:
                                      "w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      h.jsxs("div", {
                        className: "flex flex-col",
                        children: [
                          h.jsx("div", {
                            className:
                              "text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-8",
                            children: "XiaoHongShu / ID",
                          }),
                          h.jsxs("div", {
                            className: "relative group",
                            children: [
                              h.jsxs("div", {
                                className:
                                  "w-full aspect-square bg-white border border-neutral-200 dark:border-neutral-800 p-4 overflow-hidden relative",
                                children: [
                                  h.jsx("div", {
                                    className:
                                      "absolute top-0 left-0 w-2 h-2 border-t border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity",
                                  }),
                                  h.jsx("div", {
                                    className:
                                      "absolute top-0 right-0 w-2 h-2 border-t border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity",
                                  }),
                                  h.jsx("div", {
                                    className:
                                      "absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity",
                                  }),
                                  h.jsx("div", {
                                    className:
                                      "absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity",
                                  }),
                                  h.jsx("img", {
                                    src: "https://wsrv.nl/?url=https://cdn.jsdelivr.net/gh/YuriWg/Obisidian_Pic@main/Picgo/小红书二维码.png&w=800",
                                    alt: "XiaoHongShu QR",
                                    className:
                                      "w-full h-full object-cover transition-all duration-700 opacity-90 group-hover:opacity-100",
                                  }),
                                ],
                              }),
                              h.jsxs("div", {
                                className:
                                  "mt-4 flex items-center justify-between",
                                children: [
                                  h.jsx("span", {
                                    className:
                                      "text-[10px] font-mono text-neutral-400 uppercase tracking-wider",
                                    children: "@游梨",
                                  }),
                                  h.jsx("div", {
                                    className:
                                      "w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            h.jsx("div", {
              className:
                "border-t border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-950/50 backdrop-blur-sm",
              children: h.jsxs("div", {
                className:
                  "max-w-7xl mx-auto py-6 px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase font-mono tracking-[0.3em] text-neutral-400",
                children: [
                  h.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      h.jsxs("span", {
                        children: ["© ", new Date().getFullYear(), " YURI.WG"],
                      }),
                      h.jsx("span", {
                        className:
                          "hidden md:inline text-neutral-200 dark:text-neutral-800",
                        children: "|",
                      }),
                      h.jsx("span", { children: l.footer.inspired }),
                    ],
                  }),
                  h.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      h.jsx("span", {
                        className: "w-1 h-1 rounded-full bg-accent",
                      }),
                      "DIGITAL CRAFTSMANSHIP",
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  sg = document.getElementById("root");
if (!sg) throw new Error("Could not find root element to mount to");
const uS = Oo.createRoot(sg);
uS.render(h.jsx(hf.StrictMode, { children: h.jsx(lS, {}) }));
