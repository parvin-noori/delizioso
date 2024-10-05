function J1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
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
var fl =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Hh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Z1 = { exports: {} },
  $c = {},
  ew = { exports: {} },
  Oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var da = Symbol.for("react.element"),
  mR = Symbol.for("react.portal"),
  gR = Symbol.for("react.fragment"),
  vR = Symbol.for("react.strict_mode"),
  yR = Symbol.for("react.profiler"),
  wR = Symbol.for("react.provider"),
  xR = Symbol.for("react.context"),
  SR = Symbol.for("react.forward_ref"),
  ER = Symbol.for("react.suspense"),
  _R = Symbol.for("react.memo"),
  bR = Symbol.for("react.lazy"),
  Av = Symbol.iterator;
function CR(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Av && e[Av]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var tw = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  nw = Object.assign,
  rw = {};
function js(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rw),
    (this.updater = n || tw);
}
js.prototype.isReactComponent = {};
js.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
js.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function iw() {}
iw.prototype = js.prototype;
function Vh(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rw),
    (this.updater = n || tw);
}
var Gh = (Vh.prototype = new iw());
Gh.constructor = Vh;
nw(Gh, js.prototype);
Gh.isPureReactComponent = !0;
var Iv = Array.isArray,
  ow = Object.prototype.hasOwnProperty,
  Kh = { current: null },
  sw = { key: !0, ref: !0, __self: !0, __source: !0 };
function lw(e, t, n) {
  var r,
    i = {},
    s = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      ow.call(t, r) && !sw.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) i.children = n;
  else if (1 < u) {
    for (var c = Array(u), d = 0; d < u; d++) c[d] = arguments[d + 2];
    i.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) i[r] === void 0 && (i[r] = u[r]);
  return {
    $$typeof: da,
    type: e,
    key: s,
    ref: a,
    props: i,
    _owner: Kh.current,
  };
}
function TR(e, t) {
  return {
    $$typeof: da,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function qh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === da;
}
function PR(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var zv = /\/+/g;
function kd(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? PR("" + e.key)
    : t.toString(36);
}
function Fu(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (s) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case da:
          case mR:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + kd(a, 0) : r),
      Iv(i)
        ? ((n = ""),
          e != null && (n = e.replace(zv, "$&/") + "/"),
          Fu(i, t, n, "", function (d) {
            return d;
          }))
        : i != null &&
          (qh(i) &&
            (i = TR(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(zv, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Iv(e)))
    for (var u = 0; u < e.length; u++) {
      s = e[u];
      var c = r + kd(s, u);
      a += Fu(s, t, n, c, i);
    }
  else if (((c = CR(e)), typeof c == "function"))
    for (e = c.call(e), u = 0; !(s = e.next()).done; )
      (s = s.value), (c = r + kd(s, u++)), (a += Fu(s, t, n, c, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function yu(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Fu(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function RR(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Qt = { current: null },
  Bu = { transition: null },
  NR = {
    ReactCurrentDispatcher: Qt,
    ReactCurrentBatchConfig: Bu,
    ReactCurrentOwner: Kh,
  };
function aw() {
  throw Error("act(...) is not supported in production builds of React.");
}
Oe.Children = {
  map: yu,
  forEach: function (e, t, n) {
    yu(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      yu(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      yu(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!qh(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Oe.Component = js;
Oe.Fragment = gR;
Oe.Profiler = yR;
Oe.PureComponent = Vh;
Oe.StrictMode = vR;
Oe.Suspense = ER;
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = NR;
Oe.act = aw;
Oe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = nw({}, e.props),
    i = e.key,
    s = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (a = Kh.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (c in t)
      ow.call(t, c) &&
        !sw.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && u !== void 0 ? u[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    u = Array(c);
    for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: da, type: e.type, key: i, ref: s, props: r, _owner: a };
};
Oe.createContext = function (e) {
  return (
    (e = {
      $$typeof: xR,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: wR, _context: e }),
    (e.Consumer = e)
  );
};
Oe.createElement = lw;
Oe.createFactory = function (e) {
  var t = lw.bind(null, e);
  return (t.type = e), t;
};
Oe.createRef = function () {
  return { current: null };
};
Oe.forwardRef = function (e) {
  return { $$typeof: SR, render: e };
};
Oe.isValidElement = qh;
Oe.lazy = function (e) {
  return { $$typeof: bR, _payload: { _status: -1, _result: e }, _init: RR };
};
Oe.memo = function (e, t) {
  return { $$typeof: _R, type: e, compare: t === void 0 ? null : t };
};
Oe.startTransition = function (e) {
  var t = Bu.transition;
  Bu.transition = {};
  try {
    e();
  } finally {
    Bu.transition = t;
  }
};
Oe.unstable_act = aw;
Oe.useCallback = function (e, t) {
  return Qt.current.useCallback(e, t);
};
Oe.useContext = function (e) {
  return Qt.current.useContext(e);
};
Oe.useDebugValue = function () {};
Oe.useDeferredValue = function (e) {
  return Qt.current.useDeferredValue(e);
};
Oe.useEffect = function (e, t) {
  return Qt.current.useEffect(e, t);
};
Oe.useId = function () {
  return Qt.current.useId();
};
Oe.useImperativeHandle = function (e, t, n) {
  return Qt.current.useImperativeHandle(e, t, n);
};
Oe.useInsertionEffect = function (e, t) {
  return Qt.current.useInsertionEffect(e, t);
};
Oe.useLayoutEffect = function (e, t) {
  return Qt.current.useLayoutEffect(e, t);
};
Oe.useMemo = function (e, t) {
  return Qt.current.useMemo(e, t);
};
Oe.useReducer = function (e, t, n) {
  return Qt.current.useReducer(e, t, n);
};
Oe.useRef = function (e) {
  return Qt.current.useRef(e);
};
Oe.useState = function (e) {
  return Qt.current.useState(e);
};
Oe.useSyncExternalStore = function (e, t, n) {
  return Qt.current.useSyncExternalStore(e, t, n);
};
Oe.useTransition = function () {
  return Qt.current.useTransition();
};
Oe.version = "18.3.1";
ew.exports = Oe;
var L = ew.exports;
const He = Hh(L),
  bp = J1({ __proto__: null, default: He }, [L]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var OR = L,
  LR = Symbol.for("react.element"),
  kR = Symbol.for("react.fragment"),
  MR = Object.prototype.hasOwnProperty,
  AR = OR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  IR = { key: !0, ref: !0, __self: !0, __source: !0 };
function uw(e, t, n) {
  var r,
    i = {},
    s = null,
    a = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) MR.call(t, r) && !IR.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: LR,
    type: e,
    key: s,
    ref: a,
    props: i,
    _owner: AR.current,
  };
}
$c.Fragment = kR;
$c.jsx = uw;
$c.jsxs = uw;
Z1.exports = $c;
var x = Z1.exports,
  Cp = {},
  cw = { exports: {} },
  Pn = {},
  fw = { exports: {} },
  dw = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(Z, ne) {
    var le = Z.length;
    Z.push(ne);
    e: for (; 0 < le; ) {
      var he = (le - 1) >>> 1,
        Me = Z[he];
      if (0 < i(Me, ne)) (Z[he] = ne), (Z[le] = Me), (le = he);
      else break e;
    }
  }
  function n(Z) {
    return Z.length === 0 ? null : Z[0];
  }
  function r(Z) {
    if (Z.length === 0) return null;
    var ne = Z[0],
      le = Z.pop();
    if (le !== ne) {
      Z[0] = le;
      e: for (var he = 0, Me = Z.length, On = Me >>> 1; he < On; ) {
        var xt = 2 * (he + 1) - 1,
          Tt = Z[xt],
          gt = xt + 1,
          ei = Z[gt];
        if (0 > i(Tt, le))
          gt < Me && 0 > i(ei, Tt)
            ? ((Z[he] = ei), (Z[gt] = le), (he = gt))
            : ((Z[he] = Tt), (Z[xt] = le), (he = xt));
        else if (gt < Me && 0 > i(ei, le))
          (Z[he] = ei), (Z[gt] = le), (he = gt);
        else break e;
      }
    }
    return ne;
  }
  function i(Z, ne) {
    var le = Z.sortIndex - ne.sortIndex;
    return le !== 0 ? le : Z.id - ne.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var a = Date,
      u = a.now();
    e.unstable_now = function () {
      return a.now() - u;
    };
  }
  var c = [],
    d = [],
    p = 1,
    m = null,
    g = 3,
    _ = !1,
    b = !1,
    T = !1,
    O = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    S = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(Z) {
    for (var ne = n(d); ne !== null; ) {
      if (ne.callback === null) r(d);
      else if (ne.startTime <= Z)
        r(d), (ne.sortIndex = ne.expirationTime), t(c, ne);
      else break;
      ne = n(d);
    }
  }
  function P(Z) {
    if (((T = !1), w(Z), !b))
      if (n(c) !== null) (b = !0), Ge(j);
      else {
        var ne = n(d);
        ne !== null && Pe(P, ne.startTime - Z);
      }
  }
  function j(Z, ne) {
    (b = !1), T && ((T = !1), y(D), (D = -1)), (_ = !0);
    var le = g;
    try {
      for (
        w(ne), m = n(c);
        m !== null && (!(m.expirationTime > ne) || (Z && !J()));

      ) {
        var he = m.callback;
        if (typeof he == "function") {
          (m.callback = null), (g = m.priorityLevel);
          var Me = he(m.expirationTime <= ne);
          (ne = e.unstable_now()),
            typeof Me == "function" ? (m.callback = Me) : m === n(c) && r(c),
            w(ne);
        } else r(c);
        m = n(c);
      }
      if (m !== null) var On = !0;
      else {
        var xt = n(d);
        xt !== null && Pe(P, xt.startTime - ne), (On = !1);
      }
      return On;
    } finally {
      (m = null), (g = le), (_ = !1);
    }
  }
  var N = !1,
    H = null,
    D = -1,
    V = 5,
    U = -1;
  function J() {
    return !(e.unstable_now() - U < V);
  }
  function Q() {
    if (H !== null) {
      var Z = e.unstable_now();
      U = Z;
      var ne = !0;
      try {
        ne = H(!0, Z);
      } finally {
        ne ? re() : ((N = !1), (H = null));
      }
    } else N = !1;
  }
  var re;
  if (typeof S == "function")
    re = function () {
      S(Q);
    };
  else if (typeof MessageChannel < "u") {
    var ae = new MessageChannel(),
      Ae = ae.port2;
    (ae.port1.onmessage = Q),
      (re = function () {
        Ae.postMessage(null);
      });
  } else
    re = function () {
      O(Q, 0);
    };
  function Ge(Z) {
    (H = Z), N || ((N = !0), re());
  }
  function Pe(Z, ne) {
    D = O(function () {
      Z(e.unstable_now());
    }, ne);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (Z) {
      Z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || _ || ((b = !0), Ge(j));
    }),
    (e.unstable_forceFrameRate = function (Z) {
      0 > Z || 125 < Z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < Z ? Math.floor(1e3 / Z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (Z) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var ne = 3;
          break;
        default:
          ne = g;
      }
      var le = g;
      g = ne;
      try {
        return Z();
      } finally {
        g = le;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (Z, ne) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Z = 3;
      }
      var le = g;
      g = Z;
      try {
        return ne();
      } finally {
        g = le;
      }
    }),
    (e.unstable_scheduleCallback = function (Z, ne, le) {
      var he = e.unstable_now();
      switch (
        (typeof le == "object" && le !== null
          ? ((le = le.delay),
            (le = typeof le == "number" && 0 < le ? he + le : he))
          : (le = he),
        Z)
      ) {
        case 1:
          var Me = -1;
          break;
        case 2:
          Me = 250;
          break;
        case 5:
          Me = 1073741823;
          break;
        case 4:
          Me = 1e4;
          break;
        default:
          Me = 5e3;
      }
      return (
        (Me = le + Me),
        (Z = {
          id: p++,
          callback: ne,
          priorityLevel: Z,
          startTime: le,
          expirationTime: Me,
          sortIndex: -1,
        }),
        le > he
          ? ((Z.sortIndex = le),
            t(d, Z),
            n(c) === null &&
              Z === n(d) &&
              (T ? (y(D), (D = -1)) : (T = !0), Pe(P, le - he)))
          : ((Z.sortIndex = Me), t(c, Z), b || _ || ((b = !0), Ge(j))),
        Z
      );
    }),
    (e.unstable_shouldYield = J),
    (e.unstable_wrapCallback = function (Z) {
      var ne = g;
      return function () {
        var le = g;
        g = ne;
        try {
          return Z.apply(this, arguments);
        } finally {
          g = le;
        }
      };
    });
})(dw);
fw.exports = dw;
var zR = fw.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jR = L,
  bn = zR;
function X(e) {
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
var pw = new Set(),
  Wl = {};
function ko(e, t) {
  Ps(e, t), Ps(e + "Capture", t);
}
function Ps(e, t) {
  for (Wl[e] = t, e = 0; e < t.length; e++) pw.add(t[e]);
}
var Kr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Tp = Object.prototype.hasOwnProperty,
  DR =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  jv = {},
  Dv = {};
function FR(e) {
  return Tp.call(Dv, e)
    ? !0
    : Tp.call(jv, e)
    ? !1
    : DR.test(e)
    ? (Dv[e] = !0)
    : ((jv[e] = !0), !1);
}
function BR(e, t, n, r) {
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
function UR(e, t, n, r) {
  if (t === null || typeof t > "u" || BR(e, t, n, r)) return !0;
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
function Xt(e, t, n, r, i, s, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = a);
}
var It = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    It[e] = new Xt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  It[t] = new Xt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  It[e] = new Xt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  It[e] = new Xt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    It[e] = new Xt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  It[e] = new Xt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  It[e] = new Xt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  It[e] = new Xt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  It[e] = new Xt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yh = /[\-:]([a-z])/g;
function Qh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset strokeLinecap strokeLinejoin stroke-miterlimit stroke-opacity strokeWidth text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yh, Qh);
    It[t] = new Xt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yh, Qh);
    It[t] = new Xt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yh, Qh);
  It[t] = new Xt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  It[e] = new Xt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
It.xlinkHref = new Xt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  It[e] = new Xt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xh(e, t, n, r) {
  var i = It.hasOwnProperty(t) ? It[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (UR(t, n, i, r) && (n = null),
    r || i === null
      ? FR(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Zr = jR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wu = Symbol.for("react.element"),
  ls = Symbol.for("react.portal"),
  as = Symbol.for("react.fragment"),
  Jh = Symbol.for("react.strict_mode"),
  Pp = Symbol.for("react.profiler"),
  hw = Symbol.for("react.provider"),
  mw = Symbol.for("react.context"),
  Zh = Symbol.for("react.forward_ref"),
  Rp = Symbol.for("react.suspense"),
  Np = Symbol.for("react.suspense_list"),
  em = Symbol.for("react.memo"),
  yi = Symbol.for("react.lazy"),
  gw = Symbol.for("react.offscreen"),
  Fv = Symbol.iterator;
function dl(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fv && e[Fv]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var at = Object.assign,
  Md;
function Tl(e) {
  if (Md === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Md = (t && t[1]) || "";
    }
  return (
    `
` +
    Md +
    e
  );
}
var Ad = !1;
function Id(e, t) {
  if (!e || Ad) return "";
  Ad = !0;
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
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var i = d.stack.split(`
`),
          s = r.stack.split(`
`),
          a = i.length - 1,
          u = s.length - 1;
        1 <= a && 0 <= u && i[a] !== s[u];

      )
        u--;
      for (; 1 <= a && 0 <= u; a--, u--)
        if (i[a] !== s[u]) {
          if (a !== 1 || u !== 1)
            do
              if ((a--, u--, 0 > u || i[a] !== s[u])) {
                var c =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= u);
          break;
        }
    }
  } finally {
    (Ad = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Tl(e) : "";
}
function $R(e) {
  switch (e.tag) {
    case 5:
      return Tl(e.type);
    case 16:
      return Tl("Lazy");
    case 13:
      return Tl("Suspense");
    case 19:
      return Tl("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Id(e.type, !1)), e;
    case 11:
      return (e = Id(e.type.render, !1)), e;
    case 1:
      return (e = Id(e.type, !0)), e;
    default:
      return "";
  }
}
function Op(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case as:
      return "Fragment";
    case ls:
      return "Portal";
    case Pp:
      return "Profiler";
    case Jh:
      return "StrictMode";
    case Rp:
      return "Suspense";
    case Np:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case mw:
        return (e.displayName || "Context") + ".Consumer";
      case hw:
        return (e._context.displayName || "Context") + ".Provider";
      case Zh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case em:
        return (
          (t = e.displayName || null), t !== null ? t : Op(e.type) || "Memo"
        );
      case yi:
        (t = e._payload), (e = e._init);
        try {
          return Op(e(t));
        } catch {}
    }
  return null;
}
function WR(e) {
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
      return Op(t);
    case 8:
      return t === Jh ? "StrictMode" : "Mode";
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
function Ai(e) {
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
function vw(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function HR(e) {
  var t = vw(e) ? "checked" : "value",
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
        set: function (a) {
          (r = "" + a), s.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xu(e) {
  e._valueTracker || (e._valueTracker = HR(e));
}
function yw(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = vw(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function nc(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Lp(e, t) {
  var n = t.checked;
  return at({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Bv(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ai(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ww(e, t) {
  (t = t.checked), t != null && Xh(e, "checked", t, !1);
}
function kp(e, t) {
  ww(e, t);
  var n = Ai(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Mp(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Mp(e, t.type, Ai(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Uv(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Mp(e, t, n) {
  (t !== "number" || nc(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pl = Array.isArray;
function xs(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ai(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ap(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(X(91));
  return at({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function $v(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(X(92));
      if (Pl(n)) {
        if (1 < n.length) throw Error(X(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ai(n) };
}
function xw(e, t) {
  var n = Ai(t.value),
    r = Ai(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Wv(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sw(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ip(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Sw(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Su,
  Ew = (function (e) {
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
        Su = Su || document.createElement("div"),
          Su.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Su.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Hl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ml = {
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
  VR = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ml).forEach(function (e) {
  VR.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ml[t] = Ml[e]);
  });
});
function _w(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ml.hasOwnProperty(e) && Ml[e])
    ? ("" + t).trim()
    : t + "px";
}
function bw(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = _w(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var GR = at(
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
  }
);
function zp(e, t) {
  if (t) {
    if (GR[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(X(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(X(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(X(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(X(62));
  }
}
function jp(e, t) {
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
var Dp = null;
function tm(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Fp = null,
  Ss = null,
  Es = null;
function Hv(e) {
  if ((e = ma(e))) {
    if (typeof Fp != "function") throw Error(X(280));
    var t = e.stateNode;
    t && ((t = Kc(t)), Fp(e.stateNode, e.type, t));
  }
}
function Cw(e) {
  Ss ? (Es ? Es.push(e) : (Es = [e])) : (Ss = e);
}
function Tw() {
  if (Ss) {
    var e = Ss,
      t = Es;
    if (((Es = Ss = null), Hv(e), t)) for (e = 0; e < t.length; e++) Hv(t[e]);
  }
}
function Pw(e, t) {
  return e(t);
}
function Rw() {}
var zd = !1;
function Nw(e, t, n) {
  if (zd) return e(t, n);
  zd = !0;
  try {
    return Pw(e, t, n);
  } finally {
    (zd = !1), (Ss !== null || Es !== null) && (Rw(), Tw());
  }
}
function Vl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Kc(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(X(231, t, typeof n));
  return n;
}
var Bp = !1;
if (Kr)
  try {
    var pl = {};
    Object.defineProperty(pl, "passive", {
      get: function () {
        Bp = !0;
      },
    }),
      window.addEventListener("test", pl, pl),
      window.removeEventListener("test", pl, pl);
  } catch {
    Bp = !1;
  }
function KR(e, t, n, r, i, s, a, u, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (p) {
    this.onError(p);
  }
}
var Al = !1,
  rc = null,
  ic = !1,
  Up = null,
  qR = {
    onError: function (e) {
      (Al = !0), (rc = e);
    },
  };
function YR(e, t, n, r, i, s, a, u, c) {
  (Al = !1), (rc = null), KR.apply(qR, arguments);
}
function QR(e, t, n, r, i, s, a, u, c) {
  if ((YR.apply(this, arguments), Al)) {
    if (Al) {
      var d = rc;
      (Al = !1), (rc = null);
    } else throw Error(X(198));
    ic || ((ic = !0), (Up = d));
  }
}
function Mo(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ow(e) {
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
function Vv(e) {
  if (Mo(e) !== e) throw Error(X(188));
}
function XR(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mo(e)), t === null)) throw Error(X(188));
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
        if (s === n) return Vv(i), e;
        if (s === r) return Vv(i), t;
        s = s.sibling;
      }
      throw Error(X(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var a = !1, u = i.child; u; ) {
        if (u === n) {
          (a = !0), (n = i), (r = s);
          break;
        }
        if (u === r) {
          (a = !0), (r = i), (n = s);
          break;
        }
        u = u.sibling;
      }
      if (!a) {
        for (u = s.child; u; ) {
          if (u === n) {
            (a = !0), (n = s), (r = i);
            break;
          }
          if (u === r) {
            (a = !0), (r = s), (n = i);
            break;
          }
          u = u.sibling;
        }
        if (!a) throw Error(X(189));
      }
    }
    if (n.alternate !== r) throw Error(X(190));
  }
  if (n.tag !== 3) throw Error(X(188));
  return n.stateNode.current === n ? e : t;
}
function Lw(e) {
  return (e = XR(e)), e !== null ? kw(e) : null;
}
function kw(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = kw(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mw = bn.unstable_scheduleCallback,
  Gv = bn.unstable_cancelCallback,
  JR = bn.unstable_shouldYield,
  ZR = bn.unstable_requestPaint,
  mt = bn.unstable_now,
  e3 = bn.unstable_getCurrentPriorityLevel,
  nm = bn.unstable_ImmediatePriority,
  Aw = bn.unstable_UserBlockingPriority,
  oc = bn.unstable_NormalPriority,
  t3 = bn.unstable_LowPriority,
  Iw = bn.unstable_IdlePriority,
  Wc = null,
  br = null;
function n3(e) {
  if (br && typeof br.onCommitFiberRoot == "function")
    try {
      br.onCommitFiberRoot(Wc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ur = Math.clz32 ? Math.clz32 : o3,
  r3 = Math.log,
  i3 = Math.LN2;
function o3(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((r3(e) / i3) | 0)) | 0;
}
var Eu = 64,
  _u = 4194304;
function Rl(e) {
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
function sc(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var u = a & ~i;
    u !== 0 ? (r = Rl(u)) : ((s &= a), s !== 0 && (r = Rl(s)));
  } else (a = n & ~i), a !== 0 ? (r = Rl(a)) : s !== 0 && (r = Rl(s));
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
      (n = 31 - ur(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function s3(e, t) {
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
function l3(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var a = 31 - ur(s),
      u = 1 << a,
      c = i[a];
    c === -1
      ? (!(u & n) || u & r) && (i[a] = s3(u, t))
      : c <= t && (e.expiredLanes |= u),
      (s &= ~u);
  }
}
function $p(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zw() {
  var e = Eu;
  return (Eu <<= 1), !(Eu & 4194240) && (Eu = 64), e;
}
function jd(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pa(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ur(t)),
    (e[t] = n);
}
function a3(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - ur(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function rm(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ur(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var We = 0;
function jw(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Dw,
  im,
  Fw,
  Bw,
  Uw,
  Wp = !1,
  bu = [],
  Ci = null,
  Ti = null,
  Pi = null,
  Gl = new Map(),
  Kl = new Map(),
  xi = [],
  u3 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Kv(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ci = null;
      break;
    case "dragenter":
    case "dragleave":
      Ti = null;
      break;
    case "mouseover":
    case "mouseout":
      Pi = null;
      break;
    case "pointerover":
    case "pointerout":
      Gl.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kl.delete(t.pointerId);
  }
}
function hl(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = ma(t)), t !== null && im(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function c3(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Ci = hl(Ci, e, t, n, r, i)), !0;
    case "dragenter":
      return (Ti = hl(Ti, e, t, n, r, i)), !0;
    case "mouseover":
      return (Pi = hl(Pi, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Gl.set(s, hl(Gl.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Kl.set(s, hl(Kl.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function $w(e) {
  var t = fo(e.target);
  if (t !== null) {
    var n = Mo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ow(n)), t !== null)) {
          (e.blockedOn = t),
            Uw(e.priority, function () {
              Fw(n);
            });
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
function Uu(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Hp(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Dp = r), n.target.dispatchEvent(r), (Dp = null);
    } else return (t = ma(n)), t !== null && im(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function qv(e, t, n) {
  Uu(e) && n.delete(t);
}
function f3() {
  (Wp = !1),
    Ci !== null && Uu(Ci) && (Ci = null),
    Ti !== null && Uu(Ti) && (Ti = null),
    Pi !== null && Uu(Pi) && (Pi = null),
    Gl.forEach(qv),
    Kl.forEach(qv);
}
function ml(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Wp ||
      ((Wp = !0),
      bn.unstable_scheduleCallback(bn.unstable_NormalPriority, f3)));
}
function ql(e) {
  function t(i) {
    return ml(i, e);
  }
  if (0 < bu.length) {
    ml(bu[0], e);
    for (var n = 1; n < bu.length; n++) {
      var r = bu[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ci !== null && ml(Ci, e),
      Ti !== null && ml(Ti, e),
      Pi !== null && ml(Pi, e),
      Gl.forEach(t),
      Kl.forEach(t),
      n = 0;
    n < xi.length;
    n++
  )
    (r = xi[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < xi.length && ((n = xi[0]), n.blockedOn === null); )
    $w(n), n.blockedOn === null && xi.shift();
}
var _s = Zr.ReactCurrentBatchConfig,
  lc = !0;
function d3(e, t, n, r) {
  var i = We,
    s = _s.transition;
  _s.transition = null;
  try {
    (We = 1), om(e, t, n, r);
  } finally {
    (We = i), (_s.transition = s);
  }
}
function p3(e, t, n, r) {
  var i = We,
    s = _s.transition;
  _s.transition = null;
  try {
    (We = 4), om(e, t, n, r);
  } finally {
    (We = i), (_s.transition = s);
  }
}
function om(e, t, n, r) {
  if (lc) {
    var i = Hp(e, t, n, r);
    if (i === null) Kd(e, t, r, ac, n), Kv(e, r);
    else if (c3(i, e, t, n, r)) r.stopPropagation();
    else if ((Kv(e, r), t & 4 && -1 < u3.indexOf(e))) {
      for (; i !== null; ) {
        var s = ma(i);
        if (
          (s !== null && Dw(s),
          (s = Hp(e, t, n, r)),
          s === null && Kd(e, t, r, ac, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Kd(e, t, r, null, n);
  }
}
var ac = null;
function Hp(e, t, n, r) {
  if (((ac = null), (e = tm(r)), (e = fo(e)), e !== null))
    if (((t = Mo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ow(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ac = e), null;
}
function Ww(e) {
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
      switch (e3()) {
        case nm:
          return 1;
        case Aw:
          return 4;
        case oc:
        case t3:
          return 16;
        case Iw:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ei = null,
  sm = null,
  $u = null;
function Hw() {
  if ($u) return $u;
  var e,
    t = sm,
    n = t.length,
    r,
    i = "value" in Ei ? Ei.value : Ei.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[s - r]; r++);
  return ($u = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Wu(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Cu() {
  return !0;
}
function Yv() {
  return !1;
}
function Rn(e) {
  function t(n, r, i, s, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = a),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(s) : s[u]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Cu
        : Yv),
      (this.isPropagationStopped = Yv),
      this
    );
  }
  return (
    at(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Cu));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Cu));
      },
      persist: function () {},
      isPersistent: Cu,
    }),
    t
  );
}
var Ds = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  lm = Rn(Ds),
  ha = at({}, Ds, { view: 0, detail: 0 }),
  h3 = Rn(ha),
  Dd,
  Fd,
  gl,
  Hc = at({}, ha, {
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
    getModifierState: am,
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
        : (e !== gl &&
            (gl && e.type === "mousemove"
              ? ((Dd = e.screenX - gl.screenX), (Fd = e.screenY - gl.screenY))
              : (Fd = Dd = 0),
            (gl = e)),
          Dd);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Fd;
    },
  }),
  Qv = Rn(Hc),
  m3 = at({}, Hc, { dataTransfer: 0 }),
  g3 = Rn(m3),
  v3 = at({}, ha, { relatedTarget: 0 }),
  Bd = Rn(v3),
  y3 = at({}, Ds, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  w3 = Rn(y3),
  x3 = at({}, Ds, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  S3 = Rn(x3),
  E3 = at({}, Ds, { data: 0 }),
  Xv = Rn(E3),
  _3 = {
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
  b3 = {
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
  C3 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function T3(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = C3[e]) ? !!t[e] : !1;
}
function am() {
  return T3;
}
var P3 = at({}, ha, {
    key: function (e) {
      if (e.key) {
        var t = _3[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Wu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? b3[e.keyCode] || "Unidentified"
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
    getModifierState: am,
    charCode: function (e) {
      return e.type === "keypress" ? Wu(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Wu(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  R3 = Rn(P3),
  N3 = at({}, Hc, {
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
  Jv = Rn(N3),
  O3 = at({}, ha, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: am,
  }),
  L3 = Rn(O3),
  k3 = at({}, Ds, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  M3 = Rn(k3),
  A3 = at({}, Hc, {
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
  I3 = Rn(A3),
  z3 = [9, 13, 27, 32],
  um = Kr && "CompositionEvent" in window,
  Il = null;
Kr && "documentMode" in document && (Il = document.documentMode);
var j3 = Kr && "TextEvent" in window && !Il,
  Vw = Kr && (!um || (Il && 8 < Il && 11 >= Il)),
  Zv = " ",
  ey = !1;
function Gw(e, t) {
  switch (e) {
    case "keyup":
      return z3.indexOf(t.keyCode) !== -1;
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
function Kw(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var us = !1;
function D3(e, t) {
  switch (e) {
    case "compositionend":
      return Kw(t);
    case "keypress":
      return t.which !== 32 ? null : ((ey = !0), Zv);
    case "textInput":
      return (e = t.data), e === Zv && ey ? null : e;
    default:
      return null;
  }
}
function F3(e, t) {
  if (us)
    return e === "compositionend" || (!um && Gw(e, t))
      ? ((e = Hw()), ($u = sm = Ei = null), (us = !1), e)
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
      return Vw && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var B3 = {
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
function ty(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!B3[e.type] : t === "textarea";
}
function qw(e, t, n, r) {
  Cw(r),
    (t = uc(t, "onChange")),
    0 < t.length &&
      ((n = new lm("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zl = null,
  Yl = null;
function U3(e) {
  ox(e, 0);
}
function Vc(e) {
  var t = ds(e);
  if (yw(t)) return e;
}
function $3(e, t) {
  if (e === "change") return t;
}
var Yw = !1;
if (Kr) {
  var Ud;
  if (Kr) {
    var $d = "oninput" in document;
    if (!$d) {
      var ny = document.createElement("div");
      ny.setAttribute("oninput", "return;"),
        ($d = typeof ny.oninput == "function");
    }
    Ud = $d;
  } else Ud = !1;
  Yw = Ud && (!document.documentMode || 9 < document.documentMode);
}
function ry() {
  zl && (zl.detachEvent("onpropertychange", Qw), (Yl = zl = null));
}
function Qw(e) {
  if (e.propertyName === "value" && Vc(Yl)) {
    var t = [];
    qw(t, Yl, e, tm(e)), Nw(U3, t);
  }
}
function W3(e, t, n) {
  e === "focusin"
    ? (ry(), (zl = t), (Yl = n), zl.attachEvent("onpropertychange", Qw))
    : e === "focusout" && ry();
}
function H3(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Vc(Yl);
}
function V3(e, t) {
  if (e === "click") return Vc(t);
}
function G3(e, t) {
  if (e === "input" || e === "change") return Vc(t);
}
function K3(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pr = typeof Object.is == "function" ? Object.is : K3;
function Ql(e, t) {
  if (pr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Tp.call(t, i) || !pr(e[i], t[i])) return !1;
  }
  return !0;
}
function iy(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function oy(e, t) {
  var n = iy(e);
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
    n = iy(n);
  }
}
function Xw(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Xw(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Jw() {
  for (var e = window, t = nc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = nc(e.document);
  }
  return t;
}
function cm(e) {
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
function q3(e) {
  var t = Jw(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Xw(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && cm(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = oy(n, s));
        var a = oy(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Y3 = Kr && "documentMode" in document && 11 >= document.documentMode,
  cs = null,
  Vp = null,
  jl = null,
  Gp = !1;
function sy(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gp ||
    cs == null ||
    cs !== nc(r) ||
    ((r = cs),
    "selectionStart" in r && cm(r)
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
    (jl && Ql(jl, r)) ||
      ((jl = r),
      (r = uc(Vp, "onSelect")),
      0 < r.length &&
        ((t = new lm("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = cs))));
}
function Tu(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var fs = {
    animationend: Tu("Animation", "AnimationEnd"),
    animationiteration: Tu("Animation", "AnimationIteration"),
    animationstart: Tu("Animation", "AnimationStart"),
    transitionend: Tu("Transition", "TransitionEnd"),
  },
  Wd = {},
  Zw = {};
Kr &&
  ((Zw = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete fs.animationend.animation,
    delete fs.animationiteration.animation,
    delete fs.animationstart.animation),
  "TransitionEvent" in window || delete fs.transitionend.transition);
function Gc(e) {
  if (Wd[e]) return Wd[e];
  if (!fs[e]) return e;
  var t = fs[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zw) return (Wd[e] = t[n]);
  return e;
}
var ex = Gc("animationend"),
  tx = Gc("animationiteration"),
  nx = Gc("animationstart"),
  rx = Gc("transitionend"),
  ix = new Map(),
  ly =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ji(e, t) {
  ix.set(e, t), ko(t, [e]);
}
for (var Hd = 0; Hd < ly.length; Hd++) {
  var Vd = ly[Hd],
    Q3 = Vd.toLowerCase(),
    X3 = Vd[0].toUpperCase() + Vd.slice(1);
  ji(Q3, "on" + X3);
}
ji(ex, "onAnimationEnd");
ji(tx, "onAnimationIteration");
ji(nx, "onAnimationStart");
ji("dblclick", "onDoubleClick");
ji("focusin", "onFocus");
ji("focusout", "onBlur");
ji(rx, "onTransitionEnd");
Ps("onMouseEnter", ["mouseout", "mouseover"]);
Ps("onMouseLeave", ["mouseout", "mouseover"]);
Ps("onPointerEnter", ["pointerout", "pointerover"]);
Ps("onPointerLeave", ["pointerout", "pointerover"]);
ko(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ko(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ko("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ko(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ko(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ko(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Nl =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  J3 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nl));
function ay(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), QR(r, t, void 0, e), (e.currentTarget = null);
}
function ox(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var u = r[a],
            c = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), c !== s && i.isPropagationStopped())) break e;
          ay(i, u, d), (s = c);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((u = r[a]),
            (c = u.instance),
            (d = u.currentTarget),
            (u = u.listener),
            c !== s && i.isPropagationStopped())
          )
            break e;
          ay(i, u, d), (s = c);
        }
    }
  }
  if (ic) throw ((e = Up), (ic = !1), (Up = null), e);
}
function Ze(e, t) {
  var n = t[Xp];
  n === void 0 && (n = t[Xp] = new Set());
  var r = e + "__bubble";
  n.has(r) || (sx(t, e, 2, !1), n.add(r));
}
function Gd(e, t, n) {
  var r = 0;
  t && (r |= 4), sx(n, e, r, t);
}
var Pu = "_reactListening" + Math.random().toString(36).slice(2);
function Xl(e) {
  if (!e[Pu]) {
    (e[Pu] = !0),
      pw.forEach(function (n) {
        n !== "selectionchange" && (J3.has(n) || Gd(n, !1, e), Gd(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pu] || ((t[Pu] = !0), Gd("selectionchange", !1, t));
  }
}
function sx(e, t, n, r) {
  switch (Ww(t)) {
    case 1:
      var i = d3;
      break;
    case 4:
      i = p3;
      break;
    default:
      i = om;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Bp ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Kd(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var u = r.stateNode.containerInfo;
        if (u === i || (u.nodeType === 8 && u.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === i || (c.nodeType === 8 && c.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; u !== null; ) {
          if (((a = fo(u)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            r = s = a;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Nw(function () {
    var d = s,
      p = tm(n),
      m = [];
    e: {
      var g = ix.get(e);
      if (g !== void 0) {
        var _ = lm,
          b = e;
        switch (e) {
          case "keypress":
            if (Wu(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = R3;
            break;
          case "focusin":
            (b = "focus"), (_ = Bd);
            break;
          case "focusout":
            (b = "blur"), (_ = Bd);
            break;
          case "beforeblur":
          case "afterblur":
            _ = Bd;
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
            _ = Qv;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = g3;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = L3;
            break;
          case ex:
          case tx:
          case nx:
            _ = w3;
            break;
          case rx:
            _ = M3;
            break;
          case "scroll":
            _ = h3;
            break;
          case "wheel":
            _ = I3;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = S3;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = Jv;
        }
        var T = (t & 4) !== 0,
          O = !T && e === "scroll",
          y = T ? (g !== null ? g + "Capture" : null) : g;
        T = [];
        for (var S = d, w; S !== null; ) {
          w = S;
          var P = w.stateNode;
          if (
            (w.tag === 5 &&
              P !== null &&
              ((w = P),
              y !== null && ((P = Vl(S, y)), P != null && T.push(Jl(S, P, w)))),
            O)
          )
            break;
          S = S.return;
        }
        0 < T.length &&
          ((g = new _(g, b, null, n, p)), m.push({ event: g, listeners: T }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (_ = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Dp &&
            (b = n.relatedTarget || n.fromElement) &&
            (fo(b) || b[qr]))
        )
          break e;
        if (
          (_ || g) &&
          ((g =
            p.window === p
              ? p
              : (g = p.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          _
            ? ((b = n.relatedTarget || n.toElement),
              (_ = d),
              (b = b ? fo(b) : null),
              b !== null &&
                ((O = Mo(b)), b !== O || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((_ = null), (b = d)),
          _ !== b)
        ) {
          if (
            ((T = Qv),
            (P = "onMouseLeave"),
            (y = "onMouseEnter"),
            (S = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((T = Jv),
              (P = "onPointerLeave"),
              (y = "onPointerEnter"),
              (S = "pointer")),
            (O = _ == null ? g : ds(_)),
            (w = b == null ? g : ds(b)),
            (g = new T(P, S + "leave", _, n, p)),
            (g.target = O),
            (g.relatedTarget = w),
            (P = null),
            fo(p) === d &&
              ((T = new T(y, S + "enter", b, n, p)),
              (T.target = w),
              (T.relatedTarget = O),
              (P = T)),
            (O = P),
            _ && b)
          )
            t: {
              for (T = _, y = b, S = 0, w = T; w; w = os(w)) S++;
              for (w = 0, P = y; P; P = os(P)) w++;
              for (; 0 < S - w; ) (T = os(T)), S--;
              for (; 0 < w - S; ) (y = os(y)), w--;
              for (; S--; ) {
                if (T === y || (y !== null && T === y.alternate)) break t;
                (T = os(T)), (y = os(y));
              }
              T = null;
            }
          else T = null;
          _ !== null && uy(m, g, _, T, !1),
            b !== null && O !== null && uy(m, O, b, T, !0);
        }
      }
      e: {
        if (
          ((g = d ? ds(d) : window),
          (_ = g.nodeName && g.nodeName.toLowerCase()),
          _ === "select" || (_ === "input" && g.type === "file"))
        )
          var j = $3;
        else if (ty(g))
          if (Yw) j = G3;
          else {
            j = H3;
            var N = W3;
          }
        else
          (_ = g.nodeName) &&
            _.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (j = V3);
        if (j && (j = j(e, d))) {
          qw(m, j, n, p);
          break e;
        }
        N && N(e, g, d),
          e === "focusout" &&
            (N = g._wrapperState) &&
            N.controlled &&
            g.type === "number" &&
            Mp(g, "number", g.value);
      }
      switch (((N = d ? ds(d) : window), e)) {
        case "focusin":
          (ty(N) || N.contentEditable === "true") &&
            ((cs = N), (Vp = d), (jl = null));
          break;
        case "focusout":
          jl = Vp = cs = null;
          break;
        case "mousedown":
          Gp = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Gp = !1), sy(m, n, p);
          break;
        case "selectionchange":
          if (Y3) break;
        case "keydown":
        case "keyup":
          sy(m, n, p);
      }
      var H;
      if (um)
        e: {
          switch (e) {
            case "compositionstart":
              var D = "onCompositionStart";
              break e;
            case "compositionend":
              D = "onCompositionEnd";
              break e;
            case "compositionupdate":
              D = "onCompositionUpdate";
              break e;
          }
          D = void 0;
        }
      else
        us
          ? Gw(e, n) && (D = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      D &&
        (Vw &&
          n.locale !== "ko" &&
          (us || D !== "onCompositionStart"
            ? D === "onCompositionEnd" && us && (H = Hw())
            : ((Ei = p),
              (sm = "value" in Ei ? Ei.value : Ei.textContent),
              (us = !0))),
        (N = uc(d, D)),
        0 < N.length &&
          ((D = new Xv(D, e, null, n, p)),
          m.push({ event: D, listeners: N }),
          H ? (D.data = H) : ((H = Kw(n)), H !== null && (D.data = H)))),
        (H = j3 ? D3(e, n) : F3(e, n)) &&
          ((d = uc(d, "onBeforeInput")),
          0 < d.length &&
            ((p = new Xv("onBeforeInput", "beforeinput", null, n, p)),
            m.push({ event: p, listeners: d }),
            (p.data = H)));
    }
    ox(m, t);
  });
}
function Jl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function uc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Vl(e, n)),
      s != null && r.unshift(Jl(e, s, i)),
      (s = Vl(e, t)),
      s != null && r.push(Jl(e, s, i))),
      (e = e.return);
  }
  return r;
}
function os(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function uy(e, t, n, r, i) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var u = n,
      c = u.alternate,
      d = u.stateNode;
    if (c !== null && c === r) break;
    u.tag === 5 &&
      d !== null &&
      ((u = d),
      i
        ? ((c = Vl(n, s)), c != null && a.unshift(Jl(n, c, u)))
        : i || ((c = Vl(n, s)), c != null && a.push(Jl(n, c, u)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Z3 = /\r\n?/g,
  eN = /\u0000|\uFFFD/g;
function cy(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Z3,
      `
`
    )
    .replace(eN, "");
}
function Ru(e, t, n) {
  if (((t = cy(t)), cy(e) !== t && n)) throw Error(X(425));
}
function cc() {}
var Kp = null,
  qp = null;
function Yp(e, t) {
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
var Qp = typeof setTimeout == "function" ? setTimeout : void 0,
  tN = typeof clearTimeout == "function" ? clearTimeout : void 0,
  fy = typeof Promise == "function" ? Promise : void 0,
  nN =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof fy < "u"
      ? function (e) {
          return fy.resolve(null).then(e).catch(rN);
        }
      : Qp;
function rN(e) {
  setTimeout(function () {
    throw e;
  });
}
function qd(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), ql(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ql(t);
}
function Ri(e) {
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
function dy(e) {
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
var Fs = Math.random().toString(36).slice(2),
  Er = "__reactFiber$" + Fs,
  Zl = "__reactProps$" + Fs,
  qr = "__reactContainer$" + Fs,
  Xp = "__reactEvents$" + Fs,
  iN = "__reactListeners$" + Fs,
  oN = "__reactHandles$" + Fs;
function fo(e) {
  var t = e[Er];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[qr] || n[Er])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = dy(e); e !== null; ) {
          if ((n = e[Er])) return n;
          e = dy(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ma(e) {
  return (
    (e = e[Er] || e[qr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ds(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(X(33));
}
function Kc(e) {
  return e[Zl] || null;
}
var Jp = [],
  ps = -1;
function Di(e) {
  return { current: e };
}
function et(e) {
  0 > ps || ((e.current = Jp[ps]), (Jp[ps] = null), ps--);
}
function Qe(e, t) {
  ps++, (Jp[ps] = e.current), (e.current = t);
}
var Ii = {},
  Ut = Di(Ii),
  sn = Di(!1),
  Eo = Ii;
function Rs(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ii;
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
function ln(e) {
  return (e = e.childContextTypes), e != null;
}
function fc() {
  et(sn), et(Ut);
}
function py(e, t, n) {
  if (Ut.current !== Ii) throw Error(X(168));
  Qe(Ut, t), Qe(sn, n);
}
function lx(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(X(108, WR(e) || "Unknown", i));
  return at({}, n, r);
}
function dc(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ii),
    (Eo = Ut.current),
    Qe(Ut, e),
    Qe(sn, sn.current),
    !0
  );
}
function hy(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(X(169));
  n
    ? ((e = lx(e, t, Eo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      et(sn),
      et(Ut),
      Qe(Ut, e))
    : et(sn),
    Qe(sn, n);
}
var $r = null,
  qc = !1,
  Yd = !1;
function ax(e) {
  $r === null ? ($r = [e]) : $r.push(e);
}
function sN(e) {
  (qc = !0), ax(e);
}
function Fi() {
  if (!Yd && $r !== null) {
    Yd = !0;
    var e = 0,
      t = We;
    try {
      var n = $r;
      for (We = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($r = null), (qc = !1);
    } catch (i) {
      throw ($r !== null && ($r = $r.slice(e + 1)), Mw(nm, Fi), i);
    } finally {
      (We = t), (Yd = !1);
    }
  }
  return null;
}
var hs = [],
  ms = 0,
  pc = null,
  hc = 0,
  $n = [],
  Wn = 0,
  _o = null,
  Wr = 1,
  Hr = "";
function lo(e, t) {
  (hs[ms++] = hc), (hs[ms++] = pc), (pc = e), (hc = t);
}
function ux(e, t, n) {
  ($n[Wn++] = Wr), ($n[Wn++] = Hr), ($n[Wn++] = _o), (_o = e);
  var r = Wr;
  e = Hr;
  var i = 32 - ur(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - ur(t) + i;
  if (30 < s) {
    var a = i - (i % 5);
    (s = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (Wr = (1 << (32 - ur(t) + i)) | (n << i) | r),
      (Hr = s + e);
  } else (Wr = (1 << s) | (n << i) | r), (Hr = e);
}
function fm(e) {
  e.return !== null && (lo(e, 1), ux(e, 1, 0));
}
function dm(e) {
  for (; e === pc; )
    (pc = hs[--ms]), (hs[ms] = null), (hc = hs[--ms]), (hs[ms] = null);
  for (; e === _o; )
    (_o = $n[--Wn]),
      ($n[Wn] = null),
      (Hr = $n[--Wn]),
      ($n[Wn] = null),
      (Wr = $n[--Wn]),
      ($n[Wn] = null);
}
var _n = null,
  Sn = null,
  rt = !1,
  lr = null;
function cx(e, t) {
  var n = Hn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function my(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (_n = e), (Sn = Ri(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (_n = e), (Sn = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = _o !== null ? { id: Wr, overflow: Hr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Hn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (_n = e),
            (Sn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Zp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function eh(e) {
  if (rt) {
    var t = Sn;
    if (t) {
      var n = t;
      if (!my(e, t)) {
        if (Zp(e)) throw Error(X(418));
        t = Ri(n.nextSibling);
        var r = _n;
        t && my(e, t)
          ? cx(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (rt = !1), (_n = e));
      }
    } else {
      if (Zp(e)) throw Error(X(418));
      (e.flags = (e.flags & -4097) | 2), (rt = !1), (_n = e);
    }
  }
}
function gy(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _n = e;
}
function Nu(e) {
  if (e !== _n) return !1;
  if (!rt) return gy(e), (rt = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Yp(e.type, e.memoizedProps))),
    t && (t = Sn))
  ) {
    if (Zp(e)) throw (fx(), Error(X(418)));
    for (; t; ) cx(e, t), (t = Ri(t.nextSibling));
  }
  if ((gy(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(X(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Sn = Ri(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Sn = null;
    }
  } else Sn = _n ? Ri(e.stateNode.nextSibling) : null;
  return !0;
}
function fx() {
  for (var e = Sn; e; ) e = Ri(e.nextSibling);
}
function Ns() {
  (Sn = _n = null), (rt = !1);
}
function pm(e) {
  lr === null ? (lr = [e]) : lr.push(e);
}
var lN = Zr.ReactCurrentBatchConfig;
function vl(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(X(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(X(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (a) {
            var u = i.refs;
            a === null ? delete u[s] : (u[s] = a);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(X(284));
    if (!n._owner) throw Error(X(290, e));
  }
  return e;
}
function Ou(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      X(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function vy(e) {
  var t = e._init;
  return t(e._payload);
}
function dx(e) {
  function t(y, S) {
    if (e) {
      var w = y.deletions;
      w === null ? ((y.deletions = [S]), (y.flags |= 16)) : w.push(S);
    }
  }
  function n(y, S) {
    if (!e) return null;
    for (; S !== null; ) t(y, S), (S = S.sibling);
    return null;
  }
  function r(y, S) {
    for (y = new Map(); S !== null; )
      S.key !== null ? y.set(S.key, S) : y.set(S.index, S), (S = S.sibling);
    return y;
  }
  function i(y, S) {
    return (y = ki(y, S)), (y.index = 0), (y.sibling = null), y;
  }
  function s(y, S, w) {
    return (
      (y.index = w),
      e
        ? ((w = y.alternate),
          w !== null
            ? ((w = w.index), w < S ? ((y.flags |= 2), S) : w)
            : ((y.flags |= 2), S))
        : ((y.flags |= 1048576), S)
    );
  }
  function a(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function u(y, S, w, P) {
    return S === null || S.tag !== 6
      ? ((S = np(w, y.mode, P)), (S.return = y), S)
      : ((S = i(S, w)), (S.return = y), S);
  }
  function c(y, S, w, P) {
    var j = w.type;
    return j === as
      ? p(y, S, w.props.children, P, w.key)
      : S !== null &&
        (S.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === yi &&
            vy(j) === S.type))
      ? ((P = i(S, w.props)), (P.ref = vl(y, S, w)), (P.return = y), P)
      : ((P = Qu(w.type, w.key, w.props, null, y.mode, P)),
        (P.ref = vl(y, S, w)),
        (P.return = y),
        P);
  }
  function d(y, S, w, P) {
    return S === null ||
      S.tag !== 4 ||
      S.stateNode.containerInfo !== w.containerInfo ||
      S.stateNode.implementation !== w.implementation
      ? ((S = rp(w, y.mode, P)), (S.return = y), S)
      : ((S = i(S, w.children || [])), (S.return = y), S);
  }
  function p(y, S, w, P, j) {
    return S === null || S.tag !== 7
      ? ((S = wo(w, y.mode, P, j)), (S.return = y), S)
      : ((S = i(S, w)), (S.return = y), S);
  }
  function m(y, S, w) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (S = np("" + S, y.mode, w)), (S.return = y), S;
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case wu:
          return (
            (w = Qu(S.type, S.key, S.props, null, y.mode, w)),
            (w.ref = vl(y, null, S)),
            (w.return = y),
            w
          );
        case ls:
          return (S = rp(S, y.mode, w)), (S.return = y), S;
        case yi:
          var P = S._init;
          return m(y, P(S._payload), w);
      }
      if (Pl(S) || dl(S))
        return (S = wo(S, y.mode, w, null)), (S.return = y), S;
      Ou(y, S);
    }
    return null;
  }
  function g(y, S, w, P) {
    var j = S !== null ? S.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return j !== null ? null : u(y, S, "" + w, P);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case wu:
          return w.key === j ? c(y, S, w, P) : null;
        case ls:
          return w.key === j ? d(y, S, w, P) : null;
        case yi:
          return (j = w._init), g(y, S, j(w._payload), P);
      }
      if (Pl(w) || dl(w)) return j !== null ? null : p(y, S, w, P, null);
      Ou(y, w);
    }
    return null;
  }
  function _(y, S, w, P, j) {
    if ((typeof P == "string" && P !== "") || typeof P == "number")
      return (y = y.get(w) || null), u(S, y, "" + P, j);
    if (typeof P == "object" && P !== null) {
      switch (P.$$typeof) {
        case wu:
          return (y = y.get(P.key === null ? w : P.key) || null), c(S, y, P, j);
        case ls:
          return (y = y.get(P.key === null ? w : P.key) || null), d(S, y, P, j);
        case yi:
          var N = P._init;
          return _(y, S, w, N(P._payload), j);
      }
      if (Pl(P) || dl(P)) return (y = y.get(w) || null), p(S, y, P, j, null);
      Ou(S, P);
    }
    return null;
  }
  function b(y, S, w, P) {
    for (
      var j = null, N = null, H = S, D = (S = 0), V = null;
      H !== null && D < w.length;
      D++
    ) {
      H.index > D ? ((V = H), (H = null)) : (V = H.sibling);
      var U = g(y, H, w[D], P);
      if (U === null) {
        H === null && (H = V);
        break;
      }
      e && H && U.alternate === null && t(y, H),
        (S = s(U, S, D)),
        N === null ? (j = U) : (N.sibling = U),
        (N = U),
        (H = V);
    }
    if (D === w.length) return n(y, H), rt && lo(y, D), j;
    if (H === null) {
      for (; D < w.length; D++)
        (H = m(y, w[D], P)),
          H !== null &&
            ((S = s(H, S, D)), N === null ? (j = H) : (N.sibling = H), (N = H));
      return rt && lo(y, D), j;
    }
    for (H = r(y, H); D < w.length; D++)
      (V = _(H, y, D, w[D], P)),
        V !== null &&
          (e && V.alternate !== null && H.delete(V.key === null ? D : V.key),
          (S = s(V, S, D)),
          N === null ? (j = V) : (N.sibling = V),
          (N = V));
    return (
      e &&
        H.forEach(function (J) {
          return t(y, J);
        }),
      rt && lo(y, D),
      j
    );
  }
  function T(y, S, w, P) {
    var j = dl(w);
    if (typeof j != "function") throw Error(X(150));
    if (((w = j.call(w)), w == null)) throw Error(X(151));
    for (
      var N = (j = null), H = S, D = (S = 0), V = null, U = w.next();
      H !== null && !U.done;
      D++, U = w.next()
    ) {
      H.index > D ? ((V = H), (H = null)) : (V = H.sibling);
      var J = g(y, H, U.value, P);
      if (J === null) {
        H === null && (H = V);
        break;
      }
      e && H && J.alternate === null && t(y, H),
        (S = s(J, S, D)),
        N === null ? (j = J) : (N.sibling = J),
        (N = J),
        (H = V);
    }
    if (U.done) return n(y, H), rt && lo(y, D), j;
    if (H === null) {
      for (; !U.done; D++, U = w.next())
        (U = m(y, U.value, P)),
          U !== null &&
            ((S = s(U, S, D)), N === null ? (j = U) : (N.sibling = U), (N = U));
      return rt && lo(y, D), j;
    }
    for (H = r(y, H); !U.done; D++, U = w.next())
      (U = _(H, y, D, U.value, P)),
        U !== null &&
          (e && U.alternate !== null && H.delete(U.key === null ? D : U.key),
          (S = s(U, S, D)),
          N === null ? (j = U) : (N.sibling = U),
          (N = U));
    return (
      e &&
        H.forEach(function (Q) {
          return t(y, Q);
        }),
      rt && lo(y, D),
      j
    );
  }
  function O(y, S, w, P) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === as &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case wu:
          e: {
            for (var j = w.key, N = S; N !== null; ) {
              if (N.key === j) {
                if (((j = w.type), j === as)) {
                  if (N.tag === 7) {
                    n(y, N.sibling),
                      (S = i(N, w.props.children)),
                      (S.return = y),
                      (y = S);
                    break e;
                  }
                } else if (
                  N.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === yi &&
                    vy(j) === N.type)
                ) {
                  n(y, N.sibling),
                    (S = i(N, w.props)),
                    (S.ref = vl(y, N, w)),
                    (S.return = y),
                    (y = S);
                  break e;
                }
                n(y, N);
                break;
              } else t(y, N);
              N = N.sibling;
            }
            w.type === as
              ? ((S = wo(w.props.children, y.mode, P, w.key)),
                (S.return = y),
                (y = S))
              : ((P = Qu(w.type, w.key, w.props, null, y.mode, P)),
                (P.ref = vl(y, S, w)),
                (P.return = y),
                (y = P));
          }
          return a(y);
        case ls:
          e: {
            for (N = w.key; S !== null; ) {
              if (S.key === N)
                if (
                  S.tag === 4 &&
                  S.stateNode.containerInfo === w.containerInfo &&
                  S.stateNode.implementation === w.implementation
                ) {
                  n(y, S.sibling),
                    (S = i(S, w.children || [])),
                    (S.return = y),
                    (y = S);
                  break e;
                } else {
                  n(y, S);
                  break;
                }
              else t(y, S);
              S = S.sibling;
            }
            (S = rp(w, y.mode, P)), (S.return = y), (y = S);
          }
          return a(y);
        case yi:
          return (N = w._init), O(y, S, N(w._payload), P);
      }
      if (Pl(w)) return b(y, S, w, P);
      if (dl(w)) return T(y, S, w, P);
      Ou(y, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        S !== null && S.tag === 6
          ? (n(y, S.sibling), (S = i(S, w)), (S.return = y), (y = S))
          : (n(y, S), (S = np(w, y.mode, P)), (S.return = y), (y = S)),
        a(y))
      : n(y, S);
  }
  return O;
}
var Os = dx(!0),
  px = dx(!1),
  mc = Di(null),
  gc = null,
  gs = null,
  hm = null;
function mm() {
  hm = gs = gc = null;
}
function gm(e) {
  var t = mc.current;
  et(mc), (e._currentValue = t);
}
function th(e, t, n) {
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
function bs(e, t) {
  (gc = e),
    (hm = gs = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (on = !0), (e.firstContext = null));
}
function Kn(e) {
  var t = e._currentValue;
  if (hm !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), gs === null)) {
      if (gc === null) throw Error(X(308));
      (gs = e), (gc.dependencies = { lanes: 0, firstContext: e });
    } else gs = gs.next = e;
  return t;
}
var po = null;
function vm(e) {
  po === null ? (po = [e]) : po.push(e);
}
function hx(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), vm(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Yr(e, r)
  );
}
function Yr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var wi = !1;
function ym(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function mx(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Vr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ni(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Ie & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Yr(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), vm(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Yr(e, n)
  );
}
function Hu(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), rm(e, n);
  }
}
function yy(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = a) : (s = s.next = a), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function vc(e, t, n, r) {
  var i = e.updateQueue;
  wi = !1;
  var s = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var c = u,
      d = c.next;
    (c.next = null), a === null ? (s = d) : (a.next = d), (a = c);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== a &&
        (u === null ? (p.firstBaseUpdate = d) : (u.next = d),
        (p.lastBaseUpdate = c)));
  }
  if (s !== null) {
    var m = i.baseState;
    (a = 0), (p = d = c = null), (u = s);
    do {
      var g = u.lane,
        _ = u.eventTime;
      if ((r & g) === g) {
        p !== null &&
          (p = p.next =
            {
              eventTime: _,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var b = e,
            T = u;
          switch (((g = t), (_ = n), T.tag)) {
            case 1:
              if (((b = T.payload), typeof b == "function")) {
                m = b.call(_, m, g);
                break e;
              }
              m = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = T.payload),
                (g = typeof b == "function" ? b.call(_, m, g) : b),
                g == null)
              )
                break e;
              m = at({}, m, g);
              break e;
            case 2:
              wi = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (g = i.effects),
          g === null ? (i.effects = [u]) : g.push(u));
      } else
        (_ = {
          eventTime: _,
          lane: g,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((d = p = _), (c = m)) : (p = p.next = _),
          (a |= g);
      if (((u = u.next), u === null)) {
        if (((u = i.shared.pending), u === null)) break;
        (g = u),
          (u = g.next),
          (g.next = null),
          (i.lastBaseUpdate = g),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (c = m),
      (i.baseState = c),
      (i.firstBaseUpdate = d),
      (i.lastBaseUpdate = p),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Co |= a), (e.lanes = a), (e.memoizedState = m);
  }
}
function wy(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(X(191, i));
        i.call(r);
      }
    }
}
var ga = {},
  Cr = Di(ga),
  ea = Di(ga),
  ta = Di(ga);
function ho(e) {
  if (e === ga) throw Error(X(174));
  return e;
}
function wm(e, t) {
  switch ((Qe(ta, t), Qe(ea, e), Qe(Cr, ga), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ip(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ip(t, e));
  }
  et(Cr), Qe(Cr, t);
}
function Ls() {
  et(Cr), et(ea), et(ta);
}
function gx(e) {
  ho(ta.current);
  var t = ho(Cr.current),
    n = Ip(t, e.type);
  t !== n && (Qe(ea, e), Qe(Cr, n));
}
function xm(e) {
  ea.current === e && (et(Cr), et(ea));
}
var st = Di(0);
function yc(e) {
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
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Qd = [];
function Sm() {
  for (var e = 0; e < Qd.length; e++)
    Qd[e]._workInProgressVersionPrimary = null;
  Qd.length = 0;
}
var Vu = Zr.ReactCurrentDispatcher,
  Xd = Zr.ReactCurrentBatchConfig,
  bo = 0,
  lt = null,
  bt = null,
  Rt = null,
  wc = !1,
  Dl = !1,
  na = 0,
  aN = 0;
function Dt() {
  throw Error(X(321));
}
function Em(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!pr(e[n], t[n])) return !1;
  return !0;
}
function _m(e, t, n, r, i, s) {
  if (
    ((bo = s),
    (lt = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vu.current = e === null || e.memoizedState === null ? dN : pN),
    (e = n(r, i)),
    Dl)
  ) {
    s = 0;
    do {
      if (((Dl = !1), (na = 0), 25 <= s)) throw Error(X(301));
      (s += 1),
        (Rt = bt = null),
        (t.updateQueue = null),
        (Vu.current = hN),
        (e = n(r, i));
    } while (Dl);
  }
  if (
    ((Vu.current = xc),
    (t = bt !== null && bt.next !== null),
    (bo = 0),
    (Rt = bt = lt = null),
    (wc = !1),
    t)
  )
    throw Error(X(300));
  return e;
}
function bm() {
  var e = na !== 0;
  return (na = 0), e;
}
function Sr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Rt === null ? (lt.memoizedState = Rt = e) : (Rt = Rt.next = e), Rt;
}
function qn() {
  if (bt === null) {
    var e = lt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = bt.next;
  var t = Rt === null ? lt.memoizedState : Rt.next;
  if (t !== null) (Rt = t), (bt = e);
  else {
    if (e === null) throw Error(X(310));
    (bt = e),
      (e = {
        memoizedState: bt.memoizedState,
        baseState: bt.baseState,
        baseQueue: bt.baseQueue,
        queue: bt.queue,
        next: null,
      }),
      Rt === null ? (lt.memoizedState = Rt = e) : (Rt = Rt.next = e);
  }
  return Rt;
}
function ra(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Jd(e) {
  var t = qn(),
    n = t.queue;
  if (n === null) throw Error(X(311));
  n.lastRenderedReducer = e;
  var r = bt,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = s.next), (s.next = a);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var u = (a = null),
      c = null,
      d = s;
    do {
      var p = d.lane;
      if ((bo & p) === p)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var m = {
          lane: p,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        c === null ? ((u = c = m), (a = r)) : (c = c.next = m),
          (lt.lanes |= p),
          (Co |= p);
      }
      d = d.next;
    } while (d !== null && d !== s);
    c === null ? (a = r) : (c.next = u),
      pr(r, t.memoizedState) || (on = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (lt.lanes |= s), (Co |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Zd(e) {
  var t = qn(),
    n = t.queue;
  if (n === null) throw Error(X(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (s = e(s, a.action)), (a = a.next);
    while (a !== i);
    pr(s, t.memoizedState) || (on = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function vx() {}
function yx(e, t) {
  var n = lt,
    r = qn(),
    i = t(),
    s = !pr(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (on = !0)),
    (r = r.queue),
    Cm(Sx.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Rt !== null && Rt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ia(9, xx.bind(null, n, r, i, t), void 0, null),
      Nt === null)
    )
      throw Error(X(349));
    bo & 30 || wx(n, t, i);
  }
  return i;
}
function wx(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = lt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (lt.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function xx(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ex(t) && _x(e);
}
function Sx(e, t, n) {
  return n(function () {
    Ex(t) && _x(e);
  });
}
function Ex(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pr(e, n);
  } catch {
    return !0;
  }
}
function _x(e) {
  var t = Yr(e, 1);
  t !== null && cr(t, e, 1, -1);
}
function xy(e) {
  var t = Sr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ra,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = fN.bind(null, lt, e)),
    [t.memoizedState, e]
  );
}
function ia(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = lt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (lt.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function bx() {
  return qn().memoizedState;
}
function Gu(e, t, n, r) {
  var i = Sr();
  (lt.flags |= e),
    (i.memoizedState = ia(1 | t, n, void 0, r === void 0 ? null : r));
}
function Yc(e, t, n, r) {
  var i = qn();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (bt !== null) {
    var a = bt.memoizedState;
    if (((s = a.destroy), r !== null && Em(r, a.deps))) {
      i.memoizedState = ia(t, n, s, r);
      return;
    }
  }
  (lt.flags |= e), (i.memoizedState = ia(1 | t, n, s, r));
}
function Sy(e, t) {
  return Gu(8390656, 8, e, t);
}
function Cm(e, t) {
  return Yc(2048, 8, e, t);
}
function Cx(e, t) {
  return Yc(4, 2, e, t);
}
function Tx(e, t) {
  return Yc(4, 4, e, t);
}
function Px(e, t) {
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
function Rx(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Yc(4, 4, Px.bind(null, t, e), n)
  );
}
function Tm() {}
function Nx(e, t) {
  var n = qn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Em(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ox(e, t) {
  var n = qn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Em(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Lx(e, t, n) {
  return bo & 21
    ? (pr(n, t) || ((n = zw()), (lt.lanes |= n), (Co |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (on = !0)), (e.memoizedState = n));
}
function uN(e, t) {
  var n = We;
  (We = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Xd.transition;
  Xd.transition = {};
  try {
    e(!1), t();
  } finally {
    (We = n), (Xd.transition = r);
  }
}
function kx() {
  return qn().memoizedState;
}
function cN(e, t, n) {
  var r = Li(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Mx(e))
  )
    Ax(t, n);
  else if (((n = hx(e, t, n, r)), n !== null)) {
    var i = Yt();
    cr(n, e, r, i), Ix(n, t, r);
  }
}
function fN(e, t, n) {
  var r = Li(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Mx(e)) Ax(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var a = t.lastRenderedState,
          u = s(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = u), pr(u, a))) {
          var c = t.interleaved;
          c === null
            ? ((i.next = i), vm(t))
            : ((i.next = c.next), (c.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = hx(e, t, i, r)),
      n !== null && ((i = Yt()), cr(n, e, r, i), Ix(n, t, r));
  }
}
function Mx(e) {
  var t = e.alternate;
  return e === lt || (t !== null && t === lt);
}
function Ax(e, t) {
  Dl = wc = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ix(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), rm(e, n);
  }
}
var xc = {
    readContext: Kn,
    useCallback: Dt,
    useContext: Dt,
    useEffect: Dt,
    useImperativeHandle: Dt,
    useInsertionEffect: Dt,
    useLayoutEffect: Dt,
    useMemo: Dt,
    useReducer: Dt,
    useRef: Dt,
    useState: Dt,
    useDebugValue: Dt,
    useDeferredValue: Dt,
    useTransition: Dt,
    useMutableSource: Dt,
    useSyncExternalStore: Dt,
    useId: Dt,
    unstable_isNewReconciler: !1,
  },
  dN = {
    readContext: Kn,
    useCallback: function (e, t) {
      return (Sr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Kn,
    useEffect: Sy,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Gu(4194308, 4, Px.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Gu(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Gu(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Sr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Sr();
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
        (e = e.dispatch = cN.bind(null, lt, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Sr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: xy,
    useDebugValue: Tm,
    useDeferredValue: function (e) {
      return (Sr().memoizedState = e);
    },
    useTransition: function () {
      var e = xy(!1),
        t = e[0];
      return (e = uN.bind(null, e[1])), (Sr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = lt,
        i = Sr();
      if (rt) {
        if (n === void 0) throw Error(X(407));
        n = n();
      } else {
        if (((n = t()), Nt === null)) throw Error(X(349));
        bo & 30 || wx(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Sy(Sx.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        ia(9, xx.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Sr(),
        t = Nt.identifierPrefix;
      if (rt) {
        var n = Hr,
          r = Wr;
        (n = (r & ~(1 << (32 - ur(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = na++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = aN++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  pN = {
    readContext: Kn,
    useCallback: Nx,
    useContext: Kn,
    useEffect: Cm,
    useImperativeHandle: Rx,
    useInsertionEffect: Cx,
    useLayoutEffect: Tx,
    useMemo: Ox,
    useReducer: Jd,
    useRef: bx,
    useState: function () {
      return Jd(ra);
    },
    useDebugValue: Tm,
    useDeferredValue: function (e) {
      var t = qn();
      return Lx(t, bt.memoizedState, e);
    },
    useTransition: function () {
      var e = Jd(ra)[0],
        t = qn().memoizedState;
      return [e, t];
    },
    useMutableSource: vx,
    useSyncExternalStore: yx,
    useId: kx,
    unstable_isNewReconciler: !1,
  },
  hN = {
    readContext: Kn,
    useCallback: Nx,
    useContext: Kn,
    useEffect: Cm,
    useImperativeHandle: Rx,
    useInsertionEffect: Cx,
    useLayoutEffect: Tx,
    useMemo: Ox,
    useReducer: Zd,
    useRef: bx,
    useState: function () {
      return Zd(ra);
    },
    useDebugValue: Tm,
    useDeferredValue: function (e) {
      var t = qn();
      return bt === null ? (t.memoizedState = e) : Lx(t, bt.memoizedState, e);
    },
    useTransition: function () {
      var e = Zd(ra)[0],
        t = qn().memoizedState;
      return [e, t];
    },
    useMutableSource: vx,
    useSyncExternalStore: yx,
    useId: kx,
    unstable_isNewReconciler: !1,
  };
function ir(e, t) {
  if (e && e.defaultProps) {
    (t = at({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function nh(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : at({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Qc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Yt(),
      i = Li(e),
      s = Vr(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Ni(e, s, i)),
      t !== null && (cr(t, e, i, r), Hu(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Yt(),
      i = Li(e),
      s = Vr(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Ni(e, s, i)),
      t !== null && (cr(t, e, i, r), Hu(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Yt(),
      r = Li(e),
      i = Vr(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ni(e, i, r)),
      t !== null && (cr(t, e, r, n), Hu(t, e, r));
  },
};
function Ey(e, t, n, r, i, s, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ql(n, r) || !Ql(i, s)
      : !0
  );
}
function zx(e, t, n) {
  var r = !1,
    i = Ii,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Kn(s))
      : ((i = ln(t) ? Eo : Ut.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Rs(e, i) : Ii)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Qc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function _y(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Qc.enqueueReplaceState(t, t.state, null);
}
function rh(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), ym(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Kn(s))
    : ((s = ln(t) ? Eo : Ut.current), (i.context = Rs(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (nh(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Qc.enqueueReplaceState(i, i.state, null),
      vc(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ks(e, t) {
  try {
    var n = "",
      r = t;
    do (n += $R(r)), (r = r.return);
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
function ep(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ih(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var mN = typeof WeakMap == "function" ? WeakMap : Map;
function jx(e, t, n) {
  (n = Vr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ec || ((Ec = !0), (hh = r)), ih(e, t);
    }),
    n
  );
}
function Dx(e, t, n) {
  (n = Vr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ih(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        ih(e, t),
          typeof r != "function" &&
            (Oi === null ? (Oi = new Set([this])) : Oi.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function by(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mN();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = NN.bind(null, e, t, n)), t.then(e, e));
}
function Cy(e) {
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
function Ty(e, t, n, r, i) {
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
              : ((t = Vr(-1, 1)), (t.tag = 2), Ni(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var gN = Zr.ReactCurrentOwner,
  on = !1;
function qt(e, t, n, r) {
  t.child = e === null ? px(t, null, n, r) : Os(t, e.child, n, r);
}
function Py(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    bs(t, i),
    (r = _m(e, t, n, r, s, i)),
    (n = bm()),
    e !== null && !on
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Qr(e, t, i))
      : (rt && n && fm(t), (t.flags |= 1), qt(e, t, r, i), t.child)
  );
}
function Ry(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Am(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Fx(e, t, s, r, i))
      : ((e = Qu(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var a = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ql), n(a, r) && e.ref === t.ref)
    )
      return Qr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = ki(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Fx(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Ql(s, r) && e.ref === t.ref)
      if (((on = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (on = !0);
      else return (t.lanes = e.lanes), Qr(e, t, i);
  }
  return oh(e, t, n, r, i);
}
function Bx(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Qe(ys, yn),
        (yn |= n);
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
          Qe(ys, yn),
          (yn |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        Qe(ys, yn),
        (yn |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Qe(ys, yn),
      (yn |= r);
  return qt(e, t, i, n), t.child;
}
function Ux(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function oh(e, t, n, r, i) {
  var s = ln(n) ? Eo : Ut.current;
  return (
    (s = Rs(t, s)),
    bs(t, i),
    (n = _m(e, t, n, r, s, i)),
    (r = bm()),
    e !== null && !on
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Qr(e, t, i))
      : (rt && r && fm(t), (t.flags |= 1), qt(e, t, n, i), t.child)
  );
}
function Ny(e, t, n, r, i) {
  if (ln(n)) {
    var s = !0;
    dc(t);
  } else s = !1;
  if ((bs(t, i), t.stateNode === null))
    Ku(e, t), zx(t, n, r), rh(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      u = t.memoizedProps;
    a.props = u;
    var c = a.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Kn(d))
      : ((d = ln(n) ? Eo : Ut.current), (d = Rs(t, d)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((u !== r || c !== d) && _y(t, a, r, d)),
      (wi = !1);
    var g = t.memoizedState;
    (a.state = g),
      vc(t, r, a, i),
      (c = t.memoizedState),
      u !== r || g !== c || sn.current || wi
        ? (typeof p == "function" && (nh(t, n, p, r), (c = t.memoizedState)),
          (u = wi || Ey(t, n, u, r, g, c, d))
            ? (m ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (a.props = r),
          (a.state = c),
          (a.context = d),
          (r = u))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      mx(e, t),
      (u = t.memoizedProps),
      (d = t.type === t.elementType ? u : ir(t.type, u)),
      (a.props = d),
      (m = t.pendingProps),
      (g = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Kn(c))
        : ((c = ln(n) ? Eo : Ut.current), (c = Rs(t, c)));
    var _ = n.getDerivedStateFromProps;
    (p =
      typeof _ == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((u !== m || g !== c) && _y(t, a, r, c)),
      (wi = !1),
      (g = t.memoizedState),
      (a.state = g),
      vc(t, r, a, i);
    var b = t.memoizedState;
    u !== m || g !== b || sn.current || wi
      ? (typeof _ == "function" && (nh(t, n, _, r), (b = t.memoizedState)),
        (d = wi || Ey(t, n, d, r, g, b, c) || !1)
          ? (p ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, b, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, b, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (u === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = b)),
        (a.props = r),
        (a.state = b),
        (a.context = c),
        (r = d))
      : (typeof a.componentDidUpdate != "function" ||
          (u === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return sh(e, t, n, r, s, i);
}
function sh(e, t, n, r, i, s) {
  Ux(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && hy(t, n, !1), Qr(e, t, s);
  (r = t.stateNode), (gN.current = t);
  var u =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Os(t, e.child, null, s)), (t.child = Os(t, null, u, s)))
      : qt(e, t, u, s),
    (t.memoizedState = r.state),
    i && hy(t, n, !0),
    t.child
  );
}
function $x(e) {
  var t = e.stateNode;
  t.pendingContext
    ? py(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && py(e, t.context, !1),
    wm(e, t.containerInfo);
}
function Oy(e, t, n, r, i) {
  return Ns(), pm(i), (t.flags |= 256), qt(e, t, n, r), t.child;
}
var lh = { dehydrated: null, treeContext: null, retryLane: 0 };
function ah(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wx(e, t, n) {
  var r = t.pendingProps,
    i = st.current,
    s = !1,
    a = (t.flags & 128) !== 0,
    u;
  if (
    ((u = a) ||
      (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    u
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Qe(st, i & 1),
    e === null)
  )
    return (
      eh(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = Zc(a, r, 0, null)),
              (e = wo(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = ah(n)),
              (t.memoizedState = lh),
              e)
            : Pm(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((u = i.dehydrated), u !== null)))
    return vN(e, t, a, r, u, i, n);
  if (s) {
    (s = r.fallback), (a = t.mode), (i = e.child), (u = i.sibling);
    var c = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = ki(i, c)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      u !== null ? (s = ki(u, s)) : ((s = wo(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? ah(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = lh),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = ki(s, { mode: "visible", children: r.children })),
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
function Pm(e, t) {
  return (
    (t = Zc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Lu(e, t, n, r) {
  return (
    r !== null && pm(r),
    Os(t, e.child, null, n),
    (e = Pm(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function vN(e, t, n, r, i, s, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ep(Error(X(422)))), Lu(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Zc({ mode: "visible", children: r.children }, i, 0, null)),
        (s = wo(s, i, a, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Os(t, e.child, null, a),
        (t.child.memoizedState = ah(a)),
        (t.memoizedState = lh),
        s);
  if (!(t.mode & 1)) return Lu(e, t, a, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (s = Error(X(419))), (r = ep(s, r, void 0)), Lu(e, t, a, r);
  }
  if (((u = (a & e.childLanes) !== 0), on || u)) {
    if (((r = Nt), r !== null)) {
      switch (a & -a) {
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
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Yr(e, i), cr(r, e, i, -1));
    }
    return Mm(), (r = ep(Error(X(421)))), Lu(e, t, a, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ON.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Sn = Ri(i.nextSibling)),
      (_n = t),
      (rt = !0),
      (lr = null),
      e !== null &&
        (($n[Wn++] = Wr),
        ($n[Wn++] = Hr),
        ($n[Wn++] = _o),
        (Wr = e.id),
        (Hr = e.overflow),
        (_o = t)),
      (t = Pm(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ly(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), th(e.return, t, n);
}
function tp(e, t, n, r, i) {
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
function Hx(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((qt(e, t, r.children, n), (r = st.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ly(e, n, t);
        else if (e.tag === 19) Ly(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Qe(st, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && yc(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          tp(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && yc(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        tp(t, !0, n, null, s);
        break;
      case "together":
        tp(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ku(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Qr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Co |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(X(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ki(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ki(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function yN(e, t, n) {
  switch (t.tag) {
    case 3:
      $x(t), Ns();
      break;
    case 5:
      gx(t);
      break;
    case 1:
      ln(t.type) && dc(t);
      break;
    case 4:
      wm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Qe(mc, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Qe(st, st.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Wx(e, t, n)
          : (Qe(st, st.current & 1),
            (e = Qr(e, t, n)),
            e !== null ? e.sibling : null);
      Qe(st, st.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Hx(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Qe(st, st.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Bx(e, t, n);
  }
  return Qr(e, t, n);
}
var Vx, uh, Gx, Kx;
Vx = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
uh = function () {};
Gx = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), ho(Cr.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Lp(e, i)), (r = Lp(e, r)), (s = []);
        break;
      case "select":
        (i = at({}, i, { value: void 0 })),
          (r = at({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Ap(e, i)), (r = Ap(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = cc);
    }
    zp(n, r);
    var a;
    n = null;
    for (d in i)
      if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && i[d] != null)
        if (d === "style") {
          var u = i[d];
          for (a in u) u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Wl.hasOwnProperty(d)
              ? s || (s = [])
              : (s = s || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (
        ((u = i != null ? i[d] : void 0),
        r.hasOwnProperty(d) && c !== u && (c != null || u != null))
      )
        if (d === "style")
          if (u) {
            for (a in u)
              !u.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                u[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else n || (s || (s = []), s.push(d, n)), (n = c);
        else
          d === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (u = u ? u.__html : void 0),
              c != null && u !== c && (s = s || []).push(d, c))
            : d === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (s = s || []).push(d, "" + c)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (Wl.hasOwnProperty(d)
                ? (c != null && d === "onScroll" && Ze("scroll", e),
                  s || u === c || (s = []))
                : (s = s || []).push(d, c));
    }
    n && (s = s || []).push("style", n);
    var d = s;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Kx = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yl(e, t) {
  if (!rt)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ft(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function wN(e, t, n) {
  var r = t.pendingProps;
  switch ((dm(t), t.tag)) {
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
      return Ft(t), null;
    case 1:
      return ln(t.type) && fc(), Ft(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ls(),
        et(sn),
        et(Ut),
        Sm(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Nu(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), lr !== null && (vh(lr), (lr = null)))),
        uh(e, t),
        Ft(t),
        null
      );
    case 5:
      xm(t);
      var i = ho(ta.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Gx(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(X(166));
          return Ft(t), null;
        }
        if (((e = ho(Cr.current)), Nu(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Er] = t), (r[Zl] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ze("cancel", r), Ze("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ze("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Nl.length; i++) Ze(Nl[i], r);
              break;
            case "source":
              Ze("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ze("error", r), Ze("load", r);
              break;
            case "details":
              Ze("toggle", r);
              break;
            case "input":
              Bv(r, s), Ze("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                Ze("invalid", r);
              break;
            case "textarea":
              $v(r, s), Ze("invalid", r);
          }
          zp(n, s), (i = null);
          for (var a in s)
            if (s.hasOwnProperty(a)) {
              var u = s[a];
              a === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ru(r.textContent, u, e),
                    (i = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ru(r.textContent, u, e),
                    (i = ["children", "" + u]))
                : Wl.hasOwnProperty(a) &&
                  u != null &&
                  a === "onScroll" &&
                  Ze("scroll", r);
            }
          switch (n) {
            case "input":
              xu(r), Uv(r, s, !0);
              break;
            case "textarea":
              xu(r), Wv(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = cc);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Sw(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Er] = t),
            (e[Zl] = r),
            Vx(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = jp(n, r)), n)) {
              case "dialog":
                Ze("cancel", e), Ze("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ze("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Nl.length; i++) Ze(Nl[i], e);
                i = r;
                break;
              case "source":
                Ze("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Ze("error", e), Ze("load", e), (i = r);
                break;
              case "details":
                Ze("toggle", e), (i = r);
                break;
              case "input":
                Bv(e, r), (i = Lp(e, r)), Ze("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = at({}, r, { value: void 0 })),
                  Ze("invalid", e);
                break;
              case "textarea":
                $v(e, r), (i = Ap(e, r)), Ze("invalid", e);
                break;
              default:
                i = r;
            }
            zp(n, i), (u = i);
            for (s in u)
              if (u.hasOwnProperty(s)) {
                var c = u[s];
                s === "style"
                  ? bw(e, c)
                  : s === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && Ew(e, c))
                  : s === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && Hl(e, c)
                    : typeof c == "number" && Hl(e, "" + c)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Wl.hasOwnProperty(s)
                      ? c != null && s === "onScroll" && Ze("scroll", e)
                      : c != null && Xh(e, s, c, a));
              }
            switch (n) {
              case "input":
                xu(e), Uv(e, r, !1);
                break;
              case "textarea":
                xu(e), Wv(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ai(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? xs(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      xs(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = cc);
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
      return Ft(t), null;
    case 6:
      if (e && t.stateNode != null) Kx(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(X(166));
        if (((n = ho(ta.current)), ho(Cr.current), Nu(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Er] = t),
            (s = r.nodeValue !== n) && ((e = _n), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ru(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ru(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Er] = t),
            (t.stateNode = r);
      }
      return Ft(t), null;
    case 13:
      if (
        (et(st),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (rt && Sn !== null && t.mode & 1 && !(t.flags & 128))
          fx(), Ns(), (t.flags |= 98560), (s = !1);
        else if (((s = Nu(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(X(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(X(317));
            s[Er] = t;
          } else
            Ns(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ft(t), (s = !1);
        } else lr !== null && (vh(lr), (lr = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || st.current & 1 ? Ct === 0 && (Ct = 3) : Mm())),
          t.updateQueue !== null && (t.flags |= 4),
          Ft(t),
          null);
    case 4:
      return (
        Ls(), uh(e, t), e === null && Xl(t.stateNode.containerInfo), Ft(t), null
      );
    case 10:
      return gm(t.type._context), Ft(t), null;
    case 17:
      return ln(t.type) && fc(), Ft(t), null;
    case 19:
      if ((et(st), (s = t.memoizedState), s === null)) return Ft(t), null;
      if (((r = (t.flags & 128) !== 0), (a = s.rendering), a === null))
        if (r) yl(s, !1);
        else {
          if (Ct !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = yc(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    yl(s, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (a = s.alternate),
                    a === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = a.childLanes),
                        (s.lanes = a.lanes),
                        (s.child = a.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = a.memoizedProps),
                        (s.memoizedState = a.memoizedState),
                        (s.updateQueue = a.updateQueue),
                        (s.type = a.type),
                        (e = a.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Qe(st, (st.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            mt() > Ms &&
            ((t.flags |= 128), (r = !0), yl(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = yc(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yl(s, !0),
              s.tail === null && s.tailMode === "hidden" && !a.alternate && !rt)
            )
              return Ft(t), null;
          } else
            2 * mt() - s.renderingStartTime > Ms &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yl(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = s.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (s.last = a));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = mt()),
          (t.sibling = null),
          (n = st.current),
          Qe(st, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ft(t), null);
    case 22:
    case 23:
      return (
        km(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? yn & 1073741824 && (Ft(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ft(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(X(156, t.tag));
}
function xN(e, t) {
  switch ((dm(t), t.tag)) {
    case 1:
      return (
        ln(t.type) && fc(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ls(),
        et(sn),
        et(Ut),
        Sm(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return xm(t), null;
    case 13:
      if (
        (et(st), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(X(340));
        Ns();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return et(st), null;
    case 4:
      return Ls(), null;
    case 10:
      return gm(t.type._context), null;
    case 22:
    case 23:
      return km(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ku = !1,
  Bt = !1,
  SN = typeof WeakSet == "function" ? WeakSet : Set,
  se = null;
function vs(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        dt(e, t, r);
      }
    else n.current = null;
}
function ch(e, t, n) {
  try {
    n();
  } catch (r) {
    dt(e, t, r);
  }
}
var ky = !1;
function EN(e, t) {
  if (((Kp = lc), (e = Jw()), cm(e))) {
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
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            u = -1,
            c = -1,
            d = 0,
            p = 0,
            m = e,
            g = null;
          t: for (;;) {
            for (
              var _;
              m !== n || (i !== 0 && m.nodeType !== 3) || (u = a + i),
                m !== s || (r !== 0 && m.nodeType !== 3) || (c = a + r),
                m.nodeType === 3 && (a += m.nodeValue.length),
                (_ = m.firstChild) !== null;

            )
              (g = m), (m = _);
            for (;;) {
              if (m === e) break t;
              if (
                (g === n && ++d === i && (u = a),
                g === s && ++p === r && (c = a),
                (_ = m.nextSibling) !== null)
              )
                break;
              (m = g), (g = m.parentNode);
            }
            m = _;
          }
          n = u === -1 || c === -1 ? null : { start: u, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    qp = { focusedElem: e, selectionRange: n }, lc = !1, se = t;
    se !== null;

  )
    if (((t = se), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (se = e);
    else
      for (; se !== null; ) {
        t = se;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var T = b.memoizedProps,
                    O = b.memoizedState,
                    y = t.stateNode,
                    S = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? T : ir(t.type, T),
                      O
                    );
                  y.__reactInternalSnapshotBeforeUpdate = S;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(X(163));
            }
        } catch (P) {
          dt(t, t.return, P);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (se = e);
          break;
        }
        se = t.return;
      }
  return (b = ky), (ky = !1), b;
}
function Fl(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && ch(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Xc(e, t) {
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
function fh(e) {
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
function qx(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), qx(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Er], delete t[Zl], delete t[Xp], delete t[iN], delete t[oN])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Yx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function My(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Yx(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function dh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = cc));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (dh(e, t, n), e = e.sibling; e !== null; ) dh(e, t, n), (e = e.sibling);
}
function ph(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ph(e, t, n), e = e.sibling; e !== null; ) ph(e, t, n), (e = e.sibling);
}
var Mt = null,
  or = !1;
function pi(e, t, n) {
  for (n = n.child; n !== null; ) Qx(e, t, n), (n = n.sibling);
}
function Qx(e, t, n) {
  if (br && typeof br.onCommitFiberUnmount == "function")
    try {
      br.onCommitFiberUnmount(Wc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Bt || vs(n, t);
    case 6:
      var r = Mt,
        i = or;
      (Mt = null),
        pi(e, t, n),
        (Mt = r),
        (or = i),
        Mt !== null &&
          (or
            ? ((e = Mt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Mt.removeChild(n.stateNode));
      break;
    case 18:
      Mt !== null &&
        (or
          ? ((e = Mt),
            (n = n.stateNode),
            e.nodeType === 8
              ? qd(e.parentNode, n)
              : e.nodeType === 1 && qd(e, n),
            ql(e))
          : qd(Mt, n.stateNode));
      break;
    case 4:
      (r = Mt),
        (i = or),
        (Mt = n.stateNode.containerInfo),
        (or = !0),
        pi(e, t, n),
        (Mt = r),
        (or = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Bt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            a = s.destroy;
          (s = s.tag),
            a !== void 0 && (s & 2 || s & 4) && ch(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      pi(e, t, n);
      break;
    case 1:
      if (
        !Bt &&
        (vs(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          dt(n, t, u);
        }
      pi(e, t, n);
      break;
    case 21:
      pi(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Bt = (r = Bt) || n.memoizedState !== null), pi(e, t, n), (Bt = r))
        : pi(e, t, n);
      break;
    default:
      pi(e, t, n);
  }
}
function Ay(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new SN()),
      t.forEach(function (r) {
        var i = LN.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function rr(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          a = t,
          u = a;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Mt = u.stateNode), (or = !1);
              break e;
            case 3:
              (Mt = u.stateNode.containerInfo), (or = !0);
              break e;
            case 4:
              (Mt = u.stateNode.containerInfo), (or = !0);
              break e;
          }
          u = u.return;
        }
        if (Mt === null) throw Error(X(160));
        Qx(s, a, i), (Mt = null), (or = !1);
        var c = i.alternate;
        c !== null && (c.return = null), (i.return = null);
      } catch (d) {
        dt(i, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Xx(t, e), (t = t.sibling);
}
function Xx(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((rr(t, e), xr(e), r & 4)) {
        try {
          Fl(3, e, e.return), Xc(3, e);
        } catch (T) {
          dt(e, e.return, T);
        }
        try {
          Fl(5, e, e.return);
        } catch (T) {
          dt(e, e.return, T);
        }
      }
      break;
    case 1:
      rr(t, e), xr(e), r & 512 && n !== null && vs(n, n.return);
      break;
    case 5:
      if (
        (rr(t, e),
        xr(e),
        r & 512 && n !== null && vs(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Hl(i, "");
        } catch (T) {
          dt(e, e.return, T);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          a = n !== null ? n.memoizedProps : s,
          u = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            u === "input" && s.type === "radio" && s.name != null && ww(i, s),
              jp(u, a);
            var d = jp(u, s);
            for (a = 0; a < c.length; a += 2) {
              var p = c[a],
                m = c[a + 1];
              p === "style"
                ? bw(i, m)
                : p === "dangerouslySetInnerHTML"
                ? Ew(i, m)
                : p === "children"
                ? Hl(i, m)
                : Xh(i, p, m, d);
            }
            switch (u) {
              case "input":
                kp(i, s);
                break;
              case "textarea":
                xw(i, s);
                break;
              case "select":
                var g = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var _ = s.value;
                _ != null
                  ? xs(i, !!s.multiple, _, !1)
                  : g !== !!s.multiple &&
                    (s.defaultValue != null
                      ? xs(i, !!s.multiple, s.defaultValue, !0)
                      : xs(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Zl] = s;
          } catch (T) {
            dt(e, e.return, T);
          }
      }
      break;
    case 6:
      if ((rr(t, e), xr(e), r & 4)) {
        if (e.stateNode === null) throw Error(X(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (T) {
          dt(e, e.return, T);
        }
      }
      break;
    case 3:
      if (
        (rr(t, e), xr(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ql(t.containerInfo);
        } catch (T) {
          dt(e, e.return, T);
        }
      break;
    case 4:
      rr(t, e), xr(e);
      break;
    case 13:
      rr(t, e),
        xr(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Om = mt())),
        r & 4 && Ay(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Bt = (d = Bt) || p), rr(t, e), (Bt = d)) : rr(t, e),
        xr(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !p && e.mode & 1)
        )
          for (se = e, p = e.child; p !== null; ) {
            for (m = se = p; se !== null; ) {
              switch (((g = se), (_ = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fl(4, g, g.return);
                  break;
                case 1:
                  vs(g, g.return);
                  var b = g.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount();
                    } catch (T) {
                      dt(r, n, T);
                    }
                  }
                  break;
                case 5:
                  vs(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    zy(m);
                    continue;
                  }
              }
              _ !== null ? ((_.return = g), (se = _)) : zy(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                (i = m.stateNode),
                  d
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((u = m.stateNode),
                      (c = m.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (u.style.display = _w("display", a)));
              } catch (T) {
                dt(e, e.return, T);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = d ? "" : m.memoizedProps;
              } catch (T) {
                dt(e, e.return, T);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            p === m && (p = null), (m = m.return);
          }
          p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      rr(t, e), xr(e), r & 4 && Ay(e);
      break;
    case 21:
      break;
    default:
      rr(t, e), xr(e);
  }
}
function xr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Yx(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(X(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Hl(i, ""), (r.flags &= -33));
          var s = My(e);
          ph(e, s, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            u = My(e);
          dh(e, u, a);
          break;
        default:
          throw Error(X(161));
      }
    } catch (c) {
      dt(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function _N(e, t, n) {
  (se = e), Jx(e);
}
function Jx(e, t, n) {
  for (var r = (e.mode & 1) !== 0; se !== null; ) {
    var i = se,
      s = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || ku;
      if (!a) {
        var u = i.alternate,
          c = (u !== null && u.memoizedState !== null) || Bt;
        u = ku;
        var d = Bt;
        if (((ku = a), (Bt = c) && !d))
          for (se = i; se !== null; )
            (a = se),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? jy(i)
                : c !== null
                ? ((c.return = a), (se = c))
                : jy(i);
        for (; s !== null; ) (se = s), Jx(s), (s = s.sibling);
        (se = i), (ku = u), (Bt = d);
      }
      Iy(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (se = s)) : Iy(e);
  }
}
function Iy(e) {
  for (; se !== null; ) {
    var t = se;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Bt || Xc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Bt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ir(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && wy(t, s, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                wy(t, a, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
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
                var d = t.alternate;
                if (d !== null) {
                  var p = d.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && ql(m);
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
              throw Error(X(163));
          }
        Bt || (t.flags & 512 && fh(t));
      } catch (g) {
        dt(t, t.return, g);
      }
    }
    if (t === e) {
      se = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (se = n);
      break;
    }
    se = t.return;
  }
}
function zy(e) {
  for (; se !== null; ) {
    var t = se;
    if (t === e) {
      se = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (se = n);
      break;
    }
    se = t.return;
  }
}
function jy(e) {
  for (; se !== null; ) {
    var t = se;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Xc(4, t);
          } catch (c) {
            dt(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              dt(t, i, c);
            }
          }
          var s = t.return;
          try {
            fh(t);
          } catch (c) {
            dt(t, s, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            fh(t);
          } catch (c) {
            dt(t, a, c);
          }
      }
    } catch (c) {
      dt(t, t.return, c);
    }
    if (t === e) {
      se = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (se = u);
      break;
    }
    se = t.return;
  }
}
var bN = Math.ceil,
  Sc = Zr.ReactCurrentDispatcher,
  Rm = Zr.ReactCurrentOwner,
  Vn = Zr.ReactCurrentBatchConfig,
  Ie = 0,
  Nt = null,
  wt = null,
  At = 0,
  yn = 0,
  ys = Di(0),
  Ct = 0,
  oa = null,
  Co = 0,
  Jc = 0,
  Nm = 0,
  Bl = null,
  rn = null,
  Om = 0,
  Ms = 1 / 0,
  Ur = null,
  Ec = !1,
  hh = null,
  Oi = null,
  Mu = !1,
  _i = null,
  _c = 0,
  Ul = 0,
  mh = null,
  qu = -1,
  Yu = 0;
function Yt() {
  return Ie & 6 ? mt() : qu !== -1 ? qu : (qu = mt());
}
function Li(e) {
  return e.mode & 1
    ? Ie & 2 && At !== 0
      ? At & -At
      : lN.transition !== null
      ? (Yu === 0 && (Yu = zw()), Yu)
      : ((e = We),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ww(e.type))),
        e)
    : 1;
}
function cr(e, t, n, r) {
  if (50 < Ul) throw ((Ul = 0), (mh = null), Error(X(185)));
  pa(e, n, r),
    (!(Ie & 2) || e !== Nt) &&
      (e === Nt && (!(Ie & 2) && (Jc |= n), Ct === 4 && Si(e, At)),
      an(e, r),
      n === 1 && Ie === 0 && !(t.mode & 1) && ((Ms = mt() + 500), qc && Fi()));
}
function an(e, t) {
  var n = e.callbackNode;
  l3(e, t);
  var r = sc(e, e === Nt ? At : 0);
  if (r === 0)
    n !== null && Gv(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Gv(n), t === 1))
      e.tag === 0 ? sN(Dy.bind(null, e)) : ax(Dy.bind(null, e)),
        nN(function () {
          !(Ie & 6) && Fi();
        }),
        (n = null);
    else {
      switch (jw(r)) {
        case 1:
          n = nm;
          break;
        case 4:
          n = Aw;
          break;
        case 16:
          n = oc;
          break;
        case 536870912:
          n = Iw;
          break;
        default:
          n = oc;
      }
      n = s2(n, Zx.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Zx(e, t) {
  if (((qu = -1), (Yu = 0), Ie & 6)) throw Error(X(327));
  var n = e.callbackNode;
  if (Cs() && e.callbackNode !== n) return null;
  var r = sc(e, e === Nt ? At : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = bc(e, r);
  else {
    t = r;
    var i = Ie;
    Ie |= 2;
    var s = t2();
    (Nt !== e || At !== t) && ((Ur = null), (Ms = mt() + 500), yo(e, t));
    do
      try {
        PN();
        break;
      } catch (u) {
        e2(e, u);
      }
    while (!0);
    mm(),
      (Sc.current = s),
      (Ie = i),
      wt !== null ? (t = 0) : ((Nt = null), (At = 0), (t = Ct));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = $p(e)), i !== 0 && ((r = i), (t = gh(e, i)))), t === 1)
    )
      throw ((n = oa), yo(e, 0), Si(e, r), an(e, mt()), n);
    if (t === 6) Si(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !CN(i) &&
          ((t = bc(e, r)),
          t === 2 && ((s = $p(e)), s !== 0 && ((r = s), (t = gh(e, s)))),
          t === 1))
      )
        throw ((n = oa), yo(e, 0), Si(e, r), an(e, mt()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(X(345));
        case 2:
          ao(e, rn, Ur);
          break;
        case 3:
          if (
            (Si(e, r), (r & 130023424) === r && ((t = Om + 500 - mt()), 10 < t))
          ) {
            if (sc(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Yt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Qp(ao.bind(null, e, rn, Ur), t);
            break;
          }
          ao(e, rn, Ur);
          break;
        case 4:
          if ((Si(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - ur(r);
            (s = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~s);
          }
          if (
            ((r = i),
            (r = mt() - r),
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
                : 1960 * bN(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Qp(ao.bind(null, e, rn, Ur), r);
            break;
          }
          ao(e, rn, Ur);
          break;
        case 5:
          ao(e, rn, Ur);
          break;
        default:
          throw Error(X(329));
      }
    }
  }
  return an(e, mt()), e.callbackNode === n ? Zx.bind(null, e) : null;
}
function gh(e, t) {
  var n = Bl;
  return (
    e.current.memoizedState.isDehydrated && (yo(e, t).flags |= 256),
    (e = bc(e, t)),
    e !== 2 && ((t = rn), (rn = n), t !== null && vh(t)),
    e
  );
}
function vh(e) {
  rn === null ? (rn = e) : rn.push.apply(rn, e);
}
function CN(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!pr(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Si(e, t) {
  for (
    t &= ~Nm,
      t &= ~Jc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ur(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Dy(e) {
  if (Ie & 6) throw Error(X(327));
  Cs();
  var t = sc(e, 0);
  if (!(t & 1)) return an(e, mt()), null;
  var n = bc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = $p(e);
    r !== 0 && ((t = r), (n = gh(e, r)));
  }
  if (n === 1) throw ((n = oa), yo(e, 0), Si(e, t), an(e, mt()), n);
  if (n === 6) throw Error(X(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ao(e, rn, Ur),
    an(e, mt()),
    null
  );
}
function Lm(e, t) {
  var n = Ie;
  Ie |= 1;
  try {
    return e(t);
  } finally {
    (Ie = n), Ie === 0 && ((Ms = mt() + 500), qc && Fi());
  }
}
function To(e) {
  _i !== null && _i.tag === 0 && !(Ie & 6) && Cs();
  var t = Ie;
  Ie |= 1;
  var n = Vn.transition,
    r = We;
  try {
    if (((Vn.transition = null), (We = 1), e)) return e();
  } finally {
    (We = r), (Vn.transition = n), (Ie = t), !(Ie & 6) && Fi();
  }
}
function km() {
  (yn = ys.current), et(ys);
}
function yo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tN(n)), wt !== null))
    for (n = wt.return; n !== null; ) {
      var r = n;
      switch ((dm(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && fc();
          break;
        case 3:
          Ls(), et(sn), et(Ut), Sm();
          break;
        case 5:
          xm(r);
          break;
        case 4:
          Ls();
          break;
        case 13:
          et(st);
          break;
        case 19:
          et(st);
          break;
        case 10:
          gm(r.type._context);
          break;
        case 22:
        case 23:
          km();
      }
      n = n.return;
    }
  if (
    ((Nt = e),
    (wt = e = ki(e.current, null)),
    (At = yn = t),
    (Ct = 0),
    (oa = null),
    (Nm = Jc = Co = 0),
    (rn = Bl = null),
    po !== null)
  ) {
    for (t = 0; t < po.length; t++)
      if (((n = po[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var a = s.next;
          (s.next = i), (r.next = a);
        }
        n.pending = r;
      }
    po = null;
  }
  return e;
}
function e2(e, t) {
  do {
    var n = wt;
    try {
      if ((mm(), (Vu.current = xc), wc)) {
        for (var r = lt.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        wc = !1;
      }
      if (
        ((bo = 0),
        (Rt = bt = lt = null),
        (Dl = !1),
        (na = 0),
        (Rm.current = null),
        n === null || n.return === null)
      ) {
        (Ct = 1), (oa = t), (wt = null);
        break;
      }
      e: {
        var s = e,
          a = n.return,
          u = n,
          c = t;
        if (
          ((t = At),
          (u.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var d = c,
            p = u,
            m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var g = p.alternate;
            g
              ? ((p.updateQueue = g.updateQueue),
                (p.memoizedState = g.memoizedState),
                (p.lanes = g.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var _ = Cy(a);
          if (_ !== null) {
            (_.flags &= -257),
              Ty(_, a, u, s, t),
              _.mode & 1 && by(s, d, t),
              (t = _),
              (c = d);
            var b = t.updateQueue;
            if (b === null) {
              var T = new Set();
              T.add(c), (t.updateQueue = T);
            } else b.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              by(s, d, t), Mm();
              break e;
            }
            c = Error(X(426));
          }
        } else if (rt && u.mode & 1) {
          var O = Cy(a);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256),
              Ty(O, a, u, s, t),
              pm(ks(c, u));
            break e;
          }
        }
        (s = c = ks(c, u)),
          Ct !== 4 && (Ct = 2),
          Bl === null ? (Bl = [s]) : Bl.push(s),
          (s = a);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var y = jx(s, c, t);
              yy(s, y);
              break e;
            case 1:
              u = c;
              var S = s.type,
                w = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof S.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (Oi === null || !Oi.has(w))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var P = Dx(s, u, t);
                yy(s, P);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      r2(n);
    } catch (j) {
      (t = j), wt === n && n !== null && (wt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function t2() {
  var e = Sc.current;
  return (Sc.current = xc), e === null ? xc : e;
}
function Mm() {
  (Ct === 0 || Ct === 3 || Ct === 2) && (Ct = 4),
    Nt === null || (!(Co & 268435455) && !(Jc & 268435455)) || Si(Nt, At);
}
function bc(e, t) {
  var n = Ie;
  Ie |= 2;
  var r = t2();
  (Nt !== e || At !== t) && ((Ur = null), yo(e, t));
  do
    try {
      TN();
      break;
    } catch (i) {
      e2(e, i);
    }
  while (!0);
  if ((mm(), (Ie = n), (Sc.current = r), wt !== null)) throw Error(X(261));
  return (Nt = null), (At = 0), Ct;
}
function TN() {
  for (; wt !== null; ) n2(wt);
}
function PN() {
  for (; wt !== null && !JR(); ) n2(wt);
}
function n2(e) {
  var t = o2(e.alternate, e, yn);
  (e.memoizedProps = e.pendingProps),
    t === null ? r2(e) : (wt = t),
    (Rm.current = null);
}
function r2(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = xN(n, t)), n !== null)) {
        (n.flags &= 32767), (wt = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ct = 6), (wt = null);
        return;
      }
    } else if (((n = wN(n, t, yn)), n !== null)) {
      wt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      wt = t;
      return;
    }
    wt = t = e;
  } while (t !== null);
  Ct === 0 && (Ct = 5);
}
function ao(e, t, n) {
  var r = We,
    i = Vn.transition;
  try {
    (Vn.transition = null), (We = 1), RN(e, t, n, r);
  } finally {
    (Vn.transition = i), (We = r);
  }
  return null;
}
function RN(e, t, n, r) {
  do Cs();
  while (_i !== null);
  if (Ie & 6) throw Error(X(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(X(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (a3(e, s),
    e === Nt && ((wt = Nt = null), (At = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Mu ||
      ((Mu = !0),
      s2(oc, function () {
        return Cs(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Vn.transition), (Vn.transition = null);
    var a = We;
    We = 1;
    var u = Ie;
    (Ie |= 4),
      (Rm.current = null),
      EN(e, n),
      Xx(n, e),
      q3(qp),
      (lc = !!Kp),
      (qp = Kp = null),
      (e.current = n),
      _N(n),
      ZR(),
      (Ie = u),
      (We = a),
      (Vn.transition = s);
  } else e.current = n;
  if (
    (Mu && ((Mu = !1), (_i = e), (_c = i)),
    (s = e.pendingLanes),
    s === 0 && (Oi = null),
    n3(n.stateNode),
    an(e, mt()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ec) throw ((Ec = !1), (e = hh), (hh = null), e);
  return (
    _c & 1 && e.tag !== 0 && Cs(),
    (s = e.pendingLanes),
    s & 1 ? (e === mh ? Ul++ : ((Ul = 0), (mh = e))) : (Ul = 0),
    Fi(),
    null
  );
}
function Cs() {
  if (_i !== null) {
    var e = jw(_c),
      t = Vn.transition,
      n = We;
    try {
      if (((Vn.transition = null), (We = 16 > e ? 16 : e), _i === null))
        var r = !1;
      else {
        if (((e = _i), (_i = null), (_c = 0), Ie & 6)) throw Error(X(331));
        var i = Ie;
        for (Ie |= 4, se = e.current; se !== null; ) {
          var s = se,
            a = s.child;
          if (se.flags & 16) {
            var u = s.deletions;
            if (u !== null) {
              for (var c = 0; c < u.length; c++) {
                var d = u[c];
                for (se = d; se !== null; ) {
                  var p = se;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fl(8, p, s);
                  }
                  var m = p.child;
                  if (m !== null) (m.return = p), (se = m);
                  else
                    for (; se !== null; ) {
                      p = se;
                      var g = p.sibling,
                        _ = p.return;
                      if ((qx(p), p === d)) {
                        se = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = _), (se = g);
                        break;
                      }
                      se = _;
                    }
                }
              }
              var b = s.alternate;
              if (b !== null) {
                var T = b.child;
                if (T !== null) {
                  b.child = null;
                  do {
                    var O = T.sibling;
                    (T.sibling = null), (T = O);
                  } while (T !== null);
                }
              }
              se = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) (a.return = s), (se = a);
          else
            e: for (; se !== null; ) {
              if (((s = se), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fl(9, s, s.return);
                }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (se = y);
                break e;
              }
              se = s.return;
            }
        }
        var S = e.current;
        for (se = S; se !== null; ) {
          a = se;
          var w = a.child;
          if (a.subtreeFlags & 2064 && w !== null) (w.return = a), (se = w);
          else
            e: for (a = S; se !== null; ) {
              if (((u = se), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xc(9, u);
                  }
                } catch (j) {
                  dt(u, u.return, j);
                }
              if (u === a) {
                se = null;
                break e;
              }
              var P = u.sibling;
              if (P !== null) {
                (P.return = u.return), (se = P);
                break e;
              }
              se = u.return;
            }
        }
        if (
          ((Ie = i), Fi(), br && typeof br.onPostCommitFiberRoot == "function")
        )
          try {
            br.onPostCommitFiberRoot(Wc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (We = n), (Vn.transition = t);
    }
  }
  return !1;
}
function Fy(e, t, n) {
  (t = ks(n, t)),
    (t = jx(e, t, 1)),
    (e = Ni(e, t, 1)),
    (t = Yt()),
    e !== null && (pa(e, 1, t), an(e, t));
}
function dt(e, t, n) {
  if (e.tag === 3) Fy(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fy(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Oi === null || !Oi.has(r)))
        ) {
          (e = ks(n, e)),
            (e = Dx(t, e, 1)),
            (t = Ni(t, e, 1)),
            (e = Yt()),
            t !== null && (pa(t, 1, e), an(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function NN(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Yt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Nt === e &&
      (At & n) === n &&
      (Ct === 4 || (Ct === 3 && (At & 130023424) === At && 500 > mt() - Om)
        ? yo(e, 0)
        : (Nm |= n)),
    an(e, t);
}
function i2(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = _u), (_u <<= 1), !(_u & 130023424) && (_u = 4194304))
      : (t = 1));
  var n = Yt();
  (e = Yr(e, t)), e !== null && (pa(e, t, n), an(e, n));
}
function ON(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), i2(e, n);
}
function LN(e, t) {
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
      throw Error(X(314));
  }
  r !== null && r.delete(t), i2(e, n);
}
var o2;
o2 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || sn.current) on = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (on = !1), yN(e, t, n);
      on = !!(e.flags & 131072);
    }
  else (on = !1), rt && t.flags & 1048576 && ux(t, hc, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ku(e, t), (e = t.pendingProps);
      var i = Rs(t, Ut.current);
      bs(t, n), (i = _m(null, t, r, e, i, n));
      var s = bm();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ln(r) ? ((s = !0), dc(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ym(t),
            (i.updater = Qc),
            (t.stateNode = i),
            (i._reactInternals = t),
            rh(t, r, e, n),
            (t = sh(null, t, r, !0, s, n)))
          : ((t.tag = 0), rt && s && fm(t), qt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ku(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = MN(r)),
          (e = ir(r, e)),
          i)
        ) {
          case 0:
            t = oh(null, t, r, e, n);
            break e;
          case 1:
            t = Ny(null, t, r, e, n);
            break e;
          case 11:
            t = Py(null, t, r, e, n);
            break e;
          case 14:
            t = Ry(null, t, r, ir(r.type, e), n);
            break e;
        }
        throw Error(X(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ir(r, i)),
        oh(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ir(r, i)),
        Ny(e, t, r, i, n)
      );
    case 3:
      e: {
        if (($x(t), e === null)) throw Error(X(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          mx(e, t),
          vc(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = ks(Error(X(423)), t)), (t = Oy(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ks(Error(X(424)), t)), (t = Oy(e, t, r, n, i));
            break e;
          } else
            for (
              Sn = Ri(t.stateNode.containerInfo.firstChild),
                _n = t,
                rt = !0,
                lr = null,
                n = px(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ns(), r === i)) {
            t = Qr(e, t, n);
            break e;
          }
          qt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        gx(t),
        e === null && eh(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Yp(r, i) ? (a = null) : s !== null && Yp(r, s) && (t.flags |= 32),
        Ux(e, t),
        qt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && eh(t), null;
    case 13:
      return Wx(e, t, n);
    case 4:
      return (
        wm(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Os(t, null, r, n)) : qt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ir(r, i)),
        Py(e, t, r, i, n)
      );
    case 7:
      return qt(e, t, t.pendingProps, n), t.child;
    case 8:
      return qt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return qt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (a = i.value),
          Qe(mc, r._currentValue),
          (r._currentValue = a),
          s !== null)
        )
          if (pr(s.value, a)) {
            if (s.children === i.children && !sn.current) {
              t = Qr(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var u = s.dependencies;
              if (u !== null) {
                a = s.child;
                for (var c = u.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (s.tag === 1) {
                      (c = Vr(-1, n & -n)), (c.tag = 2);
                      var d = s.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var p = d.pending;
                        p === null
                          ? (c.next = c)
                          : ((c.next = p.next), (p.next = c)),
                          (d.pending = c);
                      }
                    }
                    (s.lanes |= n),
                      (c = s.alternate),
                      c !== null && (c.lanes |= n),
                      th(s.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((a = s.return), a === null)) throw Error(X(341));
                (a.lanes |= n),
                  (u = a.alternate),
                  u !== null && (u.lanes |= n),
                  th(a, n, t),
                  (a = s.sibling);
              } else a = s.child;
              if (a !== null) a.return = s;
              else
                for (a = s; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((s = a.sibling), s !== null)) {
                    (s.return = a.return), (a = s);
                    break;
                  }
                  a = a.return;
                }
              s = a;
            }
        qt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        bs(t, n),
        (i = Kn(i)),
        (r = r(i)),
        (t.flags |= 1),
        qt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = ir(r, t.pendingProps)),
        (i = ir(r.type, i)),
        Ry(e, t, r, i, n)
      );
    case 15:
      return Fx(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ir(r, i)),
        Ku(e, t),
        (t.tag = 1),
        ln(r) ? ((e = !0), dc(t)) : (e = !1),
        bs(t, n),
        zx(t, r, i),
        rh(t, r, i, n),
        sh(null, t, r, !0, e, n)
      );
    case 19:
      return Hx(e, t, n);
    case 22:
      return Bx(e, t, n);
  }
  throw Error(X(156, t.tag));
};
function s2(e, t) {
  return Mw(e, t);
}
function kN(e, t, n, r) {
  (this.tag = e),
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
    (this.alternate = null);
}
function Hn(e, t, n, r) {
  return new kN(e, t, n, r);
}
function Am(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function MN(e) {
  if (typeof e == "function") return Am(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Zh)) return 11;
    if (e === em) return 14;
  }
  return 2;
}
function ki(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Hn(e.tag, t, e.key, e.mode)),
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
function Qu(e, t, n, r, i, s) {
  var a = 2;
  if (((r = e), typeof e == "function")) Am(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case as:
        return wo(n.children, i, s, t);
      case Jh:
        (a = 8), (i |= 8);
        break;
      case Pp:
        return (
          (e = Hn(12, n, t, i | 2)), (e.elementType = Pp), (e.lanes = s), e
        );
      case Rp:
        return (e = Hn(13, n, t, i)), (e.elementType = Rp), (e.lanes = s), e;
      case Np:
        return (e = Hn(19, n, t, i)), (e.elementType = Np), (e.lanes = s), e;
      case gw:
        return Zc(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case hw:
              a = 10;
              break e;
            case mw:
              a = 9;
              break e;
            case Zh:
              a = 11;
              break e;
            case em:
              a = 14;
              break e;
            case yi:
              (a = 16), (r = null);
              break e;
          }
        throw Error(X(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Hn(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function wo(e, t, n, r) {
  return (e = Hn(7, e, r, t)), (e.lanes = n), e;
}
function Zc(e, t, n, r) {
  return (
    (e = Hn(22, e, r, t)),
    (e.elementType = gw),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function np(e, t, n) {
  return (e = Hn(6, e, null, t)), (e.lanes = n), e;
}
function rp(e, t, n) {
  return (
    (t = Hn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function AN(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = jd(0)),
    (this.expirationTimes = jd(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = jd(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Im(e, t, n, r, i, s, a, u, c) {
  return (
    (e = new AN(e, t, n, u, c)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Hn(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ym(s),
    e
  );
}
function IN(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ls,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function l2(e) {
  if (!e) return Ii;
  e = e._reactInternals;
  e: {
    if (Mo(e) !== e || e.tag !== 1) throw Error(X(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ln(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(X(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ln(n)) return lx(e, n, t);
  }
  return t;
}
function a2(e, t, n, r, i, s, a, u, c) {
  return (
    (e = Im(n, r, !0, e, i, s, a, u, c)),
    (e.context = l2(null)),
    (n = e.current),
    (r = Yt()),
    (i = Li(n)),
    (s = Vr(r, i)),
    (s.callback = t ?? null),
    Ni(n, s, i),
    (e.current.lanes = i),
    pa(e, i, r),
    an(e, r),
    e
  );
}
function ef(e, t, n, r) {
  var i = t.current,
    s = Yt(),
    a = Li(i);
  return (
    (n = l2(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Vr(s, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ni(i, t, a)),
    e !== null && (cr(e, i, a, s), Hu(e, i, a)),
    a
  );
}
function Cc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function By(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zm(e, t) {
  By(e, t), (e = e.alternate) && By(e, t);
}
function zN() {
  return null;
}
var u2 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function jm(e) {
  this._internalRoot = e;
}
tf.prototype.render = jm.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(X(409));
  ef(e, t, null, null);
};
tf.prototype.unmount = jm.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    To(function () {
      ef(null, e, null, null);
    }),
      (t[qr] = null);
  }
};
function tf(e) {
  this._internalRoot = e;
}
tf.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Bw();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < xi.length && t !== 0 && t < xi[n].priority; n++);
    xi.splice(n, 0, e), n === 0 && $w(e);
  }
};
function Dm(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function nf(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Uy() {}
function jN(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var d = Cc(a);
        s.call(d);
      };
    }
    var a = a2(t, r, e, 0, null, !1, !1, "", Uy);
    return (
      (e._reactRootContainer = a),
      (e[qr] = a.current),
      Xl(e.nodeType === 8 ? e.parentNode : e),
      To(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var d = Cc(c);
      u.call(d);
    };
  }
  var c = Im(e, 0, !1, null, null, !1, !1, "", Uy);
  return (
    (e._reactRootContainer = c),
    (e[qr] = c.current),
    Xl(e.nodeType === 8 ? e.parentNode : e),
    To(function () {
      ef(t, c, n, r);
    }),
    c
  );
}
function rf(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof i == "function") {
      var u = i;
      i = function () {
        var c = Cc(a);
        u.call(c);
      };
    }
    ef(t, a, e, i);
  } else a = jN(n, t, e, i, r);
  return Cc(a);
}
Dw = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rl(t.pendingLanes);
        n !== 0 &&
          (rm(t, n | 1), an(t, mt()), !(Ie & 6) && ((Ms = mt() + 500), Fi()));
      }
      break;
    case 13:
      To(function () {
        var r = Yr(e, 1);
        if (r !== null) {
          var i = Yt();
          cr(r, e, 1, i);
        }
      }),
        zm(e, 1);
  }
};
im = function (e) {
  if (e.tag === 13) {
    var t = Yr(e, 134217728);
    if (t !== null) {
      var n = Yt();
      cr(t, e, 134217728, n);
    }
    zm(e, 134217728);
  }
};
Fw = function (e) {
  if (e.tag === 13) {
    var t = Li(e),
      n = Yr(e, t);
    if (n !== null) {
      var r = Yt();
      cr(n, e, t, r);
    }
    zm(e, t);
  }
};
Bw = function () {
  return We;
};
Uw = function (e, t) {
  var n = We;
  try {
    return (We = e), t();
  } finally {
    We = n;
  }
};
Fp = function (e, t, n) {
  switch (t) {
    case "input":
      if ((kp(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Kc(r);
            if (!i) throw Error(X(90));
            yw(r), kp(r, i);
          }
        }
      }
      break;
    case "textarea":
      xw(e, n);
      break;
    case "select":
      (t = n.value), t != null && xs(e, !!n.multiple, t, !1);
  }
};
Pw = Lm;
Rw = To;
var DN = { usingClientEntryPoint: !1, Events: [ma, ds, Kc, Cw, Tw, Lm] },
  wl = {
    findFiberByHostInstance: fo,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  FN = {
    bundleType: wl.bundleType,
    version: wl.version,
    rendererPackageName: wl.rendererPackageName,
    rendererConfig: wl.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Zr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Lw(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wl.findFiberByHostInstance || zN,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Au.isDisabled && Au.supportsFiber)
    try {
      (Wc = Au.inject(FN)), (br = Au);
    } catch {}
}
Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = DN;
Pn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Dm(t)) throw Error(X(200));
  return IN(e, t, null, n);
};
Pn.createRoot = function (e, t) {
  if (!Dm(e)) throw Error(X(299));
  var n = !1,
    r = "",
    i = u2;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Im(e, 1, !1, null, null, n, !1, r, i)),
    (e[qr] = t.current),
    Xl(e.nodeType === 8 ? e.parentNode : e),
    new jm(t)
  );
};
Pn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(X(188))
      : ((e = Object.keys(e).join(",")), Error(X(268, e)));
  return (e = Lw(t)), (e = e === null ? null : e.stateNode), e;
};
Pn.flushSync = function (e) {
  return To(e);
};
Pn.hydrate = function (e, t, n) {
  if (!nf(t)) throw Error(X(200));
  return rf(null, e, t, !0, n);
};
Pn.hydrateRoot = function (e, t, n) {
  if (!Dm(e)) throw Error(X(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    a = u2;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = a2(t, null, e, 1, n ?? null, i, !1, s, a)),
    (e[qr] = t.current),
    Xl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new tf(t);
};
Pn.render = function (e, t, n) {
  if (!nf(t)) throw Error(X(200));
  return rf(null, e, t, !1, n);
};
Pn.unmountComponentAtNode = function (e) {
  if (!nf(e)) throw Error(X(40));
  return e._reactRootContainer
    ? (To(function () {
        rf(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[qr] = null);
        });
      }),
      !0)
    : !1;
};
Pn.unstable_batchedUpdates = Lm;
Pn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!nf(n)) throw Error(X(200));
  if (e == null || e._reactInternals === void 0) throw Error(X(38));
  return rf(e, t, n, !1, r);
};
Pn.version = "18.3.1-next-f1338f8080-20240426";
function c2() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c2);
    } catch (e) {
      console.error(e);
    }
}
c2(), (cw.exports = Pn);
var of = cw.exports;
const BN = Hh(of),
  UN = J1({ __proto__: null, default: BN }, [of]);
var $y = of;
(Cp.createRoot = $y.createRoot), (Cp.hydrateRoot = $y.hydrateRoot);
var f2 = { exports: {} },
  d2 = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var va = L;
function $N(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var WN = typeof Object.is == "function" ? Object.is : $N,
  HN = va.useSyncExternalStore,
  VN = va.useRef,
  GN = va.useEffect,
  KN = va.useMemo,
  qN = va.useDebugValue;
d2.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var s = VN(null);
  if (s.current === null) {
    var a = { hasValue: !1, value: null };
    s.current = a;
  } else a = s.current;
  s = KN(
    function () {
      function c(_) {
        if (!d) {
          if (((d = !0), (p = _), (_ = r(_)), i !== void 0 && a.hasValue)) {
            var b = a.value;
            if (i(b, _)) return (m = b);
          }
          return (m = _);
        }
        if (((b = m), WN(p, _))) return b;
        var T = r(_);
        return i !== void 0 && i(b, T) ? b : ((p = _), (m = T));
      }
      var d = !1,
        p,
        m,
        g = n === void 0 ? null : n;
      return [
        function () {
          return c(t());
        },
        g === null
          ? void 0
          : function () {
              return c(g());
            },
      ];
    },
    [t, n, r, i]
  );
  var u = HN(e, s[0], s[1]);
  return (
    GN(
      function () {
        (a.hasValue = !0), (a.value = u);
      },
      [u]
    ),
    qN(u),
    u
  );
};
f2.exports = d2;
var YN = f2.exports,
  En = "default" in bp ? He : bp,
  Wy = Symbol.for("react-redux-context"),
  Hy = typeof globalThis < "u" ? globalThis : {};
function QN() {
  if (!En.createContext) return {};
  const e = Hy[Wy] ?? (Hy[Wy] = new Map());
  let t = e.get(En.createContext);
  return t || ((t = En.createContext(null)), e.set(En.createContext, t)), t;
}
var zi = QN(),
  XN = () => {
    throw new Error("uSES not initialized!");
  };
function Fm(e = zi) {
  return function () {
    return En.useContext(e);
  };
}
var p2 = Fm(),
  h2 = XN,
  JN = (e) => {
    h2 = e;
  },
  ZN = (e, t) => e === t;
function eO(e = zi) {
  const t = e === zi ? p2 : Fm(e),
    n = (r, i = {}) => {
      const { equalityFn: s = ZN, devModeChecks: a = {} } =
          typeof i == "function" ? { equalityFn: i } : i,
        {
          store: u,
          subscription: c,
          getServerState: d,
          stabilityCheck: p,
          identityFunctionCheck: m,
        } = t();
      En.useRef(!0);
      const g = En.useCallback(
          {
            [r.name](b) {
              return r(b);
            },
          }[r.name],
          [r, p, a.stabilityCheck]
        ),
        _ = h2(c.addNestedSub, u.getState, d || u.getState, g, s);
      return En.useDebugValue(_), _;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Bm = eO();
function tO(e) {
  e();
}
function nO() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      tO(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var Vy = { notify() {}, get: () => [] };
function rO(e, t) {
  let n,
    r = Vy,
    i = 0,
    s = !1;
  function a(T) {
    p();
    const O = r.subscribe(T);
    let y = !1;
    return () => {
      y || ((y = !0), O(), m());
    };
  }
  function u() {
    r.notify();
  }
  function c() {
    b.onStateChange && b.onStateChange();
  }
  function d() {
    return s;
  }
  function p() {
    i++, n || ((n = e.subscribe(c)), (r = nO()));
  }
  function m() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = Vy));
  }
  function g() {
    s || ((s = !0), p());
  }
  function _() {
    s && ((s = !1), m());
  }
  const b = {
    addNestedSub: a,
    notifyNestedSubs: u,
    handleChangeWrapper: c,
    isSubscribed: d,
    trySubscribe: g,
    tryUnsubscribe: _,
    getListeners: () => r,
  };
  return b;
}
var iO =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  oO = typeof navigator < "u" && navigator.product === "ReactNative",
  sO = iO || oO ? En.useLayoutEffect : En.useEffect;
function lO({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: s = "once",
}) {
  const a = En.useMemo(() => {
      const d = rO(e);
      return {
        store: e,
        subscription: d,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        identityFunctionCheck: s,
      };
    }, [e, r, i, s]),
    u = En.useMemo(() => e.getState(), [e]);
  sO(() => {
    const { subscription: d } = a;
    return (
      (d.onStateChange = d.notifyNestedSubs),
      d.trySubscribe(),
      u !== e.getState() && d.notifyNestedSubs(),
      () => {
        d.tryUnsubscribe(), (d.onStateChange = void 0);
      }
    );
  }, [a, u]);
  const c = t || zi;
  return En.createElement(c.Provider, { value: a }, n);
}
var aO = lO;
function m2(e = zi) {
  const t = e === zi ? p2 : Fm(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var uO = m2();
function cO(e = zi) {
  const t = e === zi ? uO : m2(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var Um = cO();
JN(YN.useSyncExternalStoreWithSelector);
function kt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var fO = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Gy = fO,
  ip = () => Math.random().toString(36).substring(7).split("").join("."),
  dO = {
    INIT: `@@redux/INIT${ip()}`,
    REPLACE: `@@redux/REPLACE${ip()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ip()}`,
  },
  Tc = dO;
function $m(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function g2(e, t, n) {
  if (typeof e != "function") throw new Error(kt(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(kt(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(kt(1));
    return n(g2)(e, t);
  }
  let r = e,
    i = t,
    s = new Map(),
    a = s,
    u = 0,
    c = !1;
  function d() {
    a === s &&
      ((a = new Map()),
      s.forEach((O, y) => {
        a.set(y, O);
      }));
  }
  function p() {
    if (c) throw new Error(kt(3));
    return i;
  }
  function m(O) {
    if (typeof O != "function") throw new Error(kt(4));
    if (c) throw new Error(kt(5));
    let y = !0;
    d();
    const S = u++;
    return (
      a.set(S, O),
      function () {
        if (y) {
          if (c) throw new Error(kt(6));
          (y = !1), d(), a.delete(S), (s = null);
        }
      }
    );
  }
  function g(O) {
    if (!$m(O)) throw new Error(kt(7));
    if (typeof O.type > "u") throw new Error(kt(8));
    if (typeof O.type != "string") throw new Error(kt(17));
    if (c) throw new Error(kt(9));
    try {
      (c = !0), (i = r(i, O));
    } finally {
      c = !1;
    }
    return (
      (s = a).forEach((S) => {
        S();
      }),
      O
    );
  }
  function _(O) {
    if (typeof O != "function") throw new Error(kt(10));
    (r = O), g({ type: Tc.REPLACE });
  }
  function b() {
    const O = m;
    return {
      subscribe(y) {
        if (typeof y != "object" || y === null) throw new Error(kt(11));
        function S() {
          const P = y;
          P.next && P.next(p());
        }
        return S(), { unsubscribe: O(S) };
      },
      [Gy]() {
        return this;
      },
    };
  }
  return (
    g({ type: Tc.INIT }),
    { dispatch: g, subscribe: m, getState: p, replaceReducer: _, [Gy]: b }
  );
}
function pO(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: Tc.INIT }) > "u") throw new Error(kt(12));
    if (typeof n(void 0, { type: Tc.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(kt(13));
  });
}
function hO(e) {
  const t = Object.keys(e),
    n = {};
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    typeof e[a] == "function" && (n[a] = e[a]);
  }
  const r = Object.keys(n);
  let i;
  try {
    pO(n);
  } catch (s) {
    i = s;
  }
  return function (a = {}, u) {
    if (i) throw i;
    let c = !1;
    const d = {};
    for (let p = 0; p < r.length; p++) {
      const m = r[p],
        g = n[m],
        _ = a[m],
        b = g(_, u);
      if (typeof b > "u") throw (u && u.type, new Error(kt(14)));
      (d[m] = b), (c = c || b !== _);
    }
    return (c = c || r.length !== Object.keys(a).length), c ? d : a;
  };
}
function Pc(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function mO(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let s = () => {
      throw new Error(kt(15));
    };
    const a = { getState: i.getState, dispatch: (c, ...d) => s(c, ...d) },
      u = e.map((c) => c(a));
    return (s = Pc(...u)(i.dispatch)), { ...i, dispatch: s };
  };
}
function gO(e) {
  return $m(e) && "type" in e && typeof e.type == "string";
}
var v2 = Symbol.for("immer-nothing"),
  Ky = Symbol.for("immer-draftable"),
  Cn = Symbol.for("immer-state");
function ar(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var As = Object.getPrototypeOf;
function Po(e) {
  return !!e && !!e[Cn];
}
function Xr(e) {
  var t;
  return e
    ? y2(e) ||
        Array.isArray(e) ||
        !!e[Ky] ||
        !!((t = e.constructor) != null && t[Ky]) ||
        lf(e) ||
        af(e)
    : !1;
}
var vO = Object.prototype.constructor.toString();
function y2(e) {
  if (!e || typeof e != "object") return !1;
  const t = As(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === vO;
}
function Rc(e, t) {
  sf(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function sf(e) {
  const t = e[Cn];
  return t ? t.type_ : Array.isArray(e) ? 1 : lf(e) ? 2 : af(e) ? 3 : 0;
}
function yh(e, t) {
  return sf(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function w2(e, t, n) {
  const r = sf(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function yO(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function lf(e) {
  return e instanceof Map;
}
function af(e) {
  return e instanceof Set;
}
function uo(e) {
  return e.copy_ || e.base_;
}
function wh(e, t) {
  if (lf(e)) return new Map(e);
  if (af(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = y2(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Cn];
    let i = Reflect.ownKeys(r);
    for (let s = 0; s < i.length; s++) {
      const a = i[s],
        u = r[a];
      u.writable === !1 && ((u.writable = !0), (u.configurable = !0)),
        (u.get || u.set) &&
          (r[a] = {
            configurable: !0,
            writable: !0,
            enumerable: u.enumerable,
            value: e[a],
          });
    }
    return Object.create(As(e), r);
  } else {
    const r = As(e);
    if (r !== null && n) return { ...e };
    const i = Object.create(r);
    return Object.assign(i, e);
  }
}
function Wm(e, t = !1) {
  return (
    uf(e) ||
      Po(e) ||
      !Xr(e) ||
      (sf(e) > 1 && (e.set = e.add = e.clear = e.delete = wO),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => Wm(r, !0))),
    e
  );
}
function wO() {
  ar(2);
}
function uf(e) {
  return Object.isFrozen(e);
}
var xO = {};
function Ro(e) {
  const t = xO[e];
  return t || ar(0, e), t;
}
var sa;
function x2() {
  return sa;
}
function SO(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function qy(e, t) {
  t &&
    (Ro("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function xh(e) {
  Sh(e), e.drafts_.forEach(EO), (e.drafts_ = null);
}
function Sh(e) {
  e === sa && (sa = e.parent_);
}
function Yy(e) {
  return (sa = SO(sa, e));
}
function EO(e) {
  const t = e[Cn];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Qy(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Cn].modified_ && (xh(t), ar(4)),
        Xr(e) && ((e = Nc(t, e)), t.parent_ || Oc(t, e)),
        t.patches_ &&
          Ro("Patches").generateReplacementPatches_(
            n[Cn].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = Nc(t, n, [])),
    xh(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== v2 ? e : void 0
  );
}
function Nc(e, t, n) {
  if (uf(t)) return t;
  const r = t[Cn];
  if (!r) return Rc(t, (i, s) => Xy(e, r, t, i, s, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return Oc(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let s = i,
      a = !1;
    r.type_ === 3 && ((s = new Set(i)), i.clear(), (a = !0)),
      Rc(s, (u, c) => Xy(e, r, i, u, c, n, a)),
      Oc(e, i, !1),
      n &&
        e.patches_ &&
        Ro("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function Xy(e, t, n, r, i, s, a) {
  if (Po(i)) {
    const u =
        s && t && t.type_ !== 3 && !yh(t.assigned_, r) ? s.concat(r) : void 0,
      c = Nc(e, i, u);
    if ((w2(n, r, c), Po(c))) e.canAutoFreeze_ = !1;
    else return;
  } else a && n.add(i);
  if (Xr(i) && !uf(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Nc(e, i),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        Oc(e, i);
  }
}
function Oc(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Wm(t, n);
}
function _O(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : x2(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = r,
    s = Hm;
  n && ((i = [r]), (s = la));
  const { revoke: a, proxy: u } = Proxy.revocable(i, s);
  return (r.draft_ = u), (r.revoke_ = a), u;
}
var Hm = {
    get(e, t) {
      if (t === Cn) return e;
      const n = uo(e);
      if (!yh(n, t)) return bO(e, n, t);
      const r = n[t];
      return e.finalized_ || !Xr(r)
        ? r
        : r === op(e.base_, t)
        ? (sp(e), (e.copy_[t] = _h(r, e)))
        : r;
    },
    has(e, t) {
      return t in uo(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(uo(e));
    },
    set(e, t, n) {
      const r = S2(uo(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const i = op(uo(e), t),
          s = i == null ? void 0 : i[Cn];
        if (s && s.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (yO(n, i) && (n !== void 0 || yh(e.base_, t))) return !0;
        sp(e), Eh(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        op(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), sp(e), Eh(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = uo(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      ar(11);
    },
    getPrototypeOf(e) {
      return As(e.base_);
    },
    setPrototypeOf() {
      ar(12);
    },
  },
  la = {};
Rc(Hm, (e, t) => {
  la[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
la.deleteProperty = function (e, t) {
  return la.set.call(this, e, t, void 0);
};
la.set = function (e, t, n) {
  return Hm.set.call(this, e[0], t, n, e[0]);
};
function op(e, t) {
  const n = e[Cn];
  return (n ? uo(n) : e)[t];
}
function bO(e, t, n) {
  var i;
  const r = S2(t, n);
  return r
    ? "value" in r
      ? r.value
      : (i = r.get) == null
      ? void 0
      : i.call(e.draft_)
    : void 0;
}
function S2(e, t) {
  if (!(t in e)) return;
  let n = As(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = As(n);
  }
}
function Eh(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Eh(e.parent_));
}
function sp(e) {
  e.copy_ || (e.copy_ = wh(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var CO = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const s = n;
          n = t;
          const a = this;
          return function (c = s, ...d) {
            return a.produce(c, (p) => n.call(this, p, ...d));
          };
        }
        typeof n != "function" && ar(6),
          r !== void 0 && typeof r != "function" && ar(7);
        let i;
        if (Xr(t)) {
          const s = Yy(this),
            a = _h(t, void 0);
          let u = !0;
          try {
            (i = n(a)), (u = !1);
          } finally {
            u ? xh(s) : Sh(s);
          }
          return qy(s, r), Qy(i, s);
        } else if (!t || typeof t != "object") {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === v2 && (i = void 0),
            this.autoFreeze_ && Wm(i, !0),
            r)
          ) {
            const s = [],
              a = [];
            Ro("Patches").generateReplacementPatches_(t, i, s, a), r(s, a);
          }
          return i;
        } else ar(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (a, ...u) => this.produceWithPatches(a, (c) => t(c, ...u));
        let r, i;
        return [
          this.produce(t, n, (a, u) => {
            (r = a), (i = u);
          }),
          r,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Xr(e) || ar(8), Po(e) && (e = TO(e));
    const t = Yy(this),
      n = _h(e, void 0);
    return (n[Cn].isManual_ = !0), Sh(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Cn];
    (!n || !n.isManual_) && ar(9);
    const { scope_: r } = n;
    return qy(r, t), Qy(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Ro("Patches").applyPatches_;
    return Po(e) ? r(e, t) : this.produce(e, (i) => r(i, t));
  }
};
function _h(e, t) {
  const n = lf(e)
    ? Ro("MapSet").proxyMap_(e, t)
    : af(e)
    ? Ro("MapSet").proxySet_(e, t)
    : _O(e, t);
  return (t ? t.scope_ : x2()).drafts_.push(n), n;
}
function TO(e) {
  return Po(e) || ar(10, e), E2(e);
}
function E2(e) {
  if (!Xr(e) || uf(e)) return e;
  const t = e[Cn];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = wh(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = wh(e, !0);
  return (
    Rc(n, (r, i) => {
      w2(n, r, E2(i));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var Tn = new CO(),
  _2 = Tn.produce;
Tn.produceWithPatches.bind(Tn);
Tn.setAutoFreeze.bind(Tn);
Tn.setUseStrictShallowCopy.bind(Tn);
Tn.applyPatches.bind(Tn);
Tn.createDraft.bind(Tn);
Tn.finishDraft.bind(Tn);
function b2(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (s) =>
      typeof s == "function" ? s(n, r, e) : i(s);
}
var PO = b2(),
  RO = b2,
  NO =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Pc
              : Pc.apply(null, arguments);
        };
function Jy(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r);
      if (!i) throw new Error(fr(0));
      return {
        type: e,
        payload: i.payload,
        ...("meta" in i && { meta: i.meta }),
        ...("error" in i && { error: i.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => gO(r) && r.type === e),
    n
  );
}
var C2 = class Ol extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ol.prototype);
  }
  static get [Symbol.species]() {
    return Ol;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Ol(...t[0].concat(this))
      : new Ol(...t.concat(this));
  }
};
function Zy(e) {
  return Xr(e) ? _2(e, () => {}) : e;
}
function e1(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i;
  }
  if (!n.insert) throw new Error(fr(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function OO(e) {
  return typeof e == "boolean";
}
var LO = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: s = !0,
      } = t ?? {};
      let a = new C2();
      return n && (OO(n) ? a.push(PO) : a.push(RO(n.extraArgument))), a;
    },
  kO = "RTK_autoBatch",
  T2 = (e) => (t) => {
    setTimeout(t, e);
  },
  MO =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : T2(10),
  AO =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let i = !0,
        s = !1,
        a = !1;
      const u = new Set(),
        c =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? MO
            : e.type === "callback"
            ? e.queueNotification
            : T2(e.timeout),
        d = () => {
          (a = !1), s && ((s = !1), u.forEach((p) => p()));
        };
      return Object.assign({}, r, {
        subscribe(p) {
          const m = () => i && p(),
            g = r.subscribe(m);
          return (
            u.add(p),
            () => {
              g(), u.delete(p);
            }
          );
        },
        dispatch(p) {
          var m;
          try {
            return (
              (i = !((m = p == null ? void 0 : p.meta) != null && m[kO])),
              (s = !i),
              s && (a || ((a = !0), c(d))),
              r.dispatch(p)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  IO = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let i = new C2(e);
      return r && i.push(AO(typeof r == "object" ? r : void 0)), i;
    };
function zO(e) {
  const t = LO(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: s = void 0,
      enhancers: a = void 0,
    } = e || {};
  let u;
  if (typeof n == "function") u = n;
  else if ($m(n)) u = hO(n);
  else throw new Error(fr(1));
  let c;
  typeof r == "function" ? (c = r(t)) : (c = t());
  let d = Pc;
  i && (d = NO({ trace: !1, ...(typeof i == "object" && i) }));
  const p = mO(...c),
    m = IO(p);
  let g = typeof a == "function" ? a(m) : m();
  const _ = d(...g);
  return g2(u, s, _);
}
function P2(e) {
  const t = {},
    n = [];
  let r;
  const i = {
    addCase(s, a) {
      const u = typeof s == "string" ? s : s.type;
      if (!u) throw new Error(fr(28));
      if (u in t) throw new Error(fr(29));
      return (t[u] = a), i;
    },
    addMatcher(s, a) {
      return n.push({ matcher: s, reducer: a }), i;
    },
    addDefaultCase(s) {
      return (r = s), i;
    },
  };
  return e(i), [t, n, r];
}
function jO(e) {
  return typeof e == "function";
}
function DO(e, t) {
  let [n, r, i] = P2(t),
    s;
  if (jO(e)) s = () => Zy(e());
  else {
    const u = Zy(e);
    s = () => u;
  }
  function a(u = s(), c) {
    let d = [
      n[c.type],
      ...r.filter(({ matcher: p }) => p(c)).map(({ reducer: p }) => p),
    ];
    return (
      d.filter((p) => !!p).length === 0 && (d = [i]),
      d.reduce((p, m) => {
        if (m)
          if (Po(p)) {
            const _ = m(p, c);
            return _ === void 0 ? p : _;
          } else {
            if (Xr(p)) return _2(p, (g) => m(g, c));
            {
              const g = m(p, c);
              if (g === void 0) {
                if (p === null) return p;
                throw new Error(fr(9));
              }
              return g;
            }
          }
        return p;
      }, u)
    );
  }
  return (a.getInitialState = s), a;
}
var FO = Symbol.for("rtk-slice-createasyncthunk");
function BO(e, t) {
  return `${e}/${t}`;
}
function UO({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[FO];
  return function (i) {
    const { name: s, reducerPath: a = s } = i;
    if (!s) throw new Error(fr(11));
    typeof process < "u";
    const u =
        (typeof i.reducers == "function" ? i.reducers(HO()) : i.reducers) || {},
      c = Object.keys(u),
      d = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      p = {
        addCase(w, P) {
          const j = typeof w == "string" ? w : w.type;
          if (!j) throw new Error(fr(12));
          if (j in d.sliceCaseReducersByType) throw new Error(fr(13));
          return (d.sliceCaseReducersByType[j] = P), p;
        },
        addMatcher(w, P) {
          return d.sliceMatchers.push({ matcher: w, reducer: P }), p;
        },
        exposeAction(w, P) {
          return (d.actionCreators[w] = P), p;
        },
        exposeCaseReducer(w, P) {
          return (d.sliceCaseReducersByName[w] = P), p;
        },
      };
    c.forEach((w) => {
      const P = u[w],
        j = {
          reducerName: w,
          type: BO(s, w),
          createNotation: typeof i.reducers == "function",
        };
      GO(P) ? qO(j, P, p, t) : VO(j, P, p);
    });
    function m() {
      const [w = {}, P = [], j = void 0] =
          typeof i.extraReducers == "function"
            ? P2(i.extraReducers)
            : [i.extraReducers],
        N = { ...w, ...d.sliceCaseReducersByType };
      return DO(i.initialState, (H) => {
        for (let D in N) H.addCase(D, N[D]);
        for (let D of d.sliceMatchers) H.addMatcher(D.matcher, D.reducer);
        for (let D of P) H.addMatcher(D.matcher, D.reducer);
        j && H.addDefaultCase(j);
      });
    }
    const g = (w) => w,
      _ = new Map();
    let b;
    function T(w, P) {
      return b || (b = m()), b(w, P);
    }
    function O() {
      return b || (b = m()), b.getInitialState();
    }
    function y(w, P = !1) {
      function j(H) {
        let D = H[w];
        return typeof D > "u" && P && (D = O()), D;
      }
      function N(H = g) {
        const D = e1(_, P, { insert: () => new WeakMap() });
        return e1(D, H, {
          insert: () => {
            const V = {};
            for (const [U, J] of Object.entries(i.selectors ?? {}))
              V[U] = $O(J, H, O, P);
            return V;
          },
        });
      }
      return {
        reducerPath: w,
        getSelectors: N,
        get selectors() {
          return N(j);
        },
        selectSlice: j,
      };
    }
    const S = {
      name: s,
      reducer: T,
      actions: d.actionCreators,
      caseReducers: d.sliceCaseReducersByName,
      getInitialState: O,
      ...y(a),
      injectInto(w, { reducerPath: P, ...j } = {}) {
        const N = P ?? a;
        return (
          w.inject({ reducerPath: N, reducer: T }, j), { ...S, ...y(N, !0) }
        );
      },
    };
    return S;
  };
}
function $O(e, t, n, r) {
  function i(s, ...a) {
    let u = t(s);
    return typeof u > "u" && r && (u = n()), e(u, ...a);
  }
  return (i.unwrapped = e), i;
}
var WO = UO();
function HO() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function VO({ type: e, reducerName: t, createNotation: n }, r, i) {
  let s, a;
  if ("reducer" in r) {
    if (n && !KO(r)) throw new Error(fr(17));
    (s = r.reducer), (a = r.prepare);
  } else s = r;
  i.addCase(e, s)
    .exposeCaseReducer(t, s)
    .exposeAction(t, a ? Jy(e, a) : Jy(e));
}
function GO(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function KO(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function qO({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(fr(18));
  const {
      payloadCreator: s,
      fulfilled: a,
      pending: u,
      rejected: c,
      settled: d,
      options: p,
    } = n,
    m = i(e, s, p);
  r.exposeAction(t, m),
    a && r.addCase(m.fulfilled, a),
    u && r.addCase(m.pending, u),
    c && r.addCase(m.rejected, c),
    d && r.addMatcher(m.settled, d),
    r.exposeCaseReducer(t, {
      fulfilled: a || Iu,
      pending: u || Iu,
      rejected: c || Iu,
      settled: d || Iu,
    });
}
function Iu() {}
function fr(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const YO = {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    cartTotalQuantity: 0,
    cartTotalAmout: 0,
  },
  R2 = WO({
    name: "cart",
    initialState: YO,
    reducers: {
      addToCart(e, { payload: t }) {
        const n = e.cartItems.findIndex((r) => r.id === t.id);
        if (n >= 0) e.cartItems[n].cartQuantity += 1;
        else {
          const r = { ...t, cartQuantity: 1 };
          e.cartItems.push(r);
        }
        localStorage.setItem("cartItems", JSON.stringify(e.cartItems));
      },
      removeFromCart(e, { payload: t }) {
        const n = e.cartItems.filter((r) => r.id !== t.id);
        (e.cartItems = n),
          localStorage.setItem("cartItems", JSON.stringify(e.cartItems));
      },
      decreaseCart(e, { payload: t }) {
        const n = e.cartItems.findIndex((r) => r.id === t.id);
        if (e.cartItems[n].cartQuantity > 1) e.cartItems[n].cartQuantity -= 1;
        else if (e.cartItems[n] === 1) {
          const r = e.cartItems.filter((i) => i.id !== t.id);
          e.cartItems;
        }
        localStorage.setItem("cartItems", JSON.stringify(e.cartItems));
      },
      clearCart(e) {
        (e.cartItems = []),
          localStorage.setItem("cartItems", JSON.stringify(e.cartItems));
      },
      getTotal(e) {
        let { total: t, quantity: n } = e.cartItems.reduce(
          (r, i) => {
            const { price: s, cartQuantity: a } = i,
              u = s * a;
            return (r.total += u), (r.quantity += a), r;
          },
          { total: 0, quantity: 0 }
        );
        (e.cartTotalAmout = t), (e.cartTotalQuantity = n);
      },
    },
  }),
  {
    addToCart: N2,
    removeFromCart: O2,
    decreaseCart: L2,
    clearCart: QO,
    getTotal: k2,
    getCartItemsQty: B5,
  } = R2.actions,
  XO = R2.reducer,
  JO = zO({ reducer: { cart: XO }, devTools: !0 });
/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ot() {
  return (
    (ot = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ot.apply(this, arguments)
  );
}
var yt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(yt || (yt = {}));
const t1 = "popstate";
function ZO(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: a, hash: u } = r.location;
    return aa(
      "",
      { pathname: s, search: a, hash: u },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : No(i);
  }
  return tL(t, n, null, e);
}
function Te(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Is(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function eL() {
  return Math.random().toString(36).substr(2, 8);
}
function n1(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function aa(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ot(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Bi(t) : t,
      { state: n, key: (t && t.key) || r || eL() }
    )
  );
}
function No(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Bi(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function tL(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    a = i.history,
    u = yt.Pop,
    c = null,
    d = p();
  d == null && ((d = 0), a.replaceState(ot({}, a.state, { idx: d }), ""));
  function p() {
    return (a.state || { idx: null }).idx;
  }
  function m() {
    u = yt.Pop;
    let O = p(),
      y = O == null ? null : O - d;
    (d = O), c && c({ action: u, location: T.location, delta: y });
  }
  function g(O, y) {
    u = yt.Push;
    let S = aa(T.location, O, y);
    d = p() + 1;
    let w = n1(S, d),
      P = T.createHref(S);
    try {
      a.pushState(w, "", P);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      i.location.assign(P);
    }
    s && c && c({ action: u, location: T.location, delta: 1 });
  }
  function _(O, y) {
    u = yt.Replace;
    let S = aa(T.location, O, y);
    d = p();
    let w = n1(S, d),
      P = T.createHref(S);
    a.replaceState(w, "", P),
      s && c && c({ action: u, location: T.location, delta: 0 });
  }
  function b(O) {
    let y = i.location.origin !== "null" ? i.location.origin : i.location.href,
      S = typeof O == "string" ? O : No(O);
    return (
      (S = S.replace(/ $/, "%20")),
      Te(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          S
      ),
      new URL(S, y)
    );
  }
  let T = {
    get action() {
      return u;
    },
    get location() {
      return e(i, a);
    },
    listen(O) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(t1, m),
        (c = O),
        () => {
          i.removeEventListener(t1, m), (c = null);
        }
      );
    },
    createHref(O) {
      return t(i, O);
    },
    createURL: b,
    encodeLocation(O) {
      let y = b(O);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: g,
    replace: _,
    go(O) {
      return a.go(O);
    },
  };
  return T;
}
var Ye;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ye || (Ye = {}));
const nL = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function rL(e) {
  return e.index === !0;
}
function ua(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, s) => {
      let a = [...n, String(s)],
        u = typeof i.id == "string" ? i.id : a.join("-");
      if (
        (Te(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        Te(
          !r[u],
          'Found a route id collision on id "' +
            u +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        rL(i))
      ) {
        let c = ot({}, i, t(i), { id: u });
        return (r[u] = c), c;
      } else {
        let c = ot({}, i, t(i), { id: u, children: void 0 });
        return (
          (r[u] = c), i.children && (c.children = ua(i.children, t, a, r)), c
        );
      }
    })
  );
}
function co(e, t, n) {
  return n === void 0 && (n = "/"), Xu(e, t, n, !1);
}
function Xu(e, t, n, r) {
  let i = typeof t == "string" ? Bi(t) : t,
    s = Jr(i.pathname || "/", n);
  if (s == null) return null;
  let a = M2(e);
  oL(a);
  let u = null;
  for (let c = 0; u == null && c < a.length; ++c) {
    let d = gL(s);
    u = hL(a[c], d, r);
  }
  return u;
}
function iL(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function M2(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, a, u) => {
    let c = {
      relativePath: u === void 0 ? s.path || "" : u,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: a,
      route: s,
    };
    c.relativePath.startsWith("/") &&
      (Te(
        c.relativePath.startsWith(r),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (c.relativePath = c.relativePath.slice(r.length)));
    let d = Gr([r, c.relativePath]),
      p = n.concat(c);
    s.children &&
      s.children.length > 0 &&
      (Te(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + d + '".')
      ),
      M2(s.children, t, p, d)),
      !(s.path == null && !s.index) &&
        t.push({ path: d, score: dL(d, s.index), routesMeta: p });
  };
  return (
    e.forEach((s, a) => {
      var u;
      if (s.path === "" || !((u = s.path) != null && u.includes("?"))) i(s, a);
      else for (let c of A2(s.path)) i(s, a, c);
    }),
    t
  );
}
function A2(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let a = A2(r.join("/")),
    u = [];
  return (
    u.push(...a.map((c) => (c === "" ? s : [s, c].join("/")))),
    i && u.push(...a),
    u.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function oL(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : pL(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const sL = /^:[\w-]+$/,
  lL = 3,
  aL = 2,
  uL = 1,
  cL = 10,
  fL = -2,
  r1 = (e) => e === "*";
function dL(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(r1) && (r += fL),
    t && (r += aL),
    n
      .filter((i) => !r1(i))
      .reduce((i, s) => i + (sL.test(s) ? lL : s === "" ? uL : cL), r)
  );
}
function pL(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function hL(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    a = [];
  for (let u = 0; u < r.length; ++u) {
    let c = r[u],
      d = u === r.length - 1,
      p = s === "/" ? t : t.slice(s.length) || "/",
      m = Lc(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: d },
        p
      ),
      g = c.route;
    if (
      (!m &&
        d &&
        n &&
        !r[r.length - 1].route.index &&
        (m = Lc(
          { path: c.relativePath, caseSensitive: c.caseSensitive, end: !1 },
          p
        )),
      !m)
    )
      return null;
    Object.assign(i, m.params),
      a.push({
        params: i,
        pathname: Gr([s, m.pathname]),
        pathnameBase: wL(Gr([s, m.pathnameBase])),
        route: g,
      }),
      m.pathnameBase !== "/" && (s = Gr([s, m.pathnameBase]));
  }
  return a;
}
function Lc(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = mL(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    a = s.replace(/(.)\/+$/, "$1"),
    u = i.slice(1);
  return {
    params: r.reduce((d, p, m) => {
      let { paramName: g, isOptional: _ } = p;
      if (g === "*") {
        let T = u[m] || "";
        a = s.slice(0, s.length - T.length).replace(/(.)\/+$/, "$1");
      }
      const b = u[m];
      return (
        _ && !b ? (d[g] = void 0) : (d[g] = (b || "").replace(/%2F/g, "/")), d
      );
    }, {}),
    pathname: s,
    pathnameBase: a,
    pattern: e,
  };
}
function mL(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Is(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, u, c) => (
            r.push({ paramName: u, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function gL(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Is(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Jr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function vL(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Bi(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : yL(n, t)) : t,
    search: xL(r),
    hash: SL(i),
  };
}
function yL(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function lp(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function I2(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Vm(e, t) {
  let n = I2(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Gm(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Bi(e))
    : ((i = ot({}, e)),
      Te(
        !i.pathname || !i.pathname.includes("?"),
        lp("?", "pathname", "search", i)
      ),
      Te(
        !i.pathname || !i.pathname.includes("#"),
        lp("#", "pathname", "hash", i)
      ),
      Te(!i.search || !i.search.includes("#"), lp("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    a = s ? "/" : i.pathname,
    u;
  if (a == null) u = n;
  else {
    let m = t.length - 1;
    if (!r && a.startsWith("..")) {
      let g = a.split("/");
      for (; g[0] === ".."; ) g.shift(), (m -= 1);
      i.pathname = g.join("/");
    }
    u = m >= 0 ? t[m] : "/";
  }
  let c = vL(i, u),
    d = a && a !== "/" && a.endsWith("/"),
    p = (s || a === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (d || p) && (c.pathname += "/"), c;
}
const Gr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  wL = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  xL = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  SL = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Km {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function cf(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const z2 = ["post", "put", "patch", "delete"],
  EL = new Set(z2),
  _L = ["get", ...z2],
  bL = new Set(_L),
  CL = new Set([301, 302, 303, 307, 308]),
  TL = new Set([307, 308]),
  ap = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  PL = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  xl = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  qm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  RL = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  j2 = "remix-router-transitions";
function NL(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  Te(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let M = e.detectErrorBoundary;
    i = (I) => ({ hasErrorBoundary: M(I) });
  } else i = RL;
  let s = {},
    a = ua(e.routes, i, void 0, s),
    u,
    c = e.basename || "/",
    d = e.unstable_dataStrategy || AL,
    p = e.unstable_patchRoutesOnMiss,
    m = ot(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    g = null,
    _ = new Set(),
    b = null,
    T = null,
    O = null,
    y = e.hydrationData != null,
    S = co(a, e.history.location, c),
    w = null;
  if (S == null && !p) {
    let M = Kt(404, { pathname: e.history.location.pathname }),
      { matches: I, route: F } = p1(a);
    (S = I), (w = { [F.id]: M });
  }
  S &&
    p &&
    !e.hydrationData &&
    Ks(S, a, e.history.location.pathname).active &&
    (S = null);
  let P;
  if (!S) (P = !1), (S = []);
  else if (S.some((M) => M.route.lazy)) P = !1;
  else if (!S.some((M) => M.route.loader)) P = !0;
  else if (m.v7_partialHydration) {
    let M = e.hydrationData ? e.hydrationData.loaderData : null,
      I = e.hydrationData ? e.hydrationData.errors : null,
      F = (G) =>
        G.route.loader
          ? typeof G.route.loader == "function" && G.route.loader.hydrate === !0
            ? !1
            : (M && M[G.route.id] !== void 0) || (I && I[G.route.id] !== void 0)
          : !0;
    if (I) {
      let G = S.findIndex((ie) => I[ie.route.id] !== void 0);
      P = S.slice(0, G + 1).every(F);
    } else P = S.every(F);
  } else P = e.hydrationData != null;
  let j,
    N = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: S,
      initialized: P,
      navigation: ap,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || w,
      fetchers: new Map(),
      blockers: new Map(),
    },
    H = yt.Pop,
    D = !1,
    V,
    U = !1,
    J = new Map(),
    Q = null,
    re = !1,
    ae = !1,
    Ae = [],
    Ge = [],
    Pe = new Map(),
    Z = 0,
    ne = -1,
    le = new Map(),
    he = new Set(),
    Me = new Map(),
    On = new Map(),
    xt = new Set(),
    Tt = new Map(),
    gt = new Map(),
    ei = new Map(),
    Tr = !1;
  function Wi() {
    if (
      ((g = e.history.listen((M) => {
        let { action: I, location: F, delta: G } = M;
        if (Tr) {
          Tr = !1;
          return;
        }
        Is(
          gt.size === 0 || G != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let ie = Na({
          currentLocation: N.location,
          nextLocation: F,
          historyAction: I,
        });
        if (ie && G != null) {
          (Tr = !0),
            e.history.go(G * -1),
            $o(ie, {
              state: "blocked",
              location: F,
              proceed() {
                $o(ie, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: F,
                }),
                  e.history.go(G);
              },
              reset() {
                let ce = new Map(N.blockers);
                ce.set(ie, xl), vt({ blockers: ce });
              },
            });
          return;
        }
        return Rr(I, F);
      })),
      n)
    ) {
      KL(t, J);
      let M = () => qL(t, J);
      t.addEventListener("pagehide", M),
        (Q = () => t.removeEventListener("pagehide", M));
    }
    return N.initialized || Rr(yt.Pop, N.location, { initialHydration: !0 }), j;
  }
  function yf() {
    g && g(),
      Q && Q(),
      _.clear(),
      V && V.abort(),
      N.fetchers.forEach((M, I) => ti(I)),
      N.blockers.forEach((M, I) => Ra(I));
  }
  function zo(M) {
    return _.add(M), () => _.delete(M);
  }
  function vt(M, I) {
    I === void 0 && (I = {}), (N = ot({}, N, M));
    let F = [],
      G = [];
    m.v7_fetcherPersist &&
      N.fetchers.forEach((ie, ce) => {
        ie.state === "idle" && (xt.has(ce) ? G.push(ce) : F.push(ce));
      }),
      [..._].forEach((ie) =>
        ie(N, {
          deletedFetchers: G,
          unstable_viewTransitionOpts: I.viewTransitionOpts,
          unstable_flushSync: I.flushSync === !0,
        })
      ),
      m.v7_fetcherPersist &&
        (F.forEach((ie) => N.fetchers.delete(ie)), G.forEach((ie) => ti(ie)));
  }
  function Pr(M, I, F) {
    var G, ie;
    let { flushSync: ce } = F === void 0 ? {} : F,
      me =
        N.actionData != null &&
        N.navigation.formMethod != null &&
        sr(N.navigation.formMethod) &&
        N.navigation.state === "loading" &&
        ((G = M.state) == null ? void 0 : G._isRedirect) !== !0,
      ee;
    I.actionData
      ? Object.keys(I.actionData).length > 0
        ? (ee = I.actionData)
        : (ee = null)
      : me
      ? (ee = N.actionData)
      : (ee = null);
    let we = I.loaderData
        ? f1(N.loaderData, I.loaderData, I.matches || [], I.errors)
        : N.loaderData,
      fe = N.blockers;
    fe.size > 0 && ((fe = new Map(fe)), fe.forEach((je, Ue) => fe.set(Ue, xl)));
    let de =
      D === !0 ||
      (N.navigation.formMethod != null &&
        sr(N.navigation.formMethod) &&
        ((ie = M.state) == null ? void 0 : ie._isRedirect) !== !0);
    u && ((a = u), (u = void 0)),
      re ||
        H === yt.Pop ||
        (H === yt.Push
          ? e.history.push(M, M.state)
          : H === yt.Replace && e.history.replace(M, M.state));
    let Fe;
    if (H === yt.Pop) {
      let je = J.get(N.location.pathname);
      je && je.has(M.pathname)
        ? (Fe = { currentLocation: N.location, nextLocation: M })
        : J.has(M.pathname) &&
          (Fe = { currentLocation: M, nextLocation: N.location });
    } else if (U) {
      let je = J.get(N.location.pathname);
      je
        ? je.add(M.pathname)
        : ((je = new Set([M.pathname])), J.set(N.location.pathname, je)),
        (Fe = { currentLocation: N.location, nextLocation: M });
    }
    vt(
      ot({}, I, {
        actionData: ee,
        loaderData: we,
        historyAction: H,
        location: M,
        initialized: !0,
        navigation: ap,
        revalidation: "idle",
        restoreScrollPosition: Gs(M, I.matches || N.matches),
        preventScrollReset: de,
        blockers: fe,
      }),
      { viewTransitionOpts: Fe, flushSync: ce === !0 }
    ),
      (H = yt.Pop),
      (D = !1),
      (U = !1),
      (re = !1),
      (ae = !1),
      (Ae = []),
      (Ge = []);
  }
  async function Jt(M, I) {
    if (typeof M == "number") {
      e.history.go(M);
      return;
    }
    let F = bh(
        N.location,
        N.matches,
        c,
        m.v7_prependBasename,
        M,
        m.v7_relativeSplatPath,
        I == null ? void 0 : I.fromRouteId,
        I == null ? void 0 : I.relative
      ),
      {
        path: G,
        submission: ie,
        error: ce,
      } = i1(m.v7_normalizeFormMethod, !1, F, I),
      me = N.location,
      ee = aa(N.location, G, I && I.state);
    ee = ot({}, ee, e.history.encodeLocation(ee));
    let we = I && I.replace != null ? I.replace : void 0,
      fe = yt.Push;
    we === !0
      ? (fe = yt.Replace)
      : we === !1 ||
        (ie != null &&
          sr(ie.formMethod) &&
          ie.formAction === N.location.pathname + N.location.search &&
          (fe = yt.Replace));
    let de =
        I && "preventScrollReset" in I ? I.preventScrollReset === !0 : void 0,
      Fe = (I && I.unstable_flushSync) === !0,
      je = Na({ currentLocation: me, nextLocation: ee, historyAction: fe });
    if (je) {
      $o(je, {
        state: "blocked",
        location: ee,
        proceed() {
          $o(je, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ee,
          }),
            Jt(M, I);
        },
        reset() {
          let Ue = new Map(N.blockers);
          Ue.set(je, xl), vt({ blockers: Ue });
        },
      });
      return;
    }
    return await Rr(fe, ee, {
      submission: ie,
      pendingError: ce,
      preventScrollReset: de,
      replace: I && I.replace,
      enableViewTransition: I && I.unstable_viewTransition,
      flushSync: Fe,
    });
  }
  function Hi() {
    if (
      (Nr(),
      vt({ revalidation: "loading" }),
      N.navigation.state !== "submitting")
    ) {
      if (N.navigation.state === "idle") {
        Rr(N.historyAction, N.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Rr(H || N.historyAction, N.navigation.location, {
        overrideNavigation: N.navigation,
      });
    }
  }
  async function Rr(M, I, F) {
    V && V.abort(),
      (V = null),
      (H = M),
      (re = (F && F.startUninterruptedRevalidation) === !0),
      xf(N.location, N.matches),
      (D = (F && F.preventScrollReset) === !0),
      (U = (F && F.enableViewTransition) === !0);
    let G = u || a,
      ie = F && F.overrideNavigation,
      ce = co(G, I, c),
      me = (F && F.flushSync) === !0,
      ee = Ks(ce, G, I.pathname);
    if ((ee.active && ee.matches && (ce = ee.matches), !ce)) {
      let { error: ze, notFoundMatches: St, route: ct } = Wo(I.pathname);
      Pr(
        I,
        { matches: St, loaderData: {}, errors: { [ct.id]: ze } },
        { flushSync: me }
      );
      return;
    }
    if (
      N.initialized &&
      !ae &&
      BL(N.location, I) &&
      !(F && F.submission && sr(F.submission.formMethod))
    ) {
      Pr(I, { matches: ce }, { flushSync: me });
      return;
    }
    V = new AbortController();
    let we = ss(e.history, I, V.signal, F && F.submission),
      fe;
    if (F && F.pendingError)
      fe = [ws(ce).route.id, { type: Ye.error, error: F.pendingError }];
    else if (F && F.submission && sr(F.submission.formMethod)) {
      let ze = await Qn(we, I, F.submission, ce, ee.active, {
        replace: F.replace,
        flushSync: me,
      });
      if (ze.shortCircuited) return;
      if (ze.pendingActionResult) {
        let [St, ct] = ze.pendingActionResult;
        if (wn(ct) && cf(ct.error) && ct.error.status === 404) {
          (V = null),
            Pr(I, {
              matches: ze.matches,
              loaderData: {},
              errors: { [St]: ct.error },
            });
          return;
        }
      }
      (ce = ze.matches || ce),
        (fe = ze.pendingActionResult),
        (ie = up(I, F.submission)),
        (me = !1),
        (ee.active = !1),
        (we = ss(e.history, we.url, we.signal));
    }
    let {
      shortCircuited: de,
      matches: Fe,
      loaderData: je,
      errors: Ue,
    } = await Ca(
      we,
      I,
      ce,
      ee.active,
      ie,
      F && F.submission,
      F && F.fetcherSubmission,
      F && F.replace,
      F && F.initialHydration === !0,
      me,
      fe
    );
    de ||
      ((V = null),
      Pr(I, ot({ matches: Fe || ce }, d1(fe), { loaderData: je, errors: Ue })));
  }
  async function Qn(M, I, F, G, ie, ce) {
    ce === void 0 && (ce = {}), Nr();
    let me = VL(I, F);
    if ((vt({ navigation: me }, { flushSync: ce.flushSync === !0 }), ie)) {
      let fe = await Ho(G, I.pathname, M.signal);
      if (fe.type === "aborted") return { shortCircuited: !0 };
      if (fe.type === "error") {
        let { boundaryId: de, error: Fe } = qi(I.pathname, fe);
        return {
          matches: fe.partialMatches,
          pendingActionResult: [de, { type: Ye.error, error: Fe }],
        };
      } else if (fe.matches) G = fe.matches;
      else {
        let { notFoundMatches: de, error: Fe, route: je } = Wo(I.pathname);
        return {
          matches: de,
          pendingActionResult: [je.id, { type: Ye.error, error: Fe }],
        };
      }
    }
    let ee,
      we = Ll(G, I);
    if (!we.route.action && !we.route.lazy)
      ee = {
        type: Ye.error,
        error: Kt(405, {
          method: M.method,
          pathname: I.pathname,
          routeId: we.route.id,
        }),
      };
    else if (((ee = (await Xn("action", M, [we], G))[0]), M.signal.aborted))
      return { shortCircuited: !0 };
    if (go(ee)) {
      let fe;
      return (
        ce && ce.replace != null
          ? (fe = ce.replace)
          : (fe =
              a1(ee.response.headers.get("Location"), new URL(M.url), c) ===
              N.location.pathname + N.location.search),
        await Ki(M, ee, { submission: F, replace: fe }),
        { shortCircuited: !0 }
      );
    }
    if (mo(ee)) throw Kt(400, { type: "defer-action" });
    if (wn(ee)) {
      let fe = ws(G, we.route.id);
      return (
        (ce && ce.replace) !== !0 && (H = yt.Push),
        { matches: G, pendingActionResult: [fe.route.id, ee] }
      );
    }
    return { matches: G, pendingActionResult: [we.route.id, ee] };
  }
  async function Ca(M, I, F, G, ie, ce, me, ee, we, fe, de) {
    let Fe = ie || up(I, ce),
      je = ce || me || g1(Fe),
      Ue = !re && (!m.v7_partialHydration || !we);
    if (G) {
      if (Ue) {
        let tt = Ta(de);
        vt(ot({ navigation: Fe }, tt !== void 0 ? { actionData: tt } : {}), {
          flushSync: fe,
        });
      }
      let Se = await Ho(F, I.pathname, M.signal);
      if (Se.type === "aborted") return { shortCircuited: !0 };
      if (Se.type === "error") {
        let { boundaryId: tt, error: Wt } = qi(I.pathname, Se);
        return {
          matches: Se.partialMatches,
          loaderData: {},
          errors: { [tt]: Wt },
        };
      } else if (Se.matches) F = Se.matches;
      else {
        let { error: tt, notFoundMatches: Wt, route: Ke } = Wo(I.pathname);
        return { matches: Wt, loaderData: {}, errors: { [Ke.id]: tt } };
      }
    }
    let ze = u || a,
      [St, ct] = o1(
        e.history,
        N,
        F,
        je,
        I,
        m.v7_partialHydration && we === !0,
        m.v7_skipActionErrorRevalidation,
        ae,
        Ae,
        Ge,
        xt,
        Me,
        he,
        ze,
        c,
        de
      );
    if (
      (Vs(
        (Se) =>
          !(F && F.some((tt) => tt.route.id === Se)) ||
          (St && St.some((tt) => tt.route.id === Se))
      ),
      (ne = ++Z),
      St.length === 0 && ct.length === 0)
    ) {
      let Se = Bo();
      return (
        Pr(
          I,
          ot(
            {
              matches: F,
              loaderData: {},
              errors: de && wn(de[1]) ? { [de[0]]: de[1].error } : null,
            },
            d1(de),
            Se ? { fetchers: new Map(N.fetchers) } : {}
          ),
          { flushSync: fe }
        ),
        { shortCircuited: !0 }
      );
    }
    if (Ue) {
      let Se = {};
      if (!G) {
        Se.navigation = Fe;
        let tt = Ta(de);
        tt !== void 0 && (Se.actionData = tt);
      }
      ct.length > 0 && (Se.fetchers = Vi(ct)), vt(Se, { flushSync: fe });
    }
    ct.forEach((Se) => {
      Pe.has(Se.key) && Ln(Se.key),
        Se.controller && Pe.set(Se.key, Se.controller);
    });
    let mr = () => ct.forEach((Se) => Ln(Se.key));
    V && V.signal.addEventListener("abort", mr);
    let { loaderResults: gr, fetcherResults: Jn } = await Pa(
      N.matches,
      F,
      St,
      ct,
      M
    );
    if (M.signal.aborted) return { shortCircuited: !0 };
    V && V.signal.removeEventListener("abort", mr),
      ct.forEach((Se) => Pe.delete(Se.key));
    let ni = h1([...gr, ...Jn]);
    if (ni) {
      if (ni.idx >= St.length) {
        let Se = ct[ni.idx - St.length].key;
        he.add(Se);
      }
      return await Ki(M, ni.result, { replace: ee }), { shortCircuited: !0 };
    }
    let { loaderData: ri, errors: kn } = c1(N, F, St, gr, de, ct, Jn, Tt);
    Tt.forEach((Se, tt) => {
      Se.subscribe((Wt) => {
        (Wt || Se.done) && Tt.delete(tt);
      });
    }),
      m.v7_partialHydration &&
        we &&
        N.errors &&
        Object.entries(N.errors)
          .filter((Se) => {
            let [tt] = Se;
            return !St.some((Wt) => Wt.route.id === tt);
          })
          .forEach((Se) => {
            let [tt, Wt] = Se;
            kn = Object.assign(kn || {}, { [tt]: Wt });
          });
    let Yi = Bo(),
      Qi = Uo(ne),
      Xi = Yi || Qi || ct.length > 0;
    return ot(
      { matches: F, loaderData: ri, errors: kn },
      Xi ? { fetchers: new Map(N.fetchers) } : {}
    );
  }
  function Ta(M) {
    if (M && !wn(M[1])) return { [M[0]]: M[1].data };
    if (N.actionData)
      return Object.keys(N.actionData).length === 0 ? null : N.actionData;
  }
  function Vi(M) {
    return (
      M.forEach((I) => {
        let F = N.fetchers.get(I.key),
          G = Sl(void 0, F ? F.data : void 0);
        N.fetchers.set(I.key, G);
      }),
      new Map(N.fetchers)
    );
  }
  function cn(M, I, F, G) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    Pe.has(M) && Ln(M);
    let ie = (G && G.unstable_flushSync) === !0,
      ce = u || a,
      me = bh(
        N.location,
        N.matches,
        c,
        m.v7_prependBasename,
        F,
        m.v7_relativeSplatPath,
        I,
        G == null ? void 0 : G.relative
      ),
      ee = co(ce, me, c),
      we = Ks(ee, ce, me);
    if ((we.active && we.matches && (ee = we.matches), !ee)) {
      fn(M, I, Kt(404, { pathname: me }), { flushSync: ie });
      return;
    }
    let {
      path: fe,
      submission: de,
      error: Fe,
    } = i1(m.v7_normalizeFormMethod, !0, me, G);
    if (Fe) {
      fn(M, I, Fe, { flushSync: ie });
      return;
    }
    let je = Ll(ee, fe);
    if (((D = (G && G.preventScrollReset) === !0), de && sr(de.formMethod))) {
      Gi(M, I, fe, je, ee, we.active, ie, de);
      return;
    }
    Me.set(M, { routeId: I, path: fe }),
      jo(M, I, fe, je, ee, we.active, ie, de);
  }
  async function Gi(M, I, F, G, ie, ce, me, ee) {
    Nr(), Me.delete(M);
    function we(Ke) {
      if (!Ke.route.action && !Ke.route.lazy) {
        let Mn = Kt(405, { method: ee.formMethod, pathname: F, routeId: I });
        return fn(M, I, Mn, { flushSync: me }), !0;
      }
      return !1;
    }
    if (!ce && we(G)) return;
    let fe = N.fetchers.get(M);
    $t(M, GL(ee, fe), { flushSync: me });
    let de = new AbortController(),
      Fe = ss(e.history, F, de.signal, ee);
    if (ce) {
      let Ke = await Ho(ie, F, Fe.signal);
      if (Ke.type === "aborted") return;
      if (Ke.type === "error") {
        let { error: Mn } = qi(F, Ke);
        fn(M, I, Mn, { flushSync: me });
        return;
      } else if (Ke.matches) {
        if (((ie = Ke.matches), (G = Ll(ie, F)), we(G))) return;
      } else {
        fn(M, I, Kt(404, { pathname: F }), { flushSync: me });
        return;
      }
    }
    Pe.set(M, de);
    let je = Z,
      ze = (await Xn("action", Fe, [G], ie))[0];
    if (Fe.signal.aborted) {
      Pe.get(M) === de && Pe.delete(M);
      return;
    }
    if (m.v7_fetcherPersist && xt.has(M)) {
      if (go(ze) || wn(ze)) {
        $t(M, vi(void 0));
        return;
      }
    } else {
      if (go(ze))
        if ((Pe.delete(M), ne > je)) {
          $t(M, vi(void 0));
          return;
        } else
          return (
            he.add(M), $t(M, Sl(ee)), Ki(Fe, ze, { fetcherSubmission: ee })
          );
      if (wn(ze)) {
        fn(M, I, ze.error);
        return;
      }
    }
    if (mo(ze)) throw Kt(400, { type: "defer-action" });
    let St = N.navigation.location || N.location,
      ct = ss(e.history, St, de.signal),
      mr = u || a,
      gr =
        N.navigation.state !== "idle"
          ? co(mr, N.navigation.location, c)
          : N.matches;
    Te(gr, "Didn't find any matches after fetcher action");
    let Jn = ++Z;
    le.set(M, Jn);
    let ni = Sl(ee, ze.data);
    N.fetchers.set(M, ni);
    let [ri, kn] = o1(
      e.history,
      N,
      gr,
      ee,
      St,
      !1,
      m.v7_skipActionErrorRevalidation,
      ae,
      Ae,
      Ge,
      xt,
      Me,
      he,
      mr,
      c,
      [G.route.id, ze]
    );
    kn
      .filter((Ke) => Ke.key !== M)
      .forEach((Ke) => {
        let Mn = Ke.key,
          Ys = N.fetchers.get(Mn),
          La = Sl(void 0, Ys ? Ys.data : void 0);
        N.fetchers.set(Mn, La),
          Pe.has(Mn) && Ln(Mn),
          Ke.controller && Pe.set(Mn, Ke.controller);
      }),
      vt({ fetchers: new Map(N.fetchers) });
    let Yi = () => kn.forEach((Ke) => Ln(Ke.key));
    de.signal.addEventListener("abort", Yi);
    let { loaderResults: Qi, fetcherResults: Xi } = await Pa(
      N.matches,
      gr,
      ri,
      kn,
      ct
    );
    if (de.signal.aborted) return;
    de.signal.removeEventListener("abort", Yi),
      le.delete(M),
      Pe.delete(M),
      kn.forEach((Ke) => Pe.delete(Ke.key));
    let Se = h1([...Qi, ...Xi]);
    if (Se) {
      if (Se.idx >= ri.length) {
        let Ke = kn[Se.idx - ri.length].key;
        he.add(Ke);
      }
      return Ki(ct, Se.result);
    }
    let { loaderData: tt, errors: Wt } = c1(
      N,
      N.matches,
      ri,
      Qi,
      void 0,
      kn,
      Xi,
      Tt
    );
    if (N.fetchers.has(M)) {
      let Ke = vi(ze.data);
      N.fetchers.set(M, Ke);
    }
    Uo(Jn),
      N.navigation.state === "loading" && Jn > ne
        ? (Te(H, "Expected pending action"),
          V && V.abort(),
          Pr(N.navigation.location, {
            matches: gr,
            loaderData: tt,
            errors: Wt,
            fetchers: new Map(N.fetchers),
          }))
        : (vt({
            errors: Wt,
            loaderData: f1(N.loaderData, tt, gr, Wt),
            fetchers: new Map(N.fetchers),
          }),
          (ae = !1));
  }
  async function jo(M, I, F, G, ie, ce, me, ee) {
    let we = N.fetchers.get(M);
    $t(M, Sl(ee, we ? we.data : void 0), { flushSync: me });
    let fe = new AbortController(),
      de = ss(e.history, F, fe.signal);
    if (ce) {
      let ze = await Ho(ie, F, de.signal);
      if (ze.type === "aborted") return;
      if (ze.type === "error") {
        let { error: St } = qi(F, ze);
        fn(M, I, St, { flushSync: me });
        return;
      } else if (ze.matches) (ie = ze.matches), (G = Ll(ie, F));
      else {
        fn(M, I, Kt(404, { pathname: F }), { flushSync: me });
        return;
      }
    }
    Pe.set(M, fe);
    let Fe = Z,
      Ue = (await Xn("loader", de, [G], ie))[0];
    if (
      (mo(Ue) && (Ue = (await $2(Ue, de.signal, !0)) || Ue),
      Pe.get(M) === fe && Pe.delete(M),
      !de.signal.aborted)
    ) {
      if (xt.has(M)) {
        $t(M, vi(void 0));
        return;
      }
      if (go(Ue))
        if (ne > Fe) {
          $t(M, vi(void 0));
          return;
        } else {
          he.add(M), await Ki(de, Ue);
          return;
        }
      if (wn(Ue)) {
        fn(M, I, Ue.error);
        return;
      }
      Te(!mo(Ue), "Unhandled fetcher deferred data"), $t(M, vi(Ue.data));
    }
  }
  async function Ki(M, I, F) {
    let {
      submission: G,
      fetcherSubmission: ie,
      replace: ce,
    } = F === void 0 ? {} : F;
    I.response.headers.has("X-Remix-Revalidate") && (ae = !0);
    let me = I.response.headers.get("Location");
    Te(me, "Expected a Location header on the redirect Response"),
      (me = a1(me, new URL(M.url), c));
    let ee = aa(N.location, me, { _isRedirect: !0 });
    if (n) {
      let Ue = !1;
      if (I.response.headers.has("X-Remix-Reload-Document")) Ue = !0;
      else if (qm.test(me)) {
        const ze = e.history.createURL(me);
        Ue = ze.origin !== t.location.origin || Jr(ze.pathname, c) == null;
      }
      if (Ue) {
        ce ? t.location.replace(me) : t.location.assign(me);
        return;
      }
    }
    V = null;
    let we = ce === !0 ? yt.Replace : yt.Push,
      { formMethod: fe, formAction: de, formEncType: Fe } = N.navigation;
    !G && !ie && fe && de && Fe && (G = g1(N.navigation));
    let je = G || ie;
    if (TL.has(I.response.status) && je && sr(je.formMethod))
      await Rr(we, ee, {
        submission: ot({}, je, { formAction: me }),
        preventScrollReset: D,
      });
    else {
      let Ue = up(ee, G);
      await Rr(we, ee, {
        overrideNavigation: Ue,
        fetcherSubmission: ie,
        preventScrollReset: D,
      });
    }
  }
  async function Xn(M, I, F, G) {
    try {
      let ie = await IL(d, M, I, F, G, s, i);
      return await Promise.all(
        ie.map((ce, me) => {
          if ($L(ce)) {
            let ee = ce.result;
            return {
              type: Ye.redirect,
              response: DL(ee, I, F[me].route.id, G, c, m.v7_relativeSplatPath),
            };
          }
          return jL(ce);
        })
      );
    } catch (ie) {
      return F.map(() => ({ type: Ye.error, error: ie }));
    }
  }
  async function Pa(M, I, F, G, ie) {
    let [ce, ...me] = await Promise.all([
      F.length ? Xn("loader", ie, F, I) : [],
      ...G.map((ee) => {
        if (ee.matches && ee.match && ee.controller) {
          let we = ss(e.history, ee.path, ee.controller.signal);
          return Xn("loader", we, [ee.match], ee.matches).then((fe) => fe[0]);
        } else
          return Promise.resolve({
            type: Ye.error,
            error: Kt(404, { pathname: ee.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        m1(
          M,
          F,
          ce,
          ce.map(() => ie.signal),
          !1,
          N.loaderData
        ),
        m1(
          M,
          G.map((ee) => ee.match),
          me,
          G.map((ee) => (ee.controller ? ee.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: ce, fetcherResults: me }
    );
  }
  function Nr() {
    (ae = !0),
      Ae.push(...Vs()),
      Me.forEach((M, I) => {
        Pe.has(I) && (Ge.push(I), Ln(I));
      });
  }
  function $t(M, I, F) {
    F === void 0 && (F = {}),
      N.fetchers.set(M, I),
      vt(
        { fetchers: new Map(N.fetchers) },
        { flushSync: (F && F.flushSync) === !0 }
      );
  }
  function fn(M, I, F, G) {
    G === void 0 && (G = {});
    let ie = ws(N.matches, I);
    ti(M),
      vt(
        { errors: { [ie.route.id]: F }, fetchers: new Map(N.fetchers) },
        { flushSync: (G && G.flushSync) === !0 }
      );
  }
  function Do(M) {
    return (
      m.v7_fetcherPersist &&
        (On.set(M, (On.get(M) || 0) + 1), xt.has(M) && xt.delete(M)),
      N.fetchers.get(M) || PL
    );
  }
  function ti(M) {
    let I = N.fetchers.get(M);
    Pe.has(M) && !(I && I.state === "loading" && le.has(M)) && Ln(M),
      Me.delete(M),
      le.delete(M),
      he.delete(M),
      xt.delete(M),
      N.fetchers.delete(M);
  }
  function Ws(M) {
    if (m.v7_fetcherPersist) {
      let I = (On.get(M) || 0) - 1;
      I <= 0 ? (On.delete(M), xt.add(M)) : On.set(M, I);
    } else ti(M);
    vt({ fetchers: new Map(N.fetchers) });
  }
  function Ln(M) {
    let I = Pe.get(M);
    Te(I, "Expected fetch controller: " + M), I.abort(), Pe.delete(M);
  }
  function Fo(M) {
    for (let I of M) {
      let F = Do(I),
        G = vi(F.data);
      N.fetchers.set(I, G);
    }
  }
  function Bo() {
    let M = [],
      I = !1;
    for (let F of he) {
      let G = N.fetchers.get(F);
      Te(G, "Expected fetcher: " + F),
        G.state === "loading" && (he.delete(F), M.push(F), (I = !0));
    }
    return Fo(M), I;
  }
  function Uo(M) {
    let I = [];
    for (let [F, G] of le)
      if (G < M) {
        let ie = N.fetchers.get(F);
        Te(ie, "Expected fetcher: " + F),
          ie.state === "loading" && (Ln(F), le.delete(F), I.push(F));
      }
    return Fo(I), I.length > 0;
  }
  function Hs(M, I) {
    let F = N.blockers.get(M) || xl;
    return gt.get(M) !== I && gt.set(M, I), F;
  }
  function Ra(M) {
    N.blockers.delete(M), gt.delete(M);
  }
  function $o(M, I) {
    let F = N.blockers.get(M) || xl;
    Te(
      (F.state === "unblocked" && I.state === "blocked") ||
        (F.state === "blocked" && I.state === "blocked") ||
        (F.state === "blocked" && I.state === "proceeding") ||
        (F.state === "blocked" && I.state === "unblocked") ||
        (F.state === "proceeding" && I.state === "unblocked"),
      "Invalid blocker state transition: " + F.state + " -> " + I.state
    );
    let G = new Map(N.blockers);
    G.set(M, I), vt({ blockers: G });
  }
  function Na(M) {
    let { currentLocation: I, nextLocation: F, historyAction: G } = M;
    if (gt.size === 0) return;
    gt.size > 1 && Is(!1, "A router only supports one blocker at a time");
    let ie = Array.from(gt.entries()),
      [ce, me] = ie[ie.length - 1],
      ee = N.blockers.get(ce);
    if (
      !(ee && ee.state === "proceeding") &&
      me({ currentLocation: I, nextLocation: F, historyAction: G })
    )
      return ce;
  }
  function Wo(M) {
    let I = Kt(404, { pathname: M }),
      F = u || a,
      { matches: G, route: ie } = p1(F);
    return Vs(), { notFoundMatches: G, route: ie, error: I };
  }
  function qi(M, I) {
    return {
      boundaryId: ws(I.partialMatches).route.id,
      error: Kt(400, {
        type: "route-discovery",
        pathname: M,
        message:
          I.error != null && "message" in I.error ? I.error : String(I.error),
      }),
    };
  }
  function Vs(M) {
    let I = [];
    return (
      Tt.forEach((F, G) => {
        (!M || M(G)) && (F.cancel(), I.push(G), Tt.delete(G));
      }),
      I
    );
  }
  function wf(M, I, F) {
    if (((b = M), (O = I), (T = F || null), !y && N.navigation === ap)) {
      y = !0;
      let G = Gs(N.location, N.matches);
      G != null && vt({ restoreScrollPosition: G });
    }
    return () => {
      (b = null), (O = null), (T = null);
    };
  }
  function Oa(M, I) {
    return (
      (T &&
        T(
          M,
          I.map((G) => iL(G, N.loaderData))
        )) ||
      M.key
    );
  }
  function xf(M, I) {
    if (b && O) {
      let F = Oa(M, I);
      b[F] = O();
    }
  }
  function Gs(M, I) {
    if (b) {
      let F = Oa(M, I),
        G = b[F];
      if (typeof G == "number") return G;
    }
    return null;
  }
  function Ks(M, I, F) {
    if (p)
      if (M) {
        let G = M[M.length - 1].route;
        if (G.path && (G.path === "*" || G.path.endsWith("/*")))
          return { active: !0, matches: Xu(I, F, c, !0) };
      } else return { active: !0, matches: Xu(I, F, c, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Ho(M, I, F) {
    let G = M,
      ie = G.length > 0 ? G[G.length - 1].route : null;
    for (;;) {
      let ce = u == null,
        me = u || a;
      try {
        await ML(p, I, G, me, s, i, ei, F);
      } catch (de) {
        return { type: "error", error: de, partialMatches: G };
      } finally {
        ce && (a = [...a]);
      }
      if (F.aborted) return { type: "aborted" };
      let ee = co(me, I, c),
        we = !1;
      if (ee) {
        let de = ee[ee.length - 1].route;
        if (de.index) return { type: "success", matches: ee };
        if (de.path && de.path.length > 0)
          if (de.path === "*") we = !0;
          else return { type: "success", matches: ee };
      }
      let fe = Xu(me, I, c, !0);
      if (
        !fe ||
        G.map((de) => de.route.id).join("-") ===
          fe.map((de) => de.route.id).join("-")
      )
        return { type: "success", matches: we ? ee : null };
      if (((G = fe), (ie = G[G.length - 1].route), ie.path === "*"))
        return { type: "success", matches: G };
    }
  }
  function Sf(M) {
    (s = {}), (u = ua(M, i, void 0, s));
  }
  function qs(M, I) {
    let F = u == null;
    F2(M, I, u || a, s, i), F && ((a = [...a]), vt({}));
  }
  return (
    (j = {
      get basename() {
        return c;
      },
      get future() {
        return m;
      },
      get state() {
        return N;
      },
      get routes() {
        return a;
      },
      get window() {
        return t;
      },
      initialize: Wi,
      subscribe: zo,
      enableScrollRestoration: wf,
      navigate: Jt,
      fetch: cn,
      revalidate: Hi,
      createHref: (M) => e.history.createHref(M),
      encodeLocation: (M) => e.history.encodeLocation(M),
      getFetcher: Do,
      deleteFetcher: Ws,
      dispose: yf,
      getBlocker: Hs,
      deleteBlocker: Ra,
      patchRoutes: qs,
      _internalFetchControllers: Pe,
      _internalActiveDeferreds: Tt,
      _internalSetRoutes: Sf,
    }),
    j
  );
}
function OL(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function bh(e, t, n, r, i, s, a, u) {
  let c, d;
  if (a) {
    c = [];
    for (let m of t)
      if ((c.push(m), m.route.id === a)) {
        d = m;
        break;
      }
  } else (c = t), (d = t[t.length - 1]);
  let p = Gm(i || ".", Vm(c, s), Jr(e.pathname, n) || e.pathname, u === "path");
  return (
    i == null && ((p.search = e.search), (p.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      d &&
      d.route.index &&
      !Ym(p.search) &&
      (p.search = p.search ? p.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (p.pathname = p.pathname === "/" ? n : Gr([n, p.pathname])),
    No(p)
  );
}
function i1(e, t, n, r) {
  if (!r || !OL(r)) return { path: n };
  if (r.formMethod && !HL(r.formMethod))
    return { path: n, error: Kt(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: Kt(400, { type: "invalid-body" }) }),
    s = r.formMethod || "get",
    a = e ? s.toUpperCase() : s.toLowerCase(),
    u = B2(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!sr(a)) return i();
      let g =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((_, b) => {
              let [T, O] = b;
              return (
                "" +
                _ +
                T +
                "=" +
                O +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: a,
          formAction: u,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: g,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!sr(a)) return i();
      try {
        let g = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: a,
            formAction: u,
            formEncType: r.formEncType,
            formData: void 0,
            json: g,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  Te(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let c, d;
  if (r.formData) (c = Ch(r.formData)), (d = r.formData);
  else if (r.body instanceof FormData) (c = Ch(r.body)), (d = r.body);
  else if (r.body instanceof URLSearchParams) (c = r.body), (d = u1(c));
  else if (r.body == null) (c = new URLSearchParams()), (d = new FormData());
  else
    try {
      (c = new URLSearchParams(r.body)), (d = u1(c));
    } catch {
      return i();
    }
  let p = {
    formMethod: a,
    formAction: u,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: d,
    json: void 0,
    text: void 0,
  };
  if (sr(p.formMethod)) return { path: n, submission: p };
  let m = Bi(n);
  return (
    t && m.search && Ym(m.search) && c.append("index", ""),
    (m.search = "?" + c),
    { path: No(m), submission: p }
  );
}
function LL(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function o1(e, t, n, r, i, s, a, u, c, d, p, m, g, _, b, T) {
  let O = T ? (wn(T[1]) ? T[1].error : T[1].data) : void 0,
    y = e.createURL(t.location),
    S = e.createURL(i),
    w = T && wn(T[1]) ? T[0] : void 0,
    P = w ? LL(n, w) : n,
    j = T ? T[1].statusCode : void 0,
    N = a && j && j >= 400,
    H = P.filter((V, U) => {
      let { route: J } = V;
      if (J.lazy) return !0;
      if (J.loader == null) return !1;
      if (s)
        return typeof J.loader != "function" || J.loader.hydrate
          ? !0
          : t.loaderData[J.id] === void 0 &&
              (!t.errors || t.errors[J.id] === void 0);
      if (
        kL(t.loaderData, t.matches[U], V) ||
        c.some((ae) => ae === V.route.id)
      )
        return !0;
      let Q = t.matches[U],
        re = V;
      return s1(
        V,
        ot(
          {
            currentUrl: y,
            currentParams: Q.params,
            nextUrl: S,
            nextParams: re.params,
          },
          r,
          {
            actionResult: O,
            actionStatus: j,
            defaultShouldRevalidate: N
              ? !1
              : u ||
                y.pathname + y.search === S.pathname + S.search ||
                y.search !== S.search ||
                D2(Q, re),
          }
        )
      );
    }),
    D = [];
  return (
    m.forEach((V, U) => {
      if (s || !n.some((Ae) => Ae.route.id === V.routeId) || p.has(U)) return;
      let J = co(_, V.path, b);
      if (!J) {
        D.push({
          key: U,
          routeId: V.routeId,
          path: V.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let Q = t.fetchers.get(U),
        re = Ll(J, V.path),
        ae = !1;
      g.has(U)
        ? (ae = !1)
        : d.includes(U)
        ? (ae = !0)
        : Q && Q.state !== "idle" && Q.data === void 0
        ? (ae = u)
        : (ae = s1(
            re,
            ot(
              {
                currentUrl: y,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: S,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: O,
                actionStatus: j,
                defaultShouldRevalidate: N ? !1 : u,
              }
            )
          )),
        ae &&
          D.push({
            key: U,
            routeId: V.routeId,
            path: V.path,
            matches: J,
            match: re,
            controller: new AbortController(),
          });
    }),
    [H, D]
  );
}
function kL(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function D2(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function s1(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function ML(e, t, n, r, i, s, a, u) {
  let c = [t, ...n.map((d) => d.route.id)].join("-");
  try {
    let d = a.get(c);
    d ||
      ((d = e({
        path: t,
        matches: n,
        patch: (p, m) => {
          u.aborted || F2(p, m, r, i, s);
        },
      })),
      a.set(c, d)),
      d && UL(d) && (await d);
  } finally {
    a.delete(c);
  }
}
function F2(e, t, n, r, i) {
  if (e) {
    var s;
    let a = r[e];
    Te(a, "No route found to patch children into: routeId = " + e);
    let u = ua(
      t,
      i,
      [
        e,
        "patch",
        String(((s = a.children) == null ? void 0 : s.length) || "0"),
      ],
      r
    );
    a.children ? a.children.push(...u) : (a.children = u);
  } else {
    let a = ua(t, i, ["patch", String(n.length || "0")], r);
    n.push(...a);
  }
}
async function l1(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  Te(i, "No route found in manifest");
  let s = {};
  for (let a in r) {
    let c = i[a] !== void 0 && a !== "hasErrorBoundary";
    Is(
      !c,
      'Route "' +
        i.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !c && !nL.has(a) && (s[a] = r[a]);
  }
  Object.assign(i, s), Object.assign(i, ot({}, t(i), { lazy: void 0 }));
}
function AL(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function IL(e, t, n, r, i, s, a, u) {
  let c = r.reduce((m, g) => m.add(g.route.id), new Set()),
    d = new Set(),
    p = await e({
      matches: i.map((m) => {
        let g = c.has(m.route.id);
        return ot({}, m, {
          shouldLoad: g,
          resolve: (b) => (
            d.add(m.route.id),
            g
              ? zL(t, n, m, s, a, b, u)
              : Promise.resolve({ type: Ye.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: i[0].params,
      context: u,
    });
  return (
    i.forEach((m) =>
      Te(
        d.has(m.route.id),
        '`match.resolve()` was not called for route id "' +
          m.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    p.filter((m, g) => c.has(i[g].route.id))
  );
}
async function zL(e, t, n, r, i, s, a) {
  let u,
    c,
    d = (p) => {
      let m,
        g = new Promise((T, O) => (m = O));
      (c = () => m()), t.signal.addEventListener("abort", c);
      let _ = (T) =>
          typeof p != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : p(
                { request: t, params: n.params, context: a },
                ...(T !== void 0 ? [T] : [])
              ),
        b;
      return (
        s
          ? (b = s((T) => _(T)))
          : (b = (async () => {
              try {
                return { type: "data", result: await _() };
              } catch (T) {
                return { type: "error", result: T };
              }
            })()),
        Promise.race([b, g])
      );
    };
  try {
    let p = n.route[e];
    if (n.route.lazy)
      if (p) {
        let m,
          [g] = await Promise.all([
            d(p).catch((_) => {
              m = _;
            }),
            l1(n.route, i, r),
          ]);
        if (m !== void 0) throw m;
        u = g;
      } else if ((await l1(n.route, i, r), (p = n.route[e]), p)) u = await d(p);
      else if (e === "action") {
        let m = new URL(t.url),
          g = m.pathname + m.search;
        throw Kt(405, { method: t.method, pathname: g, routeId: n.route.id });
      } else return { type: Ye.data, result: void 0 };
    else if (p) u = await d(p);
    else {
      let m = new URL(t.url),
        g = m.pathname + m.search;
      throw Kt(404, { pathname: g });
    }
    Te(
      u.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (p) {
    return { type: Ye.error, result: p };
  } finally {
    c && t.signal.removeEventListener("abort", c);
  }
  return u;
}
async function jL(e) {
  let { result: t, type: n, status: r } = e;
  if (U2(t)) {
    let a;
    try {
      let u = t.headers.get("Content-Type");
      u && /\bapplication\/json\b/.test(u)
        ? t.body == null
          ? (a = null)
          : (a = await t.json())
        : (a = await t.text());
    } catch (u) {
      return { type: Ye.error, error: u };
    }
    return n === Ye.error
      ? {
          type: Ye.error,
          error: new Km(t.status, t.statusText, a),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: Ye.data, data: a, statusCode: t.status, headers: t.headers };
  }
  if (n === Ye.error)
    return { type: Ye.error, error: t, statusCode: cf(t) ? t.status : r };
  if (WL(t)) {
    var i, s;
    return {
      type: Ye.deferred,
      deferredData: t,
      statusCode: (i = t.init) == null ? void 0 : i.status,
      headers:
        ((s = t.init) == null ? void 0 : s.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: Ye.data, data: t, statusCode: r };
}
function DL(e, t, n, r, i, s) {
  let a = e.headers.get("Location");
  if (
    (Te(
      a,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !qm.test(a))
  ) {
    let u = r.slice(0, r.findIndex((c) => c.route.id === n) + 1);
    (a = bh(new URL(t.url), u, i, !0, a, s)), e.headers.set("Location", a);
  }
  return e;
}
function a1(e, t, n) {
  if (qm.test(e)) {
    let r = e,
      i = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      s = Jr(i.pathname, n) != null;
    if (i.origin === t.origin && s) return i.pathname + i.search + i.hash;
  }
  return e;
}
function ss(e, t, n, r) {
  let i = e.createURL(B2(t)).toString(),
    s = { signal: n };
  if (r && sr(r.formMethod)) {
    let { formMethod: a, formEncType: u } = r;
    (s.method = a.toUpperCase()),
      u === "application/json"
        ? ((s.headers = new Headers({ "Content-Type": u })),
          (s.body = JSON.stringify(r.json)))
        : u === "text/plain"
        ? (s.body = r.text)
        : u === "application/x-www-form-urlencoded" && r.formData
        ? (s.body = Ch(r.formData))
        : (s.body = r.formData);
  }
  return new Request(i, s);
}
function Ch(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function u1(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function FL(e, t, n, r, i, s) {
  let a = {},
    u = null,
    c,
    d = !1,
    p = {},
    m = r && wn(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((g, _) => {
      let b = t[_].route.id;
      if (
        (Te(!go(g), "Cannot handle redirect results in processLoaderData"),
        wn(g))
      ) {
        let T = g.error;
        m !== void 0 && ((T = m), (m = void 0)), (u = u || {});
        {
          let O = ws(e, b);
          u[O.route.id] == null && (u[O.route.id] = T);
        }
        (a[b] = void 0),
          d || ((d = !0), (c = cf(g.error) ? g.error.status : 500)),
          g.headers && (p[b] = g.headers);
      } else
        mo(g)
          ? (i.set(b, g.deferredData),
            (a[b] = g.deferredData.data),
            g.statusCode != null &&
              g.statusCode !== 200 &&
              !d &&
              (c = g.statusCode),
            g.headers && (p[b] = g.headers))
          : ((a[b] = g.data),
            g.statusCode && g.statusCode !== 200 && !d && (c = g.statusCode),
            g.headers && (p[b] = g.headers));
    }),
    m !== void 0 && r && ((u = { [r[0]]: m }), (a[r[0]] = void 0)),
    { loaderData: a, errors: u, statusCode: c || 200, loaderHeaders: p }
  );
}
function c1(e, t, n, r, i, s, a, u) {
  let { loaderData: c, errors: d } = FL(t, n, r, i, u);
  for (let p = 0; p < s.length; p++) {
    let { key: m, match: g, controller: _ } = s[p];
    Te(
      a !== void 0 && a[p] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let b = a[p];
    if (!(_ && _.signal.aborted))
      if (wn(b)) {
        let T = ws(e.matches, g == null ? void 0 : g.route.id);
        (d && d[T.route.id]) || (d = ot({}, d, { [T.route.id]: b.error })),
          e.fetchers.delete(m);
      } else if (go(b)) Te(!1, "Unhandled fetcher revalidation redirect");
      else if (mo(b)) Te(!1, "Unhandled fetcher deferred data");
      else {
        let T = vi(b.data);
        e.fetchers.set(m, T);
      }
  }
  return { loaderData: c, errors: d };
}
function f1(e, t, n, r) {
  let i = ot({}, t);
  for (let s of n) {
    let a = s.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (i[a] = t[a])
        : e[a] !== void 0 && s.route.loader && (i[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return i;
}
function d1(e) {
  return e
    ? wn(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function ws(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function p1(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Kt(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: i,
      type: s,
      message: a,
    } = t === void 0 ? {} : t,
    u = "Unknown Server Error",
    c = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((u = "Bad Request"),
        s === "route-discovery"
          ? (c =
              'Unable to match URL "' +
              n +
              '" - the `unstable_patchRoutesOnMiss()` ' +
              (`function threw the following error:
` +
                a))
          : i && n && r
          ? (c =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : s === "defer-action"
          ? (c = "defer() is not supported in actions")
          : s === "invalid-body" && (c = "Unable to encode submission body"))
      : e === 403
      ? ((u = "Forbidden"),
        (c = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((u = "Not Found"), (c = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((u = "Method Not Allowed"),
        i && n && r
          ? (c =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (c = 'Invalid request method "' + i.toUpperCase() + '"')),
    new Km(e || 500, u, new Error(c), !0)
  );
}
function h1(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (go(n)) return { result: n, idx: t };
  }
}
function B2(e) {
  let t = typeof e == "string" ? Bi(e) : e;
  return No(ot({}, t, { hash: "" }));
}
function BL(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function UL(e) {
  return typeof e == "object" && e != null && "then" in e;
}
function $L(e) {
  return U2(e.result) && CL.has(e.result.status);
}
function mo(e) {
  return e.type === Ye.deferred;
}
function wn(e) {
  return e.type === Ye.error;
}
function go(e) {
  return (e && e.type) === Ye.redirect;
}
function WL(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function U2(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function HL(e) {
  return bL.has(e.toLowerCase());
}
function sr(e) {
  return EL.has(e.toLowerCase());
}
async function m1(e, t, n, r, i, s) {
  for (let a = 0; a < n.length; a++) {
    let u = n[a],
      c = t[a];
    if (!c) continue;
    let d = e.find((m) => m.route.id === c.route.id),
      p = d != null && !D2(d, c) && (s && s[c.route.id]) !== void 0;
    if (mo(u) && (i || p)) {
      let m = r[a];
      Te(m, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await $2(u, m, i).then((g) => {
          g && (n[a] = g || n[a]);
        });
    }
  }
}
async function $2(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Ye.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: Ye.error, error: i };
      }
    return { type: Ye.data, data: e.deferredData.data };
  }
}
function Ym(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ll(e, t) {
  let n = typeof t == "string" ? Bi(t).search : t.search;
  if (e[e.length - 1].route.index && Ym(n || "")) return e[e.length - 1];
  let r = I2(e);
  return r[r.length - 1];
}
function g1(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: s,
    json: a,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (s != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: s,
        json: void 0,
        text: void 0,
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: a,
        text: void 0,
      };
  }
}
function up(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function VL(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Sl(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function GL(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function vi(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function KL(e, t) {
  try {
    let n = e.sessionStorage.getItem(j2);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, s] of Object.entries(r || {}))
        s && Array.isArray(s) && t.set(i, new Set(s || []));
    }
  } catch {}
}
function qL(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(j2, JSON.stringify(n));
    } catch (r) {
      Is(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function kc() {
  return (
    (kc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    kc.apply(this, arguments)
  );
}
const ya = L.createContext(null),
  Qm = L.createContext(null),
  Ui = L.createContext(null),
  Xm = L.createContext(null),
  $i = L.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  W2 = L.createContext(null);
function YL(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  wa() || Te(!1);
  let { basename: r, navigator: i } = L.useContext(Ui),
    { hash: s, pathname: a, search: u } = ff(e, { relative: n }),
    c = a;
  return (
    r !== "/" && (c = a === "/" ? r : Gr([r, a])),
    i.createHref({ pathname: c, search: u, hash: s })
  );
}
function wa() {
  return L.useContext(Xm) != null;
}
function xa() {
  return wa() || Te(!1), L.useContext(Xm).location;
}
function H2(e) {
  L.useContext(Ui).static || L.useLayoutEffect(e);
}
function QL() {
  let { isDataRoute: e } = L.useContext($i);
  return e ? ck() : XL();
}
function XL() {
  wa() || Te(!1);
  let e = L.useContext(ya),
    { basename: t, future: n, navigator: r } = L.useContext(Ui),
    { matches: i } = L.useContext($i),
    { pathname: s } = xa(),
    a = JSON.stringify(Vm(i, n.v7_relativeSplatPath)),
    u = L.useRef(!1);
  return (
    H2(() => {
      u.current = !0;
    }),
    L.useCallback(
      function (d, p) {
        if ((p === void 0 && (p = {}), !u.current)) return;
        if (typeof d == "number") {
          r.go(d);
          return;
        }
        let m = Gm(d, JSON.parse(a), s, p.relative === "path");
        e == null &&
          t !== "/" &&
          (m.pathname = m.pathname === "/" ? t : Gr([t, m.pathname])),
          (p.replace ? r.replace : r.push)(m, p.state, p);
      },
      [t, r, a, s, e]
    )
  );
}
const JL = L.createContext(null);
function ZL(e) {
  let t = L.useContext($i).outlet;
  return t && L.createElement(JL.Provider, { value: e }, t);
}
function ff(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = L.useContext(Ui),
    { matches: i } = L.useContext($i),
    { pathname: s } = xa(),
    a = JSON.stringify(Vm(i, r.v7_relativeSplatPath));
  return L.useMemo(() => Gm(e, JSON.parse(a), s, n === "path"), [e, a, s, n]);
}
function ek(e, t, n, r) {
  wa() || Te(!1);
  let { navigator: i } = L.useContext(Ui),
    { matches: s } = L.useContext($i),
    a = s[s.length - 1],
    u = a ? a.params : {};
  a && a.pathname;
  let c = a ? a.pathnameBase : "/";
  a && a.route;
  let d = xa(),
    p;
  p = d;
  let m = p.pathname || "/",
    g = m;
  if (c !== "/") {
    let T = c.replace(/^\//, "").split("/");
    g = "/" + m.replace(/^\//, "").split("/").slice(T.length).join("/");
  }
  let _ = co(e, { pathname: g });
  return ok(
    _ &&
      _.map((T) =>
        Object.assign({}, T, {
          params: Object.assign({}, u, T.params),
          pathname: Gr([
            c,
            i.encodeLocation
              ? i.encodeLocation(T.pathname).pathname
              : T.pathname,
          ]),
          pathnameBase:
            T.pathnameBase === "/"
              ? c
              : Gr([
                  c,
                  i.encodeLocation
                    ? i.encodeLocation(T.pathnameBase).pathname
                    : T.pathnameBase,
                ]),
        })
      ),
    s,
    n,
    r
  );
}
function tk() {
  let e = uk(),
    t = cf(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return L.createElement(
    L.Fragment,
    null,
    L.createElement("h2", null, "Unexpected Application Error!"),
    L.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? L.createElement("pre", { style: i }, n) : null,
    null
  );
}
const nk = L.createElement(tk, null);
class rk extends L.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? L.createElement(
          $i.Provider,
          { value: this.props.routeContext },
          L.createElement(W2.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function ik(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = L.useContext(ya);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    L.createElement($i.Provider, { value: t }, r)
  );
}
function ok(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) e = n.matches;
    else return null;
  }
  let a = e,
    u = (i = n) == null ? void 0 : i.errors;
  if (u != null) {
    let p = a.findIndex(
      (m) => m.route.id && (u == null ? void 0 : u[m.route.id]) !== void 0
    );
    p >= 0 || Te(!1), (a = a.slice(0, Math.min(a.length, p + 1)));
  }
  let c = !1,
    d = -1;
  if (n && r && r.v7_partialHydration)
    for (let p = 0; p < a.length; p++) {
      let m = a[p];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (d = p),
        m.route.id)
      ) {
        let { loaderData: g, errors: _ } = n,
          b =
            m.route.loader &&
            g[m.route.id] === void 0 &&
            (!_ || _[m.route.id] === void 0);
        if (m.route.lazy || b) {
          (c = !0), d >= 0 ? (a = a.slice(0, d + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((p, m, g) => {
    let _,
      b = !1,
      T = null,
      O = null;
    n &&
      ((_ = u && m.route.id ? u[m.route.id] : void 0),
      (T = m.route.errorElement || nk),
      c &&
        (d < 0 && g === 0
          ? (fk("route-fallback"), (b = !0), (O = null))
          : d === g &&
            ((b = !0), (O = m.route.hydrateFallbackElement || null))));
    let y = t.concat(a.slice(0, g + 1)),
      S = () => {
        let w;
        return (
          _
            ? (w = T)
            : b
            ? (w = O)
            : m.route.Component
            ? (w = L.createElement(m.route.Component, null))
            : m.route.element
            ? (w = m.route.element)
            : (w = p),
          L.createElement(ik, {
            match: m,
            routeContext: { outlet: p, matches: y, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (m.route.ErrorBoundary || m.route.errorElement || g === 0)
      ? L.createElement(rk, {
          location: n.location,
          revalidation: n.revalidation,
          component: T,
          error: _,
          children: S(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : S();
  }, null);
}
var V2 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(V2 || {}),
  Mc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Mc || {});
function sk(e) {
  let t = L.useContext(ya);
  return t || Te(!1), t;
}
function lk(e) {
  let t = L.useContext(Qm);
  return t || Te(!1), t;
}
function ak(e) {
  let t = L.useContext($i);
  return t || Te(!1), t;
}
function G2(e) {
  let t = ak(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Te(!1), n.route.id;
}
function uk() {
  var e;
  let t = L.useContext(W2),
    n = lk(Mc.UseRouteError),
    r = G2(Mc.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ck() {
  let { router: e } = sk(V2.UseNavigateStable),
    t = G2(Mc.UseNavigateStable),
    n = L.useRef(!1);
  return (
    H2(() => {
      n.current = !0;
    }),
    L.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, kc({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
const v1 = {};
function fk(e, t, n) {
  v1[e] || (v1[e] = !0);
}
function K2(e) {
  return ZL(e.context);
}
function dk(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = yt.Pop,
    navigator: s,
    static: a = !1,
    future: u,
  } = e;
  wa() && Te(!1);
  let c = t.replace(/^\/*/, "/"),
    d = L.useMemo(
      () => ({
        basename: c,
        navigator: s,
        static: a,
        future: kc({ v7_relativeSplatPath: !1 }, u),
      }),
      [c, u, s, a]
    );
  typeof r == "string" && (r = Bi(r));
  let {
      pathname: p = "/",
      search: m = "",
      hash: g = "",
      state: _ = null,
      key: b = "default",
    } = r,
    T = L.useMemo(() => {
      let O = Jr(p, c);
      return O == null
        ? null
        : {
            location: { pathname: O, search: m, hash: g, state: _, key: b },
            navigationType: i,
          };
    }, [c, p, m, g, _, b, i]);
  return T == null
    ? null
    : L.createElement(
        Ui.Provider,
        { value: d },
        L.createElement(Xm.Provider, { children: n, value: T })
      );
}
new Promise(() => {});
function pk(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: L.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: L.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: L.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function zs() {
  return (
    (zs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zs.apply(this, arguments)
  );
}
function q2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function hk(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function mk(e, t) {
  return e.button === 0 && (!t || t === "_self") && !hk(e);
}
const gk = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  vk = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  yk = "6";
try {
  window.__reactRouterVersion = yk;
} catch {}
function wk(e, t) {
  return NL({
    basename: void 0,
    future: zs({}, void 0, { v7_prependBasename: !0 }),
    history: ZO({ window: void 0 }),
    hydrationData: xk(),
    routes: e,
    mapRouteProperties: pk,
    unstable_dataStrategy: void 0,
    unstable_patchRoutesOnMiss: void 0,
    window: void 0,
  }).initialize();
}
function xk() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = zs({}, t, { errors: Sk(t.errors) })), t;
}
function Sk(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new Km(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let s = window[i.__subType];
        if (typeof s == "function")
          try {
            let a = new s(i.message);
            (a.stack = ""), (n[r] = a);
          } catch {}
      }
      if (n[r] == null) {
        let s = new Error(i.message);
        (s.stack = ""), (n[r] = s);
      }
    } else n[r] = i;
  return n;
}
const Y2 = L.createContext({ isTransitioning: !1 }),
  Ek = L.createContext(new Map()),
  _k = "startTransition",
  y1 = bp[_k],
  bk = "flushSync",
  w1 = UN[bk];
function Ck(e) {
  y1 ? y1(e) : e();
}
function El(e) {
  w1 ? w1(e) : e();
}
class Tk {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function Pk(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, s] = L.useState(n.state),
    [a, u] = L.useState(),
    [c, d] = L.useState({ isTransitioning: !1 }),
    [p, m] = L.useState(),
    [g, _] = L.useState(),
    [b, T] = L.useState(),
    O = L.useRef(new Map()),
    { v7_startTransition: y } = r || {},
    S = L.useCallback(
      (D) => {
        y ? Ck(D) : D();
      },
      [y]
    ),
    w = L.useCallback(
      (D, V) => {
        let {
          deletedFetchers: U,
          unstable_flushSync: J,
          unstable_viewTransitionOpts: Q,
        } = V;
        U.forEach((ae) => O.current.delete(ae)),
          D.fetchers.forEach((ae, Ae) => {
            ae.data !== void 0 && O.current.set(Ae, ae.data);
          });
        let re =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!Q || re) {
          J ? El(() => s(D)) : S(() => s(D));
          return;
        }
        if (J) {
          El(() => {
            g && (p && p.resolve(), g.skipTransition()),
              d({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Q.currentLocation,
                nextLocation: Q.nextLocation,
              });
          });
          let ae = n.window.document.startViewTransition(() => {
            El(() => s(D));
          });
          ae.finished.finally(() => {
            El(() => {
              m(void 0), _(void 0), u(void 0), d({ isTransitioning: !1 });
            });
          }),
            El(() => _(ae));
          return;
        }
        g
          ? (p && p.resolve(),
            g.skipTransition(),
            T({
              state: D,
              currentLocation: Q.currentLocation,
              nextLocation: Q.nextLocation,
            }))
          : (u(D),
            d({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Q.currentLocation,
              nextLocation: Q.nextLocation,
            }));
      },
      [n.window, g, p, O, S]
    );
  L.useLayoutEffect(() => n.subscribe(w), [n, w]),
    L.useEffect(() => {
      c.isTransitioning && !c.flushSync && m(new Tk());
    }, [c]),
    L.useEffect(() => {
      if (p && a && n.window) {
        let D = a,
          V = p.promise,
          U = n.window.document.startViewTransition(async () => {
            S(() => s(D)), await V;
          });
        U.finished.finally(() => {
          m(void 0), _(void 0), u(void 0), d({ isTransitioning: !1 });
        }),
          _(U);
      }
    }, [S, a, p, n.window]),
    L.useEffect(() => {
      p && a && i.location.key === a.location.key && p.resolve();
    }, [p, g, i.location, a]),
    L.useEffect(() => {
      !c.isTransitioning &&
        b &&
        (u(b.state),
        d({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: b.currentLocation,
          nextLocation: b.nextLocation,
        }),
        T(void 0));
    }, [c.isTransitioning, b]),
    L.useEffect(() => {}, []);
  let P = L.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (D) => n.navigate(D),
        push: (D, V, U) =>
          n.navigate(D, {
            state: V,
            preventScrollReset: U == null ? void 0 : U.preventScrollReset,
          }),
        replace: (D, V, U) =>
          n.navigate(D, {
            replace: !0,
            state: V,
            preventScrollReset: U == null ? void 0 : U.preventScrollReset,
          }),
      }),
      [n]
    ),
    j = n.basename || "/",
    N = L.useMemo(
      () => ({ router: n, navigator: P, static: !1, basename: j }),
      [n, P, j]
    ),
    H = L.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath]
    );
  return L.createElement(
    L.Fragment,
    null,
    L.createElement(
      ya.Provider,
      { value: N },
      L.createElement(
        Qm.Provider,
        { value: i },
        L.createElement(
          Ek.Provider,
          { value: O.current },
          L.createElement(
            Y2.Provider,
            { value: c },
            L.createElement(
              dk,
              {
                basename: j,
                location: i.location,
                navigationType: i.historyAction,
                navigator: P,
                future: H,
              },
              i.initialized || n.future.v7_partialHydration
                ? L.createElement(Rk, {
                    routes: n.routes,
                    future: n.future,
                    state: i,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
const Rk = L.memo(Nk);
function Nk(e) {
  let { routes: t, future: n, state: r } = e;
  return ek(t, void 0, r, n);
}
const Ok =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Lk = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Sa = L.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: a,
        state: u,
        target: c,
        to: d,
        preventScrollReset: p,
        unstable_viewTransition: m,
      } = t,
      g = q2(t, gk),
      { basename: _ } = L.useContext(Ui),
      b,
      T = !1;
    if (typeof d == "string" && Lk.test(d) && ((b = d), Ok))
      try {
        let w = new URL(window.location.href),
          P = d.startsWith("//") ? new URL(w.protocol + d) : new URL(d),
          j = Jr(P.pathname, _);
        P.origin === w.origin && j != null
          ? (d = j + P.search + P.hash)
          : (T = !0);
      } catch {}
    let O = YL(d, { relative: i }),
      y = Mk(d, {
        replace: a,
        state: u,
        target: c,
        preventScrollReset: p,
        relative: i,
        unstable_viewTransition: m,
      });
    function S(w) {
      r && r(w), w.defaultPrevented || y(w);
    }
    return L.createElement(
      "a",
      zs({}, g, { href: b || O, onClick: T || s ? r : S, ref: n, target: c })
    );
  }),
  Th = L.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: s = "",
        end: a = !1,
        style: u,
        to: c,
        unstable_viewTransition: d,
        children: p,
      } = t,
      m = q2(t, vk),
      g = ff(c, { relative: m.relative }),
      _ = xa(),
      b = L.useContext(Qm),
      { navigator: T, basename: O } = L.useContext(Ui),
      y = b != null && Ak(g) && d === !0,
      S = T.encodeLocation ? T.encodeLocation(g).pathname : g.pathname,
      w = _.pathname,
      P =
        b && b.navigation && b.navigation.location
          ? b.navigation.location.pathname
          : null;
    i ||
      ((w = w.toLowerCase()),
      (P = P ? P.toLowerCase() : null),
      (S = S.toLowerCase())),
      P && O && (P = Jr(P, O) || P);
    const j = S !== "/" && S.endsWith("/") ? S.length - 1 : S.length;
    let N = w === S || (!a && w.startsWith(S) && w.charAt(j) === "/"),
      H =
        P != null &&
        (P === S || (!a && P.startsWith(S) && P.charAt(S.length) === "/")),
      D = { isActive: N, isPending: H, isTransitioning: y },
      V = N ? r : void 0,
      U;
    typeof s == "function"
      ? (U = s(D))
      : (U = [
          s,
          N ? "active" : null,
          H ? "pending" : null,
          y ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let J = typeof u == "function" ? u(D) : u;
    return L.createElement(
      Sa,
      zs({}, m, {
        "aria-current": V,
        className: U,
        ref: n,
        style: J,
        to: c,
        unstable_viewTransition: d,
      }),
      typeof p == "function" ? p(D) : p
    );
  });
var Ph;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Ph || (Ph = {}));
var x1;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(x1 || (x1 = {}));
function kk(e) {
  let t = L.useContext(ya);
  return t || Te(!1), t;
}
function Mk(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: a,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    c = QL(),
    d = xa(),
    p = ff(e, { relative: a });
  return L.useCallback(
    (m) => {
      if (mk(m, n)) {
        m.preventDefault();
        let g = r !== void 0 ? r : No(d) === No(p);
        c(e, {
          replace: g,
          state: i,
          preventScrollReset: s,
          relative: a,
          unstable_viewTransition: u,
        });
      }
    },
    [d, c, p, r, i, n, e, s, a, u]
  );
}
function Ak(e, t) {
  t === void 0 && (t = {});
  let n = L.useContext(Y2);
  n == null && Te(!1);
  let { basename: r } = kk(Ph.useViewTransitionState),
    i = ff(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let s = Jr(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    a = Jr(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Lc(i.pathname, a) != null || Lc(i.pathname, s) != null;
}
function Q2(e, t = []) {
  let n = [];
  function r(s, a) {
    const u = L.createContext(a),
      c = n.length;
    n = [...n, a];
    function d(m) {
      const { scope: g, children: _, ...b } = m,
        T = (g == null ? void 0 : g[e][c]) || u,
        O = L.useMemo(() => b, Object.values(b));
      return x.jsx(T.Provider, { value: O, children: _ });
    }
    function p(m, g) {
      const _ = (g == null ? void 0 : g[e][c]) || u,
        b = L.useContext(_);
      if (b) return b;
      if (a !== void 0) return a;
      throw new Error(`\`${m}\` must be used within \`${s}\``);
    }
    return (d.displayName = s + "Provider"), [d, p];
  }
  const i = () => {
    const s = n.map((a) => L.createContext(a));
    return function (u) {
      const c = (u == null ? void 0 : u[e]) || s;
      return L.useMemo(() => ({ [`__scope${e}`]: { ...u, [e]: c } }), [u, c]);
    };
  };
  return (i.scopeName = e), [r, Ik(i, ...t)];
}
function Ik(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
    return function (s) {
      const a = r.reduce((u, { useScope: c, scopeName: d }) => {
        const m = c(s)[`__scope${d}`];
        return { ...u, ...m };
      }, {});
      return L.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Jm(e) {
  const t = L.useRef(e);
  return (
    L.useEffect(() => {
      t.current = e;
    }),
    L.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
var ca =
  globalThis != null && globalThis.document ? L.useLayoutEffect : () => {};
function zk(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function X2(...e) {
  return (t) => e.forEach((n) => zk(n, t));
}
function J2(...e) {
  return L.useCallback(X2(...e), e);
}
var Zm = L.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    i = L.Children.toArray(n),
    s = i.find(Dk);
  if (s) {
    const a = s.props.children,
      u = i.map((c) =>
        c === s
          ? L.Children.count(a) > 1
            ? L.Children.only(null)
            : L.isValidElement(a)
            ? a.props.children
            : null
          : c
      );
    return x.jsx(Rh, {
      ...r,
      ref: t,
      children: L.isValidElement(a) ? L.cloneElement(a, void 0, u) : null,
    });
  }
  return x.jsx(Rh, { ...r, ref: t, children: n });
});
Zm.displayName = "Slot";
var Rh = L.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (L.isValidElement(n)) {
    const i = Bk(n);
    return L.cloneElement(n, { ...Fk(r, n.props), ref: t ? X2(t, i) : i });
  }
  return L.Children.count(n) > 1 ? L.Children.only(null) : null;
});
Rh.displayName = "SlotClone";
var jk = ({ children: e }) => x.jsx(x.Fragment, { children: e });
function Dk(e) {
  return L.isValidElement(e) && e.type === jk;
}
function Fk(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? i && s
        ? (n[r] = (...u) => {
            s(...u), i(...u);
          })
        : i && (n[r] = i)
      : r === "style"
      ? (n[r] = { ...i, ...s })
      : r === "className" && (n[r] = [i, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Bk(e) {
  var r, i;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Uk = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Ea = Uk.reduce((e, t) => {
    const n = L.forwardRef((r, i) => {
      const { asChild: s, ...a } = r,
        u = s ? Zm : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        x.jsx(u, { ...a, ref: i })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {}),
  eg = "Avatar",
  [$k, U5] = Q2(eg),
  [Wk, Z2] = $k(eg),
  eS = L.forwardRef((e, t) => {
    const { __scopeAvatar: n, ...r } = e,
      [i, s] = L.useState("idle");
    return x.jsx(Wk, {
      scope: n,
      imageLoadingStatus: i,
      onImageLoadingStatusChange: s,
      children: x.jsx(Ea.span, { ...r, ref: t }),
    });
  });
eS.displayName = eg;
var tS = "AvatarImage",
  nS = L.forwardRef((e, t) => {
    const {
        __scopeAvatar: n,
        src: r,
        onLoadingStatusChange: i = () => {},
        ...s
      } = e,
      a = Z2(tS, n),
      u = Hk(r),
      c = Jm((d) => {
        i(d), a.onImageLoadingStatusChange(d);
      });
    return (
      ca(() => {
        u !== "idle" && c(u);
      }, [u, c]),
      u === "loaded" ? x.jsx(Ea.img, { ...s, ref: t, src: r }) : null
    );
  });
nS.displayName = tS;
var rS = "AvatarFallback",
  iS = L.forwardRef((e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...i } = e,
      s = Z2(rS, n),
      [a, u] = L.useState(r === void 0);
    return (
      L.useEffect(() => {
        if (r !== void 0) {
          const c = window.setTimeout(() => u(!0), r);
          return () => window.clearTimeout(c);
        }
      }, [r]),
      a && s.imageLoadingStatus !== "loaded"
        ? x.jsx(Ea.span, { ...i, ref: t })
        : null
    );
  });
iS.displayName = rS;
function Hk(e) {
  const [t, n] = L.useState("idle");
  return (
    ca(() => {
      if (!e) {
        n("error");
        return;
      }
      let r = !0;
      const i = new window.Image(),
        s = (a) => () => {
          r && n(a);
        };
      return (
        n("loading"),
        (i.onload = s("loaded")),
        (i.onerror = s("error")),
        (i.src = e),
        () => {
          r = !1;
        }
      );
    }, [e]),
    t
  );
}
var oS = eS,
  sS = nS,
  lS = iS;
function aS(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = aS(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Vk() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = aS(e)) && (r && (r += " "), (r += t));
  return r;
}
const tg = "-";
function Gk(e) {
  const t = qk(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function i(a) {
    const u = a.split(tg);
    return u[0] === "" && u.length !== 1 && u.shift(), uS(u, t) || Kk(a);
  }
  function s(a, u) {
    const c = n[a] || [];
    return u && r[a] ? [...c, ...r[a]] : c;
  }
  return { getClassGroupId: i, getConflictingClassGroupIds: s };
}
function uS(e, t) {
  var a;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    i = r ? uS(e.slice(1), r) : void 0;
  if (i) return i;
  if (t.validators.length === 0) return;
  const s = e.join(tg);
  return (a = t.validators.find(({ validator: u }) => u(s))) == null
    ? void 0
    : a.classGroupId;
}
const S1 = /^\[(.+)\]$/;
function Kk(e) {
  if (S1.test(e)) {
    const t = S1.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function qk(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    Qk(Object.entries(e.classGroups), n).forEach(([s, a]) => {
      Nh(a, r, s, t);
    }),
    r
  );
}
function Nh(e, t, n, r) {
  e.forEach((i) => {
    if (typeof i == "string") {
      const s = i === "" ? t : E1(t, i);
      s.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (Yk(i)) {
        Nh(i(r), t, n, r);
        return;
      }
      t.validators.push({ validator: i, classGroupId: n });
      return;
    }
    Object.entries(i).forEach(([s, a]) => {
      Nh(a, E1(t, s), n, r);
    });
  });
}
function E1(e, t) {
  let n = e;
  return (
    t.split(tg).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function Yk(e) {
  return e.isThemeGetter;
}
function Qk(e, t) {
  return t
    ? e.map(([n, r]) => {
        const i = r.map((s) =>
          typeof s == "string"
            ? t + s
            : typeof s == "object"
            ? Object.fromEntries(Object.entries(s).map(([a, u]) => [t + a, u]))
            : s
        );
        return [n, i];
      })
    : e;
}
function Xk(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function i(s, a) {
    n.set(s, a), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(s) {
      let a = n.get(s);
      if (a !== void 0) return a;
      if ((a = r.get(s)) !== void 0) return i(s, a), a;
    },
    set(s, a) {
      n.has(s) ? n.set(s, a) : i(s, a);
    },
  };
}
const cS = "!";
function Jk(e) {
  const { separator: t, experimentalParseClassName: n } = e,
    r = t.length === 1,
    i = t[0],
    s = t.length;
  function a(u) {
    const c = [];
    let d = 0,
      p = 0,
      m;
    for (let O = 0; O < u.length; O++) {
      let y = u[O];
      if (d === 0) {
        if (y === i && (r || u.slice(O, O + s) === t)) {
          c.push(u.slice(p, O)), (p = O + s);
          continue;
        }
        if (y === "/") {
          m = O;
          continue;
        }
      }
      y === "[" ? d++ : y === "]" && d--;
    }
    const g = c.length === 0 ? u : u.substring(p),
      _ = g.startsWith(cS),
      b = _ ? g.substring(1) : g,
      T = m && m > p ? m - p : void 0;
    return {
      modifiers: c,
      hasImportantModifier: _,
      baseClassName: b,
      maybePostfixModifierPosition: T,
    };
  }
  return n
    ? function (c) {
        return n({ className: c, parseClassName: a });
      }
    : a;
}
function Zk(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function eM(e) {
  return { cache: Xk(e.cacheSize), parseClassName: Jk(e), ...Gk(e) };
}
const tM = /\s+/;
function nM(e, t) {
  const {
      parseClassName: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: i,
    } = t,
    s = new Set();
  return e
    .trim()
    .split(tM)
    .map((a) => {
      const {
        modifiers: u,
        hasImportantModifier: c,
        baseClassName: d,
        maybePostfixModifierPosition: p,
      } = n(a);
      let m = !!p,
        g = r(m ? d.substring(0, p) : d);
      if (!g) {
        if (!m) return { isTailwindClass: !1, originalClassName: a };
        if (((g = r(d)), !g))
          return { isTailwindClass: !1, originalClassName: a };
        m = !1;
      }
      const _ = Zk(u).join(":");
      return {
        isTailwindClass: !0,
        modifierId: c ? _ + cS : _,
        classGroupId: g,
        originalClassName: a,
        hasPostfixModifier: m,
      };
    })
    .reverse()
    .filter((a) => {
      if (!a.isTailwindClass) return !0;
      const { modifierId: u, classGroupId: c, hasPostfixModifier: d } = a,
        p = u + c;
      return s.has(p)
        ? !1
        : (s.add(p), i(c, d).forEach((m) => s.add(u + m)), !0);
    })
    .reverse()
    .map((a) => a.originalClassName)
    .join(" ");
}
function rM() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = fS(t)) && (r && (r += " "), (r += n));
  return r;
}
function fS(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = fS(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function iM(e, ...t) {
  let n,
    r,
    i,
    s = a;
  function a(c) {
    const d = t.reduce((p, m) => m(p), e());
    return (n = eM(d)), (r = n.cache.get), (i = n.cache.set), (s = u), u(c);
  }
  function u(c) {
    const d = r(c);
    if (d) return d;
    const p = nM(c, n);
    return i(c, p), p;
  }
  return function () {
    return s(rM.apply(null, arguments));
  };
}
function Je(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const dS = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  oM = /^\d+\/\d+$/,
  sM = new Set(["px", "full", "screen"]),
  lM = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  aM =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  uM = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  cM = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  fM =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Fr(e) {
  return vo(e) || sM.has(e) || oM.test(e);
}
function hi(e) {
  return Bs(e, "length", wM);
}
function vo(e) {
  return !!e && !Number.isNaN(Number(e));
}
function zu(e) {
  return Bs(e, "number", vo);
}
function _l(e) {
  return !!e && Number.isInteger(Number(e));
}
function dM(e) {
  return e.endsWith("%") && vo(e.slice(0, -1));
}
function be(e) {
  return dS.test(e);
}
function mi(e) {
  return lM.test(e);
}
const pM = new Set(["length", "size", "percentage"]);
function hM(e) {
  return Bs(e, pM, pS);
}
function mM(e) {
  return Bs(e, "position", pS);
}
const gM = new Set(["image", "url"]);
function vM(e) {
  return Bs(e, gM, SM);
}
function yM(e) {
  return Bs(e, "", xM);
}
function bl() {
  return !0;
}
function Bs(e, t, n) {
  const r = dS.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function wM(e) {
  return aM.test(e) && !uM.test(e);
}
function pS() {
  return !1;
}
function xM(e) {
  return cM.test(e);
}
function SM(e) {
  return fM.test(e);
}
function EM() {
  const e = Je("colors"),
    t = Je("spacing"),
    n = Je("blur"),
    r = Je("brightness"),
    i = Je("borderColor"),
    s = Je("borderRadius"),
    a = Je("borderSpacing"),
    u = Je("borderWidth"),
    c = Je("contrast"),
    d = Je("grayscale"),
    p = Je("hueRotate"),
    m = Je("invert"),
    g = Je("gap"),
    _ = Je("gradientColorStops"),
    b = Je("gradientColorStopPositions"),
    T = Je("inset"),
    O = Je("margin"),
    y = Je("opacity"),
    S = Je("padding"),
    w = Je("saturate"),
    P = Je("scale"),
    j = Je("sepia"),
    N = Je("skew"),
    H = Je("space"),
    D = Je("translate"),
    V = () => ["auto", "contain", "none"],
    U = () => ["auto", "hidden", "clip", "visible", "scroll"],
    J = () => ["auto", be, t],
    Q = () => [be, t],
    re = () => ["", Fr, hi],
    ae = () => ["auto", vo, be],
    Ae = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    Ge = () => ["solid", "dashed", "dotted", "double", "none"],
    Pe = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    Z = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    ne = () => ["", "0", be],
    le = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    he = () => [vo, zu],
    Me = () => [vo, be];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [bl],
      spacing: [Fr, hi],
      blur: ["none", "", mi, be],
      brightness: he(),
      borderColor: [e],
      borderRadius: ["none", "", "full", mi, be],
      borderSpacing: Q(),
      borderWidth: re(),
      contrast: he(),
      grayscale: ne(),
      hueRotate: Me(),
      invert: ne(),
      gap: Q(),
      gradientColorStops: [e],
      gradientColorStopPositions: [dM, hi],
      inset: J(),
      margin: J(),
      opacity: he(),
      padding: Q(),
      saturate: he(),
      scale: he(),
      sepia: ne(),
      skew: Me(),
      space: Q(),
      translate: Q(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", be] }],
      container: ["container"],
      columns: [{ columns: [mi] }],
      "break-after": [{ "break-after": le() }],
      "break-before": [{ "break-before": le() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...Ae(), be] }],
      overflow: [{ overflow: U() }],
      "overflow-x": [{ "overflow-x": U() }],
      "overflow-y": [{ "overflow-y": U() }],
      overscroll: [{ overscroll: V() }],
      "overscroll-x": [{ "overscroll-x": V() }],
      "overscroll-y": [{ "overscroll-y": V() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [T] }],
      "inset-x": [{ "inset-x": [T] }],
      "inset-y": [{ "inset-y": [T] }],
      start: [{ start: [T] }],
      end: [{ end: [T] }],
      top: [{ top: [T] }],
      right: [{ right: [T] }],
      bottom: [{ bottom: [T] }],
      left: [{ left: [T] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", _l, be] }],
      basis: [{ basis: J() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", be] }],
      grow: [{ grow: ne() }],
      shrink: [{ shrink: ne() }],
      order: [{ order: ["first", "last", "none", _l, be] }],
      "grid-cols": [{ "grid-cols": [bl] }],
      "col-start-end": [{ col: ["auto", { span: ["full", _l, be] }, be] }],
      "col-start": [{ "col-start": ae() }],
      "col-end": [{ "col-end": ae() }],
      "grid-rows": [{ "grid-rows": [bl] }],
      "row-start-end": [{ row: ["auto", { span: [_l, be] }, be] }],
      "row-start": [{ "row-start": ae() }],
      "row-end": [{ "row-end": ae() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", be] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", be] }],
      gap: [{ gap: [g] }],
      "gap-x": [{ "gap-x": [g] }],
      "gap-y": [{ "gap-y": [g] }],
      "justify-content": [{ justify: ["normal", ...Z()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...Z(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...Z(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [S] }],
      px: [{ px: [S] }],
      py: [{ py: [S] }],
      ps: [{ ps: [S] }],
      pe: [{ pe: [S] }],
      pt: [{ pt: [S] }],
      pr: [{ pr: [S] }],
      pb: [{ pb: [S] }],
      pl: [{ pl: [S] }],
      m: [{ m: [O] }],
      mx: [{ mx: [O] }],
      my: [{ my: [O] }],
      ms: [{ ms: [O] }],
      me: [{ me: [O] }],
      mt: [{ mt: [O] }],
      mr: [{ mr: [O] }],
      mb: [{ mb: [O] }],
      ml: [{ ml: [O] }],
      "space-x": [{ "space-x": [H] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [H] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", be, t] }],
      "min-w": [{ "min-w": [be, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            be,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [mi] },
            mi,
          ],
        },
      ],
      h: [{ h: [be, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [be, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [be, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [be, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", mi, hi] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            zu,
          ],
        },
      ],
      "font-family": [{ font: [bl] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            be,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", vo, zu] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            Fr,
            be,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", be] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", be] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [y] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [y] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...Ge(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", Fr, hi] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", Fr, be] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: Q() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            be,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", be] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [y] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...Ae(), mM] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", hM] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            vM,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [b] }],
      "gradient-via-pos": [{ via: [b] }],
      "gradient-to-pos": [{ to: [b] }],
      "gradient-from": [{ from: [_] }],
      "gradient-via": [{ via: [_] }],
      "gradient-to": [{ to: [_] }],
      rounded: [{ rounded: [s] }],
      "rounded-s": [{ "rounded-s": [s] }],
      "rounded-e": [{ "rounded-e": [s] }],
      "rounded-t": [{ "rounded-t": [s] }],
      "rounded-r": [{ "rounded-r": [s] }],
      "rounded-b": [{ "rounded-b": [s] }],
      "rounded-l": [{ "rounded-l": [s] }],
      "rounded-ss": [{ "rounded-ss": [s] }],
      "rounded-se": [{ "rounded-se": [s] }],
      "rounded-ee": [{ "rounded-ee": [s] }],
      "rounded-es": [{ "rounded-es": [s] }],
      "rounded-tl": [{ "rounded-tl": [s] }],
      "rounded-tr": [{ "rounded-tr": [s] }],
      "rounded-br": [{ "rounded-br": [s] }],
      "rounded-bl": [{ "rounded-bl": [s] }],
      "border-w": [{ border: [u] }],
      "border-w-x": [{ "border-x": [u] }],
      "border-w-y": [{ "border-y": [u] }],
      "border-w-s": [{ "border-s": [u] }],
      "border-w-e": [{ "border-e": [u] }],
      "border-w-t": [{ "border-t": [u] }],
      "border-w-r": [{ "border-r": [u] }],
      "border-w-b": [{ "border-b": [u] }],
      "border-w-l": [{ "border-l": [u] }],
      "border-opacity": [{ "border-opacity": [y] }],
      "border-style": [{ border: [...Ge(), "hidden"] }],
      "divide-x": [{ "divide-x": [u] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [u] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [y] }],
      "divide-style": [{ divide: Ge() }],
      "border-color": [{ border: [i] }],
      "border-color-x": [{ "border-x": [i] }],
      "border-color-y": [{ "border-y": [i] }],
      "border-color-t": [{ "border-t": [i] }],
      "border-color-r": [{ "border-r": [i] }],
      "border-color-b": [{ "border-b": [i] }],
      "border-color-l": [{ "border-l": [i] }],
      "divide-color": [{ divide: [i] }],
      "outline-style": [{ outline: ["", ...Ge()] }],
      "outline-offset": [{ "outline-offset": [Fr, be] }],
      "outline-w": [{ outline: [Fr, hi] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: re() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [y] }],
      "ring-offset-w": [{ "ring-offset": [Fr, hi] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", mi, yM] }],
      "shadow-color": [{ shadow: [bl] }],
      opacity: [{ opacity: [y] }],
      "mix-blend": [{ "mix-blend": [...Pe(), "plus-lighter", "plus-darker"] }],
      "bg-blend": [{ "bg-blend": Pe() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [c] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", mi, be] }],
      grayscale: [{ grayscale: [d] }],
      "hue-rotate": [{ "hue-rotate": [p] }],
      invert: [{ invert: [m] }],
      saturate: [{ saturate: [w] }],
      sepia: [{ sepia: [j] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [c] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [d] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [p] }],
      "backdrop-invert": [{ "backdrop-invert": [m] }],
      "backdrop-opacity": [{ "backdrop-opacity": [y] }],
      "backdrop-saturate": [{ "backdrop-saturate": [w] }],
      "backdrop-sepia": [{ "backdrop-sepia": [j] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [a] }],
      "border-spacing-x": [{ "border-spacing-x": [a] }],
      "border-spacing-y": [{ "border-spacing-y": [a] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            be,
          ],
        },
      ],
      duration: [{ duration: Me() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", be] }],
      delay: [{ delay: Me() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", be] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [P] }],
      "scale-x": [{ "scale-x": [P] }],
      "scale-y": [{ "scale-y": [P] }],
      rotate: [{ rotate: [_l, be] }],
      "translate-x": [{ "translate-x": [D] }],
      "translate-y": [{ "translate-y": [D] }],
      "skew-x": [{ "skew-x": [N] }],
      "skew-y": [{ "skew-y": [N] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            be,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            be,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": Q() }],
      "scroll-mx": [{ "scroll-mx": Q() }],
      "scroll-my": [{ "scroll-my": Q() }],
      "scroll-ms": [{ "scroll-ms": Q() }],
      "scroll-me": [{ "scroll-me": Q() }],
      "scroll-mt": [{ "scroll-mt": Q() }],
      "scroll-mr": [{ "scroll-mr": Q() }],
      "scroll-mb": [{ "scroll-mb": Q() }],
      "scroll-ml": [{ "scroll-ml": Q() }],
      "scroll-p": [{ "scroll-p": Q() }],
      "scroll-px": [{ "scroll-px": Q() }],
      "scroll-py": [{ "scroll-py": Q() }],
      "scroll-ps": [{ "scroll-ps": Q() }],
      "scroll-pe": [{ "scroll-pe": Q() }],
      "scroll-pt": [{ "scroll-pt": Q() }],
      "scroll-pr": [{ "scroll-pr": Q() }],
      "scroll-pb": [{ "scroll-pb": Q() }],
      "scroll-pl": [{ "scroll-pl": Q() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", be] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [Fr, hi, zu] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const _M = iM(EM);
function Yn(...e) {
  return _M(Vk(e));
}
const ng = L.forwardRef(({ className: e, ...t }, n) =>
  x.jsx(oS, {
    ref: n,
    className: Yn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t,
  })
);
ng.displayName = oS.displayName;
const rg = L.forwardRef(({ className: e, ...t }, n) =>
  x.jsx(sS, { ref: n, className: Yn("aspect-square h-full w-full", e), ...t })
);
rg.displayName = sS.displayName;
const ig = L.forwardRef(({ className: e, ...t }, n) =>
  x.jsx(lS, {
    ref: n,
    className: Yn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t,
  })
);
ig.displayName = lS.displayName;
var hS = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  _1 = He.createContext && He.createContext(hS),
  bM = ["attr", "size", "title"];
function CM(e, t) {
  if (e == null) return {};
  var n = TM(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function TM(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Ac() {
  return (
    (Ac = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ac.apply(this, arguments)
  );
}
function b1(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ic(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? b1(Object(n), !0).forEach(function (r) {
          PM(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : b1(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function PM(e, t, n) {
  return (
    (t = RM(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function RM(e) {
  var t = NM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function NM(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mS(e) {
  return (
    e &&
    e.map((t, n) =>
      He.createElement(t.tag, Ic({ key: n }, t.attr), mS(t.child))
    )
  );
}
function Ao(e) {
  return (t) =>
    He.createElement(OM, Ac({ attr: Ic({}, e.attr) }, t), mS(e.child));
}
function OM(e) {
  var t = (n) => {
    var { attr: r, size: i, title: s } = e,
      a = CM(e, bM),
      u = i || n.size || "1em",
      c;
    return (
      n.className && (c = n.className),
      e.className && (c = (c ? c + " " : "") + e.className),
      He.createElement(
        "svg",
        Ac(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          a,
          {
            className: c,
            style: Ic(Ic({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && He.createElement("title", null, s),
        e.children
      )
    );
  };
  return _1 !== void 0
    ? He.createElement(_1.Consumer, null, (n) => t(n))
    : t(hS);
}
function LM(e) {
  return Ao({
    tag: "svg",
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z",
        },
        child: [],
      },
    ],
  })(e);
}
function kM(e) {
  return Ao({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
        child: [],
      },
    ],
  })(e);
}
function MM(e) {
  return Ao({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
        },
        child: [],
      },
    ],
  })(e);
}
const AM = [
  { id: 1, icon: x.jsx(kM, {}), title: "twitter", path: "/twitter" },
  { id: 2, icon: x.jsx(MM, {}), title: "instagram", path: "/instagram" },
  { id: 3, icon: x.jsx(LM, {}), title: "facebook", path: "/facebook" },
];
function IM() {
  return x.jsx("div", {
    className: "bg-brown text-white py-32",
    children: x.jsx("div", {
      className: "container",
      children: x.jsxs("div", {
        className: "grid lg:grid-cols-3 gap-20",
        children: [
          x.jsxs("div", {
            className: "space-y-10",
            children: [
              x.jsxs(Th, {
                to: "/",
                className: "flex items-center gap-3",
                children: [
                  x.jsxs(ng, {
                    children: [
                      x.jsx(rg, { src: "https://github.com/sdf.png" }),
                      x.jsx(ig, { className: "text-ba", children: "D" }),
                    ],
                  }),
                  x.jsxs("span", {
                    className: "capitalize font-semibold",
                    children: [
                      "delizi",
                      x.jsx("span", {
                        className: "text-primaryOrange",
                        children: "oso",
                      }),
                    ],
                  }),
                ],
              }),
              x.jsx("p", {
                children:
                  "Viverra gravida morbi egestas facilisis tortor netus non duis tempor.",
              }),
              x.jsx("ul", {
                className: "socialMedia flex items-center gap-3",
                children: AM.map((e) =>
                  x.jsx(
                    "li",
                    {
                      children: x.jsx("a", {
                        href: e.path,
                        className:
                          "bg-white size-8 flex items-center justify-center rounded-full text-black",
                        children: e.icon,
                      }),
                    },
                    e.id
                  )
                ),
              }),
            ],
          }),
          x.jsxs("div", {
            className:
              "lg:col-span-2 grid lg:grid-cols-3 space-y-10 lg:space-y-0",
            children: [
              x.jsxs("div", {
                className: "capitalize",
                children: [
                  x.jsx("h1", {
                    className: "text-xl font-semibold text-primaryOrange",
                    children: "page",
                  }),
                  x.jsxs("ul", {
                    className: "space-y-4 mt-8",
                    children: [
                      x.jsx("li", {
                        className: "footer-link",
                        children: x.jsx("a", { href: "#", children: "Home" }),
                      }),
                      x.jsx("li", {
                        className: "footer-link",
                        children: x.jsx("a", { href: "#", children: "menu" }),
                      }),
                      x.jsx("li", {
                        className: "footer-link",
                        children: x.jsx("a", {
                          href: "#",
                          children: "order online",
                        }),
                      }),
                      x.jsx("li", {
                        className: "footer-link",
                        children: x.jsx("a", {
                          href: "#",
                          children: "catering",
                        }),
                      }),
                      x.jsx("li", {
                        className: "footer-link",
                        children: x.jsx("a", {
                          href: "#",
                          children: "reservation",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              x.jsxs("div", {
                className: "capitalize",
                children: [
                  x.jsx("h1", {
                    className: "text-xl font-semibold text-primaryOrange",
                    children: "information",
                  }),
                  x.jsxs("ul", {
                    className: "space-y-4 mt-8",
                    children: [
                      x.jsx("li", {
                        className: "footer-link",
                        children: x.jsx("a", {
                          href: "#",
                          children: "about us",
                        }),
                      }),
                      x.jsx("li", {
                        className: "footer-link",
                        children: x.jsx("a", {
                          href: "#",
                          children: "testimonial",
                        }),
                      }),
                      x.jsx("li", {
                        className: "footer-link",
                        children: x.jsx("a", { href: "#", children: "event" }),
                      }),
                    ],
                  }),
                ],
              }),
              x.jsxs("div", {
                className: "capitalize",
                children: [
                  x.jsx("h1", {
                    className: "text-xl font-semibold text-primaryOrange",
                    children: "get in touch",
                  }),
                  x.jsxs("ul", {
                    className: "space-y-4 mt-8",
                    children: [
                      x.jsx("li", {
                        children: x.jsx("p", {
                          children:
                            "3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat",
                        }),
                      }),
                      x.jsx("li", {
                        children: x.jsx("a", {
                          href: "mailto:delizioso@gmail.com",
                          children: "delizioso@gmail.com",
                        }),
                      }),
                      x.jsx("li", {
                        children: x.jsx("a", {
                          href: "tel:+123 4567 8901",
                          children: "+123 4567 8901",
                        }),
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
  });
}
function zM(e) {
  return Ao({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z",
        },
        child: [],
      },
    ],
  })(e);
}
function jM(e) {
  return Ao({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",
        },
        child: [],
      },
      { tag: "path", attr: { d: "M14 17h6m-3 -3v6" }, child: [] },
    ],
  })(e);
}
function Oh(e) {
  return Ao({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z",
        },
        child: [],
      },
    ],
  })(e);
}
function DM(e) {
  return Ao({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z",
        },
        child: [],
      },
    ],
  })(e);
}
const FM =
  "data:image/svg+xml,%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20588.000000%20378.000000'%20preserveAspectRatio='xMidYMid%20meet'%20class=''%3e%3cg%20transform='translate(0.000000,378.000000)%20scale(0.100000,-0.100000)'%20stroke='none'%3e%3cpath%20class='sleepy-z'%20d='M2740%203150%20c0%20-18%207%20-20%2070%20-20%2040%200%2070%20-4%2070%20-10%200%20-5%20-34%20-55%20-75%20-111%20-41%20-55%20-75%20-107%20-75%20-115%200%20-11%2022%20-14%20115%20-14%2096%200%20115%203%20115%2015%200%2018%202%2017%20-83%2020%20-37%201%20-70%205%20-74%208%20-3%204%2029%2052%2071%20107%2042%2056%2076%20110%2076%20121%200%2018%20-8%2019%20-105%2019%20-98%200%20-105%20-1%20-105%20-20z'%3e%3c/path%3e%3cpath%20class='sleepy-z'%20d='M3310%202575%20c0%20-12%2013%20-15%2055%20-15%2030%200%2055%20-2%2055%20-5%200%20-3%20-27%20-42%20-60%20-87%20-33%20-44%20-60%20-84%20-60%20-89%200%20-5%2041%20-9%2090%20-9%2073%200%2090%203%2090%2015%200%2012%20-14%2015%20-65%2015%20l-66%200%2061%2079%20c33%2044%2060%2087%2060%2095%200%2013%20-14%2016%20-80%2016%20-64%200%20-80%20-3%20-80%20-15z'%3e%3c/path%3e%3cpath%20class='sleepy-z'%20d='M2640%202286%20c0%20-10%2014%20-16%2045%20-18%20l46%20-3%20-46%20-63%20c-59%20-81%20-55%20-94%2027%20-90%2078%204%2095%2028%2019%2028%20-28%200%20-51%203%20-51%206%200%203%2020%2032%2045%2064%2062%2081%2060%2090%20-20%2090%20-50%200%20-65%20-3%20-65%20-14z'%3e%3c/path%3e%3cpath%20class='sleepy-z'%20d='M3065%201770%20c3%20-5%2017%20-10%2031%20-10%2031%200%2030%20-4%20-4%20-49%20-49%20-62%20-49%20-61%2014%20-61%2059%200%2066%2015%2011%2022%20l-29%203%2029%2040%20c49%2067%2049%2065%20-7%2065%20-32%200%20-49%20-4%20-45%20-10z'%3e%3c/path%3e%3cpath%20class='empty-box'%20d='M1273%201963%20c-38%20-15%20-7%20-54%20232%20-293%20l245%20-245%200%20-630%20c0%20-478%203%20-634%2012%20-643%209%20-9%20327%20-12%201370%20-12%201332%200%201357%200%201368%2019%206%2013%2010%20233%2010%20643%20l0%20624%20225%20224%20c124%20124%20228%20233%20231%20243%203%2010%200%2025%20-7%2033%20-10%2012%20-86%2014%20-553%2012%20l-541%20-3%20-225%20-227%20-224%20-228%20-396%200%20-396%200%20-244%20245%20-244%20245%20-426%20-1%20c-234%200%20-431%20-3%20-437%20-6z%20m1080%20-301%20l237%20-238%20-3%20-604%20-2%20-605%20-382%20-3%20-383%20-2%200%20600%200%20600%20254%200%20c271%200%20292%204%20262%2046%20-13%2018%20-32%2019%20-278%2022%20l-263%203%20-202%20202%20c-112%20111%20-203%20205%20-203%20209%200%205%20163%208%20363%208%20l363%200%20237%20-238z%20m2487%20201%20c0%20-4%20-84%20-92%20-187%20-195%20l-187%20-188%20-476%200%20-475%200%20195%20195%20195%20195%20467%200%20c258%200%20468%20-3%20468%20-7z%20m-402%20-1055%20l2%20-598%20-895%200%20-895%200%200%20593%20c0%20327%203%20597%207%20600%203%204%20405%206%20892%205%20l886%20-3%203%20-597z'%3e%3c/path%3e%3cpath%20class='empty-box'%20d='M3224%201086%20c-14%20-35%2057%20-96%20111%20-96%2028%200%20101%2045%20110%2069%2011%2027%20-13%2036%20-37%2014%20-58%20-53%20-89%20-54%20-135%20-8%20-40%2040%20-42%2040%20-49%2021z'%3e%3c/path%3e%3cpath%20class='empty-box'%20d='M3738%201065%20c-46%20-43%20-67%20-44%20-111%20-5%20-40%2035%20-57%2038%20-57%2010%200%20-25%2074%20-80%20107%20-80%2051%200%20129%2062%20117%2093%20-9%2023%20-14%2022%20-56%20-18z'%3e%3c/path%3e%3cpath%20class='empty-box'%20d='M3410%20706%20c-57%20-16%20-122%20-50%20-140%20-71%20-27%20-33%209%20-34%2071%20-3%20118%2058%20224%2058%20352%200%2055%20-25%2068%20-28%2077%20-17%209%2011%205%2018%20-22%2035%20-97%2059%20-243%2084%20-338%2056z'%3e%3c/path%3e%3cpath%20class='empty-box'%20d='M154%20196%20c-3%20-8%20-4%20-23%20-2%20-33%203%20-17%2020%20-18%20224%20-21%20184%20-2%20223%200%20233%2012%209%2011%2010%2020%201%2035%20-10%2020%20-19%2021%20-231%2021%20-182%200%20-221%20-2%20-225%20-14z'%3e%3c/path%3e%3cpath%20class='empty-box'%20d='M739%20194%20c-9%20-11%20-10%20-20%20-2%20-32%209%20-15%2048%20-17%20419%20-17%20l409%200%200%2030%200%2030%20-406%203%20c-362%202%20-408%200%20-420%20-14z'%3e%3c/path%3e%3cpath%20class='empty-box'%20d='M4661%20196%20c-9%20-11%20-10%20-20%20-1%20-35%2011%20-21%2016%20-21%20474%20-21%20499%200%20503%200%20476%2049%20-11%2021%20-16%2021%20-474%2021%20-391%200%20-465%20-2%20-475%20-14z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e";
function BM({ showCart: e, setShowCart: t }) {
  const n = L.useRef(null),
    r = Bm((m) => m.cart),
    { cartTotalQuantity: i, cartItems: s } = r,
    a = Um();
  L.useLayoutEffect(() => {
    a(k2());
  }, [a, s]),
    L.useEffect(() => {
      const m = (g) => {
        n.current && !n.current.contains(g.target) && t(!1);
      };
      return (
        e
          ? (document.addEventListener("mousedown", m),
            (document.body.style.overflow = "hidden"))
          : (document.removeEventListener("mousedown", m),
            (document.body.style.overflow = "")),
        () => {
          document.removeEventListener("mousedown", m);
        }
      );
    }, [e]);
  function u(m) {
    a(N2(m));
  }
  function c(m) {
    a(L2(m));
  }
  function d(m) {
    a(O2(m));
  }
  function p(m) {
    a(QO());
  }
  return x.jsxs("div", {
    ref: n,
    className: `bg-white fixed right-0 min-w-80 top-0 flex flex-col bottom-0 z-50 h-full ${
      e ? "translate-x-0 visible" : "translate-x-full invisible"
    }  transform transition-transform duration-700`,
    children: [
      x.jsxs("div", {
        className:
          "cart-header flex items-center justify-between p-4 shadow-lg",
        children: [
          x.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              x.jsx("span", { children: "my cart" }),
              r.cartItems.length > 0 &&
                x.jsxs(x.Fragment, {
                  children: [
                    x.jsxs("span", {
                      className: "text-sm",
                      children: [i, " items"],
                    }),
                    x.jsx("button", {
                      className:
                        "text-sm bg-gray-100 p-2 rounded-full text-gray-500",
                      onClick: p,
                      children: x.jsx(Oh, {}),
                    }),
                  ],
                }),
            ],
          }),
          x.jsx(DM, {}),
        ],
      }),
      r.cartItems.length === 0
        ? x.jsxs("div", {
            className: "h-full items-center justify-center flex-col flex",
            children: [
              x.jsx("img", { src: FM, className: "size-52" }),
              x.jsx("span", {
                className: "font-semibold",
                children: "your cart is empty :( ",
              }),
            ],
          })
        : x.jsxs(x.Fragment, {
            children: [
              x.jsx("div", {
                className: "cart-body  overflow-y-auto flex-grow",
                children: x.jsx("ul", {
                  className: "",
                  children: r.cartItems.map((m, g) =>
                    x.jsxs(
                      "li",
                      {
                        className: `p-3 flex items-center gap-3 ${
                          r.cartItems.length - 1 !== g ? "shadow-sm" : ""
                        }`,
                        children: [
                          x.jsx("img", {
                            src: m.img,
                            alt: m.title,
                            className: "size-20",
                          }),
                          x.jsxs("div", {
                            className: "flex flex-col gap-3 flex-grow",
                            children: [
                              x.jsx("span", {
                                className: "line-clamp-2",
                                children: m.title,
                              }),
                              x.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  x.jsxs("span", {
                                    className: "text-primaryOrange ",
                                    children: ["$", m.price],
                                  }),
                                  x.jsxs("div", {
                                    className:
                                      "flex gap-4 items-center justify-around ms-auto",
                                    children: [
                                      m.cartQuantity > 1
                                        ? x.jsx("button", {
                                            onClick: () => c(m),
                                            className:
                                              "bg-primaryOrange text-white text-xl rounded-full size-9 flex items-center justify-center",
                                            children: "-",
                                          })
                                        : x.jsx("button", {
                                            onClick: () => d(m),
                                            className:
                                              "bg-primaryOrange text-white text-sm  rounded-full size-9 flex items-center justify-center",
                                            children: x.jsx(Oh, {}),
                                          }),
                                      x.jsx("span", {
                                        className: "text-xl",
                                        children: m.cartQuantity,
                                      }),
                                      x.jsx("button", {
                                        onClick: () => u(m),
                                        className:
                                          "bg-primaryOrange rounded-full text-xl text-white flex items-center justify-center size-9",
                                        children: "+",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      m.id
                    )
                  ),
                }),
              }),
              x.jsx("div", {
                className:
                  "cartFooter p-2 border border-t-1 border-gray flex flex-col",
                children: x.jsxs("button", {
                  className: "btn-primary relative",
                  children: [
                    "continue ",
                    x.jsxs("span", {
                      className:
                        "bg-black/30 px-2 py-1 rounded-full absolute right-2 top-1/2 transform -translate-y-1/2",
                      children: ["$", r.cartTotalAmout.toFixed(3)],
                    }),
                  ],
                }),
              }),
            ],
          }),
    ],
  });
}
function UM() {
  return x.jsx("div", {
    className:
      "h-full w-full fixed bg-black opacity-80 top-0 right-0 z-40 duration-700 transition-all",
  });
}
const $M = [
  { id: 1, title: "home", path: "/", delay: "0.1" },
  { id: 2, title: "menu", path: "/menu", delay: "0.2" },
  { id: 3, title: "about us", path: "/aboutUs", delay: "0.3" },
  { id: 4, title: "order online", path: "/orderOnline", delay: "0.4" },
  { id: 5, title: "reservation", path: "/reservation", delay: "0.5" },
  { id: 6, title: "contact us", path: "/contactUs", delay: "0.6" },
];
function WM() {
  const [e, t] = L.useState(!1),
    { cartTotalQuantity: n, cartItems: r } = Bm((s) => s.cart),
    i = Um();
  return (
    L.useLayoutEffect(() => {
      i(k2());
    }, [i, r]),
    x.jsxs("header", {
      className: "header py-10",
      children: [
        x.jsx("div", {
          className: "container",
          children: x.jsxs("div", {
            className:
              "grid lg:grid-cols-6 grid-cols-2 items-center justify-between",
            children: [
              x.jsx("div", {
                children: x.jsxs(Th, {
                  to: "/",
                  className: "flex items-center gap-3",
                  children: [
                    x.jsxs(ng, {
                      children: [
                        x.jsx(rg, { src: "https://github.com/sdf.png" }),
                        x.jsx(ig, { children: "D" }),
                      ],
                    }),
                    x.jsxs("h1", {
                      className: "capitalize font-semibold",
                      children: [
                        "delizi",
                        x.jsx("span", {
                          className: "text-primaryOrange",
                          children: "oso",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              x.jsx("div", {
                className: "col-span-4 lg:block hidden",
                children: x.jsx("ul", {
                  className: "flex items-center  justify-around",
                  children: $M.map((s) =>
                    x.jsx(
                      "li",
                      {
                        className: "capitalize",
                        "data-delay": s.delay,
                        children: x.jsx(Th, {
                          to: s.path,
                          className: ({ isActive: a }) =>
                            a
                              ? "text-primaryOrange"
                              : "hover:text-primaryOrange",
                          children: s.title,
                        }),
                      },
                      s.id
                    )
                  ),
                }),
              }),
              x.jsxs("div", {
                className: " flex items-center lg:gap-5 gap-2 justify-end",
                children: [
                  x.jsxs("button", {
                    className:
                      "size-12 aspect-square flex items-center justify-center bg-gray-50 rounded-full relative",
                    onClick: () => t(!0),
                    children: [
                      x.jsx("span", {
                        className:
                          "badge bg-red-500 text-white size-4 flex items-center justify-center rounded-full text-[10px] absolute right-1 top-1",
                        children: n,
                      }),
                      x.jsx(zM, { className: "text-xl" }),
                    ],
                  }),
                  x.jsx(Sa, {
                    to: "/login",
                    className: "btn-primary hidden lg:block text-nowrap",
                    children: "log in",
                  }),
                  x.jsx("button", {
                    className:
                      "lg:hidden size-12 flex items-center justify-center rounded-full text-xl",
                    children: x.jsx(jM, {}),
                  }),
                ],
              }),
            ],
          }),
        }),
        x.jsx(BM, { showCart: e, setShowCart: t }),
        e && x.jsx(UM, {}),
      ],
    })
  );
}
function HM() {
  return x.jsxs(x.Fragment, {
    children: [x.jsx(WM, {}), x.jsx(K2, {}), x.jsx(IM, {})],
  });
}
const VM = "/assets/signUp-img-BhTd-6FF.png";
function GM() {
  return x.jsx("div", {
    className:
      "xl:col-span-6 col-span-7 hidden lg:flex h-full justify-end overflow-hidden  items-center relative before:content[''] before:bg-primaryOrange before:size-[47rem] before:-z-0 before:block before:absolute before:aspect-square before:-right-48 before:-top-14 before:rounded-full",
    children: x.jsx("img", {
      src: VM,
      alt: "banner",
      className: "h-[50rem] z-10 mt-10",
    }),
  });
}
function KM() {
  return x.jsx("div", {
    className: "flex h-svh w-svw items-center justify-center bg-gray-400",
    children: x.jsxs("div", {
      className: "grid lg:grid-cols-12 items-center  w-full h-full bg-white",
      children: [x.jsx(K2, {}), x.jsx(GM, {})],
    }),
  });
}
const qM = "/assets/italian-salad-DgYd70dS.png";
function YM() {
  return x.jsx("section", {
    className: " lg:py-20 py-5 bg-green-50 overflow-hidden",
    children: x.jsxs("div", {
      className:
        "container grid lg:grid-cols-2 items-center lg:gap-20 space-y-36 lg:space-y-0 justify-center",
      children: [
        x.jsx("div", {
          className:
            "relative  max-w-[350px] sm:max-w-[500px] m-auto lg:max-w-full order-last lg:order-first mt-16 lg:mt-0",
          children: x.jsx("img", {
            src: qM,
            alt: "",
            className: "relative z-10  aspect-square",
          }),
        }),
        x.jsxs("div", {
          className: "space-y-16 capitalize text-xl order-first lg:order-last",
          children: [
            x.jsxs("h2", {
              className:
                "text-[80px] font-semibold text-balance leading-[90px]",
              children: [
                "Welcome to ",
                x.jsx("span", {
                  className: "text-primaryOrange",
                  children: "delizioso",
                }),
              ],
            }),
            x.jsx("p", {
              className: " text-brown/70 leading-10 lg:text-xl tracking-wider",
              children:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam",
            }),
            x.jsx("button", {
              className:
                "btn-primary mt-12  bg-primaryOrange md:py-5 md:px-20 font-normal text-nowrap",
              children: "see our menu",
            }),
          ],
        }),
      ],
    }),
  });
}
function gS(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: QM } = Object.prototype,
  { getPrototypeOf: og } = Object,
  df = ((e) => (t) => {
    const n = QM.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  hr = (e) => ((e = e.toLowerCase()), (t) => df(t) === e),
  pf = (e) => (t) => typeof t === e,
  { isArray: Us } = Array,
  fa = pf("undefined");
function XM(e) {
  return (
    e !== null &&
    !fa(e) &&
    e.constructor !== null &&
    !fa(e.constructor) &&
    Gn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const vS = hr("ArrayBuffer");
function JM(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && vS(e.buffer)),
    t
  );
}
const ZM = pf("string"),
  Gn = pf("function"),
  yS = pf("number"),
  hf = (e) => e !== null && typeof e == "object",
  eA = (e) => e === !0 || e === !1,
  Ju = (e) => {
    if (df(e) !== "object") return !1;
    const t = og(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  tA = hr("Date"),
  nA = hr("File"),
  rA = hr("Blob"),
  iA = hr("FileList"),
  oA = (e) => hf(e) && Gn(e.pipe),
  sA = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Gn(e.append) &&
          ((t = df(e)) === "formdata" ||
            (t === "object" &&
              Gn(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  lA = hr("URLSearchParams"),
  [aA, uA, cA, fA] = ["ReadableStream", "Request", "Response", "Headers"].map(
    hr
  ),
  dA = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _a(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Us(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = s.length;
    let u;
    for (r = 0; r < a; r++) (u = s[r]), t.call(null, e[u], u, e);
  }
}
function wS(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const xS =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  SS = (e) => !fa(e) && e !== xS;
function Lh() {
  const { caseless: e } = (SS(this) && this) || {},
    t = {},
    n = (r, i) => {
      const s = (e && wS(t, i)) || i;
      Ju(t[s]) && Ju(r)
        ? (t[s] = Lh(t[s], r))
        : Ju(r)
        ? (t[s] = Lh({}, r))
        : Us(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && _a(arguments[r], n);
  return t;
}
const pA = (e, t, n, { allOwnKeys: r } = {}) => (
    _a(
      t,
      (i, s) => {
        n && Gn(i) ? (e[s] = gS(i, n)) : (e[s] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  hA = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  mA = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  gA = (e, t, n, r) => {
    let i, s, a;
    const u = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
        (a = i[s]), (!r || r(a, e, t)) && !u[a] && ((t[a] = e[a]), (u[a] = !0));
      e = n !== !1 && og(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  vA = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  yA = (e) => {
    if (!e) return null;
    if (Us(e)) return e;
    let t = e.length;
    if (!yS(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  wA = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && og(Uint8Array)),
  xA = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const s = i.value;
      t.call(e, s[0], s[1]);
    }
  },
  SA = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  EA = hr("HTMLFormElement"),
  _A = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  C1 = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  bA = hr("RegExp"),
  ES = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    _a(n, (i, s) => {
      let a;
      (a = t(i, s, e)) !== !1 && (r[s] = a || i);
    }),
      Object.defineProperties(e, r);
  },
  CA = (e) => {
    ES(e, (t, n) => {
      if (Gn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Gn(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  TA = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((s) => {
          n[s] = !0;
        });
      };
    return Us(e) ? r(e) : r(String(e).split(t)), n;
  },
  PA = () => {},
  RA = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  cp = "abcdefghijklmnopqrstuvwxyz",
  T1 = "0123456789",
  _S = { DIGIT: T1, ALPHA: cp, ALPHA_DIGIT: cp + cp.toUpperCase() + T1 },
  NA = (e = 16, t = _S.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function OA(e) {
  return !!(
    e &&
    Gn(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const LA = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (hf(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const s = Us(r) ? [] : {};
            return (
              _a(r, (a, u) => {
                const c = n(a, i + 1);
                !fa(c) && (s[u] = c);
              }),
              (t[i] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  kA = hr("AsyncFunction"),
  MA = (e) => e && (hf(e) || Gn(e)) && Gn(e.then) && Gn(e.catch),
  $ = {
    isArray: Us,
    isArrayBuffer: vS,
    isBuffer: XM,
    isFormData: sA,
    isArrayBufferView: JM,
    isString: ZM,
    isNumber: yS,
    isBoolean: eA,
    isObject: hf,
    isPlainObject: Ju,
    isReadableStream: aA,
    isRequest: uA,
    isResponse: cA,
    isHeaders: fA,
    isUndefined: fa,
    isDate: tA,
    isFile: nA,
    isBlob: rA,
    isRegExp: bA,
    isFunction: Gn,
    isStream: oA,
    isURLSearchParams: lA,
    isTypedArray: wA,
    isFileList: iA,
    forEach: _a,
    merge: Lh,
    extend: pA,
    trim: dA,
    stripBOM: hA,
    inherits: mA,
    toFlatObject: gA,
    kindOf: df,
    kindOfTest: hr,
    endsWith: vA,
    toArray: yA,
    forEachEntry: xA,
    matchAll: SA,
    isHTMLForm: EA,
    hasOwnProperty: C1,
    hasOwnProp: C1,
    reduceDescriptors: ES,
    freezeMethods: CA,
    toObjectSet: TA,
    toCamelCase: _A,
    noop: PA,
    toFiniteNumber: RA,
    findKey: wS,
    global: xS,
    isContextDefined: SS,
    ALPHABET: _S,
    generateString: NA,
    isSpecCompliantForm: OA,
    toJSONObject: LA,
    isAsyncFn: kA,
    isThenable: MA,
  };
function Ee(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
$.inherits(Ee, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: $.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const bS = Ee.prototype,
  CS = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  CS[e] = { value: e };
});
Object.defineProperties(Ee, CS);
Object.defineProperty(bS, "isAxiosError", { value: !0 });
Ee.from = (e, t, n, r, i, s) => {
  const a = Object.create(bS);
  return (
    $.toFlatObject(
      e,
      a,
      function (c) {
        return c !== Error.prototype;
      },
      (u) => u !== "isAxiosError"
    ),
    Ee.call(a, e.message, t, n, r, i),
    (a.cause = e),
    (a.name = e.name),
    s && Object.assign(a, s),
    a
  );
};
const AA = null;
function kh(e) {
  return $.isPlainObject(e) || $.isArray(e);
}
function TS(e) {
  return $.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function P1(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, s) {
          return (i = TS(i)), !n && s ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function IA(e) {
  return $.isArray(e) && !e.some(kh);
}
const zA = $.toFlatObject($, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function mf(e, t, n) {
  if (!$.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = $.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (T, O) {
        return !$.isUndefined(O[T]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || p,
    s = n.dots,
    a = n.indexes,
    c = (n.Blob || (typeof Blob < "u" && Blob)) && $.isSpecCompliantForm(t);
  if (!$.isFunction(i)) throw new TypeError("visitor must be a function");
  function d(b) {
    if (b === null) return "";
    if ($.isDate(b)) return b.toISOString();
    if (!c && $.isBlob(b))
      throw new Ee("Blob is not supported. Use a Buffer instead.");
    return $.isArrayBuffer(b) || $.isTypedArray(b)
      ? c && typeof Blob == "function"
        ? new Blob([b])
        : Buffer.from(b)
      : b;
  }
  function p(b, T, O) {
    let y = b;
    if (b && !O && typeof b == "object") {
      if ($.endsWith(T, "{}"))
        (T = r ? T : T.slice(0, -2)), (b = JSON.stringify(b));
      else if (
        ($.isArray(b) && IA(b)) ||
        (($.isFileList(b) || $.endsWith(T, "[]")) && (y = $.toArray(b)))
      )
        return (
          (T = TS(T)),
          y.forEach(function (w, P) {
            !($.isUndefined(w) || w === null) &&
              t.append(
                a === !0 ? P1([T], P, s) : a === null ? T : T + "[]",
                d(w)
              );
          }),
          !1
        );
    }
    return kh(b) ? !0 : (t.append(P1(O, T, s), d(b)), !1);
  }
  const m = [],
    g = Object.assign(zA, {
      defaultVisitor: p,
      convertValue: d,
      isVisitable: kh,
    });
  function _(b, T) {
    if (!$.isUndefined(b)) {
      if (m.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      m.push(b),
        $.forEach(b, function (y, S) {
          (!($.isUndefined(y) || y === null) &&
            i.call(t, y, $.isString(S) ? S.trim() : S, T, g)) === !0 &&
            _(y, T ? T.concat(S) : [S]);
        }),
        m.pop();
    }
  }
  if (!$.isObject(e)) throw new TypeError("data must be an object");
  return _(e), t;
}
function R1(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function sg(e, t) {
  (this._pairs = []), e && mf(e, this, t);
}
const PS = sg.prototype;
PS.append = function (t, n) {
  this._pairs.push([t, n]);
};
PS.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, R1);
      }
    : R1;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function jA(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function RS(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || jA,
    i = n && n.serialize;
  let s;
  if (
    (i
      ? (s = i(t, n))
      : (s = $.isURLSearchParams(t) ? t.toString() : new sg(t, n).toString(r)),
    s)
  ) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class N1 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    $.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const NS = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  DA = typeof URLSearchParams < "u" ? URLSearchParams : sg,
  FA = typeof FormData < "u" ? FormData : null,
  BA = typeof Blob < "u" ? Blob : null,
  UA = {
    isBrowser: !0,
    classes: { URLSearchParams: DA, FormData: FA, Blob: BA },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  lg = typeof window < "u" && typeof document < "u",
  $A = ((e) => lg && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  WA =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  HA = (lg && window.location.href) || "http://localhost",
  VA = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: lg,
        hasStandardBrowserEnv: $A,
        hasStandardBrowserWebWorkerEnv: WA,
        origin: HA,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  dr = { ...VA, ...UA };
function GA(e, t) {
  return mf(
    e,
    new dr.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, s) {
          return dr.isNode && $.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function KA(e) {
  return $.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function qA(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function OS(e) {
  function t(n, r, i, s) {
    let a = n[s++];
    if (a === "__proto__") return !0;
    const u = Number.isFinite(+a),
      c = s >= n.length;
    return (
      (a = !a && $.isArray(i) ? i.length : a),
      c
        ? ($.hasOwnProp(i, a) ? (i[a] = [i[a], r]) : (i[a] = r), !u)
        : ((!i[a] || !$.isObject(i[a])) && (i[a] = []),
          t(n, r, i[a], s) && $.isArray(i[a]) && (i[a] = qA(i[a])),
          !u)
    );
  }
  if ($.isFormData(e) && $.isFunction(e.entries)) {
    const n = {};
    return (
      $.forEachEntry(e, (r, i) => {
        t(KA(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function YA(e, t, n) {
  if ($.isString(e))
    try {
      return (t || JSON.parse)(e), $.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ba = {
  transitional: NS,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        s = $.isObject(t);
      if ((s && $.isHTMLForm(t) && (t = new FormData(t)), $.isFormData(t)))
        return i ? JSON.stringify(OS(t)) : t;
      if (
        $.isArrayBuffer(t) ||
        $.isBuffer(t) ||
        $.isStream(t) ||
        $.isFile(t) ||
        $.isBlob(t) ||
        $.isReadableStream(t)
      )
        return t;
      if ($.isArrayBufferView(t)) return t.buffer;
      if ($.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let u;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return GA(t, this.formSerializer).toString();
        if ((u = $.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return mf(
            u ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return s || i ? (n.setContentType("application/json", !1), YA(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ba.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if ($.isResponse(t) || $.isReadableStream(t)) return t;
      if (t && $.isString(t) && ((r && !this.responseType) || i)) {
        const a = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (u) {
          if (a)
            throw u.name === "SyntaxError"
              ? Ee.from(u, Ee.ERR_BAD_RESPONSE, this, null, this.response)
              : u;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: dr.classes.FormData, Blob: dr.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
$.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ba.headers[e] = {};
});
const QA = $.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  XA = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (a) {
            (i = a.indexOf(":")),
              (n = a.substring(0, i).trim().toLowerCase()),
              (r = a.substring(i + 1).trim()),
              !(!n || (t[n] && QA[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  O1 = Symbol("internals");
function Cl(e) {
  return e && String(e).trim().toLowerCase();
}
function Zu(e) {
  return e === !1 || e == null ? e : $.isArray(e) ? e.map(Zu) : String(e);
}
function JA(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const ZA = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function fp(e, t, n, r, i) {
  if ($.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!$.isString(t))) {
    if ($.isString(r)) return t.indexOf(r) !== -1;
    if ($.isRegExp(r)) return r.test(t);
  }
}
function eI(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function tI(e, t) {
  const n = $.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, s, a) {
        return this[r].call(this, t, i, s, a);
      },
      configurable: !0,
    });
  });
}
class un {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function s(u, c, d) {
      const p = Cl(c);
      if (!p) throw new Error("header name must be a non-empty string");
      const m = $.findKey(i, p);
      (!m || i[m] === void 0 || d === !0 || (d === void 0 && i[m] !== !1)) &&
        (i[m || c] = Zu(u));
    }
    const a = (u, c) => $.forEach(u, (d, p) => s(d, p, c));
    if ($.isPlainObject(t) || t instanceof this.constructor) a(t, n);
    else if ($.isString(t) && (t = t.trim()) && !ZA(t)) a(XA(t), n);
    else if ($.isHeaders(t)) for (const [u, c] of t.entries()) s(c, u, r);
    else t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Cl(t)), t)) {
      const r = $.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return JA(i);
        if ($.isFunction(n)) return n.call(this, i, r);
        if ($.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Cl(t)), t)) {
      const r = $.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || fp(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(a) {
      if (((a = Cl(a)), a)) {
        const u = $.findKey(r, a);
        u && (!n || fp(r, r[u], u, n)) && (delete r[u], (i = !0));
      }
    }
    return $.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || fp(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      $.forEach(this, (i, s) => {
        const a = $.findKey(r, s);
        if (a) {
          (n[a] = Zu(i)), delete n[s];
          return;
        }
        const u = t ? eI(s) : String(s).trim();
        u !== s && delete n[s], (n[u] = Zu(i)), (r[u] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      $.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && $.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[O1] = this[O1] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(a) {
      const u = Cl(a);
      r[u] || (tI(i, a), (r[u] = !0));
    }
    return $.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
un.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
$.reduceDescriptors(un.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
$.freezeMethods(un);
function dp(e, t) {
  const n = this || ba,
    r = t || n,
    i = un.from(r.headers);
  let s = r.data;
  return (
    $.forEach(e, function (u) {
      s = u.call(n, s, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function LS(e) {
  return !!(e && e.__CANCEL__);
}
function $s(e, t, n) {
  Ee.call(this, e ?? "canceled", Ee.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
$.inherits($s, Ee, { __CANCEL__: !0 });
function kS(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new Ee(
          "Request failed with status code " + n.status,
          [Ee.ERR_BAD_REQUEST, Ee.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function nI(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function rI(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    s = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const d = Date.now(),
        p = r[s];
      a || (a = d), (n[i] = c), (r[i] = d);
      let m = s,
        g = 0;
      for (; m !== i; ) (g += n[m++]), (m = m % e);
      if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), d - a < t)) return;
      const _ = p && d - p;
      return _ ? Math.round((g * 1e3) / _) : void 0;
    }
  );
}
function iI(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let i = null;
  return function () {
    const a = this === !0,
      u = Date.now();
    if (a || u - n > r)
      return (
        i && (clearTimeout(i), (i = null)), (n = u), e.apply(null, arguments)
      );
    i ||
      (i = setTimeout(
        () => ((i = null), (n = Date.now()), e.apply(null, arguments)),
        r - (u - n)
      ));
  };
}
const zc = (e, t, n = 3) => {
    let r = 0;
    const i = rI(50, 250);
    return iI((s) => {
      const a = s.loaded,
        u = s.lengthComputable ? s.total : void 0,
        c = a - r,
        d = i(c),
        p = a <= u;
      r = a;
      const m = {
        loaded: a,
        total: u,
        progress: u ? a / u : void 0,
        bytes: c,
        rate: d || void 0,
        estimated: d && u && p ? (u - a) / d : void 0,
        event: s,
        lengthComputable: u != null,
      };
      (m[t ? "download" : "upload"] = !0), e(m);
    }, n);
  },
  oI = dr.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function i(s) {
          let a = s;
          return (
            t && (n.setAttribute("href", a), (a = n.href)),
            n.setAttribute("href", a),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = i(window.location.href)),
          function (a) {
            const u = $.isString(a) ? i(a) : a;
            return u.protocol === r.protocol && u.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  sI = dr.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, s) {
          const a = [e + "=" + encodeURIComponent(t)];
          $.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
            $.isString(r) && a.push("path=" + r),
            $.isString(i) && a.push("domain=" + i),
            s === !0 && a.push("secure"),
            (document.cookie = a.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function lI(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function aI(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function MS(e, t) {
  return e && !lI(t) ? aI(e, t) : t;
}
const L1 = (e) => (e instanceof un ? { ...e } : e);
function Oo(e, t) {
  t = t || {};
  const n = {};
  function r(d, p, m) {
    return $.isPlainObject(d) && $.isPlainObject(p)
      ? $.merge.call({ caseless: m }, d, p)
      : $.isPlainObject(p)
      ? $.merge({}, p)
      : $.isArray(p)
      ? p.slice()
      : p;
  }
  function i(d, p, m) {
    if ($.isUndefined(p)) {
      if (!$.isUndefined(d)) return r(void 0, d, m);
    } else return r(d, p, m);
  }
  function s(d, p) {
    if (!$.isUndefined(p)) return r(void 0, p);
  }
  function a(d, p) {
    if ($.isUndefined(p)) {
      if (!$.isUndefined(d)) return r(void 0, d);
    } else return r(void 0, p);
  }
  function u(d, p, m) {
    if (m in t) return r(d, p);
    if (m in e) return r(void 0, d);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: u,
    headers: (d, p) => i(L1(d), L1(p), !0),
  };
  return (
    $.forEach(Object.keys(Object.assign({}, e, t)), function (p) {
      const m = c[p] || i,
        g = m(e[p], t[p], p);
      ($.isUndefined(g) && m !== u) || (n[p] = g);
    }),
    n
  );
}
const AS = (e) => {
    const t = Oo({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: s,
      headers: a,
      auth: u,
    } = t;
    (t.headers = a = un.from(a)),
      (t.url = RS(MS(t.baseURL, t.url), e.params, e.paramsSerializer)),
      u &&
        a.set(
          "Authorization",
          "Basic " +
            btoa(
              (u.username || "") +
                ":" +
                (u.password ? unescape(encodeURIComponent(u.password)) : "")
            )
        );
    let c;
    if ($.isFormData(n)) {
      if (dr.hasStandardBrowserEnv || dr.hasStandardBrowserWebWorkerEnv)
        a.setContentType(void 0);
      else if ((c = a.getContentType()) !== !1) {
        const [d, ...p] = c
          ? c
              .split(";")
              .map((m) => m.trim())
              .filter(Boolean)
          : [];
        a.setContentType([d || "multipart/form-data", ...p].join("; "));
      }
    }
    if (
      dr.hasStandardBrowserEnv &&
      (r && $.isFunction(r) && (r = r(t)), r || (r !== !1 && oI(t.url)))
    ) {
      const d = i && s && sI.read(s);
      d && a.set(i, d);
    }
    return t;
  },
  uI = typeof XMLHttpRequest < "u",
  cI =
    uI &&
    function (e) {
      return new Promise(function (n, r) {
        const i = AS(e);
        let s = i.data;
        const a = un.from(i.headers).normalize();
        let { responseType: u } = i,
          c;
        function d() {
          i.cancelToken && i.cancelToken.unsubscribe(c),
            i.signal && i.signal.removeEventListener("abort", c);
        }
        let p = new XMLHttpRequest();
        p.open(i.method.toUpperCase(), i.url, !0), (p.timeout = i.timeout);
        function m() {
          if (!p) return;
          const _ = un.from(
              "getAllResponseHeaders" in p && p.getAllResponseHeaders()
            ),
            T = {
              data:
                !u || u === "text" || u === "json"
                  ? p.responseText
                  : p.response,
              status: p.status,
              statusText: p.statusText,
              headers: _,
              config: e,
              request: p,
            };
          kS(
            function (y) {
              n(y), d();
            },
            function (y) {
              r(y), d();
            },
            T
          ),
            (p = null);
        }
        "onloadend" in p
          ? (p.onloadend = m)
          : (p.onreadystatechange = function () {
              !p ||
                p.readyState !== 4 ||
                (p.status === 0 &&
                  !(p.responseURL && p.responseURL.indexOf("file:") === 0)) ||
                setTimeout(m);
            }),
          (p.onabort = function () {
            p &&
              (r(new Ee("Request aborted", Ee.ECONNABORTED, i, p)), (p = null));
          }),
          (p.onerror = function () {
            r(new Ee("Network Error", Ee.ERR_NETWORK, i, p)), (p = null);
          }),
          (p.ontimeout = function () {
            let b = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const T = i.transitional || NS;
            i.timeoutErrorMessage && (b = i.timeoutErrorMessage),
              r(
                new Ee(
                  b,
                  T.clarifyTimeoutError ? Ee.ETIMEDOUT : Ee.ECONNABORTED,
                  i,
                  p
                )
              ),
              (p = null);
          }),
          s === void 0 && a.setContentType(null),
          "setRequestHeader" in p &&
            $.forEach(a.toJSON(), function (b, T) {
              p.setRequestHeader(T, b);
            }),
          $.isUndefined(i.withCredentials) ||
            (p.withCredentials = !!i.withCredentials),
          u && u !== "json" && (p.responseType = i.responseType),
          typeof i.onDownloadProgress == "function" &&
            p.addEventListener("progress", zc(i.onDownloadProgress, !0)),
          typeof i.onUploadProgress == "function" &&
            p.upload &&
            p.upload.addEventListener("progress", zc(i.onUploadProgress)),
          (i.cancelToken || i.signal) &&
            ((c = (_) => {
              p &&
                (r(!_ || _.type ? new $s(null, e, p) : _),
                p.abort(),
                (p = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(c),
            i.signal &&
              (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
        const g = nI(i.url);
        if (g && dr.protocols.indexOf(g) === -1) {
          r(new Ee("Unsupported protocol " + g + ":", Ee.ERR_BAD_REQUEST, e));
          return;
        }
        p.send(s || null);
      });
    },
  fI = (e, t) => {
    let n = new AbortController(),
      r;
    const i = function (c) {
      if (!r) {
        (r = !0), a();
        const d = c instanceof Error ? c : this.reason;
        n.abort(
          d instanceof Ee ? d : new $s(d instanceof Error ? d.message : d)
        );
      }
    };
    let s =
      t &&
      setTimeout(() => {
        i(new Ee(`timeout ${t} of ms exceeded`, Ee.ETIMEDOUT));
      }, t);
    const a = () => {
      e &&
        (s && clearTimeout(s),
        (s = null),
        e.forEach((c) => {
          c &&
            (c.removeEventListener
              ? c.removeEventListener("abort", i)
              : c.unsubscribe(i));
        }),
        (e = null));
    };
    e.forEach((c) => c && c.addEventListener && c.addEventListener("abort", i));
    const { signal: u } = n;
    return (
      (u.unsubscribe = a),
      [
        u,
        () => {
          s && clearTimeout(s), (s = null);
        },
      ]
    );
  },
  dI = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
  },
  pI = async function* (e, t, n) {
    for await (const r of e)
      yield* dI(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  k1 = (e, t, n, r, i) => {
    const s = pI(e, t, i);
    let a = 0;
    return new ReadableStream(
      {
        type: "bytes",
        async pull(u) {
          const { done: c, value: d } = await s.next();
          if (c) {
            u.close(), r();
            return;
          }
          let p = d.byteLength;
          n && n((a += p)), u.enqueue(new Uint8Array(d));
        },
        cancel(u) {
          return r(u), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  M1 = (e, t) => {
    const n = e != null;
    return (r) =>
      setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
  },
  gf =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  IS = gf && typeof ReadableStream == "function",
  Mh =
    gf &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  hI =
    IS &&
    (() => {
      let e = !1;
      const t = new Request(dr.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    })(),
  A1 = 64 * 1024,
  Ah =
    IS &&
    !!(() => {
      try {
        return $.isReadableStream(new Response("").body);
      } catch {}
    })(),
  jc = { stream: Ah && ((e) => e.body) };
gf &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !jc[t] &&
        (jc[t] = $.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new Ee(
                `Response type '${t}' is not supported`,
                Ee.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const mI = async (e) => {
    if (e == null) return 0;
    if ($.isBlob(e)) return e.size;
    if ($.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if ($.isArrayBufferView(e)) return e.byteLength;
    if (($.isURLSearchParams(e) && (e = e + ""), $.isString(e)))
      return (await Mh(e)).byteLength;
  },
  gI = async (e, t) => {
    const n = $.toFiniteNumber(e.getContentLength());
    return n ?? mI(t);
  },
  vI =
    gf &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: s,
        timeout: a,
        onDownloadProgress: u,
        onUploadProgress: c,
        responseType: d,
        headers: p,
        withCredentials: m = "same-origin",
        fetchOptions: g,
      } = AS(e);
      d = d ? (d + "").toLowerCase() : "text";
      let [_, b] = i || s || a ? fI([i, s], a) : [],
        T,
        O;
      const y = () => {
        !T &&
          setTimeout(() => {
            _ && _.unsubscribe();
          }),
          (T = !0);
      };
      let S;
      try {
        if (
          c &&
          hI &&
          n !== "get" &&
          n !== "head" &&
          (S = await gI(p, r)) !== 0
        ) {
          let N = new Request(t, { method: "POST", body: r, duplex: "half" }),
            H;
          $.isFormData(r) &&
            (H = N.headers.get("content-type")) &&
            p.setContentType(H),
            N.body && (r = k1(N.body, A1, M1(S, zc(c)), null, Mh));
        }
        $.isString(m) || (m = m ? "cors" : "omit"),
          (O = new Request(t, {
            ...g,
            signal: _,
            method: n.toUpperCase(),
            headers: p.normalize().toJSON(),
            body: r,
            duplex: "half",
            withCredentials: m,
          }));
        let w = await fetch(O);
        const P = Ah && (d === "stream" || d === "response");
        if (Ah && (u || P)) {
          const N = {};
          ["status", "statusText", "headers"].forEach((D) => {
            N[D] = w[D];
          });
          const H = $.toFiniteNumber(w.headers.get("content-length"));
          w = new Response(
            k1(w.body, A1, u && M1(H, zc(u, !0)), P && y, Mh),
            N
          );
        }
        d = d || "text";
        let j = await jc[$.findKey(jc, d) || "text"](w, e);
        return (
          !P && y(),
          b && b(),
          await new Promise((N, H) => {
            kS(N, H, {
              data: j,
              headers: un.from(w.headers),
              status: w.status,
              statusText: w.statusText,
              config: e,
              request: O,
            });
          })
        );
      } catch (w) {
        throw (
          (y(),
          w && w.name === "TypeError" && /fetch/i.test(w.message)
            ? Object.assign(new Ee("Network Error", Ee.ERR_NETWORK, e, O), {
                cause: w.cause || w,
              })
            : Ee.from(w, w && w.code, e, O))
        );
      }
    }),
  Ih = { http: AA, xhr: cI, fetch: vI };
$.forEach(Ih, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const I1 = (e) => `- ${e}`,
  yI = (e) => $.isFunction(e) || e === null || e === !1,
  zS = {
    getAdapter: (e) => {
      e = $.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let a;
        if (
          ((r = n),
          !yI(n) && ((r = Ih[(a = String(n)).toLowerCase()]), r === void 0))
        )
          throw new Ee(`Unknown adapter '${a}'`);
        if (r) break;
        i[a || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(i).map(
          ([u, c]) =>
            `adapter ${u} ` +
            (c === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let a = t
          ? s.length > 1
            ? `since :
` +
              s.map(I1).join(`
`)
            : " " + I1(s[0])
          : "as no adapter specified";
        throw new Ee(
          "There is no suitable adapter to dispatch the request " + a,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Ih,
  };
function pp(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new $s(null, e);
}
function z1(e) {
  return (
    pp(e),
    (e.headers = un.from(e.headers)),
    (e.data = dp.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    zS
      .getAdapter(e.adapter || ba.adapter)(e)
      .then(
        function (r) {
          return (
            pp(e),
            (r.data = dp.call(e, e.transformResponse, r)),
            (r.headers = un.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            LS(r) ||
              (pp(e),
              r &&
                r.response &&
                ((r.response.data = dp.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = un.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const jS = "1.7.2",
  ag = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    ag[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const j1 = {};
ag.transitional = function (t, n, r) {
  function i(s, a) {
    return (
      "[Axios v" +
      jS +
      "] Transitional option '" +
      s +
      "'" +
      a +
      (r ? ". " + r : "")
    );
  }
  return (s, a, u) => {
    if (t === !1)
      throw new Ee(
        i(a, " has been removed" + (n ? " in " + n : "")),
        Ee.ERR_DEPRECATED
      );
    return (
      n &&
        !j1[a] &&
        ((j1[a] = !0),
        console.warn(
          i(
            a,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, a, u) : !0
    );
  };
};
function wI(e, t, n) {
  if (typeof e != "object")
    throw new Ee("options must be an object", Ee.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i],
      a = t[s];
    if (a) {
      const u = e[s],
        c = u === void 0 || a(u, s, e);
      if (c !== !0)
        throw new Ee("option " + s + " must be " + c, Ee.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new Ee("Unknown option " + s, Ee.ERR_BAD_OPTION);
  }
}
const zh = { assertOptions: wI, validators: ag },
  gi = zh.validators;
class xo {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new N1(), response: new N1() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace
          ? Error.captureStackTrace((i = {}))
          : (i = new Error());
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? s &&
              !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + s)
            : (r.stack = s);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Oo(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 &&
      zh.assertOptions(
        r,
        {
          silentJSONParsing: gi.transitional(gi.boolean),
          forcedJSONParsing: gi.transitional(gi.boolean),
          clarifyTimeoutError: gi.transitional(gi.boolean),
        },
        !1
      ),
      i != null &&
        ($.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : zh.assertOptions(
              i,
              { encode: gi.function, serialize: gi.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let a = s && $.merge(s.common, s[n.method]);
    s &&
      $.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (b) => {
          delete s[b];
        }
      ),
      (n.headers = un.concat(a, s));
    const u = [];
    let c = !0;
    this.interceptors.request.forEach(function (T) {
      (typeof T.runWhen == "function" && T.runWhen(n) === !1) ||
        ((c = c && T.synchronous), u.unshift(T.fulfilled, T.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function (T) {
      d.push(T.fulfilled, T.rejected);
    });
    let p,
      m = 0,
      g;
    if (!c) {
      const b = [z1.bind(this), void 0];
      for (
        b.unshift.apply(b, u),
          b.push.apply(b, d),
          g = b.length,
          p = Promise.resolve(n);
        m < g;

      )
        p = p.then(b[m++], b[m++]);
      return p;
    }
    g = u.length;
    let _ = n;
    for (m = 0; m < g; ) {
      const b = u[m++],
        T = u[m++];
      try {
        _ = b(_);
      } catch (O) {
        T.call(this, O);
        break;
      }
    }
    try {
      p = z1.call(this, _);
    } catch (b) {
      return Promise.reject(b);
    }
    for (m = 0, g = d.length; m < g; ) p = p.then(d[m++], d[m++]);
    return p;
  }
  getUri(t) {
    t = Oo(this.defaults, t);
    const n = MS(t.baseURL, t.url);
    return RS(n, t.params, t.paramsSerializer);
  }
}
$.forEach(["delete", "get", "head", "options"], function (t) {
  xo.prototype[t] = function (n, r) {
    return this.request(
      Oo(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
$.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, a, u) {
      return this.request(
        Oo(u || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: a,
        })
      );
    };
  }
  (xo.prototype[t] = n()), (xo.prototype[t + "Form"] = n(!0));
});
class ug {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const a = new Promise((u) => {
          r.subscribe(u), (s = u);
        }).then(i);
        return (
          (a.cancel = function () {
            r.unsubscribe(s);
          }),
          a
        );
      }),
      t(function (s, a, u) {
        r.reason || ((r.reason = new $s(s, a, u)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new ug(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
function xI(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function SI(e) {
  return $.isObject(e) && e.isAxiosError === !0;
}
const jh = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(jh).forEach(([e, t]) => {
  jh[t] = e;
});
function DS(e) {
  const t = new xo(e),
    n = gS(xo.prototype.request, t);
  return (
    $.extend(n, xo.prototype, t, { allOwnKeys: !0 }),
    $.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return DS(Oo(e, i));
    }),
    n
  );
}
const ut = DS(ba);
ut.Axios = xo;
ut.CanceledError = $s;
ut.CancelToken = ug;
ut.isCancel = LS;
ut.VERSION = jS;
ut.toFormData = mf;
ut.AxiosError = Ee;
ut.Cancel = ut.CanceledError;
ut.all = function (t) {
  return Promise.all(t);
};
ut.spread = xI;
ut.isAxiosError = SI;
ut.mergeConfig = Oo;
ut.AxiosHeaders = un;
ut.formToJSON = (e) => OS($.isHTMLForm(e) ? new FormData(e) : e);
ut.getAdapter = zS.getAdapter;
ut.HttpStatusCode = jh;
ut.default = ut;
function EI() {
  const [e, t] = L.useState([]);
  return (
    L.useEffect(() => {
      (async () => {
        const i = (await ut.get("https://delizioso-api.vercel.app/chefs")).data;
        t(i);
      })();
    }, []),
    x.jsx("section", {
      className: "lg:py-42 py-24",
      children: x.jsxs("div", {
        className: "container grid grid-cols-1 md:space-y-24 space-y-10",
        children: [
          x.jsx("span", {
            className:
              "md:text-[80px] text-5xl text-center font-bold font-tinos capitalize",
            children: "our greatest chef",
          }),
          x.jsx("div", {
            className: "grid md:grid-cols-3 grid-cols-2 gap-10",
            children: e.slice(0, 3).map((n, r) =>
              x.jsxs(
                "div",
                {
                  className:
                    "flex group  flex-col space-y-10 capitalize items-center",
                  children: [
                    x.jsx("img", {
                      src: n.img,
                      alt: n.name,
                      className:
                        "size-12/12 rounded-xl overflow-hidden group-hover:scale-105 duration-200",
                    }),
                    x.jsx("span", {
                      className: "font-semibold text-2xl",
                      children: n.name,
                    }),
                    x.jsx("span", {
                      className: "text-2xl text-gray-400",
                      children: n.title,
                    }),
                  ],
                },
                n.id
              )
            ),
          }),
          x.jsx("button", {
            className:
              "btn-primary mt-12  bg-primaryOrange md:py-5 md:px-20 text-xl m-auto text-nowrap hover:scale-110 duration-200",
            children: "view all",
          }),
        ],
      }),
    })
  );
}
function D1(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function cg(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : D1(t[n]) &&
          D1(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          cg(e[n], t[n]);
    });
}
const FS = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function Io() {
  const e = typeof document < "u" ? document : {};
  return cg(e, FS), e;
}
const _I = {
  document: FS,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Nn() {
  const e = typeof window < "u" ? window : {};
  return cg(e, _I), e;
}
function bI(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function CI(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function Dh(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function Dc() {
  return Date.now();
}
function TI(e) {
  const t = Nn();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function PI(e, t) {
  t === void 0 && (t = "x");
  const n = Nn();
  let r, i, s;
  const a = TI(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = a.transform || a.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((u) => u.replace(",", "."))
            .join(", ")),
        (s = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((s =
          a.MozTransform ||
          a.OTransform ||
          a.MsTransform ||
          a.msTransform ||
          a.transform ||
          a
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = s.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = s.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = s.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function kl(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function RI(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function xn() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !RI(r)) {
      const i = Object.keys(Object(r)).filter((s) => t.indexOf(s) < 0);
      for (let s = 0, a = i.length; s < a; s += 1) {
        const u = i[s],
          c = Object.getOwnPropertyDescriptor(r, u);
        c !== void 0 &&
          c.enumerable &&
          (kl(e[u]) && kl(r[u])
            ? r[u].__swiper__
              ? (e[u] = r[u])
              : xn(e[u], r[u])
            : !kl(e[u]) && kl(r[u])
            ? ((e[u] = {}), r[u].__swiper__ ? (e[u] = r[u]) : xn(e[u], r[u]))
            : (e[u] = r[u]));
      }
    }
  }
  return e;
}
function ju(e, t, n) {
  e.style.setProperty(t, n);
}
function BS(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = Nn(),
    s = -t.translate;
  let a = null,
    u;
  const c = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const d = n > s ? "next" : "prev",
    p = (g, _) => (d === "next" && g >= _) || (d === "prev" && g <= _),
    m = () => {
      (u = new Date().getTime()), a === null && (a = u);
      const g = Math.max(Math.min((u - a) / c, 1), 0),
        _ = 0.5 - Math.cos(g * Math.PI) / 2;
      let b = s + _ * (n - s);
      if ((p(b, n) && (b = n), t.wrapperEl.scrollTo({ [r]: b }), p(b, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: b });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(m);
    };
  m();
}
function _r(e, t) {
  t === void 0 && (t = "");
  const n = [...e.children];
  return (
    e instanceof HTMLSlotElement && n.push(...e.assignedElements()),
    t ? n.filter((r) => r.matches(t)) : n
  );
}
function NI(e, t) {
  const n = t.contains(e);
  return !n && t instanceof HTMLSlotElement
    ? [...t.assignedElements()].includes(e)
    : n;
}
function Fc(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function Fh(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : bI(t))), n;
}
function OI(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function LI(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function bi(e, t) {
  return Nn().getComputedStyle(e, null).getPropertyValue(t);
}
function F1(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function kI(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) n.push(r), (r = r.parentElement);
  return n;
}
function B1(e, t, n) {
  const r = Nn();
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
let hp;
function MI() {
  const e = Nn(),
    t = Io();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function US() {
  return hp || (hp = MI()), hp;
}
let mp;
function AI(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = US(),
    r = Nn(),
    i = r.navigator.platform,
    s = t || r.navigator.userAgent,
    a = { ios: !1, android: !1 },
    u = r.screen.width,
    c = r.screen.height,
    d = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let p = s.match(/(iPad).*OS\s([\d_]+)/);
  const m = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    g = !p && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    _ = i === "Win32";
  let b = i === "MacIntel";
  const T = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !p &&
      b &&
      n.touch &&
      T.indexOf(`${u}x${c}`) >= 0 &&
      ((p = s.match(/(Version)\/([\d.]+)/)),
      p || (p = [0, 1, "13_0_0"]),
      (b = !1)),
    d && !_ && ((a.os = "android"), (a.android = !0)),
    (p || g || m) && ((a.os = "ios"), (a.ios = !0)),
    a
  );
}
function $S(e) {
  return e === void 0 && (e = {}), mp || (mp = AI(e)), mp;
}
let gp;
function II() {
  const e = Nn(),
    t = $S();
  let n = !1;
  function r() {
    const u = e.navigator.userAgent.toLowerCase();
    return (
      u.indexOf("safari") >= 0 &&
      u.indexOf("chrome") < 0 &&
      u.indexOf("android") < 0
    );
  }
  if (r()) {
    const u = String(e.navigator.userAgent);
    if (u.includes("Version/")) {
      const [c, d] = u
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((p) => Number(p));
      n = c < 16 || (c === 16 && d < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    s = r(),
    a = s || (i && t.ios);
  return {
    isSafari: n || s,
    needPerspectiveFix: n,
    need3dFix: a,
    isWebView: i,
  };
}
function zI() {
  return gp || (gp = II()), gp;
}
function jI(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = Nn();
  let s = null,
    a = null;
  const u = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    c = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((s = new ResizeObserver((m) => {
          a = i.requestAnimationFrame(() => {
            const { width: g, height: _ } = t;
            let b = g,
              T = _;
            m.forEach((O) => {
              let { contentBoxSize: y, contentRect: S, target: w } = O;
              (w && w !== t.el) ||
                ((b = S ? S.width : (y[0] || y).inlineSize),
                (T = S ? S.height : (y[0] || y).blockSize));
            }),
              (b !== g || T !== _) && u();
          });
        })),
        s.observe(t.el));
    },
    d = () => {
      a && i.cancelAnimationFrame(a),
        s && s.unobserve && t.el && (s.unobserve(t.el), (s = null));
    },
    p = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      c();
      return;
    }
    i.addEventListener("resize", u), i.addEventListener("orientationchange", p);
  }),
    n("destroy", () => {
      d(),
        i.removeEventListener("resize", u),
        i.removeEventListener("orientationchange", p);
    });
}
function DI(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = [],
    a = Nn(),
    u = function (p, m) {
      m === void 0 && (m = {});
      const g = a.MutationObserver || a.WebkitMutationObserver,
        _ = new g((b) => {
          if (t.__preventObserver__) return;
          if (b.length === 1) {
            i("observerUpdate", b[0]);
            return;
          }
          const T = function () {
            i("observerUpdate", b[0]);
          };
          a.requestAnimationFrame
            ? a.requestAnimationFrame(T)
            : a.setTimeout(T, 0);
        });
      _.observe(p, {
        attributes: typeof m.attributes > "u" ? !0 : m.attributes,
        childList: t.isElement || (typeof m.childList > "u" ? !0 : m).childList,
        characterData: typeof m.characterData > "u" ? !0 : m.characterData,
      }),
        s.push(_);
    },
    c = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const p = kI(t.hostEl);
          for (let m = 0; m < p.length; m += 1) u(p[m]);
        }
        u(t.hostEl, { childList: t.params.observeSlideChildren }),
          u(t.wrapperEl, { attributes: !1 });
      }
    },
    d = () => {
      s.forEach((p) => {
        p.disconnect();
      }),
        s.splice(0, s.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", c),
    r("destroy", d);
}
var FI = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((s) => {
        r.eventsListeners[s] || (r.eventsListeners[s] = []),
          r.eventsListeners[s][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var s = arguments.length, a = new Array(s), u = 0; u < s; u++)
        a[u] = arguments[u];
      t.apply(r, a);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, s) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(s, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++)
      s[a] = arguments[a];
    return (
      typeof s[0] == "string" || Array.isArray(s[0])
        ? ((t = s[0]), (n = s.slice(1, s.length)), (r = e))
        : ((t = s[0].events), (n = s[0].data), (r = s[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((c) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((d) => {
            d.apply(r, [c, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[c] &&
            e.eventsListeners[c].forEach((d) => {
              d.apply(r, n);
            });
      }),
      e
    );
  },
};
function BI() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(bi(r, "padding-left") || 0, 10) -
        parseInt(bi(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(bi(r, "padding-top") || 0, 10) -
        parseInt(bi(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function UI() {
  const e = this;
  function t(U, J) {
    return parseFloat(U.getPropertyValue(e.getDirectionLabel(J)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: s, rtlTranslate: a, wrongRTL: u } = e,
    c = e.virtual && n.virtual.enabled,
    d = c ? e.virtual.slides.length : e.slides.length,
    p = _r(i, `.${e.params.slideClass}, swiper-slide`),
    m = c ? e.virtual.slides.length : p.length;
  let g = [];
  const _ = [],
    b = [];
  let T = n.slidesOffsetBefore;
  typeof T == "function" && (T = n.slidesOffsetBefore.call(e));
  let O = n.slidesOffsetAfter;
  typeof O == "function" && (O = n.slidesOffsetAfter.call(e));
  const y = e.snapGrid.length,
    S = e.slidesGrid.length;
  let w = n.spaceBetween,
    P = -T,
    j = 0,
    N = 0;
  if (typeof s > "u") return;
  typeof w == "string" && w.indexOf("%") >= 0
    ? (w = (parseFloat(w.replace("%", "")) / 100) * s)
    : typeof w == "string" && (w = parseFloat(w)),
    (e.virtualSize = -w),
    p.forEach((U) => {
      a ? (U.style.marginLeft = "") : (U.style.marginRight = ""),
        (U.style.marginBottom = ""),
        (U.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (ju(r, "--swiper-centered-offset-before", ""),
      ju(r, "--swiper-centered-offset-after", ""));
  const H = n.grid && n.grid.rows > 1 && e.grid;
  H ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
  let D;
  const V =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (U) => typeof n.breakpoints[U].slidesPerView < "u"
    ).length > 0;
  for (let U = 0; U < m; U += 1) {
    D = 0;
    let J;
    if (
      (p[U] && (J = p[U]),
      H && e.grid.updateSlide(U, J, p),
      !(p[U] && bi(J, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        V && (p[U].style[e.getDirectionLabel("width")] = "");
        const Q = getComputedStyle(J),
          re = J.style.transform,
          ae = J.style.webkitTransform;
        if (
          (re && (J.style.transform = "none"),
          ae && (J.style.webkitTransform = "none"),
          n.roundLengths)
        )
          D = e.isHorizontal() ? B1(J, "width") : B1(J, "height");
        else {
          const Ae = t(Q, "width"),
            Ge = t(Q, "padding-left"),
            Pe = t(Q, "padding-right"),
            Z = t(Q, "margin-left"),
            ne = t(Q, "margin-right"),
            le = Q.getPropertyValue("box-sizing");
          if (le && le === "border-box") D = Ae + Z + ne;
          else {
            const { clientWidth: he, offsetWidth: Me } = J;
            D = Ae + Ge + Pe + Z + ne + (Me - he);
          }
        }
        re && (J.style.transform = re),
          ae && (J.style.webkitTransform = ae),
          n.roundLengths && (D = Math.floor(D));
      } else
        (D = (s - (n.slidesPerView - 1) * w) / n.slidesPerView),
          n.roundLengths && (D = Math.floor(D)),
          p[U] && (p[U].style[e.getDirectionLabel("width")] = `${D}px`);
      p[U] && (p[U].swiperSlideSize = D),
        b.push(D),
        n.centeredSlides
          ? ((P = P + D / 2 + j / 2 + w),
            j === 0 && U !== 0 && (P = P - s / 2 - w),
            U === 0 && (P = P - s / 2 - w),
            Math.abs(P) < 1 / 1e3 && (P = 0),
            n.roundLengths && (P = Math.floor(P)),
            N % n.slidesPerGroup === 0 && g.push(P),
            _.push(P))
          : (n.roundLengths && (P = Math.floor(P)),
            (N - Math.min(e.params.slidesPerGroupSkip, N)) %
              e.params.slidesPerGroup ===
              0 && g.push(P),
            _.push(P),
            (P = P + D + w)),
        (e.virtualSize += D + w),
        (j = D),
        (N += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + O),
    a &&
      u &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + w}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + w}px`),
    H && e.grid.updateWrapperSize(D, g),
    !n.centeredSlides)
  ) {
    const U = [];
    for (let J = 0; J < g.length; J += 1) {
      let Q = g[J];
      n.roundLengths && (Q = Math.floor(Q)),
        g[J] <= e.virtualSize - s && U.push(Q);
    }
    (g = U),
      Math.floor(e.virtualSize - s) - Math.floor(g[g.length - 1]) > 1 &&
        g.push(e.virtualSize - s);
  }
  if (c && n.loop) {
    const U = b[0] + w;
    if (n.slidesPerGroup > 1) {
      const J = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        Q = U * n.slidesPerGroup;
      for (let re = 0; re < J; re += 1) g.push(g[g.length - 1] + Q);
    }
    for (let J = 0; J < e.virtual.slidesBefore + e.virtual.slidesAfter; J += 1)
      n.slidesPerGroup === 1 && g.push(g[g.length - 1] + U),
        _.push(_[_.length - 1] + U),
        (e.virtualSize += U);
  }
  if ((g.length === 0 && (g = [0]), w !== 0)) {
    const U =
      e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
    p.filter((J, Q) =>
      !n.cssMode || n.loop ? !0 : Q !== p.length - 1
    ).forEach((J) => {
      J.style[U] = `${w}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let U = 0;
    b.forEach((Q) => {
      U += Q + (w || 0);
    }),
      (U -= w);
    const J = U - s;
    g = g.map((Q) => (Q <= 0 ? -T : Q > J ? J + O : Q));
  }
  if (n.centerInsufficientSlides) {
    let U = 0;
    b.forEach((Q) => {
      U += Q + (w || 0);
    }),
      (U -= w);
    const J = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
    if (U + J < s) {
      const Q = (s - U - J) / 2;
      g.forEach((re, ae) => {
        g[ae] = re - Q;
      }),
        _.forEach((re, ae) => {
          _[ae] = re + Q;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: p,
      snapGrid: g,
      slidesGrid: _,
      slidesSizesGrid: b,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    ju(r, "--swiper-centered-offset-before", `${-g[0]}px`),
      ju(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - b[b.length - 1] / 2}px`
      );
    const U = -e.snapGrid[0],
      J = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((Q) => Q + U)),
      (e.slidesGrid = e.slidesGrid.map((Q) => Q + J));
  }
  if (
    (m !== d && e.emit("slidesLengthChange"),
    g.length !== y &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    _.length !== S && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !c && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const U = `${n.containerModifierClass}backface-hidden`,
      J = e.el.classList.contains(U);
    m <= n.maxBackfaceHiddenSlides
      ? J || e.el.classList.add(U)
      : J && e.el.classList.remove(U);
  }
}
function $I(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    s;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const a = (u) => (r ? t.slides[t.getSlideIndexByData(u)] : t.slides[u]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((u) => {
        n.push(u);
      });
    else
      for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
        const u = t.activeIndex + s;
        if (u > t.slides.length && !r) break;
        n.push(a(u));
      }
  else n.push(a(t.activeIndex));
  for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < "u") {
      const u = n[s].offsetHeight;
      i = u > i ? u : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function WI() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
const U1 = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function HI(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: s } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let a = -e;
  i && (a = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  let u = n.spaceBetween;
  typeof u == "string" && u.indexOf("%") >= 0
    ? (u = (parseFloat(u.replace("%", "")) / 100) * t.size)
    : typeof u == "string" && (u = parseFloat(u));
  for (let c = 0; c < r.length; c += 1) {
    const d = r[c];
    let p = d.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (p -= r[0].swiperSlideOffset);
    const m =
        (a + (n.centeredSlides ? t.minTranslate() : 0) - p) /
        (d.swiperSlideSize + u),
      g =
        (a - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - p) /
        (d.swiperSlideSize + u),
      _ = -(a - p),
      b = _ + t.slidesSizesGrid[c],
      T = _ >= 0 && _ <= t.size - t.slidesSizesGrid[c],
      O =
        (_ >= 0 && _ < t.size - 1) ||
        (b > 1 && b <= t.size) ||
        (_ <= 0 && b >= t.size);
    O && (t.visibleSlides.push(d), t.visibleSlidesIndexes.push(c)),
      U1(d, O, n.slideVisibleClass),
      U1(d, T, n.slideFullyVisibleClass),
      (d.progress = i ? -m : m),
      (d.originalProgress = i ? -g : g);
  }
}
function VI(e) {
  const t = this;
  if (typeof e > "u") {
    const p = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * p) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: s, isEnd: a, progressLoop: u } = t;
  const c = s,
    d = a;
  if (r === 0) (i = 0), (s = !0), (a = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const p = Math.abs(e - t.minTranslate()) < 1,
      m = Math.abs(e - t.maxTranslate()) < 1;
    (s = p || i <= 0), (a = m || i >= 1), p && (i = 0), m && (i = 1);
  }
  if (n.loop) {
    const p = t.getSlideIndexByData(0),
      m = t.getSlideIndexByData(t.slides.length - 1),
      g = t.slidesGrid[p],
      _ = t.slidesGrid[m],
      b = t.slidesGrid[t.slidesGrid.length - 1],
      T = Math.abs(e);
    T >= g ? (u = (T - g) / b) : (u = (T + b - _) / b), u > 1 && (u -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: u, isBeginning: s, isEnd: a }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    s && !c && t.emit("reachBeginning toEdge"),
    a && !d && t.emit("reachEnd toEdge"),
    ((c && !s) || (d && !a)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
const vp = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function GI() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    s = e.virtual && n.virtual.enabled,
    a = e.grid && n.grid && n.grid.rows > 1,
    u = (m) => _r(r, `.${n.slideClass}${m}, swiper-slide${m}`)[0];
  let c, d, p;
  if (s)
    if (n.loop) {
      let m = i - e.virtual.slidesBefore;
      m < 0 && (m = e.virtual.slides.length + m),
        m >= e.virtual.slides.length && (m -= e.virtual.slides.length),
        (c = u(`[data-swiper-slide-index="${m}"]`));
    } else c = u(`[data-swiper-slide-index="${i}"]`);
  else
    a
      ? ((c = t.filter((m) => m.column === i)[0]),
        (p = t.filter((m) => m.column === i + 1)[0]),
        (d = t.filter((m) => m.column === i - 1)[0]))
      : (c = t[i]);
  c &&
    (a ||
      ((p = LI(c, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !p && (p = t[0]),
      (d = OI(c, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !d === 0 && (d = t[t.length - 1]))),
    t.forEach((m) => {
      vp(m, m === c, n.slideActiveClass),
        vp(m, m === p, n.slideNextClass),
        vp(m, m === d, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const ec = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  yp = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  Bh = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const a = i,
        u = [a - t];
      u.push(...Array.from({ length: t }).map((c, d) => a + r + d)),
        e.slides.forEach((c, d) => {
          u.includes(c.column) && yp(e, d);
        });
      return;
    }
    const s = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let a = i - t; a <= s + t; a += 1) {
        const u = ((a % n) + n) % n;
        (u < i || u > s) && yp(e, u);
      }
    else
      for (let a = Math.max(i - t, 0); a <= Math.min(s + t, n - 1); a += 1)
        a !== i && (a > s || a < i) && yp(e, a);
  };
function KI(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let s = 0; s < t.length; s += 1)
    typeof t[s + 1] < "u"
      ? r >= t[s] && r < t[s + 1] - (t[s + 1] - t[s]) / 2
        ? (i = s)
        : r >= t[s] && r < t[s + 1] && (i = s + 1)
      : r >= t[s] && (i = s);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function qI(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: s, realIndex: a, snapIndex: u } = t;
  let c = e,
    d;
  const p = (_) => {
    let b = _ - t.virtual.slidesBefore;
    return (
      b < 0 && (b = t.virtual.slides.length + b),
      b >= t.virtual.slides.length && (b -= t.virtual.slides.length),
      b
    );
  };
  if ((typeof c > "u" && (c = KI(t)), r.indexOf(n) >= 0)) d = r.indexOf(n);
  else {
    const _ = Math.min(i.slidesPerGroupSkip, c);
    d = _ + Math.floor((c - _) / i.slidesPerGroup);
  }
  if ((d >= r.length && (d = r.length - 1), c === s && !t.params.loop)) {
    d !== u && ((t.snapIndex = d), t.emit("snapIndexChange"));
    return;
  }
  if (c === s && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = p(c);
    return;
  }
  const m = t.grid && i.grid && i.grid.rows > 1;
  let g;
  if (t.virtual && i.virtual.enabled && i.loop) g = p(c);
  else if (m) {
    const _ = t.slides.filter((T) => T.column === c)[0];
    let b = parseInt(_.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(b) && (b = Math.max(t.slides.indexOf(_), 0)),
      (g = Math.floor(b / i.grid.rows));
  } else if (t.slides[c]) {
    const _ = t.slides[c].getAttribute("data-swiper-slide-index");
    _ ? (g = parseInt(_, 10)) : (g = c);
  } else g = c;
  Object.assign(t, {
    previousSnapIndex: u,
    snapIndex: d,
    previousRealIndex: a,
    realIndex: g,
    previousIndex: s,
    activeIndex: c,
  }),
    t.initialized && Bh(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (a !== g && t.emit("realIndexChange"), t.emit("slideChange"));
}
function YI(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((u) => {
      !i && u.matches && u.matches(`.${r.slideClass}, swiper-slide`) && (i = u);
    });
  let s = !1,
    a;
  if (i) {
    for (let u = 0; u < n.slides.length; u += 1)
      if (n.slides[u] === i) {
        (s = !0), (a = u);
        break;
      }
  }
  if (i && s)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = a);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var QI = {
  updateSize: BI,
  updateSlides: UI,
  updateAutoHeight: $I,
  updateSlidesOffset: WI,
  updateSlidesProgress: HI,
  updateProgress: VI,
  updateSlidesClasses: GI,
  updateActiveIndex: qI,
  updateClickedSlide: YI,
};
function XI(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: s } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let a = PI(s, e);
  return (a += t.cssOverflowAdjustment()), r && (a = -a), a || 0;
}
function JI(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: s, progress: a } = n;
  let u = 0,
    c = 0;
  const d = 0;
  n.isHorizontal() ? (u = r ? -e : e) : (c = e),
    i.roundLengths && ((u = Math.floor(u)), (c = Math.floor(c))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? u : c),
    i.cssMode
      ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -u
          : -c)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (u -= n.cssOverflowAdjustment())
          : (c -= n.cssOverflowAdjustment()),
        (s.style.transform = `translate3d(${u}px, ${c}px, ${d}px)`));
  let p;
  const m = n.maxTranslate() - n.minTranslate();
  m === 0 ? (p = 0) : (p = (e - n.minTranslate()) / m),
    p !== a && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function ZI() {
  return -this.snapGrid[0];
}
function ez() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function tz(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const s = this,
    { params: a, wrapperEl: u } = s;
  if (s.animating && a.preventInteractionOnTransition) return !1;
  const c = s.minTranslate(),
    d = s.maxTranslate();
  let p;
  if (
    (r && e > c ? (p = c) : r && e < d ? (p = d) : (p = e),
    s.updateProgress(p),
    a.cssMode)
  ) {
    const m = s.isHorizontal();
    if (t === 0) u[m ? "scrollLeft" : "scrollTop"] = -p;
    else {
      if (!s.support.smoothScroll)
        return (
          BS({ swiper: s, targetPosition: -p, side: m ? "left" : "top" }), !0
        );
      u.scrollTo({ [m ? "left" : "top"]: -p, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (s.setTransition(0),
        s.setTranslate(p),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd")))
      : (s.setTransition(t),
        s.setTranslate(p),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (g) {
              !s ||
                s.destroyed ||
                (g.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  (s.animating = !1),
                  n && s.emit("transitionEnd")));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var nz = {
  getTranslate: XI,
  setTranslate: JI,
  minTranslate: ZI,
  maxTranslate: ez,
  translateTo: tz,
};
function rz(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function WS(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: s, previousIndex: a } = t;
  let u = r;
  if (
    (u || (s > a ? (u = "next") : s < a ? (u = "prev") : (u = "reset")),
    t.emit(`transition${i}`),
    n && s !== a)
  ) {
    if (u === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      u === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function iz(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    WS({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function oz(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      WS({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var sz = { setTransition: rz, transitionStart: iz, transitionEnd: oz };
function lz(e, t, n, r, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  let a = e;
  a < 0 && (a = 0);
  const {
    params: u,
    snapGrid: c,
    slidesGrid: d,
    previousIndex: p,
    activeIndex: m,
    rtlTranslate: g,
    wrapperEl: _,
    enabled: b,
  } = s;
  if (
    (!b && !r && !i) ||
    s.destroyed ||
    (s.animating && u.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = s.params.speed);
  const T = Math.min(s.params.slidesPerGroupSkip, a);
  let O = T + Math.floor((a - T) / s.params.slidesPerGroup);
  O >= c.length && (O = c.length - 1);
  const y = -c[O];
  if (u.normalizeSlideIndex)
    for (let w = 0; w < d.length; w += 1) {
      const P = -Math.floor(y * 100),
        j = Math.floor(d[w] * 100),
        N = Math.floor(d[w + 1] * 100);
      typeof d[w + 1] < "u"
        ? P >= j && P < N - (N - j) / 2
          ? (a = w)
          : P >= j && P < N && (a = w + 1)
        : P >= j && (a = w);
    }
  if (
    s.initialized &&
    a !== m &&
    ((!s.allowSlideNext &&
      (g
        ? y > s.translate && y > s.minTranslate()
        : y < s.translate && y < s.minTranslate())) ||
      (!s.allowSlidePrev &&
        y > s.translate &&
        y > s.maxTranslate() &&
        (m || 0) !== a))
  )
    return !1;
  a !== (p || 0) && n && s.emit("beforeSlideChangeStart"), s.updateProgress(y);
  let S;
  if (
    (a > m ? (S = "next") : a < m ? (S = "prev") : (S = "reset"),
    (g && -y === s.translate) || (!g && y === s.translate))
  )
    return (
      s.updateActiveIndex(a),
      u.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      u.effect !== "slide" && s.setTranslate(y),
      S !== "reset" && (s.transitionStart(n, S), s.transitionEnd(n, S)),
      !1
    );
  if (u.cssMode) {
    const w = s.isHorizontal(),
      P = g ? y : -y;
    if (t === 0) {
      const j = s.virtual && s.params.virtual.enabled;
      j &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        j && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              _[w ? "scrollLeft" : "scrollTop"] = P;
            }))
          : (_[w ? "scrollLeft" : "scrollTop"] = P),
        j &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""), (s._immediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          BS({ swiper: s, targetPosition: P, side: w ? "left" : "top" }), !0
        );
      _.scrollTo({ [w ? "left" : "top"]: P, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(t),
    s.setTranslate(y),
    s.updateActiveIndex(a),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", t, r),
    s.transitionStart(n, S),
    t === 0
      ? s.transitionEnd(n, S)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (P) {
            !s ||
              s.destroyed ||
              (P.target === this &&
                (s.wrapperEl.removeEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(n, S)));
          }),
        s.wrapperEl.addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function az(e, t, n, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const s = i.grid && i.params.grid && i.params.grid.rows > 1;
  let a = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) a = a + i.virtual.slidesBefore;
    else {
      let u;
      if (s) {
        const g = a * i.params.grid.rows;
        u = i.slides.filter(
          (_) => _.getAttribute("data-swiper-slide-index") * 1 === g
        )[0].column;
      } else u = i.getSlideIndexByData(a);
      const c = s
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: d } = i.params;
      let p = i.params.slidesPerView;
      p === "auto"
        ? (p = i.slidesPerViewDynamic())
        : ((p = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          d && p % 2 === 0 && (p = p + 1));
      let m = c - u < p;
      if (
        (d && (m = m || u < Math.ceil(p / 2)),
        r && d && i.params.slidesPerView !== "auto" && !s && (m = !1),
        m)
      ) {
        const g = d
          ? u < i.activeIndex
            ? "prev"
            : "next"
          : u - i.activeIndex - 1 < i.params.slidesPerView
          ? "next"
          : "prev";
        i.loopFix({
          direction: g,
          slideTo: !0,
          activeSlideIndex: g === "next" ? u + 1 : u - c + 1,
          slideRealIndex: g === "next" ? i.realIndex : void 0,
        });
      }
      if (s) {
        const g = a * i.params.grid.rows;
        a = i.slides.filter(
          (_) => _.getAttribute("data-swiper-slide-index") * 1 === g
        )[0].column;
      } else a = i.getSlideIndexByData(a);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(a, t, n, r);
    }),
    i
  );
}
function uz(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: s, animating: a } = r;
  if (!i || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  let u = s.slidesPerGroup;
  s.slidesPerView === "auto" &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (u = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const c = r.activeIndex < s.slidesPerGroupSkip ? 1 : u,
    d = r.virtual && s.virtual.enabled;
  if (s.loop) {
    if (a && !d && s.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && s.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + c, e, t, n);
        }),
        !0
      );
  }
  return s.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + c, e, t, n);
}
function cz(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: s,
      slidesGrid: a,
      rtlTranslate: u,
      enabled: c,
      animating: d,
    } = r;
  if (!c || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  const p = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (d && !p && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const m = u ? r.translate : -r.translate;
  function g(y) {
    return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y);
  }
  const _ = g(m),
    b = s.map((y) => g(y));
  let T = s[b.indexOf(_) - 1];
  if (typeof T > "u" && i.cssMode) {
    let y;
    s.forEach((S, w) => {
      _ >= S && (y = w);
    }),
      typeof y < "u" && (T = s[y > 0 ? y - 1 : y]);
  }
  let O = 0;
  if (
    (typeof T < "u" &&
      ((O = a.indexOf(T)),
      O < 0 && (O = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((O = O - r.slidesPerViewDynamic("previous", !0) + 1),
        (O = Math.max(O, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const y =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(y, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(O, e, t, n);
      }),
      !0
    );
  return r.slideTo(O, e, t, n);
}
function fz(e, t, n) {
  t === void 0 && (t = !0);
  const r = this;
  if (!r.destroyed)
    return (
      typeof e > "u" && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    );
}
function dz(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let s = i.activeIndex;
  const a = Math.min(i.params.slidesPerGroupSkip, s),
    u = a + Math.floor((s - a) / i.params.slidesPerGroup),
    c = i.rtlTranslate ? i.translate : -i.translate;
  if (c >= i.snapGrid[u]) {
    const d = i.snapGrid[u],
      p = i.snapGrid[u + 1];
    c - d > (p - d) * r && (s += i.params.slidesPerGroup);
  } else {
    const d = i.snapGrid[u - 1],
      p = i.snapGrid[u];
    c - d <= (p - d) * r && (s -= i.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, i.slidesGrid.length - 1)),
    i.slideTo(s, e, t, n)
  );
}
function pz() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    s;
  const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (s = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              _r(n, `${a}[data-swiper-slide-index="${s}"]`)[0]
            )),
            Dh(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            _r(n, `${a}[data-swiper-slide-index="${s}"]`)[0]
          )),
          Dh(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var hz = {
  slideTo: lz,
  slideToLoop: az,
  slideNext: uz,
  slidePrev: cz,
  slideReset: fz,
  slideToClosest: dz,
  slideToClickedSlide: pz,
};
function mz(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      _r(r, `.${n.slideClass}, swiper-slide`).forEach((m, g) => {
        m.setAttribute("data-swiper-slide-index", g);
      });
    },
    s = t.grid && n.grid && n.grid.rows > 1,
    a = n.slidesPerGroup * (s ? n.grid.rows : 1),
    u = t.slides.length % a !== 0,
    c = s && t.slides.length % n.grid.rows !== 0,
    d = (p) => {
      for (let m = 0; m < p; m += 1) {
        const g = t.isElement
          ? Fh("swiper-slide", [n.slideBlankClass])
          : Fh("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(g);
      }
    };
  if (u) {
    if (n.loopAddBlankSlides) {
      const p = a - (t.slides.length % a);
      d(p), t.recalcSlides(), t.updateSlides();
    } else
      Fc(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (c) {
    if (n.loopAddBlankSlides) {
      const p = n.grid.rows - (t.slides.length % n.grid.rows);
      d(p), t.recalcSlides(), t.updateSlides();
    } else
      Fc(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function gz(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: s,
    byController: a,
    byMousewheel: u,
  } = e === void 0 ? {} : e;
  const c = this;
  if (!c.params.loop) return;
  c.emit("beforeLoopFix");
  const {
      slides: d,
      allowSlidePrev: p,
      allowSlideNext: m,
      slidesEl: g,
      params: _,
    } = c,
    { centeredSlides: b } = _;
  if (
    ((c.allowSlidePrev = !0),
    (c.allowSlideNext = !0),
    c.virtual && _.virtual.enabled)
  ) {
    n &&
      (!_.centeredSlides && c.snapIndex === 0
        ? c.slideTo(c.virtual.slides.length, 0, !1, !0)
        : _.centeredSlides && c.snapIndex < _.slidesPerView
        ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0)
        : c.snapIndex === c.snapGrid.length - 1 &&
          c.slideTo(c.virtual.slidesBefore, 0, !1, !0)),
      (c.allowSlidePrev = p),
      (c.allowSlideNext = m),
      c.emit("loopFix");
    return;
  }
  let T = _.slidesPerView;
  T === "auto"
    ? (T = c.slidesPerViewDynamic())
    : ((T = Math.ceil(parseFloat(_.slidesPerView, 10))),
      b && T % 2 === 0 && (T = T + 1));
  const O = _.slidesPerGroupAuto ? T : _.slidesPerGroup;
  let y = O;
  y % O !== 0 && (y += O - (y % O)),
    (y += _.loopAdditionalSlides),
    (c.loopedSlides = y);
  const S = c.grid && _.grid && _.grid.rows > 1;
  d.length < T + y
    ? Fc(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : S &&
      _.grid.fill === "row" &&
      Fc(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const w = [],
    P = [];
  let j = c.activeIndex;
  typeof s > "u"
    ? (s = c.getSlideIndex(
        d.filter((re) => re.classList.contains(_.slideActiveClass))[0]
      ))
    : (j = s);
  const N = r === "next" || !r,
    H = r === "prev" || !r;
  let D = 0,
    V = 0;
  const U = S ? Math.ceil(d.length / _.grid.rows) : d.length,
    Q = (S ? d[s].column : s) + (b && typeof i > "u" ? -T / 2 + 0.5 : 0);
  if (Q < y) {
    D = Math.max(y - Q, O);
    for (let re = 0; re < y - Q; re += 1) {
      const ae = re - Math.floor(re / U) * U;
      if (S) {
        const Ae = U - ae - 1;
        for (let Ge = d.length - 1; Ge >= 0; Ge -= 1)
          d[Ge].column === Ae && w.push(Ge);
      } else w.push(U - ae - 1);
    }
  } else if (Q + T > U - y) {
    V = Math.max(Q - (U - y * 2), O);
    for (let re = 0; re < V; re += 1) {
      const ae = re - Math.floor(re / U) * U;
      S
        ? d.forEach((Ae, Ge) => {
            Ae.column === ae && P.push(Ge);
          })
        : P.push(ae);
    }
  }
  if (
    ((c.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      c.__preventObserver__ = !1;
    }),
    H &&
      w.forEach((re) => {
        (d[re].swiperLoopMoveDOM = !0),
          g.prepend(d[re]),
          (d[re].swiperLoopMoveDOM = !1);
      }),
    N &&
      P.forEach((re) => {
        (d[re].swiperLoopMoveDOM = !0),
          g.append(d[re]),
          (d[re].swiperLoopMoveDOM = !1);
      }),
    c.recalcSlides(),
    _.slidesPerView === "auto"
      ? c.updateSlides()
      : S &&
        ((w.length > 0 && H) || (P.length > 0 && N)) &&
        c.slides.forEach((re, ae) => {
          c.grid.updateSlide(ae, re, c.slides);
        }),
    _.watchSlidesProgress && c.updateSlidesOffset(),
    n)
  ) {
    if (w.length > 0 && H) {
      if (typeof t > "u") {
        const re = c.slidesGrid[j],
          Ae = c.slidesGrid[j + D] - re;
        u
          ? c.setTranslate(c.translate - Ae)
          : (c.slideTo(j + Math.ceil(D), 0, !1, !0),
            i &&
              ((c.touchEventsData.startTranslate =
                c.touchEventsData.startTranslate - Ae),
              (c.touchEventsData.currentTranslate =
                c.touchEventsData.currentTranslate - Ae)));
      } else if (i) {
        const re = S ? w.length / _.grid.rows : w.length;
        c.slideTo(c.activeIndex + re, 0, !1, !0),
          (c.touchEventsData.currentTranslate = c.translate);
      }
    } else if (P.length > 0 && N)
      if (typeof t > "u") {
        const re = c.slidesGrid[j],
          Ae = c.slidesGrid[j - V] - re;
        u
          ? c.setTranslate(c.translate - Ae)
          : (c.slideTo(j - V, 0, !1, !0),
            i &&
              ((c.touchEventsData.startTranslate =
                c.touchEventsData.startTranslate - Ae),
              (c.touchEventsData.currentTranslate =
                c.touchEventsData.currentTranslate - Ae)));
      } else {
        const re = S ? P.length / _.grid.rows : P.length;
        c.slideTo(c.activeIndex - re, 0, !1, !0);
      }
  }
  if (
    ((c.allowSlidePrev = p),
    (c.allowSlideNext = m),
    c.controller && c.controller.control && !a)
  ) {
    const re = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: s,
      byController: !0,
    };
    Array.isArray(c.controller.control)
      ? c.controller.control.forEach((ae) => {
          !ae.destroyed &&
            ae.params.loop &&
            ae.loopFix({
              ...re,
              slideTo: ae.params.slidesPerView === _.slidesPerView ? n : !1,
            });
        })
      : c.controller.control instanceof c.constructor &&
        c.controller.control.params.loop &&
        c.controller.control.loopFix({
          ...re,
          slideTo:
            c.controller.control.params.slidesPerView === _.slidesPerView
              ? n
              : !1,
        });
  }
  c.emit("loopFix");
}
function vz() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const s =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[s] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var yz = { loopCreate: mz, loopFix: gz, loopDestroy: vz };
function wz(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function xz() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var Sz = { setGrabCursor: wz, unsetGrabCursor: xz };
function Ez(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === Io() || r === Nn()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function $1(e, t, n) {
  const r = Nn(),
    { params: i } = e,
    s = i.edgeSwipeDetection,
    a = i.edgeSwipeThreshold;
  return s && (n <= a || n >= r.innerWidth - a)
    ? s === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function _z(e) {
  const t = this,
    n = Io();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    $1(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: s, touches: a, enabled: u } = t;
  if (
    !u ||
    (!s.simulateTouch && r.pointerType === "mouse") ||
    (t.animating && s.preventInteractionOnTransition)
  )
    return;
  !t.animating && s.cssMode && s.loop && t.loopFix();
  let c = r.target;
  if (
    (s.touchEventsTarget === "wrapper" && !NI(c, t.wrapperEl)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const d = !!s.noSwipingClass && s.noSwipingClass !== "",
    p = r.composedPath ? r.composedPath() : r.path;
  d && r.target && r.target.shadowRoot && p && (c = p[0]);
  const m = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    g = !!(r.target && r.target.shadowRoot);
  if (s.noSwiping && (g ? Ez(m, c) : c.closest(m))) {
    t.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !c.closest(s.swipeHandler)) return;
  (a.currentX = r.pageX), (a.currentY = r.pageY);
  const _ = a.currentX,
    b = a.currentY;
  if (!$1(t, r, _)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (a.startX = _),
    (a.startY = b),
    (i.touchStartTime = Dc()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    s.threshold > 0 && (i.allowThresholdMove = !1);
  let T = !0;
  c.matches(i.focusableElements) &&
    ((T = !1), c.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== c &&
      n.activeElement.blur();
  const O = T && t.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || O) &&
    !c.isContentEditable &&
    r.preventDefault(),
    s.freeMode &&
      s.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !s.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function bz(e) {
  const t = Io(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: s, rtlTranslate: a, enabled: u } = n;
  if (!u || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let c = e;
  if (
    (c.originalEvent && (c = c.originalEvent),
    c.type === "pointermove" &&
      (r.touchId !== null || c.pointerId !== r.pointerId))
  )
    return;
  let d;
  if (c.type === "touchmove") {
    if (
      ((d = [...c.changedTouches].filter((N) => N.identifier === r.touchId)[0]),
      !d || d.identifier !== r.touchId)
    )
      return;
  } else d = c;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", c);
    return;
  }
  const p = d.pageX,
    m = d.pageY;
  if (c.preventedByNestedSwiper) {
    (s.startX = p), (s.startY = m);
    return;
  }
  if (!n.allowTouchMove) {
    c.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(s, { startX: p, startY: m, currentX: p, currentY: m }),
        (r.touchStartTime = Dc()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (m < s.startY && n.translate <= n.maxTranslate()) ||
        (m > s.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (p < s.startX && n.translate <= n.maxTranslate()) ||
      (p > s.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    c.target === t.activeElement &&
    c.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", c),
    (s.previousX = s.currentX),
    (s.previousY = s.currentY),
    (s.currentX = p),
    (s.currentY = m);
  const g = s.currentX - s.startX,
    _ = s.currentY - s.startY;
  if (n.params.threshold && Math.sqrt(g ** 2 + _ ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let N;
    (n.isHorizontal() && s.currentY === s.startY) ||
    (n.isVertical() && s.currentX === s.startX)
      ? (r.isScrolling = !1)
      : g * g + _ * _ >= 25 &&
        ((N = (Math.atan2(Math.abs(_), Math.abs(g)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? N > i.touchAngle
          : 90 - N > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", c),
    typeof r.startMoving > "u" &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (c.type === "touchmove" && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && c.cancelable && c.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && c.stopPropagation();
  let b = n.isHorizontal() ? g : _,
    T = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  i.oneWayMovement &&
    ((b = Math.abs(b) * (a ? 1 : -1)), (T = Math.abs(T) * (a ? 1 : -1))),
    (s.diff = b),
    (b *= i.touchRatio),
    a && ((b = -b), (T = -T));
  const O = n.touchesDirection;
  (n.swipeDirection = b > 0 ? "prev" : "next"),
    (n.touchesDirection = T > 0 ? "prev" : "next");
  const y = n.params.loop && !i.cssMode,
    S =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (y && S && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const N = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      n.wrapperEl.dispatchEvent(N);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", c);
  }
  let w;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      O !== n.touchesDirection &&
      y &&
      S &&
      Math.abs(b) >= 1)
  ) {
    Object.assign(s, {
      startX: p,
      startY: m,
      currentX: p,
      currentY: m,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", c),
    (r.isMoved = !0),
    (r.currentTranslate = b + r.startTranslate);
  let P = !0,
    j = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (j = 0),
    b > 0
      ? (y &&
          S &&
          !w &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((P = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + b) ** j)))
      : b < 0 &&
        (y &&
          S &&
          !w &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((P = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - b) ** j))),
    P && (c.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(b) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (r.currentTranslate = r.startTranslate),
          (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function Cz(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((i = [...r.changedTouches].filter((j) => j.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: a,
    touches: u,
    rtlTranslate: c,
    slidesGrid: d,
    enabled: p,
  } = t;
  if (!p || (!a.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && a.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  a.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const m = Dc(),
    g = m - n.touchStartTime;
  if (t.allowClick) {
    const j = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((j && j[0]) || r.target, j),
      t.emit("tap click", r),
      g < 300 &&
        m - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = Dc()),
    Dh(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (u.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let _;
  if (
    (a.followFinger
      ? (_ = c ? t.translate : -t.translate)
      : (_ = -n.currentTranslate),
    a.cssMode)
  )
    return;
  if (a.freeMode && a.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: _ });
    return;
  }
  const b = _ >= -t.maxTranslate() && !t.params.loop;
  let T = 0,
    O = t.slidesSizesGrid[0];
  for (
    let j = 0;
    j < d.length;
    j += j < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
  ) {
    const N = j < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    typeof d[j + N] < "u"
      ? (b || (_ >= d[j] && _ < d[j + N])) && ((T = j), (O = d[j + N] - d[j]))
      : (b || _ >= d[j]) && ((T = j), (O = d[d.length - 1] - d[d.length - 2]));
  }
  let y = null,
    S = null;
  a.rewind &&
    (t.isBeginning
      ? (S =
          a.virtual && a.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (y = 0));
  const w = (_ - d[T]) / O,
    P = T < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
  if (g > a.longSwipesMs) {
    if (!a.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (w >= a.longSwipesRatio
        ? t.slideTo(a.rewind && t.isEnd ? y : T + P)
        : t.slideTo(T)),
      t.swipeDirection === "prev" &&
        (w > 1 - a.longSwipesRatio
          ? t.slideTo(T + P)
          : S !== null && w < 0 && Math.abs(w) > a.longSwipesRatio
          ? t.slideTo(S)
          : t.slideTo(T));
  } else {
    if (!a.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(T + P)
        : t.slideTo(T)
      : (t.swipeDirection === "next" && t.slideTo(y !== null ? y : T + P),
        t.swipeDirection === "prev" && t.slideTo(S !== null ? S : T));
  }
}
function W1() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e,
    a = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const u = a && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !u
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !a
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
}
function Tz(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Pz() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const s = e.maxTranslate() - e.minTranslate();
  s === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / s),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function Rz(e) {
  const t = this;
  ec(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function Nz() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const HS = (e, t) => {
  const n = Io(),
    { params: r, el: i, wrapperEl: s, device: a } = e,
    u = !!r.nested,
    c = t === "on" ? "addEventListener" : "removeEventListener",
    d = t;
  !i ||
    typeof i == "string" ||
    (n[c]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: u }),
    i[c]("touchstart", e.onTouchStart, { passive: !1 }),
    i[c]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[c]("touchmove", e.onTouchMove, { passive: !1, capture: u }),
    n[c]("pointermove", e.onTouchMove, { passive: !1, capture: u }),
    n[c]("touchend", e.onTouchEnd, { passive: !0 }),
    n[c]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[c]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[c]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[c]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[c]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[c]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[c]("click", e.onClick, !0),
    r.cssMode && s[c]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[d](
          a.ios || a.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          W1,
          !0
        )
      : e[d]("observerUpdate", W1, !0),
    i[c]("load", e.onLoad, { capture: !0 }));
};
function Oz() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = _z.bind(e)),
    (e.onTouchMove = bz.bind(e)),
    (e.onTouchEnd = Cz.bind(e)),
    (e.onDocumentTouchStart = Nz.bind(e)),
    t.cssMode && (e.onScroll = Pz.bind(e)),
    (e.onClick = Tz.bind(e)),
    (e.onLoad = Rz.bind(e)),
    HS(e, "on");
}
function Lz() {
  HS(this, "off");
}
var kz = { attachEvents: Oz, detachEvents: Lz };
const H1 = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function Mz() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    s = r.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const a = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
  if (!a || e.currentBreakpoint === a) return;
  const c = (a in s ? s[a] : void 0) || e.originalParams,
    d = H1(e, r),
    p = H1(e, c),
    m = e.params.grabCursor,
    g = c.grabCursor,
    _ = r.enabled;
  d && !p
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !d &&
      p &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((c.grid.fill && c.grid.fill === "column") ||
        (!c.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    m && !g ? e.unsetGrabCursor() : !m && g && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((w) => {
      if (typeof c[w] > "u") return;
      const P = r[w] && r[w].enabled,
        j = c[w] && c[w].enabled;
      P && !j && e[w].disable(), !P && j && e[w].enable();
    });
  const b = c.direction && c.direction !== r.direction,
    T = r.loop && (c.slidesPerView !== r.slidesPerView || b),
    O = r.loop;
  b && n && e.changeDirection(), xn(e.params, c);
  const y = e.params.enabled,
    S = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    _ && !y ? e.disable() : !_ && y && e.enable(),
    (e.currentBreakpoint = a),
    e.emit("_beforeBreakpoint", c),
    n &&
      (T
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !O && S
        ? (e.loopCreate(t), e.updateSlides())
        : O && !S && e.loopDestroy()),
    e.emit("breakpoint", c);
}
function Az(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = Nn(),
    s = t === "window" ? i.innerHeight : n.clientHeight,
    a = Object.keys(e).map((u) => {
      if (typeof u == "string" && u.indexOf("@") === 0) {
        const c = parseFloat(u.substr(1));
        return { value: s * c, point: u };
      }
      return { value: u, point: u };
    });
  a.sort((u, c) => parseInt(u.value, 10) - parseInt(c.value, 10));
  for (let u = 0; u < a.length; u += 1) {
    const { point: c, value: d } = a[u];
    t === "window"
      ? i.matchMedia(`(min-width: ${d}px)`).matches && (r = c)
      : d <= n.clientWidth && (r = c);
  }
  return r || "max";
}
var Iz = { setBreakpoint: Mz, getBreakpoint: Az };
function zz(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function jz() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: s } = e,
    a = zz(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...a), i.classList.add(...t), e.emitContainerClasses();
}
function Dz() {
  const e = this,
    { el: t, classNames: n } = e;
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...n), e.emitContainerClasses());
}
var Fz = { addClasses: jz, removeClasses: Dz };
function Bz() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > s;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var Uz = { checkOverflow: Bz },
  Uh = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function $z(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      s = r[i];
    if (typeof s != "object" || s === null) {
      xn(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in s))
    ) {
      xn(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      xn(t, r);
  };
}
const wp = {
    eventsEmitter: FI,
    update: QI,
    translate: nz,
    transition: sz,
    slide: hz,
    loop: yz,
    grabCursor: Sz,
    events: kz,
    breakpoints: Iz,
    checkOverflow: Uz,
    classes: Fz,
  },
  xp = {};
let fg = class Br {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = xn({}, n)),
      t && !n.el && (n.el = t);
    const a = Io();
    if (
      n.el &&
      typeof n.el == "string" &&
      a.querySelectorAll(n.el).length > 1
    ) {
      const p = [];
      return (
        a.querySelectorAll(n.el).forEach((m) => {
          const g = xn({}, n, { el: m });
          p.push(new Br(g));
        }),
        p
      );
    }
    const u = this;
    (u.__swiper__ = !0),
      (u.support = US()),
      (u.device = $S({ userAgent: n.userAgent })),
      (u.browser = zI()),
      (u.eventsListeners = {}),
      (u.eventsAnyListeners = []),
      (u.modules = [...u.__modules__]),
      n.modules && Array.isArray(n.modules) && u.modules.push(...n.modules);
    const c = {};
    u.modules.forEach((p) => {
      p({
        params: n,
        swiper: u,
        extendParams: $z(n, c),
        on: u.on.bind(u),
        once: u.once.bind(u),
        off: u.off.bind(u),
        emit: u.emit.bind(u),
      });
    });
    const d = xn({}, Uh, c);
    return (
      (u.params = xn({}, d, xp, n)),
      (u.originalParams = xn({}, u.params)),
      (u.passedParams = xn({}, n)),
      u.params &&
        u.params.on &&
        Object.keys(u.params.on).forEach((p) => {
          u.on(p, u.params.on[p]);
        }),
      u.params && u.params.onAny && u.onAny(u.params.onAny),
      Object.assign(u, {
        enabled: u.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return u.params.direction === "horizontal";
        },
        isVertical() {
          return u.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: u.params.allowSlideNext,
        allowSlidePrev: u.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: u.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: u.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      u.emit("_swiper"),
      u.params.init && u.init(),
      u
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = _r(n, `.${r.slideClass}, swiper-slide`),
      s = F1(i[0]);
    return F1(t) - s;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = _r(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      a = (r.maxTranslate() - i) * t + i;
    r.translateTo(a, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: s,
        slidesGrid: a,
        slidesSizesGrid: u,
        size: c,
        activeIndex: d,
      } = r;
    let p = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let m = s[d] ? Math.ceil(s[d].swiperSlideSize) : 0,
        g;
      for (let _ = d + 1; _ < s.length; _ += 1)
        s[_] &&
          !g &&
          ((m += Math.ceil(s[_].swiperSlideSize)), (p += 1), m > c && (g = !0));
      for (let _ = d - 1; _ >= 0; _ -= 1)
        s[_] &&
          !g &&
          ((m += s[_].swiperSlideSize), (p += 1), m > c && (g = !0));
    } else if (t === "current")
      for (let m = d + 1; m < s.length; m += 1)
        (n ? a[m] + u[m] - a[d] < c : a[m] - a[d] < c) && (p += 1);
    else for (let m = d - 1; m >= 0; m -= 1) a[d] - a[m] < c && (p += 1);
    return p;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
        a.complete && ec(t, a);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const a = t.rtlTranslate ? t.translate * -1 : t.translate,
        u = Math.min(Math.max(a, t.maxTranslate()), t.minTranslate());
      t.setTranslate(u), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let s;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const a = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        s = t.slideTo(a.length - 1, 0, !1, !0);
      } else s = t.slideTo(t.activeIndex, 0, !1, !0);
      s || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((s) => {
          t === "vertical" ? (s.style.width = "") : (s.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let a =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : _r(r, i())[0];
    return (
      !a &&
        n.params.createElements &&
        ((a = Fh("div", n.params.wrapperClass)),
        r.append(a),
        _r(r, `.${n.params.slideClass}`).forEach((u) => {
          a.append(u);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: a,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : a,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || bi(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || bi(r, "direction") === "rtl"),
        wrongRTL: bi(a, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((s) => {
        s.complete
          ? ec(n, s)
          : s.addEventListener("load", (a) => {
              ec(n, a.target);
            });
      }),
      Bh(n),
      (n.initialized = !0),
      Bh(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: s, wrapperEl: a, slides: u } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          s && typeof s != "string" && s.removeAttribute("style"),
          a && a.removeAttribute("style"),
          u &&
            u.length &&
            u.forEach((c) => {
              c.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                c.removeAttribute("style"),
                c.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((c) => {
          r.off(c);
        }),
        t !== !1 &&
          (r.el && typeof r.el != "string" && (r.el.swiper = null), CI(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    xn(xp, t);
  }
  static get extendedDefaults() {
    return xp;
  }
  static get defaults() {
    return Uh;
  }
  static installModule(t) {
    Br.prototype.__modules__ || (Br.prototype.__modules__ = []);
    const n = Br.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Br.installModule(n)), Br)
      : (Br.installModule(t), Br);
  }
};
Object.keys(wp).forEach((e) => {
  Object.keys(wp[e]).forEach((t) => {
    fg.prototype[t] = wp[e][t];
  });
});
fg.use([jI, DI]);
const VS = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function Lo(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function Ts(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Lo(t[r]) && Lo(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : Ts(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function GS(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function KS(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function qS(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function YS(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function Wz(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function Hz(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: s,
    prevEl: a,
    scrollbarEl: u,
    paginationEl: c,
  } = e;
  const d = i.filter(
      (V) => V !== "children" && V !== "direction" && V !== "wrapperClass"
    ),
    {
      params: p,
      pagination: m,
      navigation: g,
      scrollbar: _,
      virtual: b,
      thumbs: T,
    } = t;
  let O, y, S, w, P, j, N, H;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    p.thumbs &&
    !p.thumbs.swiper &&
    (O = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      p.controller &&
      !p.controller.control &&
      (y = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || c) &&
      (p.pagination || p.pagination === !1) &&
      m &&
      !m.el &&
      (S = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || u) &&
      (p.scrollbar || p.scrollbar === !1) &&
      _ &&
      !_.el &&
      (w = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || a) &&
      (r.navigation.nextEl || s) &&
      (p.navigation || p.navigation === !1) &&
      g &&
      !g.prevEl &&
      !g.nextEl &&
      (P = !0);
  const D = (V) => {
    t[V] &&
      (t[V].destroy(),
      V === "navigation"
        ? (t.isElement && (t[V].prevEl.remove(), t[V].nextEl.remove()),
          (p[V].prevEl = void 0),
          (p[V].nextEl = void 0),
          (t[V].prevEl = void 0),
          (t[V].nextEl = void 0))
        : (t.isElement && t[V].el.remove(),
          (p[V].el = void 0),
          (t[V].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (p.loop && !r.loop ? (j = !0) : !p.loop && r.loop ? (N = !0) : (H = !0)),
    d.forEach((V) => {
      if (Lo(p[V]) && Lo(r[V]))
        Object.assign(p[V], r[V]),
          (V === "navigation" || V === "pagination" || V === "scrollbar") &&
            "enabled" in r[V] &&
            !r[V].enabled &&
            D(V);
      else {
        const U = r[V];
        (U === !0 || U === !1) &&
        (V === "navigation" || V === "pagination" || V === "scrollbar")
          ? U === !1 && D(V)
          : (p[V] = r[V]);
      }
    }),
    d.includes("controller") &&
      !y &&
      t.controller &&
      t.controller.control &&
      p.controller &&
      p.controller.control &&
      (t.controller.control = p.controller.control),
    i.includes("children") && n && b && p.virtual.enabled
      ? ((b.slides = n), b.update(!0))
      : i.includes("virtual") &&
        b &&
        p.virtual.enabled &&
        (n && (b.slides = n), b.update(!0)),
    i.includes("children") && n && p.loop && (H = !0),
    O && T.init() && T.update(!0),
    y && (t.controller.control = p.controller.control),
    S &&
      (t.isElement &&
        (!c || typeof c == "string") &&
        ((c = document.createElement("div")),
        c.classList.add("swiper-pagination"),
        c.part.add("pagination"),
        t.el.appendChild(c)),
      c && (p.pagination.el = c),
      m.init(),
      m.render(),
      m.update()),
    w &&
      (t.isElement &&
        (!u || typeof u == "string") &&
        ((u = document.createElement("div")),
        u.classList.add("swiper-scrollbar"),
        u.part.add("scrollbar"),
        t.el.appendChild(u)),
      u && (p.scrollbar.el = u),
      _.init(),
      _.updateSize(),
      _.setTranslate()),
    P &&
      (t.isElement &&
        ((!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-next"),
          (s.innerHTML = t.hostEl.constructor.nextButtonSvg),
          s.part.add("button-next"),
          t.el.appendChild(s)),
        (!a || typeof a == "string") &&
          ((a = document.createElement("div")),
          a.classList.add("swiper-button-prev"),
          (a.innerHTML = t.hostEl.constructor.prevButtonSvg),
          a.part.add("button-prev"),
          t.el.appendChild(a))),
      s && (p.navigation.nextEl = s),
      a && (p.navigation.prevEl = a),
      g.init(),
      g.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (j || H) && t.loopDestroy(),
    (N || H) && t.loopCreate(),
    t.update();
}
function Vz(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  Ts(n, Uh), (n._emitClasses = !0), (n.init = !1);
  const s = {},
    a = VS.map((c) => c.replace(/_/, "")),
    u = Object.assign({}, e);
  return (
    Object.keys(u).forEach((c) => {
      typeof e[c] > "u" ||
        (a.indexOf(c) >= 0
          ? Lo(e[c])
            ? ((n[c] = {}), (i[c] = {}), Ts(n[c], e[c]), Ts(i[c], e[c]))
            : ((n[c] = e[c]), (i[c] = e[c]))
          : c.search(/on[A-Z]/) === 0 && typeof e[c] == "function"
          ? t
            ? (r[`${c[2].toLowerCase()}${c.substr(3)}`] = e[c])
            : (n.on[`${c[2].toLowerCase()}${c.substr(3)}`] = e[c])
          : (s[c] = e[c]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((c) => {
      n[c] === !0 && (n[c] = {}), n[c] === !1 && delete n[c];
    }),
    { params: n, passedParams: i, rest: s, events: r }
  );
}
function Gz(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: s,
    scrollbarEl: a,
    swiper: u,
  } = e;
  GS(t) &&
    r &&
    i &&
    ((u.params.navigation.nextEl = r),
    (u.originalParams.navigation.nextEl = r),
    (u.params.navigation.prevEl = i),
    (u.originalParams.navigation.prevEl = i)),
    KS(t) &&
      s &&
      ((u.params.pagination.el = s), (u.originalParams.pagination.el = s)),
    qS(t) &&
      a &&
      ((u.params.scrollbar.el = a), (u.originalParams.scrollbar.el = a)),
    u.init(n);
}
function Kz(e, t, n, r, i) {
  const s = [];
  if (!t) return s;
  const a = (c) => {
    s.indexOf(c) < 0 && s.push(c);
  };
  if (n && r) {
    const c = r.map(i),
      d = n.map(i);
    c.join("") !== d.join("") && a("children"),
      r.length !== n.length && a("children");
  }
  return (
    VS.filter((c) => c[0] === "_")
      .map((c) => c.replace(/_/, ""))
      .forEach((c) => {
        if (c in e && c in t)
          if (Lo(e[c]) && Lo(t[c])) {
            const d = Object.keys(e[c]),
              p = Object.keys(t[c]);
            d.length !== p.length
              ? a(c)
              : (d.forEach((m) => {
                  e[c][m] !== t[c][m] && a(c);
                }),
                p.forEach((m) => {
                  e[c][m] !== t[c][m] && a(c);
                }));
          } else e[c] !== t[c] && a(c);
      }),
    s
  );
}
const qz = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function Bc() {
  return (
    (Bc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bc.apply(this, arguments)
  );
}
function QS(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function XS(e) {
  const t = [];
  return (
    He.Children.toArray(e).forEach((n) => {
      QS(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          XS(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function Yz(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    He.Children.toArray(e).forEach((r) => {
      if (QS(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = XS(r.props.children);
        i.length > 0 ? i.forEach((s) => t.push(s)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function Qz(e, t, n) {
  if (!n) return null;
  const r = (p) => {
      let m = p;
      return (
        p < 0 ? (m = t.length + p) : m >= t.length && (m = m - t.length), m
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: s, to: a } = n,
    u = e.params.loop ? -t.length : 0,
    c = e.params.loop ? t.length * 2 : t.length,
    d = [];
  for (let p = u; p < c; p += 1) p >= s && p <= a && d.push(t[r(p)]);
  return d.map((p, m) =>
    He.cloneElement(p, {
      swiper: e,
      style: i,
      key: p.props.virtualIndex || p.key || `slide-${m}`,
    })
  );
}
function $l(e, t) {
  return typeof window > "u" ? L.useEffect(e, t) : L.useLayoutEffect(e, t);
}
const V1 = L.createContext(null),
  Xz = L.createContext(null),
  $h = L.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: s,
        onSwiper: a,
        ...u
      } = e === void 0 ? {} : e,
      c = !1;
    const [d, p] = L.useState("swiper"),
      [m, g] = L.useState(null),
      [_, b] = L.useState(!1),
      T = L.useRef(!1),
      O = L.useRef(null),
      y = L.useRef(null),
      S = L.useRef(null),
      w = L.useRef(null),
      P = L.useRef(null),
      j = L.useRef(null),
      N = L.useRef(null),
      H = L.useRef(null),
      { params: D, passedParams: V, rest: U, events: J } = Vz(u),
      { slides: Q, slots: re } = Yz(s),
      ae = () => {
        b(!_);
      };
    Object.assign(D.on, {
      _containerClasses(ne, le) {
        p(le);
      },
    });
    const Ae = () => {
      Object.assign(D.on, J), (c = !0);
      const ne = { ...D };
      if (
        (delete ne.wrapperClass,
        (y.current = new fg(ne)),
        y.current.virtual && y.current.params.virtual.enabled)
      ) {
        y.current.virtual.slides = Q;
        const le = {
          cache: !1,
          slides: Q,
          renderExternal: g,
          renderExternalUpdate: !1,
        };
        Ts(y.current.params.virtual, le),
          Ts(y.current.originalParams.virtual, le);
      }
    };
    O.current || Ae(), y.current && y.current.on("_beforeBreakpoint", ae);
    const Ge = () => {
        c ||
          !J ||
          !y.current ||
          Object.keys(J).forEach((ne) => {
            y.current.on(ne, J[ne]);
          });
      },
      Pe = () => {
        !J ||
          !y.current ||
          Object.keys(J).forEach((ne) => {
            y.current.off(ne, J[ne]);
          });
      };
    L.useEffect(() => () => {
      y.current && y.current.off("_beforeBreakpoint", ae);
    }),
      L.useEffect(() => {
        !T.current &&
          y.current &&
          (y.current.emitSlidesClasses(), (T.current = !0));
      }),
      $l(() => {
        if ((t && (t.current = O.current), !!O.current))
          return (
            y.current.destroyed && Ae(),
            Gz(
              {
                el: O.current,
                nextEl: P.current,
                prevEl: j.current,
                paginationEl: N.current,
                scrollbarEl: H.current,
                swiper: y.current,
              },
              D
            ),
            a && !y.current.destroyed && a(y.current),
            () => {
              y.current && !y.current.destroyed && y.current.destroy(!0, !1);
            }
          );
      }, []),
      $l(() => {
        Ge();
        const ne = Kz(V, S.current, Q, w.current, (le) => le.key);
        return (
          (S.current = V),
          (w.current = Q),
          ne.length &&
            y.current &&
            !y.current.destroyed &&
            Hz({
              swiper: y.current,
              slides: Q,
              passedParams: V,
              changedParams: ne,
              nextEl: P.current,
              prevEl: j.current,
              scrollbarEl: H.current,
              paginationEl: N.current,
            }),
          () => {
            Pe();
          }
        );
      }),
      $l(() => {
        qz(y.current);
      }, [m]);
    function Z() {
      return D.virtual
        ? Qz(y.current, Q, m)
        : Q.map((ne, le) =>
            He.cloneElement(ne, { swiper: y.current, swiperSlideIndex: le })
          );
    }
    return He.createElement(
      r,
      Bc({ ref: O, className: YS(`${d}${n ? ` ${n}` : ""}`) }, U),
      He.createElement(
        Xz.Provider,
        { value: y.current },
        re["container-start"],
        He.createElement(
          i,
          { className: Wz(D.wrapperClass) },
          re["wrapper-start"],
          Z(),
          re["wrapper-end"]
        ),
        GS(D) &&
          He.createElement(
            He.Fragment,
            null,
            He.createElement("div", {
              ref: j,
              className: "swiper-button-prev",
            }),
            He.createElement("div", { ref: P, className: "swiper-button-next" })
          ),
        qS(D) &&
          He.createElement("div", { ref: H, className: "swiper-scrollbar" }),
        KS(D) &&
          He.createElement("div", { ref: N, className: "swiper-pagination" }),
        re["container-end"]
      )
    );
  });
$h.displayName = "Swiper";
const Wh = L.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: s,
    zoom: a,
    lazy: u,
    virtualIndex: c,
    swiperSlideIndex: d,
    ...p
  } = e === void 0 ? {} : e;
  const m = L.useRef(null),
    [g, _] = L.useState("swiper-slide"),
    [b, T] = L.useState(!1);
  function O(P, j, N) {
    j === m.current && _(N);
  }
  $l(() => {
    if (
      (typeof d < "u" && (m.current.swiperSlideIndex = d),
      t && (t.current = m.current),
      !(!m.current || !s))
    ) {
      if (s.destroyed) {
        g !== "swiper-slide" && _("swiper-slide");
        return;
      }
      return (
        s.on("_slideClass", O),
        () => {
          s && s.off("_slideClass", O);
        }
      );
    }
  }),
    $l(() => {
      s && m.current && !s.destroyed && _(s.getSlideClasses(m.current));
    }, [s]);
  const y = {
      isActive: g.indexOf("swiper-slide-active") >= 0,
      isVisible: g.indexOf("swiper-slide-visible") >= 0,
      isPrev: g.indexOf("swiper-slide-prev") >= 0,
      isNext: g.indexOf("swiper-slide-next") >= 0,
    },
    S = () => (typeof r == "function" ? r(y) : r),
    w = () => {
      T(!0);
    };
  return He.createElement(
    n,
    Bc(
      {
        ref: m,
        className: YS(`${g}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": c,
        onLoad: w,
      },
      p
    ),
    a &&
      He.createElement(
        V1.Provider,
        { value: y },
        He.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof a == "number" ? a : void 0,
          },
          S(),
          u &&
            !b &&
            He.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !a &&
      He.createElement(
        V1.Provider,
        { value: y },
        S(),
        u &&
          !b &&
          He.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
Wh.displayName = "SwiperSlide";
function G1(e) {
  let { swiper: t, extendParams: n, on: r } = e;
  n({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs",
    },
  });
  let i = !1,
    s = !1;
  t.thumbs = { swiper: null };
  function a() {
    const d = t.thumbs.swiper;
    if (!d || d.destroyed) return;
    const p = d.clickedIndex,
      m = d.clickedSlide;
    if (
      (m && m.classList.contains(t.params.thumbs.slideThumbActiveClass)) ||
      typeof p > "u" ||
      p === null
    )
      return;
    let g;
    d.params.loop
      ? (g = parseInt(
          d.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        ))
      : (g = p),
      t.params.loop ? t.slideToLoop(g) : t.slideTo(g);
  }
  function u() {
    const { thumbs: d } = t.params;
    if (i) return !1;
    i = !0;
    const p = t.constructor;
    if (d.swiper instanceof p)
      (t.thumbs.swiper = d.swiper),
        Object.assign(t.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        Object.assign(t.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        t.thumbs.swiper.update();
    else if (kl(d.swiper)) {
      const m = Object.assign({}, d.swiper);
      Object.assign(m, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
        (t.thumbs.swiper = new p(m)),
        (s = !0);
    }
    return (
      t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),
      t.thumbs.swiper.on("tap", a),
      !0
    );
  }
  function c(d) {
    const p = t.thumbs.swiper;
    if (!p || p.destroyed) return;
    const m =
      p.params.slidesPerView === "auto"
        ? p.slidesPerViewDynamic()
        : p.params.slidesPerView;
    let g = 1;
    const _ = t.params.thumbs.slideThumbActiveClass;
    if (
      (t.params.slidesPerView > 1 &&
        !t.params.centeredSlides &&
        (g = t.params.slidesPerView),
      t.params.thumbs.multipleActiveThumbs || (g = 1),
      (g = Math.floor(g)),
      p.slides.forEach((O) => O.classList.remove(_)),
      p.params.loop || (p.params.virtual && p.params.virtual.enabled))
    )
      for (let O = 0; O < g; O += 1)
        _r(
          p.slidesEl,
          `[data-swiper-slide-index="${t.realIndex + O}"]`
        ).forEach((y) => {
          y.classList.add(_);
        });
    else
      for (let O = 0; O < g; O += 1)
        p.slides[t.realIndex + O] && p.slides[t.realIndex + O].classList.add(_);
    const b = t.params.thumbs.autoScrollOffset,
      T = b && !p.params.loop;
    if (t.realIndex !== p.realIndex || T) {
      const O = p.activeIndex;
      let y, S;
      if (p.params.loop) {
        const w = p.slides.filter(
          (P) => P.getAttribute("data-swiper-slide-index") === `${t.realIndex}`
        )[0];
        (y = p.slides.indexOf(w)),
          (S = t.activeIndex > t.previousIndex ? "next" : "prev");
      } else (y = t.realIndex), (S = y > t.previousIndex ? "next" : "prev");
      T && (y += S === "next" ? b : -1 * b),
        p.visibleSlidesIndexes &&
          p.visibleSlidesIndexes.indexOf(y) < 0 &&
          (p.params.centeredSlides
            ? y > O
              ? (y = y - Math.floor(m / 2) + 1)
              : (y = y + Math.floor(m / 2) - 1)
            : y > O && p.params.slidesPerGroup,
          p.slideTo(y, d ? 0 : void 0));
    }
  }
  r("beforeInit", () => {
    const { thumbs: d } = t.params;
    if (!(!d || !d.swiper))
      if (typeof d.swiper == "string" || d.swiper instanceof HTMLElement) {
        const p = Io(),
          m = () => {
            const _ =
              typeof d.swiper == "string"
                ? p.querySelector(d.swiper)
                : d.swiper;
            if (_ && _.swiper) (d.swiper = _.swiper), u(), c(!0);
            else if (_) {
              const b = `${t.params.eventsPrefix}init`,
                T = (O) => {
                  (d.swiper = O.detail[0]),
                    _.removeEventListener(b, T),
                    u(),
                    c(!0),
                    d.swiper.update(),
                    t.update();
                };
              _.addEventListener(b, T);
            }
            return _;
          },
          g = () => {
            if (t.destroyed) return;
            m() || requestAnimationFrame(g);
          };
        requestAnimationFrame(g);
      } else u(), c(!0);
  }),
    r("slideChange update resize observerUpdate", () => {
      c();
    }),
    r("setTransition", (d, p) => {
      const m = t.thumbs.swiper;
      !m || m.destroyed || m.setTransition(p);
    }),
    r("beforeDestroy", () => {
      const d = t.thumbs.swiper;
      !d || d.destroyed || (s && d.destroy());
    }),
    Object.assign(t.thumbs, { init: u, update: c });
}
function Jz() {
  const [e, t] = L.useState([]),
    [n, r] = L.useState(null);
  L.useEffect(() => {
    (async () => {
      const p = (await ut.get("https://delizioso-api.vercel.app/customers"))
        .data;
      t(p);
    })();
  }, [e]);
  const [i, s] = L.useState(["60%", "70%", "80%", "85%", "80%", "70%", "60%"]),
    [a, u] = L.useState(32);
  return (
    L.useEffect(() => {
      const c = () => {
        window.innerWidth < 992
          ? (s(["70%", "80%", "95%", "80%", "70%"]), u(50))
          : window.innerWidth > 992 &&
            (s(["60%", "70%", "80%", "85%", "80%", "70%", "60%"]), u(32));
      };
      return (
        c(),
        window.addEventListener("resize", c),
        () => window.addEventListener("resize", c)
      );
    }, []),
    x.jsx("section", {
      className: "lg:py-42 py-24 bg-gray-100 customers-slider",
      children: x.jsxs("div", {
        className: "container grid grid-cols-1 md:space-y-24 space-y-10",
        children: [
          x.jsx("span", {
            className:
              "md:text-[80px] text-5xl text-center font-bold font-tinos capitalize",
            children: "our customers say",
          }),
          x.jsxs("div", {
            className:
              "relative w-full lg:aspect-square p-5 flex flex-col space-y-10 items-center overflow-hidden",
            children: [
              x.jsx($h, {
                spaceBetween: 10,
                centeredSlides: !0,
                slidesPerView: 1,
                loop: !0,
                thumbs: n ? { swiper: n } : void 0,
                modules: [G1],
                className: "mySwiper2 w-full flex-grow lg:pb-48",
                children: e.map((c) =>
                  x.jsx(
                    Wh,
                    {
                      className: "flex justify-center",
                      children: x.jsxs("div", {
                        className:
                          "flex flex-col space-y-5 items-center capitalize",
                        children: [
                          x.jsx("img", {
                            src: c.image,
                            alt: c.name,
                            className: "size-64 mb-7",
                          }),
                          x.jsx("span", {
                            className: "lg:text-4xl text-3xl font-semibold",
                            children: c.name,
                          }),
                          x.jsx("span", {
                            className: "lg:text-2xl text-xl text-black/70",
                            children: c.title,
                          }),
                          x.jsxs("div", {
                            className: "max-w-xl",
                            children: [
                              x.jsx("span", {
                                className:
                                  "font-tinos lg:text-8xl text-5xl text-left",
                                children: "“",
                              }),
                              x.jsx("p", {
                                className:
                                  "text-center lg:text-2xl text-xl leading-10 text-brown",
                                children: c.comment,
                              }),
                              x.jsx("span", {
                                className:
                                  "font-tinos lg:text-8xl text-5xl text-right transform rotate-180 float-end",
                                children: "“",
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    c.id
                  )
                ),
              }),
              x.jsx($h, {
                onSwiper: r,
                spaceBetween: 10,
                slidesPerView: 7,
                breakpoints: {
                  0: { slidesPerView: 5 },
                  992: { slidesPerView: 7 },
                },
                watchSlidesProgress: !0,
                modules: [G1],
                className: "mySwiper w-full !pt-36 !pb-10  md:!px-6 !px-2",
                children: e.map((c, d) =>
                  x.jsx(
                    Wh,
                    {
                      className: " flex items-center justify-center",
                      style: {
                        transform: `translateY(-${Math.abs(100 - d * a)}%)`,
                      },
                      children: x.jsx("div", {
                        className:
                          "w-full thumbnail-slide relative flex items-center justify-center aspect-square",
                        children: x.jsx("img", {
                          src: c.image,
                          alt: c.name,
                          className: " object-cover rounded-full ",
                          style: { width: i[d] },
                        }),
                      }),
                    },
                    c.id
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
const Zz = "/assets/italian-pasta-CEfGriPF.png",
  K1 = "/assets/Lettuce-ltVI0xej.png";
function e5() {
  return x.jsx("section", {
    className: "lg:py-20 py-5 overflow-hidden",
    children: x.jsxs("div", {
      className:
        "grid container lg:grid-cols-2 items-center lg:gap-20 space-y-32 lg:space-y-0 justify-center",
      children: [
        x.jsxs("div", {
          className: "space-y-5 capitalize text-xl",
          children: [
            x.jsx("span", {
              className:
                " bg-orange-100 text-primaryOrange  py-2 px-8 rounded-full",
              children: "resturant",
            }),
            x.jsxs("h2", {
              className:
                "text-[80px] font-semibold text-balance leading-[90px]",
              children: ["italian ", x.jsx("br", {}), " cuisine"],
            }),
            x.jsx("p", {
              className: " text-brown/70 leading-10 lg:text-xl tracking-wider",
              children:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.",
            }),
            x.jsxs("div", {
              className: "flex items-center gap-5",
              children: [
                x.jsx("button", {
                  className:
                    "btn-primary mt-11 bg-primaryOrange md:py-5 md:px-20 font-normal text-nowrap",
                  children: "order now",
                }),
                x.jsx("button", {
                  className: "btn-primary mt-11 md:py-5 md:px-20 font-normal",
                  children: "reservation",
                }),
              ],
            }),
          ],
        }),
        x.jsxs("div", {
          className:
            "relative  max-w-[350px] sm:max-w-[500px] m-auto lg:max-w-full",
          children: [
            x.jsx("img", {
              src: Zz,
              alt: "",
              className: "relative z-10  aspect-square",
            }),
            x.jsx("img", {
              alt: "",
              src: K1,
              className:
                "absolute -top-14 rotate-[200deg] -left-9 sm:-left-16 sm:-top-18 xxl:-left-20 xl:-left-16 xxl:-top-18 xl:-top-14  z-0 size-52 sm:size-64 lg:size-max",
            }),
            x.jsx("img", {
              src: K1,
              alt: "",
              className:
                "absolute bottom-4 -right-4 sm:-right-11 sm:bottom-10 lg:-right-4 z-0  size-52 sm:size-64 lg:size-max",
            }),
          ],
        }),
      ],
    }),
  });
}
function t5({ food: e, index: t }) {
  const n = Um(),
    r = Bm((c) => c.cart);
  function i(c) {
    n(N2(c));
  }
  function s(c) {
    n(L2(c)), console.log(u.cartQuantity);
  }
  function a(c) {
    n(O2(c));
  }
  const u = r.cartItems.find((c) => c.id === e.id);
  return x.jsxs("div", {
    className:
      "foodCard group bg-gray-50 p-4 active:bg-primaryOrange active:text-white md:hover:text-black md:hover:bg-gray-50 md:hover:shadow-sm duration-200 md:p-8 rounded-[40px] md:rounded-[80px] text-center sm:space-y-6 space-y-3",
    children: [
      x.jsx("img", {
        src: e.img,
        alt: e.title,
        className:
          "m-auto size-84 aspect-square md:group-hover:scale-110 md:group-hover:rotate-12 drop-shadow-lg duration-700",
      }),
      x.jsx("span", {
        className: "lg:text-4xl md:text-3xl text-xl font-semibold line-clamp-1",
        children: e.title,
      }),
      x.jsx("p", {
        className: "leading-8 line-clamp-2 lg:line-clamp-3",
        children: e.desc,
      }),
      x.jsxs("div", {
        className: "flex items-center justify-around ",
        children: [
          x.jsxs("span", {
            className:
              "md:text-2xl font-semibold text-primaryOrange md:text-black  group-active:text-white",
            children: ["$", e.price],
          }),
          x.jsx("div", {
            className: "sm:w-36 flex items-center justify-around",
            children: u
              ? x.jsxs("div", {
                  className: "flex sm:gap-3 gap-2 items-center justify-around",
                  children: [
                    u.cartQuantity > 1
                      ? x.jsx("button", {
                          onClick: () => s(e),
                          className:
                            "bg-primaryOrange group-active:bg-white group-active:text-primaryOrange text-white sm:text-2xl rounded-full sm:size-10 size-7 flex items-center justify-center",
                          children: "-",
                        })
                      : x.jsx("button", {
                          onClick: () => a(e),
                          className:
                            "bg-primaryOrange group-active:text-primaryOrange group-active:bg-white text-white sm:text-md text-xs  rounded-full sm:size-10 size-7 flex items-center justify-center",
                          children: x.jsx(Oh, {}),
                        }),
                    x.jsx("span", { children: u.cartQuantity }),
                    x.jsx("button", {
                      onClick: () => i(e),
                      className:
                        "bg-primaryOrange group-active:bg-white  rounded-full sm:text-2xl text-white group-active:text-primaryOrange flex items-center justify-center sm:size-10 size-7",
                      children: "+",
                    }),
                  ],
                })
              : x.jsxs("button", {
                  onClick: () => i(e),
                  className:
                    "text-white group-active:bg-white md:hover:scale-110 duration-200 bg-primaryOrange group-active:text-primaryOrange rounded-full sm:py-4 sm:w-full size-7 sm:size-auto flex items-center justify-center",
                  children: [
                    x.jsx("span", {
                      className: "hidden sm:block",
                      children: "order now",
                    }),
                    x.jsx("span", {
                      className: "block sm:hidden",
                      children: "+",
                    }),
                  ],
                }),
          }),
        ],
      }),
    ],
  });
}
var Uc = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ Uc.exports;
(function (e, t) {
  (function () {
    var n,
      r = "4.17.21",
      i = 200,
      s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      a = "Expected a function",
      u = "Invalid `variable` option passed into `_.template`",
      c = "__lodash_hash_undefined__",
      d = 500,
      p = "__lodash_placeholder__",
      m = 1,
      g = 2,
      _ = 4,
      b = 1,
      T = 2,
      O = 1,
      y = 2,
      S = 4,
      w = 8,
      P = 16,
      j = 32,
      N = 64,
      H = 128,
      D = 256,
      V = 512,
      U = 30,
      J = "...",
      Q = 800,
      re = 16,
      ae = 1,
      Ae = 2,
      Ge = 3,
      Pe = 1 / 0,
      Z = 9007199254740991,
      ne = 17976931348623157e292,
      le = NaN,
      he = 4294967295,
      Me = he - 1,
      On = he >>> 1,
      xt = [
        ["ary", H],
        ["bind", O],
        ["bindKey", y],
        ["curry", w],
        ["curryRight", P],
        ["flip", V],
        ["partial", j],
        ["partialRight", N],
        ["rearg", D],
      ],
      Tt = "[object Arguments]",
      gt = "[object Array]",
      ei = "[object AsyncFunction]",
      Tr = "[object Boolean]",
      Wi = "[object Date]",
      yf = "[object DOMException]",
      zo = "[object Error]",
      vt = "[object Function]",
      Pr = "[object GeneratorFunction]",
      Jt = "[object Map]",
      Hi = "[object Number]",
      Rr = "[object Null]",
      Qn = "[object Object]",
      Ca = "[object Promise]",
      Ta = "[object Proxy]",
      Vi = "[object RegExp]",
      cn = "[object Set]",
      Gi = "[object String]",
      jo = "[object Symbol]",
      Ki = "[object Undefined]",
      Xn = "[object WeakMap]",
      Pa = "[object WeakSet]",
      Nr = "[object ArrayBuffer]",
      $t = "[object DataView]",
      fn = "[object Float32Array]",
      Do = "[object Float64Array]",
      ti = "[object Int8Array]",
      Ws = "[object Int16Array]",
      Ln = "[object Int32Array]",
      Fo = "[object Uint8Array]",
      Bo = "[object Uint8ClampedArray]",
      Uo = "[object Uint16Array]",
      Hs = "[object Uint32Array]",
      Ra = /\b__p \+= '';/g,
      $o = /\b(__p \+=) '' \+/g,
      Na = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      Wo = /&(?:amp|lt|gt|quot|#39);/g,
      qi = /[&<>"']/g,
      Vs = RegExp(Wo.source),
      wf = RegExp(qi.source),
      Oa = /<%-([\s\S]+?)%>/g,
      xf = /<%([\s\S]+?)%>/g,
      Gs = /<%=([\s\S]+?)%>/g,
      Ks = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Ho = /^\w*$/,
      Sf =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      qs = /[\\^$.*+?()[\]{}|]/g,
      M = RegExp(qs.source),
      I = /^\s+/,
      F = /\s/,
      G = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      ie = /\{\n\/\* \[wrapped with (.+)\] \*/,
      ce = /,? & /,
      me = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      ee = /[()=,{}\[\]\/\s]/,
      we = /\\(\\)?/g,
      fe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      de = /\w*$/,
      Fe = /^[-+]0x[0-9a-f]+$/i,
      je = /^0b[01]+$/i,
      Ue = /^\[object .+?Constructor\]$/,
      ze = /^0o[0-7]+$/i,
      St = /^(?:0|[1-9]\d*)$/,
      ct = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      mr = /($^)/,
      gr = /['\n\r\u2028\u2029\\]/g,
      Jn = "\\ud800-\\udfff",
      ni = "\\u0300-\\u036f",
      ri = "\\ufe20-\\ufe2f",
      kn = "\\u20d0-\\u20ff",
      Yi = ni + ri + kn,
      Qi = "\\u2700-\\u27bf",
      Xi = "a-z\\xdf-\\xf6\\xf8-\\xff",
      Se = "\\xac\\xb1\\xd7\\xf7",
      tt = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      Wt = "\\u2000-\\u206f",
      Ke =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      Mn = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      Ys = "\\ufe0e\\ufe0f",
      La = Se + tt + Wt + Ke,
      Ef = "['’]",
      mE = "[" + Jn + "]",
      mg = "[" + La + "]",
      ka = "[" + Yi + "]",
      gg = "\\d+",
      gE = "[" + Qi + "]",
      vg = "[" + Xi + "]",
      yg = "[^" + Jn + La + gg + Qi + Xi + Mn + "]",
      _f = "\\ud83c[\\udffb-\\udfff]",
      vE = "(?:" + ka + "|" + _f + ")",
      wg = "[^" + Jn + "]",
      bf = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Cf = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      Vo = "[" + Mn + "]",
      xg = "\\u200d",
      Sg = "(?:" + vg + "|" + yg + ")",
      yE = "(?:" + Vo + "|" + yg + ")",
      Eg = "(?:" + Ef + "(?:d|ll|m|re|s|t|ve))?",
      _g = "(?:" + Ef + "(?:D|LL|M|RE|S|T|VE))?",
      bg = vE + "?",
      Cg = "[" + Ys + "]?",
      wE = "(?:" + xg + "(?:" + [wg, bf, Cf].join("|") + ")" + Cg + bg + ")*",
      xE = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      SE = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      Tg = Cg + bg + wE,
      EE = "(?:" + [gE, bf, Cf].join("|") + ")" + Tg,
      _E = "(?:" + [wg + ka + "?", ka, bf, Cf, mE].join("|") + ")",
      bE = RegExp(Ef, "g"),
      CE = RegExp(ka, "g"),
      Tf = RegExp(_f + "(?=" + _f + ")|" + _E + Tg, "g"),
      TE = RegExp(
        [
          Vo + "?" + vg + "+" + Eg + "(?=" + [mg, Vo, "$"].join("|") + ")",
          yE + "+" + _g + "(?=" + [mg, Vo + Sg, "$"].join("|") + ")",
          Vo + "?" + Sg + "+" + Eg,
          Vo + "+" + _g,
          SE,
          xE,
          gg,
          EE,
        ].join("|"),
        "g"
      ),
      PE = RegExp("[" + xg + Jn + Yi + Ys + "]"),
      RE = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      NE = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      OE = -1,
      Xe = {};
    (Xe[fn] =
      Xe[Do] =
      Xe[ti] =
      Xe[Ws] =
      Xe[Ln] =
      Xe[Fo] =
      Xe[Bo] =
      Xe[Uo] =
      Xe[Hs] =
        !0),
      (Xe[Tt] =
        Xe[gt] =
        Xe[Nr] =
        Xe[Tr] =
        Xe[$t] =
        Xe[Wi] =
        Xe[zo] =
        Xe[vt] =
        Xe[Jt] =
        Xe[Hi] =
        Xe[Qn] =
        Xe[Vi] =
        Xe[cn] =
        Xe[Gi] =
        Xe[Xn] =
          !1);
    var qe = {};
    (qe[Tt] =
      qe[gt] =
      qe[Nr] =
      qe[$t] =
      qe[Tr] =
      qe[Wi] =
      qe[fn] =
      qe[Do] =
      qe[ti] =
      qe[Ws] =
      qe[Ln] =
      qe[Jt] =
      qe[Hi] =
      qe[Qn] =
      qe[Vi] =
      qe[cn] =
      qe[Gi] =
      qe[jo] =
      qe[Fo] =
      qe[Bo] =
      qe[Uo] =
      qe[Hs] =
        !0),
      (qe[zo] = qe[vt] = qe[Xn] = !1);
    var LE = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      kE = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      ME = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      AE = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      IE = parseFloat,
      zE = parseInt,
      Pg = typeof fl == "object" && fl && fl.Object === Object && fl,
      jE = typeof self == "object" && self && self.Object === Object && self,
      Ot = Pg || jE || Function("return this")(),
      Pf = t && !t.nodeType && t,
      Ji = Pf && !0 && e && !e.nodeType && e,
      Rg = Ji && Ji.exports === Pf,
      Rf = Rg && Pg.process,
      An = (function () {
        try {
          var A = Ji && Ji.require && Ji.require("util").types;
          return A || (Rf && Rf.binding && Rf.binding("util"));
        } catch {}
      })(),
      Ng = An && An.isArrayBuffer,
      Og = An && An.isDate,
      Lg = An && An.isMap,
      kg = An && An.isRegExp,
      Mg = An && An.isSet,
      Ag = An && An.isTypedArray;
    function dn(A, W, B) {
      switch (B.length) {
        case 0:
          return A.call(W);
        case 1:
          return A.call(W, B[0]);
        case 2:
          return A.call(W, B[0], B[1]);
        case 3:
          return A.call(W, B[0], B[1], B[2]);
      }
      return A.apply(W, B);
    }
    function DE(A, W, B, oe) {
      for (var ye = -1, De = A == null ? 0 : A.length; ++ye < De; ) {
        var Et = A[ye];
        W(oe, Et, B(Et), A);
      }
      return oe;
    }
    function In(A, W) {
      for (
        var B = -1, oe = A == null ? 0 : A.length;
        ++B < oe && W(A[B], B, A) !== !1;

      );
      return A;
    }
    function FE(A, W) {
      for (var B = A == null ? 0 : A.length; B-- && W(A[B], B, A) !== !1; );
      return A;
    }
    function Ig(A, W) {
      for (var B = -1, oe = A == null ? 0 : A.length; ++B < oe; )
        if (!W(A[B], B, A)) return !1;
      return !0;
    }
    function ii(A, W) {
      for (
        var B = -1, oe = A == null ? 0 : A.length, ye = 0, De = [];
        ++B < oe;

      ) {
        var Et = A[B];
        W(Et, B, A) && (De[ye++] = Et);
      }
      return De;
    }
    function Ma(A, W) {
      var B = A == null ? 0 : A.length;
      return !!B && Go(A, W, 0) > -1;
    }
    function Nf(A, W, B) {
      for (var oe = -1, ye = A == null ? 0 : A.length; ++oe < ye; )
        if (B(W, A[oe])) return !0;
      return !1;
    }
    function nt(A, W) {
      for (
        var B = -1, oe = A == null ? 0 : A.length, ye = Array(oe);
        ++B < oe;

      )
        ye[B] = W(A[B], B, A);
      return ye;
    }
    function oi(A, W) {
      for (var B = -1, oe = W.length, ye = A.length; ++B < oe; )
        A[ye + B] = W[B];
      return A;
    }
    function Of(A, W, B, oe) {
      var ye = -1,
        De = A == null ? 0 : A.length;
      for (oe && De && (B = A[++ye]); ++ye < De; ) B = W(B, A[ye], ye, A);
      return B;
    }
    function BE(A, W, B, oe) {
      var ye = A == null ? 0 : A.length;
      for (oe && ye && (B = A[--ye]); ye--; ) B = W(B, A[ye], ye, A);
      return B;
    }
    function Lf(A, W) {
      for (var B = -1, oe = A == null ? 0 : A.length; ++B < oe; )
        if (W(A[B], B, A)) return !0;
      return !1;
    }
    var UE = kf("length");
    function $E(A) {
      return A.split("");
    }
    function WE(A) {
      return A.match(me) || [];
    }
    function zg(A, W, B) {
      var oe;
      return (
        B(A, function (ye, De, Et) {
          if (W(ye, De, Et)) return (oe = De), !1;
        }),
        oe
      );
    }
    function Aa(A, W, B, oe) {
      for (var ye = A.length, De = B + (oe ? 1 : -1); oe ? De-- : ++De < ye; )
        if (W(A[De], De, A)) return De;
      return -1;
    }
    function Go(A, W, B) {
      return W === W ? t_(A, W, B) : Aa(A, jg, B);
    }
    function HE(A, W, B, oe) {
      for (var ye = B - 1, De = A.length; ++ye < De; )
        if (oe(A[ye], W)) return ye;
      return -1;
    }
    function jg(A) {
      return A !== A;
    }
    function Dg(A, W) {
      var B = A == null ? 0 : A.length;
      return B ? Af(A, W) / B : le;
    }
    function kf(A) {
      return function (W) {
        return W == null ? n : W[A];
      };
    }
    function Mf(A) {
      return function (W) {
        return A == null ? n : A[W];
      };
    }
    function Fg(A, W, B, oe, ye) {
      return (
        ye(A, function (De, Et, Ve) {
          B = oe ? ((oe = !1), De) : W(B, De, Et, Ve);
        }),
        B
      );
    }
    function VE(A, W) {
      var B = A.length;
      for (A.sort(W); B--; ) A[B] = A[B].value;
      return A;
    }
    function Af(A, W) {
      for (var B, oe = -1, ye = A.length; ++oe < ye; ) {
        var De = W(A[oe]);
        De !== n && (B = B === n ? De : B + De);
      }
      return B;
    }
    function If(A, W) {
      for (var B = -1, oe = Array(A); ++B < A; ) oe[B] = W(B);
      return oe;
    }
    function GE(A, W) {
      return nt(W, function (B) {
        return [B, A[B]];
      });
    }
    function Bg(A) {
      return A && A.slice(0, Hg(A) + 1).replace(I, "");
    }
    function pn(A) {
      return function (W) {
        return A(W);
      };
    }
    function zf(A, W) {
      return nt(W, function (B) {
        return A[B];
      });
    }
    function Qs(A, W) {
      return A.has(W);
    }
    function Ug(A, W) {
      for (var B = -1, oe = A.length; ++B < oe && Go(W, A[B], 0) > -1; );
      return B;
    }
    function $g(A, W) {
      for (var B = A.length; B-- && Go(W, A[B], 0) > -1; );
      return B;
    }
    function KE(A, W) {
      for (var B = A.length, oe = 0; B--; ) A[B] === W && ++oe;
      return oe;
    }
    var qE = Mf(LE),
      YE = Mf(kE);
    function QE(A) {
      return "\\" + AE[A];
    }
    function XE(A, W) {
      return A == null ? n : A[W];
    }
    function Ko(A) {
      return PE.test(A);
    }
    function JE(A) {
      return RE.test(A);
    }
    function ZE(A) {
      for (var W, B = []; !(W = A.next()).done; ) B.push(W.value);
      return B;
    }
    function jf(A) {
      var W = -1,
        B = Array(A.size);
      return (
        A.forEach(function (oe, ye) {
          B[++W] = [ye, oe];
        }),
        B
      );
    }
    function Wg(A, W) {
      return function (B) {
        return A(W(B));
      };
    }
    function si(A, W) {
      for (var B = -1, oe = A.length, ye = 0, De = []; ++B < oe; ) {
        var Et = A[B];
        (Et === W || Et === p) && ((A[B] = p), (De[ye++] = B));
      }
      return De;
    }
    function Ia(A) {
      var W = -1,
        B = Array(A.size);
      return (
        A.forEach(function (oe) {
          B[++W] = oe;
        }),
        B
      );
    }
    function e_(A) {
      var W = -1,
        B = Array(A.size);
      return (
        A.forEach(function (oe) {
          B[++W] = [oe, oe];
        }),
        B
      );
    }
    function t_(A, W, B) {
      for (var oe = B - 1, ye = A.length; ++oe < ye; )
        if (A[oe] === W) return oe;
      return -1;
    }
    function n_(A, W, B) {
      for (var oe = B + 1; oe--; ) if (A[oe] === W) return oe;
      return oe;
    }
    function qo(A) {
      return Ko(A) ? i_(A) : UE(A);
    }
    function Zn(A) {
      return Ko(A) ? o_(A) : $E(A);
    }
    function Hg(A) {
      for (var W = A.length; W-- && F.test(A.charAt(W)); );
      return W;
    }
    var r_ = Mf(ME);
    function i_(A) {
      for (var W = (Tf.lastIndex = 0); Tf.test(A); ) ++W;
      return W;
    }
    function o_(A) {
      return A.match(Tf) || [];
    }
    function s_(A) {
      return A.match(TE) || [];
    }
    var l_ = function A(W) {
        W = W == null ? Ot : Yo.defaults(Ot.Object(), W, Yo.pick(Ot, NE));
        var B = W.Array,
          oe = W.Date,
          ye = W.Error,
          De = W.Function,
          Et = W.Math,
          Ve = W.Object,
          Df = W.RegExp,
          a_ = W.String,
          zn = W.TypeError,
          za = B.prototype,
          u_ = De.prototype,
          Qo = Ve.prototype,
          ja = W["__core-js_shared__"],
          Da = u_.toString,
          $e = Qo.hasOwnProperty,
          c_ = 0,
          Vg = (function () {
            var o = /[^.]+$/.exec((ja && ja.keys && ja.keys.IE_PROTO) || "");
            return o ? "Symbol(src)_1." + o : "";
          })(),
          Fa = Qo.toString,
          f_ = Da.call(Ve),
          d_ = Ot._,
          p_ = Df(
            "^" +
              Da.call($e)
                .replace(qs, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          Ba = Rg ? W.Buffer : n,
          li = W.Symbol,
          Ua = W.Uint8Array,
          Gg = Ba ? Ba.allocUnsafe : n,
          $a = Wg(Ve.getPrototypeOf, Ve),
          Kg = Ve.create,
          qg = Qo.propertyIsEnumerable,
          Wa = za.splice,
          Yg = li ? li.isConcatSpreadable : n,
          Xs = li ? li.iterator : n,
          Zi = li ? li.toStringTag : n,
          Ha = (function () {
            try {
              var o = io(Ve, "defineProperty");
              return o({}, "", {}), o;
            } catch {}
          })(),
          h_ = W.clearTimeout !== Ot.clearTimeout && W.clearTimeout,
          m_ = oe && oe.now !== Ot.Date.now && oe.now,
          g_ = W.setTimeout !== Ot.setTimeout && W.setTimeout,
          Va = Et.ceil,
          Ga = Et.floor,
          Ff = Ve.getOwnPropertySymbols,
          v_ = Ba ? Ba.isBuffer : n,
          Qg = W.isFinite,
          y_ = za.join,
          w_ = Wg(Ve.keys, Ve),
          _t = Et.max,
          zt = Et.min,
          x_ = oe.now,
          S_ = W.parseInt,
          Xg = Et.random,
          E_ = za.reverse,
          Bf = io(W, "DataView"),
          Js = io(W, "Map"),
          Uf = io(W, "Promise"),
          Xo = io(W, "Set"),
          Zs = io(W, "WeakMap"),
          el = io(Ve, "create"),
          Ka = Zs && new Zs(),
          Jo = {},
          __ = oo(Bf),
          b_ = oo(Js),
          C_ = oo(Uf),
          T_ = oo(Xo),
          P_ = oo(Zs),
          qa = li ? li.prototype : n,
          tl = qa ? qa.valueOf : n,
          Jg = qa ? qa.toString : n;
        function E(o) {
          if (ft(o) && !xe(o) && !(o instanceof Le)) {
            if (o instanceof jn) return o;
            if ($e.call(o, "__wrapped__")) return Z0(o);
          }
          return new jn(o);
        }
        var Zo = (function () {
          function o() {}
          return function (l) {
            if (!it(l)) return {};
            if (Kg) return Kg(l);
            o.prototype = l;
            var f = new o();
            return (o.prototype = n), f;
          };
        })();
        function Ya() {}
        function jn(o, l) {
          (this.__wrapped__ = o),
            (this.__actions__ = []),
            (this.__chain__ = !!l),
            (this.__index__ = 0),
            (this.__values__ = n);
        }
        (E.templateSettings = {
          escape: Oa,
          evaluate: xf,
          interpolate: Gs,
          variable: "",
          imports: { _: E },
        }),
          (E.prototype = Ya.prototype),
          (E.prototype.constructor = E),
          (jn.prototype = Zo(Ya.prototype)),
          (jn.prototype.constructor = jn);
        function Le(o) {
          (this.__wrapped__ = o),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = he),
            (this.__views__ = []);
        }
        function R_() {
          var o = new Le(this.__wrapped__);
          return (
            (o.__actions__ = Zt(this.__actions__)),
            (o.__dir__ = this.__dir__),
            (o.__filtered__ = this.__filtered__),
            (o.__iteratees__ = Zt(this.__iteratees__)),
            (o.__takeCount__ = this.__takeCount__),
            (o.__views__ = Zt(this.__views__)),
            o
          );
        }
        function N_() {
          if (this.__filtered__) {
            var o = new Le(this);
            (o.__dir__ = -1), (o.__filtered__ = !0);
          } else (o = this.clone()), (o.__dir__ *= -1);
          return o;
        }
        function O_() {
          var o = this.__wrapped__.value(),
            l = this.__dir__,
            f = xe(o),
            h = l < 0,
            v = f ? o.length : 0,
            C = $b(0, v, this.__views__),
            R = C.start,
            k = C.end,
            z = k - R,
            K = h ? k : R - 1,
            q = this.__iteratees__,
            Y = q.length,
            te = 0,
            ue = zt(z, this.__takeCount__);
          if (!f || (!h && v == z && ue == z)) return E0(o, this.__actions__);
          var ge = [];
          e: for (; z-- && te < ue; ) {
            K += l;
            for (var Ce = -1, ve = o[K]; ++Ce < Y; ) {
              var Ne = q[Ce],
                ke = Ne.iteratee,
                gn = Ne.type,
                Gt = ke(ve);
              if (gn == Ae) ve = Gt;
              else if (!Gt) {
                if (gn == ae) continue e;
                break e;
              }
            }
            ge[te++] = ve;
          }
          return ge;
        }
        (Le.prototype = Zo(Ya.prototype)), (Le.prototype.constructor = Le);
        function eo(o) {
          var l = -1,
            f = o == null ? 0 : o.length;
          for (this.clear(); ++l < f; ) {
            var h = o[l];
            this.set(h[0], h[1]);
          }
        }
        function L_() {
          (this.__data__ = el ? el(null) : {}), (this.size = 0);
        }
        function k_(o) {
          var l = this.has(o) && delete this.__data__[o];
          return (this.size -= l ? 1 : 0), l;
        }
        function M_(o) {
          var l = this.__data__;
          if (el) {
            var f = l[o];
            return f === c ? n : f;
          }
          return $e.call(l, o) ? l[o] : n;
        }
        function A_(o) {
          var l = this.__data__;
          return el ? l[o] !== n : $e.call(l, o);
        }
        function I_(o, l) {
          var f = this.__data__;
          return (
            (this.size += this.has(o) ? 0 : 1),
            (f[o] = el && l === n ? c : l),
            this
          );
        }
        (eo.prototype.clear = L_),
          (eo.prototype.delete = k_),
          (eo.prototype.get = M_),
          (eo.prototype.has = A_),
          (eo.prototype.set = I_);
        function Or(o) {
          var l = -1,
            f = o == null ? 0 : o.length;
          for (this.clear(); ++l < f; ) {
            var h = o[l];
            this.set(h[0], h[1]);
          }
        }
        function z_() {
          (this.__data__ = []), (this.size = 0);
        }
        function j_(o) {
          var l = this.__data__,
            f = Qa(l, o);
          if (f < 0) return !1;
          var h = l.length - 1;
          return f == h ? l.pop() : Wa.call(l, f, 1), --this.size, !0;
        }
        function D_(o) {
          var l = this.__data__,
            f = Qa(l, o);
          return f < 0 ? n : l[f][1];
        }
        function F_(o) {
          return Qa(this.__data__, o) > -1;
        }
        function B_(o, l) {
          var f = this.__data__,
            h = Qa(f, o);
          return h < 0 ? (++this.size, f.push([o, l])) : (f[h][1] = l), this;
        }
        (Or.prototype.clear = z_),
          (Or.prototype.delete = j_),
          (Or.prototype.get = D_),
          (Or.prototype.has = F_),
          (Or.prototype.set = B_);
        function Lr(o) {
          var l = -1,
            f = o == null ? 0 : o.length;
          for (this.clear(); ++l < f; ) {
            var h = o[l];
            this.set(h[0], h[1]);
          }
        }
        function U_() {
          (this.size = 0),
            (this.__data__ = {
              hash: new eo(),
              map: new (Js || Or)(),
              string: new eo(),
            });
        }
        function $_(o) {
          var l = au(this, o).delete(o);
          return (this.size -= l ? 1 : 0), l;
        }
        function W_(o) {
          return au(this, o).get(o);
        }
        function H_(o) {
          return au(this, o).has(o);
        }
        function V_(o, l) {
          var f = au(this, o),
            h = f.size;
          return f.set(o, l), (this.size += f.size == h ? 0 : 1), this;
        }
        (Lr.prototype.clear = U_),
          (Lr.prototype.delete = $_),
          (Lr.prototype.get = W_),
          (Lr.prototype.has = H_),
          (Lr.prototype.set = V_);
        function to(o) {
          var l = -1,
            f = o == null ? 0 : o.length;
          for (this.__data__ = new Lr(); ++l < f; ) this.add(o[l]);
        }
        function G_(o) {
          return this.__data__.set(o, c), this;
        }
        function K_(o) {
          return this.__data__.has(o);
        }
        (to.prototype.add = to.prototype.push = G_), (to.prototype.has = K_);
        function er(o) {
          var l = (this.__data__ = new Or(o));
          this.size = l.size;
        }
        function q_() {
          (this.__data__ = new Or()), (this.size = 0);
        }
        function Y_(o) {
          var l = this.__data__,
            f = l.delete(o);
          return (this.size = l.size), f;
        }
        function Q_(o) {
          return this.__data__.get(o);
        }
        function X_(o) {
          return this.__data__.has(o);
        }
        function J_(o, l) {
          var f = this.__data__;
          if (f instanceof Or) {
            var h = f.__data__;
            if (!Js || h.length < i - 1)
              return h.push([o, l]), (this.size = ++f.size), this;
            f = this.__data__ = new Lr(h);
          }
          return f.set(o, l), (this.size = f.size), this;
        }
        (er.prototype.clear = q_),
          (er.prototype.delete = Y_),
          (er.prototype.get = Q_),
          (er.prototype.has = X_),
          (er.prototype.set = J_);
        function Zg(o, l) {
          var f = xe(o),
            h = !f && so(o),
            v = !f && !h && di(o),
            C = !f && !h && !v && rs(o),
            R = f || h || v || C,
            k = R ? If(o.length, a_) : [],
            z = k.length;
          for (var K in o)
            (l || $e.call(o, K)) &&
              !(
                R &&
                (K == "length" ||
                  (v && (K == "offset" || K == "parent")) ||
                  (C &&
                    (K == "buffer" ||
                      K == "byteLength" ||
                      K == "byteOffset")) ||
                  Ir(K, z))
              ) &&
              k.push(K);
          return k;
        }
        function e0(o) {
          var l = o.length;
          return l ? o[Jf(0, l - 1)] : n;
        }
        function Z_(o, l) {
          return uu(Zt(o), no(l, 0, o.length));
        }
        function eb(o) {
          return uu(Zt(o));
        }
        function $f(o, l, f) {
          ((f !== n && !tr(o[l], f)) || (f === n && !(l in o))) && kr(o, l, f);
        }
        function nl(o, l, f) {
          var h = o[l];
          (!($e.call(o, l) && tr(h, f)) || (f === n && !(l in o))) &&
            kr(o, l, f);
        }
        function Qa(o, l) {
          for (var f = o.length; f--; ) if (tr(o[f][0], l)) return f;
          return -1;
        }
        function tb(o, l, f, h) {
          return (
            ai(o, function (v, C, R) {
              l(h, v, f(v), R);
            }),
            h
          );
        }
        function t0(o, l) {
          return o && yr(l, Pt(l), o);
        }
        function nb(o, l) {
          return o && yr(l, tn(l), o);
        }
        function kr(o, l, f) {
          l == "__proto__" && Ha
            ? Ha(o, l, {
                configurable: !0,
                enumerable: !0,
                value: f,
                writable: !0,
              })
            : (o[l] = f);
        }
        function Wf(o, l) {
          for (var f = -1, h = l.length, v = B(h), C = o == null; ++f < h; )
            v[f] = C ? n : _d(o, l[f]);
          return v;
        }
        function no(o, l, f) {
          return (
            o === o &&
              (f !== n && (o = o <= f ? o : f),
              l !== n && (o = o >= l ? o : l)),
            o
          );
        }
        function Dn(o, l, f, h, v, C) {
          var R,
            k = l & m,
            z = l & g,
            K = l & _;
          if ((f && (R = v ? f(o, h, v, C) : f(o)), R !== n)) return R;
          if (!it(o)) return o;
          var q = xe(o);
          if (q) {
            if (((R = Hb(o)), !k)) return Zt(o, R);
          } else {
            var Y = jt(o),
              te = Y == vt || Y == Pr;
            if (di(o)) return C0(o, k);
            if (Y == Qn || Y == Tt || (te && !v)) {
              if (((R = z || te ? {} : H0(o)), !k))
                return z ? Mb(o, nb(R, o)) : kb(o, t0(R, o));
            } else {
              if (!qe[Y]) return v ? o : {};
              R = Vb(o, Y, k);
            }
          }
          C || (C = new er());
          var ue = C.get(o);
          if (ue) return ue;
          C.set(o, R),
            wv(o)
              ? o.forEach(function (ve) {
                  R.add(Dn(ve, l, f, ve, o, C));
                })
              : vv(o) &&
                o.forEach(function (ve, Ne) {
                  R.set(Ne, Dn(ve, l, f, Ne, o, C));
                });
          var ge = K ? (z ? ud : ad) : z ? tn : Pt,
            Ce = q ? n : ge(o);
          return (
            In(Ce || o, function (ve, Ne) {
              Ce && ((Ne = ve), (ve = o[Ne])),
                nl(R, Ne, Dn(ve, l, f, Ne, o, C));
            }),
            R
          );
        }
        function rb(o) {
          var l = Pt(o);
          return function (f) {
            return n0(f, o, l);
          };
        }
        function n0(o, l, f) {
          var h = f.length;
          if (o == null) return !h;
          for (o = Ve(o); h--; ) {
            var v = f[h],
              C = l[v],
              R = o[v];
            if ((R === n && !(v in o)) || !C(R)) return !1;
          }
          return !0;
        }
        function r0(o, l, f) {
          if (typeof o != "function") throw new zn(a);
          return ul(function () {
            o.apply(n, f);
          }, l);
        }
        function rl(o, l, f, h) {
          var v = -1,
            C = Ma,
            R = !0,
            k = o.length,
            z = [],
            K = l.length;
          if (!k) return z;
          f && (l = nt(l, pn(f))),
            h
              ? ((C = Nf), (R = !1))
              : l.length >= i && ((C = Qs), (R = !1), (l = new to(l)));
          e: for (; ++v < k; ) {
            var q = o[v],
              Y = f == null ? q : f(q);
            if (((q = h || q !== 0 ? q : 0), R && Y === Y)) {
              for (var te = K; te--; ) if (l[te] === Y) continue e;
              z.push(q);
            } else C(l, Y, h) || z.push(q);
          }
          return z;
        }
        var ai = O0(vr),
          i0 = O0(Vf, !0);
        function ib(o, l) {
          var f = !0;
          return (
            ai(o, function (h, v, C) {
              return (f = !!l(h, v, C)), f;
            }),
            f
          );
        }
        function Xa(o, l, f) {
          for (var h = -1, v = o.length; ++h < v; ) {
            var C = o[h],
              R = l(C);
            if (R != null && (k === n ? R === R && !mn(R) : f(R, k)))
              var k = R,
                z = C;
          }
          return z;
        }
        function ob(o, l, f, h) {
          var v = o.length;
          for (
            f = _e(f),
              f < 0 && (f = -f > v ? 0 : v + f),
              h = h === n || h > v ? v : _e(h),
              h < 0 && (h += v),
              h = f > h ? 0 : Sv(h);
            f < h;

          )
            o[f++] = l;
          return o;
        }
        function o0(o, l) {
          var f = [];
          return (
            ai(o, function (h, v, C) {
              l(h, v, C) && f.push(h);
            }),
            f
          );
        }
        function Lt(o, l, f, h, v) {
          var C = -1,
            R = o.length;
          for (f || (f = Kb), v || (v = []); ++C < R; ) {
            var k = o[C];
            l > 0 && f(k)
              ? l > 1
                ? Lt(k, l - 1, f, h, v)
                : oi(v, k)
              : h || (v[v.length] = k);
          }
          return v;
        }
        var Hf = L0(),
          s0 = L0(!0);
        function vr(o, l) {
          return o && Hf(o, l, Pt);
        }
        function Vf(o, l) {
          return o && s0(o, l, Pt);
        }
        function Ja(o, l) {
          return ii(l, function (f) {
            return zr(o[f]);
          });
        }
        function ro(o, l) {
          l = ci(l, o);
          for (var f = 0, h = l.length; o != null && f < h; ) o = o[wr(l[f++])];
          return f && f == h ? o : n;
        }
        function l0(o, l, f) {
          var h = l(o);
          return xe(o) ? h : oi(h, f(o));
        }
        function Ht(o) {
          return o == null
            ? o === n
              ? Ki
              : Rr
            : Zi && Zi in Ve(o)
            ? Ub(o)
            : eC(o);
        }
        function Gf(o, l) {
          return o > l;
        }
        function sb(o, l) {
          return o != null && $e.call(o, l);
        }
        function lb(o, l) {
          return o != null && l in Ve(o);
        }
        function ab(o, l, f) {
          return o >= zt(l, f) && o < _t(l, f);
        }
        function Kf(o, l, f) {
          for (
            var h = f ? Nf : Ma,
              v = o[0].length,
              C = o.length,
              R = C,
              k = B(C),
              z = 1 / 0,
              K = [];
            R--;

          ) {
            var q = o[R];
            R && l && (q = nt(q, pn(l))),
              (z = zt(q.length, z)),
              (k[R] =
                !f && (l || (v >= 120 && q.length >= 120))
                  ? new to(R && q)
                  : n);
          }
          q = o[0];
          var Y = -1,
            te = k[0];
          e: for (; ++Y < v && K.length < z; ) {
            var ue = q[Y],
              ge = l ? l(ue) : ue;
            if (
              ((ue = f || ue !== 0 ? ue : 0), !(te ? Qs(te, ge) : h(K, ge, f)))
            ) {
              for (R = C; --R; ) {
                var Ce = k[R];
                if (!(Ce ? Qs(Ce, ge) : h(o[R], ge, f))) continue e;
              }
              te && te.push(ge), K.push(ue);
            }
          }
          return K;
        }
        function ub(o, l, f, h) {
          return (
            vr(o, function (v, C, R) {
              l(h, f(v), C, R);
            }),
            h
          );
        }
        function il(o, l, f) {
          (l = ci(l, o)), (o = q0(o, l));
          var h = o == null ? o : o[wr(Bn(l))];
          return h == null ? n : dn(h, o, f);
        }
        function a0(o) {
          return ft(o) && Ht(o) == Tt;
        }
        function cb(o) {
          return ft(o) && Ht(o) == Nr;
        }
        function fb(o) {
          return ft(o) && Ht(o) == Wi;
        }
        function ol(o, l, f, h, v) {
          return o === l
            ? !0
            : o == null || l == null || (!ft(o) && !ft(l))
            ? o !== o && l !== l
            : db(o, l, f, h, ol, v);
        }
        function db(o, l, f, h, v, C) {
          var R = xe(o),
            k = xe(l),
            z = R ? gt : jt(o),
            K = k ? gt : jt(l);
          (z = z == Tt ? Qn : z), (K = K == Tt ? Qn : K);
          var q = z == Qn,
            Y = K == Qn,
            te = z == K;
          if (te && di(o)) {
            if (!di(l)) return !1;
            (R = !0), (q = !1);
          }
          if (te && !q)
            return (
              C || (C = new er()),
              R || rs(o) ? U0(o, l, f, h, v, C) : Fb(o, l, z, f, h, v, C)
            );
          if (!(f & b)) {
            var ue = q && $e.call(o, "__wrapped__"),
              ge = Y && $e.call(l, "__wrapped__");
            if (ue || ge) {
              var Ce = ue ? o.value() : o,
                ve = ge ? l.value() : l;
              return C || (C = new er()), v(Ce, ve, f, h, C);
            }
          }
          return te ? (C || (C = new er()), Bb(o, l, f, h, v, C)) : !1;
        }
        function pb(o) {
          return ft(o) && jt(o) == Jt;
        }
        function qf(o, l, f, h) {
          var v = f.length,
            C = v,
            R = !h;
          if (o == null) return !C;
          for (o = Ve(o); v--; ) {
            var k = f[v];
            if (R && k[2] ? k[1] !== o[k[0]] : !(k[0] in o)) return !1;
          }
          for (; ++v < C; ) {
            k = f[v];
            var z = k[0],
              K = o[z],
              q = k[1];
            if (R && k[2]) {
              if (K === n && !(z in o)) return !1;
            } else {
              var Y = new er();
              if (h) var te = h(K, q, z, o, l, Y);
              if (!(te === n ? ol(q, K, b | T, h, Y) : te)) return !1;
            }
          }
          return !0;
        }
        function u0(o) {
          if (!it(o) || Yb(o)) return !1;
          var l = zr(o) ? p_ : Ue;
          return l.test(oo(o));
        }
        function hb(o) {
          return ft(o) && Ht(o) == Vi;
        }
        function mb(o) {
          return ft(o) && jt(o) == cn;
        }
        function gb(o) {
          return ft(o) && mu(o.length) && !!Xe[Ht(o)];
        }
        function c0(o) {
          return typeof o == "function"
            ? o
            : o == null
            ? nn
            : typeof o == "object"
            ? xe(o)
              ? p0(o[0], o[1])
              : d0(o)
            : kv(o);
        }
        function Yf(o) {
          if (!al(o)) return w_(o);
          var l = [];
          for (var f in Ve(o)) $e.call(o, f) && f != "constructor" && l.push(f);
          return l;
        }
        function vb(o) {
          if (!it(o)) return Zb(o);
          var l = al(o),
            f = [];
          for (var h in o)
            (h == "constructor" && (l || !$e.call(o, h))) || f.push(h);
          return f;
        }
        function Qf(o, l) {
          return o < l;
        }
        function f0(o, l) {
          var f = -1,
            h = en(o) ? B(o.length) : [];
          return (
            ai(o, function (v, C, R) {
              h[++f] = l(v, C, R);
            }),
            h
          );
        }
        function d0(o) {
          var l = fd(o);
          return l.length == 1 && l[0][2]
            ? G0(l[0][0], l[0][1])
            : function (f) {
                return f === o || qf(f, o, l);
              };
        }
        function p0(o, l) {
          return pd(o) && V0(l)
            ? G0(wr(o), l)
            : function (f) {
                var h = _d(f, o);
                return h === n && h === l ? bd(f, o) : ol(l, h, b | T);
              };
        }
        function Za(o, l, f, h, v) {
          o !== l &&
            Hf(
              l,
              function (C, R) {
                if ((v || (v = new er()), it(C))) yb(o, l, R, f, Za, h, v);
                else {
                  var k = h ? h(md(o, R), C, R + "", o, l, v) : n;
                  k === n && (k = C), $f(o, R, k);
                }
              },
              tn
            );
        }
        function yb(o, l, f, h, v, C, R) {
          var k = md(o, f),
            z = md(l, f),
            K = R.get(z);
          if (K) {
            $f(o, f, K);
            return;
          }
          var q = C ? C(k, z, f + "", o, l, R) : n,
            Y = q === n;
          if (Y) {
            var te = xe(z),
              ue = !te && di(z),
              ge = !te && !ue && rs(z);
            (q = z),
              te || ue || ge
                ? xe(k)
                  ? (q = k)
                  : pt(k)
                  ? (q = Zt(k))
                  : ue
                  ? ((Y = !1), (q = C0(z, !0)))
                  : ge
                  ? ((Y = !1), (q = T0(z, !0)))
                  : (q = [])
                : cl(z) || so(z)
                ? ((q = k),
                  so(k) ? (q = Ev(k)) : (!it(k) || zr(k)) && (q = H0(z)))
                : (Y = !1);
          }
          Y && (R.set(z, q), v(q, z, h, C, R), R.delete(z)), $f(o, f, q);
        }
        function h0(o, l) {
          var f = o.length;
          if (f) return (l += l < 0 ? f : 0), Ir(l, f) ? o[l] : n;
        }
        function m0(o, l, f) {
          l.length
            ? (l = nt(l, function (C) {
                return xe(C)
                  ? function (R) {
                      return ro(R, C.length === 1 ? C[0] : C);
                    }
                  : C;
              }))
            : (l = [nn]);
          var h = -1;
          l = nt(l, pn(pe()));
          var v = f0(o, function (C, R, k) {
            var z = nt(l, function (K) {
              return K(C);
            });
            return { criteria: z, index: ++h, value: C };
          });
          return VE(v, function (C, R) {
            return Lb(C, R, f);
          });
        }
        function wb(o, l) {
          return g0(o, l, function (f, h) {
            return bd(o, h);
          });
        }
        function g0(o, l, f) {
          for (var h = -1, v = l.length, C = {}; ++h < v; ) {
            var R = l[h],
              k = ro(o, R);
            f(k, R) && sl(C, ci(R, o), k);
          }
          return C;
        }
        function xb(o) {
          return function (l) {
            return ro(l, o);
          };
        }
        function Xf(o, l, f, h) {
          var v = h ? HE : Go,
            C = -1,
            R = l.length,
            k = o;
          for (o === l && (l = Zt(l)), f && (k = nt(o, pn(f))); ++C < R; )
            for (
              var z = 0, K = l[C], q = f ? f(K) : K;
              (z = v(k, q, z, h)) > -1;

            )
              k !== o && Wa.call(k, z, 1), Wa.call(o, z, 1);
          return o;
        }
        function v0(o, l) {
          for (var f = o ? l.length : 0, h = f - 1; f--; ) {
            var v = l[f];
            if (f == h || v !== C) {
              var C = v;
              Ir(v) ? Wa.call(o, v, 1) : td(o, v);
            }
          }
          return o;
        }
        function Jf(o, l) {
          return o + Ga(Xg() * (l - o + 1));
        }
        function Sb(o, l, f, h) {
          for (var v = -1, C = _t(Va((l - o) / (f || 1)), 0), R = B(C); C--; )
            (R[h ? C : ++v] = o), (o += f);
          return R;
        }
        function Zf(o, l) {
          var f = "";
          if (!o || l < 1 || l > Z) return f;
          do l % 2 && (f += o), (l = Ga(l / 2)), l && (o += o);
          while (l);
          return f;
        }
        function Re(o, l) {
          return gd(K0(o, l, nn), o + "");
        }
        function Eb(o) {
          return e0(is(o));
        }
        function _b(o, l) {
          var f = is(o);
          return uu(f, no(l, 0, f.length));
        }
        function sl(o, l, f, h) {
          if (!it(o)) return o;
          l = ci(l, o);
          for (
            var v = -1, C = l.length, R = C - 1, k = o;
            k != null && ++v < C;

          ) {
            var z = wr(l[v]),
              K = f;
            if (z === "__proto__" || z === "constructor" || z === "prototype")
              return o;
            if (v != R) {
              var q = k[z];
              (K = h ? h(q, z, k) : n),
                K === n && (K = it(q) ? q : Ir(l[v + 1]) ? [] : {});
            }
            nl(k, z, K), (k = k[z]);
          }
          return o;
        }
        var y0 = Ka
            ? function (o, l) {
                return Ka.set(o, l), o;
              }
            : nn,
          bb = Ha
            ? function (o, l) {
                return Ha(o, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: Td(l),
                  writable: !0,
                });
              }
            : nn;
        function Cb(o) {
          return uu(is(o));
        }
        function Fn(o, l, f) {
          var h = -1,
            v = o.length;
          l < 0 && (l = -l > v ? 0 : v + l),
            (f = f > v ? v : f),
            f < 0 && (f += v),
            (v = l > f ? 0 : (f - l) >>> 0),
            (l >>>= 0);
          for (var C = B(v); ++h < v; ) C[h] = o[h + l];
          return C;
        }
        function Tb(o, l) {
          var f;
          return (
            ai(o, function (h, v, C) {
              return (f = l(h, v, C)), !f;
            }),
            !!f
          );
        }
        function eu(o, l, f) {
          var h = 0,
            v = o == null ? h : o.length;
          if (typeof l == "number" && l === l && v <= On) {
            for (; h < v; ) {
              var C = (h + v) >>> 1,
                R = o[C];
              R !== null && !mn(R) && (f ? R <= l : R < l)
                ? (h = C + 1)
                : (v = C);
            }
            return v;
          }
          return ed(o, l, nn, f);
        }
        function ed(o, l, f, h) {
          var v = 0,
            C = o == null ? 0 : o.length;
          if (C === 0) return 0;
          l = f(l);
          for (
            var R = l !== l, k = l === null, z = mn(l), K = l === n;
            v < C;

          ) {
            var q = Ga((v + C) / 2),
              Y = f(o[q]),
              te = Y !== n,
              ue = Y === null,
              ge = Y === Y,
              Ce = mn(Y);
            if (R) var ve = h || ge;
            else
              K
                ? (ve = ge && (h || te))
                : k
                ? (ve = ge && te && (h || !ue))
                : z
                ? (ve = ge && te && !ue && (h || !Ce))
                : ue || Ce
                ? (ve = !1)
                : (ve = h ? Y <= l : Y < l);
            ve ? (v = q + 1) : (C = q);
          }
          return zt(C, Me);
        }
        function w0(o, l) {
          for (var f = -1, h = o.length, v = 0, C = []; ++f < h; ) {
            var R = o[f],
              k = l ? l(R) : R;
            if (!f || !tr(k, z)) {
              var z = k;
              C[v++] = R === 0 ? 0 : R;
            }
          }
          return C;
        }
        function x0(o) {
          return typeof o == "number" ? o : mn(o) ? le : +o;
        }
        function hn(o) {
          if (typeof o == "string") return o;
          if (xe(o)) return nt(o, hn) + "";
          if (mn(o)) return Jg ? Jg.call(o) : "";
          var l = o + "";
          return l == "0" && 1 / o == -Pe ? "-0" : l;
        }
        function ui(o, l, f) {
          var h = -1,
            v = Ma,
            C = o.length,
            R = !0,
            k = [],
            z = k;
          if (f) (R = !1), (v = Nf);
          else if (C >= i) {
            var K = l ? null : jb(o);
            if (K) return Ia(K);
            (R = !1), (v = Qs), (z = new to());
          } else z = l ? [] : k;
          e: for (; ++h < C; ) {
            var q = o[h],
              Y = l ? l(q) : q;
            if (((q = f || q !== 0 ? q : 0), R && Y === Y)) {
              for (var te = z.length; te--; ) if (z[te] === Y) continue e;
              l && z.push(Y), k.push(q);
            } else v(z, Y, f) || (z !== k && z.push(Y), k.push(q));
          }
          return k;
        }
        function td(o, l) {
          return (
            (l = ci(l, o)), (o = q0(o, l)), o == null || delete o[wr(Bn(l))]
          );
        }
        function S0(o, l, f, h) {
          return sl(o, l, f(ro(o, l)), h);
        }
        function tu(o, l, f, h) {
          for (
            var v = o.length, C = h ? v : -1;
            (h ? C-- : ++C < v) && l(o[C], C, o);

          );
          return f
            ? Fn(o, h ? 0 : C, h ? C + 1 : v)
            : Fn(o, h ? C + 1 : 0, h ? v : C);
        }
        function E0(o, l) {
          var f = o;
          return (
            f instanceof Le && (f = f.value()),
            Of(
              l,
              function (h, v) {
                return v.func.apply(v.thisArg, oi([h], v.args));
              },
              f
            )
          );
        }
        function nd(o, l, f) {
          var h = o.length;
          if (h < 2) return h ? ui(o[0]) : [];
          for (var v = -1, C = B(h); ++v < h; )
            for (var R = o[v], k = -1; ++k < h; )
              k != v && (C[v] = rl(C[v] || R, o[k], l, f));
          return ui(Lt(C, 1), l, f);
        }
        function _0(o, l, f) {
          for (var h = -1, v = o.length, C = l.length, R = {}; ++h < v; ) {
            var k = h < C ? l[h] : n;
            f(R, o[h], k);
          }
          return R;
        }
        function rd(o) {
          return pt(o) ? o : [];
        }
        function id(o) {
          return typeof o == "function" ? o : nn;
        }
        function ci(o, l) {
          return xe(o) ? o : pd(o, l) ? [o] : J0(Be(o));
        }
        var Pb = Re;
        function fi(o, l, f) {
          var h = o.length;
          return (f = f === n ? h : f), !l && f >= h ? o : Fn(o, l, f);
        }
        var b0 =
          h_ ||
          function (o) {
            return Ot.clearTimeout(o);
          };
        function C0(o, l) {
          if (l) return o.slice();
          var f = o.length,
            h = Gg ? Gg(f) : new o.constructor(f);
          return o.copy(h), h;
        }
        function od(o) {
          var l = new o.constructor(o.byteLength);
          return new Ua(l).set(new Ua(o)), l;
        }
        function Rb(o, l) {
          var f = l ? od(o.buffer) : o.buffer;
          return new o.constructor(f, o.byteOffset, o.byteLength);
        }
        function Nb(o) {
          var l = new o.constructor(o.source, de.exec(o));
          return (l.lastIndex = o.lastIndex), l;
        }
        function Ob(o) {
          return tl ? Ve(tl.call(o)) : {};
        }
        function T0(o, l) {
          var f = l ? od(o.buffer) : o.buffer;
          return new o.constructor(f, o.byteOffset, o.length);
        }
        function P0(o, l) {
          if (o !== l) {
            var f = o !== n,
              h = o === null,
              v = o === o,
              C = mn(o),
              R = l !== n,
              k = l === null,
              z = l === l,
              K = mn(l);
            if (
              (!k && !K && !C && o > l) ||
              (C && R && z && !k && !K) ||
              (h && R && z) ||
              (!f && z) ||
              !v
            )
              return 1;
            if (
              (!h && !C && !K && o < l) ||
              (K && f && v && !h && !C) ||
              (k && f && v) ||
              (!R && v) ||
              !z
            )
              return -1;
          }
          return 0;
        }
        function Lb(o, l, f) {
          for (
            var h = -1,
              v = o.criteria,
              C = l.criteria,
              R = v.length,
              k = f.length;
            ++h < R;

          ) {
            var z = P0(v[h], C[h]);
            if (z) {
              if (h >= k) return z;
              var K = f[h];
              return z * (K == "desc" ? -1 : 1);
            }
          }
          return o.index - l.index;
        }
        function R0(o, l, f, h) {
          for (
            var v = -1,
              C = o.length,
              R = f.length,
              k = -1,
              z = l.length,
              K = _t(C - R, 0),
              q = B(z + K),
              Y = !h;
            ++k < z;

          )
            q[k] = l[k];
          for (; ++v < R; ) (Y || v < C) && (q[f[v]] = o[v]);
          for (; K--; ) q[k++] = o[v++];
          return q;
        }
        function N0(o, l, f, h) {
          for (
            var v = -1,
              C = o.length,
              R = -1,
              k = f.length,
              z = -1,
              K = l.length,
              q = _t(C - k, 0),
              Y = B(q + K),
              te = !h;
            ++v < q;

          )
            Y[v] = o[v];
          for (var ue = v; ++z < K; ) Y[ue + z] = l[z];
          for (; ++R < k; ) (te || v < C) && (Y[ue + f[R]] = o[v++]);
          return Y;
        }
        function Zt(o, l) {
          var f = -1,
            h = o.length;
          for (l || (l = B(h)); ++f < h; ) l[f] = o[f];
          return l;
        }
        function yr(o, l, f, h) {
          var v = !f;
          f || (f = {});
          for (var C = -1, R = l.length; ++C < R; ) {
            var k = l[C],
              z = h ? h(f[k], o[k], k, f, o) : n;
            z === n && (z = o[k]), v ? kr(f, k, z) : nl(f, k, z);
          }
          return f;
        }
        function kb(o, l) {
          return yr(o, dd(o), l);
        }
        function Mb(o, l) {
          return yr(o, $0(o), l);
        }
        function nu(o, l) {
          return function (f, h) {
            var v = xe(f) ? DE : tb,
              C = l ? l() : {};
            return v(f, o, pe(h, 2), C);
          };
        }
        function es(o) {
          return Re(function (l, f) {
            var h = -1,
              v = f.length,
              C = v > 1 ? f[v - 1] : n,
              R = v > 2 ? f[2] : n;
            for (
              C = o.length > 3 && typeof C == "function" ? (v--, C) : n,
                R && Vt(f[0], f[1], R) && ((C = v < 3 ? n : C), (v = 1)),
                l = Ve(l);
              ++h < v;

            ) {
              var k = f[h];
              k && o(l, k, h, C);
            }
            return l;
          });
        }
        function O0(o, l) {
          return function (f, h) {
            if (f == null) return f;
            if (!en(f)) return o(f, h);
            for (
              var v = f.length, C = l ? v : -1, R = Ve(f);
              (l ? C-- : ++C < v) && h(R[C], C, R) !== !1;

            );
            return f;
          };
        }
        function L0(o) {
          return function (l, f, h) {
            for (var v = -1, C = Ve(l), R = h(l), k = R.length; k--; ) {
              var z = R[o ? k : ++v];
              if (f(C[z], z, C) === !1) break;
            }
            return l;
          };
        }
        function Ab(o, l, f) {
          var h = l & O,
            v = ll(o);
          function C() {
            var R = this && this !== Ot && this instanceof C ? v : o;
            return R.apply(h ? f : this, arguments);
          }
          return C;
        }
        function k0(o) {
          return function (l) {
            l = Be(l);
            var f = Ko(l) ? Zn(l) : n,
              h = f ? f[0] : l.charAt(0),
              v = f ? fi(f, 1).join("") : l.slice(1);
            return h[o]() + v;
          };
        }
        function ts(o) {
          return function (l) {
            return Of(Ov(Nv(l).replace(bE, "")), o, "");
          };
        }
        function ll(o) {
          return function () {
            var l = arguments;
            switch (l.length) {
              case 0:
                return new o();
              case 1:
                return new o(l[0]);
              case 2:
                return new o(l[0], l[1]);
              case 3:
                return new o(l[0], l[1], l[2]);
              case 4:
                return new o(l[0], l[1], l[2], l[3]);
              case 5:
                return new o(l[0], l[1], l[2], l[3], l[4]);
              case 6:
                return new o(l[0], l[1], l[2], l[3], l[4], l[5]);
              case 7:
                return new o(l[0], l[1], l[2], l[3], l[4], l[5], l[6]);
            }
            var f = Zo(o.prototype),
              h = o.apply(f, l);
            return it(h) ? h : f;
          };
        }
        function Ib(o, l, f) {
          var h = ll(o);
          function v() {
            for (var C = arguments.length, R = B(C), k = C, z = ns(v); k--; )
              R[k] = arguments[k];
            var K = C < 3 && R[0] !== z && R[C - 1] !== z ? [] : si(R, z);
            if (((C -= K.length), C < f))
              return j0(o, l, ru, v.placeholder, n, R, K, n, n, f - C);
            var q = this && this !== Ot && this instanceof v ? h : o;
            return dn(q, this, R);
          }
          return v;
        }
        function M0(o) {
          return function (l, f, h) {
            var v = Ve(l);
            if (!en(l)) {
              var C = pe(f, 3);
              (l = Pt(l)),
                (f = function (k) {
                  return C(v[k], k, v);
                });
            }
            var R = o(l, f, h);
            return R > -1 ? v[C ? l[R] : R] : n;
          };
        }
        function A0(o) {
          return Ar(function (l) {
            var f = l.length,
              h = f,
              v = jn.prototype.thru;
            for (o && l.reverse(); h--; ) {
              var C = l[h];
              if (typeof C != "function") throw new zn(a);
              if (v && !R && lu(C) == "wrapper") var R = new jn([], !0);
            }
            for (h = R ? h : f; ++h < f; ) {
              C = l[h];
              var k = lu(C),
                z = k == "wrapper" ? cd(C) : n;
              z &&
              hd(z[0]) &&
              z[1] == (H | w | j | D) &&
              !z[4].length &&
              z[9] == 1
                ? (R = R[lu(z[0])].apply(R, z[3]))
                : (R = C.length == 1 && hd(C) ? R[k]() : R.thru(C));
            }
            return function () {
              var K = arguments,
                q = K[0];
              if (R && K.length == 1 && xe(q)) return R.plant(q).value();
              for (var Y = 0, te = f ? l[Y].apply(this, K) : q; ++Y < f; )
                te = l[Y].call(this, te);
              return te;
            };
          });
        }
        function ru(o, l, f, h, v, C, R, k, z, K) {
          var q = l & H,
            Y = l & O,
            te = l & y,
            ue = l & (w | P),
            ge = l & V,
            Ce = te ? n : ll(o);
          function ve() {
            for (var Ne = arguments.length, ke = B(Ne), gn = Ne; gn--; )
              ke[gn] = arguments[gn];
            if (ue)
              var Gt = ns(ve),
                vn = KE(ke, Gt);
            if (
              (h && (ke = R0(ke, h, v, ue)),
              C && (ke = N0(ke, C, R, ue)),
              (Ne -= vn),
              ue && Ne < K)
            ) {
              var ht = si(ke, Gt);
              return j0(o, l, ru, ve.placeholder, f, ke, ht, k, z, K - Ne);
            }
            var nr = Y ? f : this,
              Dr = te ? nr[o] : o;
            return (
              (Ne = ke.length),
              k ? (ke = tC(ke, k)) : ge && Ne > 1 && ke.reverse(),
              q && z < Ne && (ke.length = z),
              this && this !== Ot && this instanceof ve && (Dr = Ce || ll(Dr)),
              Dr.apply(nr, ke)
            );
          }
          return ve;
        }
        function I0(o, l) {
          return function (f, h) {
            return ub(f, o, l(h), {});
          };
        }
        function iu(o, l) {
          return function (f, h) {
            var v;
            if (f === n && h === n) return l;
            if ((f !== n && (v = f), h !== n)) {
              if (v === n) return h;
              typeof f == "string" || typeof h == "string"
                ? ((f = hn(f)), (h = hn(h)))
                : ((f = x0(f)), (h = x0(h))),
                (v = o(f, h));
            }
            return v;
          };
        }
        function sd(o) {
          return Ar(function (l) {
            return (
              (l = nt(l, pn(pe()))),
              Re(function (f) {
                var h = this;
                return o(l, function (v) {
                  return dn(v, h, f);
                });
              })
            );
          });
        }
        function ou(o, l) {
          l = l === n ? " " : hn(l);
          var f = l.length;
          if (f < 2) return f ? Zf(l, o) : l;
          var h = Zf(l, Va(o / qo(l)));
          return Ko(l) ? fi(Zn(h), 0, o).join("") : h.slice(0, o);
        }
        function zb(o, l, f, h) {
          var v = l & O,
            C = ll(o);
          function R() {
            for (
              var k = -1,
                z = arguments.length,
                K = -1,
                q = h.length,
                Y = B(q + z),
                te = this && this !== Ot && this instanceof R ? C : o;
              ++K < q;

            )
              Y[K] = h[K];
            for (; z--; ) Y[K++] = arguments[++k];
            return dn(te, v ? f : this, Y);
          }
          return R;
        }
        function z0(o) {
          return function (l, f, h) {
            return (
              h && typeof h != "number" && Vt(l, f, h) && (f = h = n),
              (l = jr(l)),
              f === n ? ((f = l), (l = 0)) : (f = jr(f)),
              (h = h === n ? (l < f ? 1 : -1) : jr(h)),
              Sb(l, f, h, o)
            );
          };
        }
        function su(o) {
          return function (l, f) {
            return (
              (typeof l == "string" && typeof f == "string") ||
                ((l = Un(l)), (f = Un(f))),
              o(l, f)
            );
          };
        }
        function j0(o, l, f, h, v, C, R, k, z, K) {
          var q = l & w,
            Y = q ? R : n,
            te = q ? n : R,
            ue = q ? C : n,
            ge = q ? n : C;
          (l |= q ? j : N), (l &= ~(q ? N : j)), l & S || (l &= ~(O | y));
          var Ce = [o, l, v, ue, Y, ge, te, k, z, K],
            ve = f.apply(n, Ce);
          return hd(o) && Y0(ve, Ce), (ve.placeholder = h), Q0(ve, o, l);
        }
        function ld(o) {
          var l = Et[o];
          return function (f, h) {
            if (
              ((f = Un(f)), (h = h == null ? 0 : zt(_e(h), 292)), h && Qg(f))
            ) {
              var v = (Be(f) + "e").split("e"),
                C = l(v[0] + "e" + (+v[1] + h));
              return (
                (v = (Be(C) + "e").split("e")), +(v[0] + "e" + (+v[1] - h))
              );
            }
            return l(f);
          };
        }
        var jb =
          Xo && 1 / Ia(new Xo([, -0]))[1] == Pe
            ? function (o) {
                return new Xo(o);
              }
            : Nd;
        function D0(o) {
          return function (l) {
            var f = jt(l);
            return f == Jt ? jf(l) : f == cn ? e_(l) : GE(l, o(l));
          };
        }
        function Mr(o, l, f, h, v, C, R, k) {
          var z = l & y;
          if (!z && typeof o != "function") throw new zn(a);
          var K = h ? h.length : 0;
          if (
            (K || ((l &= ~(j | N)), (h = v = n)),
            (R = R === n ? R : _t(_e(R), 0)),
            (k = k === n ? k : _e(k)),
            (K -= v ? v.length : 0),
            l & N)
          ) {
            var q = h,
              Y = v;
            h = v = n;
          }
          var te = z ? n : cd(o),
            ue = [o, l, f, h, v, q, Y, C, R, k];
          if (
            (te && Jb(ue, te),
            (o = ue[0]),
            (l = ue[1]),
            (f = ue[2]),
            (h = ue[3]),
            (v = ue[4]),
            (k = ue[9] = ue[9] === n ? (z ? 0 : o.length) : _t(ue[9] - K, 0)),
            !k && l & (w | P) && (l &= ~(w | P)),
            !l || l == O)
          )
            var ge = Ab(o, l, f);
          else
            l == w || l == P
              ? (ge = Ib(o, l, k))
              : (l == j || l == (O | j)) && !v.length
              ? (ge = zb(o, l, f, h))
              : (ge = ru.apply(n, ue));
          var Ce = te ? y0 : Y0;
          return Q0(Ce(ge, ue), o, l);
        }
        function F0(o, l, f, h) {
          return o === n || (tr(o, Qo[f]) && !$e.call(h, f)) ? l : o;
        }
        function B0(o, l, f, h, v, C) {
          return (
            it(o) && it(l) && (C.set(l, o), Za(o, l, n, B0, C), C.delete(l)), o
          );
        }
        function Db(o) {
          return cl(o) ? n : o;
        }
        function U0(o, l, f, h, v, C) {
          var R = f & b,
            k = o.length,
            z = l.length;
          if (k != z && !(R && z > k)) return !1;
          var K = C.get(o),
            q = C.get(l);
          if (K && q) return K == l && q == o;
          var Y = -1,
            te = !0,
            ue = f & T ? new to() : n;
          for (C.set(o, l), C.set(l, o); ++Y < k; ) {
            var ge = o[Y],
              Ce = l[Y];
            if (h) var ve = R ? h(Ce, ge, Y, l, o, C) : h(ge, Ce, Y, o, l, C);
            if (ve !== n) {
              if (ve) continue;
              te = !1;
              break;
            }
            if (ue) {
              if (
                !Lf(l, function (Ne, ke) {
                  if (!Qs(ue, ke) && (ge === Ne || v(ge, Ne, f, h, C)))
                    return ue.push(ke);
                })
              ) {
                te = !1;
                break;
              }
            } else if (!(ge === Ce || v(ge, Ce, f, h, C))) {
              te = !1;
              break;
            }
          }
          return C.delete(o), C.delete(l), te;
        }
        function Fb(o, l, f, h, v, C, R) {
          switch (f) {
            case $t:
              if (o.byteLength != l.byteLength || o.byteOffset != l.byteOffset)
                return !1;
              (o = o.buffer), (l = l.buffer);
            case Nr:
              return !(
                o.byteLength != l.byteLength || !C(new Ua(o), new Ua(l))
              );
            case Tr:
            case Wi:
            case Hi:
              return tr(+o, +l);
            case zo:
              return o.name == l.name && o.message == l.message;
            case Vi:
            case Gi:
              return o == l + "";
            case Jt:
              var k = jf;
            case cn:
              var z = h & b;
              if ((k || (k = Ia), o.size != l.size && !z)) return !1;
              var K = R.get(o);
              if (K) return K == l;
              (h |= T), R.set(o, l);
              var q = U0(k(o), k(l), h, v, C, R);
              return R.delete(o), q;
            case jo:
              if (tl) return tl.call(o) == tl.call(l);
          }
          return !1;
        }
        function Bb(o, l, f, h, v, C) {
          var R = f & b,
            k = ad(o),
            z = k.length,
            K = ad(l),
            q = K.length;
          if (z != q && !R) return !1;
          for (var Y = z; Y--; ) {
            var te = k[Y];
            if (!(R ? te in l : $e.call(l, te))) return !1;
          }
          var ue = C.get(o),
            ge = C.get(l);
          if (ue && ge) return ue == l && ge == o;
          var Ce = !0;
          C.set(o, l), C.set(l, o);
          for (var ve = R; ++Y < z; ) {
            te = k[Y];
            var Ne = o[te],
              ke = l[te];
            if (h) var gn = R ? h(ke, Ne, te, l, o, C) : h(Ne, ke, te, o, l, C);
            if (!(gn === n ? Ne === ke || v(Ne, ke, f, h, C) : gn)) {
              Ce = !1;
              break;
            }
            ve || (ve = te == "constructor");
          }
          if (Ce && !ve) {
            var Gt = o.constructor,
              vn = l.constructor;
            Gt != vn &&
              "constructor" in o &&
              "constructor" in l &&
              !(
                typeof Gt == "function" &&
                Gt instanceof Gt &&
                typeof vn == "function" &&
                vn instanceof vn
              ) &&
              (Ce = !1);
          }
          return C.delete(o), C.delete(l), Ce;
        }
        function Ar(o) {
          return gd(K0(o, n, nv), o + "");
        }
        function ad(o) {
          return l0(o, Pt, dd);
        }
        function ud(o) {
          return l0(o, tn, $0);
        }
        var cd = Ka
          ? function (o) {
              return Ka.get(o);
            }
          : Nd;
        function lu(o) {
          for (
            var l = o.name + "", f = Jo[l], h = $e.call(Jo, l) ? f.length : 0;
            h--;

          ) {
            var v = f[h],
              C = v.func;
            if (C == null || C == o) return v.name;
          }
          return l;
        }
        function ns(o) {
          var l = $e.call(E, "placeholder") ? E : o;
          return l.placeholder;
        }
        function pe() {
          var o = E.iteratee || Pd;
          return (
            (o = o === Pd ? c0 : o),
            arguments.length ? o(arguments[0], arguments[1]) : o
          );
        }
        function au(o, l) {
          var f = o.__data__;
          return qb(l) ? f[typeof l == "string" ? "string" : "hash"] : f.map;
        }
        function fd(o) {
          for (var l = Pt(o), f = l.length; f--; ) {
            var h = l[f],
              v = o[h];
            l[f] = [h, v, V0(v)];
          }
          return l;
        }
        function io(o, l) {
          var f = XE(o, l);
          return u0(f) ? f : n;
        }
        function Ub(o) {
          var l = $e.call(o, Zi),
            f = o[Zi];
          try {
            o[Zi] = n;
            var h = !0;
          } catch {}
          var v = Fa.call(o);
          return h && (l ? (o[Zi] = f) : delete o[Zi]), v;
        }
        var dd = Ff
            ? function (o) {
                return o == null
                  ? []
                  : ((o = Ve(o)),
                    ii(Ff(o), function (l) {
                      return qg.call(o, l);
                    }));
              }
            : Od,
          $0 = Ff
            ? function (o) {
                for (var l = []; o; ) oi(l, dd(o)), (o = $a(o));
                return l;
              }
            : Od,
          jt = Ht;
        ((Bf && jt(new Bf(new ArrayBuffer(1))) != $t) ||
          (Js && jt(new Js()) != Jt) ||
          (Uf && jt(Uf.resolve()) != Ca) ||
          (Xo && jt(new Xo()) != cn) ||
          (Zs && jt(new Zs()) != Xn)) &&
          (jt = function (o) {
            var l = Ht(o),
              f = l == Qn ? o.constructor : n,
              h = f ? oo(f) : "";
            if (h)
              switch (h) {
                case __:
                  return $t;
                case b_:
                  return Jt;
                case C_:
                  return Ca;
                case T_:
                  return cn;
                case P_:
                  return Xn;
              }
            return l;
          });
        function $b(o, l, f) {
          for (var h = -1, v = f.length; ++h < v; ) {
            var C = f[h],
              R = C.size;
            switch (C.type) {
              case "drop":
                o += R;
                break;
              case "dropRight":
                l -= R;
                break;
              case "take":
                l = zt(l, o + R);
                break;
              case "takeRight":
                o = _t(o, l - R);
                break;
            }
          }
          return { start: o, end: l };
        }
        function Wb(o) {
          var l = o.match(ie);
          return l ? l[1].split(ce) : [];
        }
        function W0(o, l, f) {
          l = ci(l, o);
          for (var h = -1, v = l.length, C = !1; ++h < v; ) {
            var R = wr(l[h]);
            if (!(C = o != null && f(o, R))) break;
            o = o[R];
          }
          return C || ++h != v
            ? C
            : ((v = o == null ? 0 : o.length),
              !!v && mu(v) && Ir(R, v) && (xe(o) || so(o)));
        }
        function Hb(o) {
          var l = o.length,
            f = new o.constructor(l);
          return (
            l &&
              typeof o[0] == "string" &&
              $e.call(o, "index") &&
              ((f.index = o.index), (f.input = o.input)),
            f
          );
        }
        function H0(o) {
          return typeof o.constructor == "function" && !al(o) ? Zo($a(o)) : {};
        }
        function Vb(o, l, f) {
          var h = o.constructor;
          switch (l) {
            case Nr:
              return od(o);
            case Tr:
            case Wi:
              return new h(+o);
            case $t:
              return Rb(o, f);
            case fn:
            case Do:
            case ti:
            case Ws:
            case Ln:
            case Fo:
            case Bo:
            case Uo:
            case Hs:
              return T0(o, f);
            case Jt:
              return new h();
            case Hi:
            case Gi:
              return new h(o);
            case Vi:
              return Nb(o);
            case cn:
              return new h();
            case jo:
              return Ob(o);
          }
        }
        function Gb(o, l) {
          var f = l.length;
          if (!f) return o;
          var h = f - 1;
          return (
            (l[h] = (f > 1 ? "& " : "") + l[h]),
            (l = l.join(f > 2 ? ", " : " ")),
            o.replace(
              G,
              `{
/* [wrapped with ` +
                l +
                `] */
`
            )
          );
        }
        function Kb(o) {
          return xe(o) || so(o) || !!(Yg && o && o[Yg]);
        }
        function Ir(o, l) {
          var f = typeof o;
          return (
            (l = l ?? Z),
            !!l &&
              (f == "number" || (f != "symbol" && St.test(o))) &&
              o > -1 &&
              o % 1 == 0 &&
              o < l
          );
        }
        function Vt(o, l, f) {
          if (!it(f)) return !1;
          var h = typeof l;
          return (
            h == "number" ? en(f) && Ir(l, f.length) : h == "string" && l in f
          )
            ? tr(f[l], o)
            : !1;
        }
        function pd(o, l) {
          if (xe(o)) return !1;
          var f = typeof o;
          return f == "number" ||
            f == "symbol" ||
            f == "boolean" ||
            o == null ||
            mn(o)
            ? !0
            : Ho.test(o) || !Ks.test(o) || (l != null && o in Ve(l));
        }
        function qb(o) {
          var l = typeof o;
          return l == "string" ||
            l == "number" ||
            l == "symbol" ||
            l == "boolean"
            ? o !== "__proto__"
            : o === null;
        }
        function hd(o) {
          var l = lu(o),
            f = E[l];
          if (typeof f != "function" || !(l in Le.prototype)) return !1;
          if (o === f) return !0;
          var h = cd(f);
          return !!h && o === h[0];
        }
        function Yb(o) {
          return !!Vg && Vg in o;
        }
        var Qb = ja ? zr : Ld;
        function al(o) {
          var l = o && o.constructor,
            f = (typeof l == "function" && l.prototype) || Qo;
          return o === f;
        }
        function V0(o) {
          return o === o && !it(o);
        }
        function G0(o, l) {
          return function (f) {
            return f == null ? !1 : f[o] === l && (l !== n || o in Ve(f));
          };
        }
        function Xb(o) {
          var l = pu(o, function (h) {
              return f.size === d && f.clear(), h;
            }),
            f = l.cache;
          return l;
        }
        function Jb(o, l) {
          var f = o[1],
            h = l[1],
            v = f | h,
            C = v < (O | y | H),
            R =
              (h == H && f == w) ||
              (h == H && f == D && o[7].length <= l[8]) ||
              (h == (H | D) && l[7].length <= l[8] && f == w);
          if (!(C || R)) return o;
          h & O && ((o[2] = l[2]), (v |= f & O ? 0 : S));
          var k = l[3];
          if (k) {
            var z = o[3];
            (o[3] = z ? R0(z, k, l[4]) : k), (o[4] = z ? si(o[3], p) : l[4]);
          }
          return (
            (k = l[5]),
            k &&
              ((z = o[5]),
              (o[5] = z ? N0(z, k, l[6]) : k),
              (o[6] = z ? si(o[5], p) : l[6])),
            (k = l[7]),
            k && (o[7] = k),
            h & H && (o[8] = o[8] == null ? l[8] : zt(o[8], l[8])),
            o[9] == null && (o[9] = l[9]),
            (o[0] = l[0]),
            (o[1] = v),
            o
          );
        }
        function Zb(o) {
          var l = [];
          if (o != null) for (var f in Ve(o)) l.push(f);
          return l;
        }
        function eC(o) {
          return Fa.call(o);
        }
        function K0(o, l, f) {
          return (
            (l = _t(l === n ? o.length - 1 : l, 0)),
            function () {
              for (
                var h = arguments, v = -1, C = _t(h.length - l, 0), R = B(C);
                ++v < C;

              )
                R[v] = h[l + v];
              v = -1;
              for (var k = B(l + 1); ++v < l; ) k[v] = h[v];
              return (k[l] = f(R)), dn(o, this, k);
            }
          );
        }
        function q0(o, l) {
          return l.length < 2 ? o : ro(o, Fn(l, 0, -1));
        }
        function tC(o, l) {
          for (var f = o.length, h = zt(l.length, f), v = Zt(o); h--; ) {
            var C = l[h];
            o[h] = Ir(C, f) ? v[C] : n;
          }
          return o;
        }
        function md(o, l) {
          if (
            !(l === "constructor" && typeof o[l] == "function") &&
            l != "__proto__"
          )
            return o[l];
        }
        var Y0 = X0(y0),
          ul =
            g_ ||
            function (o, l) {
              return Ot.setTimeout(o, l);
            },
          gd = X0(bb);
        function Q0(o, l, f) {
          var h = l + "";
          return gd(o, Gb(h, nC(Wb(h), f)));
        }
        function X0(o) {
          var l = 0,
            f = 0;
          return function () {
            var h = x_(),
              v = re - (h - f);
            if (((f = h), v > 0)) {
              if (++l >= Q) return arguments[0];
            } else l = 0;
            return o.apply(n, arguments);
          };
        }
        function uu(o, l) {
          var f = -1,
            h = o.length,
            v = h - 1;
          for (l = l === n ? h : l; ++f < l; ) {
            var C = Jf(f, v),
              R = o[C];
            (o[C] = o[f]), (o[f] = R);
          }
          return (o.length = l), o;
        }
        var J0 = Xb(function (o) {
          var l = [];
          return (
            o.charCodeAt(0) === 46 && l.push(""),
            o.replace(Sf, function (f, h, v, C) {
              l.push(v ? C.replace(we, "$1") : h || f);
            }),
            l
          );
        });
        function wr(o) {
          if (typeof o == "string" || mn(o)) return o;
          var l = o + "";
          return l == "0" && 1 / o == -Pe ? "-0" : l;
        }
        function oo(o) {
          if (o != null) {
            try {
              return Da.call(o);
            } catch {}
            try {
              return o + "";
            } catch {}
          }
          return "";
        }
        function nC(o, l) {
          return (
            In(xt, function (f) {
              var h = "_." + f[0];
              l & f[1] && !Ma(o, h) && o.push(h);
            }),
            o.sort()
          );
        }
        function Z0(o) {
          if (o instanceof Le) return o.clone();
          var l = new jn(o.__wrapped__, o.__chain__);
          return (
            (l.__actions__ = Zt(o.__actions__)),
            (l.__index__ = o.__index__),
            (l.__values__ = o.__values__),
            l
          );
        }
        function rC(o, l, f) {
          (f ? Vt(o, l, f) : l === n) ? (l = 1) : (l = _t(_e(l), 0));
          var h = o == null ? 0 : o.length;
          if (!h || l < 1) return [];
          for (var v = 0, C = 0, R = B(Va(h / l)); v < h; )
            R[C++] = Fn(o, v, (v += l));
          return R;
        }
        function iC(o) {
          for (
            var l = -1, f = o == null ? 0 : o.length, h = 0, v = [];
            ++l < f;

          ) {
            var C = o[l];
            C && (v[h++] = C);
          }
          return v;
        }
        function oC() {
          var o = arguments.length;
          if (!o) return [];
          for (var l = B(o - 1), f = arguments[0], h = o; h--; )
            l[h - 1] = arguments[h];
          return oi(xe(f) ? Zt(f) : [f], Lt(l, 1));
        }
        var sC = Re(function (o, l) {
            return pt(o) ? rl(o, Lt(l, 1, pt, !0)) : [];
          }),
          lC = Re(function (o, l) {
            var f = Bn(l);
            return (
              pt(f) && (f = n), pt(o) ? rl(o, Lt(l, 1, pt, !0), pe(f, 2)) : []
            );
          }),
          aC = Re(function (o, l) {
            var f = Bn(l);
            return pt(f) && (f = n), pt(o) ? rl(o, Lt(l, 1, pt, !0), n, f) : [];
          });
        function uC(o, l, f) {
          var h = o == null ? 0 : o.length;
          return h
            ? ((l = f || l === n ? 1 : _e(l)), Fn(o, l < 0 ? 0 : l, h))
            : [];
        }
        function cC(o, l, f) {
          var h = o == null ? 0 : o.length;
          return h
            ? ((l = f || l === n ? 1 : _e(l)),
              (l = h - l),
              Fn(o, 0, l < 0 ? 0 : l))
            : [];
        }
        function fC(o, l) {
          return o && o.length ? tu(o, pe(l, 3), !0, !0) : [];
        }
        function dC(o, l) {
          return o && o.length ? tu(o, pe(l, 3), !0) : [];
        }
        function pC(o, l, f, h) {
          var v = o == null ? 0 : o.length;
          return v
            ? (f && typeof f != "number" && Vt(o, l, f) && ((f = 0), (h = v)),
              ob(o, l, f, h))
            : [];
        }
        function ev(o, l, f) {
          var h = o == null ? 0 : o.length;
          if (!h) return -1;
          var v = f == null ? 0 : _e(f);
          return v < 0 && (v = _t(h + v, 0)), Aa(o, pe(l, 3), v);
        }
        function tv(o, l, f) {
          var h = o == null ? 0 : o.length;
          if (!h) return -1;
          var v = h - 1;
          return (
            f !== n && ((v = _e(f)), (v = f < 0 ? _t(h + v, 0) : zt(v, h - 1))),
            Aa(o, pe(l, 3), v, !0)
          );
        }
        function nv(o) {
          var l = o == null ? 0 : o.length;
          return l ? Lt(o, 1) : [];
        }
        function hC(o) {
          var l = o == null ? 0 : o.length;
          return l ? Lt(o, Pe) : [];
        }
        function mC(o, l) {
          var f = o == null ? 0 : o.length;
          return f ? ((l = l === n ? 1 : _e(l)), Lt(o, l)) : [];
        }
        function gC(o) {
          for (var l = -1, f = o == null ? 0 : o.length, h = {}; ++l < f; ) {
            var v = o[l];
            h[v[0]] = v[1];
          }
          return h;
        }
        function rv(o) {
          return o && o.length ? o[0] : n;
        }
        function vC(o, l, f) {
          var h = o == null ? 0 : o.length;
          if (!h) return -1;
          var v = f == null ? 0 : _e(f);
          return v < 0 && (v = _t(h + v, 0)), Go(o, l, v);
        }
        function yC(o) {
          var l = o == null ? 0 : o.length;
          return l ? Fn(o, 0, -1) : [];
        }
        var wC = Re(function (o) {
            var l = nt(o, rd);
            return l.length && l[0] === o[0] ? Kf(l) : [];
          }),
          xC = Re(function (o) {
            var l = Bn(o),
              f = nt(o, rd);
            return (
              l === Bn(f) ? (l = n) : f.pop(),
              f.length && f[0] === o[0] ? Kf(f, pe(l, 2)) : []
            );
          }),
          SC = Re(function (o) {
            var l = Bn(o),
              f = nt(o, rd);
            return (
              (l = typeof l == "function" ? l : n),
              l && f.pop(),
              f.length && f[0] === o[0] ? Kf(f, n, l) : []
            );
          });
        function EC(o, l) {
          return o == null ? "" : y_.call(o, l);
        }
        function Bn(o) {
          var l = o == null ? 0 : o.length;
          return l ? o[l - 1] : n;
        }
        function _C(o, l, f) {
          var h = o == null ? 0 : o.length;
          if (!h) return -1;
          var v = h;
          return (
            f !== n && ((v = _e(f)), (v = v < 0 ? _t(h + v, 0) : zt(v, h - 1))),
            l === l ? n_(o, l, v) : Aa(o, jg, v, !0)
          );
        }
        function bC(o, l) {
          return o && o.length ? h0(o, _e(l)) : n;
        }
        var CC = Re(iv);
        function iv(o, l) {
          return o && o.length && l && l.length ? Xf(o, l) : o;
        }
        function TC(o, l, f) {
          return o && o.length && l && l.length ? Xf(o, l, pe(f, 2)) : o;
        }
        function PC(o, l, f) {
          return o && o.length && l && l.length ? Xf(o, l, n, f) : o;
        }
        var RC = Ar(function (o, l) {
          var f = o == null ? 0 : o.length,
            h = Wf(o, l);
          return (
            v0(
              o,
              nt(l, function (v) {
                return Ir(v, f) ? +v : v;
              }).sort(P0)
            ),
            h
          );
        });
        function NC(o, l) {
          var f = [];
          if (!(o && o.length)) return f;
          var h = -1,
            v = [],
            C = o.length;
          for (l = pe(l, 3); ++h < C; ) {
            var R = o[h];
            l(R, h, o) && (f.push(R), v.push(h));
          }
          return v0(o, v), f;
        }
        function vd(o) {
          return o == null ? o : E_.call(o);
        }
        function OC(o, l, f) {
          var h = o == null ? 0 : o.length;
          return h
            ? (f && typeof f != "number" && Vt(o, l, f)
                ? ((l = 0), (f = h))
                : ((l = l == null ? 0 : _e(l)), (f = f === n ? h : _e(f))),
              Fn(o, l, f))
            : [];
        }
        function LC(o, l) {
          return eu(o, l);
        }
        function kC(o, l, f) {
          return ed(o, l, pe(f, 2));
        }
        function MC(o, l) {
          var f = o == null ? 0 : o.length;
          if (f) {
            var h = eu(o, l);
            if (h < f && tr(o[h], l)) return h;
          }
          return -1;
        }
        function AC(o, l) {
          return eu(o, l, !0);
        }
        function IC(o, l, f) {
          return ed(o, l, pe(f, 2), !0);
        }
        function zC(o, l) {
          var f = o == null ? 0 : o.length;
          if (f) {
            var h = eu(o, l, !0) - 1;
            if (tr(o[h], l)) return h;
          }
          return -1;
        }
        function jC(o) {
          return o && o.length ? w0(o) : [];
        }
        function DC(o, l) {
          return o && o.length ? w0(o, pe(l, 2)) : [];
        }
        function FC(o) {
          var l = o == null ? 0 : o.length;
          return l ? Fn(o, 1, l) : [];
        }
        function BC(o, l, f) {
          return o && o.length
            ? ((l = f || l === n ? 1 : _e(l)), Fn(o, 0, l < 0 ? 0 : l))
            : [];
        }
        function UC(o, l, f) {
          var h = o == null ? 0 : o.length;
          return h
            ? ((l = f || l === n ? 1 : _e(l)),
              (l = h - l),
              Fn(o, l < 0 ? 0 : l, h))
            : [];
        }
        function $C(o, l) {
          return o && o.length ? tu(o, pe(l, 3), !1, !0) : [];
        }
        function WC(o, l) {
          return o && o.length ? tu(o, pe(l, 3)) : [];
        }
        var HC = Re(function (o) {
            return ui(Lt(o, 1, pt, !0));
          }),
          VC = Re(function (o) {
            var l = Bn(o);
            return pt(l) && (l = n), ui(Lt(o, 1, pt, !0), pe(l, 2));
          }),
          GC = Re(function (o) {
            var l = Bn(o);
            return (
              (l = typeof l == "function" ? l : n), ui(Lt(o, 1, pt, !0), n, l)
            );
          });
        function KC(o) {
          return o && o.length ? ui(o) : [];
        }
        function qC(o, l) {
          return o && o.length ? ui(o, pe(l, 2)) : [];
        }
        function YC(o, l) {
          return (
            (l = typeof l == "function" ? l : n),
            o && o.length ? ui(o, n, l) : []
          );
        }
        function yd(o) {
          if (!(o && o.length)) return [];
          var l = 0;
          return (
            (o = ii(o, function (f) {
              if (pt(f)) return (l = _t(f.length, l)), !0;
            })),
            If(l, function (f) {
              return nt(o, kf(f));
            })
          );
        }
        function ov(o, l) {
          if (!(o && o.length)) return [];
          var f = yd(o);
          return l == null
            ? f
            : nt(f, function (h) {
                return dn(l, n, h);
              });
        }
        var QC = Re(function (o, l) {
            return pt(o) ? rl(o, l) : [];
          }),
          XC = Re(function (o) {
            return nd(ii(o, pt));
          }),
          JC = Re(function (o) {
            var l = Bn(o);
            return pt(l) && (l = n), nd(ii(o, pt), pe(l, 2));
          }),
          ZC = Re(function (o) {
            var l = Bn(o);
            return (l = typeof l == "function" ? l : n), nd(ii(o, pt), n, l);
          }),
          eT = Re(yd);
        function tT(o, l) {
          return _0(o || [], l || [], nl);
        }
        function nT(o, l) {
          return _0(o || [], l || [], sl);
        }
        var rT = Re(function (o) {
          var l = o.length,
            f = l > 1 ? o[l - 1] : n;
          return (f = typeof f == "function" ? (o.pop(), f) : n), ov(o, f);
        });
        function sv(o) {
          var l = E(o);
          return (l.__chain__ = !0), l;
        }
        function iT(o, l) {
          return l(o), o;
        }
        function cu(o, l) {
          return l(o);
        }
        var oT = Ar(function (o) {
          var l = o.length,
            f = l ? o[0] : 0,
            h = this.__wrapped__,
            v = function (C) {
              return Wf(C, o);
            };
          return l > 1 ||
            this.__actions__.length ||
            !(h instanceof Le) ||
            !Ir(f)
            ? this.thru(v)
            : ((h = h.slice(f, +f + (l ? 1 : 0))),
              h.__actions__.push({ func: cu, args: [v], thisArg: n }),
              new jn(h, this.__chain__).thru(function (C) {
                return l && !C.length && C.push(n), C;
              }));
        });
        function sT() {
          return sv(this);
        }
        function lT() {
          return new jn(this.value(), this.__chain__);
        }
        function aT() {
          this.__values__ === n && (this.__values__ = xv(this.value()));
          var o = this.__index__ >= this.__values__.length,
            l = o ? n : this.__values__[this.__index__++];
          return { done: o, value: l };
        }
        function uT() {
          return this;
        }
        function cT(o) {
          for (var l, f = this; f instanceof Ya; ) {
            var h = Z0(f);
            (h.__index__ = 0),
              (h.__values__ = n),
              l ? (v.__wrapped__ = h) : (l = h);
            var v = h;
            f = f.__wrapped__;
          }
          return (v.__wrapped__ = o), l;
        }
        function fT() {
          var o = this.__wrapped__;
          if (o instanceof Le) {
            var l = o;
            return (
              this.__actions__.length && (l = new Le(this)),
              (l = l.reverse()),
              l.__actions__.push({ func: cu, args: [vd], thisArg: n }),
              new jn(l, this.__chain__)
            );
          }
          return this.thru(vd);
        }
        function dT() {
          return E0(this.__wrapped__, this.__actions__);
        }
        var pT = nu(function (o, l, f) {
          $e.call(o, f) ? ++o[f] : kr(o, f, 1);
        });
        function hT(o, l, f) {
          var h = xe(o) ? Ig : ib;
          return f && Vt(o, l, f) && (l = n), h(o, pe(l, 3));
        }
        function mT(o, l) {
          var f = xe(o) ? ii : o0;
          return f(o, pe(l, 3));
        }
        var gT = M0(ev),
          vT = M0(tv);
        function yT(o, l) {
          return Lt(fu(o, l), 1);
        }
        function wT(o, l) {
          return Lt(fu(o, l), Pe);
        }
        function xT(o, l, f) {
          return (f = f === n ? 1 : _e(f)), Lt(fu(o, l), f);
        }
        function lv(o, l) {
          var f = xe(o) ? In : ai;
          return f(o, pe(l, 3));
        }
        function av(o, l) {
          var f = xe(o) ? FE : i0;
          return f(o, pe(l, 3));
        }
        var ST = nu(function (o, l, f) {
          $e.call(o, f) ? o[f].push(l) : kr(o, f, [l]);
        });
        function ET(o, l, f, h) {
          (o = en(o) ? o : is(o)), (f = f && !h ? _e(f) : 0);
          var v = o.length;
          return (
            f < 0 && (f = _t(v + f, 0)),
            gu(o) ? f <= v && o.indexOf(l, f) > -1 : !!v && Go(o, l, f) > -1
          );
        }
        var _T = Re(function (o, l, f) {
            var h = -1,
              v = typeof l == "function",
              C = en(o) ? B(o.length) : [];
            return (
              ai(o, function (R) {
                C[++h] = v ? dn(l, R, f) : il(R, l, f);
              }),
              C
            );
          }),
          bT = nu(function (o, l, f) {
            kr(o, f, l);
          });
        function fu(o, l) {
          var f = xe(o) ? nt : f0;
          return f(o, pe(l, 3));
        }
        function CT(o, l, f, h) {
          return o == null
            ? []
            : (xe(l) || (l = l == null ? [] : [l]),
              (f = h ? n : f),
              xe(f) || (f = f == null ? [] : [f]),
              m0(o, l, f));
        }
        var TT = nu(
          function (o, l, f) {
            o[f ? 0 : 1].push(l);
          },
          function () {
            return [[], []];
          }
        );
        function PT(o, l, f) {
          var h = xe(o) ? Of : Fg,
            v = arguments.length < 3;
          return h(o, pe(l, 4), f, v, ai);
        }
        function RT(o, l, f) {
          var h = xe(o) ? BE : Fg,
            v = arguments.length < 3;
          return h(o, pe(l, 4), f, v, i0);
        }
        function NT(o, l) {
          var f = xe(o) ? ii : o0;
          return f(o, hu(pe(l, 3)));
        }
        function OT(o) {
          var l = xe(o) ? e0 : Eb;
          return l(o);
        }
        function LT(o, l, f) {
          (f ? Vt(o, l, f) : l === n) ? (l = 1) : (l = _e(l));
          var h = xe(o) ? Z_ : _b;
          return h(o, l);
        }
        function kT(o) {
          var l = xe(o) ? eb : Cb;
          return l(o);
        }
        function MT(o) {
          if (o == null) return 0;
          if (en(o)) return gu(o) ? qo(o) : o.length;
          var l = jt(o);
          return l == Jt || l == cn ? o.size : Yf(o).length;
        }
        function AT(o, l, f) {
          var h = xe(o) ? Lf : Tb;
          return f && Vt(o, l, f) && (l = n), h(o, pe(l, 3));
        }
        var IT = Re(function (o, l) {
            if (o == null) return [];
            var f = l.length;
            return (
              f > 1 && Vt(o, l[0], l[1])
                ? (l = [])
                : f > 2 && Vt(l[0], l[1], l[2]) && (l = [l[0]]),
              m0(o, Lt(l, 1), [])
            );
          }),
          du =
            m_ ||
            function () {
              return Ot.Date.now();
            };
        function zT(o, l) {
          if (typeof l != "function") throw new zn(a);
          return (
            (o = _e(o)),
            function () {
              if (--o < 1) return l.apply(this, arguments);
            }
          );
        }
        function uv(o, l, f) {
          return (
            (l = f ? n : l),
            (l = o && l == null ? o.length : l),
            Mr(o, H, n, n, n, n, l)
          );
        }
        function cv(o, l) {
          var f;
          if (typeof l != "function") throw new zn(a);
          return (
            (o = _e(o)),
            function () {
              return (
                --o > 0 && (f = l.apply(this, arguments)), o <= 1 && (l = n), f
              );
            }
          );
        }
        var wd = Re(function (o, l, f) {
            var h = O;
            if (f.length) {
              var v = si(f, ns(wd));
              h |= j;
            }
            return Mr(o, h, l, f, v);
          }),
          fv = Re(function (o, l, f) {
            var h = O | y;
            if (f.length) {
              var v = si(f, ns(fv));
              h |= j;
            }
            return Mr(l, h, o, f, v);
          });
        function dv(o, l, f) {
          l = f ? n : l;
          var h = Mr(o, w, n, n, n, n, n, l);
          return (h.placeholder = dv.placeholder), h;
        }
        function pv(o, l, f) {
          l = f ? n : l;
          var h = Mr(o, P, n, n, n, n, n, l);
          return (h.placeholder = pv.placeholder), h;
        }
        function hv(o, l, f) {
          var h,
            v,
            C,
            R,
            k,
            z,
            K = 0,
            q = !1,
            Y = !1,
            te = !0;
          if (typeof o != "function") throw new zn(a);
          (l = Un(l) || 0),
            it(f) &&
              ((q = !!f.leading),
              (Y = "maxWait" in f),
              (C = Y ? _t(Un(f.maxWait) || 0, l) : C),
              (te = "trailing" in f ? !!f.trailing : te));
          function ue(ht) {
            var nr = h,
              Dr = v;
            return (h = v = n), (K = ht), (R = o.apply(Dr, nr)), R;
          }
          function ge(ht) {
            return (K = ht), (k = ul(Ne, l)), q ? ue(ht) : R;
          }
          function Ce(ht) {
            var nr = ht - z,
              Dr = ht - K,
              Mv = l - nr;
            return Y ? zt(Mv, C - Dr) : Mv;
          }
          function ve(ht) {
            var nr = ht - z,
              Dr = ht - K;
            return z === n || nr >= l || nr < 0 || (Y && Dr >= C);
          }
          function Ne() {
            var ht = du();
            if (ve(ht)) return ke(ht);
            k = ul(Ne, Ce(ht));
          }
          function ke(ht) {
            return (k = n), te && h ? ue(ht) : ((h = v = n), R);
          }
          function gn() {
            k !== n && b0(k), (K = 0), (h = z = v = k = n);
          }
          function Gt() {
            return k === n ? R : ke(du());
          }
          function vn() {
            var ht = du(),
              nr = ve(ht);
            if (((h = arguments), (v = this), (z = ht), nr)) {
              if (k === n) return ge(z);
              if (Y) return b0(k), (k = ul(Ne, l)), ue(z);
            }
            return k === n && (k = ul(Ne, l)), R;
          }
          return (vn.cancel = gn), (vn.flush = Gt), vn;
        }
        var jT = Re(function (o, l) {
            return r0(o, 1, l);
          }),
          DT = Re(function (o, l, f) {
            return r0(o, Un(l) || 0, f);
          });
        function FT(o) {
          return Mr(o, V);
        }
        function pu(o, l) {
          if (typeof o != "function" || (l != null && typeof l != "function"))
            throw new zn(a);
          var f = function () {
            var h = arguments,
              v = l ? l.apply(this, h) : h[0],
              C = f.cache;
            if (C.has(v)) return C.get(v);
            var R = o.apply(this, h);
            return (f.cache = C.set(v, R) || C), R;
          };
          return (f.cache = new (pu.Cache || Lr)()), f;
        }
        pu.Cache = Lr;
        function hu(o) {
          if (typeof o != "function") throw new zn(a);
          return function () {
            var l = arguments;
            switch (l.length) {
              case 0:
                return !o.call(this);
              case 1:
                return !o.call(this, l[0]);
              case 2:
                return !o.call(this, l[0], l[1]);
              case 3:
                return !o.call(this, l[0], l[1], l[2]);
            }
            return !o.apply(this, l);
          };
        }
        function BT(o) {
          return cv(2, o);
        }
        var UT = Pb(function (o, l) {
            l =
              l.length == 1 && xe(l[0])
                ? nt(l[0], pn(pe()))
                : nt(Lt(l, 1), pn(pe()));
            var f = l.length;
            return Re(function (h) {
              for (var v = -1, C = zt(h.length, f); ++v < C; )
                h[v] = l[v].call(this, h[v]);
              return dn(o, this, h);
            });
          }),
          xd = Re(function (o, l) {
            var f = si(l, ns(xd));
            return Mr(o, j, n, l, f);
          }),
          mv = Re(function (o, l) {
            var f = si(l, ns(mv));
            return Mr(o, N, n, l, f);
          }),
          $T = Ar(function (o, l) {
            return Mr(o, D, n, n, n, l);
          });
        function WT(o, l) {
          if (typeof o != "function") throw new zn(a);
          return (l = l === n ? l : _e(l)), Re(o, l);
        }
        function HT(o, l) {
          if (typeof o != "function") throw new zn(a);
          return (
            (l = l == null ? 0 : _t(_e(l), 0)),
            Re(function (f) {
              var h = f[l],
                v = fi(f, 0, l);
              return h && oi(v, h), dn(o, this, v);
            })
          );
        }
        function VT(o, l, f) {
          var h = !0,
            v = !0;
          if (typeof o != "function") throw new zn(a);
          return (
            it(f) &&
              ((h = "leading" in f ? !!f.leading : h),
              (v = "trailing" in f ? !!f.trailing : v)),
            hv(o, l, { leading: h, maxWait: l, trailing: v })
          );
        }
        function GT(o) {
          return uv(o, 1);
        }
        function KT(o, l) {
          return xd(id(l), o);
        }
        function qT() {
          if (!arguments.length) return [];
          var o = arguments[0];
          return xe(o) ? o : [o];
        }
        function YT(o) {
          return Dn(o, _);
        }
        function QT(o, l) {
          return (l = typeof l == "function" ? l : n), Dn(o, _, l);
        }
        function XT(o) {
          return Dn(o, m | _);
        }
        function JT(o, l) {
          return (l = typeof l == "function" ? l : n), Dn(o, m | _, l);
        }
        function ZT(o, l) {
          return l == null || n0(o, l, Pt(l));
        }
        function tr(o, l) {
          return o === l || (o !== o && l !== l);
        }
        var eP = su(Gf),
          tP = su(function (o, l) {
            return o >= l;
          }),
          so = a0(
            (function () {
              return arguments;
            })()
          )
            ? a0
            : function (o) {
                return ft(o) && $e.call(o, "callee") && !qg.call(o, "callee");
              },
          xe = B.isArray,
          nP = Ng ? pn(Ng) : cb;
        function en(o) {
          return o != null && mu(o.length) && !zr(o);
        }
        function pt(o) {
          return ft(o) && en(o);
        }
        function rP(o) {
          return o === !0 || o === !1 || (ft(o) && Ht(o) == Tr);
        }
        var di = v_ || Ld,
          iP = Og ? pn(Og) : fb;
        function oP(o) {
          return ft(o) && o.nodeType === 1 && !cl(o);
        }
        function sP(o) {
          if (o == null) return !0;
          if (
            en(o) &&
            (xe(o) ||
              typeof o == "string" ||
              typeof o.splice == "function" ||
              di(o) ||
              rs(o) ||
              so(o))
          )
            return !o.length;
          var l = jt(o);
          if (l == Jt || l == cn) return !o.size;
          if (al(o)) return !Yf(o).length;
          for (var f in o) if ($e.call(o, f)) return !1;
          return !0;
        }
        function lP(o, l) {
          return ol(o, l);
        }
        function aP(o, l, f) {
          f = typeof f == "function" ? f : n;
          var h = f ? f(o, l) : n;
          return h === n ? ol(o, l, n, f) : !!h;
        }
        function Sd(o) {
          if (!ft(o)) return !1;
          var l = Ht(o);
          return (
            l == zo ||
            l == yf ||
            (typeof o.message == "string" &&
              typeof o.name == "string" &&
              !cl(o))
          );
        }
        function uP(o) {
          return typeof o == "number" && Qg(o);
        }
        function zr(o) {
          if (!it(o)) return !1;
          var l = Ht(o);
          return l == vt || l == Pr || l == ei || l == Ta;
        }
        function gv(o) {
          return typeof o == "number" && o == _e(o);
        }
        function mu(o) {
          return typeof o == "number" && o > -1 && o % 1 == 0 && o <= Z;
        }
        function it(o) {
          var l = typeof o;
          return o != null && (l == "object" || l == "function");
        }
        function ft(o) {
          return o != null && typeof o == "object";
        }
        var vv = Lg ? pn(Lg) : pb;
        function cP(o, l) {
          return o === l || qf(o, l, fd(l));
        }
        function fP(o, l, f) {
          return (f = typeof f == "function" ? f : n), qf(o, l, fd(l), f);
        }
        function dP(o) {
          return yv(o) && o != +o;
        }
        function pP(o) {
          if (Qb(o)) throw new ye(s);
          return u0(o);
        }
        function hP(o) {
          return o === null;
        }
        function mP(o) {
          return o == null;
        }
        function yv(o) {
          return typeof o == "number" || (ft(o) && Ht(o) == Hi);
        }
        function cl(o) {
          if (!ft(o) || Ht(o) != Qn) return !1;
          var l = $a(o);
          if (l === null) return !0;
          var f = $e.call(l, "constructor") && l.constructor;
          return typeof f == "function" && f instanceof f && Da.call(f) == f_;
        }
        var Ed = kg ? pn(kg) : hb;
        function gP(o) {
          return gv(o) && o >= -Z && o <= Z;
        }
        var wv = Mg ? pn(Mg) : mb;
        function gu(o) {
          return typeof o == "string" || (!xe(o) && ft(o) && Ht(o) == Gi);
        }
        function mn(o) {
          return typeof o == "symbol" || (ft(o) && Ht(o) == jo);
        }
        var rs = Ag ? pn(Ag) : gb;
        function vP(o) {
          return o === n;
        }
        function yP(o) {
          return ft(o) && jt(o) == Xn;
        }
        function wP(o) {
          return ft(o) && Ht(o) == Pa;
        }
        var xP = su(Qf),
          SP = su(function (o, l) {
            return o <= l;
          });
        function xv(o) {
          if (!o) return [];
          if (en(o)) return gu(o) ? Zn(o) : Zt(o);
          if (Xs && o[Xs]) return ZE(o[Xs]());
          var l = jt(o),
            f = l == Jt ? jf : l == cn ? Ia : is;
          return f(o);
        }
        function jr(o) {
          if (!o) return o === 0 ? o : 0;
          if (((o = Un(o)), o === Pe || o === -Pe)) {
            var l = o < 0 ? -1 : 1;
            return l * ne;
          }
          return o === o ? o : 0;
        }
        function _e(o) {
          var l = jr(o),
            f = l % 1;
          return l === l ? (f ? l - f : l) : 0;
        }
        function Sv(o) {
          return o ? no(_e(o), 0, he) : 0;
        }
        function Un(o) {
          if (typeof o == "number") return o;
          if (mn(o)) return le;
          if (it(o)) {
            var l = typeof o.valueOf == "function" ? o.valueOf() : o;
            o = it(l) ? l + "" : l;
          }
          if (typeof o != "string") return o === 0 ? o : +o;
          o = Bg(o);
          var f = je.test(o);
          return f || ze.test(o)
            ? zE(o.slice(2), f ? 2 : 8)
            : Fe.test(o)
            ? le
            : +o;
        }
        function Ev(o) {
          return yr(o, tn(o));
        }
        function EP(o) {
          return o ? no(_e(o), -Z, Z) : o === 0 ? o : 0;
        }
        function Be(o) {
          return o == null ? "" : hn(o);
        }
        var _P = es(function (o, l) {
            if (al(l) || en(l)) {
              yr(l, Pt(l), o);
              return;
            }
            for (var f in l) $e.call(l, f) && nl(o, f, l[f]);
          }),
          _v = es(function (o, l) {
            yr(l, tn(l), o);
          }),
          vu = es(function (o, l, f, h) {
            yr(l, tn(l), o, h);
          }),
          bP = es(function (o, l, f, h) {
            yr(l, Pt(l), o, h);
          }),
          CP = Ar(Wf);
        function TP(o, l) {
          var f = Zo(o);
          return l == null ? f : t0(f, l);
        }
        var PP = Re(function (o, l) {
            o = Ve(o);
            var f = -1,
              h = l.length,
              v = h > 2 ? l[2] : n;
            for (v && Vt(l[0], l[1], v) && (h = 1); ++f < h; )
              for (var C = l[f], R = tn(C), k = -1, z = R.length; ++k < z; ) {
                var K = R[k],
                  q = o[K];
                (q === n || (tr(q, Qo[K]) && !$e.call(o, K))) && (o[K] = C[K]);
              }
            return o;
          }),
          RP = Re(function (o) {
            return o.push(n, B0), dn(bv, n, o);
          });
        function NP(o, l) {
          return zg(o, pe(l, 3), vr);
        }
        function OP(o, l) {
          return zg(o, pe(l, 3), Vf);
        }
        function LP(o, l) {
          return o == null ? o : Hf(o, pe(l, 3), tn);
        }
        function kP(o, l) {
          return o == null ? o : s0(o, pe(l, 3), tn);
        }
        function MP(o, l) {
          return o && vr(o, pe(l, 3));
        }
        function AP(o, l) {
          return o && Vf(o, pe(l, 3));
        }
        function IP(o) {
          return o == null ? [] : Ja(o, Pt(o));
        }
        function zP(o) {
          return o == null ? [] : Ja(o, tn(o));
        }
        function _d(o, l, f) {
          var h = o == null ? n : ro(o, l);
          return h === n ? f : h;
        }
        function jP(o, l) {
          return o != null && W0(o, l, sb);
        }
        function bd(o, l) {
          return o != null && W0(o, l, lb);
        }
        var DP = I0(function (o, l, f) {
            l != null && typeof l.toString != "function" && (l = Fa.call(l)),
              (o[l] = f);
          }, Td(nn)),
          FP = I0(function (o, l, f) {
            l != null && typeof l.toString != "function" && (l = Fa.call(l)),
              $e.call(o, l) ? o[l].push(f) : (o[l] = [f]);
          }, pe),
          BP = Re(il);
        function Pt(o) {
          return en(o) ? Zg(o) : Yf(o);
        }
        function tn(o) {
          return en(o) ? Zg(o, !0) : vb(o);
        }
        function UP(o, l) {
          var f = {};
          return (
            (l = pe(l, 3)),
            vr(o, function (h, v, C) {
              kr(f, l(h, v, C), h);
            }),
            f
          );
        }
        function $P(o, l) {
          var f = {};
          return (
            (l = pe(l, 3)),
            vr(o, function (h, v, C) {
              kr(f, v, l(h, v, C));
            }),
            f
          );
        }
        var WP = es(function (o, l, f) {
            Za(o, l, f);
          }),
          bv = es(function (o, l, f, h) {
            Za(o, l, f, h);
          }),
          HP = Ar(function (o, l) {
            var f = {};
            if (o == null) return f;
            var h = !1;
            (l = nt(l, function (C) {
              return (C = ci(C, o)), h || (h = C.length > 1), C;
            })),
              yr(o, ud(o), f),
              h && (f = Dn(f, m | g | _, Db));
            for (var v = l.length; v--; ) td(f, l[v]);
            return f;
          });
        function VP(o, l) {
          return Cv(o, hu(pe(l)));
        }
        var GP = Ar(function (o, l) {
          return o == null ? {} : wb(o, l);
        });
        function Cv(o, l) {
          if (o == null) return {};
          var f = nt(ud(o), function (h) {
            return [h];
          });
          return (
            (l = pe(l)),
            g0(o, f, function (h, v) {
              return l(h, v[0]);
            })
          );
        }
        function KP(o, l, f) {
          l = ci(l, o);
          var h = -1,
            v = l.length;
          for (v || ((v = 1), (o = n)); ++h < v; ) {
            var C = o == null ? n : o[wr(l[h])];
            C === n && ((h = v), (C = f)), (o = zr(C) ? C.call(o) : C);
          }
          return o;
        }
        function qP(o, l, f) {
          return o == null ? o : sl(o, l, f);
        }
        function YP(o, l, f, h) {
          return (
            (h = typeof h == "function" ? h : n), o == null ? o : sl(o, l, f, h)
          );
        }
        var Tv = D0(Pt),
          Pv = D0(tn);
        function QP(o, l, f) {
          var h = xe(o),
            v = h || di(o) || rs(o);
          if (((l = pe(l, 4)), f == null)) {
            var C = o && o.constructor;
            v
              ? (f = h ? new C() : [])
              : it(o)
              ? (f = zr(C) ? Zo($a(o)) : {})
              : (f = {});
          }
          return (
            (v ? In : vr)(o, function (R, k, z) {
              return l(f, R, k, z);
            }),
            f
          );
        }
        function XP(o, l) {
          return o == null ? !0 : td(o, l);
        }
        function JP(o, l, f) {
          return o == null ? o : S0(o, l, id(f));
        }
        function ZP(o, l, f, h) {
          return (
            (h = typeof h == "function" ? h : n),
            o == null ? o : S0(o, l, id(f), h)
          );
        }
        function is(o) {
          return o == null ? [] : zf(o, Pt(o));
        }
        function e4(o) {
          return o == null ? [] : zf(o, tn(o));
        }
        function t4(o, l, f) {
          return (
            f === n && ((f = l), (l = n)),
            f !== n && ((f = Un(f)), (f = f === f ? f : 0)),
            l !== n && ((l = Un(l)), (l = l === l ? l : 0)),
            no(Un(o), l, f)
          );
        }
        function n4(o, l, f) {
          return (
            (l = jr(l)),
            f === n ? ((f = l), (l = 0)) : (f = jr(f)),
            (o = Un(o)),
            ab(o, l, f)
          );
        }
        function r4(o, l, f) {
          if (
            (f && typeof f != "boolean" && Vt(o, l, f) && (l = f = n),
            f === n &&
              (typeof l == "boolean"
                ? ((f = l), (l = n))
                : typeof o == "boolean" && ((f = o), (o = n))),
            o === n && l === n
              ? ((o = 0), (l = 1))
              : ((o = jr(o)), l === n ? ((l = o), (o = 0)) : (l = jr(l))),
            o > l)
          ) {
            var h = o;
            (o = l), (l = h);
          }
          if (f || o % 1 || l % 1) {
            var v = Xg();
            return zt(o + v * (l - o + IE("1e-" + ((v + "").length - 1))), l);
          }
          return Jf(o, l);
        }
        var i4 = ts(function (o, l, f) {
          return (l = l.toLowerCase()), o + (f ? Rv(l) : l);
        });
        function Rv(o) {
          return Cd(Be(o).toLowerCase());
        }
        function Nv(o) {
          return (o = Be(o)), o && o.replace(ct, qE).replace(CE, "");
        }
        function o4(o, l, f) {
          (o = Be(o)), (l = hn(l));
          var h = o.length;
          f = f === n ? h : no(_e(f), 0, h);
          var v = f;
          return (f -= l.length), f >= 0 && o.slice(f, v) == l;
        }
        function s4(o) {
          return (o = Be(o)), o && wf.test(o) ? o.replace(qi, YE) : o;
        }
        function l4(o) {
          return (o = Be(o)), o && M.test(o) ? o.replace(qs, "\\$&") : o;
        }
        var a4 = ts(function (o, l, f) {
            return o + (f ? "-" : "") + l.toLowerCase();
          }),
          u4 = ts(function (o, l, f) {
            return o + (f ? " " : "") + l.toLowerCase();
          }),
          c4 = k0("toLowerCase");
        function f4(o, l, f) {
          (o = Be(o)), (l = _e(l));
          var h = l ? qo(o) : 0;
          if (!l || h >= l) return o;
          var v = (l - h) / 2;
          return ou(Ga(v), f) + o + ou(Va(v), f);
        }
        function d4(o, l, f) {
          (o = Be(o)), (l = _e(l));
          var h = l ? qo(o) : 0;
          return l && h < l ? o + ou(l - h, f) : o;
        }
        function p4(o, l, f) {
          (o = Be(o)), (l = _e(l));
          var h = l ? qo(o) : 0;
          return l && h < l ? ou(l - h, f) + o : o;
        }
        function h4(o, l, f) {
          return (
            f || l == null ? (l = 0) : l && (l = +l),
            S_(Be(o).replace(I, ""), l || 0)
          );
        }
        function m4(o, l, f) {
          return (
            (f ? Vt(o, l, f) : l === n) ? (l = 1) : (l = _e(l)), Zf(Be(o), l)
          );
        }
        function g4() {
          var o = arguments,
            l = Be(o[0]);
          return o.length < 3 ? l : l.replace(o[1], o[2]);
        }
        var v4 = ts(function (o, l, f) {
          return o + (f ? "_" : "") + l.toLowerCase();
        });
        function y4(o, l, f) {
          return (
            f && typeof f != "number" && Vt(o, l, f) && (l = f = n),
            (f = f === n ? he : f >>> 0),
            f
              ? ((o = Be(o)),
                o &&
                (typeof l == "string" || (l != null && !Ed(l))) &&
                ((l = hn(l)), !l && Ko(o))
                  ? fi(Zn(o), 0, f)
                  : o.split(l, f))
              : []
          );
        }
        var w4 = ts(function (o, l, f) {
          return o + (f ? " " : "") + Cd(l);
        });
        function x4(o, l, f) {
          return (
            (o = Be(o)),
            (f = f == null ? 0 : no(_e(f), 0, o.length)),
            (l = hn(l)),
            o.slice(f, f + l.length) == l
          );
        }
        function S4(o, l, f) {
          var h = E.templateSettings;
          f && Vt(o, l, f) && (l = n), (o = Be(o)), (l = vu({}, l, h, F0));
          var v = vu({}, l.imports, h.imports, F0),
            C = Pt(v),
            R = zf(v, C),
            k,
            z,
            K = 0,
            q = l.interpolate || mr,
            Y = "__p += '",
            te = Df(
              (l.escape || mr).source +
                "|" +
                q.source +
                "|" +
                (q === Gs ? fe : mr).source +
                "|" +
                (l.evaluate || mr).source +
                "|$",
              "g"
            ),
            ue =
              "//# sourceURL=" +
              ($e.call(l, "sourceURL")
                ? (l.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++OE + "]") +
              `
`;
          o.replace(te, function (ve, Ne, ke, gn, Gt, vn) {
            return (
              ke || (ke = gn),
              (Y += o.slice(K, vn).replace(gr, QE)),
              Ne &&
                ((k = !0),
                (Y +=
                  `' +
__e(` +
                  Ne +
                  `) +
'`)),
              Gt &&
                ((z = !0),
                (Y +=
                  `';
` +
                  Gt +
                  `;
__p += '`)),
              ke &&
                (Y +=
                  `' +
((__t = (` +
                  ke +
                  `)) == null ? '' : __t) +
'`),
              (K = vn + ve.length),
              ve
            );
          }),
            (Y += `';
`);
          var ge = $e.call(l, "variable") && l.variable;
          if (!ge)
            Y =
              `with (obj) {
` +
              Y +
              `
}
`;
          else if (ee.test(ge)) throw new ye(u);
          (Y = (z ? Y.replace(Ra, "") : Y)
            .replace($o, "$1")
            .replace(Na, "$1;")),
            (Y =
              "function(" +
              (ge || "obj") +
              `) {
` +
              (ge
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (k ? ", __e = _.escape" : "") +
              (z
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              Y +
              `return __p
}`);
          var Ce = Lv(function () {
            return De(C, ue + "return " + Y).apply(n, R);
          });
          if (((Ce.source = Y), Sd(Ce))) throw Ce;
          return Ce;
        }
        function E4(o) {
          return Be(o).toLowerCase();
        }
        function _4(o) {
          return Be(o).toUpperCase();
        }
        function b4(o, l, f) {
          if (((o = Be(o)), o && (f || l === n))) return Bg(o);
          if (!o || !(l = hn(l))) return o;
          var h = Zn(o),
            v = Zn(l),
            C = Ug(h, v),
            R = $g(h, v) + 1;
          return fi(h, C, R).join("");
        }
        function C4(o, l, f) {
          if (((o = Be(o)), o && (f || l === n))) return o.slice(0, Hg(o) + 1);
          if (!o || !(l = hn(l))) return o;
          var h = Zn(o),
            v = $g(h, Zn(l)) + 1;
          return fi(h, 0, v).join("");
        }
        function T4(o, l, f) {
          if (((o = Be(o)), o && (f || l === n))) return o.replace(I, "");
          if (!o || !(l = hn(l))) return o;
          var h = Zn(o),
            v = Ug(h, Zn(l));
          return fi(h, v).join("");
        }
        function P4(o, l) {
          var f = U,
            h = J;
          if (it(l)) {
            var v = "separator" in l ? l.separator : v;
            (f = "length" in l ? _e(l.length) : f),
              (h = "omission" in l ? hn(l.omission) : h);
          }
          o = Be(o);
          var C = o.length;
          if (Ko(o)) {
            var R = Zn(o);
            C = R.length;
          }
          if (f >= C) return o;
          var k = f - qo(h);
          if (k < 1) return h;
          var z = R ? fi(R, 0, k).join("") : o.slice(0, k);
          if (v === n) return z + h;
          if ((R && (k += z.length - k), Ed(v))) {
            if (o.slice(k).search(v)) {
              var K,
                q = z;
              for (
                v.global || (v = Df(v.source, Be(de.exec(v)) + "g")),
                  v.lastIndex = 0;
                (K = v.exec(q));

              )
                var Y = K.index;
              z = z.slice(0, Y === n ? k : Y);
            }
          } else if (o.indexOf(hn(v), k) != k) {
            var te = z.lastIndexOf(v);
            te > -1 && (z = z.slice(0, te));
          }
          return z + h;
        }
        function R4(o) {
          return (o = Be(o)), o && Vs.test(o) ? o.replace(Wo, r_) : o;
        }
        var N4 = ts(function (o, l, f) {
            return o + (f ? " " : "") + l.toUpperCase();
          }),
          Cd = k0("toUpperCase");
        function Ov(o, l, f) {
          return (
            (o = Be(o)),
            (l = f ? n : l),
            l === n ? (JE(o) ? s_(o) : WE(o)) : o.match(l) || []
          );
        }
        var Lv = Re(function (o, l) {
            try {
              return dn(o, n, l);
            } catch (f) {
              return Sd(f) ? f : new ye(f);
            }
          }),
          O4 = Ar(function (o, l) {
            return (
              In(l, function (f) {
                (f = wr(f)), kr(o, f, wd(o[f], o));
              }),
              o
            );
          });
        function L4(o) {
          var l = o == null ? 0 : o.length,
            f = pe();
          return (
            (o = l
              ? nt(o, function (h) {
                  if (typeof h[1] != "function") throw new zn(a);
                  return [f(h[0]), h[1]];
                })
              : []),
            Re(function (h) {
              for (var v = -1; ++v < l; ) {
                var C = o[v];
                if (dn(C[0], this, h)) return dn(C[1], this, h);
              }
            })
          );
        }
        function k4(o) {
          return rb(Dn(o, m));
        }
        function Td(o) {
          return function () {
            return o;
          };
        }
        function M4(o, l) {
          return o == null || o !== o ? l : o;
        }
        var A4 = A0(),
          I4 = A0(!0);
        function nn(o) {
          return o;
        }
        function Pd(o) {
          return c0(typeof o == "function" ? o : Dn(o, m));
        }
        function z4(o) {
          return d0(Dn(o, m));
        }
        function j4(o, l) {
          return p0(o, Dn(l, m));
        }
        var D4 = Re(function (o, l) {
            return function (f) {
              return il(f, o, l);
            };
          }),
          F4 = Re(function (o, l) {
            return function (f) {
              return il(o, f, l);
            };
          });
        function Rd(o, l, f) {
          var h = Pt(l),
            v = Ja(l, h);
          f == null &&
            !(it(l) && (v.length || !h.length)) &&
            ((f = l), (l = o), (o = this), (v = Ja(l, Pt(l))));
          var C = !(it(f) && "chain" in f) || !!f.chain,
            R = zr(o);
          return (
            In(v, function (k) {
              var z = l[k];
              (o[k] = z),
                R &&
                  (o.prototype[k] = function () {
                    var K = this.__chain__;
                    if (C || K) {
                      var q = o(this.__wrapped__),
                        Y = (q.__actions__ = Zt(this.__actions__));
                      return (
                        Y.push({ func: z, args: arguments, thisArg: o }),
                        (q.__chain__ = K),
                        q
                      );
                    }
                    return z.apply(o, oi([this.value()], arguments));
                  });
            }),
            o
          );
        }
        function B4() {
          return Ot._ === this && (Ot._ = d_), this;
        }
        function Nd() {}
        function U4(o) {
          return (
            (o = _e(o)),
            Re(function (l) {
              return h0(l, o);
            })
          );
        }
        var $4 = sd(nt),
          W4 = sd(Ig),
          H4 = sd(Lf);
        function kv(o) {
          return pd(o) ? kf(wr(o)) : xb(o);
        }
        function V4(o) {
          return function (l) {
            return o == null ? n : ro(o, l);
          };
        }
        var G4 = z0(),
          K4 = z0(!0);
        function Od() {
          return [];
        }
        function Ld() {
          return !1;
        }
        function q4() {
          return {};
        }
        function Y4() {
          return "";
        }
        function Q4() {
          return !0;
        }
        function X4(o, l) {
          if (((o = _e(o)), o < 1 || o > Z)) return [];
          var f = he,
            h = zt(o, he);
          (l = pe(l)), (o -= he);
          for (var v = If(h, l); ++f < o; ) l(f);
          return v;
        }
        function J4(o) {
          return xe(o) ? nt(o, wr) : mn(o) ? [o] : Zt(J0(Be(o)));
        }
        function Z4(o) {
          var l = ++c_;
          return Be(o) + l;
        }
        var eR = iu(function (o, l) {
            return o + l;
          }, 0),
          tR = ld("ceil"),
          nR = iu(function (o, l) {
            return o / l;
          }, 1),
          rR = ld("floor");
        function iR(o) {
          return o && o.length ? Xa(o, nn, Gf) : n;
        }
        function oR(o, l) {
          return o && o.length ? Xa(o, pe(l, 2), Gf) : n;
        }
        function sR(o) {
          return Dg(o, nn);
        }
        function lR(o, l) {
          return Dg(o, pe(l, 2));
        }
        function aR(o) {
          return o && o.length ? Xa(o, nn, Qf) : n;
        }
        function uR(o, l) {
          return o && o.length ? Xa(o, pe(l, 2), Qf) : n;
        }
        var cR = iu(function (o, l) {
            return o * l;
          }, 1),
          fR = ld("round"),
          dR = iu(function (o, l) {
            return o - l;
          }, 0);
        function pR(o) {
          return o && o.length ? Af(o, nn) : 0;
        }
        function hR(o, l) {
          return o && o.length ? Af(o, pe(l, 2)) : 0;
        }
        return (
          (E.after = zT),
          (E.ary = uv),
          (E.assign = _P),
          (E.assignIn = _v),
          (E.assignInWith = vu),
          (E.assignWith = bP),
          (E.at = CP),
          (E.before = cv),
          (E.bind = wd),
          (E.bindAll = O4),
          (E.bindKey = fv),
          (E.castArray = qT),
          (E.chain = sv),
          (E.chunk = rC),
          (E.compact = iC),
          (E.concat = oC),
          (E.cond = L4),
          (E.conforms = k4),
          (E.constant = Td),
          (E.countBy = pT),
          (E.create = TP),
          (E.curry = dv),
          (E.curryRight = pv),
          (E.debounce = hv),
          (E.defaults = PP),
          (E.defaultsDeep = RP),
          (E.defer = jT),
          (E.delay = DT),
          (E.difference = sC),
          (E.differenceBy = lC),
          (E.differenceWith = aC),
          (E.drop = uC),
          (E.dropRight = cC),
          (E.dropRightWhile = fC),
          (E.dropWhile = dC),
          (E.fill = pC),
          (E.filter = mT),
          (E.flatMap = yT),
          (E.flatMapDeep = wT),
          (E.flatMapDepth = xT),
          (E.flatten = nv),
          (E.flattenDeep = hC),
          (E.flattenDepth = mC),
          (E.flip = FT),
          (E.flow = A4),
          (E.flowRight = I4),
          (E.fromPairs = gC),
          (E.functions = IP),
          (E.functionsIn = zP),
          (E.groupBy = ST),
          (E.initial = yC),
          (E.intersection = wC),
          (E.intersectionBy = xC),
          (E.intersectionWith = SC),
          (E.invert = DP),
          (E.invertBy = FP),
          (E.invokeMap = _T),
          (E.iteratee = Pd),
          (E.keyBy = bT),
          (E.keys = Pt),
          (E.keysIn = tn),
          (E.map = fu),
          (E.mapKeys = UP),
          (E.mapValues = $P),
          (E.matches = z4),
          (E.matchesProperty = j4),
          (E.memoize = pu),
          (E.merge = WP),
          (E.mergeWith = bv),
          (E.method = D4),
          (E.methodOf = F4),
          (E.mixin = Rd),
          (E.negate = hu),
          (E.nthArg = U4),
          (E.omit = HP),
          (E.omitBy = VP),
          (E.once = BT),
          (E.orderBy = CT),
          (E.over = $4),
          (E.overArgs = UT),
          (E.overEvery = W4),
          (E.overSome = H4),
          (E.partial = xd),
          (E.partialRight = mv),
          (E.partition = TT),
          (E.pick = GP),
          (E.pickBy = Cv),
          (E.property = kv),
          (E.propertyOf = V4),
          (E.pull = CC),
          (E.pullAll = iv),
          (E.pullAllBy = TC),
          (E.pullAllWith = PC),
          (E.pullAt = RC),
          (E.range = G4),
          (E.rangeRight = K4),
          (E.rearg = $T),
          (E.reject = NT),
          (E.remove = NC),
          (E.rest = WT),
          (E.reverse = vd),
          (E.sampleSize = LT),
          (E.set = qP),
          (E.setWith = YP),
          (E.shuffle = kT),
          (E.slice = OC),
          (E.sortBy = IT),
          (E.sortedUniq = jC),
          (E.sortedUniqBy = DC),
          (E.split = y4),
          (E.spread = HT),
          (E.tail = FC),
          (E.take = BC),
          (E.takeRight = UC),
          (E.takeRightWhile = $C),
          (E.takeWhile = WC),
          (E.tap = iT),
          (E.throttle = VT),
          (E.thru = cu),
          (E.toArray = xv),
          (E.toPairs = Tv),
          (E.toPairsIn = Pv),
          (E.toPath = J4),
          (E.toPlainObject = Ev),
          (E.transform = QP),
          (E.unary = GT),
          (E.union = HC),
          (E.unionBy = VC),
          (E.unionWith = GC),
          (E.uniq = KC),
          (E.uniqBy = qC),
          (E.uniqWith = YC),
          (E.unset = XP),
          (E.unzip = yd),
          (E.unzipWith = ov),
          (E.update = JP),
          (E.updateWith = ZP),
          (E.values = is),
          (E.valuesIn = e4),
          (E.without = QC),
          (E.words = Ov),
          (E.wrap = KT),
          (E.xor = XC),
          (E.xorBy = JC),
          (E.xorWith = ZC),
          (E.zip = eT),
          (E.zipObject = tT),
          (E.zipObjectDeep = nT),
          (E.zipWith = rT),
          (E.entries = Tv),
          (E.entriesIn = Pv),
          (E.extend = _v),
          (E.extendWith = vu),
          Rd(E, E),
          (E.add = eR),
          (E.attempt = Lv),
          (E.camelCase = i4),
          (E.capitalize = Rv),
          (E.ceil = tR),
          (E.clamp = t4),
          (E.clone = YT),
          (E.cloneDeep = XT),
          (E.cloneDeepWith = JT),
          (E.cloneWith = QT),
          (E.conformsTo = ZT),
          (E.deburr = Nv),
          (E.defaultTo = M4),
          (E.divide = nR),
          (E.endsWith = o4),
          (E.eq = tr),
          (E.escape = s4),
          (E.escapeRegExp = l4),
          (E.every = hT),
          (E.find = gT),
          (E.findIndex = ev),
          (E.findKey = NP),
          (E.findLast = vT),
          (E.findLastIndex = tv),
          (E.findLastKey = OP),
          (E.floor = rR),
          (E.forEach = lv),
          (E.forEachRight = av),
          (E.forIn = LP),
          (E.forInRight = kP),
          (E.forOwn = MP),
          (E.forOwnRight = AP),
          (E.get = _d),
          (E.gt = eP),
          (E.gte = tP),
          (E.has = jP),
          (E.hasIn = bd),
          (E.head = rv),
          (E.identity = nn),
          (E.includes = ET),
          (E.indexOf = vC),
          (E.inRange = n4),
          (E.invoke = BP),
          (E.isArguments = so),
          (E.isArray = xe),
          (E.isArrayBuffer = nP),
          (E.isArrayLike = en),
          (E.isArrayLikeObject = pt),
          (E.isBoolean = rP),
          (E.isBuffer = di),
          (E.isDate = iP),
          (E.isElement = oP),
          (E.isEmpty = sP),
          (E.isEqual = lP),
          (E.isEqualWith = aP),
          (E.isError = Sd),
          (E.isFinite = uP),
          (E.isFunction = zr),
          (E.isInteger = gv),
          (E.isLength = mu),
          (E.isMap = vv),
          (E.isMatch = cP),
          (E.isMatchWith = fP),
          (E.isNaN = dP),
          (E.isNative = pP),
          (E.isNil = mP),
          (E.isNull = hP),
          (E.isNumber = yv),
          (E.isObject = it),
          (E.isObjectLike = ft),
          (E.isPlainObject = cl),
          (E.isRegExp = Ed),
          (E.isSafeInteger = gP),
          (E.isSet = wv),
          (E.isString = gu),
          (E.isSymbol = mn),
          (E.isTypedArray = rs),
          (E.isUndefined = vP),
          (E.isWeakMap = yP),
          (E.isWeakSet = wP),
          (E.join = EC),
          (E.kebabCase = a4),
          (E.last = Bn),
          (E.lastIndexOf = _C),
          (E.lowerCase = u4),
          (E.lowerFirst = c4),
          (E.lt = xP),
          (E.lte = SP),
          (E.max = iR),
          (E.maxBy = oR),
          (E.mean = sR),
          (E.meanBy = lR),
          (E.min = aR),
          (E.minBy = uR),
          (E.stubArray = Od),
          (E.stubFalse = Ld),
          (E.stubObject = q4),
          (E.stubString = Y4),
          (E.stubTrue = Q4),
          (E.multiply = cR),
          (E.nth = bC),
          (E.noConflict = B4),
          (E.noop = Nd),
          (E.now = du),
          (E.pad = f4),
          (E.padEnd = d4),
          (E.padStart = p4),
          (E.parseInt = h4),
          (E.random = r4),
          (E.reduce = PT),
          (E.reduceRight = RT),
          (E.repeat = m4),
          (E.replace = g4),
          (E.result = KP),
          (E.round = fR),
          (E.runInContext = A),
          (E.sample = OT),
          (E.size = MT),
          (E.snakeCase = v4),
          (E.some = AT),
          (E.sortedIndex = LC),
          (E.sortedIndexBy = kC),
          (E.sortedIndexOf = MC),
          (E.sortedLastIndex = AC),
          (E.sortedLastIndexBy = IC),
          (E.sortedLastIndexOf = zC),
          (E.startCase = w4),
          (E.startsWith = x4),
          (E.subtract = dR),
          (E.sum = pR),
          (E.sumBy = hR),
          (E.template = S4),
          (E.times = X4),
          (E.toFinite = jr),
          (E.toInteger = _e),
          (E.toLength = Sv),
          (E.toLower = E4),
          (E.toNumber = Un),
          (E.toSafeInteger = EP),
          (E.toString = Be),
          (E.toUpper = _4),
          (E.trim = b4),
          (E.trimEnd = C4),
          (E.trimStart = T4),
          (E.truncate = P4),
          (E.unescape = R4),
          (E.uniqueId = Z4),
          (E.upperCase = N4),
          (E.upperFirst = Cd),
          (E.each = lv),
          (E.eachRight = av),
          (E.first = rv),
          Rd(
            E,
            (function () {
              var o = {};
              return (
                vr(E, function (l, f) {
                  $e.call(E.prototype, f) || (o[f] = l);
                }),
                o
              );
            })(),
            { chain: !1 }
          ),
          (E.VERSION = r),
          In(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (o) {
              E[o].placeholder = E;
            }
          ),
          In(["drop", "take"], function (o, l) {
            (Le.prototype[o] = function (f) {
              f = f === n ? 1 : _t(_e(f), 0);
              var h = this.__filtered__ && !l ? new Le(this) : this.clone();
              return (
                h.__filtered__
                  ? (h.__takeCount__ = zt(f, h.__takeCount__))
                  : h.__views__.push({
                      size: zt(f, he),
                      type: o + (h.__dir__ < 0 ? "Right" : ""),
                    }),
                h
              );
            }),
              (Le.prototype[o + "Right"] = function (f) {
                return this.reverse()[o](f).reverse();
              });
          }),
          In(["filter", "map", "takeWhile"], function (o, l) {
            var f = l + 1,
              h = f == ae || f == Ge;
            Le.prototype[o] = function (v) {
              var C = this.clone();
              return (
                C.__iteratees__.push({ iteratee: pe(v, 3), type: f }),
                (C.__filtered__ = C.__filtered__ || h),
                C
              );
            };
          }),
          In(["head", "last"], function (o, l) {
            var f = "take" + (l ? "Right" : "");
            Le.prototype[o] = function () {
              return this[f](1).value()[0];
            };
          }),
          In(["initial", "tail"], function (o, l) {
            var f = "drop" + (l ? "" : "Right");
            Le.prototype[o] = function () {
              return this.__filtered__ ? new Le(this) : this[f](1);
            };
          }),
          (Le.prototype.compact = function () {
            return this.filter(nn);
          }),
          (Le.prototype.find = function (o) {
            return this.filter(o).head();
          }),
          (Le.prototype.findLast = function (o) {
            return this.reverse().find(o);
          }),
          (Le.prototype.invokeMap = Re(function (o, l) {
            return typeof o == "function"
              ? new Le(this)
              : this.map(function (f) {
                  return il(f, o, l);
                });
          })),
          (Le.prototype.reject = function (o) {
            return this.filter(hu(pe(o)));
          }),
          (Le.prototype.slice = function (o, l) {
            o = _e(o);
            var f = this;
            return f.__filtered__ && (o > 0 || l < 0)
              ? new Le(f)
              : (o < 0 ? (f = f.takeRight(-o)) : o && (f = f.drop(o)),
                l !== n &&
                  ((l = _e(l)), (f = l < 0 ? f.dropRight(-l) : f.take(l - o))),
                f);
          }),
          (Le.prototype.takeRightWhile = function (o) {
            return this.reverse().takeWhile(o).reverse();
          }),
          (Le.prototype.toArray = function () {
            return this.take(he);
          }),
          vr(Le.prototype, function (o, l) {
            var f = /^(?:filter|find|map|reject)|While$/.test(l),
              h = /^(?:head|last)$/.test(l),
              v = E[h ? "take" + (l == "last" ? "Right" : "") : l],
              C = h || /^find/.test(l);
            v &&
              (E.prototype[l] = function () {
                var R = this.__wrapped__,
                  k = h ? [1] : arguments,
                  z = R instanceof Le,
                  K = k[0],
                  q = z || xe(R),
                  Y = function (Ne) {
                    var ke = v.apply(E, oi([Ne], k));
                    return h && te ? ke[0] : ke;
                  };
                q &&
                  f &&
                  typeof K == "function" &&
                  K.length != 1 &&
                  (z = q = !1);
                var te = this.__chain__,
                  ue = !!this.__actions__.length,
                  ge = C && !te,
                  Ce = z && !ue;
                if (!C && q) {
                  R = Ce ? R : new Le(this);
                  var ve = o.apply(R, k);
                  return (
                    ve.__actions__.push({ func: cu, args: [Y], thisArg: n }),
                    new jn(ve, te)
                  );
                }
                return ge && Ce
                  ? o.apply(this, k)
                  : ((ve = this.thru(Y)),
                    ge ? (h ? ve.value()[0] : ve.value()) : ve);
              });
          }),
          In(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (o) {
              var l = za[o],
                f = /^(?:push|sort|unshift)$/.test(o) ? "tap" : "thru",
                h = /^(?:pop|shift)$/.test(o);
              E.prototype[o] = function () {
                var v = arguments;
                if (h && !this.__chain__) {
                  var C = this.value();
                  return l.apply(xe(C) ? C : [], v);
                }
                return this[f](function (R) {
                  return l.apply(xe(R) ? R : [], v);
                });
              };
            }
          ),
          vr(Le.prototype, function (o, l) {
            var f = E[l];
            if (f) {
              var h = f.name + "";
              $e.call(Jo, h) || (Jo[h] = []), Jo[h].push({ name: l, func: f });
            }
          }),
          (Jo[ru(n, y).name] = [{ name: "wrapper", func: n }]),
          (Le.prototype.clone = R_),
          (Le.prototype.reverse = N_),
          (Le.prototype.value = O_),
          (E.prototype.at = oT),
          (E.prototype.chain = sT),
          (E.prototype.commit = lT),
          (E.prototype.next = aT),
          (E.prototype.plant = cT),
          (E.prototype.reverse = fT),
          (E.prototype.toJSON = E.prototype.valueOf = E.prototype.value = dT),
          (E.prototype.first = E.prototype.head),
          Xs && (E.prototype[Xs] = uT),
          E
        );
      },
      Yo = l_();
    Ji ? (((Ji.exports = Yo)._ = Yo), (Pf._ = Yo)) : (Ot._ = Yo);
  }).call(fl);
})(Uc, Uc.exports);
var n5 = Uc.exports;
const dg = Hh(n5);
function r5(e, t) {
  const [n, r] = L.useState(!0),
    [i, s] = L.useState([]),
    a = async () => {
      const c = (await ut.get(e)).data,
        d = dg.chunk(c, t);
      console.log(d), s(d), r(!1);
    };
  return (
    L.useEffect(() => {
      a();
    }, [e, t]),
    [n, i]
  );
}
/**
 * @license lucide-react v0.412.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const i5 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  JS = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.412.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var o5 = {
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
/**
 * @license lucide-react v0.412.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const s5 = L.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = "",
      children: s,
      iconNode: a,
      ...u
    },
    c
  ) =>
    L.createElement(
      "svg",
      {
        ref: c,
        ...o5,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: JS("lucide", i),
        ...u,
      },
      [
        ...a.map(([d, p]) => L.createElement(d, p)),
        ...(Array.isArray(s) ? s : [s]),
      ]
    )
);
/**
 * @license lucide-react v0.412.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pg = (e, t) => {
  const n = L.forwardRef(({ className: r, ...i }, s) =>
    L.createElement(s5, {
      ref: s,
      iconNode: t,
      className: JS(`lucide-${i5(e)}`, r),
      ...i,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.412.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const l5 = pg("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.412.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const a5 = pg("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.412.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const u5 = pg("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
function ZS(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = ZS(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function c5() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = ZS(e)) && (r && (r += " "), (r += t));
  return r;
}
const q1 = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  Y1 = c5,
  f5 = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Y1(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: i, defaultVariants: s } = t,
      a = Object.keys(i).map((d) => {
        const p = n == null ? void 0 : n[d],
          m = s == null ? void 0 : s[d];
        if (p === null) return null;
        const g = q1(p) || q1(m);
        return i[d][g];
      }),
      u =
        n &&
        Object.entries(n).reduce((d, p) => {
          let [m, g] = p;
          return g === void 0 || (d[m] = g), d;
        }, {}),
      c =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((d, p) => {
              let { class: m, className: g, ..._ } = p;
              return Object.entries(_).every((b) => {
                let [T, O] = b;
                return Array.isArray(O)
                  ? O.includes({ ...s, ...u }[T])
                  : { ...s, ...u }[T] === O;
              })
                ? [...d, m, g]
                : d;
            }, []);
    return Y1(
      e,
      a,
      c,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  },
  eE = f5(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  d5 = L.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...i }, s) => {
      const a = r ? Zm : "button";
      return x.jsx(a, {
        className: Yn(eE({ variant: t, size: n, className: e })),
        ref: s,
        ...i,
      });
    }
  );
d5.displayName = "Button";
const tE = ({ className: e, ...t }) =>
  x.jsx("nav", {
    role: "navigation",
    "aria-label": "pagination",
    className: Yn("mx-auto flex w-full justify-center", e),
    ...t,
  });
tE.displayName = "Pagination";
const nE = L.forwardRef(({ className: e, ...t }, n) =>
  x.jsx("ul", {
    ref: n,
    className: Yn("flex flex-row items-center gap-1", e),
    ...t,
  })
);
nE.displayName = "PaginationContent";
const tc = L.forwardRef(({ className: e, ...t }, n) =>
  x.jsx("li", { ref: n, className: Yn("", e), ...t })
);
tc.displayName = "PaginationItem";
const vf = ({ className: e, isActive: t, size: n = "icon", ...r }) =>
  x.jsx("a", {
    "aria-current": t ? "page" : void 0,
    className: Yn(eE({ variant: t ? "outline" : "ghost", size: n }), e),
    ...r,
  });
vf.displayName = "PaginationLink";
const rE = ({ className: e, ...t }) =>
  x.jsxs(vf, {
    "aria-label": "Go to previous page",
    size: "default",
    className: Yn("gap-1 pl-2.5", e),
    ...t,
    children: [
      x.jsx(a5, { className: "h-4 w-4" }),
      x.jsx("span", { children: "Previous" }),
    ],
  });
rE.displayName = "PaginationPrevious";
const iE = ({ className: e, ...t }) =>
  x.jsxs(vf, {
    "aria-label": "Go to next page",
    size: "default",
    className: Yn("gap-1 pr-2.5", e),
    ...t,
    children: [
      x.jsx("span", { children: "Next" }),
      x.jsx(u5, { className: "h-4 w-4" }),
    ],
  });
iE.displayName = "PaginationNext";
function p5({ activePage: e, setPage: t, pages: n }) {
  const r = () => {
      t((s) => {
        let a = s - 1;
        return a < 1 && (a = n), a;
      });
    },
    i = () => {
      t((s) => {
        let a = s + 1;
        return a > n && (a = 1), a;
      });
    };
  return x.jsx(tE, {
    children: x.jsxs(nE, {
      className: "gap-5",
      children: [
        x.jsx(tc, {
          children: x.jsx(rE, {
            className: `bg-brown text-white rounded-xl cursor-pointer hover:bg-orange-100 hover:text-primaryOrange ${
              e === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`,
            onClick: r,
            disabled: e === 1,
          }),
        }),
        dg.times(n, (s) =>
          x.jsx(
            tc,
            {
              className: `page-item ${s + 1 === e ? "active" : ""}`,
              onClick: () => t(s + 1),
              children: x.jsx(vf, {
                className: `${
                  s + 1 === e
                    ? "bg-primaryOrange text-white "
                    : "bg-orange-100 text-primaryOrange"
                } rounded-xl border border-transparent cursor-pointer hover:border-primaryOrange hover:text-primaryOrange hover:bg-transparent`,
                isActive: s + 1 === e,
                children: s + 1,
              }),
            },
            `pagination-${s}`
          )
        ),
        x.jsx(tc, {
          children: x.jsx(iE, {
            className: `bg-brown text-white rounded-xl cursor-pointer hover:bg-orange-100 hover:text-primaryOrange ${
              e === n ? "opacity-50 cursor-not-allowed" : ""
            }`,
            onClick: i,
            disabled: e === n,
          }),
        }),
      ],
    }),
  });
}
function oE({ sectionTitle: e }) {
  var S;
  const [t, n] = L.useState([]),
    [r, i] = L.useState("all"),
    s = "https://delizioso-api.vercel.app/products",
    a = 6,
    [u, c] = r5(s, a),
    [d, p] = L.useState(1),
    [m, g] = L.useState([]);
  L.useEffect(() => {
    u || g(c.flat() || []);
  }, [u, c]),
    L.useEffect(() => {
      (async () => {
        try {
          const P = await ut.get("https://delizioso-api.vercel.app/categories");
          n(P.data);
        } catch (P) {
          console.log(P);
        }
      })();
    }, []);
  const _ = (w) => {
      i(w), p(1);
    },
    b = r === "all" ? m : m.filter((w) => w.category === r),
    T = b.length,
    O = Math.ceil(T / a),
    y = dg.chunk(b, a);
  return x.jsx("section", {
    className: "lg:py-42 py-24",
    children: x.jsxs("div", {
      className: "container grid grid-cols-1 md:space-y-24 space-y-10",
      children: [
        x.jsx("span", {
          className:
            "md:text-[80px] text-5xl text-center font-bold font-tinos capitalize",
          children: e,
        }),
        x.jsxs("ul", {
          className:
            "category-menu flex items-center justify-between flex-nowrap overflow-x-auto gap-3",
          children: [
            x.jsx("li", {
              children: x.jsx("a", {
                className: `${
                  r === "all" ? "bg-brown text-white" : "bg-gray-100"
                } md:py-6 text-lg md:px-16 px-6 py-3 rounded-full capitalize text-nowrap block cursor-pointer`,
                onClick: () => _("all"),
                children: "all category",
              }),
            }),
            t.map((w) =>
              x.jsx(
                "li",
                {
                  children: x.jsx("a", {
                    className: `${
                      r === w.categoryName
                        ? "bg-brown text-white"
                        : "bg-gray-100"
                    } md:py-6 text-lg md:px-16 px-6 py-3 rounded-full capitalize text-nowrap block cursor-pointer`,
                    onClick: () => _(w.categoryName),
                    children: w.categoryName,
                  }),
                },
                w.id
              )
            ),
          ],
        }),
        u
          ? x.jsx("span", { children: "Loading..." })
          : b.length > 0
          ? x.jsxs(x.Fragment, {
              children: [
                x.jsx("div", {
                  className:
                    "menu grid lg:grid-cols-3 grid-cols-2 sm:gap-10 gap-5",
                  children:
                    (S = y[d - 1]) == null
                      ? void 0
                      : S.map((w, P) => x.jsx(t5, { food: w, index: P }, w.id)),
                }),
                x.jsx("div", {
                  className: "flex m-auto py-10",
                  children: x.jsx(p5, { activePage: d, setPage: p, pages: O }),
                }),
              ],
            })
          : x.jsx("p", {
              className: "text-center",
              children: "No items found",
            }),
      ],
    }),
  });
}
const Sp = "/assets/reserve-DyYWDRCW.png";
function Ep({ src: e, containerClasses: t }) {
  return x.jsx("div", {
    className: `rounded-full bg-orange-100  aspect-square absolute  ${t}`,
    children: x.jsx("img", {
      src: e,
      className:
        "absolute z-10 size-10/12 transform translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2",
    }),
  });
}
function h5() {
  return x.jsx("section", {
    className: " lg:py-64 py-5 bg-orange-50 overflow-x-hidden",
    children: x.jsxs("div", {
      className:
        " grid lg:grid-cols-2 items-center xl:gap-72 lg:gap-44 space-y-36  lg:space-y-0 justify-center",
      children: [
        x.jsx("div", {
          className: "relative m-auto order-last  lg:order-first mt-16 lg:mt-0",
          children: x.jsxs("div", {
            className:
              "xl:size-[880px] lg:size-[680px] md:size-[500px] sm:size-[400px] size-[300px] rounded-full bg-transparent border border-black/20 aspect-square relative lg:-translate-x-[100px] ",
            children: [
              x.jsx(Ep, {
                src: Sp,
                containerClasses:
                  "size-9/12 !transform translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2",
              }),
              x.jsx(Ep, {
                src: Sp,
                containerClasses: "size-2/12 top-0 lg:right-32 right-16",
              }),
              x.jsx(Ep, {
                src: Sp,
                containerClasses: "size-2/12 bottom-0 lg:left-32 left-16",
              }),
            ],
          }),
        }),
        x.jsxs("div", {
          className:
            "space-y-16 capitalize text-xl order-first lg:order-last  lg:max-w-lg md:max-w-3xl sm:max-w-xl max-w-sm",
          children: [
            x.jsxs("h2", {
              className:
                "lg:text-[80px] text-6xl font-semibold text-balance font-tinos leading-[90px]",
              children: [
                "let's reserve ",
                x.jsx("span", {
                  className: "text-primaryOrange",
                  children: "a table",
                }),
              ],
            }),
            x.jsx("p", {
              className: " text-brown/70 leading-10 lg:text-xl tracking-wider",
              children:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam",
            }),
            x.jsx("button", {
              className:
                "btn-primary mt-12  bg-primaryOrange md:py-5 md:px-20 font-normal text-nowrap",
              children: "reservation",
            }),
          ],
        }),
      ],
    }),
  });
}
function m5() {
  return x.jsx("section", {
    className: "lg:py-42 py-24",
    children: x.jsx("div", {
      className: "container grid grid-cols-1 md:space-y-24 space-y-10",
      children: x.jsxs("div", {
        className:
          "flex flex-col items-center space-y-10 capitalize  md:px-0 px-4 md-text-start text-center md:bg-center bgp-70 bg-no-repeat bg-serviceHourseBg  rounded-[7rem] py-20 text-white overflow-hidden",
        children: [
          x.jsx("span", {
            className:
              "lg:text-6xl font-tinos font-semibold text-center text-4xl",
            children: "we are open from",
          }),
          x.jsxs("div", {
            className:
              "flex flex-col max-w-sm leading-10  text-xl md:text-start text-center",
            children: [
              x.jsx("span", {
                className: "lg:text-4xl text-2xl font-semibold mb-5",
                children: "monday - sunday",
              }),
              x.jsx("span", { children: "launch : mon-sun : 11:00am-02:00pm" }),
              x.jsx("span", {
                children: "dinner : sunday : 04:00am-08:00pm 04:00am-09:00pm",
              }),
            ],
          }),
          x.jsxs("div", {
            className: "flex items-center lg:flex-row flex-col gap-5",
            children: [
              x.jsx("button", {
                className:
                  "btn-primary lg:mt-12 hover:scale-105 duration-200 bg-primaryOrange py-5 px-20 font-normal text-nowrap",
                children: "order now",
              }),
              x.jsx("button", {
                className:
                  "btn-primary lg:mt-12 hover:scale-105 duration-200 bg-white text-black py-5 px-20 font-normal text-nowrap",
                children: "reservation",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function g5() {
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx(e5, {}),
      x.jsx(YM, {}),
      x.jsx(oE, { sectionTitle: "our popular menu" }),
      x.jsx(h5, {}),
      x.jsx(EI, {}),
      x.jsx(Jz, {}),
      x.jsx(m5, {}),
    ],
  });
}
function v5() {
  return x.jsx(oE, { sectionTitle: "Menu" });
}
function Mi(e) {
  const { type: t, placeholder: n } = e;
  return x.jsx("input", {
    type: t,
    placeholder: n,
    autoComplete: "new-password",
    className: "bg-neutral-50 w-full py-3 px-8 rounded-md placeholder:text-sm",
  });
}
function Q1(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (i) {
    if ((e == null || e(i), n === !1 || !i.defaultPrevented))
      return t == null ? void 0 : t(i);
  };
}
function y5({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, i] = w5({ defaultProp: t, onChange: n }),
    s = e !== void 0,
    a = s ? e : r,
    u = Jm(n),
    c = L.useCallback(
      (d) => {
        if (s) {
          const m = typeof d == "function" ? d(e) : d;
          m !== e && u(m);
        } else i(d);
      },
      [s, e, i, u]
    );
  return [a, c];
}
function w5({ defaultProp: e, onChange: t }) {
  const n = L.useState(e),
    [r] = n,
    i = L.useRef(r),
    s = Jm(t);
  return (
    L.useEffect(() => {
      i.current !== r && (s(r), (i.current = r));
    }, [r, i, s]),
    n
  );
}
function x5(e) {
  const t = L.useRef({ value: e, previous: e });
  return L.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
function S5(e) {
  const [t, n] = L.useState(void 0);
  return (
    ca(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((i) => {
          if (!Array.isArray(i) || !i.length) return;
          const s = i[0];
          let a, u;
          if ("borderBoxSize" in s) {
            const c = s.borderBoxSize,
              d = Array.isArray(c) ? c[0] : c;
            (a = d.inlineSize), (u = d.blockSize);
          } else (a = e.offsetWidth), (u = e.offsetHeight);
          n({ width: a, height: u });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
function E5(e, t) {
  return L.useReducer((n, r) => t[n][r] ?? n, e);
}
var sE = (e) => {
  const { present: t, children: n } = e,
    r = _5(t),
    i =
      typeof n == "function" ? n({ present: r.isPresent }) : L.Children.only(n),
    s = J2(r.ref, b5(i));
  return typeof n == "function" || r.isPresent
    ? L.cloneElement(i, { ref: s })
    : null;
};
sE.displayName = "Presence";
function _5(e) {
  const [t, n] = L.useState(),
    r = L.useRef({}),
    i = L.useRef(e),
    s = L.useRef("none"),
    a = e ? "mounted" : "unmounted",
    [u, c] = E5(a, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    L.useEffect(() => {
      const d = Du(r.current);
      s.current = u === "mounted" ? d : "none";
    }, [u]),
    ca(() => {
      const d = r.current,
        p = i.current;
      if (p !== e) {
        const g = s.current,
          _ = Du(d);
        e
          ? c("MOUNT")
          : _ === "none" || (d == null ? void 0 : d.display) === "none"
          ? c("UNMOUNT")
          : c(p && g !== _ ? "ANIMATION_OUT" : "UNMOUNT"),
          (i.current = e);
      }
    }, [e, c]),
    ca(() => {
      if (t) {
        const d = (m) => {
            const _ = Du(r.current).includes(m.animationName);
            m.target === t && _ && of.flushSync(() => c("ANIMATION_END"));
          },
          p = (m) => {
            m.target === t && (s.current = Du(r.current));
          };
        return (
          t.addEventListener("animationstart", p),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            t.removeEventListener("animationstart", p),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else c("ANIMATION_END");
    }, [t, c]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(u),
      ref: L.useCallback((d) => {
        d && (r.current = getComputedStyle(d)), n(d);
      }, []),
    }
  );
}
function Du(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function b5(e) {
  var r, i;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var hg = "Checkbox",
  [C5, $5] = Q2(hg),
  [T5, P5] = C5(hg),
  lE = L.forwardRef((e, t) => {
    const {
        __scopeCheckbox: n,
        name: r,
        checked: i,
        defaultChecked: s,
        required: a,
        disabled: u,
        value: c = "on",
        onCheckedChange: d,
        ...p
      } = e,
      [m, g] = L.useState(null),
      _ = J2(t, (w) => g(w)),
      b = L.useRef(!1),
      T = m ? !!m.closest("form") : !0,
      [O = !1, y] = y5({ prop: i, defaultProp: s, onChange: d }),
      S = L.useRef(O);
    return (
      L.useEffect(() => {
        const w = m == null ? void 0 : m.form;
        if (w) {
          const P = () => y(S.current);
          return (
            w.addEventListener("reset", P),
            () => w.removeEventListener("reset", P)
          );
        }
      }, [m, y]),
      x.jsxs(T5, {
        scope: n,
        state: O,
        disabled: u,
        children: [
          x.jsx(Ea.button, {
            type: "button",
            role: "checkbox",
            "aria-checked": So(O) ? "mixed" : O,
            "aria-required": a,
            "data-state": cE(O),
            "data-disabled": u ? "" : void 0,
            disabled: u,
            value: c,
            ...p,
            ref: _,
            onKeyDown: Q1(e.onKeyDown, (w) => {
              w.key === "Enter" && w.preventDefault();
            }),
            onClick: Q1(e.onClick, (w) => {
              y((P) => (So(P) ? !0 : !P)),
                T &&
                  ((b.current = w.isPropagationStopped()),
                  b.current || w.stopPropagation());
            }),
          }),
          T &&
            x.jsx(R5, {
              control: m,
              bubbles: !b.current,
              name: r,
              value: c,
              checked: O,
              required: a,
              disabled: u,
              style: { transform: "translateX(-100%)" },
            }),
        ],
      })
    );
  });
lE.displayName = hg;
var aE = "CheckboxIndicator",
  uE = L.forwardRef((e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...i } = e,
      s = P5(aE, n);
    return x.jsx(sE, {
      present: r || So(s.state) || s.state === !0,
      children: x.jsx(Ea.span, {
        "data-state": cE(s.state),
        "data-disabled": s.disabled ? "" : void 0,
        ...i,
        ref: t,
        style: { pointerEvents: "none", ...e.style },
      }),
    });
  });
uE.displayName = aE;
var R5 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...i } = e,
    s = L.useRef(null),
    a = x5(n),
    u = S5(t);
  return (
    L.useEffect(() => {
      const c = s.current,
        d = window.HTMLInputElement.prototype,
        m = Object.getOwnPropertyDescriptor(d, "checked").set;
      if (a !== n && m) {
        const g = new Event("click", { bubbles: r });
        (c.indeterminate = So(n)),
          m.call(c, So(n) ? !1 : n),
          c.dispatchEvent(g);
      }
    }, [a, n, r]),
    x.jsx("input", {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: So(n) ? !1 : n,
      ...i,
      tabIndex: -1,
      ref: s,
      style: {
        ...e.style,
        ...u,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
      },
    })
  );
};
function So(e) {
  return e === "indeterminate";
}
function cE(e) {
  return So(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var fE = lE,
  N5 = uE;
const dE = L.forwardRef(({ className: e, ...t }, n) =>
  x.jsx(fE, {
    ref: n,
    className: Yn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: x.jsx(N5, {
      className: Yn("flex items-center justify-center text-current"),
      children: x.jsx(l5, { className: "h-4 w-4" }),
    }),
  })
);
dE.displayName = fE.displayName;
function pE() {
  return x.jsxs("div", {
    className: "flex items-center space-x-2",
    children: [
      x.jsx(dE, { id: "rememeberMe" }),
      x.jsx("label", {
        htmlFor: "rememeberMe",
        className:
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        children: "remember me",
      }),
    ],
  });
}
function O5() {
  return x.jsx("form", {
    id: "signUpForm",
    className: "h-full",
    children: x.jsxs("div", {
      className: "space-y-8 h-full flex flex-col",
      children: [
        x.jsx(Mi, { type: "text", placeholder: "Full name" }),
        x.jsx(Mi, { type: "email", placeholder: "Email address" }),
        x.jsx(Mi, { type: "password", placeholder: "Password" }),
        x.jsxs("div", {
          className: "flex text-sm justify-between items-center",
          children: [
            x.jsx(pE, {}),
            x.jsx(Sa, {
              className: "capitalize ",
              to: "/",
              children: "forget password?",
            }),
          ],
        }),
        x.jsx("button", {
          type: "submit",
          className:
            "bg-primaryOrange text-white rounded-md p-4 w-full md:!mt-8 !mt-auto",
          children: "Sign up",
        }),
      ],
    }),
  });
}
function L5() {
  return x.jsx("form", {
    id: "signUpForm",
    className: "h-full",
    children: x.jsxs("div", {
      className: "space-y-8 h-full flex flex-col",
      children: [
        x.jsx(Mi, { type: "email", placeholder: "Email address" }),
        x.jsx(Mi, { type: "password", placeholder: "Password" }),
        x.jsxs("div", {
          className: "flex text-sm justify-between items-center",
          children: [
            x.jsx(pE, {}),
            x.jsx(Sa, {
              className: "capitalize ",
              to: "/",
              children: "forget password?",
            }),
          ],
        }),
        x.jsx("button", {
          type: "submit",
          className:
            "bg-primaryOrange text-white rounded-md p-4 w-full md:!mt-8 !mt-auto",
          children: "login",
        }),
      ],
    }),
  });
}
function hE(e) {
  const { formType: t } = e;
  return x.jsx("div", {
    className:
      "lg:justify-end lg:h-auto h-full py-10 lg:py-0 justify-center flex xl:col-span-6 lg:col-span-5",
    children: x.jsxs("div", {
      className: "flex flex-col  xl:w-4/6 w-5/6",
      children: [
        x.jsx("span", {
          className: "text-4xl font-semibold mb-4",
          children: t === "signup" ? "Sign up" : "Login",
        }),
        x.jsxs("p", {
          className: "mb-10",
          children: [
            "don't have an account?",
            " ",
            x.jsx(Sa, {
              to: t === "signup" ? "/login" : "/signup",
              className: "text-blue-500",
              children: t === "signup" ? " Log in" : " Sign up",
            }),
          ],
        }),
        t === "signup" ? x.jsx(O5, {}) : x.jsx(L5, {}),
      ],
    }),
  });
}
function k5() {
  return x.jsx(hE, { formType: "signup" });
}
function M5() {
  return x.jsx(x.Fragment, { children: x.jsx(hE, { formType: "login" }) });
}
function _p({ children: e, colWidth: t, order: n }) {
  return x.jsx("div", {
    className: `lg:col-span-${t} col-span-12 ${
      n === "inverse" ? "lg:order-1 order-2" : "order-2"
    }`,
    children: x.jsx("div", {
      className: "flex flex-col space-y-8 lg:text-start text-center",
      children: e,
    }),
  });
}
function X1(e) {
  const { img: t, direction: n, order: r, title: i } = e;
  return x.jsxs("div", {
    className: `lg:col-span-7 col-span-12 ${
      r === "inverse" ? "lg:order-2 order-1" : "order-1"
    }`,
    children: [
      i &&
        x.jsx("h4", {
          className:
            "lg:text-7xl lg:hidden block text-center  text-5xl font-tinos font-semibold",
          children: i,
        }),
      x.jsxs("div", {
        className: `flex lg:py-28 lg:my-0 my-32  items-center justify-center relative lg:${n}-32 `,
        children: [
          x.jsx("div", {
            className:
              "bg-gray-200 lg:top-1/2 lg:-translate-y-1/2 z-10 xl:size-[42rem] lg:size-[40rem] size-[20rem] rounded-full block absolute",
          }),
          x.jsx("div", {
            className:
              "bg-gray-100 lg:top-1/2 lg:-translate-y-1/2  z-0 xl:size-[52rem] lg:size-[50rem] size-[25rem] rounded-full block absolute",
          }),
          x.jsx("img", {
            src: t,
            alt: "img",
            className: "z-20 xl:size-[33rem] lg:size-[30rem] size-[15rem]",
          }),
        ],
      }),
    ],
  });
}
const A5 = "/assets/chef-CWOWf26A.png",
  I5 = "/assets/chef2-DfmISwIK.png",
  z5 = "/assets/food3-CuBwQVe0.png";
function j5() {
  return x.jsx("section", {
    className: "py-24 lg:py-28 xl:overflow-visible overflow-hidden",
    children: x.jsxs("div", {
      className: "container    space-y-24  ",
      children: [
        x.jsxs("div", {
          className: "grid grid-cols-12 items-center lg:space-y-24 lg:gap-16 ",
          children: [
            x.jsx(X1, { img: I5, direction: "right", title: "Our resturant" }),
            x.jsxs(_p, {
              colWidth: "5",
              children: [
                x.jsxs("h4", {
                  className:
                    "lg:text-7xl lg:block hidden text-5xl font-tinos font-semibold",
                  children: [
                    x.jsx("span", {
                      className:
                        "capitalize text-primaryOrange font-bold lg:block",
                      children: "Our",
                    }),
                    " ",
                    "resturant",
                  ],
                }),
                x.jsx("p", {
                  className: "leading-loose opacity-80  font-light text-xl",
                  children:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
                }),
              ],
            }),
          ],
        }),
        x.jsxs("div", {
          className: "grid grid-cols-12 items-center  lg:gap-16 ",
          children: [
            x.jsx(_p, {
              colWidth: "5",
              order: "inverse",
              children: x.jsx("p", {
                className: "leading-loose opacity-80  font-light text-xl",
                children:
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
              }),
            }),
            x.jsx(X1, { img: z5, direction: "left", order: "inverse" }),
          ],
        }),
        x.jsxs("div", {
          className: "grid grid-cols-12 items-center lg:space-y-24 lg:gap-16",
          children: [
            x.jsxs("div", {
              className:
                "lg:col-span-6 col-span-12 justify-center flex lg:pb-0 pb-10 flex-col space-y-10 items-center",
              children: [
                x.jsxs("h4", {
                  className:
                    "lg:text-7xl text-5xl font-tinos font-semibold block lg:hidden text-center",
                  children: [
                    x.jsx("span", {
                      className:
                        "capitalize text-primaryOrange font-bold block",
                      children: "Owner",
                    }),
                    " ",
                    "& Executive Chef",
                  ],
                }),
                x.jsx("img", {
                  src: A5,
                  alt: "chef",
                  className: "rounded-2xl lg:rounded-none",
                }),
              ],
            }),
            x.jsxs(_p, {
              colWidth: "6",
              children: [
                x.jsxs("h4", {
                  className:
                    "lg:text-7xl text-5xl font-tinos font-semibold lg:block hidden",
                  children: [
                    x.jsx("span", {
                      className:
                        "capitalize text-primaryOrange font-bold block",
                      children: "Owner",
                    }),
                    " ",
                    "& Executive Chef",
                  ],
                }),
                x.jsx("span", {
                  className: "text-3xl font-semibold capitalize",
                  children: "Ismail Marzuki",
                }),
                x.jsx("p", {
                  className:
                    "leading-loose italic opacity-80 font-light md:text-3xl",
                  children:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function D5() {
  return x.jsx("div", {
    className: "flex h-svh w-svw items-center justify-center bg-gray-400",
    children: x.jsxs("div", {
      className: "grid lg:grid-cols-12 items-center  w-full h-full bg-white",
      children: [
        x.jsx("div", {
          className:
            "xl:col-span-6 col-span-7 hidden lg:flex h-full justify-start overflow-hidden  items-center relative",
        }),
        x.jsx("div", {
          className:
            "lg:justify-start lg:h-auto h-full py-10 lg:py-0 justify-center flex xl:col-span-6 lg:col-span-5",
          children: x.jsx("div", {
            className: "flex flex-col  xl:w-4/6 w-5/6",
            children: x.jsx("form", {
              id: "signUpForm",
              className: "h-full",
              children: x.jsxs("div", {
                className: "space-y-8 h-full flex flex-col",
                children: [
                  x.jsx(Mi, { type: "date", placeholder: "Date" }),
                  x.jsx(Mi, { type: "date", placeholder: "time" }),
                  x.jsx(Mi, { type: "number", placeholder: "Party size" }),
                  x.jsx("button", {
                    type: "submit",
                    className:
                      "bg-primaryOrange text-white rounded-md p-4 w-full md:!mt-8 !mt-auto",
                    children: "book now",
                  }),
                ],
              }),
            }),
          }),
        }),
      ],
    }),
  });
}
const F5 = wk([
  {
    path: "/",
    element: x.jsx(HM, {}),
    children: [
      { element: x.jsx(g5, {}), index: !0 },
      { path: "/menu", element: x.jsx(v5, {}) },
      { path: "/aboutUs", element: x.jsx(j5, {}) },
      { path: "/reservation", element: x.jsx(D5, {}) },
    ],
  },
  {
    element: x.jsx(KM, {}),
    children: [
      { path: "/signup", element: x.jsx(k5, {}) },
      { path: "/login", element: x.jsx(M5, {}) },
    ],
  },
]);
Cp.createRoot(document.getElementById("root")).render(
  x.jsx(L.StrictMode, {
    children: x.jsx(aO, { store: JO, children: x.jsx(Pk, { router: F5 }) }),
  })
);
