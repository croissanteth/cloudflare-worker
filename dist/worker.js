!(function(t) {
  var e = {}
  function r(n) {
    if (e[n]) return e[n].exports
    var i = (e[n] = { i: n, l: !1, exports: {} })
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports
  }
  ;(r.m = t),
    (r.c = e),
    (r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
    }),
    (r.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var n = Object.create(null)
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function(e) {
              return t[e]
            }.bind(null, i),
          )
      return n
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return r.d(e, 'a', e), e
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (r.p = ''),
    r((r.s = 38))
})([
  function(t, e, r) {
    'use strict'
    r.d(e, 'k', function() {
      return s
    }),
      r.d(e, 'j', function() {
        return u
      }),
      r.d(e, 'a', function() {
        return c
      }),
      r.d(e, 'b', function() {
        return l
      }),
      r.d(e, 'o', function() {
        return h
      }),
      r.d(e, 'p', function() {
        return f
      }),
      r.d(e, 'l', function() {
        return d
      }),
      r.d(e, 'i', function() {
        return p
      }),
      r.d(e, 'd', function() {
        return m
      }),
      r.d(e, 'e', function() {
        return g
      }),
      r.d(e, 'c', function() {
        return y
      }),
      r.d(e, 'g', function() {
        return b
      }),
      r.d(e, 'f', function() {
        return v
      }),
      r.d(e, 'h', function() {
        return w
      }),
      r.d(e, 'n', function() {
        return E
      }),
      r.d(e, 'm', function() {
        return _
      })
    const n = new (r(1)).b('bytes/5.5.0')
    function i(t) {
      return !!t.toHexString
    }
    function o(t) {
      return (
        t.slice ||
          (t.slice = function() {
            const e = Array.prototype.slice.call(arguments)
            return o(new Uint8Array(Array.prototype.slice.apply(t, e)))
          }),
        t
      )
    }
    function s(t) {
      return (d(t) && !(t.length % 2)) || u(t)
    }
    function a(t) {
      return 'number' == typeof t && t == t && t % 1 == 0
    }
    function u(t) {
      if (null == t) return !1
      if (t.constructor === Uint8Array) return !0
      if ('string' == typeof t) return !1
      if (!a(t.length) || t.length < 0) return !1
      for (let e = 0; e < t.length; e++) {
        const r = t[e]
        if (!a(r) || r < 0 || r >= 256) return !1
      }
      return !0
    }
    function c(t, e) {
      if ((e || (e = {}), 'number' == typeof t)) {
        n.checkSafeUint53(t, 'invalid arrayify value')
        const e = []
        for (; t; ) e.unshift(255 & t), (t = parseInt(String(t / 256)))
        return 0 === e.length && e.push(0), o(new Uint8Array(e))
      }
      if (
        (e.allowMissingPrefix &&
          'string' == typeof t &&
          '0x' !== t.substring(0, 2) &&
          (t = '0x' + t),
        i(t) && (t = t.toHexString()),
        d(t))
      ) {
        let r = t.substring(2)
        r.length % 2 &&
          ('left' === e.hexPad
            ? (r = '0x0' + r.substring(2))
            : 'right' === e.hexPad
            ? (r += '0')
            : n.throwArgumentError('hex data is odd-length', 'value', t))
        const i = []
        for (let t = 0; t < r.length; t += 2)
          i.push(parseInt(r.substring(t, t + 2), 16))
        return o(new Uint8Array(i))
      }
      return u(t)
        ? o(new Uint8Array(t))
        : n.throwArgumentError('invalid arrayify value', 'value', t)
    }
    function l(t) {
      const e = t.map(t => c(t)),
        r = e.reduce((t, e) => t + e.length, 0),
        n = new Uint8Array(r)
      return e.reduce((t, e) => (n.set(e, t), t + e.length), 0), o(n)
    }
    function h(t) {
      let e = c(t)
      if (0 === e.length) return e
      let r = 0
      for (; r < e.length && 0 === e[r]; ) r++
      return r && (e = e.slice(r)), e
    }
    function f(t, e) {
      ;(t = c(t)).length > e &&
        n.throwArgumentError('value out of range', 'value', arguments[0])
      const r = new Uint8Array(e)
      return r.set(t, e - t.length), o(r)
    }
    function d(t, e) {
      return (
        !('string' != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
        (!e || t.length === 2 + 2 * e)
      )
    }
    function p(t, e) {
      if ((e || (e = {}), 'number' == typeof t)) {
        n.checkSafeUint53(t, 'invalid hexlify value')
        let e = ''
        for (; t; )
          (e = '0123456789abcdef'[15 & t] + e), (t = Math.floor(t / 16))
        return e.length ? (e.length % 2 && (e = '0' + e), '0x' + e) : '0x00'
      }
      if ('bigint' == typeof t)
        return (t = t.toString(16)).length % 2 ? '0x0' + t : '0x' + t
      if (
        (e.allowMissingPrefix &&
          'string' == typeof t &&
          '0x' !== t.substring(0, 2) &&
          (t = '0x' + t),
        i(t))
      )
        return t.toHexString()
      if (d(t))
        return (
          t.length % 2 &&
            ('left' === e.hexPad
              ? (t = '0x0' + t.substring(2))
              : 'right' === e.hexPad
              ? (t += '0')
              : n.throwArgumentError('hex data is odd-length', 'value', t)),
          t.toLowerCase()
        )
      if (u(t)) {
        let e = '0x'
        for (let r = 0; r < t.length; r++) {
          let n = t[r]
          e += '0123456789abcdef'[(240 & n) >> 4] + '0123456789abcdef'[15 & n]
        }
        return e
      }
      return n.throwArgumentError('invalid hexlify value', 'value', t)
    }
    function m(t) {
      if ('string' != typeof t) t = p(t)
      else if (!d(t) || t.length % 2) return null
      return (t.length - 2) / 2
    }
    function g(t, e, r) {
      return (
        'string' != typeof t
          ? (t = p(t))
          : (!d(t) || t.length % 2) &&
            n.throwArgumentError('invalid hexData', 'value', t),
        (e = 2 + 2 * e),
        null != r ? '0x' + t.substring(e, 2 + 2 * r) : '0x' + t.substring(e)
      )
    }
    function y(t) {
      let e = '0x'
      return (
        t.forEach(t => {
          e += p(t).substring(2)
        }),
        e
      )
    }
    function b(t) {
      const e = v(p(t, { hexPad: 'left' }))
      return '0x' === e ? '0x0' : e
    }
    function v(t) {
      'string' != typeof t && (t = p(t)),
        d(t) || n.throwArgumentError('invalid hex string', 'value', t),
        (t = t.substring(2))
      let e = 0
      for (; e < t.length && '0' === t[e]; ) e++
      return '0x' + t.substring(e)
    }
    function w(t, e) {
      for (
        'string' != typeof t
          ? (t = p(t))
          : d(t) || n.throwArgumentError('invalid hex string', 'value', t),
          t.length > 2 * e + 2 &&
            n.throwArgumentError('value out of range', 'value', arguments[1]);
        t.length < 2 * e + 2;

      )
        t = '0x0' + t.substring(2)
      return t
    }
    function E(t) {
      const e = { r: '0x', s: '0x', _vs: '0x', recoveryParam: 0, v: 0 }
      if (s(t)) {
        const r = c(t)
        65 !== r.length &&
          n.throwArgumentError(
            'invalid signature string; must be 65 bytes',
            'signature',
            t,
          ),
          (e.r = p(r.slice(0, 32))),
          (e.s = p(r.slice(32, 64))),
          (e.v = r[64]),
          e.v < 27 &&
            (0 === e.v || 1 === e.v
              ? (e.v += 27)
              : n.throwArgumentError(
                  'signature invalid v byte',
                  'signature',
                  t,
                )),
          (e.recoveryParam = 1 - (e.v % 2)),
          e.recoveryParam && (r[32] |= 128),
          (e._vs = p(r.slice(32, 64)))
      } else {
        if (
          ((e.r = t.r),
          (e.s = t.s),
          (e.v = t.v),
          (e.recoveryParam = t.recoveryParam),
          (e._vs = t._vs),
          null != e._vs)
        ) {
          const r = f(c(e._vs), 32)
          e._vs = p(r)
          const i = r[0] >= 128 ? 1 : 0
          null == e.recoveryParam
            ? (e.recoveryParam = i)
            : e.recoveryParam !== i &&
              n.throwArgumentError(
                'signature recoveryParam mismatch _vs',
                'signature',
                t,
              ),
            (r[0] &= 127)
          const o = p(r)
          null == e.s
            ? (e.s = o)
            : e.s !== o &&
              n.throwArgumentError('signature v mismatch _vs', 'signature', t)
        }
        if (null == e.recoveryParam)
          null == e.v
            ? n.throwArgumentError(
                'signature missing v and recoveryParam',
                'signature',
                t,
              )
            : 0 === e.v || 1 === e.v
            ? (e.recoveryParam = e.v)
            : (e.recoveryParam = 1 - (e.v % 2))
        else if (null == e.v) e.v = 27 + e.recoveryParam
        else {
          const r = 0 === e.v || 1 === e.v ? e.v : 1 - (e.v % 2)
          e.recoveryParam !== r &&
            n.throwArgumentError(
              'signature recoveryParam mismatch v',
              'signature',
              t,
            )
        }
        null != e.r && d(e.r)
          ? (e.r = w(e.r, 32))
          : n.throwArgumentError(
              'signature missing or invalid r',
              'signature',
              t,
            ),
          null != e.s && d(e.s)
            ? (e.s = w(e.s, 32))
            : n.throwArgumentError(
                'signature missing or invalid s',
                'signature',
                t,
              )
        const r = c(e.s)
        r[0] >= 128 &&
          n.throwArgumentError('signature s out of range', 'signature', t),
          e.recoveryParam && (r[0] |= 128)
        const i = p(r)
        e._vs &&
          (d(e._vs) ||
            n.throwArgumentError('signature invalid _vs', 'signature', t),
          (e._vs = w(e._vs, 32))),
          null == e._vs
            ? (e._vs = i)
            : e._vs !== i &&
              n.throwArgumentError(
                'signature _vs mismatch v and s',
                'signature',
                t,
              )
      }
      return e
    }
    function _(t) {
      return p(l([(t = E(t)).r, t.s, t.recoveryParam ? '0x1c' : '0x1b']))
    }
  },
  function(t, e, r) {
    'use strict'
    r.d(e, 'a', function() {
      return l
    }),
      r.d(e, 'b', function() {
        return f
      })
    let n = !1,
      i = !1
    const o = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 }
    let s = o.default,
      a = null
    const u = (function() {
      try {
        const t = []
        if (
          (['NFD', 'NFC', 'NFKD', 'NFKC'].forEach(e => {
            try {
              if ('test' !== 'test'.normalize(e))
                throw new Error('bad normalize')
            } catch (r) {
              t.push(e)
            }
          }),
          t.length)
        )
          throw new Error('missing ' + t.join(', '))
        if (
          String.fromCharCode(233).normalize('NFD') !==
          String.fromCharCode(101, 769)
        )
          throw new Error('broken implementation')
      } catch (t) {
        return t.message
      }
      return null
    })()
    var c, l
    !(function(t) {
      ;(t.DEBUG = 'DEBUG'),
        (t.INFO = 'INFO'),
        (t.WARNING = 'WARNING'),
        (t.ERROR = 'ERROR'),
        (t.OFF = 'OFF')
    })(c || (c = {})),
      (function(t) {
        ;(t.UNKNOWN_ERROR = 'UNKNOWN_ERROR'),
          (t.NOT_IMPLEMENTED = 'NOT_IMPLEMENTED'),
          (t.UNSUPPORTED_OPERATION = 'UNSUPPORTED_OPERATION'),
          (t.NETWORK_ERROR = 'NETWORK_ERROR'),
          (t.SERVER_ERROR = 'SERVER_ERROR'),
          (t.TIMEOUT = 'TIMEOUT'),
          (t.BUFFER_OVERRUN = 'BUFFER_OVERRUN'),
          (t.NUMERIC_FAULT = 'NUMERIC_FAULT'),
          (t.MISSING_NEW = 'MISSING_NEW'),
          (t.INVALID_ARGUMENT = 'INVALID_ARGUMENT'),
          (t.MISSING_ARGUMENT = 'MISSING_ARGUMENT'),
          (t.UNEXPECTED_ARGUMENT = 'UNEXPECTED_ARGUMENT'),
          (t.CALL_EXCEPTION = 'CALL_EXCEPTION'),
          (t.INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS'),
          (t.NONCE_EXPIRED = 'NONCE_EXPIRED'),
          (t.REPLACEMENT_UNDERPRICED = 'REPLACEMENT_UNDERPRICED'),
          (t.UNPREDICTABLE_GAS_LIMIT = 'UNPREDICTABLE_GAS_LIMIT'),
          (t.TRANSACTION_REPLACED = 'TRANSACTION_REPLACED')
      })(l || (l = {}))
    const h = '0123456789abcdef'
    class f {
      constructor(t) {
        Object.defineProperty(this, 'version', {
          enumerable: !0,
          value: t,
          writable: !1,
        })
      }
      _log(t, e) {
        const r = t.toLowerCase()
        null == o[r] &&
          this.throwArgumentError('invalid log level name', 'logLevel', t),
          s > o[r] || console.log.apply(console, e)
      }
      debug(...t) {
        this._log(f.levels.DEBUG, t)
      }
      info(...t) {
        this._log(f.levels.INFO, t)
      }
      warn(...t) {
        this._log(f.levels.WARNING, t)
      }
      makeError(t, e, r) {
        if (i) return this.makeError('censored error', e, {})
        e || (e = f.errors.UNKNOWN_ERROR), r || (r = {})
        const n = []
        Object.keys(r).forEach(t => {
          const e = r[t]
          try {
            if (e instanceof Uint8Array) {
              let r = ''
              for (let t = 0; t < e.length; t++)
                (r += h[e[t] >> 4]), (r += h[15 & e[t]])
              n.push(t + '=Uint8Array(0x' + r + ')')
            } else n.push(t + '=' + JSON.stringify(e))
          } catch (e) {
            n.push(t + '=' + JSON.stringify(r[t].toString()))
          }
        }),
          n.push('code=' + e),
          n.push('version=' + this.version)
        const o = t
        n.length && (t += ' (' + n.join(', ') + ')')
        const s = new Error(t)
        return (
          (s.reason = o),
          (s.code = e),
          Object.keys(r).forEach(function(t) {
            s[t] = r[t]
          }),
          s
        )
      }
      throwError(t, e, r) {
        throw this.makeError(t, e, r)
      }
      throwArgumentError(t, e, r) {
        return this.throwError(t, f.errors.INVALID_ARGUMENT, {
          argument: e,
          value: r,
        })
      }
      assert(t, e, r, n) {
        t || this.throwError(e, r, n)
      }
      assertArgument(t, e, r, n) {
        t || this.throwArgumentError(e, r, n)
      }
      checkNormalize(t) {
        null == t && (t = 'platform missing String.prototype.normalize'),
          u &&
            this.throwError(
              'platform missing String.prototype.normalize',
              f.errors.UNSUPPORTED_OPERATION,
              { operation: 'String.prototype.normalize', form: u },
            )
      }
      checkSafeUint53(t, e) {
        'number' == typeof t &&
          (null == e && (e = 'value not safe'),
          (t < 0 || t >= 9007199254740991) &&
            this.throwError(e, f.errors.NUMERIC_FAULT, {
              operation: 'checkSafeInteger',
              fault: 'out-of-safe-range',
              value: t,
            }),
          t % 1 &&
            this.throwError(e, f.errors.NUMERIC_FAULT, {
              operation: 'checkSafeInteger',
              fault: 'non-integer',
              value: t,
            }))
      }
      checkArgumentCount(t, e, r) {
        ;(r = r ? ': ' + r : ''),
          t < e &&
            this.throwError('missing argument' + r, f.errors.MISSING_ARGUMENT, {
              count: t,
              expectedCount: e,
            }),
          t > e &&
            this.throwError(
              'too many arguments' + r,
              f.errors.UNEXPECTED_ARGUMENT,
              { count: t, expectedCount: e },
            )
      }
      checkNew(t, e) {
        ;(t !== Object && null != t) ||
          this.throwError('missing new', f.errors.MISSING_NEW, { name: e.name })
      }
      checkAbstract(t, e) {
        t === e
          ? this.throwError(
              'cannot instantiate abstract class ' +
                JSON.stringify(e.name) +
                ' directly; use a sub-class',
              f.errors.UNSUPPORTED_OPERATION,
              { name: t.name, operation: 'new' },
            )
          : (t !== Object && null != t) ||
            this.throwError('missing new', f.errors.MISSING_NEW, {
              name: e.name,
            })
      }
      static globalLogger() {
        return a || (a = new f('logger/5.5.0')), a
      }
      static setCensorship(t, e) {
        if (
          (!t &&
            e &&
            this.globalLogger().throwError(
              'cannot permanently disable censorship',
              f.errors.UNSUPPORTED_OPERATION,
              { operation: 'setCensorship' },
            ),
          n)
        ) {
          if (!t) return
          this.globalLogger().throwError(
            'error censorship permanent',
            f.errors.UNSUPPORTED_OPERATION,
            { operation: 'setCensorship' },
          )
        }
        ;(i = !!t), (n = !!e)
      }
      static setLogLevel(t) {
        const e = o[t.toLowerCase()]
        null != e ? (s = e) : f.globalLogger().warn('invalid log level - ' + t)
      }
      static from(t) {
        return new f(t)
      }
    }
    ;(f.errors = l), (f.levels = c)
  },
  function(t, e, r) {
    ;(function(t) {
      !(function(t, e) {
        'use strict'
        function n(t, e) {
          if (!t) throw new Error(e || 'Assertion failed')
        }
        function i(t, e) {
          t.super_ = e
          var r = function() {}
          ;(r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t)
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t
          ;(this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (('le' !== e && 'be' !== e) || ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || 'be'))
        }
        var s
        'object' == typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26)
        try {
          s =
            'undefined' != typeof window && void 0 !== window.Buffer
              ? window.Buffer
              : r(27).Buffer
        } catch (t) {}
        function a(t, e) {
          var r = t.charCodeAt(e)
          return r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : (r - 48) & 15
        }
        function u(t, e, r) {
          var n = a(t, r)
          return r - 1 >= e && (n |= a(t, r - 1) << 4), n
        }
        function c(t, e, r, n) {
          for (var i = 0, o = Math.min(t.length, r), s = e; s < o; s++) {
            var a = t.charCodeAt(s) - 48
            ;(i *= n), (i += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a)
          }
          return i
        }
        ;(o.isBN = function(t) {
          return (
            t instanceof o ||
            (null !== t &&
              'object' == typeof t &&
              t.constructor.wordSize === o.wordSize &&
              Array.isArray(t.words))
          )
        }),
          (o.max = function(t, e) {
            return t.cmp(e) > 0 ? t : e
          }),
          (o.min = function(t, e) {
            return t.cmp(e) < 0 ? t : e
          }),
          (o.prototype._init = function(t, e, r) {
            if ('number' == typeof t) return this._initNumber(t, e, r)
            if ('object' == typeof t) return this._initArray(t, e, r)
            'hex' === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36)
            var i = 0
            '-' === (t = t.toString().replace(/\s+/g, ''))[0] &&
              (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i),
                    'le' === r && this._initArray(this.toArray(), e, r)))
          }),
          (o.prototype._initNumber = function(t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              'le' === r && this._initArray(this.toArray(), e, r)
          }),
          (o.prototype._initArray = function(t, e, r) {
            if ((n('number' == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this
            ;(this.length = Math.ceil(t.length / 3)),
              (this.words = new Array(this.length))
            for (var i = 0; i < this.length; i++) this.words[i] = 0
            var o,
              s,
              a = 0
            if ('be' === r)
              for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                (s = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                  (this.words[o] |= (s << a) & 67108863),
                  (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), o++)
            else if ('le' === r)
              for (i = 0, o = 0; i < t.length; i += 3)
                (s = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                  (this.words[o] |= (s << a) & 67108863),
                  (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), o++)
            return this.strip()
          }),
          (o.prototype._parseHex = function(t, e, r) {
            ;(this.length = Math.ceil((t.length - e) / 6)),
              (this.words = new Array(this.length))
            for (var n = 0; n < this.length; n++) this.words[n] = 0
            var i,
              o = 0,
              s = 0
            if ('be' === r)
              for (n = t.length - 1; n >= e; n -= 2)
                (i = u(t, e, n) << o),
                  (this.words[s] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                    : (o += 8)
            else
              for (
                n = (t.length - e) % 2 == 0 ? e + 1 : e;
                n < t.length;
                n += 2
              )
                (i = u(t, e, n) << o),
                  (this.words[s] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                    : (o += 8)
            this.strip()
          }),
          (o.prototype._parseBase = function(t, e, r) {
            ;(this.words = [0]), (this.length = 1)
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++
            n--, (i = (i / e) | 0)
            for (
              var o = t.length - r,
                s = o % n,
                a = Math.min(o, o - s) + r,
                u = 0,
                l = r;
              l < a;
              l += n
            )
              (u = c(t, l, l + n, e)),
                this.imuln(i),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u)
            if (0 !== s) {
              var h = 1
              for (u = c(t, l, t.length, e), l = 0; l < s; l++) h *= e
              this.imuln(h),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u)
            }
            this.strip()
          }),
          (o.prototype.copy = function(t) {
            t.words = new Array(this.length)
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e]
            ;(t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red)
          }),
          (o.prototype.clone = function() {
            var t = new o(null)
            return this.copy(t), t
          }),
          (o.prototype._expand = function(t) {
            for (; this.length < t; ) this.words[this.length++] = 0
            return this
          }),
          (o.prototype.strip = function() {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--
            return this._normSign()
          }),
          (o.prototype._normSign = function() {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            )
          }),
          (o.prototype.inspect = function() {
            return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>'
          })
        var l = [
            '',
            '0',
            '00',
            '000',
            '0000',
            '00000',
            '000000',
            '0000000',
            '00000000',
            '000000000',
            '0000000000',
            '00000000000',
            '000000000000',
            '0000000000000',
            '00000000000000',
            '000000000000000',
            '0000000000000000',
            '00000000000000000',
            '000000000000000000',
            '0000000000000000000',
            '00000000000000000000',
            '000000000000000000000',
            '0000000000000000000000',
            '00000000000000000000000',
            '000000000000000000000000',
            '0000000000000000000000000',
          ],
          h = [
            0,
            0,
            25,
            16,
            12,
            11,
            10,
            9,
            8,
            8,
            7,
            7,
            7,
            7,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
          ],
          f = [
            0,
            0,
            33554432,
            43046721,
            16777216,
            48828125,
            60466176,
            40353607,
            16777216,
            43046721,
            1e7,
            19487171,
            35831808,
            62748517,
            7529536,
            11390625,
            16777216,
            24137569,
            34012224,
            47045881,
            64e6,
            4084101,
            5153632,
            6436343,
            7962624,
            9765625,
            11881376,
            14348907,
            17210368,
            20511149,
            243e5,
            28629151,
            33554432,
            39135393,
            45435424,
            52521875,
            60466176,
          ]
        function d(t, e, r) {
          r.negative = e.negative ^ t.negative
          var n = (t.length + e.length) | 0
          ;(r.length = n), (n = (n - 1) | 0)
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            s = i * o,
            a = 67108863 & s,
            u = (s / 67108864) | 0
          r.words[0] = a
          for (var c = 1; c < n; c++) {
            for (
              var l = u >>> 26,
                h = 67108863 & u,
                f = Math.min(c, e.length - 1),
                d = Math.max(0, c - t.length + 1);
              d <= f;
              d++
            ) {
              var p = (c - d) | 0
              ;(l +=
                ((s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + h) /
                  67108864) |
                0),
                (h = 67108863 & s)
            }
            ;(r.words[c] = 0 | h), (u = 0 | l)
          }
          return 0 !== u ? (r.words[c] = 0 | u) : r.length--, r.strip()
        }
        ;(o.prototype.toString = function(t, e) {
          var r
          if (((e = 0 | e || 1), 16 === (t = t || 10) || 'hex' === t)) {
            r = ''
            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
              var a = this.words[s],
                u = (16777215 & ((a << i) | o)).toString(16)
              ;(r =
                0 !== (o = (a >>> (24 - i)) & 16777215) || s !== this.length - 1
                  ? l[6 - u.length] + u + r
                  : u + r),
                (i += 2) >= 26 && ((i -= 26), s--)
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; )
              r = '0' + r
            return 0 !== this.negative && (r = '-' + r), r
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var c = h[t],
              d = f[t]
            r = ''
            var p = this.clone()
            for (p.negative = 0; !p.isZero(); ) {
              var m = p.modn(d).toString(t)
              r = (p = p.idivn(d)).isZero() ? m + r : l[c - m.length] + m + r
            }
            for (this.isZero() && (r = '0' + r); r.length % e != 0; )
              r = '0' + r
            return 0 !== this.negative && (r = '-' + r), r
          }
          n(!1, 'Base should be between 2 and 36')
        }),
          (o.prototype.toNumber = function() {
            var t = this.words[0]
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  n(!1, 'Number can only safely store up to 53 bits'),
              0 !== this.negative ? -t : t
            )
          }),
          (o.prototype.toJSON = function() {
            return this.toString(16)
          }),
          (o.prototype.toBuffer = function(t, e) {
            return n(void 0 !== s), this.toArrayLike(s, t, e)
          }),
          (o.prototype.toArray = function(t, e) {
            return this.toArrayLike(Array, t, e)
          }),
          (o.prototype.toArrayLike = function(t, e, r) {
            var i = this.byteLength(),
              o = r || Math.max(1, i)
            n(i <= o, 'byte array longer than desired length'),
              n(o > 0, 'Requested array length <= 0'),
              this.strip()
            var s,
              a,
              u = 'le' === e,
              c = new t(o),
              l = this.clone()
            if (u) {
              for (a = 0; !l.isZero(); a++)
                (s = l.andln(255)), l.iushrn(8), (c[a] = s)
              for (; a < o; a++) c[a] = 0
            } else {
              for (a = 0; a < o - i; a++) c[a] = 0
              for (a = 0; !l.isZero(); a++)
                (s = l.andln(255)), l.iushrn(8), (c[o - a - 1] = s)
            }
            return c
          }),
          Math.clz32
            ? (o.prototype._countBits = function(t) {
                return 32 - Math.clz32(t)
              })
            : (o.prototype._countBits = function(t) {
                var e = t,
                  r = 0
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                )
              }),
          (o.prototype._zeroBits = function(t) {
            if (0 === t) return 26
            var e = t,
              r = 0
            return (
              0 == (8191 & e) && ((r += 13), (e >>>= 13)),
              0 == (127 & e) && ((r += 7), (e >>>= 7)),
              0 == (15 & e) && ((r += 4), (e >>>= 4)),
              0 == (3 & e) && ((r += 2), (e >>>= 2)),
              0 == (1 & e) && r++,
              r
            )
          }),
          (o.prototype.bitLength = function() {
            var t = this.words[this.length - 1],
              e = this._countBits(t)
            return 26 * (this.length - 1) + e
          }),
          (o.prototype.zeroBits = function() {
            if (this.isZero()) return 0
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e])
              if (((t += r), 26 !== r)) break
            }
            return t
          }),
          (o.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8)
          }),
          (o.prototype.toTwos = function(t) {
            return 0 !== this.negative
              ? this.abs()
                  .inotn(t)
                  .iaddn(1)
              : this.clone()
          }),
          (o.prototype.fromTwos = function(t) {
            return this.testn(t - 1)
              ? this.notn(t)
                  .iaddn(1)
                  .ineg()
              : this.clone()
          }),
          (o.prototype.isNeg = function() {
            return 0 !== this.negative
          }),
          (o.prototype.neg = function() {
            return this.clone().ineg()
          }),
          (o.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1), this
          }),
          (o.prototype.iuor = function(t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e]
            return this.strip()
          }),
          (o.prototype.ior = function(t) {
            return n(0 == (this.negative | t.negative)), this.iuor(t)
          }),
          (o.prototype.or = function(t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this)
          }),
          (o.prototype.uor = function(t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this)
          }),
          (o.prototype.iuand = function(t) {
            var e
            e = this.length > t.length ? t : this
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r]
            return (this.length = e.length), this.strip()
          }),
          (o.prototype.iand = function(t) {
            return n(0 == (this.negative | t.negative)), this.iuand(t)
          }),
          (o.prototype.and = function(t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this)
          }),
          (o.prototype.uand = function(t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this)
          }),
          (o.prototype.iuxor = function(t) {
            var e, r
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this))
            for (var n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n]
            if (this !== e) for (; n < e.length; n++) this.words[n] = e.words[n]
            return (this.length = e.length), this.strip()
          }),
          (o.prototype.ixor = function(t) {
            return n(0 == (this.negative | t.negative)), this.iuxor(t)
          }),
          (o.prototype.xor = function(t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this)
          }),
          (o.prototype.uxor = function(t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this)
          }),
          (o.prototype.inotn = function(t) {
            n('number' == typeof t && t >= 0)
            var e = 0 | Math.ceil(t / 26),
              r = t % 26
            this._expand(e), r > 0 && e--
            for (var i = 0; i < e; i++)
              this.words[i] = 67108863 & ~this.words[i]
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this.strip()
            )
          }),
          (o.prototype.notn = function(t) {
            return this.clone().inotn(t)
          }),
          (o.prototype.setn = function(t, e) {
            n('number' == typeof t && t >= 0)
            var r = (t / 26) | 0,
              i = t % 26
            return (
              this._expand(r + 1),
              (this.words[r] = e
                ? this.words[r] | (1 << i)
                : this.words[r] & ~(1 << i)),
              this.strip()
            )
          }),
          (o.prototype.iadd = function(t) {
            var e, r, n
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              )
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              )
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this))
            for (var i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26)
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26)
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o]
            return this
          }),
          (o.prototype.add = function(t) {
            var e
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this)
          }),
          (o.prototype.isub = function(t) {
            if (0 !== t.negative) {
              t.negative = 0
              var e = this.iadd(t)
              return (t.negative = 1), e._normSign()
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              )
            var r,
              n,
              i = this.cmp(t)
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              )
            i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this))
            for (var o = 0, s = 0; s < n.length; s++)
              (o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & e)
            for (; 0 !== o && s < r.length; s++)
              (o = (e = (0 | r.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & e)
            if (0 === o && s < r.length && r !== this)
              for (; s < r.length; s++) this.words[s] = r.words[s]
            return (
              (this.length = Math.max(this.length, s)),
              r !== this && (this.negative = 1),
              this.strip()
            )
          }),
          (o.prototype.sub = function(t) {
            return this.clone().isub(t)
          })
        var p = function(t, e, r) {
          var n,
            i,
            o,
            s = t.words,
            a = e.words,
            u = r.words,
            c = 0,
            l = 0 | s[0],
            h = 8191 & l,
            f = l >>> 13,
            d = 0 | s[1],
            p = 8191 & d,
            m = d >>> 13,
            g = 0 | s[2],
            y = 8191 & g,
            b = g >>> 13,
            v = 0 | s[3],
            w = 8191 & v,
            E = v >>> 13,
            _ = 0 | s[4],
            k = 8191 & _,
            A = _ >>> 13,
            S = 0 | s[5],
            P = 8191 & S,
            O = S >>> 13,
            N = 0 | s[6],
            x = 8191 & N,
            M = N >>> 13,
            T = 0 | s[7],
            I = 8191 & T,
            R = T >>> 13,
            C = 0 | s[8],
            j = 8191 & C,
            B = C >>> 13,
            F = 0 | s[9],
            L = 8191 & F,
            U = F >>> 13,
            D = 0 | a[0],
            z = 8191 & D,
            G = D >>> 13,
            K = 0 | a[1],
            q = 8191 & K,
            H = K >>> 13,
            V = 0 | a[2],
            W = 8191 & V,
            J = V >>> 13,
            $ = 0 | a[3],
            Z = 8191 & $,
            X = $ >>> 13,
            Y = 0 | a[4],
            Q = 8191 & Y,
            tt = Y >>> 13,
            et = 0 | a[5],
            rt = 8191 & et,
            nt = et >>> 13,
            it = 0 | a[6],
            ot = 8191 & it,
            st = it >>> 13,
            at = 0 | a[7],
            ut = 8191 & at,
            ct = at >>> 13,
            lt = 0 | a[8],
            ht = 8191 & lt,
            ft = lt >>> 13,
            dt = 0 | a[9],
            pt = 8191 & dt,
            mt = dt >>> 13
          ;(r.negative = t.negative ^ e.negative), (r.length = 19)
          var gt =
            (((c + (n = Math.imul(h, z))) | 0) +
              ((8191 & (i = ((i = Math.imul(h, G)) + Math.imul(f, z)) | 0)) <<
                13)) |
            0
          ;(c = ((((o = Math.imul(f, G)) + (i >>> 13)) | 0) + (gt >>> 26)) | 0),
            (gt &= 67108863),
            (n = Math.imul(p, z)),
            (i = ((i = Math.imul(p, G)) + Math.imul(m, z)) | 0),
            (o = Math.imul(m, G))
          var yt =
            (((c + (n = (n + Math.imul(h, q)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, H)) | 0) + Math.imul(f, q)) | 0)) <<
                13)) |
            0
          ;(c =
            ((((o = (o + Math.imul(f, H)) | 0) + (i >>> 13)) | 0) +
              (yt >>> 26)) |
            0),
            (yt &= 67108863),
            (n = Math.imul(y, z)),
            (i = ((i = Math.imul(y, G)) + Math.imul(b, z)) | 0),
            (o = Math.imul(b, G)),
            (n = (n + Math.imul(p, q)) | 0),
            (i = ((i = (i + Math.imul(p, H)) | 0) + Math.imul(m, q)) | 0),
            (o = (o + Math.imul(m, H)) | 0)
          var bt =
            (((c + (n = (n + Math.imul(h, W)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, J)) | 0) + Math.imul(f, W)) | 0)) <<
                13)) |
            0
          ;(c =
            ((((o = (o + Math.imul(f, J)) | 0) + (i >>> 13)) | 0) +
              (bt >>> 26)) |
            0),
            (bt &= 67108863),
            (n = Math.imul(w, z)),
            (i = ((i = Math.imul(w, G)) + Math.imul(E, z)) | 0),
            (o = Math.imul(E, G)),
            (n = (n + Math.imul(y, q)) | 0),
            (i = ((i = (i + Math.imul(y, H)) | 0) + Math.imul(b, q)) | 0),
            (o = (o + Math.imul(b, H)) | 0),
            (n = (n + Math.imul(p, W)) | 0),
            (i = ((i = (i + Math.imul(p, J)) | 0) + Math.imul(m, W)) | 0),
            (o = (o + Math.imul(m, J)) | 0)
          var vt =
            (((c + (n = (n + Math.imul(h, Z)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, X)) | 0) + Math.imul(f, Z)) | 0)) <<
                13)) |
            0
          ;(c =
            ((((o = (o + Math.imul(f, X)) | 0) + (i >>> 13)) | 0) +
              (vt >>> 26)) |
            0),
            (vt &= 67108863),
            (n = Math.imul(k, z)),
            (i = ((i = Math.imul(k, G)) + Math.imul(A, z)) | 0),
            (o = Math.imul(A, G)),
            (n = (n + Math.imul(w, q)) | 0),
            (i = ((i = (i + Math.imul(w, H)) | 0) + Math.imul(E, q)) | 0),
            (o = (o + Math.imul(E, H)) | 0),
            (n = (n + Math.imul(y, W)) | 0),
            (i = ((i = (i + Math.imul(y, J)) | 0) + Math.imul(b, W)) | 0),
            (o = (o + Math.imul(b, J)) | 0),
            (n = (n + Math.imul(p, Z)) | 0),
            (i = ((i = (i + Math.imul(p, X)) | 0) + Math.imul(m, Z)) | 0),
            (o = (o + Math.imul(m, X)) | 0)
          var wt =
            (((c + (n = (n + Math.imul(h, Q)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, tt)) | 0) + Math.imul(f, Q)) | 0)) <<
                13)) |
            0
          ;(c =
            ((((o = (o + Math.imul(f, tt)) | 0) + (i >>> 13)) | 0) +
              (wt >>> 26)) |
            0),
            (wt &= 67108863),
            (n = Math.imul(P, z)),
            (i = ((i = Math.imul(P, G)) + Math.imul(O, z)) | 0),
            (o = Math.imul(O, G)),
            (n = (n + Math.imul(k, q)) | 0),
            (i = ((i = (i + Math.imul(k, H)) | 0) + Math.imul(A, q)) | 0),
            (o = (o + Math.imul(A, H)) | 0),
            (n = (n + Math.imul(w, W)) | 0),
            (i = ((i = (i + Math.imul(w, J)) | 0) + Math.imul(E, W)) | 0),
            (o = (o + Math.imul(E, J)) | 0),
            (n = (n + Math.imul(y, Z)) | 0),
            (i = ((i = (i + Math.imul(y, X)) | 0) + Math.imul(b, Z)) | 0),
            (o = (o + Math.imul(b, X)) | 0),
            (n = (n + Math.imul(p, Q)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(m, Q)) | 0),
            (o = (o + Math.imul(m, tt)) | 0)
          var Et =
            (((c + (n = (n + Math.imul(h, rt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, nt)) | 0) + Math.imul(f, rt)) | 0)) <<
                13)) |
            0
          ;(c =
            ((((o = (o + Math.imul(f, nt)) | 0) + (i >>> 13)) | 0) +
              (Et >>> 26)) |
            0),
            (Et &= 67108863),
            (n = Math.imul(x, z)),
            (i = ((i = Math.imul(x, G)) + Math.imul(M, z)) | 0),
            (o = Math.imul(M, G)),
            (n = (n + Math.imul(P, q)) | 0),
            (i = ((i = (i + Math.imul(P, H)) | 0) + Math.imul(O, q)) | 0),
            (o = (o + Math.imul(O, H)) | 0),
            (n = (n + Math.imul(k, W)) | 0),
            (i = ((i = (i + Math.imul(k, J)) | 0) + Math.imul(A, W)) | 0),
            (o = (o + Math.imul(A, J)) | 0),
            (n = (n + Math.imul(w, Z)) | 0),
            (i = ((i = (i + Math.imul(w, X)) | 0) + Math.imul(E, Z)) | 0),
            (o = (o + Math.imul(E, X)) | 0),
            (n = (n + Math.imul(y, Q)) | 0),
            (i = ((i = (i + Math.imul(y, tt)) | 0) + Math.imul(b, Q)) | 0),
            (o = (o + Math.imul(b, tt)) | 0),
            (n = (n + Math.imul(p, rt)) | 0),
            (i = ((i = (i + Math.imul(p, nt)) | 0) + Math.imul(m, rt)) | 0),
            (o = (o + Math.imul(m, nt)) | 0)
          var _t =
            (((c + (n = (n + Math.imul(h, ot)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, st)) | 0) + Math.imul(f, ot)) | 0)) <<
                13)) |
            0
          ;(c =
            ((((o = (o + Math.imul(f, st)) | 0) + (i >>> 13)) | 0) +
              (_t >>> 26)) |
            0),
            (_t &= 67108863),
            (n = Math.imul(I, z)),
            (i = ((i = Math.imul(I, G)) + Math.imul(R, z)) | 0),
            (o = Math.imul(R, G)),
            (n = (n + Math.imul(x, q)) | 0),
            (i = ((i = (i + Math.imul(x, H)) | 0) + Math.imul(M, q)) | 0),
            (o = (o + Math.imul(M, H)) | 0),
            (n = (n + Math.imul(P, W)) | 0),
            (i = ((i = (i + Math.imul(P, J)) | 0) + Math.imul(O, W)) | 0),
            (o = (o + Math.imul(O, J)) | 0),
            (n = (n + Math.imul(k, Z)) | 0),
            (i = ((i = (i + Math.imul(k, X)) | 0) + Math.imul(A, Z)) | 0),
            (o = (o + Math.imul(A, X)) | 0),
            (n = (n + Math.imul(w, Q)) | 0),
            (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(E, Q)) | 0),
            (o = (o + Math.imul(E, tt)) | 0),
            (n = (n + Math.imul(y, rt)) | 0),
            (i = ((i = (i + Math.imul(y, nt)) | 0) + Math.imul(b, rt)) | 0),
            (o = (o + Math.imul(b, nt)) | 0),
            (n = (n + Math.imul(p, ot)) | 0),
            (i = ((i = (i + Math.imul(p, st)) | 0) + Math.imul(m, ot)) | 0),
            (o = (o + Math.imul(m, st)) | 0)
          var kt =
            (((c + (n = (n + Math.imul(h, ut)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, ct)) | 0) + Math.imul(f, ut)) | 0)) <<
                13)) |
            0
          ;(c =
            ((((o = (o + Math.imul(f, ct)) | 0) + (i >>> 13)) | 0) +
              (kt >>> 26)) |
            0),
            (kt &= 67108863),
            (n = Math.imul(j, z)),
            (i = ((i = Math.imul(j, G)) + Math.imul(B, z)) | 0),
            (o = Math.imul(B, G)),
            (n = (n + Math.imul(I, q)) | 0),
            (i = ((i = (i + Math.imul(I, H)) | 0) + Math.imul(R, q)) | 0),
            (o = (o + Math.imul(R, H)) | 0),
            (n = (n + Math.imul(x, W)) | 0),
            (i = ((i = (i + Math.imul(x, J)) | 0) + Math.imul(M, W)) | 0),
            (o = (o + Math.imul(M, J)) | 0),
            (n = (n + Math.imul(P, Z)) | 0),
            (i = ((i = (i + Math.imul(P, X)) | 0) + Math.imul(O, Z)) | 0),
            (o = (o + Math.imul(O, X)) | 0),
            (n = (n + Math.imul(k, Q)) | 0),
            (i = ((i = (i + Math.imul(k, tt)) | 0) + Math.imul(A, Q)) | 0),
            (o = (o + Math.imul(A, tt)) | 0),
            (n = (n + Math.imul(w, rt)) | 0),
            (i = ((i = (i + Math.imul(w, nt)) | 0) + Math.imul(E, rt)) | 0),
            (o = (o + Math.imul(E, nt)) | 0),
            (n = (n + Math.imul(y, ot)) | 0),
            (i = ((i = (i + Math.imul(y, st)) | 0) + Math.imul(b, ot)) | 0),
            (o = (o + Math.imul(b, st)) | 0),
            (n = (n + Math.imul(p, ut)) | 0),
            (i = ((i = (i + Math.imul(p, ct)) | 0) + Math.imul(m, ut)) | 0),
            (o = (o + Math.imul(m, ct)) | 0)
          var At =
            (((c + (n = (n + Math.imul(h, ht)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, ft)) | 0) + Math.imul(f, ht)) | 0)) <<
                13)) |
            0
          ;(c =
            ((((o = (o + Math.imul(f, ft)) | 0) + (i >>> 13)) | 0) +
              (At >>> 26)) |
            0),
            (At &= 67108863),
            (n = Math.imul(L, z)),
            (i = ((i = Math.imul(L, G)) + Math.imul(U, z)) | 0),
            (o = Math.imul(U, G)),
            (n = (n + Math.imul(j, q)) | 0),
            (i = ((i = (i + Math.imul(j, H)) | 0) + Math.imul(B, q)) | 0),
            (o = (o + Math.imul(B, H)) | 0),
            (n = (n + Math.imul(I, W)) | 0),
            (i = ((i = (i + Math.imul(I, J)) | 0) + Math.imul(R, W)) | 0),
            (o = (o + Math.imul(R, J)) | 0),
            (n = (n + Math.imul(x, Z)) | 0),
            (i = ((i = (i + Math.imul(x, X)) | 0) + Math.imul(M, Z)) | 0),
            (o = (o + Math.imul(M, X)) | 0),
            (n = (n + Math.imul(P, Q)) | 0),
            (i = ((i = (i + Math.imul(P, tt)) | 0) + Math.imul(O, Q)) | 0),
            (o = (o + Math.imul(O, tt)) | 0),
            (n = (n + Math.imul(k, rt)) | 0),
            (i = ((i = (i + Math.imul(k, nt)) | 0) + Math.imul(A, rt)) | 0),
            (o = (o + Math.imul(A, nt)) | 0),
            (n = (n + Math.imul(w, ot)) | 0),
            (i = ((i = (i + Math.imul(w, st)) | 0) + Math.imul(E, ot)) | 0),
            (o = (o + Math.imul(E, st)) | 0),
            (n = (n + Math.imul(y, ut)) | 0),
            (i = ((i = (i + Math.imul(y, ct)) | 0) + Math.imul(b, ut)) | 0),
            (o = (o + Math.imul(b, ct)) | 0),
            (n = (n + Math.imul(p, ht)) | 0),
            (i = ((i = (i + Math.imul(p, ft)) | 0) + Math.imul(m, ht)) | 0),
            (o = (o + Math.imul(m, ft)) | 0)
          var St =
            (((c + (n = (n + Math.imul(h, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, mt)) | 0) + Math.imul(f, pt)) | 0)) <<
                13)) |
            0
          ;(c =
            ((((o = (o + Math.imul(f, mt)) | 0) + (i >>> 13)) | 0) +
              (St >>> 26)) |
            0),
            (St &= 67108863),
            (n = Math.imul(L, q)),
            (i = ((i = Math.imul(L, H)) + Math.imul(U, q)) | 0),
            (o = Math.imul(U, H)),
            (n = (n + Math.imul(j, W)) | 0),
            (i = ((i = (i + Math.imul(j, J)) | 0) + Math.imul(B, W)) | 0),
            (o = (o + Math.imul(B, J)) | 0),
            (n = (n + Math.imul(I, Z)) | 0),
            (i = ((i = (i + Math.imul(I, X)) | 0) + Math.imul(R, Z)) | 0),
            (o = (o + Math.imul(R, X)) | 0),
            (n = (n + Math.imul(x, Q)) | 0),
            (i = ((i = (i + Math.imul(x, tt)) | 0) + Math.imul(M, Q)) | 0),
            (o = (o + Math.imul(M, tt)) | 0),
            (n = (n + Math.imul(P, rt)) | 0),
            (i = ((i = (i + Math.imul(P, nt)) | 0) + Math.imul(O, rt)) | 0),
            (o = (o + Math.imul(O, nt)) | 0),
            (n = (n + Math.imul(k, ot)) | 0),
            (i = ((i = (i + Math.imul(k, st)) | 0) + Math.imul(A, ot)) | 0),
            (o = (o + Math.imul(A, st)) | 0),
            (n = (n + Math.imul(w, ut)) | 0),
            (i = ((i = (i + Math.imul(w, ct)) | 0) + Math.imul(E, ut)) | 0),
            (o = (o + Math.imul(E, ct)) | 0),
            (n = (n + Math.imul(y, ht)) | 0),
            (i = ((i = (i + Math.imul(y, ft)) | 0) + Math.imul(b, ht)) | 0),
            (o = (o + Math.imul(b, ft)) | 0)
          var Pt =
            (((c + (n = (n + Math.imul(p, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, mt)) | 0) + Math.imul(m, pt)) | 0)) <<
                13)) |
            0
          ;(c =
            ((((o = (o + Math.imul(m, mt)) | 0) + (i >>> 13)) | 0) +
              (Pt >>> 26)) |
            0),
            (Pt &= 67108863),
            (n = Math.imul(L, W)),
            (i = ((i = Math.imul(L, J)) + Math.imul(U, W)) | 0),
            (o = Math.imul(U, J)),
            (n = (n + Math.imul(j, Z)) | 0),
            (i = ((i = (i + Math.imul(j, X)) | 0) + Math.imul(B, Z)) | 0),
            (o = (o + Math.imul(B, X)) | 0),
            (n = (n + Math.imul(I, Q)) | 0),
            (i = ((i = (i + Math.imul(I, tt)) | 0) + Math.imul(R, Q)) | 0),
            (o = (o + Math.imul(R, tt)) | 0),
            (n = (n + Math.imul(x, rt)) | 0),
            (i = ((i = (i + Math.imul(x, nt)) | 0) + Math.imul(M, rt)) | 0),
            (o = (o + Math.imul(M, nt)) | 0),
            (n = (n + Math.imul(P, ot)) | 0),
            (i = ((i = (i + Math.imul(P, st)) | 0) + Math.imul(O, ot)) | 0),
            (o = (o + Math.imul(O, st)) | 0),
            (n = (n + Math.imul(k, ut)) | 0),
            (i = ((i = (i + Math.imul(k, ct)) | 0) + Math.imul(A, ut)) | 0),
            (o = (o + Math.imul(A, ct)) | 0),
            (n = (n + Math.imul(w, ht)) | 0),
            (i = ((i = (i + Math.imul(w, ft)) | 0) + Math.imul(E, ht)) | 0),
            (o = (o + Math.imul(E, ft)) | 0)
          var Ot =
            (((c + (n = (n + Math.imul(y, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(y, mt)) | 0) + Math.imul(b, pt)) | 0)) <<
                13)) |
            0
          ;(c =
            ((((o = (o + Math.imul(b, mt)) | 0) + (i >>> 13)) | 0) +
              (Ot >>> 26)) |
            0),
            (Ot &= 67108863),
            (n = Math.imul(L, Z)),
            (i = ((i = Math.imul(L, X)) + Math.imul(U, Z)) | 0),
            (o = Math.imul(U, X)),
            (n = (n + Math.imul(j, Q)) | 0),
            (i = ((i = (i + Math.imul(j, tt)) | 0) + Math.imul(B, Q)) | 0),
            (o = (o + Math.imul(B, tt)) | 0),
            (n = (n + Math.imul(I, rt)) | 0),
            (i = ((i = (i + Math.imul(I, nt)) | 0) + Math.imul(R, rt)) | 0),
            (o = (o + Math.imul(R, nt)) | 0),
            (n = (n + Math.imul(x, ot)) | 0),
            (i = ((i = (i + Math.imul(x, st)) | 0) + Math.imul(M, ot)) | 0),
            (o = (o + Math.imul(M, st)) | 0),
            (n = (n + Math.imul(P, ut)) | 0),
            (i = ((i = (i + Math.imul(P, ct)) | 0) + Math.imul(O, ut)) | 0),
            (o = (o + Math.imul(O, ct)) | 0),
            (n = (n + Math.imul(k, ht)) | 0),
            (i = ((i = (i + Math.imul(k, ft)) | 0) + Math.imul(A, ht)) | 0),
            (o = (o + Math.imul(A, ft)) | 0)
          var Nt =
            (((c + (n = (n + Math.imul(w, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(w, mt)) | 0) + Math.imul(E, pt)) | 0)) <<
                13)) |
            0
          ;(c =
            ((((o = (o + Math.imul(E, mt)) | 0) + (i >>> 13)) | 0) +
              (Nt >>> 26)) |
            0),
            (Nt &= 67108863),
            (n = Math.imul(L, Q)),
            (i = ((i = Math.imul(L, tt)) + Math.imul(U, Q)) | 0),
            (o = Math.imul(U, tt)),
            (n = (n + Math.imul(j, rt)) | 0),
            (i = ((i = (i + Math.imul(j, nt)) | 0) + Math.imul(B, rt)) | 0),
            (o = (o + Math.imul(B, nt)) | 0),
            (n = (n + Math.imul(I, ot)) | 0),
            (i = ((i = (i + Math.imul(I, st)) | 0) + Math.imul(R, ot)) | 0),
            (o = (o + Math.imul(R, st)) | 0),
            (n = (n + Math.imul(x, ut)) | 0),
            (i = ((i = (i + Math.imul(x, ct)) | 0) + Math.imul(M, ut)) | 0),
            (o = (o + Math.imul(M, ct)) | 0),
            (n = (n + Math.imul(P, ht)) | 0),
            (i = ((i = (i + Math.imul(P, ft)) | 0) + Math.imul(O, ht)) | 0),
            (o = (o + Math.imul(O, ft)) | 0)
          var xt =
            (((c + (n = (n + Math.imul(k, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(k, mt)) | 0) + Math.imul(A, pt)) | 0)) <<
                13)) |
            0
          ;(c =
            ((((o = (o + Math.imul(A, mt)) | 0) + (i >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863),
            (n = Math.imul(L, rt)),
            (i = ((i = Math.imul(L, nt)) + Math.imul(U, rt)) | 0),
            (o = Math.imul(U, nt)),
            (n = (n + Math.imul(j, ot)) | 0),
            (i = ((i = (i + Math.imul(j, st)) | 0) + Math.imul(B, ot)) | 0),
            (o = (o + Math.imul(B, st)) | 0),
            (n = (n + Math.imul(I, ut)) | 0),
            (i = ((i = (i + Math.imul(I, ct)) | 0) + Math.imul(R, ut)) | 0),
            (o = (o + Math.imul(R, ct)) | 0),
            (n = (n + Math.imul(x, ht)) | 0),
            (i = ((i = (i + Math.imul(x, ft)) | 0) + Math.imul(M, ht)) | 0),
            (o = (o + Math.imul(M, ft)) | 0)
          var Mt =
            (((c + (n = (n + Math.imul(P, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(P, mt)) | 0) + Math.imul(O, pt)) | 0)) <<
                13)) |
            0
          ;(c =
            ((((o = (o + Math.imul(O, mt)) | 0) + (i >>> 13)) | 0) +
              (Mt >>> 26)) |
            0),
            (Mt &= 67108863),
            (n = Math.imul(L, ot)),
            (i = ((i = Math.imul(L, st)) + Math.imul(U, ot)) | 0),
            (o = Math.imul(U, st)),
            (n = (n + Math.imul(j, ut)) | 0),
            (i = ((i = (i + Math.imul(j, ct)) | 0) + Math.imul(B, ut)) | 0),
            (o = (o + Math.imul(B, ct)) | 0),
            (n = (n + Math.imul(I, ht)) | 0),
            (i = ((i = (i + Math.imul(I, ft)) | 0) + Math.imul(R, ht)) | 0),
            (o = (o + Math.imul(R, ft)) | 0)
          var Tt =
            (((c + (n = (n + Math.imul(x, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(x, mt)) | 0) + Math.imul(M, pt)) | 0)) <<
                13)) |
            0
          ;(c =
            ((((o = (o + Math.imul(M, mt)) | 0) + (i >>> 13)) | 0) +
              (Tt >>> 26)) |
            0),
            (Tt &= 67108863),
            (n = Math.imul(L, ut)),
            (i = ((i = Math.imul(L, ct)) + Math.imul(U, ut)) | 0),
            (o = Math.imul(U, ct)),
            (n = (n + Math.imul(j, ht)) | 0),
            (i = ((i = (i + Math.imul(j, ft)) | 0) + Math.imul(B, ht)) | 0),
            (o = (o + Math.imul(B, ft)) | 0)
          var It =
            (((c + (n = (n + Math.imul(I, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(I, mt)) | 0) + Math.imul(R, pt)) | 0)) <<
                13)) |
            0
          ;(c =
            ((((o = (o + Math.imul(R, mt)) | 0) + (i >>> 13)) | 0) +
              (It >>> 26)) |
            0),
            (It &= 67108863),
            (n = Math.imul(L, ht)),
            (i = ((i = Math.imul(L, ft)) + Math.imul(U, ht)) | 0),
            (o = Math.imul(U, ft))
          var Rt =
            (((c + (n = (n + Math.imul(j, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(j, mt)) | 0) + Math.imul(B, pt)) | 0)) <<
                13)) |
            0
          ;(c =
            ((((o = (o + Math.imul(B, mt)) | 0) + (i >>> 13)) | 0) +
              (Rt >>> 26)) |
            0),
            (Rt &= 67108863)
          var Ct =
            (((c + (n = Math.imul(L, pt))) | 0) +
              ((8191 & (i = ((i = Math.imul(L, mt)) + Math.imul(U, pt)) | 0)) <<
                13)) |
            0
          return (
            (c =
              ((((o = Math.imul(U, mt)) + (i >>> 13)) | 0) + (Ct >>> 26)) | 0),
            (Ct &= 67108863),
            (u[0] = gt),
            (u[1] = yt),
            (u[2] = bt),
            (u[3] = vt),
            (u[4] = wt),
            (u[5] = Et),
            (u[6] = _t),
            (u[7] = kt),
            (u[8] = At),
            (u[9] = St),
            (u[10] = Pt),
            (u[11] = Ot),
            (u[12] = Nt),
            (u[13] = xt),
            (u[14] = Mt),
            (u[15] = Tt),
            (u[16] = It),
            (u[17] = Rt),
            (u[18] = Ct),
            0 !== c && ((u[19] = c), r.length++),
            r
          )
        }
        function m(t, e, r) {
          return new g().mulp(t, e, r)
        }
        function g(t, e) {
          ;(this.x = t), (this.y = e)
        }
        Math.imul || (p = d),
          (o.prototype.mulTo = function(t, e) {
            var r = this.length + t.length
            return 10 === this.length && 10 === t.length
              ? p(this, t, e)
              : r < 63
              ? d(this, t, e)
              : r < 1024
              ? (function(t, e, r) {
                  ;(r.negative = e.negative ^ t.negative),
                    (r.length = t.length + e.length)
                  for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                    var s = i
                    i = 0
                    for (
                      var a = 67108863 & n,
                        u = Math.min(o, e.length - 1),
                        c = Math.max(0, o - t.length + 1);
                      c <= u;
                      c++
                    ) {
                      var l = o - c,
                        h = (0 | t.words[l]) * (0 | e.words[c]),
                        f = 67108863 & h
                      ;(a = 67108863 & (f = (f + a) | 0)),
                        (i +=
                          (s =
                            ((s = (s + ((h / 67108864) | 0)) | 0) +
                              (f >>> 26)) |
                            0) >>> 26),
                        (s &= 67108863)
                    }
                    ;(r.words[o] = a), (n = s), (s = i)
                  }
                  return 0 !== n ? (r.words[o] = n) : r.length--, r.strip()
                })(this, t, e)
              : m(this, t, e)
          }),
          (g.prototype.makeRBT = function(t) {
            for (
              var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t)
            return e
          }),
          (g.prototype.revBin = function(t, e, r) {
            if (0 === t || t === r - 1) return t
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1)
            return n
          }),
          (g.prototype.permute = function(t, e, r, n, i, o) {
            for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]])
          }),
          (g.prototype.transform = function(t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i)
            for (var s = 1; s < i; s <<= 1)
              for (
                var a = s << 1,
                  u = Math.cos((2 * Math.PI) / a),
                  c = Math.sin((2 * Math.PI) / a),
                  l = 0;
                l < i;
                l += a
              )
                for (var h = u, f = c, d = 0; d < s; d++) {
                  var p = r[l + d],
                    m = n[l + d],
                    g = r[l + d + s],
                    y = n[l + d + s],
                    b = h * g - f * y
                  ;(y = h * y + f * g),
                    (g = b),
                    (r[l + d] = p + g),
                    (n[l + d] = m + y),
                    (r[l + d + s] = p - g),
                    (n[l + d + s] = m - y),
                    d !== a &&
                      ((b = u * h - c * f), (f = u * f + c * h), (h = b))
                }
          }),
          (g.prototype.guessLen13b = function(t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0
            for (r = (r / 2) | 0; r; r >>>= 1) i++
            return 1 << (i + 1 + n)
          }),
          (g.prototype.conjugate = function(t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n]
                ;(t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i)
              }
          }),
          (g.prototype.normalize13b = function(t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r
              ;(t[n] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0)
            }
            return t
          }),
          (g.prototype.convert13b = function(t, e, r, i) {
            for (var o = 0, s = 0; s < e; s++)
              (o += 0 | t[s]),
                (r[2 * s] = 8191 & o),
                (o >>>= 13),
                (r[2 * s + 1] = 8191 & o),
                (o >>>= 13)
            for (s = 2 * e; s < i; ++s) r[s] = 0
            n(0 === o), n(0 == (-8192 & o))
          }),
          (g.prototype.stub = function(t) {
            for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0
            return e
          }),
          (g.prototype.mulp = function(t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              s = new Array(n),
              a = new Array(n),
              u = new Array(n),
              c = new Array(n),
              l = new Array(n),
              h = new Array(n),
              f = r.words
            ;(f.length = n),
              this.convert13b(t.words, t.length, s, n),
              this.convert13b(e.words, e.length, c, n),
              this.transform(s, o, a, u, n, i),
              this.transform(c, o, l, h, n, i)
            for (var d = 0; d < n; d++) {
              var p = a[d] * l[d] - u[d] * h[d]
              ;(u[d] = a[d] * h[d] + u[d] * l[d]), (a[d] = p)
            }
            return (
              this.conjugate(a, u, n),
              this.transform(a, u, f, o, n, i),
              this.conjugate(f, o, n),
              this.normalize13b(f, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r.strip()
            )
          }),
          (o.prototype.mul = function(t) {
            var e = new o(null)
            return (
              (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
            )
          }),
          (o.prototype.mulf = function(t) {
            var e = new o(null)
            return (e.words = new Array(this.length + t.length)), m(this, t, e)
          }),
          (o.prototype.imul = function(t) {
            return this.clone().mulTo(t, this)
          }),
          (o.prototype.imuln = function(t) {
            n('number' == typeof t), n(t < 67108864)
            for (var e = 0, r = 0; r < this.length; r++) {
              var i = (0 | this.words[r]) * t,
                o = (67108863 & i) + (67108863 & e)
              ;(e >>= 26),
                (e += (i / 67108864) | 0),
                (e += o >>> 26),
                (this.words[r] = 67108863 & o)
            }
            return 0 !== e && ((this.words[r] = e), this.length++), this
          }),
          (o.prototype.muln = function(t) {
            return this.clone().imuln(t)
          }),
          (o.prototype.sqr = function() {
            return this.mul(this)
          }),
          (o.prototype.isqr = function() {
            return this.imul(this.clone())
          }),
          (o.prototype.pow = function(t) {
            var e = (function(t) {
              for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26
                e[r] = (t.words[n] & (1 << i)) >>> i
              }
              return e
            })(t)
            if (0 === e.length) return new o(1)
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i))
            return r
          }),
          (o.prototype.iushln = function(t) {
            n('number' == typeof t && t >= 0)
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r)
            if (0 !== r) {
              var s = 0
              for (e = 0; e < this.length; e++) {
                var a = this.words[e] & o,
                  u = ((0 | this.words[e]) - a) << r
                ;(this.words[e] = u | s), (s = a >>> (26 - r))
              }
              s && ((this.words[e] = s), this.length++)
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e]
              for (e = 0; e < i; e++) this.words[e] = 0
              this.length += i
            }
            return this.strip()
          }),
          (o.prototype.ishln = function(t) {
            return n(0 === this.negative), this.iushln(t)
          }),
          (o.prototype.iushrn = function(t, e, r) {
            var i
            n('number' == typeof t && t >= 0), (i = e ? (e - (e % 26)) / 26 : 0)
            var o = t % 26,
              s = Math.min((t - o) / 26, this.length),
              a = 67108863 ^ ((67108863 >>> o) << o),
              u = r
            if (((i -= s), (i = Math.max(0, i)), u)) {
              for (var c = 0; c < s; c++) u.words[c] = this.words[c]
              u.length = s
            }
            if (0 === s);
            else if (this.length > s)
              for (this.length -= s, c = 0; c < this.length; c++)
                this.words[c] = this.words[c + s]
            else (this.words[0] = 0), (this.length = 1)
            var l = 0
            for (c = this.length - 1; c >= 0 && (0 !== l || c >= i); c--) {
              var h = 0 | this.words[c]
              ;(this.words[c] = (l << (26 - o)) | (h >>> o)), (l = h & a)
            }
            return (
              u && 0 !== l && (u.words[u.length++] = l),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            )
          }),
          (o.prototype.ishrn = function(t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r)
          }),
          (o.prototype.shln = function(t) {
            return this.clone().ishln(t)
          }),
          (o.prototype.ushln = function(t) {
            return this.clone().iushln(t)
          }),
          (o.prototype.shrn = function(t) {
            return this.clone().ishrn(t)
          }),
          (o.prototype.ushrn = function(t) {
            return this.clone().iushrn(t)
          }),
          (o.prototype.testn = function(t) {
            n('number' == typeof t && t >= 0)
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e
            return !(this.length <= r) && !!(this.words[r] & i)
          }),
          (o.prototype.imaskn = function(t) {
            n('number' == typeof t && t >= 0)
            var e = t % 26,
              r = (t - e) / 26
            if (
              (n(
                0 === this.negative,
                'imaskn works only with positive numbers',
              ),
              this.length <= r)
            )
              return this
            if (
              (0 !== e && r++,
              (this.length = Math.min(r, this.length)),
              0 !== e)
            ) {
              var i = 67108863 ^ ((67108863 >>> e) << e)
              this.words[this.length - 1] &= i
            }
            return this.strip()
          }),
          (o.prototype.maskn = function(t) {
            return this.clone().imaskn(t)
          }),
          (o.prototype.iaddn = function(t) {
            return (
              n('number' == typeof t),
              n(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) < t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(t),
                    (this.negative = 1),
                    this)
                : this._iaddn(t)
            )
          }),
          (o.prototype._iaddn = function(t) {
            this.words[0] += t
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++
            return (this.length = Math.max(this.length, e + 1)), this
          }),
          (o.prototype.isubn = function(t) {
            if ((n('number' == typeof t), n(t < 67108864), t < 0))
              return this.iaddn(-t)
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              )
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1)
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1)
            return this.strip()
          }),
          (o.prototype.addn = function(t) {
            return this.clone().iaddn(t)
          }),
          (o.prototype.subn = function(t) {
            return this.clone().isubn(t)
          }),
          (o.prototype.iabs = function() {
            return (this.negative = 0), this
          }),
          (o.prototype.abs = function() {
            return this.clone().iabs()
          }),
          (o.prototype._ishlnsubmul = function(t, e, r) {
            var i,
              o,
              s = t.length + r
            this._expand(s)
            var a = 0
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + a
              var u = (0 | t.words[i]) * e
              ;(a = ((o -= 67108863 & u) >> 26) - ((u / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o)
            }
            for (; i < this.length - r; i++)
              (a = (o = (0 | this.words[i + r]) + a) >> 26),
                (this.words[i + r] = 67108863 & o)
            if (0 === a) return this.strip()
            for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
              (a = (o = -(0 | this.words[i]) + a) >> 26),
                (this.words[i] = 67108863 & o)
            return (this.negative = 1), this.strip()
          }),
          (o.prototype._wordDiv = function(t, e) {
            var r = (this.length, t.length),
              n = this.clone(),
              i = t,
              s = 0 | i.words[i.length - 1]
            0 !== (r = 26 - this._countBits(s)) &&
              ((i = i.ushln(r)), n.iushln(r), (s = 0 | i.words[i.length - 1]))
            var a,
              u = n.length - i.length
            if ('mod' !== e) {
              ;((a = new o(null)).length = u + 1),
                (a.words = new Array(a.length))
              for (var c = 0; c < a.length; c++) a.words[c] = 0
            }
            var l = n.clone()._ishlnsubmul(i, 1, u)
            0 === l.negative && ((n = l), a && (a.words[u] = 1))
            for (var h = u - 1; h >= 0; h--) {
              var f =
                67108864 * (0 | n.words[i.length + h]) +
                (0 | n.words[i.length + h - 1])
              for (
                f = Math.min((f / s) | 0, 67108863), n._ishlnsubmul(i, f, h);
                0 !== n.negative;

              )
                f--,
                  (n.negative = 0),
                  n._ishlnsubmul(i, 1, h),
                  n.isZero() || (n.negative ^= 1)
              a && (a.words[h] = f)
            }
            return (
              a && a.strip(),
              n.strip(),
              'div' !== e && 0 !== r && n.iushrn(r),
              { div: a || null, mod: n }
            )
          }),
          (o.prototype.divmod = function(t, e, r) {
            return (
              n(!t.isZero()),
              this.isZero()
                ? { div: new o(0), mod: new o(0) }
                : 0 !== this.negative && 0 === t.negative
                ? ((a = this.neg().divmod(t, e)),
                  'mod' !== e && (i = a.div.neg()),
                  'div' !== e &&
                    ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                  { div: i, mod: s })
                : 0 === this.negative && 0 !== t.negative
                ? ((a = this.divmod(t.neg(), e)),
                  'mod' !== e && (i = a.div.neg()),
                  { div: i, mod: a.mod })
                : 0 != (this.negative & t.negative)
                ? ((a = this.neg().divmod(t.neg(), e)),
                  'div' !== e &&
                    ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)),
                  { div: a.div, mod: s })
                : t.length > this.length || this.cmp(t) < 0
                ? { div: new o(0), mod: this }
                : 1 === t.length
                ? 'div' === e
                  ? { div: this.divn(t.words[0]), mod: null }
                  : 'mod' === e
                  ? { div: null, mod: new o(this.modn(t.words[0])) }
                  : {
                      div: this.divn(t.words[0]),
                      mod: new o(this.modn(t.words[0])),
                    }
                : this._wordDiv(t, e)
            )
            var i, s, a
          }),
          (o.prototype.div = function(t) {
            return this.divmod(t, 'div', !1).div
          }),
          (o.prototype.mod = function(t) {
            return this.divmod(t, 'mod', !1).mod
          }),
          (o.prototype.umod = function(t) {
            return this.divmod(t, 'mod', !0).mod
          }),
          (o.prototype.divRound = function(t) {
            var e = this.divmod(t)
            if (e.mod.isZero()) return e.div
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n)
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1)
          }),
          (o.prototype.modn = function(t) {
            n(t <= 67108863)
            for (var e = (1 << 26) % t, r = 0, i = this.length - 1; i >= 0; i--)
              r = (e * r + (0 | this.words[i])) % t
            return r
          }),
          (o.prototype.idivn = function(t) {
            n(t <= 67108863)
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var i = (0 | this.words[r]) + 67108864 * e
              ;(this.words[r] = (i / t) | 0), (e = i % t)
            }
            return this.strip()
          }),
          (o.prototype.divn = function(t) {
            return this.clone().idivn(t)
          }),
          (o.prototype.egcd = function(t) {
            n(0 === t.negative), n(!t.isZero())
            var e = this,
              r = t.clone()
            e = 0 !== e.negative ? e.umod(t) : e.clone()
            for (
              var i = new o(1), s = new o(0), a = new o(0), u = new o(1), c = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++c
            for (var l = r.clone(), h = e.clone(); !e.isZero(); ) {
              for (
                var f = 0, d = 1;
                0 == (e.words[0] & d) && f < 26;
                ++f, d <<= 1
              );
              if (f > 0)
                for (e.iushrn(f); f-- > 0; )
                  (i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(h)),
                    i.iushrn(1),
                    s.iushrn(1)
              for (
                var p = 0, m = 1;
                0 == (r.words[0] & m) && p < 26;
                ++p, m <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(h)),
                    a.iushrn(1),
                    u.iushrn(1)
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(a), s.isub(u))
                : (r.isub(e), a.isub(i), u.isub(s))
            }
            return { a: a, b: u, gcd: r.iushln(c) }
          }),
          (o.prototype._invmp = function(t) {
            n(0 === t.negative), n(!t.isZero())
            var e = this,
              r = t.clone()
            e = 0 !== e.negative ? e.umod(t) : e.clone()
            for (
              var i, s = new o(1), a = new o(0), u = r.clone();
              e.cmpn(1) > 0 && r.cmpn(1) > 0;

            ) {
              for (
                var c = 0, l = 1;
                0 == (e.words[0] & l) && c < 26;
                ++c, l <<= 1
              );
              if (c > 0)
                for (e.iushrn(c); c-- > 0; ) s.isOdd() && s.iadd(u), s.iushrn(1)
              for (
                var h = 0, f = 1;
                0 == (r.words[0] & f) && h < 26;
                ++h, f <<= 1
              );
              if (h > 0)
                for (r.iushrn(h); h-- > 0; ) a.isOdd() && a.iadd(u), a.iushrn(1)
              e.cmp(r) >= 0 ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s))
            }
            return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i
          }),
          (o.prototype.gcd = function(t) {
            if (this.isZero()) return t.abs()
            if (t.isZero()) return this.abs()
            var e = this.clone(),
              r = t.clone()
            ;(e.negative = 0), (r.negative = 0)
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1)
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1)
              for (; r.isEven(); ) r.iushrn(1)
              var i = e.cmp(r)
              if (i < 0) {
                var o = e
                ;(e = r), (r = o)
              } else if (0 === i || 0 === r.cmpn(1)) break
              e.isub(r)
            }
            return r.iushln(n)
          }),
          (o.prototype.invm = function(t) {
            return this.egcd(t).a.umod(t)
          }),
          (o.prototype.isEven = function() {
            return 0 == (1 & this.words[0])
          }),
          (o.prototype.isOdd = function() {
            return 1 == (1 & this.words[0])
          }),
          (o.prototype.andln = function(t) {
            return this.words[0] & t
          }),
          (o.prototype.bincn = function(t) {
            n('number' == typeof t)
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this
            for (var o = i, s = r; 0 !== o && s < this.length; s++) {
              var a = 0 | this.words[s]
              ;(o = (a += o) >>> 26), (a &= 67108863), (this.words[s] = a)
            }
            return 0 !== o && ((this.words[s] = o), this.length++), this
          }),
          (o.prototype.isZero = function() {
            return 1 === this.length && 0 === this.words[0]
          }),
          (o.prototype.cmpn = function(t) {
            var e,
              r = t < 0
            if (0 !== this.negative && !r) return -1
            if (0 === this.negative && r) return 1
            if ((this.strip(), this.length > 1)) e = 1
            else {
              r && (t = -t), n(t <= 67108863, 'Number is too big')
              var i = 0 | this.words[0]
              e = i === t ? 0 : i < t ? -1 : 1
            }
            return 0 !== this.negative ? 0 | -e : e
          }),
          (o.prototype.cmp = function(t) {
            if (0 !== this.negative && 0 === t.negative) return -1
            if (0 === this.negative && 0 !== t.negative) return 1
            var e = this.ucmp(t)
            return 0 !== this.negative ? 0 | -e : e
          }),
          (o.prototype.ucmp = function(t) {
            if (this.length > t.length) return 1
            if (this.length < t.length) return -1
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r]
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1)
                break
              }
            }
            return e
          }),
          (o.prototype.gtn = function(t) {
            return 1 === this.cmpn(t)
          }),
          (o.prototype.gt = function(t) {
            return 1 === this.cmp(t)
          }),
          (o.prototype.gten = function(t) {
            return this.cmpn(t) >= 0
          }),
          (o.prototype.gte = function(t) {
            return this.cmp(t) >= 0
          }),
          (o.prototype.ltn = function(t) {
            return -1 === this.cmpn(t)
          }),
          (o.prototype.lt = function(t) {
            return -1 === this.cmp(t)
          }),
          (o.prototype.lten = function(t) {
            return this.cmpn(t) <= 0
          }),
          (o.prototype.lte = function(t) {
            return this.cmp(t) <= 0
          }),
          (o.prototype.eqn = function(t) {
            return 0 === this.cmpn(t)
          }),
          (o.prototype.eq = function(t) {
            return 0 === this.cmp(t)
          }),
          (o.red = function(t) {
            return new k(t)
          }),
          (o.prototype.toRed = function(t) {
            return (
              n(!this.red, 'Already a number in reduction context'),
              n(0 === this.negative, 'red works only with positives'),
              t.convertTo(this)._forceRed(t)
            )
          }),
          (o.prototype.fromRed = function() {
            return (
              n(
                this.red,
                'fromRed works only with numbers in reduction context',
              ),
              this.red.convertFrom(this)
            )
          }),
          (o.prototype._forceRed = function(t) {
            return (this.red = t), this
          }),
          (o.prototype.forceRed = function(t) {
            return (
              n(!this.red, 'Already a number in reduction context'),
              this._forceRed(t)
            )
          }),
          (o.prototype.redAdd = function(t) {
            return (
              n(this.red, 'redAdd works only with red numbers'),
              this.red.add(this, t)
            )
          }),
          (o.prototype.redIAdd = function(t) {
            return (
              n(this.red, 'redIAdd works only with red numbers'),
              this.red.iadd(this, t)
            )
          }),
          (o.prototype.redSub = function(t) {
            return (
              n(this.red, 'redSub works only with red numbers'),
              this.red.sub(this, t)
            )
          }),
          (o.prototype.redISub = function(t) {
            return (
              n(this.red, 'redISub works only with red numbers'),
              this.red.isub(this, t)
            )
          }),
          (o.prototype.redShl = function(t) {
            return (
              n(this.red, 'redShl works only with red numbers'),
              this.red.shl(this, t)
            )
          }),
          (o.prototype.redMul = function(t) {
            return (
              n(this.red, 'redMul works only with red numbers'),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            )
          }),
          (o.prototype.redIMul = function(t) {
            return (
              n(this.red, 'redMul works only with red numbers'),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            )
          }),
          (o.prototype.redSqr = function() {
            return (
              n(this.red, 'redSqr works only with red numbers'),
              this.red._verify1(this),
              this.red.sqr(this)
            )
          }),
          (o.prototype.redISqr = function() {
            return (
              n(this.red, 'redISqr works only with red numbers'),
              this.red._verify1(this),
              this.red.isqr(this)
            )
          }),
          (o.prototype.redSqrt = function() {
            return (
              n(this.red, 'redSqrt works only with red numbers'),
              this.red._verify1(this),
              this.red.sqrt(this)
            )
          }),
          (o.prototype.redInvm = function() {
            return (
              n(this.red, 'redInvm works only with red numbers'),
              this.red._verify1(this),
              this.red.invm(this)
            )
          }),
          (o.prototype.redNeg = function() {
            return (
              n(this.red, 'redNeg works only with red numbers'),
              this.red._verify1(this),
              this.red.neg(this)
            )
          }),
          (o.prototype.redPow = function(t) {
            return (
              n(this.red && !t.red, 'redPow(normalNum)'),
              this.red._verify1(this),
              this.red.pow(this, t)
            )
          })
        var y = { k256: null, p224: null, p192: null, p25519: null }
        function b(t, e) {
          ;(this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp())
        }
        function v() {
          b.call(
            this,
            'k256',
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
          )
        }
        function w() {
          b.call(
            this,
            'p224',
            'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
          )
        }
        function E() {
          b.call(
            this,
            'p192',
            'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
          )
        }
        function _() {
          b.call(
            this,
            '25519',
            '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
          )
        }
        function k(t) {
          if ('string' == typeof t) {
            var e = o._prime(t)
            ;(this.m = e.p), (this.prime = e)
          } else
            n(t.gtn(1), 'modulus must be greater than 1'),
              (this.m = t),
              (this.prime = null)
        }
        function A(t) {
          k.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv
              .mul(this.r)
              .isubn(1)
              .div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv))
        }
        ;(b.prototype._tmp = function() {
          var t = new o(null)
          return (t.words = new Array(Math.ceil(this.n / 13))), t
        }),
          (b.prototype.ireduce = function(t) {
            var e,
              r = t
            do {
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength())
            } while (e > this.n)
            var n = e < this.n ? -1 : r.ucmp(this.p)
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            )
          }),
          (b.prototype.split = function(t, e) {
            t.iushrn(this.n, 0, e)
          }),
          (b.prototype.imulK = function(t) {
            return t.imul(this.k)
          }),
          i(v, b),
          (v.prototype.split = function(t, e) {
            for (var r = Math.min(t.length, 9), n = 0; n < r; n++)
              e.words[n] = t.words[n]
            if (((e.length = r), t.length <= 9))
              return (t.words[0] = 0), void (t.length = 1)
            var i = t.words[9]
            for (e.words[e.length++] = 4194303 & i, n = 10; n < t.length; n++) {
              var o = 0 | t.words[n]
              ;(t.words[n - 10] = ((4194303 & o) << 4) | (i >>> 22)), (i = o)
            }
            ;(i >>>= 22),
              (t.words[n - 10] = i),
              0 === i && t.length > 10 ? (t.length -= 10) : (t.length -= 9)
          }),
          (v.prototype.imulK = function(t) {
            ;(t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2)
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r]
              ;(e += 977 * n),
                (t.words[r] = 67108863 & e),
                (e = 64 * n + ((e / 67108864) | 0))
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            )
          }),
          i(w, b),
          i(E, b),
          i(_, b),
          (_.prototype.imulK = function(t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 19 * (0 | t.words[r]) + e,
                i = 67108863 & n
              ;(n >>>= 26), (t.words[r] = i), (e = n)
            }
            return 0 !== e && (t.words[t.length++] = e), t
          }),
          (o._prime = function(t) {
            if (y[t]) return y[t]
            var e
            if ('k256' === t) e = new v()
            else if ('p224' === t) e = new w()
            else if ('p192' === t) e = new E()
            else {
              if ('p25519' !== t) throw new Error('Unknown prime ' + t)
              e = new _()
            }
            return (y[t] = e), e
          }),
          (k.prototype._verify1 = function(t) {
            n(0 === t.negative, 'red works only with positives'),
              n(t.red, 'red works only with red numbers')
          }),
          (k.prototype._verify2 = function(t, e) {
            n(0 == (t.negative | e.negative), 'red works only with positives'),
              n(t.red && t.red === e.red, 'red works only with red numbers')
          }),
          (k.prototype.imod = function(t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : t.umod(this.m)._forceRed(this)
          }),
          (k.prototype.neg = function(t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
          }),
          (k.prototype.add = function(t, e) {
            this._verify2(t, e)
            var r = t.add(e)
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
          }),
          (k.prototype.iadd = function(t, e) {
            this._verify2(t, e)
            var r = t.iadd(e)
            return r.cmp(this.m) >= 0 && r.isub(this.m), r
          }),
          (k.prototype.sub = function(t, e) {
            this._verify2(t, e)
            var r = t.sub(e)
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
          }),
          (k.prototype.isub = function(t, e) {
            this._verify2(t, e)
            var r = t.isub(e)
            return r.cmpn(0) < 0 && r.iadd(this.m), r
          }),
          (k.prototype.shl = function(t, e) {
            return this._verify1(t), this.imod(t.ushln(e))
          }),
          (k.prototype.imul = function(t, e) {
            return this._verify2(t, e), this.imod(t.imul(e))
          }),
          (k.prototype.mul = function(t, e) {
            return this._verify2(t, e), this.imod(t.mul(e))
          }),
          (k.prototype.isqr = function(t) {
            return this.imul(t, t.clone())
          }),
          (k.prototype.sqr = function(t) {
            return this.mul(t, t)
          }),
          (k.prototype.sqrt = function(t) {
            if (t.isZero()) return t.clone()
            var e = this.m.andln(3)
            if ((n(e % 2 == 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2)
              return this.pow(t, r)
            }
            for (
              var i = this.m.subn(1), s = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              s++, i.iushrn(1)
            n(!i.isZero())
            var a = new o(1).toRed(this),
              u = a.redNeg(),
              c = this.m.subn(1).iushrn(1),
              l = this.m.bitLength()
            for (
              l = new o(2 * l * l).toRed(this);
              0 !== this.pow(l, c).cmp(u);

            )
              l.redIAdd(u)
            for (
              var h = this.pow(l, i),
                f = this.pow(t, i.addn(1).iushrn(1)),
                d = this.pow(t, i),
                p = s;
              0 !== d.cmp(a);

            ) {
              for (var m = d, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr()
              n(g < p)
              var y = this.pow(h, new o(1).iushln(p - g - 1))
              ;(f = f.redMul(y)), (h = y.redSqr()), (d = d.redMul(h)), (p = g)
            }
            return f
          }),
          (k.prototype.invm = function(t) {
            var e = t._invmp(this.m)
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e)
          }),
          (k.prototype.pow = function(t, e) {
            if (e.isZero()) return new o(1).toRed(this)
            if (0 === e.cmpn(1)) return t.clone()
            var r = new Array(16)
            ;(r[0] = new o(1).toRed(this)), (r[1] = t)
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t)
            var i = r[0],
              s = 0,
              a = 0,
              u = e.bitLength() % 26
            for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
              for (var c = e.words[n], l = u - 1; l >= 0; l--) {
                var h = (c >> l) & 1
                i !== r[0] && (i = this.sqr(i)),
                  0 !== h || 0 !== s
                    ? ((s <<= 1),
                      (s |= h),
                      (4 === ++a || (0 === n && 0 === l)) &&
                        ((i = this.mul(i, r[s])), (a = 0), (s = 0)))
                    : (a = 0)
              }
              u = 26
            }
            return i
          }),
          (k.prototype.convertTo = function(t) {
            var e = t.umod(this.m)
            return e === t ? e.clone() : e
          }),
          (k.prototype.convertFrom = function(t) {
            var e = t.clone()
            return (e.red = null), e
          }),
          (o.mont = function(t) {
            return new A(t)
          }),
          i(A, k),
          (A.prototype.convertTo = function(t) {
            return this.imod(t.ushln(this.shift))
          }),
          (A.prototype.convertFrom = function(t) {
            var e = this.imod(t.mul(this.rinv))
            return (e.red = null), e
          }),
          (A.prototype.imul = function(t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
              o._forceRed(this)
            )
          }),
          (A.prototype.mul = function(t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this)
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              s = i
            return (
              i.cmp(this.m) >= 0
                ? (s = i.isub(this.m))
                : i.cmpn(0) < 0 && (s = i.iadd(this.m)),
              s._forceRed(this)
            )
          }),
          (A.prototype.invm = function(t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
          })
      })(t, this)
    }.call(this, r(26)(t)))
  },
  ,
  function(t, e, r) {
    var n = e
    ;(n.utils = r(7)),
      (n.common = r(12)),
      (n.sha = r(29)),
      (n.ripemd = r(33)),
      (n.hmac = r(34)),
      (n.sha1 = n.sha.sha1),
      (n.sha256 = n.sha.sha256),
      (n.sha224 = n.sha.sha224),
      (n.sha384 = n.sha.sha384),
      (n.sha512 = n.sha.sha512),
      (n.ripemd160 = n.ripemd.ripemd160)
  },
  ,
  function(t, e, r) {
    'use strict'
    !(function(e) {
      function r(t) {
        return parseInt(t) === t
      }
      function n(t) {
        if (!r(t.length)) return !1
        for (var e = 0; e < t.length; e++)
          if (!r(t[e]) || t[e] < 0 || t[e] > 255) return !1
        return !0
      }
      function i(t, e) {
        if (t.buffer && ArrayBuffer.isView(t) && 'Uint8Array' === t.name)
          return (
            e && (t = t.slice ? t.slice() : Array.prototype.slice.call(t)), t
          )
        if (Array.isArray(t)) {
          if (!n(t)) throw new Error('Array contains invalid value: ' + t)
          return new Uint8Array(t)
        }
        if (r(t.length) && n(t)) return new Uint8Array(t)
        throw new Error('unsupported array-like object')
      }
      function o(t) {
        return new Uint8Array(t)
      }
      function s(t, e, r, n, i) {
        ;(null == n && null == i) ||
          (t = t.slice ? t.slice(n, i) : Array.prototype.slice.call(t, n, i)),
          e.set(t, r)
      }
      var a,
        u = {
          toBytes: function(t) {
            var e = [],
              r = 0
            for (t = encodeURI(t); r < t.length; ) {
              var n = t.charCodeAt(r++)
              37 === n
                ? (e.push(parseInt(t.substr(r, 2), 16)), (r += 2))
                : e.push(n)
            }
            return i(e)
          },
          fromBytes: function(t) {
            for (var e = [], r = 0; r < t.length; ) {
              var n = t[r]
              n < 128
                ? (e.push(String.fromCharCode(n)), r++)
                : n > 191 && n < 224
                ? (e.push(
                    String.fromCharCode(((31 & n) << 6) | (63 & t[r + 1])),
                  ),
                  (r += 2))
                : (e.push(
                    String.fromCharCode(
                      ((15 & n) << 12) |
                        ((63 & t[r + 1]) << 6) |
                        (63 & t[r + 2]),
                    ),
                  ),
                  (r += 3))
            }
            return e.join('')
          },
        },
        c =
          ((a = '0123456789abcdef'),
          {
            toBytes: function(t) {
              for (var e = [], r = 0; r < t.length; r += 2)
                e.push(parseInt(t.substr(r, 2), 16))
              return e
            },
            fromBytes: function(t) {
              for (var e = [], r = 0; r < t.length; r++) {
                var n = t[r]
                e.push(a[(240 & n) >> 4] + a[15 & n])
              }
              return e.join('')
            },
          }),
        l = { 16: 10, 24: 12, 32: 14 },
        h = [
          1,
          2,
          4,
          8,
          16,
          32,
          64,
          128,
          27,
          54,
          108,
          216,
          171,
          77,
          154,
          47,
          94,
          188,
          99,
          198,
          151,
          53,
          106,
          212,
          179,
          125,
          250,
          239,
          197,
          145,
        ],
        f = [
          99,
          124,
          119,
          123,
          242,
          107,
          111,
          197,
          48,
          1,
          103,
          43,
          254,
          215,
          171,
          118,
          202,
          130,
          201,
          125,
          250,
          89,
          71,
          240,
          173,
          212,
          162,
          175,
          156,
          164,
          114,
          192,
          183,
          253,
          147,
          38,
          54,
          63,
          247,
          204,
          52,
          165,
          229,
          241,
          113,
          216,
          49,
          21,
          4,
          199,
          35,
          195,
          24,
          150,
          5,
          154,
          7,
          18,
          128,
          226,
          235,
          39,
          178,
          117,
          9,
          131,
          44,
          26,
          27,
          110,
          90,
          160,
          82,
          59,
          214,
          179,
          41,
          227,
          47,
          132,
          83,
          209,
          0,
          237,
          32,
          252,
          177,
          91,
          106,
          203,
          190,
          57,
          74,
          76,
          88,
          207,
          208,
          239,
          170,
          251,
          67,
          77,
          51,
          133,
          69,
          249,
          2,
          127,
          80,
          60,
          159,
          168,
          81,
          163,
          64,
          143,
          146,
          157,
          56,
          245,
          188,
          182,
          218,
          33,
          16,
          255,
          243,
          210,
          205,
          12,
          19,
          236,
          95,
          151,
          68,
          23,
          196,
          167,
          126,
          61,
          100,
          93,
          25,
          115,
          96,
          129,
          79,
          220,
          34,
          42,
          144,
          136,
          70,
          238,
          184,
          20,
          222,
          94,
          11,
          219,
          224,
          50,
          58,
          10,
          73,
          6,
          36,
          92,
          194,
          211,
          172,
          98,
          145,
          149,
          228,
          121,
          231,
          200,
          55,
          109,
          141,
          213,
          78,
          169,
          108,
          86,
          244,
          234,
          101,
          122,
          174,
          8,
          186,
          120,
          37,
          46,
          28,
          166,
          180,
          198,
          232,
          221,
          116,
          31,
          75,
          189,
          139,
          138,
          112,
          62,
          181,
          102,
          72,
          3,
          246,
          14,
          97,
          53,
          87,
          185,
          134,
          193,
          29,
          158,
          225,
          248,
          152,
          17,
          105,
          217,
          142,
          148,
          155,
          30,
          135,
          233,
          206,
          85,
          40,
          223,
          140,
          161,
          137,
          13,
          191,
          230,
          66,
          104,
          65,
          153,
          45,
          15,
          176,
          84,
          187,
          22,
        ],
        d = [
          82,
          9,
          106,
          213,
          48,
          54,
          165,
          56,
          191,
          64,
          163,
          158,
          129,
          243,
          215,
          251,
          124,
          227,
          57,
          130,
          155,
          47,
          255,
          135,
          52,
          142,
          67,
          68,
          196,
          222,
          233,
          203,
          84,
          123,
          148,
          50,
          166,
          194,
          35,
          61,
          238,
          76,
          149,
          11,
          66,
          250,
          195,
          78,
          8,
          46,
          161,
          102,
          40,
          217,
          36,
          178,
          118,
          91,
          162,
          73,
          109,
          139,
          209,
          37,
          114,
          248,
          246,
          100,
          134,
          104,
          152,
          22,
          212,
          164,
          92,
          204,
          93,
          101,
          182,
          146,
          108,
          112,
          72,
          80,
          253,
          237,
          185,
          218,
          94,
          21,
          70,
          87,
          167,
          141,
          157,
          132,
          144,
          216,
          171,
          0,
          140,
          188,
          211,
          10,
          247,
          228,
          88,
          5,
          184,
          179,
          69,
          6,
          208,
          44,
          30,
          143,
          202,
          63,
          15,
          2,
          193,
          175,
          189,
          3,
          1,
          19,
          138,
          107,
          58,
          145,
          17,
          65,
          79,
          103,
          220,
          234,
          151,
          242,
          207,
          206,
          240,
          180,
          230,
          115,
          150,
          172,
          116,
          34,
          231,
          173,
          53,
          133,
          226,
          249,
          55,
          232,
          28,
          117,
          223,
          110,
          71,
          241,
          26,
          113,
          29,
          41,
          197,
          137,
          111,
          183,
          98,
          14,
          170,
          24,
          190,
          27,
          252,
          86,
          62,
          75,
          198,
          210,
          121,
          32,
          154,
          219,
          192,
          254,
          120,
          205,
          90,
          244,
          31,
          221,
          168,
          51,
          136,
          7,
          199,
          49,
          177,
          18,
          16,
          89,
          39,
          128,
          236,
          95,
          96,
          81,
          127,
          169,
          25,
          181,
          74,
          13,
          45,
          229,
          122,
          159,
          147,
          201,
          156,
          239,
          160,
          224,
          59,
          77,
          174,
          42,
          245,
          176,
          200,
          235,
          187,
          60,
          131,
          83,
          153,
          97,
          23,
          43,
          4,
          126,
          186,
          119,
          214,
          38,
          225,
          105,
          20,
          99,
          85,
          33,
          12,
          125,
        ],
        p = [
          3328402341,
          4168907908,
          4000806809,
          4135287693,
          4294111757,
          3597364157,
          3731845041,
          2445657428,
          1613770832,
          33620227,
          3462883241,
          1445669757,
          3892248089,
          3050821474,
          1303096294,
          3967186586,
          2412431941,
          528646813,
          2311702848,
          4202528135,
          4026202645,
          2992200171,
          2387036105,
          4226871307,
          1101901292,
          3017069671,
          1604494077,
          1169141738,
          597466303,
          1403299063,
          3832705686,
          2613100635,
          1974974402,
          3791519004,
          1033081774,
          1277568618,
          1815492186,
          2118074177,
          4126668546,
          2211236943,
          1748251740,
          1369810420,
          3521504564,
          4193382664,
          3799085459,
          2883115123,
          1647391059,
          706024767,
          134480908,
          2512897874,
          1176707941,
          2646852446,
          806885416,
          932615841,
          168101135,
          798661301,
          235341577,
          605164086,
          461406363,
          3756188221,
          3454790438,
          1311188841,
          2142417613,
          3933566367,
          302582043,
          495158174,
          1479289972,
          874125870,
          907746093,
          3698224818,
          3025820398,
          1537253627,
          2756858614,
          1983593293,
          3084310113,
          2108928974,
          1378429307,
          3722699582,
          1580150641,
          327451799,
          2790478837,
          3117535592,
          0,
          3253595436,
          1075847264,
          3825007647,
          2041688520,
          3059440621,
          3563743934,
          2378943302,
          1740553945,
          1916352843,
          2487896798,
          2555137236,
          2958579944,
          2244988746,
          3151024235,
          3320835882,
          1336584933,
          3992714006,
          2252555205,
          2588757463,
          1714631509,
          293963156,
          2319795663,
          3925473552,
          67240454,
          4269768577,
          2689618160,
          2017213508,
          631218106,
          1269344483,
          2723238387,
          1571005438,
          2151694528,
          93294474,
          1066570413,
          563977660,
          1882732616,
          4059428100,
          1673313503,
          2008463041,
          2950355573,
          1109467491,
          537923632,
          3858759450,
          4260623118,
          3218264685,
          2177748300,
          403442708,
          638784309,
          3287084079,
          3193921505,
          899127202,
          2286175436,
          773265209,
          2479146071,
          1437050866,
          4236148354,
          2050833735,
          3362022572,
          3126681063,
          840505643,
          3866325909,
          3227541664,
          427917720,
          2655997905,
          2749160575,
          1143087718,
          1412049534,
          999329963,
          193497219,
          2353415882,
          3354324521,
          1807268051,
          672404540,
          2816401017,
          3160301282,
          369822493,
          2916866934,
          3688947771,
          1681011286,
          1949973070,
          336202270,
          2454276571,
          201721354,
          1210328172,
          3093060836,
          2680341085,
          3184776046,
          1135389935,
          3294782118,
          965841320,
          831886756,
          3554993207,
          4068047243,
          3588745010,
          2345191491,
          1849112409,
          3664604599,
          26054028,
          2983581028,
          2622377682,
          1235855840,
          3630984372,
          2891339514,
          4092916743,
          3488279077,
          3395642799,
          4101667470,
          1202630377,
          268961816,
          1874508501,
          4034427016,
          1243948399,
          1546530418,
          941366308,
          1470539505,
          1941222599,
          2546386513,
          3421038627,
          2715671932,
          3899946140,
          1042226977,
          2521517021,
          1639824860,
          227249030,
          260737669,
          3765465232,
          2084453954,
          1907733956,
          3429263018,
          2420656344,
          100860677,
          4160157185,
          470683154,
          3261161891,
          1781871967,
          2924959737,
          1773779408,
          394692241,
          2579611992,
          974986535,
          664706745,
          3655459128,
          3958962195,
          731420851,
          571543859,
          3530123707,
          2849626480,
          126783113,
          865375399,
          765172662,
          1008606754,
          361203602,
          3387549984,
          2278477385,
          2857719295,
          1344809080,
          2782912378,
          59542671,
          1503764984,
          160008576,
          437062935,
          1707065306,
          3622233649,
          2218934982,
          3496503480,
          2185314755,
          697932208,
          1512910199,
          504303377,
          2075177163,
          2824099068,
          1841019862,
          739644986,
        ],
        m = [
          2781242211,
          2230877308,
          2582542199,
          2381740923,
          234877682,
          3184946027,
          2984144751,
          1418839493,
          1348481072,
          50462977,
          2848876391,
          2102799147,
          434634494,
          1656084439,
          3863849899,
          2599188086,
          1167051466,
          2636087938,
          1082771913,
          2281340285,
          368048890,
          3954334041,
          3381544775,
          201060592,
          3963727277,
          1739838676,
          4250903202,
          3930435503,
          3206782108,
          4149453988,
          2531553906,
          1536934080,
          3262494647,
          484572669,
          2923271059,
          1783375398,
          1517041206,
          1098792767,
          49674231,
          1334037708,
          1550332980,
          4098991525,
          886171109,
          150598129,
          2481090929,
          1940642008,
          1398944049,
          1059722517,
          201851908,
          1385547719,
          1699095331,
          1587397571,
          674240536,
          2704774806,
          252314885,
          3039795866,
          151914247,
          908333586,
          2602270848,
          1038082786,
          651029483,
          1766729511,
          3447698098,
          2682942837,
          454166793,
          2652734339,
          1951935532,
          775166490,
          758520603,
          3000790638,
          4004797018,
          4217086112,
          4137964114,
          1299594043,
          1639438038,
          3464344499,
          2068982057,
          1054729187,
          1901997871,
          2534638724,
          4121318227,
          1757008337,
          0,
          750906861,
          1614815264,
          535035132,
          3363418545,
          3988151131,
          3201591914,
          1183697867,
          3647454910,
          1265776953,
          3734260298,
          3566750796,
          3903871064,
          1250283471,
          1807470800,
          717615087,
          3847203498,
          384695291,
          3313910595,
          3617213773,
          1432761139,
          2484176261,
          3481945413,
          283769337,
          100925954,
          2180939647,
          4037038160,
          1148730428,
          3123027871,
          3813386408,
          4087501137,
          4267549603,
          3229630528,
          2315620239,
          2906624658,
          3156319645,
          1215313976,
          82966005,
          3747855548,
          3245848246,
          1974459098,
          1665278241,
          807407632,
          451280895,
          251524083,
          1841287890,
          1283575245,
          337120268,
          891687699,
          801369324,
          3787349855,
          2721421207,
          3431482436,
          959321879,
          1469301956,
          4065699751,
          2197585534,
          1199193405,
          2898814052,
          3887750493,
          724703513,
          2514908019,
          2696962144,
          2551808385,
          3516813135,
          2141445340,
          1715741218,
          2119445034,
          2872807568,
          2198571144,
          3398190662,
          700968686,
          3547052216,
          1009259540,
          2041044702,
          3803995742,
          487983883,
          1991105499,
          1004265696,
          1449407026,
          1316239930,
          504629770,
          3683797321,
          168560134,
          1816667172,
          3837287516,
          1570751170,
          1857934291,
          4014189740,
          2797888098,
          2822345105,
          2754712981,
          936633572,
          2347923833,
          852879335,
          1133234376,
          1500395319,
          3084545389,
          2348912013,
          1689376213,
          3533459022,
          3762923945,
          3034082412,
          4205598294,
          133428468,
          634383082,
          2949277029,
          2398386810,
          3913789102,
          403703816,
          3580869306,
          2297460856,
          1867130149,
          1918643758,
          607656988,
          4049053350,
          3346248884,
          1368901318,
          600565992,
          2090982877,
          2632479860,
          557719327,
          3717614411,
          3697393085,
          2249034635,
          2232388234,
          2430627952,
          1115438654,
          3295786421,
          2865522278,
          3633334344,
          84280067,
          33027830,
          303828494,
          2747425121,
          1600795957,
          4188952407,
          3496589753,
          2434238086,
          1486471617,
          658119965,
          3106381470,
          953803233,
          334231800,
          3005978776,
          857870609,
          3151128937,
          1890179545,
          2298973838,
          2805175444,
          3056442267,
          574365214,
          2450884487,
          550103529,
          1233637070,
          4289353045,
          2018519080,
          2057691103,
          2399374476,
          4166623649,
          2148108681,
          387583245,
          3664101311,
          836232934,
          3330556482,
          3100665960,
          3280093505,
          2955516313,
          2002398509,
          287182607,
          3413881008,
          4238890068,
          3597515707,
          975967766,
        ],
        g = [
          1671808611,
          2089089148,
          2006576759,
          2072901243,
          4061003762,
          1807603307,
          1873927791,
          3310653893,
          810573872,
          16974337,
          1739181671,
          729634347,
          4263110654,
          3613570519,
          2883997099,
          1989864566,
          3393556426,
          2191335298,
          3376449993,
          2106063485,
          4195741690,
          1508618841,
          1204391495,
          4027317232,
          2917941677,
          3563566036,
          2734514082,
          2951366063,
          2629772188,
          2767672228,
          1922491506,
          3227229120,
          3082974647,
          4246528509,
          2477669779,
          644500518,
          911895606,
          1061256767,
          4144166391,
          3427763148,
          878471220,
          2784252325,
          3845444069,
          4043897329,
          1905517169,
          3631459288,
          827548209,
          356461077,
          67897348,
          3344078279,
          593839651,
          3277757891,
          405286936,
          2527147926,
          84871685,
          2595565466,
          118033927,
          305538066,
          2157648768,
          3795705826,
          3945188843,
          661212711,
          2999812018,
          1973414517,
          152769033,
          2208177539,
          745822252,
          439235610,
          455947803,
          1857215598,
          1525593178,
          2700827552,
          1391895634,
          994932283,
          3596728278,
          3016654259,
          695947817,
          3812548067,
          795958831,
          2224493444,
          1408607827,
          3513301457,
          0,
          3979133421,
          543178784,
          4229948412,
          2982705585,
          1542305371,
          1790891114,
          3410398667,
          3201918910,
          961245753,
          1256100938,
          1289001036,
          1491644504,
          3477767631,
          3496721360,
          4012557807,
          2867154858,
          4212583931,
          1137018435,
          1305975373,
          861234739,
          2241073541,
          1171229253,
          4178635257,
          33948674,
          2139225727,
          1357946960,
          1011120188,
          2679776671,
          2833468328,
          1374921297,
          2751356323,
          1086357568,
          2408187279,
          2460827538,
          2646352285,
          944271416,
          4110742005,
          3168756668,
          3066132406,
          3665145818,
          560153121,
          271589392,
          4279952895,
          4077846003,
          3530407890,
          3444343245,
          202643468,
          322250259,
          3962553324,
          1608629855,
          2543990167,
          1154254916,
          389623319,
          3294073796,
          2817676711,
          2122513534,
          1028094525,
          1689045092,
          1575467613,
          422261273,
          1939203699,
          1621147744,
          2174228865,
          1339137615,
          3699352540,
          577127458,
          712922154,
          2427141008,
          2290289544,
          1187679302,
          3995715566,
          3100863416,
          339486740,
          3732514782,
          1591917662,
          186455563,
          3681988059,
          3762019296,
          844522546,
          978220090,
          169743370,
          1239126601,
          101321734,
          611076132,
          1558493276,
          3260915650,
          3547250131,
          2901361580,
          1655096418,
          2443721105,
          2510565781,
          3828863972,
          2039214713,
          3878868455,
          3359869896,
          928607799,
          1840765549,
          2374762893,
          3580146133,
          1322425422,
          2850048425,
          1823791212,
          1459268694,
          4094161908,
          3928346602,
          1706019429,
          2056189050,
          2934523822,
          135794696,
          3134549946,
          2022240376,
          628050469,
          779246638,
          472135708,
          2800834470,
          3032970164,
          3327236038,
          3894660072,
          3715932637,
          1956440180,
          522272287,
          1272813131,
          3185336765,
          2340818315,
          2323976074,
          1888542832,
          1044544574,
          3049550261,
          1722469478,
          1222152264,
          50660867,
          4127324150,
          236067854,
          1638122081,
          895445557,
          1475980887,
          3117443513,
          2257655686,
          3243809217,
          489110045,
          2662934430,
          3778599393,
          4162055160,
          2561878936,
          288563729,
          1773916777,
          3648039385,
          2391345038,
          2493985684,
          2612407707,
          505560094,
          2274497927,
          3911240169,
          3460925390,
          1442818645,
          678973480,
          3749357023,
          2358182796,
          2717407649,
          2306869641,
          219617805,
          3218761151,
          3862026214,
          1120306242,
          1756942440,
          1103331905,
          2578459033,
          762796589,
          252780047,
          2966125488,
          1425844308,
          3151392187,
          372911126,
        ],
        y = [
          1667474886,
          2088535288,
          2004326894,
          2071694838,
          4075949567,
          1802223062,
          1869591006,
          3318043793,
          808472672,
          16843522,
          1734846926,
          724270422,
          4278065639,
          3621216949,
          2880169549,
          1987484396,
          3402253711,
          2189597983,
          3385409673,
          2105378810,
          4210693615,
          1499065266,
          1195886990,
          4042263547,
          2913856577,
          3570689971,
          2728590687,
          2947541573,
          2627518243,
          2762274643,
          1920112356,
          3233831835,
          3082273397,
          4261223649,
          2475929149,
          640051788,
          909531756,
          1061110142,
          4160160501,
          3435941763,
          875846760,
          2779116625,
          3857003729,
          4059105529,
          1903268834,
          3638064043,
          825316194,
          353713962,
          67374088,
          3351728789,
          589522246,
          3284360861,
          404236336,
          2526454071,
          84217610,
          2593830191,
          117901582,
          303183396,
          2155911963,
          3806477791,
          3958056653,
          656894286,
          2998062463,
          1970642922,
          151591698,
          2206440989,
          741110872,
          437923380,
          454765878,
          1852748508,
          1515908788,
          2694904667,
          1381168804,
          993742198,
          3604373943,
          3014905469,
          690584402,
          3823320797,
          791638366,
          2223281939,
          1398011302,
          3520161977,
          0,
          3991743681,
          538992704,
          4244381667,
          2981218425,
          1532751286,
          1785380564,
          3419096717,
          3200178535,
          960056178,
          1246420628,
          1280103576,
          1482221744,
          3486468741,
          3503319995,
          4025428677,
          2863326543,
          4227536621,
          1128514950,
          1296947098,
          859002214,
          2240123921,
          1162203018,
          4193849577,
          33687044,
          2139062782,
          1347481760,
          1010582648,
          2678045221,
          2829640523,
          1364325282,
          2745433693,
          1077985408,
          2408548869,
          2459086143,
          2644360225,
          943212656,
          4126475505,
          3166494563,
          3065430391,
          3671750063,
          555836226,
          269496352,
          4294908645,
          4092792573,
          3537006015,
          3452783745,
          202118168,
          320025894,
          3974901699,
          1600119230,
          2543297077,
          1145359496,
          387397934,
          3301201811,
          2812801621,
          2122220284,
          1027426170,
          1684319432,
          1566435258,
          421079858,
          1936954854,
          1616945344,
          2172753945,
          1330631070,
          3705438115,
          572679748,
          707427924,
          2425400123,
          2290647819,
          1179044492,
          4008585671,
          3099120491,
          336870440,
          3739122087,
          1583276732,
          185277718,
          3688593069,
          3772791771,
          842159716,
          976899700,
          168435220,
          1229577106,
          101059084,
          606366792,
          1549591736,
          3267517855,
          3553849021,
          2897014595,
          1650632388,
          2442242105,
          2509612081,
          3840161747,
          2038008818,
          3890688725,
          3368567691,
          926374254,
          1835907034,
          2374863873,
          3587531953,
          1313788572,
          2846482505,
          1819063512,
          1448540844,
          4109633523,
          3941213647,
          1701162954,
          2054852340,
          2930698567,
          134748176,
          3132806511,
          2021165296,
          623210314,
          774795868,
          471606328,
          2795958615,
          3031746419,
          3334885783,
          3907527627,
          3722280097,
          1953799400,
          522133822,
          1263263126,
          3183336545,
          2341176845,
          2324333839,
          1886425312,
          1044267644,
          3048588401,
          1718004428,
          1212733584,
          50529542,
          4143317495,
          235803164,
          1633788866,
          892690282,
          1465383342,
          3115962473,
          2256965911,
          3250673817,
          488449850,
          2661202215,
          3789633753,
          4177007595,
          2560144171,
          286339874,
          1768537042,
          3654906025,
          2391705863,
          2492770099,
          2610673197,
          505291324,
          2273808917,
          3924369609,
          3469625735,
          1431699370,
          673740880,
          3755965093,
          2358021891,
          2711746649,
          2307489801,
          218961690,
          3217021541,
          3873845719,
          1111672452,
          1751693520,
          1094828930,
          2576986153,
          757954394,
          252645662,
          2964376443,
          1414855848,
          3149649517,
          370555436,
        ],
        b = [
          1374988112,
          2118214995,
          437757123,
          975658646,
          1001089995,
          530400753,
          2902087851,
          1273168787,
          540080725,
          2910219766,
          2295101073,
          4110568485,
          1340463100,
          3307916247,
          641025152,
          3043140495,
          3736164937,
          632953703,
          1172967064,
          1576976609,
          3274667266,
          2169303058,
          2370213795,
          1809054150,
          59727847,
          361929877,
          3211623147,
          2505202138,
          3569255213,
          1484005843,
          1239443753,
          2395588676,
          1975683434,
          4102977912,
          2572697195,
          666464733,
          3202437046,
          4035489047,
          3374361702,
          2110667444,
          1675577880,
          3843699074,
          2538681184,
          1649639237,
          2976151520,
          3144396420,
          4269907996,
          4178062228,
          1883793496,
          2403728665,
          2497604743,
          1383856311,
          2876494627,
          1917518562,
          3810496343,
          1716890410,
          3001755655,
          800440835,
          2261089178,
          3543599269,
          807962610,
          599762354,
          33778362,
          3977675356,
          2328828971,
          2809771154,
          4077384432,
          1315562145,
          1708848333,
          101039829,
          3509871135,
          3299278474,
          875451293,
          2733856160,
          92987698,
          2767645557,
          193195065,
          1080094634,
          1584504582,
          3178106961,
          1042385657,
          2531067453,
          3711829422,
          1306967366,
          2438237621,
          1908694277,
          67556463,
          1615861247,
          429456164,
          3602770327,
          2302690252,
          1742315127,
          2968011453,
          126454664,
          3877198648,
          2043211483,
          2709260871,
          2084704233,
          4169408201,
          0,
          159417987,
          841739592,
          504459436,
          1817866830,
          4245618683,
          260388950,
          1034867998,
          908933415,
          168810852,
          1750902305,
          2606453969,
          607530554,
          202008497,
          2472011535,
          3035535058,
          463180190,
          2160117071,
          1641816226,
          1517767529,
          470948374,
          3801332234,
          3231722213,
          1008918595,
          303765277,
          235474187,
          4069246893,
          766945465,
          337553864,
          1475418501,
          2943682380,
          4003061179,
          2743034109,
          4144047775,
          1551037884,
          1147550661,
          1543208500,
          2336434550,
          3408119516,
          3069049960,
          3102011747,
          3610369226,
          1113818384,
          328671808,
          2227573024,
          2236228733,
          3535486456,
          2935566865,
          3341394285,
          496906059,
          3702665459,
          226906860,
          2009195472,
          733156972,
          2842737049,
          294930682,
          1206477858,
          2835123396,
          2700099354,
          1451044056,
          573804783,
          2269728455,
          3644379585,
          2362090238,
          2564033334,
          2801107407,
          2776292904,
          3669462566,
          1068351396,
          742039012,
          1350078989,
          1784663195,
          1417561698,
          4136440770,
          2430122216,
          775550814,
          2193862645,
          2673705150,
          1775276924,
          1876241833,
          3475313331,
          3366754619,
          270040487,
          3902563182,
          3678124923,
          3441850377,
          1851332852,
          3969562369,
          2203032232,
          3868552805,
          2868897406,
          566021896,
          4011190502,
          3135740889,
          1248802510,
          3936291284,
          699432150,
          832877231,
          708780849,
          3332740144,
          899835584,
          1951317047,
          4236429990,
          3767586992,
          866637845,
          4043610186,
          1106041591,
          2144161806,
          395441711,
          1984812685,
          1139781709,
          3433712980,
          3835036895,
          2664543715,
          1282050075,
          3240894392,
          1181045119,
          2640243204,
          25965917,
          4203181171,
          4211818798,
          3009879386,
          2463879762,
          3910161971,
          1842759443,
          2597806476,
          933301370,
          1509430414,
          3943906441,
          3467192302,
          3076639029,
          3776767469,
          2051518780,
          2631065433,
          1441952575,
          404016761,
          1942435775,
          1408749034,
          1610459739,
          3745345300,
          2017778566,
          3400528769,
          3110650942,
          941896748,
          3265478751,
          371049330,
          3168937228,
          675039627,
          4279080257,
          967311729,
          135050206,
          3635733660,
          1683407248,
          2076935265,
          3576870512,
          1215061108,
          3501741890,
        ],
        v = [
          1347548327,
          1400783205,
          3273267108,
          2520393566,
          3409685355,
          4045380933,
          2880240216,
          2471224067,
          1428173050,
          4138563181,
          2441661558,
          636813900,
          4233094615,
          3620022987,
          2149987652,
          2411029155,
          1239331162,
          1730525723,
          2554718734,
          3781033664,
          46346101,
          310463728,
          2743944855,
          3328955385,
          3875770207,
          2501218972,
          3955191162,
          3667219033,
          768917123,
          3545789473,
          692707433,
          1150208456,
          1786102409,
          2029293177,
          1805211710,
          3710368113,
          3065962831,
          401639597,
          1724457132,
          3028143674,
          409198410,
          2196052529,
          1620529459,
          1164071807,
          3769721975,
          2226875310,
          486441376,
          2499348523,
          1483753576,
          428819965,
          2274680428,
          3075636216,
          598438867,
          3799141122,
          1474502543,
          711349675,
          129166120,
          53458370,
          2592523643,
          2782082824,
          4063242375,
          2988687269,
          3120694122,
          1559041666,
          730517276,
          2460449204,
          4042459122,
          2706270690,
          3446004468,
          3573941694,
          533804130,
          2328143614,
          2637442643,
          2695033685,
          839224033,
          1973745387,
          957055980,
          2856345839,
          106852767,
          1371368976,
          4181598602,
          1033297158,
          2933734917,
          1179510461,
          3046200461,
          91341917,
          1862534868,
          4284502037,
          605657339,
          2547432937,
          3431546947,
          2003294622,
          3182487618,
          2282195339,
          954669403,
          3682191598,
          1201765386,
          3917234703,
          3388507166,
          0,
          2198438022,
          1211247597,
          2887651696,
          1315723890,
          4227665663,
          1443857720,
          507358933,
          657861945,
          1678381017,
          560487590,
          3516619604,
          975451694,
          2970356327,
          261314535,
          3535072918,
          2652609425,
          1333838021,
          2724322336,
          1767536459,
          370938394,
          182621114,
          3854606378,
          1128014560,
          487725847,
          185469197,
          2918353863,
          3106780840,
          3356761769,
          2237133081,
          1286567175,
          3152976349,
          4255350624,
          2683765030,
          3160175349,
          3309594171,
          878443390,
          1988838185,
          3704300486,
          1756818940,
          1673061617,
          3403100636,
          272786309,
          1075025698,
          545572369,
          2105887268,
          4174560061,
          296679730,
          1841768865,
          1260232239,
          4091327024,
          3960309330,
          3497509347,
          1814803222,
          2578018489,
          4195456072,
          575138148,
          3299409036,
          446754879,
          3629546796,
          4011996048,
          3347532110,
          3252238545,
          4270639778,
          915985419,
          3483825537,
          681933534,
          651868046,
          2755636671,
          3828103837,
          223377554,
          2607439820,
          1649704518,
          3270937875,
          3901806776,
          1580087799,
          4118987695,
          3198115200,
          2087309459,
          2842678573,
          3016697106,
          1003007129,
          2802849917,
          1860738147,
          2077965243,
          164439672,
          4100872472,
          32283319,
          2827177882,
          1709610350,
          2125135846,
          136428751,
          3874428392,
          3652904859,
          3460984630,
          3572145929,
          3593056380,
          2939266226,
          824852259,
          818324884,
          3224740454,
          930369212,
          2801566410,
          2967507152,
          355706840,
          1257309336,
          4148292826,
          243256656,
          790073846,
          2373340630,
          1296297904,
          1422699085,
          3756299780,
          3818836405,
          457992840,
          3099667487,
          2135319889,
          77422314,
          1560382517,
          1945798516,
          788204353,
          1521706781,
          1385356242,
          870912086,
          325965383,
          2358957921,
          2050466060,
          2388260884,
          2313884476,
          4006521127,
          901210569,
          3990953189,
          1014646705,
          1503449823,
          1062597235,
          2031621326,
          3212035895,
          3931371469,
          1533017514,
          350174575,
          2256028891,
          2177544179,
          1052338372,
          741876788,
          1606591296,
          1914052035,
          213705253,
          2334669897,
          1107234197,
          1899603969,
          3725069491,
          2631447780,
          2422494913,
          1635502980,
          1893020342,
          1950903388,
          1120974935,
        ],
        w = [
          2807058932,
          1699970625,
          2764249623,
          1586903591,
          1808481195,
          1173430173,
          1487645946,
          59984867,
          4199882800,
          1844882806,
          1989249228,
          1277555970,
          3623636965,
          3419915562,
          1149249077,
          2744104290,
          1514790577,
          459744698,
          244860394,
          3235995134,
          1963115311,
          4027744588,
          2544078150,
          4190530515,
          1608975247,
          2627016082,
          2062270317,
          1507497298,
          2200818878,
          567498868,
          1764313568,
          3359936201,
          2305455554,
          2037970062,
          1047239e3,
          1910319033,
          1337376481,
          2904027272,
          2892417312,
          984907214,
          1243112415,
          830661914,
          861968209,
          2135253587,
          2011214180,
          2927934315,
          2686254721,
          731183368,
          1750626376,
          4246310725,
          1820824798,
          4172763771,
          3542330227,
          48394827,
          2404901663,
          2871682645,
          671593195,
          3254988725,
          2073724613,
          145085239,
          2280796200,
          2779915199,
          1790575107,
          2187128086,
          472615631,
          3029510009,
          4075877127,
          3802222185,
          4107101658,
          3201631749,
          1646252340,
          4270507174,
          1402811438,
          1436590835,
          3778151818,
          3950355702,
          3963161475,
          4020912224,
          2667994737,
          273792366,
          2331590177,
          104699613,
          95345982,
          3175501286,
          2377486676,
          1560637892,
          3564045318,
          369057872,
          4213447064,
          3919042237,
          1137477952,
          2658625497,
          1119727848,
          2340947849,
          1530455833,
          4007360968,
          172466556,
          266959938,
          516552836,
          0,
          2256734592,
          3980931627,
          1890328081,
          1917742170,
          4294704398,
          945164165,
          3575528878,
          958871085,
          3647212047,
          2787207260,
          1423022939,
          775562294,
          1739656202,
          3876557655,
          2530391278,
          2443058075,
          3310321856,
          547512796,
          1265195639,
          437656594,
          3121275539,
          719700128,
          3762502690,
          387781147,
          218828297,
          3350065803,
          2830708150,
          2848461854,
          428169201,
          122466165,
          3720081049,
          1627235199,
          648017665,
          4122762354,
          1002783846,
          2117360635,
          695634755,
          3336358691,
          4234721005,
          4049844452,
          3704280881,
          2232435299,
          574624663,
          287343814,
          612205898,
          1039717051,
          840019705,
          2708326185,
          793451934,
          821288114,
          1391201670,
          3822090177,
          376187827,
          3113855344,
          1224348052,
          1679968233,
          2361698556,
          1058709744,
          752375421,
          2431590963,
          1321699145,
          3519142200,
          2734591178,
          188127444,
          2177869557,
          3727205754,
          2384911031,
          3215212461,
          2648976442,
          2450346104,
          3432737375,
          1180849278,
          331544205,
          3102249176,
          4150144569,
          2952102595,
          2159976285,
          2474404304,
          766078933,
          313773861,
          2570832044,
          2108100632,
          1668212892,
          3145456443,
          2013908262,
          418672217,
          3070356634,
          2594734927,
          1852171925,
          3867060991,
          3473416636,
          3907448597,
          2614737639,
          919489135,
          164948639,
          2094410160,
          2997825956,
          590424639,
          2486224549,
          1723872674,
          3157750862,
          3399941250,
          3501252752,
          3625268135,
          2555048196,
          3673637356,
          1343127501,
          4130281361,
          3599595085,
          2957853679,
          1297403050,
          81781910,
          3051593425,
          2283490410,
          532201772,
          1367295589,
          3926170974,
          895287692,
          1953757831,
          1093597963,
          492483431,
          3528626907,
          1446242576,
          1192455638,
          1636604631,
          209336225,
          344873464,
          1015671571,
          669961897,
          3375740769,
          3857572124,
          2973530695,
          3747192018,
          1933530610,
          3464042516,
          935293895,
          3454686199,
          2858115069,
          1863638845,
          3683022916,
          4085369519,
          3292445032,
          875313188,
          1080017571,
          3279033885,
          621591778,
          1233856572,
          2504130317,
          24197544,
          3017672716,
          3835484340,
          3247465558,
          2220981195,
          3060847922,
          1551124588,
          1463996600,
        ],
        E = [
          4104605777,
          1097159550,
          396673818,
          660510266,
          2875968315,
          2638606623,
          4200115116,
          3808662347,
          821712160,
          1986918061,
          3430322568,
          38544885,
          3856137295,
          718002117,
          893681702,
          1654886325,
          2975484382,
          3122358053,
          3926825029,
          4274053469,
          796197571,
          1290801793,
          1184342925,
          3556361835,
          2405426947,
          2459735317,
          1836772287,
          1381620373,
          3196267988,
          1948373848,
          3764988233,
          3385345166,
          3263785589,
          2390325492,
          1480485785,
          3111247143,
          3780097726,
          2293045232,
          548169417,
          3459953789,
          3746175075,
          439452389,
          1362321559,
          1400849762,
          1685577905,
          1806599355,
          2174754046,
          137073913,
          1214797936,
          1174215055,
          3731654548,
          2079897426,
          1943217067,
          1258480242,
          529487843,
          1437280870,
          3945269170,
          3049390895,
          3313212038,
          923313619,
          679998e3,
          3215307299,
          57326082,
          377642221,
          3474729866,
          2041877159,
          133361907,
          1776460110,
          3673476453,
          96392454,
          878845905,
          2801699524,
          777231668,
          4082475170,
          2330014213,
          4142626212,
          2213296395,
          1626319424,
          1906247262,
          1846563261,
          562755902,
          3708173718,
          1040559837,
          3871163981,
          1418573201,
          3294430577,
          114585348,
          1343618912,
          2566595609,
          3186202582,
          1078185097,
          3651041127,
          3896688048,
          2307622919,
          425408743,
          3371096953,
          2081048481,
          1108339068,
          2216610296,
          0,
          2156299017,
          736970802,
          292596766,
          1517440620,
          251657213,
          2235061775,
          2933202493,
          758720310,
          265905162,
          1554391400,
          1532285339,
          908999204,
          174567692,
          1474760595,
          4002861748,
          2610011675,
          3234156416,
          3693126241,
          2001430874,
          303699484,
          2478443234,
          2687165888,
          585122620,
          454499602,
          151849742,
          2345119218,
          3064510765,
          514443284,
          4044981591,
          1963412655,
          2581445614,
          2137062819,
          19308535,
          1928707164,
          1715193156,
          4219352155,
          1126790795,
          600235211,
          3992742070,
          3841024952,
          836553431,
          1669664834,
          2535604243,
          3323011204,
          1243905413,
          3141400786,
          4180808110,
          698445255,
          2653899549,
          2989552604,
          2253581325,
          3252932727,
          3004591147,
          1891211689,
          2487810577,
          3915653703,
          4237083816,
          4030667424,
          2100090966,
          865136418,
          1229899655,
          953270745,
          3399679628,
          3557504664,
          4118925222,
          2061379749,
          3079546586,
          2915017791,
          983426092,
          2022837584,
          1607244650,
          2118541908,
          2366882550,
          3635996816,
          972512814,
          3283088770,
          1568718495,
          3499326569,
          3576539503,
          621982671,
          2895723464,
          410887952,
          2623762152,
          1002142683,
          645401037,
          1494807662,
          2595684844,
          1335535747,
          2507040230,
          4293295786,
          3167684641,
          367585007,
          3885750714,
          1865862730,
          2668221674,
          2960971305,
          2763173681,
          1059270954,
          2777952454,
          2724642869,
          1320957812,
          2194319100,
          2429595872,
          2815956275,
          77089521,
          3973773121,
          3444575871,
          2448830231,
          1305906550,
          4021308739,
          2857194700,
          2516901860,
          3518358430,
          1787304780,
          740276417,
          1699839814,
          1592394909,
          2352307457,
          2272556026,
          188821243,
          1729977011,
          3687994002,
          274084841,
          3594982253,
          3613494426,
          2701949495,
          4162096729,
          322734571,
          2837966542,
          1640576439,
          484830689,
          1202797690,
          3537852828,
          4067639125,
          349075736,
          3342319475,
          4157467219,
          4255800159,
          1030690015,
          1155237496,
          2951971274,
          1757691577,
          607398968,
          2738905026,
          499347990,
          3794078908,
          1011452712,
          227885567,
          2818666809,
          213114376,
          3034881240,
          1455525988,
          3414450555,
          850817237,
          1817998408,
          3092726480,
        ],
        _ = [
          0,
          235474187,
          470948374,
          303765277,
          941896748,
          908933415,
          607530554,
          708780849,
          1883793496,
          2118214995,
          1817866830,
          1649639237,
          1215061108,
          1181045119,
          1417561698,
          1517767529,
          3767586992,
          4003061179,
          4236429990,
          4069246893,
          3635733660,
          3602770327,
          3299278474,
          3400528769,
          2430122216,
          2664543715,
          2362090238,
          2193862645,
          2835123396,
          2801107407,
          3035535058,
          3135740889,
          3678124923,
          3576870512,
          3341394285,
          3374361702,
          3810496343,
          3977675356,
          4279080257,
          4043610186,
          2876494627,
          2776292904,
          3076639029,
          3110650942,
          2472011535,
          2640243204,
          2403728665,
          2169303058,
          1001089995,
          899835584,
          666464733,
          699432150,
          59727847,
          226906860,
          530400753,
          294930682,
          1273168787,
          1172967064,
          1475418501,
          1509430414,
          1942435775,
          2110667444,
          1876241833,
          1641816226,
          2910219766,
          2743034109,
          2976151520,
          3211623147,
          2505202138,
          2606453969,
          2302690252,
          2269728455,
          3711829422,
          3543599269,
          3240894392,
          3475313331,
          3843699074,
          3943906441,
          4178062228,
          4144047775,
          1306967366,
          1139781709,
          1374988112,
          1610459739,
          1975683434,
          2076935265,
          1775276924,
          1742315127,
          1034867998,
          866637845,
          566021896,
          800440835,
          92987698,
          193195065,
          429456164,
          395441711,
          1984812685,
          2017778566,
          1784663195,
          1683407248,
          1315562145,
          1080094634,
          1383856311,
          1551037884,
          101039829,
          135050206,
          437757123,
          337553864,
          1042385657,
          807962610,
          573804783,
          742039012,
          2531067453,
          2564033334,
          2328828971,
          2227573024,
          2935566865,
          2700099354,
          3001755655,
          3168937228,
          3868552805,
          3902563182,
          4203181171,
          4102977912,
          3736164937,
          3501741890,
          3265478751,
          3433712980,
          1106041591,
          1340463100,
          1576976609,
          1408749034,
          2043211483,
          2009195472,
          1708848333,
          1809054150,
          832877231,
          1068351396,
          766945465,
          599762354,
          159417987,
          126454664,
          361929877,
          463180190,
          2709260871,
          2943682380,
          3178106961,
          3009879386,
          2572697195,
          2538681184,
          2236228733,
          2336434550,
          3509871135,
          3745345300,
          3441850377,
          3274667266,
          3910161971,
          3877198648,
          4110568485,
          4211818798,
          2597806476,
          2497604743,
          2261089178,
          2295101073,
          2733856160,
          2902087851,
          3202437046,
          2968011453,
          3936291284,
          3835036895,
          4136440770,
          4169408201,
          3535486456,
          3702665459,
          3467192302,
          3231722213,
          2051518780,
          1951317047,
          1716890410,
          1750902305,
          1113818384,
          1282050075,
          1584504582,
          1350078989,
          168810852,
          67556463,
          371049330,
          404016761,
          841739592,
          1008918595,
          775550814,
          540080725,
          3969562369,
          3801332234,
          4035489047,
          4269907996,
          3569255213,
          3669462566,
          3366754619,
          3332740144,
          2631065433,
          2463879762,
          2160117071,
          2395588676,
          2767645557,
          2868897406,
          3102011747,
          3069049960,
          202008497,
          33778362,
          270040487,
          504459436,
          875451293,
          975658646,
          675039627,
          641025152,
          2084704233,
          1917518562,
          1615861247,
          1851332852,
          1147550661,
          1248802510,
          1484005843,
          1451044056,
          933301370,
          967311729,
          733156972,
          632953703,
          260388950,
          25965917,
          328671808,
          496906059,
          1206477858,
          1239443753,
          1543208500,
          1441952575,
          2144161806,
          1908694277,
          1675577880,
          1842759443,
          3610369226,
          3644379585,
          3408119516,
          3307916247,
          4011190502,
          3776767469,
          4077384432,
          4245618683,
          2809771154,
          2842737049,
          3144396420,
          3043140495,
          2673705150,
          2438237621,
          2203032232,
          2370213795,
        ],
        k = [
          0,
          185469197,
          370938394,
          487725847,
          741876788,
          657861945,
          975451694,
          824852259,
          1483753576,
          1400783205,
          1315723890,
          1164071807,
          1950903388,
          2135319889,
          1649704518,
          1767536459,
          2967507152,
          3152976349,
          2801566410,
          2918353863,
          2631447780,
          2547432937,
          2328143614,
          2177544179,
          3901806776,
          3818836405,
          4270639778,
          4118987695,
          3299409036,
          3483825537,
          3535072918,
          3652904859,
          2077965243,
          1893020342,
          1841768865,
          1724457132,
          1474502543,
          1559041666,
          1107234197,
          1257309336,
          598438867,
          681933534,
          901210569,
          1052338372,
          261314535,
          77422314,
          428819965,
          310463728,
          3409685355,
          3224740454,
          3710368113,
          3593056380,
          3875770207,
          3960309330,
          4045380933,
          4195456072,
          2471224067,
          2554718734,
          2237133081,
          2388260884,
          3212035895,
          3028143674,
          2842678573,
          2724322336,
          4138563181,
          4255350624,
          3769721975,
          3955191162,
          3667219033,
          3516619604,
          3431546947,
          3347532110,
          2933734917,
          2782082824,
          3099667487,
          3016697106,
          2196052529,
          2313884476,
          2499348523,
          2683765030,
          1179510461,
          1296297904,
          1347548327,
          1533017514,
          1786102409,
          1635502980,
          2087309459,
          2003294622,
          507358933,
          355706840,
          136428751,
          53458370,
          839224033,
          957055980,
          605657339,
          790073846,
          2373340630,
          2256028891,
          2607439820,
          2422494913,
          2706270690,
          2856345839,
          3075636216,
          3160175349,
          3573941694,
          3725069491,
          3273267108,
          3356761769,
          4181598602,
          4063242375,
          4011996048,
          3828103837,
          1033297158,
          915985419,
          730517276,
          545572369,
          296679730,
          446754879,
          129166120,
          213705253,
          1709610350,
          1860738147,
          1945798516,
          2029293177,
          1239331162,
          1120974935,
          1606591296,
          1422699085,
          4148292826,
          4233094615,
          3781033664,
          3931371469,
          3682191598,
          3497509347,
          3446004468,
          3328955385,
          2939266226,
          2755636671,
          3106780840,
          2988687269,
          2198438022,
          2282195339,
          2501218972,
          2652609425,
          1201765386,
          1286567175,
          1371368976,
          1521706781,
          1805211710,
          1620529459,
          2105887268,
          1988838185,
          533804130,
          350174575,
          164439672,
          46346101,
          870912086,
          954669403,
          636813900,
          788204353,
          2358957921,
          2274680428,
          2592523643,
          2441661558,
          2695033685,
          2880240216,
          3065962831,
          3182487618,
          3572145929,
          3756299780,
          3270937875,
          3388507166,
          4174560061,
          4091327024,
          4006521127,
          3854606378,
          1014646705,
          930369212,
          711349675,
          560487590,
          272786309,
          457992840,
          106852767,
          223377554,
          1678381017,
          1862534868,
          1914052035,
          2031621326,
          1211247597,
          1128014560,
          1580087799,
          1428173050,
          32283319,
          182621114,
          401639597,
          486441376,
          768917123,
          651868046,
          1003007129,
          818324884,
          1503449823,
          1385356242,
          1333838021,
          1150208456,
          1973745387,
          2125135846,
          1673061617,
          1756818940,
          2970356327,
          3120694122,
          2802849917,
          2887651696,
          2637442643,
          2520393566,
          2334669897,
          2149987652,
          3917234703,
          3799141122,
          4284502037,
          4100872472,
          3309594171,
          3460984630,
          3545789473,
          3629546796,
          2050466060,
          1899603969,
          1814803222,
          1730525723,
          1443857720,
          1560382517,
          1075025698,
          1260232239,
          575138148,
          692707433,
          878443390,
          1062597235,
          243256656,
          91341917,
          409198410,
          325965383,
          3403100636,
          3252238545,
          3704300486,
          3620022987,
          3874428392,
          3990953189,
          4042459122,
          4227665663,
          2460449204,
          2578018489,
          2226875310,
          2411029155,
          3198115200,
          3046200461,
          2827177882,
          2743944855,
        ],
        A = [
          0,
          218828297,
          437656594,
          387781147,
          875313188,
          958871085,
          775562294,
          590424639,
          1750626376,
          1699970625,
          1917742170,
          2135253587,
          1551124588,
          1367295589,
          1180849278,
          1265195639,
          3501252752,
          3720081049,
          3399941250,
          3350065803,
          3835484340,
          3919042237,
          4270507174,
          4085369519,
          3102249176,
          3051593425,
          2734591178,
          2952102595,
          2361698556,
          2177869557,
          2530391278,
          2614737639,
          3145456443,
          3060847922,
          2708326185,
          2892417312,
          2404901663,
          2187128086,
          2504130317,
          2555048196,
          3542330227,
          3727205754,
          3375740769,
          3292445032,
          3876557655,
          3926170974,
          4246310725,
          4027744588,
          1808481195,
          1723872674,
          1910319033,
          2094410160,
          1608975247,
          1391201670,
          1173430173,
          1224348052,
          59984867,
          244860394,
          428169201,
          344873464,
          935293895,
          984907214,
          766078933,
          547512796,
          1844882806,
          1627235199,
          2011214180,
          2062270317,
          1507497298,
          1423022939,
          1137477952,
          1321699145,
          95345982,
          145085239,
          532201772,
          313773861,
          830661914,
          1015671571,
          731183368,
          648017665,
          3175501286,
          2957853679,
          2807058932,
          2858115069,
          2305455554,
          2220981195,
          2474404304,
          2658625497,
          3575528878,
          3625268135,
          3473416636,
          3254988725,
          3778151818,
          3963161475,
          4213447064,
          4130281361,
          3599595085,
          3683022916,
          3432737375,
          3247465558,
          3802222185,
          4020912224,
          4172763771,
          4122762354,
          3201631749,
          3017672716,
          2764249623,
          2848461854,
          2331590177,
          2280796200,
          2431590963,
          2648976442,
          104699613,
          188127444,
          472615631,
          287343814,
          840019705,
          1058709744,
          671593195,
          621591778,
          1852171925,
          1668212892,
          1953757831,
          2037970062,
          1514790577,
          1463996600,
          1080017571,
          1297403050,
          3673637356,
          3623636965,
          3235995134,
          3454686199,
          4007360968,
          3822090177,
          4107101658,
          4190530515,
          2997825956,
          3215212461,
          2830708150,
          2779915199,
          2256734592,
          2340947849,
          2627016082,
          2443058075,
          172466556,
          122466165,
          273792366,
          492483431,
          1047239e3,
          861968209,
          612205898,
          695634755,
          1646252340,
          1863638845,
          2013908262,
          1963115311,
          1446242576,
          1530455833,
          1277555970,
          1093597963,
          1636604631,
          1820824798,
          2073724613,
          1989249228,
          1436590835,
          1487645946,
          1337376481,
          1119727848,
          164948639,
          81781910,
          331544205,
          516552836,
          1039717051,
          821288114,
          669961897,
          719700128,
          2973530695,
          3157750862,
          2871682645,
          2787207260,
          2232435299,
          2283490410,
          2667994737,
          2450346104,
          3647212047,
          3564045318,
          3279033885,
          3464042516,
          3980931627,
          3762502690,
          4150144569,
          4199882800,
          3070356634,
          3121275539,
          2904027272,
          2686254721,
          2200818878,
          2384911031,
          2570832044,
          2486224549,
          3747192018,
          3528626907,
          3310321856,
          3359936201,
          3950355702,
          3867060991,
          4049844452,
          4234721005,
          1739656202,
          1790575107,
          2108100632,
          1890328081,
          1402811438,
          1586903591,
          1233856572,
          1149249077,
          266959938,
          48394827,
          369057872,
          418672217,
          1002783846,
          919489135,
          567498868,
          752375421,
          209336225,
          24197544,
          376187827,
          459744698,
          945164165,
          895287692,
          574624663,
          793451934,
          1679968233,
          1764313568,
          2117360635,
          1933530610,
          1343127501,
          1560637892,
          1243112415,
          1192455638,
          3704280881,
          3519142200,
          3336358691,
          3419915562,
          3907448597,
          3857572124,
          4075877127,
          4294704398,
          3029510009,
          3113855344,
          2927934315,
          2744104290,
          2159976285,
          2377486676,
          2594734927,
          2544078150,
        ],
        S = [
          0,
          151849742,
          303699484,
          454499602,
          607398968,
          758720310,
          908999204,
          1059270954,
          1214797936,
          1097159550,
          1517440620,
          1400849762,
          1817998408,
          1699839814,
          2118541908,
          2001430874,
          2429595872,
          2581445614,
          2194319100,
          2345119218,
          3034881240,
          3186202582,
          2801699524,
          2951971274,
          3635996816,
          3518358430,
          3399679628,
          3283088770,
          4237083816,
          4118925222,
          4002861748,
          3885750714,
          1002142683,
          850817237,
          698445255,
          548169417,
          529487843,
          377642221,
          227885567,
          77089521,
          1943217067,
          2061379749,
          1640576439,
          1757691577,
          1474760595,
          1592394909,
          1174215055,
          1290801793,
          2875968315,
          2724642869,
          3111247143,
          2960971305,
          2405426947,
          2253581325,
          2638606623,
          2487810577,
          3808662347,
          3926825029,
          4044981591,
          4162096729,
          3342319475,
          3459953789,
          3576539503,
          3693126241,
          1986918061,
          2137062819,
          1685577905,
          1836772287,
          1381620373,
          1532285339,
          1078185097,
          1229899655,
          1040559837,
          923313619,
          740276417,
          621982671,
          439452389,
          322734571,
          137073913,
          19308535,
          3871163981,
          4021308739,
          4104605777,
          4255800159,
          3263785589,
          3414450555,
          3499326569,
          3651041127,
          2933202493,
          2815956275,
          3167684641,
          3049390895,
          2330014213,
          2213296395,
          2566595609,
          2448830231,
          1305906550,
          1155237496,
          1607244650,
          1455525988,
          1776460110,
          1626319424,
          2079897426,
          1928707164,
          96392454,
          213114376,
          396673818,
          514443284,
          562755902,
          679998e3,
          865136418,
          983426092,
          3708173718,
          3557504664,
          3474729866,
          3323011204,
          4180808110,
          4030667424,
          3945269170,
          3794078908,
          2507040230,
          2623762152,
          2272556026,
          2390325492,
          2975484382,
          3092726480,
          2738905026,
          2857194700,
          3973773121,
          3856137295,
          4274053469,
          4157467219,
          3371096953,
          3252932727,
          3673476453,
          3556361835,
          2763173681,
          2915017791,
          3064510765,
          3215307299,
          2156299017,
          2307622919,
          2459735317,
          2610011675,
          2081048481,
          1963412655,
          1846563261,
          1729977011,
          1480485785,
          1362321559,
          1243905413,
          1126790795,
          878845905,
          1030690015,
          645401037,
          796197571,
          274084841,
          425408743,
          38544885,
          188821243,
          3613494426,
          3731654548,
          3313212038,
          3430322568,
          4082475170,
          4200115116,
          3780097726,
          3896688048,
          2668221674,
          2516901860,
          2366882550,
          2216610296,
          3141400786,
          2989552604,
          2837966542,
          2687165888,
          1202797690,
          1320957812,
          1437280870,
          1554391400,
          1669664834,
          1787304780,
          1906247262,
          2022837584,
          265905162,
          114585348,
          499347990,
          349075736,
          736970802,
          585122620,
          972512814,
          821712160,
          2595684844,
          2478443234,
          2293045232,
          2174754046,
          3196267988,
          3079546586,
          2895723464,
          2777952454,
          3537852828,
          3687994002,
          3234156416,
          3385345166,
          4142626212,
          4293295786,
          3841024952,
          3992742070,
          174567692,
          57326082,
          410887952,
          292596766,
          777231668,
          660510266,
          1011452712,
          893681702,
          1108339068,
          1258480242,
          1343618912,
          1494807662,
          1715193156,
          1865862730,
          1948373848,
          2100090966,
          2701949495,
          2818666809,
          3004591147,
          3122358053,
          2235061775,
          2352307457,
          2535604243,
          2653899549,
          3915653703,
          3764988233,
          4219352155,
          4067639125,
          3444575871,
          3294430577,
          3746175075,
          3594982253,
          836553431,
          953270745,
          600235211,
          718002117,
          367585007,
          484830689,
          133361907,
          251657213,
          2041877159,
          1891211689,
          1806599355,
          1654886325,
          1568718495,
          1418573201,
          1335535747,
          1184342925,
        ]
      function P(t) {
        for (var e = [], r = 0; r < t.length; r += 4)
          e.push((t[r] << 24) | (t[r + 1] << 16) | (t[r + 2] << 8) | t[r + 3])
        return e
      }
      var O = function(t) {
        if (!(this instanceof O))
          throw Error('AES must be instanitated with `new`')
        Object.defineProperty(this, 'key', { value: i(t, !0) }), this._prepare()
      }
      ;(O.prototype._prepare = function() {
        var t = l[this.key.length]
        if (null == t)
          throw new Error('invalid key size (must be 16, 24 or 32 bytes)')
        ;(this._Ke = []), (this._Kd = [])
        for (var e = 0; e <= t; e++)
          this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0])
        var r,
          n = 4 * (t + 1),
          i = this.key.length / 4,
          o = P(this.key)
        for (e = 0; e < i; e++)
          (r = e >> 2),
            (this._Ke[r][e % 4] = o[e]),
            (this._Kd[t - r][e % 4] = o[e])
        for (var s, a = 0, u = i; u < n; ) {
          if (
            ((s = o[i - 1]),
            (o[0] ^=
              (f[(s >> 16) & 255] << 24) ^
              (f[(s >> 8) & 255] << 16) ^
              (f[255 & s] << 8) ^
              f[(s >> 24) & 255] ^
              (h[a] << 24)),
            (a += 1),
            8 != i)
          )
            for (e = 1; e < i; e++) o[e] ^= o[e - 1]
          else {
            for (e = 1; e < i / 2; e++) o[e] ^= o[e - 1]
            ;(s = o[i / 2 - 1]),
              (o[i / 2] ^=
                f[255 & s] ^
                (f[(s >> 8) & 255] << 8) ^
                (f[(s >> 16) & 255] << 16) ^
                (f[(s >> 24) & 255] << 24))
            for (e = i / 2 + 1; e < i; e++) o[e] ^= o[e - 1]
          }
          for (e = 0; e < i && u < n; )
            (c = u >> 2),
              (d = u % 4),
              (this._Ke[c][d] = o[e]),
              (this._Kd[t - c][d] = o[e++]),
              u++
        }
        for (var c = 1; c < t; c++)
          for (var d = 0; d < 4; d++)
            (s = this._Kd[c][d]),
              (this._Kd[c][d] =
                _[(s >> 24) & 255] ^
                k[(s >> 16) & 255] ^
                A[(s >> 8) & 255] ^
                S[255 & s])
      }),
        (O.prototype.encrypt = function(t) {
          if (16 != t.length)
            throw new Error('invalid plaintext size (must be 16 bytes)')
          for (
            var e = this._Ke.length - 1, r = [0, 0, 0, 0], n = P(t), i = 0;
            i < 4;
            i++
          )
            n[i] ^= this._Ke[0][i]
          for (var s = 1; s < e; s++) {
            for (i = 0; i < 4; i++)
              r[i] =
                p[(n[i] >> 24) & 255] ^
                m[(n[(i + 1) % 4] >> 16) & 255] ^
                g[(n[(i + 2) % 4] >> 8) & 255] ^
                y[255 & n[(i + 3) % 4]] ^
                this._Ke[s][i]
            n = r.slice()
          }
          var a,
            u = o(16)
          for (i = 0; i < 4; i++)
            (a = this._Ke[e][i]),
              (u[4 * i] = 255 & (f[(n[i] >> 24) & 255] ^ (a >> 24))),
              (u[4 * i + 1] =
                255 & (f[(n[(i + 1) % 4] >> 16) & 255] ^ (a >> 16))),
              (u[4 * i + 2] =
                255 & (f[(n[(i + 2) % 4] >> 8) & 255] ^ (a >> 8))),
              (u[4 * i + 3] = 255 & (f[255 & n[(i + 3) % 4]] ^ a))
          return u
        }),
        (O.prototype.decrypt = function(t) {
          if (16 != t.length)
            throw new Error('invalid ciphertext size (must be 16 bytes)')
          for (
            var e = this._Kd.length - 1, r = [0, 0, 0, 0], n = P(t), i = 0;
            i < 4;
            i++
          )
            n[i] ^= this._Kd[0][i]
          for (var s = 1; s < e; s++) {
            for (i = 0; i < 4; i++)
              r[i] =
                b[(n[i] >> 24) & 255] ^
                v[(n[(i + 3) % 4] >> 16) & 255] ^
                w[(n[(i + 2) % 4] >> 8) & 255] ^
                E[255 & n[(i + 1) % 4]] ^
                this._Kd[s][i]
            n = r.slice()
          }
          var a,
            u = o(16)
          for (i = 0; i < 4; i++)
            (a = this._Kd[e][i]),
              (u[4 * i] = 255 & (d[(n[i] >> 24) & 255] ^ (a >> 24))),
              (u[4 * i + 1] =
                255 & (d[(n[(i + 3) % 4] >> 16) & 255] ^ (a >> 16))),
              (u[4 * i + 2] =
                255 & (d[(n[(i + 2) % 4] >> 8) & 255] ^ (a >> 8))),
              (u[4 * i + 3] = 255 & (d[255 & n[(i + 1) % 4]] ^ a))
          return u
        })
      var N = function(t) {
        if (!(this instanceof N))
          throw Error('AES must be instanitated with `new`')
        ;(this.description = 'Electronic Code Block'),
          (this.name = 'ecb'),
          (this._aes = new O(t))
      }
      ;(N.prototype.encrypt = function(t) {
        if ((t = i(t)).length % 16 != 0)
          throw new Error(
            'invalid plaintext size (must be multiple of 16 bytes)',
          )
        for (var e = o(t.length), r = o(16), n = 0; n < t.length; n += 16)
          s(t, r, 0, n, n + 16), s((r = this._aes.encrypt(r)), e, n)
        return e
      }),
        (N.prototype.decrypt = function(t) {
          if ((t = i(t)).length % 16 != 0)
            throw new Error(
              'invalid ciphertext size (must be multiple of 16 bytes)',
            )
          for (var e = o(t.length), r = o(16), n = 0; n < t.length; n += 16)
            s(t, r, 0, n, n + 16), s((r = this._aes.decrypt(r)), e, n)
          return e
        })
      var x = function(t, e) {
        if (!(this instanceof x))
          throw Error('AES must be instanitated with `new`')
        if (
          ((this.description = 'Cipher Block Chaining'), (this.name = 'cbc'), e)
        ) {
          if (16 != e.length)
            throw new Error(
              'invalid initialation vector size (must be 16 bytes)',
            )
        } else e = o(16)
        ;(this._lastCipherblock = i(e, !0)), (this._aes = new O(t))
      }
      ;(x.prototype.encrypt = function(t) {
        if ((t = i(t)).length % 16 != 0)
          throw new Error(
            'invalid plaintext size (must be multiple of 16 bytes)',
          )
        for (var e = o(t.length), r = o(16), n = 0; n < t.length; n += 16) {
          s(t, r, 0, n, n + 16)
          for (var a = 0; a < 16; a++) r[a] ^= this._lastCipherblock[a]
          ;(this._lastCipherblock = this._aes.encrypt(r)),
            s(this._lastCipherblock, e, n)
        }
        return e
      }),
        (x.prototype.decrypt = function(t) {
          if ((t = i(t)).length % 16 != 0)
            throw new Error(
              'invalid ciphertext size (must be multiple of 16 bytes)',
            )
          for (var e = o(t.length), r = o(16), n = 0; n < t.length; n += 16) {
            s(t, r, 0, n, n + 16), (r = this._aes.decrypt(r))
            for (var a = 0; a < 16; a++)
              e[n + a] = r[a] ^ this._lastCipherblock[a]
            s(t, this._lastCipherblock, 0, n, n + 16)
          }
          return e
        })
      var M = function(t, e, r) {
        if (!(this instanceof M))
          throw Error('AES must be instanitated with `new`')
        if (((this.description = 'Cipher Feedback'), (this.name = 'cfb'), e)) {
          if (16 != e.length)
            throw new Error(
              'invalid initialation vector size (must be 16 size)',
            )
        } else e = o(16)
        r || (r = 1),
          (this.segmentSize = r),
          (this._shiftRegister = i(e, !0)),
          (this._aes = new O(t))
      }
      ;(M.prototype.encrypt = function(t) {
        if (t.length % this.segmentSize != 0)
          throw new Error('invalid plaintext size (must be segmentSize bytes)')
        for (var e, r = i(t, !0), n = 0; n < r.length; n += this.segmentSize) {
          e = this._aes.encrypt(this._shiftRegister)
          for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= e[o]
          s(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
            s(
              r,
              this._shiftRegister,
              16 - this.segmentSize,
              n,
              n + this.segmentSize,
            )
        }
        return r
      }),
        (M.prototype.decrypt = function(t) {
          if (t.length % this.segmentSize != 0)
            throw new Error(
              'invalid ciphertext size (must be segmentSize bytes)',
            )
          for (
            var e, r = i(t, !0), n = 0;
            n < r.length;
            n += this.segmentSize
          ) {
            e = this._aes.encrypt(this._shiftRegister)
            for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= e[o]
            s(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
              s(
                t,
                this._shiftRegister,
                16 - this.segmentSize,
                n,
                n + this.segmentSize,
              )
          }
          return r
        })
      var T = function(t, e) {
        if (!(this instanceof T))
          throw Error('AES must be instanitated with `new`')
        if (((this.description = 'Output Feedback'), (this.name = 'ofb'), e)) {
          if (16 != e.length)
            throw new Error(
              'invalid initialation vector size (must be 16 bytes)',
            )
        } else e = o(16)
        ;(this._lastPrecipher = i(e, !0)),
          (this._lastPrecipherIndex = 16),
          (this._aes = new O(t))
      }
      ;(T.prototype.encrypt = function(t) {
        for (var e = i(t, !0), r = 0; r < e.length; r++)
          16 === this._lastPrecipherIndex &&
            ((this._lastPrecipher = this._aes.encrypt(this._lastPrecipher)),
            (this._lastPrecipherIndex = 0)),
            (e[r] ^= this._lastPrecipher[this._lastPrecipherIndex++])
        return e
      }),
        (T.prototype.decrypt = T.prototype.encrypt)
      var I = function(t) {
        if (!(this instanceof I))
          throw Error('Counter must be instanitated with `new`')
        0 === t || t || (t = 1),
          'number' == typeof t
            ? ((this._counter = o(16)), this.setValue(t))
            : this.setBytes(t)
      }
      ;(I.prototype.setValue = function(t) {
        if ('number' != typeof t || parseInt(t) != t)
          throw new Error('invalid counter value (must be an integer)')
        for (var e = 15; e >= 0; --e) (this._counter[e] = t % 256), (t >>= 8)
      }),
        (I.prototype.setBytes = function(t) {
          if (16 != (t = i(t, !0)).length)
            throw new Error('invalid counter bytes size (must be 16 bytes)')
          this._counter = t
        }),
        (I.prototype.increment = function() {
          for (var t = 15; t >= 0; t--) {
            if (255 !== this._counter[t]) {
              this._counter[t]++
              break
            }
            this._counter[t] = 0
          }
        })
      var R = function(t, e) {
        if (!(this instanceof R))
          throw Error('AES must be instanitated with `new`')
        ;(this.description = 'Counter'),
          (this.name = 'ctr'),
          e instanceof I || (e = new I(e)),
          (this._counter = e),
          (this._remainingCounter = null),
          (this._remainingCounterIndex = 16),
          (this._aes = new O(t))
      }
      ;(R.prototype.encrypt = function(t) {
        for (var e = i(t, !0), r = 0; r < e.length; r++)
          16 === this._remainingCounterIndex &&
            ((this._remainingCounter = this._aes.encrypt(
              this._counter._counter,
            )),
            (this._remainingCounterIndex = 0),
            this._counter.increment()),
            (e[r] ^= this._remainingCounter[this._remainingCounterIndex++])
        return e
      }),
        (R.prototype.decrypt = R.prototype.encrypt)
      var C = {
        AES: O,
        Counter: I,
        ModeOfOperation: { ecb: N, cbc: x, cfb: M, ofb: T, ctr: R },
        utils: { hex: c, utf8: u },
        padding: {
          pkcs7: {
            pad: function(t) {
              var e = 16 - ((t = i(t, !0)).length % 16),
                r = o(t.length + e)
              s(t, r)
              for (var n = t.length; n < r.length; n++) r[n] = e
              return r
            },
            strip: function(t) {
              if ((t = i(t, !0)).length < 16)
                throw new Error('PKCS#7 invalid length')
              var e = t[t.length - 1]
              if (e > 16) throw new Error('PKCS#7 padding byte out of range')
              for (var r = t.length - e, n = 0; n < e; n++)
                if (t[r + n] !== e)
                  throw new Error('PKCS#7 invalid padding byte')
              var a = o(r)
              return s(t, a, 0, 0, r), a
            },
          },
        },
        _arrayTest: { coerceArray: i, createArray: o, copyArray: s },
      }
      t.exports = C
    })()
  },
  function(t, e, r) {
    'use strict'
    var n = r(11),
      i = r(28)
    function o(t, e) {
      return (
        55296 == (64512 & t.charCodeAt(e)) &&
        (!(e < 0 || e + 1 >= t.length) &&
          56320 == (64512 & t.charCodeAt(e + 1)))
      )
    }
    function s(t) {
      return (
        ((t >>> 24) |
          ((t >>> 8) & 65280) |
          ((t << 8) & 16711680) |
          ((255 & t) << 24)) >>>
        0
      )
    }
    function a(t) {
      return 1 === t.length ? '0' + t : t
    }
    function u(t) {
      return 7 === t.length
        ? '0' + t
        : 6 === t.length
        ? '00' + t
        : 5 === t.length
        ? '000' + t
        : 4 === t.length
        ? '0000' + t
        : 3 === t.length
        ? '00000' + t
        : 2 === t.length
        ? '000000' + t
        : 1 === t.length
        ? '0000000' + t
        : t
    }
    ;(e.inherits = i),
      (e.toArray = function(t, e) {
        if (Array.isArray(t)) return t.slice()
        if (!t) return []
        var r = []
        if ('string' == typeof t)
          if (e) {
            if ('hex' === e)
              for (
                (t = t.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 &&
                  (t = '0' + t),
                  i = 0;
                i < t.length;
                i += 2
              )
                r.push(parseInt(t[i] + t[i + 1], 16))
          } else
            for (var n = 0, i = 0; i < t.length; i++) {
              var s = t.charCodeAt(i)
              s < 128
                ? (r[n++] = s)
                : s < 2048
                ? ((r[n++] = (s >> 6) | 192), (r[n++] = (63 & s) | 128))
                : o(t, i)
                ? ((s =
                    65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++i))),
                  (r[n++] = (s >> 18) | 240),
                  (r[n++] = ((s >> 12) & 63) | 128),
                  (r[n++] = ((s >> 6) & 63) | 128),
                  (r[n++] = (63 & s) | 128))
                : ((r[n++] = (s >> 12) | 224),
                  (r[n++] = ((s >> 6) & 63) | 128),
                  (r[n++] = (63 & s) | 128))
            }
        else for (i = 0; i < t.length; i++) r[i] = 0 | t[i]
        return r
      }),
      (e.toHex = function(t) {
        for (var e = '', r = 0; r < t.length; r++) e += a(t[r].toString(16))
        return e
      }),
      (e.htonl = s),
      (e.toHex32 = function(t, e) {
        for (var r = '', n = 0; n < t.length; n++) {
          var i = t[n]
          'little' === e && (i = s(i)), (r += u(i.toString(16)))
        }
        return r
      }),
      (e.zero2 = a),
      (e.zero8 = u),
      (e.join32 = function(t, e, r, i) {
        var o = r - e
        n(o % 4 == 0)
        for (
          var s = new Array(o / 4), a = 0, u = e;
          a < s.length;
          a++, u += 4
        ) {
          var c
          ;(c =
            'big' === i
              ? (t[u] << 24) | (t[u + 1] << 16) | (t[u + 2] << 8) | t[u + 3]
              : (t[u + 3] << 24) | (t[u + 2] << 16) | (t[u + 1] << 8) | t[u]),
            (s[a] = c >>> 0)
        }
        return s
      }),
      (e.split32 = function(t, e) {
        for (
          var r = new Array(4 * t.length), n = 0, i = 0;
          n < t.length;
          n++, i += 4
        ) {
          var o = t[n]
          'big' === e
            ? ((r[i] = o >>> 24),
              (r[i + 1] = (o >>> 16) & 255),
              (r[i + 2] = (o >>> 8) & 255),
              (r[i + 3] = 255 & o))
            : ((r[i + 3] = o >>> 24),
              (r[i + 2] = (o >>> 16) & 255),
              (r[i + 1] = (o >>> 8) & 255),
              (r[i] = 255 & o))
        }
        return r
      }),
      (e.rotr32 = function(t, e) {
        return (t >>> e) | (t << (32 - e))
      }),
      (e.rotl32 = function(t, e) {
        return (t << e) | (t >>> (32 - e))
      }),
      (e.sum32 = function(t, e) {
        return (t + e) >>> 0
      }),
      (e.sum32_3 = function(t, e, r) {
        return (t + e + r) >>> 0
      }),
      (e.sum32_4 = function(t, e, r, n) {
        return (t + e + r + n) >>> 0
      }),
      (e.sum32_5 = function(t, e, r, n, i) {
        return (t + e + r + n + i) >>> 0
      }),
      (e.sum64 = function(t, e, r, n) {
        var i = t[e],
          o = (n + t[e + 1]) >>> 0,
          s = (o < n ? 1 : 0) + r + i
        ;(t[e] = s >>> 0), (t[e + 1] = o)
      }),
      (e.sum64_hi = function(t, e, r, n) {
        return (((e + n) >>> 0 < e ? 1 : 0) + t + r) >>> 0
      }),
      (e.sum64_lo = function(t, e, r, n) {
        return (e + n) >>> 0
      }),
      (e.sum64_4_hi = function(t, e, r, n, i, o, s, a) {
        var u = 0,
          c = e
        return (
          (u += (c = (c + n) >>> 0) < e ? 1 : 0),
          (u += (c = (c + o) >>> 0) < o ? 1 : 0),
          (t + r + i + s + (u += (c = (c + a) >>> 0) < a ? 1 : 0)) >>> 0
        )
      }),
      (e.sum64_4_lo = function(t, e, r, n, i, o, s, a) {
        return (e + n + o + a) >>> 0
      }),
      (e.sum64_5_hi = function(t, e, r, n, i, o, s, a, u, c) {
        var l = 0,
          h = e
        return (
          (l += (h = (h + n) >>> 0) < e ? 1 : 0),
          (l += (h = (h + o) >>> 0) < o ? 1 : 0),
          (l += (h = (h + a) >>> 0) < a ? 1 : 0),
          (t + r + i + s + u + (l += (h = (h + c) >>> 0) < c ? 1 : 0)) >>> 0
        )
      }),
      (e.sum64_5_lo = function(t, e, r, n, i, o, s, a, u, c) {
        return (e + n + o + a + c) >>> 0
      }),
      (e.rotr64_hi = function(t, e, r) {
        return ((e << (32 - r)) | (t >>> r)) >>> 0
      }),
      (e.rotr64_lo = function(t, e, r) {
        return ((t << (32 - r)) | (e >>> r)) >>> 0
      }),
      (e.shr64_hi = function(t, e, r) {
        return t >>> r
      }),
      (e.shr64_lo = function(t, e, r) {
        return ((t << (32 - r)) | (e >>> r)) >>> 0
      })
  },
  ,
  ,
  function(t, e) {
    var r
    r = (function() {
      return this
    })()
    try {
      r = r || new Function('return this')()
    } catch (t) {
      'object' == typeof window && (r = window)
    }
    t.exports = r
  },
  function(t, e) {
    function r(t, e) {
      if (!t) throw new Error(e || 'Assertion failed')
    }
    ;(t.exports = r),
      (r.equal = function(t, e, r) {
        if (t != e) throw new Error(r || 'Assertion failed: ' + t + ' != ' + e)
      })
  },
  function(t, e, r) {
    'use strict'
    var n = r(7),
      i = r(11)
    function o() {
      ;(this.pending = null),
        (this.pendingTotal = 0),
        (this.blockSize = this.constructor.blockSize),
        (this.outSize = this.constructor.outSize),
        (this.hmacStrength = this.constructor.hmacStrength),
        (this.padLength = this.constructor.padLength / 8),
        (this.endian = 'big'),
        (this._delta8 = this.blockSize / 8),
        (this._delta32 = this.blockSize / 32)
    }
    ;(e.BlockHash = o),
      (o.prototype.update = function(t, e) {
        if (
          ((t = n.toArray(t, e)),
          this.pending
            ? (this.pending = this.pending.concat(t))
            : (this.pending = t),
          (this.pendingTotal += t.length),
          this.pending.length >= this._delta8)
        ) {
          var r = (t = this.pending).length % this._delta8
          ;(this.pending = t.slice(t.length - r, t.length)),
            0 === this.pending.length && (this.pending = null),
            (t = n.join32(t, 0, t.length - r, this.endian))
          for (var i = 0; i < t.length; i += this._delta32)
            this._update(t, i, i + this._delta32)
        }
        return this
      }),
      (o.prototype.digest = function(t) {
        return (
          this.update(this._pad()), i(null === this.pending), this._digest(t)
        )
      }),
      (o.prototype._pad = function() {
        var t = this.pendingTotal,
          e = this._delta8,
          r = e - ((t + this.padLength) % e),
          n = new Array(r + this.padLength)
        n[0] = 128
        for (var i = 1; i < r; i++) n[i] = 0
        if (((t <<= 3), 'big' === this.endian)) {
          for (var o = 8; o < this.padLength; o++) n[i++] = 0
          ;(n[i++] = 0),
            (n[i++] = 0),
            (n[i++] = 0),
            (n[i++] = 0),
            (n[i++] = (t >>> 24) & 255),
            (n[i++] = (t >>> 16) & 255),
            (n[i++] = (t >>> 8) & 255),
            (n[i++] = 255 & t)
        } else
          for (
            n[i++] = 255 & t,
              n[i++] = (t >>> 8) & 255,
              n[i++] = (t >>> 16) & 255,
              n[i++] = (t >>> 24) & 255,
              n[i++] = 0,
              n[i++] = 0,
              n[i++] = 0,
              n[i++] = 0,
              o = 8;
            o < this.padLength;
            o++
          )
            n[i++] = 0
        return n
      })
  },
  function(t, e, r) {
    'use strict'
    ;(function(e) {
      !(function(r) {
        function n(t) {
          const e = new Uint32Array([
            1116352408,
            1899447441,
            3049323471,
            3921009573,
            961987163,
            1508970993,
            2453635748,
            2870763221,
            3624381080,
            310598401,
            607225278,
            1426881987,
            1925078388,
            2162078206,
            2614888103,
            3248222580,
            3835390401,
            4022224774,
            264347078,
            604807628,
            770255983,
            1249150122,
            1555081692,
            1996064986,
            2554220882,
            2821834349,
            2952996808,
            3210313671,
            3336571891,
            3584528711,
            113926993,
            338241895,
            666307205,
            773529912,
            1294757372,
            1396182291,
            1695183700,
            1986661051,
            2177026350,
            2456956037,
            2730485921,
            2820302411,
            3259730800,
            3345764771,
            3516065817,
            3600352804,
            4094571909,
            275423344,
            430227734,
            506948616,
            659060556,
            883997877,
            958139571,
            1322822218,
            1537002063,
            1747873779,
            1955562222,
            2024104815,
            2227730452,
            2361852424,
            2428436474,
            2756734187,
            3204031479,
            3329325298,
          ])
          let r = 1779033703,
            n = 3144134277,
            i = 1013904242,
            o = 2773480762,
            s = 1359893119,
            a = 2600822924,
            u = 528734635,
            c = 1541459225
          const l = new Uint32Array(64)
          function h(t) {
            let h = 0,
              f = t.length
            for (; f >= 64; ) {
              let d,
                p,
                m,
                g,
                y,
                b = r,
                v = n,
                w = i,
                E = o,
                _ = s,
                k = a,
                A = u,
                S = c
              for (p = 0; p < 16; p++)
                (m = h + 4 * p),
                  (l[p] =
                    ((255 & t[m]) << 24) |
                    ((255 & t[m + 1]) << 16) |
                    ((255 & t[m + 2]) << 8) |
                    (255 & t[m + 3]))
              for (p = 16; p < 64; p++)
                (d = l[p - 2]),
                  (g =
                    ((d >>> 17) | (d << 15)) ^
                    ((d >>> 19) | (d << 13)) ^
                    (d >>> 10)),
                  (d = l[p - 15]),
                  (y =
                    ((d >>> 7) | (d << 25)) ^
                    ((d >>> 18) | (d << 14)) ^
                    (d >>> 3)),
                  (l[p] = (((g + l[p - 7]) | 0) + ((y + l[p - 16]) | 0)) | 0)
              for (p = 0; p < 64; p++)
                (g =
                  ((((((_ >>> 6) | (_ << 26)) ^
                    ((_ >>> 11) | (_ << 21)) ^
                    ((_ >>> 25) | (_ << 7))) +
                    ((_ & k) ^ (~_ & A))) |
                    0) +
                    ((S + ((e[p] + l[p]) | 0)) | 0)) |
                  0),
                  (y =
                    ((((b >>> 2) | (b << 30)) ^
                      ((b >>> 13) | (b << 19)) ^
                      ((b >>> 22) | (b << 10))) +
                      ((b & v) ^ (b & w) ^ (v & w))) |
                    0),
                  (S = A),
                  (A = k),
                  (k = _),
                  (_ = (E + g) | 0),
                  (E = w),
                  (w = v),
                  (v = b),
                  (b = (g + y) | 0)
              ;(r = (r + b) | 0),
                (n = (n + v) | 0),
                (i = (i + w) | 0),
                (o = (o + E) | 0),
                (s = (s + _) | 0),
                (a = (a + k) | 0),
                (u = (u + A) | 0),
                (c = (c + S) | 0),
                (h += 64),
                (f -= 64)
            }
          }
          h(t)
          let f,
            d = t.length % 64,
            p = (t.length / 536870912) | 0,
            m = t.length << 3,
            g = d < 56 ? 56 : 120,
            y = t.slice(t.length - d, t.length)
          for (y.push(128), f = d + 1; f < g; f++) y.push(0)
          return (
            y.push((p >>> 24) & 255),
            y.push((p >>> 16) & 255),
            y.push((p >>> 8) & 255),
            y.push((p >>> 0) & 255),
            y.push((m >>> 24) & 255),
            y.push((m >>> 16) & 255),
            y.push((m >>> 8) & 255),
            y.push((m >>> 0) & 255),
            h(y),
            [
              (r >>> 24) & 255,
              (r >>> 16) & 255,
              (r >>> 8) & 255,
              (r >>> 0) & 255,
              (n >>> 24) & 255,
              (n >>> 16) & 255,
              (n >>> 8) & 255,
              (n >>> 0) & 255,
              (i >>> 24) & 255,
              (i >>> 16) & 255,
              (i >>> 8) & 255,
              (i >>> 0) & 255,
              (o >>> 24) & 255,
              (o >>> 16) & 255,
              (o >>> 8) & 255,
              (o >>> 0) & 255,
              (s >>> 24) & 255,
              (s >>> 16) & 255,
              (s >>> 8) & 255,
              (s >>> 0) & 255,
              (a >>> 24) & 255,
              (a >>> 16) & 255,
              (a >>> 8) & 255,
              (a >>> 0) & 255,
              (u >>> 24) & 255,
              (u >>> 16) & 255,
              (u >>> 8) & 255,
              (u >>> 0) & 255,
              (c >>> 24) & 255,
              (c >>> 16) & 255,
              (c >>> 8) & 255,
              (c >>> 0) & 255,
            ]
          )
        }
        function i(t, e, r) {
          t = t.length <= 64 ? t : n(t)
          const i = 64 + e.length + 4,
            o = new Array(i),
            s = new Array(64)
          let a,
            u = []
          for (a = 0; a < 64; a++) o[a] = 54
          for (a = 0; a < t.length; a++) o[a] ^= t[a]
          for (a = 0; a < e.length; a++) o[64 + a] = e[a]
          for (a = i - 4; a < i; a++) o[a] = 0
          for (a = 0; a < 64; a++) s[a] = 92
          for (a = 0; a < t.length; a++) s[a] ^= t[a]
          function c() {
            for (let t = i - 1; t >= i - 4; t--) {
              if ((o[t]++, o[t] <= 255)) return
              o[t] = 0
            }
          }
          for (; r >= 32; ) c(), (u = u.concat(n(s.concat(n(o))))), (r -= 32)
          return (
            r > 0 && (c(), (u = u.concat(n(s.concat(n(o))).slice(0, r)))), u
          )
        }
        function o(t, e, r, n, i) {
          let o
          for (c(t, 16 * (2 * r - 1), i, 0, 16), o = 0; o < 2 * r; o++)
            u(t, 16 * o, i, 16), a(i, n), c(i, 0, t, e + 16 * o, 16)
          for (o = 0; o < r; o++) c(t, e + 2 * o * 16, t, 16 * o, 16)
          for (o = 0; o < r; o++)
            c(t, e + 16 * (2 * o + 1), t, 16 * (o + r), 16)
        }
        function s(t, e) {
          return (t << e) | (t >>> (32 - e))
        }
        function a(t, e) {
          c(t, 0, e, 0, 16)
          for (let t = 8; t > 0; t -= 2)
            (e[4] ^= s(e[0] + e[12], 7)),
              (e[8] ^= s(e[4] + e[0], 9)),
              (e[12] ^= s(e[8] + e[4], 13)),
              (e[0] ^= s(e[12] + e[8], 18)),
              (e[9] ^= s(e[5] + e[1], 7)),
              (e[13] ^= s(e[9] + e[5], 9)),
              (e[1] ^= s(e[13] + e[9], 13)),
              (e[5] ^= s(e[1] + e[13], 18)),
              (e[14] ^= s(e[10] + e[6], 7)),
              (e[2] ^= s(e[14] + e[10], 9)),
              (e[6] ^= s(e[2] + e[14], 13)),
              (e[10] ^= s(e[6] + e[2], 18)),
              (e[3] ^= s(e[15] + e[11], 7)),
              (e[7] ^= s(e[3] + e[15], 9)),
              (e[11] ^= s(e[7] + e[3], 13)),
              (e[15] ^= s(e[11] + e[7], 18)),
              (e[1] ^= s(e[0] + e[3], 7)),
              (e[2] ^= s(e[1] + e[0], 9)),
              (e[3] ^= s(e[2] + e[1], 13)),
              (e[0] ^= s(e[3] + e[2], 18)),
              (e[6] ^= s(e[5] + e[4], 7)),
              (e[7] ^= s(e[6] + e[5], 9)),
              (e[4] ^= s(e[7] + e[6], 13)),
              (e[5] ^= s(e[4] + e[7], 18)),
              (e[11] ^= s(e[10] + e[9], 7)),
              (e[8] ^= s(e[11] + e[10], 9)),
              (e[9] ^= s(e[8] + e[11], 13)),
              (e[10] ^= s(e[9] + e[8], 18)),
              (e[12] ^= s(e[15] + e[14], 7)),
              (e[13] ^= s(e[12] + e[15], 9)),
              (e[14] ^= s(e[13] + e[12], 13)),
              (e[15] ^= s(e[14] + e[13], 18))
          for (let r = 0; r < 16; ++r) t[r] += e[r]
        }
        function u(t, e, r, n) {
          for (let i = 0; i < n; i++) r[i] ^= t[e + i]
        }
        function c(t, e, r, n, i) {
          for (; i--; ) r[n++] = t[e++]
        }
        function l(t) {
          if (!t || 'number' != typeof t.length) return !1
          for (let e = 0; e < t.length; e++) {
            const r = t[e]
            if ('number' != typeof r || r % 1 || r < 0 || r >= 256) return !1
          }
          return !0
        }
        function h(t, e) {
          if ('number' != typeof t || t % 1) throw new Error('invalid ' + e)
          return t
        }
        function f(t, r, n, s, a, f, d) {
          if (
            ((n = h(n, 'N')),
            (s = h(s, 'r')),
            (a = h(a, 'p')),
            (f = h(f, 'dkLen')),
            0 === n || 0 != (n & (n - 1)))
          )
            throw new Error('N must be power of 2')
          if (n > 2147483647 / 128 / s) throw new Error('N too large')
          if (s > 2147483647 / 128 / a) throw new Error('r too large')
          if (!l(t)) throw new Error('password must be an array or buffer')
          if (((t = Array.prototype.slice.call(t)), !l(r)))
            throw new Error('salt must be an array or buffer')
          r = Array.prototype.slice.call(r)
          let p = i(t, r, 128 * a * s)
          const m = new Uint32Array(32 * a * s)
          for (let t = 0; t < m.length; t++) {
            const e = 4 * t
            m[t] =
              ((255 & p[e + 3]) << 24) |
              ((255 & p[e + 2]) << 16) |
              ((255 & p[e + 1]) << 8) |
              ((255 & p[e + 0]) << 0)
          }
          const g = new Uint32Array(64 * s),
            y = new Uint32Array(32 * s * n),
            b = 32 * s,
            v = new Uint32Array(16),
            w = new Uint32Array(16),
            E = a * n * 2
          let _,
            k,
            A = 0,
            S = null,
            P = !1,
            O = 0,
            N = 0
          const x = d ? parseInt(1e3 / s) : 4294967295,
            M = void 0 !== e ? e : setTimeout,
            T = function() {
              if (P) return d(new Error('cancelled'), A / E)
              let e
              switch (O) {
                case 0:
                  ;(k = 32 * N * s), c(m, k, g, 0, b), (O = 1), (_ = 0)
                case 1:
                  ;(e = n - _), e > x && (e = x)
                  for (let t = 0; t < e; t++)
                    c(g, 0, y, (_ + t) * b, b), o(g, b, s, v, w)
                  if (((_ += e), (A += e), d)) {
                    const t = parseInt((1e3 * A) / E)
                    if (t !== S) {
                      if (((P = d(null, A / E)), P)) break
                      S = t
                    }
                  }
                  if (_ < n) break
                  ;(_ = 0), (O = 2)
                case 2:
                  ;(e = n - _), e > x && (e = x)
                  for (let t = 0; t < e; t++) {
                    const t = g[16 * (2 * s - 1)] & (n - 1)
                    u(y, t * b, g, b), o(g, b, s, v, w)
                  }
                  if (((_ += e), (A += e), d)) {
                    const t = parseInt((1e3 * A) / E)
                    if (t !== S) {
                      if (((P = d(null, A / E)), P)) break
                      S = t
                    }
                  }
                  if (_ < n) break
                  if ((c(g, 0, m, k, b), N++, N < a)) {
                    O = 0
                    break
                  }
                  p = []
                  for (let t = 0; t < m.length; t++)
                    p.push((m[t] >> 0) & 255),
                      p.push((m[t] >> 8) & 255),
                      p.push((m[t] >> 16) & 255),
                      p.push((m[t] >> 24) & 255)
                  const r = i(t, p, f)
                  return d && d(null, 1, r), r
              }
              d && M(T)
            }
          if (!d)
            for (;;) {
              const t = T()
              if (null != t) return t
            }
          T()
        }
        const d = {
          scrypt: function(t, e, r, n, i, o, s) {
            return new Promise(function(a, u) {
              let c = 0
              s && s(0),
                f(t, e, r, n, i, o, function(t, e, r) {
                  if (t) u(t)
                  else if (r) s && 1 !== c && s(1), a(new Uint8Array(r))
                  else if (s && e !== c) return (c = e), s(e)
                })
            })
          },
          syncScrypt: function(t, e, r, n, i, o) {
            return new Uint8Array(f(t, e, r, n, i, o))
          },
        }
        t.exports = d
      })()
    }.call(this, r(36).setImmediate))
  },
  ,
  function(t, e, r) {
    'use strict'
    for (
      var n = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l', i = {}, o = 0;
      o < n.length;
      o++
    ) {
      var s = n.charAt(o)
      if (void 0 !== i[s]) throw new TypeError(s + ' is ambiguous')
      i[s] = o
    }
    function a(t) {
      var e = t >> 25
      return (
        ((33554431 & t) << 5) ^
        (996825010 & -((e >> 0) & 1)) ^
        (642813549 & -((e >> 1) & 1)) ^
        (513874426 & -((e >> 2) & 1)) ^
        (1027748829 & -((e >> 3) & 1)) ^
        (705979059 & -((e >> 4) & 1))
      )
    }
    function u(t) {
      for (var e = 1, r = 0; r < t.length; ++r) {
        var n = t.charCodeAt(r)
        if (n < 33 || n > 126) return 'Invalid prefix (' + t + ')'
        e = a(e) ^ (n >> 5)
      }
      for (e = a(e), r = 0; r < t.length; ++r) {
        var i = t.charCodeAt(r)
        e = a(e) ^ (31 & i)
      }
      return e
    }
    function c(t, e) {
      if (((e = e || 90), t.length < 8)) return t + ' too short'
      if (t.length > e) return 'Exceeds length limit'
      var r = t.toLowerCase(),
        n = t.toUpperCase()
      if (t !== r && t !== n) return 'Mixed-case string ' + t
      var o = (t = r).lastIndexOf('1')
      if (-1 === o) return 'No separator character for ' + t
      if (0 === o) return 'Missing prefix for ' + t
      var s = t.slice(0, o),
        c = t.slice(o + 1)
      if (c.length < 6) return 'Data too short'
      var l = u(s)
      if ('string' == typeof l) return l
      for (var h = [], f = 0; f < c.length; ++f) {
        var d = c.charAt(f),
          p = i[d]
        if (void 0 === p) return 'Unknown character ' + d
        ;(l = a(l) ^ p), f + 6 >= c.length || h.push(p)
      }
      return 1 !== l ? 'Invalid checksum for ' + t : { prefix: s, words: h }
    }
    function l(t, e, r, n) {
      for (var i = 0, o = 0, s = (1 << r) - 1, a = [], u = 0; u < t.length; ++u)
        for (i = (i << e) | t[u], o += e; o >= r; )
          (o -= r), a.push((i >> o) & s)
      if (n) o > 0 && a.push((i << (r - o)) & s)
      else {
        if (o >= e) return 'Excess padding'
        if ((i << (r - o)) & s) return 'Non-zero padding'
      }
      return a
    }
    t.exports = {
      decodeUnsafe: function() {
        var t = c.apply(null, arguments)
        if ('object' == typeof t) return t
      },
      decode: function(t) {
        var e = c.apply(null, arguments)
        if ('object' == typeof e) return e
        throw new Error(e)
      },
      encode: function(t, e, r) {
        if (((r = r || 90), t.length + 7 + e.length > r))
          throw new TypeError('Exceeds length limit')
        var i = u((t = t.toLowerCase()))
        if ('string' == typeof i) throw new Error(i)
        for (var o = t + '1', s = 0; s < e.length; ++s) {
          var c = e[s]
          if (c >> 5 != 0) throw new Error('Non 5-bit word')
          ;(i = a(i) ^ c), (o += n.charAt(c))
        }
        for (s = 0; s < 6; ++s) i = a(i)
        for (i ^= 1, s = 0; s < 6; ++s) {
          o += n.charAt((i >> (5 * (5 - s))) & 31)
        }
        return o
      },
      toWordsUnsafe: function(t) {
        var e = l(t, 8, 5, !0)
        if (Array.isArray(e)) return e
      },
      toWords: function(t) {
        var e = l(t, 8, 5, !0)
        if (Array.isArray(e)) return e
        throw new Error(e)
      },
      fromWordsUnsafe: function(t) {
        var e = l(t, 5, 8, !1)
        if (Array.isArray(e)) return e
      },
      fromWords: function(t) {
        var e = l(t, 5, 8, !1)
        if (Array.isArray(e)) return e
        throw new Error(e)
      },
    }
  },
  ,
  function(t, e, r) {
    'use strict'
    var n = r(7).rotr32
    function i(t, e, r) {
      return (t & e) ^ (~t & r)
    }
    function o(t, e, r) {
      return (t & e) ^ (t & r) ^ (e & r)
    }
    function s(t, e, r) {
      return t ^ e ^ r
    }
    ;(e.ft_1 = function(t, e, r, n) {
      return 0 === t
        ? i(e, r, n)
        : 1 === t || 3 === t
        ? s(e, r, n)
        : 2 === t
        ? o(e, r, n)
        : void 0
    }),
      (e.ch32 = i),
      (e.maj32 = o),
      (e.p32 = s),
      (e.s0_256 = function(t) {
        return n(t, 2) ^ n(t, 13) ^ n(t, 22)
      }),
      (e.s1_256 = function(t) {
        return n(t, 6) ^ n(t, 11) ^ n(t, 25)
      }),
      (e.g0_256 = function(t) {
        return n(t, 7) ^ n(t, 18) ^ (t >>> 3)
      }),
      (e.g1_256 = function(t) {
        return n(t, 17) ^ n(t, 19) ^ (t >>> 10)
      })
  },
  function(t, e, r) {
    'use strict'
    var n = r(7),
      i = r(12),
      o = r(17),
      s = r(11),
      a = n.sum32,
      u = n.sum32_4,
      c = n.sum32_5,
      l = o.ch32,
      h = o.maj32,
      f = o.s0_256,
      d = o.s1_256,
      p = o.g0_256,
      m = o.g1_256,
      g = i.BlockHash,
      y = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298,
      ]
    function b() {
      if (!(this instanceof b)) return new b()
      g.call(this),
        (this.h = [
          1779033703,
          3144134277,
          1013904242,
          2773480762,
          1359893119,
          2600822924,
          528734635,
          1541459225,
        ]),
        (this.k = y),
        (this.W = new Array(64))
    }
    n.inherits(b, g),
      (t.exports = b),
      (b.blockSize = 512),
      (b.outSize = 256),
      (b.hmacStrength = 192),
      (b.padLength = 64),
      (b.prototype._update = function(t, e) {
        for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n]
        for (; n < r.length; n++)
          r[n] = u(m(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16])
        var i = this.h[0],
          o = this.h[1],
          g = this.h[2],
          y = this.h[3],
          b = this.h[4],
          v = this.h[5],
          w = this.h[6],
          E = this.h[7]
        for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
          var _ = c(E, d(b), l(b, v, w), this.k[n], r[n]),
            k = a(f(i), h(i, o, g))
          ;(E = w),
            (w = v),
            (v = b),
            (b = a(y, _)),
            (y = g),
            (g = o),
            (o = i),
            (i = a(_, k))
        }
        ;(this.h[0] = a(this.h[0], i)),
          (this.h[1] = a(this.h[1], o)),
          (this.h[2] = a(this.h[2], g)),
          (this.h[3] = a(this.h[3], y)),
          (this.h[4] = a(this.h[4], b)),
          (this.h[5] = a(this.h[5], v)),
          (this.h[6] = a(this.h[6], w)),
          (this.h[7] = a(this.h[7], E))
      }),
      (b.prototype._digest = function(t) {
        return 'hex' === t ? n.toHex32(this.h, 'big') : n.split32(this.h, 'big')
      })
  },
  function(t, e, r) {
    'use strict'
    var n = r(7),
      i = r(12),
      o = r(11),
      s = n.rotr64_hi,
      a = n.rotr64_lo,
      u = n.shr64_hi,
      c = n.shr64_lo,
      l = n.sum64,
      h = n.sum64_hi,
      f = n.sum64_lo,
      d = n.sum64_4_hi,
      p = n.sum64_4_lo,
      m = n.sum64_5_hi,
      g = n.sum64_5_lo,
      y = i.BlockHash,
      b = [
        1116352408,
        3609767458,
        1899447441,
        602891725,
        3049323471,
        3964484399,
        3921009573,
        2173295548,
        961987163,
        4081628472,
        1508970993,
        3053834265,
        2453635748,
        2937671579,
        2870763221,
        3664609560,
        3624381080,
        2734883394,
        310598401,
        1164996542,
        607225278,
        1323610764,
        1426881987,
        3590304994,
        1925078388,
        4068182383,
        2162078206,
        991336113,
        2614888103,
        633803317,
        3248222580,
        3479774868,
        3835390401,
        2666613458,
        4022224774,
        944711139,
        264347078,
        2341262773,
        604807628,
        2007800933,
        770255983,
        1495990901,
        1249150122,
        1856431235,
        1555081692,
        3175218132,
        1996064986,
        2198950837,
        2554220882,
        3999719339,
        2821834349,
        766784016,
        2952996808,
        2566594879,
        3210313671,
        3203337956,
        3336571891,
        1034457026,
        3584528711,
        2466948901,
        113926993,
        3758326383,
        338241895,
        168717936,
        666307205,
        1188179964,
        773529912,
        1546045734,
        1294757372,
        1522805485,
        1396182291,
        2643833823,
        1695183700,
        2343527390,
        1986661051,
        1014477480,
        2177026350,
        1206759142,
        2456956037,
        344077627,
        2730485921,
        1290863460,
        2820302411,
        3158454273,
        3259730800,
        3505952657,
        3345764771,
        106217008,
        3516065817,
        3606008344,
        3600352804,
        1432725776,
        4094571909,
        1467031594,
        275423344,
        851169720,
        430227734,
        3100823752,
        506948616,
        1363258195,
        659060556,
        3750685593,
        883997877,
        3785050280,
        958139571,
        3318307427,
        1322822218,
        3812723403,
        1537002063,
        2003034995,
        1747873779,
        3602036899,
        1955562222,
        1575990012,
        2024104815,
        1125592928,
        2227730452,
        2716904306,
        2361852424,
        442776044,
        2428436474,
        593698344,
        2756734187,
        3733110249,
        3204031479,
        2999351573,
        3329325298,
        3815920427,
        3391569614,
        3928383900,
        3515267271,
        566280711,
        3940187606,
        3454069534,
        4118630271,
        4000239992,
        116418474,
        1914138554,
        174292421,
        2731055270,
        289380356,
        3203993006,
        460393269,
        320620315,
        685471733,
        587496836,
        852142971,
        1086792851,
        1017036298,
        365543100,
        1126000580,
        2618297676,
        1288033470,
        3409855158,
        1501505948,
        4234509866,
        1607167915,
        987167468,
        1816402316,
        1246189591,
      ]
    function v() {
      if (!(this instanceof v)) return new v()
      y.call(this),
        (this.h = [
          1779033703,
          4089235720,
          3144134277,
          2227873595,
          1013904242,
          4271175723,
          2773480762,
          1595750129,
          1359893119,
          2917565137,
          2600822924,
          725511199,
          528734635,
          4215389547,
          1541459225,
          327033209,
        ]),
        (this.k = b),
        (this.W = new Array(160))
    }
    function w(t, e, r, n, i) {
      var o = (t & r) ^ (~t & i)
      return o < 0 && (o += 4294967296), o
    }
    function E(t, e, r, n, i, o) {
      var s = (e & n) ^ (~e & o)
      return s < 0 && (s += 4294967296), s
    }
    function _(t, e, r, n, i) {
      var o = (t & r) ^ (t & i) ^ (r & i)
      return o < 0 && (o += 4294967296), o
    }
    function k(t, e, r, n, i, o) {
      var s = (e & n) ^ (e & o) ^ (n & o)
      return s < 0 && (s += 4294967296), s
    }
    function A(t, e) {
      var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7)
      return r < 0 && (r += 4294967296), r
    }
    function S(t, e) {
      var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7)
      return r < 0 && (r += 4294967296), r
    }
    function P(t, e) {
      var r = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9)
      return r < 0 && (r += 4294967296), r
    }
    function O(t, e) {
      var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9)
      return r < 0 && (r += 4294967296), r
    }
    function N(t, e) {
      var r = s(t, e, 1) ^ s(t, e, 8) ^ u(t, e, 7)
      return r < 0 && (r += 4294967296), r
    }
    function x(t, e) {
      var r = a(t, e, 1) ^ a(t, e, 8) ^ c(t, e, 7)
      return r < 0 && (r += 4294967296), r
    }
    function M(t, e) {
      var r = s(t, e, 19) ^ s(e, t, 29) ^ u(t, e, 6)
      return r < 0 && (r += 4294967296), r
    }
    function T(t, e) {
      var r = a(t, e, 19) ^ a(e, t, 29) ^ c(t, e, 6)
      return r < 0 && (r += 4294967296), r
    }
    n.inherits(v, y),
      (t.exports = v),
      (v.blockSize = 1024),
      (v.outSize = 512),
      (v.hmacStrength = 192),
      (v.padLength = 128),
      (v.prototype._prepareBlock = function(t, e) {
        for (var r = this.W, n = 0; n < 32; n++) r[n] = t[e + n]
        for (; n < r.length; n += 2) {
          var i = M(r[n - 4], r[n - 3]),
            o = T(r[n - 4], r[n - 3]),
            s = r[n - 14],
            a = r[n - 13],
            u = N(r[n - 30], r[n - 29]),
            c = x(r[n - 30], r[n - 29]),
            l = r[n - 32],
            h = r[n - 31]
          ;(r[n] = d(i, o, s, a, u, c, l, h)),
            (r[n + 1] = p(i, o, s, a, u, c, l, h))
        }
      }),
      (v.prototype._update = function(t, e) {
        this._prepareBlock(t, e)
        var r = this.W,
          n = this.h[0],
          i = this.h[1],
          s = this.h[2],
          a = this.h[3],
          u = this.h[4],
          c = this.h[5],
          d = this.h[6],
          p = this.h[7],
          y = this.h[8],
          b = this.h[9],
          v = this.h[10],
          N = this.h[11],
          x = this.h[12],
          M = this.h[13],
          T = this.h[14],
          I = this.h[15]
        o(this.k.length === r.length)
        for (var R = 0; R < r.length; R += 2) {
          var C = T,
            j = I,
            B = P(y, b),
            F = O(y, b),
            L = w(y, b, v, N, x),
            U = E(y, b, v, N, x, M),
            D = this.k[R],
            z = this.k[R + 1],
            G = r[R],
            K = r[R + 1],
            q = m(C, j, B, F, L, U, D, z, G, K),
            H = g(C, j, B, F, L, U, D, z, G, K)
          ;(C = A(n, i)),
            (j = S(n, i)),
            (B = _(n, i, s, a, u)),
            (F = k(n, i, s, a, u, c))
          var V = h(C, j, B, F),
            W = f(C, j, B, F)
          ;(T = x),
            (I = M),
            (x = v),
            (M = N),
            (v = y),
            (N = b),
            (y = h(d, p, q, H)),
            (b = f(p, p, q, H)),
            (d = u),
            (p = c),
            (u = s),
            (c = a),
            (s = n),
            (a = i),
            (n = h(q, H, V, W)),
            (i = f(q, H, V, W))
        }
        l(this.h, 0, n, i),
          l(this.h, 2, s, a),
          l(this.h, 4, u, c),
          l(this.h, 6, d, p),
          l(this.h, 8, y, b),
          l(this.h, 10, v, N),
          l(this.h, 12, x, M),
          l(this.h, 14, T, I)
      }),
      (v.prototype._digest = function(t) {
        return 'hex' === t ? n.toHex32(this.h, 'big') : n.split32(this.h, 'big')
      })
  },
  function(t, e) {
    var r,
      n,
      i = (t.exports = {})
    function o() {
      throw new Error('setTimeout has not been defined')
    }
    function s() {
      throw new Error('clearTimeout has not been defined')
    }
    function a(t) {
      if (r === setTimeout) return setTimeout(t, 0)
      if ((r === o || !r) && setTimeout)
        return (r = setTimeout), setTimeout(t, 0)
      try {
        return r(t, 0)
      } catch (e) {
        try {
          return r.call(null, t, 0)
        } catch (e) {
          return r.call(this, t, 0)
        }
      }
    }
    !(function() {
      try {
        r = 'function' == typeof setTimeout ? setTimeout : o
      } catch (t) {
        r = o
      }
      try {
        n = 'function' == typeof clearTimeout ? clearTimeout : s
      } catch (t) {
        n = s
      }
    })()
    var u,
      c = [],
      l = !1,
      h = -1
    function f() {
      l &&
        u &&
        ((l = !1), u.length ? (c = u.concat(c)) : (h = -1), c.length && d())
    }
    function d() {
      if (!l) {
        var t = a(f)
        l = !0
        for (var e = c.length; e; ) {
          for (u = c, c = []; ++h < e; ) u && u[h].run()
          ;(h = -1), (e = c.length)
        }
        ;(u = null),
          (l = !1),
          (function(t) {
            if (n === clearTimeout) return clearTimeout(t)
            if ((n === s || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(t)
            try {
              n(t)
            } catch (e) {
              try {
                return n.call(null, t)
              } catch (e) {
                return n.call(this, t)
              }
            }
          })(t)
      }
    }
    function p(t, e) {
      ;(this.fun = t), (this.array = e)
    }
    function m() {}
    ;(i.nextTick = function(t) {
      var e = new Array(arguments.length - 1)
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r]
      c.push(new p(t, e)), 1 !== c.length || l || a(d)
    }),
      (p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }),
      (i.title = 'browser'),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ''),
      (i.versions = {}),
      (i.on = m),
      (i.addListener = m),
      (i.once = m),
      (i.off = m),
      (i.removeListener = m),
      (i.removeAllListeners = m),
      (i.emit = m),
      (i.prependListener = m),
      (i.prependOnceListener = m),
      (i.listeners = function(t) {
        return []
      }),
      (i.binding = function(t) {
        throw new Error('process.binding is not supported')
      }),
      (i.cwd = function() {
        return '/'
      }),
      (i.chdir = function(t) {
        throw new Error('process.chdir is not supported')
      }),
      (i.umask = function() {
        return 0
      })
  },
  function(t, e, r) {
    'use strict'
    ;(function(t) {
      r.d(e, 'a', function() {
        return G
      })
      var n = r(2),
        i = r.n(n),
        o = r(4),
        s = r.n(o)
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : void 0 !== t || ('undefined' != typeof self && self)
      function a(t, e, r) {
        return (
          t(
            (r = {
              path: e,
              exports: {},
              require: function(t, e) {
                return (function() {
                  throw new Error(
                    'Dynamic requires are not currently supported by @rollup/plugin-commonjs',
                  )
                })(null == e && r.path)
              },
            }),
            r.exports,
          ),
          r.exports
        )
      }
      var u = c
      function c(t, e) {
        if (!t) throw new Error(e || 'Assertion failed')
      }
      c.equal = function(t, e, r) {
        if (t != e) throw new Error(r || 'Assertion failed: ' + t + ' != ' + e)
      }
      var l = a(function(t, e) {
          var r = e
          function n(t) {
            return 1 === t.length ? '0' + t : t
          }
          function i(t) {
            for (var e = '', r = 0; r < t.length; r++) e += n(t[r].toString(16))
            return e
          }
          ;(r.toArray = function(t, e) {
            if (Array.isArray(t)) return t.slice()
            if (!t) return []
            var r = []
            if ('string' != typeof t) {
              for (var n = 0; n < t.length; n++) r[n] = 0 | t[n]
              return r
            }
            if ('hex' === e) {
              ;(t = t.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 &&
                (t = '0' + t)
              for (n = 0; n < t.length; n += 2)
                r.push(parseInt(t[n] + t[n + 1], 16))
            } else
              for (n = 0; n < t.length; n++) {
                var i = t.charCodeAt(n),
                  o = i >> 8,
                  s = 255 & i
                o ? r.push(o, s) : r.push(s)
              }
            return r
          }),
            (r.zero2 = n),
            (r.toHex = i),
            (r.encode = function(t, e) {
              return 'hex' === e ? i(t) : t
            })
        }),
        h = a(function(t, e) {
          var r = e
          ;(r.assert = u),
            (r.toArray = l.toArray),
            (r.zero2 = l.zero2),
            (r.toHex = l.toHex),
            (r.encode = l.encode),
            (r.getNAF = function(t, e, r) {
              var n = new Array(Math.max(t.bitLength(), r) + 1)
              n.fill(0)
              for (
                var i = 1 << (e + 1), o = t.clone(), s = 0;
                s < n.length;
                s++
              ) {
                var a,
                  u = o.andln(i - 1)
                o.isOdd()
                  ? ((a = u > (i >> 1) - 1 ? (i >> 1) - u : u), o.isubn(a))
                  : (a = 0),
                  (n[s] = a),
                  o.iushrn(1)
              }
              return n
            }),
            (r.getJSF = function(t, e) {
              var r = [[], []]
              ;(t = t.clone()), (e = e.clone())
              for (var n, i = 0, o = 0; t.cmpn(-i) > 0 || e.cmpn(-o) > 0; ) {
                var s,
                  a,
                  u = (t.andln(3) + i) & 3,
                  c = (e.andln(3) + o) & 3
                3 === u && (u = -1),
                  3 === c && (c = -1),
                  (s =
                    0 == (1 & u)
                      ? 0
                      : (3 !== (n = (t.andln(7) + i) & 7) && 5 !== n) || 2 !== c
                      ? u
                      : -u),
                  r[0].push(s),
                  (a =
                    0 == (1 & c)
                      ? 0
                      : (3 !== (n = (e.andln(7) + o) & 7) && 5 !== n) || 2 !== u
                      ? c
                      : -c),
                  r[1].push(a),
                  2 * i === s + 1 && (i = 1 - i),
                  2 * o === a + 1 && (o = 1 - o),
                  t.iushrn(1),
                  e.iushrn(1)
              }
              return r
            }),
            (r.cachedProperty = function(t, e, r) {
              var n = '_' + e
              t.prototype[e] = function() {
                return void 0 !== this[n] ? this[n] : (this[n] = r.call(this))
              }
            }),
            (r.parseBytes = function(t) {
              return 'string' == typeof t ? r.toArray(t, 'hex') : t
            }),
            (r.intFromLE = function(t) {
              return new i.a(t, 'hex', 'le')
            })
        }),
        f = h.getNAF,
        d = h.getJSF,
        p = h.assert
      function m(t, e) {
        ;(this.type = t),
          (this.p = new i.a(e.p, 16)),
          (this.red = e.prime ? i.a.red(e.prime) : i.a.mont(this.p)),
          (this.zero = new i.a(0).toRed(this.red)),
          (this.one = new i.a(1).toRed(this.red)),
          (this.two = new i.a(2).toRed(this.red)),
          (this.n = e.n && new i.a(e.n, 16)),
          (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4)),
          (this._bitLength = this.n ? this.n.bitLength() : 0)
        var r = this.n && this.p.div(this.n)
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)))
      }
      var g = m
      function y(t, e) {
        ;(this.curve = t), (this.type = e), (this.precomputed = null)
      }
      ;(m.prototype.point = function() {
        throw new Error('Not implemented')
      }),
        (m.prototype.validate = function() {
          throw new Error('Not implemented')
        }),
        (m.prototype._fixedNafMul = function(t, e) {
          p(t.precomputed)
          var r = t._getDoubles(),
            n = f(e, 1, this._bitLength),
            i = (1 << (r.step + 1)) - (r.step % 2 == 0 ? 2 : 1)
          i /= 3
          var o,
            s,
            a = []
          for (o = 0; o < n.length; o += r.step) {
            s = 0
            for (var u = o + r.step - 1; u >= o; u--) s = (s << 1) + n[u]
            a.push(s)
          }
          for (
            var c = this.jpoint(null, null, null),
              l = this.jpoint(null, null, null),
              h = i;
            h > 0;
            h--
          ) {
            for (o = 0; o < a.length; o++)
              (s = a[o]) === h
                ? (l = l.mixedAdd(r.points[o]))
                : s === -h && (l = l.mixedAdd(r.points[o].neg()))
            c = c.add(l)
          }
          return c.toP()
        }),
        (m.prototype._wnafMul = function(t, e) {
          var r = 4,
            n = t._getNAFPoints(r)
          r = n.wnd
          for (
            var i = n.points,
              o = f(e, r, this._bitLength),
              s = this.jpoint(null, null, null),
              a = o.length - 1;
            a >= 0;
            a--
          ) {
            for (var u = 0; a >= 0 && 0 === o[a]; a--) u++
            if ((a >= 0 && u++, (s = s.dblp(u)), a < 0)) break
            var c = o[a]
            p(0 !== c),
              (s =
                'affine' === t.type
                  ? c > 0
                    ? s.mixedAdd(i[(c - 1) >> 1])
                    : s.mixedAdd(i[(-c - 1) >> 1].neg())
                  : c > 0
                  ? s.add(i[(c - 1) >> 1])
                  : s.add(i[(-c - 1) >> 1].neg()))
          }
          return 'affine' === t.type ? s.toP() : s
        }),
        (m.prototype._wnafMulAdd = function(t, e, r, n, i) {
          var o,
            s,
            a,
            u = this._wnafT1,
            c = this._wnafT2,
            l = this._wnafT3,
            h = 0
          for (o = 0; o < n; o++) {
            var p = (a = e[o])._getNAFPoints(t)
            ;(u[o] = p.wnd), (c[o] = p.points)
          }
          for (o = n - 1; o >= 1; o -= 2) {
            var m = o - 1,
              g = o
            if (1 === u[m] && 1 === u[g]) {
              var y = [e[m], null, null, e[g]]
              0 === e[m].y.cmp(e[g].y)
                ? ((y[1] = e[m].add(e[g])),
                  (y[2] = e[m].toJ().mixedAdd(e[g].neg())))
                : 0 === e[m].y.cmp(e[g].y.redNeg())
                ? ((y[1] = e[m].toJ().mixedAdd(e[g])),
                  (y[2] = e[m].add(e[g].neg())))
                : ((y[1] = e[m].toJ().mixedAdd(e[g])),
                  (y[2] = e[m].toJ().mixedAdd(e[g].neg())))
              var b = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                v = d(r[m], r[g])
              for (
                h = Math.max(v[0].length, h),
                  l[m] = new Array(h),
                  l[g] = new Array(h),
                  s = 0;
                s < h;
                s++
              ) {
                var w = 0 | v[0][s],
                  E = 0 | v[1][s]
                ;(l[m][s] = b[3 * (w + 1) + (E + 1)]), (l[g][s] = 0), (c[m] = y)
              }
            } else
              (l[m] = f(r[m], u[m], this._bitLength)),
                (l[g] = f(r[g], u[g], this._bitLength)),
                (h = Math.max(l[m].length, h)),
                (h = Math.max(l[g].length, h))
          }
          var _ = this.jpoint(null, null, null),
            k = this._wnafT4
          for (o = h; o >= 0; o--) {
            for (var A = 0; o >= 0; ) {
              var S = !0
              for (s = 0; s < n; s++)
                (k[s] = 0 | l[s][o]), 0 !== k[s] && (S = !1)
              if (!S) break
              A++, o--
            }
            if ((o >= 0 && A++, (_ = _.dblp(A)), o < 0)) break
            for (s = 0; s < n; s++) {
              var P = k[s]
              0 !== P &&
                (P > 0
                  ? (a = c[s][(P - 1) >> 1])
                  : P < 0 && (a = c[s][(-P - 1) >> 1].neg()),
                (_ = 'affine' === a.type ? _.mixedAdd(a) : _.add(a)))
            }
          }
          for (o = 0; o < n; o++) c[o] = null
          return i ? _ : _.toP()
        }),
        (m.BasePoint = y),
        (y.prototype.eq = function() {
          throw new Error('Not implemented')
        }),
        (y.prototype.validate = function() {
          return this.curve.validate(this)
        }),
        (m.prototype.decodePoint = function(t, e) {
          t = h.toArray(t, e)
          var r = this.p.byteLength()
          if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r)
            return (
              6 === t[0]
                ? p(t[t.length - 1] % 2 == 0)
                : 7 === t[0] && p(t[t.length - 1] % 2 == 1),
              this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r))
            )
          if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r)
            return this.pointFromX(t.slice(1, 1 + r), 3 === t[0])
          throw new Error('Unknown point format')
        }),
        (y.prototype.encodeCompressed = function(t) {
          return this.encode(t, !0)
        }),
        (y.prototype._encode = function(t) {
          var e = this.curve.p.byteLength(),
            r = this.getX().toArray('be', e)
          return t
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray('be', e))
        }),
        (y.prototype.encode = function(t, e) {
          return h.encode(this._encode(e), t)
        }),
        (y.prototype.precompute = function(t) {
          if (this.precomputed) return this
          var e = { doubles: null, naf: null, beta: null }
          return (
            (e.naf = this._getNAFPoints(8)),
            (e.doubles = this._getDoubles(4, t)),
            (e.beta = this._getBeta()),
            (this.precomputed = e),
            this
          )
        }),
        (y.prototype._hasDoubles = function(t) {
          if (!this.precomputed) return !1
          var e = this.precomputed.doubles
          return (
            !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
          )
        }),
        (y.prototype._getDoubles = function(t, e) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles
          for (var r = [this], n = this, i = 0; i < e; i += t) {
            for (var o = 0; o < t; o++) n = n.dbl()
            r.push(n)
          }
          return { step: t, points: r }
        }),
        (y.prototype._getNAFPoints = function(t) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf
          for (
            var e = [this],
              r = (1 << t) - 1,
              n = 1 === r ? null : this.dbl(),
              i = 1;
            i < r;
            i++
          )
            e[i] = e[i - 1].add(n)
          return { wnd: t, points: e }
        }),
        (y.prototype._getBeta = function() {
          return null
        }),
        (y.prototype.dblp = function(t) {
          for (var e = this, r = 0; r < t; r++) e = e.dbl()
          return e
        })
      var b = a(function(t) {
          'function' == typeof Object.create
            ? (t.exports = function(t, e) {
                e &&
                  ((t.super_ = e),
                  (t.prototype = Object.create(e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })))
              })
            : (t.exports = function(t, e) {
                if (e) {
                  t.super_ = e
                  var r = function() {}
                  ;(r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.prototype.constructor = t)
                }
              })
        }),
        v = h.assert
      function w(t) {
        g.call(this, 'short', t),
          (this.a = new i.a(t.a, 16).toRed(this.red)),
          (this.b = new i.a(t.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA =
            0 ===
            this.a
              .fromRed()
              .sub(this.p)
              .cmpn(-3)),
          (this.endo = this._getEndomorphism(t)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4))
      }
      b(w, g)
      var E = w
      function _(t, e, r, n) {
        g.BasePoint.call(this, t, 'affine'),
          null === e && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new i.a(e, 16)),
              (this.y = new i.a(r, 16)),
              n &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1))
      }
      function k(t, e, r, n) {
        g.BasePoint.call(this, t, 'jacobian'),
          null === e && null === r && null === n
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new i.a(0)))
            : ((this.x = new i.a(e, 16)),
              (this.y = new i.a(r, 16)),
              (this.z = new i.a(n, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one)
      }
      ;(w.prototype._getEndomorphism = function(t) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
          var e, r
          if (t.beta) e = new i.a(t.beta, 16).toRed(this.red)
          else {
            var n = this._getEndoRoots(this.p)
            e = (e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
          }
          if (t.lambda) r = new i.a(t.lambda, 16)
          else {
            var o = this._getEndoRoots(this.n)
            0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e))
              ? (r = o[0])
              : ((r = o[1]), v(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
          }
          return {
            beta: e,
            lambda: r,
            basis: t.basis
              ? t.basis.map(function(t) {
                  return { a: new i.a(t.a, 16), b: new i.a(t.b, 16) }
                })
              : this._getEndoBasis(r),
          }
        }
      }),
        (w.prototype._getEndoRoots = function(t) {
          var e = t === this.p ? this.red : i.a.mont(t),
            r = new i.a(2).toRed(e).redInvm(),
            n = r.redNeg(),
            o = new i.a(3)
              .toRed(e)
              .redNeg()
              .redSqrt()
              .redMul(r)
          return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()]
        }),
        (w.prototype._getEndoBasis = function(t) {
          for (
            var e,
              r,
              n,
              o,
              s,
              a,
              u,
              c,
              l,
              h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              f = t,
              d = this.n.clone(),
              p = new i.a(1),
              m = new i.a(0),
              g = new i.a(0),
              y = new i.a(1),
              b = 0;
            0 !== f.cmpn(0);

          ) {
            var v = d.div(f)
            ;(c = d.sub(v.mul(f))), (l = g.sub(v.mul(p)))
            var w = y.sub(v.mul(m))
            if (!n && c.cmp(h) < 0)
              (e = u.neg()), (r = p), (n = c.neg()), (o = l)
            else if (n && 2 == ++b) break
            ;(u = c), (d = f), (f = c), (g = p), (p = l), (y = m), (m = w)
          }
          ;(s = c.neg()), (a = l)
          var E = n.sqr().add(o.sqr())
          return (
            s
              .sqr()
              .add(a.sqr())
              .cmp(E) >= 0 && ((s = e), (a = r)),
            n.negative && ((n = n.neg()), (o = o.neg())),
            s.negative && ((s = s.neg()), (a = a.neg())),
            [{ a: n, b: o }, { a: s, b: a }]
          )
        }),
        (w.prototype._endoSplit = function(t) {
          var e = this.endo.basis,
            r = e[0],
            n = e[1],
            i = n.b.mul(t).divRound(this.n),
            o = r.b
              .neg()
              .mul(t)
              .divRound(this.n),
            s = i.mul(r.a),
            a = o.mul(n.a),
            u = i.mul(r.b),
            c = o.mul(n.b)
          return { k1: t.sub(s).sub(a), k2: u.add(c).neg() }
        }),
        (w.prototype.pointFromX = function(t, e) {
          ;(t = new i.a(t, 16)).red || (t = t.toRed(this.red))
          var r = t
              .redSqr()
              .redMul(t)
              .redIAdd(t.redMul(this.a))
              .redIAdd(this.b),
            n = r.redSqrt()
          if (
            0 !==
            n
              .redSqr()
              .redSub(r)
              .cmp(this.zero)
          )
            throw new Error('invalid point')
          var o = n.fromRed().isOdd()
          return ((e && !o) || (!e && o)) && (n = n.redNeg()), this.point(t, n)
        }),
        (w.prototype.validate = function(t) {
          if (t.inf) return !0
          var e = t.x,
            r = t.y,
            n = this.a.redMul(e),
            i = e
              .redSqr()
              .redMul(e)
              .redIAdd(n)
              .redIAdd(this.b)
          return (
            0 ===
            r
              .redSqr()
              .redISub(i)
              .cmpn(0)
          )
        }),
        (w.prototype._endoWnafMulAdd = function(t, e, r) {
          for (
            var n = this._endoWnafT1, i = this._endoWnafT2, o = 0;
            o < t.length;
            o++
          ) {
            var s = this._endoSplit(e[o]),
              a = t[o],
              u = a._getBeta()
            s.k1.negative && (s.k1.ineg(), (a = a.neg(!0))),
              s.k2.negative && (s.k2.ineg(), (u = u.neg(!0))),
              (n[2 * o] = a),
              (n[2 * o + 1] = u),
              (i[2 * o] = s.k1),
              (i[2 * o + 1] = s.k2)
          }
          for (
            var c = this._wnafMulAdd(1, n, i, 2 * o, r), l = 0;
            l < 2 * o;
            l++
          )
            (n[l] = null), (i[l] = null)
          return c
        }),
        b(_, g.BasePoint),
        (w.prototype.point = function(t, e, r) {
          return new _(this, t, e, r)
        }),
        (w.prototype.pointFromJSON = function(t, e) {
          return _.fromJSON(this, t, e)
        }),
        (_.prototype._getBeta = function() {
          if (this.curve.endo) {
            var t = this.precomputed
            if (t && t.beta) return t.beta
            var e = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y,
            )
            if (t) {
              var r = this.curve,
                n = function(t) {
                  return r.point(t.x.redMul(r.endo.beta), t.y)
                }
              ;(t.beta = e),
                (e.precomputed = {
                  beta: null,
                  naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n) },
                  doubles: t.doubles && {
                    step: t.doubles.step,
                    points: t.doubles.points.map(n),
                  },
                })
            }
            return e
          }
        }),
        (_.prototype.toJSON = function() {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y]
        }),
        (_.fromJSON = function(t, e, r) {
          'string' == typeof e && (e = JSON.parse(e))
          var n = t.point(e[0], e[1], r)
          if (!e[2]) return n
          function i(e) {
            return t.point(e[0], e[1], r)
          }
          var o = e[2]
          return (
            (n.precomputed = {
              beta: null,
              doubles: o.doubles && {
                step: o.doubles.step,
                points: [n].concat(o.doubles.points.map(i)),
              },
              naf: o.naf && {
                wnd: o.naf.wnd,
                points: [n].concat(o.naf.points.map(i)),
              },
            }),
            n
          )
        }),
        (_.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC Point Infinity>'
            : '<EC Point x: ' +
                this.x.fromRed().toString(16, 2) +
                ' y: ' +
                this.y.fromRed().toString(16, 2) +
                '>'
        }),
        (_.prototype.isInfinity = function() {
          return this.inf
        }),
        (_.prototype.add = function(t) {
          if (this.inf) return t
          if (t.inf) return this
          if (this.eq(t)) return this.dbl()
          if (this.neg().eq(t)) return this.curve.point(null, null)
          if (0 === this.x.cmp(t.x)) return this.curve.point(null, null)
          var e = this.y.redSub(t.y)
          0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()))
          var r = e
              .redSqr()
              .redISub(this.x)
              .redISub(t.x),
            n = e.redMul(this.x.redSub(r)).redISub(this.y)
          return this.curve.point(r, n)
        }),
        (_.prototype.dbl = function() {
          if (this.inf) return this
          var t = this.y.redAdd(this.y)
          if (0 === t.cmpn(0)) return this.curve.point(null, null)
          var e = this.curve.a,
            r = this.x.redSqr(),
            n = t.redInvm(),
            i = r
              .redAdd(r)
              .redIAdd(r)
              .redIAdd(e)
              .redMul(n),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            s = i.redMul(this.x.redSub(o)).redISub(this.y)
          return this.curve.point(o, s)
        }),
        (_.prototype.getX = function() {
          return this.x.fromRed()
        }),
        (_.prototype.getY = function() {
          return this.y.fromRed()
        }),
        (_.prototype.mul = function(t) {
          return (
            (t = new i.a(t, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(t)
              ? this.curve._fixedNafMul(this, t)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [t])
              : this.curve._wnafMul(this, t)
          )
        }),
        (_.prototype.mulAdd = function(t, e, r) {
          var n = [this, e],
            i = [t, r]
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i)
            : this.curve._wnafMulAdd(1, n, i, 2)
        }),
        (_.prototype.jmulAdd = function(t, e, r) {
          var n = [this, e],
            i = [t, r]
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i, !0)
            : this.curve._wnafMulAdd(1, n, i, 2, !0)
        }),
        (_.prototype.eq = function(t) {
          return (
            this === t ||
            (this.inf === t.inf &&
              (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))))
          )
        }),
        (_.prototype.neg = function(t) {
          if (this.inf) return this
          var e = this.curve.point(this.x, this.y.redNeg())
          if (t && this.precomputed) {
            var r = this.precomputed,
              n = function(t) {
                return t.neg()
              }
            e.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(n),
              },
            }
          }
          return e
        }),
        (_.prototype.toJ = function() {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one)
        }),
        b(k, g.BasePoint),
        (w.prototype.jpoint = function(t, e, r) {
          return new k(this, t, e, r)
        }),
        (k.prototype.toP = function() {
          if (this.isInfinity()) return this.curve.point(null, null)
          var t = this.z.redInvm(),
            e = t.redSqr(),
            r = this.x.redMul(e),
            n = this.y.redMul(e).redMul(t)
          return this.curve.point(r, n)
        }),
        (k.prototype.neg = function() {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
        }),
        (k.prototype.add = function(t) {
          if (this.isInfinity()) return t
          if (t.isInfinity()) return this
          var e = t.z.redSqr(),
            r = this.z.redSqr(),
            n = this.x.redMul(e),
            i = t.x.redMul(r),
            o = this.y.redMul(e.redMul(t.z)),
            s = t.y.redMul(r.redMul(this.z)),
            a = n.redSub(i),
            u = o.redSub(s)
          if (0 === a.cmpn(0))
            return 0 !== u.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl()
          var c = a.redSqr(),
            l = c.redMul(a),
            h = n.redMul(c),
            f = u
              .redSqr()
              .redIAdd(l)
              .redISub(h)
              .redISub(h),
            d = u.redMul(h.redISub(f)).redISub(o.redMul(l)),
            p = this.z.redMul(t.z).redMul(a)
          return this.curve.jpoint(f, d, p)
        }),
        (k.prototype.mixedAdd = function(t) {
          if (this.isInfinity()) return t.toJ()
          if (t.isInfinity()) return this
          var e = this.z.redSqr(),
            r = this.x,
            n = t.x.redMul(e),
            i = this.y,
            o = t.y.redMul(e).redMul(this.z),
            s = r.redSub(n),
            a = i.redSub(o)
          if (0 === s.cmpn(0))
            return 0 !== a.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl()
          var u = s.redSqr(),
            c = u.redMul(s),
            l = r.redMul(u),
            h = a
              .redSqr()
              .redIAdd(c)
              .redISub(l)
              .redISub(l),
            f = a.redMul(l.redISub(h)).redISub(i.redMul(c)),
            d = this.z.redMul(s)
          return this.curve.jpoint(h, f, d)
        }),
        (k.prototype.dblp = function(t) {
          if (0 === t) return this
          if (this.isInfinity()) return this
          if (!t) return this.dbl()
          var e
          if (this.curve.zeroA || this.curve.threeA) {
            var r = this
            for (e = 0; e < t; e++) r = r.dbl()
            return r
          }
          var n = this.curve.a,
            i = this.curve.tinv,
            o = this.x,
            s = this.y,
            a = this.z,
            u = a.redSqr().redSqr(),
            c = s.redAdd(s)
          for (e = 0; e < t; e++) {
            var l = o.redSqr(),
              h = c.redSqr(),
              f = h.redSqr(),
              d = l
                .redAdd(l)
                .redIAdd(l)
                .redIAdd(n.redMul(u)),
              p = o.redMul(h),
              m = d.redSqr().redISub(p.redAdd(p)),
              g = p.redISub(m),
              y = d.redMul(g)
            y = y.redIAdd(y).redISub(f)
            var b = c.redMul(a)
            e + 1 < t && (u = u.redMul(f)), (o = m), (a = b), (c = y)
          }
          return this.curve.jpoint(o, c.redMul(i), a)
        }),
        (k.prototype.dbl = function() {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl()
        }),
        (k.prototype._zeroDbl = function() {
          var t, e, r
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x
                .redAdd(i)
                .redSqr()
                .redISub(n)
                .redISub(o)
            s = s.redIAdd(s)
            var a = n.redAdd(n).redIAdd(n),
              u = a
                .redSqr()
                .redISub(s)
                .redISub(s),
              c = o.redIAdd(o)
            ;(c = (c = c.redIAdd(c)).redIAdd(c)),
              (t = u),
              (e = a.redMul(s.redISub(u)).redISub(c)),
              (r = this.y.redAdd(this.y))
          } else {
            var l = this.x.redSqr(),
              h = this.y.redSqr(),
              f = h.redSqr(),
              d = this.x
                .redAdd(h)
                .redSqr()
                .redISub(l)
                .redISub(f)
            d = d.redIAdd(d)
            var p = l.redAdd(l).redIAdd(l),
              m = p.redSqr(),
              g = f.redIAdd(f)
            ;(g = (g = g.redIAdd(g)).redIAdd(g)),
              (t = m.redISub(d).redISub(d)),
              (e = p.redMul(d.redISub(t)).redISub(g)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r))
          }
          return this.curve.jpoint(t, e, r)
        }),
        (k.prototype._threeDbl = function() {
          var t, e, r
          if (this.zOne) {
            var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x
                .redAdd(i)
                .redSqr()
                .redISub(n)
                .redISub(o)
            s = s.redIAdd(s)
            var a = n
                .redAdd(n)
                .redIAdd(n)
                .redIAdd(this.curve.a),
              u = a
                .redSqr()
                .redISub(s)
                .redISub(s)
            t = u
            var c = o.redIAdd(o)
            ;(c = (c = c.redIAdd(c)).redIAdd(c)),
              (e = a.redMul(s.redISub(u)).redISub(c)),
              (r = this.y.redAdd(this.y))
          } else {
            var l = this.z.redSqr(),
              h = this.y.redSqr(),
              f = this.x.redMul(h),
              d = this.x.redSub(l).redMul(this.x.redAdd(l))
            d = d.redAdd(d).redIAdd(d)
            var p = f.redIAdd(f),
              m = (p = p.redIAdd(p)).redAdd(p)
            ;(t = d.redSqr().redISub(m)),
              (r = this.y
                .redAdd(this.z)
                .redSqr()
                .redISub(h)
                .redISub(l))
            var g = h.redSqr()
            ;(g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g)),
              (e = d.redMul(p.redISub(t)).redISub(g))
          }
          return this.curve.jpoint(t, e, r)
        }),
        (k.prototype._dbl = function() {
          var t = this.curve.a,
            e = this.x,
            r = this.y,
            n = this.z,
            i = n.redSqr().redSqr(),
            o = e.redSqr(),
            s = r.redSqr(),
            a = o
              .redAdd(o)
              .redIAdd(o)
              .redIAdd(t.redMul(i)),
            u = e.redAdd(e),
            c = (u = u.redIAdd(u)).redMul(s),
            l = a.redSqr().redISub(c.redAdd(c)),
            h = c.redISub(l),
            f = s.redSqr()
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f)
          var d = a.redMul(h).redISub(f),
            p = r.redAdd(r).redMul(n)
          return this.curve.jpoint(l, d, p)
        }),
        (k.prototype.trpl = function() {
          if (!this.curve.zeroA) return this.dbl().add(this)
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr(),
            n = e.redSqr(),
            i = t.redAdd(t).redIAdd(t),
            o = i.redSqr(),
            s = this.x
              .redAdd(e)
              .redSqr()
              .redISub(t)
              .redISub(n),
            a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(
              o,
            )).redSqr(),
            u = n.redIAdd(n)
          u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u)
          var c = i
              .redIAdd(s)
              .redSqr()
              .redISub(o)
              .redISub(a)
              .redISub(u),
            l = e.redMul(c)
          l = (l = l.redIAdd(l)).redIAdd(l)
          var h = this.x.redMul(a).redISub(l)
          h = (h = h.redIAdd(h)).redIAdd(h)
          var f = this.y.redMul(c.redMul(u.redISub(c)).redISub(s.redMul(a)))
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f)
          var d = this.z
            .redAdd(s)
            .redSqr()
            .redISub(r)
            .redISub(a)
          return this.curve.jpoint(h, f, d)
        }),
        (k.prototype.mul = function(t, e) {
          return (t = new i.a(t, e)), this.curve._wnafMul(this, t)
        }),
        (k.prototype.eq = function(t) {
          if ('affine' === t.type) return this.eq(t.toJ())
          if (this === t) return !0
          var e = this.z.redSqr(),
            r = t.z.redSqr()
          if (
            0 !==
            this.x
              .redMul(r)
              .redISub(t.x.redMul(e))
              .cmpn(0)
          )
            return !1
          var n = e.redMul(this.z),
            i = r.redMul(t.z)
          return (
            0 ===
            this.y
              .redMul(i)
              .redISub(t.y.redMul(n))
              .cmpn(0)
          )
        }),
        (k.prototype.eqXToP = function(t) {
          var e = this.z.redSqr(),
            r = t.toRed(this.curve.red).redMul(e)
          if (0 === this.x.cmp(r)) return !0
          for (var n = t.clone(), i = this.curve.redN.redMul(e); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1
            if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0
          }
        }),
        (k.prototype.inspect = function() {
          return this.isInfinity()
            ? '<EC JPoint Infinity>'
            : '<EC JPoint x: ' +
                this.x.toString(16, 2) +
                ' y: ' +
                this.y.toString(16, 2) +
                ' z: ' +
                this.z.toString(16, 2) +
                '>'
        }),
        (k.prototype.isInfinity = function() {
          return 0 === this.z.cmpn(0)
        })
      var A = a(function(t, e) {
          var r = e
          ;(r.base = g), (r.short = E), (r.mont = null), (r.edwards = null)
        }),
        S = a(function(t, e) {
          var r,
            n = e,
            i = h.assert
          function o(t) {
            'short' === t.type
              ? (this.curve = new A.short(t))
              : 'edwards' === t.type
              ? (this.curve = new A.edwards(t))
              : (this.curve = new A.mont(t)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = t.hash),
              i(this.g.validate(), 'Invalid curve'),
              i(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O')
          }
          function a(t, e) {
            Object.defineProperty(n, t, {
              configurable: !0,
              enumerable: !0,
              get: function() {
                var r = new o(e)
                return (
                  Object.defineProperty(n, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                  }),
                  r
                )
              },
            })
          }
          ;(n.PresetCurve = o),
            a('p192', {
              type: 'short',
              prime: 'p192',
              p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
              a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
              b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
              n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
              hash: s.a.sha256,
              gRed: !1,
              g: [
                '188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012',
                '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811',
              ],
            }),
            a('p224', {
              type: 'short',
              prime: 'p224',
              p:
                'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
              a:
                'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
              b:
                'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
              n:
                'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
              hash: s.a.sha256,
              gRed: !1,
              g: [
                'b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21',
                'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34',
              ],
            }),
            a('p256', {
              type: 'short',
              prime: null,
              p:
                'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
              a:
                'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
              b:
                '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
              n:
                'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
              hash: s.a.sha256,
              gRed: !1,
              g: [
                '6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296',
                '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5',
              ],
            }),
            a('p384', {
              type: 'short',
              prime: null,
              p:
                'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff',
              a:
                'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc',
              b:
                'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
              n:
                'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
              hash: s.a.sha384,
              gRed: !1,
              g: [
                'aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7',
                '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f',
              ],
            }),
            a('p521', {
              type: 'short',
              prime: null,
              p:
                '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff',
              a:
                '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc',
              b:
                '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
              n:
                '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
              hash: s.a.sha512,
              gRed: !1,
              g: [
                '000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66',
                '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650',
              ],
            }),
            a('curve25519', {
              type: 'mont',
              prime: 'p25519',
              p:
                '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
              a: '76d06',
              b: '1',
              n:
                '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
              hash: s.a.sha256,
              gRed: !1,
              g: ['9'],
            }),
            a('ed25519', {
              type: 'edwards',
              prime: 'p25519',
              p:
                '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
              a: '-1',
              c: '1',
              d:
                '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
              n:
                '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
              hash: s.a.sha256,
              gRed: !1,
              g: [
                '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',
                '6666666666666666666666666666666666666666666666666666666666666658',
              ],
            })
          try {
            r = null.crash()
          } catch (t) {
            r = void 0
          }
          a('secp256k1', {
            type: 'short',
            prime: 'k256',
            p:
              'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
            a: '0',
            b: '7',
            n:
              'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
            h: '1',
            hash: s.a.sha256,
            beta:
              '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
            lambda:
              '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
            basis: [
              {
                a: '3086d221a7d46bcde86c90e49284eb15',
                b: '-e4437ed6010e88286f547fa90abfe4c3',
              },
              {
                a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
                b: '3086d221a7d46bcde86c90e49284eb15',
              },
            ],
            gRed: !1,
            g: [
              '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
              '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
              r,
            ],
          })
        })
      function P(t) {
        if (!(this instanceof P)) return new P(t)
        ;(this.hash = t.hash),
          (this.predResist = !!t.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null)
        var e = l.toArray(t.entropy, t.entropyEnc || 'hex'),
          r = l.toArray(t.nonce, t.nonceEnc || 'hex'),
          n = l.toArray(t.pers, t.persEnc || 'hex')
        u(
          e.length >= this.minEntropy / 8,
          'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits',
        ),
          this._init(e, r, n)
      }
      var O = P
      ;(P.prototype._init = function(t, e, r) {
        var n = t.concat(e).concat(r)
        ;(this.K = new Array(this.outLen / 8)),
          (this.V = new Array(this.outLen / 8))
        for (var i = 0; i < this.V.length; i++) (this.K[i] = 0), (this.V[i] = 1)
        this._update(n),
          (this._reseed = 1),
          (this.reseedInterval = 281474976710656)
      }),
        (P.prototype._hmac = function() {
          return new s.a.hmac(this.hash, this.K)
        }),
        (P.prototype._update = function(t) {
          var e = this._hmac()
            .update(this.V)
            .update([0])
          t && (e = e.update(t)),
            (this.K = e.digest()),
            (this.V = this._hmac()
              .update(this.V)
              .digest()),
            t &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(t)
                .digest()),
              (this.V = this._hmac()
                .update(this.V)
                .digest()))
        }),
        (P.prototype.reseed = function(t, e, r, n) {
          'string' != typeof e && ((n = r), (r = e), (e = null)),
            (t = l.toArray(t, e)),
            (r = l.toArray(r, n)),
            u(
              t.length >= this.minEntropy / 8,
              'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits',
            ),
            this._update(t.concat(r || [])),
            (this._reseed = 1)
        }),
        (P.prototype.generate = function(t, e, r, n) {
          if (this._reseed > this.reseedInterval)
            throw new Error('Reseed is required')
          'string' != typeof e && ((n = r), (r = e), (e = null)),
            r && ((r = l.toArray(r, n || 'hex')), this._update(r))
          for (var i = []; i.length < t; )
            (this.V = this._hmac()
              .update(this.V)
              .digest()),
              (i = i.concat(this.V))
          var o = i.slice(0, t)
          return this._update(r), this._reseed++, l.encode(o, e)
        })
      var N = h.assert
      function x(t, e) {
        ;(this.ec = t),
          (this.priv = null),
          (this.pub = null),
          e.priv && this._importPrivate(e.priv, e.privEnc),
          e.pub && this._importPublic(e.pub, e.pubEnc)
      }
      var M = x
      ;(x.fromPublic = function(t, e, r) {
        return e instanceof x ? e : new x(t, { pub: e, pubEnc: r })
      }),
        (x.fromPrivate = function(t, e, r) {
          return e instanceof x ? e : new x(t, { priv: e, privEnc: r })
        }),
        (x.prototype.validate = function() {
          var t = this.getPublic()
          return t.isInfinity()
            ? { result: !1, reason: 'Invalid public key' }
            : t.validate()
            ? t.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: 'Public key * N != O' }
            : { result: !1, reason: 'Public key is not a point' }
        }),
        (x.prototype.getPublic = function(t, e) {
          return (
            'string' == typeof t && ((e = t), (t = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            e ? this.pub.encode(e, t) : this.pub
          )
        }),
        (x.prototype.getPrivate = function(t) {
          return 'hex' === t ? this.priv.toString(16, 2) : this.priv
        }),
        (x.prototype._importPrivate = function(t, e) {
          ;(this.priv = new i.a(t, e || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n))
        }),
        (x.prototype._importPublic = function(t, e) {
          if (t.x || t.y)
            return (
              'mont' === this.ec.curve.type
                ? N(t.x, 'Need x coordinate')
                : ('short' !== this.ec.curve.type &&
                    'edwards' !== this.ec.curve.type) ||
                  N(t.x && t.y, 'Need both x and y coordinate'),
              void (this.pub = this.ec.curve.point(t.x, t.y))
            )
          this.pub = this.ec.curve.decodePoint(t, e)
        }),
        (x.prototype.derive = function(t) {
          return (
            t.validate() || N(t.validate(), 'public point not validated'),
            t.mul(this.priv).getX()
          )
        }),
        (x.prototype.sign = function(t, e, r) {
          return this.ec.sign(t, this, e, r)
        }),
        (x.prototype.verify = function(t, e) {
          return this.ec.verify(t, e, this)
        }),
        (x.prototype.inspect = function() {
          return (
            '<Key priv: ' +
            (this.priv && this.priv.toString(16, 2)) +
            ' pub: ' +
            (this.pub && this.pub.inspect()) +
            ' >'
          )
        })
      var T = h.assert
      function I(t, e) {
        if (t instanceof I) return t
        this._importDER(t, e) ||
          (T(t.r && t.s, 'Signature without r or s'),
          (this.r = new i.a(t.r, 16)),
          (this.s = new i.a(t.s, 16)),
          void 0 === t.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = t.recoveryParam))
      }
      var R = I
      function C() {
        this.place = 0
      }
      function j(t, e) {
        var r = t[e.place++]
        if (!(128 & r)) return r
        var n = 15 & r
        if (0 === n || n > 4) return !1
        for (var i = 0, o = 0, s = e.place; o < n; o++, s++)
          (i <<= 8), (i |= t[s]), (i >>>= 0)
        return !(i <= 127) && ((e.place = s), i)
      }
      function B(t) {
        for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r; )
          e++
        return 0 === e ? t : t.slice(e)
      }
      function F(t, e) {
        if (e < 128) t.push(e)
        else {
          var r = 1 + ((Math.log(e) / Math.LN2) >>> 3)
          for (t.push(128 | r); --r; ) t.push((e >>> (r << 3)) & 255)
          t.push(e)
        }
      }
      ;(I.prototype._importDER = function(t, e) {
        t = h.toArray(t, e)
        var r = new C()
        if (48 !== t[r.place++]) return !1
        var n = j(t, r)
        if (!1 === n) return !1
        if (n + r.place !== t.length) return !1
        if (2 !== t[r.place++]) return !1
        var o = j(t, r)
        if (!1 === o) return !1
        var s = t.slice(r.place, o + r.place)
        if (((r.place += o), 2 !== t[r.place++])) return !1
        var a = j(t, r)
        if (!1 === a) return !1
        if (t.length !== a + r.place) return !1
        var u = t.slice(r.place, a + r.place)
        if (0 === s[0]) {
          if (!(128 & s[1])) return !1
          s = s.slice(1)
        }
        if (0 === u[0]) {
          if (!(128 & u[1])) return !1
          u = u.slice(1)
        }
        return (
          (this.r = new i.a(s)),
          (this.s = new i.a(u)),
          (this.recoveryParam = null),
          !0
        )
      }),
        (I.prototype.toDER = function(t) {
          var e = this.r.toArray(),
            r = this.s.toArray()
          for (
            128 & e[0] && (e = [0].concat(e)),
              128 & r[0] && (r = [0].concat(r)),
              e = B(e),
              r = B(r);
            !(r[0] || 128 & r[1]);

          )
            r = r.slice(1)
          var n = [2]
          F(n, e.length), (n = n.concat(e)).push(2), F(n, r.length)
          var i = n.concat(r),
            o = [48]
          return F(o, i.length), (o = o.concat(i)), h.encode(o, t)
        })
      var L = function() {
          throw new Error('unsupported')
        },
        U = h.assert
      function D(t) {
        if (!(this instanceof D)) return new D(t)
        'string' == typeof t &&
          (U(Object.prototype.hasOwnProperty.call(S, t), 'Unknown curve ' + t),
          (t = S[t])),
          t instanceof S.PresetCurve && (t = { curve: t }),
          (this.curve = t.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = t.curve.g),
          this.g.precompute(t.curve.n.bitLength() + 1),
          (this.hash = t.hash || t.curve.hash)
      }
      var z = D
      ;(D.prototype.keyPair = function(t) {
        return new M(this, t)
      }),
        (D.prototype.keyFromPrivate = function(t, e) {
          return M.fromPrivate(this, t, e)
        }),
        (D.prototype.keyFromPublic = function(t, e) {
          return M.fromPublic(this, t, e)
        }),
        (D.prototype.genKeyPair = function(t) {
          t || (t = {})
          for (
            var e = new O({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || 'utf8',
                entropy: t.entropy || L(this.hash.hmacStrength),
                entropyEnc: (t.entropy && t.entropyEnc) || 'utf8',
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              n = this.n.sub(new i.a(2));
            ;

          ) {
            var o = new i.a(e.generate(r))
            if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o)
          }
        }),
        (D.prototype._truncateToN = function(t, e) {
          var r = 8 * t.byteLength() - this.n.bitLength()
          return (
            r > 0 && (t = t.ushrn(r)),
            !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
          )
        }),
        (D.prototype.sign = function(t, e, r, n) {
          'object' == typeof r && ((n = r), (r = null)),
            n || (n = {}),
            (e = this.keyFromPrivate(e, r)),
            (t = this._truncateToN(new i.a(t, 16)))
          for (
            var o = this.n.byteLength(),
              s = e.getPrivate().toArray('be', o),
              a = t.toArray('be', o),
              u = new O({
                hash: this.hash,
                entropy: s,
                nonce: a,
                pers: n.pers,
                persEnc: n.persEnc || 'utf8',
              }),
              c = this.n.sub(new i.a(1)),
              l = 0;
            ;
            l++
          ) {
            var h = n.k ? n.k(l) : new i.a(u.generate(this.n.byteLength()))
            if (
              !((h = this._truncateToN(h, !0)).cmpn(1) <= 0 || h.cmp(c) >= 0)
            ) {
              var f = this.g.mul(h)
              if (!f.isInfinity()) {
                var d = f.getX(),
                  p = d.umod(this.n)
                if (0 !== p.cmpn(0)) {
                  var m = h.invm(this.n).mul(p.mul(e.getPrivate()).iadd(t))
                  if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                    var g =
                      (f.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(p) ? 2 : 0)
                    return (
                      n.canonical &&
                        m.cmp(this.nh) > 0 &&
                        ((m = this.n.sub(m)), (g ^= 1)),
                      new R({ r: p, s: m, recoveryParam: g })
                    )
                  }
                }
              }
            }
          }
        }),
        (D.prototype.verify = function(t, e, r, n) {
          ;(t = this._truncateToN(new i.a(t, 16))),
            (r = this.keyFromPublic(r, n))
          var o = (e = new R(e, 'hex')).r,
            s = e.s
          if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1
          if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1
          var a,
            u = s.invm(this.n),
            c = u.mul(t).umod(this.n),
            l = u.mul(o).umod(this.n)
          return this.curve._maxwellTrick
            ? !(a = this.g.jmulAdd(c, r.getPublic(), l)).isInfinity() &&
                a.eqXToP(o)
            : !(a = this.g.mulAdd(c, r.getPublic(), l)).isInfinity() &&
                0 ===
                  a
                    .getX()
                    .umod(this.n)
                    .cmp(o)
        }),
        (D.prototype.recoverPubKey = function(t, e, r, n) {
          U((3 & r) === r, 'The recovery param is more than two bits'),
            (e = new R(e, n))
          var o = this.n,
            s = new i.a(t),
            a = e.r,
            u = e.s,
            c = 1 & r,
            l = r >> 1
          if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l)
            throw new Error('Unable to find sencond key candinate')
          a = l
            ? this.curve.pointFromX(a.add(this.curve.n), c)
            : this.curve.pointFromX(a, c)
          var h = e.r.invm(o),
            f = o
              .sub(s)
              .mul(h)
              .umod(o),
            d = u.mul(h).umod(o)
          return this.g.mulAdd(f, a, d)
        }),
        (D.prototype.getKeyRecoveryParam = function(t, e, r, n) {
          if (null !== (e = new R(e, n)).recoveryParam) return e.recoveryParam
          for (var i = 0; i < 4; i++) {
            var o
            try {
              o = this.recoverPubKey(t, e, i)
            } catch (t) {
              continue
            }
            if (o.eq(r)) return i
          }
          throw new Error('Unable to find valid recovery factor')
        })
      var G = a(function(t, e) {
        var r = e
        ;(r.version = '6.5.4'),
          (r.utils = h),
          (r.rand = function() {
            throw new Error('unsupported')
          }),
          (r.curve = A),
          (r.curves = S),
          (r.ec = z),
          (r.eddsa = null)
      }).ec
    }.call(this, r(10)))
  },
  function(t, e, r) {
    ;(function(n, i) {
      var o
      /**
       * [js-sha3]{@link https://github.com/emn178/js-sha3}
       *
       * @version 0.8.0
       * @author Chen, Yi-Cyuan [emn178@gmail.com]
       * @copyright Chen, Yi-Cyuan 2015-2018
       * @license MIT
       */ !(function() {
        'use strict'
        var s = 'input is invalid type',
          a = 'object' == typeof window,
          u = a ? window : {}
        u.JS_SHA3_NO_WINDOW && (a = !1)
        var c = !a && 'object' == typeof self
        !u.JS_SHA3_NO_NODE_JS &&
        'object' == typeof n &&
        n.versions &&
        n.versions.node
          ? (u = i)
          : c && (u = self)
        var l = !u.JS_SHA3_NO_COMMON_JS && 'object' == typeof t && t.exports,
          h = r(35),
          f = !u.JS_SHA3_NO_ARRAY_BUFFER && 'undefined' != typeof ArrayBuffer,
          d = '0123456789abcdef'.split(''),
          p = [4, 1024, 262144, 67108864],
          m = [0, 8, 16, 24],
          g = [
            1,
            0,
            32898,
            0,
            32906,
            2147483648,
            2147516416,
            2147483648,
            32907,
            0,
            2147483649,
            0,
            2147516545,
            2147483648,
            32777,
            2147483648,
            138,
            0,
            136,
            0,
            2147516425,
            0,
            2147483658,
            0,
            2147516555,
            0,
            139,
            2147483648,
            32905,
            2147483648,
            32771,
            2147483648,
            32770,
            2147483648,
            128,
            2147483648,
            32778,
            0,
            2147483658,
            2147483648,
            2147516545,
            2147483648,
            32896,
            2147483648,
            2147483649,
            0,
            2147516424,
            2147483648,
          ],
          y = [224, 256, 384, 512],
          b = [128, 256],
          v = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'],
          w = { 128: 168, 256: 136 }
        ;(!u.JS_SHA3_NO_NODE_JS && Array.isArray) ||
          (Array.isArray = function(t) {
            return '[object Array]' === Object.prototype.toString.call(t)
          }),
          !f ||
            (!u.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
            (ArrayBuffer.isView = function(t) {
              return (
                'object' == typeof t &&
                t.buffer &&
                t.buffer.constructor === ArrayBuffer
              )
            })
        for (
          var E = function(t, e, r) {
              return function(n) {
                return new B(t, e, t).update(n)[r]()
              }
            },
            _ = function(t, e, r) {
              return function(n, i) {
                return new B(t, e, i).update(n)[r]()
              }
            },
            k = function(t, e, r) {
              return function(e, n, i, o) {
                return N['cshake' + t].update(e, n, i, o)[r]()
              }
            },
            A = function(t, e, r) {
              return function(e, n, i, o) {
                return N['kmac' + t].update(e, n, i, o)[r]()
              }
            },
            S = function(t, e, r, n) {
              for (var i = 0; i < v.length; ++i) {
                var o = v[i]
                t[o] = e(r, n, o)
              }
              return t
            },
            P = function(t, e) {
              var r = E(t, e, 'hex')
              return (
                (r.create = function() {
                  return new B(t, e, t)
                }),
                (r.update = function(t) {
                  return r.create().update(t)
                }),
                S(r, E, t, e)
              )
            },
            O = [
              {
                name: 'keccak',
                padding: [1, 256, 65536, 16777216],
                bits: y,
                createMethod: P,
              },
              {
                name: 'sha3',
                padding: [6, 1536, 393216, 100663296],
                bits: y,
                createMethod: P,
              },
              {
                name: 'shake',
                padding: [31, 7936, 2031616, 520093696],
                bits: b,
                createMethod: function(t, e) {
                  var r = _(t, e, 'hex')
                  return (
                    (r.create = function(r) {
                      return new B(t, e, r)
                    }),
                    (r.update = function(t, e) {
                      return r.create(e).update(t)
                    }),
                    S(r, _, t, e)
                  )
                },
              },
              {
                name: 'cshake',
                padding: p,
                bits: b,
                createMethod: function(t, e) {
                  var r = w[t],
                    n = k(t, 0, 'hex')
                  return (
                    (n.create = function(n, i, o) {
                      return i || o
                        ? new B(t, e, n).bytepad([i, o], r)
                        : N['shake' + t].create(n)
                    }),
                    (n.update = function(t, e, r, i) {
                      return n.create(e, r, i).update(t)
                    }),
                    S(n, k, t, e)
                  )
                },
              },
              {
                name: 'kmac',
                padding: p,
                bits: b,
                createMethod: function(t, e) {
                  var r = w[t],
                    n = A(t, 0, 'hex')
                  return (
                    (n.create = function(n, i, o) {
                      return new F(t, e, i)
                        .bytepad(['KMAC', o], r)
                        .bytepad([n], r)
                    }),
                    (n.update = function(t, e, r, i) {
                      return n.create(t, r, i).update(e)
                    }),
                    S(n, A, t, e)
                  )
                },
              },
            ],
            N = {},
            x = [],
            M = 0;
          M < O.length;
          ++M
        )
          for (var T = O[M], I = T.bits, R = 0; R < I.length; ++R) {
            var C = T.name + '_' + I[R]
            if (
              (x.push(C),
              (N[C] = T.createMethod(I[R], T.padding)),
              'sha3' !== T.name)
            ) {
              var j = T.name + I[R]
              x.push(j), (N[j] = N[C])
            }
          }
        function B(t, e, r) {
          ;(this.blocks = []),
            (this.s = []),
            (this.padding = e),
            (this.outputBits = r),
            (this.reset = !0),
            (this.finalized = !1),
            (this.block = 0),
            (this.start = 0),
            (this.blockCount = (1600 - (t << 1)) >> 5),
            (this.byteCount = this.blockCount << 2),
            (this.outputBlocks = r >> 5),
            (this.extraBytes = (31 & r) >> 3)
          for (var n = 0; n < 50; ++n) this.s[n] = 0
        }
        function F(t, e, r) {
          B.call(this, t, e, r)
        }
        ;(B.prototype.update = function(t) {
          if (this.finalized) throw new Error('finalize already called')
          var e,
            r = typeof t
          if ('string' !== r) {
            if ('object' !== r) throw new Error(s)
            if (null === t) throw new Error(s)
            if (f && t.constructor === ArrayBuffer) t = new Uint8Array(t)
            else if (!(Array.isArray(t) || (f && ArrayBuffer.isView(t))))
              throw new Error(s)
            e = !0
          }
          for (
            var n,
              i,
              o = this.blocks,
              a = this.byteCount,
              u = t.length,
              c = this.blockCount,
              l = 0,
              h = this.s;
            l < u;

          ) {
            if (this.reset)
              for (this.reset = !1, o[0] = this.block, n = 1; n < c + 1; ++n)
                o[n] = 0
            if (e)
              for (n = this.start; l < u && n < a; ++l)
                o[n >> 2] |= t[l] << m[3 & n++]
            else
              for (n = this.start; l < u && n < a; ++l)
                (i = t.charCodeAt(l)) < 128
                  ? (o[n >> 2] |= i << m[3 & n++])
                  : i < 2048
                  ? ((o[n >> 2] |= (192 | (i >> 6)) << m[3 & n++]),
                    (o[n >> 2] |= (128 | (63 & i)) << m[3 & n++]))
                  : i < 55296 || i >= 57344
                  ? ((o[n >> 2] |= (224 | (i >> 12)) << m[3 & n++]),
                    (o[n >> 2] |= (128 | ((i >> 6) & 63)) << m[3 & n++]),
                    (o[n >> 2] |= (128 | (63 & i)) << m[3 & n++]))
                  : ((i =
                      65536 +
                      (((1023 & i) << 10) | (1023 & t.charCodeAt(++l)))),
                    (o[n >> 2] |= (240 | (i >> 18)) << m[3 & n++]),
                    (o[n >> 2] |= (128 | ((i >> 12) & 63)) << m[3 & n++]),
                    (o[n >> 2] |= (128 | ((i >> 6) & 63)) << m[3 & n++]),
                    (o[n >> 2] |= (128 | (63 & i)) << m[3 & n++]))
            if (((this.lastByteIndex = n), n >= a)) {
              for (this.start = n - a, this.block = o[c], n = 0; n < c; ++n)
                h[n] ^= o[n]
              L(h), (this.reset = !0)
            } else this.start = n
          }
          return this
        }),
          (B.prototype.encode = function(t, e) {
            var r = 255 & t,
              n = 1,
              i = [r]
            for (r = 255 & (t >>= 8); r > 0; )
              i.unshift(r), (r = 255 & (t >>= 8)), ++n
            return e ? i.push(n) : i.unshift(n), this.update(i), i.length
          }),
          (B.prototype.encodeString = function(t) {
            var e,
              r = typeof t
            if ('string' !== r) {
              if ('object' !== r) throw new Error(s)
              if (null === t) throw new Error(s)
              if (f && t.constructor === ArrayBuffer) t = new Uint8Array(t)
              else if (!(Array.isArray(t) || (f && ArrayBuffer.isView(t))))
                throw new Error(s)
              e = !0
            }
            var n = 0,
              i = t.length
            if (e) n = i
            else
              for (var o = 0; o < t.length; ++o) {
                var a = t.charCodeAt(o)
                a < 128
                  ? (n += 1)
                  : a < 2048
                  ? (n += 2)
                  : a < 55296 || a >= 57344
                  ? (n += 3)
                  : ((a =
                      65536 +
                      (((1023 & a) << 10) | (1023 & t.charCodeAt(++o)))),
                    (n += 4))
              }
            return (n += this.encode(8 * n)), this.update(t), n
          }),
          (B.prototype.bytepad = function(t, e) {
            for (var r = this.encode(e), n = 0; n < t.length; ++n)
              r += this.encodeString(t[n])
            var i = e - (r % e),
              o = []
            return (o.length = i), this.update(o), this
          }),
          (B.prototype.finalize = function() {
            if (!this.finalized) {
              this.finalized = !0
              var t = this.blocks,
                e = this.lastByteIndex,
                r = this.blockCount,
                n = this.s
              if (
                ((t[e >> 2] |= this.padding[3 & e]),
                this.lastByteIndex === this.byteCount)
              )
                for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0
              for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) n[e] ^= t[e]
              L(n)
            }
          }),
          (B.prototype.toString = B.prototype.hex = function() {
            this.finalize()
            for (
              var t,
                e = this.blockCount,
                r = this.s,
                n = this.outputBlocks,
                i = this.extraBytes,
                o = 0,
                s = 0,
                a = '';
              s < n;

            ) {
              for (o = 0; o < e && s < n; ++o, ++s)
                (t = r[o]),
                  (a +=
                    d[(t >> 4) & 15] +
                    d[15 & t] +
                    d[(t >> 12) & 15] +
                    d[(t >> 8) & 15] +
                    d[(t >> 20) & 15] +
                    d[(t >> 16) & 15] +
                    d[(t >> 28) & 15] +
                    d[(t >> 24) & 15])
              s % e == 0 && (L(r), (o = 0))
            }
            return (
              i &&
                ((t = r[o]),
                (a += d[(t >> 4) & 15] + d[15 & t]),
                i > 1 && (a += d[(t >> 12) & 15] + d[(t >> 8) & 15]),
                i > 2 && (a += d[(t >> 20) & 15] + d[(t >> 16) & 15])),
              a
            )
          }),
          (B.prototype.arrayBuffer = function() {
            this.finalize()
            var t,
              e = this.blockCount,
              r = this.s,
              n = this.outputBlocks,
              i = this.extraBytes,
              o = 0,
              s = 0,
              a = this.outputBits >> 3
            t = i ? new ArrayBuffer((n + 1) << 2) : new ArrayBuffer(a)
            for (var u = new Uint32Array(t); s < n; ) {
              for (o = 0; o < e && s < n; ++o, ++s) u[s] = r[o]
              s % e == 0 && L(r)
            }
            return i && ((u[o] = r[o]), (t = t.slice(0, a))), t
          }),
          (B.prototype.buffer = B.prototype.arrayBuffer),
          (B.prototype.digest = B.prototype.array = function() {
            this.finalize()
            for (
              var t,
                e,
                r = this.blockCount,
                n = this.s,
                i = this.outputBlocks,
                o = this.extraBytes,
                s = 0,
                a = 0,
                u = [];
              a < i;

            ) {
              for (s = 0; s < r && a < i; ++s, ++a)
                (t = a << 2),
                  (e = n[s]),
                  (u[t] = 255 & e),
                  (u[t + 1] = (e >> 8) & 255),
                  (u[t + 2] = (e >> 16) & 255),
                  (u[t + 3] = (e >> 24) & 255)
              a % r == 0 && L(n)
            }
            return (
              o &&
                ((t = a << 2),
                (e = n[s]),
                (u[t] = 255 & e),
                o > 1 && (u[t + 1] = (e >> 8) & 255),
                o > 2 && (u[t + 2] = (e >> 16) & 255)),
              u
            )
          }),
          (F.prototype = new B()),
          (F.prototype.finalize = function() {
            return (
              this.encode(this.outputBits, !0), B.prototype.finalize.call(this)
            )
          })
        var L = function(t) {
          var e,
            r,
            n,
            i,
            o,
            s,
            a,
            u,
            c,
            l,
            h,
            f,
            d,
            p,
            m,
            y,
            b,
            v,
            w,
            E,
            _,
            k,
            A,
            S,
            P,
            O,
            N,
            x,
            M,
            T,
            I,
            R,
            C,
            j,
            B,
            F,
            L,
            U,
            D,
            z,
            G,
            K,
            q,
            H,
            V,
            W,
            J,
            $,
            Z,
            X,
            Y,
            Q,
            tt,
            et,
            rt,
            nt,
            it,
            ot,
            st,
            at,
            ut,
            ct,
            lt
          for (n = 0; n < 48; n += 2)
            (i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]),
              (o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]),
              (s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]),
              (a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]),
              (u = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]),
              (c = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]),
              (l = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]),
              (h = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]),
              (e =
                (f = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^
                ((s << 1) | (a >>> 31))),
              (r =
                (d = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^
                ((a << 1) | (s >>> 31))),
              (t[0] ^= e),
              (t[1] ^= r),
              (t[10] ^= e),
              (t[11] ^= r),
              (t[20] ^= e),
              (t[21] ^= r),
              (t[30] ^= e),
              (t[31] ^= r),
              (t[40] ^= e),
              (t[41] ^= r),
              (e = i ^ ((u << 1) | (c >>> 31))),
              (r = o ^ ((c << 1) | (u >>> 31))),
              (t[2] ^= e),
              (t[3] ^= r),
              (t[12] ^= e),
              (t[13] ^= r),
              (t[22] ^= e),
              (t[23] ^= r),
              (t[32] ^= e),
              (t[33] ^= r),
              (t[42] ^= e),
              (t[43] ^= r),
              (e = s ^ ((l << 1) | (h >>> 31))),
              (r = a ^ ((h << 1) | (l >>> 31))),
              (t[4] ^= e),
              (t[5] ^= r),
              (t[14] ^= e),
              (t[15] ^= r),
              (t[24] ^= e),
              (t[25] ^= r),
              (t[34] ^= e),
              (t[35] ^= r),
              (t[44] ^= e),
              (t[45] ^= r),
              (e = u ^ ((f << 1) | (d >>> 31))),
              (r = c ^ ((d << 1) | (f >>> 31))),
              (t[6] ^= e),
              (t[7] ^= r),
              (t[16] ^= e),
              (t[17] ^= r),
              (t[26] ^= e),
              (t[27] ^= r),
              (t[36] ^= e),
              (t[37] ^= r),
              (t[46] ^= e),
              (t[47] ^= r),
              (e = l ^ ((i << 1) | (o >>> 31))),
              (r = h ^ ((o << 1) | (i >>> 31))),
              (t[8] ^= e),
              (t[9] ^= r),
              (t[18] ^= e),
              (t[19] ^= r),
              (t[28] ^= e),
              (t[29] ^= r),
              (t[38] ^= e),
              (t[39] ^= r),
              (t[48] ^= e),
              (t[49] ^= r),
              (p = t[0]),
              (m = t[1]),
              (W = (t[11] << 4) | (t[10] >>> 28)),
              (J = (t[10] << 4) | (t[11] >>> 28)),
              (x = (t[20] << 3) | (t[21] >>> 29)),
              (M = (t[21] << 3) | (t[20] >>> 29)),
              (at = (t[31] << 9) | (t[30] >>> 23)),
              (ut = (t[30] << 9) | (t[31] >>> 23)),
              (K = (t[40] << 18) | (t[41] >>> 14)),
              (q = (t[41] << 18) | (t[40] >>> 14)),
              (j = (t[2] << 1) | (t[3] >>> 31)),
              (B = (t[3] << 1) | (t[2] >>> 31)),
              (y = (t[13] << 12) | (t[12] >>> 20)),
              (b = (t[12] << 12) | (t[13] >>> 20)),
              ($ = (t[22] << 10) | (t[23] >>> 22)),
              (Z = (t[23] << 10) | (t[22] >>> 22)),
              (T = (t[33] << 13) | (t[32] >>> 19)),
              (I = (t[32] << 13) | (t[33] >>> 19)),
              (ct = (t[42] << 2) | (t[43] >>> 30)),
              (lt = (t[43] << 2) | (t[42] >>> 30)),
              (et = (t[5] << 30) | (t[4] >>> 2)),
              (rt = (t[4] << 30) | (t[5] >>> 2)),
              (F = (t[14] << 6) | (t[15] >>> 26)),
              (L = (t[15] << 6) | (t[14] >>> 26)),
              (v = (t[25] << 11) | (t[24] >>> 21)),
              (w = (t[24] << 11) | (t[25] >>> 21)),
              (X = (t[34] << 15) | (t[35] >>> 17)),
              (Y = (t[35] << 15) | (t[34] >>> 17)),
              (R = (t[45] << 29) | (t[44] >>> 3)),
              (C = (t[44] << 29) | (t[45] >>> 3)),
              (S = (t[6] << 28) | (t[7] >>> 4)),
              (P = (t[7] << 28) | (t[6] >>> 4)),
              (nt = (t[17] << 23) | (t[16] >>> 9)),
              (it = (t[16] << 23) | (t[17] >>> 9)),
              (U = (t[26] << 25) | (t[27] >>> 7)),
              (D = (t[27] << 25) | (t[26] >>> 7)),
              (E = (t[36] << 21) | (t[37] >>> 11)),
              (_ = (t[37] << 21) | (t[36] >>> 11)),
              (Q = (t[47] << 24) | (t[46] >>> 8)),
              (tt = (t[46] << 24) | (t[47] >>> 8)),
              (H = (t[8] << 27) | (t[9] >>> 5)),
              (V = (t[9] << 27) | (t[8] >>> 5)),
              (O = (t[18] << 20) | (t[19] >>> 12)),
              (N = (t[19] << 20) | (t[18] >>> 12)),
              (ot = (t[29] << 7) | (t[28] >>> 25)),
              (st = (t[28] << 7) | (t[29] >>> 25)),
              (z = (t[38] << 8) | (t[39] >>> 24)),
              (G = (t[39] << 8) | (t[38] >>> 24)),
              (k = (t[48] << 14) | (t[49] >>> 18)),
              (A = (t[49] << 14) | (t[48] >>> 18)),
              (t[0] = p ^ (~y & v)),
              (t[1] = m ^ (~b & w)),
              (t[10] = S ^ (~O & x)),
              (t[11] = P ^ (~N & M)),
              (t[20] = j ^ (~F & U)),
              (t[21] = B ^ (~L & D)),
              (t[30] = H ^ (~W & $)),
              (t[31] = V ^ (~J & Z)),
              (t[40] = et ^ (~nt & ot)),
              (t[41] = rt ^ (~it & st)),
              (t[2] = y ^ (~v & E)),
              (t[3] = b ^ (~w & _)),
              (t[12] = O ^ (~x & T)),
              (t[13] = N ^ (~M & I)),
              (t[22] = F ^ (~U & z)),
              (t[23] = L ^ (~D & G)),
              (t[32] = W ^ (~$ & X)),
              (t[33] = J ^ (~Z & Y)),
              (t[42] = nt ^ (~ot & at)),
              (t[43] = it ^ (~st & ut)),
              (t[4] = v ^ (~E & k)),
              (t[5] = w ^ (~_ & A)),
              (t[14] = x ^ (~T & R)),
              (t[15] = M ^ (~I & C)),
              (t[24] = U ^ (~z & K)),
              (t[25] = D ^ (~G & q)),
              (t[34] = $ ^ (~X & Q)),
              (t[35] = Z ^ (~Y & tt)),
              (t[44] = ot ^ (~at & ct)),
              (t[45] = st ^ (~ut & lt)),
              (t[6] = E ^ (~k & p)),
              (t[7] = _ ^ (~A & m)),
              (t[16] = T ^ (~R & S)),
              (t[17] = I ^ (~C & P)),
              (t[26] = z ^ (~K & j)),
              (t[27] = G ^ (~q & B)),
              (t[36] = X ^ (~Q & H)),
              (t[37] = Y ^ (~tt & V)),
              (t[46] = at ^ (~ct & et)),
              (t[47] = ut ^ (~lt & rt)),
              (t[8] = k ^ (~p & y)),
              (t[9] = A ^ (~m & b)),
              (t[18] = R ^ (~S & O)),
              (t[19] = C ^ (~P & N)),
              (t[28] = K ^ (~j & F)),
              (t[29] = q ^ (~B & L)),
              (t[38] = Q ^ (~H & W)),
              (t[39] = tt ^ (~V & J)),
              (t[48] = ct ^ (~et & nt)),
              (t[49] = lt ^ (~rt & it)),
              (t[0] ^= g[n]),
              (t[1] ^= g[n + 1])
        }
        if (l) t.exports = N
        else {
          for (M = 0; M < x.length; ++M) u[x[M]] = N[x[M]]
          h &&
            (void 0 ===
              (o = function() {
                return N
              }.call(e, r, e, t)) ||
              (t.exports = o))
        }
      })()
    }.call(this, r(20), r(10)))
  },
  function(t, e, r) {
    'use strict'
    r.d(e, 'a', function() {
      return n
    })
    const n = 'random/5.5.1'
  },
  ,
  ,
  function(t, e) {
    t.exports = function(t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function() {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get: function() {
              return t.l
            },
          }),
          Object.defineProperty(t, 'id', {
            enumerable: !0,
            get: function() {
              return t.i
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      )
    }
  },
  function(t, e) {},
  function(t, e) {
    'function' == typeof Object.create
      ? (t.exports = function(t, e) {
          e &&
            ((t.super_ = e),
            (t.prototype = Object.create(e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })))
        })
      : (t.exports = function(t, e) {
          if (e) {
            t.super_ = e
            var r = function() {}
            ;(r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t)
          }
        })
  },
  function(t, e, r) {
    'use strict'
    ;(e.sha1 = r(30)),
      (e.sha224 = r(31)),
      (e.sha256 = r(18)),
      (e.sha384 = r(32)),
      (e.sha512 = r(19))
  },
  function(t, e, r) {
    'use strict'
    var n = r(7),
      i = r(12),
      o = r(17),
      s = n.rotl32,
      a = n.sum32,
      u = n.sum32_5,
      c = o.ft_1,
      l = i.BlockHash,
      h = [1518500249, 1859775393, 2400959708, 3395469782]
    function f() {
      if (!(this instanceof f)) return new f()
      l.call(this),
        (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
        (this.W = new Array(80))
    }
    n.inherits(f, l),
      (t.exports = f),
      (f.blockSize = 512),
      (f.outSize = 160),
      (f.hmacStrength = 80),
      (f.padLength = 64),
      (f.prototype._update = function(t, e) {
        for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n]
        for (; n < r.length; n++)
          r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1)
        var i = this.h[0],
          o = this.h[1],
          l = this.h[2],
          f = this.h[3],
          d = this.h[4]
        for (n = 0; n < r.length; n++) {
          var p = ~~(n / 20),
            m = u(s(i, 5), c(p, o, l, f), d, r[n], h[p])
          ;(d = f), (f = l), (l = s(o, 30)), (o = i), (i = m)
        }
        ;(this.h[0] = a(this.h[0], i)),
          (this.h[1] = a(this.h[1], o)),
          (this.h[2] = a(this.h[2], l)),
          (this.h[3] = a(this.h[3], f)),
          (this.h[4] = a(this.h[4], d))
      }),
      (f.prototype._digest = function(t) {
        return 'hex' === t ? n.toHex32(this.h, 'big') : n.split32(this.h, 'big')
      })
  },
  function(t, e, r) {
    'use strict'
    var n = r(7),
      i = r(18)
    function o() {
      if (!(this instanceof o)) return new o()
      i.call(this),
        (this.h = [
          3238371032,
          914150663,
          812702999,
          4144912697,
          4290775857,
          1750603025,
          1694076839,
          3204075428,
        ])
    }
    n.inherits(o, i),
      (t.exports = o),
      (o.blockSize = 512),
      (o.outSize = 224),
      (o.hmacStrength = 192),
      (o.padLength = 64),
      (o.prototype._digest = function(t) {
        return 'hex' === t
          ? n.toHex32(this.h.slice(0, 7), 'big')
          : n.split32(this.h.slice(0, 7), 'big')
      })
  },
  function(t, e, r) {
    'use strict'
    var n = r(7),
      i = r(19)
    function o() {
      if (!(this instanceof o)) return new o()
      i.call(this),
        (this.h = [
          3418070365,
          3238371032,
          1654270250,
          914150663,
          2438529370,
          812702999,
          355462360,
          4144912697,
          1731405415,
          4290775857,
          2394180231,
          1750603025,
          3675008525,
          1694076839,
          1203062813,
          3204075428,
        ])
    }
    n.inherits(o, i),
      (t.exports = o),
      (o.blockSize = 1024),
      (o.outSize = 384),
      (o.hmacStrength = 192),
      (o.padLength = 128),
      (o.prototype._digest = function(t) {
        return 'hex' === t
          ? n.toHex32(this.h.slice(0, 12), 'big')
          : n.split32(this.h.slice(0, 12), 'big')
      })
  },
  function(t, e, r) {
    'use strict'
    var n = r(7),
      i = r(12),
      o = n.rotl32,
      s = n.sum32,
      a = n.sum32_3,
      u = n.sum32_4,
      c = i.BlockHash
    function l() {
      if (!(this instanceof l)) return new l()
      c.call(this),
        (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
        (this.endian = 'little')
    }
    function h(t, e, r, n) {
      return t <= 15
        ? e ^ r ^ n
        : t <= 31
        ? (e & r) | (~e & n)
        : t <= 47
        ? (e | ~r) ^ n
        : t <= 63
        ? (e & n) | (r & ~n)
        : e ^ (r | ~n)
    }
    function f(t) {
      return t <= 15
        ? 0
        : t <= 31
        ? 1518500249
        : t <= 47
        ? 1859775393
        : t <= 63
        ? 2400959708
        : 2840853838
    }
    function d(t) {
      return t <= 15
        ? 1352829926
        : t <= 31
        ? 1548603684
        : t <= 47
        ? 1836072691
        : t <= 63
        ? 2053994217
        : 0
    }
    n.inherits(l, c),
      (e.ripemd160 = l),
      (l.blockSize = 512),
      (l.outSize = 160),
      (l.hmacStrength = 192),
      (l.padLength = 64),
      (l.prototype._update = function(t, e) {
        for (
          var r = this.h[0],
            n = this.h[1],
            i = this.h[2],
            c = this.h[3],
            l = this.h[4],
            b = r,
            v = n,
            w = i,
            E = c,
            _ = l,
            k = 0;
          k < 80;
          k++
        ) {
          var A = s(o(u(r, h(k, n, i, c), t[p[k] + e], f(k)), g[k]), l)
          ;(r = l),
            (l = c),
            (c = o(i, 10)),
            (i = n),
            (n = A),
            (A = s(o(u(b, h(79 - k, v, w, E), t[m[k] + e], d(k)), y[k]), _)),
            (b = _),
            (_ = E),
            (E = o(w, 10)),
            (w = v),
            (v = A)
        }
        ;(A = a(this.h[1], i, E)),
          (this.h[1] = a(this.h[2], c, _)),
          (this.h[2] = a(this.h[3], l, b)),
          (this.h[3] = a(this.h[4], r, v)),
          (this.h[4] = a(this.h[0], n, w)),
          (this.h[0] = A)
      }),
      (l.prototype._digest = function(t) {
        return 'hex' === t
          ? n.toHex32(this.h, 'little')
          : n.split32(this.h, 'little')
      })
    var p = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        7,
        4,
        13,
        1,
        10,
        6,
        15,
        3,
        12,
        0,
        9,
        5,
        2,
        14,
        11,
        8,
        3,
        10,
        14,
        4,
        9,
        15,
        8,
        1,
        2,
        7,
        0,
        6,
        13,
        11,
        5,
        12,
        1,
        9,
        11,
        10,
        0,
        8,
        12,
        4,
        13,
        3,
        7,
        15,
        14,
        5,
        6,
        2,
        4,
        0,
        5,
        9,
        7,
        12,
        2,
        10,
        14,
        1,
        3,
        8,
        11,
        6,
        15,
        13,
      ],
      m = [
        5,
        14,
        7,
        0,
        9,
        2,
        11,
        4,
        13,
        6,
        15,
        8,
        1,
        10,
        3,
        12,
        6,
        11,
        3,
        7,
        0,
        13,
        5,
        10,
        14,
        15,
        8,
        12,
        4,
        9,
        1,
        2,
        15,
        5,
        1,
        3,
        7,
        14,
        6,
        9,
        11,
        8,
        12,
        2,
        10,
        0,
        4,
        13,
        8,
        6,
        4,
        1,
        3,
        11,
        15,
        0,
        5,
        12,
        2,
        13,
        9,
        7,
        10,
        14,
        12,
        15,
        10,
        4,
        1,
        5,
        8,
        7,
        6,
        2,
        13,
        14,
        0,
        3,
        9,
        11,
      ],
      g = [
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8,
        7,
        6,
        8,
        13,
        11,
        9,
        7,
        15,
        7,
        12,
        15,
        9,
        11,
        7,
        13,
        12,
        11,
        13,
        6,
        7,
        14,
        9,
        13,
        15,
        14,
        8,
        13,
        6,
        5,
        12,
        7,
        5,
        11,
        12,
        14,
        15,
        14,
        15,
        9,
        8,
        9,
        14,
        5,
        6,
        8,
        6,
        5,
        12,
        9,
        15,
        5,
        11,
        6,
        8,
        13,
        12,
        5,
        12,
        13,
        14,
        11,
        8,
        5,
        6,
      ],
      y = [
        8,
        9,
        9,
        11,
        13,
        15,
        15,
        5,
        7,
        7,
        8,
        11,
        14,
        14,
        12,
        6,
        9,
        13,
        15,
        7,
        12,
        8,
        9,
        11,
        7,
        7,
        12,
        7,
        6,
        15,
        13,
        11,
        9,
        7,
        15,
        11,
        8,
        6,
        6,
        14,
        12,
        13,
        5,
        14,
        13,
        13,
        7,
        5,
        15,
        5,
        8,
        11,
        14,
        14,
        6,
        14,
        6,
        9,
        12,
        9,
        12,
        5,
        15,
        8,
        8,
        5,
        12,
        9,
        12,
        5,
        14,
        6,
        8,
        13,
        6,
        5,
        15,
        13,
        11,
        11,
      ]
  },
  function(t, e, r) {
    'use strict'
    var n = r(7),
      i = r(11)
    function o(t, e, r) {
      if (!(this instanceof o)) return new o(t, e, r)
      ;(this.Hash = t),
        (this.blockSize = t.blockSize / 8),
        (this.outSize = t.outSize / 8),
        (this.inner = null),
        (this.outer = null),
        this._init(n.toArray(e, r))
    }
    ;(t.exports = o),
      (o.prototype._init = function(t) {
        t.length > this.blockSize && (t = new this.Hash().update(t).digest()),
          i(t.length <= this.blockSize)
        for (var e = t.length; e < this.blockSize; e++) t.push(0)
        for (e = 0; e < t.length; e++) t[e] ^= 54
        for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++)
          t[e] ^= 106
        this.outer = new this.Hash().update(t)
      }),
      (o.prototype.update = function(t, e) {
        return this.inner.update(t, e), this
      }),
      (o.prototype.digest = function(t) {
        return this.outer.update(this.inner.digest()), this.outer.digest(t)
      })
  },
  function(t, e) {
    ;(function(e) {
      t.exports = e
    }.call(this, {}))
  },
  function(t, e, r) {
    ;(function(t) {
      var n =
          (void 0 !== t && t) || ('undefined' != typeof self && self) || window,
        i = Function.prototype.apply
      function o(t, e) {
        ;(this._id = t), (this._clearFn = e)
      }
      ;(e.setTimeout = function() {
        return new o(i.call(setTimeout, n, arguments), clearTimeout)
      }),
        (e.setInterval = function() {
          return new o(i.call(setInterval, n, arguments), clearInterval)
        }),
        (e.clearTimeout = e.clearInterval = function(t) {
          t && t.close()
        }),
        (o.prototype.unref = o.prototype.ref = function() {}),
        (o.prototype.close = function() {
          this._clearFn.call(n, this._id)
        }),
        (e.enroll = function(t, e) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = e)
        }),
        (e.unenroll = function(t) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1)
        }),
        (e._unrefActive = e.active = function(t) {
          clearTimeout(t._idleTimeoutId)
          var e = t._idleTimeout
          e >= 0 &&
            (t._idleTimeoutId = setTimeout(function() {
              t._onTimeout && t._onTimeout()
            }, e))
        }),
        r(37),
        (e.setImmediate =
          ('undefined' != typeof self && self.setImmediate) ||
          (void 0 !== t && t.setImmediate) ||
          (this && this.setImmediate)),
        (e.clearImmediate =
          ('undefined' != typeof self && self.clearImmediate) ||
          (void 0 !== t && t.clearImmediate) ||
          (this && this.clearImmediate))
    }.call(this, r(10)))
  },
  function(t, e, r) {
    ;(function(t, e) {
      !(function(t, r) {
        'use strict'
        if (!t.setImmediate) {
          var n,
            i,
            o,
            s,
            a,
            u = 1,
            c = {},
            l = !1,
            h = t.document,
            f = Object.getPrototypeOf && Object.getPrototypeOf(t)
          ;(f = f && f.setTimeout ? f : t),
            '[object process]' === {}.toString.call(t.process)
              ? (n = function(t) {
                  e.nextTick(function() {
                    p(t)
                  })
                })
              : !(function() {
                  if (t.postMessage && !t.importScripts) {
                    var e = !0,
                      r = t.onmessage
                    return (
                      (t.onmessage = function() {
                        e = !1
                      }),
                      t.postMessage('', '*'),
                      (t.onmessage = r),
                      e
                    )
                  }
                })()
              ? t.MessageChannel
                ? (((o = new MessageChannel()).port1.onmessage = function(t) {
                    p(t.data)
                  }),
                  (n = function(t) {
                    o.port2.postMessage(t)
                  }))
                : h && 'onreadystatechange' in h.createElement('script')
                ? ((i = h.documentElement),
                  (n = function(t) {
                    var e = h.createElement('script')
                    ;(e.onreadystatechange = function() {
                      p(t),
                        (e.onreadystatechange = null),
                        i.removeChild(e),
                        (e = null)
                    }),
                      i.appendChild(e)
                  }))
                : (n = function(t) {
                    setTimeout(p, 0, t)
                  })
              : ((s = 'setImmediate$' + Math.random() + '$'),
                (a = function(e) {
                  e.source === t &&
                    'string' == typeof e.data &&
                    0 === e.data.indexOf(s) &&
                    p(+e.data.slice(s.length))
                }),
                t.addEventListener
                  ? t.addEventListener('message', a, !1)
                  : t.attachEvent('onmessage', a),
                (n = function(e) {
                  t.postMessage(s + e, '*')
                })),
            (f.setImmediate = function(t) {
              'function' != typeof t && (t = new Function('' + t))
              for (
                var e = new Array(arguments.length - 1), r = 0;
                r < e.length;
                r++
              )
                e[r] = arguments[r + 1]
              var i = { callback: t, args: e }
              return (c[u] = i), n(u), u++
            }),
            (f.clearImmediate = d)
        }
        function d(t) {
          delete c[t]
        }
        function p(t) {
          if (l) setTimeout(p, 0, t)
          else {
            var e = c[t]
            if (e) {
              l = !0
              try {
                !(function(t) {
                  var e = t.callback,
                    r = t.args
                  switch (r.length) {
                    case 0:
                      e()
                      break
                    case 1:
                      e(r[0])
                      break
                    case 2:
                      e(r[0], r[1])
                      break
                    case 3:
                      e(r[0], r[1], r[2])
                      break
                    default:
                      e.apply(void 0, r)
                  }
                })(e)
              } finally {
                d(t), (l = !1)
              }
            }
          }
        }
      })('undefined' == typeof self ? (void 0 === t ? this : t) : self)
    }.call(this, r(10), r(20)))
  },
  function(t, e, r) {
    'use strict'
    r.r(e)
    var n = {}
    r.r(n),
      r.d(n, 'encode', function() {
        return q
      }),
      r.d(n, 'decode', function() {
        return W
      })
    var i = {}
    r.r(i),
      r.d(i, 'AddressZero', function() {
        return oi
      }),
      r.d(i, 'NegativeOne', function() {
        return xt
      }),
      r.d(i, 'Zero', function() {
        return Mt
      }),
      r.d(i, 'One', function() {
        return Tt
      }),
      r.d(i, 'Two', function() {
        return It
      }),
      r.d(i, 'WeiPerEther', function() {
        return Rt
      }),
      r.d(i, 'MaxUint256', function() {
        return Ct
      }),
      r.d(i, 'MinInt256', function() {
        return jt
      }),
      r.d(i, 'MaxInt256', function() {
        return Bt
      }),
      r.d(i, 'HashZero', function() {
        return si
      }),
      r.d(i, 'EtherSymbol', function() {
        return ai
      })
    var o = {}
    r.r(o),
      r.d(o, 'Provider', function() {
        return Se
      }),
      r.d(o, 'BaseProvider', function() {
        return bo
      }),
      r.d(o, 'Resolver', function() {
        return mo
      }),
      r.d(o, 'UrlJsonRpcProvider', function() {
        return Uo
      }),
      r.d(o, 'FallbackProvider', function() {
        return gs
      }),
      r.d(o, 'AlchemyProvider', function() {
        return Ko
      }),
      r.d(o, 'AlchemyWebSocketProvider', function() {
        return Go
      }),
      r.d(o, 'CloudflareProvider', function() {
        return Vo
      }),
      r.d(o, 'EtherscanProvider', function() {
        return ts
      }),
      r.d(o, 'InfuraProvider', function() {
        return Es
      }),
      r.d(o, 'InfuraWebSocketProvider', function() {
        return ws
      }),
      r.d(o, 'JsonRpcProvider', function() {
        return Mo
      }),
      r.d(o, 'JsonRpcBatchProvider', function() {
        return _s
      }),
      r.d(o, 'NodesmithProvider', function() {
        return As
      }),
      r.d(o, 'PocketProvider', function() {
        return Os
      }),
      r.d(o, 'StaticJsonRpcProvider', function() {
        return Lo
      }),
      r.d(o, 'Web3Provider', function() {
        return Ts
      }),
      r.d(o, 'WebSocketProvider', function() {
        return jo
      }),
      r.d(o, 'IpcProvider', function() {
        return ys
      }),
      r.d(o, 'JsonRpcSigner', function() {
        return Oo
      }),
      r.d(o, 'getDefaultProvider', function() {
        return Rs
      }),
      r.d(o, 'getNetwork', function() {
        return mi
      }),
      r.d(o, 'isCommunityResource', function() {
        return Ji
      }),
      r.d(o, 'isCommunityResourcable', function() {
        return Wi
      }),
      r.d(o, 'showThrottleMessage', function() {
        return Zi
      }),
      r.d(o, 'Formatter', function() {
        return Vi
      })
    var s = {}
    r.r(s),
      r.d(s, 'decode', function() {
        return Ii
      }),
      r.d(s, 'encode', function() {
        return Ri
      })
    var a = {}
    r.r(a),
      r.d(a, 'AbiCoder', function() {
        return fe
      }),
      r.d(a, 'defaultAbiCoder', function() {
        return de
      }),
      r.d(a, 'Fragment', function() {
        return Zt
      }),
      r.d(a, 'ConstructorFragment', function() {
        return ee
      }),
      r.d(a, 'ErrorFragment', function() {
        return ie
      }),
      r.d(a, 'EventFragment', function() {
        return Xt
      }),
      r.d(a, 'FunctionFragment', function() {
        return re
      }),
      r.d(a, 'ParamType', function() {
        return Jt
      }),
      r.d(a, 'FormatTypes', function() {
        return Vt
      }),
      r.d(a, 'checkResultErrors', function() {
        return C
      }),
      r.d(a, 'Logger', function() {
        return f.b
      }),
      r.d(a, 'RLP', function() {
        return n
      }),
      r.d(a, '_fetchData', function() {
        return Di
      }),
      r.d(a, 'fetchJson', function() {
        return zi
      }),
      r.d(a, 'poll', function() {
        return Gi
      }),
      r.d(a, 'checkProperties', function() {
        return O
      }),
      r.d(a, 'deepCopy', function() {
        return T
      }),
      r.d(a, 'defineReadOnly', function() {
        return A
      }),
      r.d(a, 'getStatic', function() {
        return S
      }),
      r.d(a, 'resolveProperties', function() {
        return P
      }),
      r.d(a, 'shallowCopy', function() {
        return N
      }),
      r.d(a, 'arrayify', function() {
        return c.a
      }),
      r.d(a, 'concat', function() {
        return c.b
      }),
      r.d(a, 'stripZeros', function() {
        return c.o
      }),
      r.d(a, 'zeroPad', function() {
        return c.p
      }),
      r.d(a, 'isBytes', function() {
        return c.j
      }),
      r.d(a, 'isBytesLike', function() {
        return c.k
      }),
      r.d(a, 'defaultPath', function() {
        return En
      }),
      r.d(a, 'HDNode', function() {
        return _n
      }),
      r.d(a, 'SigningKey', function() {
        return Be
      }),
      r.d(a, 'Interface', function() {
        return Ee
      }),
      r.d(a, 'LogDescription', function() {
        return me
      }),
      r.d(a, 'TransactionDescription', function() {
        return ge
      }),
      r.d(a, 'base58', function() {
        return Zr
      }),
      r.d(a, 'base64', function() {
        return s
      }),
      r.d(a, 'hexlify', function() {
        return c.i
      }),
      r.d(a, 'isHexString', function() {
        return c.l
      }),
      r.d(a, 'hexConcat', function() {
        return c.c
      }),
      r.d(a, 'hexStripZeros', function() {
        return c.f
      }),
      r.d(a, 'hexValue', function() {
        return c.g
      }),
      r.d(a, 'hexZeroPad', function() {
        return c.h
      }),
      r.d(a, 'hexDataLength', function() {
        return c.d
      }),
      r.d(a, 'hexDataSlice', function() {
        return c.e
      }),
      r.d(a, 'nameprep', function() {
        return Pi
      }),
      r.d(a, '_toEscapedUtf8String', function() {
        return dt
      }),
      r.d(a, 'toUtf8Bytes', function() {
        return ht
      }),
      r.d(a, 'toUtf8CodePoints', function() {
        return gt
      }),
      r.d(a, 'toUtf8String', function() {
        return mt
      }),
      r.d(a, 'Utf8ErrorFuncs', function() {
        return ct
      }),
      r.d(a, 'formatBytes32String', function() {
        return zs
      }),
      r.d(a, 'parseBytes32String', function() {
        return Gs
      }),
      r.d(a, 'hashMessage', function() {
        return Ir
      }),
      r.d(a, 'namehash', function() {
        return Ti
      }),
      r.d(a, 'isValidName', function() {
        return Mi
      }),
      r.d(a, 'id', function() {
        return yt
      }),
      r.d(a, '_TypedDataEncoder', function() {
        return Jr
      }),
      r.d(a, 'getAddress', function() {
        return tt
      }),
      r.d(a, 'getIcapAddress', function() {
        return rt
      }),
      r.d(a, 'getContractAddress', function() {
        return nt
      }),
      r.d(a, 'getCreate2Address', function() {
        return it
      }),
      r.d(a, 'isAddress', function() {
        return et
      }),
      r.d(a, 'formatEther', function() {
        return Js
      }),
      r.d(a, 'parseEther', function() {
        return $s
      }),
      r.d(a, 'formatUnits', function() {
        return Vs
      }),
      r.d(a, 'parseUnits', function() {
        return Ws
      }),
      r.d(a, 'commify', function() {
        return Hs
      }),
      r.d(a, 'computeHmac', function() {
        return on
      }),
      r.d(a, 'keccak256', function() {
        return D
      }),
      r.d(a, 'ripemd160', function() {
        return en
      }),
      r.d(a, 'sha256', function() {
        return rn
      }),
      r.d(a, 'sha512', function() {
        return nn
      }),
      r.d(a, 'randomBytes', function() {
        return Nn.a
      }),
      r.d(a, 'shuffled', function() {
        return es
      }),
      r.d(a, 'solidityPack', function() {
        return Ls
      }),
      r.d(a, 'solidityKeccak256', function() {
        return Us
      }),
      r.d(a, 'soliditySha256', function() {
        return Ds
      }),
      r.d(a, 'splitSignature', function() {
        return c.n
      }),
      r.d(a, 'joinSignature', function() {
        return c.m
      }),
      r.d(a, 'accessListify', function() {
        return $e
      }),
      r.d(a, 'parseTransaction', function() {
        return er
      }),
      r.d(a, 'serializeTransaction', function() {
        return Qe
      }),
      r.d(a, 'TransactionTypes', function() {
        return De
      }),
      r.d(a, 'getJsonWalletAddress', function() {
        return Xn
      }),
      r.d(a, 'computeAddress', function() {
        return He
      }),
      r.d(a, 'recoverAddress', function() {
        return Ve
      }),
      r.d(a, 'computePublicKey', function() {
        return Le
      }),
      r.d(a, 'recoverPublicKey', function() {
        return Fe
      }),
      r.d(a, 'verifyMessage', function() {
        return ni
      }),
      r.d(a, 'verifyTypedData', function() {
        return ii
      }),
      r.d(a, 'getAccountPath', function() {
        return On
      }),
      r.d(a, 'mnemonicToEntropy', function() {
        return An
      }),
      r.d(a, 'entropyToMnemonic', function() {
        return Sn
      }),
      r.d(a, 'isValidMnemonic', function() {
        return Pn
      }),
      r.d(a, 'mnemonicToSeed', function() {
        return kn
      }),
      r.d(a, 'SupportedAlgorithm', function() {
        return Xr
      }),
      r.d(a, 'UnicodeNormalizationForm', function() {
        return st
      }),
      r.d(a, 'Utf8ErrorReason', function() {
        return at
      }),
      r.d(a, 'Indexed', function() {
        return be
      })
    var u = {}
    r.r(u),
      r.d(u, 'Signer', function() {
        return Me
      }),
      r.d(u, 'Wallet', function() {
        return ri
      }),
      r.d(u, 'VoidSigner', function() {
        return Te
      }),
      r.d(u, 'getDefaultProvider', function() {
        return Rs
      }),
      r.d(u, 'providers', function() {
        return o
      }),
      r.d(u, 'BaseContract', function() {
        return gr
      }),
      r.d(u, 'Contract', function() {
        return yr
      }),
      r.d(u, 'ContractFactory', function() {
        return br
      }),
      r.d(u, 'BigNumber', function() {
        return y
      }),
      r.d(u, 'FixedNumber', function() {
        return xr
      }),
      r.d(u, 'constants', function() {
        return i
      }),
      r.d(u, 'errors', function() {
        return f.a
      }),
      r.d(u, 'logger', function() {
        return Xs
      }),
      r.d(u, 'utils', function() {
        return a
      }),
      r.d(u, 'wordlists', function() {
        return fn
      }),
      r.d(u, 'version', function() {
        return Zs
      }),
      r.d(u, 'Wordlist', function() {
        return un
      })
    var c = r(0),
      l = r(2),
      h = r.n(l),
      f = r(1)
    var d = h.a.BN
    const p = new f.b('bignumber/5.5.0'),
      m = {}
    let g = !1
    class y {
      constructor(t, e) {
        p.checkNew(new.target, y),
          t !== m &&
            p.throwError(
              'cannot call constructor directly; use BigNumber.from',
              f.b.errors.UNSUPPORTED_OPERATION,
              { operation: 'new (BigNumber)' },
            ),
          (this._hex = e),
          (this._isBigNumber = !0),
          Object.freeze(this)
      }
      fromTwos(t) {
        return v(w(this).fromTwos(t))
      }
      toTwos(t) {
        return v(w(this).toTwos(t))
      }
      abs() {
        return '-' === this._hex[0] ? y.from(this._hex.substring(1)) : this
      }
      add(t) {
        return v(w(this).add(w(t)))
      }
      sub(t) {
        return v(w(this).sub(w(t)))
      }
      div(t) {
        return (
          y.from(t).isZero() && E('division by zero', 'div'),
          v(w(this).div(w(t)))
        )
      }
      mul(t) {
        return v(w(this).mul(w(t)))
      }
      mod(t) {
        const e = w(t)
        return (
          e.isNeg() && E('cannot modulo negative values', 'mod'),
          v(w(this).umod(e))
        )
      }
      pow(t) {
        const e = w(t)
        return (
          e.isNeg() && E('cannot raise to negative values', 'pow'),
          v(w(this).pow(e))
        )
      }
      and(t) {
        const e = w(t)
        return (
          (this.isNegative() || e.isNeg()) &&
            E("cannot 'and' negative values", 'and'),
          v(w(this).and(e))
        )
      }
      or(t) {
        const e = w(t)
        return (
          (this.isNegative() || e.isNeg()) &&
            E("cannot 'or' negative values", 'or'),
          v(w(this).or(e))
        )
      }
      xor(t) {
        const e = w(t)
        return (
          (this.isNegative() || e.isNeg()) &&
            E("cannot 'xor' negative values", 'xor'),
          v(w(this).xor(e))
        )
      }
      mask(t) {
        return (
          (this.isNegative() || t < 0) &&
            E('cannot mask negative values', 'mask'),
          v(w(this).maskn(t))
        )
      }
      shl(t) {
        return (
          (this.isNegative() || t < 0) &&
            E('cannot shift negative values', 'shl'),
          v(w(this).shln(t))
        )
      }
      shr(t) {
        return (
          (this.isNegative() || t < 0) &&
            E('cannot shift negative values', 'shr'),
          v(w(this).shrn(t))
        )
      }
      eq(t) {
        return w(this).eq(w(t))
      }
      lt(t) {
        return w(this).lt(w(t))
      }
      lte(t) {
        return w(this).lte(w(t))
      }
      gt(t) {
        return w(this).gt(w(t))
      }
      gte(t) {
        return w(this).gte(w(t))
      }
      isNegative() {
        return '-' === this._hex[0]
      }
      isZero() {
        return w(this).isZero()
      }
      toNumber() {
        try {
          return w(this).toNumber()
        } catch (t) {
          E('overflow', 'toNumber', this.toString())
        }
        return null
      }
      toBigInt() {
        try {
          return BigInt(this.toString())
        } catch (t) {}
        return p.throwError(
          'this platform does not support BigInt',
          f.b.errors.UNSUPPORTED_OPERATION,
          { value: this.toString() },
        )
      }
      toString() {
        return (
          arguments.length > 0 &&
            (10 === arguments[0]
              ? g ||
                ((g = !0),
                p.warn(
                  'BigNumber.toString does not accept any parameters; base-10 is assumed',
                ))
              : 16 === arguments[0]
              ? p.throwError(
                  'BigNumber.toString does not accept any parameters; use bigNumber.toHexString()',
                  f.b.errors.UNEXPECTED_ARGUMENT,
                  {},
                )
              : p.throwError(
                  'BigNumber.toString does not accept parameters',
                  f.b.errors.UNEXPECTED_ARGUMENT,
                  {},
                )),
          w(this).toString(10)
        )
      }
      toHexString() {
        return this._hex
      }
      toJSON(t) {
        return { type: 'BigNumber', hex: this.toHexString() }
      }
      static from(t) {
        if (t instanceof y) return t
        if ('string' == typeof t)
          return t.match(/^-?0x[0-9a-f]+$/i)
            ? new y(m, b(t))
            : t.match(/^-?[0-9]+$/)
            ? new y(m, b(new d(t)))
            : p.throwArgumentError('invalid BigNumber string', 'value', t)
        if ('number' == typeof t)
          return (
            t % 1 && E('underflow', 'BigNumber.from', t),
            (t >= 9007199254740991 || t <= -9007199254740991) &&
              E('overflow', 'BigNumber.from', t),
            y.from(String(t))
          )
        const e = t
        if ('bigint' == typeof e) return y.from(e.toString())
        if (Object(c.j)(e)) return y.from(Object(c.i)(e))
        if (e)
          if (e.toHexString) {
            const t = e.toHexString()
            if ('string' == typeof t) return y.from(t)
          } else {
            let t = e._hex
            if (
              (null == t && 'BigNumber' === e.type && (t = e.hex),
              'string' == typeof t &&
                (Object(c.l)(t) ||
                  ('-' === t[0] && Object(c.l)(t.substring(1)))))
            )
              return y.from(t)
          }
        return p.throwArgumentError('invalid BigNumber value', 'value', t)
      }
      static isBigNumber(t) {
        return !(!t || !t._isBigNumber)
      }
    }
    function b(t) {
      if ('string' != typeof t) return b(t.toString(16))
      if ('-' === t[0])
        return (
          '-' === (t = t.substring(1))[0] &&
            p.throwArgumentError('invalid hex', 'value', t),
          '0x00' === (t = b(t)) ? t : '-' + t
        )
      if (('0x' !== t.substring(0, 2) && (t = '0x' + t), '0x' === t))
        return '0x00'
      for (
        t.length % 2 && (t = '0x0' + t.substring(2));
        t.length > 4 && '0x00' === t.substring(0, 4);

      )
        t = '0x' + t.substring(4)
      return t
    }
    function v(t) {
      return y.from(b(t))
    }
    function w(t) {
      const e = y.from(t).toHexString()
      return '-' === e[0]
        ? new d('-' + e.substring(3), 16)
        : new d(e.substring(2), 16)
    }
    function E(t, e, r) {
      const n = { fault: t, operation: e }
      return (
        null != r && (n.value = r), p.throwError(t, f.b.errors.NUMERIC_FAULT, n)
      )
    }
    var _ = function(t, e, r, n) {
      return new (r || (r = Promise))(function(i, o) {
        function s(t) {
          try {
            u(n.next(t))
          } catch (t) {
            o(t)
          }
        }
        function a(t) {
          try {
            u(n.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function(t) {
                    t(e)
                  })).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
      })
    }
    const k = new f.b('properties/5.5.0')
    function A(t, e, r) {
      Object.defineProperty(t, e, { enumerable: !0, value: r, writable: !1 })
    }
    function S(t, e) {
      for (let r = 0; r < 32; r++) {
        if (t[e]) return t[e]
        if (!t.prototype || 'object' != typeof t.prototype) break
        t = Object.getPrototypeOf(t.prototype).constructor
      }
      return null
    }
    function P(t) {
      return _(this, void 0, void 0, function*() {
        const e = Object.keys(t).map(e => {
          const r = t[e]
          return Promise.resolve(r).then(t => ({ key: e, value: t }))
        })
        return (yield Promise.all(e)).reduce(
          (t, e) => ((t[e.key] = e.value), t),
          {},
        )
      })
    }
    function O(t, e) {
      ;(t && 'object' == typeof t) ||
        k.throwArgumentError('invalid object', 'object', t),
        Object.keys(t).forEach(r => {
          e[r] ||
            k.throwArgumentError(
              'invalid object key - ' + r,
              'transaction:' + r,
              t,
            )
        })
    }
    function N(t) {
      const e = {}
      for (const r in t) e[r] = t[r]
      return e
    }
    const x = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 }
    function M(t) {
      if (
        (function t(e) {
          if (null == e || x[typeof e]) return !0
          if (Array.isArray(e) || 'object' == typeof e) {
            if (!Object.isFrozen(e)) return !1
            const r = Object.keys(e)
            for (let n = 0; n < r.length; n++) {
              let i = null
              try {
                i = e[r[n]]
              } catch (t) {
                continue
              }
              if (!t(i)) return !1
            }
            return !0
          }
          return k.throwArgumentError(
            'Cannot deepCopy ' + typeof e,
            'object',
            e,
          )
        })(t)
      )
        return t
      if (Array.isArray(t)) return Object.freeze(t.map(t => T(t)))
      if ('object' == typeof t) {
        const e = {}
        for (const r in t) {
          const n = t[r]
          void 0 !== n && A(e, r, T(n))
        }
        return e
      }
      return k.throwArgumentError('Cannot deepCopy ' + typeof t, 'object', t)
    }
    function T(t) {
      return M(t)
    }
    class I {
      constructor(t) {
        for (const e in t) this[e] = T(t[e])
      }
    }
    const R = new f.b('abi/5.5.0')
    function C(t) {
      const e = [],
        r = function(t, n) {
          if (Array.isArray(n))
            for (let i in n) {
              const o = t.slice()
              o.push(i)
              try {
                r(o, n[i])
              } catch (t) {
                e.push({ path: o, error: t })
              }
            }
        }
      return r([], t), e
    }
    class j {
      constructor(t, e, r, n) {
        ;(this.name = t),
          (this.type = e),
          (this.localName = r),
          (this.dynamic = n)
      }
      _throwError(t, e) {
        R.throwArgumentError(t, this.localName, e)
      }
    }
    class B {
      constructor(t) {
        A(this, 'wordSize', t || 32),
          (this._data = []),
          (this._dataLength = 0),
          (this._padding = new Uint8Array(t))
      }
      get data() {
        return Object(c.c)(this._data)
      }
      get length() {
        return this._dataLength
      }
      _writeData(t) {
        return this._data.push(t), (this._dataLength += t.length), t.length
      }
      appendWriter(t) {
        return this._writeData(Object(c.b)(t._data))
      }
      writeBytes(t) {
        let e = Object(c.a)(t)
        const r = e.length % this.wordSize
        return (
          r && (e = Object(c.b)([e, this._padding.slice(r)])),
          this._writeData(e)
        )
      }
      _getValue(t) {
        let e = Object(c.a)(y.from(t))
        return (
          e.length > this.wordSize &&
            R.throwError('value out-of-bounds', f.b.errors.BUFFER_OVERRUN, {
              length: this.wordSize,
              offset: e.length,
            }),
          e.length % this.wordSize &&
            (e = Object(c.b)([
              this._padding.slice(e.length % this.wordSize),
              e,
            ])),
          e
        )
      }
      writeValue(t) {
        return this._writeData(this._getValue(t))
      }
      writeUpdatableValue() {
        const t = this._data.length
        return (
          this._data.push(this._padding),
          (this._dataLength += this.wordSize),
          e => {
            this._data[t] = this._getValue(e)
          }
        )
      }
    }
    class F {
      constructor(t, e, r, n) {
        A(this, '_data', Object(c.a)(t)),
          A(this, 'wordSize', e || 32),
          A(this, '_coerceFunc', r),
          A(this, 'allowLoose', n),
          (this._offset = 0)
      }
      get data() {
        return Object(c.i)(this._data)
      }
      get consumed() {
        return this._offset
      }
      static coerce(t, e) {
        let r = t.match('^u?int([0-9]+)$')
        return r && parseInt(r[1]) <= 48 && (e = e.toNumber()), e
      }
      coerce(t, e) {
        return this._coerceFunc ? this._coerceFunc(t, e) : F.coerce(t, e)
      }
      _peekBytes(t, e, r) {
        let n = Math.ceil(e / this.wordSize) * this.wordSize
        return (
          this._offset + n > this._data.length &&
            (this.allowLoose && r && this._offset + e <= this._data.length
              ? (n = e)
              : R.throwError('data out-of-bounds', f.b.errors.BUFFER_OVERRUN, {
                  length: this._data.length,
                  offset: this._offset + n,
                })),
          this._data.slice(this._offset, this._offset + n)
        )
      }
      subReader(t) {
        return new F(
          this._data.slice(this._offset + t),
          this.wordSize,
          this._coerceFunc,
          this.allowLoose,
        )
      }
      readBytes(t, e) {
        let r = this._peekBytes(0, t, !!e)
        return (this._offset += r.length), r.slice(0, t)
      }
      readValue() {
        return y.from(this.readBytes(this.wordSize))
      }
    }
    var L = r(22),
      U = r.n(L)
    function D(t) {
      return '0x' + U.a.keccak_256(Object(c.a)(t))
    }
    const z = new f.b('rlp/5.5.0')
    function G(t) {
      const e = []
      for (; t; ) e.unshift(255 & t), (t >>= 8)
      return e
    }
    function K(t, e, r) {
      let n = 0
      for (let i = 0; i < r; i++) n = 256 * n + t[e + i]
      return n
    }
    function q(t) {
      return Object(c.i)(
        (function t(e) {
          if (Array.isArray(e)) {
            let r = []
            if (
              (e.forEach(function(e) {
                r = r.concat(t(e))
              }),
              r.length <= 55)
            )
              return r.unshift(192 + r.length), r
            const n = G(r.length)
            return n.unshift(247 + n.length), n.concat(r)
          }
          Object(c.k)(e) ||
            z.throwArgumentError('RLP object must be BytesLike', 'object', e)
          const r = Array.prototype.slice.call(Object(c.a)(e))
          if (1 === r.length && r[0] <= 127) return r
          if (r.length <= 55) return r.unshift(128 + r.length), r
          const n = G(r.length)
          return n.unshift(183 + n.length), n.concat(r)
        })(t),
      )
    }
    function H(t, e, r, n) {
      const i = []
      for (; r < e + 1 + n; ) {
        const o = V(t, r)
        i.push(o.result),
          (r += o.consumed) > e + 1 + n &&
            z.throwError('child data too short', f.b.errors.BUFFER_OVERRUN, {})
      }
      return { consumed: 1 + n, result: i }
    }
    function V(t, e) {
      if (
        (0 === t.length &&
          z.throwError('data too short', f.b.errors.BUFFER_OVERRUN, {}),
        t[e] >= 248)
      ) {
        const r = t[e] - 247
        e + 1 + r > t.length &&
          z.throwError(
            'data short segment too short',
            f.b.errors.BUFFER_OVERRUN,
            {},
          )
        const n = K(t, e + 1, r)
        return (
          e + 1 + r + n > t.length &&
            z.throwError(
              'data long segment too short',
              f.b.errors.BUFFER_OVERRUN,
              {},
            ),
          H(t, e, e + 1 + r, r + n)
        )
      }
      if (t[e] >= 192) {
        const r = t[e] - 192
        return (
          e + 1 + r > t.length &&
            z.throwError('data array too short', f.b.errors.BUFFER_OVERRUN, {}),
          H(t, e, e + 1, r)
        )
      }
      if (t[e] >= 184) {
        const r = t[e] - 183
        e + 1 + r > t.length &&
          z.throwError('data array too short', f.b.errors.BUFFER_OVERRUN, {})
        const n = K(t, e + 1, r)
        e + 1 + r + n > t.length &&
          z.throwError('data array too short', f.b.errors.BUFFER_OVERRUN, {})
        return {
          consumed: 1 + r + n,
          result: Object(c.i)(t.slice(e + 1 + r, e + 1 + r + n)),
        }
      }
      if (t[e] >= 128) {
        const r = t[e] - 128
        e + 1 + r > t.length &&
          z.throwError('data too short', f.b.errors.BUFFER_OVERRUN, {})
        return {
          consumed: 1 + r,
          result: Object(c.i)(t.slice(e + 1, e + 1 + r)),
        }
      }
      return { consumed: 1, result: Object(c.i)(t[e]) }
    }
    function W(t) {
      const e = Object(c.a)(t),
        r = V(e, 0)
      return (
        r.consumed !== e.length &&
          z.throwArgumentError('invalid rlp data', 'data', t),
        r.result
      )
    }
    const J = new f.b('address/5.5.0')
    function $(t) {
      Object(c.l)(t, 20) ||
        J.throwArgumentError('invalid address', 'address', t)
      const e = (t = t.toLowerCase()).substring(2).split(''),
        r = new Uint8Array(40)
      for (let t = 0; t < 40; t++) r[t] = e[t].charCodeAt(0)
      const n = Object(c.a)(D(r))
      for (let t = 0; t < 40; t += 2)
        n[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()),
          (15 & n[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase())
      return '0x' + e.join('')
    }
    const Z = {}
    for (let t = 0; t < 10; t++) Z[String(t)] = String(t)
    for (let t = 0; t < 26; t++) Z[String.fromCharCode(65 + t)] = String(10 + t)
    const X = Math.floor(
      ((Y = 9007199254740991),
      Math.log10 ? Math.log10(Y) : Math.log(Y) / Math.LN10),
    )
    var Y
    function Q(t) {
      let e = (t =
        (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + '00')
        .split('')
        .map(t => Z[t])
        .join('')
      for (; e.length >= X; ) {
        let t = e.substring(0, X)
        e = (parseInt(t, 10) % 97) + e.substring(t.length)
      }
      let r = String(98 - (parseInt(e, 10) % 97))
      for (; r.length < 2; ) r = '0' + r
      return r
    }
    function tt(t) {
      let e = null
      if (
        ('string' != typeof t &&
          J.throwArgumentError('invalid address', 'address', t),
        t.match(/^(0x)?[0-9a-fA-F]{40}$/))
      )
        '0x' !== t.substring(0, 2) && (t = '0x' + t),
          (e = $(t)),
          t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
            e !== t &&
            J.throwArgumentError('bad address checksum', 'address', t)
      else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
        for (
          t.substring(2, 4) !== Q(t) &&
            J.throwArgumentError('bad icap checksum', 'address', t),
            r = t.substring(4),
            e = new d(r, 36).toString(16);
          e.length < 40;

        )
          e = '0' + e
        e = $('0x' + e)
      } else J.throwArgumentError('invalid address', 'address', t)
      var r
      return e
    }
    function et(t) {
      try {
        return tt(t), !0
      } catch (t) {}
      return !1
    }
    function rt(t) {
      let e = ((r = tt(t).substring(2)),
      new d(r, 16).toString(36)).toUpperCase()
      for (var r; e.length < 30; ) e = '0' + e
      return 'XE' + Q('XE00' + e) + e
    }
    function nt(t) {
      let e = null
      try {
        e = tt(t.from)
      } catch (e) {
        J.throwArgumentError('missing from address', 'transaction', t)
      }
      const r = Object(c.o)(Object(c.a)(y.from(t.nonce).toHexString()))
      return tt(Object(c.e)(D(q([e, r])), 12))
    }
    function it(t, e, r) {
      return (
        32 !== Object(c.d)(e) &&
          J.throwArgumentError('salt must be 32 bytes', 'salt', e),
        32 !== Object(c.d)(r) &&
          J.throwArgumentError(
            'initCodeHash must be 32 bytes',
            'initCodeHash',
            r,
          ),
        tt(Object(c.e)(D(Object(c.b)(['0xff', tt(t), e, r])), 12))
      )
    }
    const ot = new f.b('strings/5.5.0')
    var st, at
    function ut(t, e, r, n, i) {
      if (t === at.BAD_PREFIX || t === at.UNEXPECTED_CONTINUE) {
        let t = 0
        for (let n = e + 1; n < r.length && r[n] >> 6 == 2; n++) t++
        return t
      }
      return t === at.OVERRUN ? r.length - e - 1 : 0
    }
    !(function(t) {
      ;(t.current = ''),
        (t.NFC = 'NFC'),
        (t.NFD = 'NFD'),
        (t.NFKC = 'NFKC'),
        (t.NFKD = 'NFKD')
    })(st || (st = {})),
      (function(t) {
        ;(t.UNEXPECTED_CONTINUE = 'unexpected continuation byte'),
          (t.BAD_PREFIX = 'bad codepoint prefix'),
          (t.OVERRUN = 'string overrun'),
          (t.MISSING_CONTINUE = 'missing continuation byte'),
          (t.OUT_OF_RANGE = 'out of UTF-8 range'),
          (t.UTF16_SURROGATE = 'UTF-16 surrogate'),
          (t.OVERLONG = 'overlong representation')
      })(at || (at = {}))
    const ct = Object.freeze({
      error: function(t, e, r, n, i) {
        return ot.throwArgumentError(
          `invalid codepoint at offset ${e}; ${t}`,
          'bytes',
          r,
        )
      },
      ignore: ut,
      replace: function(t, e, r, n, i) {
        return t === at.OVERLONG ? (n.push(i), 0) : (n.push(65533), ut(t, e, r))
      },
    })
    function lt(t, e) {
      null == e && (e = ct.error), (t = Object(c.a)(t))
      const r = []
      let n = 0
      for (; n < t.length; ) {
        const i = t[n++]
        if (i >> 7 == 0) {
          r.push(i)
          continue
        }
        let o = null,
          s = null
        if (192 == (224 & i)) (o = 1), (s = 127)
        else if (224 == (240 & i)) (o = 2), (s = 2047)
        else {
          if (240 != (248 & i)) {
            n += e(
              128 == (192 & i) ? at.UNEXPECTED_CONTINUE : at.BAD_PREFIX,
              n - 1,
              t,
              r,
            )
            continue
          }
          ;(o = 3), (s = 65535)
        }
        if (n - 1 + o >= t.length) {
          n += e(at.OVERRUN, n - 1, t, r)
          continue
        }
        let a = i & ((1 << (8 - o - 1)) - 1)
        for (let i = 0; i < o; i++) {
          let i = t[n]
          if (128 != (192 & i)) {
            ;(n += e(at.MISSING_CONTINUE, n, t, r)), (a = null)
            break
          }
          ;(a = (a << 6) | (63 & i)), n++
        }
        null !== a &&
          (a > 1114111
            ? (n += e(at.OUT_OF_RANGE, n - 1 - o, t, r, a))
            : a >= 55296 && a <= 57343
            ? (n += e(at.UTF16_SURROGATE, n - 1 - o, t, r, a))
            : a <= s
            ? (n += e(at.OVERLONG, n - 1 - o, t, r, a))
            : r.push(a))
      }
      return r
    }
    function ht(t, e = st.current) {
      e != st.current && (ot.checkNormalize(), (t = t.normalize(e)))
      let r = []
      for (let e = 0; e < t.length; e++) {
        const n = t.charCodeAt(e)
        if (n < 128) r.push(n)
        else if (n < 2048) r.push((n >> 6) | 192), r.push((63 & n) | 128)
        else if (55296 == (64512 & n)) {
          e++
          const i = t.charCodeAt(e)
          if (e >= t.length || 56320 != (64512 & i))
            throw new Error('invalid utf-8 string')
          const o = 65536 + ((1023 & n) << 10) + (1023 & i)
          r.push((o >> 18) | 240),
            r.push(((o >> 12) & 63) | 128),
            r.push(((o >> 6) & 63) | 128),
            r.push((63 & o) | 128)
        } else
          r.push((n >> 12) | 224),
            r.push(((n >> 6) & 63) | 128),
            r.push((63 & n) | 128)
      }
      return Object(c.a)(r)
    }
    function ft(t) {
      const e = '0000' + t.toString(16)
      return '\\u' + e.substring(e.length - 4)
    }
    function dt(t, e) {
      return (
        '"' +
        lt(t, e)
          .map(t => {
            if (t < 256) {
              switch (t) {
                case 8:
                  return '\\b'
                case 9:
                  return '\\t'
                case 10:
                  return '\\n'
                case 13:
                  return '\\r'
                case 34:
                  return '\\"'
                case 92:
                  return '\\\\'
              }
              if (t >= 32 && t < 127) return String.fromCharCode(t)
            }
            return t <= 65535
              ? ft(t)
              : ft(55296 + (((t -= 65536) >> 10) & 1023)) +
                  ft(56320 + (1023 & t))
          })
          .join('') +
        '"'
      )
    }
    function pt(t) {
      return t
        .map(t =>
          t <= 65535
            ? String.fromCharCode(t)
            : ((t -= 65536),
              String.fromCharCode(
                55296 + ((t >> 10) & 1023),
                56320 + (1023 & t),
              )),
        )
        .join('')
    }
    function mt(t, e) {
      return pt(lt(t, e))
    }
    function gt(t, e = st.current) {
      return lt(ht(t, e))
    }
    function yt(t) {
      return D(ht(t))
    }
    class bt extends j {
      constructor(t) {
        super('address', 'address', t, !1)
      }
      defaultValue() {
        return '0x0000000000000000000000000000000000000000'
      }
      encode(t, e) {
        try {
          e = tt(e)
        } catch (t) {
          this._throwError(t.message, e)
        }
        return t.writeValue(e)
      }
      decode(t) {
        return tt(Object(c.h)(t.readValue().toHexString(), 20))
      }
    }
    class vt extends j {
      constructor(t) {
        super(t.name, t.type, void 0, t.dynamic), (this.coder = t)
      }
      defaultValue() {
        return this.coder.defaultValue()
      }
      encode(t, e) {
        return this.coder.encode(t, e)
      }
      decode(t) {
        return this.coder.decode(t)
      }
    }
    const wt = new f.b('abi/5.5.0')
    function Et(t, e, r) {
      let n = null
      if (Array.isArray(r)) n = r
      else if (r && 'object' == typeof r) {
        let t = {}
        n = e.map(e => {
          const n = e.localName
          return (
            n ||
              wt.throwError(
                'cannot encode object for signature with missing names',
                f.b.errors.INVALID_ARGUMENT,
                { argument: 'values', coder: e, value: r },
              ),
            t[n] &&
              wt.throwError(
                'cannot encode object for signature with duplicate names',
                f.b.errors.INVALID_ARGUMENT,
                { argument: 'values', coder: e, value: r },
              ),
            (t[n] = !0),
            r[n]
          )
        })
      } else wt.throwArgumentError('invalid tuple value', 'tuple', r)
      e.length !== n.length &&
        wt.throwArgumentError('types/value length mismatch', 'tuple', r)
      let i = new B(t.wordSize),
        o = new B(t.wordSize),
        s = []
      e.forEach((t, e) => {
        let r = n[e]
        if (t.dynamic) {
          let e = o.length
          t.encode(o, r)
          let n = i.writeUpdatableValue()
          s.push(t => {
            n(t + e)
          })
        } else t.encode(i, r)
      }),
        s.forEach(t => {
          t(i.length)
        })
      let a = t.appendWriter(i)
      return (a += t.appendWriter(o)), a
    }
    function _t(t, e) {
      let r = [],
        n = t.subReader(0)
      e.forEach(e => {
        let i = null
        if (e.dynamic) {
          let r = t.readValue(),
            o = n.subReader(r.toNumber())
          try {
            i = e.decode(o)
          } catch (t) {
            if (t.code === f.b.errors.BUFFER_OVERRUN) throw t
            ;(i = t),
              (i.baseType = e.name),
              (i.name = e.localName),
              (i.type = e.type)
          }
        } else
          try {
            i = e.decode(t)
          } catch (t) {
            if (t.code === f.b.errors.BUFFER_OVERRUN) throw t
            ;(i = t),
              (i.baseType = e.name),
              (i.name = e.localName),
              (i.type = e.type)
          }
        null != i && r.push(i)
      })
      const i = e.reduce((t, e) => {
        const r = e.localName
        return r && (t[r] || (t[r] = 0), t[r]++), t
      }, {})
      e.forEach((t, e) => {
        let n = t.localName
        if (!n || 1 !== i[n]) return
        if (('length' === n && (n = '_length'), null != r[n])) return
        const o = r[e]
        o instanceof Error
          ? Object.defineProperty(r, n, {
              enumerable: !0,
              get: () => {
                throw o
              },
            })
          : (r[n] = o)
      })
      for (let t = 0; t < r.length; t++) {
        const e = r[t]
        e instanceof Error &&
          Object.defineProperty(r, t, {
            enumerable: !0,
            get: () => {
              throw e
            },
          })
      }
      return Object.freeze(r)
    }
    class kt extends j {
      constructor(t, e, r) {
        super(
          'array',
          t.type + '[' + (e >= 0 ? e : '') + ']',
          r,
          -1 === e || t.dynamic,
        ),
          (this.coder = t),
          (this.length = e)
      }
      defaultValue() {
        const t = this.coder.defaultValue(),
          e = []
        for (let r = 0; r < this.length; r++) e.push(t)
        return e
      }
      encode(t, e) {
        Array.isArray(e) || this._throwError('expected array value', e)
        let r = this.length
        ;-1 === r && ((r = e.length), t.writeValue(e.length)),
          wt.checkArgumentCount(
            e.length,
            r,
            'coder array' + (this.localName ? ' ' + this.localName : ''),
          )
        let n = []
        for (let t = 0; t < e.length; t++) n.push(this.coder)
        return Et(t, n, e)
      }
      decode(t) {
        let e = this.length
        ;-1 === e &&
          ((e = t.readValue().toNumber()),
          32 * e > t._data.length &&
            wt.throwError(
              'insufficient data length',
              f.b.errors.BUFFER_OVERRUN,
              { length: t._data.length, count: e },
            ))
        let r = []
        for (let t = 0; t < e; t++) r.push(new vt(this.coder))
        return t.coerce(this.name, _t(t, r))
      }
    }
    class At extends j {
      constructor(t) {
        super('bool', 'bool', t, !1)
      }
      defaultValue() {
        return !1
      }
      encode(t, e) {
        return t.writeValue(e ? 1 : 0)
      }
      decode(t) {
        return t.coerce(this.type, !t.readValue().isZero())
      }
    }
    class St extends j {
      constructor(t, e) {
        super(t, t, e, !0)
      }
      defaultValue() {
        return '0x'
      }
      encode(t, e) {
        e = Object(c.a)(e)
        let r = t.writeValue(e.length)
        return (r += t.writeBytes(e)), r
      }
      decode(t) {
        return t.readBytes(t.readValue().toNumber(), !0)
      }
    }
    class Pt extends St {
      constructor(t) {
        super('bytes', t)
      }
      decode(t) {
        return t.coerce(this.name, Object(c.i)(super.decode(t)))
      }
    }
    class Ot extends j {
      constructor(t, e) {
        let r = 'bytes' + String(t)
        super(r, r, e, !1), (this.size = t)
      }
      defaultValue() {
        return '0x0000000000000000000000000000000000000000000000000000000000000000'.substring(
          0,
          2 + 2 * this.size,
        )
      }
      encode(t, e) {
        let r = Object(c.a)(e)
        return (
          r.length !== this.size &&
            this._throwError('incorrect data length', e),
          t.writeBytes(r)
        )
      }
      decode(t) {
        return t.coerce(this.name, Object(c.i)(t.readBytes(this.size)))
      }
    }
    class Nt extends j {
      constructor(t) {
        super('null', '', t, !1)
      }
      defaultValue() {
        return null
      }
      encode(t, e) {
        return null != e && this._throwError('not null', e), t.writeBytes([])
      }
      decode(t) {
        return t.readBytes(0), t.coerce(this.name, null)
      }
    }
    const xt = y.from(-1),
      Mt = y.from(0),
      Tt = y.from(1),
      It = y.from(2),
      Rt = y.from('1000000000000000000'),
      Ct = y.from(
        '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      ),
      jt = y.from(
        '-0x8000000000000000000000000000000000000000000000000000000000000000',
      ),
      Bt = y.from(
        '0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      )
    class Ft extends j {
      constructor(t, e, r) {
        const n = (e ? 'int' : 'uint') + 8 * t
        super(n, n, r, !1), (this.size = t), (this.signed = e)
      }
      defaultValue() {
        return 0
      }
      encode(t, e) {
        let r = y.from(e),
          n = Ct.mask(8 * t.wordSize)
        if (this.signed) {
          let t = n.mask(8 * this.size - 1)
          ;(r.gt(t) || r.lt(t.add(Tt).mul(xt))) &&
            this._throwError('value out-of-bounds', e)
        } else
          (r.lt(Mt) || r.gt(n.mask(8 * this.size))) &&
            this._throwError('value out-of-bounds', e)
        return (
          (r = r.toTwos(8 * this.size).mask(8 * this.size)),
          this.signed && (r = r.fromTwos(8 * this.size).toTwos(8 * t.wordSize)),
          t.writeValue(r)
        )
      }
      decode(t) {
        let e = t.readValue().mask(8 * this.size)
        return (
          this.signed && (e = e.fromTwos(8 * this.size)), t.coerce(this.name, e)
        )
      }
    }
    class Lt extends St {
      constructor(t) {
        super('string', t)
      }
      defaultValue() {
        return ''
      }
      encode(t, e) {
        return super.encode(t, ht(e))
      }
      decode(t) {
        return mt(super.decode(t))
      }
    }
    class Ut extends j {
      constructor(t, e) {
        let r = !1
        const n = []
        t.forEach(t => {
          t.dynamic && (r = !0), n.push(t.type)
        })
        super('tuple', 'tuple(' + n.join(',') + ')', e, r), (this.coders = t)
      }
      defaultValue() {
        const t = []
        this.coders.forEach(e => {
          t.push(e.defaultValue())
        })
        const e = this.coders.reduce((t, e) => {
          const r = e.localName
          return r && (t[r] || (t[r] = 0), t[r]++), t
        }, {})
        return (
          this.coders.forEach((r, n) => {
            let i = r.localName
            i &&
              1 === e[i] &&
              ('length' === i && (i = '_length'), null == t[i] && (t[i] = t[n]))
          }),
          Object.freeze(t)
        )
      }
      encode(t, e) {
        return Et(t, this.coders, e)
      }
      decode(t) {
        return t.coerce(this.name, _t(t, this.coders))
      }
    }
    const Dt = new f.b('abi/5.5.0'),
      zt = {}
    let Gt = { calldata: !0, memory: !0, storage: !0 },
      Kt = { calldata: !0, memory: !0 }
    function qt(t, e) {
      if ('bytes' === t || 'string' === t) {
        if (Gt[e]) return !0
      } else if ('address' === t) {
        if ('payable' === e) return !0
      } else if ((t.indexOf('[') >= 0 || 'tuple' === t) && Kt[e]) return !0
      return (
        (Gt[e] || 'payable' === e) &&
          Dt.throwArgumentError('invalid modifier', 'name', e),
        !1
      )
    }
    function Ht(t, e) {
      for (let r in e) A(t, r, e[r])
    }
    const Vt = Object.freeze({
        sighash: 'sighash',
        minimal: 'minimal',
        full: 'full',
        json: 'json',
      }),
      Wt = new RegExp(/^(.*)\[([0-9]*)\]$/)
    class Jt {
      constructor(t, e) {
        t !== zt &&
          Dt.throwError('use fromString', f.b.errors.UNSUPPORTED_OPERATION, {
            operation: 'new ParamType()',
          }),
          Ht(this, e)
        let r = this.type.match(Wt)
        Ht(
          this,
          r
            ? {
                arrayLength: parseInt(r[2] || '-1'),
                arrayChildren: Jt.fromObject({
                  type: r[1],
                  components: this.components,
                }),
                baseType: 'array',
              }
            : {
                arrayLength: null,
                arrayChildren: null,
                baseType: null != this.components ? 'tuple' : this.type,
              },
        ),
          (this._isParamType = !0),
          Object.freeze(this)
      }
      format(t) {
        if (
          (t || (t = Vt.sighash),
          Vt[t] || Dt.throwArgumentError('invalid format type', 'format', t),
          t === Vt.json)
        ) {
          let e = {
            type: 'tuple' === this.baseType ? 'tuple' : this.type,
            name: this.name || void 0,
          }
          return (
            'boolean' == typeof this.indexed && (e.indexed = this.indexed),
            this.components &&
              (e.components = this.components.map(e =>
                JSON.parse(e.format(t)),
              )),
            JSON.stringify(e)
          )
        }
        let e = ''
        return (
          'array' === this.baseType
            ? ((e += this.arrayChildren.format(t)),
              (e +=
                '[' +
                (this.arrayLength < 0 ? '' : String(this.arrayLength)) +
                ']'))
            : 'tuple' === this.baseType
            ? (t !== Vt.sighash && (e += this.type),
              (e +=
                '(' +
                this.components
                  .map(e => e.format(t))
                  .join(t === Vt.full ? ', ' : ',') +
                ')'))
            : (e += this.type),
          t !== Vt.sighash &&
            (!0 === this.indexed && (e += ' indexed'),
            t === Vt.full && this.name && (e += ' ' + this.name)),
          e
        )
      }
      static from(t, e) {
        return 'string' == typeof t ? Jt.fromString(t, e) : Jt.fromObject(t)
      }
      static fromObject(t) {
        return Jt.isParamType(t)
          ? t
          : new Jt(zt, {
              name: t.name || null,
              type: oe(t.type),
              indexed: null == t.indexed ? null : !!t.indexed,
              components: t.components ? t.components.map(Jt.fromObject) : null,
            })
      }
      static fromString(t, e) {
        return (function(t) {
          return Jt.fromObject({
            name: t.name,
            type: t.type,
            indexed: t.indexed,
            components: t.components,
          })
        })(
          (function(t, e) {
            let r = t
            function n(e) {
              Dt.throwArgumentError(
                'unexpected character at position ' + e,
                'param',
                t,
              )
            }
            function i(t) {
              let r = {
                type: '',
                name: '',
                parent: t,
                state: { allowType: !0 },
              }
              return e && (r.indexed = !1), r
            }
            t = t.replace(/\s/g, ' ')
            let o = { type: '', name: '', state: { allowType: !0 } },
              s = o
            for (let r = 0; r < t.length; r++) {
              let o = t[r]
              switch (o) {
                case '(':
                  s.state.allowType && '' === s.type
                    ? (s.type = 'tuple')
                    : s.state.allowParams || n(r),
                    (s.state.allowType = !1),
                    (s.type = oe(s.type)),
                    (s.components = [i(s)]),
                    (s = s.components[0])
                  break
                case ')':
                  delete s.state,
                    'indexed' === s.name &&
                      (e || n(r), (s.indexed = !0), (s.name = '')),
                    qt(s.type, s.name) && (s.name = ''),
                    (s.type = oe(s.type))
                  let t = s
                  ;(s = s.parent),
                    s || n(r),
                    delete t.parent,
                    (s.state.allowParams = !1),
                    (s.state.allowName = !0),
                    (s.state.allowArray = !0)
                  break
                case ',':
                  delete s.state,
                    'indexed' === s.name &&
                      (e || n(r), (s.indexed = !0), (s.name = '')),
                    qt(s.type, s.name) && (s.name = ''),
                    (s.type = oe(s.type))
                  let a = i(s.parent)
                  s.parent.components.push(a), delete s.parent, (s = a)
                  break
                case ' ':
                  s.state.allowType &&
                    '' !== s.type &&
                    ((s.type = oe(s.type)),
                    delete s.state.allowType,
                    (s.state.allowName = !0),
                    (s.state.allowParams = !0)),
                    s.state.allowName &&
                      '' !== s.name &&
                      ('indexed' === s.name
                        ? (e || n(r),
                          s.indexed && n(r),
                          (s.indexed = !0),
                          (s.name = ''))
                        : qt(s.type, s.name)
                        ? (s.name = '')
                        : (s.state.allowName = !1))
                  break
                case '[':
                  s.state.allowArray || n(r),
                    (s.type += o),
                    (s.state.allowArray = !1),
                    (s.state.allowName = !1),
                    (s.state.readArray = !0)
                  break
                case ']':
                  s.state.readArray || n(r),
                    (s.type += o),
                    (s.state.readArray = !1),
                    (s.state.allowArray = !0),
                    (s.state.allowName = !0)
                  break
                default:
                  s.state.allowType
                    ? ((s.type += o),
                      (s.state.allowParams = !0),
                      (s.state.allowArray = !0))
                    : s.state.allowName
                    ? ((s.name += o), delete s.state.allowArray)
                    : s.state.readArray
                    ? (s.type += o)
                    : n(r)
              }
            }
            return (
              s.parent && Dt.throwArgumentError('unexpected eof', 'param', t),
              delete o.state,
              'indexed' === s.name
                ? (e || n(r.length - 7),
                  s.indexed && n(r.length - 7),
                  (s.indexed = !0),
                  (s.name = ''))
                : qt(s.type, s.name) && (s.name = ''),
              (o.type = oe(o.type)),
              o
            )
          })(t, !!e),
        )
      }
      static isParamType(t) {
        return !(null == t || !t._isParamType)
      }
    }
    function $t(t, e) {
      return (function(t) {
        t = t.trim()
        let e = [],
          r = '',
          n = 0
        for (let i = 0; i < t.length; i++) {
          let o = t[i]
          ',' === o && 0 === n
            ? (e.push(r), (r = ''))
            : ((r += o),
              '(' === o
                ? n++
                : ')' === o &&
                  (n--,
                  -1 === n &&
                    Dt.throwArgumentError(
                      'unbalanced parenthesis',
                      'value',
                      t,
                    )))
        }
        r && e.push(r)
        return e
      })(t).map(t => Jt.fromString(t, e))
    }
    class Zt {
      constructor(t, e) {
        t !== zt &&
          Dt.throwError(
            'use a static from method',
            f.b.errors.UNSUPPORTED_OPERATION,
            { operation: 'new Fragment()' },
          ),
          Ht(this, e),
          (this._isFragment = !0),
          Object.freeze(this)
      }
      static from(t) {
        return Zt.isFragment(t)
          ? t
          : 'string' == typeof t
          ? Zt.fromString(t)
          : Zt.fromObject(t)
      }
      static fromObject(t) {
        if (Zt.isFragment(t)) return t
        switch (t.type) {
          case 'function':
            return re.fromObject(t)
          case 'event':
            return Xt.fromObject(t)
          case 'constructor':
            return ee.fromObject(t)
          case 'error':
            return ie.fromObject(t)
          case 'fallback':
          case 'receive':
            return null
        }
        return Dt.throwArgumentError('invalid fragment object', 'value', t)
      }
      static fromString(t) {
        return 'event' ===
          (t = (t = (t = t.replace(/\s/g, ' '))
            .replace(/\(/g, ' (')
            .replace(/\)/g, ') ')
            .replace(/\s+/g, ' ')).trim()).split(' ')[0]
          ? Xt.fromString(t.substring(5).trim())
          : 'function' === t.split(' ')[0]
          ? re.fromString(t.substring(8).trim())
          : 'constructor' === t.split('(')[0].trim()
          ? ee.fromString(t.trim())
          : 'error' === t.split(' ')[0]
          ? ie.fromString(t.substring(5).trim())
          : Dt.throwArgumentError('unsupported fragment', 'value', t)
      }
      static isFragment(t) {
        return !(!t || !t._isFragment)
      }
    }
    class Xt extends Zt {
      format(t) {
        if (
          (t || (t = Vt.sighash),
          Vt[t] || Dt.throwArgumentError('invalid format type', 'format', t),
          t === Vt.json)
        )
          return JSON.stringify({
            type: 'event',
            anonymous: this.anonymous,
            name: this.name,
            inputs: this.inputs.map(e => JSON.parse(e.format(t))),
          })
        let e = ''
        return (
          t !== Vt.sighash && (e += 'event '),
          (e +=
            this.name +
            '(' +
            this.inputs.map(e => e.format(t)).join(t === Vt.full ? ', ' : ',') +
            ') '),
          t !== Vt.sighash && this.anonymous && (e += 'anonymous '),
          e.trim()
        )
      }
      static from(t) {
        return 'string' == typeof t ? Xt.fromString(t) : Xt.fromObject(t)
      }
      static fromObject(t) {
        if (Xt.isEventFragment(t)) return t
        'event' !== t.type &&
          Dt.throwArgumentError('invalid event object', 'value', t)
        const e = {
          name: ae(t.name),
          anonymous: t.anonymous,
          inputs: t.inputs ? t.inputs.map(Jt.fromObject) : [],
          type: 'event',
        }
        return new Xt(zt, e)
      }
      static fromString(t) {
        let e = t.match(ue)
        e || Dt.throwArgumentError('invalid event string', 'value', t)
        let r = !1
        return (
          e[3].split(' ').forEach(t => {
            switch (t.trim()) {
              case 'anonymous':
                r = !0
                break
              case '':
                break
              default:
                Dt.warn('unknown modifier: ' + t)
            }
          }),
          Xt.fromObject({
            name: e[1].trim(),
            anonymous: r,
            inputs: $t(e[2], !0),
            type: 'event',
          })
        )
      }
      static isEventFragment(t) {
        return t && t._isFragment && 'event' === t.type
      }
    }
    function Yt(t, e) {
      e.gas = null
      let r = t.split('@')
      return 1 !== r.length
        ? (r.length > 2 &&
            Dt.throwArgumentError(
              'invalid human-readable ABI signature',
              'value',
              t,
            ),
          r[1].match(/^[0-9]+$/) ||
            Dt.throwArgumentError(
              'invalid human-readable ABI signature gas',
              'value',
              t,
            ),
          (e.gas = y.from(r[1])),
          r[0])
        : t
    }
    function Qt(t, e) {
      ;(e.constant = !1),
        (e.payable = !1),
        (e.stateMutability = 'nonpayable'),
        t.split(' ').forEach(t => {
          switch (t.trim()) {
            case 'constant':
              e.constant = !0
              break
            case 'payable':
              ;(e.payable = !0), (e.stateMutability = 'payable')
              break
            case 'nonpayable':
              ;(e.payable = !1), (e.stateMutability = 'nonpayable')
              break
            case 'pure':
              ;(e.constant = !0), (e.stateMutability = 'pure')
              break
            case 'view':
              ;(e.constant = !0), (e.stateMutability = 'view')
              break
            case 'external':
            case 'public':
            case '':
              break
            default:
              console.log('unknown modifier: ' + t)
          }
        })
    }
    function te(t) {
      let e = { constant: !1, payable: !0, stateMutability: 'payable' }
      return (
        null != t.stateMutability
          ? ((e.stateMutability = t.stateMutability),
            (e.constant =
              'view' === e.stateMutability || 'pure' === e.stateMutability),
            null != t.constant &&
              !!t.constant !== e.constant &&
              Dt.throwArgumentError(
                'cannot have constant function with mutability ' +
                  e.stateMutability,
                'value',
                t,
              ),
            (e.payable = 'payable' === e.stateMutability),
            null != t.payable &&
              !!t.payable !== e.payable &&
              Dt.throwArgumentError(
                'cannot have payable function with mutability ' +
                  e.stateMutability,
                'value',
                t,
              ))
          : null != t.payable
          ? ((e.payable = !!t.payable),
            null != t.constant ||
              e.payable ||
              'constructor' === t.type ||
              Dt.throwArgumentError(
                'unable to determine stateMutability',
                'value',
                t,
              ),
            (e.constant = !!t.constant),
            e.constant
              ? (e.stateMutability = 'view')
              : (e.stateMutability = e.payable ? 'payable' : 'nonpayable'),
            e.payable &&
              e.constant &&
              Dt.throwArgumentError(
                'cannot have constant payable function',
                'value',
                t,
              ))
          : null != t.constant
          ? ((e.constant = !!t.constant),
            (e.payable = !e.constant),
            (e.stateMutability = e.constant ? 'view' : 'payable'))
          : 'constructor' !== t.type &&
            Dt.throwArgumentError(
              'unable to determine stateMutability',
              'value',
              t,
            ),
        e
      )
    }
    class ee extends Zt {
      format(t) {
        if (
          (t || (t = Vt.sighash),
          Vt[t] || Dt.throwArgumentError('invalid format type', 'format', t),
          t === Vt.json)
        )
          return JSON.stringify({
            type: 'constructor',
            stateMutability:
              'nonpayable' !== this.stateMutability
                ? this.stateMutability
                : void 0,
            payable: this.payable,
            gas: this.gas ? this.gas.toNumber() : void 0,
            inputs: this.inputs.map(e => JSON.parse(e.format(t))),
          })
        t === Vt.sighash &&
          Dt.throwError(
            'cannot format a constructor for sighash',
            f.b.errors.UNSUPPORTED_OPERATION,
            { operation: 'format(sighash)' },
          )
        let e =
          'constructor(' +
          this.inputs.map(e => e.format(t)).join(t === Vt.full ? ', ' : ',') +
          ') '
        return (
          this.stateMutability &&
            'nonpayable' !== this.stateMutability &&
            (e += this.stateMutability + ' '),
          e.trim()
        )
      }
      static from(t) {
        return 'string' == typeof t ? ee.fromString(t) : ee.fromObject(t)
      }
      static fromObject(t) {
        if (ee.isConstructorFragment(t)) return t
        'constructor' !== t.type &&
          Dt.throwArgumentError('invalid constructor object', 'value', t)
        let e = te(t)
        e.constant &&
          Dt.throwArgumentError('constructor cannot be constant', 'value', t)
        const r = {
          name: null,
          type: t.type,
          inputs: t.inputs ? t.inputs.map(Jt.fromObject) : [],
          payable: e.payable,
          stateMutability: e.stateMutability,
          gas: t.gas ? y.from(t.gas) : null,
        }
        return new ee(zt, r)
      }
      static fromString(t) {
        let e = { type: 'constructor' },
          r = (t = Yt(t, e)).match(ue)
        return (
          (r && 'constructor' === r[1].trim()) ||
            Dt.throwArgumentError('invalid constructor string', 'value', t),
          (e.inputs = $t(r[2].trim(), !1)),
          Qt(r[3].trim(), e),
          ee.fromObject(e)
        )
      }
      static isConstructorFragment(t) {
        return t && t._isFragment && 'constructor' === t.type
      }
    }
    class re extends ee {
      format(t) {
        if (
          (t || (t = Vt.sighash),
          Vt[t] || Dt.throwArgumentError('invalid format type', 'format', t),
          t === Vt.json)
        )
          return JSON.stringify({
            type: 'function',
            name: this.name,
            constant: this.constant,
            stateMutability:
              'nonpayable' !== this.stateMutability
                ? this.stateMutability
                : void 0,
            payable: this.payable,
            gas: this.gas ? this.gas.toNumber() : void 0,
            inputs: this.inputs.map(e => JSON.parse(e.format(t))),
            outputs: this.outputs.map(e => JSON.parse(e.format(t))),
          })
        let e = ''
        return (
          t !== Vt.sighash && (e += 'function '),
          (e +=
            this.name +
            '(' +
            this.inputs.map(e => e.format(t)).join(t === Vt.full ? ', ' : ',') +
            ') '),
          t !== Vt.sighash &&
            (this.stateMutability
              ? 'nonpayable' !== this.stateMutability &&
                (e += this.stateMutability + ' ')
              : this.constant && (e += 'view '),
            this.outputs &&
              this.outputs.length &&
              (e +=
                'returns (' +
                this.outputs.map(e => e.format(t)).join(', ') +
                ') '),
            null != this.gas && (e += '@' + this.gas.toString() + ' ')),
          e.trim()
        )
      }
      static from(t) {
        return 'string' == typeof t ? re.fromString(t) : re.fromObject(t)
      }
      static fromObject(t) {
        if (re.isFunctionFragment(t)) return t
        'function' !== t.type &&
          Dt.throwArgumentError('invalid function object', 'value', t)
        let e = te(t)
        const r = {
          type: t.type,
          name: ae(t.name),
          constant: e.constant,
          inputs: t.inputs ? t.inputs.map(Jt.fromObject) : [],
          outputs: t.outputs ? t.outputs.map(Jt.fromObject) : [],
          payable: e.payable,
          stateMutability: e.stateMutability,
          gas: t.gas ? y.from(t.gas) : null,
        }
        return new re(zt, r)
      }
      static fromString(t) {
        let e = { type: 'function' },
          r = (t = Yt(t, e)).split(' returns ')
        r.length > 2 &&
          Dt.throwArgumentError('invalid function string', 'value', t)
        let n = r[0].match(ue)
        if (
          (n || Dt.throwArgumentError('invalid function signature', 'value', t),
          (e.name = n[1].trim()),
          e.name && ae(e.name),
          (e.inputs = $t(n[2], !1)),
          Qt(n[3].trim(), e),
          r.length > 1)
        ) {
          let n = r[1].match(ue)
          ;('' == n[1].trim() && '' == n[3].trim()) ||
            Dt.throwArgumentError('unexpected tokens', 'value', t),
            (e.outputs = $t(n[2], !1))
        } else e.outputs = []
        return re.fromObject(e)
      }
      static isFunctionFragment(t) {
        return t && t._isFragment && 'function' === t.type
      }
    }
    function ne(t) {
      const e = t.format()
      return (
        ('Error(string)' !== e && 'Panic(uint256)' !== e) ||
          Dt.throwArgumentError(
            `cannot specify user defined ${e} error`,
            'fragment',
            t,
          ),
        t
      )
    }
    class ie extends Zt {
      format(t) {
        if (
          (t || (t = Vt.sighash),
          Vt[t] || Dt.throwArgumentError('invalid format type', 'format', t),
          t === Vt.json)
        )
          return JSON.stringify({
            type: 'error',
            name: this.name,
            inputs: this.inputs.map(e => JSON.parse(e.format(t))),
          })
        let e = ''
        return (
          t !== Vt.sighash && (e += 'error '),
          (e +=
            this.name +
            '(' +
            this.inputs.map(e => e.format(t)).join(t === Vt.full ? ', ' : ',') +
            ') '),
          e.trim()
        )
      }
      static from(t) {
        return 'string' == typeof t ? ie.fromString(t) : ie.fromObject(t)
      }
      static fromObject(t) {
        if (ie.isErrorFragment(t)) return t
        'error' !== t.type &&
          Dt.throwArgumentError('invalid error object', 'value', t)
        const e = {
          type: t.type,
          name: ae(t.name),
          inputs: t.inputs ? t.inputs.map(Jt.fromObject) : [],
        }
        return ne(new ie(zt, e))
      }
      static fromString(t) {
        let e = { type: 'error' },
          r = t.match(ue)
        return (
          r || Dt.throwArgumentError('invalid error signature', 'value', t),
          (e.name = r[1].trim()),
          e.name && ae(e.name),
          (e.inputs = $t(r[2], !1)),
          ne(ie.fromObject(e))
        )
      }
      static isErrorFragment(t) {
        return t && t._isFragment && 'error' === t.type
      }
    }
    function oe(t) {
      return (
        t.match(/^uint($|[^1-9])/)
          ? (t = 'uint256' + t.substring(4))
          : t.match(/^int($|[^1-9])/) && (t = 'int256' + t.substring(3)),
        t
      )
    }
    const se = new RegExp('^[a-zA-Z$_][a-zA-Z0-9$_]*$')
    function ae(t) {
      return (
        (t && t.match(se)) ||
          Dt.throwArgumentError(`invalid identifier "${t}"`, 'value', t),
        t
      )
    }
    const ue = new RegExp('^([^)(]*)\\((.*)\\)([^)(]*)$')
    const ce = new f.b('abi/5.5.0'),
      le = new RegExp(/^bytes([0-9]*)$/),
      he = new RegExp(/^(u?int)([0-9]*)$/)
    class fe {
      constructor(t) {
        ce.checkNew(new.target, fe), A(this, 'coerceFunc', t || null)
      }
      _getCoder(t) {
        switch (t.baseType) {
          case 'address':
            return new bt(t.name)
          case 'bool':
            return new At(t.name)
          case 'string':
            return new Lt(t.name)
          case 'bytes':
            return new Pt(t.name)
          case 'array':
            return new kt(
              this._getCoder(t.arrayChildren),
              t.arrayLength,
              t.name,
            )
          case 'tuple':
            return new Ut(
              (t.components || []).map(t => this._getCoder(t)),
              t.name,
            )
          case '':
            return new Nt(t.name)
        }
        let e = t.type.match(he)
        if (e) {
          let r = parseInt(e[2] || '256')
          return (
            (0 === r || r > 256 || r % 8 != 0) &&
              ce.throwArgumentError(
                'invalid ' + e[1] + ' bit length',
                'param',
                t,
              ),
            new Ft(r / 8, 'int' === e[1], t.name)
          )
        }
        if (((e = t.type.match(le)), e)) {
          let r = parseInt(e[1])
          return (
            (0 === r || r > 32) &&
              ce.throwArgumentError('invalid bytes length', 'param', t),
            new Ot(r, t.name)
          )
        }
        return ce.throwArgumentError('invalid type', 'type', t.type)
      }
      _getWordSize() {
        return 32
      }
      _getReader(t, e) {
        return new F(t, this._getWordSize(), this.coerceFunc, e)
      }
      _getWriter() {
        return new B(this._getWordSize())
      }
      getDefaultValue(t) {
        const e = t.map(t => this._getCoder(Jt.from(t)))
        return new Ut(e, '_').defaultValue()
      }
      encode(t, e) {
        t.length !== e.length &&
          ce.throwError(
            'types/values length mismatch',
            f.b.errors.INVALID_ARGUMENT,
            {
              count: { types: t.length, values: e.length },
              value: { types: t, values: e },
            },
          )
        const r = t.map(t => this._getCoder(Jt.from(t))),
          n = new Ut(r, '_'),
          i = this._getWriter()
        return n.encode(i, e), i.data
      }
      decode(t, e, r) {
        const n = t.map(t => this._getCoder(Jt.from(t)))
        return new Ut(n, '_').decode(this._getReader(Object(c.a)(e), r))
      }
    }
    const de = new fe(),
      pe = new f.b('abi/5.5.0')
    class me extends I {}
    class ge extends I {}
    class ye extends I {}
    class be extends I {
      static isIndexed(t) {
        return !(!t || !t._isIndexed)
      }
    }
    const ve = {
      '0x08c379a0': {
        signature: 'Error(string)',
        name: 'Error',
        inputs: ['string'],
        reason: !0,
      },
      '0x4e487b71': {
        signature: 'Panic(uint256)',
        name: 'Panic',
        inputs: ['uint256'],
      },
    }
    function we(t, e) {
      const r = new Error(
        'deferred error during ABI decoding triggered accessing ' + t,
      )
      return (r.error = e), r
    }
    class Ee {
      constructor(t) {
        pe.checkNew(new.target, Ee)
        let e = []
        ;(e = 'string' == typeof t ? JSON.parse(t) : t),
          A(this, 'fragments', e.map(t => Zt.from(t)).filter(t => null != t)),
          A(this, '_abiCoder', S(new.target, 'getAbiCoder')()),
          A(this, 'functions', {}),
          A(this, 'errors', {}),
          A(this, 'events', {}),
          A(this, 'structs', {}),
          this.fragments.forEach(t => {
            let e = null
            switch (t.type) {
              case 'constructor':
                return this.deploy
                  ? void pe.warn('duplicate definition - constructor')
                  : void A(this, 'deploy', t)
              case 'function':
                e = this.functions
                break
              case 'event':
                e = this.events
                break
              case 'error':
                e = this.errors
                break
              default:
                return
            }
            let r = t.format()
            e[r] ? pe.warn('duplicate definition - ' + r) : (e[r] = t)
          }),
          this.deploy ||
            A(this, 'deploy', ee.from({ payable: !1, type: 'constructor' })),
          A(this, '_isInterface', !0)
      }
      format(t) {
        t || (t = Vt.full),
          t === Vt.sighash &&
            pe.throwArgumentError(
              'interface does not support formatting sighash',
              'format',
              t,
            )
        const e = this.fragments.map(e => e.format(t))
        return t === Vt.json ? JSON.stringify(e.map(t => JSON.parse(t))) : e
      }
      static getAbiCoder() {
        return de
      }
      static getAddress(t) {
        return tt(t)
      }
      static getSighash(t) {
        return Object(c.e)(yt(t.format()), 0, 4)
      }
      static getEventTopic(t) {
        return yt(t.format())
      }
      getFunction(t) {
        if (Object(c.l)(t)) {
          for (const e in this.functions)
            if (t === this.getSighash(e)) return this.functions[e]
          pe.throwArgumentError('no matching function', 'sighash', t)
        }
        if (-1 === t.indexOf('(')) {
          const e = t.trim(),
            r = Object.keys(this.functions).filter(t => t.split('(')[0] === e)
          return (
            0 === r.length
              ? pe.throwArgumentError('no matching function', 'name', e)
              : r.length > 1 &&
                pe.throwArgumentError('multiple matching functions', 'name', e),
            this.functions[r[0]]
          )
        }
        const e = this.functions[re.fromString(t).format()]
        return (
          e || pe.throwArgumentError('no matching function', 'signature', t), e
        )
      }
      getEvent(t) {
        if (Object(c.l)(t)) {
          const e = t.toLowerCase()
          for (const t in this.events)
            if (e === this.getEventTopic(t)) return this.events[t]
          pe.throwArgumentError('no matching event', 'topichash', e)
        }
        if (-1 === t.indexOf('(')) {
          const e = t.trim(),
            r = Object.keys(this.events).filter(t => t.split('(')[0] === e)
          return (
            0 === r.length
              ? pe.throwArgumentError('no matching event', 'name', e)
              : r.length > 1 &&
                pe.throwArgumentError('multiple matching events', 'name', e),
            this.events[r[0]]
          )
        }
        const e = this.events[Xt.fromString(t).format()]
        return (
          e || pe.throwArgumentError('no matching event', 'signature', t), e
        )
      }
      getError(t) {
        if (Object(c.l)(t)) {
          const e = S(this.constructor, 'getSighash')
          for (const r in this.errors) {
            if (t === e(this.errors[r])) return this.errors[r]
          }
          pe.throwArgumentError('no matching error', 'sighash', t)
        }
        if (-1 === t.indexOf('(')) {
          const e = t.trim(),
            r = Object.keys(this.errors).filter(t => t.split('(')[0] === e)
          return (
            0 === r.length
              ? pe.throwArgumentError('no matching error', 'name', e)
              : r.length > 1 &&
                pe.throwArgumentError('multiple matching errors', 'name', e),
            this.errors[r[0]]
          )
        }
        const e = this.errors[re.fromString(t).format()]
        return (
          e || pe.throwArgumentError('no matching error', 'signature', t), e
        )
      }
      getSighash(t) {
        if ('string' == typeof t)
          try {
            t = this.getFunction(t)
          } catch (e) {
            try {
              t = this.getError(t)
            } catch (t) {
              throw e
            }
          }
        return S(this.constructor, 'getSighash')(t)
      }
      getEventTopic(t) {
        return (
          'string' == typeof t && (t = this.getEvent(t)),
          S(this.constructor, 'getEventTopic')(t)
        )
      }
      _decodeParams(t, e) {
        return this._abiCoder.decode(t, e)
      }
      _encodeParams(t, e) {
        return this._abiCoder.encode(t, e)
      }
      encodeDeploy(t) {
        return this._encodeParams(this.deploy.inputs, t || [])
      }
      decodeErrorResult(t, e) {
        'string' == typeof t && (t = this.getError(t))
        const r = Object(c.a)(e)
        return (
          Object(c.i)(r.slice(0, 4)) !== this.getSighash(t) &&
            pe.throwArgumentError(
              `data signature does not match error ${t.name}.`,
              'data',
              Object(c.i)(r),
            ),
          this._decodeParams(t.inputs, r.slice(4))
        )
      }
      encodeErrorResult(t, e) {
        return (
          'string' == typeof t && (t = this.getError(t)),
          Object(c.i)(
            Object(c.b)([
              this.getSighash(t),
              this._encodeParams(t.inputs, e || []),
            ]),
          )
        )
      }
      decodeFunctionData(t, e) {
        'string' == typeof t && (t = this.getFunction(t))
        const r = Object(c.a)(e)
        return (
          Object(c.i)(r.slice(0, 4)) !== this.getSighash(t) &&
            pe.throwArgumentError(
              `data signature does not match function ${t.name}.`,
              'data',
              Object(c.i)(r),
            ),
          this._decodeParams(t.inputs, r.slice(4))
        )
      }
      encodeFunctionData(t, e) {
        return (
          'string' == typeof t && (t = this.getFunction(t)),
          Object(c.i)(
            Object(c.b)([
              this.getSighash(t),
              this._encodeParams(t.inputs, e || []),
            ]),
          )
        )
      }
      decodeFunctionResult(t, e) {
        'string' == typeof t && (t = this.getFunction(t))
        let r = Object(c.a)(e),
          n = null,
          i = null,
          o = null,
          s = null
        switch (r.length % this._abiCoder._getWordSize()) {
          case 0:
            try {
              return this._abiCoder.decode(t.outputs, r)
            } catch (t) {}
            break
          case 4: {
            const t = Object(c.i)(r.slice(0, 4)),
              e = ve[t]
            if (e)
              (i = this._abiCoder.decode(e.inputs, r.slice(4))),
                (o = e.name),
                (s = e.signature),
                e.reason && (n = i[0])
            else
              try {
                const e = this.getError(t)
                ;(i = this._abiCoder.decode(e.inputs, r.slice(4))),
                  (o = e.name),
                  (s = e.format())
              } catch (t) {
                console.log(t)
              }
            break
          }
        }
        return pe.throwError(
          'call revert exception',
          f.b.errors.CALL_EXCEPTION,
          {
            method: t.format(),
            errorArgs: i,
            errorName: o,
            errorSignature: s,
            reason: n,
          },
        )
      }
      encodeFunctionResult(t, e) {
        return (
          'string' == typeof t && (t = this.getFunction(t)),
          Object(c.i)(this._abiCoder.encode(t.outputs, e || []))
        )
      }
      encodeFilterTopics(t, e) {
        'string' == typeof t && (t = this.getEvent(t)),
          e.length > t.inputs.length &&
            pe.throwError(
              'too many arguments for ' + t.format(),
              f.b.errors.UNEXPECTED_ARGUMENT,
              { argument: 'values', value: e },
            )
        let r = []
        t.anonymous || r.push(this.getEventTopic(t))
        const n = (t, e) =>
          'string' === t.type
            ? yt(e)
            : 'bytes' === t.type
            ? D(Object(c.i)(e))
            : ('address' === t.type && this._abiCoder.encode(['address'], [e]),
              Object(c.h)(Object(c.i)(e), 32))
        for (
          e.forEach((e, i) => {
            let o = t.inputs[i]
            o.indexed
              ? null == e
                ? r.push(null)
                : 'array' === o.baseType || 'tuple' === o.baseType
                ? pe.throwArgumentError(
                    'filtering with tuples or arrays not supported',
                    'contract.' + o.name,
                    e,
                  )
                : Array.isArray(e)
                ? r.push(e.map(t => n(o, t)))
                : r.push(n(o, e))
              : null != e &&
                pe.throwArgumentError(
                  'cannot filter non-indexed parameters; must be null',
                  'contract.' + o.name,
                  e,
                )
          });
          r.length && null === r[r.length - 1];

        )
          r.pop()
        return r
      }
      encodeEventLog(t, e) {
        'string' == typeof t && (t = this.getEvent(t))
        const r = [],
          n = [],
          i = []
        return (
          t.anonymous || r.push(this.getEventTopic(t)),
          e.length !== t.inputs.length &&
            pe.throwArgumentError(
              'event arguments/values mismatch',
              'values',
              e,
            ),
          t.inputs.forEach((t, o) => {
            const s = e[o]
            if (t.indexed)
              if ('string' === t.type) r.push(yt(s))
              else if ('bytes' === t.type) r.push(D(s))
              else {
                if ('tuple' === t.baseType || 'array' === t.baseType)
                  throw new Error('not implemented')
                r.push(this._abiCoder.encode([t.type], [s]))
              }
            else n.push(t), i.push(s)
          }),
          { data: this._abiCoder.encode(n, i), topics: r }
        )
      }
      decodeEventLog(t, e, r) {
        if (
          ('string' == typeof t && (t = this.getEvent(t)),
          null != r && !t.anonymous)
        ) {
          let e = this.getEventTopic(t)
          ;(Object(c.l)(r[0], 32) && r[0].toLowerCase() === e) ||
            pe.throwError(
              'fragment/topic mismatch',
              f.b.errors.INVALID_ARGUMENT,
              { argument: 'topics[0]', expected: e, value: r[0] },
            ),
            (r = r.slice(1))
        }
        let n = [],
          i = [],
          o = []
        t.inputs.forEach((t, e) => {
          t.indexed
            ? 'string' === t.type ||
              'bytes' === t.type ||
              'tuple' === t.baseType ||
              'array' === t.baseType
              ? (n.push(Jt.fromObject({ type: 'bytes32', name: t.name })),
                o.push(!0))
              : (n.push(t), o.push(!1))
            : (i.push(t), o.push(!1))
        })
        let s = null != r ? this._abiCoder.decode(n, Object(c.b)(r)) : null,
          a = this._abiCoder.decode(i, e, !0),
          u = [],
          l = 0,
          h = 0
        t.inputs.forEach((t, e) => {
          if (t.indexed)
            if (null == s) u[e] = new be({ _isIndexed: !0, hash: null })
            else if (o[e]) u[e] = new be({ _isIndexed: !0, hash: s[h++] })
            else
              try {
                u[e] = s[h++]
              } catch (t) {
                u[e] = t
              }
          else
            try {
              u[e] = a[l++]
            } catch (t) {
              u[e] = t
            }
          if (t.name && null == u[t.name]) {
            const r = u[e]
            r instanceof Error
              ? Object.defineProperty(u, t.name, {
                  enumerable: !0,
                  get: () => {
                    throw we('property ' + JSON.stringify(t.name), r)
                  },
                })
              : (u[t.name] = r)
          }
        })
        for (let t = 0; t < u.length; t++) {
          const e = u[t]
          e instanceof Error &&
            Object.defineProperty(u, t, {
              enumerable: !0,
              get: () => {
                throw we('index ' + t, e)
              },
            })
        }
        return Object.freeze(u)
      }
      parseTransaction(t) {
        let e = this.getFunction(t.data.substring(0, 10).toLowerCase())
        return e
          ? new ge({
              args: this._abiCoder.decode(
                e.inputs,
                '0x' + t.data.substring(10),
              ),
              functionFragment: e,
              name: e.name,
              signature: e.format(),
              sighash: this.getSighash(e),
              value: y.from(t.value || '0'),
            })
          : null
      }
      parseLog(t) {
        let e = this.getEvent(t.topics[0])
        return !e || e.anonymous
          ? null
          : new me({
              eventFragment: e,
              name: e.name,
              signature: e.format(),
              topic: this.getEventTopic(e),
              args: this.decodeEventLog(e, t.data, t.topics),
            })
      }
      parseError(t) {
        const e = Object(c.i)(t)
        let r = this.getError(e.substring(0, 10).toLowerCase())
        return r
          ? new ye({
              args: this._abiCoder.decode(r.inputs, '0x' + e.substring(10)),
              errorFragment: r,
              name: r.name,
              signature: r.format(),
              sighash: this.getSighash(r),
            })
          : null
      }
      static isInterface(t) {
        return !(!t || !t._isInterface)
      }
    }
    var _e = function(t, e, r, n) {
      return new (r || (r = Promise))(function(i, o) {
        function s(t) {
          try {
            u(n.next(t))
          } catch (t) {
            o(t)
          }
        }
        function a(t) {
          try {
            u(n.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function(t) {
                    t(e)
                  })).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
      })
    }
    const ke = new f.b('abstract-provider/5.5.1')
    class Ae extends I {
      static isForkEvent(t) {
        return !(!t || !t._isForkEvent)
      }
    }
    class Se {
      constructor() {
        ke.checkAbstract(new.target, Se), A(this, '_isProvider', !0)
      }
      getFeeData() {
        return _e(this, void 0, void 0, function*() {
          const { block: t, gasPrice: e } = yield P({
            block: this.getBlock('latest'),
            gasPrice: this.getGasPrice().catch(t => null),
          })
          let r = null,
            n = null
          return (
            t &&
              t.baseFeePerGas &&
              ((n = y.from('2500000000')), (r = t.baseFeePerGas.mul(2).add(n))),
            { maxFeePerGas: r, maxPriorityFeePerGas: n, gasPrice: e }
          )
        })
      }
      addListener(t, e) {
        return this.on(t, e)
      }
      removeListener(t, e) {
        return this.off(t, e)
      }
      static isProvider(t) {
        return !(!t || !t._isProvider)
      }
    }
    var Pe = function(t, e, r, n) {
      return new (r || (r = Promise))(function(i, o) {
        function s(t) {
          try {
            u(n.next(t))
          } catch (t) {
            o(t)
          }
        }
        function a(t) {
          try {
            u(n.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function(t) {
                    t(e)
                  })).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
      })
    }
    const Oe = new f.b('abstract-signer/5.5.0'),
      Ne = [
        'accessList',
        'chainId',
        'customData',
        'data',
        'from',
        'gasLimit',
        'gasPrice',
        'maxFeePerGas',
        'maxPriorityFeePerGas',
        'nonce',
        'to',
        'type',
        'value',
      ],
      xe = [
        f.b.errors.INSUFFICIENT_FUNDS,
        f.b.errors.NONCE_EXPIRED,
        f.b.errors.REPLACEMENT_UNDERPRICED,
      ]
    class Me {
      constructor() {
        Oe.checkAbstract(new.target, Me), A(this, '_isSigner', !0)
      }
      getBalance(t) {
        return Pe(this, void 0, void 0, function*() {
          return (
            this._checkProvider('getBalance'),
            yield this.provider.getBalance(this.getAddress(), t)
          )
        })
      }
      getTransactionCount(t) {
        return Pe(this, void 0, void 0, function*() {
          return (
            this._checkProvider('getTransactionCount'),
            yield this.provider.getTransactionCount(this.getAddress(), t)
          )
        })
      }
      estimateGas(t) {
        return Pe(this, void 0, void 0, function*() {
          this._checkProvider('estimateGas')
          const e = yield P(this.checkTransaction(t))
          return yield this.provider.estimateGas(e)
        })
      }
      call(t, e) {
        return Pe(this, void 0, void 0, function*() {
          this._checkProvider('call')
          const r = yield P(this.checkTransaction(t))
          return yield this.provider.call(r, e)
        })
      }
      sendTransaction(t) {
        return Pe(this, void 0, void 0, function*() {
          this._checkProvider('sendTransaction')
          const e = yield this.populateTransaction(t),
            r = yield this.signTransaction(e)
          return yield this.provider.sendTransaction(r)
        })
      }
      getChainId() {
        return Pe(this, void 0, void 0, function*() {
          this._checkProvider('getChainId')
          return (yield this.provider.getNetwork()).chainId
        })
      }
      getGasPrice() {
        return Pe(this, void 0, void 0, function*() {
          return (
            this._checkProvider('getGasPrice'),
            yield this.provider.getGasPrice()
          )
        })
      }
      getFeeData() {
        return Pe(this, void 0, void 0, function*() {
          return (
            this._checkProvider('getFeeData'), yield this.provider.getFeeData()
          )
        })
      }
      resolveName(t) {
        return Pe(this, void 0, void 0, function*() {
          return (
            this._checkProvider('resolveName'),
            yield this.provider.resolveName(t)
          )
        })
      }
      checkTransaction(t) {
        for (const e in t)
          -1 === Ne.indexOf(e) &&
            Oe.throwArgumentError(
              'invalid transaction key: ' + e,
              'transaction',
              t,
            )
        const e = N(t)
        return (
          null == e.from
            ? (e.from = this.getAddress())
            : (e.from = Promise.all([
                Promise.resolve(e.from),
                this.getAddress(),
              ]).then(
                e => (
                  e[0].toLowerCase() !== e[1].toLowerCase() &&
                    Oe.throwArgumentError(
                      'from address mismatch',
                      'transaction',
                      t,
                    ),
                  e[0]
                ),
              )),
          e
        )
      }
      populateTransaction(t) {
        return Pe(this, void 0, void 0, function*() {
          const e = yield P(this.checkTransaction(t))
          null != e.to &&
            ((e.to = Promise.resolve(e.to).then(t =>
              Pe(this, void 0, void 0, function*() {
                if (null == t) return null
                const e = yield this.resolveName(t)
                return (
                  null == e &&
                    Oe.throwArgumentError(
                      'provided ENS name resolves to null',
                      'tx.to',
                      t,
                    ),
                  e
                )
              }),
            )),
            e.to.catch(t => {}))
          const r = null != e.maxFeePerGas || null != e.maxPriorityFeePerGas
          if (
            (null == e.gasPrice || (2 !== e.type && !r)
              ? (0 !== e.type && 1 !== e.type) ||
                !r ||
                Oe.throwArgumentError(
                  'pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas',
                  'transaction',
                  t,
                )
              : Oe.throwArgumentError(
                  'eip-1559 transaction do not support gasPrice',
                  'transaction',
                  t,
                ),
            (2 !== e.type && null != e.type) ||
              null == e.maxFeePerGas ||
              null == e.maxPriorityFeePerGas)
          )
            if (0 === e.type || 1 === e.type)
              null == e.gasPrice && (e.gasPrice = this.getGasPrice())
            else {
              const t = yield this.getFeeData()
              if (null == e.type)
                if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                  if (((e.type = 2), null != e.gasPrice)) {
                    const t = e.gasPrice
                    delete e.gasPrice,
                      (e.maxFeePerGas = t),
                      (e.maxPriorityFeePerGas = t)
                  } else
                    null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
                      null == e.maxPriorityFeePerGas &&
                        (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas)
                else
                  null != t.gasPrice
                    ? (r &&
                        Oe.throwError(
                          'network does not support EIP-1559',
                          f.b.errors.UNSUPPORTED_OPERATION,
                          { operation: 'populateTransaction' },
                        ),
                      null == e.gasPrice && (e.gasPrice = t.gasPrice),
                      (e.type = 0))
                    : Oe.throwError(
                        'failed to get consistent fee data',
                        f.b.errors.UNSUPPORTED_OPERATION,
                        { operation: 'signer.getFeeData' },
                      )
              else
                2 === e.type &&
                  (null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
                  null == e.maxPriorityFeePerGas &&
                    (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas))
            }
          else e.type = 2
          return (
            null == e.nonce && (e.nonce = this.getTransactionCount('pending')),
            null == e.gasLimit &&
              (e.gasLimit = this.estimateGas(e).catch(t => {
                if (xe.indexOf(t.code) >= 0) throw t
                return Oe.throwError(
                  'cannot estimate gas; transaction may fail or may require manual gas limit',
                  f.b.errors.UNPREDICTABLE_GAS_LIMIT,
                  { error: t, tx: e },
                )
              })),
            null == e.chainId
              ? (e.chainId = this.getChainId())
              : (e.chainId = Promise.all([
                  Promise.resolve(e.chainId),
                  this.getChainId(),
                ]).then(
                  e => (
                    0 !== e[1] &&
                      e[0] !== e[1] &&
                      Oe.throwArgumentError(
                        'chainId address mismatch',
                        'transaction',
                        t,
                      ),
                    e[0]
                  ),
                )),
            yield P(e)
          )
        })
      }
      _checkProvider(t) {
        this.provider ||
          Oe.throwError('missing provider', f.b.errors.UNSUPPORTED_OPERATION, {
            operation: t || '_checkProvider',
          })
      }
      static isSigner(t) {
        return !(!t || !t._isSigner)
      }
    }
    class Te extends Me {
      constructor(t, e) {
        Oe.checkNew(new.target, Te),
          super(),
          A(this, 'address', t),
          A(this, 'provider', e || null)
      }
      getAddress() {
        return Promise.resolve(this.address)
      }
      _fail(t, e) {
        return Promise.resolve().then(() => {
          Oe.throwError(t, f.b.errors.UNSUPPORTED_OPERATION, { operation: e })
        })
      }
      signMessage(t) {
        return this._fail('VoidSigner cannot sign messages', 'signMessage')
      }
      signTransaction(t) {
        return this._fail(
          'VoidSigner cannot sign transactions',
          'signTransaction',
        )
      }
      _signTypedData(t, e, r) {
        return this._fail('VoidSigner cannot sign typed data', 'signTypedData')
      }
      connect(t) {
        return new Te(this.address, t)
      }
    }
    var Ie = r(21)
    const Re = new f.b('signing-key/5.5.0')
    let Ce = null
    function je() {
      return Ce || (Ce = new Ie.a('secp256k1')), Ce
    }
    class Be {
      constructor(t) {
        A(this, 'curve', 'secp256k1'), A(this, 'privateKey', Object(c.i)(t))
        const e = je().keyFromPrivate(Object(c.a)(this.privateKey))
        A(this, 'publicKey', '0x' + e.getPublic(!1, 'hex')),
          A(this, 'compressedPublicKey', '0x' + e.getPublic(!0, 'hex')),
          A(this, '_isSigningKey', !0)
      }
      _addPoint(t) {
        const e = je().keyFromPublic(Object(c.a)(this.publicKey)),
          r = je().keyFromPublic(Object(c.a)(t))
        return '0x' + e.pub.add(r.pub).encodeCompressed('hex')
      }
      signDigest(t) {
        const e = je().keyFromPrivate(Object(c.a)(this.privateKey)),
          r = Object(c.a)(t)
        32 !== r.length &&
          Re.throwArgumentError('bad digest length', 'digest', t)
        const n = e.sign(r, { canonical: !0 })
        return Object(c.n)({
          recoveryParam: n.recoveryParam,
          r: Object(c.h)('0x' + n.r.toString(16), 32),
          s: Object(c.h)('0x' + n.s.toString(16), 32),
        })
      }
      computeSharedSecret(t) {
        const e = je().keyFromPrivate(Object(c.a)(this.privateKey)),
          r = je().keyFromPublic(Object(c.a)(Le(t)))
        return Object(c.h)('0x' + e.derive(r.getPublic()).toString(16), 32)
      }
      static isSigningKey(t) {
        return !(!t || !t._isSigningKey)
      }
    }
    function Fe(t, e) {
      const r = Object(c.n)(e),
        n = { r: Object(c.a)(r.r), s: Object(c.a)(r.s) }
      return (
        '0x' +
        je()
          .recoverPubKey(Object(c.a)(t), n, r.recoveryParam)
          .encode('hex', !1)
      )
    }
    function Le(t, e) {
      const r = Object(c.a)(t)
      if (32 === r.length) {
        const t = new Be(r)
        return e
          ? '0x' +
              je()
                .keyFromPrivate(r)
                .getPublic(!0, 'hex')
          : t.publicKey
      }
      return 33 === r.length
        ? e
          ? Object(c.i)(r)
          : '0x' +
            je()
              .keyFromPublic(r)
              .getPublic(!1, 'hex')
        : 65 === r.length
        ? e
          ? '0x' +
            je()
              .keyFromPublic(r)
              .getPublic(!0, 'hex')
          : Object(c.i)(r)
        : Re.throwArgumentError(
            'invalid public or private key',
            'key',
            '[REDACTED]',
          )
    }
    const Ue = new f.b('transactions/5.5.0')
    var De
    function ze(t) {
      return '0x' === t ? null : tt(t)
    }
    function Ge(t) {
      return '0x' === t ? Mt : y.from(t)
    }
    !(function(t) {
      ;(t[(t.legacy = 0)] = 'legacy'),
        (t[(t.eip2930 = 1)] = 'eip2930'),
        (t[(t.eip1559 = 2)] = 'eip1559')
    })(De || (De = {}))
    const Ke = [
        { name: 'nonce', maxLength: 32, numeric: !0 },
        { name: 'gasPrice', maxLength: 32, numeric: !0 },
        { name: 'gasLimit', maxLength: 32, numeric: !0 },
        { name: 'to', length: 20 },
        { name: 'value', maxLength: 32, numeric: !0 },
        { name: 'data' },
      ],
      qe = {
        chainId: !0,
        data: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        type: !0,
        value: !0,
      }
    function He(t) {
      const e = Le(t)
      return tt(Object(c.e)(D(Object(c.e)(e, 1)), 12))
    }
    function Ve(t, e) {
      return He(Fe(Object(c.a)(t), e))
    }
    function We(t, e) {
      const r = Object(c.o)(y.from(t).toHexString())
      return (
        r.length > 32 &&
          Ue.throwArgumentError(
            'invalid length for ' + e,
            'transaction:' + e,
            t,
          ),
        r
      )
    }
    function Je(t, e) {
      return {
        address: tt(t),
        storageKeys: (e || []).map(
          (e, r) => (
            32 !== Object(c.d)(e) &&
              Ue.throwArgumentError(
                'invalid access list storageKey',
                `accessList[${t}:${r}]`,
                e,
              ),
            e.toLowerCase()
          ),
        ),
      }
    }
    function $e(t) {
      if (Array.isArray(t))
        return t.map((t, e) =>
          Array.isArray(t)
            ? (t.length > 2 &&
                Ue.throwArgumentError(
                  'access list expected to be [ address, storageKeys[] ]',
                  `value[${e}]`,
                  t,
                ),
              Je(t[0], t[1]))
            : Je(t.address, t.storageKeys),
        )
      const e = Object.keys(t).map(e => {
        const r = t[e].reduce((t, e) => ((t[e] = !0), t), {})
        return Je(e, Object.keys(r).sort())
      })
      return e.sort((t, e) => t.address.localeCompare(e.address)), e
    }
    function Ze(t) {
      return $e(t).map(t => [t.address, t.storageKeys])
    }
    function Xe(t, e) {
      if (null != t.gasPrice) {
        const e = y.from(t.gasPrice),
          r = y.from(t.maxFeePerGas || 0)
        e.eq(r) ||
          Ue.throwArgumentError(
            'mismatch EIP-1559 gasPrice != maxFeePerGas',
            'tx',
            { gasPrice: e, maxFeePerGas: r },
          )
      }
      const r = [
        We(t.chainId || 0, 'chainId'),
        We(t.nonce || 0, 'nonce'),
        We(t.maxPriorityFeePerGas || 0, 'maxPriorityFeePerGas'),
        We(t.maxFeePerGas || 0, 'maxFeePerGas'),
        We(t.gasLimit || 0, 'gasLimit'),
        null != t.to ? tt(t.to) : '0x',
        We(t.value || 0, 'value'),
        t.data || '0x',
        Ze(t.accessList || []),
      ]
      if (e) {
        const t = Object(c.n)(e)
        r.push(We(t.recoveryParam, 'recoveryParam')),
          r.push(Object(c.o)(t.r)),
          r.push(Object(c.o)(t.s))
      }
      return Object(c.c)(['0x02', q(r)])
    }
    function Ye(t, e) {
      const r = [
        We(t.chainId || 0, 'chainId'),
        We(t.nonce || 0, 'nonce'),
        We(t.gasPrice || 0, 'gasPrice'),
        We(t.gasLimit || 0, 'gasLimit'),
        null != t.to ? tt(t.to) : '0x',
        We(t.value || 0, 'value'),
        t.data || '0x',
        Ze(t.accessList || []),
      ]
      if (e) {
        const t = Object(c.n)(e)
        r.push(We(t.recoveryParam, 'recoveryParam')),
          r.push(Object(c.o)(t.r)),
          r.push(Object(c.o)(t.s))
      }
      return Object(c.c)(['0x01', q(r)])
    }
    function Qe(t, e) {
      if (null == t.type || 0 === t.type)
        return (
          null != t.accessList &&
            Ue.throwArgumentError(
              'untyped transactions do not support accessList; include type: 1',
              'transaction',
              t,
            ),
          (function(t, e) {
            O(t, qe)
            const r = []
            Ke.forEach(function(e) {
              let n = t[e.name] || []
              const i = {}
              e.numeric && (i.hexPad = 'left'),
                (n = Object(c.a)(Object(c.i)(n, i))),
                e.length &&
                  n.length !== e.length &&
                  n.length > 0 &&
                  Ue.throwArgumentError(
                    'invalid length for ' + e.name,
                    'transaction:' + e.name,
                    n,
                  ),
                e.maxLength &&
                  ((n = Object(c.o)(n)),
                  n.length > e.maxLength &&
                    Ue.throwArgumentError(
                      'invalid length for ' + e.name,
                      'transaction:' + e.name,
                      n,
                    )),
                r.push(Object(c.i)(n))
            })
            let n = 0
            if (
              (null != t.chainId
                ? ((n = t.chainId),
                  'number' != typeof n &&
                    Ue.throwArgumentError(
                      'invalid transaction.chainId',
                      'transaction',
                      t,
                    ))
                : e &&
                  !Object(c.k)(e) &&
                  e.v > 28 &&
                  (n = Math.floor((e.v - 35) / 2)),
              0 !== n && (r.push(Object(c.i)(n)), r.push('0x'), r.push('0x')),
              !e)
            )
              return q(r)
            const i = Object(c.n)(e)
            let o = 27 + i.recoveryParam
            return (
              0 !== n
                ? (r.pop(),
                  r.pop(),
                  r.pop(),
                  (o += 2 * n + 8),
                  i.v > 28 &&
                    i.v !== o &&
                    Ue.throwArgumentError(
                      'transaction.chainId/signature.v mismatch',
                      'signature',
                      e,
                    ))
                : i.v !== o &&
                  Ue.throwArgumentError(
                    'transaction.chainId/signature.v mismatch',
                    'signature',
                    e,
                  ),
              r.push(Object(c.i)(o)),
              r.push(Object(c.o)(Object(c.a)(i.r))),
              r.push(Object(c.o)(Object(c.a)(i.s))),
              q(r)
            )
          })(t, e)
        )
      switch (t.type) {
        case 1:
          return Ye(t, e)
        case 2:
          return Xe(t, e)
      }
      return Ue.throwError(
        'unsupported transaction type: ' + t.type,
        f.b.errors.UNSUPPORTED_OPERATION,
        { operation: 'serializeTransaction', transactionType: t.type },
      )
    }
    function tr(t, e, r) {
      try {
        const r = Ge(e[0]).toNumber()
        if (0 !== r && 1 !== r) throw new Error('bad recid')
        t.v = r
      } catch (t) {
        Ue.throwArgumentError('invalid v for transaction type: 1', 'v', e[0])
      }
      ;(t.r = Object(c.h)(e[1], 32)), (t.s = Object(c.h)(e[2], 32))
      try {
        const e = D(r(t))
        t.from = Ve(e, { r: t.r, s: t.s, recoveryParam: t.v })
      } catch (t) {
        console.log(t)
      }
    }
    function er(t) {
      const e = Object(c.a)(t)
      if (e[0] > 127)
        return (function(t) {
          const e = W(t)
          9 !== e.length &&
            6 !== e.length &&
            Ue.throwArgumentError(
              'invalid raw transaction',
              'rawTransaction',
              t,
            )
          const r = {
            nonce: Ge(e[0]).toNumber(),
            gasPrice: Ge(e[1]),
            gasLimit: Ge(e[2]),
            to: ze(e[3]),
            value: Ge(e[4]),
            data: e[5],
            chainId: 0,
          }
          if (6 === e.length) return r
          try {
            r.v = y.from(e[6]).toNumber()
          } catch (t) {
            return console.log(t), r
          }
          if (
            ((r.r = Object(c.h)(e[7], 32)),
            (r.s = Object(c.h)(e[8], 32)),
            y.from(r.r).isZero() && y.from(r.s).isZero())
          )
            (r.chainId = r.v), (r.v = 0)
          else {
            ;(r.chainId = Math.floor((r.v - 35) / 2)),
              r.chainId < 0 && (r.chainId = 0)
            let n = r.v - 27
            const i = e.slice(0, 6)
            0 !== r.chainId &&
              (i.push(Object(c.i)(r.chainId)),
              i.push('0x'),
              i.push('0x'),
              (n -= 2 * r.chainId + 8))
            const o = D(q(i))
            try {
              r.from = Ve(o, {
                r: Object(c.i)(r.r),
                s: Object(c.i)(r.s),
                recoveryParam: n,
              })
            } catch (t) {
              console.log(t)
            }
            r.hash = D(t)
          }
          return (r.type = null), r
        })(e)
      switch (e[0]) {
        case 1:
          return (function(t) {
            const e = W(t.slice(1))
            8 !== e.length &&
              11 !== e.length &&
              Ue.throwArgumentError(
                'invalid component count for transaction type: 1',
                'payload',
                Object(c.i)(t),
              )
            const r = {
              type: 1,
              chainId: Ge(e[0]).toNumber(),
              nonce: Ge(e[1]).toNumber(),
              gasPrice: Ge(e[2]),
              gasLimit: Ge(e[3]),
              to: ze(e[4]),
              value: Ge(e[5]),
              data: e[6],
              accessList: $e(e[7]),
            }
            return 8 === e.length || ((r.hash = D(t)), tr(r, e.slice(8), Ye)), r
          })(e)
        case 2:
          return (function(t) {
            const e = W(t.slice(1))
            9 !== e.length &&
              12 !== e.length &&
              Ue.throwArgumentError(
                'invalid component count for transaction type: 2',
                'payload',
                Object(c.i)(t),
              )
            const r = Ge(e[2]),
              n = Ge(e[3]),
              i = {
                type: 2,
                chainId: Ge(e[0]).toNumber(),
                nonce: Ge(e[1]).toNumber(),
                maxPriorityFeePerGas: r,
                maxFeePerGas: n,
                gasPrice: null,
                gasLimit: Ge(e[4]),
                to: ze(e[5]),
                value: Ge(e[6]),
                data: e[7],
                accessList: $e(e[8]),
              }
            return 9 === e.length || ((i.hash = D(t)), tr(i, e.slice(9), Xe)), i
          })(e)
      }
      return Ue.throwError(
        'unsupported transaction type: ' + e[0],
        f.b.errors.UNSUPPORTED_OPERATION,
        { operation: 'parseTransaction', transactionType: e[0] },
      )
    }
    var rr = function(t, e, r, n) {
      return new (r || (r = Promise))(function(i, o) {
        function s(t) {
          try {
            u(n.next(t))
          } catch (t) {
            o(t)
          }
        }
        function a(t) {
          try {
            u(n.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function(t) {
                    t(e)
                  })).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
      })
    }
    const nr = new f.b('contracts/5.5.0'),
      ir = {
        chainId: !0,
        data: !0,
        from: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        value: !0,
        type: !0,
        accessList: !0,
        maxFeePerGas: !0,
        maxPriorityFeePerGas: !0,
        customData: !0,
      }
    function or(t, e) {
      return rr(this, void 0, void 0, function*() {
        const r = yield e
        'string' != typeof r &&
          nr.throwArgumentError('invalid address or ENS name', 'name', r)
        try {
          return tt(r)
        } catch (t) {}
        t ||
          nr.throwError(
            'a provider or signer is needed to resolve ENS names',
            f.b.errors.UNSUPPORTED_OPERATION,
            { operation: 'resolveName' },
          )
        const n = yield t.resolveName(r)
        return (
          null == n &&
            nr.throwArgumentError(
              'resolver or addr is not configured for ENS name',
              'name',
              r,
            ),
          n
        )
      })
    }
    function sr(t, e, r) {
      return rr(this, void 0, void 0, function*() {
        return Array.isArray(r)
          ? yield Promise.all(
              r.map((r, n) => sr(t, Array.isArray(e) ? e[n] : e[r.name], r)),
            )
          : 'address' === r.type
          ? yield or(t, e)
          : 'tuple' === r.type
          ? yield sr(t, e, r.components)
          : 'array' === r.baseType
          ? Array.isArray(e)
            ? yield Promise.all(e.map(e => sr(t, e, r.arrayChildren)))
            : Promise.reject(
                nr.makeError(
                  'invalid value for array',
                  f.b.errors.INVALID_ARGUMENT,
                  { argument: 'value', value: e },
                ),
              )
          : e
      })
    }
    function ar(t, e, r) {
      return rr(this, void 0, void 0, function*() {
        let n = {}
        r.length === e.inputs.length + 1 &&
          'object' == typeof r[r.length - 1] &&
          (n = N(r.pop())),
          nr.checkArgumentCount(
            r.length,
            e.inputs.length,
            'passed to contract',
          ),
          t.signer
            ? n.from
              ? (n.from = P({
                  override: or(t.signer, n.from),
                  signer: t.signer.getAddress(),
                }).then(t =>
                  rr(this, void 0, void 0, function*() {
                    return (
                      tt(t.signer) !== t.override &&
                        nr.throwError(
                          'Contract with a Signer cannot override from',
                          f.b.errors.UNSUPPORTED_OPERATION,
                          { operation: 'overrides.from' },
                        ),
                      t.override
                    )
                  }),
                ))
              : (n.from = t.signer.getAddress())
            : n.from && (n.from = or(t.provider, n.from))
        const i = yield P({
            args: sr(t.signer || t.provider, r, e.inputs),
            address: t.resolvedAddress,
            overrides: P(n) || {},
          }),
          o = t.interface.encodeFunctionData(e, i.args),
          s = { data: o, to: i.address },
          a = i.overrides
        if (
          (null != a.nonce && (s.nonce = y.from(a.nonce).toNumber()),
          null != a.gasLimit && (s.gasLimit = y.from(a.gasLimit)),
          null != a.gasPrice && (s.gasPrice = y.from(a.gasPrice)),
          null != a.maxFeePerGas && (s.maxFeePerGas = y.from(a.maxFeePerGas)),
          null != a.maxPriorityFeePerGas &&
            (s.maxPriorityFeePerGas = y.from(a.maxPriorityFeePerGas)),
          null != a.from && (s.from = a.from),
          null != a.type && (s.type = a.type),
          null != a.accessList && (s.accessList = $e(a.accessList)),
          null == s.gasLimit && null != e.gas)
        ) {
          let t = 21e3
          const r = Object(c.a)(o)
          for (let e = 0; e < r.length; e++) (t += 4), r[e] && (t += 64)
          s.gasLimit = y.from(e.gas).add(t)
        }
        if (a.value) {
          const t = y.from(a.value)
          t.isZero() ||
            e.payable ||
            nr.throwError(
              'non-payable method cannot override value',
              f.b.errors.UNSUPPORTED_OPERATION,
              { operation: 'overrides.value', value: n.value },
            ),
            (s.value = t)
        }
        a.customData && (s.customData = N(a.customData)),
          delete n.nonce,
          delete n.gasLimit,
          delete n.gasPrice,
          delete n.from,
          delete n.value,
          delete n.type,
          delete n.accessList,
          delete n.maxFeePerGas,
          delete n.maxPriorityFeePerGas,
          delete n.customData
        const u = Object.keys(n).filter(t => null != n[t])
        return (
          u.length &&
            nr.throwError(
              'cannot override ' + u.map(t => JSON.stringify(t)).join(','),
              f.b.errors.UNSUPPORTED_OPERATION,
              { operation: 'overrides', overrides: u },
            ),
          s
        )
      })
    }
    function ur(t, e) {
      const r = e.wait.bind(e)
      e.wait = e =>
        r(e).then(
          e => (
            (e.events = e.logs.map(r => {
              let n = T(r),
                i = null
              try {
                i = t.interface.parseLog(r)
              } catch (t) {}
              return (
                i &&
                  ((n.args = i.args),
                  (n.decode = (e, r) =>
                    t.interface.decodeEventLog(i.eventFragment, e, r)),
                  (n.event = i.name),
                  (n.eventSignature = i.signature)),
                (n.removeListener = () => t.provider),
                (n.getBlock = () => t.provider.getBlock(e.blockHash)),
                (n.getTransaction = () =>
                  t.provider.getTransaction(e.transactionHash)),
                (n.getTransactionReceipt = () => Promise.resolve(e)),
                n
              )
            })),
            e
          ),
        )
    }
    function cr(t, e, r) {
      const n = t.signer || t.provider
      return function(...i) {
        return rr(this, void 0, void 0, function*() {
          let o = void 0
          if (
            i.length === e.inputs.length + 1 &&
            'object' == typeof i[i.length - 1]
          ) {
            const t = N(i.pop())
            null != t.blockTag && (o = yield t.blockTag),
              delete t.blockTag,
              i.push(t)
          }
          null != t.deployTransaction && (yield t._deployed(o))
          const s = yield ar(t, e, i),
            a = yield n.call(s, o)
          try {
            let n = t.interface.decodeFunctionResult(e, a)
            return r && 1 === e.outputs.length && (n = n[0]), n
          } catch (e) {
            throw (e.code === f.b.errors.CALL_EXCEPTION &&
              ((e.address = t.address), (e.args = i), (e.transaction = s)),
            e)
          }
        })
      }
    }
    function lr(t, e, r) {
      return e.constant
        ? cr(t, e, r)
        : (function(t, e) {
            return function(...r) {
              return rr(this, void 0, void 0, function*() {
                t.signer ||
                  nr.throwError(
                    'sending a transaction requires a signer',
                    f.b.errors.UNSUPPORTED_OPERATION,
                    { operation: 'sendTransaction' },
                  ),
                  null != t.deployTransaction && (yield t._deployed())
                const n = yield ar(t, e, r),
                  i = yield t.signer.sendTransaction(n)
                return ur(t, i), i
              })
            }
          })(t, e)
    }
    function hr(t) {
      return !t.address || (null != t.topics && 0 !== t.topics.length)
        ? (t.address || '*') +
            '@' +
            (t.topics
              ? t.topics
                  .map(t => (Array.isArray(t) ? t.join('|') : t))
                  .join(':')
              : '')
        : '*'
    }
    class fr {
      constructor(t, e) {
        A(this, 'tag', t), A(this, 'filter', e), (this._listeners = [])
      }
      addListener(t, e) {
        this._listeners.push({ listener: t, once: e })
      }
      removeListener(t) {
        let e = !1
        this._listeners = this._listeners.filter(
          r => !(!e && r.listener === t) || ((e = !0), !1),
        )
      }
      removeAllListeners() {
        this._listeners = []
      }
      listeners() {
        return this._listeners.map(t => t.listener)
      }
      listenerCount() {
        return this._listeners.length
      }
      run(t) {
        const e = this.listenerCount()
        return (
          (this._listeners = this._listeners.filter(e => {
            const r = t.slice()
            return (
              setTimeout(() => {
                e.listener.apply(this, r)
              }, 0),
              !e.once
            )
          })),
          e
        )
      }
      prepareEvent(t) {}
      getEmit(t) {
        return [t]
      }
    }
    class dr extends fr {
      constructor() {
        super('error', null)
      }
    }
    class pr extends fr {
      constructor(t, e, r, n) {
        const i = { address: t }
        let o = e.getEventTopic(r)
        n
          ? (o !== n[0] && nr.throwArgumentError('topic mismatch', 'topics', n),
            (i.topics = n.slice()))
          : (i.topics = [o]),
          super(hr(i), i),
          A(this, 'address', t),
          A(this, 'interface', e),
          A(this, 'fragment', r)
      }
      prepareEvent(t) {
        super.prepareEvent(t),
          (t.event = this.fragment.name),
          (t.eventSignature = this.fragment.format()),
          (t.decode = (t, e) =>
            this.interface.decodeEventLog(this.fragment, t, e))
        try {
          t.args = this.interface.decodeEventLog(
            this.fragment,
            t.data,
            t.topics,
          )
        } catch (e) {
          ;(t.args = null), (t.decodeError = e)
        }
      }
      getEmit(t) {
        const e = C(t.args)
        if (e.length) throw e[0].error
        const r = (t.args || []).slice()
        return r.push(t), r
      }
    }
    class mr extends fr {
      constructor(t, e) {
        super('*', { address: t }),
          A(this, 'address', t),
          A(this, 'interface', e)
      }
      prepareEvent(t) {
        super.prepareEvent(t)
        try {
          const e = this.interface.parseLog(t)
          ;(t.event = e.name),
            (t.eventSignature = e.signature),
            (t.decode = (t, r) =>
              this.interface.decodeEventLog(e.eventFragment, t, r)),
            (t.args = e.args)
        } catch (t) {}
      }
    }
    class gr {
      constructor(t, e, r) {
        nr.checkNew(new.target, yr),
          A(this, 'interface', S(new.target, 'getInterface')(e)),
          null == r
            ? (A(this, 'provider', null), A(this, 'signer', null))
            : Me.isSigner(r)
            ? (A(this, 'provider', r.provider || null), A(this, 'signer', r))
            : Se.isProvider(r)
            ? (A(this, 'provider', r), A(this, 'signer', null))
            : nr.throwArgumentError(
                'invalid signer or provider',
                'signerOrProvider',
                r,
              ),
          A(this, 'callStatic', {}),
          A(this, 'estimateGas', {}),
          A(this, 'functions', {}),
          A(this, 'populateTransaction', {}),
          A(this, 'filters', {})
        {
          const t = {}
          Object.keys(this.interface.events).forEach(e => {
            const r = this.interface.events[e]
            A(this.filters, e, (...t) => ({
              address: this.address,
              topics: this.interface.encodeFilterTopics(r, t),
            })),
              t[r.name] || (t[r.name] = []),
              t[r.name].push(e)
          }),
            Object.keys(t).forEach(e => {
              const r = t[e]
              1 === r.length
                ? A(this.filters, e, this.filters[r[0]])
                : nr.warn(`Duplicate definition of ${e} (${r.join(', ')})`)
            })
        }
        if (
          (A(this, '_runningEvents', {}),
          A(this, '_wrappedEmits', {}),
          null == t &&
            nr.throwArgumentError(
              'invalid contract address or ENS name',
              'addressOrName',
              t,
            ),
          A(this, 'address', t),
          this.provider)
        )
          A(this, 'resolvedAddress', or(this.provider, t))
        else
          try {
            A(this, 'resolvedAddress', Promise.resolve(tt(t)))
          } catch (t) {
            nr.throwError(
              'provider is required to use ENS name as contract address',
              f.b.errors.UNSUPPORTED_OPERATION,
              { operation: 'new Contract' },
            )
          }
        const n = {},
          i = {}
        Object.keys(this.interface.functions).forEach(t => {
          const e = this.interface.functions[t]
          if (i[t]) nr.warn('Duplicate ABI entry for ' + JSON.stringify(t))
          else {
            i[t] = !0
            {
              const r = e.name
              n['%' + r] || (n['%' + r] = []), n['%' + r].push(t)
            }
            null == this[t] && A(this, t, lr(this, e, !0)),
              null == this.functions[t] &&
                A(this.functions, t, lr(this, e, !1)),
              null == this.callStatic[t] &&
                A(this.callStatic, t, cr(this, e, !0)),
              null == this.populateTransaction[t] &&
                A(
                  this.populateTransaction,
                  t,
                  (function(t, e) {
                    return function(...r) {
                      return ar(t, e, r)
                    }
                  })(this, e),
                ),
              null == this.estimateGas[t] &&
                A(
                  this.estimateGas,
                  t,
                  (function(t, e) {
                    const r = t.signer || t.provider
                    return function(...n) {
                      return rr(this, void 0, void 0, function*() {
                        r ||
                          nr.throwError(
                            'estimate require a provider or signer',
                            f.b.errors.UNSUPPORTED_OPERATION,
                            { operation: 'estimateGas' },
                          )
                        const i = yield ar(t, e, n)
                        return yield r.estimateGas(i)
                      })
                    }
                  })(this, e),
                )
          }
        }),
          Object.keys(n).forEach(t => {
            const e = n[t]
            if (e.length > 1) return
            t = t.substring(1)
            const r = e[0]
            try {
              null == this[t] && A(this, t, this[r])
            } catch (t) {}
            null == this.functions[t] &&
              A(this.functions, t, this.functions[r]),
              null == this.callStatic[t] &&
                A(this.callStatic, t, this.callStatic[r]),
              null == this.populateTransaction[t] &&
                A(this.populateTransaction, t, this.populateTransaction[r]),
              null == this.estimateGas[t] &&
                A(this.estimateGas, t, this.estimateGas[r])
          })
      }
      static getContractAddress(t) {
        return nt(t)
      }
      static getInterface(t) {
        return Ee.isInterface(t) ? t : new Ee(t)
      }
      deployed() {
        return this._deployed()
      }
      _deployed(t) {
        return (
          this._deployedPromise ||
            (this.deployTransaction
              ? (this._deployedPromise = this.deployTransaction
                  .wait()
                  .then(() => this))
              : (this._deployedPromise = this.provider
                  .getCode(this.address, t)
                  .then(
                    t => (
                      '0x' === t &&
                        nr.throwError(
                          'contract not deployed',
                          f.b.errors.UNSUPPORTED_OPERATION,
                          {
                            contractAddress: this.address,
                            operation: 'getDeployed',
                          },
                        ),
                      this
                    ),
                  ))),
          this._deployedPromise
        )
      }
      fallback(t) {
        this.signer ||
          nr.throwError(
            'sending a transactions require a signer',
            f.b.errors.UNSUPPORTED_OPERATION,
            { operation: 'sendTransaction(fallback)' },
          )
        const e = N(t || {})
        return (
          ['from', 'to'].forEach(function(t) {
            null != e[t] &&
              nr.throwError(
                'cannot override ' + t,
                f.b.errors.UNSUPPORTED_OPERATION,
                { operation: t },
              )
          }),
          (e.to = this.resolvedAddress),
          this.deployed().then(() => this.signer.sendTransaction(e))
        )
      }
      connect(t) {
        'string' == typeof t && (t = new Te(t, this.provider))
        const e = new this.constructor(this.address, this.interface, t)
        return (
          this.deployTransaction &&
            A(e, 'deployTransaction', this.deployTransaction),
          e
        )
      }
      attach(t) {
        return new this.constructor(
          t,
          this.interface,
          this.signer || this.provider,
        )
      }
      static isIndexed(t) {
        return be.isIndexed(t)
      }
      _normalizeRunningEvent(t) {
        return this._runningEvents[t.tag] ? this._runningEvents[t.tag] : t
      }
      _getRunningEvent(t) {
        if ('string' == typeof t) {
          if ('error' === t) return this._normalizeRunningEvent(new dr())
          if ('event' === t)
            return this._normalizeRunningEvent(new fr('event', null))
          if ('*' === t)
            return this._normalizeRunningEvent(
              new mr(this.address, this.interface),
            )
          const e = this.interface.getEvent(t)
          return this._normalizeRunningEvent(
            new pr(this.address, this.interface, e),
          )
        }
        if (t.topics && t.topics.length > 0) {
          try {
            const e = t.topics[0]
            if ('string' != typeof e) throw new Error('invalid topic')
            const r = this.interface.getEvent(e)
            return this._normalizeRunningEvent(
              new pr(this.address, this.interface, r, t.topics),
            )
          } catch (t) {}
          const e = { address: this.address, topics: t.topics }
          return this._normalizeRunningEvent(new fr(hr(e), e))
        }
        return this._normalizeRunningEvent(new mr(this.address, this.interface))
      }
      _checkRunningEvents(t) {
        if (0 === t.listenerCount()) {
          delete this._runningEvents[t.tag]
          const e = this._wrappedEmits[t.tag]
          e &&
            t.filter &&
            (this.provider.off(t.filter, e), delete this._wrappedEmits[t.tag])
        }
      }
      _wrapEvent(t, e, r) {
        const n = T(e)
        return (
          (n.removeListener = () => {
            r && (t.removeListener(r), this._checkRunningEvents(t))
          }),
          (n.getBlock = () => this.provider.getBlock(e.blockHash)),
          (n.getTransaction = () =>
            this.provider.getTransaction(e.transactionHash)),
          (n.getTransactionReceipt = () =>
            this.provider.getTransactionReceipt(e.transactionHash)),
          t.prepareEvent(n),
          n
        )
      }
      _addEventListener(t, e, r) {
        if (
          (this.provider ||
            nr.throwError(
              'events require a provider or a signer with a provider',
              f.b.errors.UNSUPPORTED_OPERATION,
              { operation: 'once' },
            ),
          t.addListener(e, r),
          (this._runningEvents[t.tag] = t),
          !this._wrappedEmits[t.tag])
        ) {
          const r = r => {
            let n = this._wrapEvent(t, r, e)
            if (null == n.decodeError)
              try {
                const e = t.getEmit(n)
                this.emit(t.filter, ...e)
              } catch (t) {
                n.decodeError = t.error
              }
            null != t.filter && this.emit('event', n),
              null != n.decodeError && this.emit('error', n.decodeError, n)
          }
          ;(this._wrappedEmits[t.tag] = r),
            null != t.filter && this.provider.on(t.filter, r)
        }
      }
      queryFilter(t, e, r) {
        const n = this._getRunningEvent(t),
          i = N(n.filter)
        return (
          'string' == typeof e && Object(c.l)(e, 32)
            ? (null != r &&
                nr.throwArgumentError(
                  'cannot specify toBlock with blockhash',
                  'toBlock',
                  r,
                ),
              (i.blockHash = e))
            : ((i.fromBlock = null != e ? e : 0),
              (i.toBlock = null != r ? r : 'latest')),
          this.provider
            .getLogs(i)
            .then(t => t.map(t => this._wrapEvent(n, t, null)))
        )
      }
      on(t, e) {
        return this._addEventListener(this._getRunningEvent(t), e, !1), this
      }
      once(t, e) {
        return this._addEventListener(this._getRunningEvent(t), e, !0), this
      }
      emit(t, ...e) {
        if (!this.provider) return !1
        const r = this._getRunningEvent(t),
          n = r.run(e) > 0
        return this._checkRunningEvents(r), n
      }
      listenerCount(t) {
        return this.provider
          ? null == t
            ? Object.keys(this._runningEvents).reduce(
                (t, e) => t + this._runningEvents[e].listenerCount(),
                0,
              )
            : this._getRunningEvent(t).listenerCount()
          : 0
      }
      listeners(t) {
        if (!this.provider) return []
        if (null == t) {
          const t = []
          for (let e in this._runningEvents)
            this._runningEvents[e].listeners().forEach(e => {
              t.push(e)
            })
          return t
        }
        return this._getRunningEvent(t).listeners()
      }
      removeAllListeners(t) {
        if (!this.provider) return this
        if (null == t) {
          for (const t in this._runningEvents) {
            const e = this._runningEvents[t]
            e.removeAllListeners(), this._checkRunningEvents(e)
          }
          return this
        }
        const e = this._getRunningEvent(t)
        return e.removeAllListeners(), this._checkRunningEvents(e), this
      }
      off(t, e) {
        if (!this.provider) return this
        const r = this._getRunningEvent(t)
        return r.removeListener(e), this._checkRunningEvents(r), this
      }
      removeListener(t, e) {
        return this.off(t, e)
      }
    }
    class yr extends gr {}
    class br {
      constructor(t, e, r) {
        let n = null
        ;(n =
          'string' == typeof e
            ? e
            : Object(c.j)(e)
            ? Object(c.i)(e)
            : e && 'string' == typeof e.object
            ? e.object
            : '!'),
          '0x' !== n.substring(0, 2) && (n = '0x' + n),
          (!Object(c.l)(n) || n.length % 2) &&
            nr.throwArgumentError('invalid bytecode', 'bytecode', e),
          r &&
            !Me.isSigner(r) &&
            nr.throwArgumentError('invalid signer', 'signer', r),
          A(this, 'bytecode', n),
          A(this, 'interface', S(new.target, 'getInterface')(t)),
          A(this, 'signer', r || null)
      }
      getDeployTransaction(...t) {
        let e = {}
        if (
          t.length === this.interface.deploy.inputs.length + 1 &&
          'object' == typeof t[t.length - 1]
        ) {
          e = N(t.pop())
          for (const t in e)
            if (!ir[t]) throw new Error('unknown transaction override ' + t)
        }
        if (
          (['data', 'from', 'to'].forEach(t => {
            null != e[t] &&
              nr.throwError(
                'cannot override ' + t,
                f.b.errors.UNSUPPORTED_OPERATION,
                { operation: t },
              )
          }),
          e.value)
        ) {
          y.from(e.value).isZero() ||
            this.interface.deploy.payable ||
            nr.throwError(
              'non-payable constructor cannot override value',
              f.b.errors.UNSUPPORTED_OPERATION,
              { operation: 'overrides.value', value: e.value },
            )
        }
        return (
          nr.checkArgumentCount(
            t.length,
            this.interface.deploy.inputs.length,
            ' in Contract constructor',
          ),
          (e.data = Object(c.i)(
            Object(c.b)([this.bytecode, this.interface.encodeDeploy(t)]),
          )),
          e
        )
      }
      deploy(...t) {
        return rr(this, void 0, void 0, function*() {
          let e = {}
          t.length === this.interface.deploy.inputs.length + 1 && (e = t.pop()),
            nr.checkArgumentCount(
              t.length,
              this.interface.deploy.inputs.length,
              ' in Contract constructor',
            )
          const r = yield sr(this.signer, t, this.interface.deploy.inputs)
          r.push(e)
          const n = this.getDeployTransaction(...r),
            i = yield this.signer.sendTransaction(n),
            o = S(this.constructor, 'getContractAddress')(i),
            s = S(this.constructor, 'getContract')(
              o,
              this.interface,
              this.signer,
            )
          return ur(s, i), A(s, 'deployTransaction', i), s
        })
      }
      attach(t) {
        return this.constructor.getContract(t, this.interface, this.signer)
      }
      connect(t) {
        return new this.constructor(this.interface, this.bytecode, t)
      }
      static fromSolidity(t, e) {
        null == t &&
          nr.throwError(
            'missing compiler output',
            f.b.errors.MISSING_ARGUMENT,
            { argument: 'compilerOutput' },
          ),
          'string' == typeof t && (t = JSON.parse(t))
        const r = t.abi
        let n = null
        return (
          t.bytecode
            ? (n = t.bytecode)
            : t.evm && t.evm.bytecode && (n = t.evm.bytecode),
          new this(r, n, e)
        )
      }
      static getInterface(t) {
        return yr.getInterface(t)
      }
      static getContractAddress(t) {
        return nt(t)
      }
      static getContract(t, e, r) {
        return new yr(t, e, r)
      }
    }
    const vr = new f.b('bignumber/5.5.0'),
      wr = {},
      Er = y.from(0),
      _r = y.from(-1)
    function kr(t, e, r, n) {
      const i = { fault: e, operation: r }
      return (
        void 0 !== n && (i.value = n),
        vr.throwError(t, f.b.errors.NUMERIC_FAULT, i)
      )
    }
    let Ar = '0'
    for (; Ar.length < 256; ) Ar += Ar
    function Sr(t) {
      if ('number' != typeof t)
        try {
          t = y.from(t).toNumber()
        } catch (t) {}
      return 'number' == typeof t && t >= 0 && t <= 256 && !(t % 1)
        ? '1' + Ar.substring(0, t)
        : vr.throwArgumentError('invalid decimal size', 'decimals', t)
    }
    function Pr(t, e) {
      null == e && (e = 0)
      const r = Sr(e),
        n = (t = y.from(t)).lt(Er)
      n && (t = t.mul(_r))
      let i = t.mod(r).toString()
      for (; i.length < r.length - 1; ) i = '0' + i
      i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1]
      const o = t.div(r).toString()
      return (t = 1 === r.length ? o : o + '.' + i), n && (t = '-' + t), t
    }
    function Or(t, e) {
      null == e && (e = 0)
      const r = Sr(e)
      ;('string' == typeof t && t.match(/^-?[0-9.]+$/)) ||
        vr.throwArgumentError('invalid decimal value', 'value', t)
      const n = '-' === t.substring(0, 1)
      n && (t = t.substring(1)),
        '.' === t && vr.throwArgumentError('missing value', 'value', t)
      const i = t.split('.')
      i.length > 2 &&
        vr.throwArgumentError('too many decimal points', 'value', t)
      let o = i[0],
        s = i[1]
      for (o || (o = '0'), s || (s = '0'); '0' === s[s.length - 1]; )
        s = s.substring(0, s.length - 1)
      for (
        s.length > r.length - 1 &&
          kr(
            'fractional component exceeds decimals',
            'underflow',
            'parseFixed',
          ),
          '' === s && (s = '0');
        s.length < r.length - 1;

      )
        s += '0'
      const a = y.from(o),
        u = y.from(s)
      let c = a.mul(r).add(u)
      return n && (c = c.mul(_r)), c
    }
    class Nr {
      constructor(t, e, r, n) {
        t !== wr &&
          vr.throwError(
            'cannot use FixedFormat constructor; use FixedFormat.from',
            f.b.errors.UNSUPPORTED_OPERATION,
            { operation: 'new FixedFormat' },
          ),
          (this.signed = e),
          (this.width = r),
          (this.decimals = n),
          (this.name = (e ? '' : 'u') + 'fixed' + String(r) + 'x' + String(n)),
          (this._multiplier = Sr(n)),
          Object.freeze(this)
      }
      static from(t) {
        if (t instanceof Nr) return t
        'number' == typeof t && (t = 'fixed128x' + t)
        let e = !0,
          r = 128,
          n = 18
        if ('string' == typeof t)
          if ('fixed' === t);
          else if ('ufixed' === t) e = !1
          else {
            const i = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/)
            i || vr.throwArgumentError('invalid fixed format', 'format', t),
              (e = 'u' !== i[1]),
              (r = parseInt(i[2])),
              (n = parseInt(i[3]))
          }
        else if (t) {
          const i = (e, r, n) =>
            null == t[e]
              ? n
              : (typeof t[e] !== r &&
                  vr.throwArgumentError(
                    'invalid fixed format (' + e + ' not ' + r + ')',
                    'format.' + e,
                    t[e],
                  ),
                t[e])
          ;(e = i('signed', 'boolean', e)),
            (r = i('width', 'number', r)),
            (n = i('decimals', 'number', n))
        }
        return (
          r % 8 &&
            vr.throwArgumentError(
              'invalid fixed format width (not byte aligned)',
              'format.width',
              r,
            ),
          n > 80 &&
            vr.throwArgumentError(
              'invalid fixed format (decimals too large)',
              'format.decimals',
              n,
            ),
          new Nr(wr, e, r, n)
        )
      }
    }
    class xr {
      constructor(t, e, r, n) {
        vr.checkNew(new.target, xr),
          t !== wr &&
            vr.throwError(
              'cannot use FixedNumber constructor; use FixedNumber.from',
              f.b.errors.UNSUPPORTED_OPERATION,
              { operation: 'new FixedFormat' },
            ),
          (this.format = n),
          (this._hex = e),
          (this._value = r),
          (this._isFixedNumber = !0),
          Object.freeze(this)
      }
      _checkFormat(t) {
        this.format.name !== t.format.name &&
          vr.throwArgumentError(
            'incompatible format; use fixedNumber.toFormat',
            'other',
            t,
          )
      }
      addUnsafe(t) {
        this._checkFormat(t)
        const e = Or(this._value, this.format.decimals),
          r = Or(t._value, t.format.decimals)
        return xr.fromValue(e.add(r), this.format.decimals, this.format)
      }
      subUnsafe(t) {
        this._checkFormat(t)
        const e = Or(this._value, this.format.decimals),
          r = Or(t._value, t.format.decimals)
        return xr.fromValue(e.sub(r), this.format.decimals, this.format)
      }
      mulUnsafe(t) {
        this._checkFormat(t)
        const e = Or(this._value, this.format.decimals),
          r = Or(t._value, t.format.decimals)
        return xr.fromValue(
          e.mul(r).div(this.format._multiplier),
          this.format.decimals,
          this.format,
        )
      }
      divUnsafe(t) {
        this._checkFormat(t)
        const e = Or(this._value, this.format.decimals),
          r = Or(t._value, t.format.decimals)
        return xr.fromValue(
          e.mul(this.format._multiplier).div(r),
          this.format.decimals,
          this.format,
        )
      }
      floor() {
        const t = this.toString().split('.')
        1 === t.length && t.push('0')
        let e = xr.from(t[0], this.format)
        const r = !t[1].match(/^(0*)$/)
        return (
          this.isNegative() && r && (e = e.subUnsafe(Mr.toFormat(e.format))), e
        )
      }
      ceiling() {
        const t = this.toString().split('.')
        1 === t.length && t.push('0')
        let e = xr.from(t[0], this.format)
        const r = !t[1].match(/^(0*)$/)
        return (
          !this.isNegative() && r && (e = e.addUnsafe(Mr.toFormat(e.format))), e
        )
      }
      round(t) {
        null == t && (t = 0)
        const e = this.toString().split('.')
        if (
          (1 === e.length && e.push('0'),
          (t < 0 || t > 80 || t % 1) &&
            vr.throwArgumentError('invalid decimal count', 'decimals', t),
          e[1].length <= t)
        )
          return this
        const r = xr.from('1' + Ar.substring(0, t), this.format),
          n = Tr.toFormat(this.format)
        return this.mulUnsafe(r)
          .addUnsafe(n)
          .floor()
          .divUnsafe(r)
      }
      isZero() {
        return '0.0' === this._value || '0' === this._value
      }
      isNegative() {
        return '-' === this._value[0]
      }
      toString() {
        return this._value
      }
      toHexString(t) {
        if (null == t) return this._hex
        t % 8 && vr.throwArgumentError('invalid byte width', 'width', t)
        const e = y
          .from(this._hex)
          .fromTwos(this.format.width)
          .toTwos(t)
          .toHexString()
        return Object(c.h)(e, t / 8)
      }
      toUnsafeFloat() {
        return parseFloat(this.toString())
      }
      toFormat(t) {
        return xr.fromString(this._value, t)
      }
      static fromValue(t, e, r) {
        return (
          null != r ||
            null == e ||
            (function(t) {
              return (
                null != t &&
                (y.isBigNumber(t) ||
                  ('number' == typeof t && t % 1 == 0) ||
                  ('string' == typeof t && !!t.match(/^-?[0-9]+$/)) ||
                  Object(c.l)(t) ||
                  'bigint' == typeof t ||
                  Object(c.j)(t))
              )
            })(e) ||
            ((r = e), (e = null)),
          null == e && (e = 0),
          null == r && (r = 'fixed'),
          xr.fromString(Pr(t, e), Nr.from(r))
        )
      }
      static fromString(t, e) {
        null == e && (e = 'fixed')
        const r = Nr.from(e),
          n = Or(t, r.decimals)
        !r.signed &&
          n.lt(Er) &&
          kr('unsigned value cannot be negative', 'overflow', 'value', t)
        let i = null
        r.signed
          ? (i = n.toTwos(r.width).toHexString())
          : ((i = n.toHexString()), (i = Object(c.h)(i, r.width / 8)))
        const o = Pr(n, r.decimals)
        return new xr(wr, i, o, r)
      }
      static fromBytes(t, e) {
        null == e && (e = 'fixed')
        const r = Nr.from(e)
        if (Object(c.a)(t).length > r.width / 8) throw new Error('overflow')
        let n = y.from(t)
        r.signed && (n = n.fromTwos(r.width))
        const i = n.toTwos((r.signed ? 0 : 1) + r.width).toHexString(),
          o = Pr(n, r.decimals)
        return new xr(wr, i, o, r)
      }
      static from(t, e) {
        if ('string' == typeof t) return xr.fromString(t, e)
        if (Object(c.j)(t)) return xr.fromBytes(t, e)
        try {
          return xr.fromValue(t, 0, e)
        } catch (t) {
          if (t.code !== f.b.errors.INVALID_ARGUMENT) throw t
        }
        return vr.throwArgumentError('invalid FixedNumber value', 'value', t)
      }
      static isFixedNumber(t) {
        return !(!t || !t._isFixedNumber)
      }
    }
    const Mr = xr.from(1),
      Tr = xr.from('0.5')
    function Ir(t) {
      return (
        'string' == typeof t && (t = ht(t)),
        D(
          Object(c.b)([
            ht('Ethereum Signed Message:\n'),
            ht(String(t.length)),
            t,
          ]),
        )
      )
    }
    var Rr = function(t, e, r, n) {
      return new (r || (r = Promise))(function(i, o) {
        function s(t) {
          try {
            u(n.next(t))
          } catch (t) {
            o(t)
          }
        }
        function a(t) {
          try {
            u(n.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function(t) {
                    t(e)
                  })).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
      })
    }
    const Cr = new f.b('hash/5.5.0'),
      jr = new Uint8Array(32)
    jr.fill(0)
    const Br = y.from(-1),
      Fr = y.from(0),
      Lr = y.from(1),
      Ur = y.from(
        '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      )
    const Dr = Object(c.h)(Lr.toHexString(), 32),
      zr = Object(c.h)(Fr.toHexString(), 32),
      Gr = {
        name: 'string',
        version: 'string',
        chainId: 'uint256',
        verifyingContract: 'address',
        salt: 'bytes32',
      },
      Kr = ['name', 'version', 'chainId', 'verifyingContract', 'salt']
    function qr(t) {
      return function(e) {
        return (
          'string' != typeof e &&
            Cr.throwArgumentError(
              'invalid domain value for ' + JSON.stringify(t),
              'domain.' + t,
              e,
            ),
          e
        )
      }
    }
    const Hr = {
      name: qr('name'),
      version: qr('version'),
      chainId: function(t) {
        try {
          return y.from(t).toString()
        } catch (t) {}
        return Cr.throwArgumentError(
          'invalid domain value for "chainId"',
          'domain.chainId',
          t,
        )
      },
      verifyingContract: function(t) {
        try {
          return tt(t).toLowerCase()
        } catch (t) {}
        return Cr.throwArgumentError(
          'invalid domain value "verifyingContract"',
          'domain.verifyingContract',
          t,
        )
      },
      salt: function(t) {
        try {
          const e = Object(c.a)(t)
          if (32 !== e.length) throw new Error('bad length')
          return Object(c.i)(e)
        } catch (t) {}
        return Cr.throwArgumentError(
          'invalid domain value "salt"',
          'domain.salt',
          t,
        )
      },
    }
    function Vr(t) {
      {
        const e = t.match(/^(u?)int(\d*)$/)
        if (e) {
          const r = '' === e[1],
            n = parseInt(e[2] || '256')
          ;(n % 8 != 0 || n > 256 || (e[2] && e[2] !== String(n))) &&
            Cr.throwArgumentError('invalid numeric width', 'type', t)
          const i = Ur.mask(r ? n - 1 : n),
            o = r ? i.add(Lr).mul(Br) : Fr
          return function(e) {
            const r = y.from(e)
            return (
              (r.lt(o) || r.gt(i)) &&
                Cr.throwArgumentError(
                  'value out-of-bounds for ' + t,
                  'value',
                  e,
                ),
              Object(c.h)(r.toTwos(256).toHexString(), 32)
            )
          }
        }
      }
      {
        const e = t.match(/^bytes(\d+)$/)
        if (e) {
          const r = parseInt(e[1])
          return (
            (0 === r || r > 32 || e[1] !== String(r)) &&
              Cr.throwArgumentError('invalid bytes width', 'type', t),
            function(e) {
              return (
                Object(c.a)(e).length !== r &&
                  Cr.throwArgumentError('invalid length for ' + t, 'value', e),
                (function(t) {
                  const e = Object(c.a)(t),
                    r = e.length % 32
                  return r ? Object(c.c)([e, jr.slice(r)]) : Object(c.i)(e)
                })(e)
              )
            }
          )
        }
      }
      switch (t) {
        case 'address':
          return function(t) {
            return Object(c.h)(tt(t), 32)
          }
        case 'bool':
          return function(t) {
            return t ? Dr : zr
          }
        case 'bytes':
          return function(t) {
            return D(t)
          }
        case 'string':
          return function(t) {
            return yt(t)
          }
      }
      return null
    }
    function Wr(t, e) {
      return `${t}(${e.map(({ name: t, type: e }) => e + ' ' + t).join(',')})`
    }
    class Jr {
      constructor(t) {
        A(this, 'types', Object.freeze(T(t))),
          A(this, '_encoderCache', {}),
          A(this, '_types', {})
        const e = {},
          r = {},
          n = {}
        Object.keys(t).forEach(t => {
          ;(e[t] = {}), (r[t] = []), (n[t] = {})
        })
        for (const n in t) {
          const i = {}
          t[n].forEach(o => {
            i[o.name] &&
              Cr.throwArgumentError(
                `duplicate variable name ${JSON.stringify(
                  o.name,
                )} in ${JSON.stringify(n)}`,
                'types',
                t,
              ),
              (i[o.name] = !0)
            const s = o.type.match(/^([^\x5b]*)(\x5b|$)/)[1]
            s === n &&
              Cr.throwArgumentError(
                'circular type reference to ' + JSON.stringify(s),
                'types',
                t,
              )
            Vr(s) ||
              (r[s] ||
                Cr.throwArgumentError(
                  'unknown type ' + JSON.stringify(s),
                  'types',
                  t,
                ),
              r[s].push(n),
              (e[n][s] = !0))
          })
        }
        const i = Object.keys(r).filter(t => 0 === r[t].length)
        0 === i.length
          ? Cr.throwArgumentError('missing primary type', 'types', t)
          : i.length > 1 &&
            Cr.throwArgumentError(
              'ambiguous primary types or unused types: ' +
                i.map(t => JSON.stringify(t)).join(', '),
              'types',
              t,
            ),
          A(this, 'primaryType', i[0]),
          (function i(o, s) {
            s[o] &&
              Cr.throwArgumentError(
                'circular type reference to ' + JSON.stringify(o),
                'types',
                t,
              ),
              (s[o] = !0),
              Object.keys(e[o]).forEach(t => {
                r[t] &&
                  (i(t, s),
                  Object.keys(s).forEach(e => {
                    n[e][t] = !0
                  }))
              }),
              delete s[o]
          })(this.primaryType, {})
        for (const e in n) {
          const r = Object.keys(n[e])
          r.sort(),
            (this._types[e] = Wr(e, t[e]) + r.map(e => Wr(e, t[e])).join(''))
        }
      }
      getEncoder(t) {
        let e = this._encoderCache[t]
        return e || (e = this._encoderCache[t] = this._getEncoder(t)), e
      }
      _getEncoder(t) {
        {
          const e = Vr(t)
          if (e) return e
        }
        const e = t.match(/^(.*)(\x5b(\d*)\x5d)$/)
        if (e) {
          const t = e[1],
            r = this.getEncoder(t),
            n = parseInt(e[3])
          return e => {
            n >= 0 &&
              e.length !== n &&
              Cr.throwArgumentError(
                'array length mismatch; expected length ${ arrayLength }',
                'value',
                e,
              )
            let i = e.map(r)
            return this._types[t] && (i = i.map(D)), D(Object(c.c)(i))
          }
        }
        const r = this.types[t]
        if (r) {
          const e = yt(this._types[t])
          return t => {
            const n = r.map(({ name: e, type: r }) => {
              const n = this.getEncoder(r)(t[e])
              return this._types[r] ? D(n) : n
            })
            return n.unshift(e), Object(c.c)(n)
          }
        }
        return Cr.throwArgumentError('unknown type: ' + t, 'type', t)
      }
      encodeType(t) {
        const e = this._types[t]
        return (
          e ||
            Cr.throwArgumentError(
              'unknown type: ' + JSON.stringify(t),
              'name',
              t,
            ),
          e
        )
      }
      encodeData(t, e) {
        return this.getEncoder(t)(e)
      }
      hashStruct(t, e) {
        return D(this.encodeData(t, e))
      }
      encode(t) {
        return this.encodeData(this.primaryType, t)
      }
      hash(t) {
        return this.hashStruct(this.primaryType, t)
      }
      _visit(t, e, r) {
        if (Vr(t)) return r(t, e)
        const n = t.match(/^(.*)(\x5b(\d*)\x5d)$/)
        if (n) {
          const t = n[1],
            i = parseInt(n[3])
          return (
            i >= 0 &&
              e.length !== i &&
              Cr.throwArgumentError(
                'array length mismatch; expected length ${ arrayLength }',
                'value',
                e,
              ),
            e.map(e => this._visit(t, e, r))
          )
        }
        const i = this.types[t]
        return i
          ? i.reduce(
              (t, { name: n, type: i }) => (
                (t[n] = this._visit(i, e[n], r)), t
              ),
              {},
            )
          : Cr.throwArgumentError('unknown type: ' + t, 'type', t)
      }
      visit(t, e) {
        return this._visit(this.primaryType, t, e)
      }
      static from(t) {
        return new Jr(t)
      }
      static getPrimaryType(t) {
        return Jr.from(t).primaryType
      }
      static hashStruct(t, e, r) {
        return Jr.from(e).hashStruct(t, r)
      }
      static hashDomain(t) {
        const e = []
        for (const r in t) {
          const n = Gr[r]
          n ||
            Cr.throwArgumentError(
              'invalid typed-data domain key: ' + JSON.stringify(r),
              'domain',
              t,
            ),
            e.push({ name: r, type: n })
        }
        return (
          e.sort((t, e) => Kr.indexOf(t.name) - Kr.indexOf(e.name)),
          Jr.hashStruct('EIP712Domain', { EIP712Domain: e }, t)
        )
      }
      static encode(t, e, r) {
        return Object(c.c)(['0x1901', Jr.hashDomain(t), Jr.from(e).hash(r)])
      }
      static hash(t, e, r) {
        return D(Jr.encode(t, e, r))
      }
      static resolveNames(t, e, r, n) {
        return Rr(this, void 0, void 0, function*() {
          t = N(t)
          const i = {}
          t.verifyingContract &&
            !Object(c.l)(t.verifyingContract, 20) &&
            (i[t.verifyingContract] = '0x')
          const o = Jr.from(e)
          o.visit(
            r,
            (t, e) => (
              'address' !== t || Object(c.l)(e, 20) || (i[e] = '0x'), e
            ),
          )
          for (const t in i) i[t] = yield n(t)
          return (
            t.verifyingContract &&
              i[t.verifyingContract] &&
              (t.verifyingContract = i[t.verifyingContract]),
            (r = o.visit(r, (t, e) => ('address' === t && i[e] ? i[e] : e))),
            { domain: t, value: r }
          )
        })
      }
      static getPayload(t, e, r) {
        Jr.hashDomain(t)
        const n = {},
          i = []
        Kr.forEach(e => {
          const r = t[e]
          null != r && ((n[e] = Hr[e](r)), i.push({ name: e, type: Gr[e] }))
        })
        const o = Jr.from(e),
          s = N(e)
        return (
          s.EIP712Domain
            ? Cr.throwArgumentError(
                'types must not contain EIP712Domain type',
                'types.EIP712Domain',
                e,
              )
            : (s.EIP712Domain = i),
          o.encode(r),
          {
            types: s,
            domain: n,
            primaryType: o.primaryType,
            message: o.visit(r, (t, e) => {
              if (t.match(/^bytes(\d*)/)) return Object(c.i)(Object(c.a)(e))
              if (t.match(/^u?int/)) return y.from(e).toString()
              switch (t) {
                case 'address':
                  return e.toLowerCase()
                case 'bool':
                  return !!e
                case 'string':
                  return (
                    'string' != typeof e &&
                      Cr.throwArgumentError('invalid string', 'value', e),
                    e
                  )
              }
              return Cr.throwArgumentError('unsupported type', 'type', t)
            }),
          }
        )
      }
    }
    class $r {
      constructor(t) {
        A(this, 'alphabet', t),
          A(this, 'base', t.length),
          A(this, '_alphabetMap', {}),
          A(this, '_leader', t.charAt(0))
        for (let e = 0; e < t.length; e++) this._alphabetMap[t.charAt(e)] = e
      }
      encode(t) {
        let e = Object(c.a)(t)
        if (0 === e.length) return ''
        let r = [0]
        for (let t = 0; t < e.length; ++t) {
          let n = e[t]
          for (let t = 0; t < r.length; ++t)
            (n += r[t] << 8), (r[t] = n % this.base), (n = (n / this.base) | 0)
          for (; n > 0; ) r.push(n % this.base), (n = (n / this.base) | 0)
        }
        let n = ''
        for (let t = 0; 0 === e[t] && t < e.length - 1; ++t) n += this._leader
        for (let t = r.length - 1; t >= 0; --t) n += this.alphabet[r[t]]
        return n
      }
      decode(t) {
        if ('string' != typeof t) throw new TypeError('Expected String')
        let e = []
        if (0 === t.length) return new Uint8Array(e)
        e.push(0)
        for (let r = 0; r < t.length; r++) {
          let n = this._alphabetMap[t[r]]
          if (void 0 === n)
            throw new Error('Non-base' + this.base + ' character')
          let i = n
          for (let t = 0; t < e.length; ++t)
            (i += e[t] * this.base), (e[t] = 255 & i), (i >>= 8)
          for (; i > 0; ) e.push(255 & i), (i >>= 8)
        }
        for (let r = 0; t[r] === this._leader && r < t.length - 1; ++r)
          e.push(0)
        return Object(c.a)(new Uint8Array(e.reverse()))
      }
    }
    new $r('abcdefghijklmnopqrstuvwxyz234567')
    const Zr = new $r(
      '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
    )
    var Xr,
      Yr = r(4),
      Qr = r.n(Yr)
    !(function(t) {
      ;(t.sha256 = 'sha256'), (t.sha512 = 'sha512')
    })(Xr || (Xr = {}))
    const tn = new f.b('sha2/5.5.0')
    function en(t) {
      return (
        '0x' +
        Qr.a
          .ripemd160()
          .update(Object(c.a)(t))
          .digest('hex')
      )
    }
    function rn(t) {
      return (
        '0x' +
        Qr.a
          .sha256()
          .update(Object(c.a)(t))
          .digest('hex')
      )
    }
    function nn(t) {
      return (
        '0x' +
        Qr.a
          .sha512()
          .update(Object(c.a)(t))
          .digest('hex')
      )
    }
    function on(t, e, r) {
      return (
        Xr[t] ||
          tn.throwError(
            'unsupported algorithm ' + t,
            f.b.errors.UNSUPPORTED_OPERATION,
            { operation: 'hmac', algorithm: t },
          ),
        '0x' +
          Qr.a
            .hmac(Qr.a[t], Object(c.a)(e))
            .update(Object(c.a)(r))
            .digest('hex')
      )
    }
    function sn(t, e, r, n, i) {
      let o
      ;(t = Object(c.a)(t)), (e = Object(c.a)(e))
      let s = 1
      const a = new Uint8Array(n),
        u = new Uint8Array(e.length + 4)
      let l, h
      u.set(e)
      for (let f = 1; f <= s; f++) {
        ;(u[e.length] = (f >> 24) & 255),
          (u[e.length + 1] = (f >> 16) & 255),
          (u[e.length + 2] = (f >> 8) & 255),
          (u[e.length + 3] = 255 & f)
        let d = Object(c.a)(on(i, t, u))
        o ||
          ((o = d.length),
          (h = new Uint8Array(o)),
          (s = Math.ceil(n / o)),
          (l = n - (s - 1) * o)),
          h.set(d)
        for (let e = 1; e < r; e++) {
          d = Object(c.a)(on(i, t, d))
          for (let t = 0; t < o; t++) h[t] ^= d[t]
        }
        const p = (f - 1) * o,
          m = f === s ? l : o
        a.set(Object(c.a)(h).slice(0, m), p)
      }
      return Object(c.i)(a)
    }
    const an = new f.b('wordlists/5.5.0')
    class un {
      constructor(t) {
        an.checkAbstract(new.target, un), A(this, 'locale', t)
      }
      split(t) {
        return t.toLowerCase().split(/ +/g)
      }
      join(t) {
        return t.join(' ')
      }
      static check(t) {
        const e = []
        for (let r = 0; r < 2048; r++) {
          const n = t.getWord(r)
          if (r !== t.getWordIndex(n)) return '0x'
          e.push(n)
        }
        return yt(e.join('\n') + '\n')
      }
      static register(t, e) {
        e || (e = t.locale)
      }
    }
    let cn = null
    function ln(t) {
      if (
        null == cn &&
        ((cn = 'AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo'
          .replace(/([A-Z])/g, ' $1')
          .toLowerCase()
          .substring(1)
          .split(' ')),
        '0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60' !==
          un.check(t))
      )
        throw ((cn = null), new Error('BIP39 Wordlist for en (English) FAILED'))
    }
    const hn = new (class extends un {
      constructor() {
        super('en')
      }
      getWord(t) {
        return ln(this), cn[t]
      }
      getWordIndex(t) {
        return ln(this), cn.indexOf(t)
      }
    })()
    un.register(hn)
    const fn = { en: hn },
      dn = new f.b('hdnode/5.5.0'),
      pn = y.from(
        '0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141',
      ),
      mn = ht('Bitcoin seed')
    function gn(t) {
      return ((1 << t) - 1) << (8 - t)
    }
    function yn(t) {
      return Object(c.h)(Object(c.i)(t), 32)
    }
    function bn(t) {
      return Zr.encode(Object(c.b)([t, Object(c.e)(rn(rn(t)), 0, 4)]))
    }
    function vn(t) {
      if (null == t) return fn.en
      if ('string' == typeof t) {
        const e = fn[t]
        return (
          null == e && dn.throwArgumentError('unknown locale', 'wordlist', t), e
        )
      }
      return t
    }
    const wn = {},
      En = "m/44'/60'/0'/0/0"
    class _n {
      constructor(t, e, r, n, i, o, s, a) {
        if ((dn.checkNew(new.target, _n), t !== wn))
          throw new Error('HDNode constructor cannot be called directly')
        if (e) {
          const t = new Be(e)
          A(this, 'privateKey', t.privateKey),
            A(this, 'publicKey', t.compressedPublicKey)
        } else A(this, 'privateKey', null), A(this, 'publicKey', Object(c.i)(r))
        A(this, 'parentFingerprint', n),
          A(this, 'fingerprint', Object(c.e)(en(rn(this.publicKey)), 0, 4)),
          A(this, 'address', He(this.publicKey)),
          A(this, 'chainCode', i),
          A(this, 'index', o),
          A(this, 'depth', s),
          null == a
            ? (A(this, 'mnemonic', null), A(this, 'path', null))
            : 'string' == typeof a
            ? (A(this, 'mnemonic', null), A(this, 'path', a))
            : (A(this, 'mnemonic', a), A(this, 'path', a.path))
      }
      get extendedKey() {
        if (this.depth >= 256) throw new Error('Depth too large!')
        return bn(
          Object(c.b)([
            null != this.privateKey ? '0x0488ADE4' : '0x0488B21E',
            Object(c.i)(this.depth),
            this.parentFingerprint,
            Object(c.h)(Object(c.i)(this.index), 4),
            this.chainCode,
            null != this.privateKey
              ? Object(c.b)(['0x00', this.privateKey])
              : this.publicKey,
          ]),
        )
      }
      neuter() {
        return new _n(
          wn,
          null,
          this.publicKey,
          this.parentFingerprint,
          this.chainCode,
          this.index,
          this.depth,
          this.path,
        )
      }
      _derive(t) {
        if (t > 4294967295) throw new Error('invalid index - ' + String(t))
        let e = this.path
        e && (e += '/' + (2147483647 & t))
        const r = new Uint8Array(37)
        if (2147483648 & t) {
          if (!this.privateKey)
            throw new Error('cannot derive child of neutered node')
          r.set(Object(c.a)(this.privateKey), 1), e && (e += "'")
        } else r.set(Object(c.a)(this.publicKey))
        for (let e = 24; e >= 0; e -= 8)
          r[33 + (e >> 3)] = (t >> (24 - e)) & 255
        const n = Object(c.a)(on(Xr.sha512, this.chainCode, r)),
          i = n.slice(0, 32),
          o = n.slice(32)
        let s = null,
          a = null
        if (this.privateKey)
          s = yn(
            y
              .from(i)
              .add(this.privateKey)
              .mod(pn),
          )
        else {
          a = new Be(Object(c.i)(i))._addPoint(this.publicKey)
        }
        let u = e
        const l = this.mnemonic
        return (
          l &&
            (u = Object.freeze({
              phrase: l.phrase,
              path: e,
              locale: l.locale || 'en',
            })),
          new _n(wn, s, a, this.fingerprint, yn(o), t, this.depth + 1, u)
        )
      }
      derivePath(t) {
        const e = t.split('/')
        if (0 === e.length || ('m' === e[0] && 0 !== this.depth))
          throw new Error('invalid path - ' + t)
        'm' === e[0] && e.shift()
        let r = this
        for (let t = 0; t < e.length; t++) {
          const n = e[t]
          if (n.match(/^[0-9]+'$/)) {
            const t = parseInt(n.substring(0, n.length - 1))
            if (t >= 2147483648) throw new Error('invalid path index - ' + n)
            r = r._derive(2147483648 + t)
          } else {
            if (!n.match(/^[0-9]+$/))
              throw new Error('invalid path component - ' + n)
            {
              const t = parseInt(n)
              if (t >= 2147483648) throw new Error('invalid path index - ' + n)
              r = r._derive(t)
            }
          }
        }
        return r
      }
      static _fromSeed(t, e) {
        const r = Object(c.a)(t)
        if (r.length < 16 || r.length > 64) throw new Error('invalid seed')
        const n = Object(c.a)(on(Xr.sha512, mn, r))
        return new _n(
          wn,
          yn(n.slice(0, 32)),
          null,
          '0x00000000',
          yn(n.slice(32)),
          0,
          0,
          e,
        )
      }
      static fromMnemonic(t, e, r) {
        return (
          (t = Sn(An(t, (r = vn(r))), r)),
          _n._fromSeed(kn(t, e), { phrase: t, path: 'm', locale: r.locale })
        )
      }
      static fromSeed(t) {
        return _n._fromSeed(t, null)
      }
      static fromExtendedKey(t) {
        const e = Zr.decode(t)
        ;(82 === e.length && bn(e.slice(0, 78)) === t) ||
          dn.throwArgumentError(
            'invalid extended key',
            'extendedKey',
            '[REDACTED]',
          )
        const r = e[4],
          n = Object(c.i)(e.slice(5, 9)),
          i = parseInt(Object(c.i)(e.slice(9, 13)).substring(2), 16),
          o = Object(c.i)(e.slice(13, 45)),
          s = e.slice(45, 78)
        switch (Object(c.i)(e.slice(0, 4))) {
          case '0x0488b21e':
          case '0x043587cf':
            return new _n(wn, null, Object(c.i)(s), n, o, i, r, null)
          case '0x0488ade4':
          case '0x04358394 ':
            if (0 !== s[0]) break
            return new _n(wn, Object(c.i)(s.slice(1)), null, n, o, i, r, null)
        }
        return dn.throwArgumentError(
          'invalid extended key',
          'extendedKey',
          '[REDACTED]',
        )
      }
    }
    function kn(t, e) {
      e || (e = '')
      const r = ht('mnemonic' + e, st.NFKD)
      return sn(ht(t, st.NFKD), r, 2048, 64, 'sha512')
    }
    function An(t, e) {
      ;(e = vn(e)), dn.checkNormalize()
      const r = e.split(t)
      if (r.length % 3 != 0) throw new Error('invalid mnemonic')
      const n = Object(c.a)(new Uint8Array(Math.ceil((11 * r.length) / 8)))
      let i = 0
      for (let t = 0; t < r.length; t++) {
        let o = e.getWordIndex(r[t].normalize('NFKD'))
        if (-1 === o) throw new Error('invalid mnemonic')
        for (let t = 0; t < 11; t++)
          o & (1 << (10 - t)) && (n[i >> 3] |= 1 << (7 - (i % 8))), i++
      }
      const o = (32 * r.length) / 3,
        s = gn(r.length / 3)
      if ((Object(c.a)(rn(n.slice(0, o / 8)))[0] & s) !== (n[n.length - 1] & s))
        throw new Error('invalid checksum')
      return Object(c.i)(n.slice(0, o / 8))
    }
    function Sn(t, e) {
      if (
        ((e = vn(e)),
        (t = Object(c.a)(t)).length % 4 != 0 || t.length < 16 || t.length > 32)
      )
        throw new Error('invalid entropy')
      const r = [0]
      let n = 11
      for (let e = 0; e < t.length; e++)
        n > 8
          ? ((r[r.length - 1] <<= 8), (r[r.length - 1] |= t[e]), (n -= 8))
          : ((r[r.length - 1] <<= n),
            (r[r.length - 1] |= t[e] >> (8 - n)),
            r.push(t[e] & ((1 << (8 - n)) - 1)),
            (n += 3))
      const i = t.length / 4,
        o = Object(c.a)(rn(t))[0] & gn(i)
      return (
        (r[r.length - 1] <<= i),
        (r[r.length - 1] |= o >> (8 - i)),
        e.join(r.map(t => e.getWord(t)))
      )
    }
    function Pn(t, e) {
      try {
        return An(t, e), !0
      } catch (t) {}
      return !1
    }
    function On(t) {
      return (
        ('number' != typeof t || t < 0 || t >= 2147483648 || t % 1) &&
          dn.throwArgumentError('invalid account index', 'index', t),
        `m/44'/60'/${t}'/0/0`
      )
    }
    var Nn = r(39),
      xn = r(6),
      Mn = r.n(xn),
      Tn = r(13),
      In = r.n(Tn)
    function Rn(t) {
      return (
        'string' == typeof t && '0x' !== t.substring(0, 2) && (t = '0x' + t),
        Object(c.a)(t)
      )
    }
    function Cn(t, e) {
      for (t = String(t); t.length < e; ) t = '0' + t
      return t
    }
    function jn(t) {
      return 'string' == typeof t ? ht(t, st.NFKC) : Object(c.a)(t)
    }
    function Bn(t, e) {
      let r = t
      const n = e.toLowerCase().split('/')
      for (let t = 0; t < n.length; t++) {
        let e = null
        for (const i in r)
          if (i.toLowerCase() === n[t]) {
            e = r[i]
            break
          }
        if (null === e) return null
        r = e
      }
      return r
    }
    function Fn(t) {
      const e = Object(c.a)(t)
      ;(e[6] = (15 & e[6]) | 64), (e[8] = (63 & e[8]) | 128)
      const r = Object(c.i)(e)
      return [
        r.substring(2, 10),
        r.substring(10, 14),
        r.substring(14, 18),
        r.substring(18, 22),
        r.substring(22, 34),
      ].join('-')
    }
    var Ln = function(t, e, r, n) {
      return new (r || (r = Promise))(function(i, o) {
        function s(t) {
          try {
            u(n.next(t))
          } catch (t) {
            o(t)
          }
        }
        function a(t) {
          try {
            u(n.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function(t) {
                    t(e)
                  })).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
      })
    }
    const Un = new f.b('json-wallets/5.5.0')
    function Dn(t) {
      return null != t && t.mnemonic && t.mnemonic.phrase
    }
    class zn extends I {
      isKeystoreAccount(t) {
        return !(!t || !t._isKeystoreAccount)
      }
    }
    function Gn(t, e) {
      const r = Rn(Bn(t, 'crypto/ciphertext'))
      if (
        Object(c.i)(D(Object(c.b)([e.slice(16, 32), r]))).substring(2) !==
        Bn(t, 'crypto/mac').toLowerCase()
      )
        throw new Error('invalid password')
      const n = (function(t, e, r) {
        if ('aes-128-ctr' === Bn(t, 'crypto/cipher')) {
          const n = Rn(Bn(t, 'crypto/cipherparams/iv')),
            i = new Mn.a.Counter(n),
            o = new Mn.a.ModeOfOperation.ctr(e, i)
          return Object(c.a)(o.decrypt(r))
        }
        return null
      })(t, e.slice(0, 16), r)
      n ||
        Un.throwError('unsupported cipher', f.b.errors.UNSUPPORTED_OPERATION, {
          operation: 'decrypt',
        })
      const i = e.slice(32, 64),
        o = He(n)
      if (t.address) {
        let e = t.address.toLowerCase()
        if (('0x' !== e.substring(0, 2) && (e = '0x' + e), tt(e) !== o))
          throw new Error('address mismatch')
      }
      const s = {
        _isKeystoreAccount: !0,
        address: o,
        privateKey: Object(c.i)(n),
      }
      if ('0.1' === Bn(t, 'x-ethers/version')) {
        const e = Rn(Bn(t, 'x-ethers/mnemonicCiphertext')),
          r = Rn(Bn(t, 'x-ethers/mnemonicCounter')),
          n = new Mn.a.Counter(r),
          o = new Mn.a.ModeOfOperation.ctr(i, n),
          a = Bn(t, 'x-ethers/path') || En,
          u = Bn(t, 'x-ethers/locale') || 'en',
          l = Object(c.a)(o.decrypt(e))
        try {
          const t = Sn(l, u),
            e = _n.fromMnemonic(t, null, u).derivePath(a)
          if (e.privateKey != s.privateKey) throw new Error('mnemonic mismatch')
          s.mnemonic = e.mnemonic
        } catch (t) {
          if (
            t.code !== f.b.errors.INVALID_ARGUMENT ||
            'wordlist' !== t.argument
          )
            throw t
        }
      }
      return new zn(s)
    }
    function Kn(t, e, r, n, i) {
      return Object(c.a)(sn(t, e, r, n, i))
    }
    function qn(t, e, r, n, i) {
      return Promise.resolve(Kn(t, e, r, n, i))
    }
    function Hn(t, e, r, n, i) {
      const o = jn(e),
        s = Bn(t, 'crypto/kdf')
      if (s && 'string' == typeof s) {
        const e = function(t, e) {
          return Un.throwArgumentError(
            'invalid key-derivation function parameters',
            t,
            e,
          )
        }
        if ('scrypt' === s.toLowerCase()) {
          const r = Rn(Bn(t, 'crypto/kdfparams/salt')),
            a = parseInt(Bn(t, 'crypto/kdfparams/n')),
            u = parseInt(Bn(t, 'crypto/kdfparams/r')),
            c = parseInt(Bn(t, 'crypto/kdfparams/p'))
          ;(a && u && c) || e('kdf', s), 0 != (a & (a - 1)) && e('N', a)
          const l = parseInt(Bn(t, 'crypto/kdfparams/dklen'))
          return 32 !== l && e('dklen', l), n(o, r, a, u, c, 64, i)
        }
        if ('pbkdf2' === s.toLowerCase()) {
          const n = Rn(Bn(t, 'crypto/kdfparams/salt'))
          let i = null
          const s = Bn(t, 'crypto/kdfparams/prf')
          'hmac-sha256' === s
            ? (i = 'sha256')
            : 'hmac-sha512' === s
            ? (i = 'sha512')
            : e('prf', s)
          const a = parseInt(Bn(t, 'crypto/kdfparams/c')),
            u = parseInt(Bn(t, 'crypto/kdfparams/dklen'))
          return 32 !== u && e('dklen', u), r(o, n, a, u, i)
        }
      }
      return Un.throwArgumentError(
        'unsupported key-derivation function',
        'kdf',
        s,
      )
    }
    const Vn = new f.b('json-wallets/5.5.0')
    class Wn extends I {
      isCrowdsaleAccount(t) {
        return !(!t || !t._isCrowdsaleAccount)
      }
    }
    function Jn(t, e) {
      const r = JSON.parse(t)
      e = jn(e)
      const n = tt(Bn(r, 'ethaddr')),
        i = Rn(Bn(r, 'encseed'))
      ;(i && i.length % 16 == 0) ||
        Vn.throwArgumentError('invalid encseed', 'json', t)
      const o = Object(c.a)(sn(e, e, 2e3, 32, 'sha256')).slice(0, 16),
        s = i.slice(0, 16),
        a = i.slice(16),
        u = new Mn.a.ModeOfOperation.cbc(o, s),
        l = Mn.a.padding.pkcs7.strip(Object(c.a)(u.decrypt(a)))
      let h = ''
      for (let t = 0; t < l.length; t++) h += String.fromCharCode(l[t])
      const f = D(ht(h))
      return new Wn({ _isCrowdsaleAccount: !0, address: n, privateKey: f })
    }
    function $n(t) {
      let e = null
      try {
        e = JSON.parse(t)
      } catch (t) {
        return !1
      }
      return e.encseed && e.ethaddr
    }
    function Zn(t) {
      let e = null
      try {
        e = JSON.parse(t)
      } catch (t) {
        return !1
      }
      return !(
        !e.version ||
        parseInt(e.version) !== e.version ||
        3 !== parseInt(e.version)
      )
    }
    function Xn(t) {
      if ($n(t))
        try {
          return tt(JSON.parse(t).ethaddr)
        } catch (t) {
          return null
        }
      if (Zn(t))
        try {
          return tt(JSON.parse(t).address)
        } catch (t) {
          return null
        }
      return null
    }
    function Yn(t, e, r) {
      if ($n(t)) {
        r && r(0)
        const n = Jn(t, e)
        return r && r(1), Promise.resolve(n)
      }
      return Zn(t)
        ? (function(t, e, r) {
            return Ln(this, void 0, void 0, function*() {
              const n = JSON.parse(t)
              return Gn(n, yield Hn(n, e, qn, In.a.scrypt, r))
            })
          })(t, e, r)
        : Promise.reject(new Error('invalid JSON wallet'))
    }
    function Qn(t, e) {
      if ($n(t)) return Jn(t, e)
      if (Zn(t))
        return (function(t, e) {
          const r = JSON.parse(t)
          return Gn(r, Hn(r, e, Kn, In.a.syncScrypt))
        })(t, e)
      throw new Error('invalid JSON wallet')
    }
    var ti = function(t, e, r, n) {
      return new (r || (r = Promise))(function(i, o) {
        function s(t) {
          try {
            u(n.next(t))
          } catch (t) {
            o(t)
          }
        }
        function a(t) {
          try {
            u(n.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function(t) {
                    t(e)
                  })).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
      })
    }
    const ei = new f.b('wallet/5.5.0')
    class ri extends Me {
      constructor(t, e) {
        if (
          (ei.checkNew(new.target, ri),
          super(),
          null != (r = t) && Object(c.l)(r.privateKey, 32) && null != r.address)
        ) {
          const e = new Be(t.privateKey)
          if (
            (A(this, '_signingKey', () => e),
            A(this, 'address', He(this.publicKey)),
            this.address !== tt(t.address) &&
              ei.throwArgumentError(
                'privateKey/address mismatch',
                'privateKey',
                '[REDACTED]',
              ),
            (function(t) {
              const e = t.mnemonic
              return e && e.phrase
            })(t))
          ) {
            const e = t.mnemonic
            A(this, '_mnemonic', () => ({
              phrase: e.phrase,
              path: e.path || En,
              locale: e.locale || 'en',
            }))
            const r = this.mnemonic
            He(
              _n.fromMnemonic(r.phrase, null, r.locale).derivePath(r.path)
                .privateKey,
            ) !== this.address &&
              ei.throwArgumentError(
                'mnemonic/address mismatch',
                'privateKey',
                '[REDACTED]',
              )
          } else A(this, '_mnemonic', () => null)
        } else {
          if (Be.isSigningKey(t))
            'secp256k1' !== t.curve &&
              ei.throwArgumentError(
                'unsupported curve; must be secp256k1',
                'privateKey',
                '[REDACTED]',
              ),
              A(this, '_signingKey', () => t)
          else {
            'string' == typeof t &&
              t.match(/^[0-9a-f]*$/i) &&
              64 === t.length &&
              (t = '0x' + t)
            const e = new Be(t)
            A(this, '_signingKey', () => e)
          }
          A(this, '_mnemonic', () => null),
            A(this, 'address', He(this.publicKey))
        }
        var r
        e &&
          !Se.isProvider(e) &&
          ei.throwArgumentError('invalid provider', 'provider', e),
          A(this, 'provider', e || null)
      }
      get mnemonic() {
        return this._mnemonic()
      }
      get privateKey() {
        return this._signingKey().privateKey
      }
      get publicKey() {
        return this._signingKey().publicKey
      }
      getAddress() {
        return Promise.resolve(this.address)
      }
      connect(t) {
        return new ri(this, t)
      }
      signTransaction(t) {
        return P(t).then(e => {
          null != e.from &&
            (tt(e.from) !== this.address &&
              ei.throwArgumentError(
                'transaction from address mismatch',
                'transaction.from',
                t.from,
              ),
            delete e.from)
          const r = this._signingKey().signDigest(D(Qe(e)))
          return Qe(e, r)
        })
      }
      signMessage(t) {
        return ti(this, void 0, void 0, function*() {
          return Object(c.m)(this._signingKey().signDigest(Ir(t)))
        })
      }
      _signTypedData(t, e, r) {
        return ti(this, void 0, void 0, function*() {
          const n = yield Jr.resolveNames(
            t,
            e,
            r,
            t => (
              null == this.provider &&
                ei.throwError(
                  'cannot resolve ENS names without a provider',
                  f.b.errors.UNSUPPORTED_OPERATION,
                  { operation: 'resolveName', value: t },
                ),
              this.provider.resolveName(t)
            ),
          )
          return Object(
            c.m,
          )(this._signingKey().signDigest(Jr.hash(n.domain, e, n.value)))
        })
      }
      encrypt(t, e, r) {
        if (
          ('function' != typeof e || r || ((r = e), (e = {})),
          r && 'function' != typeof r)
        )
          throw new Error('invalid callback')
        return (
          e || (e = {}),
          (function(t, e, r, n) {
            try {
              if (tt(t.address) !== He(t.privateKey))
                throw new Error('address/privateKey mismatch')
              if (Dn(t)) {
                const e = t.mnemonic
                if (
                  _n
                    .fromMnemonic(e.phrase, null, e.locale)
                    .derivePath(e.path || En).privateKey != t.privateKey
                )
                  throw new Error('mnemonic mismatch')
              }
            } catch (t) {
              return Promise.reject(t)
            }
            'function' != typeof r || n || ((n = r), (r = {})), r || (r = {})
            const i = Object(c.a)(t.privateKey),
              o = jn(e)
            let s = null,
              a = null,
              u = null
            if (Dn(t)) {
              const e = t.mnemonic
              ;(s = Object(c.a)(An(e.phrase, e.locale || 'en'))),
                (a = e.path || En),
                (u = e.locale || 'en')
            }
            let l = r.client
            l || (l = 'ethers.js')
            let h = null
            h = r.salt ? Object(c.a)(r.salt) : Object(Nn.a)(32)
            let f = null
            if (r.iv) {
              if (((f = Object(c.a)(r.iv)), 16 !== f.length))
                throw new Error('invalid iv')
            } else f = Object(Nn.a)(16)
            let d = null
            if (r.uuid) {
              if (((d = Object(c.a)(r.uuid)), 16 !== d.length))
                throw new Error('invalid uuid')
            } else d = Object(Nn.a)(16)
            let p = 1 << 17,
              m = 8,
              g = 1
            return (
              r.scrypt &&
                (r.scrypt.N && (p = r.scrypt.N),
                r.scrypt.r && (m = r.scrypt.r),
                r.scrypt.p && (g = r.scrypt.p)),
              In.a.scrypt(o, h, p, m, g, 64, n).then(e => {
                const r = (e = Object(c.a)(e)).slice(0, 16),
                  n = e.slice(16, 32),
                  o = e.slice(32, 64),
                  y = new Mn.a.Counter(f),
                  b = new Mn.a.ModeOfOperation.ctr(r, y),
                  v = Object(c.a)(b.encrypt(i)),
                  w = D(Object(c.b)([n, v])),
                  E = {
                    address: t.address.substring(2).toLowerCase(),
                    id: Fn(d),
                    version: 3,
                    Crypto: {
                      cipher: 'aes-128-ctr',
                      cipherparams: { iv: Object(c.i)(f).substring(2) },
                      ciphertext: Object(c.i)(v).substring(2),
                      kdf: 'scrypt',
                      kdfparams: {
                        salt: Object(c.i)(h).substring(2),
                        n: p,
                        dklen: 32,
                        p: g,
                        r: m,
                      },
                      mac: w.substring(2),
                    },
                  }
                if (s) {
                  const t = Object(Nn.a)(16),
                    e = new Mn.a.Counter(t),
                    r = new Mn.a.ModeOfOperation.ctr(o, e),
                    n = Object(c.a)(r.encrypt(s)),
                    i = new Date(),
                    h =
                      i.getUTCFullYear() +
                      '-' +
                      Cn(i.getUTCMonth() + 1, 2) +
                      '-' +
                      Cn(i.getUTCDate(), 2) +
                      'T' +
                      Cn(i.getUTCHours(), 2) +
                      '-' +
                      Cn(i.getUTCMinutes(), 2) +
                      '-' +
                      Cn(i.getUTCSeconds(), 2) +
                      '.0Z'
                  E['x-ethers'] = {
                    client: l,
                    gethFilename: 'UTC--' + h + '--' + E.address,
                    mnemonicCounter: Object(c.i)(t).substring(2),
                    mnemonicCiphertext: Object(c.i)(n).substring(2),
                    path: a,
                    locale: u,
                    version: '0.1',
                  }
                }
                return JSON.stringify(E)
              })
            )
          })(this, t, e, r)
        )
      }
      static createRandom(t) {
        let e = Object(Nn.a)(16)
        t || (t = {}),
          t.extraEntropy &&
            (e = Object(c.a)(
              Object(c.e)(D(Object(c.b)([e, t.extraEntropy])), 0, 16),
            ))
        const r = Sn(e, t.locale)
        return ri.fromMnemonic(r, t.path, t.locale)
      }
      static fromEncryptedJson(t, e, r) {
        return Yn(t, e, r).then(t => new ri(t))
      }
      static fromEncryptedJsonSync(t, e) {
        return new ri(Qn(t, e))
      }
      static fromMnemonic(t, e, r) {
        return e || (e = En), new ri(_n.fromMnemonic(t, null, r).derivePath(e))
      }
    }
    function ni(t, e) {
      return Ve(Ir(t), e)
    }
    function ii(t, e, r, n) {
      return Ve(Jr.hash(t, e, r), n)
    }
    const oi = '0x0000000000000000000000000000000000000000',
      si = '0x0000000000000000000000000000000000000000000000000000000000000000',
      ai = 'Ξ',
      ui = new f.b('networks/5.5.2')
    function ci(t) {
      const e = function(e, r) {
        null == r && (r = {})
        const n = []
        if (e.InfuraProvider)
          try {
            n.push(new e.InfuraProvider(t, r.infura))
          } catch (t) {}
        if (e.EtherscanProvider)
          try {
            n.push(new e.EtherscanProvider(t, r.etherscan))
          } catch (t) {}
        if (e.AlchemyProvider)
          try {
            n.push(new e.AlchemyProvider(t, r.alchemy))
          } catch (t) {}
        if (e.PocketProvider) {
          const r = ['goerli', 'ropsten', 'rinkeby']
          try {
            const i = new e.PocketProvider(t)
            i.network && -1 === r.indexOf(i.network.name) && n.push(i)
          } catch (t) {}
        }
        if (e.CloudflareProvider)
          try {
            n.push(new e.CloudflareProvider(t))
          } catch (t) {}
        if (0 === n.length) return null
        if (e.FallbackProvider) {
          let i = 1
          return (
            null != r.quorum ? (i = r.quorum) : 'homestead' === t && (i = 2),
            new e.FallbackProvider(n, i)
          )
        }
        return n[0]
      }
      return (
        (e.renetwork = function(t) {
          return ci(t)
        }),
        e
      )
    }
    function li(t, e) {
      const r = function(r, n) {
        return r.JsonRpcProvider ? new r.JsonRpcProvider(t, e) : null
      }
      return (
        (r.renetwork = function(e) {
          return li(t, e)
        }),
        r
      )
    }
    const hi = {
        chainId: 1,
        ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        name: 'homestead',
        _defaultProvider: ci('homestead'),
      },
      fi = {
        chainId: 3,
        ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        name: 'ropsten',
        _defaultProvider: ci('ropsten'),
      },
      di = {
        chainId: 63,
        name: 'classicMordor',
        _defaultProvider: li(
          'https://www.ethercluster.com/mordor',
          'classicMordor',
        ),
      },
      pi = {
        unspecified: { chainId: 0, name: 'unspecified' },
        homestead: hi,
        mainnet: hi,
        morden: { chainId: 2, name: 'morden' },
        ropsten: fi,
        testnet: fi,
        rinkeby: {
          chainId: 4,
          ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
          name: 'rinkeby',
          _defaultProvider: ci('rinkeby'),
        },
        kovan: { chainId: 42, name: 'kovan', _defaultProvider: ci('kovan') },
        goerli: {
          chainId: 5,
          ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
          name: 'goerli',
          _defaultProvider: ci('goerli'),
        },
        kintsugi: { chainId: 1337702, name: 'kintsugi' },
        classic: {
          chainId: 61,
          name: 'classic',
          _defaultProvider: li('https://www.ethercluster.com/etc', 'classic'),
        },
        classicMorden: { chainId: 62, name: 'classicMorden' },
        classicMordor: di,
        classicTestnet: di,
        classicKotti: {
          chainId: 6,
          name: 'classicKotti',
          _defaultProvider: li(
            'https://www.ethercluster.com/kotti',
            'classicKotti',
          ),
        },
        xdai: { chainId: 100, name: 'xdai' },
        matic: { chainId: 137, name: 'matic' },
        maticmum: { chainId: 80001, name: 'maticmum' },
        optimism: { chainId: 10, name: 'optimism' },
        'optimism-kovan': { chainId: 69, name: 'optimism-kovan' },
        'optimism-goerli': { chainId: 420, name: 'optimism-goerli' },
        arbitrum: { chainId: 42161, name: 'arbitrum' },
        'arbitrum-rinkeby': { chainId: 421611, name: 'arbitrum-rinkeby' },
        bnb: { chainId: 56, name: 'bnb' },
        bnbt: { chainId: 97, name: 'bnbt' },
      }
    function mi(t) {
      if (null == t) return null
      if ('number' == typeof t) {
        for (const e in pi) {
          const r = pi[e]
          if (r.chainId === t)
            return {
              name: r.name,
              chainId: r.chainId,
              ensAddress: r.ensAddress || null,
              _defaultProvider: r._defaultProvider || null,
            }
        }
        return { chainId: t, name: 'unknown' }
      }
      if ('string' == typeof t) {
        const e = pi[t]
        return null == e
          ? null
          : {
              name: e.name,
              chainId: e.chainId,
              ensAddress: e.ensAddress,
              _defaultProvider: e._defaultProvider || null,
            }
      }
      const e = pi[t.name]
      if (!e)
        return (
          'number' != typeof t.chainId &&
            ui.throwArgumentError('invalid network chainId', 'network', t),
          t
        )
      0 !== t.chainId &&
        t.chainId !== e.chainId &&
        ui.throwArgumentError('network chainId mismatch', 'network', t)
      let r = t._defaultProvider || null
      var n
      return (
        null == r &&
          e._defaultProvider &&
          (r =
            (n = e._defaultProvider) && 'function' == typeof n.renetwork
              ? e._defaultProvider.renetwork(t)
              : e._defaultProvider),
        {
          name: t.name,
          chainId: e.chainId,
          ensAddress: t.ensAddress || e.ensAddress || null,
          _defaultProvider: r,
        }
      )
    }
    function gi(t, e) {
      e ||
        (e = function(t) {
          return [parseInt(t, 16)]
        })
      let r = 0,
        n = {}
      return (
        t.split(',').forEach(t => {
          let i = t.split(':')
          ;(r += parseInt(i[0], 16)), (n[r] = e(i[1]))
        }),
        n
      )
    }
    function yi(t) {
      let e = 0
      return t.split(',').map(t => {
        let r = t.split('-')
        1 === r.length ? (r[1] = '0') : '' === r[1] && (r[1] = '1')
        let n = e + parseInt(r[0], 16)
        return (e = parseInt(r[1], 16)), { l: n, h: e }
      })
    }
    function bi(t, e) {
      let r = 0
      for (let n = 0; n < e.length; n++) {
        let i = e[n]
        if (((r += i.l), t >= r && t <= r + i.h && (t - r) % (i.d || 1) == 0)) {
          if (i.e && -1 !== i.e.indexOf(t - r)) continue
          return i
        }
      }
      return null
    }
    const vi = yi(
        '221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d',
      ),
      wi = 'ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff'
        .split(',')
        .map(t => parseInt(t, 16)),
      Ei = [
        { h: 25, s: 32, l: 65 },
        { h: 30, s: 32, e: [23], l: 127 },
        { h: 54, s: 1, e: [48], l: 64, d: 2 },
        { h: 14, s: 1, l: 57, d: 2 },
        { h: 44, s: 1, l: 17, d: 2 },
        { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
        { h: 16, s: 1, l: 68, d: 2 },
        { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
        { h: 26, s: 32, e: [17], l: 435 },
        { h: 22, s: 1, l: 71, d: 2 },
        { h: 15, s: 80, l: 40 },
        { h: 31, s: 32, l: 16 },
        { h: 32, s: 1, l: 80, d: 2 },
        { h: 52, s: 1, l: 42, d: 2 },
        { h: 12, s: 1, l: 55, d: 2 },
        { h: 40, s: 1, e: [38], l: 15, d: 2 },
        { h: 14, s: 1, l: 48, d: 2 },
        { h: 37, s: 48, l: 49 },
        { h: 148, s: 1, l: 6351, d: 2 },
        { h: 88, s: 1, l: 160, d: 2 },
        { h: 15, s: 16, l: 704 },
        { h: 25, s: 26, l: 854 },
        { h: 25, s: 32, l: 55915 },
        { h: 37, s: 40, l: 1247 },
        { h: 25, s: -119711, l: 53248 },
        { h: 25, s: -119763, l: 52 },
        { h: 25, s: -119815, l: 52 },
        { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
        { h: 25, s: -119919, l: 52 },
        { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
        { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
        { h: 25, s: -120075, l: 52 },
        { h: 25, s: -120127, l: 52 },
        { h: 25, s: -120179, l: 52 },
        { h: 25, s: -120231, l: 52 },
        { h: 25, s: -120283, l: 52 },
        { h: 25, s: -120335, l: 52 },
        { h: 24, s: -119543, e: [17], l: 56 },
        { h: 24, s: -119601, e: [17], l: 58 },
        { h: 24, s: -119659, e: [17], l: 58 },
        { h: 24, s: -119717, e: [17], l: 58 },
        { h: 24, s: -119775, e: [17], l: 58 },
      ],
      _i = gi(
        'b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3',
      ),
      ki = gi(
        '179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7',
      ),
      Ai = gi(
        'df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D',
        function(t) {
          if (t.length % 4 != 0) throw new Error('bad data')
          let e = []
          for (let r = 0; r < t.length; r += 4)
            e.push(parseInt(t.substring(r, r + 4), 16))
          return e
        },
      ),
      Si = yi(
        '80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001',
      )
    function Pi(t) {
      if (t.match(/^[a-z0-9-]*$/i) && t.length <= 59) return t.toLowerCase()
      let e = gt(t)
      var r
      ;(r = e.map(t => {
        if (wi.indexOf(t) >= 0) return []
        if (t >= 65024 && t <= 65039) return []
        let e = (function(t) {
          let e = bi(t, Ei)
          if (e) return [t + e.s]
          let r = _i[t]
          if (r) return r
          let n = ki[t]
          if (n) return [t + n[0]]
          let i = Ai[t]
          return i || null
        })(t)
        return e || [t]
      })),
        (e = r.reduce(
          (t, e) => (
            e.forEach(e => {
              t.push(e)
            }),
            t
          ),
          [],
        )),
        (e = gt(pt(e), st.NFKC)),
        e.forEach(t => {
          if (bi(t, Si)) throw new Error('STRINGPREP_CONTAINS_PROHIBITED')
        }),
        e.forEach(t => {
          if (bi(t, vi)) throw new Error('STRINGPREP_CONTAINS_UNASSIGNED')
        })
      let n = pt(e)
      if (
        '-' === n.substring(0, 1) ||
        '--' === n.substring(2, 4) ||
        '-' === n.substring(n.length - 1)
      )
        throw new Error('invalid hyphen')
      if (n.length > 63) throw new Error('too long')
      return n
    }
    const Oi = new f.b('hash/5.5.0'),
      Ni = new Uint8Array(32)
    Ni.fill(0)
    const xi = new RegExp('^((.*)\\.)?([^.]+)$')
    function Mi(t) {
      try {
        const e = t.split('.')
        for (let t = 0; t < e.length; t++)
          if (0 === Pi(e[t]).length) throw new Error('empty')
        return !0
      } catch (t) {}
      return !1
    }
    function Ti(t) {
      'string' != typeof t &&
        Oi.throwArgumentError('invalid ENS name; not a string', 'name', t)
      let e = t,
        r = Ni
      for (; e.length; ) {
        const n = e.match(xi)
        ;(null != n && '' !== n[2]) ||
          Oi.throwArgumentError(
            'invalid ENS address; missing component',
            'name',
            t,
          )
        const i = ht(Pi(n[3]))
        ;(r = D(Object(c.b)([r, D(i)]))), (e = n[2] || '')
      }
      return Object(c.i)(r)
    }
    function Ii(t) {
      t = atob(t)
      const e = []
      for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r))
      return Object(c.a)(e)
    }
    function Ri(t) {
      t = Object(c.a)(t)
      let e = ''
      for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r])
      return btoa(e)
    }
    var Ci = function(t, e, r, n) {
      return new (r || (r = Promise))(function(i, o) {
        function s(t) {
          try {
            u(n.next(t))
          } catch (t) {
            o(t)
          }
        }
        function a(t) {
          try {
            u(n.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function(t) {
                    t(e)
                  })).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
      })
    }
    function ji(t, e) {
      return Ci(this, void 0, void 0, function*() {
        null == e && (e = {})
        const r = {
          method: e.method || 'GET',
          headers: e.headers || {},
          body: e.body || void 0,
        }
        !0 !== e.skipFetchSetup && (r.redirect = 'follow')
        const n = yield fetch(t, r),
          i = yield n.arrayBuffer(),
          o = {}
        return (
          n.headers.forEach
            ? n.headers.forEach((t, e) => {
                o[e.toLowerCase()] = t
              })
            : n.headers.keys().forEach(t => {
                o[t.toLowerCase()] = n.headers.get(t)
              }),
          {
            headers: o,
            statusCode: n.status,
            statusMessage: n.statusText,
            body: Object(c.a)(new Uint8Array(i)),
          }
        )
      })
    }
    var Bi = function(t, e, r, n) {
      return new (r || (r = Promise))(function(i, o) {
        function s(t) {
          try {
            u(n.next(t))
          } catch (t) {
            o(t)
          }
        }
        function a(t) {
          try {
            u(n.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function(t) {
                    t(e)
                  })).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
      })
    }
    const Fi = new f.b('web/5.5.1')
    function Li(t) {
      return new Promise(e => {
        setTimeout(e, t)
      })
    }
    function Ui(t, e) {
      if (null == t) return null
      if ('string' == typeof t) return t
      if (Object(c.k)(t)) {
        if (
          e &&
          ('text' === e.split('/')[0] ||
            'application/json' === e.split(';')[0].trim())
        )
          try {
            return mt(t)
          } catch (t) {}
        return Object(c.i)(t)
      }
      return t
    }
    function Di(t, e, r) {
      const n =
        'object' == typeof t && null != t.throttleLimit ? t.throttleLimit : 12
      Fi.assertArgument(
        n > 0 && n % 1 == 0,
        'invalid connection throttle limit',
        'connection.throttleLimit',
        n,
      )
      const i = 'object' == typeof t ? t.throttleCallback : null,
        o =
          'object' == typeof t && 'number' == typeof t.throttleSlotInterval
            ? t.throttleSlotInterval
            : 100
      Fi.assertArgument(
        o > 0 && o % 1 == 0,
        'invalid connection throttle slot interval',
        'connection.throttleSlotInterval',
        o,
      )
      const s = {}
      let a = null
      const u = { method: 'GET' }
      let c = !1,
        l = 12e4
      if ('string' == typeof t) a = t
      else if ('object' == typeof t) {
        if (
          ((null != t && null != t.url) ||
            Fi.throwArgumentError('missing URL', 'connection.url', t),
          (a = t.url),
          'number' == typeof t.timeout && t.timeout > 0 && (l = t.timeout),
          t.headers)
        )
          for (const e in t.headers)
            (s[e.toLowerCase()] = { key: e, value: String(t.headers[e]) }),
              ['if-none-match', 'if-modified-since'].indexOf(e.toLowerCase()) >=
                0 && (c = !0)
        if (
          ((u.allowGzip = !!t.allowGzip), null != t.user && null != t.password)
        ) {
          'https:' !== a.substring(0, 6) &&
            !0 !== t.allowInsecureAuthentication &&
            Fi.throwError(
              'basic authentication requires a secure https url',
              f.b.errors.INVALID_ARGUMENT,
              { argument: 'url', url: a, user: t.user, password: '[REDACTED]' },
            )
          const e = t.user + ':' + t.password
          s.authorization = {
            key: 'Authorization',
            value: 'Basic ' + Ri(ht(e)),
          }
        }
      }
      const h = new RegExp('^data:([a-z0-9-]+/[a-z0-9-]+);base64,(.*)$', 'i'),
        d = a ? a.match(h) : null
      if (d)
        try {
          const t = {
            statusCode: 200,
            statusMessage: 'OK',
            headers: { 'content-type': d[1] },
            body: Ii(d[2]),
          }
          let e = t.body
          return r && (e = r(t.body, t)), Promise.resolve(e)
        } catch (t) {
          Fi.throwError('processing response error', f.b.errors.SERVER_ERROR, {
            body: Ui(d[1], d[2]),
            error: t,
            requestBody: null,
            requestMethod: 'GET',
            url: a,
          })
        }
      e &&
        ((u.method = 'POST'),
        (u.body = e),
        null == s['content-type'] &&
          (s['content-type'] = {
            key: 'Content-Type',
            value: 'application/octet-stream',
          }),
        null == s['content-length'] &&
          (s['content-length'] = {
            key: 'Content-Length',
            value: String(e.length),
          }))
      const p = {}
      Object.keys(s).forEach(t => {
        const e = s[t]
        p[e.key] = e.value
      }),
        (u.headers = p)
      const m = (function() {
          let t = null
          return {
            promise: new Promise(function(e, r) {
              l &&
                (t = setTimeout(() => {
                  null != t &&
                    ((t = null),
                    r(
                      Fi.makeError('timeout', f.b.errors.TIMEOUT, {
                        requestBody: Ui(u.body, p['content-type']),
                        requestMethod: u.method,
                        timeout: l,
                        url: a,
                      }),
                    ))
                }, l))
            }),
            cancel: function() {
              null != t && (clearTimeout(t), (t = null))
            },
          }
        })(),
        g = (function() {
          return Bi(this, void 0, void 0, function*() {
            for (let t = 0; t < n; t++) {
              let e = null
              try {
                if (((e = yield ji(a, u)), t < n))
                  if (301 === e.statusCode || 302 === e.statusCode) {
                    const t = e.headers.location || ''
                    if ('GET' === u.method && t.match(/^https:/)) {
                      a = e.headers.location
                      continue
                    }
                  } else if (429 === e.statusCode) {
                    let r = !0
                    if ((i && (r = yield i(t, a)), r)) {
                      let r = 0
                      const n = e.headers['retry-after']
                      ;(r =
                        'string' == typeof n && n.match(/^[1-9][0-9]*$/)
                          ? 1e3 * parseInt(n)
                          : o *
                            parseInt(String(Math.random() * Math.pow(2, t)))),
                        yield Li(r)
                      continue
                    }
                  }
              } catch (t) {
                ;(e = t.response),
                  null == e &&
                    (m.cancel(),
                    Fi.throwError('missing response', f.b.errors.SERVER_ERROR, {
                      requestBody: Ui(u.body, p['content-type']),
                      requestMethod: u.method,
                      serverError: t,
                      url: a,
                    }))
              }
              let s = e.body
              if (
                (c && 304 === e.statusCode
                  ? (s = null)
                  : (e.statusCode < 200 || e.statusCode >= 300) &&
                    (m.cancel(),
                    Fi.throwError('bad response', f.b.errors.SERVER_ERROR, {
                      status: e.statusCode,
                      headers: e.headers,
                      body: Ui(s, e.headers ? e.headers['content-type'] : null),
                      requestBody: Ui(u.body, p['content-type']),
                      requestMethod: u.method,
                      url: a,
                    })),
                r)
              )
                try {
                  const t = yield r(s, e)
                  return m.cancel(), t
                } catch (r) {
                  if (r.throttleRetry && t < n) {
                    let e = !0
                    if ((i && (e = yield i(t, a)), e)) {
                      const e =
                        o * parseInt(String(Math.random() * Math.pow(2, t)))
                      yield Li(e)
                      continue
                    }
                  }
                  m.cancel(),
                    Fi.throwError(
                      'processing response error',
                      f.b.errors.SERVER_ERROR,
                      {
                        body: Ui(
                          s,
                          e.headers ? e.headers['content-type'] : null,
                        ),
                        error: r,
                        requestBody: Ui(u.body, p['content-type']),
                        requestMethod: u.method,
                        url: a,
                      },
                    )
                }
              return m.cancel(), s
            }
            return Fi.throwError('failed response', f.b.errors.SERVER_ERROR, {
              requestBody: Ui(u.body, p['content-type']),
              requestMethod: u.method,
              url: a,
            })
          })
        })()
      return Promise.race([m.promise, g])
    }
    function zi(t, e, r) {
      let n = null
      if (null != e) {
        n = ht(e)
        const r = 'string' == typeof t ? { url: t } : N(t)
        if (r.headers) {
          0 !==
            Object.keys(r.headers).filter(
              t => 'content-type' === t.toLowerCase(),
            ).length ||
            ((r.headers = N(r.headers)),
            (r.headers['content-type'] = 'application/json'))
        } else r.headers = { 'content-type': 'application/json' }
        t = r
      }
      return Di(t, n, (t, e) => {
        let n = null
        if (null != t)
          try {
            n = JSON.parse(mt(t))
          } catch (e) {
            Fi.throwError('invalid JSON', f.b.errors.SERVER_ERROR, {
              body: t,
              error: e,
            })
          }
        return r && (n = r(n, e)), n
      })
    }
    function Gi(t, e) {
      return (
        e || (e = {}),
        null == (e = N(e)).floor && (e.floor = 0),
        null == e.ceiling && (e.ceiling = 1e4),
        null == e.interval && (e.interval = 250),
        new Promise(function(r, n) {
          let i = null,
            o = !1
          const s = () => !o && ((o = !0), i && clearTimeout(i), !0)
          e.timeout &&
            (i = setTimeout(() => {
              s() && n(new Error('timeout'))
            }, e.timeout))
          const a = e.retryLimit
          let u = 0
          !(function i() {
            return t().then(
              function(t) {
                if (void 0 !== t) s() && r(t)
                else if (e.oncePoll) e.oncePoll.once('poll', i)
                else if (e.onceBlock) e.onceBlock.once('block', i)
                else if (!o) {
                  if ((u++, u > a))
                    return void (s() && n(new Error('retry limit reached')))
                  let t =
                    e.interval *
                    parseInt(String(Math.random() * Math.pow(2, u)))
                  t < e.floor && (t = e.floor),
                    t > e.ceiling && (t = e.ceiling),
                    setTimeout(i, t)
                }
                return null
              },
              function(t) {
                s() && n(t)
              },
            )
          })()
        })
      )
    }
    var Ki = r(15),
      qi = r.n(Ki)
    const Hi = new f.b('providers/5.5.3')
    class Vi {
      constructor() {
        Hi.checkNew(new.target, Vi), (this.formats = this.getDefaultFormats())
      }
      getDefaultFormats() {
        const t = {},
          e = this.address.bind(this),
          r = this.bigNumber.bind(this),
          n = this.blockTag.bind(this),
          i = this.data.bind(this),
          o = this.hash.bind(this),
          s = this.hex.bind(this),
          a = this.number.bind(this),
          u = this.type.bind(this)
        return (
          (t.transaction = {
            hash: o,
            type: u,
            accessList: Vi.allowNull(this.accessList.bind(this), null),
            blockHash: Vi.allowNull(o, null),
            blockNumber: Vi.allowNull(a, null),
            transactionIndex: Vi.allowNull(a, null),
            confirmations: Vi.allowNull(a, null),
            from: e,
            gasPrice: Vi.allowNull(r),
            maxPriorityFeePerGas: Vi.allowNull(r),
            maxFeePerGas: Vi.allowNull(r),
            gasLimit: r,
            to: Vi.allowNull(e, null),
            value: r,
            nonce: a,
            data: i,
            r: Vi.allowNull(this.uint256),
            s: Vi.allowNull(this.uint256),
            v: Vi.allowNull(a),
            creates: Vi.allowNull(e, null),
            raw: Vi.allowNull(i),
          }),
          (t.transactionRequest = {
            from: Vi.allowNull(e),
            nonce: Vi.allowNull(a),
            gasLimit: Vi.allowNull(r),
            gasPrice: Vi.allowNull(r),
            maxPriorityFeePerGas: Vi.allowNull(r),
            maxFeePerGas: Vi.allowNull(r),
            to: Vi.allowNull(e),
            value: Vi.allowNull(r),
            data: Vi.allowNull(t => this.data(t, !0)),
            type: Vi.allowNull(a),
            accessList: Vi.allowNull(this.accessList.bind(this), null),
          }),
          (t.receiptLog = {
            transactionIndex: a,
            blockNumber: a,
            transactionHash: o,
            address: e,
            topics: Vi.arrayOf(o),
            data: i,
            logIndex: a,
            blockHash: o,
          }),
          (t.receipt = {
            to: Vi.allowNull(this.address, null),
            from: Vi.allowNull(this.address, null),
            contractAddress: Vi.allowNull(e, null),
            transactionIndex: a,
            root: Vi.allowNull(s),
            gasUsed: r,
            logsBloom: Vi.allowNull(i),
            blockHash: o,
            transactionHash: o,
            logs: Vi.arrayOf(this.receiptLog.bind(this)),
            blockNumber: a,
            confirmations: Vi.allowNull(a, null),
            cumulativeGasUsed: r,
            effectiveGasPrice: Vi.allowNull(r),
            status: Vi.allowNull(a),
            type: u,
          }),
          (t.block = {
            hash: o,
            parentHash: o,
            number: a,
            timestamp: a,
            nonce: Vi.allowNull(s),
            difficulty: this.difficulty.bind(this),
            gasLimit: r,
            gasUsed: r,
            miner: e,
            extraData: i,
            transactions: Vi.allowNull(Vi.arrayOf(o)),
            baseFeePerGas: Vi.allowNull(r),
          }),
          (t.blockWithTransactions = N(t.block)),
          (t.blockWithTransactions.transactions = Vi.allowNull(
            Vi.arrayOf(this.transactionResponse.bind(this)),
          )),
          (t.filter = {
            fromBlock: Vi.allowNull(n, void 0),
            toBlock: Vi.allowNull(n, void 0),
            blockHash: Vi.allowNull(o, void 0),
            address: Vi.allowNull(e, void 0),
            topics: Vi.allowNull(this.topics.bind(this), void 0),
          }),
          (t.filterLog = {
            blockNumber: Vi.allowNull(a),
            blockHash: Vi.allowNull(o),
            transactionIndex: a,
            removed: Vi.allowNull(this.boolean.bind(this)),
            address: e,
            data: Vi.allowFalsish(i, '0x'),
            topics: Vi.arrayOf(o),
            transactionHash: o,
            logIndex: a,
          }),
          t
        )
      }
      accessList(t) {
        return $e(t || [])
      }
      number(t) {
        return '0x' === t ? 0 : y.from(t).toNumber()
      }
      type(t) {
        return '0x' === t || null == t ? 0 : y.from(t).toNumber()
      }
      bigNumber(t) {
        return y.from(t)
      }
      boolean(t) {
        if ('boolean' == typeof t) return t
        if ('string' == typeof t) {
          if ('true' === (t = t.toLowerCase())) return !0
          if ('false' === t) return !1
        }
        throw new Error('invalid boolean - ' + t)
      }
      hex(t, e) {
        return 'string' == typeof t &&
          (e || '0x' === t.substring(0, 2) || (t = '0x' + t), Object(c.l)(t))
          ? t.toLowerCase()
          : Hi.throwArgumentError('invalid hash', 'value', t)
      }
      data(t, e) {
        const r = this.hex(t, e)
        if (r.length % 2 != 0)
          throw new Error('invalid data; odd-length - ' + t)
        return r
      }
      address(t) {
        return tt(t)
      }
      callAddress(t) {
        if (!Object(c.l)(t, 32)) return null
        const e = tt(Object(c.e)(t, 12))
        return e === oi ? null : e
      }
      contractAddress(t) {
        return nt(t)
      }
      blockTag(t) {
        if (null == t) return 'latest'
        if ('earliest' === t) return '0x0'
        if ('latest' === t || 'pending' === t) return t
        if ('number' == typeof t || Object(c.l)(t)) return Object(c.g)(t)
        throw new Error('invalid blockTag')
      }
      hash(t, e) {
        const r = this.hex(t, e)
        return 32 !== Object(c.d)(r)
          ? Hi.throwArgumentError('invalid hash', 'value', t)
          : r
      }
      difficulty(t) {
        if (null == t) return null
        const e = y.from(t)
        try {
          return e.toNumber()
        } catch (t) {}
        return null
      }
      uint256(t) {
        if (!Object(c.l)(t)) throw new Error('invalid uint256')
        return Object(c.h)(t, 32)
      }
      _block(t, e) {
        null != t.author && null == t.miner && (t.miner = t.author)
        const r = null != t._difficulty ? t._difficulty : t.difficulty,
          n = Vi.check(e, t)
        return (n._difficulty = null == r ? null : y.from(r)), n
      }
      block(t) {
        return this._block(t, this.formats.block)
      }
      blockWithTransactions(t) {
        return this._block(t, this.formats.blockWithTransactions)
      }
      transactionRequest(t) {
        return Vi.check(this.formats.transactionRequest, t)
      }
      transactionResponse(t) {
        null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas),
          t.to &&
            y.from(t.to).isZero() &&
            (t.to = '0x0000000000000000000000000000000000000000'),
          null != t.input && null == t.data && (t.data = t.input),
          null == t.to &&
            null == t.creates &&
            (t.creates = this.contractAddress(t)),
          (1 !== t.type && 2 !== t.type) ||
            null != t.accessList ||
            (t.accessList = [])
        const e = Vi.check(this.formats.transaction, t)
        if (null != t.chainId) {
          let r = t.chainId
          Object(c.l)(r) && (r = y.from(r).toNumber()), (e.chainId = r)
        } else {
          let r = t.networkId
          null == r && null == e.v && (r = t.chainId),
            Object(c.l)(r) && (r = y.from(r).toNumber()),
            'number' != typeof r &&
              null != e.v &&
              ((r = (e.v - 35) / 2), r < 0 && (r = 0), (r = parseInt(r))),
            'number' != typeof r && (r = 0),
            (e.chainId = r)
        }
        return (
          e.blockHash &&
            'x' === e.blockHash.replace(/0/g, '') &&
            (e.blockHash = null),
          e
        )
      }
      transaction(t) {
        return er(t)
      }
      receiptLog(t) {
        return Vi.check(this.formats.receiptLog, t)
      }
      receipt(t) {
        const e = Vi.check(this.formats.receipt, t)
        if (null != e.root)
          if (e.root.length <= 4) {
            const t = y.from(e.root).toNumber()
            0 === t || 1 === t
              ? (null != e.status &&
                  e.status !== t &&
                  Hi.throwArgumentError(
                    'alt-root-status/status mismatch',
                    'value',
                    { root: e.root, status: e.status },
                  ),
                (e.status = t),
                delete e.root)
              : Hi.throwArgumentError(
                  'invalid alt-root-status',
                  'value.root',
                  e.root,
                )
          } else
            66 !== e.root.length &&
              Hi.throwArgumentError('invalid root hash', 'value.root', e.root)
        return null != e.status && (e.byzantium = !0), e
      }
      topics(t) {
        return Array.isArray(t)
          ? t.map(t => this.topics(t))
          : null != t
          ? this.hash(t, !0)
          : null
      }
      filter(t) {
        return Vi.check(this.formats.filter, t)
      }
      filterLog(t) {
        return Vi.check(this.formats.filterLog, t)
      }
      static check(t, e) {
        const r = {}
        for (const n in t)
          try {
            const i = t[n](e[n])
            void 0 !== i && (r[n] = i)
          } catch (t) {
            throw ((t.checkKey = n), (t.checkValue = e[n]), t)
          }
        return r
      }
      static allowNull(t, e) {
        return function(r) {
          return null == r ? e : t(r)
        }
      }
      static allowFalsish(t, e) {
        return function(r) {
          return r ? t(r) : e
        }
      }
      static arrayOf(t) {
        return function(e) {
          if (!Array.isArray(e)) throw new Error('not an array')
          const r = []
          return (
            e.forEach(function(e) {
              r.push(t(e))
            }),
            r
          )
        }
      }
    }
    function Wi(t) {
      return t && 'function' == typeof t.isCommunityResource
    }
    function Ji(t) {
      return Wi(t) && t.isCommunityResource()
    }
    let $i = !1
    function Zi() {
      $i ||
        (($i = !0),
        console.log('========= NOTICE ========='),
        console.log(
          'Request-Rate Exceeded  (this message will not be repeated)',
        ),
        console.log(''),
        console.log(
          'The default API keys for each service are provided as a highly-throttled,',
        ),
        console.log(
          'community resource for low-traffic projects and early prototyping.',
        ),
        console.log(''),
        console.log(
          'While your application will continue to function, we highly recommended',
        ),
        console.log(
          'signing up for your own API keys to improve performance, increase your',
        ),
        console.log(
          'request rate/limit and enable other perks, such as metrics and advanced APIs.',
        ),
        console.log(''),
        console.log('For more details: https://docs.ethers.io/api-keys/'),
        console.log('=========================='))
    }
    var Xi = function(t, e, r, n) {
      return new (r || (r = Promise))(function(i, o) {
        function s(t) {
          try {
            u(n.next(t))
          } catch (t) {
            o(t)
          }
        }
        function a(t) {
          try {
            u(n.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function(t) {
                    t(e)
                  })).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
      })
    }
    const Yi = new f.b('providers/5.5.3')
    function Qi(t) {
      return null == t
        ? 'null'
        : (32 !== Object(c.d)(t) &&
            Yi.throwArgumentError('invalid topic', 'topic', t),
          t.toLowerCase())
    }
    function to(t) {
      for (t = t.slice(); t.length > 0 && null == t[t.length - 1]; ) t.pop()
      return t
        .map(t => {
          if (Array.isArray(t)) {
            const e = {}
            t.forEach(t => {
              e[Qi(t)] = !0
            })
            const r = Object.keys(e)
            return r.sort(), r.join('|')
          }
          return Qi(t)
        })
        .join('&')
    }
    function eo(t) {
      if ('string' == typeof t) {
        if (((t = t.toLowerCase()), 32 === Object(c.d)(t))) return 'tx:' + t
        if (-1 === t.indexOf(':')) return t
      } else {
        if (Array.isArray(t)) return 'filter:*:' + to(t)
        if (Ae.isForkEvent(t))
          throw (Yi.warn('not implemented'), new Error('not implemented'))
        if (t && 'object' == typeof t)
          return 'filter:' + (t.address || '*') + ':' + to(t.topics || [])
      }
      throw new Error('invalid event - ' + t)
    }
    function ro() {
      return new Date().getTime()
    }
    function no(t) {
      return new Promise(e => {
        setTimeout(e, t)
      })
    }
    const io = ['block', 'network', 'pending', 'poll']
    class oo {
      constructor(t, e, r) {
        A(this, 'tag', t), A(this, 'listener', e), A(this, 'once', r)
      }
      get event() {
        switch (this.type) {
          case 'tx':
            return this.hash
          case 'filter':
            return this.filter
        }
        return this.tag
      }
      get type() {
        return this.tag.split(':')[0]
      }
      get hash() {
        const t = this.tag.split(':')
        return 'tx' !== t[0] ? null : t[1]
      }
      get filter() {
        const t = this.tag.split(':')
        if ('filter' !== t[0]) return null
        const e = t[1],
          r =
            '' === (n = t[2])
              ? []
              : n.split(/&/g).map(t => {
                  if ('' === t) return []
                  const e = t.split('|').map(t => ('null' === t ? null : t))
                  return 1 === e.length ? e[0] : e
                })
        var n
        const i = {}
        return (
          r.length > 0 && (i.topics = r), e && '*' !== e && (i.address = e), i
        )
      }
      pollable() {
        return this.tag.indexOf(':') >= 0 || io.indexOf(this.tag) >= 0
      }
    }
    const so = {
      0: { symbol: 'btc', p2pkh: 0, p2sh: 5, prefix: 'bc' },
      2: { symbol: 'ltc', p2pkh: 48, p2sh: 50, prefix: 'ltc' },
      3: { symbol: 'doge', p2pkh: 30, p2sh: 22 },
      60: { symbol: 'eth', ilk: 'eth' },
      61: { symbol: 'etc', ilk: 'eth' },
      700: { symbol: 'xdai', ilk: 'eth' },
    }
    function ao(t) {
      return Object(c.h)(y.from(t).toHexString(), 32)
    }
    function uo(t) {
      return Zr.encode(Object(c.b)([t, Object(c.e)(rn(rn(t)), 0, 4)]))
    }
    const co = new RegExp('^(ipfs)://(.*)$', 'i'),
      lo = [
        new RegExp('^(https)://(.*)$', 'i'),
        new RegExp('^(data):(.*)$', 'i'),
        co,
        new RegExp('^eip155:[0-9]+/(erc[0-9]+):(.*)$', 'i'),
      ]
    function ho(t) {
      try {
        return mt(fo(t))
      } catch (t) {}
      return null
    }
    function fo(t) {
      if ('0x' === t) return null
      const e = y.from(Object(c.e)(t, 0, 32)).toNumber(),
        r = y.from(Object(c.e)(t, e, e + 32)).toNumber()
      return Object(c.e)(t, e + 32, e + 32 + r)
    }
    function po(t) {
      return (
        t.match(/^ipfs:\/\/ipfs\//i)
          ? (t = t.substring(12))
          : t.match(/^ipfs:\/\//i)
          ? (t = t.substring(7))
          : Yi.throwArgumentError('unsupported IPFS format', 'link', t),
        'https://gateway.ipfs.io/ipfs/' + t
      )
    }
    class mo {
      constructor(t, e, r, n) {
        A(this, 'provider', t),
          A(this, 'name', r),
          A(this, 'address', t.formatter.address(e)),
          A(this, '_resolvedAddress', n)
      }
      _fetchBytes(t, e) {
        return Xi(this, void 0, void 0, function*() {
          const r = {
            to: this.address,
            data: Object(c.c)([t, Ti(this.name), e || '0x']),
          }
          try {
            return fo(yield this.provider.call(r))
          } catch (t) {
            return t.code, f.b.errors.CALL_EXCEPTION, null
          }
        })
      }
      _getAddress(t, e) {
        const r = so[String(t)]
        if (
          (null == r &&
            Yi.throwError(
              'unsupported coin type: ' + t,
              f.b.errors.UNSUPPORTED_OPERATION,
              { operation: `getAddress(${t})` },
            ),
          'eth' === r.ilk)
        )
          return this.provider.formatter.address(e)
        const n = Object(c.a)(e)
        if (null != r.p2pkh) {
          const t = e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/)
          if (t) {
            const e = parseInt(t[1], 16)
            if (t[2].length === 2 * e && e >= 1 && e <= 75)
              return uo(Object(c.b)([[r.p2pkh], '0x' + t[2]]))
          }
        }
        if (null != r.p2sh) {
          const t = e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/)
          if (t) {
            const e = parseInt(t[1], 16)
            if (t[2].length === 2 * e && e >= 1 && e <= 75)
              return uo(Object(c.b)([[r.p2sh], '0x' + t[2]]))
          }
        }
        if (null != r.prefix) {
          const t = n[1]
          let e = n[0]
          if (
            (0 === e ? 20 !== t && 32 !== t && (e = -1) : (e = -1),
            e >= 0 && n.length === 2 + t && t >= 1 && t <= 75)
          ) {
            const t = qi.a.toWords(n.slice(2))
            return t.unshift(e), qi.a.encode(r.prefix, t)
          }
        }
        return null
      }
      getAddress(t) {
        return Xi(this, void 0, void 0, function*() {
          if ((null == t && (t = 60), 60 === t))
            try {
              const t = {
                  to: this.address,
                  data: '0x3b3b57de' + Ti(this.name).substring(2),
                },
                e = yield this.provider.call(t)
              return '0x' === e || e === si
                ? null
                : this.provider.formatter.callAddress(e)
            } catch (t) {
              if (t.code === f.b.errors.CALL_EXCEPTION) return null
              throw t
            }
          const e = yield this._fetchBytes('0xf1cb7e06', ao(t))
          if (null == e || '0x' === e) return null
          const r = this._getAddress(t, e)
          return (
            null == r &&
              Yi.throwError(
                'invalid or unsupported coin data',
                f.b.errors.UNSUPPORTED_OPERATION,
                { operation: `getAddress(${t})`, coinType: t, data: e },
              ),
            r
          )
        })
      }
      getAvatar() {
        return Xi(this, void 0, void 0, function*() {
          const t = [{ type: 'name', content: this.name }]
          try {
            const e = yield this.getText('avatar')
            if (null == e) return null
            for (let r = 0; r < lo.length; r++) {
              const n = e.match(lo[r])
              if (null == n) continue
              const i = n[1].toLowerCase()
              switch (i) {
                case 'https':
                  return (
                    t.push({ type: 'url', content: e }), { linkage: t, url: e }
                  )
                case 'data':
                  return (
                    t.push({ type: 'data', content: e }), { linkage: t, url: e }
                  )
                case 'ipfs':
                  return (
                    t.push({ type: 'ipfs', content: e }),
                    { linkage: t, url: po(e) }
                  )
                case 'erc721':
                case 'erc1155': {
                  const r = 'erc721' === i ? '0xc87b56dd' : '0x0e89341c'
                  t.push({ type: i, content: e })
                  const o = this._resolvedAddress || (yield this.getAddress()),
                    s = (n[2] || '').split('/')
                  if (2 !== s.length) return null
                  const a = yield this.provider.formatter.address(s[0]),
                    u = Object(c.h)(y.from(s[1]).toHexString(), 32)
                  if ('erc721' === i) {
                    const e = this.provider.formatter.callAddress(
                      yield this.provider.call({
                        to: a,
                        data: Object(c.c)(['0x6352211e', u]),
                      }),
                    )
                    if (o !== e) return null
                    t.push({ type: 'owner', content: e })
                  } else if ('erc1155' === i) {
                    const e = y.from(
                      yield this.provider.call({
                        to: a,
                        data: Object(c.c)([
                          '0x00fdd58e',
                          Object(c.h)(o, 32),
                          u,
                        ]),
                      }),
                    )
                    if (e.isZero()) return null
                    t.push({ type: 'balance', content: e.toString() })
                  }
                  const l = {
                    to: this.provider.formatter.address(s[0]),
                    data: Object(c.c)([r, u]),
                  }
                  let h = ho(yield this.provider.call(l))
                  if (null == h) return null
                  t.push({ type: 'metadata-url-base', content: h }),
                    'erc1155' === i &&
                      ((h = h.replace('{id}', u.substring(2))),
                      t.push({ type: 'metadata-url-expanded', content: h })),
                    h.match(/^ipfs:/i) && (h = po(h)),
                    t.push({ type: 'metadata-url', content: h })
                  const f = yield zi(h)
                  if (!f) return null
                  t.push({ type: 'metadata', content: JSON.stringify(f) })
                  let d = f.image
                  if ('string' != typeof d) return null
                  if (d.match(/^(https:\/\/|data:)/i));
                  else {
                    if (null == d.match(co)) return null
                    t.push({ type: 'url-ipfs', content: d }), (d = po(d))
                  }
                  return (
                    t.push({ type: 'url', content: d }), { linkage: t, url: d }
                  )
                }
              }
            }
          } catch (t) {}
          return null
        })
      }
      getContentHash() {
        return Xi(this, void 0, void 0, function*() {
          const t = yield this._fetchBytes('0xbc1c58d1')
          if (null == t || '0x' === t) return null
          const e = t.match(
            /^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/,
          )
          if (e) {
            const t = parseInt(e[3], 16)
            if (e[4].length === 2 * t) return 'ipfs://' + Zr.encode('0x' + e[1])
          }
          const r = t.match(/^0xe40101fa011b20([0-9a-f]*)$/)
          return r && 64 === r[1].length
            ? 'bzz://' + r[1]
            : Yi.throwError(
                'invalid or unsupported content hash data',
                f.b.errors.UNSUPPORTED_OPERATION,
                { operation: 'getContentHash()', data: t },
              )
        })
      }
      getText(t) {
        return Xi(this, void 0, void 0, function*() {
          let e = ht(t)
          ;(e = Object(c.b)([ao(64), ao(e.length), e])),
            e.length % 32 != 0 &&
              (e = Object(c.b)([e, Object(c.h)('0x', 32 - (t.length % 32))]))
          const r = yield this._fetchBytes('0x59d1d43c', Object(c.i)(e))
          return null == r || '0x' === r ? null : mt(r)
        })
      }
    }
    let go = null,
      yo = 1
    class bo extends Se {
      constructor(t) {
        if (
          (Yi.checkNew(new.target, Se),
          super(),
          (this._events = []),
          (this._emitted = { block: -2 }),
          (this.formatter = new.target.getFormatter()),
          A(this, 'anyNetwork', 'any' === t),
          this.anyNetwork && (t = this.detectNetwork()),
          t instanceof Promise)
        )
          (this._networkPromise = t),
            t.catch(t => {}),
            this._ready().catch(t => {})
        else {
          const e = S(new.target, 'getNetwork')(t)
          e
            ? (A(this, '_network', e), this.emit('network', e, null))
            : Yi.throwArgumentError('invalid network', 'network', t)
        }
        ;(this._maxInternalBlockNumber = -1024),
          (this._lastBlockNumber = -2),
          (this._pollingInterval = 4e3),
          (this._fastQueryDate = 0)
      }
      _ready() {
        return Xi(this, void 0, void 0, function*() {
          if (null == this._network) {
            let t = null
            if (this._networkPromise)
              try {
                t = yield this._networkPromise
              } catch (t) {}
            null == t && (t = yield this.detectNetwork()),
              t ||
                Yi.throwError(
                  'no network detected',
                  f.b.errors.UNKNOWN_ERROR,
                  {},
                ),
              null == this._network &&
                (this.anyNetwork ? (this._network = t) : A(this, '_network', t),
                this.emit('network', t, null))
          }
          return this._network
        })
      }
      get ready() {
        return Gi(() =>
          this._ready().then(
            t => t,
            t => {
              if (
                t.code !== f.b.errors.NETWORK_ERROR ||
                'noNetwork' !== t.event
              )
                throw t
            },
          ),
        )
      }
      static getFormatter() {
        return null == go && (go = new Vi()), go
      }
      static getNetwork(t) {
        return mi(null == t ? 'homestead' : t)
      }
      _getInternalBlockNumber(t) {
        return Xi(this, void 0, void 0, function*() {
          if ((yield this._ready(), t > 0))
            for (; this._internalBlockNumber; ) {
              const e = this._internalBlockNumber
              try {
                const r = yield e
                if (ro() - r.respTime <= t) return r.blockNumber
                break
              } catch (t) {
                if (this._internalBlockNumber === e) break
              }
            }
          const e = ro(),
            r = P({
              blockNumber: this.perform('getBlockNumber', {}),
              networkError: this.getNetwork().then(t => null, t => t),
            }).then(({ blockNumber: t, networkError: n }) => {
              if (n)
                throw (this._internalBlockNumber === r &&
                  (this._internalBlockNumber = null),
                n)
              const i = ro()
              return (
                (t = y.from(t).toNumber()) < this._maxInternalBlockNumber &&
                  (t = this._maxInternalBlockNumber),
                (this._maxInternalBlockNumber = t),
                this._setFastBlockNumber(t),
                { blockNumber: t, reqTime: e, respTime: i }
              )
            })
          return (
            (this._internalBlockNumber = r),
            r.catch(t => {
              this._internalBlockNumber === r &&
                (this._internalBlockNumber = null)
            }),
            (yield r).blockNumber
          )
        })
      }
      poll() {
        return Xi(this, void 0, void 0, function*() {
          const t = yo++,
            e = []
          let r = null
          try {
            r = yield this._getInternalBlockNumber(
              100 + this.pollingInterval / 2,
            )
          } catch (t) {
            return void this.emit('error', t)
          }
          if (
            (this._setFastBlockNumber(r),
            this.emit('poll', t, r),
            r !== this._lastBlockNumber)
          ) {
            if (
              (-2 === this._emitted.block && (this._emitted.block = r - 1),
              Math.abs(this._emitted.block - r) > 1e3)
            )
              Yi.warn(
                `network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`,
              ),
                this.emit(
                  'error',
                  Yi.makeError(
                    'network block skew detected',
                    f.b.errors.NETWORK_ERROR,
                    {
                      blockNumber: r,
                      event: 'blockSkew',
                      previousBlockNumber: this._emitted.block,
                    },
                  ),
                ),
                this.emit('block', r)
            else
              for (let t = this._emitted.block + 1; t <= r; t++)
                this.emit('block', t)
            this._emitted.block !== r &&
              ((this._emitted.block = r),
              Object.keys(this._emitted).forEach(t => {
                if ('block' === t) return
                const e = this._emitted[t]
                'pending' !== e && r - e > 12 && delete this._emitted[t]
              })),
              -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1),
              this._events.forEach(t => {
                switch (t.type) {
                  case 'tx': {
                    const r = t.hash
                    let n = this.getTransactionReceipt(r)
                      .then(t =>
                        t && null != t.blockNumber
                          ? ((this._emitted['t:' + r] = t.blockNumber),
                            this.emit(r, t),
                            null)
                          : null,
                      )
                      .catch(t => {
                        this.emit('error', t)
                      })
                    e.push(n)
                    break
                  }
                  case 'filter': {
                    const n = t.filter
                    ;(n.fromBlock = this._lastBlockNumber + 1), (n.toBlock = r)
                    const i = this.getLogs(n)
                      .then(t => {
                        0 !== t.length &&
                          t.forEach(t => {
                            ;(this._emitted['b:' + t.blockHash] =
                              t.blockNumber),
                              (this._emitted['t:' + t.transactionHash] =
                                t.blockNumber),
                              this.emit(n, t)
                          })
                      })
                      .catch(t => {
                        this.emit('error', t)
                      })
                    e.push(i)
                    break
                  }
                }
              }),
              (this._lastBlockNumber = r),
              Promise.all(e)
                .then(() => {
                  this.emit('didPoll', t)
                })
                .catch(t => {
                  this.emit('error', t)
                })
          } else this.emit('didPoll', t)
        })
      }
      resetEventsBlock(t) {
        ;(this._lastBlockNumber = t - 1), this.polling && this.poll()
      }
      get network() {
        return this._network
      }
      detectNetwork() {
        return Xi(this, void 0, void 0, function*() {
          return Yi.throwError(
            'provider does not support network detection',
            f.b.errors.UNSUPPORTED_OPERATION,
            { operation: 'provider.detectNetwork' },
          )
        })
      }
      getNetwork() {
        return Xi(this, void 0, void 0, function*() {
          const t = yield this._ready(),
            e = yield this.detectNetwork()
          if (t.chainId !== e.chainId) {
            if (this.anyNetwork)
              return (
                (this._network = e),
                (this._lastBlockNumber = -2),
                (this._fastBlockNumber = null),
                (this._fastBlockNumberPromise = null),
                (this._fastQueryDate = 0),
                (this._emitted.block = -2),
                (this._maxInternalBlockNumber = -1024),
                (this._internalBlockNumber = null),
                this.emit('network', e, t),
                yield no(0),
                this._network
              )
            const r = Yi.makeError(
              'underlying network changed',
              f.b.errors.NETWORK_ERROR,
              { event: 'changed', network: t, detectedNetwork: e },
            )
            throw (this.emit('error', r), r)
          }
          return t
        })
      }
      get blockNumber() {
        return (
          this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(
            t => {
              this._setFastBlockNumber(t)
            },
            t => {},
          ),
          null != this._fastBlockNumber ? this._fastBlockNumber : -1
        )
      }
      get polling() {
        return null != this._poller
      }
      set polling(t) {
        t && !this._poller
          ? ((this._poller = setInterval(() => {
              this.poll()
            }, this.pollingInterval)),
            this._bootstrapPoll ||
              (this._bootstrapPoll = setTimeout(() => {
                this.poll(),
                  (this._bootstrapPoll = setTimeout(() => {
                    this._poller || this.poll(), (this._bootstrapPoll = null)
                  }, this.pollingInterval))
              }, 0)))
          : !t &&
            this._poller &&
            (clearInterval(this._poller), (this._poller = null))
      }
      get pollingInterval() {
        return this._pollingInterval
      }
      set pollingInterval(t) {
        if ('number' != typeof t || t <= 0 || parseInt(String(t)) != t)
          throw new Error('invalid polling interval')
        ;(this._pollingInterval = t),
          this._poller &&
            (clearInterval(this._poller),
            (this._poller = setInterval(() => {
              this.poll()
            }, this._pollingInterval)))
      }
      _getFastBlockNumber() {
        const t = ro()
        return (
          t - this._fastQueryDate > 2 * this._pollingInterval &&
            ((this._fastQueryDate = t),
            (this._fastBlockNumberPromise = this.getBlockNumber().then(
              t => (
                (null == this._fastBlockNumber || t > this._fastBlockNumber) &&
                  (this._fastBlockNumber = t),
                this._fastBlockNumber
              ),
            ))),
          this._fastBlockNumberPromise
        )
      }
      _setFastBlockNumber(t) {
        ;(null != this._fastBlockNumber && t < this._fastBlockNumber) ||
          ((this._fastQueryDate = ro()),
          (null == this._fastBlockNumber || t > this._fastBlockNumber) &&
            ((this._fastBlockNumber = t),
            (this._fastBlockNumberPromise = Promise.resolve(t))))
      }
      waitForTransaction(t, e, r) {
        return Xi(this, void 0, void 0, function*() {
          return this._waitForTransaction(t, null == e ? 1 : e, r || 0, null)
        })
      }
      _waitForTransaction(t, e, r, n) {
        return Xi(this, void 0, void 0, function*() {
          const i = yield this.getTransactionReceipt(t)
          return (i ? i.confirmations : 0) >= e
            ? i
            : new Promise((i, o) => {
                const s = []
                let a = !1
                const u = function() {
                    return (
                      !!a ||
                      ((a = !0),
                      s.forEach(t => {
                        t()
                      }),
                      !1)
                    )
                  },
                  c = t => {
                    t.confirmations < e || u() || i(t)
                  }
                if (
                  (this.on(t, c),
                  s.push(() => {
                    this.removeListener(t, c)
                  }),
                  n)
                ) {
                  let r = n.startBlock,
                    i = null
                  const c = s =>
                    Xi(this, void 0, void 0, function*() {
                      a ||
                        (yield no(1e3),
                        this.getTransactionCount(n.from).then(
                          l =>
                            Xi(this, void 0, void 0, function*() {
                              if (!a) {
                                if (l <= n.nonce) r = s
                                else {
                                  {
                                    const e = yield this.getTransaction(t)
                                    if (e && null != e.blockNumber) return
                                  }
                                  for (
                                    null == i &&
                                    ((i = r - 3),
                                    i < n.startBlock && (i = n.startBlock));
                                    i <= s;

                                  ) {
                                    if (a) return
                                    const r = yield this.getBlockWithTransactions(
                                      i,
                                    )
                                    for (
                                      let i = 0;
                                      i < r.transactions.length;
                                      i++
                                    ) {
                                      const s = r.transactions[i]
                                      if (s.hash === t) return
                                      if (
                                        s.from === n.from &&
                                        s.nonce === n.nonce
                                      ) {
                                        if (a) return
                                        const r = yield this.waitForTransaction(
                                          s.hash,
                                          e,
                                        )
                                        if (u()) return
                                        let i = 'replaced'
                                        return (
                                          s.data === n.data &&
                                          s.to === n.to &&
                                          s.value.eq(n.value)
                                            ? (i = 'repriced')
                                            : '0x' === s.data &&
                                              s.from === s.to &&
                                              s.value.isZero() &&
                                              (i = 'cancelled'),
                                          void o(
                                            Yi.makeError(
                                              'transaction was replaced',
                                              f.b.errors.TRANSACTION_REPLACED,
                                              {
                                                cancelled:
                                                  'replaced' === i ||
                                                  'cancelled' === i,
                                                reason: i,
                                                replacement: this._wrapTransaction(
                                                  s,
                                                ),
                                                hash: t,
                                                receipt: r,
                                              },
                                            ),
                                          )
                                        )
                                      }
                                    }
                                    i++
                                  }
                                }
                                a || this.once('block', c)
                              }
                            }),
                          t => {
                            a || this.once('block', c)
                          },
                        ))
                    })
                  if (a) return
                  this.once('block', c),
                    s.push(() => {
                      this.removeListener('block', c)
                    })
                }
                if ('number' == typeof r && r > 0) {
                  const t = setTimeout(() => {
                    u() ||
                      o(
                        Yi.makeError('timeout exceeded', f.b.errors.TIMEOUT, {
                          timeout: r,
                        }),
                      )
                  }, r)
                  t.unref && t.unref(),
                    s.push(() => {
                      clearTimeout(t)
                    })
                }
              })
        })
      }
      getBlockNumber() {
        return Xi(this, void 0, void 0, function*() {
          return this._getInternalBlockNumber(0)
        })
      }
      getGasPrice() {
        return Xi(this, void 0, void 0, function*() {
          yield this.getNetwork()
          const t = yield this.perform('getGasPrice', {})
          try {
            return y.from(t)
          } catch (e) {
            return Yi.throwError(
              'bad result from backend',
              f.b.errors.SERVER_ERROR,
              { method: 'getGasPrice', result: t, error: e },
            )
          }
        })
      }
      getBalance(t, e) {
        return Xi(this, void 0, void 0, function*() {
          yield this.getNetwork()
          const r = yield P({
              address: this._getAddress(t),
              blockTag: this._getBlockTag(e),
            }),
            n = yield this.perform('getBalance', r)
          try {
            return y.from(n)
          } catch (t) {
            return Yi.throwError(
              'bad result from backend',
              f.b.errors.SERVER_ERROR,
              { method: 'getBalance', params: r, result: n, error: t },
            )
          }
        })
      }
      getTransactionCount(t, e) {
        return Xi(this, void 0, void 0, function*() {
          yield this.getNetwork()
          const r = yield P({
              address: this._getAddress(t),
              blockTag: this._getBlockTag(e),
            }),
            n = yield this.perform('getTransactionCount', r)
          try {
            return y.from(n).toNumber()
          } catch (t) {
            return Yi.throwError(
              'bad result from backend',
              f.b.errors.SERVER_ERROR,
              { method: 'getTransactionCount', params: r, result: n, error: t },
            )
          }
        })
      }
      getCode(t, e) {
        return Xi(this, void 0, void 0, function*() {
          yield this.getNetwork()
          const r = yield P({
              address: this._getAddress(t),
              blockTag: this._getBlockTag(e),
            }),
            n = yield this.perform('getCode', r)
          try {
            return Object(c.i)(n)
          } catch (t) {
            return Yi.throwError(
              'bad result from backend',
              f.b.errors.SERVER_ERROR,
              { method: 'getCode', params: r, result: n, error: t },
            )
          }
        })
      }
      getStorageAt(t, e, r) {
        return Xi(this, void 0, void 0, function*() {
          yield this.getNetwork()
          const n = yield P({
              address: this._getAddress(t),
              blockTag: this._getBlockTag(r),
              position: Promise.resolve(e).then(t => Object(c.g)(t)),
            }),
            i = yield this.perform('getStorageAt', n)
          try {
            return Object(c.i)(i)
          } catch (t) {
            return Yi.throwError(
              'bad result from backend',
              f.b.errors.SERVER_ERROR,
              { method: 'getStorageAt', params: n, result: i, error: t },
            )
          }
        })
      }
      _wrapTransaction(t, e, r) {
        if (null != e && 32 !== Object(c.d)(e))
          throw new Error('invalid response - sendTransaction')
        const n = t
        return (
          null != e &&
            t.hash !== e &&
            Yi.throwError(
              'Transaction hash mismatch from Provider.sendTransaction.',
              f.b.errors.UNKNOWN_ERROR,
              { expectedHash: t.hash, returnedHash: e },
            ),
          (n.wait = (e, n) =>
            Xi(this, void 0, void 0, function*() {
              null == e && (e = 1), null == n && (n = 0)
              let i = void 0
              0 !== e &&
                null != r &&
                (i = {
                  data: t.data,
                  from: t.from,
                  nonce: t.nonce,
                  to: t.to,
                  value: t.value,
                  startBlock: r,
                })
              const o = yield this._waitForTransaction(t.hash, e, n, i)
              return null == o && 0 === e
                ? null
                : ((this._emitted['t:' + t.hash] = o.blockNumber),
                  0 === o.status &&
                    Yi.throwError(
                      'transaction failed',
                      f.b.errors.CALL_EXCEPTION,
                      { transactionHash: t.hash, transaction: t, receipt: o },
                    ),
                  o)
            })),
          n
        )
      }
      sendTransaction(t) {
        return Xi(this, void 0, void 0, function*() {
          yield this.getNetwork()
          const e = yield Promise.resolve(t).then(t => Object(c.i)(t)),
            r = this.formatter.transaction(t)
          null == r.confirmations && (r.confirmations = 0)
          const n = yield this._getInternalBlockNumber(
            100 + 2 * this.pollingInterval,
          )
          try {
            const t = yield this.perform('sendTransaction', {
              signedTransaction: e,
            })
            return this._wrapTransaction(r, t, n)
          } catch (t) {
            throw ((t.transaction = r), (t.transactionHash = r.hash), t)
          }
        })
      }
      _getTransactionRequest(t) {
        return Xi(this, void 0, void 0, function*() {
          const e = yield t,
            r = {}
          return (
            ['from', 'to'].forEach(t => {
              null != e[t] &&
                (r[t] = Promise.resolve(e[t]).then(t =>
                  t ? this._getAddress(t) : null,
                ))
            }),
            [
              'gasLimit',
              'gasPrice',
              'maxFeePerGas',
              'maxPriorityFeePerGas',
              'value',
            ].forEach(t => {
              null != e[t] &&
                (r[t] = Promise.resolve(e[t]).then(t => (t ? y.from(t) : null)))
            }),
            ['type'].forEach(t => {
              null != e[t] &&
                (r[t] = Promise.resolve(e[t]).then(t => (null != t ? t : null)))
            }),
            e.accessList &&
              (r.accessList = this.formatter.accessList(e.accessList)),
            ['data'].forEach(t => {
              null != e[t] &&
                (r[t] = Promise.resolve(e[t]).then(t =>
                  t ? Object(c.i)(t) : null,
                ))
            }),
            this.formatter.transactionRequest(yield P(r))
          )
        })
      }
      _getFilter(t) {
        return Xi(this, void 0, void 0, function*() {
          t = yield t
          const e = {}
          return (
            null != t.address && (e.address = this._getAddress(t.address)),
            ['blockHash', 'topics'].forEach(r => {
              null != t[r] && (e[r] = t[r])
            }),
            ['fromBlock', 'toBlock'].forEach(r => {
              null != t[r] && (e[r] = this._getBlockTag(t[r]))
            }),
            this.formatter.filter(yield P(e))
          )
        })
      }
      call(t, e) {
        return Xi(this, void 0, void 0, function*() {
          yield this.getNetwork()
          const r = yield P({
              transaction: this._getTransactionRequest(t),
              blockTag: this._getBlockTag(e),
            }),
            n = yield this.perform('call', r)
          try {
            return Object(c.i)(n)
          } catch (t) {
            return Yi.throwError(
              'bad result from backend',
              f.b.errors.SERVER_ERROR,
              { method: 'call', params: r, result: n, error: t },
            )
          }
        })
      }
      estimateGas(t) {
        return Xi(this, void 0, void 0, function*() {
          yield this.getNetwork()
          const e = yield P({ transaction: this._getTransactionRequest(t) }),
            r = yield this.perform('estimateGas', e)
          try {
            return y.from(r)
          } catch (t) {
            return Yi.throwError(
              'bad result from backend',
              f.b.errors.SERVER_ERROR,
              { method: 'estimateGas', params: e, result: r, error: t },
            )
          }
        })
      }
      _getAddress(t) {
        return Xi(this, void 0, void 0, function*() {
          'string' != typeof (t = yield t) &&
            Yi.throwArgumentError('invalid address or ENS name', 'name', t)
          const e = yield this.resolveName(t)
          return (
            null == e &&
              Yi.throwError(
                'ENS name not configured',
                f.b.errors.UNSUPPORTED_OPERATION,
                { operation: `resolveName(${JSON.stringify(t)})` },
              ),
            e
          )
        })
      }
      _getBlock(t, e) {
        return Xi(this, void 0, void 0, function*() {
          yield this.getNetwork(), (t = yield t)
          let r = -128
          const n = { includeTransactions: !!e }
          if (Object(c.l)(t, 32)) n.blockHash = t
          else
            try {
              ;(n.blockTag = yield this._getBlockTag(t)),
                Object(c.l)(n.blockTag) &&
                  (r = parseInt(n.blockTag.substring(2), 16))
            } catch (e) {
              Yi.throwArgumentError(
                'invalid block hash or block tag',
                'blockHashOrBlockTag',
                t,
              )
            }
          return Gi(
            () =>
              Xi(this, void 0, void 0, function*() {
                const t = yield this.perform('getBlock', n)
                if (null == t)
                  return (null != n.blockHash &&
                    null == this._emitted['b:' + n.blockHash]) ||
                    (null != n.blockTag && r > this._emitted.block)
                    ? null
                    : void 0
                if (e) {
                  let e = null
                  for (let r = 0; r < t.transactions.length; r++) {
                    const n = t.transactions[r]
                    if (null == n.blockNumber) n.confirmations = 0
                    else if (null == n.confirmations) {
                      null == e &&
                        (e = yield this._getInternalBlockNumber(
                          100 + 2 * this.pollingInterval,
                        ))
                      let t = e - n.blockNumber + 1
                      t <= 0 && (t = 1), (n.confirmations = t)
                    }
                  }
                  const r = this.formatter.blockWithTransactions(t)
                  return (
                    (r.transactions = r.transactions.map(t =>
                      this._wrapTransaction(t),
                    )),
                    r
                  )
                }
                return this.formatter.block(t)
              }),
            { oncePoll: this },
          )
        })
      }
      getBlock(t) {
        return this._getBlock(t, !1)
      }
      getBlockWithTransactions(t) {
        return this._getBlock(t, !0)
      }
      getTransaction(t) {
        return Xi(this, void 0, void 0, function*() {
          yield this.getNetwork(), (t = yield t)
          const e = { transactionHash: this.formatter.hash(t, !0) }
          return Gi(
            () =>
              Xi(this, void 0, void 0, function*() {
                const r = yield this.perform('getTransaction', e)
                if (null == r)
                  return null == this._emitted['t:' + t] ? null : void 0
                const n = this.formatter.transactionResponse(r)
                if (null == n.blockNumber) n.confirmations = 0
                else if (null == n.confirmations) {
                  let t =
                    (yield this._getInternalBlockNumber(
                      100 + 2 * this.pollingInterval,
                    )) -
                    n.blockNumber +
                    1
                  t <= 0 && (t = 1), (n.confirmations = t)
                }
                return this._wrapTransaction(n)
              }),
            { oncePoll: this },
          )
        })
      }
      getTransactionReceipt(t) {
        return Xi(this, void 0, void 0, function*() {
          yield this.getNetwork(), (t = yield t)
          const e = { transactionHash: this.formatter.hash(t, !0) }
          return Gi(
            () =>
              Xi(this, void 0, void 0, function*() {
                const r = yield this.perform('getTransactionReceipt', e)
                if (null == r)
                  return null == this._emitted['t:' + t] ? null : void 0
                if (null == r.blockHash) return
                const n = this.formatter.receipt(r)
                if (null == n.blockNumber) n.confirmations = 0
                else if (null == n.confirmations) {
                  let t =
                    (yield this._getInternalBlockNumber(
                      100 + 2 * this.pollingInterval,
                    )) -
                    n.blockNumber +
                    1
                  t <= 0 && (t = 1), (n.confirmations = t)
                }
                return n
              }),
            { oncePoll: this },
          )
        })
      }
      getLogs(t) {
        return Xi(this, void 0, void 0, function*() {
          yield this.getNetwork()
          const e = yield P({ filter: this._getFilter(t) }),
            r = yield this.perform('getLogs', e)
          return (
            r.forEach(t => {
              null == t.removed && (t.removed = !1)
            }),
            Vi.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
          )
        })
      }
      getEtherPrice() {
        return Xi(this, void 0, void 0, function*() {
          return yield this.getNetwork(), this.perform('getEtherPrice', {})
        })
      }
      _getBlockTag(t) {
        return Xi(this, void 0, void 0, function*() {
          if ('number' == typeof (t = yield t) && t < 0) {
            t % 1 && Yi.throwArgumentError('invalid BlockTag', 'blockTag', t)
            let e = yield this._getInternalBlockNumber(
              100 + 2 * this.pollingInterval,
            )
            return (e += t), e < 0 && (e = 0), this.formatter.blockTag(e)
          }
          return this.formatter.blockTag(t)
        })
      }
      getResolver(t) {
        return Xi(this, void 0, void 0, function*() {
          try {
            const e = yield this._getResolver(t)
            return null == e ? null : new mo(this, e, t)
          } catch (t) {
            if (t.code === f.b.errors.CALL_EXCEPTION) return null
            throw t
          }
        })
      }
      _getResolver(t) {
        return Xi(this, void 0, void 0, function*() {
          const e = yield this.getNetwork()
          e.ensAddress ||
            Yi.throwError(
              'network does not support ENS',
              f.b.errors.UNSUPPORTED_OPERATION,
              { operation: 'ENS', network: e.name },
            )
          const r = {
            to: e.ensAddress,
            data: '0x0178b8bf' + Ti(t).substring(2),
          }
          try {
            return this.formatter.callAddress(yield this.call(r))
          } catch (t) {
            if (t.code === f.b.errors.CALL_EXCEPTION) return null
            throw t
          }
        })
      }
      resolveName(t) {
        return Xi(this, void 0, void 0, function*() {
          t = yield t
          try {
            return Promise.resolve(this.formatter.address(t))
          } catch (e) {
            if (Object(c.l)(t)) throw e
          }
          'string' != typeof t &&
            Yi.throwArgumentError('invalid ENS name', 'name', t)
          const e = yield this.getResolver(t)
          return e ? yield e.getAddress() : null
        })
      }
      lookupAddress(t) {
        return Xi(this, void 0, void 0, function*() {
          t = yield t
          const e =
              (t = this.formatter.address(t)).substring(2).toLowerCase() +
              '.addr.reverse',
            r = yield this._getResolver(e)
          if (!r) return null
          let n = Object(c.a)(
            yield this.call({ to: r, data: '0x691f3431' + Ti(e).substring(2) }),
          )
          if (n.length < 32 || !y.from(n.slice(0, 32)).eq(32)) return null
          if (((n = n.slice(32)), n.length < 32)) return null
          const i = y.from(n.slice(0, 32)).toNumber()
          if (((n = n.slice(32)), i > n.length)) return null
          const o = mt(n.slice(0, i))
          return (yield this.resolveName(o)) != t ? null : o
        })
      }
      getAvatar(t) {
        return Xi(this, void 0, void 0, function*() {
          let e = null
          if (Object(c.l)(t)) {
            const r = this.formatter.address(t),
              n = r.substring(2).toLowerCase() + '.addr.reverse',
              i = yield this._getResolver(n)
            if (!i) return null
            e = new mo(this, i, '_', r)
          } else if (((e = yield this.getResolver(t)), !e)) return null
          const r = yield e.getAvatar()
          return null == r ? null : r.url
        })
      }
      perform(t, e) {
        return Yi.throwError(
          t + ' not implemented',
          f.b.errors.NOT_IMPLEMENTED,
          { operation: t },
        )
      }
      _startEvent(t) {
        this.polling = this._events.filter(t => t.pollable()).length > 0
      }
      _stopEvent(t) {
        this.polling = this._events.filter(t => t.pollable()).length > 0
      }
      _addEventListener(t, e, r) {
        const n = new oo(eo(t), e, r)
        return this._events.push(n), this._startEvent(n), this
      }
      on(t, e) {
        return this._addEventListener(t, e, !1)
      }
      once(t, e) {
        return this._addEventListener(t, e, !0)
      }
      emit(t, ...e) {
        let r = !1,
          n = [],
          i = eo(t)
        return (
          (this._events = this._events.filter(
            t =>
              t.tag !== i ||
              (setTimeout(() => {
                t.listener.apply(this, e)
              }, 0),
              (r = !0),
              !t.once || (n.push(t), !1)),
          )),
          n.forEach(t => {
            this._stopEvent(t)
          }),
          r
        )
      }
      listenerCount(t) {
        if (!t) return this._events.length
        let e = eo(t)
        return this._events.filter(t => t.tag === e).length
      }
      listeners(t) {
        if (null == t) return this._events.map(t => t.listener)
        let e = eo(t)
        return this._events.filter(t => t.tag === e).map(t => t.listener)
      }
      off(t, e) {
        if (null == e) return this.removeAllListeners(t)
        const r = []
        let n = !1,
          i = eo(t)
        return (
          (this._events = this._events.filter(
            t =>
              t.tag !== i ||
              t.listener != e ||
              (!!n || ((n = !0), r.push(t), !1)),
          )),
          r.forEach(t => {
            this._stopEvent(t)
          }),
          this
        )
      }
      removeAllListeners(t) {
        let e = []
        if (null == t) (e = this._events), (this._events = [])
        else {
          const r = eo(t)
          this._events = this._events.filter(
            t => t.tag !== r || (e.push(t), !1),
          )
        }
        return (
          e.forEach(t => {
            this._stopEvent(t)
          }),
          this
        )
      }
    }
    var vo = function(t, e, r, n) {
      return new (r || (r = Promise))(function(i, o) {
        function s(t) {
          try {
            u(n.next(t))
          } catch (t) {
            o(t)
          }
        }
        function a(t) {
          try {
            u(n.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function(t) {
                    t(e)
                  })).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
      })
    }
    const wo = new f.b('providers/5.5.3'),
      Eo = ['call', 'estimateGas']
    function _o(t, e, r) {
      if ('call' === t && e.code === f.b.errors.SERVER_ERROR) {
        const t = e.error
        if (t && t.message.match('reverted') && Object(c.l)(t.data))
          return t.data
        wo.throwError(
          'missing revert data in call exception',
          f.b.errors.CALL_EXCEPTION,
          { error: e, data: '0x' },
        )
      }
      let n = e.message
      e.code === f.b.errors.SERVER_ERROR &&
      e.error &&
      'string' == typeof e.error.message
        ? (n = e.error.message)
        : 'string' == typeof e.body
        ? (n = e.body)
        : 'string' == typeof e.responseText && (n = e.responseText),
        (n = (n || '').toLowerCase())
      const i = r.transaction || r.signedTransaction
      throw (n.match(/insufficient funds|base fee exceeds gas limit/) &&
        wo.throwError(
          'insufficient funds for intrinsic transaction cost',
          f.b.errors.INSUFFICIENT_FUNDS,
          { error: e, method: t, transaction: i },
        ),
      n.match(/nonce too low/) &&
        wo.throwError('nonce has already been used', f.b.errors.NONCE_EXPIRED, {
          error: e,
          method: t,
          transaction: i,
        }),
      n.match(/replacement transaction underpriced/) &&
        wo.throwError(
          'replacement fee too low',
          f.b.errors.REPLACEMENT_UNDERPRICED,
          { error: e, method: t, transaction: i },
        ),
      n.match(/only replay-protected/) &&
        wo.throwError(
          'legacy pre-eip-155 transactions not supported',
          f.b.errors.UNSUPPORTED_OPERATION,
          { error: e, method: t, transaction: i },
        ),
      Eo.indexOf(t) >= 0 &&
        n.match(
          /gas required exceeds allowance|always failing transaction|execution reverted/,
        ) &&
        wo.throwError(
          'cannot estimate gas; transaction may fail or may require manual gas limit',
          f.b.errors.UNPREDICTABLE_GAS_LIMIT,
          { error: e, method: t, transaction: i },
        ),
      e)
    }
    function ko(t) {
      return new Promise(function(e) {
        setTimeout(e, t)
      })
    }
    function Ao(t) {
      if (t.error) {
        const e = new Error(t.error.message)
        throw ((e.code = t.error.code), (e.data = t.error.data), e)
      }
      return t.result
    }
    function So(t) {
      return t ? t.toLowerCase() : t
    }
    const Po = {}
    class Oo extends Me {
      constructor(t, e, r) {
        if ((wo.checkNew(new.target, Oo), super(), t !== Po))
          throw new Error(
            'do not call the JsonRpcSigner constructor directly; use provider.getSigner',
          )
        A(this, 'provider', e),
          null == r && (r = 0),
          'string' == typeof r
            ? (A(this, '_address', this.provider.formatter.address(r)),
              A(this, '_index', null))
            : 'number' == typeof r
            ? (A(this, '_index', r), A(this, '_address', null))
            : wo.throwArgumentError(
                'invalid address or index',
                'addressOrIndex',
                r,
              )
      }
      connect(t) {
        return wo.throwError(
          'cannot alter JSON-RPC Signer connection',
          f.b.errors.UNSUPPORTED_OPERATION,
          { operation: 'connect' },
        )
      }
      connectUnchecked() {
        return new No(Po, this.provider, this._address || this._index)
      }
      getAddress() {
        return this._address
          ? Promise.resolve(this._address)
          : this.provider
              .send('eth_accounts', [])
              .then(
                t => (
                  t.length <= this._index &&
                    wo.throwError(
                      'unknown account #' + this._index,
                      f.b.errors.UNSUPPORTED_OPERATION,
                      { operation: 'getAddress' },
                    ),
                  this.provider.formatter.address(t[this._index])
                ),
              )
      }
      sendUncheckedTransaction(t) {
        t = N(t)
        const e = this.getAddress().then(t => (t && (t = t.toLowerCase()), t))
        if (null == t.gasLimit) {
          const r = N(t)
          ;(r.from = e), (t.gasLimit = this.provider.estimateGas(r))
        }
        return (
          null != t.to &&
            (t.to = Promise.resolve(t.to).then(t =>
              vo(this, void 0, void 0, function*() {
                if (null == t) return null
                const e = yield this.provider.resolveName(t)
                return (
                  null == e &&
                    wo.throwArgumentError(
                      'provided ENS name resolves to null',
                      'tx.to',
                      t,
                    ),
                  e
                )
              }),
            )),
          P({ tx: P(t), sender: e }).then(({ tx: e, sender: r }) => {
            null != e.from
              ? e.from.toLowerCase() !== r &&
                wo.throwArgumentError('from address mismatch', 'transaction', t)
              : (e.from = r)
            const n = this.provider.constructor.hexlifyTransaction(e, {
              from: !0,
            })
            return this.provider
              .send('eth_sendTransaction', [n])
              .then(t => t, t => _o('sendTransaction', t, n))
          })
        )
      }
      signTransaction(t) {
        return wo.throwError(
          'signing transactions is unsupported',
          f.b.errors.UNSUPPORTED_OPERATION,
          { operation: 'signTransaction' },
        )
      }
      sendTransaction(t) {
        return vo(this, void 0, void 0, function*() {
          const e = yield this.provider._getInternalBlockNumber(
              100 + 2 * this.provider.pollingInterval,
            ),
            r = yield this.sendUncheckedTransaction(t)
          try {
            return yield Gi(
              () =>
                vo(this, void 0, void 0, function*() {
                  const t = yield this.provider.getTransaction(r)
                  if (null !== t) return this.provider._wrapTransaction(t, r, e)
                }),
              { oncePoll: this.provider },
            )
          } catch (t) {
            throw ((t.transactionHash = r), t)
          }
        })
      }
      signMessage(t) {
        return vo(this, void 0, void 0, function*() {
          const e = 'string' == typeof t ? ht(t) : t,
            r = yield this.getAddress()
          return yield this.provider.send('personal_sign', [
            Object(c.i)(e),
            r.toLowerCase(),
          ])
        })
      }
      _legacySignMessage(t) {
        return vo(this, void 0, void 0, function*() {
          const e = 'string' == typeof t ? ht(t) : t,
            r = yield this.getAddress()
          return yield this.provider.send('eth_sign', [
            r.toLowerCase(),
            Object(c.i)(e),
          ])
        })
      }
      _signTypedData(t, e, r) {
        return vo(this, void 0, void 0, function*() {
          const n = yield Jr.resolveNames(t, e, r, t =>
              this.provider.resolveName(t),
            ),
            i = yield this.getAddress()
          return yield this.provider.send('eth_signTypedData_v4', [
            i.toLowerCase(),
            JSON.stringify(Jr.getPayload(n.domain, e, n.value)),
          ])
        })
      }
      unlock(t) {
        return vo(this, void 0, void 0, function*() {
          const e = this.provider,
            r = yield this.getAddress()
          return e.send('personal_unlockAccount', [r.toLowerCase(), t, null])
        })
      }
    }
    class No extends Oo {
      sendTransaction(t) {
        return this.sendUncheckedTransaction(t).then(t => ({
          hash: t,
          nonce: null,
          gasLimit: null,
          gasPrice: null,
          data: null,
          value: null,
          chainId: null,
          confirmations: 0,
          from: null,
          wait: e => this.provider.waitForTransaction(t, e),
        }))
      }
    }
    const xo = {
      chainId: !0,
      data: !0,
      gasLimit: !0,
      gasPrice: !0,
      nonce: !0,
      to: !0,
      value: !0,
      type: !0,
      accessList: !0,
      maxFeePerGas: !0,
      maxPriorityFeePerGas: !0,
    }
    class Mo extends bo {
      constructor(t, e) {
        wo.checkNew(new.target, Mo)
        let r = e
        null == r &&
          (r = new Promise((t, e) => {
            setTimeout(() => {
              this.detectNetwork().then(
                e => {
                  t(e)
                },
                t => {
                  e(t)
                },
              )
            }, 0)
          })),
          super(r),
          t || (t = S(this.constructor, 'defaultUrl')()),
          A(
            this,
            'connection',
            'string' == typeof t
              ? Object.freeze({ url: t })
              : Object.freeze(N(t)),
          ),
          (this._nextId = 42)
      }
      get _cache() {
        return (
          null == this._eventLoopCache && (this._eventLoopCache = {}),
          this._eventLoopCache
        )
      }
      static defaultUrl() {
        return 'http://localhost:8545'
      }
      detectNetwork() {
        return (
          this._cache.detectNetwork ||
            ((this._cache.detectNetwork = this._uncachedDetectNetwork()),
            setTimeout(() => {
              this._cache.detectNetwork = null
            }, 0)),
          this._cache.detectNetwork
        )
      }
      _uncachedDetectNetwork() {
        return vo(this, void 0, void 0, function*() {
          yield ko(0)
          let t = null
          try {
            t = yield this.send('eth_chainId', [])
          } catch (e) {
            try {
              t = yield this.send('net_version', [])
            } catch (t) {}
          }
          if (null != t) {
            const e = S(this.constructor, 'getNetwork')
            try {
              return e(y.from(t).toNumber())
            } catch (e) {
              return wo.throwError(
                'could not detect network',
                f.b.errors.NETWORK_ERROR,
                { chainId: t, event: 'invalidNetwork', serverError: e },
              )
            }
          }
          return wo.throwError(
            'could not detect network',
            f.b.errors.NETWORK_ERROR,
            { event: 'noNetwork' },
          )
        })
      }
      getSigner(t) {
        return new Oo(Po, this, t)
      }
      getUncheckedSigner(t) {
        return this.getSigner(t).connectUnchecked()
      }
      listAccounts() {
        return this.send('eth_accounts', []).then(t =>
          t.map(t => this.formatter.address(t)),
        )
      }
      send(t, e) {
        const r = { method: t, params: e, id: this._nextId++, jsonrpc: '2.0' }
        this.emit('debug', { action: 'request', request: T(r), provider: this })
        const n = ['eth_chainId', 'eth_blockNumber'].indexOf(t) >= 0
        if (n && this._cache[t]) return this._cache[t]
        const i = zi(this.connection, JSON.stringify(r), Ao).then(
          t => (
            this.emit('debug', {
              action: 'response',
              request: r,
              response: t,
              provider: this,
            }),
            t
          ),
          t => {
            throw (this.emit('debug', {
              action: 'response',
              error: t,
              request: r,
              provider: this,
            }),
            t)
          },
        )
        return (
          n &&
            ((this._cache[t] = i),
            setTimeout(() => {
              this._cache[t] = null
            }, 0)),
          i
        )
      }
      prepareRequest(t, e) {
        switch (t) {
          case 'getBlockNumber':
            return ['eth_blockNumber', []]
          case 'getGasPrice':
            return ['eth_gasPrice', []]
          case 'getBalance':
            return ['eth_getBalance', [So(e.address), e.blockTag]]
          case 'getTransactionCount':
            return ['eth_getTransactionCount', [So(e.address), e.blockTag]]
          case 'getCode':
            return ['eth_getCode', [So(e.address), e.blockTag]]
          case 'getStorageAt':
            return ['eth_getStorageAt', [So(e.address), e.position, e.blockTag]]
          case 'sendTransaction':
            return ['eth_sendRawTransaction', [e.signedTransaction]]
          case 'getBlock':
            return e.blockTag
              ? ['eth_getBlockByNumber', [e.blockTag, !!e.includeTransactions]]
              : e.blockHash
              ? ['eth_getBlockByHash', [e.blockHash, !!e.includeTransactions]]
              : null
          case 'getTransaction':
            return ['eth_getTransactionByHash', [e.transactionHash]]
          case 'getTransactionReceipt':
            return ['eth_getTransactionReceipt', [e.transactionHash]]
          case 'call':
            return [
              'eth_call',
              [
                S(this.constructor, 'hexlifyTransaction')(e.transaction, {
                  from: !0,
                }),
                e.blockTag,
              ],
            ]
          case 'estimateGas':
            return [
              'eth_estimateGas',
              [
                S(this.constructor, 'hexlifyTransaction')(e.transaction, {
                  from: !0,
                }),
              ],
            ]
          case 'getLogs':
            return (
              e.filter &&
                null != e.filter.address &&
                (e.filter.address = So(e.filter.address)),
              ['eth_getLogs', [e.filter]]
            )
        }
        return null
      }
      perform(t, e) {
        return vo(this, void 0, void 0, function*() {
          if ('call' === t || 'estimateGas' === t) {
            const t = e.transaction
            if (
              t &&
              null != t.type &&
              y.from(t.type).isZero() &&
              null == t.maxFeePerGas &&
              null == t.maxPriorityFeePerGas
            ) {
              const r = yield this.getFeeData()
              null == r.maxFeePerGas &&
                null == r.maxPriorityFeePerGas &&
                (((e = N(e)).transaction = N(t)), delete e.transaction.type)
            }
          }
          const r = this.prepareRequest(t, e)
          null == r &&
            wo.throwError(t + ' not implemented', f.b.errors.NOT_IMPLEMENTED, {
              operation: t,
            })
          try {
            return yield this.send(r[0], r[1])
          } catch (r) {
            return _o(t, r, e)
          }
        })
      }
      _startEvent(t) {
        'pending' === t.tag && this._startPending(), super._startEvent(t)
      }
      _startPending() {
        if (null != this._pendingFilter) return
        const t = this,
          e = this.send('eth_newPendingTransactionFilter', [])
        ;(this._pendingFilter = e),
          e
            .then(function(r) {
              return (
                (function n() {
                  t.send('eth_getFilterChanges', [r])
                    .then(function(r) {
                      if (t._pendingFilter != e) return null
                      let n = Promise.resolve()
                      return (
                        r.forEach(function(e) {
                          ;(t._emitted['t:' + e.toLowerCase()] = 'pending'),
                            (n = n.then(function() {
                              return t.getTransaction(e).then(function(e) {
                                return t.emit('pending', e), null
                              })
                            }))
                        }),
                        n.then(function() {
                          return ko(1e3)
                        })
                      )
                    })
                    .then(function() {
                      if (t._pendingFilter == e)
                        return (
                          setTimeout(function() {
                            n()
                          }, 0),
                          null
                        )
                      t.send('eth_uninstallFilter', [r])
                    })
                    .catch(t => {})
                })(),
                r
              )
            })
            .catch(t => {})
      }
      _stopEvent(t) {
        'pending' === t.tag &&
          0 === this.listenerCount('pending') &&
          (this._pendingFilter = null),
          super._stopEvent(t)
      }
      static hexlifyTransaction(t, e) {
        const r = N(xo)
        if (e) for (const t in e) e[t] && (r[t] = !0)
        O(t, r)
        const n = {}
        return (
          [
            'gasLimit',
            'gasPrice',
            'type',
            'maxFeePerGas',
            'maxPriorityFeePerGas',
            'nonce',
            'value',
          ].forEach(function(e) {
            if (null == t[e]) return
            const r = Object(c.g)(t[e])
            'gasLimit' === e && (e = 'gas'), (n[e] = r)
          }),
          ['from', 'to', 'data'].forEach(function(e) {
            null != t[e] && (n[e] = Object(c.i)(t[e]))
          }),
          t.accessList && (n.accessList = $e(t.accessList)),
          n
        )
      }
    }
    let To = null
    try {
      if (((To = WebSocket), null == To)) throw new Error('inject please')
    } catch (t) {
      const e = new f.b('providers/5.5.3')
      To = function() {
        e.throwError(
          'WebSockets not supported in this environment',
          f.b.errors.UNSUPPORTED_OPERATION,
          { operation: 'new WebSocket()' },
        )
      }
    }
    var Io = function(t, e, r, n) {
      return new (r || (r = Promise))(function(i, o) {
        function s(t) {
          try {
            u(n.next(t))
          } catch (t) {
            o(t)
          }
        }
        function a(t) {
          try {
            u(n.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function(t) {
                    t(e)
                  })).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
      })
    }
    const Ro = new f.b('providers/5.5.3')
    let Co = 1
    class jo extends Mo {
      constructor(t, e) {
        'any' === e &&
          Ro.throwError(
            "WebSocketProvider does not support 'any' network yet",
            f.b.errors.UNSUPPORTED_OPERATION,
            { operation: 'network:any' },
          ),
          super(t, e),
          (this._pollingInterval = -1),
          (this._wsReady = !1),
          A(this, '_websocket', new To(this.connection.url)),
          A(this, '_requests', {}),
          A(this, '_subs', {}),
          A(this, '_subIds', {}),
          A(this, '_detectNetwork', super.detectNetwork()),
          (this._websocket.onopen = () => {
            ;(this._wsReady = !0),
              Object.keys(this._requests).forEach(t => {
                this._websocket.send(this._requests[t].payload)
              })
          }),
          (this._websocket.onmessage = t => {
            const e = t.data,
              r = JSON.parse(e)
            if (null != r.id) {
              const t = String(r.id),
                n = this._requests[t]
              if ((delete this._requests[t], void 0 !== r.result))
                n.callback(null, r.result),
                  this.emit('debug', {
                    action: 'response',
                    request: JSON.parse(n.payload),
                    response: r.result,
                    provider: this,
                  })
              else {
                let t = null
                r.error
                  ? ((t = new Error(r.error.message || 'unknown error')),
                    A(t, 'code', r.error.code || null),
                    A(t, 'response', e))
                  : (t = new Error('unknown error')),
                  n.callback(t, void 0),
                  this.emit('debug', {
                    action: 'response',
                    error: t,
                    request: JSON.parse(n.payload),
                    provider: this,
                  })
              }
            } else if ('eth_subscription' === r.method) {
              const t = this._subs[r.params.subscription]
              t && t.processFunc(r.params.result)
            } else console.warn('this should not happen')
          })
        const r = setInterval(() => {
          this.emit('poll')
        }, 1e3)
        r.unref && r.unref()
      }
      detectNetwork() {
        return this._detectNetwork
      }
      get pollingInterval() {
        return 0
      }
      resetEventsBlock(t) {
        Ro.throwError(
          'cannot reset events block on WebSocketProvider',
          f.b.errors.UNSUPPORTED_OPERATION,
          { operation: 'resetEventBlock' },
        )
      }
      set pollingInterval(t) {
        Ro.throwError(
          'cannot set polling interval on WebSocketProvider',
          f.b.errors.UNSUPPORTED_OPERATION,
          { operation: 'setPollingInterval' },
        )
      }
      poll() {
        return Io(this, void 0, void 0, function*() {
          return null
        })
      }
      set polling(t) {
        t &&
          Ro.throwError(
            'cannot set polling on WebSocketProvider',
            f.b.errors.UNSUPPORTED_OPERATION,
            { operation: 'setPolling' },
          )
      }
      send(t, e) {
        const r = Co++
        return new Promise((n, i) => {
          const o = JSON.stringify({
            method: t,
            params: e,
            id: r,
            jsonrpc: '2.0',
          })
          this.emit('debug', {
            action: 'request',
            request: JSON.parse(o),
            provider: this,
          }),
            (this._requests[String(r)] = {
              callback: function(t, e) {
                return t ? i(t) : n(e)
              },
              payload: o,
            }),
            this._wsReady && this._websocket.send(o)
        })
      }
      static defaultUrl() {
        return 'ws://localhost:8546'
      }
      _subscribe(t, e, r) {
        return Io(this, void 0, void 0, function*() {
          let n = this._subIds[t]
          null == n &&
            ((n = Promise.all(e).then(t => this.send('eth_subscribe', t))),
            (this._subIds[t] = n))
          const i = yield n
          this._subs[i] = { tag: t, processFunc: r }
        })
      }
      _startEvent(t) {
        switch (t.type) {
          case 'block':
            this._subscribe('block', ['newHeads'], t => {
              const e = y.from(t.number).toNumber()
              ;(this._emitted.block = e), this.emit('block', e)
            })
            break
          case 'pending':
            this._subscribe('pending', ['newPendingTransactions'], t => {
              this.emit('pending', t)
            })
            break
          case 'filter':
            this._subscribe(t.tag, ['logs', this._getFilter(t.filter)], e => {
              null == e.removed && (e.removed = !1),
                this.emit(t.filter, this.formatter.filterLog(e))
            })
            break
          case 'tx': {
            const e = t => {
              const e = t.hash
              this.getTransactionReceipt(e).then(t => {
                t && this.emit(e, t)
              })
            }
            e(t),
              this._subscribe('tx', ['newHeads'], t => {
                this._events.filter(t => 'tx' === t.type).forEach(e)
              })
            break
          }
          case 'debug':
          case 'poll':
          case 'willPoll':
          case 'didPoll':
          case 'error':
            break
          default:
            console.log('unhandled:', t)
        }
      }
      _stopEvent(t) {
        let e = t.tag
        if ('tx' === t.type) {
          if (this._events.filter(t => 'tx' === t.type).length) return
          e = 'tx'
        } else if (this.listenerCount(t.event)) return
        const r = this._subIds[e]
        r &&
          (delete this._subIds[e],
          r.then(t => {
            this._subs[t] &&
              (delete this._subs[t], this.send('eth_unsubscribe', [t]))
          }))
      }
      destroy() {
        return Io(this, void 0, void 0, function*() {
          this._websocket.readyState === To.CONNECTING &&
            (yield new Promise(t => {
              ;(this._websocket.onopen = function() {
                t(!0)
              }),
                (this._websocket.onerror = function() {
                  t(!1)
                })
            })),
            this._websocket.close(1e3)
        })
      }
    }
    var Bo = function(t, e, r, n) {
      return new (r || (r = Promise))(function(i, o) {
        function s(t) {
          try {
            u(n.next(t))
          } catch (t) {
            o(t)
          }
        }
        function a(t) {
          try {
            u(n.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function(t) {
                    t(e)
                  })).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
      })
    }
    const Fo = new f.b('providers/5.5.3')
    class Lo extends Mo {
      detectNetwork() {
        const t = Object.create(null, {
          detectNetwork: { get: () => super.detectNetwork },
        })
        return Bo(this, void 0, void 0, function*() {
          let e = this.network
          return (
            null == e &&
              ((e = yield t.detectNetwork.call(this)),
              e ||
                Fo.throwError(
                  'no network detected',
                  f.b.errors.UNKNOWN_ERROR,
                  {},
                ),
              null == this._network &&
                (A(this, '_network', e), this.emit('network', e, null))),
            e
          )
        })
      }
    }
    class Uo extends Lo {
      constructor(t, e) {
        Fo.checkAbstract(new.target, Uo),
          (t = S(new.target, 'getNetwork')(t)),
          (e = S(new.target, 'getApiKey')(e))
        super(S(new.target, 'getUrl')(t, e), t),
          'string' == typeof e
            ? A(this, 'apiKey', e)
            : null != e &&
              Object.keys(e).forEach(t => {
                A(this, t, e[t])
              })
      }
      _startPending() {
        Fo.warn('WARNING: API provider does not support pending filters')
      }
      isCommunityResource() {
        return !1
      }
      getSigner(t) {
        return Fo.throwError(
          'API provider does not support signing',
          f.b.errors.UNSUPPORTED_OPERATION,
          { operation: 'getSigner' },
        )
      }
      listAccounts() {
        return Promise.resolve([])
      }
      static getApiKey(t) {
        return t
      }
      static getUrl(t, e) {
        return Fo.throwError(
          'not implemented; sub-classes must override getUrl',
          f.b.errors.NOT_IMPLEMENTED,
          { operation: 'getUrl' },
        )
      }
    }
    const Do = new f.b('providers/5.5.3'),
      zo = '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC'
    class Go extends jo {
      constructor(t, e) {
        const r = new Ko(t, e)
        super(
          r.connection.url
            .replace(/^http/i, 'ws')
            .replace('.alchemyapi.', '.ws.alchemyapi.'),
          r.network,
        ),
          A(this, 'apiKey', r.apiKey)
      }
      isCommunityResource() {
        return this.apiKey === zo
      }
    }
    class Ko extends Uo {
      static getWebSocketProvider(t, e) {
        return new Go(t, e)
      }
      static getApiKey(t) {
        return null == t
          ? zo
          : (t &&
              'string' != typeof t &&
              Do.throwArgumentError('invalid apiKey', 'apiKey', t),
            t)
      }
      static getUrl(t, e) {
        let r = null
        switch (t.name) {
          case 'homestead':
            r = 'eth-mainnet.alchemyapi.io/v2/'
            break
          case 'ropsten':
            r = 'eth-ropsten.alchemyapi.io/v2/'
            break
          case 'rinkeby':
            r = 'eth-rinkeby.alchemyapi.io/v2/'
            break
          case 'goerli':
            r = 'eth-goerli.alchemyapi.io/v2/'
            break
          case 'kovan':
            r = 'eth-kovan.alchemyapi.io/v2/'
            break
          case 'matic':
            r = 'polygon-mainnet.g.alchemy.com/v2/'
            break
          case 'maticmum':
            r = 'polygon-mumbai.g.alchemy.com/v2/'
            break
          case 'arbitrum':
            r = 'arb-mainnet.g.alchemy.com/v2/'
            break
          case 'arbitrum-rinkeby':
            r = 'arb-rinkeby.g.alchemy.com/v2/'
            break
          case 'optimism':
            r = 'opt-mainnet.g.alchemy.com/v2/'
            break
          case 'optimism-kovan':
            r = 'opt-kovan.g.alchemy.com/v2/'
            break
          default:
            Do.throwArgumentError(
              'unsupported network',
              'network',
              arguments[0],
            )
        }
        return {
          allowGzip: !0,
          url: 'https://' + r + e,
          throttleCallback: (t, r) => (e === zo && Zi(), Promise.resolve(!0)),
        }
      }
      isCommunityResource() {
        return this.apiKey === zo
      }
    }
    var qo = function(t, e, r, n) {
      return new (r || (r = Promise))(function(i, o) {
        function s(t) {
          try {
            u(n.next(t))
          } catch (t) {
            o(t)
          }
        }
        function a(t) {
          try {
            u(n.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function(t) {
                    t(e)
                  })).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
      })
    }
    const Ho = new f.b('providers/5.5.3')
    class Vo extends Uo {
      static getApiKey(t) {
        return (
          null != t &&
            Ho.throwArgumentError(
              'apiKey not supported for cloudflare',
              'apiKey',
              t,
            ),
          null
        )
      }
      static getUrl(t, e) {
        let r = null
        switch (t.name) {
          case 'homestead':
            r = 'https://cloudflare-eth.com/'
            break
          default:
            Ho.throwArgumentError(
              'unsupported network',
              'network',
              arguments[0],
            )
        }
        return r
      }
      perform(t, e) {
        const r = Object.create(null, { perform: { get: () => super.perform } })
        return qo(this, void 0, void 0, function*() {
          if ('getBlockNumber' === t) {
            return (yield r.perform.call(this, 'getBlock', {
              blockTag: 'latest',
            })).number
          }
          return r.perform.call(this, t, e)
        })
      }
    }
    var Wo = function(t, e, r, n) {
      return new (r || (r = Promise))(function(i, o) {
        function s(t) {
          try {
            u(n.next(t))
          } catch (t) {
            o(t)
          }
        }
        function a(t) {
          try {
            u(n.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function(t) {
                    t(e)
                  })).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
      })
    }
    const Jo = new f.b('providers/5.5.3')
    function $o(t) {
      const e = {}
      for (let r in t) {
        if (null == t[r]) continue
        let n = t[r]
        ;('type' === r && 0 === n) ||
          ((n = {
            type: !0,
            gasLimit: !0,
            gasPrice: !0,
            maxFeePerGs: !0,
            maxPriorityFeePerGas: !0,
            nonce: !0,
            value: !0,
          }[r]
            ? Object(c.g)(Object(c.i)(n))
            : 'accessList' === r
            ? '[' +
              $e(n)
                .map(
                  t =>
                    `{address:"${t.address}",storageKeys:["${t.storageKeys.join(
                      '","',
                    )}"]}`,
                )
                .join(',') +
              ']'
            : Object(c.i)(n)),
          (e[r] = n))
      }
      return e
    }
    function Zo(t) {
      if (
        0 == t.status &&
        ('No records found' === t.message ||
          'No transactions found' === t.message)
      )
        return t.result
      if (1 != t.status || 'OK' != t.message) {
        const e = new Error('invalid response')
        throw ((e.result = JSON.stringify(t)),
        (t.result || '').toLowerCase().indexOf('rate limit') >= 0 &&
          (e.throttleRetry = !0),
        e)
      }
      return t.result
    }
    function Xo(t) {
      if (
        t &&
        0 == t.status &&
        'NOTOK' == t.message &&
        (t.result || '').toLowerCase().indexOf('rate limit') >= 0
      ) {
        const e = new Error('throttled response')
        throw ((e.result = JSON.stringify(t)), (e.throttleRetry = !0), e)
      }
      if ('2.0' != t.jsonrpc) {
        const e = new Error('invalid response')
        throw ((e.result = JSON.stringify(t)), e)
      }
      if (t.error) {
        const e = new Error(t.error.message || 'unknown error')
        throw (t.error.code && (e.code = t.error.code),
        t.error.data && (e.data = t.error.data),
        e)
      }
      return t.result
    }
    function Yo(t) {
      if ('pending' === t) throw new Error('pending not supported')
      return 'latest' === t ? t : parseInt(t.substring(2), 16)
    }
    function Qo(t, e, r) {
      if ('call' === t && e.code === f.b.errors.SERVER_ERROR) {
        const t = e.error
        if (
          t &&
          (t.message.match(/reverted/i) ||
            t.message.match(/VM execution error/i))
        ) {
          let r = t.data
          if ((r && (r = '0x' + r.replace(/^.*0x/i, '')), Object(c.l)(r)))
            return r
          Jo.throwError(
            'missing revert data in call exception',
            f.b.errors.CALL_EXCEPTION,
            { error: e, data: '0x' },
          )
        }
      }
      let n = e.message
      throw (e.code === f.b.errors.SERVER_ERROR &&
        (e.error && 'string' == typeof e.error.message
          ? (n = e.error.message)
          : 'string' == typeof e.body
          ? (n = e.body)
          : 'string' == typeof e.responseText && (n = e.responseText)),
      (n = (n || '').toLowerCase()),
      n.match(/insufficient funds/) &&
        Jo.throwError(
          'insufficient funds for intrinsic transaction cost',
          f.b.errors.INSUFFICIENT_FUNDS,
          { error: e, method: t, transaction: r },
        ),
      n.match(
        /same hash was already imported|transaction nonce is too low|nonce too low/,
      ) &&
        Jo.throwError('nonce has already been used', f.b.errors.NONCE_EXPIRED, {
          error: e,
          method: t,
          transaction: r,
        }),
      n.match(/another transaction with same nonce/) &&
        Jo.throwError(
          'replacement fee too low',
          f.b.errors.REPLACEMENT_UNDERPRICED,
          { error: e, method: t, transaction: r },
        ),
      n.match(/execution failed due to an exception|execution reverted/) &&
        Jo.throwError(
          'cannot estimate gas; transaction may fail or may require manual gas limit',
          f.b.errors.UNPREDICTABLE_GAS_LIMIT,
          { error: e, method: t, transaction: r },
        ),
      e)
    }
    class ts extends bo {
      constructor(t, e) {
        Jo.checkNew(new.target, ts),
          super(t),
          A(this, 'baseUrl', this.getBaseUrl()),
          A(this, 'apiKey', e || '9D13ZE7XSBTJ94N9BNJ2MA33VMAY2YPIRB')
      }
      getBaseUrl() {
        switch (this.network ? this.network.name : 'invalid') {
          case 'homestead':
            return 'https://api.etherscan.io'
          case 'ropsten':
            return 'https://api-ropsten.etherscan.io'
          case 'rinkeby':
            return 'https://api-rinkeby.etherscan.io'
          case 'kovan':
            return 'https://api-kovan.etherscan.io'
          case 'goerli':
            return 'https://api-goerli.etherscan.io'
        }
        return Jo.throwArgumentError('unsupported network', 'network', name)
      }
      getUrl(t, e) {
        const r = Object.keys(e).reduce((t, r) => {
            const n = e[r]
            return null != n && (t += `&${r}=${n}`), t
          }, ''),
          n = this.apiKey ? '&apikey=' + this.apiKey : ''
        return `${this.baseUrl}/api?module=${t}${r}${n}`
      }
      getPostUrl() {
        return this.baseUrl + '/api'
      }
      getPostData(t, e) {
        return (e.module = t), (e.apikey = this.apiKey), e
      }
      fetch(t, e, r) {
        return Wo(this, void 0, void 0, function*() {
          const n = r ? this.getPostUrl() : this.getUrl(t, e),
            i = r ? this.getPostData(t, e) : null,
            o = 'proxy' === t ? Xo : Zo
          this.emit('debug', { action: 'request', request: n, provider: this })
          const s = {
            url: n,
            throttleSlotInterval: 1e3,
            throttleCallback: (t, e) => (
              this.isCommunityResource() && Zi(), Promise.resolve(!0)
            ),
          }
          let a = null
          i &&
            ((s.headers = {
              'content-type':
                'application/x-www-form-urlencoded; charset=UTF-8',
            }),
            (a = Object.keys(i)
              .map(t => `${t}=${i[t]}`)
              .join('&')))
          const u = yield zi(s, a, o || Xo)
          return (
            this.emit('debug', {
              action: 'response',
              request: n,
              response: T(u),
              provider: this,
            }),
            u
          )
        })
      }
      detectNetwork() {
        return Wo(this, void 0, void 0, function*() {
          return this.network
        })
      }
      perform(t, e) {
        const r = Object.create(null, { perform: { get: () => super.perform } })
        return Wo(this, void 0, void 0, function*() {
          switch (t) {
            case 'getBlockNumber':
              return this.fetch('proxy', { action: 'eth_blockNumber' })
            case 'getGasPrice':
              return this.fetch('proxy', { action: 'eth_gasPrice' })
            case 'getBalance':
              return this.fetch('account', {
                action: 'balance',
                address: e.address,
                tag: e.blockTag,
              })
            case 'getTransactionCount':
              return this.fetch('proxy', {
                action: 'eth_getTransactionCount',
                address: e.address,
                tag: e.blockTag,
              })
            case 'getCode':
              return this.fetch('proxy', {
                action: 'eth_getCode',
                address: e.address,
                tag: e.blockTag,
              })
            case 'getStorageAt':
              return this.fetch('proxy', {
                action: 'eth_getStorageAt',
                address: e.address,
                position: e.position,
                tag: e.blockTag,
              })
            case 'sendTransaction':
              return this.fetch(
                'proxy',
                { action: 'eth_sendRawTransaction', hex: e.signedTransaction },
                !0,
              ).catch(t => Qo('sendTransaction', t, e.signedTransaction))
            case 'getBlock':
              if (e.blockTag)
                return this.fetch('proxy', {
                  action: 'eth_getBlockByNumber',
                  tag: e.blockTag,
                  boolean: e.includeTransactions ? 'true' : 'false',
                })
              throw new Error('getBlock by blockHash not implemented')
            case 'getTransaction':
              return this.fetch('proxy', {
                action: 'eth_getTransactionByHash',
                txhash: e.transactionHash,
              })
            case 'getTransactionReceipt':
              return this.fetch('proxy', {
                action: 'eth_getTransactionReceipt',
                txhash: e.transactionHash,
              })
            case 'call': {
              if ('latest' !== e.blockTag)
                throw new Error(
                  'EtherscanProvider does not support blockTag for call',
                )
              const t = $o(e.transaction)
              ;(t.module = 'proxy'), (t.action = 'eth_call')
              try {
                return yield this.fetch('proxy', t, !0)
              } catch (t) {
                return Qo('call', t, e.transaction)
              }
            }
            case 'estimateGas': {
              const t = $o(e.transaction)
              ;(t.module = 'proxy'), (t.action = 'eth_estimateGas')
              try {
                return yield this.fetch('proxy', t, !0)
              } catch (t) {
                return Qo('estimateGas', t, e.transaction)
              }
            }
            case 'getLogs': {
              const t = { action: 'getLogs' }
              if (
                (e.filter.fromBlock && (t.fromBlock = Yo(e.filter.fromBlock)),
                e.filter.toBlock && (t.toBlock = Yo(e.filter.toBlock)),
                e.filter.address && (t.address = e.filter.address),
                e.filter.topics &&
                  e.filter.topics.length > 0 &&
                  (e.filter.topics.length > 1 &&
                    Jo.throwError(
                      'unsupported topic count',
                      f.b.errors.UNSUPPORTED_OPERATION,
                      { topics: e.filter.topics },
                    ),
                  1 === e.filter.topics.length))
              ) {
                const r = e.filter.topics[0]
                ;('string' == typeof r && 66 === r.length) ||
                  Jo.throwError(
                    'unsupported topic format',
                    f.b.errors.UNSUPPORTED_OPERATION,
                    { topic0: r },
                  ),
                  (t.topic0 = r)
              }
              const r = yield this.fetch('logs', t)
              let n = {}
              for (let t = 0; t < r.length; t++) {
                const e = r[t]
                if (null == e.blockHash) {
                  if (null == n[e.blockNumber]) {
                    const t = yield this.getBlock(e.blockNumber)
                    t && (n[e.blockNumber] = t.hash)
                  }
                  e.blockHash = n[e.blockNumber]
                }
              }
              return r
            }
            case 'getEtherPrice':
              return 'homestead' !== this.network.name
                ? 0
                : parseFloat(
                    (yield this.fetch('stats', { action: 'ethprice' })).ethusd,
                  )
          }
          return r.perform.call(this, t, e)
        })
      }
      getHistory(t, e, r) {
        return Wo(this, void 0, void 0, function*() {
          const n = {
            action: 'txlist',
            address: yield this.resolveName(t),
            startblock: null == e ? 0 : e,
            endblock: null == r ? 99999999 : r,
            sort: 'asc',
          }
          return (yield this.fetch('account', n)).map(t => {
            ;['contractAddress', 'to'].forEach(function(e) {
              '' == t[e] && delete t[e]
            }),
              null == t.creates &&
                null != t.contractAddress &&
                (t.creates = t.contractAddress)
            const e = this.formatter.transactionResponse(t)
            return t.timeStamp && (e.timestamp = parseInt(t.timeStamp)), e
          })
        })
      }
      isCommunityResource() {
        return '9D13ZE7XSBTJ94N9BNJ2MA33VMAY2YPIRB' === this.apiKey
      }
    }
    function es(t) {
      for (let e = (t = t.slice()).length - 1; e > 0; e--) {
        const r = Math.floor(Math.random() * (e + 1)),
          n = t[e]
        ;(t[e] = t[r]), (t[r] = n)
      }
      return t
    }
    var rs = function(t, e, r, n) {
      return new (r || (r = Promise))(function(i, o) {
        function s(t) {
          try {
            u(n.next(t))
          } catch (t) {
            o(t)
          }
        }
        function a(t) {
          try {
            u(n.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function(t) {
                    t(e)
                  })).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
      })
    }
    const ns = new f.b('providers/5.5.3')
    function is() {
      return new Date().getTime()
    }
    function os(t) {
      let e = null
      for (let r = 0; r < t.length; r++) {
        const n = t[r]
        if (null == n) return null
        e
          ? (e.name === n.name &&
              e.chainId === n.chainId &&
              (e.ensAddress === n.ensAddress ||
                (null == e.ensAddress && null == n.ensAddress))) ||
            ns.throwArgumentError('provider mismatch', 'networks', t)
          : (e = n)
      }
      return e
    }
    function ss(t, e) {
      t = t.slice().sort()
      const r = Math.floor(t.length / 2)
      if (t.length % 2) return t[r]
      const n = t[r - 1],
        i = t[r]
      return null != e && Math.abs(n - i) > e ? null : (n + i) / 2
    }
    function as(t) {
      if (null === t) return 'null'
      if ('number' == typeof t || 'boolean' == typeof t)
        return JSON.stringify(t)
      if ('string' == typeof t) return t
      if (y.isBigNumber(t)) return t.toString()
      if (Array.isArray(t)) return JSON.stringify(t.map(t => as(t)))
      if ('object' == typeof t) {
        const e = Object.keys(t)
        return (
          e.sort(),
          '{' +
            e
              .map(e => {
                let r = t[e]
                return (
                  (r = 'function' == typeof r ? '[function]' : as(r)),
                  JSON.stringify(e) + ':' + r
                )
              })
              .join(',') +
            '}'
        )
      }
      throw new Error('unknown value type: ' + typeof t)
    }
    let us = 1
    function cs(t) {
      let e = null,
        r = null,
        n = new Promise(n => {
          ;(e = function() {
            r && (clearTimeout(r), (r = null)), n()
          }),
            (r = setTimeout(e, t))
        })
      return {
        cancel: e,
        getPromise: function() {
          return n
        },
        wait: t => ((n = n.then(t)), n),
      }
    }
    const ls = [
        f.b.errors.CALL_EXCEPTION,
        f.b.errors.INSUFFICIENT_FUNDS,
        f.b.errors.NONCE_EXPIRED,
        f.b.errors.REPLACEMENT_UNDERPRICED,
        f.b.errors.UNPREDICTABLE_GAS_LIMIT,
      ],
      hs = [
        'address',
        'args',
        'errorArgs',
        'errorSignature',
        'method',
        'transaction',
      ]
    function fs(t, e) {
      const r = { weight: t.weight }
      return (
        Object.defineProperty(r, 'provider', { get: () => t.provider }),
        t.start && (r.start = t.start),
        e && (r.duration = e - t.start),
        t.done &&
          (t.error ? (r.error = t.error) : (r.result = t.result || null)),
        r
      )
    }
    function ds(t, e, r) {
      let n = as
      switch (e) {
        case 'getBlockNumber':
          return function(e) {
            const r = e.map(t => t.result)
            let n = ss(e.map(t => t.result), 2)
            if (null != n)
              return (
                (n = Math.ceil(n)),
                r.indexOf(n + 1) >= 0 && n++,
                n >= t._highestBlockNumber && (t._highestBlockNumber = n),
                t._highestBlockNumber
              )
          }
        case 'getGasPrice':
          return function(t) {
            const e = t.map(t => t.result)
            return e.sort(), e[Math.floor(e.length / 2)]
          }
        case 'getEtherPrice':
          return function(t) {
            return ss(t.map(t => t.result))
          }
        case 'getBalance':
        case 'getTransactionCount':
        case 'getCode':
        case 'getStorageAt':
        case 'call':
        case 'estimateGas':
        case 'getLogs':
          break
        case 'getTransaction':
        case 'getTransactionReceipt':
          n = function(t) {
            return null == t ? null : (((t = N(t)).confirmations = -1), as(t))
          }
          break
        case 'getBlock':
          n = r.includeTransactions
            ? function(t) {
                return null == t
                  ? null
                  : (((t = N(t)).transactions = t.transactions.map(
                      t => (((t = N(t)).confirmations = -1), t),
                    )),
                    as(t))
              }
            : function(t) {
                return null == t ? null : as(t)
              }
          break
        default:
          throw new Error('unknown method: ' + e)
      }
      return (function(t, e) {
        return function(r) {
          const n = {}
          r.forEach(e => {
            const r = t(e.result)
            n[r] || (n[r] = { count: 0, result: e.result }), n[r].count++
          })
          const i = Object.keys(n)
          for (let t = 0; t < i.length; t++) {
            const r = n[i[t]]
            if (r.count >= e) return r.result
          }
        }
      })(n, t.quorum)
    }
    function ps(t, e) {
      return rs(this, void 0, void 0, function*() {
        const r = t.provider
        return (null != r.blockNumber && r.blockNumber >= e) || -1 === e
          ? r
          : Gi(
              () =>
                new Promise((n, i) => {
                  setTimeout(function() {
                    return r.blockNumber >= e
                      ? n(r)
                      : t.cancelled
                      ? n(null)
                      : n(void 0)
                  }, 0)
                }),
              { oncePoll: r },
            )
      })
    }
    function ms(t, e, r, n) {
      return rs(this, void 0, void 0, function*() {
        let i = t.provider
        switch (r) {
          case 'getBlockNumber':
          case 'getGasPrice':
            return i[r]()
          case 'getEtherPrice':
            if (i.getEtherPrice) return i.getEtherPrice()
            break
          case 'getBalance':
          case 'getTransactionCount':
          case 'getCode':
            return (
              n.blockTag && Object(c.l)(n.blockTag) && (i = yield ps(t, e)),
              i[r](n.address, n.blockTag || 'latest')
            )
          case 'getStorageAt':
            return (
              n.blockTag && Object(c.l)(n.blockTag) && (i = yield ps(t, e)),
              i.getStorageAt(n.address, n.position, n.blockTag || 'latest')
            )
          case 'getBlock':
            return (
              n.blockTag && Object(c.l)(n.blockTag) && (i = yield ps(t, e)),
              i[
                n.includeTransactions ? 'getBlockWithTransactions' : 'getBlock'
              ](n.blockTag || n.blockHash)
            )
          case 'call':
          case 'estimateGas':
            return (
              n.blockTag && Object(c.l)(n.blockTag) && (i = yield ps(t, e)),
              i[r](n.transaction)
            )
          case 'getTransaction':
          case 'getTransactionReceipt':
            return i[r](n.transactionHash)
          case 'getLogs': {
            let r = n.filter
            return (
              ((r.fromBlock && Object(c.l)(r.fromBlock)) ||
                (r.toBlock && Object(c.l)(r.toBlock))) &&
                (i = yield ps(t, e)),
              i.getLogs(r)
            )
          }
        }
        return ns.throwError('unknown method error', f.b.errors.UNKNOWN_ERROR, {
          method: r,
          params: n,
        })
      })
    }
    class gs extends bo {
      constructor(t, e) {
        ns.checkNew(new.target, gs),
          0 === t.length &&
            ns.throwArgumentError('missing providers', 'providers', t)
        const r = t.map((t, e) => {
            if (Se.isProvider(t)) {
              const e = Ji(t) ? 2e3 : 750,
                r = 1
              return Object.freeze({
                provider: t,
                weight: 1,
                stallTimeout: e,
                priority: r,
              })
            }
            const r = N(t)
            null == r.priority && (r.priority = 1),
              null == r.stallTimeout && (r.stallTimeout = Ji(t) ? 2e3 : 750),
              null == r.weight && (r.weight = 1)
            const n = r.weight
            return (
              (n % 1 || n > 512 || n < 1) &&
                ns.throwArgumentError(
                  'invalid weight; must be integer in [1, 512]',
                  `providers[${e}].weight`,
                  n,
                ),
              Object.freeze(r)
            )
          }),
          n = r.reduce((t, e) => t + e.weight, 0)
        null == e
          ? (e = n / 2)
          : e > n &&
            ns.throwArgumentError(
              'quorum will always fail; larger than total weight',
              'quorum',
              e,
            )
        let i = os(r.map(t => t.provider.network))
        null == i &&
          (i = new Promise((t, e) => {
            setTimeout(() => {
              this.detectNetwork().then(t, e)
            }, 0)
          })),
          super(i),
          A(this, 'providerConfigs', Object.freeze(r)),
          A(this, 'quorum', e),
          (this._highestBlockNumber = -1)
      }
      detectNetwork() {
        return rs(this, void 0, void 0, function*() {
          return os(
            yield Promise.all(
              this.providerConfigs.map(t => t.provider.getNetwork()),
            ),
          )
        })
      }
      perform(t, e) {
        return rs(this, void 0, void 0, function*() {
          if ('sendTransaction' === t) {
            const t = yield Promise.all(
              this.providerConfigs.map(t =>
                t.provider
                  .sendTransaction(e.signedTransaction)
                  .then(t => t.hash, t => t),
              ),
            )
            for (let e = 0; e < t.length; e++) {
              const r = t[e]
              if ('string' == typeof r) return r
            }
            throw t[0]
          }
          ;-1 === this._highestBlockNumber &&
            'getBlockNumber' !== t &&
            (yield this.getBlockNumber())
          const r = ds(this, t, e),
            n = es(this.providerConfigs.map(N))
          n.sort((t, e) => t.priority - e.priority)
          const i = this._highestBlockNumber
          let o = 0,
            s = !0
          for (;;) {
            const a = is()
            let u = n
              .filter(t => t.runner && a - t.start < t.stallTimeout)
              .reduce((t, e) => t + e.weight, 0)
            for (; u < this.quorum && o < n.length; ) {
              const r = n[o++],
                s = us++
              ;(r.start = is()),
                (r.staller = cs(r.stallTimeout)),
                r.staller.wait(() => {
                  r.staller = null
                }),
                (r.runner = ms(r, i, t, e).then(
                  n => {
                    ;(r.done = !0),
                      (r.result = n),
                      this.listenerCount('debug') &&
                        this.emit('debug', {
                          action: 'request',
                          rid: s,
                          backend: fs(r, is()),
                          request: { method: t, params: T(e) },
                          provider: this,
                        })
                  },
                  n => {
                    ;(r.done = !0),
                      (r.error = n),
                      this.listenerCount('debug') &&
                        this.emit('debug', {
                          action: 'request',
                          rid: s,
                          backend: fs(r, is()),
                          request: { method: t, params: T(e) },
                          provider: this,
                        })
                  },
                )),
                this.listenerCount('debug') &&
                  this.emit('debug', {
                    action: 'request',
                    rid: s,
                    backend: fs(r, null),
                    request: { method: t, params: T(e) },
                    provider: this,
                  }),
                (u += r.weight)
            }
            const c = []
            n.forEach(t => {
              !t.done &&
                t.runner &&
                (c.push(t.runner), t.staller && c.push(t.staller.getPromise()))
            }),
              c.length && (yield Promise.race(c))
            const l = n.filter(t => t.done && null == t.error)
            if (l.length >= this.quorum) {
              const t = r(l)
              if (void 0 !== t)
                return (
                  n.forEach(t => {
                    t.staller && t.staller.cancel(), (t.cancelled = !0)
                  }),
                  t
                )
              s || (yield cs(100).getPromise()), (s = !1)
            }
            const h = n.reduce((t, e) => {
              if (!e.done || null == e.error) return t
              const r = e.error.code
              return (
                ls.indexOf(r) >= 0 &&
                  (t[r] || (t[r] = { error: e.error, weight: 0 }),
                  (t[r].weight += e.weight)),
                t
              )
            }, {})
            if (
              (Object.keys(h).forEach(t => {
                const e = h[t]
                if (e.weight < this.quorum) return
                n.forEach(t => {
                  t.staller && t.staller.cancel(), (t.cancelled = !0)
                })
                const r = e.error,
                  i = {}
                hs.forEach(t => {
                  null != r[t] && (i[t] = r[t])
                }),
                  ns.throwError(r.reason || r.message, t, i)
              }),
              0 === n.filter(t => !t.done).length)
            )
              break
          }
          return (
            n.forEach(t => {
              t.staller && t.staller.cancel(), (t.cancelled = !0)
            }),
            ns.throwError('failed to meet quorum', f.b.errors.SERVER_ERROR, {
              method: t,
              params: e,
              results: n.map(t => fs(t)),
              provider: this,
            })
          )
        })
      }
    }
    const ys = null,
      bs = new f.b('providers/5.5.3'),
      vs = '84842078b09946638c03157f83405213'
    class ws extends jo {
      constructor(t, e) {
        const r = new Es(t, e),
          n = r.connection
        n.password &&
          bs.throwError(
            'INFURA WebSocket project secrets unsupported',
            f.b.errors.UNSUPPORTED_OPERATION,
            { operation: 'InfuraProvider.getWebSocketProvider()' },
          )
        super(n.url.replace(/^http/i, 'ws').replace('/v3/', '/ws/v3/'), t),
          A(this, 'apiKey', r.projectId),
          A(this, 'projectId', r.projectId),
          A(this, 'projectSecret', r.projectSecret)
      }
      isCommunityResource() {
        return this.projectId === vs
      }
    }
    class Es extends Uo {
      static getWebSocketProvider(t, e) {
        return new ws(t, e)
      }
      static getApiKey(t) {
        const e = { apiKey: vs, projectId: vs, projectSecret: null }
        return (
          null == t ||
            ('string' == typeof t
              ? (e.projectId = t)
              : null != t.projectSecret
              ? (bs.assertArgument(
                  'string' == typeof t.projectId,
                  'projectSecret requires a projectId',
                  'projectId',
                  t.projectId,
                ),
                bs.assertArgument(
                  'string' == typeof t.projectSecret,
                  'invalid projectSecret',
                  'projectSecret',
                  '[REDACTED]',
                ),
                (e.projectId = t.projectId),
                (e.projectSecret = t.projectSecret))
              : t.projectId && (e.projectId = t.projectId),
            (e.apiKey = e.projectId)),
          e
        )
      }
      static getUrl(t, e) {
        let r = null
        switch (t ? t.name : 'unknown') {
          case 'homestead':
            r = 'mainnet.infura.io'
            break
          case 'ropsten':
            r = 'ropsten.infura.io'
            break
          case 'rinkeby':
            r = 'rinkeby.infura.io'
            break
          case 'kovan':
            r = 'kovan.infura.io'
            break
          case 'goerli':
            r = 'goerli.infura.io'
            break
          case 'matic':
            r = 'polygon-mainnet.infura.io'
            break
          case 'maticmum':
            r = 'polygon-mumbai.infura.io'
            break
          case 'optimism':
            r = 'optimism-mainnet.infura.io'
            break
          case 'optimism-kovan':
            r = 'optimism-kovan.infura.io'
            break
          case 'arbitrum':
            r = 'arbitrum-mainnet.infura.io'
            break
          case 'arbitrum-rinkeby':
            r = 'arbitrum-rinkeby.infura.io'
            break
          default:
            bs.throwError('unsupported network', f.b.errors.INVALID_ARGUMENT, {
              argument: 'network',
              value: t,
            })
        }
        const n = {
          allowGzip: !0,
          url: 'https://' + r + '/v3/' + e.projectId,
          throttleCallback: (t, r) => (
            e.projectId === vs && Zi(), Promise.resolve(!0)
          ),
        }
        return (
          null != e.projectSecret &&
            ((n.user = ''), (n.password = e.projectSecret)),
          n
        )
      }
      isCommunityResource() {
        return this.projectId === vs
      }
    }
    class _s extends Mo {
      send(t, e) {
        const r = { method: t, params: e, id: this._nextId++, jsonrpc: '2.0' }
        null == this._pendingBatch && (this._pendingBatch = [])
        const n = { request: r, resolve: null, reject: null },
          i = new Promise((t, e) => {
            ;(n.resolve = t), (n.reject = e)
          })
        return (
          this._pendingBatch.push(n),
          this._pendingBatchAggregator ||
            (this._pendingBatchAggregator = setTimeout(() => {
              const t = this._pendingBatch
              ;(this._pendingBatch = null),
                (this._pendingBatchAggregator = null)
              const e = t.map(t => t.request)
              return (
                this.emit('debug', {
                  action: 'requestBatch',
                  request: T(e),
                  provider: this,
                }),
                zi(this.connection, JSON.stringify(e)).then(
                  r => {
                    this.emit('debug', {
                      action: 'response',
                      request: e,
                      response: r,
                      provider: this,
                    }),
                      t.forEach((t, e) => {
                        const n = r[e]
                        if (n.error) {
                          const e = new Error(n.error.message)
                          ;(e.code = n.error.code),
                            (e.data = n.error.data),
                            t.reject(e)
                        } else t.resolve(n.result)
                      })
                  },
                  r => {
                    this.emit('debug', {
                      action: 'response',
                      error: r,
                      request: e,
                      provider: this,
                    }),
                      t.forEach(t => {
                        t.reject(r)
                      })
                  },
                )
              )
            }, 10)),
          i
        )
      }
    }
    const ks = new f.b('providers/5.5.3')
    class As extends Uo {
      static getApiKey(t) {
        return (
          t &&
            'string' != typeof t &&
            ks.throwArgumentError('invalid apiKey', 'apiKey', t),
          t || 'ETHERS_JS_SHARED'
        )
      }
      static getUrl(t, e) {
        ks.warn(
          'NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.',
        )
        let r = null
        switch (t.name) {
          case 'homestead':
            r = 'https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc'
            break
          case 'ropsten':
            r = 'https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc'
            break
          case 'rinkeby':
            r = 'https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc'
            break
          case 'goerli':
            r = 'https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc'
            break
          case 'kovan':
            r = 'https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc'
            break
          default:
            ks.throwArgumentError(
              'unsupported network',
              'network',
              arguments[0],
            )
        }
        return r + '?apiKey=' + e
      }
    }
    const Ss = new f.b('providers/5.5.3'),
      Ps = {
        homestead: '6004bcd10040261633ade990',
        ropsten: '6004bd4d0040261633ade991',
        rinkeby: '6004bda20040261633ade994',
        goerli: '6004bd860040261633ade992',
      }
    class Os extends Uo {
      constructor(t, e) {
        if (null == e) {
          const r = S(new.target, 'getNetwork')(t)
          if (r) {
            const t = Ps[r.name]
            t && (e = { applicationId: t, loadBalancer: !0 })
          }
          null == e &&
            Ss.throwError('unsupported network', f.b.errors.INVALID_ARGUMENT, {
              argument: 'network',
              value: t,
            })
        }
        super(t, e)
      }
      static getApiKey(t) {
        null == t &&
          Ss.throwArgumentError(
            'PocketProvider.getApiKey does not support null apiKey',
            'apiKey',
            t,
          )
        const e = {
          applicationId: null,
          loadBalancer: !1,
          applicationSecretKey: null,
        }
        return (
          'string' == typeof t
            ? (e.applicationId = t)
            : null != t.applicationSecretKey
            ? (Ss.assertArgument(
                'string' == typeof t.applicationId,
                'applicationSecretKey requires an applicationId',
                'applicationId',
                t.applicationId,
              ),
              Ss.assertArgument(
                'string' == typeof t.applicationSecretKey,
                'invalid applicationSecretKey',
                'applicationSecretKey',
                '[REDACTED]',
              ),
              (e.applicationId = t.applicationId),
              (e.applicationSecretKey = t.applicationSecretKey),
              (e.loadBalancer = !!t.loadBalancer))
            : t.applicationId
            ? (Ss.assertArgument(
                'string' == typeof t.applicationId,
                'apiKey.applicationId must be a string',
                'apiKey.applicationId',
                t.applicationId,
              ),
              (e.applicationId = t.applicationId),
              (e.loadBalancer = !!t.loadBalancer))
            : Ss.throwArgumentError(
                'unsupported PocketProvider apiKey',
                'apiKey',
                t,
              ),
          e
        )
      }
      static getUrl(t, e) {
        let r = null
        switch (t ? t.name : 'unknown') {
          case 'homestead':
            r = 'eth-mainnet.gateway.pokt.network'
            break
          case 'ropsten':
            r = 'eth-ropsten.gateway.pokt.network'
            break
          case 'rinkeby':
            r = 'eth-rinkeby.gateway.pokt.network'
            break
          case 'goerli':
            r = 'eth-goerli.gateway.pokt.network'
            break
          default:
            Ss.throwError('unsupported network', f.b.errors.INVALID_ARGUMENT, {
              argument: 'network',
              value: t,
            })
        }
        let n = null
        n = e.loadBalancer
          ? `https://${r}/v1/lb/${e.applicationId}`
          : `https://${r}/v1/${e.applicationId}`
        const i = { url: n, headers: {} }
        return (
          null != e.applicationSecretKey &&
            ((i.user = ''), (i.password = e.applicationSecretKey)),
          i
        )
      }
      isCommunityResource() {
        return this.applicationId === Ps[this.network.name]
      }
    }
    const Ns = new f.b('providers/5.5.3')
    let xs = 1
    function Ms(t, e) {
      const r = 'Web3LegacyFetcher'
      return function(t, n) {
        const i = { method: t, params: n, id: xs++, jsonrpc: '2.0' }
        return new Promise((t, n) => {
          this.emit('debug', {
            action: 'request',
            fetcher: r,
            request: T(i),
            provider: this,
          }),
            e(i, (e, o) => {
              if (e)
                return (
                  this.emit('debug', {
                    action: 'response',
                    fetcher: r,
                    error: e,
                    request: i,
                    provider: this,
                  }),
                  n(e)
                )
              if (
                (this.emit('debug', {
                  action: 'response',
                  fetcher: r,
                  request: i,
                  response: o,
                  provider: this,
                }),
                o.error)
              ) {
                const t = new Error(o.error.message)
                return (t.code = o.error.code), (t.data = o.error.data), n(t)
              }
              t(o.result)
            })
        })
      }
    }
    class Ts extends Mo {
      constructor(t, e) {
        Ns.checkNew(new.target, Ts),
          null == t && Ns.throwArgumentError('missing provider', 'provider', t)
        let r = null,
          n = null,
          i = null
        'function' == typeof t
          ? ((r = 'unknown:'), (n = t))
          : ((r = t.host || t.path || ''),
            !r && t.isMetaMask && (r = 'metamask'),
            (i = t),
            t.request
              ? ('' === r && (r = 'eip-1193:'),
                (n = (function(t) {
                  return function(e, r) {
                    null == r && (r = [])
                    const n = { method: e, params: r }
                    return (
                      this.emit('debug', {
                        action: 'request',
                        fetcher: 'Eip1193Fetcher',
                        request: T(n),
                        provider: this,
                      }),
                      t.request(n).then(
                        t => (
                          this.emit('debug', {
                            action: 'response',
                            fetcher: 'Eip1193Fetcher',
                            request: n,
                            response: t,
                            provider: this,
                          }),
                          t
                        ),
                        t => {
                          throw (this.emit('debug', {
                            action: 'response',
                            fetcher: 'Eip1193Fetcher',
                            request: n,
                            error: t,
                            provider: this,
                          }),
                          t)
                        },
                      )
                    )
                  }
                })(t)))
              : t.sendAsync
              ? (n = Ms(0, t.sendAsync.bind(t)))
              : t.send
              ? (n = Ms(0, t.send.bind(t)))
              : Ns.throwArgumentError('unsupported provider', 'provider', t),
            r || (r = 'unknown:')),
          super(r, e),
          A(this, 'jsonRpcFetchFunc', n),
          A(this, 'provider', i)
      }
      send(t, e) {
        return this.jsonRpcFetchFunc(t, e)
      }
    }
    const Is = new f.b('providers/5.5.3')
    function Rs(t, e) {
      if ((null == t && (t = 'homestead'), 'string' == typeof t)) {
        const e = t.match(/^(ws|http)s?:/i)
        if (e)
          switch (e[1]) {
            case 'http':
              return new Mo(t)
            case 'ws':
              return new jo(t)
            default:
              Is.throwArgumentError('unsupported URL scheme', 'network', t)
          }
      }
      const r = mi(t)
      return (
        (r && r._defaultProvider) ||
          Is.throwError(
            'unsupported getDefaultProvider network',
            f.b.errors.NETWORK_ERROR,
            { operation: 'getDefaultProvider', network: t },
          ),
        r._defaultProvider(
          {
            FallbackProvider: gs,
            AlchemyProvider: Ko,
            CloudflareProvider: Vo,
            EtherscanProvider: ts,
            InfuraProvider: Es,
            JsonRpcProvider: Mo,
            NodesmithProvider: As,
            PocketProvider: Os,
            Web3Provider: Ts,
            IpcProvider: ys,
          },
          e,
        )
      )
    }
    const Cs = new RegExp('^bytes([0-9]+)$'),
      js = new RegExp('^(u?int)([0-9]*)$'),
      Bs = new RegExp('^(.*)\\[([0-9]*)\\]$'),
      Fs = new f.b('solidity/5.5.0')
    function Ls(t, e) {
      t.length != e.length &&
        Fs.throwArgumentError(
          'wrong number of values; expected ${ types.length }',
          'values',
          e,
        )
      const r = []
      return (
        t.forEach(function(t, n) {
          r.push(
            (function t(e, r, n) {
              switch (e) {
                case 'address':
                  return n ? Object(c.p)(r, 32) : Object(c.a)(r)
                case 'string':
                  return ht(r)
                case 'bytes':
                  return Object(c.a)(r)
                case 'bool':
                  return (
                    (r = r ? '0x01' : '0x00'),
                    n ? Object(c.p)(r, 32) : Object(c.a)(r)
                  )
              }
              let i = e.match(js)
              if (i) {
                let t = parseInt(i[2] || '256')
                return (
                  ((i[2] && String(t) !== i[2]) ||
                    t % 8 != 0 ||
                    0 === t ||
                    t > 256) &&
                    Fs.throwArgumentError('invalid number type', 'type', e),
                  n && (t = 256),
                  (r = y.from(r).toTwos(t)),
                  Object(c.p)(r, t / 8)
                )
              }
              if (((i = e.match(Cs)), i)) {
                const t = parseInt(i[1])
                return (
                  (String(t) !== i[1] || 0 === t || t > 32) &&
                    Fs.throwArgumentError('invalid bytes type', 'type', e),
                  Object(c.a)(r).byteLength !== t &&
                    Fs.throwArgumentError('invalid value for ' + e, 'value', r),
                  n
                    ? Object(c.a)(
                        (
                          r +
                          '0000000000000000000000000000000000000000000000000000000000000000'
                        ).substring(0, 66),
                      )
                    : r
                )
              }
              if (((i = e.match(Bs)), i && Array.isArray(r))) {
                const n = i[1]
                parseInt(i[2] || String(r.length)) != r.length &&
                  Fs.throwArgumentError(
                    'invalid array length for ' + e,
                    'value',
                    r,
                  )
                const o = []
                return (
                  r.forEach(function(e) {
                    o.push(t(n, e, !0))
                  }),
                  Object(c.b)(o)
                )
              }
              return Fs.throwArgumentError('invalid type', 'type', e)
            })(t, e[n]),
          )
        }),
        Object(c.i)(Object(c.b)(r))
      )
    }
    function Us(t, e) {
      return D(Ls(t, e))
    }
    function Ds(t, e) {
      return rn(Ls(t, e))
    }
    function zs(t) {
      const e = ht(t)
      if (e.length > 31)
        throw new Error('bytes32 string must be less than 32 bytes')
      return Object(c.i)(Object(c.b)([e, si]).slice(0, 32))
    }
    function Gs(t) {
      const e = Object(c.a)(t)
      if (32 !== e.length)
        throw new Error('invalid bytes32 - not 32 bytes long')
      if (0 !== e[31])
        throw new Error('invalid bytes32 string - no null terminator')
      let r = 31
      for (; 0 === e[r - 1]; ) r--
      return mt(e.slice(0, r))
    }
    const Ks = new f.b('units/5.5.0'),
      qs = ['wei', 'kwei', 'mwei', 'gwei', 'szabo', 'finney', 'ether']
    function Hs(t) {
      const e = String(t).split('.')
      ;(e.length > 2 ||
        !e[0].match(/^-?[0-9]*$/) ||
        (e[1] && !e[1].match(/^[0-9]*$/)) ||
        '.' === t ||
        '-.' === t) &&
        Ks.throwArgumentError('invalid value', 'value', t)
      let r = e[0],
        n = ''
      for (
        '-' === r.substring(0, 1) && ((n = '-'), (r = r.substring(1)));
        '0' === r.substring(0, 1);

      )
        r = r.substring(1)
      '' === r && (r = '0')
      let i = ''
      for (
        2 === e.length && (i = '.' + (e[1] || '0'));
        i.length > 2 && '0' === i[i.length - 1];

      )
        i = i.substring(0, i.length - 1)
      const o = []
      for (; r.length; ) {
        if (r.length <= 3) {
          o.unshift(r)
          break
        }
        {
          const t = r.length - 3
          o.unshift(r.substring(t)), (r = r.substring(0, t))
        }
      }
      return n + o.join(',') + i
    }
    function Vs(t, e) {
      if ('string' == typeof e) {
        const t = qs.indexOf(e)
        ;-1 !== t && (e = 3 * t)
      }
      return Pr(t, null != e ? e : 18)
    }
    function Ws(t, e) {
      if (
        ('string' != typeof t &&
          Ks.throwArgumentError('value must be a string', 'value', t),
        'string' == typeof e)
      ) {
        const t = qs.indexOf(e)
        ;-1 !== t && (e = 3 * t)
      }
      return Or(t, null != e ? e : 18)
    }
    function Js(t) {
      return Vs(t, 18)
    }
    function $s(t) {
      return Ws(t, 18)
    }
    const Zs = 'ethers/5.5.4',
      Xs = new f.b(Zs)
    try {
      const t = window
      null == t._ethers && (t._ethers = u)
    } catch (t) {}
    const Ys = {
        locks: { '0x889559AD98a3438bA6D471491A8Cd9c7C4c640b6': { network: 4 } },
        pessimistic: !0,
      },
      Qs = {
        1: '',
        4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        100: '',
        10: '',
      }
    var ta = async t => {
      const e = Object.keys(Ys.locks).map(e =>
        (async (t, e, r) => {
          const n = new u.providers.JsonRpcProvider(Qs[t], t),
            i = new u.Contract(
              e,
              [
                {
                  constant: !0,
                  inputs: [
                    {
                      internalType: 'address',
                      name: '_keyOwner',
                      type: 'address',
                    },
                  ],
                  name: 'getHasValidKey',
                  outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                  payable: !1,
                  stateMutability: 'view',
                  type: 'function',
                },
              ],
              n,
            )
          return await i.getHasValidKey(r)
        })(Ys.locks[e].network, e, t),
      )
      return !![await Promise.all(e)].find(t => t)
    }
    const ea = 'UnlockWorker_',
      ra = (t, e) => {
        const r = new URL(e.url)
        r.searchParams.append('digest', t)
        const n = new URL('https://app.unlock-protocol.com/checkout')
        return (
          (Ys.messageToSign = t),
          n.searchParams.append('paywallConfig', JSON.stringify(Ys)),
          n.searchParams.append('redirectUri', r.toString()),
          Response.redirect(n.toString(), 302)
        )
      }
    addEventListener('fetch', t => {
      t.respondWith(
        (async function(t) {
          let { signature: e, digest: r } = (t => {
            const e = t.headers.get('Cookie') || ''
            if (!e) return {}
            const r = Object.fromEntries(e.split('; ').map(t => t.split('=')))
            new URL(t.url)
            return {
              signature: r[ea + 'signature']
                ? decodeURIComponent(r[ea + 'signature'])
                : '',
              digest: r[ea + 'message']
                ? decodeURIComponent(r[ea + 'message'])
                : '',
            }
          })(t)
          const n = new URL(t.url)
          n.searchParams.get('signature') &&
            n.searchParams.get('digest') &&
            ((e = n.searchParams.get('signature')),
            (r = n.searchParams.get('digest')))
          const i = `Signing into ${
            n.hostname
          }\nTime: ${new Date().toISOString()}`
          if (!e) return ra(i, t)
          if (
            (t => {
              if (!t) return !0
              const e = t.match(/Time: (.*)/)
              if (!e) return !0
              const r = new Date(e[1])
              return new Date().getTime() - r.getTime() > 6e4
            })(r)
          )
            return ra(i, t)
          const o = u.utils.verifyMessage(r, e)
          if (!(await ta(o))) return ra(i, t)
          const s = await fetch(t)
          return ((t, e, r) => {
            const n = new Response(t.body, t)
            return (
              n.headers.append(
                'Set-Cookie',
                `${ea}signature=${encodeURIComponent(e)};path=/`,
              ),
              n.headers.append(
                'Set-Cookie',
                `${ea}message=${encodeURIComponent(r)};path=/`,
              ),
              n
            )
          })(s, e, i)
        })(t.request),
      )
    })
  },
  function(t, e, r) {
    'use strict'
    ;(function(t) {
      r.d(e, 'a', function() {
        return c
      })
      var n = r(0),
        i = r(1),
        o = r(23)
      const s = new i.b(o.a)
      const a = (function() {
        if ('undefined' != typeof self) return self
        if ('undefined' != typeof window) return window
        if (void 0 !== t) return t
        throw new Error('unable to locate global object')
      })()
      let u = a.crypto || a.msCrypto
      function c(t) {
        ;(t <= 0 || t > 1024 || t % 1 || t != t) &&
          s.throwArgumentError('invalid length', 'length', t)
        const e = new Uint8Array(t)
        return u.getRandomValues(e), Object(n.a)(e)
      }
      ;(u && u.getRandomValues) ||
        (s.warn('WARNING: Missing strong random number source'),
        (u = {
          getRandomValues: function(t) {
            return s.throwError(
              'no secure random source avaialble',
              i.b.errors.UNSUPPORTED_OPERATION,
              { operation: 'crypto.getRandomValues' },
            )
          },
        }))
    }.call(this, r(10)))
  },
])
