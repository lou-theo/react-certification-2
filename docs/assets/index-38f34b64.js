(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const l of i.addedNodes) l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Mh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var wf = { exports: {} },
  $i = {},
  Sf = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var So = Symbol.for('react.element'),
  Ah = Symbol.for('react.portal'),
  Fh = Symbol.for('react.fragment'),
  jh = Symbol.for('react.strict_mode'),
  Uh = Symbol.for('react.profiler'),
  Ih = Symbol.for('react.provider'),
  Bh = Symbol.for('react.context'),
  $h = Symbol.for('react.forward_ref'),
  Hh = Symbol.for('react.suspense'),
  Wh = Symbol.for('react.memo'),
  Vh = Symbol.for('react.lazy'),
  Ra = Symbol.iterator;
function Qh(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ra && e[Ra]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Ef = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _f = Object.assign,
  kf = {};
function hr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = kf), (this.updater = n || Ef);
}
hr.prototype.isReactComponent = {};
hr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
hr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function xf() {}
xf.prototype = hr.prototype;
function ms(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = kf), (this.updater = n || Ef);
}
var ys = (ms.prototype = new xf());
ys.constructor = ms;
_f(ys, hr.prototype);
ys.isPureReactComponent = !0;
var Pa = Array.isArray,
  Cf = Object.prototype.hasOwnProperty,
  vs = { current: null },
  Rf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      Cf.call(t, r) && !Rf.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    o.children = s;
  }
  if (e && e.defaultProps) for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: So, type: e, key: i, ref: l, props: o, _owner: vs.current };
}
function Kh(e, t) {
  return { $$typeof: So, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function gs(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === So;
}
function qh(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Na = /\/+/g;
function Pl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? qh('' + e.key) : t.toString(36);
}
function Xo(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        l = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case So:
          case Ah:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + Pl(l, 0) : r),
      Pa(o)
        ? ((n = ''),
          e != null && (n = e.replace(Na, '$&/') + '/'),
          Xo(o, t, n, '', function (a) {
            return a;
          }))
        : o != null &&
          (gs(o) &&
            (o = Kh(o, n + (!o.key || (l && l.key === o.key) ? '' : ('' + o.key).replace(Na, '$&/') + '/') + e)),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), Pa(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Pl(i, u);
      l += Xo(i, t, n, s, o);
    }
  else if (((s = Qh(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(i = e.next()).done; ) (i = i.value), (s = r + Pl(i, u++)), (l += Xo(i, t, n, s, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return l;
}
function zo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Xo(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Jh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Le = { current: null },
  Go = { transition: null },
  Yh = { ReactCurrentDispatcher: Le, ReactCurrentBatchConfig: Go, ReactCurrentOwner: vs };
K.Children = {
  map: zo,
  forEach: function (e, t, n) {
    zo(
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
      zo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      zo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!gs(e)) throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
K.Component = hr;
K.Fragment = Fh;
K.Profiler = Uh;
K.PureComponent = ms;
K.StrictMode = jh;
K.Suspense = Hh;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yh;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
  var r = _f({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = vs.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t) Cf.call(t, s) && !Rf.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: So, type: e.type, key: o, ref: i, props: r, _owner: l };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: Bh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ih, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = Pf;
K.createFactory = function (e) {
  var t = Pf.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: $h, render: e };
};
K.isValidElement = gs;
K.lazy = function (e) {
  return { $$typeof: Vh, _payload: { _status: -1, _result: e }, _init: Jh };
};
K.memo = function (e, t) {
  return { $$typeof: Wh, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = Go.transition;
  Go.transition = {};
  try {
    e();
  } finally {
    Go.transition = t;
  }
};
K.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
K.useCallback = function (e, t) {
  return Le.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Le.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Le.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Le.current.useEffect(e, t);
};
K.useId = function () {
  return Le.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Le.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Le.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Le.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Le.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Le.current.useRef(e);
};
K.useState = function (e) {
  return Le.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Le.current.useTransition();
};
K.version = '18.2.0';
Sf.exports = K;
var P = Sf.exports;
const Xh = Mh(P);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gh = P,
  Zh = Symbol.for('react.element'),
  bh = Symbol.for('react.fragment'),
  em = Object.prototype.hasOwnProperty,
  tm = Gh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  nm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = '' + n), t.key !== void 0 && (i = '' + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) em.call(t, r) && !nm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Zh, type: e, key: i, ref: l, props: o, _owner: tm.current };
}
$i.Fragment = bh;
$i.jsx = Nf;
$i.jsxs = Nf;
wf.exports = $i;
var V = wf.exports,
  Of = Symbol.for('immer-nothing'),
  Oa = Symbol.for('immer-draftable'),
  He = Symbol.for('immer-state');
function ft(e, ...t) {
  throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var rr = Object.getPrototypeOf;
function or(e) {
  return !!e && !!e[He];
}
function En(e) {
  var t;
  return e ? Tf(e) || Array.isArray(e) || !!e[Oa] || !!((t = e.constructor) != null && t[Oa]) || Wi(e) || Vi(e) : !1;
}
var rm = Object.prototype.constructor.toString();
function Tf(e) {
  if (!e || typeof e != 'object') return !1;
  const t = rr(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
  return n === Object ? !0 : typeof n == 'function' && Function.toString.call(n) === rm;
}
function Yr(e, t) {
  Hi(e) === 0
    ? Object.entries(e).forEach(([n, r]) => {
        t(n, r, e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Hi(e) {
  const t = e[He];
  return t ? t.type_ : Array.isArray(e) ? 1 : Wi(e) ? 2 : Vi(e) ? 3 : 0;
}
function su(e, t) {
  return Hi(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Lf(e, t, n) {
  const r = Hi(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function om(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Wi(e) {
  return e instanceof Map;
}
function Vi(e) {
  return e instanceof Set;
}
function dn(e) {
  return e.copy_ || e.base_;
}
function au(e, t) {
  if (Wi(e)) return new Map(e);
  if (Vi(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  if (!t && Tf(e)) return rr(e) ? { ...e } : Object.assign(Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[He];
  let r = Reflect.ownKeys(n);
  for (let o = 0; o < r.length; o++) {
    const i = r[o],
      l = n[i];
    l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
      (l.get || l.set) && (n[i] = { configurable: !0, writable: !0, enumerable: l.enumerable, value: e[i] });
  }
  return Object.create(rr(e), n);
}
function ws(e, t = !1) {
  return (
    Qi(e) ||
      or(e) ||
      !En(e) ||
      (Hi(e) > 1 && (e.set = e.add = e.clear = e.delete = im), Object.freeze(e), t && Yr(e, (n, r) => ws(r, !0))),
    e
  );
}
function im() {
  ft(2);
}
function Qi(e) {
  return Object.isFrozen(e);
}
var lm = {};
function _n(e) {
  const t = lm[e];
  return t || ft(0, e), t;
}
var Xr;
function Df() {
  return Xr;
}
function um(e, t) {
  return { drafts_: [], parent_: e, immer_: t, canAutoFreeze_: !0, unfinalizedDrafts_: 0 };
}
function Ta(e, t) {
  t && (_n('Patches'), (e.patches_ = []), (e.inversePatches_ = []), (e.patchListener_ = t));
}
function cu(e) {
  fu(e), e.drafts_.forEach(sm), (e.drafts_ = null);
}
function fu(e) {
  e === Xr && (Xr = e.parent_);
}
function La(e) {
  return (Xr = um(Xr, e));
}
function sm(e) {
  const t = e[He];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Da(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[He].modified_ && (cu(t), ft(4)),
        En(e) && ((e = pi(t, e)), t.parent_ || hi(t, e)),
        t.patches_ && _n('Patches').generateReplacementPatches_(n[He].base_, e, t.patches_, t.inversePatches_))
      : (e = pi(t, n, [])),
    cu(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Of ? e : void 0
  );
}
function pi(e, t, n) {
  if (Qi(t)) return t;
  const r = t[He];
  if (!r) return Yr(t, (o, i) => za(e, r, t, o, i, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return hi(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o,
      l = !1;
    r.type_ === 3 && ((i = new Set(o)), o.clear(), (l = !0)),
      Yr(i, (u, s) => za(e, r, o, u, s, n, l)),
      hi(e, o, !1),
      n && e.patches_ && _n('Patches').generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function za(e, t, n, r, o, i, l) {
  if (or(o)) {
    const u = i && t && t.type_ !== 3 && !su(t.assigned_, r) ? i.concat(r) : void 0,
      s = pi(e, o, u);
    if ((Lf(n, r, s), or(s))) e.canAutoFreeze_ = !1;
    else return;
  } else l && n.add(o);
  if (En(o) && !Qi(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    pi(e, o), (!t || !t.scope_.parent_) && hi(e, o);
  }
}
function hi(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ws(t, n);
}
function am(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Df(),
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
  let o = r,
    i = Ss;
  n && ((o = [r]), (i = Gr));
  const { revoke: l, proxy: u } = Proxy.revocable(o, i);
  return (r.draft_ = u), (r.revoke_ = l), u;
}
var Ss = {
    get(e, t) {
      if (t === He) return e;
      const n = dn(e);
      if (!su(n, t)) return cm(e, n, t);
      const r = n[t];
      return e.finalized_ || !En(r) ? r : r === Nl(e.base_, t) ? (Ol(e), (e.copy_[t] = pu(r, e))) : r;
    },
    has(e, t) {
      return t in dn(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(dn(e));
    },
    set(e, t, n) {
      const r = zf(dn(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const o = Nl(dn(e), t),
          i = o == null ? void 0 : o[He];
        if (i && i.base_ === n) return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (om(n, o) && (n !== void 0 || su(e.base_, t))) return !0;
        Ol(e), du(e);
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
        Nl(e.base_, t) !== void 0 || t in e.base_ ? ((e.assigned_[t] = !1), Ol(e), du(e)) : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = dn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && { writable: !0, configurable: e.type_ !== 1 || t !== 'length', enumerable: r.enumerable, value: n[t] }
      );
    },
    defineProperty() {
      ft(11);
    },
    getPrototypeOf(e) {
      return rr(e.base_);
    },
    setPrototypeOf() {
      ft(12);
    },
  },
  Gr = {};
Yr(Ss, (e, t) => {
  Gr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Gr.deleteProperty = function (e, t) {
  return Gr.set.call(this, e, t, void 0);
};
Gr.set = function (e, t, n) {
  return Ss.set.call(this, e[0], t, n, e[0]);
};
function Nl(e, t) {
  const n = e[He];
  return (n ? dn(n) : e)[t];
}
function cm(e, t, n) {
  var o;
  const r = zf(t, n);
  return r ? ('value' in r ? r.value : (o = r.get) == null ? void 0 : o.call(e.draft_)) : void 0;
}
function zf(e, t) {
  if (!(t in e)) return;
  let n = rr(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = rr(n);
  }
}
function du(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && du(e.parent_));
}
function Ol(e) {
  e.copy_ || (e.copy_ = au(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var fm = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == 'function' && typeof n != 'function') {
          const i = n;
          n = t;
          const l = this;
          return function (s = i, ...a) {
            return l.produce(s, (f) => n.call(this, f, ...a));
          };
        }
        typeof n != 'function' && ft(6), r !== void 0 && typeof r != 'function' && ft(7);
        let o;
        if (En(t)) {
          const i = La(this),
            l = pu(t, void 0);
          let u = !0;
          try {
            (o = n(l)), (u = !1);
          } finally {
            u ? cu(i) : fu(i);
          }
          return Ta(i, r), Da(o, i);
        } else if (!t || typeof t != 'object') {
          if (((o = n(t)), o === void 0 && (o = t), o === Of && (o = void 0), this.autoFreeze_ && ws(o, !0), r)) {
            const i = [],
              l = [];
            _n('Patches').generateReplacementPatches_(t, o, i, l), r(i, l);
          }
          return o;
        } else ft(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == 'function') return (l, ...u) => this.produceWithPatches(l, (s) => t(s, ...u));
        let r, o;
        return [
          this.produce(t, n, (l, u) => {
            (r = l), (o = u);
          }),
          r,
          o,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == 'boolean' && this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    En(e) || ft(8), or(e) && (e = dm(e));
    const t = La(this),
      n = pu(e, void 0);
    return (n[He].isManual_ = !0), fu(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[He];
    (!n || !n.isManual_) && ft(9);
    const { scope_: r } = n;
    return Ta(r, t), Da(void 0, r);
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
      const o = t[n];
      if (o.path.length === 0 && o.op === 'replace') {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = _n('Patches').applyPatches_;
    return or(e) ? r(e, t) : this.produce(e, (o) => r(o, t));
  }
};
function pu(e, t) {
  const n = Wi(e) ? _n('MapSet').proxyMap_(e, t) : Vi(e) ? _n('MapSet').proxySet_(e, t) : am(e, t);
  return (t ? t.scope_ : Df()).drafts_.push(n), n;
}
function dm(e) {
  return or(e) || ft(10, e), Mf(e);
}
function Mf(e) {
  if (!En(e) || Qi(e)) return e;
  const t = e[He];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = au(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = au(e, !0);
  return (
    Yr(n, (r, o) => {
      Lf(n, r, Mf(o));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var We = new fm(),
  pm = We.produce;
We.produceWithPatches.bind(We);
We.setAutoFreeze.bind(We);
We.setUseStrictShallowCopy.bind(We);
We.applyPatches.bind(We);
We.createDraft.bind(We);
We.finishDraft.bind(We);
function hm(e, t, n) {
  var r = P.useMemo(
    function () {
      return pm(e);
    },
    [e],
  );
  return P.useReducer(r, t, n);
}
const Ma = 'questions',
  Af = [],
  Ff = P.createContext(Af),
  jf = P.createContext(() => ({}));
function mm(e, t) {
  switch (t.type) {
    case 'create': {
      e.splice(0, e.length, ...t.payload);
      return;
    }
    case 'answerQuestion': {
      const n = e.find((r) => r.id === t.payload.questionId);
      if (!n) return;
      n.selectedOptionId = t.payload.optionId;
      return;
    }
    case 'reset': {
      e.splice(0, e.length);
      return;
    }
  }
}
function ym({ children: e }) {
  const t = () => {
      const o = localStorage.getItem(Ma);
      return o ? JSON.parse(o) : Af;
    },
    [n, r] = hm(mm, t());
  return (
    P.useEffect(() => {
      localStorage.setItem(Ma, JSON.stringify(n));
    }, [n]),
    V.jsx(Ff.Provider, { value: n, children: V.jsx(jf.Provider, { value: r, children: e }) })
  );
}
var hu = {},
  Uf = { exports: {} },
  Qe = {},
  If = { exports: {} },
  Bf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, U) {
    var $ = T.length;
    T.push(U);
    e: for (; 0 < $; ) {
      var W = ($ - 1) >>> 1,
        ne = T[W];
      if (0 < o(ne, U)) (T[W] = U), (T[$] = ne), ($ = W);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var U = T[0],
      $ = T.pop();
    if ($ !== U) {
      T[0] = $;
      e: for (var W = 0, ne = T.length, fn = ne >>> 1; W < fn; ) {
        var xt = 2 * (W + 1) - 1,
          Je = T[xt],
          Ct = xt + 1,
          Ln = T[Ct];
        if (0 > o(Je, $))
          Ct < ne && 0 > o(Ln, Je) ? ((T[W] = Ln), (T[Ct] = $), (W = Ct)) : ((T[W] = Je), (T[xt] = $), (W = xt));
        else if (Ct < ne && 0 > o(Ln, $)) (T[W] = Ln), (T[Ct] = $), (W = Ct);
        else break e;
      }
    }
    return U;
  }
  function o(T, U) {
    var $ = T.sortIndex - U.sortIndex;
    return $ !== 0 ? $ : T.id - U.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      u = l.now();
    e.unstable_now = function () {
      return l.now() - u;
    };
  }
  var s = [],
    a = [],
    f = 1,
    p = null,
    m = 3,
    w = !1,
    y = !1,
    v = !1,
    R = typeof setTimeout == 'function' ? setTimeout : null,
    c = typeof clearTimeout == 'function' ? clearTimeout : null,
    d = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(T) {
    for (var U = n(a); U !== null; ) {
      if (U.callback === null) r(a);
      else if (U.startTime <= T) r(a), (U.sortIndex = U.expirationTime), t(s, U);
      else break;
      U = n(a);
    }
  }
  function g(T) {
    if (((v = !1), h(T), !y))
      if (n(s) !== null) (y = !0), qe(C);
      else {
        var U = n(a);
        U !== null && cn(g, U.startTime - T);
      }
  }
  function C(T, U) {
    (y = !1), v && ((v = !1), c(z), (z = -1)), (w = !0);
    var $ = m;
    try {
      for (h(U), p = n(s); p !== null && (!(p.expirationTime > U) || (T && !Ne())); ) {
        var W = p.callback;
        if (typeof W == 'function') {
          (p.callback = null), (m = p.priorityLevel);
          var ne = W(p.expirationTime <= U);
          (U = e.unstable_now()), typeof ne == 'function' ? (p.callback = ne) : p === n(s) && r(s), h(U);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var fn = !0;
      else {
        var xt = n(a);
        xt !== null && cn(g, xt.startTime - U), (fn = !1);
      }
      return fn;
    } finally {
      (p = null), (m = $), (w = !1);
    }
  }
  var N = !1,
    O = null,
    z = -1,
    I = 5,
    H = -1;
  function Ne() {
    return !(e.unstable_now() - H < I);
  }
  function ot() {
    if (O !== null) {
      var T = e.unstable_now();
      H = T;
      var U = !0;
      try {
        U = O(!0, T);
      } finally {
        U ? it() : ((N = !1), (O = null));
      }
    } else N = !1;
  }
  var it;
  if (typeof d == 'function')
    it = function () {
      d(ot);
    };
  else if (typeof MessageChannel < 'u') {
    var _t = new MessageChannel(),
      kt = _t.port2;
    (_t.port1.onmessage = ot),
      (it = function () {
        kt.postMessage(null);
      });
  } else
    it = function () {
      R(ot, 0);
    };
  function qe(T) {
    (O = T), N || ((N = !0), it());
  }
  function cn(T, U) {
    z = R(function () {
      T(e.unstable_now());
    }, U);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || w || ((y = !0), qe(C));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (I = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (T) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = m;
      }
      var $ = m;
      m = U;
      try {
        return T();
      } finally {
        m = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, U) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var $ = m;
      m = T;
      try {
        return U();
      } finally {
        m = $;
      }
    }),
    (e.unstable_scheduleCallback = function (T, U, $) {
      var W = e.unstable_now();
      switch (
        (typeof $ == 'object' && $ !== null
          ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? W + $ : W))
          : ($ = W),
        T)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = $ + ne),
        (T = { id: f++, callback: U, priorityLevel: T, startTime: $, expirationTime: ne, sortIndex: -1 }),
        $ > W
          ? ((T.sortIndex = $), t(a, T), n(s) === null && T === n(a) && (v ? (c(z), (z = -1)) : (v = !0), cn(g, $ - W)))
          : ((T.sortIndex = ne), t(s, T), y || w || ((y = !0), qe(C))),
        T
      );
    }),
    (e.unstable_shouldYield = Ne),
    (e.unstable_wrapCallback = function (T) {
      var U = m;
      return function () {
        var $ = m;
        m = U;
        try {
          return T.apply(this, arguments);
        } finally {
          m = $;
        }
      };
    });
})(Bf);
If.exports = Bf;
var vm = If.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $f = P,
  Ve = vm;
function x(e) {
  for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Hf = new Set(),
  Zr = {};
function On(e, t) {
  ir(e, t), ir(e + 'Capture', t);
}
function ir(e, t) {
  for (Zr[e] = t, e = 0; e < t.length; e++) Hf.add(t[e]);
}
var Mt = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  mu = Object.prototype.hasOwnProperty,
  gm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Aa = {},
  Fa = {};
function wm(e) {
  return mu.call(Fa, e) ? !0 : mu.call(Aa, e) ? !1 : gm.test(e) ? (Fa[e] = !0) : ((Aa[e] = !0), !1);
}
function Sm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Em(e, t, n, r) {
  if (t === null || typeof t > 'u' || Sm(e, t, n, r)) return !0;
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
function De(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var _e = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    _e[e] = new De(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  _e[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  _e[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  _e[e] = new De(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    _e[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  _e[e] = new De(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  _e[e] = new De(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  _e[e] = new De(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  _e[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Es = /[\-:]([a-z])/g;
function _s(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Es, _s);
    _e[t] = new De(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(Es, _s);
  _e[t] = new De(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Es, _s);
  _e[t] = new De(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  _e[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new De('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  _e[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ks(e, t, n, r) {
  var o = _e.hasOwnProperty(t) ? _e[t] : null;
  (o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (Em(t, n, o, r) && (n = null),
    r || o === null
      ? wm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = $f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Mo = Symbol.for('react.element'),
  Fn = Symbol.for('react.portal'),
  jn = Symbol.for('react.fragment'),
  xs = Symbol.for('react.strict_mode'),
  yu = Symbol.for('react.profiler'),
  Wf = Symbol.for('react.provider'),
  Vf = Symbol.for('react.context'),
  Cs = Symbol.for('react.forward_ref'),
  vu = Symbol.for('react.suspense'),
  gu = Symbol.for('react.suspense_list'),
  Rs = Symbol.for('react.memo'),
  Wt = Symbol.for('react.lazy'),
  Qf = Symbol.for('react.offscreen'),
  ja = Symbol.iterator;
function xr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ja && e[ja]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var ue = Object.assign,
  Tl;
function Ar(e) {
  if (Tl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Tl = (t && t[1]) || '';
    }
  return (
    `
` +
    Tl +
    e
  );
}
var Ll = !1;
function Dl(e, t) {
  if (!e || Ll) return '';
  Ll = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var o = a.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          u = i.length - 1;
        1 <= l && 0 <= u && o[l] !== i[u];

      )
        u--;
      for (; 1 <= l && 0 <= u; l--, u--)
        if (o[l] !== i[u]) {
          if (l !== 1 || u !== 1)
            do
              if ((l--, u--, 0 > u || o[l] !== i[u])) {
                var s =
                  `
` + o[l].replace(' at new ', ' at ');
                return e.displayName && s.includes('<anonymous>') && (s = s.replace('<anonymous>', e.displayName)), s;
              }
            while (1 <= l && 0 <= u);
          break;
        }
    }
  } finally {
    (Ll = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Ar(e) : '';
}
function _m(e) {
  switch (e.tag) {
    case 5:
      return Ar(e.type);
    case 16:
      return Ar('Lazy');
    case 13:
      return Ar('Suspense');
    case 19:
      return Ar('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Dl(e.type, !1)), e;
    case 11:
      return (e = Dl(e.type.render, !1)), e;
    case 1:
      return (e = Dl(e.type, !0)), e;
    default:
      return '';
  }
}
function wu(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case jn:
      return 'Fragment';
    case Fn:
      return 'Portal';
    case yu:
      return 'Profiler';
    case xs:
      return 'StrictMode';
    case vu:
      return 'Suspense';
    case gu:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Vf:
        return (e.displayName || 'Context') + '.Consumer';
      case Wf:
        return (e._context.displayName || 'Context') + '.Provider';
      case Cs:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Rs:
        return (t = e.displayName || null), t !== null ? t : wu(e.type) || 'Memo';
      case Wt:
        (t = e._payload), (e = e._init);
        try {
          return wu(e(t));
        } catch {}
    }
  return null;
}
function km(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return wu(t);
    case 8:
      return t === xs ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function rn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Kf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function xm(e) {
  var t = Kf(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = '' + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = '' + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ao(e) {
  e._valueTracker || (e._valueTracker = xm(e));
}
function qf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return e && (r = Kf(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function mi(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Su(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ua(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = rn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function Jf(e, t) {
  (t = t.checked), t != null && ks(e, 'checked', t, !1);
}
function Eu(e, t) {
  Jf(e, t);
  var n = rn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value') ? _u(e, t.type, n) : t.hasOwnProperty('defaultValue') && _u(e, t.type, rn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ia(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function _u(e, t, n) {
  (t !== 'number' || mi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Fr = Array.isArray;
function Xn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + rn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ku(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return ue({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Ba(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (Fr(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: rn(n) };
}
function Yf(e, t) {
  var n = rn(t.value),
    r = rn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function $a(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Xf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function xu(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Xf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Fo,
  Gf = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        Fo = Fo || document.createElement('div'),
          Fo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Fo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function br(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ir = {
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
  Cm = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ir).forEach(function (e) {
  Cm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ir[t] = Ir[e]);
  });
});
function Zf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Ir.hasOwnProperty(e) && Ir[e])
    ? ('' + t).trim()
    : t + 'px';
}
function bf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Zf(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Rm = ue(
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
function Cu(e, t) {
  if (t) {
    if (Rm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(x(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(x(62));
  }
}
function Ru(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Pu = null;
function Ps(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Nu = null,
  Gn = null,
  Zn = null;
function Ha(e) {
  if ((e = ko(e))) {
    if (typeof Nu != 'function') throw Error(x(280));
    var t = e.stateNode;
    t && ((t = Xi(t)), Nu(e.stateNode, e.type, t));
  }
}
function ed(e) {
  Gn ? (Zn ? Zn.push(e) : (Zn = [e])) : (Gn = e);
}
function td() {
  if (Gn) {
    var e = Gn,
      t = Zn;
    if (((Zn = Gn = null), Ha(e), t)) for (e = 0; e < t.length; e++) Ha(t[e]);
  }
}
function nd(e, t) {
  return e(t);
}
function rd() {}
var zl = !1;
function od(e, t, n) {
  if (zl) return e(t, n);
  zl = !0;
  try {
    return nd(e, t, n);
  } finally {
    (zl = !1), (Gn !== null || Zn !== null) && (rd(), td());
  }
}
function eo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(x(231, t, typeof n));
  return n;
}
var Ou = !1;
if (Mt)
  try {
    var Cr = {};
    Object.defineProperty(Cr, 'passive', {
      get: function () {
        Ou = !0;
      },
    }),
      window.addEventListener('test', Cr, Cr),
      window.removeEventListener('test', Cr, Cr);
  } catch {
    Ou = !1;
  }
function Pm(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (f) {
    this.onError(f);
  }
}
var Br = !1,
  yi = null,
  vi = !1,
  Tu = null,
  Nm = {
    onError: function (e) {
      (Br = !0), (yi = e);
    },
  };
function Om(e, t, n, r, o, i, l, u, s) {
  (Br = !1), (yi = null), Pm.apply(Nm, arguments);
}
function Tm(e, t, n, r, o, i, l, u, s) {
  if ((Om.apply(this, arguments), Br)) {
    if (Br) {
      var a = yi;
      (Br = !1), (yi = null);
    } else throw Error(x(198));
    vi || ((vi = !0), (Tu = a));
  }
}
function Tn(e) {
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
function id(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Wa(e) {
  if (Tn(e) !== e) throw Error(x(188));
}
function Lm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tn(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Wa(o), e;
        if (i === r) return Wa(o), t;
        i = i.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, u = o.child; u; ) {
        if (u === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (u === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (u === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function ld(e) {
  return (e = Lm(e)), e !== null ? ud(e) : null;
}
function ud(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ud(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var sd = Ve.unstable_scheduleCallback,
  Va = Ve.unstable_cancelCallback,
  Dm = Ve.unstable_shouldYield,
  zm = Ve.unstable_requestPaint,
  ae = Ve.unstable_now,
  Mm = Ve.unstable_getCurrentPriorityLevel,
  Ns = Ve.unstable_ImmediatePriority,
  ad = Ve.unstable_UserBlockingPriority,
  gi = Ve.unstable_NormalPriority,
  Am = Ve.unstable_LowPriority,
  cd = Ve.unstable_IdlePriority,
  Ki = null,
  wt = null;
function Fm(e) {
  if (wt && typeof wt.onCommitFiberRoot == 'function')
    try {
      wt.onCommitFiberRoot(Ki, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var dt = Math.clz32 ? Math.clz32 : Im,
  jm = Math.log,
  Um = Math.LN2;
function Im(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((jm(e) / Um) | 0)) | 0;
}
var jo = 64,
  Uo = 4194304;
function jr(e) {
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
function wi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? (r = jr(u)) : ((i &= l), i !== 0 && (r = jr(i)));
  } else (l = n & ~o), l !== 0 ? (r = jr(l)) : i !== 0 && (r = jr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - dt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Bm(e, t) {
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
function $m(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - dt(i),
      u = 1 << l,
      s = o[l];
    s === -1 ? (!(u & n) || u & r) && (o[l] = Bm(u, t)) : s <= t && (e.expiredLanes |= u), (i &= ~u);
  }
}
function Lu(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function fd() {
  var e = jo;
  return (jo <<= 1), !(jo & 4194240) && (jo = 64), e;
}
function Ml(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Eo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - dt(t)),
    (e[t] = n);
}
function Hm(e, t) {
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
    var o = 31 - dt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Os(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - dt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var G = 0;
function dd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pd,
  Ts,
  hd,
  md,
  yd,
  Du = !1,
  Io = [],
  Yt = null,
  Xt = null,
  Gt = null,
  to = new Map(),
  no = new Map(),
  Qt = [],
  Wm =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Qa(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Yt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Xt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Gt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      to.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      no.delete(t.pointerId);
  }
}
function Rr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
      t !== null && ((t = ko(t)), t !== null && Ts(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Vm(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Yt = Rr(Yt, e, t, n, r, o)), !0;
    case 'dragenter':
      return (Xt = Rr(Xt, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Gt = Rr(Gt, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return to.set(i, Rr(to.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (i = o.pointerId), no.set(i, Rr(no.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function vd(e) {
  var t = mn(e.target);
  if (t !== null) {
    var n = Tn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = id(n)), t !== null)) {
          (e.blockedOn = t),
            yd(e.priority, function () {
              hd(n);
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
function Zo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = zu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Pu = r), n.target.dispatchEvent(r), (Pu = null);
    } else return (t = ko(n)), t !== null && Ts(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ka(e, t, n) {
  Zo(e) && n.delete(t);
}
function Qm() {
  (Du = !1),
    Yt !== null && Zo(Yt) && (Yt = null),
    Xt !== null && Zo(Xt) && (Xt = null),
    Gt !== null && Zo(Gt) && (Gt = null),
    to.forEach(Ka),
    no.forEach(Ka);
}
function Pr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), Du || ((Du = !0), Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, Qm)));
}
function ro(e) {
  function t(o) {
    return Pr(o, e);
  }
  if (0 < Io.length) {
    Pr(Io[0], e);
    for (var n = 1; n < Io.length; n++) {
      var r = Io[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Yt !== null && Pr(Yt, e), Xt !== null && Pr(Xt, e), Gt !== null && Pr(Gt, e), to.forEach(t), no.forEach(t), n = 0;
    n < Qt.length;
    n++
  )
    (r = Qt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); ) vd(n), n.blockedOn === null && Qt.shift();
}
var bn = Ut.ReactCurrentBatchConfig,
  Si = !0;
function Km(e, t, n, r) {
  var o = G,
    i = bn.transition;
  bn.transition = null;
  try {
    (G = 1), Ls(e, t, n, r);
  } finally {
    (G = o), (bn.transition = i);
  }
}
function qm(e, t, n, r) {
  var o = G,
    i = bn.transition;
  bn.transition = null;
  try {
    (G = 4), Ls(e, t, n, r);
  } finally {
    (G = o), (bn.transition = i);
  }
}
function Ls(e, t, n, r) {
  if (Si) {
    var o = zu(e, t, n, r);
    if (o === null) Vl(e, t, r, Ei, n), Qa(e, r);
    else if (Vm(o, e, t, n, r)) r.stopPropagation();
    else if ((Qa(e, r), t & 4 && -1 < Wm.indexOf(e))) {
      for (; o !== null; ) {
        var i = ko(o);
        if ((i !== null && pd(i), (i = zu(e, t, n, r)), i === null && Vl(e, t, r, Ei, n), i === o)) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Vl(e, t, r, null, n);
  }
}
var Ei = null;
function zu(e, t, n, r) {
  if (((Ei = null), (e = Ps(r)), (e = mn(e)), e !== null))
    if (((t = Tn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = id(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ei = e), null;
}
function gd(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Mm()) {
        case Ns:
          return 1;
        case ad:
          return 4;
        case gi:
        case Am:
          return 16;
        case cd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qt = null,
  Ds = null,
  bo = null;
function wd() {
  if (bo) return bo;
  var e,
    t = Ds,
    n = t.length,
    r,
    o = 'value' in qt ? qt.value : qt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (bo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ei(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Bo() {
  return !0;
}
function qa() {
  return !1;
}
function Ke(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Bo : qa),
      (this.isPropagationStopped = qa),
      this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Bo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Bo));
      },
      persist: function () {},
      isPersistent: Bo,
    }),
    t
  );
}
var mr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  zs = Ke(mr),
  _o = ue({}, mr, { view: 0, detail: 0 }),
  Jm = Ke(_o),
  Al,
  Fl,
  Nr,
  qi = ue({}, _o, {
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
    getModifierState: Ms,
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
      return 'movementX' in e
        ? e.movementX
        : (e !== Nr &&
            (Nr && e.type === 'mousemove'
              ? ((Al = e.screenX - Nr.screenX), (Fl = e.screenY - Nr.screenY))
              : (Fl = Al = 0),
            (Nr = e)),
          Al);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Fl;
    },
  }),
  Ja = Ke(qi),
  Ym = ue({}, qi, { dataTransfer: 0 }),
  Xm = Ke(Ym),
  Gm = ue({}, _o, { relatedTarget: 0 }),
  jl = Ke(Gm),
  Zm = ue({}, mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bm = Ke(Zm),
  ey = ue({}, mr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ty = Ke(ey),
  ny = ue({}, mr, { data: 0 }),
  Ya = Ke(ny),
  ry = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  oy = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  iy = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function ly(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = iy[e]) ? !!t[e] : !1;
}
function Ms() {
  return ly;
}
var uy = ue({}, _o, {
    key: function (e) {
      if (e.key) {
        var t = ry[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = ei(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? oy[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ms,
    charCode: function (e) {
      return e.type === 'keypress' ? ei(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress' ? ei(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
  }),
  sy = Ke(uy),
  ay = ue({}, qi, {
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
  Xa = Ke(ay),
  cy = ue({}, _o, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ms,
  }),
  fy = Ke(cy),
  dy = ue({}, mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  py = Ke(dy),
  hy = ue({}, qi, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  my = Ke(hy),
  yy = [9, 13, 27, 32],
  As = Mt && 'CompositionEvent' in window,
  $r = null;
Mt && 'documentMode' in document && ($r = document.documentMode);
var vy = Mt && 'TextEvent' in window && !$r,
  Sd = Mt && (!As || ($r && 8 < $r && 11 >= $r)),
  Ga = String.fromCharCode(32),
  Za = !1;
function Ed(e, t) {
  switch (e) {
    case 'keyup':
      return yy.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function _d(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Un = !1;
function gy(e, t) {
  switch (e) {
    case 'compositionend':
      return _d(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Za = !0), Ga);
    case 'textInput':
      return (e = t.data), e === Ga && Za ? null : e;
    default:
      return null;
  }
}
function wy(e, t) {
  if (Un) return e === 'compositionend' || (!As && Ed(e, t)) ? ((e = wd()), (bo = Ds = qt = null), (Un = !1), e) : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Sd && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Sy = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function ba(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Sy[e.type] : t === 'textarea';
}
function kd(e, t, n, r) {
  ed(r),
    (t = _i(t, 'onChange')),
    0 < t.length && ((n = new zs('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Hr = null,
  oo = null;
function Ey(e) {
  Md(e, 0);
}
function Ji(e) {
  var t = $n(e);
  if (qf(t)) return e;
}
function _y(e, t) {
  if (e === 'change') return t;
}
var xd = !1;
if (Mt) {
  var Ul;
  if (Mt) {
    var Il = 'oninput' in document;
    if (!Il) {
      var ec = document.createElement('div');
      ec.setAttribute('oninput', 'return;'), (Il = typeof ec.oninput == 'function');
    }
    Ul = Il;
  } else Ul = !1;
  xd = Ul && (!document.documentMode || 9 < document.documentMode);
}
function tc() {
  Hr && (Hr.detachEvent('onpropertychange', Cd), (oo = Hr = null));
}
function Cd(e) {
  if (e.propertyName === 'value' && Ji(oo)) {
    var t = [];
    kd(t, oo, e, Ps(e)), od(Ey, t);
  }
}
function ky(e, t, n) {
  e === 'focusin' ? (tc(), (Hr = t), (oo = n), Hr.attachEvent('onpropertychange', Cd)) : e === 'focusout' && tc();
}
function xy(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Ji(oo);
}
function Cy(e, t) {
  if (e === 'click') return Ji(t);
}
function Ry(e, t) {
  if (e === 'input' || e === 'change') return Ji(t);
}
function Py(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ht = typeof Object.is == 'function' ? Object.is : Py;
function io(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!mu.call(t, o) || !ht(e[o], t[o])) return !1;
  }
  return !0;
}
function nc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function rc(e, t) {
  var n = nc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
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
    n = nc(n);
  }
}
function Rd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Rd(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Pd() {
  for (var e = window, t = mi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = mi(e.document);
  }
  return t;
}
function Fs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Ny(e) {
  var t = Pd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Rd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Fs(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = rc(n, i));
        var l = rc(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Oy = Mt && 'documentMode' in document && 11 >= document.documentMode,
  In = null,
  Mu = null,
  Wr = null,
  Au = !1;
function oc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Au ||
    In == null ||
    In !== mi(r) ||
    ((r = In),
    'selectionStart' in r && Fs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Wr && io(Wr, r)) ||
      ((Wr = r),
      (r = _i(Mu, 'onSelect')),
      0 < r.length &&
        ((t = new zs('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = In))));
}
function $o(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var Bn = {
    animationend: $o('Animation', 'AnimationEnd'),
    animationiteration: $o('Animation', 'AnimationIteration'),
    animationstart: $o('Animation', 'AnimationStart'),
    transitionend: $o('Transition', 'TransitionEnd'),
  },
  Bl = {},
  Nd = {};
Mt &&
  ((Nd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Bn.animationend.animation, delete Bn.animationiteration.animation, delete Bn.animationstart.animation),
  'TransitionEvent' in window || delete Bn.transitionend.transition);
function Yi(e) {
  if (Bl[e]) return Bl[e];
  if (!Bn[e]) return e;
  var t = Bn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nd) return (Bl[e] = t[n]);
  return e;
}
var Od = Yi('animationend'),
  Td = Yi('animationiteration'),
  Ld = Yi('animationstart'),
  Dd = Yi('transitionend'),
  zd = new Map(),
  ic =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function ln(e, t) {
  zd.set(e, t), On(t, [e]);
}
for (var $l = 0; $l < ic.length; $l++) {
  var Hl = ic[$l],
    Ty = Hl.toLowerCase(),
    Ly = Hl[0].toUpperCase() + Hl.slice(1);
  ln(Ty, 'on' + Ly);
}
ln(Od, 'onAnimationEnd');
ln(Td, 'onAnimationIteration');
ln(Ld, 'onAnimationStart');
ln('dblclick', 'onDoubleClick');
ln('focusin', 'onFocus');
ln('focusout', 'onBlur');
ln(Dd, 'onTransitionEnd');
ir('onMouseEnter', ['mouseout', 'mouseover']);
ir('onMouseLeave', ['mouseout', 'mouseover']);
ir('onPointerEnter', ['pointerout', 'pointerover']);
ir('onPointerLeave', ['pointerout', 'pointerover']);
On('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
On('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
On('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
On('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
On('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
On('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Ur =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Dy = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ur));
function lc(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Tm(r, t, void 0, e), (e.currentTarget = null);
}
function Md(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var u = r[l],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && o.isPropagationStopped())) break e;
          lc(o, u, a), (i = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((u = r[l]), (s = u.instance), (a = u.currentTarget), (u = u.listener), s !== i && o.isPropagationStopped())
          )
            break e;
          lc(o, u, a), (i = s);
        }
    }
  }
  if (vi) throw ((e = Tu), (vi = !1), (Tu = null), e);
}
function ee(e, t) {
  var n = t[Bu];
  n === void 0 && (n = t[Bu] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Ad(t, e, 2, !1), n.add(r));
}
function Wl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ad(n, e, r, t);
}
var Ho = '_reactListening' + Math.random().toString(36).slice(2);
function lo(e) {
  if (!e[Ho]) {
    (e[Ho] = !0),
      Hf.forEach(function (n) {
        n !== 'selectionchange' && (Dy.has(n) || Wl(n, !1, e), Wl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ho] || ((t[Ho] = !0), Wl('selectionchange', !1, t));
  }
}
function Ad(e, t, n, r) {
  switch (gd(t)) {
    case 1:
      var o = Km;
      break;
    case 4:
      o = qm;
      break;
    default:
      o = Ls;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ou || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Vl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var u = r.stateNode.containerInfo;
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo), s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; u !== null; ) {
          if (((l = mn(u)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  od(function () {
    var a = i,
      f = Ps(n),
      p = [];
    e: {
      var m = zd.get(e);
      if (m !== void 0) {
        var w = zs,
          y = e;
        switch (e) {
          case 'keypress':
            if (ei(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = sy;
            break;
          case 'focusin':
            (y = 'focus'), (w = jl);
            break;
          case 'focusout':
            (y = 'blur'), (w = jl);
            break;
          case 'beforeblur':
          case 'afterblur':
            w = jl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            w = Ja;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = Xm;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = fy;
            break;
          case Od:
          case Td:
          case Ld:
            w = bm;
            break;
          case Dd:
            w = py;
            break;
          case 'scroll':
            w = Jm;
            break;
          case 'wheel':
            w = my;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = ty;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = Xa;
        }
        var v = (t & 4) !== 0,
          R = !v && e === 'scroll',
          c = v ? (m !== null ? m + 'Capture' : null) : m;
        v = [];
        for (var d = a, h; d !== null; ) {
          h = d;
          var g = h.stateNode;
          if (
            (h.tag === 5 && g !== null && ((h = g), c !== null && ((g = eo(d, c)), g != null && v.push(uo(d, g, h)))),
            R)
          )
            break;
          d = d.return;
        }
        0 < v.length && ((m = new w(m, y, null, n, f)), p.push({ event: m, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          m && n !== Pu && (y = n.relatedTarget || n.fromElement) && (mn(y) || y[At]))
        )
          break e;
        if (
          (w || m) &&
          ((m = f.window === f ? f : (m = f.ownerDocument) ? m.defaultView || m.parentWindow : window),
          w
            ? ((y = n.relatedTarget || n.toElement),
              (w = a),
              (y = y ? mn(y) : null),
              y !== null && ((R = Tn(y)), y !== R || (y.tag !== 5 && y.tag !== 6)) && (y = null))
            : ((w = null), (y = a)),
          w !== y)
        ) {
          if (
            ((v = Ja),
            (g = 'onMouseLeave'),
            (c = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = Xa), (g = 'onPointerLeave'), (c = 'onPointerEnter'), (d = 'pointer')),
            (R = w == null ? m : $n(w)),
            (h = y == null ? m : $n(y)),
            (m = new v(g, d + 'leave', w, n, f)),
            (m.target = R),
            (m.relatedTarget = h),
            (g = null),
            mn(f) === a && ((v = new v(c, d + 'enter', y, n, f)), (v.target = h), (v.relatedTarget = R), (g = v)),
            (R = g),
            w && y)
          )
            t: {
              for (v = w, c = y, d = 0, h = v; h; h = Mn(h)) d++;
              for (h = 0, g = c; g; g = Mn(g)) h++;
              for (; 0 < d - h; ) (v = Mn(v)), d--;
              for (; 0 < h - d; ) (c = Mn(c)), h--;
              for (; d--; ) {
                if (v === c || (c !== null && v === c.alternate)) break t;
                (v = Mn(v)), (c = Mn(c));
              }
              v = null;
            }
          else v = null;
          w !== null && uc(p, m, w, v, !1), y !== null && R !== null && uc(p, R, y, v, !0);
        }
      }
      e: {
        if (
          ((m = a ? $n(a) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && m.type === 'file'))
        )
          var C = _y;
        else if (ba(m))
          if (xd) C = Ry;
          else {
            C = xy;
            var N = ky;
          }
        else
          (w = m.nodeName) && w.toLowerCase() === 'input' && (m.type === 'checkbox' || m.type === 'radio') && (C = Cy);
        if (C && (C = C(e, a))) {
          kd(p, C, n, f);
          break e;
        }
        N && N(e, m, a),
          e === 'focusout' && (N = m._wrapperState) && N.controlled && m.type === 'number' && _u(m, 'number', m.value);
      }
      switch (((N = a ? $n(a) : window), e)) {
        case 'focusin':
          (ba(N) || N.contentEditable === 'true') && ((In = N), (Mu = a), (Wr = null));
          break;
        case 'focusout':
          Wr = Mu = In = null;
          break;
        case 'mousedown':
          Au = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Au = !1), oc(p, n, f);
          break;
        case 'selectionchange':
          if (Oy) break;
        case 'keydown':
        case 'keyup':
          oc(p, n, f);
      }
      var O;
      if (As)
        e: {
          switch (e) {
            case 'compositionstart':
              var z = 'onCompositionStart';
              break e;
            case 'compositionend':
              z = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              z = 'onCompositionUpdate';
              break e;
          }
          z = void 0;
        }
      else
        Un ? Ed(e, n) && (z = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (z = 'onCompositionStart');
      z &&
        (Sd &&
          n.locale !== 'ko' &&
          (Un || z !== 'onCompositionStart'
            ? z === 'onCompositionEnd' && Un && (O = wd())
            : ((qt = f), (Ds = 'value' in qt ? qt.value : qt.textContent), (Un = !0))),
        (N = _i(a, z)),
        0 < N.length &&
          ((z = new Ya(z, e, null, n, f)),
          p.push({ event: z, listeners: N }),
          O ? (z.data = O) : ((O = _d(n)), O !== null && (z.data = O)))),
        (O = vy ? gy(e, n) : wy(e, n)) &&
          ((a = _i(a, 'onBeforeInput')),
          0 < a.length &&
            ((f = new Ya('onBeforeInput', 'beforeinput', null, n, f)),
            p.push({ event: f, listeners: a }),
            (f.data = O)));
    }
    Md(p, t);
  });
}
function uo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _i(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i), (i = eo(e, n)), i != null && r.unshift(uo(e, i, o)), (i = eo(e, t)), i != null && r.push(uo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function uc(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      o
        ? ((s = eo(n, i)), s != null && l.unshift(uo(n, s, u)))
        : o || ((s = eo(n, i)), s != null && l.push(uo(n, s, u)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var zy = /\r\n?/g,
  My = /\u0000|\uFFFD/g;
function sc(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      zy,
      `
`,
    )
    .replace(My, '');
}
function Wo(e, t, n) {
  if (((t = sc(t)), sc(e) !== t && n)) throw Error(x(425));
}
function ki() {}
var Fu = null,
  ju = null;
function Uu(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Iu = typeof setTimeout == 'function' ? setTimeout : void 0,
  Ay = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  ac = typeof Promise == 'function' ? Promise : void 0,
  Fy =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof ac < 'u'
      ? function (e) {
          return ac.resolve(null).then(e).catch(jy);
        }
      : Iu;
function jy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ql(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), ro(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  ro(t);
}
function Zt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function cc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var yr = Math.random().toString(36).slice(2),
  vt = '__reactFiber$' + yr,
  so = '__reactProps$' + yr,
  At = '__reactContainer$' + yr,
  Bu = '__reactEvents$' + yr,
  Uy = '__reactListeners$' + yr,
  Iy = '__reactHandles$' + yr;
function mn(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[At] || n[vt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = cc(e); e !== null; ) {
          if ((n = e[vt])) return n;
          e = cc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ko(e) {
  return (e = e[vt] || e[At]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function $n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function Xi(e) {
  return e[so] || null;
}
var $u = [],
  Hn = -1;
function un(e) {
  return { current: e };
}
function te(e) {
  0 > Hn || ((e.current = $u[Hn]), ($u[Hn] = null), Hn--);
}
function b(e, t) {
  Hn++, ($u[Hn] = e.current), (e.current = t);
}
var on = {},
  Pe = un(on),
  Ae = un(!1),
  kn = on;
function lr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return on;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Fe(e) {
  return (e = e.childContextTypes), e != null;
}
function xi() {
  te(Ae), te(Pe);
}
function fc(e, t, n) {
  if (Pe.current !== on) throw Error(x(168));
  b(Pe, t), b(Ae, n);
}
function Fd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(x(108, km(e) || 'Unknown', o));
  return ue({}, n, r);
}
function Ci(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || on),
    (kn = Pe.current),
    b(Pe, e),
    b(Ae, Ae.current),
    !0
  );
}
function dc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n ? ((e = Fd(e, t, kn)), (r.__reactInternalMemoizedMergedChildContext = e), te(Ae), te(Pe), b(Pe, e)) : te(Ae),
    b(Ae, n);
}
var Nt = null,
  Gi = !1,
  Kl = !1;
function jd(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function By(e) {
  (Gi = !0), jd(e);
}
function sn() {
  if (!Kl && Nt !== null) {
    Kl = !0;
    var e = 0,
      t = G;
    try {
      var n = Nt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Nt = null), (Gi = !1);
    } catch (o) {
      throw (Nt !== null && (Nt = Nt.slice(e + 1)), sd(Ns, sn), o);
    } finally {
      (G = t), (Kl = !1);
    }
  }
  return null;
}
var Wn = [],
  Vn = 0,
  Ri = null,
  Pi = 0,
  Ge = [],
  Ze = 0,
  xn = null,
  Ot = 1,
  Tt = '';
function pn(e, t) {
  (Wn[Vn++] = Pi), (Wn[Vn++] = Ri), (Ri = e), (Pi = t);
}
function Ud(e, t, n) {
  (Ge[Ze++] = Ot), (Ge[Ze++] = Tt), (Ge[Ze++] = xn), (xn = e);
  var r = Ot;
  e = Tt;
  var o = 32 - dt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - dt(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Ot = (1 << (32 - dt(t) + o)) | (n << o) | r),
      (Tt = i + e);
  } else (Ot = (1 << i) | (n << o) | r), (Tt = e);
}
function js(e) {
  e.return !== null && (pn(e, 1), Ud(e, 1, 0));
}
function Us(e) {
  for (; e === Ri; ) (Ri = Wn[--Vn]), (Wn[Vn] = null), (Pi = Wn[--Vn]), (Wn[Vn] = null);
  for (; e === xn; )
    (xn = Ge[--Ze]), (Ge[Ze] = null), (Tt = Ge[--Ze]), (Ge[Ze] = null), (Ot = Ge[--Ze]), (Ge[Ze] = null);
}
var $e = null,
  Be = null,
  re = !1,
  ct = null;
function Id(e, t) {
  var n = be(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function pc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), ($e = e), (Be = Zt(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), ($e = e), (Be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = xn !== null ? { id: Ot, overflow: Tt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            ($e = e),
            (Be = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Hu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wu(e) {
  if (re) {
    var t = Be;
    if (t) {
      var n = t;
      if (!pc(e, t)) {
        if (Hu(e)) throw Error(x(418));
        t = Zt(n.nextSibling);
        var r = $e;
        t && pc(e, t) ? Id(r, n) : ((e.flags = (e.flags & -4097) | 2), (re = !1), ($e = e));
      }
    } else {
      if (Hu(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (re = !1), ($e = e);
    }
  }
}
function hc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  $e = e;
}
function Vo(e) {
  if (e !== $e) return !1;
  if (!re) return hc(e), (re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Uu(e.type, e.memoizedProps))),
    t && (t = Be))
  ) {
    if (Hu(e)) throw (Bd(), Error(x(418)));
    for (; t; ) Id(e, t), (t = Zt(t.nextSibling));
  }
  if ((hc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Be = Zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = $e ? Zt(e.stateNode.nextSibling) : null;
  return !0;
}
function Bd() {
  for (var e = Be; e; ) e = Zt(e.nextSibling);
}
function ur() {
  (Be = $e = null), (re = !1);
}
function Is(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
var $y = Ut.ReactCurrentBatchConfig;
function ut(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ni = un(null),
  Oi = null,
  Qn = null,
  Bs = null;
function $s() {
  Bs = Qn = Oi = null;
}
function Hs(e) {
  var t = Ni.current;
  te(Ni), (e._currentValue = t);
}
function Vu(e, t, n) {
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
function er(e, t) {
  (Oi = e),
    (Bs = Qn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Me = !0), (e.firstContext = null));
}
function nt(e) {
  var t = e._currentValue;
  if (Bs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Qn === null)) {
      if (Oi === null) throw Error(x(308));
      (Qn = e), (Oi.dependencies = { lanes: 0, firstContext: e });
    } else Qn = Qn.next = e;
  return t;
}
var yn = null;
function Ws(e) {
  yn === null ? (yn = [e]) : yn.push(e);
}
function $d(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? ((n.next = n), Ws(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), Ft(e, r);
}
function Ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Vt = !1;
function Vs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Hd(e, t) {
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
function Lt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), Ft(e, n);
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ws(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Ft(e, n)
  );
}
function ti(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Os(e, n);
  }
}
function mc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Ti(e, t, n, r) {
  var o = e.updateQueue;
  Vt = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), l === null ? (i = a) : (l.next = a), (l = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (u = f.lastBaseUpdate),
      u !== l && (u === null ? (f.firstBaseUpdate = a) : (u.next = a), (f.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var p = o.baseState;
    (l = 0), (f = a = s = null), (u = i);
    do {
      var m = u.lane,
        w = u.eventTime;
      if ((r & m) === m) {
        f !== null &&
          (f = f.next = { eventTime: w, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null });
        e: {
          var y = e,
            v = u;
          switch (((m = t), (w = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == 'function')) {
                p = y.call(w, p, m);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (((y = v.payload), (m = typeof y == 'function' ? y.call(w, p, m) : y), m == null)) break e;
              p = ue({}, p, m);
              break e;
            case 2:
              Vt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64), (m = o.effects), m === null ? (o.effects = [u]) : m.push(u));
      } else
        (w = { eventTime: w, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }),
          f === null ? ((a = f = w), (s = p)) : (f = f.next = w),
          (l |= m);
      if (((u = u.next), u === null)) {
        if (((u = o.shared.pending), u === null)) break;
        (m = u), (u = m.next), (m.next = null), (o.lastBaseUpdate = m), (o.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (s = p),
      (o.baseState = s),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Rn |= l), (e.lanes = l), (e.memoizedState = p);
  }
}
function yc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(x(191, o));
        o.call(r);
      }
    }
}
var Wd = new $f.Component().refs;
function Qu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      o = tn(e),
      i = Lt(r, o);
    (i.payload = t), n != null && (i.callback = n), (t = bt(e, i, o)), t !== null && (pt(t, e, o, r), ti(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      o = tn(e),
      i = Lt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = bt(e, i, o)),
      t !== null && (pt(t, e, o, r), ti(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Te(),
      r = tn(e),
      o = Lt(n, r);
    (o.tag = 2), t != null && (o.callback = t), (t = bt(e, o, r)), t !== null && (pt(t, e, r, n), ti(t, e, r));
  },
};
function vc(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !io(n, r) || !io(o, i)
      : !0
  );
}
function Vd(e, t, n) {
  var r = !1,
    o = on,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = nt(i))
      : ((o = Fe(t) ? kn : Pe.current), (r = t.contextTypes), (i = (r = r != null) ? lr(e, o) : on)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Zi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function gc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Zi.enqueueReplaceState(t, t.state, null);
}
function Ku(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Wd), Vs(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null ? (o.context = nt(i)) : ((i = Fe(t) ? kn : Pe.current), (o.context = lr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Qu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && Zi.enqueueReplaceState(o, o.state, null),
      Ti(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Or(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var o = r,
        i = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var u = o.refs;
            u === Wd && (u = o.refs = {}), l === null ? delete u[i] : (u[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function Qo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(x(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  );
}
function wc(e) {
  var t = e._init;
  return t(e._payload);
}
function Qd(e) {
  function t(c, d) {
    if (e) {
      var h = c.deletions;
      h === null ? ((c.deletions = [d]), (c.flags |= 16)) : h.push(d);
    }
  }
  function n(c, d) {
    if (!e) return null;
    for (; d !== null; ) t(c, d), (d = d.sibling);
    return null;
  }
  function r(c, d) {
    for (c = new Map(); d !== null; ) d.key !== null ? c.set(d.key, d) : c.set(d.index, d), (d = d.sibling);
    return c;
  }
  function o(c, d) {
    return (c = nn(c, d)), (c.index = 0), (c.sibling = null), c;
  }
  function i(c, d, h) {
    return (
      (c.index = h),
      e
        ? ((h = c.alternate), h !== null ? ((h = h.index), h < d ? ((c.flags |= 2), d) : h) : ((c.flags |= 2), d))
        : ((c.flags |= 1048576), d)
    );
  }
  function l(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function u(c, d, h, g) {
    return d === null || d.tag !== 6 ? ((d = bl(h, c.mode, g)), (d.return = c), d) : ((d = o(d, h)), (d.return = c), d);
  }
  function s(c, d, h, g) {
    var C = h.type;
    return C === jn
      ? f(c, d, h.props.children, g, h.key)
      : d !== null &&
        (d.elementType === C || (typeof C == 'object' && C !== null && C.$$typeof === Wt && wc(C) === d.type))
      ? ((g = o(d, h.props)), (g.ref = Or(c, d, h)), (g.return = c), g)
      : ((g = ui(h.type, h.key, h.props, null, c.mode, g)), (g.ref = Or(c, d, h)), (g.return = c), g);
  }
  function a(c, d, h, g) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = eu(h, c.mode, g)), (d.return = c), d)
      : ((d = o(d, h.children || [])), (d.return = c), d);
  }
  function f(c, d, h, g, C) {
    return d === null || d.tag !== 7
      ? ((d = Sn(h, c.mode, g, C)), (d.return = c), d)
      : ((d = o(d, h)), (d.return = c), d);
  }
  function p(c, d, h) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = bl('' + d, c.mode, h)), (d.return = c), d;
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case Mo:
          return (h = ui(d.type, d.key, d.props, null, c.mode, h)), (h.ref = Or(c, null, d)), (h.return = c), h;
        case Fn:
          return (d = eu(d, c.mode, h)), (d.return = c), d;
        case Wt:
          var g = d._init;
          return p(c, g(d._payload), h);
      }
      if (Fr(d) || xr(d)) return (d = Sn(d, c.mode, h, null)), (d.return = c), d;
      Qo(c, d);
    }
    return null;
  }
  function m(c, d, h, g) {
    var C = d !== null ? d.key : null;
    if ((typeof h == 'string' && h !== '') || typeof h == 'number') return C !== null ? null : u(c, d, '' + h, g);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Mo:
          return h.key === C ? s(c, d, h, g) : null;
        case Fn:
          return h.key === C ? a(c, d, h, g) : null;
        case Wt:
          return (C = h._init), m(c, d, C(h._payload), g);
      }
      if (Fr(h) || xr(h)) return C !== null ? null : f(c, d, h, g, null);
      Qo(c, h);
    }
    return null;
  }
  function w(c, d, h, g, C) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number') return (c = c.get(h) || null), u(d, c, '' + g, C);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Mo:
          return (c = c.get(g.key === null ? h : g.key) || null), s(d, c, g, C);
        case Fn:
          return (c = c.get(g.key === null ? h : g.key) || null), a(d, c, g, C);
        case Wt:
          var N = g._init;
          return w(c, d, h, N(g._payload), C);
      }
      if (Fr(g) || xr(g)) return (c = c.get(h) || null), f(d, c, g, C, null);
      Qo(d, g);
    }
    return null;
  }
  function y(c, d, h, g) {
    for (var C = null, N = null, O = d, z = (d = 0), I = null; O !== null && z < h.length; z++) {
      O.index > z ? ((I = O), (O = null)) : (I = O.sibling);
      var H = m(c, O, h[z], g);
      if (H === null) {
        O === null && (O = I);
        break;
      }
      e && O && H.alternate === null && t(c, O),
        (d = i(H, d, z)),
        N === null ? (C = H) : (N.sibling = H),
        (N = H),
        (O = I);
    }
    if (z === h.length) return n(c, O), re && pn(c, z), C;
    if (O === null) {
      for (; z < h.length; z++)
        (O = p(c, h[z], g)), O !== null && ((d = i(O, d, z)), N === null ? (C = O) : (N.sibling = O), (N = O));
      return re && pn(c, z), C;
    }
    for (O = r(c, O); z < h.length; z++)
      (I = w(O, c, z, h[z], g)),
        I !== null &&
          (e && I.alternate !== null && O.delete(I.key === null ? z : I.key),
          (d = i(I, d, z)),
          N === null ? (C = I) : (N.sibling = I),
          (N = I));
    return (
      e &&
        O.forEach(function (Ne) {
          return t(c, Ne);
        }),
      re && pn(c, z),
      C
    );
  }
  function v(c, d, h, g) {
    var C = xr(h);
    if (typeof C != 'function') throw Error(x(150));
    if (((h = C.call(h)), h == null)) throw Error(x(151));
    for (var N = (C = null), O = d, z = (d = 0), I = null, H = h.next(); O !== null && !H.done; z++, H = h.next()) {
      O.index > z ? ((I = O), (O = null)) : (I = O.sibling);
      var Ne = m(c, O, H.value, g);
      if (Ne === null) {
        O === null && (O = I);
        break;
      }
      e && O && Ne.alternate === null && t(c, O),
        (d = i(Ne, d, z)),
        N === null ? (C = Ne) : (N.sibling = Ne),
        (N = Ne),
        (O = I);
    }
    if (H.done) return n(c, O), re && pn(c, z), C;
    if (O === null) {
      for (; !H.done; z++, H = h.next())
        (H = p(c, H.value, g)), H !== null && ((d = i(H, d, z)), N === null ? (C = H) : (N.sibling = H), (N = H));
      return re && pn(c, z), C;
    }
    for (O = r(c, O); !H.done; z++, H = h.next())
      (H = w(O, c, z, H.value, g)),
        H !== null &&
          (e && H.alternate !== null && O.delete(H.key === null ? z : H.key),
          (d = i(H, d, z)),
          N === null ? (C = H) : (N.sibling = H),
          (N = H));
    return (
      e &&
        O.forEach(function (ot) {
          return t(c, ot);
        }),
      re && pn(c, z),
      C
    );
  }
  function R(c, d, h, g) {
    if (
      (typeof h == 'object' && h !== null && h.type === jn && h.key === null && (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case Mo:
          e: {
            for (var C = h.key, N = d; N !== null; ) {
              if (N.key === C) {
                if (((C = h.type), C === jn)) {
                  if (N.tag === 7) {
                    n(c, N.sibling), (d = o(N, h.props.children)), (d.return = c), (c = d);
                    break e;
                  }
                } else if (
                  N.elementType === C ||
                  (typeof C == 'object' && C !== null && C.$$typeof === Wt && wc(C) === N.type)
                ) {
                  n(c, N.sibling), (d = o(N, h.props)), (d.ref = Or(c, N, h)), (d.return = c), (c = d);
                  break e;
                }
                n(c, N);
                break;
              } else t(c, N);
              N = N.sibling;
            }
            h.type === jn
              ? ((d = Sn(h.props.children, c.mode, g, h.key)), (d.return = c), (c = d))
              : ((g = ui(h.type, h.key, h.props, null, c.mode, g)), (g.ref = Or(c, d, h)), (g.return = c), (c = g));
          }
          return l(c);
        case Fn:
          e: {
            for (N = h.key; d !== null; ) {
              if (d.key === N)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(c, d.sibling), (d = o(d, h.children || [])), (d.return = c), (c = d);
                  break e;
                } else {
                  n(c, d);
                  break;
                }
              else t(c, d);
              d = d.sibling;
            }
            (d = eu(h, c.mode, g)), (d.return = c), (c = d);
          }
          return l(c);
        case Wt:
          return (N = h._init), R(c, d, N(h._payload), g);
      }
      if (Fr(h)) return y(c, d, h, g);
      if (xr(h)) return v(c, d, h, g);
      Qo(c, h);
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        d !== null && d.tag === 6
          ? (n(c, d.sibling), (d = o(d, h)), (d.return = c), (c = d))
          : (n(c, d), (d = bl(h, c.mode, g)), (d.return = c), (c = d)),
        l(c))
      : n(c, d);
  }
  return R;
}
var sr = Qd(!0),
  Kd = Qd(!1),
  xo = {},
  St = un(xo),
  ao = un(xo),
  co = un(xo);
function vn(e) {
  if (e === xo) throw Error(x(174));
  return e;
}
function Qs(e, t) {
  switch ((b(co, t), b(ao, e), b(St, xo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xu(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = xu(t, e));
  }
  te(St), b(St, t);
}
function ar() {
  te(St), te(ao), te(co);
}
function qd(e) {
  vn(co.current);
  var t = vn(St.current),
    n = xu(t, e.type);
  t !== n && (b(ao, e), b(St, n));
}
function Ks(e) {
  ao.current === e && (te(St), te(ao));
}
var ie = un(0);
function Li(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
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
var ql = [];
function qs() {
  for (var e = 0; e < ql.length; e++) ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var ni = Ut.ReactCurrentDispatcher,
  Jl = Ut.ReactCurrentBatchConfig,
  Cn = 0,
  le = null,
  pe = null,
  ge = null,
  Di = !1,
  Vr = !1,
  fo = 0,
  Hy = 0;
function xe() {
  throw Error(x(321));
}
function Js(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ht(e[n], t[n])) return !1;
  return !0;
}
function Ys(e, t, n, r, o, i) {
  if (
    ((Cn = i),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ni.current = e === null || e.memoizedState === null ? Ky : qy),
    (e = n(r, o)),
    Vr)
  ) {
    i = 0;
    do {
      if (((Vr = !1), (fo = 0), 25 <= i)) throw Error(x(301));
      (i += 1), (ge = pe = null), (t.updateQueue = null), (ni.current = Jy), (e = n(r, o));
    } while (Vr);
  }
  if (((ni.current = zi), (t = pe !== null && pe.next !== null), (Cn = 0), (ge = pe = le = null), (Di = !1), t))
    throw Error(x(300));
  return e;
}
function Xs() {
  var e = fo !== 0;
  return (fo = 0), e;
}
function yt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ge === null ? (le.memoizedState = ge = e) : (ge = ge.next = e), ge;
}
function rt() {
  if (pe === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = pe.next;
  var t = ge === null ? le.memoizedState : ge.next;
  if (t !== null) (ge = t), (pe = e);
  else {
    if (e === null) throw Error(x(310));
    (pe = e),
      (e = {
        memoizedState: pe.memoizedState,
        baseState: pe.baseState,
        baseQueue: pe.baseQueue,
        queue: pe.queue,
        next: null,
      }),
      ge === null ? (le.memoizedState = ge = e) : (ge = ge.next = e);
  }
  return ge;
}
function po(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Yl(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = pe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var u = (l = null),
      s = null,
      a = i;
    do {
      var f = a.lane;
      if ((Cn & f) === f)
        s !== null &&
          (s = s.next =
            { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = { lane: f, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null };
        s === null ? ((u = s = p), (l = r)) : (s = s.next = p), (le.lanes |= f), (Rn |= f);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (l = r) : (s.next = u),
      ht(r, t.memoizedState) || (Me = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (le.lanes |= i), (Rn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xl(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    ht(i, t.memoizedState) || (Me = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Jd() {}
function Yd(e, t) {
  var n = le,
    r = rt(),
    o = t(),
    i = !ht(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Me = !0)),
    (r = r.queue),
    Gs(Zd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ge !== null && ge.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), ho(9, Gd.bind(null, n, r, o, t), void 0, null), we === null)) throw Error(x(349));
    Cn & 30 || Xd(n, t, o);
  }
  return o;
}
function Xd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (le.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Gd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), bd(t) && ep(e);
}
function Zd(e, t, n) {
  return n(function () {
    bd(t) && ep(e);
  });
}
function bd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function ep(e) {
  var t = Ft(e, 1);
  t !== null && pt(t, e, 1, -1);
}
function Sc(e) {
  var t = yt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: po, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = Qy.bind(null, le, e)),
    [t.memoizedState, e]
  );
}
function ho(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (le.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function tp() {
  return rt().memoizedState;
}
function ri(e, t, n, r) {
  var o = yt();
  (le.flags |= e), (o.memoizedState = ho(1 | t, n, void 0, r === void 0 ? null : r));
}
function bi(e, t, n, r) {
  var o = rt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (pe !== null) {
    var l = pe.memoizedState;
    if (((i = l.destroy), r !== null && Js(r, l.deps))) {
      o.memoizedState = ho(t, n, i, r);
      return;
    }
  }
  (le.flags |= e), (o.memoizedState = ho(1 | t, n, i, r));
}
function Ec(e, t) {
  return ri(8390656, 8, e, t);
}
function Gs(e, t) {
  return bi(2048, 8, e, t);
}
function np(e, t) {
  return bi(4, 2, e, t);
}
function rp(e, t) {
  return bi(4, 4, e, t);
}
function op(e, t) {
  if (typeof t == 'function')
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
function ip(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), bi(4, 4, op.bind(null, t, e), n);
}
function Zs() {}
function lp(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Js(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function up(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Js(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function sp(e, t, n) {
  return Cn & 21
    ? (ht(n, t) || ((n = fd()), (le.lanes |= n), (Rn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n));
}
function Wy(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Jl.transition;
  Jl.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (Jl.transition = r);
  }
}
function ap() {
  return rt().memoizedState;
}
function Vy(e, t, n) {
  var r = tn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), cp(e))) fp(t, n);
  else if (((n = $d(e, t, n, r)), n !== null)) {
    var o = Te();
    pt(n, e, r, o), dp(n, t, r);
  }
}
function Qy(e, t, n) {
  var r = tn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cp(e)) fp(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var l = t.lastRenderedState,
          u = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = u), ht(u, l))) {
          var s = t.interleaved;
          s === null ? ((o.next = o), Ws(t)) : ((o.next = s.next), (s.next = o)), (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = $d(e, t, o, r)), n !== null && ((o = Te()), pt(n, e, r, o), dp(n, t, r));
  }
}
function cp(e) {
  var t = e.alternate;
  return e === le || (t !== null && t === le);
}
function fp(e, t) {
  Vr = Di = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function dp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Os(e, n);
  }
}
var zi = {
    readContext: nt,
    useCallback: xe,
    useContext: xe,
    useEffect: xe,
    useImperativeHandle: xe,
    useInsertionEffect: xe,
    useLayoutEffect: xe,
    useMemo: xe,
    useReducer: xe,
    useRef: xe,
    useState: xe,
    useDebugValue: xe,
    useDeferredValue: xe,
    useTransition: xe,
    useMutableSource: xe,
    useSyncExternalStore: xe,
    useId: xe,
    unstable_isNewReconciler: !1,
  },
  Ky = {
    readContext: nt,
    useCallback: function (e, t) {
      return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nt,
    useEffect: Ec,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), ri(4194308, 4, op.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return ri(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ri(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = yt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = yt();
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
        (e = e.dispatch = Vy.bind(null, le, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = yt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Sc,
    useDebugValue: Zs,
    useDeferredValue: function (e) {
      return (yt().memoizedState = e);
    },
    useTransition: function () {
      var e = Sc(!1),
        t = e[0];
      return (e = Wy.bind(null, e[1])), (yt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = le,
        o = yt();
      if (re) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), we === null)) throw Error(x(349));
        Cn & 30 || Xd(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Ec(Zd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ho(9, Gd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = yt(),
        t = we.identifierPrefix;
      if (re) {
        var n = Tt,
          r = Ot;
        (n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = fo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Hy++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qy = {
    readContext: nt,
    useCallback: lp,
    useContext: nt,
    useEffect: Gs,
    useImperativeHandle: ip,
    useInsertionEffect: np,
    useLayoutEffect: rp,
    useMemo: up,
    useReducer: Yl,
    useRef: tp,
    useState: function () {
      return Yl(po);
    },
    useDebugValue: Zs,
    useDeferredValue: function (e) {
      var t = rt();
      return sp(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = Yl(po)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Jd,
    useSyncExternalStore: Yd,
    useId: ap,
    unstable_isNewReconciler: !1,
  },
  Jy = {
    readContext: nt,
    useCallback: lp,
    useContext: nt,
    useEffect: Gs,
    useImperativeHandle: ip,
    useInsertionEffect: np,
    useLayoutEffect: rp,
    useMemo: up,
    useReducer: Xl,
    useRef: tp,
    useState: function () {
      return Xl(po);
    },
    useDebugValue: Zs,
    useDeferredValue: function (e) {
      var t = rt();
      return pe === null ? (t.memoizedState = e) : sp(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = Xl(po)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Jd,
    useSyncExternalStore: Yd,
    useId: ap,
    unstable_isNewReconciler: !1,
  };
function cr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += _m(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Gl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function qu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Yy = typeof WeakMap == 'function' ? WeakMap : Map;
function pp(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ai || ((Ai = !0), (rs = r)), qu(e, t);
    }),
    n
  );
}
function hp(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        qu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        qu(e, t), typeof r != 'function' && (en === null ? (en = new Set([this])) : en.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' });
      }),
    n
  );
}
function _c(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yy();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = av.bind(null, e, t, n)), t.then(e, e));
}
function kc(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Lt(-1, 1)), (t.tag = 2), bt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Xy = Ut.ReactCurrentOwner,
  Me = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? Kd(t, null, n, r) : sr(t, e.child, n, r);
}
function Cc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    er(t, o),
    (r = Ys(e, t, n, r, i, o)),
    (n = Xs()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), jt(e, t, o))
      : (re && n && js(t), (t.flags |= 1), Oe(e, t, r, o), t.child)
  );
}
function Rc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !la(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), mp(e, t, i, r, o))
      : ((e = ui(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : io), n(l, r) && e.ref === t.ref)) return jt(e, t, o);
  }
  return (t.flags |= 1), (e = nn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function mp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (io(i, r) && e.ref === t.ref)
      if (((Me = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Me = !0);
      else return (t.lanes = e.lanes), jt(e, t, o);
  }
  return Ju(e, t, n, r, o);
}
function yp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), b(qn, Ie), (Ie |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          b(qn, Ie),
          (Ie |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        b(qn, Ie),
        (Ie |= r);
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), b(qn, Ie), (Ie |= r);
  return Oe(e, t, o, n), t.child;
}
function vp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Ju(e, t, n, r, o) {
  var i = Fe(n) ? kn : Pe.current;
  return (
    (i = lr(t, i)),
    er(t, o),
    (n = Ys(e, t, n, r, i, o)),
    (r = Xs()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), jt(e, t, o))
      : (re && r && js(t), (t.flags |= 1), Oe(e, t, n, o), t.child)
  );
}
function Pc(e, t, n, r, o) {
  if (Fe(n)) {
    var i = !0;
    Ci(t);
  } else i = !1;
  if ((er(t, o), t.stateNode === null)) oi(e, t), Vd(t, n, r), Ku(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      u = t.memoizedProps;
    l.props = u;
    var s = l.context,
      a = n.contextType;
    typeof a == 'object' && a !== null ? (a = nt(a)) : ((a = Fe(n) ? kn : Pe.current), (a = lr(t, a)));
    var f = n.getDerivedStateFromProps,
      p = typeof f == 'function' || typeof l.getSnapshotBeforeUpdate == 'function';
    p ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' && typeof l.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && gc(t, l, r, a)),
      (Vt = !1);
    var m = t.memoizedState;
    (l.state = m),
      Ti(t, r, l, o),
      (s = t.memoizedState),
      u !== r || m !== s || Ae.current || Vt
        ? (typeof f == 'function' && (Qu(t, n, f, r), (s = t.memoizedState)),
          (u = Vt || vc(t, n, u, r, m, s, a))
            ? (p ||
                (typeof l.UNSAFE_componentWillMount != 'function' && typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' && l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = a),
          (r = u))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (l = t.stateNode),
      Hd(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : ut(t.type, u)),
      (l.props = a),
      (p = t.pendingProps),
      (m = l.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null ? (s = nt(s)) : ((s = Fe(n) ? kn : Pe.current), (s = lr(t, s)));
    var w = n.getDerivedStateFromProps;
    (f = typeof w == 'function' || typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' && typeof l.componentWillReceiveProps != 'function') ||
      ((u !== p || m !== s) && gc(t, l, r, s)),
      (Vt = !1),
      (m = t.memoizedState),
      (l.state = m),
      Ti(t, r, l, o);
    var y = t.memoizedState;
    u !== p || m !== y || Ae.current || Vt
      ? (typeof w == 'function' && (Qu(t, n, w, r), (y = t.memoizedState)),
        (a = Vt || vc(t, n, a, r, m, y, s) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' && typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' && l.componentWillUpdate(r, y, s),
              typeof l.UNSAFE_componentWillUpdate == 'function' && l.UNSAFE_componentWillUpdate(r, y, s)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (l.props = r),
        (l.state = y),
        (l.context = s),
        (r = a))
      : (typeof l.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Yu(e, t, n, r, i, o);
}
function Yu(e, t, n, r, o, i) {
  vp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && dc(t, n, !1), jt(e, t, i);
  (r = t.stateNode), (Xy.current = t);
  var u = l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l ? ((t.child = sr(t, e.child, null, i)), (t.child = sr(t, null, u, i))) : Oe(e, t, u, i),
    (t.memoizedState = r.state),
    o && dc(t, n, !0),
    t.child
  );
}
function gp(e) {
  var t = e.stateNode;
  t.pendingContext ? fc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && fc(e, t.context, !1),
    Qs(e, t.containerInfo);
}
function Nc(e, t, n, r, o) {
  return ur(), Is(o), (t.flags |= 256), Oe(e, t, n, r), t.child;
}
var Xu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wp(e, t, n) {
  var r = t.pendingProps,
    o = ie.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    u;
  if (
    ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    u ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    b(ie, o & 1),
    e === null)
  )
    return (
      Wu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = l)) : (i = nl(l, r, 0, null)),
              (e = Sn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Gu(n)),
              (t.memoizedState = Xu),
              e)
            : bs(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null))) return Gy(e, t, l, r, u, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (u = o.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
        : ((r = nn(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null ? (i = nn(u, i)) : ((i = Sn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l = l === null ? Gu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = nn(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function bs(e, t) {
  return (t = nl({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Ko(e, t, n, r) {
  return (
    r !== null && Is(r),
    sr(t, e.child, null, n),
    (e = bs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Gy(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Gl(Error(x(422)))), Ko(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = nl({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = Sn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && sr(t, e.child, null, l),
        (t.child.memoizedState = Gu(l)),
        (t.memoizedState = Xu),
        i);
  if (!(t.mode & 1)) return Ko(e, t, l, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(x(419))), (r = Gl(i, r, void 0)), Ko(e, t, l, r);
  }
  if (((u = (l & e.childLanes) !== 0), Me || u)) {
    if (((r = we), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), Ft(e, o), pt(r, e, o, -1));
    }
    return ia(), (r = Gl(Error(x(421)))), Ko(e, t, l, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = cv.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (Be = Zt(o.nextSibling)),
      ($e = t),
      (re = !0),
      (ct = null),
      e !== null && ((Ge[Ze++] = Ot), (Ge[Ze++] = Tt), (Ge[Ze++] = xn), (Ot = e.id), (Tt = e.overflow), (xn = t)),
      (t = bs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Oc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vu(e.return, t, n);
}
function Zl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Sp(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Oe(e, t, r.children, n), (r = ie.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Oc(e, n, t);
        else if (e.tag === 19) Oc(e, n, t);
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
  if ((b(ie, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && Li(e) === null && (o = n), (n = n.sibling);
        (n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          Zl(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Li(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Zl(t, !0, n, null, i);
        break;
      case 'together':
        Zl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function oi(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function jt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Rn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = nn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Zy(e, t, n) {
  switch (t.tag) {
    case 3:
      gp(t), ur();
      break;
    case 5:
      qd(t);
      break;
    case 1:
      Fe(t.type) && Ci(t);
      break;
    case 4:
      Qs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      b(Ni, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(ie, ie.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? wp(e, t, n)
          : (b(ie, ie.current & 1), (e = jt(e, t, n)), e !== null ? e.sibling : null);
      b(ie, ie.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Sp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        b(ie, ie.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), yp(e, t, n);
  }
  return jt(e, t, n);
}
var Ep, Zu, _p, kp;
Ep = function (e, t) {
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
Zu = function () {};
_p = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), vn(St.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = Su(e, o)), (r = Su(e, r)), (i = []);
        break;
      case 'select':
        (o = ue({}, o, { value: void 0 })), (r = ue({}, r, { value: void 0 })), (i = []);
        break;
      case 'textarea':
        (o = ku(e, o)), (r = ku(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = ki);
    }
    Cu(n, r);
    var l;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === 'style') {
          var u = o[a];
          for (l in u) u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (Zr.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (((u = o != null ? o[a] : void 0), r.hasOwnProperty(a) && s !== u && (s != null || u != null)))
        if (a === 'style')
          if (u) {
            for (l in u) !u.hasOwnProperty(l) || (s && s.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ''));
            for (l in s) s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), (n[l] = s[l]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === 'children'
            ? (typeof s != 'string' && typeof s != 'number') || (i = i || []).push(a, '' + s)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (Zr.hasOwnProperty(a)
                ? (s != null && a === 'onScroll' && ee('scroll', e), i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push('style', n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
kp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tr(e, t) {
  if (!re)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function Ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function by(e, t, n) {
  var r = t.pendingProps;
  switch ((Us(t), t.tag)) {
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
      return Ce(t), null;
    case 1:
      return Fe(t.type) && xi(), Ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ar(),
        te(Ae),
        te(Pe),
        qs(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Vo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ct !== null && (ls(ct), (ct = null)))),
        Zu(e, t),
        Ce(t),
        null
      );
    case 5:
      Ks(t);
      var o = vn(co.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        _p(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return Ce(t), null;
        }
        if (((e = vn(St.current)), Vo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[vt] = t), (r[so] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ee('cancel', r), ee('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ee('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < Ur.length; o++) ee(Ur[o], r);
              break;
            case 'source':
              ee('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ee('error', r), ee('load', r);
              break;
            case 'details':
              ee('toggle', r);
              break;
            case 'input':
              Ua(r, i), ee('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }), ee('invalid', r);
              break;
            case 'textarea':
              Ba(r, i), ee('invalid', r);
          }
          Cu(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var u = i[l];
              l === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 && Wo(r.textContent, u, e), (o = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 && Wo(r.textContent, u, e), (o = ['children', '' + u]))
                : Zr.hasOwnProperty(l) && u != null && l === 'onScroll' && ee('scroll', r);
            }
          switch (n) {
            case 'input':
              Ao(r), Ia(r, i, !0);
              break;
            case 'textarea':
              Ao(r), $a(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = ki);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Xf(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === 'select' && ((l = e), r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[vt] = t),
            (e[so] = r),
            Ep(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Ru(n, r)), n)) {
              case 'dialog':
                ee('cancel', e), ee('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ee('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < Ur.length; o++) ee(Ur[o], e);
                o = r;
                break;
              case 'source':
                ee('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ee('error', e), ee('load', e), (o = r);
                break;
              case 'details':
                ee('toggle', e), (o = r);
                break;
              case 'input':
                Ua(e, r), (o = Su(e, r)), ee('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }), (o = ue({}, r, { value: void 0 })), ee('invalid', e);
                break;
              case 'textarea':
                Ba(e, r), (o = ku(e, r)), ee('invalid', e);
                break;
              default:
                o = r;
            }
            Cu(n, o), (u = o);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === 'style'
                  ? bf(e, s)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && Gf(e, s))
                  : i === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && br(e, s)
                    : typeof s == 'number' && br(e, '' + s)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Zr.hasOwnProperty(i)
                      ? s != null && i === 'onScroll' && ee('scroll', e)
                      : s != null && ks(e, i, s, l));
              }
            switch (n) {
              case 'input':
                Ao(e), Ia(e, r, !1);
                break;
              case 'textarea':
                Ao(e), $a(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + rn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Xn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && Xn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = ki);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
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
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null) kp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(x(166));
        if (((n = vn(co.current)), vn(St.current), Vo(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[vt] = t), (i = r.nodeValue !== n) && ((e = $e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Wo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Wo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[vt] = t), (t.stateNode = r);
      }
      return Ce(t), null;
    case 13:
      if (
        (te(ie), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (re && Be !== null && t.mode & 1 && !(t.flags & 128)) Bd(), ur(), (t.flags |= 98560), (i = !1);
        else if (((i = Vo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(x(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(x(317));
            i[vt] = t;
          } else ur(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ce(t), (i = !1);
        } else ct !== null && (ls(ct), (ct = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || ie.current & 1 ? he === 0 && (he = 3) : ia())),
          t.updateQueue !== null && (t.flags |= 4),
          Ce(t),
          null);
    case 4:
      return ar(), Zu(e, t), e === null && lo(t.stateNode.containerInfo), Ce(t), null;
    case 10:
      return Hs(t.type._context), Ce(t), null;
    case 17:
      return Fe(t.type) && xi(), Ce(t), null;
    case 19:
      if ((te(ie), (i = t.memoizedState), i === null)) return Ce(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Tr(i, !1);
        else {
          if (he !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Li(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Tr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return b(ie, (ie.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && ae() > fr && ((t.flags |= 128), (r = !0), Tr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Li(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Tr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !re)
            )
              return Ce(t), null;
          } else
            2 * ae() - i.renderingStartTime > fr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Tr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last), n !== null ? (n.sibling = l) : (t.child = l), (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ae()),
          (t.sibling = null),
          (n = ie.current),
          b(ie, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ce(t), null);
    case 22:
    case 23:
      return (
        oa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ie & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function ev(e, t) {
  switch ((Us(t), t.tag)) {
    case 1:
      return Fe(t.type) && xi(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        ar(), te(Ae), te(Pe), qs(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ks(t), null;
    case 13:
      if ((te(ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        ur();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return te(ie), null;
    case 4:
      return ar(), null;
    case 10:
      return Hs(t.type._context), null;
    case 22:
    case 23:
      return oa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var qo = !1,
  Re = !1,
  tv = typeof WeakSet == 'function' ? WeakSet : Set,
  L = null;
function Kn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        se(e, t, r);
      }
    else n.current = null;
}
function bu(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var Tc = !1;
function nv(e, t) {
  if (((Fu = Si), (e = Pd()), Fs(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            u = -1,
            s = -1,
            a = 0,
            f = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              p !== n || (o !== 0 && p.nodeType !== 3) || (u = l + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (s = l + r),
                p.nodeType === 3 && (l += p.nodeValue.length),
                (w = p.firstChild) !== null;

            )
              (m = p), (p = w);
            for (;;) {
              if (p === e) break t;
              if ((m === n && ++a === o && (u = l), m === i && ++f === r && (s = l), (w = p.nextSibling) !== null))
                break;
              (p = m), (m = p.parentNode);
            }
            p = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ju = { focusedElem: e, selectionRange: n }, Si = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    R = y.memoizedState,
                    c = t.stateNode,
                    d = c.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ut(t.type, v), R);
                  c.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = '')
                  : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (g) {
          se(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (y = Tc), (Tc = !1), y;
}
function Qr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && bu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function el(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
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
function es(e) {
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
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function xp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), xp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[vt], delete t[so], delete t[Bu], delete t[Uy], delete t[Iy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Cp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Lc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Cp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ts(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ki));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ts(e, t, n), e = e.sibling; e !== null; ) ts(e, t, n), (e = e.sibling);
}
function ns(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ns(e, t, n), e = e.sibling; e !== null; ) ns(e, t, n), (e = e.sibling);
}
var Se = null,
  at = !1;
function $t(e, t, n) {
  for (n = n.child; n !== null; ) Rp(e, t, n), (n = n.sibling);
}
function Rp(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == 'function')
    try {
      wt.onCommitFiberUnmount(Ki, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || Kn(n, t);
    case 6:
      var r = Se,
        o = at;
      (Se = null),
        $t(e, t, n),
        (Se = r),
        (at = o),
        Se !== null &&
          (at
            ? ((e = Se), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null &&
        (at
          ? ((e = Se), (n = n.stateNode), e.nodeType === 8 ? Ql(e.parentNode, n) : e.nodeType === 1 && Ql(e, n), ro(e))
          : Ql(Se, n.stateNode));
      break;
    case 4:
      (r = Se), (o = at), (Se = n.stateNode.containerInfo), (at = !0), $t(e, t, n), (Se = r), (at = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Re && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag), l !== void 0 && (i & 2 || i & 4) && bu(n, t, l), (o = o.next);
        } while (o !== r);
      }
      $t(e, t, n);
      break;
    case 1:
      if (!Re && (Kn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (u) {
          se(n, t, u);
        }
      $t(e, t, n);
      break;
    case 21:
      $t(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((Re = (r = Re) || n.memoizedState !== null), $t(e, t, n), (Re = r)) : $t(e, t, n);
      break;
    default:
      $t(e, t, n);
  }
}
function Dc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new tv()),
      t.forEach(function (r) {
        var o = fv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function lt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          u = l;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Se = u.stateNode), (at = !1);
              break e;
            case 3:
              (Se = u.stateNode.containerInfo), (at = !0);
              break e;
            case 4:
              (Se = u.stateNode.containerInfo), (at = !0);
              break e;
          }
          u = u.return;
        }
        if (Se === null) throw Error(x(160));
        Rp(i, l, o), (Se = null), (at = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (a) {
        se(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Pp(t, e), (t = t.sibling);
}
function Pp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((lt(t, e), mt(e), r & 4)) {
        try {
          Qr(3, e, e.return), el(3, e);
        } catch (v) {
          se(e, e.return, v);
        }
        try {
          Qr(5, e, e.return);
        } catch (v) {
          se(e, e.return, v);
        }
      }
      break;
    case 1:
      lt(t, e), mt(e), r & 512 && n !== null && Kn(n, n.return);
      break;
    case 5:
      if ((lt(t, e), mt(e), r & 512 && n !== null && Kn(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          br(o, '');
        } catch (v) {
          se(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && i.type === 'radio' && i.name != null && Jf(o, i), Ru(u, l);
            var a = Ru(u, i);
            for (l = 0; l < s.length; l += 2) {
              var f = s[l],
                p = s[l + 1];
              f === 'style'
                ? bf(o, p)
                : f === 'dangerouslySetInnerHTML'
                ? Gf(o, p)
                : f === 'children'
                ? br(o, p)
                : ks(o, f, p, a);
            }
            switch (u) {
              case 'input':
                Eu(o, i);
                break;
              case 'textarea':
                Yf(o, i);
                break;
              case 'select':
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Xn(o, !!i.multiple, w, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Xn(o, !!i.multiple, i.defaultValue, !0)
                      : Xn(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[so] = i;
          } catch (v) {
            se(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((lt(t, e), mt(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          se(e, e.return, v);
        }
      }
      break;
    case 3:
      if ((lt(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          ro(t.containerInfo);
        } catch (v) {
          se(e, e.return, v);
        }
      break;
    case 4:
      lt(t, e), mt(e);
      break;
    case 13:
      lt(t, e),
        mt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (na = ae())),
        r & 4 && Dc(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (a = Re) || f), lt(t, e), (Re = a)) : lt(t, e),
        mt(e),
        r & 8192)
      ) {
        if (((a = e.memoizedState !== null), (e.stateNode.isHidden = a) && !f && e.mode & 1))
          for (L = e, f = e.child; f !== null; ) {
            for (p = L = f; L !== null; ) {
              switch (((m = L), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qr(4, m, m.return);
                  break;
                case 1:
                  Kn(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = m), (n = m.return);
                    try {
                      (t = r), (y.props = t.memoizedProps), (y.state = t.memoizedState), y.componentWillUnmount();
                    } catch (v) {
                      se(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Kn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Mc(p);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (L = w)) : Mc(p);
            }
            f = f.sibling;
          }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                (o = p.stateNode),
                  a
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (l = s != null && s.hasOwnProperty('display') ? s.display : null),
                      (u.style.display = Zf('display', l)));
              } catch (v) {
                se(e, e.return, v);
              }
            }
          } else if (p.tag === 6) {
            if (f === null)
              try {
                p.stateNode.nodeValue = a ? '' : p.memoizedProps;
              } catch (v) {
                se(e, e.return, v);
              }
          } else if (((p.tag !== 22 && p.tag !== 23) || p.memoizedState === null || p === e) && p.child !== null) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            f === p && (f = null), (p = p.return);
          }
          f === p && (f = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      lt(t, e), mt(e), r & 4 && Dc(e);
      break;
    case 21:
      break;
    default:
      lt(t, e), mt(e);
  }
}
function mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Cp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (br(o, ''), (r.flags &= -33));
          var i = Lc(e);
          ns(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            u = Lc(e);
          ts(e, u, l);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      se(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rv(e, t, n) {
  (L = e), Np(e);
}
function Np(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || qo;
      if (!l) {
        var u = o.alternate,
          s = (u !== null && u.memoizedState !== null) || Re;
        u = qo;
        var a = Re;
        if (((qo = l), (Re = s) && !a))
          for (L = o; L !== null; )
            (l = L),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null ? Ac(o) : s !== null ? ((s.return = l), (L = s)) : Ac(o);
        for (; i !== null; ) (L = i), Np(i), (i = i.sibling);
        (L = o), (qo = u), (Re = a);
      }
      zc(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (L = i)) : zc(e);
  }
}
function zc(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || el(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Re)
                if (n === null) r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && yc(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                yc(t, l, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
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
                var a = t.alternate;
                if (a !== null) {
                  var f = a.memoizedState;
                  if (f !== null) {
                    var p = f.dehydrated;
                    p !== null && ro(p);
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
              throw Error(x(163));
          }
        Re || (t.flags & 512 && es(t));
      } catch (m) {
        se(t, t.return, m);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Mc(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Ac(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            el(4, t);
          } catch (s) {
            se(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              se(t, o, s);
            }
          }
          var i = t.return;
          try {
            es(t);
          } catch (s) {
            se(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            es(t);
          } catch (s) {
            se(t, l, s);
          }
      }
    } catch (s) {
      se(t, t.return, s);
    }
    if (t === e) {
      L = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (L = u);
      break;
    }
    L = t.return;
  }
}
var ov = Math.ceil,
  Mi = Ut.ReactCurrentDispatcher,
  ea = Ut.ReactCurrentOwner,
  et = Ut.ReactCurrentBatchConfig,
  J = 0,
  we = null,
  fe = null,
  Ee = 0,
  Ie = 0,
  qn = un(0),
  he = 0,
  mo = null,
  Rn = 0,
  tl = 0,
  ta = 0,
  Kr = null,
  ze = null,
  na = 0,
  fr = 1 / 0,
  Rt = null,
  Ai = !1,
  rs = null,
  en = null,
  Jo = !1,
  Jt = null,
  Fi = 0,
  qr = 0,
  os = null,
  ii = -1,
  li = 0;
function Te() {
  return J & 6 ? ae() : ii !== -1 ? ii : (ii = ae());
}
function tn(e) {
  return e.mode & 1
    ? J & 2 && Ee !== 0
      ? Ee & -Ee
      : $y.transition !== null
      ? (li === 0 && (li = fd()), li)
      : ((e = G), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gd(e.type))), e)
    : 1;
}
function pt(e, t, n, r) {
  if (50 < qr) throw ((qr = 0), (os = null), Error(x(185)));
  Eo(e, n, r),
    (!(J & 2) || e !== we) &&
      (e === we && (!(J & 2) && (tl |= n), he === 4 && Kt(e, Ee)),
      je(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((fr = ae() + 500), Gi && sn()));
}
function je(e, t) {
  var n = e.callbackNode;
  $m(e, t);
  var r = wi(e, e === we ? Ee : 0);
  if (r === 0) n !== null && Va(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Va(n), t === 1))
      e.tag === 0 ? By(Fc.bind(null, e)) : jd(Fc.bind(null, e)),
        Fy(function () {
          !(J & 6) && sn();
        }),
        (n = null);
    else {
      switch (dd(r)) {
        case 1:
          n = Ns;
          break;
        case 4:
          n = ad;
          break;
        case 16:
          n = gi;
          break;
        case 536870912:
          n = cd;
          break;
        default:
          n = gi;
      }
      n = Fp(n, Op.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Op(e, t) {
  if (((ii = -1), (li = 0), J & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (tr() && e.callbackNode !== n) return null;
  var r = wi(e, e === we ? Ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ji(e, r);
  else {
    t = r;
    var o = J;
    J |= 2;
    var i = Lp();
    (we !== e || Ee !== t) && ((Rt = null), (fr = ae() + 500), wn(e, t));
    do
      try {
        uv();
        break;
      } catch (u) {
        Tp(e, u);
      }
    while (1);
    $s(), (Mi.current = i), (J = o), fe !== null ? (t = 0) : ((we = null), (Ee = 0), (t = he));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = Lu(e)), o !== 0 && ((r = o), (t = is(e, o)))), t === 1))
      throw ((n = mo), wn(e, 0), Kt(e, r), je(e, ae()), n);
    if (t === 6) Kt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !iv(o) &&
          ((t = ji(e, r)), t === 2 && ((i = Lu(e)), i !== 0 && ((r = i), (t = is(e, i)))), t === 1))
      )
        throw ((n = mo), wn(e, 0), Kt(e, r), je(e, ae()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          hn(e, ze, Rt);
          break;
        case 3:
          if ((Kt(e, r), (r & 130023424) === r && ((t = na + 500 - ae()), 10 < t))) {
            if (wi(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Te(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Iu(hn.bind(null, e, ze, Rt), t);
            break;
          }
          hn(e, ze, Rt);
          break;
        case 4:
          if ((Kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - dt(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ae() - r),
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
                : 1960 * ov(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Iu(hn.bind(null, e, ze, Rt), r);
            break;
          }
          hn(e, ze, Rt);
          break;
        case 5:
          hn(e, ze, Rt);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return je(e, ae()), e.callbackNode === n ? Op.bind(null, e) : null;
}
function is(e, t) {
  var n = Kr;
  return (
    e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256),
    (e = ji(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && ls(t)),
    e
  );
}
function ls(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function iv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!ht(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
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
function Kt(e, t) {
  for (t &= ~ta, t &= ~tl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - dt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Fc(e) {
  if (J & 6) throw Error(x(327));
  tr();
  var t = wi(e, 0);
  if (!(t & 1)) return je(e, ae()), null;
  var n = ji(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Lu(e);
    r !== 0 && ((t = r), (n = is(e, r)));
  }
  if (n === 1) throw ((n = mo), wn(e, 0), Kt(e, t), je(e, ae()), n);
  if (n === 6) throw Error(x(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), hn(e, ze, Rt), je(e, ae()), null;
}
function ra(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((fr = ae() + 500), Gi && sn());
  }
}
function Pn(e) {
  Jt !== null && Jt.tag === 0 && !(J & 6) && tr();
  var t = J;
  J |= 1;
  var n = et.transition,
    r = G;
  try {
    if (((et.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (et.transition = n), (J = t), !(J & 6) && sn();
  }
}
function oa() {
  (Ie = qn.current), te(qn);
}
function wn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ay(n)), fe !== null))
    for (n = fe.return; n !== null; ) {
      var r = n;
      switch ((Us(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && xi();
          break;
        case 3:
          ar(), te(Ae), te(Pe), qs();
          break;
        case 5:
          Ks(r);
          break;
        case 4:
          ar();
          break;
        case 13:
          te(ie);
          break;
        case 19:
          te(ie);
          break;
        case 10:
          Hs(r.type._context);
          break;
        case 22:
        case 23:
          oa();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (fe = e = nn(e.current, null)),
    (Ee = Ie = t),
    (he = 0),
    (mo = null),
    (ta = tl = Rn = 0),
    (ze = Kr = null),
    yn !== null)
  ) {
    for (t = 0; t < yn.length; t++)
      if (((n = yn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    yn = null;
  }
  return e;
}
function Tp(e, t) {
  do {
    var n = fe;
    try {
      if (($s(), (ni.current = zi), Di)) {
        for (var r = le.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Di = !1;
      }
      if (
        ((Cn = 0), (ge = pe = le = null), (Vr = !1), (fo = 0), (ea.current = null), n === null || n.return === null)
      ) {
        (he = 1), (mo = t), (fe = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          u = n,
          s = t;
        if (((t = Ee), (u.flags |= 32768), s !== null && typeof s == 'object' && typeof s.then == 'function')) {
          var a = s,
            f = u,
            p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = f.alternate;
            m
              ? ((f.updateQueue = m.updateQueue), (f.memoizedState = m.memoizedState), (f.lanes = m.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var w = kc(l);
          if (w !== null) {
            (w.flags &= -257), xc(w, l, u, i, t), w.mode & 1 && _c(i, a, t), (t = w), (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(s), (t.updateQueue = v);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              _c(i, a, t), ia();
              break e;
            }
            s = Error(x(426));
          }
        } else if (re && u.mode & 1) {
          var R = kc(l);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), xc(R, l, u, i, t), Is(cr(s, u));
            break e;
          }
        }
        (i = s = cr(s, u)), he !== 4 && (he = 2), Kr === null ? (Kr = [i]) : Kr.push(i), (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var c = pp(i, s, t);
              mc(i, c);
              break e;
            case 1:
              u = s;
              var d = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (h !== null && typeof h.componentDidCatch == 'function' && (en === null || !en.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = hp(i, u, t);
                mc(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      zp(n);
    } catch (C) {
      (t = C), fe === n && n !== null && (fe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Lp() {
  var e = Mi.current;
  return (Mi.current = zi), e === null ? zi : e;
}
function ia() {
  (he === 0 || he === 3 || he === 2) && (he = 4), we === null || (!(Rn & 268435455) && !(tl & 268435455)) || Kt(we, Ee);
}
function ji(e, t) {
  var n = J;
  J |= 2;
  var r = Lp();
  (we !== e || Ee !== t) && ((Rt = null), wn(e, t));
  do
    try {
      lv();
      break;
    } catch (o) {
      Tp(e, o);
    }
  while (1);
  if (($s(), (J = n), (Mi.current = r), fe !== null)) throw Error(x(261));
  return (we = null), (Ee = 0), he;
}
function lv() {
  for (; fe !== null; ) Dp(fe);
}
function uv() {
  for (; fe !== null && !Dm(); ) Dp(fe);
}
function Dp(e) {
  var t = Ap(e.alternate, e, Ie);
  (e.memoizedProps = e.pendingProps), t === null ? zp(e) : (fe = t), (ea.current = null);
}
function zp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ev(n, t)), n !== null)) {
        (n.flags &= 32767), (fe = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (he = 6), (fe = null);
        return;
      }
    } else if (((n = by(n, t, Ie)), n !== null)) {
      fe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      fe = t;
      return;
    }
    fe = t = e;
  } while (t !== null);
  he === 0 && (he = 5);
}
function hn(e, t, n) {
  var r = G,
    o = et.transition;
  try {
    (et.transition = null), (G = 1), sv(e, t, n, r);
  } finally {
    (et.transition = o), (G = r);
  }
  return null;
}
function sv(e, t, n, r) {
  do tr();
  while (Jt !== null);
  if (J & 6) throw Error(x(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Hm(e, i),
    e === we && ((fe = we = null), (Ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Jo ||
      ((Jo = !0),
      Fp(gi, function () {
        return tr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = et.transition), (et.transition = null);
    var l = G;
    G = 1;
    var u = J;
    (J |= 4),
      (ea.current = null),
      nv(e, n),
      Pp(n, e),
      Ny(ju),
      (Si = !!Fu),
      (ju = Fu = null),
      (e.current = n),
      rv(n),
      zm(),
      (J = u),
      (G = l),
      (et.transition = i);
  } else e.current = n;
  if (
    (Jo && ((Jo = !1), (Jt = e), (Fi = o)),
    (i = e.pendingLanes),
    i === 0 && (en = null),
    Fm(n.stateNode),
    je(e, ae()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ai) throw ((Ai = !1), (e = rs), (rs = null), e);
  return (
    Fi & 1 && e.tag !== 0 && tr(),
    (i = e.pendingLanes),
    i & 1 ? (e === os ? qr++ : ((qr = 0), (os = e))) : (qr = 0),
    sn(),
    null
  );
}
function tr() {
  if (Jt !== null) {
    var e = dd(Fi),
      t = et.transition,
      n = G;
    try {
      if (((et.transition = null), (G = 16 > e ? 16 : e), Jt === null)) var r = !1;
      else {
        if (((e = Jt), (Jt = null), (Fi = 0), J & 6)) throw Error(x(331));
        var o = J;
        for (J |= 4, L = e.current; L !== null; ) {
          var i = L,
            l = i.child;
          if (L.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (L = a; L !== null; ) {
                  var f = L;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qr(8, f, i);
                  }
                  var p = f.child;
                  if (p !== null) (p.return = f), (L = p);
                  else
                    for (; L !== null; ) {
                      f = L;
                      var m = f.sibling,
                        w = f.return;
                      if ((xp(f), f === a)) {
                        L = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (L = m);
                        break;
                      }
                      L = w;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var R = v.sibling;
                    (v.sibling = null), (v = R);
                  } while (v !== null);
                }
              }
              L = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (L = l);
          else
            e: for (; L !== null; ) {
              if (((i = L), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qr(9, i, i.return);
                }
              var c = i.sibling;
              if (c !== null) {
                (c.return = i.return), (L = c);
                break e;
              }
              L = i.return;
            }
        }
        var d = e.current;
        for (L = d; L !== null; ) {
          l = L;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) (h.return = l), (L = h);
          else
            e: for (l = d; L !== null; ) {
              if (((u = L), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      el(9, u);
                  }
                } catch (C) {
                  se(u, u.return, C);
                }
              if (u === l) {
                L = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (L = g);
                break e;
              }
              L = u.return;
            }
        }
        if (((J = o), sn(), wt && typeof wt.onPostCommitFiberRoot == 'function'))
          try {
            wt.onPostCommitFiberRoot(Ki, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (et.transition = t);
    }
  }
  return !1;
}
function jc(e, t, n) {
  (t = cr(n, t)), (t = pp(e, t, 1)), (e = bt(e, t, 1)), (t = Te()), e !== null && (Eo(e, 1, t), je(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) jc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        jc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (en === null || !en.has(r)))
        ) {
          (e = cr(n, e)), (e = hp(t, e, 1)), (t = bt(t, e, 1)), (e = Te()), t !== null && (Eo(t, 1, e), je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function av(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Te()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (Ee & n) === n &&
      (he === 4 || (he === 3 && (Ee & 130023424) === Ee && 500 > ae() - na) ? wn(e, 0) : (ta |= n)),
    je(e, t);
}
function Mp(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Uo), (Uo <<= 1), !(Uo & 130023424) && (Uo = 4194304)) : (t = 1));
  var n = Te();
  (e = Ft(e, t)), e !== null && (Eo(e, t, n), je(e, n));
}
function cv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Mp(e, n);
}
function fv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), Mp(e, n);
}
var Ap;
Ap = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) Me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), Zy(e, t, n);
      Me = !!(e.flags & 131072);
    }
  else (Me = !1), re && t.flags & 1048576 && Ud(t, Pi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      oi(e, t), (e = t.pendingProps);
      var o = lr(t, Pe.current);
      er(t, n), (o = Ys(null, t, r, e, o, n));
      var i = Xs();
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Fe(r) ? ((i = !0), Ci(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            Vs(t),
            (o.updater = Zi),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ku(t, r, e, n),
            (t = Yu(null, t, r, !0, i, n)))
          : ((t.tag = 0), re && i && js(t), Oe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (oi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = pv(r)),
          (e = ut(r, e)),
          o)
        ) {
          case 0:
            t = Ju(null, t, r, e, n);
            break e;
          case 1:
            t = Pc(null, t, r, e, n);
            break e;
          case 11:
            t = Cc(null, t, r, e, n);
            break e;
          case 14:
            t = Rc(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ''));
      }
      return t;
    case 0:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : ut(r, o)), Ju(e, t, r, o, n);
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : ut(r, o)), Pc(e, t, r, o, n);
    case 3:
      e: {
        if ((gp(t), e === null)) throw Error(x(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), Hd(e, t), Ti(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = cr(Error(x(423)), t)), (t = Nc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = cr(Error(x(424)), t)), (t = Nc(e, t, r, n, o));
            break e;
          } else
            for (
              Be = Zt(t.stateNode.containerInfo.firstChild),
                $e = t,
                re = !0,
                ct = null,
                n = Kd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ur(), r === o)) {
            t = jt(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        qd(t),
        e === null && Wu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Uu(r, o) ? (l = null) : i !== null && Uu(r, i) && (t.flags |= 32),
        vp(e, t),
        Oe(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Wu(t), null;
    case 13:
      return wp(e, t, n);
    case 4:
      return (
        Qs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = sr(t, null, r, n)) : Oe(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : ut(r, o)), Cc(e, t, r, o, n);
    case 7:
      return Oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          b(Ni, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (ht(i.value, l)) {
            if (i.children === o.children && !Ae.current) {
              t = jt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                l = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Lt(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var f = a.pending;
                        f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)), (a.pending = s);
                      }
                    }
                    (i.lanes |= n), (s = i.alternate), s !== null && (s.lanes |= n), Vu(i.return, n, t), (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(x(341));
                (l.lanes |= n), (u = l.alternate), u !== null && (u.lanes |= n), Vu(l, n, t), (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Oe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        er(t, n),
        (o = nt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Oe(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (o = ut(r, t.pendingProps)), (o = ut(r.type, o)), Rc(e, t, r, o, n);
    case 15:
      return mp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ut(r, o)),
        oi(e, t),
        (t.tag = 1),
        Fe(r) ? ((e = !0), Ci(t)) : (e = !1),
        er(t, n),
        Vd(t, r, o),
        Ku(t, r, o, n),
        Yu(null, t, r, !0, e, n)
      );
    case 19:
      return Sp(e, t, n);
    case 22:
      return yp(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function Fp(e, t) {
  return sd(e, t);
}
function dv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function be(e, t, n, r) {
  return new dv(e, t, n, r);
}
function la(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function pv(e) {
  if (typeof e == 'function') return la(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Cs)) return 11;
    if (e === Rs) return 14;
  }
  return 2;
}
function nn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ui(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == 'function')) la(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case jn:
        return Sn(n.children, o, i, t);
      case xs:
        (l = 8), (o |= 8);
        break;
      case yu:
        return (e = be(12, n, t, o | 2)), (e.elementType = yu), (e.lanes = i), e;
      case vu:
        return (e = be(13, n, t, o)), (e.elementType = vu), (e.lanes = i), e;
      case gu:
        return (e = be(19, n, t, o)), (e.elementType = gu), (e.lanes = i), e;
      case Qf:
        return nl(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Wf:
              l = 10;
              break e;
            case Vf:
              l = 9;
              break e;
            case Cs:
              l = 11;
              break e;
            case Rs:
              l = 14;
              break e;
            case Wt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ''));
    }
  return (t = be(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Sn(e, t, n, r) {
  return (e = be(7, e, r, t)), (e.lanes = n), e;
}
function nl(e, t, n, r) {
  return (e = be(22, e, r, t)), (e.elementType = Qf), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function bl(e, t, n) {
  return (e = be(6, e, null, t)), (e.lanes = n), e;
}
function eu(e, t, n) {
  return (
    (t = be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function hv(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ml(0)),
    (this.expirationTimes = Ml(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ml(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ua(e, t, n, r, o, i, l, u, s) {
  return (
    (e = new hv(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = be(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Vs(i),
    e
  );
}
function mv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Fn, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
}
function jp(e) {
  if (!e) return on;
  e = e._reactInternals;
  e: {
    if (Tn(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Fe(n)) return Fd(e, n, t);
  }
  return t;
}
function Up(e, t, n, r, o, i, l, u, s) {
  return (
    (e = ua(n, r, !0, e, o, i, l, u, s)),
    (e.context = jp(null)),
    (n = e.current),
    (r = Te()),
    (o = tn(n)),
    (i = Lt(r, o)),
    (i.callback = t ?? null),
    bt(n, i, o),
    (e.current.lanes = o),
    Eo(e, o, r),
    je(e, r),
    e
  );
}
function rl(e, t, n, r) {
  var o = t.current,
    i = Te(),
    l = tn(o);
  return (
    (n = jp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Lt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = bt(o, t, l)),
    e !== null && (pt(e, o, l, i), ti(e, o, l)),
    l
  );
}
function Ui(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Uc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function sa(e, t) {
  Uc(e, t), (e = e.alternate) && Uc(e, t);
}
function yv() {
  return null;
}
var Ip =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function aa(e) {
  this._internalRoot = e;
}
ol.prototype.render = aa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  rl(e, t, null, null);
};
ol.prototype.unmount = aa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Pn(function () {
      rl(null, e, null, null);
    }),
      (t[At] = null);
  }
};
function ol(e) {
  this._internalRoot = e;
}
ol.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = md();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
    Qt.splice(n, 0, e), n === 0 && vd(e);
  }
};
function ca(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function il(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Ic() {}
function vv(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var a = Ui(l);
        i.call(a);
      };
    }
    var l = Up(t, r, e, 0, null, !1, !1, '', Ic);
    return (e._reactRootContainer = l), (e[At] = l.current), lo(e.nodeType === 8 ? e.parentNode : e), Pn(), l;
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var a = Ui(s);
      u.call(a);
    };
  }
  var s = ua(e, 0, !1, null, null, !1, !1, '', Ic);
  return (
    (e._reactRootContainer = s),
    (e[At] = s.current),
    lo(e.nodeType === 8 ? e.parentNode : e),
    Pn(function () {
      rl(t, s, n, r);
    }),
    s
  );
}
function ll(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == 'function') {
      var u = o;
      o = function () {
        var s = Ui(l);
        u.call(s);
      };
    }
    rl(t, l, e, o);
  } else l = vv(n, t, e, o, r);
  return Ui(l);
}
pd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = jr(t.pendingLanes);
        n !== 0 && (Os(t, n | 1), je(t, ae()), !(J & 6) && ((fr = ae() + 500), sn()));
      }
      break;
    case 13:
      Pn(function () {
        var r = Ft(e, 1);
        if (r !== null) {
          var o = Te();
          pt(r, e, 1, o);
        }
      }),
        sa(e, 1);
  }
};
Ts = function (e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = Te();
      pt(t, e, 134217728, n);
    }
    sa(e, 134217728);
  }
};
hd = function (e) {
  if (e.tag === 13) {
    var t = tn(e),
      n = Ft(e, t);
    if (n !== null) {
      var r = Te();
      pt(n, e, t, r);
    }
    sa(e, t);
  }
};
md = function () {
  return G;
};
yd = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
Nu = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Eu(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Xi(r);
            if (!o) throw Error(x(90));
            qf(r), Eu(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Yf(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Xn(e, !!n.multiple, t, !1);
  }
};
nd = ra;
rd = Pn;
var gv = { usingClientEntryPoint: !1, Events: [ko, $n, Xi, ed, td, ra] },
  Lr = { findFiberByHostInstance: mn, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
  wv = {
    bundleType: Lr.bundleType,
    version: Lr.version,
    rendererPackageName: Lr.rendererPackageName,
    rendererConfig: Lr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ld(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Lr.findFiberByHostInstance || yv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Yo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yo.isDisabled && Yo.supportsFiber)
    try {
      (Ki = Yo.inject(wv)), (wt = Yo);
    } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gv;
Qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ca(t)) throw Error(x(200));
  return mv(e, t, null, n);
};
Qe.createRoot = function (e, t) {
  if (!ca(e)) throw Error(x(299));
  var n = !1,
    r = '',
    o = Ip;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ua(e, 1, !1, null, null, n, !1, r, o)),
    (e[At] = t.current),
    lo(e.nodeType === 8 ? e.parentNode : e),
    new aa(t)
  );
};
Qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(x(188)) : ((e = Object.keys(e).join(',')), Error(x(268, e)));
  return (e = ld(t)), (e = e === null ? null : e.stateNode), e;
};
Qe.flushSync = function (e) {
  return Pn(e);
};
Qe.hydrate = function (e, t, n) {
  if (!il(t)) throw Error(x(200));
  return ll(null, e, t, !0, n);
};
Qe.hydrateRoot = function (e, t, n) {
  if (!ca(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = Ip;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Up(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[At] = t.current),
    lo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ol(t);
};
Qe.render = function (e, t, n) {
  if (!il(t)) throw Error(x(200));
  return ll(null, e, t, !1, n);
};
Qe.unmountComponentAtNode = function (e) {
  if (!il(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (Pn(function () {
        ll(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[At] = null);
        });
      }),
      !0)
    : !1;
};
Qe.unstable_batchedUpdates = ra;
Qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!il(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return ll(e, t, n, !1, r);
};
Qe.version = '18.2.0-next-9e3b772b8-20220608';
function Bp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bp);
    } catch (e) {
      console.error(e);
    }
}
Bp(), (Uf.exports = Qe);
var Sv = Uf.exports,
  Bc = Sv;
(hu.createRoot = Bc.createRoot), (hu.hydrateRoot = Bc.hydrateRoot);
const $p = (e) => e.length > 0 && e.every((t) => t.selectedOptionId);
function ul() {
  return P.useContext(Ff);
}
function Hp() {
  return P.useContext(jf);
}
const Ev = '_option_fhjw4_1',
  _v = '_option__unanswered_fhjw4_13 _option_fhjw4_1',
  kv = '_option__correct_fhjw4_16 _option_fhjw4_1',
  xv = '_option__incorrect_fhjw4_22 _option_fhjw4_1',
  Cv = '_option__selected_fhjw4_28 _option_fhjw4_1',
  Rv = '_disabled_fhjw4_34',
  $c = {
    option: Ev,
    option__unanswered: _v,
    option__correct: kv,
    option__incorrect: xv,
    option__selected: Cv,
    disabled: Rv,
  };
function Pv(e) {
  const t = $c[`option__${e.status}`];
  return V.jsx('button', {
    onClick: () => e.onClick(e.option.id),
    className: `${t} ${e.disabled ? $c.disabled : ''}`,
    disabled: e.disabled,
    children: V.jsx('span', { dangerouslySetInnerHTML: { __html: e.option.text } }),
  });
}
var An = ((e) => (
  (e.unanswered = 'unanswered'), (e.correct = 'correct'), (e.incorrect = 'incorrect'), (e.selected = 'selected'), e
))(An || {});
const Nv = '_question_1ux4o_1',
  Ov = '_questionText_1ux4o_4',
  Hc = { question: Nv, questionText: Ov };
function Tv(e) {
  const t = (r) => {
      e.onQuestionAnswered(e.question.id, r);
    },
    n = (r) => {
      if (!e.showCorrection) return e.question.selectedOptionId === r ? An.selected : An.unanswered;
      const o = e.question.options.find((i) => i.isAnswer);
      return (o == null ? void 0 : o.id) === r
        ? An.correct
        : e.question.selectedOptionId === r && (o == null ? void 0 : o.id) !== r
        ? An.incorrect
        : An.unanswered;
    };
  return V.jsxs('div', {
    className: Hc.question,
    children: [
      V.jsx('div', { className: Hc.questionText, dangerouslySetInnerHTML: { __html: e.question.text } }),
      V.jsx('div', {
        children: e.question.options.map((r) =>
          V.jsx(Pv, { option: r, status: n(r.id), disabled: e.showCorrection, onClick: t }, r.id),
        ),
      }),
    ],
  });
}
const Lv = '_questionList_jh08c_1',
  Dv = { questionList: Lv };
function Wp({ showCorrection: e = !1 }) {
  const t = ul(),
    n = Hp(),
    r = (o, i) => {
      n({ type: 'answerQuestion', payload: { questionId: o, optionId: i } });
    };
  return V.jsx('div', {
    className: Dv.questionList,
    children: t.map((o) => V.jsx(Tv, { question: o, showCorrection: e, onQuestionAnswered: r }, o.id)),
  });
}
function Vp(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: zv } = Object.prototype,
  { getPrototypeOf: fa } = Object,
  sl = ((e) => (t) => {
    const n = zv.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Et = (e) => ((e = e.toLowerCase()), (t) => sl(t) === e),
  al = (e) => (t) => typeof t === e,
  { isArray: vr } = Array,
  yo = al('undefined');
function Mv(e) {
  return (
    e !== null &&
    !yo(e) &&
    e.constructor !== null &&
    !yo(e.constructor) &&
    tt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Qp = Et('ArrayBuffer');
function Av(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && Qp(e.buffer)),
    t
  );
}
const Fv = al('string'),
  tt = al('function'),
  Kp = al('number'),
  cl = (e) => e !== null && typeof e == 'object',
  jv = (e) => e === !0 || e === !1,
  si = (e) => {
    if (sl(e) !== 'object') return !1;
    const t = fa(e);
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Uv = Et('Date'),
  Iv = Et('File'),
  Bv = Et('Blob'),
  $v = Et('FileList'),
  Hv = (e) => cl(e) && tt(e.pipe),
  Wv = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (tt(e.append) &&
          ((t = sl(e)) === 'formdata' || (t === 'object' && tt(e.toString) && e.toString() === '[object FormData]'))))
    );
  },
  Vv = Et('URLSearchParams'),
  Qv = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
function Co(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, o;
  if ((typeof e != 'object' && (e = [e]), vr(e))) for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = i.length;
    let u;
    for (r = 0; r < l; r++) (u = i[r]), t.call(null, e[u], u, e);
  }
}
function qp(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Jp = (() =>
    typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : global)(),
  Yp = (e) => !yo(e) && e !== Jp;
function us() {
  const { caseless: e } = (Yp(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && qp(t, o)) || o;
      si(t[i]) && si(r) ? (t[i] = us(t[i], r)) : si(r) ? (t[i] = us({}, r)) : vr(r) ? (t[i] = r.slice()) : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++) arguments[r] && Co(arguments[r], n);
  return t;
}
const Kv = (e, t, n, { allOwnKeys: r } = {}) => (
    Co(
      t,
      (o, i) => {
        n && tt(o) ? (e[i] = Vp(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  qv = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Jv = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Yv = (e, t, n, r) => {
    let o, i, l;
    const u = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (l = o[i]), (!r || r(l, e, t)) && !u[l] && ((t[l] = e[l]), (u[l] = !0));
      e = n !== !1 && fa(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Xv = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Gv = (e) => {
    if (!e) return null;
    if (vr(e)) return e;
    let t = e.length;
    if (!Kp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Zv = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && fa(Uint8Array)),
  bv = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  eg = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  tg = Et('HTMLFormElement'),
  ng = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Wc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  rg = Et('RegExp'),
  Xp = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Co(n, (o, i) => {
      t(o, i, e) !== !1 && (r[i] = o);
    }),
      Object.defineProperties(e, r);
  },
  og = (e) => {
    Xp(e, (t, n) => {
      if (tt(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1;
      const r = e[n];
      if (tt(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
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
  ig = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return vr(e) ? r(e) : r(String(e).split(t)), n;
  },
  lg = () => {},
  ug = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  tu = 'abcdefghijklmnopqrstuvwxyz',
  Vc = '0123456789',
  Gp = { DIGIT: Vc, ALPHA: tu, ALPHA_DIGIT: tu + tu.toUpperCase() + Vc },
  sg = (e = 16, t = Gp.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function ag(e) {
  return !!(e && tt(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator]);
}
const cg = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (cl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[o] = r;
            const i = vr(r) ? [] : {};
            return (
              Co(r, (l, u) => {
                const s = n(l, o + 1);
                !yo(s) && (i[u] = s);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  fg = Et('AsyncFunction'),
  dg = (e) => e && (cl(e) || tt(e)) && tt(e.then) && tt(e.catch),
  _ = {
    isArray: vr,
    isArrayBuffer: Qp,
    isBuffer: Mv,
    isFormData: Wv,
    isArrayBufferView: Av,
    isString: Fv,
    isNumber: Kp,
    isBoolean: jv,
    isObject: cl,
    isPlainObject: si,
    isUndefined: yo,
    isDate: Uv,
    isFile: Iv,
    isBlob: Bv,
    isRegExp: rg,
    isFunction: tt,
    isStream: Hv,
    isURLSearchParams: Vv,
    isTypedArray: Zv,
    isFileList: $v,
    forEach: Co,
    merge: us,
    extend: Kv,
    trim: Qv,
    stripBOM: qv,
    inherits: Jv,
    toFlatObject: Yv,
    kindOf: sl,
    kindOfTest: Et,
    endsWith: Xv,
    toArray: Gv,
    forEachEntry: bv,
    matchAll: eg,
    isHTMLForm: tg,
    hasOwnProperty: Wc,
    hasOwnProp: Wc,
    reduceDescriptors: Xp,
    freezeMethods: og,
    toObjectSet: ig,
    toCamelCase: ng,
    noop: lg,
    toFiniteNumber: ug,
    findKey: qp,
    global: Jp,
    isContextDefined: Yp,
    ALPHABET: Gp,
    generateString: sg,
    isSpecCompliantForm: ag,
    toJSONObject: cg,
    isAsyncFn: fg,
    isThenable: dg,
  };
function q(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
_.inherits(q, Error, {
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
      config: _.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Zp = q.prototype,
  bp = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  bp[e] = { value: e };
});
Object.defineProperties(q, bp);
Object.defineProperty(Zp, 'isAxiosError', { value: !0 });
q.from = (e, t, n, r, o, i) => {
  const l = Object.create(Zp);
  return (
    _.toFlatObject(
      e,
      l,
      function (s) {
        return s !== Error.prototype;
      },
      (u) => u !== 'isAxiosError',
    ),
    q.call(l, e.message, t, n, r, o),
    (l.cause = e),
    (l.name = e.name),
    i && Object.assign(l, i),
    l
  );
};
const pg = null;
function ss(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function eh(e) {
  return _.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function Qc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = eh(o)), !n && i ? '[' + o + ']' : o;
        })
        .join(n ? '.' : '')
    : t;
}
function hg(e) {
  return _.isArray(e) && !e.some(ss);
}
const mg = _.toFlatObject(_, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function fl(e, t, n) {
  if (!_.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = _.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (v, R) {
      return !_.isUndefined(R[v]);
    }));
  const r = n.metaTokens,
    o = n.visitor || f,
    i = n.dots,
    l = n.indexes,
    s = (n.Blob || (typeof Blob < 'u' && Blob)) && _.isSpecCompliantForm(t);
  if (!_.isFunction(o)) throw new TypeError('visitor must be a function');
  function a(y) {
    if (y === null) return '';
    if (_.isDate(y)) return y.toISOString();
    if (!s && _.isBlob(y)) throw new q('Blob is not supported. Use a Buffer instead.');
    return _.isArrayBuffer(y) || _.isTypedArray(y)
      ? s && typeof Blob == 'function'
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function f(y, v, R) {
    let c = y;
    if (y && !R && typeof y == 'object') {
      if (_.endsWith(v, '{}')) (v = r ? v : v.slice(0, -2)), (y = JSON.stringify(y));
      else if ((_.isArray(y) && hg(y)) || ((_.isFileList(y) || _.endsWith(v, '[]')) && (c = _.toArray(y))))
        return (
          (v = eh(v)),
          c.forEach(function (h, g) {
            !(_.isUndefined(h) || h === null) && t.append(l === !0 ? Qc([v], g, i) : l === null ? v : v + '[]', a(h));
          }),
          !1
        );
    }
    return ss(y) ? !0 : (t.append(Qc(R, v, i), a(y)), !1);
  }
  const p = [],
    m = Object.assign(mg, { defaultVisitor: f, convertValue: a, isVisitable: ss });
  function w(y, v) {
    if (!_.isUndefined(y)) {
      if (p.indexOf(y) !== -1) throw Error('Circular reference detected in ' + v.join('.'));
      p.push(y),
        _.forEach(y, function (c, d) {
          (!(_.isUndefined(c) || c === null) && o.call(t, c, _.isString(d) ? d.trim() : d, v, m)) === !0 &&
            w(c, v ? v.concat(d) : [d]);
        }),
        p.pop();
    }
  }
  if (!_.isObject(e)) throw new TypeError('data must be an object');
  return w(e), t;
}
function Kc(e) {
  const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function da(e, t) {
  (this._pairs = []), e && fl(e, this, t);
}
const th = da.prototype;
th.append = function (t, n) {
  this._pairs.push([t, n]);
};
th.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Kc);
      }
    : Kc;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1]);
    }, '')
    .join('&');
};
function yg(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function nh(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || yg,
    o = n && n.serialize;
  let i;
  if ((o ? (i = o(t, n)) : (i = _.isURLSearchParams(t) ? t.toString() : new da(t, n).toString(r)), i)) {
    const l = e.indexOf('#');
    l !== -1 && (e = e.slice(0, l)), (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
  }
  return e;
}
class vg {
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
    _.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const qc = vg,
  rh = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  gg = typeof URLSearchParams < 'u' ? URLSearchParams : da,
  wg = typeof FormData < 'u' ? FormData : null,
  Sg = typeof Blob < 'u' ? Blob : null,
  Eg = (() => {
    let e;
    return typeof navigator < 'u' && ((e = navigator.product) === 'ReactNative' || e === 'NativeScript' || e === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u';
  })(),
  _g = (() =>
    typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && typeof self.importScripts == 'function')(),
  gt = {
    isBrowser: !0,
    classes: { URLSearchParams: gg, FormData: wg, Blob: Sg },
    isStandardBrowserEnv: Eg,
    isStandardBrowserWebWorkerEnv: _g,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  };
function kg(e, t) {
  return fl(
    e,
    new gt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return gt.isNode && _.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function xg(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function Cg(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function oh(e) {
  function t(n, r, o, i) {
    let l = n[i++];
    const u = Number.isFinite(+l),
      s = i >= n.length;
    return (
      (l = !l && _.isArray(o) ? o.length : l),
      s
        ? (_.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !u)
        : ((!o[l] || !_.isObject(o[l])) && (o[l] = []), t(n, r, o[l], i) && _.isArray(o[l]) && (o[l] = Cg(o[l])), !u)
    );
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const n = {};
    return (
      _.forEachEntry(e, (r, o) => {
        t(xg(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
const Rg = { 'Content-Type': void 0 };
function Pg(e, t, n) {
  if (_.isString(e))
    try {
      return (t || JSON.parse)(e), _.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const dl = {
  transitional: rh,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = _.isObject(t);
      if ((i && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t))) return o && o ? JSON.stringify(oh(t)) : t;
      if (_.isArrayBuffer(t) || _.isBuffer(t) || _.isStream(t) || _.isFile(t) || _.isBlob(t)) return t;
      if (_.isArrayBufferView(t)) return t.buffer;
      if (_.isURLSearchParams(t))
        return n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString();
      let u;
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1) return kg(t, this.formSerializer).toString();
        if ((u = _.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const s = this.env && this.env.FormData;
          return fl(u ? { 'files[]': t } : t, s && new s(), this.formSerializer);
        }
      }
      return i || o ? (n.setContentType('application/json', !1), Pg(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || dl.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json';
      if (t && _.isString(t) && ((r && !this.responseType) || o)) {
        const l = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (u) {
          if (l) throw u.name === 'SyntaxError' ? q.from(u, q.ERR_BAD_RESPONSE, this, null, this.response) : u;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: gt.classes.FormData, Blob: gt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: 'application/json, text/plain, */*' } },
};
_.forEach(['delete', 'get', 'head'], function (t) {
  dl.headers[t] = {};
});
_.forEach(['post', 'put', 'patch'], function (t) {
  dl.headers[t] = _.merge(Rg);
});
const pa = dl,
  Ng = _.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  Og = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (l) {
            (o = l.indexOf(':')),
              (n = l.substring(0, o).trim().toLowerCase()),
              (r = l.substring(o + 1).trim()),
              !(!n || (t[n] && Ng[n])) &&
                (n === 'set-cookie' ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  Jc = Symbol('internals');
function Dr(e) {
  return e && String(e).trim().toLowerCase();
}
function ai(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(ai) : String(e);
}
function Tg(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Lg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function nu(e, t, n, r, o) {
  if (_.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!_.isString(t))) {
    if (_.isString(r)) return t.indexOf(r) !== -1;
    if (_.isRegExp(r)) return r.test(t);
  }
}
function Dg(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function zg(e, t) {
  const n = _.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, l) {
        return this[r].call(this, t, o, i, l);
      },
      configurable: !0,
    });
  });
}
class pl {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(u, s, a) {
      const f = Dr(s);
      if (!f) throw new Error('header name must be a non-empty string');
      const p = _.findKey(o, f);
      (!p || o[p] === void 0 || a === !0 || (a === void 0 && o[p] !== !1)) && (o[p || s] = ai(u));
    }
    const l = (u, s) => _.forEach(u, (a, f) => i(a, f, s));
    return (
      _.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : _.isString(t) && (t = t.trim()) && !Lg(t)
        ? l(Og(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Dr(t)), t)) {
      const r = _.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return Tg(o);
        if (_.isFunction(n)) return n.call(this, o, r);
        if (_.isRegExp(n)) return n.exec(o);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = Dr(t)), t)) {
      const r = _.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || nu(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(l) {
      if (((l = Dr(l)), l)) {
        const u = _.findKey(r, l);
        u && (!n || nu(r, r[u], u, n)) && (delete r[u], (o = !0));
      }
    }
    return _.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || nu(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      _.forEach(this, (o, i) => {
        const l = _.findKey(r, i);
        if (l) {
          (n[l] = ai(o)), delete n[i];
          return;
        }
        const u = t ? Dg(i) : String(i).trim();
        u !== i && delete n[i], (n[u] = ai(o)), (r[u] = !0);
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
      _.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && _.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Jc] = this[Jc] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(l) {
      const u = Dr(l);
      r[u] || (zg(o, l), (r[u] = !0));
    }
    return _.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
pl.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
_.freezeMethods(pl.prototype);
_.freezeMethods(pl);
const Dt = pl;
function ru(e, t) {
  const n = this || pa,
    r = t || n,
    o = Dt.from(r.headers);
  let i = r.data;
  return (
    _.forEach(e, function (u) {
      i = u.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function ih(e) {
  return !!(e && e.__CANCEL__);
}
function Ro(e, t, n) {
  q.call(this, e ?? 'canceled', q.ERR_CANCELED, t, n), (this.name = 'CanceledError');
}
_.inherits(Ro, q, { __CANCEL__: !0 });
function Mg(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new q(
          'Request failed with status code ' + n.status,
          [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n,
        ),
      );
}
const Ag = gt.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, o, i, l, u) {
          const s = [];
          s.push(n + '=' + encodeURIComponent(r)),
            _.isNumber(o) && s.push('expires=' + new Date(o).toGMTString()),
            _.isString(i) && s.push('path=' + i),
            _.isString(l) && s.push('domain=' + l),
            u === !0 && s.push('secure'),
            (document.cookie = s.join('; '));
        },
        read: function (n) {
          const r = document.cookie.match(new RegExp('(^|;\\s*)(' + n + ')=([^;]*)'));
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, '', Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function Fg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function jg(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function lh(e, t) {
  return e && !Fg(t) ? jg(e, t) : t;
}
const Ug = gt.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a');
      let r;
      function o(i) {
        let l = i;
        return (
          t && (n.setAttribute('href', l), (l = n.href)),
          n.setAttribute('href', l),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (l) {
          const u = _.isString(l) ? o(l) : l;
          return u.protocol === r.protocol && u.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Ig(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function Bg(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const a = Date.now(),
        f = r[i];
      l || (l = a), (n[o] = s), (r[o] = a);
      let p = i,
        m = 0;
      for (; p !== o; ) (m += n[p++]), (p = p % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), a - l < t)) return;
      const w = f && a - f;
      return w ? Math.round((m * 1e3) / w) : void 0;
    }
  );
}
function Yc(e, t) {
  let n = 0;
  const r = Bg(50, 250);
  return (o) => {
    const i = o.loaded,
      l = o.lengthComputable ? o.total : void 0,
      u = i - n,
      s = r(u),
      a = i <= l;
    n = i;
    const f = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: u,
      rate: s || void 0,
      estimated: s && l && a ? (l - i) / s : void 0,
      event: o,
    };
    (f[t ? 'download' : 'upload'] = !0), e(f);
  };
}
const $g = typeof XMLHttpRequest < 'u',
  Hg =
    $g &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = Dt.from(e.headers).normalize(),
          l = e.responseType;
        let u;
        function s() {
          e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener('abort', u);
        }
        _.isFormData(o) &&
          (gt.isStandardBrowserEnv || gt.isStandardBrowserWebWorkerEnv
            ? i.setContentType(!1)
            : i.setContentType('multipart/form-data;', !1));
        let a = new XMLHttpRequest();
        if (e.auth) {
          const w = e.auth.username || '',
            y = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : '';
          i.set('Authorization', 'Basic ' + btoa(w + ':' + y));
        }
        const f = lh(e.baseURL, e.url);
        a.open(e.method.toUpperCase(), nh(f, e.params, e.paramsSerializer), !0), (a.timeout = e.timeout);
        function p() {
          if (!a) return;
          const w = Dt.from('getAllResponseHeaders' in a && a.getAllResponseHeaders()),
            v = {
              data: !l || l === 'text' || l === 'json' ? a.responseText : a.response,
              status: a.status,
              statusText: a.statusText,
              headers: w,
              config: e,
              request: a,
            };
          Mg(
            function (c) {
              n(c), s();
            },
            function (c) {
              r(c), s();
            },
            v,
          ),
            (a = null);
        }
        if (
          ('onloadend' in a
            ? (a.onloadend = p)
            : (a.onreadystatechange = function () {
                !a ||
                  a.readyState !== 4 ||
                  (a.status === 0 && !(a.responseURL && a.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(p);
              }),
          (a.onabort = function () {
            a && (r(new q('Request aborted', q.ECONNABORTED, e, a)), (a = null));
          }),
          (a.onerror = function () {
            r(new q('Network Error', q.ERR_NETWORK, e, a)), (a = null);
          }),
          (a.ontimeout = function () {
            let y = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded';
            const v = e.transitional || rh;
            e.timeoutErrorMessage && (y = e.timeoutErrorMessage),
              r(new q(y, v.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED, e, a)),
              (a = null);
          }),
          gt.isStandardBrowserEnv)
        ) {
          const w = (e.withCredentials || Ug(f)) && e.xsrfCookieName && Ag.read(e.xsrfCookieName);
          w && i.set(e.xsrfHeaderName, w);
        }
        o === void 0 && i.setContentType(null),
          'setRequestHeader' in a &&
            _.forEach(i.toJSON(), function (y, v) {
              a.setRequestHeader(v, y);
            }),
          _.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials),
          l && l !== 'json' && (a.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' && a.addEventListener('progress', Yc(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            a.upload &&
            a.upload.addEventListener('progress', Yc(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((u = (w) => {
              a && (r(!w || w.type ? new Ro(null, e, a) : w), a.abort(), (a = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(u),
            e.signal && (e.signal.aborted ? u() : e.signal.addEventListener('abort', u)));
        const m = Ig(f);
        if (m && gt.protocols.indexOf(m) === -1) {
          r(new q('Unsupported protocol ' + m + ':', q.ERR_BAD_REQUEST, e));
          return;
        }
        a.send(o || null);
      });
    },
  ci = { http: pg, xhr: Hg };
_.forEach(ci, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const Wg = {
  getAdapter: (e) => {
    e = _.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let o = 0; o < t && ((n = e[o]), !(r = _.isString(n) ? ci[n.toLowerCase()] : n)); o++);
    if (!r)
      throw r === !1
        ? new q(`Adapter ${n} is not supported by the environment`, 'ERR_NOT_SUPPORT')
        : new Error(_.hasOwnProp(ci, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
    if (!_.isFunction(r)) throw new TypeError('adapter is not a function');
    return r;
  },
  adapters: ci,
};
function ou(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new Ro(null, e);
}
function Xc(e) {
  return (
    ou(e),
    (e.headers = Dt.from(e.headers)),
    (e.data = ru.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Wg.getAdapter(e.adapter || pa.adapter)(e).then(
      function (r) {
        return ou(e), (r.data = ru.call(e, e.transformResponse, r)), (r.headers = Dt.from(r.headers)), r;
      },
      function (r) {
        return (
          ih(r) ||
            (ou(e),
            r &&
              r.response &&
              ((r.response.data = ru.call(e, e.transformResponse, r.response)),
              (r.response.headers = Dt.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const Gc = (e) => (e instanceof Dt ? e.toJSON() : e);
function dr(e, t) {
  t = t || {};
  const n = {};
  function r(a, f, p) {
    return _.isPlainObject(a) && _.isPlainObject(f)
      ? _.merge.call({ caseless: p }, a, f)
      : _.isPlainObject(f)
      ? _.merge({}, f)
      : _.isArray(f)
      ? f.slice()
      : f;
  }
  function o(a, f, p) {
    if (_.isUndefined(f)) {
      if (!_.isUndefined(a)) return r(void 0, a, p);
    } else return r(a, f, p);
  }
  function i(a, f) {
    if (!_.isUndefined(f)) return r(void 0, f);
  }
  function l(a, f) {
    if (_.isUndefined(f)) {
      if (!_.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, f);
  }
  function u(a, f, p) {
    if (p in t) return r(a, f);
    if (p in e) return r(void 0, a);
  }
  const s = {
    url: i,
    method: i,
    data: i,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: u,
    headers: (a, f) => o(Gc(a), Gc(f), !0),
  };
  return (
    _.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const p = s[f] || o,
        m = p(e[f], t[f], f);
      (_.isUndefined(m) && p !== u) || (n[f] = m);
    }),
    n
  );
}
const uh = '1.4.0',
  ha = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  ha[e] = function (r) {
    return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
  };
});
const Zc = {};
ha.transitional = function (t, n, r) {
  function o(i, l) {
    return '[Axios v' + uh + "] Transitional option '" + i + "'" + l + (r ? '. ' + r : '');
  }
  return (i, l, u) => {
    if (t === !1) throw new q(o(l, ' has been removed' + (n ? ' in ' + n : '')), q.ERR_DEPRECATED);
    return (
      n &&
        !Zc[l] &&
        ((Zc[l] = !0),
        console.warn(o(l, ' has been deprecated since v' + n + ' and will be removed in the near future'))),
      t ? t(i, l, u) : !0
    );
  };
};
function Vg(e, t, n) {
  if (typeof e != 'object') throw new q('options must be an object', q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      l = t[i];
    if (l) {
      const u = e[i],
        s = u === void 0 || l(u, i, e);
      if (s !== !0) throw new q('option ' + i + ' must be ' + s, q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new q('Unknown option ' + i, q.ERR_BAD_OPTION);
  }
}
const as = { assertOptions: Vg, validators: ha },
  Ht = as.validators;
class Ii {
  constructor(t) {
    (this.defaults = t), (this.interceptors = { request: new qc(), response: new qc() });
  }
  request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = dr(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      as.assertOptions(
        r,
        {
          silentJSONParsing: Ht.transitional(Ht.boolean),
          forcedJSONParsing: Ht.transitional(Ht.boolean),
          clarifyTimeoutError: Ht.transitional(Ht.boolean),
        },
        !1,
      ),
      o != null &&
        (_.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : as.assertOptions(o, { encode: Ht.function, serialize: Ht.function }, !0)),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let l;
    (l = i && _.merge(i.common, i[n.method])),
      l &&
        _.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (y) => {
          delete i[y];
        }),
      (n.headers = Dt.concat(l, i));
    const u = [];
    let s = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == 'function' && v.runWhen(n) === !1) ||
        ((s = s && v.synchronous), u.unshift(v.fulfilled, v.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (v) {
      a.push(v.fulfilled, v.rejected);
    });
    let f,
      p = 0,
      m;
    if (!s) {
      const y = [Xc.bind(this), void 0];
      for (y.unshift.apply(y, u), y.push.apply(y, a), m = y.length, f = Promise.resolve(n); p < m; )
        f = f.then(y[p++], y[p++]);
      return f;
    }
    m = u.length;
    let w = n;
    for (p = 0; p < m; ) {
      const y = u[p++],
        v = u[p++];
      try {
        w = y(w);
      } catch (R) {
        v.call(this, R);
        break;
      }
    }
    try {
      f = Xc.call(this, w);
    } catch (y) {
      return Promise.reject(y);
    }
    for (p = 0, m = a.length; p < m; ) f = f.then(a[p++], a[p++]);
    return f;
  }
  getUri(t) {
    t = dr(this.defaults, t);
    const n = lh(t.baseURL, t.url);
    return nh(n, t.params, t.paramsSerializer);
  }
}
_.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Ii.prototype[t] = function (n, r) {
    return this.request(dr(r || {}, { method: t, url: n, data: (r || {}).data }));
  };
});
_.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (i, l, u) {
      return this.request(
        dr(u || {}, { method: t, headers: r ? { 'Content-Type': 'multipart/form-data' } : {}, url: i, data: l }),
      );
    };
  }
  (Ii.prototype[t] = n()), (Ii.prototype[t + 'Form'] = n(!0));
});
const fi = Ii;
class ma {
  constructor(t) {
    if (typeof t != 'function') throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const l = new Promise((u) => {
          r.subscribe(u), (i = u);
        }).then(o);
        return (
          (l.cancel = function () {
            r.unsubscribe(i);
          }),
          l
        );
      }),
      t(function (i, l, u) {
        r.reason || ((r.reason = new Ro(i, l, u)), n(r.reason));
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
      token: new ma(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const Qg = ma;
function Kg(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function qg(e) {
  return _.isObject(e) && e.isAxiosError === !0;
}
const cs = {
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
Object.entries(cs).forEach(([e, t]) => {
  cs[t] = e;
});
const Jg = cs;
function sh(e) {
  const t = new fi(e),
    n = Vp(fi.prototype.request, t);
  return (
    _.extend(n, fi.prototype, t, { allOwnKeys: !0 }),
    _.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return sh(dr(e, o));
    }),
    n
  );
}
const me = sh(pa);
me.Axios = fi;
me.CanceledError = Ro;
me.CancelToken = Qg;
me.isCancel = ih;
me.VERSION = uh;
me.toFormData = fl;
me.AxiosError = q;
me.Cancel = me.CanceledError;
me.all = function (t) {
  return Promise.all(t);
};
me.spread = Kg;
me.isAxiosError = qg;
me.mergeConfig = dr;
me.AxiosHeaders = Dt;
me.formToJSON = (e) => oh(_.isHTMLForm(e) ? new FormData(e) : e);
me.HttpStatusCode = Jg;
me.default = me;
const bc = me,
  ah = async (e, t) => {
    try {
      return (await bc.get(e, { signal: t == null ? void 0 : t.abortAxiosSignal })).data;
    } catch (n) {
      (!bc.isAxiosError(n) || n.code !== 'ERR_CANCELED') && console.error(n);
    }
  },
  Yg = async (e) => {
    const t = await ah('https://opentdb.com/api_category.php', e);
    return (t == null ? void 0 : t.trivia_categories) ?? [];
  },
  Xg = (e) => ({ value: e.id.toString(), label: e.name }),
  Gg = async (e, t) => {
    const n = await ah(
      `https://opentdb.com/api.php?amount=5&category=${e.categoryId}&difficulty=${e.difficulty}&type=multiple`,
      t,
    );
    return n ? Zg(n) : [];
  },
  Zg = (e) => e.results.map((t, n) => bg(t, n.toString())),
  bg = (e, t) => {
    const n = [
        ...e.incorrect_answers.map((o) => ({ text: o, isAnswer: !1 })),
        { text: e.correct_answer, isAnswer: !0 },
      ],
      r = e0(n).map((o, i) => ({ id: i.toString(), ...o }));
    return { id: t, text: e.question, options: r };
  },
  e0 = (e) => e.sort(() => Math.random() - 0.5),
  t0 = '_customSelect_1uk1g_1',
  n0 = { customSelect: t0 };
function ef(e) {
  return V.jsxs('select', {
    id: e.id,
    value: e.value,
    defaultValue: '',
    onChange: (t) => e.onChange(t.target.value),
    className: n0.customSelect,
    children: [
      V.jsx('option', { value: '', disabled: !0, children: e.placeholder ?? 'Select your option' }),
      e.options.map((t) => V.jsx('option', { value: t.value, children: t.label ?? t.value }, t.value)),
    ],
  });
}
var di = ((e) => ((e.Easy = 'easy'), (e.Medium = 'medium'), (e.Hard = 'hard'), e))(di || {});
const r0 = '_createButton_hrbk9_1',
  o0 = { createButton: r0 };
function i0() {
  const [e, t] = P.useState([]),
    [n, r] = P.useState(void 0);
  P.useEffect(() => {
    const a = new AbortController();
    return (
      (async () => {
        const p = (await Yg({ abortAxiosSignal: a.signal })).map(Xg);
        t(p);
      })(),
      () => {
        a.abort();
      }
    );
  }, []);
  const o = [{ value: di.Easy }, { value: di.Medium }, { value: di.Hard }],
    [i, l] = P.useState(void 0),
    u = Hp(),
    s = async (a, f) => {
      const p = await Gg({ categoryId: a, difficulty: f });
      u({ type: 'create', payload: p });
    };
  return V.jsxs(V.Fragment, {
    children: [
      V.jsx(ef, { id: 'categorySelect', placeholder: 'Select a category', options: e, value: n, onChange: r }),
      V.jsx(ef, {
        id: 'difficultySelect',
        placeholder: 'Select difficulty',
        options: o,
        value: i,
        onChange: (a) => l(a),
      }),
      V.jsx('button', {
        id: 'createBtn',
        className: o0.createButton,
        disabled: !n || !i,
        onClick: () => s(n, i),
        children: 'Create',
      }),
    ],
  });
}
/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function X() {
  return (
    (X = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    X.apply(this, arguments)
  );
}
var ce;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(ce || (ce = {}));
const tf = 'popstate';
function l0(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: u } = r.location;
    return vo(
      '',
      { pathname: i, search: l, hash: u },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default',
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : Nn(o);
  }
  return s0(t, n, null, e);
}
function Q(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function pr(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function u0() {
  return Math.random().toString(36).substr(2, 8);
}
function nf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function vo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    X({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? It(t) : t, {
      state: n,
      key: (t && t.key) || r || u0(),
    })
  );
}
function Nn(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function It(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function s0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    u = ce.Pop,
    s = null,
    a = f();
  a == null && ((a = 0), l.replaceState(X({}, l.state, { idx: a }), ''));
  function f() {
    return (l.state || { idx: null }).idx;
  }
  function p() {
    u = ce.Pop;
    let R = f(),
      c = R == null ? null : R - a;
    (a = R), s && s({ action: u, location: v.location, delta: c });
  }
  function m(R, c) {
    u = ce.Push;
    let d = vo(v.location, R, c);
    n && n(d, R), (a = f() + 1);
    let h = nf(d, a),
      g = v.createHref(d);
    try {
      l.pushState(h, '', g);
    } catch {
      o.location.assign(g);
    }
    i && s && s({ action: u, location: v.location, delta: 1 });
  }
  function w(R, c) {
    u = ce.Replace;
    let d = vo(v.location, R, c);
    n && n(d, R), (a = f());
    let h = nf(d, a),
      g = v.createHref(d);
    l.replaceState(h, '', g), i && s && s({ action: u, location: v.location, delta: 0 });
  }
  function y(R) {
    let c = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      d = typeof R == 'string' ? R : Nn(R);
    return Q(c, 'No window.location.(origin|href) available to create URL for href: ' + d), new URL(d, c);
  }
  let v = {
    get action() {
      return u;
    },
    get location() {
      return e(o, l);
    },
    listen(R) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(tf, p),
        (s = R),
        () => {
          o.removeEventListener(tf, p), (s = null);
        }
      );
    },
    createHref(R) {
      return t(o, R);
    },
    createURL: y,
    encodeLocation(R) {
      let c = y(R);
      return { pathname: c.pathname, search: c.search, hash: c.hash };
    },
    push: m,
    replace: w,
    go(R) {
      return l.go(R);
    },
  };
  return v;
}
var de;
(function (e) {
  (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})(de || (de = {}));
const a0 = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function c0(e) {
  return e.index === !0;
}
function fs(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, i) => {
      let l = [...n, i],
        u = typeof o.id == 'string' ? o.id : l.join('-');
      if (
        (Q(o.index !== !0 || !o.children, 'Cannot specify children on an index route'),
        Q(
          !r[u],
          'Found a route id collision on id "' + u + `".  Route id's must be globally unique within Data Router usages`,
        ),
        c0(o))
      ) {
        let s = X({}, o, t(o), { id: u });
        return (r[u] = s), s;
      } else {
        let s = X({}, o, t(o), { id: u, children: void 0 });
        return (r[u] = s), o.children && (s.children = fs(o.children, t, l, r)), s;
      }
    })
  );
}
function Jn(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? It(t) : t,
    o = gr(r.pathname || '/', n);
  if (o == null) return null;
  let i = ch(e);
  f0(i);
  let l = null;
  for (let u = 0; l == null && u < i.length; ++u) l = S0(i[u], k0(o));
  return l;
}
function ch(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (i, l, u) => {
    let s = {
      relativePath: u === void 0 ? i.path || '' : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    s.relativePath.startsWith('/') &&
      (Q(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = zt([r, s.relativePath]),
      f = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (Q(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + a + '".'),
      ),
      ch(i.children, t, f, a)),
      !(i.path == null && !i.index) && t.push({ path: a, score: g0(a, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, l) => {
      var u;
      if (i.path === '' || !((u = i.path) != null && u.includes('?'))) o(i, l);
      else for (let s of fh(i.path)) o(i, l, s);
    }),
    t
  );
}
function fh(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [i, ''] : [i];
  let l = fh(r.join('/')),
    u = [];
  return (
    u.push(...l.map((s) => (s === '' ? i : [i, s].join('/')))),
    o && u.push(...l),
    u.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function f0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : w0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const d0 = /^:\w+$/,
  p0 = 3,
  h0 = 2,
  m0 = 1,
  y0 = 10,
  v0 = -2,
  rf = (e) => e === '*';
function g0(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(rf) && (r += v0),
    t && (r += h0),
    n.filter((o) => !rf(o)).reduce((o, i) => o + (d0.test(i) ? p0 : i === '' ? m0 : y0), r)
  );
}
function w0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function S0(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let u = n[l],
      s = l === n.length - 1,
      a = o === '/' ? t : t.slice(o.length) || '/',
      f = E0({ path: u.relativePath, caseSensitive: u.caseSensitive, end: s }, a);
    if (!f) return null;
    Object.assign(r, f.params);
    let p = u.route;
    i.push({ params: r, pathname: zt([o, f.pathname]), pathnameBase: P0(zt([o, f.pathnameBase])), route: p }),
      f.pathnameBase !== '/' && (o = zt([o, f.pathnameBase]));
  }
  return i;
}
function E0(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = _0(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, '$1'),
    u = o.slice(1);
  return {
    params: r.reduce((a, f, p) => {
      if (f === '*') {
        let m = u[p] || '';
        l = i.slice(0, i.length - m.length).replace(/(.)\/+$/, '$1');
      }
      return (a[f] = x0(u[p] || '', f)), a;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function _0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    pr(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (l, u) => (r.push(u), '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'), (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function k0(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      pr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function x0(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      pr(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' + e + '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').'),
      ),
      e
    );
  }
}
function gr(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function C0(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: o = '' } = typeof e == 'string' ? It(e) : e;
  return { pathname: n ? (n.startsWith('/') ? n : R0(n, t)) : t, search: N0(r), hash: O0(o) };
}
function R0(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function iu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Po(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function hl(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = It(e))
    : ((o = X({}, e)),
      Q(!o.pathname || !o.pathname.includes('?'), iu('?', 'pathname', 'search', o)),
      Q(!o.pathname || !o.pathname.includes('#'), iu('#', 'pathname', 'hash', o)),
      Q(!o.search || !o.search.includes('#'), iu('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    l = i ? '/' : o.pathname,
    u;
  if (r || l == null) u = n;
  else {
    let p = t.length - 1;
    if (l.startsWith('..')) {
      let m = l.split('/');
      for (; m[0] === '..'; ) m.shift(), (p -= 1);
      o.pathname = m.join('/');
    }
    u = p >= 0 ? t[p] : '/';
  }
  let s = C0(o, u),
    a = l && l !== '/' && l.endsWith('/'),
    f = (i || l === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (a || f) && (s.pathname += '/'), s;
}
const zt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  P0 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  N0 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  O0 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class ya {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = o),
      r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r);
  }
}
function dh(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const ph = ['post', 'put', 'patch', 'delete'],
  T0 = new Set(ph),
  L0 = ['get', ...ph],
  D0 = new Set(L0),
  z0 = new Set([301, 302, 303, 307, 308]),
  M0 = new Set([307, 308]),
  lu = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  A0 = { state: 'idle', data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0 },
  of = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  hh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  mh = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  F0 = !mh,
  j0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function U0(e) {
  Q(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let t;
  if (e.mapRouteProperties) t = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let S = e.detectErrorBoundary;
    t = (E) => ({ hasErrorBoundary: S(E) });
  } else t = j0;
  let n = {},
    r = fs(e.routes, t, void 0, n),
    o,
    i = e.basename || '/',
    l = X({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    u = null,
    s = new Set(),
    a = null,
    f = null,
    p = null,
    m = e.hydrationData != null,
    w = Jn(r, e.history.location, i),
    y = null;
  if (w == null) {
    let S = st(404, { pathname: e.history.location.pathname }),
      { matches: E, route: k } = df(r);
    (w = E), (y = { [k.id]: S });
  }
  let v = !w.some((S) => S.route.lazy) && (!w.some((S) => S.route.loader) || e.hydrationData != null),
    R,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: w,
      initialized: v,
      navigation: lu,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || y,
      fetchers: new Map(),
      blockers: new Map(),
    },
    d = ce.Pop,
    h = !1,
    g,
    C = !1,
    N = !1,
    O = [],
    z = [],
    I = new Map(),
    H = 0,
    Ne = -1,
    ot = new Map(),
    it = new Set(),
    _t = new Map(),
    kt = new Map(),
    qe = new Map(),
    cn = !1;
  function T() {
    return (
      (u = e.history.listen((S) => {
        let { action: E, location: k, delta: D } = S;
        if (cn) {
          cn = !1;
          return;
        }
        pr(
          qe.size === 0 || D != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
        );
        let M = ka({ currentLocation: c.location, nextLocation: k, historyAction: E });
        if (M && D != null) {
          (cn = !0),
            e.history.go(D * -1),
            Oo(M, {
              state: 'blocked',
              location: k,
              proceed() {
                Oo(M, { state: 'proceeding', proceed: void 0, reset: void 0, location: k }), e.history.go(D);
              },
              reset() {
                _r(M), W({ blockers: new Map(R.state.blockers) });
              },
            });
          return;
        }
        return Je(E, k);
      })),
      c.initialized || Je(ce.Pop, c.location),
      R
    );
  }
  function U() {
    u && u(), s.clear(), g && g.abort(), c.fetchers.forEach((S, E) => wl(E)), c.blockers.forEach((S, E) => _r(E));
  }
  function $(S) {
    return s.add(S), () => s.delete(S);
  }
  function W(S) {
    (c = X({}, c, S)), s.forEach((E) => E(c));
  }
  function ne(S, E) {
    var k, D;
    let M =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        Pt(c.navigation.formMethod) &&
        c.navigation.state === 'loading' &&
        ((k = S.state) == null ? void 0 : k._isRedirect) !== !0,
      j;
    E.actionData
      ? Object.keys(E.actionData).length > 0
        ? (j = E.actionData)
        : (j = null)
      : M
      ? (j = c.actionData)
      : (j = null);
    let B = E.loaderData ? ff(c.loaderData, E.loaderData, E.matches || [], E.errors) : c.loaderData;
    for (let [A] of qe) _r(A);
    let F =
      h === !0 ||
      (c.navigation.formMethod != null &&
        Pt(c.navigation.formMethod) &&
        ((D = S.state) == null ? void 0 : D._isRedirect) !== !0);
    o && ((r = o), (o = void 0)),
      W(
        X({}, E, {
          actionData: j,
          loaderData: B,
          historyAction: d,
          location: S,
          initialized: !0,
          navigation: lu,
          revalidation: 'idle',
          restoreScrollPosition: xa(S, E.matches || c.matches),
          preventScrollReset: F,
          blockers: new Map(c.blockers),
        }),
      ),
      C ||
        d === ce.Pop ||
        (d === ce.Push ? e.history.push(S, S.state) : d === ce.Replace && e.history.replace(S, S.state)),
      (d = ce.Pop),
      (h = !1),
      (C = !1),
      (N = !1),
      (O = []),
      (z = []);
  }
  async function fn(S, E) {
    if (typeof S == 'number') {
      e.history.go(S);
      return;
    }
    let k = ds(
        c.location,
        c.matches,
        i,
        l.v7_prependBasename,
        S,
        E == null ? void 0 : E.fromRouteId,
        E == null ? void 0 : E.relative,
      ),
      { path: D, submission: M, error: j } = lf(l.v7_normalizeFormMethod, !1, k, E),
      B = c.location,
      F = vo(c.location, D, E && E.state);
    F = X({}, F, e.history.encodeLocation(F));
    let A = E && E.replace != null ? E.replace : void 0,
      Y = ce.Push;
    A === !0
      ? (Y = ce.Replace)
      : A === !1 ||
        (M != null && Pt(M.formMethod) && M.formAction === c.location.pathname + c.location.search && (Y = ce.Replace));
    let Z = E && 'preventScrollReset' in E ? E.preventScrollReset === !0 : void 0,
      ke = ka({ currentLocation: B, nextLocation: F, historyAction: Y });
    if (ke) {
      Oo(ke, {
        state: 'blocked',
        location: F,
        proceed() {
          Oo(ke, { state: 'proceeding', proceed: void 0, reset: void 0, location: F }), fn(S, E);
        },
        reset() {
          _r(ke), W({ blockers: new Map(c.blockers) });
        },
      });
      return;
    }
    return await Je(Y, F, { submission: M, pendingError: j, preventScrollReset: Z, replace: E && E.replace });
  }
  function xt() {
    if ((vl(), W({ revalidation: 'loading' }), c.navigation.state !== 'submitting')) {
      if (c.navigation.state === 'idle') {
        Je(c.historyAction, c.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Je(d || c.historyAction, c.navigation.location, { overrideNavigation: c.navigation });
    }
  }
  async function Je(S, E, k) {
    g && g.abort(),
      (g = null),
      (d = S),
      (C = (k && k.startUninterruptedRevalidation) === !0),
      Lh(c.location, c.matches),
      (h = (k && k.preventScrollReset) === !0);
    let D = o || r,
      M = k && k.overrideNavigation,
      j = Jn(D, E, i);
    if (!j) {
      let ye = st(404, { pathname: E.pathname }),
        { matches: ve, route: Ye } = df(D);
      Sl(), ne(E, { matches: ve, loaderData: {}, errors: { [Ye.id]: ye } });
      return;
    }
    if (c.initialized && W0(c.location, E) && !(k && k.submission && Pt(k.submission.formMethod))) {
      ne(E, { matches: j });
      return;
    }
    g = new AbortController();
    let B = Mr(e.history, E, g.signal, k && k.submission),
      F,
      A;
    if (k && k.pendingError) A = { [Yn(j).route.id]: k.pendingError };
    else if (k && k.submission && Pt(k.submission.formMethod)) {
      let ye = await Ct(B, E, k.submission, j, { replace: k.replace });
      if (ye.shortCircuited) return;
      (F = ye.pendingActionData),
        (A = ye.pendingActionError),
        (M = X({ state: 'loading', location: E }, k.submission)),
        (B = new Request(B.url, { signal: B.signal }));
    }
    let {
      shortCircuited: Y,
      loaderData: Z,
      errors: ke,
    } = await Ln(B, E, j, M, k && k.submission, k && k.fetcherSubmission, k && k.replace, F, A);
    Y || ((g = null), ne(E, X({ matches: j }, F ? { actionData: F } : {}, { loaderData: Z, errors: ke })));
  }
  async function Ct(S, E, k, D, M) {
    vl();
    let j = X({ state: 'submitting', location: E }, k);
    W({ navigation: j });
    let B,
      F = ps(D, E);
    if (!F.route.action && !F.route.lazy)
      B = { type: de.error, error: st(405, { method: S.method, pathname: E.pathname, routeId: F.route.id }) };
    else if (((B = await zr('action', S, F, D, n, t, i)), S.signal.aborted)) return { shortCircuited: !0 };
    if (nr(B)) {
      let A;
      return (
        M && M.replace != null ? (A = M.replace) : (A = B.location === c.location.pathname + c.location.search),
        await Er(c, B, { submission: k, replace: A }),
        { shortCircuited: !0 }
      );
    }
    if (Jr(B)) {
      let A = Yn(D, F.route.id);
      return (
        (M && M.replace) !== !0 && (d = ce.Push),
        { pendingActionData: {}, pendingActionError: { [A.route.id]: B.error } }
      );
    }
    if (gn(B)) throw st(400, { type: 'defer-action' });
    return { pendingActionData: { [F.route.id]: B.data } };
  }
  async function Ln(S, E, k, D, M, j, B, F, A) {
    let Y = D;
    Y ||
      (Y = X(
        {
          state: 'loading',
          location: E,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        M,
      ));
    let Z =
        M || j
          ? M || j
          : Y.formMethod && Y.formAction && Y.formData && Y.formEncType
          ? { formMethod: Y.formMethod, formAction: Y.formAction, formData: Y.formData, formEncType: Y.formEncType }
          : void 0,
      ke = o || r,
      [ye, ve] = uf(e.history, c, k, Z, E, N, O, z, _t, ke, i, F, A);
    if (
      (Sl((oe) => !(k && k.some((Xe) => Xe.route.id === oe)) || (ye && ye.some((Xe) => Xe.route.id === oe))),
      ye.length === 0 && ve.length === 0)
    ) {
      let oe = Ea();
      return (
        ne(
          E,
          X(
            { matches: k, loaderData: {}, errors: A || null },
            F ? { actionData: F } : {},
            oe ? { fetchers: new Map(c.fetchers) } : {},
          ),
        ),
        { shortCircuited: !0 }
      );
    }
    if (!C) {
      ve.forEach((Xe) => {
        let zn = c.fetchers.get(Xe.key),
          Cl = {
            state: 'loading',
            data: zn && zn.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            ' _hasFetcherDoneAnything ': !0,
          };
        c.fetchers.set(Xe.key, Cl);
      });
      let oe = F || c.actionData;
      W(
        X(
          { navigation: Y },
          oe ? (Object.keys(oe).length === 0 ? { actionData: null } : { actionData: oe }) : {},
          ve.length > 0 ? { fetchers: new Map(c.fetchers) } : {},
        ),
      );
    }
    (Ne = ++H),
      ve.forEach((oe) => {
        oe.controller && I.set(oe.key, oe.controller);
      });
    let Ye = () => ve.forEach((oe) => Dn(oe.key));
    g && g.signal.addEventListener('abort', Ye);
    let { results: kr, loaderResults: El, fetcherResults: To } = await wa(c.matches, k, ye, ve, S);
    if (S.signal.aborted) return { shortCircuited: !0 };
    g && g.signal.removeEventListener('abort', Ye), ve.forEach((oe) => I.delete(oe.key));
    let Bt = pf(kr);
    if (Bt) return await Er(c, Bt, { replace: B }), { shortCircuited: !0 };
    let { loaderData: Lo, errors: _l } = cf(c, k, ye, El, A, ve, To, kt);
    kt.forEach((oe, Xe) => {
      oe.subscribe((zn) => {
        (zn || oe.done) && kt.delete(Xe);
      });
    });
    let kl = Ea(),
      xl = _a(Ne),
      Do = kl || xl || ve.length > 0;
    return X({ loaderData: Lo, errors: _l }, Do ? { fetchers: new Map(c.fetchers) } : {});
  }
  function ga(S) {
    return c.fetchers.get(S) || A0;
  }
  function Rh(S, E, k, D) {
    if (F0)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    I.has(S) && Dn(S);
    let M = o || r,
      j = ds(c.location, c.matches, i, l.v7_prependBasename, k, E, D == null ? void 0 : D.relative),
      B = Jn(M, j, i);
    if (!B) {
      gl(S, E, st(404, { pathname: j }));
      return;
    }
    let { path: F, submission: A } = lf(l.v7_normalizeFormMethod, !0, j, D),
      Y = ps(B, F);
    if (((h = (D && D.preventScrollReset) === !0), A && Pt(A.formMethod))) {
      Ph(S, E, F, Y, B, A);
      return;
    }
    _t.set(S, { routeId: E, path: F }), Nh(S, E, F, Y, B, A);
  }
  async function Ph(S, E, k, D, M, j) {
    if ((vl(), _t.delete(S), !D.route.action && !D.route.lazy)) {
      let Ue = st(405, { method: j.formMethod, pathname: k, routeId: E });
      gl(S, E, Ue);
      return;
    }
    let B = c.fetchers.get(S),
      F = X({ state: 'submitting' }, j, { data: B && B.data, ' _hasFetcherDoneAnything ': !0 });
    c.fetchers.set(S, F), W({ fetchers: new Map(c.fetchers) });
    let A = new AbortController(),
      Y = Mr(e.history, k, A.signal, j);
    I.set(S, A);
    let Z = await zr('action', Y, D, M, n, t, i);
    if (Y.signal.aborted) {
      I.get(S) === A && I.delete(S);
      return;
    }
    if (nr(Z)) {
      I.delete(S), it.add(S);
      let Ue = X({ state: 'loading' }, j, { data: void 0, ' _hasFetcherDoneAnything ': !0 });
      return (
        c.fetchers.set(S, Ue),
        W({ fetchers: new Map(c.fetchers) }),
        Er(c, Z, { submission: j, isFetchActionRedirect: !0 })
      );
    }
    if (Jr(Z)) {
      gl(S, E, Z.error);
      return;
    }
    if (gn(Z)) throw st(400, { type: 'defer-action' });
    let ke = c.navigation.location || c.location,
      ye = Mr(e.history, ke, A.signal),
      ve = o || r,
      Ye = c.navigation.state !== 'idle' ? Jn(ve, c.navigation.location, i) : c.matches;
    Q(Ye, "Didn't find any matches after fetcher action");
    let kr = ++H;
    ot.set(S, kr);
    let El = X({ state: 'loading', data: Z.data }, j, { ' _hasFetcherDoneAnything ': !0 });
    c.fetchers.set(S, El);
    let [To, Bt] = uf(e.history, c, Ye, j, ke, N, O, z, _t, ve, i, { [D.route.id]: Z.data }, void 0);
    Bt.filter((Ue) => Ue.key !== S).forEach((Ue) => {
      let Rl = Ue.key,
        Ca = c.fetchers.get(Rl),
        zh = {
          state: 'loading',
          data: Ca && Ca.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          ' _hasFetcherDoneAnything ': !0,
        };
      c.fetchers.set(Rl, zh), Ue.controller && I.set(Rl, Ue.controller);
    }),
      W({ fetchers: new Map(c.fetchers) });
    let Lo = () => Bt.forEach((Ue) => Dn(Ue.key));
    A.signal.addEventListener('abort', Lo);
    let { results: _l, loaderResults: kl, fetcherResults: xl } = await wa(c.matches, Ye, To, Bt, ye);
    if (A.signal.aborted) return;
    A.signal.removeEventListener('abort', Lo), ot.delete(S), I.delete(S), Bt.forEach((Ue) => I.delete(Ue.key));
    let Do = pf(_l);
    if (Do) return Er(c, Do);
    let { loaderData: oe, errors: Xe } = cf(c, c.matches, To, kl, void 0, Bt, xl, kt),
      zn = {
        state: 'idle',
        data: Z.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        ' _hasFetcherDoneAnything ': !0,
      };
    c.fetchers.set(S, zn);
    let Cl = _a(kr);
    c.navigation.state === 'loading' && kr > Ne
      ? (Q(d, 'Expected pending action'),
        g && g.abort(),
        ne(c.navigation.location, { matches: Ye, loaderData: oe, errors: Xe, fetchers: new Map(c.fetchers) }))
      : (W(X({ errors: Xe, loaderData: ff(c.loaderData, oe, Ye, Xe) }, Cl ? { fetchers: new Map(c.fetchers) } : {})),
        (N = !1));
  }
  async function Nh(S, E, k, D, M, j) {
    let B = c.fetchers.get(S),
      F = X({ state: 'loading', formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0 }, j, {
        data: B && B.data,
        ' _hasFetcherDoneAnything ': !0,
      });
    c.fetchers.set(S, F), W({ fetchers: new Map(c.fetchers) });
    let A = new AbortController(),
      Y = Mr(e.history, k, A.signal);
    I.set(S, A);
    let Z = await zr('loader', Y, D, M, n, t, i);
    if ((gn(Z) && (Z = (await wh(Z, Y.signal, !0)) || Z), I.get(S) === A && I.delete(S), Y.signal.aborted)) return;
    if (nr(Z)) {
      it.add(S), await Er(c, Z);
      return;
    }
    if (Jr(Z)) {
      let ye = Yn(c.matches, E);
      c.fetchers.delete(S), W({ fetchers: new Map(c.fetchers), errors: { [ye.route.id]: Z.error } });
      return;
    }
    Q(!gn(Z), 'Unhandled fetcher deferred data');
    let ke = {
      state: 'idle',
      data: Z.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      ' _hasFetcherDoneAnything ': !0,
    };
    c.fetchers.set(S, ke), W({ fetchers: new Map(c.fetchers) });
  }
  async function Er(S, E, k) {
    var D;
    let { submission: M, replace: j, isFetchActionRedirect: B } = k === void 0 ? {} : k;
    E.revalidate && (N = !0);
    let F = vo(S.location, E.location, X({ _isRedirect: !0 }, B ? { _isFetchActionRedirect: !0 } : {}));
    if (
      (Q(F, 'Expected a location on the redirect navigation'),
      hh.test(E.location) && mh && typeof ((D = window) == null ? void 0 : D.location) < 'u')
    ) {
      let ve = e.history.createURL(E.location),
        Ye = gr(ve.pathname, i) == null;
      if (window.location.origin !== ve.origin || Ye) {
        j ? window.location.replace(E.location) : window.location.assign(E.location);
        return;
      }
    }
    g = null;
    let A = j === !0 ? ce.Replace : ce.Push,
      { formMethod: Y, formAction: Z, formEncType: ke, formData: ye } = S.navigation;
    !M && Y && Z && ye && ke && (M = { formMethod: Y, formAction: Z, formEncType: ke, formData: ye }),
      M0.has(E.status) && M && Pt(M.formMethod)
        ? await Je(A, F, { submission: X({}, M, { formAction: E.location }), preventScrollReset: h })
        : B
        ? await Je(A, F, {
            overrideNavigation: {
              state: 'loading',
              location: F,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
            },
            fetcherSubmission: M,
            preventScrollReset: h,
          })
        : await Je(A, F, {
            overrideNavigation: {
              state: 'loading',
              location: F,
              formMethod: M ? M.formMethod : void 0,
              formAction: M ? M.formAction : void 0,
              formEncType: M ? M.formEncType : void 0,
              formData: M ? M.formData : void 0,
            },
            preventScrollReset: h,
          });
  }
  async function wa(S, E, k, D, M) {
    let j = await Promise.all([
        ...k.map((A) => zr('loader', M, A, E, n, t, i)),
        ...D.map((A) =>
          A.matches && A.match && A.controller
            ? zr('loader', Mr(e.history, A.path, A.controller.signal), A.match, A.matches, n, t, i)
            : { type: de.error, error: st(404, { pathname: A.path }) },
        ),
      ]),
      B = j.slice(0, k.length),
      F = j.slice(k.length);
    return (
      await Promise.all([
        hf(
          S,
          k,
          B,
          B.map(() => M.signal),
          !1,
          c.loaderData,
        ),
        hf(
          S,
          D.map((A) => A.match),
          F,
          D.map((A) => (A.controller ? A.controller.signal : null)),
          !0,
        ),
      ]),
      { results: j, loaderResults: B, fetcherResults: F }
    );
  }
  function vl() {
    (N = !0),
      O.push(...Sl()),
      _t.forEach((S, E) => {
        I.has(E) && (z.push(E), Dn(E));
      });
  }
  function gl(S, E, k) {
    let D = Yn(c.matches, E);
    wl(S), W({ errors: { [D.route.id]: k }, fetchers: new Map(c.fetchers) });
  }
  function wl(S) {
    I.has(S) && Dn(S), _t.delete(S), ot.delete(S), it.delete(S), c.fetchers.delete(S);
  }
  function Dn(S) {
    let E = I.get(S);
    Q(E, 'Expected fetch controller: ' + S), E.abort(), I.delete(S);
  }
  function Sa(S) {
    for (let E of S) {
      let D = {
        state: 'idle',
        data: ga(E).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        ' _hasFetcherDoneAnything ': !0,
      };
      c.fetchers.set(E, D);
    }
  }
  function Ea() {
    let S = [],
      E = !1;
    for (let k of it) {
      let D = c.fetchers.get(k);
      Q(D, 'Expected fetcher: ' + k), D.state === 'loading' && (it.delete(k), S.push(k), (E = !0));
    }
    return Sa(S), E;
  }
  function _a(S) {
    let E = [];
    for (let [k, D] of ot)
      if (D < S) {
        let M = c.fetchers.get(k);
        Q(M, 'Expected fetcher: ' + k), M.state === 'loading' && (Dn(k), ot.delete(k), E.push(k));
      }
    return Sa(E), E.length > 0;
  }
  function Oh(S, E) {
    let k = c.blockers.get(S) || of;
    return qe.get(S) !== E && qe.set(S, E), k;
  }
  function _r(S) {
    c.blockers.delete(S), qe.delete(S);
  }
  function Oo(S, E) {
    let k = c.blockers.get(S) || of;
    Q(
      (k.state === 'unblocked' && E.state === 'blocked') ||
        (k.state === 'blocked' && E.state === 'blocked') ||
        (k.state === 'blocked' && E.state === 'proceeding') ||
        (k.state === 'blocked' && E.state === 'unblocked') ||
        (k.state === 'proceeding' && E.state === 'unblocked'),
      'Invalid blocker state transition: ' + k.state + ' -> ' + E.state,
    ),
      c.blockers.set(S, E),
      W({ blockers: new Map(c.blockers) });
  }
  function ka(S) {
    let { currentLocation: E, nextLocation: k, historyAction: D } = S;
    if (qe.size === 0) return;
    qe.size > 1 && pr(!1, 'A router only supports one blocker at a time');
    let M = Array.from(qe.entries()),
      [j, B] = M[M.length - 1],
      F = c.blockers.get(j);
    if (!(F && F.state === 'proceeding') && B({ currentLocation: E, nextLocation: k, historyAction: D })) return j;
  }
  function Sl(S) {
    let E = [];
    return (
      kt.forEach((k, D) => {
        (!S || S(D)) && (k.cancel(), E.push(D), kt.delete(D));
      }),
      E
    );
  }
  function Th(S, E, k) {
    if (((a = S), (p = E), (f = k || ((D) => D.key)), !m && c.navigation === lu)) {
      m = !0;
      let D = xa(c.location, c.matches);
      D != null && W({ restoreScrollPosition: D });
    }
    return () => {
      (a = null), (p = null), (f = null);
    };
  }
  function Lh(S, E) {
    if (a && f && p) {
      let k = E.map((M) => mf(M, c.loaderData)),
        D = f(S, k) || S.key;
      a[D] = p();
    }
  }
  function xa(S, E) {
    if (a && f && p) {
      let k = E.map((j) => mf(j, c.loaderData)),
        D = f(S, k) || S.key,
        M = a[D];
      if (typeof M == 'number') return M;
    }
    return null;
  }
  function Dh(S) {
    (n = {}), (o = fs(S, t, void 0, n));
  }
  return (
    (R = {
      get basename() {
        return i;
      },
      get state() {
        return c;
      },
      get routes() {
        return r;
      },
      initialize: T,
      subscribe: $,
      enableScrollRestoration: Th,
      navigate: fn,
      fetch: Rh,
      revalidate: xt,
      createHref: (S) => e.history.createHref(S),
      encodeLocation: (S) => e.history.encodeLocation(S),
      getFetcher: ga,
      deleteFetcher: wl,
      dispose: U,
      getBlocker: Oh,
      deleteBlocker: _r,
      _internalFetchControllers: I,
      _internalActiveDeferreds: kt,
      _internalSetRoutes: Dh,
    }),
    R
  );
}
function I0(e) {
  return e != null && 'formData' in e;
}
function ds(e, t, n, r, o, i, l) {
  let u, s;
  if (i != null && l !== 'path') {
    u = [];
    for (let f of t)
      if ((u.push(f), f.route.id === i)) {
        s = f;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let a = hl(
    o || '.',
    Po(u).map((f) => f.pathnameBase),
    gr(e.pathname, n) || e.pathname,
    l === 'path',
  );
  return (
    o == null && ((a.search = e.search), (a.hash = e.hash)),
    (o == null || o === '' || o === '.') &&
      s &&
      s.route.index &&
      !va(a.search) &&
      (a.search = a.search ? a.search.replace(/^\?/, '?index&') : '?index'),
    r && n !== '/' && (a.pathname = a.pathname === '/' ? n : zt([n, a.pathname])),
    Nn(a)
  );
}
function lf(e, t, n, r) {
  if (!r || !I0(r)) return { path: n };
  if (r.formMethod && !K0(r.formMethod)) return { path: n, error: st(405, { method: r.formMethod }) };
  let o;
  if (r.formData) {
    let u = r.formMethod || 'get';
    if (
      ((o = {
        formMethod: e ? u.toUpperCase() : u.toLowerCase(),
        formAction: gh(n),
        formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
        formData: r.formData,
      }),
      Pt(o.formMethod))
    )
      return { path: n, submission: o };
  }
  let i = It(n),
    l = vh(r.formData);
  return t && i.search && va(i.search) && l.append('index', ''), (i.search = '?' + l), { path: Nn(i), submission: o };
}
function B0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function uf(e, t, n, r, o, i, l, u, s, a, f, p, m) {
  let w = m ? Object.values(m)[0] : p ? Object.values(p)[0] : void 0,
    y = e.createURL(t.location),
    v = e.createURL(o),
    R = m ? Object.keys(m)[0] : void 0,
    d = B0(n, R).filter((g, C) => {
      if (g.route.lazy) return !0;
      if (g.route.loader == null) return !1;
      if ($0(t.loaderData, t.matches[C], g) || l.some((z) => z === g.route.id)) return !0;
      let N = t.matches[C],
        O = g;
      return sf(
        g,
        X({ currentUrl: y, currentParams: N.params, nextUrl: v, nextParams: O.params }, r, {
          actionResult: w,
          defaultShouldRevalidate:
            i || y.pathname + y.search === v.pathname + v.search || y.search !== v.search || yh(N, O),
        }),
      );
    }),
    h = [];
  return (
    s.forEach((g, C) => {
      if (!n.some((I) => I.route.id === g.routeId)) return;
      let N = Jn(a, g.path, f);
      if (!N) {
        h.push({ key: C, routeId: g.routeId, path: g.path, matches: null, match: null, controller: null });
        return;
      }
      let O = ps(N, g.path);
      if (u.includes(C)) {
        h.push({ key: C, routeId: g.routeId, path: g.path, matches: N, match: O, controller: new AbortController() });
        return;
      }
      sf(
        O,
        X(
          {
            currentUrl: y,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: v,
            nextParams: n[n.length - 1].params,
          },
          r,
          { actionResult: w, defaultShouldRevalidate: i },
        ),
      ) &&
        h.push({ key: C, routeId: g.routeId, path: g.path, matches: N, match: O, controller: new AbortController() });
    }),
    [d, h]
  );
}
function $0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function yh(e, t) {
  let n = e.route.path;
  return e.pathname !== t.pathname || (n != null && n.endsWith('*') && e.params['*'] !== t.params['*']);
}
function sf(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function af(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  Q(o, 'No route found in manifest');
  let i = {};
  for (let l in r) {
    let s = o[l] !== void 0 && l !== 'hasErrorBoundary';
    pr(
      !s,
      'Route "' +
        o.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.'),
    ),
      !s && !a0.has(l) && (i[l] = r[l]);
  }
  Object.assign(o, i), Object.assign(o, X({}, t(o), { lazy: void 0 }));
}
async function zr(e, t, n, r, o, i, l, u, s, a) {
  u === void 0 && (u = !1), s === void 0 && (s = !1);
  let f,
    p,
    m,
    w = (R) => {
      let c,
        d = new Promise((h, g) => (c = g));
      return (
        (m = () => c()),
        t.signal.addEventListener('abort', m),
        Promise.race([R({ request: t, params: n.params, context: a }), d])
      );
    };
  try {
    let R = n.route[e];
    if (n.route.lazy)
      if (R) p = (await Promise.all([w(R), af(n.route, i, o)]))[0];
      else if ((await af(n.route, i, o), (R = n.route[e]), R)) p = await w(R);
      else if (e === 'action') {
        let c = new URL(t.url),
          d = c.pathname + c.search;
        throw st(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: de.data, data: void 0 };
    else if (R) p = await w(R);
    else {
      let c = new URL(t.url),
        d = c.pathname + c.search;
      throw st(404, { pathname: d });
    }
    Q(
      p !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' + n.route.id + '" but didn\'t return anything from your `' + e + '` ') +
        'function. Please return a value or `null`.',
    );
  } catch (R) {
    (f = de.error), (p = R);
  } finally {
    m && t.signal.removeEventListener('abort', m);
  }
  if (Q0(p)) {
    let R = p.status;
    if (z0.has(R)) {
      let h = p.headers.get('Location');
      if ((Q(h, 'Redirects returned/thrown from loaders/actions must have a Location header'), !hh.test(h)))
        h = ds(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, h);
      else if (!u) {
        let g = new URL(t.url),
          C = h.startsWith('//') ? new URL(g.protocol + h) : new URL(h),
          N = gr(C.pathname, l) != null;
        C.origin === g.origin && N && (h = C.pathname + C.search + C.hash);
      }
      if (u) throw (p.headers.set('Location', h), p);
      return { type: de.redirect, status: R, location: h, revalidate: p.headers.get('X-Remix-Revalidate') !== null };
    }
    if (s) throw { type: f || de.data, response: p };
    let c,
      d = p.headers.get('Content-Type');
    return (
      d && /\bapplication\/json\b/.test(d) ? (c = await p.json()) : (c = await p.text()),
      f === de.error
        ? { type: f, error: new ya(R, p.statusText, c), headers: p.headers }
        : { type: de.data, data: c, statusCode: p.status, headers: p.headers }
    );
  }
  if (f === de.error) return { type: f, error: p };
  if (V0(p)) {
    var y, v;
    return {
      type: de.deferred,
      deferredData: p,
      statusCode: (y = p.init) == null ? void 0 : y.status,
      headers: ((v = p.init) == null ? void 0 : v.headers) && new Headers(p.init.headers),
    };
  }
  return { type: de.data, data: p };
}
function Mr(e, t, n, r) {
  let o = e.createURL(gh(t)).toString(),
    i = { signal: n };
  if (r && Pt(r.formMethod)) {
    let { formMethod: l, formEncType: u, formData: s } = r;
    (i.method = l.toUpperCase()), (i.body = u === 'application/x-www-form-urlencoded' ? vh(s) : s);
  }
  return new Request(o, i);
}
function vh(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, r instanceof File ? r.name : r);
  return t;
}
function H0(e, t, n, r, o) {
  let i = {},
    l = null,
    u,
    s = !1,
    a = {};
  return (
    n.forEach((f, p) => {
      let m = t[p].route.id;
      if ((Q(!nr(f), 'Cannot handle redirect results in processLoaderData'), Jr(f))) {
        let w = Yn(e, m),
          y = f.error;
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (l = l || {}),
          l[w.route.id] == null && (l[w.route.id] = y),
          (i[m] = void 0),
          s || ((s = !0), (u = dh(f.error) ? f.error.status : 500)),
          f.headers && (a[m] = f.headers);
      } else
        gn(f) ? (o.set(m, f.deferredData), (i[m] = f.deferredData.data)) : (i[m] = f.data),
          f.statusCode != null && f.statusCode !== 200 && !s && (u = f.statusCode),
          f.headers && (a[m] = f.headers);
    }),
    r && ((l = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: l, statusCode: u || 200, loaderHeaders: a }
  );
}
function cf(e, t, n, r, o, i, l, u) {
  let { loaderData: s, errors: a } = H0(t, n, r, o, u);
  for (let f = 0; f < i.length; f++) {
    let { key: p, match: m, controller: w } = i[f];
    Q(l !== void 0 && l[f] !== void 0, 'Did not find corresponding fetcher result');
    let y = l[f];
    if (!(w && w.signal.aborted))
      if (Jr(y)) {
        let v = Yn(e.matches, m == null ? void 0 : m.route.id);
        (a && a[v.route.id]) || (a = X({}, a, { [v.route.id]: y.error })), e.fetchers.delete(p);
      } else if (nr(y)) Q(!1, 'Unhandled fetcher revalidation redirect');
      else if (gn(y)) Q(!1, 'Unhandled fetcher deferred data');
      else {
        let v = {
          state: 'idle',
          data: y.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          ' _hasFetcherDoneAnything ': !0,
        };
        e.fetchers.set(p, v);
      }
  }
  return { loaderData: s, errors: a };
}
function ff(e, t, n, r) {
  let o = X({}, t);
  for (let i of n) {
    let l = i.route.id;
    if (
      (t.hasOwnProperty(l) ? t[l] !== void 0 && (o[l] = t[l]) : e[l] !== void 0 && i.route.loader && (o[l] = e[l]),
      r && r.hasOwnProperty(l))
    )
      break;
  }
  return o;
}
function Yn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function df(e) {
  let t = e.find((n) => n.index || !n.path || n.path === '/') || { id: '__shim-error-route__' };
  return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }], route: t };
}
function st(e, t) {
  let { pathname: n, routeId: r, method: o, type: i } = t === void 0 ? {} : t,
    l = 'Unknown Server Error',
    u = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((l = 'Bad Request'),
        o && n && r
          ? (u =
              'You made a ' +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : i === 'defer-action' && (u = 'defer() is not supported in actions'))
      : e === 403
      ? ((l = 'Forbidden'), (u = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((l = 'Not Found'), (u = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((l = 'Method Not Allowed'),
        o && n && r
          ? (u =
              'You made a ' +
              o.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : o && (u = 'Invalid request method "' + o.toUpperCase() + '"')),
    new ya(e || 500, l, new Error(u), !0)
  );
}
function pf(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (nr(n)) return n;
  }
}
function gh(e) {
  let t = typeof e == 'string' ? It(e) : e;
  return Nn(X({}, t, { hash: '' }));
}
function W0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== '';
}
function gn(e) {
  return e.type === de.deferred;
}
function Jr(e) {
  return e.type === de.error;
}
function nr(e) {
  return (e && e.type) === de.redirect;
}
function V0(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function Q0(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function K0(e) {
  return D0.has(e.toLowerCase());
}
function Pt(e) {
  return T0.has(e.toLowerCase());
}
async function hf(e, t, n, r, o, i) {
  for (let l = 0; l < n.length; l++) {
    let u = n[l],
      s = t[l];
    if (!s) continue;
    let a = e.find((p) => p.route.id === s.route.id),
      f = a != null && !yh(a, s) && (i && i[s.route.id]) !== void 0;
    if (gn(u) && (o || f)) {
      let p = r[l];
      Q(p, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await wh(u, p, o).then((m) => {
          m && (n[l] = m || n[l]);
        });
    }
  }
}
async function wh(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: de.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: de.error, error: o };
      }
    return { type: de.data, data: e.deferredData.data };
  }
}
function va(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function mf(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function ps(e, t) {
  let n = typeof t == 'string' ? It(t).search : t.search;
  if (e[e.length - 1].route.index && va(n || '')) return e[e.length - 1];
  let r = Po(e);
  return r[r.length - 1];
}
/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bi() {
  return (
    (Bi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bi.apply(this, arguments)
  );
}
const ml = P.createContext(null),
  Sh = P.createContext(null),
  wr = P.createContext(null),
  yl = P.createContext(null),
  an = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Eh = P.createContext(null);
function q0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Sr() || Q(!1);
  let { basename: r, navigator: o } = P.useContext(wr),
    { hash: i, pathname: l, search: u } = xh(e, { relative: n }),
    s = l;
  return r !== '/' && (s = l === '/' ? r : zt([r, l])), o.createHref({ pathname: s, search: u, hash: i });
}
function Sr() {
  return P.useContext(yl) != null;
}
function No() {
  return Sr() || Q(!1), P.useContext(yl).location;
}
function _h(e) {
  P.useContext(wr).static || P.useLayoutEffect(e);
}
function kh() {
  let { isDataRoute: e } = P.useContext(an);
  return e ? i1() : J0();
}
function J0() {
  Sr() || Q(!1);
  let e = P.useContext(ml),
    { basename: t, navigator: n } = P.useContext(wr),
    { matches: r } = P.useContext(an),
    { pathname: o } = No(),
    i = JSON.stringify(Po(r).map((s) => s.pathnameBase)),
    l = P.useRef(!1);
  return (
    _h(() => {
      l.current = !0;
    }),
    P.useCallback(
      function (s, a) {
        if ((a === void 0 && (a = {}), !l.current)) return;
        if (typeof s == 'number') {
          n.go(s);
          return;
        }
        let f = hl(s, JSON.parse(i), o, a.relative === 'path');
        e == null && t !== '/' && (f.pathname = f.pathname === '/' ? t : zt([t, f.pathname])),
          (a.replace ? n.replace : n.push)(f, a.state, a);
      },
      [t, n, i, o, e],
    )
  );
}
function xh(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = P.useContext(an),
    { pathname: o } = No(),
    i = JSON.stringify(Po(r).map((l) => l.pathnameBase));
  return P.useMemo(() => hl(e, JSON.parse(i), o, n === 'path'), [e, i, o, n]);
}
function Y0(e, t, n) {
  Sr() || Q(!1);
  let { navigator: r } = P.useContext(wr),
    { matches: o } = P.useContext(an),
    i = o[o.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : '/';
  i && i.route;
  let s = No(),
    a;
  if (t) {
    var f;
    let v = typeof t == 'string' ? It(t) : t;
    u === '/' || ((f = v.pathname) != null && f.startsWith(u)) || Q(!1), (a = v);
  } else a = s;
  let p = a.pathname || '/',
    m = u === '/' ? p : p.slice(u.length) || '/',
    w = Jn(e, { pathname: m }),
    y = e1(
      w &&
        w.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, l, v.params),
            pathname: zt([u, r.encodeLocation ? r.encodeLocation(v.pathname).pathname : v.pathname]),
            pathnameBase:
              v.pathnameBase === '/'
                ? u
                : zt([u, r.encodeLocation ? r.encodeLocation(v.pathnameBase).pathname : v.pathnameBase]),
          }),
        ),
      o,
      n,
    );
  return t && y
    ? P.createElement(
        yl.Provider,
        {
          value: {
            location: Bi({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, a),
            navigationType: ce.Pop,
          },
        },
        y,
      )
    : y;
}
function X0() {
  let e = o1(),
    t = dh(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    i = null;
  return P.createElement(
    P.Fragment,
    null,
    P.createElement('h2', null, 'Unexpected Application Error!'),
    P.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? P.createElement('pre', { style: o }, n) : null,
    i,
  );
}
const G0 = P.createElement(X0, null);
class Z0 extends P.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : { error: t.error || n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n);
  }
  render() {
    return this.state.error
      ? P.createElement(
          an.Provider,
          { value: this.props.routeContext },
          P.createElement(Eh.Provider, { value: this.state.error, children: this.props.component }),
        )
      : this.props.children;
  }
}
function b0(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = P.useContext(ml);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(an.Provider, { value: t }, r)
  );
}
function e1(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    l = (r = n) == null ? void 0 : r.errors;
  if (l != null) {
    let u = i.findIndex((s) => s.route.id && (l == null ? void 0 : l[s.route.id]));
    u >= 0 || Q(!1), (i = i.slice(0, Math.min(i.length, u + 1)));
  }
  return i.reduceRight((u, s, a) => {
    let f = s.route.id ? (l == null ? void 0 : l[s.route.id]) : null,
      p = null;
    n && (p = s.route.errorElement || G0);
    let m = t.concat(i.slice(0, a + 1)),
      w = () => {
        let y;
        return (
          f
            ? (y = p)
            : s.route.Component
            ? (y = P.createElement(s.route.Component, null))
            : s.route.element
            ? (y = s.route.element)
            : (y = u),
          P.createElement(b0, {
            match: s,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || a === 0)
      ? P.createElement(Z0, {
          location: n.location,
          revalidation: n.revalidation,
          component: p,
          error: f,
          children: w(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : w();
  }, null);
}
var hs;
(function (e) {
  (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate');
})(hs || (hs = {}));
var go;
(function (e) {
  (e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate'),
    (e.UseRouteId = 'useRouteId');
})(go || (go = {}));
function t1(e) {
  let t = P.useContext(ml);
  return t || Q(!1), t;
}
function n1(e) {
  let t = P.useContext(Sh);
  return t || Q(!1), t;
}
function r1(e) {
  let t = P.useContext(an);
  return t || Q(!1), t;
}
function Ch(e) {
  let t = r1(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Q(!1), n.route.id;
}
function o1() {
  var e;
  let t = P.useContext(Eh),
    n = n1(go.UseRouteError),
    r = Ch(go.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function i1() {
  let { router: e } = t1(hs.UseNavigateStable),
    t = Ch(go.UseNavigateStable),
    n = P.useRef(!1);
  return (
    _h(() => {
      n.current = !0;
    }),
    P.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current && (typeof o == 'number' ? e.navigate(o) : e.navigate(o, Bi({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
function l1(e) {
  let { fallbackElement: t, router: n } = e,
    [r, o] = P.useState(n.state);
  P.useLayoutEffect(() => n.subscribe(o), [n, o]);
  let i = P.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (s) => n.navigate(s),
        push: (s, a, f) => n.navigate(s, { state: a, preventScrollReset: f == null ? void 0 : f.preventScrollReset }),
        replace: (s, a, f) =>
          n.navigate(s, { replace: !0, state: a, preventScrollReset: f == null ? void 0 : f.preventScrollReset }),
      }),
      [n],
    ),
    l = n.basename || '/',
    u = P.useMemo(() => ({ router: n, navigator: i, static: !1, basename: l }), [n, i, l]);
  return P.createElement(
    P.Fragment,
    null,
    P.createElement(
      ml.Provider,
      { value: u },
      P.createElement(
        Sh.Provider,
        { value: r },
        P.createElement(
          a1,
          { basename: n.basename, location: n.state.location, navigationType: n.state.historyAction, navigator: i },
          n.state.initialized ? P.createElement(u1, { routes: n.routes, state: r }) : t,
        ),
      ),
    ),
    null,
  );
}
function u1(e) {
  let { routes: t, state: n } = e;
  return Y0(t, void 0, n);
}
function s1(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  Sr() || Q(!1);
  let { matches: i } = P.useContext(an),
    { pathname: l } = No(),
    u = kh(),
    s = hl(
      t,
      Po(i).map((f) => f.pathnameBase),
      l,
      o === 'path',
    ),
    a = JSON.stringify(s);
  return P.useEffect(() => u(JSON.parse(a), { replace: n, state: r, relative: o }), [u, a, o, n, r]), null;
}
function a1(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = ce.Pop,
    navigator: i,
    static: l = !1,
  } = e;
  Sr() && Q(!1);
  let u = t.replace(/^\/*/, '/'),
    s = P.useMemo(() => ({ basename: u, navigator: i, static: l }), [u, i, l]);
  typeof r == 'string' && (r = It(r));
  let { pathname: a = '/', search: f = '', hash: p = '', state: m = null, key: w = 'default' } = r,
    y = P.useMemo(() => {
      let v = gr(a, u);
      return v == null ? null : { location: { pathname: v, search: f, hash: p, state: m, key: w }, navigationType: o };
    }, [u, a, f, p, m, w, o]);
  return y == null
    ? null
    : P.createElement(wr.Provider, { value: s }, P.createElement(yl.Provider, { children: n, value: y }));
}
var yf;
(function (e) {
  (e[(e.pending = 0)] = 'pending'), (e[(e.success = 1)] = 'success'), (e[(e.error = 2)] = 'error');
})(yf || (yf = {}));
new Promise(() => {});
function c1(e) {
  let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null };
  return (
    e.Component && Object.assign(t, { element: P.createElement(e.Component), Component: void 0 }),
    e.ErrorBoundary && Object.assign(t, { errorElement: P.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }),
    t
  );
}
/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wo() {
  return (
    (wo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    wo.apply(this, arguments)
  );
}
function f1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function d1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function p1(e, t) {
  return e.button === 0 && (!t || t === '_self') && !d1(e);
}
const h1 = ['onClick', 'relative', 'reloadDocument', 'replace', 'state', 'target', 'to', 'preventScrollReset'];
function m1(e, t) {
  return U0({
    basename: t == null ? void 0 : t.basename,
    future: wo({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: l0({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || y1(),
    routes: e,
    mapRouteProperties: c1,
  }).initialize();
}
function y1() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = wo({}, t, { errors: v1(t.errors) })), t;
}
function v1(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === 'RouteErrorResponse') n[r] = new ya(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === 'Error') {
      let i = new Error(o.message);
      (i.stack = ''), (n[r] = i);
    } else n[r] = o;
  return n;
}
const g1 = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  w1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  S1 = P.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: l,
        state: u,
        target: s,
        to: a,
        preventScrollReset: f,
      } = t,
      p = f1(t, h1),
      { basename: m } = P.useContext(wr),
      w,
      y = !1;
    if (typeof a == 'string' && w1.test(a) && ((w = a), g1))
      try {
        let d = new URL(window.location.href),
          h = a.startsWith('//') ? new URL(d.protocol + a) : new URL(a),
          g = gr(h.pathname, m);
        h.origin === d.origin && g != null ? (a = g + h.search + h.hash) : (y = !0);
      } catch {}
    let v = q0(a, { relative: o }),
      R = E1(a, { replace: l, state: u, target: s, preventScrollReset: f, relative: o });
    function c(d) {
      r && r(d), d.defaultPrevented || R(d);
    }
    return P.createElement('a', wo({}, p, { href: w || v, onClick: y || i ? r : c, ref: n, target: s }));
  });
var vf;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'), (e.UseSubmitImpl = 'useSubmitImpl'), (e.UseFetcher = 'useFetcher');
})(vf || (vf = {}));
var gf;
(function (e) {
  (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
})(gf || (gf = {}));
function E1(e, t) {
  let { target: n, replace: r, state: o, preventScrollReset: i, relative: l } = t === void 0 ? {} : t,
    u = kh(),
    s = No(),
    a = xh(e, { relative: l });
  return P.useCallback(
    (f) => {
      if (p1(f, n)) {
        f.preventDefault();
        let p = r !== void 0 ? r : Nn(s) === Nn(a);
        u(e, { replace: p, state: o, preventScrollReset: i, relative: l });
      }
    },
    [s, u, a, r, o, n, e, i, l],
  );
}
const _1 = '_marginLeft_p80pq_1',
  k1 = { marginLeft: _1 };
function x1() {
  const e = ul();
  return V.jsxs(V.Fragment, {
    children: [
      V.jsx('h1', { children: 'QUIZ MAKER' }),
      V.jsx(i0, {}),
      V.jsx(Wp, {}),
      $p(e) &&
        V.jsx(S1, { to: '/results', role: 'button', className: `buttonLink ${k1.marginLeft}`, children: 'Submit' }),
    ],
  });
}
const C1 = '_score_15qac_1',
  R1 = '_score__loser_15qac_12 _score_15qac_1',
  P1 = '_score__winner_15qac_17 _score_15qac_1',
  N1 = '_score__average_15qac_22 _score_15qac_1',
  uu = { score: C1, score__loser: R1, score__winner: P1, score__average: N1 };
function O1() {
  const e = ul(),
    t = e.filter((r) => {
      var o;
      return r.selectedOptionId === ((o = r.options.find((i) => i.isAnswer)) == null ? void 0 : o.id);
    }).length;
  let n;
  return (
    [4, 5].includes(t) ? (n = uu.score__winner) : [0, 1].includes(t) ? (n = uu.score__loser) : (n = uu.score__average),
    V.jsxs('div', { className: n, children: ['You scored ', t, ' out of ', e.length] })
  );
}
function T1() {
  return V.jsxs(V.Fragment, {
    children: [V.jsx('h1', { children: 'RESULTS' }), V.jsx(Wp, { showCorrection: !0 }), V.jsx(O1, {})],
  });
}
function L1({ children: e }) {
  const t = ul();
  return $p(t) ? e : V.jsx(s1, { replace: !0, to: '/' });
}
function D1() {
  const e = m1([
    { path: '/', element: V.jsx(x1, {}) },
    { path: '/results', element: V.jsx(L1, { children: V.jsx(T1, {}) }) },
  ]);
  return V.jsx(l1, { router: e });
}
hu.createRoot(document.getElementById('root')).render(
  V.jsx(Xh.StrictMode, { children: V.jsx(ym, { children: V.jsx(D1, {}) }) }),
);