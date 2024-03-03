function _typeof(e) {
  return (_typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
}
!(function (e, t) {
  'use strict';
  'object' === ('undefined' == typeof module ? 'undefined' : _typeof(module)) &&
  'object' === _typeof(module.exports)
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (e, t) {
  'use strict';
  var n = [],
    r = e.document,
    i = Object.getPrototypeOf,
    o = n.slice,
    a = n.concat,
    s = n.push,
    u = n.indexOf,
    l = {},
    c = l.toString,
    f = l.hasOwnProperty,
    p = f.toString,
    d = p.call(Object),
    h = {},
    g = function (e) {
      return 'function' == typeof e && 'number' != typeof e.nodeType;
    },
    v = function (e) {
      return null != e && e === e.window;
    },
    y = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function m(e, t, n) {
    var i,
      o,
      a = (n = n || r).createElement('script');
    if (((a.text = e), t))
      for (i in y)
        (o = t[i] || (t.getAttribute && t.getAttribute(i))) &&
          a.setAttribute(i, o);
    n.head.appendChild(a).parentNode.removeChild(a);
  }
  function x(e) {
    return null == e
      ? e + ''
      : 'object' === _typeof(e) || 'function' == typeof e
        ? l[c.call(e)] || 'object'
        : _typeof(e);
  }
  var b = function e(t, n) {
      return new e.fn.init(t, n);
    },
    w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function T(e) {
    var t = !!e && 'length' in e && e.length,
      n = x(e);
    return (
      !g(e) &&
      !v(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && t > 0 && t - 1 in e))
    );
  }
  (b.fn = b.prototype =
    {
      jquery: '3.4.0',
      constructor: b,
      length: 0,
      toArray: function () {
        return o.call(this);
      },
      get: function (e) {
        return null == e
          ? o.call(this)
          : e < 0
            ? this[e + this.length]
            : this[e];
      },
      pushStack: function (e) {
        var t = b.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return b.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          b.map(this, function (t, n) {
            return e.call(t, n, t);
          }),
        );
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (b.extend = b.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            'object' === _typeof(a) || g(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                '__proto__' !== t &&
                  a !== r &&
                  (l && r && (b.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || b.isPlainObject(n)
                            ? n
                            : {}),
                      (i = !1),
                      (a[t] = b.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    b.extend({
      expando: 'jQuery' + ('3.4.0' + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || '[object Object]' !== c.call(e)) &&
          (!(t = i(e)) ||
            ('function' ==
              typeof (n = f.call(t, 'constructor') && t.constructor) &&
              p.call(n) === d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t) {
        m(e, { nonce: t && t.nonce });
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (T(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? '' : (e + '').replace(w, '');
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (T(Object(e))
              ? b.merge(n, 'string' == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : u.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          s = [];
        if (T(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && s.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
        return a.apply([], s);
      },
      guid: 1,
      support: h,
    }),
    'function' == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]),
    b.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' ',
      ),
      function (e, t) {
        l['[object ' + t + ']'] = t.toLowerCase();
      },
    );
  var C = (function (e) {
    var t,
      n,
      r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      p,
      d,
      h,
      g,
      v,
      y,
      m,
      x,
      b = 'sizzle' + 1 * new Date(),
      w = e.document,
      T = 0,
      C = 0,
      E = ue(),
      S = ue(),
      k = ue(),
      A = ue(),
      N = function (e, t) {
        return e === t && (f = !0), 0;
      },
      D = {}.hasOwnProperty,
      j = [],
      q = j.pop,
      L = j.push,
      H = j.push,
      O = j.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      M = '[\\x20\\t\\r\\n\\f]',
      I = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
      _ =
        '\\[' +
        M +
        '*(' +
        I +
        ')(?:' +
        M +
        '*([*^$|!~]?=)' +
        M +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        I +
        '))|)' +
        M +
        '*\\]',
      W =
        ':(' +
        I +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        _ +
        ')*)|.*)\\)|)',
      $ = new RegExp(M + '+', 'g'),
      F = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
      B = new RegExp('^' + M + '*,' + M + '*'),
      z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
      U = new RegExp(M + '|>'),
      X = new RegExp(W),
      V = new RegExp('^' + I + '$'),
      G = {
        ID: new RegExp('^#(' + I + ')'),
        CLASS: new RegExp('^\\.(' + I + ')'),
        TAG: new RegExp('^(' + I + '|[*])'),
        ATTR: new RegExp('^' + _),
        PSEUDO: new RegExp('^' + W),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            M +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            M +
            '*(?:([+-]|)' +
            M +
            '*(\\d+)|))' +
            M +
            '*\\)|)',
          'i',
        ),
        bool: new RegExp('^(?:' + R + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            M +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            M +
            '*((?:-\\d)?\\d*)' +
            M +
            '*\\)|)(?=[^-]|$)',
          'i',
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig'),
      ne = function (e, t, n) {
        var r = '0x' + t - 65536;
        return r != r || n
          ? t
          : r < 0
            ? String.fromCharCode(r + 65536)
            : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? '\0' === e
            ? '�'
            : e.slice(0, -1) +
              '\\' +
              e.charCodeAt(e.length - 1).toString(16) +
              ' '
          : '\\' + e;
      },
      oe = function () {
        p();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
        },
        { dir: 'parentNode', next: 'legend' },
      );
    try {
      H.apply((j = O.call(w.childNodes)), w.childNodes),
        j[w.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: j.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    function se(e, t, r, i) {
      var o,
        s,
        l,
        c,
        f,
        h,
        y,
        m = t && t.ownerDocument,
        T = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        'string' != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
      )
        return r;
      if (
        !i &&
        ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)
      ) {
        if (11 !== T && (f = Z.exec(e)))
          if ((o = f[1])) {
            if (9 === T) {
              if (!(l = t.getElementById(o))) return r;
              if (l.id === o) return r.push(l), r;
            } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
              return r.push(l), r;
          } else {
            if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
            if (
              (o = f[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return H.apply(r, t.getElementsByClassName(o)), r;
          }
        if (
          n.qsa &&
          !A[e + ' '] &&
          (!v || !v.test(e)) &&
          (1 !== T || 'object' !== t.nodeName.toLowerCase())
        ) {
          if (((y = e), (m = t), 1 === T && U.test(e))) {
            for (
              (c = t.getAttribute('id'))
                ? (c = c.replace(re, ie))
                : t.setAttribute('id', (c = b)),
                s = (h = a(e)).length;
              s--;

            )
              h[s] = '#' + c + ' ' + xe(h[s]);
            (y = h.join(',')), (m = (ee.test(e) && ye(t.parentNode)) || t);
          }
          try {
            return H.apply(r, m.querySelectorAll(y)), r;
          } catch (t) {
            A(e, !0);
          } finally {
            c === b && t.removeAttribute('id');
          }
        }
      }
      return u(e.replace(F, '$1'), t, r, i);
    }
    function ue() {
      var e = [];
      return function t(n, i) {
        return (
          e.push(n + ' ') > r.cacheLength && delete t[e.shift()],
          (t[n + ' '] = i)
        );
      };
    }
    function le(e) {
      return (e[b] = !0), e;
    }
    function ce(e) {
      var t = d.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      for (var n = e.split('|'), i = n.length; i--; ) r.attrHandle[n[i]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(e) {
      return function (t) {
        return 'input' === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function he(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e;
      };
    }
    function ge(e) {
      return function (t) {
        return 'form' in t
          ? t.parentNode && !1 === t.disabled
            ? 'label' in t
              ? 'label' in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
            : t.disabled === e
          : 'label' in t && t.disabled === e;
      };
    }
    function ve(e) {
      return le(function (t) {
        return (
          (t = +t),
          le(function (n, r) {
            for (var i, o = e([], n.length, t), a = o.length; a--; )
              n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function ye(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = se.support = {}),
    (o = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || 'HTML');
      }),
    (p = se.setDocument =
      function (e) {
        var t,
          i,
          a = e ? e.ownerDocument || e : w;
        return a !== d && 9 === a.nodeType && a.documentElement
          ? ((h = (d = a).documentElement),
            (g = !o(d)),
            w !== d &&
              (i = d.defaultView) &&
              i.top !== i &&
              (i.addEventListener
                ? i.addEventListener('unload', oe, !1)
                : i.attachEvent && i.attachEvent('onunload', oe)),
            (n.attributes = ce(function (e) {
              return (e.className = 'i'), !e.getAttribute('className');
            })),
            (n.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(d.createComment('')),
                !e.getElementsByTagName('*').length
              );
            })),
            (n.getElementsByClassName = K.test(d.getElementsByClassName)),
            (n.getById = ce(function (e) {
              return (
                (h.appendChild(e).id = b),
                !d.getElementsByName || !d.getElementsByName(b).length
              );
            })),
            n.getById
              ? ((r.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute('id') === t;
                  };
                }),
                (r.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((r.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                    return n && n.value === t;
                  };
                }),
                (r.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode('id')) && n.value === e)
                        return [o];
                      for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                        if ((n = o.getAttributeNode('id')) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (r.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ('*' === e) {
                    for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (r.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                  return t.getElementsByClassName(e);
              }),
            (y = []),
            (v = []),
            (n.qsa = K.test(d.querySelectorAll)) &&
              (ce(function (e) {
                (h.appendChild(e).innerHTML =
                  "<a id='" +
                  b +
                  "'></a><select id='" +
                  b +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push('[*^$]=' + M + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length ||
                    v.push('\\[' + M + '*(?:value|' + R + ')'),
                  e.querySelectorAll('[id~=' + b + '-]').length || v.push('~='),
                  e.querySelectorAll(':checked').length || v.push(':checked'),
                  e.querySelectorAll('a#' + b + '+*').length ||
                    v.push('.#.+[+~]');
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement('input');
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length &&
                    v.push('name' + M + '*[*^$|!~]?='),
                  2 !== e.querySelectorAll(':enabled').length &&
                    v.push(':enabled', ':disabled'),
                  (h.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(':disabled').length &&
                    v.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  v.push(',.*:');
              })),
            (n.matchesSelector = K.test(
              (m =
                h.matches ||
                h.webkitMatchesSelector ||
                h.mozMatchesSelector ||
                h.oMatchesSelector ||
                h.msMatchesSelector),
            )) &&
              ce(function (e) {
                (n.disconnectedMatch = m.call(e, '*')),
                  m.call(e, "[s!='']:x"),
                  y.push('!=', W);
              }),
            (v = v.length && new RegExp(v.join('|'))),
            (y = y.length && new RegExp(y.join('|'))),
            (t = K.test(h.compareDocumentPosition)),
            (x =
              t || K.test(h.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (N = t
              ? function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var r =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    r ||
                    (1 &
                      (r =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === r)
                      ? e === d || (e.ownerDocument === w && x(w, e))
                        ? -1
                        : t === d || (t.ownerDocument === w && x(w, t))
                          ? 1
                          : c
                            ? P(c, e) - P(c, t)
                            : 0
                      : 4 & r
                        ? -1
                        : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e === d
                      ? -1
                      : t === d
                        ? 1
                        : i
                          ? -1
                          : o
                            ? 1
                            : c
                              ? P(c, e) - P(c, t)
                              : 0;
                  if (i === o) return pe(e, t);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                  for (; a[r] === s[r]; ) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] === w
                      ? -1
                      : s[r] === w
                        ? 1
                        : 0;
                }),
            d)
          : d;
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== d && p(e),
        n.matchesSelector &&
          g &&
          !A[t + ' '] &&
          (!y || !y.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var r = m.call(e, t);
          if (
            r ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return r;
        } catch (e) {
          A(t, !0);
        }
      return se(t, d, null, [e]).length > 0;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);
      var i = r.attrHandle[t.toLowerCase()],
        o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
      return void 0 !== o
        ? o
        : n.attributes || !g
          ? e.getAttribute(t)
          : (o = e.getAttributeNode(t)) && o.specified
            ? o.value
            : null;
    }),
    (se.escape = function (e) {
      return (e + '').replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        r = [],
        i = 0,
        o = 0;
      if (
        ((f = !n.detectDuplicates),
        (c = !n.sortStable && e.slice(0)),
        e.sort(N),
        f)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
        for (; i--; ) e.splice(r[i], 1);
      }
      return (c = null), e;
    }),
    (i = se.getText =
      function (e) {
        var t,
          n = '',
          r = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ('string' == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += i(t);
        return n;
      }),
    ((r = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 },
          ' ': { dir: 'parentNode' },
          '+': { dir: 'previousSibling', first: !0 },
          '~': { dir: 'previousSibling' },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n &&
                    X.test(n) &&
                    (t = a(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return '*' === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = E[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) &&
                E(e, function (e) {
                  return t.test(
                    ('string' == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                      '',
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (r) {
              var i = se.attr(r, e);
              return null == i
                ? '!=' === t
                : !t ||
                    ((i += ''),
                    '=' === t
                      ? i === n
                      : '!=' === t
                        ? i !== n
                        : '^=' === t
                          ? n && 0 === i.indexOf(n)
                          : '*=' === t
                            ? n && i.indexOf(n) > -1
                            : '$=' === t
                              ? n && i.slice(-n.length) === n
                              : '~=' === t
                                ? (' ' + i.replace($, ' ') + ' ').indexOf(n) >
                                  -1
                                : '|=' === t &&
                                  (i === n ||
                                    i.slice(0, n.length + 1) === n + '-'));
            };
          },
          CHILD: function (e, t, n, r, i) {
            var o = 'nth' !== e.slice(0, 3),
              a = 'last' !== e.slice(-4),
              s = 'of-type' === t;
            return 1 === r && 0 === i
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, u) {
                  var l,
                    c,
                    f,
                    p,
                    d,
                    h,
                    g = o !== a ? 'nextSibling' : 'previousSibling',
                    v = t.parentNode,
                    y = s && t.nodeName.toLowerCase(),
                    m = !u && !s,
                    x = !1;
                  if (v) {
                    if (o) {
                      for (; g; ) {
                        for (p = t; (p = p[g]); )
                          if (
                            s
                              ? p.nodeName.toLowerCase() === y
                              : 1 === p.nodeType
                          )
                            return !1;
                        h = g = 'only' === e && !h && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((h = [a ? v.firstChild : v.lastChild]), a && m)) {
                      for (
                        x =
                          (d =
                            (l =
                              (c =
                                (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                            l[1]) && l[2],
                          p = d && v.childNodes[d];
                        (p = (++d && p && p[g]) || (x = d = 0) || h.pop());

                      )
                        if (1 === p.nodeType && ++x && p === t) {
                          c[e] = [T, d, x];
                          break;
                        }
                    } else if (
                      (m &&
                        (x = d =
                          (l =
                            (c =
                              (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] ||
                              (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                      !1 === x)
                    )
                      for (
                        ;
                        (p = (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                        ((s
                          ? p.nodeName.toLowerCase() !== y
                          : 1 !== p.nodeType) ||
                          !++x ||
                          (m &&
                            ((c =
                              (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                              (f[p.uniqueID] = {}))[e] = [T, x]),
                          p !== t));

                      );
                    return (x -= i) === r || (x % r == 0 && x / r >= 0);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              i =
                r.pseudos[e] ||
                r.setFilters[e.toLowerCase()] ||
                se.error('unsupported pseudo: ' + e);
            return i[b]
              ? i(t)
              : i.length > 1
                ? ((n = [e, e, '', t]),
                  r.setFilters.hasOwnProperty(e.toLowerCase())
                    ? le(function (e, n) {
                        for (var r, o = i(e, t), a = o.length; a--; )
                          e[(r = P(e, o[a]))] = !(n[r] = o[a]);
                      })
                    : function (e) {
                        return i(e, 0, n);
                      })
                : i;
          },
        },
        pseudos: {
          not: le(function (e) {
            var t = [],
              n = [],
              r = s(e.replace(F, '$1'));
            return r[b]
              ? le(function (e, t, n, i) {
                  for (var o, a = r(e, null, i, []), s = e.length; s--; )
                    (o = a[s]) && (e[s] = !(t[s] = o));
                })
              : function (e, i, o) {
                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: le(function (e) {
            return function (t) {
              return se(e, t).length > 0;
            };
          }),
          contains: le(function (e) {
            return (
              (e = e.replace(te, ne)),
              function (t) {
                return (t.textContent || i(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: le(function (e) {
            return (
              V.test(e || '') || se.error('unsupported lang: ' + e),
              (e = e.replace(te, ne).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = g
                      ? t.lang
                      : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-')
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === h;
          },
          focus: function (e) {
            return (
              e === d.activeElement &&
              (!d.hasFocus || d.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ('input' === t && !!e.checked) || ('option' === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !r.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && 'button' === e.type) || 'button' === t;
          },
          text: function (e) {
            var t;
            return (
              'input' === e.nodeName.toLowerCase() &&
              'text' === e.type &&
              (null == (t = e.getAttribute('type')) ||
                'text' === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = r.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      r.pseudos[t] = de(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
      return r;
    }
    function be(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        a = n && 'parentNode' === o,
        s = C++;
      return t.first
        ? function (t, n, i) {
            for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, i);
            return !1;
          }
        : function (t, n, u) {
            var l,
              c,
              f,
              p = [T, s];
            if (u) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || a)
                  if (
                    ((c =
                      (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                      (f[t.uniqueID] = {})),
                    i && i === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((l = c[o]) && l[0] === T && l[1] === s)
                      return (p[2] = l[2]);
                    if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                  }
            return !1;
          };
    }
    function we(e) {
      return e.length > 1
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(e, t, n, r, i, o) {
      return (
        r && !r[b] && (r = Ce(r)),
        i && !i[b] && (i = Ce(i, o)),
        le(function (o, a, s, u) {
          var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g =
              o ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(t || '*', s.nodeType ? [s] : s, []),
            v = !e || (!o && t) ? g : Te(g, p, e, s, u),
            y = n ? (i || (o ? e : h || r) ? [] : a) : v;
          if ((n && n(v, y, s, u), r))
            for (l = Te(y, d), r(l, [], s, u), c = l.length; c--; )
              (f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
          if (o) {
            if (i || e) {
              if (i) {
                for (l = [], c = y.length; c--; )
                  (f = y[c]) && l.push((v[c] = f));
                i(null, (y = []), l, u);
              }
              for (c = y.length; c--; )
                (f = y[c]) &&
                  (l = i ? P(o, f) : p[c]) > -1 &&
                  (o[l] = !(a[l] = f));
            }
          } else
            (y = Te(y === a ? y.splice(h, y.length) : y)),
              i ? i(null, a, y, u) : H.apply(a, y);
        })
      );
    }
    function Ee(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          a = r.relative[e[0].type],
          s = a || r.relative[' '],
          u = a ? 1 : 0,
          c = be(
            function (e) {
              return e === t;
            },
            s,
            !0,
          ),
          f = be(
            function (e) {
              return P(t, e) > -1;
            },
            s,
            !0,
          ),
          p = [
            function (e, n, r) {
              var i =
                (!a && (r || n !== l)) ||
                ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
              return (t = null), i;
            },
          ];
        u < o;
        u++
      )
        if ((n = r.relative[e[u].type])) p = [be(we(p), n)];
        else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o && !r.relative[e[i].type]; i++);
            return Ce(
              u > 1 && we(p),
              u > 1 &&
                xe(
                  e
                    .slice(0, u - 1)
                    .concat({ value: ' ' === e[u - 2].type ? '*' : '' }),
                ).replace(F, '$1'),
              n,
              u < i && Ee(e.slice(u, i)),
              i < o && Ee((e = e.slice(i))),
              i < o && xe(e),
            );
          }
          p.push(n);
        }
      return we(p);
    }
    return (
      (me.prototype = r.filters = r.pseudos),
      (r.setFilters = new me()),
      (a = se.tokenize =
        function (e, t) {
          var n,
            i,
            o,
            a,
            s,
            u,
            l,
            c = S[e + ' '];
          if (c) return t ? 0 : c.slice(0);
          for (s = e, u = [], l = r.preFilter; s; ) {
            for (a in ((n && !(i = B.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
            (n = !1),
            (i = z.exec(s)) &&
              ((n = i.shift()),
              o.push({ value: n, type: i[0].replace(F, ' ') }),
              (s = s.slice(n.length))),
            r.filter))
              !(i = G[a].exec(s)) ||
                (l[a] && !(i = l[a](i))) ||
                ((n = i.shift()),
                o.push({ value: n, type: a, matches: i }),
                (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? se.error(e) : S(e, u).slice(0);
        }),
      (s = se.compile =
        function (e, t) {
          var n,
            i = [],
            o = [],
            s = k[e + ' '];
          if (!s) {
            for (t || (t = a(e)), n = t.length; n--; )
              (s = Ee(t[n]))[b] ? i.push(s) : o.push(s);
            (s = k(
              e,
              (function (e, t) {
                var n = t.length > 0,
                  i = e.length > 0,
                  o = function (o, a, s, u, c) {
                    var f,
                      h,
                      v,
                      y = 0,
                      m = '0',
                      x = o && [],
                      b = [],
                      w = l,
                      C = o || (i && r.find.TAG('*', c)),
                      E = (T += null == w ? 1 : Math.random() || 0.1),
                      S = C.length;
                    for (
                      c && (l = a === d || a || c);
                      m !== S && null != (f = C[m]);
                      m++
                    ) {
                      if (i && f) {
                        for (
                          h = 0, a || f.ownerDocument === d || (p(f), (s = !g));
                          (v = e[h++]);

                        )
                          if (v(f, a || d, s)) {
                            u.push(f);
                            break;
                          }
                        c && (T = E);
                      }
                      n && ((f = !v && f) && y--, o && x.push(f));
                    }
                    if (((y += m), n && m !== y)) {
                      for (h = 0; (v = t[h++]); ) v(x, b, a, s);
                      if (o) {
                        if (y > 0)
                          for (; m--; ) x[m] || b[m] || (b[m] = q.call(u));
                        b = Te(b);
                      }
                      H.apply(u, b),
                        c &&
                          !o &&
                          b.length > 0 &&
                          y + t.length > 1 &&
                          se.uniqueSort(u);
                    }
                    return c && ((T = E), (l = w)), x;
                  };
                return n ? le(o) : o;
              })(o, i),
            )).selector = e;
          }
          return s;
        }),
      (u = se.select =
        function (e, t, n, i) {
          var o,
            u,
            l,
            c,
            f,
            p = 'function' == typeof e && e,
            d = !i && a((e = p.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              (u = d[0] = d[0].slice(0)).length > 2 &&
              'ID' === (l = u[0]).type &&
              9 === t.nodeType &&
              g &&
              r.relative[u[1].type]
            ) {
              if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
            }
            for (
              o = G.needsContext.test(e) ? 0 : u.length;
              o-- && ((l = u[o]), !r.relative[(c = l.type)]);

            )
              if (
                (f = r.find[c]) &&
                (i = f(
                  l.matches[0].replace(te, ne),
                  (ee.test(u[0].type) && ye(t.parentNode)) || t,
                ))
              ) {
                if ((u.splice(o, 1), !(e = i.length && xe(u))))
                  return H.apply(n, i), n;
                break;
              }
          }
          return (
            (p || s(e, d))(
              i,
              t,
              !g,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t,
            ),
            n
          );
        }),
      (n.sortStable = b.split('').sort(N).join('') === b),
      (n.detectDuplicates = !!f),
      p(),
      (n.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement('fieldset'));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          '#' === e.firstChild.getAttribute('href')
        );
      }) ||
        fe('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        fe('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
        }),
      se
    );
  })(e);
  (b.find = C),
    (b.expr = C.selectors),
    (b.expr[':'] = b.expr.pseudos),
    (b.uniqueSort = b.unique = C.uniqueSort),
    (b.text = C.getText),
    (b.isXMLDoc = C.isXML),
    (b.contains = C.contains),
    (b.escapeSelector = C.escape);
  var E = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && b(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = b.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, t, n) {
    return g(t)
      ? b.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
        ? b.grep(e, function (e) {
            return (e === t) !== n;
          })
        : 'string' != typeof t
          ? b.grep(e, function (e) {
              return u.call(t, e) > -1 !== n;
            })
          : b.filter(t, e, n);
  }
  (b.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === r.nodeType
        ? b.find.matchesSelector(r, e)
          ? [r]
          : []
        : b.find.matches(
            e,
            b.grep(t, function (e) {
              return 1 === e.nodeType;
            }),
          )
    );
  }),
    b.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ('string' != typeof e)
          return this.pushStack(
            b(e).filter(function () {
              for (t = 0; t < r; t++) if (b.contains(i[t], this)) return !0;
            }),
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) b.find(e, i[t], n);
        return r > 1 ? b.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, 'string' == typeof e && k.test(e) ? b(e) : e || [], !1)
          .length;
      },
    });
  var j,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((b.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || j), 'string' == typeof e)) {
      if (
        !(i =
          '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : q.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof b ? t[0] : t),
          b.merge(
            this,
            b.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0),
          ),
          N.test(i[1]) && b.isPlainObject(t))
        )
          for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : g(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(b)
        : b.makeArray(e, this);
  }).prototype = b.fn),
    (j = b(r));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  b.fn.extend({
    has: function (e) {
      var t = b(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (b.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = 'string' != typeof e && b(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && b.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? u.call(b(e), this[0])
          : u.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (e, t) {
      return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    b.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return E(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return E(e, 'parentNode', n);
        },
        next: function (e) {
          return O(e, 'nextSibling');
        },
        prev: function (e) {
          return O(e, 'previousSibling');
        },
        nextAll: function (e) {
          return E(e, 'nextSibling');
        },
        prevAll: function (e) {
          return E(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return E(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return E(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return void 0 !== e.contentDocument
            ? e.contentDocument
            : (A(e, 'template') && (e = e.content || e),
              b.merge([], e.childNodes));
        },
      },
      function (e, t) {
        b.fn[e] = function (n, r) {
          var i = b.map(this, t, n);
          return (
            'Until' !== e.slice(-5) && (r = n),
            r && 'string' == typeof r && (i = b.filter(r, i)),
            this.length > 1 &&
              (H[e] || b.uniqueSort(i), L.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      },
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && g((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && g((i = e.then))
          ? i.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (b.Callbacks = function (e) {
    e =
      'string' == typeof e
        ? (function (e) {
            var t = {};
            return (
              b.each(e.match(P) || [], function (e, n) {
                t[n] = !0;
              }),
              t
            );
          })(e)
        : b.extend({}, e);
    var t,
      n,
      r,
      i,
      o = [],
      a = [],
      s = -1,
      u = function () {
        for (i = i || e.once, r = t = !0; a.length; s = -1)
          for (n = a.shift(); ++s < o.length; )
            !1 === o[s].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((s = o.length), (n = !1));
        e.memory || (n = !1), (t = !1), i && (o = n ? [] : '');
      },
      l = {
        add: function () {
          return (
            o &&
              (n && !t && ((s = o.length - 1), a.push(n)),
              (function t(n) {
                b.each(n, function (n, r) {
                  g(r)
                    ? (e.unique && l.has(r)) || o.push(r)
                    : r && r.length && 'string' !== x(r) && t(r);
                });
              })(arguments),
              n && !t && u()),
            this
          );
        },
        remove: function () {
          return (
            b.each(arguments, function (e, t) {
              for (var n; (n = b.inArray(t, o, n)) > -1; )
                o.splice(n, 1), n <= s && s--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? b.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (i = a = []), (o = n = ''), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (i = a = []), n || t || (o = n = ''), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return (
            i ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              a.push(n),
              t || u()),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return l;
  }),
    b.extend({
      Deferred: function (t) {
        var n = [
            [
              'notify',
              'progress',
              b.Callbacks('memory'),
              b.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              b.Callbacks('once memory'),
              b.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              b.Callbacks('once memory'),
              b.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          r = 'pending',
          i = {
            state: function () {
              return r;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return i.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return b
                .Deferred(function (t) {
                  b.each(n, function (n, r) {
                    var i = g(e[r[4]]) && e[r[4]];
                    o[r[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && g(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[r[0] + 'With'](this, i ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, r, i) {
              var o = 0;
              function a(t, n, r, i) {
                return function () {
                  var s = this,
                    u = arguments,
                    l = function () {
                      var e, l;
                      if (!(t < o)) {
                        if ((e = r.apply(s, u)) === n.promise())
                          throw new TypeError('Thenable self-resolution');
                        (l =
                          e &&
                          ('object' === _typeof(e) || 'function' == typeof e) &&
                          e.then),
                          g(l)
                            ? i
                              ? l.call(e, a(o, n, R, i), a(o, n, M, i))
                              : (o++,
                                l.call(
                                  e,
                                  a(o, n, R, i),
                                  a(o, n, M, i),
                                  a(o, n, R, n.notifyWith),
                                ))
                            : (r !== R && ((s = void 0), (u = [e])),
                              (i || n.resolveWith)(s, u));
                      }
                    },
                    c = i
                      ? l
                      : function () {
                          try {
                            l();
                          } catch (e) {
                            b.Deferred.exceptionHook &&
                              b.Deferred.exceptionHook(e, c.stackTrace),
                              t + 1 >= o &&
                                (r !== M && ((s = void 0), (u = [e])),
                                n.rejectWith(s, u));
                          }
                        };
                  t
                    ? c()
                    : (b.Deferred.getStackHook &&
                        (c.stackTrace = b.Deferred.getStackHook()),
                      e.setTimeout(c));
                };
              }
              return b
                .Deferred(function (e) {
                  n[0][3].add(a(0, e, g(i) ? i : R, e.notifyWith)),
                    n[1][3].add(a(0, e, g(t) ? t : R)),
                    n[2][3].add(a(0, e, g(r) ? r : M));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? b.extend(e, i) : i;
            },
          },
          o = {};
        return (
          b.each(n, function (e, t) {
            var a = t[2],
              s = t[5];
            (i[t[1]] = a.add),
              s &&
                a.add(
                  function () {
                    r = s;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock,
                ),
              a.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + 'With'](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[t[0] + 'With'] = a.fireWith);
          }),
          i.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = b.Deferred(),
          s = function (e) {
            return function (n) {
              (r[e] = this),
                (i[e] = arguments.length > 1 ? o.call(arguments) : n),
                --t || a.resolveWith(r, i);
            };
          };
        if (
          t <= 1 &&
          (I(e, a.done(s(n)).resolve, a.reject, !t),
          'pending' === a.state() || g(i[n] && i[n].then))
        )
          return a.then();
        for (; n--; ) I(i[n], s(n), a.reject);
        return a.promise();
      },
    });
  var _ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (b.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      _.test(t.name) &&
      e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
  }),
    (b.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var W = b.Deferred();
  function $() {
    r.removeEventListener('DOMContentLoaded', $),
      e.removeEventListener('load', $),
      b.ready();
  }
  (b.fn.ready = function (e) {
    return (
      W.then(e).catch(function (e) {
        b.readyException(e);
      }),
      this
    );
  }),
    b.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --b.readyWait : b.isReady) ||
          ((b.isReady = !0),
          (!0 !== e && --b.readyWait > 0) || W.resolveWith(r, [b]));
      },
    }),
    (b.ready.then = W.then),
    'complete' === r.readyState ||
    ('loading' !== r.readyState && !r.documentElement.doScroll)
      ? e.setTimeout(b.ready)
      : (r.addEventListener('DOMContentLoaded', $),
        e.addEventListener('load', $));
  var F = function e(t, n, r, i, o, a, s) {
      var u = 0,
        l = t.length,
        c = null == r;
      if ('object' === x(r))
        for (u in ((o = !0), r)) e(t, n, u, r[u], !0, a, s);
      else if (
        void 0 !== i &&
        ((o = !0),
        g(i) || (s = !0),
        c &&
          (s
            ? (n.call(t, i), (n = null))
            : ((c = n),
              (n = function (e, t, n) {
                return c.call(b(e), n);
              }))),
        n)
      )
        for (; u < l; u++) n(t[u], r, s ? i : i.call(t[u], u, n(t[u], r)));
      return o ? t : c ? n.call(t) : l ? n(t[0], r) : a;
    },
    B = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(B, 'ms-').replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = b.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ('string' == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
                ? [t]
                : t.match(P) || []).length;
            for (; n--; ) delete r[t[n]];
          }
          (void 0 === t || b.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !b.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = 'data-' + t.replace(K, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n = (function (e) {
            return (
              'true' === e ||
              ('false' !== e &&
                ('null' === e
                  ? null
                  : e === +e + ''
                    ? +e
                    : J.test(e)
                      ? JSON.parse(e)
                      : e))
            );
          })(n);
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  b.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    b.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, 'hasDataAttrs'))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                0 === (r = a[n].name).indexOf('data-') &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, 'hasDataAttrs', !0);
          }
          return i;
        }
        return 'object' === _typeof(e)
          ? this.each(function () {
              Q.set(this, e);
            })
          : F(
              this,
              function (t) {
                var n;
                if (o && void 0 === t)
                  return void 0 !== (n = Q.get(o, e))
                    ? n
                    : void 0 !== (n = Z(o, e))
                      ? n
                      : void 0;
                this.each(function () {
                  Q.set(this, e, t);
                });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0,
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    b.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, b.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = b.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = b._queueHooks(e, t);
        'inprogress' === i && ((i = n.shift()), r--),
          i &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            i.call(
              e,
              function () {
                b.dequeue(e, t);
              },
              o,
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: b.Callbacks('once memory').add(function () {
              Y.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    b.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          'string' != typeof e && ((t = e), (e = 'fx'), n--),
          arguments.length < n
            ? b.queue(this[0], e)
            : void 0 === t
              ? this
              : this.each(function () {
                  var n = b.queue(this, e, t);
                  b._queueHooks(this, e),
                    'fx' === e && 'inprogress' !== n[0] && b.dequeue(this, e);
                })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          b.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = b.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
          a--;

        )
          (n = Y.get(o[a], e + 'queueHooks')) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
    ne = ['Top', 'Right', 'Bottom', 'Left'],
    re = r.documentElement,
    ie = function (e) {
      return b.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.attachShadow &&
    (ie = function (e) {
      return (
        b.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
      return (
        'none' === (e = t || e).style.display ||
        ('' === e.style.display && ie(e) && 'none' === b.css(e, 'display'))
      );
    },
    se = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
      return i;
    };
  function ue(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return b.css(e, t, '');
          },
      u = s(),
      l = (n && n[3]) || (b.cssNumber[t] ? '' : 'px'),
      c =
        e.nodeType &&
        (b.cssNumber[t] || ('px' !== l && +u)) &&
        te.exec(b.css(e, t));
    if (c && c[3] !== l) {
      for (u /= 2, l = l || c[3], c = +u || 1; a--; )
        b.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), b.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var le = {};
  function ce(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = le[r];
    return (
      i ||
      ((t = n.body.appendChild(n.createElement(r))),
      (i = b.css(t, 'display')),
      t.parentNode.removeChild(t),
      'none' === i && (i = 'block'),
      (le[r] = i),
      i)
    );
  }
  function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
      (r = e[o]).style &&
        ((n = r.style.display),
        t
          ? ('none' === n &&
              ((i[o] = Y.get(r, 'display') || null),
              i[o] || (r.style.display = '')),
            '' === r.style.display && ae(r) && (i[o] = ce(r)))
          : 'none' !== n && ((i[o] = 'none'), Y.set(r, 'display', n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  b.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? b(this).show() : b(this).hide();
          });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', ''],
    };
  function ve(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : void 0 !== e.querySelectorAll
            ? e.querySelectorAll(t || '*')
            : []),
      void 0 === t || (t && A(e, t)) ? b.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], 'globalEval', !t || Y.get(t[n], 'globalEval'));
  }
  (ge.optgroup = ge.option),
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td);
  var me,
    xe,
    be = /<|&#?\w+;/;
  function we(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ('object' === x(o)) b.merge(p, o.nodeType ? [o] : o);
        else if (be.test(o)) {
          for (
            a = a || f.appendChild(t.createElement('div')),
              s = (de.exec(o) || ['', ''])[1].toLowerCase(),
              u = ge[s] || ge._default,
              a.innerHTML = u[1] + b.htmlPrefilter(o) + u[2],
              c = u[0];
            c--;

          )
            a = a.lastChild;
          b.merge(p, a.childNodes), ((a = f.firstChild).textContent = '');
        } else p.push(t.createTextNode(o));
    for (f.textContent = '', d = 0; (o = p[d++]); )
      if (r && b.inArray(o, r) > -1) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), 'script')), l && ye(a), n)
      )
        for (c = 0; (o = a[c++]); ) he.test(o.type || '') && n.push(o);
    return f;
  }
  (me = r.createDocumentFragment().appendChild(r.createElement('div'))),
    (xe = r.createElement('input')).setAttribute('type', 'radio'),
    xe.setAttribute('checked', 'checked'),
    xe.setAttribute('name', 't'),
    me.appendChild(xe),
    (h.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (me.innerHTML = '<textarea>x</textarea>'),
    (h.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue);
  var Te = /^key/,
    Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ee = /^([^.]*)(?:\.(.+)|)/;
  function Se() {
    return !0;
  }
  function ke() {
    return !1;
  }
  function Ae(e, t) {
    return (
      (e ===
        (function () {
          try {
            return r.activeElement;
          } catch (e) {}
        })()) ==
      ('focus' === t)
    );
  }
  function Ne(e, t, n, r, i, o) {
    var a, s;
    if ('object' === _typeof(t)) {
      for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
        Ne(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ('string' == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = ke;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return b().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = b.guid++))),
      e.each(function () {
        b.event.add(this, t, i, r, n);
      })
    );
  }
  function De(e, t, n) {
    n
      ? (Y.set(e, t, !1),
        b.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var r,
              i,
              a = Y.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (a)
                (b.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((a = o.call(arguments)),
                Y.set(this, t, a),
                (r = n(this, t)),
                this[t](),
                a !== (i = Y.get(this, t)) || r
                  ? Y.set(this, t, !1)
                  : (i = void 0),
                a !== i)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), i;
            } else
              a &&
                (Y.set(
                  this,
                  t,
                  b.event.trigger(
                    b.extend(a.shift(), b.Event.prototype),
                    a,
                    this,
                  ),
                ),
                e.stopImmediatePropagation());
          },
        }))
      : b.event.add(e, t, Se);
  }
  (b.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(e);
      if (v)
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && b.find.matchesSelector(re, i),
            n.guid || (n.guid = b.guid++),
            (u = v.events) || (u = v.events = {}),
            (a = v.handle) ||
              (a = v.handle =
                function (t) {
                  return void 0 !== b && b.event.triggered !== t.type
                    ? b.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            l = (t = (t || '').match(P) || ['']).length;
          l--;

        )
          (d = g = (s = Ee.exec(t[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d &&
              ((f = b.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = b.event.special[d] || {}),
              (c = b.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && b.expr.match.needsContext.test(i),
                  namespace: h.join('.'),
                },
                o,
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                  (e.addEventListener && e.addEventListener(d, a))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (b.event.global[d] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        for (l = (t = (t || '').match(P) || ['']).length; l--; )
          if (
            ((d = g = (s = Ee.exec(t[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d)
          ) {
            for (
              f = b.event.special[d] || {},
                p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                s =
                  s[2] &&
                  new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                a = o = p.length;
              o--;

            )
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                b.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) b.event.remove(e, d + t[l], n, r, !0);
        b.isEmptyObject(u) && Y.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = b.event.fix(e),
        u = new Array(arguments.length),
        l = (Y.get(this, 'events') || {})[s.type] || [],
        c = b.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, s))
      ) {
        for (
          a = b.event.handlers.call(this, s, l), t = 0;
          (i = a[t++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace &&
              !1 !== o.namespace &&
              !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              void 0 !==
                (r = (
                  (b.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, u)) &&
                !1 === (s.result = r) &&
                (s.preventDefault(), s.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !('click' === e.type && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                (a[i] = r.needsContext
                  ? b(i, this).index(l) > -1
                  : b.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(b.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[b.expando] ? e : new b.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) &&
              t.click &&
              A(t, 'input') &&
              void 0 === Y.get(t, 'click') &&
              De(t, 'click', Se),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) &&
              t.click &&
              A(t, 'input') &&
              void 0 === Y.get(t, 'click') &&
              De(t, 'click'),
            !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, 'input') &&
              Y.get(t, 'click')) ||
            A(t, 'a')
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (b.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (b.Event = function (e, t) {
      if (!(this instanceof b.Event)) return new b.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Se
              : ke),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && b.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[b.expando] = !0);
    }),
    (b.Event.prototype = {
      constructor: b.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Se),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Se),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Se),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    b.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && Te.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Ce.test(e.type)
              ? 1 & t
                ? 1
                : 2 & t
                  ? 3
                  : 4 & t
                    ? 2
                    : 0
              : e.which;
        },
      },
      b.event.addProp,
    ),
    b.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
      b.event.special[e] = {
        setup: function () {
          return De(this, e, Ae), !1;
        },
        trigger: function () {
          return De(this, e), !0;
        },
        delegateType: t,
      };
    }),
    b.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, t) {
        b.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = e.relatedTarget,
              i = e.handleObj;
            return (
              (r && (r === this || b.contains(this, r))) ||
                ((e.type = i.origType),
                (n = i.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      },
    ),
    b.fn.extend({
      on: function (e, t, n, r) {
        return Ne(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ne(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            b(e.delegateTarget).off(
              r.namespace ? r.origType + '.' + r.namespace : r.origType,
              r.selector,
              r.handler,
            ),
            this
          );
        if ('object' === _typeof(e)) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = ke),
          this.each(function () {
            b.event.remove(this, e, n, t);
          })
        );
      },
    });
  var je =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    qe = /<script|<style|<link/i,
    Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
    He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Oe(e, t) {
    return (
      (A(e, 'table') &&
        A(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        b(e).children('tbody')[0]) ||
      e
    );
  }
  function Pe(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function Re(e) {
    return (
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    );
  }
  function Me(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        Y.hasData(e) &&
        ((o = Y.access(e)), (a = Y.set(t, o)), (l = o.events))
      )
        for (i in (delete a.handle, (a.events = {}), l))
          for (n = 0, r = l[i].length; n < r; n++) b.event.add(t, i, l[i][n]);
      Q.hasData(e) && ((s = Q.access(e)), (u = b.extend({}, s)), Q.set(t, u));
    }
  }
  function Ie(e, t, n, r) {
    t = a.apply([], t);
    var i,
      o,
      s,
      u,
      l,
      c,
      f = 0,
      p = e.length,
      d = p - 1,
      v = t[0],
      y = g(v);
    if (y || (p > 1 && 'string' == typeof v && !h.checkClone && Le.test(v)))
      return e.each(function (i) {
        var o = e.eq(i);
        y && (t[0] = v.call(this, i, o.html())), Ie(o, t, n, r);
      });
    if (
      p &&
      ((o = (i = we(t, e[0].ownerDocument, !1, e, r)).firstChild),
      1 === i.childNodes.length && (i = o),
      o || r)
    ) {
      for (u = (s = b.map(ve(i, 'script'), Pe)).length; f < p; f++)
        (l = i),
          f !== d &&
            ((l = b.clone(l, !0, !0)), u && b.merge(s, ve(l, 'script'))),
          n.call(e[f], l, f);
      if (u)
        for (c = s[s.length - 1].ownerDocument, b.map(s, Re), f = 0; f < u; f++)
          (l = s[f]),
            he.test(l.type || '') &&
              !Y.access(l, 'globalEval') &&
              b.contains(c, l) &&
              (l.src && 'module' !== (l.type || '').toLowerCase()
                ? b._evalUrl &&
                  !l.noModule &&
                  b._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute('nonce'),
                  })
                : m(l.textContent.replace(He, ''), l, c));
    }
    return e;
  }
  function _e(e, t, n) {
    for (var r, i = t ? b.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || b.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, 'script')), r.parentNode.removeChild(r));
    return e;
  }
  b.extend({
    htmlPrefilter: function (e) {
      return e.replace(je, '<$1></$2>');
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          b.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            (l = void 0),
            'input' === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ('input' !== l && 'textarea' !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Me(o[r], a[r]);
        else Me(e, c);
      return (
        (a = ve(c, 'script')).length > 0 && ye(a, !f && ve(e, 'script')), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = b.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? b.event.remove(n, r) : b.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    b.fn.extend({
      detach: function (e) {
        return _e(this, e, !0);
      },
      remove: function (e) {
        return _e(this, e);
      },
      text: function (e) {
        return F(
          this,
          function (e) {
            return void 0 === e
              ? b.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length,
        );
      },
      append: function () {
        return Ie(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Oe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Ie(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Oe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (b.cleanData(ve(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return b.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return F(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              'string' == typeof e &&
              !qe.test(e) &&
              !ge[(de.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = b.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (b.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length,
        );
      },
      replaceWith: function () {
        var e = [];
        return Ie(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            b.inArray(this, e) < 0 &&
              (b.cleanData(ve(this)), n && n.replaceChild(t, this));
          },
          e,
        );
      },
    }),
    b.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, t) {
        b.fn[e] = function (e) {
          for (var n, r = [], i = b(e), o = i.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              b(i[a])[t](n),
              s.apply(r, n.get());
          return this.pushStack(r);
        };
      },
    );
  var We = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
    $e = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Fe = new RegExp(ne.join('|'), 'i');
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || $e(e)) &&
        ('' !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = b.style(e, t)),
        !h.pixelBoxStyles() &&
          We.test(a) &&
          Fe.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + '' : a
    );
  }
  function ze(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (c) {
        (l.style.cssText =
          'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (c.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          re.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        (i = '1%' !== t.top),
          (u = 12 === n(t.marginLeft)),
          (c.style.right = '60%'),
          (s = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (c.style.position = 'absolute'),
          (a = 12 === n(c.offsetWidth / 3)),
          re.removeChild(l),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      a,
      s,
      u,
      l = r.createElement('div'),
      c = r.createElement('div');
    c.style &&
      ((c.style.backgroundClip = 'content-box'),
      (c.cloneNode(!0).style.backgroundClip = ''),
      (h.clearCloneStyle = 'content-box' === c.style.backgroundClip),
      b.extend(h, {
        boxSizingReliable: function () {
          return t(), o;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), u;
        },
        scrollboxSize: function () {
          return t(), a;
        },
      }));
  })();
  var Ue = ['Webkit', 'Moz', 'ms'],
    Xe = r.createElement('div').style,
    Ve = {};
  function Ge(e) {
    var t = b.cssProps[e] || Ve[e];
    return (
      t ||
      (e in Xe
        ? e
        : (Ve[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = Ue.length;
                n--;

              )
                if ((e = Ue[n] + t) in Xe) return e;
            })(e) || e))
    );
  }
  var Ye = /^(none|table(?!-c[ea]).+)/,
    Qe = /^--/,
    Je = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Ke = { letterSpacing: '0', fontWeight: '400' };
  function Ze(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function et(e, t, n, r, i, o) {
    var a = 'width' === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2)
      'margin' === n && (u += b.css(e, n + ne[a], !0, i)),
        r
          ? ('content' === n && (u -= b.css(e, 'padding' + ne[a], !0, i)),
            'margin' !== n &&
              (u -= b.css(e, 'border' + ne[a] + 'Width', !0, i)))
          : ((u += b.css(e, 'padding' + ne[a], !0, i)),
            'padding' !== n
              ? (u += b.css(e, 'border' + ne[a] + 'Width', !0, i))
              : (s += b.css(e, 'border' + ne[a] + 'Width', !0, i)));
    return (
      !r &&
        o >= 0 &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5,
            ),
          ) || 0),
      u
    );
  }
  function tt(e, t, n) {
    var r = $e(e),
      i =
        (!h.boxSizingReliable() || n) &&
        'border-box' === b.css(e, 'boxSizing', !1, r),
      o = i,
      a = Be(e, t, r),
      s = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (We.test(a)) {
      if (!n) return a;
      a = 'auto';
    }
    return (
      ((!h.boxSizingReliable() && i) ||
        'auto' === a ||
        (!parseFloat(a) && 'inline' === b.css(e, 'display', !1, r))) &&
        e.getClientRects().length &&
        ((i = 'border-box' === b.css(e, 'boxSizing', !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        et(e, t, n || (i ? 'border' : 'content'), o, r, a) +
        'px'
    );
  }
  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }
  b.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, 'opacity');
            return '' === n ? '1' : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Qe.test(t),
          l = e.style;
        if (
          (u || (t = Ge(s)), (a = b.cssHooks[t] || b.cssHooks[s]), void 0 === n)
        )
          return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        'string' === (o = _typeof(n)) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = ue(e, t, i)), (o = 'number')),
          null != n &&
            n == n &&
            ('number' !== o ||
              u ||
              (n += (i && i[3]) || (b.cssNumber[s] ? '' : 'px')),
            h.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (l[t] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Qe.test(t) || (t = Ge(s)),
        (a = b.cssHooks[t] || b.cssHooks[s]) &&
          'get' in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        'normal' === i && t in Ke && (i = Ke[t]),
        '' === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    b.each(['height', 'width'], function (e, t) {
      b.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !Ye.test(b.css(e, 'display')) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? tt(e, t, r)
              : se(e, Je, function () {
                  return tt(e, t, r);
                });
        },
        set: function (e, n, r) {
          var i,
            o = $e(e),
            a = !h.scrollboxSize() && 'absolute' === o.position,
            s = (a || r) && 'border-box' === b.css(e, 'boxSizing', !1, o),
            u = r ? et(e, t, r, s, o) : 0;
          return (
            s &&
              a &&
              (u -= Math.ceil(
                e['offset' + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  et(e, t, 'border', !1, o) -
                  0.5,
              )),
            u &&
              (i = te.exec(n)) &&
              'px' !== (i[3] || 'px') &&
              ((e.style[t] = n), (n = b.css(e, t))),
            Ze(0, n, u)
          );
        },
      };
    }),
    (b.cssHooks.marginLeft = ze(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              se(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    b.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
      (b.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n];
            r < 4;
            r++
          )
            i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        'margin' !== e && (b.cssHooks[e + t].set = Ze);
    }),
    b.fn.extend({
      css: function (e, t) {
        return F(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = $e(e), i = t.length; a < i; a++)
                o[t[a]] = b.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? b.style(e, t, n) : b.css(e, t);
          },
          e,
          t,
          arguments.length > 1,
        );
      },
    }),
    (b.Tween = nt),
    (nt.prototype = {
      constructor: nt,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || b.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (b.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = nt.propHooks[this.prop];
        return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = nt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                b.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration,
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : nt.propHooks._default.set(this),
          this
        );
      },
    }),
    (nt.prototype.init.prototype = nt.prototype),
    (nt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = b.css(e.elem, e.prop, '')) && 'auto' !== t
              ? t
              : 0;
        },
        set: function (e) {
          b.fx.step[e.prop]
            ? b.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
                (!b.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : b.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (nt.propHooks.scrollTop = nt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (b.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (b.fx = nt.prototype.init),
    (b.fx.step = {});
  var rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    it &&
      (!1 === r.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(st)
        : e.setTimeout(st, b.fx.interval),
      b.fx.tick());
  }
  function ut() {
    return (
      e.setTimeout(function () {
        rt = void 0;
      }),
      (rt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i['margin' + (n = ne[r])] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (ft.tweeners[t] || []).concat(ft.tweeners['*']),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(e, t, n) {
    var r,
      i,
      o = 0,
      a = ft.prefilters.length,
      s = b.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = rt || ut(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = 1 - (n / l.duration || 0),
            o = 0,
            a = l.tweens.length;
          o < a;
          o++
        )
          l.tweens[o].run(r);
        return (
          s.notifyWith(e, [l, r, n]),
          r < 1 && a
            ? n
            : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: b.extend({}, t),
        opts: b.extend(!0, { specialEasing: {}, easing: b.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: rt || ut(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = b.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing,
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
              : s.rejectWith(e, [l, t]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = b.cssHooks[r]) && ('expand' in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      o < a;
      o++
    )
      if ((r = ft.prefilters[o].call(l, e, c, l.opts)))
        return (
          g(r.stop) &&
            (b._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
          r
        );
    return (
      b.map(c, ct, l),
      g(l.opts.start) && l.opts.start.call(e, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      b.fx.timer(b.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (b.Animation = b.extend(ft, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return ue(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      g(e) ? ((t = e), (e = ['*'])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = 'width' in t || 'height' in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, 'fxshow');
        for (r in (n.queue ||
          (null == (a = b._queueHooks(e, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, b.queue(e, 'fx').length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if (
              (delete t[r],
              (o = o || 'toggle' === i),
              i === (g ? 'hide' : 'show'))
            ) {
              if ('show' !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || b.style(e, r);
          }
        if ((u = !b.isEmptyObject(t)) || !b.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, 'display')),
            'none' === (c = b.css(e, 'display')) &&
              (l
                ? (c = l)
                : (fe([e], !0),
                  (l = e.style.display || l),
                  (c = b.css(e, 'display')),
                  fe([e]))),
            ('inline' === c || ('inline-block' === c && null != l)) &&
              'none' === b.css(e, 'float') &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
              (h.display = 'inline-block'))),
          n.overflow &&
            ((h.overflow = 'hidden'),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? 'hidden' in v && (g = v.hidden)
                : (v = Y.access(e, 'fxshow', { display: l })),
              o && (v.hidden = !g),
              g && fe([e], !0),
              p.done(function () {
                for (r in (g || fe([e]), Y.remove(e, 'fxshow'), d))
                  b.style(e, r, d[r]);
              })),
              (u = ct(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (b.speed = function (e, t, n) {
      var r =
        e && 'object' === _typeof(e)
          ? b.extend({}, e)
          : {
              complete: n || (!n && t) || (g(e) && e),
              duration: e,
              easing: (n && t) || (t && !g(t) && t),
            };
      return (
        b.fx.off
          ? (r.duration = 0)
          : 'number' != typeof r.duration &&
            (r.duration in b.fx.speeds
              ? (r.duration = b.fx.speeds[r.duration])
              : (r.duration = b.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function () {
          g(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue);
        }),
        r
      );
    }),
    b.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = b.isEmptyObject(e),
          o = b.speed(t, n, r),
          a = function () {
            var t = ft(this, b.extend({}, e), o);
            (i || Y.get(this, 'finish')) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          'string' != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || 'fx', []),
          this.each(function () {
            var t = !0,
              i = null != e && e + 'queueHooks',
              o = b.timers,
              a = Y.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && at.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || b.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || 'fx'),
          this.each(function () {
            var t,
              n = Y.get(this),
              r = n[e + 'queue'],
              i = n[e + 'queueHooks'],
              o = b.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                b.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    b.each(['toggle', 'show', 'hide'], function (e, t) {
      var n = b.fn[t];
      b.fn[t] = function (e, r, i) {
        return null == e || 'boolean' == typeof e
          ? n.apply(this, arguments)
          : this.animate(lt(t, !0), e, r, i);
      };
    }),
    b.each(
      {
        slideDown: lt('show'),
        slideUp: lt('hide'),
        slideToggle: lt('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, t) {
        b.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      },
    ),
    (b.timers = []),
    (b.fx.tick = function () {
      var e,
        t = 0,
        n = b.timers;
      for (rt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || b.fx.stop(), (rt = void 0);
    }),
    (b.fx.timer = function (e) {
      b.timers.push(e), b.fx.start();
    }),
    (b.fx.interval = 13),
    (b.fx.start = function () {
      it || ((it = !0), st());
    }),
    (b.fx.stop = function () {
      it = null;
    }),
    (b.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (b.fn.delay = function (t, n) {
      return (
        (t = (b.fx && b.fx.speeds[t]) || t),
        (n = n || 'fx'),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = r.createElement('input'),
        t = r.createElement('select').appendChild(r.createElement('option'));
      (e.type = 'checkbox'),
        (h.checkOn = '' !== e.value),
        (h.optSelected = t.selected),
        ((e = r.createElement('input')).value = 't'),
        (e.type = 'radio'),
        (h.radioValue = 't' === e.value);
    })();
  var pt,
    dt = b.expr.attrHandle;
  b.fn.extend({
    attr: function (e, t) {
      return F(this, b.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        b.removeAttr(this, e);
      });
    },
  }),
    b.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? b.prop(e, t, n)
            : ((1 === o && b.isXMLDoc(e)) ||
                (i =
                  b.attrHooks[t.toLowerCase()] ||
                  (b.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void b.removeAttr(e, t)
                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e.setAttribute(t, n + ''), n)
                : i && 'get' in i && null !== (r = i.get(e, t))
                  ? r
                  : null == (r = b.find.attr(e, t))
                    ? void 0
                    : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && 'radio' === t && A(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    b.each(b.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = dt[t] || b.find.attr;
      dt[t] = function (e, t, r) {
        var i,
          o,
          a = t.toLowerCase();
        return (
          r ||
            ((o = dt[a]),
            (dt[a] = i),
            (i = null != n(e, t, r) ? a : null),
            (dt[a] = o)),
          i
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function vt(e) {
    return (e.match(P) || []).join(' ');
  }
  function yt(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function mt(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(P)) || [];
  }
  b.fn.extend({
    prop: function (e, t) {
      return F(this, b.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[b.propFix[e] || e];
      });
    },
  }),
    b.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && b.isXMLDoc(e)) ||
              ((t = b.propFix[t] || t), (i = b.propHooks[t])),
            void 0 !== n
              ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && 'get' in i && null !== (r = i.get(e, t))
                ? r
                : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = b.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    h.optSelected ||
      (b.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    b.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        b.propFix[this.toLowerCase()] = this;
      },
    ),
    b.fn.extend({
      addClass: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (g(e))
          return this.each(function (t) {
            b(this).addClass(e.call(this, t, yt(this)));
          });
        if ((t = mt(e)).length)
          for (; (n = this[u++]); )
            if (((i = yt(n)), (r = 1 === n.nodeType && ' ' + vt(i) + ' '))) {
              for (a = 0; (o = t[a++]); )
                r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
              i !== (s = vt(r)) && n.setAttribute('class', s);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (g(e))
          return this.each(function (t) {
            b(this).removeClass(e.call(this, t, yt(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ((t = mt(e)).length)
          for (; (n = this[u++]); )
            if (((i = yt(n)), (r = 1 === n.nodeType && ' ' + vt(i) + ' '))) {
              for (a = 0; (o = t[a++]); )
                for (; r.indexOf(' ' + o + ' ') > -1; )
                  r = r.replace(' ' + o + ' ', ' ');
              i !== (s = vt(r)) && n.setAttribute('class', s);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = _typeof(e),
          r = 'string' === n || Array.isArray(e);
        return 'boolean' == typeof t && r
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : g(e)
            ? this.each(function (n) {
                b(this).toggleClass(e.call(this, n, yt(this), t), t);
              })
            : this.each(function () {
                var t, i, o, a;
                if (r)
                  for (i = 0, o = b(this), a = mt(e); (t = a[i++]); )
                    o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                  (void 0 !== e && 'boolean' !== n) ||
                    ((t = yt(this)) && Y.set(this, '__className__', t),
                    this.setAttribute &&
                      this.setAttribute(
                        'class',
                        t || !1 === e ? '' : Y.get(this, '__className__') || '',
                      ));
              });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        for (t = ' ' + e + ' '; (n = this[r++]); )
          if (1 === n.nodeType && (' ' + vt(yt(n)) + ' ').indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  b.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      return arguments.length
        ? ((r = g(e)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              (null == (i = r ? e.call(this, n, b(this).val()) : e)
                ? (i = '')
                : 'number' == typeof i
                  ? (i += '')
                  : Array.isArray(i) &&
                    (i = b.map(i, function (e) {
                      return null == e ? '' : e + '';
                    })),
              ((t =
                b.valHooks[this.type] ||
                b.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in t &&
                void 0 !== t.set(this, i, 'value')) ||
                (this.value = i));
          }))
        : i
          ? (t = b.valHooks[i.type] || b.valHooks[i.nodeName.toLowerCase()]) &&
            'get' in t &&
            void 0 !== (n = t.get(i, 'value'))
            ? n
            : 'string' == typeof (n = i.value)
              ? n.replace(xt, '')
              : null == n
                ? ''
                : n
          : void 0;
    },
  }),
    b.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = b.find.attr(e, 'value');
            return null != t ? t : vt(b.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = 'select-one' === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))
              ) {
                if (((t = b(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = b.makeArray(t), a = i.length;
              a--;

            )
              ((r = i[a]).selected =
                b.inArray(b.valHooks.option.get(r), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    b.each(['radio', 'checkbox'], function () {
      (b.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = b.inArray(b(e).val(), t) > -1);
        },
      }),
        h.checkOn ||
          (b.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    (h.focusin = 'onfocusin' in e);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  b.extend(b.event, {
    trigger: function (t, n, i, o) {
      var a,
        s,
        u,
        l,
        c,
        p,
        d,
        h,
        y = [i || r],
        m = f.call(t, 'type') ? t.type : t,
        x = f.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (
        ((s = h = u = i = i || r),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !bt.test(m + b.event.triggered) &&
          (m.indexOf('.') > -1 &&
            ((x = m.split('.')), (m = x.shift()), x.sort()),
          (c = m.indexOf(':') < 0 && 'on' + m),
          ((t = t[b.expando]
            ? t
            : new b.Event(m, 'object' === _typeof(t) && t)).isTrigger = o
            ? 2
            : 3),
          (t.namespace = x.join('.')),
          (t.rnamespace = t.namespace
            ? new RegExp('(^|\\.)' + x.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : b.makeArray(n, [t])),
          (d = b.event.special[m] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!o && !d.noBubble && !v(i)) {
          for (
            l = d.delegateType || m, bt.test(l + m) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            y.push(s), (u = s);
          u === (i.ownerDocument || r) &&
            y.push(u.defaultView || u.parentWindow || e);
        }
        for (a = 0; (s = y[a++]) && !t.isPropagationStopped(); )
          (h = s),
            (t.type = a > 1 ? l : d.bindType || m),
            (p = (Y.get(s, 'events') || {})[t.type] && Y.get(s, 'handle')) &&
              p.apply(s, n),
            (p = c && s[c]) &&
              p.apply &&
              V(s) &&
              ((t.result = p.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = m),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(y.pop(), n)) ||
            !V(i) ||
            (c &&
              g(i[m]) &&
              !v(i) &&
              ((u = i[c]) && (i[c] = null),
              (b.event.triggered = m),
              t.isPropagationStopped() && h.addEventListener(m, wt),
              i[m](),
              t.isPropagationStopped() && h.removeEventListener(m, wt),
              (b.event.triggered = void 0),
              u && (i[c] = u))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = b.extend(new b.Event(), n, { type: e, isSimulated: !0 });
      b.event.trigger(r, null, t);
    },
  }),
    b.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          b.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return b.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
      b.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
        var n = function (e) {
          b.event.simulate(t, e.target, b.event.fix(e));
        };
        b.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = Y.access(r, t);
            i || r.addEventListener(e, n, !0), Y.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = Y.access(r, t) - 1;
            i
              ? Y.access(r, t, i)
              : (r.removeEventListener(e, n, !0), Y.remove(r, t));
          },
        };
      });
  var Tt = e.location,
    Ct = Date.now(),
    Et = /\?/;
  b.parseXML = function (t) {
    var n;
    if (!t || 'string' != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, 'text/xml');
    } catch (e) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName('parsererror').length) ||
        b.error('Invalid XML: ' + t),
      n
    );
  };
  var St = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function Dt(e, t, n, r) {
    var i;
    if (Array.isArray(t))
      b.each(t, function (t, i) {
        n || St.test(e)
          ? r(e, i)
          : Dt(
              e + '[' + ('object' === _typeof(i) && null != i ? t : '') + ']',
              i,
              n,
              r,
            );
      });
    else if (n || 'object' !== x(t)) r(e, t);
    else for (i in t) Dt(e + '[' + i + ']', t[i], n, r);
  }
  (b.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = g(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !b.isPlainObject(e)))
      b.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Dt(n, e[n], t, i);
    return r.join('&');
  }),
    b.fn.extend({
      serialize: function () {
        return b.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = b.prop(this, 'elements');
          return e ? b.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !b(this).is(':disabled') &&
              Nt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = b(this).val();
            return null == n
              ? null
              : Array.isArray(n)
                ? b.map(n, function (e) {
                    return { name: t.name, value: e.replace(kt, '\r\n') };
                  })
                : { name: t.name, value: n.replace(kt, '\r\n') };
          })
          .get();
      },
    });
  var jt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = '*/'.concat('*'),
    _t = r.createElement('a');
  function Wt(e) {
    return function (t, n) {
      'string' != typeof t && ((n = t), (t = '*'));
      var r,
        i = 0,
        o = t.toLowerCase().match(P) || [];
      if (g(n))
        for (; (r = o[i++]); )
          '+' === r[0]
            ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function $t(e, t, n, r) {
    var i = {},
      o = e === Mt;
    function a(s) {
      var u;
      return (
        (i[s] = !0),
        b.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return 'string' != typeof l || o || i[l]
            ? o
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), a(l), !1);
        }),
        u
      );
    }
    return a(t.dataTypes[0]) || (!i['*'] && a('*'));
  }
  function Ft(e, t) {
    var n,
      r,
      i = b.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && b.extend(!0, e, r), e;
  }
  (_t.href = Tt.href),
    b.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: 'GET',
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Tt.protocol,
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': It,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': b.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, b.ajaxSettings), t) : Ft(b.ajaxSettings, e);
      },
      ajaxPrefilter: Wt(Rt),
      ajaxTransport: Wt(Mt),
      ajax: function (t, n) {
        'object' === _typeof(t) && ((n = t), (t = void 0)), (n = n || {});
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = b.ajaxSetup({}, n),
          g = h.context || h,
          v = h.context && (g.nodeType || g.jquery) ? b(g) : b.event,
          y = b.Deferred(),
          m = b.Callbacks('once memory'),
          x = h.statusCode || {},
          w = {},
          T = {},
          C = 'canceled',
          E = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!s)
                  for (s = {}; (t = Ht.exec(a)); )
                    s[t[1].toLowerCase() + ' '] = (
                      s[t[1].toLowerCase() + ' '] || []
                    ).concat(t[2]);
                t = s[e.toLowerCase() + ' '];
              }
              return null == t ? null : t.join(', ');
            },
            getAllResponseHeaders: function () {
              return c ? a : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                  (w[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == c && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) E.always(e[E.status]);
                else for (t in e) x[t] = [x[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || C;
              return i && i.abort(t), S(0, t), this;
            },
          };
        if (
          (y.promise(E),
          (h.url = ((t || h.url || Tt.href) + '').replace(
            Pt,
            Tt.protocol + '//',
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || '*').toLowerCase().match(P) || ['']),
          null == h.crossDomain)
        ) {
          l = r.createElement('a');
          try {
            (l.href = h.url),
              (l.href = l.href),
              (h.crossDomain =
                _t.protocol + '//' + _t.host != l.protocol + '//' + l.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            'string' != typeof h.data &&
            (h.data = b.param(h.data, h.traditional)),
          $t(Rt, h, n, E),
          c)
        )
          return E;
        for (p in ((f = b.event && h.global) &&
          0 == b.active++ &&
          b.event.trigger('ajaxStart'),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Ot.test(h.type)),
        (o = h.url.replace(qt, '')),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || '').indexOf(
                'application/x-www-form-urlencoded',
              ) &&
            (h.data = h.data.replace(jt, '+'))
          : ((d = h.url.slice(o.length)),
            h.data &&
              (h.processData || 'string' == typeof h.data) &&
              ((o += (Et.test(o) ? '&' : '?') + h.data), delete h.data),
            !1 === h.cache &&
              ((o = o.replace(Lt, '$1')),
              (d = (Et.test(o) ? '&' : '?') + '_=' + Ct++ + d)),
            (h.url = o + d)),
        h.ifModified &&
          (b.lastModified[o] &&
            E.setRequestHeader('If-Modified-Since', b.lastModified[o]),
          b.etag[o] && E.setRequestHeader('If-None-Match', b.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          E.setRequestHeader('Content-Type', h.contentType),
        E.setRequestHeader(
          'Accept',
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ('*' !== h.dataTypes[0] ? ', ' + It + '; q=0.01' : '')
            : h.accepts['*'],
        ),
        h.headers))
          E.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
          return E.abort();
        if (
          ((C = 'abort'),
          m.add(h.complete),
          E.done(h.success),
          E.fail(h.error),
          (i = $t(Mt, h, n, E)))
        ) {
          if (((E.readyState = 1), f && v.trigger('ajaxSend', [E, h]), c))
            return E;
          h.async &&
            h.timeout > 0 &&
            (u = e.setTimeout(function () {
              E.abort('timeout');
            }, h.timeout));
          try {
            (c = !1), i.send(w, S);
          } catch (e) {
            if (c) throw e;
            S(-1, e);
          }
        } else S(-1, 'No Transport');
        function S(t, n, r, s) {
          var l,
            p,
            d,
            w,
            T,
            C = n;
          c ||
            ((c = !0),
            u && e.clearTimeout(u),
            (i = void 0),
            (a = s || ''),
            (E.readyState = t > 0 ? 4 : 0),
            (l = (t >= 200 && t < 300) || 304 === t),
            r &&
              (w = (function (e, t, n) {
                for (
                  var r, i, o, a, s = e.contents, u = e.dataTypes;
                  '*' === u[0];

                )
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader('Content-Type'));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + ' ' + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(h, E, r)),
            (w = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ('*' === o) o = u;
                  else if ('*' !== u && u !== o) {
                    if (!(a = l[u + ' ' + o] || l['* ' + o]))
                      for (i in l)
                        if (
                          (s = i.split(' '))[1] === o &&
                          (a = l[u + ' ' + s[0]] || l['* ' + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: 'parsererror',
                            error: a
                              ? e
                              : 'No conversion from ' + u + ' to ' + o,
                          };
                        }
                  }
              return { state: 'success', data: t };
            })(h, w, E, l)),
            l
              ? (h.ifModified &&
                  ((T = E.getResponseHeader('Last-Modified')) &&
                    (b.lastModified[o] = T),
                  (T = E.getResponseHeader('etag')) && (b.etag[o] = T)),
                204 === t || 'HEAD' === h.type
                  ? (C = 'nocontent')
                  : 304 === t
                    ? (C = 'notmodified')
                    : ((C = w.state), (p = w.data), (l = !(d = w.error))))
              : ((d = C), (!t && C) || ((C = 'error'), t < 0 && (t = 0))),
            (E.status = t),
            (E.statusText = (n || C) + ''),
            l ? y.resolveWith(g, [p, C, E]) : y.rejectWith(g, [E, C, d]),
            E.statusCode(x),
            (x = void 0),
            f && v.trigger(l ? 'ajaxSuccess' : 'ajaxError', [E, h, l ? p : d]),
            m.fireWith(g, [E, C]),
            f &&
              (v.trigger('ajaxComplete', [E, h]),
              --b.active || b.event.trigger('ajaxStop')));
        }
        return E;
      },
      getJSON: function (e, t, n) {
        return b.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return b.get(e, void 0, t, 'script');
      },
    }),
    b.each(['get', 'post'], function (e, t) {
      b[t] = function (e, n, r, i) {
        return (
          g(n) && ((i = i || r), (r = n), (n = void 0)),
          b.ajax(
            b.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              b.isPlainObject(e) && e,
            ),
          )
        );
      };
    }),
    (b._evalUrl = function (e, t) {
      return b.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: { 'text script': function () {} },
        dataFilter: function (e) {
          b.globalEval(e, t);
        },
      });
    }),
    b.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (g(e) && (e = e.call(this[0])),
            (t = b(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return g(e)
          ? this.each(function (t) {
              b(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = b(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = g(e);
        return this.each(function (n) {
          b(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              b(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (b.expr.pseudos.hidden = function (e) {
      return !b.expr.pseudos.visible(e);
    }),
    (b.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (b.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Bt = { 0: 200, 1223: 204 },
    zt = b.ajaxSettings.xhr();
  (h.cors = !!zt && 'withCredentials' in zt),
    (h.ajax = zt = !!zt),
    b.ajaxTransport(function (t) {
      var n, r;
      if (h.cors || (zt && !t.crossDomain))
        return {
          send: function (i, o) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            for (a in (t.mimeType &&
              s.overrideMimeType &&
              s.overrideMimeType(t.mimeType),
            t.crossDomain ||
              i['X-Requested-With'] ||
              (i['X-Requested-With'] = 'XMLHttpRequest'),
            i))
              s.setRequestHeader(a, i[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    r =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.ontimeout =
                    s.onreadystatechange =
                      null),
                  'abort' === e
                    ? s.abort()
                    : 'error' === e
                      ? 'number' != typeof s.status
                        ? o(0, 'error')
                        : o(s.status, s.statusText)
                      : o(
                          Bt[s.status] || s.status,
                          s.statusText,
                          'text' !== (s.responseType || 'text') ||
                            'string' != typeof s.responseText
                            ? { binary: s.response }
                            : { text: s.responseText },
                          s.getAllResponseHeaders(),
                        ));
              };
            }),
              (s.onload = n()),
              (r = s.onerror = s.ontimeout = n('error')),
              void 0 !== s.onabort
                ? (s.onabort = r)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && r();
                      });
                  }),
              (n = n('abort'));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    b.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    b.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return b.globalEval(e), e;
        },
      },
    }),
    b.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    b.ajaxTransport('script', function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (i, o) {
            (t = b('<script>')
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                'load error',
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && o('error' === e.type ? 404 : 200, e.type);
                }),
              )),
              r.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  b.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = Xt.pop() || b.expando + '_' + Ct++;
      return (this[e] = !0), e;
    },
  }),
    b.ajaxPrefilter('json jsonp', function (t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (Vt.test(t.url)
            ? 'url'
            : 'string' == typeof t.data &&
              0 ===
                (t.contentType || '').indexOf(
                  'application/x-www-form-urlencoded',
                ) &&
              Vt.test(t.data) &&
              'data');
      if (s || 'jsonp' === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Vt, '$1' + i))
            : !1 !== t.jsonp &&
              (t.url += (Et.test(t.url) ? '&' : '?') + t.jsonp + '=' + i),
          (t.converters['script json'] = function () {
            return a || b.error(i + ' was not called'), a[0];
          }),
          (t.dataTypes[0] = 'json'),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? b(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), Xt.push(i)),
              a && g(o) && o(a[0]),
              (a = o = void 0);
          }),
          'script'
        );
    }),
    (h.createHTMLDocument =
      (((Ut = r.implementation.createHTMLDocument('').body).innerHTML =
        '<form></form><form></form>'),
      2 === Ut.childNodes.length)),
    (b.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (h.createHTMLDocument
              ? (((i = (t =
                  r.implementation.createHTMLDocument('')).createElement(
                  'base',
                )).href = r.location.href),
                t.head.appendChild(i))
              : (t = r)),
          (a = !n && []),
          (o = N.exec(e))
            ? [t.createElement(o[1])]
            : ((o = we([e], t, a)),
              a && a.length && b(a).remove(),
              b.merge([], o.childNodes)));
      var i, o, a;
    }),
    (b.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(' ');
      return (
        s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        g(t)
          ? ((n = t), (t = void 0))
          : t && 'object' === _typeof(t) && (i = 'POST'),
        a.length > 0 &&
          b
            .ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? b('<div>').append(b.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                },
            ),
        this
      );
    }),
    b.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (e, t) {
        b.fn[t] = function (e) {
          return this.on(t, e);
        };
      },
    ),
    (b.expr.pseudos.animated = function (e) {
      return b.grep(b.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (b.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = b.css(e, 'position'),
          c = b(e),
          f = {};
        'static' === l && (e.style.position = 'relative'),
          (s = c.offset()),
          (o = b.css(e, 'top')),
          (u = b.css(e, 'left')),
          ('absolute' === l || 'fixed' === l) && (o + u).indexOf('auto') > -1
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          g(t) && (t = t.call(e, n, b.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          'using' in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    b.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                b.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ('fixed' === b.css(r, 'position')) t = r.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = r.ownerDocument,
                e = r.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === b.css(e, 'position');

            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = b(e).offset()).top += b.css(e, 'borderTopWidth', !0)),
              (i.left += b.css(e, 'borderLeftWidth', !0)));
          }
          return {
            top: t.top - i.top - b.css(r, 'marginTop', !0),
            left: t.left - i.left - b.css(r, 'marginLeft', !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && 'static' === b.css(e, 'position');

          )
            e = e.offsetParent;
          return e || re;
        });
      },
    }),
    b.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (e, t) {
        var n = 'pageYOffset' === t;
        b.fn[e] = function (r) {
          return F(
            this,
            function (e, r, i) {
              var o;
              if (
                (v(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
              )
                return o ? o[t] : e[r];
              o
                ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                : (e[r] = i);
            },
            e,
            r,
            arguments.length,
          );
        };
      },
    ),
    b.each(['top', 'left'], function (e, t) {
      b.cssHooks[t] = ze(h.pixelPosition, function (e, n) {
        if (n)
          return (n = Be(e, t)), We.test(n) ? b(e).position()[t] + 'px' : n;
      });
    }),
    b.each({ Height: 'height', Width: 'width' }, function (e, t) {
      b.each(
        { padding: 'inner' + e, content: t, '': 'outer' + e },
        function (n, r) {
          b.fn[r] = function (i, o) {
            var a = arguments.length && (n || 'boolean' != typeof i),
              s = n || (!0 === i || !0 === o ? 'margin' : 'border');
            return F(
              this,
              function (t, n, i) {
                var o;
                return v(t)
                  ? 0 === r.indexOf('outer')
                    ? t['inner' + e]
                    : t.document.documentElement['client' + e]
                  : 9 === t.nodeType
                    ? ((o = t.documentElement),
                      Math.max(
                        t.body['scroll' + e],
                        o['scroll' + e],
                        t.body['offset' + e],
                        o['offset' + e],
                        o['client' + e],
                      ))
                    : void 0 === i
                      ? b.css(t, n, s)
                      : b.style(t, n, i, s);
              },
              t,
              a ? i : void 0,
              a,
            );
          };
        },
      );
    }),
    b.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' ',
      ),
      function (e, t) {
        b.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      },
    ),
    b.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    b.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n);
      },
    }),
    (b.proxy = function (e, t) {
      var n, r, i;
      if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
        return (
          (r = o.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)));
          }).guid = e.guid =
            e.guid || b.guid++),
          i
        );
    }),
    (b.holdReady = function (e) {
      e ? b.readyWait++ : b.ready(!0);
    }),
    (b.isArray = Array.isArray),
    (b.parseJSON = JSON.parse),
    (b.nodeName = A),
    (b.isFunction = g),
    (b.isWindow = v),
    (b.camelCase = X),
    (b.type = x),
    (b.now = Date.now),
    (b.isNumeric = function (e) {
      var t = b.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return b;
      });
  var Gt = e.jQuery,
    Yt = e.$;
  return (
    (b.noConflict = function (t) {
      return e.$ === b && (e.$ = Yt), t && e.jQuery === b && (e.jQuery = Gt), b;
    }),
    t || (e.jQuery = e.$ = b),
    b
  );
});
function _typeof(e) {
  return (_typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
}
!(function (e, t) {
  'object' ==
    ('undefined' == typeof exports ? 'undefined' : _typeof(exports)) &&
  'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
      ? define(t)
      : (e.Popper = t());
})(this, function () {
  'use strict';
  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }
  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
    return t ? n[t] : n;
  }
  function n(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }
  function o(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case 'HTML':
      case 'BODY':
        return e.ownerDocument.body;
      case '#document':
        return e.body;
    }
    var r = t(e),
      i = r.overflow,
      f = r.overflowX,
      s = r.overflowY;
    return /(auto|scroll|overlay)/.test(i + s + f) ? e : o(n(e));
  }
  function r(e) {
    return 11 === e ? G : 10 === e ? X : G || X;
  }
  function i(e) {
    if (!e) return document.documentElement;
    for (
      var n = r(10) ? document.body : null, o = e.offsetParent || null;
      o === n && e.nextElementSibling;

    )
      o = (e = e.nextElementSibling).offsetParent;
    var f = o && o.nodeName;
    return f && 'BODY' !== f && 'HTML' !== f
      ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(o.nodeName) &&
        'static' === t(o, 'position')
        ? i(o)
        : o
      : e
        ? e.ownerDocument.documentElement
        : document.documentElement;
  }
  function f(e) {
    return null === e.parentNode ? e : f(e.parentNode);
  }
  function s(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      o = n ? e : t,
      r = n ? t : e,
      a = document.createRange();
    a.setStart(o, 0), a.setEnd(r, 0);
    var p = a.commonAncestorContainer;
    if ((e !== p && t !== p) || o.contains(r))
      return (function (e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || i(e.firstElementChild) === e);
      })(p)
        ? p
        : i(p);
    var l = f(e);
    return l.host ? s(l.host, t) : s(e, f(t).host);
  }
  function a(e) {
    var t =
        'top' ===
        (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top')
          ? 'scrollTop'
          : 'scrollLeft',
      n = e.nodeName;
    if ('BODY' === n || 'HTML' === n) {
      var o = e.ownerDocument.documentElement;
      return (e.ownerDocument.scrollingElement || o)[t];
    }
    return e[t];
  }
  function p(e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      o = a(t, 'top'),
      r = a(t, 'left'),
      i = n ? -1 : 1;
    return (
      (e.top += o * i),
      (e.bottom += o * i),
      (e.left += r * i),
      (e.right += r * i),
      e
    );
  }
  function l(e, t) {
    var n = 'x' === t ? 'Left' : 'Top',
      o = 'Left' == n ? 'Right' : 'Bottom';
    return (
      parseFloat(e['border' + n + 'Width'], 10) +
      parseFloat(e['border' + o + 'Width'], 10)
    );
  }
  function u(e, t, n, o) {
    return U(
      t['offset' + e],
      t['scroll' + e],
      n['client' + e],
      n['offset' + e],
      n['scroll' + e],
      r(10)
        ? parseInt(n['offset' + e]) +
            parseInt(o['margin' + ('Height' === e ? 'Top' : 'Left')]) +
            parseInt(o['margin' + ('Height' === e ? 'Bottom' : 'Right')])
        : 0,
    );
  }
  function c(e) {
    var t = e.body,
      n = e.documentElement,
      o = r(10) && getComputedStyle(n);
    return { height: u('Height', t, n, o), width: u('Width', t, n, o) };
  }
  function d(e) {
    return Z({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }
  function h(e) {
    var n = {};
    try {
      if (r(10)) {
        n = e.getBoundingClientRect();
        var o = a(e, 'top'),
          i = a(e, 'left');
        (n.top += o), (n.left += i), (n.bottom += o), (n.right += i);
      } else n = e.getBoundingClientRect();
    } catch (e) {}
    var f = {
        left: n.left,
        top: n.top,
        width: n.right - n.left,
        height: n.bottom - n.top,
      },
      s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {},
      p = s.width || e.clientWidth || f.right - f.left,
      u = s.height || e.clientHeight || f.bottom - f.top,
      h = e.offsetWidth - p,
      m = e.offsetHeight - u;
    if (h || m) {
      var g = t(e);
      (h -= l(g, 'x')), (m -= l(g, 'y')), (f.width -= h), (f.height -= m);
    }
    return d(f);
  }
  function m(e, n) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      f = r(10),
      s = 'HTML' === n.nodeName,
      a = h(e),
      l = h(n),
      u = o(e),
      c = t(n),
      m = parseFloat(c.borderTopWidth, 10),
      g = parseFloat(c.borderLeftWidth, 10);
    i && s && ((l.top = U(l.top, 0)), (l.left = U(l.left, 0)));
    var v = d({
      top: a.top - l.top - m,
      left: a.left - l.left - g,
      width: a.width,
      height: a.height,
    });
    if (((v.marginTop = 0), (v.marginLeft = 0), !f && s)) {
      var b = parseFloat(c.marginTop, 10),
        w = parseFloat(c.marginLeft, 10);
      (v.top -= m - b),
        (v.bottom -= m - b),
        (v.left -= g - w),
        (v.right -= g - w),
        (v.marginTop = b),
        (v.marginLeft = w);
    }
    return (
      (f && !i ? n.contains(u) : n === u && 'BODY' !== u.nodeName) &&
        (v = p(v, n)),
      v
    );
  }
  function g(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      n = e.ownerDocument.documentElement,
      o = m(e, n),
      r = U(n.clientWidth, window.innerWidth || 0),
      i = U(n.clientHeight, window.innerHeight || 0),
      f = t ? 0 : a(n),
      s = t ? 0 : a(n, 'left');
    return d({
      top: f - o.top + o.marginTop,
      left: s - o.left + o.marginLeft,
      width: r,
      height: i,
    });
  }
  function v(e) {
    var o = e.nodeName;
    if ('BODY' === o || 'HTML' === o) return !1;
    if ('fixed' === t(e, 'position')) return !0;
    var r = n(e);
    return !!r && v(r);
  }
  function b(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;
    for (var n = e.parentElement; n && 'none' === t(n, 'transform'); )
      n = n.parentElement;
    return n || document.documentElement;
  }
  function w(e, t, r, i) {
    var f = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
      a = { top: 0, left: 0 },
      p = f ? b(e) : s(e, t);
    if ('viewport' === i) a = g(p, f);
    else {
      var l;
      'scrollParent' === i
        ? 'BODY' === (l = o(n(t))).nodeName &&
          (l = e.ownerDocument.documentElement)
        : (l = 'window' === i ? e.ownerDocument.documentElement : i);
      var u = m(l, p, f);
      if ('HTML' !== l.nodeName || v(p)) a = u;
      else {
        var d = c(e.ownerDocument),
          h = d.height,
          w = d.width;
        (a.top += u.top - u.marginTop),
          (a.bottom = h + u.top),
          (a.left += u.left - u.marginLeft),
          (a.right = w + u.left);
      }
    }
    var y = 'number' == typeof (r = r || 0);
    return (
      (a.left += y ? r : r.left || 0),
      (a.top += y ? r : r.top || 0),
      (a.right -= y ? r : r.right || 0),
      (a.bottom -= y ? r : r.bottom || 0),
      a
    );
  }
  function y(e) {
    return e.width * e.height;
  }
  function E(e, t, n, o, r) {
    var i = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var f = w(n, o, i, r),
      s = {
        top: { width: f.width, height: t.top - f.top },
        right: { width: f.right - t.right, height: f.height },
        bottom: { width: f.width, height: f.bottom - t.bottom },
        left: { width: t.left - f.left, height: f.height },
      },
      a = Object.keys(s)
        .map(function (e) {
          return Z({ key: e }, s[e], { area: y(s[e]) });
        })
        .sort(function (e, t) {
          return t.area - e.area;
        }),
      p = a.filter(function (e) {
        var t = e.width,
          o = e.height;
        return t >= n.clientWidth && o >= n.clientHeight;
      }),
      l = 0 < p.length ? p[0].key : a[0].key,
      u = e.split('-')[1];
    return l + (u ? '-' + u : '');
  }
  function x(e, t, n) {
    var o =
      3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return m(n, o ? b(t) : s(t, n), o);
  }
  function O(e) {
    var t = e.ownerDocument.defaultView.getComputedStyle(e),
      n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
      o = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
    return { width: e.offsetWidth + o, height: e.offsetHeight + n };
  }
  function L(e) {
    var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }
  function T(e, t, n) {
    n = n.split('-')[0];
    var o = O(e),
      r = { width: o.width, height: o.height },
      i = -1 !== ['right', 'left'].indexOf(n),
      f = i ? 'top' : 'left',
      s = i ? 'left' : 'top',
      a = i ? 'height' : 'width',
      p = i ? 'width' : 'height';
    return (
      (r[f] = t[f] + t[a] / 2 - o[a] / 2),
      (r[s] = n === s ? t[s] - o[p] : t[L(s)]),
      r
    );
  }
  function D(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function N(t, n, o) {
    return (
      (void 0 === o
        ? t
        : t.slice(
            0,
            (function (e, t, n) {
              if (Array.prototype.findIndex)
                return e.findIndex(function (e) {
                  return e[t] === n;
                });
              var o = D(e, function (e) {
                return e[t] === n;
              });
              return e.indexOf(o);
            })(t, 'name', o),
          )
      ).forEach(function (t) {
        t.function &&
          console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        var o = t.function || t.fn;
        t.enabled &&
          e(o) &&
          ((n.offsets.popper = d(n.offsets.popper)),
          (n.offsets.reference = d(n.offsets.reference)),
          (n = o(n, t)));
      }),
      n
    );
  }
  function F(e, t) {
    return e.some(function (e) {
      var n = e.name;
      return e.enabled && n === t;
    });
  }
  function S(e) {
    for (
      var t = [!1, 'ms', 'Webkit', 'Moz', 'O'],
        n = e.charAt(0).toUpperCase() + e.slice(1),
        o = 0;
      o < t.length;
      o++
    ) {
      var r = t[o],
        i = r ? '' + r + n : e;
      if (void 0 !== document.body.style[i]) return i;
    }
    return null;
  }
  function k(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  function H(e, t, n, r) {
    (n.updateBound = r),
      k(e).addEventListener('resize', n.updateBound, { passive: !0 });
    var i = o(e);
    return (
      (function e(t, n, r, i) {
        var f = 'BODY' === t.nodeName,
          s = f ? t.ownerDocument.defaultView : t;
        s.addEventListener(n, r, { passive: !0 }),
          f || e(o(s.parentNode), n, r, i),
          i.push(s);
      })(i, 'scroll', n.updateBound, n.scrollParents),
      (n.scrollElement = i),
      (n.eventsEnabled = !0),
      n
    );
  }
  function C() {
    var e, t;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((e = this.reference),
        (t = this.state),
        k(e).removeEventListener('resize', t.updateBound),
        t.scrollParents.forEach(function (e) {
          e.removeEventListener('scroll', t.updateBound);
        }),
        (t.updateBound = null),
        (t.scrollParents = []),
        (t.scrollElement = null),
        (t.eventsEnabled = !1),
        t)));
  }
  function B(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function A(e, t) {
    Object.keys(t).forEach(function (n) {
      var o = '';
      -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) &&
        B(t[n]) &&
        (o = 'px'),
        (e.style[n] = t[n] + o);
    });
  }
  function M(e, t, n) {
    var o = D(e, function (e) {
        return e.name === t;
      }),
      r =
        !!o &&
        e.some(function (e) {
          return e.name === n && e.enabled && e.order < o.order;
        });
    if (!r) {
      var i = '`' + t + '`';
      console.warn(
        '`' +
          n +
          '` modifier is required by ' +
          i +
          ' modifier in order to work, be sure to include it before ' +
          i +
          '!',
      );
    }
    return r;
  }
  function P(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      n = te.indexOf(e),
      o = te.slice(n + 1).concat(te.slice(0, n));
    return t ? o.reverse() : o;
  }
  function W(e, t, n, o) {
    var r = [0, 0],
      i = -1 !== ['right', 'left'].indexOf(o),
      f = e.split(/(\+|\-)/).map(function (e) {
        return e.trim();
      }),
      s = f.indexOf(
        D(f, function (e) {
          return -1 !== e.search(/,|\s/);
        }),
      );
    f[s] &&
      -1 === f[s].indexOf(',') &&
      console.warn(
        'Offsets separated by white space(s) are deprecated, use a comma (,) instead.',
      );
    var a = /\s*,\s*|\s+/,
      p =
        -1 === s
          ? [f]
          : [
              f.slice(0, s).concat([f[s].split(a)[0]]),
              [f[s].split(a)[1]].concat(f.slice(s + 1)),
            ];
    return (
      (p = p.map(function (e, o) {
        var r = (1 === o ? !i : i) ? 'height' : 'width',
          f = !1;
        return e
          .reduce(function (e, t) {
            return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t)
              ? ((e[e.length - 1] = t), (f = !0), e)
              : f
                ? ((e[e.length - 1] += t), (f = !1), e)
                : e.concat(t);
          }, [])
          .map(function (e) {
            return (function (e, t, n, o) {
              var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                i = +r[1],
                f = r[2];
              if (!i) return e;
              if (0 === f.indexOf('%')) {
                var s;
                switch (f) {
                  case '%p':
                    s = n;
                    break;
                  case '%':
                  case '%r':
                  default:
                    s = o;
                }
                return (d(s)[t] / 100) * i;
              }
              return 'vh' === f || 'vw' === f
                ? (('vh' === f
                    ? U(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0,
                      )
                    : U(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0,
                      )) /
                    100) *
                    i
                : i;
            })(e, r, t, n);
          });
      })).forEach(function (e, t) {
        e.forEach(function (n, o) {
          B(n) && (r[t] += n * ('-' === e[o - 1] ? -1 : 1));
        });
      }),
      r
    );
  }
  for (
    var j = Math.min,
      I = Math.floor,
      R = Math.round,
      U = Math.max,
      Y = 'undefined' != typeof window && 'undefined' != typeof document,
      V = ['Edge', 'Trident', 'Firefox'],
      q = 0,
      _ = 0;
    _ < V.length;
    _ += 1
  )
    if (Y && 0 <= navigator.userAgent.indexOf(V[_])) {
      q = 1;
      break;
    }
  var z =
      Y && window.Promise
        ? function (e) {
            var t = !1;
            return function () {
              t ||
                ((t = !0),
                window.Promise.resolve().then(function () {
                  (t = !1), e();
                }));
            };
          }
        : function (e) {
            var t = !1;
            return function () {
              t ||
                ((t = !0),
                setTimeout(function () {
                  (t = !1), e();
                }, q));
            };
          },
    G = Y && !(!window.MSInputMethodContext || !document.documentMode),
    X = Y && /MSIE 10/.test(navigator.userAgent),
    J = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    },
    K = (function () {
      function e(e, t) {
        for (var n, o = 0; o < t.length; o++)
          ((n = t[o]).enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    })(),
    Q = function (e, t, n) {
      return (
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
    },
    Z =
      Object.assign ||
      function (e) {
        for (var t, n = 1; n < arguments.length; n++)
          for (var o in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      },
    $ = Y && /Firefox/i.test(navigator.userAgent),
    ee = [
      'auto-start',
      'auto',
      'auto-end',
      'top-start',
      'top',
      'top-end',
      'right-start',
      'right',
      'right-end',
      'bottom-end',
      'bottom',
      'bottom-start',
      'left-end',
      'left',
      'left-start',
    ],
    te = ee.slice(3),
    ne = 'flip',
    oe = 'clockwise',
    re = 'counterclockwise',
    ie = (function () {
      function t(n, o) {
        var r = this,
          i =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        J(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(r.update);
          }),
          (this.update = z(this.update.bind(this))),
          (this.options = Z({}, t.Defaults, i)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = n && n.jquery ? n[0] : n),
          (this.popper = o && o.jquery ? o[0] : o),
          (this.options.modifiers = {}),
          Object.keys(Z({}, t.Defaults.modifiers, i.modifiers)).forEach(
            function (e) {
              r.options.modifiers[e] = Z(
                {},
                t.Defaults.modifiers[e] || {},
                i.modifiers ? i.modifiers[e] : {},
              );
            },
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (e) {
              return Z({ name: e }, r.options.modifiers[e]);
            })
            .sort(function (e, t) {
              return e.order - t.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              e(t.onLoad) &&
              t.onLoad(r.reference, r.popper, r.options, t, r.state);
          }),
          this.update();
        var f = this.options.eventsEnabled;
        f && this.enableEventListeners(), (this.state.eventsEnabled = f);
      }
      return (
        K(t, [
          {
            key: 'update',
            value: function () {
              return function () {
                if (!this.state.isDestroyed) {
                  var e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {},
                  };
                  (e.offsets.reference = x(
                    this.state,
                    this.popper,
                    this.reference,
                    this.options.positionFixed,
                  )),
                    (e.placement = E(
                      this.options.placement,
                      e.offsets.reference,
                      this.popper,
                      this.reference,
                      this.options.modifiers.flip.boundariesElement,
                      this.options.modifiers.flip.padding,
                    )),
                    (e.originalPlacement = e.placement),
                    (e.positionFixed = this.options.positionFixed),
                    (e.offsets.popper = T(
                      this.popper,
                      e.offsets.reference,
                      e.placement,
                    )),
                    (e.offsets.popper.position = this.options.positionFixed
                      ? 'fixed'
                      : 'absolute'),
                    (e = N(this.modifiers, e)),
                    this.state.isCreated
                      ? this.options.onUpdate(e)
                      : ((this.state.isCreated = !0), this.options.onCreate(e));
                }
              }.call(this);
            },
          },
          {
            key: 'destroy',
            value: function () {
              return function () {
                return (
                  (this.state.isDestroyed = !0),
                  F(this.modifiers, 'applyStyle') &&
                    (this.popper.removeAttribute('x-placement'),
                    (this.popper.style.position = ''),
                    (this.popper.style.top = ''),
                    (this.popper.style.left = ''),
                    (this.popper.style.right = ''),
                    (this.popper.style.bottom = ''),
                    (this.popper.style.willChange = ''),
                    (this.popper.style[S('transform')] = '')),
                  this.disableEventListeners(),
                  this.options.removeOnDestroy &&
                    this.popper.parentNode.removeChild(this.popper),
                  this
                );
              }.call(this);
            },
          },
          {
            key: 'enableEventListeners',
            value: function () {
              return function () {
                this.state.eventsEnabled ||
                  (this.state = H(
                    this.reference,
                    this.options,
                    this.state,
                    this.scheduleUpdate,
                  ));
              }.call(this);
            },
          },
          {
            key: 'disableEventListeners',
            value: function () {
              return C.call(this);
            },
          },
        ]),
        t
      );
    })();
  return (
    (ie.Utils = ('undefined' == typeof window ? global : window).PopperUtils),
    (ie.placements = ee),
    (ie.Defaults = {
      placement: 'bottom',
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (e) {
            var t = e.placement,
              n = t.split('-')[0],
              o = t.split('-')[1];
            if (o) {
              var r = e.offsets,
                i = r.reference,
                f = r.popper,
                s = -1 !== ['bottom', 'top'].indexOf(n),
                a = s ? 'left' : 'top',
                p = s ? 'width' : 'height',
                l = {
                  start: Q({}, a, i[a]),
                  end: Q({}, a, i[a] + i[p] - f[p]),
                };
              e.offsets.popper = Z({}, f, l[o]);
            }
            return e;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (e, t) {
            var n,
              o = t.offset,
              r = e.placement,
              i = e.offsets,
              f = i.popper,
              s = i.reference,
              a = r.split('-')[0];
            return (
              (n = B(+o) ? [+o, 0] : W(o, f, s, a)),
              'left' === a
                ? ((f.top += n[0]), (f.left -= n[1]))
                : 'right' === a
                  ? ((f.top += n[0]), (f.left += n[1]))
                  : 'top' === a
                    ? ((f.left += n[0]), (f.top -= n[1]))
                    : 'bottom' === a && ((f.left += n[0]), (f.top += n[1])),
              (e.popper = f),
              e
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (e, t) {
            var n = t.boundariesElement || i(e.instance.popper);
            e.instance.reference === n && (n = i(n));
            var o = S('transform'),
              r = e.instance.popper.style,
              f = r.top,
              s = r.left,
              a = r[o];
            (r.top = ''), (r.left = ''), (r[o] = '');
            var p = w(
              e.instance.popper,
              e.instance.reference,
              t.padding,
              n,
              e.positionFixed,
            );
            (r.top = f), (r.left = s), (r[o] = a), (t.boundaries = p);
            var l = t.priority,
              u = e.offsets.popper,
              c = {
                primary: function (e) {
                  var n = u[e];
                  return (
                    u[e] < p[e] &&
                      !t.escapeWithReference &&
                      (n = U(u[e], p[e])),
                    Q({}, e, n)
                  );
                },
                secondary: function (e) {
                  var n = 'right' === e ? 'left' : 'top',
                    o = u[n];
                  return (
                    u[e] > p[e] &&
                      !t.escapeWithReference &&
                      (o = j(
                        u[n],
                        p[e] - ('right' === e ? u.width : u.height),
                      )),
                    Q({}, n, o)
                  );
                },
              };
            return (
              l.forEach(function (e) {
                var t =
                  -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                u = Z({}, u, c[t](e));
              }),
              (e.offsets.popper = u),
              e
            );
          },
          priority: ['left', 'right', 'top', 'bottom'],
          padding: 5,
          boundariesElement: 'scrollParent',
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (e) {
            var t = e.offsets,
              n = t.popper,
              o = t.reference,
              r = e.placement.split('-')[0],
              i = I,
              f = -1 !== ['top', 'bottom'].indexOf(r),
              s = f ? 'right' : 'bottom',
              a = f ? 'left' : 'top',
              p = f ? 'width' : 'height';
            return (
              n[s] < i(o[a]) && (e.offsets.popper[a] = i(o[a]) - n[p]),
              n[a] > i(o[s]) && (e.offsets.popper[a] = i(o[s])),
              e
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (e, n) {
            var o;
            if (!M(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
            var r = n.element;
            if ('string' == typeof r) {
              if (!(r = e.instance.popper.querySelector(r))) return e;
            } else if (!e.instance.popper.contains(r))
              return (
                console.warn(
                  'WARNING: `arrow.element` must be child of its popper element!',
                ),
                e
              );
            var i = e.placement.split('-')[0],
              f = e.offsets,
              s = f.popper,
              a = f.reference,
              p = -1 !== ['left', 'right'].indexOf(i),
              l = p ? 'height' : 'width',
              u = p ? 'Top' : 'Left',
              c = u.toLowerCase(),
              h = p ? 'left' : 'top',
              m = p ? 'bottom' : 'right',
              g = O(r)[l];
            a[m] - g < s[c] && (e.offsets.popper[c] -= s[c] - (a[m] - g)),
              a[c] + g > s[m] && (e.offsets.popper[c] += a[c] + g - s[m]),
              (e.offsets.popper = d(e.offsets.popper));
            var v = a[c] + a[l] / 2 - g / 2,
              b = t(e.instance.popper),
              w = parseFloat(b['margin' + u], 10),
              y = parseFloat(b['border' + u + 'Width'], 10),
              E = v - e.offsets.popper[c] - w - y;
            return (
              (E = U(j(s[l] - g, E), 0)),
              (e.arrowElement = r),
              (e.offsets.arrow = (Q((o = {}), c, R(E)), Q(o, h, ''), o)),
              e
            );
          },
          element: '[x-arrow]',
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (e, t) {
            if (F(e.instance.modifiers, 'inner')) return e;
            if (e.flipped && e.placement === e.originalPlacement) return e;
            var n = w(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                t.boundariesElement,
                e.positionFixed,
              ),
              o = e.placement.split('-')[0],
              r = L(o),
              i = e.placement.split('-')[1] || '',
              f = [];
            switch (t.behavior) {
              case ne:
                f = [o, r];
                break;
              case oe:
                f = P(o);
                break;
              case re:
                f = P(o, !0);
                break;
              default:
                f = t.behavior;
            }
            return (
              f.forEach(function (s, a) {
                if (o !== s || f.length === a + 1) return e;
                (o = e.placement.split('-')[0]), (r = L(o));
                var p = e.offsets.popper,
                  l = e.offsets.reference,
                  u = I,
                  c =
                    ('left' === o && u(p.right) > u(l.left)) ||
                    ('right' === o && u(p.left) < u(l.right)) ||
                    ('top' === o && u(p.bottom) > u(l.top)) ||
                    ('bottom' === o && u(p.top) < u(l.bottom)),
                  d = u(p.left) < u(n.left),
                  h = u(p.right) > u(n.right),
                  m = u(p.top) < u(n.top),
                  g = u(p.bottom) > u(n.bottom),
                  v =
                    ('left' === o && d) ||
                    ('right' === o && h) ||
                    ('top' === o && m) ||
                    ('bottom' === o && g),
                  b = -1 !== ['top', 'bottom'].indexOf(o),
                  w =
                    !!t.flipVariations &&
                    ((b && 'start' === i && d) ||
                      (b && 'end' === i && h) ||
                      (!b && 'start' === i && m) ||
                      (!b && 'end' === i && g)),
                  y =
                    !!t.flipVariationsByContent &&
                    ((b && 'start' === i && h) ||
                      (b && 'end' === i && d) ||
                      (!b && 'start' === i && g) ||
                      (!b && 'end' === i && m)),
                  E = w || y;
                (c || v || E) &&
                  ((e.flipped = !0),
                  (c || v) && (o = f[a + 1]),
                  E &&
                    (i = (function (e) {
                      return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
                    })(i)),
                  (e.placement = o + (i ? '-' + i : '')),
                  (e.offsets.popper = Z(
                    {},
                    e.offsets.popper,
                    T(e.instance.popper, e.offsets.reference, e.placement),
                  )),
                  (e = N(e.instance.modifiers, e, 'flip')));
              }),
              e
            );
          },
          behavior: 'flip',
          padding: 5,
          boundariesElement: 'viewport',
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (e) {
            var t = e.placement,
              n = t.split('-')[0],
              o = e.offsets,
              r = o.popper,
              i = o.reference,
              f = -1 !== ['left', 'right'].indexOf(n),
              s = -1 === ['top', 'left'].indexOf(n);
            return (
              (r[f ? 'left' : 'top'] =
                i[n] - (s ? r[f ? 'width' : 'height'] : 0)),
              (e.placement = L(t)),
              (e.offsets.popper = d(r)),
              e
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (e) {
            if (!M(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
            var t = e.offsets.reference,
              n = D(e.instance.modifiers, function (e) {
                return 'preventOverflow' === e.name;
              }).boundaries;
            if (
              t.bottom < n.top ||
              t.left > n.right ||
              t.top > n.bottom ||
              t.right < n.left
            ) {
              if (!0 === e.hide) return e;
              (e.hide = !0), (e.attributes['x-out-of-boundaries'] = '');
            } else {
              if (!1 === e.hide) return e;
              (e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1);
            }
            return e;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (e, t) {
            var n = t.x,
              o = t.y,
              r = e.offsets.popper,
              f = D(e.instance.modifiers, function (e) {
                return 'applyStyle' === e.name;
              }).gpuAcceleration;
            void 0 !== f &&
              console.warn(
                'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!',
              );
            var s,
              a,
              p = void 0 === f ? t.gpuAcceleration : f,
              l = i(e.instance.popper),
              u = h(l),
              c = { position: r.position },
              d = (function (e, t) {
                var n = e.offsets,
                  o = n.popper,
                  r = n.reference,
                  i = R,
                  f = function (e) {
                    return e;
                  },
                  s = i(r.width),
                  a = i(o.width),
                  p = -1 !== ['left', 'right'].indexOf(e.placement),
                  l = -1 !== e.placement.indexOf('-'),
                  u = t ? (p || l || s % 2 == a % 2 ? i : I) : f,
                  c = t ? i : f;
                return {
                  left: u(
                    1 == s % 2 && 1 == a % 2 && !l && t ? o.left - 1 : o.left,
                  ),
                  top: c(o.top),
                  bottom: c(o.bottom),
                  right: u(o.right),
                };
              })(e, 2 > window.devicePixelRatio || !$),
              m = 'bottom' === n ? 'top' : 'bottom',
              g = 'right' === o ? 'left' : 'right',
              v = S('transform');
            if (
              ((a =
                'bottom' == m
                  ? 'HTML' === l.nodeName
                    ? -l.clientHeight + d.bottom
                    : -u.height + d.bottom
                  : d.top),
              (s =
                'right' == g
                  ? 'HTML' === l.nodeName
                    ? -l.clientWidth + d.right
                    : -u.width + d.right
                  : d.left),
              p && v)
            )
              (c[v] = 'translate3d(' + s + 'px, ' + a + 'px, 0)'),
                (c[m] = 0),
                (c[g] = 0),
                (c.willChange = 'transform');
            else {
              var b = 'bottom' == m ? -1 : 1,
                w = 'right' == g ? -1 : 1;
              (c[m] = a * b), (c[g] = s * w), (c.willChange = m + ', ' + g);
            }
            var y = { 'x-placement': e.placement };
            return (
              (e.attributes = Z({}, y, e.attributes)),
              (e.styles = Z({}, c, e.styles)),
              (e.arrowStyles = Z({}, e.offsets.arrow, e.arrowStyles)),
              e
            );
          },
          gpuAcceleration: !0,
          x: 'bottom',
          y: 'right',
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (e) {
            return (
              A(e.instance.popper, e.styles),
              (function (e, t) {
                Object.keys(t).forEach(function (n) {
                  !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
                });
              })(e.instance.popper, e.attributes),
              e.arrowElement &&
                Object.keys(e.arrowStyles).length &&
                A(e.arrowElement, e.arrowStyles),
              e
            );
          },
          onLoad: function (e, t, n, o, r) {
            var i = x(r, t, e, n.positionFixed),
              f = E(
                n.placement,
                i,
                t,
                e,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding,
              );
            return (
              t.setAttribute('x-placement', f),
              A(t, { position: n.positionFixed ? 'fixed' : 'absolute' }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    }),
    ie
  );
});
function _typeof(t) {
  return (_typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
!(function (t, e) {
  'object' ===
    ('undefined' == typeof exports ? 'undefined' : _typeof(exports)) &&
  'undefined' != typeof module
    ? e(exports, require('jquery'), require('popper.js'))
    : 'function' == typeof define && define.amd
      ? define(['exports', 'jquery', 'popper.js'], e)
      : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, e, n) {
  'use strict';
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function s(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function r(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        i = Object.keys(n);
      'function' == typeof Object.getOwnPropertySymbols &&
        (i = i.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }),
        )),
        i.forEach(function (e) {
          s(t, e, n[e]);
        });
    }
    return t;
  }
  (e = e && e.hasOwnProperty('default') ? e.default : e),
    (n = n && n.hasOwnProperty('default') ? n.default : n);
  var a = 'transitionend';
  function l(t) {
    var n = this,
      i = !1;
    return (
      e(this).one(c.TRANSITION_END, function () {
        i = !0;
      }),
      setTimeout(function () {
        i || c.triggerTransitionEnd(n);
      }, t),
      this
    );
  }
  var c = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function (t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute('data-target');
      if (!e || '#' === e) {
        var n = t.getAttribute('href');
        e = n && '#' !== n ? n.trim() : '';
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var n = e(t).css('transition-duration'),
        i = e(t).css('transition-delay'),
        o = parseFloat(n),
        s = parseFloat(i);
      return o || s
        ? ((n = n.split(',')[0]),
          (i = i.split(',')[0]),
          1e3 * (parseFloat(n) + parseFloat(i)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      e(t).trigger(a);
    },
    supportsTransitionEnd: function () {
      return Boolean(a);
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            s = e[i],
            r =
              s && c.isElement(s)
                ? 'element'
                : ((a = s),
                  {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase());
          if (!new RegExp(o).test(r))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                r +
                '" but expected type "' +
                o +
                '".',
            );
        }
      var a;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ('function' == typeof t.getRootNode) {
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
          ? c.findShadowRoot(t.parentNode)
          : null;
    },
  };
  (e.fn.emulateTransitionEnd = l),
    (e.event.special[c.TRANSITION_END] = {
      bindType: a,
      delegateType: a,
      handle: function (t) {
        if (e(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var h = e.fn.alert,
    u = {
      CLOSE: 'close.bs.alert',
      CLOSED: 'closed.bs.alert',
      CLICK_DATA_API: 'click.bs.alert.data-api',
    },
    f = 'alert',
    d = 'fade',
    _ = 'show',
    g = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (n.dispose = function () {
          e.removeData(this._element, 'bs.alert'), (this._element = null);
        }),
        (n._getRootElement = function (t) {
          var n = c.getSelectorFromElement(t),
            i = !1;
          return (
            n && (i = document.querySelector(n)),
            i || (i = e(t).closest('.' + f)[0]),
            i
          );
        }),
        (n._triggerCloseEvent = function (t) {
          var n = e.Event(u.CLOSE);
          return e(t).trigger(n), n;
        }),
        (n._removeElement = function (t) {
          var n = this;
          if ((e(t).removeClass(_), e(t).hasClass(d))) {
            var i = c.getTransitionDurationFromElement(t);
            e(t)
              .one(c.TRANSITION_END, function (e) {
                return n._destroyElement(t, e);
              })
              .emulateTransitionEnd(i);
          } else this._destroyElement(t);
        }),
        (n._destroyElement = function (t) {
          e(t).detach().trigger(u.CLOSED).remove();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data('bs.alert');
            o || ((o = new t(this)), i.data('bs.alert', o)),
              'close' === n && o[n](this);
          });
        }),
        (t._handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    u.CLICK_DATA_API,
    '[data-dismiss="alert"]',
    g._handleDismiss(new g()),
  ),
    (e.fn.alert = g._jQueryInterface),
    (e.fn.alert.Constructor = g),
    (e.fn.alert.noConflict = function () {
      return (e.fn.alert = h), g._jQueryInterface;
    });
  var m = e.fn.button,
    p = 'active',
    v = 'btn',
    E = 'focus',
    b = '[data-toggle^="button"]',
    y = '[data-toggle="buttons"]',
    T = 'input:not([type="hidden"])',
    C = '.active',
    S = '.btn',
    I = {
      CLICK_DATA_API: 'click.bs.button.data-api',
      FOCUS_BLUR_DATA_API: 'focus.bs.button.data-api blur.bs.button.data-api',
    },
    D = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.toggle = function () {
          var t = !0,
            n = !0,
            i = e(this._element).closest(y)[0];
          if (i) {
            var o = this._element.querySelector(T);
            if (o) {
              if ('radio' === o.type)
                if (o.checked && this._element.classList.contains(p)) t = !1;
                else {
                  var s = i.querySelector(C);
                  s && e(s).removeClass(p);
                }
              if (t) {
                if (
                  o.hasAttribute('disabled') ||
                  i.hasAttribute('disabled') ||
                  o.classList.contains('disabled') ||
                  i.classList.contains('disabled')
                )
                  return;
                (o.checked = !this._element.classList.contains(p)),
                  e(o).trigger('change');
              }
              o.focus(), (n = !1);
            }
          }
          n &&
            this._element.setAttribute(
              'aria-pressed',
              !this._element.classList.contains(p),
            ),
            t && e(this._element).toggleClass(p);
        }),
        (n.dispose = function () {
          e.removeData(this._element, 'bs.button'), (this._element = null);
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data('bs.button');
            i || ((i = new t(this)), e(this).data('bs.button', i)),
              'toggle' === n && i[n]();
          });
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
        ]),
        t
      );
    })();
  e(document)
    .on(I.CLICK_DATA_API, b, function (t) {
      t.preventDefault();
      var n = t.target;
      e(n).hasClass(v) || (n = e(n).closest(S)),
        D._jQueryInterface.call(e(n), 'toggle');
    })
    .on(I.FOCUS_BLUR_DATA_API, b, function (t) {
      var n = e(t.target).closest(S)[0];
      e(n).toggleClass(E, /^focus(in)?$/.test(t.type));
    }),
    (e.fn.button = D._jQueryInterface),
    (e.fn.button.Constructor = D),
    (e.fn.button.noConflict = function () {
      return (e.fn.button = m), D._jQueryInterface;
    });
  var A = 'carousel',
    w = '.bs.carousel',
    N = e.fn[A],
    O = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: 'hover',
      wrap: !0,
      touch: !0,
    },
    k = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean',
    },
    L = 'next',
    P = 'prev',
    R = 'left',
    j = 'right',
    H = {
      SLIDE: 'slide.bs.carousel',
      SLID: 'slid.bs.carousel',
      KEYDOWN: 'keydown.bs.carousel',
      MOUSEENTER: 'mouseenter.bs.carousel',
      MOUSELEAVE: 'mouseleave.bs.carousel',
      TOUCHSTART: 'touchstart.bs.carousel',
      TOUCHMOVE: 'touchmove.bs.carousel',
      TOUCHEND: 'touchend.bs.carousel',
      POINTERDOWN: 'pointerdown.bs.carousel',
      POINTERUP: 'pointerup.bs.carousel',
      DRAG_START: 'dragstart.bs.carousel',
      LOAD_DATA_API: 'load.bs.carousel.data-api',
      CLICK_DATA_API: 'click.bs.carousel.data-api',
    },
    M = 'carousel',
    W = 'active',
    F = 'slide',
    U = 'carousel-item-right',
    x = 'carousel-item-left',
    K = 'carousel-item-next',
    q = 'carousel-item-prev',
    V = 'pointer-event',
    Q = {
      ACTIVE: '.active',
      ACTIVE_ITEM: '.active.carousel-item',
      ITEM: '.carousel-item',
      ITEM_IMG: '.carousel-item img',
      NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
      INDICATORS: '.carousel-indicators',
      DATA_SLIDE: '[data-slide], [data-slide-to]',
      DATA_RIDE: '[data-ride="carousel"]',
    },
    B = { TOUCH: 'touch', PEN: 'pen' },
    Y = (function () {
      function t(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(Q.INDICATORS)),
          (this._touchSupported =
            'ontouchstart' in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent,
          )),
          this._addEventListeners();
      }
      var n = t.prototype;
      return (
        (n.next = function () {
          this._isSliding || this._slide(L);
        }),
        (n.nextWhenVisible = function () {
          !document.hidden &&
            e(this._element).is(':visible') &&
            'hidden' !== e(this._element).css('visibility') &&
            this.next();
        }),
        (n.prev = function () {
          this._isSliding || this._slide(P);
        }),
        (n.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(Q.NEXT_PREV) &&
              (c.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (n.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval,
              ));
        }),
        (n.to = function (t) {
          var n = this;
          this._activeElement = this._element.querySelector(Q.ACTIVE_ITEM);
          var i = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              e(this._element).one(H.SLID, function () {
                return n.to(t);
              });
            else {
              if (i === t) return this.pause(), void this.cycle();
              var o = t > i ? L : P;
              this._slide(o, this._items[t]);
            }
        }),
        (n.dispose = function () {
          e(this._element).off(w),
            e.removeData(this._element, 'bs.carousel'),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (n._getConfig = function (t) {
          return (t = r({}, O, t)), c.typeCheckConfig(A, t, k), t;
        }),
        (n._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            e > 0 && this.prev(), e < 0 && this.next();
          }
        }),
        (n._addEventListeners = function () {
          var t = this;
          this._config.keyboard &&
            e(this._element).on(H.KEYDOWN, function (e) {
              return t._keydown(e);
            }),
            'hover' === this._config.pause &&
              e(this._element)
                .on(H.MOUSEENTER, function (e) {
                  return t.pause(e);
                })
                .on(H.MOUSELEAVE, function (e) {
                  return t.cycle(e);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (n._addTouchEventListeners = function () {
          var t = this;
          if (this._touchSupported) {
            var n = function (e) {
                t._pointerEvent && B[e.originalEvent.pointerType.toUpperCase()]
                  ? (t.touchStartX = e.originalEvent.clientX)
                  : t._pointerEvent ||
                    (t.touchStartX = e.originalEvent.touches[0].clientX);
              },
              i = function (e) {
                t._pointerEvent &&
                  B[e.originalEvent.pointerType.toUpperCase()] &&
                  (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                  t._handleSwipe(),
                  'hover' === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            e(this._element.querySelectorAll(Q.ITEM_IMG)).on(
              H.DRAG_START,
              function (t) {
                return t.preventDefault();
              },
            ),
              this._pointerEvent
                ? (e(this._element).on(H.POINTERDOWN, function (t) {
                    return n(t);
                  }),
                  e(this._element).on(H.POINTERUP, function (t) {
                    return i(t);
                  }),
                  this._element.classList.add(V))
                : (e(this._element).on(H.TOUCHSTART, function (t) {
                    return n(t);
                  }),
                  e(this._element).on(H.TOUCHMOVE, function (e) {
                    return (function (e) {
                      e.originalEvent.touches &&
                      e.originalEvent.touches.length > 1
                        ? (t.touchDeltaX = 0)
                        : (t.touchDeltaX =
                            e.originalEvent.touches[0].clientX - t.touchStartX);
                    })(e);
                  }),
                  e(this._element).on(H.TOUCHEND, function (t) {
                    return i(t);
                  }));
          }
        }),
        (n._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (n._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(Q.ITEM))
                : []),
            this._items.indexOf(t)
          );
        }),
        (n._getItemByDirection = function (t, e) {
          var n = t === L,
            i = t === P,
            o = this._getItemIndex(e),
            s = this._items.length - 1;
          if (((i && 0 === o) || (n && o === s)) && !this._config.wrap)
            return e;
          var r = (o + (t === P ? -1 : 1)) % this._items.length;
          return -1 === r
            ? this._items[this._items.length - 1]
            : this._items[r];
        }),
        (n._triggerSlideEvent = function (t, n) {
          var i = this._getItemIndex(t),
            o = this._getItemIndex(this._element.querySelector(Q.ACTIVE_ITEM)),
            s = e.Event(H.SLIDE, {
              relatedTarget: t,
              direction: n,
              from: o,
              to: i,
            });
          return e(this._element).trigger(s), s;
        }),
        (n._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var n = [].slice.call(
              this._indicatorsElement.querySelectorAll(Q.ACTIVE),
            );
            e(n).removeClass(W);
            var i = this._indicatorsElement.children[this._getItemIndex(t)];
            i && e(i).addClass(W);
          }
        }),
        (n._slide = function (t, n) {
          var i,
            o,
            s,
            r = this,
            a = this._element.querySelector(Q.ACTIVE_ITEM),
            l = this._getItemIndex(a),
            h = n || (a && this._getItemByDirection(t, a)),
            u = this._getItemIndex(h),
            f = Boolean(this._interval);
          if (
            (t === L
              ? ((i = x), (o = K), (s = R))
              : ((i = U), (o = q), (s = j)),
            h && e(h).hasClass(W))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(h, s).isDefaultPrevented() &&
            a &&
            h
          ) {
            (this._isSliding = !0),
              f && this.pause(),
              this._setActiveIndicatorElement(h);
            var d = e.Event(H.SLID, {
              relatedTarget: h,
              direction: s,
              from: l,
              to: u,
            });
            if (e(this._element).hasClass(F)) {
              e(h).addClass(o), c.reflow(h), e(a).addClass(i), e(h).addClass(i);
              var _ = parseInt(h.getAttribute('data-interval'), 10);
              _
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = _))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
              var g = c.getTransitionDurationFromElement(a);
              e(a)
                .one(c.TRANSITION_END, function () {
                  e(h)
                    .removeClass(i + ' ' + o)
                    .addClass(W),
                    e(a).removeClass(W + ' ' + o + ' ' + i),
                    (r._isSliding = !1),
                    setTimeout(function () {
                      return e(r._element).trigger(d);
                    }, 0);
                })
                .emulateTransitionEnd(g);
            } else
              e(a).removeClass(W),
                e(h).addClass(W),
                (this._isSliding = !1),
                e(this._element).trigger(d);
            f && this.cycle();
          }
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data('bs.carousel'),
              o = r({}, O, e(this).data());
            'object' === _typeof(n) && (o = r({}, o, n));
            var s = 'string' == typeof n ? n : o.slide;
            if (
              (i || ((i = new t(this, o)), e(this).data('bs.carousel', i)),
              'number' == typeof n)
            )
              i.to(n);
            else if ('string' == typeof s) {
              if (void 0 === i[s])
                throw new TypeError('No method named "' + s + '"');
              i[s]();
            } else o.interval && o.ride && (i.pause(), i.cycle());
          });
        }),
        (t._dataApiClickHandler = function (n) {
          var i = c.getSelectorFromElement(this);
          if (i) {
            var o = e(i)[0];
            if (o && e(o).hasClass(M)) {
              var s = r({}, e(o).data(), e(this).data()),
                a = this.getAttribute('data-slide-to');
              a && (s.interval = !1),
                t._jQueryInterface.call(e(o), s),
                a && e(o).data('bs.carousel').to(a),
                n.preventDefault();
            }
          }
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return O;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(H.CLICK_DATA_API, Q.DATA_SLIDE, Y._dataApiClickHandler),
    e(window).on(H.LOAD_DATA_API, function () {
      for (
        var t = [].slice.call(document.querySelectorAll(Q.DATA_RIDE)),
          n = 0,
          i = t.length;
        n < i;
        n++
      ) {
        var o = e(t[n]);
        Y._jQueryInterface.call(o, o.data());
      }
    }),
    (e.fn[A] = Y._jQueryInterface),
    (e.fn[A].Constructor = Y),
    (e.fn[A].noConflict = function () {
      return (e.fn[A] = N), Y._jQueryInterface;
    });
  var G = 'collapse',
    X = e.fn[G],
    z = { toggle: !0, parent: '' },
    $ = { toggle: 'boolean', parent: '(string|element)' },
    J = {
      SHOW: 'show.bs.collapse',
      SHOWN: 'shown.bs.collapse',
      HIDE: 'hide.bs.collapse',
      HIDDEN: 'hidden.bs.collapse',
      CLICK_DATA_API: 'click.bs.collapse.data-api',
    },
    Z = 'show',
    tt = 'collapse',
    et = 'collapsing',
    nt = 'collapsed',
    it = 'width',
    ot = 'height',
    st = {
      ACTIVES: '.show, .collapsing',
      DATA_TOGGLE: '[data-toggle="collapse"]',
    },
    rt = (function () {
      function t(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                t.id +
                '"],[data-toggle="collapse"][data-target="#' +
                t.id +
                '"]',
            ),
          ));
        for (
          var n = [].slice.call(document.querySelectorAll(st.DATA_TOGGLE)),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var s = n[i],
            r = c.getSelectorFromElement(s),
            a = [].slice
              .call(document.querySelectorAll(r))
              .filter(function (e) {
                return e === t;
              });
          null !== r &&
            a.length > 0 &&
            ((this._selector = r), this._triggerArray.push(s));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var n = t.prototype;
      return (
        (n.toggle = function () {
          e(this._element).hasClass(Z) ? this.hide() : this.show();
        }),
        (n.show = function () {
          var n,
            i,
            o = this;
          if (
            !this._isTransitioning &&
            !e(this._element).hasClass(Z) &&
            (this._parent &&
              0 ===
                (n = [].slice
                  .call(this._parent.querySelectorAll(st.ACTIVES))
                  .filter(function (t) {
                    return 'string' == typeof o._config.parent
                      ? t.getAttribute('data-parent') === o._config.parent
                      : t.classList.contains(tt);
                  })).length &&
              (n = null),
            !(
              n &&
              (i = e(n).not(this._selector).data('bs.collapse')) &&
              i._isTransitioning
            ))
          ) {
            var s = e.Event(J.SHOW);
            if ((e(this._element).trigger(s), !s.isDefaultPrevented())) {
              n &&
                (t._jQueryInterface.call(e(n).not(this._selector), 'hide'),
                i || e(n).data('bs.collapse', null));
              var r = this._getDimension();
              e(this._element).removeClass(tt).addClass(et),
                (this._element.style[r] = 0),
                this._triggerArray.length &&
                  e(this._triggerArray)
                    .removeClass(nt)
                    .attr('aria-expanded', !0),
                this.setTransitioning(!0);
              var a = 'scroll' + (r[0].toUpperCase() + r.slice(1)),
                l = c.getTransitionDurationFromElement(this._element);
              e(this._element)
                .one(c.TRANSITION_END, function () {
                  e(o._element).removeClass(et).addClass(tt).addClass(Z),
                    (o._element.style[r] = ''),
                    o.setTransitioning(!1),
                    e(o._element).trigger(J.SHOWN);
                })
                .emulateTransitionEnd(l),
                (this._element.style[r] = this._element[a] + 'px');
            }
          }
        }),
        (n.hide = function () {
          var t = this;
          if (!this._isTransitioning && e(this._element).hasClass(Z)) {
            var n = e.Event(J.HIDE);
            if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
              var i = this._getDimension();
              (this._element.style[i] =
                this._element.getBoundingClientRect()[i] + 'px'),
                c.reflow(this._element),
                e(this._element).addClass(et).removeClass(tt).removeClass(Z);
              var o = this._triggerArray.length;
              if (o > 0)
                for (var s = 0; s < o; s++) {
                  var r = this._triggerArray[s],
                    a = c.getSelectorFromElement(r);
                  if (null !== a)
                    e([].slice.call(document.querySelectorAll(a))).hasClass(
                      Z,
                    ) || e(r).addClass(nt).attr('aria-expanded', !1);
                }
              this.setTransitioning(!0);
              this._element.style[i] = '';
              var l = c.getTransitionDurationFromElement(this._element);
              e(this._element)
                .one(c.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    e(t._element)
                      .removeClass(et)
                      .addClass(tt)
                      .trigger(J.HIDDEN);
                })
                .emulateTransitionEnd(l);
            }
          }
        }),
        (n.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (n.dispose = function () {
          e.removeData(this._element, 'bs.collapse'),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (n._getConfig = function (t) {
          return (
            ((t = r({}, z, t)).toggle = Boolean(t.toggle)),
            c.typeCheckConfig(G, t, $),
            t
          );
        }),
        (n._getDimension = function () {
          return e(this._element).hasClass(it) ? it : ot;
        }),
        (n._getParent = function () {
          var n,
            i = this;
          c.isElement(this._config.parent)
            ? ((n = this._config.parent),
              void 0 !== this._config.parent.jquery &&
                (n = this._config.parent[0]))
            : (n = document.querySelector(this._config.parent));
          var o =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            s = [].slice.call(n.querySelectorAll(o));
          return (
            e(s).each(function (e, n) {
              i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n]);
            }),
            n
          );
        }),
        (n._addAriaAndCollapsedClass = function (t, n) {
          var i = e(t).hasClass(Z);
          n.length && e(n).toggleClass(nt, !i).attr('aria-expanded', i);
        }),
        (t._getTargetFromElement = function (t) {
          var e = c.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data('bs.collapse'),
              s = r({}, z, i.data(), 'object' === _typeof(n) && n ? n : {});
            if (
              (!o && s.toggle && /show|hide/.test(n) && (s.toggle = !1),
              o || ((o = new t(this, s)), i.data('bs.collapse', o)),
              'string' == typeof n)
            ) {
              if (void 0 === o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n]();
            }
          });
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return z;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(J.CLICK_DATA_API, st.DATA_TOGGLE, function (t) {
    'A' === t.currentTarget.tagName && t.preventDefault();
    var n = e(this),
      i = c.getSelectorFromElement(this),
      o = [].slice.call(document.querySelectorAll(i));
    e(o).each(function () {
      var t = e(this),
        i = t.data('bs.collapse') ? 'toggle' : n.data();
      rt._jQueryInterface.call(t, i);
    });
  }),
    (e.fn[G] = rt._jQueryInterface),
    (e.fn[G].Constructor = rt),
    (e.fn[G].noConflict = function () {
      return (e.fn[G] = X), rt._jQueryInterface;
    });
  var at = 'dropdown',
    lt = e.fn[at],
    ct = new RegExp('38|40|27'),
    ht = {
      HIDE: 'hide.bs.dropdown',
      HIDDEN: 'hidden.bs.dropdown',
      SHOW: 'show.bs.dropdown',
      SHOWN: 'shown.bs.dropdown',
      CLICK: 'click.bs.dropdown',
      CLICK_DATA_API: 'click.bs.dropdown.data-api',
      KEYDOWN_DATA_API: 'keydown.bs.dropdown.data-api',
      KEYUP_DATA_API: 'keyup.bs.dropdown.data-api',
    },
    ut = 'disabled',
    ft = 'show',
    dt = 'dropup',
    _t = 'dropright',
    gt = 'dropleft',
    mt = 'dropdown-menu-right',
    pt = 'position-static',
    vt = '[data-toggle="dropdown"]',
    Et = '.dropdown form',
    bt = '.dropdown-menu',
    yt = '.navbar-nav',
    Tt = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
    Ct = 'top-start',
    St = 'top-end',
    It = 'bottom-start',
    Dt = 'bottom-end',
    At = 'right-start',
    wt = 'left-start',
    Nt = {
      offset: 0,
      flip: !0,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic',
    },
    Ot = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string',
    },
    kt = (function () {
      function t(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var i = t.prototype;
      return (
        (i.toggle = function () {
          if (!this._element.disabled && !e(this._element).hasClass(ut)) {
            var i = t._getParentFromElement(this._element),
              o = e(this._menu).hasClass(ft);
            if ((t._clearMenus(), !o)) {
              var s = { relatedTarget: this._element },
                r = e.Event(ht.SHOW, s);
              if ((e(i).trigger(r), !r.isDefaultPrevented())) {
                if (!this._inNavbar) {
                  if (void 0 === n)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)",
                    );
                  var a = this._element;
                  'parent' === this._config.reference
                    ? (a = i)
                    : c.isElement(this._config.reference) &&
                      ((a = this._config.reference),
                      void 0 !== this._config.reference.jquery &&
                        (a = this._config.reference[0])),
                    'scrollParent' !== this._config.boundary &&
                      e(i).addClass(pt),
                    (this._popper = new n(
                      a,
                      this._menu,
                      this._getPopperConfig(),
                    ));
                }
                'ontouchstart' in document.documentElement &&
                  0 === e(i).closest(yt).length &&
                  e(document.body).children().on('mouseover', null, e.noop),
                  this._element.focus(),
                  this._element.setAttribute('aria-expanded', !0),
                  e(this._menu).toggleClass(ft),
                  e(i).toggleClass(ft).trigger(e.Event(ht.SHOWN, s));
              }
            }
          }
        }),
        (i.show = function () {
          if (
            !(
              this._element.disabled ||
              e(this._element).hasClass(ut) ||
              e(this._menu).hasClass(ft)
            )
          ) {
            var n = { relatedTarget: this._element },
              i = e.Event(ht.SHOW, n),
              o = t._getParentFromElement(this._element);
            e(o).trigger(i),
              i.isDefaultPrevented() ||
                (e(this._menu).toggleClass(ft),
                e(o).toggleClass(ft).trigger(e.Event(ht.SHOWN, n)));
          }
        }),
        (i.hide = function () {
          if (
            !this._element.disabled &&
            !e(this._element).hasClass(ut) &&
            e(this._menu).hasClass(ft)
          ) {
            var n = { relatedTarget: this._element },
              i = e.Event(ht.HIDE, n),
              o = t._getParentFromElement(this._element);
            e(o).trigger(i),
              i.isDefaultPrevented() ||
                (e(this._menu).toggleClass(ft),
                e(o).toggleClass(ft).trigger(e.Event(ht.HIDDEN, n)));
          }
        }),
        (i.dispose = function () {
          e.removeData(this._element, 'bs.dropdown'),
            e(this._element).off('.bs.dropdown'),
            (this._element = null),
            (this._menu = null),
            null !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (i.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (i._addEventListeners = function () {
          var t = this;
          e(this._element).on(ht.CLICK, function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }),
        (i._getConfig = function (t) {
          return (
            (t = r({}, this.constructor.Default, e(this._element).data(), t)),
            c.typeCheckConfig(at, t, this.constructor.DefaultType),
            t
          );
        }),
        (i._getMenuElement = function () {
          if (!this._menu) {
            var e = t._getParentFromElement(this._element);
            e && (this._menu = e.querySelector(bt));
          }
          return this._menu;
        }),
        (i._getPlacement = function () {
          var t = e(this._element.parentNode),
            n = It;
          return (
            t.hasClass(dt)
              ? ((n = Ct), e(this._menu).hasClass(mt) && (n = St))
              : t.hasClass(_t)
                ? (n = At)
                : t.hasClass(gt)
                  ? (n = wt)
                  : e(this._menu).hasClass(mt) && (n = Dt),
            n
          );
        }),
        (i._detectNavbar = function () {
          return e(this._element).closest('.navbar').length > 0;
        }),
        (i._getOffset = function () {
          var t = this,
            e = {};
          return (
            'function' == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = r(
                      {},
                      e.offsets,
                      t._config.offset(e.offsets, t._element) || {},
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (i._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            'static' === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            t
          );
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data('bs.dropdown'),
              o = 'object' === _typeof(n) ? n : null;
            if (
              (i || ((i = new t(this, o)), e(this).data('bs.dropdown', i)),
              'string' == typeof n)
            ) {
              if (void 0 === i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        (t._clearMenus = function (n) {
          if (!n || (3 !== n.which && ('keyup' !== n.type || 9 === n.which)))
            for (
              var i = [].slice.call(document.querySelectorAll(vt)),
                o = 0,
                s = i.length;
              o < s;
              o++
            ) {
              var r = t._getParentFromElement(i[o]),
                a = e(i[o]).data('bs.dropdown'),
                l = { relatedTarget: i[o] };
              if ((n && 'click' === n.type && (l.clickEvent = n), a)) {
                var c = a._menu;
                if (
                  e(r).hasClass(ft) &&
                  !(
                    n &&
                    (('click' === n.type &&
                      /input|textarea/i.test(n.target.tagName)) ||
                      ('keyup' === n.type && 9 === n.which)) &&
                    e.contains(r, n.target)
                  )
                ) {
                  var h = e.Event(ht.HIDE, l);
                  e(r).trigger(h),
                    h.isDefaultPrevented() ||
                      ('ontouchstart' in document.documentElement &&
                        e(document.body)
                          .children()
                          .off('mouseover', null, e.noop),
                      i[o].setAttribute('aria-expanded', 'false'),
                      e(c).removeClass(ft),
                      e(r).removeClass(ft).trigger(e.Event(ht.HIDDEN, l)));
                }
              }
            }
        }),
        (t._getParentFromElement = function (t) {
          var e,
            n = c.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (t._dataApiKeydownHandler = function (n) {
          if (
            (/input|textarea/i.test(n.target.tagName)
              ? !(
                  32 === n.which ||
                  (27 !== n.which &&
                    ((40 !== n.which && 38 !== n.which) ||
                      e(n.target).closest(bt).length))
                )
              : ct.test(n.which)) &&
            (n.preventDefault(),
            n.stopPropagation(),
            !this.disabled && !e(this).hasClass(ut))
          ) {
            var i = t._getParentFromElement(this),
              o = e(i).hasClass(ft);
            if (o && (!o || (27 !== n.which && 32 !== n.which))) {
              var s = [].slice.call(i.querySelectorAll(Tt));
              if (0 !== s.length) {
                var r = s.indexOf(n.target);
                38 === n.which && r > 0 && r--,
                  40 === n.which && r < s.length - 1 && r++,
                  r < 0 && (r = 0),
                  s[r].focus();
              }
            } else {
              if (27 === n.which) {
                var a = i.querySelector(vt);
                e(a).trigger('focus');
              }
              e(this).trigger('click');
            }
          }
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return Nt;
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return Ot;
            },
          },
        ]),
        t
      );
    })();
  e(document)
    .on(ht.KEYDOWN_DATA_API, vt, kt._dataApiKeydownHandler)
    .on(ht.KEYDOWN_DATA_API, bt, kt._dataApiKeydownHandler)
    .on(ht.CLICK_DATA_API + ' ' + ht.KEYUP_DATA_API, kt._clearMenus)
    .on(ht.CLICK_DATA_API, vt, function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        kt._jQueryInterface.call(e(this), 'toggle');
    })
    .on(ht.CLICK_DATA_API, Et, function (t) {
      t.stopPropagation();
    }),
    (e.fn[at] = kt._jQueryInterface),
    (e.fn[at].Constructor = kt),
    (e.fn[at].noConflict = function () {
      return (e.fn[at] = lt), kt._jQueryInterface;
    });
  var Lt = e.fn.modal,
    Pt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    Rt = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean',
    },
    jt = {
      HIDE: 'hide.bs.modal',
      HIDDEN: 'hidden.bs.modal',
      SHOW: 'show.bs.modal',
      SHOWN: 'shown.bs.modal',
      FOCUSIN: 'focusin.bs.modal',
      RESIZE: 'resize.bs.modal',
      CLICK_DISMISS: 'click.dismiss.bs.modal',
      KEYDOWN_DISMISS: 'keydown.dismiss.bs.modal',
      MOUSEUP_DISMISS: 'mouseup.dismiss.bs.modal',
      MOUSEDOWN_DISMISS: 'mousedown.dismiss.bs.modal',
      CLICK_DATA_API: 'click.bs.modal.data-api',
    },
    Ht = 'modal-dialog-scrollable',
    Mt = 'modal-scrollbar-measure',
    Wt = 'modal-backdrop',
    Ft = 'modal-open',
    Ut = 'fade',
    xt = 'show',
    Kt = {
      DIALOG: '.modal-dialog',
      MODAL_BODY: '.modal-body',
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      STICKY_CONTENT: '.sticky-top',
    },
    qt = (function () {
      function t(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(Kt.DIALOG)),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var n = t.prototype;
      return (
        (n.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (n.show = function (t) {
          var n = this;
          if (!this._isShown && !this._isTransitioning) {
            e(this._element).hasClass(Ut) && (this._isTransitioning = !0);
            var i = e.Event(jt.SHOW, { relatedTarget: t });
            e(this._element).trigger(i),
              this._isShown ||
                i.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                e(this._element).on(
                  jt.CLICK_DISMISS,
                  Kt.DATA_DISMISS,
                  function (t) {
                    return n.hide(t);
                  },
                ),
                e(this._dialog).on(jt.MOUSEDOWN_DISMISS, function () {
                  e(n._element).one(jt.MOUSEUP_DISMISS, function (t) {
                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function () {
                  return n._showElement(t);
                }));
          }
        }),
        (n.hide = function (t) {
          var n = this;
          if (
            (t && t.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var i = e.Event(jt.HIDE);
            if (
              (e(this._element).trigger(i),
              this._isShown && !i.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var o = e(this._element).hasClass(Ut);
              if (
                (o && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                e(document).off(jt.FOCUSIN),
                e(this._element).removeClass(xt),
                e(this._element).off(jt.CLICK_DISMISS),
                e(this._dialog).off(jt.MOUSEDOWN_DISMISS),
                o)
              ) {
                var s = c.getTransitionDurationFromElement(this._element);
                e(this._element)
                  .one(c.TRANSITION_END, function (t) {
                    return n._hideModal(t);
                  })
                  .emulateTransitionEnd(s);
              } else this._hideModal();
            }
          }
        }),
        (n.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return e(t).off('.bs.modal');
          }),
            e(document).off(jt.FOCUSIN),
            e.removeData(this._element, 'bs.modal'),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (n.handleUpdate = function () {
          this._adjustDialog();
        }),
        (n._getConfig = function (t) {
          return (t = r({}, Pt, t)), c.typeCheckConfig('modal', t, Rt), t;
        }),
        (n._showElement = function (t) {
          var n = this,
            i = e(this._element).hasClass(Ut);
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = 'block'),
            this._element.removeAttribute('aria-hidden'),
            this._element.setAttribute('aria-modal', !0),
            e(this._dialog).hasClass(Ht)
              ? (this._dialog.querySelector(Kt.MODAL_BODY).scrollTop = 0)
              : (this._element.scrollTop = 0),
            i && c.reflow(this._element),
            e(this._element).addClass(xt),
            this._config.focus && this._enforceFocus();
          var o = e.Event(jt.SHOWN, { relatedTarget: t }),
            s = function () {
              n._config.focus && n._element.focus(),
                (n._isTransitioning = !1),
                e(n._element).trigger(o);
            };
          if (i) {
            var r = c.getTransitionDurationFromElement(this._dialog);
            e(this._dialog).one(c.TRANSITION_END, s).emulateTransitionEnd(r);
          } else s();
        }),
        (n._enforceFocus = function () {
          var t = this;
          e(document)
            .off(jt.FOCUSIN)
            .on(jt.FOCUSIN, function (n) {
              document !== n.target &&
                t._element !== n.target &&
                0 === e(t._element).has(n.target).length &&
                t._element.focus();
            });
        }),
        (n._setEscapeEvent = function () {
          var t = this;
          this._isShown && this._config.keyboard
            ? e(this._element).on(jt.KEYDOWN_DISMISS, function (e) {
                27 === e.which && (e.preventDefault(), t.hide());
              })
            : this._isShown || e(this._element).off(jt.KEYDOWN_DISMISS);
        }),
        (n._setResizeEvent = function () {
          var t = this;
          this._isShown
            ? e(window).on(jt.RESIZE, function (e) {
                return t.handleUpdate(e);
              })
            : e(window).off(jt.RESIZE);
        }),
        (n._hideModal = function () {
          var t = this;
          (this._element.style.display = 'none'),
            this._element.setAttribute('aria-hidden', !0),
            this._element.removeAttribute('aria-modal'),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              e(document.body).removeClass(Ft),
                t._resetAdjustments(),
                t._resetScrollbar(),
                e(t._element).trigger(jt.HIDDEN);
            });
        }),
        (n._removeBackdrop = function () {
          this._backdrop &&
            (e(this._backdrop).remove(), (this._backdrop = null));
        }),
        (n._showBackdrop = function (t) {
          var n = this,
            i = e(this._element).hasClass(Ut) ? Ut : '';
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement('div')),
              (this._backdrop.className = Wt),
              i && this._backdrop.classList.add(i),
              e(this._backdrop).appendTo(document.body),
              e(this._element).on(jt.CLICK_DISMISS, function (t) {
                n._ignoreBackdropClick
                  ? (n._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    ('static' === n._config.backdrop
                      ? n._element.focus()
                      : n.hide());
              }),
              i && c.reflow(this._backdrop),
              e(this._backdrop).addClass(xt),
              !t)
            )
              return;
            if (!i) return void t();
            var o = c.getTransitionDurationFromElement(this._backdrop);
            e(this._backdrop).one(c.TRANSITION_END, t).emulateTransitionEnd(o);
          } else if (!this._isShown && this._backdrop) {
            e(this._backdrop).removeClass(xt);
            var s = function () {
              n._removeBackdrop(), t && t();
            };
            if (e(this._element).hasClass(Ut)) {
              var r = c.getTransitionDurationFromElement(this._backdrop);
              e(this._backdrop)
                .one(c.TRANSITION_END, s)
                .emulateTransitionEnd(r);
            } else s();
          } else t && t();
        }),
        (n._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + 'px');
        }),
        (n._resetAdjustments = function () {
          (this._element.style.paddingLeft = ''),
            (this._element.style.paddingRight = '');
        }),
        (n._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (n._setScrollbar = function () {
          var t = this;
          if (this._isBodyOverflowing) {
            var n = [].slice.call(document.querySelectorAll(Kt.FIXED_CONTENT)),
              i = [].slice.call(document.querySelectorAll(Kt.STICKY_CONTENT));
            e(n).each(function (n, i) {
              var o = i.style.paddingRight,
                s = e(i).css('padding-right');
              e(i)
                .data('padding-right', o)
                .css('padding-right', parseFloat(s) + t._scrollbarWidth + 'px');
            }),
              e(i).each(function (n, i) {
                var o = i.style.marginRight,
                  s = e(i).css('margin-right');
                e(i)
                  .data('margin-right', o)
                  .css(
                    'margin-right',
                    parseFloat(s) - t._scrollbarWidth + 'px',
                  );
              });
            var o = document.body.style.paddingRight,
              s = e(document.body).css('padding-right');
            e(document.body)
              .data('padding-right', o)
              .css(
                'padding-right',
                parseFloat(s) + this._scrollbarWidth + 'px',
              );
          }
          e(document.body).addClass(Ft);
        }),
        (n._resetScrollbar = function () {
          var t = [].slice.call(document.querySelectorAll(Kt.FIXED_CONTENT));
          e(t).each(function (t, n) {
            var i = e(n).data('padding-right');
            e(n).removeData('padding-right'), (n.style.paddingRight = i || '');
          });
          var n = [].slice.call(
            document.querySelectorAll('' + Kt.STICKY_CONTENT),
          );
          e(n).each(function (t, n) {
            var i = e(n).data('margin-right');
            void 0 !== i &&
              e(n).css('margin-right', i).removeData('margin-right');
          });
          var i = e(document.body).data('padding-right');
          e(document.body).removeData('padding-right'),
            (document.body.style.paddingRight = i || '');
        }),
        (n._getScrollbarWidth = function () {
          var t = document.createElement('div');
          (t.className = Mt), document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (t._jQueryInterface = function (n, i) {
          return this.each(function () {
            var o = e(this).data('bs.modal'),
              s = r(
                {},
                Pt,
                e(this).data(),
                'object' === _typeof(n) && n ? n : {},
              );
            if (
              (o || ((o = new t(this, s)), e(this).data('bs.modal', o)),
              'string' == typeof n)
            ) {
              if (void 0 === o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n](i);
            } else s.show && o.show(i);
          });
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return Pt;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(jt.CLICK_DATA_API, Kt.DATA_TOGGLE, function (t) {
    var n,
      i = this,
      o = c.getSelectorFromElement(this);
    o && (n = document.querySelector(o));
    var s = e(n).data('bs.modal')
      ? 'toggle'
      : r({}, e(n).data(), e(this).data());
    ('A' !== this.tagName && 'AREA' !== this.tagName) || t.preventDefault();
    var a = e(n).one(jt.SHOW, function (t) {
      t.isDefaultPrevented() ||
        a.one(jt.HIDDEN, function () {
          e(i).is(':visible') && i.focus();
        });
    });
    qt._jQueryInterface.call(e(n), s, this);
  }),
    (e.fn.modal = qt._jQueryInterface),
    (e.fn.modal.Constructor = qt),
    (e.fn.modal.noConflict = function () {
      return (e.fn.modal = Lt), qt._jQueryInterface;
    });
  var Vt = [
      'background',
      'cite',
      'href',
      'itemtype',
      'longdesc',
      'poster',
      'src',
      'xlink:href',
    ],
    Qt = {
      '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
      a: ['target', 'href', 'title', 'rel'],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ['src', 'alt', 'title', 'width', 'height'],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    Bt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
    Yt =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
  function Gt(t, e, n) {
    if (0 === t.length) return t;
    if (n && 'function' == typeof n) return n(t);
    for (
      var i = new window.DOMParser().parseFromString(t, 'text/html'),
        o = Object.keys(e),
        s = [].slice.call(i.body.querySelectorAll('*')),
        r = function (t, n) {
          var i = s[t],
            r = i.nodeName.toLowerCase();
          if (-1 === o.indexOf(i.nodeName.toLowerCase()))
            return i.parentNode.removeChild(i), 'continue';
          var a = [].slice.call(i.attributes),
            l = [].concat(e['*'] || [], e[r] || []);
          a.forEach(function (t) {
            (function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === Vt.indexOf(n) ||
                  Boolean(t.nodeValue.match(Bt) || t.nodeValue.match(Yt))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  s = i.length;
                o < s;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, l) || i.removeAttribute(t.nodeName);
          });
        },
        a = 0,
        l = s.length;
      a < l;
      a++
    )
      r(a);
    return i.body.innerHTML;
  }
  var Xt = 'tooltip',
    zt = e.fn.tooltip,
    $t = new RegExp('(^|\\s)bs-tooltip\\S+', 'g'),
    Jt = ['sanitize', 'whiteList', 'sanitizeFn'],
    Zt = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      whiteList: 'object',
    },
    te = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left',
    },
    ee = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !1,
      selector: !1,
      placement: 'top',
      offset: 0,
      container: !1,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent',
      sanitize: !0,
      sanitizeFn: null,
      whiteList: Qt,
    },
    ne = 'show',
    ie = 'out',
    oe = {
      HIDE: 'hide.bs.tooltip',
      HIDDEN: 'hidden.bs.tooltip',
      SHOW: 'show.bs.tooltip',
      SHOWN: 'shown.bs.tooltip',
      INSERTED: 'inserted.bs.tooltip',
      CLICK: 'click.bs.tooltip',
      FOCUSIN: 'focusin.bs.tooltip',
      FOCUSOUT: 'focusout.bs.tooltip',
      MOUSEENTER: 'mouseenter.bs.tooltip',
      MOUSELEAVE: 'mouseleave.bs.tooltip',
    },
    se = 'fade',
    re = 'show',
    ae = '.tooltip-inner',
    le = '.arrow',
    ce = 'hover',
    he = 'focus',
    ue = 'click',
    fe = 'manual',
    de = (function () {
      function t(t, e) {
        if (void 0 === n)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)",
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ''),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var i = t.prototype;
      return (
        (i.enable = function () {
          this._isEnabled = !0;
        }),
        (i.disable = function () {
          this._isEnabled = !1;
        }),
        (i.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (i.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var n = this.constructor.DATA_KEY,
                i = e(t.currentTarget).data(n);
              i ||
                ((i = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig(),
                )),
                e(t.currentTarget).data(n, i)),
                (i._activeTrigger.click = !i._activeTrigger.click),
                i._isWithActiveTrigger()
                  ? i._enter(null, i)
                  : i._leave(null, i);
            } else {
              if (e(this.getTipElement()).hasClass(re))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (i.dispose = function () {
          clearTimeout(this._timeout),
            e.removeData(this.element, this.constructor.DATA_KEY),
            e(this.element).off(this.constructor.EVENT_KEY),
            e(this.element).closest('.modal').off('hide.bs.modal'),
            this.tip && e(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            null !== this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (i.show = function () {
          var t = this;
          if ('none' === e(this.element).css('display'))
            throw new Error('Please use show on visible elements');
          var i = e.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            e(this.element).trigger(i);
            var o = c.findShadowRoot(this.element),
              s = e.contains(
                null !== o ? o : this.element.ownerDocument.documentElement,
                this.element,
              );
            if (i.isDefaultPrevented() || !s) return;
            var r = this.getTipElement(),
              a = c.getUID(this.constructor.NAME);
            r.setAttribute('id', a),
              this.element.setAttribute('aria-describedby', a),
              this.setContent(),
              this.config.animation && e(r).addClass(se);
            var l =
                'function' == typeof this.config.placement
                  ? this.config.placement.call(this, r, this.element)
                  : this.config.placement,
              h = this._getAttachment(l);
            this.addAttachmentClass(h);
            var u = this._getContainer();
            e(r).data(this.constructor.DATA_KEY, this),
              e.contains(
                this.element.ownerDocument.documentElement,
                this.tip,
              ) || e(r).appendTo(u),
              e(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new n(this.element, r, {
                placement: h,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: le },
                  preventOverflow: { boundariesElement: this.config.boundary },
                },
                onCreate: function (e) {
                  e.originalPlacement !== e.placement &&
                    t._handlePopperPlacementChange(e);
                },
                onUpdate: function (e) {
                  return t._handlePopperPlacementChange(e);
                },
              })),
              e(r).addClass(re),
              'ontouchstart' in document.documentElement &&
                e(document.body).children().on('mouseover', null, e.noop);
            var f = function () {
              t.config.animation && t._fixTransition();
              var n = t._hoverState;
              (t._hoverState = null),
                e(t.element).trigger(t.constructor.Event.SHOWN),
                n === ie && t._leave(null, t);
            };
            if (e(this.tip).hasClass(se)) {
              var d = c.getTransitionDurationFromElement(this.tip);
              e(this.tip).one(c.TRANSITION_END, f).emulateTransitionEnd(d);
            } else f();
          }
        }),
        (i.hide = function (t) {
          var n = this,
            i = this.getTipElement(),
            o = e.Event(this.constructor.Event.HIDE),
            s = function () {
              n._hoverState !== ne &&
                i.parentNode &&
                i.parentNode.removeChild(i),
                n._cleanTipClass(),
                n.element.removeAttribute('aria-describedby'),
                e(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                t && t();
            };
          if ((e(this.element).trigger(o), !o.isDefaultPrevented())) {
            if (
              (e(i).removeClass(re),
              'ontouchstart' in document.documentElement &&
                e(document.body).children().off('mouseover', null, e.noop),
              (this._activeTrigger[ue] = !1),
              (this._activeTrigger[he] = !1),
              (this._activeTrigger[ce] = !1),
              e(this.tip).hasClass(se))
            ) {
              var r = c.getTransitionDurationFromElement(i);
              e(i).one(c.TRANSITION_END, s).emulateTransitionEnd(r);
            } else s();
            this._hoverState = '';
          }
        }),
        (i.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (i.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (i.addAttachmentClass = function (t) {
          e(this.getTipElement()).addClass('bs-tooltip-' + t);
        }),
        (i.getTipElement = function () {
          return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
        }),
        (i.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(e(t.querySelectorAll(ae)), this.getTitle()),
            e(t).removeClass(se + ' ' + re);
        }),
        (i.setElementContent = function (t, n) {
          'object' !== _typeof(n) || (!n.nodeType && !n.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (n = Gt(n, this.config.whiteList, this.config.sanitizeFn)),
                t.html(n))
              : t.text(n)
            : this.config.html
              ? e(n).parent().is(t) || t.empty().append(n)
              : t.text(e(n).text());
        }),
        (i.getTitle = function () {
          var t = this.element.getAttribute('data-original-title');
          return (
            t ||
              (t =
                'function' == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (i._getOffset = function () {
          var t = this,
            e = {};
          return (
            'function' == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = r(
                      {},
                      e.offsets,
                      t.config.offset(e.offsets, t.element) || {},
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (i._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : c.isElement(this.config.container)
              ? e(this.config.container)
              : e(document).find(this.config.container);
        }),
        (i._getAttachment = function (t) {
          return te[t.toUpperCase()];
        }),
        (i._setListeners = function () {
          var t = this;
          this.config.trigger.split(' ').forEach(function (n) {
            if ('click' === n)
              e(t.element).on(
                t.constructor.Event.CLICK,
                t.config.selector,
                function (e) {
                  return t.toggle(e);
                },
              );
            else if (n !== fe) {
              var i =
                  n === ce
                    ? t.constructor.Event.MOUSEENTER
                    : t.constructor.Event.FOCUSIN,
                o =
                  n === ce
                    ? t.constructor.Event.MOUSELEAVE
                    : t.constructor.Event.FOCUSOUT;
              e(t.element)
                .on(i, t.config.selector, function (e) {
                  return t._enter(e);
                })
                .on(o, t.config.selector, function (e) {
                  return t._leave(e);
                });
            }
          }),
            e(this.element)
              .closest('.modal')
              .on('hide.bs.modal', function () {
                t.element && t.hide();
              }),
            this.config.selector
              ? (this.config = r({}, this.config, {
                  trigger: 'manual',
                  selector: '',
                }))
              : this._fixTitle();
        }),
        (i._fixTitle = function () {
          var t = _typeof(this.element.getAttribute('data-original-title'));
          (this.element.getAttribute('title') || 'string' !== t) &&
            (this.element.setAttribute(
              'data-original-title',
              this.element.getAttribute('title') || '',
            ),
            this.element.setAttribute('title', ''));
        }),
        (i._enter = function (t, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || e(t.currentTarget).data(i)) ||
            ((n = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig(),
            )),
            e(t.currentTarget).data(i, n)),
            t && (n._activeTrigger['focusin' === t.type ? he : ce] = !0),
            e(n.getTipElement()).hasClass(re) || n._hoverState === ne
              ? (n._hoverState = ne)
              : (clearTimeout(n._timeout),
                (n._hoverState = ne),
                n.config.delay && n.config.delay.show
                  ? (n._timeout = setTimeout(function () {
                      n._hoverState === ne && n.show();
                    }, n.config.delay.show))
                  : n.show());
        }),
        (i._leave = function (t, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || e(t.currentTarget).data(i)) ||
            ((n = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig(),
            )),
            e(t.currentTarget).data(i, n)),
            t && (n._activeTrigger['focusout' === t.type ? he : ce] = !1),
            n._isWithActiveTrigger() ||
              (clearTimeout(n._timeout),
              (n._hoverState = ie),
              n.config.delay && n.config.delay.hide
                ? (n._timeout = setTimeout(function () {
                    n._hoverState === ie && n.hide();
                  }, n.config.delay.hide))
                : n.hide());
        }),
        (i._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (i._getConfig = function (t) {
          var n = e(this.element).data();
          return (
            Object.keys(n).forEach(function (t) {
              -1 !== Jt.indexOf(t) && delete n[t];
            }),
            'number' ==
              typeof (t = r(
                {},
                this.constructor.Default,
                n,
                'object' === _typeof(t) && t ? t : {},
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            'number' == typeof t.title && (t.title = t.title.toString()),
            'number' == typeof t.content && (t.content = t.content.toString()),
            c.typeCheckConfig(Xt, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = Gt(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (i._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (i._cleanTipClass = function () {
          var t = e(this.getTipElement()),
            n = t.attr('class').match($t);
          null !== n && n.length && t.removeClass(n.join(''));
        }),
        (i._handlePopperPlacementChange = function (t) {
          var e = t.instance;
          (this.tip = e.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (i._fixTransition = function () {
          var t = this.getTipElement(),
            n = this.config.animation;
          null === t.getAttribute('x-placement') &&
            (e(t).removeClass(se),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = n));
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data('bs.tooltip'),
              o = 'object' === _typeof(n) && n;
            if (
              (i || !/dispose|hide/.test(n)) &&
              (i || ((i = new t(this, o)), e(this).data('bs.tooltip', i)),
              'string' == typeof n)
            ) {
              if (void 0 === i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return ee;
            },
          },
          {
            key: 'NAME',
            get: function () {
              return Xt;
            },
          },
          {
            key: 'DATA_KEY',
            get: function () {
              return 'bs.tooltip';
            },
          },
          {
            key: 'Event',
            get: function () {
              return oe;
            },
          },
          {
            key: 'EVENT_KEY',
            get: function () {
              return '.bs.tooltip';
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return Zt;
            },
          },
        ]),
        t
      );
    })();
  (e.fn.tooltip = de._jQueryInterface),
    (e.fn.tooltip.Constructor = de),
    (e.fn.tooltip.noConflict = function () {
      return (e.fn.tooltip = zt), de._jQueryInterface;
    });
  var _e = 'popover',
    ge = e.fn.popover,
    me = new RegExp('(^|\\s)bs-popover\\S+', 'g'),
    pe = r({}, de.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    ve = r({}, de.DefaultType, { content: '(string|element|function)' }),
    Ee = 'fade',
    be = 'show',
    ye = '.popover-header',
    Te = '.popover-body',
    Ce = {
      HIDE: 'hide.bs.popover',
      HIDDEN: 'hidden.bs.popover',
      SHOW: 'show.bs.popover',
      SHOWN: 'shown.bs.popover',
      INSERTED: 'inserted.bs.popover',
      CLICK: 'click.bs.popover',
      FOCUSIN: 'focusin.bs.popover',
      FOCUSOUT: 'focusout.bs.popover',
      MOUSEENTER: 'mouseenter.bs.popover',
      MOUSELEAVE: 'mouseleave.bs.popover',
    },
    Se = (function (t) {
      var n, i;
      function s() {
        return t.apply(this, arguments) || this;
      }
      (i = t),
        ((n = s).prototype = Object.create(i.prototype)),
        (n.prototype.constructor = n),
        (n.__proto__ = i);
      var r = s.prototype;
      return (
        (r.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (r.addAttachmentClass = function (t) {
          e(this.getTipElement()).addClass('bs-popover-' + t);
        }),
        (r.getTipElement = function () {
          return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
        }),
        (r.setContent = function () {
          var t = e(this.getTipElement());
          this.setElementContent(t.find(ye), this.getTitle());
          var n = this._getContent();
          'function' == typeof n && (n = n.call(this.element)),
            this.setElementContent(t.find(Te), n),
            t.removeClass(Ee + ' ' + be);
        }),
        (r._getContent = function () {
          return (
            this.element.getAttribute('data-content') || this.config.content
          );
        }),
        (r._cleanTipClass = function () {
          var t = e(this.getTipElement()),
            n = t.attr('class').match(me);
          null !== n && n.length > 0 && t.removeClass(n.join(''));
        }),
        (s._jQueryInterface = function (t) {
          return this.each(function () {
            var n = e(this).data('bs.popover'),
              i = 'object' === _typeof(t) ? t : null;
            if (
              (n || !/dispose|hide/.test(t)) &&
              (n || ((n = new s(this, i)), e(this).data('bs.popover', n)),
              'string' == typeof t)
            ) {
              if (void 0 === n[t])
                throw new TypeError('No method named "' + t + '"');
              n[t]();
            }
          });
        }),
        o(s, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return pe;
            },
          },
          {
            key: 'NAME',
            get: function () {
              return _e;
            },
          },
          {
            key: 'DATA_KEY',
            get: function () {
              return 'bs.popover';
            },
          },
          {
            key: 'Event',
            get: function () {
              return Ce;
            },
          },
          {
            key: 'EVENT_KEY',
            get: function () {
              return '.bs.popover';
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return ve;
            },
          },
        ]),
        s
      );
    })(de);
  (e.fn.popover = Se._jQueryInterface),
    (e.fn.popover.Constructor = Se),
    (e.fn.popover.noConflict = function () {
      return (e.fn.popover = ge), Se._jQueryInterface;
    });
  var Ie = 'scrollspy',
    De = e.fn[Ie],
    Ae = { offset: 10, method: 'auto', target: '' },
    we = { offset: 'number', method: 'string', target: '(string|element)' },
    Ne = {
      ACTIVATE: 'activate.bs.scrollspy',
      SCROLL: 'scroll.bs.scrollspy',
      LOAD_DATA_API: 'load.bs.scrollspy.data-api',
    },
    Oe = 'dropdown-item',
    ke = 'active',
    Le = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: '.active',
      NAV_LIST_GROUP: '.nav, .list-group',
      NAV_LINKS: '.nav-link',
      NAV_ITEMS: '.nav-item',
      LIST_ITEMS: '.list-group-item',
      DROPDOWN: '.dropdown',
      DROPDOWN_ITEMS: '.dropdown-item',
      DROPDOWN_TOGGLE: '.dropdown-toggle',
    },
    Pe = 'offset',
    Re = 'position',
    je = (function () {
      function t(t, n) {
        var i = this;
        (this._element = t),
          (this._scrollElement = 'BODY' === t.tagName ? window : t),
          (this._config = this._getConfig(n)),
          (this._selector =
            this._config.target +
            ' ' +
            Le.NAV_LINKS +
            ',' +
            this._config.target +
            ' ' +
            Le.LIST_ITEMS +
            ',' +
            this._config.target +
            ' ' +
            Le.DROPDOWN_ITEMS),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          e(this._scrollElement).on(Ne.SCROLL, function (t) {
            return i._process(t);
          }),
          this.refresh(),
          this._process();
      }
      var n = t.prototype;
      return (
        (n.refresh = function () {
          var t = this,
            n = this._scrollElement === this._scrollElement.window ? Pe : Re,
            i = 'auto' === this._config.method ? n : this._config.method,
            o = i === Re ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var n,
                  s = c.getSelectorFromElement(t);
                if ((s && (n = document.querySelector(s)), n)) {
                  var r = n.getBoundingClientRect();
                  if (r.width || r.height) return [e(n)[i]().top + o, s];
                }
                return null;
              })
              .filter(function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
              });
        }),
        (n.dispose = function () {
          e.removeData(this._element, 'bs.scrollspy'),
            e(this._scrollElement).off('.bs.scrollspy'),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (n._getConfig = function (t) {
          if (
            'string' !=
            typeof (t = r({}, Ae, 'object' === _typeof(t) && t ? t : {})).target
          ) {
            var n = e(t.target).attr('id');
            n || ((n = c.getUID(Ie)), e(t.target).attr('id', n)),
              (t.target = '#' + n);
          }
          return c.typeCheckConfig(Ie, t, we), t;
        }),
        (n._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (n._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight,
            )
          );
        }),
        (n._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (n._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              this._offsets[0] > 0
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (n._activate = function (t) {
          (this._activeTarget = t), this._clear();
          var n = this._selector.split(',').map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            }),
            i = e([].slice.call(document.querySelectorAll(n.join(','))));
          i.hasClass(Oe)
            ? (i.closest(Le.DROPDOWN).find(Le.DROPDOWN_TOGGLE).addClass(ke),
              i.addClass(ke))
            : (i.addClass(ke),
              i
                .parents(Le.NAV_LIST_GROUP)
                .prev(Le.NAV_LINKS + ', ' + Le.LIST_ITEMS)
                .addClass(ke),
              i
                .parents(Le.NAV_LIST_GROUP)
                .prev(Le.NAV_ITEMS)
                .children(Le.NAV_LINKS)
                .addClass(ke)),
            e(this._scrollElement).trigger(Ne.ACTIVATE, { relatedTarget: t });
        }),
        (n._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains(ke);
            })
            .forEach(function (t) {
              return t.classList.remove(ke);
            });
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data('bs.scrollspy'),
              o = 'object' === _typeof(n) && n;
            if (
              (i || ((i = new t(this, o)), e(this).data('bs.scrollspy', i)),
              'string' == typeof n)
            ) {
              if (void 0 === i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return Ae;
            },
          },
        ]),
        t
      );
    })();
  e(window).on(Ne.LOAD_DATA_API, function () {
    for (
      var t = [].slice.call(document.querySelectorAll(Le.DATA_SPY)),
        n = t.length;
      n--;

    ) {
      var i = e(t[n]);
      je._jQueryInterface.call(i, i.data());
    }
  }),
    (e.fn[Ie] = je._jQueryInterface),
    (e.fn[Ie].Constructor = je),
    (e.fn[Ie].noConflict = function () {
      return (e.fn[Ie] = De), je._jQueryInterface;
    });
  var He = e.fn.tab,
    Me = {
      HIDE: 'hide.bs.tab',
      HIDDEN: 'hidden.bs.tab',
      SHOW: 'show.bs.tab',
      SHOWN: 'shown.bs.tab',
      CLICK_DATA_API: 'click.bs.tab.data-api',
    },
    We = 'dropdown-menu',
    Fe = 'active',
    Ue = 'disabled',
    xe = 'fade',
    Ke = 'show',
    qe = '.dropdown',
    Ve = '.nav, .list-group',
    Qe = '.active',
    Be = '> li > .active',
    Ye = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    Ge = '.dropdown-toggle',
    Xe = '> .dropdown-menu .active',
    ze = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.show = function () {
          var t = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                e(this._element).hasClass(Fe)) ||
              e(this._element).hasClass(Ue)
            )
          ) {
            var n,
              i,
              o = e(this._element).closest(Ve)[0],
              s = c.getSelectorFromElement(this._element);
            if (o) {
              var r = 'UL' === o.nodeName || 'OL' === o.nodeName ? Be : Qe;
              i = (i = e.makeArray(e(o).find(r)))[i.length - 1];
            }
            var a = e.Event(Me.HIDE, { relatedTarget: this._element }),
              l = e.Event(Me.SHOW, { relatedTarget: i });
            if (
              (i && e(i).trigger(a),
              e(this._element).trigger(l),
              !l.isDefaultPrevented() && !a.isDefaultPrevented())
            ) {
              s && (n = document.querySelector(s)),
                this._activate(this._element, o);
              var h = function () {
                var n = e.Event(Me.HIDDEN, { relatedTarget: t._element }),
                  o = e.Event(Me.SHOWN, { relatedTarget: i });
                e(i).trigger(n), e(t._element).trigger(o);
              };
              n ? this._activate(n, n.parentNode, h) : h();
            }
          }
        }),
        (n.dispose = function () {
          e.removeData(this._element, 'bs.tab'), (this._element = null);
        }),
        (n._activate = function (t, n, i) {
          var o = this,
            s = (
              !n || ('UL' !== n.nodeName && 'OL' !== n.nodeName)
                ? e(n).children(Qe)
                : e(n).find(Be)
            )[0],
            r = i && s && e(s).hasClass(xe),
            a = function () {
              return o._transitionComplete(t, s, i);
            };
          if (s && r) {
            var l = c.getTransitionDurationFromElement(s);
            e(s)
              .removeClass(Ke)
              .one(c.TRANSITION_END, a)
              .emulateTransitionEnd(l);
          } else a();
        }),
        (n._transitionComplete = function (t, n, i) {
          if (n) {
            e(n).removeClass(Fe);
            var o = e(n.parentNode).find(Xe)[0];
            o && e(o).removeClass(Fe),
              'tab' === n.getAttribute('role') &&
                n.setAttribute('aria-selected', !1);
          }
          if (
            (e(t).addClass(Fe),
            'tab' === t.getAttribute('role') &&
              t.setAttribute('aria-selected', !0),
            c.reflow(t),
            t.classList.contains(xe) && t.classList.add(Ke),
            t.parentNode && e(t.parentNode).hasClass(We))
          ) {
            var s = e(t).closest(qe)[0];
            if (s) {
              var r = [].slice.call(s.querySelectorAll(Ge));
              e(r).addClass(Fe);
            }
            t.setAttribute('aria-expanded', !0);
          }
          i && i();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data('bs.tab');
            if (
              (o || ((o = new t(this)), i.data('bs.tab', o)),
              'string' == typeof n)
            ) {
              if (void 0 === o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n]();
            }
          });
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
        ]),
        t
      );
    })();
  e(document).on(Me.CLICK_DATA_API, Ye, function (t) {
    t.preventDefault(), ze._jQueryInterface.call(e(this), 'show');
  }),
    (e.fn.tab = ze._jQueryInterface),
    (e.fn.tab.Constructor = ze),
    (e.fn.tab.noConflict = function () {
      return (e.fn.tab = He), ze._jQueryInterface;
    });
  var $e = e.fn.toast,
    Je = {
      CLICK_DISMISS: 'click.dismiss.bs.toast',
      HIDE: 'hide.bs.toast',
      HIDDEN: 'hidden.bs.toast',
      SHOW: 'show.bs.toast',
      SHOWN: 'shown.bs.toast',
    },
    Ze = 'fade',
    tn = 'hide',
    en = 'show',
    nn = 'showing',
    on = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
    sn = { animation: !0, autohide: !0, delay: 500 },
    rn = '[data-dismiss="toast"]',
    an = (function () {
      function t(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var n = t.prototype;
      return (
        (n.show = function () {
          var t = this;
          e(this._element).trigger(Je.SHOW),
            this._config.animation && this._element.classList.add(Ze);
          var n = function () {
            t._element.classList.remove(nn),
              t._element.classList.add(en),
              e(t._element).trigger(Je.SHOWN),
              t._config.autohide && t.hide();
          };
          if (
            (this._element.classList.remove(tn),
            this._element.classList.add(nn),
            this._config.animation)
          ) {
            var i = c.getTransitionDurationFromElement(this._element);
            e(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i);
          } else n();
        }),
        (n.hide = function (t) {
          var n = this;
          this._element.classList.contains(en) &&
            (e(this._element).trigger(Je.HIDE),
            t
              ? this._close()
              : (this._timeout = setTimeout(function () {
                  n._close();
                }, this._config.delay)));
        }),
        (n.dispose = function () {
          clearTimeout(this._timeout),
            (this._timeout = null),
            this._element.classList.contains(en) &&
              this._element.classList.remove(en),
            e(this._element).off(Je.CLICK_DISMISS),
            e.removeData(this._element, 'bs.toast'),
            (this._element = null),
            (this._config = null);
        }),
        (n._getConfig = function (t) {
          return (
            (t = r(
              {},
              sn,
              e(this._element).data(),
              'object' === _typeof(t) && t ? t : {},
            )),
            c.typeCheckConfig('toast', t, this.constructor.DefaultType),
            t
          );
        }),
        (n._setListeners = function () {
          var t = this;
          e(this._element).on(Je.CLICK_DISMISS, rn, function () {
            return t.hide(!0);
          });
        }),
        (n._close = function () {
          var t = this,
            n = function () {
              t._element.classList.add(tn), e(t._element).trigger(Je.HIDDEN);
            };
          if ((this._element.classList.remove(en), this._config.animation)) {
            var i = c.getTransitionDurationFromElement(this._element);
            e(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i);
          } else n();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data('bs.toast'),
              s = 'object' === _typeof(n) && n;
            if (
              (o || ((o = new t(this, s)), i.data('bs.toast', o)),
              'string' == typeof n)
            ) {
              if (void 0 === o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n](this);
            }
          });
        }),
        o(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1';
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return on;
            },
          },
          {
            key: 'Default',
            get: function () {
              return sn;
            },
          },
        ]),
        t
      );
    })();
  (e.fn.toast = an._jQueryInterface),
    (e.fn.toast.Constructor = an),
    (e.fn.toast.noConflict = function () {
      return (e.fn.toast = $e), an._jQueryInterface;
    }),
    (function () {
      if (void 0 === e)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.",
        );
      var t = e.fn.jquery.split(' ')[0].split('.');
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        t[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0",
        );
    })(),
    (t.Util = c),
    (t.Alert = g),
    (t.Button = D),
    (t.Carousel = Y),
    (t.Collapse = rt),
    (t.Dropdown = kt),
    (t.Modal = qt),
    (t.Popover = Se),
    (t.Scrollspy = je),
    (t.Tab = ze),
    (t.Toast = an),
    (t.Tooltip = de),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
function _typeof2(t) {
  return (_typeof2 =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        })(t);
}
!(function (t, e) {
  'object' ===
    ('undefined' == typeof exports ? 'undefined' : _typeof2(exports)) &&
  'object' === ('undefined' == typeof module ? 'undefined' : _typeof2(module))
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
      ? define([], e)
      : 'object' ===
          ('undefined' == typeof exports ? 'undefined' : _typeof2(exports))
        ? (exports.ClipboardJS = e())
        : (t.ClipboardJS = e());
})(this, function () {
  return (function (t) {
    var e = {};
    function n(o) {
      if (e[o]) return e[o].exports;
      var r = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
      }),
      (n.r = function (t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' === _typeof2(t) && t && t.__esModule) return t;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var r in t)
            n.d(
              o,
              r,
              function (e) {
                return t[e];
              }.bind(null, r),
            );
        return o;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, 'a', e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ''),
      n((n.s = 0))
    );
  })([
    function (t, e, n) {
      'use strict';
      var o =
          'function' == typeof Symbol && 'symbol' === _typeof2(Symbol.iterator)
            ? function (t) {
                return _typeof2(t);
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : _typeof2(t);
              },
        r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          return function (e, n, o) {
            return n && t(e.prototype, n), o && t(e, o), e;
          };
        })(),
        i = c(n(1)),
        a = c(n(3)),
        u = c(n(4));
      function c(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var l = (function (t) {
        function e(t, n) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, e);
          var o = (function (t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !e || ('object' !== _typeof2(e) && 'function' != typeof e)
              ? t
              : e;
          })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return o.resolveOptions(n), o.listenClick(t), o;
        }
        return (
          (function (t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  _typeof2(e),
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, a['default']),
          r(
            e,
            [
              {
                key: 'resolveOptions',
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.action =
                    'function' == typeof t.action
                      ? t.action
                      : this.defaultAction),
                    (this.target =
                      'function' == typeof t.target
                        ? t.target
                        : this.defaultTarget),
                    (this.text =
                      'function' == typeof t.text ? t.text : this.defaultText),
                    (this.container =
                      'object' === o(t.container)
                        ? t.container
                        : document.body);
                },
              },
              {
                key: 'listenClick',
                value: function (t) {
                  var e = this;
                  this.listener = (0, u.default)(t, 'click', function (t) {
                    return e.onClick(t);
                  });
                },
              },
              {
                key: 'onClick',
                value: function (t) {
                  var e = t.delegateTarget || t.currentTarget;
                  this.clipboardAction && (this.clipboardAction = null),
                    (this.clipboardAction = new i.default({
                      action: this.action(e),
                      target: this.target(e),
                      text: this.text(e),
                      container: this.container,
                      trigger: e,
                      emitter: this,
                    }));
                },
              },
              {
                key: 'defaultAction',
                value: function (t) {
                  return s('action', t);
                },
              },
              {
                key: 'defaultTarget',
                value: function (t) {
                  var e = s('target', t);
                  if (e) return document.querySelector(e);
                },
              },
              {
                key: 'defaultText',
                value: function (t) {
                  return s('text', t);
                },
              },
              {
                key: 'destroy',
                value: function () {
                  this.listener.destroy(),
                    this.clipboardAction &&
                      (this.clipboardAction.destroy(),
                      (this.clipboardAction = null));
                },
              },
            ],
            [
              {
                key: 'isSupported',
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : ['copy', 'cut'],
                    e = 'string' == typeof t ? [t] : t,
                    n = !!document.queryCommandSupported;
                  return (
                    e.forEach(function (t) {
                      n = n && !!document.queryCommandSupported(t);
                    }),
                    n
                  );
                },
              },
            ],
          ),
          e
        );
      })();
      function s(t, e) {
        var n = 'data-clipboard-' + t;
        if (e.hasAttribute(n)) return e.getAttribute(n);
      }
      t.exports = l;
    },
    function (t, e, n) {
      'use strict';
      var o,
        r =
          'function' == typeof Symbol && 'symbol' === _typeof2(Symbol.iterator)
            ? function (t) {
                return _typeof2(t);
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : _typeof2(t);
              },
        i = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          return function (e, n, o) {
            return n && t(e.prototype, n), o && t(e, o), e;
          };
        })(),
        a = n(2),
        u = (o = a) && o.__esModule ? o : { default: o };
      var c = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            this.resolveOptions(e),
            this.initSelection();
        }
        return (
          i(t, [
            {
              key: 'resolveOptions',
              value: function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                (this.action = t.action),
                  (this.container = t.container),
                  (this.emitter = t.emitter),
                  (this.target = t.target),
                  (this.text = t.text),
                  (this.trigger = t.trigger),
                  (this.selectedText = '');
              },
            },
            {
              key: 'initSelection',
              value: function () {
                this.text
                  ? this.selectFake()
                  : this.target && this.selectTarget();
              },
            },
            {
              key: 'selectFake',
              value: function () {
                var t = this,
                  e = 'rtl' == document.documentElement.getAttribute('dir');
                this.removeFake(),
                  (this.fakeHandlerCallback = function () {
                    return t.removeFake();
                  }),
                  (this.fakeHandler =
                    this.container.addEventListener(
                      'click',
                      this.fakeHandlerCallback,
                    ) || !0),
                  (this.fakeElem = document.createElement('textarea')),
                  (this.fakeElem.style.fontSize = '12pt'),
                  (this.fakeElem.style.border = '0'),
                  (this.fakeElem.style.padding = '0'),
                  (this.fakeElem.style.margin = '0'),
                  (this.fakeElem.style.position = 'absolute'),
                  (this.fakeElem.style[e ? 'right' : 'left'] = '-9999px');
                var n =
                  window.pageYOffset || document.documentElement.scrollTop;
                (this.fakeElem.style.top = n + 'px'),
                  this.fakeElem.setAttribute('readonly', ''),
                  (this.fakeElem.value = this.text),
                  this.container.appendChild(this.fakeElem),
                  (this.selectedText = (0, u.default)(this.fakeElem)),
                  this.copyText();
              },
            },
            {
              key: 'removeFake',
              value: function () {
                this.fakeHandler &&
                  (this.container.removeEventListener(
                    'click',
                    this.fakeHandlerCallback,
                  ),
                  (this.fakeHandler = null),
                  (this.fakeHandlerCallback = null)),
                  this.fakeElem &&
                    (this.container.removeChild(this.fakeElem),
                    (this.fakeElem = null));
              },
            },
            {
              key: 'selectTarget',
              value: function () {
                (this.selectedText = (0, u.default)(this.target)),
                  this.copyText();
              },
            },
            {
              key: 'copyText',
              value: function () {
                var t = void 0;
                try {
                  t = document.execCommand(this.action);
                } catch (e) {
                  t = !1;
                }
                this.handleResult(t);
              },
            },
            {
              key: 'handleResult',
              value: function (t) {
                this.emitter.emit(t ? 'success' : 'error', {
                  action: this.action,
                  text: this.selectedText,
                  trigger: this.trigger,
                  clearSelection: this.clearSelection.bind(this),
                });
              },
            },
            {
              key: 'clearSelection',
              value: function () {
                this.trigger && this.trigger.focus(),
                  window.getSelection().removeAllRanges();
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.removeFake();
              },
            },
            {
              key: 'action',
              set: function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 'copy';
                if (
                  ((this._action = t),
                  'copy' !== this._action && 'cut' !== this._action)
                )
                  throw new Error(
                    'Invalid "action" value, use either "copy" or "cut"',
                  );
              },
              get: function () {
                return this._action;
              },
            },
            {
              key: 'target',
              set: function (t) {
                if (void 0 !== t) {
                  if (
                    !t ||
                    'object' !== (void 0 === t ? 'undefined' : r(t)) ||
                    1 !== t.nodeType
                  )
                    throw new Error(
                      'Invalid "target" value, use a valid Element',
                    );
                  if ('copy' === this.action && t.hasAttribute('disabled'))
                    throw new Error(
                      'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute',
                    );
                  if (
                    'cut' === this.action &&
                    (t.hasAttribute('readonly') || t.hasAttribute('disabled'))
                  )
                    throw new Error(
                      'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes',
                    );
                  this._target = t;
                }
              },
              get: function () {
                return this._target;
              },
            },
          ]),
          t
        );
      })();
      t.exports = c;
    },
    function (t, e) {
      t.exports = function (t) {
        var e;
        if ('SELECT' === t.nodeName) t.focus(), (e = t.value);
        else if ('INPUT' === t.nodeName || 'TEXTAREA' === t.nodeName) {
          var n = t.hasAttribute('readonly');
          n || t.setAttribute('readonly', ''),
            t.select(),
            t.setSelectionRange(0, t.value.length),
            n || t.removeAttribute('readonly'),
            (e = t.value);
        } else {
          t.hasAttribute('contenteditable') && t.focus();
          var o = window.getSelection(),
            r = document.createRange();
          r.selectNodeContents(t),
            o.removeAllRanges(),
            o.addRange(r),
            (e = o.toString());
        }
        return e;
      };
    },
    function (t, e) {
      function n() {}
      (n.prototype = {
        on: function (t, e, n) {
          var o = this.e || (this.e = {});
          return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this;
        },
        once: function (t, e, n) {
          var o = this;
          function r() {
            o.off(t, r), e.apply(n, arguments);
          }
          return (r._ = e), this.on(t, r, n);
        },
        emit: function (t) {
          for (
            var e = [].slice.call(arguments, 1),
              n = ((this.e || (this.e = {}))[t] || []).slice(),
              o = 0,
              r = n.length;
            o < r;
            o++
          )
            n[o].fn.apply(n[o].ctx, e);
          return this;
        },
        off: function (t, e) {
          var n = this.e || (this.e = {}),
            o = n[t],
            r = [];
          if (o && e)
            for (var i = 0, a = o.length; i < a; i++)
              o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
          return r.length ? (n[t] = r) : delete n[t], this;
        },
      }),
        (t.exports = n);
    },
    function (t, e, n) {
      var o = n(5),
        r = n(6);
      t.exports = function (t, e, n) {
        if (!t && !e && !n) throw new Error('Missing required arguments');
        if (!o.string(e))
          throw new TypeError('Second argument must be a String');
        if (!o.fn(n)) throw new TypeError('Third argument must be a Function');
        if (o.node(t))
          return (function (t, e, n) {
            return (
              t.addEventListener(e, n),
              {
                destroy: function () {
                  t.removeEventListener(e, n);
                },
              }
            );
          })(t, e, n);
        if (o.nodeList(t))
          return (function (t, e, n) {
            return (
              Array.prototype.forEach.call(t, function (t) {
                t.addEventListener(e, n);
              }),
              {
                destroy: function () {
                  Array.prototype.forEach.call(t, function (t) {
                    t.removeEventListener(e, n);
                  });
                },
              }
            );
          })(t, e, n);
        if (o.string(t))
          return (function (t, e, n) {
            return r(document.body, t, e, n);
          })(t, e, n);
        throw new TypeError(
          'First argument must be a String, HTMLElement, HTMLCollection, or NodeList',
        );
      };
    },
    function (t, e) {
      (e.node = function (t) {
        return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
      }),
        (e.nodeList = function (t) {
          var n = Object.prototype.toString.call(t);
          return (
            void 0 !== t &&
            ('[object NodeList]' === n || '[object HTMLCollection]' === n) &&
            'length' in t &&
            (0 === t.length || e.node(t[0]))
          );
        }),
        (e.string = function (t) {
          return 'string' == typeof t || t instanceof String;
        }),
        (e.fn = function (t) {
          return '[object Function]' === Object.prototype.toString.call(t);
        });
    },
    function (t, e, n) {
      var o = n(7);
      function r(t, e, n, r, i) {
        var a = function (t, e, n, r) {
          return function (n) {
            (n.delegateTarget = o(n.target, e)),
              n.delegateTarget && r.call(t, n);
          };
        }.apply(this, arguments);
        return (
          t.addEventListener(n, a, i),
          {
            destroy: function () {
              t.removeEventListener(n, a, i);
            },
          }
        );
      }
      t.exports = function (t, e, n, o, i) {
        return 'function' == typeof t.addEventListener
          ? r.apply(null, arguments)
          : 'function' == typeof n
            ? r.bind(null, document).apply(null, arguments)
            : ('string' == typeof t && (t = document.querySelectorAll(t)),
              Array.prototype.map.call(t, function (t) {
                return r(t, e, n, o, i);
              }));
      };
    },
    function (t, e) {
      var n = 9;
      if ('undefined' != typeof Element && !Element.prototype.matches) {
        var o = Element.prototype;
        o.matches =
          o.matchesSelector ||
          o.mozMatchesSelector ||
          o.msMatchesSelector ||
          o.oMatchesSelector ||
          o.webkitMatchesSelector;
      }
      t.exports = function (t, e) {
        for (; t && t.nodeType !== n; ) {
          if ('function' == typeof t.matches && t.matches(e)) return t;
          t = t.parentNode;
        }
      };
    },
  ]);
});
jQuery(document).ready(function (o) {
  WebFont.load({ google: { families: ['Open+Sans:400,600,700,800'] } }),
    o('div[data-test]').on('click', function () {
      o('.magic-copy').removeClass('copy-show'),
        o(this).prev().addClass('copy-show');
      var t,
        s = o(this).attr('data-test');
      (t = s),
        o('#magic').removeClass().addClass(t),
        window.setTimeout(function () {
          o('#magic').removeClass();
        }, 1500);
    }),
    new ClipboardJS('.magic-copy').on('success', function (t) {
      o('.copy-ok').addClass('to-show'),
        setTimeout(function () {
          o('.copy-ok').removeClass('to-show');
        }, 1e3),
        o('.magic-copy').removeClass('copy-show');
    });
});
var url = 'https://api.github.com/repos/minimac/magic',
  target = document.getElementsByClassName('git-stars')[0];
fetch(url)
  .then(function (o) {
    return o.json();
  })
  .then(function (o) {
    target.innerHTML += o.stargazers_count;
  })
  .catch(function (o) {
    console.log(o);
  });
